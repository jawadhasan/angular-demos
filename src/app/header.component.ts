import { Component } from '@angular/core';

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
        <a class="nav-link" routerLink="/books">Books</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/posts">Posts</a>
      </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="/devices">Devices</a>
      </li>
    <li class="nav-item">
        <a class="nav-link" routerLink="/konvademo">Stage</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/users">Users</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/notes">Notes</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" routerLink="/basicdemos">Basics</a>
      </li>
      <!-- <li class="nav-item">
          <button class="pull-right" *ngIf="!isLoggedIn" (click)="login()">Login</button>
          <button class="pull right" *ngIf="isLoggedIn" (click)="logout()">Logout</button>
        </li> -->

    <li>

    </li>

    </ul>
  </div>
</nav>
  `,
})
export class HeaderComponent {

  constructor(){

  }
}
