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

/***/ "./src/components/helpers/inputsReducer.js":
/*!*************************************************!*\
  !*** ./src/components/helpers/inputsReducer.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputsReducer\": function() { return /* binding */ inputsReducer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar inputsReducer = function(inputs, handleInput, css) {\n    return function(name, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: css.inputShell,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: css.inputShell__label,\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ezmoh\\\\OneDrive\\\\Documentos\\\\GitHub\\\\optica-front\\\\src\\\\components\\\\helpers\\\\inputsReducer.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: css.inputShell__input,\n                    type: name.includes(\"password\") ? \"password\" : \"text\",\n                    name: name,\n                    value: inputs[name],\n                    onChange: handleInput\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ezmoh\\\\OneDrive\\\\Documentos\\\\GitHub\\\\optica-front\\\\src\\\\components\\\\helpers\\\\inputsReducer.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, \"inputCredential_\".concat(index), true, {\n            fileName: \"C:\\\\Users\\\\ezmoh\\\\OneDrive\\\\Documentos\\\\GitHub\\\\optica-front\\\\src\\\\components\\\\helpers\\\\inputsReducer.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, _this);\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWxwZXJzL2lucHV0c1JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7O0FBQU8sSUFBTUEsYUFBYSxHQUFHLFNBQUNDLE1BQU0sRUFBQ0MsV0FBVyxFQUFDQyxHQUFHO1dBQUssU0FBQ0MsSUFBSSxFQUFDQyxLQUFLLEVBQ3BFO1FBQ0kscUJBQ0ksOERBQUNDLEtBQUc7WUFBa0NDLFNBQVMsRUFBRUosR0FBRyxDQUFDSyxVQUFVOzs4QkFDM0QsOERBQUNDLE9BQUs7b0JBQUNGLFNBQVMsRUFBRUosR0FBRyxDQUFDTyxpQkFBaUI7OEJBQUdOLElBQUk7Ozs7O3lCQUFTOzhCQUN2RCw4REFBQ08sT0FBSztvQkFDRkosU0FBUyxFQUFFSixHQUFHLENBQUNTLGlCQUFpQjtvQkFDaENDLElBQUksRUFBRVQsSUFBSSxDQUFDVSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxHQUFHLE1BQU07b0JBQ3JEVixJQUFJLEVBQUVBLElBQUk7b0JBQ1ZXLEtBQUssRUFBRWQsTUFBTSxDQUFDRyxJQUFJLENBQUM7b0JBQ25CWSxRQUFRLEVBQUVkLFdBQVc7Ozs7O3lCQUN2Qjs7V0FSSSxrQkFBaUIsQ0FBUSxPQUFORyxLQUFLLENBQUU7Ozs7aUJBUzlCLENBRVQ7S0FDSjtDQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hlbHBlcnMvaW5wdXRzUmVkdWNlci5qcz82MDIyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0c1JlZHVjZXIgPSAoaW5wdXRzLGhhbmRsZUlucHV0LGNzcykgPT4gKG5hbWUsaW5kZXgpID0+XHJcbntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGtleT17YGlucHV0Q3JlZGVudGlhbF8ke2luZGV4fWB9IGNsYXNzTmFtZT17Y3NzLmlucHV0U2hlbGx9PlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjc3MuaW5wdXRTaGVsbF9fbGFiZWx9PntuYW1lfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3NzLmlucHV0U2hlbGxfX2lucHV0fSBcclxuICAgICAgICAgICAgICAgIHR5cGU9e25hbWUuaW5jbHVkZXMoXCJwYXNzd29yZFwiKSA/IFwicGFzc3dvcmRcIiA6IFwidGV4dFwifSBcclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0c1tuYW1lXX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJpbnB1dHNSZWR1Y2VyIiwiaW5wdXRzIiwiaGFuZGxlSW5wdXQiLCJjc3MiLCJuYW1lIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dFNoZWxsIiwibGFiZWwiLCJpbnB1dFNoZWxsX19sYWJlbCIsImlucHV0IiwiaW5wdXRTaGVsbF9faW5wdXQiLCJ0eXBlIiwiaW5jbHVkZXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/helpers/inputsReducer.js\n");

/***/ })

});