(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burger = _interopRequireDefault(require("./modules/burger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
window.addEventListener('DOMContentLoaded', function () {
  (0, _burger.default)();
});

},{"./modules/burger":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var burger = function burger() {
  var burgerSel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.burger';
  var menuSel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.menu';
  var activeClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'active';
  var burger = document.querySelector(burgerSel),
    menu = document.querySelector(menuSel);
  burger.addEventListener('click', function (e) {
    e.preventDefault();
    burger.classList.toggle(activeClass);
    menu.classList.toggle(activeClass);
    document.body.classList.toggle('lock');
  });
};
var _default = burger;
exports.default = _default;

},{}]},{},[1]);
