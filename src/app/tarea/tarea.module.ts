import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrincipalComponent } from './principal/principal.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { AgregarComponent } from './agregar/agregar.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    ResultadosComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PrincipalComponent
  ]
})
export class TareaModule { }
