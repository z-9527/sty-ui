(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./site/page/Toast/index.less":
/*!************************************!*\
  !*** ./site/page/Toast/index.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlL3BhZ2UvVG9hc3QvaW5kZXgubGVzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NpdGUvcGFnZS9Ub2FzdC9pbmRleC5sZXNzPzEyYTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./site/page/Toast/index.less\n");

/***/ }),

/***/ "./site/page/Toast/index.tsx":
/*!***********************************!*\
  !*** ./site/page/Toast/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.14.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/index */ \"./components/index.ts\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ \"./site/page/Toast/index.less\");\n/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst config = [{\n  content: '文字提示',\n  onClose: () => console.log('onClose'),\n  afterClose: () => console.log('afterClose')\n}, {\n  content: '这是一条长文字提示，超过一定字数就会换行'\n}, {\n  content: '加载中...',\n  type: 'loading'\n}, {\n  content: '成功文案',\n  type: 'success'\n}, {\n  content: '失败文案',\n  type: 'fail'\n}, {\n  content: '自定义图标',\n  icon: 'like-o'\n}, {\n  content: '自定义图标',\n  icon: 'cart-o'\n}];\nfunction ToastDemo() {\n  function showToast(param) {\n    _components_index__WEBPACK_IMPORTED_MODULE_1__[\"Toast\"][param.type || 'info'](param);\n  }\n  function showToast2() {\n    let secondsToGo = 5;\n    const {\n      close,\n      update\n    } = _components_index__WEBPACK_IMPORTED_MODULE_1__[\"Toast\"].info({\n      content: '5秒后手动销毁',\n      duration: 0\n    });\n    const timer = setInterval(() => {\n      secondsToGo -= 1;\n      update({\n        content: `${secondsToGo}秒后手动销毁`\n      });\n    }, 1000);\n    setTimeout(() => {\n      clearInterval(timer);\n      close();\n    }, 5000);\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'toast-demo'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u57FA\\u7840\\u7528\\u6CD5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: '0 16px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    onClick: () => showToast(config[0])\n  }, \"\\u6587\\u5B57\\u63D0\\u793A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    onClick: () => showToast(config[1])\n  }, \"\\u957F\\u6587\\u5B57\\u63D0\\u793A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u52A0\\u8F7D\\u63D0\\u793A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: '0 16px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    onClick: () => showToast(config[2])\n  }, \"\\u52A0\\u8F7D\\u63D0\\u793A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u6210\\u529F\\u5931\\u8D25\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: '0 16px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    type: 'primary',\n    onClick: () => showToast(config[3])\n  }, \"\\u6210\\u529F\\u63D0\\u793A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    type: 'warning',\n    onClick: () => showToast(config[4])\n  }, \"\\u5931\\u8D25\\u63D0\\u793A\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u81EA\\u5B9A\\u4E49\\u56FE\\u6807\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: '0 16px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    onClick: () => showToast(config[5])\n  }, \"\\u81EA\\u5B9A\\u4E49\\u56FE\\u6807\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    onClick: () => showToast(config[6])\n  }, \"\\u81EA\\u5B9A\\u4E49\\u56FE\\u6807\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u624B\\u52A8\\u9500\\u6BC1\\u548C\\u66F4\\u65B0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      padding: '0 16px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    inline: true,\n    onClick: showToast2\n  }, \"\\u624B\\u52A8\\u9500\\u6BC1\")));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToastDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlL3BhZ2UvVG9hc3QvaW5kZXgudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2l0ZS9wYWdlL1RvYXN0L2luZGV4LnRzeD9jMWFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUb2FzdCwgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IFRvYXN0UHJvcHMgfSBmcm9tICdAL2NvbXBvbmVudHMvdG9hc3QnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuXG5jb25zdCBjb25maWc6IEFycmF5PFRvYXN0UHJvcHM+ID0gW1xuICB7XG4gICAgY29udGVudDogJ+aWh+Wtl+aPkOekuicsXG4gICAgb25DbG9zZTogKCkgPT4gY29uc29sZS5sb2coJ29uQ2xvc2UnKSxcbiAgICBhZnRlckNsb3NlOiAoKSA9PiBjb25zb2xlLmxvZygnYWZ0ZXJDbG9zZScpXG4gIH0sXG4gIHsgY29udGVudDogJ+i/meaYr+S4gOadoemVv+aWh+Wtl+aPkOekuu+8jOi2hei/h+S4gOWumuWtl+aVsOWwseS8muaNouihjCcgfSxcbiAgeyBjb250ZW50OiAn5Yqg6L295LitLi4uJywgdHlwZTogJ2xvYWRpbmcnIH0sXG4gIHsgY29udGVudDogJ+aIkOWKn+aWh+ahiCcsIHR5cGU6ICdzdWNjZXNzJyB9LFxuICB7IGNvbnRlbnQ6ICflpLHotKXmlofmoYgnLCB0eXBlOiAnZmFpbCcgfSxcbiAgeyBjb250ZW50OiAn6Ieq5a6a5LmJ5Zu+5qCHJywgaWNvbjogJ2xpa2UtbycgfSxcbiAgeyBjb250ZW50OiAn6Ieq5a6a5LmJ5Zu+5qCHJywgaWNvbjogJ2NhcnQtbycgfVxuXTtcbmZ1bmN0aW9uIFRvYXN0RGVtbygpIHtcbiAgZnVuY3Rpb24gc2hvd1RvYXN0KHBhcmFtKSB7XG4gICAgVG9hc3RbcGFyYW0udHlwZSB8fCAnaW5mbyddKHBhcmFtKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dUb2FzdDIoKSB7XG4gICAgbGV0IHNlY29uZHNUb0dvID0gNTtcbiAgICBjb25zdCB7IGNsb3NlLCB1cGRhdGUgfSA9IFRvYXN0LmluZm8oe1xuICAgICAgY29udGVudDogJzXnp5LlkI7miYvliqjplIDmr4EnLFxuICAgICAgZHVyYXRpb246IDBcbiAgICB9KTtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNlY29uZHNUb0dvIC09IDE7XG4gICAgICB1cGRhdGUoe1xuICAgICAgICBjb250ZW50OiBgJHtzZWNvbmRzVG9Hb33np5LlkI7miYvliqjplIDmr4FgXG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgY2xvc2UoKTtcbiAgICB9LCA1MDAwKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd0b2FzdC1kZW1vJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZW1vLWJsb2NrX190aXRsZSc+5Z+656GA55So5rOVPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDE2cHgnIH19PlxuICAgICAgICA8QnV0dG9uIGlubGluZSBvbkNsaWNrPXsoKSA9PiBzaG93VG9hc3QoY29uZmlnWzBdKX0+XG4gICAgICAgICAg5paH5a2X5o+Q56S6XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGlubGluZSBvbkNsaWNrPXsoKSA9PiBzaG93VG9hc3QoY29uZmlnWzFdKX0+XG4gICAgICAgICAg6ZW/5paH5a2X5o+Q56S6XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZW1vLWJsb2NrX190aXRsZSc+5Yqg6L295o+Q56S6PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDE2cHgnIH19PlxuICAgICAgICA8QnV0dG9uIGlubGluZSBvbkNsaWNrPXsoKSA9PiBzaG93VG9hc3QoY29uZmlnWzJdKX0+XG4gICAgICAgICAg5Yqg6L295o+Q56S6XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGVtby1ibG9ja19fdGl0bGUnPuaIkOWKn+Wksei0pTwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMCAxNnB4JyB9fT5cbiAgICAgICAgPEJ1dHRvbiBpbmxpbmUgdHlwZT0ncHJpbWFyeScgb25DbGljaz17KCkgPT4gc2hvd1RvYXN0KGNvbmZpZ1szXSl9PlxuICAgICAgICAgIOaIkOWKn+aPkOekulxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBpbmxpbmUgdHlwZT0nd2FybmluZycgb25DbGljaz17KCkgPT4gc2hvd1RvYXN0KGNvbmZpZ1s0XSl9PlxuICAgICAgICAgIOWksei0peaPkOekulxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8tYmxvY2tfX3RpdGxlJz7oh6rlrprkuYnlm77moIc8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzAgMTZweCcgfX0+XG4gICAgICAgIDxCdXR0b24gaW5saW5lIG9uQ2xpY2s9eygpID0+IHNob3dUb2FzdChjb25maWdbNV0pfT5cbiAgICAgICAgICDoh6rlrprkuYnlm77moIdcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gaW5saW5lIG9uQ2xpY2s9eygpID0+IHNob3dUb2FzdChjb25maWdbNl0pfT5cbiAgICAgICAgICDoh6rlrprkuYnlm77moIdcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZW1vLWJsb2NrX190aXRsZSc+5omL5Yqo6ZSA5q+B5ZKM5pu05pawPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcwIDE2cHgnIH19PlxuICAgICAgICA8QnV0dG9uIGlubGluZSBvbkNsaWNrPXtzaG93VG9hc3QyfT5cbiAgICAgICAgICDmiYvliqjplIDmr4FcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFRvYXN0RGVtbztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./site/page/Toast/index.tsx\n");

/***/ })

}]);