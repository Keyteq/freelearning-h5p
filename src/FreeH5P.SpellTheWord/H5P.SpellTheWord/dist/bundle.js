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

/***/ "../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scripts/letter/letter.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js!./scripts/letter/letter.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".flh5p-letter {\\n  width: 48px;\\n  height: 48px;\\n  flex: 0 0 48px;\\n  margin-right: 8px;\\n  border-radius: 8px;\\n  background: #FFFFFF;\\n  box-shadow: 0px 4px 8px rgba(24, 27, 94, 0.07);\\n  border: 1px solid #e7e7e7;\\n  font-size: 18px;\\n  line-height: 48px;\\n  font-weight: 600; }\\n  .flh5p-letter--drag {\\n    font-size: 20px;\\n    font-weight: 600;\\n    text-transform: uppercase;\\n    background: #FF8E6A;\\n    color: #040214;\\n    text-align: center; }\\n    .flh5p-letter--drag:active {\\n      cursor: move; }\\n  .flh5p-letter--blank {\\n    background-color: transparent;\\n    border-color: transparent;\\n    box-shadow: none; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./scripts/letter/letter.scss?C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!*********************************************************************************************************************************************!*\
  !*** C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../../node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".flh5p-word {\\n  display: inline-flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n  overflow: hidden;\\n  flex: 1 0 100%; }\\n  .flh5p-word__image {\\n    flex: 1 0 100%;\\n    border-radius: 10px;\\n    overflow: hidden; }\\n    .flh5p-word__image img {\\n      max-width: 100%;\\n      height: auto;\\n      max-height: 320px;\\n      display: block;\\n      position: relative;\\n      margin: 0 auto 16px;\\n      border-radius: 10px; }\\n  .flh5p-word__textclue {\\n    flex: 1 0 100%;\\n    font-size: 20px;\\n    text-align: center;\\n    margin-bottom: 16px;\\n    font-family: \\\"Noto Sans\\\", sans-serif;\\n    font-weight: 400;\\n    font-size: 16px;\\n    line-height: 164.5%; }\\n\\n.flh5p-app {\\n  padding: 16px;\\n  font-family: \\\"Noto Sans\\\", sans-serif;\\n  color: #040214; }\\n\\n.flh5p-letters__dropzone, .flh5p-letters__dragzone {\\n  display: inline-flex;\\n  flex-wrap: nowrap;\\n  width: auto;\\n  margin: 8px auto;\\n  flex: 1 0 100%;\\n  justify-content: center; }\\n\\n.flh5p-letters__dragzone {\\n  margin-top: 32px; }\\n\\n.flh5p-words {\\n  display: flex;\\n  overflow-x: auto;\\n  flex-wrap: nowrap;\\n  padding: 24px 0; }\\n\\n.flh5p-footer {\\n  padding: 24px 0;\\n  border-top: 1px solid #DADCE7; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./style.scss?C:/dev/freelearning-h5p/node_modules/css-loader/dist/cjs.js!C:/dev/freelearning-h5p/node_modules/sass-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main */ \"./scripts/main.ts\");\n\n\n// Load library\nH5P = H5P || {};\nH5P.SpellTheWord = _scripts_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./scripts/helpers.ts":
/*!****************************!*\
  !*** ./scripts/helpers.ts ***!
  \****************************/
/*! exports provided: shuffleArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffleArray\", function() { return shuffleArray; });\nfunction shuffleArray(array) {\n  var currentIndex = array.length,\n      temporaryValue,\n      randomIndex; // While there remain elements to shuffle...\n\n  while (0 !== currentIndex) {\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1; // And swap it with the current element.\n\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n}\n\n//# sourceURL=webpack:///./scripts/helpers.ts?");

/***/ }),

/***/ "./scripts/letter/letter.scss":
/*!************************************!*\
  !*** ./scripts/letter/letter.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./letter.scss */ \"../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./scripts/letter/letter.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./scripts/letter/letter.scss?");

/***/ }),

/***/ "./scripts/letter/letter.ts":
/*!**********************************!*\
  !*** ./scripts/letter/letter.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _letter_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./letter.scss */ \"./scripts/letter/letter.scss\");\n/* harmony import */ var _letter_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_letter_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar $ = H5P.jQuery;\n\nvar Letter = /*#__PURE__*/function () {\n  function Letter(letter, $container, options) {\n    _classCallCheck(this, Letter);\n\n    _defineProperty(this, \"letter\", void 0);\n\n    _defineProperty(this, \"randomPosition\", void 0);\n\n    _defineProperty(this, \"element\", void 0);\n\n    _defineProperty(this, \"classes\", ['flh5p-letter']);\n\n    this.letter = letter;\n\n    if (options && options.droppable) {\n      letter && letter !== ' ' ? this.classes.push('flh5p-letter--drop') : this.classes.push('flh5p-letter--blank'); //\n    } else if (options && options.draggable) {\n      this.classes.push('flh5p-letter--drag');\n    } else if (!letter) {\n      this.classes.push('flh5p-letter--blank');\n    }\n\n    this.element = $('<div>', {\n      \"class\": this.classes.join(' ')\n    });\n\n    if (options && options.draggable) {\n      this.element.html(letter);\n      this.element.draggable({\n        revert: 'invalid'\n      });\n    }\n\n    if (options && options.droppable && letter !== ' ') {\n      this.element.droppable({\n        accept: '.flh5p-letter--drag',\n        drop: function drop(event, ui) {\n          // console.log(event);\n          // console.log(ui);\n          var target = event.target;\n          $(ui.draggable[0]).css({\n            left: 0,\n            top: 0\n          });\n          $(target).append(ui.draggable[0]);\n        }\n      });\n    }\n\n    $container.append(this.element);\n  }\n\n  _createClass(Letter, [{\n    key: \"dropped\",\n    value: function dropped() {\n      console.log(this);\n      console.log('dropped');\n    }\n  }]);\n\n  return Letter;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Letter);\n\n//# sourceURL=webpack:///./scripts/letter/letter.ts?");

/***/ }),

/***/ "./scripts/main.ts":
/*!*************************!*\
  !*** ./scripts/main.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SpellTheWord; });\n/* harmony import */ var _letter_letter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./letter/letter */ \"./scripts/letter/letter.ts\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./scripts/helpers.ts\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n// declare var H5PIntegration: any;\nvar $ = H5P.jQuery;\n\nvar SpellTheWord = /*#__PURE__*/function (_H5P$EventDispatcher) {\n  _inherits(SpellTheWord, _H5P$EventDispatcher);\n\n  var _super = _createSuper(SpellTheWord);\n\n  // For H5P integration\n  // @constructor extends (H5P.EventDispatcher as { new(): any; })\n  function SpellTheWord(config, contentId) {\n    var _this;\n\n    var contentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n    _classCallCheck(this, SpellTheWord);\n\n    _this = _super.call(this); // super();\n\n    _defineProperty(_assertThisInitialized(_this), \"letters\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"randomised\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"correctSpelling\", []);\n\n    _defineProperty(_assertThisInitialized(_this), \"id\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"config\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"isCompleted\", false);\n\n    _defineProperty(_assertThisInitialized(_this), \"scoreBar\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"$wordsWrapper\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"attach\", function ($wrapper) {\n      // Create basic markup\n      $wrapper.addClass('flh5p-app'); // Letters wrapper\n\n      console.log(_this.config.words);\n      _this.$wordsWrapper = $('<div>', {\n        'class': 'flh5p-words'\n      });\n      _this.$headerElement = $('<div>', {\n        'class': 'flh5p-header'\n      });\n      _this.$bottomBar = $('<div>', {\n        'class': 'flh5p-footer'\n      });\n\n      _this.setupWords(_this.config.words);\n\n      _this.createBottomBar(); // Add the header for the game\n\n\n      $wrapper.append(_this.$headerElement); // Add wrapper for words\n\n      $wrapper.append(_this.$wordsWrapper); // Add bottom bar\n\n      $wrapper.append(_this.$bottomBar);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"createBottomBar\", function () {\n      console.log('Yo');\n\n      var self = _assertThisInitialized(_this);\n\n      var $scorebar = $('<div>', {\n        'class': 'flh5p-scorebar'\n      });\n      var $scorebtn = H5P.JoubelUI.createButton({\n        title: 'Get score',\n        click: function click() {\n          self.getScore();\n          self.isCompleted = true;\n        }\n      });\n      $scorebtn.html('Score');\n      var $resetbtn = H5P.JoubelUI.createButton({\n        title: 'Reset game',\n        click: function click() {\n          self.resetTask();\n        }\n      });\n      $resetbtn.html('Reset');\n      _this.scoreBar = H5P.JoubelUI.createScoreBar(_this.config.words.length, 'Letters right', 'helpText', 'scoreExplanationButtonLabel');\n\n      _this.scoreBar.appendTo($scorebar);\n\n      _this.$bottomBar.append($scorebar);\n\n      _this.$bottomBar.append($scorebtn);\n\n      _this.$bottomBar.append($resetbtn);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"setupWords\", function (words) {\n      // Container for all the words\n      var $wrapper = _this.$wordsWrapper;\n      words.map(function (word) {\n        _this.generateWord($wrapper, word);\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"generateWord\", function ($wrapper, word) {\n      var $wordcontainer = $('<div>', {\n        'class': 'flh5p-word'\n      });\n      var $dropcontainer = $('<div>', {\n        'class': 'flh5p-letters__dropzone'\n      }); // Add image if available\n\n      if (word.image && word.image.path) {\n        var $imagewrapper = $('<div>', {\n          'class': 'flh5p-word__image'\n        });\n        $imagewrapper.append($('<img>', {\n          'class': '',\n          'src': H5P.getPath(word.image.path, _this.id)\n        }));\n        $wordcontainer.append($imagewrapper);\n      } // Add text clue if available\n\n\n      if (word.text) {\n        $wordcontainer.append('<p class=\"flh5p-word__textclue\">' + word.text + '</p>');\n      } // Split word into individual letters\n\n\n      word.word.split('').map(function (letter) {\n        new _letter_letter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](letter, $dropcontainer, {\n          droppable: true\n        });\n      }); // Randomise order\n\n      var randomised = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"shuffleArray\"])(_toConsumableArray(word.word.split('')));\n      var $draggablecontainer = $('<div>', {\n        'class': 'flh5p-letters__dragzone'\n      });\n      randomised.map(function (letter) {\n        if (letter !== ' ') {\n          new _letter_letter__WEBPACK_IMPORTED_MODULE_0__[\"default\"](letter, $draggablecontainer, {\n            draggable: true\n          });\n        }\n      });\n      $wordcontainer.append($dropcontainer);\n      $wordcontainer.append($draggablecontainer);\n      $wrapper.append($wordcontainer);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"resetAll\", function () {\n      _this.scoreBar.setScore(0);\n\n      _this.$lettersWrapper.html('');\n\n      console.log(_this.$lettersWrapper);\n\n      var letters = _this.config.word.split('');\n\n      _this.generateBlocks(_this.$lettersWrapper, letters, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"shuffleArray\"])(letters));\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getAnswerGiven\", function () {\n      return _this.isCompleted;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getScore\", function () {\n      var dropped = $('.flh5p-letter--drop'); // console.log(dropped);\n\n      var totalScore = 0;\n      var maxScore = _this.correctSpelling.length;\n      $.each(dropped, function (i, val) {\n        var indexLetter = $(val).text();\n\n        if (indexLetter) {\n          // console.log(indexLetter);\n          // console.log(this.correctSpelling[i]);\n          if (indexLetter === _this.correctSpelling[i]) {\n            totalScore = totalScore + 1;\n          }\n        }\n      });\n\n      _this.scoreBar.setScore(totalScore);\n\n      return totalScore;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"getMaxScore\", function () {\n      return 9;\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"showSolutions\", function () {\n      console.log('show showSolutions');\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"resetTask\", function () {\n      console.log('Reset los el taskos');\n\n      _this.resetAll();\n    });\n\n    _this.config = $.extend(true, {}, {\n      greeting: 'Hello world!',\n      image: null\n    }, config);\n    _this.id = contentId;\n    console.log(_this.config);\n    return _this;\n  }\n\n  _createClass(SpellTheWord, [{\n    key: \"getXAPIData\",\n    value: function getXAPIData() {\n      console.log('getXAPIData');\n    }\n    /*\r\n    setTimeout(() => {\r\n      this.isCompleted = true;\r\n      console.log(H5P);\r\n      var $scorebar = $('<div>', {\r\n        'class': ''\r\n      });\r\n        let  scoreBar = H5P.JoubelUI.createScoreBar(4, 'scoreBarLabel', 'helpText', 'scoreExplanationButtonLabel');\r\n        scoreBar.appendTo($scorebar);\r\n      $wrapper.append($scorebar);\r\n    }, 2000);\r\n    */\n\n  }]);\n\n  return SpellTheWord;\n}(H5P.EventDispatcher);\n\n\n\n//# sourceURL=webpack:///./scripts/main.ts?");

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