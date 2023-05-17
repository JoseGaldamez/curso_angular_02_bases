import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <h3>El contador es: {{ counter }}</h3>
    <button (click)="incremenetBy(+1)">+</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="incremenetBy(-1)">-</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  constructor() {}

  incremenetBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
