import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipie: Recipie[] = [
    new Recipie('A test recipie', 'this is only a test', 'https://www.myrecipes.com/recipe/fettuccine-with-olive-oil' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
