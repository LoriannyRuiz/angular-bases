import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //cuando  pondremos un codigo maximo de 4 lineas es mejor usar backtick y hacerlo aqui mismo en el template
  //cuando es mas pues utilizamos nuestro componenet.html
  template: `
  <h3>Counter: {{ counter }}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="decreaseBy(-1)">-1</button>



  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += 1;
  }

  decreaseBy(value: number): void {
    this.counter -= 1;
  }

  reset():void {
    this.counter = 10;
  }

}

/* todo esto ue hicimos abajo manual se puede hace de forma automatica con el snippet de angular
que instalamos, tan solo poniendo a-component como hicimos arriba */

/* import { Component } from "@angular/core";

//component es un decorador que transforma mi clase en un componente
@Component({

  //el selector es como yo quiero utilizar este counter en el html
  //tambien los componenetes personalizados se aconseja que tenga un prefijo como este app-
  selector: 'app-counter',
  //cuando utilizamos este template el espera que pongamos todo mi template como un string
  template:'<h1>Hola counter</h1>'
})
export class CounterComponent{


} */
