import { Component } from '@angular/core';
import {Quotes} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[]=[
    new Quotes(1, 'Lucky', 'Change the world by being yourself.',new Date(2020,1,1)),
    new Quotes(2,'Jan','Every moment is a fresh beginning.',new Date(2020,1,1)),
    new Quotes(3,'Juma','Never regret anything that made you smile.',new Date(2020,1,1)),
  ]
}
  