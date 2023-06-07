import { Component, EventEmitter, Output,  } from '@angular/core';

@Component({
  selector: 'app-device-create',
  template: `<div>
    <h3>Regiser New Device</h3>

    <div class="row">
      <div class="col-sm-8">
        <div>
          <form>
            <div class="form-group">

              <label for="name">Name</label>
              <input [(ngModel)]="device.name" type="text" name="name" class="form-control" id="name" placeholder="Enter name">

              <label for="ip">IP Address</label>
              <input [(ngModel)]="device.ip" type="text" name="ip" class="form-control" id="ip" placeholder="Enter IP address">

              <label for="port">Port Number</label>
              <input [(ngModel)]="device.port" type="number" name="port" class="form-control" id="port"  placeholder="Enter Port number">

              <label for="description">Description</label>
              <input [(ngModel)]="device.description" name="description" class="form-control" id="description" >

            </div>
          </form>
          <br />
          <div class="bg-light">
            {{device | json}}
          </div>
          <button class="btn btn-primary" (click)="createDevice()">
            Create Device
          </button> |

          <button class="btn btn-primary" (click)="cancel()">Cancel</button>
        </div>
      </div>
    </div>


  </div>`,
  styles: [''],
})
export class DeviceCreateComponent {

  @Output() saveNewDevice = new EventEmitter<any>();
  @Output() cancelNewDevice = new EventEmitter();

  device: any = {}

  constructor() {}

  ngOnInit(): void {}

  createDevice() {
    this.saveNewDevice.emit(this.device);  //emit to parent
  }

  cancel() {
    this.cancelNewDevice.emit();  //emit to parent
  }

}
