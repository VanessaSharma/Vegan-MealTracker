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
    var NewMealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            }],
        execute: function() {
            NewMealComponent = (function () {
                function NewMealComponent() {
                    this.newMealSender = new core_1.EventEmitter();
                }
                NewMealComponent.prototype.addClicked = function (name, details, calories) {
                    var newMealToAdd = new meal_model_1.Meal(name, details, calories);
                    this.newMealSender.emit(newMealToAdd);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NewMealComponent.prototype, "newMealSender", void 0);
                NewMealComponent = __decorate([
                    core_1.Component({
                        selector: 'new-meal',
                        template: "\n  <h1>New Tap</h1>\n   <div>\n     <label>Enter Meal Name:</label>\n     <input #newName>\n   </div>\n   <div>\n     <label>Enter Meal Details:</label>\n     <input #newDetails>\n   </div>\n   <div>\n     <label>Enter Total Calories in Meal:</label>\n     <input #newCalories>\n     <button (click)=\"addClicked(newName.value, newDetails.value, newCalories.value);\n     newName.value='';\n     newDetails.value='';\n     newCalories.value='';\n     \">Add</button>\n   </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewMealComponent);
                return NewMealComponent;
            }());
            exports_1("NewMealComponent", NewMealComponent);
        }
    }
});
//# sourceMappingURL=new-meal.component.js.map