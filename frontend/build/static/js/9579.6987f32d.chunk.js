"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[9579],{

/***/ 9579
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports styles, testReset */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64467);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65043);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97950);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49644);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73806);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82454);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71745);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74822);
/* harmony import */ var _Grow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51575);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35007);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60768);
/* harmony import */ var _utils_unstable_useId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(42237);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29189);
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(54455);
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(51051);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70567);




















function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
function arrowGenerator() {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.71em',
      marginLeft: 4,
      marginRight: 4,
      '&::before': {
        transformOrigin: '0 100%'
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.71em',
      marginLeft: 4,
      marginRight: 4,
      '&::before': {
        transformOrigin: '100% 0'
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.71em',
      height: '1em',
      width: '0.71em',
      marginTop: 4,
      marginBottom: 4,
      '&::before': {
        transformOrigin: '100% 100%'
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.71em',
      height: '1em',
      width: '0.71em',
      marginTop: 4,
      marginBottom: 4,
      '&::before': {
        transformOrigin: '0 0'
      }
    }
  };
}
var styles = function styles(theme) {
  return {
    /* Styles applied to the Popper component. */
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none' // disable jss-rtl plugin
    },
    /* Styles applied to the Popper component if `interactive={true}`. */
    popperInteractive: {
      pointerEvents: 'auto'
    },
    /* Styles applied to the Popper component if `arrow={true}`. */
    popperArrow: arrowGenerator(),
    /* Styles applied to the tooltip (label wrapper) element. */
    tooltip: {
      backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__/* .alpha */ .X4)(theme.palette.grey[700], 0.9),
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.common.white,
      fontFamily: theme.typography.fontFamily,
      padding: '4px 8px',
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(round(14 / 10), "em"),
      maxWidth: 300,
      wordWrap: 'break-word',
      fontWeight: theme.typography.fontWeightMedium
    },
    /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
    tooltipArrow: {
      position: 'relative',
      margin: '0'
    },
    /* Styles applied to the arrow element. */
    arrow: {
      overflow: 'hidden',
      position: 'absolute',
      width: '1em',
      height: '0.71em'
      /* = width / sqrt(2) = (length of the hypotenuse) */,

      boxSizing: 'border-box',
      color: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_8__/* .alpha */ .X4)(theme.palette.grey[700], 0.9),
      '&::before': {
        content: '""',
        margin: 'auto',
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundColor: 'currentColor',
        transform: 'rotate(45deg)'
      }
    },
    /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
    touch: {
      padding: '8px 16px',
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(round(16 / 14), "em"),
      fontWeight: theme.typography.fontWeightRegular
    },
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
    tooltipPlacementLeft: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
      transformOrigin: 'right center',
      margin: '0 24px '
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
    tooltipPlacementRight: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
      transformOrigin: 'left center',
      margin: '0 24px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
    tooltipPlacementTop: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
      transformOrigin: 'center bottom',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
    tooltipPlacementBottom: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
      transformOrigin: 'center top',
      margin: '24px 0'
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};
var hystersisOpen = false;
var hystersisTimer = null;
function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}
var Tooltip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function Tooltip(props, ref) {
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    children = props.children,
    classes = props.classes,
    _props$disableFocusLi = props.disableFocusListener,
    disableFocusListener = _props$disableFocusLi === void 0 ? false : _props$disableFocusLi,
    _props$disableHoverLi = props.disableHoverListener,
    disableHoverListener = _props$disableHoverLi === void 0 ? false : _props$disableHoverLi,
    _props$disableTouchLi = props.disableTouchListener,
    disableTouchListener = _props$disableTouchLi === void 0 ? false : _props$disableTouchLi,
    _props$enterDelay = props.enterDelay,
    enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay,
    _props$enterNextDelay = props.enterNextDelay,
    enterNextDelay = _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay,
    _props$enterTouchDela = props.enterTouchDelay,
    enterTouchDelay = _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela,
    idProp = props.id,
    _props$interactive = props.interactive,
    interactive = _props$interactive === void 0 ? false : _props$interactive,
    _props$leaveDelay = props.leaveDelay,
    leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay,
    _props$leaveTouchDela = props.leaveTouchDelay,
    leaveTouchDelay = _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela,
    onClose = props.onClose,
    onOpen = props.onOpen,
    openProp = props.open,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    _props$PopperComponen = props.PopperComponent,
    PopperComponent = _props$PopperComponen === void 0 ? _Popper__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A : _props$PopperComponen,
    PopperProps = props.PopperProps,
    title = props.title,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? _Grow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A : _props$TransitionComp,
    TransitionProps = props.TransitionProps,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(props, ["arrow", "children", "classes", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "id", "interactive", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"]);
  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A)();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(),
    childNode = _React$useState[0],
    setChildNode = _React$useState[1];
  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_4__.useState(null),
    arrowRef = _React$useState2[0],
    setArrowRef = _React$useState2[1];
  var ignoreNonTouchEvents = react__WEBPACK_IMPORTED_MODULE_4__.useRef(false);
  var closeTimer = react__WEBPACK_IMPORTED_MODULE_4__.useRef();
  var enterTimer = react__WEBPACK_IMPORTED_MODULE_4__.useRef();
  var leaveTimer = react__WEBPACK_IMPORTED_MODULE_4__.useRef();
  var touchTimer = react__WEBPACK_IMPORTED_MODULE_4__.useRef();
  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)({
      controlled: openProp,
      default: false,
      name: 'Tooltip',
      state: 'open'
    }),
    _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useControlled, 2),
    openState = _useControlled2[0],
    setOpenState = _useControlled2[1];
  var open = openState;
  if (false) // removed by dead control flow
{ var _React$useRef, isControlled; }
  var id = (0,_utils_unstable_useId__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(idProp);
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    return function () {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);
  var handleOpen = function handleOpen(event) {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    setOpenState(true);
    if (onOpen) {
      onOpen(event);
    }
  };
  var handleEnter = function handleEnter() {
    var forward = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (event) {
      var childrenProps = children.props;
      if (event.type === 'mouseover' && childrenProps.onMouseOver && forward) {
        childrenProps.onMouseOver(event);
      }
      if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
        return;
      } // Remove the title ahead of time.
      // We don't want to wait for the next render commit.
      // We would risk displaying two tooltips at the same time (native + this one).

      if (childNode) {
        childNode.removeAttribute('title');
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      if (enterDelay || hystersisOpen && enterNextDelay) {
        event.persist();
        enterTimer.current = setTimeout(function () {
          handleOpen(event);
        }, hystersisOpen ? enterNextDelay : enterDelay);
      } else {
        handleOpen(event);
      }
    };
  };
  var _useIsFocusVisible = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(),
    isFocusVisible = _useIsFocusVisible.isFocusVisible,
    onBlurVisible = _useIsFocusVisible.onBlurVisible,
    focusVisibleRef = _useIsFocusVisible.ref;
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState(false),
    childIsFocusVisible = _React$useState3[0],
    setChildIsFocusVisible = _React$useState3[1];
  var handleBlur = function handleBlur() {
    if (childIsFocusVisible) {
      setChildIsFocusVisible(false);
      onBlurVisible();
    }
  };
  var handleFocus = function handleFocus() {
    var forward = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (event) {
      // Workaround for https://github.com/facebook/react/issues/7769
      // The autoFocus of React might trigger the event before the componentDidMount.
      // We need to account for this eventuality.
      if (!childNode) {
        setChildNode(event.currentTarget);
      }
      if (isFocusVisible(event)) {
        setChildIsFocusVisible(true);
        handleEnter()(event);
      }
      var childrenProps = children.props;
      if (childrenProps.onFocus && forward) {
        childrenProps.onFocus(event);
      }
    };
  };
  var handleClose = function handleClose(event) {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(function () {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);
    if (onClose) {
      onClose(event);
    }
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(function () {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  };
  var handleLeave = function handleLeave() {
    var forward = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return function (event) {
      var childrenProps = children.props;
      if (event.type === 'blur') {
        if (childrenProps.onBlur && forward) {
          childrenProps.onBlur(event);
        }
        handleBlur();
      }
      if (event.type === 'mouseleave' && childrenProps.onMouseLeave && event.currentTarget === childNode) {
        childrenProps.onMouseLeave(event);
      }
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      event.persist();
      leaveTimer.current = setTimeout(function () {
        handleClose(event);
      }, leaveDelay);
    };
  };
  var detectTouchStart = function detectTouchStart(event) {
    ignoreNonTouchEvents.current = true;
    var childrenProps = children.props;
    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };
  var handleTouchStart = function handleTouchStart(event) {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    clearTimeout(touchTimer.current);
    event.persist();
    touchTimer.current = setTimeout(function () {
      handleEnter()(event);
    }, enterTouchDelay);
  };
  var handleTouchEnd = function handleTouchEnd(event) {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    clearTimeout(touchTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveTouchDelay);
  };
  var handleUseRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(setChildNode, ref);
  var handleFocusRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(focusVisibleRef, handleUseRef); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_4__.useCallback(function (instance) {
    // #StrictMode ready
    (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(handleFocusRef, react_dom__WEBPACK_IMPORTED_MODULE_5__.findDOMNode(instance));
  }, [handleFocusRef]);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)(children.ref, handleOwnRef); // There is no point in displaying an empty tooltip.

  if (title === '') {
    open = false;
  } // For accessibility and SEO concerns, we render the title to the DOM node when
  // the tooltip is hidden. However, we have made a tradeoff when
  // `disableHoverListener` is set. This title logic is disabled.
  // It's allowing us to keep the implementation size minimal.
  // We are open to change the tradeoff.

  var shouldShowNativeTitle = !open && !disableHoverListener;
  var childrenProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    'aria-describedby': open ? id : null,
    title: shouldShowNativeTitle && typeof title === 'string' ? title : null
  }, other, children.props, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  });
  var interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = handleEnter();
    childrenProps.onMouseLeave = handleLeave();
    if (interactive) {
      interactiveWrapperListeners.onMouseOver = handleEnter(false);
      interactiveWrapperListeners.onMouseLeave = handleLeave(false);
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = handleFocus();
    childrenProps.onBlur = handleLeave();
    if (interactive) {
      interactiveWrapperListeners.onFocus = handleFocus(false);
      interactiveWrapperListeners.onBlur = handleLeave(false);
    }
  }
  if (false) // removed by dead control flow
{}
  var mergedPopperProps = react__WEBPACK_IMPORTED_MODULE_4__.useMemo(function () {
    return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)({
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef
          }
        }
      }
    }, PopperProps);
  }, [arrowRef, PopperProps]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.cloneElement(children, childrenProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(PopperComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(classes.popper, interactive && classes.popperInteractive, arrow && classes.popperArrow),
    placement: placement,
    anchorEl: childNode,
    open: childNode ? open : false,
    id: childrenProps['aria-describedby'],
    transition: true
  }, interactiveWrapperListeners, mergedPopperProps), function (_ref) {
    var placementInner = _ref.placement,
      TransitionPropsInner = _ref.TransitionProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      timeout: theme.transitions.duration.shorter
    }, TransitionPropsInner, TransitionProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(classes.tooltip, classes["tooltipPlacement".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(placementInner.split('-')[0]))], ignoreNonTouchEvents.current && classes.touch, arrow && classes.tooltipArrow)
    }, title, arrow ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      className: classes.arrow,
      ref: setArrowRef
    }) : null));
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(styles, {
  name: 'MuiTooltip',
  flip: false
})(Tooltip));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "Ay", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);