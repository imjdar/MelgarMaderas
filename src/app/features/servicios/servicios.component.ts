import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService, RepuestoItem } from '../../core/services/supabase.service';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { formatEcuadorPlate } from '../../core/validators/ecuador-plate.validator';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  template: `
    <div class="p-6 bg-white border-2 border-black max-w-4xl mx-auto my-6 text-black font-sans">
      
      <!-- Encabezado -->
      <div class="border-b-2 border-black pb-4 mb-6">
        <span class="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1">
          Llamadas Transaccionales RPC • Supabase BaaS
        </span>
        <h2 class="text-2xl font-black uppercase tracking-tight mt-2">
          Creación Transaccional de Orden de Trabajo
        </h2>
        <p class="text-xs text-gray-600 font-bold mt-1">
          Taller Quito Centro • Ejecución atómica de descuento de stock y apertura de orden.
        </p>
      </div>

      <!-- Formulario de Orden de Servicio -->
      <div class="border-2 border-black p-6 space-y-6">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Placa -->
          <div>
            <label class="block text-xs font-black uppercase mb-1">
              Placa del Vehículo <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              [value]="placaInput()"
              (input)="onPlacaInput($event)"
              placeholder="PBA-1234"
              class="w-full p-3 border-2 border-black font-mono font-bold text-lg uppercase outline-none focus:bg-gray-100"
            />
          </div>

          <!-- Kilometraje -->
          <div>
            <label class="block text-xs font-black uppercase mb-1">
              Kilometraje Actual <span class="text-red-600">*</span>
            </label>
            <input
              type="number"
              [value]="kilometrajeInput()"
              (input)="onKmInput($event)"
              placeholder="Ej: 45000"
              class="w-full p-3 border-2 border-black font-mono font-bold text-lg outline-none"
            />
          </div>
        </div>

        <!-- Selección de Repuestos para la Orden -->
        <div>
          <label class="block text-xs font-black uppercase mb-2">
            Repuestos & Materiales Requeridos
          </label>

          <div class="space-y-2 mb-4">
            @for (rep of repuestosSeleccionados(); track rep.id; let idx = $index) {
              <div class="flex items-center justify-between p-3 border border-black bg-gray-50 font-mono text-xs">
                <div>
                  <span class="font-black bg-black text-white px-1.5 py-0.5 mr-2">{{ rep.codigo }}</span>
                  <span class="font-bold">{{ rep.nombre }}</span>
                </div>
                <div class="flex items-center gap-4">
                  <span>Cant: <strong>{{ rep.cantidad }}</strong></span>
                  <span>P.U: <strong>$ {{ rep.precio_unitario.toFixed(2) }}</strong></span>
                  <button 
                    (click)="quitarRepuesto(idx)" 
                    class="text-red-600 font-black px-2 py-0.5 border border-black hover:bg-black hover:text-white"
                  >
                    X
                  </button>
                </div>
              </div>
            }
          </div>

          <!-- Botones Rápidos para Agregar Repuesto de Prueba -->
          <div class="flex gap-2 flex-wrap">
            <button
              (click)="agregarRepuestoPrueba('FIL-01', 'Filtro de Aceite Sintético', 1, 12.50)"
              class="text-xs font-bold border border-black px-3 py-1.5 hover:bg-black hover:text-white"
            >
              + Agregar Filtro ($12.50)
            </button>
            <button
              (click)="agregarRepuestoPrueba('ACE-5W30', 'Galón Aceite 5W-30', 1, 38.00)"
              class="text-xs font-bold border border-black px-3 py-1.5 hover:bg-black hover:text-white"
            >
              + Agregar Galón Aceite ($38.00)
            </button>
            <button
              (click)="agregarRepuestoPrueba('PAS-FRE-CRITICO', 'Pastillas Freno (Stock Crítico)', 10, 45.00)"
              class="text-xs font-bold border border-red-600 text-red-600 px-3 py-1.5 hover:bg-red-600 hover:text-white"
            >
              ⚠️ Simular Error Stock Insuficiente (10 Uds)
            </button>
          </div>
        </div>

        <!-- Observaciones -->
        <div>
          <label class="block text-xs font-black uppercase mb-1">Observaciones del Trabajo</label>
          <textarea
            [value]="observacionesInput()"
            (input)="onObsInput($event)"
            rows="2"
            placeholder="Detalles del diagnóstico preventivo realizado en Quito..."
            class="w-full p-3 border-2 border-black text-xs font-mono outline-none"
          ></textarea>
        </div>

        <!-- Alertas de Estado y Carga -->
        @if (supabaseService.loading()) {
          <div class="p-4 border-2 border-black bg-black text-white flex items-center gap-3">
            <span class="animate-spin text-xl">⚙</span>
            <span class="text-xs font-black uppercase">
              Ejecutando función transaccional RPC en Supabase...
            </span>
          </div>
        }

        @if (resultadoRespuesta(); as res) {
          @if (res.success) {
            <div class="p-4 border-2 border-black bg-white text-black font-mono text-xs">
              <div class="font-black text-sm uppercase">✅ Orden de Servicio Creada con Éxito</div>
              <div class="mt-1">ID de Orden: <strong>{{ res.orden_id }}</strong></div>
              <div class="text-gray-600 mt-1">El stock ha sido descontado atómicamente en la base de datos.</div>
            </div>
          } @else {
            <div class="p-4 border-2 border-black bg-black text-white font-mono text-xs">
              <div class="font-black text-sm uppercase">❌ Error al Registrar Servicio Transaccional</div>
              <div class="mt-1">{{ res.error }}</div>
              <div class="text-gray-400 mt-1">Código: {{ res.codigo_error }}</div>
            </div>
          }
        }

        <!-- Botón de Envío -->
        <div class="flex justify-end pt-2">
          <app-button
            (click)="ejecutarRegistroTransaccional()"
            [loading]="supabaseService.loading()"
            [disabled]="!placaInput() || kilometrajeInput() <= 0"
            variant="primary"
          >
            ⚙ Registrar Servicio Transaccional (RPC)
          </app-button>
        </div>

      </div>

    </div>
  `
})
export class ServiciosComponent {
  public supabaseService = inject(SupabaseService);

  public placaInput = signal<string>('PBA-1234');
  public kilometrajeInput = signal<number>(45000);
  public observacionesInput = signal<string>('Mantenimiento preventivo de los 45.000 KM');
  
  public repuestosSeleccionados = signal<RepuestoItem[]>([
    { id: 'R1', codigo: 'FIL-ACE-01', nombre: 'Filtro de Aceite Sintético', cantidad: 1, precio_unitario: 12.50 },
    { id: 'R2', codigo: 'ACE-5W30-04', nombre: 'Galón Aceite 5W-30', cantidad: 1, precio_unitario: 38.00 }
  ]);

  public resultadoRespuesta = signal<{ success: boolean; orden_id?: string; error?: string; codigo_error?: string } | null>(null);

  public onPlacaInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.placaInput.set(formatEcuadorPlate(input.value));
  }

  public onKmInput(event: Event): void {
    const val = Number((event.target as HTMLInputElement).value);
    this.kilometrajeInput.set(val);
  }

  public onObsInput(event: Event): void {
    this.observacionesInput.set((event.target as HTMLInputElement).value);
  }

  public agregarRepuestoPrueba(codigo: string, nombre: string, cantidad: number, precio_unitario: number): void {
    const nuevo: RepuestoItem = {
      id: 'REP-' + Date.now(),
      codigo,
      nombre,
      cantidad,
      precio_unitario
    };
    this.repuestosSeleccionados.update(list => [...list, nuevo]);
  }

  public quitarRepuesto(index: number): void {
    this.repuestosSeleccionados.update(list => list.filter((_, i) => i !== index));
  }

  public async ejecutarRegistroTransaccional(): Promise<void> {
    this.resultadoRespuesta.set(null);

    const res = await this.supabaseService.registrarServicio({
      placa: this.placaInput(),
      kilometraje: this.kilometrajeInput(),
      repuestosJson: this.repuestosSeleccionados(),
      observaciones: this.observacionesInput()
    });

    this.resultadoRespuesta.set(res);
  }
}
