(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[7052],{

/***/ 66795
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64467);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74822);








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),
    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];
      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }
      return acc;
    }, {}),
    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),
    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),
    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),
    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),
    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Container(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
    _props$fixed = props.fixed,
    fixed = _props$fixed === void 0 ? false : _props$fixed,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(String(maxWidth)))]),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiContainer'
})(Container));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 52907
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);






var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },
  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
    disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
    classes = props.classes,
    className = props.className,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["disableSpacing", "classes", "className"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiDialogActions'
})(DialogActions));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 85883
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66187);







var styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogTitle(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$disableTypogra = props.disableTypography,
    disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["children", "classes", "className", "disableTypography"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    component: "h2",
    variant: "h6"
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiDialogTitle'
})(DialogTitle));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 99229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66187);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36612);








var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },
  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },
  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },
  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },
  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },
  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},
  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$disablePointer = props.disablePointerEvents,
    disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
    _props$disableTypogra = props.disableTypography,
    disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
    position = props.position,
    variantProp = props.variant,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);
  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__/* .useFormControl */ .t)() || {};
  var variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (false) // removed by dead control flow
{}
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    color: "textSecondary"
  }, children) : children));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 99081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  capitalize: () => (/* reexport */ capitalize/* default */.A),
  createChainedFunction: () => (/* reexport */ createChainedFunction/* default */.A),
  createSvgIcon: () => (/* reexport */ createSvgIcon/* default */.A),
  debounce: () => (/* reexport */ debounce/* default */.A),
  deprecatedPropType: () => (/* reexport */ deprecatedPropType),
  isMuiElement: () => (/* reexport */ isMuiElement/* default */.A),
  ownerDocument: () => (/* reexport */ ownerDocument/* default */.A),
  ownerWindow: () => (/* reexport */ ownerWindow/* default */.A),
  requirePropFactory: () => (/* reexport */ requirePropFactory),
  setRef: () => (/* reexport */ setRef/* default */.A),
  unstable_useId: () => (/* reexport */ unstable_useId/* default */.A),
  unsupportedProp: () => (/* reexport */ unsupportedProp),
  useControlled: () => (/* reexport */ useControlled/* default */.A),
  useEventCallback: () => (/* reexport */ useEventCallback/* default */.A),
  useForkRef: () => (/* reexport */ useForkRef/* default */.A),
  useIsFocusVisible: () => (/* reexport */ useIsFocusVisible/* default */.A)
});

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(74822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__(146);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(91917);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__(27355);
;// ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (true) {
    return function () {
      return null;
    };
  }
  // removed by dead control flow

}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/isMuiElement.js
var isMuiElement = __webpack_require__(64867);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerDocument.js
var ownerDocument = __webpack_require__(79892);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerWindow.js
var ownerWindow = __webpack_require__(57249);
;// ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js
function requirePropFactory(componentNameInError) {
  if (true) {
    return function () {
      return null;
    };
  }
  // removed by dead control flow
 var requireProp; 
  // removed by dead control flow

}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/setRef.js
var setRef = __webpack_require__(29189);
;// ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (true) {
    return null;
  }
  // removed by dead control flow
 var propFullNameSafe; 
  // removed by dead control flow

  // removed by dead control flow

}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
var useControlled = __webpack_require__(51051);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__(32158);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(60768);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/unstable_useId.js
var unstable_useId = __webpack_require__(42237);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__(54455);
;// ./node_modules/@material-ui/core/esm/utils/index.js













 // eslint-disable-next-line camelcase




/***/ },

/***/ 7740
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(24994);
var _interopRequireWildcard = __webpack_require__(6305);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(59846));
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/React.createElement("path", {
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), 'AttachFile');
exports.A = _default;

/***/ },

/***/ 72512
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(24994);
var _interopRequireWildcard = __webpack_require__(6305);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(59846));
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/React.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline');
exports.A = _default;

/***/ },

/***/ 10559
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(24994);
var _interopRequireWildcard = __webpack_require__(6305);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(59846));
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/React.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');
exports.A = _default;

/***/ },

/***/ 71191
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(24994);
var _interopRequireWildcard = __webpack_require__(6305);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(59846));
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/React.createElement("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');
exports.A = _default;

/***/ },

/***/ 54755
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91917);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), 'Facebook'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 94827
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91917);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), 'Instagram'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 37737
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91917);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), 'WhatsApp'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 59846
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
}));
var _utils = __webpack_require__(99081);

/***/ },

/***/ 51525
(module) {

!function (e, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  return function (e, i, t) {
    i.prototype.isBetween = function (e, i, s, f) {
      var n = t(e),
        o = t(i),
        r = "(" === (f = f || "()")[0],
        u = ")" === f[1];
      return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
    };
  };
});

/***/ },

/***/ 33270
(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  return function (e, t) {
    t.prototype.isLeapYear = function () {
      return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
    };
  };
});

/***/ },

/***/ 94462
(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  return function (e, t) {
    t.prototype.isSameOrAfter = function (e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    };
  };
});

/***/ },

/***/ 48933
(module) {

!function (e, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  return function (e, i) {
    i.prototype.isSameOrBefore = function (e, i) {
      return this.isSame(e, i) || this.isBefore(e, i);
    };
  };
});

/***/ },

/***/ 20199
(module) {

!function (n, e) {
   true ? module.exports = e() : 0;
}(this, function () {
  "use strict";

  return function (n, e, t) {
    var r = e.prototype,
      o = function (n) {
        return n && (n.indexOf ? n : n.s);
      },
      u = function (n, e, t, r, u) {
        var i = n.name ? n : n.$locale(),
          a = o(i[e]),
          s = o(i[t]),
          f = a || s.map(function (n) {
            return n.slice(0, r);
          });
        if (!u) return f;
        var d = i.weekStart;
        return f.map(function (n, e) {
          return f[(e + (d || 0)) % 7];
        });
      },
      i = function () {
        return t.Ls[t.locale()];
      },
      a = function (n, e) {
        return n.formats[e] || function (n) {
          return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (n, e, t) {
            return e || t.slice(1);
          });
        }(n.formats[e.toUpperCase()]);
      },
      s = function () {
        var n = this;
        return {
          months: function (e) {
            return e ? e.format("MMMM") : u(n, "months");
          },
          monthsShort: function (e) {
            return e ? e.format("MMM") : u(n, "monthsShort", "months", 3);
          },
          firstDayOfWeek: function () {
            return n.$locale().weekStart || 0;
          },
          weekdays: function (e) {
            return e ? e.format("dddd") : u(n, "weekdays");
          },
          weekdaysMin: function (e) {
            return e ? e.format("dd") : u(n, "weekdaysMin", "weekdays", 2);
          },
          weekdaysShort: function (e) {
            return e ? e.format("ddd") : u(n, "weekdaysShort", "weekdays", 3);
          },
          longDateFormat: function (e) {
            return a(n.$locale(), e);
          },
          meridiem: this.$locale().meridiem,
          ordinal: this.$locale().ordinal
        };
      };
    r.localeData = function () {
      return s.bind(this)();
    }, t.localeData = function () {
      var n = i();
      return {
        firstDayOfWeek: function () {
          return n.weekStart || 0;
        },
        weekdays: function () {
          return t.weekdays();
        },
        weekdaysShort: function () {
          return t.weekdaysShort();
        },
        weekdaysMin: function () {
          return t.weekdaysMin();
        },
        months: function () {
          return t.months();
        },
        monthsShort: function () {
          return t.monthsShort();
        },
        longDateFormat: function (e) {
          return a(n, e);
        },
        meridiem: n.meridiem,
        ordinal: n.ordinal
      };
    }, t.months = function () {
      return u(i(), "months");
    }, t.monthsShort = function () {
      return u(i(), "monthsShort", "months", 3);
    }, t.weekdays = function (n) {
      return u(i(), "weekdays", null, null, n);
    }, t.weekdaysShort = function (n) {
      return u(i(), "weekdaysShort", "weekdays", 3, n);
    }, t.weekdaysMin = function (n) {
      return u(i(), "weekdaysMin", "weekdays", 2, n);
    };
  };
});

/***/ },

/***/ 14443
(module) {

!function (e, t) {
   true ? module.exports = t() : 0;
}(this, function () {
  "use strict";

  var e = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  return function (t, o, n) {
    var r = o.prototype,
      i = r.format;
    n.en.formats = e, r.format = function (t) {
      void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
      var o = this.$locale().formats,
        n = function (t, o) {
          return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (t, n, r) {
            var i = r && r.toUpperCase();
            return n || o[r] || e[r] || o[i].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (e, t, o) {
              return t || o.slice(1);
            });
          });
        }(t, void 0 === o ? {} : o);
      return i.call(this, n);
    };
  };
});

/***/ },

/***/ 7227
(module) {

!function (e, n) {
   true ? module.exports = n() : 0;
}(this, function () {
  "use strict";

  return function (e, n, t) {
    var i = function (e, n) {
      if (!n || !n.length || 1 === n.length && !n[0] || 1 === n.length && Array.isArray(n[0]) && !n[0].length) return null;
      var t;
      1 === n.length && n[0].length > 0 && (n = n[0]);
      t = (n = n.filter(function (e) {
        return e;
      }))[0];
      for (var i = 1; i < n.length; i += 1) n[i].isValid() && !n[i][e](t) || (t = n[i]);
      return t;
    };
    t.max = function () {
      var e = [].slice.call(arguments, 0);
      return i("isAfter", e);
    }, t.min = function () {
      var e = [].slice.call(arguments, 0);
      return i("isBefore", e);
    };
  };
});

/***/ },

/***/ 8259
(module) {

!function (t, i) {
   true ? module.exports = i() : 0;
}(this, function () {
  "use strict";

  var t = "minute",
    i = /[+-]\d\d(?::?\d\d)?/g,
    e = /([+-]|\d\d)/g;
  return function (s, f, n) {
    var u = f.prototype;
    n.utc = function (t) {
      var i = {
        date: t,
        utc: !0,
        args: arguments
      };
      return new f(i);
    }, u.utc = function (i) {
      var e = n(this.toDate(), {
        locale: this.$L,
        utc: !0
      });
      return i ? e.add(this.utcOffset(), t) : e;
    }, u.local = function () {
      return n(this.toDate(), {
        locale: this.$L,
        utc: !1
      });
    };
    var r = u.parse;
    u.parse = function (t) {
      t.utc && (this.$u = !0), this.$utils().u(t.$offset) || (this.$offset = t.$offset), r.call(this, t);
    };
    var o = u.init;
    u.init = function () {
      if (this.$u) {
        var t = this.$d;
        this.$y = t.getUTCFullYear(), this.$M = t.getUTCMonth(), this.$D = t.getUTCDate(), this.$W = t.getUTCDay(), this.$H = t.getUTCHours(), this.$m = t.getUTCMinutes(), this.$s = t.getUTCSeconds(), this.$ms = t.getUTCMilliseconds();
      } else o.call(this);
    };
    var a = u.utcOffset;
    u.utcOffset = function (s, f) {
      var n = this.$utils().u;
      if (n(s)) return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
      if ("string" == typeof s && (s = function (t) {
        void 0 === t && (t = "");
        var s = t.match(i);
        if (!s) return null;
        var f = ("" + s[0]).match(e) || ["-", 0, 0],
          n = f[0],
          u = 60 * +f[1] + +f[2];
        return 0 === u ? 0 : "+" === n ? u : -u;
      }(s), null === s)) return this;
      var u = Math.abs(s) <= 16 ? 60 * s : s;
      if (0 === u) return this.utc(f);
      var r = this.clone();
      if (f) return r.$offset = u, r.$u = !1, r;
      var o = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
      return (r = this.local().add(u + o, t)).$offset = u, r.$x.$localOffset = o, r;
    };
    var h = u.format;
    u.format = function (t) {
      var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return h.call(this, i);
    }, u.valueOf = function () {
      var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t;
    }, u.isUTC = function () {
      return !!this.$u;
    }, u.toISOString = function () {
      return this.toDate().toISOString();
    }, u.toString = function () {
      return this.toDate().toUTCString();
    };
    var l = u.toDate;
    u.toDate = function (t) {
      return "s" === t && this.$offset ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : l.call(this);
    };
    var c = u.diff;
    u.diff = function (t, i, e) {
      if (t && this.$u === t.$u) return c.call(this, t, i, e);
      var s = this.local(),
        f = n(t).local();
      return c.call(s, f, i, e);
    };
  };
});

/***/ },

/***/ 22740
(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */
var invariant = function (condition, format, a, b, c, d, e, f) {
  if (false) // removed by dead control flow
{}
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};
module.exports = invariant;

/***/ },

/***/ 88140
(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(35324),
  last = __webpack_require__(74065),
  parent = __webpack_require__(21676),
  toKey = __webpack_require__(70914);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);

  // Prevent prototype pollution:
  // https://github.com/lodash/lodash/security/advisories/GHSA-xxjr-mmjv-4gpg
  // https://github.com/lodash/lodash/security/advisories/GHSA-f23m-r3pf-42rh
  var index = -1,
    length = path.length;
  if (!length) {
    return true;
  }
  while (++index < length) {
    var key = toKey(path[index]);

    // Always block "__proto__" anywhere in the path if it's not expected
    if (key === '__proto__' && !hasOwnProperty.call(object, '__proto__')) {
      return false;
    }

    // Block constructor/prototype as non-terminal traversal keys to prevent
    // escaping the object graph into built-in constructors and prototypes.
    if ((key === 'constructor' || key === 'prototype') && index < length - 1) {
      return false;
    }
  }
  var obj = parent(object, path);
  return obj == null || delete obj[toKey(last(path))];
}
module.exports = baseUnset;

/***/ },

/***/ 96761
(module, __unused_webpack_exports, __webpack_require__) {

var isPlainObject = __webpack_require__(12322);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}
module.exports = customOmitClone;

/***/ },

/***/ 15857
(module, __unused_webpack_exports, __webpack_require__) {

var flatten = __webpack_require__(20819),
  overRest = __webpack_require__(55636),
  setToString = __webpack_require__(46350);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}
module.exports = flatRest;

/***/ },

/***/ 21676
(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(52969),
  baseSlice = __webpack_require__(53871);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
module.exports = parent;

/***/ },

/***/ 37084
(module, __unused_webpack_exports, __webpack_require__) {

var baseSlice = __webpack_require__(53871),
  isIterateeCall = __webpack_require__(60929),
  toInteger = __webpack_require__(99140);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
  nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
    resIndex = 0,
    result = Array(nativeCeil(length / size));
  while (index < length) {
    result[resIndex++] = baseSlice(array, index, index += size);
  }
  return result;
}
module.exports = chunk;

/***/ },

/***/ 31163
(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(55647),
  eq = __webpack_require__(93211),
  isIterateeCall = __webpack_require__(60929),
  keysIn = __webpack_require__(30474);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function (object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : undefined;
  if (guard && isIterateeCall(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
module.exports = defaults;

/***/ },

/***/ 20819
(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(80755);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;

/***/ },

/***/ 1488
(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(50149),
  baseClone = __webpack_require__(97132),
  baseUnset = __webpack_require__(88140),
  castPath = __webpack_require__(35324),
  copyObject = __webpack_require__(96614),
  customOmitClone = __webpack_require__(96761),
  flatRest = __webpack_require__(15857),
  getAllKeysIn = __webpack_require__(68592);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
  CLONE_FLAT_FLAG = 2,
  CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function (object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function (path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
module.exports = omit;

/***/ },

/***/ 22717
(module, __unused_webpack_exports, __webpack_require__) {

var arrayEach = __webpack_require__(80726),
  baseCreate = __webpack_require__(21817),
  baseForOwn = __webpack_require__(94664),
  baseIteratee = __webpack_require__(9096),
  getPrototype = __webpack_require__(85990),
  isArray = __webpack_require__(54052),
  isBuffer = __webpack_require__(44543),
  isFunction = __webpack_require__(11629),
  isObject = __webpack_require__(46686),
  isTypedArray = __webpack_require__(51268);

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
    isArrLike = isArr || isBuffer(object) || isTypedArray(object);
  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor() : [];
    } else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    } else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function (value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}
module.exports = transform;

/***/ },

/***/ 95780
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi

;
(function (global, factory) {
   true ? factory(__webpack_require__(86178)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var symbolMap = {
      1: '١',
      2: '٢',
      3: '٣',
      4: '٤',
      5: '٥',
      6: '٦',
      7: '٧',
      8: '٨',
      9: '٩',
      0: '٠'
    },
    numberMap = {
      '١': '1',
      '٢': '2',
      '٣': '3',
      '٤': '4',
      '٥': '5',
      '٦': '6',
      '٧': '7',
      '٨': '8',
      '٩': '9',
      '٠': '0'
    },
    pluralForm = function (n) {
      return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    },
    plurals = {
      s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
      m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
      h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
      d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
      M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
      y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    },
    pluralize = function (u) {
      return function (number, withoutSuffix, string, isFuture) {
        var f = pluralForm(number),
          str = plurals[u][pluralForm(number)];
        if (f === 2) {
          str = str[withoutSuffix ? 0 : 1];
        }
        return str.replace(/%d/i, number);
      };
    },
    months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  var ar = moment.defineLocale('ar', {
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'D/\u200FM/\u200FYYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function (input) {
      return 'م' === input;
    },
    meridiem: function (hour, minute, isLower) {
      if (hour < 12) {
        return 'ص';
      } else {
        return 'م';
      }
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: pluralize('s'),
      ss: pluralize('s'),
      m: pluralize('m'),
      mm: pluralize('m'),
      h: pluralize('h'),
      hh: pluralize('h'),
      d: pluralize('d'),
      dd: pluralize('d'),
      M: pluralize('M'),
      MM: pluralize('M'),
      y: pluralize('y'),
      yy: pluralize('y')
    },
    preparse: function (string) {
      return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
        return numberMap[match];
      }).replace(/،/g, ',');
    },
    postformat: function (string) {
      return string.replace(/\d/g, function (match) {
        return symbolMap[match];
      }).replace(/,/g, '،');
    },
    week: {
      dow: 6,
      // Saturday is the first day of the week.
      doy: 12 // The week that contains Jan 12th is the first week of the year.
    }
  });
  return ar;
});

/***/ },

/***/ 86503
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc

;
(function (global, factory) {
   true ? factory(__webpack_require__(86178)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
    monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
    monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
  var es = moment.defineLocale('es', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: function (m, format) {
      if (!m) {
        return monthsShortDot;
      } else if (/-MMM-/.test(format)) {
        return monthsShort[m.month()];
      } else {
        return monthsShortDot[m.month()];
      }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
      sameDay: function () {
        return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextDay: function () {
        return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      nextWeek: function () {
        return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastDay: function () {
        return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      lastWeek: function () {
        return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      ss: '%d segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      w: 'una semana',
      ww: '%d semanas',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 4 // The week that contains Jan 4th is the first week of the year.
    },
    invalidDate: 'Fecha inválida'
  });
  return es;
});

/***/ },

/***/ 12820
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

;
(function (global, factory) {
   true ? factory(__webpack_require__(86178)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var ptBr = moment.defineLocale('pt-br', {
    months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
    monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
    weekdays: 'domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado'.split('_'),
    weekdaysShort: 'dom_seg_ter_qua_qui_sex_sáb'.split('_'),
    weekdaysMin: 'do_2ª_3ª_4ª_5ª_6ª_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' // Saturday + Sunday
        : '[Última] dddd [às] LT'; // Monday - Friday
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'poucos segundos',
      ss: '%d segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    invalidDate: 'Data inválida'
  });
  return ptBr;
});

/***/ },

/***/ 14601
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK

;
(function (global, factory) {
   true ? factory(__webpack_require__(86178)) : 0;
})(this, function (moment) {
  'use strict';

  //! moment.js locale configuration
  var suffixes = {
    1: "'inci",
    5: "'inci",
    8: "'inci",
    70: "'inci",
    80: "'inci",
    2: "'nci",
    7: "'nci",
    20: "'nci",
    50: "'nci",
    3: "'üncü",
    4: "'üncü",
    100: "'üncü",
    6: "'ncı",
    9: "'uncu",
    10: "'uncu",
    30: "'uncu",
    60: "'ıncı",
    90: "'ıncı"
  };
  var tr = moment.defineLocale('tr', {
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pzt_Sal_Çar_Per_Cum_Cmt'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    meridiem: function (hours, minutes, isLower) {
      if (hours < 12) {
        return isLower ? 'öö' : 'ÖÖ';
      } else {
        return isLower ? 'ös' : 'ÖS';
      }
    },
    meridiemParse: /öö|ÖÖ|ös|ÖS/,
    isPM: function (input) {
      return input === 'ös' || input === 'ÖS';
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[yarın saat] LT',
      nextWeek: '[gelecek] dddd [saat] LT',
      lastDay: '[dün] LT',
      lastWeek: '[geçen] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s sonra',
      past: '%s önce',
      s: 'birkaç saniye',
      ss: '%d saniye',
      m: 'bir dakika',
      mm: '%d dakika',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      w: 'bir hafta',
      ww: '%d hafta',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir yıl',
      yy: '%d yıl'
    },
    ordinal: function (number, period) {
      switch (period) {
        case 'd':
        case 'D':
        case 'Do':
        case 'DD':
          return number;
        default:
          if (number === 0) {
            // special case for zero
            return number + "'ıncı";
          }
          var a = number % 10,
            b = number % 100 - a,
            c = number >= 100 ? 100 : null;
          return number + (suffixes[a] || suffixes[b] || suffixes[c]);
      }
    },
    week: {
      dow: 1,
      // Monday is the first day of the week.
      doy: 7 // The week that contains Jan 7th is the first week of the year.
    }
  });
  return tr;
});

/***/ },

/***/ 23777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Vv: () => (/* binding */ Calendar_default),
  ye: () => (/* binding */ moment)
});

// UNUSED EXPORTS: DateLocalizer, Navigate, Views, components, dateFnsLocalizer, dayjsLocalizer, globalizeLocalizer, luxonLocalizer, move

// NAMESPACE OBJECT (decoupled): ./node_modules/date-arithmetic/index.js
var date_arithmetic_namespaceObject = {};
__webpack_require__.r(date_arithmetic_namespaceObject);
__webpack_require__.d(date_arithmetic_namespaceObject, {
  add: () => (add),
  century: () => (century),
  date: () => (date),
  day: () => (day),
  decade: () => (decade),
  diff: () => (diff),
  endOf: () => (endOf),
  eq: () => (eq),
  gt: () => (gt),
  gte: () => (gte),
  hours: () => (hours),
  inRange: () => (inRange),
  lt: () => (lt),
  lte: () => (lte),
  max: () => (max),
  milliseconds: () => (milliseconds),
  min: () => (min),
  minutes: () => (minutes),
  month: () => (month),
  neq: () => (neq),
  seconds: () => (seconds),
  startOf: () => (startOf),
  subtract: () => (subtract),
  weekday: () => (weekday),
  year: () => (year)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(64467);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(23029);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(92901);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(56822);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(53954);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(85501);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(65173);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(22740);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// ./node_modules/uncontrollable/lib/esm/utils.js

var noop = function noop() {};
function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}
function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;
    if (false) // removed by dead control flow
{ var handler; }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function utils_canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
;// ./node_modules/uncontrollable/lib/esm/hook.js
/* unused harmony import specifier */ var _extends;
/* unused harmony import specifier */ var _objectWithoutPropertiesLoose;
/* unused harmony import specifier */ var useRef;
/* unused harmony import specifier */ var useState;
/* unused harmony import specifier */ var useCallback;
/* unused harmony import specifier */ var Utils;


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}


function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = useRef(propValue !== undefined);
  var _useState = useState(defaultValue),
    stateValue = _useState[0],
    setState = _useState[1];
  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, useCallback(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}

function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;
    var _ref = result,
      defaultValue = _ref[Utils.defaultKey(fieldName)],
      propsValue = _ref[fieldName],
      rest = _objectWithoutPropertiesLoose(_ref, [Utils.defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
      value = _useUncontrolledProp[0],
      handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(77387);
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(55484);
;// ./node_modules/uncontrollable/lib/esm/uncontrollable.js



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }
  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = utils_canAcceptRef(Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(defaultKey);
  !(canAcceptRef || !methods.length) ?  false ? 0 : browser_default()(false) : void 0;
  var UncontrolledComponent = /*#__PURE__*/
  function (_React$Component) {
    (0,inheritsLoose/* default */.A)(UncontrolledComponent, _React$Component);
    function UncontrolledComponent() {
      var _this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];
        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;
            _this._notifying = true;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));
            _this._notifying = false;
          }
          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;
            var values = _ref.values;
            return {
              values: (0,esm_extends/* default */.A)(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };
        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[defaultKey(key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }
    var _proto = UncontrolledComponent.prototype;
    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };
    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
        prevProps = _ref2.prevProps;
      var nextState = {
        values: (0,esm_extends/* default */.A)(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];
        if (!isProp(props, key) && isProp(prevProps, key)) {
          nextState.values[key] = props[defaultKey(key)];
        }
      });
      return nextState;
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };
    _proto.render = function render() {
      var _this2 = this;
      var _this$props2 = this.props,
        innerRef = _this$props2.innerRef,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props2, ["innerRef"]);
      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return react.createElement(Component, (0,esm_extends/* default */.A)({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };
    return UncontrolledComponent;
  }(react.Component);
  (0,react_lifecycles_compat_es.polyfill)(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = (0,esm_extends/* default */.A)({
    innerRef: function innerRef() {}
  }, uncontrolledPropTypes(controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;
      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;
  if (react.forwardRef) {
    WrappedComponent = react.forwardRef(function (props, ref) {
      return react.createElement(UncontrolledComponent, (0,esm_extends/* default */.A)({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }
  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }
    return uncontrollable(newComponent, (0,esm_extends/* default */.A)({}, controlledValues, additions), nextMethods);
  };
  return WrappedComponent;
}
;// ./node_modules/uncontrollable/lib/esm/index.js


;// ./node_modules/date-arithmetic/index.js
var MILI = 'milliseconds',
  SECONDS = 'seconds',
  MINUTES = 'minutes',
  HOURS = 'hours',
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
  DECADE = 'decade',
  CENTURY = 'century';
var multiplierMilli = {
  'milliseconds': 1,
  'seconds': 1000,
  'minutes': 60 * 1000,
  'hours': 60 * 60 * 1000,
  'day': 24 * 60 * 60 * 1000,
  'week': 7 * 24 * 60 * 60 * 1000
};
var multiplierMonth = {
  'month': 1,
  'year': 12,
  'decade': 10 * 12,
  'century': 100 * 12
};
function daysOf(year) {
  return [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function daysInFeb(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? 29 : 28;
}
function add(d, num, unit) {
  d = new Date(d);
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      return addMillis(d, num * multiplierMilli[unit]);
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      return addMonths(d, num * multiplierMonth[unit]);
  }
  throw new TypeError('Invalid units: "' + unit + '"');
}
function addMillis(d, num) {
  var nextDate = new Date(+d + num);
  return solveDST(d, nextDate);
}
function addMonths(d, num) {
  var year = d.getFullYear(),
    month = d.getMonth(),
    day = d.getDate(),
    totalMonths = year * 12 + month + num,
    nextYear = Math.trunc(totalMonths / 12),
    nextMonth = totalMonths % 12,
    nextDay = Math.min(day, daysOf(nextYear)[nextMonth]);
  var nextDate = new Date(d);
  nextDate.setFullYear(nextYear);

  // To avoid a bug when sets the Feb month
  // with a date > 28 or date > 29 (leap year)
  nextDate.setDate(1);
  nextDate.setMonth(nextMonth);
  nextDate.setDate(nextDay);
  return nextDate;
}
function solveDST(currentDate, nextDate) {
  var currentOffset = currentDate.getTimezoneOffset(),
    nextOffset = nextDate.getTimezoneOffset();

  // if is DST, add the difference in minutes
  // else the difference is zero
  var diffMinutes = nextOffset - currentOffset;
  return new Date(+nextDate + diffMinutes * multiplierMilli['minutes']);
}
function subtract(d, num, unit) {
  return add(d, -num, unit);
}
function startOf(d, unit, firstOfWeek) {
  d = new Date(d);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
      d = month(d, 0);
    case MONTH:
      d = date(d, 1);
    case WEEK:
    case DAY:
      d = hours(d, 0);
    case HOURS:
      d = minutes(d, 0);
    case MINUTES:
      d = seconds(d, 0);
    case SECONDS:
      d = milliseconds(d, 0);
  }
  if (unit === DECADE) d = subtract(d, year(d) % 10, 'year');
  if (unit === CENTURY) d = subtract(d, year(d) % 100, 'year');
  if (unit === WEEK) d = weekday(d, 0, firstOfWeek);
  return d;
}
function endOf(d, unit, firstOfWeek) {
  d = new Date(d);
  d = startOf(d, unit, firstOfWeek);
  switch (unit) {
    case CENTURY:
    case DECADE:
    case YEAR:
    case MONTH:
    case WEEK:
      d = add(d, 1, unit);
      d = subtract(d, 1, DAY);
      d.setHours(23, 59, 59, 999);
      break;
    case DAY:
      d.setHours(23, 59, 59, 999);
      break;
    case HOURS:
    case MINUTES:
    case SECONDS:
      d = add(d, 1, unit);
      d = subtract(d, 1, MILI);
  }
  return d;
}
var eq = createComparer(function (a, b) {
  return a === b;
});
var neq = createComparer(function (a, b) {
  return a !== b;
});
var gt = createComparer(function (a, b) {
  return a > b;
});
var gte = createComparer(function (a, b) {
  return a >= b;
});
var lt = createComparer(function (a, b) {
  return a < b;
});
var lte = createComparer(function (a, b) {
  return a <= b;
});
function min() {
  return new Date(Math.min.apply(Math, arguments));
}
function max() {
  return new Date(Math.max.apply(Math, arguments));
}
function inRange(day, min, max, unit) {
  unit = unit || 'day';
  return (!min || gte(day, min, unit)) && (!max || lte(day, max, unit));
}
var milliseconds = createAccessor('Milliseconds');
var seconds = createAccessor('Seconds');
var minutes = createAccessor('Minutes');
var hours = createAccessor('Hours');
var day = createAccessor('Day');
var date = createAccessor('Date');
var month = createAccessor('Month');
var year = createAccessor('FullYear');
function decade(d, val) {
  return val === undefined ? year(startOf(d, DECADE)) : add(d, val + 10, YEAR);
}
function century(d, val) {
  return val === undefined ? year(startOf(d, CENTURY)) : add(d, val + 100, YEAR);
}
function weekday(d, val, firstDay) {
  var w = (day(d) + 7 - (firstDay || 0)) % 7;
  return val === undefined ? w : add(d, val - w, DAY);
}
function diff(date1, date2, unit, asFloat) {
  var dividend, divisor, result;
  switch (unit) {
    case MILI:
    case SECONDS:
    case MINUTES:
    case HOURS:
    case DAY:
    case WEEK:
      dividend = date2.getTime() - date1.getTime();
      break;
    case MONTH:
    case YEAR:
    case DECADE:
    case CENTURY:
      dividend = (year(date2) - year(date1)) * 12 + month(date2) - month(date1);
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  switch (unit) {
    case MILI:
      divisor = 1;
      break;
    case SECONDS:
      divisor = 1000;
      break;
    case MINUTES:
      divisor = 1000 * 60;
      break;
    case HOURS:
      divisor = 1000 * 60 * 60;
      break;
    case DAY:
      divisor = 1000 * 60 * 60 * 24;
      break;
    case WEEK:
      divisor = 1000 * 60 * 60 * 24 * 7;
      break;
    case MONTH:
      divisor = 1;
      break;
    case YEAR:
      divisor = 12;
      break;
    case DECADE:
      divisor = 120;
      break;
    case CENTURY:
      divisor = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + unit + '"');
  }
  result = dividend / divisor;
  return asFloat ? result : Math.round(result);
}
function createAccessor(method) {
  var hourLength = function (method) {
    switch (method) {
      case 'Milliseconds':
        return 3600000;
      case 'Seconds':
        return 3600;
      case 'Minutes':
        return 60;
      case 'Hours':
        return 1;
      default:
        return null;
    }
  }(method);
  return function (d, val) {
    if (val === undefined) return d['get' + method]();
    var dateOut = new Date(d);
    dateOut['set' + method](val);
    if (hourLength && dateOut['get' + method]() != val && (method === 'Hours' || val >= hourLength && dateOut.getHours() - d.getHours() < Math.floor(val / hourLength))) {
      //Skip DST hour, if it occurs
      dateOut['set' + method](val + hourLength);
    }
    return dateOut;
  };
}
function createComparer(operator) {
  return function (a, b, unit) {
    return operator(+startOf(a, unit), +startOf(b, unit));
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(60436);
// EXTERNAL MODULE: ./node_modules/lodash/chunk.js
var chunk = __webpack_require__(37084);
var chunk_default = /*#__PURE__*/__webpack_require__.n(chunk);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
;// ./node_modules/dom-helpers/esm/ownerDocument.js
/**
 * Returns the owner document of a given element.
 *
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
;// ./node_modules/dom-helpers/esm/ownerWindow.js


/**
 * Returns the owner window of a given element.
 *
 * @param node the element
 */
function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
;// ./node_modules/dom-helpers/esm/getComputedStyle.js


/**
 * Returns one or all computed style properties of an element.
 *
 * @param node the element
 * @param psuedoElement the style property
 */
function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
;// ./node_modules/dom-helpers/esm/hyphenate.js
const rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
;// ./node_modules/dom-helpers/esm/hyphenateStyle.js
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */


const msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}
;// ./node_modules/dom-helpers/esm/isTransform.js
const supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
;// ./node_modules/dom-helpers/esm/css.js



function style(node, property) {
  let css = '';
  let transforms = '';
  if (typeof property === 'string') {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(key => {
    const value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += "".concat(key, "(").concat(value, ") ");
    } else {
      css += "".concat(hyphenateStyleName(key), ": ").concat(value, ";");
    }
  });
  if (transforms) {
    css += "transform: ".concat(transforms, ";");
  }
  node.style.cssText += ";".concat(css);
}
/* harmony default export */ const css = (style);
;// ./node_modules/dom-helpers/esm/contains.js
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 *
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
;// ./node_modules/dom-helpers/esm/isDocument.js
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}
;// ./node_modules/dom-helpers/esm/isWindow.js

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (isDocument(node)) return node.defaultView || false;
  return false;
}
;// ./node_modules/dom-helpers/esm/getScrollAccessor.js

function getscrollAccessor(offset) {
  const prop = offset === 'pageXOffset' ? 'scrollLeft' : 'scrollTop';
  function scrollAccessor(node, val) {
    const win = isWindow(node);
    if (val === undefined) {
      return win ? win[offset] : node[prop];
    }
    if (win) {
      win.scrollTo(win[offset], val);
    } else {
      node[prop] = val;
    }
  }
  return scrollAccessor;
}
;// ./node_modules/dom-helpers/esm/scrollLeft.js


/**
 * Gets or sets the scroll left position of a given element.
 *
 * @param node the element
 * @param val the position to set
 */
/* harmony default export */ const scrollLeft = (getscrollAccessor('pageXOffset'));
;// ./node_modules/dom-helpers/esm/scrollTop.js


/**
 * Gets or sets the scroll top position of a given element.
 *
 * @param node the element
 * @param val the position to set
 */
/* harmony default export */ const scrollTop = (getscrollAccessor('pageYOffset'));
;// ./node_modules/dom-helpers/esm/offset.js





/**
 * Returns the offset of a given element, including top and left positions, width and height.
 *
 * @param node the element
 */
function offset_offset(node) {
  const doc = ownerDocument(node);
  let box = {
    top: 0,
    left: 0,
    height: 0,
    width: 0
  };
  const docElem = doc && doc.documentElement;

  // Make sure it's not a disconnected DOM node
  if (!docElem || !contains(docElem, node)) return box;
  if (node.getBoundingClientRect !== undefined) box = node.getBoundingClientRect();
  box = {
    top: box.top + scrollTop(docElem) - (docElem.clientTop || 0),
    left: box.left + scrollLeft(docElem) - (docElem.clientLeft || 0),
    width: box.width,
    height: box.height
  };
  return box;
}
;// ./node_modules/dom-helpers/esm/offsetParent.js


const isHTMLElement = e => !!e && 'offsetParent' in e;
function offsetParent_offsetParent(node) {
  const doc = ownerDocument(node);
  let parent = node && node.offsetParent;
  while (isHTMLElement(parent) && parent.nodeName !== 'HTML' && css(parent, 'position') === 'static') {
    parent = parent.offsetParent;
  }
  return parent || doc.documentElement;
}
;// ./node_modules/dom-helpers/esm/position.js






const nodeName = node => node.nodeName && node.nodeName.toLowerCase();

/**
 * Returns the relative position of a given element.
 *
 * @param node the element
 * @param offsetParent the offset parent
 */
function position_position(node, offsetParent) {
  let parentOffset = {
    top: 0,
    left: 0
  };
  let offset;

  // Fixed elements are offset from window (parentOffset = {top:0, left: 0},
  // because it is its only offset parent
  if (css(node, 'position') === 'fixed') {
    offset = node.getBoundingClientRect();
  } else {
    const parent = offsetParent || offsetParent_offsetParent(node);
    offset = offset_offset(node);
    if (nodeName(parent) !== 'html') parentOffset = offset_offset(parent);
    const borderTop = String(css(parent, 'borderTopWidth') || 0);
    parentOffset.top += parseInt(borderTop, 10) - scrollTop(parent) || 0;
    const borderLeft = String(css(parent, 'borderLeftWidth') || 0);
    parentOffset.left += parseInt(borderLeft, 10) - scrollLeft(parent) || 0;
  }
  const marginTop = String(css(node, 'marginTop') || 0);
  const marginLeft = String(css(node, 'marginLeft') || 0);
  // Subtract parent offsets and node margins
  return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, offset), {}, {
    top: offset.top - parentOffset.top - (parseInt(marginTop, 10) || 0),
    left: offset.left - parentOffset.left - (parseInt(marginLeft, 10) || 0)
  });
}
;// ./node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ const canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
;// ./node_modules/dom-helpers/esm/animationFrame.js

/* https://github.com/component/raf */
let prev = new Date().getTime();
function fallback(fn) {
  const curr = new Date().getTime();
  const ms = Math.max(0, 16 - (curr - prev));
  const handle = setTimeout(fn, ms);
  prev = curr;
  return handle;
}
const vendors = ['', 'webkit', 'moz', 'o', 'ms'];
let cancelMethod = 'clearTimeout';
let rafImpl = fallback;

// eslint-disable-next-line import/no-mutable-exports

const getKey = (vendor, k) => "".concat(vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)), "AnimationFrame");
if (canUseDOM) {
  vendors.some(vendor => {
    const rafMethod = getKey(vendor, 'request');
    if (rafMethod in window) {
      cancelMethod = getKey(vendor, 'cancel');
      // @ts-ignore
      rafImpl = cb => window[rafMethod](cb);
    }
    return !!rafImpl;
  });
}
const cancel = id => {
  // @ts-ignore
  if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};
const request = rafImpl;
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(97950);
;// ./node_modules/@restart/hooks/esm/useCallbackRef.js


/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */
function useCallbackRef() {
  return (0,react.useState)(null);
}
;// ./node_modules/@restart/hooks/esm/useMergedRefs.js

const toFnRef = ref => !ref || typeof ref === 'function' ? ref : value => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return value => {
    if (a) a(value);
    if (b) b(value);
  };
}

/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */
function useMergedRefs(refA, refB) {
  return (0,react.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
/* harmony default export */ const esm_useMergedRefs = (useMergedRefs);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums = __webpack_require__(45463);
;// ./node_modules/@restart/hooks/esm/useMounted.js


/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */
function useMounted() {
  const mounted = (0,react.useRef)(true);
  const isMounted = (0,react.useRef)(() => mounted.current);
  (0,react.useEffect)(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}
;// ./node_modules/@restart/hooks/esm/useSafeState.js



/**
 * `useSafeState` takes the return value of a `useState` hook and wraps the
 * setter to prevent updates onces the component has unmounted. Can used
 * with `useMergeState` and `useStateAsync` as well
 *
 * @param state The return value of a useStateHook
 *
 * ```ts
 * const [show, setShow] = useSafeState(useState(true));
 * ```
 */

function useSafeState(state) {
  const isMounted = useMounted();
  return [state[0], (0,react.useCallback)(nextState => {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}
/* harmony default export */ const esm_useSafeState = (useSafeState);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js
var arrow = __webpack_require__(57013);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var computeStyles = __webpack_require__(77103);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var eventListeners = __webpack_require__(77471);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js + 3 modules
var flip = __webpack_require__(20246);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js
var hide = __webpack_require__(31890);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js
var offset = __webpack_require__(12993);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
var popperOffsets = __webpack_require__(84770);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js + 1 modules
var preventOverflow = __webpack_require__(53380);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/createPopper.js + 6 modules
var createPopper = __webpack_require__(76299);
;// ./node_modules/react-overlays/esm/popper.js









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var popper_createPopper = (0,createPopper/* popperGenerator */.UD)({
  defaultModifiers: [hide/* default */.A, popperOffsets/* default */.A, computeStyles/* default */.A, eventListeners/* default */.A, offset/* default */.A, flip/* default */.A, preventOverflow/* default */.A, arrow/* default */.A]
});

;// ./node_modules/react-overlays/esm/usePopper.js





var initialPopperStyles = function initialPopperStyles(position) {
  return {
    position: position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
};
var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false
}; // In order to satisfy the current usage of options, including undefined

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
        reference = _state$elements.reference,
        popper = _state$elements.popper;
      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;
    var state = _ref2.state;
    var _state$elements2 = state.elements,
      popper = _state$elements2.popper,
      reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();
    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');
      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }
      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
    _ref3$enabled = _ref3.enabled,
    enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
    _ref3$placement = _ref3.placement,
    placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
    _ref3$strategy = _ref3.strategy,
    strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
    _ref3$modifiers = _ref3.modifiers,
    modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
    config = (0,objectWithoutPropertiesLoose/* default */.A)(_ref3, ["enabled", "placement", "strategy", "modifiers"]);
  var popperInstanceRef = (0,react.useRef)();
  var update = (0,react.useCallback)(function () {
    var _popperInstanceRef$cu;
    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = (0,react.useCallback)(function () {
    var _popperInstanceRef$cu2;
    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);
  var _useSafeState = esm_useSafeState((0,react.useState)({
      placement: placement,
      update: update,
      forceUpdate: forceUpdate,
      attributes: {},
      styles: {
        popper: initialPopperStyles(strategy),
        arrow: {}
      }
    })),
    popperState = _useSafeState[0],
    setState = _useSafeState[1];
  var updateModifier = (0,react.useMemo)(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  (0,react.useEffect)(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled]);
  (0,react.useEffect)(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }
    popperInstanceRef.current = popper_createPopper(referenceElement, popperElement, (0,esm_extends/* default */.A)({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return (0,esm_extends/* default */.A)({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}
/* harmony default export */ const esm_usePopper = (usePopper);
;// ./node_modules/react-overlays/node_modules/dom-helpers/esm/contains.js
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains_contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
;// ./node_modules/react-overlays/node_modules/dom-helpers/esm/canUseDOM.js
/* harmony default export */ const esm_canUseDOM = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));
;// ./node_modules/react-overlays/node_modules/dom-helpers/esm/addEventListener.js
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }
  };
  if (esm_canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
      capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
/* harmony default export */ const esm_addEventListener = (addEventListener);
;// ./node_modules/react-overlays/node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
/* harmony default export */ const esm_removeEventListener = (removeEventListener);
;// ./node_modules/react-overlays/node_modules/dom-helpers/esm/listen.js


function listen(node, eventName, handler, options) {
  esm_addEventListener(node, eventName, handler, options);
  return function () {
    esm_removeEventListener(node, eventName, handler, options);
  };
}
/* harmony default export */ const esm_listen = (listen);
;// ./node_modules/@restart/hooks/esm/useCommittedRef.js


/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded before being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */
function useCommittedRef(value) {
  const ref = (0,react.useRef)(value);
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
/* harmony default export */ const esm_useCommittedRef = (useCommittedRef);
;// ./node_modules/@restart/hooks/esm/useEventCallback.js


function useEventCallback(fn) {
  const ref = esm_useCommittedRef(fn);
  return (0,react.useCallback)(function () {
    return ref.current && ref.current(...arguments);
  }, [ref]);
}
// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(96440);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);
;// ./node_modules/react-overlays/node_modules/dom-helpers/esm/ownerDocument.js
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument_ownerDocument(node) {
  return node && node.ownerDocument || document;
}
;// ./node_modules/react-overlays/esm/safeFindDOMNode.js

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return react_dom.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
;// ./node_modules/react-overlays/esm/ownerDocument.js


/* harmony default export */ const esm_ownerDocument = (function (componentOrElement) {
  return ownerDocument_ownerDocument(safeFindDOMNode(componentOrElement));
});
__webpack_require__.dn(esm_ownerDocument);
;// ./node_modules/react-overlays/esm/useRootClose.js






var escapeKeyCode = 27;
var useRootClose_noop = function noop() {};
function isLeftClickEvent(event) {
  return event.button === 0;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    disabled = _ref.disabled,
    _ref$clickTrigger = _ref.clickTrigger,
    clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;
  var preventMouseRootCloseRef = (0,react.useRef)(false);
  var onClose = onRootClose || useRootClose_noop;
  var handleMouseCapture = (0,react.useCallback)(function (e) {
    var _e$composedPath$;
    var currentTarget = getRefTarget(ref);
    warning_default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!contains_contains(currentTarget, (_e$composedPath$ = e.composedPath == null ? void 0 : e.composedPath()[0]) != null ? _e$composedPath$ : e.target);
  }, [ref]);
  var handleMouse = useEventCallback(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = useEventCallback(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0,react.useEffect)(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = esm_ownerDocument(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = esm_listen(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = esm_listen(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleMouse(e);
    });
    var removeKeyupListener = esm_listen(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }
      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];
    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return esm_listen(el, 'mousemove', useRootClose_noop);
      });
    }
    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}
/* harmony default export */ const esm_useRootClose = (useRootClose);
;// ./node_modules/react-overlays/esm/useWaitForDOMRef.js


var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;
  if (typeof document === 'undefined') return null;
  if (ref == null) return ownerDocument_ownerDocument().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = (0,react.useState)(function () {
      return resolveContainerRef(ref);
    }),
    resolvedRef = _useState[0],
    setRef = _useState[1];
  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }
  (0,react.useEffect)(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0,react.useEffect)(function () {
    var nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}
;// ./node_modules/react-overlays/esm/mergeOptionsWithPopperConfig.js

function toModifierMap(modifiers) {
  var result = {};
  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions

  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }
  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;
  var enabled = _ref.enabled,
    enableEvents = _ref.enableEvents,
    placement = _ref.placement,
    flip = _ref.flip,
    offset = _ref.offset,
    fixed = _ref.fixed,
    containerPadding = _ref.containerPadding,
    arrowElement = _ref.arrowElement,
    _ref$popperConfig = _ref.popperConfig,
    popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return (0,esm_extends/* default */.A)({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray((0,esm_extends/* default */.A)({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: (0,esm_extends/* default */.A)({}, modifiers.preventOverflow, {
        options: containerPadding ? (0,esm_extends/* default */.A)({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: (0,esm_extends/* default */.A)({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: (0,esm_extends/* default */.A)({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: (0,esm_extends/* default */.A)({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: (0,esm_extends/* default */.A)({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}
;// ./node_modules/react-overlays/esm/Overlay.js













/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay = /*#__PURE__*/react.forwardRef(function (props, outerRef) {
  var flip = props.flip,
    offset = props.offset,
    placement = props.placement,
    _props$containerPaddi = props.containerPadding,
    containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
    _props$popperConfig = props.popperConfig,
    popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
    Transition = props.transition;
  var _useCallbackRef = useCallbackRef(),
    rootElement = _useCallbackRef[0],
    attachRef = _useCallbackRef[1];
  var _useCallbackRef2 = useCallbackRef(),
    arrowElement = _useCallbackRef2[0],
    attachArrowRef = _useCallbackRef2[1];
  var mergedRef = esm_useMergedRefs(attachRef, outerRef);
  var container = useWaitForDOMRef(props.container);
  var target = useWaitForDOMRef(props.target);
  var _useState = (0,react.useState)(!props.show),
    exited = _useState[0],
    setExited = _useState[1];
  var _usePopper = esm_usePopper(target, rootElement, mergeOptionsWithPopperConfig({
      placement: placement,
      enableEvents: !!props.show,
      containerPadding: containerPadding || 5,
      flip: flip,
      offset: offset,
      arrowElement: arrowElement,
      popperConfig: popperConfig
    })),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes,
    popper = (0,objectWithoutPropertiesLoose/* default */.A)(_usePopper, ["styles", "attributes"]);
  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }
  var handleHidden = function handleHidden() {
    setExited(true);
    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.

  var mountOverlay = props.show || Transition && !exited;
  esm_useRootClose(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });
  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }
  var child = props.children((0,esm_extends/* default */.A)({}, popper, {
    show: !!props.show,
    props: (0,esm_extends/* default */.A)({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: (0,esm_extends/* default */.A)({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));
  if (Transition) {
    var onExit = props.onExit,
      onExiting = props.onExiting,
      onEnter = props.onEnter,
      onEntering = props.onEntering,
      onEntered = props.onEntered;
    child = /*#__PURE__*/react.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }
  return container ? /*#__PURE__*/react_dom.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: (prop_types_default()).bool,
  /** Specify where the overlay element is positioned in relation to the target element */
  placement: prop_types_default().oneOf(enums/* placements */.DD),
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: (prop_types_default()).any,
  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: (prop_types_default()).any,
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: (prop_types_default()).bool,
  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: (prop_types_default()).func.isRequired,
  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: (prop_types_default()).number,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: (prop_types_default()).object,
  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: (prop_types_default()).bool,
  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: prop_types_default().oneOf(['click', 'mousedown']),
  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: (prop_types_default()).bool,
  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (props.rootClose) {
      var _PropTypes$func;
      return (_PropTypes$func = (prop_types_default()).func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }
    return prop_types_default().func.apply((prop_types_default()), [props].concat(args));
  },
  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: (prop_types_default()).elementType,
  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: (prop_types_default()).func,
  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: (prop_types_default()).func,
  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: (prop_types_default()).func,
  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: (prop_types_default()).func,
  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: (prop_types_default()).func,
  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: (prop_types_default()).func
};
/* harmony default export */ const esm_Overlay = (Overlay);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(19853);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// ./node_modules/dom-helpers/esm/height.js



/**
 * Returns the height of a given element.
 *
 * @param node the element
 * @param client whether to use `clientHeight` if possible
 */
function height(node, client) {
  const win = isWindow(node);
  return win ? win.innerHeight : client ? node.clientHeight : offset_offset(node).height;
}
;// ./node_modules/dom-helpers/esm/querySelectorAll.js
const toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);

/**
 * Runs `querySelectorAll` on a given element.
 *
 * @param element the element
 * @param selector the selector
 */
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
;// ./node_modules/dom-helpers/esm/matches.js
let matchesImpl;

/**
 * Checks if a given element matches a selector.
 *
 * @param node the element
 * @param selector the selector
 */
function matches(node, selector) {
  if (!matchesImpl) {
    const body = document.body;
    const nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;
    matchesImpl = (n, s) => nativeMatch.call(n, s);
  }
  return matchesImpl(node, selector);
}
;// ./node_modules/dom-helpers/esm/closest.js


/**
 * Returns the closest parent element that matches a given selector.
 *
 * @param node the reference element
 * @param selector the selector to match
 * @param stopAt stop traversing when this element is found
 */
function closest(node, selector, stopAt) {
  if (node.closest && !stopAt) node.closest(selector);
  let nextNode = node;
  do {
    if (matches(nextNode, selector)) return nextNode;
    nextNode = nextNode.parentElement;
  } while (nextNode && nextNode !== stopAt && nextNode.nodeType === document.ELEMENT_NODE);
  return null;
}
;// ./node_modules/dom-helpers/esm/addEventListener.js
/* eslint-disable no-return-assign */

let addEventListener_optionsSupported = false;
let addEventListener_onceSupported = false;
try {
  const options = {
    get passive() {
      return addEventListener_optionsSupported = true;
    },
    get once() {
      // eslint-disable-next-line no-multi-assign
      return addEventListener_onceSupported = addEventListener_optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}
/**
 * An `addEventListener` ponyfill, supports the `once` option
 *
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener_addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !addEventListener_onceSupported) {
    const once = options.once,
      capture = options.capture;
    let wrappedHandler = handler;
    if (!addEventListener_onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, addEventListener_optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
/* harmony default export */ const dom_helpers_esm_addEventListener = (addEventListener_addEventListener);
;// ./node_modules/dom-helpers/esm/removeEventListener.js
/**
 * A `removeEventListener` ponyfill
 *
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */

function removeEventListener_removeEventListener(node, eventName, handler, options) {
  const capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
/* harmony default export */ const dom_helpers_esm_removeEventListener = (removeEventListener_removeEventListener);
;// ./node_modules/dom-helpers/esm/listen.js


function listen_listen(node, eventName, handler, options) {
  dom_helpers_esm_addEventListener(node, eventName, handler, options);
  return () => {
    dom_helpers_esm_removeEventListener(node, eventName, handler, options);
  };
}
/* harmony default export */ const dom_helpers_esm_listen = (listen_listen);
// EXTERNAL MODULE: ./node_modules/lodash/findIndex.js
var findIndex = __webpack_require__(32520);
var findIndex_default = /*#__PURE__*/__webpack_require__.n(findIndex);
// EXTERNAL MODULE: ./node_modules/lodash/range.js
var range = __webpack_require__(96604);
var range_default = /*#__PURE__*/__webpack_require__.n(range);
;// ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === 'number' && value !== value;
};
function memoize_one_esm_isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!memoize_one_esm_isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }
  var cache = null;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
      return cache.lastResult;
    }
    var lastResult = resultFn.apply(this, newArgs);
    cache = {
      lastResult: lastResult,
      lastArgs: newArgs,
      lastThis: this
    };
    return lastResult;
  }
  memoized.clear = function clear() {
    cache = null;
  };
  return memoized;
}

;// ./node_modules/dom-helpers/esm/width.js



/**
 * Returns the width of a given element.
 *
 * @param node the element
 * @param client whether to use `clientWidth` if possible
 */
function getWidth(node, client) {
  const win = isWindow(node);
  return win ? win.innerWidth : client ? node.clientWidth : offset_offset(node).width;
}
// EXTERNAL MODULE: ./node_modules/lodash/sortBy.js
var sortBy = __webpack_require__(87424);
var sortBy_default = /*#__PURE__*/__webpack_require__.n(sortBy);
;// ./node_modules/dom-helpers/esm/scrollbarSize.js

let size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (canUseDOM) {
      const scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }
  return size;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(96369);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(73893);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(27800);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(76562);
;// ./node_modules/@babel/runtime/helpers/esm/toArray.js




function _toArray(r) {
  return (0,arrayWithHoles/* default */.A)(r) || (0,iterableToArray/* default */.A)(r) || (0,unsupportedIterableToArray/* default */.A)(r) || (0,nonIterableRest/* default */.A)();
}

;// ./node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 *
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return " ".concat(element.className.baseVal || element.className, " ").indexOf(" ".concat(className, " ")) !== -1;
}
;// ./node_modules/dom-helpers/esm/addClass.js


/**
 * Adds a CSS class to a given element.
 *
 * @param element the element
 * @param className the CSS class name
 */
function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = "".concat(element.className, " ").concat(className);else element.setAttribute('class', "".concat(element.className && element.className.baseVal || '', " ").concat(className));
}
;// ./node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)".concat(classToRemove, "(?:\\s|$)"), 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

/**
 * Removes a CSS class from a given element.
 *
 * @param element the element
 * @param className the CSS class name
 */
function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ./node_modules/lodash/defaults.js
var defaults = __webpack_require__(31163);
var defaults_default = /*#__PURE__*/__webpack_require__.n(defaults);
// EXTERNAL MODULE: ./node_modules/lodash/mapValues.js
var mapValues = __webpack_require__(91733);
var mapValues_default = /*#__PURE__*/__webpack_require__.n(mapValues);
// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(1488);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/transform.js
var transform = __webpack_require__(22717);
var transform_default = /*#__PURE__*/__webpack_require__.n(transform);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isBetween.js
var isBetween = __webpack_require__(51525);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrAfter.js
var isSameOrAfter = __webpack_require__(94462);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isSameOrBefore.js
var isSameOrBefore = __webpack_require__(48933);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/localeData.js
var localeData = __webpack_require__(20199);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/localizedFormat.js
var localizedFormat = __webpack_require__(14443);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/minMax.js
var minMax = __webpack_require__(7227);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/utc.js
var utc = __webpack_require__(8259);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/isLeapYear.js
var isLeapYear = __webpack_require__(33270);
;// ./node_modules/react-big-calendar/dist/react-big-calendar.esm.js
/* unused harmony import specifier */ var _defineProperty;
/* unused harmony import specifier */ var _slicedToArray;
/* unused harmony import specifier */ var react_big_calendar_esm_eq;
/* unused harmony import specifier */ var react_big_calendar_esm_isBetween;
/* unused harmony import specifier */ var react_big_calendar_esm_isSameOrAfter;
/* unused harmony import specifier */ var react_big_calendar_esm_isSameOrBefore;
/* unused harmony import specifier */ var react_big_calendar_esm_localeData;
/* unused harmony import specifier */ var react_big_calendar_esm_localizedFormat;
/* unused harmony import specifier */ var react_big_calendar_esm_minMax;
/* unused harmony import specifier */ var react_big_calendar_esm_utc;
/* unused harmony import specifier */ var react_big_calendar_esm_isLeapYear;


















































function NoopWrapper(props) {
  return props.children;
}
var react_big_calendar_esm_navigate = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};
var views$1 = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda'
};
var viewNames$1 = Object.keys(views$1).map(function (k) {
  return views$1[k];
});
var accessor$1 = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]);
var dateFormat = (prop_types_default()).any;
var dateRangeFormat$6 = (prop_types_default()).func;

/**
 * accepts either an array of builtin view names:
 *
 * ```
 * views={['month', 'day', 'agenda']}
 * ```
 *
 * or an object hash of the view name and the component (or boolean for builtin)
 *
 * ```
 * views={{
 *   month: true,
 *   week: false,
 *   workweek: WorkWeekViewComponent,
 * }}
 * ```
 */

var views = prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOf(viewNames$1)), prop_types_default().objectOf(function (prop, key) {
  var isBuiltinView = viewNames$1.indexOf(key) !== -1 && typeof prop[key] === 'boolean';
  if (isBuiltinView) {
    return null;
  } else {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return prop_types_default().elementType.apply((prop_types_default()), [prop, key].concat(args));
  }
})]);
var DayLayoutAlgorithmPropType = prop_types_default().oneOfType([prop_types_default().oneOf(['overlap', 'no-overlap']), (prop_types_default()).func]);

/* eslint no-fallthrough: off */
var MILLI = {
  seconds: 1000,
  minutes: 1000 * 60,
  hours: 1000 * 60 * 60,
  day: 1000 * 60 * 60 * 24
};
function firstVisibleDay(date, localizer) {
  var firstOfMonth = startOf(date, 'month');
  return startOf(firstOfMonth, 'week', localizer.startOfWeek());
}
function lastVisibleDay(date, localizer) {
  var endOfMonth = endOf(date, 'month');
  return endOf(endOfMonth, 'week', localizer.startOfWeek());
}
function visibleDays(date, localizer) {
  var current = firstVisibleDay(date, localizer),
    last = lastVisibleDay(date, localizer),
    days = [];
  while (lte(current, last, 'day')) {
    days.push(current);
    current = add(current, 1, 'day');
  }
  return days;
}
function ceil(date, unit) {
  var floor = startOf(date, unit);
  return eq(floor, date) ? floor : add(floor, 1, unit);
}
function react_big_calendar_esm_range(start, end) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
  var current = start,
    days = [];
  while (lte(current, end, unit)) {
    days.push(current);
    current = add(current, 1, unit);
  }
  return days;
}
function merge(date, time) {
  if (time == null && date == null) return null;
  if (time == null) time = new Date();
  if (date == null) date = new Date();
  date = startOf(date, 'day');
  date = hours(date, hours(time));
  date = minutes(date, minutes(time));
  date = seconds(date, seconds(time));
  return milliseconds(date, milliseconds(time));
}
function isJustDate(date) {
  return hours(date) === 0 && minutes(date) === 0 && seconds(date) === 0 && milliseconds(date) === 0;
}
function duration(start, end, unit, firstOfWeek) {
  if (unit === 'day') unit = 'date';
  return Math.abs(
  // eslint-disable-next-line import/namespace
  date_arithmetic_namespaceObject[unit](start, undefined, firstOfWeek) -
  // eslint-disable-next-line import/namespace
  date_arithmetic_namespaceObject[unit](end, undefined, firstOfWeek));
}
function react_big_calendar_esm_diff(dateA, dateB, unit) {
  if (!unit || unit === 'milliseconds') return Math.abs(+dateA - +dateB);

  // the .round() handles an edge case
  // with DST where the total won't be exact
  // since one day in the range may be shorter/longer by an hour
  return Math.round(Math.abs(+startOf(dateA, unit) / MILLI[unit] - +startOf(dateB, unit) / MILLI[unit]));
}
function ownKeys$a(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$a(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$a(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
var localePropType = prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).func]);
function _format(localizer, formatter, value, format, culture) {
  var result = typeof format === 'function' ? format(value, culture, localizer) : formatter.call(localizer, value, format, culture);
  browser_default()(result == null || typeof result === 'string', '`localizer format(..)` must return a string, null, or undefined');
  return result;
}

/**
 * This date conversion was moved out of TimeSlots.js, to
 * allow for localizer override
 * @param {Date} dt - The date to start from
 * @param {Number} minutesFromMidnight
 * @param {Number} offset
 * @returns {Date}
 */
function getSlotDate(dt, minutesFromMidnight, offset) {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), 0, minutesFromMidnight + offset, 0, 0);
}
function getDstOffset(start, end) {
  return start.getTimezoneOffset() - end.getTimezoneOffset();
}

// if the start is on a DST-changing day but *after* the moment of DST
// transition we need to add those extra minutes to our minutesFromMidnight
function getTotalMin(start, end) {
  return react_big_calendar_esm_diff(start, end, 'minutes') + getDstOffset(start, end);
}
function getMinutesFromMidnight(start) {
  var daystart = startOf(start, 'day');
  return react_big_calendar_esm_diff(daystart, start, 'minutes') + getDstOffset(daystart, start);
}

// These two are used by DateSlotMetrics
function continuesPrior(start, first) {
  return lt(start, first, 'day');
}
function continuesAfter(start, end, last) {
  var singleDayDuration = eq(start, end, 'minutes');
  return singleDayDuration ? gte(end, last, 'minutes') : gt(end, last, 'minutes');
}
function daySpan(start, end) {
  return duration(start, end, 'day');
}

// These two are used by eventLevels
function sortEvents$1(_ref) {
  var _ref$evtA = _ref.evtA,
    aStart = _ref$evtA.start,
    aEnd = _ref$evtA.end,
    aAllDay = _ref$evtA.allDay,
    _ref$evtB = _ref.evtB,
    bStart = _ref$evtB.start,
    bEnd = _ref$evtB.end,
    bAllDay = _ref$evtB.allDay;
  var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
  var durA = daySpan(aStart, aEnd);
  var durB = daySpan(bStart, bEnd);
  return startSort ||
  // sort by start Day first
  durB - durA ||
  // events spanning multiple days go first
  !!bAllDay - !!aAllDay ||
  // then allDay single day events
  +aStart - +bStart ||
  // then sort by start time
  +aEnd - +bEnd // then sort by end time
;
}
function inEventRange(_ref2) {
  var _ref2$event = _ref2.event,
    start = _ref2$event.start,
    end = _ref2$event.end,
    _ref2$range = _ref2.range,
    rangeStart = _ref2$range.start,
    rangeEnd = _ref2$range.end;
  var eStart = startOf(start, 'day');
  var startsBeforeEnd = lte(eStart, rangeEnd, 'day');
  // when the event is zero duration we need to handle a bit differently
  var sameMin = neq(eStart, end, 'minutes');
  var endsAfterStart = sameMin ? gt(end, rangeStart, 'minutes') : gte(end, rangeStart, 'minutes');
  return startsBeforeEnd && endsAfterStart;
}

// other localizers treats 'day' and 'date' equality very differently, so we
// abstract the change the 'localizer.eq(date1, date2, 'day') into this
// new method, where they can be treated correctly by the localizer overrides
function isSameDate(date1, date2) {
  return eq(date1, date2, 'day');
}
function startAndEndAreDateOnly(start, end) {
  return isJustDate(start) && isJustDate(end);
}
var DateLocalizer = /*#__PURE__*/(0,createClass/* default */.A)(function DateLocalizer(spec) {
  var _this = this;
  (0,classCallCheck/* default */.A)(this, DateLocalizer);
  browser_default()(typeof spec.format === 'function', 'date localizer `format(..)` must be a function');
  browser_default()(typeof spec.firstOfWeek === 'function', 'date localizer `firstOfWeek(..)` must be a function');
  this.propType = spec.propType || localePropType;
  this.formats = spec.formats;
  this.format = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _format.apply(void 0, [_this, spec.format].concat(args));
  };
  // These date arithmetic methods can be overriden by the localizer
  this.startOfWeek = spec.firstOfWeek;
  this.merge = spec.merge || merge;
  this.inRange = spec.inRange || inRange;
  this.lt = spec.lt || lt;
  this.lte = spec.lte || lte;
  this.gt = spec.gt || gt;
  this.gte = spec.gte || gte;
  this.eq = spec.eq || eq;
  this.neq = spec.neq || neq;
  this.startOf = spec.startOf || startOf;
  this.endOf = spec.endOf || endOf;
  this.add = spec.add || add;
  this.range = spec.range || react_big_calendar_esm_range;
  this.diff = spec.diff || react_big_calendar_esm_diff;
  this.ceil = spec.ceil || ceil;
  this.min = spec.min || min;
  this.max = spec.max || max;
  this.minutes = spec.minutes || minutes;
  this.daySpan = spec.daySpan || daySpan;
  this.firstVisibleDay = spec.firstVisibleDay || firstVisibleDay;
  this.lastVisibleDay = spec.lastVisibleDay || lastVisibleDay;
  this.visibleDays = spec.visibleDays || visibleDays;
  this.getSlotDate = spec.getSlotDate || getSlotDate;
  this.getTimezoneOffset = spec.getTimezoneOffset || function (value) {
    return value.getTimezoneOffset();
  };
  this.getDstOffset = spec.getDstOffset || getDstOffset;
  this.getTotalMin = spec.getTotalMin || getTotalMin;
  this.getMinutesFromMidnight = spec.getMinutesFromMidnight || getMinutesFromMidnight;
  this.continuesPrior = spec.continuesPrior || continuesPrior;
  this.continuesAfter = spec.continuesAfter || continuesAfter;
  this.sortEvents = spec.sortEvents || sortEvents$1;
  this.inEventRange = spec.inEventRange || inEventRange;
  this.isSameDate = spec.isSameDate || isSameDate;
  this.startAndEndAreDateOnly = spec.startAndEndAreDateOnly || startAndEndAreDateOnly;
  this.segmentOffset = spec.browserTZOffset ? spec.browserTZOffset() : 0;
});
function mergeWithDefaults(localizer, culture, formatOverrides, messages) {
  var formats = _objectSpread$a(_objectSpread$a({}, localizer.formats), formatOverrides);
  return _objectSpread$a(_objectSpread$a({}, localizer), {}, {
    messages: messages,
    startOfWeek: function startOfWeek() {
      return localizer.startOfWeek(culture);
    },
    format: function format(value, _format2) {
      return localizer.format(value, formats[_format2] || _format2, culture);
    }
  });
}
function _callSuper$f(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$f() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$f() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$f = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var Toolbar = /*#__PURE__*/function (_React$Component) {
  function Toolbar() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Toolbar);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$f(this, Toolbar, [].concat(args));
    _this.navigate = function (action) {
      _this.props.onNavigate(action);
    };
    _this.view = function (view) {
      _this.props.onView(view);
    };
    return _this;
  }
  (0,inherits/* default */.A)(Toolbar, _React$Component);
  return (0,createClass/* default */.A)(Toolbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
      return /*#__PURE__*/react.createElement("div", {
        className: "rbc-toolbar"
      }, /*#__PURE__*/react.createElement("span", {
        className: "rbc-btn-group"
      }, /*#__PURE__*/react.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, react_big_calendar_esm_navigate.TODAY)
      }, messages.today), /*#__PURE__*/react.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, react_big_calendar_esm_navigate.PREVIOUS)
      }, messages.previous), /*#__PURE__*/react.createElement("button", {
        type: "button",
        onClick: this.navigate.bind(null, react_big_calendar_esm_navigate.NEXT)
      }, messages.next)), /*#__PURE__*/react.createElement("span", {
        className: "rbc-toolbar-label"
      }, label), /*#__PURE__*/react.createElement("span", {
        className: "rbc-btn-group"
      }, this.viewNamesGroup(messages)));
    }
  }, {
    key: "viewNamesGroup",
    value: function viewNamesGroup(messages) {
      var _this2 = this;
      var viewNames = this.props.views;
      var view = this.props.view;
      if (viewNames.length > 1) {
        return viewNames.map(function (name) {
          return /*#__PURE__*/react.createElement("button", {
            type: "button",
            key: name,
            className: (0,clsx/* default */.A)({
              'rbc-active': view === name
            }),
            onClick: _this2.view.bind(null, name)
          }, messages[name]);
        });
      }
    }
  }]);
}(react.Component);
Toolbar.propTypes =  false ? 0 : {};
function notify(handler, args) {
  handler && handler.apply(null, [].concat(args));
}
function ownKeys$9(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$9(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$9(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
var defaultMessages = {
  date: 'Date',
  time: 'Time',
  event: 'Event',
  allDay: 'All Day',
  week: 'Week',
  work_week: 'Work Week',
  day: 'Day',
  month: 'Month',
  previous: 'Back',
  next: 'Next',
  yesterday: 'Yesterday',
  tomorrow: 'Tomorrow',
  today: 'Today',
  agenda: 'Agenda',
  noEventsInRange: 'There are no events in this range.',
  showMore: function showMore(total) {
    return "+".concat(total, " more");
  }
};
function messages(msgs) {
  return _objectSpread$9(_objectSpread$9({}, defaultMessages), msgs);
}
function useClickOutside(_ref) {
  var ref = _ref.ref,
    callback = _ref.callback;
  (0,react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
var _excluded$7 = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"];
function ownKeys$8(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$8(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$8(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper$e(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$e() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$e() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$e = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var EventCell = /*#__PURE__*/function (_React$Component) {
  function EventCell() {
    (0,classCallCheck/* default */.A)(this, EventCell);
    return _callSuper$e(this, EventCell, arguments);
  }
  (0,inherits/* default */.A)(EventCell, _React$Component);
  return (0,createClass/* default */.A)(EventCell, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        style = _this$props.style,
        className = _this$props.className,
        event = _this$props.event,
        selected = _this$props.selected,
        isAllDay = _this$props.isAllDay,
        onSelect = _this$props.onSelect,
        _onDoubleClick = _this$props.onDoubleClick,
        onKeyPress = _this$props.onKeyPress,
        localizer = _this$props.localizer,
        continuesPrior = _this$props.continuesPrior,
        continuesAfter = _this$props.continuesAfter,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        children = _this$props.children,
        _this$props$component = _this$props.components,
        Event = _this$props$component.event,
        EventWrapper = _this$props$component.eventWrapper,
        slotStart = _this$props.slotStart,
        slotEnd = _this$props.slotEnd,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$7);
      delete props.resizable;
      var title = accessors.title(event);
      var tooltip = accessors.tooltip(event);
      var end = accessors.end(event);
      var start = accessors.start(event);
      var allDay = accessors.allDay(event);
      var showAsAllDay = isAllDay || allDay || localizer.diff(start, localizer.ceil(end, 'day'), 'day') > 1;
      var userProps = getters.eventProp(event, start, end, selected);
      var content = /*#__PURE__*/react.createElement("div", {
        className: "rbc-event-content",
        title: tooltip || undefined
      }, Event ? /*#__PURE__*/react.createElement(Event, {
        event: event,
        continuesPrior: continuesPrior,
        continuesAfter: continuesAfter,
        title: title,
        isAllDay: allDay,
        localizer: localizer,
        slotStart: slotStart,
        slotEnd: slotEnd
      }) : title);
      return /*#__PURE__*/react.createElement(EventWrapper, (0,esm_extends/* default */.A)({}, this.props, {
        type: "date"
      }), /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, props, {
        style: _objectSpread$8(_objectSpread$8({}, userProps.style), style),
        className: (0,clsx/* default */.A)('rbc-event', className, userProps.className, {
          'rbc-selected': selected,
          'rbc-event-allday': showAsAllDay,
          'rbc-event-continues-prior': continuesPrior,
          'rbc-event-continues-after': continuesAfter
        }),
        onClick: function onClick(e) {
          return onSelect && onSelect(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return _onDoubleClick && _onDoubleClick(event, e);
        },
        onKeyDown: function onKeyDown(e) {
          return onKeyPress && onKeyPress(event, e);
        }
      }), typeof children === 'function' ? children(content) : content));
    }
  }]);
}(react.Component);
EventCell.propTypes =  false ? 0 : {};
function isSelected(event, selected) {
  if (!event || selected == null) return false;
  return isEqual_default()(event, selected);
}
function slotWidth(rowBox, slots) {
  var rowWidth = rowBox.right - rowBox.left;
  var cellWidth = rowWidth / slots;
  return cellWidth;
}
function getSlotAtX(rowBox, x, rtl, slots) {
  var cellWidth = slotWidth(rowBox, slots);
  return rtl ? slots - 1 - Math.floor((x - rowBox.left) / cellWidth) : Math.floor((x - rowBox.left) / cellWidth);
}
function pointInBox(box, _ref) {
  var x = _ref.x,
    y = _ref.y;
  return y >= box.top && y <= box.bottom && x >= box.left && x <= box.right;
}
function dateCellSelection(start, rowBox, box, slots, rtl) {
  var startIdx = -1;
  var endIdx = -1;
  var lastSlotIdx = slots - 1;
  var cellWidth = slotWidth(rowBox, slots);

  // cell under the mouse
  var currentSlot = getSlotAtX(rowBox, box.x, rtl, slots);

  // Identify row as either the initial row
  // or the row under the current mouse point
  var isCurrentRow = rowBox.top < box.y && rowBox.bottom > box.y;
  var isStartRow = rowBox.top < start.y && rowBox.bottom > start.y;

  // this row's position relative to the start point
  var isAboveStart = start.y > rowBox.bottom;
  var isBelowStart = rowBox.top > start.y;
  var isBetween = box.top < rowBox.top && box.bottom > rowBox.bottom;

  // this row is between the current and start rows, so entirely selected
  if (isBetween) {
    startIdx = 0;
    endIdx = lastSlotIdx;
  }
  if (isCurrentRow) {
    if (isBelowStart) {
      startIdx = 0;
      endIdx = currentSlot;
    } else if (isAboveStart) {
      startIdx = currentSlot;
      endIdx = lastSlotIdx;
    }
  }
  if (isStartRow) {
    // select the cell under the initial point
    startIdx = endIdx = rtl ? lastSlotIdx - Math.floor((start.x - rowBox.left) / cellWidth) : Math.floor((start.x - rowBox.left) / cellWidth);
    if (isCurrentRow) {
      if (currentSlot < startIdx) startIdx = currentSlot;else endIdx = currentSlot; //select current range
    } else if (start.y < box.y) {
      // the current row is below start row
      // select cells to the right of the start cell
      endIdx = lastSlotIdx;
    } else {
      // select cells to the left of the start cell
      startIdx = 0;
    }
  }
  return {
    startIdx: startIdx,
    endIdx: endIdx
  };
}

/**
 * Changes to react-overlays cause issue with auto positioning,
 * so we need to manually calculate the position of the popper,
 * and constrain it to the Month container.
 */
function getPosition(_ref) {
  var target = _ref.target,
    offset = _ref.offset,
    container = _ref.container,
    box = _ref.box;
  var _getOffset = offset_offset(target),
    top = _getOffset.top,
    left = _getOffset.left,
    width = _getOffset.width,
    height = _getOffset.height;
  var _getOffset2 = offset_offset(container),
    cTop = _getOffset2.top,
    cLeft = _getOffset2.left,
    cWidth = _getOffset2.width,
    cHeight = _getOffset2.height;
  var _getOffset3 = offset_offset(box),
    bWidth = _getOffset3.width,
    bHeight = _getOffset3.height;
  var viewBottom = cTop + cHeight;
  var viewRight = cLeft + cWidth;
  var bottom = top + bHeight;
  var right = left + bWidth;
  var x = offset.x,
    y = offset.y;
  var topOffset = bottom > viewBottom ? top - bHeight - y : top + y + height;
  var leftOffset = right > viewRight ? left + x - bWidth + width : left + x;
  return {
    topOffset: topOffset,
    leftOffset: leftOffset
  };
}
function Pop(_ref2) {
  var containerRef = _ref2.containerRef,
    accessors = _ref2.accessors,
    getters = _ref2.getters,
    selected = _ref2.selected,
    components = _ref2.components,
    localizer = _ref2.localizer,
    position = _ref2.position,
    show = _ref2.show,
    events = _ref2.events,
    slotStart = _ref2.slotStart,
    slotEnd = _ref2.slotEnd,
    onSelect = _ref2.onSelect,
    onDoubleClick = _ref2.onDoubleClick,
    onKeyPress = _ref2.onKeyPress,
    handleDragStart = _ref2.handleDragStart,
    popperRef = _ref2.popperRef,
    target = _ref2.target,
    offset = _ref2.offset;
  useClickOutside({
    ref: popperRef,
    callback: show
  });
  (0,react.useLayoutEffect)(function () {
    var _getPosition = getPosition({
        target: target,
        offset: offset,
        container: containerRef.current,
        box: popperRef.current
      }),
      topOffset = _getPosition.topOffset,
      leftOffset = _getPosition.leftOffset;
    popperRef.current.style.top = "".concat(topOffset, "px");
    popperRef.current.style.left = "".concat(leftOffset, "px");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset.x, offset.y, target]);
  var width = position.width;
  var style = {
    minWidth: width + width / 2
  };
  return /*#__PURE__*/react.createElement("div", {
    style: style,
    className: "rbc-overlay",
    ref: popperRef
  }, /*#__PURE__*/react.createElement("div", {
    className: "rbc-overlay-header"
  }, localizer.format(slotStart, 'dayHeaderFormat')), events.map(function (event, idx) {
    return /*#__PURE__*/react.createElement(EventCell, {
      key: idx,
      type: "popup",
      localizer: localizer,
      event: event,
      getters: getters,
      onSelect: onSelect,
      accessors: accessors,
      components: components,
      onDoubleClick: onDoubleClick,
      onKeyPress: onKeyPress,
      continuesPrior: localizer.lt(accessors.end(event), slotStart, 'day'),
      continuesAfter: localizer.gte(accessors.start(event), slotEnd, 'day'),
      slotStart: slotStart,
      slotEnd: slotEnd,
      selected: isSelected(event, selected),
      draggable: true,
      onDragStart: function onDragStart() {
        return handleDragStart(event);
      },
      onDragEnd: function onDragEnd() {
        return show();
      }
    });
  }));
}
var Popup = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(Pop, (0,esm_extends/* default */.A)({}, props, {
    popperRef: ref
  }));
});
Popup.propTypes = {
  accessors: (prop_types_default()).object.isRequired,
  getters: (prop_types_default()).object.isRequired,
  selected: (prop_types_default()).object,
  components: (prop_types_default()).object.isRequired,
  localizer: (prop_types_default()).object.isRequired,
  position: (prop_types_default()).object.isRequired,
  show: (prop_types_default()).func.isRequired,
  events: (prop_types_default()).array.isRequired,
  slotStart: prop_types_default().instanceOf(Date).isRequired,
  slotEnd: prop_types_default().instanceOf(Date),
  onSelect: (prop_types_default()).func,
  onDoubleClick: (prop_types_default()).func,
  onKeyPress: (prop_types_default()).func,
  handleDragStart: (prop_types_default()).func,
  style: (prop_types_default()).object,
  offset: prop_types_default().shape({
    x: (prop_types_default()).number,
    y: (prop_types_default()).number
  })
};
function CalOverlay(_ref) {
  var containerRef = _ref.containerRef,
    _ref$popupOffset = _ref.popupOffset,
    popupOffset = _ref$popupOffset === void 0 ? 5 : _ref$popupOffset,
    overlay = _ref.overlay,
    accessors = _ref.accessors,
    localizer = _ref.localizer,
    components = _ref.components,
    getters = _ref.getters,
    selected = _ref.selected,
    handleSelectEvent = _ref.handleSelectEvent,
    handleDoubleClickEvent = _ref.handleDoubleClickEvent,
    handleKeyPressEvent = _ref.handleKeyPressEvent,
    handleDragStart = _ref.handleDragStart,
    onHide = _ref.onHide,
    overlayDisplay = _ref.overlayDisplay;
  var popperRef = (0,react.useRef)(null);
  if (!overlay.position) return null;
  var offset = popupOffset;
  if (!isNaN(popupOffset)) {
    offset = {
      x: popupOffset,
      y: popupOffset
    };
  }
  var position = overlay.position,
    events = overlay.events,
    date = overlay.date,
    end = overlay.end;
  return /*#__PURE__*/react.createElement(esm_Overlay, {
    rootClose: true,
    flip: true,
    show: true,
    placement: "bottom",
    onHide: onHide,
    target: overlay.target
  }, function (_ref2) {
    var props = _ref2.props;
    return /*#__PURE__*/react.createElement(Popup, (0,esm_extends/* default */.A)({}, props, {
      containerRef: containerRef,
      ref: popperRef,
      target: overlay.target,
      offset: offset,
      accessors: accessors,
      getters: getters,
      selected: selected,
      components: components,
      localizer: localizer,
      position: position,
      show: overlayDisplay,
      events: events,
      slotStart: date,
      slotEnd: end,
      onSelect: handleSelectEvent,
      onDoubleClick: handleDoubleClickEvent,
      onKeyPress: handleKeyPressEvent,
      handleDragStart: handleDragStart
    }));
  });
}
var PopOverlay = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(CalOverlay, (0,esm_extends/* default */.A)({}, props, {
    containerRef: ref
  }));
});
PopOverlay.propTypes = {
  popupOffset: prop_types_default().oneOfType([(prop_types_default()).number, prop_types_default().shape({
    x: (prop_types_default()).number,
    y: (prop_types_default()).number
  })]),
  overlay: prop_types_default().shape({
    position: (prop_types_default()).object,
    events: (prop_types_default()).array,
    date: prop_types_default().instanceOf(Date),
    end: prop_types_default().instanceOf(Date)
  }),
  accessors: (prop_types_default()).object.isRequired,
  localizer: (prop_types_default()).object.isRequired,
  components: (prop_types_default()).object.isRequired,
  getters: (prop_types_default()).object.isRequired,
  selected: (prop_types_default()).object,
  handleSelectEvent: (prop_types_default()).func,
  handleDoubleClickEvent: (prop_types_default()).func,
  handleKeyPressEvent: (prop_types_default()).func,
  handleDragStart: (prop_types_default()).func,
  onHide: (prop_types_default()).func,
  overlayDisplay: (prop_types_default()).func
};
function react_big_calendar_esm_addEventListener(type, handler) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  return dom_helpers_esm_listen(target, type, handler, {
    passive: false
  });
}
function isOverContainer(container, x, y) {
  return !container || contains(container, document.elementFromPoint(x, y));
}
function getEventNodeFromPoint(node, _ref) {
  var clientX = _ref.clientX,
    clientY = _ref.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, '.rbc-event', node);
}
function getShowMoreNodeFromPoint(node, _ref2) {
  var clientX = _ref2.clientX,
    clientY = _ref2.clientY;
  var target = document.elementFromPoint(clientX, clientY);
  return closest(target, '.rbc-show-more', node);
}
function isEvent(node, bounds) {
  return !!getEventNodeFromPoint(node, bounds);
}
function isShowMore(node, bounds) {
  return !!getShowMoreNodeFromPoint(node, bounds);
}
function getEventCoordinates(e) {
  var target = e;
  if (e.touches && e.touches.length) {
    target = e.touches[0];
  }
  return {
    clientX: target.clientX,
    clientY: target.clientY,
    pageX: target.pageX,
    pageY: target.pageY
  };
}
var clickTolerance = 5;
var clickInterval = 250;
var Selection = /*#__PURE__*/function () {
  function Selection(node) {
    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$global = _ref3.global,
      global = _ref3$global === void 0 ? false : _ref3$global,
      _ref3$longPressThresh = _ref3.longPressThreshold,
      longPressThreshold = _ref3$longPressThresh === void 0 ? 250 : _ref3$longPressThresh,
      _ref3$validContainers = _ref3.validContainers,
      validContainers = _ref3$validContainers === void 0 ? [] : _ref3$validContainers;
    (0,classCallCheck/* default */.A)(this, Selection);
    this._initialEvent = null;
    this.selecting = false;
    this.isDetached = false;
    this.container = node;
    this.globalMouse = !node || global;
    this.longPressThreshold = longPressThreshold;
    this.validContainers = validContainers;
    this._listeners = Object.create(null);
    this._handleInitialEvent = this._handleInitialEvent.bind(this);
    this._handleMoveEvent = this._handleMoveEvent.bind(this);
    this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this);
    this._keyListener = this._keyListener.bind(this);
    this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this);
    this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this);

    // Fixes an iOS 10 bug where scrolling could not be prevented on the window.
    // https://github.com/metafizzy/flickity/issues/457#issuecomment-254501356
    this._removeTouchMoveWindowListener = react_big_calendar_esm_addEventListener('touchmove', function () {}, window);
    this._removeKeyDownListener = react_big_calendar_esm_addEventListener('keydown', this._keyListener);
    this._removeKeyUpListener = react_big_calendar_esm_addEventListener('keyup', this._keyListener);
    this._removeDropFromOutsideListener = react_big_calendar_esm_addEventListener('drop', this._dropFromOutsideListener);
    this._removeDragOverFromOutsideListener = react_big_calendar_esm_addEventListener('dragover', this._dragOverFromOutsideListener);
    this._addInitialEventListener();
  }
  return (0,createClass/* default */.A)(Selection, [{
    key: "on",
    value: function on(type, handler) {
      var handlers = this._listeners[type] || (this._listeners[type] = []);
      handlers.push(handler);
      return {
        remove: function remove() {
          var idx = handlers.indexOf(handler);
          if (idx !== -1) handlers.splice(idx, 1);
        }
      };
    }
  }, {
    key: "emit",
    value: function emit(type) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var result;
      var handlers = this._listeners[type] || [];
      handlers.forEach(function (fn) {
        if (result === undefined) result = fn.apply(void 0, args);
      });
      return result;
    }
  }, {
    key: "teardown",
    value: function teardown() {
      this._initialEvent = null;
      this._initialEventData = null;
      this._selectRect = null;
      this.selecting = false;
      this._lastClickData = null;
      this.isDetached = true;
      this._listeners = Object.create(null);
      this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener();
      this._removeInitialEventListener && this._removeInitialEventListener();
      this._removeEndListener && this._removeEndListener();
      this._onEscListener && this._onEscListener();
      this._removeMoveListener && this._removeMoveListener();
      this._removeKeyUpListener && this._removeKeyUpListener();
      this._removeKeyDownListener && this._removeKeyDownListener();
      this._removeDropFromOutsideListener && this._removeDropFromOutsideListener();
      this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
    }
  }, {
    key: "isSelected",
    value: function isSelected(node) {
      var box = this._selectRect;
      if (!box || !this.selecting) return false;
      return objectsCollide(box, getBoundsForNode(node));
    }
  }, {
    key: "filter",
    value: function filter(items) {
      var box = this._selectRect;

      //not selecting
      if (!box || !this.selecting) return [];
      return items.filter(this.isSelected, this);
    }

    // Adds a listener that will call the handler only after the user has pressed on the screen
    // without moving their finger for 250ms.
  }, {
    key: "_addLongPressListener",
    value: function _addLongPressListener(handler, initialEvent) {
      var _this = this;
      var timer = null;
      var removeTouchMoveListener = null;
      var removeTouchEndListener = null;
      var handleTouchStart = function handleTouchStart(initialEvent) {
        timer = setTimeout(function () {
          cleanup();
          handler(initialEvent);
        }, _this.longPressThreshold);
        removeTouchMoveListener = react_big_calendar_esm_addEventListener('touchmove', function () {
          return cleanup();
        });
        removeTouchEndListener = react_big_calendar_esm_addEventListener('touchend', function () {
          return cleanup();
        });
      };
      var removeTouchStartListener = react_big_calendar_esm_addEventListener('touchstart', handleTouchStart);
      var cleanup = function cleanup() {
        if (timer) {
          clearTimeout(timer);
        }
        if (removeTouchMoveListener) {
          removeTouchMoveListener();
        }
        if (removeTouchEndListener) {
          removeTouchEndListener();
        }
        timer = null;
        removeTouchMoveListener = null;
        removeTouchEndListener = null;
      };
      if (initialEvent) {
        handleTouchStart(initialEvent);
      }
      return function () {
        cleanup();
        removeTouchStartListener();
      };
    }

    // Listen for mousedown and touchstart events. When one is received, disable the other and setup
    // future event handling based on the type of event.
  }, {
    key: "_addInitialEventListener",
    value: function _addInitialEventListener() {
      var _this2 = this;
      var removeMouseDownListener = react_big_calendar_esm_addEventListener('mousedown', function (e) {
        _this2._removeInitialEventListener();
        _this2._handleInitialEvent(e);
        _this2._removeInitialEventListener = react_big_calendar_esm_addEventListener('mousedown', _this2._handleInitialEvent);
      });
      var removeTouchStartListener = react_big_calendar_esm_addEventListener('touchstart', function (e) {
        _this2._removeInitialEventListener();
        _this2._removeInitialEventListener = _this2._addLongPressListener(_this2._handleInitialEvent, e);
      });
      this._removeInitialEventListener = function () {
        removeMouseDownListener();
        removeTouchStartListener();
      };
    }
  }, {
    key: "_dropFromOutsideListener",
    value: function _dropFromOutsideListener(e) {
      var _getEventCoordinates = getEventCoordinates(e),
        pageX = _getEventCoordinates.pageX,
        pageY = _getEventCoordinates.pageY,
        clientX = _getEventCoordinates.clientX,
        clientY = _getEventCoordinates.clientY;
      this.emit('dropFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_dragOverFromOutsideListener",
    value: function _dragOverFromOutsideListener(e) {
      var _getEventCoordinates2 = getEventCoordinates(e),
        pageX = _getEventCoordinates2.pageX,
        pageY = _getEventCoordinates2.pageY,
        clientX = _getEventCoordinates2.clientX,
        clientY = _getEventCoordinates2.clientY;
      this.emit('dragOverFromOutside', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      e.preventDefault();
    }
  }, {
    key: "_handleInitialEvent",
    value: function _handleInitialEvent(e) {
      this._initialEvent = e;
      if (this.isDetached) {
        return;
      }
      var _getEventCoordinates3 = getEventCoordinates(e),
        clientX = _getEventCoordinates3.clientX,
        clientY = _getEventCoordinates3.clientY,
        pageX = _getEventCoordinates3.pageX,
        pageY = _getEventCoordinates3.pageY;
      var node = this.container(),
        collides,
        offsetData;

      // Right clicks
      if (e.which === 3 || e.button === 2 || !isOverContainer(node, clientX, clientY)) return;
      if (!this.globalMouse && node && !contains(node, e.target)) {
        var _normalizeDistance = normalizeDistance(0),
          top = _normalizeDistance.top,
          left = _normalizeDistance.left,
          bottom = _normalizeDistance.bottom,
          right = _normalizeDistance.right;
        offsetData = getBoundsForNode(node);
        collides = objectsCollide({
          top: offsetData.top - top,
          left: offsetData.left - left,
          bottom: offsetData.bottom + bottom,
          right: offsetData.right + right
        }, {
          top: pageY,
          left: pageX
        });
        if (!collides) return;
      }
      var result = this.emit('beforeSelect', this._initialEventData = {
        isTouch: /^touch/.test(e.type),
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
      if (result === false) return;
      switch (e.type) {
        case 'mousedown':
          this._removeEndListener = react_big_calendar_esm_addEventListener('mouseup', this._handleTerminatingEvent);
          this._onEscListener = react_big_calendar_esm_addEventListener('keydown', this._handleTerminatingEvent);
          this._removeMoveListener = react_big_calendar_esm_addEventListener('mousemove', this._handleMoveEvent);
          break;
        case 'touchstart':
          this._handleMoveEvent(e);
          this._removeEndListener = react_big_calendar_esm_addEventListener('touchend', this._handleTerminatingEvent);
          this._removeMoveListener = react_big_calendar_esm_addEventListener('touchmove', this._handleMoveEvent);
          break;
      }
    }

    // Check whether provided event target element
    // - is contained within a valid container
  }, {
    key: "_isWithinValidContainer",
    value: function _isWithinValidContainer(e) {
      var eventTarget = e.target;
      var containers = this.validContainers;
      if (!containers || !containers.length || !eventTarget) {
        return true;
      }
      return containers.some(function (target) {
        return !!eventTarget.closest(target);
      });
    }
  }, {
    key: "_handleTerminatingEvent",
    value: function _handleTerminatingEvent(e) {
      var selecting = this.selecting;
      var bounds = this._selectRect;
      // If it's not in selecting state, it's a click event
      if (!selecting && e.type.includes('key')) {
        e = this._initialEvent;
      }
      this.selecting = false;
      this._removeEndListener && this._removeEndListener();
      this._removeMoveListener && this._removeMoveListener();
      this._selectRect = null;
      this._initialEvent = null;
      this._initialEventData = null;
      if (!e) return;
      var inRoot = !this.container || contains(this.container(), e.target);
      var isWithinValidContainer = this._isWithinValidContainer(e);
      if (e.key === 'Escape' || !isWithinValidContainer) {
        return this.emit('reset');
      }
      if (!selecting && inRoot) {
        return this._handleClickEvent(e);
      }

      // User drag-clicked in the Selectable area
      if (selecting) return this.emit('select', bounds);
      return this.emit('reset');
    }
  }, {
    key: "_handleClickEvent",
    value: function _handleClickEvent(e) {
      var _getEventCoordinates4 = getEventCoordinates(e),
        pageX = _getEventCoordinates4.pageX,
        pageY = _getEventCoordinates4.pageY,
        clientX = _getEventCoordinates4.clientX,
        clientY = _getEventCoordinates4.clientY;
      var now = new Date().getTime();
      if (this._lastClickData && now - this._lastClickData.timestamp < clickInterval) {
        // Double click event
        this._lastClickData = null;
        return this.emit('doubleClick', {
          x: pageX,
          y: pageY,
          clientX: clientX,
          clientY: clientY
        });
      }

      // Click event
      this._lastClickData = {
        timestamp: now
      };
      return this.emit('click', {
        x: pageX,
        y: pageY,
        clientX: clientX,
        clientY: clientY
      });
    }
  }, {
    key: "_handleMoveEvent",
    value: function _handleMoveEvent(e) {
      if (this._initialEventData === null || this.isDetached) {
        return;
      }
      var _this$_initialEventDa = this._initialEventData,
        x = _this$_initialEventDa.x,
        y = _this$_initialEventDa.y;
      var _getEventCoordinates5 = getEventCoordinates(e),
        pageX = _getEventCoordinates5.pageX,
        pageY = _getEventCoordinates5.pageY;
      var w = Math.abs(x - pageX);
      var h = Math.abs(y - pageY);
      var left = Math.min(pageX, x),
        top = Math.min(pageY, y),
        old = this.selecting;
      var click = this.isClick(pageX, pageY);
      // Prevent emitting selectStart event until mouse is moved.
      // in Chrome on Windows, mouseMove event may be fired just after mouseDown event.
      if (click && !old && !(w || h)) {
        return;
      }
      if (!old && !click) {
        this.emit('selectStart', this._initialEventData);
      }
      if (!click) {
        this.selecting = true;
        this._selectRect = {
          top: top,
          left: left,
          x: pageX,
          y: pageY,
          right: left + w,
          bottom: top + h
        };
        this.emit('selecting', this._selectRect);
      }
      e.preventDefault();
    }
  }, {
    key: "_keyListener",
    value: function _keyListener(e) {
      this.ctrl = e.metaKey || e.ctrlKey;
    }
  }, {
    key: "isClick",
    value: function isClick(pageX, pageY) {
      var _this$_initialEventDa2 = this._initialEventData,
        x = _this$_initialEventDa2.x,
        y = _this$_initialEventDa2.y,
        isTouch = _this$_initialEventDa2.isTouch;
      return !isTouch && Math.abs(pageX - x) <= clickTolerance && Math.abs(pageY - y) <= clickTolerance;
    }
  }]);
}();
/**
 * Resolve the disance prop from either an Int or an Object
 * @return {Object}
 */
function normalizeDistance() {
  var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if ((0,esm_typeof/* default */.A)(distance) !== 'object') distance = {
    top: distance,
    left: distance,
    right: distance,
    bottom: distance
  };
  return distance;
}

/**
 * Given two objects containing "top", "left", "offsetWidth" and "offsetHeight"
 * properties, determine if they collide.
 * @param  {Object|HTMLElement} a
 * @param  {Object|HTMLElement} b
 * @return {bool}
 */
function objectsCollide(nodeA, nodeB) {
  var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _getBoundsForNode = getBoundsForNode(nodeA),
    aTop = _getBoundsForNode.top,
    aLeft = _getBoundsForNode.left,
    _getBoundsForNode$rig = _getBoundsForNode.right,
    aRight = _getBoundsForNode$rig === void 0 ? aLeft : _getBoundsForNode$rig,
    _getBoundsForNode$bot = _getBoundsForNode.bottom,
    aBottom = _getBoundsForNode$bot === void 0 ? aTop : _getBoundsForNode$bot;
  var _getBoundsForNode2 = getBoundsForNode(nodeB),
    bTop = _getBoundsForNode2.top,
    bLeft = _getBoundsForNode2.left,
    _getBoundsForNode2$ri = _getBoundsForNode2.right,
    bRight = _getBoundsForNode2$ri === void 0 ? bLeft : _getBoundsForNode2$ri,
    _getBoundsForNode2$bo = _getBoundsForNode2.bottom,
    bBottom = _getBoundsForNode2$bo === void 0 ? bTop : _getBoundsForNode2$bo;
  return !(
  // 'a' bottom doesn't touch 'b' top

  aBottom - tolerance < bTop ||
  // 'a' top doesn't touch 'b' bottom
  aTop + tolerance > bBottom ||
  // 'a' right doesn't touch 'b' left
  aRight - tolerance < bLeft ||
  // 'a' left doesn't touch 'b' right
  aLeft + tolerance > bRight);
}

/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
function getBoundsForNode(node) {
  if (!node.getBoundingClientRect) return node;
  var rect = node.getBoundingClientRect(),
    left = rect.left + pageOffset('left'),
    top = rect.top + pageOffset('top');
  return {
    top: top,
    left: left,
    right: (node.offsetWidth || 0) + left,
    bottom: (node.offsetHeight || 0) + top
  };
}
function pageOffset(dir) {
  if (dir === 'left') return window.pageXOffset || document.body.scrollLeft || 0;
  if (dir === 'top') return window.pageYOffset || document.body.scrollTop || 0;
}
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper$d(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$d() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$d() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$d = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var BackgroundCells = /*#__PURE__*/function (_React$Component) {
  function BackgroundCells(props, context) {
    var _this;
    (0,classCallCheck/* default */.A)(this, BackgroundCells);
    _this = _callSuper$d(this, BackgroundCells, [props, context]);
    _this.state = {
      selecting: false
    };
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  (0,inherits/* default */.A)(BackgroundCells, _React$Component);
  return (0,createClass/* default */.A)(BackgroundCells, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.selectable && this.props.selectable) this._selectable();
      if (prevProps.selectable && !this.props.selectable) this._teardownSelectable();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        range = _this$props.range,
        getNow = _this$props.getNow,
        getters = _this$props.getters,
        currentDate = _this$props.date,
        Wrapper = _this$props.components.dateCellWrapper,
        localizer = _this$props.localizer;
      var _this$state = this.state,
        selecting = _this$state.selecting,
        startIdx = _this$state.startIdx,
        endIdx = _this$state.endIdx;
      var current = getNow();
      return /*#__PURE__*/react.createElement("div", {
        className: "rbc-row-bg",
        ref: this.containerRef
      }, range.map(function (date, index) {
        var selected = selecting && index >= startIdx && index <= endIdx;
        var _getters$dayProp = getters.dayProp(date),
          className = _getters$dayProp.className,
          style = _getters$dayProp.style;
        return /*#__PURE__*/react.createElement(Wrapper, {
          key: index,
          value: date,
          range: range
        }, /*#__PURE__*/react.createElement("div", {
          style: style,
          className: (0,clsx/* default */.A)('rbc-day-bg', className, selected && 'rbc-selected-cell', localizer.isSameDate(date, current) && 'rbc-today', currentDate && localizer.neq(currentDate, date, 'month') && 'rbc-off-range-bg')
        }));
      }));
    }
  }, {
    key: "_selectable",
    value: function _selectable() {
      var _this2 = this;
      var node = this.containerRef.current;
      var selector = this._selector = new Selection(this.props.container, {
        longPressThreshold: this.props.longPressThreshold
      });
      var selectorClicksHandler = function selectorClicksHandler(point, actionType) {
        if (!isEvent(node, point) && !isShowMore(node, point)) {
          var rowBox = getBoundsForNode(node);
          var _this2$props = _this2.props,
            range = _this2$props.range,
            rtl = _this2$props.rtl;
          if (pointInBox(rowBox, point)) {
            var currentCell = getSlotAtX(rowBox, point.x, rtl, range.length);
            _this2._selectSlot({
              startIdx: currentCell,
              endIdx: currentCell,
              action: actionType,
              box: point
            });
          }
        }
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
      };
      selector.on('selecting', function (box) {
        var _this2$props2 = _this2.props,
          range = _this2$props2.range,
          rtl = _this2$props2.rtl;
        var startIdx = -1;
        var endIdx = -1;
        if (!_this2.state.selecting) {
          notify(_this2.props.onSelectStart, [box]);
          _this2._initial = {
            x: box.x,
            y: box.y
          };
        }
        if (selector.isSelected(node)) {
          var nodeBox = getBoundsForNode(node);
          var _dateCellSelection = dateCellSelection(_this2._initial, nodeBox, box, range.length, rtl);
          startIdx = _dateCellSelection.startIdx;
          endIdx = _dateCellSelection.endIdx;
        }
        _this2.setState({
          selecting: true,
          startIdx: startIdx,
          endIdx: endIdx
        });
      });
      selector.on('beforeSelect', function (box) {
        if (_this2.props.selectable !== 'ignoreEvents') return;
        return !isEvent(_this2.containerRef.current, box);
      });
      selector.on('click', function (point) {
        return selectorClicksHandler(point, 'click');
      });
      selector.on('doubleClick', function (point) {
        return selectorClicksHandler(point, 'doubleClick');
      });
      selector.on('select', function (bounds) {
        _this2._selectSlot(_objectSpread$7(_objectSpread$7({}, _this2.state), {}, {
          action: 'select',
          bounds: bounds
        }));
        _this2._initial = {};
        _this2.setState({
          selecting: false
        });
        notify(_this2.props.onSelectEnd, [_this2.state]);
      });
    }
  }, {
    key: "_teardownSelectable",
    value: function _teardownSelectable() {
      if (!this._selector) return;
      this._selector.teardown();
      this._selector = null;
    }
  }, {
    key: "_selectSlot",
    value: function _selectSlot(_ref) {
      var endIdx = _ref.endIdx,
        startIdx = _ref.startIdx,
        action = _ref.action,
        bounds = _ref.bounds,
        box = _ref.box;
      if (endIdx !== -1 && startIdx !== -1) this.props.onSelectSlot && this.props.onSelectSlot({
        start: startIdx,
        end: endIdx,
        action: action,
        bounds: bounds,
        box: box,
        resourceId: this.props.resourceId
      });
    }
  }]);
}(react.Component);
BackgroundCells.propTypes =  false ? 0 : {};

/* eslint-disable react/prop-types */
var EventRowMixin = {
  propTypes: {
    slotMetrics: (prop_types_default()).object.isRequired,
    selected: (prop_types_default()).object,
    isAllDay: (prop_types_default()).bool,
    accessors: (prop_types_default()).object.isRequired,
    localizer: (prop_types_default()).object.isRequired,
    components: (prop_types_default()).object.isRequired,
    getters: (prop_types_default()).object.isRequired,
    onSelect: (prop_types_default()).func,
    onDoubleClick: (prop_types_default()).func,
    onKeyPress: (prop_types_default()).func
  },
  defaultProps: {
    segments: [],
    selected: {}
  },
  renderEvent: function renderEvent(props, event) {
    var selected = props.selected;
    props.isAllDay;
    var accessors = props.accessors,
      getters = props.getters,
      onSelect = props.onSelect,
      onDoubleClick = props.onDoubleClick,
      onKeyPress = props.onKeyPress,
      localizer = props.localizer,
      slotMetrics = props.slotMetrics,
      components = props.components,
      resizable = props.resizable;
    var continuesPrior = slotMetrics.continuesPrior(event);
    var continuesAfter = slotMetrics.continuesAfter(event);
    return /*#__PURE__*/react.createElement(EventCell, {
      event: event,
      getters: getters,
      localizer: localizer,
      accessors: accessors,
      components: components,
      onSelect: onSelect,
      onDoubleClick: onDoubleClick,
      onKeyPress: onKeyPress,
      continuesPrior: continuesPrior,
      continuesAfter: continuesAfter,
      slotStart: slotMetrics.first,
      slotEnd: slotMetrics.last,
      selected: isSelected(event, selected),
      resizable: resizable
    });
  },
  renderSpan: function renderSpan(slots, len, key) {
    var content = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ' ';
    var per = Math.abs(len) / slots * 100 + '%';
    return /*#__PURE__*/react.createElement("div", {
      key: key,
      className: "rbc-row-segment"
      // IE10/11 need max-width. flex-basis doesn't respect box-sizing
      ,

      style: {
        WebkitFlexBasis: per,
        flexBasis: per,
        maxWidth: per
      }
    }, content);
  }
};
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper$c(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$c() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$c() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$c = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var EventRow = /*#__PURE__*/function (_React$Component) {
  function EventRow() {
    (0,classCallCheck/* default */.A)(this, EventRow);
    return _callSuper$c(this, EventRow, arguments);
  }
  (0,inherits/* default */.A)(EventRow, _React$Component);
  return (0,createClass/* default */.A)(EventRow, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots,
        className = _this$props.className;
      var lastEnd = 1;
      return /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* default */.A)(className, 'rbc-row')
      }, segments.reduce(function (row, _ref, li) {
        var event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
        var key = '_lvl_' + li;
        var gap = left - lastEnd;
        var content = EventRowMixin.renderEvent(_this.props, event);
        if (gap) row.push(EventRowMixin.renderSpan(slots, gap, "".concat(key, "_gap")));
        row.push(EventRowMixin.renderSpan(slots, span, key, content));
        lastEnd = right + 1;
        return row;
      }, []));
    }
  }]);
}(react.Component);
EventRow.propTypes =  false ? 0 : {};
EventRow.defaultProps = _objectSpread$6({}, EventRowMixin.defaultProps);
function endOfRange(_ref) {
  var dateRange = _ref.dateRange,
    _ref$unit = _ref.unit,
    unit = _ref$unit === void 0 ? 'day' : _ref$unit,
    localizer = _ref.localizer;
  return {
    first: dateRange[0],
    last: localizer.add(dateRange[dateRange.length - 1], 1, unit)
  };
}

// properly calculating segments requires working with dates in
// the timezone we're working with, so we use the localizer
function eventSegments(event, range, accessors, localizer) {
  var _endOfRange = endOfRange({
      dateRange: range,
      localizer: localizer
    }),
    first = _endOfRange.first,
    last = _endOfRange.last;
  var slots = localizer.diff(first, last, 'day');
  var start = localizer.max(localizer.startOf(accessors.start(event), 'day'), first);
  var end = localizer.min(localizer.ceil(accessors.end(event), 'day'), last);
  var padding = findIndex_default()(range, function (x) {
    return localizer.isSameDate(x, start);
  });
  var span = localizer.diff(start, end, 'day');
  span = Math.min(span, slots);
  // The segmentOffset is necessary when adjusting for timezones
  // ahead of the browser timezone
  span = Math.max(span - localizer.segmentOffset, 1);
  return {
    event: event,
    span: span,
    left: padding + 1,
    right: Math.max(padding + span, 1)
  };
}
function eventLevels(rowSegments) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
  var i,
    j,
    seg,
    levels = [],
    extra = [];
  for (i = 0; i < rowSegments.length; i++) {
    seg = rowSegments[i];
    for (j = 0; j < levels.length; j++) if (!segsOverlap(seg, levels[j])) break;
    if (j >= limit) {
      extra.push(seg);
    } else {
      (levels[j] || (levels[j] = [])).push(seg);
    }
  }
  for (i = 0; i < levels.length; i++) {
    levels[i].sort(function (a, b) {
      return a.left - b.left;
    }); //eslint-disable-line
  }
  return {
    levels: levels,
    extra: extra
  };
}
function react_big_calendar_esm_inRange(e, start, end, accessors, localizer) {
  var event = {
    start: accessors.start(e),
    end: accessors.end(e)
  };
  var range = {
    start: start,
    end: end
  };
  return localizer.inEventRange({
    event: event,
    range: range
  });
}
function segsOverlap(seg, otherSegs) {
  return otherSegs.some(function (otherSeg) {
    return otherSeg.left <= seg.right && otherSeg.right >= seg.left;
  });
}
function sortWeekEvents(events, accessors, localizer) {
  var base = (0,toConsumableArray/* default */.A)(events);
  var multiDayEvents = [];
  var standardEvents = [];
  base.forEach(function (event) {
    var startCheck = accessors.start(event);
    var endCheck = accessors.end(event);
    if (localizer.daySpan(startCheck, endCheck) > 1) {
      multiDayEvents.push(event);
    } else {
      standardEvents.push(event);
    }
  });
  var multiSorted = multiDayEvents.sort(function (a, b) {
    return sortEvents(a, b, accessors, localizer);
  });
  var standardSorted = standardEvents.sort(function (a, b) {
    return sortEvents(a, b, accessors, localizer);
  });
  return [].concat((0,toConsumableArray/* default */.A)(multiSorted), (0,toConsumableArray/* default */.A)(standardSorted));
}
function sortEvents(eventA, eventB, accessors, localizer) {
  var evtA = {
    start: accessors.start(eventA),
    end: accessors.end(eventA),
    allDay: accessors.allDay(eventA)
  };
  var evtB = {
    start: accessors.start(eventB),
    end: accessors.end(eventB),
    allDay: accessors.allDay(eventB)
  };
  return localizer.sortEvents({
    evtA: evtA,
    evtB: evtB
  });
}
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper$b(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$b() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$b() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$b = function _isNativeReflectConstruct() {
    return !!t;
  })();
}

// Modified: Check if a segment spans through this slot (including events that started earlier)
var isSegmentInSlot$1 = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var eventsInSlot = function eventsInSlot(segments, slot) {
  return segments.filter(function (seg) {
    return isSegmentInSlot$1(seg, slot);
  }).map(function (seg) {
    return seg.event;
  });
};
var EventEndingRow = /*#__PURE__*/function (_React$Component) {
  function EventEndingRow() {
    (0,classCallCheck/* default */.A)(this, EventEndingRow);
    return _callSuper$b(this, EventEndingRow, arguments);
  }
  (0,inherits/* default */.A)(EventEndingRow, _React$Component);
  return (0,createClass/* default */.A)(EventEndingRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        segments = _this$props.segments,
        slots = _this$props.slotMetrics.slots;
      var rowSegments = eventLevels(segments).levels[0];
      var current = 1,
        lastEnd = 1,
        row = [];
      while (current <= slots) {
        var key = '_lvl_' + current;

        // Find segment that starts at or spans through current slot
        var _ref = rowSegments.filter(function (seg) {
            return isSegmentInSlot$1(seg, current);
          })[0] || {},
          event = _ref.event,
          left = _ref.left,
          right = _ref.right,
          span = _ref.span;
        if (!event) {
          // No visible event starts at this slot, but check if we need a "more" button
          // for hidden events that span this slot
          var hiddenEvents = this.getHiddenEventsForSlot(segments, current);
          if (hiddenEvents.length > 0) {
            var _gap = current - lastEnd;
            if (_gap) {
              row.push(EventRowMixin.renderSpan(slots, _gap, key + '_gap'));
            }
            row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
            lastEnd = current = current + 1;
            continue;
          }
          current++;
          continue;
        }
        var gap = Math.max(0, left - lastEnd);
        if (this.canRenderSlotEvent(left, span)) {
          var content = EventRowMixin.renderEvent(this.props, event);
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
          }
          row.push(EventRowMixin.renderSpan(slots, span, key, content));
          lastEnd = current = right + 1;
        } else {
          if (gap) {
            row.push(EventRowMixin.renderSpan(slots, gap, key + '_gap'));
          }
          row.push(EventRowMixin.renderSpan(slots, 1, key, this.renderShowMore(segments, current)));
          lastEnd = current = current + 1;
        }
      }
      return /*#__PURE__*/react.createElement("div", {
        className: "rbc-row"
      }, row);
    }

    // New helper method to find hidden events for a slot
  }, {
    key: "getHiddenEventsForSlot",
    value: function getHiddenEventsForSlot(segments, slot) {
      // Get all events (visible and hidden) for this slot
      var allEventsInSlot = eventsInSlot(segments, slot);

      // Get visible events for this slot from the first level
      var rowSegments = eventLevels(segments).levels[0];
      var visibleEventsInSlot = rowSegments.filter(function (seg) {
        return isSegmentInSlot$1(seg, slot);
      }).map(function (seg) {
        return seg.event;
      });

      // Return events that are in allEventsInSlot but not in visibleEventsInSlot
      return allEventsInSlot.filter(function (event) {
        return !visibleEventsInSlot.some(function (visEvent) {
          return visEvent === event;
        });
      });
    }
  }, {
    key: "canRenderSlotEvent",
    value: function canRenderSlotEvent(slot, span) {
      var segments = this.props.segments;
      return range_default()(slot, slot + span).every(function (s) {
        var count = eventsInSlot(segments, s).length;
        return count === 1;
      });
    }
  }, {
    key: "renderShowMore",
    value: function renderShowMore(segments, slot) {
      var _this = this;
      var _this$props2 = this.props,
        localizer = _this$props2.localizer,
        slotMetrics = _this$props2.slotMetrics,
        components = _this$props2.components;
      var events = slotMetrics.getEventsForSlot(slot);
      var remainingEvents = eventsInSlot(segments, slot);
      var count = remainingEvents.length;
      if (components !== null && components !== void 0 && components.showMore) {
        var ShowMore = components.showMore;
        // The received slot seems to be 1-based, but the range we use to pull the date is 0-based
        var slotDate = slotMetrics.getDateForSlot(slot - 1);
        return count ? /*#__PURE__*/react.createElement(ShowMore, {
          localizer: localizer,
          slotDate: slotDate,
          slot: slot,
          count: count,
          events: events,
          remainingEvents: remainingEvents
        }) : false;
      }
      return count ? /*#__PURE__*/react.createElement("button", {
        type: "button",
        key: 'sm_' + slot,
        className: (0,clsx/* default */.A)('rbc-button-link', 'rbc-show-more'),
        onClick: function onClick(e) {
          return _this.showMore(slot, e);
        }
      }, localizer.messages.showMore(count, remainingEvents, events)) : false;
    }
  }, {
    key: "showMore",
    value: function showMore(slot, e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.onShowMore(slot, e.target);
    }
  }]);
}(react.Component);
EventEndingRow.propTypes =  false ? 0 : {};
EventEndingRow.defaultProps = _objectSpread$5({}, EventRowMixin.defaultProps);
var ScrollableWeekWrapper = function ScrollableWeekWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement("div", {
    className: "rbc-row-content-scroll-container"
  }, children);
};
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
var isSegmentInSlot = function isSegmentInSlot(seg, slot) {
  return seg.left <= slot && seg.right >= slot;
};
var react_big_calendar_esm_isEqual = function isEqual(a, b) {
  return a[0].range === b[0].range && a[0].events === b[0].events;
};
function getSlotMetrics$1() {
  return memoizeOne(function (options) {
    var range = options.range,
      events = options.events,
      maxRows = options.maxRows,
      minRows = options.minRows,
      accessors = options.accessors,
      localizer = options.localizer;
    var _endOfRange = endOfRange({
        dateRange: range,
        localizer: localizer
      }),
      first = _endOfRange.first,
      last = _endOfRange.last;
    var segments = events.map(function (evt) {
      return eventSegments(evt, range, accessors, localizer);
    });
    var _eventLevels = eventLevels(segments, Math.max(maxRows - 1, 1)),
      levels = _eventLevels.levels,
      extra = _eventLevels.extra;
    // Subtract 1 from minRows to not include showMore button row when
    // it would be rendered
    var minEventRows = extra.length > 0 ? minRows - 1 : minRows;
    while (levels.length < minEventRows) levels.push([]);
    return {
      first: first,
      last: last,
      levels: levels,
      extra: extra,
      range: range,
      slots: range.length,
      clone: function clone(args) {
        var metrics = getSlotMetrics$1();
        return metrics(_objectSpread$4(_objectSpread$4({}, options), args));
      },
      getDateForSlot: function getDateForSlot(slotNumber) {
        return range[slotNumber];
      },
      getSlotForDate: function getSlotForDate(date) {
        return range.find(function (r) {
          return localizer.isSameDate(r, date);
        });
      },
      getEventsForSlot: function getEventsForSlot(slot) {
        return segments.filter(function (seg) {
          return isSegmentInSlot(seg, slot);
        }).map(function (seg) {
          return seg.event;
        });
      },
      continuesPrior: function continuesPrior(event) {
        return localizer.continuesPrior(accessors.start(event), first);
      },
      continuesAfter: function continuesAfter(event) {
        var start = accessors.start(event);
        var end = accessors.end(event);
        return localizer.continuesAfter(start, end, last);
      }
    };
  }, react_big_calendar_esm_isEqual);
}
function _callSuper$a(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$a() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$a() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$a = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var DateContentRow = /*#__PURE__*/function (_React$Component) {
  function DateContentRow() {
    var _this;
    (0,classCallCheck/* default */.A)(this, DateContentRow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$a(this, DateContentRow, [].concat(args));
    _this.handleSelectSlot = function (slot) {
      var _this$props = _this.props,
        range = _this$props.range,
        onSelectSlot = _this$props.onSelectSlot;
      onSelectSlot(range.slice(slot.start, slot.end + 1), slot);
    };
    _this.handleShowMore = function (slot, target) {
      var _this$props2 = _this.props,
        range = _this$props2.range,
        onShowMore = _this$props2.onShowMore;
      var metrics = _this.slotMetrics(_this.props);
      var row = qsa(_this.containerRef.current, '.rbc-row-bg')[0];
      var cell;
      if (row) cell = row.children[slot - 1];
      var events = metrics.getEventsForSlot(slot);
      onShowMore(events, range[slot - 1], cell, slot, target);
    };
    _this.getContainer = function () {
      var container = _this.props.container;
      return container ? container() : _this.containerRef.current;
    };
    _this.renderHeadingCell = function (date, index) {
      var _this$props3 = _this.props,
        renderHeader = _this$props3.renderHeader,
        getNow = _this$props3.getNow,
        localizer = _this$props3.localizer;
      return renderHeader({
        date: date,
        key: "header_".concat(index),
        className: (0,clsx/* default */.A)('rbc-date-cell', localizer.isSameDate(date, getNow()) && 'rbc-now')
      });
    };
    _this.renderDummy = function () {
      var _this$props4 = _this.props,
        className = _this$props4.className,
        range = _this$props4.range,
        renderHeader = _this$props4.renderHeader,
        showAllEvents = _this$props4.showAllEvents;
      return /*#__PURE__*/react.createElement("div", {
        className: className,
        ref: _this.containerRef
      }, /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* default */.A)('rbc-row-content', showAllEvents && 'rbc-row-content-scrollable')
      }, renderHeader && /*#__PURE__*/react.createElement("div", {
        className: "rbc-row",
        ref: _this.headingRowRef
      }, range.map(_this.renderHeadingCell)), /*#__PURE__*/react.createElement("div", {
        className: "rbc-row",
        ref: _this.eventRowRef
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-row-segment"
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-event"
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-event-content"
      }, "\xA0"))))));
    };
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    _this.headingRowRef = /*#__PURE__*/(0,react.createRef)();
    _this.eventRowRef = /*#__PURE__*/(0,react.createRef)();
    _this.slotMetrics = getSlotMetrics$1();
    return _this;
  }
  (0,inherits/* default */.A)(DateContentRow, _React$Component);
  return (0,createClass/* default */.A)(DateContentRow, [{
    key: "getRowLimit",
    value: function getRowLimit() {
      var _this$headingRowRef;
      /* Guessing this only gets called on the dummyRow */
      var eventHeight = height(this.eventRowRef.current);
      var headingHeight = (_this$headingRowRef = this.headingRowRef) !== null && _this$headingRowRef !== void 0 && _this$headingRowRef.current ? height(this.headingRowRef.current) : 0;
      var eventSpace = height(this.containerRef.current) - headingHeight;
      return Math.max(Math.floor(eventSpace / eventHeight), 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        date = _this$props5.date,
        rtl = _this$props5.rtl,
        range = _this$props5.range,
        className = _this$props5.className,
        selected = _this$props5.selected,
        selectable = _this$props5.selectable,
        renderForMeasure = _this$props5.renderForMeasure,
        accessors = _this$props5.accessors,
        getters = _this$props5.getters,
        components = _this$props5.components,
        getNow = _this$props5.getNow,
        renderHeader = _this$props5.renderHeader,
        onSelect = _this$props5.onSelect,
        localizer = _this$props5.localizer,
        onSelectStart = _this$props5.onSelectStart,
        onSelectEnd = _this$props5.onSelectEnd,
        onDoubleClick = _this$props5.onDoubleClick,
        onKeyPress = _this$props5.onKeyPress,
        resourceId = _this$props5.resourceId,
        longPressThreshold = _this$props5.longPressThreshold,
        isAllDay = _this$props5.isAllDay,
        resizable = _this$props5.resizable,
        showAllEvents = _this$props5.showAllEvents;
      if (renderForMeasure) return this.renderDummy();
      var metrics = this.slotMetrics(this.props);
      var levels = metrics.levels,
        extra = metrics.extra;
      var ScrollableWeekComponent = showAllEvents ? ScrollableWeekWrapper : NoopWrapper;
      var WeekWrapper = components.weekWrapper;
      var eventRowProps = {
        selected: selected,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        components: components,
        onSelect: onSelect,
        onDoubleClick: onDoubleClick,
        onKeyPress: onKeyPress,
        resourceId: resourceId,
        slotMetrics: metrics,
        resizable: resizable
      };
      return /*#__PURE__*/react.createElement("div", {
        className: className,
        role: "rowgroup",
        ref: this.containerRef
      }, /*#__PURE__*/react.createElement(BackgroundCells, {
        localizer: localizer,
        date: date,
        getNow: getNow,
        rtl: rtl,
        range: range,
        selectable: selectable,
        container: this.getContainer,
        getters: getters,
        onSelectStart: onSelectStart,
        onSelectEnd: onSelectEnd,
        onSelectSlot: this.handleSelectSlot,
        components: components,
        longPressThreshold: longPressThreshold,
        resourceId: resourceId
      }), /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* default */.A)('rbc-row-content', showAllEvents && 'rbc-row-content-scrollable'),
        role: "row"
      }, renderHeader && /*#__PURE__*/react.createElement("div", {
        className: "rbc-row ",
        ref: this.headingRowRef
      }, range.map(this.renderHeadingCell)), /*#__PURE__*/react.createElement(ScrollableWeekComponent, null, /*#__PURE__*/react.createElement(WeekWrapper, (0,esm_extends/* default */.A)({
        isAllDay: isAllDay
      }, eventRowProps, {
        rtl: this.props.rtl
      }), levels.map(function (segs, idx) {
        return /*#__PURE__*/react.createElement(EventRow, (0,esm_extends/* default */.A)({
          key: idx,
          segments: segs
        }, eventRowProps));
      }), !!extra.length && /*#__PURE__*/react.createElement(EventEndingRow, (0,esm_extends/* default */.A)({
        segments: extra,
        onShowMore: this.handleShowMore
      }, eventRowProps))))));
    }
  }]);
}(react.Component);
DateContentRow.propTypes =  false ? 0 : {};
DateContentRow.defaultProps = {
  minRows: 0,
  maxRows: Infinity
};
var Header = function Header(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/react.createElement("span", {
    role: "columnheader",
    "aria-sort": "none"
  }, label);
};
Header.propTypes =  false ? 0 : {};
var DateHeader = function DateHeader(_ref) {
  var label = _ref.label,
    drilldownView = _ref.drilldownView,
    onDrillDown = _ref.onDrillDown;
  if (!drilldownView) {
    return /*#__PURE__*/react.createElement("span", null, label);
  }
  return /*#__PURE__*/react.createElement("button", {
    type: "button",
    className: "rbc-button-link",
    onClick: onDrillDown
  }, label);
};
DateHeader.propTypes =  false ? 0 : {};
var _excluded$6 = ["date", "className"];
function _callSuper$9(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$9() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$9() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$9 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var eventsForWeek = function eventsForWeek(evts, start, end, accessors, localizer) {
  return evts.filter(function (e) {
    return react_big_calendar_esm_inRange(e, start, end, accessors, localizer);
  });
};
var MonthView = /*#__PURE__*/function (_React$Component) {
  function MonthView() {
    var _this;
    (0,classCallCheck/* default */.A)(this, MonthView);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper$9(this, MonthView, [].concat(_args));
    _this.getContainer = function () {
      return _this.containerRef.current;
    };
    _this.renderWeek = function (week, weekIdx) {
      var _this$props = _this.props,
        events = _this$props.events,
        components = _this$props.components,
        selectable = _this$props.selectable,
        getNow = _this$props.getNow,
        selected = _this$props.selected,
        date = _this$props.date,
        localizer = _this$props.localizer,
        longPressThreshold = _this$props.longPressThreshold,
        accessors = _this$props.accessors,
        getters = _this$props.getters,
        showAllEvents = _this$props.showAllEvents;
      var _this$state = _this.state,
        needLimitMeasure = _this$state.needLimitMeasure,
        rowLimit = _this$state.rowLimit;

      // let's not mutate props
      var weeksEvents = eventsForWeek((0,toConsumableArray/* default */.A)(events), week[0], week[week.length - 1], accessors, localizer);
      var sorted = sortWeekEvents(weeksEvents, accessors, localizer);
      return /*#__PURE__*/react.createElement(DateContentRow, {
        key: weekIdx,
        ref: weekIdx === 0 ? _this.slotRowRef : undefined,
        container: _this.getContainer,
        className: "rbc-month-row",
        getNow: getNow,
        date: date,
        range: week,
        events: sorted,
        maxRows: showAllEvents ? Infinity : rowLimit,
        selected: selected,
        selectable: selectable,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        renderHeader: _this.readerDateHeading,
        renderForMeasure: needLimitMeasure,
        onShowMore: _this.handleShowMore,
        onSelect: _this.handleSelectEvent,
        onDoubleClick: _this.handleDoubleClickEvent,
        onKeyPress: _this.handleKeyPressEvent,
        onSelectSlot: _this.handleSelectSlot,
        longPressThreshold: longPressThreshold,
        rtl: _this.props.rtl,
        resizable: _this.props.resizable,
        showAllEvents: showAllEvents
      });
    };
    _this.readerDateHeading = function (_ref) {
      var date = _ref.date,
        className = _ref.className,
        props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded$6);
      var _this$props2 = _this.props,
        currentDate = _this$props2.date,
        getDrilldownView = _this$props2.getDrilldownView,
        localizer = _this$props2.localizer;
      var isOffRange = localizer.neq(currentDate, date, 'month');
      var isCurrent = localizer.isSameDate(date, currentDate);
      var drilldownView = getDrilldownView(date);
      var label = localizer.format(date, 'dateFormat');
      var DateHeaderComponent = _this.props.components.dateHeader || DateHeader;
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, props, {
        className: (0,clsx/* default */.A)(className, isOffRange && 'rbc-off-range', isCurrent && 'rbc-current'),
        role: "cell"
      }), /*#__PURE__*/react.createElement(DateHeaderComponent, {
        label: label,
        date: date,
        drilldownView: drilldownView,
        isOffRange: isOffRange,
        onDrillDown: function onDrillDown(e) {
          return _this.handleHeadingClick(date, drilldownView, e);
        }
      }));
    };
    _this.handleSelectSlot = function (range, slotInfo) {
      _this._pendingSelection = _this._pendingSelection.concat(range);
      clearTimeout(_this._selectTimer);
      _this._selectTimer = setTimeout(function () {
        return _this.selectDates(slotInfo);
      });
    };
    _this.handleHeadingClick = function (date, view, e) {
      e.preventDefault();
      _this.clearSelection();
      notify(_this.props.onDrillDown, [date, view]);
    };
    _this.handleSelectEvent = function () {
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function () {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function () {
      _this.clearSelection();
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleShowMore = function (events, date, cell, slot, target) {
      var _this$props3 = _this.props,
        popup = _this$props3.popup,
        onDrillDown = _this$props3.onDrillDown,
        onShowMore = _this$props3.onShowMore,
        getDrilldownView = _this$props3.getDrilldownView,
        doShowMoreDrillDown = _this$props3.doShowMoreDrillDown;
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();
      if (popup) {
        var position = position_position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: position,
            target: target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date, getDrilldownView(date) || views$1.DAY]);
      }
      notify(onShowMore, [events, date, slot]);
    };
    _this.overlayDisplay = function () {
      _this.setState({
        overlay: null
      });
    };
    _this.state = {
      rowLimit: 5,
      needLimitMeasure: true,
      date: null
    };
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    _this.slotRowRef = /*#__PURE__*/(0,react.createRef)();
    _this._bgRows = [];
    _this._pendingSelection = [];
    return _this;
  }
  (0,inherits/* default */.A)(MonthView, _React$Component);
  return (0,createClass/* default */.A)(MonthView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      var running;
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
      window.addEventListener('resize', this._resizeListener = function () {
        if (!running) {
          request(function () {
            running = false;
            _this2.setState({
              needLimitMeasure: true
            }); //eslint-disable-line
          });
        }
      }, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.needLimitMeasure) this.measureRowLimit(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._resizeListener, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        date = _this$props4.date,
        localizer = _this$props4.localizer,
        className = _this$props4.className,
        month = localizer.visibleDays(date, localizer),
        weeks = chunk_default()(month, 7);
      this._weekCount = weeks.length;
      return /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* default */.A)('rbc-month-view', className),
        role: "table",
        "aria-label": "Month View",
        ref: this.containerRef
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-row rbc-month-header",
        role: "row"
      }, this.renderHeaders(weeks[0])), weeks.map(this.renderWeek), this.props.popup && this.renderOverlay());
    }
  }, {
    key: "renderHeaders",
    value: function renderHeaders(row) {
      var _this$props5 = this.props,
        localizer = _this$props5.localizer,
        components = _this$props5.components;
      var first = row[0];
      var last = row[row.length - 1];
      var HeaderComponent = components.header || Header;
      return localizer.range(first, last, 'day').map(function (day, idx) {
        return /*#__PURE__*/react.createElement("div", {
          key: 'header_' + idx,
          className: "rbc-header"
        }, /*#__PURE__*/react.createElement(HeaderComponent, {
          date: day,
          localizer: localizer,
          label: localizer.format(day, 'weekdayFormat')
        }));
      });
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay,
        _this$state2,
        _this3 = this;
      var overlay = (_this$state$overlay = (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : _this$state2.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props6 = this.props,
        accessors = _this$props6.accessors,
        localizer = _this$props6.localizer,
        components = _this$props6.components,
        getters = _this$props6.getters,
        selected = _this$props6.selected,
        popupOffset = _this$props6.popupOffset,
        handleDragStart = _this$props6.handleDragStart;
      var onHide = function onHide() {
        return _this3.setState({
          overlay: null
        });
      };
      return /*#__PURE__*/react.createElement(PopOverlay, {
        overlay: overlay,
        accessors: accessors,
        localizer: localizer,
        components: components,
        getters: getters,
        selected: selected,
        popupOffset: popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide
      });

      /* return (
        <Overlay
          rootClose
          placement="bottom"
          show={!!overlay.position}
          onHide={() => this.setState({ overlay: null })}
          target={() => overlay.target}
        >
          {({ props }) => (
            <Popup
              {...props}
              popupOffset={popupOffset}
              accessors={accessors}
              getters={getters}
              selected={selected}
              components={components}
              localizer={localizer}
              position={overlay.position}
              show={this.overlayDisplay}
              events={overlay.events}
              slotStart={overlay.date}
              slotEnd={overlay.end}
              onSelect={this.handleSelectEvent}
              onDoubleClick={this.handleDoubleClickEvent}
              onKeyPress={this.handleKeyPressEvent}
              handleDragStart={this.props.handleDragStart}
            />
          )}
        </Overlay>
      ) */
    }
  }, {
    key: "measureRowLimit",
    value: function measureRowLimit() {
      this.setState({
        needLimitMeasure: false,
        rowLimit: this.slotRowRef.current.getRowLimit()
      });
    }
  }, {
    key: "selectDates",
    value: function selectDates(slotInfo) {
      var slots = this._pendingSelection.slice();
      this._pendingSelection = [];
      slots.sort(function (a, b) {
        return +a - +b;
      });
      var start = new Date(slots[0]);
      var end = new Date(slots[slots.length - 1]);
      end.setDate(slots[slots.length - 1].getDate() + 1);
      notify(this.props.onSelectSlot, {
        slots: slots,
        start: start,
        end: end,
        action: slotInfo.action,
        bounds: slotInfo.bounds,
        box: slotInfo.box
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var date = _ref2.date,
        localizer = _ref2.localizer;
      return {
        date: date,
        needLimitMeasure: state.needLimitMeasure || localizer.neq(date, state.date, 'month')
      };
    }
  }]);
}(react.Component);
MonthView.propTypes =  false ? 0 : {};
MonthView.range = function (date, _ref3) {
  var localizer = _ref3.localizer;
  var start = localizer.firstVisibleDay(date, localizer);
  var end = localizer.lastVisibleDay(date, localizer);
  return {
    start: start,
    end: end
  };
};
MonthView.navigate = function (date, action, _ref4) {
  var localizer = _ref4.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -1, 'month');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, 1, 'month');
    default:
      return date;
  }
};
MonthView.title = function (date, _ref5) {
  var localizer = _ref5.localizer;
  return localizer.format(date, 'monthHeaderFormat');
};
var react_big_calendar_esm_getKey = function getKey(_ref) {
  var min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    slots = _ref.slots,
    localizer = _ref.localizer;
  return "".concat(+localizer.startOf(min, 'minutes')) + "".concat(+localizer.startOf(max, 'minutes')) + "".concat(step, "-").concat(slots);
};
function getSlotMetrics(_ref2) {
  var start = _ref2.min,
    end = _ref2.max,
    step = _ref2.step,
    timeslots = _ref2.timeslots,
    localizer = _ref2.localizer;
  var key = react_big_calendar_esm_getKey({
    step: step,
    localizer: localizer
  });

  // DST differences are handled inside the localizer
  var totalMin = 1 + localizer.getTotalMin(start, end);
  var minutesFromMidnight = localizer.getMinutesFromMidnight(start);
  var numGroups = Math.ceil((totalMin - 1) / (step * timeslots));
  var numSlots = numGroups * timeslots;
  var groups = new Array(numGroups);
  var slots = new Array(numSlots);
  // Each slot date is created from "zero", instead of adding `step` to
  // the previous one, in order to avoid DST oddities
  for (var grp = 0; grp < numGroups; grp++) {
    groups[grp] = new Array(timeslots);
    for (var slot = 0; slot < timeslots; slot++) {
      var slotIdx = grp * timeslots + slot;
      var minFromStart = slotIdx * step;
      // A date with total minutes calculated from the start of the day
      slots[slotIdx] = groups[grp][slot] = localizer.getSlotDate(start, minutesFromMidnight, minFromStart);
    }
  }

  // Necessary to be able to select up until the last timeslot in a day
  var lastSlotMinFromStart = slots.length * step;
  slots.push(localizer.getSlotDate(start, minutesFromMidnight, lastSlotMinFromStart));
  function positionFromDate(date) {
    var diff = localizer.diff(start, date, 'minutes') + localizer.getDstOffset(start, date);
    return Math.min(diff, totalMin);
  }
  return {
    groups: groups,
    update: function update(args) {
      if (react_big_calendar_esm_getKey(args) !== key) return getSlotMetrics(args);
      return this;
    },
    dateIsInGroup: function dateIsInGroup(date, groupIndex) {
      var nextGroup = groups[groupIndex + 1];
      return localizer.inRange(date, groups[groupIndex][0], nextGroup ? nextGroup[0] : end, 'minutes');
    },
    nextSlot: function nextSlot(slot) {
      // We cannot guarantee that the slot object must be in slots,
      // because after each update, a new slots array will be created.
      var next = slots[Math.min(slots.findIndex(function (s) {
        return s === slot || localizer.eq(s, slot);
      }) + 1, slots.length - 1)];
      // in the case of the last slot we won't a long enough range so manually get it
      if (localizer.eq(next, slot)) next = localizer.add(slot, step, 'minutes');
      return next;
    },
    closestSlotToPosition: function closestSlotToPosition(percent) {
      var slot = Math.min(slots.length - 1, Math.max(0, Math.floor(percent * numSlots)));
      return slots[slot];
    },
    closestSlotFromPoint: function closestSlotFromPoint(point, boundaryRect) {
      var range = Math.abs(boundaryRect.top - boundaryRect.bottom);
      return this.closestSlotToPosition((point.y - boundaryRect.top) / range);
    },
    closestSlotFromDate: function closestSlotFromDate(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      if (localizer.lt(date, start, 'minutes')) return slots[0];
      if (localizer.gt(date, end, 'minutes')) return slots[slots.length - 1];
      var diffMins = localizer.diff(start, date, 'minutes');
      return slots[(diffMins - diffMins % step) / step + offset];
    },
    startsBeforeDay: function startsBeforeDay(date) {
      return localizer.lt(date, start, 'day');
    },
    startsAfterDay: function startsAfterDay(date) {
      return localizer.gt(date, end, 'day');
    },
    startsBefore: function startsBefore(date) {
      return localizer.lt(localizer.merge(start, date), start, 'minutes');
    },
    startsAfter: function startsAfter(date) {
      return localizer.gt(localizer.merge(end, date), end, 'minutes');
    },
    getRange: function getRange(rangeStart, rangeEnd, ignoreMin, ignoreMax) {
      if (!ignoreMin) rangeStart = localizer.min(end, localizer.max(start, rangeStart));
      if (!ignoreMax) rangeEnd = localizer.min(end, localizer.max(start, rangeEnd));
      var rangeStartMin = positionFromDate(rangeStart);
      var rangeEndMin = positionFromDate(rangeEnd);
      var top = rangeEndMin > step * numSlots && !localizer.eq(end, rangeEnd) ? (rangeStartMin - step) / (step * numSlots) * 100 : rangeStartMin / (step * numSlots) * 100;
      return {
        top: top,
        height: rangeEndMin / (step * numSlots) * 100 - top,
        start: positionFromDate(rangeStart),
        startDate: rangeStart,
        end: positionFromDate(rangeEnd),
        endDate: rangeEnd
      };
    },
    getCurrentTimePosition: function getCurrentTimePosition(rangeStart) {
      var rangeStartMin = positionFromDate(rangeStart);
      var top = rangeStartMin / (step * numSlots) * 100;
      return top;
    }
  };
}
var Event = /*#__PURE__*/function () {
  function Event(data, _ref) {
    var accessors = _ref.accessors,
      slotMetrics = _ref.slotMetrics;
    (0,classCallCheck/* default */.A)(this, Event);
    var _slotMetrics$getRange = slotMetrics.getRange(accessors.start(data), accessors.end(data)),
      start = _slotMetrics$getRange.start,
      startDate = _slotMetrics$getRange.startDate,
      end = _slotMetrics$getRange.end,
      endDate = _slotMetrics$getRange.endDate,
      top = _slotMetrics$getRange.top,
      height = _slotMetrics$getRange.height;
    this.start = start;
    this.end = end;
    this.startMs = +startDate;
    this.endMs = +endDate;
    this.top = top;
    this.height = height;
    this.data = data;
  }

  /**
   * The event's width without any overlap.
   */
  return (0,createClass/* default */.A)(Event, [{
    key: "_width",
    get: function get() {
      // The container event's width is determined by the maximum number of
      // events in any of its rows.
      if (this.rows) {
        var columns = this.rows.reduce(function (max, row) {
          return Math.max(max, row.leaves.length + 1);
        },
        // add itself
        0) + 1; // add the container

        return 100 / columns;
      }

      // The row event's width is the space left by the container, divided
      // among itself and its leaves.
      if (this.leaves) {
        var availableWidth = 100 - this.container._width;
        return availableWidth / (this.leaves.length + 1);
      }

      // The leaf event's width is determined by its row's width
      return this.row._width;
    }

    /**
     * The event's calculated width, possibly with extra width added for
     * overlapping effect.
     */
  }, {
    key: "width",
    get: function get() {
      var noOverlap = this._width;
      var overlap = Math.min(100, this._width * 1.7);

      // Containers can always grow.
      if (this.rows) {
        return overlap;
      }

      // Rows can grow if they have leaves.
      if (this.leaves) {
        return this.leaves.length > 0 ? overlap : noOverlap;
      }

      // Leaves can grow unless they're the last item in a row.
      var leaves = this.row.leaves;
      var index = leaves.indexOf(this);
      return index === leaves.length - 1 ? noOverlap : overlap;
    }
  }, {
    key: "xOffset",
    get: function get() {
      // Containers have no offset.
      if (this.rows) return 0;

      // Rows always start where their container ends.
      if (this.leaves) return this.container._width;

      // Leaves are spread out evenly on the space left by its row.
      var _this$row = this.row,
        leaves = _this$row.leaves,
        xOffset = _this$row.xOffset,
        _width = _this$row._width;
      var index = leaves.indexOf(this) + 1;
      return xOffset + index * _width;
    }
  }]);
}();
/**
 * Return true if event a and b is considered to be on the same row.
 */
function onSameRow(a, b, minimumStartDifference) {
  return (
    // Occupies the same start slot.
    Math.abs(b.start - a.start) < minimumStartDifference ||
    // A's start slot overlaps with b's end slot.
    b.start > a.start && b.start < a.end
  );
}
function sortByRender(events) {
  var sortedByTime = sortBy_default()(events, ['startMs', function (e) {
    return -e.endMs;
  }]);
  var sorted = [];
  while (sortedByTime.length > 0) {
    var event = sortedByTime.shift();
    sorted.push(event);
    for (var i = 0; i < sortedByTime.length; i++) {
      var test = sortedByTime[i];

      // Still inside this event, look for next.
      if (event.endMs > test.startMs) continue;

      // We've found the first event of the next event group.
      // If that event is not right next to our current event, we have to
      // move it here.
      if (i > 0) {
        var _event = sortedByTime.splice(i, 1)[0];
        sorted.push(_event);
      }

      // We've already found the next event group, so stop looking.
      break;
    }
  }
  return sorted;
}
function getStyledEvents$1(_ref2) {
  var events = _ref2.events,
    minimumStartDifference = _ref2.minimumStartDifference,
    slotMetrics = _ref2.slotMetrics,
    accessors = _ref2.accessors;
  // Create proxy events and order them so that we don't have
  // to fiddle with z-indexes.
  var proxies = events.map(function (event) {
    return new Event(event, {
      slotMetrics: slotMetrics,
      accessors: accessors
    });
  });
  var eventsInRenderOrder = sortByRender(proxies);

  // Group overlapping events, while keeping order.
  // Every event is always one of: container, row or leaf.
  // Containers can contain rows, and rows can contain leaves.
  var containerEvents = [];
  var _loop = function _loop() {
    var event = eventsInRenderOrder[i];

    // Check if this event can go into a container event.
    var container = containerEvents.find(function (c) {
      return c.end > event.start || Math.abs(event.start - c.start) < minimumStartDifference;
    });

    // Couldn't find a container — that means this event is a container.
    if (!container) {
      event.rows = [];
      containerEvents.push(event);
      return 1; // continue
    }

    // Found a container for the event.
    event.container = container;

    // Check if the event can be placed in an existing row.
    // Start looking from behind.
    var row = null;
    for (var j = container.rows.length - 1; !row && j >= 0; j--) {
      if (onSameRow(container.rows[j], event, minimumStartDifference)) {
        row = container.rows[j];
      }
    }
    if (row) {
      // Found a row, so add it.
      row.leaves.push(event);
      event.row = row;
    } else {
      // Couldn't find a row – that means this event is a row.
      event.leaves = [];
      container.rows.push(event);
    }
  };
  for (var i = 0; i < eventsInRenderOrder.length; i++) {
    if (_loop()) continue;
  }

  // Return the original events, along with their styles.
  return eventsInRenderOrder.map(function (event) {
    return {
      event: event.data,
      style: {
        top: event.top,
        height: event.height,
        width: event.width,
        xOffset: Math.max(0, event.xOffset)
      }
    };
  });
}
function getMaxIdxDFS(node, maxIdx, visited) {
  for (var i = 0; i < node.friends.length; ++i) {
    if (visited.indexOf(node.friends[i]) > -1) continue;
    maxIdx = maxIdx > node.friends[i].idx ? maxIdx : node.friends[i].idx;
    // TODO : trace it by not object but kinda index or something for performance
    visited.push(node.friends[i]);
    var newIdx = getMaxIdxDFS(node.friends[i], maxIdx, visited);
    maxIdx = maxIdx > newIdx ? maxIdx : newIdx;
  }
  return maxIdx;
}
function noOverlap(_ref) {
  var events = _ref.events,
    minimumStartDifference = _ref.minimumStartDifference,
    slotMetrics = _ref.slotMetrics,
    accessors = _ref.accessors;
  var styledEvents = getStyledEvents$1({
    events: events,
    minimumStartDifference: minimumStartDifference,
    slotMetrics: slotMetrics,
    accessors: accessors
  });
  styledEvents.sort(function (a, b) {
    a = a.style;
    b = b.style;
    if (a.top !== b.top) return a.top > b.top ? 1 : -1;else if (a.height !== b.height) return a.top + a.height < b.top + b.height ? 1 : -1;else return 0;
  });
  for (var i = 0; i < styledEvents.length; ++i) {
    styledEvents[i].friends = [];
    delete styledEvents[i].style.left;
    delete styledEvents[i].style.left;
    delete styledEvents[i].idx;
    delete styledEvents[i].size;
  }
  for (var _i = 0; _i < styledEvents.length - 1; ++_i) {
    var se1 = styledEvents[_i];
    var y1 = se1.style.top;
    var y2 = se1.style.top + se1.style.height;
    for (var j = _i + 1; j < styledEvents.length; ++j) {
      var se2 = styledEvents[j];
      var y3 = se2.style.top;
      var y4 = se2.style.top + se2.style.height;
      if (y3 >= y1 && y4 <= y2 || y4 > y1 && y4 <= y2 || y3 >= y1 && y3 < y2) {
        // TODO : hashmap would be effective for performance
        se1.friends.push(se2);
        se2.friends.push(se1);
      }
    }
  }
  for (var _i2 = 0; _i2 < styledEvents.length; ++_i2) {
    var se = styledEvents[_i2];
    var bitmap = [];
    for (var _j = 0; _j < 100; ++_j) bitmap.push(1); // 1 means available

    for (var _j2 = 0; _j2 < se.friends.length; ++_j2) if (se.friends[_j2].idx !== undefined) bitmap[se.friends[_j2].idx] = 0; // 0 means reserved

    se.idx = bitmap.indexOf(1);
  }
  for (var _i3 = 0; _i3 < styledEvents.length; ++_i3) {
    var size = 0;
    if (styledEvents[_i3].size) continue;
    var allFriends = [];
    var maxIdx = getMaxIdxDFS(styledEvents[_i3], 0, allFriends);
    size = 100 / (maxIdx + 1);
    styledEvents[_i3].size = size;
    for (var _j3 = 0; _j3 < allFriends.length; ++_j3) allFriends[_j3].size = size;
  }
  for (var _i4 = 0; _i4 < styledEvents.length; ++_i4) {
    var e = styledEvents[_i4];
    e.style.left = e.idx * e.size;

    // stretch to maximum
    var _maxIdx = 0;
    for (var _j4 = 0; _j4 < e.friends.length; ++_j4) {
      var idx = e.friends[_j4].idx;
      _maxIdx = _maxIdx > idx ? _maxIdx : idx;
    }
    if (_maxIdx <= e.idx) e.size = 100 - e.idx * e.size;

    // padding between events
    // for this feature, `width` is not percentage based unit anymore
    // it will be used with calc()
    var padding = e.idx === 0 ? 0 : 3;
    e.style.width = "calc(".concat(e.size, "% - ").concat(padding, "px)");
    e.style.height = "calc(".concat(e.style.height, "% - 2px)");
    e.style.xOffset = "calc(".concat(e.style.left, "% + ").concat(padding, "px)");
  }
  return styledEvents;
}

/*eslint no-unused-vars: "off"*/

var DefaultAlgorithms = {
  overlap: getStyledEvents$1,
  'no-overlap': noOverlap
};
function isFunction(a) {
  return !!(a && a.constructor && a.call && a.apply);
}

//
function getStyledEvents(_ref) {
  _ref.events;
  _ref.minimumStartDifference;
  _ref.slotMetrics;
  _ref.accessors;
  var dayLayoutAlgorithm = _ref.dayLayoutAlgorithm;
  var algorithm = dayLayoutAlgorithm;
  if (dayLayoutAlgorithm in DefaultAlgorithms) algorithm = DefaultAlgorithms[dayLayoutAlgorithm];
  if (!isFunction(algorithm)) {
    // invalid algorithm
    return [];
  }
  return algorithm.apply(this, arguments);
}
function _callSuper$8(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$8() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$8() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$8 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var TimeSlotGroup = /*#__PURE__*/function (_Component) {
  function TimeSlotGroup() {
    (0,classCallCheck/* default */.A)(this, TimeSlotGroup);
    return _callSuper$8(this, TimeSlotGroup, arguments);
  }
  (0,inherits/* default */.A)(TimeSlotGroup, _Component);
  return (0,createClass/* default */.A)(TimeSlotGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        renderSlot = _this$props.renderSlot,
        resource = _this$props.resource,
        group = _this$props.group,
        getters = _this$props.getters,
        _this$props$component = _this$props.components,
        _this$props$component2 = _this$props$component === void 0 ? {} : _this$props$component,
        _this$props$component3 = _this$props$component2.timeSlotWrapper,
        Wrapper = _this$props$component3 === void 0 ? NoopWrapper : _this$props$component3;
      var groupProps = getters ? getters.slotGroupProp(group) : {};
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
        className: "rbc-timeslot-group"
      }, groupProps), group.map(function (value, idx) {
        var slotProps = getters ? getters.slotProp(value, resource) : {};
        return /*#__PURE__*/react.createElement(Wrapper, {
          key: idx,
          value: value,
          resource: resource
        }, /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, slotProps, {
          className: (0,clsx/* default */.A)('rbc-time-slot', slotProps.className)
        }), renderSlot && renderSlot(value, idx)));
      }));
    }
  }]);
}(react.Component);
TimeSlotGroup.propTypes =  false ? 0 : {};
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function stringifyPercent(v) {
  return typeof v === 'string' ? v : v + '%';
}

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  var style = props.style,
    className = props.className,
    event = props.event,
    accessors = props.accessors,
    rtl = props.rtl,
    selected = props.selected,
    label = props.label,
    continuesPrior = props.continuesPrior,
    continuesAfter = props.continuesAfter,
    getters = props.getters,
    onClick = props.onClick,
    onDoubleClick = props.onDoubleClick,
    isBackgroundEvent = props.isBackgroundEvent,
    onKeyPress = props.onKeyPress,
    _props$components = props.components,
    Event = _props$components.event,
    EventWrapper = _props$components.eventWrapper;
  var title = accessors.title(event);
  var tooltip = accessors.tooltip(event);
  var end = accessors.end(event);
  var start = accessors.start(event);
  var userProps = getters.eventProp(event, start, end, selected);
  var inner = [/*#__PURE__*/react.createElement("div", {
    key: "1",
    className: "rbc-event-label"
  }, label), /*#__PURE__*/react.createElement("div", {
    key: "2",
    className: "rbc-event-content"
  }, Event ? /*#__PURE__*/react.createElement(Event, {
    event: event,
    title: title
  }) : title)];
  var height = style.height,
    top = style.top,
    width = style.width,
    xOffset = style.xOffset;
  var eventStyle = _objectSpread$3(_objectSpread$3({}, userProps.style), {}, (0,defineProperty/* default */.A)({
    top: stringifyPercent(top),
    height: stringifyPercent(height),
    width: stringifyPercent(width)
  }, rtl ? 'right' : 'left', stringifyPercent(xOffset)));
  return /*#__PURE__*/react.createElement(EventWrapper, (0,esm_extends/* default */.A)({
    type: "time"
  }, props), /*#__PURE__*/react.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: onClick,
    onDoubleClick: onDoubleClick,
    style: eventStyle,
    onKeyDown: onKeyPress,
    title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
    className: (0,clsx/* default */.A)(isBackgroundEvent ? 'rbc-background-event' : 'rbc-event', className, userProps.className, {
      'rbc-selected': selected,
      'rbc-event-continues-earlier': continuesPrior,
      'rbc-event-continues-later': continuesAfter
    })
  }, inner));
}
var DayColumnWrapper = function DayColumnWrapper(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style,
    innerRef = _ref.innerRef;
  return /*#__PURE__*/react.createElement("div", {
    className: className,
    style: style,
    ref: innerRef
  }, children);
};
var DayColumnWrapper$1 = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(DayColumnWrapper, (0,esm_extends/* default */.A)({}, props, {
    innerRef: ref
  }));
});
var _excluded$5 = ["dayProp"],
  _excluded2$1 = ["eventContainerWrapper", "timeIndicatorWrapper"];
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper$7(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$7() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$7() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$7 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var DayColumn = /*#__PURE__*/function (_React$Component) {
  function DayColumn() {
    var _this;
    (0,classCallCheck/* default */.A)(this, DayColumn);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper$7(this, DayColumn, [].concat(_args));
    _this.state = {
      selecting: false,
      timeIndicatorPosition: null
    };
    _this.intervalTriggered = false;
    _this.renderEvents = function (_ref) {
      var events = _ref.events,
        isBackgroundEvent = _ref.isBackgroundEvent;
      var _this$props = _this.props,
        rtl = _this$props.rtl,
        selected = _this$props.selected,
        accessors = _this$props.accessors,
        localizer = _this$props.localizer,
        getters = _this$props.getters,
        components = _this$props.components,
        step = _this$props.step,
        timeslots = _this$props.timeslots,
        dayLayoutAlgorithm = _this$props.dayLayoutAlgorithm,
        resizable = _this$props.resizable;
      var _this2 = _this,
        slotMetrics = _this2.slotMetrics;
      var messages = localizer.messages;
      var styledEvents = getStyledEvents({
        events: events,
        accessors: accessors,
        slotMetrics: slotMetrics,
        minimumStartDifference: Math.ceil(step * timeslots / 2),
        dayLayoutAlgorithm: dayLayoutAlgorithm
      });
      return styledEvents.map(function (_ref2, idx) {
        var _accessors$eventId;
        var event = _ref2.event,
          style = _ref2.style;
        var end = accessors.end(event);
        var start = accessors.start(event);
        var key = (_accessors$eventId = accessors.eventId(event)) !== null && _accessors$eventId !== void 0 ? _accessors$eventId : 'evt_' + idx;
        var format = 'eventTimeRangeFormat';
        var label;
        var startsBeforeDay = slotMetrics.startsBeforeDay(start);
        var startsAfterDay = slotMetrics.startsAfterDay(end);
        if (startsBeforeDay) format = 'eventTimeRangeEndFormat';else if (startsAfterDay) format = 'eventTimeRangeStartFormat';
        if (startsBeforeDay && startsAfterDay) label = messages.allDay;else label = localizer.format({
          start: start,
          end: end
        }, format);
        var continuesPrior = startsBeforeDay || slotMetrics.startsBefore(start);
        var continuesAfter = startsAfterDay || slotMetrics.startsAfter(end);
        return /*#__PURE__*/react.createElement(TimeGridEvent, {
          style: style,
          event: event,
          label: label,
          key: key,
          getters: getters,
          rtl: rtl,
          components: components,
          continuesPrior: continuesPrior,
          continuesAfter: continuesAfter,
          accessors: accessors,
          resource: _this.props.resource,
          selected: isSelected(event, selected),
          onClick: function onClick(e) {
            return _this._select(_objectSpread$2(_objectSpread$2(_objectSpread$2({}, event), _this.props.resource && {
              sourceResource: _this.props.resource
            }), isBackgroundEvent && {
              isBackgroundEvent: true
            }), e);
          },
          onDoubleClick: function onDoubleClick(e) {
            return _this._doubleClick(event, e);
          },
          isBackgroundEvent: isBackgroundEvent,
          onKeyPress: function onKeyPress(e) {
            return _this._keyPress(event, e);
          },
          resizable: resizable
        });
      });
    };
    _this._selectable = function () {
      var node = _this.containerRef.current;
      var _this$props2 = _this.props,
        longPressThreshold = _this$props2.longPressThreshold,
        localizer = _this$props2.localizer;
      var selector = _this._selector = new Selection(function () {
        return node;
      }, {
        longPressThreshold: longPressThreshold
      });
      var maybeSelect = function maybeSelect(box) {
        var onSelecting = _this.props.onSelecting;
        var current = _this.state || {};
        var state = selectionState(box);
        var start = state.startDate,
          end = state.endDate;
        if (onSelecting) {
          if (localizer.eq(current.startDate, start, 'minutes') && localizer.eq(current.endDate, end, 'minutes') || onSelecting({
            start: start,
            end: end,
            resourceId: _this.props.resource
          }) === false) return;
        }
        if (_this.state.start !== state.start || _this.state.end !== state.end || _this.state.selecting !== state.selecting) {
          _this.setState(state);
        }
      };
      var selectionState = function selectionState(point) {
        var currentSlot = _this.slotMetrics.closestSlotFromPoint(point, getBoundsForNode(node));
        if (!_this.state.selecting) {
          _this._initialSlot = currentSlot;
        }
        var initialSlot = _this._initialSlot;
        if (localizer.lte(initialSlot, currentSlot)) {
          currentSlot = _this.slotMetrics.nextSlot(currentSlot);
        } else if (localizer.gt(initialSlot, currentSlot)) {
          initialSlot = _this.slotMetrics.nextSlot(initialSlot);
        }
        var selectRange = _this.slotMetrics.getRange(localizer.min(initialSlot, currentSlot), localizer.max(initialSlot, currentSlot));
        return _objectSpread$2(_objectSpread$2({}, selectRange), {}, {
          selecting: true,
          top: "".concat(selectRange.top, "%"),
          height: "".concat(selectRange.height, "%")
        });
      };
      var selectorClicksHandler = function selectorClicksHandler(box, actionType) {
        if (!isEvent(_this.containerRef.current, box)) {
          var _selectionState = selectionState(box),
            startDate = _selectionState.startDate,
            endDate = _selectionState.endDate;
          _this._selectSlot({
            startDate: startDate,
            endDate: endDate,
            action: actionType,
            box: box
          });
        }
        _this.setState({
          selecting: false
        });
      };
      selector.on('selecting', maybeSelect);
      selector.on('selectStart', maybeSelect);
      selector.on('beforeSelect', function (box) {
        if (_this.props.selectable !== 'ignoreEvents') return;
        return !isEvent(_this.containerRef.current, box);
      });
      selector.on('click', function (box) {
        return selectorClicksHandler(box, 'click');
      });
      selector.on('doubleClick', function (box) {
        return selectorClicksHandler(box, 'doubleClick');
      });
      selector.on('select', function (bounds) {
        if (_this.state.selecting) {
          _this._selectSlot(_objectSpread$2(_objectSpread$2({}, _this.state), {}, {
            action: 'select',
            bounds: bounds
          }));
          _this.setState({
            selecting: false
          });
        }
      });
      selector.on('reset', function () {
        if (_this.state.selecting) {
          _this.setState({
            selecting: false
          });
        }
      });
    };
    _this._teardownSelectable = function () {
      if (!_this._selector) return;
      _this._selector.teardown();
      _this._selector = null;
    };
    _this._selectSlot = function (_ref3) {
      var startDate = _ref3.startDate,
        endDate = _ref3.endDate,
        action = _ref3.action,
        bounds = _ref3.bounds,
        box = _ref3.box;
      var current = startDate,
        slots = [];
      while (_this.props.localizer.lte(current, endDate)) {
        slots.push(current);
        current = new Date(+current + _this.props.step * 60 * 1000); // using Date ensures not to create an endless loop the day DST begins
      }
      notify(_this.props.onSelectSlot, {
        slots: slots,
        start: startDate,
        end: endDate,
        resourceId: _this.props.resource,
        action: action,
        bounds: bounds,
        box: box
      });
    };
    _this._select = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this._doubleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this._keyPress = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.slotMetrics = getSlotMetrics(_this.props);
    _this.containerRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  (0,inherits/* default */.A)(DayColumn, _React$Component);
  return (0,createClass/* default */.A)(DayColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selectable && this._selectable();
      if (this.props.isNow) {
        this.setTimeIndicatorPositionUpdateInterval();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._teardownSelectable();
      this.clearTimeIndicatorInterval();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.selectable && !prevProps.selectable) this._selectable();
      if (!this.props.selectable && prevProps.selectable) this._teardownSelectable();
      var _this$props3 = this.props,
        getNow = _this$props3.getNow,
        isNow = _this$props3.isNow,
        localizer = _this$props3.localizer,
        date = _this$props3.date,
        min = _this$props3.min,
        max = _this$props3.max;
      var getNowChanged = localizer.neq(prevProps.getNow(), getNow(), 'minutes');
      if (prevProps.isNow !== isNow || getNowChanged) {
        this.clearTimeIndicatorInterval();
        if (isNow) {
          var tail = !getNowChanged && localizer.eq(prevProps.date, date, 'minutes') && prevState.timeIndicatorPosition === this.state.timeIndicatorPosition;
          this.setTimeIndicatorPositionUpdateInterval(tail);
        }
      } else if (isNow && (localizer.neq(prevProps.min, min, 'minutes') || localizer.neq(prevProps.max, max, 'minutes'))) {
        this.positionTimeIndicator();
      }
    }

    /**
     * @param tail {Boolean} - whether `positionTimeIndicator` call should be
     *   deferred or called upon setting interval (`true` - if deferred);
     */
  }, {
    key: "setTimeIndicatorPositionUpdateInterval",
    value: function setTimeIndicatorPositionUpdateInterval() {
      var _this3 = this;
      var tail = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!this.intervalTriggered && !tail) {
        this.positionTimeIndicator();
      }
      this._timeIndicatorTimeout = window.setTimeout(function () {
        _this3.intervalTriggered = true;
        _this3.positionTimeIndicator();
        _this3.setTimeIndicatorPositionUpdateInterval();
      }, 60000);
    }
  }, {
    key: "clearTimeIndicatorInterval",
    value: function clearTimeIndicatorInterval() {
      this.intervalTriggered = false;
      window.clearTimeout(this._timeIndicatorTimeout);
    }
  }, {
    key: "positionTimeIndicator",
    value: function positionTimeIndicator() {
      var _this$props4 = this.props,
        min = _this$props4.min,
        max = _this$props4.max,
        getNow = _this$props4.getNow;
      var current = getNow();
      if (current >= min && current <= max) {
        var top = this.slotMetrics.getCurrentTimePosition(current);
        this.intervalTriggered = true;
        this.setState({
          timeIndicatorPosition: top
        });
      } else {
        this.clearTimeIndicatorInterval();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
        date = _this$props5.date,
        max = _this$props5.max,
        rtl = _this$props5.rtl,
        isNow = _this$props5.isNow,
        resource = _this$props5.resource,
        accessors = _this$props5.accessors,
        localizer = _this$props5.localizer,
        _this$props5$getters = _this$props5.getters,
        dayProp = _this$props5$getters.dayProp,
        getters = (0,objectWithoutProperties/* default */.A)(_this$props5$getters, _excluded$5),
        _this$props5$componen = _this$props5.components,
        EventContainer = _this$props5$componen.eventContainerWrapper,
        TimeIndicatorWrapper = _this$props5$componen.timeIndicatorWrapper,
        components = (0,objectWithoutProperties/* default */.A)(_this$props5$componen, _excluded2$1);
      this.slotMetrics = this.slotMetrics.update(this.props);
      var slotMetrics = this.slotMetrics;
      var _this$state = this.state,
        selecting = _this$state.selecting,
        top = _this$state.top,
        height = _this$state.height,
        startDate = _this$state.startDate,
        endDate = _this$state.endDate;
      var selectDates = {
        start: startDate,
        end: endDate
      };
      var _dayProp = dayProp(max, resource),
        className = _dayProp.className,
        style = _dayProp.style;
      var timeIndicatorProps = {
        className: 'rbc-current-time-indicator',
        style: {
          top: "".concat(this.state.timeIndicatorPosition, "%")
        }
      };
      var DayColumnWrapperComponent = components.dayColumnWrapper || DayColumnWrapper$1;
      return /*#__PURE__*/react.createElement(DayColumnWrapperComponent, {
        ref: this.containerRef,
        date: date,
        style: style,
        className: (0,clsx/* default */.A)(className, 'rbc-day-slot', 'rbc-time-column', isNow && 'rbc-now', isNow && 'rbc-today',
        // WHY
        selecting && 'rbc-slot-selecting'),
        slotMetrics: slotMetrics,
        resource: resource
      }, slotMetrics.groups.map(function (grp, idx) {
        return /*#__PURE__*/react.createElement(TimeSlotGroup, {
          key: idx,
          group: grp,
          resource: resource,
          getters: getters,
          components: components
        });
      }), /*#__PURE__*/react.createElement(EventContainer, {
        localizer: localizer,
        resource: resource,
        accessors: accessors,
        getters: getters,
        components: components,
        slotMetrics: slotMetrics
      }, /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* default */.A)('rbc-events-container', rtl && 'rtl')
      }, this.renderEvents({
        events: this.props.backgroundEvents,
        isBackgroundEvent: true
      }), this.renderEvents({
        events: this.props.events
      }))), selecting && /*#__PURE__*/react.createElement("div", {
        className: "rbc-slot-selection",
        style: {
          top: top,
          height: height
        }
      }, /*#__PURE__*/react.createElement("span", null, localizer.format(selectDates, 'selectRangeFormat'))), isNow && this.intervalTriggered && /*#__PURE__*/react.createElement(TimeIndicatorWrapper, timeIndicatorProps, /*#__PURE__*/react.createElement("div", timeIndicatorProps)));
    }
  }]);
}(react.Component);
DayColumn.propTypes =  false ? 0 : {};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};
var ResourceHeader = function ResourceHeader(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/react.createElement(react.Fragment, null, label);
};
ResourceHeader.propTypes =  false ? 0 : {};
function _callSuper$6(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$6() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$6() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$6 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var TimeGridHeader = /*#__PURE__*/function (_React$Component) {
  function TimeGridHeader() {
    var _this;
    (0,classCallCheck/* default */.A)(this, TimeGridHeader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$6(this, TimeGridHeader, [].concat(args));
    _this.handleHeaderClick = function (date, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date, view]);
    };
    _this.renderRow = function (resource) {
      var _this$props = _this.props,
        events = _this$props.events,
        rtl = _this$props.rtl,
        selectable = _this$props.selectable,
        getNow = _this$props.getNow,
        range = _this$props.range,
        getters = _this$props.getters,
        localizer = _this$props.localizer,
        accessors = _this$props.accessors,
        components = _this$props.components,
        resizable = _this$props.resizable;
      var resourceId = accessors.resourceId(resource);
      var eventsToDisplay = resource ? events.filter(function (event) {
        return accessors.resource(event) === resourceId;
      }) : events;
      return /*#__PURE__*/react.createElement(DateContentRow, {
        isAllDay: true,
        rtl: rtl,
        getNow: getNow,
        minRows: 2
        // Add +1 to include showMore button row in the row limit
        ,

        maxRows: _this.props.allDayMaxRows + 1,
        range: range,
        events: eventsToDisplay,
        resourceId: resourceId,
        className: "rbc-allday-cell",
        selectable: selectable,
        selected: _this.props.selected,
        components: components,
        accessors: accessors,
        getters: getters,
        localizer: localizer,
        onSelect: _this.props.onSelectEvent,
        onShowMore: _this.props.onShowMore,
        onDoubleClick: _this.props.onDoubleClickEvent,
        onKeyPress: _this.props.onKeyPressEvent,
        onSelectSlot: _this.props.onSelectSlot,
        longPressThreshold: _this.props.longPressThreshold,
        resizable: resizable
      });
    };
    return _this;
  }
  (0,inherits/* default */.A)(TimeGridHeader, _React$Component);
  return (0,createClass/* default */.A)(TimeGridHeader, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range) {
      var _this2 = this;
      var _this$props2 = this.props,
        localizer = _this$props2.localizer,
        getDrilldownView = _this$props2.getDrilldownView,
        getNow = _this$props2.getNow,
        dayProp = _this$props2.getters.dayProp,
        _this$props2$componen = _this$props2.components.header,
        HeaderComponent = _this$props2$componen === void 0 ? Header : _this$props2$componen;
      var today = getNow();
      return range.map(function (date, i) {
        var drilldownView = getDrilldownView(date);
        var label = localizer.format(date, 'dayFormat');
        var _dayProp = dayProp(date),
          className = _dayProp.className,
          style = _dayProp.style;
        var header = /*#__PURE__*/react.createElement(HeaderComponent, {
          date: date,
          label: label,
          localizer: localizer
        });
        return /*#__PURE__*/react.createElement("div", {
          key: i,
          style: style,
          className: (0,clsx/* default */.A)('rbc-header', className, localizer.isSameDate(date, today) && 'rbc-today')
        }, drilldownView ? /*#__PURE__*/react.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date, drilldownView, e);
          }
        }, header) : /*#__PURE__*/react.createElement("span", null, header));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var _this$props3 = this.props,
        width = _this$props3.width,
        rtl = _this$props3.rtl,
        resources = _this$props3.resources,
        range = _this$props3.range,
        events = _this$props3.events,
        getNow = _this$props3.getNow,
        accessors = _this$props3.accessors,
        selectable = _this$props3.selectable,
        components = _this$props3.components,
        getters = _this$props3.getters,
        scrollRef = _this$props3.scrollRef,
        localizer = _this$props3.localizer,
        isOverflowing = _this$props3.isOverflowing,
        _this$props3$componen = _this$props3.components,
        TimeGutterHeader = _this$props3$componen.timeGutterHeader,
        _this$props3$componen2 = _this$props3$componen.resourceHeader,
        ResourceHeaderComponent = _this$props3$componen2 === void 0 ? ResourceHeader : _this$props3$componen2,
        resizable = _this$props3.resizable;
      var style = {};
      if (isOverflowing) {
        style[rtl ? 'marginLeft' : 'marginRight'] = "".concat(scrollbarSize() - 1, "px");
      }
      var groupedEvents = resources.groupEvents(events);
      return /*#__PURE__*/react.createElement("div", {
        style: style,
        ref: scrollRef,
        className: (0,clsx/* default */.A)('rbc-time-header', isOverflowing && 'rbc-overflowing')
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && /*#__PURE__*/react.createElement(TimeGutterHeader, null)), resources.map(function (_ref, idx) {
        var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
          id = _ref2[0],
          resource = _ref2[1];
        return /*#__PURE__*/react.createElement("div", {
          className: "rbc-time-header-content",
          key: id || idx
        }, resource && /*#__PURE__*/react.createElement("div", {
          className: "rbc-row rbc-row-resource",
          key: "resource_".concat(idx)
        }, /*#__PURE__*/react.createElement("div", {
          className: "rbc-header"
        }, /*#__PURE__*/react.createElement(ResourceHeaderComponent, {
          index: idx,
          label: accessors.resourceTitle(resource),
          resource: resource
        }))), /*#__PURE__*/react.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range.length <= 1 ? ' rbc-time-header-cell-single-day' : '')
        }, _this3.renderHeaderCells(range)), /*#__PURE__*/react.createElement(DateContentRow, {
          isAllDay: true,
          rtl: rtl,
          getNow: getNow,
          minRows: 2
          // Add +1 to include showMore button row in the row limit
          ,

          maxRows: _this3.props.allDayMaxRows + 1,
          range: range,
          events: groupedEvents.get(id) || [],
          resourceId: resource && id,
          className: "rbc-allday-cell",
          selectable: selectable,
          selected: _this3.props.selected,
          components: components,
          accessors: accessors,
          getters: getters,
          localizer: localizer,
          onSelect: _this3.props.onSelectEvent,
          onShowMore: _this3.props.onShowMore,
          onDoubleClick: _this3.props.onDoubleClickEvent,
          onKeyDown: _this3.props.onKeyPressEvent,
          onSelectSlot: _this3.props.onSelectSlot,
          longPressThreshold: _this3.props.longPressThreshold,
          resizable: resizable
        }));
      }));
    }
  }]);
}(react.Component);
TimeGridHeader.propTypes =  false ? 0 : {};
function _callSuper$5(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$5() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$5() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$5 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var TimeGridHeaderResources = /*#__PURE__*/function (_React$Component) {
  function TimeGridHeaderResources() {
    var _this;
    (0,classCallCheck/* default */.A)(this, TimeGridHeaderResources);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper$5(this, TimeGridHeaderResources, [].concat(args));
    _this.handleHeaderClick = function (date, view, e) {
      e.preventDefault();
      notify(_this.props.onDrillDown, [date, view]);
    };
    return _this;
  }
  (0,inherits/* default */.A)(TimeGridHeaderResources, _React$Component);
  return (0,createClass/* default */.A)(TimeGridHeaderResources, [{
    key: "renderHeaderCells",
    value: function renderHeaderCells(range) {
      var _this2 = this;
      var _this$props = this.props,
        localizer = _this$props.localizer,
        getDrilldownView = _this$props.getDrilldownView,
        getNow = _this$props.getNow,
        dayProp = _this$props.getters.dayProp,
        _this$props$component = _this$props.components,
        _this$props$component2 = _this$props$component.header,
        HeaderComponent = _this$props$component2 === void 0 ? Header : _this$props$component2,
        _this$props$component3 = _this$props$component.resourceHeader,
        ResourceHeaderComponent = _this$props$component3 === void 0 ? ResourceHeader : _this$props$component3,
        resources = _this$props.resources,
        accessors = _this$props.accessors,
        events = _this$props.events,
        rtl = _this$props.rtl,
        selectable = _this$props.selectable,
        components = _this$props.components,
        getters = _this$props.getters,
        resizable = _this$props.resizable;
      var today = getNow();
      var groupedEvents = resources.groupEvents(events);
      return range.map(function (date, idx) {
        var drilldownView = getDrilldownView(date);
        var label = localizer.format(date, 'dayFormat');
        var _dayProp = dayProp(date),
          className = _dayProp.className,
          style = _dayProp.style;
        var header = /*#__PURE__*/react.createElement(HeaderComponent, {
          date: date,
          label: label,
          localizer: localizer
        });
        return /*#__PURE__*/react.createElement("div", {
          key: idx,
          className: "rbc-time-header-content rbc-resource-grouping"
        }, /*#__PURE__*/react.createElement("div", {
          className: "rbc-row rbc-time-header-cell".concat(range.length <= 1 ? ' rbc-time-header-cell-single-day' : '')
        }, /*#__PURE__*/react.createElement("div", {
          style: style,
          className: (0,clsx/* default */.A)('rbc-header', className, localizer.isSameDate(date, today) && 'rbc-today')
        }, drilldownView ? /*#__PURE__*/react.createElement("button", {
          type: "button",
          className: "rbc-button-link",
          onClick: function onClick(e) {
            return _this2.handleHeaderClick(date, drilldownView, e);
          }
        }, header) : /*#__PURE__*/react.createElement("span", null, header))), /*#__PURE__*/react.createElement("div", {
          className: "rbc-row"
        }, resources.map(function (_ref, idx) {
          var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
            id = _ref2[0],
            resource = _ref2[1];
          return /*#__PURE__*/react.createElement("div", {
            key: "resource_".concat(id, "_").concat(idx),
            className: (0,clsx/* default */.A)('rbc-header', className, localizer.isSameDate(date, today) && 'rbc-today')
          }, /*#__PURE__*/react.createElement(ResourceHeaderComponent, {
            index: idx,
            label: accessors.resourceTitle(resource),
            resource: resource
          }));
        })), /*#__PURE__*/react.createElement("div", {
          className: "rbc-row rbc-m-b-negative-3 rbc-h-full"
        }, resources.map(function (_ref3, idx) {
          var _ref4 = (0,slicedToArray/* default */.A)(_ref3, 2),
            id = _ref4[0],
            resource = _ref4[1];
          // Filter the grouped events by the current date.
          var filteredEvents = (groupedEvents.get(id) || []).filter(function (event) {
            return localizer.isSameDate(event.start, date) || localizer.isSameDate(event.end, date);
          });
          return /*#__PURE__*/react.createElement(DateContentRow, {
            key: "resource_".concat(id, "_").concat(idx),
            isAllDay: true,
            rtl: rtl,
            getNow: getNow,
            minRows: 2,
            maxRows: _this2.props.allDayMaxRows + 1,
            range: [date] // This ensures that only the single day is rendered
            ,

            events: filteredEvents // Only show filtered events for this day.
            ,

            resourceId: resource && id,
            className: "rbc-allday-cell",
            selectable: selectable,
            selected: _this2.props.selected,
            components: components,
            accessors: accessors,
            getters: getters,
            localizer: localizer,
            onSelect: _this2.props.onSelectEvent,
            onShowMore: _this2.props.onShowMore,
            onDoubleClick: _this2.props.onDoubleClickEvent,
            onKeyDown: _this2.props.onKeyPressEvent,
            onSelectSlot: _this2.props.onSelectSlot,
            longPressThreshold: _this2.props.longPressThreshold,
            resizable: resizable
          });
        })));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        width = _this$props2.width,
        rtl = _this$props2.rtl,
        range = _this$props2.range,
        scrollRef = _this$props2.scrollRef,
        isOverflowing = _this$props2.isOverflowing,
        TimeGutterHeader = _this$props2.components.timeGutterHeader;
      var style = {};
      if (isOverflowing) {
        style[rtl ? 'marginLeft' : 'marginRight'] = "".concat(scrollbarSize() - 1, "px");
      }
      return /*#__PURE__*/react.createElement("div", {
        style: style,
        ref: scrollRef,
        className: (0,clsx/* default */.A)('rbc-time-header', isOverflowing && 'rbc-overflowing')
      }, /*#__PURE__*/react.createElement("div", {
        className: "rbc-label rbc-time-header-gutter",
        style: {
          width: width,
          minWidth: width,
          maxWidth: width
        }
      }, TimeGutterHeader && /*#__PURE__*/react.createElement(TimeGutterHeader, null)), this.renderHeaderCells(range));
    }
  }]);
}(react.Component);
TimeGridHeaderResources.propTypes =  false ? 0 : {};

/**
 * Since the TimeGutter only displays the 'times' of slots in a day, and is separate
 * from the Day Columns themselves, we check to see if the range contains an offset difference
 * and, if so, change the beginning and end 'date' by a day to properly display the slots times
 * used.
 */
function adjustForDST(_ref) {
  var min = _ref.min,
    max = _ref.max,
    localizer = _ref.localizer;
  if (localizer.getTimezoneOffset(min) !== localizer.getTimezoneOffset(max)) {
    return {
      start: localizer.add(min, -1, 'day'),
      end: localizer.add(max, -1, 'day')
    };
  }
  return {
    start: min,
    end: max
  };
}
var TimeGutter = function TimeGutter(_ref2) {
  var min = _ref2.min,
    max = _ref2.max,
    timeslots = _ref2.timeslots,
    step = _ref2.step,
    localizer = _ref2.localizer,
    getNow = _ref2.getNow,
    resource = _ref2.resource,
    components = _ref2.components,
    getters = _ref2.getters,
    gutterRef = _ref2.gutterRef;
  var TimeGutterWrapper = components.timeGutterWrapper;
  var _useMemo = (0,react.useMemo)(function () {
      return adjustForDST({
        min: min,
        max: max,
        localizer: localizer
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [min === null || min === void 0 ? void 0 : min.toISOString(), max === null || max === void 0 ? void 0 : max.toISOString(), localizer]),
    start = _useMemo.start,
    end = _useMemo.end;
  var _useState = (0,react.useState)(getSlotMetrics({
      min: start,
      max: end,
      timeslots: timeslots,
      step: step,
      localizer: localizer
    })),
    _useState2 = (0,slicedToArray/* default */.A)(_useState, 2),
    slotMetrics = _useState2[0],
    setSlotMetrics = _useState2[1];
  (0,react.useEffect)(function () {
    if (slotMetrics) {
      setSlotMetrics(slotMetrics.update({
        min: start,
        max: end,
        timeslots: timeslots,
        step: step,
        localizer: localizer
      }));
    }
    /**
     * We don't want this to fire when slotMetrics is updated as it would recursively bomb
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start === null || start === void 0 ? void 0 : start.toISOString(), end === null || end === void 0 ? void 0 : end.toISOString(), timeslots, step]);
  var renderSlot = (0,react.useCallback)(function (value, idx) {
    if (idx) return null; // don't return the first (0) idx

    var isNow = slotMetrics.dateIsInGroup(getNow(), idx);
    return /*#__PURE__*/react.createElement("span", {
      className: (0,clsx/* default */.A)('rbc-label', isNow && 'rbc-now')
    }, localizer.format(value, 'timeGutterFormat'));
  }, [slotMetrics, localizer, getNow]);
  return /*#__PURE__*/react.createElement(TimeGutterWrapper, {
    slotMetrics: slotMetrics
  }, /*#__PURE__*/react.createElement("div", {
    className: "rbc-time-gutter rbc-time-column",
    ref: gutterRef
  }, slotMetrics.groups.map(function (grp, idx) {
    return /*#__PURE__*/react.createElement(TimeSlotGroup, {
      key: idx,
      group: grp,
      resource: resource,
      components: components,
      renderSlot: renderSlot,
      getters: getters
    });
  })));
};
TimeGutter.propTypes =  false ? 0 : {};
var TimeGutter$1 = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(TimeGutter, (0,esm_extends/* default */.A)({
    gutterRef: ref
  }, props));
});
var NONE = {};
function Resources(resources, accessors) {
  return {
    map: function map(fn) {
      if (!resources) return [fn([NONE, null], 0)];
      return resources.map(function (resource, idx) {
        return fn([accessors.resourceId(resource), resource], idx);
      });
    },
    groupEvents: function groupEvents(events) {
      var eventsByResource = new Map();
      if (!resources) {
        // Return all events if resources are not provided
        eventsByResource.set(NONE, events);
        return eventsByResource;
      }
      events.forEach(function (event) {
        var id = accessors.resource(event) || NONE;
        if (Array.isArray(id)) {
          id.forEach(function (item) {
            var resourceEvents = eventsByResource.get(item) || [];
            resourceEvents.push(event);
            eventsByResource.set(item, resourceEvents);
          });
        } else {
          var resourceEvents = eventsByResource.get(id) || [];
          resourceEvents.push(event);
          eventsByResource.set(id, resourceEvents);
        }
      });
      return eventsByResource;
    }
  };
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper$4(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$4() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$4() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$4 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var TimeGrid = /*#__PURE__*/function (_Component) {
  function TimeGrid(props) {
    var _this;
    (0,classCallCheck/* default */.A)(this, TimeGrid);
    _this = _callSuper$4(this, TimeGrid, [props]);
    _this.handleScroll = function (e) {
      if (_this.scrollRef.current) {
        _this.scrollRef.current.scrollLeft = e.target.scrollLeft;
      }
    };
    _this.handleResize = function () {
      cancel(_this.rafHandle);
      _this.rafHandle = request(_this.checkOverflow);
    };
    _this.handleKeyPressEvent = function () {
      _this.clearSelection();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectEvent = function () {
      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function () {
      _this.clearSelection();
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleShowMore = function (events, date, cell, slot, target) {
      var _this$props = _this.props,
        popup = _this$props.popup,
        onDrillDown = _this$props.onDrillDown,
        onShowMore = _this$props.onShowMore,
        getDrilldownView = _this$props.getDrilldownView,
        doShowMoreDrillDown = _this$props.doShowMoreDrillDown;
      _this.clearSelection();
      if (popup) {
        var position = position_position(cell, _this.containerRef.current);
        _this.setState({
          overlay: {
            date: date,
            events: events,
            position: _objectSpread$1(_objectSpread$1({}, position), {}, {
              width: '200px'
            }),
            target: target
          }
        });
      } else if (doShowMoreDrillDown) {
        notify(onDrillDown, [date, getDrilldownView(date) || views$1.DAY]);
      }
      notify(onShowMore, [events, date, slot]);
    };
    _this.handleSelectAllDaySlot = function (slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;
      var start = new Date(slots[0]);
      var end = new Date(slots[slots.length - 1]);
      end.setDate(slots[slots.length - 1].getDate() + 1);
      notify(onSelectSlot, {
        slots: slots,
        start: start,
        end: end,
        action: slotInfo.action,
        resourceId: slotInfo.resourceId
      });
    };
    _this.overlayDisplay = function () {
      _this.setState({
        overlay: null
      });
    };
    _this.checkOverflow = function () {
      if (_this._updatingOverflow) return;
      var content = _this.contentRef.current;
      if (!(content !== null && content !== void 0 && content.scrollHeight)) return;
      var isOverflowing = content.scrollHeight > content.clientHeight;
      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;
        _this.setState({
          isOverflowing: isOverflowing
        }, function () {
          _this._updatingOverflow = false;
        });
      }
    };
    _this.memoizedResources = memoizeOne(function (resources, accessors) {
      return Resources(resources, accessors);
    });
    _this.state = {
      gutterWidth: undefined,
      isOverflowing: null
    };
    _this.scrollRef = /*#__PURE__*/react.createRef();
    _this.contentRef = /*#__PURE__*/react.createRef();
    _this.containerRef = /*#__PURE__*/react.createRef();
    _this._scrollRatio = null;
    _this.gutterRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  (0,inherits/* default */.A)(TimeGrid, _Component);
  return (0,createClass/* default */.A)(TimeGrid, [{
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate() {
      this.checkOverflow();
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.width == null) {
        this.measureGutter();
      }
      this.calculateScroll();
      this.applyScroll();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
      cancel(this.rafHandle);
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.applyScroll();
    }
  }, {
    key: "renderDayColumn",
    value: function renderDayColumn(date, id, resource, groupedEvents, groupedBackgroundEvents, localizer, accessors, components, dayLayoutAlgorithm, now) {
      var _this$props2 = this.props,
        min = _this$props2.min,
        max = _this$props2.max;
      var daysEvents = (groupedEvents.get(id) || []).filter(function (event) {
        return localizer.inRange(date, accessors.start(event), accessors.end(event), 'day');
      });
      var daysBackgroundEvents = (groupedBackgroundEvents.get(id) || []).filter(function (event) {
        return localizer.inRange(date, accessors.start(event), accessors.end(event), 'day');
      });
      return /*#__PURE__*/react.createElement(DayColumn, (0,esm_extends/* default */.A)({}, this.props, {
        localizer: localizer,
        min: localizer.merge(date, min),
        max: localizer.merge(date, max),
        resource: resource && id,
        components: components,
        isNow: localizer.isSameDate(date, now),
        key: "".concat(id, "-").concat(date),
        date: date,
        events: daysEvents,
        backgroundEvents: daysBackgroundEvents,
        dayLayoutAlgorithm: dayLayoutAlgorithm
      }));
    }
  }, {
    key: "renderResourcesFirst",
    value: function renderResourcesFirst(range, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components, dayLayoutAlgorithm) {
      var _this2 = this;
      return resources.map(function (_ref) {
        var _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
          id = _ref2[0],
          resource = _ref2[1];
        return range.map(function (date) {
          return _this2.renderDayColumn(date, id, resource, groupedEvents, groupedBackgroundEvents, localizer, accessors, components, dayLayoutAlgorithm, now);
        });
      });
    }
  }, {
    key: "renderRangeFirst",
    value: function renderRangeFirst(range, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components, dayLayoutAlgorithm) {
      var _this3 = this;
      return range.map(function (date) {
        return /*#__PURE__*/react.createElement("div", {
          style: {
            display: 'flex',
            minHeight: '100%',
            flex: 1
          },
          key: date
        }, resources.map(function (_ref3) {
          var _ref4 = (0,slicedToArray/* default */.A)(_ref3, 2),
            id = _ref4[0],
            resource = _ref4[1];
          return /*#__PURE__*/react.createElement("div", {
            style: {
              flex: 1
            },
            key: accessors.resourceId(resource)
          }, _this3.renderDayColumn(date, id, resource, groupedEvents, groupedBackgroundEvents, localizer, accessors, components, dayLayoutAlgorithm, now));
        }));
      });
    }
  }, {
    key: "renderEvents",
    value: function renderEvents(range, events, backgroundEvents, now) {
      var _this$props3 = this.props,
        accessors = _this$props3.accessors,
        localizer = _this$props3.localizer,
        resourceGroupingLayout = _this$props3.resourceGroupingLayout,
        components = _this$props3.components,
        dayLayoutAlgorithm = _this$props3.dayLayoutAlgorithm;
      var resources = this.memoizedResources(this.props.resources, accessors);
      var groupedEvents = resources.groupEvents(events);
      var groupedBackgroundEvents = resources.groupEvents(backgroundEvents);
      if (!resourceGroupingLayout) {
        return this.renderResourcesFirst(range, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components, dayLayoutAlgorithm);
      } else {
        return this.renderRangeFirst(range, resources, groupedEvents, groupedBackgroundEvents, localizer, accessors, now, components, dayLayoutAlgorithm);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$allDayMax;
      var _this$props4 = this.props,
        events = _this$props4.events,
        backgroundEvents = _this$props4.backgroundEvents,
        range = _this$props4.range,
        width = _this$props4.width,
        rtl = _this$props4.rtl,
        selected = _this$props4.selected,
        getNow = _this$props4.getNow,
        resources = _this$props4.resources,
        components = _this$props4.components,
        accessors = _this$props4.accessors,
        getters = _this$props4.getters,
        localizer = _this$props4.localizer,
        min = _this$props4.min,
        max = _this$props4.max,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        longPressThreshold = _this$props4.longPressThreshold,
        resizable = _this$props4.resizable,
        resourceGroupingLayout = _this$props4.resourceGroupingLayout;
      width = width || this.state.gutterWidth;
      var start = range[0],
        end = range[range.length - 1];
      this.slots = range.length;
      var allDayEvents = [],
        rangeEvents = [],
        rangeBackgroundEvents = [];
      events.forEach(function (event) {
        if (react_big_calendar_esm_inRange(event, start, end, accessors, localizer)) {
          var eStart = accessors.start(event),
            eEnd = accessors.end(event);
          if (accessors.allDay(event) || localizer.startAndEndAreDateOnly(eStart, eEnd) || !showMultiDayTimes && !localizer.isSameDate(eStart, eEnd)) {
            allDayEvents.push(event);
          } else {
            rangeEvents.push(event);
          }
        }
      });
      backgroundEvents.forEach(function (event) {
        if (react_big_calendar_esm_inRange(event, start, end, accessors, localizer)) {
          rangeBackgroundEvents.push(event);
        }
      });
      allDayEvents.sort(function (a, b) {
        return sortEvents(a, b, accessors, localizer);
      });
      var headerProps = {
        range: range,
        events: allDayEvents,
        width: width,
        rtl: rtl,
        getNow: getNow,
        localizer: localizer,
        selected: selected,
        allDayMaxRows: this.props.showAllEvents ? Infinity : (_this$props$allDayMax = this.props.allDayMaxRows) !== null && _this$props$allDayMax !== void 0 ? _this$props$allDayMax : Infinity,
        resources: this.memoizedResources(resources, accessors),
        selectable: this.props.selectable,
        accessors: accessors,
        getters: getters,
        components: components,
        scrollRef: this.scrollRef,
        isOverflowing: this.state.isOverflowing,
        longPressThreshold: longPressThreshold,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectEvent,
        onShowMore: this.handleShowMore,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onKeyPressEvent: this.props.onKeyPressEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView,
        resizable: resizable
      };
      return /*#__PURE__*/react.createElement("div", {
        className: (0,clsx/* default */.A)('rbc-time-view', resources && 'rbc-time-view-resources'),
        ref: this.containerRef
      }, resources && resources.length > 1 && resourceGroupingLayout ? /*#__PURE__*/react.createElement(TimeGridHeaderResources, headerProps) : /*#__PURE__*/react.createElement(TimeGridHeader, headerProps), this.props.popup && this.renderOverlay(), /*#__PURE__*/react.createElement("div", {
        ref: this.contentRef,
        className: "rbc-time-content",
        onScroll: this.handleScroll
      }, /*#__PURE__*/react.createElement(TimeGutter$1, {
        date: start,
        ref: this.gutterRef,
        localizer: localizer,
        min: localizer.merge(start, min),
        max: localizer.merge(start, max),
        step: this.props.step,
        getNow: this.props.getNow,
        timeslots: this.props.timeslots,
        components: components,
        className: "rbc-time-gutter",
        getters: getters
      }), this.renderEvents(range, rangeEvents, rangeBackgroundEvents, getNow())));
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay() {
      var _this$state$overlay,
        _this$state,
        _this4 = this;
      var overlay = (_this$state$overlay = (_this$state = this.state) === null || _this$state === void 0 ? void 0 : _this$state.overlay) !== null && _this$state$overlay !== void 0 ? _this$state$overlay : {};
      var _this$props5 = this.props,
        accessors = _this$props5.accessors,
        localizer = _this$props5.localizer,
        components = _this$props5.components,
        getters = _this$props5.getters,
        selected = _this$props5.selected,
        popupOffset = _this$props5.popupOffset,
        handleDragStart = _this$props5.handleDragStart;
      var onHide = function onHide() {
        return _this4.setState({
          overlay: null
        });
      };
      return /*#__PURE__*/react.createElement(PopOverlay, {
        overlay: overlay,
        accessors: accessors,
        localizer: localizer,
        components: components,
        getters: getters,
        selected: selected,
        popupOffset: popupOffset,
        ref: this.containerRef,
        handleKeyPressEvent: this.handleKeyPressEvent,
        handleSelectEvent: this.handleSelectEvent,
        handleDoubleClickEvent: this.handleDoubleClickEvent,
        handleDragStart: handleDragStart,
        show: !!overlay.position,
        overlayDisplay: this.overlayDisplay,
        onHide: onHide
      });
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      clearTimeout(this._selectTimer);
      this._pendingSelection = [];
    }
  }, {
    key: "measureGutter",
    value: function measureGutter() {
      var _this5 = this;
      if (this.measureGutterAnimationFrameRequest) {
        window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
      }
      this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function () {
        var _this5$gutterRef;
        var width = (_this5$gutterRef = _this5.gutterRef) !== null && _this5$gutterRef !== void 0 && _this5$gutterRef.current ? getWidth(_this5.gutterRef.current) : undefined;
        if (width && _this5.state.gutterWidth !== width) {
          _this5.setState({
            gutterWidth: width
          });
        }
      });
    }
  }, {
    key: "applyScroll",
    value: function applyScroll() {
      // If auto-scroll is disabled, we don't actually apply the scroll
      if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
        var content = this.contentRef.current;
        content.scrollTop = content.scrollHeight * this._scrollRatio;
        // Only do this once
        this._scrollRatio = null;
      }
    }
  }, {
    key: "calculateScroll",
    value: function calculateScroll() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var min = props.min,
        max = props.max,
        scrollToTime = props.scrollToTime,
        localizer = props.localizer;
      var diffMillis = localizer.diff(localizer.merge(scrollToTime, min), scrollToTime, 'milliseconds');
      var totalMillis = localizer.diff(min, max, 'milliseconds');
      this._scrollRatio = diffMillis / totalMillis;
    }
  }]);
}(react.Component);
TimeGrid.propTypes =  false ? 0 : {};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  // To be compatible with old versions, default as `false`.
  resourceGroupingLayout: false
};
var _excluded$4 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _callSuper$3(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$3() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$3() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var Day = /*#__PURE__*/function (_React$Component) {
  function Day() {
    (0,classCallCheck/* default */.A)(this, Day);
    return _callSuper$3(this, Day, arguments);
  }
  (0,inherits/* default */.A)(Day, _React$Component);
  return (0,createClass/* default */.A)(Day, [{
    key: "render",
    value: function render() {
      /**
       * This allows us to default min, max, and scrollToTime
       * using our localizer. This is necessary until such time
       * as TODO: TimeGrid is converted to a functional component.
       */
      var _this$props = this.props,
        date = _this$props.date,
        localizer = _this$props.localizer,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? localizer.endOf(new Date(), 'day') : _this$props$max,
        _this$props$scrollToT = _this$props.scrollToTime,
        scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$scrollToT,
        _this$props$enableAut = _this$props.enableAutoScroll,
        enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$4);
      var range = Day.range(date, {
        localizer: localizer
      });
      return /*#__PURE__*/react.createElement(TimeGrid, (0,esm_extends/* default */.A)({}, props, {
        range: range,
        eventOffset: 10,
        localizer: localizer,
        min: min,
        max: max,
        scrollToTime: scrollToTime,
        enableAutoScroll: enableAutoScroll
      }));
    }
  }]);
}(react.Component);
Day.propTypes =  false ? 0 : {};
Day.range = function (date, _ref) {
  var localizer = _ref.localizer;
  return [localizer.startOf(date, 'day')];
};
Day.navigate = function (date, action, _ref2) {
  var localizer = _ref2.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -1, 'day');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, 1, 'day');
    default:
      return date;
  }
};
Day.title = function (date, _ref3) {
  var localizer = _ref3.localizer;
  return localizer.format(date, 'dayHeaderFormat');
};
var _excluded$3 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _callSuper$2(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$2() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
var Week = /*#__PURE__*/function (_React$Component) {
  function Week() {
    (0,classCallCheck/* default */.A)(this, Week);
    return _callSuper$2(this, Week, arguments);
  }
  (0,inherits/* default */.A)(Week, _React$Component);
  return (0,createClass/* default */.A)(Week, [{
    key: "render",
    value: function render() {
      /**
       * This allows us to default min, max, and scrollToTime
       * using our localizer. This is necessary until such time
       * as TimeGrid is converted to a functional component.
       */
      var _this$props = this.props,
        date = _this$props.date,
        localizer = _this$props.localizer,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? localizer.endOf(new Date(), 'day') : _this$props$max,
        _this$props$scrollToT = _this$props.scrollToTime,
        scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$scrollToT,
        _this$props$enableAut = _this$props.enableAutoScroll,
        enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$3);
      var range = Week.range(date, this.props);
      return /*#__PURE__*/react.createElement(TimeGrid, (0,esm_extends/* default */.A)({}, props, {
        range: range,
        eventOffset: 15,
        localizer: localizer,
        min: min,
        max: max,
        scrollToTime: scrollToTime,
        enableAutoScroll: enableAutoScroll
      }));
    }
  }]);
}(react.Component);
Week.propTypes =  false ? 0 : {};
Week.defaultProps = TimeGrid.defaultProps;
Week.navigate = function (date, action, _ref) {
  var localizer = _ref.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -1, 'week');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, 1, 'week');
    default:
      return date;
  }
};
Week.range = function (date, _ref2) {
  var localizer = _ref2.localizer;
  var firstOfWeek = localizer.startOfWeek();
  var start = localizer.startOf(date, 'week', firstOfWeek);
  var end = localizer.endOf(date, 'week', firstOfWeek);
  return localizer.range(start, end);
};
Week.title = function (date, _ref3) {
  var localizer = _ref3.localizer;
  var _Week$range = Week.range(date, {
      localizer: localizer
    }),
    _Week$range2 = _toArray(_Week$range),
    start = _Week$range2[0],
    rest = _arrayLikeToArray$1(_Week$range2).slice(1);
  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};
var _excluded$2 = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _callSuper$1(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct$1() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function workWeekRange(date, options) {
  return Week.range(date, options).filter(function (d) {
    return [6, 0].indexOf(d.getDay()) === -1;
  });
}
var WorkWeek = /*#__PURE__*/function (_React$Component) {
  function WorkWeek() {
    (0,classCallCheck/* default */.A)(this, WorkWeek);
    return _callSuper$1(this, WorkWeek, arguments);
  }
  (0,inherits/* default */.A)(WorkWeek, _React$Component);
  return (0,createClass/* default */.A)(WorkWeek, [{
    key: "render",
    value: function render() {
      /**
       * This allows us to default min, max, and scrollToTime
       * using our localizer. This is necessary until such time
       * as TimeGrid is converted to a functional component.
       */
      var _this$props = this.props,
        date = _this$props.date,
        localizer = _this$props.localizer,
        _this$props$min = _this$props.min,
        min = _this$props$min === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$min,
        _this$props$max = _this$props.max,
        max = _this$props$max === void 0 ? localizer.endOf(new Date(), 'day') : _this$props$max,
        _this$props$scrollToT = _this$props.scrollToTime,
        scrollToTime = _this$props$scrollToT === void 0 ? localizer.startOf(new Date(), 'day') : _this$props$scrollToT,
        _this$props$enableAut = _this$props.enableAutoScroll,
        enableAutoScroll = _this$props$enableAut === void 0 ? true : _this$props$enableAut,
        props = (0,objectWithoutProperties/* default */.A)(_this$props, _excluded$2);
      var range = workWeekRange(date, this.props);
      return /*#__PURE__*/react.createElement(TimeGrid, (0,esm_extends/* default */.A)({}, props, {
        range: range,
        eventOffset: 15,
        localizer: localizer,
        min: min,
        max: max,
        scrollToTime: scrollToTime,
        enableAutoScroll: enableAutoScroll
      }));
    }
  }]);
}(react.Component);
WorkWeek.propTypes =  false ? 0 : {};
WorkWeek.defaultProps = TimeGrid.defaultProps;
WorkWeek.range = workWeekRange;
WorkWeek.navigate = Week.navigate;
WorkWeek.title = function (date, _ref) {
  var localizer = _ref.localizer;
  var _workWeekRange = workWeekRange(date, {
      localizer: localizer
    }),
    _workWeekRange2 = _toArray(_workWeekRange),
    start = _workWeekRange2[0],
    rest = _arrayLikeToArray(_workWeekRange2).slice(1);
  return localizer.format({
    start: start,
    end: rest.pop()
  }, 'dayRangeHeaderFormat');
};
var DEFAULT_LENGTH = 30;
function Agenda(_ref) {
  var accessors = _ref.accessors,
    components = _ref.components,
    date = _ref.date,
    events = _ref.events,
    getters = _ref.getters,
    _ref$length = _ref.length,
    length = _ref$length === void 0 ? DEFAULT_LENGTH : _ref$length,
    localizer = _ref.localizer,
    onDoubleClickEvent = _ref.onDoubleClickEvent,
    onSelectEvent = _ref.onSelectEvent,
    selected = _ref.selected;
  var headerRef = (0,react.useRef)(null);
  var dateColRef = (0,react.useRef)(null);
  var timeColRef = (0,react.useRef)(null);
  var contentRef = (0,react.useRef)(null);
  var tbodyRef = (0,react.useRef)(null);
  (0,react.useEffect)(function () {
    _adjustHeader();
  });
  var renderDay = function renderDay(day, events, dayKey) {
    var Event = components.event,
      AgendaDate = components.date;
    events = events.filter(function (e) {
      return react_big_calendar_esm_inRange(e, localizer.startOf(day, 'day'), localizer.endOf(day, 'day'), accessors, localizer);
    });
    return events.map(function (event, idx) {
      var title = accessors.title(event);
      var end = accessors.end(event);
      var start = accessors.start(event);
      var userProps = getters.eventProp(event, start, end, isSelected(event, selected));
      var dateLabel = idx === 0 && localizer.format(day, 'agendaDateFormat');
      var first = idx === 0 ? /*#__PURE__*/react.createElement("td", {
        rowSpan: events.length,
        className: "rbc-agenda-date-cell"
      }, AgendaDate ? /*#__PURE__*/react.createElement(AgendaDate, {
        day: day,
        label: dateLabel
      }) : dateLabel) : false;
      return /*#__PURE__*/react.createElement("tr", {
        key: dayKey + '_' + idx,
        className: userProps.className,
        style: userProps.style
      }, first, /*#__PURE__*/react.createElement("td", {
        className: "rbc-agenda-time-cell"
      }, timeRangeLabel(day, event)), /*#__PURE__*/react.createElement("td", {
        className: "rbc-agenda-event-cell",
        onClick: function onClick(e) {
          return onSelectEvent && onSelectEvent(event, e);
        },
        onDoubleClick: function onDoubleClick(e) {
          return onDoubleClickEvent && onDoubleClickEvent(event, e);
        }
      }, Event ? /*#__PURE__*/react.createElement(Event, {
        event: event,
        title: title
      }) : title));
    }, []);
  };
  var timeRangeLabel = function timeRangeLabel(day, event) {
    var labelClass = '',
      TimeComponent = components.time,
      label = localizer.messages.allDay;
    var end = accessors.end(event);
    var start = accessors.start(event);
    if (!accessors.allDay(event)) {
      if (localizer.eq(start, end)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (localizer.isSameDate(start, end)) {
        label = localizer.format({
          start: start,
          end: end
        }, 'agendaTimeRangeFormat');
      } else if (localizer.isSameDate(day, start)) {
        label = localizer.format(start, 'agendaTimeFormat');
      } else if (localizer.isSameDate(day, end)) {
        label = localizer.format(end, 'agendaTimeFormat');
      }
    }
    if (localizer.gt(day, start, 'day')) labelClass = 'rbc-continues-prior';
    if (localizer.lt(day, end, 'day')) labelClass += ' rbc-continues-after';
    return /*#__PURE__*/react.createElement("span", {
      className: labelClass.trim()
    }, TimeComponent ? /*#__PURE__*/react.createElement(TimeComponent, {
      event: event,
      day: day,
      label: label
    }) : label);
  };
  var _adjustHeader = function _adjustHeader() {
    if (!tbodyRef.current) return;
    var header = headerRef.current;
    var firstRow = tbodyRef.current.firstChild;
    if (!firstRow) return;
    var isOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
    var _widths = [];
    var widths = _widths;
    _widths = [getWidth(firstRow.children[0]), getWidth(firstRow.children[1])];
    if (widths[0] !== _widths[0] || widths[1] !== _widths[1]) {
      dateColRef.current.style.width = _widths[0] + 'px';
      timeColRef.current.style.width = _widths[1] + 'px';
    }
    if (isOverflowing) {
      addClass(header, 'rbc-header-overflowing');
      header.style.marginRight = scrollbarSize() + 'px';
    } else {
      removeClass(header, 'rbc-header-overflowing');
    }
  };
  var messages = localizer.messages;
  var end = localizer.add(date, length, 'day');
  var range = localizer.range(date, end, 'day');
  events = events.filter(function (event) {
    return react_big_calendar_esm_inRange(event, localizer.startOf(date, 'day'), localizer.endOf(end, 'day'), accessors, localizer);
  });
  events.sort(function (a, b) {
    return +accessors.start(a) - +accessors.start(b);
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "rbc-agenda-view"
  }, events.length !== 0 ? /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("table", {
    ref: headerRef,
    className: "rbc-agenda-table"
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("th", {
    className: "rbc-header",
    ref: dateColRef
  }, messages.date), /*#__PURE__*/react.createElement("th", {
    className: "rbc-header",
    ref: timeColRef
  }, messages.time), /*#__PURE__*/react.createElement("th", {
    className: "rbc-header"
  }, messages.event)))), /*#__PURE__*/react.createElement("div", {
    className: "rbc-agenda-content",
    ref: contentRef
  }, /*#__PURE__*/react.createElement("table", {
    className: "rbc-agenda-table"
  }, /*#__PURE__*/react.createElement("tbody", {
    ref: tbodyRef
  }, range.map(function (day, idx) {
    return renderDay(day, events, idx);
  }))))) : /*#__PURE__*/react.createElement("span", {
    className: "rbc-agenda-empty"
  }, messages.noEventsInRange));
}
Agenda.propTypes =  false ? 0 : {};
Agenda.range = function (start, _ref2) {
  var _ref2$length = _ref2.length,
    length = _ref2$length === void 0 ? DEFAULT_LENGTH : _ref2$length,
    localizer = _ref2.localizer;
  var end = localizer.add(start, length, 'day');
  return {
    start: start,
    end: end
  };
};
Agenda.navigate = function (date, action, _ref3) {
  var _ref3$length = _ref3.length,
    length = _ref3$length === void 0 ? DEFAULT_LENGTH : _ref3$length,
    localizer = _ref3.localizer;
  switch (action) {
    case react_big_calendar_esm_navigate.PREVIOUS:
      return localizer.add(date, -length, 'day');
    case react_big_calendar_esm_navigate.NEXT:
      return localizer.add(date, length, 'day');
    default:
      return date;
  }
};
Agenda.title = function (start, _ref4) {
  var _ref4$length = _ref4.length,
    length = _ref4$length === void 0 ? DEFAULT_LENGTH : _ref4$length,
    localizer = _ref4.localizer;
  var end = localizer.add(start, length, 'day');
  return localizer.format({
    start: start,
    end: end
  }, 'agendaHeaderFormat');
};
var VIEWS = (0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)((0,defineProperty/* default */.A)({}, views$1.MONTH, MonthView), views$1.WEEK, Week), views$1.WORK_WEEK, WorkWeek), views$1.DAY, Day), views$1.AGENDA, Agenda);
var _excluded$1 = ["action", "date", "today"];
function moveDate(View, _ref) {
  var action = _ref.action,
    date = _ref.date,
    today = _ref.today,
    props = (0,objectWithoutProperties/* default */.A)(_ref, _excluded$1);
  View = typeof View === 'string' ? VIEWS[View] : View;
  switch (action) {
    case react_big_calendar_esm_navigate.TODAY:
      date = today || new Date();
      break;
    case react_big_calendar_esm_navigate.DATE:
      break;
    default:
      browser_default()(View && typeof View.navigate === 'function', 'Calendar View components must implement a static `.navigate(date, action)` method.s');
      date = View.navigate(date, action, props);
  }
  return date;
}

/**
 * Retrieve via an accessor-like property
 *
 *    accessor(obj, 'name')   // => retrieves obj['name']
 *    accessor(data, func)    // => retrieves func(data)
 *    ... otherwise null
 */
function accessor(data, field) {
  var value = null;
  if (typeof field === 'function') value = field(data);else if (typeof field === 'string' && (0,esm_typeof/* default */.A)(data) === 'object' && data != null && field in data) value = data[field];
  return value;
}
var wrapAccessor = function wrapAccessor(acc) {
  return function (data) {
    return accessor(data, acc);
  };
};
var _excluded = ["view", "date", "getNow", "onNavigate"],
  _excluded2 = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      (0,defineProperty/* default */.A)(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _callSuper(t, o, e) {
  return o = (0,getPrototypeOf/* default */.A)(o), (0,possibleConstructorReturn/* default */.A)(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0,getPrototypeOf/* default */.A)(t).constructor) : o.apply(t, e));
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function viewNames(_views) {
  if (Array.isArray(_views)) {
    return _views;
  }
  var views = [];
  for (var _i = 0, _Object$entries = Object.entries(_views); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0,slicedToArray/* default */.A)(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (value) {
      views.push(key);
    }
  }
  return views;
}
function isValidView(view, _ref) {
  var _views = _ref.views;
  var names = viewNames(_views);
  return names.indexOf(view) !== -1;
}
var Calendar = /*#__PURE__*/function (_React$Component) {
  function Calendar() {
    var _this;
    (0,classCallCheck/* default */.A)(this, Calendar);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Calendar, [].concat(_args));
    _this.getViews = function () {
      var views = _this.props.views;
      if (Array.isArray(views)) {
        return transform_default()(views, function (obj, name) {
          return obj[name] = VIEWS[name];
        }, {});
      }
      if ((0,esm_typeof/* default */.A)(views) === 'object') {
        return mapValues_default()(views, function (value, key) {
          if (value === true) {
            return VIEWS[key];
          }
          return value;
        });
      }
      return VIEWS;
    };
    _this.getView = function () {
      var views = _this.getViews();
      return views[_this.props.view];
    };
    _this.getDrilldownView = function (date) {
      var _this$props = _this.props,
        view = _this$props.view,
        drilldownView = _this$props.drilldownView,
        getDrilldownView = _this$props.getDrilldownView;
      if (!getDrilldownView) return drilldownView;
      return getDrilldownView(date, view, Object.keys(_this.getViews()));
    };
    /**
     *
     * @param date
     * @param viewComponent
     * @param {'month'|'week'|'work_week'|'day'|'agenda'} [view] - optional
     * parameter. It appears when range change on view changing. It could be handy
     * when you need to have both: range and view type at once, i.e. for manage rbc
     * state via url
     */
    _this.handleRangeChange = function (date, viewComponent, view) {
      var _this$props2 = _this.props,
        onRangeChange = _this$props2.onRangeChange,
        localizer = _this$props2.localizer;
      if (onRangeChange) {
        if (viewComponent.range) {
          onRangeChange(viewComponent.range(date, {
            localizer: localizer
          }), view);
        } else {
          if (false) // removed by dead control flow
{}
        }
      }
    };
    _this.handleNavigate = function (action, newDate) {
      var _this$props3 = _this.props,
        view = _this$props3.view,
        date = _this$props3.date,
        getNow = _this$props3.getNow,
        onNavigate = _this$props3.onNavigate,
        props = (0,objectWithoutProperties/* default */.A)(_this$props3, _excluded);
      var ViewComponent = _this.getView();
      var today = getNow();
      date = moveDate(ViewComponent, _objectSpread(_objectSpread({}, props), {}, {
        action: action,
        date: newDate || date || today,
        today: today
      }));
      onNavigate(date, view, action);
      _this.handleRangeChange(date, ViewComponent);
    };
    _this.handleViewChange = function (view) {
      if (view !== _this.props.view && isValidView(view, _this.props)) {
        _this.props.onView(view);
      }
      var views = _this.getViews();
      _this.handleRangeChange(_this.props.date || _this.props.getNow(), views[view], view);
    };
    _this.handleSelectEvent = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      notify(_this.props.onSelectEvent, args);
    };
    _this.handleDoubleClickEvent = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      notify(_this.props.onDoubleClickEvent, args);
    };
    _this.handleKeyPressEvent = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      notify(_this.props.onKeyPressEvent, args);
    };
    _this.handleSelectSlot = function (slotInfo) {
      notify(_this.props.onSelectSlot, slotInfo);
    };
    _this.handleDrillDown = function (date, view) {
      var onDrillDown = _this.props.onDrillDown;
      if (onDrillDown) {
        onDrillDown(date, view, _this.drilldownView);
        return;
      }
      if (view) _this.handleViewChange(view);
      _this.handleNavigate(react_big_calendar_esm_navigate.DATE, date);
    };
    _this.state = {
      context: Calendar.getContext(_this.props)
    };
    return _this;
  }
  (0,inherits/* default */.A)(Calendar, _React$Component);
  return (0,createClass/* default */.A)(Calendar, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
        view = _this$props4.view,
        toolbar = _this$props4.toolbar,
        events = _this$props4.events,
        backgroundEvents = _this$props4.backgroundEvents,
        resourceGroupingLayout = _this$props4.resourceGroupingLayout,
        style = _this$props4.style,
        className = _this$props4.className,
        elementProps = _this$props4.elementProps,
        current = _this$props4.date,
        getNow = _this$props4.getNow,
        length = _this$props4.length,
        showMultiDayTimes = _this$props4.showMultiDayTimes,
        onShowMore = _this$props4.onShowMore,
        doShowMoreDrillDown = _this$props4.doShowMoreDrillDown;
      _this$props4.components;
      _this$props4.formats;
      _this$props4.messages;
      _this$props4.culture;
      var props = (0,objectWithoutProperties/* default */.A)(_this$props4, _excluded2);
      current = current || getNow();
      var View = this.getView();
      var _this$state$context = this.state.context,
        accessors = _this$state$context.accessors,
        components = _this$state$context.components,
        getters = _this$state$context.getters,
        localizer = _this$state$context.localizer,
        viewNames = _this$state$context.viewNames;
      var CalToolbar = components.toolbar || Toolbar;
      var label = View.title(current, {
        localizer: localizer,
        length: length
      });
      return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({}, elementProps, {
        className: (0,clsx/* default */.A)(className, 'rbc-calendar', props.rtl && 'rbc-rtl'),
        style: style
      }), toolbar && /*#__PURE__*/react.createElement(CalToolbar, {
        date: current,
        view: view,
        views: viewNames,
        label: label,
        onView: this.handleViewChange,
        onNavigate: this.handleNavigate,
        localizer: localizer
      }), /*#__PURE__*/react.createElement(View, (0,esm_extends/* default */.A)({}, props, {
        events: events,
        backgroundEvents: backgroundEvents,
        date: current,
        getNow: getNow,
        length: length,
        localizer: localizer,
        getters: getters,
        components: components,
        accessors: accessors,
        showMultiDayTimes: showMultiDayTimes,
        getDrilldownView: this.getDrilldownView,
        onNavigate: this.handleNavigate,
        onDrillDown: this.handleDrillDown,
        onSelectEvent: this.handleSelectEvent,
        onDoubleClickEvent: this.handleDoubleClickEvent,
        onKeyPressEvent: this.handleKeyPressEvent,
        onSelectSlot: this.handleSelectSlot,
        onShowMore: onShowMore,
        doShowMoreDrillDown: doShowMoreDrillDown,
        resourceGroupingLayout: resourceGroupingLayout
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        context: Calendar.getContext(nextProps)
      };
    }
  }, {
    key: "getContext",
    value: function getContext(_ref2) {
      var startAccessor = _ref2.startAccessor,
        endAccessor = _ref2.endAccessor,
        allDayAccessor = _ref2.allDayAccessor,
        tooltipAccessor = _ref2.tooltipAccessor,
        titleAccessor = _ref2.titleAccessor,
        resourceAccessor = _ref2.resourceAccessor,
        resourceIdAccessor = _ref2.resourceIdAccessor,
        resourceTitleAccessor = _ref2.resourceTitleAccessor,
        eventIdAccessor = _ref2.eventIdAccessor,
        eventPropGetter = _ref2.eventPropGetter,
        backgroundEventPropGetter = _ref2.backgroundEventPropGetter,
        slotPropGetter = _ref2.slotPropGetter,
        slotGroupPropGetter = _ref2.slotGroupPropGetter,
        dayPropGetter = _ref2.dayPropGetter,
        view = _ref2.view,
        views = _ref2.views,
        localizer = _ref2.localizer,
        culture = _ref2.culture,
        _ref2$messages = _ref2.messages,
        messages$1 = _ref2$messages === void 0 ? {} : _ref2$messages,
        _ref2$components = _ref2.components,
        components = _ref2$components === void 0 ? {} : _ref2$components,
        _ref2$formats = _ref2.formats,
        formats = _ref2$formats === void 0 ? {} : _ref2$formats;
      var names = viewNames(views);
      var msgs = messages(messages$1);
      return {
        viewNames: names,
        localizer: mergeWithDefaults(localizer, culture, formats, msgs),
        getters: {
          eventProp: function eventProp() {
            return eventPropGetter && eventPropGetter.apply(void 0, arguments) || {};
          },
          backgroundEventProp: function backgroundEventProp() {
            return backgroundEventPropGetter && backgroundEventPropGetter.apply(void 0, arguments) || {};
          },
          slotProp: function slotProp() {
            return slotPropGetter && slotPropGetter.apply(void 0, arguments) || {};
          },
          slotGroupProp: function slotGroupProp() {
            return slotGroupPropGetter && slotGroupPropGetter.apply(void 0, arguments) || {};
          },
          dayProp: function dayProp() {
            return dayPropGetter && dayPropGetter.apply(void 0, arguments) || {};
          }
        },
        components: defaults_default()(components[view] || {}, omit_default()(components, names), {
          eventWrapper: NoopWrapper,
          backgroundEventWrapper: NoopWrapper,
          eventContainerWrapper: NoopWrapper,
          dateCellWrapper: NoopWrapper,
          weekWrapper: NoopWrapper,
          timeSlotWrapper: NoopWrapper,
          timeGutterWrapper: NoopWrapper,
          timeIndicatorWrapper: NoopWrapper
        }),
        accessors: {
          start: wrapAccessor(startAccessor),
          end: wrapAccessor(endAccessor),
          allDay: wrapAccessor(allDayAccessor),
          tooltip: wrapAccessor(tooltipAccessor),
          title: wrapAccessor(titleAccessor),
          resource: wrapAccessor(resourceAccessor),
          resourceId: wrapAccessor(resourceIdAccessor),
          resourceTitle: wrapAccessor(resourceTitleAccessor),
          eventId: wrapAccessor(eventIdAccessor)
        }
      };
    }
  }]);
}(react.Component);
Calendar.defaultProps = {
  events: [],
  backgroundEvents: [],
  elementProps: {},
  popup: false,
  toolbar: true,
  view: views$1.MONTH,
  views: [views$1.MONTH, views$1.WEEK, views$1.DAY, views$1.AGENDA],
  step: 30,
  length: 30,
  allDayMaxRows: Infinity,
  doShowMoreDrillDown: true,
  drilldownView: views$1.DAY,
  titleAccessor: 'title',
  tooltipAccessor: 'title',
  allDayAccessor: 'allDay',
  startAccessor: 'start',
  endAccessor: 'end',
  resourceAccessor: 'resourceId',
  resourceIdAccessor: 'id',
  resourceTitleAccessor: 'title',
  eventIdAccessor: 'id',
  longPressThreshold: 250,
  getNow: function getNow() {
    return new Date();
  },
  dayLayoutAlgorithm: 'overlap'
};
Calendar.propTypes =  false ? 0 : {};
var Calendar_default = uncontrollable(Calendar, {
  view: 'onView',
  date: 'onNavigate',
  selected: 'onSelectEvent'
});
var weekRangeFormat$5 = function weekRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'MMMM DD', culture) + ' – ' +
  // updated to use this localizer 'eq()' method
  local.format(end, local.eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};
var dateRangeFormat$5 = function dateRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
};
var timeRangeFormat$5 = function timeRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
};
var timeRangeStartFormat$5 = function timeRangeStartFormat(_ref4, culture, local) {
  var start = _ref4.start;
  return local.format(start, 'LT', culture) + ' – ';
};
var timeRangeEndFormat$5 = function timeRangeEndFormat(_ref5, culture, local) {
  var end = _ref5.end;
  return ' – ' + local.format(end, 'LT', culture);
};
var formats$5 = {
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat$5,
  eventTimeRangeFormat: timeRangeFormat$5,
  eventTimeRangeStartFormat: timeRangeStartFormat$5,
  eventTimeRangeEndFormat: timeRangeEndFormat$5,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat$5,
  agendaHeaderFormat: dateRangeFormat$5,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat$5
};
function fixUnit$2(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === 'FullYear') {
    datePart = 'year';
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}
function moment(moment) {
  var locale = function locale(m, c) {
    return c ? m.locale(c) : m;
  };
  function getTimezoneOffset(date) {
    // ensures this gets cast to timezone
    return moment(date).toDate().getTimezoneOffset();
  }
  function getDstOffset(start, end) {
    var _st$_z$name, _st$_z;
    // convert to moment, in case
    // Calculate the offset in the timezone of the Events (local)
    // not in the timezone of the calendar (moment.tz)
    var st = moment(start).local();
    var ed = moment(end).local();
    // if not using moment timezone
    if (!moment.tz) {
      return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset();
    }
    /**
     * If using moment-timezone, and a timezone has been applied, then
     * use this to get the proper timezone offset, otherwise default
     * the timezone to the browser local
     */
    var tzName = (_st$_z$name = st === null || st === void 0 || (_st$_z = st._z) === null || _st$_z === void 0 ? void 0 : _st$_z.name) !== null && _st$_z$name !== void 0 ? _st$_z$name : moment.tz.guess();
    var startOffset = moment.tz.zone(tzName).utcOffset(+st);
    var endOffset = moment.tz.zone(tzName).utcOffset(+ed);
    return startOffset - endOffset;
  }
  function getDayStartDstOffset(start) {
    var dayStart = moment(start).startOf('day');
    return getDstOffset(dayStart, start);
  }

  /*** BEGIN localized date arithmetic methods with moment ***/
  function defineComparators(a, b, unit) {
    var datePart = fixUnit$2(unit);
    var dtA = datePart ? moment(a).startOf(datePart) : moment(a);
    var dtB = datePart ? moment(b).startOf(datePart) : moment(b);
    return [dtA, dtB, datePart];
  }
  function startOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$2(unit);
    if (datePart) {
      return moment(date).startOf(datePart).toDate();
    }
    return moment(date).toDate();
  }
  function endOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$2(unit);
    if (datePart) {
      return moment(date).endOf(datePart).toDate();
    }
    return moment(date).toDate();
  }

  // moment comparison operations *always* convert both sides to moment objects
  // prior to running the comparisons
  function eq(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit),
      _defineComparators2 = (0,slicedToArray/* default */.A)(_defineComparators, 3),
      dtA = _defineComparators2[0],
      dtB = _defineComparators2[1],
      datePart = _defineComparators2[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq(a, b, unit) {
    return !eq(a, b, unit);
  }
  function gt(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit),
      _defineComparators4 = (0,slicedToArray/* default */.A)(_defineComparators3, 3),
      dtA = _defineComparators4[0],
      dtB = _defineComparators4[1],
      datePart = _defineComparators4[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit),
      _defineComparators6 = (0,slicedToArray/* default */.A)(_defineComparators5, 3),
      dtA = _defineComparators6[0],
      dtB = _defineComparators6[1],
      datePart = _defineComparators6[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit),
      _defineComparators8 = (0,slicedToArray/* default */.A)(_defineComparators7, 3),
      dtA = _defineComparators8[0],
      dtB = _defineComparators8[1],
      datePart = _defineComparators8[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit),
      _defineComparators0 = (0,slicedToArray/* default */.A)(_defineComparators9, 3),
      dtA = _defineComparators0[0],
      dtB = _defineComparators0[1],
      datePart = _defineComparators0[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange(day, min, max) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';
    var datePart = fixUnit$2(unit);
    var mDay = moment(day);
    var mMin = moment(min);
    var mMax = moment(max);
    return mDay.isBetween(mMin, mMax, datePart, '[]');
  }
  function min(dateA, dateB) {
    var dtA = moment(dateA);
    var dtB = moment(dateB);
    var minDt = moment.min(dtA, dtB);
    return minDt.toDate();
  }
  function max(dateA, dateB) {
    var dtA = moment(dateA);
    var dtB = moment(dateB);
    var maxDt = moment.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge(date, time) {
    if (!date && !time) return null;
    var tm = moment(time).format('HH:mm:ss');
    var dt = moment(date).startOf('day').format('MM/DD/YYYY');
    // We do it this way to avoid issues when timezone switching
    return moment("".concat(dt, " ").concat(tm), 'MM/DD/YYYY HH:mm:ss').toDate();
  }
  function add(date, adder, unit) {
    var datePart = fixUnit$2(unit);
    return moment(date).add(adder, datePart).toDate();
  }
  function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$2(unit);
    // because the add method will put these in tz, we have to start that way
    var current = moment(start).toDate();
    var days = [];
    while (lte(current, end)) {
      days.push(current);
      current = add(current, 1, datePart);
    }
    return days;
  }
  function ceil(date, unit) {
    var datePart = fixUnit$2(unit);
    var floor = startOf(date, datePart);
    return eq(floor, date) ? floor : add(floor, 1, datePart);
  }
  function diff(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$2(unit);
    // don't use 'defineComparators' here, as we don't want to mutate the values
    var dtA = moment(a);
    var dtB = moment(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes(date) {
    var dt = moment(date);
    return dt.minutes();
  }
  function firstOfWeek(culture) {
    var data = culture ? moment.localeData(culture) : moment.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay(date) {
    return moment(date).startOf('month').startOf('week').toDate();
  }
  function lastVisibleDay(date) {
    return moment(date).endOf('month').endOf('week').toDate();
  }
  function visibleDays(date) {
    var current = firstVisibleDay(date);
    var last = lastVisibleDay(date);
    var days = [];
    while (lte(current, last)) {
      days.push(current);
      current = add(current, 1, 'd');
    }
    return days;
  }
  /*** END localized date arithmetic methods with moment ***/

  /**
   * Moved from TimeSlots.js, this method overrides the method of the same name
   * in the localizer.js, using moment to construct the js Date
   * @param {Date} dt - date to start with
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return moment(dt).startOf('day').minute(minutesFromMidnight + offset).toDate();
  }

  // moment will automatically handle DST differences in it's calculations
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes');
  }
  function getMinutesFromMidnight(start) {
    var dayStart = moment(start).startOf('day');
    var day = moment(start);
    return day.diff(dayStart, 'minutes') + getDayStartDstOffset(start);
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    var mStart = moment(start);
    var mFirst = moment(first);
    return mStart.isBefore(mFirst, 'day');
  }
  function continuesAfter(start, end, last) {
    var mEnd = moment(end);
    var mLast = moment(last);
    return mEnd.isSameOrAfter(mLast, 'minutes');
  }
  function daySpan(start, end) {
    var mStart = moment(start);
    var mEnd = moment(end);
    var dur = moment.duration(mEnd.diff(mStart));
    return dur.days();
  }

  // These two are used by eventLevels
  function sortEvents(_ref6) {
    var _ref6$evtA = _ref6.evtA,
      aStart = _ref6$evtA.start,
      aEnd = _ref6$evtA.end,
      aAllDay = _ref6$evtA.allDay,
      _ref6$evtB = _ref6.evtB,
      bStart = _ref6$evtB.start,
      bEnd = _ref6$evtB.end,
      bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
    var durA = daySpan(aStart, aEnd);
    var durB = daySpan(bStart, bEnd);
    return startSort ||
    // sort by start Day first
    durB - durA ||
    // events spanning multiple days go first
    !!bAllDay - !!aAllDay ||
    // then allDay single day events
    +aStart - +bStart ||
    // then sort by start time *don't need moment conversion here
    +aEnd - +bEnd // then sort by end time *don't need moment conversion here either
;
  }
  function inEventRange(_ref7) {
    var _ref7$event = _ref7.event,
      start = _ref7$event.start,
      end = _ref7$event.end,
      _ref7$range = _ref7.range,
      rangeStart = _ref7$range.start,
      rangeEnd = _ref7$range.end;
    var startOfDay = moment(start).startOf('day');
    var eEnd = moment(end);
    var rStart = moment(rangeStart);
    var rEnd = moment(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, 'day');
    // when the event is zero duration we need to handle a bit differently
    var sameMin = !startOfDay.isSame(eEnd, 'minutes');
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, 'minutes') : eEnd.isSameOrAfter(rStart, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate(date1, date2) {
    var dt = moment(date1);
    var dt2 = moment(date2);
    return dt.isSame(dt2, 'day');
  }

  /**
   * This method, called once in the localizer constructor, is used by eventLevels
   * 'eventSegments()' to assist in determining the 'span' of the event in the display,
   * specifically when using a timezone that is greater than the browser native timezone.
   * @returns number
   */
  function browserTZOffset() {
    /**
     * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
     * what you see in it's string, so we have to jump through some hoops to get a value
     * we can actually compare.
     */
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? '-' : '';
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    // moment correctly provides positive/negative offset, as expected
    var mtOffset = moment().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats: formats$5,
    firstOfWeek: firstOfWeek,
    firstVisibleDay: firstVisibleDay,
    lastVisibleDay: lastVisibleDay,
    visibleDays: visibleDays,
    format: function format(value, _format, culture) {
      return locale(moment(value), culture).format(_format);
    },
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    eq: eq,
    neq: neq,
    merge: merge,
    inRange: inRange,
    startOf: startOf,
    endOf: endOf,
    range: range,
    add: add,
    diff: diff,
    ceil: ceil,
    min: min,
    max: max,
    minutes: minutes,
    getSlotDate: getSlotDate,
    getTimezoneOffset: getTimezoneOffset,
    getDstOffset: getDstOffset,
    getTotalMin: getTotalMin,
    getMinutesFromMidnight: getMinutesFromMidnight,
    continuesPrior: continuesPrior,
    continuesAfter: continuesAfter,
    sortEvents: sortEvents,
    inEventRange: inEventRange,
    isSameDate: isSameDate,
    daySpan: daySpan,
    browserTZOffset: browserTZOffset
  });
}
function pluralizeUnit(unit) {
  return /s$/.test(unit) ? unit : unit + 's';
}
var weekRangeFormat$4 = function weekRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'MMMM dd', culture) + ' – ' +
  // updated to use this localizer 'eq()' method
  local.format(end, local.eq(start, end, 'month') ? 'dd' : 'MMMM dd', culture);
};
var dateRangeFormat$4 = function dateRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'D', culture) + ' – ' + local.format(end, 'D', culture);
};
var timeRangeFormat$4 = function timeRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};
var timeRangeStartFormat$4 = function timeRangeStartFormat(_ref4, culture, local) {
  var start = _ref4.start;
  return local.format(start, 't', culture) + ' – ';
};
var timeRangeEndFormat$4 = function timeRangeEndFormat(_ref5, culture, local) {
  var end = _ref5.end;
  return ' – ' + local.format(end, 't', culture);
};
var formats$4 = (/* unused pure expression or super */ null && ({
  dateFormat: 'dd',
  dayFormat: 'dd EEE',
  weekdayFormat: 'EEE',
  selectRangeFormat: timeRangeFormat$4,
  eventTimeRangeFormat: timeRangeFormat$4,
  eventTimeRangeStartFormat: timeRangeStartFormat$4,
  eventTimeRangeEndFormat: timeRangeEndFormat$4,
  timeGutterFormat: 't',
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'EEEE MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$4,
  agendaHeaderFormat: dateRangeFormat$4,
  agendaDateFormat: 'EEE MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat$4
}));
function fixUnit$1(unit) {
  var datePart = unit ? pluralizeUnit(unit.toLowerCase()) : unit;
  if (datePart === 'FullYear') {
    datePart = 'year';
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}

// Luxon does not currently have weekInfo by culture
// Luxon uses 1 based values for month and weekday
// So we default to Sunday (7)
function luxon(DateTime) {
  var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref6$firstDayOfWeek = _ref6.firstDayOfWeek,
    firstDayOfWeek = _ref6$firstDayOfWeek === void 0 ? 7 : _ref6$firstDayOfWeek;
  function formatDate(value, format) {
    return DateTime.fromJSDate(value).toFormat(format);
  }
  function formatDateWithCulture(value, culture, format) {
    return DateTime.fromJSDate(value).setLocale(culture).toFormat(format);
  }

  /*** BEGIN localized date arithmetic methods with Luxon ***/
  function defineComparators(a, b, unit) {
    var datePart = fixUnit$1(unit);
    var dtA = datePart ? DateTime.fromJSDate(a).startOf(datePart) : DateTime.fromJSDate(a);
    var dtB = datePart ? DateTime.fromJSDate(b).startOf(datePart) : DateTime.fromJSDate(b);
    return [dtA, dtB, datePart];
  }

  // Since Luxon (and current Intl API) has no support
  // for culture based weekInfo, we need to handle
  // the start of the week differently
  // depending on locale, the firstDayOfWeek could also be Saturday, Sunday or Monday
  function startOfDTWeek(dtObj) {
    var weekday = dtObj.weekday;
    if (weekday === firstDayOfWeek) {
      return dtObj.startOf('day'); // already beginning of week
    } else if (firstDayOfWeek === 1) {
      return dtObj.startOf('week'); // fow is Monday, which is Luxon default
    }
    var diff = firstDayOfWeek === 7 ? weekday : weekday + (7 - firstDayOfWeek);
    return dtObj.minus({
      day: diff
    }).startOf('day');
  }
  function endOfDTWeek(dtObj) {
    var weekday = dtObj.weekday;
    var eow = firstDayOfWeek === 1 ? 7 : firstDayOfWeek - 1;
    if (weekday === eow) {
      return dtObj.endOf('day'); // already last day of the week
    } else if (firstDayOfWeek === 1) {
      return dtObj.endOf('week'); // use Luxon default (Sunday)
    }
    var fromDate = firstDayOfWeek > eow ? dtObj.plus({
      day: firstDayOfWeek - eow
    }) : dtObj;
    return fromDate.set({
      weekday: eow
    }).endOf('day');
  }

  // This returns a DateTime instance
  function startOfDT() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$1(unit);
    if (datePart) {
      var dt = DateTime.fromJSDate(date);
      return datePart.includes('week') ? startOfDTWeek(dt) : dt.startOf(datePart);
    }
    return DateTime.fromJSDate(date);
  }
  function firstOfWeek() {
    return firstDayOfWeek;
  }

  // This returns a JS Date from a DateTime instance
  function startOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    return startOfDT(date, unit).toJSDate();
  }

  // This returns a DateTime instance
  function endOfDT() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit$1(unit);
    if (datePart) {
      var dt = DateTime.fromJSDate(date);
      return datePart.includes('week') ? endOfDTWeek(dt) : dt.endOf(datePart);
    }
    return DateTime.fromJSDate(date);
  }
  function endOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    return endOfDT(date, unit).toJSDate();
  }
  function eq(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit),
      _defineComparators2 = _slicedToArray(_defineComparators, 2),
      dtA = _defineComparators2[0],
      dtB = _defineComparators2[1];
    return +dtA == +dtB;
  }
  function neq(a, b, unit) {
    return !eq(a, b, unit);
  }
  function gt(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit),
      _defineComparators4 = _slicedToArray(_defineComparators3, 2),
      dtA = _defineComparators4[0],
      dtB = _defineComparators4[1];
    return +dtA > +dtB;
  }
  function lt(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit),
      _defineComparators6 = _slicedToArray(_defineComparators5, 2),
      dtA = _defineComparators6[0],
      dtB = _defineComparators6[1];
    return +dtA < +dtB;
  }
  function gte(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit),
      _defineComparators8 = _slicedToArray(_defineComparators7, 2),
      dtA = _defineComparators8[0],
      dtB = _defineComparators8[1];
    return +dtA >= +dtB;
  }
  function lte(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit),
      _defineComparators0 = _slicedToArray(_defineComparators9, 2),
      dtA = _defineComparators0[0],
      dtB = _defineComparators0[1];
    return +dtA <= +dtB;
  }
  function inRange(day, min, max) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';
    var datePart = fixUnit$1(unit);
    var mDay = startOfDT(day, datePart);
    var mMin = startOfDT(min, datePart);
    var mMax = startOfDT(max, datePart);
    return +mDay >= +mMin && +mDay <= +mMax;
  }
  function min(dateA, dateB) {
    var dtA = DateTime.fromJSDate(dateA);
    var dtB = DateTime.fromJSDate(dateB);
    var minDt = DateTime.min(dtA, dtB);
    return minDt.toJSDate();
  }
  function max(dateA, dateB) {
    var dtA = DateTime.fromJSDate(dateA);
    var dtB = DateTime.fromJSDate(dateB);
    var maxDt = DateTime.max(dtA, dtB);
    return maxDt.toJSDate();
  }
  function merge(date, time) {
    if (!date && !time) return null;
    var tm = DateTime.fromJSDate(time);
    var dt = startOfDT(date, 'day');
    return dt.set({
      hour: tm.hour,
      minute: tm.minute,
      second: tm.second,
      millisecond: tm.millisecond
    }).toJSDate();
  }
  function add(date, adder, unit) {
    var datePart = fixUnit$1(unit);
    return DateTime.fromJSDate(date).plus(_defineProperty({}, datePart, adder)).toJSDate();
  }
  function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$1(unit);
    var current = DateTime.fromJSDate(start).toJSDate(); // this is to get it to tz
    var days = [];
    while (lte(current, end)) {
      days.push(current);
      current = add(current, 1, datePart);
    }
    return days;
  }
  function ceil(date, unit) {
    var datePart = fixUnit$1(unit);
    var floor = startOf(date, datePart);
    return eq(floor, date) ? floor : add(floor, 1, datePart);
  }
  function diff(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit$1(unit);
    // don't use 'defineComparators' here, as we don't want to mutate the values
    var dtA = DateTime.fromJSDate(a);
    var dtB = DateTime.fromJSDate(b);
    return Math.floor(dtB.diff(dtA, datePart, {
      conversionAccuracy: 'longterm'
    }).toObject()[datePart]);
  }
  function firstVisibleDay(date) {
    var startOfMonth = startOfDT(date, 'month');
    return startOfDTWeek(startOfMonth).toJSDate();
  }
  function lastVisibleDay(date) {
    var endOfMonth = endOfDT(date, 'month');
    return endOfDTWeek(endOfMonth).toJSDate();
  }
  function visibleDays(date) {
    var current = firstVisibleDay(date);
    var last = lastVisibleDay(date);
    var days = [];
    while (lte(current, last)) {
      days.push(current);
      current = add(current, 1, 'day');
    }
    return days;
  }
  /*** END localized date arithmetic methods with moment ***/

  /**
   * Moved from TimeSlots.js, this method overrides the method of the same name
   * in the localizer.js, using moment to construct the js Date
   * @param {Date} dt - date to start with
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return startOfDT(dt, 'day').set({
      minutes: minutesFromMidnight + offset
    }).toJSDate();
  }

  // Luxon will automatically handle DST differences in it's calculations
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes');
  }
  function getMinutesFromMidnight(start) {
    var dayStart = startOfDT(start, 'day');
    var day = DateTime.fromJSDate(start);
    return Math.round(day.diff(dayStart, 'minutes', {
      conversionAccuracy: 'longterm'
    }).toObject().minutes);
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    return lt(start, first);
  }
  function continuesAfter(start, end, last) {
    return gte(end, last);
  }
  function daySpan(start, end) {
    var dtStart = DateTime.fromJSDate(start);
    var dtEnd = DateTime.fromJSDate(end);
    return dtEnd.diff(dtStart).as('days');
  }

  // These two are used by eventLevels
  function sortEvents(_ref7) {
    var _ref7$evtA = _ref7.evtA,
      aStart = _ref7$evtA.start,
      aEnd = _ref7$evtA.end,
      aAllDay = _ref7$evtA.allDay,
      _ref7$evtB = _ref7.evtB,
      bStart = _ref7$evtB.start,
      bEnd = _ref7$evtB.end,
      bAllDay = _ref7$evtB.allDay;
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
    var durA = daySpan(aStart, aEnd);
    var durB = daySpan(bStart, bEnd);
    return startSort ||
    // sort by start Day first
    durB - durA ||
    // events spanning multiple days go first
    !!bAllDay - !!aAllDay ||
    // then allDay single day events
    +aStart - +bStart ||
    // then sort by start time *don't need moment conversion here
    +aEnd - +bEnd // then sort by end time *don't need moment conversion here either
;
  }
  function inEventRange(_ref8) {
    var _ref8$event = _ref8.event,
      start = _ref8$event.start,
      end = _ref8$event.end,
      _ref8$range = _ref8.range,
      rangeStart = _ref8$range.start,
      rangeEnd = _ref8$range.end;
    var eStart = startOf(start, 'day');
    var startsBeforeEnd = lte(eStart, rangeEnd, 'day');
    // when the event is zero duration we need to handle a bit differently
    var sameMin = neq(eStart, end, 'minutes');
    var endsAfterStart = sameMin ? gt(end, rangeStart, 'minutes') : gte(end, rangeStart, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }

  // moment treats 'day' and 'date' equality very different
  // moment(date1).isSame(date2, 'day') would test that they were both the same day of the week
  // moment(date1).isSame(date2, 'date') would test that they were both the same date of the month of the year
  function isSameDate(date1, date2) {
    var dt = DateTime.fromJSDate(date1);
    var dt2 = DateTime.fromJSDate(date2);
    return dt.hasSame(dt2, 'day');
  }

  /**
   * This method, called once in the localizer constructor, is used by eventLevels
   * 'eventSegments()' to assist in determining the 'span' of the event in the display,
   * specifically when using a timezone that is greater than the browser native timezone.
   * @returns number
   */
  function browserTZOffset() {
    /**
     * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
     * what you see in it's string, so we have to jump through some hoops to get a value
     * we can actually compare.
     */
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? '-' : '';
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    // moment correctly provides positive/negative offset, as expected
    var mtOffset = DateTime.local().offset;
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    format: function format(value, _format, culture) {
      if (culture) {
        return formatDateWithCulture(value, culture, _format);
      }
      return formatDate(value, _format);
    },
    formats: formats$4,
    firstOfWeek: firstOfWeek,
    firstVisibleDay: firstVisibleDay,
    lastVisibleDay: lastVisibleDay,
    visibleDays: visibleDays,
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    eq: eq,
    neq: neq,
    merge: merge,
    inRange: inRange,
    startOf: startOf,
    endOf: endOf,
    range: range,
    add: add,
    diff: diff,
    ceil: ceil,
    min: min,
    max: max,
    getSlotDate: getSlotDate,
    getTotalMin: getTotalMin,
    getMinutesFromMidnight: getMinutesFromMidnight,
    continuesPrior: continuesPrior,
    continuesAfter: continuesAfter,
    sortEvents: sortEvents,
    inEventRange: inEventRange,
    isSameDate: isSameDate,
    daySpan: daySpan,
    browserTZOffset: browserTZOffset
  });
}
var dateRangeFormat$3 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'd', culture) + ' – ' + local.format(end, 'd', culture);
};
var timeRangeFormat$3 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 't', culture) + ' – ' + local.format(end, 't', culture);
};
var timeRangeStartFormat$3 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, 't', culture) + ' – ';
};
var timeRangeEndFormat$3 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, 't', culture);
};
var weekRangeFormat$3 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
    end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, react_big_calendar_esm_eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};
var formats$3 = (/* unused pure expression or super */ null && ({
  dateFormat: 'dd',
  dayFormat: 'ddd dd/MM',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat$3,
  eventTimeRangeFormat: timeRangeFormat$3,
  eventTimeRangeStartFormat: timeRangeStartFormat$3,
  eventTimeRangeEndFormat: timeRangeEndFormat$3,
  timeGutterFormat: 't',
  monthHeaderFormat: 'Y',
  dayHeaderFormat: 'dddd MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$3,
  agendaHeaderFormat: dateRangeFormat$3,
  agendaDateFormat: 'ddd MMM dd',
  agendaTimeFormat: 't',
  agendaTimeRangeFormat: timeRangeFormat$3
}));
function oldGlobalize(globalize) {
  function getCulture(culture) {
    return culture ? globalize.findClosestCulture(culture) : globalize.culture();
  }
  function firstOfWeek(culture) {
    culture = getCulture(culture);
    return culture && culture.calendar.firstDay || 0;
  }
  return new DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats$3,
    format: function format(value, _format, culture) {
      return globalize.format(value, _format, culture);
    }
  });
}
var dateRangeFormat$2 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, {
    date: 'short'
  }, culture) + ' – ' + local.format(end, {
    date: 'short'
  }, culture);
};
var timeRangeFormat$2 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};
var timeRangeStartFormat$2 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return local.format(start, {
    time: 'short'
  }, culture) + ' – ';
};
var timeRangeEndFormat$2 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return ' – ' + local.format(end, {
    time: 'short'
  }, culture);
};
var weekRangeFormat$2 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
    end = _ref5.end;
  return local.format(start, 'MMM dd', culture) + ' – ' + local.format(end, react_big_calendar_esm_eq(start, end, 'month') ? 'dd' : 'MMM dd', culture);
};
var formats$2 = (/* unused pure expression or super */ null && ({
  dateFormat: 'dd',
  dayFormat: 'eee dd/MM',
  weekdayFormat: 'eee',
  selectRangeFormat: timeRangeFormat$2,
  eventTimeRangeFormat: timeRangeFormat$2,
  eventTimeRangeStartFormat: timeRangeStartFormat$2,
  eventTimeRangeEndFormat: timeRangeEndFormat$2,
  timeGutterFormat: {
    time: 'short'
  },
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'eeee MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$2,
  agendaHeaderFormat: dateRangeFormat$2,
  agendaDateFormat: 'eee MMM dd',
  agendaTimeFormat: {
    time: 'short'
  },
  agendaTimeRangeFormat: timeRangeFormat$2
}));
function globalize(globalize) {
  var locale = function locale(culture) {
    return culture ? globalize(culture) : globalize;
  };

  // return the first day of the week from the locale data. Defaults to 'world'
  // territory if no territory is derivable from CLDR.
  // Failing to use CLDR supplemental (not loaded?), revert to the original
  // method of getting first day of week.
  function firstOfWeek(culture) {
    try {
      var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      var cldr = locale(culture).cldr;
      var territory = cldr.attributes.territory;
      var weekData = cldr.get('supplemental').weekData;
      var firstDay = weekData.firstDay[territory || '001'];
      return days.indexOf(firstDay);
    } catch (_unused) {
      if (false) // removed by dead control flow
{}
      // maybe cldr supplemental is not loaded? revert to original method
      var date = new Date();
      //cldr-data doesn't seem to be zero based
      var localeDay = Math.max(parseInt(locale(culture).formatDate(date, {
        raw: 'e'
      }), 10) - 1, 0);
      return Math.abs(date.getDay() - localeDay);
    }
  }
  if (!globalize.load) return oldGlobalize(globalize);
  return new DateLocalizer({
    firstOfWeek: firstOfWeek,
    formats: formats$2,
    format: function format(value, _format, culture) {
      _format = typeof _format === 'string' ? {
        raw: _format
      } : _format;
      return locale(culture).formatDate(value, _format);
    }
  });
}
var dateRangeFormat$1 = function dateRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return "".concat(local.format(start, 'P', culture), " \u2013 ").concat(local.format(end, 'P', culture));
};
var timeRangeFormat$1 = function timeRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return "".concat(local.format(start, 'p', culture), " \u2013 ").concat(local.format(end, 'p', culture));
};
var timeRangeStartFormat$1 = function timeRangeStartFormat(_ref3, culture, local) {
  var start = _ref3.start;
  return "".concat(local.format(start, 'h:mma', culture), " \u2013 ");
};
var timeRangeEndFormat$1 = function timeRangeEndFormat(_ref4, culture, local) {
  var end = _ref4.end;
  return " \u2013 ".concat(local.format(end, 'h:mma', culture));
};
var weekRangeFormat$1 = function weekRangeFormat(_ref5, culture, local) {
  var start = _ref5.start,
    end = _ref5.end;
  return "".concat(local.format(start, 'MMMM dd', culture), " \u2013 ").concat(local.format(end, react_big_calendar_esm_eq(start, end, 'month') ? 'dd' : 'MMMM dd', culture));
};
var formats$1 = (/* unused pure expression or super */ null && ({
  dateFormat: 'dd',
  dayFormat: 'dd eee',
  weekdayFormat: 'ccc',
  selectRangeFormat: timeRangeFormat$1,
  eventTimeRangeFormat: timeRangeFormat$1,
  eventTimeRangeStartFormat: timeRangeStartFormat$1,
  eventTimeRangeEndFormat: timeRangeEndFormat$1,
  timeGutterFormat: 'p',
  monthHeaderFormat: 'MMMM yyyy',
  dayHeaderFormat: 'cccc MMM dd',
  dayRangeHeaderFormat: weekRangeFormat$1,
  agendaHeaderFormat: dateRangeFormat$1,
  agendaDateFormat: 'ccc MMM dd',
  agendaTimeFormat: 'p',
  agendaTimeRangeFormat: timeRangeFormat$1
}));
var dateFnsLocalizer = function dateFnsLocalizer(_ref6) {
  var startOfWeek = _ref6.startOfWeek,
    getDay = _ref6.getDay,
    _format = _ref6.format,
    locales = _ref6.locales;
  return new DateLocalizer({
    formats: formats$1,
    firstOfWeek: function firstOfWeek(culture) {
      return getDay(startOfWeek(new Date(), {
        locale: locales[culture]
      }));
    },
    format: function format(value, formatString, culture) {
      return _format(new Date(value), formatString, {
        locale: locales[culture]
      });
    }
  });
};
var weekRangeFormat = function weekRangeFormat(_ref, culture, local) {
  var start = _ref.start,
    end = _ref.end;
  return local.format(start, 'MMMM DD', culture) + ' – ' +
  // updated to use this localizer 'eq()' method
  local.format(end, local.eq(start, end, 'month') ? 'DD' : 'MMMM DD', culture);
};
var dateRangeFormat = function dateRangeFormat(_ref2, culture, local) {
  var start = _ref2.start,
    end = _ref2.end;
  return local.format(start, 'L', culture) + ' – ' + local.format(end, 'L', culture);
};
var timeRangeFormat = function timeRangeFormat(_ref3, culture, local) {
  var start = _ref3.start,
    end = _ref3.end;
  return local.format(start, 'LT', culture) + ' – ' + local.format(end, 'LT', culture);
};
var timeRangeStartFormat = function timeRangeStartFormat(_ref4, culture, local) {
  var start = _ref4.start;
  return local.format(start, 'LT', culture) + ' – ';
};
var timeRangeEndFormat = function timeRangeEndFormat(_ref5, culture, local) {
  var end = _ref5.end;
  return ' – ' + local.format(end, 'LT', culture);
};
var formats = (/* unused pure expression or super */ null && ({
  dateFormat: 'DD',
  dayFormat: 'DD ddd',
  weekdayFormat: 'ddd',
  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,
  timeGutterFormat: 'LT',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd MMM DD',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,
  agendaDateFormat: 'ddd MMM DD',
  agendaTimeFormat: 'LT',
  agendaTimeRangeFormat: timeRangeFormat
}));
function fixUnit(unit) {
  var datePart = unit ? unit.toLowerCase() : unit;
  if (datePart === 'FullYear') {
    datePart = 'year';
  } else if (!datePart) {
    datePart = undefined;
  }
  return datePart;
}
function dayjs(dayjsLib) {
  // load dayjs plugins
  dayjsLib.extend(react_big_calendar_esm_isBetween);
  dayjsLib.extend(react_big_calendar_esm_isSameOrAfter);
  dayjsLib.extend(react_big_calendar_esm_isSameOrBefore);
  dayjsLib.extend(react_big_calendar_esm_localeData);
  dayjsLib.extend(react_big_calendar_esm_localizedFormat);
  dayjsLib.extend(react_big_calendar_esm_minMax);
  dayjsLib.extend(react_big_calendar_esm_utc);
  dayjsLib.extend(react_big_calendar_esm_isLeapYear);
  var locale = function locale(dj, c) {
    return c ? dj.locale(c) : dj;
  };

  // if the timezone plugin is loaded,
  // then use the timezone aware version
  var dayjs = dayjsLib.tz ? dayjsLib.tz : dayjsLib;
  function getTimezoneOffset(date) {
    // ensures this gets cast to timezone
    return dayjs(date).toDate().getTimezoneOffset();
  }
  function getDstOffset(start, end) {
    var _st$tz$$x$$timezone;
    // convert to dayjs, in case
    var st = dayjs(start);
    var ed = dayjs(end);
    // if not using the dayjs timezone plugin
    if (!dayjs.tz) {
      return st.toDate().getTimezoneOffset() - ed.toDate().getTimezoneOffset();
    }
    /**
     * If a default timezone has been applied, then
     * use this to get the proper timezone offset, otherwise default
     * the timezone to the browser local
     */
    var tzName = (_st$tz$$x$$timezone = st.tz().$x.$timezone) !== null && _st$tz$$x$$timezone !== void 0 ? _st$tz$$x$$timezone : dayjsLib.tz.guess();
    // invert offsets to be inline with moment.js
    var startOffset = -dayjs.tz(+st, tzName).utcOffset();
    var endOffset = -dayjs.tz(+ed, tzName).utcOffset();
    return startOffset - endOffset;
  }
  function getDayStartDstOffset(start) {
    var dayStart = dayjs(start).startOf('day');
    return getDstOffset(dayStart, start);
  }

  /*** BEGIN localized date arithmetic methods with dayjs ***/
  function defineComparators(a, b, unit) {
    var datePart = fixUnit(unit);
    var dtA = datePart ? dayjs(a).startOf(datePart) : dayjs(a);
    var dtB = datePart ? dayjs(b).startOf(datePart) : dayjs(b);
    return [dtA, dtB, datePart];
  }
  function startOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit(unit);
    if (datePart) {
      return dayjs(date).startOf(datePart).toDate();
    }
    return dayjs(date).toDate();
  }
  function endOf() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var unit = arguments.length > 1 ? arguments[1] : undefined;
    var datePart = fixUnit(unit);
    if (datePart) {
      return dayjs(date).endOf(datePart).toDate();
    }
    return dayjs(date).toDate();
  }

  // dayjs comparison operations *always* convert both sides to dayjs objects
  // prior to running the comparisons
  function eq(a, b, unit) {
    var _defineComparators = defineComparators(a, b, unit),
      _defineComparators2 = _slicedToArray(_defineComparators, 3),
      dtA = _defineComparators2[0],
      dtB = _defineComparators2[1],
      datePart = _defineComparators2[2];
    return dtA.isSame(dtB, datePart);
  }
  function neq(a, b, unit) {
    return !eq(a, b, unit);
  }
  function gt(a, b, unit) {
    var _defineComparators3 = defineComparators(a, b, unit),
      _defineComparators4 = _slicedToArray(_defineComparators3, 3),
      dtA = _defineComparators4[0],
      dtB = _defineComparators4[1],
      datePart = _defineComparators4[2];
    return dtA.isAfter(dtB, datePart);
  }
  function lt(a, b, unit) {
    var _defineComparators5 = defineComparators(a, b, unit),
      _defineComparators6 = _slicedToArray(_defineComparators5, 3),
      dtA = _defineComparators6[0],
      dtB = _defineComparators6[1],
      datePart = _defineComparators6[2];
    return dtA.isBefore(dtB, datePart);
  }
  function gte(a, b, unit) {
    var _defineComparators7 = defineComparators(a, b, unit),
      _defineComparators8 = _slicedToArray(_defineComparators7, 3),
      dtA = _defineComparators8[0],
      dtB = _defineComparators8[1],
      datePart = _defineComparators8[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function lte(a, b, unit) {
    var _defineComparators9 = defineComparators(a, b, unit),
      _defineComparators0 = _slicedToArray(_defineComparators9, 3),
      dtA = _defineComparators0[0],
      dtB = _defineComparators0[1],
      datePart = _defineComparators0[2];
    return dtA.isSameOrBefore(dtB, datePart);
  }
  function inRange(day, min, max) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'day';
    var datePart = fixUnit(unit);
    var djDay = dayjs(day);
    var djMin = dayjs(min);
    var djMax = dayjs(max);
    return djDay.isBetween(djMin, djMax, datePart, '[]');
  }
  function min(dateA, dateB) {
    var dtA = dayjs(dateA);
    var dtB = dayjs(dateB);
    var minDt = dayjsLib.min(dtA, dtB);
    return minDt.toDate();
  }
  function max(dateA, dateB) {
    var dtA = dayjs(dateA);
    var dtB = dayjs(dateB);
    var maxDt = dayjsLib.max(dtA, dtB);
    return maxDt.toDate();
  }
  function merge(date, time) {
    if (!date && !time) return null;
    var tm = dayjs(time).format('HH:mm:ss');
    var dt = dayjs(date).startOf('day').format('MM/DD/YYYY');
    // We do it this way to avoid issues when timezone switching
    return dayjs("".concat(dt, " ").concat(tm)).toDate();
  }
  function add(date, adder, unit) {
    var datePart = fixUnit(unit);
    return dayjs(date).add(adder, datePart).toDate();
  }
  function range(start, end) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit(unit);
    // because the add method will put these in tz, we have to start that way
    var current = dayjs(start).toDate();
    var days = [];
    while (lte(current, end)) {
      days.push(current);
      current = add(current, 1, datePart);
    }
    return days;
  }
  function ceil(date, unit) {
    var datePart = fixUnit(unit);
    var floor = startOf(date, datePart);
    return eq(floor, date) ? floor : add(floor, 1, datePart);
  }
  function diff(a, b) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'day';
    var datePart = fixUnit(unit);
    // don't use 'defineComparators' here, as we don't want to mutate the values
    var dtA = dayjs(a);
    var dtB = dayjs(b);
    return dtB.diff(dtA, datePart);
  }
  function minutes(date) {
    var dt = dayjs(date);
    return dt.minute();
  }
  function firstOfWeek(culture) {
    var data = culture ? dayjsLib.localeData(culture) : dayjsLib.localeData();
    return data ? data.firstDayOfWeek() : 0;
  }
  function firstVisibleDay(date) {
    var firstDayOfMonth = dayjs(date).startOf('month');
    var firstDayOfWeek = dayjs(firstDayOfMonth).startOf('week');
    // special handling for leapyears until Dayjs patches it
    if (dayjs(firstDayOfMonth).isLeapYear()) {
      var day = firstDayOfMonth.toDate().getDay(),
        _diff = firstDayOfMonth.toDate().getDate() - day + (day == 0 ? -6 : 1);
      firstDayOfWeek.date(_diff);
    }
    return firstDayOfWeek.toDate();
  }
  function lastVisibleDay(date) {
    return dayjs(date).endOf('month').endOf('week').toDate();
  }
  function visibleDays(date) {
    var current = firstVisibleDay(date);
    var last = lastVisibleDay(date);
    var days = [];
    while (lte(current, last)) {
      days.push(current);
      current = add(current, 1, 'd');
    }
    return days;
  }
  /*** END localized date arithmetic methods with dayjs ***/

  /**
   * Moved from TimeSlots.js, this method overrides the method of the same name
   * in the localizer.js, using dayjs to construct the js Date
   * @param {Date} dt - date to start with
   * @param {Number} minutesFromMidnight
   * @param {Number} offset
   * @returns {Date}
   */
  function getSlotDate(dt, minutesFromMidnight, offset) {
    return dayjs(dt).startOf('day').minute(minutesFromMidnight + offset).toDate();
  }

  // dayjs will automatically handle DST differences in it's calculations
  function getTotalMin(start, end) {
    return diff(start, end, 'minutes');
  }
  function getMinutesFromMidnight(start) {
    var dayStart = dayjs(start).startOf('day');
    var day = dayjs(start);
    return day.diff(dayStart, 'minutes') + getDayStartDstOffset(start);
  }

  // These two are used by DateSlotMetrics
  function continuesPrior(start, first) {
    var djStart = dayjs(start);
    var djFirst = dayjs(first);
    return djStart.isBefore(djFirst, 'day');
  }
  function continuesAfter(start, end, last) {
    var djEnd = dayjs(end);
    var djLast = dayjs(last);
    return djEnd.isSameOrAfter(djLast, 'minutes');
  }
  function daySpan(start, end) {
    var startDay = dayjs(start);
    var endDay = dayjs(end);
    return endDay.diff(startDay, 'day');
  }

  // These two are used by eventLevels
  function sortEvents(_ref6) {
    var _ref6$evtA = _ref6.evtA,
      aStart = _ref6$evtA.start,
      aEnd = _ref6$evtA.end,
      aAllDay = _ref6$evtA.allDay,
      _ref6$evtB = _ref6.evtB,
      bStart = _ref6$evtB.start,
      bEnd = _ref6$evtB.end,
      bAllDay = _ref6$evtB.allDay;
    var startSort = +startOf(aStart, 'day') - +startOf(bStart, 'day');
    var durA = daySpan(aStart, aEnd);
    var durB = daySpan(bStart, bEnd);
    return startSort ||
    // sort by start Day first
    durB - durA ||
    // events spanning multiple days go first
    !!bAllDay - !!aAllDay ||
    // then allDay single day events
    +aStart - +bStart ||
    // then sort by start time *don't need dayjs conversion here
    +aEnd - +bEnd // then sort by end time *don't need dayjs conversion here either
;
  }
  function inEventRange(_ref7) {
    var _ref7$event = _ref7.event,
      start = _ref7$event.start,
      end = _ref7$event.end,
      _ref7$range = _ref7.range,
      rangeStart = _ref7$range.start,
      rangeEnd = _ref7$range.end;
    var startOfDay = dayjs(start).startOf('day');
    var eEnd = dayjs(end);
    var rStart = dayjs(rangeStart);
    var rEnd = dayjs(rangeEnd);
    var startsBeforeEnd = startOfDay.isSameOrBefore(rEnd, 'day');
    // when the event is zero duration we need to handle a bit differently
    var sameMin = !startOfDay.isSame(eEnd, 'minutes');
    var endsAfterStart = sameMin ? eEnd.isAfter(rStart, 'minutes') : eEnd.isSameOrAfter(rStart, 'minutes');
    return startsBeforeEnd && endsAfterStart;
  }
  function isSameDate(date1, date2) {
    var dt = dayjs(date1);
    var dt2 = dayjs(date2);
    return dt.isSame(dt2, 'day');
  }

  /**
   * This method, called once in the localizer constructor, is used by eventLevels
   * 'eventSegments()' to assist in determining the 'span' of the event in the display,
   * specifically when using a timezone that is greater than the browser native timezone.
   * @returns number
   */
  function browserTZOffset() {
    /**
     * Date.prototype.getTimezoneOffset horrifically flips the positive/negative from
     * what you see in it's string, so we have to jump through some hoops to get a value
     * we can actually compare.
     */
    var dt = new Date();
    var neg = /-/.test(dt.toString()) ? '-' : '';
    var dtOffset = dt.getTimezoneOffset();
    var comparator = Number("".concat(neg).concat(Math.abs(dtOffset)));
    // dayjs correctly provides positive/negative offset, as expected
    var mtOffset = dayjs().utcOffset();
    return mtOffset > comparator ? 1 : 0;
  }
  return new DateLocalizer({
    formats: formats,
    firstOfWeek: firstOfWeek,
    firstVisibleDay: firstVisibleDay,
    lastVisibleDay: lastVisibleDay,
    visibleDays: visibleDays,
    format: function format(value, _format, culture) {
      return locale(dayjs(value), culture).format(_format);
    },
    lt: lt,
    lte: lte,
    gt: gt,
    gte: gte,
    eq: eq,
    neq: neq,
    merge: merge,
    inRange: inRange,
    startOf: startOf,
    endOf: endOf,
    range: range,
    add: add,
    diff: diff,
    ceil: ceil,
    min: min,
    max: max,
    minutes: minutes,
    getSlotDate: getSlotDate,
    getTimezoneOffset: getTimezoneOffset,
    getDstOffset: getDstOffset,
    getTotalMin: getTotalMin,
    getMinutesFromMidnight: getMinutesFromMidnight,
    continuesPrior: continuesPrior,
    continuesAfter: continuesAfter,
    sortEvents: sortEvents,
    inEventRange: inEventRange,
    isSameDate: isSameDate,
    browserTZOffset: browserTZOffset
  });
}
var components = (/* unused pure expression or super */ null && ({
  eventWrapper: NoopWrapper,
  timeSlotWrapper: NoopWrapper,
  dateCellWrapper: NoopWrapper
}));


/***/ },

/***/ 55484
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   polyfill: () => (/* binding */ polyfill)
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}
function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
function polyfill(Component) {
  var prototype = Component.prototype;
  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }
  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
    var componentName = Component.displayName || Component.name;
    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
    }
    prototype.componentWillUpdate = componentWillUpdate;
    var componentDidUpdate = prototype.componentDidUpdate;
    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }
  return Component;
}


/***/ },

/***/ 96440
(module) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var __DEV__ = "production" !== 'production';
var warning = function () {};
if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}
module.exports = warning;

/***/ },

/***/ 83656
() {

"use strict";
// extracted by mini-css-extract-plugin
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && ({})));

/***/ },

/***/ 6305
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(73738)["default"]);
function _interopRequireWildcard(e, t) {
  if ("function" == typeof WeakMap) var r = new WeakMap(),
    n = new WeakMap();
  return (module.exports = _interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = {
        __proto__: null,
        "default": e
      };
    if (null === e || "object" != _typeof(e) && "function" != typeof e) return f;
    if (o = t ? n : r) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]);
    return f;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)(e, t);
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 73738
(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 58387
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clsx */
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);