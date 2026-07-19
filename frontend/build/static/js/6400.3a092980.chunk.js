"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[6400],{

/***/ 62829
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65043);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94505);
const usePlans=()=>{const getPlanList=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$openApi$reques=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* .openApi */ .Nd.request({url:'/plans/list',method:'GET',params}),data=_await$openApi$reques.data;return data;},[]);const list=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async params=>{const _await$api$request=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/plans/all',method:'GET',params}),data=_await$api$request.data;return data;},[]);const save=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request2=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:'/plans',method:'POST',data}),responseData=_await$api$request2.data;return responseData;},[]);const update=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async data=>{const _await$api$request3=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/plans/".concat(data.id),method:'PUT',data}),responseData=_await$api$request3.data;return responseData;},[]);const remove=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id=>{const _await$api$request4=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/plans/".concat(id),method:'DELETE'}),data=_await$api$request4.data;return data;},[]);const getPlanCompany=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async(params,id)=>{const _await$api$request5=await _services_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.request({url:"/companies/listPlan/".concat(id),method:'GET',params}),data=_await$api$request5.data;return data;},[]);return{getPlanList,list,save,update,remove,getPlanCompany};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePlans);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 86400
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5544);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65043);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91688);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81551);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20495);
/* harmony import */ var _translate_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57044);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18073);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26943);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30105);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58425);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66187);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(93201);
/* harmony import */ var _errors_toastError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82455);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43550);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5298);
/* harmony import */ var _hooks_usePlans__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62829);
/* harmony import */ var _context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(50298);
/* harmony import */ var _config_env__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78448);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70579);
const useStyles=(0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(theme=>({mainPaper:{flex:1,padding:theme.spacing(2),paddingBottom:100},mainHeader:{marginTop:theme.spacing(1)},elementMargin:{padding:theme.spacing(2)},formContainer:{maxWidth:500},textRight:{textAlign:"right"}}));const MessagesAPI=()=>{const classes=useStyles();const history=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useHistory)();const _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({token:'',number:'',body:'',userId:'',queueId:''}),_useState2=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState,1),formMessageTextData=_useState2[0];const _useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({token:'',number:'',medias:'',body:'',userId:'',queueId:''}),_useState4=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState3,1),formMessageMediaData=_useState4[0];const _useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),_useState6=(0,D_Documentos_GitHub_ChatIA_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_useState5,2),file=_useState6[0],setFile=_useState6[1];const _useContext=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Auth_AuthContext__WEBPACK_IMPORTED_MODULE_16__/* .AuthContext */ .c),user=_useContext.user,socket=_useContext.socket;const _usePlans=(0,_hooks_usePlans__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A)(),getPlanCompany=_usePlans.getPlanCompany;(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{async function fetchData(){const companyId=user.companyId;const planConfigs=await getPlanCompany(undefined,companyId);if(!planConfigs||!planConfigs.plan||!planConfigs.plan.useExternalApi){react_toastify__WEBPACK_IMPORTED_MODULE_13__/* .toast */ .oR.error(_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.messages.noPermission"));setTimeout(()=>{history.push("/");},1000);}}fetchData();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);const getEndpoint=()=>{return _config_env__WEBPACK_IMPORTED_MODULE_17__/* .BACKEND_URL */ .fn+'/api/messages/send';};const handleSendTextMessage=async values=>{const number=values.number,body=values.body,userId=values.userId,queueId=values.queueId;const data={number,body,userId,queueId};try{await axios__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.request({url:getEndpoint(),method:'POST',data,headers:{'Content-type':'application/json','Authorization':"Bearer ".concat(values.token)}});react_toastify__WEBPACK_IMPORTED_MODULE_13__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.messages.success'));}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(err);}};const handleSendMediaMessage=async values=>{try{const firstFile=file[0];const data=new FormData();data.append('number',values.number);data.append('body',values.body?values.body:firstFile.name);data.append('userId',values.userId);data.append('queueId',values.queueId);data.append('medias',firstFile);await axios__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A.request({url:getEndpoint(),method:'POST',data,headers:{'Content-type':'multipart/form-data','Authorization':"Bearer ".concat(values.token)}});react_toastify__WEBPACK_IMPORTED_MODULE_13__/* .toast */ .oR.success(_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.messages.success'));}catch(err){(0,_errors_toastError__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(err);}};const renderFormMessageText=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Formik */ .l1,{initialValues:formMessageTextData,enableReinitialize:true,onSubmit:(values,actions)=>{setTimeout(async()=>{await handleSendTextMessage(values);actions.setSubmitting(false);actions.resetForm();},400);},className:classes.elementMargin,children:_ref=>{let isSubmitting=_ref.isSubmitting;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Form */ .lV,{className:classes.formContainer,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{container:true,spacing:2,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.token"),name:"token",autoFocus:true,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField,required:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.number"),name:"number",variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField,required:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.body"),name:"body",variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField,required:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.userId"),name:"userId",variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.queueId"),name:"queueId",variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,className:classes.textRight,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{type:"submit",color:"primary",variant:"contained",className:classes.btnWrapper,children:isSubmitting?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{size:24,className:classes.buttonProgress}):_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.form.send')})})]})});}});};const renderFormMessageMedia=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Formik */ .l1,{initialValues:formMessageMediaData,enableReinitialize:true,onSubmit:(values,actions)=>{setTimeout(async()=>{await handleSendMediaMessage(values);actions.setSubmitting(false);actions.resetForm();document.getElementById('medias').files=null;document.getElementById('medias').value=null;},400);},className:classes.elementMargin,children:_ref2=>{let isSubmitting=_ref2.isSubmitting;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Form */ .lV,{className:classes.formContainer,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{container:true,spacing:2,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.mediaMessage.token"),name:"token",autoFocus:true,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField,required:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.mediaMessage.number"),name:"number",autoFocus:true,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField,required:true})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.body"),name:"body",autoFocus:true,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.userId"),name:"userId",autoFocus:true,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,md:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(formik__WEBPACK_IMPORTED_MODULE_11__/* .Field */ .D0,{as:_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,label:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.textMessage.queueId"),name:"queueId",autoFocus:true,variant:"outlined",margin:"dense",fullWidth:true,className:classes.textField})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("input",{type:"file",name:"medias",id:"medias",required:true,onChange:e=>setFile(e.target.files)})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,className:classes.textRight,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{type:"submit",color:"primary",variant:"contained",className:classes.btnWrapper,children:isSubmitting?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,{size:24,className:classes.buttonProgress}):_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.form.send')})})]})});}});};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{className:classes.mainPaper,style:{marginLeft:"5px"}// className={classes.elementMargin}
,variant:"outlined",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{variant:"h5",children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{variant:"h6",color:"primary",className:classes.elementMargin,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.methods.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{component:"div",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("ol",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.methods.messagesText")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.methods.messagesMidia")})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{variant:"h6",color:"primary",className:classes.elementMargin,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:classes.elementMargin,component:"div",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.comments")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.comments1")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("li",{children:[_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.comments2"),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.codeCountry")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.code")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.instructions.number")})]})]})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{variant:"h6",color:"primary",className:classes.elementMargin,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.text.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,sm:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:classes.elementMargin,component:"div",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.text.instructions")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.endpoint')})," ",getEndpoint()," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.method')})," ",_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.post')," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.headers')})," ",_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.headersTextAuth')," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.body')})," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("pre",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.bodyExample')})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,sm:6,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:classes.elementMargin,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.form.testSend')})}),renderFormMessageText()]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{variant:"h6",color:"primary",className:classes.elementMargin,children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.media.title")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{container:true,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,sm:6,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:classes.elementMargin,component:"div",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("p",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t("messagesAPI.API.media.instructions")}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.endpoint')})," ",getEndpoint()," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.method')})," ",_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.post')," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.headers')})," ",_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.headersMediaAuth')," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formData')})," ",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("br",{}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)("ul",{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.number')})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.body')})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.userId')})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.queueId')})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.medias')})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.sendSignature')})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("li",{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.documentation.formDataFields.closeTicket')})})]})]})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{item:true,xs:12,sm:6,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A,{className:classes.elementMargin,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_18__.jsx)("b",{children:_translate_i18n__WEBPACK_IMPORTED_MODULE_5__/* .i18n */ .R.t('messagesAPI.form.testSend')})}),renderFormMessageMedia()]})]})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessagesAPI);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 18073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80045);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65043);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49644);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71745);


// A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/






var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);
    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }
    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.

    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}
function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}
function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);
    if (themeSpacing === 0) {
      return;
    }
    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',

var styles = function styles(theme) {
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    /* Styles applied to the root element. */
    root: {},
    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.
    },
    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },
    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },
    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },
    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },
    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },
    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },
    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },
    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },
    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },
    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },
    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },
    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },
    /* Styles applied to the root element if `justifyContent="center"`. */
    'justify-content-xs-center': {
      justifyContent: 'center'
    },
    /* Styles applied to the root element if `justifyContent="flex-end"`. */
    'justify-content-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    /* Styles applied to the root element if `justifyContent="space-between"`. */
    'justify-content-xs-space-between': {
      justifyContent: 'space-between'
    },
    /* Styles applied to the root element if `justifyContent="space-around"`. */
    'justify-content-xs-space-around': {
      justifyContent: 'space-around'
    },
    /* Styles applied to the root element if `justifyContent="space-evenly"`. */
    'justify-content-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
    alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
    _props$alignItems = props.alignItems,
    alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
    classes = props.classes,
    classNameProp = props.className,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    _props$container = props.container,
    container = _props$container === void 0 ? false : _props$container,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'row' : _props$direction,
    _props$item = props.item,
    item = _props$item === void 0 ? false : _props$item,
    justify = props.justify,
    _props$justifyContent = props.justifyContent,
    justifyContent = _props$justifyContent === void 0 ? 'flex-start' : _props$justifyContent,
    _props$lg = props.lg,
    lg = _props$lg === void 0 ? false : _props$lg,
    _props$md = props.md,
    md = _props$md === void 0 ? false : _props$md,
    _props$sm = props.sm,
    sm = _props$sm === void 0 ? false : _props$sm,
    _props$spacing = props.spacing,
    spacing = _props$spacing === void 0 ? 0 : _props$spacing,
    _props$wrap = props.wrap,
    wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
    _props$xl = props.xl,
    xl = _props$xl === void 0 ? false : _props$xl,
    _props$xs = props.xs,
    xs = _props$xs === void 0 ? false : _props$xs,
    _props$zeroMinWidth = props.zeroMinWidth,
    zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
    other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "justifyContent", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  var className = (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], (justify || justifyContent) !== 'flex-start' && classes["justify-content-xs-".concat(String(justify || justifyContent))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    className: className,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
var StyledGrid = (0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(styles, {
  name: 'MuiGrid'
})(Grid);
if (false) // removed by dead control flow
{ var requireProp; }
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StyledGrid);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);