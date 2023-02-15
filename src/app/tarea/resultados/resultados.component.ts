import { Component, Input } from '@angular/core';
import { Numero } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  @Input() numeros: Numero[] = [];

  mostrar( num:any){
    console.log( num )
  }
  

}
