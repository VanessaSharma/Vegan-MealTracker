import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
    selector: 'meal-display',
    template: `
  <div>
    <img *ngIf="currentMeal.calories< 500" class="low img-responsive" src="./img/healthy.png"/>
    <img *ngIf="currentMeal.calories>= 500" class="high img-responsive" src="./img/unhealth4.png"/>
    <label>
      <ul>
        <li>{{ currentMeal.name }}</li>
        <li>{{ currentMeal.calories}}</li>
        <li>{{ currentMeal.details}}</li>
      </ul>
    </label>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;

}
