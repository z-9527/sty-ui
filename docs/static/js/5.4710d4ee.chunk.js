(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./site/page/Swipe/index.less":
/*!************************************!*\
  !*** ./site/page/Swipe/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlL3BhZ2UvU3dpcGUvaW5kZXgubGVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NpdGUvcGFnZS9Td2lwZS9pbmRleC5sZXNzPzQyNmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./site/page/Swipe/index.less\n");

/***/ }),

/***/ "./site/page/Swipe/index.tsx":
/*!***********************************!*\
  !*** ./site/page/Swipe/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.14.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/index */ \"./components/index.ts\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./site/page/Swipe/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst data = ['#39a9ed', '#66c6f2', 'orange', 'pink'];\nfunction SwipeDemo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'swipe-demo'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u57FA\\u7840\\u7528\\u6CD5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Swipe\"], {\n    className: 'swipe',\n    onChange: console.log\n  }, data.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      style: {\n        backgroundColor: item\n      },\n      className: 'swipe-item'\n    }, index + 1);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u7EB5\\u5411\\u6EDA\\u52A8\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Swipe\"], {\n    className: 'swipe',\n    vertical: true\n  }, data.map((item, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      key: index,\n      style: {\n        backgroundColor: item\n      },\n      className: 'swipe-item'\n    }, index + 1);\n  })));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwipeDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlL3BhZ2UvU3dpcGUvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlL1N3aXBlL2luZGV4LnRzeD84OTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2lwZSB9IGZyb20gJ0AvY29tcG9uZW50cy9pbmRleCc7XG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XG5cbmNvbnN0IGRhdGEgPSBbJyMzOWE5ZWQnLCAnIzY2YzZmMicsICdvcmFuZ2UnLCAncGluayddO1xuXG5mdW5jdGlvbiBTd2lwZURlbW8oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3N3aXBlLWRlbW8nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8tYmxvY2tfX3RpdGxlJz7ln7rnoYDnlKjms5U8L2Rpdj5cbiAgICAgIDxTd2lwZSBjbGFzc05hbWU9J3N3aXBlJyBvbkNoYW5nZT17Y29uc29sZS5sb2d9PlxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGl0ZW1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzd2lwZS1pdGVtJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1N3aXBlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8tYmxvY2tfX3RpdGxlJz7nurXlkJHmu5rliqg8L2Rpdj5cbiAgICAgIDxTd2lwZSBjbGFzc05hbWU9J3N3aXBlJyB2ZXJ0aWNhbD5cbiAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpdGVtXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc3dpcGUtaXRlbSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Td2lwZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFN3aXBlRGVtbztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFJQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./site/page/Swipe/index.tsx\n");

/***/ })

}]);