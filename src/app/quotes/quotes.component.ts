import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1, 'lucky', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'ian', 'I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quotes(3,'juma', 'Diana has her birthday coming up soon',new Date(2022,1,12)),
  ];
  
  toggleDetails(index: string | number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deletequotes(isComplequotes: any, index: number){
    if (isComplequotes) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuotes(quotes){
    let quotesLength = this.quotes.length;
    quotes.id = quotesLength+1;
    quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
