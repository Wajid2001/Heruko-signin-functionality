/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_tailwindcss_biolerplate"] = self["webpackChunkreact_tailwindcss_biolerplate"] || []).push([["React_Files_Pages_Home_jsx"],{

/***/ "./React_Files/Components/Window.jsx":
/*!*******************************************!*\
  !*** ./React_Files/Components/Window.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Window = function Window(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"shadow-lg rounded-xl mx-auto max-w-lg\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"rounded-xl ring-1 ring-black ring-opacity-5 overflow-y-hidden\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"py-2 grid items-center gap-6 px-4 rounded-tr-xl sm:rounded-t-xl bg-gradient-to-b from-gray-50 to-gray-100\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex space-x-1.5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-3 h-3 rounded-full bg-gray-300\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-3 h-3 rounded-full bg-gray-300\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"w-3 h-3 rounded-full bg-gray-300\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"border border-black border-opacity-5 rounded-md overflow-hidden shadow-sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"bg-gradient-to-b from-white to-gray-50 text-sm py-1.5 text-center\"\n  }, props.title))), props.content));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Window);\n\n//# sourceURL=webpack://react-tailwindcss-biolerplate/./React_Files/Components/Window.jsx?");

/***/ }),

/***/ "./React_Files/Pages/Home.jsx":
/*!************************************!*\
  !*** ./React_Files/Pages/Home.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Components_Window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Window */ \"./React_Files/Components/Window.jsx\");\n\n\nvar imgUrl = \"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80\";\nfunction Home() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"mt-16\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Window__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, \"./home\"),\n    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      className: \"w-full\",\n      src: imgUrl\n    })\n  }));\n}\n\n//# sourceURL=webpack://react-tailwindcss-biolerplate/./React_Files/Pages/Home.jsx?");

/***/ })

}]);