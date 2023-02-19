"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animal = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Animal = /*#__PURE__*/function () {
  function Animal() {
    _classCallCheck(this, Animal);
  }
  _createClass(Animal, [{
    key: "feed",
    value: function feed() {}
  }]);
  return Animal;
}();
exports.Animal = Animal;
var Horse = /*#__PURE__*/function (_Animal) {
  _inherits(Horse, _Animal);
  var _super = _createSuper(Horse);
  function Horse() {
    _classCallCheck(this, Horse);
    return _super.apply(this, arguments);
  }
  return _createClass(Horse);
}(Animal);
function Movable(Base) {
  return /*#__PURE__*/function (_Base) {
    _inherits(BaseWithMove, _Base);
    var _super2 = _createSuper(BaseWithMove);
    function BaseWithMove() {
      var _this;
      _classCallCheck(this, BaseWithMove);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super2.call.apply(_super2, [this].concat(args));
      _defineProperty(_assertThisInitialized(_this), "speed", 0);
      return _this;
    }
    _createClass(BaseWithMove, [{
      key: "move",
      value: function move() {}
    }]);
    return BaseWithMove;
  }(Base);
}
;
var MovableHorse = Movable(Horse);
var horse = new MovableHorse();
horse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbmltYWwiLCJIb3JzZSIsIk1vdmFibGUiLCJCYXNlIiwiTW92YWJsZUhvcnNlIiwiaG9yc2UiXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlMTIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFuaW1hbCB7XHJcbiAgIGZlZWQoKTogdm9pZCB7IH07XHJcbn1cclxuY2xhc3MgSG9yc2UgZXh0ZW5kcyBBbmltYWwgeyB9XHJcbnR5cGUgQ29uc3RydWN0b3IgPSBuZXcgKC4uLmFyZ3M6IGFueVtdKSA9PiB7fTtcclxuXHJcbmZ1bmN0aW9uIE1vdmFibGU8QmFzZUNvbnN0cnVjdG9yIGV4dGVuZHMgQ29uc3RydWN0b3I+KEJhc2U6IEJhc2VDb25zdHJ1Y3Rvcikge1xyXG4gICByZXR1cm4gY2xhc3MgQmFzZVdpdGhNb3ZlIGV4dGVuZHMgQmFzZSB7XHJcbiAgICAgIHNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgICBtb3ZlKCkgeyB9XHJcbiAgIH1cclxufTtcclxuXHJcbmNvbnN0IE1vdmFibGVIb3JzZSA9IE1vdmFibGUoSG9yc2UpO1xyXG5jb25zdCBob3JzZSA9IG5ldyBNb3ZhYmxlSG9yc2UoKTtcclxuaG9yc2U7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxNQUFNO0VBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BQ2hCLGdCQUFhLENBQUU7RUFBQztFQUFBO0FBQUE7QUFBQTtBQUFBLElBRWJDLEtBQUs7RUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBLEVBQVNELE1BQU07QUFHMUIsU0FBU0UsT0FBTyxDQUFzQ0MsSUFBcUIsRUFBRTtFQUMxRTtJQUFBO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtRQUFBO01BQUE7TUFBQTtNQUFBLHdEQUNtQixDQUFDO01BQUE7SUFBQTtJQUFBO01BQUE7TUFBQSxPQUNqQixnQkFBTyxDQUFFO0lBQUM7SUFBQTtFQUFBLEVBRnFCQSxJQUFJO0FBSXpDO0FBQUM7QUFFRCxJQUFNQyxZQUFZLEdBQUdGLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO0FBQ25DLElBQU1JLEtBQUssR0FBRyxJQUFJRCxZQUFZLEVBQUU7QUFDaENDLEtBQUsifQ==