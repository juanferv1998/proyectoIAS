import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkComponent } from './components/work/work.component';
import { FormsModule } from '@angular/forms';
import { CalHoursComponent } from './components/cal-hours/cal-hours.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    CalHoursComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
