"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[5791],{

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

/***/ 61355
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ useDate)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86178);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function useDate(){function dateToClient(strDate){if(moment__WEBPACK_IMPORTED_MODULE_0___default()(strDate).isValid()){return moment__WEBPACK_IMPORTED_MODULE_0___default()(strDate).format("DD/MM/YYYY");}return strDate;}function datetimeToClient(strDate){if(moment__WEBPACK_IMPORTED_MODULE_0___default()(strDate).isValid()){return moment__WEBPACK_IMPORTED_MODULE_0___default()(strDate).format("DD/MM/YYYY HH:mm");}return strDate;}function dateToDatabase(strDate){if(moment__WEBPACK_IMPORTED_MODULE_0___default()(strDate,"DD/MM/YYYY").isValid()){return moment__WEBPACK_IMPORTED_MODULE_0___default()(strDate).format("YYYY-MM-DD HH:mm:ss");}return strDate;}function returnDays(date){let data1=new Date();let data2=new Date(date);let result=data2.getTime()-data1.getTime();let days=Math.ceil(result/(1000*60*60*24));if(days===-0){days=0;}return days;}return{dateToClient,datetimeToClient,dateToDatabase,returnDays};}

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

/***/ 95791
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43550);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91688);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20495);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67503);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59691);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72703);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64759);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18885);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17339);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99229);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(71191);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72512);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(80946);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50038);
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(51170);
/* harmony import */ var _components_MainHeaderButtonsWrapper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86586);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45824);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(57044);
/* harmony import */ var _components_TableRowSkeleton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(13293);
/* harmony import */ var _components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(10168);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(82455);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(50298);
/* harmony import */ var _hooks_useDate__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(61355);
/* harmony import */ var _context_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(50950);
/* harmony import */ var _hooks_usePlans__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(62829);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(86178);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _utils_documentValidator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(65231);
/* harmony import */ var _utils_documentFormatter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(74443);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(70579);
// import { SocketContext } from "../../context/Socket/SocketContext"; //
//
//
//
//
//
//
//
// Adicionado para os botões de ação na tabela
// Adicionado para o campo de busca
// Adicionado para o ícone de busca
// Adicionado para o ícone de busca
// Adicionado para o ícone de deletar
// Adicionado para o ícone de limpar busca
//
//
// Adicionado, presumindo que é um componente que você tem
//
//
//
//
//
//
//
//
// // Importação mantida, mesmo que não usada diretamente
//
const reducer=(state,action)=>{if(action.type==="LOAD_COMPANIES"){const companies=action.payload;//
const newCompanies=[];//
companies.forEach(company=>{//
const companyIndex=state.findIndex(u=>u.id===company.id);//
if(companyIndex!==-1){//
state[companyIndex]=company;//
}else{//
newCompanies.push(company);//
}});return[...state,...newCompanies];//
}if(action.type==="UPDATE_COMPANIES"){const company=action.payload;//
const companyIndex=state.findIndex(u=>u.id===company.id);//
if(companyIndex!==-1){//
state[companyIndex]=company;//
return[...state];//
}else{//
return[company,...state];//
}}if(action.type==="DELETE_COMPANIES"){const companyId=action.payload;//
const companyIndex=state.findIndex(u=>u.id===companyId);//
if(companyIndex!==-1){//
state.splice(companyIndex,1);//
}return[...state];//
}if(action.type==="RESET"){return[];//
}return state;// Retorne o estado atual se a ação não for reconhecida, para evitar undefined.
};const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(theme=>({mainPaper:(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({flex:1,width:"100%",overflowY:"scroll",overflowX:"auto"},theme.scrollbarStyles)}));const Companies=()=>{const classes=useStyles();//
const history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();//
const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];//
const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,2),pageNumber=_useState4[0],setPageNumber=_useState4[1];//
const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState5,2),hasMore=_useState6[0],setHasMore=_useState6[1];//
const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState7,2),deletingCompany=_useState8[0],setDeletingCompany=_useState8[1];//
const _useState9=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState0=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState9,2),confirmModalOpen=_useState0[0],setConfirmModalOpen=_useState0[1];//
const _useState1=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState10=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState1,2),searchParam=_useState10[0],setSearchParam=_useState10[1];//
const _useReducer=(0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer,[]),_useReducer2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useReducer,2),companies=_useReducer2[0],dispatch=_useReducer2[1];//
const _useDate=(0,_hooks_useDate__WEBPACK_IMPORTED_MODULE_28__/* .useDate */ .S)(),dateToClient=_useDate.dateToClient,datetimeToClient=_useDate.datetimeToClient;//
const _useCurrencyContext=(0,_context_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_29__/* .useCurrencyContext */ .CL)(),formatCurrency=_useCurrencyContext.formatCurrency;// const { getPlanCompany } = usePlans(); //
//   const socketManager = useContext(SocketContext); //
const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_27__/* .AuthContext */ .c),user=_useContext.user,socket=_useContext.socket;//
// Busca local usando useMemo para filtrar empresas
const filteredCompanies=(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{if(!searchParam)return companies;const term=searchParam.toLowerCase();const termNormalized=(0,_utils_documentValidator__WEBPACK_IMPORTED_MODULE_32__/* .normalizeDocument */ .DN)(term);// Normalizar busca
return companies.filter(company=>{var _company$name,_company$email,_company$document,_company$phone;return((_company$name=company.name)===null||_company$name===void 0?void 0:_company$name.toLowerCase().includes(term))||((_company$email=company.email)===null||_company$email===void 0?void 0:_company$email.toLowerCase().includes(term))||termNormalized&&((_company$document=company.document)===null||_company$document===void 0?void 0:_company$document.includes(termNormalized))||(// Busca normalizada
(_company$phone=company.phone)===null||_company$phone===void 0?void 0:_company$phone.includes(term));});},[companies,searchParam]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{async function fetchData(){if(!user.super){//
react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.error(_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.notifications.noPermission"));//
setTimeout(()=>{//
history.push("/");//
},1000);//
}}fetchData();//
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);//
// Removido o reset quando searchParam muda, pois agora a busca é local
// useEffect(() => {
//     dispatch({ type: "RESET" }); //
//     setPageNumber(1); //
// }, [searchParam]); //
(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{setLoading(true);//
const delayDebounceFn=setTimeout(()=>{//
const fetchCompanies=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay.get("/companiesPlan/",{//
params:{pageNumber}//
}),data=_await$api$get.data;dispatch({type:"LOAD_COMPANIES",payload:data.companies});//
setHasMore(data.hasMore);//
setLoading(false);//
}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(err);//
}};fetchCompanies();//
},500);//
return()=>clearTimeout(delayDebounceFn);//
},[pageNumber]);//
// // Evento de socket para atualização de empresas
// useEffect(() => {
//     if (socket) {
//         socket.on("company", (data) => {
//             if (data.action === "update" || data.action === "create") {
//                 dispatch({ type: "UPDATE_COMPANIES", payload: data.company });
//             } else if (data.action === "delete") {
//                 dispatch({ type: "DELETE_COMPANIES", payload: data.companyId });
//             }
//         });
//     }
//     return () => {
//         if (socket) {
//             socket.off("company");
//         }
//     };
// }, [socket]);
const handleSearch=event=>{setSearchParam(event.target.value.toLowerCase());//
};const handleClearSearch=()=>{setSearchParam("");};const handleDeleteCompany=async companyId=>{try{await _services_api__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Ay.delete("/companies/".concat(companyId));//
react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.toasts.deleted"));//
}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A)(err);//
}setDeletingCompany(null);//
// Recarrega a lista após deletar
dispatch({type:"DELETE_COMPANIES",payload:companyId});//
};const loadMore=()=>{setPageNumber(prevState=>prevState+1);//
};const handleScroll=e=>{if(!hasMore||loading)return;//
const _e$currentTarget=e.currentTarget,scrollTop=_e$currentTarget.scrollTop,scrollHeight=_e$currentTarget.scrollHeight,clientHeight=_e$currentTarget.clientHeight;//
if(scrollHeight-(scrollTop+100)<clientHeight){//
loadMore();//
}};const renderStatus=status=>{// Renomeado de 'row' para 'status' para clareza
return status===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderPlanValue=company=>{// Renomeado de 'row' para 'company' para clareza
if(company.planId!==null&&company.plan&&company.plan.amount){return formatCurrency(company.plan.amount);}return formatCurrency(0);};const renderWhatsapp=useWhatsapp=>{// Renomeado de 'row' para 'useWhatsapp' para clareza
return useWhatsapp===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderFacebook=useFacebook=>{// Renomeado de 'row' para 'useFacebook' para clareza
return useFacebook===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderInstagram=useInstagram=>{// Renomeado de 'row' para 'useInstagram' para clareza
return useInstagram===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderCampaigns=useCampaigns=>{// Renomeado de 'row' para 'useCampaigns' para clareza
return useCampaigns===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderSchedules=useSchedules=>{// Renomeado de 'row' para 'useSchedules' para clareza
return useSchedules===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderInternalChat=useInternalChat=>{// Renomeado de 'row' para 'useInternalChat' para clareza
return useInternalChat===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const renderExternalApi=useExternalApi=>{// Renomeado de 'row' para 'useExternalApi' para clareza
return useExternalApi===false?_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.no"):_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.yes");//
};const rowStyle=record=>{if(moment__WEBPACK_IMPORTED_MODULE_31___default()(record.dueDate).isValid()){//
const now=moment__WEBPACK_IMPORTED_MODULE_31___default()();//
const dueDate=moment__WEBPACK_IMPORTED_MODULE_31___default()(record.dueDate);//
const diff=dueDate.diff(now,"days");//
if(diff>=1&&diff<=5){//
return{backgroundColor:"#fffead"};//
}if(diff<=0){//
return{backgroundColor:"#fa8c8c"};//
}}return{};//
};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{maxWidth:false,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{title:deletingCompany&&"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.confirmationModal.deleteTitle")," ").concat(deletingCompany.name,"?")//
,open:confirmModalOpen//
,onClose:()=>setConfirmModalOpen(false)// Função para fechar o modal
,onConfirm:()=>handleDeleteCompany(deletingCompany.id)//
,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_components_MainHeader__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_components_Title__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,{children:[_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.title")," (",filteredCompanies.length,")"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_MainHeaderButtonsWrapper__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.searchPlaceholder"),type:"search",value:searchParam,onChange:handleSearch,variant:"outlined",fullWidth:true,margin:"dense",InputProps:{startAdornment:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{position:"start",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{style:{color:"gray"}})}),endAdornment:searchParam&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{position:"end",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{onClick:handleClearSearch,size:"small","aria-label":_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.clearSearch"),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{})})})},"aria-label":_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.searchLabel")})})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{className:classes.mainPaper,variant:"outlined",onScroll:handleScroll,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{size:"small",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.ID")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.status")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.name")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.email")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.namePlan")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.value")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.createdAt")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.dueDate")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.lastLogin")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.folderSize")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.totalFiles")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.lastUpdate")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_23__/* .i18n */ .R.t("compaies.table.actions")})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.Fragment,{children:[filteredCompanies.map(company=>{var _company$plan;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{style:rowStyle(company),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:company.id}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:renderStatus(company.status)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:company.name}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:company.email}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:company===null||company===void 0?void 0:(_company$plan=company.plan)===null||_company$plan===void 0?void 0:_company$plan.name})," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:renderPlanValue(company)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:dateToClient(company.createdAt)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:[dateToClient(company.dueDate),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)("span",{children:company.recurrence})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:datetimeToClient(company.lastLogin)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:company.folderSize}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:company.numberFileFolder}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:datetimeToClient(company.updatedAtFolder)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{align:"center",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{size:"small",onClick:()=>{// Modificado para não passar o evento 'e' se não for usado
setConfirmModalOpen(true);//
setDeletingCompany(company);//
},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{style:{color:"red"}})})})]},company.id);}),loading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_34__.jsx)(_components_TableRowSkeleton__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{columns:4})]})})]})})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Companies);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 74443
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports formatCPF, formatCNPJ, formatDocument */
/* unused harmony import specifier */ var normalizeDocument;
/* unused harmony import specifier */ var i18n;
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57044);
/**
 * Formatação e máscara de documentos brasileiros (CPF e CNPJ)
 *//**
 * Formata CPF para exibição: 12345678900 → 123.456.789-00
 * @param {string} cpf - CPF com 11 dígitos
 * @returns {string} CPF formatado ou o valor original
 */const formatCPF=cpf=>{if(!cpf||cpf.length!==11)return cpf;return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,'$1.$2.$3-$4');};/**
 * Formata CNPJ para exibição: 12345678000190 → 12.345.678/0001-90
 * @param {string} cnpj - CNPJ com 14 dígitos
 * @returns {string} CNPJ formatado ou o valor original
 */const formatCNPJ=cnpj=>{if(!cnpj||cnpj.length!==14)return cnpj;return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,'$1.$2.$3/$4-$5');};/**
 * Formata documento automaticamente (CPF ou CNPJ) para exibição
 * @param {string|null|undefined} doc - Documento normalizado
 * @returns {string} Documento formatado ou "Não informado"
 */const formatDocument=doc=>{if(!doc)return i18n.t('compaies.form.documentNotProvided');const normalized=normalizeDocument(doc);if(!normalized)return i18n.t('compaies.form.documentNotProvided');if(normalized.length===11)return formatCPF(normalized);if(normalized.length===14)return formatCNPJ(normalized);return doc;// Retornar sem formatação se inválido
};/**
 * Retorna máscara condicional para InputMask baseada no valor
 * @param {string|undefined} value - Valor atual do campo
 * @returns {string} Máscara ("999.999.999-99" ou "99.999.999/9999-99")
 */const getDocumentMask=value=>{if(!value)return'999.999.999-99';// CPF default
const digits=value.replace(/\D/g,'');// 0-11 dígitos: CPF, 12-14 dígitos: CNPJ
return digits.length>=12?'99.999.999/9999-99':'999.999.999-99';};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "OH", 0, /* binding */ getDocumentMask
/* harmony export */ ]);


/***/ },

/***/ 65231
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony exports validateCPF, validateCNPJ */
/**
 * Validação de documentos brasileiros (CPF e CNPJ)
 * Implementa algoritmos completos da Receita Federal
 *//**
 * Remove formatação de CPF/CNPJ
 * @param {string|null|undefined} doc - Documento formatado
 * @returns {string|null} Documento normalizado ou null
 */const normalizeDocument=doc=>{if(!doc)return null;const normalized=doc.replace(/[.\-\/\s]/g,'').trim();return normalized===''?null:normalized;};/**
 * Valida CPF segundo algoritmo da Receita Federal
 * @param {string} cpf - CPF com 11 dígitos (sem formatação)
 * @returns {boolean} true se válido
 */const validateCPF=cpf=>{// Verificar comprimento
if(!cpf||cpf.length!==11)return false;// Rejeitar sequências conhecidas (todos os dígitos iguais)
const knownInvalidSequences=['00000000000','11111111111','22222222222','33333333333','44444444444','55555555555','66666666666','77777777777','88888888888','99999999999'];if(knownInvalidSequences.includes(cpf))return false;// Validar apenas se todos os caracteres são dígitos
if(!/^\d+$/.test(cpf))return false;// Calcular primeiro dígito verificador (DV1)
let sum=0;for(let i=0;i<9;i++){sum+=parseInt(cpf.charAt(i))*(10-i);}let remainder=sum%11;const dv1=remainder<2?0:11-remainder;// Verificar DV1
if(parseInt(cpf.charAt(9))!==dv1)return false;// Calcular segundo dígito verificador (DV2)
sum=0;for(let i=0;i<10;i++){sum+=parseInt(cpf.charAt(i))*(11-i);}remainder=sum%11;const dv2=remainder<2?0:11-remainder;// Verificar DV2
return parseInt(cpf.charAt(10))===dv2;};/**
 * Valida CNPJ segundo algoritmo da Receita Federal
 * @param {string} cnpj - CNPJ com 14 dígitos (sem formatação)
 * @returns {boolean} true se válido
 */const validateCNPJ=cnpj=>{// Verificar comprimento
if(!cnpj||cnpj.length!==14)return false;// Rejeitar sequências conhecidas (todos os dígitos iguais)
const knownInvalidSequences=['00000000000000','11111111111111','22222222222222','33333333333333','44444444444444','55555555555555','66666666666666','77777777777777','88888888888888','99999999999999'];if(knownInvalidSequences.includes(cnpj))return false;// Validar apenas se todos os caracteres são dígitos
if(!/^\d+$/.test(cnpj))return false;// Calcular primeiro dígito verificador (DV1)
const weights1=[5,4,3,2,9,8,7,6,5,4,3,2];let sum=0;for(let i=0;i<12;i++){sum+=parseInt(cnpj.charAt(i))*weights1[i];}let remainder=sum%11;const dv1=remainder<2?0:11-remainder;// Verificar DV1
if(parseInt(cnpj.charAt(12))!==dv1)return false;// Calcular segundo dígito verificador (DV2)
const weights2=[6,5,4,3,2,9,8,7,6,5,4,3,2];sum=0;for(let i=0;i<13;i++){sum+=parseInt(cnpj.charAt(i))*weights2[i];}remainder=sum%11;const dv2=remainder<2?0:11-remainder;// Verificar DV2
return parseInt(cnpj.charAt(13))===dv2;};/**
 * Valida CPF OU CNPJ automaticamente
 * @param {string|null|undefined} doc - Documento
 * @returns {boolean} true se válido ou vazio (opcional)
 */const validateCPFOrCNPJ=doc=>{if(!doc)return true;// Campo opcional
const normalized=normalizeDocument(doc);if(!normalized)return true;if(normalized.length===11)return validateCPF(normalized);if(normalized.length===14)return validateCNPJ(normalized);return false;// Comprimento inválido
};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "DN", 0, /* binding */ normalizeDocument,
/* harmony export */   "Qv", 0, /* binding */ validateCPFOrCNPJ
/* harmony export */ ]);


/***/ }

}]);