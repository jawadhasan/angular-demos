import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SampleComponent } from './components/sample/sample.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {
    path: 'quotes',
    loadChildren: () => import('./quotes/quotes.module').then(m => m.QuotesModule)
  },

  { path: '', component: SampleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
