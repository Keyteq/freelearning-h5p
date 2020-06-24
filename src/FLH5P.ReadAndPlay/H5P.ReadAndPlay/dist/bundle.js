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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scripts/step/step.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js!./scripts/step/step.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".flh5p-step {\\n  height: 280px;\\n  flex: 0 0 320px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  color: #fff;\\n  position: relative; }\\n  .flh5p-step__icon {\\n    z-index: 3;\\n    pointer-events: none; }\\n\\n.flh5p-button--step {\\n  background: transparent;\\n  border: none;\\n  display: block;\\n  font-size: 16px;\\n  line-height: 20px;\\n  font-family: Noto Sans;\\n  font-style: normal;\\n  font-weight: bold;\\n  color: #fff;\\n  position: absolute;\\n  box-sizing: border-box;\\n  padding-top: 140px;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  width: 100%;\\n  z-index: 2; }\\n  .flh5p-button--step:hover {\\n    cursor: pointer;\\n    background: radial-gradient(48.89% 41.51% at 50% 46.96%, #2E4072 0%, #1F2B52 100%); }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scripts/step/step.scss?C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!*********************************************************************************************************************************************!*\
  !*** C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap);\"]);\n// Module\nexports.push([module.i, \".flh5p-app {\\n  background-color: #1F2B52;\\n  min-height: 200px;\\n  font-family: 'Noto Sans', sans-serif;\\n  width: 100%;\\n  height: 620px; }\\n  .flh5p-app--step-open .flh5p-app__header {\\n    display: none; }\\n  .flh5p-app--step-open .flh5p-steps {\\n    display: none; }\\n  .flh5p-app--step-open .flh5p-question-wrapper {\\n    height: 100vh;\\n    display: block;\\n    background: #fff; }\\n  .flh5p-app__header {\\n    padding: 24px;\\n    line-height: 24px;\\n    box-sizing: border-box;\\n    color: #fff;\\n    display: flex;\\n    justify-content: space-between; }\\n    .flh5p-app__header h2, .flh5p-app__header h3 {\\n      color: inherit; }\\n    .flh5p-app__header .flh5p-button {\\n      background: transparent;\\n      border: none;\\n      color: #fff; }\\n      .flh5p-app__header .flh5p-button:hover {\\n        text-decoration: underline;\\n        cursor: pointer; }\\n\\n.flh5p-question-wrapper {\\n  height: auto;\\n  overflow: hidden;\\n  display: none;\\n  padding: 24px; }\\n  .flh5p-question-wrapper__header {\\n    text-align: right; }\\n    .flh5p-question-wrapper__header button {\\n      background: transparent;\\n      border: none;\\n      color: #222;\\n      padding: 16px 0;\\n      display: inline-block; }\\n      .flh5p-question-wrapper__header button:hover {\\n        cursor: pointer; }\\n      .flh5p-question-wrapper__header button:after {\\n        padding-left: 8px;\\n        font-family: 'H5PFontAwesome4';\\n        font-size: 24px;\\n        content: \\\"\\\\f057\\\";\\n        width: 24px;\\n        height: 24px;\\n        vertical-align: middle; }\\n\\n.flh5p-steps {\\n  display: flex;\\n  justify-content: space-between;\\n  flex-wrap: wrap; }\\n\\n.flh5p-question-instance {\\n  height: 100%; }\\n\\n.flh5p-task {\\n  min-height: 100%;\\n  position: relative; }\\n  .flh5p-task iframe {\\n    width: 100% !important;\\n    height: 600px;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.scss?C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/runtime/api.js":
/*!***************************************************************************!*\
  !*** C:/dev/freelearning-h5p/node_modules/css-loader/dist/runtime/api.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///C:/dev/freelearning-h5p/node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!**************************************************************************************************!*\
  !*** C:/dev/freelearning-h5p/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///C:/dev/freelearning-h5p/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ \"./scripts/main.ts\");\n\n\n// Load library\nH5P = H5P || {};\nH5P.ReadAndPlay = _scripts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./scripts/main.ts":
/*!*************************!*\
  !*** ./scripts/main.ts ***!
  \*************************/
/*! exports provided: H5PData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"H5PData\", function() { return H5PData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReadAndPlay; });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./scripts/ui.ts\");\n/* harmony import */ var _step_step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step/step */ \"./scripts/step/step.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar $ = H5P.jQuery;\n\n\nvar H5PData = {\n  id: ''\n};\n\nvar ReadAndPlay = /*#__PURE__*/function (_H5P$EventDispatcher) {\n  _inherits(ReadAndPlay, _H5P$EventDispatcher);\n\n  var _super = _createSuper(ReadAndPlay);\n\n  function ReadAndPlay(config, contentId) {\n    var _this;\n\n    var contentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, ReadAndPlay);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"$wrapper\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"$contantwrapper\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"$stepswrapper\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"$questioninstance\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"config\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"contentInstances\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"activeInstance\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"stepsNav\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"attach\", function ($wrapper) {\n      var self = _assertThisInitialized(_this);\n\n      $wrapper.addClass('flh5p-app');\n      var $questionwrapper = $('<div>', {\n        \"class\": 'flh5p-question-wrapper'\n      });\n      var $taskcontainer = $('<div>', {\n        \"class\": 'flh5p-task'\n      });\n      var $stepswrapper = $('<div>', {\n        \"class\": 'flh5p-steps'\n      });\n      Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"createAppHeader\"])($wrapper, {\n        title: _this.contentData.metadata.title\n      });\n      Object(_ui__WEBPACK_IMPORTED_MODULE_0__[\"createAppNavigation\"])($wrapper, []); // console.log(this.config.steps);\n\n      _this.config.steps.map(function (step, index) {\n        _this.stepsNav.push(new _step_step__WEBPACK_IMPORTED_MODULE_1__[\"default\"]($stepswrapper, step, function () {\n          return _this.loadStep(index);\n        }));\n      });\n\n      var $quitbtn = $('<button>', {\n        \"class\": 'flh5p-button flh5p-button--transparent flh5p-button--close',\n        html: 'Close',\n        click: function click() {\n          self.leaveStep();\n          self.$wrapper.removeClass('flh5p-app--step-open'); // console.log(this.$questioninstance);\n          // this.$questioninstance.children('.flh5p-task').empty();\n\n          _this.$taskcontainer.each(function () {\n            $(this).children().detach();\n          });\n\n          _this.$taskcontainer.removeClass();\n\n          _this.$taskcontainer.addClass('flh5p-task');\n\n          console.log(console.log(_this.$questioninstance));\n          /* self.$questioninstance.each(() => {\n            console.log($(this).children());\n            console.log(self.$questioninstance);\n            // $questioninstance.children().detach();\n          }); */\n        }\n      });\n      var $questionheader = $('<div>', {\n        \"class\": 'flh5p-question-wrapper__header'\n      });\n      var $questioninstance = $('<div>', {\n        \"class\": 'flh5p-question-instance'\n      });\n      $questioninstance.append($taskcontainer);\n      $questionheader.append($quitbtn);\n      $questionwrapper.append($questionheader);\n      $questionwrapper.append($questioninstance);\n      $wrapper.append($stepswrapper);\n      $wrapper.append($questionwrapper);\n      _this.$wrapper = $wrapper;\n      _this.$questionwrapper = $questionwrapper;\n      _this.$taskcontainer = $taskcontainer;\n      _this.$questioninstance = $questioninstance;\n      _this.$stepswrapper = $stepswrapper; // this.loadFirstStep();\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"loadStep\", function (index) {\n      var step = _this.contentInstances[index];\n\n      if (step.trigger) {\n        step.on('xAPI', function (event) {\n          var statement = event.data.statement;\n          console.log(statement);\n\n          if (statement.result && statement.result.completion) {\n            // Task was finished, check what to do next\n            console.log('task finished');\n            console.log(step);\n          }\n        });\n      }\n\n      step.attach(_this.$taskcontainer);\n      _this.activeInstance = step;\n\n      _this.$wrapper.addClass('flh5p-app--step-open');\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"leaveStep\", function () {\n      console.log('Close step and show navigation again');\n      console.log(_this.$questioninstance);\n    });\n\n    _this.config = $.extend(true, {}, {}, config);\n    _this.id = contentId;\n    H5PData.id = contentId;\n    _this.contentData = contentData;\n\n    if (_this.config.steps[0]) {\n      var test = H5P.newRunnable(_this.config.steps[0].tasks[0], _this.id);\n\n      _this.on('resize', function (event) {\n        test.trigger('resize', event);\n      });\n\n      _this.contentInstances.push(test);\n    }\n\n    _this.contentInstances = _this.config.steps.map(function (step) {\n      step.params = step.params || {};\n      var instance = H5P.newRunnable(step.tasks[0], contentId);\n      return instance;\n    }); // console.log(this.contentInstances);\n\n    return _this;\n  }\n\n  return ReadAndPlay;\n}(H5P.EventDispatcher);\n\n\n\n//# sourceURL=webpack:///./scripts/main.ts?");

/***/ }),

/***/ "./scripts/step/step.scss":
/*!********************************!*\
  !*** ./scripts/step/step.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./step.scss */ \"../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scripts/step/step.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./scripts/step/step.scss?");

/***/ }),

/***/ "./scripts/step/step.ts":
/*!******************************!*\
  !*** ./scripts/step/step.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Step; });\n/* harmony import */ var _step_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step.scss */ \"./scripts/step/step.scss\");\n/* harmony import */ var _step_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_step_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./scripts/main.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar $ = H5P.jQuery;\n // extends  H5P.EventDispatcher\n\nvar Step = /*#__PURE__*/function () {\n  function Step($wrapper, data, callback) {\n    _classCallCheck(this, Step);\n\n    _defineProperty(this, \"$wrapper\", void 0);\n\n    _defineProperty(this, \"$element\", void 0);\n\n    _defineProperty(this, \"config\", void 0);\n\n    _defineProperty(this, \"callback\", void 0);\n\n    this.$wrapper = $wrapper;\n    this.config = data;\n    this.callback = callback;\n    console.log(data);\n    this.render();\n  }\n\n  _createClass(Step, [{\n    key: \"render\",\n    value: function render() {\n      var self = this;\n      var $element = $('<div>', {\n        \"class\": 'flh5p-step'\n      });\n      var $stepbtn = $('<button>', {\n        \"class\": 'flh5p-button flh5p-button--step',\n        html: this.config.title,\n        title: 'Load step ' + this.config.title,\n        click: self.callback\n      });\n\n      if (this.config.icon) {\n        var $stepIcon = $('<img>', {\n          \"class\": 'flh5p-step__icon',\n          src: H5P.getPath(this.config.icon.path, _main__WEBPACK_IMPORTED_MODULE_1__[\"H5PData\"].id)\n        });\n        $element.append($stepIcon);\n      }\n\n      $element.append($stepbtn);\n      this.$wrapper.append($element);\n      this.$element = $element;\n    }\n  }]);\n\n  return Step;\n}();\n\n\n\n//# sourceURL=webpack:///./scripts/step/step.ts?");

/***/ }),

/***/ "./scripts/ui.ts":
/*!***********************!*\
  !*** ./scripts/ui.ts ***!
  \***********************/
/*! exports provided: createAppHeader, createAppNavigation, createContentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAppHeader\", function() { return createAppHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAppNavigation\", function() { return createAppNavigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContentWrapper\", function() { return createContentWrapper; });\nvar $ = H5P.jQuery;\nfunction createAppHeader($appwrapper, content) {\n  var $wrapper = $('<div>', {\n    \"class\": 'flh5p-app__header'\n  });\n  var $appTitle = $('<h2>', {\n    html: content.title || 'App Title'\n  });\n  var $exitBtn = $('<button>', {\n    \"class\": 'flh5p-button flh5p-button--transparent',\n    html: 'Exit',\n    title: 'Exit',\n    click: function click() {\n      if (H5P.isFullscreen) {\n        H5P.exitFullScreen();\n      }\n    }\n  }); // console.log(content);\n  // Append all elements to wrapper\n\n  $wrapper.append($appTitle);\n  $wrapper.append($exitBtn);\n  $appwrapper.append($wrapper);\n}\nfunction createAppNavigation($appwrapper, steps) {\n  // console.log(steps);\n  var $wrapper = $('<div>', {\n    \"class\": 'flh5p-navigation'\n  });\n  $appwrapper.append($wrapper);\n}\nfunction createContentWrapper($appwrapper) {}\n\n//# sourceURL=webpack:///./scripts/ui.ts?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./style.scss?");

/***/ })

/******/ });