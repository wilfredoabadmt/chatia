"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[1810],{

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

/***/ 6593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _mui_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42456);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);