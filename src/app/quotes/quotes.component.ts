import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1, 'Lucky', 'Change the world by being yourself. ',new Date(2020,4,1)),
    new Quotes(2,'Ian', 'Every moment is a fresh beginning.',new Date(2020,4,1)),
    new Quotes(3,'Juma', 'Never regret anything that made you smile.',new Date(2020,4,1)),
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
