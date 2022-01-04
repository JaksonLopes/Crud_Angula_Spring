import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Cursos } from '../model/curso';
import { Observable, of } from 'rxjs' ;
import { catchError } from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  
  displayedColumns= ['nome','categoria'];
  
  cursos$: Observable <Cursos[]> ;
  //cursosService : CursosService;

  constructor(
                private cursosService : CursosService,
                public dialog: MatDialog) {
    //this.cursosService = new CursosService();
    this.cursos$ = this.cursosService.list().pipe(
      catchError(erro => {
        this.onError('Erro ao carregar cursos ')
        return of([]) 
      })
    );
 
   }
   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
