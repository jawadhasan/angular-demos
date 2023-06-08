import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-device-card',
  template: `
    <div class="card text-white bg-danger mb-3">
      <div class="card-body">
        <h5 class="card-title">{{device.name}}</h5>

        <p class="card-text">IP {{device.ip}} : Port {{device.port}} </p>
        <p>{{device.description}}</p>
        <p>Status</p>
        <button (click)="clicked()" class="btn btn-warning">Click</button>
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
