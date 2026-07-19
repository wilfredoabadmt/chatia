"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[2330],{

/***/ 77325
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66187);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45982);








var styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },
  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },
  /* Styles applied to the `Typography` components if dense. */
  dense: {},
  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },
  /* Styles applied to the primary `Typography` component. */
  primary: {},
  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItemText(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$disableTypogra = props.disableTypography,
    disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
    _props$inset = props.inset,
    inset = _props$inset === void 0 ? false : _props$inset,
    primaryProp = props.primary,
    primaryTypographyProps = props.primaryTypographyProps,
    secondaryProp = props.secondary,
    secondaryTypographyProps = props.secondaryTypographyProps,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);
  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A),
    dense = _React$useContext.dense;
  var primary = primaryProp != null ? primaryProp : children;
  if (primary != null && primary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A && !disableTypography) {
    primary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }
  var secondary = secondaryProp;
  if (secondary != null && secondary.type !== _Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A && !disableTypography) {
    secondary = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiListItemText'
})(ListItemText));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 43845
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Chip_Chip)
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
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(66734);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/internal/svg-icons/Cancel.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Cancel = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/useForkRef.js
var useForkRef = __webpack_require__(95849);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(75429);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Chip/chipClasses.js


function getChipUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.A)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);
/* harmony default export */ const Chip_chipClasses = (chipClasses);
;// ./node_modules/@mui/material/Chip/Chip.js
'use client';



const _excluded = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"];















const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    disabled = ownerState.disabled,
    size = ownerState.size,
    color = ownerState.color,
    iconColor = ownerState.iconColor,
    onDelete = ownerState.onDelete,
    clickable = ownerState.clickable,
    variant = ownerState.variant;
  const slots = {
    root: ['root', variant, disabled && 'disabled', "size".concat((0,capitalize/* default */.A)(size)), "color".concat((0,capitalize/* default */.A)(color)), clickable && 'clickable', clickable && "clickableColor".concat((0,capitalize/* default */.A)(color)), onDelete && 'deletable', onDelete && "deletableColor".concat((0,capitalize/* default */.A)(color)), "".concat(variant).concat((0,capitalize/* default */.A)(color))],
    label: ['label', "label".concat((0,capitalize/* default */.A)(size))],
    avatar: ['avatar', "avatar".concat((0,capitalize/* default */.A)(size)), "avatarColor".concat((0,capitalize/* default */.A)(color))],
    icon: ['icon', "icon".concat((0,capitalize/* default */.A)(size)), "iconColor".concat((0,capitalize/* default */.A)(iconColor))],
    deleteIcon: ['deleteIcon', "deleteIcon".concat((0,capitalize/* default */.A)(size)), "deleteIconColor".concat((0,capitalize/* default */.A)(color)), "deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))]
  };
  return (0,composeClasses/* default */.A)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiChip',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    const color = ownerState.color,
      iconColor = ownerState.iconColor,
      clickable = ownerState.clickable,
      onDelete = ownerState.onDelete,
      size = ownerState.size,
      variant = ownerState.variant;
    return [{
      ["& .".concat(Chip_chipClasses.avatar)]: styles.avatar
    }, {
      ["& .".concat(Chip_chipClasses.avatar)]: styles["avatar".concat((0,capitalize/* default */.A)(size))]
    }, {
      ["& .".concat(Chip_chipClasses.avatar)]: styles["avatarColor".concat((0,capitalize/* default */.A)(color))]
    }, {
      ["& .".concat(Chip_chipClasses.icon)]: styles.icon
    }, {
      ["& .".concat(Chip_chipClasses.icon)]: styles["icon".concat((0,capitalize/* default */.A)(size))]
    }, {
      ["& .".concat(Chip_chipClasses.icon)]: styles["iconColor".concat((0,capitalize/* default */.A)(iconColor))]
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles.deleteIcon
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(size))]
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIconColor".concat((0,capitalize/* default */.A)(color))]
    }, {
      ["& .".concat(Chip_chipClasses.deleteIcon)]: styles["deleteIcon".concat((0,capitalize/* default */.A)(variant), "Color").concat((0,capitalize/* default */.A)(color))]
    }, styles.root, styles["size".concat((0,capitalize/* default */.A)(size))], styles["color".concat((0,capitalize/* default */.A)(color))], clickable && styles.clickable, clickable && color !== 'default' && styles["clickableColor".concat((0,capitalize/* default */.A)(color), ")")], onDelete && styles.deletable, onDelete && color !== 'default' && styles["deletableColor".concat((0,capitalize/* default */.A)(color))], styles[variant], styles["".concat(variant).concat((0,capitalize/* default */.A)(color))]];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
  return (0,esm_extends/* default */.A)({
    maxWidth: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // reset cursor explicitly in case ButtonBase is used
    cursor: 'unset',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: 'none',
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    ["&.".concat(Chip_chipClasses.disabled)]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: 'none'
    },
    ["& .".concat(Chip_chipClasses.avatar)]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    ["& .".concat(Chip_chipClasses.avatarColorPrimary)]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    ["& .".concat(Chip_chipClasses.avatarColorSecondary)]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    ["& .".concat(Chip_chipClasses.icon)]: (0,esm_extends/* default */.A)({
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === 'small' && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.iconColor === ownerState.color && (0,esm_extends/* default */.A)({
      color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
    }, ownerState.color !== 'default' && {
      color: 'inherit'
    })),
    ["& .".concat(Chip_chipClasses.deleteIcon)]: (0,esm_extends/* default */.A)({
      WebkitTapHighlightColor: 'transparent',
      color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.26)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: theme.vars ? "rgba(".concat(theme.vars.palette.text.primaryChannel, " / 0.4)") : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.4)
      }
    }, ownerState.size === 'small' && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== 'default' && {
      color: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].contrastTextChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].contrastText, 0.7),
      '&:hover, &:active': {
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === 'small' && {
    height: 24
  }, ownerState.color !== 'default' && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== 'default' && {
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, _ref2 => {
  let theme = _ref2.theme,
    ownerState = _ref2.ownerState;
  return (0,esm_extends/* default */.A)({}, ownerState.clickable && {
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.hoverOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
    },
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.selectedChannel, " / calc(").concat(theme.vars.palette.action.selectedOpacity, " + ").concat(theme.vars.palette.action.focusOpacity, "))") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    },
    '&:active': {
      boxShadow: (theme.vars || theme).shadows[1]
    }
  }, ownerState.clickable && ownerState.color !== 'default' && {
    ["&:hover, &.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, _ref3 => {
  let theme = _ref3.theme,
    ownerState = _ref3.ownerState;
  return (0,esm_extends/* default */.A)({}, ownerState.variant === 'outlined' && {
    backgroundColor: 'transparent',
    border: theme.vars ? "1px solid ".concat(theme.vars.palette.Chip.defaultBorder) : "1px solid ".concat(theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]),
    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
      backgroundColor: (theme.vars || theme).palette.action.hover
    },
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    ["& .".concat(Chip_chipClasses.avatar)]: {
      marginLeft: 4
    },
    ["& .".concat(Chip_chipClasses.avatarSmall)]: {
      marginLeft: 2
    },
    ["& .".concat(Chip_chipClasses.icon)]: {
      marginLeft: 4
    },
    ["& .".concat(Chip_chipClasses.iconSmall)]: {
      marginLeft: 2
    },
    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
      marginRight: 5
    },
    ["& .".concat(Chip_chipClasses.deleteIconSmall)]: {
      marginRight: 3
    }
  }, ownerState.variant === 'outlined' && ownerState.color !== 'default' && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: "1px solid ".concat(theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.7)),
    ["&.".concat(Chip_chipClasses.clickable, ":hover")]: {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
    },
    ["&.".concat(Chip_chipClasses.focusVisible)]: {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / ").concat(theme.vars.palette.action.focusOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
    },
    ["& .".concat(Chip_chipClasses.deleteIcon)]: {
      color: theme.vars ? "rgba(".concat(theme.vars.palette[ownerState.color].mainChannel, " / 0.7)") : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.7),
      '&:hover, &:active': {
        color: (theme.vars || theme).palette[ownerState.color].main
      }
    }
  });
});
const ChipLabel = (0,styled/* default */.Ay)('span', {
  name: 'MuiChip',
  slot: 'Label',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    const size = ownerState.size;
    return [styles.label, styles["label".concat((0,capitalize/* default */.A)(size))]];
  }
})(_ref4 => {
  let ownerState = _ref4.ownerState;
  return (0,esm_extends/* default */.A)({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 12,
    paddingRight: 12,
    whiteSpace: 'nowrap'
  }, ownerState.variant === 'outlined' && {
    paddingLeft: 11,
    paddingRight: 11
  }, ownerState.size === 'small' && {
    paddingLeft: 8,
    paddingRight: 8
  }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
    paddingLeft: 7,
    paddingRight: 7
  });
});
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
const Chip = /*#__PURE__*/react.forwardRef(function Chip(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiChip'
  });
  const avatarProp = props.avatar,
    className = props.className,
    clickableProp = props.clickable,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    ComponentProp = props.component,
    deleteIconProp = props.deleteIcon,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    iconProp = props.icon,
    label = props.label,
    onClick = props.onClick,
    onDelete = props.onDelete,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'filled' : _props$variant,
    tabIndex = props.tabIndex,
    _props$skipFocusWhenD = props.skipFocusWhenDisabled,
    skipFocusWhenDisabled = _props$skipFocusWhenD === void 0 ? false : _props$skipFocusWhenD,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const chipRef = react.useRef(null);
  const handleRef = (0,useForkRef/* default */.A)(chipRef, ref);
  const handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase/* default */.A : ComponentProp || 'div';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    disabled,
    size,
    color,
    iconColor: /*#__PURE__*/react.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const moreProps = component === ButtonBase/* default */.A ? (0,esm_extends/* default */.A)({
    component: ComponentProp || 'div',
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: true
  }) : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? (/*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx/* default */.A)(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    })) : /*#__PURE__*/(0,jsx_runtime.jsx)(Cancel, {
      className: (0,clsx/* default */.A)(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx/* default */.A)(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
    });
  }
  if (false) // removed by dead control flow
{}
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ChipRoot, (0,esm_extends/* default */.A)({
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState: ownerState
  }, moreProps, other, {
    children: [avatar || icon, /*#__PURE__*/(0,jsx_runtime.jsx)(ChipLabel, {
      className: (0,clsx/* default */.A)(classes.label),
      ownerState: ownerState,
      children: label
    }), deleteIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);

/***/ },

/***/ 27954
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
'use client';


const usePreviousProps = value => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreviousProps);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);