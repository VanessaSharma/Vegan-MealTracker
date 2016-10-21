import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    inputs: ['meal'],
  template: `
  <div>
    <img *ngIf="meal.calories < 500" class="healthConcious img-responsive" src="./img/healthy.png"/>
    <img *ngIf="meal.calories >= 500" class="healthConcious img-responsive" src="./img/unhealth4.png"/>
    <label>
      <ul>
        <li>{{ currentMeal.name }}</li>
        <li>{{ currentMeal.details}}</li>
        <li>{{ currentMeal.description}}</li>
      </ul>
    </label>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;

}
