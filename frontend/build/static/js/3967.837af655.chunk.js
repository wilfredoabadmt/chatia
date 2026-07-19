"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[3967],{

/***/ 84373
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 81637
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CircularProgress_CircularProgress)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(57528);
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
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(83290);
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
;// ./node_modules/@mui/material/CircularProgress/circularProgressClasses.js


function getCircularProgressUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiCircularProgress', slot);
}
const circularProgressClasses = (0,generateUtilityClasses/* default */.A)('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);
/* harmony default export */ const CircularProgress_circularProgressClasses = ((/* unused pure expression or super */ null && (circularProgressClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/CircularProgress/CircularProgress.js
'use client';


var _templateObject, _templateObject2, _templateObject3, _templateObject4;


const _excluded = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;











const SIZE = 44;
const circularRotateKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t || (_t = _(_templateObject || (_templateObject = (0,taggedTemplateLiteral/* default */.A)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))));
const circularDashKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t2 || (_t2 = _(_templateObject2 || (_templateObject2 = (0,taggedTemplateLiteral/* default */.A)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))));
const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    variant = ownerState.variant,
    color = ownerState.color,
    disableShrink = ownerState.disableShrink;
  const slots = {
    root: ['root', variant, "color".concat((0,capitalize/* default */.A)(color))],
    svg: ['svg'],
    circle: ['circle', "circle".concat((0,capitalize/* default */.A)(variant)), disableShrink && 'circleDisableShrink']
  };
  return (0,composeClasses/* default */.A)(slots, getCircularProgressUtilityClass, classes);
};
const CircularProgressRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiCircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, styles[ownerState.variant], styles["color".concat((0,capitalize/* default */.A)(ownerState.color))]];
  }
})(_ref => {
  let ownerState = _ref.ownerState,
    theme = _ref.theme;
  return (0,esm_extends/* default */.A)({
    display: 'inline-block'
  }, ownerState.variant === 'determinate' && {
    transition: theme.transitions.create('transform')
  }, ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main
  });
}, _ref2 => {
  let ownerState = _ref2.ownerState;
  return ownerState.variant === 'indeterminate' && (0,emotion_react_browser_esm/* css */.AH)(_t3 || (_t3 = _(_templateObject3 || (_templateObject3 = (0,taggedTemplateLiteral/* default */.A)(["\n      animation: ", " 1.4s linear infinite;\n    "])), 0)), circularRotateKeyframe);
});
const CircularProgressSVG = (0,styled/* default */.Ay)('svg', {
  name: 'MuiCircularProgress',
  slot: 'Svg',
  overridesResolver: (props, styles) => styles.svg
})({
  display: 'block' // Keeps the progress centered
});
const CircularProgressCircle = (0,styled/* default */.Ay)('circle', {
  name: 'MuiCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.circle, styles["circle".concat((0,capitalize/* default */.A)(ownerState.variant))], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(_ref3 => {
  let ownerState = _ref3.ownerState,
    theme = _ref3.theme;
  return (0,esm_extends/* default */.A)({
    stroke: 'currentColor'
  }, ownerState.variant === 'determinate' && {
    transition: theme.transitions.create('stroke-dashoffset')
  }, ownerState.variant === 'indeterminate' && {
    // Some default value that looks fine waiting for the animation to kicks in.
    strokeDasharray: '80px, 200px',
    strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.
  });
}, _ref4 => {
  let ownerState = _ref4.ownerState;
  return ownerState.variant === 'indeterminate' && !ownerState.disableShrink && (0,emotion_react_browser_esm/* css */.AH)(_t4 || (_t4 = _(_templateObject4 || (_templateObject4 = (0,taggedTemplateLiteral/* default */.A)(["\n      animation: ", " 1.4s ease-in-out infinite;\n    "])), 0)), circularDashKeyframe);
});

/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */
const CircularProgress = /*#__PURE__*/react.forwardRef(function CircularProgress(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiCircularProgress'
  });
  const className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'primary' : _props$color,
    _props$disableShrink = props.disableShrink,
    disableShrink = _props$disableShrink === void 0 ? false : _props$disableShrink,
    _props$size = props.size,
    size = _props$size === void 0 ? 40 : _props$size,
    style = props.style,
    _props$thickness = props.thickness,
    thickness = _props$thickness === void 0 ? 3.6 : _props$thickness,
    _props$value = props.value,
    value = _props$value === void 0 ? 0 : _props$value,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'indeterminate' : _props$variant,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};
  if (variant === 'determinate') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = "".concat(((100 - value) / 100 * circumference).toFixed(3), "px");
    rootStyle.transform = 'rotate(-90deg)';
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    style: (0,esm_extends/* default */.A)({
      width: size,
      height: size
    }, rootStyle, style),
    ownerState: ownerState,
    ref: ref,
    role: "progressbar"
  }, rootProps, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressSVG, {
      className: classes.svg,
      ownerState: ownerState,
      viewBox: "".concat(SIZE / 2, " ").concat(SIZE / 2, " ").concat(SIZE, " ").concat(SIZE),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const CircularProgress_CircularProgress = (CircularProgress);

/***/ },

/***/ 68903
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ Grid_Grid)
});

// UNUSED EXPORTS: generateColumnGap, generateDirection, generateGrid, generateRowGap, resolveSpacingClasses, resolveSpacingStyles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(98587);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(58168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(58387);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(89751);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(18698);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(98610);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(34535);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js + 1 modules
var DefaultPropsProvider = __webpack_require__(6431);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(26240);
;// ./node_modules/@mui/material/Grid/GridContext.js
'use client';



/**
 * @ignore - internal component.
 */
const GridContext = /*#__PURE__*/react.createContext();
if (false) // removed by dead control flow
{}
/* harmony default export */ const Grid_GridContext = (GridContext);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(92532);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(72372);
;// ./node_modules/@mui/material/Grid/gridClasses.js


function getGridUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiGrid', slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ['column-reverse', 'column', 'row-reverse', 'row'];
const WRAPS = ['nowrap', 'wrap-reverse', 'wrap'];
const GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = (0,generateUtilityClasses/* default */.A)('MuiGrid', ['root', 'container', 'item', 'zeroMinWidth',
// spacings
...SPACINGS.map(spacing => "spacing-xs-".concat(spacing)),
// direction values
...DIRECTIONS.map(direction => "direction-xs-".concat(direction)),
// wrap values
...WRAPS.map(wrap => "wrap-xs-".concat(wrap)),
// grid sizes for all breakpoints
...GRID_SIZES.map(size => "grid-xs-".concat(size)), ...GRID_SIZES.map(size => "grid-sm-".concat(size)), ...GRID_SIZES.map(size => "grid-md-".concat(size)), ...GRID_SIZES.map(size => "grid-lg-".concat(size)), ...GRID_SIZES.map(size => "grid-xl-".concat(size))]);
/* harmony default export */ const Grid_gridClasses = (gridClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/Grid/Grid.js
'use client';

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/


const _excluded = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];













function getOffset(val) {
  const parse = parseFloat(val);
  return "".concat(parse).concat(String(val).replace(String(parse), '') || 'px');
}
function generateGrid(_ref) {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  let size;
  return theme.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    // Use side effect over immutability for better performance.
    let styles = {};
    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }
    if (!size) {
      return globalStyles;
    }
    if (size === true) {
      // For the auto layouting
      styles = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
    } else if (size === 'auto') {
      styles = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto'
      };
    } else {
      const columnsBreakpointValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
        values: ownerState.columns,
        breakpoints: theme.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === 'object' ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue === undefined || columnValue === null) {
        return globalStyles;
      }
      // Keep 7 significant numbers.
      const width = "".concat(Math.round(size / columnValue * 10e7) / 10e5, "%");
      let more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme.spacing(ownerState.columnSpacing);
        if (themeSpacing !== '0px') {
          const fullWidth = "calc(".concat(width, " + ").concat(getOffset(themeSpacing), ")");
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }

      // Close to the bootstrap implementation:
      // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41
      styles = (0,esm_extends/* default */.A)({
        flexBasis: width,
        flexGrow: 0,
        maxWidth: width
      }, more);
    }

    // No need for a media query for the first size.
    if (theme.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles);
    } else {
      globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
    return globalStyles;
  }, {});
}
function generateDirection(_ref2) {
  let theme = _ref2.theme,
    ownerState = _ref2.ownerState;
  const directionValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  });
  return (0,breakpoints/* handleBreakpoints */.NI)({
    theme
  }, directionValues, propValue => {
    const output = {
      flexDirection: propValue
    };
    if (propValue.indexOf('column') === 0) {
      output["& > .".concat(Grid_gridClasses.item)] = {
        maxWidth: 'none'
      };
    }
    return output;
  });
}

/**
 * Extracts zero value breakpoint keys before a non-zero value breakpoint key.
 * @example { xs: 0, sm: 0, md: 2, lg: 0, xl: 0 } or [0, 0, 2, 0, 0]
 * @returns [xs, sm]
 */
function extractZeroValueBreakpointKeys(_ref3) {
  let breakpoints = _ref3.breakpoints,
    values = _ref3.values;
  let nonZeroKey = '';
  Object.keys(values).forEach(key => {
    if (nonZeroKey !== '') {
      return;
    }
    if (values[key] !== 0) {
      nonZeroKey = key;
    }
  });
  const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b) => {
    return breakpoints[a] - breakpoints[b];
  });
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap(_ref4) {
  let theme = _ref4.theme,
    ownerState = _ref4.ownerState;
  const container = ownerState.container,
    rowSpacing = ownerState.rowSpacing;
  let styles = {};
  if (container && rowSpacing !== 0) {
    const rowSpacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: rowSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof rowSpacingValues === 'object') {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: rowSpacingValues
      });
    }
    styles = (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, rowSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK;
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== '0px') {
        return {
          marginTop: "-".concat(getOffset(themeSpacing)),
          ["& > .".concat(Grid_gridClasses.item)]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
        return {};
      }
      return {
        marginTop: 0,
        ["& > .".concat(Grid_gridClasses.item)]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles;
}
function generateColumnGap(_ref5) {
  let theme = _ref5.theme,
    ownerState = _ref5.ownerState;
  const container = ownerState.container,
    columnSpacing = ownerState.columnSpacing;
  let styles = {};
  if (container && columnSpacing !== 0) {
    const columnSpacingValues = (0,breakpoints/* resolveBreakpointValues */.kW)({
      values: columnSpacing,
      breakpoints: theme.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof columnSpacingValues === 'object') {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme.breakpoints.values,
        values: columnSpacingValues
      });
    }
    styles = (0,breakpoints/* handleBreakpoints */.NI)({
      theme
    }, columnSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK2;
      const themeSpacing = theme.spacing(propValue);
      if (themeSpacing !== '0px') {
        return {
          width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
          marginLeft: "-".concat(getOffset(themeSpacing)),
          ["& > .".concat(Grid_gridClasses.item)]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
        return {};
      }
      return {
        width: '100%',
        marginLeft: 0,
        ["& > .".concat(Grid_gridClasses.item)]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles;
}
function resolveSpacingStyles(spacing, breakpoints) {
  let styles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // undefined/null or `spacing` <= 0
  if (!spacing || spacing <= 0) {
    return [];
  }
  // in case of string/number `spacing`
  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return [styles["spacing-xs-".concat(String(spacing))]];
  }
  // in case of object `spacing`
  const spacingStyles = [];
  breakpoints.forEach(breakpoint => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      spacingStyles.push(styles["spacing-".concat(breakpoint, "-").concat(String(value))]);
    }
  });
  return spacingStyles;
}

// Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',
const GridRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    const container = ownerState.container,
      direction = ownerState.direction,
      item = ownerState.item,
      spacing = ownerState.spacing,
      wrap = ownerState.wrap,
      zeroMinWidth = ownerState.zeroMinWidth,
      breakpoints = ownerState.breakpoints;
    let spacingStyles = [];

    // in case of grid item
    if (container) {
      spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles);
    }
    const breakpointsStyles = [];
    breakpoints.forEach(breakpoint => {
      const value = ownerState[breakpoint];
      if (value) {
        breakpointsStyles.push(styles["grid-".concat(breakpoint, "-").concat(String(value))]);
      }
    });
    return [styles.root, container && styles.container, item && styles.item, zeroMinWidth && styles.zeroMinWidth, ...spacingStyles, direction !== 'row' && styles["direction-xs-".concat(String(direction))], wrap !== 'wrap' && styles["wrap-xs-".concat(String(wrap))], ...breakpointsStyles];
  }
})(_ref6 => {
  let ownerState = _ref6.ownerState;
  return (0,esm_extends/* default */.A)({
    boxSizing: 'border-box'
  }, ownerState.container && {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  }, ownerState.item && {
    margin: 0 // For instance, it's useful when used with a `figure` element.
  }, ownerState.zeroMinWidth && {
    minWidth: 0
  }, ownerState.wrap !== 'wrap' && {
    flexWrap: ownerState.wrap
  });
}, generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
  // undefined/null or `spacing` <= 0
  if (!spacing || spacing <= 0) {
    return [];
  }
  // in case of string/number `spacing`
  if (typeof spacing === 'string' && !Number.isNaN(Number(spacing)) || typeof spacing === 'number') {
    return ["spacing-xs-".concat(String(spacing))];
  }
  // in case of object `spacing`
  const classes = [];
  breakpoints.forEach(breakpoint => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      const className = "spacing-".concat(breakpoint, "-").concat(String(value));
      classes.push(className);
    }
  });
  return classes;
}
const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    container = ownerState.container,
    direction = ownerState.direction,
    item = ownerState.item,
    spacing = ownerState.spacing,
    wrap = ownerState.wrap,
    zeroMinWidth = ownerState.zeroMinWidth,
    breakpoints = ownerState.breakpoints;
  let spacingClasses = [];

  // in case of grid item
  if (container) {
    spacingClasses = resolveSpacingClasses(spacing, breakpoints);
  }
  const breakpointsClasses = [];
  breakpoints.forEach(breakpoint => {
    const value = ownerState[breakpoint];
    if (value) {
      breakpointsClasses.push("grid-".concat(breakpoint, "-").concat(String(value)));
    }
  });
  const slots = {
    root: ['root', container && 'container', item && 'item', zeroMinWidth && 'zeroMinWidth', ...spacingClasses, direction !== 'row' && "direction-xs-".concat(String(direction)), wrap !== 'wrap' && "wrap-xs-".concat(String(wrap)), ...breakpointsClasses]
  };
  return (0,composeClasses/* default */.A)(slots, getGridUtilityClass, classes);
};
const Grid = /*#__PURE__*/react.forwardRef(function Grid(inProps, ref) {
  const themeProps = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiGrid'
  });
  const _useTheme = (0,useTheme/* default */.A)(),
    breakpoints = _useTheme.breakpoints;
  const props = (0,extendSxProp/* default */.A)(themeProps);
  const className = props.className,
    columnsProp = props.columns,
    columnSpacingProp = props.columnSpacing,
    _props$component = props.component,
    component = _props$component === void 0 ? 'div' : _props$component,
    _props$container = props.container,
    container = _props$container === void 0 ? false : _props$container,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'row' : _props$direction,
    _props$item = props.item,
    item = _props$item === void 0 ? false : _props$item,
    rowSpacingProp = props.rowSpacing,
    _props$spacing = props.spacing,
    spacing = _props$spacing === void 0 ? 0 : _props$spacing,
    _props$wrap = props.wrap,
    wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
    _props$zeroMinWidth = props.zeroMinWidth,
    zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = react.useContext(Grid_GridContext);

  // columns set with default breakpoint unit of 12
  const columns = container ? columnsProp || 12 : columnsContext;
  const breakpointsValues = {};
  const otherFiltered = (0,esm_extends/* default */.A)({}, other);
  breakpoints.keys.forEach(breakpoint => {
    if (other[breakpoint] != null) {
      breakpointsValues[breakpoint] = other[breakpoint];
      delete otherFiltered[breakpoint];
    }
  });
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    columns,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing
  }, breakpointsValues, {
    breakpoints: breakpoints.keys
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Grid_GridContext.Provider, {
    value: columns,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(GridRoot, (0,esm_extends/* default */.A)({
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.root, className),
      as: component,
      ref: ref
    }, otherFiltered))
  });
});
 false ? 0 : void 0;
if (false) // removed by dead control flow
{}
/* harmony default export */ const Grid_Grid = (Grid);

/***/ }

}]);