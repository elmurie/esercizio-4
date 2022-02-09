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
      return ['TestComponent', 'HeaderComponent', 'MainComponent', 'TestBetaComponent'];
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
	"./MainComponent": [
		"./src/js/components/MainComponent.js",
		"vendors",
		"default",
		"component-MainComponent"
	],
	"./MainComponent.js": [
		"./src/js/components/MainComponent.js",
		"vendors",
		"default",
		"component-MainComponent"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fic3RyYWN0cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2xheW91dHMvSW5kZXhMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvbGF5b3V0cy9sLWluZGV4LnNjc3M/ZTUzNiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50c3xsYXp5fC9eLy4qJC98Y2h1bmtOYW1lOiBjb21wb25lbnQtW3JlcXVlc3RdfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG5cdGdldCBDT01NT05TICgpe1xuXHRcdHJldHVybiBbXG5cblx0XHRdO1xuXHR9XG5cdGdldCBDT01QT05FTlRTX0xJU1QoKXtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J1Rlc3RDb21wb25lbnQnLFxuXHRcdFx0J0hlYWRlckNvbXBvbmVudCcsXG5cdFx0XHQnTWFpbkNvbXBvbmVudCcsXG5cdFx0XHQnVGVzdEJldGFDb21wb25lbnQnXG5cdFx0XTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmxheW91dE5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblx0aW5pdCgpIHtcblx0XHR0aGlzLmluaXRDb21tb25Db21wb25lbnRzKCk7XG5cdFx0dGhpcy5pbml0RnJvbUxpc3RDb21wb25lbnRzKCk7XG5cdH1cblxuXHRzZXRMYXlvdXQobGF5b3V0TmFtZSkge1xuXHRcdHRoaXMubGF5b3V0TmFtZSA9IGxheW91dE5hbWU7XG5cdH1cblxuXHRpbml0RnJvbUxpc3RDb21wb25lbnRzKCl7XG5cdFx0dGhpcy5DT01QT05FTlRTX0xJU1QuZm9yRWFjaCggKGNvbXBvbmVudCkgPT57XG5cdFx0XHR0aGlzLmluc3RhbmNlQ29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0Q29tbW9uQ29tcG9uZW50cygpIHtcblx0XHR0aGlzLkNPTU1PTlMuZm9yRWFjaChjb21wID0+e1xuXHRcdFx0dGhpcy5pbXBvcnRDb21wb25lbnRzKGNvbXApLnRoZW4oKHtkZWZhdWx0OmNvbW1vbn0pPT4gbmV3IGNvbW1vbigpKTtcblx0XHR9KTtcblx0fVxuXG5cblx0aW5zdGFuY2VDb21wb25lbnQoQ29tcG9uZW50TmFtZSl7XG5cdFx0bGV0IHNlbGVjdG9yID0gYFtkYXRhLWpzLWNvbXBvbmVudD1cIiR7Q29tcG9uZW50TmFtZX1cIl1gO1xuXHRcdGxldCBjb21wb25lbnRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdGlmKGNvbXBvbmVudEVsZW1lbnRzLmxlbmd0aCA+IDApe1xuXHRcdFx0dGhpcy5pbXBvcnRDb21wb25lbnRzKENvbXBvbmVudE5hbWUpXG5cdFx0XHRcdC50aGVuKCh7IGRlZmF1bHQ6Q29tcG9uZW50IH0pPT57XG5cdFx0XHRcdFx0Y29tcG9uZW50RWxlbWVudHMuZm9yRWFjaCggKGVsZW1lbnQpID0+e1xuXHRcdFx0XHRcdFx0bGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb21wb25lbnQuaW5pdCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT57XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGVyciwgZXJyLnN0YWNrKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdC8qIHRoaXMgbWV0aG9kIGltcG9ydCBhIG1vZHVsZSBhbmQgcmV0dXJucyB0aGUgaW1wb3J0IHByb21pc2UgICAgICAgICAgICAqL1xuXHQvKiB3aXRoIHRoaXMgbWV0aG9kIHdlIGNlbnRyYWxpemUgdGhlIGR5bmFtaWMgaW1wb3J0ICAgICAgICAgICAgICAgICAgICAgKi9cblx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGFzeW5jIGltcG9ydENvbXBvbmVudHMoY29tcG9uZW50TmFtZSkge1xuXHRcdHJldHVybiBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTpgY29tcG9uZW50LVtyZXF1ZXN0XWAgKi8vKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9gLi4vY29tcG9uZW50cy8ke2NvbXBvbmVudE5hbWV9YCk7XG5cdH1cbn1cbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vYWJzdHJhY3RzL0xheW91dCc7XG4vL0ltcG9ydCB0aGUgbGF5b3V0IHN0eWxlIGFzIG5leHQgbGluZS4gU2Nzc0xheW91dHMgaXMgYW4gYWxpYXMgdG8gJ3Jvb3Qvc3JjL3Njc3MvbGF5b3V0cydcbmltcG9ydCAnU2Nzc0xheW91dHMvbC1pbmRleCc7XG5cbi8qXG4qIExheW91dCBjbGFzc2VzIGFyZSBnZW5lcmFsbHkganVzdCB0byBjb21waWxlL2xvYWQgbGF5b3V0IHN0eWxlcywgd2UncmUgaW1wcm92aW5nIHRoaXMgcGFydCBvZiBzeXN0ZW1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGF5b3V0IGV4dGVuZHMgTGF5b3V0e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9IZWFkZXJDb21wb25lbnRcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQuanNcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcImRlZmF1bHRcIixcblx0XHRcImNvbXBvbmVudC1IZWFkZXJDb21wb25lbnRcIlxuXHRdLFxuXHRcIi4vSGVhZGVyQ29tcG9uZW50LmpzXCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCIsXG5cdFx0XCJkZWZhdWx0XCIsXG5cdFx0XCJjb21wb25lbnQtSGVhZGVyQ29tcG9uZW50XCJcblx0XSxcblx0XCIuL01haW5Db21wb25lbnRcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9NYWluQ29tcG9uZW50LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCIsXG5cdFx0XCJkZWZhdWx0XCIsXG5cdFx0XCJjb21wb25lbnQtTWFpbkNvbXBvbmVudFwiXG5cdF0sXG5cdFwiLi9NYWluQ29tcG9uZW50LmpzXCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LU1haW5Db21wb25lbnRcIlxuXHRdLFxuXHRcIi4vVGVzdEJldGFDb21wb25lbnRcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9UZXN0QmV0YUNvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LVRlc3RCZXRhQ29tcG9uZW50XCJcblx0XSxcblx0XCIuL1Rlc3RCZXRhQ29tcG9uZW50LmpzXCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvVGVzdEJldGFDb21wb25lbnQuanNcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcImRlZmF1bHRcIixcblx0XHRcImNvbXBvbmVudC1UZXN0QmV0YUNvbXBvbmVudFwiXG5cdF0sXG5cdFwiLi9UZXN0Q29tcG9uZW50XCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LVRlc3RDb21wb25lbnRcIlxuXHRdLFxuXHRcIi4vVGVzdENvbXBvbmVudC5qc1wiOiBbXG5cdFx0XCIuL3NyYy9qcy9jb21wb25lbnRzL1Rlc3RDb21wb25lbnQuanNcIixcblx0XHRcInZlbmRvcnNcIixcblx0XHRcImRlZmF1bHRcIixcblx0XHRcImNvbXBvbmVudC1UZXN0Q29tcG9uZW50XCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9KTtcblx0fVxuXG5cdHZhciBpZHMgPSBtYXBbcmVxXSwgaWQgPSBpZHNbMF07XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oKCkgPT4ge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL3NyYy9qcy9jb21wb25lbnRzIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7Il0sIm5hbWVzIjpbIkxheW91dCIsImxheW91dE5hbWUiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJpbml0Q29tbW9uQ29tcG9uZW50cyIsImluaXRGcm9tTGlzdENvbXBvbmVudHMiLCJDT01QT05FTlRTX0xJU1QiLCJmb3JFYWNoIiwiY29tcG9uZW50IiwiaW5zdGFuY2VDb21wb25lbnQiLCJDT01NT05TIiwiY29tcCIsImltcG9ydENvbXBvbmVudHMiLCJ0aGVuIiwiY29tbW9uIiwiQ29tcG9uZW50TmFtZSIsInNlbGVjdG9yIiwiY29tcG9uZW50RWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJDb21wb25lbnQiLCJlbGVtZW50IiwiaW5pdCIsImVyciIsImNvbnNvbGUiLCJ3YXJuIiwic3RhY2siLCJjb21wb25lbnROYW1lIiwiSW5kZXhMYXlvdXQiXSwic291cmNlUm9vdCI6IiJ9