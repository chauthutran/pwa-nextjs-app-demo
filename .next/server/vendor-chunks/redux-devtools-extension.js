"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/redux-devtools-extension";
exports.ids = ["vendor-chunks/redux-devtools-extension"];
exports.modules = {

/***/ "(ssr)/./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar compose = (__webpack_require__(/*! redux */ \"(ssr)/./node_modules/redux/dist/cjs/redux.cjs\").compose);\n\nexports.__esModule = true;\nexports.composeWithDevTools =\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\n    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__\n    : function () {\n        if (arguments.length === 0) return undefined;\n        if (typeof arguments[0] === 'object') return compose;\n        return compose.apply(null, arguments);\n      };\n\nexports.devToolsEnhancer =\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__\n    ? window.__REDUX_DEVTOOLS_EXTENSION__\n    : function () {\n        return function (noop) {\n          return noop;\n        };\n      };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGNBQWMsMkZBQXdCOztBQUV0QyxrQkFBa0I7QUFDbEIsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3B3YS1uZXh0anMtYXBwLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9pbmRleC5qcz81NTliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbXBvc2UgPSByZXF1aXJlKCdyZWR1eCcpLmNvbXBvc2U7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBvc2VXaXRoRGV2VG9vbHMgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgPyB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ29iamVjdCcpIHJldHVybiBjb21wb3NlO1xuICAgICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfTtcblxuZXhwb3J0cy5kZXZUb29sc0VuaGFuY2VyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX19cbiAgICA/IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fXG4gICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAobm9vcCkge1xuICAgICAgICAgIHJldHVybiBub29wO1xuICAgICAgICB9O1xuICAgICAgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/redux-devtools-extension/index.js\n");

/***/ })

};
;