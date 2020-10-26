import { Component, OnInit } from '@angular/core';
import {WorkService} from '../../services/work.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(public workService: WorkService) { }

  ngOnInit(): void {
    this.getWorks();
  }
  getWorks(){
    this.workService.getWorks().subscribe(
      res => {
        this.workService.works = res;
      },
      err => console.log(err)
      )
  }
  addWork(form: NgForm){
    this.workService.createWork(form.value).subscribe(
      res =>{
        form.reset();
      } ,
      err => console.log(err)
      )
  }

}
