import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SharedModule } from '../shared/shared.module';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';


@NgModule({
  declarations: [
    QuotesComponent,
    QuotesListComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    SharedModule
  ]
})
export class QuotesModule { }
