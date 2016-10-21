import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], calorieIntake){
    var output: Meal[] = [];
    if(calorieIntake === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories<500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieIntake === "high")
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories>500) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
