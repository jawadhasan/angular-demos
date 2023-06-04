import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {


  quotes:any;
  selectedQuote:any;

  constructor(public quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quotes = this.quotesService.getQuotes();   
  }

  public selectQuote(quote:any){
    this.selectedQuote = quote;
  }
}
