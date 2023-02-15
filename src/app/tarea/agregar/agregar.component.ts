import { Component, Input } from '@angular/core';
import { Numero } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {
 @Input() numeros: Numero[] = []
  
  @Input() nuevo: Numero = {
    digito: 0
  }

  agregar() {
    if(this.nuevo.digito === 0 ){
      return;
    }
    //console.log(this.nuevo);

    this.numeros.push(this.nuevo);
    this.nuevo = {
      digito: 0
    }
   }

}
