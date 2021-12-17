import { Cursos } from './../model/curso';
import { Injectable } from '@angular/core';
import {HttpClient,  } from '@angular/common/http';
import * as operators from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CursosService {
//injesão de dependencia http
private readonly APi ='/assets/cursos.json';

  constructor( private http: HttpClient) { }

  list(){
    return this.http.get<Cursos[]>(this.APi).pipe(
      operators.first(),
      operators.delay(1000),
      operators.tap( cursos => console.log( cursos)));
  }
  
}




