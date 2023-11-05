import { Component } from '@angular/core';
//un decorador es una funcion que transforma mi clase a que sea un componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string  = 'Hola Mundo';



}
