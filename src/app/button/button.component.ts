import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: ` <span class="button-icon">
    <ng-content select="[slot='icon']"></ng-content>
  </span>`,
  styleUrl: './button.component.scss',
})
export class ButtonComponent {}
