import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuotesListComponent {

  quotes$ = this.quotesService.quotes$;

  selectedQuote: any;

  constructor(public quotesService: QuotesService) {}

  public selectQuote(quote: any) {
    this.selectedQuote = quote;
  }
}
