import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1, 'lucky', 'Find an online version and watch merlin find his son'),
    new Quotes(2,'ian','I have to buy cookies for the parrot'),
    new Quotes(3,'juma','Diana has her birthday coming up soon'),
  ]
  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  @Output() isComplete = new EventEmitter<boolean>();

  quotesComplete(Complete:boolean){
    this.isComplete.emit(Complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
