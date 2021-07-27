var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EdibleThing = /** @class */ (function () {
    function EdibleThing(name, color) {
        this.name = name;
        this.color = color;
    }
    return EdibleThing;
}());
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit(name, color, sweetness) {
        var _this = _super.call(this, name, color) || this;
        _this.sweetness = sweetness;
        return _this;
    }
    Fruit.prototype.fullName = function () {
        var isSweet = this.sweetness > 50;
        return (isSweet ? 'Sweet' : '') + " " + this.color + " " + this.name;
    };
    ;
    return Fruit;
}(EdibleThing));
var apple = new Fruit('Apple', 'Red', 55);
console.log(apple.fullName());
var fruitBasket = [];
fruitBasket.push(new Fruit('Banana', 'Yellow', 103));
console.log(fruitBasket);
var Vegetable = /** @class */ (function () {
    function Vegetable(name) {
        this.name = name;
    }
    Vegetable.cookVegetable = function (vegetable) {
        setTimeout(function () { return console.log("Cooked " + vegetable.name); }, Vegetable.timeToCook * 1000);
    };
    Vegetable.timeToCook = 5;
    return Vegetable;
}());
Vegetable.cookVegetable(new Vegetable('Tomato'));
var Some = /** @class */ (function () {
    function Some(name) {
        this.name = name;
    }
    return Some;
}());
var Fruit2 = /** @class */ (function (_super) {
    __extends(Fruit2, _super);
    function Fruit2(name) {
        return _super.call(this, name) || this;
    }
    Fruit2.prototype.doSomething = function () {
        console.log("Yum. " + this.name + "s are tasty.");
    };
    return Fruit2;
}(Some));
var fruit = new Fruit2('Mellon');
fruit.doSomething();
