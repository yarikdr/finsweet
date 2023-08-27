(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _burger = _interopRequireDefault(require("./modules/burger"));
var _tabs = _interopRequireDefault(require("./modules/tabs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
window.addEventListener('DOMContentLoaded', function () {
  (0, _burger.default)();
  (0, _tabs.default)({
    tabsSelector: '.posts__item',
    tabsContentSelector: '.posts__main-post',
    tabByDefault: 1,
    breakpoint: 768
  });
});

},{"./modules/burger":2,"./modules/tabs":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var tabs = function tabs() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    tabsSelector = _ref.tabsSelector,
    tabsContentSelector = _ref.tabsContentSelector,
    _ref$activeClass = _ref.activeClass,
    activeClass = _ref$activeClass === void 0 ? 'active' : _ref$activeClass,
    _ref$tabByDefault = _ref.tabByDefault,
    tabByDefault = _ref$tabByDefault === void 0 ? 0 : _ref$tabByDefault,
    _ref$breakpoint = _ref.breakpoint,
    breakpoint = _ref$breakpoint === void 0 ? false : _ref$breakpoint;
  var tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);
  var hideTabsContent = function hideTabsContent() {
    tabsContent.forEach(function (item) {
      item.classList.add('hide');
    });
    tabs.forEach(function (item) {
      item.classList.remove(activeClass);
    });
  };
  hideTabsContent();
  showTabContent(tabByDefault < tabs.length - 1 ? tabByDefault : tabs.length - 1, true);
  function showTabContent(index) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    hideTabsContent();
    tabsContent[index].classList.remove('hide');
    tabs[index].classList.add(activeClass);
    if (breakpoint && !start) {
      var width = parseInt(window.getComputedStyle(document.body).width);
      if (width <= 768) {
        window.scrollTo({
          top: tabsContent[index].offsetTop - 80,
          behavior: 'smooth',
          left: 0
        });
      }
    }
  }
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      if (tab === tabs[i]) {
        showTabContent(i);
      }
    });
  });
};
var _default = tabs;
exports.default = _default;

},{}]},{},[1]);
