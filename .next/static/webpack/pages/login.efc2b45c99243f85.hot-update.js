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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useLoginRedirect\": function() { return /* binding */ useLoginRedirect; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ReduxToolkit/consts */ \"./src/ReduxToolkit/consts.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar useLoginRedirect = function(command) {\n    _s();\n    var user1 = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function(state) {\n        return state.user.user;\n    });\n    switch(command){\n        case _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_2__.TO_LOGIN:\n            return function() {\n                console.log(user1);\n                if (!Object.keys(user1).length) next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/login\");\n            };\n            break;\n        case _ReduxToolkit_consts__WEBPACK_IMPORTED_MODULE_2__.FROM_LOGIN:\n            return function() {\n                var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(function(state) {\n                    return state.user.user;\n                });\n                console.log(user);\n                if (Object.keys(user).length) next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/dummy\");\n            };\n            break;\n        default:\n            break;\n    }\n};\n_s(useLoginRedirect, \"ODc3cjw/vvoWaLFqHWcEGODyOfo=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL3VzZUhvb2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1Q7QUFDZ0M7O0FBRTFELElBQU1JLGdCQUFnQixHQUFHLFNBQUNDLE9BQU8sRUFDeEM7O0lBQ0ksSUFBTUMsS0FBSSxHQUFHTix3REFBVyxDQUFFTyxTQUFBQSxLQUFLO2VBQUlBLEtBQUssQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJO0tBQUEsQ0FBQztJQUVuRCxPQUFRRCxPQUFPO1FBQ1gsS0FBS0YsMERBQVE7WUFDVCxPQUFPLFdBQU07Z0JBRVRLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxLQUFJLENBQUM7Z0JBQ2pCLElBQUcsQ0FBQ0ksTUFBTSxDQUFDQyxJQUFJLENBQUNMLEtBQUksQ0FBQyxDQUFDTSxNQUFNLEVBQUVYLHVEQUFXLENBQUMsUUFBUSxDQUFDO2FBQUU7WUFDN0QsTUFBTTtRQUVOLEtBQUtDLDREQUFVO1lBQ1gsT0FBTyxXQUFNO2dCQUNULElBQU1JLElBQUksR0FBR04sd0RBQVcsQ0FBRU8sU0FBQUEsS0FBSzsyQkFBSUEsS0FBSyxDQUFDRCxJQUFJLENBQUNBLElBQUk7aUJBQUEsQ0FBQztnQkFDbkRFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxJQUFJLENBQUM7Z0JBQ2pCLElBQUdJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQ00sTUFBTSxFQUFFWCx1REFBVyxDQUFDLFFBQVEsQ0FBQzthQUFFO1lBQzVELE1BQU07UUFFTjtZQUNBLE1BQU07S0FDVDtDQUNKO0dBdEJZRyxnQkFBZ0I7O1FBRVpKLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvdXNlSG9va3MuanM/ZmM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgRlJPTV9MT0dJTiwgVE9fTE9HSU4gfSBmcm9tIFwiLi4vLi4vUmVkdXhUb29sa2l0L2NvbnN0c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUxvZ2luUmVkaXJlY3QgPSAoY29tbWFuZCkgPT5cclxue1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKCBzdGF0ZSA9PiBzdGF0ZS51c2VyLnVzZXIpXHJcblxyXG4gICAgc3dpdGNoIChjb21tYW5kKSB7XHJcbiAgICAgICAgY2FzZSBUT19MT0dJTjpcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICAgICAgICAgICAgaWYoIU9iamVjdC5rZXlzKHVzZXIpLmxlbmd0aCkgUm91dGVyLnB1c2goJy9sb2dpbicpIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBGUk9NX0xPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4geyBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvciggc3RhdGUgPT4gc3RhdGUudXNlci51c2VyKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcilcclxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHVzZXIpLmxlbmd0aCkgUm91dGVyLnB1c2goJy9kdW1teScpIH1cclxuICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJSb3V0ZXIiLCJGUk9NX0xPR0lOIiwiVE9fTE9HSU4iLCJ1c2VMb2dpblJlZGlyZWN0IiwiY29tbWFuZCIsInVzZXIiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/helpers/useHooks.js\n");

/***/ })

});