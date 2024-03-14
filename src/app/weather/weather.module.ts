import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { TodayComponent } from './today/today.component';
import { Next7DaysComponent } from './next7-days/next7-days.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    TodayComponent,
    Next7DaysComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ]
})
export class WeatherModule { }
