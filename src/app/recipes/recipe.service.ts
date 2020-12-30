import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'recipe 1',
      'a test',
      'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_2560%2Cc_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Vegi', 2)]),
    new Recipe(
      'recipe 2',
      'another test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-taco-lime-shrimp-still006-1527253576.jpeg',
      [new Ingredient('Meat', 2), new Ingredient('Cheese', 3)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
