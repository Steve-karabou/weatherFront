import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { Next7DaysComponent } from './next7-days/next7-days.component';

const routes: Routes = [
  {path:'', component: TodayComponent},
  {path:'next7Day', component: Next7DaysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
