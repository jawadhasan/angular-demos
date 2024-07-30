import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './components/sample/sample.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.component';
import { NotesListComponent } from './components/notes/notes-list.component';
import { FormsSampleComponent } from './components/sample/forms-sample.component';
import { CanvasDemoComponent } from './components/canvas-demo/canvas-demo.component';
import { RxjsDemosComponent } from './components/rxjs-demos/rxjs-demos.component';
import { UsersComponent } from './components/users/users.component';
import { FlexBoxDemoComponent } from './components/flex-box-demo/flex-box-demo.component';
import { BasicDemosComponent } from './basic-demos/basic-demos.component';

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/product.module').then((m) => m.ProductModule),
  },
  { path: 'flexdemo', component: FlexBoxDemoComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'forms', component: FormsSampleComponent },
  { path: 'canvas', component: CanvasDemoComponent },
  { path: 'rxjs', component: RxjsDemosComponent },
  { path: 'users', component: UsersComponent },
  { path: 'basicdemos', component: BasicDemosComponent },


  {
    path: 'quotes',
    loadChildren: () =>
      import('./quotes/quotes.module').then((m) => m.QuotesModule),
  },

  { path: 'devices', component: DevicesComponent },
  { path: 'notes', component: NotesListComponent },


  { path: 'about', component: AboutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
