import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [
    { _id:'1', nome:'angula', categoria:'frontend'}
  ];
  displayedColumns= ['nome','categoria'];

  constructor() {
 
   }

  ngOnInit(): void {
  }

}
