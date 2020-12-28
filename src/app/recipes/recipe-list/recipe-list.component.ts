import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('recipe 1', 'a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-taco-lime-shrimp-still006-1527253576.jpeg'),
    new Recipe('recipe 2', 'another test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-taco-lime-shrimp-still006-1527253576.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
