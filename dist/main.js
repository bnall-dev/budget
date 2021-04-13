/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/brando/Documents/code/projects/budget/node_modules/axios/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/dateformat/lib/dateformat.js":
/*!***************************************************!*\
  !*** ./node_modules/dateformat/lib/dateformat.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/brando/Documents/code/projects/budget/node_modules/dateformat/lib/dateformat.js'\");\n\n//# sourceURL=webpack:///./node_modules/dateformat/lib/dateformat.js?");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/brando/Documents/code/projects/budget/node_modules/react-dom/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-dom/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! exports provided: MemoryRouter, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, useHistory, useLocation, useParams, useRouteMatch, withRouter, BrowserRouter, HashRouter, Link, NavLink */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/brando/Documents/code/projects/budget/node_modules/react-router-dom/esm/react-router-dom.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-router-dom/esm/react-router-dom.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/brando/Documents/code/projects/budget/node_modules/react/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/react/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _components_Demo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Demo */ \"./src/components/Demo.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Login */ \"./src/components/Login.js\");\n/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/Dashboard */ \"./src/components/dashboard/Dashboard.js\");\n\n\n\n\n\n\n\n\nconst App = () => {\n  // Obtains data fror users, transactions, and user_transactions from database\n  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [transactions, setTransactions] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [userTransactions, setUserTransactions] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/users').then(response => {\n      setUsers(response.data);\n    });\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/transactions').then(response => {\n      setTransactions(response.data);\n    });\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/user_transactions').then(response => {\n      setUserTransactions(response.data);\n    });\n  }, []); // Sets authTransactions when auth or transactions change, sorted by date\n\n  const [auth, setAuth] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n  const [authTransactions, setAuthTransactions] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (auth) {\n      const authUserTransactions = userTransactions.filter(ut => ut.userId === auth.id);\n      const array = [];\n      authUserTransactions.forEach(aut => {\n        const transaction = transactions.find(t => t.id === aut.transactionId);\n        array.push(transaction);\n      });\n      const sortedArray = array.sort((a, b) => new Date(a.date) - new Date(b.date));\n      setAuthTransactions(sortedArray);\n    }\n  }, [auth, transactions, userTransactions]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    console.log(authTransactions);\n  }, [authTransactions]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    auth: auth,\n    setAuth: setAuth\n  }), !auth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    users: users,\n    setAuth: setAuth\n  }), auth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    auth: auth,\n    authTransactions: authTransactions,\n    transactions: transactions,\n    setTransactions: setTransactions,\n    userTransactions: userTransactions,\n    setUserTransactions: setUserTransactions\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Demo.js":
/*!********************************!*\
  !*** ./src/components/Demo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Demo = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Demo\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\n\n//# sourceURL=webpack:///./src/components/Demo.js?");

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Login = ({\n  setAuth,\n  users\n}) => {\n  const [loginData, setLoginData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  const submitLogin = e => {\n    e.preventDefault();\n    const user = users.find(u => u.name === loginData.name);\n\n    if (loginData.password === user.password) {\n      setAuth(user);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"login\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"loginForm\",\n    onSubmit: submitLogin\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Login\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Name\",\n    onChange: e => {\n      setLoginData({ ...loginData,\n        name: e.target.value\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Password\",\n    onChange: e => {\n      setLoginData({ ...loginData,\n        password: e.target.value\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Submit\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Try Username \\\"Demo\\\" with Password \\\"demo\\\"!\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/components/Login.js?");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nconst Navbar = ({\n  auth,\n  setAuth\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, auth && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n    onClick: () => setAuth(null)\n  }, \"Logout\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n//# sourceURL=webpack:///./src/components/Navbar.js?");

/***/ }),

/***/ "./src/components/dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/Dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _stats_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats/Stats */ \"./src/components/dashboard/stats/Stats.js\");\n/* harmony import */ var _ledger_Ledger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ledger/Ledger */ \"./src/components/dashboard/ledger/Ledger.js\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings */ \"./src/components/dashboard/Settings.js\");\n\n\n\n\n\n\nconst Dashboard = ({\n  auth,\n  authTransactions,\n  transactions,\n  setTransactions,\n  userTransactions,\n  setUserTransactions\n}) => {\n  // Creates lists of auth's methods and categories\n  const [authMethods, setAuthMethods] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [authCategories, setAuthCategories] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var methods = [];\n    authTransactions.forEach(t => {\n      if (!methods.includes(t.method)) {\n        methods.push(t.method);\n      }\n    });\n    setAuthMethods(methods);\n    var categories = [];\n    authTransactions.forEach(t => {\n      if (!categories.includes(t.category)) {\n        categories.push(t.category);\n      }\n    });\n    setAuthCategories(categories);\n  }, [authTransactions]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"dashboard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      justifyContent: 'space-between'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"navLink\",\n    to: \"/ledger\"\n  }, \"Ledger\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    className: \"navLink\",\n    to: \"/settings\"\n  }, \"Settings\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/ledger\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ledger_Ledger__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    auth: auth,\n    transactions: transactions,\n    setTransactions: setTransactions,\n    userTransactions: userTransactions,\n    setUserTransactions: setUserTransactions,\n    authTransactions: authTransactions,\n    authMethods: authMethods,\n    authCategories: authCategories\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/settings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    auth: auth\n  })))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\n//# sourceURL=webpack:///./src/components/dashboard/Dashboard.js?");

/***/ }),

/***/ "./src/components/dashboard/Settings.js":
/*!**********************************************!*\
  !*** ./src/components/dashboard/Settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Settings = ({\n  auth\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"settings\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Settings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Username: \", auth.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Change Username\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Change Password\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n//# sourceURL=webpack:///./src/components/dashboard/Settings.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/Filters.js":
/*!****************************************************!*\
  !*** ./src/components/dashboard/ledger/Filters.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Filters = ({\n  authTransactions,\n  authMethods,\n  authCategories,\n  displayedTransactions,\n  setDisplayedTransactions\n}) => {\n  const methodOptions = authMethods.map((am, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i\n    }, am);\n  });\n  const [activeMethod, setActiveMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const filterMethod = e => {\n    const filtered = authTransactions.filter(dt => dt.method === e.target.value);\n    setDisplayedTransactions(filtered);\n    setActiveCategory(null);\n    setActiveMethod(e.target.value);\n    e.target.value = 'Method';\n  };\n\n  const categoryOptions = authCategories.map((ac, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i\n    }, ac);\n  });\n  const [activeCategory, setActiveCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null);\n\n  const filterCategory = e => {\n    const filtered = authTransactions.filter(dt => dt.category === e.target.value);\n    setDisplayedTransactions(filtered);\n    setActiveMethod(null);\n    setActiveCategory(e.target.value);\n    e.target.value = 'Category';\n  };\n\n  const clearFilters = () => {\n    setDisplayedTransactions(authTransactions);\n    setActiveMethod(null);\n    setActiveCategory(null);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filters\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Filter \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filtersDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filterDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: \"Method\",\n    onChange: filterMethod\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true\n  }, \"Method\"), methodOptions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filterDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: \"Category\",\n    onChange: filterCategory\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true\n  }, \"Category\"), categoryOptions))), activeMethod && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, activeMethod), activeCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, activeCategory), (activeMethod || activeCategory) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: clearFilters\n  }, \"Clear Filter\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filters);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/Filters.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/Form.js":
/*!*************************************************!*\
  !*** ./src/components/dashboard/ledger/Form.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Form = ({\n  auth,\n  transactions,\n  setTransactions,\n  userTransactions,\n  setUserTransactions,\n  authMethods,\n  authCategories\n}) => {\n  // Data updates when form input changes\n  const [transactionData, setTransactionData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [newMethod, setNewMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [newCategory, setNewCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // Posts transactionData and posts corresponding userTransaction\n\n  const submitTransaction = e => {\n    e.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/transactions', transactionData).then(response => {\n      setTransactions([...transactions, response.data]);\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/user_transactions', {\n        userId: auth.id,\n        transactionId: response.data.id\n      }).then(r => {\n        setUserTransactions([...userTransactions, r.data]);\n      });\n    });\n    e.target.reset();\n  };\n\n  const methodOptions = authMethods.map((am, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i\n    }, am);\n  });\n  const categoryOptions = authCategories.map((am, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i\n    }, am);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"ledgerForm\",\n    onSubmit: submitTransaction\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"New Transaction\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"date\",\n    onChange: e => setTransactionData({ ...transactionData,\n      date: e.target.value\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: \"Type\",\n    onChange: e => {\n      setTransactionData({ ...transactionData,\n        type: e.target.value\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true,\n    value: \"Type\"\n  }, \"Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Withdrawal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Deposit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Debt\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Debt Payment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Savings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Transfer\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    step: \"0.01\",\n    placeholder: \"0.00\",\n    onChange: e => setTransactionData({ ...transactionData,\n      amount: e.target.value\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: \"Method\",\n    onChange: e => {\n      if (e.target.value === '-- New Method --') {\n        setNewMethod(true);\n      } else {\n        setNewMethod(false);\n      }\n\n      setTransactionData({ ...transactionData,\n        method: e.target.value\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true,\n    value: \"Method\"\n  }, \"Method\"), methodOptions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"-- New Method --\")), newMethod && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"Text\",\n    placeholder: \"New Method\",\n    onChange: e => {\n      setTransactionData({ ...transactionData,\n        method: e.target.value\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: \"Category\",\n    onChange: e => {\n      if (e.target.value === '-- New Category --') {\n        setNewCategory(true);\n      } else {\n        setNewCategory(false);\n      }\n\n      setTransactionData({ ...transactionData,\n        category: e.target.value\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true,\n    value: \"Category\"\n  }, \"Category\"), categoryOptions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"-- New Category --\")), newCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"Text\",\n    placeholder: \"New Category\",\n    onChange: e => {\n      setTransactionData({ ...transactionData,\n        category: e.target.value\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: \"Transaction\",\n    onChange: e => setTransactionData({ ...transactionData,\n      transaction: e.target.value\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"submit\",\n    value: \"Submit\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/Form.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/Ledger.js":
/*!***************************************************!*\
  !*** ./src/components/dashboard/ledger/Ledger.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ \"./src/components/dashboard/ledger/Form.js\");\n/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Filters */ \"./src/components/dashboard/ledger/Filters.js\");\n/* harmony import */ var _tables_Tables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables/Tables */ \"./src/components/dashboard/ledger/tables/Tables.js\");\n/* harmony import */ var _stats_Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stats/Stats */ \"./src/components/dashboard/stats/Stats.js\");\n\n\n\n\n\n\nconst Ledger = ({\n  auth,\n  transactions,\n  setTransactions,\n  userTransactions,\n  setUserTransactions,\n  authTransactions,\n  total,\n  authMethods,\n  authCategories\n}) => {\n  // Sets displayedTransactions as authTransactions on change\n  const [displayedTransactions, setDisplayedTransactions] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(authTransactions);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    setDisplayedTransactions(authTransactions);\n  }, [authTransactions, auth, transactions]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ledger\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      margin: 16,\n      display: 'flex',\n      flexDirection: 'row'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      display: 'flex',\n      flexDirection: 'column'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    auth: auth,\n    transactions: transactions,\n    setTransactions: setTransactions,\n    userTransactions: userTransactions,\n    setUserTransactions: setUserTransactions,\n    setDisplayedTransactions: setDisplayedTransactions,\n    authTransactions: authTransactions,\n    authMethods: authMethods,\n    authCategories: authCategories\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filters__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    authTransactions: authTransactions,\n    authMethods: authMethods,\n    authCategories: authCategories,\n    displayedTransactions: displayedTransactions,\n    setDisplayedTransactions: setDisplayedTransactions\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_stats_Stats__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    authTransactions: authTransactions,\n    displayedTransactions: displayedTransactions\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_tables_Tables__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    displayedTransactions: displayedTransactions,\n    total: total,\n    transactions: transactions,\n    setTransactions: setTransactions,\n    userTransactions: userTransactions,\n    setUserTransactions: setUserTransactions,\n    authMethods: authMethods,\n    authCategories: authCategories\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ledger);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/Ledger.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/tables/Cleared.js":
/*!***********************************************************!*\
  !*** ./src/components/dashboard/ledger/tables/Cleared.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Update */ \"./src/components/dashboard/ledger/tables/Update.js\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dateformat */ \"./node_modules/dateformat/lib/dateformat.js\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Cleared = ({\n  transactions,\n  setTransactions,\n  currentTotal,\n  cleared,\n  deleteTransaction,\n  toggleUpdate,\n  updateActive,\n  setUpdateActive,\n  authMethods,\n  authCategories\n}) => {\n  //Starting balance for table rows\n  var clearedBalance = currentTotal(); // Transaction data or update form, based on updateActive\n\n  const clearedRows = cleared.map((t, i) => {\n    clearedBalance -= t.amount;\n\n    if (updateActive.id === t.id) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Update__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        t: t,\n        setUpdateActive: setUpdateActive,\n        transactions: transactions,\n        setTransactions: setTransactions,\n        key: t.id,\n        authMethods: authMethods,\n        authCategories: authCategories\n      });\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: \"tableRow\",\n        key: t.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, dateformat__WEBPACK_IMPORTED_MODULE_2___default()(t.date, 'shortDate', true)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, t.transaction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, t.method), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, t.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\",\n        style: {\n          textAlign: 'right'\n        }\n      }, t.amount.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\",\n        style: {\n          textAlign: 'right'\n        }\n      }, Number(Math.round(clearedBalance + t.amount + 'e2') + 'e-2').toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableButton\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ledgerButton\",\n        style: {\n          backgroundColor: 'blue'\n        },\n        onClick: () => {\n          toggleUpdate(t);\n        }\n      }, \"\\u270E\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ledgerButton\",\n        style: {\n          backgroundColor: 'red'\n        },\n        onClick: () => {\n          deleteTransaction(t);\n        }\n      }, \"X\")));\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tableDiv cleared\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Cleared\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"ledgerTable\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"tableRow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Date\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Transaction\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Method\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Amount\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Balance\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, clearedRows)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cleared);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/tables/Cleared.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/tables/Pending.js":
/*!***********************************************************!*\
  !*** ./src/components/dashboard/ledger/tables/Pending.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Update */ \"./src/components/dashboard/ledger/tables/Update.js\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dateformat */ \"./node_modules/dateformat/lib/dateformat.js\");\n/* harmony import */ var dateformat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dateformat__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Pending = ({\n  transactions,\n  setTransactions,\n  currentTotal,\n  pending,\n  deleteTransaction,\n  toggleUpdate,\n  updateActive,\n  setUpdateActive,\n  authMethods,\n  authCategories\n}) => {\n  // Changes transaction status to cleared\n  const clearTransaction = t => {\n    const transactionsCopy = [...transactions];\n    const transactionIndex = transactions.indexOf(t);\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/transactions/${t.id}`, { ...t,\n      cleared: true\n    }).then(response => {\n      transactionsCopy.splice(transactionIndex, 1, response.data);\n      setTransactions(transactionsCopy);\n    });\n  }; //Starting balance for table rows\n\n\n  var pendingBalance = currentTotal(); // Transaction data or update form, based on updateActive\n\n  const pendingRows = pending.map((t, i) => {\n    pendingBalance += t.amount;\n    const balanceStyle = {\n      textAlign: 'right'\n    };\n\n    if (pendingBalance > 0) {\n      balanceStyle.backgroundColor = 'lightgreen';\n    } else if (pendingBalance > -0.1 && pendingBalance < 0) {\n      balanceStyle.backgroundColor = 'lightgreen';\n    } else {\n      balanceStyle.backgroundColor = 'red';\n    }\n\n    if (updateActive.id === t.id) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Update__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        t: t,\n        setUpdateActive: setUpdateActive,\n        transactions: transactions,\n        setTransactions: setTransactions,\n        key: t.id,\n        authMethods: authMethods,\n        authCategories: authCategories\n      });\n    } else {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: \"tableRow\",\n        key: t.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, dateformat__WEBPACK_IMPORTED_MODULE_3___default()(t.date, 'shortDate', true)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, t.transaction), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, t.method), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\"\n      }, t.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\",\n        style: {\n          textAlign: 'right'\n        }\n      }, t.amount.toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableCell\",\n        style: balanceStyle\n      }, (Number(Math.round(pendingBalance + 'e2') + 'e-2') || 0).toFixed(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: \"tableButton\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ledgerButton\",\n        style: {\n          backgroundColor: 'green'\n        },\n        onClick: () => {\n          clearTransaction(t);\n        }\n      }, \"\\u2714\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ledgerButton\",\n        style: {\n          backgroundColor: 'blue'\n        },\n        onClick: () => {\n          toggleUpdate(t);\n        }\n      }, \"\\u270E\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ledgerButton\",\n        style: {\n          backgroundColor: 'red'\n        },\n        onClick: () => {\n          deleteTransaction(t);\n        }\n      }, \"X\")));\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"tableDiv pending\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Pending\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"ledgerTable\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"tableRow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Date\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Transaction\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Method\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Amount\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    className: \"tableHeader\"\n  }, \"Balance\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, pendingRows)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pending);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/tables/Pending.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/tables/Tables.js":
/*!**********************************************************!*\
  !*** ./src/components/dashboard/ledger/tables/Tables.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Cleared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cleared */ \"./src/components/dashboard/ledger/tables/Cleared.js\");\n/* harmony import */ var _Pending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pending */ \"./src/components/dashboard/ledger/tables/Pending.js\");\n\n\n\n\n\nconst Tables = ({\n  displayedTransactions,\n  transactions,\n  setTransactions,\n  userTransactions,\n  setUserTransactions,\n  authMethods,\n  authCategories\n}) => {\n  // Separates displayedTransactions by cleared/pending status\n  const cleared = displayedTransactions.filter(dt => dt.cleared).reverse();\n  const pending = displayedTransactions.filter(dt => !dt.cleared); // Total balance of cleared displayedTransactions\n\n  const currentTotal = () => {\n    let total = 0.0;\n    cleared.forEach(dt => {\n      total += dt.amount;\n    });\n    return total;\n  }; // Deletes transaction and corresponding userTransaction\n\n\n  const deleteTransaction = t => {\n    const ut = userTransactions.find(ut => ut.transactionId === t.id);\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`api/user_transactions/${ut.id}`).then(() => {\n      const array = userTransactions.filter(uut => uut.id !== ut.id);\n      setUserTransactions(array);\n    });\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`api/transactions/${t.id}`).then(() => {\n      const array = transactions.filter(tt => tt.id !== t.id);\n      setTransactions(array);\n    });\n  }; // When set to transaction object, displays update form\n\n\n  const [updateActive, setUpdateActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n\n  const toggleUpdate = t => {\n    if (!updateActive) {\n      setUpdateActive(t);\n    } else if (updateActive.id === t.id) {\n      setUpdateActive(false);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"ledgerTables\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Cleared__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    transactions: transactions,\n    setTransactions: setTransactions,\n    currentTotal: currentTotal,\n    deleteTransaction: deleteTransaction,\n    cleared: cleared,\n    toggleUpdate: toggleUpdate,\n    updateActive: updateActive,\n    setUpdateActive: setUpdateActive,\n    authMethods: authMethods,\n    authCategories: authCategories\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pending__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    currentTotal: currentTotal,\n    deleteTransaction: deleteTransaction,\n    pending: pending,\n    toggleUpdate: toggleUpdate,\n    updateActive: updateActive,\n    setUpdateActive: setUpdateActive,\n    transactions: transactions,\n    setTransactions: setTransactions,\n    authMethods: authMethods,\n    authCategories: authCategories\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tables);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/tables/Tables.js?");

/***/ }),

/***/ "./src/components/dashboard/ledger/tables/Update.js":
/*!**********************************************************!*\
  !*** ./src/components/dashboard/ledger/tables/Update.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Update = ({\n  setUpdateActive,\n  transactions,\n  setTransactions,\n  t,\n  authMethods,\n  authCategories\n}) => {\n  const [updatedTransaction, setUpdatedTransaction] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({ ...t\n  });\n  const [newMethod, setNewMethod] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [newCategory, setNewCategory] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // Posts updatedTransaction and closes update form\n\n  const updateTransaction = () => {\n    const transactionsCopy = [...transactions];\n    const transactionIndex = transactions.indexOf(t);\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`/api/transactions/${t.id}`, { ...updatedTransaction\n    }).then(response => {\n      transactionsCopy.splice(transactionIndex, 1, response.data);\n      console.log('YO', response.data);\n      setTransactions(transactionsCopy);\n    });\n    setUpdateActive(false);\n  };\n\n  const methodOptions = authMethods.map((am, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i\n    }, am);\n  });\n  const categoryOptions = authCategories.map((am, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      key: i\n    }, am);\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: \"updateRow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    colSpan: \"6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"date\",\n    onChange: e => setUpdatedTransaction({ ...updatedTransaction,\n      date: e.target.value\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: t.method,\n    onChange: e => {\n      if (e.target.value === '-- New Method --') {\n        setNewMethod(true);\n      } else {\n        setNewMethod(false);\n      }\n\n      setUpdatedTransaction({ ...updatedTransaction,\n        method: e.target.value\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true,\n    value: \"Method\"\n  }, \"Method\"), methodOptions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"-- New Method --\")), newMethod && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"Text\",\n    placeholder: \"New Method\",\n    onChange: e => {\n      if (e.target.value === '-- New Category --') {\n        setNewCategory(true);\n      } else {\n        setNewCategory(false);\n      }\n\n      setUpdatedTransaction({ ...updatedTransaction,\n        method: e.target.value\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    placeholder: t.transaction,\n    onChange: e => setUpdatedTransaction({ ...updatedTransaction,\n      transaction: e.target.value\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: t.category,\n    onChange: e => {\n      if (e.target.value === '-- New Category --') {\n        setNewCategory(true);\n      } else {\n        setNewCategory(false);\n      }\n\n      setUpdatedTransaction({ ...updatedTransaction,\n        category: e.target.value\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true,\n    value: \"Category\"\n  }, \"Category\"), categoryOptions, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"-- New Category --\")), newCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"Text\",\n    placeholder: \"New Category\",\n    onChange: e => {\n      setUpdatedTransaction({ ...updatedTransaction,\n        category: e.target.value\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"number\",\n    step: \"0.01\",\n    placeholder: t.amount,\n    onChange: e => setUpdatedTransaction({ ...updatedTransaction,\n      amount: e.target.value\n    })\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    defaultValue: t.type,\n    onChange: e => {\n      setUpdatedTransaction({ ...updatedTransaction,\n        type: e.target.value\n      });\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    disabled: true,\n    value: \"Type\"\n  }, \"Type\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Withdrawal\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Deposit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Debt\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Debt Payment\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Savings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", null, \"Transfer\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: updateTransaction\n  }, \"Save\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: () => {\n      setUpdateActive(false);\n    }\n  }, \"Cancel\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Update);\n\n//# sourceURL=webpack:///./src/components/dashboard/ledger/tables/Update.js?");

/***/ }),

/***/ "./src/components/dashboard/stats/Accounts.js":
/*!****************************************************!*\
  !*** ./src/components/dashboard/stats/Accounts.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Accounts = ({\n  authTransactions\n}) => {\n  const debitBalance = () => {\n    const debitTransactions = authTransactions.filter(t => t.cleared && t.method === 'Debit');\n    let total = 0.0;\n    debitTransactions.forEach(dt => {\n      total += dt.amount;\n    });\n    return total;\n  };\n\n  const creditBalance = () => {\n    const creditTransactions = authTransactions.filter(t => t.cleared && t.method === 'Credit');\n    let total = 0.0;\n    creditTransactions.forEach(ct => {\n      total += ct.amount;\n    });\n    return total;\n  };\n\n  const cashBalance = () => {\n    const cashTransactions = authTransactions.filter(t => t.cleared && t.method === 'Cash');\n    let total = 0.0;\n    cashTransactions.forEach(ct => {\n      total += ct.amount;\n    });\n    return total;\n  };\n\n  const savingsBalance = () => {\n    const savingsTransactions = authTransactions.filter(t => t.cleared && t.method === 'Savings');\n    let total = 0.0;\n    savingsTransactions.forEach(st => {\n      total += st.amount;\n    });\n    return total;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"accounts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Accounts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"accountsDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"accountDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Debit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"$\", debitBalance().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"accountDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Credit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"$\", creditBalance().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"accountDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Cash\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"$\", cashBalance().toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"accountDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Savings\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"$\", savingsBalance().toFixed(2)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accounts);\n\n//# sourceURL=webpack:///./src/components/dashboard/stats/Accounts.js?");

/***/ }),

/***/ "./src/components/dashboard/stats/LineGraph.js":
/*!*****************************************************!*\
  !*** ./src/components/dashboard/stats/LineGraph.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst LineGraph = ({\n  authTransactions,\n  displayedTransactions\n}) => {\n  let activeBalance = 0.0;\n  let totalBalance = 0.0;\n  let debitBalance = 0.0;\n  let savingsBalance = 0.0;\n  let activeString = '0,150 ';\n  let totalString = '0,150 ';\n  let debitString = '0,150 ';\n  let savingsString = '0,150 ';\n  const currentDate = new Date();\n  const currentDay = Math.ceil((currentDate - new Date(currentDate.getFullYear(), 0, 1)) / 86400000);\n  authTransactions.forEach(dt => {\n    const date = new Date(dt.date);\n    totalBalance += dt.amount;\n\n    if (dt.method === 'Debit') {\n      debitBalance += dt.amount;\n    } else if (dt.method === 'Savings') {\n      savingsBalance += dt.amount;\n    }\n\n    if (date.getFullYear() === new Date().getFullYear()) {\n      const x = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 86400000);\n      let y = 150 - totalBalance * 0.01;\n      totalString += x + ',' + y + ' ';\n\n      if (dt.method === 'Debit') {\n        y = 150 - debitBalance * 0.01;\n        debitString += x + ',' + y + ' ';\n      } else if (dt.method === 'Savings') {\n        y = 150 - savingsBalance * 0.01;\n        savingsString += x + ',' + y + ' ';\n      }\n    }\n\n    console.log(totalBalance);\n  });\n  displayedTransactions.forEach(dt => {\n    activeBalance += dt.amount;\n    const date = new Date(dt.date);\n\n    if (date.getFullYear() === new Date().getFullYear()) {\n      const x = Math.ceil((date - new Date(date.getFullYear(), 0, 1)) / 86400000);\n      let y = 150 - activeBalance * 0.01;\n      activeString += x + ',' + y + ' ';\n    }\n  });\n  activeString += '366,' + (150 - activeBalance * 0.01) + ' 366,150';\n  totalString += '366,' + (150 - totalBalance * 0.01) + ' 366,150';\n  debitString += '366,' + (150 - debitBalance * 0.01) + ' 366,150';\n  savingsString += '366,' + (150 - savingsBalance * 0.01) + ' 366,150';\n  const yLines = [];\n\n  for (let i = 0; i < 16; i++) {\n    let stroke = '1';\n    let dash = '1 3';\n\n    if (i === 4 || i === 9 || i === 14) {\n      stroke = '1.5';\n      dash = '2 2';\n    }\n\n    yLines.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n      x1: \"0\",\n      y1: (i + 1) * 10,\n      x2: \"366\",\n      y2: (i + 1) * 10,\n      stroke: \"grey\",\n      strokeWidth: stroke,\n      \"stroke-dasharray\": dash\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n    viewBox: \"0 0 365 170\",\n    className: \"lineGraph\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"31\",\n    y1: \"0\",\n    x2: \"31\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    strokeDasharray: \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"59\",\n    y1: \"0\",\n    x2: \"59\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"90\",\n    y1: \"0\",\n    x2: \"90\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"120\",\n    y1: \"0\",\n    x2: \"120\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"151\",\n    y1: \"0\",\n    x2: \"151\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"181\",\n    y1: \"0\",\n    x2: \"181\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"212\",\n    y1: \"0\",\n    x2: \"212\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"243\",\n    y1: \"0\",\n    x2: \"243\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"273\",\n    y1: \"0\",\n    x2: \"273\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"304\",\n    y1: \"0\",\n    x2: \"304\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"line\", {\n    x1: \"334\",\n    y1: \"0\",\n    x2: \"334\",\n    y2: \"150\",\n    stroke: \"white\",\n    strokeWidth: \"1\",\n    \"stroke-dasharray\": \"5 3\"\n  }), yLines, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"rgba(225,225,265,0.5)\",\n    stroke: \"darkblue\",\n    strokeWidth: \"1\",\n    points: activeString\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"rgba(265,100,100,0.5)\",\n    stroke: \"none\",\n    points: \"0,150 365,150 365,170 0,170\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"none\",\n    stroke: \"#0074d9\",\n    strokeWidth: \"0.5\",\n    points: totalString\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"none\",\n    stroke: \"#0074d9\",\n    strokeWidth: \"0.5\",\n    points: debitString\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"none\",\n    stroke: \"#0074d9\",\n    strokeWidth: \"0.5\",\n    points: savingsString\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"none\",\n    stroke: \"darkblue\",\n    strokeWidth: \"1\",\n    points: activeString\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polyline\", {\n    fill: \"rgba(0,0,0,0.25)\",\n    stroke: \"none\",\n    points: '0,0 ' + currentDay + ',0 ' + currentDay + ',170 0,170'\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineGraph);\n\n//# sourceURL=webpack:///./src/components/dashboard/stats/LineGraph.js?");

/***/ }),

/***/ "./src/components/dashboard/stats/Stats.js":
/*!*************************************************!*\
  !*** ./src/components/dashboard/stats/Stats.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Accounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accounts */ \"./src/components/dashboard/stats/Accounts.js\");\n/* harmony import */ var _LineGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LineGraph */ \"./src/components/dashboard/stats/LineGraph.js\");\n\n\n\n\nconst Stats = ({\n  authTransactions,\n  displayedTransactions\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"stats\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accounts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    authTransactions: authTransactions\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LineGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    displayedTransactions: displayedTransactions,\n    authTransactions: authTransactions\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stats);\n\n//# sourceURL=webpack:///./src/components/dashboard/stats/Stats.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n\nObject(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst reportWebVitals = onPerfEntry => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ \"./node_modules/web-vitals/dist/web-vitals.es5.min.js\")).then(({\n      getCLS,\n      getFID,\n      getFCP,\n      getLCP,\n      getTTFB\n    }) => {\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reportWebVitals);\n\n//# sourceURL=webpack:///./src/reportWebVitals.js?");

/***/ })

/******/ });