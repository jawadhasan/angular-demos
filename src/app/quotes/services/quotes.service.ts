import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  quotes = [
    { id: 1, quoteTitle: "title-1", quoteText: "Quote-1", author: "Author-1", createdAt: "" },
    { id: 2, quoteTitle: "title-2", quoteText: "Quote-2", author: "Author-2", createdAt: "" },
    { id: 3, quoteTitle: "title-3", quoteText: "Quote-3", author: "Author-1", createdAt: "" },
    { id: 4, quoteTitle: "title-4", quoteText: "Quote-4", author: "Author-2", createdAt: "" }
  ];

  constructor() { }

  public getQuotes(): Array<any> {
    return this.quotes;
  }

  public createQuote(quote: any) {
    this.quotes.push(quote);
  }
}
