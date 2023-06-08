import { Component, OnInit } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-devices',
  template: `<div>
    <h3>Devices</h3>
    <button class="btn btn-primary" (click)="register()" *ngIf="!addMode">
      + Register
    </button>
    <hr />

    <div *ngIf="!addMode" class="row">

      <div class="col col-md-8">
        <p class="bg-info">Col-1</p>
        <div class="row">
          <!-- Cards List -->
          <div *ngFor="let device of devices" class="col-4 my-3">
            <app-device-card [device]="device"></app-device-card>
          </div>
        </div>
      </div>

      <div class="col col-md-4 bg-light">
        Col-2
      </div>
    </div>

    <!-- <div class="row card-group">
    <div *ngFor="let presentation of presentations" class="col-4 card mx-auto my-3">
        <a [routerLink]="['/presentation', presentation._id]"><img class="card-img-top" src="..." alt="Card image cap"></a>
        <div class="card-block">
            ...
        </div>
    </div>
</div> -->

    <!-- AddForm -->
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

  //sample only
  presentations = [1, 2, 3, 4, 5, 6, 7].map(
    (it) => <any>{ _id: it, title: 'title ' + it }
  );

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.devices = this.deviceService.getDevices();

    //subscribing to deviceClicked event
    this.deviceService.deviceClicked.subscribe((device: any) => {
      alert(device.name + ' clicked event notified in devices.component');
    });
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
