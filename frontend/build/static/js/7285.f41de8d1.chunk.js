"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[7285],{

/***/ 98313
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ material_Popper_Popper)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@mui/system/useThemeWithoutDefault.js
var useThemeWithoutDefault = __webpack_require__(92374);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(63462);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
var useEnhancedEffect = __webpack_require__(84440);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(31668);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/createPopper.js + 6 modules
var createPopper = __webpack_require__(76299);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var eventListeners = __webpack_require__(77471);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
var popperOffsets = __webpack_require__(84770);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var computeStyles = __webpack_require__(77103);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
var getNodeName = __webpack_require__(50333);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
var instanceOf = __webpack_require__(50006);
;// ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!(0,instanceOf/* isHTMLElement */.sb)(element) || !(0,getNodeName/* default */.A)(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]

    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];
      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!(0,instanceOf/* isHTMLElement */.sb)(element) || !(0,getNodeName/* default */.A)(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules

/* harmony default export */ const modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js
var offset = __webpack_require__(12993);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js + 3 modules
var flip = __webpack_require__(20246);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js + 1 modules
var preventOverflow = __webpack_require__(53380);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js
var arrow = __webpack_require__(57013);
// EXTERNAL MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js
var hide = __webpack_require__(31890);
;// ./node_modules/@popperjs/core/lib/popper.js










var defaultModifiers = [eventListeners/* default */.A, popperOffsets/* default */.A, computeStyles/* default */.A, modifiers_applyStyles, offset/* default */.A, flip/* default */.A, preventOverflow/* default */.A, arrow/* default */.A, hide/* default */.A];
var popper_createPopper = /*#__PURE__*/(0,createPopper/* popperGenerator */.UD)({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(88092);
// EXTERNAL MODULE: ./node_modules/@mui/material/Portal/Portal.js
var Portal = __webpack_require__(67022);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Popper/popperClasses.js


function getPopperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiPopper', slot);
}
const popperClasses = (0,generateUtilityClasses/* default */.A)('MuiPopper', ['root']);
/* harmony default export */ const Popper_popperClasses = ((/* unused pure expression or super */ null && (popperClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Popper/BasePopper.js
'use client';




const _excluded = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
  _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];









function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== undefined;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
const useUtilityClasses = ownerState => {
  const classes = ownerState.classes;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/react.forwardRef(function PopperTooltip(props, forwardedRef) {
  var _slots$root;
  const anchorEl = props.anchorEl,
    children = props.children,
    direction = props.direction,
    disablePortal = props.disablePortal,
    modifiers = props.modifiers,
    open = props.open,
    initialPlacement = props.placement,
    popperOptions = props.popperOptions,
    popperRefProp = props.popperRef,
    _props$slotProps = props.slotProps,
    slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
    _props$slots = props.slots,
    slots = _props$slots === void 0 ? {} : _props$slots,
    TransitionProps = props.TransitionProps,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const tooltipRef = react.useRef(null);
  const ownRef = (0,useForkRef/* default */.A)(tooltipRef, forwardedRef);
  const popperRef = react.useRef(null);
  const handlePopperRef = (0,useForkRef/* default */.A)(popperRef, popperRefProp);
  const handlePopperRefRef = react.useRef(handlePopperRef);
  (0,useEnhancedEffect/* default */.A)(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const _React$useState = react.useState(rtlPlacement),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    placement = _React$useState2[0],
    setPlacement = _React$useState2[1];
  const _React$useState3 = react.useState(resolveAnchorEl(anchorEl)),
    _React$useState4 = (0,slicedToArray/* default */.A)(_React$useState3, 2),
    resolvedAnchorElement = _React$useState4[0],
    setResolvedAnchorElement = _React$useState4[1];
  react.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  react.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  (0,useEnhancedEffect/* default */.A)(() => {
    if (!resolvedAnchorElement || !open) {
      return undefined;
    }
    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };
    if (false) // removed by dead control flow
{}
    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: _ref => {
        let state = _ref.state;
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = popper_createPopper(resolvedAnchorElement, tooltipRef.current, (0,esm_extends/* default */.A)({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement: placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses(props);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = (0,useSlotProps/* default */.A)({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: 'tooltip',
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends/* default */.A)({}, rootProps, {
    children: typeof children === 'function' ? children(childProps) : children
  }));
});

/**
 * @ignore - internal component.
 */
const Popper = /*#__PURE__*/react.forwardRef(function Popper(props, forwardedRef) {
  const anchorEl = props.anchorEl,
    children = props.children,
    containerProp = props.container,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    _props$disablePortal = props.disablePortal,
    disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
    _props$keepMounted = props.keepMounted,
    keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
    modifiers = props.modifiers,
    open = props.open,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    _props$popperOptions = props.popperOptions,
    popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
    popperRef = props.popperRef,
    style = props.style,
    _props$transition = props.transition,
    transition = _props$transition === void 0 ? false : _props$transition,
    _props$slotProps2 = props.slotProps,
    slotProps = _props$slotProps2 === void 0 ? {} : _props$slotProps2,
    _props$slots2 = props.slots,
    slots = _props$slots2 === void 0 ? {} : _props$slots2,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded2);
  const _React$useState5 = react.useState(true),
    _React$useState6 = (0,slicedToArray/* default */.A)(_React$useState5, 2),
    exited = _React$useState6[0],
    setExited = _React$useState6[1];
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? (0,ownerDocument/* default */.A)(resolvedAnchorEl).body : (0,ownerDocument/* default */.A)(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : undefined;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal/* default */.A, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PopperTooltip, (0,esm_extends/* default */.A)({
      anchorEl: anchorEl,
      direction: direction,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef,
      slotProps: slotProps,
      slots: slots
    }, other, {
      style: (0,esm_extends/* default */.A)({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children: children
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const BasePopper = (Popper);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
;// ./node_modules/@mui/material/Popper/Popper.js
'use client';



const Popper_excluded = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"];









const PopperRoot = (0,styled/* default */.Ay)(BasePopper, {
  name: 'MuiPopper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Popper](https://mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/material-ui/api/popper/)
 */
const Popper_Popper = /*#__PURE__*/react.forwardRef(function Popper(inProps, ref) {
  var _slots$root;
  const theme = (0,useThemeWithoutDefault/* default */.A)();
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPopper'
  });
  const anchorEl = props.anchorEl,
    component = props.component,
    components = props.components,
    componentsProps = props.componentsProps,
    container = props.container,
    disablePortal = props.disablePortal,
    keepMounted = props.keepMounted,
    modifiers = props.modifiers,
    open = props.open,
    placement = props.placement,
    popperOptions = props.popperOptions,
    popperRef = props.popperRef,
    transition = props.transition,
    slots = props.slots,
    slotProps = props.slotProps,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Popper_excluded);
  const RootComponent = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components == null ? void 0 : components.Root;
  const otherProps = (0,esm_extends/* default */.A)({
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition
  }, other);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PopperRoot, (0,esm_extends/* default */.A)({
    as: component,
    direction: theme == null ? void 0 : theme.direction,
    slots: {
      root: RootComponent
    },
    slotProps: slotProps != null ? slotProps : componentsProps
  }, otherProps, {
    ref: ref
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const material_Popper_Popper = (Popper_Popper);

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

/***/ 45879
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_utils_useId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5844);
'use client';


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_useId__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 92374
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

'use client';

__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _styledEngine = __webpack_require__(7688);
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function (e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != typeof e && "function" != typeof e) return {
    default: e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n.default = e, t && t.set(e, n), n;
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme() {
  let defaultTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const contextTheme = React.useContext(_styledEngine.ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
var _default = exports.A = useTheme;

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