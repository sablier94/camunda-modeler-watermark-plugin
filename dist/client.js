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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/bpmn-js-extension/ExampleBpmnJsExtension.js":
/*!************************************************************!*\
  !*** ./client/bpmn-js-extension/ExampleBpmnJsExtension.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExampleBpmnJsExtension; });
/* harmony import */ var tiny_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-svg */ "./node_modules/tiny-svg/dist/index.esm.js");
/* harmony import */ var min_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! min-dom */ "./node_modules/min-dom/dist/index.esm.js");
/**
 * A bpmn-js service that provides the actual plug-in feature.
 *
 * Checkout the bpmn-js examples to learn about its capabilities
 * and the extension points it offers:
 *
 * https://github.com/bpmn-io/bpmn-js-examples
 */


 




function ExampleBpmnJsExtension(eventBus, canvas, editorActions) {

  var self = this;

  editorActions.register({
    toggleWatermark: function() {
      if(document.getElementById('draftwatermark') !== null) {
        document.getElementById('draftwatermark').remove();
      } else {
        AddWatermark();
      }
    }
  });

  eventBus.on('import.done', function() {
    AddWatermark();
  });

  function AddWatermark() {

    let g = document.querySelector("[class^='layer-root']");
  
    var txt = Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["create"])('text');
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["attr"])(txt, {
      x: '200',
      y: '0',
      transform: 'rotate(45deg)',
      style: 'transform: rotate(45deg); fill: black; font-size: 150px; opacity: 0.05',
      id: 'draftwatermark',
    })
  
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["innerSVG"])(txt, "DRAFT");
  
    Object(tiny_svg__WEBPACK_IMPORTED_MODULE_0__["append"])(g, txt);
  }

}

ExampleBpmnJsExtension.$inject = [
  'eventBus',
  'canvas',
  'editorActions'
];

/***/ }),

/***/ "./client/bpmn-js-extension/index.js":
/*!*******************************************!*\
  !*** ./client/bpmn-js-extension/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleBpmnJsExtension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleBpmnJsExtension */ "./client/bpmn-js-extension/ExampleBpmnJsExtension.js");


/**
 * A bpmn-js module, defining all extension services and their dependencies.
 *
 * --------
 *
 * WARNING: This is an example only.
 *
 * Make sure you choose a unique name under which your extension service
 * is exposed (i.e. change PLEASE_CHANGE_ME to something unique).
 *
 * --------
 *
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  __init__: [ 'Draft_Watermark' ],
  Draft_Watermark: ['type', _ExampleBpmnJsExtension__WEBPACK_IMPORTED_MODULE_0__["default"] ]
});


/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! camunda-modeler-plugin-helpers */ "./node_modules/camunda-modeler-plugin-helpers/index.js");
/* harmony import */ var _bpmn_js_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bpmn-js-extension */ "./client/bpmn-js-extension/index.js");
/** 
 * NOTE: This is specifically a registration of a **bpmn-js** extension. If you would like to create another type of plugin 
 * (say a client extension), the structure of the plugin and the function to register it will be slightly different.
 * 
 * Please refer to:
 * Examples plugins - https://github.com/camunda/camunda-modeler-plugins
 * Plugin documentation - https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/
 */





Object(camunda_modeler_plugin_helpers__WEBPACK_IMPORTED_MODULE_0__["registerBpmnJSPlugin"])(_bpmn_js_extension__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/camunda-modeler-plugin-helpers/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/camunda-modeler-plugin-helpers/index.js ***!
  \**************************************************************/
/*! exports provided: registerClientPlugin, registerClientExtension, registerBpmnJSPlugin, registerPlatformBpmnJSPlugin, registerCloudBpmnJSPlugin, registerBpmnJSModdleExtension, registerPlatformBpmnJSModdleExtension, registerCloudBpmnJSModdleExtension, registerDmnJSModdleExtension, registerDmnJSPlugin, getModelerDirectory, getPluginsDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientPlugin", function() { return registerClientPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClientExtension", function() { return registerClientExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSPlugin", function() { return registerBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlatformBpmnJSPlugin", function() { return registerPlatformBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCloudBpmnJSPlugin", function() { return registerCloudBpmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBpmnJSModdleExtension", function() { return registerBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPlatformBpmnJSModdleExtension", function() { return registerPlatformBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCloudBpmnJSModdleExtension", function() { return registerCloudBpmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDmnJSModdleExtension", function() { return registerDmnJSModdleExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerDmnJSPlugin", function() { return registerDmnJSPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelerDirectory", function() { return getModelerDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPluginsDirectory", function() { return getPluginsDirectory; });
/**
 * Validate and register a client plugin.
 *
 * @param {Object} plugin
 * @param {String} type
 */
function registerClientPlugin(plugin, type) {
  var plugins = window.plugins || [];
  window.plugins = plugins;

  if (!plugin) {
    throw new Error('plugin not specified');
  }

  if (!type) {
    throw new Error('type not specified');
  }

  plugins.push({
    plugin: plugin,
    type: type
  });
}

/**
 * Validate and register a client plugin.
 *
 * @param {import('react').ComponentType} extension
 *
 * @example
 *
 * import MyExtensionComponent from './MyExtensionComponent';
 *
 * registerClientExtension(MyExtensionComponent);
 */
function registerClientExtension(component) {
  registerClientPlugin(component, 'client');
}

/**
 * Validate and register a bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerBpmnJSPlugin(BpmnJSModule);
 */
function registerBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.modeler.additionalModules');
}

/**
 * Validate and register a platform specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerPlatformBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerPlatformBpmnJSPlugin(BpmnJSModule);
 */
function registerPlatformBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.platform.modeler.additionalModules');
}

/**
 * Validate and register a cloud specific bpmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerCloudBpmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const BpmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerCloudBpmnJSPlugin(BpmnJSModule);
 */
function registerCloudBpmnJSPlugin(module) {
  registerClientPlugin(module, 'bpmn.cloud.modeler.additionalModules');
}

/**
 * Validate and register a bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerBpmnJSModdleExtension(moddleDescriptor);
 */
function registerBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.modeler.moddleExtension');
}

/**
 * Validate and register a platform specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerPlatformBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerPlatformBpmnJSModdleExtension(moddleDescriptor);
 */
function registerPlatformBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.platform.modeler.moddleExtension');
}

/**
 * Validate and register a cloud specific bpmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerCloudBpmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerCloudBpmnJSModdleExtension(moddleDescriptor);
 */
function registerCloudBpmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'bpmn.cloud.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-moddle extension plugin.
 *
 * @param {Object} descriptor
 *
 * @example
 * import {
 *   registerDmnJSModdleExtension
 * } from 'camunda-modeler-plugin-helpers';
 *
 * var moddleDescriptor = {
 *   name: 'my descriptor',
 *   uri: 'http://example.my.company.localhost/schema/my-descriptor/1.0',
 *   prefix: 'mydesc',
 *
 *   ...
 * };
 *
 * registerDmnJSModdleExtension(moddleDescriptor);
 */
function registerDmnJSModdleExtension(descriptor) {
  registerClientPlugin(descriptor, 'dmn.modeler.moddleExtension');
}

/**
 * Validate and register a dmn-js plugin.
 *
 * @param {Object} module
 *
 * @example
 *
 * import {
 *   registerDmnJSPlugin
 * } from 'camunda-modeler-plugin-helpers';
 *
 * const DmnJSModule = {
 *   __init__: [ 'myService' ],
 *   myService: [ 'type', ... ]
 * };
 *
 * registerDmnJSPlugin(DmnJSModule, [ 'drd', 'literalExpression' ]);
 * registerDmnJSPlugin(DmnJSModule, 'drd')
 */
function registerDmnJSPlugin(module, components) {

  if (!Array.isArray(components)) {
    components = [ components ]
  }

  components.forEach(c => registerClientPlugin(module, `dmn.modeler.${c}.additionalModules`)); 
}

/**
 * Return the modeler directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getModelerDirectory() {
  return window.getModelerDirectory();
}

/**
 * Return the modeler plugin directory, as a string.
 *
 * @deprecated Will be removed in future Camunda Modeler versions without replacement.
 *
 * @return {String}
 */
function getPluginsDirectory() {
  return window.getPluginsDirectory();
}

/***/ }),

/***/ "./node_modules/min-dom/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/min-dom/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: assignStyle, attr, classes, clear, closest, delegate, domify, event, matches, query, queryAll, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignStyle", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domify", function() { return domify$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
function _mergeNamespaces(n, m) {
  m.forEach(function (e) {
    e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
      if (k !== 'default' && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  });
  return Object.freeze(n);
}

/**
 * Flatten array, one level deep.
 *
 * @param {Array<?>} arr
 *
 * @return {Array<?>}
 */

const nativeToString = Object.prototype.toString;
const nativeHasOwnProperty = Object.prototype.hasOwnProperty;

function isUndefined(obj) {
  return obj === undefined;
}

function isArray(obj) {
  return nativeToString.call(obj) === '[object Array]';
}

/**
 * Return true, if target owns a property with the given key.
 *
 * @param {Object} target
 * @param {String} key
 *
 * @return {Boolean}
 */
function has(target, key) {
  return nativeHasOwnProperty.call(target, key);
}


/**
 * Iterate over collection; returning something
 * (non-undefined) will stop iteration.
 *
 * @param  {Array|Object} collection
 * @param  {Function} iterator
 *
 * @return {Object} return result that stopped the iteration
 */
function forEach(collection, iterator) {

  let val,
      result;

  if (isUndefined(collection)) {
    return;
  }

  const convertKey = isArray(collection) ? toNum : identity;

  for (let key in collection) {

    if (has(collection, key)) {
      val = collection[key];

      result = iterator(val, convertKey(key));

      if (result === false) {
        return val;
      }
    }
  }
}


function identity(arg) {
  return arg;
}

function toNum(arg) {
  return Number(arg);
}

/**
 * Assigns style attributes in a style-src compliant way.
 *
 * @param {Element} element
 * @param {...Object} styleSources
 *
 * @return {Element} the element
 */
function assign(element, ...styleSources) {
  const target = element.style;

  forEach(styleSources, function(style) {
    if (!style) {
      return;
    }

    forEach(style, function(value, key) {
      target[key] = value;
    });
  });

  return element;
}

/**
 * Set attribute `name` to `val`, or get attr `name`.
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
function attr(el, name, val) {

  // get
  if (arguments.length == 2) {
    return el.getAttribute(name);
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name);
  }

  // set
  el.setAttribute(name, val);

  return el;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

function classes(el) {
  return new ClassList(el);
}

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
 * Remove all classes matching `re`.
 *
 * @param {RegExp} re
 * @return {ClassList}
 * @api private
 */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name) {
  return this.list.contains(name);
};

/**
 * Remove all children from the given element.
 */
function clear(el) {

  var c;

  while (el.childNodes.length) {
    c = el.childNodes[0];
    el.removeChild(c);
  }

  return el;
}

/**
 * @param { HTMLElement } element
 * @param { String } selector
 *
 * @return { boolean }
 */
function matches(element, selector) {
  return element && typeof element.matches === 'function' && element.matches(selector);
}

/**
 * Closest
 *
 * @param {Element} el
 * @param {String} selector
 * @param {Boolean} checkYourSelf (optional)
 */
function closest(element, selector, checkYourSelf) {
  var currentElem = checkYourSelf ? element : element.parentNode;

  while (currentElem && currentElem.nodeType !== document.DOCUMENT_NODE &&
      currentElem.nodeType !== document.DOCUMENT_FRAGMENT_NODE) {

    if (matches(currentElem, selector)) {
      return currentElem;
    }

    currentElem = currentElem.parentNode;
  }

  return matches(currentElem, selector) ? currentElem : null;
}

var componentEvent = {};

var bind$1 = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind$1 = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind$1 !== 'addEventListener' ? 'on' : '';

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var bind_1 = componentEvent.bind = function(el, type, fn, capture){
  el[bind$1](prefix + type, fn, capture || false);
  return fn;
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

var unbind_1 = componentEvent.unbind = function(el, type, fn, capture){
  el[unbind$1](prefix + type, fn, capture || false);
  return fn;
};

var event = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  bind: bind_1,
  unbind: unbind_1,
  'default': componentEvent
}, [componentEvent]);

/**
 * Module dependencies.
 */

/**
 * Delegate event `type` to `selector`
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 *
 * @param {Element} el
 * @param {String} selector
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @return {Function}
 * @api public
 */

// Some events don't bubble, so we want to bind to the capture phase instead
// when delegating.
var forceCaptureEvents = [ 'focus', 'blur' ];

function bind(el, selector, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.bind(el, type, function(e) {
    var target = e.target || e.srcElement;
    e.delegateTarget = closest(target, selector, true);
    if (e.delegateTarget) {
      fn.call(el, e);
    }
  }, capture);
}

/**
 * Unbind event `type`'s callback `fn`.
 *
 * @param {Element} el
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */
function unbind(el, type, fn, capture) {
  if (forceCaptureEvents.indexOf(type) !== -1) {
    capture = true;
  }

  return event.unbind(el, type, fn, capture);
}

var delegate = {
  bind,
  unbind
};

/**
 * Expose `parse`.
 */

var domify = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = Object.prototype.hasOwnProperty.call(map, tag) ? map[tag] : map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

var domify$1 = domify;

function query(selector, el) {
  el = el || document;

  return el.querySelector(selector);
}

function all(selector, el) {
  el = el || document;

  return el.querySelectorAll(selector);
}

function remove(el) {
  el.parentNode && el.parentNode.removeChild(el);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/tiny-svg/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tiny-svg/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: append, appendTo, attr, classes, clear, clone, create, createMatrix, createPoint, createTransform, innerSVG, off, on, prepend, prependTo, remove, replace, select, selectAll, transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatrix", function() { return createMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPoint", function() { return createPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransform", function() { return createTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innerSVG", function() { return innerSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
function ensureImported(element, target) {

  if (element.ownerDocument !== target.ownerDocument) {
    try {

      // may fail on webkit
      return target.ownerDocument.importNode(element, true);
    } catch (e) {

      // ignore
    }
  }

  return element;
}

/**
 * appendTo utility
 */

/**
 * Append a node to a target element and return the appended node.
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the appended node
 */
function appendTo(element, target) {
  return target.appendChild(ensureImported(element, target));
}

/**
 * append utility
 */

/**
 * Append a node to an element
 *
 * @param  {SVGElement} element
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the element
 */
function append(target, node) {
  appendTo(node, target);
  return target;
}

/**
 * attribute accessor utility
 */

var LENGTH_ATTR = 2;

var CSS_PROPERTIES = {
  'alignment-baseline': 1,
  'baseline-shift': 1,
  'clip': 1,
  'clip-path': 1,
  'clip-rule': 1,
  'color': 1,
  'color-interpolation': 1,
  'color-interpolation-filters': 1,
  'color-profile': 1,
  'color-rendering': 1,
  'cursor': 1,
  'direction': 1,
  'display': 1,
  'dominant-baseline': 1,
  'enable-background': 1,
  'fill': 1,
  'fill-opacity': 1,
  'fill-rule': 1,
  'filter': 1,
  'flood-color': 1,
  'flood-opacity': 1,
  'font': 1,
  'font-family': 1,
  'font-size': LENGTH_ATTR,
  'font-size-adjust': 1,
  'font-stretch': 1,
  'font-style': 1,
  'font-variant': 1,
  'font-weight': 1,
  'glyph-orientation-horizontal': 1,
  'glyph-orientation-vertical': 1,
  'image-rendering': 1,
  'kerning': 1,
  'letter-spacing': 1,
  'lighting-color': 1,
  'marker': 1,
  'marker-end': 1,
  'marker-mid': 1,
  'marker-start': 1,
  'mask': 1,
  'opacity': 1,
  'overflow': 1,
  'pointer-events': 1,
  'shape-rendering': 1,
  'stop-color': 1,
  'stop-opacity': 1,
  'stroke': 1,
  'stroke-dasharray': 1,
  'stroke-dashoffset': 1,
  'stroke-linecap': 1,
  'stroke-linejoin': 1,
  'stroke-miterlimit': 1,
  'stroke-opacity': 1,
  'stroke-width': LENGTH_ATTR,
  'text-anchor': 1,
  'text-decoration': 1,
  'text-rendering': 1,
  'unicode-bidi': 1,
  'visibility': 1,
  'word-spacing': 1,
  'writing-mode': 1
};


function getAttribute(node, name) {
  if (CSS_PROPERTIES[name]) {
    return node.style[name];
  } else {
    return node.getAttributeNS(null, name);
  }
}

function setAttribute(node, name, value) {
  var hyphenated = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

  var type = CSS_PROPERTIES[hyphenated];

  if (type) {

    // append pixel unit, unless present
    if (type === LENGTH_ATTR && typeof value === 'number') {
      value = String(value) + 'px';
    }

    node.style[hyphenated] = value;
  } else {
    node.setAttributeNS(null, name, value);
  }
}

function setAttributes(node, attrs) {

  var names = Object.keys(attrs), i, name;

  for (i = 0, name; (name = names[i]); i++) {
    setAttribute(node, name, attrs[name]);
  }
}

/**
 * Gets or sets raw attributes on a node.
 *
 * @param  {SVGElement} node
 * @param  {Object} [attrs]
 * @param  {String} [name]
 * @param  {String} [value]
 *
 * @return {String}
 */
function attr(node, name, value) {
  if (typeof name === 'string') {
    if (value !== undefined) {
      setAttribute(node, name, value);
    } else {
      return getAttribute(node, name);
    }
  } else {
    setAttributes(node, name);
  }

  return node;
}

/**
 * Taken from https://github.com/component/classes
 *
 * Without the component bits.
 */

/**
 * toString reference.
 */

const toString = Object.prototype.toString;

/**
  * Wrap `el` in a `ClassList`.
  *
  * @param {Element} el
  * @return {ClassList}
  * @api public
  */

function classes(el) {
  return new ClassList(el);
}

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
  * Add class `name` if not already present.
  *
  * @param {String} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.add = function(name) {
  this.list.add(name);
  return this;
};

/**
  * Remove class `name` when present, or
  * pass a regular expression to remove
  * any which match.
  *
  * @param {String|RegExp} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.remove = function(name) {
  if ('[object RegExp]' == toString.call(name)) {
    return this.removeMatching(name);
  }

  this.list.remove(name);
  return this;
};

/**
  * Remove all classes matching `re`.
  *
  * @param {RegExp} re
  * @return {ClassList}
  * @api private
  */

ClassList.prototype.removeMatching = function(re) {
  const arr = this.array();
  for (let i = 0; i < arr.length; i++) {
    if (re.test(arr[i])) {
      this.remove(arr[i]);
    }
  }
  return this;
};

/**
  * Toggle class `name`, can force state via `force`.
  *
  * For browsers that support classList, but do not support `force` yet,
  * the mistake will be detected and corrected.
  *
  * @param {String} name
  * @param {Boolean} force
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.toggle = function(name, force) {
  if ('undefined' !== typeof force) {
    if (force !== this.list.toggle(name, force)) {
      this.list.toggle(name); // toggle again to correct
    }
  } else {
    this.list.toggle(name);
  }
  return this;
};

/**
  * Return an array of classes.
  *
  * @return {Array}
  * @api public
  */

ClassList.prototype.array = function() {
  return Array.from(this.list);
};

/**
  * Check if class `name` is present.
  *
  * @param {String} name
  * @return {ClassList}
  * @api public
  */

ClassList.prototype.has =
 ClassList.prototype.contains = function(name) {
   return this.list.contains(name);
 };

function remove(element) {
  var parent = element.parentNode;

  if (parent) {
    parent.removeChild(element);
  }

  return element;
}

/**
 * Clear utility
 */

/**
 * Removes all children from the given element
 *
 * @param  {DOMElement} element
 * @return {DOMElement} the element (for chaining)
 */
function clear(element) {
  var child;

  while ((child = element.firstChild)) {
    remove(child);
  }

  return element;
}

function clone(element) {
  return element.cloneNode(true);
}

var ns = {
  svg: 'http://www.w3.org/2000/svg'
};

/**
 * DOM parsing utility
 */

var SVG_START = '<svg xmlns="' + ns.svg + '"';

function parse(svg) {

  var unwrap = false;

  // ensure we import a valid svg document
  if (svg.substring(0, 4) === '<svg') {
    if (svg.indexOf(ns.svg) === -1) {
      svg = SVG_START + svg.substring(4);
    }
  } else {

    // namespace svg
    svg = SVG_START + '>' + svg + '</svg>';
    unwrap = true;
  }

  var parsed = parseDocument(svg);

  if (!unwrap) {
    return parsed;
  }

  var fragment = document.createDocumentFragment();

  var parent = parsed.firstChild;

  while (parent.firstChild) {
    fragment.appendChild(parent.firstChild);
  }

  return fragment;
}

function parseDocument(svg) {

  var parser;

  // parse
  parser = new DOMParser();
  parser.async = false;

  return parser.parseFromString(svg, 'text/xml');
}

/**
 * Create utility for SVG elements
 */


/**
 * Create a specific type from name or SVG markup.
 *
 * @param {String} name the name or markup of the element
 * @param {Object} [attrs] attributes to set on the element
 *
 * @returns {SVGElement}
 */
function create(name, attrs) {
  var element;

  if (name.charAt(0) === '<') {
    element = parse(name).firstChild;
    element = document.importNode(element, true);
  } else {
    element = document.createElementNS(ns.svg, name);
  }

  if (attrs) {
    attr(element, attrs);
  }

  return element;
}

/**
 * Events handling utility
 */

function on(node, event, listener, useCapture) {
  node.addEventListener(event, listener, useCapture);
}

function off(node, event, listener, useCapture) {
  node.removeEventListener(event, listener, useCapture);
}

/**
 * Geometry helpers
 */

// fake node used to instantiate svg geometry elements
var node = null;

function getNode() {
  if (node === null) {
    node = create('svg');
  }

  return node;
}

function extend(object, props) {
  var i, k, keys = Object.keys(props);

  for (i = 0; (k = keys[i]); i++) {
    object[k] = props[k];
  }

  return object;
}


function createPoint(x, y) {
  var point = getNode().createSVGPoint();

  switch (arguments.length) {
  case 0:
    return point;
  case 2:
    x = {
      x: x,
      y: y
    };
    break;
  }

  return extend(point, x);
}

/**
 * Create matrix via args.
 *
 * @example
 *
 * createMatrix({ a: 1, b: 1 });
 * createMatrix();
 * createMatrix(1, 2, 0, 0, 30, 20);
 *
 * @return {SVGMatrix}
 */
function createMatrix(a, b, c, d, e, f) {
  var matrix = getNode().createSVGMatrix();

  switch (arguments.length) {
  case 0:
    return matrix;
  case 1:
    return extend(matrix, a);
  case 6:
    return extend(matrix, {
      a: a,
      b: b,
      c: c,
      d: d,
      e: e,
      f: f
    });
  }
}

function createTransform(matrix) {
  if (matrix) {
    return getNode().createSVGTransformFromMatrix(matrix);
  } else {
    return getNode().createSVGTransform();
  }
}

/**
 * Serialization util
 */

var TEXT_ENTITIES = /([&<>]{1})/g;
var ATTR_ENTITIES = /([\n\r"]{1})/g;

var ENTITY_REPLACEMENT = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '\''
};

function escape(str, pattern) {

  function replaceFn(match, entity) {
    return ENTITY_REPLACEMENT[entity] || entity;
  }

  return str.replace(pattern, replaceFn);
}

function serialize(node, output) {

  var i, len, attrMap, attrNode, childNodes;

  switch (node.nodeType) {

  // TEXT
  case 3:

    // replace special XML characters
    output.push(escape(node.textContent, TEXT_ENTITIES));
    break;

  // ELEMENT
  case 1:
    output.push('<', node.tagName);

    if (node.hasAttributes()) {
      attrMap = node.attributes;
      for (i = 0, len = attrMap.length; i < len; ++i) {
        attrNode = attrMap.item(i);
        output.push(' ', attrNode.name, '="', escape(attrNode.value, ATTR_ENTITIES), '"');
      }
    }

    if (node.hasChildNodes()) {
      output.push('>');
      childNodes = node.childNodes;
      for (i = 0, len = childNodes.length; i < len; ++i) {
        serialize(childNodes.item(i), output);
      }
      output.push('</', node.tagName, '>');
    } else {
      output.push('/>');
    }
    break;

  // COMMENT
  case 8:
    output.push('<!--', escape(node.nodeValue, TEXT_ENTITIES), '-->');
    break;

  // CDATA
  case 4:
    output.push('<![CDATA[', node.nodeValue, ']]>');
    break;

  default:
    throw new Error('unable to handle node ' + node.nodeType);
  }

  return output;
}

/**
 * innerHTML like functionality for SVG elements.
 * based on innerSVG (https://code.google.com/p/innersvg)
 */


function set(element, svg) {

  var parsed = parse(svg);

  // clear element contents
  clear(element);

  if (!svg) {
    return;
  }

  if (!isFragment(parsed)) {

    // extract <svg> from parsed document
    parsed = parsed.documentElement;
  }

  var nodes = slice(parsed.childNodes);

  // import + append each node
  for (var i = 0; i < nodes.length; i++) {
    appendTo(nodes[i], element);
  }

}

function get(element) {
  var child = element.firstChild,
      output = [];

  while (child) {
    serialize(child, output);
    child = child.nextSibling;
  }

  return output.join('');
}

function isFragment(node) {
  return node.nodeName === '#document-fragment';
}

function innerSVG(element, svg) {

  if (svg !== undefined) {

    try {
      set(element, svg);
    } catch (e) {
      throw new Error('error parsing SVG: ' + e.message);
    }

    return element;
  } else {
    return get(element);
  }
}


function slice(arr) {
  return Array.prototype.slice.call(arr);
}

/**
 * Selection utilities
 */

function select(node, selector) {
  return node.querySelector(selector);
}

function selectAll(node, selector) {
  var nodes = node.querySelectorAll(selector);

  return [].map.call(nodes, function(element) {
    return element;
  });
}

/**
 * prependTo utility
 */

/**
 * Prepend a node to a target element and return the prepended node.
 *
 * @param  {SVGElement} node
 * @param  {SVGElement} target
 *
 * @return {SVGElement} the prepended node
 */
function prependTo(node, target) {
  return target.insertBefore(ensureImported(node, target), target.firstChild || null);
}

/**
 * prepend utility
 */

/**
 * Prepend a node to a target element
 *
 * @param  {SVGElement} target
 * @param  {SVGElement} node
 *
 * @return {SVGElement} the target element
 */
function prepend(target, node) {
  prependTo(node, target);
  return target;
}

/**
 * Replace utility
 */

function replace(element, replacement) {
  element.parentNode.replaceChild(ensureImported(replacement, element), element);
  return replacement;
}

/**
 * transform accessor utility
 */

function wrapMatrix(transformList, transform) {
  if (transform instanceof SVGMatrix) {
    return transformList.createSVGTransformFromMatrix(transform);
  }

  return transform;
}


function setTransforms(transformList, transforms) {
  var i, t;

  transformList.clear();

  for (i = 0; (t = transforms[i]); i++) {
    transformList.appendItem(wrapMatrix(transformList, t));
  }
}

/**
 * Get or set the transforms on the given node.
 *
 * @param {SVGElement} node
 * @param  {SVGTransform|SVGMatrix|Array<SVGTransform|SVGMatrix>} [transforms]
 *
 * @return {SVGTransform} the consolidated transform
 */
function transform(node, transforms) {
  var transformList = node.transform.baseVal;

  if (transforms) {

    if (!Array.isArray(transforms)) {
      transforms = [ transforms ];
    }

    setTransforms(transformList, transforms);
  }

  return transformList.consolidate();
}




/***/ })

/******/ });
//# sourceMappingURL=client.js.map