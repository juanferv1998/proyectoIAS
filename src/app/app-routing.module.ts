import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalHoursComponent } from './components/cal-hours/cal-hours.component';
import { WorkComponent } from './components/work/work.component';


const routes: Routes = [
    {path: '', component: WorkComponent},
    {path:'find', component: CalHoursComponent}
 
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }