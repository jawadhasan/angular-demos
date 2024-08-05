import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceService } from './device.service';
import { ToastrService } from 'src/app/services/toastr.service';
import { Router } from '@angular/router';


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
      <p>Status <b>{{device.status}}</b></p>
      <p>Protocol <b>{{device.protocol}}</b></p>
      <div class="card-footer ">
        <button (click)="clicked()" class="btn btn-warning">Click</button>&nbsp;
        <button (click)="detailClicked()" class="btn btn-secondary">Details</button>&nbsp;
        <button (click)="remoteClicked()" class="btn btn-info">Remote</button>
      </div>
    </div>
  </div>`,
  styles: [''],
})
export class DeviceCardComponent implements OnInit {
  @Input() device: any;
  @Output() demo = new EventEmitter<any>();

  constructor(private router:Router, private toastr:ToastrService ,private deviceService: DeviceService) {}

  ngOnInit(): void {}

  clicked() {
    //this.demo.emit(this.device.name + `clicked`);
    this.deviceService.deviceClicked.emit(this.device);
  }

  detailClicked() {
    this.toastr.warning(`details ${this.device.name} `);
    //todo details navigation

  }

  remoteClicked(){
    this.toastr.success(`Remote ${this.device.name} `);
    this.router.navigate(["devices/", this.device.id]);
  }
}
