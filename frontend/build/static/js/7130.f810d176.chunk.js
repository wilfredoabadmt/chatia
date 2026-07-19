"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[7130],{

/***/ 67022
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97950);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63462);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43198);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84440);
/* harmony import */ var _mui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26564);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70579);
'use client';







function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/material-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/material-ui/api/portal/)
 */
const Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function Portal(props, forwardedRef) {
  const children = props.children,
    container = props.container,
    _props$disablePortal = props.disablePortal,
    disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal;
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(null),
    _React$useState2 = (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_React$useState, 2),
    mountNode = _React$useState2[0],
    setMountNode = _React$useState2[1];
  const handleRef = (0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(children) ? (0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(children) : null, forwardedRef);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  (0,_mui_utils__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(() => {
    if (mountNode && !disablePortal) {
      (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(forwardedRef, mountNode);
      return () => {
        (0,_mui_utils__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(children, newProps);
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal(children, mountNode) : mountNode
  });
});
 false ? 0 : void 0;
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 85865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Typography_Typography)
});

// UNUSED EXPORTS: TypographyRoot

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(18698);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(6803);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Typography/typographyClasses.js


function getTypographyUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiTypography', slot);
}
const typographyClasses = (0,generateUtilityClasses/* default */.A)('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const Typography_typographyClasses = ((/* unused pure expression or super */ null && (typographyClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Typography/Typography.js
'use client';



const _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];










const useUtilityClasses = ownerState => {
  const align = ownerState.align,
    gutterBottom = ownerState.gutterBottom,
    noWrap = ownerState.noWrap,
    paragraph = ownerState.paragraph,
    variant = ownerState.variant,
    classes = ownerState.classes;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && "align".concat((0,capitalize/* default */.A)(align)), gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,composeClasses/* default */.A)(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles["align".concat((0,capitalize/* default */.A)(ownerState.align))], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.A)({
    margin: 0
  }, ownerState.variant === 'inherit' && {
    // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
    font: 'inherit'
  }, ownerState.variant !== 'inherit' && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
    textAlign: ownerState.align
  }, ownerState.noWrap && {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, ownerState.gutterBottom && {
    marginBottom: '0.35em'
  }, ownerState.paragraph && {
    marginBottom: 16
  });
});
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
};

// TODO v6: deprecate these color values in v5.x and remove the transformation in v6
const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};
const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};
const Typography = /*#__PURE__*/react.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,extendSxProp/* default */.A)((0,esm_extends/* default */.A)({}, themeProps, {
    color
  }));
  const _props$align = props.align,
    align = _props$align === void 0 ? 'inherit' : _props$align,
    className = props.className,
    component = props.component,
    _props$gutterBottom = props.gutterBottom,
    gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
    _props$noWrap = props.noWrap,
    noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
    _props$paragraph = props.paragraph,
    paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'body1' : _props$variant,
    _props$variantMapping = props.variantMapping,
    variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TypographyRoot, (0,esm_extends/* default */.A)({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Typography_Typography = (Typography);

/***/ },

/***/ 26240
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45527);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15170);
/* harmony import */ var _identifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13375);
'use client';





function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
  if (false) // removed by dead control flow
{}
  return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}

/***/ },

/***/ 45527
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export systemDefaultTheme */
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18280);
/* harmony import */ var _useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67082);
'use client';



const systemDefaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
function useTheme() {
  let defaultTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : systemDefaultTheme;
  return (0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(defaultTheme);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 67082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69369);
'use client';



function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme() {
  let defaultTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const contextTheme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__.T);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 95006
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _isHostComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94340);



/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || (0,_isHostComponent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(elementType)) {
    return otherProps;
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, otherProps, {
    ownerState: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, otherProps.ownerState, ownerState)
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendOwnerState);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 76114
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object) {
  let excludeKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (extractEventHandlers);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 43198
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getReactElementRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);


/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */
function getReactElementRef(element) {
  // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
  if (parseInt(react__WEBPACK_IMPORTED_MODULE_0__.version, 10) >= 19) {
    var _element$props;
    return (element == null || (_element$props = element.props) == null ? void 0 : _element$props.ref) || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return (element == null ? void 0 : element.ref) || null;
}

/***/ },

/***/ 94340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isHostComponent);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 9523
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ mergeSlotProps_mergeSlotProps)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
var extractEventHandlers = __webpack_require__(76114);
;// ./node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const omitEventHandlers_omitEventHandlers = (omitEventHandlers);
;// ./node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js




/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const getSlotProps = parameters.getSlotProps,
    additionalProps = parameters.additionalProps,
    externalSlotProps = parameters.externalSlotProps,
    externalForwardedProps = parameters.externalForwardedProps,
    className = parameters.className;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.A)(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = (0,esm_extends/* default */.A)({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = (0,esm_extends/* default */.A)({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = (0,extractEventHandlers/* default */.A)((0,esm_extends/* default */.A)({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.A)(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = (0,esm_extends/* default */.A)({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = (0,esm_extends/* default */.A)({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
/* harmony default export */ const mergeSlotProps_mergeSlotProps = (mergeSlotProps);

/***/ },

/***/ 31668
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ ownerDocument)
/* harmony export */ });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ },

/***/ 46004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveComponentProps);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 5844
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

let react__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useId)
/* harmony export */ });
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
'use client';



let globalId = 0;
function useGlobalId(idOverride) {
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(idOverride),
    _React$useState2 = (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_React$useState, 2),
    defaultId = _React$useState2[0],
    setDefaultId = _React$useState2[1];
  const id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId("mui-".concat(globalId));
    }
  }, [defaultId]);
  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_1__, 2)))['useId'.toString()];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

/***/ },

/***/ 88092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98587);
/* harmony import */ var _useForkRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63462);
/* harmony import */ var _appendOwnerState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95006);
/* harmony import */ var _mergeSlotProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9523);
/* harmony import */ var _resolveComponentProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46004);
'use client';



const _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];




/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const elementType = parameters.elementType,
    externalSlotProps = parameters.externalSlotProps,
    ownerState = parameters.ownerState,
    _parameters$skipResol = parameters.skipResolvingSlotProps,
    skipResolvingSlotProps = _parameters$skipResol === void 0 ? false : _parameters$skipResol,
    rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : (0,_resolveComponentProps__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(externalSlotProps, ownerState);
  const _mergeSlotProps = (0,_mergeSlotProps__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, rest, {
      externalSlotProps: resolvedComponentsProps
    })),
    mergedProps = _mergeSlotProps.props,
    internalRef = _mergeSlotProps.internalRef;
  const ref = (0,_useForkRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = (0,_appendOwnerState__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(elementType, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSlotProps);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);