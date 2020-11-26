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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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



var Square = /*#__PURE__*/function (_Component) {
  _inherits(Square, _Component);

  var _super = _createSuper(Square);

  function Square() {
    _classCallCheck(this, Square);

    return _super.apply(this, arguments);
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
        className: "square",
        onClick: this.props.onClick
      }, this.props.value);
    }
  }]);

  return Square;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Board = /*#__PURE__*/function (_Component2) {
  _inherits(Board, _Component2);

  var _super2 = _createSuper(Board);

  function Board() {
    _classCallCheck(this, Board);

    return _super2.apply(this, arguments);
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this = this;

      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this.props.onClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Game = /*#__PURE__*/function (_Component3) {
  _inherits(Game, _Component3);

  var _super3 = _createSuper(Game);

  function Game(props) {
    var _this2;

    _classCallCheck(this, Game);

    _this2 = _super3.call(this, props);
    _this2.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this2;
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares);
      var moves = history.map(function (step, move) {
        var desc = move ? 'Go to move #' + move : 'Go to game start';
        return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
          key: move
        }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          onClick: function onClick() {
            return _this3.jumpTo(move);
          }
        }, desc));
      });
      var status;

      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "game"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "game-board"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        }
      })), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "game-info"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, status), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ol", null, moves)));
    }
  }]);

  return Game;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ========================================


Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Game, null), document.getElementById("root"));

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
} // class MyComponent extends Component {
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RENDER_TO_DOM = Symbol('render to dom');

var Component = /*#__PURE__*/function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      // this.attributes[name] = value    // props还未实现
      this.props[name] = value;
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
      this._vdom = this.vdom;

      this._vdom[RENDER_TO_DOM](range);
    }
  }, {
    key: "update",
    value: function update() {
      var isSameNode = function isSameNode(oldNode, newNode) {
        if (oldNode.type !== newNode.type) {
          return false;
        }

        for (var name in newNode.props) {
          if (newNode.props[name] !== oldNode.props[name]) {
            return false;
          }
        }

        if (Object.keys(oldNode.props).length !== Object.keys(newNode.props).length) {
          return false;
        }

        if (newNode.type == '#text') {
          if (newNode.content !== oldNode.content) {
            return false;
          }
        }

        return true;
      };

      var update = function update(oldNode, newNode) {
        // type, props, children
        // #text content
        if (!isSameNode(oldNode, newNode)) {
          // 这边体现range的优势，可以非常方便的更新range的内容
          newNode[RENDER_TO_DOM](oldNode._range);
          return;
        }

        newNode._range = oldNode._range;
        var newChildren = newNode.vchildren;
        var oldChildren = oldNode.vchildren;

        for (var i = 0; i < newChildren.length; i++) {
          var newChild = newChildren[i];
          var oldChild = oldChildren[i];

          if (!newChildren || !newChildren.length) {
            return;
          }

          var tailRange = oldChildren[oldChildren.length - 1]._range;

          if (i < oldChildren.length) {
            update(oldChild, newChild);
          } else {
            var range = document.createRange();
            range.setStart(tailRange.endContainer, tailRange.endOffset);
            range.setEnd(tailRange.endContainer, tailRange.endOffset);
            newChild[RENDER_TO_DOM](range);
            tailRange = range;
          }
        }
      };

      var vdom = this.vdom;
      update(this._vdom, vdom);
      this._vdom = vdom;
    } // rerender() {
    // let oldRange = this._range 
    // let range = document.createRange()
    // range.setStart(oldRange.startContainer, oldRange.startOffset)
    // range.setEnd(oldRange.startContainer, oldRange.startOffset)
    // this[RENDER_TO_DOM](range)
    // oldRange.setStart(range.endContainer, range.endOffset)
    // oldRange.deleteContents()
    // }

  }, {
    key: "setState",
    value: function setState(newState) {
      if (this.state === null || _typeof(this.state) !== 'object') {
        this.state = newState; // this.rerender()

        this.update();
        return;
      }

      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          if (oldState[p] === null || _typeof(oldState[p]) !== 'object') {
            oldState[p] = newState[p];
          } else {
            merge(oldState[p], newState[p]);
          }
        }
      };

      merge(this.state, newState); // this.rerender()

      this.update();
    }
  }, {
    key: "vdom",
    get: function get() {
      return this.render().vdom;
    } // get vchildren() { 
    //     return this.children.map(child => child.vdom)
    // }

  }]);

  return Component;
}();

var ElementWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ElementWrapper, _Component);

  var _super = _createSuper(ElementWrapper);

  function ElementWrapper(type) {
    var _this;

    _classCallCheck(this, ElementWrapper);

    _this = _super.call(this, type);
    _this.type = type; // this.root = document.createElement(type)

    return _this;
  }

  _createClass(ElementWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range; // range.deleteContents()

      var root = document.createElement(this.type);

      for (var name in this.props) {
        var value = this.props[name];

        if (name.match(/^on([\s\S]+)/)) {
          root.addEventListener(RegExp.$1.replace(/^[\s\S]/, function (c) {
            return c.toLocaleLowerCase();
          }), value);
        } else {
          if (name === 'className') {
            name = 'class';
          }

          root.setAttribute(name, value);
        }
      }

      if (!this.vchildren) {
        this.vchildren = this.children.map(function (child) {
          return child.vdom;
        });
      }

      var _iterator = _createForOfIteratorHelper(this.vchildren),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          var childRange = document.createRange();
          childRange.setStart(root, root.childNodes.length);
          childRange.setEnd(root, root.childNodes.length);
          child[RENDER_TO_DOM](childRange);
        } // range.insertNode(root)  // 插入到末尾

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      replaceContent(range, root);
    }
  }, {
    key: "vdom",
    get: function get() {
      this.vchildren = this.children.map(function (child) {
        return child.vdom;
      });
      return this; // return {
      //     type: this.type,
      //     props: this.props,
      //     children: this.children.map(child => child.vdom)
      // }
    }
  }]);

  return ElementWrapper;
}(Component);

var TextWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(TextWrapper, _Component2);

  var _super2 = _createSuper(TextWrapper);

  function TextWrapper(content) {
    var _this2;

    _classCallCheck(this, TextWrapper);

    _this2 = _super2.call(this, content);
    _this2.type = '#text';
    _this2.content = content; // this.root = document.createTextNode(content)

    return _this2;
  }

  _createClass(TextWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range; // range.deleteContents()
      // range.insertNode(this.root)  // 插入到末尾

      var root = document.createTextNode(this.content);
      replaceContent(range, root);
    }
  }, {
    key: "vdom",
    get: function get() {
      return this; // return {
      //     type: '#text',
      //     content: this.content
      // }
    }
  }]);

  return TextWrapper;
}(Component);

function replaceContent(range, node) {
  range.insertNode(node);
  range.setStartAfter(node);
  range.deleteContents();
  range.setStartBefore(node);
  range.setEndAfter(node);
}

function insertChild(children, parent) {
  // if (
  //     typeof child == 'object' &&
  //     child instanceof Array
  // ) { 
  //     for (let c of child) { 
  //         insertChild(c, parent)
  //     }
  // }
  // if (child === null) {
  //     return
  // }
  // if (typeof child === 'string') {
  //     child = new TextWrapper(child)
  // }
  // parent.appendChild(child)
  var _iterator2 = _createForOfIteratorHelper(children),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var child = _step2.value;

      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }

      if (child === null) {
        continue;
      }

      if (_typeof(child) == 'object' && child instanceof Array) {
        insertChild(child, parent);
      } else {
        parent.appendChild(child);
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
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
    e = new type(attributes);
  }

  if (attributes) {
    for (var key in attributes) {
      var value = attributes[key];
      e.setAttribute(key, value);
    }
  } // if (children) {
  //     for (let child of children) {
  //         insertChild(child, e)          
  //     }
  // }


  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children) {
    insertChild(children, e);
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