import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { Quotes } from '../quotes';
 
@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  [x: string]: any;
  @Input() quotes: Quotes;
  @Output() isComplequotes= new EventEmitter<boolean>()
  numberoflikes : number=0
  numberofdislikes : number=0
     likebuttonclick(){
     this.numberoflikes++;
}
  dislikebuttonclick(){
  this.numberofdislikes++;
}
  constructor() { }


  quoteDelete(Complete:boolean){
    this.isComplequotes.emit(Complete);
  }

  ngOnInit(): void {
  }

}
