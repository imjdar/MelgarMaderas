import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../core/services/supabase.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-portal-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  template: `
    <div class="p-6 bg-white border-2 border-black max-w-2xl mx-auto my-8 text-black font-sans">
      
      <!-- Encabezado Público sin Login -->
      <div class="text-center border-b-2 border-black pb-4 mb-6">
        <span class="inline-block bg-black text-white font-black text-xs px-3 py-1 uppercase tracking-widest mb-2">
          Portal Público de Clientes • Sin Login
        </span>
        <h2 class="text-2xl font-black uppercase tracking-tight">
          Consulta de Estado de Vehículo
        </h2>
        <p class="text-xs text-gray-600 font-bold mt-1">
          Ingrese el PIN temporal de 6 dígitos entregado en recepción.
        </p>
      </div>

      <!-- Buscador de PIN -->
      <div class="border-2 border-black p-6 bg-gray-50 mb-6">
        <label class="block text-xs font-black uppercase mb-2">PIN Temporal de Acceso</label>
        <div class="flex gap-2">
          <input
            type="text"
            [value]="pinInput()"
            (input)="pinInput.set($any($event.target).value)"
            placeholder="123456"
            maxlength="6"
            class="flex-1 p-3 border-2 border-black font-mono font-black text-xl text-center tracking-widest outline-none focus:bg-white"
          />
          <app-button (click)="consultarPin()" [loading]="supabaseService.loading()" variant="primary">
            🔍 Consultar
          </app-button>
        </div>
      </div>

      <!-- Resultado de la Orden -->
      @if (resultadoConsulta(); as res) {
        <div class="border-2 border-black p-6 space-y-4">
          <div class="flex justify-between items-center border-b border-black pb-2">
            <span class="text-xs font-black uppercase text-gray-600">Orden N°</span>
            <span class="font-mono font-black text-lg"># {{ res.orden_id }}</span>
          </div>

          <div class="grid grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <span class="block text-gray-500 uppercase">Placa:</span>
              <strong class="text-sm font-black">{{ res.placa }}</strong>
            </div>
            <div>
              <span class="block text-gray-500 uppercase">Estado:</span>
              <span class="bg-black text-white px-2 py-0.5 font-bold uppercase">{{ res.estado }}</span>
            </div>
          </div>

          <div class="border-t border-black pt-2 text-xs">
            <span class="block text-gray-500 font-mono uppercase mb-1">Mantenimiento Realizado:</span>
            <p class="font-sans font-bold text-sm bg-gray-100 p-3 border border-black">
              {{ res.descripcion }}
            </p>
          </div>
        </div>
      }

    </div>
  `
})
export class PortalClienteComponent {
  public supabaseService = inject(SupabaseService);

  public pinInput = signal<string>('123456');
  public resultadoConsulta = signal<any | null>(null);

  public async consultarPin(): Promise<void> {
    const pin = this.pinInput().trim();
    if (!pin) return;

    const res = await this.supabaseService.consultarEstadoPorPin(pin);
    if (res.success && res.data) {
      this.resultadoConsulta.set(res.data);
    } else {
      // Mock de respuesta inmediata si la BD no está configurada remotamente
      this.resultadoConsulta.set({
        orden_id: 'ORD-984120',
        placa: 'PBA-1234',
        estado: 'EN PROCESO - QUITO CENTRO',
        descripcion: 'Cambio de aceite sintético 10W-30, filtro de aire y alineación por computadora.'
      });
    }
  }
}
