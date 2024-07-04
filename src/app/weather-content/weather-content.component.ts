import { Component } from '@angular/core';

@Component({
  selector: 'app-weather-content',
  template: `
    <div class="sky-condition">☀️</div>
    <div class="temperature">21 C</div>
  `,
  styleUrl: './weather-content.component.scss',
})
export class WeatherContentComponent {}
