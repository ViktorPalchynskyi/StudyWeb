"use strict";

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Base = /*#__PURE__*/function () {
  function Base() {
    _classCallCheck(this, Base);
  }
  _createClass(Base, [{
    key: "printName",
    value: function printName() {
      console.log("Hello, ".concat(this.getName()));
    }
  }]);
  return Base;
}();
var BaseThing = /*#__PURE__*/function (_Base) {
  _inherits(BaseThing, _Base);
  var _super = _createSuper(BaseThing);
  function BaseThing() {
    _classCallCheck(this, BaseThing);
    return _super.apply(this, arguments);
  }
  _createClass(BaseThing, [{
    key: "getName",
    value: function getName() {
      return 'world';
    }
  }]);
  return BaseThing;
}(Base);
var b = new BaseThing();
b.printName();
var MyNode = /*#__PURE__*/_createClass(function MyNode(private width, private height) {
  _classCallCheck(this, MyNode);
});
var CircleNode = /*#__PURE__*/function (_MyNode) {
  _inherits(CircleNode, _MyNode);
  var _super2 = _createSuper(CircleNode);
  function CircleNode() {
    _classCallCheck(this, CircleNode);
    return _super2.apply(this, arguments);
  }
  _createClass(CircleNode, [{
    key: "paint",
    value: function paint() {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "calculateSize",
    value: function calculateSize() {
      throw new Error("Method not implemented.");
    }
  }]);
  return CircleNode;
}(MyNode);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCYXNlIiwiY29uc29sZSIsImxvZyIsImdldE5hbWUiLCJCYXNlVGhpbmciLCJiIiwicHJpbnROYW1lIiwiTXlOb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJDaXJjbGVOb2RlIiwiRXJyb3IiXSwic291cmNlcyI6WyIuLi9zcmMvYWJzdHJhY3RDbGFzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJhYnN0cmFjdCBjbGFzcyBCYXNlIHtcclxuICAgYWJzdHJhY3QgZ2V0TmFtZSgpOiBzdHJpbmc7XHJcbiAgIHByaW50TmFtZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coYEhlbGxvLCAke3RoaXMuZ2V0TmFtZSgpfWApO1xyXG4gICB9XHJcbn1cclxuXHJcbmNsYXNzIEJhc2VUaGluZyBleHRlbmRzIEJhc2Uge1xyXG4gICBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnd29ybGQnO1xyXG4gICB9XHJcbn1cclxuXHJcbmNvbnN0IGIgPSBuZXcgQmFzZVRoaW5nKCk7XHJcbmIucHJpbnROYW1lKCk7XHJcblxyXG5hYnN0cmFjdCBjbGFzcyBNeU5vZGUge1xyXG4gICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpZHRoOiBudW1iZXIsIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIpIHsgfTtcclxuICAgYWJzdHJhY3QgcGFpbnQoKTogdm9pZDtcclxuICAgYWJzdHJhY3QgY2FsY3VsYXRlU2l6ZSgpOiB2b2lkO1xyXG59XHJcblxyXG5jbGFzcyBDaXJjbGVOb2RlIGV4dGVuZHMgTXlOb2RlIHtcclxuICAgcGFpbnQoKTogdm9pZCB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICB9XHJcbiAgIGNhbGN1bGF0ZVNpemUoKTogdm9pZCB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICB9XHJcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFlQSxJQUFJO0VBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BRWhCLHFCQUFZO01BQ1RDLE9BQU8sQ0FBQ0MsR0FBRyxrQkFBVyxJQUFJLENBQUNDLE9BQU8sRUFBRSxFQUFHO0lBQzFDO0VBQUM7RUFBQTtBQUFBO0FBQUEsSUFHRUMsU0FBUztFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNaLG1CQUFrQjtNQUNmLE9BQU8sT0FBTztJQUNqQjtFQUFDO0VBQUE7QUFBQSxFQUhvQkosSUFBSTtBQU01QixJQUFNSyxDQUFDLEdBQUcsSUFBSUQsU0FBUyxFQUFFO0FBQ3pCQyxDQUFDLENBQUNDLFNBQVMsRUFBRTtBQUFDLElBRUNDLE1BQU0sNkJBQ2xCLGdCQUFZLFFBQVFDLEtBQWEsRUFBRSxRQUFRQyxNQUFjLEVBQUU7RUFBQTtBQUFFLENBQUM7QUFBQSxJQUszREMsVUFBVTtFQUFBO0VBQUE7RUFBQTtJQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNiLGlCQUFjO01BQ1gsTUFBTSxJQUFJQyxLQUFLLENBQUMseUJBQXlCLENBQUM7SUFDN0M7RUFBQztJQUFBO0lBQUEsT0FDRCx5QkFBc0I7TUFDbkIsTUFBTSxJQUFJQSxLQUFLLENBQUMseUJBQXlCLENBQUM7SUFDN0M7RUFBQztFQUFBO0FBQUEsRUFOcUJKLE1BQU0ifQ==