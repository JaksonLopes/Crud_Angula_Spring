import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos/cursos.component';
import { AppImportMaterialModule } from '../shared/app-import-material/app-import-material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    AppImportMaterialModule,
    SharedModule
  ]
})
export class CursosModule { }
