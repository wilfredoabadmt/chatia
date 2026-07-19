"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[6917],{

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

/***/ 62829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94505);
const usePlans=()=>{const getPlanList=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$openApi$reques=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* .openApi */ .Nd.request({url:'/plans/list',method:'GET',params}),data=_await$openApi$reques.data;return data;},[]);const list=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$api$request=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/plans/all',method:'GET',params}),data=_await$api$request.data;return data;},[]);const save=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request2=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/plans',method:'POST',data}),responseData=_await$api$request2.data;return responseData;},[]);const update=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request3=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/plans/".concat(data.id),method:'PUT',data}),responseData=_await$api$request3.data;return responseData;},[]);const remove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id=>{const _await$api$request4=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/plans/".concat(id),method:'DELETE'}),data=_await$api$request4.data;return data;},[]);const getPlanCompany=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async(params,id)=>{const _await$api$request5=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/companies/listPlan/".concat(id),method:'GET',params}),data=_await$api$request5.data;return data;},[]);return{getPlanList,list,save,update,remove,getPlanCompany};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePlans);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 96917
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Prompts)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/socket.io-client/build/esm/index.js + 28 modules
var esm = __webpack_require__(42104);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(30105);
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(81551);
// EXTERNAL MODULE: ./src/components/MainContainer/index.js
var MainContainer = __webpack_require__(50038);
// EXTERNAL MODULE: ./src/components/MainHeader/index.js
var MainHeader = __webpack_require__(51170);
// EXTERNAL MODULE: ./src/components/MainHeaderButtonsWrapper/index.js
var MainHeaderButtonsWrapper = __webpack_require__(86586);
// EXTERNAL MODULE: ./src/components/TableRowSkeleton/index.js
var TableRowSkeleton = __webpack_require__(13293);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(45824);
// EXTERNAL MODULE: ./src/translate/i18n.js + 3 modules
var i18n = __webpack_require__(57044);
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(94505);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Edit.js
var Edit = __webpack_require__(72347);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/DeleteOutline.js
var DeleteOutline = __webpack_require__(24028);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 25 modules
var es = __webpack_require__(73033);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 20 modules
var formik_esm = __webpack_require__(93201);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 1 modules
var react_toastify_esm = __webpack_require__(43550);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = __webpack_require__(93250);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(26943);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(35801);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(52907);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(43867);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(85883);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(58425);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(67467);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(23819);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__(59548);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(55357);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/VisibilityOff.js
var VisibilityOff = __webpack_require__(29034);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/esm/Visibility.js
var Visibility = __webpack_require__(83955);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(99229);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/components/QueueSelectSingle/index.js
const useStyles=(0,makeStyles/* default */.A)(theme=>({formControl:{margin:theme.spacing(1),minWidth:120}}));const QueueSelectSingle=()=>{const classes=useStyles();const _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.A)(_useState,2),queues=_useState2[0],setQueues=_useState2[1];(0,react.useEffect)(()=>{(async()=>{try{const _await$api$get=await api/* default */.Ay.get("/queue"),data=_await$api$get.data;setQueues(data);}catch(err){(0,toastError/* default */.A)("".concat(i18n/* i18n */.R.t("queueSelect.errors.loadError")," ").concat(err));}})();},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{marginTop:6},children:/*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.A,{variant:"outlined",className:classes.FormControl,margin:"dense",fullWidth:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{children:i18n/* i18n */.R.t("queueSelect.inputLabel")}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:Select/* default */.A,label:i18n/* i18n */.R.t("queueSelect.inputLabel"),name:"queueId",labelId:"queue-selection-label",id:"queue-selection",fullWidth:true,children:queues.map(queue=>/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:queue.id,children:queue.name},queue.id))})]})})});};/* harmony default export */ const components_QueueSelectSingle = (QueueSelectSingle);
;// ./src/components/PromptModal/index.js
const PromptModal_useStyles=(0,makeStyles/* default */.A)(theme=>({root:{display:"flex",flexWrap:"wrap"},multFieldLine:{display:"flex","& > *:not(:last-child)":{marginRight:theme.spacing(1)}},btnWrapper:{position:"relative"},buttonProgress:{color:green/* default */.A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:theme.spacing(1),minWidth:120},colorAdorment:{width:20,height:20}}));// Alinhar a lista de modelos com o backend
const allowedModels=["gpt-3.5-turbo-1106","gpt-4o","gemini-1.5-flash","gemini-1.5-pro","gemini-2.0-flash","gemini-2.0-pro"];const PromptSchema=es/* object */.Ik().shape({name:es/* string */.Yj().min(5,i18n/* i18n */.R.t("promptModal.validation.tooShort")).max(100,i18n/* i18n */.R.t("promptModal.validation.tooLong")).required(i18n/* i18n */.R.t("promptModal.validation.required")),prompt:es/* string */.Yj().min(50,i18n/* i18n */.R.t("promptModal.validation.tooShort")).required(i18n/* i18n */.R.t("promptModal.validation.promptDescription")),model:es/* string */.Yj().oneOf(allowedModels,i18n/* i18n */.R.t("promptModal.validation.invalidModel")).required(i18n/* i18n */.R.t("promptModal.validation.informModel")),maxTokens:es/* number */.ai().min(10,i18n/* i18n */.R.t("promptModal.validation.minTokens")).max(4096,i18n/* i18n */.R.t("promptModal.validation.maxTokens")).required(i18n/* i18n */.R.t("promptModal.validation.informMaxTokens")),temperature:es/* number */.ai().min(0,i18n/* i18n */.R.t("promptModal.validation.minZero")).max(1,i18n/* i18n */.R.t("promptModal.validation.maxOne")).required(i18n/* i18n */.R.t("promptModal.validation.informTemperature")),apiKey:es/* string */.Yj().required(i18n/* i18n */.R.t("promptModal.validation.informApiKey")),queueId:es/* number */.ai().required(i18n/* i18n */.R.t("promptModal.validation.informQueue")),maxMessages:es/* number */.ai().min(1,i18n/* i18n */.R.t("promptModal.validation.minMessages")).max(50,i18n/* i18n */.R.t("promptModal.validation.maxMessages")).required(i18n/* i18n */.R.t("promptModal.validation.informMaxMessages")),voice:es/* string */.Yj().when("model",{is:"gpt-3.5-turbo-1106",then:es/* string */.Yj().required(i18n/* i18n */.R.t("promptModal.validation.informVoiceMode")),otherwise:es/* string */.Yj().notRequired()}),voiceKey:es/* string */.Yj().notRequired(),voiceRegion:es/* string */.Yj().notRequired()});const PromptModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,promptId=_ref.promptId;const classes=PromptModal_useStyles();const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),showApiKey=_useState2[0],setShowApiKey=_useState2[1];const handleToggleApiKey=()=>{setShowApiKey(!showApiKey);};const initialState={name:"",prompt:"",model:"gpt-3.5-turbo-1106",voice:"texto",voiceKey:"",voiceRegion:"",maxTokens:100,temperature:1,apiKey:"",queueId:null,maxMessages:10};const _useState3=(0,react.useState)(initialState),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),prompt=_useState4[0],setPrompt=_useState4[1];(0,react.useEffect)(()=>{const fetchPrompt=async()=>{if(!promptId){setPrompt(initialState);return;}try{const _await$api$get=await api/* default */.Ay.get("/prompt/".concat(promptId)),data=_await$api$get.data;setPrompt((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},initialState),data),{},{queueId:data.queueId||null,// Garantir que queueId seja definido
model:allowedModels.includes(data.model)?data.model:"gpt-3.5-turbo-1106"// Validação de modelo
}));}catch(err){(0,toastError/* default */.A)(err);}};fetchPrompt();},[promptId,open]);const handleClose=()=>{setPrompt(initialState);onClose();};const handleSavePrompt=async(values,_ref2)=>{let setSubmitting=_ref2.setSubmitting,setErrors=_ref2.setErrors;try{const promptData=(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},values),{},{voice:values.model==="gpt-3.5-turbo-1106"?values.voice:"texto"});if(promptId){await api/* default */.Ay.put("/prompt/".concat(promptId),promptData);}else{await api/* default */.Ay.post("/prompt",promptData);}react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("promptModal.success"));handleClose();}catch(err){var _err$response,_err$response$data;const errorMessage=((_err$response=err.response)===null||_err$response===void 0?void 0:(_err$response$data=_err$response.data)===null||_err$response$data===void 0?void 0:_err$response$data.message)||i18n/* i18n */.R.t("promptModal.errors.savePrompt");(0,toastError/* default */.A)(errorMessage);try{const parsedError=JSON.parse(errorMessage);if(parsedError.errors){const fieldErrors={};parsedError.errors.forEach(error=>{if(error.includes("NAME"))fieldErrors.name=error;if(error.includes("PROMPT"))fieldErrors.prompt=error;if(error.includes("MODEL"))fieldErrors.model=error;if(error.includes("TOKENS"))fieldErrors.maxTokens=error;if(error.includes("TEMPERATURE"))fieldErrors.temperature=error;if(error.includes("APIKEY"))fieldErrors.apiKey=error;if(error.includes("QUEUEID"))fieldErrors.queueId=error;if(error.includes("MESSAGES"))fieldErrors.maxMessages=error;if(error.includes("VOICE"))fieldErrors.voice=error;});setErrors(fieldErrors);}}catch(jsonError){// Se não for um JSON, apenas exibir o erro genérico
}setSubmitting(false);}};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classes.root,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* default */.A,{open:open,onClose:handleClose,maxWidth:"md",scroll:"paper",fullWidth:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DialogTitle/* default */.A,{id:"form-dialog-title",children:promptId?i18n/* i18n */.R.t("promptModal.title.edit"):i18n/* i18n */.R.t("promptModal.title.add")}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.l1,{initialValues:prompt,enableReinitialize:true,validationSchema:PromptSchema,onSubmit:handleSavePrompt,children:_ref3=>{let touched=_ref3.touched,errors=_ref3.errors,isSubmitting=_ref3.isSubmitting,values=_ref3.values,setFieldValue=_ref3.setFieldValue;return/*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.lV,{style:{width:"100%"},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(DialogContent/* default */.A,{dividers:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.name"),name:"name",error:touched.name&&Boolean(errors.name),helperText:touched.name&&errors.name,variant:"outlined",margin:"dense",fullWidth:true,required:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(FormControl/* default */.A,{fullWidth:true,margin:"dense",variant:"outlined",children:/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.apikey"),name:"apiKey",type:showApiKey?"text":"password",error:touched.apiKey&&Boolean(errors.apiKey),helperText:touched.apiKey&&errors.apiKey,variant:"outlined",margin:"dense",fullWidth:true,required:true,InputProps:{endAdornment:/*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornment/* default */.A,{position:"end",children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{onClick:handleToggleApiKey,children:showApiKey?/*#__PURE__*/(0,jsx_runtime.jsx)(VisibilityOff/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(Visibility/* default */.A,{})})})}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.prompt"),name:"prompt",error:touched.prompt&&Boolean(errors.prompt),helperText:touched.prompt&&errors.prompt,variant:"outlined",margin:"dense",fullWidth:true,required:true,minRows:10,multiline:true}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{name:"queueId",component:_ref4=>{let field=_ref4.field,form=_ref4.form;return/*#__PURE__*/(0,jsx_runtime.jsx)(components_QueueSelectSingle,{selectedQueueId:field.value,onChange:value=>form.setFieldValue("queueId",value)});}}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.multFieldLine,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A,{fullWidth:true,margin:"dense",variant:"outlined",error:touched.model&&Boolean(errors.model),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A,{children:i18n/* i18n */.R.t("promptModal.form.model")}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:Select/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.model"),name:"model",onChange:e=>{setFieldValue("model",e.target.value);if(e.target.value!=="gpt-3.5-turbo-1106"){setFieldValue("voice","texto");}},children:allowedModels.map(model=>/*#__PURE__*/(0,jsx_runtime.jsxs)(MenuItem/* default */.A,{value:model,children:[model==="gpt-3.5-turbo-1106"&&i18n/* i18n */.R.t("promptModal.models.gpt35"),model==="gpt-4o"&&i18n/* i18n */.R.t("promptModal.models.gpt4o"),model==="gemini-1.5-flash"&&i18n/* i18n */.R.t("promptModal.models.gemini15flash"),model==="gemini-1.5-pro"&&i18n/* i18n */.R.t("promptModal.models.gemini15pro"),model==="gemini-2.0-flash"&&i18n/* i18n */.R.t("promptModal.models.gemini20flash"),model==="gemini-2.0-pro"&&i18n/* i18n */.R.t("promptModal.models.gemini20pro")]},model))}),touched.model&&errors.model&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{color:"red",fontSize:"12px"},children:errors.model})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A,{fullWidth:true,margin:"dense",variant:"outlined",disabled:values.model!=="gpt-3.5-turbo-1106",error:touched.voice&&Boolean(errors.voice),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A,{children:i18n/* i18n */.R.t("promptModal.form.voice")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Field */.D0,{as:Select/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.voice"),name:"voice",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"texto",children:i18n/* i18n */.R.t("promptModal.voices.text")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-FranciscaNeural",children:i18n/* i18n */.R.t("promptModal.voices.francisca")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-AntonioNeural",children:i18n/* i18n */.R.t("promptModal.voices.antonio")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-BrendaNeural",children:i18n/* i18n */.R.t("promptModal.voices.brenda")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-DonatoNeural",children:i18n/* i18n */.R.t("promptModal.voices.donato")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-ElzaNeural",children:i18n/* i18n */.R.t("promptModal.voices.elza")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-FabioNeural",children:i18n/* i18n */.R.t("promptModal.voices.fabio")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-GiovannaNeural",children:i18n/* i18n */.R.t("promptModal.voices.giovanna")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-HumbertoNeural",children:i18n/* i18n */.R.t("promptModal.voices.humberto")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-JulioNeural",children:i18n/* i18n */.R.t("promptModal.voices.julio")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-LeilaNeural",children:i18n/* i18n */.R.t("promptModal.voices.leila")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-LeticiaNeural",children:i18n/* i18n */.R.t("promptModal.voices.leticia")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-ManuelaNeural",children:i18n/* i18n */.R.t("promptModal.voices.manuela")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-NicolauNeural",children:i18n/* i18n */.R.t("promptModal.voices.nicolau")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-ValerioNeural",children:i18n/* i18n */.R.t("promptModal.voices.valerio")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:"pt-BR-YaraNeural",children:i18n/* i18n */.R.t("promptModal.voices.yara")})]}),touched.voice&&errors.voice&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{color:"red",fontSize:"12px"},children:errors.voice})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.multFieldLine,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.voiceKey"),name:"voiceKey",error:touched.voiceKey&&Boolean(errors.voiceKey),helperText:touched.voiceKey&&errors.voiceKey,variant:"outlined",margin:"dense",fullWidth:true,disabled:values.model!=="gpt-3.5-turbo-1106"}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.voiceRegion"),name:"voiceRegion",error:touched.voiceRegion&&Boolean(errors.voiceRegion),helperText:touched.voiceRegion&&errors.voiceRegion,variant:"outlined",margin:"dense",fullWidth:true,disabled:values.model!=="gpt-3.5-turbo-1106"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.multFieldLine,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.temperature"),name:"temperature",error:touched.temperature&&Boolean(errors.temperature),helperText:touched.temperature&&errors.temperature,variant:"outlined",margin:"dense",fullWidth:true,type:"number",inputProps:{step:"0.1",min:"0",max:"1"}}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.max_tokens"),name:"maxTokens",error:touched.maxTokens&&Boolean(errors.maxTokens),helperText:touched.maxTokens&&errors.maxTokens,variant:"outlined",margin:"dense",fullWidth:true,type:"number"}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("promptModal.form.max_messages"),name:"maxMessages",error:touched.maxMessages&&Boolean(errors.maxMessages),helperText:touched.maxMessages&&errors.maxMessages,variant:"outlined",margin:"dense",fullWidth:true,type:"number"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(DialogActions/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{onClick:handleClose,color:"secondary",disabled:isSubmitting,variant:"outlined",children:i18n/* i18n */.R.t("promptModal.buttons.cancel")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.A,{type:"submit",color:"primary",disabled:isSubmitting,variant:"contained",className:classes.btnWrapper,children:[promptId?i18n/* i18n */.R.t("promptModal.buttons.okEdit"):i18n/* i18n */.R.t("promptModal.buttons.okAdd"),isSubmitting&&/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{size:24,className:classes.buttonProgress})]})]})]});}})]})});};/* harmony default export */ const components_PromptModal = (PromptModal);
// EXTERNAL MODULE: ./src/components/ConfirmationModal/index.js
var ConfirmationModal = __webpack_require__(10168);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
// EXTERNAL MODULE: ./src/hooks/usePlans/index.js
var usePlans = __webpack_require__(62829);
// EXTERNAL MODULE: ./node_modules/react-router-dom/cjs/react-router-dom.min.js
var react_router_dom_min = __webpack_require__(35323);
// EXTERNAL MODULE: ./src/components/ForbiddenPage/index.js
var ForbiddenPage = __webpack_require__(86196);
;// ./src/pages/Prompts/index.js
// import { SocketContext } from "../../context/Socket/SocketContext";
const Prompts_useStyles=(0,makeStyles/* default */.A)(theme=>({mainPaper:(0,objectSpread2/* default */.A)({flex:1,padding:theme.spacing(1),overflowY:"scroll"},theme.scrollbarStyles),customTableCell:{display:"flex",alignItems:"center",justifyContent:"center"}}));const reducer=(state,action)=>{if(action.type==="LOAD_PROMPTS"){const prompts=action.payload;const newPrompts=[];prompts.forEach(prompt=>{const promptIndex=state.findIndex(p=>p.id===prompt.id);if(promptIndex!==-1){state[promptIndex]=prompt;}else{newPrompts.push(prompt);}});return[...state,...newPrompts];}if(action.type==="UPDATE_PROMPTS"){const prompt=action.payload;const promptIndex=state.findIndex(p=>p.id===prompt.id);if(promptIndex!==-1){state[promptIndex]=prompt;return[...state];}else{return[prompt,...state];}}if(action.type==="DELETE_PROMPT"){const promptId=action.payload;const promptIndex=state.findIndex(p=>p.id===promptId);if(promptIndex!==-1){state.splice(promptIndex,1);}return[...state];}if(action.type==="RESET"){return[];}};const Prompts=()=>{const classes=Prompts_useStyles();const _useReducer=(0,react.useReducer)(reducer,[]),_useReducer2=(0,slicedToArray/* default */.A)(_useReducer,2),prompts=_useReducer2[0],dispatch=_useReducer2[1];const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];const _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),promptModalOpen=_useState4[0],setPromptModalOpen=_useState4[1];const _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),selectedPrompt=_useState6[0],setSelectedPrompt=_useState6[1];const _useState7=(0,react.useState)(false),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),confirmModalOpen=_useState8[0],setConfirmModalOpen=_useState8[1];//   const socketManager = useContext(SocketContext);
const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user,socket=_useContext.socket;const _usePlans=(0,usePlans/* default */.A)(),getPlanCompany=_usePlans.getPlanCompany;const history=(0,react_router_dom_min/* useHistory */.W6)();const companyId=user.companyId;(0,react.useEffect)(()=>{async function fetchData(){const planConfigs=await getPlanCompany(undefined,companyId);if(!planConfigs||!planConfigs.plan||!planConfigs.plan.useOpenAi){react_toastify_esm/* toast */.oR.error(i18n/* i18n */.R.t("prompts.errors.noPermission"));setTimeout(()=>{history.push("/");},1000);}}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,react.useEffect)(()=>{(async()=>{setLoading(true);try{const _await$api$get=await api/* default */.Ay.get("/prompt"),data=_await$api$get.data;dispatch({type:"LOAD_PROMPTS",payload:data.prompts});setLoading(false);}catch(err){(0,toastError/* default */.A)(err);setLoading(false);}})();},[]);(0,react.useEffect)(()=>{// const socket = socketManager.GetSocket();
const onPromptEvent=data=>{if(data.action==="update"||data.action==="create"){dispatch({type:"UPDATE_PROMPTS",payload:data.prompt});}if(data.action==="delete"){dispatch({type:"DELETE_PROMPT",payload:data.promptId});}};socket.on("company-".concat(companyId,"-prompt"),onPromptEvent);return()=>{socket.off("company-".concat(companyId,"-prompt"),onPromptEvent);};},[socket]);const handleOpenPromptModal=()=>{setPromptModalOpen(true);setSelectedPrompt(null);};const handleClosePromptModal=()=>{setPromptModalOpen(false);setSelectedPrompt(null);};const handleEditPrompt=prompt=>{setSelectedPrompt(prompt);setPromptModalOpen(true);};const handleCloseConfirmationModal=()=>{setConfirmModalOpen(false);setSelectedPrompt(null);};const handleDeletePrompt=async promptId=>{try{const _await$api$delete=await api/* default */.Ay.delete("/prompt/".concat(promptId)),data=_await$api$delete.data;react_toastify_esm/* toast */.oR.info(i18n/* i18n */.R.t(data.message));}catch(err){(0,toastError/* default */.A)(err);}setSelectedPrompt(null);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.A,{title:selectedPrompt&&"".concat(i18n/* i18n */.R.t("prompts.confirmationModal.deleteTitle")," ").concat(selectedPrompt.name,"?"),open:confirmModalOpen,onClose:handleCloseConfirmationModal,onConfirm:()=>handleDeletePrompt(selectedPrompt.id),children:i18n/* i18n */.R.t("prompts.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_PromptModal,{open:promptModalOpen,onClose:handleClosePromptModal,promptId:selectedPrompt===null||selectedPrompt===void 0?void 0:selectedPrompt.id}),user.profile==="user"?/*#__PURE__*/(0,jsx_runtime.jsx)(ForbiddenPage/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(MainHeader/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A,{children:i18n/* i18n */.R.t("prompts.title")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MainHeaderButtonsWrapper/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{variant:"contained",color:"primary",onClick:handleOpenPromptModal,children:i18n/* i18n */.R.t("prompts.buttons.add")})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaper,variant:"outlined",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{size:"small",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("prompts.table.name")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("prompts.table.queue")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:i18n/* i18n */.R.t("prompts.table.max_tokens")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("prompts.table.actions")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[prompts.map(prompt=>/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:prompt.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:prompt.queue.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"left",children:prompt.maxTokens}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TableCell/* default */.A,{align:"center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>handleEditPrompt(prompt),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Edit/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>{setSelectedPrompt(prompt);setConfirmModalOpen(true);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutline/* default */.A,{})})]})]},prompt.id)),loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableRowSkeleton/* default */.A,{columns:4})]})})]})})]})]});};/* harmony default export */ const pages_Prompts = (Prompts);

/***/ },

/***/ 99229
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58168);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80045);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66187);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71745);
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36612);








var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    height: '0.01em',
    // Fix IE 11 flexbox alignment. To remove at some point.
    maxHeight: '2em',
    alignItems: 'center',
    whiteSpace: 'nowrap'
  },
  /* Styles applied to the root element if `variant="filled"`. */
  filled: {
    '&$positionStart:not($hiddenLabel)': {
      marginTop: 16
    }
  },
  /* Styles applied to the root element if `position="start"`. */
  positionStart: {
    marginRight: 8
  },
  /* Styles applied to the root element if `position="end"`. */
  positionEnd: {
    marginLeft: 8
  },
  /* Styles applied to the root element if `disablePointerEvents=true`. */
  disablePointerEvents: {
    pointerEvents: 'none'
  },
  /* Styles applied if the adornment is used inside <FormControl hiddenLabel />. */
  hiddenLabel: {},
  /* Styles applied if the adornment is used inside <FormControl margin="dense" />. */
  marginDense: {}
};
var InputAdornment = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function InputAdornment(props, ref) {
  var children = props.children,
    classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$disablePointer = props.disablePointerEvents,
    disablePointerEvents = _props$disablePointer === void 0 ? false : _props$disablePointer,
    _props$disableTypogra = props.disableTypography,
    disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
    position = props.position,
    variantProp = props.variant,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["children", "classes", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]);
  var muiFormControl = (0,_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__/* .useFormControl */ .t)() || {};
  var variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (false) // removed by dead control flow
{}
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className, position === 'end' ? classes.positionEnd : classes.positionStart, disablePointerEvents && classes.disablePointerEvents, muiFormControl.hiddenLabel && classes.hiddenLabel, variant === 'filled' && classes.filled, muiFormControl.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), typeof children === 'string' && !disableTypography ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Typography__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    color: "textSecondary"
  }, children) : children));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(styles, {
  name: 'MuiInputAdornment'
})(InputAdornment));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 55357
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 24028
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91917);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 72347
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91917);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

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

/***/ 11062
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export clsx */
function r(e) {
  var t,
    f,
    n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length;) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);