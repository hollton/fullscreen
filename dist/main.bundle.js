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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(1);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.fullscreen = _index2.default;

exports.default = _index2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [supported 浏览器是否支持全屏api]
 * @return {[bool]} [true表支持]
 */
var supported = function supported() {
  var el = document;
  return !!(el.fullscreenEnabled || el.webkitFullscreenEnabled || el.mozFullScreenEnabled || el.msFullscreenEnabled);
};

/**
 * [element 当前处于全屏状态的元素 element]
 * @return {[object]} [全屏状态element]
 */
var element = function element() {
  var el = document;
  return el.fullscreenElement || el.webkitFullscreenElement || el.mozFullScreenElement || el.msFullscreenElement;
};

/**
 * [launch 进入全屏]
 * @param  {[object]} el [全屏操作的dom，默认为document.documentElement]
 * @return {[type]}   undefined
 */
var launch = function launch() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;

  if (el.requestFullscreen) {
    return el.requestFullscreen();
  }
  if (el.webkitRequestFullscreen) {
    return el.webkitRequestFullscreen();
  }
  if (el.mozRequestFullScreen) {
    return el.mozRequestFullScreen();
  }
  if (el.msRequestFullscreen) {
    return el.msRequestFullscreen();
  }
};

/**
 * [exit 退出全屏]
 * @return {[type]}   undefined
 */
var exit = function exit() {
  var el = document;
  if (el.exitFullscreen) {
    return el.exitFullscreen();
  }
  if (el.webkitExitFullscreen) {
    return el.webkitExitFullscreen();
  }
  if (el.mozCancelFullScreen) {
    return el.mozCancelFullScreen();
  }
  if (el.msExitFullscreen) {
    return el.msExitFullscreen();
  }
};

/**
 * [onChange 全屏状态改变事件]
 * handleChange：事件回调
 */
var onChange = function onChange(handleChange) {
  addCommonEventListener(document, 'fullscreenchange', handleChange);
  addCommonEventListener(document, 'webkitfullscreenchange', handleChange);
  addCommonEventListener(document, 'mozfullscreenchange', handleChange);
  addCommonEventListener(document, 'MSFullscreenChange', handleChange);
};

/**
 * [addCommonEventListener 兼容事件绑定]
 */
var addCommonEventListener = function addCommonEventListener() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var eventName = arguments[1];
  var handleBack = arguments[2];
  var useCapture = arguments[3];

  if (el.addEventListener) {
    el.addEventListener(eventName, handleBack, useCapture);
  } else if (el.attachEvent) {
    el.attachEvent(eventName, handleBack, useCapture);
  }
};

/**
 * [removeCommonEventListener 兼容事件解绑]
 */
var removeCommonEventListener = function removeCommonEventListener() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var eventName = arguments[1];
  var handleFn = arguments[2];
  var useCapture = arguments[3];

  if (el.removeEventListener) {
    el.removeEventListener(eventName, handleBack, useCapture);
  } else if (el.detachEvent) {
    el.detachEvent(eventName, handleBack, useCapture);
  }
};

exports.default = {
  supported: supported,
  element: element,
  launch: launch,
  exit: exit,
  onChange: onChange,
  addCommonEventListener: addCommonEventListener,
  removeCommonEventListener: removeCommonEventListener
};

/***/ })
/******/ ]);