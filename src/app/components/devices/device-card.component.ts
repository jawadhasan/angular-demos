import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from './device.service';
import { ToastrService } from 'src/app/services/toastr.service';


@Component({
  selector: 'app-device-card',
  template: ` <div class="card  bg-light mb-3">
    <div class="card-header ">
      {{ device.name | ConvertToSpaces:'-' }}
    </div>
    <div class="card-body">
      <h5 class="card-title"></h5>

      <p class="card-text">IP {{ device.ip }} : Port {{ device.port }}</p>
      <p>{{ device.description }}</p>
      <p>Status</p>
      <div class="card-footer ">
        <button (click)="clicked()" class="btn btn-warning">Click</button>
        &nbsp;
        <button (click)="detailClicked()" class="btn btn-info">Details</button>
      </div>
    </div>
  </div>`,
  styles: [''],
})
export class DeviceCardComponent implements OnInit {
  @Input() device: any;
  @Output() demo = new EventEmitter<any>();

  constructor(private toastr:ToastrService ,private deviceService: DeviceService) {}

  ngOnInit(): void {}

  clicked() {
    //this.demo.emit(this.device.name + `clicked`);
    this.deviceService.deviceClicked.emit(this.device);
  }

  detailClicked() {
    this.toastr.success(this.device.name);
  }
}
