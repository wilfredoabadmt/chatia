"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([[1447],{

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

/***/ 71447
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Moments)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(65043);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(81551);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(5544);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(91688);
// EXTERNAL MODULE: ./src/services/api.js
var api = __webpack_require__(94505);
// EXTERNAL MODULE: ./src/translate/i18n.js + 3 modules
var i18n = __webpack_require__(57044);
// EXTERNAL MODULE: ./src/errors/toastError.js
var toastError = __webpack_require__(82455);
// EXTERNAL MODULE: ./src/context/Auth/AuthContext.js
var AuthContext = __webpack_require__(50298);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/VisibilityOutlined.js
var VisibilityOutlined = __webpack_require__(12805);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/esm/ReportProblem.js
var ReportProblem = __webpack_require__(8807);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.js + 1 modules
var react_toastify_esm = __webpack_require__(43550);
// EXTERNAL MODULE: ./node_modules/@mui/material/colors/yellow.js
var yellow = __webpack_require__(41698);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(18073);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(20495);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CardHeader/CardHeader.js
var CardHeader = __webpack_require__(96795);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(96962);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(9989);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(87603);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(8713);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(77325);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Badge/Badge.js
var Badge = __webpack_require__(44235);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(9579);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Divider/Divider.js
var Divider = __webpack_require__(5571);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/isSameDay/index.js
var isSameDay = __webpack_require__(407);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/parseISO/index.js
var parseISO = __webpack_require__(5093);
// EXTERNAL MODULE: ./node_modules/date-fns/esm/format/index.js + 3 modules
var format = __webpack_require__(69525);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/grey.js
var grey = __webpack_require__(76986);
// EXTERNAL MODULE: ./src/config.js
var config = __webpack_require__(93488);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(70579);
;// ./src/components/MomentsUser/index.js
// import { SocketContext } from "../../context/Socket/SocketContext";
const backendUrl=(0,config/* getBackendUrl */.wE)();const useStyles=(0,makeStyles/* default */.A)(theme=>({main:{display:"flex",justifyContent:"space-between"},container:(0,objectSpread2/* default */.A)({display:'flex',flexWrap:'wrap',overflowY:"scroll"},theme.scrollbarStyles),cardHeader:{width:"380px",height:"78px",padding:10,backgroundColor:"#DCDCDC"},cardHeaderPending:{width:"380px",height:"78px",padding:10,backgroundColor:"#C0C0C0"},card:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({height:"300px",width:"380px",margin:"3px",borderRadius:5,flex:1,maxHeight:"100%",overflowY:"scroll"},theme.scrollbarStyles),{},{borderTop:"2px solid rgba(0, 0, 0, 0.12)"}),changeWarap:{width:'380px',padding:0,margin:0},pending:{color:yellow/* default */.A[600],fontSize:'20px'},connectionTag:{background:"green",color:"#FFF",marginRight:1,padding:1,fontWeight:'bold',// paddingLeft: 5,
// paddingRight: 5,
borderRadius:3,fontSize:"0.6em"// whiteSpace: "nowrap"
},lastMessageTime:{justifySelf:"flex-end",textAlign:"right",position:"relative",// top: -30,
marginRight:"1px",color:grey/* default */.A[400]},lastMessageTimeUnread:{justifySelf:"flex-end",textAlign:"right",position:"relative",// top: -30,
color:"green",fontWeight:"bold",marginRight:"1px"},pending:{color:yellow/* default */.A[600],fontSize:'20px'}}));const DashboardManage=()=>{const classes=useStyles();const history=(0,react_router.useHistory)();//   const socketManager = useContext(SocketContext);
const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user,socket=_useContext.socket;const _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.A)(_useState,2),tickets=_useState2[0],setTickets=_useState2[1];const _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.A)(_useState3,2),update=_useState4[0],setUpdate=_useState4[1];const _useState5=(0,react.useState)(0),_useState6=(0,slicedToArray/* default */.A)(_useState5,2),ticketNot=_useState6[0],setTicketNot=_useState6[1];const companyId=user.companyId;const userQueueIds=user.queues.map(q=>q.id);const _useState7=(0,react.useState)(userQueueIds||[]),_useState8=(0,slicedToArray/* default */.A)(_useState7,2),selectedQueueIds=_useState8[0],setSelectedQueueIds=_useState8[1];(0,react.useEffect)(()=>{(async()=>{try{const _await$api$get=await api/* default */.Ay.get("/usersMoments"),data=_await$api$get.data;console.log(data);setTickets(data);setUpdate(!update);}catch(err){var _err$response;if(((_err$response=err.response)===null||_err$response===void 0?void 0:_err$response.status)!==500){(0,toastError/* default */.A)(err);}else{react_toastify_esm/* toast */.oR.error("".concat(i18n/* i18n */.R.t("frontEndErrors.getUsers")));}}})();},[]);(0,react.useEffect)(()=>{const companyId=user.companyId;console.log("socket painel");// const socket = socketManager.GetSocket();
// const onConnect = () => {
//   socket.emit("joinChatBox", `${ticketId}`);
// }
const onAppMessage=data=>{if(data.action==="create"||data.action==="update"||data.action==="delete"){(async()=>{try{const _await$api$get2=await api/* default */.Ay.get("/usersMoments"),data=_await$api$get2.data;setTickets(data);setUpdate(!update);}catch(err){var _err$response2;if(((_err$response2=err.response)===null||_err$response2===void 0?void 0:_err$response2.status)!==500){(0,toastError/* default */.A)(err);}else{react_toastify_esm/* toast */.oR.error("".concat(i18n/* i18n */.R.t("frontEndErrors.getUsers")));}}})();}};// socket.on("connect", onConnect);
socket.on("company-".concat(companyId,"-ticket"),onAppMessage);socket.on("company-".concat(companyId,"-appMessage"),onAppMessage);return()=>{// socket.off("connect", onConnect);
socket.off("company-".concat(companyId,"-ticket"),onAppMessage);socket.off("company-".concat(companyId,"-appMessage"),onAppMessage);};},[socket]);const Moments=(0,react.useMemo)(()=>{// console.log(tickets)
if(tickets&&tickets.length>0){const ticketsByUser=tickets.reduce((userTickets,ticket)=>{const user=ticket.user;if(user){const userIndex=userTickets.findIndex(group=>group.user.id===user.id);if(userIndex===-1){userTickets.push({user,userTickets:[ticket]});}else{userTickets[userIndex].userTickets.push(ticket);}}return userTickets;},[]);return ticketsByUser.map((group,index)=>{var _group$user,_group$userTickets;return/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{padding:20,className:classes.main,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classes.changeWarap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{elevation:3,className:classes.cardHeader,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CardHeader/* default */.A,{style:{maxWidth:'380px',width:'100%'},avatar:/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.A,{alt:"".concat(group.user.profileImage),src:group.user.profileImage?"".concat(backendUrl,"/public/company").concat(companyId,"/user/").concat(group.user.profileImage):null}),title:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[(group===null||group===void 0?void 0:(_group$user=group.user)===null||_group$user===void 0?void 0:_group$user.name)||i18n/* i18n */.R.t("moments.pending")," ",/*#__PURE__*/(0,jsx_runtime.jsx)("br",{}),"".concat(i18n/* i18n */.R.t("moments.attendances")).concat((_group$userTickets=group.userTickets)===null||_group$userTickets===void 0?void 0:_group$userTickets.length)]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{square:true,elevation:1,className:classes.card,children:group.userTickets.map(ticket=>{var _ticket$contact,_ticket$contact$name,_ticket$contact2,_ticket$contact3,_ticket$lastMessage,_ticket$whatsapp,_ticket$queue,_ticket$queue2;return/*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.A,{style:{paddingTop:0},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.A,{dense:true,button:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemAvatar/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.A,{alt:"".concat(ticket.contact.urlPicture),src:"".concat(ticket.contact.urlPicture)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A,{disableTypography:true,primary:(ticket===null||ticket===void 0?void 0:(_ticket$contact=ticket.contact)===null||_ticket$contact===void 0?void 0:(_ticket$contact$name=_ticket$contact.name)===null||_ticket$contact$name===void 0?void 0:_ticket$contact$name.length)>30?(ticket===null||ticket===void 0?void 0:(_ticket$contact2=ticket.contact)===null||_ticket$contact2===void 0?void 0:_ticket$contact2.name.substring(0,25))+'...':ticket===null||ticket===void 0?void 0:(_ticket$contact3=ticket.contact)===null||_ticket$contact3===void 0?void 0:_ticket$contact3.name,secondary:/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{style:{display:'inline'},component:"span",variant:"body2",children:"".concat(((_ticket$lastMessage=ticket.lastMessage)===null||_ticket$lastMessage===void 0?void 0:_ticket$lastMessage.length)>30?String(ticket.lastMessage).substring(0,27)+'...':ticket.lastMessage)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.A,{className:classes.connectionTag,children:ticket===null||ticket===void 0?void 0:(_ticket$whatsapp=ticket.whatsapp)===null||_ticket$whatsapp===void 0?void 0:_ticket$whatsapp.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.A,{style:{backgroundColor:((_ticket$queue=ticket.queue)===null||_ticket$queue===void 0?void 0:_ticket$queue.color)||"#7c7c7c"},className:classes.connectionTag,children:((_ticket$queue2=ticket.queue)===null||_ticket$queue2===void 0?void 0:_ticket$queue2.name.toUpperCase())||i18n/* i18n */.R.t("moments.noQueue")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{className:Number(ticket.unreadMessages)>0?classes.lastMessageTimeUnread:classes.lastMessageTime,component:"span",variant:"body2",children:(0,isSameDay/* default */.A)((0,parseISO/* default */.A)(ticket.updatedAt),new Date())?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,format/* default */.A)((0,parseISO/* default */.A)(ticket.updatedAt),"HH:mm")}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,format/* default */.A)((0,parseISO/* default */.A)(ticket.updatedAt),"dd/MM/yyyy")})}),(user.profile==="admin"||ticket.userId===user.id)&&/*#__PURE__*/(0,jsx_runtime.jsx)(Tooltip/* default */.Ay,{title:i18n/* i18n */.R.t("moments.accessTicket"),children:/*#__PURE__*/(0,jsx_runtime.jsx)(VisibilityOutlined/* default */.A,{onClick:()=>history.push("/tickets/".concat(ticket.uuid)),fontSize:"small",style:{color:grey/* default */.A[500],cursor:"pointer",marginRight:5,bottom:"-15px"}})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Divider/* default */.A,{variant:"inset",component:"li"})]},ticket.id);})})]})},index)},index);});}else{return null;}},[update]);const MomentsPending=(0,react.useMemo)(()=>{if(tickets&&tickets.length>0){const pendingTickets=tickets.filter(ticket=>!ticket.user);return/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classes.main,children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{padding:2,className:classes.changeWarap,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{elevation:3,className:classes.cardHeaderPending,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CardHeader/* default */.A,{style:{maxWidth:'380px',width:'100%'},avatar:/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.A,{}),title:/*#__PURE__*/(0,jsx_runtime.jsxs)("span",{children:[i18n/* i18n */.R.t("moments.pending"),/*#__PURE__*/(0,jsx_runtime.jsx)(ReportProblem/* default */.A,{className:classes.pending}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[i18n/* i18n */.R.t("moments.attendances"),pendingTickets===null||pendingTickets===void 0?void 0:pendingTickets.length]})]})})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{square:true,elevation:1,className:classes.card,children:pendingTickets.map(ticket=>{var _ticket$contact4,_ticket$lastMessage2,_ticket$whatsapp2,_ticket$queue3,_ticket$queue4;return/*#__PURE__*/(0,jsx_runtime.jsxs)(List/* default */.A,{style:{paddingTop:0},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(ListItem/* default */.A,{dense:true,button:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemAvatar/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Avatar/* default */.A,{alt:"".concat(ticket.contact.urlPicture),src:"".concat(ticket.contact.urlPicture)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(ListItemText/* default */.A,{disableTypography:true,primary:ticket===null||ticket===void 0?void 0:(_ticket$contact4=ticket.contact)===null||_ticket$contact4===void 0?void 0:_ticket$contact4.name,secondary:/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{style:{display:'inline'},component:"span",variant:"body2",children:"".concat(((_ticket$lastMessage2=ticket.lastMessage)===null||_ticket$lastMessage2===void 0?void 0:_ticket$lastMessage2.length)>30?String(ticket.lastMessage).substring(0,27)+'...':ticket.lastMessage)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.A,{className:classes.connectionTag,children:ticket===null||ticket===void 0?void 0:(_ticket$whatsapp2=ticket.whatsapp)===null||_ticket$whatsapp2===void 0?void 0:_ticket$whatsapp2.name}),/*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.A,{style:{backgroundColor:((_ticket$queue3=ticket.queue)===null||_ticket$queue3===void 0?void 0:_ticket$queue3.color)||"#7c7c7c"},className:classes.connectionTag,children:((_ticket$queue4=ticket.queue)===null||_ticket$queue4===void 0?void 0:_ticket$queue4.name.toUpperCase())||i18n/* i18n */.R.t("moments.noQueue")})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Typography/* default */.A,{className:Number(ticket.unreadMessages)>0?classes.lastMessageTimeUnread:classes.lastMessageTime,component:"span",variant:"body2",children:(0,isSameDay/* default */.A)((0,parseISO/* default */.A)(ticket.updatedAt),new Date())?/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,format/* default */.A)((0,parseISO/* default */.A)(ticket.updatedAt),"HH:mm")}):/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,format/* default */.A)((0,parseISO/* default */.A)(ticket.updatedAt),"dd/MM/yyyy")})})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(Divider/* default */.A,{variant:"inset",component:"li"})]},ticket.id);})})]})})});}else{return null;}},[update]);return/*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{container:true,spacing:2,children:[Moments,MomentsPending]})});};/* harmony default export */ const MomentsUser = (DashboardManage);
// EXTERNAL MODULE: ./src/components/MainHeader/index.js
var MainHeader = __webpack_require__(51170);
// EXTERNAL MODULE: ./src/components/Title/index.js
var Title = __webpack_require__(45824);
// EXTERNAL MODULE: ./src/components/ForbiddenPage/index.js
var ForbiddenPage = __webpack_require__(86196);
;// ./src/pages/Moments/index.js
// import MomentsQueues from "../../components/MomentsQueues";
const Moments_useStyles=(0,makeStyles/* default */.A)(theme=>({container:{paddingTop:theme.spacing(1),paddingBottom:theme.spacing(1),paddingLeft:"5px",maxWidth:"100%"},mainPaper:(0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({display:"flex",padding:theme.spacing(1),overflowY:"scroll"},theme.scrollbarStyles),{},{alignItems:"center"}),fixedHeightPaper:{padding:theme.spacing(2),display:"flex",flexDirection:"column",height:100},chatPapper:{display:"flex",height:"100%"},contactsHeader:{display:"flex",flexWrap:"wrap",padding:"0px 6px 6px 6px"}}));const ChatMoments=()=>{const classes=Moments_useStyles();const _useContext=(0,react.useContext)(AuthContext/* AuthContext */.c),user=_useContext.user;return user.profile==="user"&&user.allowRealTime==="disabled"?/*#__PURE__*/(0,jsx_runtime.jsx)(ForbiddenPage/* default */.A,{}):/*#__PURE__*/(0,jsx_runtime.jsx)(MainHeader/* default */.A,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(Grid/* default */.A,{style:{width:"99.6%"},container:true,justifyContent:"center",alignItems:"flex-start",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{xs:12,sm:8,xl:4,item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Title/* default */.A,{children:i18n/* i18n */.R.t("moments.title")})}),/*#__PURE__*/(0,jsx_runtime.jsx)(Grid/* default */.A,{style:{width:"100%",height:"100vh"},item:true,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Paper/* default */.A,{className:classes.mainPaper,variant:"outlined",style:{maxWidth:"100%"},children:/*#__PURE__*/(0,jsx_runtime.jsx)(MomentsUser,{})})})]})});};/* harmony default export */ const Moments = (ChatMoments);

/***/ }

}]);