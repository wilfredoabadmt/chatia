"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[8121],{

/***/ 38121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89379);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57044);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62582);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17339);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33843);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66187);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43577);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82454);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(70567);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50298);
/* harmony import */ var _layout_themeContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(53407);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(78448);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70579);
// Ícones SVG customizados para evitar problemas de fundo branco
const EmailSvgIcon=_ref=>{let _ref$color=_ref.color,color=_ref$color===void 0?"#666666":_ref$color,_ref$size=_ref.size,size=_ref$size===void 0?24:_ref$size;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:'transparent'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path",{d:"M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z",fill:color})});};const LockSvgIcon=_ref2=>{let _ref2$color=_ref2.color,color=_ref2$color===void 0?"#666666":_ref2$color,_ref2$size=_ref2.size,size=_ref2$size===void 0?24:_ref2$size;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:'transparent'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path",{d:"M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13S14 13.9 14 15S13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z",fill:color})});};const VisibilitySvgIcon=_ref3=>{let _ref3$color=_ref3.color,color=_ref3$color===void 0?"#666666":_ref3$color,_ref3$size=_ref3.size,size=_ref3$size===void 0?24:_ref3$size;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:'transparent'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5S21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12S9.24 7 12 7S17 9.24 17 12S14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12S10.34 15 12 15S15 13.66 15 12S13.66 9 12 9Z",fill:color})});};const VisibilityOffSvgIcon=_ref4=>{let _ref4$color=_ref4.color,color=_ref4$color===void 0?"#666666":_ref4$color,_ref4$size=_ref4.size,size=_ref4$size===void 0?24:_ref4$size;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg",{width:size,height:size,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundColor:'transparent'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path",{d:"M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8.04 5.21L10.17 7.34C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.81 19.09L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8Z",fill:color})});};// Check icon for selected language
const CheckIcon=props=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("svg",(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"},props),{},{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("path",{d:"M5 12L10 17L20 7"})}));const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(theme=>({root:{display:"flex",width:"100vw",height:"100vh",justifyContent:"center",alignItems:"center",position:"relative",backgroundColor:theme.mode==="light"?"#f5f5f5":"#1a1a1a",transition:"background-color 0.3s ease"},// Container para controles no topo esquerdo
topLeftControls:{position:"absolute",top:"20px",left:"20px",zIndex:1000,display:"flex",alignItems:"center",gap:"12px"},// Estilos para seletor de idioma (trigger)
langTriggerButton:{display:"flex",alignItems:"center",cursor:"pointer",padding:4,borderRadius:6,transition:"all 0.15s ease",background:"transparent","&:hover":{opacity:0.7}},langTriggerFlag:{width:28,height:20,objectFit:"cover",borderRadius:3,border:theme.mode==="dark"?"1.5px solid rgba(255,255,255,0.3)":"1.5px solid rgba(0,0,0,0.15)",display:"block"},langPopoverPaper:{borderRadius:14,minWidth:230,overflow:"hidden",boxShadow:"0 10px 36px rgba(0,0,0,0.14)",border:theme.mode==="dark"?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(0,0,0,0.06)",background:theme.mode==="dark"?"#1e1e1e":"#ffffff"},langHeader:{padding:"14px 18px 10px",borderBottom:theme.mode==="dark"?"1px solid rgba(255,255,255,0.06)":"1px solid rgba(0,0,0,0.06)"},langHeaderTitle:{fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.5px",color:theme.mode==="dark"?"rgba(255,255,255,0.4)":"rgba(0,0,0,0.38)"},langOptionsList:{padding:6},langOptionItem:{display:"flex",alignItems:"center",gap:12,padding:"9px 12px",borderRadius:8,cursor:"pointer",transition:"all 0.15s ease","&:hover":{background:theme.mode==="dark"?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"}},langOptionItemSelected:{background:theme.mode==="dark"?(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .alpha */ .X4)(theme.palette.primary.main,0.15):(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .alpha */ .X4)(theme.palette.primary.main,0.08),"&:hover":{background:theme.mode==="dark"?(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .alpha */ .X4)(theme.palette.primary.main,0.2):(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__/* .alpha */ .X4)(theme.palette.primary.main,0.12)}},langFlagImg:{width:30,height:20,objectFit:"cover",borderRadius:3,flexShrink:0,border:theme.mode==="dark"?"1px solid rgba(255,255,255,0.12)":"1px solid rgba(0,0,0,0.1)"},langOptionName:{fontSize:14,fontWeight:500,color:theme.mode==="dark"?"#ffffff":"#1a1a1a",flex:1},langCheckWrapper:{width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",color:theme.palette.primary.main,flexShrink:0},// Estilos para toggle de tema (agora ao lado do seletor de idioma)
themeToggle:{background:"transparent !important",backgroundColor:"transparent !important",borderRadius:"50%",padding:"10px",transition:"all 0.3s ease",minWidth:"44px",height:"44px",boxShadow:"none !important","&:hover":{opacity:0.7,background:"transparent !important",backgroundColor:"transparent !important"},"&:focus":{background:"transparent !important",backgroundColor:"transparent !important"},"& .MuiTouchRipple-root":{display:"none"}},formSide:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",padding:"40px",[theme.breakpoints.down("sm")]:{padding:"20px"}},formContainer:{width:"100%",maxWidth:"400px",background:theme.mode==="light"?"#ffffff":"#2c2c2c",borderRadius:"21px",boxShadow:theme.mode==="light"?"0px 4px 12px rgba(0, 0, 0, 0.1)":"0px 4px 12px rgba(0, 0, 0, 0.4)",padding:"30px",transition:"background-color 0.3s ease, box-shadow 0.3s ease",border:theme.mode==="dark"?"1px solid rgba(255, 255, 255, 0.1)":"none",[theme.breakpoints.down("sm")]:{maxWidth:"340px",padding:"20px"}},logoImg:{display:"block",margin:"0 auto 20px",maxWidth:"150px",height:"auto"},submitBtn:{marginTop:"20px",backgroundColor:theme.palette.primary.main,color:"#fff",borderRadius:"14px",padding:"12px",fontWeight:"bold",width:"100%",cursor:"pointer",transition:"all 0.5s ease","&:hover":{backgroundColor:theme.palette.primary.dark,boxShadow:"0px 4px 12px rgba(0, 0, 0, 0.2)"}},signupText:{marginTop:"16px",textAlign:"center",fontSize:"14px",color:theme.mode==="light"?"#666":"#aaa"},signupLink:{color:theme.palette.primary.main,textDecoration:"none",fontWeight:"600","&:hover":{textDecoration:"underline"}},forgotPassword:{marginTop:"15px",textAlign:"center"},forgotPasswordLink:{color:theme.mode==="light"?theme.palette.primary.main:"#ffffff",textDecoration:"none",fontWeight:"500","&:hover":{textDecoration:"underline"}},rememberMeContainer:{display:"flex",alignItems:"center",marginTop:"10px","& .MuiTypography-root":{color:theme.palette.primary.main,fontWeight:500}},/* === Campos com borda e label em cinza fixo (não dinâmico) === */textFieldPrimary:{// Label padrão e focado: cinza fixo
"&& label":{color:"#9e9e9e !important"},"&& label.Mui-focused":{color:"#9e9e9e !important"},// Borda padrão: cinza fixo
"&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#9e9e9e !important",borderRadius:"14px"},// Hover: cinza um pouco mais escuro
"&&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#757575 !important"},// Foco: mesmo cinza
"&& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#9e9e9e !important",borderWidth:"2px"},// Padding para dar espaço aos ícones
"&& .MuiOutlinedInput-input":{paddingLeft:"45px"},// Ajustar posição do label para não sobrepor o ícone
"&& .MuiInputLabel-outlined":{transform:"translate(45px, 20px) scale(1)"},"&& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"}},textFieldWithEndIcon:{// Label padrão e focado: cinza fixo
"&& label":{color:"#9e9e9e !important"},"&& label.Mui-focused":{color:"#9e9e9e !important"},// Borda padrão: cinza fixo
"&& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#9e9e9e !important",borderRadius:"14px"},// Hover
"&&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":{borderColor:"#757575 !important"},// Foco
"&& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#9e9e9e !important",borderWidth:"2px"},// Padding para ícones em ambos os lados
"&& .MuiOutlinedInput-input":{paddingLeft:"45px",paddingRight:"45px"},// Ajustar posição do label para não sobrepor o ícone
"&& .MuiInputLabel-outlined":{transform:"translate(45px, 20px) scale(1)"},"&& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"}},// Container para posicionamento dos ícones
inputContainer:{position:"relative",width:"100%"},// Ícone posicionado absolutamente no lado esquerdo
inputIconLeft:{position:"absolute",left:"12px",top:"35px",// Ajustado para alinhar melhor com o texto do label
zIndex:1,pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},// Ícone posicionado absolutamente no lado direito
inputIconRight:{position:"absolute",right:"12px",top:"27px",// Ajustado para alinhar melhor com o texto do label
zIndex:1,cursor:"pointer",padding:"8px",borderRadius:"4px",transition:"opacity 0.2s",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{opacity:0.7}}}));const Login=()=>{const classes=useStyles();const theme=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)();const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_14__/* .AuthContext */ .c),handleLogin=_useContext.handleLogin;const _useContext2=(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_layout_themeContext__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A),colorMode=_useContext2.colorMode;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({email:"",password:"",remember:false}),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),user=_useState2[0],setUser=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,2),showPassword=_useState4[0],setShowPassword=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState5,2),userCreationEnabled=_useState6[0],setUserCreationEnabled=_useState6[1];const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState7,2),languageMenuAnchor=_useState8[0],setLanguageMenuAnchor=_useState8[1];const _useState9=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),_useState0=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState9,2),mounted=_useState0[0],setMounted=_useState0[1];// Mapeamento de idiomas com bandeiras
const languageOptions=[{code:"pt-BR",shortCode:"pt",flag:"/flags/br.png",name:"Português"},{code:"en",shortCode:"en",flag:"/flags/us.png",name:"English"},{code:"es",shortCode:"es",flag:"/flags/es.png",name:"Español"},{code:"tr",shortCode:"tr",flag:"/flags/tr.png",name:"Türkçe"},{code:"ar",shortCode:"ar",flag:"/flags/sa.png",name:"العربية"}];const currentLanguage=localStorage.getItem("i18nextLng")||"es";const selectedLanguage=languageOptions.find(lang=>lang.code===currentLanguage||lang.shortCode===currentLanguage)||languageOptions[0];const isLangSelected=lang=>lang.code===currentLanguage||lang.shortCode===currentLanguage;const langHeaderLabel=(()=>{const l=(currentLanguage||"pt").split("-")[0];return l==="en"?"Language":l==="es"?"Idioma":l==="tr"?"Dil":l==="ar"?"اللغة":"Idioma";})();const backendUrl=_config_env__WEBPACK_IMPORTED_MODULE_16__/* .BACKEND_URL */ .fn==="https://localhost:8090"?"https://localhost:8090":_config_env__WEBPACK_IMPORTED_MODULE_16__/* .BACKEND_URL */ .fn;// Determinar qual logo usar baseado no tema (usando contexto dinâmico)
const getLogoPath=()=>{const isDark=theme.mode==='dark';return isDark?colorMode.appLogoDark||"/logo-dark.png":colorMode.appLogoLight||"/logo-light.png";};(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{document.title=_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.title");document.body.classList.add("login-page");requestAnimationFrame(()=>setMounted(true));return()=>{document.body.classList.remove("login-page");};},[]);(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{const fetchUserCreationStatus=async()=>{try{const response=await fetch("".concat(backendUrl,"/settings/userCreation"),{method:"GET",headers:{"Content-Type":"application/json"}});if(!response.ok)throw new Error("Failed to fetch user creation status");const data=await response.json();setUserCreationEnabled(data.userCreation==="enabled");}catch(err){console.error("Erro ao verificar userCreation:",err);setUserCreationEnabled(false);}};fetchUserCreationStatus();},[backendUrl]);const handleSubmit=e=>{e.preventDefault();const lang=localStorage.getItem("i18nextLng")||"es";_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.changeLanguage(lang);handleLogin(user);};// Funções para o seletor de idioma
const handleLanguageOpen=event=>{setLanguageMenuAnchor(event.currentTarget);};const handleLanguageClose=()=>{setLanguageMenuAnchor(null);};const handleLanguageChange=async languageCode=>{try{await _translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.changeLanguage(languageCode);localStorage.setItem("i18nextLng",languageCode);handleLanguageClose();window.location.reload();}catch(err){console.error("Erro ao alterar idioma:",err);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.root,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.topLeftControls,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.langTriggerButton,onClick:handleLanguageOpen,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:selectedLanguage.flag,alt:selectedLanguage.name,className:classes.langTriggerFlag})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{className:classes.themeToggle,onClick:colorMode.toggleColorMode,title:theme.mode==='dark'?'Alternar para tema claro':'Alternar para tema escuro',children:theme.mode==='dark'?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:"/theme/sol.png",alt:"Modo claro",style:{width:'24px',height:'24px'}}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:"/theme/lua.png",alt:"Modo escuro",style:{width:'24px',height:'24px'}})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay,{open:Boolean(languageMenuAnchor),anchorEl:languageMenuAnchor,onClose:handleLanguageClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},PaperProps:{className:classes.langPopoverPaper},disableScrollLock:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.langHeader,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{className:classes.langHeaderTitle,children:langHeaderLabel})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.langOptionsList,children:languageOptions.map(lang=>{const selected=isLangSelected(lang);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:"".concat(classes.langOptionItem," ").concat(selected?classes.langOptionItemSelected:""),onClick:()=>handleLanguageChange(lang.code),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:lang.flag,alt:lang.name,className:classes.langFlagImg}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{className:classes.langOptionName,children:lang.name}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.langCheckWrapper,children:selected&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(CheckIcon,{})})]},lang.code);})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.formSide,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("form",{className:classes.formContainer,onSubmit:handleSubmit,style:!mounted?{opacity:0,transform:"translateY(20px)"}:{opacity:1,transform:"translateY(0)",transition:"opacity 0.6s ease, transform 0.6s ease"},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img",{src:getLogoPath(),alt:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.logoAlt"),className:classes.logoImg}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.inputContainer,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{className:classes.textFieldPrimary,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.emailLabel"),variant:"outlined",fullWidth:true,margin:"normal",type:"email",value:user.email,onChange:e=>setUser((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({},user),{},{email:e.target.value}))}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.inputIconLeft,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(EmailSvgIcon,{color:theme.mode==="light"?"#666666":"#cccccc",size:20})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.inputContainer,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{className:classes.textFieldWithEndIcon,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.passwordLabel"),variant:"outlined",fullWidth:true,margin:"normal",type:showPassword?"text":"password",value:user.password,onChange:e=>setUser((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({},user),{},{password:e.target.value}))}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.inputIconLeft,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(LockSvgIcon,{color:theme.mode==="light"?"#666666":"#cccccc",size:20})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.inputIconRight,onClick:()=>setShowPassword(!showPassword),children:showPassword?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(VisibilityOffSvgIcon,{color:theme.mode==="light"?"#374151":"#cccccc",size:20}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(VisibilitySvgIcon,{color:theme.mode==="light"?"#374151":"#cccccc",size:20})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.rememberMeContainer,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{checked:user.remember,onChange:e=>setUser((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({},user),{},{remember:e.target.checked})),name:"remember",color:"primary"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.rememberMe")})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{type:"submit",variant:"contained",color:"primary",className:classes.submitBtn,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.loginButton")}),userCreationEnabled&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div",{className:classes.signupText,children:[_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.noAccount")," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_,{to:"/signup",className:classes.signupLink,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.signupButton")})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div",{className:classes.forgotPassword,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .N_,{to:"/forgot-password",className:classes.forgotPasswordLink,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_2__/* .i18n */ .R.t("login.forgotPassword")})})]})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 17339
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82454);
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75992);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74822);










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled
      }
    },
    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3
      }
    },
    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3
      }
    },
    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .X4)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .X4)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },
    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function IconButton(props, ref) {
  var _props$edge = props.edge,
    edge = _props$edge === void 0 ? false : _props$edge,
    children = props.children,
    classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$disableFocusRi = props.disableFocusRipple,
    disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, color !== 'default' && classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(color))], disabled && classes.disabled, size === "small" && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(size))], {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.label
  }, children));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiIconButton'
})(IconButton));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 43577
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82454);
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74822);
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39855);


// @inheritedComponent IconButton








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle',
      // For correct alignment with the text.
      '@media print': {
        colorAdjust: 'exact'
      }
    },
    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },
    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },
    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },
    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .X4)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },
    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__/* .alpha */ .X4)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },
    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},
    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},
    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },
    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },
    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Switch(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$color = props.color,
    color = _props$color === void 0 ? 'secondary' : _props$color,
    _props$edge = props.edge,
    edge = _props$edge === void 0 ? false : _props$edge,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "color", "edge", "size"]);
  var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.thumb
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(size))])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.switchBase, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("span", {
    className: classes.track
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiSwitch'
})(Switch));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 39855
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49644);
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51051);
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62696);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71745);
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17339);











var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
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
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
    checkedProp = props.checked,
    checkedIcon = props.checkedIcon,
    classes = props.classes,
    className = props.className,
    defaultChecked = props.defaultChecked,
    disabledProp = props.disabled,
    icon = props.icon,
    id = props.id,
    inputProps = props.inputProps,
    inputRef = props.inputRef,
    name = props.name,
    onBlur = props.onBlur,
    onChange = props.onChange,
    onFocus = props.onFocus,
    readOnly = props.readOnly,
    required = props.required,
    tabIndex = props.tabIndex,
    type = props.type,
    value = props.value,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);
  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)({
      controlled: checkedProp,
      default: Boolean(defaultChecked),
      name: 'SwitchBase',
      state: 'checked'
    }),
    _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useControlled, 2),
    checked = _useControlled2[0],
    setCheckedState = _useControlled2[1];
  var muiFormControl = (0,_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)();
  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };
  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };
  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      // TODO v5: remove the second argument.
      onChange(event, newChecked);
    }
  };
  var disabled = disabledProp;
  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }
  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    component: "span",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);