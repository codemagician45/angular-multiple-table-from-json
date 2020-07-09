import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekComponent } from './week/week.component';
import { MonthComponent } from './month/month.component';


const routes: Routes = [
  { path: 'week', component: WeekComponent },
  { path: 'month', component: MonthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
