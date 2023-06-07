import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device-card',
  template: `<div>
    <div class="card" style="width: 20rem;">
      <div class="card-body">
        <h5 class="card-title">{{device.name}}</h5>
        <p class="card-text">
          {{device.description}}<br />
          IP {{device.ip}} : Port {{device.port}}
        </p>
        <button (click)="clicked()" class="btn btn-primary">Click</button>
      </div>
    </div>
  </div>`,
  styles: [''],
})
export class DeviceCardComponent implements OnInit {
  @Input() device: any;
  @Output() demo = new EventEmitter<any>();

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {}

  clicked(){
    //this.demo.emit(this.device.name + `clicked`);
    this.deviceService.deviceClicked.emit(this.device);
  }
}
