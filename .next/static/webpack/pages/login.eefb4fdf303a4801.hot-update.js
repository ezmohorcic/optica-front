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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLoginRedirect\": function() { return /* binding */ useLoginRedirect; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ReduxToolkit/consts */ \"./src/ReduxToolkit/consts.js\");\n\n\nvar _s = $RefreshSig$();\nvar useLoginRedirect = function(command) {\n    _s();\n    var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function(state) {\n        return state.user.user;\n    });\n    switch(command){\n        case _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_1__.TO_LOGIN:\n            return function() {\n                if (!Object.keys(user).length) Router.push(\"/login\");\n            };\n            break;\n        case _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_1__.FROM_LOGIN:\n            return function() {\n                if (Object.keys(user).length) Router.push(\"/dummy\");\n            };\n            break;\n        default:\n            break;\n    }\n};\n_s(useLoginRedirect, \"ODc3cjw/vvoWaLFqHWcEGODyOfo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL3VzZUhvb2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUN3Qjs7QUFFMUQsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBQ0MsT0FBTyxFQUN4Qzs7SUFDSSxJQUFNQyxJQUFJLEdBQUdMLHdEQUFXLENBQUVNLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDRCxJQUFJLENBQUNBLElBQUk7S0FBQSxDQUFDO0lBQ25ELE9BQVFELE9BQU87UUFDWCxLQUFLRiwwREFBUTtZQUNULE9BQU8sV0FBTTtnQkFBRSxJQUFHLENBQUNLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxJQUFJLENBQUMsQ0FBQ0ksTUFBTSxFQUFFQyxNQUFNLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFBRTtZQUN4RSxNQUFNO1FBRU4sS0FBS1YsNERBQVU7WUFDWCxPQUFPLFdBQU07Z0JBQUUsSUFBR00sTUFBTSxDQUFDQyxJQUFJLENBQUNILElBQUksQ0FBQyxDQUFDSSxNQUFNLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUFFO1lBQ3ZFLE1BQU07UUFFTjtZQUNBLE1BQU07S0FDVDtDQUNKO0dBZllSLGdCQUFnQjs7UUFFWkgsb0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVscGVycy91c2VIb29rcy5qcz9mYzVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgRlJPTV9MT0dJTiwgVE9fTE9HSU4gfSBmcm9tIFwiLi4vLi4vUmVkdXhUb29sa2l0L2NvbnN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUxvZ2luUmVkaXJlY3QgPSAoY29tbWFuZCkgPT5cclxue1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKCBzdGF0ZSA9PiBzdGF0ZS51c2VyLnVzZXIpXHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgICBjYXNlIFRPX0xPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyBpZighT2JqZWN0LmtleXModXNlcikubGVuZ3RoKSBSb3V0ZXIucHVzaCgnL2xvZ2luJykgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEZST01fTE9HSU46XHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7IGlmKE9iamVjdC5rZXlzKHVzZXIpLmxlbmd0aCkgUm91dGVyLnB1c2goJy9kdW1teScpIH1cclxuICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJGUk9NX0xPR0lOIiwiVE9fTE9HSU4iLCJ1c2VMb2dpblJlZGlyZWN0IiwiY29tbWFuZCIsInVzZXIiLCJzdGF0ZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJSb3V0ZXIiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/helpers/useHooks.js\n");

/***/ })

});