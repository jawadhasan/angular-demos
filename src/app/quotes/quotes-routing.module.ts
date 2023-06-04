import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';

const routes: Routes = [
  { path: 'quote-create', component: QuotesCreateComponent },
  { path: '', component: QuotesComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuotesRoutingModule { }
