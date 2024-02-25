import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Angular Demos</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
    aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <li class="nav-item">
        <a class="nav-link" routerLink="/products">Products</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/flexdemo">Flex-demo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/sample">Sample</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/canvas">Canvas</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/rxjs">RxJS</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/users">Users</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/forms">Forms</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/quotes">Quotes</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/devices">Devices</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/notes">Notes</a>
      </li>

      <!-- <li class="nav-item">
          <button class="pull-right" *ngIf="!isLoggedIn" (click)="login()">Login</button>
          <button class="pull right" *ngIf="isLoggedIn" (click)="logout()">Logout</button>
        </li> -->

    <li>
      <button class="btn btn-primary" (click)="gotoAbout()">AboutPage</button>
    </li>

    </ul>
  </div>
</nav>
  `,
})
export class HeaderComponent {

  constructor(private router: Router ){

  }

  gotoAbout(){

    performance.mark('routingStart');

    //routing
    this.router.navigateByUrl(`/about`)

  }
}
