import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-sample',
  template: `<div>
    <h6>{{ title }}</h6>
    <hr />


    <h5>Template-Driven</h5>
    <form #signupForm="ngForm" (ngSubmit)="save(signupForm)">
      <input
        type="text"
        id="fNameId"
        required
        name="firstName"
        [(ngModel)]="customer.firstName"
      />

      <button [disabled]="!signupForm.valid" type="submit">Save</button>
    </form>

    <hr />
    <h5>ReactiveForm</h5>

    <form (ngSubmit)="saveReactive()" [formGroup]="customerForm">
      <input
        type="text"
        id="fNameId"
        name="firstNameReactive"
        formControlName="firstName"
      />

      <input
        type="text"
        id="lNameId"
        name="lastNameReactive"
        formControlName="lastName"
      />

      <button [disabled]="!customerForm.valid" type="submit">Save</button>
    </form>
  </div>`,
})
export class FormsSampleComponent {
  title = 'Forms Sample component';
  customerForm: any;

  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: { value: 'n/a', disabled: true },
      email: '',
    });
  }
  customer: any = {
    firstName: '',
  };
  save(signupForm: NgForm) {
    console.log(signupForm);
  }

  saveReactive() {
    console.log(this.customerForm.get('lastName').value);
    console.log(this.customerForm);

    this.customerForm.setValue({
      firstName: 'test-firstname',
      lastName: 'test-lastname',
      email: 'test@test.com'
    })

    this.customerForm.patchValue({
      lastName: 'patch-lastname'
    })

  }
}
