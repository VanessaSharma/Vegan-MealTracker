System.register(['@angular/core', './meal.model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_model_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.masterMealList = [
                        new meal_model_1.Meal("Saag Tofu", "Ate one portion size of Saag Tofu.", 230),
                        new meal_model_1.Meal("Lobia Curry", "Ate 1/2 portion sixe of Lobia Curry.", 175),
                        new meal_model_1.Meal("Punjabi Chole Bhature", "Remind me to never eat this unhealthy for dinner!", 1345),
                        new meal_model_1.Meal("Mexican Bowl", "Rice,beans, and salsa are the only things I need.", 375),
                        new meal_model_1.Meal("Falafel Over Rice", "Ate one serving of falafel and a side of saffron rice.", 664)
                    ];
                    this.selectedMeal = null;
                }
                AppComponent.prototype.showDetails = function (clickedMeal) {
                    this.selectedMeal = clickedMeal;
                };
                AppComponent.prototype.finishedEditing = function () {
                    this.selectedMeal = null;
                };
                AppComponent.prototype.addMeal = function (newMealFromChild) {
                    this.masterMealList.push(newMealFromChild);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n  <div class=\"container\">\n    <h1>Krishna's Vegan Meal Tracker</h1>\n    <meal-list\n      [childMealList]=\"masterMealList\"\n      (clickSender)=\"showDetails($event)\"\n      ></meal-list>\n      <edit-meal\n      [childSelectedMeal]=\"selectedMeal\"\n      (doneClickedSender)=\"finishedEditing()\"\n      ></edit-meal>\n      <new-meal\n        (newMealSender)=\"addMeal($event)\"\n        ></new-meal>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map