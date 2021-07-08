/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreact_tailwindcss_biolerplate"] = self["webpackChunkreact_tailwindcss_biolerplate"] || []).push([["React_Files_Pages_Register_jsx"],{

/***/ "./React_Files/Pages/Register.jsx":
/*!****************************************!*\
  !*** ./React_Files/Pages/Register.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Register)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nfunction Register(props) {\n  var csrfmiddlewaretoken = props.csrfmiddlewaretoken;\n  var csrfCookie = props.csrfCookie;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!csrfCookie && !csrfmiddlewaretoken) {\n      document.querySelector(\"body\").innerHTML = \"\";\n      alert(\"Security Layer not found\");\n    }\n  }, []);\n  var formData = {}; // This will store important data send to server\n\n  var registerBtnData = \"\"; // This will store restore state for sign in button\n\n  var LoadingAndFetchData = function LoadingAndFetchData() {\n    // Storing data from form to formData variable as object\n    document.querySelectorAll(\"#authenticationForm input\").forEach(function (e) {\n      formData[e.name] = e.value;\n    }); // Changing singinbtn state to loading\n\n    var registerBtn = document.querySelector(\"#submitAuthenticationBtn\");\n    registerBtnData = registerBtn.innerHTML;\n    registerBtn.innerHTML = \"<div class='loading'></div>\";\n  }; // This will restore the sign btn state to previous one\n\n\n  var resetResgisterBtn = function resetResgisterBtn() {\n    var registerBtn = document.querySelector(\"#submitAuthenticationBtn\");\n    registerBtn.innerHTML = registerBtnData;\n  }; // This will ensure if the both the passwords are same\n\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  function checkPass() {\n    setError(\"\");\n    var a = document.querySelector(\"input[name='password']\");\n    var b = document.querySelector(\"input[name='confirmuserpassword']\");\n\n    if (b.value != a.value) {\n      setError(\"Both password must match\");\n      return false;\n    } else {\n      return true;\n    }\n  }\n\n  var SubmitForm = function SubmitForm() {\n    if (checkPass()) {\n      LoadingAndFetchData();\n      fetch(\"./api/account/signin\", {\n        method: \"POST\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json; charset=UTF-8\",\n          \"X-CSRFToken\": csrfmiddlewaretoken\n        },\n        body: JSON.stringify(formData)\n      }).then(function (r) {\n        return r.json();\n      }).then(function (data) {\n        /*\r\n         * This will work only\r\n         * if there is any type of error\r\n         * else the user will be redirected to index page\r\n         */\n        resetResgisterBtn();\n        console.log(data);\n\n        if (data.error) {\n          setError(data.error);\n        } else {\n          location.replace(\"./\");\n        }\n      })[\"catch\"](function (e) {\n        resetResgisterBtn();\n        console.log(\"There is a catch \".concat(e));\n      });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n    id: \"authenticationForm\",\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      SubmitForm();\n    },\n    className: \"mx-auto my-12 md:my-16 p-6 bg-white space-y-4 max-w-sm  rounded-lg shadow-md\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"text-2xl -mt-2\"\n  }, \"Register\"), error !== \"\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"text-md text-red-500 font-bold\"\n  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"flex space-x-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"First Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    name: \"first_name\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Last Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"text\",\n    name: \"last_name\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Email\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    placeholder: \"example@mail.com\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"Confirm Password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"password\",\n    name: \"confirmuserpassword\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    id: \"submitAuthenticationBtn\",\n    type: \"submit\",\n    className: \"btn-primary w-full\"\n  }, \"Create New Account\")));\n}\n\n//# sourceURL=webpack://react-tailwindcss-biolerplate/./React_Files/Pages/Register.jsx?");

/***/ })

}]);