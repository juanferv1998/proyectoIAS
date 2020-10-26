import { Component, OnInit } from '@angular/core';
import { CalHoursService } from 'src/app/services/cal-hours.service';

@Component({
  selector: 'app-cal-hours',
  templateUrl: './cal-hours.component.html',
  styleUrls: ['./cal-hours.component.css']
})
export class CalHoursComponent implements OnInit {
  
  constructor(public calhourService: CalHoursService) { }

  filterWeek = '';
  
  ngOnInit(): void {
    this.getHours();
  }
  getHours(){
    this.calhourService.getHours().subscribe(
      res => {
        this. calhourService.hours = res;
      },
      err => console.log(err)
      )
  }

}
