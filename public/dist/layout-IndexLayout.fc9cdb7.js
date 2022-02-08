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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LUluZGV4TGF5b3V0LmZjOWNkYjcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBO0FBYXBCLG9CQUFjO0FBQUE7O0FBQ2IsU0FBS0MsVUFBTCxHQUFrQixLQUFLQyxXQUFMLENBQWlCQyxJQUFuQztBQUNBOzs7O1NBZEQsZUFBYztBQUNiLGFBQU8sRUFBUDtBQUdBOzs7U0FDRCxlQUFxQjtBQUNwQixhQUFPLENBQ04sZUFETSxFQUVOLGlCQUZNLEVBR04sbUJBSE0sQ0FBUDtBQUtBOzs7V0FJRCxnQkFBTztBQUNOLFdBQUtDLG9CQUFMO0FBQ0EsV0FBS0Msc0JBQUw7QUFDQTs7O1dBRUQsbUJBQVVKLFVBQVYsRUFBc0I7QUFDckIsV0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQTs7O1dBRUQsa0NBQXdCO0FBQUE7O0FBQ3ZCLFdBQUtLLGVBQUwsQ0FBcUJDLE9BQXJCLENBQThCLFVBQUNDLFNBQUQsRUFBYztBQUMzQyxhQUFJLENBQUNDLGlCQUFMLENBQXVCRCxTQUF2QjtBQUNBLE9BRkQ7QUFHQTs7O1dBRUQsZ0NBQXVCO0FBQUE7O0FBQ3RCLFdBQUtFLE9BQUwsQ0FBYUgsT0FBYixDQUFxQixVQUFBSSxJQUFJLEVBQUc7QUFDM0IsY0FBSSxDQUFDQyxnQkFBTCxDQUFzQkQsSUFBdEIsRUFBNEJFLElBQTVCLENBQWlDO0FBQUEsY0FBVUMsTUFBVjtBQUFBLGlCQUFxQixJQUFJQSxNQUFKLEVBQXJCO0FBQUEsU0FBakM7QUFDQSxPQUZEO0FBR0E7OztXQUdELDJCQUFrQkMsYUFBbEIsRUFBZ0M7QUFDL0IsVUFBSUMsUUFBUSxrQ0FBMEJELGFBQTFCLFFBQVo7QUFDQSxVQUFJRSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQkgsUUFBMUIsQ0FBeEI7O0FBQ0EsVUFBR0MsaUJBQWlCLENBQUNHLE1BQWxCLEdBQTJCLENBQTlCLEVBQWdDO0FBQy9CLGFBQUtSLGdCQUFMLENBQXNCRyxhQUF0QixFQUNFRixJQURGLENBQ08saUJBQXlCO0FBQUEsY0FBZFEsU0FBYztBQUM5QkosVUFBQUEsaUJBQWlCLENBQUNWLE9BQWxCLENBQTJCLFVBQUNlLE9BQUQsRUFBWTtBQUN0QyxnQkFBSWQsU0FBUyxHQUFHLElBQUlhLFNBQUosQ0FBY0MsT0FBZCxDQUFoQjtBQUNBZCxZQUFBQSxTQUFTLENBQUNlLElBQVY7QUFDQSxXQUhEO0FBSUEsU0FORixXQU9RLFVBQUNDLEdBQUQsRUFBUTtBQUNkQyxVQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUYsR0FBYixFQUFrQkEsR0FBRyxDQUFDRyxLQUF0QjtBQUNBLFNBVEY7QUFVQTtBQUNEO0FBRUQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7O3NGQUNBLGlCQUF1QkMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ2MsaUZBQTZGQSxhQUE3RixFQURkOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0MzREQ7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0lBRXFCQzs7Ozs7QUFDcEIseUJBQWE7QUFBQTs7QUFBQTtBQUVaOzs7RUFIdUM3Qjs7Ozs7Ozs7Ozs7Ozs7QUNSekM7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYWJzdHJhY3RzL0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGF5b3V0cy9JbmRleExheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9sYXlvdXRzL2wtaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50c3xsYXp5fC9eLy4qJC98Y2h1bmtOYW1lOiBjb21wb25lbnQtW3JlcXVlc3RdfGdyb3VwT3B0aW9uczoge318bmFtZXNwYWNlIG9iamVjdCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheW91dCB7XG5cdGdldCBDT01NT05TICgpe1xuXHRcdHJldHVybiBbXG5cblx0XHRdO1xuXHR9XG5cdGdldCBDT01QT05FTlRTX0xJU1QoKXtcblx0XHRyZXR1cm4gW1xuXHRcdFx0J1Rlc3RDb21wb25lbnQnLFxuXHRcdFx0J0hlYWRlckNvbXBvbmVudCcsXG5cdFx0XHQnVGVzdEJldGFDb21wb25lbnQnXG5cdFx0XTtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmxheW91dE5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblx0aW5pdCgpIHtcblx0XHR0aGlzLmluaXRDb21tb25Db21wb25lbnRzKCk7XG5cdFx0dGhpcy5pbml0RnJvbUxpc3RDb21wb25lbnRzKCk7XG5cdH1cblxuXHRzZXRMYXlvdXQobGF5b3V0TmFtZSkge1xuXHRcdHRoaXMubGF5b3V0TmFtZSA9IGxheW91dE5hbWU7XG5cdH1cblxuXHRpbml0RnJvbUxpc3RDb21wb25lbnRzKCl7XG5cdFx0dGhpcy5DT01QT05FTlRTX0xJU1QuZm9yRWFjaCggKGNvbXBvbmVudCkgPT57XG5cdFx0XHR0aGlzLmluc3RhbmNlQ29tcG9uZW50KGNvbXBvbmVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0Q29tbW9uQ29tcG9uZW50cygpIHtcblx0XHR0aGlzLkNPTU1PTlMuZm9yRWFjaChjb21wID0+e1xuXHRcdFx0dGhpcy5pbXBvcnRDb21wb25lbnRzKGNvbXApLnRoZW4oKHtkZWZhdWx0OmNvbW1vbn0pPT4gbmV3IGNvbW1vbigpKTtcblx0XHR9KTtcblx0fVxuXG5cblx0aW5zdGFuY2VDb21wb25lbnQoQ29tcG9uZW50TmFtZSl7XG5cdFx0bGV0IHNlbGVjdG9yID0gYFtkYXRhLWpzLWNvbXBvbmVudD1cIiR7Q29tcG9uZW50TmFtZX1cIl1gO1xuXHRcdGxldCBjb21wb25lbnRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdGlmKGNvbXBvbmVudEVsZW1lbnRzLmxlbmd0aCA+IDApe1xuXHRcdFx0dGhpcy5pbXBvcnRDb21wb25lbnRzKENvbXBvbmVudE5hbWUpXG5cdFx0XHRcdC50aGVuKCh7IGRlZmF1bHQ6Q29tcG9uZW50IH0pPT57XG5cdFx0XHRcdFx0Y29tcG9uZW50RWxlbWVudHMuZm9yRWFjaCggKGVsZW1lbnQpID0+e1xuXHRcdFx0XHRcdFx0bGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb21wb25lbnQuaW5pdCgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycikgPT57XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKGVyciwgZXJyLnN0YWNrKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdC8qIHRoaXMgbWV0aG9kIGltcG9ydCBhIG1vZHVsZSBhbmQgcmV0dXJucyB0aGUgaW1wb3J0IHByb21pc2UgICAgICAgICAgICAqL1xuXHQvKiB3aXRoIHRoaXMgbWV0aG9kIHdlIGNlbnRyYWxpemUgdGhlIGR5bmFtaWMgaW1wb3J0ICAgICAgICAgICAgICAgICAgICAgKi9cblx0LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGFzeW5jIGltcG9ydENvbXBvbmVudHMoY29tcG9uZW50TmFtZSkge1xuXHRcdHJldHVybiBhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTpgY29tcG9uZW50LVtyZXF1ZXN0XWAgKi8vKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9gLi4vY29tcG9uZW50cy8ke2NvbXBvbmVudE5hbWV9YCk7XG5cdH1cbn1cbiIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vYWJzdHJhY3RzL0xheW91dCc7XG4vL0ltcG9ydCB0aGUgbGF5b3V0IHN0eWxlIGFzIG5leHQgbGluZS4gU2Nzc0xheW91dHMgaXMgYW4gYWxpYXMgdG8gJ3Jvb3Qvc3JjL3Njc3MvbGF5b3V0cydcbmltcG9ydCAnU2Nzc0xheW91dHMvbC1pbmRleCc7XG5cbi8qXG4qIExheW91dCBjbGFzc2VzIGFyZSBnZW5lcmFsbHkganVzdCB0byBjb21waWxlL2xvYWQgbGF5b3V0IHN0eWxlcywgd2UncmUgaW1wcm92aW5nIHRoaXMgcGFydCBvZiBzeXN0ZW1cbiovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4TGF5b3V0IGV4dGVuZHMgTGF5b3V0e1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKCk7XG5cdH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBtYXAgPSB7XG5cdFwiLi9UZXN0QmV0YUNvbXBvbmVudFwiOiBbXG5cdFx0XCIuL3NyYy9qcy9jb21wb25lbnRzL1Rlc3RCZXRhQ29tcG9uZW50LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCIsXG5cdFx0XCJkZWZhdWx0XCIsXG5cdFx0XCJjb21wb25lbnQtVGVzdEJldGFDb21wb25lbnRcIlxuXHRdLFxuXHRcIi4vVGVzdEJldGFDb21wb25lbnQuanNcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9UZXN0QmV0YUNvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LVRlc3RCZXRhQ29tcG9uZW50XCJcblx0XSxcblx0XCIuL1Rlc3RDb21wb25lbnRcIjogW1xuXHRcdFwiLi9zcmMvanMvY29tcG9uZW50cy9UZXN0Q29tcG9uZW50LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCIsXG5cdFx0XCJkZWZhdWx0XCIsXG5cdFx0XCJjb21wb25lbnQtVGVzdENvbXBvbmVudFwiXG5cdF0sXG5cdFwiLi9UZXN0Q29tcG9uZW50LmpzXCI6IFtcblx0XHRcIi4vc3JjL2pzL2NvbXBvbmVudHMvVGVzdENvbXBvbmVudC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiLFxuXHRcdFwiZGVmYXVsdFwiLFxuXHRcdFwiY29tcG9uZW50LVRlc3RDb21wb25lbnRcIlxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChPYmplY3Qua2V5cyhtYXApKTtcbndlYnBhY2tBc3luY0NvbnRleHQuaWQgPSBcIi4vc3JjL2pzL2NvbXBvbmVudHMgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0FzeW5jQ29udGV4dDsiXSwibmFtZXMiOlsiTGF5b3V0IiwibGF5b3V0TmFtZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImluaXRDb21tb25Db21wb25lbnRzIiwiaW5pdEZyb21MaXN0Q29tcG9uZW50cyIsIkNPTVBPTkVOVFNfTElTVCIsImZvckVhY2giLCJjb21wb25lbnQiLCJpbnN0YW5jZUNvbXBvbmVudCIsIkNPTU1PTlMiLCJjb21wIiwiaW1wb3J0Q29tcG9uZW50cyIsInRoZW4iLCJjb21tb24iLCJDb21wb25lbnROYW1lIiwic2VsZWN0b3IiLCJjb21wb25lbnRFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIkNvbXBvbmVudCIsImVsZW1lbnQiLCJpbml0IiwiZXJyIiwiY29uc29sZSIsIndhcm4iLCJzdGFjayIsImNvbXBvbmVudE5hbWUiLCJJbmRleExheW91dCJdLCJzb3VyY2VSb290IjoiIn0=