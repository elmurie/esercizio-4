(self["webpackChunkwip_chunks_boilerplate"] = self["webpackChunkwip_chunks_boilerplate"] || []).push([["default"],{

/***/ "./src/js/abstracts/Component.js":
/*!***************************************!*\
  !*** ./src/js/abstracts/Component.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _utils_custom_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/custom-events */ "./src/js/utils/custom-events.js");
/* harmony import */ var _utils_events_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/events-actions */ "./src/js/utils/events-actions.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _utils_DependencyInjector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/DependencyInjector */ "./src/js/utils/DependencyInjector.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cookies_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cookies-handler */ "./src/js/utils/cookies-handler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var Component = /*#__PURE__*/function () {
  function Component(compEl) {
    _classCallCheck(this, Component);

    this.name = this.constructor.name;
    this.$moduleLoader = new _utils_DependencyInjector__WEBPACK_IMPORTED_MODULE_3__["default"](); // Use this class to lazy load modules!!

    this.$on = _utils_events_actions__WEBPACK_IMPORTED_MODULE_1__.on;
    this.$emit = _utils_events_actions__WEBPACK_IMPORTED_MODULE_1__.emit;
    this.$getCookie = _utils_cookies_handler__WEBPACK_IMPORTED_MODULE_5__.Cookies.getCookie;
    this.$setCookie = _utils_cookies_handler__WEBPACK_IMPORTED_MODULE_5__.Cookies.setCookie;
    this.$events = _utils_custom_events__WEBPACK_IMPORTED_MODULE_0__.customEvents;
    this.$isMobile = _utils_utils__WEBPACK_IMPORTED_MODULE_2__.isMobile; //observer

    this.$observerOptions = {};
    this.observerCallback = this.observerCallback.bind(this); //our html component

    this.$component = compEl !== null && compEl !== void 0 ? compEl : null;
    this.$bodyRect = document.body.getBoundingClientRect();
    this.$compRect = this.$component.getBoundingClientRect();
    this.$axios = (axios__WEBPACK_IMPORTED_MODULE_4___default());
    this.hasLoadImages = false;
    this.collectDataSrcs = this.$component.querySelectorAll('[data-src]');
  }

  _createClass(Component, [{
    key: "VIEWPORTS",
    get: function get() {
      return {
        sm: [0, 767],
        md: [768, 991],
        lg: [992, 1279],
        xl: [1280, 1599],
        xxl: [1600, 9999]
      };
    }
  }, {
    key: "CSS_CUSTOM_VARS",
    get: function get() {
      return {
        jsHeightHeader: '--js-header-height',
        headerStripHeight: '--js-header-strip-height'
      };
    }
  }, {
    key: "TOTAL_OFFSET_TOP",
    get: function get() {
      return this.$calcParentsOffsetTop(this.$component) + this.$component.offsetTop;
    }
  }, {
    key: "BASE_CLASSNAMES",
    get: function get() {
      return {
        onViewComponent: 'on-view',
        outOfViewComponent: 'out-view',
        bodyBlocked: 'body-blocked'
      };
    }
  }, {
    key: "init",
    value: function init() {
      console.log('Component:', this.name);
      this.checkIfObservable();
    }
  }, {
    key: "checkIfObservable",
    value: function checkIfObservable() {
      if (this.$component) {
        //            console.log('IntersectionObserver to: ', this.name, 'With options: ',this.$observerOptions)
        this.initObserver();
      } //        if(this.$component && this.$component.dataset.toObserve !== undefined){
      //            console.log('IntersectionObserver to: ', this.name, 'With options: ',this.$observerOptions)
      //            this.initObserver();
      //        }

    }
  }, {
    key: "initObserver",
    value: function initObserver() {
      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$component;
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.observerCallback;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.$observerOptions;
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          return callback(entry);
        });
      }, options);
      observer.observe(element);
    }
  }, {
    key: "observerCallback",
    value: function observerCallback(entry) {
      //        console.log('Observer callback fired at: ', this.name);
      if (entry.isIntersecting) {
        //            console.warn('Intersected by',this.name);
        this.loadImages();
      }
    }
  }, {
    key: "loadImages",
    value: function loadImages() {
      if (this.hasLoadImages) {
        return;
      }

      this.collectDataSrcs.forEach(function (element) {
        var src = element.dataset.src;

        switch (element.nodeName) {
          case 'SOURCE':
            element.srcset = src;
            break;

          case 'IMG':
            element.src = src;
            break;
        }
      });
      this.hasLoadImages = true;
    }
  }, {
    key: "$blockBody",
    value: function $blockBody() {
      document.querySelector('body').classList.add(this.BASE_CLASSNAMES.bodyBlocked);
    }
  }, {
    key: "$unblockBody",
    value: function $unblockBody() {
      document.querySelector('body').classList.remove(this.BASE_CLASSNAMES.bodyBlocked);
    }
  }, {
    key: "$onView",
    value: function $onView() {
      this.$component.classList.add(this.BASE_CLASSNAMES.onViewComponent);
    }
  }, {
    key: "$outView",
    value: function $outView() {
      this.$component.classList.remove(this.BASE_CLASSNAMES.onViewComponent);
    }
    /**
        *
        * @param dataset dataset object
        * @param dataName dataset name to find
        * @param returnValue true when need dataset value return
        * @returns {boolean|*}
        */

  }, {
    key: "$checkDataset",
    value: function $checkDataset(dataset, dataName) {
      var returnValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isValid = Object.prototype.hasOwnProperty.call(dataset, dataName) && dataset[dataName] !== '';

      if (isValid && returnValue) {
        return dataset[dataName];
      }

      return isValid;
    }
    /**
        *
        * @param tag   HTML tag element
        * @param classNames single string or array of strings(classes)
        * @returns {*} HTML Element created
        */

  }, {
    key: "$createElement",
    value: function $createElement(tag) {
      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!tag) {
        throw 'Component.$createElement no element was created, declare args';
      }

      if (typeof classNames !== 'string' && !Array.isArray(classNames)) {
        throw 'Component.$createElement(tag,classNames) second  argument classNames got to be string or array of strings(classes)';
      }

      var el = document.createElement(tag);

      if (classNames.length > 0) {
        var _el$classList;

        var isSingleClass = typeof classNames === 'string';
        var classToAdd = isSingleClass ? [classNames] : _toConsumableArray(classNames);

        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classToAdd));
      }

      return el;
    }
  }, {
    key: "$scrollTo",
    value: function $scrollTo(to, duration, callback) {
      //Because scrollIntoView || window.scrollTo behaviour smooth are not present at 'safari'
      // was found this cross-browser solution from : https://gist.github.com/james2doyle/5694700
      Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;

        if (t < 1) {
          return c / 2 * t * t + b;
        }

        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var move = function move(amount) {
        document.documentElement.scrollTop = amount;
        document.body.parentNode.scrollTop = amount;
        document.body.scrollTop = amount;
      };

      var position = function position() {
        return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
      };

      var start = position(),
          change = to - start,
          currentTime = 0,
          increment = 20;
      duration = typeof duration === 'undefined' ? 500 : duration;

      var animateScroll = function animateScroll() {
        // increment the time
        currentTime += increment; // find the value with the quadratic in-out easing function

        var val = Math.easeInOutQuad(currentTime, start, change, duration); // move the document.body

        move(val); // do the animation unless its over

        if (currentTime < duration) {
          window.requestAnimationFrame(animateScroll);
        } else {
          if (callback && typeof callback === 'function') {
            // the animation is done so lets callback
            callback();
          }
        }
      };

      animateScroll();
    }
    /**
        *
        * @param element HTML element reference
        * @returns {number} sum of all parents offsetTop found
        */

  }, {
    key: "$calcParentsOffsetTop",
    value: function $calcParentsOffsetTop(element) {
      var sum = 0;
      var currentEl = element;

      while (currentEl.offsetParent) {
        sum += currentEl.offsetParent.offsetTop;
        currentEl = currentEl.offsetParent;
      }

      return sum;
    }
  }, {
    key: "$mediaQuery",
    value: function $mediaQuery(minMax, pixels) {
      return window.matchMedia("(".concat(minMax, "-width:").concat(pixels, "px)"));
    }
  }]);

  return Component;
}();



/***/ }),

/***/ "./src/js/utils/DependencyInjector.js":
/*!********************************************!*\
  !*** ./src/js/utils/DependencyInjector.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DependencyInjector)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var loadedDependency = {};

var existingDependency = function existingDependency(name) {
  return name in loadedDependency ? loadedDependency[name] : false;
};

var saveDependency = function saveDependency(name, lib) {
  return new Promise(function (resolve, reject) {
    try {
      if (!existingDependency(name)) {
        loadedDependency[name] = lib;
        resolve(false);
      } else {
        resolve(true);
      }
    } catch (e) {
      reject(e);
    }
  });
};
/**
 * This utility class is injected in all components that extends Component
 * and is used to lazy load third-part libraries
 */


var DependencyInjector = /*#__PURE__*/function () {
  function DependencyInjector() {
    _classCallCheck(this, DependencyInjector);
  }

  _createClass(DependencyInjector, [{
    key: "log",
    value:
    /**
      * Log utility
      * @param logStr
      */
    function log() {
      var logStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (logStr !== '') {
        var myName = this.constructor.name;
        console.debug("[".concat(myName, "] ").concat(logStr));
      }
    }
  }, {
    key: "loadGlideAndExecute",
    value: function loadGlideAndExecute(thenPromise, catchPromise) {
      console.log('Loading Glide Carousel');

      if (existingDependency('glide')) {
        return thenPromise(existingDependency('glide'));
      }

      __webpack_require__.e(/*! import() | glide */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! @glidejs/glide/dist/glide.min */ "./node_modules/@glidejs/glide/dist/glide.min.js", 23)).then(function (res) {
        saveDependency('glide', res);
        thenPromise(res);
      })["catch"](catchPromise);
    }
  }, {
    key: "loadFlatpickrLocale",
    value: function loadFlatpickrLocale(locale, thenPromise, catchPromise) {
      __webpack_require__("./node_modules/flatpickr/dist/l10n lazy recursive ^\\.\\/.*\\.js$")("./".concat(locale, ".js")).then(thenPromise)["catch"](catchPromise);
    }
  }, {
    key: "loadFlatpickr",
    value: function loadFlatpickr(thenPromise, catchPromise) {
      this.log('Loading Flatpickr');
      __webpack_require__.e(/*! import() | flatpickr */ "vendors").then(__webpack_require__.bind(__webpack_require__, /*! flatpickr */ "./node_modules/flatpickr/dist/esm/index.js")).then(thenPromise)["catch"](catchPromise); // js library
    }
  }, {
    key: "loadSimpleBarAndExecute",
    value: function loadSimpleBarAndExecute(thenPromise, catchPromise) {
      this.log('Loading SimpleBar');
      if (existingDependency('simplebar')) return thenPromise(existingDependency('simplebar'));
      __webpack_require__.e(/*! import() | simplebar */ "vendors").then(__webpack_require__.bind(__webpack_require__, /*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js")).then(function (res) {
        saveDependency('simplebar', res);
        thenPromise(res);
      })["catch"](catchPromise);
    }
  }, {
    key: "loadExternalScript",
    value: function loadExternalScript(url) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.addEventListener('load', function () {
          return resolve(script);
        }, false);
        script.addEventListener('error', function () {
          return reject(script);
        }, false);
        document.body.appendChild(script);
      });
    }
  }], [{
    key: "defaultCatchPromise",
    value: function defaultCatchPromise(error) {
      console.error('Failed to inject dependency', error.stack);
    }
  }]);

  return DependencyInjector;
}();



/***/ }),

/***/ "./src/js/utils/cookies-handler.js":
/*!*****************************************!*\
  !*** ./src/js/utils/cookies-handler.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cookies": () => (/* binding */ Cookies)
/* harmony export */ });
function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = "".concat(name, "=").concat(value, ";path=/;expires=").concat(d.toGMTString());
}

var Cookies = {
  getCookie: getCookie,
  setCookie: setCookie
};

/***/ }),

/***/ "./src/js/utils/custom-events.js":
/*!***************************************!*\
  !*** ./src/js/utils/custom-events.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customEvents": () => (/* binding */ customEvents)
/* harmony export */ });
var customEvents = {
  HEADER: {
    fixed: 'header:unblock',
    unfixed: 'header:block'
  },
  BURGER_EV: {
    click: 'burger:clicked',
    close: 'burger:close'
  }
};

/***/ }),

/***/ "./src/js/utils/events-actions.js":
/*!****************************************!*\
  !*** ./src/js/utils/events-actions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "emit": () => (/* binding */ emit)
/* harmony export */ });
var on = function on(event, cb, element) {
  var target = element ? element : window;
  return target.addEventListener(event, function (e) {
    cb(e, e.detail);
  });
};
var emit = function emit(event, payload, element) {
  var target = element ? element : window;
  var createdEvent = new CustomEvent(event, {
    detail: payload
  });
  return target.dispatchEvent(createdEvent);
};

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "debounceImmediate": () => (/* binding */ debounceImmediate),
/* harmony export */   "isMobile": () => (/* binding */ isMobile)
/* harmony export */ });
function debounce(delay, fn) {
  var timerId;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(function () {
      fn.apply(void 0, args);
      timerId = null;
    }, delay);
  };
}
function debounceImmediate(delay, fn) {
  var fired = false;
  return function () {
    if (!fired) {
      fn.apply(void 0, arguments);
      fired = true;
      setTimeout(function () {
        return fired = false;
      }, delay);
    }
  };
}
function isMobile() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/flatpickr/dist/l10n lazy recursive ^\\.\\/.*\\.js$":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/flatpickr/dist/l10n/ lazy ^\.\/.*\.js$ chunkName: flatpickr-locale namespace object ***!
  \**********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ar.js": [
		"./node_modules/flatpickr/dist/l10n/ar.js",
		"vendors"
	],
	"./at.js": [
		"./node_modules/flatpickr/dist/l10n/at.js",
		"vendors"
	],
	"./az.js": [
		"./node_modules/flatpickr/dist/l10n/az.js",
		"vendors"
	],
	"./be.js": [
		"./node_modules/flatpickr/dist/l10n/be.js",
		"vendors"
	],
	"./bg.js": [
		"./node_modules/flatpickr/dist/l10n/bg.js",
		"vendors"
	],
	"./bn.js": [
		"./node_modules/flatpickr/dist/l10n/bn.js",
		"vendors"
	],
	"./bs.js": [
		"./node_modules/flatpickr/dist/l10n/bs.js",
		"vendors"
	],
	"./cat.js": [
		"./node_modules/flatpickr/dist/l10n/cat.js",
		"vendors"
	],
	"./cs.js": [
		"./node_modules/flatpickr/dist/l10n/cs.js",
		"vendors"
	],
	"./cy.js": [
		"./node_modules/flatpickr/dist/l10n/cy.js",
		"vendors"
	],
	"./da.js": [
		"./node_modules/flatpickr/dist/l10n/da.js",
		"vendors"
	],
	"./de.js": [
		"./node_modules/flatpickr/dist/l10n/de.js",
		"vendors"
	],
	"./default.js": [
		"./node_modules/flatpickr/dist/l10n/default.js",
		"vendors"
	],
	"./eo.js": [
		"./node_modules/flatpickr/dist/l10n/eo.js",
		"vendors"
	],
	"./es.js": [
		"./node_modules/flatpickr/dist/l10n/es.js",
		"vendors"
	],
	"./et.js": [
		"./node_modules/flatpickr/dist/l10n/et.js",
		"vendors"
	],
	"./fa.js": [
		"./node_modules/flatpickr/dist/l10n/fa.js",
		"vendors"
	],
	"./fi.js": [
		"./node_modules/flatpickr/dist/l10n/fi.js",
		"vendors"
	],
	"./fo.js": [
		"./node_modules/flatpickr/dist/l10n/fo.js",
		"vendors"
	],
	"./fr.js": [
		"./node_modules/flatpickr/dist/l10n/fr.js",
		"vendors"
	],
	"./ga.js": [
		"./node_modules/flatpickr/dist/l10n/ga.js",
		"vendors"
	],
	"./gr.js": [
		"./node_modules/flatpickr/dist/l10n/gr.js",
		"vendors"
	],
	"./he.js": [
		"./node_modules/flatpickr/dist/l10n/he.js",
		"vendors"
	],
	"./hi.js": [
		"./node_modules/flatpickr/dist/l10n/hi.js",
		"vendors"
	],
	"./hr.js": [
		"./node_modules/flatpickr/dist/l10n/hr.js",
		"vendors"
	],
	"./hu.js": [
		"./node_modules/flatpickr/dist/l10n/hu.js",
		"vendors"
	],
	"./id.js": [
		"./node_modules/flatpickr/dist/l10n/id.js",
		"vendors"
	],
	"./index.js": [
		"./node_modules/flatpickr/dist/l10n/index.js",
		"vendors"
	],
	"./is.js": [
		"./node_modules/flatpickr/dist/l10n/is.js",
		"vendors"
	],
	"./it.js": [
		"./node_modules/flatpickr/dist/l10n/it.js",
		"vendors"
	],
	"./ja.js": [
		"./node_modules/flatpickr/dist/l10n/ja.js",
		"vendors"
	],
	"./ka.js": [
		"./node_modules/flatpickr/dist/l10n/ka.js",
		"vendors"
	],
	"./km.js": [
		"./node_modules/flatpickr/dist/l10n/km.js",
		"vendors"
	],
	"./ko.js": [
		"./node_modules/flatpickr/dist/l10n/ko.js",
		"vendors"
	],
	"./kz.js": [
		"./node_modules/flatpickr/dist/l10n/kz.js",
		"vendors"
	],
	"./lt.js": [
		"./node_modules/flatpickr/dist/l10n/lt.js",
		"vendors"
	],
	"./lv.js": [
		"./node_modules/flatpickr/dist/l10n/lv.js",
		"vendors"
	],
	"./mk.js": [
		"./node_modules/flatpickr/dist/l10n/mk.js",
		"vendors"
	],
	"./mn.js": [
		"./node_modules/flatpickr/dist/l10n/mn.js",
		"vendors"
	],
	"./ms.js": [
		"./node_modules/flatpickr/dist/l10n/ms.js",
		"vendors"
	],
	"./my.js": [
		"./node_modules/flatpickr/dist/l10n/my.js",
		"vendors"
	],
	"./nl.js": [
		"./node_modules/flatpickr/dist/l10n/nl.js",
		"vendors"
	],
	"./no.js": [
		"./node_modules/flatpickr/dist/l10n/no.js",
		"vendors"
	],
	"./pa.js": [
		"./node_modules/flatpickr/dist/l10n/pa.js",
		"vendors"
	],
	"./pl.js": [
		"./node_modules/flatpickr/dist/l10n/pl.js",
		"vendors"
	],
	"./pt.js": [
		"./node_modules/flatpickr/dist/l10n/pt.js",
		"vendors"
	],
	"./ro.js": [
		"./node_modules/flatpickr/dist/l10n/ro.js",
		"vendors"
	],
	"./ru.js": [
		"./node_modules/flatpickr/dist/l10n/ru.js",
		"vendors"
	],
	"./si.js": [
		"./node_modules/flatpickr/dist/l10n/si.js",
		"vendors"
	],
	"./sk.js": [
		"./node_modules/flatpickr/dist/l10n/sk.js",
		"vendors"
	],
	"./sl.js": [
		"./node_modules/flatpickr/dist/l10n/sl.js",
		"vendors"
	],
	"./sq.js": [
		"./node_modules/flatpickr/dist/l10n/sq.js",
		"vendors"
	],
	"./sr-cyr.js": [
		"./node_modules/flatpickr/dist/l10n/sr-cyr.js",
		"vendors"
	],
	"./sr.js": [
		"./node_modules/flatpickr/dist/l10n/sr.js",
		"vendors"
	],
	"./sv.js": [
		"./node_modules/flatpickr/dist/l10n/sv.js",
		"vendors"
	],
	"./th.js": [
		"./node_modules/flatpickr/dist/l10n/th.js",
		"vendors"
	],
	"./tr.js": [
		"./node_modules/flatpickr/dist/l10n/tr.js",
		"vendors"
	],
	"./uk.js": [
		"./node_modules/flatpickr/dist/l10n/uk.js",
		"vendors"
	],
	"./uz.js": [
		"./node_modules/flatpickr/dist/l10n/uz.js",
		"vendors"
	],
	"./uz_latn.js": [
		"./node_modules/flatpickr/dist/l10n/uz_latn.js",
		"vendors"
	],
	"./vn.js": [
		"./node_modules/flatpickr/dist/l10n/vn.js",
		"vendors"
	],
	"./zh-tw.js": [
		"./node_modules/flatpickr/dist/l10n/zh-tw.js",
		"vendors"
	],
	"./zh.js": [
		"./node_modules/flatpickr/dist/l10n/zh.js",
		"vendors"
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
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 7 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./node_modules/flatpickr/dist/l10n lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/scss/components/c-test-component.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/c-test-component.scss ***!
  \***************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleParseError: Module parse failed: Unexpected character '\u0000' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)\n    at handleParseError (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:971:19)\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:1090:5\n    at processResult (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:795:11)\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:855:5\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\loader-runner\\lib\\LoaderRunner.js:406:3\n    at iterateNormalLoaders (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:10)\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\loader-runner\\lib\\LoaderRunner.js:223:4\n    at C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\webpack\\lib\\NormalModule.js:829:15\n    at eval (eval at create (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:12:1)\n    at runCallbacks (C:\\Users\\elmur\\OneDrive\\Desktop\\WIP\\formazione\\esercizio-4\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:34:4)");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jZGE1ZDM3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQk87QUEyQnBCLHFCQUFZQyxNQUFaLEVBQW1CO0FBQUE7O0FBQ2xCLFNBQUtDLElBQUwsR0FBWSxLQUFLQyxXQUFMLENBQWlCRCxJQUE3QjtBQUNBLFNBQUtFLGFBQUwsR0FBcUIsSUFBSVAsaUVBQUosRUFBckIsQ0FGa0IsQ0FFNkI7O0FBQy9DLFNBQUtRLEdBQUwsR0FBV1gscURBQVg7QUFDQSxTQUFLWSxLQUFMLEdBQWFYLHVEQUFiO0FBQ0EsU0FBS1ksVUFBTCxHQUFrQlIscUVBQWxCO0FBQ0EsU0FBS1UsVUFBTCxHQUFrQlYscUVBQWxCO0FBRUEsU0FBS1ksT0FBTCxHQUFlbEIsOERBQWY7QUFDQSxTQUFLbUIsU0FBTCxHQUFpQmhCLGtEQUFqQixDQVRrQixDQVVsQjs7QUFDQSxTQUFLaUIsZ0JBQUwsR0FBd0IsRUFBeEI7QUFDQSxTQUFLQyxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEIsQ0Faa0IsQ0FhbEI7O0FBQ0EsU0FBS0MsVUFBTCxHQUFrQmYsTUFBbEIsYUFBa0JBLE1BQWxCLGNBQWtCQSxNQUFsQixHQUEwQixJQUExQjtBQUVBLFNBQUtnQixTQUFMLEdBQWlCQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MscUJBQWQsRUFBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtMLFVBQUwsQ0FBZ0JJLHFCQUFoQixFQUFqQjtBQUVBLFNBQUtFLE1BQUwsR0FBY3hCLDhDQUFkO0FBRUEsU0FBS3lCLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCLEtBQUtSLFVBQUwsQ0FBZ0JTLGdCQUFoQixDQUFpQyxZQUFqQyxDQUF2QjtBQUNBOzs7O1NBakRELGVBQWdCO0FBQ2YsYUFBTztBQUNOQyxRQUFBQSxFQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUcsR0FBSCxDQURFO0FBRU5DLFFBQUFBLEVBQUUsRUFBRSxDQUFDLEdBQUQsRUFBSyxHQUFMLENBRkU7QUFHTkMsUUFBQUEsRUFBRSxFQUFFLENBQUMsR0FBRCxFQUFLLElBQUwsQ0FIRTtBQUlOQyxRQUFBQSxFQUFFLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixDQUpFO0FBS05DLFFBQUFBLEdBQUcsRUFBRSxDQUFDLElBQUQsRUFBTSxJQUFOO0FBTEMsT0FBUDtBQU9BOzs7U0FDRCxlQUFzQjtBQUNyQixhQUFPO0FBQ05DLFFBQUFBLGNBQWMsRUFBRSxvQkFEVjtBQUVOQyxRQUFBQSxpQkFBaUIsRUFBRTtBQUZiLE9BQVA7QUFJQTs7O1NBQ0QsZUFBdUI7QUFDdEIsYUFBTyxLQUFLQyxxQkFBTCxDQUEyQixLQUFLakIsVUFBaEMsSUFBOEMsS0FBS0EsVUFBTCxDQUFnQmtCLFNBQXJFO0FBQ0E7OztTQUVELGVBQXFCO0FBQ3BCLGFBQU87QUFDTkMsUUFBQUEsZUFBZSxFQUFFLFNBRFg7QUFFTkMsUUFBQUEsa0JBQWtCLEVBQUUsVUFGZDtBQUdOQyxRQUFBQSxXQUFXLEVBQUU7QUFIUCxPQUFQO0FBS0E7OztXQTBCRCxnQkFBTTtBQUNMQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQXlCLEtBQUtyQyxJQUE5QjtBQUNBLFdBQUtzQyxpQkFBTDtBQUNBOzs7V0FHRCw2QkFBbUI7QUFDbEIsVUFBRyxLQUFLeEIsVUFBUixFQUFtQjtBQUNsQjtBQUNBLGFBQUt5QixZQUFMO0FBQ0EsT0FKaUIsQ0FLbEI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7OztXQUVELHdCQUFtRztBQUFBLFVBQXRGQyxPQUFzRix1RUFBOUUsS0FBSzFCLFVBQXlFO0FBQUEsVUFBOUQyQixRQUE4RCx1RUFBckQsS0FBSzdCLGdCQUFnRDtBQUFBLFVBQTlCOEIsT0FBOEIsdUVBQXRCLEtBQUsvQixnQkFBaUI7QUFDbEcsVUFBSWdDLFFBQVEsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVc7QUFDbERBLFFBQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFpQixVQUFBQyxLQUFLO0FBQUEsaUJBQUlOLFFBQVEsQ0FBQ00sS0FBRCxDQUFaO0FBQUEsU0FBdEI7QUFDQSxPQUZjLEVBRVpMLE9BRlksQ0FBZjtBQUlBQyxNQUFBQSxRQUFRLENBQUNLLE9BQVQsQ0FBaUJSLE9BQWpCO0FBQ0E7OztXQUVELDBCQUFpQk8sS0FBakIsRUFBdUI7QUFDdEI7QUFDQSxVQUFHQSxLQUFLLENBQUNFLGNBQVQsRUFBd0I7QUFDdkI7QUFDQSxhQUFLQyxVQUFMO0FBQ0E7QUFDRDs7O1dBQ0Qsc0JBQVk7QUFDWCxVQUFHLEtBQUs3QixhQUFSLEVBQXNCO0FBQ3JCO0FBQ0E7O0FBQ0QsV0FBS0MsZUFBTCxDQUFxQndCLE9BQXJCLENBQThCLFVBQUFOLE9BQU8sRUFBSTtBQUN4QyxZQUFJVyxHQUFHLEdBQUdYLE9BQU8sQ0FBQ1ksT0FBUixDQUFnQkQsR0FBMUI7O0FBQ0EsZ0JBQVFYLE9BQU8sQ0FBQ2EsUUFBaEI7QUFDQSxlQUFLLFFBQUw7QUFDQ2IsWUFBQUEsT0FBTyxDQUFDYyxNQUFSLEdBQWlCSCxHQUFqQjtBQUNBOztBQUNELGVBQUssS0FBTDtBQUNDWCxZQUFBQSxPQUFPLENBQUNXLEdBQVIsR0FBY0EsR0FBZDtBQUNBO0FBTkQ7QUFRQSxPQVZEO0FBV0EsV0FBSzlCLGFBQUwsR0FBcUIsSUFBckI7QUFDQTs7O1dBRUQsc0JBQVk7QUFDWEwsTUFBQUEsUUFBUSxDQUFDdUMsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNDLEdBQXpDLENBQTZDLEtBQUtDLGVBQUwsQ0FBcUJ2QixXQUFsRTtBQUNBOzs7V0FDRCx3QkFBYztBQUNibkIsTUFBQUEsUUFBUSxDQUFDdUMsYUFBVCxDQUF1QixNQUF2QixFQUErQkMsU0FBL0IsQ0FBeUNHLE1BQXpDLENBQWdELEtBQUtELGVBQUwsQ0FBcUJ2QixXQUFyRTtBQUNBOzs7V0FDRCxtQkFBUztBQUNSLFdBQUtyQixVQUFMLENBQWdCMEMsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLEtBQUtDLGVBQUwsQ0FBcUJ6QixlQUFuRDtBQUNBOzs7V0FDRCxvQkFBVTtBQUNULFdBQUtuQixVQUFMLENBQWdCMEMsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDLEtBQUtELGVBQUwsQ0FBcUJ6QixlQUF0RDtBQUNBO0FBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDQyx1QkFBY21CLE9BQWQsRUFBdUJRLFFBQXZCLEVBQWtEO0FBQUEsVUFBbEJDLFdBQWtCLHVFQUFOLEtBQU07QUFDakQsVUFBSUMsT0FBTyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ2QsT0FBckMsRUFBNkNRLFFBQTdDLEtBQTBEUixPQUFPLENBQUNRLFFBQUQsQ0FBUCxLQUFzQixFQUE5Rjs7QUFDQSxVQUFHRSxPQUFPLElBQUlELFdBQWQsRUFBMEI7QUFDekIsZUFBT1QsT0FBTyxDQUFDUSxRQUFELENBQWQ7QUFDQTs7QUFDRCxhQUFPRSxPQUFQO0FBQ0E7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7V0FDQyx3QkFBZUssR0FBZixFQUFpQztBQUFBLFVBQWRDLFVBQWMsdUVBQUgsRUFBRzs7QUFDaEMsVUFBRyxDQUFDRCxHQUFKLEVBQVE7QUFDUCxjQUFNLCtEQUFOO0FBQ0E7O0FBQ0QsVUFBRyxPQUFPQyxVQUFQLEtBQXFCLFFBQXJCLElBQWlDLENBQUNDLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixVQUFkLENBQXJDLEVBQStEO0FBQzlELGNBQU0sb0hBQU47QUFDQTs7QUFDRCxVQUFJRyxFQUFFLEdBQUd2RCxRQUFRLENBQUN3RCxhQUFULENBQXVCTCxHQUF2QixDQUFUOztBQUNBLFVBQUdDLFVBQVUsQ0FBQ0ssTUFBWCxHQUFrQixDQUFyQixFQUF1QjtBQUFBOztBQUN0QixZQUFJQyxhQUFhLEdBQUcsT0FBT04sVUFBUCxLQUFzQixRQUExQztBQUNBLFlBQUlPLFVBQVUsR0FBR0QsYUFBYSxHQUFHLENBQUNOLFVBQUQsQ0FBSCxzQkFBc0JBLFVBQXRCLENBQTlCOztBQUNBLHlCQUFBRyxFQUFFLENBQUNmLFNBQUgsRUFBYUMsR0FBYix5Q0FBb0JrQixVQUFwQjtBQUNBOztBQUNELGFBQU9KLEVBQVA7QUFDQTs7O1dBRUQsbUJBQVVLLEVBQVYsRUFBY0MsUUFBZCxFQUF5QnBDLFFBQXpCLEVBQW1DO0FBQ2xDO0FBQ0E7QUFFQXFDLE1BQUFBLElBQUksQ0FBQ0MsYUFBTCxHQUFxQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWdCO0FBQ3BDSCxRQUFBQSxDQUFDLElBQUlHLENBQUMsR0FBQyxDQUFQOztBQUNBLFlBQUlILENBQUMsR0FBRyxDQUFSLEVBQVc7QUFDVixpQkFBT0UsQ0FBQyxHQUFDLENBQUYsR0FBSUYsQ0FBSixHQUFNQSxDQUFOLEdBQVVDLENBQWpCO0FBQ0E7O0FBQ0RELFFBQUFBLENBQUM7QUFDRCxlQUFPLENBQUNFLENBQUQsR0FBRyxDQUFILElBQVFGLENBQUMsSUFBRUEsQ0FBQyxHQUFDLENBQUosQ0FBRCxHQUFVLENBQWxCLElBQXVCQyxDQUE5QjtBQUNBLE9BUEQ7O0FBU0EsVUFBSUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsTUFBRCxFQUFZO0FBQ3RCckUsUUFBQUEsUUFBUSxDQUFDc0UsZUFBVCxDQUF5QkMsU0FBekIsR0FBcUNGLE1BQXJDO0FBQ0FyRSxRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY3VFLFVBQWQsQ0FBeUJELFNBQXpCLEdBQXFDRixNQUFyQztBQUNBckUsUUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWNzRSxTQUFkLEdBQTBCRixNQUExQjtBQUNBLE9BSkQ7O0FBS0EsVUFBSUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNwQixlQUFPekUsUUFBUSxDQUFDc0UsZUFBVCxDQUF5QkMsU0FBekIsSUFBc0N2RSxRQUFRLENBQUNDLElBQVQsQ0FBY3VFLFVBQWQsQ0FBeUJELFNBQS9ELElBQTRFdkUsUUFBUSxDQUFDQyxJQUFULENBQWNzRSxTQUFqRztBQUNBLE9BRkQ7O0FBR0EsVUFBSUcsS0FBSyxHQUFHRCxRQUFRLEVBQXBCO0FBQUEsVUFDQ0UsTUFBTSxHQUFHZixFQUFFLEdBQUdjLEtBRGY7QUFBQSxVQUVDRSxXQUFXLEdBQUcsQ0FGZjtBQUFBLFVBR0NDLFNBQVMsR0FBRyxFQUhiO0FBSUFoQixNQUFBQSxRQUFRLEdBQUksT0FBT0EsUUFBUCxLQUFxQixXQUF0QixHQUFxQyxHQUFyQyxHQUEyQ0EsUUFBdEQ7O0FBQ0EsVUFBSWlCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUN6QjtBQUNBRixRQUFBQSxXQUFXLElBQUlDLFNBQWYsQ0FGeUIsQ0FHekI7O0FBQ0EsWUFBSUUsR0FBRyxHQUFHakIsSUFBSSxDQUFDQyxhQUFMLENBQW1CYSxXQUFuQixFQUFnQ0YsS0FBaEMsRUFBdUNDLE1BQXZDLEVBQStDZCxRQUEvQyxDQUFWLENBSnlCLENBS3pCOztBQUNBTyxRQUFBQSxJQUFJLENBQUNXLEdBQUQsQ0FBSixDQU55QixDQU96Qjs7QUFDQSxZQUFJSCxXQUFXLEdBQUdmLFFBQWxCLEVBQTRCO0FBQzNCbUIsVUFBQUEsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QkgsYUFBN0I7QUFDQSxTQUZELE1BRU87QUFDTixjQUFJckQsUUFBUSxJQUFJLE9BQU9BLFFBQVAsS0FBcUIsVUFBckMsRUFBaUQ7QUFDaEQ7QUFDQUEsWUFBQUEsUUFBUTtBQUNSO0FBQ0Q7QUFDRCxPQWhCRDs7QUFpQkFxRCxNQUFBQSxhQUFhO0FBQ2I7QUFFRDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0MsK0JBQXNCdEQsT0FBdEIsRUFBOEI7QUFDN0IsVUFBSTBELEdBQUcsR0FBRyxDQUFWO0FBQ0EsVUFBSUMsU0FBUyxHQUFHM0QsT0FBaEI7O0FBQ0EsYUFBTTJELFNBQVMsQ0FBQ0MsWUFBaEIsRUFBNkI7QUFDNUJGLFFBQUFBLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxZQUFWLENBQXVCcEUsU0FBOUI7QUFDQW1FLFFBQUFBLFNBQVMsR0FBR0EsU0FBUyxDQUFDQyxZQUF0QjtBQUNBOztBQUNELGFBQU9GLEdBQVA7QUFDQTs7O1dBRUQscUJBQVlHLE1BQVosRUFBb0JDLE1BQXBCLEVBQTRCO0FBQzNCLGFBQU9OLE1BQU0sQ0FBQ08sVUFBUCxZQUFzQkYsTUFBdEIsb0JBQXNDQyxNQUF0QyxTQUFQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlORixJQUFNRSxnQkFBZ0IsR0FBRyxFQUF6Qjs7QUFFQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUF6RyxJQUFJLEVBQUk7QUFDbEMsU0FBT0EsSUFBSSxJQUFJd0csZ0JBQVIsR0FBMkJBLGdCQUFnQixDQUFDeEcsSUFBRCxDQUEzQyxHQUFvRCxLQUEzRDtBQUNBLENBRkQ7O0FBSUEsSUFBTTBHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQzFHLElBQUQsRUFBTzJHLEdBQVAsRUFBZTtBQUNyQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdkMsUUFBSTtBQUNILFVBQUksQ0FBQ0wsa0JBQWtCLENBQUN6RyxJQUFELENBQXZCLEVBQStCO0FBQzlCd0csUUFBQUEsZ0JBQWdCLENBQUN4RyxJQUFELENBQWhCLEdBQXlCMkcsR0FBekI7QUFDQUUsUUFBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNBLE9BSEQsTUFHTztBQUNOQSxRQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0E7QUFDRCxLQVBELENBT0UsT0FBT0UsQ0FBUCxFQUFVO0FBQ1hELE1BQUFBLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOO0FBQ0E7QUFDRCxHQVhNLENBQVA7QUFZQSxDQWJEO0FBZUE7QUFDQTtBQUNBO0FBQ0E7OztJQUNxQnBIOzs7Ozs7OztBQU1wQjtBQUNEO0FBQ0E7QUFDQTtBQUNDLG1CQUFpQjtBQUFBLFVBQWJxSCxNQUFhLHVFQUFKLEVBQUk7O0FBQ2hCLFVBQUlBLE1BQU0sS0FBSyxFQUFmLEVBQW1CO0FBQ2xCLFlBQUlDLE1BQU0sR0FBRyxLQUFLaEgsV0FBTCxDQUFpQkQsSUFBOUI7QUFDQW9DLFFBQUFBLE9BQU8sQ0FBQzhFLEtBQVIsWUFBa0JELE1BQWxCLGVBQTZCRCxNQUE3QjtBQUNBO0FBQ0Q7OztXQUdELDZCQUFvQkcsV0FBcEIsRUFBaUNDLFlBQWpDLEVBQStDO0FBQzlDaEYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7O0FBQ0EsVUFBSW9FLGtCQUFrQixDQUFDLE9BQUQsQ0FBdEIsRUFBaUM7QUFDaEMsZUFBT1UsV0FBVyxDQUFDVixrQkFBa0IsQ0FBQyxPQUFELENBQW5CLENBQWxCO0FBQ0E7O0FBQ0QsaU5BQ0VZLElBREYsQ0FDTyxVQUFBQyxHQUFHLEVBQUk7QUFDWlosUUFBQUEsY0FBYyxDQUFDLE9BQUQsRUFBVVksR0FBVixDQUFkO0FBQ0FILFFBQUFBLFdBQVcsQ0FBQ0csR0FBRCxDQUFYO0FBQ0EsT0FKRixXQUtRRixZQUxSO0FBTUE7OztXQUdELDZCQUFvQkcsTUFBcEIsRUFBNEJKLFdBQTVCLEVBQXlDQyxZQUF6QyxFQUF1RDtBQUN0RCwyR0FBeUVHLE1BQXpFLFVBQ0VGLElBREYsQ0FDT0YsV0FEUCxXQUVRQyxZQUZSO0FBR0E7OztXQUVELHVCQUFjRCxXQUFkLEVBQTJCQyxZQUEzQixFQUF5QztBQUN4QyxXQUFLL0UsR0FBTCxDQUFTLG1CQUFUO0FBRUEsc0xBQ0VnRixJQURGLENBQ09GLFdBRFAsV0FFUUMsWUFGUixFQUh3QyxDQUtqQjtBQUN2Qjs7O1dBRUQsaUNBQXdCRCxXQUF4QixFQUFxQ0MsWUFBckMsRUFBbUQ7QUFDbEQsV0FBSy9FLEdBQUwsQ0FBUyxtQkFBVDtBQUNBLFVBQUlvRSxrQkFBa0IsQ0FBQyxXQUFELENBQXRCLEVBQ0MsT0FBT1UsV0FBVyxDQUFDVixrQkFBa0IsQ0FBQyxXQUFELENBQW5CLENBQWxCO0FBQ0QsMExBQ0VZLElBREYsQ0FDTyxVQUFBQyxHQUFHLEVBQUk7QUFDWlosUUFBQUEsY0FBYyxDQUFDLFdBQUQsRUFBY1ksR0FBZCxDQUFkO0FBQ0FILFFBQUFBLFdBQVcsQ0FBQ0csR0FBRCxDQUFYO0FBQ0EsT0FKRixXQUtRRixZQUxSO0FBTUE7OztXQUVELDRCQUFtQkksR0FBbkIsRUFBd0I7QUFDdkIsYUFBTyxJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDLFlBQUlXLE1BQU0sR0FBR3pHLFFBQVEsQ0FBQ3dELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBaUQsUUFBQUEsTUFBTSxDQUFDQyxJQUFQLEdBQWMsaUJBQWQ7QUFDQUQsUUFBQUEsTUFBTSxDQUFDdEUsR0FBUCxHQUFhcUUsR0FBYjtBQUNBQyxRQUFBQSxNQUFNLENBQUNFLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDO0FBQUEsaUJBQU1kLE9BQU8sQ0FBQ1ksTUFBRCxDQUFiO0FBQUEsU0FBaEMsRUFBdUQsS0FBdkQ7QUFDQUEsUUFBQUEsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQztBQUFBLGlCQUFNYixNQUFNLENBQUNXLE1BQUQsQ0FBWjtBQUFBLFNBQWpDLEVBQXVELEtBQXZEO0FBQ0F6RyxRQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBYzJHLFdBQWQsQ0FBMEJILE1BQTFCO0FBQ0EsT0FQTSxDQUFQO0FBUUE7OztXQWpFRCw2QkFBMkJJLEtBQTNCLEVBQWtDO0FBQ2pDekYsTUFBQUEsT0FBTyxDQUFDeUYsS0FBUixDQUFjLDZCQUFkLEVBQTZDQSxLQUFLLENBQUNDLEtBQW5EO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRixTQUFTeEgsU0FBVCxDQUFtQk4sSUFBbkIsRUFBeUI7QUFDeEIsTUFBSStILENBQUMsR0FBRy9HLFFBQVEsQ0FBQ2dILE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLFlBQVlqSSxJQUFaLEdBQW1CLGVBQXpDLENBQVI7QUFDQSxTQUFPK0gsQ0FBQyxHQUFHQSxDQUFDLENBQUMsQ0FBRCxDQUFKLEdBQVUsSUFBbEI7QUFDQTs7QUFJRCxTQUFTdkgsU0FBVCxDQUFtQlIsSUFBbkIsRUFBeUJrSSxLQUF6QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDckMsTUFBSWhELENBQUMsR0FBRyxJQUFJaUQsSUFBSixFQUFSO0FBQ0FqRCxFQUFBQSxDQUFDLENBQUNrRCxPQUFGLENBQVVsRCxDQUFDLENBQUNtRCxPQUFGLEtBQWMsS0FBRyxFQUFILEdBQU0sRUFBTixHQUFTLElBQVQsR0FBY0gsSUFBdEM7QUFDQW5ILEVBQUFBLFFBQVEsQ0FBQ2dILE1BQVQsYUFBcUJoSSxJQUFyQixjQUE2QmtJLEtBQTdCLDZCQUFxRC9DLENBQUMsQ0FBQ29ELFdBQUYsRUFBckQ7QUFDQTs7QUFFTSxJQUFNMUksT0FBTyxHQUFHO0FBQ3RCUyxFQUFBQSxTQUFTLEVBQVRBLFNBRHNCO0FBRXRCRSxFQUFBQSxTQUFTLEVBQVRBO0FBRnNCLENBQWhCOzs7Ozs7Ozs7Ozs7Ozs7QUNiQSxJQUFNakIsWUFBWSxHQUFHO0FBQzNCaUosRUFBQUEsTUFBTSxFQUFDO0FBQ05DLElBQUFBLEtBQUssRUFBQyxnQkFEQTtBQUVOQyxJQUFBQSxPQUFPLEVBQUU7QUFGSCxHQURvQjtBQUszQkMsRUFBQUEsU0FBUyxFQUFDO0FBQ1RDLElBQUFBLEtBQUssRUFBRSxnQkFERTtBQUVUQyxJQUFBQSxLQUFLLEVBQUU7QUFGRTtBQUxpQixDQUFyQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1ySixFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFDc0osS0FBRCxFQUFRQyxFQUFSLEVBQVl2RyxPQUFaLEVBQXdCO0FBQ3pDLE1BQUl3RyxNQUFNLEdBQUd4RyxPQUFPLEdBQUNBLE9BQUQsR0FBV3dELE1BQS9CO0FBQ0EsU0FBT2dELE1BQU0sQ0FBQ3JCLGdCQUFQLENBQXdCbUIsS0FBeEIsRUFBK0IsVUFBQy9CLENBQUQsRUFBTztBQUM1Q2dDLElBQUFBLEVBQUUsQ0FBQ2hDLENBQUQsRUFBSUEsQ0FBQyxDQUFDa0MsTUFBTixDQUFGO0FBQ0EsR0FGTSxDQUFQO0FBR0EsQ0FMTTtBQU9BLElBQU14SixJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDcUosS0FBRCxFQUFRSSxPQUFSLEVBQWlCMUcsT0FBakIsRUFBNkI7QUFDaEQsTUFBSXdHLE1BQU0sR0FBR3hHLE9BQU8sR0FBR0EsT0FBSCxHQUFhd0QsTUFBakM7QUFDQSxNQUFJbUQsWUFBWSxHQUFHLElBQUlDLFdBQUosQ0FBZ0JOLEtBQWhCLEVBQXNCO0FBQUVHLElBQUFBLE1BQU0sRUFBRUM7QUFBVixHQUF0QixDQUFuQjtBQUNBLFNBQU9GLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQkYsWUFBckIsQ0FBUDtBQUNBLENBSk07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsU0FBU0csUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUJDLEVBQXpCLEVBQTZCO0FBQ25DLE1BQUlDLE9BQUo7QUFDQSxTQUFPLFlBQW1CO0FBQUEsc0NBQU5DLElBQU07QUFBTkEsTUFBQUEsSUFBTTtBQUFBOztBQUN6QixRQUFJRCxPQUFKLEVBQWE7QUFDWkUsTUFBQUEsWUFBWSxDQUFDRixPQUFELENBQVo7QUFDQTs7QUFDREEsSUFBQUEsT0FBTyxHQUFHRyxVQUFVLENBQUMsWUFBTTtBQUMxQkosTUFBQUEsRUFBRSxNQUFGLFNBQU1FLElBQU47QUFDQUQsTUFBQUEsT0FBTyxHQUFHLElBQVY7QUFDQSxLQUhtQixFQUdqQkYsS0FIaUIsQ0FBcEI7QUFJQSxHQVJEO0FBU0E7QUFFTSxTQUFTTSxpQkFBVCxDQUEyQk4sS0FBM0IsRUFBa0NDLEVBQWxDLEVBQXNDO0FBQzVDLE1BQUlNLEtBQUssR0FBRyxLQUFaO0FBQ0EsU0FBTyxZQUFtQjtBQUN6QixRQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNYTixNQUFBQSxFQUFFLE1BQUY7QUFDQU0sTUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQUYsTUFBQUEsVUFBVSxDQUFDO0FBQUEsZUFBTUUsS0FBSyxHQUFHLEtBQWQ7QUFBQSxPQUFELEVBQXNCUCxLQUF0QixDQUFWO0FBQ0E7QUFDRCxHQU5EO0FBT0E7QUFFTSxTQUFTN0osUUFBVCxHQUFvQjtBQUMxQixNQUFHO0FBQUVzQixJQUFBQSxRQUFRLENBQUMrSSxXQUFULENBQXFCLFlBQXJCO0FBQW9DLFdBQU8sSUFBUDtBQUFjLEdBQXZELENBQ0EsT0FBTWhELENBQU4sRUFBUTtBQUFFLFdBQU8sS0FBUDtBQUFlO0FBQ3pCOzs7Ozs7Ozs7O0FDM0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fic3RyYWN0cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3V0aWxzL0RlcGVuZGVuY3lJbmplY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvY29va2llcy1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9jdXN0b20tZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy9ldmVudHMtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG58bGF6eXwvXi8uKi8uanMkL3xjaHVua05hbWU6IGZsYXRwaWNrci1sb2NhbGV8Z3JvdXBPcHRpb25zOiB7fXxuYW1lc3BhY2Ugb2JqZWN0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUV2ZW50cyB9IGZyb20gJy4uL3V0aWxzL2N1c3RvbS1ldmVudHMnO1xuaW1wb3J0IHsgb24sIGVtaXQgfSBmcm9tICcuLi91dGlscy9ldmVudHMtYWN0aW9ucyc7XG5pbXBvcnQgeyBpc01vYmlsZX0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IERlcGVuZGVuY3lJbmplY3RvciBmcm9tICcuLi91dGlscy9EZXBlbmRlbmN5SW5qZWN0b3InO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7Q29va2llc30gZnJvbSAnLi4vdXRpbHMvY29va2llcy1oYW5kbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50e1xuXHRnZXQgVklFV1BPUlRTKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzbTogWzAsNzY3XSxcblx0XHRcdG1kOiBbNzY4LDk5MV0sXG5cdFx0XHRsZzogWzk5MiwxMjc5XSxcblx0XHRcdHhsOiBbMTI4MCwxNTk5XSxcblx0XHRcdHh4bDogWzE2MDAsOTk5OV1cblx0XHR9O1xuXHR9XG5cdGdldCBDU1NfQ1VTVE9NX1ZBUlMoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGpzSGVpZ2h0SGVhZGVyOiAnLS1qcy1oZWFkZXItaGVpZ2h0Jyxcblx0XHRcdGhlYWRlclN0cmlwSGVpZ2h0OiAnLS1qcy1oZWFkZXItc3RyaXAtaGVpZ2h0Jyxcblx0XHR9O1xuXHR9XG5cdGdldCBUT1RBTF9PRkZTRVRfVE9QICgpe1xuXHRcdHJldHVybiB0aGlzLiRjYWxjUGFyZW50c09mZnNldFRvcCh0aGlzLiRjb21wb25lbnQpICsgdGhpcy4kY29tcG9uZW50Lm9mZnNldFRvcDtcblx0fVxuXG5cdGdldCBCQVNFX0NMQVNTTkFNRVMoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0b25WaWV3Q29tcG9uZW50OiAnb24tdmlldycsXG5cdFx0XHRvdXRPZlZpZXdDb21wb25lbnQ6ICdvdXQtdmlldycsXG5cdFx0XHRib2R5QmxvY2tlZDogJ2JvZHktYmxvY2tlZCcsXG5cdFx0fTtcblx0fVxuXHRjb25zdHJ1Y3Rvcihjb21wRWwpe1xuXHRcdHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0XHR0aGlzLiRtb2R1bGVMb2FkZXIgPSBuZXcgRGVwZW5kZW5jeUluamVjdG9yKCk7IC8vIFVzZSB0aGlzIGNsYXNzIHRvIGxhenkgbG9hZCBtb2R1bGVzISFcblx0XHR0aGlzLiRvbiA9IG9uO1xuXHRcdHRoaXMuJGVtaXQgPSBlbWl0O1xuXHRcdHRoaXMuJGdldENvb2tpZSA9IENvb2tpZXMuZ2V0Q29va2llO1xuXHRcdHRoaXMuJHNldENvb2tpZSA9IENvb2tpZXMuc2V0Q29va2llO1xuXG5cdFx0dGhpcy4kZXZlbnRzID0gY3VzdG9tRXZlbnRzO1xuXHRcdHRoaXMuJGlzTW9iaWxlID0gaXNNb2JpbGU7XG5cdFx0Ly9vYnNlcnZlclxuXHRcdHRoaXMuJG9ic2VydmVyT3B0aW9ucyA9IHt9O1xuXHRcdHRoaXMub2JzZXJ2ZXJDYWxsYmFjayA9IHRoaXMub2JzZXJ2ZXJDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdC8vb3VyIGh0bWwgY29tcG9uZW50XG5cdFx0dGhpcy4kY29tcG9uZW50ID0gY29tcEVsPz9udWxsO1xuXG5cdFx0dGhpcy4kYm9keVJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHRoaXMuJGNvbXBSZWN0ID0gdGhpcy4kY29tcG9uZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0dGhpcy4kYXhpb3MgPSBheGlvcztcblxuXHRcdHRoaXMuaGFzTG9hZEltYWdlcyA9IGZhbHNlO1xuXHRcdHRoaXMuY29sbGVjdERhdGFTcmNzID0gdGhpcy4kY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNyY10nKTtcblx0fVxuXG5cdGluaXQoKXtcblx0XHRjb25zb2xlLmxvZygnQ29tcG9uZW50OicsdGhpcy5uYW1lKTtcblx0XHR0aGlzLmNoZWNrSWZPYnNlcnZhYmxlKCk7XG5cdH1cblxuXG5cdGNoZWNrSWZPYnNlcnZhYmxlKCl7XG5cdFx0aWYodGhpcy4kY29tcG9uZW50KXtcblx0XHRcdC8vICAgICAgICAgICAgY29uc29sZS5sb2coJ0ludGVyc2VjdGlvbk9ic2VydmVyIHRvOiAnLCB0aGlzLm5hbWUsICdXaXRoIG9wdGlvbnM6ICcsdGhpcy4kb2JzZXJ2ZXJPcHRpb25zKVxuXHRcdFx0dGhpcy5pbml0T2JzZXJ2ZXIoKTtcblx0XHR9XG5cdFx0Ly8gICAgICAgIGlmKHRoaXMuJGNvbXBvbmVudCAmJiB0aGlzLiRjb21wb25lbnQuZGF0YXNldC50b09ic2VydmUgIT09IHVuZGVmaW5lZCl7XG5cdFx0Ly8gICAgICAgICAgICBjb25zb2xlLmxvZygnSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgdG86ICcsIHRoaXMubmFtZSwgJ1dpdGggb3B0aW9uczogJyx0aGlzLiRvYnNlcnZlck9wdGlvbnMpXG5cdFx0Ly8gICAgICAgICAgICB0aGlzLmluaXRPYnNlcnZlcigpO1xuXHRcdC8vICAgICAgICB9XG5cdH1cblxuXHRpbml0T2JzZXJ2ZXIoZWxlbWVudD10aGlzLiRjb21wb25lbnQsY2FsbGJhY2s9dGhpcy5vYnNlcnZlckNhbGxiYWNrLCBvcHRpb25zPXRoaXMuJG9ic2VydmVyT3B0aW9ucyl7XG5cdFx0bGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuXHRcdFx0ZW50cmllcy5mb3JFYWNoKCBlbnRyeSA9PiBjYWxsYmFjayhlbnRyeSkgKTtcblx0XHR9LCBvcHRpb25zKTtcblxuXHRcdG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG5cdH1cblxuXHRvYnNlcnZlckNhbGxiYWNrKGVudHJ5KXtcblx0XHQvLyAgICAgICAgY29uc29sZS5sb2coJ09ic2VydmVyIGNhbGxiYWNrIGZpcmVkIGF0OiAnLCB0aGlzLm5hbWUpO1xuXHRcdGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcblx0XHRcdC8vICAgICAgICAgICAgY29uc29sZS53YXJuKCdJbnRlcnNlY3RlZCBieScsdGhpcy5uYW1lKTtcblx0XHRcdHRoaXMubG9hZEltYWdlcygpO1xuXHRcdH1cblx0fVxuXHRsb2FkSW1hZ2VzKCl7XG5cdFx0aWYodGhpcy5oYXNMb2FkSW1hZ2VzKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5jb2xsZWN0RGF0YVNyY3MuZm9yRWFjaCggZWxlbWVudCA9PiB7XG5cdFx0XHRsZXQgc3JjID0gZWxlbWVudC5kYXRhc2V0LnNyYztcblx0XHRcdHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSl7XG5cdFx0XHRjYXNlICdTT1VSQ0UnOlxuXHRcdFx0XHRlbGVtZW50LnNyY3NldCA9IHNyYztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdJTUcnOlxuXHRcdFx0XHRlbGVtZW50LnNyYyA9IHNyYztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5oYXNMb2FkSW1hZ2VzID0gdHJ1ZTtcblx0fVxuXG5cdCRibG9ja0JvZHkoKXtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCh0aGlzLkJBU0VfQ0xBU1NOQU1FUy5ib2R5QmxvY2tlZCk7XG5cdH1cblx0JHVuYmxvY2tCb2R5KCl7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5CQVNFX0NMQVNTTkFNRVMuYm9keUJsb2NrZWQpO1xuXHR9XG5cdCRvblZpZXcoKXtcblx0XHR0aGlzLiRjb21wb25lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLkJBU0VfQ0xBU1NOQU1FUy5vblZpZXdDb21wb25lbnQpO1xuXHR9XG5cdCRvdXRWaWV3KCl7XG5cdFx0dGhpcy4kY29tcG9uZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5CQVNFX0NMQVNTTkFNRVMub25WaWV3Q29tcG9uZW50KTtcblx0fVxuXG5cdC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFzZXQgZGF0YXNldCBvYmplY3RcbiAgICAgKiBAcGFyYW0gZGF0YU5hbWUgZGF0YXNldCBuYW1lIHRvIGZpbmRcbiAgICAgKiBAcGFyYW0gcmV0dXJuVmFsdWUgdHJ1ZSB3aGVuIG5lZWQgZGF0YXNldCB2YWx1ZSByZXR1cm5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxuICAgICAqL1xuXHQkY2hlY2tEYXRhc2V0KGRhdGFzZXQsIGRhdGFOYW1lLHJldHVyblZhbHVlPWZhbHNlKXtcblx0XHRsZXQgaXNWYWxpZCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkYXRhc2V0LGRhdGFOYW1lKSAmJiBkYXRhc2V0W2RhdGFOYW1lXSAhPT0gJyc7XG5cdFx0aWYoaXNWYWxpZCAmJiByZXR1cm5WYWx1ZSl7XG5cdFx0XHRyZXR1cm4gZGF0YXNldFtkYXRhTmFtZV07XG5cdFx0fVxuXHRcdHJldHVybiBpc1ZhbGlkO1xuXHR9XG5cblx0LyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFnICAgSFRNTCB0YWcgZWxlbWVudFxuICAgICAqIEBwYXJhbSBjbGFzc05hbWVzIHNpbmdsZSBzdHJpbmcgb3IgYXJyYXkgb2Ygc3RyaW5ncyhjbGFzc2VzKVxuICAgICAqIEByZXR1cm5zIHsqfSBIVE1MIEVsZW1lbnQgY3JlYXRlZFxuICAgICAqL1xuXHQkY3JlYXRlRWxlbWVudCh0YWcsY2xhc3NOYW1lcz1bXSl7XG5cdFx0aWYoIXRhZyl7XG5cdFx0XHR0aHJvdyAnQ29tcG9uZW50LiRjcmVhdGVFbGVtZW50IG5vIGVsZW1lbnQgd2FzIGNyZWF0ZWQsIGRlY2xhcmUgYXJncyc7XG5cdFx0fVxuXHRcdGlmKHR5cGVvZiBjbGFzc05hbWVzICE9PSdzdHJpbmcnICYmICFBcnJheS5pc0FycmF5KGNsYXNzTmFtZXMpKXtcblx0XHRcdHRocm93ICdDb21wb25lbnQuJGNyZWF0ZUVsZW1lbnQodGFnLGNsYXNzTmFtZXMpIHNlY29uZCAgYXJndW1lbnQgY2xhc3NOYW1lcyBnb3QgdG8gYmUgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MoY2xhc3NlcyknO1xuXHRcdH1cblx0XHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0aWYoY2xhc3NOYW1lcy5sZW5ndGg+MCl7XG5cdFx0XHRsZXQgaXNTaW5nbGVDbGFzcyA9IHR5cGVvZiBjbGFzc05hbWVzID09PSAnc3RyaW5nJztcblx0XHRcdGxldCBjbGFzc1RvQWRkID0gaXNTaW5nbGVDbGFzcyA/IFtjbGFzc05hbWVzXSA6IFsuLi5jbGFzc05hbWVzXTtcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NUb0FkZCk7XG5cdFx0fVxuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdCRzY3JvbGxUbyh0bywgZHVyYXRpb24gLCBjYWxsYmFjaykge1xuXHRcdC8vQmVjYXVzZSBzY3JvbGxJbnRvVmlldyB8fCB3aW5kb3cuc2Nyb2xsVG8gYmVoYXZpb3VyIHNtb290aCBhcmUgbm90IHByZXNlbnQgYXQgJ3NhZmFyaSdcblx0XHQvLyB3YXMgZm91bmQgdGhpcyBjcm9zcy1icm93c2VyIHNvbHV0aW9uIGZyb20gOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9qYW1lczJkb3lsZS81Njk0NzAwXG5cblx0XHRNYXRoLmVhc2VJbk91dFF1YWQgPSAodCwgYiwgYywgZCkgPT4ge1xuXHRcdFx0dCAvPSBkLzI7XG5cdFx0XHRpZiAodCA8IDEpIHtcblx0XHRcdFx0cmV0dXJuIGMvMip0KnQgKyBiO1xuXHRcdFx0fVxuXHRcdFx0dC0tO1xuXHRcdFx0cmV0dXJuIC1jLzIgKiAodCoodC0yKSAtIDEpICsgYjtcblx0XHR9O1xuXG5cdFx0bGV0IG1vdmUgPSAoYW1vdW50KSA9PiB7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gYW1vdW50O1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbFRvcCA9IGFtb3VudDtcblx0XHRcdGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gYW1vdW50O1xuXHRcdH07XG5cdFx0bGV0IHBvc2l0aW9uID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlLnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcblx0XHR9O1xuXHRcdGxldCBzdGFydCA9IHBvc2l0aW9uKCksXG5cdFx0XHRjaGFuZ2UgPSB0byAtIHN0YXJ0LFxuXHRcdFx0Y3VycmVudFRpbWUgPSAwLFxuXHRcdFx0aW5jcmVtZW50ID0gMjA7XG5cdFx0ZHVyYXRpb24gPSAodHlwZW9mKGR1cmF0aW9uKSA9PT0gJ3VuZGVmaW5lZCcpID8gNTAwIDogZHVyYXRpb247XG5cdFx0bGV0IGFuaW1hdGVTY3JvbGwgPSAoKSA9PiB7XG5cdFx0XHQvLyBpbmNyZW1lbnQgdGhlIHRpbWVcblx0XHRcdGN1cnJlbnRUaW1lICs9IGluY3JlbWVudDtcblx0XHRcdC8vIGZpbmQgdGhlIHZhbHVlIHdpdGggdGhlIHF1YWRyYXRpYyBpbi1vdXQgZWFzaW5nIGZ1bmN0aW9uXG5cdFx0XHRsZXQgdmFsID0gTWF0aC5lYXNlSW5PdXRRdWFkKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbik7XG5cdFx0XHQvLyBtb3ZlIHRoZSBkb2N1bWVudC5ib2R5XG5cdFx0XHRtb3ZlKHZhbCk7XG5cdFx0XHQvLyBkbyB0aGUgYW5pbWF0aW9uIHVubGVzcyBpdHMgb3ZlclxuXHRcdFx0aWYgKGN1cnJlbnRUaW1lIDwgZHVyYXRpb24pIHtcblx0XHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlU2Nyb2xsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChjYWxsYmFjayAmJiB0eXBlb2YoY2FsbGJhY2spID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Ly8gdGhlIGFuaW1hdGlvbiBpcyBkb25lIHNvIGxldHMgY2FsbGJhY2tcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRhbmltYXRlU2Nyb2xsKCk7XG5cdH1cblxuXHQvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50IEhUTUwgZWxlbWVudCByZWZlcmVuY2VcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBzdW0gb2YgYWxsIHBhcmVudHMgb2Zmc2V0VG9wIGZvdW5kXG4gICAgICovXG5cdCRjYWxjUGFyZW50c09mZnNldFRvcChlbGVtZW50KXtcblx0XHRsZXQgc3VtID0gMDtcblx0XHRsZXQgY3VycmVudEVsID0gZWxlbWVudDtcblx0XHR3aGlsZShjdXJyZW50RWwub2Zmc2V0UGFyZW50KXtcblx0XHRcdHN1bSArPSBjdXJyZW50RWwub2Zmc2V0UGFyZW50Lm9mZnNldFRvcDtcblx0XHRcdGN1cnJlbnRFbCA9IGN1cnJlbnRFbC5vZmZzZXRQYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBzdW07XG5cdH1cblxuXHQkbWVkaWFRdWVyeShtaW5NYXgsIHBpeGVscykge1xuXHRcdHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShgKCR7bWluTWF4fS13aWR0aDoke3BpeGVsc31weClgKTtcblx0fVxufVxuIiwiY29uc3QgbG9hZGVkRGVwZW5kZW5jeSA9IHt9O1xuXG5jb25zdCBleGlzdGluZ0RlcGVuZGVuY3kgPSBuYW1lID0+IHtcblx0cmV0dXJuIG5hbWUgaW4gbG9hZGVkRGVwZW5kZW5jeSA/IGxvYWRlZERlcGVuZGVuY3lbbmFtZV0gOiBmYWxzZTtcbn07XG5cbmNvbnN0IHNhdmVEZXBlbmRlbmN5ID0gKG5hbWUsIGxpYikgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIWV4aXN0aW5nRGVwZW5kZW5jeShuYW1lKSkge1xuXHRcdFx0XHRsb2FkZWREZXBlbmRlbmN5W25hbWVdID0gbGliO1xuXHRcdFx0XHRyZXNvbHZlKGZhbHNlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmVqZWN0KGUpO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKipcbiAqIFRoaXMgdXRpbGl0eSBjbGFzcyBpcyBpbmplY3RlZCBpbiBhbGwgY29tcG9uZW50cyB0aGF0IGV4dGVuZHMgQ29tcG9uZW50XG4gKiBhbmQgaXMgdXNlZCB0byBsYXp5IGxvYWQgdGhpcmQtcGFydCBsaWJyYXJpZXNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwZW5kZW5jeUluamVjdG9yIHtcblxuXHRzdGF0aWMgZGVmYXVsdENhdGNoUHJvbWlzZShlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBpbmplY3QgZGVwZW5kZW5jeScsIGVycm9yLnN0YWNrKTtcblx0fVxuXG5cdC8qKlxuICAgKiBMb2cgdXRpbGl0eVxuICAgKiBAcGFyYW0gbG9nU3RyXG4gICAqL1xuXHRsb2cobG9nU3RyID0gJycpIHtcblx0XHRpZiAobG9nU3RyICE9PSAnJykge1xuXHRcdFx0bGV0IG15TmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZTtcblx0XHRcdGNvbnNvbGUuZGVidWcoYFske215TmFtZX1dICR7bG9nU3RyfWApO1xuXHRcdH1cblx0fVxuXG5cblx0bG9hZEdsaWRlQW5kRXhlY3V0ZSh0aGVuUHJvbWlzZSwgY2F0Y2hQcm9taXNlKSB7XG5cdFx0Y29uc29sZS5sb2coJ0xvYWRpbmcgR2xpZGUgQ2Fyb3VzZWwnKTtcblx0XHRpZiAoZXhpc3RpbmdEZXBlbmRlbmN5KCdnbGlkZScpKSB7XG5cdFx0XHRyZXR1cm4gdGhlblByb21pc2UoZXhpc3RpbmdEZXBlbmRlbmN5KCdnbGlkZScpKTtcblx0XHR9XG5cdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IGBnbGlkZWAgKi8gJ0BnbGlkZWpzL2dsaWRlL2Rpc3QvZ2xpZGUubWluJylcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHNhdmVEZXBlbmRlbmN5KCdnbGlkZScsIHJlcyk7XG5cdFx0XHRcdHRoZW5Qcm9taXNlKHJlcyk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGNhdGNoUHJvbWlzZSk7XG5cdH1cblxuXG5cdGxvYWRGbGF0cGlja3JMb2NhbGUobG9jYWxlLCB0aGVuUHJvbWlzZSwgY2F0Y2hQcm9taXNlKSB7XG5cdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IGBmbGF0cGlja3ItbG9jYWxlYCAqLyBgZmxhdHBpY2tyL2Rpc3QvbDEwbi8ke2xvY2FsZX0uanNgKVxuXHRcdFx0LnRoZW4odGhlblByb21pc2UpXG5cdFx0XHQuY2F0Y2goY2F0Y2hQcm9taXNlKTtcblx0fVxuXG5cdGxvYWRGbGF0cGlja3IodGhlblByb21pc2UsIGNhdGNoUHJvbWlzZSkge1xuXHRcdHRoaXMubG9nKCdMb2FkaW5nIEZsYXRwaWNrcicpO1xuXG5cdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IGBmbGF0cGlja3JgICovICdmbGF0cGlja3InKVxuXHRcdFx0LnRoZW4odGhlblByb21pc2UpXG5cdFx0XHQuY2F0Y2goY2F0Y2hQcm9taXNlKTsgLy8ganMgbGlicmFyeVxuXHR9XG5cblx0bG9hZFNpbXBsZUJhckFuZEV4ZWN1dGUodGhlblByb21pc2UsIGNhdGNoUHJvbWlzZSkge1xuXHRcdHRoaXMubG9nKCdMb2FkaW5nIFNpbXBsZUJhcicpO1xuXHRcdGlmIChleGlzdGluZ0RlcGVuZGVuY3koJ3NpbXBsZWJhcicpKVxuXHRcdFx0cmV0dXJuIHRoZW5Qcm9taXNlKGV4aXN0aW5nRGVwZW5kZW5jeSgnc2ltcGxlYmFyJykpO1xuXHRcdGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBgc2ltcGxlYmFyYCAqLyAnc2ltcGxlYmFyJylcblx0XHRcdC50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHNhdmVEZXBlbmRlbmN5KCdzaW1wbGViYXInLCByZXMpO1xuXHRcdFx0XHR0aGVuUHJvbWlzZShyZXMpO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChjYXRjaFByb21pc2UpO1xuXHR9XG5cblx0bG9hZEV4dGVybmFsU2NyaXB0KHVybCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuXHRcdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0XHRcdHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gcmVzb2x2ZShzY3JpcHQpLCBmYWxzZSk7XG5cdFx0XHRzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiByZWplY3Qoc2NyaXB0KSwgZmFsc2UpO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuXHRsZXQgdiA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaCgnKF58OykgPycgKyBuYW1lICsgJz0oW147XSopKDt8JCknKTtcblx0cmV0dXJuIHYgPyB2WzJdIDogbnVsbDtcbn1cblxuXG5cbmZ1bmN0aW9uIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xuXHRsZXQgZCA9IG5ldyBEYXRlO1xuXHRkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAyNCo2MCo2MCoxMDAwKmRheXMpO1xuXHRkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfTtwYXRoPS87ZXhwaXJlcz0ke2QudG9HTVRTdHJpbmcoKX1gO1xufVxuXG5leHBvcnQgY29uc3QgQ29va2llcyA9IHtcblx0Z2V0Q29va2llLFxuXHRzZXRDb29raWVcbn07XG4iLCJleHBvcnQgY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuXHRIRUFERVI6e1xuXHRcdGZpeGVkOidoZWFkZXI6dW5ibG9jaycsXG5cdFx0dW5maXhlZDogJ2hlYWRlcjpibG9jaycsXG5cdH0sXG5cdEJVUkdFUl9FVjp7XG5cdFx0Y2xpY2s6ICdidXJnZXI6Y2xpY2tlZCcsXG5cdFx0Y2xvc2U6ICdidXJnZXI6Y2xvc2UnLFxuXHR9LFxufTtcbiIsImV4cG9ydCBjb25zdCBvbiA9IChldmVudCwgY2IsIGVsZW1lbnQpID0+IHtcblx0bGV0IHRhcmdldCA9IGVsZW1lbnQ/ZWxlbWVudCA6IHdpbmRvdztcblx0cmV0dXJuIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4ge1xuXHRcdGNiKGUsIGUuZGV0YWlsKTtcblx0fSk7XG59O1xuXG5leHBvcnQgY29uc3QgZW1pdCA9IChldmVudCwgcGF5bG9hZCwgZWxlbWVudCkgPT4ge1xuXHRsZXQgdGFyZ2V0ID0gZWxlbWVudCA/IGVsZW1lbnQgOiB3aW5kb3c7XG5cdGxldCBjcmVhdGVkRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQseyBkZXRhaWw6IHBheWxvYWR9KTtcblx0cmV0dXJuIHRhcmdldC5kaXNwYXRjaEV2ZW50KGNyZWF0ZWRFdmVudCk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZShkZWxheSwgZm4pIHtcblx0bGV0IHRpbWVySWQ7XG5cdHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdGlmICh0aW1lcklkKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZXJJZCk7XG5cdFx0fVxuXHRcdHRpbWVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGZuKC4uLmFyZ3MpO1xuXHRcdFx0dGltZXJJZCA9IG51bGw7XG5cdFx0fSwgZGVsYXkpO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2VJbW1lZGlhdGUoZGVsYXksIGZuKSB7XG5cdGxldCBmaXJlZCA9IGZhbHNlO1xuXHRyZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHRpZiAoIWZpcmVkKSB7XG5cdFx0XHRmbiguLi5hcmdzKTtcblx0XHRcdGZpcmVkID0gdHJ1ZTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4gZmlyZWQgPSBmYWxzZSwgZGVsYXkpO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuXHR0cnl7IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdUb3VjaEV2ZW50Jyk7IHJldHVybiB0cnVlOyB9XG5cdGNhdGNoKGUpeyByZXR1cm4gZmFsc2U7IH1cbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9hci5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2FyLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2F0LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vYXQuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vYXouanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9hei5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9iZS5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2JlLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2JnLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vYmcuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vYm4uanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9ibi5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9icy5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2JzLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2NhdC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2NhdC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9jcy5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2NzLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2N5LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vY3kuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vZGEuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9kYS5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9kZS5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2RlLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2RlZmF1bHQuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9kZWZhdWx0LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2VvLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vZW8uanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vZXMuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9lcy5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9ldC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2V0LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2ZhLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vZmEuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vZmkuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9maS5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9mby5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2ZvLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2ZyLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vZnIuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vZ2EuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9nYS5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9nci5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2dyLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2hlLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vaGUuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vaGkuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9oaS5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9oci5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2hyLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2h1LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vaHUuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vaWQuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9pZC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9pbmRleC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2luZGV4LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2lzLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vaXMuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vaXQuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9pdC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9qYS5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2phLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2thLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4va2EuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4va20uanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9rbS5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9rby5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2tvLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL2t6LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4va3ouanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vbHQuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9sdC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9sdi5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL2x2LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL21rLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vbWsuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vbW4uanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9tbi5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9tcy5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL21zLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL215LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vbXkuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vbmwuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9ubC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9uby5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL25vLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3BhLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vcGEuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vcGwuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9wbC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9wdC5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3B0LmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3JvLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vcm8uanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vcnUuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9ydS5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9zaS5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3NpLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3NrLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vc2suanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vc2wuanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi9zbC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9zcS5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3NxLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3NyLWN5ci5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3NyLWN5ci5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi9zci5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3NyLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3N2LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vc3YuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vdGguanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi90aC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi90ci5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3RyLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3VrLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vdWsuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vdXouanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi91ei5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi91el9sYXRuLmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vdXpfbGF0bi5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF0sXG5cdFwiLi92bi5qc1wiOiBbXG5cdFx0XCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuL3ZuLmpzXCIsXG5cdFx0XCJ2ZW5kb3JzXCJcblx0XSxcblx0XCIuL3poLXR3LmpzXCI6IFtcblx0XHRcIi4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L2wxMG4vemgtdHcuanNcIixcblx0XHRcInZlbmRvcnNcIlxuXHRdLFxuXHRcIi4vemguanNcIjogW1xuXHRcdFwiLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvbDEwbi96aC5qc1wiLFxuXHRcdFwidmVuZG9yc1wiXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblxuXHR2YXIgaWRzID0gbWFwW3JlcV0sIGlkID0gaWRzWzBdO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGlkc1sxXSkudGhlbigoKSA9PiB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgNyB8IDE2KTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoT2JqZWN0LmtleXMobWFwKSk7XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9sMTBuIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyJdLCJuYW1lcyI6WyJjdXN0b21FdmVudHMiLCJvbiIsImVtaXQiLCJpc01vYmlsZSIsIkRlcGVuZGVuY3lJbmplY3RvciIsImF4aW9zIiwiQ29va2llcyIsIkNvbXBvbmVudCIsImNvbXBFbCIsIm5hbWUiLCJjb25zdHJ1Y3RvciIsIiRtb2R1bGVMb2FkZXIiLCIkb24iLCIkZW1pdCIsIiRnZXRDb29raWUiLCJnZXRDb29raWUiLCIkc2V0Q29va2llIiwic2V0Q29va2llIiwiJGV2ZW50cyIsIiRpc01vYmlsZSIsIiRvYnNlcnZlck9wdGlvbnMiLCJvYnNlcnZlckNhbGxiYWNrIiwiYmluZCIsIiRjb21wb25lbnQiLCIkYm9keVJlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCIkY29tcFJlY3QiLCIkYXhpb3MiLCJoYXNMb2FkSW1hZ2VzIiwiY29sbGVjdERhdGFTcmNzIiwicXVlcnlTZWxlY3RvckFsbCIsInNtIiwibWQiLCJsZyIsInhsIiwieHhsIiwianNIZWlnaHRIZWFkZXIiLCJoZWFkZXJTdHJpcEhlaWdodCIsIiRjYWxjUGFyZW50c09mZnNldFRvcCIsIm9mZnNldFRvcCIsIm9uVmlld0NvbXBvbmVudCIsIm91dE9mVmlld0NvbXBvbmVudCIsImJvZHlCbG9ja2VkIiwiY29uc29sZSIsImxvZyIsImNoZWNrSWZPYnNlcnZhYmxlIiwiaW5pdE9ic2VydmVyIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5Iiwib2JzZXJ2ZSIsImlzSW50ZXJzZWN0aW5nIiwibG9hZEltYWdlcyIsInNyYyIsImRhdGFzZXQiLCJub2RlTmFtZSIsInNyY3NldCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJCQVNFX0NMQVNTTkFNRVMiLCJyZW1vdmUiLCJkYXRhTmFtZSIsInJldHVyblZhbHVlIiwiaXNWYWxpZCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInRhZyIsImNsYXNzTmFtZXMiLCJBcnJheSIsImlzQXJyYXkiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJsZW5ndGgiLCJpc1NpbmdsZUNsYXNzIiwiY2xhc3NUb0FkZCIsInRvIiwiZHVyYXRpb24iLCJNYXRoIiwiZWFzZUluT3V0UXVhZCIsInQiLCJiIiwiYyIsImQiLCJtb3ZlIiwiYW1vdW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicGFyZW50Tm9kZSIsInBvc2l0aW9uIiwic3RhcnQiLCJjaGFuZ2UiLCJjdXJyZW50VGltZSIsImluY3JlbWVudCIsImFuaW1hdGVTY3JvbGwiLCJ2YWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdW0iLCJjdXJyZW50RWwiLCJvZmZzZXRQYXJlbnQiLCJtaW5NYXgiLCJwaXhlbHMiLCJtYXRjaE1lZGlhIiwibG9hZGVkRGVwZW5kZW5jeSIsImV4aXN0aW5nRGVwZW5kZW5jeSIsInNhdmVEZXBlbmRlbmN5IiwibGliIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJlIiwibG9nU3RyIiwibXlOYW1lIiwiZGVidWciLCJ0aGVuUHJvbWlzZSIsImNhdGNoUHJvbWlzZSIsInRoZW4iLCJyZXMiLCJsb2NhbGUiLCJ1cmwiLCJzY3JpcHQiLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwiZXJyb3IiLCJzdGFjayIsInYiLCJjb29raWUiLCJtYXRjaCIsInZhbHVlIiwiZGF5cyIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiSEVBREVSIiwiZml4ZWQiLCJ1bmZpeGVkIiwiQlVSR0VSX0VWIiwiY2xpY2siLCJjbG9zZSIsImV2ZW50IiwiY2IiLCJ0YXJnZXQiLCJkZXRhaWwiLCJwYXlsb2FkIiwiY3JlYXRlZEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZGVib3VuY2UiLCJkZWxheSIsImZuIiwidGltZXJJZCIsImFyZ3MiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGVib3VuY2VJbW1lZGlhdGUiLCJmaXJlZCIsImNyZWF0ZUV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==