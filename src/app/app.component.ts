import { Component, OnInit } from '@angular/core';
import { DeviceService } from './components/devices/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demos';

  constructor(private deviceService: DeviceService){}

  ngOnInit(): void {
    this.deviceService.deviceClicked
    .subscribe(
      (device: any) => {
       alert(device.name + ' clicked event notified in app.Component')
      }
    );
  }
}
