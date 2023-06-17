import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sample',
  template: `<div>
    <h1>{{ title | uppercase }}</h1>
    <p>{{ totalPrice() | currency : 'EUR' : true }} from method.</p>

    <input type="text" (keydown)="showKey($event)" />

    <button class="btn btn-info" (click)="upQuantity()">Update Qty</button>
    <hr>

    <h3>Template Reference Variable Parent</h3>

    <button class="btn btn-primary" (click)="child.hello()">Call ChildHello()</button>
    <p>{{child.title}}</p>
    <hr />

    <!-- In Angular, to refer to any component, we need to put # with a string. -->
    <app-tempref-sample #child></app-tempref-sample>

  </div>`,
})
export class SampleComponent {
  title = 'Sample component';

  //@ViewChild decorator is used to get the reference of the component.
  @ViewChild('child') child;


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

  // We can use the @ViewChild variable into ngAfterViewInit().

  //We can't access the @ViewChild variable in ngOnInit, ngOnChanges, or ngDoCheck
  //because it can be accessed only after our view is initialized.

  ngAfterViewInit(){
    console.log(this.child.title);
    //this.child.hello2();
  }

}
