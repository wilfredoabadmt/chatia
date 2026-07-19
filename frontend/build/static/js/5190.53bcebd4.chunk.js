"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[5190],{

/***/ 98223
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93250);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58425);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70579);
const _excluded=["loading","children"];const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(theme=>({button:{position:"relative"},buttonProgress:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}));const ButtonWithSpinner=_ref=>{let loading=_ref.loading,children=_ref.children,rest=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref,_excluded);const classes=useStyles();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({className:classes.button,disabled:loading},rest),{},{children:[children,loading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{size:24,className:classes.buttonProgress})]}));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonWithSpinner);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 12421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ Can)
});

;// ./src/rules.js
const rules={user:{static:[]},admin:{static:["dashboard:view","drawer-admin-items:view","tickets-manager:showall","user-modal:editProfile","user-modal:editQueues","ticket-options:deleteTicket","contacts-page:deleteContact","connections-page:actionButtons","connections-page:addConnection","connections-page:editOrDeleteConnection","tickets-manager:closeAll"]}};/* harmony default export */ const src_rules = (rules);
;// ./src/components/Can/index.js
const check=(role,action,data)=>{const permissions=src_rules[role];if(!permissions){// role is not present in the rules
return false;}const staticPermissions=permissions.static;if(staticPermissions&&staticPermissions.includes(action)){// static rule not provided for action
return true;}const dynamicPermissions=permissions.dynamic;if(dynamicPermissions){const permissionCondition=dynamicPermissions[action];if(!permissionCondition){// dynamic rule not provided for action
return false;}return permissionCondition(data);}return false;};const Can=_ref=>{let role=_ref.role,perform=_ref.perform,data=_ref.data,yes=_ref.yes,no=_ref.no;return check(role,perform,data)?yes():no();};Can.defaultProps={yes:()=>null,no:()=>null};

/***/ },

/***/ 10168
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35801);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52907);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43867);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85883);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66187);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70579);
const ConfirmationModal=_ref=>{let title=_ref.title,children=_ref.children,open=_ref.open,onClose=_ref.onClose,onConfirm=_ref.onConfirm;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{open:open,onClose:()=>onClose(false),"aria-labelledby":"confirm-dialog",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{id:"confirm-dialog",children:title}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{dividers:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:children})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{variant:"contained",onClick:()=>onClose(false),color:"default",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("confirmationModal.buttons.cancel")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{variant:"contained",onClick:()=>{onClose(false);onConfirm();},color:"secondary",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("confirmationModal.buttons.confirm")})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmationModal);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86196
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66795);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61531);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66187);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81551);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(theme=>({container:{textAlign:'center',marginTop:theme.spacing(8),flex:1},title:{marginBottom:theme.spacing(4)},button:{marginTop:theme.spacing(2),color:'#fff !important',boxShadow:'none',borderRadius:20},boxContainer:{background:theme.palette.tabHeaderBackground,borderRadius:20,display:'flex',padding:20,display:'flex',alignItems:'center',width:'80%',justifyContent:'center',margin:'auto'}}));const ForbiddenPage=()=>{const classes=useStyles();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:classes.container,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:classes.boxContainer,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{variant:"h1",className:classes.title,color:"error",children:"403"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{variant:"h5",color:"textSecondary",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_6__/* .i18n */ .R.t("forbiddenPage.accessDenied")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:classes.button,variant:"contained",color:"primary",href:"/tickets",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_6__/* .i18n */ .R.t("forbiddenPage.buttons.back")})]})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForbiddenPage);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

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

/***/ 66069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46807);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82455);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35801);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43867);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20495);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(66187);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57044);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94505);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50298);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(theme=>({root:{display:"flex",flexWrap:"wrap"}}));const QrcodeModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,whatsAppId=_ref.whatsAppId;const classes=useStyles();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),qrCode=_useState2[0],setQrCode=_useState2[1];const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_11__/* .AuthContext */ .c),user=_useContext.user,socket=_useContext.socket;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{const fetchSession=async()=>{if(!whatsAppId)return;try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay.get("/whatsapp/".concat(whatsAppId)),data=_await$api$get.data;setQrCode(data.qrcode);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(err);}};fetchSession();},[whatsAppId]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(!whatsAppId)return;const companyId=user.companyId;// const socket = socketConnection({ companyId, userId: user.id });
const onWhatsappData=data=>{if(data.action==="update"&&data.session.id===whatsAppId){setQrCode(data.session.qrcode);}if(data.action==="update"&&data.session.qrcode===""){onClose();}};socket.on("company-".concat(companyId,"-whatsappSession"),onWhatsappData);return()=>{socket.off("company-".concat(companyId,"-whatsappSession"),onWhatsappData);};},[whatsAppId,onClose]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{open:open,onClose:onClose,maxWidth:"lg",scroll:"paper",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{elevation:0,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{color:"secondary",gutterBottom:true,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_9__/* .i18n */ .R.t("qrCode.message")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{className:classes.root,children:qrCode?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)((qrcode_react__WEBPACK_IMPORTED_MODULE_2___default()),{value:qrCode,size:300,style:{backgroundColor:"white",padding:'5px'}}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_9__/* .i18n */ .R.t("qrcodeModal.waiting")})})]})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(QrcodeModal));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 16489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23819);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55357);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67467);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59548);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19227);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82455);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(theme=>({chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2}}));const QueueSelect=_ref=>{let selectedQueueIds=_ref.selectedQueueIds,onChange=_ref.onChange;const classes=useStyles();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),queues=_useState2[0],setQueues=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{(async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay.get("/queue"),data=_await$api$get.data;setQueues(data);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(err);}})();},[]);const handleChange=e=>{onChange(e.target.value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{style:{marginTop:6},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{fullWidth:true,margin:"dense",variant:"outlined",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueSelect.inputLabel")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{multiple:true,labelWidth:60,value:selectedQueueIds,onChange:handleChange,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},renderValue:selected=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:classes.chips,children:(selected===null||selected===void 0?void 0:selected.length)>0&&selected.map(id=>{const queue=queues.find(q=>q.id===id);return queue?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{style:{backgroundColor:queue.color},variant:"outlined",label:queue.name,className:classes.chip},id):null;})}),children:queues.map(queue=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{value:queue.id,children:queue.name},queue.id))})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QueueSelect);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 40530
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18073);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81551);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93201);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53536);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_number_format__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89577);
/* harmony import */ var _ButtonWithSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98223);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(theme=>({root:{width:"100%"},fullWidth:{width:"100%"},textfield:{width:"100%",fontSize:"0.875em"},row:{paddingTop:theme.spacing(2),paddingBottom:theme.spacing(2)},control:{paddingRight:theme.spacing(1),paddingLeft:theme.spacing(1)},buttonContainer:{textAlign:"right",padding:theme.spacing(1)}}));function SchedulesForm(props){const initialValues=props.initialValues,onSubmit=props.onSubmit,loading=props.loading,labelSaveButton=props.labelSaveButton;const classes=useStyles();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.monday"),weekdayEn:"monday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.tuesday"),weekdayEn:"tuesday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.wednesday"),weekdayEn:"wednesday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.thursday"),weekdayEn:"thursday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.friday"),weekdayEn:"friday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.saturday"),weekdayEn:"saturday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.sunday"),weekdayEn:"sunday",startTimeA:"",endTimeA:"",startTimeB:"",endTimeB:""}]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),schedules=_useState2[0],setSchedules=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{console.log(initialValues);if((0,lodash__WEBPACK_IMPORTED_MODULE_7__.isArray)(initialValues)&&initialValues.length>0){setSchedules(initialValues);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[initialValues]);const handleSubmit=data=>{console.log(data);onSubmit(data);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .Formik */ .l1,{enableReinitialize:true,className:classes.fullWidth,initialValues:{schedules},onSubmit:_ref=>{let schedules=_ref.schedules;return setTimeout(()=>{handleSubmit(schedules);},500);},children:_ref2=>{let values=_ref2.values;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_6__/* .Form */ .lV,{className:classes.fullWidth,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .FieldArray */ .ED,{name:"schedules",render:arrayHelpers=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{spacing:4,container:true,children:values.schedules.map((item,index)=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:classes.control,xs:12,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .FastField */ .B0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.dayWeek"),name:"schedules[".concat(index,"].weekday"),disabled:true,variant:"outlined",className:classes.fullWidth,margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:classes.control,xs:12,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .FastField */ .B0,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.startTimeA"),name:"schedules[".concat(index,"].startTimeA"),children:_ref3=>{let field=_ref3.field;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_number_format__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},field),{},{variant:"outlined",margin:"dense",customInput:_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,format:"##:##",className:classes.fullWidth,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.startTimeA")}));}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:classes.control,xs:12,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .FastField */ .B0,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.endTimeA"),name:"schedules[".concat(index,"].endTimeA"),children:_ref4=>{let field=_ref4.field;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_number_format__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},field),{},{variant:"outlined",margin:"dense",customInput:_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,format:"##:##",className:classes.fullWidth,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.endTimeA")}));}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:classes.control,xs:12,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .FastField */ .B0,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.startTimeB"),name:"schedules[".concat(index,"].startTimeB"),children:_ref5=>{let field=_ref5.field;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_number_format__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},field),{},{variant:"outlined",margin:"dense",customInput:_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,format:"##:##",className:classes.fullWidth,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.startTimeB")}));}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{className:classes.control,xs:12,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(formik__WEBPACK_IMPORTED_MODULE_6__/* .FastField */ .B0,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.endTimeB"),name:"schedules[".concat(index,"].endTimeB"),children:_ref6=>{let field=_ref6.field;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_number_format__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},field),{},{variant:"outlined",margin:"dense",customInput:_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,format:"##:##",className:classes.fullWidth,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("queueModal.serviceHours.endTimeB")}));}})})]})},index);})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{className:classes.buttonContainer,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ButtonWithSpinner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{loading:loading,type:"submit",color:"primary",variant:"contained",children:labelSaveButton!==null&&labelSaveButton!==void 0?labelSaveButton:_translate_i18n__WEBPACK_IMPORTED_MODULE_10__/* .i18n */ .R.t("whatsappModal.buttons.okEdit")})})]});}});}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SchedulesForm);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 54165
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70579);
const _excluded=["children","value","name"];const TabPanel=_ref=>{let children=_ref.children,value=_ref.value,name=_ref.name,rest=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref,_excluded);if(value===name){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({role:"tabpanel",id:"simple-tabpanel-".concat(name),"aria-labelledby":"simple-tab-".concat(name)},rest),{},{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:children})}));}else return null;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPanel);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 13293
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72703);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18885);
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84373);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81551);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(theme=>({customTableCell:{display:"flex",alignItems:"center",justifyContent:"center"}}));const TableRowSkeleton=_ref=>{let avatar=_ref.avatar,columns=_ref.columns;const classes=useStyles();return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{children:[avatar&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{style:{paddingRight:0},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{animation:"wave",variant:"circle",width:40,height:40})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{animation:"wave",height:30,width:80})})]}),Array.from({length:columns},(_,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{align:"center",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:classes.customTableCell,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{align:"center",animation:"wave",height:30,width:80})})},index))]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableRowSkeleton);
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

/***/ 68813
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73033);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93201);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43550);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53536);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72512);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93250);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(86178);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35801);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85883);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(20495);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49868);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52643);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(43867);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(18073);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(73083);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(43577);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(67467);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(23819);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59548);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(55357);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(61531);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(52907);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(58425);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(57044);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(82455);
/* harmony import */ var _QueueSelect__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(16489);
/* harmony import */ var _TabPanel__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(54165);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(30703);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(50248);
/* harmony import */ var _hooks_useSettings_companySettings__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(40004);
/* harmony import */ var _SchedulesForm__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(40530);
/* harmony import */ var _hooks_usePlans__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(62829);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(50298);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)(theme=>({root:{display:"flex",flexWrap:"wrap",gap:4},multFieldLine:{marginTop:12,display:"flex","& > *:not(:last-child)":{marginRight:theme.spacing(1)}},btnWrapper:{position:"relative"},importMessage:{marginTop:12,marginBottom:12,paddingBottom:20,paddingTop:3,padding:12,border:"solid grey 2px",borderRadius:4,display:"flex","& > *:not(:last-child)":{marginRight:theme.spacing(1)}},buttonProgress:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},textField:{marginRight:theme.spacing(1),flex:1},tokenRefresh:{minWidth:"auto",display:"flex",// Torna o botão flexível para alinhar o conteúdo
alignItems:"center",// Alinha verticalmente ao centro
justifyContent:"center"// Alinha horizontalmente ao centro
}}));const SessionSchema=yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik().shape({name:yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().min(2,_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("validation.tooShort")).max(50,_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("validation.tooLong")).required(_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("validation.required"))});const WhatsAppModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,whatsAppId=_ref.whatsAppId;const classes=useStyles();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),autoToken=_useState2[0],setAutoToken=_useState2[1];const inputFileRef=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3,2),attachment=_useState4[0],setAttachment=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState5,2),attachmentName=_useState6[0],setAttachmentName=_useState6[1];const initialState={name:"",greetingMessage:"",complationMessage:"",outOfHoursMessage:"",ratingMessage:"",isDefault:false,token:"",maxUseBotQueues:3,provider:"beta",expiresTicket:0,allowGroup:false,enableImportMessage:false,groupAsTicket:"disabled",timeUseBotQueues:'0',timeSendQueue:'0',sendIdQueue:0,expiresTicketNPS:'0',expiresInactiveMessage:"",timeInactiveMessage:"",inactiveMessage:"",maxUseBotQueuesNPS:3,whenExpiresTicket:0,timeCreateNewTicket:0,greetingMediaAttachment:"",importRecentMessages:"",importOldMessages:"",importOldMessagesGroups:"",integrationId:"",collectiveVacationEnd:"",collectiveVacationStart:"",collectiveVacationMessage:"",queueIdImportMessages:null};const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState7,2),whatsApp=_useState8[0],setWhatsApp=_useState8[1];const _useState9=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState0=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState9,2),selectedQueueIds=_useState0[0],setSelectedQueueIds=_useState0[1];const _useState1=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState10=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState1,2),queues=_useState10[0],setQueues=_useState10[1];const _useState11=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("general"),_useState12=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState11,2),tab=_useState12[0],setTab=_useState12[1];const _useState13=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState14=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState13,2),enableImportMessage=_useState14[0],setEnableImportMessage=_useState14[1];const _useState15=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState16=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState15,2),importOldMessagesGroups=_useState16[0],setImportOldMessagesGroups=_useState16[1];const _useState17=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState18=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState17,2),closedTicketsPostImported=_useState18[0],setClosedTicketsPostImported=_useState18[1];const _useState19=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(moment__WEBPACK_IMPORTED_MODULE_10___default()().add(-1,"days").format("YYYY-MM-DDTHH:mm")),_useState20=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState19,2),importOldMessages=_useState20[0],setImportOldMessages=_useState20[1];const _useState21=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(moment__WEBPACK_IMPORTED_MODULE_10___default()().add(-1,"minutes").format("YYYY-MM-DDTHH:mm")),_useState22=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState21,2),importRecentMessages=_useState22[0],setImportRecentMessages=_useState22[1];const _useState23=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState24=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState23,2),copied=_useState24[0],setCopied=_useState24[1];const _useState25=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState26=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState25,2),schedulesEnabled=_useState26[0],setSchedulesEnabled=_useState26[1];const _useState27=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState28=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState27,2),NPSEnabled=_useState28[0],setNPSEnabled=_useState28[1];const _useState29=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState30=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState29,2),showOpenAi=_useState30[0],setShowOpenAi=_useState30[1];const _useState31=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState32=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState31,2),showIntegrations=_useState32[0],setShowIntegrations=_useState32[1];const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_39__/* .AuthContext */ .c),user=_useContext.user;const _useState33=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.monday"),weekdayEn:"monday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.tuesday"),weekdayEn:"tuesday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.wednesday"),weekdayEn:"wednesday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.thursday"),weekdayEn:"thursday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.friday"),weekdayEn:"friday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.saturday"),weekdayEn:"saturday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"},{weekday:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.serviceHours.sunday"),weekdayEn:"sunday",startTimeA:"08:00",endTimeA:"12:00",startTimeB:"13:00",endTimeB:"18:00"}]),_useState34=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState33,2),schedules=_useState34[0],setSchedules=_useState34[1];const _useCompanySettings=(0,_hooks_useSettings_companySettings__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A)(),getSetting=_useCompanySettings.get;const _usePlans=(0,_hooks_usePlans__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .A)(),getPlanCompany=_usePlans.getPlanCompany;const _useState35=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState36=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState35,2),selectedPrompt=_useState36[0],setSelectedPrompt=_useState36[1];const _useState37=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState38=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState37,2),prompts=_useState38[0],setPrompts=_useState38[1];const _useState39=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState40=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState39,2),webhooks=_useState40[0],setWebhooks=_useState40[1];const _useState41=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),_useState42=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState41,2),flowIdNotPhrase=_useState42[0],setFlowIdNotPhrase=_useState42[1];const _useState43=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(),_useState44=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState43,2),flowIdWelcome=_useState44[0],setFlowIdWelcome=_useState44[1];const _useState45=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState46=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState45,2),selectedIntegration=_useState46[0],setSelectedIntegration=_useState46[1];const _useState47=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState48=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState47,2),integrations=_useState48[0],setIntegrations=_useState48[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(!whatsAppId&&!whatsApp.token){setAutoToken(generateRandomCode(30));}else if(whatsAppId&&!whatsApp.token){setAutoToken(generateRandomCode(30));}else{setAutoToken(whatsApp.token);}},[whatsAppId,whatsApp.token]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{async function fetchData(){const companyId=user.companyId;const planConfigs=await getPlanCompany(undefined,companyId);if(planConfigs&&planConfigs.plan){setShowOpenAi(planConfigs.plan.useOpenAi);setShowIntegrations(planConfigs.plan.useIntegrations);}}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{(async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("/prompt"),data=_await$api$get.data;setPrompts(data.prompts);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}})();},[whatsAppId]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{const fetchData=async()=>{const settingSchedules=await getSetting({"column":"scheduleType"});setSchedulesEnabled(settingSchedules.scheduleType==="connection");const settingNPS=await getSetting({"column":"userRating"});setNPSEnabled(settingNPS.userRating==="enabled");};fetchData();},[]);const handleEnableImportMessage=async e=>{setEnableImportMessage(e.target.checked);};(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{const fetchSession=async()=>{if(!whatsAppId)return;try{var _data$queues;const _await$api$get2=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("whatsapp/".concat(whatsAppId,"?session=0")),data=_await$api$get2.data;if(data&&data!==null&&data!==void 0&&data.flowIdNotPhrase){const _await$api$get3=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("flowbuilder/".concat(data.flowIdNotPhrase)),flowDefault=_await$api$get3.data;console.log(flowDefault===null||flowDefault===void 0?void 0:flowDefault.flow.id);const selectedFlowIdNotPhrase=flowDefault===null||flowDefault===void 0?void 0:flowDefault.flow.id;setFlowIdNotPhrase(selectedFlowIdNotPhrase);}if(data&&data!==null&&data!==void 0&&data.flowIdWelcome){const _await$api$get4=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("flowbuilder/".concat(data.flowIdWelcome)),flowDefault=_await$api$get4.data;console.log(flowDefault===null||flowDefault===void 0?void 0:flowDefault.flow.id);const selectedFlowIdWelcome=flowDefault===null||flowDefault===void 0?void 0:flowDefault.flow.id;setFlowIdWelcome(selectedFlowIdWelcome);}setWhatsApp(data);setAttachmentName(data.greetingMediaAttachment);setAutoToken(data.token);setSelectedIntegration(data===null||data===void 0?void 0:data.integrationId);data.promptId?setSelectedPrompt(data.promptId):setSelectedPrompt(null);const whatsQueueIds=(_data$queues=data.queues)===null||_data$queues===void 0?void 0:_data$queues.map(queue=>queue.id);setSelectedQueueIds(whatsQueueIds);setSchedules(data.schedules);if(!(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isNil)(data===null||data===void 0?void 0:data.importOldMessages)){setEnableImportMessage(true);setImportOldMessages(data===null||data===void 0?void 0:data.importOldMessages);setImportRecentMessages(data===null||data===void 0?void 0:data.importRecentMessages);setClosedTicketsPostImported(data===null||data===void 0?void 0:data.closedTicketsPostImported);setImportOldMessagesGroups(data===null||data===void 0?void 0:data.importOldMessagesGroups);}}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}};fetchSession();},[whatsAppId]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{(async()=>{try{const _await$api$get5=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("/queue"),data=_await$api$get5.data;setQueues(data);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}})();},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{(async()=>{try{const _await$api$get6=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("/queueIntegration"),data=_await$api$get6.data;setIntegrations(data.queueIntegrations);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}})();},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{(async()=>{try{const _await$api$get7=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.get("/flowbuilder"),data=_await$api$get7.data;setWebhooks(data.flows);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}})();},[]);const handleChangeQueue=e=>{setSelectedQueueIds(e);setSelectedPrompt(null);setSelectedIntegration(null);};const handleChangeIntegration=e=>{setSelectedIntegration(e.target.value);setSelectedPrompt(null);setSelectedQueueIds([]);};const handleChangeFlowIdNotPhrase=e=>{console.log(e.target.value);setFlowIdNotPhrase(e.target.value);};const handleChangeFlowIdWelcome=e=>{console.log(e.target.value);setFlowIdWelcome(e.target.value);};const handleChangePrompt=e=>{setSelectedPrompt(e.target.value);setSelectedQueueIds([]);};const handleSaveWhatsApp=async values=>{if(!whatsAppId)setAutoToken(generateRandomCode(30));if(NPSEnabled){if((0,lodash__WEBPACK_IMPORTED_MODULE_6__.isNil)(values.ratingMessage)){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.errorRatingMessage"));return;}if(values.expiresTicketNPS==='0'&&values.expiresTicketNPS===''&&values.expiresTicketNPS===0){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.errorExpiresNPS"));return;}}if(values.timeSendQueue==='')values.timeSendQueue='0';if((values.sendIdQueue===0||values.sendIdQueue===''||(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isNil)(values.sendIdQueue))&&values.timeSendQueue!==0&&values.timeSendQueue!=='0'){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.errorSendQueue"));return;}const whatsappData=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},values),{},{flowIdWelcome:flowIdWelcome?flowIdWelcome:null,flowIdNotPhrase:flowIdNotPhrase?flowIdNotPhrase:null,integrationId:selectedIntegration?selectedIntegration:null,queueIds:selectedQueueIds,importOldMessages:enableImportMessage?importOldMessages:null,importRecentMessages:enableImportMessage?importRecentMessages:null,importOldMessagesGroups:importOldMessagesGroups?importOldMessagesGroups:null,closedTicketsPostImported:closedTicketsPostImported?closedTicketsPostImported:null,token:autoToken?autoToken:null,schedules,promptId:selectedPrompt?selectedPrompt:null});console.dir(whatsappData);delete whatsappData["queues"];delete whatsappData["session"];try{if(whatsAppId){if(whatsAppId&&enableImportMessage&&(whatsApp===null||whatsApp===void 0?void 0:whatsApp.status)==="CONNECTED"){try{setWhatsApp((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},whatsApp),{},{status:"qrcode"}));await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.delete("/whatsappsession/".concat(whatsApp.id));}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}}await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.put("/whatsapp/".concat(whatsAppId),whatsappData);if(attachment!=null){const formData=new FormData();formData.append("file",attachment);await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.post("/whatsapp/".concat(whatsAppId,"/media-upload"),formData);}if(!attachmentName&&whatsApp.greetingMediaAttachment!==null){await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.delete("/whatsapp/".concat(whatsAppId,"/media-upload"));}}else{const _await$api$post=await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.post("/whatsapp",whatsappData),data=_await$api$post.data;if(attachment!=null){const formData=new FormData();formData.append("file",attachment);await _services_api__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Ay.post("/whatsapp/".concat(data.id,"/media-upload"),formData);}}react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.success"));handleClose();}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A)(err);}};function generateRandomCode(length){const charset="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyvz0123456789";let code="";for(let i=0;i<length;i++){const randomIndex=Math.floor(Math.random()*charset.length);code+=charset.charAt(randomIndex);}return code;}const handleRefreshToken=()=>{setAutoToken(generateRandomCode(30));};const handleCopyToken=()=>{navigator.clipboard.writeText(autoToken);// Copia o token para a área de transferência    
setCopied(true);// Define o estado de cópia como verdadeiro
};const handleSaveSchedules=async values=>{react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.messages.clickSaveToRegister"));setSchedules(values);};const handleClose=()=>{onClose();setWhatsApp(initialState);setEnableImportMessage(false);// inputFileRef.current.value = null
setAttachment(null);setAttachmentName("");setCopied(false);};const handleTabChange=(event,newValue)=>{setTab(newValue);};const handleFileUpload=()=>{const file=inputFileRef.current.files[0];setAttachment(file);setAttachmentName(file.name);inputFileRef.current.value=null;};const handleDeleFile=()=>{setAttachment(null);setAttachmentName(null);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{className:classes.root,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{open:open,onClose:handleClose,maxWidth:"lg",fullWidth:true,scroll:"paper",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{children:whatsAppId?_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.title.edit"):_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.title.add")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Formik */ .l1,{initialValues:whatsApp,enableReinitialize:true,validationSchema:SessionSchema,onSubmit:(values,actions)=>{setTimeout(()=>{handleSaveWhatsApp(values);actions.setSubmitting(false);},400);},children:_ref2=>{var _values$collectiveVac,_values$collectiveVac2;let values=_ref2.values,touched=_ref2.touched,errors=_ref2.errors,isSubmitting=_ref2.isSubmitting;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .lV,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{className:classes.mainPaper,elevation:1,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{value:tab,indicatorColor:"primary",textColor:"primary",scrollButtons:"on",variant:"scrollable",onChange:handleTabChange,className:classes.tab,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.general"),value:"general"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.integrations"),value:"integrations"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.messages"),value:"messages"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.chatbot"),value:"chatbot"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.assessments"),value:"nps"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.defaultFlow"),value:"flowbuilder"}),schedulesEnabled&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.tabs.schedules"),value:"schedules"})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{className:classes.paper,elevation:0,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"general",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{dividers:true,children:[attachmentName&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{style:{display:'flex',flexDirection:'row-reverse'},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{variant:"outlined",color:"primary",endIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{}),onClick:handleDeleFile,children:attachmentName})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div",{style:{display:'flex',flexDirection:"column-reverse"},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("input",{type:"file",accept:"video/*,image/*",ref:inputFileRef,style:{display:'none'},onChange:handleFileUpload}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{variant:"contained",color:"primary",onClick:()=>inputFileRef.current.click(),children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("userModal.buttons.addImage")})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{className:classes.multFieldLine,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.name"),autoFocus:true,name:"name",error:touched.name&&Boolean(errors.name),helperText:touched.name&&errors.name,variant:"outlined",margin:"dense",className:classes.textField})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{style:{paddingTop:15},item:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,color:"primary",name:"isDefault",checked:values.isDefault}),label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.default")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,color:"primary",name:"allowGroup",checked:values.allowGroup}),label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.group")})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{id:"groupAsTicket-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.groupAsTicket")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.groupAsTicket"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.groupAsTicket"),labelId:"groupAsTicket-selection-label",id:"groupAsTicket",name:"groupAsTicket",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:"disabled",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.menuItem.disabled")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:"enabled",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.menuItem.enabled")})]})]})})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div",{className:classes.importMessage,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div",{className:classes.multFieldLine,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{style:{marginRight:7,color:"gray"},label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.importOldMessagesEnable"),labelPlacement:"end",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,{size:"medium",checked:enableImportMessage,onChange:handleEnableImportMessage,name:"importOldMessagesEnable",color:"primary"})}),enableImportMessage?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{style:{marginRight:7,color:"gray"},label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.importOldMessagesGroups"),labelPlacement:"end",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,{size:"medium",checked:importOldMessagesGroups,onChange:e=>setImportOldMessagesGroups(e.target.checked),name:"importOldMessagesGroups",color:"primary"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{style:{marginRight:7,color:"gray"},label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.closedTicketsPostImported"),labelPlacement:"end",control:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,{size:"medium",checked:closedTicketsPostImported,onChange:e=>setClosedTicketsPostImported(e.target.checked),name:"closedTicketsPostImported",color:"primary"})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.Fragment,{})]}),enableImportMessage?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{style:{marginTop:18},container:true,spacing:1,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{fullWidth:true,as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.importOldMessages"),type:"datetime-local",name:"importOldMessages",inputProps:{max:moment__WEBPACK_IMPORTED_MODULE_10___default()().add(0,"minutes").format("YYYY-MM-DDTHH:mm"),min:moment__WEBPACK_IMPORTED_MODULE_10___default()().add(-2,"years").format("YYYY-MM-DDTHH:mm")}//min="2022-11-06T22:22:55"
,InputLabelProps:{shrink:true},error:touched.importOldMessages&&Boolean(errors.importOldMessages),helperText:touched.importOldMessages&&errors.importOldMessages,variant:"outlined",value:moment__WEBPACK_IMPORTED_MODULE_10___default()(importOldMessages).format("YYYY-MM-DDTHH:mm"),onChange:e=>{setImportOldMessages(e.target.value);}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{fullWidth:true,as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.importRecentMessages"),type:"datetime-local",name:"importRecentMessages",inputProps:{max:moment__WEBPACK_IMPORTED_MODULE_10___default()().add(0,"minutes").format("YYYY-MM-DDTHH:mm"),min:moment__WEBPACK_IMPORTED_MODULE_10___default()(importOldMessages).format("YYYY-MM-DDTHH:mm")}//min="2022-11-06T22:22:55"
,InputLabelProps:{shrink:true},error:touched.importRecentMessages&&Boolean(errors.importRecentMessages),helperText:touched.importRecentMessages&&errors.importRecentMessages,variant:"outlined",value:moment__WEBPACK_IMPORTED_MODULE_10___default()(importRecentMessages).format("YYYY-MM-DDTHH:mm"),onChange:e=>{setImportRecentMessages(e.target.value);}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:12,md:12,xl:12,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",className:classes.FormControl,fullWidth:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{id:"queueIdImportMessages-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.queueIdImportMessages")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,name:"queueIdImportMessages",id:"queueIdImportMessages",value:values.queueIdImportMessages||'0',required:enableImportMessage,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.queueIdImportMessages"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.queueIdImportMessages"),labelId:"queueIdImportMessages-selection-label",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:0,children:"\xA0"}),queues.map(queue=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:queue.id,children:queue.name},queue.id))]})]})})]}):null]}),enableImportMessage&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("span",{style:{color:"red"},children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.importAlert")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,{display:"flex",alignItems:"center",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:12,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.token"),type:"token",fullWidth:true// name="token"
,value:autoToken,variant:"outlined",margin:"dense",disabled:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{onClick:handleRefreshToken,disabled:isSubmitting,className:classes.tokenRefresh,variant:"text",startIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A,{style:{marginLeft:5,color:"green"}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{onClick:handleCopyToken,className:classes.tokenRefresh,variant:"text",startIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A,{style:{color:copied?"blue":"inherit"}})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)("div",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("h3",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.queueRedirection")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("p",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.queueRedirectionDesc")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",className:classes.FormControl,fullWidth:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{id:"sendIdQueue-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.sendIdQueue")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,name:"sendIdQueue",id:"sendIdQueue",value:values.sendIdQueue||'0',required:values.timeSendQueue>0,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.sendIdQueue"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.sendIdQueue"),labelId:"sendIdQueue-selection-label",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:0,children:"\xA0"}),queues.map(queue=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:queue.id,children:queue.name},queue.id))]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.timeSendQueue"),fullWidth:true,name:"timeSendQueue",variant:"outlined",margin:"dense",error:touched.timeSendQueue&&Boolean(errors.timeSendQueue),helperText:touched.timeSendQueue&&errors.timeSendQueue})})]})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"integrations",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{dividers:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_QueueSelect__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A,{selectedQueueIds:selectedQueueIds,onChange:selectedIds=>handleChangeQueue(selectedIds)}),showIntegrations&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",className:classes.FormControl,fullWidth:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{id:"integrationId-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.form.integrationId")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.form.integrationId"),name:"integrationId",value:selectedIntegration||"",onChange:handleChangeIntegration,id:"integrationId",variant:"outlined",margin:"dense",placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("queueModal.form.integrationId"),labelId:"integrationId-selection-label",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:null,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.menuItem.disabled")}),integrations.map(integration=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:integration.id,children:integration.name},integration.id))]})]}),showOpenAi&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{margin:"dense",variant:"outlined",fullWidth:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.prompt")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{labelId:"dialog-select-prompt-label",id:"dialog-select-prompt",name:"promptId",value:selectedPrompt||"",onChange:handleChangePrompt,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.prompt"),fullWidth:true,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},children:prompts.map(prompt=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:prompt.id,children:prompt.name},prompt.id))})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"messages",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{dividers:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{container:true,spacing:1,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.greetingMessage"),type:"greetingMessage",multiline:true,minRows:4,fullWidth:true,name:"greetingMessage",error:touched.greetingMessage&&Boolean(errors.greetingMessage),helperText:touched.greetingMessage&&errors.greetingMessage,variant:"outlined",margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.complationMessage"),multiline:true,minRows:4,fullWidth:true,name:"complationMessage",error:touched.complationMessage&&Boolean(errors.complationMessage),helperText:touched.complationMessage&&errors.complationMessage,variant:"outlined",margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.outOfHoursMessage"),multiline:true,minRows:4,fullWidth:true,name:"outOfHoursMessage",error:touched.outOfHoursMessage&&Boolean(errors.outOfHoursMessage),helperText:touched.outOfHoursMessage&&errors.outOfHoursMessage,variant:"outlined",margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.collectiveVacationMessage"),multiline:true,minRows:4,fullWidth:true,name:"collectiveVacationMessage",error:touched.collectiveVacationMessage&&Boolean(errors.collectiveVacationMessage),helperText:touched.collectiveVacationMessage&&errors.collectiveVacationMessage,variant:"outlined",margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{fullWidth:true,as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.collectiveVacationStart"),type:"date",name:"collectiveVacationStart",required:((_values$collectiveVac=values.collectiveVacationMessage)===null||_values$collectiveVac===void 0?void 0:_values$collectiveVac.length)>0,inputProps:{min:moment__WEBPACK_IMPORTED_MODULE_10___default()().add(-10,"days").format("YYYY-MM-DD")}//min="2022-11-06T22:22:55"
,InputLabelProps:{shrink:true},error:touched.collectiveVacationStart&&Boolean(errors.collectiveVacationStart),helperText:touched.collectiveVacationStart&&errors.collectiveVacationStart,variant:"outlined"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{item:true,xs:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{fullWidth:true,as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.collectiveVacationEnd"),type:"date",name:"collectiveVacationEnd",required:((_values$collectiveVac2=values.collectiveVacationMessage)===null||_values$collectiveVac2===void 0?void 0:_values$collectiveVac2.length)>0,inputProps:{min:moment__WEBPACK_IMPORTED_MODULE_10___default()().add(-10,"days").format("YYYY-MM-DD")}//min="2022-11-06T22:22:55"
,InputLabelProps:{shrink:true},error:touched.collectiveVacationEnd&&Boolean(errors.collectiveVacationEnd),helperText:touched.collectiveVacationEnd&&errors.collectiveVacationEnd,variant:"outlined"})})]})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"chatbot",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{dividers:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.timeCreateNewTicket"),fullWidth:true,name:"timeCreateNewTicket",variant:"outlined",margin:"dense",error:touched.timeCreateNewTicket&&Boolean(errors.timeCreateNewTicket),helperText:touched.timeCreateNewTicket&&errors.timeCreateNewTicket})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.maxUseBotQueues"),fullWidth:true,name:"maxUseBotQueues",variant:"outlined",margin:"dense",error:touched.maxUseBotQueues&&Boolean(errors.maxUseBotQueues),helperText:touched.maxUseBotQueues&&errors.maxUseBotQueues})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.timeUseBotQueues"),fullWidth:true,name:"timeUseBotQueues",variant:"outlined",margin:"dense",error:touched.timeUseBotQueues&&Boolean(errors.timeUseBotQueues),helperText:touched.timeUseBotQueues&&errors.timeUseBotQueues})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.expiresTicket"),fullWidth:true,name:"expiresTicket",required:values.timeInactiveMessage>0,variant:"outlined",margin:"dense",error:touched.expiresTicket&&Boolean(errors.expiresTicket),helperText:touched.expiresTicket&&errors.expiresTicket})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{xs:6,md:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{id:"whenExpiresTicket-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.whenExpiresTicket")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.whenExpiresTicket"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.whenExpiresTicket"),labelId:"whenExpiresTicket-selection-label",id:"whenExpiresTicket",name:"whenExpiresTicket",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:"0",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.closeLastMessageOptions1")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:"1",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.closeLastMessageOptions2")})]})]})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.expiresInactiveMessage"),multiline:true,minRows:4,fullWidth:true,name:"expiresInactiveMessage",error:touched.expiresInactiveMessage&&Boolean(errors.expiresInactiveMessage),helperText:touched.expiresInactiveMessage&&errors.expiresInactiveMessage,variant:"outlined",margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.timeInactiveMessage"),fullWidth:true,name:"timeInactiveMessage",variant:"outlined",margin:"dense",error:touched.timeInactiveMessage&&Boolean(errors.timeInactiveMessage),helperText:touched.timeInactiveMessage&&errors.timeInactiveMessage}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.inactiveMessage"),multiline:true,minRows:4,fullWidth:true,name:"inactiveMessage",error:touched.inactiveMessage&&Boolean(errors.inactiveMessage),helperText:touched.inactiveMessage&&errors.inactiveMessage,variant:"outlined",margin:"dense"})})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"nps",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{dividers:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.ratingMessage"),multiline:true,minRows:4,fullWidth:true,name:"ratingMessage",error:touched.ratingMessage&&Boolean(errors.ratingMessage),helperText:touched.ratingMessage&&errors.ratingMessage,variant:"outlined",margin:"dense"})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.maxUseBotQueuesNPS"),fullWidth:true,name:"maxUseBotQueuesNPS",variant:"outlined",margin:"dense",error:touched.maxUseBotQueuesNPS&&Boolean(errors.maxUseBotQueuesNPS),helperText:touched.maxUseBotQueuesNPS&&errors.maxUseBotQueuesNPS})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("div",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.form.expiresTicketNPS"),fullWidth:true,name:"expiresTicketNPS",variant:"outlined",margin:"dense",error:touched.expiresTicketNPS&&Boolean(errors.expiresTicketNPS),helperText:touched.expiresTicketNPS&&errors.expiresTicketNPS})})]})}),showIntegrations&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"flowbuilder",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("h3",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.flowBuilder.welcomeFlow")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("p",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.flowBuilder.welcomeFlowDescription")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",className:classes.FormControl,fullWidth:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{name:"flowIdWelcome",value:flowIdWelcome||"",onChange:handleChangeFlowIdWelcome,id:"flowIdWelcome",variant:"outlined",margin:"dense",labelId:"flowIdWelcome-selection-label",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:null,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.menuItem.disabled")}),webhooks.map(webhook=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:webhook.id,children:webhook.name},webhook.id))]})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("h3",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.flowBuilder.defaultResponseFlow")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)("p",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.flowBuilder.defaultResponseFlowDescription")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{variant:"outlined",margin:"dense",className:classes.FormControl,fullWidth:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{name:"flowNotIdPhrase",value:flowIdNotPhrase||"",onChange:handleChangeFlowIdNotPhrase,id:"flowNotIdPhrase",variant:"outlined",margin:"dense",labelId:"flowNotIdPhrase-selection-label",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:null,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.menuItem.disabled")}),webhooks.map(webhook=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{value:webhook.id,children:webhook.name},webhook.id))]})})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_TabPanel__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{className:classes.container,value:tab,name:"schedules",children:tab==="schedules"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{style:{padding:20},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_SchedulesForm__WEBPACK_IMPORTED_MODULE_37__/* ["default"] */ .A,{loading:false,onSubmit:handleSaveSchedules,initialValues:schedules,labelSaveButton:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.buttons.okAdd")})})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{onClick:handleClose,color:"secondary",disabled:isSubmitting,variant:"outlined",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.buttons.cancel")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{type:"submit",color:"primary",disabled:isSubmitting,variant:"contained",className:classes.btnWrapper,children:[whatsAppId?_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.buttons.okEdit"):_translate_i18n__WEBPACK_IMPORTED_MODULE_30__/* .i18n */ .R.t("whatsappModal.buttons.okAdd"),isSubmitting&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_40__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A,{size:24,className:classes.buttonProgress})]})]})]});}})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.memo(WhatsAppModal));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 62829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94505);
const usePlans=()=>{const getPlanList=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$openApi$reques=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* .openApi */ .Nd.request({url:'/plans/list',method:'GET',params}),data=_await$openApi$reques.data;return data;},[]);const list=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$api$request=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/plans/all',method:'GET',params}),data=_await$api$request.data;return data;},[]);const save=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request2=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/plans',method:'POST',data}),responseData=_await$api$request2.data;return responseData;},[]);const update=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request3=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/plans/".concat(data.id),method:'PUT',data}),responseData=_await$api$request3.data;return responseData;},[]);const remove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id=>{const _await$api$request4=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/plans/".concat(id),method:'DELETE'}),data=_await$api$request4.data;return data;},[]);const getPlanCompany=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async(params,id)=>{const _await$api$request5=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/companies/listPlan/".concat(id),method:'GET',params}),data=_await$api$request5.data;return data;},[]);return{getPlanList,list,save,update,remove,getPlanCompany};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePlans);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 40004
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94505);
/**
 * @TercioSantos-1 |
 * api/get/todas as configurações de 1 empresa |
 * api/get/1 configuração específica |
 * api/put/atualização de 1 configuração |
 */const useCompanySettings=()=>{const getAll=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async companyId=>{const _await$api$request=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/companySettings/".concat(companyId),method:'GET'}),data=_await$api$request.data;return data;},[]);const get=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$api$request2=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/companySettingOne',method:'GET',params}),data=_await$api$request2.data;return data;},[]);const update=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request3=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/companySettings',method:'PUT',data}),responseData=_await$api$request3.data;return responseData;},[]);return{getAll,get,update};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCompanySettings);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 35190
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Connections)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 1 modules
var react_toastify_esm = __webpack_require__(43550);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__(82284);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(45479);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/addMonths/index.js
var addMonths = __webpack_require__(16819);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/toDate/index.js
var toDate = __webpack_require__(16260);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/requiredArgs/index.js
var requiredArgs = __webpack_require__(43666);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/_lib/toInteger/index.js
var toInteger = __webpack_require__(58355);
;// ./node_modules/date-fns/esm/add/index.js






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,requiredArgs/* default */.A)(2, arguments);
  if (!duration || (0,esm_typeof/* default */.A)(duration) !== 'object') return new Date(NaN);
  var years = duration.years ? (0,toInteger/* default */.A)(duration.years) : 0;
  var months = duration.months ? (0,toInteger/* default */.A)(duration.months) : 0;
  var weeks = duration.weeks ? (0,toInteger/* default */.A)(duration.weeks) : 0;
  var days = duration.days ? (0,toInteger/* default */.A)(duration.days) : 0;
  var hours = duration.hours ? (0,toInteger/* default */.A)(duration.hours) : 0;
  var minutes = duration.minutes ? (0,toInteger/* default */.A)(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,toInteger/* default */.A)(duration.seconds) : 0;

  // Add years and months
  var date = (0,toDate/* default */.A)(dirtyDate);
  var dateWithMonths = months || years ? (0,addMonths/* default */.A)(date, months + years * 12) : date;

  // Add weeks and days
  var dateWithDays = days || weeks ? (0,addDays/* default */.A)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 3 modules
var format = __webpack_require__(69525);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__(5093);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 1 modules
var Menu = __webpack_require__(49768);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(55357);
// EXTERNAL MODULE: ./node_modules/material-ui-popup-state/es/index.js
var es = __webpack_require__(89150);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(81551);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = __webpack_require__(93250);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js
var Box = __webpack_require__(61531);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(58425);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(9579);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(30105);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js
var Card = __webpack_require__(749);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js
var CardContent = __webpack_require__(18219);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(20495);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(67503);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(64759);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(18885);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(72703);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(59691);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17339);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Facebook.js
var Facebook = __webpack_require__(54755);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Instagram.js
var Instagram = __webpack_require__(94827);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/WhatsApp.js
var WhatsApp = __webpack_require__(37737);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/SignalCellularConnectedNoInternet0Bar.js
var SignalCellularConnectedNoInternet0Bar = __webpack_require__(30209);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/CropFree.js
var CropFree = __webpack_require__(82315);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/SignalCellular4Bar.js
var SignalCellular4Bar = __webpack_require__(68540);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/SignalCellularConnectedNoInternet2Bar.js
var SignalCellularConnectedNoInternet2Bar = __webpack_require__(78099);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/CheckCircle.js
var CheckCircle = __webpack_require__(65627);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Edit.js
var Edit = __webpack_require__(72347);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/DeleteOutline.js
var DeleteOutline = __webpack_require__(24028);
// EXTERNAL MODULE: ./node_modules/react-facebook-login/dist/facebook-login-render-props.js
var facebook_login_render_props = __webpack_require__(5575);
var facebook_login_render_props_default = /*#__PURE__*/__webpack_require__.n(facebook_login_render_props);
// EXTERNAL MODULE: ./src/components/MainContainer/index.js
var MainContainer = __webpack_require__(50038);
// EXTERNAL MODULE: ./src/components/MainHeader/index.js
var MainHeader = __webpack_require__(51170);
// EXTERNAL MODULE: ./src/components/MainHeaderButtonsWrapper/index.js
var MainHeaderButtonsWrapper = __webpack_require__(86586);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(45824);
// EXTERNAL MODULE: ./src/components/TableRowSkeleton/index.js
var TableRowSkeleton = __webpack_require__(13293);
// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(94505);
// EXTERNAL MODULE: ./src/components/WhatsAppModal/index.js
var WhatsAppModal = __webpack_require__(68813);
// EXTERNAL MODULE: ./src/config/env.js
var env = __webpack_require__(78448);
// EXTERNAL MODULE: ./src/components/ConfirmationModal/index.js
var ConfirmationModal = __webpack_require__(10168);
// EXTERNAL MODULE: ./src/components/QrcodeModal/index.js
var QrcodeModal = __webpack_require__(66069);
// EXTERNAL MODULE: ./src/translate/i18n.js + 3 modules
var i18n = __webpack_require__(57044);
// EXTERNAL MODULE: ./src/context/WhatsApp/WhatsAppsContext.js
var WhatsAppsContext = __webpack_require__(73897);
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./src/utils/formatSerializedId.js + 1 modules
var formatSerializedId = __webpack_require__(76130);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
// EXTERNAL MODULE: ./src/hooks/usePlans/index.js
var usePlans = __webpack_require__(62829);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(35323);
// EXTERNAL MODULE: ./src/components/ForbiddenPage/index.js
var ForbiddenPage = __webpack_require__(86196);
// EXTERNAL MODULE: ./src/components/Can/index.js + 1 modules
var Can = __webpack_require__(12421);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/pages/Connections/index.js
// import { SocketContext } from "../../context/Socket/SocketContext";
const useStyles=(0,makeStyles/* default */.A)(theme=>({mainPaper:(0,objectSpread2/* default */.A)({flex:1,// padding: theme.spacing(1),
padding:theme.padding,overflowY:"scroll"},theme.scrollbarStyles),customTableCell:{display:"flex",alignItems:"center",justifyContent:"center"},tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",fontSize:theme.typography.pxToRem(14),border:"1px solid #dadde9",maxWidth:450},tooltipPopper:{textAlign:"center"},buttonProgress:{color:green/* default */.A[500]}}));function CircularProgressWithLabel(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Box/* default */.A,{position:"relative",display:"inline-flex",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,(0,objectSpread2/* default */.A)({variant:"determinate"},props)),/*#__PURE__*/(0,jsx_runtime.jsx)(Box/* default */.A,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(props.value),"%")})})]});}const CustomToolTip=_ref=>{let title=_ref.title,content=_ref.content,children=_ref.children;const classes=useStyles();return/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.Ay,{arrow:true,classes:{tooltip:classes.tooltip,popper:classes.tooltipPopper},title:/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{gutterBottom:true,color:"inherit",children:title}),content&&/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{children:content})]}),children:children});};const IconChannel=channel=>{switch(channel){case"facebook":return/*#__PURE__*/(0,jsx_runtime.jsx)(Facebook/* default */.A,{style:{color:"#3b5998"}});case"instagram":return/*#__PURE__*/(0,jsx_runtime.jsx)(Instagram/* default */.A,{style:{color:"#e1306c"}});case"whatsapp":return/*#__PURE__*/(0,jsx_runtime.jsx)(WhatsApp/* default */.A,{style:{color:"#25d366"}});default:return i18n/* i18n */.R.t("connections.iconChannel.error");}};const Connections=()=>{const classes=useStyles();const _useContext=(0,react.useContext)(WhatsAppsContext/* WhatsAppsContext */.j),whatsApps=_useContext.whatsApps,loading=_useContext.loading;const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),whatsAppModalOpen=_useState2[0],setWhatsAppModalOpen=_useState2[1];const _useState3=(0,react.useState)([]),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),statusImport=_useState4[0],setStatusImport=_useState4[1];const _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),qrModalOpen=_useState6[0],setQrModalOpen=_useState6[1];const _useState7=(0,react.useState)(null),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),selectedWhatsApp=_useState8[0],setSelectedWhatsApp=_useState8[1];const _useState9=(0,react.useState)(false),_useState0=(0,slicedToArray/* default */.A)(_useState9,2),confirmModalOpen=_useState0[0],setConfirmModalOpen=_useState0[1];const history=(0,react_router_dom_min/* useHistory */.W6)();const confirmationModalInitialState={action:"",title:"",message:"",whatsAppId:"",open:false};const _useState1=(0,react.useState)(confirmationModalInitialState),_useState10=(0,slicedToArray/* default */.A)(_useState1,2),confirmModalInfo=_useState10[0],setConfirmModalInfo=_useState10[1];const _useState11=(0,react.useState)(false),_useState12=(0,slicedToArray/* default */.A)(_useState11,2),planConfig=_useState12[0],setPlanConfig=_useState12[1];//   const socketManager = useContext(SocketContext);
const _useContext2=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext2.user,socket=_useContext2.socket;const companyId=user.companyId;const _usePlans=(0,usePlans/* default */.A)(),getPlanCompany=_usePlans.getPlanCompany;(0,react.useEffect)(()=>{async function fetchData(){const planConfigs=await getPlanCompany(undefined,companyId);setPlanConfig(planConfigs);}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);const responseFacebook=response=>{if(response.status!=="unknown"){const accessToken=response.accessToken,id=response.id;api/* default */.Ay.post("/facebook",{facebookUserId:id,facebookUserToken:accessToken}).then(response=>{react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("connections.facebook.success"));}).catch(error=>{(0,toastError/* default */.A)(error);});}};const responseInstagram=response=>{if(response.status!=="unknown"){const accessToken=response.accessToken,id=response.id;api/* default */.Ay.post("/facebook",{addInstagram:true,facebookUserId:id,facebookUserToken:accessToken}).then(response=>{react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("connections.facebook.success"));}).catch(error=>{(0,toastError/* default */.A)(error);});}};(0,react.useEffect)(()=>{// const socket = socketManager.GetSocket();
socket.on("importMessages-".concat(user.companyId),data=>{if(data.action==="refresh"){setStatusImport([]);history.go(0);}if(data.action==="update"){setStatusImport(data.status);}});/* return () => {
      socket.disconnect();
    }; */},[whatsApps]);const handleStartWhatsAppSession=async whatsAppId=>{try{await api/* default */.Ay.post("/whatsappsession/".concat(whatsAppId));}catch(err){(0,toastError/* default */.A)(err);}};const handleRequestNewQrCode=async whatsAppId=>{try{await api/* default */.Ay.put("/whatsappsession/".concat(whatsAppId));}catch(err){(0,toastError/* default */.A)(err);}};const handleOpenWhatsAppModal=()=>{setSelectedWhatsApp(null);setWhatsAppModalOpen(true);};const handleCloseWhatsAppModal=(0,react.useCallback)(()=>{setWhatsAppModalOpen(false);setSelectedWhatsApp(null);},[setSelectedWhatsApp,setWhatsAppModalOpen]);const handleOpenQrModal=whatsApp=>{setSelectedWhatsApp(whatsApp);setQrModalOpen(true);};const handleCloseQrModal=(0,react.useCallback)(()=>{setSelectedWhatsApp(null);setQrModalOpen(false);},[setQrModalOpen,setSelectedWhatsApp]);const handleEditWhatsApp=whatsApp=>{setSelectedWhatsApp(whatsApp);setWhatsAppModalOpen(true);};const openInNewTab=url=>{window.open(url,'_blank','noopener,noreferrer');};const handleOpenConfirmationModal=(action,whatsAppId)=>{if(action==="disconnect"){setConfirmModalInfo({action:action,title:i18n/* i18n */.R.t("connections.confirmationModal.disconnectTitle"),message:i18n/* i18n */.R.t("connections.confirmationModal.disconnectMessage"),whatsAppId:whatsAppId});}if(action==="delete"){setConfirmModalInfo({action:action,title:i18n/* i18n */.R.t("connections.confirmationModal.deleteTitle"),message:i18n/* i18n */.R.t("connections.confirmationModal.deleteMessage"),whatsAppId:whatsAppId});}if(action==="closedImported"){setConfirmModalInfo({action:action,title:i18n/* i18n */.R.t("connections.confirmationModal.closedImportedTitle"),message:i18n/* i18n */.R.t("connections.confirmationModal.closedImportedMessage"),whatsAppId:whatsAppId});}setConfirmModalOpen(true);};const handleSubmitConfirmationModal=async()=>{if(confirmModalInfo.action==="disconnect"){try{await api/* default */.Ay.delete("/whatsappsession/".concat(confirmModalInfo.whatsAppId));}catch(err){(0,toastError/* default */.A)(err);}}if(confirmModalInfo.action==="delete"){try{await api/* default */.Ay.delete("/whatsapp/".concat(confirmModalInfo.whatsAppId));react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("connections.toasts.deleted"));}catch(err){(0,toastError/* default */.A)(err);}}if(confirmModalInfo.action==="closedImported"){try{await api/* default */.Ay.post("/closedimported/".concat(confirmModalInfo.whatsAppId));react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("connections.toasts.closedimported"));}catch(err){(0,toastError/* default */.A)(err);}}setConfirmModalInfo(confirmationModalInitialState);};const renderImportButton=whatsApp=>{if((whatsApp===null||whatsApp===void 0?void 0:whatsApp.statusImportMessages)==="renderButtonCloseTickets"){return/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{style:{marginLeft:12},size:"small",variant:"outlined",color:"primary",onClick:()=>{handleOpenConfirmationModal("closedImported",whatsApp.id);},children:i18n/* i18n */.R.t("connections.buttons.closedImported")});}if(whatsApp!==null&&whatsApp!==void 0&&whatsApp.importOldMessages){let isTimeStamp=!isNaN(new Date(Math.floor(whatsApp===null||whatsApp===void 0?void 0:whatsApp.statusImportMessages)).getTime());if(isTimeStamp){const ultimoStatus=new Date(Math.floor(whatsApp===null||whatsApp===void 0?void 0:whatsApp.statusImportMessages)).getTime();const dataLimite=+add(ultimoStatus,{seconds:+35}).getTime();if(dataLimite>new Date().getTime()){return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{disabled:true,style:{marginLeft:12},size:"small",endIcon:/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{size:12,className:classes.buttonProgress}),variant:"outlined",color:"primary",children:i18n/* i18n */.R.t("connections.buttons.preparing")})});}}}};const renderActionButtons=whatsApp=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[whatsApp.status==="qrcode"&&/*#__PURE__*/(0,jsx_runtime.jsx)(Can/* Can */.T,{role:user.profile==="user"&&user.allowConnections==="enabled"?"admin":user.profile,perform:"connections-page:addConnection",yes:()=>/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"small",variant:"contained",color:"primary",onClick:()=>handleOpenQrModal(whatsApp),children:i18n/* i18n */.R.t("connections.buttons.qrcode")})}),whatsApp.status==="DISCONNECTED"&&/*#__PURE__*/(0,jsx_runtime.jsx)(Can/* Can */.T,{role:user.profile==="user"&&user.allowConnections==="enabled"?"admin":user.profile,perform:"connections-page:addConnection",yes:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"small",variant:"outlined",color:"primary",onClick:()=>handleStartWhatsAppSession(whatsApp.id),children:i18n/* i18n */.R.t("connections.buttons.tryAgain")})," ",/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"small",variant:"outlined",color:"secondary",onClick:()=>handleRequestNewQrCode(whatsApp.id),children:i18n/* i18n */.R.t("connections.buttons.newQr")})]})}),(whatsApp.status==="CONNECTED"||whatsApp.status==="PAIRING"||whatsApp.status==="TIMEOUT")&&/*#__PURE__*/(0,jsx_runtime.jsx)(Can/* Can */.T,{role:user.profile,perform:"connections-page:addConnection",yes:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"small",variant:"outlined",color:"secondary",onClick:()=>{handleOpenConfirmationModal("disconnect",whatsApp.id);},children:i18n/* i18n */.R.t("connections.buttons.disconnect")}),renderImportButton(whatsApp)]})}),whatsApp.status==="OPENING"&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{size:"small",variant:"outlined",disabled:true,color:"default",children:i18n/* i18n */.R.t("connections.buttons.connecting")})]});};const renderStatusToolTips=whatsApp=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.customTableCell,children:[whatsApp.status==="DISCONNECTED"&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomToolTip,{title:i18n/* i18n */.R.t("connections.toolTips.disconnected.title"),content:i18n/* i18n */.R.t("connections.toolTips.disconnected.content"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SignalCellularConnectedNoInternet0Bar/* default */.A,{color:"secondary"})}),whatsApp.status==="OPENING"&&/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{size:24,className:classes.buttonProgress}),whatsApp.status==="qrcode"&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomToolTip,{title:i18n/* i18n */.R.t("connections.toolTips.qrcode.title"),content:i18n/* i18n */.R.t("connections.toolTips.qrcode.content"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(CropFree/* default */.A,{})}),whatsApp.status==="CONNECTED"&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomToolTip,{title:i18n/* i18n */.R.t("connections.toolTips.connected.title"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SignalCellular4Bar/* default */.A,{style:{color:green/* default */.A[500]}})}),(whatsApp.status==="TIMEOUT"||whatsApp.status==="PAIRING")&&/*#__PURE__*/(0,jsx_runtime.jsx)(CustomToolTip,{title:i18n/* i18n */.R.t("connections.toolTips.timeout.title"),content:i18n/* i18n */.R.t("connections.toolTips.timeout.content"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SignalCellularConnectedNoInternet2Bar/* default */.A,{color:"secondary"})})]});};const restartWhatsapps=async()=>{try{await api/* default */.Ay.post("/whatsapp-restart/");react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("connections.waitConnection"));}catch(err){(0,toastError/* default */.A)(err);}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.A,{title:confirmModalInfo.title,open:confirmModalOpen,onClose:setConfirmModalOpen,onConfirm:handleSubmitConfirmationModal,children:confirmModalInfo.message}),qrModalOpen&&/*#__PURE__*/(0,jsx_runtime.jsx)(QrcodeModal/* default */.A,{open:qrModalOpen,onClose:handleCloseQrModal,whatsAppId:!whatsAppModalOpen&&(selectedWhatsApp===null||selectedWhatsApp===void 0?void 0:selectedWhatsApp.id)}),/*#__PURE__*/(0,jsx_runtime.jsx)(WhatsAppModal/* default */.A,{open:whatsAppModalOpen,onClose:handleCloseWhatsAppModal,whatsAppId:!qrModalOpen&&(selectedWhatsApp===null||selectedWhatsApp===void 0?void 0:selectedWhatsApp.id)}),user.profile==="user"&&user.allowConnections==="disabled"?/*#__PURE__*/(0,jsx_runtime.jsx)(ForbiddenPage/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(MainHeader/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Title/* default */.A,{children:[i18n/* i18n */.R.t("connections.title")," (",whatsApps.length,")"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(MainHeaderButtonsWrapper/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{variant:"contained",color:"primary",onClick:restartWhatsapps,children:i18n/* i18n */.R.t("connections.restartConnections")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{variant:"contained",color:"primary",onClick:()=>openInNewTab("https://wa.me/".concat(env/* NUMBER_SUPPORT */.CM)),children:i18n/* i18n */.R.t("connections.callSupport")}),/*#__PURE__*/(0,jsx_runtime.jsx)(es/* default */.Ay,{variant:"popover",popupId:"demo-popup-menu",children:popupState=>/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Can/* Can */.T,{role:user.profile,perform:"connections-page:addConnection",yes:()=>{var _planConfig$plan;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({variant:"contained",color:"primary"},(0,es/* bindTrigger */.cO)(popupState)),{},{children:i18n/* i18n */.R.t("connections.newConnection")})),/*#__PURE__*/(0,jsx_runtime.jsxs)(Menu/* default */.A,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},(0,es/* bindMenu */.NA)(popupState)),{},{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A,{disabled:planConfig!==null&&planConfig!==void 0&&(_planConfig$plan=planConfig.plan)!==null&&_planConfig$plan!==void 0&&_planConfig$plan.useWhatsapp?false:true,onClick:()=>{handleOpenWhatsAppModal();popupState.close();},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(WhatsApp/* default */.A,{fontSize:"small",style:{marginRight:"10px",color:"#25D366"}}),i18n/* i18n */.R.t("channels.whatsapp")]}),/*#__PURE__*/(0,jsx_runtime.jsx)((facebook_login_render_props_default()),{appId:env/* FACEBOOK_APP_ID */.pL,autoLoad:false,fields:"name,email,picture",version:"9.0",scope:env/* REQUIRE_BUSINESS_MANAGEMENT */.XO?"public_profile,pages_messaging,pages_show_list,pages_manage_metadata,pages_read_engagement,business_management":"public_profile,pages_messaging,pages_show_list,pages_manage_metadata,pages_read_engagement",callback:responseFacebook,render:renderProps=>{var _planConfig$plan2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A,{disabled:planConfig!==null&&planConfig!==void 0&&(_planConfig$plan2=planConfig.plan)!==null&&_planConfig$plan2!==void 0&&_planConfig$plan2.useFacebook?false:true,onClick:renderProps.onClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Facebook/* default */.A,{fontSize:"small",style:{marginRight:"10px",color:"#3b5998"}}),i18n/* i18n */.R.t("channels.facebook")]});}}),/*#__PURE__*/(0,jsx_runtime.jsx)((facebook_login_render_props_default()),{appId:env/* FACEBOOK_APP_ID */.pL,autoLoad:false,fields:"name,email,picture",version:"9.0",scope:env/* REQUIRE_BUSINESS_MANAGEMENT */.XO?"public_profile,instagram_basic,instagram_manage_messages,pages_messaging,pages_show_list,pages_manage_metadata,pages_read_engagement,business_management":"public_profile,instagram_basic,instagram_manage_messages,pages_messaging,pages_show_list,pages_manage_metadata,pages_read_engagement",callback:responseInstagram,render:renderProps=>{var _planConfig$plan3;return/*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A,{disabled:planConfig!==null&&planConfig!==void 0&&(_planConfig$plan3=planConfig.plan)!==null&&_planConfig$plan3!==void 0&&_planConfig$plan3.useInstagram?false:true,onClick:renderProps.onClick,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Instagram/* default */.A,{fontSize:"small",style:{marginRight:"10px",color:"#e1306c"}}),i18n/* i18n */.R.t("channels.instagram")]});}})]}))]});}})})})]})]}),statusImport!==null&&statusImport!==void 0&&statusImport.all?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{margin:"auto",marginBottom:12},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Card/* default */.A,{className:classes.root,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContent/* default */.A,{className:classes.content,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{component:"h5",variant:"h5",children:(statusImport===null||statusImport===void 0?void 0:statusImport.this)===-1?i18n/* i18n */.R.t("connections.buttons.preparing"):i18n/* i18n */.R.t("connections.buttons.importing")}),(statusImport===null||statusImport===void 0?void 0:statusImport.this)===-1?/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{component:"h6",variant:"h6",align:"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{size:24})}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{component:"h6",variant:"h6",align:"center",children:"".concat(i18n/* i18n */.R.t("connections.typography.processed")," ").concat(statusImport===null||statusImport===void 0?void 0:statusImport.this," ").concat(i18n/* i18n */.R.t("connections.typography.in")," ").concat(statusImport===null||statusImport===void 0?void 0:statusImport.all,"  ").concat(i18n/* i18n */.R.t("connections.typography.date"),": ").concat(statusImport===null||statusImport===void 0?void 0:statusImport.date," ")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{align:"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgressWithLabel,{style:{margin:"auto"},value:(statusImport===null||statusImport===void 0?void 0:statusImport.this)/(statusImport===null||statusImport===void 0?void 0:statusImport.all)*100})})]})]})})})}):null,/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaper,variant:"outlined",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{size:"small",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.channel")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.name")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.number")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.status")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.session")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.lastUpdate")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.default")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Can/* Can */.T,{role:user.profile==="user"&&user.allowConnections==="enabled"?"admin":user.profile,perform:"connections-page:addConnection",yes:()=>/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("connections.table.actions")})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:loading?/*#__PURE__*/(0,jsx_runtime.jsx)(TableRowSkeleton/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(whatsApps===null||whatsApps===void 0?void 0:whatsApps.length)>0&&whatsApps.map(whatsApp=>/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:IconChannel(whatsApp.channel)}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:whatsApp.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:whatsApp.number&&whatsApp.channel==='whatsapp'?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,formatSerializedId/* default */.Ay)(whatsApp.number)}):whatsApp.number}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:renderStatusToolTips(whatsApp)}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:renderActionButtons(whatsApp)}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:(0,format/* default */.A)((0,parseISO/* default */.A)(whatsApp.updatedAt),"dd/MM/yy HH:mm")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:whatsApp.isDefault&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classes.customTableCell,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CheckCircle/* default */.A,{style:{color:green/* default */.A[500]}})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Can/* Can */.T,{role:user.profile,perform:"connections-page:addConnection",yes:()=>/*#__PURE__*/(0,jsx_runtime.jsxs)(TableCell/* default */.A,{align:"center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>handleEditWhatsApp(whatsApp),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Edit/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:e=>{handleOpenConfirmationModal("delete",whatsApp.id);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutline/* default */.A,{})})]})})]},whatsApp.id))})})]})})]})]});};/* harmony default export */ const pages_Connections = (Connections);

/***/ },

/***/ 76130
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ utils_formatSerializedId)
});

// UNUSED EXPORTS: formatSerializedId, safeFormatPhoneNumber

;// ./src/utils/FormatMask.js
class FormatMask{setPhoneFormatMask(phoneToFormat){if(!phoneToFormat||phoneToFormat.length<12){return phoneToFormat;}const number=(""+phoneToFormat).replace(/\D/g,"");if(number.length<=12){const phoneNumberFormatted=number.match(/^(\d{2})(\d{2})(\d{4})(\d{4})$/);return"+"+phoneNumberFormatted[1]+" ("+phoneNumberFormatted[2]+") "+phoneNumberFormatted[3]+"-"+phoneNumberFormatted[4];}else if(number.length===13){const phoneNumberFormatted=number.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);return"+"+phoneNumberFormatted[1]+" ("+phoneNumberFormatted[2]+") "+phoneNumberFormatted[3]+"-"+phoneNumberFormatted[4];}else{return phoneToFormat;}// removed by dead control flow
}removeMask(number){const filterNumber=number.replace(/\D/g,"");return filterNumber;}maskPhonePattern(phoneNumber){if(phoneNumber.length<13){return'🇧🇷 (99) 9999 9999';}else{return'🇧🇷 (99) 99999 9999';}}}
;// ./src/utils/formatSerializedId.js
/* unused harmony import specifier */ var _slicedToArray;
/* unused harmony import specifier */ var formatSerializedId_FormatMask;
// Função original modificada
const formatSerializedId=serializedId=>{var _formatMask$setPhoneF;if(!serializedId)return null;const formatMask=new FormatMask();const number=serializedId.replace('@c.us','');return(_formatMask$setPhoneF=formatMask.setPhoneFormatMask(number))===null||_formatMask$setPhoneF===void 0?void 0:_formatMask$setPhoneF.replace('+55','🇧🇷');};// Função para verificar se o número está em um formato que pode ser tratado
const canFormatNumber=number=>{if(!number)return false;// Remove qualquer parte de ID do WhatsApp (como @c.us)
const cleanNumber=typeof number==='string'?number.replace('@c.us',''):String(number);// Verifica se é um número válido para formatação (números brasileiros começam com 55)
// Aceita formatos como 5511987654321, 55(11)987654321, etc.
return /^(55|\+55)?\d{10,11}$/.test(cleanNumber.replace(/[^\d+]/g,''));};// Função aprimorada para formatar números com segurança
const safeFormatPhoneNumber=function(number){let hideNumber=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;let isGroup=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;// Se for um grupo ou não tiver número, retorna o valor original
if(isGroup||!number)return number;try{// Tenta formatar o número usando a função original
const formattedNumber=formatSerializedId(number);// Se conseguiu formatar e deve esconder parte do número
if(formattedNumber&&hideNumber){// Verifica se já está no formato com bandeira e parentheses
if(formattedNumber.includes('🇧🇷')){// Localiza a parte numérica para ocultar
const parts=formattedNumber.match(/🇧🇷\s*\((\d{2})\)\s*(\d+)-(\d+)/);if(parts&&parts.length>=4){const _parts=_slicedToArray(parts,4),ddd=_parts[1],parte1=_parts[2],parte2=_parts[3];return"\uD83C\uDDE7\uD83C\uDDF7 (".concat(ddd,") ").concat(parte1.slice(0,-2),"**-**").concat(parte2.slice(-2));}}// Fallback para ocultação básica
return formattedNumber.slice(0,-6)+"**-**"+number.slice(-2);}// Se conseguiu formatar, retorna o número formatado
if(formattedNumber)return formattedNumber;// Se não conseguiu formatar mas o número pode ser formatado
if(canFormatNumber(number)){var _formatMask$setPhoneF2;// Tenta limpar e formatar manualmente
const cleanNumber=number.replace(/\D/g,'');const formatMask=new formatSerializedId_FormatMask();const manualFormatted=(_formatMask$setPhoneF2=formatMask.setPhoneFormatMask(cleanNumber))===null||_formatMask$setPhoneF2===void 0?void 0:_formatMask$setPhoneF2.replace('+55','🇧🇷');if(manualFormatted&&hideNumber){const parts=manualFormatted.match(/🇧🇷\s*\((\d{2})\)\s*(\d+)-(\d+)/);if(parts&&parts.length>=4){const _parts2=_slicedToArray(parts,4),ddd=_parts2[1],parte1=_parts2[2],parte2=_parts2[3];return"\uD83C\uDDE7\uD83C\uDDF7 (".concat(ddd,") ").concat(parte1.slice(0,-2),"**-**").concat(parte2.slice(-2));}return manualFormatted.slice(0,-6)+"**-**"+cleanNumber.slice(-2);}return manualFormatted||number;}// Para números que não podem ser formatados mas precisam ser ocultados
if(hideNumber&&typeof number==='string'&&number.length>8){return number.slice(0,-6)+"**-**"+number.slice(-2);}// Último caso: retorna o número original
return number;}catch(error){console.error("Erro ao formatar número:",error);return number;}};/* harmony default export */ const utils_formatSerializedId = (formatSerializedId);

/***/ },

/***/ 749
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20495);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);







var styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Card(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$raised = props.raised,
    raised = _props$raised === void 0 ? false : _props$raised,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "raised"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Paper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiCard'
})(Card));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 18219
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);






var styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function CardContent(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "component"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiCardContent'
})(CardContent));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 45479
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58355);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16260);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43666);



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ },

/***/ 16819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58355);
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16260);
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43666);



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  var dayOfMonth = date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ },

/***/ 35323
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}
__webpack_unused_export__ = ({
  value: !0
});
var reactRouter = __webpack_require__(91688),
  React = _interopDefault(__webpack_require__(65043)),
  history = __webpack_require__(77321);
__webpack_require__(65173), __webpack_require__(58620);
var invariant = _interopDefault(__webpack_require__(62213));
function _extends() {
  return (_extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
function _inheritsLoose(e, t) {
  e.prototype = Object.create(t.prototype), _setPrototypeOf(e.prototype.constructor = e, t);
}
function _setPrototypeOf(e, t) {
  return (_setPrototypeOf = Object.setPrototypeOf || function (e, t) {
    return e.__proto__ = t, e;
  })(e, t);
}
function _objectWithoutPropertiesLoose(e, t) {
  if (null == e) return {};
  var r,
    o,
    n = {},
    a = Object.keys(e);
  for (o = 0; o < a.length; o++) r = a[o], 0 <= t.indexOf(r) || (n[r] = e[r]);
  return n;
}
var BrowserRouter = function (n) {
    function e() {
      for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
      return (e = n.call.apply(n, [this].concat(r)) || this).history = history.createBrowserHistory(e.props), e;
    }
    return _inheritsLoose(e, n), e.prototype.render = function () {
      return React.createElement(reactRouter.Router, {
        history: this.history,
        children: this.props.children
      });
    }, e;
  }(React.Component),
  HashRouter = function (n) {
    function e() {
      for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
      return (e = n.call.apply(n, [this].concat(r)) || this).history = history.createHashHistory(e.props), e;
    }
    return _inheritsLoose(e, n), e.prototype.render = function () {
      return React.createElement(reactRouter.Router, {
        history: this.history,
        children: this.props.children
      });
    }, e;
  }(React.Component),
  resolveToLocation = function (e, t) {
    return "function" == typeof e ? e(t) : e;
  },
  normalizeToLocation = function (e, t) {
    return "string" == typeof e ? history.createLocation(e, null, null, t) : e;
  },
  forwardRefShim = function (e) {
    return e;
  },
  forwardRef = React.forwardRef;
function isModifiedEvent(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
void 0 === forwardRef && (forwardRef = forwardRefShim);
var LinkAnchor = forwardRef(function (e, t) {
    var r = e.innerRef,
      o = e.navigate,
      n = e.onClick,
      a = _objectWithoutPropertiesLoose(e, ["innerRef", "navigate", "onClick"]),
      i = a.target,
      c = _extends({}, a, {
        onClick: function (t) {
          try {
            n && n(t);
          } catch (e) {
            throw t.preventDefault(), e;
          }
          t.defaultPrevented || 0 !== t.button || i && "_self" !== i || isModifiedEvent(t) || (t.preventDefault(), o());
        }
      });
    return c.ref = forwardRefShim !== forwardRef && t || r, React.createElement("a", c);
  }),
  Link = forwardRef(function (e, a) {
    var t = e.component,
      i = void 0 === t ? LinkAnchor : t,
      c = e.replace,
      u = e.to,
      f = e.innerRef,
      s = _objectWithoutPropertiesLoose(e, ["component", "replace", "to", "innerRef"]);
    return React.createElement(reactRouter.__RouterContext.Consumer, null, function (r) {
      r || invariant(!1);
      var o = r.history,
        e = normalizeToLocation(resolveToLocation(u, r.location), r.location),
        t = e ? o.createHref(e) : "",
        n = _extends({}, s, {
          href: t,
          navigate: function () {
            var e = resolveToLocation(u, r.location),
              t = history.createPath(r.location) === history.createPath(normalizeToLocation(e));
            (c || t ? o.replace : o.push)(e);
          }
        });
      return forwardRefShim !== forwardRef ? n.ref = a || f : n.innerRef = f, React.createElement(i, n);
    });
  }),
  forwardRefShim$1 = function (e) {
    return e;
  },
  forwardRef$1 = React.forwardRef;
function joinClassnames() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return t.filter(function (e) {
    return e;
  }).join(" ");
}
void 0 === forwardRef$1 && (forwardRef$1 = forwardRefShim$1);
var NavLink = forwardRef$1(function (e, s) {
  var t = e["aria-current"],
    l = void 0 === t ? "page" : t,
    r = e.activeClassName,
    p = void 0 === r ? "active" : r,
    R = e.activeStyle,
    h = e.className,
    y = e.exact,
    d = e.isActive,
    m = e.location,
    v = e.sensitive,
    b = e.strict,
    P = e.style,
    w = e.to,
    x = e.innerRef,
    g = _objectWithoutPropertiesLoose(e, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return React.createElement(reactRouter.__RouterContext.Consumer, null, function (e) {
    e || invariant(!1);
    var t = m || e.location,
      r = normalizeToLocation(resolveToLocation(w, t), t),
      o = r.pathname,
      n = o && o.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
      a = n ? reactRouter.matchPath(t.pathname, {
        path: n,
        exact: y,
        sensitive: v,
        strict: b
      }) : null,
      i = !!(d ? d(a, t) : a),
      c = "function" == typeof h ? h(i) : h,
      u = "function" == typeof P ? P(i) : P;
    i && (c = joinClassnames(c, p), u = _extends({}, u, R));
    var f = _extends({
      "aria-current": i && l || null,
      className: c,
      style: u,
      to: r
    }, g);
    return forwardRefShim$1 !== forwardRef$1 ? f.ref = s || x : f.innerRef = x, React.createElement(Link, f);
  });
});
__webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.MemoryRouter;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.Prompt;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.Redirect;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.Route;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.Router;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.StaticRouter;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.Switch;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.generatePath;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.matchPath;
  }
}), Object.defineProperty(exports, "W6", ({
  enumerable: !0,
  get: function () {
    return reactRouter.useHistory;
  }
})), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.useLocation;
  }
}), Object.defineProperty(exports, "g", ({
  enumerable: !0,
  get: function () {
    return reactRouter.useParams;
  }
})), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.useRouteMatch;
  }
}), __webpack_unused_export__ = ({
  enumerable: !0,
  get: function () {
    return reactRouter.withRouter;
  }
}), __webpack_unused_export__ = BrowserRouter, __webpack_unused_export__ = HashRouter, __webpack_unused_export__ = Link, __webpack_unused_export__ = NavLink;

/***/ },

/***/ 62213
(module) {



var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === 'function' ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}
module.exports = invariant;

/***/ }

}]);