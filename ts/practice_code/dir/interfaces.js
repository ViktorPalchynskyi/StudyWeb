"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Bulldog = /*#__PURE__*/function () {
  function Bulldog(name, owner, color, age) {
    _classCallCheck(this, Bulldog);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "owner", void 0);
    _defineProperty(this, "color", void 0);
    _defineProperty(this, "age", void 0);
    this.name = name;
    this.owner = owner;
    this.color = color;
    this.age = age;
  }
  _createClass(Bulldog, [{
    key: "barg",
    value: function barg() {
      console.log("Dog ".concat(this.name, " bargs: gav gav"));
    }
  }, {
    key: "eat",
    value: function eat() {
      console.log("Dog ".concat(this.name, " is eating"));
    }
  }, {
    key: "move",
    value: function move() {
      console.log("Dog ".concat(this.name, " is moving"));
    }
  }]);
  return Bulldog;
}();
var mishaDog = new Bulldog('Misha', {
  name: 'The Lord of a light',
  surname: 'Bog',
  age: 10
}, 'white', 5);
mishaDog.barg();
mishaDog.eat();
mishaDog.move();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCdWxsZG9nIiwibmFtZSIsIm93bmVyIiwiY29sb3IiLCJhZ2UiLCJjb25zb2xlIiwibG9nIiwibWlzaGFEb2ciLCJzdXJuYW1lIiwiYmFyZyIsImVhdCIsIm1vdmUiXSwic291cmNlcyI6WyIuLi9zcmMvaW50ZXJmYWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgQW5pbWFsIHtcclxuICAgZWF0OiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XHJcbiAgIG1vdmU6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxuICAgY29sb3I6IHN0cmluZztcclxuICAgYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBPd25lciB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgc3VybmFtZTogc3RyaW5nO1xyXG4gICBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIERvZyBleHRlbmRzIEFuaW1hbCB7XHJcbiAgIGJhcmc6ICgpID0+IHZvaWQ7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgb3duZXI/OiBPd25lcjtcclxufVxyXG5cclxuY2xhc3MgQnVsbGRvZyBpbXBsZW1lbnRzIERvZyB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgb3duZXI/OiBPd25lciB8IHVuZGVmaW5lZDtcclxuICAgY29sb3I6IHN0cmluZztcclxuICAgYWdlOiBudW1iZXI7XHJcbiAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgb3duZXI6IE93bmVyIHwgdW5kZWZpbmVkLCBjb2xvcjogc3RyaW5nLCBhZ2U6IG51bWJlcikge1xyXG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgdGhpcy5hZ2UgPSBhZ2U7XHJcbiAgIH1cclxuXHJcbiAgIGJhcmcoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBEb2cgJHt0aGlzLm5hbWV9IGJhcmdzOiBnYXYgZ2F2YCk7XHJcbiAgIH07XHJcbiAgIGVhdCguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRG9nICR7dGhpcy5uYW1lfSBpcyBlYXRpbmdgKTtcclxuICAgfTtcclxuICAgbW92ZSguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgRG9nICR7dGhpcy5uYW1lfSBpcyBtb3ZpbmdgKTtcclxuICAgfTtcclxufVxyXG5cclxuY29uc3QgbWlzaGFEb2cgPSBuZXcgQnVsbGRvZygnTWlzaGEnLCB7IG5hbWU6ICdUaGUgTG9yZCBvZiBhIGxpZ2h0Jywgc3VybmFtZTogJ0JvZycsIGFnZTogMTAgfSwgJ3doaXRlJywgNSk7XHJcblxyXG5taXNoYURvZy5iYXJnKCk7XHJcbm1pc2hhRG9nLmVhdCgpO1xyXG5taXNoYURvZy5tb3ZlKCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFtQk1BLE9BQU87RUFLVixpQkFBWUMsSUFBWSxFQUFFQyxLQUF3QixFQUFFQyxLQUFhLEVBQUVDLEdBQVcsRUFBRTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFDN0UsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7RUFDakI7RUFBQztJQUFBO0lBQUEsT0FFRCxnQkFBTztNQUNKQyxPQUFPLENBQUNDLEdBQUcsZUFBUSxJQUFJLENBQUNMLElBQUkscUJBQWtCO0lBQ2pEO0VBQUM7SUFBQTtJQUFBLE9BQ0QsZUFBb0I7TUFDakJJLE9BQU8sQ0FBQ0MsR0FBRyxlQUFRLElBQUksQ0FBQ0wsSUFBSSxnQkFBYTtJQUM1QztFQUFDO0lBQUE7SUFBQSxPQUNELGdCQUFxQjtNQUNsQkksT0FBTyxDQUFDQyxHQUFHLGVBQVEsSUFBSSxDQUFDTCxJQUFJLGdCQUFhO0lBQzVDO0VBQUM7RUFBQTtBQUFBO0FBR0osSUFBTU0sUUFBUSxHQUFHLElBQUlQLE9BQU8sQ0FBQyxPQUFPLEVBQUU7RUFBRUMsSUFBSSxFQUFFLHFCQUFxQjtFQUFFTyxPQUFPLEVBQUUsS0FBSztFQUFFSixHQUFHLEVBQUU7QUFBRyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUUzR0csUUFBUSxDQUFDRSxJQUFJLEVBQUU7QUFDZkYsUUFBUSxDQUFDRyxHQUFHLEVBQUU7QUFDZEgsUUFBUSxDQUFDSSxJQUFJLEVBQUUifQ==