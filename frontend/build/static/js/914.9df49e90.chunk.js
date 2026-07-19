(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[914],{

/***/ 84373
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/***/ },

/***/ 38595
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _objectSpread = (__webpack_require__(12897)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.anchorRef = anchorRef;
exports.bindContextMenu = bindContextMenu;
exports.bindDialog = bindDialog;
exports.bindDoubleClick = bindDoubleClick;
exports.bindFocus = bindFocus;
exports.bindHover = bindHover;
exports.bindMenu = bindMenu;
exports.bindPopover = bindPopover;
exports.bindPopper = bindPopper;
exports.bindToggle = bindToggle;
exports.bindTrigger = bindTrigger;
exports.createPopupState = createPopupState;
exports.initCoreState = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/* eslint-env browser */
const printedWarnings = {};
function warn(key, message) {
  if (printedWarnings[key]) return;
  printedWarnings[key] = true;
  console.error('[material-ui-popup-state] WARNING', message); // eslint-disable-line no-console
}
const initCoreState = {
  isOpen: false,
  setAnchorElUsed: false,
  anchorEl: null,
  anchorPosition: undefined,
  hovered: false,
  focused: false,
  _openEventType: null,
  _childPopupState: null,
  _deferNextOpen: false,
  _deferNextClose: false
};
exports.initCoreState = initCoreState;
function createPopupState(_ref) {
  let state = _ref.state,
    _setState = _ref.setState,
    parentPopupState = _ref.parentPopupState,
    popupId = _ref.popupId,
    variant = _ref.variant,
    disableAutoFocus = _ref.disableAutoFocus;
  const isOpen = state.isOpen,
    setAnchorElUsed = state.setAnchorElUsed,
    anchorEl = state.anchorEl,
    anchorPosition = state.anchorPosition,
    hovered = state.hovered,
    focused = state.focused,
    _openEventType = state._openEventType,
    _childPopupState = state._childPopupState,
    _deferNextOpen = state._deferNextOpen,
    _deferNextClose = state._deferNextClose; // use lastState to workaround cases where setState is called multiple times
  // in a single render (e.g. because of refs being called multiple times)

  let lastState = state;
  const setState = nextState => {
    if (hasChanges(lastState, nextState)) {
      _setState(lastState = _objectSpread(_objectSpread({}, lastState), nextState));
    }
  };
  const setAnchorEl = _anchorEl => {
    setState({
      setAnchorElUsed: true,
      anchorEl: _anchorEl
    });
  };
  const toggle = eventOrAnchorEl => {
    if (isOpen) close(eventOrAnchorEl);else open(eventOrAnchorEl);
  };
  const open = eventOrAnchorEl => {
    const eventType = eventOrAnchorEl && eventOrAnchorEl.type;
    const currentTarget = eventOrAnchorEl && eventOrAnchorEl.currentTarget;
    const clientX = eventOrAnchorEl && eventOrAnchorEl.clientX;
    const clientY = eventOrAnchorEl && eventOrAnchorEl.clientY;
    const anchorPosition = typeof clientX === 'number' && typeof clientY === 'number' ? {
      left: clientX,
      top: clientY
    } : undefined;
    if (eventType === 'touchstart') {
      setState({
        _deferNextOpen: true
      });
      return;
    }
    const doOpen = () => {
      if (!eventOrAnchorEl && !setAnchorElUsed) {
        warn('missingEventOrAnchorEl', 'eventOrAnchorEl should be defined if setAnchorEl is not used');
      }
      if (parentPopupState) {
        if (!parentPopupState.isOpen) return;
        parentPopupState._setChildPopupState(popupState);
      }
      const newState = {
        isOpen: true,
        anchorPosition,
        hovered: eventType === 'mouseover' || hovered,
        focused: eventType === 'focus' || focused,
        _openEventType: eventType
      };
      if (currentTarget) {
        if (!setAnchorElUsed) {
          newState.anchorEl = currentTarget;
        }
      } else if (eventOrAnchorEl) {
        newState.anchorEl = eventOrAnchorEl;
      }
      setState(newState);
    };
    if (_deferNextOpen) {
      setState({
        _deferNextOpen: false
      });
      setTimeout(doOpen, 0);
    } else {
      doOpen();
    }
  };
  const close = arg => {
    const eventType = arg && arg.type;
    switch (eventType) {
      case 'touchstart':
        setState({
          _deferNextClose: true
        });
        return;
    }
    const doClose = () => {
      if (_childPopupState) _childPopupState.close();
      if (parentPopupState) parentPopupState._setChildPopupState(null);
      setState({
        isOpen: false,
        hovered: false,
        focused: false
      });
    };
    if (_deferNextClose) {
      setState({
        _deferNextClose: false
      });
      setTimeout(doClose, 0);
    } else {
      doClose();
    }
  };
  const setOpen = (nextOpen, eventOrAnchorEl) => {
    if (nextOpen) {
      open(eventOrAnchorEl);
    } else close(eventOrAnchorEl);
  };
  const onMouseLeave = event => {
    const relatedTarget = event.relatedTarget;
    if (hovered && !isElementInPopup(relatedTarget, popupState)) {
      if (focused) {
        setState({
          hovered: false
        });
      } else {
        close(event);
      }
    }
  };
  const onBlur = event => {
    const relatedTarget = event.relatedTarget;
    if (focused && !isElementInPopup(relatedTarget, popupState)) {
      if (hovered) {
        setState({
          focused: false
        });
      } else {
        close(event);
      }
    }
  };
  const _setChildPopupState = _childPopupState => setState({
    _childPopupState
  });
  const popupState = {
    anchorEl,
    anchorPosition,
    setAnchorEl,
    setAnchorElUsed,
    popupId,
    variant,
    isOpen,
    open,
    close,
    toggle,
    setOpen,
    onBlur,
    onMouseLeave,
    disableAutoFocus: disableAutoFocus !== null && disableAutoFocus !== void 0 ? disableAutoFocus : Boolean(hovered || focused),
    _openEventType,
    _childPopupState,
    _setChildPopupState
  };
  return popupState;
}
/**
 * Creates a ref that sets the anchorEl for the popup.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function anchorRef(_ref2) {
  let setAnchorEl = _ref2.setAnchorEl;
  return el => {
    if (el) setAnchorEl(el);
  };
}
function controlAriaProps(_ref3) {
  let isOpen = _ref3.isOpen,
    open = _ref3.open,
    popupId = _ref3.popupId,
    variant = _ref3.variant;
  return _objectSpread({}, variant === 'popover' ? {
    'aria-haspopup': true,
    'aria-controls': isOpen && popupId != null ? popupId : undefined
  } : variant === 'popper' ? {
    'aria-describedby': isOpen && popupId != null ? popupId : undefined
  } : undefined);
}
/**
 * Creates props for a component that opens the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindTrigger(popupState) {
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onClick: popupState.open,
    onTouchStart: popupState.open
  });
}
/**
 * Creates props for a component that opens the popup on its contextmenu event (right click).
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindContextMenu(popupState) {
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onContextMenu: e => {
      e.preventDefault();
      popupState.open(e);
    }
  });
}
/**
 * Creates props for a component that toggles the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindToggle(popupState) {
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onClick: popupState.toggle,
    onTouchStart: popupState.toggle
  });
}
/**
 * Creates props for a component that opens the popup while hovered.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindHover(popupState) {
  const open = popupState.open,
    onMouseLeave = popupState.onMouseLeave;
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onTouchStart: open,
    onMouseOver: open,
    onMouseLeave
  });
}
/**
 * Creates props for a component that opens the popup while focused.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindFocus(popupState) {
  const open = popupState.open,
    onBlur = popupState.onBlur;
  return _objectSpread(_objectSpread({}, controlAriaProps(popupState)), {}, {
    onFocus: open,
    onBlur
  });
}
/**
 * Creates props for a component that opens the popup while double click.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindDoubleClick(_ref4) {
  let isOpen = _ref4.isOpen,
    open = _ref4.open,
    popupId = _ref4.popupId,
    variant = _ref4.variant;
  return {
    // $FlowFixMe
    [variant === 'popover' ? 'aria-controls' : 'aria-describedby']: isOpen ? popupId : null,
    'aria-haspopup': variant === 'popover' ? true : undefined,
    onDoubleClick: open
  };
}
/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindPopover(_ref5) {
  let isOpen = _ref5.isOpen,
    anchorEl = _ref5.anchorEl,
    anchorPosition = _ref5.anchorPosition,
    close = _ref5.close,
    popupId = _ref5.popupId,
    onMouseLeave = _ref5.onMouseLeave,
    disableAutoFocus = _ref5.disableAutoFocus,
    _openEventType = _ref5._openEventType;
  const useAnchorPosition = _openEventType === 'contextmenu';
  return _objectSpread({
    id: popupId,
    anchorEl,
    anchorPosition,
    anchorReference: useAnchorPosition ? 'anchorPosition' : 'anchorEl',
    open: isOpen,
    onClose: close,
    onMouseLeave
  }, disableAutoFocus && {
    disableAutoFocus: true,
    disableEnforceFocus: true,
    disableRestoreFocus: true
  });
}
/**
 * Creates props for a `Menu` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindMenu(_ref6) {
  let isOpen = _ref6.isOpen,
    anchorEl = _ref6.anchorEl,
    anchorPosition = _ref6.anchorPosition,
    close = _ref6.close,
    popupId = _ref6.popupId,
    onMouseLeave = _ref6.onMouseLeave,
    disableAutoFocus = _ref6.disableAutoFocus,
    _openEventType = _ref6._openEventType;
  const useAnchorPosition = _openEventType === 'contextmenu';
  return _objectSpread({
    id: popupId,
    anchorEl,
    anchorPosition,
    anchorReference: useAnchorPosition ? 'anchorPosition' : 'anchorEl',
    open: isOpen,
    onClose: close,
    onMouseLeave
  }, disableAutoFocus && {
    autoFocus: false,
    disableAutoFocusItem: true,
    disableAutoFocus: true,
    disableEnforceFocus: true,
    disableRestoreFocus: true
  });
}
/**
 * Creates props for a `Popper` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindPopper(_ref7) {
  let isOpen = _ref7.isOpen,
    anchorEl = _ref7.anchorEl,
    popupId = _ref7.popupId,
    onMouseLeave = _ref7.onMouseLeave;
  return {
    id: popupId,
    anchorEl,
    open: isOpen,
    onMouseLeave
  };
}
/**
 * Creates props for a `Dialog` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

function bindDialog(_ref8) {
  let isOpen = _ref8.isOpen,
    close = _ref8.close;
  return {
    open: isOpen,
    onClose: close
  };
}
function getPopup(_ref9) {
  let popupId = _ref9.popupId;
  return popupId && typeof document !== 'undefined' ? document.getElementById(popupId) // eslint-disable-line no-undef
  : null;
}
function isElementInPopup(element, popupState) {
  const anchorEl = popupState.anchorEl,
    _childPopupState = popupState._childPopupState;
  return isAncestor(anchorEl, element) || isAncestor(getPopup(popupState), element) || _childPopupState != null && isElementInPopup(element, _childPopupState);
}
function isAncestor(parent, child) {
  if (!parent) return false;
  while (child) {
    if (child === parent) return true;
    child = child.parentElement;
  }
  return false;
}
function hasChanges(state, nextState) {
  for (let key in nextState) {
    if (Object.prototype.hasOwnProperty.call(state, key) && state[key] !== nextState[key]) {
      return true;
    }
  }
  return false;
}

/***/ },

/***/ 89150
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.anchorRef;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindContextMenu;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindDialog;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindDoubleClick;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindFocus;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindHover;
  }
});
Object.defineProperty(exports, "NA", ({
  enumerable: true,
  get: function () {
    return _core.bindMenu;
  }
}));
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindPopover;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindPopper;
  }
});
__webpack_unused_export__ = ({
  enumerable: true,
  get: function () {
    return _core.bindToggle;
  }
});
Object.defineProperty(exports, "cO", ({
  enumerable: true,
  get: function () {
    return _core.bindTrigger;
  }
}));
exports.Ay = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _propTypes = _interopRequireDefault(__webpack_require__(65173));
var _core = __webpack_require__(38595);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
class PopupState extends React.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", _core.initCoreState);
    _defineProperty(this, "_mounted", true);
    _defineProperty(this, "_setStateIfMounted", state => {
      if (this._mounted) this.setState(state);
    });
  }
  componentWillUnmount() {
    this._mounted = false;
  }
  componentDidUpdate(prevProps, prevState) {
    const _this$props = this.props,
      popupId = _this$props.popupId,
      disableAutoFocus = _this$props.disableAutoFocus;
    if (!disableAutoFocus && typeof document === 'object' && popupId && (popupId !== prevProps.popupId || this.state.anchorEl !== prevState.anchorEl)) {
      const popup = document.getElementById(popupId);
      if (popup) popup.focus();
    }
  }
  render() {
    const _this$props2 = this.props,
      children = _this$props2.children,
      popupId = _this$props2.popupId,
      variant = _this$props2.variant,
      parentPopupState = _this$props2.parentPopupState,
      disableAutoFocus = _this$props2.disableAutoFocus;
    const popupState = (0, _core.createPopupState)({
      state: this.state,
      setState: this._setStateIfMounted,
      popupId,
      variant,
      parentPopupState,
      disableAutoFocus
    });
    const result = children(popupState);
    if (result == null) return null;
    return result;
  }
}
exports.Ay = PopupState;
_defineProperty(PopupState, "propTypes", {
  /**
   * The render function.
   *
   * @param {object} props the properties injected by `PopupState`:
   * <ul>
   *   <li>`open(eventOrAnchorEl)`: opens the popup</li>
   *   <li>`close()`: closes the popup</li>
   *   <li>`toggle(eventOrAnchorEl)`: opens the popup if it is closed, or
   *     closes the popup if it is open.
   *   </li>
   *   <li>`setOpen(open, [eventOrAnchorEl])`: sets whether the popup is open.
   *     `eventOrAnchorEl` is required if `open` is truthy.
   *   </li>
   *   <li>`isOpen`: `true`/`false` if the popup is open/closed</li>
   *   <li>`anchorEl`: the current anchor element (`null` the popup is closed)</li>
   *   <li>`popupId`: the `popupId` prop you passed</li>
   * </ul>
   *
   * @returns {React.Node} the content to display
   */
  children: _propTypes.default.func.isRequired,
  /**
   * The `id` property to use for the popup.  Will be passed to the render
   * function as `bindPopup.id`, and also used for the `aria-controls` property
   * passed to the trigger component via `bindTrigger`.
   */
  popupId: _propTypes.default.string,
  /**
   * Which type of popup you are controlling.  Use `'popover'` for `Popover`
   * and `Menu`; use `'popper'` for `Popper`s.  Right now this only affects
   * whether `aria-controls` or `aria-describedby` is used on the trigger
   * component.
   */
  variant: _propTypes.default.oneOf(['popover', 'popper']).isRequired,
  /**
   * The popupState of the parent menu (for cascading menus)
   */
  parentPopupState: _propTypes.default.object,
  /**
   * Will focus the popup when it opens unless disableAutoFocus is explicitly false.
   */
  disableAutoFocus: _propTypes.default.bool
});

/***/ },

/***/ 43693
(module, __unused_webpack_exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(77736);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 12897
(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(43693);
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
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 89045
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(73738)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 77736
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(73738)["default"]);
var toPrimitive = __webpack_require__(89045);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }

}]);