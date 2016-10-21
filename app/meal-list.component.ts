import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'vegan-mealtracker-list',
  template: `
  <div *ngFor="let currentMeal of childMealList">
    <h4>{{ currentMeal.name }}</h3>
    <h4>{{ currentMeal.details }}</h4>
    <h4 >{{ currentTap.calories }}</h4>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList:Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit:Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
