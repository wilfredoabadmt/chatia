"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[1702],{

/***/ 16853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Checkbox_Checkbox)
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(49644);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/internal/SwitchBase.js
var SwitchBase = __webpack_require__(39855);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(91917);
;// ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBoxOutlineBlank.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckBoxOutlineBlank = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));
;// ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckBox.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckBox = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(82454);
;// ./node_modules/@material-ui/core/esm/internal/svg-icons/IndeterminateCheckBox.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const IndeterminateCheckBox = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(74822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(71745);
;// ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      color: theme.palette.text.secondary
    },
    /* Pseudo-class applied to the root element if `checked={true}`. */
    checked: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Pseudo-class applied to the root element if `indeterminate={true}`. */
    indeterminate: {},
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0,colorManipulator/* alpha */.X4)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }
  };
};
var defaultCheckedIcon = /*#__PURE__*/react.createElement(CheckBox, null);
var defaultIcon = /*#__PURE__*/react.createElement(CheckBoxOutlineBlank, null);
var defaultIndeterminateIcon = /*#__PURE__*/react.createElement(IndeterminateCheckBox, null);
var Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(props, ref) {
  var _props$checkedIcon = props.checkedIcon,
    checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
    classes = props.classes,
    _props$color = props.color,
    color = _props$color === void 0 ? 'secondary' : _props$color,
    _props$icon = props.icon,
    iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
    _props$indeterminate = props.indeterminate,
    indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
    _props$indeterminateI = props.indeterminateIcon,
    indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
    inputProps = props.inputProps,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    other = (0,objectWithoutProperties/* default */.A)(props, ["checkedIcon", "classes", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"]);
  var icon = indeterminate ? indeterminateIconProp : iconProp;
  var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  return /*#__PURE__*/react.createElement(SwitchBase/* default */.A, (0,esm_extends/* default */.A)({
    type: "checkbox",
    classes: {
      root: (0,clsx_m/* default */.A)(classes.root, classes["color".concat((0,capitalize/* default */.A)(color))], indeterminate && classes.indeterminate),
      checked: classes.checked,
      disabled: classes.disabled
    },
    color: color,
    inputProps: (0,esm_extends/* default */.A)({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react.cloneElement(icon, {
      fontSize: icon.props.fontSize === undefined && size === "small" ? size : icon.props.fontSize
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
      fontSize: indeterminateIcon.props.fontSize === undefined && size === "small" ? size : indeterminateIcon.props.fontSize
    }),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Checkbox_Checkbox = ((0,withStyles/* default */.A)(styles, {
  name: 'MuiCheckbox'
})(Checkbox));

/***/ },

/***/ 30059
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ StepContent_StepContent)
});

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(49644);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(88692);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(71745);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__(12899);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/transitions/utils.js
var utils = __webpack_require__(40830);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(70567);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(60768);
;// ./node_modules/@material-ui/core/esm/Collapse/Collapse.js














var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },
    /* Styles applied to the root element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible'
    },
    /* Styles applied to the root element when the transition has exited and `collapsedSize` != 0px. */
    hidden: {
      visibility: 'hidden'
    },
    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },
    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Collapse = /*#__PURE__*/react.forwardRef(function Collapse(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    collapsedHeight = props.collapsedHeight,
    _props$collapsedSize = props.collapsedSize,
    collapsedSizeProp = _props$collapsedSize === void 0 ? '0px' : _props$collapsedSize,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$disableStrictM = props.disableStrictModeCompat,
    disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
    inProp = props.in,
    onEnter = props.onEnter,
    onEntered = props.onEntered,
    onEntering = props.onEntering,
    onExit = props.onExit,
    onExited = props.onExited,
    onExiting = props.onExiting,
    style = props.style,
    _props$timeout = props.timeout,
    timeout = _props$timeout === void 0 ? transitions/* duration */.p0.standard : _props$timeout,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Transition/* default */.Ay : _props$TransitionComp,
    other = (0,objectWithoutProperties/* default */.A)(props, ["children", "classes", "className", "collapsedHeight", "collapsedSize", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var theme = (0,useTheme/* default */.A)();
  var timer = react.useRef();
  var wrapperRef = react.useRef(null);
  var autoTransitionDuration = react.useRef();
  var collapsedSize = typeof (collapsedHeight || collapsedSizeProp) === 'number' ? "".concat(collapsedHeight || collapsedSizeProp, "px") : collapsedHeight || collapsedSizeProp;
  react.useEffect(function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react.useRef(null);
  var handleRef = (0,useForkRef/* default */.A)(ref, enableStrictModeCompat ? nodeRef : undefined);
  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
          _ref2 = (0,slicedToArray/* default */.A)(_ref, 2),
          node = _ref2[0],
          isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    var _getTransitionProps = (0,utils/* getTransitionProps */.c)({
        style: style,
        timeout: timeout
      }, {
        mode: 'enter'
      }),
      transitionDuration = _getTransitionProps.duration;
    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style.height = "".concat(wrapperHeight, "px");
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = 'auto';
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  var handleExit = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var handleExiting = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    var _getTransitionProps2 = (0,utils/* getTransitionProps */.c)({
        style: style,
        timeout: timeout
      }, {
        mode: 'exit'
      }),
      transitionDuration = _getTransitionProps2.duration;
    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }
    node.style.height = collapsedSize;
    if (onExiting) {
      onExiting(node);
    }
  });
  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };
  return /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.A)({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.A)({
      className: (0,clsx_m/* default */.A)(classes.root, classes.container, className, {
        'entered': classes.entered,
        'exited': !inProp && collapsedSize === '0px' && classes.hidden
      }[state]),
      style: (0,esm_extends/* default */.A)({
        minHeight: collapsedSize
      }, style),
      ref: handleRef
    }, childProps), /*#__PURE__*/react.createElement("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, /*#__PURE__*/react.createElement("div", {
      className: classes.wrapperInner
    }, children)));
  });
});
 false ? 0 : void 0;
Collapse.muiSupportAuto = true;
/* harmony default export */ const Collapse_Collapse = ((0,withStyles/* default */.A)(styles, {
  name: 'MuiCollapse'
})(Collapse));
;// ./node_modules/@material-ui/core/esm/StepContent/StepContent.js







var StepContent_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      marginTop: 8,
      marginLeft: 12,
      // half icon
      paddingLeft: 8 + 12,
      // margin + half icon
      paddingRight: 8,
      borderLeft: "1px solid ".concat(theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600])
    },
    /* Styles applied to the root element if `last={true}` (controlled by `Step`). */
    last: {
      borderLeft: 'none'
    },
    /* Styles applied to the Transition component. */
    transition: {}
  };
};
var StepContent = /*#__PURE__*/react.forwardRef(function StepContent(props, ref) {
  var active = props.active,
    alternativeLabel = props.alternativeLabel,
    children = props.children,
    classes = props.classes,
    className = props.className,
    completed = props.completed,
    expanded = props.expanded,
    last = props.last,
    optional = props.optional,
    orientation = props.orientation,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Collapse_Collapse : _props$TransitionComp,
    _props$transitionDura = props.transitionDuration,
    transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
    TransitionProps = props.TransitionProps,
    other = (0,objectWithoutProperties/* default */.A)(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "expanded", "last", "optional", "orientation", "TransitionComponent", "transitionDuration", "TransitionProps"]);
  if (false) // removed by dead control flow
{}
  var transitionDuration = transitionDurationProp;
  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  }
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    className: (0,clsx_m/* default */.A)(classes.root, className, last && classes.last),
    ref: ref
  }, other), /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.A)({
    in: active || expanded,
    className: classes.transition,
    timeout: transitionDuration,
    unmountOnExit: true
  }, TransitionProps), children));
});
 false ? 0 : void 0;
/* harmony default export */ const StepContent_StepContent = ((0,withStyles/* default */.A)(StepContent_styles, {
  name: 'MuiStepContent'
})(StepContent));

/***/ },

/***/ 7991
(__unused_webpack_module, exports, __webpack_require__) {

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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');
exports.A = _default;

/***/ },

/***/ 72512
(__unused_webpack_module, exports, __webpack_require__) {

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

/***/ 77173
(__unused_webpack_module, exports, __webpack_require__) {

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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');
exports.A = _default;

/***/ },

/***/ 37850
(__unused_webpack_module, exports, __webpack_require__) {

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
  d: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
}), 'HelpOutlineOutlined');
exports.A = _default;

/***/ },

/***/ 66530
(__unused_webpack_module, exports, __webpack_require__) {

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
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');
exports.A = _default;

/***/ },

/***/ 24028
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91917);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 51962
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Checkbox_Checkbox)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(67266);
// EXTERNAL MODULE: ./node_modules/@mui/material/internal/SwitchBase.js + 1 modules
var SwitchBase = __webpack_require__(33064);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(66734);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/internal/svg-icons/CheckBoxOutlineBlank.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckBoxOutlineBlank = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank'));
;// ./node_modules/@mui/material/internal/svg-icons/CheckBox.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckBox = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox'));
;// ./node_modules/@mui/material/internal/svg-icons/IndeterminateCheckBox.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const IndeterminateCheckBox = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(61475);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Checkbox/checkboxClasses.js


function getCheckboxUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiCheckbox', slot);
}
const checkboxClasses = (0,generateUtilityClasses/* default */.A)('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium']);
/* harmony default export */ const Checkbox_checkboxClasses = (checkboxClasses);
;// ./node_modules/@mui/material/Checkbox/Checkbox.js
'use client';



const _excluded = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"];















const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    indeterminate = ownerState.indeterminate,
    color = ownerState.color,
    size = ownerState.size;
  const slots = {
    root: ['root', indeterminate && 'indeterminate', "color".concat((0,capitalize/* default */.A)(color)), "size".concat((0,capitalize/* default */.A)(size))]
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getCheckboxUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const CheckboxRoot = (0,styled/* default */.Ay)(SwitchBase/* default */.A, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, styles["size".concat((0,capitalize/* default */.A)(ownerState.size))], ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))]];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.A)({
    color: (theme.vars || theme).palette.text.secondary
  }, !ownerState.disableRipple && {
    '&:hover': {
      backgroundColor: theme.vars ? "rgba(".concat(ownerState.color === 'default' ? theme.vars.palette.action.activeChannel : theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, ownerState.color !== 'default' && {
    ["&.".concat(Checkbox_checkboxClasses.checked, ", &.").concat(Checkbox_checkboxClasses.indeterminate)]: {
      color: (theme.vars || theme).palette[ownerState.color].main
    },
    ["&.".concat(Checkbox_checkboxClasses.disabled)]: {
      color: (theme.vars || theme).palette.action.disabled
    }
  });
});
const defaultCheckedIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(CheckBox, {});
const defaultIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(CheckBoxOutlineBlank, {});
const defaultIndeterminateIcon = /*#__PURE__*/(0,jsx_runtime.jsx)(IndeterminateCheckBox, {});
const Checkbox = /*#__PURE__*/react.forwardRef(function Checkbox(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiCheckbox'
  });
  const _props$checkedIcon = props.checkedIcon,
    checkedIcon = _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
    _props$color = props.color,
    color = _props$color === void 0 ? 'primary' : _props$color,
    _props$icon = props.icon,
    iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
    _props$indeterminate = props.indeterminate,
    indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
    _props$indeterminateI = props.indeterminateIcon,
    indeterminateIconProp = _props$indeterminateI === void 0 ? defaultIndeterminateIcon : _props$indeterminateI,
    inputProps = props.inputProps,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    className = props.className,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    indeterminate,
    size
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CheckboxRoot, (0,esm_extends/* default */.A)({
    type: "checkbox",
    inputProps: (0,esm_extends/* default */.A)({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/react.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /*#__PURE__*/react.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState: ownerState,
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Checkbox_Checkbox = (Checkbox);

/***/ },

/***/ 41053
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);

/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControlContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 85213
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useFormControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41053);
'use client';



function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
}

/***/ },

/***/ 8122
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SvgIcon_SvgIcon)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/SvgIcon/svgIconClasses.js


function getSvgIconUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiSvgIcon', slot);
}
const svgIconClasses = (0,generateUtilityClasses/* default */.A)('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);
/* harmony default export */ const SvgIcon_svgIconClasses = ((/* unused pure expression or super */ null && (svgIconClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/SvgIcon/SvgIcon.js
'use client';



const _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];










const useUtilityClasses = ownerState => {
  const color = ownerState.color,
    fontSize = ownerState.fontSize,
    classes = ownerState.classes;
  const slots = {
    root: ['root', color !== 'inherit' && "color".concat((0,capitalize/* default */.A)(color)), "fontSize".concat((0,capitalize/* default */.A)(fontSize))]
  };
  return (0,composeClasses/* default */.A)(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = (0,styled/* default */.Ay)('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, ownerState.color !== 'inherit' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))], styles["fontSize".concat((0,capitalize/* default */.A)(ownerState.fontSize))]];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: undefined
    }[ownerState.color]
  };
});
const SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const children = props.children,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'inherit' : _props$color,
    _props$component = props.component,
    component = _props$component === void 0 ? 'svg' : _props$component,
    _props$fontSize = props.fontSize,
    fontSize = _props$fontSize === void 0 ? 'medium' : _props$fontSize,
    htmlColor = props.htmlColor,
    _props$inheritViewBox = props.inheritViewBox,
    inheritViewBox = _props$inheritViewBox === void 0 ? false : _props$inheritViewBox,
    titleAccess = props.titleAccess,
    _props$viewBox = props.viewBox,
    viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const hasSvgAsChild = /*#__PURE__*/react.isValidElement(children) && children.type === 'svg';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SvgIconRoot, (0,esm_extends/* default */.A)({
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
 false ? 0 : void 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);

/***/ },

/***/ 33064
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ internal_SwitchBase)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(61475);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(54516);
// EXTERNAL MODULE: ./node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(85213);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(75429);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/internal/switchBaseClasses.js


function getSwitchBaseUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('PrivateSwitchBase', slot);
}
const switchBaseClasses = (0,generateUtilityClasses/* default */.A)('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);
/* harmony default export */ const internal_switchBaseClasses = ((/* unused pure expression or super */ null && (switchBaseClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/internal/SwitchBase.js
'use client';




const _excluded = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];













const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    checked = ownerState.checked,
    disabled = ownerState.disabled,
    edge = ownerState.edge;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && "edge".concat((0,capitalize/* default */.A)(edge))],
    input: ['input']
  };
  return (0,composeClasses/* default */.A)(slots, getSwitchBaseUtilityClass, classes);
};
const SwitchBaseRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  name: 'MuiSwitchBase'
})(_ref => {
  let ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.A)({
    padding: 9,
    borderRadius: '50%'
  }, ownerState.edge === 'start' && {
    marginLeft: ownerState.size === 'small' ? -3 : -12
  }, ownerState.edge === 'end' && {
    marginRight: ownerState.size === 'small' ? -3 : -12
  });
});
const SwitchBaseInput = (0,styled/* default */.Ay)('input', {
  name: 'MuiSwitchBase',
  shouldForwardProp: rootShouldForwardProp/* default */.A
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});

/**
 * @ignore - internal component.
 */
const SwitchBase = /*#__PURE__*/react.forwardRef(function SwitchBase(props, ref) {
  const autoFocus = props.autoFocus,
    checkedProp = props.checked,
    checkedIcon = props.checkedIcon,
    className = props.className,
    defaultChecked = props.defaultChecked,
    disabledProp = props.disabled,
    _props$disableFocusRi = props.disableFocusRipple,
    disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
    _props$edge = props.edge,
    edge = _props$edge === void 0 ? false : _props$edge,
    icon = props.icon,
    id = props.id,
    inputProps = props.inputProps,
    inputRef = props.inputRef,
    name = props.name,
    onBlur = props.onBlur,
    onChange = props.onChange,
    onFocus = props.onFocus,
    readOnly = props.readOnly,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    tabIndex = props.tabIndex,
    type = props.type,
    value = props.value,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const _useControlled = (0,useControlled/* default */.A)({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: 'SwitchBase',
      state: 'checked'
    }),
    _useControlled2 = (0,slicedToArray/* default */.A)(_useControlled, 2),
    checked = _useControlled2[0],
    setCheckedState = _useControlled2[1];
  const muiFormControl = (0,useFormControl/* default */.A)();
  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };
  let disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  const hasLabelFor = type === 'checkbox' || type === 'radio';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SwitchBaseRoot, (0,esm_extends/* default */.A)({
    component: "span",
    className: (0,clsx/* default */.A)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SwitchBaseInput, (0,esm_extends/* default */.A)({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor ? id : undefined,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      ownerState: ownerState,
      tabIndex: tabIndex,
      type: type
    }, type === 'checkbox' && value === undefined ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
});

// NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.
 false ? 0 : void 0;
/* harmony default export */ const internal_SwitchBase = (SwitchBase);

/***/ },

/***/ 66734
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createSvgIcon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8122);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70579);
'use client';





/**
 * Private module reserved for @mui packages.
 */

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      "data-testid": "".concat(displayName, "Icon"),
      ref: ref
    }, props, {
      children: path
    }));
  }
  if (false) // removed by dead control flow
{}
  Component.muiName = _SvgIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.muiName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(Component));
}

/***/ },

/***/ 54516
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_utils_useControlled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51052);
'use client';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useControlled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 51052
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useControlled)
/* harmony export */ });
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
'use client';

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */


function useControlled(_ref) {
  let controlled = _ref.controlled,
    defaultProp = _ref.default,
    name = _ref.name,
    _ref$state = _ref.state,
    state = _ref$state === void 0 ? 'value' : _ref$state;
  // isControlled is ignored in the hook dependency lists as it should never change.
  const _React$useRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(controlled !== undefined),
    isControlled = _React$useRef.current;
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(defaultProp),
    _React$useState2 = (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_React$useState, 2),
    valueState = _React$useState2[0],
    setValue = _React$useState2[1];
  const value = isControlled ? controlled : valueState;
  if (false) // removed by dead control flow
{}
  const setValueIfUncontrolled = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/***/ }

}]);