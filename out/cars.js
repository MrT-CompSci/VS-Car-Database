var Car = /** @class */ (function () {
    function Car(model, doors, isElectric, colour) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.colour = colour;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    Car.prototype.displayDoors = function () {
        console.log("The " + this.model + " has " + this.doors + " doors.");
    };
    Car.prototype.displayPower = function () {
        if (this.isElectric) {
            console.log("The " + this.model + " is an electric car.");
        }
        else {
            console.log("The " + this.model + " is not an electric vehicle.");
        }
    };
    Car.prototype.displayColour = function () {
        console.log("The " + this.model + " is " + this.colour);
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true, 'Pink');
var Banger = new Car('Banger', 3, false, 'Blue');
var Clown = new Car('Sloppy', 4, true, 'Yellow');
Prius.displayMake();
Prius.displayDoors();
Prius.displayPower();
Banger.displayPower();
Banger.displayDoors();
Banger.displayColour();
Clown.displayColour();
Clown.displayDoors();
var myArray = [Prius, Banger, Clown];
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var item = myArray_1[_i];
    console.log(item.colour);
}
//# sourceMappingURL=cars.js.map