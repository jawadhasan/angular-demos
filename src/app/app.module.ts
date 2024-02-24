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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TempRefSampleComponent } from './components/sample/tempref-sample.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NotesListComponent } from './components/notes/notes-list.component';
import { NotesCardComponent } from './components/notes/notes-card.component';
import { MyLoaderComponent } from './common/loader/my-loader.component';
import { LoaderService } from './common/loader/loader.service';
import { LoaderInterceptor } from './common/loader/loader.Interceptor.service';
import { HeaderComponent } from './header.component';
import { ConvertToSpaces } from './common/convert-to-space.pipe';
import { DisplayNoteCategory } from './components/notes/display-note-category.pipe';
import { FormsSampleComponent } from './components/sample/forms-sample.component';
import { CanvasDemoComponent } from './components/canvas-demo/canvas-demo.component';
import { RxjsDemosComponent } from './components/rxjs-demos/rxjs-demos.component';
import { UsersComponent } from './components/users/users.component';
import { FirstInterceptor } from './services/first-interceptor';
import { SecondInterceptor } from './services/second-interceptor';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


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
    FormsSampleComponent,

    NotesListComponent,
    NotesCardComponent,

    //pipes
    ConvertToSpaces,
    DisplayNoteCategory,
    CanvasDemoComponent,
    RxjsDemosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: 'ng Demos Application Dev Tools',
      maxAge: 25,
      logOnly: environment.production
    }),

  ],
  providers: [
    HttpClient,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS, //Token
      useClass: FirstInterceptor, //actual interceptor,
      multi: true //shoud be set to true for interceptors
    },
    {
      provide: HTTP_INTERCEPTORS, //Token
      useClass: SecondInterceptor, //actual interceptor,
      multi: true //shoud be set to true for interceptors
    },
    //and so on... applied in order

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
