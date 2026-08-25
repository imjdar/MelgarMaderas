import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';
import { createClient, SupabaseClient, Session, User } from '@supabase/supabase-js';

export interface RepuestoItem {
  id: string;
  codigo: string;
  nombre: string;
  cantidad: number;
  precio_unitario: number;
}

export interface OrdenServicioPayload {
  placa: string;
  kilometraje: number;
  repuestosJson: RepuestoItem[];
  observaciones?: string;
}

export interface RegistrarServicioResponse {
  success: boolean;
  orden_id?: string;
  error?: string;
  codigo_error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  // Signals para gestión síncrona del estado en la UI
  public readonly session: WritableSignal<Session | null> = signal<Session | null>(null);
  public readonly user: Signal<User | null> = computed(() => this.session()?.user ?? null);
  public readonly tenantId: WritableSignal<string | null> = signal<string | null>('taller-quito-centro');
  public readonly loading: WritableSignal<boolean> = signal<boolean>(false);
  public readonly lastError: WritableSignal<string | null> = signal<string | null>(null);

  constructor() {
    const supabaseUrl = (typeof process !== 'undefined' && process.env?.['SUPABASE_URL']) 
      ? process.env['SUPABASE_URL'] 
      : 'https://talleres-quito-multi.supabase.co';
    const supabaseKey = (typeof process !== 'undefined' && process.env?.['SUPABASE_ANON_KEY']) 
      ? process.env['SUPABASE_ANON_KEY'] 
      : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummykeyforclient';

    this.supabase = createClient(supabaseUrl, supabaseKey);

    // Inicializar listener de estado de auth
    this.supabase.auth.getSession().then(({ data }) => {
      this.session.set(data.session);
    });

    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.session.set(session);
    });
  }

  /**
   * Permite inyectar un cliente mock de Supabase para pruebas unitarias.
   */
  public setSupabaseClient(client: SupabaseClient): void {
    this.supabase = client;
  }

  /**
   * Registra una orden de servicio de forma transaccional mediante RPC en la base de datos Supabase.
   * Maneja síncronamente el estado de carga (loading) y captura errores de stock.
   */
  public async registrarServicio(payload: OrdenServicioPayload): Promise<RegistrarServicioResponse> {
    this.loading.set(true);
    this.lastError.set(null);

    try {
      if (!payload.placa || payload.kilometraje < 0) {
        throw new Error('PLACA_O_KILOMETRAJE_INVALIDO');
      }

      const activeTenant = this.tenantId();
      if (!activeTenant) {
        throw new Error('TENANT_NO_SELECCIONADO');
      }

      const { data, error } = await this.supabase.rpc('registrar_servicio_transaccional', {
        p_tenant_id: activeTenant,
        p_placa: payload.placa.toUpperCase().trim(),
        p_kilometraje: payload.kilometraje,
        p_repuestos_json: JSON.stringify(payload.repuestosJson),
        p_observaciones: payload.observaciones || ''
      });

      if (error) {
        const errorMsg = error.message.includes('STOCK_INSUFICIENTE')
          ? 'Error de inventario: Uno o más repuestos no cuentan con stock suficiente en el taller.'
          : error.message;
        
        this.lastError.set(errorMsg);
        return {
          success: false,
          error: errorMsg,
          codigo_error: error.code || 'SUPABASE_RPC_ERROR'
        };
      }

      return {
        success: true,
        orden_id: data?.orden_id || data?.id || 'ORD-' + Math.floor(100000 + Math.random() * 900000)
      };

    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al registrar servicio';
      this.lastError.set(errorMessage);
      return {
        success: false,
        error: errorMessage,
        codigo_error: 'CLIENT_EXCEPTIONAL_ERROR'
      };
    } finally {
      this.loading.set(false);
    }
  }

  /**
   * Consulta pública sin autenticación por código PIN temporal para el cliente.
   */
  public async consultarEstadoPorPin(pin: string): Promise<{ success: boolean; data?: any; error?: string }> {
    this.loading.set(true);
    try {
      const { data, error } = await this.supabase
        .from('ordenes_servicio_publicas')
        .select('*')
        .eq('pin_acceso', pin)
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (err: any) {
      return { success: false, error: err.message || 'PIN no encontrado o expirado' };
    } finally {
      this.loading.set(false);
    }
  }

  /**
   * Cierre de sesión de taller.
   */
  public async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
    this.session.set(null);
  }
}
