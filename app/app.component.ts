import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Krishna's Vegan Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
      ></meal-list>
      <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
      ></edit-meal>
      <new-meal
        (newMealSender)="addMeal($event)"
        ></new-meal>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Saag Tofu", "Ate one portion size of Saag Tofu.", 230),
    new Meal("Lobia Curry", "Ate 1/2 portion sixe of Lobia Curry.", 175),
    new Meal("Punjabi Chole Bhature", "Remind me to never eat this unhealthy for dinner!", 1345),
    new Meal("Mexican Bowl", "Rice,beans, and salsa are the only things I need.", 375),
    new Meal("Falafel Over Rice", "Ate one serving of falafel and a side of saffron rice.", 664)
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
