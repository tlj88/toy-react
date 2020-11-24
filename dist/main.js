/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react.js */ "./toy-react.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // function Square(props) {
//     return (
//         <button class="square" onClick={props.onClick}>
//             {props.value}
//         </button>
//     );
// }

var Square = /*#__PURE__*/function (_Component) {
  _inherits(Square, _Component);

  var _super = _createSuper(Square);

  function Square(props) {
    _classCallCheck(this, Square);

    return _super.call(this, props);
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
        "class": "square",
        onClick: this.props.onClick
      }, this.props.value);
    }
  }]);

  return Square;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Board = /*#__PURE__*/function (_Component2) {
  _inherits(Board, _Component2);

  var _super2 = _createSuper(Board);

  function Board(props) {
    var _this;

    _classCallCheck(this, Board);

    _this = _super2.call(this, props);
    _this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    return _this;
  }

  _createClass(Board, [{
    key: "handleClick",
    value: function handleClick(i) {
      var squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this2 = this;

      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Square, {
        value: this.state.squares[i],
        onClick: function onClick() {
          return _this2.handleClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "status"
      }, status), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Game = /*#__PURE__*/function (_Component3) {
  _inherits(Game, _Component3);

  var _super3 = _createSuper(Game);

  function Game() {
    _classCallCheck(this, Game);

    return _super3.apply(this, arguments);
  }

  _createClass(Game, [{
    key: "render",
    value: function render() {
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "game"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "game-board"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Board, null)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        "class": "game-info"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ol", null)));
    }
  }]);

  return Game;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Game, null), document.getElementById('root')); // class MyComponent extends Component {
//     constructor(props) { 
//         super(props)
//         this.state = {
//             a: 1,
//             b: 2
//         }
//     }
//     render() { 
//         return <div class="my-component">
//             <h1>my component</h1>
//             <button onclick={() => { this.setState({ a: this.state.a++ })}}>click</button>
//             <span>{this.state.a.toString()}</span>
//             <span>{this.state.b.toString()}</span>
//         </div>
//     }
// }
// // jsx
// render(<MyComponent id="app" class="test">
//     <div>bjyx</div>
//     <div></div>
//     <div></div>
// </MyComponent>, document.getElementById('app'))

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: createElement, Component, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RENDER_TO_DOM = Symbol('render to dom'); // 原生的DOM对象是无论如何都没有办法去appendChild一个component的，
// 所以给原生dom对象封一层wrapper, wrapper具有setAttribute和appendChild方法，同时component也具有setAttribute和appendChild方法

var ElementWrapper = /*#__PURE__*/function () {
  function ElementWrapper(tagName) {
    _classCallCheck(this, ElementWrapper);

    this.root = document.createElement(tagName);
  }

  _createClass(ElementWrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      if (name.match(/^on([\s\S]+)/)) {
        // RegExp.$1
        this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, function (c) {
          return c.toLocaleLowerCase();
        }), value);
      } else {
        this.root.setAttribute(name, value);
      }
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      // if (child.root) { 
      // this.root.appendChild(child.root)
      var range = document.createRange();
      range.setStart(this.root, this.root.childNodes.length);
      range.setEnd(this.root, this.root.childNodes.length);
      child[RENDER_TO_DOM](range); // }
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      range.deleteContents();
      range.insertNode(this.root); // 插入到末尾
    }
  }]);

  return ElementWrapper;
}();

var TextWrapper = /*#__PURE__*/function () {
  function TextWrapper(content) {
    _classCallCheck(this, TextWrapper);

    this.root = document.createTextNode(content);
  }

  _createClass(TextWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      range.deleteContents();
      range.insertNode(this.root); // 插入到末尾
    }
  }]);

  return TextWrapper;
}();

var Component = /*#__PURE__*/function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this._root = null;
    this.props = props;
    this.attributes = {};
    this.children = [];
    this._range = null;
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.attributes[name] = value; // props还未实现
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      // component 添加 
      this.children.push(child);
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range;
      this.render()[RENDER_TO_DOM](range);
    }
  }, {
    key: "rerender",
    value: function rerender() {
      this._range.deleteContents();

      this[RENDER_TO_DOM](this._range);
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      if (this.state === null || _typeof(this.state) !== 'object') {
        this.state = newState;
        this.rerender();
        return;
      }

      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          if (oldState[p] === null || _typeof(oldState) !== 'object') {
            oldState[p] = newState[p];
          } else {
            merge(oldState[p], newState[p]);
          }
        }
      };

      merge(this.state, newState);
      this.rerender();
    } // 第1课
    // get root() { 
    //     if (!this._root) { 
    //         this._root = this.render().root
    //     }
    //     return this._root
    // }

  }]);

  return Component;
}();

function insertChild(child, parent) {
  if (_typeof(child) == 'object' && child instanceof Array) {
    var _iterator = _createForOfIteratorHelper(child),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var c = _step.value;
        insertChild(c, parent);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (typeof child === 'string') {
    child = new TextWrapper(child);
  }

  parent.appendChild(child);
}
/**
 * @param {*} type 
 * @param {*} attributes 
 * @param  {...any} children 
 */


function createElement(type, attributes) {
  var e;

  if (typeof type === 'string') {
    e = new ElementWrapper(type);
  } else {
    e = new type();
  }

  if (attributes) {
    for (var key in attributes) {
      var value = attributes[key];
      e.setAttribute(key, value);
    }
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children) {
    var _iterator2 = _createForOfIteratorHelper(children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;
        insertChild(child, e);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  return e;
}

function render(component, mountEle) {
  // 第1课
  // mountEle.appendChild(component.root)
  var range = document.createRange();
  range.setStart(mountEle, 0);
  range.setEnd(mountEle, mountEle.childNodes.length);
  range.deleteContents();
  component[RENDER_TO_DOM](range);
}



/***/ })

/******/ });
//# sourceMappingURL=main.js.map