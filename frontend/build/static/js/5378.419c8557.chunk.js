"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[5378],{

/***/ 12220
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Backdrop_Backdrop)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(56258);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Backdrop/backdropClasses.js


function getBackdropUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiBackdrop', slot);
}
const backdropClasses = (0,generateUtilityClasses/* default */.A)('MuiBackdrop', ['root', 'invisible']);
/* harmony default export */ const Backdrop_backdropClasses = ((/* unused pure expression or super */ null && (backdropClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Backdrop/Backdrop.js
'use client';



const _excluded = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];









const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    invisible = ownerState.invisible;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return (0,composeClasses/* default */.A)(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(_ref2 => {
  let ownerState = _ref2.ownerState;
  return (0,esm_extends/* default */.A)({
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
  }, ownerState.invisible && {
    backgroundColor: 'transparent'
  });
});
const Backdrop = /*#__PURE__*/react.forwardRef(function Backdrop(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiBackdrop'
  });
  const children = props.children,
    className = props.className,
    _props$component = props.component,
    component = _props$component === void 0 ? 'div' : _props$component,
    _props$components = props.components,
    components = _props$components === void 0 ? {} : _props$components,
    _props$componentsProp = props.componentsProps,
    componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
    _props$invisible = props.invisible,
    invisible = _props$invisible === void 0 ? false : _props$invisible,
    open = props.open,
    _props$slotProps = props.slotProps,
    slotProps = _props$slotProps === void 0 ? {} : _props$slotProps,
    _props$slots = props.slots,
    slots = _props$slots === void 0 ? {} : _props$slots,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? Fade/* default */.A : _props$TransitionComp,
    transitionDuration = props.transitionDuration,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropRoot, (0,esm_extends/* default */.A)({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: (0,clsx/* default */.A)(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: (0,esm_extends/* default */.A)({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes: classes,
      ref: ref,
      children: children
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Backdrop_Backdrop = (Backdrop);

/***/ },

/***/ 11906
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Button_Button)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(13030);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(67266);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(61475);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(75429);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Button/buttonClasses.js


function getButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiButton', slot);
}
const buttonClasses = (0,generateUtilityClasses/* default */.A)('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorError', 'colorInfo', 'colorWarning', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'icon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
/* harmony default export */ const Button_buttonClasses = (buttonClasses);
;// ./node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js

/**
 * @ignore - internal component.
 */
const ButtonGroupContext = /*#__PURE__*/react.createContext({});
if (false) // removed by dead control flow
{}
/* harmony default export */ const ButtonGroup_ButtonGroupContext = (ButtonGroupContext);
;// ./node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js

/**
 * @ignore - internal component.
 */
const ButtonGroupButtonContext = /*#__PURE__*/react.createContext(undefined);
if (false) // removed by dead control flow
{}
/* harmony default export */ const ButtonGroup_ButtonGroupButtonContext = (ButtonGroupButtonContext);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Button/Button.js
'use client';



const _excluded = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];















const useUtilityClasses = ownerState => {
  const color = ownerState.color,
    disableElevation = ownerState.disableElevation,
    fullWidth = ownerState.fullWidth,
    size = ownerState.size,
    variant = ownerState.variant,
    classes = ownerState.classes;
  const slots = {
    root: ['root', variant, "".concat(variant).concat((0,capitalize/* default */.A)(color)), "size".concat((0,capitalize/* default */.A)(size)), "".concat(variant, "Size").concat((0,capitalize/* default */.A)(size)), "color".concat((0,capitalize/* default */.A)(color)), disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
    label: ['label'],
    startIcon: ['icon', 'startIcon', "iconSize".concat((0,capitalize/* default */.A)(size))],
    endIcon: ['icon', 'endIcon', "iconSize".concat((0,capitalize/* default */.A)(size))]
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getButtonUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const commonIconStyles = ownerState => (0,esm_extends/* default */.A)({}, ownerState.size === 'small' && {
  '& > *:nth-of-type(1)': {
    fontSize: 18
  }
}, ownerState.size === 'medium' && {
  '& > *:nth-of-type(1)': {
    fontSize: 20
  }
}, ownerState.size === 'large' && {
  '& > *:nth-of-type(1)': {
    fontSize: 22
  }
});
const ButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, styles[ownerState.variant], styles["".concat(ownerState.variant).concat((0,capitalize/* default */.A)(ownerState.color))], styles["size".concat((0,capitalize/* default */.A)(ownerState.size))], styles["".concat(ownerState.variant, "Size").concat((0,capitalize/* default */.A)(ownerState.size))], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  var _theme$palette$getCon, _theme$palette;
  const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
  return (0,esm_extends/* default */.A)({}, theme.typography.button, {
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': (0,esm_extends/* default */.A)({
      textDecoration: 'none',
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
      border: "1px solid ".concat((theme.vars || theme).palette[ownerState.color].main),
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'contained' && {
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    '&:active': (0,esm_extends/* default */.A)({}, ownerState.variant === 'contained' && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    ["&.".concat(Button_buttonClasses.focusVisible)]: (0,esm_extends/* default */.A)({}, ownerState.variant === 'contained' && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    ["&.".concat(Button_buttonClasses.disabled)]: (0,esm_extends/* default */.A)({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === 'outlined' && {
      border: "1px solid ".concat((theme.vars || theme).palette.action.disabledBackground)
    }, ownerState.variant === 'contained' && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === 'text' && {
    padding: '6px 8px'
  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === 'outlined' && {
    padding: '5px 15px',
    border: '1px solid currentColor'
  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? "1px solid rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.5)") : "1px solid ".concat((0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.5))
  }, ownerState.variant === 'contained' && {
    color: theme.vars ?
    // this is safe because grey does not change between default light/dark mode
    theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === 'inherit' && {
    color: 'inherit',
    borderColor: 'currentColor'
  }, ownerState.size === 'small' && ownerState.variant === 'text' && {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'text' && {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
    padding: '3px 9px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
    padding: '7px 21px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: '100%'
  });
}, _ref2 => {
  let ownerState = _ref2.ownerState;
  return ownerState.disableElevation && {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none'
    },
    ["&.".concat(Button_buttonClasses.focusVisible)]: {
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none'
    },
    ["&.".concat(Button_buttonClasses.disabled)]: {
      boxShadow: 'none'
    }
  };
});
const ButtonStartIcon = (0,styled/* default */.Ay)('span', {
  name: 'MuiButton',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.startIcon, styles["iconSize".concat((0,capitalize/* default */.A)(ownerState.size))]];
  }
})(_ref3 => {
  let ownerState = _ref3.ownerState;
  return (0,esm_extends/* default */.A)({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4
  }, ownerState.size === 'small' && {
    marginLeft: -2
  }, commonIconStyles(ownerState));
});
const ButtonEndIcon = (0,styled/* default */.Ay)('span', {
  name: 'MuiButton',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.endIcon, styles["iconSize".concat((0,capitalize/* default */.A)(ownerState.size))]];
  }
})(_ref4 => {
  let ownerState = _ref4.ownerState;
  return (0,esm_extends/* default */.A)({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8
  }, ownerState.size === 'small' && {
    marginRight: -2
  }, commonIconStyles(ownerState));
});
const Button = /*#__PURE__*/react.forwardRef(function Button(inProps, ref) {
  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
  const contextProps = react.useContext(ButtonGroup_ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = react.useContext(ButtonGroup_ButtonGroupButtonContext);
  const resolvedProps = (0,resolveProps/* default */.A)(contextProps, inProps);
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: resolvedProps,
    name: 'MuiButton'
  });
  const children = props.children,
    _props$color = props.color,
    color = _props$color === void 0 ? 'primary' : _props$color,
    _props$component = props.component,
    component = _props$component === void 0 ? 'button' : _props$component,
    className = props.className,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$disableElevati = props.disableElevation,
    disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
    _props$disableFocusRi = props.disableFocusRipple,
    disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
    endIconProp = props.endIcon,
    focusVisibleClassName = props.focusVisibleClassName,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    startIconProp = props.startIcon,
    type = props.type,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'text' : _props$variant,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const startIcon = startIconProp && /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState: ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState: ownerState,
    children: endIconProp
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || '';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonRoot, (0,esm_extends/* default */.A)({
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(contextProps.className, classes.root, className, positionClassName),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other, {
    classes: classes,
    children: [startIcon, children, endIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Button_Button = (Button);

/***/ },

/***/ 83462
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98587);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58387);
/* harmony import */ var _mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98610);
/* harmony import */ var _mui_utils_useId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5844);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6803);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71245);
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56258);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63336);
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6431);
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34535);
/* harmony import */ var _dialogClasses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93436);
/* harmony import */ var _DialogContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2563);
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12220);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26240);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70579);
'use client';



const _excluded = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
















const DialogBackdrop = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)(_Backdrop__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
  name: 'MuiDialog',
  slot: 'Backdrop',
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    scroll = ownerState.scroll,
    maxWidth = ownerState.maxWidth,
    fullWidth = ownerState.fullWidth,
    fullScreen = ownerState.fullScreen;
  const slots = {
    root: ['root'],
    container: ['container', "scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(scroll))],
    paper: ['paper', "paperScroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(scroll)), "paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(String(maxWidth))), fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
  };
  return (0,_mui_utils_composeClasses__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(slots, _dialogClasses__WEBPACK_IMPORTED_MODULE_12__/* .getDialogUtilityClass */ .f, classes);
};
const DialogRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)(_Modal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
  name: 'MuiDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '@media print': {
    // Use !important to override the Modal inline-style.
    position: 'absolute !important'
  }
});
const DialogContainer = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)('div', {
  name: 'MuiDialog',
  slot: 'Container',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.container, styles["scroll".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(ownerState.scroll))]];
  }
})(_ref => {
  let ownerState = _ref.ownerState;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    height: '100%',
    '@media print': {
      height: 'auto'
    },
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0
  }, ownerState.scroll === 'paper' && {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, ownerState.scroll === 'body' && {
    overflowY: 'auto',
    overflowX: 'hidden',
    textAlign: 'center',
    '&::after': {
      content: '""',
      display: 'inline-block',
      verticalAlign: 'middle',
      height: '100%',
      width: '0'
    }
  });
});
const DialogPaper = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Ay)(_Paper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
  name: 'MuiDialog',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.paper, styles["scrollPaper".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(ownerState.scroll))], styles["paperWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(String(ownerState.maxWidth)))], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(_ref2 => {
  let theme = _ref2.theme,
    ownerState = _ref2.ownerState;
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    margin: 32,
    position: 'relative',
    overflowY: 'auto',
    // Fix IE11 issue, to remove at some point.
    '@media print': {
      overflowY: 'visible',
      boxShadow: 'none'
    }
  }, ownerState.scroll === 'paper' && {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100% - 64px)'
  }, ownerState.scroll === 'body' && {
    display: 'inline-block',
    verticalAlign: 'middle',
    textAlign: 'left' // 'initial' doesn't work on IE11
  }, !ownerState.maxWidth && {
    maxWidth: 'calc(100% - 64px)'
  }, ownerState.maxWidth === 'xs' && {
    maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : "max(".concat(theme.breakpoints.values.xs).concat(theme.breakpoints.unit, ", 444px)"),
    ["&.".concat(_dialogClasses__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.paperScrollBody)]: {
      [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
        maxWidth: 'calc(100% - 64px)'
      }
    }
  }, ownerState.maxWidth && ownerState.maxWidth !== 'xs' && {
    maxWidth: "".concat(theme.breakpoints.values[ownerState.maxWidth]).concat(theme.breakpoints.unit),
    ["&.".concat(_dialogClasses__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.paperScrollBody)]: {
      [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
        maxWidth: 'calc(100% - 64px)'
      }
    }
  }, ownerState.fullWidth && {
    width: 'calc(100% - 64px)'
  }, ownerState.fullScreen && {
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    height: '100%',
    maxHeight: 'none',
    borderRadius: 0,
    ["&.".concat(_dialogClasses__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.paperScrollBody)]: {
      margin: 0,
      maxWidth: '100%'
    }
  });
});

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
const Dialog = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Dialog(inProps, ref) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_10__/* .useDefaultProps */ .b)({
    props: inProps,
    name: 'MuiDialog'
  });
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const ariaDescribedby = props['aria-describedby'],
    ariaLabelledbyProp = props['aria-labelledby'],
    BackdropComponent = props.BackdropComponent,
    BackdropProps = props.BackdropProps,
    children = props.children,
    className = props.className,
    _props$disableEscapeK = props.disableEscapeKeyDown,
    disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
    _props$fullScreen = props.fullScreen,
    fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
    _props$fullWidth = props.fullWidth,
    fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
    onBackdropClick = props.onBackdropClick,
    onClick = props.onClick,
    onClose = props.onClose,
    open = props.open,
    _props$PaperComponent = props.PaperComponent,
    PaperComponent = _props$PaperComponent === void 0 ? _Paper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A : _props$PaperComponent,
    _props$PaperProps = props.PaperProps,
    PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
    _props$scroll = props.scroll,
    scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A : _props$TransitionComp,
    _props$transitionDura = props.transitionDuration,
    transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
    TransitionProps = props.TransitionProps,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(props, _excluded);
  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  });
  const classes = useUtilityClasses(ownerState);
  const backdropClick = react__WEBPACK_IMPORTED_MODULE_2__.useRef();
  const handleMouseDown = event => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = event => {
    if (onClick) {
      onClick(event);
    }

    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const ariaLabelledby = (0,_mui_utils_useId__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(ariaLabelledbyProp);
  const dialogContextValue = react__WEBPACK_IMPORTED_MODULE_2__.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(DialogRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    closeAfterTransition: true,
    components: {
      Backdrop: DialogBackdrop
    },
    componentsProps: {
      backdrop: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
        transitionDuration,
        as: BackdropComponent
      }, BackdropProps)
    },
    disableEscapeKeyDown: disableEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref,
    onClick: handleBackdropClick,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(DialogContainer, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.container),
        onMouseDown: handleMouseDown,
        ownerState: ownerState,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(DialogPaper, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.paper, PaperProps.className),
          ownerState: ownerState,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_DialogContext__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Provider, {
            value: dialogContextValue,
            children: children
          })
        }))
      })
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 2563
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);

const DialogContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DialogContext);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 93436
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ getDialogUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92532);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72372);


function getDialogUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)('MuiDialog', slot);
}
const dialogClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogClasses);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 29347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogActions_DialogActions)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/DialogActions/dialogActionsClasses.js


function getDialogActionsUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiDialogActions', slot);
}
const dialogActionsClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogActions', ['root', 'spacing']);
/* harmony default export */ const DialogActions_dialogActionsClasses = ((/* unused pure expression or super */ null && (dialogActionsClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/DialogActions/DialogActions.js
'use client';



const _excluded = ["className", "disableSpacing"];








const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    disableSpacing = ownerState.disableSpacing;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.A)(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDialogActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(_ref => {
  let ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.A)({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  }, !ownerState.disableSpacing && {
    '& > :not(style) ~ :not(style)': {
      marginLeft: 8
    }
  });
});
const DialogActions = /*#__PURE__*/react.forwardRef(function DialogActions(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiDialogActions'
  });
  const className = props.className,
    _props$disableSpacing = props.disableSpacing,
    disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    disableSpacing
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogActionsRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogActions_DialogActions = (DialogActions);

/***/ },

/***/ 35316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DialogContent_DialogContent)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/DialogContent/dialogContentClasses.js


function getDialogContentUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiDialogContent', slot);
}
const dialogContentClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogContent', ['root', 'dividers']);
/* harmony default export */ const DialogContent_dialogContentClasses = ((/* unused pure expression or super */ null && (dialogContentClasses)));
// EXTERNAL MODULE: ./node_modules/@mui/material/DialogTitle/dialogTitleClasses.js
var dialogTitleClasses = __webpack_require__(87034);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/DialogContent/DialogContent.js
'use client';



const _excluded = ["className", "dividers"];









const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    dividers = ownerState.dividers;
  const slots = {
    root: ['root', dividers && 'dividers']
  };
  return (0,composeClasses/* default */.A)(slots, getDialogContentUtilityClass, classes);
};
const DialogContentRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.A)({
    flex: '1 1 auto',
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch',
    overflowY: 'auto',
    padding: '20px 24px'
  }, ownerState.dividers ? {
    padding: '16px 24px',
    borderTop: "1px solid ".concat((theme.vars || theme).palette.divider),
    borderBottom: "1px solid ".concat((theme.vars || theme).palette.divider)
  } : {
    [".".concat(dialogTitleClasses/* default */.A.root, " + &")]: {
      paddingTop: 0
    }
  });
});
const DialogContent = /*#__PURE__*/react.forwardRef(function DialogContent(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiDialogContent'
  });
  const className = props.className,
    _props$dividers = props.dividers,
    dividers = _props$dividers === void 0 ? false : _props$dividers,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    dividers
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContentRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogContent_DialogContent = (DialogContent);

/***/ },

/***/ 87034
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ getDialogTitleUtilityClass)
/* harmony export */ });
/* harmony import */ var _mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92532);
/* harmony import */ var _mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72372);


function getDialogTitleUtilityClass(slot) {
  return (0,_mui_utils_generateUtilityClass__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay)('MuiDialogTitle', slot);
}
const dialogTitleClasses = (0,_mui_utils_generateUtilityClasses__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)('MuiDialogTitle', ['root']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dialogTitleClasses);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 56258
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98587);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88692);
/* harmony import */ var _mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43198);
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26240);
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80653);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95849);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70579);
'use client';



const _excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];









const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Fade = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Fade(props, ref) {
  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
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
    timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
    _props$TransitionComp = props.TransitionComponent,
    TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay : _props$TransitionComp,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const enableStrictModeCompat = true;
  const nodeRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  const handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(nodeRef, (0,_mui_utils_getReactElementRef__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(children), ref);
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
    (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__/* .reflow */ .q)(node); // So the animation always start from the start.

    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .c)({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = (0,_transitions_utils__WEBPACK_IMPORTED_MODULE_6__/* .getTransitionProps */ .c)({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(TransitionComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    appear: appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(children, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
        style: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fade);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 71245
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Modal_Modal)
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
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
var useSlotProps = __webpack_require__(88092);
// EXTERNAL MODULE: ./node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.js
var FocusTrap = __webpack_require__(69869);
// EXTERNAL MODULE: ./node_modules/@mui/material/Portal/Portal.js
var Portal = __webpack_require__(67022);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/Backdrop/Backdrop.js + 1 modules
var Backdrop = __webpack_require__(12220);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useForkRef/useForkRef.js
var useForkRef = __webpack_require__(63462);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
var ownerDocument = __webpack_require__(31668);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
var useEventCallback = __webpack_require__(31782);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
var createChainedFunction = __webpack_require__(42456);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(76114);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js
var ownerWindow = __webpack_require__(63940);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
var getScrollbarSize = __webpack_require__(68052);
;// ./node_modules/@mui/material/Modal/ModalManager.js

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = (0,ownerDocument/* default */.A)(container);
  if (doc.body === container) {
    return (0,ownerWindow/* default */.A)(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt((0,ownerWindow/* default */.A)(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = (0,getScrollbarSize/* default */.A)((0,ownerDocument/* default */.A)(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px");

      // .mui-fixed is a global helper.
      const fixedElements = (0,ownerDocument/* default */.A)(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = "".concat(getPaddingRight(element) + scrollbarSize, "px");
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = (0,ownerDocument/* default */.A)(container).body;
    } else {
      // Support html overflow-y: auto for scroll stability between pages
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = (0,ownerWindow/* default */.A)(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(_ref => {
      let value = _ref.value,
        el = _ref.el,
        property = _ref.property;
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal) {
    let ariaHiddenState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
;// ./node_modules/@mui/material/Modal/useModal.js
'use client';







function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */
function useModal(parameters) {
  const container = parameters.container,
    _parameters$disableEs = parameters.disableEscapeKeyDown,
    disableEscapeKeyDown = _parameters$disableEs === void 0 ? false : _parameters$disableEs,
    _parameters$disableSc = parameters.disableScrollLock,
    disableScrollLock = _parameters$disableSc === void 0 ? false : _parameters$disableSc,
    _parameters$manager = parameters.manager,
    manager = _parameters$manager === void 0 ? defaultManager : _parameters$manager,
    _parameters$closeAfte = parameters.closeAfterTransition,
    closeAfterTransition = _parameters$closeAfte === void 0 ? false : _parameters$closeAfte,
    onTransitionEnter = parameters.onTransitionEnter,
    onTransitionExited = parameters.onTransitionExited,
    children = parameters.children,
    onClose = parameters.onClose,
    open = parameters.open,
    rootRef = parameters.rootRef;

  // @ts-ignore internal logic
  const modal = react.useRef({});
  const mountNodeRef = react.useRef(null);
  const modalRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.A)(modalRef, rootRef);
  const _React$useState = react.useState(!open),
    _React$useState2 = (0,slicedToArray/* default */.A)(_React$useState, 2),
    exited = _React$useState2[0],
    setExited = _React$useState2[1];
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => (0,ownerDocument/* default */.A)(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = (0,useEventCallback/* default */.A)(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = (0,useEventCallback/* default */.A)(node => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = react.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  react.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || event.which === 229 ||
    // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const createHandleBackdropClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const getRootProps = function () {
    let otherHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const propsEventHandlers = (0,extractEventHandlers/* default */.A)(parameters);

    // The custom event handlers shouldn't be spread on the root element
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = (0,esm_extends/* default */.A)({}, propsEventHandlers, otherHandlers);
    return (0,esm_extends/* default */.A)({
      role: 'presentation'
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = function () {
    let otherHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const externalEventHandlers = otherHandlers;
    return (0,esm_extends/* default */.A)({
      'aria-hidden': true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: (0,createChainedFunction/* default */.A)(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: (0,createChainedFunction/* default */.A)(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
/* harmony default export */ const Modal_useModal = (useModal);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Modal/modalClasses.js


function getModalUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiModal', slot);
}
const modalClasses = (0,generateUtilityClasses/* default */.A)('MuiModal', ['root', 'hidden', 'backdrop']);
/* harmony default export */ const Modal_modalClasses = ((/* unused pure expression or super */ null && (modalClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Modal/Modal.js
'use client';



const _excluded = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"];
















const useUtilityClasses = ownerState => {
  const open = ownerState.open,
    exited = ownerState.exited,
    classes = ownerState.classes;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
    backdrop: ['backdrop']
  };
  return (0,composeClasses/* default */.A)(slots, getModalUtilityClass, classes);
};
const ModalRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(_ref3 => {
  let theme = _ref3.theme,
    ownerState = _ref3.ownerState;
  return (0,esm_extends/* default */.A)({
    position: 'fixed',
    zIndex: (theme.vars || theme).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  }, !ownerState.open && ownerState.exited && {
    visibility: 'hidden'
  });
});
const ModalBackdrop = (0,styled/* default */.Ay)(Backdrop/* default */.A, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */
const Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    name: 'MuiModal',
    props: inProps
  });
  const _props$BackdropCompon = props.BackdropComponent,
    BackdropComponent = _props$BackdropCompon === void 0 ? ModalBackdrop : _props$BackdropCompon,
    BackdropProps = props.BackdropProps,
    className = props.className,
    _props$closeAfterTran = props.closeAfterTransition,
    closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
    children = props.children,
    container = props.container,
    component = props.component,
    _props$components = props.components,
    components = _props$components === void 0 ? {} : _props$components,
    _props$componentsProp = props.componentsProps,
    componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
    _props$disableAutoFoc = props.disableAutoFocus,
    disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
    _props$disableEnforce = props.disableEnforceFocus,
    disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
    _props$disableEscapeK = props.disableEscapeKeyDown,
    disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
    _props$disablePortal = props.disablePortal,
    disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
    _props$disableRestore = props.disableRestoreFocus,
    disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
    _props$disableScrollL = props.disableScrollLock,
    disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
    _props$hideBackdrop = props.hideBackdrop,
    hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
    _props$keepMounted = props.keepMounted,
    keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
    onBackdropClick = props.onBackdropClick,
    open = props.open,
    slotProps = props.slotProps,
    slots = props.slots,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const propsWithDefaults = (0,esm_extends/* default */.A)({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const _useModal = Modal_useModal((0,esm_extends/* default */.A)({}, propsWithDefaults, {
      rootRef: ref
    })),
    getRootProps = _useModal.getRootProps,
    getBackdropProps = _useModal.getBackdropProps,
    getTransitionProps = _useModal.getTransitionProps,
    portalRef = _useModal.portalRef,
    isTopModal = _useModal.isTopModal,
    exited = _useModal.exited,
    hasTransition = _useModal.hasTransition;
  const ownerState = (0,esm_extends/* default */.A)({}, propsWithDefaults, {
    exited
  });
  const classes = useUtilityClasses(ownerState);
  const childProps = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    const _getTransitionProps = getTransitionProps(),
      onEnter = _getTransitionProps.onEnter,
      onExited = _getTransitionProps.onExited;
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  const rootProps = (0,useSlotProps/* default */.A)({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: (0,clsx/* default */.A)(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const backdropProps = (0,useSlotProps/* default */.A)({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: otherHandlers => {
      return getBackdropProps((0,esm_extends/* default */.A)({}, otherHandlers, {
        onClick: e => {
          if (onBackdropClick) {
            onBackdropClick(e);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e);
          }
        }
      }));
    },
    className: (0,clsx/* default */.A)(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal/* default */.A, {
    ref: portalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(RootSlot, (0,esm_extends/* default */.A)({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropSlot, (0,esm_extends/* default */.A)({}, backdropProps)) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(FocusTrap/* default */.A, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/react.cloneElement(children, childProps)
      })]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Modal_Modal = (Modal);

/***/ },

/***/ 63336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
;// ./node_modules/@mui/material/styles/getOverlayAlpha.js
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
const getOverlayAlpha = elevation => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
/* harmony default export */ const styles_getOverlayAlpha = (getOverlayAlpha);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Paper/Paper.js
'use client';



const _excluded = ["className", "component", "elevation", "square", "variant"];













const useUtilityClasses = ownerState => {
  const square = ownerState.square,
    elevation = ownerState.elevation,
    variant = ownerState.variant,
    classes = ownerState.classes;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && "elevation".concat(elevation)]
  };
  return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles["elevation".concat(ownerState.elevation)]];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  var _theme$vars$overlays;
  return (0,esm_extends/* default */.A)({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create('box-shadow')
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === 'outlined' && {
    border: "1px solid ".concat((theme.vars || theme).palette.divider)
  }, ownerState.variant === 'elevation' && (0,esm_extends/* default */.A)({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === 'dark' && {
    backgroundImage: "linear-gradient(".concat((0,colorManipulator/* alpha */.X4)('#fff', styles_getOverlayAlpha(ownerState.elevation)), ", ").concat((0,colorManipulator/* alpha */.X4)('#fff', styles_getOverlayAlpha(ownerState.elevation)), ")")
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPaper'
  });
  const className = props.className,
    _props$component = props.component,
    component = _props$component === void 0 ? 'div' : _props$component,
    _props$elevation = props.elevation,
    elevation = _props$elevation === void 0 ? 1 : _props$elevation,
    _props$square = props.square,
    square = _props$square === void 0 ? false : _props$square,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'elevation' : _props$variant,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  if (false) // removed by dead control flow
{}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperRoot, (0,esm_extends/* default */.A)({
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);

/***/ },

/***/ 69869
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63462);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43198);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31668);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70579);
'use client';

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */





// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector("input[type=\"radio\"]".concat(selector));
  let roving = getRadio("[name=\"".concat(node.name, "\"]:checked"));
  if (!roving) {
    roving = getRadio("[name=\"".concat(node.name, "\"]"));
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * @ignore - internal component.
 */
function FocusTrap(props) {
  const children = props.children,
    _props$disableAutoFoc = props.disableAutoFocus,
    disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
    _props$disableEnforce = props.disableEnforceFocus,
    disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
    _props$disableRestore = props.disableRestoreFocus,
    disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
    _props$getTabbable = props.getTabbable,
    getTabbable = _props$getTabbable === void 0 ? defaultGetTabbable : _props$getTabbable,
    _props$isEnabled = props.isEnabled,
    isEnabled = _props$isEnabled === void 0 ? defaultIsEnabled : _props$isEnabled,
    open = props.open;
  const ignoreNextEnforceFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const sentinelStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const sentinelEnd = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const nodeToRestore = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const reactFocusEventTarget = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  const rootRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(children), rootRef);
  const lastKeydown = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) // removed by dead control flow
{}
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(rootRef.current);
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      // The focus is already inside
      if (rootElement.contains(doc.activeElement)) {
        return;
      }

      // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }

      // if the focus event is not coming from inside the children's react tree, reset the refs
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }

      // one of the sentinel nodes was focused, so move the focus
      // to the first/last tabbable element inside the focus trap
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
        // no tabbable elements in the trap focus or the focus was outside of the focus trap
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
 false ? 0 : void 0;
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FocusTrap);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 80653
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ getTransitionProps)
/* harmony export */ });
const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const timeout = props.timeout,
    easing = props.easing,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "q", 0, /* binding */ reflow
/* harmony export */ ]);


/***/ },

/***/ 42456
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

/***/ },

/***/ 68052
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getScrollbarSize)
/* harmony export */ });
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/***/ },

/***/ 63940
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerWindow)
/* harmony export */ });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31668);

function ownerWindow(node) {
  const doc = (0,_ownerDocument__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(node);
  return doc.defaultView || window;
}

/***/ }

}]);