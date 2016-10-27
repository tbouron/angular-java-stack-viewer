/*!
 * angular-java-stack-viewer by Thomas Bouron
 * https://github.com/tbouron/angular-java-stack-viewer#readme
 * Version: 1.0.0 - 1477582343579
 * License: Apache-2.0
 */
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

	module.exports = __webpack_require__(7);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
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
//# sourceMappingURL=angular-java-stack-viewer-nocss.js.map