import { Component, contentChild } from '@angular/core';
import { WidgetContentDirective } from 'app/widget-content.directive';

@Component({
  selector: 'app-widget',
  template: `
    <div class="widget-header">
      <ng-content select="[header]" />
      <app-button class="action">
        <ng-content ngProjectAs="[slot='icon']" select="[slot='action-icon']" />
      </app-button>
    </div>
    <ng-container *ngIf="!hidden">
      <div class="widget-content">
        <ng-container
          [ngTemplateOutlet]="content()?.tpl || noContent"
          ]
        ></ng-container>
        <!-- since angular 18 .. -->
        <ng-template #noContent>
          <p class="no-content">No content...</p>
        </ng-template>
      </div>
    </ng-container>
    <button (click)="toggleHidden()">Expand/Collapse</button>
  `,
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  public hidden = false;
  public content = contentChild(WidgetContentDirective);

  public toggleHidden(): void {
    this.hidden = !this.hidden;
  }
}
