"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[6591],{

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

/***/ 86591
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ContactLists)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 1 modules
var react_toastify_esm = __webpack_require__(43550);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(91688);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(81551);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(20495);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(30105);
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(17339);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(71191);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(26943);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputAdornment/InputAdornment.js
var InputAdornment = __webpack_require__(99229);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteOutline.js
var DeleteOutline = __webpack_require__(72512);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Edit.js
var Edit = __webpack_require__(10559);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/People.js
var People = __webpack_require__(75932);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GetApp.js
var GetApp = __webpack_require__(99232);
// EXTERNAL MODULE: ./src/components/MainContainer/index.js
var MainContainer = __webpack_require__(50038);
// EXTERNAL MODULE: ./src/components/MainHeader/index.js
var MainHeader = __webpack_require__(51170);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(45824);
// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(94505);
// EXTERNAL MODULE: ./src/translate/i18n.js + 3 modules
var i18n = __webpack_require__(57044);
// EXTERNAL MODULE: ./src/components/TableRowSkeleton/index.js
var TableRowSkeleton = __webpack_require__(13293);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 25 modules
var es = __webpack_require__(73033);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 20 modules
var formik_esm = __webpack_require__(93201);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = __webpack_require__(93250);
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
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/components/ContactListDialog/index.js
const useStyles=(0,makeStyles/* default */.A)(theme=>({root:{display:"flex",flexWrap:"wrap"},multFieldLine:{display:"flex","& > *:not(:last-child)":{marginRight:theme.spacing(1)}},btnWrapper:{position:"relative"},buttonProgress:{color:green/* default */.A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:theme.spacing(1),minWidth:120}}));const ContactListSchema=es/* object */.Ik().shape({name:es/* string */.Yj().min(2,i18n/* i18n */.R.t("validation.tooShort")).max(50,i18n/* i18n */.R.t("validation.tooLong")).required(i18n/* i18n */.R.t("validation.required"))});const ContactListModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,contactListId=_ref.contactListId;const classes=useStyles();const initialState={name:""};const _useState=(0,react.useState)(initialState),_useState2=(0,slicedToArray/* default */.A)(_useState,2),contactList=_useState2[0],setContactList=_useState2[1];(0,react.useEffect)(()=>{const fetchContactList=async()=>{if(!contactListId)return;try{const _await$api$get=await api/* default */.Ay.get("/contact-lists/".concat(contactListId)),data=_await$api$get.data;setContactList(prevState=>{return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prevState),data);});}catch(err){(0,toastError/* default */.A)(err);}};fetchContactList();},[contactListId,open]);const handleClose=()=>{onClose();setContactList(initialState);};const handleSaveContactList=async values=>{const contactListData=(0,objectSpread2/* default */.A)({},values);try{if(contactListId){await api/* default */.Ay.put("/contact-lists/".concat(contactListId),contactListData);}else{await api/* default */.Ay.post("/contact-lists",contactListData);}react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("contactList.dialog"));}catch(err){(0,toastError/* default */.A)(err);}handleClose();};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classes.root,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* default */.A,{open:open,onClose:handleClose,maxWidth:"xs",fullWidth:true,scroll:"paper",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DialogTitle/* default */.A,{id:"form-dialog-title",children:contactListId?"".concat(i18n/* i18n */.R.t("contactLists.dialog.edit")):"".concat(i18n/* i18n */.R.t("contactLists.dialog.add"))}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.l1,{initialValues:contactList,enableReinitialize:true,validationSchema:ContactListSchema,onSubmit:(values,actions)=>{setTimeout(()=>{handleSaveContactList(values);actions.setSubmitting(false);},400);},children:_ref2=>{let touched=_ref2.touched,errors=_ref2.errors,isSubmitting=_ref2.isSubmitting;return/*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.lV,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DialogContent/* default */.A,{dividers:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classes.multFieldLine,children:/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("contactLists.dialog.name"),autoFocus:true,name:"name",error:touched.name&&Boolean(errors.name),helperText:touched.name&&errors.name,variant:"outlined",margin:"dense",fullWidth:true})})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(DialogActions/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{onClick:handleClose,color:"secondary",disabled:isSubmitting,variant:"outlined",children:i18n/* i18n */.R.t("contactLists.dialog.cancel")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.A,{type:"submit",color:"primary",disabled:isSubmitting,variant:"contained",className:classes.btnWrapper,children:[contactListId?"".concat(i18n/* i18n */.R.t("contactLists.dialog.okEdit")):"".concat(i18n/* i18n */.R.t("contactLists.dialog.okAdd")),isSubmitting&&/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{size:24,className:classes.buttonProgress})]})]})]});}})]})});};/* harmony default export */ const ContactListDialog = (ContactListModal);
// EXTERNAL MODULE: ./src/components/ConfirmationModal/index.js
var ConfirmationModal = __webpack_require__(10168);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(18073);
// EXTERNAL MODULE: ./src/assets/planilha.xlsx
var planilha = __webpack_require__(48484);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
;// ./src/pages/ContactLists/index.js
// import { SocketContext } from "../../context/Socket/SocketContext";
const reducer=(state,action)=>{if(action.type==="LOAD_CONTACTLISTS"){const contactLists=action.payload;const newContactLists=[];contactLists.forEach(contactList=>{const contactListIndex=state.findIndex(u=>u.id===contactList.id);if(contactListIndex!==-1){state[contactListIndex]=contactList;}else{newContactLists.push(contactList);}});return[...state,...newContactLists];}if(action.type==="UPDATE_CONTACTLIST"){const contactList=action.payload;const contactListIndex=state.findIndex(u=>u.id===contactList.id);if(contactListIndex!==-1){state[contactListIndex]=contactList;return[...state];}else{return[contactList,...state];}}if(action.type==="DELETE_CONTACTLIST"){const contactListId=action.payload;const contactListIndex=state.findIndex(u=>u.id===contactListId);if(contactListIndex!==-1){state.splice(contactListIndex,1);}return[...state];}if(action.type==="RESET"){return[];}};const ContactLists_useStyles=(0,makeStyles/* default */.A)(theme=>({mainPaper:(0,objectSpread2/* default */.A)({flex:1,padding:theme.spacing(1),overflowY:"scroll"},theme.scrollbarStyles)}));const ContactLists=()=>{const classes=ContactLists_useStyles();const history=(0,react_router.useHistory)();const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];const _useState3=(0,react.useState)(1),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),pageNumber=_useState4[0],setPageNumber=_useState4[1];const _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),hasMore=_useState6[0],setHasMore=_useState6[1];const _useState7=(0,react.useState)(null),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),selectedContactList=_useState8[0],setSelectedContactList=_useState8[1];const _useState9=(0,react.useState)(null),_useState0=(0,slicedToArray/* default */.A)(_useState9,2),deletingContactList=_useState0[0],setDeletingContactList=_useState0[1];const _useState1=(0,react.useState)(false),_useState10=(0,slicedToArray/* default */.A)(_useState1,2),contactListModalOpen=_useState10[0],setContactListModalOpen=_useState10[1];const _useState11=(0,react.useState)(false),_useState12=(0,slicedToArray/* default */.A)(_useState11,2),confirmModalOpen=_useState12[0],setConfirmModalOpen=_useState12[1];const _useState13=(0,react.useState)(""),_useState14=(0,slicedToArray/* default */.A)(_useState13,2),searchParam=_useState14[0],setSearchParam=_useState14[1];const _useReducer=(0,react.useReducer)(reducer,[]),_useReducer2=(0,slicedToArray/* default */.A)(_useReducer,2),contactLists=_useReducer2[0],dispatch=_useReducer2[1];//   const socketManager = useContext(SocketContext);
const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user,socket=_useContext.socket;(0,react.useEffect)(()=>{dispatch({type:"RESET"});setPageNumber(1);},[searchParam]);(0,react.useEffect)(()=>{setLoading(true);const delayDebounceFn=setTimeout(()=>{const fetchContactLists=async()=>{try{const _await$api$get=await api/* default */.Ay.get("/contact-lists/",{params:{searchParam,pageNumber}}),data=_await$api$get.data;dispatch({type:"LOAD_CONTACTLISTS",payload:data.records});setHasMore(data.hasMore);setLoading(false);}catch(err){(0,toastError/* default */.A)(err);}};fetchContactLists();},500);return()=>clearTimeout(delayDebounceFn);},[searchParam,pageNumber]);(0,react.useEffect)(()=>{const companyId=user.companyId;// const socket = socketManager.GetSocket();
const onContactListEvent=data=>{if(data.action==="update"||data.action==="create"){dispatch({type:"UPDATE_CONTACTLIST",payload:data.record});}if(data.action==="delete"){dispatch({type:"DELETE_CONTACTLIST",payload:+data.id});}};socket.on("company-".concat(companyId,"-ContactList"),onContactListEvent);return()=>{socket.off("company-".concat(companyId,"-ContactList"),onContactListEvent);};},[]);const handleOpenContactListModal=()=>{setSelectedContactList(null);setContactListModalOpen(true);};const handleCloseContactListModal=()=>{setSelectedContactList(null);setContactListModalOpen(false);};const handleSearch=event=>{setSearchParam(event.target.value.toLowerCase());};const handleEditContactList=contactList=>{setSelectedContactList(contactList);setContactListModalOpen(true);};const handleDeleteContactList=async contactListId=>{try{await api/* default */.Ay.delete("/contact-lists/".concat(contactListId));react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("contactLists.toasts.deleted"));}catch(err){(0,toastError/* default */.A)(err);}setDeletingContactList(null);setSearchParam("");setPageNumber(1);};const loadMore=()=>{setPageNumber(prevState=>prevState+1);};const handleScroll=e=>{if(!hasMore||loading)return;const _e$currentTarget=e.currentTarget,scrollTop=_e$currentTarget.scrollTop,scrollHeight=_e$currentTarget.scrollHeight,clientHeight=_e$currentTarget.clientHeight;if(scrollHeight-(scrollTop+100)<clientHeight){loadMore();}};const goToContacts=id=>{history.push("/contact-lists/".concat(id,"/contacts"));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.A,{title:deletingContactList&&"".concat(i18n/* i18n */.R.t("contactLists.confirmationModal.deleteTitle")," ").concat(deletingContactList.name,"?"),open:confirmModalOpen,onClose:setConfirmModalOpen,onConfirm:()=>handleDeleteContactList(deletingContactList.id),children:i18n/* i18n */.R.t("contactLists.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,jsx_runtime.jsx)(ContactListDialog,{open:contactListModalOpen,onClose:handleCloseContactListModal,"aria-labelledby":"form-dialog-title",contactListId:selectedContactList&&selectedContactList.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(MainHeader/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{style:{width:"99.6%"},container:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,sm:8,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A,{children:i18n/* i18n */.R.t("contactLists.title")})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,sm:4,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{spacing:2,container:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:7,sm:6,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A,{fullWidth:true,placeholder:i18n/* i18n */.R.t("contacts.searchPlaceholder"),type:"search",value:searchParam,onChange:handleSearch,InputProps:{startAdornment:/*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornment/* default */.A,{position:"start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Search/* default */.A,{style:{color:"gray"}})})}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:5,sm:6,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{fullWidth:true,variant:"contained",color:"primary",onClick:handleOpenContactListModal,children:i18n/* i18n */.R.t("contactLists.buttons.add")})})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaper,variant:"outlined",onScroll:handleScroll,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{size:"small",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("contactLists.table.name")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("contactLists.table.contacts")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("contactLists.table.actions")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[contactLists.map(contactList=>/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:contactList.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:contactList.contactsCount||0}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TableCell/* default */.A,{align:"center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("a",{href:planilha,download:"planilha.xlsx",children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",title:i18n/* i18n */.R.t("contactLists.buttons.downloadSample"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(GetApp/* default */.A,{})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>goToContacts(contactList.id),children:/*#__PURE__*/(0,jsx_runtime.jsx)(People/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>handleEditContactList(contactList),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Edit/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:e=>{setConfirmModalOpen(true);setDeletingContactList(contactList);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutline/* default */.A,{})})]})]},contactList.id)),loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableRowSkeleton/* default */.A,{columns:3})]})})]})})]});};/* harmony default export */ const pages_ContactLists = (ContactLists);

/***/ },

/***/ 99232
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(24994);
var _interopRequireWildcard = __webpack_require__(6305);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(59846));
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/React.createElement("path", {
  d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
}), 'GetApp');
exports.A = _default;

/***/ },

/***/ 75932
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(24994);
var _interopRequireWildcard = __webpack_require__(6305);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(65043));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(59846));
var _default = (0, _createSvgIcon.default)(/*#__PURE__*/React.createElement("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
}), 'People');
exports.A = _default;

/***/ },

/***/ 48484
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/planilha.1579c669dcff23936cbd.xlsx";

/***/ }

}]);