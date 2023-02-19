"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dog = void 0;
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Animal = /*#__PURE__*/_createClass(function Animal(public height, public weight) {
  _classCallCheck(this, Animal);
});
var Dog = /*#__PURE__*/_createClass(function Dog(private color, public name) {
  _classCallCheck(this, Dog);
  this.name = name;
}); // class SuperDog extends Dog {
//    constructor(public color: string, name: string) {
//       super(name, color);
//    }
// }
exports.Dog = Dog;
var dog = new Dog('black', 'gav gav');
// const dog1 = new SuperDog('black', 'gav gav');
// dog.color;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbmltYWwiLCJoZWlnaHQiLCJ3ZWlnaHQiLCJEb2ciLCJjb2xvciIsIm5hbWUiLCJkb2ciXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlNy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJhYnN0cmFjdCBjbGFzcyBBbmltYWwge1xyXG4gICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVpZ2h0OiBudW1iZXIsIHB1YmxpYyB3ZWlnaHQ6IG51bWJlcikgeyB9O1xyXG5cclxuICAgYWJzdHJhY3QgbW92ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9nIHtcclxuICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb2xvcjogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgIH1cclxufVxyXG5cclxuLy8gY2xhc3MgU3VwZXJEb2cgZXh0ZW5kcyBEb2cge1xyXG4vLyAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29sb3I6IHN0cmluZywgbmFtZTogc3RyaW5nKSB7XHJcbi8vICAgICAgIHN1cGVyKG5hbWUsIGNvbG9yKTtcclxuLy8gICAgfVxyXG4vLyB9XHJcblxyXG5jb25zdCBkb2cgPSBuZXcgRG9nKCdibGFjaycsICdnYXYgZ2F2Jyk7XHJcbi8vIGNvbnN0IGRvZzEgPSBuZXcgU3VwZXJEb2coJ2JsYWNrJywgJ2dhdiBnYXYnKTtcclxuLy8gZG9nLmNvbG9yOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQWVBLE1BQU0sNkJBQ2xCLGdCQUFZLE9BQU9DLE1BQWMsRUFBRSxPQUFPQyxNQUFjLEVBQUU7RUFBQTtBQUFFLENBQUM7QUFBQSxJQUtuREMsR0FBRyw2QkFDYixhQUFZLFFBQVFDLEtBQWEsRUFBRSxPQUFPQyxJQUFZLEVBQUU7RUFBQTtFQUNyRCxJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtBQUNuQixDQUFDLEdBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlILEdBQUcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO0FBQ3ZDO0FBQ0EifQ==