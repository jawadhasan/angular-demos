import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `<div>
    <h1>{{ title | uppercase }}</h1>
    <p>{{ totalPrice() | currency : 'EUR' : true }} from method.</p>

    <input type="text" (keydown)="showKey($event)" />

    <button class="btn btn-info" (click)="upQuantity()">Update Qty</button>
  </div>`,
})
export class SampleComponent {
  title = 'Sample component';
  data = [
    { id: 1, name: 'item-1', price: 10 },
    { id: 2, name: 'item-2', price: 20 },
    { id: 3, name: 'item-3', price: 30 },
  ];
  totalPrice() {
    let sum = 0;

    for (let item of this.data) {
      sum += item.price;
    }
    return sum;
  }

  upQuantity() {
    alert('you clicked upQuantity button');
  }

  showKey(event: any) {
    console.log(event.keyCode);
  }

  getCoords(event: any) {
    console.log(event.clientX + ' : ' + event.clientY);
  }
}
