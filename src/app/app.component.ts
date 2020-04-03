import { Component } from '@angular/core';
import {Quotes} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[]=[
    new Quotes(1, 'lucky', 'Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quotes(2,'ian','I have to buy cookies for the parrot',new Date(2019,6,9)),
    new Quotes(3,'juma','Diana has her birthday coming up soon',new Date(2022,1,12)),
  ]
}
  