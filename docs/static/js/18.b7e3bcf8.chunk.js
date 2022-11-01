(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./site/page/Select/index.tsx":
/*!************************************!*\
  !*** ./site/page/Select/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.14.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/index */ \"./components/index.ts\");\n\n\nconst dataSource1 = new Array(10).fill({}).map((item, index) => ({\n  label: `选项${index + 1}`,\n  value: index + 1\n}));\nconst dataSource2 = new Array(10).fill({}).map((item, index) => ({\n  label: `选项${index + 1}`,\n  value: index + 1,\n  disabled: !!(index % 2)\n}));\nfunction SelectDemo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u57FA\\u7840\\u7528\\u6CD5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    dataSource: dataSource1,\n    mode: 'single'\n  }, \"\\u5355\\u9009\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    dataSource: dataSource1,\n    mode: 'multiple'\n  }, \"\\u591A\\u9009\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    dataSource: dataSource2,\n    mode: 'multiple'\n  }, \"\\u7981\\u7528\\u9009\\u9879\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Select\"], {\n    dataSource: dataSource1,\n    mode: 'multiple',\n    loading: true\n  }, \"\\u52A0\\u8F7D\\u72B6\\u6001\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlL3BhZ2UvU2VsZWN0L2luZGV4LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NpdGUvcGFnZS9TZWxlY3QvaW5kZXgudHN4PzFkZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gJ0AvY29tcG9uZW50cy9pbmRleCc7XG5cbmNvbnN0IGRhdGFTb3VyY2UxID0gbmV3IEFycmF5KDEwKS5maWxsKHt9KS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICBsYWJlbDogYOmAiemhuSR7aW5kZXggKyAxfWAsXG4gIHZhbHVlOiBpbmRleCArIDFcbn0pKTtcblxuY29uc3QgZGF0YVNvdXJjZTIgPSBuZXcgQXJyYXkoMTApLmZpbGwoe30pLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7XG4gIGxhYmVsOiBg6YCJ6aG5JHtpbmRleCArIDF9YCxcbiAgdmFsdWU6IGluZGV4ICsgMSxcbiAgZGlzYWJsZWQ6ICEhKGluZGV4ICUgMilcbn0pKTtcblxuZnVuY3Rpb24gU2VsZWN0RGVtbygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8tYmxvY2tfX3RpdGxlJz7ln7rnoYDnlKjms5U8L2Rpdj5cbiAgICAgIDxTZWxlY3QgZGF0YVNvdXJjZT17ZGF0YVNvdXJjZTF9IG1vZGU9J3NpbmdsZSc+XG4gICAgICAgIOWNlemAiVxuICAgICAgPC9TZWxlY3Q+XG4gICAgICA8U2VsZWN0IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2UxfSBtb2RlPSdtdWx0aXBsZSc+XG4gICAgICAgIOWkmumAiVxuICAgICAgPC9TZWxlY3Q+XG4gICAgICA8U2VsZWN0IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2UyfSBtb2RlPSdtdWx0aXBsZSc+XG4gICAgICAgIOemgeeUqOmAiemhuVxuICAgICAgPC9TZWxlY3Q+XG4gICAgICA8U2VsZWN0IGRhdGFTb3VyY2U9e2RhdGFTb3VyY2UxfSBtb2RlPSdtdWx0aXBsZScgbG9hZGluZz5cbiAgICAgICAg5Yqg6L2954q25oCBXG4gICAgICA8L1NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdERlbW87XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./site/page/Select/index.tsx\n");

/***/ })

}]);