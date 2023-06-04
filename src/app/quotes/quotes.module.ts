import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuotesRoutingModule } from './quotes-routing.module';
import { QuotesComponent } from './components/quotes/quotes.component';
import { SharedModule } from '../shared/shared.module';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { QuotesCreateComponent } from './components/quotes-create/quotes-create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuotesComponent,
    QuotesListComponent,
    QuotesCreateComponent
  ],
  imports: [
    CommonModule,
    QuotesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class QuotesModule { }
