import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <div class="container">
    <div class="row">
      <div class="col-xs-8">
        <select (change)="onChangeCalories($event.target.value)" class="filter">
          <option value="all" selected="selected">Show All Meal Diaries</option>
          <option value="low">Show Low Calorie Meals</option>
          <option value="high">Show High Calorie Meals</option>
        </select>
  <div *ngFor="let currentMeal of childMealList | calories:selectedCalories">
    <h4>Name: {{ currentMeal.name }}</h4>
    <h4 *ngIf="currentMeal.calories<500" class="low">Calories: {{ currentMeal.calories }}</h4>
    <h4 *ngIf="currentMeal.calories>=500" class="high">Calories: {{ currentMeal.calories }}</h4>
    <h4>Details: {{ currentMeal.details }}</h4>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealtoEdit: Meal) {
    this.clickSender.emit(mealtoEdit);
  }
  public selectedCalories: string = "all"
  onChangeCalories(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }
}
