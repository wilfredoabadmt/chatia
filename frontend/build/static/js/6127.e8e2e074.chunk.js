"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[6127],{

/***/ 71233
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28073);







var styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },
  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Backdrop(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$invisible = props.invisible,
    invisible = _props$invisible === void 0 ? false : _props$invisible,
    open = props.open,
    transitionDuration = props.transitionDuration,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A : _props$TransitionComp,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiBackdrop'
})(Backdrop));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 35801
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64467);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74822);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50750);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71233);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28073);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12899);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20495);














var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },
    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },
    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },
    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },
    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },
    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11
    },
    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },
    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },
    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },
    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },
    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_10__/* .duration */ .p0.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_10__/* .duration */ .p0.leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$disableBackdro = props.disableBackdropClick,
    disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
    _props$disableEscapeK = props.disableEscapeKeyDown,
    disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
    _props$fullScreen = props.fullScreen,
    fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
    onBackdropClick = props.onBackdropClick,
    onClose = props.onClose,
    onEnter = props.onEnter,
    onEntered = props.onEntered,
    onEntering = props.onEntering,
    onEscapeKeyDown = props.onEscapeKeyDown,
    onExit = props.onExit,
    onExited = props.onExited,
    onExiting = props.onExiting,
    open = props.open,
    _props$PaperComponent = props.PaperComponent,
    PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A : _props$PaperComponent,
    _props$PaperProps = props.PaperProps,
    PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
    _props$scroll = props.scroll,
    scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A : _props$TransitionComp,
    _props$transitionDura = props.transitionDuration,
    transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
    TransitionProps = props.TransitionProps,
    ariaDescribedby = props['aria-describedby'],
    ariaLabelledby = props['aria-labelledby'],
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);
  var mouseDownTarget = react__WEBPACK_IMPORTED_MODULE_3__.useRef();
  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };
  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.

    if (event.target !== mouseDownTarget.current) {
      return;
    }
    mouseDownTarget.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, className),
    BackdropComponent: _Backdrop__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,
    BackdropProps: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true
  }, disableBackdropClick ? {
    disableBackdropClick: disableBackdropClick
  } : {}, {
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.container, classes["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(PaperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.paper, classes["paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(scroll))], classes["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiDialog'
})(Dialog));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 43867
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },
    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function DialogContent(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$dividers = props.dividers,
    dividers = _props$dividers === void 0 ? false : _props$dividers,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "dividers"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiDialogContent'
})(DialogContent));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 28073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88692);
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12899);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70567);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40830);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60768);










var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__/* .duration */ .p0.enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_5__/* .duration */ .p0.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Fade(props, ref) {
  var children = props.children,
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
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Ay : _props$TransitionComp,
    _props$timeout = props.timeout,
    timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);
  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__.useRef(null);
  var foreignRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(children.ref, ref);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(enableStrictModeCompat ? nodeRef : undefined, foreignRef);
  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
          _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref, 2),
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
  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .reflow */ .q)(node); // So the animation always start from the start.

    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .c)({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_7__/* .getTransitionProps */ .c)({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);