import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg1: any, arg2: any): any {
    const resultWeeks = [];
    
    for (const week of value){
      if(week._id.id_tecnico.indexOf(arg1) > -1){
        resultWeeks.push(week)
      
              
      };
      
    };
    return resultWeeks;
  }

}
