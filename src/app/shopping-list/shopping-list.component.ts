import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredientes:Ingredient[] = [
  new Ingredient('Manzanas',5),
  new Ingredient('Tommates',10)
];

  constructor() { }

  ngOnInit(): void {
  }

}
