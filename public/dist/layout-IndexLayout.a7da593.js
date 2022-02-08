(self["webpackChunkwip_chunks_boilerplate"] = self["webpackChunkwip_chunks_boilerplate"] || []).push([["layout-IndexLayout"],{

/***/ "./src/js/abstracts/Layout.js":
/*!************************************!*\
  !*** ./src/js/abstracts/Layout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Layout = /*#__PURE__*/function () {
  function Layout() {
    _classCallCheck(this, Layout);

    this.layoutName = this.constructor.name;
  }

  _createClass(Layout, [{
    key: "COMMONS",
    get: function get() {
      return [];
    }
  }, {
    key: "COMPONENTS_LIST",
    get: function get() {
      return ['TestComponent', 'HeaderComponent', 'TestBetaComponent'];
    }
  }, {
    key: "init",
    value: function init() {
      this.initCommonComponents();
      this.initFromListComponents();
    }
  }, {
    key: "setLayout",
    value: function setLayout(layoutName) {
      this.layoutName = layoutName;
    }
  }, {
    key: "initFromListComponents",
    value: function initFromListComponents() {
      var _this = this;

      this.COMPONENTS_LIST.forEach(function (component) {
        _this.instanceComponent(component);
      });
    }
  }, {
    key: "initCommonComponents",
    value: function initCommonComponents() {
      var _this2 = this;

      this.COMMONS.forEach(function (comp) {
        _this2.importComponents(comp).then(function (_ref) {
          var common = _ref["default"];
          return new common();
        });
      });
    }
  }, {
    key: "instanceComponent",
    value: function instanceComponent(ComponentName) {
      var selector = "[data-js-component=\"".concat(ComponentName, "\"]");
      var componentElements = document.querySelectorAll(selector);

      if (componentElements.length > 0) {
        this.importComponents(ComponentName).then(function (_ref2) {
          var Component = _ref2["default"];
          componentElements.forEach(function (element) {
            var component = new Component(element);
            component.init();
          });
        })["catch"](function (err) {
          console.warn(err, err.stack);
        });
      }
    }
    /* --------------------------------------------------------------------- */

    /* this method import a module and returns the import promise            */

    /* with this method we centralize the dynamic import                     */

    /* --------------------------------------------------------------------- */

  }, {
    key: "importComponents",
    value: function () {
      var _importComponents = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(componentName) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__("./src/js/components lazy recursive ^\\.\\/.*$")("./".concat(componentName));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function importComponents(_x) {
        return _importComponents.apply(this, arguments);
      }

      return importComponents;
    }()
  }]);

  return Layout;
}();



/***/ }),

/***/ "./src/js/layouts/IndexLayout.js":
/*!***************************************!*\
  !*** ./src/js/layouts/IndexLayout.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexLayout)
/* harmony export */ });
/* harmony import */ var _abstracts_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/Layout */ "./src/js/abstracts/Layout.js");
/* harmony import */ var ScssLayouts_l_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssLayouts/l-index */ "./src/scss/layouts/l-index.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 //Import the layout style as next line. ScssLayouts is an alias to 'root/src/scss/layouts'


/*
* Layout classes are generally just to compile/load layout styles, we're improving this part of system
*/

var IndexLayout = /*#__PURE__*/function (_Layout) {
  _inherits(IndexLayout, _Layout);

  var _super = _createSuper(IndexLayout);

  function IndexLayout() {
    _classCallCheck(this, IndexLayout);

    return _super.call(this);
  }

  return _createClass(IndexLayout);
}(_abstracts_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/scss/layouts/l-index.scss":
/*!***************************************!*\
  !*** ./src/scss/layouts/l-index.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/components lazy recursive ^\\.\\/.*$":
/*!******************************************************************************************!*\
  !*** ./src/js/components/ lazy ^\.\/.*$ chunkName: component-[request] namespace object ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./HeaderComponent": [
		"./src/js/components/HeaderComponent.js",
		"vendors",
		"default",
		"component-HeaderComponent"
	],
	"./HeaderComponent.js": [
		"./src/js/components/HeaderComponent.js",
		"vendors",
		"default",
		"component-HeaderComponent"
	],
	"./TestBetaComponent": [
		"./src/js/components/TestBetaComponent.js",
		"vendors",
		"default",
		"component-TestBetaComponent"
	],
	"./TestBetaComponent.js": [
		"./src/js/components/TestBetaComponent.js",
		"vendors",
		"default",
		"component-TestBetaComponent"
	],
	"./TestComponent": [
		"./src/js/components/TestComponent.js",
		"vendors",
		"default",
		"component-TestComponent"
	],
	"./TestComponent.js": [
		"./src/js/components/TestComponent.js",
		"vendors",
		"default",
		"component-TestComponent"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/components lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8vLi9zcmMvanMvYWJzdHJhY3RzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF5b3V0cy9JbmRleExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9sYXlvdXRzL2wtaW5kZXguc2Nzcz9lNTM2Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzfGxhenl8L14vLiokL3xjaHVua05hbWU6IGNvbXBvbmVudC1bcmVxdWVzdF18Z3JvdXBPcHRpb25zOiB7fXxuYW1lc3BhY2Ugb2JqZWN0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5b3V0IHtcblx0Z2V0IENPTU1PTlMgKCl7XG5cdFx0cmV0dXJuIFtcblxuXHRcdF07XG5cdH1cblx0Z2V0IENPTVBPTkVOVFNfTElTVCgpe1xuXHRcdHJldHVybiBbXG5cdFx0XHQnVGVzdENvbXBvbmVudCcsXG5cdFx0XHQnSGVhZGVyQ29tcG9uZW50Jyxcblx0XHRcdCdUZXN0QmV0YUNvbXBvbmVudCdcblx0XHRdO1xuXHR9XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMubGF5b3V0TmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXHRpbml0KCkge1xuXHRcdHRoaXMuaW5pdENvbW1vbkNvbXBvbmVudHMoKTtcblx0XHR0aGlzLmluaXRGcm9tTGlzdENvbXBvbmVudHMoKTtcblx0fVxuXG5cdHNldExheW91dChsYXlvdXROYW1lKSB7XG5cdFx0dGhpcy5sYXlvdXROYW1lID0gbGF5b3V0TmFtZTtcblx0fVxuXG5cdGluaXRGcm9tTGlzdENvbXBvbmVudHMoKXtcblx0XHR0aGlzLkNPTVBPTkVOVFNfTElTVC5mb3JFYWNoKCAoY29tcG9uZW50KSA9Pntcblx0XHRcdHRoaXMuaW5zdGFuY2VDb21wb25lbnQoY29tcG9uZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdGluaXRDb21tb25Db21wb25lbnRzKCkge1xuXHRcdHRoaXMuQ09NTU9OUy5mb3JFYWNoKGNvbXAgPT57XG5cdFx0XHR0aGlzLmltcG9ydENvbXBvbmVudHMoY29tcCkudGhlbigoe2RlZmF1bHQ6Y29tbW9ufSk9PiBuZXcgY29tbW9uKCkpO1xuXHRcdH0pO1xuXHR9XG5cblxuXHRpbnN0YW5jZUNvbXBvbmVudChDb21wb25lbnROYW1lKXtcblx0XHRsZXQgc2VsZWN0b3IgPSBgW2RhdGEtanMtY29tcG9uZW50PVwiJHtDb21wb25lbnROYW1lfVwiXWA7XG5cdFx0bGV0IGNvbXBvbmVudEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdFx0aWYoY29tcG9uZW50RWxlbWVudHMubGVuZ3RoID4gMCl7XG5cdFx0XHR0aGlzLmltcG9ydENvbXBvbmVudHMoQ29tcG9uZW50TmFtZSlcblx0XHRcdFx0LnRoZW4oKHsgZGVmYXVsdDpDb21wb25lbnQgfSk9Pntcblx0XHRcdFx0XHRjb21wb25lbnRFbGVtZW50cy5mb3JFYWNoKCAoZWxlbWVudCkgPT57XG5cdFx0XHRcdFx0XHRsZXQgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbXBvbmVudC5pbml0KCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgoZXJyKSA9Pntcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyLCBlcnIuc3RhY2spO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0LyogdGhpcyBtZXRob2QgaW1wb3J0IGEgbW9kdWxlIGFuZCByZXR1cm5zIHRoZSBpbXBvcnQgcHJvbWlzZSAgICAgICAgICAgICovXG5cdC8qIHdpdGggdGhpcyBtZXRob2Qgd2UgY2VudHJhbGl6ZSB0aGUgZHluYW1pYyBpbXBvcnQgICAgICAgICAgICAgICAgICAgICAqL1xuXHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0YXN5bmMgaW1wb3J0Q29tcG9uZW50cyhjb21wb25lbnROYW1lKSB7XG5cdFx0cmV0dXJuIGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOmBjb21wb25lbnQtW3JlcXVlc3RdYCAqLy8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL2AuLi9jb21wb25lbnRzLyR7Y29tcG9uZW50TmFtZX1gKTtcblx0fVxufVxuIiwiaW1wb3J0IExheW91dCBmcm9tICcuLi9hYnN0cmFjdHMvTGF5b3V0Jztcbi8vSW1wb3J0IHRoZSBsYXlvdXQgc3R5bGUgYXMgbmV4dCBsaW5lLiBTY3NzTGF5b3V0cyBpcyBhbiBhbGlhcyB0byAncm9vdC9zcmMvc2Nzcy9sYXlvdXRzJ1xuaW1wb3J0ICdTY3NzTGF5b3V0cy9sLWluZGV4JztcblxuLypcbiogTGF5b3V0IGNsYXNzZXMgYXJlIGdlbmVyYWxseSBqdXN0IHRvIGNvbXBpbGUvbG9hZCBsYXlvdXQgc3R5bGVzLCB3ZSdyZSBpbXByb3ZpbmcgdGhpcyBwYXJ0IG9mIHN5c3RlbVxuKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhMYXlvdXQgZXh0ZW5kcyBMYXlvdXR7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0c3VwZXIoKTtcblx0fVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIG1hcCA9IHtcblx0XCIuL0hlYWRlckNvbXBvbmVudFwiOiBbXG5cdFx0XCIuL3NyYy9qcy9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LUhlYWRlckNvbXBvbmVudFwiXG5cdF0sXG5cdFwiLi9IZWFkZXJDb21wb25lbnQuanNcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQuanNcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcImRlZmF1bHRcIixcblx0XHRcImNvbXBvbmVudC1IZWFkZXJDb21wb25lbnRcIlxuXHRdLFxuXHRcIi4vVGVzdEJldGFDb21wb25lbnRcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9UZXN0QmV0YUNvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LVRlc3RCZXRhQ29tcG9uZW50XCJcblx0XSxcblx0XCIuL1Rlc3RCZXRhQ29tcG9uZW50LmpzXCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvVGVzdEJldGFDb21wb25lbnQuanNcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcImRlZmF1bHRcIixcblx0XHRcImNvbXBvbmVudC1UZXN0QmV0YUNvbXBvbmVudFwiXG5cdF0sXG5cdFwiLi9UZXN0Q29tcG9uZW50XCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LVRlc3RDb21wb25lbnRcIlxuXHRdLFxuXHRcIi4vVGVzdENvbXBvbmVudC5qc1wiOiBbXG5cdFx0XCIuL3NyYy9qcy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQuanNcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcImRlZmF1bHRcIixcblx0XHRcImNvbXBvbmVudC1UZXN0Q29tcG9uZW50XCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9qcy9jb21wb25lbnRzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sIm5hbWVzIjpbIkxheW91dCIsImxheW91dE5hbWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJpbml0Q29tbW9uQ29tcG9uZW50cyIsImluaXRGcm9tTGlzdENvbXBvbmVudHMiLCJDT01QT05FTlRTX0xJU1QiLCJmb3JFYWNoIiwiY29tcG9uZW50IiwiaW5zdGFuY2VDb21wb25lbnQiLCJDT01NT05TIiwiY29tcCIsImltcG9ydENvbXBvbmVudHMiLCJ0aGVuIiwiY29tbW9uIiwiQ29tcG9uZW50TmFtZSIsInNlbGVjdG9yIiwiY29tcG9uZW50RWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiaW5pdCIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwic3RhY2siLCJjb21wb25lbnROYW1lIiwiSW5kZXhMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9