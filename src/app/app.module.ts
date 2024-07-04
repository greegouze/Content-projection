import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { ButtonComponent } from './button/button.component';
import { NgTemplateOutlet } from '@angular/common';
import { WidgetContentDirective } from './widget-content.directive';
import { WeatherContentComponent } from './weather-content/weather-content.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    ButtonComponent,
    WidgetContentDirective,
    WeatherContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgTemplateOutlet],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
