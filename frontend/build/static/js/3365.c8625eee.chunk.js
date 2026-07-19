"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[3365],{

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

/***/ 53365
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Annoucements)
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
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AttachFile.js
var AttachFile = __webpack_require__(7740);
// EXTERNAL MODULE: ./node_modules/lodash/lodash.js
var lodash = __webpack_require__(53536);
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControl.js
var FormControl = __webpack_require__(67467);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(23819);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Select/Select.js + 4 modules
var Select = __webpack_require__(59548);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js
var MenuItem = __webpack_require__(55357);
// EXTERNAL MODULE: ./src/components/ConfirmationModal/index.js
var ConfirmationModal = __webpack_require__(10168);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/components/AnnouncementModal/index.js
const useStyles=(0,makeStyles/* default */.A)(theme=>({root:{display:"flex",flexWrap:"wrap"},multFieldLine:{display:"flex","& > *:not(:last-child)":{marginRight:theme.spacing(1)}},btnWrapper:{position:"relative"},buttonProgress:{color:green/* default */.A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:theme.spacing(1),minWidth:120},colorAdorment:{width:20,height:20}}));const AnnouncementSchema=es/* object */.Ik().shape({title:es/* string */.Yj().required(i18n/* i18n */.R.t("validation.required")),text:es/* string */.Yj().required(i18n/* i18n */.R.t("validation.required"))});const AnnouncementModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,announcementId=_ref.announcementId,reload=_ref.reload;const classes=useStyles();const initialState={title:"",text:"",priority:3,status:true};const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),confirmationOpen=_useState2[0],setConfirmationOpen=_useState2[1];const _useState3=(0,react.useState)(initialState),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),announcement=_useState4[0],setAnnouncement=_useState4[1];const _useState5=(0,react.useState)(null),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),attachment=_useState6[0],setAttachment=_useState6[1];const attachmentFile=(0,react.useRef)(null);(0,react.useEffect)(()=>{try{(async()=>{if(!announcementId)return;const _await$api$get=await api/* default */.Ay.get("/announcements/".concat(announcementId)),data=_await$api$get.data;setAnnouncement(prevState=>{return (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prevState),data);});})();}catch(err){(0,toastError/* default */.A)(err);}},[announcementId,open]);const handleClose=()=>{setAnnouncement(initialState);setAttachment(null);onClose();};const handleAttachmentFile=e=>{const file=(0,lodash.head)(e.target.files);if(file){setAttachment(file);}};const handleSaveAnnouncement=async values=>{const announcementData=(0,objectSpread2/* default */.A)({},values);try{if(announcementId){await api/* default */.Ay.put("/announcements/".concat(announcementId),announcementData);if(attachment!=null){const formData=new FormData();formData.append("typeArch","announcements");formData.append("file",attachment);await api/* default */.Ay.post("/announcements/".concat(announcementId,"/media-upload"),formData);}}else{const _await$api$post=await api/* default */.Ay.post("/announcements",announcementData),data=_await$api$post.data;if(attachment!=null){const formData=new FormData();formData.append("typeArch","announcements");formData.append("file",attachment);await api/* default */.Ay.post("/announcements/".concat(data.id,"/media-upload"),formData);}}react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("announcements.toasts.success"));if(typeof reload=="function"){reload();}}catch(err){(0,toastError/* default */.A)(err);}handleClose();};const deleteMedia=async()=>{if(attachment){setAttachment(null);attachmentFile.current.value=null;}if(announcement.mediaPath){await api/* default */.Ay.delete("/announcements/".concat(announcement.id,"/media-upload"));setAnnouncement(prev=>(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({},prev),{},{mediaPath:null}));react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("announcements.toasts.deleted"));if(typeof reload=="function"){reload();}}};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.root,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.A,{title:i18n/* i18n */.R.t("announcements.confirmationModal.deleteTitle"),open:confirmationOpen,onClose:()=>setConfirmationOpen(false),onConfirm:deleteMedia,children:i18n/* i18n */.R.t("announcements.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Dialog/* default */.A,{open:open,onClose:handleClose,maxWidth:"xs",fullWidth:true,scroll:"paper",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DialogTitle/* default */.A,{id:"form-dialog-title",children:announcementId?"".concat(i18n/* i18n */.R.t("announcements.dialog.edit")):"".concat(i18n/* i18n */.R.t("announcements.dialog.add"))}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{style:{display:"none"},children:/*#__PURE__*/(0,jsx_runtime.jsx)("input",{type:"file",accept:".png,.jpg,.jpeg",ref:attachmentFile,onChange:e=>handleAttachmentFile(e)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Formik */.l1,{initialValues:announcement,enableReinitialize:true,validationSchema:AnnouncementSchema,onSubmit:(values,actions)=>{setTimeout(()=>{handleSaveAnnouncement(values);actions.setSubmitting(false);},400);},children:_ref2=>{let touched=_ref2.touched,errors=_ref2.errors,isSubmitting=_ref2.isSubmitting,values=_ref2.values;return/*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Form */.lV,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(DialogContent/* default */.A,{dividers:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{spacing:2,container:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("announcements.dialog.form.title"),name:"title",error:touched.title&&Boolean(errors.title),helperText:touched.title&&errors.title,variant:"outlined",margin:"dense",fullWidth:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(formik_esm/* Field */.D0,{as:TextField/* default */.A,label:i18n/* i18n */.R.t("announcements.dialog.form.text"),name:"text",error:touched.text&&Boolean(errors.text),helperText:touched.text&&errors.text,variant:"outlined",margin:"dense",multiline:true,minRows:7,fullWidth:true})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A,{variant:"outlined",margin:"dense",fullWidth:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A,{id:"status-selection-label",children:i18n/* i18n */.R.t("announcements.dialog.form.status")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Field */.D0,{as:Select/* default */.A,label:i18n/* i18n */.R.t("announcements.dialog.form.status"),placeholder:i18n/* i18n */.R.t("announcements.dialog.form.status"),labelId:"status-selection-label",id:"status",name:"status",error:touched.status&&Boolean(errors.status),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:true,children:i18n/* i18n */.R.t("announcements.dialog.form.active")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:false,children:i18n/* i18n */.R.t("announcements.dialog.form.inactive")})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(FormControl/* default */.A,{variant:"outlined",margin:"dense",fullWidth:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel/* default */.A,{id:"priority-selection-label",children:i18n/* i18n */.R.t("announcements.dialog.form.priority")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(formik_esm/* Field */.D0,{as:Select/* default */.A,label:i18n/* i18n */.R.t("announcements.dialog.form.priority"),placeholder:i18n/* i18n */.R.t("announcements.dialog.form.priority"),labelId:"priority-selection-label",id:"priority",name:"priority",error:touched.priority&&Boolean(errors.priority),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:1,children:i18n/* i18n */.R.t("announcements.dialog.form.high")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:2,children:i18n/* i18n */.R.t("announcements.dialog.form.medium")}),/*#__PURE__*/(0,jsx_runtime.jsx)(MenuItem/* default */.A,{value:3,children:i18n/* i18n */.R.t("announcements.dialog.form.low")})]})]})}),(announcement.mediaPath||attachment)&&/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{xs:12,item:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{startIcon:/*#__PURE__*/(0,jsx_runtime.jsx)(AttachFile/* default */.A,{}),children:attachment?attachment.name:announcement.mediaName}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{onClick:()=>setConfirmationOpen(true),color:"secondary",children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutline/* default */.A,{})})]})]})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(DialogActions/* default */.A,{children:[!attachment&&!announcement.mediaPath&&/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{color:"primary",onClick:()=>attachmentFile.current.click(),disabled:isSubmitting,variant:"outlined",children:i18n/* i18n */.R.t("announcements.dialog.buttons.attach")}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{onClick:handleClose,color:"secondary",disabled:isSubmitting,variant:"outlined",children:i18n/* i18n */.R.t("announcements.dialog.buttons.cancel")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.A,{type:"submit",color:"primary",disabled:isSubmitting,variant:"contained",className:classes.btnWrapper,children:[announcementId?"".concat(i18n/* i18n */.R.t("announcements.dialog.buttons.edit")):"".concat(i18n/* i18n */.R.t("announcements.dialog.buttons.add")),isSubmitting&&/*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.A,{size:24,className:classes.buttonProgress})]})]})]});}})]})]});};/* harmony default export */ const components_AnnouncementModal = (AnnouncementModal);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
;// ./src/pages/Annoucements/index.js
// import { SocketContext } from "../../context/Socket/SocketContext";
const reducer=(state,action)=>{if(action.type==="LOAD_ANNOUNCEMENTS"){const announcements=action.payload;const newAnnouncements=[];if((0,lodash.isArray)(announcements)){announcements.forEach(announcement=>{const announcementIndex=state.findIndex(u=>u.id===announcement.id);if(announcementIndex!==-1){state[announcementIndex]=announcement;}else{newAnnouncements.push(announcement);}});}return[...state,...newAnnouncements];}if(action.type==="UPDATE_ANNOUNCEMENTS"){const announcement=action.payload;const announcementIndex=state.findIndex(u=>u.id===announcement.id);if(announcementIndex!==-1){state[announcementIndex]=announcement;return[...state];}else{return[announcement,...state];}}if(action.type==="DELETE_ANNOUNCEMENT"){const announcementId=action.payload;const announcementIndex=state.findIndex(u=>u.id===announcementId);if(announcementIndex!==-1){state.splice(announcementIndex,1);}return[...state];}if(action.type==="RESET"){return[];}};const Annoucements_useStyles=(0,makeStyles/* default */.A)(theme=>({mainPaper:(0,objectSpread2/* default */.A)({flex:1,// padding: theme.spacing(1),
padding:theme.padding,overflowY:"scroll"},theme.scrollbarStyles)}));const Announcements=()=>{const classes=Annoucements_useStyles();const history=(0,react_router.useHistory)();//   const socketManager = useContext(SocketContext);
const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user,socket=_useContext.socket;const _useState=(0,react.useState)(false),_useState2=(0,slicedToArray/* default */.A)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];const _useState3=(0,react.useState)(1),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),pageNumber=_useState4[0],setPageNumber=_useState4[1];const _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),hasMore=_useState6[0],setHasMore=_useState6[1];const _useState7=(0,react.useState)(null),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),selectedAnnouncement=_useState8[0],setSelectedAnnouncement=_useState8[1];const _useState9=(0,react.useState)(null),_useState0=(0,slicedToArray/* default */.A)(_useState9,2),deletingAnnouncement=_useState0[0],setDeletingAnnouncement=_useState0[1];const _useState1=(0,react.useState)(false),_useState10=(0,slicedToArray/* default */.A)(_useState1,2),announcementModalOpen=_useState10[0],setAnnouncementModalOpen=_useState10[1];const _useState11=(0,react.useState)(false),_useState12=(0,slicedToArray/* default */.A)(_useState11,2),confirmModalOpen=_useState12[0],setConfirmModalOpen=_useState12[1];const _useState13=(0,react.useState)(""),_useState14=(0,slicedToArray/* default */.A)(_useState13,2),searchParam=_useState14[0],setSearchParam=_useState14[1];const _useReducer=(0,react.useReducer)(reducer,[]),_useReducer2=(0,slicedToArray/* default */.A)(_useReducer,2),announcements=_useReducer2[0],dispatch=_useReducer2[1];// trava para nao acessar pagina que não pode  
(0,react.useEffect)(()=>{async function fetchData(){if(!user.super){react_toastify_esm/* toast */.oR.error(i18n/* i18n */.R.t("announcements.toasts.noPermission"));setTimeout(()=>{history.push("/");},1000);}}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,react.useEffect)(()=>{dispatch({type:"RESET"});setPageNumber(1);},[searchParam]);(0,react.useEffect)(()=>{setLoading(true);const delayDebounceFn=setTimeout(()=>{fetchAnnouncements();},500);return()=>clearTimeout(delayDebounceFn);// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchParam,pageNumber]);(0,react.useEffect)(()=>{if(user.companyId){//    const socket = socketManager.GetSocket();
const onCompanyAnnouncement=data=>{if(data.action==="update"||data.action==="create"){dispatch({type:"UPDATE_ANNOUNCEMENTS",payload:data.record});}if(data.action==="delete"){dispatch({type:"DELETE_ANNOUNCEMENT",payload:+data.id});}};socket.on("company-announcement",onCompanyAnnouncement);return()=>{socket.off("company-announcement",onCompanyAnnouncement);};}},[user]);const fetchAnnouncements=async()=>{try{const _await$api$get=await api/* default */.Ay.get("/announcements/",{params:{searchParam,pageNumber}}),data=_await$api$get.data;dispatch({type:"LOAD_ANNOUNCEMENTS",payload:data.records});setHasMore(data.hasMore);setLoading(false);}catch(err){(0,toastError/* default */.A)(err);}};const handleOpenAnnouncementModal=()=>{setSelectedAnnouncement(null);setAnnouncementModalOpen(true);};const handleCloseAnnouncementModal=()=>{setSelectedAnnouncement(null);setAnnouncementModalOpen(false);};const handleSearch=event=>{setSearchParam(event.target.value.toLowerCase());};const handleEditAnnouncement=announcement=>{setSelectedAnnouncement(announcement);setAnnouncementModalOpen(true);};const handleDeleteAnnouncement=async announcement=>{try{if(announcement.mediaName)await api/* default */.Ay.delete("/announcements/".concat(announcement.id,"/media-upload"));await api/* default */.Ay.delete("/announcements/".concat(announcement.id));react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("announcements.toasts.deleted"));}catch(err){(0,toastError/* default */.A)(err);}setDeletingAnnouncement(null);setSearchParam("");setPageNumber(1);};const loadMore=()=>{setPageNumber(prevState=>prevState+1);};const handleScroll=e=>{if(!hasMore||loading)return;const _e$currentTarget=e.currentTarget,scrollTop=_e$currentTarget.scrollTop,scrollHeight=_e$currentTarget.scrollHeight,clientHeight=_e$currentTarget.clientHeight;if(scrollHeight-(scrollTop+100)<clientHeight){loadMore();}};const translatePriority=val=>{if(val===1){return i18n/* i18n */.R.t("announcements.dialog.form.high");}if(val===2){return i18n/* i18n */.R.t("announcements.dialog.form.medium");}if(val===3){return i18n/* i18n */.R.t("announcements.dialog.form.low");}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.A,{title:deletingAnnouncement&&"".concat(i18n/* i18n */.R.t("announcements.confirmationModal.deleteTitle")," ").concat(deletingAnnouncement.name,"?"),open:confirmModalOpen,onClose:setConfirmModalOpen,onConfirm:()=>handleDeleteAnnouncement(deletingAnnouncement),children:i18n/* i18n */.R.t("announcements.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_AnnouncementModal,{resetPagination:()=>{setPageNumber(1);fetchAnnouncements();},open:announcementModalOpen,onClose:handleCloseAnnouncementModal,"aria-labelledby":"form-dialog-title",announcementId:selectedAnnouncement&&selectedAnnouncement.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(MainHeader/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{style:{width:"99.6%"},container:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,sm:8,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Title/* default */.A,{children:[i18n/* i18n */.R.t("announcements.title")," (",announcements.length,")"]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,sm:4,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{spacing:2,container:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:6,sm:6,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A,{fullWidth:true,placeholder:i18n/* i18n */.R.t("announcements.searchPlaceholder"),type:"search",value:searchParam,onChange:handleSearch,InputProps:{startAdornment:/*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornment/* default */.A,{position:"start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Search/* default */.A,{style:{color:"gray"}})})}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:6,sm:6,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{fullWidth:true,variant:"contained",onClick:handleOpenAnnouncementModal,color:"primary",children:i18n/* i18n */.R.t("announcements.buttons.add")})})]})})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaper,variant:"outlined",onScroll:handleScroll,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{size:"small",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("announcements.table.title")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("announcements.table.priority")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("announcements.table.mediaName")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("announcements.table.status")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("announcements.table.actions")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[announcements.map(announcement=>{var _announcement$mediaNa;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:announcement.title}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:translatePriority(announcement.priority)}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:(_announcement$mediaNa=announcement.mediaName)!==null&&_announcement$mediaNa!==void 0?_announcement$mediaNa:i18n/* i18n */.R.t("quickMessages.noAttachment")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:announcement.status?i18n/* i18n */.R.t("announcements.active"):i18n/* i18n */.R.t("announcements.inactive")}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TableCell/* default */.A,{align:"center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>handleEditAnnouncement(announcement),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Edit/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:e=>{setConfirmModalOpen(true);setDeletingAnnouncement(announcement);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutline/* default */.A,{})})]})]},announcement.id);}),loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableRowSkeleton/* default */.A,{columns:5})]})})]})})]});};/* harmony default export */ const Annoucements = (Announcements);

/***/ }

}]);