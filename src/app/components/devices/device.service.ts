import { EventEmitter, Injectable } from "@angular/core";
import { IDevice, protocol } from "./device";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
}
)
export class DeviceService {

  deviceClicked = new EventEmitter<any>();


  private devices: any= [
    {
     id: 123,
     ip: "127.0.0.1",
     port: 502,
     name: "VirtualIJP",
     status: "Stop",
     protocol: protocol.Modbus,
     description: "This is a test description for VirtualIJP"
    },
     {

      id: 459,
      ip: "10.10.10.1",
      port: 18080,
      name: "CPF-Laser",
      status: "Idle",
      protocol: protocol.Http,
      description: "This is a test description for CPF-Laser device"
     }
  ];
  constructor() {}


getDevice(id:number):Observable<any>{
  return of(this.devices.find(d=> d.id === id))
}

  getDevices() {
    // .slice() returning a copy, not the original array so that it cannot be modified outside this service.
    return this.devices.slice();
  }

  addDevice(deviceData){
    this.devices.push(deviceData);
  }


}
