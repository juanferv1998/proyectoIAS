import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  URL_API = 'http://localhost:4000/work'
  selectedWork : Work = {
    id_tecnico : '',
    id_servicio : '',
    fecha_inicio : '',
    fecha_fin : ''

  };
  works: Work[];

  constructor(private http: HttpClient){}


  getWorks(){
    return this.http.get<Work[]>(this.URL_API);
  }
  createWork(work: Work){
    return this.http.post(this.URL_API, work);
  }
}
