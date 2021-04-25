import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[] = [
  new Recipe('Receta de prueba','Deliciosa tortilla de repollo y huevo','https://www.recetasbook.com/fotos/tortilla-de-repollo-1442958656.jpg'),
  new Recipe('Receta de prueba','Deliciosa tortilla de repollo y huevo','https://www.recetasbook.com/fotos/tortilla-de-repollo-1442958656.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
