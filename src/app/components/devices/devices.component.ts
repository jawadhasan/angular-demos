import { Component, OnInit } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-devices',
  template: `<div>
    <h3>Devices</h3>
    <button class="btn btn-primary" (click)="register()" *ngIf="!addMode">
      +Register
    </button>
    <hr />

    <div *ngIf="!addMode" class="row">
      <div class="col-xs-12">
        <app-device-card
          *ngFor="let device of devices"
          [device]="device">
        </app-device-card>
      </div>
    </div>

    <div *ngIf="addMode">
      <app-device-create
        (saveNewDevice)="saveDevice($event)"
        (cancelNewDevice)="cancelDevice()"
      ></app-device-create>
    </div>
  </div>`,
  styles: [''],
})
export class DevicesComponent implements OnInit {
  addMode: boolean = false;
  devices: any = [];
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {

    this.devices = this.deviceService.getDevices();

    //subscribing to deviceClicked event
    this.deviceService.deviceClicked
    .subscribe(
      (device: any) => {
       alert(device.name + ' clicked event notified in devices.component')
      }
    );
  }

  register() {
    this.addMode = true;
  }

  saveDevice(event: any) {
    const maxId = Math.max.apply(
      null,
      this.devices.map((d) => d.id)
    );
    event.id = maxId + 1;

    this.devices.push(event);
    this.deviceService.addDevice(event);


    //this.dataService.updateDevice(event);
    this.addMode = false;
  }

  cancelDevice() {
    this.addMode = false;
  }
}
