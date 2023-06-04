import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';

@Component({
  selector: 'app-quotes-create',
  templateUrl: './quotes-create.component.html',
  styleUrls: ['./quotes-create.component.css']
})
export class QuotesCreateComponent implements OnInit {

  quote : any = {id: null, quoteTitle:"", quoteText: "", author: "", createdAt: ""};

  constructor(public quotesService: QuotesService) { }

  ngOnInit(): void {
  }

  createQuote(){
    console.log(this.quote);
    this.quotesService.createQuote(this.quote);
    this.quote = {id: null, quoteTitle:"", quoteText: "", author: "", createdAt: ""};
  }
  
}
