System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.clickSender = new core_1.EventEmitter();
                }
                MealListComponent.prototype.editButtonHasBeenClicked = function (mealToEdit) {
                    this.clickSender.emit(mealToEdit);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], MealListComponent.prototype, "childMealList", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MealListComponent.prototype, "clickSender", void 0);
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'vegan-mealtracker-list',
                        template: "\n  <div *ngFor=\"let currentMeal of childMealList\">\n    <h4>{{ currentMeal.name }}</h3>\n    <h4>{{ currentMeal.details }}</h4>\n    <h4 >{{ currentTap.calories }}</h4>\n  <button (click)=\"editButtonHasBeenClicked(currentMeal)\">Edit</button>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map