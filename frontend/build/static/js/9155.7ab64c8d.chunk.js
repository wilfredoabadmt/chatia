"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[9155],{

/***/ 99229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 55357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64467);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87603);








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.typography.body1, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},
    /* Styles applied to the root element if `selected={true}`. */
    selected: {},
    /* Styles applied to the root element if dense. */
    dense: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    component = _props$component === void 0 ? 'li' : _props$component,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
    ListItemClasses = props.ListItemClasses,
    _props$role = props.role,
    role = _props$role === void 0 ? 'menuitem' : _props$role,
    selected = props.selected,
    tabIndexProp = props.tabIndex,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);
  var tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
      dense: classes.dense
    }, ListItemClasses),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiMenuItem'
})(MenuItem));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var _mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99303);
/* harmony import */ var _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43198);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88692);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26240);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80653);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70579);
'use client';



const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];










function getScale(value) {
  return "scale(".concat(value, ", ").concat(value ** 2, ")");
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};

/*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */
const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

/**
 * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
 * [Popover](/material-ui/react-popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Grow(props, ref) {
  const addEndListener = props.addEndListener,
    _props$appear = props.appear,
    appear = _props$appear === void 0 ? true : _props$appear,
    children = props.children,
    easing = props.easing,
    inProp = props.in,
    onEnter = props.onEnter,
    onEntered = props.onEntered,
    onEntering = props.onEntering,
    onExit = props.onExit,
    onExited = props.onExited,
    onExiting = props.onExiting,
    style = props.style,
    _props$timeout = props.timeout,
    timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay : _props$TransitionComp,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const timer = (0,_mui_utils_useTimeout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)();
  const autoTimeout = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(nodeRef, (0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(children), ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .reflow */ .q)(node); // So the animation always start from the start.

    const _getTransitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .c)({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      }),
      transitionDuration = _getTransitionProps.duration,
      delay = _getTransitionProps.delay,
      transitionTimingFunction = _getTransitionProps.easing;
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(',');
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const _getTransitionProps2 = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .c)({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      }),
      transitionDuration = _getTransitionProps2.duration,
      delay = _getTransitionProps2.delay,
      transitionTimingFunction = _getTransitionProps2.easing;
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(',');
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
Grow.muiSupportAuto = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Grow);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 77739
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tooltip_Tooltip)
});

// UNUSED EXPORTS: testReset

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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useTimeout/useTimeout.js + 2 modules
var useTimeout = __webpack_require__(99303);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(67266);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(10875);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js
var appendOwnerState = __webpack_require__(95006);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js
var getReactElementRef = __webpack_require__(43198);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(26240);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/material/Grow/Grow.js
var Grow = __webpack_require__(86328);
// EXTERNAL MODULE: ./node_modules/@mui/material/Popper/Popper.js + 4 modules
var Popper = __webpack_require__(98313);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useEventCallback.js
var useEventCallback = __webpack_require__(93319);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(95849);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useId.js
var useId = __webpack_require__(45879);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__(87844);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useControlled.js
var useControlled = __webpack_require__(54516);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Tooltip/tooltipClasses.js


function getTooltipUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiTooltip', slot);
}
const tooltipClasses = (0,generateUtilityClasses/* default */.A)('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
/* harmony default export */ const Tooltip_tooltipClasses = (tooltipClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Tooltip/Tooltip.js
'use client';




const _excluded = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];























function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    disableInteractive = ownerState.disableInteractive,
    arrow = ownerState.arrow,
    touch = ownerState.touch,
    placement = ownerState.placement;
  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: ['tooltip', arrow && 'tooltipArrow', touch && 'touch', "tooltipPlacement".concat((0,capitalize/* default */.A)(placement.split('-')[0]))],
    arrow: ['arrow']
  };
  return (0,composeClasses/* default */.A)(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = (0,styled/* default */.Ay)(Popper/* default */.A, {
  name: 'MuiTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(_ref9 => {
  let theme = _ref9.theme,
    ownerState = _ref9.ownerState,
    open = _ref9.open;
  return (0,esm_extends/* default */.A)({
    zIndex: (theme.vars || theme).zIndex.tooltip,
    pointerEvents: 'none'
  }, !ownerState.disableInteractive && {
    pointerEvents: 'auto'
  }, !open && {
    pointerEvents: 'none'
  }, ownerState.arrow && {
    ["&[data-popper-placement*=\"bottom\"] .".concat(Tooltip_tooltipClasses.arrow)]: {
      top: 0,
      marginTop: '-0.71em',
      '&::before': {
        transformOrigin: '0 100%'
      }
    },
    ["&[data-popper-placement*=\"top\"] .".concat(Tooltip_tooltipClasses.arrow)]: {
      bottom: 0,
      marginBottom: '-0.71em',
      '&::before': {
        transformOrigin: '100% 0'
      }
    },
    ["&[data-popper-placement*=\"right\"] .".concat(Tooltip_tooltipClasses.arrow)]: (0,esm_extends/* default */.A)({}, !ownerState.isRtl ? {
      left: 0,
      marginLeft: '-0.71em'
    } : {
      right: 0,
      marginRight: '-0.71em'
    }, {
      height: '1em',
      width: '0.71em',
      '&::before': {
        transformOrigin: '100% 100%'
      }
    }),
    ["&[data-popper-placement*=\"left\"] .".concat(Tooltip_tooltipClasses.arrow)]: (0,esm_extends/* default */.A)({}, !ownerState.isRtl ? {
      right: 0,
      marginRight: '-0.71em'
    } : {
      left: 0,
      marginLeft: '-0.71em'
    }, {
      height: '1em',
      width: '0.71em',
      '&::before': {
        transformOrigin: '0 0'
      }
    })
  });
});
const TooltipTooltip = (0,styled/* default */.Ay)('div', {
  name: 'MuiTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles["tooltipPlacement".concat((0,capitalize/* default */.A)(ownerState.placement.split('-')[0]))]];
  }
})(_ref0 => {
  let theme = _ref0.theme,
    ownerState = _ref0.ownerState;
  return (0,esm_extends/* default */.A)({
    backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.92),
    borderRadius: (theme.vars || theme).shape.borderRadius,
    color: (theme.vars || theme).palette.common.white,
    fontFamily: theme.typography.fontFamily,
    padding: '4px 8px',
    fontSize: theme.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: 'break-word',
    fontWeight: theme.typography.fontWeightMedium
  }, ownerState.arrow && {
    position: 'relative',
    margin: 0
  }, ownerState.touch && {
    padding: '8px 16px',
    fontSize: theme.typography.pxToRem(14),
    lineHeight: "".concat(round(16 / 14), "em"),
    fontWeight: theme.typography.fontWeightRegular
  }, {
    [".".concat(Tooltip_tooltipClasses.popper, "[data-popper-placement*=\"left\"] &")]: (0,esm_extends/* default */.A)({
      transformOrigin: 'right center'
    }, !ownerState.isRtl ? (0,esm_extends/* default */.A)({
      marginRight: '14px'
    }, ownerState.touch && {
      marginRight: '24px'
    }) : (0,esm_extends/* default */.A)({
      marginLeft: '14px'
    }, ownerState.touch && {
      marginLeft: '24px'
    })),
    [".".concat(Tooltip_tooltipClasses.popper, "[data-popper-placement*=\"right\"] &")]: (0,esm_extends/* default */.A)({
      transformOrigin: 'left center'
    }, !ownerState.isRtl ? (0,esm_extends/* default */.A)({
      marginLeft: '14px'
    }, ownerState.touch && {
      marginLeft: '24px'
    }) : (0,esm_extends/* default */.A)({
      marginRight: '14px'
    }, ownerState.touch && {
      marginRight: '24px'
    })),
    [".".concat(Tooltip_tooltipClasses.popper, "[data-popper-placement*=\"top\"] &")]: (0,esm_extends/* default */.A)({
      transformOrigin: 'center bottom',
      marginBottom: '14px'
    }, ownerState.touch && {
      marginBottom: '24px'
    }),
    [".".concat(Tooltip_tooltipClasses.popper, "[data-popper-placement*=\"bottom\"] &")]: (0,esm_extends/* default */.A)({
      transformOrigin: 'center top',
      marginTop: '14px'
    }, ownerState.touch && {
      marginTop: '24px'
    })
  });
});
const TooltipArrow = (0,styled/* default */.Ay)('span', {
  name: 'MuiTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow
})(_ref1 => {
  let theme = _ref1.theme;
  return {
    overflow: 'hidden',
    position: 'absolute',
    width: '1em',
    height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */,
    boxSizing: 'border-box',
    color: theme.vars ? theme.vars.palette.Tooltip.bg : (0,colorManipulator/* alpha */.X4)(theme.palette.grey[700], 0.9),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)'
    }
  };
});
let hystersisOpen = false;
const hystersisTimer = new useTimeout/* Timeout */.E();
let cursorPosition = {
  x: 0,
  y: 0
};
function testReset() {
  hystersisOpen = false;
  hystersisTimer.clear();
}
function composeEventHandler(handler, eventHandler) {
  return function (event) {
    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }
    if (eventHandler) {
      eventHandler(event, ...params);
    }
    handler(event, ...params);
  };
}

// TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.
const Tooltip = /*#__PURE__*/react.forwardRef(function Tooltip(inProps, ref) {
  var _ref, _slots$popper, _ref2, _ref3, _slots$transition, _ref4, _slots$tooltip, _ref5, _slots$arrow, _slotProps$popper, _ref6, _slotProps$popper2, _slotProps$transition, _slotProps$tooltip, _ref7, _slotProps$tooltip2, _slotProps$arrow, _ref8, _slotProps$arrow2;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiTooltip'
  });
  const _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    childrenProp = props.children,
    _props$components = props.components,
    components = _props$components === void 0 ? {} : _props$components,
    _props$componentsProp = props.componentsProps,
    componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
    _props$describeChild = props.describeChild,
    describeChild = _props$describeChild === void 0 ? false : _props$describeChild,
    _props$disableFocusLi = props.disableFocusListener,
    disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi,
    _props$disableHoverLi = props.disableHoverListener,
    disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi,
    _props$disableInterac = props.disableInteractive,
    disableInteractiveProp = _props$disableInterac === void 0 ? false : _props$disableInterac,
    _props$disableTouchLi = props.disableTouchListener,
    disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi,
    _props$enterDelay = props.enterDelay,
    enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay,
    _props$enterNextDelay = props.enterNextDelay,
    enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay,
    _props$enterTouchDela = props.enterTouchDelay,
    enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela,
    _props$followCursor = props.followCursor,
    followCursor = _props$followCursor === void 0 ? false : _props$followCursor,
    idProp = props.id,
    _props$leaveDelay = props.leaveDelay,
    leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay,
    _props$leaveTouchDela = props.leaveTouchDelay,
    leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela,
    onClose = props.onClose,
    onOpen = props.onOpen,
    openProp = props.open,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    PopperComponentProp = props.PopperComponent,
    _props$PopperProps = props.PopperProps,
    PopperProps = _props$PopperProps === void 0 ? {} : _props$PopperProps,
    _props$slotProps = props.slotProps,
    slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
    _props$slots = props.slots,
    slots = _props$slots === void 0 ? {} : _props$slots,
    title = props.title,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponentProp = _props$TransitionComp === void 0 ? Grow/* default */.A : _props$TransitionComp,
    TransitionProps = props.TransitionProps,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);

  // to prevent runtime errors, developers will need to provide a child as a React element anyway.
  const children = /*#__PURE__*/react.isValidElement(childrenProp) ? childrenProp : /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    children: childrenProp
  });
  const theme = (0,useTheme/* default */.A)();
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const _React$useState = react.useState(),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    childNode = _React$useState2[0],
    setChildNode = _React$useState2[1];
  const _React$useState3 = react.useState(null),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    arrowRef = _React$useState4[0],
    setArrowRef = _React$useState4[1];
  const ignoreNonTouchEvents = react.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = (0,useTimeout/* default */.A)();
  const enterTimer = (0,useTimeout/* default */.A)();
  const leaveTimer = (0,useTimeout/* default */.A)();
  const touchTimer = (0,useTimeout/* default */.A)();
  const _useControlled = (0,useControlled/* default */.A)({
      controlled: openProp,
      default: false,
      name: 'Tooltip',
      state: 'open'
    }),
    _useControlled2 = (0,slicedToArray/* default */.A)(_useControlled, 2),
    openState = _useControlled2[0],
    setOpenState = _useControlled2[1];
  let open = openState;
  if (false) // removed by dead control flow
{}
  const id = (0,useId/* default */.A)(idProp);
  const prevUserSelect = react.useRef();
  const stopTouchInteraction = (0,useEventCallback/* default */.A)(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }
    touchTimer.clear();
  });
  react.useEffect(() => stopTouchInteraction, [stopTouchInteraction]);
  const handleOpen = event => {
    hystersisTimer.clear();
    hystersisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = (0,useEventCallback/* default */.A)(
  /**
   * @param {React.SyntheticEvent | Event} event
   */
  event => {
    hystersisTimer.start(800 + leaveDelay, () => {
      hystersisOpen = false;
    });
    setOpenState(false);
    if (onClose && open) {
      onClose(event);
    }
    closeTimer.start(theme.transitions.duration.shortest, () => {
      ignoreNonTouchEvents.current = false;
    });
  });
  const handleMouseOver = event => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }
    enterTimer.clear();
    leaveTimer.clear();
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };
  const handleMouseLeave = event => {
    enterTimer.clear();
    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };
  const _useIsFocusVisible = (0,useIsFocusVisible/* default */.A)(),
    isFocusVisibleRef = _useIsFocusVisible.isFocusVisibleRef,
    handleBlurVisible = _useIsFocusVisible.onBlur,
    handleFocusVisible = _useIsFocusVisible.onFocus,
    focusVisibleRef = _useIsFocusVisible.ref;
  // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.
  const _React$useState5 = react.useState(false),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    setChildIsFocusVisible = _React$useState6[1];
  const handleBlur = event => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };
  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };
  const detectTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;
    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };
  const handleTouchStart = event => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    // Prevent iOS text selection on long-tap.
    document.body.style.WebkitUserSelect = 'none';
    touchTimer.start(enterTouchDelay, () => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };
  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };
  react.useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);
  const handleRef = (0,useForkRef/* default */.A)((0,getReactElementRef/* default */.A)(children), focusVisibleRef, setChildNode, ref);

  // There is no point in displaying an empty tooltip.
  // So we exclude all falsy values, except 0, which is valid.
  if (!title && title !== 0) {
    open = false;
  }
  const popperRef = react.useRef();
  const handleMouseMove = event => {
    const childrenProps = children.props;
    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }
    cursorPosition = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === 'string';
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }
  const childrenProps = (0,esm_extends/* default */.A)({}, nameOrDescProps, other, children.props, {
    className: (0,clsx/* default */.A)(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});
  if (false) // removed by dead control flow
{}
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  if (false) // removed by dead control flow
{}
  const popperOptions = react.useMemo(() => {
    var _PopperProps$popperOp;
    let tooltipModifiers = [{
      name: 'arrow',
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    if ((_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }
    return (0,esm_extends/* default */.A)({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  });
  const classes = useUtilityClasses(ownerState);
  const PopperComponent = (_ref = (_slots$popper = slots.popper) != null ? _slots$popper : components.Popper) != null ? _ref : TooltipPopper;
  const TransitionComponent = (_ref2 = (_ref3 = (_slots$transition = slots.transition) != null ? _slots$transition : components.Transition) != null ? _ref3 : TransitionComponentProp) != null ? _ref2 : Grow/* default */.A;
  const TooltipComponent = (_ref4 = (_slots$tooltip = slots.tooltip) != null ? _slots$tooltip : components.Tooltip) != null ? _ref4 : TooltipTooltip;
  const ArrowComponent = (_ref5 = (_slots$arrow = slots.arrow) != null ? _slots$arrow : components.Arrow) != null ? _ref5 : TooltipArrow;
  const popperProps = (0,appendOwnerState/* default */.A)(PopperComponent, (0,esm_extends/* default */.A)({}, PopperProps, (_slotProps$popper = slotProps.popper) != null ? _slotProps$popper : componentsProps.popper, {
    className: (0,clsx/* default */.A)(classes.popper, PopperProps == null ? void 0 : PopperProps.className, (_ref6 = (_slotProps$popper2 = slotProps.popper) != null ? _slotProps$popper2 : componentsProps.popper) == null ? void 0 : _ref6.className)
  }), ownerState);
  const transitionProps = (0,appendOwnerState/* default */.A)(TransitionComponent, (0,esm_extends/* default */.A)({}, TransitionProps, (_slotProps$transition = slotProps.transition) != null ? _slotProps$transition : componentsProps.transition), ownerState);
  const tooltipProps = (0,appendOwnerState/* default */.A)(TooltipComponent, (0,esm_extends/* default */.A)({}, (_slotProps$tooltip = slotProps.tooltip) != null ? _slotProps$tooltip : componentsProps.tooltip, {
    className: (0,clsx/* default */.A)(classes.tooltip, (_ref7 = (_slotProps$tooltip2 = slotProps.tooltip) != null ? _slotProps$tooltip2 : componentsProps.tooltip) == null ? void 0 : _ref7.className)
  }), ownerState);
  const tooltipArrowProps = (0,appendOwnerState/* default */.A)(ArrowComponent, (0,esm_extends/* default */.A)({}, (_slotProps$arrow = slotProps.arrow) != null ? _slotProps$arrow : componentsProps.arrow, {
    className: (0,clsx/* default */.A)(classes.arrow, (_ref8 = (_slotProps$arrow2 = slotProps.arrow) != null ? _slotProps$arrow2 : componentsProps.arrow) == null ? void 0 : _ref8.className)
  }), ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/react.cloneElement(children, childrenProps), /*#__PURE__*/(0,jsx_runtime.jsx)(PopperComponent, (0,esm_extends/* default */.A)({
      as: PopperComponentProp != null ? PopperComponentProp : Popper/* default */.A,
      placement: placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef: popperRef,
      open: childNode ? open : false,
      id: id,
      transition: true
    }, interactiveWrapperListeners, popperProps, {
      popperOptions: popperOptions,
      children: _ref10 => {
        let TransitionPropsInner = _ref10.TransitionProps;
        return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
          timeout: theme.transitions.duration.shorter
        }, TransitionPropsInner, transitionProps, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(TooltipComponent, (0,esm_extends/* default */.A)({}, tooltipProps, {
            children: [title, arrow ? /*#__PURE__*/(0,jsx_runtime.jsx)(ArrowComponent, (0,esm_extends/* default */.A)({}, tooltipArrowProps, {
              ref: setArrowRef
            })) : null]
          }))
        }));
      }
    }))]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Tooltip_Tooltip = (Tooltip);

/***/ },

/***/ 10875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony import specifier */ var _extends;
/* unused harmony import specifier */ var _objectWithoutPropertiesLoose;
/* unused harmony import specifier */ var _jsx;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70579);


const _excluded = (/* unused pure expression or super */ null && (["value"]));



const RtlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
function RtlProvider(_ref) {
  let value = _ref.value,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  return /*#__PURE__*/_jsx(RtlContext.Provider, _extends({
    value: value != null ? value : true
  }, props));
}
 false ? 0 : void 0;
const useRtl = () => {
  const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RtlContext);
  return value != null ? value : false;
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (RtlProvider)));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "I", 0, /* binding */ useRtl
/* harmony export */ ]);


/***/ }

}]);