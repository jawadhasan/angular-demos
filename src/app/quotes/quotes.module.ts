import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    QuotesComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    SharedModule
  ]
})
export class QuotesModule { }
