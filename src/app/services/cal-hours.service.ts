import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Hours } from '../models/hours';

@Injectable({
  providedIn: 'root'
})
export class CalHoursService {
  URL_API = 'http://localhost:4000/work/find'
  
  selectedHour : Hours = {
    
    id_tecnico: '',
    semana: 0,
    horasNormales: 0,
    horasNocturnas: 0,
    horasDominicales: 0,
    horasNormalesExtras: 0,
    horasNocturnasExtras: 0,
    horasDominicalesExtras: 0
    

  };
  hours: Hours[];

  constructor(private http: HttpClient) { }

  getHours(){
    return this.http.get<Hours[]>(this.URL_API);
  }

}
