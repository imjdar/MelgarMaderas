import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { RepuestoItem } from '../../core/services/supabase.service';

export interface InventarioRepuesto extends RepuestoItem {
  stock_minimo: number;
  ubicacion: string;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, BadgeComponent],
  template: `
    <div class="p-6 bg-white border-2 border-black max-w-5xl mx-auto my-6 text-black font-sans">
      
      <!-- Encabezado -->
      <div class="border-b-2 border-black pb-4 mb-6 flex justify-between items-center flex-wrap gap-4">
        <div>
          <span class="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1">
            Gestión de Repuestos • Multi-Tenant
          </span>
          <h2 class="text-2xl font-black uppercase tracking-tight mt-2">
            Inventario & Alertas Visuales de Bajo Stock
          </h2>
        </div>

        <!-- Contador Resumen -->
        <div class="flex gap-3">
          <div class="border-2 border-black p-2 text-center bg-gray-50">
            <span class="text-xs font-black block uppercase">Total Repuestos</span>
            <span class="text-xl font-black">{{ totalRepuestos() }}</span>
          </div>
          <div class="border-2 border-black p-2 text-center bg-black text-white">
            <span class="text-xs font-black block uppercase text-gray-300">Bajo Stock (&lt; 5)</span>
            <span class="text-xl font-black text-white">{{ bajoStockCount() }}</span>
          </div>
        </div>
      </div>

      <!-- Filtros Rápidos -->
      <div class="flex gap-2 mb-6 flex-wrap">
        <button
          (click)="filterMode.set('todos')"
          [class]="filterMode() === 'todos' ? 'bg-black text-white font-black border-2 border-black px-4 py-2 text-xs uppercase' : 'bg-white text-black font-bold border-2 border-black px-4 py-2 text-xs uppercase hover:bg-gray-100'"
        >
          Todos los Repuestos
        </button>

        <button
          (click)="filterMode.set('bajo-stock')"
          [class]="filterMode() === 'bajo-stock' ? 'bg-black text-white font-black border-2 border-black px-4 py-2 text-xs uppercase' : 'bg-white text-black font-bold border-2 border-black px-4 py-2 text-xs uppercase hover:bg-gray-100'"
        >
          ⚠️ Solo Bajo Stock (&lt; 5 Uds)
        </button>
      </div>

      <!-- Tabla de Inventario Utilitaria Monocromática -->
      <div class="border-2 border-black overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b-2 border-black bg-gray-100 font-black uppercase">
              <th class="p-3 border-r border-black">Código</th>
              <th class="p-3 border-r border-black">Nombre del Repuesto</th>
              <th class="p-3 border-r border-black">Ubicación</th>
              <th class="p-3 border-r border-black text-right">Precio Unit.</th>
              <th class="p-3 border-r border-black text-center">Stock Actual</th>
              <th class="p-3 text-center">Estado de Stock</th>
            </tr>
          </thead>
          <tbody>
            @for (item of repuestosFiltrados(); track item.id) {
              <tr 
                class="border-b border-black hover:bg-gray-50"
                [class.bg-gray-100]="item.cantidad < 5"
              >
                <td class="p-3 border-r border-black font-mono font-bold">{{ item.codigo }}</td>
                <td class="p-3 border-r border-black font-bold">{{ item.nombre }}</td>
                <td class="p-3 border-r border-black font-mono">{{ item.ubicacion }}</td>
                <td class="p-3 border-r border-black text-right font-mono font-bold">
                  $ {{ item.precio_unitario.toFixed(2) }}
                </td>
                <td class="p-3 border-r border-black text-center font-mono font-black text-sm">
                  {{ item.cantidad }}
                </td>
                <td class="p-3 text-center">
                  @if (item.cantidad < 5) {
                    <app-badge [isLowStock]="true">
                      ALERTA: {{ item.cantidad }} UDS
                    </app-badge>
                  } @else {
                    <app-badge [isLowStock]="false">
                      OK
                    </app-badge>
                  }
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

    </div>
  `
})
export class InventarioComponent {
  public filterMode = signal<'todos' | 'bajo-stock'>('todos');

  public inventario = signal<InventarioRepuesto[]>([
    {
      id: 'REP-001',
      codigo: 'FIL-ACE-01',
      nombre: 'Filtro de Aceite Sintético Chevrolet D-Max',
      cantidad: 2, // Bajo stock
      precio_unitario: 12.50,
      stock_minimo: 5,
      ubicacion: 'Estante A-1'
    },
    {
      id: 'REP-002',
      codigo: 'ACE-5W30-04',
      nombre: 'Galón Aceite Sintético 5W-30 Motorcraft',
      cantidad: 15,
      precio_unitario: 38.00,
      stock_minimo: 5,
      ubicacion: 'Bodega Principal B-4'
    },
    {
      id: 'REP-003',
      codigo: 'PAS-FRE-08',
      nombre: 'Juego Pastillas de Freno Delanteras Toyota Hilux',
      cantidad: 3, // Bajo stock
      precio_unitario: 45.00,
      stock_minimo: 5,
      ubicacion: 'Estante C-2'
    },
    {
      id: 'REP-004',
      codigo: 'BUJ-IRI-04',
      nombre: 'Kit Bujías Iridium NGK (4 Uds)',
      cantidad: 20,
      precio_unitario: 28.00,
      stock_minimo: 5,
      ubicacion: 'Estante D-1'
    },
    {
      id: 'REP-005',
      codigo: 'LIQ-FRE-01',
      nombre: 'Líquido de Frenos DOT 4 Bosch 500ml',
      cantidad: 1, // Bajo stock crítico
      precio_unitario: 8.50,
      stock_minimo: 5,
      ubicacion: 'Estante A-3'
    }
  ]);

  public totalRepuestos = computed(() => this.inventario().length);
  public bajoStockCount = computed(() => this.inventario().filter(i => i.cantidad < 5).length);

  public repuestosFiltrados = computed(() => {
    const mode = this.filterMode();
    if (mode === 'bajo-stock') {
      return this.inventario().filter(i => i.cantidad < 5);
    }
    return this.inventario();
  });
}
