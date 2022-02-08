(self["webpackChunkwip_chunks_boilerplate"] = self["webpackChunkwip_chunks_boilerplate"] || []).push([["component-HeaderComponent"],{

/***/ "./src/js/components/HeaderComponent.js":
/*!**********************************************!*\
  !*** ./src/js/components/HeaderComponent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _abstracts_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Component */ "./src/js/abstracts/Component.js");
/* harmony import */ var ScssComponents_c_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/c-header-component */ "./src/scss/components/c-header-component.scss");
/* harmony import */ var ScssComponents_c_header_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ScssComponents_c_header_component__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var HeaderComponent = /*#__PURE__*/function (_Component) {
  _inherits(HeaderComponent, _Component);

  var _super = _createSuper(HeaderComponent);

  function HeaderComponent(compEl) {
    _classCallCheck(this, HeaderComponent);

    return _super.call(this, compEl);
  }

  _createClass(HeaderComponent, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(HeaderComponent.prototype), "init", this).call(this);
    }
  }]);

  return HeaderComponent;
}(_abstracts_Component__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scss/components/c-header-component.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/c-header-component.scss ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n21 │             color: $font-color;\r\n   │                    ^^^^^^^^^^^\n   ╵\n  src\\scss\\components\\c-header-component.scss 21:20  root stylesheet\n    at processResult (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:753:19)\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:855:5\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\sass\\sass.dart.js:99012:16)\n    at render_closure1.call$2 (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\sass\\sass.dart.js:84527:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\sass\\sass.dart.js:29558:18)\n    at _FutureListener.handleError$1 (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\sass\\sass.dart.js:28080:21)");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LUhlYWRlckNvbXBvbmVudC5mNDA2YWU4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQzs7Ozs7QUFDcEIsMkJBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFBQSw2QkFDYkEsTUFEYTtBQUVuQjs7OztXQUVELGdCQUFPO0FBQ047QUFDQTs7OztFQVAyQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9hYnN0cmFjdHMvQ29tcG9uZW50JztcclxuaW1wb3J0ICdTY3NzQ29tcG9uZW50cy9jLWhlYWRlci1jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihjb21wRWwpIHtcclxuXHRcdHN1cGVyKGNvbXBFbCk7XHJcblx0fVxyXG5cclxuXHRpbml0KCkge1xyXG5cdFx0c3VwZXIuaW5pdCgpO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiSGVhZGVyQ29tcG9uZW50IiwiY29tcEVsIl0sInNvdXJjZVJvb3QiOiIifQ==