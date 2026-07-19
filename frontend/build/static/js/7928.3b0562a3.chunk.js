"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[7928],{

/***/ 81497
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2086);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);







var styles = {
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},
  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  },
  /* Pseudo-class applied to the root element if `completed={true}`. */
  completed: {}
};
var Step = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Step(props, ref) {
  var _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    alternativeLabel = props.alternativeLabel,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$completed = props.completed,
    completed = _props$completed === void 0 ? false : _props$completed,
    connectorProp = props.connector,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$expanded = props.expanded,
    expanded = _props$expanded === void 0 ? false : _props$expanded,
    index = props.index,
    last = props.last,
    orientation = props.orientation,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "expanded", "index", "last", "orientation"]);
  var connector = connectorProp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(connectorProp, {
    orientation: orientation,
    alternativeLabel: alternativeLabel,
    index: index,
    active: active,
    completed: completed,
    disabled: disabled
  }) : null;
  var newChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, completed && classes.completed),
    ref: ref
  }, other), connector && alternativeLabel && index !== 0 ? connector : null, react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.isValidElement(child)) {
      return null;
    }
    if (false) // removed by dead control flow
{}
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(child, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      active: active,
      alternativeLabel: alternativeLabel,
      completed: completed,
      disabled: disabled,
      expanded: expanded,
      last: last,
      icon: index + 1,
      orientation: orientation
    }, child.props));
  }));
  if (connector && !alternativeLabel && index !== 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, connector, newChildren);
  }
  return newChildren;
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiStep'
})(Step));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 26841
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ StepLabel_StepLabel)
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(71745);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(91917);
;// ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckCircle.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const CheckCircle = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), 'CheckCircle'));
;// ./node_modules/@material-ui/core/esm/internal/svg-icons/Warning.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const Warning = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__(299);
;// ./node_modules/@material-ui/core/esm/StepIcon/StepIcon.js







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      color: theme.palette.text.disabled,
      '&$completed': {
        color: theme.palette.primary.main
      },
      '&$active': {
        color: theme.palette.primary.main
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },
    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {}
  };
};
var _ref = /*#__PURE__*/react.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "12"
});
var StepIcon = /*#__PURE__*/react.forwardRef(function StepIcon(props, ref) {
  var _props$completed = props.completed,
    completed = _props$completed === void 0 ? false : _props$completed,
    icon = props.icon,
    _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    _props$error = props.error,
    error = _props$error === void 0 ? false : _props$error,
    classes = props.classes;
  if (typeof icon === 'number' || typeof icon === 'string') {
    var className = (0,clsx_m/* default */.A)(classes.root, active && classes.active, error && classes.error, completed && classes.completed);
    if (error) {
      return /*#__PURE__*/react.createElement(Warning, {
        className: className,
        ref: ref
      });
    }
    if (completed) {
      return /*#__PURE__*/react.createElement(CheckCircle, {
        className: className,
        ref: ref
      });
    }
    return /*#__PURE__*/react.createElement(SvgIcon/* default */.A, {
      className: className,
      ref: ref
    }, _ref, /*#__PURE__*/react.createElement("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, icon));
  }
  return icon;
});
 false ? 0 : void 0;
/* harmony default export */ const StepIcon_StepIcon = ((0,withStyles/* default */.A)(styles, {
  name: 'MuiStepIcon'
})(StepIcon));
;// ./node_modules/@material-ui/core/esm/StepLabel/StepLabel.js








var StepLabel_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      '&$alternativeLabel': {
        flexDirection: 'column'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {},
    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      color: theme.palette.text.secondary,
      '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: 16
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },
    /* Pseudo-class applied to the `Typography` component if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the `Typography` component if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element and `Typography` component if `error={true}`. */
    error: {},
    /* Pseudo-class applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the `icon` container element. */
    iconContainer: {
      flexShrink: 0,
      // Fix IE 11 issue
      display: 'flex',
      paddingRight: 8,
      '&$alternativeLabel': {
        paddingRight: 0
      }
    },
    /* Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},
    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
      width: '100%'
    }
  };
};
var StepLabel = /*#__PURE__*/react.forwardRef(function StepLabel(props, ref) {
  var _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    _props$alternativeLab = props.alternativeLabel,
    alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$completed = props.completed,
    completed = _props$completed === void 0 ? false : _props$completed,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$error = props.error,
    error = _props$error === void 0 ? false : _props$error,
    expanded = props.expanded,
    icon = props.icon,
    last = props.last,
    optional = props.optional,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
    StepIconComponentProp = props.StepIconComponent,
    StepIconProps = props.StepIconProps,
    other = (0,objectWithoutProperties/* default */.A)(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "expanded", "icon", "last", "optional", "orientation", "StepIconComponent", "StepIconProps"]);
  var StepIconComponent = StepIconComponentProp;
  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon_StepIcon;
  }
  return /*#__PURE__*/react.createElement("span", (0,esm_extends/* default */.A)({
    className: (0,clsx_m/* default */.A)(classes.root, classes[orientation], className, disabled && classes.disabled, alternativeLabel && classes.alternativeLabel, error && classes.error),
    ref: ref
  }, other), icon || StepIconComponent ? /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.A)(classes.iconContainer, alternativeLabel && classes.alternativeLabel)
  }, /*#__PURE__*/react.createElement(StepIconComponent, (0,esm_extends/* default */.A)({
    completed: completed,
    active: active,
    error: error,
    icon: icon
  }, StepIconProps))) : null, /*#__PURE__*/react.createElement("span", {
    className: classes.labelContainer
  }, children ? /*#__PURE__*/react.createElement(Typography/* default */.A, {
    variant: "body2",
    component: "span",
    display: "block",
    className: (0,clsx_m/* default */.A)(classes.label, alternativeLabel && classes.alternativeLabel, completed && classes.completed, active && classes.active, error && classes.error)
  }, children) : null, optional));
});
 false ? 0 : void 0;
StepLabel.muiName = 'StepLabel';
/* harmony default export */ const StepLabel_StepLabel = ((0,withStyles/* default */.A)(StepLabel_styles, {
  name: 'MuiStepLabel'
})(StepLabel));

/***/ },

/***/ 63990
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Stepper_Stepper)
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(71745);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(20495);
;// ./node_modules/@material-ui/core/esm/StepConnector/StepConnector.js






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto'
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: '0 0 8px'
    },
    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: 'absolute',
      top: 8 + 4,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)'
    },
    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},
    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the line element. */
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24
    }
  };
};
var StepConnector = /*#__PURE__*/react.forwardRef(function StepConnector(props, ref) {
  var active = props.active,
    _props$alternativeLab = props.alternativeLabel,
    alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
    classes = props.classes,
    className = props.className,
    completed = props.completed,
    disabled = props.disabled,
    index = props.index,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
    other = (0,objectWithoutProperties/* default */.A)(props, ["active", "alternativeLabel", "classes", "className", "completed", "disabled", "index", "orientation"]);
  return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
    className: (0,clsx_m/* default */.A)(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, active && classes.active, completed && classes.completed, disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react.createElement("span", {
    className: (0,clsx_m/* default */.A)(classes.line, {
      'horizontal': classes.lineHorizontal,
      'vertical': classes.lineVertical
    }[orientation])
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const StepConnector_StepConnector = ((0,withStyles/* default */.A)(styles, {
  name: 'MuiStepConnector'
})(StepConnector));
;// ./node_modules/@material-ui/core/esm/Stepper/Stepper.js








var Stepper_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: 24
  },
  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },
  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    alignItems: 'flex-start'
  }
};
var defaultConnector = /*#__PURE__*/react.createElement(StepConnector_StepConnector, null);
var Stepper = /*#__PURE__*/react.forwardRef(function Stepper(props, ref) {
  var _props$activeStep = props.activeStep,
    activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep,
    _props$alternativeLab = props.alternativeLabel,
    alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$connector = props.connector,
    connectorProp = _props$connector === void 0 ? defaultConnector : _props$connector,
    _props$nonLinear = props.nonLinear,
    nonLinear = _props$nonLinear === void 0 ? false : _props$nonLinear,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
    other = (0,objectWithoutProperties/* default */.A)(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);
  var connector = /*#__PURE__*/react.isValidElement(connectorProp) ? /*#__PURE__*/react.cloneElement(connectorProp, {
    orientation: orientation
  }) : null;
  var childrenArray = react.Children.toArray(children);
  var steps = childrenArray.map(function (step, index) {
    var state = {
      index: index,
      active: false,
      completed: false,
      disabled: false
    };
    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }
    return /*#__PURE__*/react.cloneElement(step, (0,esm_extends/* default */.A)({
      alternativeLabel: alternativeLabel,
      connector: connector,
      last: index + 1 === childrenArray.length,
      orientation: orientation
    }, state, step.props));
  });
  return /*#__PURE__*/react.createElement(Paper/* default */.A, (0,esm_extends/* default */.A)({
    square: true,
    elevation: 0,
    className: (0,clsx_m/* default */.A)(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel),
    ref: ref
  }, other), steps);
});
 false ? 0 : void 0;
/* harmony default export */ const Stepper_Stepper = ((0,withStyles/* default */.A)(Stepper_styles, {
  name: 'MuiStepper'
})(Stepper));

/***/ },

/***/ 84373
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11062);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82454);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      // Create a "on paper" color with sufficient contrast retaining the color
      backgroundColor: (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .alpha */ .X4)(theme.palette.text.primary, theme.palette.type === 'light' ? 0.11 : 0.13),
      height: '1.2em'
    },
    /* Styles applied to the root element if `variant="text"`. */
    text: {
      marginTop: 0,
      marginBottom: 0,
      height: 'auto',
      transformOrigin: '0 60%',
      transform: 'scale(1, 0.60)',
      borderRadius: theme.shape.borderRadius,
      '&:empty:before': {
        content: '"\\00a0"'
      }
    },
    /* Styles applied to the root element if `variant="rect"`. */
    rect: {},
    /* Styles applied to the root element if `variant="circle"`. */
    circle: {
      borderRadius: '50%'
    },
    /* Styles applied to the root element if `animation="pulse"`. */
    pulse: {
      animation: '$pulse 1.5s ease-in-out 0.5s infinite'
    },
    '@keyframes pulse': {
      '0%': {
        opacity: 1
      },
      '50%': {
        opacity: 0.4
      },
      '100%': {
        opacity: 1
      }
    },
    /* Styles applied to the root element if `animation="wave"`. */
    wave: {
      position: 'relative',
      overflow: 'hidden',
      '&::after': {
        animation: '$wave 1.6s linear 0.5s infinite',
        background: "linear-gradient(90deg, transparent, ".concat(theme.palette.action.hover, ", transparent)"),
        content: '""',
        position: 'absolute',
        transform: 'translateX(-100%)',
        // Avoid flash during server-side hydration
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
      }
    },
    '@keyframes wave': {
      '0%': {
        transform: 'translateX(-100%)'
      },
      '60%': {
        // +0.5s of delay between each loop
        transform: 'translateX(100%)'
      },
      '100%': {
        transform: 'translateX(100%)'
      }
    },
    /* Styles applied when the component is passed children. */
    withChildren: {
      '& > *': {
        visibility: 'hidden'
      }
    },
    /* Styles applied when the component is passed children and no width. */
    fitContent: {
      maxWidth: 'fit-content'
    },
    /* Styles applied when the component is passed children and no height. */
    heightAuto: {
      height: 'auto'
    }
  };
};
var Skeleton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Skeleton(props, ref) {
  var _props$animation = props.animation,
    animation = _props$animation === void 0 ? 'pulse' : _props$animation,
    classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'span' : _props$component,
    height = props.height,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'text' : _props$variant,
    width = props.width,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["animation", "classes", "className", "component", "height", "variant", "width"]);
  var hasChildren = Boolean(other.children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, classes[variant], className, hasChildren && [classes.withChildren, !width && classes.fitContent, !height && classes.heightAuto], animation !== false && classes[animation])
  }, other, {
    style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      width: width,
      height: height
    }, other.style)
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiSkeleton'
})(Skeleton));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);