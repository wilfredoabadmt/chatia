(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[3219],{

/***/ 52720
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57044);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62582);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66187);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49768);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55357);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70567);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17392);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41591);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43550);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82455);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94505);
/* harmony import */ var _layout_themeContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(53407);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70579);
// Custom SVG icon for email field
const EmailSvgIcon=_ref=>{let _ref$color=_ref.color,color=_ref$color===void 0?"#666666":_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:'transparent'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path",{d:"M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z",fill:color})});};const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(theme=>({root:{display:"flex",width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center",position:"relative",backgroundColor:theme.mode==="light"?"#f5f5f5":"#1a1a1a",transition:"background-color 0.3s ease"},// Top left controls (language + theme)
topLeftControls:{position:"absolute",top:"20px",left:"20px",zIndex:1000,display:"flex",alignItems:"center",gap:"12px"},// Language selector styles
languageSelector:{display:"flex",alignItems:"center",background:theme.mode==="light"?"rgba(255, 255, 255, 0.9)":"rgba(64, 64, 64, 0.9)",borderRadius:"8px",padding:"8px 12px",boxShadow:theme.mode==="light"?"0px 2px 8px rgba(0, 0, 0, 0.1)":"0px 2px 8px rgba(0, 0, 0, 0.3)",cursor:"pointer",transition:"all 0.3s ease","&:hover":{boxShadow:theme.mode==="light"?"0px 4px 12px rgba(0, 0, 0, 0.15)":"0px 4px 12px rgba(0, 0, 0, 0.4)",transform:"translateY(-1px)",background:theme.mode==="light"?"rgba(255, 255, 255, 0.95)":"rgba(80, 80, 80, 0.95)"}},flagImage:{width:"24px",height:"16px",marginRight:"8px",borderRadius:"2px"},languageText:{fontSize:"14px",fontWeight:"500",color:theme.mode==="light"?theme.palette.primary.main:"#ffffff"},// Theme toggle styles
themeToggle:{background:theme.mode==="light"?"rgba(255, 255, 255, 0.9)":"rgba(64, 64, 64, 0.9)",borderRadius:"50%",padding:"10px",boxShadow:theme.mode==="light"?"0px 2px 8px rgba(0, 0, 0, 0.1)":"0px 2px 8px rgba(0, 0, 0, 0.3)",transition:"all 0.3s ease",minWidth:"44px",height:"44px","&:hover":{boxShadow:theme.mode==="light"?"0px 4px 12px rgba(0, 0, 0, 0.15)":"0px 4px 12px rgba(0, 0, 0, 0.4)",transform:"translateY(-1px)",background:theme.mode==="light"?"rgba(255, 255, 255, 0.95)":"rgba(80, 80, 80, 0.95)"}},// Form container
formSide:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"40px",[theme.breakpoints.down("sm")]:{padding:"20px"}},formContainer:{width:"100%",maxWidth:"400px",background:theme.mode==="light"?"#ffffff":"#2c2c2c",borderRadius:"12px",boxShadow:theme.mode==="light"?"0px 4px 12px rgba(0, 0, 0, 0.1)":"0px 4px 12px rgba(0, 0, 0, 0.4)",padding:"30px",animation:"$fadeIn 1s ease-in-out",transition:"background-color 0.3s ease, box-shadow 0.3s ease",border:theme.mode==="dark"?"1px solid rgba(255, 255, 255, 0.1)":"none",[theme.breakpoints.down("sm")]:{maxWidth:"340px",padding:"20px"}},"@keyframes fadeIn":{"0%":{opacity:0,transform:"translateY(20px)"},"100%":{opacity:1,transform:"translateY(0)"}},logoImg:{display:"block",margin:"0 auto 20px",maxWidth:"150px",height:"auto"},title:{textAlign:'center',marginBottom:'20px',fontWeight:600,color:theme.mode==="light"?theme.palette.text.primary:"#ffffff"},submitBtn:{marginTop:"20px",backgroundColor:theme.palette.primary.main,color:"#fff",borderRadius:"8px",padding:"12px",fontWeight:"bold",width:"100%",cursor:"pointer",transition:"all 0.3s ease","&:hover":{backgroundColor:theme.palette.primary.dark,boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.2)"},"&:disabled":{backgroundColor:theme.palette.action.disabledBackground,color:theme.palette.action.disabled}},forgotPassword:{marginTop:"15px",textAlign:"center"},forgotPasswordLink:{color:theme.mode==="light"?theme.palette.primary.main:"#ffffff",textDecoration:"none",fontWeight:"500","&:hover":{textDecoration:"underline"}},// Input field with icon
textFieldPrimary:{"&& label.Mui-focused":{color:theme.palette.primary.main},"&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"".concat(theme.palette.primary.main," !important")},"&&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"".concat(theme.palette.primary.dark," !important")},"&& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"".concat(theme.palette.primary.main," !important"),borderWidth:"2px"},"&& .MuiOutlinedInput-input":{paddingLeft:"45px"},"&& .MuiInputLabel-outlined":{transform:"translate(45px, 20px) scale(1)"},"&& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"}},// Icon container
inputContainer:{position:"relative",width:"100%"},inputIconLeft:{position:"absolute",left:"12px",top:"35px",zIndex:1,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}}));const ForgotPassword=()=>{const classes=useStyles();const theme=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)();const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_layout_themeContext__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A),colorMode=_useContext.colorMode;// Existing state
const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),email=_useState2[0],setEmail=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,2),enviando=_useState4[0],setEnviando=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState5,2),enviado=_useState6[0],setEnviado=_useState6[1];// New state
const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState7,2),languageMenuAnchor=_useState8[0],setLanguageMenuAnchor=_useState8[1];// Language options
const languageOptions=[{code:"pt",flag:"/flags/br.png",name:"Português"},{code:"en",flag:"/flags/us.png",name:"English"},{code:"es",flag:"/flags/es.png",name:"Español"},{code:"tr",flag:"/flags/tr.png",name:"Türkçe"},{code:"ar",flag:"/flags/sa.png",name:"العربية"}];const currentLanguage=localStorage.getItem("i18nextLng")||"es";const selectedLanguage=languageOptions.find(lang=>lang.code===currentLanguage)||languageOptions[0];// Logo selection function
const getLogoPath=()=>{const isDark=theme.mode==='dark';return isDark?colorMode.appLogoDark||"/logo-dark.png":colorMode.appLogoLight||"/logo-light.png";};// Add body class for scoped styles
(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{document.body.classList.add("forgot-password-page");return()=>{document.body.classList.remove("forgot-password-page");};},[]);// Language selector handlers
const handleLanguageMenuOpen=event=>{setLanguageMenuAnchor(event.currentTarget);};const handleLanguageMenuClose=()=>{setLanguageMenuAnchor(null);};const handleLanguageChange=async languageCode=>{try{await _translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.changeLanguage(languageCode);localStorage.setItem("i18nextLng",languageCode);handleLanguageMenuClose();window.location.reload();// Reload to apply translations
}catch(err){console.error("Erro ao alterar idioma:",err);}};// Keep existing handleSubmit
const handleSubmit=async e=>{e.preventDefault();setEnviando(true);try{await _services_api__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.post("/auth/forgot-password",{email});setEnviando(false);setEnviado(true);react_toastify__WEBPACK_IMPORTED_MODULE_13__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.toasts.success"));setTimeout(()=>setEnviado(false),2000);}catch(err){setEnviando(false);(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(err);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_12__/* .Helmet */ .m,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("title",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("style",{children:"\n          /* Theme-adaptive styles */\n          body.forgot-password-page .MuiButton-root,\n          body.forgot-password-page .MuiButton-root span,\n          body.forgot-password-page button {\n            color: #ffffff !important;\n          }\n\n          body.forgot-password-page .MuiOutlinedInput-root,\n          body.forgot-password-page .MuiOutlinedInput-input {\n            background-color: ".concat(theme.mode==="light"?"#ffffff":"#3a3a3a"," !important;\n            color: ").concat(theme.mode==="light"?"#000000":"#ffffff"," !important;\n          }\n\n          body.forgot-password-page .MuiInputLabel-root {\n            color: ").concat(theme.mode==="light"?"#666666":"#cccccc"," !important;\n          }\n\n          body.forgot-password-page .MuiInputLabel-root.Mui-focused {\n            color: ").concat(theme.palette.primary.main," !important;\n          }\n\n          body.forgot-password-page a {\n            color: ").concat(theme.mode==="light"?theme.palette.primary.main:"#ffffff"," !important;\n          }\n\n          body.forgot-password-page .MuiOutlinedInput-notchedOutline {\n            border-color: ").concat(theme.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"," !important;\n          }\n\n          body.forgot-password-page .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {\n            border-color: ").concat(theme.mode==="light"?"rgba(0, 0, 0, 0.87)":"rgba(255, 255, 255, 0.87)"," !important;\n          }\n        ")})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.root,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.topLeftControls,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.languageSelector,onClick:handleLanguageMenuOpen,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:selectedLanguage.flag,alt:selectedLanguage.name,className:classes.flagImage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:classes.languageText,children:selectedLanguage.name})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{className:classes.themeToggle,onClick:colorMode.toggleColorMode,title:theme.mode==='dark'?'Switch to light mode':'Switch to dark mode',children:theme.mode==='dark'?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:"/theme/sol.png",alt:"Light mode",style:{width:'24px',height:'24px'}}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:"/theme/lua.png",alt:"Dark mode",style:{width:'24px',height:'24px'}})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{anchorEl:languageMenuAnchor,open:Boolean(languageMenuAnchor),onClose:handleLanguageMenuClose,getContentAnchorEl:null,anchorOrigin:{vertical:'bottom',horizontal:'left'},transformOrigin:{vertical:'top',horizontal:'left'},children:languageOptions.map(language=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{onClick:()=>handleLanguageChange(language.code),selected:language.code===currentLanguage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:language.flag,alt:language.name,className:classes.flagImage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{style:{marginLeft:8},children:language.name})]},language.code))}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.formSide,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("form",{className:classes.formContainer,onSubmit:handleSubmit,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:getLogoPath(),alt:_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("login.logoAlt"),className:classes.logoImg}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{variant:"h5",className:classes.title,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.inputContainer,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{className:classes.textFieldPrimary,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.form.emailLabel"),variant:"outlined",fullWidth:true,margin:"normal",type:"email",value:email,onChange:e=>setEmail(e.target.value),disabled:enviando,required:true}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.inputIconLeft,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(EmailSvgIcon,{color:theme.mode==="light"?"#666666":"#cccccc",size:20})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{type:"submit",fullWidth:true,variant:"contained",color:"primary",className:classes.submitBtn,disabled:enviando||enviado,children:enviando?_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.loading.sending"):enviado?_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.loading.sent"):_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.form.submitButton")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.forgotPassword,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .N_,{to:"/login",className:classes.forgotPasswordLink,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_1__/* .i18n */ .R.t("forgotPassword.form.backToLogin")})})]})})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 87603
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75992);
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64867);
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60768);
/* harmony import */ var _List_ListContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45982);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(97950);












var styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },
    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },
    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},
    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },
    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },
    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },
    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },
    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },
    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useEffect : react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect;
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
    alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
    _props$button = props.button,
    button = _props$button === void 0 ? false : _props$button,
    childrenProp = props.children,
    classes = props.classes,
    className = props.className,
    componentProp = props.component,
    _props$ContainerCompo = props.ContainerComponent,
    ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
    _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;
  var ContainerClassName = _props$ContainerProps.className,
    ContainerProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_props$ContainerProps, ["className"]),
    _props$dense = props.dense,
    dense = _props$dense === void 0 ? false : _props$dense,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
    _props$divider = props.divider,
    divider = _props$divider === void 0 ? false : _props$divider,
    focusVisibleClassName = props.focusVisibleClassName,
    _props$selected = props.selected,
    selected = _props$selected === void 0 ? false : _props$selected,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);
  var context = react__WEBPACK_IMPORTED_MODULE_2__.useContext(_List_ListContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) // removed by dead control flow
{}
    }
  }, [autoFocus]);
  var children = react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(childrenProp);
  var hasSecondaryAction = children.length && (0,_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__.useCallback(function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom__WEBPACK_IMPORTED_MODULE_9__.findDOMNode(instance);
  }, []);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(handleOwnRef, ref);
  var componentProps = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);
  var Component = componentProp || 'li';
  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.focusVisible, focusVisibleClassName);
    Component = _ButtonBase__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A;
  }
  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Provider, {
      value: childContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(ContainerComponent, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, componentProps, children), children.pop()));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_List_ListContext__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    ref: handleRef
  }, componentProps), children));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiListItem'
})(ListItem));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 55357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64467);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87603);








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.typography.body1, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},
    /* Styles applied to the root element if `selected={true}`. */
    selected: {},
    /* Styles applied to the root element if dense. */
    dense: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function MenuItem(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    component = _props$component === void 0 ? 'li' : _props$component,
    _props$disableGutters = props.disableGutters,
    disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
    ListItemClasses = props.ListItemClasses,
    _props$role = props.role,
    role = _props$role === void 0 ? 'menuitem' : _props$role,
    selected = props.selected,
    tabIndexProp = props.tabIndex,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);
  var tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_ListItem__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
      dense: classes.dense
    }, ListItemClasses),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiMenuItem'
})(MenuItem));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 17392
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ IconButton_IconButton)
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
;// ./node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./node_modules/@mui/material/IconButton/IconButton.js
'use client';



const _excluded = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];












const useUtilityClasses = ownerState => {
  const classes = ownerState.classes,
    disabled = ownerState.disabled,
    color = ownerState.color,
    edge = ownerState.edge,
    size = ownerState.size;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && "color".concat((0,capitalize/* default */.A)(color)), edge && "edge".concat((0,capitalize/* default */.A)(edge)), "size".concat((0,capitalize/* default */.A)(size))]
  };
  return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase/* default */.A, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const ownerState = props.ownerState;
    return [styles.root, ownerState.color !== 'default' && styles["color".concat((0,capitalize/* default */.A)(ownerState.color))], ownerState.edge && styles["edge".concat((0,capitalize/* default */.A)(ownerState.edge))], styles["size".concat((0,capitalize/* default */.A)(ownerState.size))]];
  }
})(_ref => {
  let theme = _ref.theme,
    ownerState = _ref.ownerState;
  return (0,esm_extends/* default */.A)({
    textAlign: 'center',
    flex: '0 0 auto',
    fontSize: theme.typography.pxToRem(24),
    padding: 8,
    borderRadius: '50%',
    overflow: 'visible',
    // Explicitly set the default value to solve a bug on IE11.
    color: (theme.vars || theme).palette.action.active,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest
    })
  }, !ownerState.disableRipple && {
    '&:hover': {
      backgroundColor: theme.vars ? "rgba(".concat(theme.vars.palette.action.activeChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  }, ownerState.edge === 'start' && {
    marginLeft: ownerState.size === 'small' ? -3 : -12
  }, ownerState.edge === 'end' && {
    marginRight: ownerState.size === 'small' ? -3 : -12
  });
}, _ref2 => {
  let theme = _ref2.theme,
    ownerState = _ref2.ownerState;
  var _palette;
  const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return (0,esm_extends/* default */.A)({}, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, ownerState.color !== 'inherit' && ownerState.color !== 'default' && (0,esm_extends/* default */.A)({
    color: palette == null ? void 0 : palette.main
  }, !ownerState.disableRipple && {
    '&:hover': (0,esm_extends/* default */.A)({}, palette && {
      backgroundColor: theme.vars ? "rgba(".concat(palette.mainChannel, " / ").concat(theme.vars.palette.action.hoverOpacity, ")") : (0,colorManipulator/* alpha */.X4)(palette.main, theme.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    })
  }), ownerState.size === 'small' && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === 'large' && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    ["&.".concat(IconButton_iconButtonClasses.disabled)]: {
      backgroundColor: 'transparent',
      color: (theme.vars || theme).palette.action.disabled
    }
  });
});

/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */
const IconButton = /*#__PURE__*/react.forwardRef(function IconButton(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiIconButton'
  });
  const _props$edge = props.edge,
    edge = _props$edge === void 0 ? false : _props$edge,
    children = props.children,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$disableFocusRi = props.disableFocusRipple,
    disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IconButtonRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other, {
    ownerState: ownerState,
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);

/***/ },

/***/ 24994
(module) {

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }

}]);