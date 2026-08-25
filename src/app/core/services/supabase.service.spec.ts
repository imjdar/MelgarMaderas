import { describe, it, expect, beforeEach, vi } from 'vitest';
import { SupabaseService, OrdenServicioPayload } from './supabase.service';

describe('SupabaseService Unit Tests', () => {
  let service: SupabaseService;
  let mockSupabaseClient: any;

  beforeEach(() => {
    mockSupabaseClient = {
      auth: {
        getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
        onAuthStateChange: vi.fn().mockReturnValue({ data: { subscription: { unsubscribe: vi.fn() } } }),
        signOut: vi.fn().mockResolvedValue({ error: null })
      },
      rpc: vi.fn(),
      from: vi.fn().mockReturnValue({
        select: vi.fn().mockReturnThis(),
        eq: vi.fn().mockReturnThis(),
        single: vi.fn().mockResolvedValue({ data: { id: 'ORD-999', pin_acceso: '123456' }, error: null })
      })
    };

    service = new SupabaseService();
    service.setSupabaseClient(mockSupabaseClient);
  });

  it('debe inicializar los Signals con valores por defecto', () => {
    expect(service.session()).toBeNull();
    expect(service.user()).toBeNull();
    expect(service.tenantId()).toBe('taller-quito-centro');
    expect(service.loading()).toBe(false);
    expect(service.lastError()).toBeNull();
  });

  it('debe registrar un servicio exitosamente vía RPC', async () => {
    mockSupabaseClient.rpc.mockResolvedValue({
      data: { orden_id: 'ORD-123456' },
      error: null
    });

    const payload: OrdenServicioPayload = {
      placa: 'PBA-1234',
      kilometraje: 45000,
      repuestosJson: [
        { id: 'R1', codigo: 'FIL-01', nombre: 'Filtro de Aceite', cantidad: 1, precio_unitario: 12.50 }
      ],
      observaciones: 'Cambio de aceite sintético 10W-30 en Quito'
    };

    const promise = service.registrarServicio(payload);
    expect(service.loading()).toBe(true);

    const res = await promise;
    expect(service.loading()).toBe(false);
    expect(res.success).toBe(true);
    expect(res.orden_id).toBe('ORD-123456');
    expect(service.lastError()).toBeNull();
    expect(mockSupabaseClient.rpc).toHaveBeenCalledWith(
      'registrar_servicio_transaccional',
      expect.objectContaining({
        p_tenant_id: 'taller-quito-centro',
        p_placa: 'PBA-1234',
        p_kilometraje: 45000
      })
    );
  });

  it('debe capturar errores de stock insuficiente adecuadamente', async () => {
    mockSupabaseClient.rpc.mockResolvedValue({
      data: null,
      error: { message: 'STOCK_INSUFICIENTE: Repuesto R1 sin stock suficiente', code: 'P0001' }
    });

    const payload: OrdenServicioPayload = {
      placa: 'PXX-9999',
      kilometraje: 120000,
      repuestosJson: [
        { id: 'R1', codigo: 'PAQ-02', nombre: 'Pastillas de Freno', cantidad: 10, precio_unitario: 45.00 }
      ]
    };

    const res = await service.registrarServicio(payload);
    expect(res.success).toBe(false);
    expect(res.error).toContain('Error de inventario');
    expect(service.lastError()).toContain('Error de inventario');
    expect(service.loading()).toBe(false);
  });

  it('debe rechazar llamadas con datos de entrada inválidos sin llamar a RPC', async () => {
    const payload: OrdenServicioPayload = {
      placa: '',
      kilometraje: -100,
      repuestosJson: []
    };

    const res = await service.registrarServicio(payload);
    expect(res.success).toBe(false);
    expect(res.error).toBe('PLACA_O_KILOMETRAJE_INVALIDO');
    expect(mockSupabaseClient.rpc).not.toHaveBeenCalled();
  });

  it('debe consultar el estado de una orden por PIN público', async () => {
    const res = await service.consultarEstadoPorPin('123456');
    expect(res.success).toBe(true);
    expect(res.data).toBeDefined();
    expect(res.data.id).toBe('ORD-999');
  });

  it('debe cerrar sesión correctamente', async () => {
    await service.signOut();
    expect(mockSupabaseClient.auth.signOut).toHaveBeenCalled();
    expect(service.session()).toBeNull();
  });
});
