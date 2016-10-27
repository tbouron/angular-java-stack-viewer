(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define("angular-java-stack-viewer", ["angular"], factory);
	else if(typeof exports === 'object')
		exports["angular-java-stack-viewer"] = factory(require("angular"));
	else
		root["angular-java-stack-viewer"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	__webpack_require__(3);
	
	var _stackViewerNocss = __webpack_require__(7);
	
	var _stackViewerNocss2 = _interopRequireDefault(_stackViewerNocss);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _stackViewerNocss2.default;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./stack-viewer.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./stack-viewer.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".line {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  align-items: center;\n  margin-bottom: 1em;\n}\n.line:before {\n  content: '';\n  display: inline-flex;\n  background-color: #fff;\n  border: 0.25em solid #cbcbcb;\n  border-radius: 50%;\n  width: 1.8em;\n  height: 1.8em;\n  min-width: 1.8em;\n  min-height: 1.8em;\n  margin-right: 1em;\n  z-index: 2;\n}\n.line:after {\n  content: '';\n  position: absolute;\n  display: block;\n  border-left: 0.25em solid #cbcbcb;\n  height: 1.8em;\n  top: 1.7em;\n  left: 0.775em;\n  z-index: -1;\n}\n.line:last-child {\n  margin-bottom: 0;\n}\n.line:last-child:after {\n  content: none;\n}\n.vendor > .line {\n  flex-wrap: wrap;\n}\n.vendor > .line > .vendor-body {\n  display: none;\n  width: 100%;\n  margin-top: 1.2em;\n}\n.vendor > .line > .vendor-body:before {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 2em;\n  background-color: #cbcbcb;\n  width: 0.25em;\n  height: 4.5em;\n  transform: rotate(-45deg);\n  z-index: -1;\n}\n.vendor > .line > .vendor-body:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n  bottom: -2.8em;\n  left: 2em;\n  background-color: #cbcbcb;\n  width: 0.25em;\n  height: 4.5em;\n  transform: rotate(45deg);\n  z-index: -1;\n}\n.vendor .vendor-header {\n  cursor: pointer;\n}\n.vendor .vendor-header:hover .vendor-name {\n  background-color: #31b0d5;\n}\n.vendor .vendor-header:hover .vendor-calls {\n  color: #333;\n}\n.group {\n  position: relative;\n}\n.group > ul {\n  padding: 0;\n  margin-bottom: 1em;\n}\n.group > ul:before {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  border-left: 0.25em dotted #cbcbcb;\n  height: 1.8em;\n  top: -1.8em;\n  left: 0.775em;\n  z-index: -2;\n}\n.group:first-child > ul:before {\n  top: 0;\n}\n.group.has-exception > ul:before {\n  height: inherit;\n  bottom: 0;\n}\n.group.active.has-exception > ul:before {\n  bottom: -1.8em;\n}\n.group.active .line > .vendor-body {\n  display: block;\n}\n.group.active + .group > ul:before {\n  content: none;\n}\n.group:last-child .vendor-body:after {\n  content: none;\n}\n.main-error {\n  color: #d9534f;\n  font-weight: bold;\n}\n.main-error:before {\n  border-color: #d9534f;\n  border-width: 8px;\n}\n.label-line {\n  background-color: #eee;\n  font-family: monospace;\n  font-weight: normal;\n  color: #a5a5a5;\n}\n.container-fluid {\n  margin-top: 15px;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.stackViewerDirective = stackViewerDirective;
	
	var _stackViewer = __webpack_require__(8);
	
	var _stackViewer2 = _interopRequireDefault(_stackViewer);
	
	var _angular = __webpack_require__(9);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _javaStackParser = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var MODULE_NAME = 'tb.stack-viewer';
	
	_angular2.default.module(MODULE_NAME, []).directive('tbStackViewer', ['$timeout', stackViewerDirective]);
	
	exports.default = MODULE_NAME;
	function stackViewerDirective($timeout) {
	    return {
	        restrict: 'EA',
	        templateUrl: _stackViewer2.default,
	        scope: {
	            trace: '=',
	            vendors: '='
	        },
	        link: link
	    };
	
	    function link(scope, element) {
	        scope.stack = new _javaStackParser.Stack(scope.vendors);
	        scope.$watch('vendors', function () {
	            scope.stack = new _javaStackParser.Stack(scope.vendors);
	            parse(scope, element);
	        }, true);
	        scope.$watch('trace', function () {
	            parse(scope, element);
	        });
	    }
	
	    function parse(scope, element) {
	        if (scope.trace) {
	            scope.stack.parse(scope.trace);
	            $timeout(function () {
	                _angular2.default.element(element[0].querySelector('.app')).addClass('main-error');
	            });
	        }
	    }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	var path = 'templates/stack-viewer.html';
	var html = "<div ng-repeat=\"group in stack.groups track by $index\" class=\"group\" ng-init=\"group.isCollapsed = true\" ng-class=\"{'has-exception': group.exception, active: !group.isCollapsed && group.stackPackage.isVendor}\">\n    <div ng-if=\"group.exception\" class=\"alert alert-warning\"><span class=\"label label-warning\">{{group.exception.exception}}</span>&nbsp;{{group.exception.message}}</div>\n    <ul ng-class=\"{vendor: group.stackPackage.isVendor}\">\n        <li ng-if=\"group.stackPackage.isVendor\" class=\"line\">\n            <span ng-click=\"group.isCollapsed = !group.isCollapsed\" class=\"vendor-header\">\n            <span class=\"vendor-name label label-info\">{{group.stackPackage.name}}</span>&nbsp;\n            <small class=\"vendor-calls text-muted\">{{group.lines.length}} more calls</small>\n          </span>\n            <ul class=\"vendor-body\">\n                <li ng-repeat=\"line in group.lines track by $index\" class=\"line\">\n                    {{line.javaClass}}.{{line.method}}&nbsp;<span class=\"label label-line\" ng-if=\"line.line >= 0\">line {{line.line}}</span>\n                </li>\n            </ul>\n        </li>\n        <li ng-if=\"!group.stackPackage.isVendor\" ng-repeat=\"line in group.lines track by $index\" class=\"line app\">\n            {{line.javaClass}}.{{line.method}}&nbsp;<span class=\"label label-line\" ng-if=\"line.line >= 0\">line {{line.line}}</span>\n        </li>\n    </ul>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("java-stack-parser", [], factory);
		else if(typeof exports === 'object')
			exports["java-stack-parser"] = factory();
		else
			root["java-stack-parser"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {
	
		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		var EXCEPTION_PATTERN = /([\w\d\.]*exception)\:\s*(.*)$/i;
		var LINE_PATTERN = /((([\d\w]*\.)*[\d\w]*)\.)?([\d\w\$]*)\.([\d\w\$]*)\(([\d\w\.\s]*)(\:(\d*))?\)/;
		
		var StackPackage = exports.StackPackage = function () {
		    function StackPackage(name) {
		        var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		        var isVendor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
		
		        _classCallCheck(this, StackPackage);
		
		        if (!name || name.trim().length === 0) {
		            throw new Error('Cannot create stack package: name is not defined');
		        }
		        if (!aliases || !(aliases instanceof Array)) {
		            throw new Error('Cannot create stack package: aliases is not defined or of a wrong type');
		        }
		        this.name = name;
		        this.aliases = aliases;
		        this.isVendor = isVendor;
		        if (!String.prototype.startsWith) {
		            String.prototype.startsWith = function (search) {
		                return this.indexOf(search) === 0;
		            };
		        }
		    }
		
		    _createClass(StackPackage, [{
		        key: 'equals',
		        value: function equals(stackPackage) {
		            if (!stackPackage) {
		                return false;
		            }
		            if (stackPackage.name === this.name) {
		                return true;
		            }
		            for (var i = 0; i < this.aliases.length; i++) {
		                if (this.aliases[i] === stackPackage.name || stackPackage.name.startsWith(this.aliases[i])) {
		                    return true;
		                }
		            }
		            return false;
		        }
		    }]);
		
		    return StackPackage;
		}();
		
		var StackLine = exports.StackLine = function StackLine(stackPackage, javaClass, method, source, line) {
		    _classCallCheck(this, StackLine);
		
		    if (!stackPackage || !(stackPackage instanceof StackPackage)) {
		        throw new Error('Cannot create stack line: stack package is null or of a wrong type');
		    }
		    this.stackPackage = stackPackage;
		    this.javaClass = javaClass || 'Unknown';
		    this.method = method || 'Unknown';
		    this.source = source || 'Unknown';
		    this.line = line ? parseInt(line, 10) : -1;
		};
		
		var StackGroup = exports.StackGroup = function () {
		    function StackGroup(stackPackage) {
		        _classCallCheck(this, StackGroup);
		
		        if (!stackPackage || !(stackPackage instanceof StackPackage)) {
		            throw new Error('Cannot create stack group: stack package is null or of a wrong type');
		        }
		        this.stackPackage = stackPackage;
		        this.lines = [];
		    }
		
		    _createClass(StackGroup, [{
		        key: 'addLine',
		        value: function addLine(stackLine) {
		            if (stackLine instanceof StackLine) {
		                this.lines.push(stackLine);
		            }
		        }
		    }, {
		        key: 'addException',
		        value: function addException(exception, message) {
		            this.exception = {
		                exception: exception,
		                message: message
		            };
		        }
		    }]);
		
		    return StackGroup;
		}();
		
		var Stack = exports.Stack = function () {
		    function Stack() {
		        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		
		        _classCallCheck(this, Stack);
		
		        this.groups = [];
		        this.vendorPackages = [];
		
		        var _iteratorNormalCompletion = true;
		        var _didIteratorError = false;
		        var _iteratorError = undefined;
		
		        try {
		            for (var _iterator = Object.keys(opts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		                var key = _step.value;
		
		                this.vendorPackages.push(new StackPackage(key, opts[key], true));
		            }
		        } catch (err) {
		            _didIteratorError = true;
		            _iteratorError = err;
		        } finally {
		            try {
		                if (!_iteratorNormalCompletion && _iterator.return) {
		                    _iterator.return();
		                }
		            } finally {
		                if (_didIteratorError) {
		                    throw _iteratorError;
		                }
		            }
		        }
		    }
		
		    _createClass(Stack, [{
		        key: 'parse',
		        value: function parse(stackTrace) {
		            var _this = this;
		
		            this.groups = [];
		
		            var parsedException = null;
		            var lines = stackTrace.split('\n');
		            lines.forEach(function (line) {
		                if (parsedException === null) {
		                    parsedException = line.trim().match(EXCEPTION_PATTERN);
		                }
		
		                var parsedLine = line.trim().match(LINE_PATTERN);
		
		                if (parsedLine !== null) {
		                    var stackPackage = new StackPackage(parsedLine[2] || 'Unknown');
		                    for (var index in _this.vendorPackages) {
		                        if (_this.vendorPackages[index].equals(stackPackage)) {
		                            stackPackage = _this.vendorPackages[index];
		                            break;
		                        }
		                    }
		
		                    var stackLine = new StackLine(stackPackage, parsedLine[4], parsedLine[5], parsedLine[6], parsedLine[8]);
		
		                    if (_this.groups.length === 0) {
		                        _this.groups.push(new StackGroup(stackPackage));
		                    }
		
		                    var group = _this.groups[_this.groups.length - 1];
		                    if (!group.stackPackage.equals(stackPackage)) {
		                        group = new StackGroup(stackPackage);
		                        _this.groups.push(group);
		                    }
		
		                    group.addLine(stackLine);
		                    if (parsedException !== null) {
		                        group.addException(parsedException[1], parsedException[2]);
		                        parsedException = null;
		                    }
		                }
		            });
		        }
		    }]);
	
		    return Stack;
		}();
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=java-stack-parser.js.map

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-java-stack-viewer.js.map