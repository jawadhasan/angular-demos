import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
}
)
export class DeviceService {

  deviceClicked = new EventEmitter<any>();


  private devices: any = [
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

  getDevices() {
    // .slice() returning a copy, not the original array so that it cannot be modified outside this service.
    return this.devices.slice();
  }

  addDevice(deviceData){
    this.devices.push(deviceData);
  }
}
