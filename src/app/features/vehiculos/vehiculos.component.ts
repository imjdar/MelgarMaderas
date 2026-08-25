import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ecuadorPlateValidator, formatEcuadorPlate, ECUADOR_PROVINCES } from '../../core/validators/ecuador-plate.validator';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

export interface VehiculoRecord {
  placa: string;
  marca: string;
  modelo: string;
  propietario: string;
  provincia: string;
  lopdConsiento: boolean;
  fechaRegistro: string;
}

@Component({
  selector: 'app-vehiculos',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent, BadgeComponent],
  template: `
    <div class="p-6 bg-white border-2 border-black max-w-4xl mx-auto my-6 text-black font-sans">
      
      <!-- Encabezado Monocromático Utilitario -->
      <div class="border-b-2 border-black pb-4 mb-6 flex justify-between items-center flex-wrap gap-4">
        <div>
          <span class="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-1">
            Quito, Ecuador • SaaS Multi-Tenant
          </span>
          <h2 class="text-2xl font-black uppercase tracking-tight mt-2">
            Gestión de Vehículos por Placa Ecuatoriana
          </h2>
        </div>
        <div class="text-right">
          <span class="text-xs font-bold uppercase text-gray-600 block">Formato Obligatorio</span>
          <span class="text-sm font-black border border-black px-2 py-0.5">PXX-1234 / PBA-1234</span>
        </div>
      </div>

      <!-- Buscador Rápido de Placa -->
      <div class="mb-8 p-4 border border-black bg-gray-50">
        <label class="block text-xs font-black uppercase mb-2">Búsqueda Rápida por Placa</label>
        <div class="flex gap-2">
          <input
            type="text"
            [value]="searchQuery()"
            (input)="onSearchInput($event)"
            placeholder="Ingrese placa (Ej: PBA-1234)"
            class="flex-1 p-3 border-2 border-black font-mono font-bold text-lg uppercase outline-none focus:bg-yellow-50"
          />
          <app-button (click)="buscarVehiculo()" variant="primary">
            🔍 Buscar
          </app-button>
        </div>
      </div>

      <!-- Formulario de Registro de Vehículo con LOPD Ecuador -->
      <form [formGroup]="vehiculoForm" (ngSubmit)="guardarVehiculo()" class="border-2 border-black p-6 mb-8 space-y-4">
        <h3 class="text-lg font-black uppercase border-b border-black pb-2">
          Registro de Nuevo Vehículo
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <!-- Campo Placa Ecuatoriana -->
          <div>
            <label class="block text-xs font-black uppercase mb-1">
              Placa Ecuatoriana <span class="text-red-600">*</span>
            </label>
            <input
              type="text"
              formControlName="placa"
              (input)="onFormPlateInput($event)"
              placeholder="PXX-1234"
              class="w-full p-3 border-2 border-black font-mono font-bold uppercase outline-none focus:bg-gray-100"
            />
            @if (vehiculoForm.get('placa')?.touched && vehiculoForm.get('placa')?.errors?.['ecuadorPlate']) {
              <p class="text-xs font-bold text-black mt-1 bg-gray-200 p-1 border border-black">
                ⚠️ {{ vehiculoForm.get('placa')?.errors?.['ecuadorPlate']?.reason }}
              </p>
            }
          </div>

          <!-- Propietario -->
          <div>
            <label class="block text-xs font-black uppercase mb-1">Propietario <span class="text-red-600">*</span></label>
            <input
              type="text"
              formControlName="propietario"
              placeholder="Nombre completo o RUC"
              class="w-full p-3 border-2 border-black outline-none"
            />
          </div>

          <!-- Marca -->
          <div>
            <label class="block text-xs font-black uppercase mb-1">Marca / Fabricante</label>
            <input
              type="text"
              formControlName="marca"
              placeholder="Ej: Chevrolet, Toyota, Hyundai"
              class="w-full p-3 border-2 border-black outline-none"
            />
          </div>

          <!-- Modelo -->
          <div>
            <label class="block text-xs font-black uppercase mb-1">Modelo / Año</label>
            <input
              type="text"
              formControlName="modelo"
              placeholder="Ej: D-Max 2022"
              class="w-full p-3 border-2 border-black outline-none"
            />
          </div>

        </div>

        <!-- Consentimiento LOPD Ecuador (Ley Orgánica de Protección de Datos) -->
        <div class="p-4 border border-black bg-gray-50 flex items-start gap-3 mt-4">
          <input
            type="checkbox"
            id="lopdCheck"
            formControlName="lopdConsiento"
            class="w-5 h-5 accent-black mt-0.5 cursor-pointer"
          />
          <label for="lopdCheck" class="text-xs font-bold text-gray-800 cursor-pointer leading-tight">
            Consentimiento LOPD Ecuador: Autorizo al taller para el tratamiento de mis datos personales 
            y del vehículo para fines de notificación de mantenimiento y facturación de acuerdo a la Ley Orgánica de Protección de Datos Personales.
          </label>
        </div>

        <div class="flex justify-end pt-2">
          <app-button type="submit" [disabled]="vehiculoForm.invalid" variant="primary">
            💾 Registrar Vehículo
          </app-button>
        </div>
      </form>

      <!-- Tabla de Vehículos Registrados -->
      <div class="border-2 border-black">
        <div class="bg-black text-white p-3 font-black text-xs uppercase tracking-wider">
          Vehículos Registrados en el Tenant (Taller Quito)
        </div>
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="border-b-2 border-black bg-gray-100 font-black uppercase">
              <th class="p-3 border-r border-black">Placa</th>
              <th class="p-3 border-r border-black">Propietario</th>
              <th class="p-3 border-r border-black">Marca / Modelo</th>
              <th class="p-3 border-r border-black">Provincia</th>
              <th class="p-3">LOPD</th>
            </tr>
          </thead>
          <tbody>
            @for (veh of vehiculosList(); track veh.placa) {
              <tr class="border-b border-black hover:bg-gray-50 font-mono">
                <td class="p-3 border-r border-black font-black text-sm">{{ veh.placa }}</td>
                <td class="p-3 border-r border-black font-bold font-sans">{{ veh.propietario }}</td>
                <td class="p-3 border-r border-black font-sans">{{ veh.marca }} {{ veh.modelo }}</td>
                <td class="p-3 border-r border-black font-sans">{{ veh.provincia }}</td>
                <td class="p-3 font-sans">
                  @if (veh.lopdConsiento) {
                    <span class="bg-black text-white px-2 py-0.5 text-xs font-black">APROBADO</span>
                  } @else {
                    <span class="border border-black px-2 py-0.5 text-xs">PENDIENTE</span>
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
export class VehiculosComponent {
  private fb = inject(FormBuilder);

  public searchQuery = signal<string>('');
  public vehiculosList = signal<VehiculoRecord[]>([
    {
      placa: 'PBA-1234',
      marca: 'Chevrolet',
      modelo: 'D-Max 2023',
      propietario: 'Carlos Andrade (Quito)',
      provincia: 'Pichincha (Quito)',
      lopdConsiento: true,
      fechaRegistro: '2026-08-20'
    },
    {
      placa: 'PXX-9876',
      marca: 'Toyota',
      modelo: 'Hilux 2.8',
      propietario: 'Transportes Pichincha S.A.',
      provincia: 'Pichincha (Quito)',
      lopdConsiento: true,
      fechaRegistro: '2026-08-22'
    }
  ]);

  public vehiculoForm = this.fb.group({
    placa: ['', [Validators.required, ecuadorPlateValidator()]],
    propietario: ['', [Validators.required]],
    marca: ['Chevrolet'],
    modelo: ['Sail 1.5'],
    lopdConsiento: [true, [Validators.requiredTrue]]
  });

  public onSearchInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }

  public onFormPlateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const formatted = formatEcuadorPlate(input.value);
    this.vehiculoForm.get('placa')?.setValue(formatted, { emitEvent: false });
  }

  public buscarVehiculo(): void {
    const query = formatEcuadorPlate(this.searchQuery());
    if (query) {
      this.searchQuery.set(query);
    }
  }

  public guardarVehiculo(): void {
    if (this.vehiculoForm.invalid) return;

    const val = this.vehiculoForm.value;
    const firstLetter = (val.placa || '').charAt(0).toUpperCase();
    const prov = ECUADOR_PROVINCES[firstLetter] || 'Ecuador';

    const newRecord: VehiculoRecord = {
      placa: val.placa || '',
      marca: val.marca || '',
      modelo: val.modelo || '',
      propietario: val.propietario || '',
      provincia: prov,
      lopdConsiento: !!val.lopdConsiento,
      fechaRegistro: new Date().toISOString().split('T')[0]
    };

    this.vehiculosList.update(list => [newRecord, ...list]);
    this.vehiculoForm.reset({
      marca: 'Chevrolet',
      modelo: 'Sail 1.5',
      lopdConsiento: true
    });
  }
}
