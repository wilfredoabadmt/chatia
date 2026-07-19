"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[7020],{

/***/ 50038
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66795);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70579);
const _excluded=["children","maxWidth"];const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(theme=>({mainContainer:{flex:1,padding:"12px !important",height:"calc(100% - 48px)",overflow:"hidden"},contentWrapper:{height:"100%",overflowY:"hidden",display:"flex",flexDirection:"column"}}));const MainContainer=_ref=>{let children=_ref.children,_ref$maxWidth=_ref.maxWidth,maxWidth=_ref$maxWidth===void 0?false:_ref$maxWidth,props=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref,_excluded);const classes=useStyles();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({className:classes.mainContainer,maxWidth:maxWidth},props),{},{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classes.contentWrapper,children:children})}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainContainer);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 51170
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81551);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(theme=>({contactsHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0px 6px 8px 6px",gap:theme.spacing(2),flexWrap:"wrap"}}));const MainHeader=_ref=>{let children=_ref.children;const classes=useStyles();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classes.contactsHeader,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeader);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86586
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81551);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(theme=>({MainHeaderButtonsWrapper:{flex:"none",marginLeft:"auto","& > *":{margin:theme.spacing(1)}}}));const MainHeaderButtonsWrapper=_ref=>{let children=_ref.children;const classes=useStyles();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:classes.MainHeaderButtonsWrapper,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainHeaderButtonsWrapper);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 45824
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66187);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70579);
function Title(props){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{variant:"h6",color:"primary",style:{marginBottom:0,whiteSpace:"nowrap"},children:props.children});}

/***/ },

/***/ 78721
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94505);
const useHelps=()=>{const findAll=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$api$request=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/helps",method:'GET',params}),data=_await$api$request.data;return data;},[]);const list=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$api$request2=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/helps/list',method:'GET',params}),data=_await$api$request2.data;return data;},[]);const save=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request3=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/helps',method:'POST',data}),responseData=_await$api$request3.data;return responseData;},[]);const update=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request4=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/helps/".concat(data.id),method:'PUT',data}),responseData=_await$api$request4.data;return responseData;},[]);const remove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id=>{const _await$api$request5=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/helps/".concat(id),method:'DELETE'}),data=_await$api$request5.data;return data;},[]);return{findAll,list,save,update,remove};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHelps);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 74836
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50750);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20495);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66187);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81551);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50038);
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51170);
/* harmony import */ var _components_MainHeaderButtonsWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86586);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45824);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57044);
/* harmony import */ var _hooks_useHelps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78721);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(theme=>({mainPaperContainer:{overflowY:'auto',maxHeight:'calc(100vh - 200px)'},mainPaper:{width:'100%',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))',gap:theme.spacing(3),padding:theme.spacing(2),marginBottom:theme.spacing(3)},helpPaper:{position:'relative',width:'100%',minHeight:'340px',padding:theme.spacing(2),boxShadow:theme.shadows[3],borderRadius:theme.spacing(1),cursor:'pointer',display:'flex',flexDirection:'column',justifyContent:'space-between',maxWidth:'340px'},paperHover:{transition:'transform 0.3s, box-shadow 0.3s','&:hover':{transform:'scale(1.03)',boxShadow:"0 0 8px",color:theme.palette.primary.main}},videoThumbnail:{width:'100%',height:'calc(100% - 56px)',objectFit:'cover',borderRadius:"".concat(theme.spacing(1),"px ").concat(theme.spacing(1),"px 0 0")},videoTitle:{marginTop:theme.spacing(1),flex:1},videoDescription:{maxHeight:'100px',overflow:'hidden'},videoModal:{display:'flex',alignItems:'center',justifyContent:'center'},videoModalContent:{outline:'none',width:'90%',maxWidth:1024,aspectRatio:'16/9',position:'relative',backgroundColor:'white',borderRadius:theme.spacing(1),overflow:'hidden'}}));const Helps=()=>{const classes=useStyles();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),records=_useState2[0],setRecords=_useState2[1];const _useHelps=(0,_hooks_useHelps__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(),list=_useHelps.list;const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,2),selectedVideo=_useState4[0],setSelectedVideo=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{async function fetchData(){const helps=await list();setRecords(helps);}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);const openVideoModal=video=>{setSelectedVideo(video);};const closeVideoModal=()=>{setSelectedVideo(null);};const handleModalClose=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(event=>{if(event.key==="Escape"){closeVideoModal();}},[]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{document.addEventListener("keydown",handleModalClose);return()=>{document.removeEventListener("keydown",handleModalClose);};},[handleModalClose]);const renderVideoModal=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{open:Boolean(selectedVideo),onClose:closeVideoModal,className:classes.videoModal,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:classes.videoModalContent,children:selectedVideo&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("iframe",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0},src:"https://www.youtube.com/embed/".concat(selectedVideo),title:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("helps.videoPlayerTitle"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:true})})});};const renderHelps=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:"".concat(classes.mainPaper," ").concat(classes.mainPaperContainer),children:records.length?records.map((record,key)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:"".concat(classes.helpPaper," ").concat(classes.paperHover),onClick:()=>openVideoModal(record.video),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("img",{src:"https://img.youtube.com/vi/".concat(record.video,"/mqdefault.jpg"),alt:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("helps.thumbnail"),className:classes.videoThumbnail}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{variant:"button",className:classes.videoTitle,children:record.title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{variant:"caption",className:classes.videoDescription,children:record.description})]},key)):null})});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_MainHeader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_Title__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{children:[_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("helps.title")," (",records.length,")"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_MainHeaderButtonsWrapper__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:classes.mainPaper,children:renderHelps()}),renderVideoModal()]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helps);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 66795
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64467);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74822);








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),
    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },
    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];
      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }
      return acc;
    }, {}),
    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),
    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),
    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),
    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),
    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function Container(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
    _props$fixed = props.fixed,
    fixed = _props$fixed === void 0 ? false : _props$fixed,
    _props$maxWidth = props.maxWidth,
    maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(String(maxWidth)))]),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiContainer'
})(Container));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 20495
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);







var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },
    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Paper(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$square = props.square,
    square = _props$square === void 0 ? false : _props$square,
    _props$elevation = props.elevation,
    elevation = _props$elevation === void 0 ? 1 : _props$elevation,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'elevation' : _props$variant,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(props, ["classes", "className", "component", "square", "elevation", "variant"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiPaper'
})(Paper));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86225
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97950);
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29189);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60768);







function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(container);
}
var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Portal(props, ref) {
  var children = props.children,
    container = props.container,
    _props$disablePortal = props.disablePortal,
    disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
    onRendered = props.onRendered;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    mountNode = _React$useState[0],
    setMountNode = _React$useState[1];
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(ref, mountNode);
      return function () {
        (0,_utils_setRef__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(ref, null);
      };
    }
    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);
  if (disablePortal) {
    if (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {
        ref: handleRef
      });
    }
    return children;
  }
  return mountNode ? /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal(children, mountNode) : mountNode;
});
 false ? 0 : void 0;
if (false) // removed by dead control flow
{}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 66187
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74822);







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },
    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,
    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,
    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,
    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,
    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,
    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,
    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,
    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,
    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,
    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,
    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,
    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,
    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,
    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },
    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },
    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },
    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },
    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },
    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },
    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },
    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },
    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },
    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(props, ref) {
  var _props$align = props.align,
    align = _props$align === void 0 ? 'inherit' : _props$align,
    classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'initial' : _props$color,
    component = props.component,
    _props$display = props.display,
    display = _props$display === void 0 ? 'initial' : _props$display,
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
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);
  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(align))], display !== 'initial' && classes["display".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(display))]),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiTypography'
})(Typography));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 81551
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70273);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15921);



function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(stylesOrCreator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A
  }, options));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeStyles);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createChainedFunction)
/* harmony export */ });
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }
    if (false) // removed by dead control flow
{}
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ },

/***/ 29189
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ setRef)
/* harmony export */ });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ },

/***/ 32158
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useEventCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ },

/***/ 60768
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useForkRef)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29189);


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    if (refA == null && refB == null) {
      return null;
    }
    return function (refValue) {
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(refA, refValue);
      (0,_setRef__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }

}]);