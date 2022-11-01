(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./site/page/Dialog/index.tsx":
/*!************************************!*\
  !*** ./site/page/Dialog/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/_react@16.14.0@react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/index */ \"./components/index.ts\");\n\n\nfunction DialogDemo() {\n  const [visible, setVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [config, setConfig] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  function asyncClose() {\n    return new Promise(resolve => {\n      setTimeout(() => {\n        resolve();\n        setVisible(false);\n      }, 2000);\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u57FA\\u7840\\u7528\\u6CD5\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u63D0\\u793A\\u5F39\\u7A97',\n    arrow: 'right',\n    onClick: () => {\n      setConfig({\n        footerActions: ['ok'],\n        children: '代码是写出来给人看的，附带能在机器上运行'\n      });\n      setVisible(true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u63D0\\u793A\\u5F39\\u7A97(\\u65E0\\u6807\\u9898)',\n    arrow: 'right',\n    onClick: () => {\n      setConfig({\n        footerActions: ['ok'],\n        children: '代码是写出来给人看的，附带能在机器上运行',\n        title: ''\n      });\n      setVisible(true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u786E\\u8BA4\\u5F39\\u7A97',\n    arrow: 'right',\n    onClick: () => {\n      setConfig({\n        children: '代码是写出来给人看的，附带能在机器上运行',\n        okProps: {\n          style: {\n            color: 'red'\n          }\n        }\n      });\n      setVisible(true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u5F02\\u6B65\\u5173\\u95ED\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u5F02\\u6B65\\u5173\\u95ED',\n    arrow: 'right',\n    onClick: () => {\n      setConfig({\n        children: '代码是写出来给人看的，附带能在机器上运行',\n        onOk: asyncClose\n      });\n      setVisible(true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u66F4\\u591A\\u6309\\u94AE\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u66F4\\u591A\\u6309\\u94AE',\n    arrow: 'right',\n    onClick: () => {\n      setConfig({\n        children: '代码是写出来给人看的，附带能在机器上运行',\n        onOk: asyncClose,\n        footer: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          key: 'a',\n          onClick: () => setVisible(false)\n        }, \"\\u9009\\u9879\\u4E00\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          key: 'b',\n          onClick: () => setVisible(false)\n        }, \"\\u9009\\u9879\\u4E8C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          key: 'c',\n          onClick: () => setVisible(false)\n        }, \"\\u9009\\u9879\\u4E09\")]\n      });\n      setVisible(true);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Dialog\"], Object.assign({\n    visible: visible,\n    onOk: () => {\n      console.log('ok');\n      setVisible(false);\n    },\n    onCancel: () => {\n      console.log('onCancel');\n      setVisible(false);\n    }\n  }, config), config.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: 'demo-block__title'\n  }, \"\\u7EC4\\u4EF6\\u8C03\\u7528\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u63D0\\u793A\\u5F39\\u7A97',\n    arrow: 'right',\n    onClick: () => {\n      _components_index__WEBPACK_IMPORTED_MODULE_1__[\"Dialog\"].show({\n        title: '提示',\n        content: '这是提示弹窗'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"], {\n    title: '\\u786E\\u8BA4\\u5F39\\u7A97',\n    arrow: 'right',\n    onClick: () => {\n      _components_index__WEBPACK_IMPORTED_MODULE_1__[\"Dialog\"].confirm({\n        title: '提示',\n        content: '这是确认弹窗',\n        onOk: () => console.log('ok'),\n        onCancel: () => console.log('onCancel'),\n        onClose: () => console.log('onClose')\n      });\n    }\n  }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialogDemo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlL3BhZ2UvRGlhbG9nL2luZGV4LnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NpdGUvcGFnZS9EaWFsb2cvaW5kZXgudHN4PzNjOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGlhbG9nLCBDZWxsLCBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgRGlhbG9nUHJvcHMgfSBmcm9tICdAL2NvbXBvbmVudHMvZGlhbG9nJztcblxuZnVuY3Rpb24gRGlhbG9nRGVtbygpIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gdXNlU3RhdGU8RGlhbG9nUHJvcHM+KHt9KTtcbiAgZnVuY3Rpb24gYXN5bmNDbG9zZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZW1vLWJsb2NrX190aXRsZSc+5Z+656GA55So5rOVPC9kaXY+XG4gICAgICA8Q2VsbFxuICAgICAgICB0aXRsZT0n5o+Q56S65by556qXJ1xuICAgICAgICBhcnJvdz0ncmlnaHQnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRDb25maWcoe1xuICAgICAgICAgICAgZm9vdGVyQWN0aW9uczogWydvayddLFxuICAgICAgICAgICAgY2hpbGRyZW46ICfku6PnoIHmmK/lhpnlh7rmnaXnu5nkurrnnIvnmoTvvIzpmYTluKbog73lnKjmnLrlmajkuIrov5DooYwnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Q2VsbFxuICAgICAgICB0aXRsZT0n5o+Q56S65by556qXKOaXoOagh+mimCknXG4gICAgICAgIGFycm93PSdyaWdodCdcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldENvbmZpZyh7XG4gICAgICAgICAgICBmb290ZXJBY3Rpb25zOiBbJ29rJ10sXG4gICAgICAgICAgICBjaGlsZHJlbjogJ+S7o+eggeaYr+WGmeWHuuadpee7meS6uueci+eahO+8jOmZhOW4puiDveWcqOacuuWZqOS4iui/kOihjCcsXG4gICAgICAgICAgICB0aXRsZTogJydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxDZWxsXG4gICAgICAgIHRpdGxlPSfnoa7orqTlvLnnqpcnXG4gICAgICAgIGFycm93PSdyaWdodCdcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldENvbmZpZyh7XG4gICAgICAgICAgICBjaGlsZHJlbjogJ+S7o+eggeaYr+WGmeWHuuadpee7meS6uueci+eahO+8jOmZhOW4puiDveWcqOacuuWZqOS4iui/kOihjCcsXG4gICAgICAgICAgICBva1Byb3BzOiB7IHN0eWxlOiB7IGNvbG9yOiAncmVkJyB9IH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZW1vLWJsb2NrX190aXRsZSc+5byC5q2l5YWz6ZetPC9kaXY+XG4gICAgICA8Q2VsbFxuICAgICAgICB0aXRsZT0n5byC5q2l5YWz6ZetJ1xuICAgICAgICBhcnJvdz0ncmlnaHQnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRDb25maWcoe1xuICAgICAgICAgICAgY2hpbGRyZW46ICfku6PnoIHmmK/lhpnlh7rmnaXnu5nkurrnnIvnmoTvvIzpmYTluKbog73lnKjmnLrlmajkuIrov5DooYwnLFxuICAgICAgICAgICAgb25PazogYXN5bmNDbG9zZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8tYmxvY2tfX3RpdGxlJz7mm7TlpJrmjInpkq48L2Rpdj5cbiAgICAgIDxDZWxsXG4gICAgICAgIHRpdGxlPSfmm7TlpJrmjInpkq4nXG4gICAgICAgIGFycm93PSdyaWdodCdcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHNldENvbmZpZyh7XG4gICAgICAgICAgICBjaGlsZHJlbjogJ+S7o+eggeaYr+WGmeWHuuadpee7meS6uueci+eahO+8jOmZhOW4puiDveWcqOacuuWZqOS4iui/kOihjCcsXG4gICAgICAgICAgICBvbk9rOiBhc3luY0Nsb3NlLFxuICAgICAgICAgICAgZm9vdGVyOiBbXG4gICAgICAgICAgICAgIDxCdXR0b24ga2V5PXsnYSd9IG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfT5cbiAgICAgICAgICAgICAgICDpgInpobnkuIBcbiAgICAgICAgICAgICAgPC9CdXR0b24+LFxuICAgICAgICAgICAgICA8QnV0dG9uIGtleT17J2InfSBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAg6YCJ6aG55LqMXG4gICAgICAgICAgICAgIDwvQnV0dG9uPixcbiAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9eydjJ30gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PlxuICAgICAgICAgICAgICAgIOmAiemhueS4iVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPERpYWxvZ1xuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxuICAgICAgICBvbk9rPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XG4gICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ29uQ2FuY2VsJyk7XG4gICAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICAgIHsuLi5jb25maWd9XG4gICAgICA+XG4gICAgICAgIHtjb25maWcuY2hpbGRyZW59XG4gICAgICA8L0RpYWxvZz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbW8tYmxvY2tfX3RpdGxlJz7nu4Tku7bosIPnlKg8L2Rpdj5cbiAgICAgIDxDZWxsXG4gICAgICAgIHRpdGxlPSfmj5DnpLrlvLnnqpcnXG4gICAgICAgIGFycm93PSdyaWdodCdcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIERpYWxvZy5zaG93KHtcbiAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfov5nmmK/mj5DnpLrlvLnnqpcnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENlbGxcbiAgICAgICAgdGl0bGU9J+ehruiupOW8ueeqlydcbiAgICAgICAgYXJyb3c9J3JpZ2h0J1xuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgRGlhbG9nLmNvbmZpcm0oe1xuICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgY29udGVudDogJ+i/meaYr+ehruiupOW8ueeqlycsXG4gICAgICAgICAgICBvbk9rOiAoKSA9PiBjb25zb2xlLmxvZygnb2snKSxcbiAgICAgICAgICAgIG9uQ2FuY2VsOiAoKSA9PiBjb25zb2xlLmxvZygnb25DYW5jZWwnKSxcbiAgICAgICAgICAgIG9uQ2xvc2U6ICgpID0+IGNvbnNvbGUubG9nKCdvbkNsb3NlJylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBEaWFsb2dEZW1vO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./site/page/Dialog/index.tsx\n");

/***/ })

}]);