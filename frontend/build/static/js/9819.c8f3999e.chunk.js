"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[9819],{

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

/***/ 49115
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73033);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93201);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43550);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93250);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35801);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(52907);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43867);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(85883);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58425);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28484);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(16295);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(57044);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(94505);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(82455);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(50298);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(99229);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(17339);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(67467);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(23819);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(59548);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(55357);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(18073);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)(theme=>({root:{display:"flex",flexWrap:"wrap"},multFieldLine:{display:"flex","& > *:not(:last-child)":{marginRight:theme.spacing(1)}},btnWrapper:{position:"relative"},buttonProgress:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},formControl:{margin:theme.spacing(1),minWidth:120},colorAdorment:{width:20,height:20}}));const TagSchema=yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik().shape({name:yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().min(3,_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.validation.tooShort")).required(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.validation.required"))});const TagModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,tagId=_ref.tagId,kanban=_ref.kanban,onSaveSuccess=_ref.onSaveSuccess;const classes=useStyles();const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_20__/* .AuthContext */ .c),user=_useContext.user;const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),colorPickerModalOpen=_useState2[0],setColorPickerModalOpen=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3,2),lanes=_useState4[0],setLanes=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState5,2),loading=_useState6[0],setLoading=_useState6[1];const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState7,2),selectedLane=_useState8[0],setSelectedLane=_useState8[1];const _useState9=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState0=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState9,2),selectedRollbackLane=_useState0[0],setSelectedRollbackLane=_useState0[1];const _useState1=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState10=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState1,2),timeDays=_useState10[0],setTimeDays=_useState10[1];const _useState11=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState12=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState11,2),timeHours=_useState12[0],setTimeHours=_useState12[1];const _useState13=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState14=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState13,2),timeMinutes=_useState14[0],setTimeMinutes=_useState14[1];const _useState15=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState16=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState15,2),timeSeconds=_useState16[0],setTimeSeconds=_useState16[1];const initialState={name:"",color:getRandomHexColor(),kanban:kanban,timeLane:0,nextLaneId:0,greetingMessageLane:"",rollbackLaneId:0};const _useState17=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),_useState18=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState17,2),tag=_useState18[0],setTag=_useState18[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{setLoading(true);const delayDebounceFn=setTimeout(()=>{const fetchTags=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay.get("/tags/",{params:{kanban:1,tagId}}),data=_await$api$get.data;setLanes(data.tags);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(err);}};fetchTags();},500);return()=>clearTimeout(delayDebounceFn);},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{try{(async()=>{if(!tagId)return;const _await$api$get2=await _services_api__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay.get("/tags/".concat(tagId)),data=_await$api$get2.data;setTag(prevState=>{return (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prevState),data);});if(data.nextLaneId){setSelectedLane(data.nextLaneId);}if(data.rollbackLaneId){setSelectedRollbackLane(data.rollbackLaneId);}// Decompor timeLane em dias, horas, minutos e segundos
if(data.timeLane){const decomposed=decomposeHours(data.timeLane);setTimeDays(decomposed.days);setTimeHours(decomposed.hours);setTimeMinutes(decomposed.minutes);setTimeSeconds(decomposed.seconds);}})();}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(err);}},[tagId,open]);const handleClose=()=>{setTag(initialState);setColorPickerModalOpen(false);setTimeDays(0);setTimeHours(0);setTimeMinutes(0);setTimeSeconds(0);onClose();};const handleSaveTag=async values=>{// Calcular o timeLane total a partir dos valores de dias, horas, minutos e segundos
const totalTimeLane=calculateTotalHours(timeDays,timeHours,timeMinutes,timeSeconds);const tagData=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},values),{},{userId:user===null||user===void 0?void 0:user.id,kanban:kanban,nextLaneId:selectedLane||null,rollbackLaneId:selectedRollbackLane||null,timeLane:totalTimeLane});try{if(tagId){await _services_api__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay.put("/tags/".concat(tagId),tagData);}else{await _services_api__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay.post("/tags",tagData);}react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(kanban===0?"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.success")):"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.successKanban")));// Chama callback para atualizar a lista
if(onSaveSuccess){setTimeout(()=>{onSaveSuccess();},500);}}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(err);}handleClose();};function getRandomHexColor(){// Gerar valores aleatórios para os componentes de cor
const red=Math.floor(Math.random()*256);// Valor entre 0 e 255
const green=Math.floor(Math.random()*256);// Valor entre 0 e 255
const blue=Math.floor(Math.random()*256);// Valor entre 0 e 255
// Converter os componentes de cor em uma cor hexadecimal
const hexColor="#".concat(red.toString(16).padStart(2,'0')).concat(green.toString(16).padStart(2,'0')).concat(blue.toString(16).padStart(2,'0'));return hexColor;}// Calcular o total de horas a partir de dias, horas, minutos e segundos
const calculateTotalHours=(days,hours,minutes,seconds)=>{const totalHours=(parseInt(days)||0)*24+(parseInt(hours)||0)+(parseInt(minutes)||0)/60+(parseInt(seconds)||0)/3600;return totalHours;};// Decompor horas totais em dias, horas, minutos e segundos
const decomposeHours=totalHours=>{const hours=parseFloat(totalHours)||0;const days=Math.floor(hours/24);const remainingHours=Math.floor(hours%24);const fractionalHour=hours%1;const totalMinutes=fractionalHour*60;const minutes=Math.floor(totalMinutes);const seconds=Math.round(totalMinutes%1*60);return{days,hours:remainingHours,minutes,seconds};};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)("div",{className:classes.root,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{open:open,onClose:handleClose,maxWidth:"md",fullWidth:true,scroll:"paper",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{id:"form-dialog-title",children:tagId?kanban===0?"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.title.edit")):"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.title.editKanban")):kanban===0?"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.title.add")):"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.title.addKanban"))}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Formik */ .l1,{initialValues:tag,enableReinitialize:true,validationSchema:TagSchema,onSubmit:(values,actions)=>{setTimeout(()=>{handleSaveTag(values);actions.setSubmitting(false);},400);},children:_ref2=>{let touched=_ref2.touched,errors=_ref2.errors,isSubmitting=_ref2.isSubmitting,values=_ref2.values;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .lV,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{dividers:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{container:true,spacing:1,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.name"),name:"name",error:touched.name&&Boolean(errors.name),helperText:touched.name&&errors.name,variant:"outlined",margin:"dense",onChange:e=>setTag(prev=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prev),{},{name:e.target.value})),fullWidth:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,fullWidth:true,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.color"),name:"color",autoFocus:true,id:"color",error:touched.color&&Boolean(errors.color),helperText:touched.color&&errors.color,InputProps:{startAdornment:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,{position:"start",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)("div",{style:{backgroundColor:values.color},className:classes.colorAdorment})}),endAdornment:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{size:"small",color:"default",onClick:()=>setColorPickerModalOpen(!colorPickerModalOpen),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{})})},variant:"outlined",margin:"dense"}),colorPickerModalOpen&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)("div",{style:{position:'absolute',zIndex:2},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)("div",{style:{position:'fixed',top:0,right:0,bottom:0,left:0},onClick:()=>setColorPickerModalOpen(false)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(react_color__WEBPACK_IMPORTED_MODULE_16__/* .ChromePicker */ .xk,{disableAlpha:true,color:tag.color,onChange:val=>{setTag(prev=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prev),{},{color:val.hex}));}})]})]}),kanban===1&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{label:"Dias",type:"number",value:timeDays,variant:"outlined",margin:"dense",onChange:e=>setTimeDays(e.target.value),fullWidth:true,inputProps:{min:0}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{label:"Horas",type:"number",value:timeHours,variant:"outlined",margin:"dense",onChange:e=>setTimeHours(e.target.value),fullWidth:true,inputProps:{min:0,max:23}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{label:"Minutos",type:"number",value:timeMinutes,variant:"outlined",margin:"dense",onChange:e=>setTimeMinutes(e.target.value),fullWidth:true,inputProps:{min:0,max:59}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:3,xl:3,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{label:"Segundos",type:"number",value:timeSeconds,variant:"outlined",margin:"dense",onChange:e=>setTimeSeconds(e.target.value),fullWidth:true,inputProps:{min:0,max:59}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{id:"whatsapp-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.nextLaneId")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.nextLaneId"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.nextLaneId"),labelId:"whatsapp-selection-label",id:"nextLaneId",name:"nextLaneId",style:{left:"-7px"},error:touched.nextLaneId&&Boolean(errors.nextLaneId),value:selectedLane,onChange:e=>setSelectedLane(e.target.value||null),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,{value:null,children:"\xA0"}),lanes&&lanes.map(lane=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,{value:lane.id,children:lane.name},lane.id))]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.greetingMessageLane"),name:"greetingMessageLane",minRows:5,multiline:true,error:touched.greetingMessageLane&&Boolean(errors.greetingMessageLane),helperText:touched.greetingMessageLane&&errors.greetingMessageLane,variant:"outlined",margin:"dense",onChange:e=>setTag(prev=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prev),{},{greetingMessageLane:e.target.value})),fullWidth:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{item:true,xs:12,md:12,xl:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{id:"whatsapp-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.rollbackLaneId")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.rollbackLaneId"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.form.rollbackLaneId"),labelId:"whatsapp-selection-label",id:"rollbackLaneId",name:"rollbackLaneId",style:{left:"-7px"},error:touched.rollbackLaneId&&Boolean(errors.rollbackLaneId),value:selectedRollbackLane,onChange:e=>setSelectedRollbackLane(e.target.value),children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,{value:null,children:"\xA0"}),lanes&&lanes.map(lane=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,{value:lane.id,children:lane.name},lane.id))]})]})})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{onClick:handleClose,color:"secondary",disabled:isSubmitting,variant:"outlined",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.buttons.cancel")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsxs)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{type:"submit",color:"primary",disabled:isSubmitting,variant:"contained",className:classes.btnWrapper,children:[tagId?"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.buttons.okEdit")):"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_17__/* .i18n */ .R.t("tagModal.buttons.okAdd")),isSubmitting&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{size:24,className:classes.buttonProgress})]})]})]});}})]})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagModal);
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

/***/ 59819
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Tags)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 1 modules
var react_toastify_esm = __webpack_require__(43550);
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
// EXTERNAL MODULE: ./src/components/MainHeaderButtonsWrapper/index.js
var MainHeaderButtonsWrapper = __webpack_require__(86586);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(45824);
// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(94505);
// EXTERNAL MODULE: ./src/translate/i18n.js + 3 modules
var i18n = __webpack_require__(57044);
// EXTERNAL MODULE: ./src/components/TableRowSkeleton/index.js
var TableRowSkeleton = __webpack_require__(13293);
// EXTERNAL MODULE: ./src/components/TagModal/index.js
var TagModal = __webpack_require__(49115);
// EXTERNAL MODULE: ./src/components/ConfirmationModal/index.js
var ConfirmationModal = __webpack_require__(10168);
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(19227);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__(91917);
;// ./node_modules/@material-ui/icons/esm/MoreHoriz.js


/* harmony default export */ const MoreHoriz = ((0,createSvgIcon/* default */.A)(/*#__PURE__*/react.createElement("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js + 3 modules
var Modal = __webpack_require__(50750);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js
var Backdrop = __webpack_require__(71233);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Fade/Fade.js
var Fade = __webpack_require__(28073);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(3359);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Delete.js
var Delete = __webpack_require__(77252);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(83903);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/components/ContactTagListModal/index.js
const useStyles=(0,makeStyles/* default */.A)(theme=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:theme.palette.background.paper,boxShadow:theme.shadows[5],padding:theme.spacing(2,4,3),borderRadius:"8px",overflow:"auto",maxHeight:"80vh"},closeButton:{position:"absolute",top:theme.spacing(1),right:theme.spacing(1)}}));const handleRemoveContactTag=async(contactId,tagId)=>{await api/* default */.Ay.delete("/tags-contacts/".concat(tagId,"/").concat(contactId));};const ContactTagListModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,tag=_ref.tag;const classes=useStyles();const _useState=(0,react.useState)(tag.contacts),_useState2=(0,slicedToArray/* default */.A)(_useState,2),tagList=_useState2[0],setTagList=_useState2[1];const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user,socket=_useContext.socket;(0,react.useEffect)(()=>{console.log("tagList",tagList);},[tagList]);(0,react.useEffect)(()=>{// const socket = socketManager.GetSocket(user.companyId, user.id);
const onCompanyTags=data=>{if(data.action==="update"||data.action==="create"){var _data$tag,_data$tag$contacts,_data$tag2,_data$tag2$contacts;if(data.tag.id===tag.id&&((_data$tag=data.tag)===null||_data$tag===void 0?void 0:(_data$tag$contacts=_data$tag.contacts)===null||_data$tag$contacts===void 0?void 0:_data$tag$contacts.length)>0){setTagList(data.tag.contacts);}if(data.tag.id===tag.id&&((_data$tag2=data.tag)===null||_data$tag2===void 0?void 0:(_data$tag2$contacts=_data$tag2.contacts)===null||_data$tag2$contacts===void 0?void 0:_data$tag2$contacts.length)===0){setTagList([]);onClose();}}};socket.on("company".concat(user.companyId,"-tag"),onCompanyTags);return()=>{socket.off("company".concat(user.companyId,"-tag"),onCompanyTags);};},[]);// Dependência do estado auxiliar updateFlag
return tagList.length>0?/*#__PURE__*/(0,jsx_runtime.jsx)(Modal/* default */.A,{className:classes.modal,open:open,onClose:onClose,closeAfterTransition:true,BackdropComponent:Backdrop/* default */.A,BackdropProps:{timeout:500},children:/*#__PURE__*/(0,jsx_runtime.jsx)(Fade/* default */.A,{in:open,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.paper,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{className:classes.closeButton,onClick:onClose,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Close/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("h2",{id:"transition-modal-title",children:[tag.name," - ",i18n/* i18n */.R.t("contactTagListModal.title")]}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableContainer/* default */.A,{component:Paper/* default */.A,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:i18n/* i18n */.R.t("contactTagListModal.table.id")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:i18n/* i18n */.R.t("contactTagListModal.table.name")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:i18n/* i18n */.R.t("contactTagListModal.table.number")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:i18n/* i18n */.R.t("contactTagListModal.table.actions")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:tagList===null||tagList===void 0?void 0:tagList.map(contact=>/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:contact.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:contact.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:contact.number}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{onClick:()=>handleRemoveContactTag(contact.id,tag.id),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Delete/* default */.A,{})})})]},contact.id))})]})})]})})}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});};/* harmony default export */ const components_ContactTagListModal = (ContactTagListModal);
;// ./src/pages/Tags/index.js
const reducer=(state,action)=>{switch(action.type){case"LOAD_TAGS":return[...state,...action.payload];case"UPDATE_TAGS":const tag=action.payload;const tagIndex=state.findIndex(s=>s.id===tag.id);if(tagIndex!==-1){state[tagIndex]=tag;return[...state];}else{return[tag,...state];}case"DELETE_TAGS":const tagId=action.payload;return state.filter(tag=>tag.id!==tagId);case"RESET":return[];default:return state;}};const Tags_useStyles=(0,makeStyles/* default */.A)(theme=>({mainPaper:(0,objectSpread2/* default */.A)({flex:1,padding:theme.spacing(1),overflowY:"scroll"},theme.scrollbarStyles)}));const Tags=()=>{const classes=Tags_useStyles();const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user,socket=_useContext.socket;const _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.A)(_useState,2),selectedTagContacts=_useState2[0],setSelectedTagContacts=_useState2[1];const _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),contactModalOpen=_useState4[0],setContactModalOpen=_useState4[1];const _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),loading=_useState6[0],setLoading=_useState6[1];const _useState7=(0,react.useState)(1),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),pageNumber=_useState8[0],setPageNumber=_useState8[1];const _useState9=(0,react.useState)(false),_useState0=(0,slicedToArray/* default */.A)(_useState9,2),hasMore=_useState0[0],setHasMore=_useState0[1];const _useState1=(0,react.useState)(""),_useState10=(0,slicedToArray/* default */.A)(_useState1,2),selectedTagName=_useState10[0],setSelectedTagName=_useState10[1];const _useState11=(0,react.useState)(null),_useState12=(0,slicedToArray/* default */.A)(_useState11,2),selectedTag=_useState12[0],setSelectedTag=_useState12[1];const _useState13=(0,react.useState)(null),_useState14=(0,slicedToArray/* default */.A)(_useState13,2),deletingTag=_useState14[0],setDeletingTag=_useState14[1];const _useState15=(0,react.useState)(false),_useState16=(0,slicedToArray/* default */.A)(_useState15,2),confirmModalOpen=_useState16[0],setConfirmModalOpen=_useState16[1];const _useState17=(0,react.useState)(""),_useState18=(0,slicedToArray/* default */.A)(_useState17,2),searchParam=_useState18[0],setSearchParam=_useState18[1];const _useReducer=(0,react.useReducer)(reducer,[]),_useReducer2=(0,slicedToArray/* default */.A)(_useReducer,2),tags=_useReducer2[0],dispatch=_useReducer2[1];const _useState19=(0,react.useState)(false),_useState20=(0,slicedToArray/* default */.A)(_useState19,2),tagModalOpen=_useState20[0],setTagModalOpen=_useState20[1];const pageNumberRef=(0,react.useRef)(1);(0,react.useEffect)(()=>{const fetchMoreTags=async()=>{try{const _await$api$get=await api/* default */.Ay.get("/tags/",{params:{searchParam,pageNumber,kanban:0}}),data=_await$api$get.data;dispatch({type:"LOAD_TAGS",payload:data.tags});setHasMore(data.hasMore);setLoading(false);}catch(err){(0,toastError/* default */.A)(err);}};if(pageNumber>0){setLoading(true);fetchMoreTags();}},[searchParam,pageNumber]);(0,react.useEffect)(()=>{const onCompanyTags=data=>{if(data.action==="update"||data.action==="create"){dispatch({type:"UPDATE_TAGS",payload:data.tag});}if(data.action==="delete"){dispatch({type:"DELETE_TAGS",payload:+data.tagId});}};socket.on("company".concat(user.companyId,"-tag"),onCompanyTags);return()=>{socket.off("company".concat(user.companyId,"-tag"),onCompanyTags);};},[socket,user.companyId]);const handleOpenTagModal=()=>{setSelectedTag(null);setTagModalOpen(true);};const handleCloseTagModal=()=>{setSelectedTag(null);setTagModalOpen(false);};const handleSearch=event=>{const newSearchParam=event.target.value.toLowerCase();setSearchParam(newSearchParam);setPageNumber(1);dispatch({type:"RESET"});};const handleEditTag=tag=>{setSelectedTag(tag);setTagModalOpen(true);};const handleShowContacts=(contacts,tag)=>{setSelectedTagContacts(contacts);setContactModalOpen(true);setSelectedTagName(tag);};const handleCloseContactModal=()=>{setContactModalOpen(false);setSelectedTagContacts([]);setSelectedTagName("");};const handleDeleteTag=async tagId=>{try{await api/* default */.Ay.delete("/tags/".concat(tagId));react_toastify_esm/* toast */.oR.success(i18n/* i18n */.R.t("tags.toasts.deleted"));}catch(err){(0,toastError/* default */.A)(err);}setDeletingTag(null);setSearchParam("");setPageNumber(1);};const loadMore=()=>{setPageNumber(prevPageNumber=>prevPageNumber+1);};const handleScroll=e=>{if(!hasMore||loading)return;const _e$currentTarget=e.currentTarget,scrollTop=_e$currentTarget.scrollTop,scrollHeight=_e$currentTarget.scrollHeight,clientHeight=_e$currentTarget.clientHeight;if(scrollHeight-(scrollTop+100)<clientHeight){loadMore();}};return/*#__PURE__*/(0,jsx_runtime.jsxs)(MainContainer/* default */.A,{className:classes.mainContainer,children:[contactModalOpen&&/*#__PURE__*/(0,jsx_runtime.jsx)(components_ContactTagListModal,{open:contactModalOpen,onClose:handleCloseContactModal,tag:selectedTagName}),/*#__PURE__*/(0,jsx_runtime.jsx)(ConfirmationModal/* default */.A,{title:deletingTag&&"".concat(i18n/* i18n */.R.t("tags.confirmationModal.deleteTitle")),open:confirmModalOpen,onClose:()=>setConfirmModalOpen(false),onConfirm:()=>handleDeleteTag(deletingTag.id),children:i18n/* i18n */.R.t("tags.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TagModal/* default */.A,{open:tagModalOpen,onClose:handleCloseTagModal,"aria-labelledby":"form-dialog-title",tagId:selectedTag&&selectedTag.id,kanban:0}),/*#__PURE__*/(0,jsx_runtime.jsxs)(MainHeader/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(Title/* default */.A,{children:[i18n/* i18n */.R.t("tags.title")," (",tags.length,")"]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(MainHeaderButtonsWrapper/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TextField/* default */.A,{placeholder:i18n/* i18n */.R.t("contacts.searchPlaceholder"),type:"search",value:searchParam,onChange:handleSearch,InputProps:{startAdornment:/*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornment/* default */.A,{position:"start",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Search/* default */.A,{style:{color:"gray"}})})}}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{variant:"contained",color:"primary",onClick:handleOpenTagModal,children:i18n/* i18n */.R.t("tags.buttons.add")})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaper,variant:"outlined",onScroll:handleScroll,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Table/* default */.A,{size:"small",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableHead/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("tags.table.id")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("tags.table.name")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("tags.table.contacts")}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:i18n/* i18n */.R.t("tags.table.actions")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableBody/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[tags.map(tag=>{var _tag$contacts,_tag$contacts2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(TableRow/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:tag.id}),/*#__PURE__*/(0,jsx_runtime.jsx)(TableCell/* default */.A,{align:"center",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Chip/* default */.A,{variant:"outlined",style:{backgroundColor:tag.color,textShadow:"1px 1px #000",color:"white"},label:tag.name,size:"small"})}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TableCell/* default */.A,{align:"center",children:[tag===null||tag===void 0?void 0:(_tag$contacts=tag.contacts)===null||_tag$contacts===void 0?void 0:_tag$contacts.length,/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>handleShowContacts(tag===null||tag===void 0?void 0:tag.contacts,tag),disabled:(tag===null||tag===void 0?void 0:(_tag$contacts2=tag.contacts)===null||_tag$contacts2===void 0?void 0:_tag$contacts2.length)===0,children:/*#__PURE__*/(0,jsx_runtime.jsx)(MoreHoriz,{})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)(TableCell/* default */.A,{align:"center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>handleEditTag(tag),children:/*#__PURE__*/(0,jsx_runtime.jsx)(Edit/* default */.A,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(IconButton/* default */.A,{size:"small",onClick:()=>{setConfirmModalOpen(true);setDeletingTag(tag);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteOutline/* default */.A,{})})]})]},tag.id);}),loading&&/*#__PURE__*/(0,jsx_runtime.jsx)(TableRowSkeleton/* default */.A,{columns:4},"skeleton")]})})]})})]});};/* harmony default export */ const pages_Tags = (Tags);

/***/ },

/***/ 3359
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
    width: '100%',
    overflowX: 'auto'
  }
};
var TableContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function TableContainer(props, ref) {
  var classes = props.classes,
    className = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, ["classes", "className", "component"]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, className)
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiTableContainer'
})(TableContainer));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 83903
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
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');
exports.A = _default;

/***/ },

/***/ 77252
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');
exports.A = _default;

/***/ }

}]);