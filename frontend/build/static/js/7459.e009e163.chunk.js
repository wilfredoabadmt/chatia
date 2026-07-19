"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[7459],{

/***/ 28493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89379);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73033);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93201);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43550);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53536);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93250);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17339);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35801);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52907);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43867);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85883);
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(58425);
/* harmony import */ var _material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7740);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72512);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57044);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(86178);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(94505);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(82455);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(18073);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(67467);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(23819);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(59548);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(55357);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(49868);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(52643);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(61531);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(50298);
/* harmony import */ var _ConfirmationModal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(10168);
/* harmony import */ var _UserModal_statusIcon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(33323);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(83169);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(29128);
/* harmony import */ var _hooks_useQueues__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(48471);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A)(theme=>({root:{display:"flex",flexWrap:"wrap"},textField:{marginRight:theme.spacing(1),flex:1},extraAttr:{display:"flex",justifyContent:"center",alignItems:"center"},btnWrapper:{position:"relative"},buttonProgress:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}));const CampaignSchema=yup__WEBPACK_IMPORTED_MODULE_3__/* .object */ .Ik().shape({name:yup__WEBPACK_IMPORTED_MODULE_3__/* .string */ .Yj().min(2,_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("validation.tooShort")).max(50,_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("validation.tooLong")).required(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("validation.required"))});const CampaignModal=_ref=>{let open=_ref.open,onClose=_ref.onClose,campaignId=_ref.campaignId,initialValues=_ref.initialValues,onSave=_ref.onSave,resetPagination=_ref.resetPagination,defaultWhatsappId=_ref.defaultWhatsappId;const classes=useStyles();const isMounted=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(true);const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_31__/* .AuthContext */ .c),user=_useContext.user,socket=_useContext.socket;const companyId=user.companyId;const initialState={name:"",message1:"",message2:"",message3:"",message4:"",message5:"",confirmationMessage1:"",confirmationMessage2:"",confirmationMessage3:"",confirmationMessage4:"",confirmationMessage5:"",status:"INATIVA",// INATIVA, PROGRAMADA, EM_ANDAMENTO, CANCELADA, FINALIZADA,
confirmation:false,scheduledAt:"",//whatsappId: "",
contactListId:"",tagListId:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.common.none"),companyId,statusTicket:"closed",openTicket:"disabled"};const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialState),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState,2),campaign=_useState2[0],setCampaign=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState3,2),whatsapps=_useState4[0],setWhatsapps=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState5,2),selectedWhatsapps=_useState6[0],setSelectedWhatsapps=_useState6[1];const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState7,2),whatsappId=_useState8[0],setWhatsappId=_useState8[1];(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(!campaignId&&defaultWhatsappId){setWhatsappId(defaultWhatsappId);}},[defaultWhatsappId,campaignId]);const _useState9=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState0=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState9,2),contactLists=_useState0[0],setContactLists=_useState0[1];const _useState1=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState10=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState1,2),tagLists=_useState10[0],setTagLists=_useState10[1];const _useState11=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),_useState12=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState11,2),messageTab=_useState12[0],setMessageTab=_useState12[1];const _useState13=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState14=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState13,2),attachment=_useState14[0],setAttachment=_useState14[1];const _useState15=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState16=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState15,2),confirmationOpen=_useState16[0],setConfirmationOpen=_useState16[1];const _useState17=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),_useState18=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState17,2),campaignEditable=_useState18[0],setCampaignEditable=_useState18[1];const attachmentFile=(0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);const _useState19=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState20=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState19,2),options=_useState20[0],setOptions=_useState20[1];const _useState21=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState22=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState21,2),queues=_useState22[0],setQueues=_useState22[1];const _useState23=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),_useState24=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState23,2),allQueues=_useState24[0],setAllQueues=_useState24[1];const _useState25=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState26=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState25,2),loading=_useState26[0],setLoading=_useState26[1];const _useState27=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState28=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState27,2),searchParam=_useState28[0],setSearchParam=_useState28[1];const _useState29=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState30=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState29,2),selectedUser=_useState30[0],setSelectedUser=_useState30[1];const _useState31=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState32=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_useState31,2),selectedQueue=_useState32[0],setSelectedQueue=_useState32[1];const _useQueues=(0,_hooks_useQueues__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .A)(),findAllQueues=_useQueues.findAll;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{return()=>{isMounted.current=false;};},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(isMounted.current){const loadQueues=async()=>{const list=await findAllQueues();setAllQueues(list);setQueues(list);};loadQueues();}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(searchParam.length<3){setLoading(false);setSelectedQueue("");return;}const delayDebounceFn=setTimeout(()=>{setLoading(true);const fetchUsers=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.get("/users/"),data=_await$api$get.data;setOptions(data.users);setLoading(false);}catch(err){setLoading(false);(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(err);}};fetchUsers();},500);return()=>clearTimeout(delayDebounceFn);},[searchParam]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{if(isMounted.current){if(initialValues){setCampaign(prevState=>{return (0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prevState),initialValues);});}_services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.get("/contact-lists/list",{params:{companyId}}).then(_ref2=>{let data=_ref2.data;return setContactLists(data);});_services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.get("/whatsapp",{params:{companyId,session:0}}).then(_ref3=>{let data=_ref3.data;// Mapear os dados recebidos da API para adicionar a propriedade 'selected'
const mappedWhatsapps=data.map(whatsapp=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},whatsapp),{},{selected:false}));setWhatsapps(mappedWhatsapps);});_services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.get("/tags/list",{params:{companyId,kanban:0}}).then(_ref4=>{let data=_ref4.data;const fetchedTags=data;// Perform any necessary data transformation here
const formattedTagLists=fetchedTags.filter(tag=>tag.contacts.length>0)// Filtra as tags com contacts.length > 0
.map(tag=>({id:tag.id,name:"".concat(tag.name," (").concat(tag.contacts.length,")")}));setTagLists(formattedTagLists);}).catch(error=>{console.error("Error retrieving tags:",error);});if(!campaignId)return;_services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.get("/campaigns/".concat(campaignId)).then(_ref5=>{let data=_ref5.data;if(data!==null&&data!==void 0&&data.user)setSelectedUser(data.user);if(data!==null&&data!==void 0&&data.queue)setSelectedQueue(data.queue.id);if(data!==null&&data!==void 0&&data.whatsappId){// const selectedWhatsapps = data.whatsappId.split(",");
setWhatsappId(data.whatsappId);}setCampaign(prev=>{let prevCampaignData=Object.assign({},prev);Object.entries(data).forEach(_ref6=>{let _ref7=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref6,2),key=_ref7[0],value=_ref7[1];if(key==="scheduledAt"&&value!==""&&value!==null){prevCampaignData[key]=moment__WEBPACK_IMPORTED_MODULE_20___default()(value).format("YYYY-MM-DDTHH:mm");}else{prevCampaignData[key]=value===null?"":value;}});return prevCampaignData;});});}},[campaignId,open,initialValues,companyId]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{const now=moment__WEBPACK_IMPORTED_MODULE_20___default()();const scheduledAt=moment__WEBPACK_IMPORTED_MODULE_20___default()(campaign.scheduledAt);const moreThenAnHour=!Number.isNaN(scheduledAt.diff(now))&&scheduledAt.diff(now,"hour")>1;const isEditable=campaign.status==="INATIVA"||campaign.status==="PROGRAMADA"&&moreThenAnHour;setCampaignEditable(isEditable);},[campaign.status,campaign.scheduledAt]);const handleClose=()=>{onClose();setCampaign(initialState);};const handleAttachmentFile=e=>{const file=(0,lodash__WEBPACK_IMPORTED_MODULE_6__.head)(e.target.files);if(file){setAttachment(file);}};const handleSaveCampaign=async values=>{try{const dataValues=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},values),{},{// Merge the existing values object
whatsappId:whatsappId,userId:(selectedUser===null||selectedUser===void 0?void 0:selectedUser.id)||null,queueId:selectedQueue||null});//console.log(values);
//console.log(selectedWhatsapps);
Object.entries(values).forEach(_ref8=>{let _ref9=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_ref8,2),key=_ref9[0],value=_ref9[1];if(key==="scheduledAt"&&value!==""&&value!==null){dataValues[key]=moment__WEBPACK_IMPORTED_MODULE_20___default()(value).format("YYYY-MM-DD HH:mm:ss");}else{dataValues[key]=value===""?null:value;}});if(campaignId){await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.put("/campaigns/".concat(campaignId),dataValues);if(attachment!=null){const formData=new FormData();formData.append("file",attachment);await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.post("/campaigns/".concat(campaignId,"/media-upload"),formData);}handleClose();}else{const _await$api$post=await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.post("/campaigns",dataValues),data=_await$api$post.data;if(attachment!=null){const formData=new FormData();formData.append("file",attachment);await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.post("/campaigns/".concat(data.id,"/media-upload"),formData);}if(onSave){onSave(data);}handleClose();}react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.toasts.success"));}catch(err){console.log(err);(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A)(err);}};const deleteMedia=async()=>{if(attachment){setAttachment(null);attachmentFile.current.value=null;}if(campaign.mediaPath){await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.delete("/campaigns/".concat(campaign.id,"/media-upload"));setCampaign(prev=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prev),{},{mediaPath:null,mediaName:null}));react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.toasts.deleted"));}};const renderMessageField=identifier=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,id:identifier,name:identifier,fullWidth:true,minRows:5,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.".concat(identifier)),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.messagePlaceholder"),multiline:true,variant:"outlined",helperText:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.modal.helpText"),disabled:!campaignEditable&&campaign.status!=="CANCELADA"});};const renderConfirmationMessageField=identifier=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,id:identifier,name:identifier,fullWidth:true,minRows:5,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.".concat(identifier)),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.messagePlaceholder"),multiline:true,variant:"outlined",disabled:!campaignEditable&&campaign.status!=="CANCELADA"});};const cancelCampaign=async()=>{try{await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.post("/campaigns/".concat(campaign.id,"/cancel"));react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.toasts.cancel"));setCampaign(prev=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prev),{},{status:"CANCELADA"}));resetPagination();}catch(err){react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.error(err.message);}};const restartCampaign=async()=>{try{await _services_api__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay.post("/campaigns/".concat(campaign.id,"/restart"));react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.toasts.restart"));setCampaign(prev=>(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},prev),{},{status:"EM_ANDAMENTO"}));resetPagination();}catch(err){react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .oR.error(err.message);}};const filterOptions=(0,_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_34__/* .createFilterOptions */ .Z)({trim:true});return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("div",{className:classes.root,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_ConfirmationModal__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A,{title:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.confirmationModal.deleteTitle"),open:confirmationOpen,onClose:()=>setConfirmationOpen(false),onConfirm:deleteMedia,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.confirmationModal.deleteMessage")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{open:open,onClose:handleClose,fullWidth:true,maxWidth:"md",scroll:"paper",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{id:"form-dialog-title",children:campaignEditable?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:campaignId?"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.update")):"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.new"))}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.readonly"))})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)("div",{style:{display:"none"},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)("input",{type:"file",ref:attachmentFile,onChange:e=>handleAttachmentFile(e)})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Formik */ .l1,{initialValues:campaign,enableReinitialize:true,validationSchema:CampaignSchema,onSubmit:(values,actions)=>{setTimeout(()=>{handleSaveCampaign(values);actions.setSubmitting(false);},400);},children:_ref0=>{let values=_ref0.values,errors=_ref0.errors,touched=_ref0.touched,isSubmitting=_ref0.isSubmitting;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Form */ .lV,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{dividers:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.name"),name:"name",error:touched.name&&Boolean(errors.name),helperText:touched.name&&errors.name,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField,disabled:!campaignEditable})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{id:"confirmation-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.confirmation")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.confirmation"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.confirmation"),labelId:"confirmation-selection-label",id:"confirmation",name:"confirmation",error:touched.confirmation&&Boolean(errors.confirmation),disabled:!campaignEditable,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:false,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.common.disabled")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:true,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.common.enabled")})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{id:"contactList-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.contactList")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.contactList"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.contactList"),labelId:"contactList-selection-label",id:"contactListId",name:"contactListId",error:touched.contactListId&&Boolean(errors.contactListId),disabled:!campaignEditable,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:"",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.common.none")}),contactLists&&contactLists.map(contactList=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:contactList.id,children:contactList.name},contactList.id))]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{id:"tagList-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.tagList")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.tagList"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.tagList"),labelId:"tagList-selection-label",id:"tagListId",name:"tagListId",error:touched.tagListId&&Boolean(errors.tagListId),disabled:!campaignEditable,children:Array.isArray(tagLists)&&tagLists.map(tagList=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:tagList.id,children:tagList.name},tagList.id))})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{id:"whatsapp-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.whatsapp")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A// multiple
,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.whatsapp"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.whatsapp"),labelId:"whatsapp-selection-label",id:"whatsappIds",name:"whatsappIds",required:true,error:touched.whatsappId&&Boolean(errors.whatsappId),disabled:!campaignEditable,value:whatsappId,onChange:event=>{console.log(event.target.value);setWhatsappId(event.target.value);}// renderValue={(selected) => (
//   <div>
//     {selected.map((value) => (
//       <Chip key={value} label={whatsapps.find((whatsapp) => whatsapp.id === value).name} />
//     ))}
//   </div>
// )}
,children:whatsapps&&whatsapps.map(whatsapp=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:whatsapp.id,children:whatsapp.name},whatsapp.id))})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.scheduledAt"),name:"scheduledAt",error:touched.scheduledAt&&Boolean(errors.scheduledAt),helperText:touched.scheduledAt&&errors.scheduledAt,variant:"outlined",margin:"dense",type:"datetime-local",InputLabelProps:{shrink:true},fullWidth:true,className:classes.textField,disabled:!campaignEditable})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{id:"openTicket-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.openTicket")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.openTicket"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.openTicket"),labelId:"openTicket-selection-label",id:"openTicket",name:"openTicket",error:touched.openTicket&&Boolean(errors.openTicket),disabled:!campaignEditable,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:"enabled",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.enabledOpenTicket")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:"disabled",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.disabledOpenTicket")})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .Ay,{style:{marginTop:'8px'},variant:"outlined",margin:"dense",className:classes.formControl,getOptionLabel:option=>"".concat(option.name),value:selectedUser,size:"small",onChange:(e,newValue)=>{setSelectedUser(newValue);if(newValue!=null&&Array.isArray(newValue.queues)){if(newValue.queues.length===1){setSelectedQueue(newValue.queues[0].id);}setQueues(newValue.queues);}else{setQueues(allQueues);setSelectedQueue("");}},options:options,filterOptions:filterOptions,freeSolo:true,fullWidth:true,autoHighlight:true,disabled:!campaignEditable||values.openTicket==='disabled',noOptionsText:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("transferTicketModal.noOptions"),loading:loading,renderOption:option=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)("span",{children:[" ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_UserModal_statusIcon__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A,{user:option})," ",option.name]}),renderInput:params=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},params),{},{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("transferTicketModal.fieldLabel"),variant:"outlined",onChange:e=>setSearchParam(e.target.value),InputProps:(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({},params.InputProps),{},{endAdornment:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[loading?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{color:"inherit",size:20}):null,params.InputProps.endAdornment]})})}))})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("transferTicketModal.fieldQueueLabel")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,{value:selectedQueue,onChange:e=>setSelectedQueue(e.target.value),label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("transferTicketModal.fieldQueuePlaceholder"),required:!(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isNil)(selectedUser),disabled:!campaignEditable||values.openTicket==='disabled',children:queues.map(queue=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:queue.id,children:queue.name},queue.id))})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{variant:"outlined",margin:"dense",fullWidth:true,className:classes.formControl,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A,{id:"statusTicket-selection-label",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.statusTicket")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_4__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.statusTicket"),placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.statusTicket"),labelId:"statusTicket-selection-label",id:"statusTicket",name:"statusTicket",error:touched.statusTicket&&Boolean(errors.statusTicket),disabled:!campaignEditable||values.openTicket==='disabled',children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:"closed",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.closedTicketStatus")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:"pending",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.pendingTicketStatus")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{value:"open",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.form.openTicketStatus")})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,item:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A,{value:messageTab,indicatorColor:"primary",textColor:"primary",onChange:(e,v)=>setMessageTab(v),variant:"fullWidth",centered:true,style:{background:"#f2f2f2",border:"1px solid #e6e6e6",borderRadius:2},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.modal.tabLabels.msg1"),index:0}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.modal.tabLabels.msg2"),index:1}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.modal.tabLabels.msg3"),index:2}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.modal.tabLabels.msg4"),index:3}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,{label:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.modal.tabLabels.msg5"),index:4})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A,{style:{paddingTop:20,border:"none"},children:[messageTab===0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:values.confirmation?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:8,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message1")})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderConfirmationMessageField("confirmationMessage1")})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message1")})}),messageTab===1&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:values.confirmation?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:8,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message2")})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderConfirmationMessageField("confirmationMessage2")})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message2")})}),messageTab===2&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:values.confirmation?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:8,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message3")})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderConfirmationMessageField("confirmationMessage3")})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message3")})}),messageTab===3&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:values.confirmation?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:8,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message4")})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderConfirmationMessageField("confirmationMessage4")})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message4")})}),messageTab===4&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:values.confirmation?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:8,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message5")})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,md:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderConfirmationMessageField("confirmationMessage5")})})]}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:renderMessageField("message5")})})]})]}),(campaign.mediaPath||attachment)&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{xs:12,item:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{startIcon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_AttachFile__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{}),children:attachment!=null?attachment.name:campaign.mediaName}),campaignEditable&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{onClick:()=>setConfirmationOpen(true),color:"primary",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{color:"secondary"})})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{children:[campaign.status==="CANCELADA"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{color:"primary",onClick:()=>restartCampaign(),variant:"outlined",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.buttons.restart")}),campaign.status==="EM_ANDAMENTO"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{color:"primary",onClick:()=>cancelCampaign(),variant:"outlined",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.buttons.cancel")}),!attachment&&!campaign.mediaPath&&campaignEditable&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{color:"primary",onClick:()=>attachmentFile.current.click(),disabled:isSubmitting,variant:"outlined",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.buttons.attach")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{onClick:handleClose,color:"primary",disabled:isSubmitting,variant:"outlined",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.buttons.close")}),(campaignEditable||campaign.status==="CANCELADA")&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{type:"submit",color:"primary",disabled:isSubmitting,variant:"contained",className:classes.btnWrapper,children:[campaignId?"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.buttons.edit")):"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_19__/* .i18n */ .R.t("campaigns.dialog.buttons.add")),isSubmitting&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{size:24,className:classes.buttonProgress})]})]})]});}})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CampaignModal);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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

/***/ 33323
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9579);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93250);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76986);
/* harmony import */ var _material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7991);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77173);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57044);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(theme=>({on:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A[600],fontSize:'20px'},off:{color:_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A[600],fontSize:'20px'}}));const UserStatusIcon=_ref=>{let user=_ref.user;const classes=useStyles();return user.online?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay,{title:_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("userStatus.online"),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{className:classes.on})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay,{title:_translate_i18n__WEBPACK_IMPORTED_MODULE_7__/* .i18n */ .R.t("userStatus.offline"),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{className:classes.off})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserStatusIcon);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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

/***/ 48471
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94505);
const useQueues=()=>{const findAll=async()=>{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.get("/queue"),data=_await$api$get.data;return data;};return{findAll};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useQueues);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 47459
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89379);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43550);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91688);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20495);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67503);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59691);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72703);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64759);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(18885);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17339);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(71191);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(99229);
/* harmony import */ var _material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72512);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10559);
/* harmony import */ var _material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(97);
/* harmony import */ var _material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(43487);
/* harmony import */ var _material_ui_icons_PauseCircleOutline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84703);
/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(50038);
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(51170);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(45824);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(94505);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(57044);
/* harmony import */ var _components_TableRowSkeleton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(13293);
/* harmony import */ var _components_CampaignModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(28493);
/* harmony import */ var _components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(10168);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(82455);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(18073);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(53536);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _hooks_useDate__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(61355);
/* harmony import */ var _components_ForbiddenPage__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(86196);
/* harmony import */ var _hooks_usePlans__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(62829);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(50298);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(70579);
/* eslint-disable no-unused-vars */const reducer=(state,action)=>{if(action.type==="LOAD_CAMPAIGNS"){const campaigns=action.payload;const newCampaigns=[];if((0,lodash__WEBPACK_IMPORTED_MODULE_32__.isArray)(campaigns)){campaigns.forEach(campaign=>{const campaignIndex=state.findIndex(u=>u.id===campaign.id);if(campaignIndex!==-1){state[campaignIndex]=campaign;}else{newCampaigns.push(campaign);}});}return[...state,...newCampaigns];}if(action.type==="UPDATE_CAMPAIGNS"){const campaign=action.payload;const campaignIndex=state.findIndex(u=>u.id===campaign.id);if(campaignIndex!==-1){state[campaignIndex]=campaign;return[...state];}else{return[campaign,...state];}}if(action.type==="DELETE_CAMPAIGN"){const campaignId=action.payload;const campaignIndex=state.findIndex(u=>u.id===campaignId);if(campaignIndex!==-1){state.splice(campaignIndex,1);}return[...state];}if(action.type==="RESET"){return[];}};const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(theme=>({mainPaper:(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({flex:1,// padding: theme.spacing(1),
padding:theme.padding,overflowY:"scroll"},theme.scrollbarStyles)}));const Campaigns=()=>{const classes=useStyles();const history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useHistory)();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,2),loading=_useState2[0],setLoading=_useState2[1];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,2),pageNumber=_useState4[0],setPageNumber=_useState4[1];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState5,2),hasMore=_useState6[0],setHasMore=_useState6[1];const _useState7=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState8=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState7,2),selectedCampaign=_useState8[0],setSelectedCampaign=_useState8[1];const _useState9=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),_useState0=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState9,2),deletingCampaign=_useState0[0],setDeletingCampaign=_useState0[1];const _useState1=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState10=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState1,2),campaignModalOpen=_useState10[0],setCampaignModalOpen=_useState10[1];const _useState11=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState12=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState11,2),confirmModalOpen=_useState12[0],setConfirmModalOpen=_useState12[1];const _useState13=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),_useState14=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState13,2),showCampaigns=_useState14[0],setShowCampaigns=_useState14[1];const _useState15=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState16=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState15,2),searchParam=_useState16[0],setSearchParam=_useState16[1];const _useReducer=(0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer,[]),_useReducer2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useReducer,2),campaigns=_useReducer2[0],dispatch=_useReducer2[1];//   const socketManager = useContext(SocketContext);
const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_36__/* .AuthContext */ .c),user=_useContext.user,socket=_useContext.socket;const _useDate=(0,_hooks_useDate__WEBPACK_IMPORTED_MODULE_33__/* .useDate */ .S)(),datetimeToClient=_useDate.datetimeToClient;const _usePlans=(0,_hooks_usePlans__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A)(),getPlanCompany=_usePlans.getPlanCompany;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{async function fetchData(){const companyId=user.companyId;const planConfigs=await getPlanCompany(undefined,companyId);if(!planConfigs||!planConfigs.plan||!planConfigs.plan.useCampaigns){react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.error(_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.noPermission"));setTimeout(()=>{history.push("/");},1000);}}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{dispatch({type:"RESET"});setPageNumber(1);},[searchParam]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{setLoading(true);const delayDebounceFn=setTimeout(()=>{fetchCampaigns();},500);return()=>clearTimeout(delayDebounceFn);// eslint-disable-next-line react-hooks/exhaustive-deps
},[searchParam,pageNumber]);(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{const companyId=user.companyId;// const socket = socketManager.GetSocket();
const onCompanyCampaign=data=>{if(data.action==="update"||data.action==="create"){dispatch({type:"UPDATE_CAMPAIGNS",payload:data.record});}if(data.action==="delete"){dispatch({type:"DELETE_CAMPAIGN",payload:+data.id});}};socket.on("company-".concat(companyId,"-campaign"),onCompanyCampaign);return()=>{socket.off("company-".concat(companyId,"-campaign"),onCompanyCampaign);};},[user]);const fetchCampaigns=async()=>{try{const _await$api$get=await _services_api__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Ay.get("/campaigns/",{params:{searchParam,pageNumber}}),data=_await$api$get.data;dispatch({type:"LOAD_CAMPAIGNS",payload:data.records});setHasMore(data.hasMore);setLoading(false);}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A)(err);}};const handleOpenCampaignModal=()=>{setSelectedCampaign(null);setCampaignModalOpen(true);};const handleCloseCampaignModal=()=>{setSelectedCampaign(null);setCampaignModalOpen(false);};const handleSearch=event=>{setSearchParam(event.target.value.toLowerCase());};const handleEditCampaign=campaign=>{setSelectedCampaign(campaign);setCampaignModalOpen(true);};const handleDeleteCampaign=async campaignId=>{try{await _services_api__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Ay.delete("/campaigns/".concat(campaignId));react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.toasts.deleted"));}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A)(err);}setDeletingCampaign(null);setSearchParam("");setPageNumber(1);};const loadMore=()=>{setPageNumber(prevState=>prevState+1);};const handleScroll=e=>{if(!hasMore||loading)return;const _e$currentTarget=e.currentTarget,scrollTop=_e$currentTarget.scrollTop,scrollHeight=_e$currentTarget.scrollHeight,clientHeight=_e$currentTarget.clientHeight;if(scrollHeight-(scrollTop+100)<clientHeight){loadMore();}};const formatStatus=val=>{switch(val){case"INATIVA":return _translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.status.inactive");case"PROGRAMADA":return _translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.status.scheduled");case"EM_ANDAMENTO":return _translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.status.inProgress");case"CANCELADA":return _translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.status.cancelled");case"FINALIZADA":return _translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.status.finished");default:return val;}};const cancelCampaign=async campaign=>{try{await _services_api__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Ay.post("/campaigns/".concat(campaign.id,"/cancel"));react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.toasts.cancel"));setPageNumber(1);fetchCampaigns();}catch(err){react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.error(err.message);}};const restartCampaign=async campaign=>{try{await _services_api__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Ay.post("/campaigns/".concat(campaign.id,"/restart"));react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.toasts.restart"));setPageNumber(1);fetchCampaigns();}catch(err){react_toastify__WEBPACK_IMPORTED_MODULE_3__/* .toast */ .oR.error(err.message);}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_components_ConfirmationModal__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A,{title:deletingCampaign&&"".concat(_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.confirmationModal.deleteTitle")," ").concat(deletingCampaign.name,"?"),open:confirmModalOpen,onClose:setConfirmModalOpen,onConfirm:()=>handleDeleteCampaign(deletingCampaign.id),children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.confirmationModal.deleteMessage")}),campaignModalOpen&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_components_CampaignModal__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A,{resetPagination:()=>{setPageNumber(1);fetchCampaigns();},open:campaignModalOpen,onClose:handleCloseCampaignModal,"aria-labelledby":"form-dialog-title",campaignId:selectedCampaign&&selectedCampaign.id}),user.profile==="user"?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_components_ForbiddenPage__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A,{}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_components_MainHeader__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,{style:{width:"99.6%"},container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,{xs:12,sm:8,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_components_Title__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.title")})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,{xs:12,sm:4,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,{spacing:2,container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,{xs:6,sm:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,{fullWidth:true,placeholder:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.searchPlaceholder"),type:"search",value:searchParam,onChange:handleSearch,InputProps:{startAdornment:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,{position:"start",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A,{style:{color:"gray"}})})}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A,{xs:6,sm:6,item:true,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,{fullWidth:true,variant:"contained",onClick:handleOpenCampaignModal,color:"primary",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.buttons.add")})})]})})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{className:classes.mainPaper,variant:"outlined",onScroll:handleScroll,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{size:"small",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.name")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.status")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.contactList")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.whatsapp")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.scheduledAt")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.completedAt")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.confirmation")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.table.actions")})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.Fragment,{children:[campaigns.map(campaign=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:campaign.name}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:formatStatus(campaign.status)}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:campaign.contactListId?campaign.contactList.name:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.common.notDefined")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:campaign.whatsappId?campaign.whatsapp.name:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.common.notDefined")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:campaign.scheduledAt?datetimeToClient(campaign.scheduledAt):_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.common.noSchedule")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:campaign.completedAt?datetimeToClient(campaign.completedAt):_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.common.notCompleted")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:campaign.confirmation?_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.common.enabled"):_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.common.disabled")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsxs)(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{align:"center",children:[campaign.status==="EM_ANDAMENTO"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{onClick:()=>cancelCampaign(campaign),title:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.buttons.stopCampaign"),size:"small",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_PauseCircleOutline__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A,{})}),campaign.status==="CANCELADA"&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{onClick:()=>restartCampaign(campaign),title:_translate_i18n__WEBPACK_IMPORTED_MODULE_26__/* .i18n */ .R.t("campaigns.buttons.stopCampaign"),size:"small",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_PlayCircleOutline__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{onClick:()=>history.push("/campaign/".concat(campaign.id,"/report")),size:"small",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_Description__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{size:"small",onClick:()=>handleEditCampaign(campaign),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,{size:"small",onClick:e=>{setConfirmModalOpen(true);setDeletingCampaign(campaign);},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_material_ui_icons_DeleteOutline__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,{})})]})]},campaign.id)),loading&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_37__.jsx)(_components_TableRowSkeleton__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .A,{columns:8})]})})]})})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Campaigns);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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

/***/ 7740
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
  d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
}), 'AttachFile');
exports.A = _default;

/***/ },

/***/ 7991
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckCircle');
exports.A = _default;

/***/ },

/***/ 72512
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"
}), 'DeleteOutline');
exports.A = _default;

/***/ },

/***/ 97
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
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
}), 'Description');
exports.A = _default;

/***/ },

/***/ 10559
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
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'Edit');
exports.A = _default;

/***/ },

/***/ 77173
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');
exports.A = _default;

/***/ },

/***/ 84703
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
  d: "M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"
}), 'PauseCircleOutline');
exports.A = _default;

/***/ },

/***/ 43487
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
  d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
}), 'PlayCircleOutline');
exports.A = _default;

/***/ },

/***/ 71191
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');
exports.A = _default;

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


/***/ }

}]);