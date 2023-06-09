import { EventEmitter, Injectable } from "@angular/core";
import { IDevice } from "./device";

@Injectable({
  providedIn: 'root'
}
)
export class DeviceService {

  deviceClicked = new EventEmitter<any>();


  private devices: any= [
    {
     id: 123,
     ip: "192.168.0.201",
     port: 502,
     name: "Device-1",
     status: "Stop",
     description: "This is a test description for device-1"
    },
    {

      id: 456,
      ip: "192.168.0.202",
      port: 502,
      name: "Device-2",
      status: "Stop",
      description: "This is a test description for device-2"
     },
     {

      id: 457,
      ip: "192.168.0.203",
      port: 502,
      name: "Device-3",
      status: "Stop",
      description: "This is a test description for device-3"
     },
     {

      id: 458,
      ip: "192.168.0.204",
      port: 502,
      name: "Device-4",
      status: "Stop",
      description: "This is a test description for device-4"
     },
     {

      id: 459,
      ip: "192.168.0.205",
      port: 502,
      name: "Device-5",
      status: "Stop",
      description: "This is a test description for device-5"
     }
  ];
  constructor() {}


// getDevice(id:number):IDevice{
//   return this.devices.find(d=> d.id === id)
// }

  getDevices() {
    // .slice() returning a copy, not the original array so that it cannot be modified outside this service.
    return this.devices.slice();
  }

  addDevice(deviceData){
    this.devices.push(deviceData);
  }
}
