import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  template: `<div>
    <h3>Devices</h3>
    <button class="btn btn-primary" (click)="register()" *ngIf="!addMode">+Register</button>
    <hr />
    <div *ngIf="!addMode" class="col col-md-3">
      <div *ngFor="let device of devices">
        <app-device-card [device]="device" ></app-device-card>
      </div>
    </div>
    <div *ngIf="addMode">
      <app-device-create
      (saveNewDevice)="saveDevice($event)"
      (cancelNewDevice)="cancelDevice()"></app-device-create>
    </div>
  </div>`,
  styles: [''],
})
export class DevicesComponent implements OnInit {
  addMode:boolean = false;
  devices: any = [
    {
      id: 123,
      name: 'Device-1',
      ip: '192.168.0.200',
      port: 502,
      description: 'This is a test description for device-1',
    },
    {
      id: 456,
      name: 'Device-2',
      ip: '192.168.0.201',
      port: 502,
      description: 'This is a test description for device-2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  acceptData(event: any) {
    alert(event);
  }


  register(){
    this.addMode = true;
  }

  saveDevice(event:any){

    const maxId = Math.max.apply(null, this.devices.map(d=> d.id));
    event.id = maxId + 1;

    this.devices.push(event);
    //this.dataService.updateDevice(event);
    this.addMode = false;

  }

  cancelDevice(){
    this.addMode = false;
  }
}
