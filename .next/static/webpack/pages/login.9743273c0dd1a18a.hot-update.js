"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/components/helpers/useHooks.js":
/*!********************************************!*\
  !*** ./src/components/helpers/useHooks.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLoginRedirect\": function() { return /* binding */ useLoginRedirect; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ReduxToolkit/consts */ \"./src/ReduxToolkit/consts.js\");\n\n\n\nvar useLoginRedirect = function(command) {\n    switch(command){\n        case _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_2__.TO_LOGIN:\n            return function() {\n                console.log(user);\n                if (!Object.keys(user).length) next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/login\");\n            };\n            break;\n        case _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_2__.FROM_LOGIN:\n            return function() {\n                var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function(state) {\n                    return state.user.user;\n                });\n                console.log(user);\n                if (Object.keys(user).length) next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/dummy\");\n            };\n            break;\n        default:\n            break;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL3VzZUhvb2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFDZ0M7QUFFMUQsSUFBTUksZ0JBQWdCLEdBQUcsU0FBQ0MsT0FBTyxFQUN4QztJQUdJLE9BQVFBLE9BQU87UUFDWCxLQUFLRiwwREFBUTtZQUNULE9BQU8sV0FBTTtnQkFFVEcsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQztnQkFDakIsSUFBRyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDLENBQUNHLE1BQU0sRUFBRVYsdURBQVcsQ0FBQyxRQUFRLENBQUM7YUFBRTtZQUM3RCxNQUFNO1FBRU4sS0FBS0MsNERBQVU7WUFDWCxPQUFPLFdBQU07Z0JBQ1QsSUFBTU0sSUFBSSxHQUFHUix3REFBVyxDQUFFYSxTQUFBQSxLQUFLOzJCQUFJQSxLQUFLLENBQUNMLElBQUksQ0FBQ0EsSUFBSTtpQkFBQSxDQUFDO2dCQUNuREYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQztnQkFDakIsSUFBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQyxDQUFDRyxNQUFNLEVBQUVWLHVEQUFXLENBQUMsUUFBUSxDQUFDO2FBQUU7WUFDNUQsTUFBTTtRQUVOO1lBQ0EsTUFBTTtLQUNUO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVscGVycy91c2VIb29rcy5qcz9mYzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBGUk9NX0xPR0lOLCBUT19MT0dJTiB9IGZyb20gXCIuLi8uLi9SZWR1eFRvb2xraXQvY29uc3RzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTG9naW5SZWRpcmVjdCA9IChjb21tYW5kKSA9PlxyXG57XHJcbiAgICBcclxuXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICBjYXNlIFRPX0xPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICAgICAgICAgICAgICBpZighT2JqZWN0LmtleXModXNlcikubGVuZ3RoKSBSb3V0ZXIucHVzaCgnL2xvZ2luJykgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEZST01fTE9HSU46XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKCBzdGF0ZSA9PiBzdGF0ZS51c2VyLnVzZXIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXModXNlcikubGVuZ3RoKSBSb3V0ZXIucHVzaCgnL2R1bW15JykgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIlJvdXRlciIsIkZST01fTE9HSU4iLCJUT19MT0dJTiIsInVzZUxvZ2luUmVkaXJlY3QiLCJjb21tYW5kIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/helpers/useHooks.js\n");

/***/ })

});