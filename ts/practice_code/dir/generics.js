"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var number = identity(123);
var str = identity('some');
function logginIdentity(arg) {
  console.log('length', arg.length);
  return arg;
}
;
;
function identity(arg) {
  return arg;
}
;
var typeArr = logginIdentity([2, 3, 4]);
var identifier = identity;
var GenerecNumber = /*#__PURE__*/function () {
  function GenerecNumber(zeroValue) {
    _classCallCheck(this, GenerecNumber);
    _defineProperty(this, "zeroValue", void 0);
    this.zeroValue = zeroValue;
  }
  _createClass(GenerecNumber, [{
    key: "add",
    value: function add(x, y) {
      if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
      }
      ;
      return;
    }
  }]);
  return GenerecNumber;
}();
;
var myGenericNumber = new GenerecNumber(0);
// myGenericNumber.add = function (a, b) { return a + b };

console.log('bla', myGenericNumber.add({
  a: 22
}.a, 15));
function logger(arg) {
  console.log('arg', arg.length);
  return arg;
}
logger([23, 2123, 33, 22, 123]);
function getProperty(obj, key) {
  return obj[key];
}
;
console.log('getProperty', getProperty({
  a: 10,
  b: 15,
  c: 22
}, 'c'));
function create(c) {
  return new c();
}
;
var LivingThing = /*#__PURE__*/_createClass(function LivingThing() {
  _classCallCheck(this, LivingThing);
  _defineProperty(this, "isAlive", true);
});
;
var ZooKeeper = /*#__PURE__*/_createClass(function ZooKeeper() {
  _classCallCheck(this, ZooKeeper);
  _defineProperty(this, "nametag", 'Misha');
});
;
var Lion = /*#__PURE__*/function (_LivingThing) {
  _inherits(Lion, _LivingThing);
  var _super = _createSuper(Lion);
  function Lion() {
    var _this;
    _classCallCheck(this, Lion);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "keeper", new ZooKeeper());
    return _this;
  }
  return _createClass(Lion);
}(LivingThing);
;
function crateInstanse(c) {
  return new c();
}
;
console.log('Lion', crateInstanse(Lion).keeper.nametag);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJudW1iZXIiLCJpZGVudGl0eSIsInN0ciIsImxvZ2dpbklkZW50aXR5IiwiYXJnIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInR5cGVBcnIiLCJpZGVudGlmaWVyIiwiR2VuZXJlY051bWJlciIsInplcm9WYWx1ZSIsIngiLCJ5IiwibXlHZW5lcmljTnVtYmVyIiwiYWRkIiwiYSIsImxvZ2dlciIsImdldFByb3BlcnR5Iiwib2JqIiwia2V5IiwiYiIsImMiLCJjcmVhdGUiLCJMaXZpbmdUaGluZyIsIlpvb0tlZXBlciIsIkxpb24iLCJjcmF0ZUluc3RhbnNlIiwia2VlcGVyIiwibmFtZXRhZyJdLCJzb3VyY2VzIjpbIi4uL3NyYy9nZW5lcmljcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IG51bWJlciA9IGlkZW50aXR5KDEyMyk7XHJcbmNvbnN0IHN0ciA9IGlkZW50aXR5KCdzb21lJyk7XHJcblxyXG5mdW5jdGlvbiBsb2dnaW5JZGVudGl0eTxUeXBlPihhcmc6IEFycmF5PFR5cGU+KTogQXJyYXk8VHlwZT4ge1xyXG4gICBjb25zb2xlLmxvZygnbGVuZ3RoJywgYXJnLmxlbmd0aCk7XHJcbiAgIHJldHVybiBhcmc7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgSWRlbnRpdHlGdW5jPFR5cGU+IHtcclxuICAgKGFyZzogVHlwZSk6IFR5cGU7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpZGVudGl0eTxUPihhcmc6IFQpOiBUIHtcclxuICAgcmV0dXJuIGFyZztcclxufTtcclxuXHJcbmNvbnN0IHR5cGVBcnIgPSBsb2dnaW5JZGVudGl0eShbMiwgMywgNCxdKTtcclxuY29uc3QgaWRlbnRpZmllcjogSWRlbnRpdHlGdW5jPG51bWJlcj4gPSBpZGVudGl0eTtcclxuXHJcbmNsYXNzIEdlbmVyZWNOdW1iZXI8TnVtVHlwZT4ge1xyXG4gICB6ZXJvVmFsdWU6IE51bVR5cGU7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih6ZXJvVmFsdWU6IE51bVR5cGUpIHtcclxuICAgICAgdGhpcy56ZXJvVmFsdWUgPSB6ZXJvVmFsdWU7XHJcbiAgIH1cclxuXHJcbiAgIGFkZCh4OiBOdW1UeXBlLCB5OiBOdW1UeXBlKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgIHJldHVybiB4ICsgeTtcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9O1xyXG59O1xyXG5cclxubGV0IG15R2VuZXJpY051bWJlciA9IG5ldyBHZW5lcmVjTnVtYmVyPG51bWJlcj4oMCk7XHJcbi8vIG15R2VuZXJpY051bWJlci5hZGQgPSBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSArIGIgfTtcclxuXHJcbmNvbnNvbGUubG9nKCdibGEnLCBteUdlbmVyaWNOdW1iZXIuYWRkKHsgYTogMjIgfS5hLCAxNSkpO1xyXG5cclxuaW50ZXJmYWNlIExlbmd0aHdpc2Uge1xyXG4gICBsZW5ndGg6IG51bWJlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9nZ2VyPFR5cGUgZXh0ZW5kcyBMZW5ndGh3aXNlPihhcmc6IFR5cGUpOiBUeXBlIHtcclxuICAgY29uc29sZS5sb2coJ2FyZycsIGFyZy5sZW5ndGgpO1xyXG4gICByZXR1cm4gYXJnO1xyXG59XHJcblxyXG5sb2dnZXIoWzIzLCAyMTIzLCAzMywgMjIsIDEyM10pO1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHk8VHlwZSBleHRlbmRzIHt9LCBLZXkgZXh0ZW5kcyBrZXlvZiBUeXBlPihvYmo6IFR5cGUsIGtleTogS2V5KSB7IHJldHVybiBvYmpba2V5XSB9O1xyXG5cclxuY29uc29sZS5sb2coJ2dldFByb3BlcnR5JywgZ2V0UHJvcGVydHkoeyBhOiAxMCwgYjogMTUsIGM6IDIyIH0sICdjJykpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlPFR5cGU+KGM6IHsgbmV3KCk6IFR5cGUgfSk6IFR5cGUge1xyXG4gICByZXR1cm4gbmV3IGMoKTtcclxufTtcclxuXHJcbmNsYXNzIExpdmluZ1RoaW5nIHtcclxuICAgaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbn07XHJcblxyXG5jbGFzcyBab29LZWVwZXIge1xyXG4gICBuYW1ldGFnOiBzdHJpbmcgPSAnTWlzaGEnO1xyXG59O1xyXG5cclxuY2xhc3MgTGlvbiBleHRlbmRzIExpdmluZ1RoaW5nIHtcclxuICAga2VlcGVyOiBab29LZWVwZXIgPSBuZXcgWm9vS2VlcGVyKCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmF0ZUluc3RhbnNlPEEgZXh0ZW5kcyBMaXZpbmdUaGluZz4oYzogbmV3ICgpID0+IEEpOiBBIHtcclxuICAgcmV0dXJuIG5ldyBjKCk7XHJcbn07XHJcblxyXG5jb25zb2xlLmxvZygnTGlvbicsIGNyYXRlSW5zdGFuc2UoTGlvbikua2VlcGVyLm5hbWV0YWcpO1xyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUM1QixJQUFNQyxHQUFHLEdBQUdELFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFFNUIsU0FBU0UsY0FBYyxDQUFPQyxHQUFnQixFQUFlO0VBQzFEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLEVBQUVGLEdBQUcsQ0FBQ0csTUFBTSxDQUFDO0VBQ2pDLE9BQU9ILEdBQUc7QUFDYjtBQUFDO0FBSUE7QUFFRCxTQUFTSCxRQUFRLENBQUlHLEdBQU0sRUFBSztFQUM3QixPQUFPQSxHQUFHO0FBQ2I7QUFBQztBQUVELElBQU1JLE9BQU8sR0FBR0wsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztBQUMxQyxJQUFNTSxVQUFnQyxHQUFHUixRQUFRO0FBQUMsSUFFNUNTLGFBQWE7RUFHaEIsdUJBQVlDLFNBQWtCLEVBQUU7SUFBQTtJQUFBO0lBQzdCLElBQUksQ0FBQ0EsU0FBUyxHQUFHQSxTQUFTO0VBQzdCO0VBQUM7SUFBQTtJQUFBLE9BRUQsYUFBSUMsQ0FBVSxFQUFFQyxDQUFVLEVBQUU7TUFDekIsSUFBSSxPQUFPRCxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU9DLENBQUMsS0FBSyxRQUFRLEVBQUU7UUFDakQsT0FBT0QsQ0FBQyxHQUFHQyxDQUFDO01BQ2Y7TUFBQztNQUNEO0lBQ0g7RUFBQztFQUFBO0FBQUE7QUFDSDtBQUVELElBQUlDLGVBQWUsR0FBRyxJQUFJSixhQUFhLENBQVMsQ0FBQyxDQUFDO0FBQ2xEOztBQUVBTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVRLGVBQWUsQ0FBQ0MsR0FBRyxDQUFDO0VBQUVDLENBQUMsRUFBRTtBQUFHLENBQUMsQ0FBQ0EsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBTXhELFNBQVNDLE1BQU0sQ0FBMEJiLEdBQVMsRUFBUTtFQUN2REMsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFRixHQUFHLENBQUNHLE1BQU0sQ0FBQztFQUM5QixPQUFPSCxHQUFHO0FBQ2I7QUFFQWEsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRS9CLFNBQVNDLFdBQVcsQ0FBMENDLEdBQVMsRUFBRUMsR0FBUSxFQUFFO0VBQUUsT0FBT0QsR0FBRyxDQUFDQyxHQUFHLENBQUM7QUFBQztBQUFDO0FBRXRHZixPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVZLFdBQVcsQ0FBQztFQUFFRixDQUFDLEVBQUUsRUFBRTtFQUFFSyxDQUFDLEVBQUUsRUFBRTtFQUFFQyxDQUFDLEVBQUU7QUFBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFFckUsU0FBU0MsTUFBTSxDQUFPRCxDQUFrQixFQUFRO0VBQzdDLE9BQU8sSUFBSUEsQ0FBQyxFQUFFO0FBQ2pCO0FBQUM7QUFBQyxJQUVJRSxXQUFXO0VBQUE7RUFBQSxpQ0FDSyxJQUFJO0FBQUE7QUFDekI7QUFBQyxJQUVJQyxTQUFTO0VBQUE7RUFBQSxpQ0FDTSxPQUFPO0FBQUE7QUFDM0I7QUFBQyxJQUVJQyxJQUFJO0VBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO01BQUE7SUFBQTtJQUFBO0lBQUEseURBQ2EsSUFBSUQsU0FBUyxFQUFFO0lBQUE7RUFBQTtFQUFBO0FBQUEsRUFEbkJELFdBQVc7QUFFN0I7QUFFRCxTQUFTRyxhQUFhLENBQXdCTCxDQUFjLEVBQUs7RUFDOUQsT0FBTyxJQUFJQSxDQUFDLEVBQUU7QUFDakI7QUFBQztBQUVEakIsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFcUIsYUFBYSxDQUFDRCxJQUFJLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMifQ==