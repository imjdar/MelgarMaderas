import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './features/auth/login.component';
import { VehiculosComponent } from './features/vehiculos/vehiculos.component';
import { InventarioComponent } from './features/inventario/inventario.component';
import { ServiciosComponent } from './features/servicios/servicios.component';
import { PortalClienteComponent } from './features/portal-cliente/portal-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LoginComponent,
    VehiculosComponent,
    InventarioComponent,
    ServiciosComponent,
    PortalClienteComponent
  ],
  template: `
    <div class="min-h-screen bg-white text-black font-sans">
      
      <!-- Navegación Monocromática Principal -->
      <header class="bg-black text-white border-b-4 border-black">
        <div class="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-3">
            <span class="bg-white text-black font-black text-xs px-2 py-1 uppercase tracking-widest">
              SaaS Multi-Tenant
            </span>
            <h1 class="text-xl font-black uppercase tracking-tight">
              Talleres Automotrices Quito
            </h1>
          </div>

          <!-- Pestañas de Módulos de Negocio -->
          <nav class="flex gap-1 flex-wrap">
            <button
              (click)="activeTab.set('vehiculos')"
              [class]="activeTab() === 'vehiculos' ? 'bg-white text-black font-black px-3 py-1.5 text-xs uppercase' : 'text-gray-300 font-bold hover:text-white px-3 py-1.5 text-xs uppercase'"
            >
              🚗 Vehículos (PXX-1234)
            </button>
            <button
              (click)="activeTab.set('servicios')"
              [class]="activeTab() === 'servicios' ? 'bg-white text-black font-black px-3 py-1.5 text-xs uppercase' : 'text-gray-300 font-bold hover:text-white px-3 py-1.5 text-xs uppercase'"
            >
              ⚙ Órdenes (RPC)
            </button>
            <button
              (click)="activeTab.set('inventario')"
              [class]="activeTab() === 'inventario' ? 'bg-white text-black font-black px-3 py-1.5 text-xs uppercase' : 'text-gray-300 font-bold hover:text-white px-3 py-1.5 text-xs uppercase'"
            >
              📦 Inventario
            </button>
            <button
              (click)="activeTab.set('auth')"
              [class]="activeTab() === 'auth' ? 'bg-white text-black font-black px-3 py-1.5 text-xs uppercase' : 'text-gray-300 font-bold hover:text-white px-3 py-1.5 text-xs uppercase'"
            >
              🔑 Login
            </button>
            <button
              (click)="activeTab.set('portal-cliente')"
              [class]="activeTab() === 'portal-cliente' ? 'bg-white text-black font-black px-3 py-1.5 text-xs uppercase' : 'text-gray-300 font-bold hover:text-white px-3 py-1.5 text-xs uppercase'"
            >
              🔍 Portal PIN
            </button>
          </nav>
        </div>
      </header>

      <!-- Vista Activa -->
      <main class="py-6">
        @switch (activeTab()) {
          @case ('vehiculos') {
            <app-vehiculos />
          }
          @case ('servicios') {
            <app-servicios />
          }
          @case ('inventario') {
            <app-inventario />
          }
          @case ('auth') {
            <app-auth-login />
          }
          @case ('portal-cliente') {
            <app-portal-cliente />
          }
        }
      </main>

    </div>
  `
})
export class AppComponent {
  public activeTab = signal<'vehiculos' | 'servicios' | 'inventario' | 'auth' | 'portal-cliente'>('vehiculos');
}
