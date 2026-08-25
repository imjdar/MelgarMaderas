import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span [class]="badgeClasses">
      @if (isLowStock) {
        ⚠️
      }
      <ng-content></ng-content>
    </span>
  `,
  styles: [`
    span {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      padding: 0.25rem 0.65rem;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      border: 1.5px solid #000000;
    }
    .badge-normal {
      background-color: #FFFFFF;
      color: #000000;
    }
    .badge-low-stock {
      background-color: #000000;
      color: #FFFFFF;
      border-color: #000000;
    }
  `]
})
export class BadgeComponent {
  @Input() isLowStock: boolean = false;

  get badgeClasses(): string {
    return this.isLowStock ? 'badge-low-stock' : 'badge-normal';
  }
}
