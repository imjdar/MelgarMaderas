import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../core/services/supabase.service';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  template: `
    <div class="p-6 bg-white border-2 border-black max-w-md mx-auto my-12 text-black font-sans">
      
      <!-- Logo Monocromático Utilitario -->
      <div class="text-center border-b-2 border-black pb-4 mb-6">
        <div class="inline-block bg-black text-white font-black text-xs px-3 py-1 uppercase tracking-widest mb-2">
          Multi-Tenant BaaS
        </div>
        <h1 class="text-xl font-black uppercase tracking-tight">
          SaaS Talleres Automotrices
        </h1>
        <p class="text-xs text-gray-600 font-bold mt-1">
          Acceso Administrador de Taller • Quito, Ecuador
        </p>
      </div>

      <!-- Formulario de Autenticación -->
      <div class="space-y-4">
        
        <!-- Identificador de Tenant / Subdominio -->
        <div>
          <label class="block text-xs font-black uppercase mb-1">
            Identificador del Taller (Tenant ID)
          </label>
          <input
            type="text"
            [value]="tenantInput()"
            (input)="tenantInput.set($any($event.target).value)"
            placeholder="taller-quito-centro"
            class="w-full p-3 border-2 border-black font-mono font-bold text-sm uppercase outline-none focus:bg-gray-100"
          />
        </div>

        <!-- Correo Electrónico -->
        <div>
          <label class="block text-xs font-black uppercase mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            [value]="emailInput()"
            (input)="emailInput.set($any($event.target).value)"
            placeholder="admin@tallerquito.ec"
            class="w-full p-3 border-2 border-black font-mono text-sm outline-none"
          />
        </div>

        <!-- Contraseña -->
        <div>
          <label class="block text-xs font-black uppercase mb-1">
            Contraseña
          </label>
          <input
            type="password"
            [value]="passwordInput()"
            (input)="passwordInput.set($any($event.target).value)"
            placeholder="••••••••••••"
            class="w-full p-3 border-2 border-black font-mono text-sm outline-none"
          />
        </div>

        <!-- Estado de Sesión Actual -->
        @if (supabaseService.session()) {
          <div class="p-3 border border-black bg-black text-white text-xs font-mono">
            ✅ Sesión Activa: <strong>{{ supabaseService.user()?.email }}</strong>
            <button (click)="supabaseService.signOut()" class="block text-underline font-bold mt-1 text-gray-300">
              [ Cerrar Sesión ]
            </button>
          </div>
        }

        <div class="pt-2">
          <app-button
            (click)="iniciarSesion()"
            [loading]="supabaseService.loading()"
            variant="primary"
            class="w-full"
          >
            🔑 Acceder al Sistema de Taller
          </app-button>
        </div>

      </div>

    </div>
  `
})
export class LoginComponent {
  public supabaseService = inject(SupabaseService);

  public tenantInput = signal<string>('taller-quito-centro');
  public emailInput = signal<string>('admin@tallerquito.ec');
  public passwordInput = signal<string>('ContrasenaSegura2026!');

  public iniciarSesion(): void {
    this.supabaseService.tenantId.set(this.tenantInput());
    alert(`Iniciando sesión en Tenant: ${this.tenantInput()} para ${this.emailInput()}`);
  }
}
