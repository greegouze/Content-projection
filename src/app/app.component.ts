import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-widget>
      <i slot="action-icon">🔄</i>
      <ng-container ngProjectAs="[header]">
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Currently in Vienna, Austria</div>
      </ng-container>
      <app-weather-content *appWidgetContent> </app-weather-content>
    </app-widget>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'content-projection';
}
