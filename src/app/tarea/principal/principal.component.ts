import { Component } from '@angular/core';
import { Numero } from '../interfaces/tarea.interface';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html'
})


export class PrincipalComponent  {

  numeros: Numero[] = [];

  nuevo:Numero={
    digito: 0
  }



  

}
