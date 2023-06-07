import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { SharedModule } from './shared/shared.module';
import { SampleComponent } from './components/sample/sample.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceCardComponent } from './components/devices/device-card.component';
import { DeviceCreateComponent } from './components/devices/device-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    AboutComponent,
    HomeComponent,
    DevicesComponent,
    DeviceCardComponent,
    DeviceCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
