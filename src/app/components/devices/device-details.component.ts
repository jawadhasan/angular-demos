import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from './device.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-device-details',
  template: `<div>
      <p>IFrame Use</p>
      <p>{{deviceURI}}</p>
      <iframe [src]="iframeUrl" width="100%" height="600px"></iframe>

  </div>`,
  styles: [''],
})
export class DeviceDetailsComponent implements OnInit {
  device: any={};
  deviceURI:any;
  iframeUrl:any;
  constructor(private _route: ActivatedRoute, private sanitizer: DomSanitizer, private deviceService: DeviceService) {}

  ngOnInit(): void {
    const id=+this._route.snapshot.paramMap.get('id');
    console.log("called for: "+id);

    //Load
    this.deviceService.getDevice(id).subscribe(d=> {
      this.device = d
      //custom processing logic based on protocl type etc if needed.....

      const remoteURI="http://localhost:5000/main/printers-management/details";
      this.deviceURI = `${remoteURI}/${this.device.id}/${this.device.name}/${this.device.ip}/${this.device.port}`;
      this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.deviceURI);
    },(e)=>{
      console.log('loading....error', e)
    });


  }
}
