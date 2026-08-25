import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClasses"
    >
      @if (loading) {
        <span class="inline-block animate-spin mr-2">⚙</span>
      }
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    :host { display: inline-block; }
    button {
      font-family: inherit;
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      padding: 0.75rem 1.5rem;
      border-radius: 0px;
      cursor: pointer;
      transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .btn-primary {
      background-color: #000000;
      color: #FFFFFF;
      border: 2px solid #000000;
    }
    .btn-primary:hover:not(:disabled) {
      background-color: #1F2937;
      border-color: #1F2937;
    }
    .btn-secondary {
      background-color: #FFFFFF;
      color: #000000;
      border: 2px solid #000000;
    }
    .btn-secondary:hover:not(:disabled) {
      background-color: #E5E7EB;
    }
    .btn-outline {
      background-color: transparent;
      color: #000000;
      border: 2px solid #000000;
    }
    button:disabled {
      background-color: #E5E7EB !important;
      color: #9CA3AF !important;
      border-color: #9CA3AF !important;
      cursor: not-allowed !important;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;

  get buttonClasses(): string {
    return `btn-${this.variant}`;
  }
}
