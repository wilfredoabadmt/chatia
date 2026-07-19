"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[8979],{

/***/ 96962
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Avatar_Avatar)
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(91917);
;// ./node_modules/@material-ui/core/esm/internal/svg-icons/Person.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ const Person = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'Person'));
;// ./node_modules/@material-ui/core/esm/Avatar/Avatar.js








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      width: 40,
      height: 40,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: 1,
      borderRadius: '50%',
      overflow: 'hidden',
      userSelect: 'none'
    },
    /* Styles applied to the root element if not `src` or `srcSet`. */
    colorDefault: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },
    /* Styles applied to the root element if `variant="circle"`. */
    circle: {},
    /* Styles applied to the root element if `variant="circular"`. */
    circular: {},
    /* Styles applied to the root element if `variant="rounded"`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="square"`. */
    square: {
      borderRadius: 0
    },
    /* Styles applied to the img element if either `src` or `srcSet` is defined. */
    img: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      // Handle non-square image. The property isn't supported by IE 11.
      objectFit: 'cover',
      // Hide alt text.
      color: 'transparent',
      // Hide the image broken icon, only works on Chrome.
      textIndent: 10000
    },
    /* Styles applied to the fallback icon */
    fallback: {
      width: '75%',
      height: '75%'
    }
  };
};
function useLoaded(_ref) {
  var src = _ref.src,
    srcSet = _ref.srcSet;
  var _React$useState = react.useState(false),
    loaded = _React$useState[0],
    setLoaded = _React$useState[1];
  react.useEffect(function () {
    if (!src && !srcSet) {
      return undefined;
    }
    setLoaded(false);
    var active = true;
    var image = new Image();
    image.src = src;
    image.srcSet = srcSet;
    image.onload = function () {
      if (!active) {
        return;
      }
      setLoaded('loaded');
    };
    image.onerror = function () {
      if (!active) {
        return;
      }
      setLoaded('error');
    };
    return function () {
      active = false;
    };
  }, [src, srcSet]);
  return loaded;
}
var Avatar = /*#__PURE__*/react.forwardRef(function Avatar(props, ref) {
  var alt = props.alt,
    childrenProp = props.children,
    classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    imgProps = props.imgProps,
    sizes = props.sizes,
    src = props.src,
    srcSet = props.srcSet,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'circular' : _props$variant,
    other = (0,objectWithoutProperties/* default */.A)(props, ["alt", "children", "classes", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);
  var children = null; // Use a hook instead of onError on the img element to support server-side rendering.

  var loaded = useLoaded({
    src: src,
    srcSet: srcSet
  });
  var hasImg = src || srcSet;
  var hasImgNotFailing = hasImg && loaded !== 'error';
  if (hasImgNotFailing) {
    children = /*#__PURE__*/react.createElement("img", (0,esm_extends/* default */.A)({
      alt: alt,
      src: src,
      srcSet: srcSet,
      sizes: sizes,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /*#__PURE__*/react.createElement(Person, {
      className: classes.fallback
    });
  }
  return /*#__PURE__*/react.createElement(Component, (0,esm_extends/* default */.A)({
    className: (0,clsx_m/* default */.A)(classes.root, classes.system, classes[variant], className, !hasImgNotFailing && classes.colorDefault),
    ref: ref
  }, other), children);
});
 false ? 0 : void 0;
/* harmony default export */ const Avatar_Avatar = ((0,withStyles/* default */.A)(styles, {
  name: 'MuiAvatar'
})(Avatar));

/***/ },

/***/ 5571
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82454);







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },
    /* Styles applied to the root element if `absolute={true}`. */
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },
    /* Styles applied to the root element if `variant="inset"`. */
    inset: {
      marginLeft: 72
    },
    /* Styles applied to the root element if `light={true}`. */
    light: {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .X4)(theme.palette.divider, 0.08)
    },
    /* Styles applied to the root element if `variant="middle"`. */
    middle: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      height: '100%',
      width: 1
    },
    /* Styles applied to the root element if `flexItem={true}`. */
    flexItem: {
      alignSelf: 'stretch',
      height: 'auto'
    }
  };
};
var Divider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Divider(props, ref) {
  var _props$absolute = props.absolute,
    absolute = _props$absolute === void 0 ? false : _props$absolute,
    classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'hr' : _props$component,
    _props$flexItem = props.flexItem,
    flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
    _props$light = props.light,
    light = _props$light === void 0 ? false : _props$light,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
    _props$role = props.role,
    role = _props$role === void 0 ? Component !== 'hr' ? 'separator' : undefined : _props$role,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["absolute", "classes", "className", "component", "flexItem", "light", "orientation", "role", "variant"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, variant !== 'fullWidth' && classes[variant], absolute && classes.absolute, flexItem && classes.flexItem, light && classes.light, orientation === 'vertical' && classes.vertical),
    role: role,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiDivider'
})(Divider));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 83152
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ Drawer_Drawer)
});

// UNUSED EXPORTS: getAnchor, isHorizontal, styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(80045);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(49644);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(50750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
var Backdrop = __webpack_require__(71233);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(71745);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(97950);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__(27355);
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(88692);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(60768);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(70567);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__(12899);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/transitions/utils.js
var utils = __webpack_require__(40830);
;// ./node_modules/@material-ui/core/esm/Slide/Slide.js











 // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `none`.`

function getTranslateValue(direction, node) {
  var rect = node.getBoundingClientRect();
  var transform;
  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }
  var offsetX = 0;
  var offsetY = 0;
  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }
  if (direction === 'left') {
    return "translateX(".concat(window.innerWidth, "px) translateX(").concat(offsetX - rect.left, "px)");
  }
  if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }
  if (direction === 'up') {
    return "translateY(".concat(window.innerHeight, "px) translateY(").concat(offsetY - rect.top, "px)");
  } // direction === 'down'

  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}
function setTranslateValue(direction, node) {
  var transform = getTranslateValue(direction, node);
  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
var defaultTimeout = {
  enter: transitions/* duration */.p0.enteringScreen,
  exit: transitions/* duration */.p0.leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = /*#__PURE__*/react.forwardRef(function Slide(props, ref) {
  var children = props.children,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'down' : _props$direction,
    inProp = props.in,
    onEnter = props.onEnter,
    onEntered = props.onEntered,
    onEntering = props.onEntering,
    onExit = props.onExit,
    onExited = props.onExited,
    onExiting = props.onExiting,
    style = props.style,
    _props$timeout = props.timeout,
    timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Transition/* default */.Ay : _props$TransitionComp,
    other = (0,objectWithoutProperties/* default */.A)(props, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);
  var theme = (0,useTheme/* default */.A)();
  var childrenRef = react.useRef(null);
  /**
   * used in cloneElement(children, { ref: handleRef })
   */

  var handleOwnRef = react.useCallback(function (instance) {
    // #StrictMode ready
    childrenRef.current = react_dom.findDOMNode(instance);
  }, []);
  var handleRefIntermediary = (0,useForkRef/* default */.A)(children.ref, handleOwnRef);
  var handleRef = (0,useForkRef/* default */.A)(handleRefIntermediary, ref);
  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (isAppearing) {
      if (callback) {
        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (isAppearing === undefined) {
          callback(childrenRef.current);
        } else {
          callback(childrenRef.current, isAppearing);
        }
      }
    };
  };
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    setTranslateValue(direction, node);
    (0,utils/* reflow */.q)(node);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var transitionProps = (0,utils/* getTransitionProps */.c)({
      timeout: timeout,
      style: style
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,esm_extends/* default */.A)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create('transform', (0,esm_extends/* default */.A)({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,utils/* getTransitionProps */.c)({
      timeout: timeout,
      style: style
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0,esm_extends/* default */.A)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create('transform', (0,esm_extends/* default */.A)({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(function (node) {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';
    if (onExited) {
      onExited(node);
    }
  });
  var updatePosition = react.useCallback(function () {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);
  react.useEffect(function () {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }
    var handleResize = (0,debounce/* default */.A)(function () {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp]);
  react.useEffect(function () {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.A)({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    appear: true,
    in: inProp,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react.cloneElement(children, (0,esm_extends/* default */.A)({
      ref: handleRef,
      style: (0,esm_extends/* default */.A)({
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, style, children.props.style)
    }, childProps));
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Slide_Slide = (Slide);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(20495);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(74822);
;// ./node_modules/@material-ui/core/esm/Drawer/Drawer.js













var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {},
    /* Styles applied to the root element if `variant="permanent or persistent"`. */
    docked: {
      flex: '0 0 auto'
    },
    /* Styles applied to the `Paper` component. */
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 0
    },
    /* Styles applied to the `Paper` component if `anchor="left"`. */
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },
    /* Styles applied to the `Paper` component if `anchor="right"`. */
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },
    /* Styles applied to the `Paper` component if `anchor="top"`. */
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },
    /* Styles applied to the `Paper` component if `anchor="bottom"`. */
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100%'
    },
    /* Styles applied to the `Paper` component if `anchor="left"` and `variant` is not "temporary". */
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Paper` component if `anchor="top"` and `variant` is not "temporary". */
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Paper` component if `anchor="right"` and `variant` is not "temporary". */
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Paper` component if `anchor="bottom"` and `variant` is not "temporary". */
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },
    /* Styles applied to the `Modal` component. */
    modal: {}
  };
};
var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};
function isHorizontal(anchor) {
  return ['left', 'right'].indexOf(anchor) !== -1;
}
function getAnchor(theme, anchor) {
  return theme.direction === 'rtl' && isHorizontal(anchor) ? oppositeDirection[anchor] : anchor;
}
var defaultTransitionDuration = {
  enter: transitions/* duration */.p0.enteringScreen,
  exit: transitions/* duration */.p0.leavingScreen
};
/**
 * The props of the [Modal](/api/modal/) component are available
 * when `variant="temporary"` is set.
 */

var Drawer = /*#__PURE__*/react.forwardRef(function Drawer(props, ref) {
  var _props$anchor = props.anchor,
    anchorProp = _props$anchor === void 0 ? 'left' : _props$anchor,
    BackdropProps = props.BackdropProps,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$elevation = props.elevation,
    elevation = _props$elevation === void 0 ? 16 : _props$elevation,
    _props$ModalProps = props.ModalProps;
  _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
  var BackdropPropsProp = _props$ModalProps.BackdropProps,
    ModalProps = (0,objectWithoutProperties/* default */.A)(_props$ModalProps, ["BackdropProps"]),
    onClose = props.onClose,
    _props$open = props.open,
    open = _props$open === void 0 ? false : _props$open,
    _props$PaperProps = props.PaperProps,
    PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
    SlideProps = props.SlideProps,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Slide_Slide : _props$TransitionComp,
    _props$transitionDura = props.transitionDuration,
    transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'temporary' : _props$variant,
    other = (0,objectWithoutProperties/* default */.A)(props, ["anchor", "BackdropProps", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"]);
  var theme = (0,useTheme/* default */.A)(); // Let's assume that the Drawer will always be rendered on user space.
  // We use this state is order to skip the appear transition during the
  // initial mount of the component.

  var mounted = react.useRef(false);
  react.useEffect(function () {
    mounted.current = true;
  }, []);
  var anchor = getAnchor(theme, anchorProp);
  var drawer = /*#__PURE__*/react.createElement(Paper/* default */.A, (0,esm_extends/* default */.A)({
    elevation: variant === 'temporary' ? elevation : 0,
    square: true
  }, PaperProps, {
    className: (0,clsx_m/* default */.A)(classes.paper, classes["paperAnchor".concat((0,capitalize/* default */.A)(anchor))], PaperProps.className, variant !== 'temporary' && classes["paperAnchorDocked".concat((0,capitalize/* default */.A)(anchor))])
  }), children);
  if (variant === 'permanent') {
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
      className: (0,clsx_m/* default */.A)(classes.root, classes.docked, className),
      ref: ref
    }, other), drawer);
  }
  var slidingDrawer = /*#__PURE__*/react.createElement(TransitionComponent, (0,esm_extends/* default */.A)({
    in: open,
    direction: oppositeDirection[anchor],
    timeout: transitionDuration,
    appear: mounted.current
  }, SlideProps), drawer);
  if (variant === 'persistent') {
    return /*#__PURE__*/react.createElement("div", (0,esm_extends/* default */.A)({
      className: (0,clsx_m/* default */.A)(classes.root, classes.docked, className),
      ref: ref
    }, other), slidingDrawer);
  } // variant === temporary

  return /*#__PURE__*/react.createElement(Modal/* default */.A, (0,esm_extends/* default */.A)({
    BackdropProps: (0,esm_extends/* default */.A)({}, BackdropProps, BackdropPropsProp, {
      transitionDuration: transitionDuration
    }),
    BackdropComponent: Backdrop/* default */.A,
    className: (0,clsx_m/* default */.A)(classes.root, classes.modal, className),
    open: open,
    onClose: onClose,
    ref: ref
  }, other, ModalProps), slidingDrawer);
});
 false ? 0 : void 0;
/* harmony default export */ const Drawer_Drawer = ((0,withStyles/* default */.A)(styles, {
  name: 'MuiDrawer',
  flip: false
})(Drawer));

/***/ },

/***/ 8713
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45982);







var styles = {
  /* Styles applied to the root element. */
  root: {
    minWidth: 56,
    flexShrink: 0
  },
  /* Styles applied to the root element when the parent `ListItem` uses `alignItems="flex-start"`. */
  alignItemsFlexStart: {
    marginTop: 8
  }
};
/**
 * A simple wrapper to apply `List` styles to an `Avatar`.
 */

var ListItemAvatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemAvatar(props, ref) {
  var classes = props.classes,
    className = props.className,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className"]);
  var context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, context.alignItems === 'flex-start' && classes.alignItemsFlexStart),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiListItemAvatar'
})(ListItemAvatar));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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

/***/ 27328
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_isMuiElement)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
;// ./node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js

function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf(
  // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName) !== -1;
}
;// ./node_modules/@mui/material/utils/isMuiElement.js

/* harmony default export */ const utils_isMuiElement = (isMuiElement);

/***/ },

/***/ 55013
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84440);
'use client';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 45479
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58355);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16260);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43666);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ },

/***/ 16819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58355);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16260);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43666);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ },

/***/ 32344
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ sub)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(45479);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(43666);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(58355);
;// ./node_modules/date-fns/esm/subDays/index.js



/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the days subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(dirtyDate, dirtyAmount) {
  (0,requiredArgs/* default */.A)(2, arguments);
  var amount = (0,toInteger/* default */.A)(dirtyAmount);
  return (0,addDays/* default */.A)(dirtyDate, -amount);
}
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMonths/index.js
var addMonths = __webpack_require__(16819);
;// ./node_modules/date-fns/esm/subMonths/index.js



/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(dirtyDate, dirtyAmount) {
  (0,requiredArgs/* default */.A)(2, arguments);
  var amount = (0,toInteger/* default */.A)(dirtyAmount);
  return (0,addMonths/* default */.A)(dirtyDate, -amount);
}
;// ./node_modules/date-fns/esm/sub/index.js





/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration) {
  (0,requiredArgs/* default */.A)(2, arguments);
  if (!duration || (0,esm_typeof/* default */.A)(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,toInteger/* default */.A)(duration.years) : 0;
  var months = duration.months ? (0,toInteger/* default */.A)(duration.months) : 0;
  var weeks = duration.weeks ? (0,toInteger/* default */.A)(duration.weeks) : 0;
  var days = duration.days ? (0,toInteger/* default */.A)(duration.days) : 0;
  var hours = duration.hours ? (0,toInteger/* default */.A)(duration.hours) : 0;
  var minutes = duration.minutes ? (0,toInteger/* default */.A)(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,toInteger/* default */.A)(duration.seconds) : 0;

  // Subtract years and months
  var dateWithoutMonths = subMonths(date, months + years * 12);

  // Subtract weeks and days
  var dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7);

  // Subtract hours, minutes and seconds
  var minutestoSub = minutes + hours * 60;
  var secondstoSub = seconds + minutestoSub * 60;
  var mstoSub = secondstoSub * 1000;
  var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
  return finalDate;
}

/***/ },

/***/ 51238
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_browser_v4)
});

;// ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }
  return getRandomValues(rnds8);
}
;// ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ const regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
;// ./node_modules/uuid/dist/esm-browser/validate.js

function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}
/* harmony default export */ const esm_browser_validate = (validate);
;// ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }
  return uuid;
}
/* harmony default export */ const esm_browser_stringify = (stringify);
;// ./node_modules/uuid/dist/esm-browser/v4.js


function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;
    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return esm_browser_stringify(rnds);
}
/* harmony default export */ const esm_browser_v4 = (v4);

/***/ },

/***/ 60574
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* unused harmony exports RuleType, compiler, sanitizer, slugify */
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);


function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
    }
    return e;
  }, n.apply(this, arguments);
}
const r = ["children", "options"],
  t = (/* unused pure expression or super */ null && ({
    blockQuote: "0",
    breakLine: "1",
    breakThematic: "2",
    codeBlock: "3",
    codeFenced: "4",
    codeInline: "5",
    footnote: "6",
    footnoteReference: "7",
    gfmTask: "8",
    heading: "9",
    headingSetext: "10",
    htmlBlock: "11",
    htmlComment: "12",
    htmlSelfClosing: "13",
    image: "14",
    link: "15",
    linkAngleBraceStyleDetector: "16",
    linkBareUrlDetector: "17",
    linkMailtoDetector: "18",
    newlineCoalescer: "19",
    orderedList: "20",
    paragraph: "21",
    ref: "22",
    refImage: "23",
    refLink: "24",
    table: "25",
    tableSeparator: "26",
    text: "27",
    textBolded: "28",
    textEmphasized: "29",
    textEscaped: "30",
    textMarked: "31",
    textStrikethroughed: "32",
    unorderedList: "33"
  })),
  o = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, n) => (e[n.toLowerCase()] = n, e), {
    class: "className",
    for: "htmlFor"
  }),
  a = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: "“"
  },
  c = ["style", "script", "pre"],
  i = ["src", "href", "data", "formAction", "srcDoc", "action"],
  u = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
  l = /\n{2,}$/,
  s = /^(\s*>[\s\S]*?)(?=\n\n|$)/,
  f = /^ *> ?/gm,
  _ = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/,
  d = /^ {2,}\n/,
  p = /^(?:([-*_])( *\1){2,}) *(?:\n *)+\n/,
  y = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/,
  h = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
  g = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/,
  m = /^(?:\n *)*\n/,
  k = /\r\n?/g,
  x = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,
  q = /^\[\^([^\]]+)]/,
  v = /\f/g,
  b = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
  $ = /^\s*?\[(x|\s)\]/,
  S = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  z = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
  E = /^([^\n]+)\n *(=|-)\2{2,} *\n/,
  A = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,
  R = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
  B = /^<!--[\s\S]*?(?:-->)/,
  L = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
  O = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
  j = /^\{.*\}$/,
  C = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  I = /^<([^ >]+[:@\/][^ >]+)>/,
  T = /-([a-z])?/gi,
  M = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,
  w = /^[^\n]+(?:  \n|\n{2,})/,
  D = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
  F = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
  P = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
  Z = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
  N = /\t/g,
  G = /(^ *\||\| *$)/g,
  U = /^ *:-+: *$/,
  V = /^ *:-+ *$/,
  H = /^ *-+: *$/,
  Q = e => "(?=[\\s\\S]+?\\1".concat(e ? "\\1" : "", ")"),
  W = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)",
  J = RegExp("^([*_])\\1".concat(Q(1)).concat(W, "\\1\\1(?!\\1)")),
  K = RegExp("^([*_])".concat(Q(0)).concat(W, "\\1(?!\\1)")),
  X = RegExp("^(==)".concat(Q(0)).concat(W, "\\1")),
  Y = RegExp("^(~~)".concat(Q(0)).concat(W, "\\1")),
  ee = /^(:[a-zA-Z0-9-_]+:)/,
  ne = /^\\([^0-9A-Za-z\s])/,
  re = /\\([^0-9A-Za-z\s])/g,
  te = /^[\s\S](?:(?!  \n|[0-9]\.|http)[^=*_~\-\n:<`\\\[!])*/,
  oe = /^\n+/,
  ae = /^([ \t]*)/,
  ce = /(?:^|\n)( *)$/,
  ie = "(?:\\d+\\.)",
  ue = "(?:[*+-])";
function le(e) {
  return "( *)(" + (1 === e ? ie : ue) + ") +";
}
const se = le(1),
  fe = le(2);
function _e(e) {
  return RegExp("^" + (1 === e ? se : fe));
}
const de = _e(1),
  pe = _e(2);
function ye(e) {
  return RegExp("^" + (1 === e ? se : fe) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? ie : ue) + " )[^\\n]*)*(\\n|$)", "gm");
}
const he = ye(1),
  ge = ye(2);
function me(e) {
  const n = 1 === e ? ie : ue;
  return RegExp("^( *)(" + n + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + n + " (?!" + n + " ))\\n*|\\s*\\n*$)");
}
const ke = me(1),
  xe = me(2);
function qe(e, n) {
  const r = 1 === n,
    t = r ? ke : xe,
    o = r ? he : ge,
    a = r ? de : pe;
  return {
    t: e => a.test(e),
    o: je(function (e, n) {
      const r = ce.exec(n.prevCapture);
      return r && (n.list || !n.inline && !n.simple) ? t.exec(e = r[1] + e) : null;
    }),
    i: 1,
    u(e, n, t) {
      const c = r ? +e[2] : void 0,
        i = e[0].replace(l, "\n").match(o);
      let u = !1;
      return {
        items: i.map(function (e, r) {
          const o = a.exec(e)[0].length,
            c = RegExp("^ {1," + o + "}", "gm"),
            l = e.replace(c, "").replace(a, ""),
            s = r === i.length - 1,
            f = -1 !== l.indexOf("\n\n") || s && u;
          u = f;
          const _ = t.inline,
            d = t.list;
          let p;
          t.list = !0, f ? (t.inline = !1, p = Se(l) + "\n\n") : (t.inline = !0, p = Se(l));
          const y = n(p, t);
          return t.inline = _, t.list = d, y;
        }),
        ordered: r,
        start: c
      };
    },
    l: (n, r, t) => e(n.ordered ? "ol" : "ul", {
      key: t.key,
      start: "20" === n.type ? n.start : void 0
    }, n.items.map(function (n, o) {
      return e("li", {
        key: o
      }, r(n, t));
    }))
  };
}
const ve = RegExp("^\\[((?:\\[[^\\[\\]]*(?:\\[[^\\[\\]]*\\][^\\[\\]]*)*\\]|[^\\[\\]])*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),
  be = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
function $e(e) {
  return "string" == typeof e;
}
function Se(e) {
  let n = e.length;
  for (; n > 0 && e[n - 1] <= " ";) n--;
  return e.slice(0, n);
}
function ze(e, n) {
  return e.startsWith(n);
}
function Ee(e, n, r) {
  if (Array.isArray(r)) {
    for (let n = 0; n < r.length; n++) if (ze(e, r[n])) return !0;
    return !1;
  }
  return r(e, n);
}
function Ae(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Re(e) {
  return H.test(e) ? "right" : U.test(e) ? "center" : V.test(e) ? "left" : null;
}
function Be(e, n, r, t) {
  const o = r.inTable;
  r.inTable = !0;
  let a = [[]],
    c = "";
  function i() {
    if (!c) return;
    const e = a[a.length - 1];
    e.push.apply(e, n(c, r)), c = "";
  }
  return e.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e, n, r) => {
    "|" === e.trim() && (i(), t) ? 0 !== n && n !== r.length - 1 && a.push([]) : c += e;
  }), i(), r.inTable = o, a;
}
function Le(e, n, r) {
  r.inline = !0;
  const t = e[2] ? e[2].replace(G, "").split("|").map(Re) : [],
    o = e[3] ? function (e, n, r) {
      return e.trim().split("\n").map(function (e) {
        return Be(e, n, r, !0);
      });
    }(e[3], n, r) : [],
    a = Be(e[1], n, r, !!o.length);
  return r.inline = !1, o.length ? {
    align: t,
    cells: o,
    header: a,
    type: "25"
  } : {
    children: a,
    type: "21"
  };
}
function Oe(e, n) {
  return null == e.align[n] ? {} : {
    textAlign: e.align[n]
  };
}
function je(e) {
  return e.inline = 1, e;
}
function Ce(e) {
  return je(function (n, r) {
    return r.inline ? e.exec(n) : null;
  });
}
function Ie(e) {
  return je(function (n, r) {
    return r.inline || r.simple ? e.exec(n) : null;
  });
}
function Te(e) {
  return function (n, r) {
    return r.inline || r.simple ? null : e.exec(n);
  };
}
function Me(e) {
  return je(function (n) {
    return e.exec(n);
  });
}
const we = /(javascript|vbscript|data(?!:image)):/i;
function De(e) {
  try {
    const n = decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "");
    if (we.test(n)) return null;
  } catch (e) {
    return null;
  }
  return e;
}
function Fe(e) {
  return e ? e.replace(re, "$1") : e;
}
function Pe(e, n, r) {
  const t = r.inline || !1,
    o = r.simple || !1;
  r.inline = !0, r.simple = !0;
  const a = e(n, r);
  return r.inline = t, r.simple = o, a;
}
function Ze(e, n, r) {
  const t = r.inline || !1,
    o = r.simple || !1;
  r.inline = !1, r.simple = !0;
  const a = e(n, r);
  return r.inline = t, r.simple = o, a;
}
function Ne(e, n, r) {
  const t = r.inline || !1;
  r.inline = !1;
  const o = e(n, r);
  return r.inline = t, o;
}
const Ge = (e, n, r) => ({
  children: Pe(n, e[2], r)
});
function Ue() {
  return {};
}
function Ve() {
  return null;
}
function He() {
  for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
    e[_key] = arguments[_key];
  }
  return e.filter(Boolean).join(" ");
}
function Qe(e, n, r) {
  let t = e;
  const o = n.split(".");
  for (; o.length && (t = t[o[0]], void 0 !== t);) o.shift();
  return t || r;
}
function We() {
  let r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  let t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  t.overrides = t.overrides || {}, t.namedCodesToUnicode = t.namedCodesToUnicode ? n({}, a, t.namedCodesToUnicode) : a;
  const l = t.slugify || Ae,
    G = t.sanitizer || De,
    U = t.createElement || react__WEBPACK_IMPORTED_MODULE_1__.createElement,
    V = [s, y, h, t.enforceAtxHeadings ? z : S, E, M, ke, xe],
    H = [...V, w, A, B, O];
  function Q(e, n) {
    for (let r = 0; r < e.length; r++) if (e[r].test(n)) return !0;
    return !1;
  }
  function W(e, r) {
    const a = Qe(t.overrides, e + ".props", {});
    for (var _len2 = arguments.length, o = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      o[_key2 - 2] = arguments[_key2];
    }
    return U(function (e, n) {
      const r = Qe(n, e);
      return r ? "function" == typeof r || "object" == typeof r && "render" in r ? r : Qe(n, e + ".component", e) : e;
    }(e, t.overrides), n({}, r, a, {
      className: He(null == r ? void 0 : r.className, a.className) || void 0
    }), ...o);
  }
  function re(e) {
    e = e.replace(b, "");
    let n = !1;
    t.forceInline ? n = !0 : t.forceBlock || (n = !1 === Z.test(e));
    const r = fe(se(n ? e : Se(e).replace(oe, "") + "\n\n", {
      inline: n
    }));
    for (; $e(r[r.length - 1]) && !r[r.length - 1].trim();) r.pop();
    if (null === t.wrapper) return r;
    const o = t.wrapper || (n ? "span" : "div");
    let a;
    if (r.length > 1 || t.forceWrapper) a = r;else {
      if (1 === r.length) return a = r[0], "string" == typeof a ? W("span", {
        key: "outer"
      }, a) : a;
      a = null;
    }
    return U(o, {
      key: "outer"
    }, a);
  }
  function ce(e, n) {
    if (!n || !n.trim()) return null;
    const r = n.match(u);
    return r ? r.reduce(function (n, r) {
      const t = r.indexOf("=");
      if (-1 !== t) {
        const a = function (e) {
            return -1 !== e.indexOf("-") && null === e.match(L) && (e = e.replace(T, function (e, n) {
              return n.toUpperCase();
            })), e;
          }(r.slice(0, t)).trim(),
          c = function (e) {
            const n = e[0];
            return ('"' === n || "'" === n) && e.length >= 2 && e[e.length - 1] === n ? e.slice(1, -1) : e;
          }(r.slice(t + 1).trim()),
          u = o[a] || a;
        if ("ref" === u) return n;
        const l = n[u] = function (e, n, r, t) {
          return "style" === n ? function (e) {
            const n = [];
            let r = "",
              t = !1,
              o = !1,
              a = "";
            if (!e) return n;
            for (let c = 0; c < e.length; c++) {
              const i = e[c];
              if ('"' !== i && "'" !== i || t || (o ? i === a && (o = !1, a = "") : (o = !0, a = i)), "(" === i && r.endsWith("url") ? t = !0 : ")" === i && t && (t = !1), ";" !== i || o || t) r += i;else {
                const e = r.trim();
                if (e) {
                  const r = e.indexOf(":");
                  if (r > 0) {
                    const t = e.slice(0, r).trim(),
                      o = e.slice(r + 1).trim();
                    n.push([t, o]);
                  }
                }
                r = "";
              }
            }
            const c = r.trim();
            if (c) {
              const e = c.indexOf(":");
              if (e > 0) {
                const r = c.slice(0, e).trim(),
                  t = c.slice(e + 1).trim();
                n.push([r, t]);
              }
            }
            return n;
          }(r).reduce(function (n, _ref) {
            let _ref2 = (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_ref, 2),
              r = _ref2[0],
              o = _ref2[1];
            return n[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t(o, e, r), n;
          }, {}) : -1 !== i.indexOf(n) ? t(Fe(r), e, n) : (r.match(j) && (r = Fe(r.slice(1, r.length - 1))), "true" === r || "false" !== r && r);
        }(e, a, c, G);
        "string" == typeof l && (A.test(l) || O.test(l)) && (n[u] = re(l.trim()));
      } else "style" !== r && (n[o[r] || r] = !0);
      return n;
    }, {}) : null;
  }
  const ie = [],
    ue = {},
    le = {
      0: {
        t: [">"],
        o: Te(s),
        i: 1,
        u(e, n, r) {
          const _e$0$replace$match = e[0].replace(f, "").match(_),
            _e$0$replace$match2 = (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_e$0$replace$match, 3),
            t = _e$0$replace$match2[1],
            o = _e$0$replace$match2[2];
          return {
            alert: t,
            children: n(o, r)
          };
        },
        l(e, n, r) {
          const t = {
            key: r.key
          };
          return e.alert && (t.className = "markdown-alert-" + l(e.alert.toLowerCase(), Ae), e.children.unshift({
            attrs: {},
            children: [{
              type: "27",
              text: e.alert
            }],
            noInnerParse: !0,
            type: "11",
            tag: "header"
          })), W("blockquote", t, n(e.children, r));
        }
      },
      1: {
        t: ["  "],
        o: Me(d),
        i: 1,
        u: Ue,
        l: (e, n, r) => W("br", {
          key: r.key
        })
      },
      2: {
        t: ["--", "__", "**", "- ", "* ", "_ "],
        o: Te(p),
        i: 1,
        u: Ue,
        l: (e, n, r) => W("hr", {
          key: r.key
        })
      },
      3: {
        t: ["    "],
        o: Te(h),
        i: 0,
        u: e => ({
          lang: void 0,
          text: Fe(Se(e[0].replace(/^ {4}/gm, "")))
        }),
        l: (e, r, t) => W("pre", {
          key: t.key
        }, W("code", n({}, e.attrs, {
          className: e.lang ? "lang-" + e.lang : ""
        }), e.text))
      },
      4: {
        t: ["```", "~~~"],
        o: Te(y),
        i: 0,
        u: e => ({
          attrs: ce("code", e[3] || ""),
          lang: e[2] || void 0,
          text: e[4],
          type: "3"
        })
      },
      5: {
        t: ["`"],
        o: Ie(g),
        i: 3,
        u: e => ({
          text: Fe(e[2])
        }),
        l: (e, n, r) => W("code", {
          key: r.key
        }, e.text)
      },
      6: {
        t: ["[^"],
        o: Te(x),
        i: 0,
        u: e => (ie.push({
          footnote: e[2],
          identifier: e[1]
        }), {}),
        l: Ve
      },
      7: {
        t: ["[^"],
        o: Ce(q),
        i: 1,
        u: e => ({
          target: "#" + l(e[1], Ae),
          text: e[1]
        }),
        l: (e, n, r) => W("a", {
          key: r.key,
          href: G(e.target, "a", "href")
        }, W("sup", {
          key: r.key
        }, e.text))
      },
      8: {
        t: ["[ ]", "[x]"],
        o: Ce($),
        i: 1,
        u: e => ({
          completed: "x" === e[1].toLowerCase()
        }),
        l: (e, n, r) => W("input", {
          checked: e.completed,
          key: r.key,
          readOnly: !0,
          type: "checkbox"
        })
      },
      9: {
        t: ["#"],
        o: Te(t.enforceAtxHeadings ? z : S),
        i: 1,
        u: (e, n, r) => ({
          children: Pe(n, e[2], r),
          id: l(e[2], Ae),
          level: e[1].length
        }),
        l: (e, n, r) => W("h" + e.level, {
          id: e.id,
          key: r.key
        }, n(e.children, r))
      },
      10: {
        t: e => {
          const n = e.indexOf("\n");
          return n > 0 && n < e.length - 1 && ("=" === e[n + 1] || "-" === e[n + 1]);
        },
        o: Te(E),
        i: 1,
        u: (e, n, r) => ({
          children: Pe(n, e[1], r),
          level: "=" === e[2] ? 1 : 2,
          type: "9"
        })
      },
      11: {
        t: ["<"],
        o: Me(A),
        i: 1,
        u(e, n, r) {
          const _e$3$match = e[3].match(ae),
            _e$3$match2 = (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_e$3$match, 2),
            t = _e$3$match2[1],
            o = RegExp("^" + t, "gm"),
            a = e[3].replace(o, ""),
            i = Q(H, a) ? Ne : Pe,
            u = e[1].toLowerCase(),
            l = -1 !== c.indexOf(u),
            s = (l ? u : e[1]).trim(),
            f = {
              attrs: ce(s, e[2]),
              noInnerParse: l,
              tag: s
            };
          if (r.inAnchor = r.inAnchor || "a" === u, l) f.text = e[3];else {
            const e = r.inHTML;
            r.inHTML = !0, f.children = i(n, a, r), r.inHTML = e;
          }
          return r.inAnchor = !1, f;
        },
        l: (e, r, t) => W(e.tag, n({
          key: t.key
        }, e.attrs), e.text || (e.children ? r(e.children, t) : ""))
      },
      13: {
        t: ["<"],
        o: Me(O),
        i: 1,
        u(e) {
          const n = e[1].trim();
          return {
            attrs: ce(n, e[2] || ""),
            tag: n
          };
        },
        l: (e, r, t) => W(e.tag, n({}, e.attrs, {
          key: t.key
        }))
      },
      12: {
        t: ["\x3c!--"],
        o: Me(B),
        i: 1,
        u: () => ({}),
        l: Ve
      },
      14: {
        t: ["!["],
        o: Ie(be),
        i: 1,
        u: e => ({
          alt: Fe(e[1]),
          target: Fe(e[2]),
          title: Fe(e[3])
        }),
        l: (e, n, r) => W("img", {
          key: r.key,
          alt: e.alt || void 0,
          title: e.title || void 0,
          src: G(e.target, "img", "src")
        })
      },
      15: {
        t: ["["],
        o: Ce(ve),
        i: 3,
        u: (e, n, r) => ({
          children: Ze(n, e[1], r),
          target: Fe(e[2]),
          title: Fe(e[3])
        }),
        l: (e, n, r) => W("a", {
          key: r.key,
          href: G(e.target, "a", "href"),
          title: e.title
        }, n(e.children, r))
      },
      16: {
        t: ["<"],
        o: Ce(I),
        i: 0,
        u(e) {
          let n = e[1],
            r = !1;
          return -1 !== n.indexOf("@") && -1 === n.indexOf("//") && (r = !0, n = n.replace("mailto:", "")), {
            children: [{
              text: n,
              type: "27"
            }],
            target: r ? "mailto:" + n : n,
            type: "15"
          };
        }
      },
      17: {
        t: (e, n) => !n.inAnchor && !t.disableAutoLink && (ze(e, "http://") || ze(e, "https://")),
        o: Ce(C),
        i: 0,
        u: e => ({
          children: [{
            text: e[1],
            type: "27"
          }],
          target: e[1],
          title: void 0,
          type: "15"
        })
      },
      20: qe(W, 1),
      33: qe(W, 2),
      19: {
        t: ["\n"],
        o: Te(m),
        i: 3,
        u: Ue,
        l: () => "\n"
      },
      21: {
        o: je(function (e, n) {
          if (n.inline || n.simple || n.inHTML && -1 === e.indexOf("\n\n") && -1 === n.prevCapture.indexOf("\n\n")) return null;
          let r = "",
            t = 0;
          for (;;) {
            const n = e.indexOf("\n", t),
              o = e.slice(t, -1 === n ? void 0 : n + 1);
            if (Q(V, o)) break;
            if (r += o, -1 === n || !o.trim()) break;
            t = n + 1;
          }
          const o = Se(r);
          return "" === o ? null : [r,, o];
        }),
        i: 3,
        u: Ge,
        l: (e, n, r) => W("p", {
          key: r.key
        }, n(e.children, r))
      },
      22: {
        t: ["["],
        o: Ce(D),
        i: 0,
        u: e => (ue[e[1]] = {
          target: e[2],
          title: e[4]
        }, {}),
        l: Ve
      },
      23: {
        t: ["!["],
        o: Ie(F),
        i: 0,
        u: e => ({
          alt: e[1] ? Fe(e[1]) : void 0,
          ref: e[2]
        }),
        l: (e, n, r) => ue[e.ref] ? W("img", {
          key: r.key,
          alt: e.alt,
          src: G(ue[e.ref].target, "img", "src"),
          title: ue[e.ref].title
        }) : null
      },
      24: {
        t: e => "[" === e[0] && -1 === e.indexOf("]("),
        o: Ce(P),
        i: 0,
        u: (e, n, r) => ({
          children: n(e[1], r),
          fallbackChildren: e[0],
          ref: e[2]
        }),
        l: (e, n, r) => ue[e.ref] ? W("a", {
          key: r.key,
          href: G(ue[e.ref].target, "a", "href"),
          title: ue[e.ref].title
        }, n(e.children, r)) : W("span", {
          key: r.key
        }, e.fallbackChildren)
      },
      25: {
        t: ["|"],
        o: Te(M),
        i: 1,
        u: Le,
        l(e, n, r) {
          const t = e;
          return W("table", {
            key: r.key
          }, W("thead", null, W("tr", null, t.header.map(function (e, o) {
            return W("th", {
              key: o,
              style: Oe(t, o)
            }, n(e, r));
          }))), W("tbody", null, t.cells.map(function (e, o) {
            return W("tr", {
              key: o
            }, e.map(function (e, o) {
              return W("td", {
                key: o,
                style: Oe(t, o)
              }, n(e, r));
            }));
          })));
        }
      },
      27: {
        o: je(function (e, n) {
          let r;
          return ze(e, ":") && (r = ee.exec(e)), r || te.exec(e);
        }),
        i: 4,
        u(e) {
          const n = e[0];
          return {
            text: -1 === n.indexOf("&") ? n : n.replace(R, (e, n) => t.namedCodesToUnicode[n] || e)
          };
        },
        l: e => e.text
      },
      28: {
        t: ["**", "__"],
        o: Ie(J),
        i: 2,
        u: (e, n, r) => ({
          children: n(e[2], r)
        }),
        l: (e, n, r) => W("strong", {
          key: r.key
        }, n(e.children, r))
      },
      29: {
        t: e => {
          const n = e[0];
          return ("*" === n || "_" === n) && e[1] !== n;
        },
        o: Ie(K),
        i: 3,
        u: (e, n, r) => ({
          children: n(e[2], r)
        }),
        l: (e, n, r) => W("em", {
          key: r.key
        }, n(e.children, r))
      },
      30: {
        t: ["\\"],
        o: Ie(ne),
        i: 1,
        u: e => ({
          text: e[1],
          type: "27"
        })
      },
      31: {
        t: ["=="],
        o: Ie(X),
        i: 3,
        u: Ge,
        l: (e, n, r) => W("mark", {
          key: r.key
        }, n(e.children, r))
      },
      32: {
        t: ["~~"],
        o: Ie(Y),
        i: 3,
        u: Ge,
        l: (e, n, r) => W("del", {
          key: r.key
        }, n(e.children, r))
      }
    };
  !0 === t.disableParsingRawHTML && (delete le[11], delete le[13]);
  const se = function (e) {
      var n = Object.keys(e);
      function r(t, o) {
        var a = [];
        if (o.prevCapture = o.prevCapture || "", t.trim()) for (; t;) for (var c = 0; c < n.length;) {
          var i = n[c],
            u = e[i];
          if (!u.t || Ee(t, o, u.t)) {
            var l = u.o(t, o);
            if (l && l[0]) {
              t = t.substring(l[0].length);
              var s = u.u(l, r, o);
              o.prevCapture += l[0], s.type || (s.type = i), a.push(s);
              break;
            }
            c++;
          } else c++;
        }
        return o.prevCapture = "", a;
      }
      return n.sort(function (n, r) {
        return e[n].i - e[r].i || (n < r ? -1 : 1);
      }), function (e, n) {
        return r(function (e) {
          return e.replace(k, "\n").replace(v, "").replace(N, "    ");
        }(e), n);
      };
    }(le),
    fe = function (e, n) {
      return function r(t) {
        let o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (Array.isArray(t)) {
          const e = o.key,
            n = [];
          let a = !1;
          for (let e = 0; e < t.length; e++) {
            o.key = e;
            const c = r(t[e], o),
              i = $e(c);
            i && a ? n[n.length - 1] += c : null !== c && n.push(c), a = i;
          }
          return o.key = e, n;
        }
        return function (r, t, o) {
          const a = e[r.type].l;
          return n ? n(() => a(r, t, o), r, t, o) : a(r, t, o);
        }(t, r, o);
      };
    }(le, t.renderRule),
    _e = re(r);
  return ie.length ? W("div", null, _e, W("footer", {
    key: "footer"
  }, ie.map(function (e) {
    return W("div", {
      id: l(e.identifier, Ae),
      key: e.identifier
    }, e.identifier, fe(se(e.footnote, {
      inline: !0
    })));
  }))) : _e;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (n => {
  let t = n.children,
    o = n.options,
    a = function (e, n) {
      if (null == e) return {};
      var r,
        t,
        o = {},
        a = Object.keys(e);
      for (t = 0; t < a.length; t++) n.indexOf(r = a[t]) >= 0 || (o[r] = e[r]);
      return o;
    }(n, r);
  return react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(We(null == t ? "" : t, o), a);
});
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "Ay", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);