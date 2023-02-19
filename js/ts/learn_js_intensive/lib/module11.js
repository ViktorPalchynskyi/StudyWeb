"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animal = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Movable = /*#__PURE__*/function () {
  function Movable() {
    _classCallCheck(this, Movable);
  }
  _createClass(Movable, [{
    key: "move",
    value: function move() {}
  }]);
  return Movable;
}();
var Horse = /*#__PURE__*/_createClass(function Horse() {
  _classCallCheck(this, Horse);
});
function applyMixins(child, parents) {
  parents.forEach(function (parent) {
    return Object.getOwnPropertyNames(parent.prototype).forEach(function (name) {
      child.prototype[name] = parent.prototype[name];
    });
  });
}
;
applyMixins(Horse, [Animal, Movable]);
var horse = new Horse();
horse.feed();
horse.move();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbmltYWwiLCJNb3ZhYmxlIiwiSG9yc2UiLCJhcHBseU1peGlucyIsImNoaWxkIiwicGFyZW50cyIsImZvckVhY2giLCJwYXJlbnQiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwicHJvdG90eXBlIiwibmFtZSIsImhvcnNlIiwiZmVlZCIsIm1vdmUiXSwic291cmNlcyI6WyIuLi9zcmMvbW9kdWxlMTEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFuaW1hbCB7XHJcbiAgIGZlZWQoKTogdm9pZCB7IH07XHJcbn1cclxuY2xhc3MgTW92YWJsZSB7XHJcbiAgIG1vdmUoKTogdm9pZCB7IH07XHJcbn1cclxuXHJcbmNsYXNzIEhvcnNlIHsgfVxyXG5pbnRlcmZhY2UgSG9yc2UgZXh0ZW5kcyBBbmltYWwsIE1vdmFibGUgeyB9XHJcblxyXG50eXBlIENvbnN0cnVjdCA9IG5ldyAoLi4uYXJnczogYW55W10pID0+IHt9O1xyXG5cclxuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2hpbGQ6IENvbnN0cnVjdCwgcGFyZW50czogQ29uc3RydWN0W10pIHtcclxuICAgcGFyZW50cy5mb3JFYWNoKHBhcmVudCA9PiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwYXJlbnQucHJvdG90eXBlKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICBjaGlsZC5wcm90b3R5cGVbbmFtZV0gPSBwYXJlbnQucHJvdG90eXBlW25hbWVdO1xyXG4gICB9KSlcclxufTtcclxuXHJcbmFwcGx5TWl4aW5zKEhvcnNlLCBbQW5pbWFsLCBNb3ZhYmxlXSk7XHJcbmxldCBob3JzZTogSG9yc2UgPSBuZXcgSG9yc2UoKTtcclxuaG9yc2UuZmVlZCgpO1xyXG5ob3JzZS5tb3ZlKCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBYUEsTUFBTTtFQUFBO0lBQUE7RUFBQTtFQUFBO0lBQUE7SUFBQSxPQUNoQixnQkFBYSxDQUFFO0VBQUM7RUFBQTtBQUFBO0FBQUE7QUFBQSxJQUViQyxPQUFPO0VBQUE7SUFBQTtFQUFBO0VBQUE7SUFBQTtJQUFBLE9BQ1YsZ0JBQWEsQ0FBRTtFQUFDO0VBQUE7QUFBQTtBQUFBLElBR2JDLEtBQUs7RUFBQTtBQUFBO0FBS1gsU0FBU0MsV0FBVyxDQUFDQyxLQUFnQixFQUFFQyxPQUFvQixFQUFFO0VBQzFEQSxPQUFPLENBQUNDLE9BQU8sQ0FBQyxVQUFBQyxNQUFNO0lBQUEsT0FBSUMsTUFBTSxDQUFDQyxtQkFBbUIsQ0FBQ0YsTUFBTSxDQUFDRyxTQUFTLENBQUMsQ0FBQ0osT0FBTyxDQUFDLFVBQUFLLElBQUksRUFBSTtNQUNwRlAsS0FBSyxDQUFDTSxTQUFTLENBQUNDLElBQUksQ0FBQyxHQUFHSixNQUFNLENBQUNHLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO0lBQ2pELENBQUMsQ0FBQztFQUFBLEVBQUM7QUFDTjtBQUFDO0FBRURSLFdBQVcsQ0FBQ0QsS0FBSyxFQUFFLENBQUNGLE1BQU0sRUFBRUMsT0FBTyxDQUFDLENBQUM7QUFDckMsSUFBSVcsS0FBWSxHQUFHLElBQUlWLEtBQUssRUFBRTtBQUM5QlUsS0FBSyxDQUFDQyxJQUFJLEVBQUU7QUFDWkQsS0FBSyxDQUFDRSxJQUFJLEVBQUUifQ==