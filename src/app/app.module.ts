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
import { TempRefSampleComponent } from './components/sample/tempref-sample.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './components/notes/notes-list.component';
import { NotesCardComponent } from './components/notes/notes-card.component';
import { MyLoaderComponent } from './common/loader/my-loader.component';
import { LoaderService } from './common/loader/loader.service';
import { LoaderInterceptor } from './common/loader/loader.Interceptor.service';
import { HeaderComponent } from './common/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyLoaderComponent,

    AboutComponent,
    HomeComponent,
    DevicesComponent,
    DeviceCardComponent,
    DeviceCreateComponent,

    SampleComponent,
    TempRefSampleComponent,
    NotesListComponent,
    NotesCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
