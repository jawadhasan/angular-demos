import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceService } from './components/devices/device.service';
import {
  EmitEvent,
  EventBusService,
  Events,
} from './services/event-bus.service';
import { UsersService } from './components/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-demos';
  eventBusSub: Subscription;
  userServiceSub:Subscription;

  constructor(
    private deviceService: DeviceService,
    private eventBusService: EventBusService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {

    //event-bus wiring
    //capture subscription and use it inside ngOnDestory
    this.eventBusSub = this.eventBusService.on(
      Events.CustomerSelected,
      (data) => {
        console.log('event-bus event recived in app.component ', data);
        this.title = data.name;
      }
    );

    //observable-service subscribing
   this.userServiceSub = this.userService.selectedUser$
    .subscribe(user=> this.title = user.email)
  }

  ngOnDestroy(): void {
    this.eventBusSub?.unsubscribe();
    this.userServiceSub?.unsubscribe();
  }
}
