"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[4469],{

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

/***/ 25668
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83462);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4219);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35316);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98533);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29347);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11906);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57044);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20495);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63990);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(81497);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26841);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69525);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5093);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(94505);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82455);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(70579);
const ShowTicketLogModal=_ref=>{let isOpen=_ref.isOpen,handleClose=_ref.handleClose,ticketId=_ref.ticketId;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),activeStep=_useState2[0],setActiveStep=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,2),loading=_useState4[0],setLoading=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState5,2),logs=_useState6[0],setLogs=_useState6[1];const typeDescriptions={create:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.create"),chatBot:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.chatBot"),queue:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.queue"),open:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.open"),access:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.access"),transfered:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.transfered"),receivedTransfer:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.receivedTransfer"),pending:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.pending"),closed:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.closed"),reopen:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.reopen"),redirect:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.options.redirect")// Adicione outros mapeamentos conforme necessário
};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setLoading(true);const delayDebounceFn=setTimeout(()=>{const fetchLogs=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Ay.get("/tickets-log/".concat(ticketId)),data=_await$api$get.data;setLogs(data);setLoading(false);}catch(err){setLoading(false);(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(err);}};fetchLogs();},500);return()=>clearTimeout(delayDebounceFn);},[ticketId]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{open:isOpen,onClose:handleClose,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t('showTicketLogModal.title.header')}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{activeStep:activeStep,orientation:"vertical",children:logs.map((log,index)=>{var _log$user,_log$queue,_log$queue2,_log$user2;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{children:"".concat(log.type==='access'||log.type==='transfered'||log.type==='open'||log.type==='pending'||log.type==="closed"||log.type==="reopen"?log===null||log===void 0?void 0:(_log$user=log.user)===null||_log$user===void 0?void 0:_log$user.name:(log===null||log===void 0?void 0:log.type)==='queue'||(log===null||log===void 0?void 0:log.type)==='redirect'?log===null||log===void 0?void 0:(_log$queue=log.queue)===null||_log$queue===void 0?void 0:_log$queue.name:log.type==='receivedTransfer'?(log===null||log===void 0?void 0:(_log$queue2=log.queue)===null||_log$queue2===void 0?void 0:_log$queue2.name)+' - '+(log===null||log===void 0?void 0:(_log$user2=log.user)===null||_log$user2===void 0?void 0:_log$user2.name):''," \n                    ").concat(typeDescriptions[log.type]," - ").concat((0,date_fns__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A)((0,date_fns__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)(log===null||log===void 0?void 0:log.createdAt),'dd/MM/yyyy HH:mm'))})},index);})})})})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{onClick:handleClose,color:"primary",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_8__/* .i18n */ .R.t("showTicketLogModal.close")})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowTicketLogModal);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 57438
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ StatusFilter)
/* harmony export */ });
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61531);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19227);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65043);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70579);
function StatusFilter(_ref){let onFiltered=_ref.onFiltered;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),selecteds=_useState2[0],setSelecteds=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{async function fetchData(){}fetchData();},[]);const onChange=async value=>{setSelecteds(value);onFiltered(value);};const status=[{status:'open',name:"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("tickets.search.filterConectionsOptions.open"))},{status:'closed',name:"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("tickets.search.filterConectionsOptions.closed"))},{status:'pending',name:"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("tickets.search.filterConectionsOptions.pending"))},{status:'group',name:_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("statusFilter.groups")}];return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{padding:"0px 10px 10px"},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay,{multiple:true,size:"small",options:status,value:selecteds,onChange:(e,v,r)=>onChange(v),getOptionLabel:option=>option.name,renderTags:(value,getTagProps)=>value.map((option,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({variant:"outlined",style:{backgroundColor:option.color||"#eee",textShadow:"1px 1px 1px #000",color:"white"},label:option.name},getTagProps({index})),{},{size:"small"}))),renderInput:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},params),{},{variant:"outlined",placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("statusFilter.title")}))})});}

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

/***/ 18673
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ TagsFilter)
/* harmony export */ });
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61531);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19227);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65043);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82455);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70579);
function TagsFilter(_ref){let onFiltered=_ref.onFiltered;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),tags=_useState2[0],setTags=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3,2),selecteds=_useState4[0],setSelecteds=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{async function fetchData(){await loadTags();}fetchData();},[]);const loadTags=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay.get("/tags/list"),data=_await$api$get.data;setTags(data);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(err);}};const onChange=async value=>{setSelecteds(value);onFiltered(value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{padding:10},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay,{multiple:true,size:"small",options:tags,value:selecteds,onChange:(e,v,r)=>onChange(v),getOptionLabel:option=>option.name,renderTags:(value,getTagProps)=>value.map((option,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({variant:"outlined",style:{backgroundColor:option.color||"#eee",textShadow:"1px 1px 1px #000",color:"white"},label:option.name},getTagProps({index})),{},{size:"small"}))),renderInput:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},params),{},{variant:"outlined",placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_9__/* .i18n */ .R.t("tagsFilter.placeholder")}))})});}

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

/***/ 93560
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ UsersFilter)
/* harmony export */ });
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61531);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19227);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65043);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82455);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70579);
function UsersFilter(_ref){let onFiltered=_ref.onFiltered,initialUsers=_ref.initialUsers;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),users=_useState2[0],setUsers=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3,2),selecteds=_useState4[0],setSelecteds=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{async function fetchData(){await loadUsers();}fetchData();},[]);(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{setSelecteds([]);if(Array.isArray(initialUsers)&&Array.isArray(users)&&users.length>0){onChange(initialUsers);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[initialUsers,users]);const loadUsers=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay.get("/users/list"),data=_await$api$get.data;const userList=data.map(u=>({id:u.id,name:u.name}));setUsers(userList);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(err);}};const onChange=async value=>{setSelecteds(value);onFiltered(value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{padding:"0px 10px 10px"},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay,{multiple:true,size:"small",options:users,value:selecteds,onChange:(e,v,r)=>onChange(v),getOptionLabel:option=>option.name,getOptionSelected:(option,value)=>{return(option===null||option===void 0?void 0:option.id)===(value===null||value===void 0?void 0:value.id)||(option===null||option===void 0?void 0:option.name.toLowerCase())===(value===null||value===void 0?void 0:value.name.toLowerCase());},renderTags:(value,getUserProps)=>value.map((option,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({variant:"outlined",style:{backgroundColor:"#bfbfbf",textShadow:"1px 1px 1px #000",color:"white"},label:option.name},getUserProps({index})),{},{size:"small"}))),renderInput:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},params),{},{variant:"outlined",placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_9__/* .i18n */ .R.t("tickets.search.filterUsers")}))})});}

/***/ },

/***/ 72995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ WhatsappsFilter)
/* harmony export */ });
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61531);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19227);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29128);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65043);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82455);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70579);
function WhatsappsFilter(_ref){let onFiltered=_ref.onFiltered,initialWhatsapps=_ref.initialWhatsapps;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),whatsapps=_useState2[0],setWhatsapps=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3,2),selecteds=_useState4[0],setSelecteds=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{async function fetchData(){await loadWhatsapps();}fetchData();},[]);(0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{setSelecteds([]);if(Array.isArray(initialWhatsapps)&&Array.isArray(whatsapps)&&whatsapps.length>0){onChange(initialWhatsapps);}// eslint-disable-next-line react-hooks/exhaustive-deps
},[initialWhatsapps,whatsapps]);const loadWhatsapps=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay.get("/whatsapp"),data=_await$api$get.data;const whatsappList=data.map(w=>({id:w.id,name:w.name,channel:w.channel}));setWhatsapps(whatsappList);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(err);}};const onChange=async value=>{setSelecteds(value);onFiltered(value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{padding:"0px 10px 10px"},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay,{multiple:true,size:"small",options:whatsapps,value:selecteds,onChange:(e,v,r)=>onChange(v),getOptionLabel:option=>option.name,getOptionSelected:(option,value)=>{return(option===null||option===void 0?void 0:option.id)===(value===null||value===void 0?void 0:value.id)||(option===null||option===void 0?void 0:option.name.toLowerCase())===(value===null||value===void 0?void 0:value.name.toLowerCase());},renderTags:(value,getWhatsappProps)=>value.map((option,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({variant:"outlined",style:{backgroundColor:"#bfbfbf",textShadow:"1px 1px 1px #000",color:"white"},label:option.name},getWhatsappProps({index})),{},{size:"small"}))),renderInput:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},params),{},{variant:"outlined",placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_9__/* .i18n */ .R.t("tickets.search.filterConections")}))})});}

/***/ },

/***/ 64549
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94505);
const useDashboard=()=>{const find=async params=>{const _await$api$request=await _services_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.request({url:"/dashboard",method:'GET',params}),data=_await$api$request.data;return data;};const getReport=async params=>{const _await$api$request2=await _services_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.request({url:"/ticketreport/reports",method:'GET',params}),data=_await$api$request2.data;return data;};return{find,getReport};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDashboard);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 44469
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Reports)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(91688);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(81551);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(67503);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(59691);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(72703);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(64759);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(18885);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(20495);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(30105);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Pagination/Pagination.js + 6 modules
var Pagination = __webpack_require__(28918);
// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.mjs
var xlsx = __webpack_require__(11238);
// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(94505);
// EXTERNAL MODULE: ./src/components/TableRowSkeleton/index.js
var TableRowSkeleton = __webpack_require__(13293);
// EXTERNAL MODULE: ./src/translate/i18n.js + 3 modules
var i18n = __webpack_require__(57044);
// EXTERNAL MODULE: ./src/components/MainHeader/index.js
var MainHeader = __webpack_require__(51170);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(45824);
// EXTERNAL MODULE: ./src/components/MainHeaderButtonsWrapper/index.js
var MainHeaderButtonsWrapper = __webpack_require__(86586);
// EXTERNAL MODULE: ./src/components/MainContainer/index.js
var MainContainer = __webpack_require__(50038);
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
// EXTERNAL MODULE: ./src/components/Can/index.js + 1 modules
var Can = __webpack_require__(12421);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(26943);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(58425);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(73083);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Switch/Switch.js
var Switch = __webpack_require__(43577);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17339);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(9579);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(67467);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(23819);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__(59548);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(55357);
// EXTERNAL MODULE: ./src/components/UsersFilter/index.js
var UsersFilter = __webpack_require__(93560);
// EXTERNAL MODULE: ./src/components/TagsFilter/index.js
var TagsFilter = __webpack_require__(18673);
// EXTERNAL MODULE: ./src/components/WhatsappsFilter/index.js
var WhatsappsFilter = __webpack_require__(72995);
// EXTERNAL MODULE: ./src/components/StatusFilter/index.js
var StatusFilter = __webpack_require__(57438);
// EXTERNAL MODULE: ./src/hooks/useDashboard/index.js
var useDashboard = __webpack_require__(64549);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(19227);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/components/QueueSelectCustom/index.js
const useStyles=(0,makeStyles/* default */.A)(theme=>({chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2}}));const QueueSelectCustom=_ref=>{let selectedQueueIds=_ref.selectedQueueIds,onChange=_ref.onChange;const classes=useStyles();const _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.A)(_useState,2),queues=_useState2[0],setQueues=_useState2[1];(0,react.useEffect)(()=>{(async()=>{try{const _await$api$get=await api/* default */.Ay.get("/queue"),data=_await$api$get.data;setQueues(data);}catch(err){(0,toastError/* default */.A)(err);}})();},[]);const handleChange=e=>{onChange(e.target.value);};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:6},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A,{fullWidth:true,margin:"dense",variant:"outlined",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A,{children:i18n/* i18n */.R.t("queueSelect.inputLabel")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* default */.A,{multiple:true,labelWidth:60,value:selectedQueueIds,onChange:handleChange,MenuProps:{anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},renderValue:selected=>/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classes.chips,children:(selected===null||selected===void 0?void 0:selected.length)>0&&selected.map(id=>{if(id==="0"){return/*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.A,{size:"small",label:i18n/* i18n */.R.t("queueSelect.withoutQueue"),className:classes.chip},id);}const queue=queues.find(q=>q.id===id);return queue?/*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.A,{style:{backgroundColor:queue.color},variant:"outlined",label:queue.name,className:classes.chip},id):null;})}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"0",children:i18n/* i18n */.R.t("queueSelect.withoutQueue")}),queues.map(queue=>/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:queue.id,children:queue.name},queue.id))]})]})});};/* harmony default export */ const components_QueueSelectCustom = (QueueSelectCustom);
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(86178);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
// EXTERNAL MODULE: ./src/components/ShowTicketLogModal/index.js
var ShowTicketLogModal = __webpack_require__(25668);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/blue.js
var blue = __webpack_require__(78801);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = __webpack_require__(93250);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Facebook.js
var Facebook = __webpack_require__(54755);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Instagram.js
var Instagram = __webpack_require__(94827);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/WhatsApp.js
var WhatsApp = __webpack_require__(37737);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/SaveAlt.js
var SaveAlt = __webpack_require__(17547);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/History.js
var History = __webpack_require__(62071);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Forward.js
var Forward = __webpack_require__(11342);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js
var useAutocomplete = __webpack_require__(83169);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js + 3 modules
var Autocomplete = __webpack_require__(29128);
;// ./src/pages/Reports/index.js
const Reports_useStyles=(0,makeStyles/* default */.A)(theme=>({mainContainer:{background:theme.palette.fancyBackground},formControl:{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'},mainPaper:{flex:1,marginTop:40,borderRadius:20,border:'0px !important',marginBottom:40,overflow:'hidden'},mainPaperTable:(0,objectSpread2/* default */.A)({flex:1,overflow:'auto',height:'68vh'},theme.scrollbarStylesSoftBig),mainPaperFilter:(0,objectSpread2/* default */.A)({flex:1,overflow:'auto',height:'20vh'},theme.scrollbarStylesSoftBig),mainHeaderBlock:{[theme.breakpoints.down('md')]:{display:'flex',flexWrap:'wrap'}},filterItem:{width:200,[theme.breakpoints.down('md')]:{width:'45%'}}}));const Reports=()=>{const classes=Reports_useStyles();const history=(0,react_router.useHistory)();const _useDashboard=(0,useDashboard/* default */.A)(),getReport=_useDashboard.getReport;const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user;const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];const _useState3=(0,react.useState)(1),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),pageNumber=_useState4[0],setPageNumber=_useState4[1];const _useState5=(0,react.useState)(10),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),pageSize=_useState6[0],setPageSize=_useState6[1];// Defina o tamanho da página
const _useState7=(0,react.useState)(""),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),searchParam=_useState8[0],setSearchParam=_useState8[1];const _useState9=(0,react.useState)(null),_useState0=(0,slicedToArray/* default */.A)(_useState9,2),selectedContactId=_useState0[0],setSelectedContactId=_useState0[1];const _useState1=(0,react.useState)([]),_useState10=(0,slicedToArray/* default */.A)(_useState1,2),selectedWhatsapp=_useState10[0],setSelectedWhatsapp=_useState10[1];const _useState11=(0,react.useState)([]),_useState12=(0,slicedToArray/* default */.A)(_useState11,2),selectedStatus=_useState12[0],setSelectedStatus=_useState12[1];const _useState13=(0,react.useState)(null),_useState14=(0,slicedToArray/* default */.A)(_useState13,2),selectedContact=_useState14[0],setSelectedContact=_useState14[1];// const [tagIds, setTagIds] = useState([]);
const _useState15=(0,react.useState)([]),_useState16=(0,slicedToArray/* default */.A)(_useState15,2),queueIds=_useState16[0],setQueueIds=_useState16[1];const _useState17=(0,react.useState)([]),_useState18=(0,slicedToArray/* default */.A)(_useState17,2),userIds=_useState18[0],setUserIds=_useState18[1];const _useState19=(0,react.useState)([]),_useState20=(0,slicedToArray/* default */.A)(_useState19,2),options=_useState20[0],setOptions=_useState20[1];const _useState21=(0,react.useState)(moment_default()("1","D").format("YYYY-MM-DD")),_useState22=(0,slicedToArray/* default */.A)(_useState21,2),dateFrom=_useState22[0],setDateFrom=_useState22[1];const _useState23=(0,react.useState)(moment_default()().format("YYYY-MM-DD")),_useState24=(0,slicedToArray/* default */.A)(_useState23,2),dateTo=_useState24[0],setDateTo=_useState24[1];const _useState25=(0,react.useState)(false),_useState26=(0,slicedToArray/* default */.A)(_useState25,2),onlyRated=_useState26[0],setOnlyRated=_useState26[1];const _useState27=(0,react.useState)(0),_useState28=(0,slicedToArray/* default */.A)(_useState27,2),totalTickets=_useState28[0],setTotalTickets=_useState28[1];const _useState29=(0,react.useState)([]),_useState30=(0,slicedToArray/* default */.A)(_useState29,2),tickets=_useState30[0],setTickets=_useState30[1];const _useState31=(0,react.useState)(false),_useState32=(0,slicedToArray/* default */.A)(_useState31,2),openTicketMessageDialog=_useState32[0],setOpenTicketMessageDialog=_useState32[1];const _useState33=(0,react.useState)(null),_useState34=(0,slicedToArray/* default */.A)(_useState33,2),ticketOpen=_useState34[0],setTicketOpen=_useState34[1];const _useState35=(0,react.useState)(false),_useState36=(0,slicedToArray/* default */.A)(_useState35,2),hasMore=_useState36[0],setHasMore=_useState36[1];(0,react.useEffect)(()=>{setLoading(true);const delayDebounceFn=setTimeout(()=>{const fetchContacts=async()=>{try{const _await$api$get=await api/* default */.Ay.get("contacts",{params:{searchParam}}),data=_await$api$get.data;setOptions(data.contacts);setLoading(false);}catch(err){setLoading(false);(0,toastError/* default */.A)(err);}};fetchContacts();},500);return()=>clearTimeout(delayDebounceFn);},[searchParam]);// const handleSelectedTags = (selecteds) => {
//   const tags = selecteds.map((t) => t.id);
//   setTagIds(tags);
// };
const exportarGridParaExcel=async()=>{setLoading(true);// Define o estado de loading como true durante o carregamento
try{const data=await getReport({searchParam,contactId:selectedContactId,whatsappId:JSON.stringify(selectedWhatsapp),// tags: JSON.stringify(tagIds),
users:JSON.stringify(userIds),queueIds:JSON.stringify(queueIds),status:JSON.stringify(selectedStatus),// tags: tagIds,
dateFrom,dateTo,page:1,// Passa o número da página para a API
pageSize:9999999,// Passa o tamanho da página para a API
onlyRated:onlyRated?"true":"false"});const ticketsData=data.tickets.map(ticket=>{// Convertendo o campo createdAt para um objeto Date
const createdAt=new Date(ticket.createdAt);const closedAt=new Date(ticket.closedAt);const dataFechamento=closedAt.toLocaleDateString();const horaFechamento=closedAt.toLocaleTimeString();// Obtendo a data e a hora separadamente
const dataCriacao=createdAt.toLocaleDateString();// Obtém a data no formato 'dd/mm/aaaa'
const horaCriacao=createdAt.toLocaleTimeString();// Obtém a hora no formato 'hh:mm:ss'
return{id:ticket.id,[i18n/* i18n */.R.t("reports.excel.connection")]:ticket.whatsappName,[i18n/* i18n */.R.t("reports.excel.contact")]:ticket.contactName,[i18n/* i18n */.R.t("reports.excel.user")]:ticket.userName,[i18n/* i18n */.R.t("reports.excel.queue")]:ticket.queueName,[i18n/* i18n */.R.t("reports.excel.status")]:ticket.status,[i18n/* i18n */.R.t("reports.excel.lastMessage")]:ticket.lastMessage,[i18n/* i18n */.R.t("reports.excel.dateOpen")]:dataCriacao,[i18n/* i18n */.R.t("reports.excel.timeOpen")]:horaCriacao,[i18n/* i18n */.R.t("reports.excel.dateClose")]:ticket.closedAt===null?"":dataFechamento,[i18n/* i18n */.R.t("reports.excel.timeClose")]:ticket.closedAt===null?"":horaFechamento,[i18n/* i18n */.R.t("reports.excel.supportTime")]:ticket.supportTime,[i18n/* i18n */.R.t("reports.excel.nps")]:ticket.NPS};});console.log(ticketsData);const ws=xlsx/* utils */.Wp.json_to_sheet(ticketsData);const wb=xlsx/* utils */.Wp.book_new();xlsx/* utils */.Wp.book_append_sheet(wb,ws,i18n/* i18n */.R.t("reports.excel.sheetName"));xlsx/* writeFile */._h(wb,i18n/* i18n */.R.t("reports.excel.fileName"));setPageNumber(pageNumber);// Atualiza o estado da página atual
}catch(error){(0,toastError/* default */.A)(error);}finally{setLoading(false);// Define o estado de loading como false após o carregamento
}};const handleFilter=async pageNumber=>{setLoading(true);// Define o estado de loading como true durante o carregamento
console.log(onlyRated);try{const data=await getReport({searchParam,contactId:selectedContactId,whatsappId:JSON.stringify(selectedWhatsapp),// tags: JSON.stringify(tagIds),
users:JSON.stringify(userIds),queueIds:JSON.stringify(queueIds),status:JSON.stringify(selectedStatus),// tags: tagIds,
dateFrom,dateTo,page:pageNumber,// Passa o número da página para a API
pageSize:pageSize,// Passa o tamanho da página para a API
onlyRated:onlyRated?"true":"false"});setTotalTickets(data.totalTickets.total);// Verifica se há mais resultados para definir hasMore
setHasMore(data.tickets.length===pageSize);setTickets(data.tickets);// Se for a primeira página, substitua os tickets
setPageNumber(pageNumber);// Atualiza o estado da página atual
}catch(error){(0,toastError/* default */.A)(error);}finally{setLoading(false);// Define o estado de loading como false após o carregamento
}};const handleSelectedUsers=selecteds=>{const users=selecteds.map(t=>t.id);setUserIds(users);};const handleSelectedWhatsapps=selecteds=>{const whatsapp=selecteds.map(t=>t.id);setSelectedWhatsapp(whatsapp);};const handleSelectedStatus=selecteds=>{const statusFilter=selecteds.map(t=>t.status);setSelectedStatus(statusFilter);};const IconChannel=channel=>{switch(channel){case"facebook":return/*#__PURE__*/(0,jsx_runtime.jsx)(Facebook/* default */.A,{style:{color:"#3b5998",verticalAlign:"middle"}});case"instagram":return/*#__PURE__*/(0,jsx_runtime.jsx)(Instagram/* default */.A,{style:{color:"#e1306c",verticalAlign:"middle"}});case"whatsapp":return/*#__PURE__*/(0,jsx_runtime.jsx)(WhatsApp/* default */.A,{style:{color:"#25d366",verticalAlign:"middle"}});default:return"error";}};const renderOption=option=>{if(option.number){return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[IconChannel(option.channel),/*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A,{component:"span",style:{fontSize:14,marginLeft:"10px",display:"inline-flex",alignItems:"center",lineHeight:"2"},children:[option.name," - ",option.number]})]});}else{return"".concat(i18n/* i18n */.R.t("newTicketModal.add")," ").concat(option.name);}};const handleSelectOption=(e,newValue)=>{setSelectedContactId(newValue.id);setSearchParam("");};const renderOptionLabel=option=>{if(option.number){return"".concat(option.name," - ").concat(option.number);}else{return"".concat(option.name);}};const filter=(0,useAutocomplete/* createFilterOptions */.Z)({trim:true});const createAddContactOption=(filterOptions,params)=>{const filtered=filter(filterOptions,params);if(params.inputValue!==""&&!loading&&searchParam.length>=3){filtered.push({name:"".concat(params.inputValue)});}return filtered;};const renderContactAutocomplete=()=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Autocomplete/* default */.Ay,{fullWidth:true,options:options,loading:loading,clearOnBlur:true,autoHighlight:true,freeSolo:true,size:"small",clearOnEscape:true,getOptionLabel:renderOptionLabel,renderOption:renderOption,filterOptions:createAddContactOption,onChange:(e,newValue)=>handleSelectOption(e,newValue),renderInput:params=>/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A,(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},params),{},{label:i18n/* i18n */.R.t("newTicketModal.fieldLabel"),variant:"outlined",autoFocus:true,size:"small",onChange:e=>setSearchParam(e.target.value)// onKeyPress={(e, newValue) => handleSelectOption(e, newValue)}
,InputProps:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},params.InputProps),{},{endAdornment:/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[loading?/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{color:"inherit",size:20}):null,params.InputProps.endAdornment]})})}))})});};return/*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer/* default */.A,{className:classes.mainContainer,children:[openTicketMessageDialog&&/*#__PURE__*/(0,jsx_runtime.jsx)(ShowTicketLogModal/* default */.A,{isOpen:openTicketMessageDialog,handleClose:()=>setOpenTicketMessageDialog(false),ticketId:ticketOpen.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A,{children:i18n/* i18n */.R.t("reports.title")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MainHeader/* default */.A,{className:classes.mainHeaderFilter,style:{display:'flex'},children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Paper/* default */.A,{className:classes.mainPaperFilter,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{paddingTop:'15px'}}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{container:true,spacing:1,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,md:3,xl:3,children:renderContactAutocomplete()}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(WhatsappsFilter/* WhatsappsFilter */.q,{onFiltered:handleSelectedWhatsapps})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(StatusFilter/* StatusFilter */.B,{onFiltered:handleSelectedStatus})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(UsersFilter/* UsersFilter */.J,{onFiltered:handleSelectedUsers})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,md:3,xl:3,style:{marginTop:'-13px'},children:/*#__PURE__*/(0,jsx_runtime.jsx)(components_QueueSelectCustom,{selectedQueueIds:queueIds,onChange:values=>setQueueIds(values)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,sm:3,md:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A,{label:i18n/* i18n */.R.t("reports.form.initialDate"),type:"date",value:dateFrom,variant:"outlined",fullWidth:true,size:"small",onChange:e=>setDateFrom(e.target.value),InputLabelProps:{shrink:true}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,sm:3,md:3,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A,{label:i18n/* i18n */.R.t("reports.form.finalDate"),type:"date",value:dateTo,variant:"outlined",fullWidth:true,size:"small",onChange:e=>setDateTo(e.target.value),InputLabelProps:{shrink:true}})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{item:true,xs:12,sm:3,md:3,style:{display:'flex',justifyContent:'center'},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(FormControlLabel/* default */.A,{control:/*#__PURE__*/(0,jsx_runtime.jsx)(Switch/* default */.A,{color:"primary",checked:onlyRated,onChange:()=>setOnlyRated(!onlyRated)}),label:i18n/* i18n */.R.t("reports.buttons.onlyRated")}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{onClick:exportarGridParaExcel,"aria-label":i18n/* i18n */.R.t("reports.tooltips.exportExcel"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SaveAlt/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{variant:"contained",color:"primary",onClick:()=>handleFilter(pageNumber),size:"small",children:i18n/* i18n */.R.t("reports.buttons.filter")})]})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaperTable,variant:"outlined",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{size:"small",id:"grid-attendants",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.id")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("reports.table.whatsapp")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("reports.table.contact")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("reports.table.user")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("reports.table.queue")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.status")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("reports.table.lastMessage")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.dateOpen")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.dateClose")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.supportTime")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.NPS")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("reports.table.actions")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[tickets.map(ticket=>/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:ticket.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:ticket===null||ticket===void 0?void 0:ticket.whatsappName}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:ticket===null||ticket===void 0?void 0:ticket.contactName}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:ticket===null||ticket===void 0?void 0:ticket.userName}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:ticket===null||ticket===void 0?void 0:ticket.queueName}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:ticket===null||ticket===void 0?void 0:ticket.status}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:ticket===null||ticket===void 0?void 0:ticket.lastMessage}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:ticket===null||ticket===void 0?void 0:ticket.createdAt}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:ticket===null||ticket===void 0?void 0:ticket.closedAt}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:ticket===null||ticket===void 0?void 0:ticket.supportTime}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:ticket===null||ticket===void 0?void 0:ticket.NPS}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Typography/* default */.A,{noWrap:true,component:"span",variant:"body2",color:"textPrimary",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.Ay,{title:i18n/* i18n */.R.t("reports.tooltips.ticketLogs"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(History/* default */.A,{onClick:()=>{setOpenTicketMessageDialog(true);setTicketOpen(ticket);},fontSize:"small",style:{color:blue/* default */.A[700],cursor:"pointer",marginLeft:10,verticalAlign:"middle"}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.Ay,{title:i18n/* i18n */.R.t("reports.tooltips.accessTicket"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Forward/* default */.A,{onClick:()=>{history.push("/tickets/".concat(ticket.uuid));},fontSize:"small",style:{color:green/* default */.A[700],cursor:"pointer",marginLeft:10,verticalAlign:"middle"}})})]})})]},ticket.id)),loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableRowSkeleton/* default */.A,{avatar:true,columns:3})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{container:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,sm:10,md:10,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Pagination/* default */.A,{count:Math.ceil(totalTickets/pageSize)// Calcula o nmero total de páginas com base no nmero total de tickets e no tamanho da página
,page:pageNumber// Define a página atual
,onChange:(event,value)=>handleFilter(value)// Função de callback para mudanças de página
})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,xs:12,sm:2,md:2,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A,{margin:"dense",variant:"outlined",fullWidth:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A,{children:i18n/* i18n */.R.t("tickets.search.ticketsPerPage")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Select/* default */.A,{labelId:"dialog-select-prompt-label",id:"dialog-select-prompt",name:"pageSize",value:pageSize,onChange:e=>{setPageSize(e.target.value);},label:i18n/* i18n */.R.t("tickets.search.ticketsPerPage"),fullWidth:true,MenuProps:{anchorOrigin:{vertical:"center",horizontal:"left"},transformOrigin:{vertical:"center",horizontal:"left"},getContentAnchorEl:null},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:5,children:"5"}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:10,children:"10"}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:20,children:"20"}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:50,children:"50"})]})]})})]})})]});};/* harmony default export */ const pages_Reports = (Reports);

/***/ }

}]);