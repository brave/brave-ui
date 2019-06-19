(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return css}),__webpack_require__.d(__webpack_exports__,"c",function(){return keyframes});__webpack_require__(0);var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2);__webpack_require__(36);const{default:styled,css:css,injectGlobal:injectGlobal,keyframes:keyframes,ThemeProvider:ThemeProvider}=styled_components__WEBPACK_IMPORTED_MODULE_1__;__webpack_exports__.b=styled},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return setTheme}),__webpack_require__.d(__webpack_exports__,"b",function(){return initLocale}),__webpack_require__.d(__webpack_exports__,"a",function(){return getLocale});const setTheme=(customStyle,prop)=>customStyle&&customStyle[prop];let local={};const initLocale=locals=>{local=locals},getLocale=(key,replacements)=>{if(!key||!local[key])return`MISSING: ${key}`;let returnVal=local[key];if(!replacements)return returnVal;for(let item in replacements)returnVal=returnVal.replace(new RegExp("{{\\s*"+item+"\\s*}}","g"),replacements[item].toString());return returnVal}},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return GenerateIconComponentForGraphic});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);function GenerateIconComponentForGraphic(Graphic){return styled_components__WEBPACK_IMPORTED_MODULE_0__.default.svg.attrs({children:[Graphic.props.children],viewBox:"0 0 32 32","aria-hidden":props=>void 0===props.title?"true":void 0,focusable:"false",role:props=>void 0!==props.title?"img":void 0})`
    width: 100%;
    height: 100%;
    fill: currentColor;
  `}},function(module,__webpack_exports__,__webpack_require__){"use strict";var es=__webpack_require__(187);var make_color=function(color,index){let isLight=index<=6,hsv=new es.a(color).toHsv(),i=isLight?6-index:index-5-1;return new es.a({h:function(hsv,i,isLight){let hue;return(hue=hsv.h>=60&&hsv.h<=240?isLight?hsv.h-0*i:hsv.h+0*i:isLight?hsv.h+0*i:hsv.h-0*i)<0?hue+=360:hue>=360&&(hue-=360),Math.round(hue)}(hsv,i,isLight),s:function(hsv,i,isLight){let saturation;return(saturation=isLight?Math.round(100*hsv.s)-16*i:4===i?Math.round(100*hsv.s)+16:Math.round(100*hsv.s)+5*i)>100&&(saturation=100),isLight&&5===i&&saturation>10&&(saturation=10),saturation<6&&(saturation=6),Math.round(saturation)}(hsv,i,isLight),v:function(hsv,i,isLight){return isLight?Math.round(100*hsv.v)+5*i:Math.round(100*hsv.v)-15*i}(hsv,i,isLight)}).toHexString()},public_api=__webpack_require__(60);const baseColors_blue="#339af0",baseColors_blurple="#4C54D2",baseColors_cyan="#22B8CF",baseColors_green="#51cf66",baseColors_grey="#AEB1C2",baseColors_magenta="#CA3BB2",baseColors_orange="#FB542B",baseColors_purple="#845ef7",baseColors_red="#E32444",baseColors_teal="#20c997",baseColors_yellow="#FFD43B",white="#FFFFFF",black="#1E2029",scaleGrey={grey000:make_color(baseColors_grey,1),grey100:make_color(baseColors_grey,2),grey200:make_color(baseColors_grey,3),grey300:make_color(baseColors_grey,4),grey400:make_color(baseColors_grey,5),grey500:baseColors_grey,grey600:make_color(baseColors_grey,7),grey700:make_color(baseColors_grey,8),grey800:make_color(baseColors_grey,9),grey900:make_color(baseColors_grey,10)},scaleCyan={cyan000:make_color(baseColors_cyan,1),cyan100:make_color(baseColors_cyan,2),cyan200:make_color(baseColors_cyan,3),cyan300:make_color(baseColors_cyan,4),cyan400:make_color(baseColors_cyan,5),cyan500:baseColors_cyan,cyan600:make_color(baseColors_cyan,7),cyan700:make_color(baseColors_cyan,8),cyan800:make_color(baseColors_cyan,9),cyan900:make_color(baseColors_cyan,10)},scaleOrange={orange000:make_color(baseColors_orange,1),orange100:make_color(baseColors_orange,2),orange200:make_color(baseColors_orange,3),orange300:make_color(baseColors_orange,4),orange400:make_color(baseColors_orange,5),orange500:baseColors_orange,orange600:make_color(baseColors_orange,7),orange700:make_color(baseColors_orange,8),orange800:make_color(baseColors_orange,9),orange900:make_color(baseColors_orange,10)},scaleBlurple={blurple000:make_color(baseColors_blurple,1),blurple100:make_color(baseColors_blurple,2),blurple200:make_color(baseColors_blurple,3),blurple300:make_color(baseColors_blurple,4),blurple400:make_color(baseColors_blurple,5),blurple500:baseColors_blurple,blurple600:make_color(baseColors_blurple,7),blurple700:make_color(baseColors_blurple,8),blurple800:make_color(baseColors_blurple,9),blurple900:make_color(baseColors_blurple,10)},scaleBlue={blue000:make_color(baseColors_blue,1),blue100:make_color(baseColors_blue,2),blue200:make_color(baseColors_blue,3),blue300:make_color(baseColors_blue,4),blue400:make_color(baseColors_blue,5),blue500:baseColors_blue,blue600:make_color(baseColors_blue,7),blue700:make_color(baseColors_blue,8),blue800:make_color(baseColors_blue,9),blue900:make_color(baseColors_blue,10)},scaleYellow={yellow000:make_color(baseColors_yellow,1),yellow100:make_color(baseColors_yellow,2),yellow200:make_color(baseColors_yellow,3),yellow300:make_color(baseColors_yellow,4),yellow400:make_color(baseColors_yellow,5),yellow500:baseColors_yellow,yellow600:make_color(baseColors_yellow,7),yellow700:make_color(baseColors_yellow,8),yellow800:make_color(baseColors_yellow,9),yellow900:make_color(baseColors_yellow,10)},scaleGreen={green000:make_color(baseColors_green,1),green100:make_color(baseColors_green,2),green200:make_color(baseColors_green,3),green300:make_color(baseColors_green,4),green400:make_color(baseColors_green,5),green500:baseColors_green,green600:make_color(baseColors_green,7),green700:make_color(baseColors_green,8),green800:make_color(baseColors_green,9),green900:make_color(baseColors_green,10)},scaleRed={red000:make_color(baseColors_red,1),red100:make_color(baseColors_red,2),red200:make_color(baseColors_red,3),red300:make_color(baseColors_red,4),red400:make_color(baseColors_red,5),red500:baseColors_red,red600:make_color(baseColors_red,7),red700:make_color(baseColors_red,8),red800:make_color(baseColors_red,9),red900:make_color(baseColors_red,10)},scalePurple={purple000:make_color(baseColors_purple,1),purple100:make_color(baseColors_purple,2),purple200:make_color(baseColors_purple,3),purple300:make_color(baseColors_purple,4),purple400:make_color(baseColors_purple,5),purple500:baseColors_purple,purple600:make_color(baseColors_purple,7),purple700:make_color(baseColors_purple,8),purple800:make_color(baseColors_purple,9),purple900:make_color(baseColors_purple,10)},scaleTeal={teal000:make_color(baseColors_teal,1),teal100:make_color(baseColors_teal,2),teal200:make_color(baseColors_teal,3),teal300:make_color(baseColors_teal,4),teal400:make_color(baseColors_teal,5),teal500:baseColors_teal,teal600:make_color(baseColors_teal,7),teal700:make_color(baseColors_teal,8),teal800:make_color(baseColors_teal,9),teal900:make_color(baseColors_teal,10)},scaleMagenta={magenta000:make_color(baseColors_magenta,1),magenta100:make_color(baseColors_magenta,2),magenta200:make_color(baseColors_magenta,3),magenta300:make_color(baseColors_magenta,4),magenta400:make_color(baseColors_magenta,5),magenta500:baseColors_magenta,magenta600:make_color(baseColors_magenta,7),magenta700:make_color(baseColors_magenta,8),magenta800:make_color(baseColors_magenta,9),magenta900:make_color(baseColors_magenta,10)},fades={blackFade15:Object(public_api.a)(black).setAlpha(.85).toHslString(),blackFade30:Object(public_api.a)(black).setAlpha(.7).toHslString(),blackFade50:Object(public_api.a)(black).setAlpha(.5).toHslString(),blackFade70:Object(public_api.a)(black).setAlpha(.3).toHslString(),blackFade85:Object(public_api.a)(black).setAlpha(.15).toHslString(),whiteFade85:Object(public_api.a)(white).setAlpha(.15).toHslString(),whiteFade70:Object(public_api.a)(white).setAlpha(.3).toHslString(),whiteFade50:Object(public_api.a)(white).setAlpha(.5).toHslString(),whiteFade30:Object(public_api.a)(white).setAlpha(.7).toHslString(),whiteFade15:Object(public_api.a)(white).setAlpha(.85).toHslString()};__webpack_exports__.a=Object.assign({},scaleBlue,scaleBlurple,scaleCyan,scaleGreen,scaleGrey,scaleMagenta,{neutral000:"#f8f9fa",neutral100:"#f1f3f5",neutral200:"#e9ecef",neutral300:"#dee2e6",neutral400:"#ced4da",neutral500:"#adb5bd",neutral600:"#868e96",neutral700:"#495057",neutral800:"#343a40",neutral900:"#212529"},scaleOrange,scalePurple,scaleRed,scaleTeal,scaleYellow,fades,{white:white,black:black})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Box}),__webpack_require__.d(__webpack_exports__,"e",function(){return HeaderBox}),__webpack_require__.d(__webpack_exports__,"b",function(){return Content}),__webpack_require__.d(__webpack_exports__,"c",function(){return DuckDuckGoImage}),__webpack_require__.d(__webpack_exports__,"m",function(){return TorLockImage}),__webpack_require__.d(__webpack_exports__,"g",function(){return PrivateImage}),__webpack_require__.d(__webpack_exports__,"l",function(){return TorImage}),__webpack_require__.d(__webpack_exports__,"i",function(){return SubTitle}),__webpack_require__.d(__webpack_exports__,"k",function(){return Title}),__webpack_require__.d(__webpack_exports__,"j",function(){return Text}),__webpack_require__.d(__webpack_exports__,"h",function(){return Separator}),__webpack_require__.d(__webpack_exports__,"f",function(){return Link}),__webpack_require__.d(__webpack_exports__,"d",function(){return FakeButton});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_components_text_heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32),_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_components_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(256),_components_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(258);const Box=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"Box"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  padding: 30px 30px 50px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.25);
`,HeaderBox=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"HeaderBox"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
`,Content=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("article").withConfig({displayName:"Content"})`
  box-sizing: border-box;
  display: block;
  min-height: 285px;
`,DuckDuckGoImage=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_icons__WEBPACK_IMPORTED_MODULE_3__.a).withConfig({displayName:"DuckDuckGoImage"})`
  box-sizing: border-box;
  display: block;
  width: 40px;
  margin-bottom: 20px;
`,TorLockImage=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_icons__WEBPACK_IMPORTED_MODULE_4__.a).withConfig({displayName:"TorLockImage"})`
  box-sizing: border-box;
  display: block;
  width: 40px;
  margin-bottom: 20px;
`,PrivateImage=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").withConfig({displayName:"PrivateImage"})`
  box-sizing: border-box;
  display: block;
  width: 293px;

  @media screen and (max-width: 1170px) {
    margin: auto;
  }
`,TorImage=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").withConfig({displayName:"TorImage"})`
  box-sizing: border-box;
  display: block;
  width: 177px;
  margin: 0 0 40px;

  @media screen and (max-width: 1170px) {
    margin: auto;
  }
`,SubTitle=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("small").withConfig({displayName:"SubTitle"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  display: block;
  color: #7642F5;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 5px;
`,Title=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_text_heading__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"Title"})`
  font-size: 38px;
  letter-spacing: 0.02px;
  font-weight: 500;
  color: #fff;
  margin: 0 0 0px;
`,Text=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("p").withConfig({displayName:"Text"})`
  font-family: ${p=>p.theme.fontFamily.body};
  letter-spacing: 0.19px;
  line-height: 26px;
  font-size: 15px;
  margin: 15px 0;
  color: #fff;
`,Separator=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("hr").withConfig({displayName:"Separator"})`
  border: 1px solid rgba(255,255,255,0.10);
  height: 0;
  width: 100%;
  margin: 25px 0 0;
`,Link=(Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__.a).withConfig({displayName:"PurpleButton"})`
  background: #5E35C3;
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 14px;
  font-weight: 500;
  padding: 14px 20px;
  margin: 25px 25px 0 0;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("a").withConfig({displayName:"Link"})`
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 14px;
  color: #814EFF;
  font-style: normal;
  line-height: 1;
  align-self: center;
  margin: 25px 20px 0 0;
  cursor: pointer;
  text-decoration: none;
`),FakeButton=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("a").withConfig({displayName:"FakeButton"})`
  display: grid;
  height: 100%;
  grid-template-columns: ${p=>p.settings?"auto 16px":"auto auto"};
  grid-template-rows: auto;
  grid-gap: ${p=>p.withToggle?"10px":"0"};
  background: #5E35C3;
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 14px;
  font-weight: 500;
  padding: 14px 20px;
  margin: 25px 25px 0 0;
  color: #fff;
  user-select: none;
  border-radius: 20px;
  min-width: 104px;
  width: fit-content;
  text-decoration: none;
  align-items: center;
  line-height: 1;

  & * {
    line-height: 15px;
  }
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return getLocale});const locale={done:"Done",remove:"Remove",copied:"Copied!",wordCount:"Word Count:",ok:"Ok",cancel:"Cancel",thisSyncChain:"from Sync Chain",lookingForDevice:"Looking for device",braveSync:"Brave Sync",syncChainDevices:"The device list below includes all devices in your sync chain. Each device can be managed from any other device.",deviceName:"device name",addedOn:"Date Added",addDevice:"Add New Device",viewSyncCode:"View Sync Code",syncSettings:"Brave Sync Settings",settings:"Settings",syncSettingsDescription:"Manage the content you would like to sync between devices. These settings only affect this device.",bookmarks:"Bookmarks",savedSiteSettings:"Saved Site Settings",browsingHistory:"Browsing History",leaveSyncChain:"Delete Sync Chain",syncTitle:"Brave Sync Setup",syncDescription:"To start, you will need Brave installed on all the devices you plan to sync. To chain them together, start a sync chain that you will use to securely link all of your devices together.",startSyncChain:"Start a new Sync Chain",enterSyncChainCode:"I have a Sync Code",confirmSyncCode:"Confirm Sync Code",enterSyncCode:"Enter Your Sync Chain Code Words",enterSyncCodeDescription:"Type your supplied sync chain code words into the form below.",confirmCode:"Confirm Sync Code",invalidCode:"Invalid sync code.",tryAgain:"Please try again.",thisDeviceRemovalDescription:"Local device data will remain intact on all devices. Other devices in this sync chain will remain synced.",otherDeviceRemovalDescription:"Removing the device from the Sync Chain will not clear previously synced data from the device.",warning:"Warning!",removing:"Removing",deleteSyncChain:"will delete the sync chain.",deleteSyncDescription:"Data currently synced will be retained but all data in Brave’s Sync cache will be deleted. You will need to start a new sync chain to sync device data again.",deleteSyncChainButton:"Delete Sync Chain",areYouSure:"Are you sure?",scanThisCode:"Sync Chain QR Code",scanThisCodeHowTo:'On your mobile device, navigate to Brave Sync in the Settings panel and click the button "Scan or enter sync code". Use your camera to scan the QR Code below.',viewCodeWords:"View Code Words",enterThisCode:"Using Brave on your computer, enter this code:",mobileEnterThisCode:"Using Brave on your mobile device, enter this code:",syncChainCodeHowTo:"Go to: Brave Settings > Sync > Enter a Sync Chain Code",chainCode:"Sync Chain Code",chainCodeDescriptionPartial1:"On your target computer, navigate to Brave Sync in settings and click the button",chainCodeDescriptionPartial2:"“I have a Sync Code”.",chainCodeDescriptionPartial3:"Enter the sync chain code words shown below.",useCameraInstead:"Use camera instead",qrCode:"View QR Code",letsSync:"Choose Device Type",chooseDeviceType:"Choose the type of device you would like to sync to.",phoneTablet:"Tablet or Phone",computer:"Computer"};const getLocale=word=>locale[word]},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var styled_components_browser_esm=__webpack_require__(2),react=__webpack_require__(0),template=__webpack_require__(5);const Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M28 15H6.28l4.85-5.25a1 1 0 0 0-.05-1.42 1 1 0 0 0-1.41.06l-6.4 6.93a.7.7 0 0 0-.1.16.75.75 0 0 0-.09.15 1 1 0 0 0 0 .74.75.75 0 0 0 .09.15.7.7 0 0 0 .1.16l6.4 6.93a1 1 0 0 0 1.41.06 1 1 0 0 0 .05-1.42L6.28 17H28a1 1 0 0 0 0-2z"}));var arrow=Object(template.a)(Graphic);const carat_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M22.4 29a1 1 0 0 1-.67-.25l-13.4-12a1 1 0 0 1 0-1.5l13.4-12a1 1 0 0 1 1.33 1.5L10.5 16l12.56 11.25A1 1 0 0 1 22.4 29z"}));var carat=Object(template.a)(carat_Graphic);const carat_circle_o_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M21.673 18.74a1.001 1.001 0 0 0 .067-1.413l-5-5.5c-.38-.417-1.101-.417-1.48 0l-5 5.5a1.001 1.001 0 0 0 1.48 1.346L16 13.987l4.26 4.686a.998.998 0 0 0 1.413.067M16 5C9.935 5 5 9.935 5 16c0 6.066 4.935 11 11 11 6.066 0 11-4.934 11-11 0-6.065-4.934-11-11-11m0 24C8.832 29 3 23.169 3 16 3 8.832 8.832 3 16 3s13 5.832 13 13c0 7.169-5.832 13-13 13"}));var carat_circle_o=Object(template.a)(carat_circle_o_Graphic);const carat_circle_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M16 29C8.832 29 3 23.169 3 16 3 8.832 8.832 3 16 3s13 5.832 13 13c0 7.169-5.832 13-13 13zm5.673-10.26a1.001 1.001 0 0 0 .067-1.413l-5-5.5c-.38-.417-1.101-.417-1.48 0l-5 5.5a1.001 1.001 0 0 0 1.48 1.346L16 13.987l4.26 4.686a.998.998 0 0 0 1.413.067z"}));var carat_circle=Object(template.a)(carat_circle_Graphic);const carat_strong_Graphic=react.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M16 19.047l11.04-9.2a1.5 1.5 0 0 1 1.92 2.305l-12 10a1.5 1.5 0 0 1-1.92 0l-12-10a1.5 1.5 0 1 1 1.92-2.304l11.04 9.2z"}));var carat_strong=Object(template.a)(carat_strong_Graphic),alert_circle=__webpack_require__(401),bookmarkBook=__webpack_require__(247);const bookmark_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M17.13 25.309c-.595-.448-1.664-.448-2.26 0l-5.54 4.146C7.702 30.676 6 29.741 6 27.705V5.245C6 3.472 7.388 2 9.118 2h13.764C24.612 2 26 3.471 26 5.246v22.459c0 2.036-1.7 2.971-3.33 1.75l-5.54-4.146z"}));var bookmark=Object(template.a)(bookmark_Graphic),bookmark_o=__webpack_require__(248),check_circle=__webpack_require__(190),check=__webpack_require__(400);const checkmark_circle_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75zm0-1.5a8.25 8.25 0 1 0 0-16.5 8.25 8.25 0 0 0 0 16.5zm-3.545-7.132l2.28 1.737 3.594-7.19a.75.75 0 1 1 1.342.67l-4 8a.75.75 0 0 1-1.126.262l-3-2.286a.75.75 0 1 1 .91-1.193z"}));var checkmark_circle_l=Object(template.a)(checkmark_circle_l_Graphic),checkmark_circle_s=__webpack_require__(402);const checkmark_circle_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.394-7.081l2.04 1.554 3.46-6.92a1 1 0 0 1 1.788.894l-4 8a1 1 0 0 1-1.5.348l-3-2.285a1 1 0 1 1 1.212-1.591z"}));var checkmark_circle_r=Object(template.a)(checkmark_circle_r_Graphic),clipboard_o=__webpack_require__(403),close_circle_o=__webpack_require__(191);const close_circle_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M20.707 19.293a.999.999 0 1 1-1.414 1.414L16 17.414l-3.293 3.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L14.586 16l-3.293-3.293a.999.999 0 1 1 1.414-1.414L16 14.586l3.293-3.293a.999.999 0 1 1 1.414 1.414L17.414 16l3.293 3.293zM16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3z"}));var close_circle=Object(template.a)(close_circle_Graphic),icons_close=__webpack_require__(192),download=__webpack_require__(404);const edit_o_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M24.839 11.404L20.596 7.16 8.222 19.536l4.243 4.242 12.374-12.374zm1.414-1.414l.354-.354a3 3 0 1 0-4.243-4.243l-.353.354 4.242 4.243zM12.475 26.597a.995.995 0 0 1-.513.281l-7.02 1.466a1 1 0 0 1-1.187-1.167l1.363-7.122c.04-.21.143-.39.285-.529L20.95 3.98a5 5 0 0 1 7.07 7.071L12.476 26.597zm-1.563-1.543l-3.957-3.957-.953 4.982 4.91-1.025z"}));var edit_o=Object(template.a)(edit_o_Graphic);const embed_o_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M5.317 16l5.442 6.35a1 1 0 1 1-1.518 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 0 1 1.518 1.3L5.317 16zm15.924 6.35L26.683 16 21.24 9.65a1 1 0 0 1 1.518-1.3l6 7a1 1 0 0 1 0 1.3l-6 7a1 1 0 1 1-1.518-1.3zm-6.777 2.918a1 1 0 0 1-1.928-.536l5-18a1 1 0 1 1 1.928.536l-5 18z"}));var embed_o=Object(template.a)(embed_o_Graphic),emote_sad=__webpack_require__(405);const emote_smile_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3zm0 24a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"}),react.createElement("path",{d:"M22.43 17.1a1 1 0 0 0-1.33.47A5.69 5.69 0 0 1 16 21a5.71 5.71 0 0 1-5.1-3.43 1 1 0 1 0-1.8.86A7.7 7.7 0 0 0 16 23a7.66 7.66 0 0 0 6.9-4.57 1 1 0 0 0-.47-1.33z"}),react.createElement("circle",{cx:"12",cy:"12",r:"2"}),react.createElement("circle",{cx:"20",cy:"12",r:"2"}));var emote_smile=Object(template.a)(emote_smile_Graphic);const graph_o_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M3 18a1 1 0 0 1 2 0v9a1 1 0 0 1-2 0v-9zm4 4a1 1 0 0 1 2 0v5a1 1 0 0 1-2 0v-5zm4-5a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0V17zm4 3a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0v-7zm4-4a1 1 0 0 1 2 0v11a1 1 0 0 1-2 0V16zm4 2a1 1 0 0 1 2 0v9a1 1 0 0 1-2 0v-9zm4-5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0V13zM8.825 15.566A1 1 0 0 1 7.4 15.8l-4-3a1 1 0 1 1 1.2-1.6l3.165 2.374 3.41-4.971a1 1 0 0 1 1.241-.344l3.29 1.507 3.513-4.39a1 1 0 0 1 1.562 0l3.08 3.85 3.27-5.722a1 1 0 1 1 1.737.992l-4 7a1 1 0 0 1-1.649.129L20 7.6l-3.22 4.024a1 1 0 0 1-1.196.284l-3.235-1.48-3.524 5.137z"}));var graph_o=Object(template.a)(graph_o_Graphic),icons_history=__webpack_require__(249);const logo_youtube_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M28 8.91a4.4 4.4 0 0 0-3-2.37A54.4 54.4 0 0 0 16 6a54.26 54.26 0 0 0-9 .54 4.44 4.44 0 0 0-3 2.37A19.4 19.4 0 0 0 3 16a19.4 19.4 0 0 0 1 7.09 4.44 4.44 0 0 0 3 2.37 54.26 54.26 0 0 0 9 .54 54.26 54.26 0 0 0 9-.54 4.4 4.4 0 0 0 3-2.37A19 19 0 0 0 29 16a19 19 0 0 0-1-7.09zm-1.87 13.38a2.45 2.45 0 0 1-1.49 1.21A55 55 0 0 1 16 24a55 55 0 0 1-8.63-.5 2.43 2.43 0 0 1-1.49-1.21A17.8 17.8 0 0 1 5 16a17.8 17.8 0 0 1 .87-6.29A2.43 2.43 0 0 1 7.36 8.5 55.13 55.13 0 0 1 16 8a55 55 0 0 1 8.63.5 2.45 2.45 0 0 1 1.49 1.21A17.8 17.8 0 0 1 27 16a17.8 17.8 0 0 1-.87 6.29z"}),react.createElement("path",{d:"M20.51 15.09l-7-4a1 1 0 0 0-1 0A1 1 0 0 0 12 12v8a1 1 0 0 0 .5.87 1 1 0 0 0 .5.13 1 1 0 0 0 .5-.13l7-4A1 1 0 0 0 21 16a1 1 0 0 0-.49-.91z"}));var logo_youtube=Object(template.a)(logo_youtube_Graphic),logo_twitter=__webpack_require__(406);const logo_facebook_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M26.636 3H5.364A2.363 2.363 0 0 0 3 5.364v21.272A2.363 2.363 0 0 0 5.364 29h11.818V18.364h-3.546v-3.546h3.546v-1.904c0-3.604 1.756-5.187 4.752-5.187 1.435 0 2.193.107 2.553.155v3.39h-2.044c-1.271 0-1.716.672-1.716 2.031v1.515h3.728l-.506 3.546h-3.222V29h5.91A2.363 2.363 0 0 0 29 26.636V5.364A2.364 2.364 0 0 0 26.636 3z"}));var logo_facebook=Object(template.a)(logo_facebook_Graphic),open_new=__webpack_require__(250);const payment_due_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M27 4h-6V3a1 1 0 0 0-2 0v1h-6V3a1 1 0 0 0-2 0v1H5a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H5V6h6v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h6z"}),react.createElement("path",{d:"M20.19 11.41L14.9 18.7l-3.3-2.5a1 1 0 0 0-1.2 1.6l4.1 3.11a1 1 0 0 0 .61.2h.14a1 1 0 0 0 .67-.4l5.89-8.11a1 1 0 1 0-1.62-1.18z"}));var payment_due=Object(template.a)(payment_due_Graphic);const pin_o_Graphic=react.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M19.897 3l-.703.958-5.015 6.836c-2.687-.468-5.53.291-7.602 2.363l-.734.703 5.43 5.43L3 27.563V29h1.437l8.273-8.273 5.43 5.43.703-.734c2.072-2.073 2.83-4.915 2.363-7.602l6.836-5.015.958-.703L19.897 3zm.255 3.13l5.718 5.718-6.356 4.663-.575.415.191.671c.491 1.873-.044 3.825-1.214 5.462l-8.975-8.975c1.637-1.17 3.59-1.705 5.462-1.214l.67.191.416-.575 4.663-6.356z"}));var pin_o=Object(template.a)(pin_o_Graphic),pin=__webpack_require__(251),print=__webpack_require__(407);const refresh_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M27.35 19.22a1 1 0 0 0-1.29.59A10.89 10.89 0 1 1 15.87 5a10.76 10.76 0 0 1 6.36 2.08A4 4 0 1 0 25 6a3.86 3.86 0 0 0-.84.09 12.64 12.64 0 0 0-8.29-3 13 13 0 1 0 12.07 17.42 1 1 0 0 0-.59-1.29z"}));var refresh=Object(template.a)(refresh_Graphic),send=__webpack_require__(408),settings_advanced=__webpack_require__(252),settings=__webpack_require__(193),shield_alert=__webpack_require__(253);const shield_alert_o_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26 6.2h-2.47c-4.8 0-6.59-2.63-6.66-2.74a1.1 1.1 0 0 0-1.74 0c-.07.11-1.86 2.74-6.68 2.74H6a1 1 0 0 0-1 1v5.59c0 .13 0 12.43 10.67 16.15a.94.94 0 0 0 .66 0C27 25.22 27 12.92 27 12.8V7.2a1 1 0 0 0-1-1zm-1 6.61c0 .44 0 10.75-9 14.13-9-3.38-9-13.69-9-14.14V8.2h1.47A10.47 10.47 0 0 0 16 5.49a10.49 10.49 0 0 0 7.53 2.71H25z"}),react.createElement("path",{d:"M16 9.8a1 1 0 0 0-1 1V17a1 1 0 0 0 2 0v-6.2a1 1 0 0 0-1-1zM15.29 20.09a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0 1 1 0 0 0-1.42-1.42z"}));var shield_alert_o=Object(template.a)(shield_alert_o_Graphic),trash_o=__webpack_require__(409),trash=__webpack_require__(410),thumbs_up=__webpack_require__(411),logo_uphold=__webpack_require__(412),unverified_s=__webpack_require__(413),verified_s=__webpack_require__(414),wallet_info=__webpack_require__(415),wallet_add=__webpack_require__(105);const wallet_backup_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H17a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM23.31 17a4.53 4.53 0 0 0-2.65.88l.34-1.52a1 1 0 1 0-1.94-.46l-.91 3.81a1 1 0 0 0 .74 1.2l3.81.92a.86.86 0 0 0 .23 0 1 1 0 0 0 .23-2l-1.42-.34a2.48 2.48 0 0 1 1.57-.49 2.5 2.5 0 1 1 0 5 1 1 0 0 0 0 2 4.5 4.5 0 1 0 0-9z"}));var wallet_backup=Object(template.a)(wallet_backup_Graphic);const wallet_block_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM24 16a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm3 5a3 3 0 0 1-.3 1.29l-4-4A2.9 2.9 0 0 1 24 18a3 3 0 0 1 3 3zm-6 0a3 3 0 0 1 .3-1.29l4 4A3 3 0 0 1 21 21z"}));var wallet_block=Object(template.a)(wallet_block_Graphic);const wallet_close_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM28.71 18.29a1 1 0 0 0-1.42 0L25 20.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L26.41 22l2.3-2.29a1 1 0 0 0 0-1.42z"}));var wallet_close=Object(template.a)(wallet_close_Graphic);const wallet_check_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM26.22 19.38l-3.3 4.12-1.21-1.21a1 1 0 0 0-1.42 1.42l2 2A1 1 0 0 0 23 26h.06a1 1 0 0 0 .72-.38l4-5a1 1 0 1 0-1.56-1.24z"}));var wallet_check=Object(template.a)(wallet_check_Graphic),wallet_import=__webpack_require__(254);const wallet_lock_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react.createElement("path",{d:"M28 18.17h-1v-.67a3.29 3.29 0 0 0-3-3.5 3.29 3.29 0 0 0-3 3.5v.67h-1a1 1 0 0 0-1 1V25a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5.83a1 1 0 0 0-1-1zm-5-.67c0-.8.47-1.5 1-1.5s1 .7 1 1.5v.67h-2zm4 6.5h-6v-3.83h6zM8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}));var wallet_lock=Object(template.a)(wallet_lock_Graphic);const wallet_manage_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26h18.86A2.6 2.6 0 0 0 29 23.36V8.64A2.6 2.6 0 0 0 26.43 6zM5 14h6v4H5zm22 9.36a.61.61 0 0 1-.57.64H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}));var wallet_manage=Object(template.a)(wallet_manage_Graphic);const wallet_minus_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM27 21h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"}));var wallet_minus=Object(template.a)(wallet_minus_Graphic);const wallet_open_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{d:"M26.43 6h-1.3L10.32 2a1 1 0 0 0-1.25 1v3h-1.5A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26h18.86A2.6 2.6 0 0 0 29 23.36V8.64A2.6 2.6 0 0 0 26.43 6zM11.07 4.3L17.4 6h-6.33zM5 14h6v4H5zm22 9.36a.61.61 0 0 1-.57.64H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64z"}),react.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"}));var wallet_open=Object(template.a)(wallet_open_Graphic),wallet_withdraw=__webpack_require__(255);const block_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 2C6.47718 2 2 6.47714 2 12s4.47718 10 10 10 10-4.47718 10-10S17.52286 2 12 2zm5.24629 4.75371c2.63903 2.63903 2.82258 6.67262.83375 9.5015L7.74476 5.92c2.8308-1.99016 6.86395-1.80383 9.50153.83371zM6.75371 17.24629c-2.63903-2.63903-2.82258-6.67262-.83375-9.5015L16.25524 18.08c-2.83076 1.99016-6.86395 1.80387-9.50153-.83371z"}));var block_s=Object(template.a)(block_s_Graphic);const block_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 2C6.47714 2 2 6.47714 2 12s4.47714 10 10 10 10-4.47714 10-10S17.52286 2 12 2zM5.84133 18.15867c-3.25089-3.25089-3.3931-8.42569-.43952-11.84448l12.28404 12.284c-3.41952 2.95419-8.59428 2.81072-11.84452-.43952zm12.75686-.47286l-12.284-12.284c3.41952-2.95415 8.59424-2.81068 11.84448.43952 3.25089 3.25085 3.3931 8.42569.43952 11.84448z"}));var block_l=Object(template.a)(block_l_Graphic);const block_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 2C6.47714 2 2 6.47714 2 12s4.47714 10 10 10 10-4.47714 10-10S17.52286 2 12 2zm5.70246 4.29754c2.95064 2.9506 3.10685 7.55246.6437 10.68004L7.02243 5.65383c3.12855-2.46391 7.7302-2.30617 10.68004.64371zM6.29754 17.70246C3.3469 14.75186 3.19069 10.15 5.65384 7.02242l11.32374 11.32375c-3.12855 2.46391-7.7302 2.30617-10.68004-.64371z"}));var block_r=Object(template.a)(block_r_Graphic);const carat_triangle_down_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M3.36242 7h17.26845c1.19463 0 1.79195 1.3994.94631 2.21953l-8.63087 8.37692c-.5235.5077-1.37584.5077-1.89933 0L2.41611 9.21953C1.57047 8.3994 2.16779 7 3.3624 7z"}));var carat_triangle_down_s=Object(template.a)(carat_triangle_down_s_Graphic);const carat_triangle_down_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M19.998 6H4.00237C2.22582 6 1.32945 8.1555 2.5882 9.41419l7.99762 8c.781.781 2.04738.78106 2.82844 0l7.998-8C22.66844 8.158 21.77812 6 19.998 6zM12 16L4 8h16l-8 8z"}));var carat_triangle_down_l=Object(template.a)(carat_triangle_down_l_Graphic);const carat_triangle_down_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M18.94704 6H4.99688c-2.6542 0-4 3.23125-2.11214 5.11875l6.97196 7c1.1651 1.16875 3.05919 1.16875 4.23053 0l6.9782-7C22.93457 9.2375 21.60747 6 18.94703 6zm-6.9782 10L4.99066 9h13.9564l-6.9782 7z"}));var carat_triangle_down_r=Object(template.a)(carat_triangle_down_r_Graphic);const carat_triangle_left_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M17.5 3.36242v17.26845c0 1.19463-1.3994 1.79195-2.21953.94631l-8.37692-8.63087c-.5077-.5235-.5077-1.37584 0-1.89933l8.37692-8.63087C16.1006 1.57047 17.5 2.16779 17.5 3.3624z"}));var carat_triangle_left_s=Object(template.a)(carat_triangle_left_s_Graphic);const carat_triangle_left_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M18 19.998V4.00237c0-1.77656-2.1555-2.67293-3.41419-1.41418l-8 7.99762c-.781.781-.78106 2.04738 0 2.82844l8 7.998C15.842 22.66844 18 21.77812 18 19.998zM8 12l8-8v16l-8-8z"}));var carat_triangle_left_l=Object(template.a)(carat_triangle_left_l_Graphic);const carat_triangle_left_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M18.5 18.94704V4.99688c0-2.6542-3.23125-4-5.11875-2.11214l-7 6.97196c-1.16875 1.1651-1.16875 3.05919 0 4.23053l7 6.9782c1.88125 1.86914 5.11875.54204 5.11875-2.1184zm-10-6.9782l7-6.97819v13.95639l-7-6.9782z"}));var carat_triangle_left_r=Object(template.a)(carat_triangle_left_r_Graphic);const carat_triangle_right_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M6.5 20.63758V3.36913c0-1.19463 1.3994-1.79195 2.21953-.94631l8.37692 8.63087c.5077.5235.5077 1.37584 0 1.89933l-8.37692 8.63087C7.8994 22.42953 6.5 21.83221 6.5 20.6376z"}));var carat_triangle_right_s=Object(template.a)(carat_triangle_right_s_Graphic);const carat_triangle_right_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M6 4.002v15.99563c0 1.77656 2.1555 2.67293 3.41419 1.41418l8-7.99762c.781-.781.78106-2.04738 0-2.82844l-8-7.998C8.158 1.33156 6 2.22187 6 4.002zM16 12l-8 8V4l8 8z"}));var carat_triangle_right_l=Object(template.a)(carat_triangle_right_l_Graphic);const carat_triangle_right_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M5.5 5.05296v13.95016c0 2.6542 3.23125 4 5.11875 2.11214l7-6.97196c1.16875-1.1651 1.16875-3.05919 0-4.23053l-7-6.9782C8.7375 1.06543 5.5 2.39253 5.5 5.05297zm10 6.9782l-7 6.97819V5.05295l7 6.9782z"}));var carat_triangle_right_r=Object(template.a)(carat_triangle_right_r_Graphic);const carat_triangle_up_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M20.63758 17H3.36913c-1.19463 0-1.79195-1.3994-.94631-2.21953l8.63087-8.37692c.5235-.5077 1.37584-.5077 1.89933 0l8.63087 8.37692C22.42953 15.6006 21.83221 17 20.6376 17z"}));var carat_triangle_up_s=Object(template.a)(carat_triangle_up_s_Graphic);const carat_triangle_up_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M4.002 18h15.99563c1.77656 0 2.67293-2.1555 1.41418-3.41419l-7.99762-8c-.781-.781-2.04738-.78106-2.82844 0l-7.998 8C1.33156 15.842 2.22187 18 4.002 18zM12 8l8 8H4l8-8z"}));var carat_triangle_up_l=Object(template.a)(carat_triangle_up_l_Graphic);const carat_triangle_up_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M5.05296 18h13.95016c2.6542 0 4-3.23125 2.11214-5.11875l-6.97196-7c-1.1651-1.16875-3.05919-1.16875-4.23053 0l-6.9782 7C1.06543 14.7625 2.39253 18 5.05297 18zm6.9782-10l6.97819 7H5.05295l6.9782-7z"}));var carat_triangle_up_r=Object(template.a)(carat_triangle_up_r_Graphic);const heart_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M20.06238 4.26682c-2.13645-1.87217-5.31384-1.53542-7.27486.5452l-.76803.81382-.76803-.81381c-1.95711-2.08063-5.1384-2.41738-7.27485-.54521-2.44834 2.14877-2.577 6.00534-.38597 8.33452l7.54386 8.0098c.48733.51715 1.27876.51715 1.76608 0l7.54386-8.0098c2.19494-2.32918 2.06628-6.18575-.38206-8.33452z"}));var heart_s=Object(template.a)(heart_s_Graphic);const heart_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M20.06238 4.16496c-2.12476-1.76072-5.30215-1.46853-7.27486.51227l-.76803.7741-.76803-.7703c-1.59064-1.60134-4.79922-2.56518-7.27485-.51607-2.44834 2.03392-2.577 5.68437-.38597 7.88526l7.54386 7.5817c.24172.24286.5614.36808.8811.36808.31968 0 .63937-.12143.88109-.36808l7.54386-7.5817c2.19883-2.20089 2.07017-5.85134-.37817-7.88526zm-.51072 7.04285l-7.51657 7.5817-7.54776-7.5817c-1.49708-1.50268-1.80897-4.36763.3002-6.11696 2.13645-1.7759 4.64717-.48951 5.56725.43638l1.66471 1.67344 1.66472-1.67344c.90448-.91071 3.4386-2.2009 5.56725-.43638 2.10527 1.74553 1.79727 4.61049.3002 6.11696z"}));var heart_l=Object(template.a)(heart_l_Graphic);const heart_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M19.90625 4.332c-2.25781-1.944-5.7461-1.652-7.90625.6-2.16016-2.252-5.64844-2.548-7.90625-.6-2.9375 2.532-2.50781 6.66-.41406 8.848l6.85156 7.148c.39063.408.91406.636 1.46875.636.5586 0 1.07813-.224 1.46875-.632l6.85156-7.148c2.08985-2.188 2.52735-6.316-.41406-8.852zm-.92188 7.5l-6.85156 7.148c-.09375.096-.17187.096-.26562 0l-6.85157-7.148c-1.42578-1.488-1.71484-4.304.28516-6.028 1.51953-1.308 3.86328-1.112 5.33203.42L12 7.652l1.36719-1.428c1.47656-1.54 3.82031-1.728 5.33203-.424 1.9961 1.724 1.69922 4.556.28515 6.032z"}));var heart_r=Object(template.a)(heart_r_Graphic);const more_vert_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 9.09677c1.65833 0 3 1.2984 3 2.90323 0 1.60484-1.34167 2.90323-3 2.90323S9 13.60483 9 12c0-1.60484 1.34167-2.90323 3-2.90323zM9 4.90323c0 1.60483 1.34167 2.90322 3 2.90322s3-1.29839 3-2.90322C15 3.29839 13.65833 2 12 2S9 3.29839 9 4.90323zm0 14.19354C9 20.70161 10.34167 22 12 22s3-1.29839 3-2.90323c0-1.60483-1.34167-2.90322-3-2.90322s-3 1.29839-3 2.90322z"}));var more_vert_s=Object(template.a)(more_vert_s_Graphic);const more_vert_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 9.89474c1.10625 0 2 .94079 2 2.10526s-.89375 2.10526-2 2.10526S10 13.16447 10 12s.89375-2.10526 2-2.10526zm-2-5.78948c0 1.16448.89375 2.10527 2 2.10527s2-.9408 2-2.10527C14 2.9408 13.10625 2 12 2s-2 .94079-2 2.10526zm0 15.78948C10 21.0592 10.89375 22 12 22s2-.94079 2-2.10526c0-1.16448-.89375-2.10527-2-2.10527s-2 .9408-2 2.10527z"}));var more_vert_l=Object(template.a)(more_vert_l_Graphic);const more_vert_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M12 9.6c1.3802 0 2.5 1.075 2.5 2.4s-1.1198 2.4-2.5 2.4-2.5-1.075-2.5-2.4 1.1198-2.4 2.5-2.4zM9.5 4.4c0 1.325 1.1198 2.4 2.5 2.4s2.5-1.075 2.5-2.4S13.3802 2 12 2 9.5 3.075 9.5 4.4zm0 15.2c0 1.325 1.1198 2.4 2.5 2.4s2.5-1.075 2.5-2.4-1.1198-2.4-2.5-2.4-2.5 1.075-2.5 2.4z"}));var more_vert_r=Object(template.a)(more_vert_r_Graphic);const thumbsdown_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M2 4.1875v9.375c0 .51777.4189.9375.93567.9375h3.11891c.51677 0 .93567-.41973.93567-.9375v-9.375c0-.51777-.4189-.9375-.93567-.9375h-3.1189C2.4189 3.25 2 3.66973 2 4.1875zM3.55945 12c0-.51777.41891-.9375.93568-.9375.51676 0 .93567.41973.93567.9375 0 .51777-.4189.9375-.93567.9375s-.93568-.41973-.93568-.9375zm10.6043 10c-.78687 0-1.14952-1.53488-1.32285-2.25762-.20297-.84633-.41283-1.72148-.98998-2.30086-1.26585-1.27047-1.92995-2.88933-3.47435-4.4184a.46843.46843 0 0 1-.13871-.33285V4.33988c0-.2555.2044-.46398.45937-.46867.6172-.01133 1.43057-.35465 2.05267-.63195C11.98788 2.68742 13.52862 2.00066 15.41111 2h.11088c1.66772 0 3.63988.01613 4.43563 1.1616.32718.47098.40725 1.05602.23969 1.74344.63595.66613.97711 1.90871.63867 2.9202.68398.9153.74632 2.19265.36289 3.10425l.00429.0043c.46366.46676.76113 1.22105.75785 1.92176-.00608 1.18562-1.01976 2.26945-2.32175 2.26945H15.6734c.28487 1.10703 1.29735 2.0364 1.29735 3.69328C16.97076 21.6875 15.09942 22 14.16374 22z"}));var thumbsdown_s=Object(template.a)(thumbsdown_s_Graphic);const thumbsdown_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M21.3628 10.8405c.21435-.8725.11026-1.94843-.37531-2.71113.16818-.92843-.12082-1.92878-.71053-2.62128C20.3518 3.40242 19.06628 2 16.75509 2.00055c-.13111-.00118-1.38433-.00012-1.59895 0-2.99657-.00082-5.51805 1.56195-6.91832 1.56195H7.815c-.21988-.19434-.50846-.3125-.82476-.3125H3.24756C2.55856 3.25 2 3.80965 2 4.5v10c0 .69035.55856 1.25 1.24756 1.25h3.7427c.689 0 1.24756-.55965 1.24756-1.25v-.48754c.03314.0104.06444.02145.09286.03344.8428.4541 2.24577 2.69043 3.16468 3.61113.38597.38672.51142 1.03281.64425 1.71684.22234 1.14496.6563 2.62613 1.8257 2.62613 2.3239 0 3.23231-1.35438 3.23231-3.63594 0-1.20726-.46686-2.04879-.80682-2.72722h2.7349c1.58494 0 2.83531-1.36313 2.83535-2.8348-.00004-.80204-.21123-1.45864-.59824-1.96153zM6.99026 14.5h-3.7427v-10h3.7427v10zm12.1354-.1132h-4.36643c0 1.5909 1.19084 2.32922 1.19084 3.97722 0 .99899 0 2.38637-1.98476 2.38637-.79388-.79547-.39696-2.78406-1.5878-3.97723-1.11528-1.11746-2.77863-3.97726-3.9695-3.97726h-.17018V4.8414H8.408c1.35287 0 3.96951-1.5909 6.74815-1.5909.13567 0 1.45867-.00116 1.5878 0 1.49126.01438 2.5538.72009 2.23048 2.77243.6381.34297 1.1126 1.53262.58539 2.42172.84175.43035.84175 2.30535.21863 2.76035.62312.17.9389.79547.93501 1.5909-.0039.79547-.70164 1.5909-1.5878 1.5909zM6.05458 12.625c0 .51777-.4189.9375-.93567.9375s-.93567-.41973-.93567-.9375c0-.51777.4189-.9375.93567-.9375.51676 0 .93567.41973.93567.9375z"}));var thumbsdown_l=Object(template.a)(thumbsdown_l_Graphic);const thumbsdown_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M21.42792 11.24123c.19475-.92888.036-1.82675-.37459-2.58357.12325-.97896-.16754-1.99193-.7225-2.74764C20.29108 3.61696 18.83821 2 15.625 2c-.29167 0-.625.00041-.92583.00041-4.31605 0-5.65763 1.64021-7.36584 1.64021h-.45187C6.64646 3.43657 6.33804 3.3125 6 3.3125H3.33333C2.59696 3.3125 2 3.90013 2 4.625v9.84375c0 .72487.59696 1.3125 1.33333 1.3125H6c.49342 0 .92396-.26406 1.1545-.65625h.29383c.79775.69534 1.91721 2.48772 2.865 3.4207.56946.56056.42305 4.4543 2.99 4.4543 2.39917 0 3.96959-1.30988 3.96959-4.29557 0-.7551-.16375-1.38345-.36875-1.90886h1.52c2.02508 0 3.57583-1.70482 3.57583-3.51012 0-.78545-.20667-1.43514-.57208-2.04422zm-16.76125 2.8994c-.5523 0-1-.44072-1-.98438s.4477-.98438 1-.98438c.55229 0 1 .44072 1 .98438s-.44771.98438-1 .98438zm13.7575.68619h-4.33292c0 1.5512 1.18167 2.27103 1.18167 3.87761 0 .97412 0 2.32682-1.96959 2.32682-.78791-.7756-.39416-2.71441-1.57583-3.87762-1.10667-1.08978-2.7575-3.99738-3.93917-3.99738h-.455V5.52037c2.2338 0 4.16671-1.55121 7.15167-1.55121h1.57583c1.47967 0 2.53417.70219 2.21334 2.70293.63333.33469 1.10416 1.4946.58083 2.36127.8992.83606.77912 2.09446.21708 2.69144.39375 0 .93167.77561.92792 1.5508-.00375.77561-.69625 1.55122-1.57583 1.55122z"}));var thumbsdown_r=Object(template.a)(thumbsdown_r_Graphic);const thumbsup_s_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M6.0625 10.75h-3.125c-.51777 0-.9375.41973-.9375.9375v9.375c0 .51777.41973.9375.9375.9375h3.125C6.58027 22 7 21.58027 7 21.0625v-9.375c0-.51777-.41973-.9375-.9375-.9375zM4.5 20.4375c-.51777 0-.9375-.41973-.9375-.9375 0-.51777.41973-.9375.9375-.9375.51777 0 .9375.41973.9375.9375 0 .51777-.41973.9375-.9375.9375zM17 5.18172c0 1.65687-1.01445 2.58625-1.29988 3.69328h3.97355c1.30457 0 2.3202 1.08383 2.3263 2.26945.00327.7007-.29477 1.45504-.75934 1.92176l-.0043.0043c.38422.9116.32176 2.18894-.3636 3.10426.3391 1.01152-.0027 2.25406-.63992 2.9202.1679.68741.08766 1.27245-.24015 1.74343C19.19539 21.98387 17.21937 22 15.5484 22l-.11113-.00004c-1.88622-.00066-3.42993-.68742-4.67032-1.23926-.62332-.2773-1.43832-.62058-2.05668-.63195-.25547-.00469-.46027-.21316-.46027-.46867v-8.3504c0-.125.05008-.24495.13898-.33284 1.54743-1.52907 2.21282-3.14793 3.48114-4.4184.57828-.57938.7886-1.45453.99191-2.30086C13.03574 3.53488 13.3991 2 14.1875 2 15.125 2 17 2.3125 17 5.18172z"}));var thumbsup_s=Object(template.a)(thumbsup_s_Graphic);const thumbsup_l_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M21.40063 13.1595C21.7884 12.6566 22 12 22 11.19796c-.00004-1.47164-1.25285-2.8348-2.8409-2.8348h-2.74023c.34062-.67844.8084-1.51997.8084-2.72723C17.2273 3.35437 16.3171 2 13.98867 2 12.817 2 12.3822 3.48117 12.15941 4.6261c-.13308.68402-.25882 1.33015-.6455 1.71683C10.5932 7.26367 9.1875 9.5 8.34305 9.9541c-.08551.03602-.19477.06438-.31375.08684C7.80379 9.71422 7.427 9.5 7 9.5H3.25c-.69035 0-1.25.55965-1.25 1.25v10c0 .69035.55965 1.25 1.25 1.25H7c.69035 0 1.25-.55965 1.25-1.25v-.3414c1.26934 0 3.93309 1.59167 6.93184 1.59085.21504.00012 1.4707.00117 1.60207 0 2.3157.00055 3.6037-1.40183 3.5287-3.50754.5909-.69246.88044-1.69285.71192-2.62129.48656-.76273.59086-1.83867.3761-2.71113zM3.25 20.75v-10H7v10H3.25zm16.56316-7.955c.62434.455.62434 2.33-.21902 2.76035.5282.88906.05281 2.07875-.58652 2.42172.32394 2.05234-.74067 2.75805-2.23485 2.77242-.12937.00117-1.45496 0-1.5909 0-2.84878 0-5.26335-1.5909-6.93183-1.5909V11.2041c1.47297 0 2.82441-2.65387 4.14777-3.97726 1.19317-1.19317.79543-3.1818 1.5909-3.97723 1.98863 0 1.98863 1.38738 1.98863 2.38637 0 1.648-1.19316 2.38632-1.19316 3.97722h4.37496c.8879 0 1.587.79547 1.5909 1.5909.00387.79543-.31254 1.4209-.93688 1.5909zM6.0625 18.875c0 .51777-.41973.9375-.9375.9375-.51777 0-.9375-.41973-.9375-.9375 0-.51777.41973-.9375.9375-.9375.51777 0 .9375.41973.9375.9375z"}));var thumbsup_l=Object(template.a)(thumbsup_l_Graphic);const thumbsup_r_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react.createElement("path",{d:"M21.42792 12.75877C21.79333 12.14969 22 11.5 22 10.71455c0-1.8053-1.55075-3.51012-3.57583-3.51012h-1.52c.205-.5254.36875-1.15377.36875-1.90886C17.27292 2.30987 15.7025 1 13.30333 1c-2.56696 0-2.42054 3.89374-2.99 4.4543-.94779.93298-2.06729 2.72536-2.865 3.4207h-4.115C2.59696 8.875 2 9.46263 2 10.1875v9.84375c0 .72487.59696 1.3125 1.33333 1.3125H6c.62054 0 1.142-.4173 1.29075-.98232 1.85454.04105 3.1275 1.63816 7.40842 1.63816.30083 0 .63416.00041.92583.00041 3.2132 0 4.66608-1.61696 4.70583-3.91002.55496-.75571.8458-1.76868.7225-2.74764.41059-.75682.56934-1.65469.37459-2.58357zM18.855 14.96664c.52333.86666.0525 2.02658-.58083 2.36127.32083 2.00074-.73367 2.70293-2.21334 2.70293H14.485c-2.98496 0-4.91788-1.55121-7.15167-1.55121v-7.63588h.455c1.18167 0 2.8325-2.9076 3.93917-3.99738 1.18167-1.1632.78792-3.10201 1.57583-3.87762 1.96959 0 1.96959 1.3527 1.96959 2.32682 0 1.60658-1.18167 2.3264-1.18167 3.87761h4.33292c.87958 0 1.57208.7756 1.57583 1.55121.00375.7752-.53417 1.5508-.92792 1.5508.56205.59699.68213 1.85539-.21708 2.69145zM5.66667 18.71875c0 .54366-.44771.98438-1 .98438-.5523 0-1-.44072-1-.98438s.4477-.98438 1-.98438c.55229 0 1 .44072 1 .98438z"}));var thumbsup_r=Object(template.a)(thumbsup_r_Graphic),fc_ads_megaphone=__webpack_require__(416),fc_logo_bat=__webpack_require__(158);const fc_logo_bat_grey_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react.createElement("path",{fillRule:"evenodd",fill:"#fff",d:"M9.61 23.25h12.78L16 12 9.61 23.25z"}),react.createElement("path",{d:"M3 26.8l7.67-4.52L16 13V4a.45.45 0 0 0-.38.28l-6.27 11-6.26 11a.48.48 0 0 0 0 .48",fill:"#b0b0b0",fillRule:"evenodd"}),react.createElement("path",{d:"M16 4v9l5.29 9.31L29 26.8a.48.48 0 0 0-.05-.48l-6.26-11-6.27-11A.45.45 0 0 0 16 4",fill:"#6c6c6c",fillRule:"evenodd"}),react.createElement("path",{d:"M29 26.8l-7.67-4.52H10.71L3 26.8a.47.47 0 0 0 .43.2h25.1a.47.47 0 0 0 .43-.2",fill:"#464646",fillRule:"evenodd"}));var fc_logo_bat_grey=Object(template.a)(fc_logo_bat_grey_Graphic),fc_logo_bitcoin=__webpack_require__(417),fc_logo_ddg=__webpack_require__(256),fc_logo_ethereum=__webpack_require__(418),fc_logo_litecoin=__webpack_require__(419),loader=__webpack_require__(257),paper_airplane=__webpack_require__(420),fc_logo_reddit=__webpack_require__(421),fc_rewards_activate=__webpack_require__(422),fc_rewards_send_tips=__webpack_require__(423),tor_lock=__webpack_require__(258),fc_logo_twitch=__webpack_require__(424),fc_logo_twitter=__webpack_require__(425),fc_logo_github=__webpack_require__(426),fc_logo_uphold=__webpack_require__(259),fc_logo_vimeo=__webpack_require__(427),fc_logo_youtube=__webpack_require__(428),gift=__webpack_require__(429);const love_Graphic=react.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},react.createElement("defs",null,react.createElement("path",{id:"love",d:"M18.51508 15.5898c.50242-.4792.50171-1.24242-.00134-1.72006-.52004-.49164-1.37111-.49278-1.8927-.00342a.51555.51555 0 0 1-.04039.03499l-.51938.41343a.49622.49622 0 0 1-.08594.05816.52192.52192 0 0 1-.04952.02303c-.11814.04727-.25191.0484-.37229.00009a.49669.49669 0 0 1-.13546-.0811l-.51996-.41341a.5061.5061 0 0 1-.03717-.03192.1839.1839 0 0 1-.00366-.00345c-.52094-.48913-1.37236-.48799-1.89127.003-.50495.47903-.50495 1.2435 0 1.72252a.50742.50742 0 0 1 .02344.02374l2.74975 2.8606 2.75518-2.86561a.50828.50828 0 0 1 .0207-.0206zm.69517.71886l-2.78316 2.8947c-.3765.39502-.99803.39502-1.37432.00154l-2.78542-2.8977c-.9102-.87422-.90673-2.29348.01088-3.164.90065-.85217 2.34604-.85737 3.25334-.01559l.2078.16522.20753-.16518c.90783-.84177 2.35255-.83663 3.25461.01616.91689.87057.9198 2.29079.00874 3.16485zM6.6103 13.02286c-1.48663-1.49886-1.48069-3.91196.018-5.40228 1.49746-1.48912 3.9213-1.49413 5.42499-.01502l.63953.53872.64704-.53961c1.50376-1.47822 3.92692-1.47291 5.42416.01599 1.03267 1.02736 1.38192 2.5308.94104 3.88976-.08522.26266-.36723.40651-.6299.3213-.26266-.08522-.40651-.36723-.3213-.6299.32565-1.00375.06795-2.11309-.69505-2.87216-1.11113-1.10494-2.9132-1.10625-4.02596-.00393a.51536.51536 0 0 1-.04096.03728l-.92417.77073c-.17952.20063-.48724.22341-.69455.04879l-.97494-.82126a.50625.50625 0 0 1-.03489-.03161.20572.20572 0 0 1-.00378-.00375c-1.11275-1.1025-2.91495-1.10125-4.02613.00375-1.10943 1.10325-1.11153 2.88898-.00614 3.99599a.52604.52604 0 0 1 .04284.0468l4.88576 5.92318c.1675.18533.40169.24722.61728.17605.26222-.08656.54497.05584.63153.31807.08656.26222-.05585.54497-.31807.63153-.59155.19527-1.2396.02401-1.68738-.47222l-4.88893-5.9262zM13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5z"})),react.createElement("use",{transform:"translate(3 3)",xlinkHref:"#love"}));var love=Object(template.a)(love_Graphic),megaphone=__webpack_require__(430);function RotatedIconComponent(iconComponent,degrees){return Object(styled_components_browser_esm.default)(iconComponent)`
    transform: rotate(${degrees}deg);
  `}__webpack_require__.d(__webpack_exports__,"ArrowLeftIcon",function(){return ArrowLeftIcon}),__webpack_require__.d(__webpack_exports__,"ArrowRightIcon",function(){return ArrowRightIcon}),__webpack_require__.d(__webpack_exports__,"ArrowDownIcon",function(){return ArrowDownIcon}),__webpack_require__.d(__webpack_exports__,"ArrowUpIcon",function(){return ArrowUpIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleOUpIcon",function(){return CaratCircleOUpIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleODownIcon",function(){return CaratCircleODownIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleORightIcon",function(){return CaratCircleORightIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleOLeftIcon",function(){return CaratCircleOLeftIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleUpIcon",function(){return CaratCircleUpIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleDownIcon",function(){return CaratCircleDownIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleRightIcon",function(){return CaratCircleRightIcon}),__webpack_require__.d(__webpack_exports__,"CaratCircleLeftIcon",function(){return CaratCircleLeftIcon}),__webpack_require__.d(__webpack_exports__,"CaratRightIcon",function(){return CaratRightIcon}),__webpack_require__.d(__webpack_exports__,"CaratLeftIcon",function(){return CaratLeftIcon}),__webpack_require__.d(__webpack_exports__,"CaratUpIcon",function(){return CaratUpIcon}),__webpack_require__.d(__webpack_exports__,"CaratDownIcon",function(){return CaratDownIcon}),__webpack_require__.d(__webpack_exports__,"CaratStrongRightIcon",function(){return CaratStrongRightIcon}),__webpack_require__.d(__webpack_exports__,"CaratStrongLeftIcon",function(){return CaratStrongLeftIcon}),__webpack_require__.d(__webpack_exports__,"CaratStrongUpIcon",function(){return CaratStrongUpIcon}),__webpack_require__.d(__webpack_exports__,"CaratStrongDownIcon",function(){return CaratStrongDownIcon}),__webpack_require__.d(__webpack_exports__,"AlertCircleIcon",function(){return alert_circle.a}),__webpack_require__.d(__webpack_exports__,"BookmarkBook",function(){return bookmarkBook.a}),__webpack_require__.d(__webpack_exports__,"BookmarkIcon",function(){return bookmark}),__webpack_require__.d(__webpack_exports__,"BookmarkOIcon",function(){return bookmark_o.a}),__webpack_require__.d(__webpack_exports__,"CheckCircleIcon",function(){return check_circle.a}),__webpack_require__.d(__webpack_exports__,"CheckIcon",function(){return check.a}),__webpack_require__.d(__webpack_exports__,"CheckmarkCircleL",function(){return checkmark_circle_l}),__webpack_require__.d(__webpack_exports__,"CheckmarkCircleS",function(){return checkmark_circle_s.a}),__webpack_require__.d(__webpack_exports__,"CheckmarkCircleR",function(){return checkmark_circle_r}),__webpack_require__.d(__webpack_exports__,"ClipboardOIcon",function(){return clipboard_o.a}),__webpack_require__.d(__webpack_exports__,"CloseCircleOIcon",function(){return close_circle_o.a}),__webpack_require__.d(__webpack_exports__,"CloseCircleIcon",function(){return close_circle}),__webpack_require__.d(__webpack_exports__,"CloseStrokeIcon",function(){return icons_close.a}),__webpack_require__.d(__webpack_exports__,"DownloadIcon",function(){return download.a}),__webpack_require__.d(__webpack_exports__,"EditOIcon",function(){return edit_o}),__webpack_require__.d(__webpack_exports__,"EmbedOIcon",function(){return embed_o}),__webpack_require__.d(__webpack_exports__,"EmoteSadIcon",function(){return emote_sad.a}),__webpack_require__.d(__webpack_exports__,"EmoteSmileIcon",function(){return emote_smile}),__webpack_require__.d(__webpack_exports__,"GraphOIcon",function(){return graph_o}),__webpack_require__.d(__webpack_exports__,"HistoryIcon",function(){return icons_history.a}),__webpack_require__.d(__webpack_exports__,"LogoYoutubeIcon",function(){return logo_youtube}),__webpack_require__.d(__webpack_exports__,"LogoTwitterIcon",function(){return logo_twitter.a}),__webpack_require__.d(__webpack_exports__,"LogoFacebookIcon",function(){return logo_facebook}),__webpack_require__.d(__webpack_exports__,"OpenNewIcon",function(){return open_new.a}),__webpack_require__.d(__webpack_exports__,"PaymentDueIcon",function(){return payment_due}),__webpack_require__.d(__webpack_exports__,"PinOIcon",function(){return pin_o}),__webpack_require__.d(__webpack_exports__,"PinIcon",function(){return pin.a}),__webpack_require__.d(__webpack_exports__,"PrintIcon",function(){return print.a}),__webpack_require__.d(__webpack_exports__,"RefreshIcon",function(){return refresh}),__webpack_require__.d(__webpack_exports__,"SendIcon",function(){return send.a}),__webpack_require__.d(__webpack_exports__,"SettingsAdvancedIcon",function(){return settings_advanced.a}),__webpack_require__.d(__webpack_exports__,"SettingsIcon",function(){return settings.a}),__webpack_require__.d(__webpack_exports__,"ShieldAlertIcon",function(){return shield_alert.a}),__webpack_require__.d(__webpack_exports__,"ShieldAlertOIcon",function(){return shield_alert_o}),__webpack_require__.d(__webpack_exports__,"TrashOIcon",function(){return trash_o.a}),__webpack_require__.d(__webpack_exports__,"TrashIcon",function(){return trash.a}),__webpack_require__.d(__webpack_exports__,"ThumbsUpIcon",function(){return thumbs_up.a}),__webpack_require__.d(__webpack_exports__,"UpholdSystemIcon",function(){return logo_uphold.a}),__webpack_require__.d(__webpack_exports__,"UnVerifiedSIcon",function(){return unverified_s.a}),__webpack_require__.d(__webpack_exports__,"VerifiedSIcon",function(){return verified_s.a}),__webpack_require__.d(__webpack_exports__,"WalletInfoIcon",function(){return wallet_info.a}),__webpack_require__.d(__webpack_exports__,"WalletAddIcon",function(){return wallet_add.a}),__webpack_require__.d(__webpack_exports__,"WalletBackupIcon",function(){return wallet_backup}),__webpack_require__.d(__webpack_exports__,"WalletBlockIcon",function(){return wallet_block}),__webpack_require__.d(__webpack_exports__,"WalletCloseIcon",function(){return wallet_close}),__webpack_require__.d(__webpack_exports__,"WalletCheckIcon",function(){return wallet_check}),__webpack_require__.d(__webpack_exports__,"WalletImportIcon",function(){return wallet_import.a}),__webpack_require__.d(__webpack_exports__,"WalletLockIcon",function(){return wallet_lock}),__webpack_require__.d(__webpack_exports__,"WalletManageIcon",function(){return wallet_manage}),__webpack_require__.d(__webpack_exports__,"WalletMinusIcon",function(){return wallet_minus}),__webpack_require__.d(__webpack_exports__,"WalletOpenIcon",function(){return wallet_open}),__webpack_require__.d(__webpack_exports__,"WalletWithdrawIcon",function(){return wallet_withdraw.a}),__webpack_require__.d(__webpack_exports__,"BlockSIcon",function(){return block_s}),__webpack_require__.d(__webpack_exports__,"BlockLIcon",function(){return block_l}),__webpack_require__.d(__webpack_exports__,"BlockRIcon",function(){return block_r}),__webpack_require__.d(__webpack_exports__,"CaratTriangleDownSIcon",function(){return carat_triangle_down_s}),__webpack_require__.d(__webpack_exports__,"CaratTriangleDownLIcon",function(){return carat_triangle_down_l}),__webpack_require__.d(__webpack_exports__,"CaratTriangleDownRIcon",function(){return carat_triangle_down_r}),__webpack_require__.d(__webpack_exports__,"CaratTriangleLeftSIcon",function(){return carat_triangle_left_s}),__webpack_require__.d(__webpack_exports__,"CaratTriangleLeftLIcon",function(){return carat_triangle_left_l}),__webpack_require__.d(__webpack_exports__,"CaratTriangleLeftRIcon",function(){return carat_triangle_left_r}),__webpack_require__.d(__webpack_exports__,"CaratTriangleRightSIcon",function(){return carat_triangle_right_s}),__webpack_require__.d(__webpack_exports__,"CaratTriangleRightLIcon",function(){return carat_triangle_right_l}),__webpack_require__.d(__webpack_exports__,"CaratTriangleRightRIcon",function(){return carat_triangle_right_r}),__webpack_require__.d(__webpack_exports__,"CaratTriangleUpSIcon",function(){return carat_triangle_up_s}),__webpack_require__.d(__webpack_exports__,"CaratTriangleUpLIcon",function(){return carat_triangle_up_l}),__webpack_require__.d(__webpack_exports__,"CaratTriangleUpRIcon",function(){return carat_triangle_up_r}),__webpack_require__.d(__webpack_exports__,"HeartSIcon",function(){return heart_s}),__webpack_require__.d(__webpack_exports__,"HeartLIcon",function(){return heart_l}),__webpack_require__.d(__webpack_exports__,"HeartRIcon",function(){return heart_r}),__webpack_require__.d(__webpack_exports__,"MoreVertSIcon",function(){return more_vert_s}),__webpack_require__.d(__webpack_exports__,"MoreVertLIcon",function(){return more_vert_l}),__webpack_require__.d(__webpack_exports__,"MoreVertRIcon",function(){return more_vert_r}),__webpack_require__.d(__webpack_exports__,"ThumbsdownSIcon",function(){return thumbsdown_s}),__webpack_require__.d(__webpack_exports__,"ThumbsdownLIcon",function(){return thumbsdown_l}),__webpack_require__.d(__webpack_exports__,"ThumbsdownRIcon",function(){return thumbsdown_r}),__webpack_require__.d(__webpack_exports__,"ThumbsupSIcon",function(){return thumbsup_s}),__webpack_require__.d(__webpack_exports__,"ThumbsupLIcon",function(){return thumbsup_l}),__webpack_require__.d(__webpack_exports__,"ThumbsupRIcon",function(){return thumbsup_r}),__webpack_require__.d(__webpack_exports__,"AdsMegaphoneIcon",function(){return fc_ads_megaphone.a}),__webpack_require__.d(__webpack_exports__,"BatColorIcon",function(){return fc_logo_bat.a}),__webpack_require__.d(__webpack_exports__,"BatGreyIcon",function(){return fc_logo_bat_grey}),__webpack_require__.d(__webpack_exports__,"BitcoinColorIcon",function(){return fc_logo_bitcoin.a}),__webpack_require__.d(__webpack_exports__,"DuckDuckGoIcon",function(){return fc_logo_ddg.a}),__webpack_require__.d(__webpack_exports__,"EthereumColorIcon",function(){return fc_logo_ethereum.a}),__webpack_require__.d(__webpack_exports__,"LitecoinColorIcon",function(){return fc_logo_litecoin.a}),__webpack_require__.d(__webpack_exports__,"LoaderIcon",function(){return loader.a}),__webpack_require__.d(__webpack_exports__,"PaperAirplaneIcon",function(){return paper_airplane.a}),__webpack_require__.d(__webpack_exports__,"RedditColorIcon",function(){return fc_logo_reddit.a}),__webpack_require__.d(__webpack_exports__,"RewardsActivateIcon",function(){return fc_rewards_activate.a}),__webpack_require__.d(__webpack_exports__,"RewardsSendTipsIcon",function(){return fc_rewards_send_tips.a}),__webpack_require__.d(__webpack_exports__,"TorLockIcon",function(){return tor_lock.a}),__webpack_require__.d(__webpack_exports__,"TwitchColorIcon",function(){return fc_logo_twitch.a}),__webpack_require__.d(__webpack_exports__,"TwitterColorIcon",function(){return fc_logo_twitter.a}),__webpack_require__.d(__webpack_exports__,"GitHubColorIcon",function(){return fc_logo_github.a}),__webpack_require__.d(__webpack_exports__,"UpholdColorIcon",function(){return fc_logo_uphold.a}),__webpack_require__.d(__webpack_exports__,"VimeoColorIcon",function(){return fc_logo_vimeo.a}),__webpack_require__.d(__webpack_exports__,"YoutubeColorIcon",function(){return fc_logo_youtube.a}),__webpack_require__.d(__webpack_exports__,"GiftIcon",function(){return gift.a}),__webpack_require__.d(__webpack_exports__,"LoveIcon",function(){return love}),__webpack_require__.d(__webpack_exports__,"MegaphoneIcon",function(){return megaphone.a});const ArrowLeftIcon=RotatedIconComponent(arrow,0),ArrowRightIcon=RotatedIconComponent(arrow,180),ArrowDownIcon=RotatedIconComponent(arrow,-90),ArrowUpIcon=RotatedIconComponent(arrow,90),CaratCircleOUpIcon=RotatedIconComponent(carat_circle_o,0),CaratCircleODownIcon=RotatedIconComponent(carat_circle_o,180),CaratCircleORightIcon=RotatedIconComponent(carat_circle_o,90),CaratCircleOLeftIcon=RotatedIconComponent(carat_circle_o,-90),CaratCircleUpIcon=RotatedIconComponent(carat_circle,0),CaratCircleDownIcon=RotatedIconComponent(carat_circle,180),CaratCircleRightIcon=RotatedIconComponent(carat_circle,90),CaratCircleLeftIcon=RotatedIconComponent(carat_circle,-90),CaratRightIcon=RotatedIconComponent(carat,180),CaratLeftIcon=RotatedIconComponent(carat,0),CaratUpIcon=RotatedIconComponent(carat,90),CaratDownIcon=RotatedIconComponent(carat,-90),CaratStrongRightIcon=RotatedIconComponent(carat_strong,-90),CaratStrongLeftIcon=RotatedIconComponent(carat_strong,90),CaratStrongUpIcon=RotatedIconComponent(carat_strong,180),CaratStrongDownIcon=RotatedIconComponent(carat_strong,0)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return getLocale});const locale={shields:"Shields",up:"up",down:"down",forThisSite:"for this site",enabledMessage:"If a site appears broken, try shields down",disabledMessage:"You’re browsing this site without any privacy and security protections.",itemsBlocked:"Items blocked",itemBlocked:"Item blocked",and:"and",connectionsUpgraded:"connections upgraded",connectionUpgraded:"connection upgraded",thirdPartyTrackersBlocked:"3rd-party trackers blocked",connectionsUpgradedHTTPSCapital:"Connections upgraded to HTTPS",connectionUpgradedHTTPSCapital:"Connection upgraded to HTTPS",scriptsBlocked:"Scripts blocked",allowScriptsOnce:"Allow scripts once",thirdPartyCookiesBlocked:"3rd-party cookies blocked",allCookiesBlocked:"Cookies blocked",allCookiesAllowed:"All cookies allowed",thirdPartyFingerprintingBlocked:"3rd-party device recognition blocked",allFingerprintingBlocked:"Device recognition blocked",allFingerprintingAllowed:"All device recognition allowed",deviceRecognitionAttempts:"Device recognition attempts",scriptsOnThisSite:"Scripts on this site",blockedScripts:"Blocked scripts",allowedScripts:"Allowed scripts",blockAll:"Block all",allowAll:"Allow all",block:"Block",blockedOnce:"Blocked once",allow:"Allow",allowedOnce:"Allowed once",cancel:"Cancel",goBack:"Go back",applyOnce:"Apply once",changeDefaults:"Change global shield defaults"};const getLocale=word=>locale[word]},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);function largeMediumSmall(largeValue,mediumValue,smallValue,ctaValue){return p=>{switch(p.size){case"large":return largeValue;case"medium":return mediumValue;case"small":return smallValue;case"call-to-action":return null==ctaValue?largeValue:ctaValue}}}const StyledButton=Object(theme.b)("button").withConfig({displayName:"StyledButton"})`
  ${p=>{let mainColor,hoverColor,activeColor;if(p.disabled)mainColor=hoverColor=activeColor=p.theme.color.disabled;else switch(p.type){case"accent":"brave"===p.brand?(mainColor=p.theme.color.brandBrave,hoverColor=p.theme.color.brandBraveInteracting,activeColor=p.theme.color.brandBraveActive):"rewards"===p.brand&&(mainColor=p.theme.color.brandBat,hoverColor=p.theme.color.brandBatInteracting,activeColor=p.theme.color.brandBatActive);break;case"default":mainColor=p.theme.color.defaultControl,hoverColor=p.theme.color.defaultControlInteracting,activeColor=p.theme.color.defaultControlActive;break;case"warn":mainColor=p.theme.color.warn,hoverColor=p.theme.color.warnInteracting,activeColor=p.theme.color.warnActive;break;case"subtle":mainColor=p.theme.color.subtle,hoverColor=p.theme.color.subtleInteracting,activeColor=p.theme.color.subtleActive}return theme.a`
    --button-main-color: ${mainColor};
    --button-main-color-hover: ${hoverColor};
    --button-main-color-active: ${activeColor};
  `}}
  --button-state-color: var(--button-main-color);
  --icon-size: ${largeMediumSmall("18px","16px","14px")};
  --icon-spacing: ${largeMediumSmall("6px","6px","6px")};
  --webkit-appearance: none;
  box-sizing: border-box;
  background: none;
  border: none;
  outline-color: transparent;
  display: flex;
  flex-direction: ${p=>p.icon&&"after"===p.icon.position?"row":"row-reverse"};
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  cursor: ${p=>p.disabled?"default":"pointer"};
  user-select: none;
  font-size: ${largeMediumSmall("14px","13px","11px")};
  border-radius: ${largeMediumSmall("24px","20px","16px","28px")};
  width: ${p=>"call-to-action"===p.size?"100%":"auto"};
  min-width: ${largeMediumSmall("116px","104px","88px","235px")};
  padding: ${largeMediumSmall("14px 15px","11px 15px","7px 10px","19px 15px")};
  :hover:enabled {
    --button-state-color: var(--button-main-color-hover);
  }
  :active:enabled {
    --button-state-color: var(--button-main-color-active);
  }
`;const PrimaryButton=Object(theme.b)(StyledButton).withConfig({displayName:"PrimaryButton"})`
  color: #fff;
  background: var(--button-state-color);
  border: 1px solid var(--button-state-color);
`,SecondaryButton=Object(theme.b)(StyledButton).withConfig({displayName:"SecondaryButton"})`
  border: 1px solid;
  color: var(--button-state-color);
`,TertiaryButton=Object(theme.b)(StyledButton).withConfig({displayName:"TertiaryButton"})`
  color: var(--button-state-color);
`,StyledText=Object(theme.b)("div").withConfig({displayName:"StyledText"})`
  /* min-height so that we get consistent height with / without an icon */
  min-height: var(--icon-size);
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0;
  font-weight: 500;
  text-transform: ${p=>"call-to-action"===p.size?"uppercase":"none"};
  line-height: 1;
`,StyledIcon=Object(theme.b)("div").withConfig({displayName:"StyledIcon"})`
  display: block;
  line-height: 0;
  height: var(--icon-size);
  width: var(--icon-size);
  margin: ${p=>p.text&&p.icon?"before"===p.icon.position?"0 var(--icon-spacing) 0 -4px":"0 -4px 0 var(--icon-spacing)":null};
`;__webpack_require__.d(__webpack_exports__,"a",function(){return button_ThemedButton});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&(t[p[i]]=s[p[i]])}return t};class button_ThemedButton extends react.PureComponent{getButtonComponent(){switch(this.props.level){case"primary":return PrimaryButton;case"secondary":return SecondaryButton;case"tertiary":return TertiaryButton}throw new Error(`Unknown component level: ${this.props.level||"[undefined]"}`)}render(){const _a=this.props,{disabled:disabled,className:className,onClick:onClick}=_a,deepProps=__rest(_a,["disabled","className","onClick"]),{icon:icon,text:text}=deepProps;onClick||disabled||console.warn("Button component not provided an onClick handler as a prop");let ButtonComponent=this.getButtonComponent();return react.createElement(ButtonComponent,Object.assign({className:className,onClick:onClick,disabled:disabled},deepProps),text?react.createElement(StyledText,Object.assign({},deepProps),text):null,icon&&icon.image?react.createElement(StyledIcon,Object.assign({},deepProps),icon.image):null)}}button_ThemedButton.displayName="Button",button_ThemedButton.defaultProps={brand:"brave",size:"medium",type:"default",level:"primary",main:!1}},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={learnMore:"Learn more",done:"Done",searchSettings:"Search settings",headerLabel:"This is a",headerTitle:"Private Window",headerText:"Brave doesn’t remember what you do in a Private Window. Sites you visit won't show up in your history and cookies vanish when you’re done. Private Windows don’t make you completely anonymous online, though.",headerButton:"Learn more",headerTorTitle:"Private Window with Tor",headerTorText:"Brave never remembers what you do in a Private Window. With Tor, your browsing is also hidden from your ISP or employer, and your IP address is hidden from the sites you visit.",headerTorButton:"Learn more about Private Windows with Tor",boxDdgLabel:"Search Privately with",boxDdgTitle:"DuckDuckGo",boxDdgText:"With private search, Brave will use DuckDuckGo for searches in Private Windows. DuckDuckGo doesn’t track your search history, so you can search privately.",boxDdgText2:"In Private Windows with Tor, DuckDuckGo is the default search engine. Some of the other popular search engines are harder to use with Tor. DuckDuckGo doesn’t track your search history; with Tor, they don’t even know your IP address.",boxDdgButton:"Search with DuckDuckGo",boxTorLabel:"Browse privately with",boxTorLabel2:"You are browsing privately with",boxTorTitle:"Tor Protection",boxTorText:"Tor hides your IP address from the sites you visit, by routing your browsing through several Tor servers before it reaches your destination. These connections are encrypted, so your ISP or employer can’t see which sites you’re visiting either. Tor can slow down browsing and some sites might not work at all.",boxTorText2:"Using Private Tabs only changes what Brave does on your device — it doesn't change anyone else's behavior. Tor hides your IP address from the sites you visit, and hides the sites you visit from your ISP or your employer. Open a Private Window with Tor from the menu, or with Alt+Shift+N or Option+Shift+N.",boxTorButton:"Learn more about Tor in Brave",modalPrivateWindowTorTitle:"Link out to: https://support.brave.com/hc/en-us/articles/360018121491",modalPrivateWindowTitle:"Link out to: https://support.brave.com/hc/en-us/articles/360017840332",modalTorInBraveTitle:"Link out to: https://support.brave.com/hc/en-us/articles/360018121491",modalDuckduckGoTitle:"Link out to: TBD"}},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"j",function(){return MainToggleHeading}),__webpack_require__.d(__webpack_exports__,"k",function(){return MainToggleText}),__webpack_require__.d(__webpack_exports__,"n",function(){return ToggleStateText}),__webpack_require__.d(__webpack_exports__,"g",function(){return Favicon}),__webpack_require__.d(__webpack_exports__,"m",function(){return SiteInfoText}),__webpack_require__.d(__webpack_exports__,"o",function(){return TotalBlockedStatsNumber}),__webpack_require__.d(__webpack_exports__,"p",function(){return TotalBlockedStatsText}),__webpack_require__.d(__webpack_exports__,"a",function(){return BlockedInfoRowStats}),__webpack_require__.d(__webpack_exports__,"b",function(){return BlockedInfoRowText}),__webpack_require__.d(__webpack_exports__,"e",function(){return BlockedListSummaryText}),__webpack_require__.d(__webpack_exports__,"d",function(){return BlockedListItemHeaderText}),__webpack_require__.d(__webpack_exports__,"c",function(){return BlockedListItemHeaderStats}),__webpack_require__.d(__webpack_exports__,"h",function(){return Link}),__webpack_require__.d(__webpack_exports__,"i",function(){return LinkAction}),__webpack_require__.d(__webpack_exports__,"f",function(){return DisabledContentText}),__webpack_require__.d(__webpack_exports__,"l",function(){return ShieldsButton});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12);const MainToggleHeading=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("h1").withConfig({displayName:"MainToggleHeading"})`
  box-sizing: border-box;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${p=>p.theme.color.text};
  margin: 0;
`,MainToggleText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("p").withConfig({displayName:"MainToggleText"})`
  box-sizing: border-box;
  color: ${p=>p.theme.color.text};
  font-size: 12px;
  font-family: ${p=>p.theme.fontFamily.body};
  margin: 0;
  line-height: 1.2;
`,ToggleStateText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"ToggleStateText"})`
  box-sizing: border-box;
  color: ${p=>"enabled"===p.status?p=>p.theme.color.brandBrave:p.theme.color.disabledResourceBlocked};
  font-size: inherit;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 500;
`,Favicon=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").withConfig({displayName:"Favicon"})`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  width: 24px;
`,SiteInfoText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("p").withConfig({displayName:"SiteInfoText"})`
  box-sizing: border-box;
  font-size: 22px;
  font-weight: 500;
  line-height: 27px;
  color: ${p=>p.theme.color.text};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
`,TotalBlockedStatsNumber=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("h2").withConfig({displayName:"TotalBlockedStatsNumber"})`
  box-sizing: border-box;
  font-size: 38px;
  text-transform: uppercase;
  color: ${p=>p.theme.color.text};
  font-weight: normal;
  text-align: right;
  margin: 0;
`,TotalBlockedStatsText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"TotalBlockedStatsText"})`
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  color: ${p=>p.theme.color.text};
`,BlockedInfoRowStats=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"BlockedInfoRowStats"})`
  box-sizing: border-box;
  color: ${p=>p.theme.color.text};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`,BlockedInfoRowText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"BlockedInfoRowText"})`
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: ${p=>p.theme.color.text};
`,BlockedListSummaryText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"BlockedListSummaryText"})`
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${p=>p.theme.color.text};
`,BlockedListItemHeaderText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"BlockedListItemHeaderText"})`
  box-sizing: border-box;
  font-weight: 500;
  color: ${p=>p.theme.color.text};
  font-size: 14px;
`,BlockedListItemHeaderStats=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"BlockedListItemHeaderStats"})`
  text-align: center;
  font-size: 14px;
  color: ${p=>p.theme.color.text};
  font-weight: 600;
`,Link=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("button").withConfig({displayName:"Link"})`
  box-sizing: border-box;
  -webkit-appearance: none;
  color: ${p=>p.theme.color.brandBrave};
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-offset: 6px;
    outline-color: ${p=>p.theme.color.brandBrave};
    outline-width: 2px;
  }

  &:active {
    outline: none;
  }
`,LinkAction=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(Link).withConfig({displayName:"LinkAction"})`
  box-sizing: border-box;
  color: ${p=>p.theme.color.brandBrave};
  font-size: ${p=>"small"===p.size?"12px":"inherit"};
  line-height: ${p=>"small"===p.size&&"1"};
  font-weight: 500;
  z-index: 2;

  &:focus {
    outline-offset: initial;
  }

  &:active {
    outline: none;
  }

  &:disabled {
    color: ${p=>p.theme.color.disabledResourceBlocked};
    font-style: italic;
    font-weight: 500;
    pointer-events: none;
    cursor: default;

    &:hover {
      text-decoration: none;
    }
  }
`,DisabledContentText=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"DisabledContentText"})`
  box-sizing: border-box;
  color: ${p=>p.theme.color.text};
  font-size: 12px;
  font-weight: normal;
  line-height: 18px;
`,ShieldsButton=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"ShieldsButton"})`
  &:focus {
    outline-offset: 2px;
    outline-color: ${p=>p.theme.color.brandBrave};
    outline-width: 2px;
  }

  &:active {
    outline: none;
  }
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={adsDesc:"Earn tokens by seeing ads on Brave. Ads are matched from machine learning and the data temporarily present in your browser without tracking your information or sending it outside.",adsDisabledText:"Coming soon",adsDisplayed:"Ads displayed",adsEarnings:"Earnings this month",adsFreq:"Ad Frequency",adsMode:"Ad mode",adsTitle:"Brave Ads",contributionAllowed:"What should be allowed?",contributionDesc:"A simple way to support content creators. Set monthly allowance and browse normally. Your favorite sites (content sites only) receive your contributions automatically. You can exclude sites from funding here.",contributionHideAll:"Hide all",contributionMinTime:"Minimum page time before logging a visit",contributionMinVisits:"Minimum visits for publisher relevancy",contributionMonthly:"Monthly budget",contributionNextDate:"Next contribution date",contributionNonVerified:"Allow contribution to non-verified sites",contributionSeeAll:"See all",contributionSites:"Supported sites",contributionSitesNum:"Sites you're supporting",contributionSitesSuffix:"sites",contributionTime5:"5 seconds",contributionTime60:"60 seconds",contributionTime8:"8 seconds",contributionTitle:"Brave Contribute",contributionVideos:"Allow contribution to videos",contributionVisit10:"10 visits",contributionVisit1:"1 visit",contributionVisit5:"5 visits",donationDesc:"Tip content creators directly as you browse or give tips to videos and tweets that you ‘like’. You can also set up recurring monthly tips so you can support sites continuously.",donationTitle:"Tips",donationTotal:"Total tips this month",rewardsDisabledDescOne:"With conventional browsers, you pay to browse the web by viewing ads with your valuable attention, spending your valuable time downloading invasive ad technology, that transmits your valuable private data to advertisers — without your consent.",rewardsDisabledDescTwo:"Today, Brave welcomes you to the new internet. One where your time is valued, your personal data is kept private, and you actually get paid for your attention.",whyBraveRewards:"Why Brave Rewards?"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={welcome:"Brave the new Internet",whatIsBrave:"Get ready to enjoy a faster and more secure browsing experience with a browser built to protect your privacy.",letsGo:"Let's go",importFromAnotherBrowser:"Import bookmarks & settings",setupImport:"Brave makes it easy to set up your usual environment by importing bookmarks and settings from other browsers installed on your computer.",import:"Import",imported:"Imported",setDefault:"Set default",setDefaultSearchEngine:"Set default search engine",chooseSearchEngine:"Choose the search engine you would like to use by default when searching the web from the address bar.",privateExperience:"For a more private search experience, try DuckDuckGo.",selectSearchEngine:"Select a search engine",fakeSearchProvider1:"DuckDuckGo",fakeSearchProvider2:"Google (default)",chooseYourTheme:"Choose your color theme",findToolbarTheme:"Set the color of your toolbar by selecting the light or dark option from the settings panel.",protectYourPrivacy:"Manage your shields",adjustProtectionLevel:'Protect against privacy-invading ads and trackers while browsing with Brave Shields. Set Shields to "down" if a site doesn’t seem to be working properly.',showMeWhere:"Show Shields",enableBraveRewards:"Enable Brave Rewards",setupBraveRewards:"Your attention is valuable. Earn by viewing privacy-respecting ads while you browse, and pay it forward to support content creators you love.",getStarted:"Enable Rewards",skipWelcomeTour:"Skip welcome tour",next:"Next",done:"Done",confirm:"Confirm",confirmed:"Confirmed",theme:"Change theme",search:"Settings"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"u",function(){return ShieldsPanel}),__webpack_require__.d(__webpack_exports__,"t",function(){return ShieldsHeader}),__webpack_require__.d(__webpack_exports__,"s",function(){return MainToggle}),__webpack_require__.d(__webpack_exports__,"w",function(){return SiteOverview}),__webpack_require__.d(__webpack_exports__,"x",function(){return TotalBlockedStats}),__webpack_require__.d(__webpack_exports__,"v",function(){return SiteInfo}),__webpack_require__.d(__webpack_exports__,"a",function(){return BlockedInfoRow}),__webpack_require__.d(__webpack_exports__,"e",function(){return BlockedInfoRowSingle}),__webpack_require__.d(__webpack_exports__,"d",function(){return BlockedInfoRowForSelect}),__webpack_require__.d(__webpack_exports__,"b",function(){return BlockedInfoRowData}),__webpack_require__.d(__webpack_exports__,"c",function(){return BlockedInfoRowDataForSelect}),__webpack_require__.d(__webpack_exports__,"r",function(){return MainFooter}),__webpack_require__.d(__webpack_exports__,"f",function(){return BlockedListContent}),__webpack_require__.d(__webpack_exports__,"i",function(){return BlockedListHeader}),__webpack_require__.d(__webpack_exports__,"p",function(){return BlockedListSummary}),__webpack_require__.d(__webpack_exports__,"o",function(){return BlockedListStatic}),__webpack_require__.d(__webpack_exports__,"g",function(){return BlockedListDynamic}),__webpack_require__.d(__webpack_exports__,"l",function(){return BlockedListItemHeader}),__webpack_require__.d(__webpack_exports__,"j",function(){return BlockedListItem}),__webpack_require__.d(__webpack_exports__,"n",function(){return BlockedListItemWithOptions}),__webpack_require__.d(__webpack_exports__,"k",function(){return BlockedListItemDetails}),__webpack_require__.d(__webpack_exports__,"m",function(){return BlockedListItemSummary}),__webpack_require__.d(__webpack_exports__,"h",function(){return BlockedListFooter}),__webpack_require__.d(__webpack_exports__,"q",function(){return DisabledContentView});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_display__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(16),_toggle_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(69),_dash_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(477),_dash_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_dash_svg__WEBPACK_IMPORTED_MODULE_3__);const ShieldsPanel=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ShieldsPanel"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: ${p=>p.theme.fontFamily.heading};
  position: relative;
  background: ${p=>p.theme.color.panelBackground};
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
`,ShieldsHeader=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("header").withConfig({displayName:"ShieldsHeader"})`
  box-sizing: border-box;
  user-select: none;
  background: ${p=>p.theme.color.panelBackgroundSecondary};
  border-radius: 0 0 200px 50%/25px;
  margin: 0 0 8px;
`,MainToggle=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"MainToggle"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 16px 24px 16px;
  align-items: ${p=>"enabled"===p.status?null:"center"};
  border-bottom: 1px solid ${p=>p.theme.color.separatorLine};

  > ${_toggle_style__WEBPACK_IMPORTED_MODULE_2__.e} {
    display: flex;
    justify-content: flex-end;
    width: fit-content;
    height: 100%;
    margin-left: 54px;
    align-items: center;
  }
`,SiteOverview=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"SiteOverview"})`
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
`,TotalBlockedStats=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"TotalBlockedStats"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 80px 140px;
  align-items: center;
  margin: 0px auto 5px;
  grid-gap: 10px;
`,SiteInfo=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"SiteInfo"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 0px auto 5px;
  gap: 8px;
`,BlockedInfoRow=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"BlockedInfoRow"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${p=>p.extraColumn?"1fr auto auto":"1fr auto"};
  grid-gap: ${p=>p.extraColumn?"4px":"0"};
  align-items: center;
  color: ${p=>p.theme.color.text};
  user-select: none;

  &:active {
    outline: none;
  }

  ${_toggle_style__WEBPACK_IMPORTED_MODULE_2__.e} {
    position: relative;
    z-index: 1;
    display: flex;
    width: fit-content;
    padding: 0 24px;
    height: fit-content;
    height: 100%;
    align-items: center;
  }
`,BlockedInfoRowSingle=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BlockedInfoRow).withConfig({displayName:"BlockedInfoRowSingle"})`
  padding: 8px 24px 8px 74px;
  cursor: default;
  grid-template-columns: 1fr;
`,BlockedInfoRowForSelect=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BlockedInfoRow).withConfig({displayName:"BlockedInfoRowForSelect"})`
  grid-template-columns: auto 1fr;
  padding-right: 24px;
`,BlockedInfoRowData=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"BlockedInfoRowData"})`
  display: grid;
  grid-template-columns: auto 36px 1fr;
  padding: 8px 0 8px 20px;
  grid-gap: 2px;
  align-items: center;
  pointer-events: ${p=>p.disabled&&"none"};

  & > * {
    opacity: ${p=>p.disabled&&"0.6"};
  }

  & > ${_display__WEBPACK_IMPORTED_MODULE_1__.b} {
    opacity: 1;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline-width: 2px;
    outline-offset: -3px;
    outline-color: ${p=>p.theme.color.brandBrave};
  }

  &:hover {
    cursor: pointer;
    color: ${p=>p.theme.color.brandBrave};

    ${_display__WEBPACK_IMPORTED_MODULE_1__.a} {
      color: ${p=>p.theme.color.brandBrave};
    }
    ${_display__WEBPACK_IMPORTED_MODULE_1__.b} {
      color: ${p=>p.theme.color.brandBrave};
    }
  }

  &:hover svg {
    color: ${p=>p.theme.color.brandBrave};
  }
`,BlockedInfoRowDataForSelect=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BlockedInfoRowData).withConfig({displayName:"BlockedInfoRowDataForSelect"})`
  grid-template-columns: auto 26px 1fr;
  padding: 8px 0 8px 20px;

  &:hover {
    cursor: pointer;
  }
`,MainFooter=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"MainFooter"})`
  box-sizing: border-box;
  padding: 24px;
`,BlockedListContent=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"BlockedListContent"})`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  background: ${p=>p.theme.color.panelBackground};
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: default;
`,BlockedListHeader=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"BlockedListHeader"})`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 6px;
  align-items: center;
  padding: 24px 20px 14px;
`,BlockedListSummary=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("summary").withConfig({displayName:"BlockedListSummary"})`
  &::-webkit-details-marker {
    display: none;
  }

  cursor: pointer;
  display: grid;
  grid-template-columns: ${p=>!1===p.stats?"30px 1fr":"28px 28px 1fr"};
  align-items: center;
  padding: 8px 24px 8px 20px;

  &:focus {
    outline-width: 2px;
    outline-offset: -3px;
    outline-color: ${p=>p.theme.color.brandBrave};
  }

  &:active {
    outline: none;
  }
`,BlockedListStatic=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("ul").withConfig({displayName:"BlockedListStatic"})`
  box-sizing: border-box;
  list-style-type: none;
  height: 328px;
  overflow: auto;
  padding: 0 0 0 24px;
  margin: 0;
  font-size: 12px;
  background: ${p=>p.theme.color.panelBackgroundSecondary};
`,BlockedListDynamic=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BlockedListStatic).withConfig({displayName:"BlockedListDynamic"})`
  margin: 0;
  padding: 0;
`,BlockedListItemHeader=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("li").withConfig({displayName:"BlockedListItemHeader"})`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 3;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  align-items: center;
  padding: 12px 24px 12px 14px;
  line-height: 1;
  background: ${p=>p.theme.color.panelBackground};

  &:first-of-type {
    border-top: 0;
  }
`,BlockedListItem=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("li").withConfig({displayName:"BlockedListItem"})`
  box-sizing: border-box;
  padding: 8px 0px;
  line-height: 1;
  margin: auto 0;
  white-space: nowrap;
  user-select: all;
  font-weight: 500;
  color: ${p=>p.theme.color.text}
`,BlockedListItemWithOptions=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("li").withConfig({displayName:"BlockedListItemWithOptions"})`
  box-sizing: border-box;
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 8px 24px 8px 20px;
  background: ${p=>p.theme.color.panelBackgroundSecondary};

  > *:first-child {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    line-height: 1.5;
    font-weight: 500;
    margin: 0px 10px 0px 30px;
    font-size: 12px;
    color: ${p=>p.theme.color.text};
  }
`,BlockedListItemDetails=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("details").withConfig({displayName:"BlockedListItemDetails"})`
  position: relative;

  &[open] summary:after {
    content: "-";
    color: ${p=>p.theme.color.text};
  }

  /* grouped scripts row (nested dash) */
  &[open] ${BlockedListItemWithOptions}:before {
    content: " ";
    background: url(${_dash_svg__WEBPACK_IMPORTED_MODULE_3___default.a});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 0;
    top: -2px;
    left: 26px;
    width: 18px;
    height: 21px;
  }
  ${BlockedListItemWithOptions} {
    padding: 4px 24px 4px 20px;
  }
`,BlockedListItemSummary=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BlockedListItemWithOptions.withComponent("summary")).withConfig({displayName:"BlockedListItemSummary"})`
  position: relative;

  &::-webkit-details-marker {
    display: none;
  }

  &:after {
    position: absolute;
    content: "+";
    color: ${p=>p.theme.color.text};
    top: 7px;
    left: 26px;
    font-size: 20px;
    padding: 0;
  }

  &:focus {
    outline-width: 2px;
    outline-offset: -3px;
    outline-color: ${p=>p.theme.color.brandBrave};
  }
`,BlockedListFooter=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"BlockedListFooter"})`
  box-sizing: border-box;
  padding: 8px 0px;
  display: flex;
  justify-content: center;
`,DisabledContentView=(Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"BlockedListFooterWithOptions"})`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"DisabledContentView"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: 4px;
  align-items: center;
  max-width: 80%;
  margin: 5px auto 8px;
`)},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return StyledListContent}),__webpack_require__.d(__webpack_exports__,"f",function(){return StyledSitesNum}),__webpack_require__.d(__webpack_exports__,"a",function(){return StyledDisabledContent}),__webpack_require__.d(__webpack_exports__,"b",function(){return StyledHeading}),__webpack_require__.d(__webpack_exports__,"e",function(){return StyledSitesLink}),__webpack_require__.d(__webpack_exports__,"g",function(){return StyledText}),__webpack_require__.d(__webpack_exports__,"h",function(){return StyledTotalContent}),__webpack_require__.d(__webpack_exports__,"j",function(){return StyledWalletOverlay}),__webpack_require__.d(__webpack_exports__,"k",function(){return StyledWalletWrapper}),__webpack_require__.d(__webpack_exports__,"i",function(){return StyledWalletClose}),__webpack_require__.d(__webpack_exports__,"d",function(){return StyledMobileSettingsContainer});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const StyledListContent=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledListContent"})`
  padding: 0 24px;
`,StyledSitesNum=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledSitesNum"})`
  padding: 24px;
`,StyledDisabledContent=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledDisabledContent"})`
  padding: 0px 5px;
`,StyledHeading=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("span").withConfig({displayName:"StyledHeading"})`
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
`,StyledSitesLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("a").withConfig({displayName:"StyledSitesLink"})`
  float: right;
  color: #4C54D2;
  font-size: 13px;
  letter-spacing: 0;
`,StyledText=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("p").withConfig({displayName:"StyledText"})`
  color: #838391;
  font-size: 14px;
  font-family: ${p=>p.theme.fontFamily.body};
  font-weight: 300;
  letter-spacing: 0;
  line-height: 28px;
`,StyledTotalContent=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledTotalContent"})`
  position: relative;
  padding-right: 25px;

  @media (max-width: 366px) {
    top: 11px;
  }
`,StyledWalletOverlay=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledWalletOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${p=>p.theme.color.modalOverlayBackground};
  align-items: center;
  z-index: 999;
  justify-content: center;
`,StyledWalletWrapper=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledWalletWrapper"})`
  height: 90vh;
  overflow-y: scroll;
  width: 90%;
  margin-top: 40px;
`,StyledWalletClose=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledWalletClose"})`
  top: 15px;
  right: 15px;
  position: fixed;
  color: ${p=>p.theme.color.subtleExclude};
  width: 25px;
`,StyledMobileSettingsContainer=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"StyledMobileSettingsContainer"})`
  display: flex;
  flex-direction: column;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const sizes={mini:{text:"14px",token:"14px",tokenNum:"14px"},small:{text:"14px",token:"14px",tokenNum:"14px"},normal:{text:"14px",token:"14px",tokenNum:"14px"}},colors={contribute:"#9752cb",default:"#4b4c5c",donation:"#696fdc",earnings:"#c12d7c",notPaid:"#838391"},StyledWrapper=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledWrapper"})`
  ${p=>{const size=sizes[p.size||"normal"],color=colors[p.color||"default"];return styled_components_browser_esm.css`
    --tokens-value-color: ${color};
    --tokens-text-size: ${size.text};
    --tokens-token-size: ${size.token};
    --tokens-tokenNum-size: ${size.tokenNum};
  `}}
`,StyledTokens=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTokens"})`
  display: inline-block;
`,StyledTokenValue=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTokenValue"})`
  color: var(--tokens-value-color);
  font-size: var(--tokens-tokenNum-size);
`,StyledContent=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledContent"})`
  color: #9E9FAB;
  font-size: var(--tokens-text-size);
  display: inline-block;
  margin-left: 8px;
`,StyledTokenCurrency=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTokenCurrency"})`
  font-size: var(--tokens-token-size);
  display: inline-block;
  margin-left: 4px;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return tokens_Tokens});class tokens_Tokens extends react.PureComponent{render(){const{id:id,converted:converted,value:value,hideText:hideText,isNegative:isNegative,size:size,color:color,currency:currency}=this.props;return react.createElement(StyledWrapper,{id:id,size:size,color:color},react.createElement(StyledTokens,null,react.createElement(StyledTokenValue,null,isNegative?"-":"",value),hideText?null:react.createElement(StyledTokenCurrency,null,"BAT")),void 0!==converted?react.createElement(StyledContent,null,converted," ",currency):null)}}tokens_Tokens.defaultProps={size:"normal",color:"default",currency:"USD",toFixed:"true"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",function(){return Title}),__webpack_require__.d(__webpack_exports__,"d",function(){return SubTitle}),__webpack_require__.d(__webpack_exports__,"c",function(){return Paragraph}),__webpack_require__.d(__webpack_exports__,"b",function(){return Link}),__webpack_require__.d(__webpack_exports__,"a",function(){return Bold});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_components_text_heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32);const Title=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_text_heading__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"Title"})`
  font-weight: 600;
  font-size: 24px;
  margin: 0 0 4px 0;
  line-height: 1.6;
`,SubTitle=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_text_heading__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"SubTitle"})`
  font-weight: 600;
  font-size: 20px;
  margin: 16px 0 12px 0;
`,Paragraph=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("p").withConfig({displayName:"Paragraph"})`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.75;
  margin: 0;
  font-family: ${p=>p.theme.fontFamily.body};
  padding: 0 0 12px 0;
`,Link=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(Paragraph.withComponent("a")).withConfig({displayName:"Link"})`
  color: ${p=>p.theme.color.subtle};
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  display: inline;
`,Bold=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("b").withConfig({displayName:"Bold"})`
  font-weight: 600;
`;Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("label").withConfig({displayName:"SwitchLabel"})`
  font-family: ${p=>p.theme.fontFamily.body};
  color: ${p=>p.theme.color.defaultControlActive};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: normal;
  margin: 0 12px;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={adsDesc:"Earn tokens by seeing ads on Brave. Ads are matched from machine learning and the data temporarily present in your browser without tracking your information or sending it outside.",adsDisabledTextOne:"Earnings are paid every month.",adsDisabledTextTwo:"Set your desired frequency to increase or decrease earnings.",adsDisplayed:"Ads displayed",adsEarnings:"Earnings this month",adsFreq:"Ad Frequency",adsMode:"Ad mode",adsTitle:"Brave Ads",contributionAllowed:"What should be allowed?",contributionDesc:"A simple way to support content creators. Set monthly allowance and browse normally. Your favorite sites (content sites only) receive your contributions automatically. You can exclude sites from funding here.",contributionMinTime:"Minimum page time before logging a visit",contributionMinVisits:"Minimum visits for publisher relevancy",contributionMonthly:"Monthly budget",contributionNextDate:"Next contribution date",contributionNonVerified:"Allow contribution to non-verified sites",contributionSites:"Supported sites",contributionTime5:"5 seconds",contributionTime60:"60 seconds",contributionTime8:"8 seconds",contributionTitle:"Brave Contribute",contributionVideos:"Allow contribution to videos",contributionVisit10:"10 visits",contributionVisit1:"1 visit",contributionVisit5:"5 visits",donationDesc:"Tip content creators directly as you browse or give tips to videos and tweets that you ‘like’. You can also set up recurring monthly tips so you can support sites continuously.",donationTitle:"Tips",donationTotal:"Total tips this month"}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",function(){return ModalHeader}),__webpack_require__.d(__webpack_exports__,"c",function(){return ModalContent}),__webpack_require__.d(__webpack_exports__,"e",function(){return OneColumnButtonGrid}),__webpack_require__.d(__webpack_exports__,"h",function(){return TwoColumnButtonGrid}),__webpack_require__.d(__webpack_exports__,"g",function(){return ThreeColumnButtonGrid}),__webpack_require__.d(__webpack_exports__,"b",function(){return DeviceGrid}),__webpack_require__.d(__webpack_exports__,"a",function(){return DeviceContainer}),__webpack_require__.d(__webpack_exports__,"f",function(){return ScanGrid});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_components_text_heading__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32);const ModalHeader=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("header").withConfig({displayName:"ModalHeader"})`
  margin-bottom: 8px;
`,ModalContent=(Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_text_heading__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"ModalTitle"})`
  font-weight: 500;
  font-size: 24px;
  margin: 0 0 4px;
  line-height: 1.6;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("span").withConfig({displayName:"ModalSubTitle"})`
  display: block;
  font-size: 18px;
  line-height: 1.6;
  color: ${p=>p.highlight&&"#ff0000"}
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ModalContent"})`
  margin-bottom: -12px;
`),OneColumnButtonGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"OneColumnButtonGrid"})`
  display: flex;
  justify-content: flex-end;
`,TwoColumnButtonGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"TwoColumnButtonGrid"})`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-gap: 15px;
  margin-top: 20px;
`,ThreeColumnButtonGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ThreeColumnButtonGrid"})`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 15px;
  margin-top: 20px;
  align-items: center;
`,DeviceGrid=(Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ThreeColumnButtonGridCol1"})`
  display: grid;
  align-items: center;
  grid-template-columns: auto;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ThreeColumnButtonGridCol2"})`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 15px;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"DeviceGrid"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 30px;
  height: 220px;
  margin: auto;
  align-items: center;
  justify-content: center;
`),DeviceContainer=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("a").withConfig({displayName:"DeviceContainer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px solid #C8C8D5;
  border-radius: 6px;
  cursor: pointer;
`,ScanGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ScanGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin: 25px auto;
  grid-gap: 30px;
  align-items: center;
  width: fit-content;
`;Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"QRCodeContainer"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  img {
    max-width: 100%;
  }
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"ViewSyncCodeGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  margin: 0 0 25px;
  img {
    max-width: 80%;
  }
`},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),brave_default=__webpack_require__(36);const StyledSharedHeading=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledSharedHeading"})`
  box-sizing: border-box;
  font-family: ${brave_default.a.fontFamily.heading};
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  margin: 0;
`,StyledH1=Object(styled_components_browser_esm.default)(StyledSharedHeading.withComponent("h1")).withConfig({displayName:"StyledH1"})`
  font-size: 48px;
`,StyledH2=Object(styled_components_browser_esm.default)(StyledSharedHeading.withComponent("h2")).withConfig({displayName:"StyledH2"})`
  font-size: 40px;
`,StyledH3=Object(styled_components_browser_esm.default)(StyledSharedHeading.withComponent("h3")).withConfig({displayName:"StyledH3"})`
  font-size: 32px;
`,StyledH4=Object(styled_components_browser_esm.default)(StyledSharedHeading.withComponent("h4")).withConfig({displayName:"StyledH4"})`
  font-size: 24px;
`,StyledH5=Object(styled_components_browser_esm.default)(StyledSharedHeading.withComponent("h5")).withConfig({displayName:"StyledH5"})`
  font-size: 20px;
`,StyledH6=Object(styled_components_browser_esm.default)(StyledSharedHeading.withComponent("h6")).withConfig({displayName:"StyledH6"})`
  font-size: 16px;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return heading_Heading});class heading_Heading extends react.PureComponent{render(){const{testId:testId,level:level,children:children,className:className}=this.props;switch(level){case 1:return react.createElement(StyledH1,{"data-test-id":testId,className:className},children);case 2:return react.createElement(StyledH2,{"data-test-id":testId,className:className},children);case 3:return react.createElement(StyledH3,{"data-test-id":testId,className:className},children);case 4:return react.createElement(StyledH4,{"data-test-id":testId,className:className},children);case 5:return react.createElement(StyledH5,{"data-test-id":testId,className:className},children);case 6:return react.createElement(StyledH6,{"data-test-id":testId,className:className},children);default:return react.createElement(StyledH1,{"data-test-id":testId,className:className},children)}}}},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"g",function(){return getTabIndexValueBasedOnProps}),__webpack_require__.d(__webpack_exports__,"f",function(){return getHostname}),__webpack_require__.d(__webpack_exports__,"h",function(){return stripProtocolFromUrl}),__webpack_require__.d(__webpack_exports__,"c",function(){return generateNoScriptInfoDataStructure}),__webpack_require__.d(__webpack_exports__,"b",function(){return filterNoScriptInfoByBlockedState}),__webpack_require__.d(__webpack_exports__,"a",function(){return checkEveryItemIsBlockedOrAllowed}),__webpack_require__.d(__webpack_exports__,"d",function(){return getBlockAllText}),__webpack_require__.d(__webpack_exports__,"e",function(){return getBlockScriptText});var _fakeLocale__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);const getTabIndexValueBasedOnProps=(isBlockedListOpen,numberOfBlockedItems)=>isBlockedListOpen||0===numberOfBlockedItems?-1:0,getOrigin=url=>new window.URL(url).origin,getHostname=url=>new window.URL(url).hostname,stripProtocolFromUrl=url=>url.replace(/(^\w+:|^)\/\//,""),filterResourceByOrigin=(noScriptInfo,url)=>Object.entries(noScriptInfo).filter(script=>getOrigin(url)===getOrigin(script[0])),generateNoScriptInfoDataStructure=noScriptInfo=>{let newData=[];for(const[url]of Object.entries(noScriptInfo)){newData.some(item=>item[0]===getOrigin(url))||newData.push([getOrigin(url),filterResourceByOrigin(noScriptInfo,url)])}return newData},filterNoScriptInfoByBlockedState=(noScriptInfo,maybeBlock,filterByDifference)=>filterByDifference?noScriptInfo.filter(script=>script[1].willBlock!==maybeBlock):noScriptInfo.filter(script=>script[1].willBlock===maybeBlock),checkEveryItemIsBlockedOrAllowed=(noScriptInfo,isBlocked,shouldParseData)=>shouldParseData?Object.entries(noScriptInfo).filter(script=>script[1].willBlock===isBlocked).every(script=>script[1].userInteracted):noScriptInfo.filter(script=>script[1].willBlock===isBlocked).every(script=>script[1].userInteracted),getBlockAllText=(noScriptInfo,isBlocked)=>{const everyItemIsWasInteracted=Object.entries(noScriptInfo).every(data=>data[1].willBlock===isBlocked&&data[1].userInteracted);return isBlocked?everyItemIsWasInteracted?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("allowedOnce"):Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("allowAll"):everyItemIsWasInteracted?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("blockedOnce"):Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("blockAll")},getBlockScriptText=(haveUserInteracted,isBlocked)=>haveUserInteracted?isBlocked?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("allowedOnce"):Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("blockedOnce"):isBlocked?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("allow"):Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_0__.a)("block")},,function(module,__webpack_exports__,__webpack_require__){"use strict";var _colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6);const theme={name:"Default",palette:Object.assign({},_colors__WEBPACK_IMPORTED_MODULE_0__.a),color:{brandBrave:_colors__WEBPACK_IMPORTED_MODULE_0__.a.orange500,brandBat:_colors__WEBPACK_IMPORTED_MODULE_0__.a.blurple500,brandBraveInteracting:_colors__WEBPACK_IMPORTED_MODULE_0__.a.orange500,brandBraveActive:_colors__WEBPACK_IMPORTED_MODULE_0__.a.orange200,brandBraveLight:_colors__WEBPACK_IMPORTED_MODULE_0__.a.orange000,brandBatInteracting:_colors__WEBPACK_IMPORTED_MODULE_0__.a.blurple500,brandBatActive:_colors__WEBPACK_IMPORTED_MODULE_0__.a.blurple200,defaultControl:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey800,defaultControlInteracting:_colors__WEBPACK_IMPORTED_MODULE_0__.a.black,defaultControlActive:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey700,warn:_colors__WEBPACK_IMPORTED_MODULE_0__.a.red500,warnInteracting:_colors__WEBPACK_IMPORTED_MODULE_0__.a.red600,warnActive:_colors__WEBPACK_IMPORTED_MODULE_0__.a.red700,subtle:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey400,subtleBackground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey100,subtleExclude:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey300,subtleInteracting:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey500,subtleActive:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey600,disabled:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey300,disabledResourceBlocked:_colors__WEBPACK_IMPORTED_MODULE_0__.a.neutral600,panelBackground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.white,panelBackgroundSecondary:_colors__WEBPACK_IMPORTED_MODULE_0__.a.neutral000,primaryBackground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.white,contextMenuBackground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.white,secondaryBackground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey400,modalOverlayBackground:"rgba(36,37,54,0.85)",contextMenuForeground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey800,detailDescription:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey500,text:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey700,inputBorder:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey500,separatorLine:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey100,lionLogo:_colors__WEBPACK_IMPORTED_MODULE_0__.a.grey500},fontFamily:{heading:"Poppins, sans-serif",body:"Muli, sans-serif",system:'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'}};__webpack_exports__.a=theme},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  margin-bottom: 24px;
`,StyledLabel=Object(theme.b)("div").withConfig({displayName:"StyledLabel"})`
  width: 100%;
  font-family: ${p=>p.theme.fontFamily.body};
  line-height: normal;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  ${p=>{let color="#686978";return"dark"===p.type&&(color="#fff"),p.disabled&&(color="#D1D1DB","dark"===p.type&&(color="#686978")),theme.a`
    --controlWrapper-label-color: ${color};
  `}};
  color: var(--controlWrapper-label-color);
`;__webpack_require__.d(__webpack_exports__,"a",function(){return controlWrapper_ControlWrapper});class controlWrapper_ControlWrapper extends react.PureComponent{render(){const{id:id,text:text,children:children,type:type,disabled:disabled}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledLabel,{type:type,disabled:disabled},text),children)}}controlWrapper_ControlWrapper.defaultProps={type:"light",disabled:!1}},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return getLocale});const locale={trackersBlocked:"Trackers Blocked",adsBlocked:"Ads Blocked",httpsUpgrades:"HTTPS Upgrades",estimatedTimeSaved:"Estimated Time Saved",minutes:"minutes",photoBy:"Photo by",thumbRemoved:"Top site removed",undoRemoved:"Undo",restoreAll:"Restore All",close:"Close",dashboardSettings:"Dashboard Settings",showBackgroundImg:"Show background image"};const getLocale=word=>locale[word]},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(12, 13, 33, 0.85);
  z-index: 99;
  padding: 0 20px;
  overflow: hidden;
`,StyledDialog=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledDialog"})`
  max-width: ${p=>"small"===p.size?"666px":"920px"};
  margin: 52px auto;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`,StyledClose=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledClose"})`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: #9E9FAB;
`,StyledContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledContent"})`
  padding: 48px 48px;
  overflow-y: auto;
  max-height: calc(100vh - ${p=>((isMobile,isLandscape)=>isMobile?isMobile&&!isLandscape?180:isMobile&&isLandscape?75:0:100)(p.isMobile,p.isLandscape)}px);
`;var close_circle_o=__webpack_require__(191);__webpack_require__.d(__webpack_exports__,"a",function(){return modal_Modal});class modal_Modal extends react.PureComponent{constructor(){super(...arguments),this.outsideClose=(()=>{this.props.outsideClose&&this.props.onClose&&this.props.onClose()}),this.isLandscape=(()=>{return window.innerWidth>window.innerHeight})}render(){const{id:id,onClose:onClose,displayCloseButton:displayCloseButton,children:children,size:size,testId:testId,isMobile:isMobile}=this.props;return react.createElement(StyledWrapper,{id:id,onClick:this.outsideClose,"data-test-id":testId},react.createElement(StyledDialog,{size:size},displayCloseButton?react.createElement(StyledClose,{onClick:onClose},react.createElement(close_circle_o.a,null)):null,react.createElement(StyledContent,{isMobile:isMobile,isLandscape:this.isLandscape()},children)))}}modal_Modal.defaultProps={size:"normal",id:"modal",displayCloseButton:!0}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"d",function(){return WelcomeLionImage}),__webpack_require__.d(__webpack_exports__,"c",function(){return WelcomeImportImage}),__webpack_require__.d(__webpack_exports__,"e",function(){return WelcomeRewardsImage}),__webpack_require__.d(__webpack_exports__,"f",function(){return WelcomeSearchImage}),__webpack_require__.d(__webpack_exports__,"g",function(){return WelcomeShieldsImage}),__webpack_require__.d(__webpack_exports__,"h",function(){return WelcomeThemeImage}),__webpack_require__.d(__webpack_exports__,"b",function(){return BackgroundContainer}),__webpack_require__.d(__webpack_exports__,"a",function(){return Background});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_lion_logo_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(489),_lion_logo_svg__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_lion_logo_svg__WEBPACK_IMPORTED_MODULE_1__),_welcome_import_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(490),_welcome_import_svg__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_welcome_import_svg__WEBPACK_IMPORTED_MODULE_2__),_welcome_rewards_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(491),_welcome_rewards_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_welcome_rewards_svg__WEBPACK_IMPORTED_MODULE_3__),_welcome_search_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(492),_welcome_search_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_welcome_search_svg__WEBPACK_IMPORTED_MODULE_4__),_welcome_shields_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(493),_welcome_shields_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_welcome_shields_svg__WEBPACK_IMPORTED_MODULE_5__),_welcome_theme_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(494),_welcome_theme_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_welcome_theme_svg__WEBPACK_IMPORTED_MODULE_6__),_welcome_bg_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(495),_welcome_bg_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_welcome_bg_svg__WEBPACK_IMPORTED_MODULE_7__);const BaseImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("img").withConfig({displayName:"BaseImage"})`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
`,WelcomeLionImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseImage).attrs({src:_lion_logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a}).withConfig({displayName:"WelcomeLionImage"})`
  height: 140px;
`,WelcomeImportImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseImage).attrs({src:_welcome_import_svg__WEBPACK_IMPORTED_MODULE_2___default.a}).withConfig({displayName:"WelcomeImportImage"})`
  height: 190px;
`,WelcomeRewardsImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseImage).attrs({src:_welcome_rewards_svg__WEBPACK_IMPORTED_MODULE_3___default.a}).withConfig({displayName:"WelcomeRewardsImage"})`
  height: 190px;
`,WelcomeSearchImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseImage).attrs({src:_welcome_search_svg__WEBPACK_IMPORTED_MODULE_4___default.a}).withConfig({displayName:"WelcomeSearchImage"})`
  height: 190px;
`,WelcomeShieldsImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseImage).attrs({src:_welcome_shields_svg__WEBPACK_IMPORTED_MODULE_5___default.a}).withConfig({displayName:"WelcomeShieldsImage"})`
  height: 190px;
`,WelcomeThemeImage=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseImage).attrs({src:_welcome_theme_svg__WEBPACK_IMPORTED_MODULE_6___default.a}).withConfig({displayName:"WelcomeThemeImage"})`
  height: 190px;
`,topToBottom=styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`,BackgroundContainer=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"BackgroundContainer"})`
  box-sizing: border-box;
  width: inherit;
  height: inherit;
  position: absolute;
  animation-delay: 0s;
  animation-name: ${topToBottom};
  animation-duration: 2000ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  overflow: hidden;
`,Background=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"Background"})`
  box-sizing: border-box;
  background: url('${_welcome_bg_svg__WEBPACK_IMPORTED_MODULE_7___default.a}') repeat-x;
  width: 500%;
  height: inherit;
  will-change: transform;
  transform: translateX(${p=>p.position});
  transition: transform ease-in-out 1200ms;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={passphrase:"abandon ability able about above absent absorb abstract absurd abuse access accident account accuse access acid acoustic acquire across act action actor actress actual",device1:{id:"0",name:"MacOS without the ESC key",lastActive:"Thu Dec 20 2018"},device2:{id:"1",name:"Windowz machineh",lastActive:"Thu Dec 20 2018"}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return DisabledContent}),__webpack_require__.d(__webpack_exports__,"b",function(){return EnabledContent}),__webpack_require__.d(__webpack_exports__,"c",function(){return Main}),__webpack_require__.d(__webpack_exports__,"d",function(){return SyncCard}),__webpack_require__.d(__webpack_exports__,"e",function(){return SyncCardContent}),__webpack_require__.d(__webpack_exports__,"f",function(){return TableRowDevice}),__webpack_require__.d(__webpack_exports__,"g",function(){return TableRowRemoveButton}),__webpack_require__.d(__webpack_exports__,"h",function(){return TableRowToggleButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_theme__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(83);const DisabledContent=Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("div").withConfig({displayName:"DisabledContent"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  background-color: #efeff0;
`,EnabledContent=Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("div").withConfig({displayName:"EnabledContent"})`
  height: inherit;
  background-color: #efeff0;
`,Main=Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("main").withConfig({displayName:"Main"})`
  font-family: ${p=>p.theme.fontFamily.body};
  color: ${p=>p.theme.color.defaultControl};
  padding: 50px 15px;
  max-width: 830px;
  margin: auto;
`,SyncCard=props=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({useDefaultContentPadding:!1},props)),SyncCardContent=Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("div").withConfig({displayName:"SyncCardContent"})`
  padding: 60px 80px;
`,TableRowDevice=(Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("span").withConfig({displayName:"TableRowId"})`
  width: 5ch;
  text-align: center;
  display: block;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("span").withConfig({displayName:"TableRowDevice"})`
  max-width: 30ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`),TableRowRemoveButton=(Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("span").withConfig({displayName:"TableRowRemove"})`
  display: block;
  text-align: center;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("button").withConfig({displayName:"TableRowRemoveButton"})`
  text-align: center;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: block;
  margin: auto;
  width: 24px;
`),TableRowToggleButton=Object(_theme__WEBPACK_IMPORTED_MODULE_1__.b)("span").withConfig({displayName:"TableRowToggleButton"})`
  float: right;
  margin: 9px;
`},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"h",function(){return SelectGrid}),__webpack_require__.d(__webpack_exports__,"b",function(){return Footer}),__webpack_require__.d(__webpack_exports__,"c",function(){return FooterLeftColumn}),__webpack_require__.d(__webpack_exports__,"d",function(){return FooterMiddleColumn}),__webpack_require__.d(__webpack_exports__,"e",function(){return FooterRightColumn}),__webpack_require__.d(__webpack_exports__,"a",function(){return Content}),__webpack_require__.d(__webpack_exports__,"f",function(){return Page}),__webpack_require__.d(__webpack_exports__,"g",function(){return Panel}),__webpack_require__.d(__webpack_exports__,"i",function(){return SlideContent});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const fadeIn=styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,BaseGrid=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"BaseGrid"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
`,BaseColumn=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"BaseColumn"})`
  box-sizing: border-box;
  position: relative;
  display: flex;
`,SelectGrid=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseGrid).withConfig({displayName:"SelectGrid"})`
  display: grid;
  height: 100%;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 30px;
  grid-gap: 30px;
  align-items: center;
`,Footer=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseGrid.withComponent("footer")).withConfig({displayName:"Footer"})`
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 50px 40px;
`,FooterLeftColumn=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseColumn).withConfig({displayName:"FooterLeftColumn"})`
  align-items: center;
  justify-content: flex-start;
`,FooterMiddleColumn=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseColumn).withConfig({displayName:"FooterMiddleColumn"})`
  align-items: center;
  justify-content: center;
`,FooterRightColumn=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(BaseColumn).withConfig({displayName:"FooterRightColumn"})`
  align-items: center;
  justify-content: flex-end;
`,Content=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("section").withConfig({displayName:"Content"})`
  opacity: 0;
  will-change: transform;
  transform: translateX(${p=>p.isPrevious?"-"+p.screenPosition:p.screenPosition}) scale(0.8);
  transition: opacity 700ms, transform 700ms ease-in-out;
  position: absolute;
  z-index: ${p=>p.zIndex};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 60px;

  ${p=>p.active&&styled_components__WEBPACK_IMPORTED_MODULE_0__.css`
    opacity: 1;
    transform: translateX(0) scale(1);
  `}
`,Page=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"Page"})`
  width: inherit%;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`,Panel=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"Panel"})`
  user-select: none;
  /* animation start state must be the same as "from" keyframe */
  opacity: 0;
  /* animation stuff courtesy of ross */
  animation-delay: 1s;
  animation-name: ${fadeIn};
  animation-duration: 1200ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  /* end of animation stuff */
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  margin: 0;
  background-color: rgba(255,255,255,0.99);
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(39, 46, 64, 0.2);
  max-width: 600px;
  width: 100%;
  min-height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  font-size: inherit;
`,SlideContent=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("div").withConfig({displayName:"SlideContent"})`
  max-width: inherit;
  min-height: 540px;
  display: flex;
  justify-content: center;
  align-items: center;
`},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledNoContent=Object(theme.b)("div").withConfig({displayName:"StyledNoContent"})`
  text-align: center;
  padding: 30px 0;
  color: #999ea2;
  font-size: 14px;
`,StyledTable=Object(theme.b)("table").withConfig({displayName:"StyledTable"})`
  min-width: 100%;
  margin: 24px 0;
`,StyledTH=Object(theme.b)("th").withConfig({displayName:"StyledTH"})`
  text-transform: uppercase;
  text-align: left;
  font-family: ${p=>p.theme.fontFamily.body};
  font-size: 12px;
  font-weight: 500;
  border-bottom: 2px solid #dedfe4;
  border-top: 2px solid #dedfe4;
  color: #4B4C5C;
  padding: 12px 0;

  ${p=>p.customStyle?theme.a`
      ${p.customStyle}
    `:""};
`,StyledTR=Object(theme.b)("tr").withConfig({displayName:"StyledTR"})`
  ${p=>p.customStyle?theme.a`
      ${p.customStyle}
    `:""};
`,StyledTD=Object(theme.b)("td").withConfig({displayName:"StyledTD"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #686978;
  border-bottom: solid 1px #e4e8ec;
  padding: 12px 0;
  text-align: left;

  ${p=>p.customStyle?theme.a`
      ${p.customStyle}
    `:""};
`;__webpack_require__.d(__webpack_exports__,"a",function(){return table_Table});class table_Table extends react.PureComponent{render(){const{id:id,header:header,rows:rows,children:children}=this.props;return react.createElement("div",{id:id},header&&header.length>0?react.createElement(StyledTable,null,header?react.createElement("thead",null,react.createElement("tr",null,header.map((cell,i)=>react.createElement(StyledTH,{key:`${id}-th-${i}`,customStyle:cell.customStyle},cell.content)))):null,rows?react.createElement("tbody",null,rows.map((row,i)=>react.createElement(StyledTR,{key:i,customStyle:row.customStyle},row.content.map((cell,j)=>react.createElement(StyledTD,{key:`${id}-td-${i}-${j}`,customStyle:cell.customStyle},cell.content))))):null):null,rows&&0!==rows.length?null:react.createElement(StyledNoContent,null,children))}}},,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return Title}),__webpack_require__.d(__webpack_exports__,"a",function(){return Paragraph});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(32);const Title=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)(_index__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"Title"})`
  font-size: 28px;
  color: #212121;
  margin: 10px 0 0;
  text-align: center;
  line-height: 44px;
`,Paragraph=Object(styled_components__WEBPACK_IMPORTED_MODULE_0__.default)("p").withConfig({displayName:"Paragraph"})`
  display: block;
  -webkit-font-smoothing: antialiased;
  font-size: 17px;
  color: #76777A;
  line-height: 32px;
  text-align: center;
  margin: 10px 0 20px;
  font-family: Muli, sans-serif;
`},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  display: flex;
`,StyleToggle=Object(theme.b)("div").withConfig({displayName:"StyleToggle"})`
  position: relative;
  display: block;
  height: ${p=>"small"===p.size?"16px":"24px"};
  width: ${p=>"small"===p.size?"28px":"40px"};

  ${p=>p.disabled?theme.a`
      pointer-events: none;
      animation: none;
    `:""};
`,StyledSlider=Object(theme.b)("div").withConfig({displayName:"StyledSlider"})`
  background: ${p=>p.disabled?"#F6F6FA":"#A7ACB2"};
  height: ${p=>"small"===p.size?"6px":"8px"};
  margin-top: ${p=>"small"===p.size?"5px":"8px"};
  width: 100%;
  border-radius: 3px;
`,StyledBullet=Object(theme.b)("div").withConfig({displayName:"StyledBullet"})`
  position: relative;
  border-radius: 50%;
  transition: all .4s ease;
  ${p=>{let size=20,offX=20,offY=4,bgColor="#6D73D2";return"small"===p.size&&(size=16,offX=12,offY=3),"light"===p.type&&(bgColor="#fb542b"),p.checked||(offX=-1,bgColor="#CDD1D5"),p.disabled&&(bgColor="#EBECF0"),theme.a`
    --toggle-bullet-size: ${size}px;
    --toggle-bullet-transform: translate(${offX}px, calc(-50% - ${offY}px));
    --toggle-bullet-background: ${bgColor};
  `}};
  width: var(--toggle-bullet-size);
  height: var(--toggle-bullet-size);
  transform: var(--toggle-bullet-transform);
  background-color: var(--toggle-bullet-background);
  box-shadow: 0 3px 3px rgba(0,0,0,0.05);
`,StyledText=Object(theme.b)("div").withConfig({displayName:"StyledText"})`
  color: #838391;
  font-size: ${p=>"small"===p.size?"12px":"14px"};
  font-family: ${p=>p.theme.fontFamily.body};
  text-align: right;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin: ${p=>"small"===p.size?"0px":"4px"} 8px 0 0;
  opacity: ${p=>p.checked||p.disabled?0:1};
  transition: 100ms ease-out;
`;var helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return toggle_Toggle});class toggle_Toggle extends react.PureComponent{render(){const{id:id,onToggle:onToggle,disabled:disabled,checked:checked,type:type,size:size,testId:testId}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledText,{size:size,checked:checked,disabled:disabled},Object(helpers.a)("off")),react.createElement(StyleToggle,{"data-test-id":"toggle","data-test-id2":testId,"data-toggled":checked,onClick:disabled?void 0:onToggle,size:size},react.createElement(StyledSlider,{size:size,disabled:disabled}),react.createElement(StyledBullet,{size:size,checked:checked,type:type,disabled:disabled})))}}toggle_Toggle.defaultProps={size:"large",type:"dark"}},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/brave-favicon.adb43b84.png"},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ViewSyncCodeModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(315),_src_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_src_components_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(257),_src_features_sync__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(28),_src_features_sync__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(23),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8),_page_fakeData__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(44);class ViewSyncCodeModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(){super(...arguments),this.onCancel=(event=>{event.preventDefault(),this.props.onClose()})}render(){const{onClose:onClose}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"viewSyncCodeModal",displayCloseButton:!1,size:"small"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("chainCode")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("chainCodeDescriptionPartial1")," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.a,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("chainCodeDescriptionPartial2"))," ",Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("chainCodeDescriptionPartial3")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{copiedString:"Copied!",wordCountString:"Word Count:",readOnly:!0,defaultValue:_page_fakeData__WEBPACK_IMPORTED_MODULE_8__.a.passphrase}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.g,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.b,{onClick:this.onCancel},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("cancel"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_3__.a,{level:"secondary",type:"subtle",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("qrCode")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_3__.a,{level:"secondary",type:"accent",size:"medium",onClick:onClose,disabled:!0,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("lookingForDevice"),icon:{position:"before",image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_4__.a,null)}})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1),styled_components_browser_esm=__webpack_require__(2);const fadeInOut=styled_components_browser_esm.keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,fadeIn=styled_components_browser_esm.keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`,fadeOutWrap=styled_components_browser_esm.keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`,fadeInFromNull=styled_components_browser_esm.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,fadeOutToNull=styled_components_browser_esm.keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  display: flex;
  align-items: center;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledImageWrapper=Object(theme.b)("div").withConfig({displayName:"StyledImageWrapper"})`
  position: relative;
  display: flex;

  ${p=>"big"===p.type?theme.a`
      height: 32px;
      width: 32px;
    `:theme.a`
    height: 24px;
    width: 24px
  `};
`,StyledImage=theme.b.img.withConfig({displayName:"StyledImage"})`
  max-width: 100%;
  max-height: 100%;
`,StyledVerified=Object(theme.b)("span").withConfig({displayName:"StyledVerified"})`
  top: -6px;
  right: -8px;
  width: 16px;
  height: 16px;
  color: ${p=>p.theme.palette.blurple500};
  background-color: #FFFFFF;
  border-radius: 20px;
  position: absolute;
`,StyledContent=theme.b.div.withConfig({displayName:"StyledContent"})`
  padding: 0 0 0 12px;
`,StyledTitleWrap=theme.b.div.withConfig({displayName:"StyledTitleWrap"})`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  color: ${p=>p.theme.palette.grey800};
`,StyledTitle=Object(theme.b)("span").withConfig({displayName:"StyledTitle"})`
  font-size: ${p=>"big"===p.type?"18px":null};
`,StyledProvider=Object(theme.b)("span").withConfig({displayName:"StyledProvider"})`
  padding-left: 4px;
  font-size: ${p=>"big"===p.type?"16px":null};
  font-weight: ${p=>"big"===p.type?"400":null};
`,StyledProviderWrap=Object(theme.b)("div").withConfig({displayName:"StyledProviderWrap"})`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 4px 0;
`,StyledProviderWrapRefreshing=Object(theme.b)("div").withConfig({displayName:"StyledProviderWrapRefreshing"})`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 4px 0;
  opacity: 0.2;
  animation-name: ${fadeOutWrap};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`,StyledProviderWrapRefreshFinished=Object(theme.b)("div").withConfig({displayName:"StyledProviderWrapRefreshFinished"})`
  display: flex;
  align-items: center;
  font-size: 13px;
  margin: 4px 0;
  opacity: 0.2;
  animation-name: ${fadeIn};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-delay: 2250ms;
`,StyledVerifiedText=Object(theme.b)("span").withConfig({displayName:"StyledVerifiedText"})`
  color: ${p=>p.theme.palette.grey800};
`,StyledVerifiedCheckLink=Object(theme.b)("span").withConfig({displayName:"StyledVerifiedCheckLink"})`
  color: ${p=>p.theme.palette.blurple500};
  cursor: pointer;
  text-decoration: none;
  z-index: 1;

  &:hover{
    text-decoration: underline;
    color: ${p=>p.theme.palette.blurple400};
  }
`,StyledVerifiedCheckNoLink=Object(theme.b)("span").withConfig({displayName:"StyledVerifiedCheckNoLink"})`
  color: ${p=>p.theme.palette.grey400};
  text-decoration: none;
  z-index: 1;
`,StyledVerifiedDivider=theme.b.span.withConfig({displayName:"StyledVerifiedDivider"})`
  margin: 0 8px;
  height: 12px;
  width: 1px;
  background: ${p=>p.theme.palette.grey400};
`,StyledInlineVerified=theme.b.span.withConfig({displayName:"StyledInlineVerified"})`
  color: ${p=>p.theme.palette.blurple500};
  width: 16px;
  height: 16px;
  margin: 0 4px 0 0;
`,StyledInlineUnVerified=Object(theme.b)(StyledInlineVerified).withConfig({displayName:"StyledInlineUnVerified"})`
  color: ${p=>p.theme.palette.grey500};
`,StyledRefreshOverlay=Object(theme.b)("div").withConfig({displayName:"StyledRefreshOverlay"})`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  color: ${p=>p.theme.palette.blurple500};
  top: 0;
  left: 0;
  margin-top: 25px;
`,StyledRefreshOverlayFinished=Object(theme.b)("div").withConfig({displayName:"StyledRefreshOverlayFinished"})`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: center;
  color: ${p=>p.theme.palette.blurple500};
  top: 0;
  left: 0;
  margin-top: 25px;
  opacity: 1;
  animation-name: ${fadeOutToNull};
  animation-duration: 500ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`,StyledRefreshCheckOverlayFinished=Object(theme.b)("div").withConfig({displayName:"StyledRefreshCheckOverlayFinished"})`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  color: ${p=>p.theme.palette.blurple500};
  top: 0;
  left: 0;
  margin-top: 25px;
  opacity: 0;
  animation-name: ${fadeInOut};
  animation-delay: 1000ms;
  animation-duration: 1250ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
`,StyledRefresh=Object(theme.b)(StyledInlineVerified).withConfig({displayName:"StyledRefresh"})`
  position: absolute;
  text-align: center;
  display: flex;
  opacity: 0;
  animation-name: ${fadeInFromNull};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`,StyledRefreshLoaderFinished=Object(theme.b)(StyledInlineVerified).withConfig({displayName:"StyledRefreshLoaderFinished"})`
  position: absolute;
  text-align: center;
  display: flex;
`,StyledRefreshFinished=Object(theme.b)("span").withConfig({displayName:"StyledRefreshFinished"})`
  position: absolute;
  height: 24px;
  width: 24px;
  color: ${p=>p.theme.palette.blurple500};
`;theme.b.span.withConfig({displayName:"StyledSubTitle"})`
  margin-top: 4px;
`;var helpers=__webpack_require__(3),verified_s=__webpack_require__(414),loader=__webpack_require__(257),checkmark_circle_s=__webpack_require__(402),unverified_s=__webpack_require__(413);__webpack_require__.d(__webpack_exports__,"a",function(){return profile_Profile});class profile_Profile extends react.PureComponent{constructor(){super(...arguments),this.getVerifiedInfo=(()=>react.createElement(react.Fragment,null,react.createElement(StyledInlineVerified,null,react.createElement(verified_s.a,null))," ",react.createElement(StyledVerifiedText,null,Object(helpers.a)("verifiedPublisher")))),this.getDefaultVerifiedPanelWrap=(()=>react.createElement(StyledProviderWrap,null,this.getVerifiedInfo())),this.getVerifiedPanelWrapRefreshing=(()=>react.createElement(react.Fragment,null,react.createElement(StyledProviderWrapRefreshing,null,this.getVerifiedInfo()),react.createElement(StyledRefreshOverlay,null,react.createElement(StyledRefresh,null,react.createElement(loader.a,null))))),this.getVerifiedPanelWrapRefreshFinished=(()=>react.createElement(react.Fragment,null,react.createElement(StyledProviderWrapRefreshFinished,null,this.getVerifiedInfo()),react.createElement(StyledRefreshOverlayFinished,null,react.createElement(StyledRefreshLoaderFinished,null,react.createElement(loader.a,null))),react.createElement(StyledRefreshCheckOverlayFinished,null,react.createElement(StyledRefreshFinished,null,react.createElement(checkmark_circle_s.a,null))))),this.getVerifiedPanelWrapping=(()=>{const{refreshingPublisher:refreshingPublisher,publisherRefreshed:publisherRefreshed}=this.props;return refreshingPublisher||publisherRefreshed?!publisherRefreshed&&refreshingPublisher?this.getVerifiedPanelWrapRefreshing():this.getVerifiedPanelWrapRefreshFinished():this.getDefaultVerifiedPanelWrap()}),this.getUnverifiedInfo=(()=>react.createElement(react.Fragment,null,react.createElement(StyledInlineUnVerified,null,react.createElement(unverified_s.a,null))," ",react.createElement(StyledVerifiedText,null,Object(helpers.a)("unVerifiedPublisher")),react.createElement(StyledVerifiedDivider,null))),this.getDefaultUnverifiedPanelWrap=(()=>{const{onRefreshPublisher:onRefreshPublisher}=this.props;return react.createElement(StyledProviderWrap,null,this.getUnverifiedInfo(),react.createElement(StyledVerifiedCheckLink,{onClick:onRefreshPublisher,"data-test-id":"unverified-check-button"},Object(helpers.a)("unVerifiedCheck")))}),this.getUnverifiedPanelWrapRefreshing=(()=>react.createElement(react.Fragment,null,react.createElement(StyledProviderWrapRefreshing,null,this.getUnverifiedInfo(),react.createElement(StyledVerifiedCheckLink,null,Object(helpers.a)("unVerifiedCheck"))),react.createElement(StyledRefreshOverlay,null,react.createElement(StyledRefresh,null,react.createElement(loader.a,null))))),this.getUnverifiedPanelWrapRefreshFinished=(()=>react.createElement(react.Fragment,null,react.createElement(StyledProviderWrapRefreshFinished,null,this.getUnverifiedInfo(),react.createElement(StyledVerifiedCheckNoLink,null,Object(helpers.a)("unVerifiedCheck"))),react.createElement(StyledRefreshOverlayFinished,null,react.createElement(StyledRefreshLoaderFinished,null,react.createElement(loader.a,null))),react.createElement(StyledRefreshCheckOverlayFinished,null,react.createElement(StyledRefreshFinished,null,react.createElement(checkmark_circle_s.a,null))))),this.getUnverifiedPanelWrapping=(()=>{const{refreshingPublisher:refreshingPublisher,publisherRefreshed:publisherRefreshed}=this.props;return publisherRefreshed||refreshingPublisher?!publisherRefreshed&&refreshingPublisher?this.getUnverifiedPanelWrapRefreshing():this.getUnverifiedPanelWrapRefreshFinished():this.getDefaultUnverifiedPanelWrap()})}getProviderName(provider){switch(provider){case"youtube":return`${Object(helpers.a)("on")} YouTube`;case"twitter":return`${Object(helpers.a)("on")} Twitter`;case"twitch":return`${Object(helpers.a)("on")} Twitch`;case"reddit":return`${Object(helpers.a)("on")} Reddit`;case"vimeo":return`${Object(helpers.a)("on")} Vimeo`;case"github":return`${Object(helpers.a)("on")} GitHub`}}getSrc(src){return src||""}render(){const{id:id,type:type,provider:provider,src:src,title:title,verified:verified,showUnVerifiedHelpIcon:showUnVerifiedHelpIcon}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledImageWrapper,{type:type},react.createElement(StyledImage,{src:this.getSrc(src)}),verified&&"small"===type?react.createElement(StyledVerified,null,react.createElement(verified_s.a,null)):null),react.createElement(StyledContent,null,react.createElement(StyledTitleWrap,null,react.createElement(StyledTitle,{type:type},title),provider?react.createElement(StyledProvider,{type:type},this.getProviderName(provider)):null),verified&&"big"===type?this.getVerifiedPanelWrapping():showUnVerifiedHelpIcon?this.getUnverifiedPanelWrapping():null))}}profile_Profile.defaultProps={type:"small"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return StyledCheckbox}),__webpack_require__.d(__webpack_exports__,"e",function(){return StyledWrapper}),__webpack_require__.d(__webpack_exports__,"a",function(){return StyleToggle}),__webpack_require__.d(__webpack_exports__,"d",function(){return StyledSlider}),__webpack_require__.d(__webpack_exports__,"b",function(){return StyledBullet});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theme_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const StyledCheckbox=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("input").withConfig({displayName:"StyledCheckbox"})`
  -webkit-appearance: none;
  position: absolute;
  z-index: 99999999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline-offset: -3px;
  outline-color: ${_theme_colors__WEBPACK_IMPORTED_MODULE_1__.a.orange400};
  outline-width: 2px;
`,StyledWrapper=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"StyledWrapper"})`
  box-sizing: border-box;
  display: flex;
  position: relative;
`,StyleToggle=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"StyleToggle"})`
  box-sizing: border-box;
  position: relative;
  display: block;
  height: ${p=>"small"===p.size?"16px":"24px"};
  width: ${p=>"small"===p.size?"28px":"40px"};

  ${p=>p.disabled?_theme__WEBPACK_IMPORTED_MODULE_0__.a`
      pointer-events: none;
      animation: none;
    `:""};
`,StyledSlider=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("label").withConfig({displayName:"StyledSlider"})`
  box-sizing: border-box;
  background: ${p=>p.disabled?"rgba(246,246,250,0.1)":"#C4C7C9"};
  height: ${p=>"small"===p.size?"6px":"8px"};
  margin-top: ${p=>"small"===p.size?"5px":"8px"};
  width: 100%;
  border-radius: 3px;
  display: block;
`,transform=p=>{let x="small"===p.size?"12px":"20px",y="small"===p.size?"3px":"4px";return p.checked||(x="-1px"),{x:x,y:y}},StyledBullet=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("label").withConfig({displayName:"StyledBullet"})`
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  transition: all .4s ease;
  transform: ${p=>`translate(${(p=>`${transform(p).x}, calc(-50% - ${transform(p).y})`)(p)})`};
  width: ${p=>"small"===p.size?"16px":"20px"};
  height: ${p=>"small"===p.size?"16px":"20px"};
  background-color: ${p=>p.disabled||p.checked?"#fb542b":"#ebecf0"};
  display: block;
  box-shadow: 0 3px 3px rgba(0,0,0,0.05);
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return FooterButton}),__webpack_require__.d(__webpack_exports__,"d",function(){return SkipButton}),__webpack_require__.d(__webpack_exports__,"c",function(){return PrimaryButton}),__webpack_require__.d(__webpack_exports__,"a",function(){return Bullet});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12);const BaseButton=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("button").withConfig({displayName:"BaseButton"})`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  display: block;
  line-height: 1;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
`,FooterButton=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"FooterButton"})`
  outline: none;
  border: 1px solid ${p=>p.theme.palette.grey400};
  color: ${p=>p.theme.color.text};

  &:hover {
    opacity: .9;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(255,80,0,0.2);
  }
`,SkipButton=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BaseButton).withConfig({displayName:"SkipButton"})`
  color: ${p=>p.theme.color.text};
  text-decoration: underline;
  font-weight: 300;
  letter-spacing: 0;

  &:hover {
    opacity: .9;
  }
`,PrimaryButton=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"PrimaryButton"})`
  outline: none;

  &:hover {
    opacity: .9;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(255,80,0,0.2);
  }
`,Bullet=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(BaseButton).withConfig({displayName:"Bullet"})`
  padding: 0 7px;
  font-size: 36px;
  color: #7C7D8C;
  letter-spacing: 0;

  &:hover {
    color: #343546;
  }

  ${p=>p.active&&_theme__WEBPACK_IMPORTED_MODULE_0__.a`
    color: #FB542B;

    &:hover {
      color: #C72E03;
    }
  `}
`},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),helpers=__webpack_require__(3);const StyledGrid=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledGrid"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${p=>p.columns?p.columns:"12"}, 1fr);
  grid-gap: ${p=>Object(helpers.c)(p.customStyle,"gridGap")||"15px"};
  padding: ${p=>Object(helpers.c)(p.customStyle,"padding")||"0"};
  margin: ${p=>Object(helpers.c)(p.customStyle,"margin")||"0"};
  max-width: ${p=>Object(helpers.c)(p.customStyle,"maxWidth")||"initial"};
  height: ${p=>Object(helpers.c)(p.customStyle,"height")||"initial"};
  color: ${p=>Object(helpers.c)(p.customStyle,"color")||"inherit"};
  background-color: ${p=>Object(helpers.c)(p.customStyle,"backgroundColor")||"inherit"};
  font-family: inherit;
  font-size: inherit;
  align-items: ${p=>Object(helpers.c)(p.customStyle,"alignItems")||"flex-start"};

  ${p=>p.disabled?styled_components_browser_esm.css`
      user-select: none;
      opacity: 0.25;
    `:""}
`,StyledColumn=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledColumn"})`
  box-sizing: border-box;
  position: relative;
  display: flex;
  grid-column: ${p=>p.size?`span ${p.size}`:"span 12"};
  justify-content: ${p=>Object(helpers.c)(p.customStyle,"justifyContent")||"initial"};
  align-items: ${p=>Object(helpers.c)(p.customStyle,"alignItems")||"initial"};
  background-color: ${p=>Object(helpers.c)(p.customStyle,"backgroundColor")||"inherit"};
  flex-direction: ${p=>Object(helpers.c)(p.customStyle,"flexDirection")||"initial"};
  flex-wrap:${p=>Object(helpers.c)(p.customStyle,"flexWrap")||"initial"};
  overflow: ${p=>Object(helpers.c)(p.customStyle,"overflow")};
  font-family: inherit;
  font-size: inherit;
  color: inherit;
`;__webpack_require__.d(__webpack_exports__,"b",function(){return gridList_Grid}),__webpack_require__.d(__webpack_exports__,"a",function(){return gridList_Column});class gridList_Grid extends react.PureComponent{render(){const{id:id,disabled:disabled,columns:columns,customStyle:customStyle,onClick:onClick,children:children,className:className}=this.props;return react.createElement(StyledGrid,{id:id,disabled:disabled,className:className,customStyle:customStyle,onClick:onClick,columns:columns},children)}}gridList_Grid.defaultProps={disabled:!1};class gridList_Column extends react.PureComponent{render(){const{id:id,size:size,customStyle:customStyle,children:children,onClick:onClick,className:className}=this.props;return react.createElement(StyledColumn,{id:id,size:size,className:className,customStyle:customStyle,onClick:onClick},children)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  display: flex;
  border-bottom: solid 1px #E5E5EA;
  justify-content: space-between;
  font-family: ${p=>p.theme.fontFamily.body};
  align-items: center;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  color: #4b4c5c;
  padding: 16px 0;
  font-weight: 600;
`,StyledContentWrapper=Object(theme.b)("div").withConfig({displayName:"StyledContentWrapper"})`
display: flex;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return list_List});class list_List extends react.PureComponent{render(){const{id:id,title:title,children:children}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledTitle,null,title),react.createElement(StyledContentWrapper,null,children))}}},,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={thirdPartyCookiesBlocked:"33",thirdPartyScriptsBlocked:"11",thirdPartyDeviceRecognitionBlocked:"10",pishingMalwareBlocked:"23",connectionsEncrypted:"1",totalBlocked:"300",siteName:"buzzfeed.com",popupsBlocked:"2",imagesBlocked:"33",totalAdsTrackersBlocked:"100",blockedScriptsResouces:{"https://imasdk.googleapis.com/js/sdkloader/ima3.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!0},"https://scripts.dailymail.co.uk/rta2/v-0.37.min.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!1},"https://scripts.dailymail.co.uk/static/gunther/17.7.2/async_bundle--.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!1},"https://scripts.dailymail.co.uk/static/mol-adverts/1281/mol-adverts.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!1},"https://scripts.dailymail.co.uk/static/mol-fe/static/mol-fe-async-bundle//5.8.5/channelDefer.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!1},"https://scripts.dailymail.co.uk/static/mol-fe/static/mol-fe-fff/1.3.12/scripts/fff.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!1},"https://scripts.dailymail.co.uk/static/mol-fe/static/mol-fe-sync-bundle/3.38.1/desktop.js":{actuallyBlocked:!0,willBlock:!0,userInteracted:!1},"https://scripts.dailymail.co.uk/static/videoplayer//5.14.0/scripts/mol-fe-videoplayer.min.js":{actuallyBlocked:!1,willBlock:!1,userInteracted:!0},"https://www.googletagservices.com/tag/js/gpt.js":{actuallyBlocked:!1,willBlock:!1,userInteracted:!1}},blockedFakeResources:["https://aaaa.com/abcdefghijklmnopqrstuwxyz/123456789","https://bbbb.com/abcdefghijklmnopqrstuwxyz/123456789","https://cccc.com/abcdefghijklmnopqrstuwxyz/123456789","https://dddd.com/abcdefghijklmnopqrstuwxyz/123456789","https://eeee.com/abcdefghijklmnopqrstuwxyz/123456789","https://ffff.com/abcdefghijklmnopqrstuwxyz/123456789","https://gggg.com/abcdefghijklmnopqrstuwxyz/123456789","https://hhhh.com/abcdefghijklmnopqrstuwxyz/123456789","https://iiii.com/abcdefghijklmnopqrstuwxyz/123456789","https://jjjj.com/abcdefghijklmnopqrstuwxyz/123456789","https://kkkk.com/abcdefghijklmnopqrstuwxyz/123456789","https://llll.com/abcdefghijklmnopqrstuwxyz/123456789","https://mmmm.com/abcdefghijklmnopqrstuwxyz/123456789","https://nnnn.com/abcdefghijklmnopqrstuwxyz/123456789","https://oooo.com/abcdefghijklmnopqrstuwxyz/123456789","https://pppp.com/abcdefghijklmnopqrstuwxyz/123456789","https://qqqq.com/abcdefghijklmnopqrstuwxyz/123456789","https://rrrr.com/abcdefghijklmnopqrstuwxyz/123456789","https://ssss.com/abcdefghijklmnopqrstuwxyz/123456789","https://tttt.com/abcdefghijklmnopqrstuwxyz/123456789","https://uuuu.com/abcdefghijklmnopqrstuwxyz/123456789","https://vvvv.com/abcdefghijklmnopqrstuwxyz/123456789","https://wwww.com/abcdefghijklmnopqrstuwxyz/123456789","https://xxxx.com/abcdefghijklmnopqrstuwxyz/123456789","https://yyyy.com/abcdefghijklmnopqrstuwxyz/123456789","https://zzzz.com/abcdefghijklmnopqrstuwxyz/123456789"]}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",function(){return SyncStartIcon}),__webpack_require__.d(__webpack_exports__,"b",function(){return SyncDesktopIcon}),__webpack_require__.d(__webpack_exports__,"c",function(){return SyncMobileIcon}),__webpack_require__.d(__webpack_exports__,"d",function(){return SyncMobilePicture}),__webpack_require__.d(__webpack_exports__,"a",function(){return QRCode});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_start_icon_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(481),_start_icon_svg__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_start_icon_svg__WEBPACK_IMPORTED_MODULE_1__),_default_icon_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(482),_default_icon_svg__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_default_icon_svg__WEBPACK_IMPORTED_MODULE_2__),_add_icon_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(483),_add_icon_svg__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_add_icon_svg__WEBPACK_IMPORTED_MODULE_3__),_remove_icon_svg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(484),_remove_icon_svg__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_remove_icon_svg__WEBPACK_IMPORTED_MODULE_4__),_sync_computer_svg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(485),_sync_computer_svg__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_sync_computer_svg__WEBPACK_IMPORTED_MODULE_5__),_sync_devices_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(486),_sync_devices_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_sync_devices_svg__WEBPACK_IMPORTED_MODULE_6__),_sync_hand_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(487),_sync_hand_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_sync_hand_svg__WEBPACK_IMPORTED_MODULE_7__);const iconStyles="\n  margin-top: 3px;\n  height: 60px;\n",deviceStyles="\n  margin-bottom: 10px;\n  height: 100px;\n",SyncStartIcon=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_start_icon_svg__WEBPACK_IMPORTED_MODULE_1___default.a}).withConfig({displayName:"SyncStartIcon"})`
  max-width: 100%;
`,SyncDesktopIcon=(Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_default_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a}).withConfig({displayName:"SyncDefaultIcon"})`${iconStyles}`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_add_icon_svg__WEBPACK_IMPORTED_MODULE_3___default.a}).withConfig({displayName:"SyncAddIcon"})`${iconStyles}`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_remove_icon_svg__WEBPACK_IMPORTED_MODULE_4___default.a}).withConfig({displayName:"SyncRemoveIcon"})`${iconStyles}`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_sync_computer_svg__WEBPACK_IMPORTED_MODULE_5___default.a}).withConfig({displayName:"SyncDesktopIcon"})`${deviceStyles}`),SyncMobileIcon=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_sync_devices_svg__WEBPACK_IMPORTED_MODULE_6___default.a}).withConfig({displayName:"SyncMobileIcon"})`${deviceStyles}`,SyncMobilePicture=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").attrs({src:_sync_hand_svg__WEBPACK_IMPORTED_MODULE_7___default.a}).withConfig({displayName:"SyncMobilePicture"})`
  max-width: 100%;
  height: 150px;
  display: block;
`,QRCode=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").withConfig({displayName:"QRCode"})`
  display: block;
  width: 200px;
  padding: 30px;
  border: 1px solid #C8C8D5;
  max-width: 100%;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  text-align: right;
  color: #686978;
`,StyledRemove=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledRemove"})`
  margin: 0 8px;
  background: none;
  border: none;
  cursor: pointer;
  width: 16px;
  height: 16px;
  color: #9E9FAB;
  padding: 0;
`,StyledTHOther=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTHOther"})`
  text-align: right;
`,StyledTHLast=Object(styled_components_browser_esm.default)(StyledTHOther).withConfig({displayName:"StyledTHLast"})`
  padding-right: 10px;
`,StyledToggleWrap=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledToggleWrap"})`
  text-align: right;
`,StyledToggle=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledToggle"})`
  font-family: Poppins, sans-serif;
  font-size: 13px;
  color: #4c54d2;
  text-transform: capitalize;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`,StyledLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledLink"})`
  text-decoration: none;
`;var table=__webpack_require__(53),profile=__webpack_require__(68),helpers=__webpack_require__(3),tokens=__webpack_require__(22),tooltip=__webpack_require__(318),icons_close=__webpack_require__(192),trash_o=__webpack_require__(409);__webpack_require__.d(__webpack_exports__,"a",function(){return tableContribute_TableContribute});class tableContribute_TableContribute extends react.PureComponent{constructor(){super(...arguments),this.getHeader=(header=>{if(!header)return;this.props.showRemove&&header.push("");let customStyle={};return this.props.headerColor&&(customStyle={border:"none","border-bottom":"1px solid #9F22A1",padding:"8px 0",color:"#9F22A1"}),header.map((item,i)=>({content:0===i?react.createElement("div",null,item):i===header.length-1?react.createElement(StyledTHLast,null,item):react.createElement(StyledTHOther,null,item),customStyle:customStyle}))}),this.getRows=(rows=>{if(!rows)return;const{isExcluded:isExcluded}=this.props;return rows.map(row=>{const cell={content:[{content:react.createElement(StyledLink,{href:row.url,target:"_blank","data-test-id":"ac_link_"+row.profile.name},react.createElement(profile.a,{title:row.profile.name,provider:row.profile.provider,verified:row.profile.verified,src:row.profile.src,tableCell:this.props.isMobile}))}]};if(isExcluded||cell.content.push({content:react.createElement(StyledText,null,row.attention,"%")}),row.token&&cell.content.push({content:react.createElement(tokens.a,{value:row.token.value,converted:row.token.converted,size:"small"}),customStyle:{textAlign:"right",paddingRight:"10px"}}),this.props.showRemove){const actionTooltip=isExcluded?Object(helpers.a)("restoreSite"):Object(helpers.a)("excludeSite");cell.content.push({content:react.createElement(tooltip.a,{content:actionTooltip},react.createElement(StyledRemove,{onClick:row.onRemove},isExcluded?react.createElement(icons_close.a,null):react.createElement(trash_o.a,null))),customStyle:{textAlign:"right"}})}if(this.props.showRowAmount)if(this.props.showRemove){const remaining=(100-row.attention)/1.04;cell.customStyle={background:`linear-gradient(\n              to right,\n              transparent 0%,\n              transparent ${remaining}%,\n              rgba(210, 198, 243, 0.39) ${remaining}%,\n              rgba(210, 198, 243, 0.39) 100%,\n              transparent 100%,\n              transparent 100%\n            )`}}else{const remaining=100-row.attention;cell.customStyle={background:`linear-gradient(90deg, transparent ${remaining}%, rgba(210, 198, 243, 0.39) ${row.attention}%)`}}return cell})})}render(){const{id:id,testId:testId,header:header,children:children,rows:rows,allSites:allSites,onShowAll:onShowAll}=this.props,numSites=this.props.numSites||0,numExcludedSites=this.props.numExcludedSites||0;return react.createElement("div",{id:id,"data-test-id":testId},react.createElement(table.a,{header:this.getHeader(header),children:children,rows:this.getRows(rows)}),!allSites&&(numSites>0||numExcludedSites>0)?react.createElement(StyledToggleWrap,null,react.createElement(StyledToggle,{onClick:onShowAll},Object(helpers.a)("showAll"))):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const style_Card=Object(theme.b)("div").withConfig({displayName:"Card"})`
  max-width: 100%;
  width: 100%;
  min-height: auto;
  margin: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: ${p=>`0 2px 4px rgba(0, 0, 0, ${function getShadowOpacity(emphasis){switch(emphasis){case"60":return".2";default:return".15"}}(p.emphasis)})`};
  font-size: inherit;
  font-family: ${p=>p.theme.fontFamily.body};
  box-sizing: border-box;
  position: relative;
`,Content=Object(theme.b)("div").withConfig({displayName:"Content"})`
  padding: ${p=>p.useDefaultContentPadding?"32px":void 0};
`;__webpack_require__.d(__webpack_exports__,"a",function(){return card_Card});class card_Card extends react.Component{render(){const{testId:testId,children:children}=this.props,styleProps={className:this.props.className,useDefaultContentPadding:this.props.useDefaultContentPadding,emphasis:this.props.emphasis};return react.createElement(style_Card,Object.assign({"data-test-id":testId},styleProps),react.createElement(Content,Object.assign({},styleProps),children))}}card_Card.defaultProps={useDefaultContentPadding:!0,emphasis:"50"}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  display: flex;
  border-bottom: ${p=>"last"===p.border?"none":"1px solid #d0d6dc"};
  border-top: ${p=>"first"===p.border?"1px solid #d0d6dc":"none"};
  justify-content: space-between;
  align-items: baseline;
  align-content: flex-start;
  flex-wrap: nowrap;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 14px;
  line-height: 2.79;
  color: #4b4c5c;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 60%;
`,StyledContentWrapper=Object(theme.b)("div").withConfig({displayName:"StyledContentWrapper"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 40%;
  text-align: right;

  @media (max-width: 385px) {
    flex-basis: 55%;
  }
`;var tokens=__webpack_require__(22);__webpack_require__.d(__webpack_exports__,"a",function(){return listToken_ListToken});class listToken_ListToken extends react.PureComponent{render(){const{id:id,title:title,value:value,converted:converted,isNegative:isNegative,size:size,color:color,border:border,testId:testId}=this.props;return react.createElement(StyledWrapper,{id:id,border:border,"data-test-id":testId},react.createElement(StyledTitle,null,title),react.createElement(StyledContentWrapper,null,react.createElement(tokens.a,{value:value,converted:converted,isNegative:isNegative,size:size,color:color})))}}listToken_ListToken.defaultProps={border:"default"}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return Grid}),__webpack_require__.d(__webpack_exports__,"c",function(){return Grid2Columns}),__webpack_require__.d(__webpack_exports__,"d",function(){return HeaderGrid}),__webpack_require__.d(__webpack_exports__,"a",function(){return ButtonGroup});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);const Grid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"Grid"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template-columns: 50% 50%;
  grid-template-areas:
    "header header"
    "content1 content2";

  grid-auto-rows: auto;
  grid-gap: 40px 30px;
  padding: 0;
  align-items: center;

  > *:first-child {
    grid-area: header;
  }

  > *:nth-child(2) {
    grid-area: content1;
  }

  > *:nth-child(3) {
    grid-area: content2;
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: 460px;
    justify-content: center;
    grid-template-areas:
    "header"
    "content1"
    "content2";
  }

  @media screen and (max-width: 490px) {
    /* TODO: @cezaraugusto this needs more love */
    zoom: 0.8;
  }
`,Grid2Columns=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"Grid2Columns"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  padding: 0;
  align-items: center;
  grid-template-columns: 50% 50%;
  grid-gap: 40px 30px;
  grid-template-areas: "content1 content2";

  > *:first-child {
    grid-area: content1;
  }

  > *:nth-child(2) {
    grid-area: content2;
  }

  @media screen and (max-width: 1170px) {
    padding: 25px;
    grid-template-columns: 1fr;
    grid-template-areas:
    "image"
    "content";
  }

  @media screen and (max-width: 1170px) {
    grid-template-columns: 460px;
    justify-content: center;
    grid-template-areas:
    "header"
    "content1"
    "content2";
  }
`,HeaderGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"HeaderGrid"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  grid-template-columns: auto 1fr;
  grid-template-areas: "image content";

  grid-auto-rows: auto;
  grid-gap: 50px;
  padding: 0 50px;
  align-items: center;

  > *:first-child {
    grid-area: image;
  }

  > *:nth-child(2) {
    grid-area: content;
  }

  @media screen and (max-width: 1170px) {
    padding: 25px;
    grid-template-columns: 1fr;
    grid-template-areas:
    "image"
    "content";
  }
`,ButtonGroup=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"ButtonGroup"})`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
`,StyledSelectWrapper=Object(theme.b)("div").withConfig({displayName:"StyledSelectWrapper"})`
  position: relative;
  outline: 0;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledSelect=Object(theme.b)("div").withConfig({displayName:"StyledSelect"})`
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  padding: 8px 36px 8px 0;
  display: flex;
  align-items: center;
  ${p=>{let color="#686978",borderColor="#DFDFE8";"dark"===p.type&&(color="#fff",borderColor="#686978"),p.show&&(borderColor="#A1A8F2"),p.disabled&&(borderColor="#E5E5EA",color="#D1D1DB","dark"===p.type&&(color="#686978",borderColor="#686978"));let border=`1px solid ${borderColor}`;return p.floating&&(border="none"),theme.a`
    --select-select-color: ${color};
    --select-select-border: ${border};
  `}};
  color: var(--select-select-color);
  border: var(--select-select-border);
`,StyledSelectArrow=Object(theme.b)("div").withConfig({displayName:"StyledSelectArrow"})`
  height: 12px;
  width: 12px;
  position: absolute;
  right: 12px;
`,StyledSelectText=Object(theme.b)("div").withConfig({displayName:"StyledSelectText"})`
  flex-grow: 1;
  padding: ${p=>p.floating?0:"0 5px 0 13px"};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,StyledOptions=Object(theme.b)("div").withConfig({displayName:"StyledOptions"})`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: ${p=>p.showAllContents?"auto":"100%"};
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(223, 223, 232, 0.5);
  background-color: #fff;
  border: solid 1px #dfdfe8;
  overflow: hidden;
  z-index: 2;
  display: ${p=>p.show?"block":"none"};
  padding: 8px 0;
`,StyledOption=Object(theme.b)("div").withConfig({displayName:"StyledOption"})`
  font-size: 14px;
  line-height: 36px;
  color: #1b1d2f;
  position: relative;
  padding: 0 0 0 ${p=>p.showAllContents?4:12}px;
  display: flex;
  background: ${p=>p.selected?"#e9f0ff":"#fff"};
`,StyledOptionCheck=Object(theme.b)("div").withConfig({displayName:"StyledOptionCheck"})`
  flex-basis: 11px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  color: #A1A8F2;
`,StyledOptionText=Object(theme.b)("div").withConfig({displayName:"StyledOptionText"})`
  padding: 0 21px 0 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ${p=>p.showAllContents?"initial":"ellipsis"};
`,StyledOptionsOverlay=Object(theme.b)("div").withConfig({displayName:"StyledOptionsOverlay"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${p=>p.theme.color.modalOverlayBackground};
  align-items: center;
  z-index: 999;
  justify-content: center;
`,StyledOptionsModal=Object(theme.b)("div").withConfig({displayName:"StyledOptionsModal"})`
  border-radius: 4px;
  background: ${p=>p.theme.color.primaryBackground};
  height: 30%;
  width: 50%;
  z-index: 9999;
  padding: 42px 55px 30px;

  @media (max-width: 767px) {
    width: 80%;
  }
  @media (max-height: 1080px) {
    height: 40%;
  }
  @media (max-height: 900px) {
    height: 60%;
  }
  @media (max-height: 620px) {
    height: 65%;
  }
  @media (max-height: 550px) {
    height: 75%;
  }
`,StyledSelectTitle=Object(theme.b)("span").withConfig({displayName:"StyledSelectTitle"})`
  color: ${p=>p.theme.color.defaultControlActive};
  display: block;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 32px;
  margin-bottom: 30px;
  text-align: left;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledModalContent=Object(theme.b)("div").withConfig({displayName:"StyledModalContent"})`
  display: block;
`,StyledRadioOptions=Object(theme.b)("div").withConfig({displayName:"StyledRadioOptions"})`
  display: block;
  max-height: 250px;
  overflow-y: scroll;
`;var formControls_radio=__webpack_require__(784),check=__webpack_require__(400),icons=__webpack_require__(9);__webpack_require__.d(__webpack_exports__,"a",function(){return select_Select});class select_Select extends react.PureComponent{constructor(props){super(props),this.getRadioOptions=((value,children)=>{const currentValue=this.state.value;let options={};return react.Children.map(children,(child,i)=>{if(void 0===child.props["data-value"])return null;const value=child.props["data-value"],selected=value===currentValue;return options[value]=selected}),options}),this.onRadioOptionClick=((key,selected,child,all)=>{this.setState({value:key,selected:child,radioShown:!1}),this.props.onChange&&this.props.onChange(key,child)}),this.onOverlayClick=(event=>{event.target.hasAttribute("data-overlay")&&this.setState({radioShown:!1})}),this.styledModalOverlay=((value,children)=>this.state.radioShown?react.createElement(StyledOptionsOverlay,{"data-overlay":"overlay",onClick:this.onOverlayClick},react.createElement(StyledOptionsModal,null,react.createElement(StyledModalContent,null,this.props.title?react.createElement(StyledSelectTitle,null,this.props.title):null,react.createElement(StyledRadioOptions,null,react.createElement(formControls_radio.a,{size:"big",disabled:!1,onChange:this.onRadioOptionClick,value:this.getRadioOptions(value,children)},this.props.children))))):null),this.generateOptions=((value,children,showAllContents)=>{const self=this;return react.Children.map(children,(child,i)=>{if(void 0===child.props["data-value"])return null;const element=child.props.children,value=child.props["data-value"],selected=value===self.state.value;return react.createElement(StyledOption,{showAllContents:showAllContents,key:`${self.props.id}-option-${i}`,onClick:self.onOptionClick.bind(self,value,child,element),selected:selected},react.createElement(StyledOptionCheck,null,selected?react.createElement(check.a,null):null),react.createElement(StyledOptionText,{showAllContents:showAllContents},element))})}),this.onOptionClick=((value,child,element)=>{this.setState({value:value,selected:element,show:!1}),this.props.onChange&&this.props.onChange(value,child)}),this.isTouchscreen=(()=>"ontouchstart"in window),this.onSelectClick=(()=>{this.isTouchscreen()?this.setState({radioShown:!0}):this.setState({show:!this.state.show})}),this.onBlur=(()=>{this.setState({show:!1})});const obj=this.getDefaultValue(props);this.state={value:obj.value,selected:obj.selected,show:!1,radioShown:!1}}componentDidUpdate(prevProps){if(prevProps.value!==this.props.value){const obj=this.getDefaultValue(this.props);this.setState({value:obj.value,selected:obj.selected,show:!1})}}getDefaultValue(props){const children=react.Children.toArray(props.children);let child;const value=(props.value||"").toString();return void 0===(child=children.find(child=>child.props["data-value"]===value))&&children&&(child=children.find(child=>child&&void 0!==child.props["data-value"])),child&&child.props?{value:child.props["data-value"],selected:child.props.children}:{value:"",selected:null}}render(){const{id:id,children:children,disabled:disabled,value:value,type:type,floating:floating,showAllContents:showAllContents}=this.props,num=react.Children.count(children);let data=null;return num>0&&(data=this.generateOptions(value,children,showAllContents)),react.createElement(StyledWrapper,{id:id},num>0?react.createElement(StyledSelectWrapper,{tabIndex:0,onBlur:this.onBlur},react.createElement(StyledSelect,{onClick:disabled?void 0:this.onSelectClick,disabled:disabled,show:this.state.show,type:type,floating:floating},react.createElement(StyledSelectText,{floating:floating},this.state.selected),react.createElement(StyledSelectArrow,{floating:floating},react.createElement(icons.CaratDownIcon,null))),react.createElement(StyledOptions,{show:this.state.show,showAllContents:showAllContents},data),this.styledModalOverlay(value,children)):null)}}select_Select.defaultProps={type:"light"}},,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/guardian.88f2c74b.jpg"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return StaticList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(109),_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(34),_fakeLocale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10);class StaticList extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{stats:stats,favicon:favicon,hostname:hostname,name:name,list:list,onClose:onClose}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.f,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.g,{src:favicon}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.m,null,hostname)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("details",{open:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.p,{onClick:onClose},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.b,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.a,null,stats>99?"99+":stats),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.e,null,name)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.o,null,list.map((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.j,{key:index},Object(_helpers__WEBPACK_IMPORTED_MODULE_4__.h)(item))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.l,{level:"primary",type:"accent",onClick:onClose,text:Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("goBack")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return DeviceTypeModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_features_sync__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(28),_src_features_sync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(23),_src_features_sync_images__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(81),_viewSyncCode__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(67),_scanCode__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(151),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8);class DeviceTypeModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onClickPhoneTabletButton=(event=>{event.preventDefault(),this.setState({scanCode:!this.state.scanCode})}),this.onClickComputerButton=(event=>{event.preventDefault(),this.setState({viewSyncCode:!this.state.viewSyncCode})}),this.state={viewSyncCode:!1,scanCode:!1}}render(){const{viewSyncCode:viewSyncCode,scanCode:scanCode}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"deviceTypeModal",displayCloseButton:!1,size:"small"},scanCode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_scanCode__WEBPACK_IMPORTED_MODULE_6__.default,{onClose:this.onClickPhoneTabletButton}):null,viewSyncCode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_viewSyncCode__WEBPACK_IMPORTED_MODULE_5__.default,{onClose:this.onClickComputerButton}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("letsSync")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("chooseDeviceType")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:this.onClickPhoneTabletButton},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync_images__WEBPACK_IMPORTED_MODULE_4__.c,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.e,{level:2},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("phoneTablet"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.a,{onClick:this.onClickComputerButton},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync_images__WEBPACK_IMPORTED_MODULE_4__.b,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.e,{level:2},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("computer")))))}}},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V13a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM28 20h-3v-3a1 1 0 0 0-2 0v3h-3a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledLabel=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledLabel"})`
  font-family: ${p=>p.theme.fontFamily.body};
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  ${p=>{let color="#686978",size=14;return"big"===p.size&&(size=16),"dark"===p.type&&(color="#B8B9C4"),styled_components_browser_esm.css`
    --checkbox-label-color: ${color};
    --checkbox-label-size: ${size}px;
  `}};
  color: var(--checkbox-label-color);
  font-size: var(--checkbox-label-size);
  cursor: pointer;
`,StyledBox=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledBox"})`
  border-radius: 2px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  ${p=>{let size=18,borderColor="#D1D1DB",color="#696FDC",spacing=12;return"big"===p.size&&(size=24,spacing=17),"dark"===p.type&&(color="#A1A8F2"),p.selected&&(borderColor="dark"===p.type?"#696FDC":"#A1A8F2"),p.disabled&&(borderColor="dark"===p.type?"#686978":"#EBECF0"),styled_components_browser_esm.css`
    --checkbox-box-size: ${size}px;
    --checkbox-box-borderColor: ${borderColor};
    --checkbox-box-color: ${color};
    --checkbox-box-spacing: ${spacing}px;
  `}};
  flex-basis: var(--checkbox-box-size);
  width: var(--checkbox-box-size);
  height: var(--checkbox-box-size);
  color: var(--checkbox-box-color);
  border: 1px solid var(--checkbox-box-borderColor);
  margin: 8px;
`,StyledText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledText"})`
  flex: 1;
  padding-top: ${p=>"big"===p.size?"2px":"1px"};
  letter-spacing: 0;
  display: flex;
`;var check=__webpack_require__(400);__webpack_require__.d(__webpack_exports__,"a",function(){return checkbox_Checkbox});class checkbox_Checkbox extends react.PureComponent{constructor(){super(...arguments),this.generateChecks=(children=>{const self=this;return react.Children.map(children,(child,i)=>{if(void 0===child.props["data-key"])return null;const element=child.props.children,key=child.props["data-key"],selected=self.props.value[key]||!1;return react.createElement(StyledLabel,{key:`checkbox-${i}`,onClick:self.props.disabled?void 0:self.onOptionClick.bind(self,key,child,selected),type:self.props.type,size:self.props.size},react.createElement(StyledBox,{selected:selected,type:self.props.type,disabled:self.props.disabled,size:self.props.size},selected?react.createElement(check.a,null):null),react.createElement(StyledText,{disabled:self.props.disabled,size:self.props.size},element))})}),this.onOptionClick=((key,child,selected)=>{const multiple=this.props.multiple,checked=this.props.value;let newState={};selected=!selected,Object.keys(this.props.value).map(item=>{newState[item]=!!multiple&&checked[item],key===item&&(newState[item]=selected)}),this.props.onChange&&this.props.onChange(key,selected,child,newState)})}render(){const{id:id,testId:testId,children:children}=this.props;let data=null;return react.Children.count(children)>0&&(data=this.generateChecks(children)),react.createElement("div",{id:id,"data-test-id":testId},data)}}checkbox_Checkbox.defaultProps={type:"light",size:"small",disabled:!1,multiple:!1}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",function(){return Page}),__webpack_require__.d(__webpack_exports__,"a",function(){return DynamicBackground}),__webpack_require__.d(__webpack_exports__,"b",function(){return Gradient}),__webpack_require__.d(__webpack_exports__,"d",function(){return Link}),__webpack_require__.d(__webpack_exports__,"g",function(){return PhotoName}),__webpack_require__.d(__webpack_exports__,"e",function(){return Navigation}),__webpack_require__.d(__webpack_exports__,"c",function(){return IconLink});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);const fadeIn=_theme__WEBPACK_IMPORTED_MODULE_0__.c`
  from {
    opacity: 0;
  }
  to {
    opacity: 1
  }
`,Page=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"Page"})`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-height: 100vh;
`,DynamicBackground=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"DynamicBackground"})`
  box-sizing: border-box;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  ${p=>p.showBackgroundImage?` background-image: url(${p.background});`:" background: linear-gradient(\n        to bottom right,\n        #4D54D1,\n        #A51C7B 50%,\n        #EE4A37 100%);\n    "}
  display: flex;
  flex: 1;
  opacity: 0;
  animation: ${fadeIn} 300ms;
  animation-fill-mode: forwards;
`,Gradient=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"Gradient"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0) 35%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.6) 100%
  );
  height: 100vh;
`,Link=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("a").withConfig({displayName:"Link"})`
  text-decoration: none;
  transition: color 0.15s ease, filter 0.15s ease;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`,PhotoName=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"PhotoName"})`
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 12px;
  font-family: Muli, sans-serif;
  color: rgba(255, 255, 255, 0.6);
`,Navigation=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("nav").withConfig({displayName:"Navigation"})`
  display: flex;
`,IconLink=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("a").withConfig({displayName:"IconLink"})`
  pointer-events: ${p=>p.disabled&&"none"};
  display: flex;
  width: 24px;
  height: 24px;
  margin: 12px;
  cursor: pointer;
  color: #ffffff;
  opacity: 0.7;
  transition: opacity 0.15s ease, filter 0.15s ease;

  &:hover {
    opacity: 0.95;
  }
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return List}),__webpack_require__.d(__webpack_exports__,"d",function(){return TileActionsContainer}),__webpack_require__.d(__webpack_exports__,"c",function(){return TileAction}),__webpack_require__.d(__webpack_exports__,"b",function(){return Tile}),__webpack_require__.d(__webpack_exports__,"e",function(){return TileFavicon});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);const List=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"List"})`
  padding: 0 70px;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 92px);

  @media screen and (max-width: 904px) {
    justify-content: center;
    padding: 40px;
  }

  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(3, 92px);
  }

  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(2, 92px);
  }
`,TileActionsContainer=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("nav").withConfig({displayName:"TileActionsContainer"})`
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transition: 0.15s opacity linear;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 6px;
  border-radius: 4px;
  background-color: #FFFFFF;
`,TileAction=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("a").withConfig({displayName:"TileAction"})`
  box-sizing: border-box;
  transition: color 0.1s linear;
  color: #424242;
  font-size: 14px;
  width: 20px;
  height: 20px;
  padding: 2px 4px;
  background: ${p=>p.standalone&&"#FFFFFF"};
  position: ${p=>p.standalone&&"absolute"};
  top: ${p=>p.standalone&&"6px"};
  left: ${p=>p.standalone&&"6px"};
  border-radius: ${p=>p.standalone&&"4px"};
  margin: 0;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`,Tile=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"Tile"})`
  background-color: ${p=>p.isDragging?"rgba(255, 255, 255, 0.5)":"rgba(255, 255, 255, 0.8)"};
  position: relative;
  user-select: none;
  margin: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 6px 2px rgba(0,0,0,0.3);
  border-radius: 8px;
  width: 80px;
  height: 80px;
  font-size: 38px;

  &:hover {
    ${TileActionsContainer} {
      opacity: 1;
      visibility: visible;
    }
  }
`,TileFavicon=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("img").withConfig({displayName:"TileFavicon"})`
  display: block;
  height: 72px;
  padding: 16px;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",function(){return ShieldIcon}),__webpack_require__.d(__webpack_exports__,"a",function(){return ArrowDownIcon}),__webpack_require__.d(__webpack_exports__,"b",function(){return ArrowUpIcon});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_components_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(253),_components_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9);const ShieldIcon=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_icons__WEBPACK_IMPORTED_MODULE_1__.a).withConfig({displayName:"ShieldIcon"})`
  box-sizing: border-box;
  display: block;
  width: 36px;
  margin: auto;
  color: ${p=>p.theme.color.lionLogo};
`,ArrowDownIcon=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(_components_icons__WEBPACK_IMPORTED_MODULE_2__.CaratStrongDownIcon).withConfig({displayName:"ArrowDownIcon"})`
  width: 24px;
  height: 24px;
  padding: 4px;
  color: ${p=>p.theme.color.text};

  &:focus {
    outline-width: 2px;
    outline-offset: -6px;
    outline-color: ${p=>p.theme.color.brandBrave};
  }

  &:active {
    outline: none;
  }
`,ArrowUpIcon=function RotatedIconComponent(iconComponent,degrees){return Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)(iconComponent)`
    transform: rotate(${degrees}deg);
  `}(ArrowDownIcon,180)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",function(){return SectionBlock}),__webpack_require__.d(__webpack_exports__,"a",function(){return DisabledContentButtonGrid}),__webpack_require__.d(__webpack_exports__,"d",function(){return TableGrid}),__webpack_require__.d(__webpack_exports__,"c",function(){return TableButtonGrid});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);const SectionBlock=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("section").withConfig({displayName:"SectionBlock"})`
  margin: 15px 0 40px;
`,DisabledContentButtonGrid=(Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"EnabledContentButtonGrid"})`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  margin: 10px 5px 0;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"SettingsToggleGrid"})`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  grid-gap: 5px;
  align-items: center;
  margin: 15px 0 0;
`,Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("footer").withConfig({displayName:"DisabledContentButtonGrid"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 10px;
  margin: 15px 0 0;
`),TableGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"TableGrid"})`
  align-items: center;
  display: grid;
  grid-template-columns: ${p=>p.isDeviceTable?"1fr":"200px auto"};
  grid-template-rows: auto;
  grid-gap: ${p=>p.isDeviceTable?"0":"50px"};
`,TableButtonGrid=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("div").withConfig({displayName:"TableButtonGrid"})`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 15px;
  grid-template-columns: 2fr 1fr 1fr;
`},,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),theme=__webpack_require__(1);const Page=Object(theme.b)("div").withConfig({displayName:"Page"})`
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(${p=>p.isPrivate?"#381980":"#5F0C8A"}, #0C041E);
  min-height: 100vh;
  height: initial;
`,PageWrapper=Object(theme.b)("main").withConfig({displayName:"PageWrapper"})`
  box-sizing: border-box;
  padding: 85px 15px;
  max-width: 950px;
  margin: 0 auto;
`;var privateWindow=__webpack_require__(266),qwantWindow=__webpack_require__(264),torWindow=__webpack_require__(265),qwantWindowWithTor=__webpack_require__(263);__webpack_require__.d(__webpack_exports__,"default",function(){return private_NewPrivateTab});class private_NewPrivateTab extends react.PureComponent{get currentWindow(){const{isTor:isTor,isQwant:isQwant}=this.props;return isQwant&&isTor?react.createElement(qwantWindowWithTor.default,null):isQwant?react.createElement(qwantWindow.default,null):isTor?react.createElement(torWindow.default,null):react.createElement(privateWindow.default,null)}render(){const{isTor:isTor,isQwant:isQwant}=this.props;return react.createElement(Page,{isPrivate:!isTor&&!isQwant},react.createElement(PageWrapper,null,this.currentWindow))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledRemove=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledRemove"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 0;
  height: 20px;
  color: #9E9FAB;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  display: inline-block;
`,StyledRemoveIcon=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledRemoveIcon"})`
  vertical-align: middle;
  color: #9E9FAB;
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-right: 4px;
`,StyledType=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledType"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #686978;
`,StyledDate=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledDate"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1;
  margin-top: 3px;
  color: #b8b9c4;
`,StyledToggle=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledToggle"})`
  font-family: Poppins, sans-serif;
  font-size: 13px;
  color: #4c54d2;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`,StyledToggleWrap=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledToggleWrap"})`
  text-align: right;
`,StyledLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledLink"})`
  text-decoration: none;
`;var table=__webpack_require__(53),profile=__webpack_require__(68),tokens=__webpack_require__(22),helpers=__webpack_require__(3),trash=__webpack_require__(410);__webpack_require__.d(__webpack_exports__,"a",function(){return tableDonation_TableDonation});class tableDonation_TableDonation extends react.PureComponent{getTypeContent(row){switch(row.type){case"recurring":return{content:react.createElement(react.Fragment,null,react.createElement(StyledType,null,Object(helpers.a)("recurring")),react.createElement(StyledRemove,{onClick:row.onRemove},react.createElement(StyledRemoveIcon,null,react.createElement(trash.a,null)),Object(helpers.a)("remove")))};case"donation":return{content:react.createElement(react.Fragment,null,react.createElement(StyledType,null,Object(helpers.a)("oneTime")),react.createElement(StyledDate,null,row.text))};case"tip":return{content:react.createElement(react.Fragment,null,react.createElement(StyledType,null,Object(helpers.a)("tipOnLike")),react.createElement(StyledDate,null,row.text))}}}getRows(rows){if(rows)return rows.map(row=>({content:[{content:react.createElement(StyledLink,{href:row.url,target:"_blank"},react.createElement(profile.a,{title:row.profile.name,provider:row.profile.provider,verified:row.profile.verified,src:row.profile.src}))},this.getTypeContent(row),{content:react.createElement(tokens.a,{value:row.contribute.tokens,converted:row.contribute.converted,size:"small"}),customStyle:{"text-align":"right",padding:"0 7px 0 10px","max-width":"80px"}}]}))}get headers(){let customStyle={};return this.props.headerColor&&(customStyle={border:"none","border-bottom":"1px solid #696FDC",padding:"8px 0",color:"#696FDC"}),[{content:Object(helpers.a)("site"),customStyle:customStyle},{content:Object(helpers.a)("type"),customStyle:customStyle},{content:Object(helpers.a)("tokens"),customStyle:Object.assign({"text-align":"right","padding-right":"7px"},customStyle)}]}render(){const{id:id,children:children,rows:rows,allItems:allItems,onShowAll:onShowAll}=this.props,numItems=this.props.numItems||0;return react.createElement("div",{id:id},react.createElement(table.a,{children:children,rows:this.getRows(rows),header:this.headers}),!allItems&&numItems>0?react.createElement(StyledToggleWrap,null,react.createElement(StyledToggle,{onClick:onShowAll},Object(helpers.a)("seeAllItems",{numItems:numItems}))):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  padding-left: 20px;
  margin-bottom: ${p=>p.isMobile?15:19}px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`,StyledIcon=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledIcon"})`
  flex-basis: 42px;
  height: 42px;
  width: 52px;
  flex-shrink: 0;
  color: ${p=>"ads"===p.type?"#C12D7C":"#FF9868"};
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 70%;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.25;
  color: #686978;
  padding: 0 10px;
`,StyledClaim=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledClaim"})`
  flex-basis: 90px;
  height: 64px;
  background-color: #fb542b;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.8px;
  color: #fff;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;

  &:focus {
    outline: none;
  }
`,StyledLoader=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledLoader"})`
  width: 35px;
  height: 35px;
  margin-top: 7px;
  display: inline-block;
`;var helpers=__webpack_require__(3),megaphone=__webpack_require__(430),gift=__webpack_require__(429),loader=__webpack_require__(257);__webpack_require__.d(__webpack_exports__,"a",function(){return grantClaim_GrantClaim});class grantClaim_GrantClaim extends react.PureComponent{constructor(){super(...arguments),this.getIcon=(type=>{let icon=null;switch(type){case"ads":icon=react.createElement(megaphone.a,null);break;case"ugp":icon=react.createElement(gift.a,null)}return icon}),this.getGrantText=((type,amount)=>{if("ugp"===type)return Object(helpers.a)("newGrant");if(!amount)return Object(helpers.a)("earningsClaimDefault");const formattedAmount=`${amount} ${Object(helpers.a)("earningsClaimBat")}`;return react.createElement(react.Fragment,null,Object(helpers.a)("earningsClaimOne")," ",react.createElement("b",null,formattedAmount)," ",Object(helpers.a)("earningsClaimTwo"))})}render(){const{id:id,testId:testId,isMobile:isMobile,onClaim:onClaim,type:type,amount:amount,loading:loading}=this.props;return react.createElement(StyledWrapper,{id:id,isMobile:isMobile},react.createElement(StyledIcon,{type:type},this.getIcon(type)),react.createElement(StyledText,null,this.getGrantText(type,amount)),react.createElement(StyledClaim,{onClick:onClaim,"data-test-id":testId},loading?react.createElement(StyledLoader,null,react.createElement(loader.a,null)):Object(helpers.a)("claim")))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Toggle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(69);class Toggle extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.state={checked:props.checked},this.handleChange=this.handleChange.bind(this)}componentWillReceiveProps(nextProps){"checked"in nextProps&&this.setState({checked:nextProps.checked})}handleChange(e){const{props:props}=this;props.disabled||("checked"in props||this.setState({checked:e.target.checked}),props.onChange&&props.onChange({target:{checked:e.target.checked}}))}render(){const{id:id,testId:testId,readOnly:readOnly,disabled:disabled,autoFocus:autoFocus,size:size,colorType:colorType}=this.props,{checked:checked}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.e,{checked:checked,"data-test-id":testId,size:size},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,{type:"checkbox",id:id,readOnly:readOnly,disabled:disabled,checked:checked,onChange:this.handleChange,autoFocus:autoFocus}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.a,{size:size},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.d,{htmlFor:id,checked:checked,size:size,disabled:disabled}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.b,{htmlFor:id,checked:checked,size:size,disabled:disabled,colorType:colorType})))}}Toggle.defaultProps={checked:!1,size:"small",type:"default",disabled:!1}},,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/buzz.b2a58d99.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ddgo.68717410.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/wiki.5f3474e7.jpg"},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ScanCodeModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_src_features_sync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),_src_features_sync__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_src_features_sync_images__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(81),_assets_img_fakeQRCodeImage_png__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(488),_assets_img_fakeQRCodeImage_png__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_assets_img_fakeQRCodeImage_png__WEBPACK_IMPORTED_MODULE_6__),_viewSyncCode__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(67),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8);class ScanCodeModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onClickEnterCodeWordsInstead=(()=>{this.setState({enterCodeWordsInstead:!this.state.enterCodeWordsInstead})}),this.onCancel=(event=>{event.preventDefault(),this.props.onClose()}),this.state={enterCodeWordsInstead:!1}}render(){const{onClose:onClose}=this.props,{enterCodeWordsInstead:enterCodeWordsInstead}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"scanCodeModal",displayCloseButton:!1,size:"small"},enterCodeWordsInstead?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_viewSyncCode__WEBPACK_IMPORTED_MODULE_7__.default,{onClose:this.onClickEnterCodeWordsInstead}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("scanThisCode")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("scanThisCodeHowTo")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.f,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync_images__WEBPACK_IMPORTED_MODULE_5__.d,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync_images__WEBPACK_IMPORTED_MODULE_5__.a,{size:"normal",src:_assets_img_fakeQRCodeImage_png__WEBPACK_IMPORTED_MODULE_6___default.a})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.g,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.b,{onClick:this.onCancel},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("cancel"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{level:"secondary",type:"subtle",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("viewSyncCode")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{level:"primary",type:"accent",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("viewCodeWords")}))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return EnterSyncCodeModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(316),_src_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(315),_src_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),_src_features_sync__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(23),_src_features_sync__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(28),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(8);class EnterSyncCodeModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onEnterPassphrase=(event=>{this.setState({passphrase:event.target.value})}),this.onClickConfirmSyncCode=(()=>{this.setState({showAlert:!0})}),this.onClickInvalidCode=(()=>{this.setState({showAlert:!1})}),this.state={passphrase:"",showAlert:!1}}render(){const{onClose:onClose}=this.props,{showAlert:showAlert}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"enterSyncCodeModal",displayCloseButton:!1,size:"small"},showAlert?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{okString:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("ok"),onClickOk:this.onClickInvalidCode},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("invalidCode")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.d,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("tryAgain"))):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("enterSyncCode")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("enterSyncCodeDescription")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_3__.a,{wordCountString:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("wordCount"),value:this.state.passphrase,onChange:this.onEnterPassphrase}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:"secondary",type:"subtle",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("cancel")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:"primary",type:"accent",size:"medium",onClick:this.onClickConfirmSyncCode,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_7__.a)("confirmCode")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return RemoveMainDeviceModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_src_features_sync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),_src_features_sync__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8);class RemoveMainDeviceModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{onClose:onClose,otherDeviceName:otherDeviceName}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"removeMainDeviceModal",displayCloseButton:!1,size:"small"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("remove")," “",otherDeviceName,"” ",Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("thisSyncChain"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("otherDeviceRemovalDescription"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{level:"secondary",type:"subtle",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("cancel")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{level:"primary",type:"warn",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("remove")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return RemoveMainDeviceModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_src_features_sync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),_src_features_sync__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8);class RemoveMainDeviceModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{onClose:onClose,mainDeviceName:mainDeviceName}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"removeMainDeviceModal",displayCloseButton:!1,size:"small"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("remove")," “",mainDeviceName,"” ",Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("thisSyncChain"),"?")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("thisDeviceRemovalDescription"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{level:"secondary",type:"subtle",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("cancel")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{level:"primary",type:"warn",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("remove")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ResetSyncModal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(316),_src_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_src_features_sync__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_src_features_sync__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(28),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(8);class ResetSyncModal extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onSetupSync=(()=>{this.setState({showAlert:!this.state.showAlert})}),this.onResetSync=(()=>{this.props.onClose()}),this.state={showAlert:!1}}render(){const{onClose:onClose,mainDeviceName:mainDeviceName}=this.props,{showAlert:showAlert}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{id:"resetSyncModal",displayCloseButton:!1,size:"small"},showAlert?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{okString:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("ok"),onClickOk:this.onResetSync,cancelString:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("cancel"),onClickCancel:onClose},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("areYouSure"))):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.e,{level:1},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("removing")," “",mainDeviceName,"” ",Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("deleteSyncChain")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("deleteSyncDescription"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_3__.a,{level:"secondary",type:"subtle",size:"medium",onClick:onClose,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("cancel")})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_3__.a,{level:"primary",type:"warn",size:"medium",onClick:this.onSetupSync,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("deleteSyncChainButton")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"FullPageStory",function(){return FullPageStory});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0);const fullPageStoryStyles={width:"-webkit-fill-available",height:"-webkit-fill-available"},FullPageStory=storyFn=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:fullPageStoryStyles},storyFn())},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",fill:"#fff",d:"M9.61 23.25h12.78L16 12 9.61 23.25z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M3 26.8l7.67-4.52L16 13V4a.45.45 0 0 0-.38.28l-6.27 11-6.26 11a.48.48 0 0 0 0 .48",fill:"#ff4724",fillRule:"evenodd"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 4v9l5.29 9.31L29 26.8a.48.48 0 0 0-.05-.48l-6.26-11-6.27-11A.45.45 0 0 0 16 4",fill:"#9e1f63",fillRule:"evenodd"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29 26.8l-7.67-4.52H10.71L3 26.8a.47.47 0 0 0 .43.2h25.1a.47.47 0 0 0 .43-.2",fill:"#662d91",fillRule:"evenodd"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},,function(module,__webpack_exports__,__webpack_require__){"use strict";var appstore=__webpack_require__(441),appstore_default=__webpack_require__.n(appstore),brave=__webpack_require__(442),brave_default=__webpack_require__.n(brave),facebook=__webpack_require__(443),facebook_default=__webpack_require__.n(facebook),playstore=__webpack_require__(444),playstore_default=__webpack_require__.n(playstore),twitter=__webpack_require__(445),twitter_default=__webpack_require__.n(twitter),youtube=__webpack_require__(446),youtube_default=__webpack_require__.n(youtube);const defaultTopSitesData=[{name:"App Store",url:"https://itunes.apple.com/app/brave-browser-fast-adblocker/id1052879175?mt=8",favicon:appstore_default.a,background:"rgba(255,255,255,0.8)"},{name:"Brave Software",url:"https://brave.com",favicon:brave_default.a,background:"rgba(255,255,255,0.8)"},{name:"Facebook",url:"https://www.facebook.com/BraveSoftware/",favicon:facebook_default.a,background:"rgba(255,255,255,0.8)"},{name:"Play Store",url:"https://play.google.com/store/apps/details?id=com.brave.browser&hl=en_US",favicon:playstore_default.a,background:"rgba(255,255,255,0.8)"},{name:"Twitter",url:"https://twitter.com/brave",favicon:twitter_default.a,background:"rgba(255,255,255,0.8)"},{name:"YouTube",url:"https://www.youtube.com/bravesoftware",favicon:youtube_default.a,background:"rgba(255,255,255,0.8)"}];__webpack_require__.d(__webpack_exports__,"a",function(){return getItems}),__webpack_require__.d(__webpack_exports__,"c",function(){return reorder}),__webpack_require__.d(__webpack_exports__,"b",function(){return getRandomBackgroundData});const getItems=()=>defaultTopSitesData.map((value,key)=>({id:`item-${key}`,name:value.name,url:value.url,favicon:value.favicon,background:value.background})),reorder=(list,startIndex,endIndex)=>{const result=Array.from(list),[removed]=result.splice(startIndex,1);return result.splice(endIndex,0,removed),result},getRandomBackgroundData=imagesArr=>imagesArr[Math.floor(Math.random()*imagesArr.length)]},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),buttonsIndicators_button=__webpack_require__(12);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 32px;
  font-weight: 500;
  color: #4b4c5c;
  margin-bottom: 10px;
  line-height: 1.3;
`,StyledNote=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledNote"})`
  max-width: 508px;
  font-family: Muli,sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
`,StyledAddresses=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledAddresses"})`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  align-items: stretch;
  justify-content: center;
`,StyledAddress=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledAddress"})`
  flex-basis: ${p=>p.isMobile?100:50}%;
  flex-shrink: 0;
  flex-grow: 0;
  width: ${p=>p.isMobile?100:50}%;
  box-sizing: border-box;
  padding: 0 15px 26px;
`,StyledLogo=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledLogo"})`
  height: 60px;
  flex-basis: 60px;
  flex-shrink: 0;
  margin-right: 20px;
`,StyledData=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledData"})`
  flex-basis: 100%;
  text-align: center;
  margin-top: 22px;
  color: #686978;
`,StyledAddressTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledAddressTitle"})`
  flex-basis: 30%;
  flex-grow: 1;
  font-size: 16px;
  line-height: 1.38;
  color: #4b4c5c;
`,StyledShowQR=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledShowQR"})`
  width: 110px;
  height: 110px;
  justify-content: center;
  display: flex;
  background: #eee;
`,StyledQRImageWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledQRImageWrapper"})`
  flex-basis: 100%;
  justify-content: center;
  display: flex;
  margin: 15px 0 10px;
  position: relative;
`,StyledQRImage=Object(styled_components_browser_esm.default)("img").withConfig({displayName:"StyledQRImage"})`
  width: 110px;
  height: 110px;
`,StyledQRButton=Object(styled_components_browser_esm.default)(buttonsIndicators_button.a).withConfig({displayName:"StyledQRButton"})`
  position: absolute;
  top: calc(50% - 23px);
  font-weight: 400;
`,StyledLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledLink"})`
  color: #4c54d2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,StyledHeader=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledHeader"})`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,StyledWalletAddress=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWalletAddress"})`
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  color: #4b4c5c;
  text-align: left;
  margin-bottom: 4px;
`,StyledText=Object(styled_components_browser_esm.default)("p").withConfig({displayName:"StyledText"})`
  margin-bottom: 30px;
  padding: 0;
  font-size: 15px;
  line-height: 1.4;
`;var modal=__webpack_require__(42),helpers=__webpack_require__(3),input=__webpack_require__(309),fc_logo_bat=__webpack_require__(158),fc_logo_ethereum=__webpack_require__(418),fc_logo_bitcoin=__webpack_require__(417),fc_logo_litecoin=__webpack_require__(419);__webpack_require__.d(__webpack_exports__,"a",function(){return modalAddFunds_ModalAddFunds});const icons={BAT:react.createElement(fc_logo_bat.a,null),ETH:react.createElement(fc_logo_ethereum.a,null),BTC:react.createElement(fc_logo_bitcoin.a,null),LTC:react.createElement(fc_logo_litecoin.a,null)};class modalAddFunds_ModalAddFunds extends react.PureComponent{constructor(props){super(props),this.onQR=(type=>{this.setState({current:type})}),this.getAddress=(address=>{const{isMobile:isMobile}=this.props,current=address.type===this.state.current;return react.createElement(StyledAddress,{isMobile:!!isMobile,key:`address-${address.type}`,"data-test-id":"single-address"},react.createElement(StyledHeader,null,react.createElement(StyledLogo,null,icons[address.type]),react.createElement(StyledAddressTitle,null,Object(helpers.a)(`title${address.type}`)),react.createElement(StyledData,null,react.createElement(StyledWalletAddress,null,Object(helpers.a)("walletAddress")),react.createElement(input.a,{value:address.address}))),address.qr?react.createElement(react.Fragment,null,react.createElement(StyledQRImageWrapper,null,current?react.createElement(StyledQRImage,{src:address.qr}):react.createElement(StyledShowQR,null,react.createElement(StyledQRButton,{size:"large",brand:"rewards",type:"accent",text:Object(helpers.a)("addFundsQR"),onClick:this.onQR.bind(this,address.type)})))):null)}),this.state={current:void 0}}render(){const{id:id,onClose:onClose,addresses:addresses,isMobile:isMobile}=this.props;return react.createElement(modal.a,{id:id,onClose:onClose,isMobile:isMobile},react.createElement(StyledWrapper,null,react.createElement(StyledTitle,null,Object(helpers.a)("addFundsTitle")),react.createElement(StyledText,null,Object(helpers.a)("addFundsText")),react.createElement(StyledAddresses,{"data-test-id":"addresses"},addresses&&addresses.map(address=>this.getAddress(address))),react.createElement(StyledNote,null,Object(helpers.a)("addFundsNote")," ",react.createElement(StyledLink,{href:"https://brave.com/faq-payments/#brave-payments",target:"_blank"},Object(helpers.a)("addFundsFAQ")),".")))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const customStyle={big:{paddingBox:"0 19px 0 55px",sendBgColor:"#4c54d2",disabledSendColor:"#3e45b2",paddingSend:"14px 0px 13px 0px",paddingFunds:"13px 12px 13px 24px"},small:{paddingBox:"0 0 0 23px",sendBgColor:"#392dd1",disabledSendColor:"#1a22a8",paddingSend:"11px 0 10px 47px",paddingFunds:"12px 0 11px 25px"}},StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  position: relative;
  font-family: ${p=>p.theme.fontFamily.body};
  margin: ${p=>p.isMobile?"0 auto 8px auto":0}px
  ${p=>{const style=customStyle[p.donateType||"small"];return theme.a`
    --donate-content-padding: ${style.paddingBox};
    --donate-send-bg: ${style.sendBgColor};
    --donate-send-color: ${p.disabled?style.disabledSendColor:"#fff"};
    --donate-send-padding: ${style.paddingSend};
    --donate-funds-padding: ${style.paddingFunds};
  `}}
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  margin-top: ${p=>p.isMobile?-30:0}px;
  padding: ${p=>p.isMobile?"0px":"var(--donate-content-padding)"};
`,StyledDonationTitle=Object(theme.b)("div").withConfig({displayName:"StyledDonationTitle"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.75;
  color: #fff;
  margin-bottom: ${p=>p.isMobile?20:14}px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 167px;
  padding-left: ${p=>p.isMobile?20:0}px;
`,StyledSend=Object(theme.b)("div").withConfig({displayName:"StyledSend"})`
  background: var(--donate-send-bg);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: var(--donate-send-color);
  padding: var(--donate-send-padding);
  text-transform: uppercase;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
`,StyledSendButton=Object(theme.b)("button").withConfig({displayName:"StyledSendButton"})`
  display: block;
  border: none;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  background: var(--donate-send-bg);
  cursor: pointer;
`,StyledButtonWrapper=Object(theme.b)("div").withConfig({displayName:"StyledButtonWrapper"})`
  display: block;
  width: ${p=>p.isMobile?190:245}px;
  margin: 0 auto;
`,StyledIconSend=Object(theme.b)("span").withConfig({displayName:"StyledIconSend"})`
  vertical-align: middle;
  display: inline-block;
  margin-right: 15px;
  color: ${p=>p.disabled?"small"===p.donateType?"#1A22A8":"#3e45b2":"#a1a8f2"};
  width: 27px;
  height: 27px;
`,StyledFunds=Object(theme.b)("div").withConfig({displayName:"StyledFunds"})`
  font-family: Muli, sans-serif;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.69;
  color: #fff;
  padding: var(--donate-funds-padding);
  background: #1b1d2f;
  display: flex;
  position:absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  a {
    color: #6cc7fd;
    text-decoration: none;
  }
`,StyledIconFace=Object(theme.b)("div").withConfig({displayName:"StyledIconFace"})`
  flex-basis: 32px;
  margin: -7px 6px 0 0;
`,StyledFundsText=Object(theme.b)("div").withConfig({displayName:"StyledFundsText"})`
  flex: 1;
  margin-right: 9px;
`,StyledAmountsWrapper=Object(theme.b)("div").withConfig({displayName:"StyledAmountsWrapper"})`
  width: 100%;
  display: block;
  ${p=>(isMobile=>isMobile?theme.a`
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
  `:null)(p.isMobile)}
`;var amount=__webpack_require__(311),helpers=__webpack_require__(3),send=__webpack_require__(408),emote_sad=__webpack_require__(405);__webpack_require__.d(__webpack_exports__,"a",function(){return donate_Donate});class donate_Donate extends react.PureComponent{constructor(props){super(props),this.validateDonation=(()=>{this.validateAmount(this.props.balance)||this.props.onDonate&&this.props.onDonate(this.props.currentAmount)}),this.onAmountChange=(tokens=>{this.validateAmount(this.props.balance,tokens),this.props.onAmountSelection&&this.props.onAmountSelection(tokens)}),this.state={missingFunds:!1}}componentDidUpdate(prevProps){this.props.balance===prevProps.balance&&this.props.donationAmounts===prevProps.donationAmounts&&this.props.currentAmount===prevProps.currentAmount||this.validateAmount(this.props.balance)}validateAmount(balance,tokens){void 0===tokens&&(tokens=this.props.currentAmount);const valid=parseInt(tokens,10)>balance;return this.setState({missingFunds:valid}),valid}render(){const{id:id,donationAmounts:donationAmounts,actionText:actionText,children:children,title:title,currentAmount:currentAmount,donateType:donateType,isMobile:isMobile,addFundsLink:addFundsLink}=this.props,disabled=0===parseInt(currentAmount,10);return react.createElement(StyledWrapper,{donateType:donateType,disabled:disabled,isMobile:isMobile},react.createElement(StyledContent,{id:id,isMobile:isMobile},react.createElement(StyledDonationTitle,{isMobile:isMobile},title),react.createElement(StyledAmountsWrapper,{isMobile:isMobile},donationAmounts&&donationAmounts.map(donation=>react.createElement("div",{key:`${id}-tip-${donation.tokens}`},react.createElement(amount.a,{isMobile:isMobile,amount:donation.tokens,selected:donation.tokens===currentAmount.toString(),onSelect:this.onAmountChange,converted:donation.converted,type:donateType})))),children),react.createElement(StyledSend,{onClick:this.validateDonation,"data-test-id":"send-tip-button"},react.createElement(StyledButtonWrapper,{isMobile:isMobile},react.createElement(StyledSendButton,null,react.createElement(StyledIconSend,{disabled:disabled,donateType:donateType},react.createElement(send.a,null)),actionText))),this.state.missingFunds?react.createElement(StyledFunds,null,react.createElement(StyledIconFace,null,react.createElement(emote_sad.a,null)),react.createElement(StyledFundsText,null,Object(helpers.a)("notEnoughTokens")," ",react.createElement("a",{href:addFundsLink,target:"_blank"},Object(helpers.a)("addFunds")),".")):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return IconGrid}),__webpack_require__.d(__webpack_exports__,"b",function(){return IconGridItem}),__webpack_require__.d(__webpack_exports__,"d",function(){return IconGridItemTitle}),__webpack_require__.d(__webpack_exports__,"c",function(){return IconGridItemIcon});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2);const IconGrid=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({displayName:"IconGrid"})`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
`,IconGridItem=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({displayName:"IconGridItem"})`
  max-width: 100px;
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 8px
`,IconGridItemTitle=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({displayName:"IconGridItemTitle"})`
  flex: none;
  font: 600 10px Muli;
  color: #424242;
  padding: 4px;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`,IconGridItemIcon=styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({displayName:"IconGridItemIcon"})`
  flex: 1;
  color: #424242;
  padding: 18px;
`},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  position: ${p=>p.fullScreen?"fixed":"absolute"};
  top: 0;
  left: 0;
  z-index: 6;
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  padding: 0 52px 20px;
  border-radius: 6px;
  height: ${p=>p.fullScreen||p.isPanel?"100%":"auto"};
  overflow-y: ${p=>p.fullScreen?"scroll":"hidden"};
  background: ${p=>(props=>props.fullScreen?"#fff":props.isPanel?"linear-gradient(-180deg, rgba(255, 255, 255, 1) 50%, rgba(228, 242, 255, 1) 100%)":"rgba(255, 255, 255, 0.95)")(p)};
`,StyledHeader=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledHeader"})`
  text-align: center;
  width: 100%;
  margin: 59px 0;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  width: 100%;
  font-size: ${p=>p.isPanel?20:28}px;
  font-weight: ${p=>p.isPanel?"normal":500};
  line-height: 1.29;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fb542b;
`,StyledClose=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledClose"})`
  top: 16px;
  right: 16px;
  position: absolute;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #9E9FAB;
  width: 20px;
  height: 20px;
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  width: 100%;
  font-family: Muli, sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.63;
  text-align: center;
  color: #4b4c5c;
`,StyledGrantIcon=Object(styled_components_browser_esm.default)("img").withConfig({displayName:"StyledGrantIcon"})`
  height: 53px;
  width: 53px;
  margin: 25px auto 15px;
`,StyledPanelText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledPanelText"})`
  padding: 7px;
  font-size: 12px;
  margin: 7px auto 0px;
  background: rgba(241, 241, 245, 0.70);
  border-radius: 8px 8px 8px 8px;
`,StyledHint=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledHint"})`
  font-weight: 600;
`;var close_circle_o=__webpack_require__(191),helpers=__webpack_require__(3),header=react.createElement("svg",{width:"156",height:"113",viewBox:"0 0 156 113",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},react.createElement("defs",null,react.createElement("polygon",{id:"path-1",points:"0.0886956522 0.893617021 0.0886956522 69.9970213 67.4116522 69.9970213 67.4116522 0.893617021"}),react.createElement("polygon",{id:"path-3",points:"0.0462004864 0.0934350621 36.9854441 0.0934350621 36.9854441 7.14052272 0.0462004864 7.14052272"})),react.createElement("g",{id:"settings",fill:"none",fillRule:"evenodd"},react.createElement("g",{id:"5-wallet-final",transform:"translate(-4563 -259)"},react.createElement("g",{id:"wallet",transform:"translate(4459 200)"},react.createElement("g",{id:"img",transform:"translate(86 20)"},react.createElement("g",{id:"gd",fill:"#FBA"},react.createElement("path",{d:"M19.4105105,127 C18.9278104,123.507807 18.6783446,119.941117 18.6783446,116.316161 C18.6783446,73.6156243 53.2939689,39 95.9945055,39 C138.695042,39 173.310666,73.6156243 173.310666,116.316161 C173.310666,119.941117 173.061201,123.507807 172.5785,127 L19.4105105,127 Z",id:"Combined-Shape"})),react.createElement("g",{id:"icn-blankslate-statement",transform:"translate(46 82)"},react.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"29.5",cy:"33",rx:"22.5",ry:"4"}),react.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"25.5",cy:"43",rx:"22.5",ry:"4"}),react.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"28.5",cy:"57",rx:"22.5",ry:"4"}),react.createElement("path",{d:"M57.9903333,32.3313271 C57.89125,30.6858261 55.9277083,29.3978333 51.9909583,28.4155883 C52.123875,28.1278965 52.1987917,27.8269636 52.1987917,27.5164008 L52.1987917,20.7791153 L52.1855,20.7791153 C51.8350833,15.1649112 28.749875,15 26.1024167,15 C23.4489167,15 0.363708333,15.1649112 0.0145,20.7791153 L0,20.7791153 L0,27.5164008 C0.00483333333,29.3460728 2.374375,30.7797171 5.90029167,31.847427 C5.85316667,32.0075233 5.82416667,32.1676196 5.8145,32.3313271 L5.80120833,32.3313271 L5.80120833,39.0601866 C2.001,40.0388203 0.103916667,41.3075534 0.00966666667,42.9253686 L0,42.9253686 L0,49.6686729 C0.00483333333,50.9422209 1.156375,52.0195606 3.045,52.9223593 C2.97370833,53.1149564 2.92658333,53.3171833 2.91208333,53.5194102 L2.89758333,53.5194102 L2.89758333,60.2627144 C2.90725,63.4646404 10.1475833,65.4532049 18.1914583,66.3800782 C18.24825,66.3933193 18.3038333,66.4173939 18.3654583,66.4173939 C18.3847917,66.4173939 18.3992917,66.4077641 18.4174167,66.4029491 C19.970125,66.5774902 21.547,66.7135119 23.1045417,66.8122179 C23.1371667,66.8170328 23.1661667,66.8314776 23.1987917,66.8314776 C23.218125,66.8314776 23.232625,66.8218477 23.25075,66.8218477 C25.2287917,66.9386097 27.1778333,67 29,67 C30.8221667,67 32.7712083,66.9386097 34.74925,66.8218477 C34.767375,66.8218477 34.781875,66.8314776 34.8012083,66.8314776 C34.8338333,66.8314776 34.8628333,66.8122179 34.8954583,66.8122179 C36.453,66.7135119 38.029875,66.5774902 39.5825833,66.4029491 C39.6007083,66.4029491 39.6152083,66.412579 39.6345417,66.412579 C39.6961667,66.412579 39.75175,66.3885044 39.8085417,66.3800782 C47.8524167,65.44839 55.09275,63.4598255 55.1024167,60.2578995 L55.1024167,53.5194102 L55.0830833,53.5194102 C55.016625,52.3397532 54.0064583,51.3514896 52.0102917,50.529341 C52.1335417,50.251279 52.1987917,49.9647909 52.1987917,49.663858 L52.1987917,43.3671381 C55.6679167,42.3054469 57.9951667,40.8850436 58,39.0698164 L58,32.3313271 L57.9903333,32.3313271 Z M50.1603333,49.9792356 L49.8340833,50.2657237 C49.3241667,50.7123082 48.4795417,51.1588926 47.3654583,51.5910322 L47.3654583,47.0024075 C48.517,46.6027686 49.4945417,46.1609991 50.2690833,45.6758953 L50.2690833,49.663858 C50.2690833,49.7625639 50.2304167,49.8660849 50.1603333,49.9792356 Z M28.5420417,54.4498947 C28.4006667,54.4547096 28.2592917,54.4547096 28.1179167,54.4595245 C27.7723333,54.4691544 27.4182917,54.4691544 27.0690833,54.4739693 L27.0690833,49.663858 C27.3337083,49.659043 27.5983333,49.6542281 27.8665833,49.6494132 L28.0188333,49.6445983 C28.9903333,49.6313572 29.967875,49.5976527 30.93575,49.5555221 L30.93575,54.3608185 C30.7279167,54.3752633 30.5200833,54.3848932 30.31225,54.394523 C29.7274167,54.4173939 29.141375,54.4366536 28.5420417,54.4498947 Z M24.3225417,54.4643395 C23.8790833,54.4547096 23.435625,54.4462835 23.000625,54.4318387 L22.8350833,54.4270238 C22.311875,54.4077641 21.7874583,54.3897081 21.2690833,54.3608185 L21.2690833,49.5555221 C22.23575,49.6024676 23.2084583,49.6313572 24.1811667,49.6494132 C24.233125,49.6494132 24.2850833,49.6494132 24.3370417,49.6494132 C24.6004583,49.6542281 24.8650833,49.659043 25.1345417,49.663858 L25.1345417,54.4739693 C24.9460417,54.4739693 24.7563333,54.4739693 24.5726667,54.4691544 C24.4880833,54.4691544 24.4022917,54.4643395 24.3225417,54.4643395 Z M6.8585,52.2687331 C6.8295,52.2591032 6.796875,52.2494734 6.76908333,52.2398435 L6.76908333,47.5898285 C7.6705,47.834186 8.642,48.0556726 9.66666667,48.2578995 L9.66666667,52.9548601 C8.77975,52.7670779 7.96291667,52.569666 7.217375,52.3674391 C7.09895833,52.3349383 6.97570833,52.3012338 6.8585,52.2687331 Z M27.234625,60.2434547 C27.5040833,60.2482696 27.7675,60.2530846 28.032125,60.2578995 L28.032125,65.0680108 C26.6969167,65.058381 25.407625,65.0210653 24.1666667,64.959675 L24.1666667,60.1495636 C25.1345417,60.1965092 26.1060417,60.224195 27.0835833,60.2434547 C27.1355417,60.2434547 27.1826667,60.2434547 27.234625,60.2434547 Z M30.9164167,60.2434547 C31.8939583,60.224195 32.8654583,60.1916943 33.8333333,60.1495636 L33.8333333,64.9548601 C32.592375,65.0162504 31.3030833,65.058381 29.967875,65.0680108 L29.967875,60.2530846 C30.2325,60.2530846 30.4959167,60.2482696 30.765375,60.2434547 C30.8173333,60.2434547 30.8644583,60.2434547 30.9164167,60.2434547 Z M38.6666667,59.8065002 L38.6666667,64.5877219 C37.73625,64.6864279 36.7695833,64.7718929 35.7690833,64.8417093 L35.7690833,60.0364129 C36.7454167,59.9750226 37.7132917,59.8955763 38.6666667,59.8065002 Z M40.6024167,59.5994583 C41.5980833,59.4766777 42.5659583,59.340656 43.5,59.1901896 L43.5,63.9208546 C42.5889167,64.0797472 41.6210417,64.2266025 40.6024167,64.3626241 L40.6024167,59.5994583 Z M45.43575,58.8471261 C46.4592083,58.6448992 47.4319167,58.4234126 48.3333333,58.18387 L48.3333333,62.833885 C47.4742083,63.0830575 46.5015,63.3238038 45.43575,63.5489016 L45.43575,58.8471261 Z M12.56425,58.8471261 L12.56425,63.5489016 C11.4985,63.3238038 10.5257917,63.0830575 9.66666667,62.833885 L9.66666667,58.18387 C10.5680833,58.4234126 11.5407917,58.6497141 12.56425,58.8471261 Z M14.5,59.1901896 C15.4340417,59.345471 16.4019167,59.4814926 17.3975833,59.5994583 L17.3975833,64.3626241 C16.3789583,64.2266025 15.4110833,64.0797472 14.5,63.9208546 L14.5,59.1901896 Z M19.3333333,59.8065002 C20.2867083,59.8955763 21.2545833,59.9750226 22.2309167,60.0412278 L22.2309167,64.8417093 C21.2304167,64.7718929 20.26375,64.6864279 19.3333333,64.5877219 L19.3333333,59.8065002 Z M16.936,54.0454409 C16.8369167,54.0370147 16.7378333,54.0273849 16.642375,54.017755 C16.5722917,54.0081252 16.501,54.0033103 16.43575,53.9948841 L16.43575,49.2124586 C17.3842917,49.3063497 18.3521667,49.380981 19.3333333,49.4471863 L19.3333333,54.2476678 C18.5213333,54.1874812 17.719,54.121276 16.936,54.0454409 Z M14.5,49.0054168 L14.5,53.7685826 C13.4801667,53.6325609 12.5122917,53.4869094 11.6024167,53.3268131 L11.6024167,48.5961481 C12.5364583,48.7514294 13.5043333,48.8874511 14.5,49.0054168 Z M33.5119167,54.2007222 C33.3004583,54.215167 33.0829583,54.2344267 32.8654583,54.2476678 L32.8654583,49.4471863 C33.8478333,49.380981 34.8145,49.3063497 35.7690833,49.2124586 L35.7690833,53.9948841 C35.1685417,54.0550707 34.56075,54.116461 33.9324167,54.1682215 C33.7910417,54.1778513 33.6496667,54.1922961 33.5119167,54.2007222 Z M37.6987917,53.7685826 L37.6987917,49.0054168 C38.6944583,48.8874511 39.6623333,48.7514294 40.6024167,48.5961481 L40.6024167,53.3268131 C39.6913333,53.4869094 38.7234583,53.6373759 37.6987917,53.7685826 Z M42.532125,48.2530846 C43.561625,48.0556726 44.5295,47.8293711 45.43575,47.5898285 L45.43575,52.2398435 C44.5717917,52.4902197 43.6039167,52.7297623 42.532125,52.9548601 L42.532125,48.2530846 Z M29.3165833,43.8570569 C28.5891667,43.8377972 27.87625,43.8101113 27.1778333,43.7764069 C27.140375,43.7715919 27.1029167,43.7715919 27.06425,43.7715919 L27.06425,38.9614806 C28.0369583,39.0084261 29.0096667,39.0373157 29.9811667,39.0553717 C30.033125,39.0553717 30.0850833,39.0553717 30.1334167,39.0601866 C30.4016667,39.0650015 30.6662917,39.0650015 30.9309167,39.0698164 L30.9309167,43.8799278 C30.4632917,43.8751128 29.986,43.8702979 29.52925,43.8618718 C29.4579583,43.8570569 29.3866667,43.8570569 29.3165833,43.8570569 Z M6.76908333,30.0935901 L6.76908333,25.4435751 C7.6705,25.6831177 8.642,25.9046043 9.66666667,26.1068312 L9.66666667,30.8086067 C9.54825,30.7797171 9.42620833,30.7568462 9.30779167,30.7327716 C8.79304167,30.6208246 8.29279167,30.5028589 7.811875,30.3752633 C7.44816667,30.2861872 7.09895833,30.1874812 6.76908333,30.0935901 Z M24.3370417,27.5031598 C24.6004583,27.5079747 24.8650833,27.5127896 25.1345417,27.5127896 L25.1345417,32.322901 C23.8319583,32.3084562 22.5378333,32.2759555 21.2690833,32.2145652 L21.2690833,27.4092687 C22.23575,27.4513993 23.2084583,27.4839001 24.1811667,27.5031598 C24.233125,27.5031598 24.2850833,27.5031598 24.3370417,27.5031598 Z M28.0188333,27.4983449 C28.9903333,27.4790852 29.9630417,27.4513993 30.93575,27.4092687 L30.93575,32.2097502 C30.7702083,32.2193801 30.6095,32.2278062 30.4439583,32.2374361 C30.4355,32.2374361 30.421,32.2374361 30.4065,32.242251 C29.7552083,32.2711405 29.09425,32.2891965 28.423625,32.3036413 C28.3209167,32.3084562 28.217,32.3084562 28.1130833,32.3132711 C27.7675,32.3180861 27.4146667,32.322901 27.06425,32.322901 L27.06425,27.5127896 C27.3337083,27.5127896 27.5983333,27.5079747 27.8629583,27.5031598 L28.0188333,27.4983449 Z M50.04675,27.982245 L50.0189583,27.97743 L49.6649167,28.2506771 C49.155,28.6455011 48.3707917,29.0451399 47.3654583,29.435149 L47.3654583,24.8513392 C48.517,24.4553115 49.4945417,24.013542 50.2690833,23.5296419 L50.2690833,27.5127896 C50.2690833,27.6584412 50.188125,27.8173337 50.04675,27.982245 Z M37.6987917,31.6126994 L37.6987917,26.8543485 C38.6944583,26.7363828 39.6623333,26.6003611 40.6024167,26.4498947 L40.6024167,31.1709299 C39.6816667,31.3298224 38.718625,31.4802889 37.6987917,31.6126994 Z M42.532125,30.7989768 L42.532125,26.1068312 C43.561625,25.9046043 44.5295,25.6831177 45.43575,25.4435751 L45.43575,30.0839603 C44.5669583,30.3331327 43.5894167,30.5726753 42.532125,30.7989768 Z M35.7690833,27.0650015 L35.7690833,31.8426121 C34.8338333,31.9365032 33.8659583,32.026783 32.8654583,32.0965995 L32.8654583,27.3009329 C33.8478333,27.2347277 34.8145,27.1552814 35.7690833,27.0650015 Z M16.43575,31.8426121 L16.43575,27.0650015 C17.3842917,27.1552814 18.3521667,27.2347277 19.3333333,27.3009329 L19.3333333,32.0917845 C18.3521667,32.0219681 17.3794583,31.9413181 16.43575,31.8426121 Z M14.5,26.8543485 L14.5,31.6126994 C14.3066667,31.5886247 14.1085,31.5705688 13.92,31.5416792 C13.79675,31.5272344 13.6783333,31.5091785 13.5562917,31.4899187 C12.99925,31.4104725 12.451875,31.3250075 11.9177917,31.2359314 C11.8090417,31.2178754 11.7063333,31.1986157 11.6024167,31.179356 L11.6024167,26.4498947 C12.5364583,26.6003611 13.5043333,26.7363828 14.5,26.8543485 Z M24.8940833,43.6403852 C24.7611667,43.6259404 24.6342917,43.6163106 24.501375,43.6078844 C23.8839167,43.5609389 23.27975,43.5091785 22.688875,43.4477881 C22.562,43.4381583 22.4339167,43.4237135 22.311875,43.4104725 C22.282875,43.4104725 22.2599167,43.4056575 22.2309167,43.4008426 L22.2309167,38.6184171 C23.1855,38.7123082 24.1521667,38.7881432 25.1345417,38.8531447 L25.1345417,43.65483 C25.0535833,43.650015 24.9738333,43.6452001 24.8940833,43.6403852 Z M18.5068333,42.9205537 C18.125,42.8603671 17.766125,42.7941619 17.3975833,42.7279567 L17.3975833,38.0069215 C18.3376667,38.1573879 19.3055417,38.2946133 20.3012083,38.4113753 L20.3012083,43.1745411 C19.7067083,43.0999097 19.1303333,43.0144448 18.5732917,42.9301836 C18.5503333,42.9253686 18.531,42.9205537 18.5068333,42.9205537 Z M15.467875,37.663858 L15.467875,42.3572073 C14.3960833,42.1260909 13.4282083,41.8817334 12.56425,41.6325609 L12.56425,36.9957869 C13.4705,37.2413482 14.438375,37.4616311 15.467875,37.663858 Z M10.6345417,36.4083659 L10.6345417,40.9837496 C9.11445833,40.4011435 8.13208333,39.802889 7.81670833,39.2720433 L7.75025,39.1637075 C7.74541667,39.1312067 7.73575,39.1023172 7.73091667,39.0698164 L7.73091667,35.0830575 C8.50545833,35.5669576 9.483,36.0087271 10.6345417,36.4083659 Z M33.8188333,39.0553717 C34.7915417,39.0373157 35.76425,39.0084261 36.7309167,38.9614806 L36.7309167,43.766777 C35.4621667,43.8281673 34.172875,43.8618718 32.8654583,43.8751128 L32.8654583,39.0698164 C33.1349167,39.0650015 33.3995417,39.0650015 33.6629583,39.0601866 L33.8188333,39.0553717 Z M46.3081667,42.7520313 C45.8840417,42.8218477 45.4587083,42.8976828 45.0200833,42.9626843 C44.765125,43.0012037 44.5053333,43.0385194 44.250375,43.0758351 C44.0050833,43.1095396 43.750125,43.1372254 43.5,43.1697262 L43.5,38.4113753 C44.4956667,38.2946133 45.4635417,38.1573879 46.4024167,38.0069215 L46.4024167,42.7327716 C46.3697917,42.7375865 46.342,42.7472164 46.3081667,42.7520313 Z M39.76625,43.57418 C39.4025417,43.6030695 39.030375,43.6211255 38.6666667,43.650015 L38.6666667,38.8531447 C39.6478333,38.7881432 40.6157083,38.7123082 41.56425,38.6184171 L41.56425,43.3960277 C41.0035833,43.457418 40.4465417,43.5127896 39.8653333,43.5645501 C39.8327083,43.5645501 39.8000833,43.569365 39.76625,43.57418 Z M50.811625,41.7685826 C50.3295,41.9009931 49.8195833,42.0273849 49.3012083,42.1501655 C49.06075,42.2067409 48.81425,42.2585014 48.564125,42.313873 C48.4892083,42.3283178 48.40825,42.3475775 48.3333333,42.3608185 L48.3333333,37.663858 C49.3628333,37.4616311 50.3295,37.2413482 51.23575,36.9957869 L51.23575,41.6518206 C51.094375,41.6891363 50.953,41.726452 50.811625,41.7685826 Z M56.0557917,32.3975324 C55.9651667,33.0511586 54.4789167,33.9214565 51.826625,34.7387902 C48.404625,35.7884442 43.0517083,36.7514294 36.2693333,37.0523623 C35.92375,37.0668071 35.5745417,37.0812519 35.2253333,37.0944929 C34.9329167,37.1041228 34.6453333,37.1089377 34.3480833,37.1185676 C33.5505833,37.1378273 32.7385833,37.1462534 31.8975833,37.1462534 C31.062625,37.1462534 30.250625,37.1378273 29.4482917,37.1185676 C29.155875,37.1089377 28.8682917,37.0993079 28.5746667,37.0908817 C28.220625,37.0812519 27.87625,37.0668071 27.5270417,37.0523623 C20.7495,36.7514294 15.3965833,35.7884442 11.9745833,34.7351791 C9.34041667,33.9262714 7.859,33.0607884 7.74541667,32.4119771 C7.75025,32.3927174 7.75025,32.3782726 7.76475,32.3554017 C7.83,32.3698465 7.90129167,32.3830876 7.96775,32.4023473 C8.34475,32.4914234 8.73625,32.5768884 9.12895833,32.6611496 C11.0502083,33.0704183 13.1780833,33.4086669 15.4437083,33.6674692 C15.453375,33.6674692 15.4582083,33.6722841 15.467875,33.6722841 L15.4727083,33.6722841 C17.01575,33.8456214 18.6204167,33.9828468 20.26375,34.0815528 C20.2770417,34.0815528 20.2867083,34.0899789 20.3012083,34.0899789 C20.3060417,34.0899789 20.310875,34.085164 20.3193333,34.085164 C21.5047083,34.1513692 22.703375,34.2031297 23.9165417,34.2320193 C24.65725,34.2500752 25.3895,34.2597051 26.1024167,34.2597051 C26.6075,34.2597051 27.125875,34.2548902 27.655125,34.2452603 C34.6779583,34.1369245 41.18725,33.305146 45.7136667,32.0171532 C45.9263333,31.9557629 46.1293333,31.8943726 46.3275,31.8329822 C46.4495417,31.7956666 46.577625,31.7631658 46.6960417,31.7258501 C47.04525,31.6126994 47.3799583,31.4947337 47.705,31.376768 C47.7617917,31.358712 47.81375,31.3346374 47.8705417,31.3165814 C48.1448333,31.2130605 48.40825,31.1047246 48.6595833,30.9963888 C48.7296667,30.9638881 48.8057917,30.9301836 48.875875,30.9024977 C49.1453333,30.7797171 49.405125,30.6581402 49.6455833,30.5305447 C49.7495,30.4739693 49.84375,30.4137827 49.9476667,30.3572073 C50.06125,30.2910021 50.1784583,30.2211857 50.2872083,30.1549804 C50.3488333,30.1176648 50.420125,30.0791454 50.4757083,30.0418297 C54.8039583,30.9735179 55.9470417,31.9978935 56.0557917,32.3975324 Z M26.1024167,16.928378 C42.0415417,16.928378 50.1035417,19.4249172 50.2545833,20.8585615 C50.1361667,21.5121878 48.6499167,22.3728559 46.0254167,23.1817635 C42.6034167,24.2350286 37.2505,25.1992176 30.4729583,25.4953355 C30.12375,25.5085766 29.779375,25.5230214 29.4253333,25.5374661 C29.1317083,25.547096 28.844125,25.5567259 28.5517083,25.560337 C27.749375,25.5795967 26.937375,25.5940415 26.1024167,25.5940415 C25.2614167,25.5940415 24.4494167,25.5795967 23.6519167,25.560337 C23.3546667,25.5567259 23.0670833,25.547096 22.7746667,25.5374661 C22.420625,25.5230214 22.07625,25.5085766 21.7306667,25.4953355 C14.9482917,25.1992176 9.595375,24.2350286 6.173375,23.1817635 C3.55008333,22.3728559 2.062625,21.5121878 1.94904167,20.8585615 C2.10008333,19.4249172 10.1620833,16.928378 26.1024167,16.928378 Z M1.93575,27.5164008 L1.93575,23.5296419 C2.70425,24.013542 3.68179167,24.4553115 4.83333333,24.8513392 L4.83333333,29.4640385 C2.954375,28.7634667 1.93575,28.05808 1.93575,27.5164008 Z M6.61804167,40.842913 C6.63133333,40.8561541 6.65066667,40.8705989 6.67,40.8850436 C7.99070833,42.215167 10.7287917,43.2636172 14.141125,44.044839 C14.2220833,44.0592838 14.3018333,44.0773398 14.3815833,44.0965995 C14.6317083,44.1531748 14.8866667,44.2097502 15.1464583,44.2615107 C18.2760417,44.923563 22.0194583,45.4038519 26.09275,45.6433945 C26.0975833,45.6433945 26.0975833,45.6433945 26.0975833,45.6433945 C26.1024167,45.6433945 26.1024167,45.6433945 26.1024167,45.6433945 C27.4146667,45.7192296 28.749875,45.7697863 30.1189167,45.793861 C30.7230833,45.8083057 31.3175833,45.8179356 31.8975833,45.8179356 C32.5682083,45.8179356 33.2533333,45.8083057 33.9469167,45.789046 C35.2120417,45.7661751 36.4578333,45.7144147 37.6855,45.6433945 C37.689125,45.6433945 37.6939583,45.6433945 37.6987917,45.6433945 C37.7084583,45.6433945 37.7132917,45.6385796 37.7229583,45.6385796 C41.81075,45.399037 45.642375,44.9151369 48.8855417,44.2181763 C48.1822917,44.5804995 47.21925,44.9620825 46.0254167,45.3280169 C42.4149167,46.4426723 36.6463333,47.4538068 29.3214167,47.6885345 C29.1039167,47.6933494 28.8864167,47.7029792 28.6652917,47.7077942 C28.4284583,47.7126091 28.188,47.717424 27.9475417,47.7222389 C27.3385417,47.7306651 26.7295417,47.7402949 26.1024167,47.7402949 C25.2614167,47.7402949 24.4494167,47.7306651 23.6519167,47.7126091 C23.3546667,47.7029792 23.0670833,47.6933494 22.7746667,47.6837195 C22.420625,47.6752934 22.07625,47.6608486 21.7306667,47.6464039 C14.9482917,47.345471 9.595375,46.381282 6.173375,45.3280169 C3.51625,44.5106831 2.03,43.6403852 1.94420833,42.986759 C2.05295833,42.6244358 3.0305,41.7168221 6.61804167,40.842913 Z M1.93575,49.663858 L1.93575,45.6758953 C2.70425,46.1609991 3.68179167,46.6027686 4.83333333,47.0024075 L4.83333333,51.5910322 L4.281125,51.3803792 L4.27145833,51.3888053 C2.751375,50.7640686 1.93575,50.147758 1.93575,49.663858 Z M4.83333333,60.2578995 L4.83333333,56.2699368 C5.607875,56.7538369 6.58420833,57.1968101 7.73091667,57.596449 L7.73091667,62.2043334 C5.85316667,61.5037617 4.83333333,60.798375 4.83333333,60.2578995 Z M50.2690833,62.2043334 L50.2690833,57.596449 C51.4157917,57.1968101 52.392125,56.7538369 53.1666667,56.2699368 L53.1666667,60.2530846 C53.1666667,60.798375 52.1468333,61.5037617 50.2690833,62.2043334 Z M53.1521667,53.5940415 C53.04825,54.2440566 51.562,55.1083358 48.923,55.9220584 C45.5058333,56.9753235 40.1529167,57.9395125 33.3705417,58.2404454 C33.0213333,58.2548902 32.6769583,58.2681312 32.3229167,58.2777611 C32.0353333,58.2873909 31.7429167,58.2970208 31.4492917,58.3066506 C30.6469583,58.3198917 29.8349583,58.3343364 29,58.3343364 C28.1650417,58.3343364 27.3482083,58.3198917 26.5507083,58.3018357 C26.2570833,58.2970208 25.9695,58.2873909 25.6819167,58.2777611 C25.327875,58.2633163 24.9786667,58.2500752 24.6294583,58.2356305 C17.8470833,57.9395125 12.4941667,56.9753235 9.077,55.9220584 C6.51895833,55.1372254 5.04116667,54.2994282 4.8575,53.6554318 C5.14508333,53.7541378 5.44233333,53.8528438 5.74925,53.9467349 C5.781875,53.9563647 5.810875,53.9659946 5.8435,53.9756244 C6.10329167,54.0550707 6.37154167,54.1309058 6.64583333,54.2055372 C6.74975,54.2344267 6.85366667,54.2669275 6.95758333,54.2910021 C7.11345833,54.3331327 7.26933333,54.3752633 7.42883333,54.412579 C10.9499167,55.3105627 15.4437083,55.9509479 20.296375,56.2374361 C20.296375,56.2374361 20.296375,56.2374361 20.3012083,56.2374361 C21.8019583,56.3216973 23.3317083,56.3782726 24.8795833,56.3975324 C25.2904167,56.4059585 25.70125,56.4059585 26.1024167,56.4059585 C26.6304583,56.4059585 27.1778333,56.4023473 27.7300417,56.3927174 C29.141375,56.3686428 30.5345833,56.3168823 31.8939583,56.2374361 C31.8975833,56.2374361 31.8975833,56.2374361 31.9024167,56.2374361 C31.90725,56.2374361 31.90725,56.2374361 31.9120833,56.2374361 C33.5687083,56.1339151 35.173375,55.9930785 36.717625,55.8185375 C36.7224583,55.8185375 36.7272917,55.8185375 36.73575,55.8185375 C36.7550833,55.8185375 36.7744167,55.8089076 36.7925417,55.8089076 C38.5107917,55.6114956 40.139625,55.3671381 41.6500417,55.0854649 C41.9617917,55.0288896 42.2675,54.9723142 42.5695833,54.9109239 C42.640875,54.8976828 42.7073333,54.883238 42.7725833,54.8687933 C45.6290833,54.2861872 48.0977083,53.52904 49.796625,52.5925369 C49.8860417,52.5407764 49.9754583,52.4902197 50.06125,52.4384592 C50.17,52.3770689 50.2727083,52.3108637 50.373,52.2446584 C50.46725,52.1844719 50.5711667,52.1278965 50.65575,52.0665062 C52.5673333,52.7430033 53.09175,53.349684 53.1521667,53.5940415 Z M53.1666667,41.0162504 L53.1666667,36.4083659 C54.3182083,36.0087271 55.29575,35.5669576 56.06425,35.0830575 L56.06425,39.0698164 C56.06425,39.6102919 55.045625,40.3156786 53.1666667,41.0162504 Z",id:"coins",fill:"#000"}),react.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"25.5",cy:"21",rx:"22.5",ry:"4"}),react.createElement("ellipse",{id:"Oval",fill:"#CBD2D7",cx:"66",cy:"35",rx:"33",ry:"34"}),react.createElement("g",{id:"coin",transform:"translate(32)"},react.createElement("g",{id:"Group-3"},react.createElement("mask",{id:"mask-2",fill:"#fff"},react.createElement("use",{xlinkHref:"#path-1"})),react.createElement("path",{d:"M37.2506957,0.893617021 C36.0444348,0.893617021 34.8544348,0.985957447 33.688087,1.14382979 C32.464087,0.981489362 31.3036522,0.893617021 30.1535652,0.893617021 C21.4525217,0.893617021 13.5985217,5.14574468 8.09052174,11.9297872 C8.03286957,11.9819149 7.99147826,12.04 7.94565217,12.0980851 C6.19095652,14.2919149 4.68313043,16.7478723 3.46504348,19.4004255 C3.42956522,19.4585106 3.4073913,19.5165957 3.38373913,19.5806383 C2.54113043,21.436383 1.84191304,23.3859574 1.2993913,25.4159574 C1.24765217,25.5261702 1.224,25.6542553 1.20626087,25.7823404 C0.427217391,28.8534043 0,32.0942553 0,35.4453191 C0,40.6938298 1.03330435,45.6668085 2.86486957,50.1304255 C2.88113043,50.1765957 2.89886957,50.222766 2.92252174,50.2629787 C4.0193913,52.9110638 5.40452174,55.3655319 7.02765217,57.5876596 C7.06756522,57.6457447 7.10304348,57.7053191 7.15478261,57.7514894 C8.80008696,59.973617 10.6833913,61.9574468 12.7618261,63.6448936 C12.8194783,63.7089362 12.8889565,63.7551064 12.9643478,63.807234 C17.8426087,67.7048936 23.7674783,69.9970213 30.1535652,69.9970213 C31.3036522,69.9970213 32.464087,69.9165957 33.688087,69.7468085 C34.8544348,69.9106383 36.0444348,69.9970213 37.2506957,69.9970213 C53.8811304,69.9970213 67.4116522,54.4987234 67.4116522,35.4453191 C67.4116522,16.3919149 53.8811304,0.893617021 37.2506957,0.893617021 Z M24.7667826,4.00638298 C24.3735652,4.21489362 23.9877391,4.42489362 23.6063478,4.6512766 C23.392,4.77340426 23.1732174,4.89553191 22.9647826,5.02361702 C22.6351304,5.22765957 22.3187826,5.44361702 21.9950435,5.65808511 L19.72,5.65808511 C21.4466087,4.84340426 23.2530435,4.20446809 25.1363478,3.80234043 C25.0092174,3.86638298 24.888,3.94234043 24.7667826,4.00638298 Z M12.8431304,55.703617 L8.60347826,55.703617 C7.55834783,54.2202128 6.63443478,52.6191489 5.82582609,50.9391489 L10.307913,50.9391489 C10.4926957,51.3576596 10.6833913,51.7761702 10.8844348,52.1887234 C10.9716522,52.3644681 11.0573913,52.5387234 11.1505217,52.7189362 C11.3929565,53.1955319 11.6413043,53.6676596 11.9073913,54.1323404 C12.0049565,54.3006383 12.098087,54.476383 12.1956522,54.6506383 C12.404087,55.0051064 12.6228696,55.353617 12.8431304,55.703617 Z M5.28330435,21.1519149 L9.81121739,21.1519149 C9.60278261,21.6687234 9.40617391,22.1989362 9.2213913,22.7276596 C9.16965217,22.8795745 9.11791304,23.0240426 9.06617391,23.17 C8.89913043,23.6823404 8.73652174,24.1991489 8.58721739,24.7234043 L3.97356522,24.7234043 C4.34756522,23.4961702 4.7866087,22.3031915 5.28330435,21.1519149 Z M2.36817391,35.4453191 C2.36817391,34.6425532 2.40808696,33.8517021 2.45982609,33.0668085 L7.17252174,33.0668085 C7.17252174,33.0831915 7.17252174,33.1010638 7.17252174,33.1189362 C7.12521739,33.8919149 7.09713043,34.666383 7.09713043,35.4453191 C7.09713043,35.8474468 7.10895652,36.2421277 7.11930435,36.6382979 L2.414,36.6382979 C2.39626087,36.2421277 2.36817391,35.8474468 2.36817391,35.4453191 Z M7.25826087,39.0242553 C7.29965217,39.5231915 7.35730435,40.0191489 7.42530435,40.5180851 C7.42530435,40.5538298 7.43121739,40.5880851 7.43713043,40.6238298 C7.52434783,41.2865957 7.62782609,41.9434043 7.74904348,42.5957447 L3.08365217,42.5957447 C2.85304348,41.4265957 2.67417391,40.233617 2.55295652,39.0242553 L7.25826087,39.0242553 Z M7.99147826,27.1093617 C7.95747826,27.2478723 7.93382609,27.3878723 7.90573913,27.5338298 C7.87026087,27.6902128 7.84217391,27.8421277 7.80669565,27.9985106 C7.66330435,28.7491489 7.53617391,29.4997872 7.43713043,30.2682979 C7.43121739,30.3025532 7.43121739,30.3382979 7.42530435,30.3785106 C7.40904348,30.4768085 7.40313043,30.5825532 7.39130435,30.6808511 L2.69634783,30.6808511 C2.85304348,29.47 3.04817391,28.2725532 3.32017391,27.1093617 L7.99147826,27.1093617 Z M8.27530435,44.9817021 C8.30930435,45.1261702 8.34478261,45.2721277 8.37878261,45.4180851 C8.39652174,45.4702128 8.40834783,45.5223404 8.41869565,45.5744681 C8.61530435,46.3012766 8.83556522,47.0176596 9.07208696,47.7206383 C9.11791304,47.8665957 9.16965217,48.0125532 9.2213913,48.1629787 C9.26869565,48.2910638 9.3086087,48.4251064 9.35443478,48.5531915 L4.79843478,48.5531915 C4.34756522,47.3959574 3.96765217,46.2029787 3.638,44.9817021 L8.27530435,44.9817021 Z M12.1956522,16.2474468 C12.098087,16.4157447 11.9990435,16.59 11.9073913,16.7642553 C11.6413043,17.2304255 11.3929565,17.7010638 11.1505217,18.1776596 C11.0573913,18.3534043 10.9716522,18.5276596 10.8844348,18.7078723 C10.8726087,18.7257447 10.8622609,18.7480851 10.8563478,18.7659574 L6.42156522,18.7659574 C7.31591304,17.0665957 8.34478261,15.4729787 9.4933913,14.0014894 L13.634,14.0014894 C13.4891304,14.21 13.3442609,14.4140426 13.2008696,14.63 C12.8534783,15.152766 12.5193913,15.6934043 12.1956522,16.2474468 Z M15.6488696,8.04404255 L18.9173043,8.04404255 C18.6231304,8.30021277 18.3274783,8.56085106 18.0451304,8.82893617 C17.8026957,9.05531915 17.578,9.29510638 17.34,9.52744681 C17.1093913,9.76574468 16.8787826,10.0040426 16.6481739,10.2482979 C16.427913,10.4806383 16.2150435,10.7204255 16.0006957,10.9587234 C15.81,11.1731915 15.6311304,11.3951064 15.4463478,11.6155319 L11.5437391,11.6155319 C12.8135652,10.2840426 14.1824348,9.08510638 15.6488696,8.04404255 Z M10.4350435,58.0821277 L14.4943478,58.0821277 C14.6273913,58.2638298 14.7589565,58.4380851 14.897913,58.6123404 C15.2556522,59.0665957 15.6193043,59.5029787 16.0006957,59.9334043 C16.2091304,60.1776596 16.427913,60.41 16.6481739,60.6423404 C16.8787826,60.8865957 17.1093913,61.1308511 17.345913,61.3691489 C17.4390435,61.4629787 17.5306957,61.567234 17.6238261,61.6610638 L14.0671304,61.6610638 C12.7677391,60.5902128 11.554087,59.3912766 10.4350435,58.0821277 Z M25.1363478,67.0882979 C22.4222609,66.5134043 19.8589565,65.4604255 17.4848696,64.0395745 L20.3438261,64.0395745 C20.4931304,64.1617021 20.6498261,64.2734043 20.8050435,64.383617 C21.0474783,64.5697872 21.289913,64.7559574 21.5441739,64.9302128 C22.0068696,65.256383 22.479913,65.5706383 22.9647826,65.8670213 C23.1732174,65.9951064 23.386087,66.117234 23.6004348,66.2453191 C23.9877391,66.4657447 24.3735652,66.6817021 24.7608696,66.8857447 C24.888,66.9497872 25.0092174,67.0242553 25.1363478,67.0882979 Z M37.2506957,67.6185106 C36.3090435,67.6185106 35.3866087,67.5604255 34.4671304,67.4546809 L34.0118261,67.3906383 C33.9482609,67.3802128 33.8846957,67.3742553 33.8211304,67.3623404 C33.4116522,67.3042553 33.0066087,67.2342553 32.6030435,67.1582979 C32.5675652,67.1523404 32.5394783,67.1404255 32.504,67.1359574 C32.1122609,67.06 31.7249565,66.9721277 31.3376522,66.8738298 C31.28,66.8619149 31.2223478,66.8440426 31.1646957,66.8276596 C30.8069565,66.7338298 30.4492174,66.6414894 30.095913,66.5297872 C29.9924348,66.4955319 29.8830435,66.4597872 29.7736522,66.4255319 C29.4735652,66.327234 29.172,66.2274468 28.8778261,66.1231915 C28.6353913,66.0293617 28.3988696,65.9370213 28.1623478,65.837234 C27.9997391,65.7731915 27.8326957,65.7151064 27.6774783,65.6465957 C21.3135652,62.9344681 16.042087,57.6055319 12.8313043,50.7931915 C12.8017391,50.7291489 12.7795652,50.6651064 12.75,50.6010638 C12.5770435,50.2346809 12.41,49.856383 12.2533043,49.4780851 C12.1838261,49.3276596 12.1261739,49.1757447 12.0685217,49.0238298 C11.9473043,48.7274468 11.826087,48.4310638 11.7166957,48.1287234 C11.6472174,47.9365957 11.5777391,47.7385106 11.5082609,47.546383 C11.4166087,47.2797872 11.3234783,47.0176596 11.2377391,46.7495745 C11.1682609,46.5291489 11.0987826,46.307234 11.0293043,46.0868085 C10.953913,45.8365957 10.8785217,45.5804255 10.8090435,45.3302128 C10.7410435,45.0978723 10.6833913,44.8595745 10.6198261,44.6257447 C10.5562609,44.3755319 10.4926957,44.1253191 10.4350435,43.8751064 C10.3773913,43.6308511 10.3241739,43.3925532 10.2724348,43.1482979 C10.2147826,42.8921277 10.1689565,42.6419149 10.1172174,42.3857447 C10.069913,42.1414894 10.024087,41.897234 9.98417391,41.6470213 C9.93834783,41.3848936 9.90286957,41.1182979 9.86295652,40.8561702 C9.82747826,40.6119149 9.78756522,40.373617 9.75947826,40.1293617 C9.724,39.8434043 9.69591304,39.5589362 9.66634783,39.2685106 C9.64269565,39.0406383 9.6146087,38.8202128 9.59686957,38.5923404 C9.56878261,38.2617021 9.55104348,37.9295745 9.5273913,37.5929787 C9.51704348,37.4068085 9.50521739,37.2206383 9.4933913,37.0285106 C9.47565217,36.5042553 9.45791304,35.9814894 9.45791304,35.4453191 C9.45791304,34.9165957 9.47565217,34.386383 9.4933913,33.863617 C9.50521739,33.6714894 9.51704348,33.4853191 9.5273913,33.2991489 C9.55104348,32.9670213 9.56878261,32.6304255 9.59686957,32.2982979 C9.6146087,32.0719149 9.64269565,31.85 9.66634783,31.623617 C9.69591304,31.3376596 9.724,31.047234 9.75947826,30.762766 C9.78756522,30.5185106 9.82747826,30.2787234 9.86295652,30.0344681 C9.90286957,29.7738298 9.93834783,29.5057447 9.98417391,29.243617 C10.024087,28.9993617 10.069913,28.7551064 10.1172174,28.5108511 C10.1689565,28.2546809 10.2206957,27.9985106 10.2724348,27.7423404 C10.3241739,27.4980851 10.3773913,27.2597872 10.4350435,27.0214894 C10.4926957,26.7653191 10.5562609,26.5151064 10.6198261,26.2648936 C10.6833913,26.0325532 10.7410435,25.8002128 10.8090435,25.5604255 C10.8785217,25.3117021 10.953913,25.0555319 11.0293043,24.8053191 C11.0987826,24.5834043 11.1682609,24.3629787 11.2377391,24.1410638 C11.3234783,23.8744681 11.4166087,23.6123404 11.5082609,23.3442553 C11.5777391,23.1461702 11.6472174,22.9540426 11.7166957,22.7634043 C11.832,22.4595745 11.9473043,22.1631915 12.0685217,21.8668085 C12.1261739,21.7148936 12.1838261,21.5644681 12.2533043,21.4125532 C12.41,21.0342553 12.5770435,20.6574468 12.75,20.2895745 C12.7795652,20.2255319 12.8017391,20.1614894 12.8313043,20.0989362 C16.042087,13.2851064 21.3135652,7.95617021 27.6774783,5.24553191 C27.8326957,5.17553191 27.9997391,5.11744681 28.1623478,5.05340426 C28.3988696,4.95510638 28.6353913,4.8612766 28.8778261,4.76893617 C29.172,4.66319149 29.4735652,4.56489362 29.7736522,4.46510638 C29.8830435,4.43085106 29.9924348,4.39659574 30.095913,4.36085106 C30.4492174,4.2506383 30.8069565,4.15085106 31.1646957,4.06446809 C31.2223478,4.04659574 31.28,4.0287234 31.3376522,4.01829787 C31.7249565,3.91851064 32.1122609,3.83212766 32.504,3.75617021 C32.5394783,3.75021277 32.5675652,3.73829787 32.6030435,3.73234043 C33.0066087,3.65638298 33.4116522,3.58787234 33.8211304,3.52978723 C33.8846957,3.51787234 33.9482609,3.51191489 34.0118261,3.5 L34.4671304,3.43595745 C35.3866087,3.33170213 36.3090435,3.27957447 37.2506957,3.27957447 C52.5758261,3.27957447 65.0434783,17.7070213 65.0434783,35.4453191 C65.0434783,53.183617 52.5758261,67.6185106 37.2506957,67.6185106 Z",id:"Fill-1",fill:"#000",mask:"url(#mask-2)"})),react.createElement("path",{d:"M16.6148442,34.9764444 C16.6148442,34.2098834 16.6421114,33.4433224 16.6980809,32.688929 C16.7483099,32.0242719 16.2775921,31.4356625 15.6447062,31.3824291 C15.0103853,31.3352795 14.4621712,31.8280688 14.4105071,32.4988097 C14.3487971,33.3125203 14.3157895,34.1505662 14.3157895,34.9764444 L14.3157895,35.0068635 C14.3157895,35.6776044 14.8309959,36.2068966 15.4653168,36.2068966 C16.0982027,36.2068966 16.6148442,35.6487063 16.6148442,34.9764444 Z",id:"Fill-4",fill:"#000"}),react.createElement("path",{d:"M58.08881,29.2367289 C58.252798,29.7981398 58.8180333,30.1724138 59.4460725,30.1724138 C59.5542349,30.1724138 59.6693754,30.1600411 59.7862605,30.1368423 C60.5294402,29.9667178 60.9847687,29.2970458 60.8015905,28.6320136 C60.5625867,27.8045898 60.2904364,26.9833523 59.9764168,26.1853136 C59.7321793,25.5388405 58.9349184,25.1893119 58.2056951,25.4120204 C57.4764717,25.6362754 57.0874363,26.3430655 57.3403966,26.9833523 C57.6195251,27.7195275 57.8707408,28.4758083 58.08881,29.2367289 Z",id:"Fill-5",fill:"#000"}),react.createElement("path",{d:"M52.9631342,52.2792343 C52.5320984,52.7941348 52.0795109,53.286875 51.6107595,53.7405088 C51.1904996,54.1537327 51.1958876,54.8094162 51.6161474,55.2174259 C51.8262774,55.420779 52.1010627,55.5172414 52.374501,55.5172414 C52.6533273,55.5172414 52.9321535,55.4155648 53.1368955,55.2122117 C53.6581794,54.7025254 54.1632994,54.1628576 54.6360918,53.5984224 C55.0105541,53.1500027 54.9418578,52.4930157 54.4784943,52.1319336 C54.0205188,51.7656373 53.3416375,51.8360288 52.9631342,52.2792343 Z",id:"Fill-6",fill:"#000"}),react.createElement("path",{d:"M17.0691578,41.9724294 C16.8856114,41.3092118 16.1199605,40.9041699 15.3770344,41.0726797 C14.6253679,41.2365516 14.1673758,41.905953 14.3596626,42.5707166 C14.5904067,43.3978061 14.8648524,44.2187117 15.1707631,45.0226118 C15.3700421,45.5358711 15.9154373,45.862069 16.4957937,45.862069 C16.646127,45.862069 16.7964602,45.8373336 16.9467935,45.7955926 C17.6774832,45.5714282 18.0673009,44.8711075 17.8208243,44.2248956 C17.5341422,43.4890178 17.2806733,42.7345885 17.0691578,41.9724294 Z",id:"Fill-7",fill:"#000"}),react.createElement("path",{d:"M49.5208036,12.2547219 C48.774669,11.7930703 47.9916289,11.3677453 47.195752,10.9953968 C46.5619388,10.6866199 45.7917354,10.9348523 45.4708173,11.5266746 C45.1515038,12.1245513 45.4082383,12.851085 46.0356331,13.1522938 C46.7496759,13.4898292 47.4460681,13.8742866 48.1167869,14.2814482 C48.3366158,14.4176733 48.5805136,14.4827586 48.817993,14.4827586 C49.2383957,14.4827586 49.65238,14.2875027 49.8962778,13.9333175 C50.2845886,13.3717675 50.1161066,12.621016 49.5208036,12.2547219 Z",id:"Fill-8",fill:"#000"}),react.createElement("path",{d:"M45.8954206,58.0750167 C45.1988984,58.4417511 44.4773326,58.7697119 43.7557669,59.0540523 C43.1140273,59.3060813 42.7837662,60.0508593 43.0279403,60.7197054 C43.2173317,61.2366879 43.6947234,61.5517241 44.2018542,61.5517241 C44.3489847,61.5517241 44.4945501,61.5274906 44.6416806,61.4709456 C45.4555942,61.1542938 46.2554209,60.7891749 47.0380301,60.3723578 C47.6562914,60.0508593 47.8942047,59.2673076 47.5827262,58.6307729 C47.2649868,57.9990849 46.5074211,57.7470559 45.8954206,58.0750167 Z",id:"Fill-9",fill:"#000"}),react.createElement("path",{d:"M55.8777173,19.6280959 C55.4397723,18.8525939 54.9681393,18.0955964 54.4796622,17.3873831 C54.085231,16.8154295 53.3777815,16.7296364 52.9005338,17.2023393 C52.4232861,17.6750422 52.3516989,18.5228795 52.7475338,19.101562 C53.1910934,19.745851 53.6192127,20.428831 54.0136439,21.1319976 C54.2326164,21.5205897 54.5835338,21.7241379 54.9456806,21.7241379 C55.1646531,21.7241379 55.3850292,21.6518026 55.5759283,21.4936742 C56.0924787,21.0798489 56.22302,20.2387405 55.8777173,19.6280959 Z",id:"Fill-10",fill:"#000"}),react.createElement("path",{d:"M59.691244,33.7931034 C59.0553932,33.7931034 58.5389442,34.3789607 58.5389442,35.0535379 C58.5389442,35.8061274 58.5101727,36.5648355 58.4598225,37.3067174 C58.4094724,37.9751759 58.8813255,38.5671518 59.5171763,38.6206897 C59.5502635,38.6206897 59.5790351,38.6206897 59.606368,38.6206897 C60.2019387,38.6206897 60.7083176,38.1373192 60.7529135,37.4918054 C60.8147723,36.6856781 60.8421053,35.8657838 60.8421053,35.0535379 L60.8421053,34.9755255 C60.8421053,34.3009484 60.3256563,33.7931034 59.691244,33.7931034 Z",id:"Fill-11",fill:"#000"}),react.createElement("path",{d:"M58.7499945,43.5138653 C58.0607135,43.2929237 57.3120685,43.6486241 57.0812088,44.3036141 C56.8107732,45.0557557 56.5139536,45.8031964 56.1792071,46.519298 C55.8889835,47.1554844 56.198995,47.8966573 56.8618921,48.1724426 C57.0350369,48.2398219 57.2164266,48.2758621 57.3895714,48.2758621 C57.8991117,48.2758621 58.382268,47.993809 58.6015847,47.5237204 C58.9610662,46.7339717 59.2908658,45.9191516 59.5794404,45.0996306 C59.8119491,44.4446406 59.4442226,43.734807 58.7499945,43.5138653 Z",id:"Fill-12",fill:"#000"}),react.createElement("path",{d:"M39.4934863,8.58673709 C38.674895,8.49252636 37.8442434,8.44827586 37.019622,8.44827586 L36.9728884,8.44827586 C36.3080656,8.44827586 35.7894737,8.96072514 35.7894737,9.59022411 C35.7894737,10.2211505 36.3547992,10.7335998 37.019622,10.7335998 C37.7507763,10.7335998 38.4864532,10.773568 39.2160999,10.8506495 C39.2643411,10.8563592 39.3110746,10.862069 39.3578082,10.862069 C39.957807,10.862069 40.482429,10.4324109 40.5532832,9.8528722 C40.6301674,9.22337323 40.152279,8.65953629 39.4934863,8.58673709 Z",id:"Fill-13",fill:"#000"}),react.createElement("path",{d:"M19.9502953,50.0744196 C19.6046393,49.457276 18.9020863,49.2992066 18.3906278,49.7128777 C17.8749539,50.1265488 17.7386587,50.9606175 18.0899351,51.577761 C18.5227077,52.352974 18.9892029,53.1096896 19.4781797,53.817639 C19.7029967,54.1405042 20.0275761,54.3103448 20.3507505,54.3103448 C20.6036695,54.3103448 20.8551835,54.2128126 21.0645442,54.0093402 C21.5422802,53.5351318 21.6125355,52.689292 21.2177008,52.1108251 C20.7736873,51.4667761 20.34513,50.7773242 19.9502953,50.0744196 Z",id:"Fill-14",fill:"#000"}),react.createElement("path",{d:"M18.2995751,23.0359679 C17.6308165,22.7615773 16.8516962,23.0422397 16.561791,23.6803936 C16.2027039,24.4690704 15.8666774,25.2844022 15.5784194,26.099734 C15.3461657,26.7551354 15.7134888,27.4716866 16.4020137,27.691199 C16.5436719,27.7351015 16.6853302,27.7586207 16.8269884,27.7586207 C17.3738551,27.7586207 17.8877779,27.4277841 18.0739103,26.9072261 C18.3374605,26.1608839 18.6405432,25.4129737 18.9749225,24.6838789 C19.2714165,24.0535647 18.961745,23.3119263 18.2995751,23.0359679 Z",id:"Fill-15",fill:"#000"}),react.createElement("path",{d:"M36.9351458,60.479899 C36.1992782,60.479899 35.4574763,60.4356935 34.7334776,60.3515604 C34.0836591,60.2845392 33.4872504,60.7251681 33.4115866,61.3483229 C33.3359228,61.9729037 33.8002908,62.5404452 34.4486257,62.6188743 C35.2660914,62.7129892 36.1072948,62.7586207 36.9351458,62.7586207 L37.0404816,62.7586207 C37.6947509,62.7586207 38.1754386,62.2509705 38.1754386,61.6221118 C38.1754386,60.9875491 37.5908987,60.479899 36.9351458,60.479899 Z",id:"Fill-16",fill:"#000"}),react.createElement("path",{d:"M22.0188172,14.7893456 C21.5037703,15.2936939 20.9994815,15.8384422 20.5207434,16.397526 C20.1482421,16.8458356 20.2168253,17.5026613 20.6740471,17.8688677 C20.8784522,18.026558 21.1151317,18.1034483 21.3571903,18.1034483 C21.6664874,18.1034483 21.9771293,17.9705193 22.1922925,17.7216032 C22.6226189,17.2068291 23.0798407,16.7181195 23.5464759,16.2606873 C23.9673889,15.8527777 23.9620099,15.1920423 23.5424416,14.7841327 C23.1215286,14.381436 22.4383854,14.381436 22.0188172,14.7893456 Z",id:"Fill-17",fill:"#000"}),react.createElement("path",{d:"M30.5187987,9.73832644 C29.7068511,10.0536004 28.8995968,10.4206116 28.1236315,10.8312762 C27.5072397,11.1530173 27.2616216,11.9355435 27.5745109,12.5677082 C27.7935333,13.0155589 28.2347072,13.2758621 28.6915255,13.2758621 C28.8823879,13.2758621 29.0779437,13.230592 29.2609839,13.1368182 C29.9571625,12.7698069 30.6721144,12.4415986 31.3995819,12.1635108 C32.0410048,11.9112917 32.371103,11.1659517 32.1333072,10.4966008 C31.8876891,9.82724987 31.1680438,9.48610726 30.5187987,9.73832644 Z",id:"Fill-18",fill:"#000"}),react.createElement("path",{d:"M29.1242348,58.0582427 C28.4163214,57.7164648 27.7132238,57.338392 27.0422311,56.9179749 C26.4466849,56.5580495 25.656904,56.7123032 25.2620135,57.2733634 C24.8735441,57.8283744 25.0420949,58.578471 25.6312201,58.9444456 C26.3840803,59.4117437 27.1674402,59.8366976 27.9572211,60.2147705 C28.1466401,60.3039957 28.3408749,60.3448276 28.5415306,60.3448276 C29.0054466,60.3448276 29.4565207,60.1028609 29.6828603,59.6839562 C30.0087252,59.086601 29.7518859,58.3607011 29.1242348,58.0582427 Z",id:"Fill-19",fill:"#000"}))),react.createElement("g",{id:"bat",transform:"translate(99 101)"},react.createElement("g",{id:"Group-3",opacity:"0.477",transform:"translate(0 27.75)"},react.createElement("mask",{id:"mask-4",fill:"#fff"},react.createElement("use",{xlinkHref:"#path-3"}))),react.createElement("polygon",{id:"Fill-4",fill:"#9E1F63",points:"16.524725 0 16.5178571 18.9797718 33.0357143 28.4107143"}),react.createElement("polygon",{id:"Fill-5",fill:"#FB542B",points:"0 28.4107143 16.5022194 19.0069334 16.5178571 0"}),react.createElement("polygon",{id:"Fill-6",fill:"#662D91",points:"0 28.4107143 33.0357143 28.4090548 16.5506168 19.1607143"}),react.createElement("polygon",{id:"Fill-7",fill:"#FFF",points:"16.7940022 11.2321429 9.91071429 22.4642857 23.7857143 22.4642857"}),react.createElement("polygon",{id:"Stroke-8",stroke:"#999EA2",strokeWidth:"0.88",points:"16.7940022 11.2321429 9.91071429 22.4642857 23.7857143 22.4642857"}))))))),gift=__webpack_require__(467),gift_default=__webpack_require__.n(gift);__webpack_require__.d(__webpack_exports__,"a",function(){return grantWrapper_GrantWrapper});class grantWrapper_GrantWrapper extends react.PureComponent{render(){const{id:id,testId:testId,isPanel:isPanel,fullScreen:fullScreen,hint:hint,onClose:onClose,title:title,text:text,children:children}=this.props;return react.createElement(StyledWrapper,{id:id,"data-test-id":testId,isPanel:isPanel,fullScreen:fullScreen},react.createElement(StyledClose,{onClick:onClose},react.createElement(close_circle_o.a,null)),isPanel?react.createElement(StyledGrantIcon,{src:gift_default.a}):react.createElement(StyledHeader,null,header),react.createElement(StyledTitle,{isPanel:isPanel},title),isPanel&&hint?null:react.createElement(StyledText,null,text),isPanel&&hint?react.createElement(StyledPanelText,null,Object(helpers.a)("captchaDrag")," ",react.createElement(StyledHint,null,hint)," ",Object(helpers.a)("captchaTarget")):null,children)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1),buttonsIndicators_button=__webpack_require__(12),panel=__webpack_require__(469),panel_default=__webpack_require__.n(panel);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
  font-family: ${p=>p.theme.fontFamily.body};
  width: ${p=>p.isMobile?"100%":"373px"};
  background: ${p=>(notification=>notification?"linear-gradient(-180deg, rgba(255,255,255,1) 0%, rgba(228,242,255,1) 40%)":`url(${panel_default.a}) no-repeat top left,\n    linear-gradient(172deg, #392dd1, rgba(255, 26, 26, 0.53)),\n    linear-gradient(#7d7bdc, #7d7bdc)`)(p.notification)};
  min-height: ${p=>p.compact?"unset":"715px"};
  border-radius: ${p=>p.compact?"0":"6px"};
  display: flex;
  flex-direction: column;
  max-width: 415px;
  margin: 0 auto;
`,StyledHeader=Object(theme.b)("div").withConfig({displayName:"StyledHeader"})`
  padding: 16px 21px 0 19px;
  position: relative;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.65);
`,StyledBalance=Object(theme.b)("div").withConfig({displayName:"StyledBalance"})`
  text-align: center;
`,StyleGrantButton=Object(theme.b)("div").withConfig({displayName:"StyleGrantButton"})`
  display: flex;
  justify-content: center;
`,StyledBalanceTokens=Object(theme.b)("div").withConfig({displayName:"StyledBalanceTokens"})`
  font-size: 36px;
  line-height: 0.61;
  letter-spacing: -0.4px;
  color: #fff;
  margin-top: 10px;
  font-weight: 300;
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  padding: ${p=>p.contentPadding?"11px 25px 19px":"0px"};
  position: relative;
  background: #fff;
  flex: 1;
`,StyledAction=Object(theme.b)("button").withConfig({displayName:"StyledAction"})`
  display: flex;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  align-items: center;
  color: #A1A8F2;
`,StyledActionIcon=Object(theme.b)("div").withConfig({displayName:"StyledActionIcon"})`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  vertical-align: text-bottom;
`,StyledActionText=Object(theme.b)("div").withConfig({displayName:"StyledActionText"})`
  color: #fff;
  font-size: 14px;
  opacity: 0.65;
`,StyledCopy=Object(theme.b)("div").withConfig({displayName:"StyledCopy"})`
  font-size: 12px;
  color: #838391;
  padding: 19px 15px;
  background: ${p=>p.connected?"#dcdfff":"#dee2e6"};
  text-align: center;
`,StyledCopyImage=Object(theme.b)("span").withConfig({displayName:"StyledCopyImage"})`
  vertical-align: middle;
  display: inline-block;
  color: #838391;
  width: 27px;
  height: 27px;
`,StyledIconAction=Object(theme.b)("button").withConfig({displayName:"StyledIconAction"})`
  position: absolute;
  top: 15px;
  right: 21px;
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  color: #A1A8F2;
  width: 24px;
  height: 24px;
`,StyledBalanceConverted=Object(theme.b)("div").withConfig({displayName:"StyledBalanceConverted"})`
  font-family: Muli, sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: 8px 0;
  font-weight: 300;
`,StyledGrantWrapper=Object(theme.b)("div").withConfig({displayName:"StyledGrantWrapper"})`
  margin-top: 13px;
`,StyledGrant=Object(theme.b)("div").withConfig({displayName:"StyledGrant"})`
  font-family: Muli, sans-serif;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.60);
  text-align: center;
  margin-bottom: 3px;

  b {
    font-weight: 600;
    color: #fff;
    min-width: 81px;
    text-align: right;
    display: inline-block;
    padding-right: 5px;
  }

  span {
    min-width: 135px;
    text-align: left;
    display: inline-block;
  }
`,StyledActionWrapper=Object(theme.b)("div").withConfig({displayName:"StyledActionWrapper"})`
  text-align: center;
  font-size: 12px;
  color: #fff;
  display: flex;
  justify-content: space-evenly;
  margin: 15px 0 5px 0;
  padding-bottom: 3px;
`,StyledBalanceCurrency=Object(theme.b)("span").withConfig({displayName:"StyledBalanceCurrency"})`
  text-transform: uppercase;
  opacity: 0.66;
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 0.88;
  color: #fff;
`,StyledCurve=Object(theme.b)("div").withConfig({displayName:"StyledCurve"})`
  padding: 10px 0;
  position: relative;
  overflow: hidden;
  margin: 0 -21px 0 -19px;
  z-index: 5;

  :before {
    content: "";
    position: absolute;
    bottom: -16px;
    margin-left: -50%;
    height: 240px;
    width: 200%;
    border-radius: 100%;
    border: 20px solid ${p=>p.background?(rgbColor=>`rgb(${rgbColor})`)(p.background):"#fff"};
  }
`,StyledAlertWrapper=Object(theme.b)("div").withConfig({displayName:"StyledAlertWrapper"})`
  display: flex;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 5;
  width: 100%;
`,StyledAlertClose=Object(theme.b)("button").withConfig({displayName:"StyledAlertClose"})`
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  top: 11px;
  right: 11px;
  cursor: pointer;
  width: 15px;
  height: 15px;
  color: #B8B9C4;
`,StyledBAT=Object(theme.b)("div").withConfig({displayName:"StyledBAT"})`
  text-align: center;
  max-width: 300px;
  margin: 20px auto 0;
  color: #686978;

  a {
    color: #686978;

    &:hover {
      text-decoration: none;
    }
  }
`,StyledNotificationIcon=Object(theme.b)("img").withConfig({displayName:"StyledNotificationIcon"})`
  height: 48px;
  width: 48px;
  margin: 8px 0px 12px;
`,StyledNotificationCloseIcon=Object(theme.b)("div").withConfig({displayName:"StyledNotificationCloseIcon"})`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 16px;
  right: 16px;
  color: #9E9FAB;
  cursor: pointer;
`,StyledNotificationContent=Object(theme.b)("div").withConfig({displayName:"StyledNotificationContent"})`
  display: block;
  text-align: center;
`,StyledNotificationMessage=Object(theme.b)("div").withConfig({displayName:"StyledNotificationMessage"})`
  max-width: 285px;
  color: #4B4C5C;
  padding-bottom: 5px;
  margin: 0 auto;
`,StyledTypeText=Object(theme.b)("span").withConfig({displayName:"StyledTypeText"})`
  font-weight: 500;
  margin-right: 5px;
  display: inline-block;
`,StyledMessageText=Object(theme.b)("span").withConfig({displayName:"StyledMessageText"})`
  line-height: 20px;
  font-weight: 400;
  margin: 0px 5px;
  font-family: Muli, sans-serif;
`,StyledDateText=Object(theme.b)("span").withConfig({displayName:"StyledDateText"})`
  font-weight: 400;
  margin-left: 5px;
  display: inline-block;
  color: #838391;
  font-family: Muli, sans-serif;
`,StyledButtonWrapper=Object(theme.b)("div").withConfig({displayName:"StyledButtonWrapper"})`
  margin: 12px 0 15px;
  display: flex;
  justify-content: center;
`,StyledButton=Object(theme.b)(buttonsIndicators_button.a).withConfig({displayName:"StyledButton"})`
  padding-left: 27px;
  padding-right: 27px;
`,StyledPipe=Object(theme.b)("span").withConfig({displayName:"StyledPipe"})`
  font-weight: 300;
`;var helpers=__webpack_require__(3),grantWrapper=__webpack_require__(164),grantError=__webpack_require__(497),grantCaptcha=__webpack_require__(308),grantComplete=__webpack_require__(204),rewards_alert=__webpack_require__(310),close_circle_o=__webpack_require__(191),settings_advanced=__webpack_require__(252),icons=__webpack_require__(9),fc_logo_uphold=__webpack_require__(259),logo_uphold=__webpack_require__(412),gift=__webpack_require__(471),gift_default=__webpack_require__.n(gift),love=__webpack_require__(470),love_default=__webpack_require__.n(love),megaphone=__webpack_require__(306),megaphone_default=__webpack_require__.n(megaphone);__webpack_require__.d(__webpack_exports__,"a",function(){return walletWrapper_WalletWrapper});class walletWrapper_WalletWrapper extends react.PureComponent{constructor(props){super(props),this.onNotificationClick=(()=>{this.props.onNotificationClick&&this.props.onNotificationClick()}),this.onGrantHide=(()=>{this.props.onGrantHide&&this.props.onGrantHide()}),this.onFinish=(()=>{this.props.onFinish&&this.props.onFinish()}),this.onSolution=((x,y)=>{this.props.onSolution&&this.props.onSolution(x,y)}),this.grantCaptcha=(()=>{const{grant:grant}=this.props,status=grant&&grant.status;if(grant&&grant.promotionId){if("grantGone"===status)return react.createElement(grantWrapper.a,{onClose:this.onFinish,title:Object(helpers.a)("grantGoneTitle"),text:""},react.createElement(grantError.a,{buttonText:Object(helpers.a)("grantGoneButton"),text:Object(helpers.a)("grantGoneText"),onButtonClick:this.onFinish}));if("grantAlreadyClaimed"===status)return react.createElement(grantWrapper.a,{onClose:this.onFinish,title:Object(helpers.a)("grantGoneTitle"),text:""},react.createElement(grantError.a,{buttonText:Object(helpers.a)("grantGoneButton"),text:Object(helpers.a)("grantAlreadyClaimedText"),onButtonClick:this.onFinish}));if("generalError"===status)return react.createElement(grantWrapper.a,{onClose:this.onGrantHide,title:Object(helpers.a)("grantGeneralErrorTitle"),text:""},react.createElement(grantError.a,{buttonText:Object(helpers.a)("grantGeneralErrorButton"),text:Object(helpers.a)("grantGeneralErrorText"),onButtonClick:this.onGrantHide}));if(grant.captcha&&grant.hint)return react.createElement(grantWrapper.a,{isPanel:!0,onClose:this.onGrantHide,title:"wrongPosition"===status?Object(helpers.a)("captchaMissedTarget"):Object(helpers.a)("captchaProveHuman"),text:Object(helpers.a)("proveHuman"),hint:grant.hint},react.createElement(grantCaptcha.a,{isPanel:!0,onSolution:this.onSolution,dropBgImage:grant.captcha,hint:grant.hint,isWindows:"Win32"===window.navigator.platform}))}}),this.getNotificationButton=((type,onClose)=>{let buttonText="OK",buttonAction=onClose;switch(type){case"grant":buttonText=Object(helpers.a)("claim"),buttonAction=this.onNotificationClick;break;case"ads-launch":buttonText=Object(helpers.a)("turnOnAds"),buttonAction=this.onNotificationClick;break;case"backupWallet":buttonText=Object(helpers.a)("backupNow"),buttonAction=this.onNotificationClick;break;case"insufficientFunds":buttonText=Object(helpers.a)("addFunds"),buttonAction=this.onNotificationClick;break;default:buttonText=Object(helpers.a)("ok").toUpperCase()}return react.createElement(StyledButton,{size:"small",type:"accent",level:"primary",onClick:buttonAction,text:buttonText})}),this.generateNotification=(notification=>{if(!notification)return null;const onClose=notification.onCloseNotification.bind(this,notification.id);return react.createElement(react.Fragment,null,react.createElement(StyledNotificationCloseIcon,{"data-test-id":"notification-close",onClick:onClose},react.createElement(close_circle_o.a,null)),react.createElement(StyledNotificationContent,null,this.getNotificationIcon(notification),this.getNotificationMessage(notification),react.createElement(StyledButtonWrapper,null,this.getNotificationButton(notification.type,onClose))))}),this.toggleGrantDetails=(()=>{this.setState({grantDetails:!this.state.grantDetails})}),this.hasGrants=(grants=>grants&&grants.length>0),this.getNotificationIcon=(notification=>{let icon;switch(notification.type){case"ads":case"ads-launch":case"backupWallet":icon=megaphone_default.a;break;case"contribute":case"tipsProcessed":case"pendingContribution":icon=love_default.a;break;case"grant":icon=gift_default.a;break;case"insufficientFunds":icon=megaphone_default.a;break;default:icon=""}return icon?react.createElement(StyledNotificationIcon,{src:icon}):null}),this.getNotificationMessage=(notification=>{let typeText;switch(notification.type){case"ads":typeText=Object(helpers.a)("braveAdsTitle");break;case"ads-launch":typeText=Object(helpers.a)("braveAdsLaunchTitle");break;case"backupWallet":typeText=Object(helpers.a)("backupWalletTitle");break;case"contribute":typeText=Object(helpers.a)("braveContributeTitle");break;case"grant":typeText=Object(helpers.a)("tokenGrant");break;case"insufficientFunds":typeText=Object(helpers.a)("insufficientFunds");break;case"tipsProcessed":typeText=Object(helpers.a)("contributionTips");break;case"pendingContribution":typeText=Object(helpers.a)("pendingContributionTitle");break;default:typeText=""}return react.createElement(StyledNotificationMessage,null,react.createElement(StyledTypeText,null,typeText)," ",react.createElement(StyledPipe,null,"|"),react.createElement(StyledMessageText,null,notification.text),notification.date?react.createElement(StyledDateText,null,notification.date):null)}),this.state={grantDetails:!1}}generateActions(actions,id){return actions&&actions.map((action,i)=>react.createElement(StyledAction,{key:`${id}-${i}`,onClick:action.action,"data-test-id":action.testId},react.createElement(StyledActionIcon,null,action.icon),react.createElement(StyledActionText,null,action.name)))}render(){const{id:id,children:children,balance:balance,converted:converted,actions:actions,showCopy:showCopy,connectedWallet:connectedWallet,compact:compact,contentPadding:contentPadding,showSecActions:showSecActions,grants:grants,grant:grant,onSettingsClick:onSettingsClick,alert:alert,gradientTop:gradientTop,notification:notification,isMobile:isMobile,convertProbiToFixed:convertProbiToFixed}=this.props,hasGrants=this.hasGrants(grants);let tokens="0.0";grant&&grant.probi&&convertProbiToFixed&&(tokens=convertProbiToFixed(grant.probi,1));let date="";return grant&&0!==grant.expiryTime&&(date=new Date(grant.expiryTime).toLocaleDateString()),react.createElement(react.Fragment,null,react.createElement(StyledWrapper,{id:id,compact:compact,isMobile:isMobile,notification:notification},grant&&!grant.probi?this.grantCaptcha():null,grant&&grant.probi?react.createElement(grantWrapper.a,{isPanel:!0,onClose:this.onFinish,title:grant.finishTitle||"",text:grant.finishText},react.createElement(grantComplete.a,{isMobile:!0,onClose:this.onFinish,amount:tokens,date:date,tokenTitle:grant.finishTokenTitle})):null,react.createElement(StyledHeader,null,notification?this.generateNotification(notification):react.createElement(react.Fragment,null,alert&&alert.node?react.createElement(StyledAlertWrapper,null,alert.onAlertClose?react.createElement(StyledAlertClose,{onClick:alert.onAlertClose},react.createElement(close_circle_o.a,null)):null,react.createElement(rewards_alert.a,{type:alert.type,bg:!0},alert.node)):null,react.createElement(StyledTitle,null,Object(helpers.a)("yourWallet")),showSecActions?react.createElement(StyledIconAction,{onClick:onSettingsClick,"data-test-id":"settingsButton"},react.createElement(settings_advanced.a,null)):null,react.createElement(StyledBalance,null,react.createElement(StyledBalanceTokens,{"data-test-id":"balance"},balance," ",react.createElement(StyledBalanceCurrency,null,"BAT")),converted?react.createElement(StyledBalanceConverted,null,converted):null,hasGrants?react.createElement(StyleGrantButton,null,react.createElement(buttonsIndicators_button.a,{text:Object(helpers.a)("grants"),size:"small",type:"subtle",level:"secondary",onClick:this.toggleGrantDetails,icon:{position:"after",image:this.state.grantDetails?react.createElement(icons.CaratUpIcon,null):react.createElement(icons.CaratDownIcon,null)}})):null),this.state.grantDetails&&hasGrants?react.createElement(StyledGrantWrapper,null,grants&&grants.map((grant,i)=>react.createElement(StyledGrant,{key:`${id}-grant-${i}`},react.createElement("b",null,grant.tokens," BAT"),"ads"===grant.type?react.createElement("span",null,Object(helpers.a)("adsEarnings")):react.createElement("span",null,Object(helpers.a)("expiresOn")," ",grant.expireDate)))):null,react.createElement(StyledActionWrapper,null,this.generateActions(actions,id))),react.createElement(StyledCurve,{background:gradientTop})),react.createElement(StyledContent,{contentPadding:contentPadding},children),showCopy?react.createElement(StyledCopy,{connected:connectedWallet},connectedWallet?react.createElement(react.Fragment,null,react.createElement(StyledCopyImage,null,react.createElement(fc_logo_uphold.a,null)),Object(helpers.a)("rewardsPanelText1")," ",react.createElement("b",null,"Uphold"),"."):react.createElement(react.Fragment,null,react.createElement(StyledCopyImage,null,react.createElement(logo_uphold.a,null)),Object(helpers.a)("rewardsPanelText2")," ",react.createElement("b",null,"Uphold"),".")):null),showCopy?react.createElement(StyledBAT,null,Object(helpers.a)("rewardsPanelText3")," ",react.createElement("a",{href:"https://basicattentiontoken.org/",target:"_blank"},Object(helpers.a)("rewardsPanelText4"))):null)}}},,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/eich.404c9632.jpg"},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3zm0 24a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.72 11.57l-7.57 7.63-3.9-3.91a1 1 0 1 0-1.42 1.42l4.62 4.61a1 1 0 0 0 .7.3 1 1 0 0 0 .7-.3L23.14 13a1 1 0 0 0 0-1.42 1 1 0 0 0-1.42-.01z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3zm0 24a11 11 0 1 1 11-11 11 11 0 0 1-11 11z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M20.71 11.29a1 1 0 0 0-1.42 0L16 14.59l-3.29-3.3a1 1 0 0 0-1.42 1.42l3.3 3.29-3.3 3.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3.29-3.3 3.29 3.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L17.41 16l3.3-3.29a1 1 0 0 0 0-1.42z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M28.71 27.29L17.41 16l11.3-11.29a1 1 0 1 0-1.42-1.42L16 14.59 4.71 3.29a1 1 0 0 0-1.42 1.42L14.59 16 3.29 27.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 17.41l11.29 11.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M4 8h5.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2H14.82a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2zm8-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM28 15h-3.18a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2h15.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2zm-6 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1zM28 24H14.82a3 3 0 0 0-5.64 0H4a1 1 0 0 0 0 2h5.18a3 3 0 0 0 5.64 0H28a1 1 0 0 0 0-2zm-16 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(125),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(164),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(308),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(204);const captchaDrop=__webpack_require__(246);__webpack_exports__.default=class Grant extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.onGrantShow=(()=>{this.setState({grantStep:"captcha"})}),this.onGrantHide=(()=>{this.setState({grantStep:""})}),this.onSolution=(()=>{this.setState({grantStep:"complete"})}),this.onComplete=(()=>{this.setState({grantStep:"",grantShow:!1})}),this.state={grantShow:!0,grantStep:""}}render(){const{type:type,amount:amount}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,this.state.grantShow?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{type:type,amount:amount,onClaim:this.onGrantShow}):null,"captcha"===this.state.grantStep?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{onClose:this.onGrantHide,title:"Almost there…",text:"Prove that you are human!"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{onSolution:this.onSolution,dropBgImage:captchaDrop,hint:"blue"})):null,"complete"===this.state.grantStep?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{onClose:this.onGrantHide,title:"It’s your lucky day!",text:"Your token grant is on its way."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{onClose:this.onComplete,amount:"30.0",date:"8/15/2018",tokenTitle:"Free token grant"})):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(125),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(164),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(204);__webpack_exports__.default=class GrantMobile extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.onGrantHide=(()=>{this.setState({grantStep:""})}),this.onClaim=(()=>{this.setState({loading:!0}),setTimeout(()=>{this.setState({grantStep:"complete"})},2e3)}),this.onComplete=(()=>{this.setState({grantStep:"",grantShow:!1,loading:!1})}),this.state={grantShow:!0,grantStep:"",loading:!1}}render(){const{type:type,amount:amount}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,this.state.grantShow?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{isMobile:!0,type:type,amount:amount,onClaim:this.onClaim,loading:this.state.loading}):null,"complete"===this.state.grantStep?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{fullScreen:!0,onClose:this.onGrantHide,title:"It’s your lucky day!",text:"Your token grant is on its way."},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{isMobile:!0,onClose:this.onComplete,amount:"30.0",date:"8/15/2018",tokenTitle:"Free token grant"})):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return NoScriptList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34);class NoScriptList extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(){super(...arguments),this.getBlockScriptText=((haveUserInteracted,shouldBlock)=>Object(_helpers__WEBPACK_IMPORTED_MODULE_3__.e)(haveUserInteracted,shouldBlock)),this.getSingleScriptRow=((url,scriptData,key,shouldBlock)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.n,{key:key},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,Object(_helpers__WEBPACK_IMPORTED_MODULE_3__.h)(url)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.i,{disabled:scriptData.userInteracted,onClick:this.setBlockState.bind(this,url,shouldBlock)},this.getBlockScriptText(scriptData.userInteracted,shouldBlock)))),this.getGroupedOrDetachedScriptsLoop=((nestedScriptInfo,shouldBlock)=>nestedScriptInfo.map((nestedScript,nestedKey)=>{const nestedScriptInfoUrl=nestedScript[0],nestedScriptInfoUrlData=nestedScript[1];return nestedScriptInfoUrlData.willBlock!==shouldBlock?null:this.getSingleScriptRow(nestedScriptInfoUrl,nestedScriptInfoUrlData,nestedKey,shouldBlock)})),this.getGroupedScriptsRow=((script,key,shouldBlock)=>{const urlWithNestedScriptInfo=Object(_helpers__WEBPACK_IMPORTED_MODULE_3__.f)(script[0]),nestedScriptInfo=script[1],hasNestedScriptInfo=Object(_helpers__WEBPACK_IMPORTED_MODULE_3__.b)(nestedScriptInfo,shouldBlock).length>=2,everyItemIsBlockedOrAllowed=Object(_helpers__WEBPACK_IMPORTED_MODULE_3__.a)(nestedScriptInfo,shouldBlock);return hasNestedScriptInfo?react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",{key:key},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.k,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.m,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,urlWithNestedScriptInfo),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.i,{disabled:everyItemIsBlockedOrAllowed,onClick:this.setBlockStateGroup.bind(this,urlWithNestedScriptInfo,shouldBlock)},this.getBlockScriptText(everyItemIsBlockedOrAllowed,shouldBlock))),this.getGroupedOrDetachedScriptsLoop(nestedScriptInfo,shouldBlock))):this.getGroupedOrDetachedScriptsLoop(nestedScriptInfo,shouldBlock)})}get noScriptInfo(){return this.props.noScriptInfo}get shouldBlock(){return this.props.shouldBlock}setBlockState(url,maybeBlock){}setBlockStateGroup(hostname,maybeBlock){}render(){return this.noScriptInfo.map((script,key)=>{const scriptData=script[1],url=scriptData[0][0],scriptInfo=scriptData[0][1];return scriptData.length>1?this.getGroupedScriptsRow(script,key,this.shouldBlock):scriptInfo.willBlock===this.shouldBlock&&this.getSingleScriptRow(url,scriptInfo,key,this.shouldBlock)})}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_disabledContent__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(285),_enabledContent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(286);__webpack_exports__.default=class SyncPage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){return this.props.disabled?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_disabledContent__WEBPACK_IMPORTED_MODULE_1__.default,null):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_enabledContent__WEBPACK_IMPORTED_MODULE_2__.default,null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const colors={deposit:"#9f22a1",tipOnLike:"#696fdc",donation:"#696fdc",contribute:"#9752cb",recurringDonation:"#696fdc"},StyledTHLast=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTHLast"})`
  text-align: right;
  padding-right: 14px;
`,StyledProvider=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledProvider"})`
  color: #9e9fab;
`,StyledType=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledType"})`
  ${p=>{const color=colors[p.type];return styled_components_browser_esm.css`
    --tableTransactions-type-color: ${color};
  `}};
  color: var(--tableTransactions-type-color);
`;var table=__webpack_require__(53),helpers=__webpack_require__(3),tokens=__webpack_require__(22);__webpack_require__.d(__webpack_exports__,"a",function(){return tableTransactions_TableTransactions});class tableTransactions_TableTransactions extends react.PureComponent{constructor(){super(...arguments),this.tokenColors={deposit:"earnings",tipOnLike:"donation",donation:"donation",contribute:"contribute",recurringDonation:"donation"},this.getHeader=(()=>{const header=[Object(helpers.a)("date"),Object(helpers.a)("type"),Object(helpers.a)("description"),Object(helpers.a)("amount")];return header.map((item,i)=>({content:i===header.length-1?react.createElement(StyledTHLast,null,item):item}))}),this.getDescription=(desc=>"string"==typeof desc?desc:react.createElement(react.Fragment,null,react.createElement("span",null,desc.publisher)," ",react.createElement(StyledProvider,null,Object(helpers.a)("on")," ",desc.platform))),this.getRows=(rows=>{if(rows)return rows.map(row=>{return{content:[{content:row.date},{content:react.createElement(StyledType,{type:row.type},Object(helpers.a)(row.type))},{content:this.getDescription(row.description)},{content:react.createElement(tokens.a,{value:row.amount.value,isNegative:row.amount.isNegative,converted:row.amount.converted,color:this.tokenColors[row.type],size:"small"}),customStyle:{"text-align":"right","padding-right":"14px"}}]}})})}render(){const{id:id,children:children,rows:rows}=this.props;return react.createElement("div",{id:id},react.createElement(table.a,{header:this.getHeader(),children:children,rows:this.getRows(rows)}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),colors=__webpack_require__(6);const StyledRemove=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledRemove"})`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: center;
  width: 100%;
`,StyledRemoveIcon=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledRemoveIcon"})`
  vertical-align: middle;
  color: ${colors.a.grey400};
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-right: 4px;
`,StyledLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledLink"})`
  text-decoration: none;
`;var table=__webpack_require__(53),profile=__webpack_require__(68),tokens=__webpack_require__(22),helpers=__webpack_require__(3),trash_o=__webpack_require__(409);__webpack_require__.d(__webpack_exports__,"a",function(){return tablePending_TableDonation});class tablePending_TableDonation extends react.PureComponent{getRows(rows){if(rows)return rows.map(row=>({content:[{content:react.createElement(StyledLink,{href:row.url,target:"_blank"},react.createElement(profile.a,{title:row.profile.name,provider:row.profile.provider,verified:row.profile.verified,src:row.profile.src}))},{content:react.createElement(react.Fragment,null,Object(helpers.a)(`pendingType${row.type}`))},{content:react.createElement(react.Fragment,null,row.date)},{content:react.createElement(tokens.a,{value:row.amount.tokens,converted:row.amount.converted,size:"small"}),customStyle:{"text-align":"right",padding:"0 7px 0 10px","max-width":"130px"}},{content:react.createElement(StyledRemove,{onClick:row.onRemove},react.createElement(StyledRemoveIcon,null,react.createElement(trash_o.a,null)))}]}))}get headers(){const customStyle={border:"none","border-bottom":"1px solid #696FDC",padding:"0",color:"#696FDC"};return[{content:Object(helpers.a)("site"),customStyle:customStyle},{content:Object(helpers.a)("type"),customStyle:customStyle},{content:Object(helpers.a)("pendingUntil"),customStyle:customStyle},{content:Object(helpers.a)("amount"),customStyle:Object.assign({},customStyle,{"text-align":"right"})},{content:Object(helpers.a)("remove"),customStyle:Object.assign({},customStyle,{"text-align":"center",padding:"0 10px"})}]}render(){const{id:id,children:children,rows:rows}=this.props;return react.createElement("div",{id:id},react.createElement(table.a,{children:children,rows:this.getRows(rows),header:this.headers}))}}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  text-align: center;
  width: 100%;
  margin: 40px 0 0;
`,StyledBox=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledBox"})`
  border-radius: 6px;
  background-color: #f1f1f5;
  padding: 5px 10px 20px;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 14px;
  font-weight: 300;
  line-height: 1.57;
  color: #838391;
  margin: 11px 0 5px;
`,StyledValue=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledValue"})`
  font-size: 18px;
  line-height: 1.22;
  text-align: center;
  color: #c12d7c;
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #838391;
  margin: 44px 0 0;
`,StyledButtonWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledButtonWrapper"})`
  margin-top: ${p=>p.isMobile?40:32}px;
`;var helpers=__webpack_require__(3),buttonsIndicators_button=__webpack_require__(12);__webpack_require__.d(__webpack_exports__,"a",function(){return grantComplete_GrantComplete});class grantComplete_GrantComplete extends react.PureComponent{render(){const{id:id,testId:testId,onClose:onClose,amount:amount,date:date,isMobile:isMobile,tokenTitle:tokenTitle}=this.props;return react.createElement(StyledWrapper,{id:id,"data-test-id":testId},react.createElement(StyledBox,null,react.createElement(StyledTitle,null,tokenTitle),react.createElement(StyledValue,null,amount," BAT"),date&&date.length>0?react.createElement(react.Fragment,null,react.createElement(StyledTitle,null,Object(helpers.a)("grantExpire")),react.createElement(StyledValue,null,date)):null),!isMobile&&date&&date.length>0?react.createElement(StyledText,null,Object(helpers.a)("grantDisclaimer")):null,react.createElement(StyledButtonWrapper,{isMobile:isMobile},react.createElement(buttonsIndicators_button.a,{text:Object(helpers.a)("ok"),size:"call-to-action",type:"accent",onClick:onClose,id:"grant-completed-ok"})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1),card=__webpack_require__(83);const colors={ads:"#C12D7C",contribute:"#9F22A1",donation:"#696FDC"},StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  margin: 0 0 24px;
`,StyledCard=Object(theme.b)(props=>react.createElement(card.a,Object.assign({emphasis:"60"},props))).withConfig({displayName:"StyledCard"})`
  font-size: 14px;
`,StyledFlip=Object(theme.b)("div").withConfig({displayName:"StyledFlip"})`
  display: flex;
  align-items: center;
  justify-content: center;
`,StyledContentWrapper=Object(theme.b)("div").withConfig({displayName:"StyledContentWrapper"})`
  display: ${p=>p.open?"flex":"none"};
  flex-direction: column;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  display: flex;
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 20px;
  font-weight: 600;
  color: ${p=>p.type&&colors[p.type]||"#4b4c5c"};
`,StyledDescription=Object(theme.b)("div").withConfig({displayName:"StyledDescription"})`
  width: 100%;
  font-size: 15px;
  color: ${p=>p.theme.color.text};
  padding: 12px 0 0;
  line-height: 1.7;
`,StyledSettingsIcon=Object(theme.b)("button").withConfig({displayName:"StyledSettingsIcon"})`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #A1A8F2;
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  flex-basis: 100%;
  flex-grow: 1;
  margin-top: 25px;
`,StyledSettingsWrapper=Object(theme.b)("div").withConfig({displayName:"StyledSettingsWrapper"})`
  background: #fff;
  display: ${p=>p.open?"block":"none"};
  width: 100%;
`,StyledSettingsClose=Object(theme.b)("button").withConfig({displayName:"StyledSettingsClose"})`
  display: ${p=>p.open?"block":"none"};
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${p=>p.theme.palette.grey600};
`,StyledSettingTitleWrapper=Object(theme.b)("div").withConfig({displayName:"StyledSettingTitleWrapper"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`,StyledSettingsTitle=Object(theme.b)("div").withConfig({displayName:"StyledSettingsTitle"})`
  display: flex;
  margin: 0 0 24px;
`,StyledSettingsToggleContainer=Object(theme.b)("div").withConfig({displayName:"StyledSettingsToggleContainer"})`
  display: flex;
  align-items: center;
`,StyledSettingsText=Object(theme.b)("div").withConfig({displayName:"StyledSettingsText"})`
  font-size: 20px;
  font-weight: 600;
  font-family: ${p=>p.theme.fontFamily.heading};
  color: ${p=>p.theme.color.text};
  display: flex;
  align-items: center;
`;var tooltip=__webpack_require__(318),formControls_toggle=__webpack_require__(64),helpers=__webpack_require__(3),settings=__webpack_require__(193),close_circle_o=__webpack_require__(191);__webpack_require__.d(__webpack_exports__,"a",function(){return box_Box});class box_Box extends react.PureComponent{constructor(){super(...arguments),this.getSettingsTitle=(title=>`${title} ${Object(helpers.a)("settings")}`)}render(){const{id:id,title:title,toggle:toggle,checked:checked,attachedAlert:attachedAlert,onToggle:onToggle,settingsChild:settingsChild,disabledContent:disabledContent,description:description,type:type,children:children,testId:testId,settingsOpened:settingsOpened,onSettingsClick:onSettingsClick}=this.props;return react.createElement(StyledWrapper,null,react.createElement(StyledCard,{testId:id},react.createElement(StyledFlip,null,react.createElement(StyledContentWrapper,{open:!settingsOpened},react.createElement(StyledSettingTitleWrapper,null,react.createElement(StyledTitle,{type:type,checked:checked},title),react.createElement(StyledSettingsToggleContainer,null,settingsChild&&(toggle&&checked||!toggle)?react.createElement(tooltip.a,{id:"brave-ads-tip",content:this.getSettingsTitle(title)},react.createElement(StyledSettingsIcon,{onClick:onSettingsClick},react.createElement(settings.a,null))):null,toggle?react.createElement(formControls_toggle.a,{onToggle:onToggle,checked:checked,testId:testId}):null)),react.createElement(StyledDescription,null,description),react.createElement(StyledContent,null,disabledContent||children)),react.createElement(StyledSettingsWrapper,{open:settingsOpened},react.createElement(StyledSettingsClose,{onClick:onSettingsClick,open:settingsOpened},react.createElement(close_circle_o.a,null)),react.createElement(StyledSettingsTitle,null,react.createElement(StyledSettingsText,null,this.getSettingsTitle(title))),settingsChild))),attachedAlert)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/captchaDrop.d1038f44.png"},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M26.147 23.296A9.961 9.961 0 0 0 26.203 27H27a1 1 0 0 1 0 2H8.056C5.819 29 4 27.215 4 25V6.153C4 4.392 5.509 3 7.334 3h17.842C26.178 3 27 3.8 27 4.803V21a1 1 0 0 1 0 2h-.28a.998.998 0 0 1-.573.296zM24.17 23H8.056C6.915 23 6 23.898 6 25c0 1.102.915 2 2.056 2h16.112a11.954 11.954 0 0 1 0-4zM6 21.55A4.083 4.083 0 0 1 8.056 21H25V5h-4v9a1 1 0 0 1-1.634.773L16 12.012l-3.366 2.761A1 1 0 0 1 11 14V5H7.334C6.579 5 6 5.534 6 6.152v15.399zM13 5v6.886l2.366-1.94a1 1 0 0 1 1.268 0L19 11.885V5h-6z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.87 27.855c.178.133.211.14.14.179-.046.025-.01-.058-.01-.329V5.245C24 4.55 23.481 4 22.882 4H9.118C8.519 4 8 4.55 8 5.246v22.459c0 .183.017.28.013.317-.047-.051.008-.085.118-.167l5.54-4.147c1.307-.98 3.352-.98 4.659 0l5.54 4.147zm-6.74-2.546c-.595-.448-1.664-.448-2.26 0l-5.54 4.146C7.702 30.676 6 29.741 6 27.705V5.245C6 3.472 7.388 2 9.118 2h13.764C24.612 2 26 3.471 26 5.246v22.459c0 2.036-1.7 2.971-3.33 1.75l-5.54-4.146z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 7.2a1 1 0 0 0-1 1v6.945c-.595.347-1 .984-1 1.722A2 2 0 1 0 17.645 18H21.2a1 1 0 0 0 0-2h-3.406a2 2 0 0 0-.794-.855V8.2a1 1 0 0 0-1-1M30 16c0 7.72-6.28 14-14 14S2 23.72 2 16a1 1 0 0 1 2 0c0 6.617 5.383 12 12 12s12-5.383 12-12S22.617 4 16 4c-4.393 0-7.781 2.085-9.855 6h2.922a1 1 0 0 1 0 2h-5.2a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v3.18C7.327 4.185 11.224 2 16 2c7.72 0 14 6.28 14 14"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M27 16.77a1 1 0 0 0-1 1V25a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7.23a1 1 0 0 0 0-2H7a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-7.23a1 1 0 0 0-1-1z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M27 4h-6.42a1 1 0 0 0 0 2h4l-10.2 10.21a1 1 0 0 0 0 1.41 1 1 0 0 0 .7.3 1 1 0 0 0 .71-.3L26 7.41v4a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19.897 3l-.703.958-5.015 6.836c-2.687-.468-5.53.291-7.602 2.363l-.734.703 5.43 5.43L3 27.563V29h1.437l8.273-8.273 5.43 5.43.703-.734c2.072-2.073 2.83-4.915 2.363-7.602l6.836-5.015.958-.703L19.897 3z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 11a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M28.13 13.41l-2.55-.33a9.8 9.8 0 0 0-.76-1.83l1.54-2.06a1 1 0 0 0-.09-1.31l-2.22-2.2a1 1 0 0 0-1.31-.09l-2.07 1.58a10.72 10.72 0 0 0-1.76-.73l-.32-2.56a1 1 0 0 0-1-.88H14.4a1 1 0 0 0-1 .87l-.34 2.57a10 10 0 0 0-1.82.76L9.2 5.64a1 1 0 0 0-1.32.09L5.68 8a1 1 0 0 0-.08 1.27l1.56 2a10 10 0 0 0-.76 1.82l-2.53.32a1 1 0 0 0-.87 1v3.2a1 1 0 0 0 .88 1l2.5.31a10.19 10.19 0 0 0 .76 1.84l-1.51 2.06a1 1 0 0 0 .1 1.3L8 26.32a1 1 0 0 0 1.31.09l2-1.54a9.8 9.8 0 0 0 1.78.73l.33 2.53a1 1 0 0 0 1 .87h3.2a1 1 0 0 0 1-.87l.34-2.54a10.16 10.16 0 0 0 1.81-.75l2.08 1.53a1 1 0 0 0 1.3-.1l2.2-2.22a1 1 0 0 0 .09-1.31l-1.55-2a9.93 9.93 0 0 0 .74-1.79l2.53-.33a1 1 0 0 0 .87-1V14.4a1 1 0 0 0-.9-.99zM27 16.72l-2.33.28a1 1 0 0 0-.84.77 8 8 0 0 1-1 2.45 1 1 0 0 0 .06 1.14l1.42 1.87-1 1-1.92-1.41a1 1 0 0 0-1.12 0 7.89 7.89 0 0 1-2.47 1 1 1 0 0 0-.77.84L16.72 27h-1.44L15 24.68a1 1 0 0 0-.77-.85 7.61 7.61 0 0 1-2.45-1 1 1 0 0 0-1.13.06l-1.9 1.4-1-1 1.39-1.91a1 1 0 0 0 0-1.12 8.06 8.06 0 0 1-1-2.49A1 1 0 0 0 7.3 17L5 16.72v-1.44L7.32 15a1 1 0 0 0 .84-.77 8.15 8.15 0 0 1 1.05-2.49 1 1 0 0 0-.05-1.16L7.72 8.74l1-1 1.85 1.46a1 1 0 0 0 1.14.05 7.89 7.89 0 0 1 2.49-1 1 1 0 0 0 .8-.88L15.28 5h1.43L17 7.36a1 1 0 0 0 .78.85 7.86 7.86 0 0 1 2.44 1 1 1 0 0 0 1.13-.05l1.91-1.45 1 1-1.42 1.89a1 1 0 0 0-.05 1.14 8 8 0 0 1 1.05 2.49 1 1 0 0 0 .84.76l2.34.31z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M26 6.2h-2.47c-4.8 0-6.59-2.63-6.66-2.74a1.1 1.1 0 0 0-1.74 0c-.07.11-1.86 2.74-6.68 2.74H6a1 1 0 0 0-1 1v5.59c0 .13 0 12.43 10.67 16.15a.94.94 0 0 0 .66 0C27 25.22 27 12.92 27 12.8V7.2a1 1 0 0 0-1-1zm-9.29 15.31a1 1 0 1 1 .29-.71 1.05 1.05 0 0 1-.29.71zM17 17a1 1 0 0 1-2 0v-6.2a1 1 0 0 1 2 0z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM22.41 19H24a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08 1 1 0 0 0-.54.54A1 1 0 0 0 19 18v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V14a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM28 19a1 1 0 0 0-1 1v2.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29H23a1 1 0 0 0 0 2h5a1 1 0 0 0 .38-.08 1 1 0 0 0 .54-.54A1 1 0 0 0 29 25v-5a1 1 0 0 0-1-1z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"16",cy:"16",r:"13",fill:"#ff3d00"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M27.7 16a11.7 11.7 0 1 0-15.14 11.18 5 5 0 0 0 1 .26c.13 0 .2.07.33.07s.52.06.78.13a.61.61 0 0 1 .32.06h1a6 6 0 0 0 1-.06h.26a4.8 4.8 0 0 0 .84-.13c.13 0 .26-.07.46-.07A11.72 11.72 0 0 0 27.7 16zm-9.82 10.21c-.32-.65-.65-1.24-.9-1.69-.79-1.63-1.63-3.84-1.24-5.27.07-.26.07-1.36.26-1.49 1.69-1.11 1.56-.07 2.27-.52a2.34 2.34 0 0 0 .79-1c.45-1.49-.59-4.16-1.76-5.33a3.1 3.1 0 0 0-1.63-.71 4 4 0 0 0-1.23-1A5.7 5.7 0 0 0 11 8.66h-.26c-.06 0-.13.06-.26.06.13 0 .65.26 1 .39-.19.13-.52.13-.71.26h-.07l-.06.07-.07.06a1.21 1.21 0 0 0-.13.33 9.34 9.34 0 0 1 3 .26 4.6 4.6 0 0 0-1.82.52 2.24 2.24 0 0 0-.84.71 4.6 4.6 0 0 0-.78 3.84c.33 1.75 1.56 7.41 2.21 10.59A10.45 10.45 0 0 1 16 5.6a10.39 10.39 0 0 1 1.88 20.61z",fill:"#fff"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.75 14.12a.78.78 0 1 0 .78.78.89.89 0 0 0-.78-.78zm.33.71c-.14 0-.2-.06-.2-.19a.18.18 0 0 1 .2-.2c.13 0 .19.07.19.2a.2.2 0 0 1-.19.19zm4.74-1a.65.65 0 1 0 .65.65.71.71 0 0 0-.65-.69zm.26.59a.21.21 0 0 1-.19-.2.2.2 0 0 1 .19-.19.19.19 0 0 1 .19.19c0 .09-.06.16-.19.16zm-5.14-1.7a1.29 1.29 0 0 0-1.1.07c-.59.32-.52.72-.52.72s-.33-.65.52-1a.88.88 0 0 1 1.1.19m5.27-.06a1.61 1.61 0 0 0-.72-.26c-.65 0-.84.32-.84.32a.78.78 0 0 1 1-.58 1.11 1.11 0 0 1 .59.52",fill:"#0277bd"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.54 23.61s-2.79-1.5-2.86-.92 0 3.06.33 3.25 2.66-1.23 2.66-1.23zm1.11-.07s1.88-1.43 2.34-1.36.52 3.05.13 3.18a9.73 9.73 0 0 1-2.53-.78z",fill:"#8bc34a"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15 23.61c0 1-.13 1.36.26 1.49a2.93 2.93 0 0 0 1.5-.19c.26-.2.06-1.43-.07-1.69s-1.69 0-1.69.39",fill:"#689f38"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M14.89 17.82A3 3 0 0 1 17 16.39a15.34 15.34 0 0 0 1.82-.2c.71-.19 2.53-.65 3.05-.84s2.67.13 1.17 1a21.21 21.21 0 0 1-3.7 1.44c-1.24.39-2-.39-2.47.26s-.07 1.16 1.43 1.3c2 .19 4-.91 4.22-.33s-1.75 1.3-3 1.37a12.06 12.06 0 0 1-4-1 1.86 1.86 0 0 1-.72-1.5",fill:"#ffca28"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"26px",height:"20.5px",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M6.5 23.5c-.7 0-1.4-.4-1.7-1C3.6 20.5 3 18.3 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13c0 1.1-.9 2-2 2s-2-.9-2-2c0-5-4-9-9-9s-9 4-9 9c0 1.6.4 3.1 1.2 4.5.6 1 .2 2.2-.7 2.7-.4.2-.7.3-1 .3z"}," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:".5s",repeatCount:"indefinite"})));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{id:"a",x1:"-51.395%",x2:"102%",y1:"-30.203%",y2:"101%"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"0%",stopColor:"#3023AE"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"100%",stopColor:"#C86DD7"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"none",fillRule:"evenodd"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"url(#a)",d:"M11.651 8.887c0-2.599 1.95-4.712 4.349-4.712 2.398 0 4.349 2.113 4.349 4.712v2.356H11.65V8.887zM23.7 11.333h-1.1V9c0-3.86-2.96-7-6.6-7-3.64 0-6.6 3.14-6.6 7v2.333H8.3c-1.82 0-3.3 1.57-3.3 3.5V26.5C5 28.43 6.48 30 8.3 30h15.4c1.82 0 3.3-1.57 3.3-3.5V14.833c0-1.93-1.48-3.5-3.3-3.5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#FFF",d:"M8.667 17.766v-1.388h5.644v1.388h-1.956v6.105h-1.742v-6.105H8.667zm6.095 5.337c-.57-.562-.856-1.302-.856-2.22 0-.918.285-1.653.856-2.204.57-.552 1.277-.828 2.12-.828.841 0 1.546.276 2.113.828.567.551.851 1.286.851 2.204 0 .918-.282 1.658-.846 2.22-.563.562-1.266.843-2.109.843-.842 0-1.552-.281-2.129-.843zm2.965-1.1c.23-.256.346-.626.346-1.11 0-.484-.119-.852-.356-1.104a1.123 1.123 0 0 0-.846-.38c-.326 0-.606.127-.84.38-.235.252-.352.62-.352 1.104 0 .484.12.854.362 1.11.24.257.524.385.85.385.326 0 .605-.128.836-.385zm4.71-4.088v1.11c.407-.782.95-1.174 1.63-1.174v1.858h-.428c-.401 0-.702.1-.902.298-.2.2-.3.548-.3 1.046v2.818h-1.743v-5.956h1.742z"})));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{id:"a",x1:"-378.78",y1:"583.86",x2:"-378.78",y2:"582.86",gradientTransform:"matrix(18 0 0 -22 6834 12848)",gradientUnits:"userSpaceOnUse"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"0",stopColor:"#78be06"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"1",stopColor:"#ff523c"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{id:"b",x1:"-372.29",y1:"587.63",x2:"-372.29",y2:"586.66",gradientTransform:"matrix(14 0 0 -19 5226 11171)",gradientUnits:"userSpaceOnUse"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"0",stopColor:"#fab406"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"1",stopColor:"#fa5235"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("linearGradient",{id:"c",x1:"-430.71",y1:"587.63",x2:"-430.71",y2:"586.66",gradientTransform:"matrix(-14 0 0 -19 -6012 11171)",gradientUnits:"userSpaceOnUse"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"0",stopColor:"#3d58d0"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop",{offset:"1",stopColor:"#78b81b"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M13.21 28.51a1 1 0 0 1 .67-1.89 6.1 6.1 0 0 0 4.24 0 1 1 0 0 1 .67 1.89 8.19 8.19 0 0 1-5.58 0z",fill:"#ff523c"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 25c-5 0-9-5-9-11s4-11 9-11 9 5 9 11-4 11-9 11zm0-2c3.81 0 7-4 7-9s-3.19-9-7-9-7 4-7 9 3.19 9 7 9z",fill:"url(#a)"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 25c-5 0-9-5-9-11 0-.25 0-.66.07-1.19a13.81 13.81 0 0 1 .47-2.58C8.27 7.66 9.69 6 12 6c4.74 0 9 5.14 9 11 0 5.13-2.2 8-5 8zm0-2c1.56 0 3-1.88 3-6 0-4.83-3.45-9-7-9-1.19 0-2 1-2.54 2.77a12.53 12.53 0 0 0-.4 2.23A9.51 9.51 0 0 0 9 14c0 5 3.19 9 7 9z",fill:"url(#b)"})," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 25c5 0 9-5 9-11 0-.25 0-.66-.07-1.19a13.81 13.81 0 0 0-.47-2.58C23.73 7.66 22.31 6 20 6c-4.74 0-9 5.14-9 11 0 5.13 2.2 8 5 8zm0-2c-1.56 0-3-1.88-3-6 0-4.83 3.45-9 7-9 1.19 0 2 1 2.54 2.77a12.53 12.53 0 0 1 .4 2.23 9.51 9.51 0 0 1 .06 1c0 5-3.19 9-7 9z",fill:"url(#c)"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return TopSitesList});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(159),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(160),_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(108),_topSite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(261);class TopSitesList extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onDragEnd=(result=>{if(!result.destination)return;const items=Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.c)(this.state.items,result.source.index,result.destination.index);this.setState({items:items})}),this.state={items:Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.a)()}}render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.a,{onDragEnd:this.onDragEnd},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.c,{droppableId:"droppable",direction:"horizontal"},provided=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},provided.droppableProps,{innerRef:provided.innerRef}),this.state.items.map((item,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_topSite__WEBPACK_IMPORTED_MODULE_4__.default,{item:item,index:index,key:index})),provided.placeholder)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return TopSite});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(159),_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(108),_src_components_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(251),_src_components_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(248),_src_components_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(192);class TopSite extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{item:item,index:index}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_1__.b,{key:item.id,draggableId:item.id,index:index},(provided,snapshot)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__.b,Object.assign({innerRef:provided.innerRef},provided.draggableProps,provided.dragHandleProps,{isDragging:snapshot.isDragging,style:Object.assign({},provided.draggableProps.style,{background:item.background})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_3__.a,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_4__.a,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_5__.a,null))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_2__.e,{src:item.favicon})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return FooterInfo});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(107),_src_components_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(193),_src_components_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(252),_src_components_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(247),_src_components_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(249),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(41);class FooterInfo extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{backgroundImageInfo:backgroundImageInfo,onClickSettings:onClickSettings,isSettingsMenuOpen:isSettingsMenuOpen,showPhotoInfo:showPhotoInfo}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,showPhotoInfo&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.g,null,`${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("photoBy")} `,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.d,{href:backgroundImageInfo.link,rel:"noopener",target:"_blank"},backgroundImageInfo.author))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.c,{onClick:onClickSettings,disabled:isSettingsMenuOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_2__.a,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_3__.a,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_4__.a,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_default__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_5__.a,null))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return QwantTab});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_fakeLocale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14);const privateWindowImg=__webpack_require__(431);class QwantTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.l,{src:privateWindowImg}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.headerLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.headerTorTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.headerTorText)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.m,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorLabel2),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorText)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.d,{href:"https://support.brave.com/hc/en-us/articles/360018121491",target:"_blank"},_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorButton)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return QwantTab});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_fakeLocale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14);const privateWindowImg=__webpack_require__(432);class QwantTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.l,{src:privateWindowImg}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.headerLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.headerTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.headerText)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.m,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorText2)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.d,{href:"https://support.brave.com/hc/en-us/articles/360017840332",target:"_blank"},_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.boxTorButton)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return TorTab});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(250),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(85),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14);const privateWindowImg=__webpack_require__(431);class TorTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.g,{src:privateWindowImg}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerTorTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerTorText)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.a,{style:{minHeight:"471px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.c,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgText2)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.d,{settings:!0,href:"https://support.brave.com/hc/en-us/articles/360018266171",target:"_blank"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.learnMore),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_1__.a,null)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.m,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorLabel2),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorText)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_3__.d,{href:"https://support.brave.com/hc/en-us/articles/360018121491",target:"_blank"},_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorButton)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return PrivateTab});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(126),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14);const privateWindowImg=__webpack_require__(432);class PrivateTab extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.g,{src:privateWindowImg}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerText," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.f,{href:"https://support.brave.com/hc/en-us/articles/360017840332",target:"_blank"},_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.headerButton))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.a,{style:{minHeight:"475px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.c,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgText)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_1__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxDdgButton),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.a,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.f,{href:"https://support.brave.com/hc/en-us/articles/360018266171",target:"_blank"},_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.learnMore))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.m,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.i,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorLabel),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.k,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorTitle),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.j,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorText2)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_newTab_private__WEBPACK_IMPORTED_MODULE_2__.d,{href:"https://support.brave.com/hc/en-us/articles/360018121491",target:"_blank"},_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.boxTorButton)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(499),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(317),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(205),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(24);__webpack_exports__.default=class AdsBox extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.adsAlertChild=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{type:"ads"}))}adsDisabled(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{type:"ads"},_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.adsDisabledTextOne," ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.adsDisabledTextTwo)}render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.adsTitle,type:"ads",description:_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.adsDesc,toggle:!1,attachedAlert:this.adsAlertChild(),disabledContent:this.adsDisabled()})}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(22),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(317),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(205),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(498),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(72),_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(82),_src_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(71),_src_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(39),_src_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(86),_src_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(106),_src_features_rewards_nextContribution__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(496),_fakeLocale__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(24);const favicon=__webpack_require__(65),buzz=__webpack_require__(147),ddgo=__webpack_require__(148),guardian=__webpack_require__(101),wiki=__webpack_require__(149),doNothing=()=>{console.log("nothing")};__webpack_exports__.default=class ContributeBox extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.contributeSettingsChild=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_7__.b,{columns:1,customStyle:{margin:"0 auto"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_7__.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{text:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionMonthly},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"10"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"10.0",converted:"4.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"20"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"20.0",converted:"6.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"40"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"40.0",converted:"12.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"100"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"100.0",converted:"40.00"})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{text:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionMinTime},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"5"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionTime5),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"8"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionTime8),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"60"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionTime60))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{text:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionMinVisits},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_9__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"5"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionVisit1),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"8"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionVisit5),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"60"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionVisit10))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{text:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionAllowed},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__.a,{value:{contributionNonVerified:!0,contributionVideos:!0},multiple:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"contributionNonVerified"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionNonVerified),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"contributionVideos"},_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionVideos))))))),this.onContributeToggle=(()=>{this.setState({contributeToggle:!this.state.contributeToggle})}),this.onContributeModalClose=(()=>{this.setState({modalContribute:!1})}),this.onContributeModalOpen=(()=>{this.setState({modalContribute:!0})}),this.onSettingsToggle=(()=>{this.setState({settings:!this.state.settings})}),this.state={contributeToggle:!0,modalContribute:!1,settings:!1}}get contributeRows(){return[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",attention:40,onRemove:doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:doNothing},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:doNothing},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:doNothing}]}contributeDisabled(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{type:"contribute"},"Pay directly for the content you love. ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),"Your ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"monthly allowance")," gets divided based on your attention metric.")}render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionTitle,type:"contribute",description:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionDesc,toggle:!0,checked:this.state.contributeToggle,settingsChild:this.contributeSettingsChild(),disabledContent:this.contributeDisabled(),onToggle:this.onContributeToggle,settingsOpened:this.state.settings,onSettingsClick:this.onSettingsToggle},this.state.modalContribute?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{onRestore:doNothing,excludedRows:this.contributeRows,rows:this.contributeRows,onClose:this.onContributeModalClose.bind(self)}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionMonthly},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_9__.a,{floating:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"10"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"10.0",converted:"4.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"20"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"20.0",converted:"6.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"40"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"40.0",converted:"12.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"100"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"100.0",converted:"40.00"})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionNextDate},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_nextContribution__WEBPACK_IMPORTED_MODULE_11__.a,null,"July 25th")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_12__.a.contributionSites},"Total  ",react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{value:"55",hideText:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{header:["Site","Attention"],rows:this.contributeRows,allSites:!1,numSites:55,showRemove:!0,numExcludedSites:100,onShowAll:this.onContributeModalOpen.bind(self),headerColor:!0},"Please visit some sites"))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(499),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(205),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(72),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(124),_src_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(71),_src_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(39),_src_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(106),_fakeLocale__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(24);const favicon=__webpack_require__(65),eich=__webpack_require__(186),guardian=__webpack_require__(101),doNothing=()=>{console.log("nothing")};__webpack_exports__.default=class DonationsBox extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.onChange=((key,selected,child,all)=>{this.setState({check:all})}),this.donationAlertChild=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_1__.a,{type:"tips",onReview:doNothing})),this.donationSettingsChild=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.b,{columns:1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_7__.a,{text:"Enable ability to give tips on ‘Like’ posts"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{value:this.state.check,multiple:!0,onChange:this.onChange},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"yt"},"YouTube"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"tw"},"Twitter"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"rd"},"Reddit"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"inst"},"Instagram"))))))),this.onSettingsToggle=(()=>{this.setState({settings:!this.state.settings})}),this.state={check:{yt:!0,tw:!1,inst:!1},settings:!1}}get donationRows(){return[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:doNothing},{profile:{verified:!1,name:"theguardian.com",src:guardian},url:"https://brave.com",type:"donation",contribute:{tokens:"12.0",converted:"6.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:eich},url:"https://brave.com",type:"tip",contribute:{tokens:"7.0",converted:"3.20"},text:"May 2"}]}render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_9__.a.donationTitle,type:"donation",description:_fakeLocale__WEBPACK_IMPORTED_MODULE_9__.a.donationDesc,attachedAlert:this.donationAlertChild(),settingsChild:this.donationSettingsChild(),settingsOpened:this.state.settings,onSettingsClick:this.onSettingsToggle},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_9__.a.donationTotal},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{value:"21.0",converted:"7.00"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{rows:this.donationRows,allItems:!0,headerColor:!0},"Please visit some sites"))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(165),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(314),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(319),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(500),_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(501),_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(502),_src_components_icons__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(105),_src_components_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(255);const favicon=__webpack_require__(65),buzz=__webpack_require__(147),ddgo=__webpack_require__(148),guardian=__webpack_require__(101),wiki=__webpack_require__(149),doNothing=()=>{console.log("nothing")};__webpack_exports__.default=class PageWallet extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.onBackupTabChange=(()=>{const newId=0===this.state.activeTabId?1:0;this.setState({activeTabId:newId})}),this.onBackupModalClose=(()=>{this.setState({modalBackup:!1})}),this.onBackupModalOpen=(()=>{this.setState({modalBackup:!0})}),this.onActivity=(()=>{this.setState({modalActivity:!0})}),this.onActivityClose=(()=>{this.setState({modalActivity:!1})}),this.state={activeTabId:0,modalBackup:!1,modalActivity:!1}}get activityContributions(){return[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",attention:40,onRemove:doNothing,token:{value:"5.0",converted:"5.00"}},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:doNothing,token:{value:"4.0",converted:"11.00"}},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:doNothing,token:{value:"3.0",converted:"15.00"}},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:doNothing,token:{value:"2.0",converted:"17.00"}},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:doNothing,token:{value:"1.0",converted:"11.00"}}]}get activityTransactions(){return[{date:"6/1",type:"deposit",description:"Brave Ads payment for May",amount:{value:"5.0",converted:"5.00"}},{date:"6/9",type:"tipOnLike",description:{publisher:"Jonathon Doe",platform:"YouTube"},amount:{isNegative:!0,value:"5.0",converted:"11.00"}},{date:"6/10",type:"deposit",description:"Token grant made available or unlocked",amount:{value:"10.0",converted:"15.00"}},{date:"6/12",type:"donation",description:"coinmarketcap.com",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/14",type:"tipOnLike",description:{publisher:"BrendanEich",platform:"Twitter"},amount:{isNegative:!0,value:"1.0",converted:"2.00"}},{date:"6/26",type:"deposit",description:"Added via Uphold",amount:{value:"10.0",converted:"15.00"}},{date:"6/31",type:"contribute",description:"Monthly payment",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/31",type:"recurringDonation",description:"Monthly payment",amount:{isNegative:!0,value:"5.0",converted:"15.00"}}]}render(){const content=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Content",{empty:"empty",summary:"summary",off:"off"},"empty");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{balance:"25.0",converted:"6.00 USD",actions:[{name:"Add funds",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_8__.a,null),testId:"panel-add-funds"},{name:"Withdraw Funds",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_9__.a,null)}],compact:!1,contentPadding:!1,onSettingsClick:this.onBackupModalOpen,onActivityClick:doNothing,showCopy:!0,showSecActions:!0,grants:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Claimed grants",[{tokens:"8.0",expireDate:"7/15/2018",type:"ugp"},{tokens:"10.0",expireDate:"9/10/2018",type:"ugp"},{tokens:"10.0",expireDate:"10/10/2018",type:"ads"}]),connectedWallet:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Connected wallet",!1)},"empty"===content?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,null):null,"summary"===content?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{report:{grant:{tokens:"10.0",converted:"0.25"},ads:{tokens:"10.0",converted:"0.25"},deposit:{tokens:"10.0",converted:"0.25"},contribute:{tokens:"10.0",converted:"0.25"},donation:{tokens:"2.0",converted:"0.25"},tips:{tokens:"19.0",converted:"5.25"}},onActivity:this.onActivity}):null,"off"===content?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,null):null),this.state.modalBackup?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{activeTabId:this.state.activeTabId,backupKey:"crouch  hint  glow  recall  round  angry  weasel  luggage save  hood  census  near  still   power  vague  balcony camp  law  now  certain  wagon  affair  butter  choice ",onTabChange:this.onBackupTabChange.bind(this),onClose:this.onBackupModalClose.bind(this),onCopy:doNothing,onPrint:doNothing,onSaveFile:doNothing,onRestore:doNothing}):null,this.state.modalActivity?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__.a,{contributeRows:this.activityContributions,transactionRows:this.activityTransactions,onClose:this.onActivityClose,onPrint:doNothing,onDownloadPDF:doNothing,onMonthChange:doNothing,months:{"jun-2018":"June 2018","may-2018":"May 2018","apr-2018":"April 2018"},currentMonth:"jun-2018",summary:[{text:"Token Grant available",type:"grant",token:{value:"10.0",converted:"5.20"}},{text:"Earnings from Brave Ads",type:"ads",token:{value:"10.0",converted:"5.20"}},{text:"Brave Contribute",type:"contribute",notPaid:!0,token:{value:"10.0",converted:"5.20",isNegative:!0}},{text:"Recurring Donations",type:"recurring",notPaid:!0,token:{value:"2.0",converted:"1.1",isNegative:!0}},{text:"One-time Donations/Tips",type:"donations",token:{value:"19.0",converted:"10.10",isNegative:!0}}],total:{value:"1.0",converted:"0.5"},paymentDay:12,openBalance:{value:"10.0",converted:"5.20"},closingBalance:{value:"11.0",converted:"5.30"}}):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21),_src_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(86),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(72),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(321),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17);__webpack_exports__.default=class AdsBoxMobile extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.onAdsToggle=(()=>{this.setState({adsToggle:!this.state.adsToggle})}),this.state={adsToggle:!0}}render(){const checked=this.props.rewardsEnabled&&this.state.adsToggle;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_5__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a.adsTitle,type:"ads",description:_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a.adsDesc,toggle:!0,checked:checked,toggleAction:this.onAdsToggle,settingsChild:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Ads Settings content")},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{title:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a.adsEarnings)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{value:"10.0",converted:"4.00"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{title:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a.adsDisplayed)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_2__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a.adsDisplayed},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"0"},"0"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"2"},"2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"4"},"4"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-value":"6"},"6")))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_style__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21),_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(321),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(72),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(124),_src_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(71),_src_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(39),_src_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(106),_fakeLocale__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(17);const favicon=__webpack_require__(65),eich=__webpack_require__(186),guardian=__webpack_require__(101);__webpack_exports__.default=class DonationsBoxMobile extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.doNothing=(()=>{console.log("nothing")}),this.onChange=((key,selected,child,all)=>{this.setState({check:all})}),this.donationSettingsChild=(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.b,{columns:1,customStyle:{maxWidth:"270px",margin:"0 auto"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_7__.a,{text:"Enable ability to give tips on ‘Like’ posts"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{value:this.state.check,multiple:!0,onChange:this.onChange},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"yt"},"YouTube"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"tw"},"Twitter"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"rd"},"Reddit"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-key":"inst"},"Instagram"))))))),this.state={check:{yt:!0,tw:!1,inst:!1}}}get donationRows(){return[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:this.doNothing},{profile:{verified:!1,name:"theguardian.com",src:guardian},url:"https://brave.com",type:"donation",contribute:{tokens:"12.0",converted:"6.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:eich},url:"https://brave.com",type:"tip",contribute:{tokens:"7.0",converted:"3.20"},text:"May 2"}]}render(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_2__.a,{title:_fakeLocale__WEBPACK_IMPORTED_MODULE_9__.a.donationTitle,type:"donation",toggle:!1,checked:this.props.rewardsEnabled,description:_fakeLocale__WEBPACK_IMPORTED_MODULE_9__.a.donationDesc,settingsChild:this.donationSettingsChild()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{title:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_9__.a.donationTotal)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{value:"21.0",converted:"7.00"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{rows:this.donationRows,allItems:!0,headerColor:!0},"Please visit some sites")))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(165),_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(314),_style__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21),_src_components_icons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(192),_src_components_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(105),_src_features_rewards_modalAddFunds__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(161);const doNothing=()=>{console.log("nothing")},notImplemented=()=>{console.log("view not implemented")};__webpack_exports__.default=class MobileWalletPanel extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),this.toggleAddFunds=(()=>{this.setState({addFundsShown:!this.state.addFundsShown})}),this.state={addFundsShown:!1}}get walletAddresses(){return[{type:"BTC",address:"17fBi3kyqUd2jjPDSi8ArBbMWso16qmxW5",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAABz0lEQVR42u3cQY7DIAwF0Nz/0u1uVgP5hqYV8Fh1lFF4qVRjbNrrteq4yMnJycnJycnJycnJyXeRX/ejfcO/q6X/q89GTn62PJiz+Wdz9v/uXJqNnJy8/blvRo9mLGg+V302cnLyAXm6jAfBiZyc/EF5kJ+n9yMnJ5/Pz4OZSnvu7+0syMmXlwdr+Qdffbk6R06+sjxu1YRpeD9f+EWHi5x8ZXnwuW8+QwAs1a3JycnjwJEm34OtpFJuT05+tjyIMkHtqm6bjy3k5MfI09JT0A5KL8THqcjJT5WnnddHwkqAJicnj/fDaa82zRzmO7nk5MfI+4SgxBz0eftv22hsISffVx6Ei9J0/TJYvQBNTk6ebJSDq6Os6bMW5OT7ypO1NzwhVdpf99MMcnLyuPP68HONrv7k5GfJSy2d+nY7jUHk5OQ38mDOWokqXP3nYws5+W7ydPRjUD3vLu25ycmPlV/3I60zB6cp+q/mO1zk5FvK04hSP9FU+qrAJ6tz5OS7yeuHK9IE4aoMcnLyUflgzCgVvsnJyedjS1oQSytq89U5cvLN5fWraWoerPTk5OTzv4FWf8z0uR6szpGTryxfYpCTk5OTk5OTk5OTk5OvON4QJEO8FpFK4QAAAABJRU5ErkJggg=="},{type:"ETH",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"BAT",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"LTC",address:"Le8aswhmGJjn9jP5teEWdyJARak4xU8sCn",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACOUlEQVR42u3bQXLDIAwF0Nz/0u0FYvKFBNN0Hit7mtq8LDTwRV4//2m8aGhoaGhoaGhoaGhoaGhouprX57H+8LvnvbstPXT9DhoamnHNc+F4fNZyWmvX0AxoaGimNe/qyONf16UrqILBO2hoaL5Is4YESx4aGpov0pRK13prQ0ND86c0gbX0zvX0g/nS0NDc0wRJ4+Gry8ktDQ3NRptxL7ksTfBeF5eGhibYXQSR5mPtS/dBHTANDc2kJkguSwUrtbYaojQ0NEc06e1mSVq7gmCUhobmoCbIHIPOZsnVWd7Q0NCMa9Iwo9TZ3MgwwwyEhoZmXBN0MR+vgmVL50QEDQ3NPU2w4Ci1LUvdzsmUg4aGpt73TE8lBWlIqYhNdjxoaGg6fc/A1d6ZpKcjk7fR0NAMatJ5pM3PYPsU/Ec/s6GhoUlXNmlforRsqR9yCLqiNDQ045pSWekccCr1VvtZJw0NTSfrDEpXUBnTk9HpXouGhua0Zv3AzW7n+iMH+540NDT1rHN97LkejsRLlM9nrmloaO5pSpFmWr+Cn1qkSy0aGprLmtJpqHVcEViH9jc0NDQlTTo2s41SejF5oouGhqaTdaYlKbgKdk6lM9I0NDRnNEElS0OP9DtJ26o0NDT3NEG96fQvgv3Smd0aDQ3NoGZzPVPqc9DQ0PxlTTC3/orlc8BBQ0NzRpMGmeltUMTW3ywNDc09TZBPBH3PemFrlVEaGpoZzdcOGhoaGhoaGhoaGhoaGhqayvgFbnvHJxkVZlQAAAAASUVORK5CYII="}]}render(){const{visible:visible,toggleAction:toggleAction}=this.props;return visible?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_4__.j,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_4__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:toggleAction})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_style__WEBPACK_IMPORTED_MODULE_4__.k,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_2__.a,{balance:"30.0",converted:"7.00 USD",actions:[{name:"Add funds",action:this.toggleAddFunds,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_6__.a,null)}],compact:!0,isMobile:!0,onSettingsClick:notImplemented,onActivityClick:doNothing,showSecActions:!0,grants:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Claimed grants",[{tokens:"8.0",expireDate:"7/15/2018",type:"ugp"},{tokens:"10.0",expireDate:"9/10/2018",type:"ugp"},{tokens:"10.0",expireDate:"10/10/2018",type:"ads"}]),connectedWallet:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Connected wallet",!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_3__.a,{hideAddFundsText:!0}))),this.state.addFundsShown?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_modalAddFunds__WEBPACK_IMPORTED_MODULE_7__.a,{isMobile:!0,onClose:this.toggleAddFunds,addresses:this.walletAddresses}):null)):null}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return AdsTrackersControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(109),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(126),_list_static__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(102),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_fakeData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(80),_helpers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(34);class AdsTrackersControl extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onOpen3rdPartyTrackersBlocked=(event=>{event.currentTarget&&event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({trackersBlockedOpen:!this.state.trackersBlockedOpen})}),this.onOpen3rdPartyTrackersBlockedViaKeyboard=(event=>{event&&" "===event.key&&(event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({trackersBlockedOpen:!this.state.trackersBlockedOpen}))}),this.onChange3rdPartyTrackersBlockedEnabled=(event=>{this.setState({trackersBlockedEnabled:event.target.checked})}),this.state={trackersBlockedEnabled:!0,trackersBlockedOpen:!1}}get tabIndex(){const{isBlockedListOpen:isBlockedListOpen,adsTrackersBlocked:adsTrackersBlocked}=this.props;return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__.g)(isBlockedListOpen,adsTrackersBlocked)}render(){const{favicon:favicon,hostname:hostname,adsTrackersBlocked:adsTrackersBlocked,isBlockedListOpen:isBlockedListOpen}=this.props,{trackersBlockedOpen:trackersBlockedOpen,trackersBlockedEnabled:trackersBlockedEnabled}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.b,{disabled:0===adsTrackersBlocked,tabIndex:this.tabIndex,onClick:this.onOpen3rdPartyTrackersBlocked,onKeyDown:this.onOpen3rdPartyTrackersBlockedViaKeyboard},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.a,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.a,null,adsTrackersBlocked>99?"99+":adsTrackersBlocked),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.b,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("thirdPartyTrackersBlocked"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.a,{size:"small",disabled:isBlockedListOpen,checked:trackersBlockedEnabled,onChange:this.onChange3rdPartyTrackersBlockedEnabled})),trackersBlockedOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_static__WEBPACK_IMPORTED_MODULE_5__.default,{favicon:favicon,hostname:hostname,stats:adsTrackersBlocked,name:Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("thirdPartyTrackersBlocked"),list:_fakeData__WEBPACK_IMPORTED_MODULE_7__.a.blockedFakeResources,onClose:this.onOpen3rdPartyTrackersBlocked}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return CookiesControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(313),_fakeLocale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10);class CookiesControl extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{isBlockedListOpen:isBlockedListOpen}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.a,{disabled:isBlockedListOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"block_third_party"},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a)("thirdPartyCookiesBlocked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"block"},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a)("allCookiesBlocked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"allow"},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a)("allCookiesAllowed")))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return DeviceRecognitionControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(109),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(313),_list_static__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(102),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_fakeData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(80),_helpers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(34);class DeviceRecognitionControl extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onOpenDeviceRecognitionOpen=(event=>{event.currentTarget&&event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({deviceRecognitionOpen:!this.state.deviceRecognitionOpen})}),this.onOpenDeviceRecognitionOpenViaKeyboard=(event=>{event&&" "===event.key&&(event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({deviceRecognitionOpen:!this.state.deviceRecognitionOpen}))}),this.state={deviceRecognitionOpen:!1}}get tabIndex(){const{isBlockedListOpen:isBlockedListOpen,fingerprintingBlocked:fingerprintingBlocked}=this.props;return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__.g)(isBlockedListOpen,fingerprintingBlocked)}render(){const{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,fingerprintingBlocked:fingerprintingBlocked}=this.props,{deviceRecognitionOpen:deviceRecognitionOpen}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.c,{disabled:0===fingerprintingBlocked,tabIndex:this.tabIndex,onClick:this.onOpenDeviceRecognitionOpen,onKeyDown:this.onOpenDeviceRecognitionOpenViaKeyboard},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.a,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.a,null,fingerprintingBlocked>99?"99+":fingerprintingBlocked)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:isBlockedListOpen},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"block_third_party"},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("thirdPartyFingerprintingBlocked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"block"},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("allFingerprintingBlocked")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"allow"},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("allFingerprintingAllowed")))),deviceRecognitionOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_static__WEBPACK_IMPORTED_MODULE_5__.default,{favicon:favicon,hostname:hostname,stats:fingerprintingBlocked,name:Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("deviceRecognitionAttempts"),list:_fakeData__WEBPACK_IMPORTED_MODULE_7__.a.blockedFakeResources,onClose:this.onOpenDeviceRecognitionOpen}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return HTTPSUpgradesControl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(109),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(126),_list_static__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(102),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_fakeData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(80),_helpers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(34);class HTTPSUpgradesControl extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onOpenConnectionsUpgradedToHTTPS=(event=>{event.currentTarget&&event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({connectionsUpgradedOpen:!this.state.connectionsUpgradedOpen})}),this.onOpenConnectionsUpgradedToHTTPSViaKeyboard=(event=>{event&&" "===event.key&&(event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({connectionsUpgradedOpen:!this.state.connectionsUpgradedOpen}))}),this.onChangeConnectionsUpgradedToHTTPSEnabled=(event=>{this.setState({connectionsUpgradedEnabled:event.target.checked})}),this.state={connectionsUpgradedEnabled:!0,connectionsUpgradedOpen:!1}}get tabIndex(){const{isBlockedListOpen:isBlockedListOpen,httpsUpgrades:httpsUpgrades}=this.props;return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__.g)(isBlockedListOpen,httpsUpgrades)}render(){const{isBlockedListOpen:isBlockedListOpen,favicon:favicon,hostname:hostname,httpsUpgrades:httpsUpgrades}=this.props,{connectionsUpgradedOpen:connectionsUpgradedOpen,connectionsUpgradedEnabled:connectionsUpgradedEnabled}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.b,{disabled:0===httpsUpgrades,tabIndex:this.tabIndex,onClick:this.onOpenConnectionsUpgradedToHTTPS,onKeyDown:this.onOpenConnectionsUpgradedToHTTPSViaKeyboard},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.a,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.a,null,httpsUpgrades>99?"99+":httpsUpgrades),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.b,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("connectionsUpgradedHTTPSCapital"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.a,{size:"small",disabled:isBlockedListOpen,checked:connectionsUpgradedEnabled,onChange:this.onChangeConnectionsUpgradedToHTTPSEnabled})),connectionsUpgradedOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_static__WEBPACK_IMPORTED_MODULE_5__.default,{favicon:favicon,hostname:hostname,stats:httpsUpgrades,name:Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("connectionsUpgradedHTTPSCapital"),list:_fakeData__WEBPACK_IMPORTED_MODULE_7__.a.blockedFakeResources,onClose:this.onOpenConnectionsUpgradedToHTTPS}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ScriptsControls});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(109),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(126),_list_noScriptDetails__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(279),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_fakeData__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(80),_helpers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(34);class ScriptsControls extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onOpenScriptsBlockedOpen=(event=>{event.currentTarget&&event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({scriptsBlockedOpen:!this.state.scriptsBlockedOpen})}),this.onOpenScriptsBlockedOpenViaKeyboard=(event=>{event&&" "===event.key&&(event.currentTarget.blur(),this.props.setBlockedListOpen(),this.setState({scriptsBlockedOpen:!this.state.scriptsBlockedOpen}))}),this.onChangeScriptsBlockedEnabled=(event=>{this.setState({scriptsBlockedEnabled:event.target.checked})}),this.onAllowScriptsOnceViaShortcut=(()=>{}),this.state={scriptsBlockedOpen:!1,scriptsBlockedEnabled:!0}}get tabIndex(){const{isBlockedListOpen:isBlockedListOpen,scriptsBlocked:scriptsBlocked}=this.props;return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__.g)(isBlockedListOpen,scriptsBlocked)}render(){const{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,scriptsBlocked:scriptsBlocked}=this.props,{scriptsBlockedEnabled:scriptsBlockedEnabled,scriptsBlockedOpen:scriptsBlockedOpen}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.a,{extraColumn:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.b,{disabled:0===scriptsBlocked,tabIndex:this.tabIndex,onClick:this.onOpenScriptsBlockedOpen,onKeyDown:this.onOpenScriptsBlockedOpenViaKeyboard},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.a,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.a,null,scriptsBlocked>99?"99+":scriptsBlocked),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("scriptsBlocked")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.i,{size:"small",style:{zIndex:1},onClick:this.onAllowScriptsOnceViaShortcut},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("allowScriptsOnce")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.a,{size:"small",disabled:isBlockedListOpen,checked:scriptsBlockedEnabled,onChange:this.onChangeScriptsBlockedEnabled})),scriptsBlockedOpen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_list_noScriptDetails__WEBPACK_IMPORTED_MODULE_5__.default,{favicon:favicon,hostname:hostname,name:Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("scriptsOnThisSite"),list:_fakeData__WEBPACK_IMPORTED_MODULE_7__.a.blockedScriptsResouces,onClose:this.onOpenScriptsBlockedOpen}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return CoreFeature});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_noScriptList__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(197),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(34),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(109),_fakeLocale__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10);class CoreFeature extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(){super(...arguments),this.setFinalScriptsBlockedState=(()=>{})}get noScriptInfo(){return this.props.list}get generatedNoScriptData(){return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.c)(this.noScriptInfo)}get blockedScriptsLength(){return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.b)(Object.entries(this.noScriptInfo),!0).length}get allowedScriptsLength(){return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.b)(Object.entries(this.noScriptInfo),!1).length}blockOrAllowAll(blockOrAllow){}getBlockAllText(shouldBlock){return Object(_helpers__WEBPACK_IMPORTED_MODULE_2__.d)(this.noScriptInfo,shouldBlock)}render(){const{onClose:onClose}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.f,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.g,{src:this.props.favicon}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.m,null,"buzfeed.com")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("details",{open:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.p,{stats:!1,onClick:onClose},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_5__.b,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.e,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("scriptsOnThisSite"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.g,null,this.blockedScriptsLength>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.l,{id:"blocked"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.c,null,this.blockedScriptsLength),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.d,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("blockedScripts")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.i,{onClick:this.blockOrAllowAll.bind(this,!1)},this.getBlockAllText(!0))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_noScriptList__WEBPACK_IMPORTED_MODULE_1__.default,{shouldBlock:!0,noScriptInfo:this.generatedNoScriptData})),this.allowedScriptsLength>0&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.l,{id:"allowed"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.c,null,this.allowedScriptsLength),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.d,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("allowedScripts")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.i,{onClick:this.blockOrAllowAll.bind(this,!0)},this.getBlockAllText(!1))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_noScriptList__WEBPACK_IMPORTED_MODULE_1__.default,{shouldBlock:!1,noScriptInfo:this.generatedNoScriptData})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.l,{level:"primary",type:"accent",onClick:onClose,text:Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_6__.a)("goBack")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return Footer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_fakeLocale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10);class Footer extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{isBlockedListOpen:isBlockedListOpen}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.r,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.h,{disabled:isBlockedListOpen},Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a)("changeDefaults")))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return Header});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_src_features_shields__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_src_features_shields__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(126),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(109),_fakeLocale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10);class Header extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{get totalBlocked(){const{adsTrackersBlocked:adsTrackersBlocked,httpsUpgrades:httpsUpgrades,scriptsBlocked:scriptsBlocked,fingerprintingBlocked:fingerprintingBlocked}=this.props,total=adsTrackersBlocked+httpsUpgrades+scriptsBlocked+fingerprintingBlocked;return total?total>99?"99+":total:0}get totalBlockedString(){const{adsTrackersBlocked:adsTrackersBlocked,scriptsBlocked:scriptsBlocked,fingerprintingBlocked:fingerprintingBlocked,httpsUpgrades:httpsUpgrades}=this.props,blockedItems=adsTrackersBlocked+scriptsBlocked+fingerprintingBlocked;return 0===blockedItems&&0===httpsUpgrades?`${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("itemsBlocked")} ${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("and")} ${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("connectionsUpgraded")}`:1===blockedItems&&0===httpsUpgrades?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("itemBlocked"):0===blockedItems&&1===httpsUpgrades?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("connectionUpgradedHTTPSCapital"):blockedItems>1&&0===httpsUpgrades?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("itemsBlocked"):0===blockedItems&&httpsUpgrades>1?Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("connectionsUpgradedHTTPSCapital"):`${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("itemsBlocked")} ${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("and")} ${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("connectionsUpgraded")}`}render(){const{fakeOnChange:fakeOnChange,enabled:enabled,favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.t,{status:enabled?"enabled":"disabled"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.s,{status:enabled?"enabled":"disabled"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.j,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("shields"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.n,{status:enabled?"enabled":"disabled"},enabled?` ${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("up")} `:` ${Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("down")} `),Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("forThisSite")),enabled?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.k,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("enabledMessage")):null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_3__.a,{size:"large",checked:enabled,onChange:fakeOnChange,disabled:isBlockedListOpen})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.w,{status:enabled?"enabled":"disabled"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.v,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.g,{src:favicon}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.m,null,hostname)),enabled?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.x,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.o,null,this.totalBlocked),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.p,null,this.totalBlockedString)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.q,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.c,null)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_2__.f,null,Object(_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a)("disabledMessage")))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return InterfaceControls});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_controls_adsTrackersControl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(274),_controls_httpsUpgradesControl__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(277);class InterfaceControls extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,setBlockedListOpen:setBlockedListOpen,adsTrackersBlocked:adsTrackersBlocked,httpsUpgrades:httpsUpgrades}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_adsTrackersControl__WEBPACK_IMPORTED_MODULE_1__.default,{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,adsTrackersBlocked:adsTrackersBlocked,setBlockedListOpen:setBlockedListOpen}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_httpsUpgradesControl__WEBPACK_IMPORTED_MODULE_2__.default,{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,httpsUpgrades:httpsUpgrades,setBlockedListOpen:setBlockedListOpen}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return PrivacyControls});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_controls_scriptsControl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(278),_controls_cookiesControl__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(275),_controls_deviceRecognitionControl__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(276);class PrivacyControls extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{favicon:favicon,hostname:hostname,setBlockedListOpen:setBlockedListOpen,isBlockedListOpen:isBlockedListOpen,scriptsBlocked:scriptsBlocked,fingerprintingBlocked:fingerprintingBlocked}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_scriptsControl__WEBPACK_IMPORTED_MODULE_1__.default,{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,scriptsBlocked:scriptsBlocked,setBlockedListOpen:setBlockedListOpen}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_cookiesControl__WEBPACK_IMPORTED_MODULE_2__.default,{isBlockedListOpen:isBlockedListOpen}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_deviceRecognitionControl__WEBPACK_IMPORTED_MODULE_3__.default,{favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,fingerprintingBlocked:fingerprintingBlocked,setBlockedListOpen:setBlockedListOpen}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return Shields});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_components_header__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(281),_components_interfaceControls__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(282),_components_privacyControls__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(283),_components_footer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(280);class Shields extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.setBlockedListOpen=(()=>{this.setState({isBlockedListOpen:!this.state.isBlockedListOpen})}),this.state={isBlockedListOpen:!1}}render(){const{enabled:enabled,favicon:favicon,hostname:hostname,adsTrackersBlocked:adsTrackersBlocked,httpsUpgrades:httpsUpgrades,scriptsBlocked:scriptsBlocked,fingerprintingBlocked:fingerprintingBlocked,fakeOnChange:fakeOnChange}=this.props,{isBlockedListOpen:isBlockedListOpen}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.u,{style:{width:"370px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__.default,{enabled:enabled,favicon:favicon,hostname:hostname,isBlockedListOpen:isBlockedListOpen,adsTrackersBlocked:adsTrackersBlocked,httpsUpgrades:httpsUpgrades,scriptsBlocked:scriptsBlocked,fingerprintingBlocked:fingerprintingBlocked,fakeOnChange:fakeOnChange}),enabled?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_interfaceControls__WEBPACK_IMPORTED_MODULE_3__.default,{favicon:favicon,hostname:hostname,setBlockedListOpen:this.setBlockedListOpen,isBlockedListOpen:isBlockedListOpen,adsTrackersBlocked:adsTrackersBlocked,httpsUpgrades:httpsUpgrades}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_privacyControls__WEBPACK_IMPORTED_MODULE_4__.default,{favicon:favicon,hostname:hostname,setBlockedListOpen:this.setBlockedListOpen,isBlockedListOpen:isBlockedListOpen,scriptsBlocked:scriptsBlocked,fingerprintingBlocked:fingerprintingBlocked})):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_5__.default,{isBlockedListOpen:isBlockedListOpen}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return SyncDisabledContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_src_features_sync__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(45),_src_features_sync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(110),_src_features_sync__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(23),_modals_deviceType__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(103),_modals_enterSyncCode__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(152),_src_features_sync_images__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(81),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8),_page_fakeData__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(44);class SyncDisabledContent extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onClickNewSyncChainButton=(()=>{this.setState({newToSync:!this.state.newToSync})}),this.onClickEnterSyncChainCodeButton=(()=>{this.setState({existingSyncCode:!this.state.existingSyncCode})}),this.state={newToSync:!1,existingSyncCode:!1}}get mainDeviceName(){return _page_fakeData__WEBPACK_IMPORTED_MODULE_9__.a.device1.name}render(){const{newToSync:newToSync,existingSyncCode:existingSyncCode}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.c,null,newToSync?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_deviceType__WEBPACK_IMPORTED_MODULE_5__.default,{onClose:this.onClickNewSyncChainButton}):null,existingSyncCode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_enterSyncCode__WEBPACK_IMPORTED_MODULE_6__.default,{onClose:this.onClickEnterSyncChainCodeButton}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_2__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.d,{isDeviceTable:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync_images__WEBPACK_IMPORTED_MODULE_7__.e,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.e,{level:2},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("syncTitle")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_4__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("syncDescription")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_3__.a,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{level:"primary",type:"accent",onClick:this.onClickNewSyncChainButton,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("startSyncChain")}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_1__.a,{level:"secondary",type:"accent",onClick:this.onClickEnterSyncChainCodeButton,text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_8__.a)("enterSyncChainCode")}))))))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return SyncEnabledContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_shields__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(126),_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_src_components_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(191),_src_components_dataTables_table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(53),_src_features_sync__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(45),_src_features_sync__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(23),_src_features_sync__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(110),_modals_removeMainDevice__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(154),_modals_removeOtherDevice__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(153),_modals_viewSyncCode__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(67),_modals_deviceType__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(103),_modals_resetSync__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(155),_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(8),_page_fakeData__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(44);class SyncEnabledContent extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onClickRemoveOtherDeviceButton=(()=>{this.setState({removeOtherDevice:!this.state.removeOtherDevice})}),this.onClickRemoveMainDeviceButton=(()=>{this.setState({removeMainDevice:!this.state.removeMainDevice})}),this.onClickViewSyncCodeButton=(()=>{this.setState({viewSyncCode:!this.state.viewSyncCode})}),this.onClickAddDeviceButton=(()=>{this.setState({addDevice:!this.state.addDevice})}),this.onClickResetSyncButton=(()=>{this.setState({resetSync:!this.state.resetSync})}),this.state={removeOtherDevice:!1,removeMainDevice:!1,viewSyncCode:!1,addDevice:!1,resetSync:!1}}get mainDeviceName(){return _page_fakeData__WEBPACK_IMPORTED_MODULE_14__.a.device1.name}get otherDeviceName(){return _page_fakeData__WEBPACK_IMPORTED_MODULE_14__.a.device2.name}get deviceRows(){return[{content:[{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.f,null,_page_fakeData__WEBPACK_IMPORTED_MODULE_14__.a.device1.name," (This Device)")},{content:_page_fakeData__WEBPACK_IMPORTED_MODULE_14__.a.device1.lastActive},{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.g,{"data-id":"","data-name":"",onClick:this.onClickRemoveMainDeviceButton},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_3__.a,null))}]},{content:[{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.f,null,_page_fakeData__WEBPACK_IMPORTED_MODULE_14__.a.device2.name)},{content:_page_fakeData__WEBPACK_IMPORTED_MODULE_14__.a.device2.lastActive},{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.g,{"data-id":"","data-name":"",onClick:this.onClickRemoveOtherDeviceButton},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_3__.a,null))}]}]}get deviceHeader(){return[{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.f,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("deviceName"))},{content:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("addedOn")},{content:""}]}get settingsHeader(){return[{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.f,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("settings"))},{content:""}]}get settingsRows(){return[{content:[{content:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("bookmarks")},{content:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_1__.a,{id:"bookmarks",checked:!0,size:"large"}))}]}]}render(){const{removeOtherDevice:removeOtherDevice,removeMainDevice:removeMainDevice,viewSyncCode:viewSyncCode,addDevice:addDevice,resetSync:resetSync}=this.state;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.c,null,removeOtherDevice?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_removeOtherDevice__WEBPACK_IMPORTED_MODULE_9__.default,{onClose:this.onClickRemoveOtherDeviceButton,otherDeviceName:this.otherDeviceName}):null,removeMainDevice?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_removeMainDevice__WEBPACK_IMPORTED_MODULE_8__.default,{onClose:this.onClickRemoveMainDeviceButton,mainDeviceName:this.mainDeviceName}):null,viewSyncCode?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_viewSyncCode__WEBPACK_IMPORTED_MODULE_10__.default,{onClose:this.onClickViewSyncCodeButton}):null,addDevice?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_deviceType__WEBPACK_IMPORTED_MODULE_11__.default,{onClose:this.onClickAddDeviceButton}):null,resetSync?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_resetSync__WEBPACK_IMPORTED_MODULE_12__.default,{onClose:this.onClickResetSyncButton,mainDeviceName:this.mainDeviceName}):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.d,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_5__.e,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.e,{level:2},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("braveSync")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("syncChainDevices")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_7__.d,{isDeviceTable:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_dataTables_table__WEBPACK_IMPORTED_MODULE_4__.a,{header:this.deviceHeader,rows:this.deviceRows}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_7__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__.a,{level:"secondary",type:"accent",size:"medium",text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("viewSyncCode"),onClick:this.onClickViewSyncCodeButton}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__.a,{level:"primary",type:"accent",size:"medium",text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("addDevice"),onClick:this.onClickAddDeviceButton})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.e,{level:2},Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("syncSettings")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_6__.c,null,Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("syncSettingsDescription")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_dataTables_table__WEBPACK_IMPORTED_MODULE_4__.a,{header:this.settingsHeader,rows:this.settingsRows})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_sync__WEBPACK_IMPORTED_MODULE_7__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__.a,{level:"primary",type:"accent",size:"medium",text:Object(_page_fakeLocale__WEBPACK_IMPORTED_MODULE_13__.a)("leaveSyncChain"),onClick:this.onClickResetSyncButton}))))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return WelcomePage});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_screens_welcomeBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(288),_screens_importBox__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(289),_screens_shieldsBox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(292),_screens_searchBox__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(290),_screens_rewardsBox__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(293),_screens_themeBox__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(291),_screens_footerBox__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(294),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(43);class WelcomePage extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onClickLetsGo=(()=>{this.setState({currentScreen:this.state.currentScreen+1})}),this.onClickSlideBullet=(nextScreen=>{this.setState({currentScreen:nextScreen})}),this.onClickNext=(()=>{this.setState({currentScreen:this.state.currentScreen+1})}),this.onClickDone=(()=>{}),this.onClickSkip=(()=>{}),this.onClickImport=(()=>{this.setState({fakeBookmarksImported:!this.state.fakeBookmarksImported}),this.setState({currentScreen:this.state.currentScreen+1}),console.log("IMPORTED!")}),this.onChangeDefaultSearchEngine=(()=>{this.setState({fakeChangedSearchEngine:!this.state.fakeChangedSearchEngine}),console.log("CHANGED DEFAULT SEARCH ENGINE!")}),this.onClickConfirmDefaultSearchEngine=(()=>{this.setState({currentScreen:this.state.currentScreen+1}),console.log("CONFIRMED DEFAULT SEARCH ENGINE!")}),this.onClickChooseYourTheme=(()=>{this.setState({fakeChangedDefaultTheme:!this.state.fakeChangedDefaultTheme}),this.setState({currentScreen:this.state.currentScreen+1}),console.log("NEW THEME CHOOSED")}),this.onClickRewardsGetStarted=(()=>{console.log("SENT TO REWARDS PAGE")}),this.state={currentScreen:1,fakeChangedSearchEngine:!1,fakeBookmarksImported:!1,fakeChangedDefaultTheme:!1}}get totalScreensSize(){return 6}get backgroundPosition(){switch(this.state.currentScreen){case 1:return"100%";case 2:return"200%";case 3:return"300%";case 4:return"400%";case 5:return"500%";case 6:return"600%";default:return"100%"}}render(){const{currentScreen:currentScreen}=this.state,{isDefaultSearchGoogle:isDefaultSearchGoogle}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_9__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_9__.a,{position:`-${currentScreen}0%`})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.f,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.g,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.i,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_welcomeBox__WEBPACK_IMPORTED_MODULE_2__.default,{index:1,currentScreen:currentScreen,onClick:this.onClickLetsGo}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_importBox__WEBPACK_IMPORTED_MODULE_3__.default,{index:2,currentScreen:currentScreen,onClick:this.onClickImport}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_searchBox__WEBPACK_IMPORTED_MODULE_5__.default,{index:3,currentScreen:currentScreen,onClick:this.onClickConfirmDefaultSearchEngine,fakeOnChange:this.onChangeDefaultSearchEngine,isDefaultSearchGoogle:isDefaultSearchGoogle}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_themeBox__WEBPACK_IMPORTED_MODULE_7__.default,{index:4,currentScreen:currentScreen,onClick:this.onClickChooseYourTheme}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_shieldsBox__WEBPACK_IMPORTED_MODULE_4__.default,{index:5,currentScreen:currentScreen}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_rewardsBox__WEBPACK_IMPORTED_MODULE_6__.default,{index:6,currentScreen:currentScreen,onClick:this.onClickRewardsGetStarted})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_screens_footerBox__WEBPACK_IMPORTED_MODULE_8__.default,{totalScreensSize:this.totalScreensSize,currentScreen:currentScreen,onClickSkip:this.onClickSkip,onClickSlideBullet:this.onClickSlideBullet,onClickNext:this.onClickNext,onClickDone:this.onClickDone}))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ThemingBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),_src_components_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_fakeLocale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(43);class ThemingBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{index:index,currentScreen:currentScreen,onClick:onClick}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.a,{zIndex:index,active:currentScreen===index,screenPosition:"1"+(index+1)+"0%",isPrevious:index<=currentScreen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_6__.d,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.welcome),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.whatIsBrave),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__.c,{level:"primary",type:"accent",size:"large",text:_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.letsGo,onClick:onClick,icon:{position:"after",image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowRightIcon,null)}}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ImportBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43);class ImportBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onClickImport=(()=>{this.setState({onClickFired:!this.state.onClickFired}),this.props.onClick()}),this.state={onClickFired:!1}}render(){const{index:index,currentScreen:currentScreen}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.a,{zIndex:index,active:index===currentScreen,screenPosition:"1"+(index+1)+"0%",isPrevious:index<=currentScreen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_5__.c,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.importFromAnotherBrowser),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.setupImport),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__.c,{level:"primary",type:"accent",size:"large",text:(this.state.onClickFired,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.import),onClick:this.onClickImport}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return SearchEngineBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),_src_features_shields__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(313),_fakeLocale__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(18),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(43);class SearchEngineBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(props){super(props),this.onChangeDefaultSearchEngine=(event=>{console.log(""!==event.target.value),this.setState({searchEngineSelected:""!==event.target.value}),this.props.fakeOnChange()}),this.state={searchEngineSelected:!1}}render(){const{index:index,currentScreen:currentScreen,onClick:onClick,isDefaultSearchGoogle:isDefaultSearchGoogle}=this.props,{searchEngineSelected:searchEngineSelected}=this.state,bodyText=isDefaultSearchGoogle?`${_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.chooseSearchEngine} ${_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.privateExperience}`:_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.chooseSearchEngine;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.a,{zIndex:index,active:index===currentScreen,screenPosition:"1"+(index+1)+"0%",isPrevious:index<=currentScreen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_6__.f,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.setDefaultSearchEngine),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,null,bodyText),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.h,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_shields__WEBPACK_IMPORTED_MODULE_4__.a,{onChange:this.onChangeDefaultSearchEngine},react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:""},_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.selectSearchEngine),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"DuckDuckGo"},_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.fakeSearchProvider1),react__WEBPACK_IMPORTED_MODULE_0__.createElement("option",{value:"Google"},_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.fakeSearchProvider2)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__.c,{level:"primary",type:"accent",size:"large",text:_fakeLocale__WEBPACK_IMPORTED_MODULE_5__.a.setDefault,disabled:!searchEngineSelected,onClick:onClick})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ThemingBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43);class ThemingBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{index:index,currentScreen:currentScreen,onClick:onClick}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.a,{zIndex:index,active:index===currentScreen,screenPosition:"1"+(index+1)+"0%",isPrevious:index<=currentScreen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_5__.h,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.chooseYourTheme),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.findToolbarTheme),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__.c,{level:"primary",type:"accent",size:"large",text:_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.theme,onClick:onClick}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return ShieldsBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_fakeLocale__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(43);class ShieldsBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{index:index,currentScreen:currentScreen}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.a,{zIndex:index,active:index===currentScreen,screenPosition:"1"+(index+1)+"0%",isPrevious:index<=currentScreen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_4__.g,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.protectYourPrivacy),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_3__.a.adjustProtectionLevel))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return PaymentsBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(62),_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(70),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18),_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(43);class PaymentsBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{index:index,currentScreen:currentScreen,onClick:onClick}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.a,{zIndex:index,active:index===currentScreen,screenPosition:"1"+(index+1)+"0%",isPrevious:index<=currentScreen},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome_images__WEBPACK_IMPORTED_MODULE_5__.e,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.enableBraveRewards),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,null,_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.setupBraveRewards),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_3__.c,{level:"primary",type:"accent",size:"large",text:_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.getStarted,onClick:onClick}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"default",function(){return FooterBox});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(49),_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(70),_src_components_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_fakeLocale__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(18);class FooterBox extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{render(){const{currentScreen:currentScreen,totalScreensSize:totalScreensSize,onClickSkip:onClickSkip,onClickNext:onClickNext,onClickSlideBullet:onClickSlideBullet,onClickDone:onClickDone}=this.props;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.b,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.c,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.d,{onClick:onClickSkip},_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.skipWelcomeTour)),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.d,null,Array.from({length:totalScreensSize},(v,k)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.a,{active:currentScreen===k+1,key:k,onClick:onClickSlideBullet.bind(this,k+1)},"•"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_1__.e,null,currentScreen!==totalScreensSize&&1!==currentScreen?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,{level:"secondary",type:"default",size:"medium",onClick:onClickNext,text:_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.next,icon:{position:"after",image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowRightIcon,null)}}):1!==currentScreen&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_welcome___WEBPACK_IMPORTED_MODULE_2__.b,{level:"secondary",type:"default",size:"medium",onClick:onClickDone,text:_fakeLocale__WEBPACK_IMPORTED_MODULE_4__.a.done})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledClock=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledClock"})`
  color: #FFFFFF;
  box-sizing: border-box;
  line-height: 1;
  user-select: none;
  display: flex;
  -webkit-font-smoothing: antialiased;
  font-family: ${p=>p.theme.fontFamily.heading};
`,StyledTime=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTime"})`
  box-sizing: border-box;
  font-size: 90px;
  font-weight: 200;
  color: inherit;
  display: inline-flex;
`;Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTimeSeparator"})`
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  font-weight: 200;
  /* center colon vertically in the text-content line */
  margin-top: -0.1em;
`;class clock_Clock extends react.PureComponent{constructor(props){super(props),this.state=this.getClockState(new Date)}get dateTimeFormat(){return new Intl.DateTimeFormat([],{hour:"2-digit",minute:"2-digit"})}get formattedTime(){return this.state.currentTime.map(component=>"dayPeriod"===component.type?null:component.value)}getMinutes(date){return Math.floor(date/1e3/60)}maybeUpdateClock(){const now=new Date;this.getMinutes(this.state.date)!==this.getMinutes(now)&&this.setState(this.getClockState(now))}getClockState(now){return{date:now,currentTime:this.dateTimeFormat.formatToParts(now)}}componentDidMount(){window.setInterval(this.maybeUpdateClock.bind(this),2e3)}render(){return react.createElement(StyledClock,null,react.createElement(StyledTime,null,this.formattedTime))}}var page=__webpack_require__(107),theme=__webpack_require__(1);const Header=Object(theme.b)("header").withConfig({displayName:"Header"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  margin: 70px 0 0;
  grid-template-columns: 1fr auto auto;
  grid-template-rows: 1fr;
  grid-gap: 30px 0;
  grid-template-areas:
    "stats clock"
    "topsites topsites";

  > *:first-child {
    grid-area: stats;
    margin: 0 70px 0 70px;
  }

  > *:nth-child(2) {
    grid-area: clock;
    margin: 0 70px 0 70px;
  }

  > *:nth-child(3) {
    grid-area: topsites;
  }

  @media screen and (max-width: 904px) {
    grid-template-areas:
    "clock"
    "stats"
    "topsites";

    > *:first-child {
      margin: auto;
      text-align: center;
    }

    > *:nth-child(2) {
      margin: auto;
      text-align: center;
    }

    > *:nth-child(3) {
      justify-content: center;
    }
  }
`,Main=Object(theme.b)("main").withConfig({displayName:"Main"})`
  box-sizing: border-box;
`,Footer=Object(theme.b)("footer").withConfig({displayName:"Footer"})`
  box-sizing: border-box;
  display: grid;
  height: 100%;
  margin: 70px;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  grid-gap: 0;
  grid-template-areas: "credits actions";

    > *:first-child {
      grid-area: credits;
    }

    > *:nth-child(2) {
      grid-area: actions;
    }

  @media screen and (max-width: 904px) {
    margin: 70px 40px;

    grid-template-areas:
      "credits actions";

    > *:first-child {
      text-align: left;
    }

    > *:nth-child(2) {
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 390px) {
    grid-template-areas:
      "credits"
      "actions";

      > *:first-child {
        text-align: center;
      }

      > *:nth-child(2) {
        justify-content: center;
      }
  }
`;var settings=__webpack_require__(296),topSitesList=__webpack_require__(260),stats=__webpack_require__(297),siteRemovalNotification=__webpack_require__(301),footerInfo=__webpack_require__(262),helpers=__webpack_require__(160),ntp_1=__webpack_require__(447),ntp_1_default=__webpack_require__.n(ntp_1),ntp_2=__webpack_require__(448),ntp_2_default=__webpack_require__.n(ntp_2),ntp_3=__webpack_require__(449),ntp_3_default=__webpack_require__.n(ntp_3),ntp_4=__webpack_require__(450),ntp_4_default=__webpack_require__.n(ntp_4),ntp_5=__webpack_require__(451),ntp_5_default=__webpack_require__.n(ntp_5),ntp_6=__webpack_require__(452),ntp_6_default=__webpack_require__.n(ntp_6),ntp_7=__webpack_require__(453),ntp_7_default=__webpack_require__.n(ntp_7),ntp_8=__webpack_require__(454),ntp_8_default=__webpack_require__.n(ntp_8),ntp_9=__webpack_require__(455),ntp_9_default=__webpack_require__.n(ntp_9),ntp_10=__webpack_require__(456),ntp_10_default=__webpack_require__.n(ntp_10),ntp_11=__webpack_require__(457),ntp_11_default=__webpack_require__.n(ntp_11),ntp_12=__webpack_require__(458),ntp_12_default=__webpack_require__.n(ntp_12),ntp_13=__webpack_require__(459),ntp_13_default=__webpack_require__.n(ntp_13),ntp_14=__webpack_require__(460),ntp_14_default=__webpack_require__.n(ntp_14),ntp_15=__webpack_require__(461),ntp_15_default=__webpack_require__.n(ntp_15),ntp_16=__webpack_require__(462),ntp_16_default=__webpack_require__.n(ntp_16);const background_images=[{source:ntp_1_default.a,author:"Pok Rie",link:"https://www.pexels.com/@pok-rie-33563"},{source:ntp_2_default.a,author:"Jack Millard",link:"https://unsplash.com/@millarjb"},{source:ntp_3_default.a,author:"Buzz Andersen",link:"https://unsplash.com/@ldandersen"},{source:ntp_4_default.a,author:"Frank McKenna",link:"https://unsplash.com/@frankiefoto"},{source:ntp_5_default.a,author:"SpaceX",link:"https://www.flickr.com/photos/spacex/"},{source:ntp_6_default.a,author:"SpaceX",link:"https://www.flickr.com/photos/spacex/"},{source:ntp_7_default.a,author:"SpaceX",link:"https://www.flickr.com/photos/spacex/"},{source:ntp_8_default.a,author:"Will Christiansen",link:"https://www.theskyfolk.com"},{source:ntp_9_default.a,author:"Will Christiansen",link:"https://www.theskyfolk.com"},{source:ntp_10_default.a,author:"Will Christiansen",link:"https://www.theskyfolk.com"},{source:ntp_11_default.a,author:"Will Christiansen",link:"http://www.noutgons.nl/"},{source:ntp_12_default.a,author:"Artem Bali",link:"https://www.pexels.com/@belart84"},{source:ntp_13_default.a,author:"Hristo Fidanov",link:"https://www.pexels.com/@hristo-fidanov-520662"},{source:ntp_14_default.a,author:"Life of Pix",link:"https://www.pexels.com/@life-of-pix"},{source:ntp_15_default.a,author:"Cassie Boca",link:"https://unsplash.com/@cassieboca"},{source:ntp_16_default.a,author:"Braden Jarvis",link:"https://unsplash.com/@jarvisphoto"}];__webpack_require__.d(__webpack_exports__,"default",function(){return default_NewTabPage});const generateRandomBackgroundData=Object(helpers.b)(background_images);class default_NewTabPage extends react.PureComponent{constructor(props){super(props),this.toggleShowBackgroundImage=(()=>{this.setState({showBackgroundImage:!this.state.showBackgroundImage})}),this.showSettings=(()=>{this.setState({showSettings:!0})}),this.closeSettings=(()=>{this.setState({showSettings:!1})}),this.state={showBackgroundImage:!0,showSettings:!1}}render(){const{showSettings:showSettings,showBackgroundImage:showBackgroundImage}=this.state;return react.createElement(page.a,{showBackgroundImage:showBackgroundImage,background:generateRandomBackgroundData.source},showBackgroundImage&&react.createElement(page.b,null),react.createElement(page.f,null,react.createElement(Header,null,react.createElement(stats.default,null),react.createElement(clock_Clock,null),react.createElement(Main,null,react.createElement(topSitesList.default,null),react.createElement(siteRemovalNotification.default,null))),showSettings&&react.createElement(settings.default,{onClickOutside:this.closeSettings,toggleShowBackgroundImage:this.toggleShowBackgroundImage,showBackgroundImage:showBackgroundImage}),react.createElement(Footer,null,react.createElement(footerInfo.default,{backgroundImageInfo:generateRandomBackgroundData,onClickSettings:this.showSettings,isSettingsMenuOpen:showSettings,showPhotoInfo:showBackgroundImage}))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const SettingsMenu=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"SettingsMenu"})`
  background-color: ${p=>p.theme.color.contextMenuBackground};
  color:  ${p=>p.theme.color.contextMenuForeground};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.24);
  font-family: ${p=>p.theme.fontFamily.body};
`,SettingsTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"SettingsTitle"})`
  font-family: ${p=>p.theme.fontFamily.body};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0px;
  margin-bottom: 16px;
`,SettingsRow=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"SettingsRow"})`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 36px;
  height: 30px;
  width: 320px;
`,SettingsText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"SettingsText"})`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
`,SettingsWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"SettingsWrapper"})`
  position: absolute;
  bottom: 118px;
  padding: 0 222px;
  display: flex;
  width: 100%;
  justify-content: flex-end;

  @media screen and (max-width: 904px) {
    padding: 0 192px;
  }
`;var theme=__webpack_require__(1),colors=__webpack_require__(6);const StyledCheckbox=Object(theme.b)("input").withConfig({displayName:"StyledCheckbox"})`
  -webkit-appearance: none;
  position: absolute;
  z-index: 99999999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  outline-offset: -3px;
  outline-color: ${colors.a.orange400};
  outline-width: 2px;
`,StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  box-sizing: border-box;
  display: flex;
  position: relative;
  height: 100%;
  justify-content: center;
  align-items: center;
`,StyleToggle=Object(theme.b)("div").withConfig({displayName:"StyleToggle"})`
  box-sizing: border-box;
  position: relative;
  display: block;
  height: ${p=>"small"===p.size?"16px":"24px"};
  width: ${p=>"small"===p.size?"28px":"40px"};

  ${p=>p.disabled?theme.a`
      pointer-events: none;
      animation: none;
    `:""};
`,StyledSlider=Object(theme.b)("label").withConfig({displayName:"StyledSlider"})`
  box-sizing: border-box;
  background: ${p=>p.disabled?"rgba(246,246,250,0.1)":"#C4C7C9"};
  height: ${p=>"small"===p.size?"6px":"8px"};
  margin-top: ${p=>"small"===p.size?"5px":"8px"};
  width: 100%;
  border-radius: 3px;
  display: block;
`,transform=p=>{let x="small"===p.size?"12px":"20px",y="small"===p.size?"3px":"4px";return p.checked||(x="-1px"),{x:x,y:y}},StyledBullet=Object(theme.b)("label").withConfig({displayName:"StyledBullet"})`
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  transition: all .4s ease;
  transform: ${p=>`translate(${(p=>`${transform(p).x}, calc(-50% - ${transform(p).y})`)(p)})`};
  width: ${p=>"small"===p.size?"16px":"20px"};
  height: ${p=>"small"===p.size?"16px":"20px"};
  background-color: ${p=>p.disabled||p.checked?"#fb542b":"#ebecf0"};
  display: block;
  box-shadow: 0 3px 3px rgba(0,0,0,0.05);
`;class toggle_Toggle extends react.PureComponent{constructor(props){super(props),this.state={checked:props.checked},this.handleChange=this.handleChange.bind(this)}componentWillReceiveProps(nextProps){"checked"in nextProps&&this.setState({checked:nextProps.checked})}handleChange(e){const{props:props}=this;props.disabled||("checked"in props||this.setState({checked:e.target.checked}),props.onChange&&props.onChange({target:{checked:e.target.checked}}))}render(){const{id:id,testId:testId,readOnly:readOnly,disabled:disabled,autoFocus:autoFocus,size:size,colorType:colorType}=this.props,{checked:checked}=this.state;return react.createElement(StyledWrapper,{checked:checked,"data-test-id":testId,size:size},react.createElement(StyledCheckbox,{type:"checkbox",id:id,readOnly:readOnly,disabled:disabled,checked:checked,onChange:this.handleChange,autoFocus:autoFocus}),react.createElement(StyleToggle,{size:size},react.createElement(StyledSlider,{htmlFor:id,checked:checked,size:size,disabled:disabled}),react.createElement(StyledBullet,{htmlFor:id,checked:checked,size:size,disabled:disabled,colorType:colorType})))}}toggle_Toggle.defaultProps={checked:!1,size:"small",type:"default",disabled:!1};var fakeLocale=__webpack_require__(41);__webpack_require__.d(__webpack_exports__,"default",function(){return settings_Settings});class settings_Settings extends react.PureComponent{constructor(props){super(props),this.handleClickOutside=(event=>{this.settingsMenuRef&&!this.settingsMenuRef.current.contains(event.target)&&this.props.onClickOutside()}),this.settingsMenuRef=react.createRef()}componentDidMount(){document.addEventListener("mousedown",this.handleClickOutside)}componentWillUnmount(){document.removeEventListener("mousedown",this.handleClickOutside)}render(){const{toggleShowBackgroundImage:toggleShowBackgroundImage,showBackgroundImage:showBackgroundImage}=this.props;return react.createElement(SettingsWrapper,null,react.createElement(SettingsMenu,{innerRef:this.settingsMenuRef},react.createElement(SettingsTitle,null,Object(fakeLocale.a)("dashboardSettings")),react.createElement(SettingsRow,null,react.createElement(SettingsText,null,Object(fakeLocale.a)("showBackgroundImg")),react.createElement(toggle_Toggle,{onChange:toggleShowBackgroundImage,checked:showBackgroundImage,size:"small"}))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledStatsItemContainer=Object(theme.b)("ul").withConfig({displayName:"StyledStatsItemContainer"})`
  -webkit-font-smoothing: antialiased;
  display: grid;
  grid-template-columns: repeat(4, fit-content(100%));
  grid-gap: 25px 50px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-family: inherit;

  @media screen and (max-width: 630px) {
    grid-template-columns: repeat(2, fit-content(100%));
  }


  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(1, fit-content(100%));
  }
`,StyledStatsItem=Object(theme.b)("li").withConfig({displayName:"StyledStatsItem"})`
  list-style-type: none;
  font-size: inherit;
  font-family: inherit;

  &:first-child {
    color: #FB542B;
  }
  &:nth-child(2) {
    color: #B02FFB;
  }
  &:nth-child(3) {
    color: #4C54D2;
  }
  &:last-child {
    color: #FFFFFF;
  }
`,StyledStatsItemCounter=Object(theme.b)("span").withConfig({displayName:"StyledStatsItemCounter"})`
  color: inherit;
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 46px;
  font-weight: 400;
  width: 7ch;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,StyledStatsItemText=Object(theme.b)("span").withConfig({displayName:"StyledStatsItemText"})`
  font-size: 20px;
  font-family: ${p=>p.theme.fontFamily.heading};
  margin-left: 4px;
  display: inline;
  letter-spacing: 0;
`,StyledStatsItemDescription=Object(theme.b)("div").withConfig({displayName:"StyledStatsItemDescription"})`
  font-size: 14px;
  font-weight: 400;
  color: #FFFFFF;
  font-family: ${p=>p.theme.fontFamily.heading};
`;class stats_StatsContainer extends react.PureComponent{render(){const{testId:testId,children:children}=this.props;return react.createElement(StyledStatsItemContainer,{"data-test-id":testId},children)}}class stats_StatsItem extends react.PureComponent{render(){const{testId:testId,counter:counter,text:text,description:description}=this.props;return react.createElement(StyledStatsItem,{"data-test-id":testId},react.createElement(StyledStatsItemCounter,null,counter),text&&react.createElement(StyledStatsItemText,null,text),react.createElement(StyledStatsItemDescription,null,description))}}var fakeLocale=__webpack_require__(41);__webpack_require__.d(__webpack_exports__,"default",function(){return stats_Stats});class stats_Stats extends react.PureComponent{render(){return react.createElement(stats_StatsContainer,null,react.createElement(stats_StatsItem,{counter:"42",description:Object(fakeLocale.a)("trackersBlocked")}),react.createElement(stats_StatsItem,{counter:"105",description:Object(fakeLocale.a)("adsBlocked")}),react.createElement(stats_StatsItem,{counter:"0",description:Object(fakeLocale.a)("httpsUpgrades")}),react.createElement(stats_StatsItem,{counter:"5",text:Object(fakeLocale.a)("minutes"),description:Object(fakeLocale.a)("estimatedTimeSaved")}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),adsBox=__webpack_require__(267),contributeBox=__webpack_require__(268),donationsBox=__webpack_require__(269),grant=__webpack_require__(195),pageWallet=__webpack_require__(270),gridList=__webpack_require__(71),settingsPage=__webpack_require__(798),mainToggle=__webpack_require__(787),theme=__webpack_require__(1),card=__webpack_require__(83),colors=__webpack_require__(6);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  display: block;
  width: 100%;
  margin-bottom: 28px;
`,StyledCard=Object(theme.b)(card.a).withConfig({displayName:"StyledCard"})`
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(theme.b)("span").withConfig({displayName:"StyledTitle"})`
  width: 541px;
  color: ${colors.a.blurple500};
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  padding-bottom: 5px;
`,StyledText=Object(theme.b)("p").withConfig({displayName:"StyledText"})`
  color: ${colors.a.grey600};
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 26px;
  padding-bottom: 0px;
  font-family: Muli, sans-serif;

  &:first-of-type {
    padding-bottom: 10px;
  }
`;var helpers=__webpack_require__(3);class disabledBox_DisabledBox extends react.PureComponent{render(){return react.createElement(StyledWrapper,null,react.createElement(StyledCard,null,react.createElement(StyledTitle,null,Object(helpers.a)("whyBraveRewards")),react.createElement(StyledText,null,Object(helpers.a)("rewardsOffText5")),react.createElement(StyledTitle,null,Object(helpers.a)("rewardsOffText3")),react.createElement(StyledText,null,Object(helpers.a)("rewardsOffText4"))))}}__webpack_exports__.default=class settings_Settings extends react.PureComponent{constructor(props){super(props),this.doNothing=(()=>{console.log("nothing")}),this.onMainToggle=(()=>{this.setState({mainToggle:!this.state.mainToggle})}),this.state={mainToggle:!0}}render(){return react.createElement(settingsPage.a,null,react.createElement(gridList.b,{columns:3,customStyle:{gridGap:"24px"}},react.createElement(gridList.a,{size:2,customStyle:{justifyContent:"center",flexWrap:"wrap"}},react.createElement(mainToggle.a,{onTOSClick:this.doNothing,onPrivacyClick:this.doNothing,onToggle:this.onMainToggle,enabled:this.state.mainToggle}),this.state.mainToggle?null:react.createElement(disabledBox_DisabledBox,null),react.createElement(adsBox.default,null),react.createElement(contributeBox.default,null),react.createElement(donationsBox.default,null)),react.createElement(gridList.a,{size:1,customStyle:{justifyContent:"center",flexWrap:"wrap"}},react.createElement(grant.default,{type:"ugp"}),react.createElement(grant.default,{type:"ads",amount:"30.0"}),react.createElement(pageWallet.default,null))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),grantMobile=__webpack_require__(196),adsBoxMobile=__webpack_require__(271),contributeBoxMobile=__webpack_require__(300),donationsBoxMobile=__webpack_require__(272),mobileWalletPanel=__webpack_require__(273),style=__webpack_require__(21),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  background: ${p=>p.theme.color.subtleBackground};
  min-height: 100vh;
  width: 100%;
  padding-top: 35px;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
   max-width: 1000px;
   margin: 0 auto;
   padding: 40px 10px 0 10px;
`;class settingsPageMobile_SettingsPageMobile extends react.PureComponent{render(){const{id:id,children:children}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledContent,null,children))}}var mainToggleMobile=__webpack_require__(792),walletInfoHeader=__webpack_require__(793),fakeLocale=__webpack_require__(17);__webpack_exports__.default=class settingsMobile_SettingsMobile extends react.PureComponent{constructor(props){super(props),this.onMainToggle=(()=>{this.setState({mainToggle:!this.state.mainToggle})}),this.onToggleWallet=(()=>{this.setState({walletShown:!this.state.walletShown})}),this.state={mainToggle:!0,walletShown:!1}}render(){return react.createElement(settingsPageMobile_SettingsPageMobile,null,react.createElement(mainToggleMobile.a,{onToggle:this.onMainToggle,enabled:this.state.mainToggle}),this.state.mainToggle?null:react.createElement(style.a,null,react.createElement(style.b,null,fakeLocale.a.whyBraveRewards),react.createElement(style.g,null,fakeLocale.a.rewardsDisabledDescOne),react.createElement(style.g,null,fakeLocale.a.rewardsDisabledDescTwo)),react.createElement(grantMobile.default,{type:"ugp"}),react.createElement(grantMobile.default,{type:"ads",amount:"30.0"}),react.createElement(walletInfoHeader.a,{balance:"30.0",id:"mobile-wallet",onClick:this.onToggleWallet,converted:"7.00 USD"}),react.createElement(adsBoxMobile.default,{rewardsEnabled:this.state.mainToggle}),react.createElement(contributeBoxMobile.default,{rewardsEnabled:this.state.mainToggle}),react.createElement(donationsBoxMobile.default,{rewardsEnabled:this.state.mainToggle}),react.createElement(mobileWalletPanel.default,{toggleAction:this.onToggleWallet,visible:this.state.walletShown}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),list=__webpack_require__(72),nextContribution=__webpack_require__(496),tokens=__webpack_require__(22),tableContribute=__webpack_require__(82),style=__webpack_require__(21),controlWrapper=__webpack_require__(39),formControls_checkbox=__webpack_require__(106),styled_components_browser_esm=__webpack_require__(2);const StyledSelect=Object(styled_components_browser_esm.default)("select").withConfig({displayName:"StyledSelect"})`
  width: 100%;
  background: #fff;
  height: 34px;
  font-size: 14px;
  border: ${p=>p.floating?"none":"1px solid #DFDFE8"};
  text-align-last: ${p=>p.floating?"right":"left"};

  &:focus {
    outline: 0;
  }
`;var helpers=__webpack_require__(3);class selectMobile_SelectMobile extends react.PureComponent{constructor(){super(...arguments),this.onChange=(event=>{this.props.onChange&&this.props.onChange(event.target.value)}),this.generateOptions=(options=>options?react.createElement(react.Fragment,null,options.map(option=>react.createElement("option",{value:option.value,key:`k-${option.value}`},option.text))):null),this.generateAmountOptions=(amountOptions=>amountOptions?react.createElement(react.Fragment,null,amountOptions.map(amount=>react.createElement("option",{key:`k-${amount.value}`,value:amount.dataValue},amount.value," ",Object(helpers.a)("bat")," (",amount.converted," USD)"))):null)}render(){const{options:options,floating:floating,amountOptions:amountOptions,value:value}=this.props;return react.createElement(StyledSelect,{value:value,onChange:this.onChange,floating:floating},amountOptions?this.generateAmountOptions(amountOptions):this.generateOptions(options))}}var boxMobile=__webpack_require__(321),fakeLocale=__webpack_require__(17);const favicon=__webpack_require__(65),buzz=__webpack_require__(147),ddgo=__webpack_require__(148),guardian=__webpack_require__(101),wiki=__webpack_require__(149);__webpack_exports__.default=class contributeBoxMobile_ContributeBoxMobile extends react.Component{constructor(props){super(props),this.onContributeToggle=(()=>{this.setState({contributeToggle:!this.state.contributeToggle})}),this.onSitesShownToggle=(()=>{this.setState({allSitesShown:!this.state.allSitesShown})}),this.onSelectSettingChange=((key,value)=>{console.log(`${key} is now ${value}`)}),this.doNothing=(()=>{console.log("nothing")}),this.contributeSettingsChild=(()=>react.createElement(style.d,null,react.createElement(controlWrapper.a,{text:fakeLocale.a.contributionMonthly},react.createElement(selectMobile_SelectMobile,{onChange:this.onSelectSettingChange.bind(this,"contributionMonthly"),amountOptions:[{value:"10.0",dataValue:"10",converted:"4.00"},{value:"20.0",dataValue:"20",converted:"6.00"},{value:"40.0",dataValue:"40",converted:"12.00"},{value:"60.0",dataValue:"60",converted:"17.00"},{value:"100.0",dataValue:"100",converted:"30.00"}]})),react.createElement(controlWrapper.a,{text:fakeLocale.a.contributionMinTime},react.createElement(selectMobile_SelectMobile,{onChange:this.onSelectSettingChange.bind(this,"contributionMinTime"),options:[{value:"5",text:fakeLocale.a.contributionTime5},{value:"8",text:fakeLocale.a.contributionTime8},{value:"60",text:fakeLocale.a.contributionTime60}]})),react.createElement(controlWrapper.a,{text:fakeLocale.a.contributionMinVisits},react.createElement(selectMobile_SelectMobile,{onChange:this.onSelectSettingChange.bind(this,"contributionMinVisits"),options:[{value:"1",text:fakeLocale.a.contributionVisit1},{value:"5",text:fakeLocale.a.contributionVisit5},{value:"10",text:fakeLocale.a.contributionVisit10}]})),react.createElement(controlWrapper.a,{text:fakeLocale.a.contributionAllowed},react.createElement(formControls_checkbox.a,{value:{contributionNonVerified:!0,contributionVideos:!0},multiple:!0},react.createElement("div",{"data-key":"contributionNonVerified"},fakeLocale.a.contributionNonVerified),react.createElement("div",{"data-key":"contributionVideos"},fakeLocale.a.contributionVideos))))),this.state={allSitesShown:!1,contributeToggle:!0}}get contributeRows(){return[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",attention:40,onRemove:this.doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:this.doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:this.doNothing},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:this.doNothing},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:this.doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:this.doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:this.doNothing},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:this.doNothing},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:this.doNothing}]}render(){const prefix=this.state.allSitesShown?fakeLocale.a.contributionHideAll:fakeLocale.a.contributionSeeAll,shownRows=this.state.allSitesShown?this.contributeRows:this.contributeRows.slice(0,5),checked=this.props.rewardsEnabled&&this.state.contributeToggle;return react.createElement(boxMobile.a,{title:fakeLocale.a.contributionTitle,type:"contribute",description:fakeLocale.a.contributionDesc,toggle:!0,checked:checked,toggleAction:this.onContributeToggle,settingsChild:this.contributeSettingsChild()},react.createElement(list.a,{title:react.createElement(style.c,null,fakeLocale.a.contributionMonthly)},react.createElement(style.c,null,react.createElement(selectMobile_SelectMobile,{floating:!0,onChange:this.onSelectSettingChange.bind(this,"contributionMonthly"),amountOptions:[{value:"10.0",dataValue:"10",converted:"4.00"},{value:"20.0",dataValue:"20",converted:"6.00"},{value:"40.0",dataValue:"40",converted:"12.00"},{value:"60.0",dataValue:"60",converted:"17.00"},{value:"100.0",dataValue:"100",converted:"30.00"}]}))),react.createElement(list.a,{title:react.createElement(style.c,null,fakeLocale.a.contributionNextDate)},react.createElement(style.c,null,react.createElement(nextContribution.a,null,"July 25th"))),react.createElement(list.a,{title:react.createElement(style.c,null,fakeLocale.a.contributionSitesNum)},react.createElement(style.h,null,"Total  ",react.createElement(tokens.a,{value:"55",hideText:!0}))),react.createElement(style.c,null,react.createElement(tableContribute.a,{header:["Site Visited/Your Attention","Exclude"],rows:shownRows,allSites:!0,numSites:5,headerColor:!0,showRowAmount:!0,showRemove:!0,isMobile:!0})),react.createElement(style.f,null,react.createElement(style.e,{onClick:this.onSitesShownToggle},prefix," ",this.contributeRows.length," ",fakeLocale.a.contributionSitesSuffix)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),theme=__webpack_require__(1);const SiteRemovalNotification=Object(theme.b)("header").withConfig({displayName:"SiteRemovalNotification"})`
  font-family: ${p=>p.theme.fontFamily.heading};
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0,0,0,0.3);
  background-color: #fff;
  width: 500px;
  height: 100px;
  align-items: center;
  padding: 30px 60px;
  margin: 80px auto 0;
  display: flex;
  justify-content: space-between;
`,SiteRemovalText=Object(theme.b)("span").withConfig({displayName:"SiteRemovalText"})`
  box-sizing: border-box;
  user-select: none;
  font-size: 18px;
`,SiteRemovalAction=Object(theme.b)("a").withConfig({displayName:"SiteRemovalAction"})`
  font-size: 16px;
  cursor: pointer;
  color: #fb542b;
  width: ${p=>p.iconOnly&&"16px"};
  line-height: 1;
`;var icons_close=__webpack_require__(192),fakeLocale=__webpack_require__(41);__webpack_require__.d(__webpack_exports__,"default",function(){return siteRemovalNotification_TopSite});class siteRemovalNotification_TopSite extends react.PureComponent{render(){return react.createElement(SiteRemovalNotification,null,react.createElement(SiteRemovalText,null,Object(fakeLocale.a)("thumbRemoved")),react.createElement(SiteRemovalAction,null,Object(fakeLocale.a)("undoRemoved")),react.createElement(SiteRemovalAction,null,Object(fakeLocale.a)("restoreAll")),react.createElement(SiteRemovalAction,{iconOnly:!0,title:Object(fakeLocale.a)("close")},react.createElement(icons_close.a,null)))}}},,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/megaphone.8a0684e9.svg"},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledHero=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledHero"})`
  text-align: center;
  min-height: 610px;
  padding: 60px 0 25px 0;
  border-top-left-radius: ${p=>p.isMobile?0:35}px;
  border-top-right-radius: ${p=>p.isMobile?0:35}px;
  background: linear-gradient(#392DD1, #8C41DE);
  border-bottom-left-radius: 150% 120px;
  border-bottom-right-radius: 150% 120px;

  @media (max-width: 475px) {
    padding-top: 35px;
  }
`;class hero_Hero extends react.PureComponent{render(){const{id:id,isMobile:isMobile,children:children}=this.props;return react.createElement(StyledHero,{id:id,isMobile:isMobile},children)}}var buttonsIndicators_button=__webpack_require__(12);const StyledInfoCard=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledInfoCard"})`
  height: 290px;
  border-radius: 4px;
  text-align: center;
  padding: 31px 15px 15px;
  background: #fff;
  max-width: 275px;
  margin: 0 auto;
  box-shadow: 0 2 4px  rgba(0,0,0,.2);
`,StyledTitle=Object(styled_components_browser_esm.default)("strong").withConfig({displayName:"StyledTitle"})`
  color: #222326;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
`,StyledDesc=Object(styled_components_browser_esm.default)("p").withConfig({displayName:"StyledDesc"})`
  color: #686978;
  font-size: 16px;
  line-height: 22px;
  font-family: Muli, sans-serif;
  letter-spacing: 0.16px;
  margin: 10px 0 8px;
  font-weight: 400;
`,StyledFigure=Object(styled_components_browser_esm.default)("figure").withConfig({displayName:"StyledFigure"})`
  box-sizing: border-box;
  display: block;
  max-width: 100%;
  margin: 10px auto 20px;
  height: 80px;
`,StyledGrid=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledGrid"})`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
  }
`,StyledColumn=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledColumn"})`
  padding: 0 10px;
`;class infoCard_InfoCard extends react.PureComponent{getCards(items){return react.createElement(StyledGrid,null,items.map((item,index)=>react.createElement(StyledColumn,{key:`${index}`},react.createElement(StyledInfoCard,null,react.createElement(StyledFigure,null,item.icon),react.createElement(StyledTitle,null,item.title),react.createElement(StyledDesc,null,item.description)))))}render(){const{id:id,cards:cards}=this.props;return react.createElement("section",{id:id},cards?this.getCards(cards):null)}}var fc_logo_bat=__webpack_require__(158),loader=__webpack_require__(257),icons=__webpack_require__(9),fc_rewards_activate=__webpack_require__(422),fc_ads_megaphone=__webpack_require__(416),fc_rewards_send_tips=__webpack_require__(423),rewardsButton=__webpack_require__(799),rewards_alert=__webpack_require__(310),settingsPage=__webpack_require__(798),helpers=__webpack_require__(3),heading=__webpack_require__(32),centerTextBackground=__webpack_require__(472),centerTextBackground_default=__webpack_require__.n(centerTextBackground),colors=__webpack_require__(6);const StyledOptInSection=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledOptInSection"})`
  margin: 40px auto;
  max-width: 303px;

  @media (max-width: 410px) {
    margin: 40px 20px;
    max-width: unset;
  }
`,StyledOptInSecond=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledOptInSecond"})`
  max-width: 303px;
  margin: 0 auto;
`,StyledOptInInnerSection=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledOptInInnerSection"})`
  text-align: center;
`,StyledCenterSection=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledCenterSection"})`
  padding: 15px 0 0;
`,StyledCenterContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledCenterContent"})`
  margin: 0 auto;
  max-width: 692px;
  padding: 67px 0 20px;

  @media (max-width: 767px) {
    max-width: none;
    width: 100%;
    padding-top: 30px;
  }
`,StyledSection=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledSection"})`
  display: block;
`,StyledCenterInner=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledCenterInner"})`
  @media (max-width: 767px) {
    margin: 0 auto;
    width: 80%;
  }
`,StyledInfoContent=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledInfoContent"})`
  margin: 22px auto 0;
  max-width: 900px;
`,StyledTakeActionContent=Object(styled_components_browser_esm.default)("section").withConfig({displayName:"StyledTakeActionContent"})`
  margin: 0 auto;
  padding: 64px 0 79px;
  max-width: 500px;
  display: block;
`,StyledBackground=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledBackground"})`
  background: url(${centerTextBackground_default.a}) no-repeat top;

  @media (max-width: 980px) {
    background: #F8FAFF;
  }
`,StyledBatLogo=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledBatLogo"})`
  margin: 5px auto 0;
  height: 152px;

  @media (max-width: 460px) {
    height: 100px;
  }
`,StyledRewardsTitle=Object(styled_components_browser_esm.default)(heading.a).withConfig({displayName:"StyledRewardsTitle"})`
  font-weight: 500;
  color: #FFF;
  display: inline-block;
  margin: 17px 0 4px;

  @media (max-width: 360px) {
    font-size: 36px;
  }
`,StyledActionTitle=Object(styled_components_browser_esm.default)(heading.a).withConfig({displayName:"StyledActionTitle"})`
  color: #5C58C2;
  font-weight: normal;
  line-height: 28px;
  margin: 18px 0 30px;
`,StyledCenterTitle=Object(styled_components_browser_esm.default)(heading.a).withConfig({displayName:"StyledCenterTitle"})`
  color: #222326;
  font-weight: normal;
  text-align: left;
  line-height: 28px;
  padding: 7px 0 21px;
  margin: 0;
`,StyledSubTitle=Object(styled_components_browser_esm.default)(heading.a).withConfig({displayName:"StyledSubTitle"})`
  color: #5BC4FE;
  font-weight: 500;
  text-align: center;
  margin: 18px 0 7px;

  @media (max-width: 360px) {
    font-size: 22px;
  }
`,StyledTrademark=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTrademark"})`
  display: inline-block;
  vertical-align: text-top;
  margin-top: -25px;
  color: #FFF;
  font-size: 14px;
  font-weight: 300;
  opacity: 0.7;
`,StyledRewardsParagraph=Object(styled_components_browser_esm.default)("p").withConfig({displayName:"StyledRewardsParagraph"})`
  font-size: 16px;
  max-width: 375px;
  margin: 0 auto;
  line-height: 28px;
  color: #FFF;
`,StyledTeaserParagraph=Object(styled_components_browser_esm.default)("p").withConfig({displayName:"StyledTeaserParagraph"})`
  font-size: 16px;
  margin: 0 0 5px;
  line-height: 28px;
  color: #FFF;
  opacity: 0.5;
`,StyledCenterParagraph=Object(styled_components_browser_esm.default)("p").withConfig({displayName:"StyledCenterParagraph"})`
  font-size: 16px;
  line-height: 28px;
  color: #686978;
  letter-spacing: 0.16px;
  max-width: 475px;
  margin: 0 0 15px;
  font-weight: 400;
  font-family: Muli,sans-serif;
`,StyledAnchor=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledAnchor"})`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  color: #bf9fe3;
  height: 30px;
  overflow: hidden;
  outline: none;

  &:focus {
    outline: 0;
  }
`,StyledHeroInfo=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledHeroInfo"})`
  @media (max-width: 400px) {
    padding: 0 10px;
  }
`,StyledAlert=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledAlert"})`
  margin-bottom: 30px;
  border: 1px solid #F43405;
  border-radius: 4px;
  overflow: hidden;

   @media (max-width: 767px) {
    display: none;
  }
`,StyledAlertContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledAlertContent"})`
  display: flex;
  width: 100%;
`,StyledAlertLeft=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledAlertLeft"})`
  flex-basis: 70%;
  flex-grow: 1;
`,StyledTOSWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTOSWrapper"})`
  width: 325px;
  display: block;
  margin: ${p=>p.header?-15:20}px auto ${p=>p.header?15:0}px;
`,StyledServiceText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledServiceText"})`
  color: ${p=>p.header?"#fff":"rgba(0, 0, 0, 0.65)"};
  font-size: ${p=>p.header?14:12}px;
  font-family: Muli, sans-serif;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 18px;
  opacity: ${p=>p.header?.5:1};
`,StyledServiceLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledServiceLink"})`
  cursor: pointer;
  opacity: 1;
  color: ${p=>p.header?"#5BC4FE":colors.a.black};
  font-weight: 600;
`;__webpack_exports__.a=class welcomePage_WelcomePage extends react.PureComponent{constructor(props){super(props),this.scrollToCenter=(()=>{if(!this.centerTextSection)return;const centerTextSection=this.centerTextSection;centerTextSection&&window.scrollTo({behavior:"smooth",top:centerTextSection.offsetTop})}),this.refSet=(node=>{this.centerTextSection=node}),this.optInAction=(()=>{this.props.optInAction()}),this.hero=(()=>{const{onTOSClick:onTOSClick,onPrivacyClick:onPrivacyClick}=this.props;return react.createElement(hero_Hero,{id:"rewards-hero",isMobile:this.isTouchScreen},react.createElement(StyledSection,null,react.createElement(StyledBatLogo,null,react.createElement(fc_logo_bat.a,null)),react.createElement(StyledHeroInfo,null,react.createElement(StyledRewardsTitle,{level:2},Object(helpers.a)("braveRewardsTitle")),react.createElement(StyledTrademark,null,"TM"),react.createElement(StyledSubTitle,{level:4},Object(helpers.a)("braveRewardsSubTitle")),react.createElement(StyledRewardsParagraph,null,Object(helpers.a)("braveRewardsDesc")))),react.createElement(StyledOptInSection,null,this.props.creating?react.createElement(rewardsButton.a,{type:"opt-in",disabled:!0,testId:"optInAction",text:Object(helpers.a)("braveRewardsCreatingText"),icon:react.createElement(loader.a,null)}):react.createElement(rewardsButton.a,{type:"opt-in",onClick:this.optInAction,testId:"optInAction",text:Object(helpers.a)("braveRewardsOptInText")})),this.isTouchScreen?null:react.createElement(StyledTOSWrapper,{header:!0},react.createElement(StyledServiceText,{header:!0},Object(helpers.a)("serviceTextWelcome")," ",react.createElement(StyledServiceLink,{header:!0,onClick:onTOSClick},Object(helpers.a)("termsOfService"))," ",Object(helpers.a)("and")," ",react.createElement(StyledServiceLink,{header:!0,onClick:onPrivacyClick},Object(helpers.a)("privacyPolicy")),".")),react.createElement(StyledSection,null,react.createElement(StyledTeaserParagraph,null,Object(helpers.a)("braveRewardsTeaser")),react.createElement(StyledAnchor,{onClick:this.scrollToCenter},react.createElement(icons.ArrowDownIcon,null))))}),this.optInContent=(()=>{const{onPrivacyClick:onPrivacyClick,onTOSClick:onTOSClick}=this.props;return react.createElement(StyledOptInInnerSection,null,react.createElement(StyledActionTitle,{level:4},Object(helpers.a)("readyToTakePart")),react.createElement(StyledOptInSecond,null,this.props.creating?react.createElement(rewardsButton.a,{type:"cta-opt-in",disabled:!0,text:Object(helpers.a)("braveRewardsCreatingText"),icon:react.createElement(loader.a,null)}):react.createElement(rewardsButton.a,{type:"cta-opt-in",onClick:this.optInAction,text:Object(helpers.a)("readyToTakePartOptInText")})),this.isTouchScreen?null:react.createElement(StyledTOSWrapper,null,react.createElement(StyledServiceText,null,Object(helpers.a)("serviceTextReady")," ",react.createElement(StyledServiceLink,{onClick:onTOSClick},Object(helpers.a)("termsOfService"))," ",Object(helpers.a)("and")," ",react.createElement(StyledServiceLink,{onClick:onPrivacyClick},Object(helpers.a)("privacyPolicy")),".")))}),this.centerTextSection=null,this.isTouchScreen="ontouchstart"in window}get centerTextContent(){return react.createElement(StyledCenterContent,null,react.createElement(StyledCenterInner,null,react.createElement(StyledCenterTitle,{level:3},Object(helpers.a)("whyBraveRewards")),react.createElement(StyledCenterParagraph,null,Object(helpers.a)("whyBraveRewardsDesc1")),react.createElement(StyledCenterParagraph,null,Object(helpers.a)("whyBraveRewardsDesc2"))))}get infoCards(){return[{title:Object(helpers.a)("turnOnRewardsTitle"),description:Object(helpers.a)("turnOnRewardsDesc"),icon:react.createElement(fc_rewards_activate.a,null)},{title:Object(helpers.a)("braveAdsTitle"),description:Object(helpers.a)("braveAdsDesc"),icon:react.createElement(fc_ads_megaphone.a,null)},{title:Object(helpers.a)("braveContributeTitle"),description:Object(helpers.a)("braveContributeDesc"),icon:react.createElement(fc_rewards_send_tips.a,null)}]}get welcomePageContent(){return react.createElement(react.Fragment,null,this.props.onReTry?react.createElement(StyledAlert,null,react.createElement(rewards_alert.a,{type:"error"},react.createElement(StyledAlertContent,null,react.createElement(StyledAlertLeft,null,react.createElement("b",null,Object(helpers.a)("walletFailedTitle")),react.createElement("br",null),Object(helpers.a)("walletFailedText")),react.createElement(buttonsIndicators_button.a,{level:"primary",type:"accent",text:Object(helpers.a)("walletFailedButton"),onClick:this.props.onReTry})))):null,react.createElement(StyledBackground,null,react.createElement(StyledSection,null,this.hero()),react.createElement(StyledCenterSection,null,react.createElement(StyledCenterSection,{innerRef:this.refSet},this.centerTextContent),react.createElement(StyledInfoContent,null,react.createElement(infoCard_InfoCard,{id:"rewards-info",cards:this.infoCards})),react.createElement(StyledTakeActionContent,null,this.optInContent()))))}render(){const{id:id}=this.props;return this.isTouchScreen?this.welcomePageContent:react.createElement(settingsPage.a,{id:id},this.welcomePageContent)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  text-align: center;
  margin: 15px 0 0 -32px;
  width: 333px;
`,StyledDropArea=Object(styled_components_browser_esm.default)("img").withConfig({displayName:"StyledDropArea"})`
  width: 333px;
  height: 296px;
`,StyledDrag=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledDrag"})`
  display: flex;
  justify-content: center;
`,StyledImageWrap=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledImageWrap"})`
  flex-basis: 80px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  flex-basis: 130px;
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #686978;
  text-align: left;
  padding-left: 13px;
`,StyledImage=Object(styled_components_browser_esm.default)("img").withConfig({displayName:"StyledImage"})`
  width: 60px;
  height: 52px;
`;var helpers=__webpack_require__(3),bat=__webpack_require__(468),bat_default=__webpack_require__.n(bat);__webpack_require__.d(__webpack_exports__,"a",function(){return grantCaptcha_GrantCaptcha});class grantCaptcha_GrantCaptcha extends react.PureComponent{constructor(props){super(props),this.onCaptchaDrop=(event=>{if(event.preventDefault(),!this.captchaBox||!this.captchaDrag)return;const target=this.captchaBox.getBoundingClientRect(),captchaDrag=this.captchaDrag.getBoundingClientRect();let x=event.clientX-target.left-this.dndStartPosition.x+this.dndStartPosition.width/2,y=event.clientY-target.top-this.dndStartPosition.y+this.dndStartPosition.height/2-captchaDrag.height;if(this.props.isWindows){const dpr=window.devicePixelRatio,factor=dpr<=1?0:this.offset*dpr;x=Math.round(x+factor),y=Math.round(y+factor)}this.props.onSolution(x,y)}),this.onCaptchaDrag=(event=>{if(!event||!event.target)return;const target=event.target.getBoundingClientRect();this.dndStartPosition={x:event.clientX-target.left,y:event.clientY-target.top,width:target.width,height:target.height}}),this.refWrapper=(node=>{this.captchaBox=node}),this.refDrag=(node=>{this.captchaDrag=node}),this.captchaBox=null,this.captchaDrag=null,this.offset=5,this.dndStartPosition={x:0,y:0,width:0,height:0}}preventDefault(event){event.preventDefault()}render(){const{id:id,isPanel:isPanel,dropBgImage:dropBgImage,hint:hint}=this.props;return react.createElement(StyledWrapper,{id:id,innerRef:this.refWrapper},react.createElement(StyledDrag,{innerRef:this.refDrag},react.createElement(StyledImageWrap,null,react.createElement(StyledImage,{src:bat_default.a,onDragStart:this.onCaptchaDrag,draggable:!0})),isPanel?null:react.createElement(StyledText,null,Object(helpers.a)("dndCaptchaText1")," ",react.createElement("b",null,hint)," ",Object(helpers.a)("dndCaptchaText2"))),react.createElement(StyledDropArea,{src:dropBgImage,draggable:!1,onDrop:this.onCaptchaDrop,onDragOver:this.preventDefault}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),brave_default=__webpack_require__(36);const InputComponent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"InputComponent"})`
  background-color: #fff;
  min-height: auto;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid ${p=>p.disabled?"#E5E5EA":"#DFDFE8"};
  border-radius: 3px;
  padding: 8px 10px;

  &:focus-within {
    border-color: #A1A8F2;
  }
`,StyledIcon=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledIcon"})`
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  margin-right: 10px;
  color: #D1D1DB;
`,StyledInput=Object(styled_components_browser_esm.default)("input").withConfig({displayName:"StyledInput"})`
  display: inline-block;
  vertical-align: middle;
  min-height: auto;
  box-sizing: border-box;
  width: calc(100% - 30px);
  max-width: 100%;
  font-size: 14px;
  font-family: ${brave_default.a.fontFamily.body};
  border: none;
  color: ${p=>p.disabled?"#D1D1DB":"#686978"};
  outline: unset;

  &::placeholder {
    color: #B8B9C4;
    font-weight: normal;
    text-align: left;
    letter-spacing: 0;
  }
`;__webpack_require__.d(__webpack_exports__,"a",function(){return input_Input});class input_Input extends react.PureComponent{render(){const{testId:testId,icon:icon,onChange:onChange,value:value,disabled:disabled,type:type,placeholder:placeholder}=this.props;return react.createElement(InputComponent,{"data-test-id":testId,disabled:disabled},icon?react.createElement(StyledIcon,null,icon):null,react.createElement(StyledInput,{type:type,onChange:onChange,disabled:disabled,value:value,placeholder:placeholder}))}}input_Input.defaultProps={type:"text"}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  padding: 15px 38px 15px 19px;
  font-family: ${p=>p.theme.fontFamily.body};
  width: 100%;
  ${p=>{let color="#fff";if(p.bg)switch(p.type){case"error":color="#FFEEF1";break;case"success":color="#E7F6FF";break;case"warning":color="#FAF2DE"}return theme.a`
    --alert-wrapper-color: ${color};
  `}};
  background: var(--alert-wrapper-color);
`,StyledIcon=Object(theme.b)("span").withConfig({displayName:"StyledIcon"})`
  width: 40px;
  height: 40px;
  flex-basis: 40px;
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  flex-grow: 1;
  flex-basis: 50%;
  padding-left: 19px;
  font-family: ${p=>p.theme.fontFamily.body};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.3px;
  ${p=>{let color="#838391",bold="#4b4c5c";if(p.colored)switch(p.type){case"error":color=bold="#F36980";break;case"success":color=bold="#67D79D";break;case"warning":color=bold="#FF7900"}return theme.a`
    --alert-content-color: ${color};
    --alert-content-bold: ${bold};
  `}};
  color: var(--alert-content-color);

  b {
    font-weight: 600;
    color: var(--alert-content-bold);
  }
`,StyledClose=Object(theme.b)("div").withConfig({displayName:"StyledClose"})`
  width: 11px;
  height: 11px;
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
`,StyledError=Object(theme.b)("div").withConfig({displayName:"StyledError"})`
  color: #F43405;
`,StyledSuccess=Object(theme.b)("div").withConfig({displayName:"StyledSuccess"})`
  color: #1BBA6A;
`,StyledWarning=Object(theme.b)("div").withConfig({displayName:"StyledWarning"})`
  color: #FF7900;
`;var close_circle_o=__webpack_require__(191),check_circle=__webpack_require__(190),alert_circle=__webpack_require__(401),icons_close=__webpack_require__(192);__webpack_require__.d(__webpack_exports__,"a",function(){return alert_Alert});class alert_Alert extends react.PureComponent{get icon(){switch(this.props.type){case"error":return react.createElement(StyledError,null,react.createElement(close_circle_o.a,null));case"success":return react.createElement(StyledSuccess,null,react.createElement(check_circle.a,null));case"warning":return react.createElement(StyledWarning,null,react.createElement(alert_circle.a,null))}return null}render(){const{id:id,children:children,onClose:onClose,colored:colored,bg:bg,type:type}=this.props;return react.createElement(StyledWrapper,{id:id,type:type,bg:bg},react.createElement(StyledIcon,null,this.icon),react.createElement(StyledContent,{type:type,colored:colored},children),onClose?react.createElement(StyledClose,null,react.createElement(icons_close.a,null)):null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("button").withConfig({displayName:"StyledWrapper"})`
  user-select: none;
  font-family: ${p=>p.theme.fontFamily.body};
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  display: ${p=>p.isMobile?"block":"flex"};
  align-items: center;
  margin: ${p=>p.isMobile?"0 auto 8px auto":"0 0 8px 0"};
`,StyledAmount=Object(theme.b)("div").withConfig({displayName:"StyledAmount"})`
  opacity: 1;
  border-radius: 20px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: ${p=>p.selected?"rgba(255, 255, 255, 0.35)":"transparent"};
  vertical-align: baseline;
  padding: ${p=>"big"===p.type?"0 16px":"0 12px"};
  min-height: ${p=>"big"===p.type?40:32}px;
  min-width: ${p=>p.isMobile?"100px":"big"===p.type?"118px":"82px"};
  margin-right: ${p=>p.isMobile?0:12}px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${p=>p.isMobile?5:0}px;
`,StyledTokens=Object(theme.b)("div").withConfig({displayName:"StyledTokens"})`
  margin-left: 5px;
`,StyledNumber=theme.b.span.withConfig({displayName:"StyledNumber"})`
  display: flex;
`,StyledLogo=Object(theme.b)("div").withConfig({displayName:"StyledLogo"})`
  margin-right: 6px;
  width: ${p=>p.isMobile?20:23}px;
`,StyledConverted=Object(theme.b)("div").withConfig({displayName:"StyledConverted"})`
  vertical-align: baseline;
  opacity: ${p=>p.selected?1:.4};
  font-size: ${p=>"big"===p.type?"12px":"10px"};
  color: #ffffff;
  display: ${p=>p.isMobile?"block":"inline-block"};
  font-weight: 500;
`;var helpers=__webpack_require__(3),fc_logo_bat=__webpack_require__(158);__webpack_require__.d(__webpack_exports__,"a",function(){return amount_Amount});class amount_Amount extends react.PureComponent{constructor(){super(...arguments),this.getAboutText=(isMobile=>isMobile?"":Object(helpers.a)("about"))}render(){const{id:id,onSelect:onSelect,amount:amount,selected:selected,type:type,converted:converted,currency:currency,isMobile:isMobile}=this.props;return react.createElement(StyledWrapper,{id:id,onClick:onSelect.bind(this,amount),isMobile:isMobile,"data-test-id":"amount-wrapper"},react.createElement(StyledAmount,{selected:selected,type:type,isMobile:isMobile},react.createElement(StyledLogo,{isMobile:isMobile},react.createElement(fc_logo_bat.a,null)),react.createElement(StyledNumber,null,amount)," ",react.createElement(StyledTokens,null,"big"===type?"BAT":null)),react.createElement(StyledConverted,{selected:selected,type:type,isMobile:isMobile},this.getAboutText(isMobile)," ",converted," ",currency))}}amount_Amount.defaultProps={type:"small",currency:"USD",converted:0}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),helpers=__webpack_require__(3),styled_components_browser_esm=__webpack_require__(2);const StyledEnableTipsSection=Object(styled_components_browser_esm.default)("section")`
  background: #F5F5F9;
  display: block;
  width: 100%;
  padding: 10px 30px;
`,StyledEnableTipsInner=Object(styled_components_browser_esm.default)("div")`
  color: #838391;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
  position: relative;
`,StyledEnableTips=Object(styled_components_browser_esm.default)("span")`
  color: #4C54D2;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-right: 5px;
`,StyledText=Object(styled_components_browser_esm.default)("span")`
  margin-right: 5px;
`,StyledProviderImg=Object(styled_components_browser_esm.default)("span")`
  margin-right: 5px;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  margin-top: -3px;
  display: inline-block;
`,StyledProviderName=Object(styled_components_browser_esm.default)("span")`
  font-weight: 600;
  margin-right: 5px;
`,StyledToggleOuter=Object(styled_components_browser_esm.default)("div")`
  display: inline-block;
  vertical-align: middle;
  margin-top: 3px;
  text-align: right;
  position: absolute;
  right: 0px;
`,StyledToggleInner=Object(styled_components_browser_esm.default)("div")`
  float: right;
  margin-top: 2px;
`,StyledThumbsUpIcon=Object(styled_components_browser_esm.default)("span")`
  width: 20px;
  height: 20px;
  display: inline-block;
  margin-top: 3px;
  vertical-align: top;
`;var fc_logo_youtube=__webpack_require__(428),fc_logo_twitter=__webpack_require__(425),fc_logo_twitch=__webpack_require__(424),fc_logo_reddit=__webpack_require__(421),fc_logo_vimeo=__webpack_require__(427),fc_logo_github=__webpack_require__(426),thumbs_up=__webpack_require__(411),toggle=__webpack_require__(64);__webpack_require__.d(__webpack_exports__,"a",function(){return toggleTips_ToggleTips});class toggleTips_ToggleTips extends react.PureComponent{getProviderImg(provider){switch(provider){case"youtube":return react.createElement(fc_logo_youtube.a,null);case"twitter":return react.createElement(fc_logo_twitter.a,null);case"twitch":return react.createElement(fc_logo_twitch.a,null);case"reddit":return react.createElement(fc_logo_reddit.a,null);case"vimeo":return react.createElement(fc_logo_vimeo.a,null);case"github":return react.createElement(fc_logo_github.a,null)}}getProviderName(provider){return provider.toUpperCase()}getProviderText(provider){return`${this.getProviderName(provider)} ${Object(helpers.a)("for")}`}render(){const{id:id,provider:provider,onToggleTips:onToggleTips,tipsEnabled:tipsEnabled}=this.props;return provider?react.createElement(StyledEnableTipsSection,{id:id},react.createElement(StyledEnableTipsInner,null,react.createElement(StyledEnableTips,null,Object(helpers.a)("enableTips")),react.createElement(StyledText,null,Object(helpers.a)("on")),react.createElement(StyledProviderImg,null,this.getProviderImg(provider)),react.createElement(StyledProviderName,null,this.getProviderName(provider)),react.createElement(StyledText,null,Object(helpers.a)("for")),react.createElement(StyledThumbsUpIcon,null,react.createElement(thumbs_up.a,null)),react.createElement(StyledToggleOuter,null,react.createElement(StyledToggleInner,null,react.createElement(toggle.a,{size:"small",onToggle:onToggleTips,checked:tipsEnabled}))))):null}}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return SelectBox});var _theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_theme_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_carat_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(478),_carat_svg__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_carat_svg__WEBPACK_IMPORTED_MODULE_2__);const SelectBox=Object(_theme__WEBPACK_IMPORTED_MODULE_0__.b)("select").withConfig({displayName:"SelectBox"})`
  box-sizing: border-box;
  position: relative;
  -webkit-font-smoothing: antialiased;
  border-radius: 4px;
  display: flex;
  align-items: center;
  width: 100%;
  appearance: none;
  height: 32px;
  color: ${p=>p.theme.color.text};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  font-family: ${p=>p.theme.fontFamily.heading};
  border: 1px solid ${p=>p.theme.color.inputBorder};
  background: url(${_carat_svg__WEBPACK_IMPORTED_MODULE_2___default.a}) 97% / 16px no-repeat transparent;
  /* avoid text overflow w/ carat */
  -webkit-padding-start: 10px;
  -webkit-padding-end: 32px;
  outline-width: 2px;
  outline-color: ${p=>p.theme.color.brandBrave};
  cursor: pointer;

  > option {
    /* see https://github.com/brave/brave-browser/issues/4213 for info */
    color: ${_theme_colors__WEBPACK_IMPORTED_MODULE_1__.a.black};
  }

  ${p=>p.disabled?_theme__WEBPACK_IMPORTED_MODULE_0__.a`
      user-select: none;
      opacity: 0.6;
    `:""}
  ${p=>p.multiple?_theme__WEBPACK_IMPORTED_MODULE_0__.a`
      padding: 6px;
      background: none;
    `:""}
`},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  padding-top: 32px;
  text-align: center;
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 22px;
  font-weight: 300;
  line-height: 1.05;
  color: #999ea2;
  margin-top: 32px;
`,StyledContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledContent"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.57;
  color: #999ea2;
  margin: 36px auto 31px;
  text-align: left;
  max-width: 250px;
  width: 100%;

  b {
    font-weight: 600;
    color: #686978;
  }
`,StyledCenter=Object(styled_components_browser_esm.default)("div")`
  text-align: center;
`;var helpers=__webpack_require__(3),coins=react.createElement("svg",{width:"119",height:"85",viewBox:"0 0 119 85",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},react.createElement("defs",null,react.createElement("polygon",{id:"path-1",points:"0.105652174 0.182102628 0.105652174 82.4964518 80.2991739 82.4964518 80.2991739 0.182102628"})),react.createElement("g",{id:"settings",fill:"none",fillRule:"evenodd",opacity:"0.142"},react.createElement("g",{id:"5-wallet-final",transform:"translate(-386 -469)"},react.createElement("g",{id:"wallet",transform:"translate(260 209)"},react.createElement("g",{id:"blankslate-content",transform:"translate(54 261)"},react.createElement("g",{id:"icn-blankslate-statement",transform:"translate(72)"},react.createElement("path",{d:"M69.0767206,38.5123161 C68.9586949,36.552234 66.6197702,35.0180073 61.9304063,33.8479802 C62.0887335,33.5052885 62.1779724,33.1468243 62.1779724,32.7768892 L62.1779724,24.7515932 L62.1621397,24.7515932 C61.7447316,18.0640854 34.2461746,17.8676471 31.0925846,17.8676471 C27.9317978,17.8676471 0.433240809,18.0640854 0.0172720588,24.7515932 L0,24.7515932 L0,32.7768892 C0.00575735294,34.9563515 2.82829963,36.6640748 7.0282886,37.9359057 C6.97215441,38.1266087 6.93761029,38.3173116 6.92609559,38.5123161 L6.91026287,38.5123161 L6.91026287,46.5275752 C2.38354412,47.6933007 0.123783088,49.2045857 0.0115147059,51.1316891 L0,51.1316891 L0,59.1641545 C0.00575735294,60.6811749 1.37744669,61.9644766 3.62713235,63.0398692 C3.5422114,63.2692863 3.48607721,63.5101742 3.46880515,63.7510621 L3.45153309,63.7510621 L3.45153309,71.7835275 C3.46304779,75.5975863 12.0875625,77.9663176 21.6692371,79.0703873 C21.736886,79.0861597 21.8030956,79.1148369 21.8765018,79.1148369 C21.8995312,79.1148369 21.9168033,79.103366 21.9383934,79.0976306 C23.787943,79.3055398 25.6662794,79.4675656 27.5215864,79.5851419 C27.5604485,79.5908773 27.5949926,79.6080836 27.6338548,79.6080836 C27.6568842,79.6080836 27.6741563,79.5966127 27.6957463,79.5966127 C30.051943,79.7356968 32.3735956,79.8088235 34.5441176,79.8088235 C36.7146397,79.8088235 39.0362923,79.7356968 41.392489,79.5966127 C41.414079,79.5966127 41.4313511,79.6080836 41.4543805,79.6080836 C41.4932426,79.6080836 41.5277868,79.5851419 41.5666489,79.5851419 C43.4219559,79.4675656 45.3002923,79.3055398 47.1498419,79.0976306 C47.171432,79.0976306 47.188704,79.1091014 47.2117335,79.1091014 C47.2851397,79.1091014 47.3513493,79.0804243 47.4189982,79.0703873 C57.0006728,77.9605822 65.6251875,75.5918509 65.6367022,71.777792 L65.6367022,63.7510621 L65.6136728,63.7510621 C65.5345092,62.3458825 64.3312224,61.1686862 61.9534357,60.189362 C62.1002482,59.8581411 62.1779724,59.5168832 62.1779724,59.158419 L62.1779724,51.6579145 C66.3103125,50.3932529 69.0824779,48.701302 69.0882353,46.539046 L69.0882353,38.5123161 L69.0767206,38.5123161 Z M59.7498088,59.5340895 L59.3611875,59.8753474 C58.7537868,60.4073082 57.7476893,60.9392691 56.4206195,61.4540236 L56.4206195,55.9881618 C57.7923088,55.5121214 58.9567335,54.985896 59.8793493,54.4080517 L59.8793493,59.158419 C59.8793493,59.2759953 59.8332904,59.399307 59.7498088,59.5340895 Z M33.9986085,64.8594334 C33.8302059,64.8651688 33.6618033,64.8651688 33.4934007,64.8709042 C33.08175,64.8823751 32.6600239,64.8823751 32.2440551,64.8881105 L32.2440551,59.158419 C32.5592702,59.1526836 32.8744853,59.1469482 33.1940184,59.1412128 L33.375375,59.1354773 C34.5326029,59.1197049 35.6970276,59.0795569 36.8499375,59.0293719 L36.8499375,64.753328 C36.6023713,64.7705342 36.3548051,64.7820051 36.107239,64.793476 C35.4105993,64.8207192 34.7125202,64.8436609 33.9986085,64.8594334 Z M28.9724393,64.8766396 C28.4442022,64.8651688 27.9159651,64.8551318 27.3978033,64.8379255 L27.200614,64.8321901 C26.5773805,64.8092484 25.9527077,64.7877405 25.3352316,64.753328 L25.3352316,59.0293719 C26.4867022,59.0852923 27.6453695,59.1197049 28.8040368,59.1412128 C28.8659283,59.1412128 28.9278199,59.1412128 28.9897114,59.1412128 C29.3034871,59.1469482 29.6187022,59.1526836 29.9396746,59.158419 L29.9396746,64.8881105 C29.7151379,64.8881105 29.4891618,64.8881105 29.2703824,64.8823751 C29.1696287,64.8823751 29.0674357,64.8766396 28.9724393,64.8766396 Z M8.16968382,62.261285 C8.13513971,62.2498141 8.09627757,62.2383433 8.06317279,62.2268724 L8.06317279,56.6878839 C9.13691912,56.9789568 10.2941471,57.2427865 11.5147059,57.4836744 L11.5147059,63.0785833 C10.4582316,62.8549017 9.48523897,62.6197492 8.59716728,62.3788612 C8.45611213,62.3401471 8.30929963,62.2999991 8.16968382,62.261285 Z M32.4412445,71.7605858 C32.7622169,71.7663212 33.0759926,71.7720566 33.3912077,71.777792 L33.3912077,77.5074835 C31.800739,77.4960126 30.2649651,77.4515631 28.7867647,77.3784364 L28.7867647,71.6487449 C29.9396746,71.7046653 31.0969026,71.737644 32.2613272,71.7605858 C32.3232187,71.7605858 32.3793529,71.7605858 32.4412445,71.7605858 Z M36.8269081,71.7605858 C37.9913327,71.737644 39.1485607,71.6989299 40.3014706,71.6487449 L40.3014706,77.372701 C38.8232702,77.4458277 37.2874963,77.4960126 35.6970276,77.5074835 L35.6970276,71.7720566 C36.0122426,71.7720566 36.3260184,71.7663212 36.6469908,71.7605858 C36.7088824,71.7605858 36.7650165,71.7605858 36.8269081,71.7605858 Z M46.0588235,71.2400958 L46.0588235,76.9353747 C44.9505331,77.0529509 43.7990625,77.1547547 42.6072904,77.2379184 L42.6072904,71.5139624 C43.7702757,71.4408357 44.9231857,71.3462012 46.0588235,71.2400958 Z M48.3646434,70.9934724 C49.5506581,70.847219 50.703568,70.6851932 51.8161765,70.5059611 L51.8161765,76.141018 C50.7309154,76.3302871 49.5780055,76.5052176 48.3646434,76.6672435 L48.3646434,70.9934724 Z M54.1219963,70.097312 C55.3411158,69.856424 56.4997831,69.5925944 57.5735294,69.3072569 L57.5735294,74.8462454 C56.5501599,75.1430538 55.3914926,75.4298251 54.1219963,75.6979563 L54.1219963,70.097312 Z M14.966239,70.097312 L14.966239,75.6979563 C13.6967426,75.4298251 12.5380754,75.1430538 11.5147059,74.8462454 L11.5147059,69.3072569 C12.5884522,69.5925944 13.7471195,69.8621595 14.966239,70.097312 Z M17.2720588,70.5059611 C18.3846673,70.6909286 19.5375772,70.8529545 20.7235919,70.9934724 L20.7235919,76.6672435 C19.5102298,76.5052176 18.3573199,76.3302871 17.2720588,76.141018 L17.2720588,70.5059611 Z M23.0294118,71.2400958 C24.1650496,71.3462012 25.3179596,71.4408357 26.4809449,71.5196978 L26.4809449,77.2379184 C25.2891728,77.1547547 24.1377022,77.0529509 23.0294118,76.9353747 L23.0294118,71.2400958 Z M20.1737647,64.3776575 C20.055739,64.3676205 19.9377132,64.3561497 19.8240055,64.3446788 C19.7405239,64.3332079 19.6556029,64.3274725 19.5778787,64.3174355 L19.5778787,58.6207228 C20.7077592,58.7325636 21.8606691,58.8214627 23.0294118,58.9003248 L23.0294118,64.6185454 C22.0621765,64.5468526 21.1064559,64.4679905 20.1737647,64.3776575 Z M17.2720588,58.3740994 L17.2720588,64.0478705 C16.0572574,63.8858446 14.9043474,63.712348 13.8205257,63.521645 L13.8205257,57.8865881 C14.9331342,58.0715556 16.0860441,58.2335815 17.2720588,58.3740994 Z M39.9186066,64.562625 C39.6667224,64.5798313 39.4076415,64.602773 39.1485607,64.6185454 L39.1485607,58.9003248 C40.3187426,58.8214627 41.4702132,58.7325636 42.6072904,58.6207228 L42.6072904,64.3174355 C41.8919393,64.3891284 41.1679522,64.462255 40.4194963,64.5239109 C40.2510937,64.5353817 40.0826912,64.552588 39.9186066,64.562625 Z M44.9059136,64.0478705 L44.9059136,58.3740994 C46.0919283,58.2335815 47.2448382,58.0715556 48.3646434,57.8865881 L48.3646434,63.521645 C47.2793824,63.712348 46.1264724,63.8915801 44.9059136,64.0478705 Z M50.6632665,57.477939 C51.8895827,57.2427865 53.0424926,56.9732214 54.1219963,56.6878839 L54.1219963,62.2268724 C53.0928695,62.5251146 51.9399596,62.8104521 50.6632665,63.0785833 L50.6632665,57.477939 Z M34.9212243,52.2414942 C34.0547426,52.2185525 33.2055331,52.1855738 32.3735956,52.1454258 C32.3289761,52.1396904 32.2843566,52.1396904 32.2382978,52.1396904 L32.2382978,46.4099989 C33.3969651,46.4659193 34.5556324,46.5003319 35.7128603,46.5218398 C35.7747518,46.5218398 35.8366434,46.5218398 35.8942169,46.5275752 C36.21375,46.5333106 36.5289651,46.5333106 36.8441801,46.539046 L36.8441801,52.2687375 C36.2871562,52.2630021 35.7186176,52.2572666 35.1745478,52.2472296 C35.0896268,52.2414942 35.0047059,52.2414942 34.9212243,52.2414942 Z M8.06317279,35.8467765 L8.06317279,30.307788 C9.13691912,30.5931255 10.2941471,30.8569551 11.5147059,31.097843 L11.5147059,36.6984874 C11.3736507,36.6640748 11.2282776,36.6368315 11.0872224,36.6081544 C10.4740643,36.4748057 9.87817831,36.3342878 9.30532169,36.182299 C8.87208088,36.0761936 8.45611213,35.9586173 8.06317279,35.8467765 Z M28.9897114,32.7611168 C29.3034871,32.7668522 29.6187022,32.7725877 29.9396746,32.7725877 L29.9396746,38.5022791 C28.388068,38.4850728 26.8465368,38.4463587 25.3352316,38.373232 L25.3352316,32.649276 C26.4867022,32.699461 27.6453695,32.7381751 28.8040368,32.7611168 C28.8659283,32.7611168 28.9278199,32.7611168 28.9897114,32.7611168 Z M33.375375,32.7553814 C34.5326029,32.7324397 35.6912702,32.699461 36.8499375,32.649276 L36.8499375,38.3674966 C36.6527482,38.3789674 36.4613162,38.3890044 36.2641268,38.4004753 C36.2540515,38.4004753 36.2367794,38.4004753 36.2195074,38.4062107 C35.443704,38.4406233 34.656386,38.4621311 33.8575533,38.4793374 C33.7352096,38.4850728 33.6114265,38.4850728 33.4876434,38.4908083 C33.0759926,38.4965437 32.6557059,38.5022791 32.2382978,38.5022791 L32.2382978,32.7725877 C32.5592702,32.7725877 32.8744853,32.7668522 33.1897004,32.7611168 L33.375375,32.7553814 Z M59.614511,33.3317918 L59.5814063,33.3260564 L59.1596801,33.6515418 C58.5522794,34.1218468 57.6181489,34.5978873 56.4206195,35.0624569 L56.4206195,29.6023305 C57.7923088,29.1305916 58.9567335,28.6043662 59.8793493,28.0279558 L59.8793493,32.7725877 C59.8793493,32.9460843 59.7829136,33.1353534 59.614511,33.3317918 Z M44.9059136,37.6563037 L44.9059136,31.988268 C46.0919283,31.8477501 47.2448382,31.6857243 48.3646434,31.5064922 L48.3646434,37.1300782 C47.2678676,37.3193473 46.1207151,37.4985794 44.9059136,37.6563037 Z M50.6632665,36.6870165 L50.6632665,31.097843 C51.8895827,30.8569551 53.0424926,30.5931255 54.1219963,30.307788 L54.1219963,35.8353056 C53.0871121,36.132114 51.9226875,36.4174515 50.6632665,36.6870165 Z M42.6072904,32.239193 L42.6072904,37.9301703 C41.4932426,38.0420111 40.3403327,38.1495504 39.1485607,38.2327141 L39.1485607,32.5202289 C40.3187426,32.4413668 41.4702132,32.3467322 42.6072904,32.239193 Z M19.5778787,37.9301703 L19.5778787,32.239193 C20.7077592,32.3467322 21.8606691,32.4413668 23.0294118,32.5202289 L23.0294118,38.2269786 C21.8606691,38.1438149 20.7020018,38.0477465 19.5778787,37.9301703 Z M17.2720588,31.988268 L17.2720588,37.6563037 C17.0417647,37.6276265 16.8057132,37.6061187 16.5811765,37.5717061 C16.434364,37.5544998 16.2933088,37.532992 16.1479357,37.5100503 C15.4844007,37.4154157 14.8323805,37.3136119 14.196193,37.2075065 C14.0666526,37.1859987 13.9443088,37.1630569 13.8205257,37.1401152 L13.8205257,31.5064922 C14.9331342,31.6857243 16.0860441,31.8477501 17.2720588,31.988268 Z M29.6532463,51.9834 C29.4949191,51.9661937 29.3437886,51.9547229 29.1854614,51.9446859 C28.4499596,51.8887655 27.7302904,51.8271096 27.026454,51.7539829 C26.8753235,51.7425121 26.7227537,51.7253058 26.5773805,51.7095334 C26.5428364,51.7095334 26.515489,51.703798 26.4809449,51.6980625 L26.4809449,46.0013498 C27.6180221,46.1131906 28.7694926,46.2035236 29.9396746,46.2809518 L29.9396746,52.0006063 C29.843239,51.9948709 29.7482426,51.9891354 29.6532463,51.9834 Z M22.0449044,51.1259537 C21.5900735,51.0542609 21.1625901,50.9753987 20.7235919,50.8965366 L20.7235919,45.2729506 C21.8433971,45.4521826 22.996307,45.6156423 24.1823217,45.7547264 L24.1823217,51.4284975 C23.4741673,51.3395983 22.7876029,51.2377945 22.124068,51.1374245 C22.0967206,51.1316891 22.0736912,51.1259537 22.0449044,51.1259537 Z M18.4249688,44.8643014 L18.4249688,50.4549087 C17.1482757,50.1796083 15.9953658,49.8885353 14.966239,49.591727 L14.966239,44.0685109 C16.0457426,44.3610177 17.1986526,44.6234135 18.4249688,44.8643014 Z M12.6676158,43.3687888 L12.6676158,48.8188782 C10.8569283,48.1248916 9.68674632,47.4122648 9.31107904,46.779934 L9.23191544,46.6508869 C9.22615809,46.6121727 9.21464338,46.5777602 9.20888603,46.539046 L9.20888603,41.7901126 C10.1315018,42.366523 11.2959265,42.8927484 12.6676158,43.3687888 Z M40.2841985,46.5218398 C41.4428658,46.5003319 42.6015331,46.4659193 43.7530037,46.4099989 L43.7530037,52.133955 C42.2416985,52.2070817 40.7059246,52.2472296 39.1485607,52.2630021 L39.1485607,46.539046 C39.4695331,46.5333106 39.7847482,46.5333106 40.0985239,46.5275752 L40.2841985,46.5218398 Z M55.1611985,50.9252138 C54.6559908,51.0083774 54.1493438,51.0987104 53.626864,51.1761387 C53.3231636,51.2220221 53.0137059,51.2664717 52.7100055,51.3109212 C52.4178199,51.3510692 52.1141195,51.3840479 51.8161765,51.422762 L51.8161765,45.7547264 C53.0021912,45.6156423 54.1551011,45.4521826 55.2734669,45.2729506 L55.2734669,50.902272 C55.2346048,50.9080075 55.2015,50.9194783 55.1611985,50.9252138 Z M47.3686213,51.9045379 C46.9353805,51.9389505 46.4920643,51.9604583 46.0588235,51.9948709 L46.0588235,46.2809518 C47.2275662,46.2035236 48.3804761,46.1131906 49.5103566,46.0013498 L49.5103566,51.6923271 C48.8425037,51.7654538 48.1789688,51.8314112 47.4866471,51.893067 C47.4477849,51.893067 47.4089228,51.8988025 47.3686213,51.9045379 Z M60.5256121,49.7537528 C59.9513162,49.911477 59.3439154,50.062032 58.7264393,50.2082854 C58.440011,50.2756767 58.146386,50.3373325 57.848443,50.4032899 C57.759204,50.4204962 57.6627684,50.4434379 57.5735294,50.4592103 L57.5735294,44.8643014 C58.7998456,44.6234135 59.9513162,44.3610177 61.0308199,44.0685109 L61.0308199,49.6146687 C60.8624173,49.6591183 60.6940147,49.7035678 60.5256121,49.7537528 Z M66.7723401,38.5911782 C66.6643897,39.3697624 64.8940037,40.4064408 61.7346562,41.3800296 C57.6584504,42.6303526 51.282182,43.777438 43.2031765,44.1359022 C42.7915257,44.1531085 42.375557,44.1703147 41.9595882,44.1860872 C41.6112684,44.197558 41.2687059,44.2032934 40.9146287,44.2147643 C39.9646654,44.237706 38.9974301,44.247743 37.9956507,44.247743 C37.001068,44.247743 36.0338327,44.237706 35.0781121,44.2147643 C34.7297923,44.2032934 34.3872298,44.1918226 34.0374706,44.1817856 C33.6157445,44.1703147 33.2055331,44.1531085 32.7895643,44.1359022 C24.7163162,43.777438 18.3400478,42.6303526 14.2638419,41.375728 C11.1260846,40.4121763 9.36145588,39.3812333 9.22615809,38.6083845 C9.23191544,38.5854428 9.23191544,38.5682365 9.2491875,38.5409933 C9.32691176,38.5581995 9.41183272,38.573972 9.49099632,38.5969137 C9.94006985,38.7030191 10.4064154,38.8048229 10.8742004,38.9051929 C13.1627482,39.3927041 15.6974228,39.7956179 18.396182,40.1038971 C18.4076967,40.1038971 18.413454,40.1096325 18.4249687,40.1096325 L18.4307261,40.1096325 C20.268761,40.3161079 22.1802022,40.4795675 24.1377022,40.5971438 C24.1535349,40.5971438 24.1650496,40.6071808 24.1823217,40.6071808 C24.188079,40.6071808 24.1938364,40.6014454 24.2039118,40.6014454 C25.6159026,40.6803075 27.0437261,40.7419633 28.4888217,40.7763759 C29.371136,40.7978837 30.243375,40.8093546 31.0925846,40.8093546 C31.6942279,40.8093546 32.311704,40.8036192 32.9421342,40.7921483 C41.307568,40.6631012 49.0612831,39.6723062 54.4530441,38.1380795 C54.7063676,38.0649528 54.9481765,37.9918261 55.1842279,37.9186994 C55.3296011,37.8742499 55.482171,37.8355357 55.6232261,37.7910862 C56.0391949,37.6563037 56.4378915,37.5157857 56.8250735,37.3752677 C56.8927224,37.3537599 56.954614,37.3250828 57.0222629,37.3035749 C57.3489926,37.1802632 57.6627684,37.0512161 57.9621507,36.922169 C58.0456324,36.8834549 58.1363107,36.8433069 58.2197923,36.8103282 C58.5407647,36.6640748 58.8502224,36.5192553 59.1366507,36.3672665 C59.2604338,36.2998752 59.3727022,36.2281824 59.4964853,36.1607911 C59.6317831,36.081929 59.7713989,35.9987653 59.9009393,35.9199032 C59.9743456,35.8754536 60.0592665,35.8295702 60.1254761,35.7851206 C65.2811857,36.8949257 66.6427996,38.1151378 66.7723401,38.5911782 Z M31.0925846,20.1646855 C50.0788952,20.1646855 59.6821599,23.1385044 59.8620772,24.8462277 C59.7210221,25.6248119 57.950636,26.6500195 54.8243934,27.6135712 C50.7481875,28.8681958 44.3719191,30.0167151 36.298671,30.3694438 C35.8827022,30.3852162 35.4724908,30.4024225 35.0507647,30.4196288 C34.7010055,30.4310996 34.358443,30.4425705 34.0101232,30.4468721 C33.0544026,30.4698138 32.0871673,30.4870201 31.0925846,30.4870201 C30.0908051,30.4870201 29.1235699,30.4698138 28.1736066,30.4468721 C27.8195294,30.4425705 27.4769669,30.4310996 27.1286471,30.4196288 C26.706921,30.4024225 26.2967096,30.3852162 25.8850588,30.3694438 C17.8060533,30.0167151 11.4297849,28.8681958 7.35357904,27.6135712 C4.22877574,26.6500195 2.45695037,25.6248119 2.32165257,24.8462277 C2.50156985,23.1385044 12.1048346,20.1646855 31.0925846,20.1646855 Z M2.30581985,32.7768892 L2.30581985,28.0279558 C3.22123897,28.6043662 4.3856636,29.1305916 5.75735294,29.6023305 L5.75735294,35.0968694 C3.51918199,34.2623648 2.30581985,33.4221248 2.30581985,32.7768892 Z M7.88325551,48.651117 C7.89908824,48.6668894 7.92211765,48.6840957 7.94514706,48.701302 C9.51834375,50.2857137 12.7798842,51.5346029 16.8445754,52.4651759 C16.941011,52.4823821 17.0360074,52.50389 17.1310037,52.5268317 C17.4289467,52.594223 17.7326471,52.6616142 18.0421048,52.7232701 C21.7699908,53.5118913 26.2290607,54.0840001 31.0810699,54.3693376 C31.0868272,54.3693376 31.0868272,54.3693376 31.0868272,54.3693376 C31.0925846,54.3693376 31.0925846,54.3693376 31.0925846,54.3693376 C32.6557059,54.4596706 34.2461746,54.5198925 35.8769449,54.5485697 C36.596614,54.565776 37.3047684,54.5772468 37.9956507,54.5772468 C38.7944835,54.5772468 39.6105882,54.565776 40.4367684,54.5428343 C41.9437555,54.515591 43.4277132,54.4539351 44.8900809,54.3693376 C44.8943989,54.3693376 44.9001562,54.3693376 44.9059136,54.3693376 C44.9174283,54.3693376 44.9231857,54.3636022 44.9347004,54.3636022 C49.8039816,54.0782647 54.3681232,53.5018543 58.231307,52.6716512 C57.3936121,53.1032421 56.2464596,53.5577747 54.8243934,53.9936671 C50.5236507,55.3214185 43.65225,56.5258581 34.9269816,56.8054602 C34.6679007,56.8111956 34.4088199,56.8226664 34.145421,56.8284019 C33.8633107,56.8341373 33.5768824,56.8398727 33.290454,56.8456081 C32.5650276,56.8556451 31.8396011,56.867116 31.0925846,56.867116 C30.0908051,56.867116 29.1235699,56.8556451 28.1736066,56.8341373 C27.8195294,56.8226664 27.4769669,56.8111956 27.1286471,56.7997247 C26.706921,56.7896877 26.2967096,56.7724815 25.8850588,56.7552752 C17.8060533,56.396811 11.4297849,55.2482918 7.35357904,53.9936671 C4.18847426,53.0200784 2.41808824,51.9834 2.31589522,51.2048158 C2.44543566,50.7732249 3.60986029,49.692097 7.88325551,48.651117 Z M2.30581985,59.158419 L2.30581985,54.4080517 C3.22123897,54.985896 4.3856636,55.5121214 5.75735294,55.9881618 L5.75735294,61.4540236 L5.09957537,61.2030987 L5.08806066,61.2131357 C3.27737316,60.4689641 2.30581985,59.7348294 2.30581985,59.158419 Z M5.75735294,71.777792 L5.75735294,67.0274247 C6.67996875,67.6038351 7.84295404,68.1314944 9.20888603,68.6075348 L9.20888603,74.0963384 C6.97215441,73.2618337 5.75735294,72.4215937 5.75735294,71.777792 Z M59.8793493,74.0963384 L59.8793493,68.6075348 C61.2452813,68.1314944 62.4082665,67.6038351 63.3308824,67.0274247 L63.3308824,71.7720566 C63.3308824,72.4215937 62.1160809,73.2618337 59.8793493,74.0963384 Z M63.3136103,63.8399612 C63.1898272,64.6142439 61.4194412,65.643753 58.2759265,66.6130401 C54.2054779,67.8676648 47.8292096,69.016184 39.750204,69.3746482 C39.3342353,69.3918545 38.9240239,69.4076269 38.5022978,69.4190977 C38.1597353,69.4305686 37.8114154,69.4420394 37.4616562,69.4535103 C36.5059357,69.4692827 35.5387004,69.486489 34.5441176,69.486489 C33.5495349,69.486489 32.5765423,69.4692827 31.626579,69.4477749 C31.2768199,69.4420394 30.9342574,69.4305686 30.5916949,69.4190977 C30.1699687,69.4018915 29.754,69.386119 29.3380312,69.3689127 C21.2590257,69.016184 14.8827574,67.8676648 10.8123088,66.6130401 C7.76522978,65.6781655 6.00491912,64.6802013 5.78613971,63.9130879 C6.12870221,64.0306642 6.48277941,64.1482404 6.84837132,64.2600813 C6.88723346,64.2715521 6.92177757,64.283023 6.96063971,64.2944938 C7.27009743,64.3891284 7.58963051,64.4794613 7.91636029,64.5683604 C8.04014338,64.602773 8.16392647,64.6414871 8.28770956,64.6701643 C8.47338419,64.7203493 8.65905882,64.7705342 8.84905147,64.8149838 C13.0432831,65.8846409 18.396182,66.6474527 24.1765643,66.9887106 C24.1765643,66.9887106 24.1765643,66.9887106 24.1823217,66.9887106 C25.9699798,67.0890806 27.792182,67.1564718 29.6359743,67.1794135 C30.1253493,67.1894505 30.6147243,67.1894505 31.0925846,67.1894505 C31.7215754,67.1894505 32.3735956,67.185149 33.0313732,67.1736781 C34.7125202,67.145001 36.3720772,67.0833451 37.9913327,66.9887106 C37.9956507,66.9887106 37.9956507,66.9887106 38.0014081,66.9887106 C38.0071654,66.9887106 38.0071654,66.9887106 38.0129228,66.9887106 C39.9862555,66.8653989 41.8976967,66.6976377 43.737171,66.4897285 C43.7429283,66.4897285 43.7486857,66.4897285 43.758761,66.4897285 C43.7817904,66.4897285 43.8048199,66.4782576 43.8264099,66.4782576 C45.8731489,66.2431051 47.8133768,65.9520322 49.6125496,65.6165097 C49.9838989,65.5491184 50.3480515,65.4817272 50.707886,65.4086005 C50.792807,65.3928281 50.8719706,65.3756218 50.9496949,65.3584155 C54.3522904,64.6644288 57.2928585,63.762533 59.316568,62.6469924 C59.423079,62.5853366 59.5295901,62.5251146 59.6317831,62.4634588 C59.7613235,62.3903321 59.8836673,62.31147 60.0031324,62.2326078 C60.1154007,62.160915 60.2391838,62.0935237 60.3399375,62.0203971 C62.6169706,62.8262245 63.2416434,63.5488883 63.3136103,63.8399612 Z M63.3308824,48.8575924 L63.3308824,43.3687888 C64.7025717,42.8927484 65.8669963,42.366523 66.7824154,41.7901126 L66.7824154,46.539046 C66.7824154,47.1828477 65.5690533,48.0230877 63.3308824,48.8575924 Z",id:"coins",fill:"#000"}),react.createElement("ellipse",{id:"Oval-2",fill:"#A2A5A9",cx:"30.375",cy:"25.015",rx:"26.801",ry:"4.765"}),react.createElement("ellipse",{id:"Oval",stroke:"#979797",fill:"#CBD2D7",cx:"78.618",cy:"40.5",rx:"39.309",ry:"40.5"}),react.createElement("g",{id:"coin",transform:"translate(38.118 .882)"},react.createElement("g",{id:"Group-3"},react.createElement("mask",{id:"mask-2",fill:"#fff"},react.createElement("use",{xlinkHref:"#path-1"})),react.createElement("path",{d:"M44.3721522,0.182102628 C42.9352826,0.182102628 41.5177826,0.29209637 40.1284565,0.480150188 C38.6704565,0.286774093 37.2881739,0.182102628 35.9182174,0.182102628 C25.5537391,0.182102628 16.1982391,5.24713705 9.63723913,13.3281289 C9.56856522,13.3902222 9.51926087,13.4594118 9.46467391,13.5286014 C7.37452174,16.1418398 5.57843478,19.0673185 4.12747826,22.2269775 C4.08521739,22.2961671 4.05880435,22.3653567 4.03063043,22.4416427 C3.02693478,24.6521621 2.19404348,26.9744493 1.54780435,29.3925375 C1.48617391,29.5238204 1.458,29.6763924 1.43686957,29.8289643 C0.508891304,33.4871433 0,37.3475688 0,41.3392772 C0,47.5911796 1.23084783,53.5148748 3.41256522,58.8318304 C3.43193478,58.8868273 3.45306522,58.9418242 3.48123913,58.9897247 C4.78780435,62.1440613 6.43773913,65.067766 8.37117391,67.7147121 C8.41871739,67.7839018 8.46097826,67.8548655 8.5226087,67.9098623 C10.4824565,70.5568085 12.7258043,72.9198999 15.201587,74.9299468 C15.2702609,75.0062328 15.3530217,75.0612297 15.4428261,75.1233229 C21.2536957,79.7661233 28.3112609,82.4964518 35.9182174,82.4964518 C37.2881739,82.4964518 38.6704565,82.4006508 40.1284565,82.1984043 C41.5177826,82.3935544 42.9352826,82.4964518 44.3721522,82.4964518 C64.1819348,82.4964518 80.2991739,64.0352441 80.2991739,41.3392772 C80.2991739,18.6433104 64.1819348,0.182102628 44.3721522,0.182102628 Z M29.5016087,3.8899562 C29.0332174,4.13832916 28.5736304,4.38847622 28.1193261,4.6581383 C27.864,4.80361389 27.6033913,4.94908949 27.3551087,5.10166145 C26.9624348,5.34471214 26.5856087,5.60195557 26.1999783,5.85742491 L23.49,5.85742491 C25.5466957,4.88699625 27.6984783,4.12591051 29.9418261,3.64690551 C29.7903913,3.72319149 29.646,3.81367021 29.5016087,3.8899562 Z M15.2984348,65.470485 L10.2482609,65.470485 C9.00332609,63.7034887 7.90278261,61.7963392 6.93958696,59.7951627 L12.2785435,59.7951627 C12.4986522,60.2936827 12.7258043,60.7922028 12.9652826,61.2836264 C13.0691739,61.4929693 13.1713043,61.7005382 13.2822391,61.9152034 C13.5710217,62.482913 13.8668478,63.0453004 14.1838043,63.5988173 C14.3000217,63.7992897 14.4109565,64.0086327 14.5271739,64.2162015 C14.7754565,64.6384355 15.0360652,65.0535732 15.2984348,65.470485 Z M6.29334783,24.3133104 L11.6868913,24.3133104 C11.4386087,24.9289205 11.204413,25.5604975 10.9843043,26.1903004 C10.9226739,26.3712578 10.8610435,26.5433448 10.799413,26.7172059 C10.6004348,27.3274937 10.4067391,27.9431039 10.2288913,28.5675845 L4.73321739,28.5675845 C5.17871739,27.1057322 5.70169565,25.684684 6.29334783,24.3133104 Z M2.82091304,41.3392772 C2.82091304,40.3830413 2.86845652,39.4409981 2.93008696,38.5060513 L8.54373913,38.5060513 C8.54373913,38.5255663 8.54373913,38.5468554 8.54373913,38.5681446 C8.4873913,39.4888986 8.45393478,40.4114268 8.45393478,41.3392772 C8.45393478,41.8182822 8.46802174,42.2884168 8.48034783,42.7603254 L2.8755,42.7603254 C2.85436957,42.2884168 2.82091304,41.8182822 2.82091304,41.3392772 Z M8.64586957,45.6024218 C8.69517391,46.1967428 8.76384783,46.7875156 8.84484783,47.3818367 C8.84484783,47.4244149 8.8518913,47.465219 8.85893478,47.5077972 C8.96282609,48.2972685 9.08608696,49.0796433 9.23047826,49.8566959 L3.67317391,49.8566959 C3.39847826,48.4640332 3.18541304,47.042985 3.04102174,45.6024218 L8.64586957,45.6024218 Z M9.51926087,31.4096809 C9.47876087,31.5746715 9.45058696,31.7414362 9.41713043,31.9152972 C9.37486957,32.101577 9.34141304,32.2825344 9.29915217,32.4688141 C9.12834783,33.3629568 8.97691304,34.2570995 8.85893478,35.1725313 C8.8518913,35.2133354 8.8518913,35.2559136 8.84484783,35.3038141 C8.82547826,35.4209043 8.81843478,35.5468648 8.80434783,35.6639549 L3.21182609,35.6639549 C3.39847826,34.2216176 3.63091304,32.7952472 3.95491304,31.4096809 L9.51926087,31.4096809 Z M9.85734783,52.6987922 C9.89784783,52.8708792 9.9401087,53.0447403 9.9806087,53.2186014 C10.0017391,53.2806946 10.0158261,53.3427879 10.0281522,53.4048811 C10.2623478,54.2706383 10.5247174,55.1239768 10.8064565,55.9613486 C10.8610435,56.1352096 10.9226739,56.3090707 10.9843043,56.4882541 C11.0406522,56.640826 11.0881957,56.8004944 11.1427826,56.9530663 L5.71578261,56.9530663 C5.17871739,55.5745964 4.72617391,54.1535482 4.3335,52.6987922 L9.85734783,52.6987922 Z M14.5271739,18.4712234 C14.4109565,18.6716959 14.2929783,18.8792647 14.1838043,19.0868335 C13.8668478,19.6421245 13.5710217,20.2027378 13.2822391,20.7704474 C13.1713043,20.9797904 13.0691739,21.1873592 12.9652826,21.4020244 C12.9511957,21.4233135 12.9388696,21.4499249 12.9318261,21.471214 L7.64921739,21.471214 C8.71454348,19.4469743 9.9401087,17.5486952 11.3083043,15.7958917 L16.2405,15.7958917 C16.0679348,16.0442647 15.8953696,16.2873154 15.7245652,16.5445588 C15.3107609,17.1672653 14.9128043,17.811261 14.5271739,18.4712234 Z M18.6405652,8.69952128 L22.5338478,8.69952128 C22.1834348,9.00466521 21.8312609,9.31513141 21.4949348,9.63446809 C21.2061522,9.90413016 20.9385,10.1897591 20.655,10.4665175 C20.3803043,10.7503723 20.1056087,11.0342272 19.830913,11.3251783 C19.5685435,11.6019368 19.3149783,11.8875657 19.0596522,12.1714205 C18.8325,12.4268899 18.6194348,12.6912297 18.3993261,12.9537954 L13.7506304,12.9537954 C15.2632174,11.3677566 16.8937826,9.93961202 18.6405652,8.69952128 Z M12.4299783,68.3037109 L17.2653261,68.3037109 C17.4238043,68.5201502 17.5805217,68.727719 17.7460435,68.9352879 C18.1721739,69.4763861 18.6053478,69.9961952 19.0596522,70.508908 C19.3079348,70.7998592 19.5685435,71.0766176 19.830913,71.3533761 C20.1056087,71.6443273 20.3803043,71.9352785 20.6620435,72.2191333 C20.7729783,72.3309011 20.8821522,72.4550876 20.993087,72.5668554 L16.7564348,72.5668554 C15.2086304,71.2912829 13.7629565,69.8631383 12.4299783,68.3037109 Z M29.9418261,79.0316489 C26.7088696,78.3468492 23.6555217,77.0925657 20.8275652,75.4000814 L24.233087,75.4000814 C24.4109348,75.5455569 24.597587,75.6786139 24.7824783,75.8098967 C25.0712609,76.0316583 25.3600435,76.2534199 25.662913,76.4609887 C26.2140652,76.849515 26.7775435,77.2238486 27.3551087,77.576893 C27.6033913,77.729465 27.8569565,77.8749406 28.1122826,78.0275125 C28.5736304,78.2900782 29.0332174,78.5473217 29.4945652,78.7903723 C29.646,78.8666583 29.7903913,78.955363 29.9418261,79.0316489 Z M44.3721522,79.6632259 C43.2504783,79.6632259 42.1516957,79.5940363 41.0564348,79.4680757 L40.514087,79.3917897 C40.4383696,79.3793711 40.3626522,79.3722747 40.2869348,79.358082 C39.7991739,79.2888924 39.3166957,79.20551 38.8359783,79.1150313 C38.7937174,79.1079349 38.7602609,79.0937422 38.718,79.0884199 C38.2513696,78.9979412 37.7900217,78.8932697 37.3286739,78.7761796 C37.26,78.7619869 37.1913261,78.7406977 37.1226522,78.7211827 C36.6965217,78.6094149 36.2703913,78.4994212 35.8495435,78.3663642 C35.7262826,78.3255601 35.5959783,78.2829819 35.4656739,78.2421777 C35.1082174,78.1250876 34.749,78.0062234 34.398587,77.8820369 C34.1098043,77.7702691 33.8280652,77.6602753 33.5463261,77.5414111 C33.3526304,77.4651252 33.1536522,77.3959355 32.9687609,77.3143273 C25.3882174,74.0837046 19.1089565,67.7360013 15.2843478,59.6213016 C15.2491304,59.5450156 15.2227174,59.4687297 15.1875,59.3924437 C14.9814783,58.9560169 14.7825,58.5053974 14.5958478,58.0547778 C14.513087,57.8755945 14.444413,57.694637 14.3757391,57.5136796 C14.2313478,57.1606352 14.0869565,56.8075907 13.9566522,56.4474499 C13.8738913,56.218592 13.7911304,55.9826377 13.7083696,55.7537797 C13.5991957,55.4362171 13.4882609,55.1239768 13.3861304,54.8046402 C13.3033696,54.5420745 13.2206087,54.2777347 13.1378478,54.015169 C13.0480435,53.7171214 12.9582391,53.4119775 12.8754783,53.1139299 C12.7944783,52.8371715 12.7258043,52.5533166 12.650087,52.2747841 C12.5743696,51.9767365 12.4986522,51.678689 12.4299783,51.3806414 C12.3613043,51.0896902 12.297913,50.8058354 12.2362826,50.5148842 C12.1676087,50.2097403 12.1130217,49.9116927 12.0513913,49.6065488 C11.9950435,49.3155976 11.9404565,49.0246464 11.892913,48.7265989 C11.8383261,48.4143586 11.7960652,48.096796 11.7485217,47.7845557 C11.7062609,47.4936045 11.6587174,47.2097497 11.6252609,46.9187985 C11.583,46.5781727 11.5495435,46.239321 11.5143261,45.893373 C11.4861522,45.6219368 11.4526957,45.3593711 11.4315652,45.0879349 C11.3981087,44.6940864 11.3769783,44.2984637 11.3488043,43.8975188 C11.3364783,43.6757572 11.3223913,43.4539956 11.3083043,43.2251377 C11.2871739,42.6006571 11.2660435,41.9779506 11.2660435,41.3392772 C11.2660435,40.7094743 11.2871739,40.0778974 11.3083043,39.4551909 C11.3223913,39.2263329 11.3364783,39.0045713 11.3488043,38.7828098 C11.3769783,38.3871871 11.3981087,37.9862422 11.4315652,37.5906195 C11.4526957,37.3209574 11.4861522,37.0566176 11.5143261,36.7869556 C11.5495435,36.4463298 11.583,36.1003817 11.6252609,35.76153 C11.6587174,35.4705788 11.7062609,35.1849499 11.7485217,34.8939987 C11.7960652,34.5835325 11.8383261,34.2641959 11.892913,33.9519556 C11.9404565,33.6610044 11.9950435,33.3700532 12.0513913,33.079102 C12.1130217,32.7739581 12.1746522,32.4688141 12.2362826,32.1636702 C12.297913,31.872719 12.3613043,31.5888642 12.4299783,31.3050094 C12.4986522,30.9998655 12.5743696,30.7018179 12.650087,30.4037703 C12.7258043,30.1270119 12.7944783,29.8502534 12.8754783,29.5646245 C12.9582391,29.2683511 13.0480435,28.9632071 13.1378478,28.6651596 C13.2206087,28.4008198 13.3033696,28.1382541 13.3861304,27.8739143 C13.4882609,27.5563517 13.5991957,27.2441114 13.7083696,26.9247747 C13.7911304,26.6888204 13.8738913,26.4599625 13.9566522,26.2328786 C14.094,25.8709637 14.2313478,25.5179193 14.3757391,25.1648748 C14.444413,24.9839174 14.513087,24.804734 14.5958478,24.6237766 C14.7825,24.1731571 14.9814783,23.7243116 15.1875,23.2861108 C15.2227174,23.2098248 15.2491304,23.1335388 15.2843478,23.0590269 C19.1089565,14.9425532 25.3882174,8.59484981 32.9687609,5.36600125 C33.1536522,5.2826189 33.3526304,5.21342929 33.5463261,5.1371433 C33.8280652,5.02005319 34.1098043,4.90828536 34.398587,4.79829161 C34.749,4.67233104 35.1082174,4.55524093 35.4656739,4.43637672 C35.5959783,4.39557259 35.7262826,4.35476846 35.8495435,4.31219024 C36.2703913,4.18090738 36.6965217,4.06204318 37.1226522,3.95914581 C37.1913261,3.9378567 37.26,3.91656758 37.3286739,3.90414894 C37.7900217,3.78528473 38.2513696,3.68238736 38.718,3.59190864 C38.7602609,3.58481227 38.7937174,3.57061952 38.8359783,3.56352315 C39.3166957,3.47304443 39.7991739,3.39143617 40.2869348,3.32224656 C40.3626522,3.30805382 40.4383696,3.30095745 40.514087,3.28676471 L41.0564348,3.21047872 C42.1516957,3.08629224 43.2504783,3.024199 44.3721522,3.024199 C62.627087,3.024199 77.4782609,20.2098342 77.4782609,41.3392772 C77.4782609,62.4687203 62.627087,79.6632259 44.3721522,79.6632259 Z",id:"Fill-1",fill:"#000",mask:"url(#mask-2)"})),react.createElement("path",{d:"M19.7912115,40.7807647 C19.7912115,39.8676552 19.8236915,38.9545458 19.8903611,38.0559301 C19.9501927,37.2642062 19.3894847,36.5630686 18.635606,36.4996582 C17.8800178,36.4434947 17.2269981,37.0304937 17.165457,37.8294645 C17.0919495,38.7987374 17.0526316,39.7969979 17.0526316,40.7807647 L17.0526316,40.8169992 C17.0526316,41.61597 17.6663333,42.2464503 18.4219215,42.2464503 C19.1758003,42.2464503 19.7912115,41.5815472 19.7912115,40.7807647 Z",id:"Fill-4",fill:"#000"}),react.createElement("path",{d:"M69.1940237,33.9437506 C69.3893623,34.6124901 70.0626573,35.0583164 70.8107629,35.0583164 C70.9396033,35.0583164 71.076756,35.0435784 71.2159867,35.0159445 C72.101245,34.8132962 72.6436215,34.0155987 72.425424,33.2234279 C72.1407283,32.2378202 71.8165492,31.2595814 71.4424965,30.3089765 C71.1515665,29.5389129 70.2018881,29.1225627 69.3332544,29.3878478 C68.4646207,29.6549751 68.0012109,30.4968868 68.3025312,31.2595814 C68.6350226,32.136496 68.9342648,33.0373599 69.1940237,33.9437506 Z",id:"Fill-5",fill:"#000"}),react.createElement("path",{d:"M63.0884393,61.3914408 C62.5749996,62.0047782 62.035888,62.5917187 61.4775223,63.1320767 C60.9769187,63.6242993 60.9833367,64.4053339 61.4839403,64.8913456 C61.7342422,65.133575 62.06156,65.2484787 62.3872732,65.2484787 C62.7194045,65.2484787 63.0515358,65.127364 63.2954196,64.8851346 C63.9163607,64.2780082 64.5180478,63.6351686 65.081227,62.9628266 C65.5272777,62.4286797 65.4454482,61.6460923 64.8935006,61.2159798 C64.347971,60.7796562 63.5393035,60.8635049 63.0884393,61.3914408 Z",id:"Fill-6",fill:"#000"}),react.createElement("path",{d:"M20.3323792,49.1142174 C20.113743,48.3242082 19.2017176,47.8417318 18.3167615,48.0424567 C17.4213942,48.2376571 16.8758447,49.0350323 17.1048922,49.826883 C17.3797492,50.8120925 17.7066624,51.789936 18.0710561,52.7475229 C18.3084325,53.3589052 18.9580944,53.7474645 19.6494013,53.7474645 C19.8284748,53.7474645 20.0075482,53.7180003 20.1866217,53.6682794 C21.0570021,53.40126 21.5213437,52.5670546 21.2277465,51.7973021 C20.8862576,50.9207418 20.5843314,50.0220834 20.3323792,49.1142174 Z",id:"Fill-7",fill:"#000"}),react.createElement("path",{d:"M58.988016,13.7151834 C58.0992381,13.1652749 57.1664991,12.6586378 56.2184693,12.215105 C55.4634859,11.8472973 54.5460377,12.1429858 54.1637677,12.8479506 C53.7834089,13.5601272 54.089225,14.4255571 54.836563,14.7843499 C55.6871139,15.1864142 56.51664,15.6443708 57.3155845,16.1293722 C57.5774395,16.2916403 57.8679647,16.3691684 58.1508446,16.3691684 C58.6516184,16.3691684 59.1447468,16.1365841 59.435272,15.714687 C59.8978188,15.0457818 59.697127,14.1515043 58.988016,13.7151834 Z",id:"Fill-8",fill:"#000"}),react.createElement("path",{d:"M54.6695451,68.2952404 C53.8398642,68.7320859 52.9803521,69.1227451 52.12084,69.4614447 C51.3564149,69.7616557 50.9630156,70.6488176 51.2538701,71.4455314 C51.4794687,72.0613488 52.0481264,72.4366126 52.6522087,72.4366126 C52.8274671,72.4366126 53.0008611,72.4077461 53.1761195,72.3403911 C54.1456343,71.9632029 55.098369,71.5282819 56.0305947,71.0317791 C56.767053,70.6488176 57.0504497,69.7154694 56.6794238,68.9572442 C56.3009402,68.2047923 55.3985457,67.9045813 54.6695451,68.2952404 Z",id:"Fill-9",fill:"#000"}),react.createElement("path",{d:"M66.5602221,22.498173 C66.0385523,21.5744134 65.4767542,20.6726957 64.8948918,19.8290887 C64.4250546,19.147791 63.5823574,19.0455963 63.0138712,19.6086689 C62.4453849,20.1717415 62.360112,21.1816652 62.8316212,21.8709783 C63.3599789,22.6384402 63.8699445,23.4519899 64.3397817,24.2895854 C64.6006166,24.7524671 65.0186211,24.994929 65.4500019,24.994929 C65.7108367,24.994929 65.9733436,24.9087649 66.2007381,24.7204061 C66.8160409,24.2274671 66.9715386,23.2255586 66.5602221,22.498173 Z",id:"Fill-10",fill:"#000"}),react.createElement("path",{d:"M71.1028054,39.3711968 C70.3453949,39.3711968 69.730213,40.0690561 69.730213,40.8725966 C69.730213,41.7690635 69.695941,42.6728187 69.6359651,43.556531 C69.5759891,44.3527831 70.1380494,45.0579308 70.89546,45.1217039 C70.9348728,45.1217039 70.9691447,45.1217039 71.0017031,45.1217039 C71.7111329,45.1217039 72.3143195,44.5459243 72.3674411,43.7770035 C72.4411258,42.8167636 72.4736842,41.8401249 72.4736842,40.8725966 L72.4736842,40.7796701 C72.4736842,39.9761297 71.8585023,39.3711968 71.1028054,39.3711968 Z",id:"Fill-11",fill:"#000"}),react.createElement("path",{d:"M69.9816111,50.9503396 C69.1605558,50.6871592 68.2687875,51.110861 67.9937929,51.8910697 C67.6716563,52.7870031 67.3180918,53.6773369 66.9193496,54.5303402 C66.5736421,55.2881506 66.9429206,56.1710183 67.732548,56.4995272 C67.9387939,56.5797879 68.1548611,56.6227181 68.3611071,56.6227181 C68.9680595,56.6227181 69.543584,56.286743 69.8048289,55.7267846 C70.2330348,54.7860545 70.6258842,53.81546 70.9696275,52.8392659 C71.2465864,52.0590572 70.8085592,51.21352 69.9816111,50.9503396 Z",id:"Fill-12",fill:"#000"}),react.createElement("path",{d:"M47.0437116,9.34596624 C46.0686249,9.23374463 45.0791723,9.18103448 44.0969026,9.18103448 L44.0412347,9.18103448 C43.2493134,9.18103448 42.6315789,9.791452 42.6315789,10.5412964 C42.6315789,11.2928411 43.3049814,11.9032586 44.0969026,11.9032586 C44.9678364,11.9032586 45.8441575,11.9508677 46.7132955,12.0426854 C46.7707592,12.0494867 46.8264271,12.056288 46.8820951,12.056288 C47.5967995,12.056288 48.221717,11.5444895 48.3061167,10.8541566 C48.3976995,10.1043122 47.8284499,9.43268293 47.0437116,9.34596624 Z",id:"Fill-13",fill:"#000"}),react.createElement("path",{d:"M23.7643223,58.7651174 C23.352585,58.0299906 22.5157205,57.8417019 21.9064831,58.3344573 C21.2922246,58.8272126 21.1298728,59.8207356 21.5483051,60.5558624 C22.0638136,61.4792779 22.6194917,62.3806596 23.2019494,63.2239523 C23.469746,63.6085418 23.8563774,63.8108519 24.2413351,63.8108519 C24.5426063,63.8108519 24.8422038,63.6946738 25.0915895,63.4523023 C25.6606573,62.8874364 25.7443438,61.879892 25.2740259,61.1908358 C24.7451275,60.4236598 24.2346402,59.6024009 23.7643223,58.7651174 Z",id:"Fill-14",fill:"#000"}),react.createElement("path",{d:"M21.7980233,26.55755 C21.0014138,26.2307024 20.0733441,26.5650208 19.7280158,27.3251747 C19.3002796,28.2646279 18.9000128,29.235832 18.5566466,30.2070361 C18.2799916,30.9877348 18.7175382,31.8412737 19.5376928,32.1027518 C19.7064328,32.1550474 19.8751727,32.1830629 20.0439127,32.1830629 C20.6953274,32.1830629 21.3075002,31.7889781 21.5292167,31.1689017 C21.8431514,30.2798764 22.2041765,29.3889834 22.6024812,28.5205028 C22.9556579,27.7696874 22.5867845,26.8862652 21.7980233,26.55755 Z",id:"Fill-15",fill:"#000"}),react.createElement("path",{d:"M43.9962766,71.1598796 C43.1197285,71.1598796 42.2361115,71.1072231 41.3737013,71.0070058 C40.5996528,70.9271717 39.8892247,71.4520385 39.7990958,72.1943259 C39.7089668,72.9383118 40.2621111,73.6143538 41.0343924,73.7077767 C42.0081383,73.8198842 43.01016,73.8742394 43.9962766,73.8742394 L44.1217502,73.8742394 C44.9011004,73.8742394 45.4736842,73.2695384 45.4736842,72.5204567 C45.4736842,71.7645805 44.777394,71.1598796 43.9962766,71.1598796 Z",id:"Fill-16",fill:"#000"}),react.createElement("path",{d:"M26.2282969,16.7343675 C25.6147852,17.3351354 25.0140882,17.9840267 24.4438267,18.6499942 C24.0001119,19.18401 24.0818067,19.9664053 24.6264385,20.4026218 C24.869921,20.5904588 25.1518481,20.6820487 25.4401826,20.6820487 C25.80861,20.6820487 26.1786393,20.5237068 26.4349367,20.2272038 C26.9475314,19.614017 27.4921632,19.0318776 28.0480081,18.4869951 C28.5493898,18.0011028 28.5429823,17.2140504 28.0432025,16.728158 C27.5418208,16.2484752 26.7280767,16.2484752 26.2282969,16.7343675 Z",id:"Fill-17",fill:"#000"}),react.createElement("path",{d:"M36.3532749,10.7177124 C35.386102,11.0932593 34.4245197,11.5304345 33.5002081,12.0196084 C32.7659767,12.4028589 32.4734022,13.3349856 32.8461085,14.0880054 C33.107003,14.6214746 33.6325188,14.9315416 34.17667,14.9315416 C34.4040209,14.9315416 34.6369623,14.8776169 34.8549955,14.7659158 C35.6842671,14.3287406 36.535901,13.9377866 37.4024431,13.606535 C38.166491,13.3060974 38.5596962,12.4182659 38.2764394,11.6209509 C37.983865,10.8236359 37.1266405,10.4172748 36.3532749,10.7177124 Z",id:"Fill-18",fill:"#000"}),react.createElement("path",{d:"M34.6921032,68.2752597 C33.8488535,67.8681419 33.0113401,67.4177904 32.2120694,66.9169995 C31.5026688,66.4882649 30.5619003,66.6720083 30.0915161,67.34033 C29.6287804,68.001446 29.8295542,68.8949434 30.5313063,69.3308837 C31.4280957,69.8875182 32.3612156,70.3937133 33.301984,70.8440649 C33.5276155,70.9503478 33.7589833,70.9989858 33.9979997,70.9989858 C34.5506055,70.9989858 35.0879143,70.7107608 35.3575248,70.2117713 C35.7456874,69.5002159 35.4397464,68.635541 34.6921032,68.2752597 Z",id:"Fill-19",fill:"#000"}))))))));__webpack_require__.d(__webpack_exports__,"a",function(){return walletEmpty_WalletEmpty});class walletEmpty_WalletEmpty extends react.PureComponent{render(){const{id:id,hideAddFundsText:hideAddFundsText}=this.props;return react.createElement(StyledWrapper,{id:id},coins,react.createElement(StyledTitle,null,Object(helpers.a)("rewardsPanelEmptyText1")),react.createElement(StyledContent,null,hideAddFundsText?react.createElement(StyledCenter,null,Object(helpers.a)("rewardsPanelEmptyText5")):react.createElement(react.Fragment,null,react.createElement("b",null,Object(helpers.a)("rewardsPanelEmptyText2")),react.createElement("br",null),"• ",Object(helpers.a)("rewardsPanelEmptyText3"),react.createElement("br",null),"• ",Object(helpers.a)("rewardsPanelEmptyText4"),react.createElement("br",null),"• ",Object(helpers.a)("rewardsPanelEmptyText5"))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),clipboard_o=__webpack_require__(403),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  padding: 10px;
  border: 1px solid #DFDFE8;
  border-radius: 6px;
  font-family: ${p=>p.theme.fontFamily.body};

  &:focus-within {
    border-color: #A1A8F2;
    outline: none;
  }
`,StyledArea=Object(styled_components_browser_esm.default)("textarea").withConfig({displayName:"StyledArea"})`
  min-height: 140px;
  box-sizing: border-box;
  width: 100%;
  font-family: inherit;
  border: 1px solid ${p=>p.disabled?"#E5E5EA":"#DFDFE8"};
  color: ${p=>p.disabled?"#D1D1DB":"#686978"};
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 26px;

  &:disabled {
    background: #fff;
  }

  &:focus {
    border-color: #A1A8F2;
    outline: none;
  }
`,StyledFooter=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledFooter"})`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto;
  align-items: center;
  margin-top: 10px;
`,animation=styled_components_browser_esm.keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`,StyledText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledText"})`
  opacity: 0;

${p=>p.visible&&styled_components_browser_esm.css`
    animation-name: ${animation};
    animation-duration: 2s;
    animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
    will-change: opacity;
  `}
`,StyledCopyToClipboard=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledCopyToClipboard"})`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-gap: 10px;
  align-items: center;
`,StyledClipboardButton=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledClipboardButton"})`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  background: transparent;
  border: 0;
  outline: none;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return textareaClipboard_TextAreaClipboard});class textareaClipboard_TextAreaClipboard extends react.PureComponent{constructor(props){super(props),this.onCopyToClipboard=(()=>{navigator.clipboard.writeText(this.value),this.setState({copiedStringVisible:!0})}),this.onAnimationEnd=(()=>{this.setState({copiedStringVisible:!1})}),this.state={copiedStringVisible:!1}}get emptyWordCount(){return""===this.props.value||""===this.props.defaultValue}get value(){return this.props.value||this.props.defaultValue}get wordCount(){return!this.value||this.emptyWordCount||null===this.value.match(/\S+/g)?0:this.value.match(/\S+/g).length}render(){const{id:id,value:value,defaultValue:defaultValue,readOnly:readOnly,placeholder:placeholder,disabled:disabled,onChange:onChange,copiedString:copiedString,wordCountString:wordCountString}=this.props,{copiedStringVisible:copiedStringVisible}=this.state;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledArea,{disabled:disabled,value:value,readOnly:readOnly,placeholder:placeholder,defaultValue:defaultValue,onChange:onChange}),react.createElement(StyledFooter,null,wordCountString," ",this.wordCount,void 0!==copiedString?react.createElement(StyledCopyToClipboard,null,react.createElement(StyledText,{visible:copiedStringVisible,onAnimationEnd:this.onAnimationEnd},copiedString),react.createElement(StyledClipboardButton,{onClick:this.onCopyToClipboard},react.createElement(clipboard_o.a,null))):null))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledDialogWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledDialogWrapper"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  display: flex;
`,StyledDialog=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledDialog"})`
  width: 470px;
  margin: auto;
  padding: 30px 20px 10px;
  max-height: calc(100vh - 100px);
  display: grid;
  grid-template-rows: 1fr auto;
  overflow-y: auto;
  background: #fff;
  box-shadow: 1px 2px 18px 0 rgba(0,0,0,0.5);
  border-radius: 6px;
`,StyledFooter=Object(styled_components_browser_esm.default)("footer").withConfig({displayName:"StyledFooter"})`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
`,StyledCancelContainer=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledCancelContainer"})`
  display: flex;
  justify-content: flex-end;
`;var buttonsIndicators_button=__webpack_require__(12);__webpack_require__.d(__webpack_exports__,"a",function(){return alertBox_AlertBox});var __rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&(t[p[i]]=s[p[i]])}return t};class alertBox_AlertBox extends react.PureComponent{render(){const _a=this.props,{testId:testId,children:children}=_a,buttonProps=__rest(_a,["testId","children"]),{colorType:colorType,onClickCancel:onClickCancel,cancelString:cancelString,onClickOk:onClickOk,okString:okString}=buttonProps;return react.createElement(StyledDialogWrapper,null,react.createElement(StyledDialog,{"data-test-id":testId},react.createElement("div",null,children),react.createElement(StyledFooter,null,react.createElement(StyledCancelContainer,null,cancelString?react.createElement(buttonsIndicators_button.a,{type:colorType,level:"secondary",onClick:onClickCancel,text:cancelString}):null),react.createElement(buttonsIndicators_button.a,{type:colorType,onClick:onClickOk,text:okString}))))}}alertBox_AlertBox.defaultProps={colorType:"accent"}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  font-size: 16px;
  line-height: 1.7;
  padding: 8px;
`,StyledTwoColumn=Object(theme.b)("div").withConfig({displayName:"StyledTwoColumn"})`
  display: flex;
  align-items: center;
  padding: 0 48px;
  margin: 0 0 8px;
`,StyledIcon=Object(theme.b)("div").withConfig({displayName:"StyledIcon"})`
  width: 180px;
  padding: 4px;
`;var fc_ads_megaphone=__webpack_require__(416),fc_rewards_activate=__webpack_require__(422),fc_rewards_send_tips=__webpack_require__(423);__webpack_require__.d(__webpack_exports__,"a",function(){return disabledContent_DisabledContent});class disabledContent_DisabledContent extends react.PureComponent{constructor(){super(...arguments),this.getIcon=(type=>{let icon=null;switch(type){case"ads":icon=react.createElement(fc_ads_megaphone.a,null);break;case"contribute":icon=react.createElement(fc_rewards_activate.a,null);break;case"donation":icon=react.createElement(fc_rewards_send_tips.a,null)}return react.createElement(StyledIcon,null,icon)})}render(){const{id:id,children:children,type:type}=this.props;return react.createElement("div",{id:id},react.createElement(StyledTwoColumn,null,this.getIcon(type),react.createElement(StyledContent,{type:type},children)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  display: inline-block;
  position: relative;
`,StyledTooltip=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTooltip"})`
  left: 50%;
  top: calc(100% + 10px);
  transform: translateX(-50%);
  white-space: nowrap;
  position: absolute;
  background: #0C0D21;
  text-align: center;
  padding: 10px;
  z-index: 2;
  border-radius: 3px;
  box-shadow: 1px 1px 5px 0 rgba(34, 35, 38, 0.43);
  display: ${p=>p.displayed?"inline-block":"none"};
`,StyledTooltipText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTooltipText"})`
  color: #FFFFFF;
  font-family: Muli, sans-serif;
  font-weight: 300;
  font-size: 14px;
`,StyledPointer=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledPointer"})`
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  top: -7px;
  left: calc(50% - 7px);
  border-width: 0 7px 8px 7px;
  border-color: transparent transparent #0C0D21 transparent;
`,StyledChildWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledChildWrapper"})`
  cursor: pointer;
  height: 24px;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return tooltip_Tooltip});class tooltip_Tooltip extends react.PureComponent{constructor(props){super(props),this.onMouseEnter=(()=>{this.setState({displayed:!0})}),this.onMouseLeave=(()=>{this.setState({displayed:!1})}),this.state={displayed:!1}}render(){const{id:id,content:content,children:children}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledTooltip,{displayed:this.state.displayed},react.createElement(StyledPointer,null),react.createElement(StyledTooltipText,null,content)),react.createElement(StyledChildWrapper,{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},children))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),colors=__webpack_require__(6);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  min-height: 305px;
  padding: ${p=>p.compact?"0px 7px 0px":"0px"};
  background: ${p=>p.compact?(gradient=>`linear-gradient(-180deg, rgba(${gradient},1) 0%, rgba(255,255,255,1) 60%)`)("233, 235, 255"):"inherit"};
`,StyledInner=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledInner"})`
  padding: 25px 14px 14px;
  font-family: Poppins, sans-serif;
`,StyledSummary=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledSummary"})`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.57;
  letter-spacing: 0.4px;
  color: #a1a8f2;
  text-transform: uppercase;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 22px;
  font-weight: 300;
  line-height: 0.79;
  letter-spacing: 0.4px;
  color: #4C54D2;
  margin: 4px 0 26px;
  text-transform: uppercase;
`,StyledActivity=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledActivity"})`
  font-size: 12px;
  color: #686978;
  margin-top: 26px;
  text-align: center;
  padding: 0;
  border: none;
  background: none;
  width: 100%;
  cursor: pointer;
`,StyledActivityIcon=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledActivityIcon"})`
  vertical-align: middle;
  margin-right: 11px;
  width: 22px;
  height: 24px;
  color: #A1A8F2;
  display: inline-block;
`,StyledNoActivityWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledNoActivityWrapper"})`
  width: 100%;
  margin-top: 80px;
  text-align: center;
`,StyledNoActivity=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledNoActivity"})`
  font-weight: 400;
  color: #B8B9C4;
  font-size: 18px;
`,StyledReservedWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledReservedWrapper"})`
  background: rgba(0, 0, 0, 0.04);
  color: #676283;
  font-size: 12px;
  font-family: ${p=>p.theme.fontFamily.body};
  font-weight: normal;
  letter-spacing: 0;
  line-height: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  margin: 20px 0 10px;
`,StyledReservedLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledReservedLink"})`
  color: ${colors.a.blue400};
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
`,StyledAllReserved=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledAllReserved"})`
  background: none;
  border: none;
  padding: 0;
  display: block;
  margin-top: 10px;
  color: ${colors.a.blue400};
  cursor: pointer;
`;var listToken=__webpack_require__(84),helpers=__webpack_require__(3),wallet_info=__webpack_require__(415);__webpack_require__.d(__webpack_exports__,"a",function(){return walletSummary_WalletSummary});class walletSummary_WalletSummary extends react.PureComponent{constructor(){super(...arguments),this.generateList=(()=>{const tokenSize=this.props.compact?"small":"normal";let result=[];const all=Object.keys(this.props.report).length;let current=0;return[{key:"grant",translation:"tokenGrantClaimed",color:"earnings"},{key:"ads",translation:"earningsAds",color:"earnings"},{key:"deposit",translation:"deposits",color:"earnings"},{key:"contribute",translation:"rewardsContribute",color:"contribute",negative:!0},{key:"donation",translation:"recurringDonations",color:"donation",negative:!0},{key:"tips",translation:"oneTimeDonation",color:"donation",negative:!0}].forEach((item,index)=>{const data=this.props.report[item.key];data&&(current++,result.push(react.createElement(listToken.a,{testId:`summary-${item.key}`,key:`summary-${tokenSize}-${index}-${data.tokens}`,size:tokenSize,value:data.tokens,converted:data.converted,color:item.color,title:Object(helpers.a)(item.translation),isNegative:item.negative,border:all===current?"last":void 0})))}),0===result.length?react.createElement(StyledNoActivityWrapper,null,react.createElement(StyledNoActivity,null,Object(helpers.a)("noActivity"))):result})}render(){const{id:id,onActivity:onActivity,compact:compact,reservedAmount:reservedAmount,reservedMoreLink:reservedMoreLink,onSeeAllReserved:onSeeAllReserved}=this.props,date=new Date,month=Object(helpers.a)(`month${date.toLocaleString("en-us",{month:"short"})}`),year=date.getFullYear();return react.createElement(StyledWrapper,{id:id,compact:compact},react.createElement(StyledInner,null,react.createElement(StyledSummary,null,Object(helpers.a)("rewardsSummary")),react.createElement(StyledTitle,null,month," ",year),react.createElement("div",null,this.generateList(),reservedAmount&&reservedAmount>0?react.createElement(StyledReservedWrapper,{"data-test-id":"pending-contribution-box"},Object(helpers.a)("reservedAmountText",{reservedAmount:reservedAmount.toFixed(1)})," ",react.createElement(StyledReservedLink,{href:reservedMoreLink,target:"_blank"},Object(helpers.a)("reservedMoreLink")),onSeeAllReserved?react.createElement(StyledAllReserved,{onClick:onSeeAllReserved,"data-test-id":"reservedAllLink"},Object(helpers.a)("reservedAllLink")):null):null),onActivity?react.createElement(StyledActivity,{onClick:onActivity},react.createElement(StyledActivityIcon,null,react.createElement(wallet_info.a,null)),Object(helpers.a)("viewMonthly")):null))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),helpers=__webpack_require__(3),styled_components_browser_esm=__webpack_require__(2),heading=__webpack_require__(32),batOutline=__webpack_require__(475),batOutline_default=__webpack_require__.n(batOutline),buttonsIndicators_button=__webpack_require__(12),colors=__webpack_require__(6);const StyledWrapper=Object(styled_components_browser_esm.default)("div")`
  text-align: center;
  font-family: Poppins, sans-serif;
  background-image: linear-gradient(140deg, #392DD1 0%, #8E2995 100%);
`,StyledInnerWrapper=Object(styled_components_browser_esm.default)("div")`
  margin: 0 auto;
  display: inline-block;
  padding: 35px 30px 25px;
  background: url(${batOutline_default.a}) no-repeat top;
`,StyledHeaderText=Object(styled_components_browser_esm.default)("p")`
  width: 261px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.16px;
  line-height: 22px;
  margin: 0 auto;
  opacity: 0.5;
  font-family: Muli, sans-serif;
`,StyledBatLogo=Object(styled_components_browser_esm.default)("span")`
  display: block;
  margin: -10px auto 2px;
  width: 150px;
  height: 115px;
  padding: 20px 0 15px;
`,StyledTitle=Object(styled_components_browser_esm.default)(heading.a)`
  color: #FFFFFF;
  font-weight: 400;
  line-height: 22px;
  margin: 0;
  display: inline-block;
`,StyledDescText=Object(styled_components_browser_esm.default)("p")`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 24px;
  opacity: 0.5;
  margin: 15px auto 23px;
  text-align: center;
  width: 280px;
  font-family: Muli, sans-serif;
`,StyledJoinButton=Object(styled_components_browser_esm.default)(buttonsIndicators_button.a)`
  color: #FFF;
  margin: 0 auto 24px;
  outline: 0;
  &:hover {
    color: #e0e0e0;
  }
`,StyledFooterText=Object(styled_components_browser_esm.default)("div")`
  color: #73CBFF;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.19px;
  line-height: 21px;
  display: block;
  text-align: center;
  cursor: pointer;
  margin: 0 0 16px;
`,StyledTrademark=Object(styled_components_browser_esm.default)("span")`
  display: inline-block;
  vertical-align: text-top;
  margin-top: -13px;
  color: #FFF;
  font-size: 9px;
  font-weight: 500;
  opacity: 0.7;
`,StyledErrorMessage=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledErrorMessage"})`
  font-size: 16px;
  display: block;
  margin: 0px auto 20px;
  line-height: 28px;
  color: #FFF;
`,StyledTOSWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTOSWrapper"})`
  display: block;
  margin: 20px auto;
  width: 300px;
`,StyledServiceText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledServiceText"})`
  color: rgba(255, 255, 255, 0.65);
  font-size: 14px;
  font-family: Muli, sans-serif;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 18px;
`,StyledServiceLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledServiceLink"})`
  cursor: pointer;
  color: ${colors.a.blue500};
  font-weight: 600;
`;var fc_logo_bat=__webpack_require__(158),loader=__webpack_require__(257);__webpack_require__.d(__webpack_exports__,"a",function(){return panelWelcome_PanelWelcome});class panelWelcome_PanelWelcome extends react.PureComponent{get locale(){return{one:{header:"welcomeHeaderOne",title:"braveRewards",desc:"welcomeDescOne",button:"welcomeButtonTextOne",footer:"welcomeFooterTextOne"},two:{header:"welcomeHeaderTwo",title:"braveRewards",desc:"welcomeDescTwo",button:"welcomeButtonTextTwo",footer:"welcomeFooterTextTwo"}}[this.props.variant||"one"]}render(){const{id:id,optInAction:optInAction,optInErrorAction:optInErrorAction,moreLink:moreLink,onTOSClick:onTOSClick,onPrivacyClick:onPrivacyClick}=this.props;let props={};return moreLink&&(props={onClick:moreLink}),react.createElement(StyledWrapper,{id:id},react.createElement(StyledInnerWrapper,null,react.createElement(StyledHeaderText,null,Object(helpers.a)(this.locale.header)),react.createElement(StyledBatLogo,null,react.createElement(fc_logo_bat.a,null)),react.createElement(StyledTitle,{level:4},Object(helpers.a)(this.locale.title)),react.createElement(StyledTrademark,null,"TM"),react.createElement(StyledDescText,null,Object(helpers.a)(this.locale.desc)),this.props.creating&&!this.props.error?react.createElement(StyledJoinButton,{level:"secondary",size:"call-to-action",type:"subtle",text:Object(helpers.a)("braveRewardsCreatingText"),disabled:!0,"data-test-id":"optInAction",icon:{image:react.createElement(loader.a,null),position:"after"}}):this.props.error?react.createElement(react.Fragment,null,react.createElement(StyledErrorMessage,null,Object(helpers.a)("walletFailedTitle")),react.createElement(StyledJoinButton,{level:"secondary",size:"call-to-action",type:"subtle",text:Object(helpers.a)("walletFailedButton"),onClick:optInErrorAction,"data-test-id":"optInErrorAction"})):react.createElement(StyledJoinButton,{size:"call-to-action",type:"subtle",level:"secondary",onClick:optInAction,text:Object(helpers.a)(this.locale.button)}),onTOSClick&&onPrivacyClick?react.createElement(StyledTOSWrapper,null,react.createElement(StyledServiceText,null,Object(helpers.a)("serviceTextPanelWelcome")," ",react.createElement(StyledServiceLink,{onClick:onTOSClick},Object(helpers.a)("termsOfService"))," ",Object(helpers.a)("and")," ",react.createElement(StyledServiceLink,{onClick:onPrivacyClick},Object(helpers.a)("privacyPolicy")),".")):null,react.createElement(StyledFooterText,Object.assign({},props),Object(helpers.a)(this.locale.footer))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1),card=__webpack_require__(83);const colors={ads:"#C12D7C",contribute:"#9F22A1",donation:"#696FDC"},StyledCard=Object(theme.b)(props=>react.createElement(card.a,Object.assign({useDefaultContentPadding:!1},props))).withConfig({displayName:"StyledCard"})`
  margin-bottom: 12px;
`,StyledFlip=Object(theme.b)("div").withConfig({displayName:"StyledFlip"})`
  display: block;
`,StyledContentWrapper=Object(theme.b)("div").withConfig({displayName:"StyledContentWrapper"})`
  flex-direction: column;
  display: ${p=>p.open?"flex":"none"};
`,StyledLeft=Object(theme.b)("div").withConfig({displayName:"StyledLeft"})`
  display: flex;
  align-items: center;
  padding: 0 0 0 24px;
`,StyledRight=Object(theme.b)("div").withConfig({displayName:"StyledRight"})`
  display: flex;
  padding: 0 24px 0 0;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 18px;
  font-weight: 600;
  color: ${p=>!1===p.enabled?"#838391":p.type&&colors[p.type]||"#4b4c5c"};
`,StyledBreak=Object(theme.b)("div").withConfig({displayName:"StyledBreak"})`
  width: 100%;
  display: block;
`,StyledDescription=Object(theme.b)("div").withConfig({displayName:"StyledDescription"})`
  width: 100%;
  font-size: 14px;
  line-height: 1.7;
  padding: 16px 0;
  color: ${p=>p.theme.color.text};
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  flex-basis: 100%;
  flex-grow: 1;
  text-align: ${p=>p.contentShown?"default":"center"};
`,StyledSettingsClose=(Object(theme.b)("div").withConfig({displayName:"StyledSettingsWrapper"})`
  background: #fff;
  overflow: hidden;
  display: ${p=>p.open?"block":"none"};
`,Object(theme.b)("button").withConfig({displayName:"StyledSettingsClose"})`
  display: block;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 20px;
  height: 20px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: ${p=>p.theme.palette.grey600};
`),StyledSettingsTitle=Object(theme.b)("span").withConfig({displayName:"StyledSettingsTitle"})`
  color: #4B4C5C;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  text-align: center;
`,StyledSettingsText=Object(theme.b)("div").withConfig({displayName:"StyledSettingsText"})`
  color: #4B4C5C;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`,StyleDetailsLink=Object(theme.b)("a").withConfig({displayName:"StyleDetailsLink"})`
  color: #4C54D2;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  font-weight: 600;
`,StyledDetailInfo=Object(theme.b)("div").withConfig({displayName:"StyledDetailInfo"})`
  width: 100%;
  padding: 0px 24px;
  display: block;
`,StyledDetailContent=Object(theme.b)("div").withConfig({displayName:"StyledDetailContent"})`
  display: flex;
  flex-direction: column;
`,StyledChildContent=Object(theme.b)("div").withConfig({displayName:"StyledChildContent"})`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #E5E5EA;
`,StyledSettingsContent=Object(theme.b)("div").withConfig({displayName:"StyledSettingsContent"})`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
`,StyledSettingsHeader=Object(theme.b)("div").withConfig({displayName:"StyledSettingsHeader"})`
  width: 100%;
  display: flex;
  padding: 0 24px;
`,StyledSettingsListTitle=Object(theme.b)("span").withConfig({displayName:"StyledSettingsListTitle"})`
  font-size: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`,StyledArrow=Object(theme.b)("span").withConfig({displayName:"StyledArrow"})`
  color: #4C54D2;
  height: 16px;
  width: 16px;
  margin: 4px;
`,StyledToggleHeader=Object(theme.b)("div").withConfig({displayName:"StyledToggleHeader"})`
  width: 100%;
  display: flex;
  align-items: center;
  ${p=>(detailView=>detailView?theme.a`
    top: 0px;
    left: 0px;
    position: fixed;
    background: #fff;
  `:null)(p.detailView)}
  z-index: 1;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #E5E5EA;
`,StyledBackArrow=Object(theme.b)("span").withConfig({displayName:"StyledBackArrow"})`
  height: 24px;
  width: 24px;
  margin: 0 8px 0 0;
`,StyledFullSizeWrapper=Object(theme.b)("div").withConfig({displayName:"StyledFullSizeWrapper"})`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 999;
  overflow-y: scroll;
  padding: 64px 0 0;
`,StyledSettingsIcon=Object(theme.b)("button").withConfig({displayName:"StyledSettingsIcon"})`
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #A1A8F2;
  position: absolute;
  right: 24px;
  top: 16px;
`,StyledToggleWrapper=Object(theme.b)("div").withConfig({displayName:"StyledToggleWrapper"})`
  display: flex;
`,StyledMobileListWrapper=Object(theme.b)("div").withConfig({displayName:"StyledMobileListWrapper"})`
  padding: 0 24px;
`;var icons=__webpack_require__(9),settings=__webpack_require__(193),icons_close=__webpack_require__(192),list=__webpack_require__(72),helpers=__webpack_require__(3),formControls_toggle=__webpack_require__(64);__webpack_require__.d(__webpack_exports__,"a",function(){return boxMobile_BoxMobile});class boxMobile_BoxMobile extends react.PureComponent{constructor(props){super(props),this.handleUrl=(()=>{const path=window.location.pathname;if("/"===path)return void this.setState({detailView:!1,settings:!1});const{type:type}=this.props,settingsString=`/${type}-settings`;path===`/${type}`?this.setView("detailView",!1):path===settingsString&&this.setView("settings",!1)}),this.setView=((view,updateHistory=!0)=>{const isSettingsView="settings"===view?!this.state.settings:this.state.settings,isDetailView="detailView"===view?!this.state.detailView:this.state.detailView;if(this.setState({detailView:isDetailView,settings:isSettingsView}),updateHistory){let newPath="";const{type:type}=this.props;isSettingsView||isDetailView?isSettingsView?newPath=`/${type}-settings`:isDetailView&&(newPath=`/${type}`):newPath="/",window.history.pushState(null,"",newPath)}}),this.onToggle=(()=>{this.props.checked&&this.setState({detailView:!1,settings:!1}),this.props.toggleAction&&this.props.toggleAction()}),this.getSettingsTitle=(title=>`${title} ${Object(helpers.a)("settings")}`),this.getToggleHeader=(props=>{const{title:title,type:type,checked:checked,toggle:toggle}=props,isDetailView=checked&&this.state.detailView;return react.createElement(StyledToggleHeader,{detailView:isDetailView},react.createElement(StyledLeft,null,isDetailView?react.createElement(StyledBackArrow,{onClick:this.setView.bind(this,"detailView")},react.createElement(icons.ArrowLeftIcon,null)):null,react.createElement(StyledTitle,{type:type,detailView:isDetailView},title)),react.createElement(StyledRight,null,toggle?react.createElement(StyledToggleWrapper,{detailView:isDetailView},react.createElement(formControls_toggle.a,{size:"small",onToggle:this.onToggle,checked:checked})):null))}),this.getBoxContent=(()=>{const{checked:checked}=this.props;return!checked||this.state.detailView?null:react.createElement(StyledContent,{detailView:this.state.detailView},react.createElement(StyleDetailsLink,{onClick:this.setView.bind(this,"detailView")},Object(helpers.a)("viewDetails"),react.createElement(StyledArrow,null,react.createElement(icons.CaratRightIcon,null))))}),this.getSettingsListTitle=(()=>react.createElement(StyledMobileListWrapper,null,react.createElement(StyledSettingsListTitle,{onClick:this.setView.bind(this,"settings")},react.createElement(StyledSettingsText,null,Object(helpers.a)("settings")),react.createElement(StyledSettingsIcon,null,react.createElement(settings.a,null))))),this.getSettingsContent=(show=>{const{title:title,settingsChild:settingsChild}=this.props;return show&&settingsChild?react.createElement(StyledFullSizeWrapper,null,react.createElement(StyledSettingsClose,{onClick:this.setView.bind(this,"settings")},react.createElement(icons_close.a,null)),react.createElement(StyledSettingsHeader,null,react.createElement(StyledSettingsTitle,null,this.getSettingsTitle(title)),react.createElement(StyledSettingsClose,{onClick:this.setView.bind(this,"settings")},react.createElement(icons_close.a,null))),react.createElement(StyledSettingsContent,null,settingsChild)):null}),this.getDetailContent=(show=>{const{children:children,settingsChild:settingsChild}=this.props;return show?react.createElement(StyledFullSizeWrapper,null,this.getToggleHeader(this.props),react.createElement(StyledDetailContent,null,react.createElement(StyledDetailInfo,null,react.createElement(StyledDescription,{detailView:this.state.detailView},this.props.description)),react.createElement(StyledChildContent,null,settingsChild?react.createElement(list.a,{title:this.getSettingsListTitle()}):null,children))):null}),this.state={detailView:!1,settings:!1}}componentDidMount(){this.handleUrl(),window.addEventListener("popstate",e=>{this.handleUrl()})}render(){const{id:id,description:description,checked:checked}=this.props,showDetailView=checked&&this.state.detailView,showSettingsView=checked&&this.state.settings;return react.createElement(StyledCard,{testId:id},react.createElement(StyledFlip,null,react.createElement(StyledContentWrapper,{open:!this.state.settings},this.getToggleHeader(this.props),react.createElement(StyledBreak,null),react.createElement(StyledDetailInfo,null,react.createElement(StyledDescription,null,description)),this.getBoxContent())),this.getDetailContent(showDetailView),this.getSettingsContent(showSettingsView))}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M13 26a1 1 0 0 1-.67-.26l-9-8.2a1 1 0 0 1 1.34-1.48l8.23 7.49L27.23 6.13A1 1 0 0 1 28.64 6a1 1 0 0 1 .13 1.4l-15 18.24a1 1 0 0 1-.7.36z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 28C9.37258 28 4 22.62742 4 16S9.37258 4 16 4s12 5.37258 12 12-5.37258 12-12 12zm0-2c5.52285 0 10-4.47715 10-10S21.52285 6 16 6 6 10.47715 6 16s4.47715 10 10 10zm0-4c-.55228 0-1-.44772-1-1s.44772-1 1-1 1 .44772 1 1-.44772 1-1 1zm-1-11c0-.55228.44772-1 1-1s1 .44772 1 1v6.07107c0 .55228-.44772 1-1 1s-1-.44772-1-1V11z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.394-9.081a1 1 0 0 0-1.212 1.59l3 2.286a1 1 0 0 0 1.5-.348l4-8a1 1 0 0 0-1.788-.894l-3.46 6.92-2.04-1.554z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 2c-1.645 0-3 1.355-3 3H9C7.355 5 6 6.355 6 8v18c0 1.645 1.355 3 3 3h14c1.645 0 3-1.355 3-3V8c0-1.645-1.355-3-3-3h-4c0-1.645-1.355-3-3-3zm0 2c.564 0 1 .436 1 1 0 .564-.436 1-1 1-.564 0-1-.436-1-1 0-.564.436-1 1-1zM9 7h4v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7h4c.565 0 1 .435 1 1v18c0 .565-.435 1-1 1H9c-.565 0-1-.435-1-1V8c0-.565.435-1 1-1zm3 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M15.25 21.65a1 1 0 0 0 1.5 0l5.89-4.88a1 1 0 1 0-1.28-1.54L17 18.84V4a1 1 0 0 0-2 0v14.84l-4.36-3.61a1 1 0 0 0-1.28 1.54z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M28 20a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-5a1 1 0 0 0-1-1z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 29a13 13 0 1 1 13-13 13 13 0 0 1-13 13zm0-24a11 11 0 1 0 11 11A11 11 0 0 0 16 5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10 22a1 1 0 0 1-.85-1.53A8 8 0 0 1 16 17a8.06 8.06 0 0 1 6.84 3.46 1 1 0 1 1-1.68 1.08A6.15 6.15 0 0 0 16 19a6 6 0 0 0-5.15 2.53A1 1 0 0 1 10 22zM12 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2zM20 14a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm0-2z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29 7.55c-.907.468-1.965.78-3.023.935 1.133-.701 1.965-1.793 2.418-3.118-1.058.623-2.192 1.091-3.4 1.325-1.69-1.785-4.319-2.206-6.453-1.033-2.135 1.173-3.263 3.659-2.769 6.1C11.541 11.527 7.46 9.5 4.814 5.99a5.444 5.444 0 0 0-.648 4.022 5.297 5.297 0 0 0 2.31 3.307c-.83 0-1.662-.156-2.418-.546.076 2.573 1.814 4.834 4.233 5.38-.756.234-1.588.234-2.419.078.756 2.261 2.797 3.82 5.064 3.898C8.744 24.001 5.796 24.86 3 24.39c4.767 3.282 10.928 3.484 15.888.52 4.959-2.963 7.855-8.577 7.467-14.476C27.413 9.654 28.32 8.72 29 7.55"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M23 13h1c.552 0 1 .447 1 1 0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1 0-.553.448-1 1-1zm3 9h-2v-4c0-.553-.448-1-1-1H9c-.552 0-1 .447-1 1v4H6V12h20v10zm-16 4h12v-7H10v7zm0-16h12V6H10v4zm16 0h-2V5c0-.553-.448-1-1-1H9c-.552 0-1 .447-1 1v5H6c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h2v3c0 .553.448 1 1 1h14c.552 0 1-.447 1-1v-3h2c1.103 0 2-.897 2-2V12c0-1.103-.897-2-2-2z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29 4v-.07a1 1 0 0 0 0-.24.42.42 0 0 0 0-.1.84.84 0 0 0-.18-.28.84.84 0 0 0-.29-.2h-.1a1 1 0 0 0-.37-.11H28a.87.87 0 0 0-.28.05h-.07L3.6 13.66a1 1 0 0 0-.12 1.77l8.17 4.94 5.14 8.16a1 1 0 0 0 .84.47h.08a1 1 0 0 0 .84-.6l10.37-24A1 1 0 0 0 29 4zm-5.47 3L12.21 18.38l-6.05-3.67zm-6.06 18.86l-3.83-6.08L25 8.41z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.3 9.364v17.015c0 .325.322.621.76.621h11.88c.438 0 .76-.296.76-.621V9.364H9.3zm15.4 0v17.015c0 1.467-1.252 2.621-2.76 2.621H10.06c-1.508 0-2.76-1.154-2.76-2.621V9.364H5a1 1 0 1 1 0-2h5.6v-1.91C10.6 4.053 11.873 3 13.36 3h5.28c1.487 0 2.76 1.052 2.76 2.455v1.909H27a1 1 0 0 1 0 2h-2.3zm-5.3-2v-1.91c0-.204-.302-.454-.76-.454h-5.28c-.458 0-.76.25-.76.455v1.909h6.8zm-4.6 16.272a1 1 0 1 1-2 0V12.727a1 1 0 0 1 2 0v10.91zm4.4 0a1 1 0 1 1-2 0V12.727a1 1 0 0 1 2 0v10.91z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:"32",height:"32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10.6 7.364v-1.91C10.6 4.053 11.873 3 13.36 3h5.28c1.487 0 2.76 1.052 2.76 2.455v1.909H27a1 1 0 0 1 0 2h-2.3v17.015c0 1.467-1.252 2.621-2.76 2.621H10.06c-1.508 0-2.76-1.154-2.76-2.621V9.364H5a1 1 0 1 1 0-2h5.6zm2 0h6.8v-1.91c0-.204-.302-.454-.76-.454h-5.28c-.458 0-.76.25-.76.455v1.909zM14 23.636V12.727a1 1 0 0 0-2 0v10.91a1 1 0 1 0 2 0zm6 0V12.727a1 1 0 0 0-2 0v10.91a1 1 0 1 0 2 0z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M9.6 26.4H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h5.6a1 1 0 0 1 1 1v14.4a1 1 0 0 1-1 1zm-4.6-2h3.6V12H5z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M24.8 28H16a6.08 6.08 0 0 1-3.47-1.26L9 23.77a1 1 0 1 1 1.28-1.54l3.57 3A4.22 4.22 0 0 0 16 26h8.8a.83.83 0 0 0 .78-.7L27 14.06a.44.44 0 0 0-.1-.33.45.45 0 0 0-.33-.13H19.2a1 1 0 0 1 0-2h7.37A2.4 2.4 0 0 1 29 14.3l-1.43 11.24A2.81 2.81 0 0 1 24.8 28z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19.2 13.6a1 1 0 0 1-1-1V5.4a1 1 0 0 1 2 0v7.2a1 1 0 0 1-1 1z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.8 13.6H9.6a1 1 0 0 1 0-2H12c.4-1.95 1.37-6.59 1.61-7.34A3.4 3.4 0 0 1 20.2 5.4a1 1 0 1 1-2 0A1.4 1.4 0 0 0 16.8 4a1.38 1.38 0 0 0-1.29.86c-.2.61-1.14 5.09-1.73 7.94a1 1 0 0 1-.98.8z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M18.12 26.62a6.1 6.1 0 0 1-4.24 0 1 1 0 0 0-.67 1.89 8.19 8.19 0 0 0 5.58 0 1 1 0 0 0-.67-1.89zM25 13.27a13.41 13.41 0 0 0-.45-2.81l-.06-.23c0-.15-.09-.28-.14-.42a.56.56 0 0 0 0-.12A7.69 7.69 0 0 0 24 9c-1.49-3.53-4.48-6-8-6S9.49 5.44 8 9a7.69 7.69 0 0 0-.28.72.56.56 0 0 0 0 .12c0 .14-.1.27-.14.42l-.06.23A13.41 13.41 0 0 0 7 13.27V14c0 6 4 11 9 11s9-5 9-11v-.73zM16 5a5.78 5.78 0 0 1 3.27 1A7.53 7.53 0 0 0 16 7.26a7.53 7.53 0 0 0-3.27-1.21A5.78 5.78 0 0 1 16 5zm-7 9v-.53V13a12 12 0 0 1 .36-2 3.79 3.79 0 0 1 .14-.48c.08-.24.17-.47.26-.69 0-.06 0-.12.08-.17A2.33 2.33 0 0 1 12 8a5.14 5.14 0 0 1 2.35.61A12.12 12.12 0 0 0 11 17a13.32 13.32 0 0 0 .53 3.92A10.14 10.14 0 0 1 9 14zm7 9c-1.56 0-3-1.88-3-6a10.07 10.07 0 0 1 3-7.21A10.07 10.07 0 0 1 19 17c0 4.12-1.44 6-3 6zm4.47-2.08A13.32 13.32 0 0 0 21 17a12.12 12.12 0 0 0-3.35-8.39A5.14 5.14 0 0 1 20 8a2.33 2.33 0 0 1 2.08 1.56s0 .11.08.17c.09.22.18.45.26.69a3.79 3.79 0 0 1 .14.48 12 12 0 0 1 .36 2v1a10.14 10.14 0 0 1-2.45 7.02z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M21.07 19.546a1.076 1.076 0 1 1-1.524 1.523L16 17.523l-3.546 3.546a1.074 1.074 0 0 1-1.523 0 1.076 1.076 0 0 1 0-1.523L14.477 16l-3.546-3.546a1.076 1.076 0 1 1 1.523-1.523L16 14.477l3.546-3.546a1.076 1.076 0 1 1 1.523 1.523L17.523 16l3.546 3.546zM16 2C8.28 2 2 8.28 2 16s6.28 14 14 14 14-6.28 14-14S23.72 2 16 2z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M30 16c0 7.73-6.27 14-14 14-7.732 0-14-6.269-14-14S8.268 2 16 2c7.73 0 14 6.27 14 14zm-15.573 3.374l-3.495-3.04a1.167 1.167 0 0 0-1.531 1.761l4.42 3.845c.503.438 1.27.365 1.682-.16l7.646-9.726a1.167 1.167 0 0 0-1.834-1.442l-6.888 8.762z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M26.43 6H7.57A2.6 2.6 0 0 0 5 8.64V12H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v3.36A2.6 2.6 0 0 0 7.57 26H16a1 1 0 0 0 0-2H7.57a.61.61 0 0 1-.57-.64V20h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H7V8.64A.61.61 0 0 1 7.57 8h18.86a.61.61 0 0 1 .57.64V16a1 1 0 0 0 2 0V8.64A2.6 2.6 0 0 0 26.43 6zM11 18H5v-4h6z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M8.92 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM23 21a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1zM23.56 18.17a.76.76 0 0 0-.18-.09L23.2 18a1 1 0 0 0-.58.06 1.15 1.15 0 0 0-.33.21A1.05 1.05 0 0 0 22 19a1 1 0 0 0 .08.38 1 1 0 0 0 .21.33 1.15 1.15 0 0 0 .33.21A1 1 0 0 0 23 20h.2l.18-.06a.76.76 0 0 0 .18-.09 1.58 1.58 0 0 0 .15-.12 1 1 0 0 0 .21-.33A1 1 0 0 0 24 19a1.05 1.05 0 0 0-.29-.71z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#E4BDE5",d:"M22.052 11.456V6.667a.654.654 0 0 0-.35-.586.643.643 0 0 0-.674.044C16.37 9.417 13.696 9.84 11.887 9.84H6.714C4.666 9.84 3 11.543 3 13.637v1.41c0 2.093 1.666 3.796 3.714 3.796h2.483l2.695 6.677a.65.65 0 0 0 .849.363.672.672 0 0 0 .355-.867l-2.493-6.173h1.278c6.303 0 8.881 3.412 8.998 3.57a.643.643 0 0 0 .722.238.663.663 0 0 0 .445-.63v-4.783c1.29-.304 2.25-1.48 2.25-2.891.01-1.41-.955-2.592-2.244-2.89zM4.3 15.046v-1.41c0-1.36 1.082-2.467 2.414-2.467h2.27v6.346h-2.27c-1.332 0-2.414-1.107-2.414-2.468zm16.452 5.376c-1.443-1.215-4.276-2.907-8.87-2.907h-1.603v-6.346h1.602c1.857 0 4.52-.39 8.87-3.254v12.507zm1.3-4.583V12.85c.562.255.95.83.95 1.497a1.625 1.625 0 0 1-.95 1.492z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#F3CD72",d:"M28.257 13.5h-2.62c-.372 0-.673.28-.673.625s.301.625.673.625h2.62c.372 0 .673-.28.673-.625 0-.35-.3-.625-.673-.625zm-3.556-1.337a.636.636 0 0 0 .822.358l2.396-.933a.626.626 0 0 0 .356-.815.634.634 0 0 0-.821-.354l-2.396.934a.627.627 0 0 0-.357.81zm3.218 4.814l-2.394-.933a.633.633 0 0 0-.821.354.626.626 0 0 0 .356.815l2.395.934c.077.03.155.04.232.04.253 0 .49-.153.588-.4a.623.623 0 0 0-.356-.81z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#C12D7C",d:"M14.384 15.32l-.167-.494h-1.01l-.167.494h-.535l.913-2.596h.592l.912 2.596h-.538zm-.305-.91l-.367-1.085-.367 1.085h.734zm1.054-.126c0-.643.407-1.055.923-1.055a.82.82 0 0 1 .658.32v-.978h.516v2.749h-.516v-.305c-.12.19-.345.338-.661.338-.513 0-.92-.427-.92-1.07zm1.585.007c0-.39-.255-.605-.535-.605-.272 0-.53.208-.53.598s.258.613.53.613c.28 0 .535-.216.535-.606zm2.573.442c0 .353-.302.62-.792.62-.506 0-.858-.3-.88-.683h.512c.019.156.16.275.364.275.2 0 .309-.093.309-.212 0-.368-1.138-.134-1.138-.888 0-.341.298-.616.796-.616.487 0 .782.271.81.68h-.486c-.015-.16-.138-.268-.338-.268-.19 0-.287.078-.287.197 0 .375 1.115.141 1.13.895z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"16",cy:"16",r:"13",fill:"#f7931a"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M20 11.8l-.48-.15.67-2.26-1.73-.52-.67 2.27-1.48-.44.69-2.27-.41-.12-1.68-.5-.66 2.19-2.05-.62-.58 1.94 2.05.61-2.1 7.07-2.05-.61-.58 1.94 2.05.61-.55 1.84.41.12 1.68.5.58-1.92 1.48.44-.59 1.92 1.73.52.57-1.93.49.15a3.34 3.34 0 0 0 .94.14 3.28 3.28 0 0 0 2.85-4.88 3.27 3.27 0 0 0 1.62-2A3.28 3.28 0 0 0 20 11.8zm-.92 8a1.38 1.38 0 0 1-.68.85 1.4 1.4 0 0 1-1.08.11l-3.65-1.08.83-2.68 3.64 1.09a1.41 1.41 0 0 1 .95 1.75zm1.35-4.5a1.43 1.43 0 0 1-1.77 1L15 15.21l.81-2.72 3.64 1.09a1.39 1.39 0 0 1 .84.68 1.46 1.46 0 0 1 .15 1.08z",fill:"#fff"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{id:"outlines",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"cls-1",d:"M16 2.94l-5.81 9.62L8 16.18l8-3.62V2.94z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#393939",fillRule:"evenodd",d:"M8 16.18l2.57 1.52L16 20.9v-8.34l-8 3.62z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"cls-3",d:"M16 2.94v9.62l8 3.62-2.19-3.62L16 2.94z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#151515",fillRule:"evenodd",d:"M16 17.7v3.2l5.43-3.2L24 16.18l-8-3.62v5.14z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"cls-1",d:"M8 17.7l2.28 3.2L16 28.94v-6.53l-2.56-1.51L8 17.7z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{className:"cls-3",d:"M18.57 20.9L16 22.41v6.53l5.72-8.04L24 17.7l-5.43 3.2z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{cx:"16",cy:"16",r:"13",fill:"#bebebe"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#fff",d:"M16.09 16.29l1.99-.73.5-1.86-.02-.05-1.97.72 1.42-5.34h-4.02l-1.85 6.96-1.55.57-.51 1.93 1.54-.57-1.09 4.11h10.7l.69-2.56h-6.68l.85-3.18"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{fill:"#D1D1DB",fillRule:"evenodd"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M17.486 23.025h.052c.89 0 1.717-.173 2.459-.515a.721.721 0 1 0-.605-1.31c-.551.255-1.174.383-1.854.383-.4 0-.747.322-.747.72 0 .399.297.722.695.722zm-4.174-1.847c.048.13.195.527 1.224 1.025a.72.72 0 0 0 .964-.335.72.72 0 0 0-.335-.965c-.361-.174-.536-.314-.567-.35-.139-.373-.518-.499-.892-.364-.374.138-.53.616-.394.989zm-1.962-8.042l-8.27 3.819L1.9 2.772l9.45 10.364zm8.08-3.731L12.723 12.5l-8.94-9.805L19.43 9.405zm-7.604 8.048l-1.74-2.143 1.74-.804v2.947zm-10.097.65a.719.719 0 0 0 1.021.593l5.984-2.763 3.253 4.007a.72.72 0 0 0 .801.226.72.72 0 0 0 .48-.68v-5.647l8.238-3.804a.724.724 0 0 0-.017-1.32L1.304.062 1.287.054c-.01-.005-.023 0-.033-.005A.716.716 0 0 0 .962.008C.934.009.906.015.877.02A.683.683 0 0 0 .644.11C.624.122.6.12.582.133.572.14.568.153.56.161.547.172.53.175.518.187a.706.706 0 0 0-.227.557C.293.757.284.767.286.78l1.443 17.323zM31.973 24.859c.033-.136.129-.547-.454-1.53a.72.72 0 0 0-.989-.253.72.72 0 0 0-.253.988c.205.345.273.558.28.605-.09.388.156.702.542.797.388.09.782-.222.874-.607M29.231 20.908l-.043-.028a5.824 5.824 0 0 0-2.335-.928.721.721 0 1 0-.22 1.427c.602.09 1.192.328 1.759.703.333.22.8.144 1.02-.188.22-.332.151-.766-.18-.986M24.335 20.46a.723.723 0 0 0-.91-.461 7.875 7.875 0 0 0-1.102.458.723.723 0 0 0 .648 1.29c.31-.156.61-.28.9-.376a.724.724 0 0 0 .464-.91"})));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{transform:"translate(2 2)",fill:"none",fillRule:"evenodd"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle",{fill:"#FF4500",cx:"14",cy:"14",r:"13.987"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.33 14a2.034 2.034 0 0 0-2.036-2.036 2.05 2.05 0 0 0-1.419.567c-1.402-1.001-3.321-1.652-5.458-1.735l.935-4.373 3.037.65a1.452 1.452 0 0 0 2.905-.066c0-.802-.651-1.452-1.452-1.452-.568 0-1.069.333-1.302.817l-3.388-.717c-.1-.017-.2 0-.268.05a.324.324 0 0 0-.15.233L13.7 10.812c-2.17.067-4.122.718-5.54 1.736a2.05 2.05 0 0 0-1.42-.567 2.034 2.034 0 0 0-.834 3.888c-.033.2-.05.4-.05.618 0 3.138 3.655 5.691 8.162 5.691 4.506 0 8.161-2.537 8.161-5.691 0-.2-.016-.417-.05-.618A2.056 2.056 0 0 0 23.33 14zM9.343 15.452a1.453 1.453 0 0 1 2.905 0c0 .801-.651 1.452-1.452 1.452-.802.017-1.453-.65-1.453-1.452zm8.129 3.856c-1.002 1.001-2.905 1.068-3.455 1.068-.568 0-2.47-.084-3.455-1.068a.373.373 0 0 1 0-.535c.15-.15.384-.15.534 0 .634.635 1.97.852 2.92.852.952 0 2.304-.217 2.922-.852.15-.15.383-.15.534 0a.406.406 0 0 1 0 .535zm-.268-2.387a1.453 1.453 0 0 1 0-2.904c.802 0 1.453.65 1.453 1.452 0 .784-.651 1.452-1.453 1.452z",fill:"#FFF",fillRule:"nonzero"})));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#FB542B",d:"M27.811 20.042l-5.28 5.282a4.738 4.738 0 0 1-2.646 1.34l-3.557.548c-.24.036-.483.055-.725.055H6.467V20.14l1.998-1.249a4.761 4.761 0 0 1 2.526-.724h7.07a.867.867 0 0 1 0 1.733h-4.556a1.733 1.733 0 0 0 0 3.467h6.584c.545 0 1.07-.205 1.47-.575l4.695-4.333c.213-.194.492-.298.78-.291a1.099 1.099 0 0 1 .777 1.875zM3.867 28.133H5.6v-8.666H3.867v8.666zM26.999 17.3c-.494 0-.97.185-1.333.52l-4.695 4.333c-.24.223-.555.347-.882.347h-6.584a.867.867 0 1 1 0-1.733h4.556a1.733 1.733 0 1 0 0-3.467h-7.07c-1.056 0-2.09.297-2.986.857l-1.538.963v-.52H3V29h3.467v-.867h9.136c.286 0 .573-.022.856-.065l3.558-.547a5.598 5.598 0 0 0 3.126-1.585l5.281-5.281c.37-.368.577-.868.576-1.39a1.976 1.976 0 0 0-1.986-1.965H27z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#D62BA3",d:"M14.267 8.2a.433.433 0 0 0 .402-.273L16 4.6l1.33 3.327a.433.433 0 0 0 .403.273h3.034l-2.427 1.82a.433.433 0 0 0-.158.46l.916 3.361-2.81-2.498a.433.433 0 0 0-.558-.015l-3.128 2.502 1.206-3.315a.433.433 0 0 0-.148-.495L11.233 8.2h3.034zm-1.384 2.32l-1.624 4.464a.433.433 0 0 0 .678.486l4.048-3.238 3.627 3.223a.433.433 0 0 0 .706-.437l-1.222-4.481 3.23-2.424a.433.433 0 0 0-.26-.78h-4.04l-1.623-4.06a.433.433 0 0 0-.805 0l-1.625 4.06h-4.04a.433.433 0 0 0-.26.78l3.21 2.407z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#9563D4",d:"M10.868 4.652l.626-.626 1.769 1.77-.625.625-1.77-1.769M18.395 5.796l1.769-1.77.625.626-1.769 1.769-.625-.625M8.816 11.553h2.395v-.685H8.816zM20.789 11.553h2.395v-.685h-2.395zM15.316 16H16v-2.395h-.684z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M7 21.128h18a4 4 0 0 1 0 8H7a4 4 0 0 1 0-8",fill:"#696FDC"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M25.575 25.787c0 .409-.332.776-.93.776-.548 0-.969-.282-.977-.772h.565c.015.208.155.346.4.346.25 0 .395-.13.395-.317 0-.56-1.356-.222-1.352-1.162 0-.468.383-.75.926-.75.54 0 .91.27.943.739h-.58c-.012-.171-.152-.304-.377-.308-.208-.008-.363.093-.363.304 0 .52 1.35.23 1.35 1.144zm-2.212-1.04c0 .394-.27.795-.95.795h-.44v.996h-.528v-2.593h.968c.633 0 .95.353.95.802zm-1.39.375h.417c.298 0 .43-.145.43-.375 0-.237-.132-.38-.43-.38h-.418v.755zm-1.65 1.416h.526v-2.593h-.527v2.593zm-2.39-2.173v-.42h1.93v.42h-.702v2.173h-.527v-2.173h-.702zm-3.083 1.73h.373c.555 0 .867-.312.867-.85 0-.54-.312-.861-.867-.861h-.373v1.712zm.392-2.15c.841 0 1.387.513 1.387 1.3 0 .783-.546 1.293-1.387 1.293h-.919v-2.593h.92zM13.2 23.94h.528v2.597H13.2l-1.194-1.78v1.78h-.528V23.94h.528l1.194 1.784V23.94zm-2.276 0v.424h-.998v.65h.885v.412h-.885v.687h.998v.424H9.398V23.94h1.526zm-2.057 1.846c0 .409-.332.776-.93.776-.548 0-.969-.282-.977-.772h.565c.015.208.155.346.4.346.25 0 .396-.13.396-.317 0-.56-1.357-.222-1.353-1.162 0-.468.384-.75.927-.75.538 0 .908.27.942.739h-.58c-.012-.171-.15-.304-.377-.308-.208-.008-.362.093-.362.304 0 .52 1.35.23 1.35 1.144z",fill:"#FFF"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.84 11.423l.733-.493 2.128-4.666v-2.45s.943-.71 1.741 0c.798.709 1.973 1.7.49 5.35h4.888c.426 0 2.65.654 1.127 2.758 0 0 1.402 1.523-.436 2.418 0 0 .842 1.62-.69 2.128 0 0 .763 1.862-.979 2.273h-7.108c-.508 0-1.563-.315-1.894-.726v-6.592z",fill:"#FFF"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M23.578 12.259c.128.142.444.594.37.976-.048.247-.268.467-.655.655a.506.506 0 0 0-.226.679c.082.163.266.662.122 1.01-.077.187-.249.323-.526.414a.506.506 0 0 0-.307.663c.077.192.233.776.032 1.164-.105.202-.304.34-.607.42h-7.047c-.399 0-1.093-.23-1.394-.441v-6.11l.512-.344a.491.491 0 0 0 .176-.207l2.128-4.667a.491.491 0 0 0 .045-.207V4.099c.223-.1.597-.19.935.11.743.66 1.668 1.482.334 4.768a.5.5 0 0 0 .462.688h4.887c.181.004.873.213 1.087.643.2.402-.088.94-.364 1.32a.503.503 0 0 0 .036.63zm1.215-2.413c-.46-.901-1.608-1.181-1.973-1.181h-4.164c1.09-3.114.18-4.282-.882-5.225-.87-.775-1.933-.356-2.373-.026a.5.5 0 0 0-.2.4v2.34l-1.96 4.302a.493.493 0 0 0-.4-.214H7.63a.5.5 0 0 0-.5.5v8.52a.5.5 0 0 0 .5.5h5.21c.276 0 .5-.222.5-.5v-.342c.51.21 1.075.32 1.393.32h7.11a.496.496 0 0 0 .114-.013c.781-.184 1.15-.62 1.32-.953.276-.536.23-1.13.144-1.532.397-.236.595-.544.695-.788.204-.504.123-1.032.015-1.396.445-.305.714-.688.8-1.14.116-.618-.152-1.18-.373-1.515.57-.943.451-1.631.234-2.057z",fill:"#444"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#83DC94",d:"M8.13 18.763h4.21v-7.521H8.13z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#6441a4",d:"M5.76 3L4 7.46V25.7h6.25V29h3.52l3.32-3.3h5.07L29 18.91V3H5.76z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M7.91 21.63h5.27v3.3l3.32-3.3h6.25l3.91-3.88V5.33H7.91zm12.5-11.84h2.34v6.79h-2.34zm-6.25 0h2.34v6.79h-2.34z",fill:"#fff"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M28.4 5.37A10.74 10.74 0 0 1 25 6.69a5.33 5.33 0 0 0-6.45-1 5.69 5.69 0 0 0-2.77 6.1A14.74 14.74 0 0 1 4.81 6a5.44 5.44 0 0 0-.64 4 5.27 5.27 0 0 0 2.31 3.31 5.23 5.23 0 0 1-2.42-.55 5.6 5.6 0 0 0 4.23 5.38 4.93 4.93 0 0 1-2.42.08 5.64 5.64 0 0 0 5.07 3.9A9.86 9.86 0 0 1 3 24.39a14.67 14.67 0 0 0 15.89.52 15.64 15.64 0 0 0 7.46-14.48A9.49 9.49 0 0 0 29 7.55a9.94 9.94 0 0 1-3 .94 5.92 5.92 0 0 0 2.4-3.12z",fill:"#1da1f3"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M16 2.5C8.268 2.5 2 8.689 2 16.324c0 6.106 4.01 11.287 9.575 13.115.7.127.956-.3.956-.667 0-.327-.013-1.197-.02-2.35-3.893.835-4.715-1.853-4.715-1.853-.637-1.597-1.555-2.022-1.555-2.022-1.27-.858.097-.84.097-.84 1.405.098 2.144 1.424 2.144 1.424 1.249 2.112 3.276 1.502 4.074 1.15.127-.894.488-1.504.889-1.85-3.109-.348-6.377-1.534-6.377-6.83 0-1.51.546-2.743 1.441-3.71-.144-.35-.625-1.755.137-3.658 0 0 1.176-.372 3.85 1.417a13.57 13.57 0 0 1 3.505-.466 13.59 13.59 0 0 1 3.505.466c2.672-1.789 3.846-1.417 3.846-1.417.764 1.903.283 3.308.139 3.658.897.967 1.44 2.2 1.44 3.71 0 5.31-3.274 6.478-6.393 6.82.503.427.95 1.27.95 2.56 0 1.847-.017 3.338-.017 3.791 0 .37.252.8.963.666C25.992 27.606 30 22.428 30 16.324 30 8.689 23.731 2.5 16 2.5",fill:"#181717",fillRule:"evenodd"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29 26.4a2.6 2.6 0 0 1-2.6 2.6H5.6A2.6 2.6 0 0 1 3 26.4V5.6A2.6 2.6 0 0 1 5.6 3h20.8A2.6 2.6 0 0 1 29 5.6v20.8",fill:"#31AFD8"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M24.877 11.634c-.083 1.83-1.36 4.333-3.831 7.512-2.555 3.319-4.716 4.979-6.484 4.979-1.095 0-2.022-1.01-2.78-3.032l-1.516-5.561c-.562-2.021-1.165-3.033-1.81-3.033-.14 0-.633.296-1.475.885l-.883-1.138c.927-.815 1.842-1.63 2.741-2.445 1.237-1.068 2.166-1.63 2.785-1.687 1.462-.14 2.362.858 2.7 2.998.365 2.308.617 3.743.76 4.305.421 1.915.885 2.872 1.391 2.872.393 0 .984-.621 1.772-1.864.786-1.242 1.208-2.187 1.265-2.837.112-1.071-.31-1.609-1.265-1.609-.45 0-.914.104-1.39.308.923-3.024 2.687-4.492 5.29-4.409 1.931.057 2.842 1.309 2.73 3.756",fill:"#FFFFFE"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M29 16a20.83 20.83 0 0 0-1-7.43 3.74 3.74 0 0 0-2.41-2A56.35 56.35 0 0 0 16 6a56.35 56.35 0 0 0-9.55.58A3.74 3.74 0 0 0 4 8.57 20.83 20.83 0 0 0 3 16a20.83 20.83 0 0 0 1 7.43 3.74 3.74 0 0 0 2.41 2A56.35 56.35 0 0 0 16 26a56.35 56.35 0 0 0 9.55-.58 3.74 3.74 0 0 0 2.41-2A20.83 20.83 0 0 0 29 16",fill:"#ff0100"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#fff",d:"M13 20v-8l7.02 3.96L13 20z"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{id:"gift",d:"M13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5zm-4.00018-15C8.68597 9.08217 8.5 8.5628 8.5 8c0-1.38071 1.11929-2.5 2.5-2.5.8178 0 1.54389.39267 2 .99976.45611-.60709 1.1822-.99976 2-.99976 1.38071 0 2.5 1.11929 2.5 2.5 0 .5628-.18597 1.08217-.49982 1.5H19c.27614 0 .5.22386.5.5v3c0 .27614-.22386.5-.5.5h-.5V19c0 .27614-.22386.5-.5.5H8c-.27614 0-.5-.22386-.5-.5v-5.5H7c-.27614 0-.5-.22386-.5-.5v-3c0-.27614.22386-.5.5-.5h1.99982zM11 9.5h1.5V8c0-.82843-.67157-1.5-1.5-1.5S9.5 7.17157 9.5 8s.67157 1.5 1.5 1.5zm2.5 0H15c.82843 0 1.5-.67157 1.5-1.5s-.67157-1.5-1.5-1.5-1.5.67157-1.5 1.5v1.5zm0 1v2h5v-2h-5zm-1 0h-5v2h5v-2zm0 3h-4v5h4v-5zm1 0v5h4v-5h-4z"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("use",{transform:"translate(3 3)",xlinkHref:"#gift"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_template__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5);const Graphic=react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 0 32 32"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{id:"megaphone",d:"M13 25.5C6.09644 25.5.5 19.90356.5 13S6.09644.5 13 .5 25.5 6.09644 25.5 13 19.90356 25.5 13 25.5zm0-1c6.35127 0 11.5-5.14873 11.5-11.5S19.35127 1.5 13 1.5 1.5 6.64873 1.5 13 6.64873 24.5 13 24.5zM11.86758 9.48283H6.53994c.07477 0 .054.02778.054.12828v4.33333c0 .1005.02077.12829-.054.12829h5.39945c.32803 0 .59394.26591.59394.59394 0 .32802-.26591.59394-.59394.59394H6.53994c-.6687 0-1.13388-.62222-1.13388-1.31617V9.61111c0-.69394.46518-1.31616 1.13388-1.31616h5.32764v1.18788zM9.59394 20c0 .32802-.26592.59394-.59394.59394-.32802 0-.59394-.26592-.59394-.59394V8.88889c0-.32802.26592-.59394.59394-.59394.32802 0 .59394.26592.59394.59394V20zM12.224 9.4102c-.2879.15718-.64873.0512-.80591-.2367-.15719-.28791-.05122-.64873.2367-.80592l5.29145-2.88889c.3958-.21608.87855.07037.87855.52131v11.55556c0 .45093-.48275.73739-.87855.5213l-5.29146-2.88889c-.2879-.15718-.39388-.518-.2367-.80591.1572-.28791.51801-.39389.80592-.2367l4.41291 2.40924V7.00095l-4.4129 2.40925zm5.65479.7292c-.32803 0-.59394-.26592-.59394-.59395 0-.32802.26591-.59393.59394-.59393 1.502 0 2.71515 1.23926 2.71515 2.7606 0 1.52134-1.21315 2.7606-2.71515 2.7606-.32803 0-.59394-.2659-.59394-.59393 0-.32803.26591-.59394.59394-.59394.84023 0 1.52727-.70184 1.52727-1.57273 0-.87089-.68705-1.57273-1.52727-1.57273z"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("use",{transform:"translate(3 3)",xlinkHref:"#megaphone"}));__webpack_exports__.a=Object(_template__WEBPACK_IMPORTED_MODULE_1__.a)(Graphic)},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/private-window-tor.c168145d.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/private-window.dbdc336c.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ddgo_siteBanner.e9f3f6bf.svg"},,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _colors__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),_brave_default__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36);const darkTheme=Object.assign({},_brave_default__WEBPACK_IMPORTED_MODULE_1__.a,{name:"Brave Dark",color:Object.assign({},_brave_default__WEBPACK_IMPORTED_MODULE_1__.a.color,{contextMenuBackground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.black,contextMenuForeground:_colors__WEBPACK_IMPORTED_MODULE_0__.a.white})});__webpack_exports__.a=darkTheme},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={about:"about",accept:"Accept",activityCopy:"©2016 –2018 Brave Software. Brave is a registered trademark of Brave Software. Site names may be trademarks or registered trademarks of the site owner.",activityNote:"To protect your privacy, this Brave Rewards statement is not saved, recorded or logged anywhere other than on your device (this computer). It cannot be retrieved from Brave in the event of data loss on your device.",addFunds:"add funds",addFundsFAQ:"the FAQ",addFundsNote:"Reminder: The Brave Wallet is unidirectional and BAT flows to creators sites. For more information about Brave Rewards, please visit",addFundsQR:"Show QR Code",addFundsText:"Be sure to use the address below that matches the type of cryto you own. It will be converted automatically to BAT by Uphold and appear as an increased balance in your Brave Rewards wallet. Please allow up to one hour for your wallet balance to update.",addFundsTitle:"Send cryptocurrency from your external account to your Brave Rewards wallet.",adsEarnings:"earned from ads",adsNotSupported:"Sorry! Ads are not yet available in your region.",allowTip:"Allow tips on",amount:"Amount",and:"and",autoTipText:"You are automatically sending a tip to:",backup:"Backup",backupNow:"Backup Now",backupWalletTitle:"Backup Wallet",bat:"BAT",braveAdsDesc:"No action required. Just collect tokens. Your data is safe with our Shields.",braveAdsTitle:"Brave Ads",braveAdsLaunchTitle:"Brave Ads has arrived!",braveContributeDesc:"Set budget and browse normally. Your favorite sites get paid automatically.",braveContributeTitle:"Auto-Contribute",braveRewards:"Brave Rewards",braveRewardsDesc:"Earn tokens for viewing privacy-respecting ads, and pay it forward by supporting content creators you love!",braveRewardsOptInText:"Yes, I'm In!",braveRewardsSubTitle:"Get Rewarded for Browsing!",braveRewardsTeaser:"How it works...",braveRewardsTitle:"Brave Rewards",braveVerified:"Verified Creators",cancel:"Cancel",captchaDrag:"Drag the BAT Icon on to the",captchaOnTheWay:"Your token grant is on its way.",captchaProveHuman:"Prove that you are human!",captchaTarget:"target.",captchaMissedTarget:"Hmm… Not Quite. Try Again.",claim:"Claim",closeBalance:"Closing Balance",contribute:"Contribute",contributeAllocation:"Auto-Contribute Allocation",contributeTooltip:"Auto-Contribute Settings",contributionTips:"Contributions & Tips",copy:"Copy",currentDonation:"You’re currently donating {{currentDonation}} BAT to this site every month.",braveRewardsCreatingText:"Creating wallet",date:"Date",deposit:"Deposit",deposits:"Deposits",description:"Description",disabledPanelOff:"Off",disabledPanelSettings:"Settings.",disabledPanelPrivateText:"Brave Rewards is not available while in a Private Window.",disabledPanelText:"You are not currently accruing any Rewards benefits while browsing. Turn Rewards back on in",disabledPanelTextTwo:"Earn by viewing privacy-respecting ads, and pay it forward to support content creators you love.",disabledPanelTitle:"Brave Rewards is",dndCaptchaText1:"Drag and drop the token logo onto the",dndCaptchaText2:"target",donation:"Donation",donationAmount:"Donation amount",donateMonthly:"Tip this site Monthly",donateNow:"Send a tip…",donationFailureMsg:"Looks like something went wrong. Please try again later.",donationSent:"Donation Sent!",donationTips:"Donation & Tips",done:"Done",doMonthly:"Set recurring donation",downloadPDF:"Download as PDF",earningsAds:"Earnings from Ads",earningsClaimBat:"BAT,",earningsClaimDefault:"Your Ads earnings are available.",earningsClaimOne:"Your Ads earnings,",earningsClaimTwo:"are available.",enableRewards:"Enable Brave Rewards",enableTips:"Enable Tips",excludeSite:"Exclude this site",excludedSites:"Excluded Sites",excludedSitesText:"Sites excluded from Auto-Contributions:",expiresOn:"expires on",firstTipDateText:"Your first monthly tip will be sent on:",for:"for",grants:"Grants",grantDisclaimer:"Unused tokens by the expiration date will be automatically returned to the Brave User Growth Pool.",grantExpire:"Grant Expiration Date",import:"import",includeInAuto:"Include in Auto-Contribute",learnMore:"Learn More",makeMonthly:"Make this monthly",manageWallet:"Manage Your Wallet",monthApr:"Apr",monthAug:"August",monthDec:"December",monthFeb:"February",monthJan:"January",monthJul:"July",monthJun:"June",monthMar:"March",monthMay:"May",monthNov:"November",monthOct:"October",monthSep:"September",monthlyText:"Monthly",monthlyTips:"Monthly Tips!",newGrant:"A free token grant is available.",noActivity:"No activities yet…",noGrants:"Currently no token grant is available.",notEnoughTokens:"Not enough tokens. Please",noThankYou:"No, thank you",off:"off",ok:"ok",on:"on",oneTime:"One time",oneTimeDonation:"One-time Tips",openBalance:"Opening Balance",payment:"Payment",paymentMonthly:"Payment made every {{day}}th day in each month.",paymentNotMade:"Payment not made.",paymentWarning:"When your balance is not enough to cover the combined total of Auto-Contribute and the recurring donations, these payments are skipped for the period.",pendingContributions:"Pending Contributions",pendingContributionEmpty:"No pending contributions…",pendingContributionRemoveAll:"Remove All",pendingTypeac:"Auto-Contribute",pendingTyperecurring:"Recurring tip",pendingTypetip:"One-time tip",pendingUntil:"Pending until",pinnedSitesHeader:"Pinned sites are now",pinnedSitesMsg:"Here's how monthly tips work:",pinnedSitesOne:"Monthly tips do not come out of your Auto-Contribute payment. They're separate.",pinnedSitesTwo:"Each site is paid a fixed amount monthly.",pinnedSitesThree:"Monthly tips are paid out all at once, each month. If you're using Auto-Contribute, tips go out at the same time as your monthly Auto-Contribute payment.",pinnedSitesFour:"You can remove any site receiving monthly tips from inside of the Tips panel.",pleaseNote:"Please note:",print:"Print",privacyPolicy:"Privacy Policy",readyToTakePart:"Ready to get started?",readyToTakePartOptInText:"Yes I'm Ready!",readyToTakePartStart:"You can start with the",recoveryKeys:"Recovery Key",recurring:"Recurring",recurringDonation:"Recurring Donation",recurringDonations:"Monthly Tips",remove:"remove",reservedAllLink:"Show all pending contributions",reservedAmountText:"You’ve designated {{reservedAmount}} BAT for creators who haven’t yet signed up to receive contributions. We’ll keep trying to contribute until they verify, or until 90 days have passed.",reservedMoreLink:"Learn more.",restore:"Restore",restoreAll:"Restore All",restoreSite:"Restore this site",reviewSitesMsg:"Your pinned sites have been moved to",rewardsBackupText1:"Backup your Wallet",rewardsBackupText2:"Keep this recovery key safe.",rewardsBackupText3:"You can always use this key to get your wallet back if something happens to your browser or computer. But make sure to protect it — anyone who gets this key could steal your wallet. It's probably safest to write it down on a piece of paper, or wherever else you keep important info.",rewardsBannerText1:"Thanks for stopping by. We joined Brave’s vision of protecting your privacy because we believe that fans like you would support us in our effort to keep the web a clean and safe place to be.",rewardsBannerText2:"Your donation is much appreciated and it encourages us to continue to improve our content.",rewardsContribute:"Auto-Contribute",rewardsContributeAttention:"Attention",rewardsContributeAttentionScore:"Attention",rewardsContributeText1:"You’re currently supporting",rewardsExcludedText1:"You've excluded",rewardsExcludedText2:"sites from Auto-Contribute.",rewardsOffText1:"Do you know that you’ve been paying for the web content with your data for the digital ads? You didn’t have a voice in it and worse, you’re exposed to privacy and security risks.",rewardsOffText2:"Brave Rewards allows you to take control back.",rewardsOffText3:"Today, Brave welcomes you to the new internet.",rewardsOffText4:"One where your time is valued, your personal data is kept private, and you actually get paid for your attention.",rewardsOffText5:"With your old browser, you paid to browse the web by viewing ads with your valuable attention. You spent your valuable time downloading invasive ad technology that transmitted your valuable private data to advertisers — without your consent.",rewardsPanelEmptyText1:"Sadly, no tokens yet.",rewardsPanelEmptyText2:"3 ways to fill your wallet:",rewardsPanelEmptyText3:"You can add funds.",rewardsPanelEmptyText4:"You can earn tokens from Brave Ads.",rewardsPanelEmptyText5:"Occasionally, you'll be offered free token grants from Brave. Be sure to keep an eye out for the alert!",rewardsPanelOffText1:"Get Rewarded for Browsing!",rewardsPanelOffText2:"Earn tokens for your attention to ads and pay it forward to support content creators you value!",rewardsPanelText1:"Add, withdraw and manage funds at",rewardsPanelText2:"Brave wallet is managed by",rewardsPanelText3:"Brave Rewards is built on the Basic Attention Token. Learn more about BAT",rewardsPanelText4:"here",rewardsRestoreText1:"Restore your Wallet",rewardsRestoreText2:"Use your recovery key to restore your wallet.",rewardsRestoreText3:"Restoring with a recovery key will replace your current wallet. So make sure you empty or back up your current wallet before restoring.",rewardsRestoreText4:"Enter your recovery key or",rewardsSummary:"Rewards Summary",rewardsWhy:"Why Brave Rewards…",saveAsFile:"Save",seeAllItems:"See all {{numItems}} items",seeAllSites:"See all {{numSites}} sites",sendDonation:"Send my donation",sendTip:"Send my Tip",serviceText:"By clicking 'Enable Brave Rewards', you indicate that you have read and agree to the",serviceTextToggle:"By turning on Brave Rewards, you indicate that you have read and agree to the",serviceTextPanelWelcome:"By clicking ‘Join Rewards’, you indicate that you have read and agree to the",serviceTextWelcome:"By clicking ‘Yes, I'm in!’, you indicate that you have read and agree to the",serviceTextReady:"By clicking ‘Yes, I'm Ready!’, you indicate that you have read and agree to the",settings:"Settings",showAll:"Show All",site:"site",siteBannerNoticeNote:"NOTE:",siteBannerNoticeText:"This Creator has not yet verified their site. As soon as they verify with Brave, they will receive your tip.",sites:"sites",tellOthers:"Tell others about your tip.",supportedSites:"Supported Sites",thankYou:"Thank You!",termsOfService:"Terms of Service",tipOnLike:"Tip on like",tipText:"You've just sent a tip to:",titleBAT:"Basic Attention token (BAT)",titleBTC:"BitCoin (BTC)",titleETH:"Etherium (ETH)",titleLTC:"Lite Coin (LTC)",tokenGrant:"Token Grants",tokenGrantClaimed:"Token Grants Claimed",tokens:"tokens",total:"Total",transactions:"Transactions",turnOnAds:"Turn on Ads",turnOnRewardsDesc:"This enables both Brave Ads and Auto-Contribute. You can always opt out each any time.",turnOnRewardsTitle:"Turn on Rewards",tweetNow:"Tweet",type:"Type",uhOh:"Uh oh…",unVerifiedCheck:"Refresh status",unVerifiedPublisher:"Unverified",unVerifiedText:"This creator has not yet signed up to receive contributions from Brave users.",unVerifiedTextMore:"Learn more.",verifiedPublisher:"Verified Creator",viewDetails:"View Details",viewMonthly:"View Monthly Statement for Details",walletActivity:"Wallet Activity",walletAddress:"Wallet Address",walletBalance:"wallet balance",walletFailedButton:"Re-try",walletFailedTitle:"Wallet creation failed",walletFailedText:"Please check your internet connection.",welcome:"Welcome!",welcomeBack:"Welcome Back!",welcomeButtonTextOne:"Start Earning Now!",welcomeButtonTextTwo:"Join Rewards",welcomeDescOne:"You can now earn tokens for watching privacy focused Brave Ads. Your contribution stays the same.",welcomeDescTwo:"Earn tokens for watching Ads and pay it forward to your favorite content creators.",welcomeFooterTextOne:"Check out what’s improved",welcomeFooterTextTwo:"Learn More",welcomeHeaderOne:"Brave Payments is now Brave Rewards with many upgrades.",welcomeHeaderTwo:"You are about to start a very Brave way to browse the web.",whyBraveRewards:"Why Brave Rewards?",whyBraveRewardsDesc1:"With conventional browsers, you pay to browse the web by viewing ads with your valuable attention, spending your valuable time downloading invasive ad technology, that transmits your valuable private data to advertisers — without your consent.",whyBraveRewardsDesc2:"Well, you've come to the right place. Brave welcomes you to the new internet. One where your time is valued, your personal data is kept private, and you actually get paid for your attention.",yourWallet:"Your wallet"}},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/appstore.6681f303.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/brave.df6bf9c0.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/facebook.896b0c1c.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/playstore.33c99327.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/twitter.c4aa113c.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/youtube.75203771.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-1.5d873f1a.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-2.7c44e114.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-3.83403233.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-4.246cdcd2.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-5.eee653f5.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-6.3c27236d.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-7.a592c3e2.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-8.fe8dfe93.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-9.b7d931fe.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-10.3eaa5370.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-11.f93959c2.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-12.3939b87f.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-13.bcaddb12.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-14.1099074e.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-15.2fbe2b65.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ntp-16.88c52145.jpg"},,,,,function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/gift.57a2cc7d.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/bat.c9255cc2.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/panel.6dd79d47.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/love.68341a46.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/gift.57a2cc7d.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/centerTextBackground.1bb9aa85.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/bg_bats.2e7994ea.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/bg_hearts.4364e454.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/batOutline.59c5f41d.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/panel.6dd79d47.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/dash.893eeb9a.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/carat.45282529.svg"},function(module,__webpack_exports__,__webpack_require__){"use strict";var _brave_default__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(36),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const shieldsLightTheme=Object.assign({},_brave_default__WEBPACK_IMPORTED_MODULE_0__.a,{name:"Shields Light",color:Object.assign({},_brave_default__WEBPACK_IMPORTED_MODULE_0__.a.color,{text:_colors__WEBPACK_IMPORTED_MODULE_1__.a.neutral900,panelBackgroundSecondary:_colors__WEBPACK_IMPORTED_MODULE_1__.a.neutral000})});__webpack_exports__.a=shieldsLightTheme},function(module,__webpack_exports__,__webpack_require__){"use strict";var _brave_default__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(36),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6);const shieldsDarkTheme=Object.assign({},_brave_default__WEBPACK_IMPORTED_MODULE_0__.a,{name:"Shields Dark",color:Object.assign({},_brave_default__WEBPACK_IMPORTED_MODULE_0__.a.color,{lionLogo:_colors__WEBPACK_IMPORTED_MODULE_1__.a.grey700,text:_colors__WEBPACK_IMPORTED_MODULE_1__.a.white,panelBackground:"#17171F",panelBackgroundSecondary:_colors__WEBPACK_IMPORTED_MODULE_1__.a.grey900,inputBorder:_colors__WEBPACK_IMPORTED_MODULE_1__.a.grey700,separatorLine:_colors__WEBPACK_IMPORTED_MODULE_1__.a.grey800})});__webpack_exports__.a=shieldsDarkTheme},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/start_icon.7eac69a8.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/default_icon.1b85522b.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/add_icon.32ad310e.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/remove_icon.2a633b3f.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sync_computer.7d4d5c1f.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sync_devices.d16b79c1.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/sync_hand.da986ce4.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fakeQRCodeImage.2d3a0df8.png"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/lion_logo.9e31ed86.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/welcome_import.ac2b8d62.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/welcome_rewards.2b3672c9.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/welcome_search.77803ef4.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/welcome_shields.bf695b69.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/welcome_theme.0a477204.svg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/welcome_bg.076d678f.svg"},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-size: 14px;
  text-align: right;
  border-radius: 6px;
  color: #4b4c5c;
  background: #e9f0ff;
  display: inline-block;
  padding: 9px 10px 9px 13px;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return nextContribution_NextContribution});class nextContribution_NextContribution extends react.PureComponent{render(){const{id:id,children:children}=this.props;return react.createElement(StyledWrapper,{id:id},children)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),buttonsIndicators_button=__webpack_require__(12),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  text-align: center;
  width: 100%;
  padding: 20px 10px;
  min-height: 350px;
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 14px;
  line-height: 1.29;
  color: #838391;
  margin: 44px 0 32px;
`,StyledButton=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledButton"})`
  display: block;
  margin: 0 auto;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return grantError_GrantError});class grantError_GrantError extends react.PureComponent{render(){const{id:id,text:text,buttonText:buttonText,onButtonClick:onButtonClick}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledText,null,text),react.createElement(StyledButton,null,react.createElement(buttonsIndicators_button.a,{text:buttonText,size:"call-to-action",type:"accent",onClick:onButtonClick})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
  margin-bottom: 20px;
`,StyledContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledContent"})`
  font-size: 16px;
  color: #4b4c5c;
  margin: 30px 0px 20px;
`,StyledNum=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledNum"})`
  font-weight: 500;
  color: #0c0d21;
`,StyledTabWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTabWrapper"})`
  margin: 0 auto 30px;
`,StyledControlWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledControlWrapper"})`
  width: 100%;
  margin-bottom: 30px;
`,RestoreWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"RestoreWrapper"})`
  float: right;
  margin: -18px 0 -10px;
`;var helpers=__webpack_require__(3);const StyledExcludedText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledExcludedText"})`
  color: #4B4C5C;
  font-size: 14px;
  font-weight: 300;
  text-align: left;
  letter-spacing: 0;
  margin-top: -20px;
  margin-bottom: 32px;
`,StyledRestore=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledRestore"})`
  color: #696fdc;
  display: inline-block;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0;
  cursor: pointer;
  margin-left: 8px;
`;class restoreSites_RestoreSites extends react.PureComponent{getRestoreText(){return`(${Object(helpers.a)("restoreAll")})`}getExclusionText(numSites){return`${Object(helpers.a)("excludedSitesText")} ${numSites}`}render(){const{numExcludedSites:numExcludedSites,onRestore:onRestore,showText:showText}=this.props;return react.createElement(StyledExcludedText,null,showText?this.getExclusionText(numExcludedSites):null,react.createElement(StyledRestore,{onClick:onRestore},this.getRestoreText()))}}var tab=__webpack_require__(788),modal=__webpack_require__(42),tableContribute=__webpack_require__(82);__webpack_require__.d(__webpack_exports__,"a",function(){return modalContribute_ModalContribute});class modalContribute_ModalContribute extends react.PureComponent{constructor(){super(...arguments),this.getTabTitle=((key,numSites)=>void 0===numSites?`${Object(helpers.a)(key)}`:`${Object(helpers.a)(key)} (${numSites})`),this.getACTable=(()=>{const{rows:rows}=this.props,numSites=rows&&rows.length||0;return react.createElement(react.Fragment,null,react.createElement(StyledContent,null,Object(helpers.a)("rewardsContributeText1")," ",react.createElement(StyledNum,null,numSites)," ",Object(helpers.a)("sites"),"."),react.createElement(tableContribute.a,{header:this.headers,rows:rows,numSites:numSites,allSites:!0,showRowAmount:!0,showRemove:!0}))}),this.getExcludedTable=(()=>{const{excludedRows:excludedRows,onRestore:onRestore}=this.props,numExcludedSites=excludedRows&&excludedRows.length||0;return react.createElement(react.Fragment,null,react.createElement(StyledContent,null,Object(helpers.a)("rewardsExcludedText1")," ",react.createElement(StyledNum,null,numExcludedSites)," ",Object(helpers.a)("rewardsExcludedText2")),numExcludedSites>0?react.createElement(RestoreWrapper,null,react.createElement(restoreSites_RestoreSites,{showText:!1,onRestore:onRestore,numExcludedSites:numExcludedSites})):null,react.createElement(tableContribute.a,{rows:excludedRows,isExcluded:!0,header:[Object(helpers.a)("site")],numSites:numExcludedSites,allSites:!0,showRemove:!0}))})}get headers(){return[Object(helpers.a)("site"),Object(helpers.a)("rewardsContributeAttention")]}render(){const{id:id,onClose:onClose,rows:rows,excludedRows:excludedRows,activeTabId:activeTabId,onTabChange:onTabChange}=this.props,numSites=rows&&rows.length||0,numExcluded=excludedRows&&excludedRows.length||0;return react.createElement(modal.a,{id:id,onClose:onClose,size:"small"},react.createElement(StyledWrapper,null,react.createElement(StyledControlWrapper,null,react.createElement(StyledTitle,null,Object(helpers.a)("rewardsContribute")),react.createElement(StyledTabWrapper,null,react.createElement(tab.a,{type:"contribute",onChange:onTabChange,tabIndexSelected:activeTabId,tabTitles:[this.getTabTitle("supportedSites",numSites),this.getTabTitle("excludedSites",numExcluded)]}))),0===activeTabId?this.getACTable():this.getExcludedTable()))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),helpers=__webpack_require__(3),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p=>p.theme.palette.blue000};
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  border-radius: 4px;
`,StyledAlertIcon=Object(theme.b)("div").withConfig({displayName:"StyledAlertIcon"})`
  width: 24px;
  height: 24px;
  margin: 8px;
  color: ${p=>p.theme.palette.blue500};
`,StyledInfo=Object(theme.b)("div").withConfig({displayName:"StyledInfo"})`
  font-size: 16px;
  font-family: ${p=>p.theme.fontFamily.body};
  color: ${p=>p.theme.color.text};
  display: flex;
  align-items: center;
`,StyledMessage=Object(theme.b)("span").withConfig({displayName:"StyledMessage"})`
  display: flex;
  align-items: center;
`,StyledMonthlyTips=Object(theme.b)("span").withConfig({displayName:"StyledMonthlyTips"})`
  padding: 4px;
  display: flex;
  align-items: center;
`,StyledReviewWrapper=Object(theme.b)("div").withConfig({displayName:"StyledReviewWrapper"})`
  padding: 4px;
  display: flex;
  align-items: center;
`,StyledReviewList=Object(theme.b)("span").withConfig({displayName:"StyledReviewList"})`
  color: #15A4FA;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 18px;
`,StyledModalContent=Object(theme.b)("div").withConfig({displayName:"StyledModalContent"})`
  display: block;
`,StyledTipsIcon=Object(theme.b)("div").withConfig({displayName:"StyledTipsIcon"})`
  width: 20%;
  vertical-align: top;
  margin-top: -33px;
  display: inline-block;
`,StyledModalInfo=Object(theme.b)("div").withConfig({displayName:"StyledModalInfo"})`
  width: 80%;
  padding-left: 20px;
  display: inline-block;
`,StyledListMessage=Object(theme.b)("div").withConfig({displayName:"StyledListMessage"})`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-top: 30px;
`,StyledList=Object(theme.b)("ul").withConfig({displayName:"StyledList"})`
  display: block;
  font-size: 14px;
  font-weight: 300;
  padding-left: 20px;
`,StyledListItem=Object(theme.b)("li").withConfig({displayName:"StyledListItem"})`
  display: block;
  display: list-item;
  line-height: 28px;
  list-style-type: disc;
`,StyledButton=Object(theme.b)("div").withConfig({displayName:"StyledButton"})`
  width: 235px;
  margin: 40px auto 0 auto;
`,StyledButtonContainer=Object(theme.b)("div").withConfig({displayName:"StyledButtonContainer"})`
  width: 100%;
`;var modal=__webpack_require__(42),fc_rewards_send_tips=__webpack_require__(423),alert_circle=__webpack_require__(401),buttonsIndicators_button=__webpack_require__(12);__webpack_require__.d(__webpack_exports__,"a",function(){return boxAlert_BoxAlert});class boxAlert_BoxAlert extends react.PureComponent{constructor(props){super(props),this.toggleModalDisplay=(()=>{this.setState({modalShown:!this.state.modalShown}),this.state.modalShown&&this.props.onReview&&this.props.onReview()}),this.pinnedSitesModal=(()=>react.createElement(modal.a,{size:"small",outsideClose:!1,onClose:this.toggleModalDisplay},react.createElement(StyledModalContent,null,react.createElement(StyledTipsIcon,null,react.createElement(fc_rewards_send_tips.a,null)),react.createElement(StyledModalInfo,null,react.createElement(StyledMessage,{modal:!0},Object(helpers.a)("pinnedSitesHeader")),react.createElement(StyledMonthlyTips,{modal:!0},Object(helpers.a)("monthlyTips")),react.createElement(StyledListMessage,null,Object(helpers.a)("pinnedSitesMsg")),react.createElement(StyledList,null,react.createElement(StyledListItem,null,Object(helpers.a)("pinnedSitesOne")),react.createElement(StyledListItem,null,Object(helpers.a)("pinnedSitesTwo")),react.createElement(StyledListItem,null,Object(helpers.a)("pinnedSitesThree")),react.createElement(StyledListItem,null,Object(helpers.a)("pinnedSitesFour")))),react.createElement(StyledButtonContainer,null,react.createElement(StyledButton,null,react.createElement(buttonsIndicators_button.a,{text:Object(helpers.a)("ok"),size:"call-to-action",type:"accent",onClick:this.toggleModalDisplay})))))),this.state={modalShown:!1}}render(){const{testId:testId,type:type}=this.props;return react.createElement(StyledWrapper,{"data-test-id":testId},react.createElement(StyledAlertIcon,null,react.createElement(alert_circle.a,null)),react.createElement(StyledInfo,{type:type},"tips"===type?react.createElement(react.Fragment,null,react.createElement(StyledMessage,null,Object(helpers.a)("reviewSitesMsg")),react.createElement(StyledMonthlyTips,null,Object(helpers.a)("monthlyTips"))):react.createElement(StyledMessage,null,Object(helpers.a)("adsNotSupported"))),"tips"===type?react.createElement(StyledReviewWrapper,null,react.createElement(StyledReviewList,{onClick:this.toggleModalDisplay},Object(helpers.a)("learnMore"))):null,this.state.modalShown&&"tips"===type?this.pinnedSitesModal():null)}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  padding: 32px 20px 46px;
  text-align: center;
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.1px;
  text-align: center;
  color: #5bc4fe;
`,StyledContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledContent"})`
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 1.75;
  text-align: center;
  color: #686978;
`;var helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return walletOff_WalletOff});class walletOff_WalletOff extends react.PureComponent{render(){return react.createElement(StyledWrapper,{id:this.props.id},react.createElement(StyledTitle,null,Object(helpers.a)("rewardsPanelOffText1")),react.createElement(StyledContent,null,Object(helpers.a)("rewardsPanelOffText2")))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1),buttonsIndicators_button=__webpack_require__(12);const StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  font-size: 14px;
  font-family: Muli, sans-serif;
  letter-spacing: 0;
  font-weight: 200;
  line-height: 26px;
  margin-top: 40px;
`,StyledImport=Object(theme.b)("label").withConfig({displayName:"StyledImport"})`
  color: #4c54d2;
  cursor: pointer;
`,StyleButtonWrapper=Object(theme.b)("div").withConfig({displayName:"StyleButtonWrapper"})`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`,GroupedButton=Object(theme.b)(buttonsIndicators_button.a).withConfig({displayName:"GroupedButton"})`
  margin: 0 4px;

  @media (max-width: 410px) {
    min-width: 74px;
    font-size: 9px;
  }
  @media (max-width: 370px) {
    min-width: 65px;
    font-size: 9px;
  }
`,StyledDoneWrapper=Object(theme.b)("div").withConfig({displayName:"StyledDoneWrapper"})`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`,StyledStatus=Object(theme.b)("div").withConfig({displayName:"StyledStatus"})`
  margin: ${p=>p.isError?0:-16}px 0 16px;
  border-radius: 6px;
  overflow: hidden;
`,StyledActionsWrapper=Object(theme.b)("div").withConfig({displayName:"StyledActionsWrapper"})`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`,ActionButton=Object(theme.b)(buttonsIndicators_button.a).withConfig({displayName:"ActionButton"})`
  margin: 0 8px;
`,StyledTitleWrapper=Object(theme.b)("div").withConfig({displayName:"StyledTitleWrapper"})`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`,StyledTitle=Object(theme.b)("span").withConfig({displayName:"StyledTitle"})`
  font-size: 22px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 40px;
  font-family: ${p=>p.theme.fontFamily.heading};
`,StyledSafe=Object(theme.b)("span").withConfig({displayName:"StyledSafe"})`
  font-weight: 700;
  margin-right: 3px;
  color: ${p=>p.theme.color.brandBatInteracting};
`,StyledTabWrapper=Object(theme.b)("div").withConfig({displayName:"StyledTabWrapper"})`
  margin: 0 auto;
  max-width: 400px;
`,StyledControlWrapper=Object(theme.b)("div").withConfig({displayName:"StyledControlWrapper"})`
  width: 100%;
  margin-bottom: 30px;
`,StyledText=Object(theme.b)("p").withConfig({displayName:"StyledText"})`
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 0;
  line-height: 26px;
  font-family: Muli, sans-serif;
`,StyledTextWrapper=Object(theme.b)("div").withConfig({displayName:"StyledTextWrapper"})`
  margin-bottom: 25px;
`;var formControls_textarea=__webpack_require__(785),modal=__webpack_require__(42),helpers=__webpack_require__(3),rewards_alert=__webpack_require__(310),tab=__webpack_require__(788),controlWrapper=__webpack_require__(39);__webpack_require__.d(__webpack_exports__,"a",function(){return modalBackupRestore_ModalBackupRestore});class modalBackupRestore_ModalBackupRestore extends react.PureComponent{constructor(props){super(props),this.onFileUpload=(inputFile=>{const input=inputFile.target,self=this;if(!input.files)return;const reader=new FileReader;reader.onload=function(){reader.result?self.onRestore((reader.result.toString()||"").trim()):self.onRestore("")};try{reader.readAsText(input.files[0])}catch(e){self.onRestore("")}}),this.setRecoveryKey=(event=>{this.setState({errorShown:!1,recoveryKey:event.target.value})}),this.onRestore=(key=>{key="string"==typeof key?key:this.state.recoveryKey,this.props.onRestore(key)}),this.getBackup=(()=>{const{backupKey:backupKey,onClose:onClose,onCopy:onCopy,onPrint:onPrint,onSaveFile:onSaveFile}=this.props;return react.createElement(react.Fragment,null,react.createElement(controlWrapper.a,{text:Object(helpers.a)("recoveryKeys")},react.createElement(formControls_textarea.a,{value:backupKey,disabled:!0})),react.createElement(StyleButtonWrapper,null,onCopy?react.createElement(GroupedButton,{text:Object(helpers.a)("copy"),level:"secondary",size:"small",type:"subtle",onClick:onCopy.bind(this,backupKey)}):null,onPrint?react.createElement(GroupedButton,{text:Object(helpers.a)("print"),level:"secondary",size:"small",type:"subtle",onClick:onPrint.bind(this,backupKey)}):null,onSaveFile?react.createElement(GroupedButton,{text:Object(helpers.a)("saveAsFile"),level:"secondary",size:"small",type:"subtle",onClick:onSaveFile.bind(this,backupKey)}):null),react.createElement(StyledContent,null,react.createElement(StyledSafe,null,Object(helpers.a)("rewardsBackupText2")),Object(helpers.a)("rewardsBackupText3")),react.createElement(StyledDoneWrapper,null,react.createElement(buttonsIndicators_button.a,{text:Object(helpers.a)("done"),size:"medium",type:"accent",onClick:onClose})))}),this.getRestore=(()=>{const{error:error,onClose:onClose,funds:funds}=this.props,errorShown=error&&this.state.errorShown;return react.createElement(react.Fragment,null,funds?react.createElement(StyledStatus,null,react.createElement(rewards_alert.a,{type:"warning",colored:!0,bg:!0},`Backup your wallet before replacing. Or you will lose the fund, ${funds}, in your current wallet.`)):null,react.createElement(controlWrapper.a,{text:react.createElement(react.Fragment,null,Object(helpers.a)("rewardsRestoreText4")," ",react.createElement(StyledImport,{htmlFor:"recoverFile"},Object(helpers.a)("import")),react.createElement("input",{type:"file",id:"recoverFile",name:"recoverFile",style:{display:"none"},onChange:this.onFileUpload}))},react.createElement(formControls_textarea.a,{fieldError:!!errorShown,value:this.state.recoveryKey,onChange:this.setRecoveryKey})),errorShown?react.createElement(StyledStatus,{isError:!0},react.createElement(rewards_alert.a,{type:"error",colored:!0,bg:!0},error)):null,react.createElement(StyledTextWrapper,null,react.createElement(StyledText,null,Object(helpers.a)("rewardsRestoreText3"))),react.createElement(StyledActionsWrapper,null,react.createElement(ActionButton,{level:"secondary",text:Object(helpers.a)("cancel"),size:"medium",type:"accent",onClick:onClose}),react.createElement(ActionButton,{level:"primary",type:"accent",text:Object(helpers.a)("restore"),size:"medium",onClick:this.onRestore})))}),this.state={recoveryKey:"",errorShown:!1}}componentWillReceiveProps(nextProps){nextProps.error&&this.setState({errorShown:!0})}render(){const{id:id,activeTabId:activeTabId,onClose:onClose,onTabChange:onTabChange,testId:testId}=this.props;return react.createElement(modal.a,{id:id,onClose:onClose,size:"small",testId:testId},react.createElement(StyledTitleWrapper,null,react.createElement(StyledTitle,null,Object(helpers.a)("manageWallet"))),react.createElement(StyledControlWrapper,null,react.createElement(StyledTabWrapper,null,react.createElement(tab.a,{onChange:onTabChange,tabIndexSelected:activeTabId,tabTitles:[Object(helpers.a)("backup"),Object(helpers.a)("restore")]}))),0===activeTabId?this.getBackup():this.getRestore())}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-weight: 600;
  color: #1B1D2F;
  font-family: ${p=>p.theme.fontFamily.heading};
  font-size: 16px;
  line-height: 2;
`,StyledSubTitle=Object(theme.b)("span").withConfig({displayName:"StyledSubTitle"})`
  color: #838391;
  font-weight: normal;
`,StyledHeader=Object(theme.b)("div").withConfig({displayName:"StyledHeader"})`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,StyledLeft=Object(theme.b)("div").withConfig({displayName:"StyledLeft"})`
  flex-basis: 40%;
`,StyledRight=Object(theme.b)("div").withConfig({displayName:"StyledRight"})`
  flex-basis: 378px;
  flex-grow: 0;
  flex-shrink: 1;
  margin-bottom: 45px;
`,StyledSelectOption=Object(theme.b)("div").withConfig({displayName:"StyledSelectOption"})`
  font-size: 22px;
  font-weight: 300;
  color: #4C54D2;
`,StyledIconWrap=Object(theme.b)("div").withConfig({displayName:"StyledIconWrap"})`
  margin-bottom: 103px;
  display: flex;
`,StyledIcon=Object(theme.b)("button").withConfig({displayName:"StyledIcon"})`
  display: flex;
  margin-right: 35px;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
`,StyledIconText=Object(theme.b)("div").withConfig({displayName:"StyledIconText"})`
  font-size: 14px;
  line-height: 1.43;
  color: #838391;
  margin-left: 13px;
`,StyledBalance=Object(theme.b)("div").withConfig({displayName:"StyledBalance"})`
  margin-top: 41px;
`,StyledTables=Object(theme.b)("div").withConfig({displayName:"StyledTables"})`
  background-color: #f9f9fd;
  margin: 0 -50px;
  padding: 0 50px;
`,StyledWarning=Object(theme.b)("div").withConfig({displayName:"StyledWarning"})`
  display: flex;
  justify-content: center;
  border-top: 1px solid #ebecf0;
  margin: 0 -50px;
  padding: 17px 50px 0;
  align-items: flex-start;
`,StyledWarningText=Object(theme.b)("div").withConfig({displayName:"StyledWarningText"})`
  max-width: 508px;
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
  padding-left: 8px;
`,StyledNote=Object(theme.b)("div").withConfig({displayName:"StyledNote"})`
  max-width: 508px;
  margin-top: 46px;
  font-family: Muli, sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
  color: #686978;
`,StyledTableTitle=Object(theme.b)("div").withConfig({displayName:"StyledTableTitle"})`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  line-height: 2.79;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  text-transform: uppercase;
  padding-top: 14px;
  margin-top: 28px;
`,StyledTableSubTitle=Object(theme.b)("div").withConfig({displayName:"StyledTableSubTitle"})`
  font-size: 14px;
  font-weight: 300;
  line-height: 2.79;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  text-transform: none;
`,StyledVerified=Object(theme.b)("div").withConfig({displayName:"StyledVerified"})`
  display: flex;
  font-size: 12px;
  align-items: center;
  line-height: 2;
  color: #9e9fab;
  padding: 11px 0 32px;
`,StyledVerifiedText=Object(theme.b)("div").withConfig({displayName:"StyledVerifiedText"})`
  margin-left: 5px;
`,StyledClosing=Object(theme.b)("div").withConfig({displayName:"StyledClosing"})`
  margin-top: -10px;
`,StyledActionIcon=Object(theme.b)("span").withConfig({displayName:"StyledActionIcon"})`
  color: #A1A8F2;
  width: 27px;
`,StyledAlertWrapper=Object(theme.b)("div").withConfig({displayName:"StyledAlertWrapper"})`
  color: #E9AB18;
  width: 20px;
  margin-left: 3px;
`,StyledWarningWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWarningWrapper"})`
  display: flex;
`,StyledVerifiedIcon=Object(theme.b)("div").withConfig({displayName:"StyledVerifiedIcon"})`
  display: flex;
  color: #392DD1;
  width: 24px;
  height: 24px;
`;var tableContribute=__webpack_require__(82),tableTransactions=__webpack_require__(199),modal=__webpack_require__(42),controlWrapper=__webpack_require__(39),formControls_select=__webpack_require__(86),alert_circle=__webpack_require__(401),print=__webpack_require__(407),download=__webpack_require__(404),verified_s=__webpack_require__(414),listToken=__webpack_require__(84),helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return modalActivity_ModalActivity});class modalActivity_ModalActivity extends react.PureComponent{constructor(){super(...arguments),this.colors={deposit:"earnings",grant:"earnings",ads:"earnings",contribute:"contribute",recurring:"donation",donations:"donation"},this.hasWarnings=!1,this.getSummaryBox=(()=>{let items;return this.hasWarnings=!1,this.props.summary?((items=this.props.summary.map((item,i)=>{let title=item.text;return item.notPaid&&(this.hasWarnings=!0,title=react.createElement(StyledWarningWrapper,null,title," ",react.createElement(StyledAlertWrapper,null,react.createElement(alert_circle.a,null)))),react.createElement(listToken.a,{key:`${this.props.id}-summary-${i}`,title:title,value:item.token.value,converted:item.token.converted,color:item.notPaid?"notPaid":this.colors[item.type],size:"small",border:0===i?"first":"default",isNegative:item.token.isNegative})})).push(react.createElement(listToken.a,{key:`${this.props.id}-summary-99`,title:react.createElement("b",null,Object(helpers.a)("total")),value:this.props.total.value,converted:this.props.total.converted,size:"small",border:"last"})),items):null})}get headers(){return[Object(helpers.a)("rewardsContributeVisited"),Object(helpers.a)("rewardsContributeAttention"),Object(helpers.a)("payment")]}get selectTitle(){return react.createElement(StyledTitle,null,Object(helpers.a)("braveRewards")," ",react.createElement(StyledSubTitle,null,Object(helpers.a)("walletActivity")))}render(){const{id:id,onClose:onClose,contributeRows:contributeRows,onMonthChange:onMonthChange,currentMonth:currentMonth,openBalance:openBalance,closingBalance:closingBalance,months:months,transactionRows:transactionRows,paymentDay:paymentDay}=this.props;return react.createElement(modal.a,{id:id,onClose:onClose},react.createElement(StyledWrapper,null,react.createElement(StyledHeader,null,react.createElement(StyledLeft,null,months?react.createElement(controlWrapper.a,{text:this.selectTitle},react.createElement(formControls_select.a,{value:currentMonth,onChange:onMonthChange},Object.keys(months).map(item=>react.createElement("div",{"data-value":item,key:`${id}-monthly-${item}`},react.createElement(StyledSelectOption,null,months[item]))))):null,openBalance&&closingBalance?react.createElement(StyledBalance,null,react.createElement(listToken.a,{title:Object(helpers.a)("openBalance"),value:openBalance.value,converted:openBalance.converted,color:"earnings",border:"last"}),react.createElement(StyledClosing,null,react.createElement(listToken.a,{title:react.createElement("b",null,Object(helpers.a)("closeBalance")),value:closingBalance.value,converted:closingBalance.converted,color:"contribute",border:"last"}))):null),react.createElement(StyledRight,null,react.createElement(StyledIconWrap,null,react.createElement(StyledIcon,null,react.createElement(StyledActionIcon,null,react.createElement(print.a,null)),react.createElement(StyledIconText,null,Object(helpers.a)("print"))),react.createElement(StyledIcon,null,react.createElement(StyledActionIcon,null,react.createElement(download.a,null)),react.createElement(StyledIconText,null,Object(helpers.a)("downloadPDF")))),this.getSummaryBox())),this.hasWarnings?react.createElement(StyledWarning,null,react.createElement(StyledAlertWrapper,null,react.createElement(alert_circle.a,null)),react.createElement(StyledWarningText,null,react.createElement("b",null,Object(helpers.a)("paymentNotMade"))," ",Object(helpers.a)("paymentWarning"))):null,react.createElement(StyledTables,null,react.createElement(StyledTableTitle,null,Object(helpers.a)("transactions")),react.createElement(tableTransactions.a,{rows:transactionRows}),react.createElement(StyledTableTitle,null,react.createElement("span",null,Object(helpers.a)("contributeAllocation")),react.createElement(StyledTableSubTitle,null,Object(helpers.a)("paymentMonthly",{day:paymentDay}))),react.createElement(tableContribute.a,{header:this.headers,rows:contributeRows,allSites:!0,showRowAmount:!0}),react.createElement(StyledVerified,null,react.createElement(StyledVerifiedIcon,null,react.createElement(verified_s.a,null)),react.createElement(StyledVerifiedText,null,Object(helpers.a)("braveVerified")))),react.createElement(StyledNote,null,react.createElement("b",null,Object(helpers.a)("pleaseNote"))," ",Object(helpers.a)("activityNote"),react.createElement("br",null),react.createElement("br",null),Object(helpers.a)("activityCopy"))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),bg_bats=__webpack_require__(473),bg_bats_default=__webpack_require__.n(bg_bats),bg_hearts=__webpack_require__(474),bg_hearts_default=__webpack_require__.n(bg_hearts);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  overflow-y: scroll;
  height: ${p=>p.isMobile?"calc(100% - 237px)":"auto"};
  padding: ${p=>p.isMobile?"10px 15":0}px;
  font-family: Poppins, sans-serif;
`,StyledContentWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledContentWrapper"})`
  display: ${p=>p.isMobile?"block":"flex"};
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;
  flex-wrap: nowrap;
  max-width: 1320px;
  margin: 0 auto;
`,StyledContent=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledContent"})`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(100% - 336px);
  background: #e9f0ff;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
`,StyledDonation=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledDonation"})`
  flex-basis: 336px;
  background: #696fdc;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  ${p=>(isMobile=>isMobile?styled_components_browser_esm.css`
    width: 100%;
    bottom: 0;
    left: 0;
    height: 237px;
    position: fixed;
    box-shadow: 0 -2px 8px 0 rgba(12,13,33,0.35);
  `:null)(p.isMobile)}
`,StyledBanner=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledBanner"})`
  position: relative;
  min-width: ${p=>p.isMobile?"unset":"900px"};
  background: #DBE3F3;
`,StyledBannerImage=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledBannerImage"})`
  font-size: 38px;
  font-weight: 600;
  line-height: 0.74;
  color: #d1d1db;
  height: 176px;
  background: ${p=>p.bgImage?`url(${p.bgImage}) no-repeat top center / cover`:`url(${bg_bats_default.a}) no-repeat top left, url(${bg_hearts_default.a}) no-repeat top right, #9e9fab`};
`,StyledClose=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledClose"})`
  top: 16px;
  right: 16px;
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: #FFF;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, .4));
`,StyledLogoWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledLogoWrapper"})`
  padding-left: ${p=>p.isMobile?20:45}px;
  flex-basis: 217px;
`,StyledLogoText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledLogoText"})`
  background: inherit;
  -webkit-background-clip: text;
  color: transparent;
  filter: invert(1) grayscale(1) contrast(9);
  font-size: ${p=>p.isMobile?50:80}px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0;
  line-height: 1;
  text-transform: uppercase;
  user-select: none;
  margin-top: ${p=>p.isMobile?-15:0}px;
`,StyledLogoBorder=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledLogoBorder"})`
  border: 6px solid #fff;
  border-radius: 50%;
  width: ${p=>p.isMobile?100:160}px;
  height: ${p=>p.isMobile?100:160}px;
  background: ${p=>p.bg||"#DE4D26"};
  padding-top: ${p=>p.padding?"35px":0};
  margin: -66px 0 25px;
  overflow: hidden;
`,StyledTextWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTextWrapper"})`
  ${p=>(isMobile=>isMobile?styled_components_browser_esm.css`
    display: block;
    margin-top: -60px;
  `:styled_components_browser_esm.css`
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: calc(100% - 217px);
    `)(p.isMobile)}
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: ${p=>p.isTwitterTip?18:28}px;
  font-weight: 600;
  line-height: 1;
  color: #4b4c5c;
  margin: ${p=>p.isMobile?25:10}px 0 0;
  padding-left: ${p=>p.isMobile?25:0}px;
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #686978;
  padding-right: 37px;
  padding-left: ${p=>p.isMobile?25:0}px;
`,StyledWallet=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWallet"})`
  font-size: 12px;
  color: #afb2f1;
  text-align: right;
  margin: ${p=>p.isMobile?20:8}px 0 10px;
  padding: 0 ${p=>p.isMobile?20:19}px 0 55px;
`,StyledTokens=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTokens"})`
  color: #fff;
`,StyledOption=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledOption"})`
  color: rgba(255, 255, 255, 0.65);
`,StyledCenter=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledCenter"})`
  max-width: 1024px;
  padding: 126px 0 0 238px;
  margin: 0 auto;
  user-select: none;
`,StyledUserName=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledUserName"})`
  font-size: 38px;
  color: #fff;
  max-width: 1024px;
  padding: 70px 0 0 238px;
  margin: 0 auto;
  user-select: none;
`,StyledScreenName=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledScreenName"})`
  font-size: 24px;
  font-weight: 400;
  color: #000;
  max-width: 1024px;
  padding: 10px 0 0 238px;
  margin: 10px auto;
  user-select: none;
`,StyledSocialItem=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledSocialItem"})`
  font-size: 12px;
  line-height: 2.5;
  letter-spacing: 0.2px;
  color: #9e9fab;
  text-decoration: none;
  display: inline-block;
  margin: 0 8px;
`,StyledSocialIcon=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledSocialIcon"})`
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  width: 22px;
  height: 22px;
`,StyledSocialWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledSocialWrapper"})`
  text-align: right;
  padding-right: ${p=>p.isMobile?0:40}px;
  margin-top: ${p=>p.isMobile?5:15}px;
`,StyledEmptyBox=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledEmptyBox"})`
  width: 100%;
  height: 39px;
`,StyledLogoImage=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledLogoImage"})`
  width: 148px;
  height: 148px;
  background: url(${p=>p.bg}) no-repeat;
  background-size: cover;
`,StyledCheckbox=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledCheckbox"})`
  width: ${p=>p.isMobile?232:180}px;
  padding-left: ${p=>p.isMobile?40:0}px;
  margin: ${p=>p.isMobile?"15px auto 5px auto":"15px 0 5px"};
`,StyledNoticeWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledNoticeWrapper"})`
  background: #fff;
  border: 1px solid rgba(155, 157, 192, 0);
  border-radius: 4px;
  width: 90%;
  margin: 10px 0 18px;
  padding: 7px 15px;
  display: flex;
`,StyledNoticeIcon=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledNoticeIcon"})`
  width: 39px;
  height: 39px;
  color: #00AEFF;
  margin: -2px 6px 0 0;
`,StyledNoticeText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledNoticeText"})`
  flex: 1;
  color: #67667D;
  font-size: 12px;
  font-family: ${p=>p.theme.fontFamily.body};
  letter-spacing: 0;
  line-height: 18px;
`,StyledNoticeLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledNoticeLink"})`
  color: #0095FF;
  font-family: ${p=>p.theme.fontFamily.body};
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
  margin-left: 4px;
`;var donate=__webpack_require__(162),formControls_checkbox=__webpack_require__(106),helpers=__webpack_require__(3),fc_logo_twitter=__webpack_require__(425),fc_logo_youtube=__webpack_require__(428),fc_logo_twitch=__webpack_require__(424),fc_logo_reddit=__webpack_require__(421),close_circle_o=__webpack_require__(191),alert_circle=__webpack_require__(401);__webpack_require__.d(__webpack_exports__,"a",function(){return siteBanner_SiteBanner});class siteBanner_SiteBanner extends react.PureComponent{constructor(props){super(props),this.getSocial=(social=>{if(!social||0===social.length)return null;const self=this;return social.map(item=>{const logo=self.getSocialData(item);return react.createElement(StyledSocialItem,{key:`${self.props.id}-social-${item.type}`,href:item.url,target:"_blank"},react.createElement(StyledSocialIcon,null,logo))})}),this.onMonthlyChange=((key,selected)=>{this.setState({monthly:selected})}),this.onDonate=(amount=>{this.props.onDonate&&this.props.onDonate(amount,this.state.monthly)}),this.onKeyUp=(e=>{"escape"===e.key.toLowerCase()&&this.props.onClose&&this.props.onClose()}),this.state={monthly:!1}}getLogo(logo,domain,name){let letter=domain&&domain.substring(0,1)||"";return name&&(letter=name.substring(0,1)),logo?react.createElement(StyledLogoImage,{bg:logo}):react.createElement(StyledLogoText,{isMobile:this.props.isMobile},letter)}getSocialData(item){let logo=null;switch(item.type){case"twitter":logo=react.createElement(fc_logo_twitter.a,null);break;case"youtube":logo=react.createElement(fc_logo_youtube.a,null);break;case"twitch":logo=react.createElement(fc_logo_twitch.a,null);break;case"github":case"reddit":logo=react.createElement(fc_logo_reddit.a,null)}return logo}getTitle(title){return title||Object(helpers.a)("welcome")}getBannerTitle(name,domain,provider){const identifier=name||domain;if(!provider)return identifier;switch(provider){case"youtube":return`${identifier} ${Object(helpers.a)("on")} YouTube`;case"twitter":return`${identifier} ${Object(helpers.a)("on")} Twitter`;case"twitch":return`${identifier} ${Object(helpers.a)("on")} Twitch`;case"reddit":return`${identifier} ${Object(helpers.a)("on")} Reddit`;case"vimeo":return`${identifier} ${Object(helpers.a)("on")} Vimeo`;case"github":return`${identifier} ${Object(helpers.a)("on")} GitHub`;default:return identifier}}getBannerImageContent(name,screenName,domain,provider){return screenName?react.createElement(react.Fragment,null,react.createElement(StyledUserName,null,this.getBannerTitle(name,domain,provider)),react.createElement(StyledScreenName,null,screenName)):react.createElement(StyledCenter,null,this.getBannerTitle(name,domain,provider))}getText(children){return children||react.createElement(react.Fragment,null,react.createElement("p",null,Object(helpers.a)("rewardsBannerText1")),react.createElement("p",null,Object(helpers.a)("rewardsBannerText2")))}render(){const{id:id,bgImage:bgImage,onClose:onClose,logo:logo,social:social,provider:provider,children:children,title:title,recurringDonation:recurringDonation,balance:balance,donationAmounts:donationAmounts,domain:domain,onAmountSelection:onAmountSelection,logoBgColor:logoBgColor,currentAmount:currentAmount,name:name,screenName:screenName,isMobile:isMobile,showUnVerifiedNotice:showUnVerifiedNotice,learnMoreNotice:learnMoreNotice,addFundsLink:addFundsLink}=this.props;return react.createElement(StyledWrapper,{id:id,isMobile:isMobile,onKeyUp:this.onKeyUp,tabIndex:0},react.createElement(StyledBanner,{isMobile:isMobile},react.createElement(StyledClose,{onClick:onClose},react.createElement(close_circle_o.a,null)),react.createElement(StyledBannerImage,{bgImage:bgImage},isMobile||bgImage?null:this.getBannerImageContent(name,screenName,domain,provider)),react.createElement(StyledContentWrapper,{isMobile:isMobile},react.createElement(StyledContent,null,react.createElement(StyledLogoWrapper,{isMobile:isMobile},react.createElement(StyledLogoBorder,{isMobile:isMobile,padding:!logo,bg:logoBgColor},this.getLogo(logo,domain,name))),react.createElement(StyledTextWrapper,{isMobile:isMobile},react.createElement(StyledSocialWrapper,{isMobile:isMobile},this.getSocial(social)),showUnVerifiedNotice?react.createElement(StyledNoticeWrapper,null,react.createElement(StyledNoticeIcon,null,react.createElement(alert_circle.a,null)),react.createElement(StyledNoticeText,null,react.createElement("b",null,Object(helpers.a)("siteBannerNoticeNote"))," ",Object(helpers.a)("siteBannerNoticeText"),react.createElement(StyledNoticeLink,{href:learnMoreNotice,target:"_blank"},Object(helpers.a)("unVerifiedTextMore")))):null,react.createElement(StyledTitle,{isMobile:isMobile,isTwitterTip:!(!screenName||""===screenName)},this.getTitle(title)),react.createElement(StyledText,{isMobile:isMobile},this.getText(children)))),react.createElement(StyledDonation,{isMobile:isMobile},react.createElement(StyledWallet,{isMobile:isMobile},Object(helpers.a)("walletBalance")," ",react.createElement(StyledTokens,null,balance," BAT")),react.createElement(donate.a,{isMobile:isMobile,balance:parseFloat(balance),donationAmounts:donationAmounts,title:Object(helpers.a)("donationAmount"),onDonate:this.onDonate,actionText:this.state.monthly?Object(helpers.a)("doMonthly"):Object(helpers.a)("sendDonation"),onAmountSelection:onAmountSelection,donateType:"big",currentAmount:currentAmount,addFundsLink:addFundsLink},recurringDonation?react.createElement(StyledEmptyBox,null):react.createElement(StyledCheckbox,{isMobile:isMobile},react.createElement(formControls_checkbox.a,{testId:"monthlyCheckbox",value:{make:this.state.monthly},onChange:this.onMonthlyChange,type:"dark"},react.createElement("div",{"data-key":"make"},react.createElement(StyledOption,null,Object(helpers.a)("makeMonthly"))))))))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),colors=__webpack_require__(6),styled_components_browser_esm=__webpack_require__(2);const StyledTweetBox=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTweetBox"})`
  border: 1px solid ${colors.a.grey400};
  border-radius: 5px;
  margin: 15px 0 0 0;
  padding: 15px;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  overflow: hidden;
`,StyledTweetTimestamp=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTweetTimestamp"})`
  color: ${colors.a.grey500};
  font-size: 12px;
  display: inline;
  vertical-align: middle;
`,StyledTweetText=Object(styled_components_browser_esm.default)("p").withConfig({displayName:"StyledTweetText"})`
  font-size: 14px;
`,StyledTwitterIcon=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledTwitterIcon"})`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
`;var fc_logo_twitter=__webpack_require__(425);__webpack_require__.d(__webpack_exports__,"a",function(){return tweetBox_TweetBox});class tweetBox_TweetBox extends react.Component{constructor(){super(...arguments),this.formatTimestamp=(timestamp=>{const dateOptions={month:"short",day:"numeric"};return(new Date).getFullYear()!==timestamp.getFullYear()&&(dateOptions.year="numeric"),timestamp.toLocaleString(navigator.language,dateOptions)})}render(){const tweetTimestamp=new Date(1e3*this.props.tweetTimestamp);return react.createElement(StyledTweetBox,null,react.createElement(StyledTwitterIcon,null,react.createElement(fc_logo_twitter.a,null)),react.createElement(StyledTweetTimestamp,null,this.formatTimestamp(tweetTimestamp)),react.createElement(StyledTweetText,null,this.props.tweetText))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),helpers=__webpack_require__(3),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div")`
  display: block;
  width: 100%;
  height: 100%;
`,StyledTransitionWrapper=Object(styled_components_browser_esm.default)("div")`
  height: ${p=>p.show?"100%":"0"};
  opacity: ${p=>p.show?"1":"0"};
  overflow: ${p=>p.show?"unset":"hidden"};
`,StyledToggleWrapper=Object(styled_components_browser_esm.default)("div")`
  width: 100%;
  display: block;
  max-height: 56px;
  padding: ${p=>p.show?"18px 30px 20px 30px":"20px"};
  top: ${p=>p.show?"unset":"12px"};
  position: ${p=>p.show?"static":"absolute"};
  bottom: ${p=>p.show?"0px":"unset"};
  background: ${p=>p.show?"#E9EBFF":"inherit"};
`,StyledSummaryText=Object(styled_components_browser_esm.default)("span")`
  color: #A1A8F2;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.35px;
  line-height: 22px;
`,StyledArrowIcon=Object(styled_components_browser_esm.default)("span")`
  width: 24px;
  height: 24px;
  display: flex;
  color: #696FDC;
`,StyledGrid=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledGrid"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,StyledColumn=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledColumn"})`
  display: flex;
`;var icons=__webpack_require__(9);__webpack_require__.d(__webpack_exports__,"a",function(){return walletSummarySlider_WalletSummarySlider});class walletSummarySlider_WalletSummarySlider extends react.PureComponent{constructor(props){super(props),this.state={panelOneShown:!0,panelTwoShown:!1},this.togglePanels=this.togglePanels.bind(this)}togglePanels(showTitle,e){!showTitle&&this.state.panelOneShown||(this.setState({panelOneShown:!this.state.panelOneShown,panelTwoShown:!this.state.panelTwoShown}),this.props.onToggle&&this.props.onToggle())}getPanel(panel,showTitle=!1){return react.createElement(StyledWrapper,null,showTitle?panel:null,react.createElement(StyledToggleWrapper,{show:showTitle,onClick:this.togglePanels.bind(this,showTitle)},react.createElement(StyledGrid,null,react.createElement(StyledColumn,{size:"5"},showTitle?react.createElement(StyledSummaryText,null,Object(helpers.a)("rewardsSummary")):null),react.createElement(StyledColumn,{size:"1"},react.createElement(StyledArrowIcon,{show:showTitle},showTitle?react.createElement(icons.CaratCircleOUpIcon,null):react.createElement(icons.CaratCircleODownIcon,null))))),showTitle?null:panel)}render(){const{id:id,children:children}=this.props;if(!Array.isArray(children)||null===children[0])return react.createElement(StyledWrapper,{id:id},children);if(!children||2!==children.length)return null;const panelOne=children[0],panelTwo=children[1];return react.createElement(StyledWrapper,{id:id},react.createElement(StyledTransitionWrapper,{show:this.state.panelOneShown},this.getPanel(panelOne,!0)),react.createElement(StyledTransitionWrapper,{show:this.state.panelTwoShown},this.getPanel(panelTwo)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),helpers=__webpack_require__(3),styled_components_browser_esm=__webpack_require__(2),colors=__webpack_require__(6);const StyledWrapper=Object(styled_components_browser_esm.default)("div")`
  display: block;
`,StyledProfileWrapper=Object(styled_components_browser_esm.default)("div")`
  margin-bottom: 15px;
`,StyledContainer=Object(styled_components_browser_esm.default)("div")`
  min-height: 250px;
  padding: 15px 30px 20px 30px;
`,StyledAttentionScore=Object(styled_components_browser_esm.default)("span")`
  margin-left: 30px;
  font-weight: 500;
  color: #4B4C5C;
  font-size: 14px;
`,StyledAttentionScoreTitle=Object(styled_components_browser_esm.default)("span")`
  font-weight: 400;
  color: #4B4C5C;
  font-size: 14px;
  letter-spacing: 0;
  margin: 0 0 0 2px;
`,StyledScoreWrapper=Object(styled_components_browser_esm.default)("section")`
  padding: 0 0px 6px;
`,StyledControlsWrapper=Object(styled_components_browser_esm.default)("section")`
  padding: 5px 0px;
  border-top: 1px solid #DBDFE3;
  border-bottom: 1px solid #DBDFE3;
`,StyledDonateText=Object(styled_components_browser_esm.default)("span")`
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 26px;
  margin-left: 2px;
  color: ${p=>p.theme.color.subtleInteracting};
`,StyledDonateWrapper=Object(styled_components_browser_esm.default)("div")`
  text-align: center;
  padding: 15px 0 0;
  margin: 0 auto;
`,StyledToggleWrapper=Object(styled_components_browser_esm.default)("div")`
  margin-top: 6px;
`,StyledSelectWrapper=Object(styled_components_browser_esm.default)("div")`
  width: 87px;
  margin: 2px 0px 0px;
`,StyledGrid=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledGrid"})`
  display: flex;
  flex-direction: row;
`,StyledColumn=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledColumn"})`
  flex: ${p=>p.size} 0 0;
`,StyleToggleTips=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyleToggleTips"})`
  display: ${p=>p.toggleTips?"flex":"none"};
`,StyledNoticeWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledNoticeWrapper"})`
  background: rgba(0, 0, 0, 0.04);
  color: #676283;
  font-size: 12px;
  font-family: ${p=>p.theme.fontFamily.body};
  font-weight: normal;
  letter-spacing: 0;
  line-height: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  margin: 11px 0 10px;
  max-height: 84px;
  overflow-y: auto;
`,StyledNoticeLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledNoticeLink"})`
  color: ${colors.a.blue400};
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
`,StyledSelect=Object(styled_components_browser_esm.default)("select").withConfig({displayName:"StyledSelect"})`
  width: 100%;
  background: inherit;
  height: 34px;
  font-size: 14px;
  border: none;
  text-align: right;
  color: ${colors.a.blurple500};
  font-family: Poppins, sans-serif;
  max-height: 20px;

  &:focus {
    outline: 0;
  }
`,StyledOptionShown=Object(styled_components_browser_esm.default)("option").withConfig({displayName:"StyledOptionShown"})`
  display: none;
`;var toggle=__webpack_require__(64),rewardsButton=__webpack_require__(799),rewards_toggleTips=__webpack_require__(312),profile=__webpack_require__(68);__webpack_require__.d(__webpack_exports__,"a",function(){return walletPanel_WalletPanel});class walletPanel_WalletPanel extends react.PureComponent{publisherInfo(){const publisherTitle=this.props.publisherName||"";return react.createElement(StyledProfileWrapper,null,react.createElement(profile.a,{type:"big",title:publisherTitle,provider:this.props.platform,src:this.props.publisherImg,verified:this.props.isVerified,showUnVerifiedHelpIcon:!this.props.isVerified&&this.props.showUnVerified,refreshingPublisher:this.props.refreshingPublisher,onRefreshPublisher:this.props.onRefreshPublisher,publisherRefreshed:this.props.publisherRefreshed}))}donationDropDown(){const{donationAmounts:donationAmounts}=this.props,monthlyAmount=this.props.monthlyAmount||"5.0";return donationAmounts?react.createElement(StyledSelectWrapper,null,react.createElement(StyledSelect,{value:"show",onChange:this.props.onAmountChange},donationAmounts.map((token,index)=>react.createElement("option",{key:`k-${token.tokens}`,value:token.tokens},token.tokens," ",Object(helpers.a)("bat")," (",token.converted," USD)")).concat(react.createElement(StyledOptionShown,{key:"k-show",value:"show",disabled:!0},monthlyAmount," ",Object(helpers.a)("bat"))))):null}donationControls(){const{donationAmounts:donationAmounts,acEnabled:acEnabled}=this.props;return donationAmounts||acEnabled?react.createElement(StyledWrapper,null,acEnabled?react.createElement(StyledGrid,null,react.createElement(StyledColumn,{size:"5"},react.createElement(StyledDonateText,null,Object(helpers.a)("includeInAuto"))),react.createElement(StyledColumn,{size:"1"},react.createElement(StyledToggleWrapper,null,react.createElement(toggle.a,{size:"small",checked:this.props.includeInAuto,onToggle:this.props.onIncludeInAuto})))):null,donationAmounts?react.createElement(StyledGrid,null,react.createElement(StyledColumn,{size:"5"},react.createElement(StyledDonateText,null,Object(helpers.a)("donateMonthly"))),react.createElement(StyledColumn,{size:"1"},this.donationDropDown())):null):null}render(){const{id:id,platform:platform,onToggleTips:onToggleTips,attentionScore:attentionScore,tipsEnabled:tipsEnabled,donationAction:donationAction,toggleTips:toggleTips,showUnVerified:showUnVerified,isVerified:isVerified,moreLink:moreLink,acEnabled:acEnabled}=this.props,donationControls=this.donationControls();return react.createElement(StyledWrapper,null,react.createElement(StyledContainer,{id:id},this.publisherInfo(),!isVerified&&showUnVerified?react.createElement(StyledNoticeWrapper,null,Object(helpers.a)("unVerifiedText")," ",react.createElement(StyledNoticeLink,{href:moreLink,target:"_blank"}," ",Object(helpers.a)("unVerifiedTextMore"))):null,acEnabled?react.createElement(StyledScoreWrapper,null,react.createElement(StyledGrid,null,react.createElement(StyledColumn,{size:"5"},react.createElement(StyledAttentionScoreTitle,null,Object(helpers.a)("rewardsContributeAttentionScore"))),react.createElement(StyledColumn,{size:"1"},react.createElement(StyledAttentionScore,null,attentionScore,"%")))):null,donationControls?react.createElement(StyledControlsWrapper,null,donationControls):null,react.createElement(StyledDonateWrapper,null,react.createElement(rewardsButton.a,{type:"tip",onClick:donationAction,text:Object(helpers.a)("donateNow")}))),react.createElement(StyleToggleTips,{toggleTips:toggleTips},react.createElement(rewards_toggleTips.a,{id:"toggle-tips",provider:platform,onToggleTips:onToggleTips,tipsEnabled:tipsEnabled})))}}},,,,,function(module,exports,__webpack_require__){__webpack_require__(512),__webpack_require__(598),module.exports=__webpack_require__(599)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(94),__webpack_require__(95),__webpack_require__(93),__webpack_require__(141),__webpack_require__(604);var _src_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(3),_storybook_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(11),_stories_assets_locale__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(440),_src_theme_brave_dark__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(439),_src_theme_brave_default__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(36),storybook_addon_styled_component_theme__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(189);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addParameters)({backgrounds:[{name:"Neutral300",value:"#DEE2E6",default:!0},{name:"Grey700",value:"#5E6175"},{name:"White",value:"#FFF"},{name:"Grey900",value:"#1E2029"}]}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addParameters)({options:{name:"Brave UI",panelPosition:"right",showNav:!0,showPanel:!0,sortStoriesByKind:!0}});var themes=[_src_theme_brave_default__WEBPACK_IMPORTED_MODULE_9__.a,_src_theme_brave_dark__WEBPACK_IMPORTED_MODULE_8__.a];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.addDecorator)(Object(storybook_addon_styled_component_theme__WEBPACK_IMPORTED_MODULE_10__.withThemesProvider)(themes)),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_6__.configure)(function loadStories(){Object(_src_helpers__WEBPACK_IMPORTED_MODULE_5__.b)(_stories_assets_locale__WEBPACK_IMPORTED_MODULE_7__.a);var req=__webpack_require__(737);req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(30)(module))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(module,exports,__webpack_require__){var map={"./components/buttonsIndicators.tsx":738,"./components/dataTables.tsx":739,"./components/formControls.tsx":754,"./components/icons/icons.tsx":755,"./components/layout.tsx":756,"./components/popupsModal.tsx":757,"./components/text.tsx":758,"./components/theme.tsx":759,"./features/newTab/default.tsx":760,"./features/newTab/default/footerInfo.tsx":262,"./features/newTab/default/index.tsx":295,"./features/newTab/default/settings.tsx":296,"./features/newTab/default/siteRemovalNotification.tsx":301,"./features/newTab/default/stats.tsx":297,"./features/newTab/default/topSites/topSite.tsx":261,"./features/newTab/default/topSites/topSitesList.tsx":260,"./features/newTab/private.tsx":769,"./features/newTab/private/index.tsx":123,"./features/newTab/private/privateWindow.tsx":266,"./features/newTab/private/qwantWindow.tsx":264,"./features/newTab/private/qwantWindowWithTor.tsx":263,"./features/newTab/private/torWindow.tsx":265,"./features/rewards/concepts.tsx":770,"./features/rewards/grant.tsx":773,"./features/rewards/modal.tsx":774,"./features/rewards/other.tsx":775,"./features/rewards/settings/adsBox.tsx":267,"./features/rewards/settings/contributeBox.tsx":268,"./features/rewards/settings/donationsBox.tsx":269,"./features/rewards/settings/grant.tsx":195,"./features/rewards/settings/pageWallet.tsx":270,"./features/rewards/settings/settings.tsx":298,"./features/rewards/settingsMobile/adsBoxMobile.tsx":271,"./features/rewards/settingsMobile/contributeBoxMobile.tsx":300,"./features/rewards/settingsMobile/donationsBoxMobile.tsx":272,"./features/rewards/settingsMobile/grantMobile.tsx":196,"./features/rewards/settingsMobile/mobileWalletPanel.tsx":273,"./features/rewards/settingsMobile/settingsMobile.tsx":299,"./features/rewards/table.tsx":777,"./features/rewards/wallet.tsx":778,"./features/shields/components/controls/adsTrackersControl.tsx":274,"./features/shields/components/controls/cookiesControl.tsx":275,"./features/shields/components/controls/deviceRecognitionControl.tsx":276,"./features/shields/components/controls/httpsUpgradesControl.tsx":277,"./features/shields/components/controls/scriptsControl.tsx":278,"./features/shields/components/footer.tsx":280,"./features/shields/components/header.tsx":281,"./features/shields/components/interfaceControls.tsx":282,"./features/shields/components/list/noScriptDetails.tsx":279,"./features/shields/components/list/noScriptList.tsx":197,"./features/shields/components/list/static.tsx":102,"./features/shields/components/privacyControls.tsx":283,"./features/shields/index.tsx":284,"./features/shields/story.tsx":779,"./features/sync/disabledContent.tsx":285,"./features/sync/enabledContent.tsx":286,"./features/sync/modals.tsx":781,"./features/sync/modals/deviceType.tsx":103,"./features/sync/modals/enterSyncCode.tsx":152,"./features/sync/modals/removeMainDevice.tsx":154,"./features/sync/modals/removeOtherDevice.tsx":153,"./features/sync/modals/resetSync.tsx":155,"./features/sync/modals/scanCode.tsx":151,"./features/sync/modals/viewSyncCode.tsx":67,"./features/sync/page.tsx":782,"./features/sync/page/index.tsx":198,"./features/welcome/page/index.tsx":287,"./features/welcome/page/screens/footerBox.tsx":294,"./features/welcome/page/screens/importBox.tsx":289,"./features/welcome/page/screens/rewardsBox.tsx":293,"./features/welcome/page/screens/searchBox.tsx":290,"./features/welcome/page/screens/shieldsBox.tsx":292,"./features/welcome/page/screens/themeBox.tsx":291,"./features/welcome/page/screens/welcomeBox.tsx":288,"./features/welcome/story.tsx":783,"./storyUtils.tsx":156};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=737},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_src_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),_src_components_icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(190);const Button=Object(_src_theme__WEBPACK_IMPORTED_MODULE_3__.b)(_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__.a).withConfig({displayName:"Button"})`
  margin: 10px;
`;Button.displayName=_src_components_buttonsIndicators_button__WEBPACK_IMPORTED_MODULE_2__.a.displayName;const ComponentTypes=_src_theme__WEBPACK_IMPORTED_MODULE_3__.b.div.withConfig({displayName:"ComponentTypes"})`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`,icon={image:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_4__.a,null)};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components",module).add("Button",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{text:"A Button"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",text:"Primary"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"secondary",text:"Secondary"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"tertiary",text:"Tertiary"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"default",text:"Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"accent",text:"Accent"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"warn",text:"Warn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"subtle",text:"Subtle"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"accent",text:"Disabled",disabled:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"secondary",type:"default",text:"Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"secondary",type:"accent",text:"Accent"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"secondary",type:"warn",text:"Warn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"secondary",type:"subtle",text:"Subtle"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"secondary",type:"accent",text:"Disabled",disabled:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"tertiary",type:"default",text:"Default"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"tertiary",type:"accent",text:"Accent"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"tertiary",type:"warn",text:"Warn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"tertiary",type:"subtle",text:"Subtle"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"tertiary",type:"accent",text:"Disabled",disabled:!0})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"accent",text:"Brave"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{level:"primary",type:"accent",brand:"rewards",text:"Rewards"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"small",level:"primary",type:"default",text:"Small"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"medium",level:"primary",type:"accent",text:"Medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"large",level:"primary",type:"warn",text:"Large"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"call-to-action",level:"primary",type:"subtle",text:"Call to Action"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"small",level:"secondary",type:"default",text:"Small"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"medium",level:"secondary",type:"accent",text:"Medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"large",level:"secondary",type:"warn",text:"Large"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"call-to-action",level:"secondary",type:"subtle",text:"Call to Action"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"small",level:"tertiary",type:"default",text:"Small"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"medium",level:"tertiary",type:"accent",text:"Medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"large",level:"tertiary",type:"warn",text:"Large"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{size:"call-to-action",level:"tertiary",type:"subtle",text:"Call to Action"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{icon:Object.assign({},icon,{position:"before"}),size:"small",level:"primary",type:"default",text:"Small"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{icon:Object.assign({},icon,{position:"before"}),size:"medium",level:"primary",type:"accent",text:"Medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{icon:Object.assign({},icon,{position:"before"}),size:"large",level:"primary",type:"warn",text:"Large"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement(ComponentTypes,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{icon:Object.assign({},icon,{position:"after"}),size:"small",level:"secondary",type:"default",text:"Small"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{icon:Object.assign({},icon,{position:"after"}),size:"medium",level:"secondary",type:"accent",text:"Medium"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button,{icon:Object.assign({},icon,{position:"after"}),size:"large",level:"secondary",type:"warn",text:"Large"}))))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__),_src_components_dataTables_table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(53);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components/Data Tables",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default.a).add("Table",()=>{const rowTheme={"text-align":"right","padding-left":"9px"},rows=[{content:[{content:"Baker"},{content:"40%",customStyle:rowTheme},{content:"4",customStyle:rowTheme}]},{content:[{content:"duckduckgo.com"},{content:"20%",customStyle:rowTheme},{content:"2",customStyle:rowTheme}]}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_dataTables_table__WEBPACK_IMPORTED_MODULE_4__.a,{header:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Header",[{content:"Site visited"},{content:"Attention",customStyle:{"text-align":"right"}},{content:"Tokens",customStyle:{"text-align":"right"}}]),rows:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Rows",rows)},"404: Publishers not found :)"))})}.call(this,__webpack_require__(30)(module))},,,,,,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4__),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(22),_src_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(39),_src_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(64),_src_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(86),_src_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(106),_src_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(784),_src_components__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(785),_src_components__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(315),_src_components__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(309),_src_components_icons__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(190);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Components/Form controls",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4___default.a).add("Wrapper",()=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Label","Control label"),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled?",!1)},"Content")).add("Toggle",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({checked:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_7__.a,{size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Size",{small:"small",large:"large"},"large"),checked:store.state.checked,type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Type",{dark:"dark",light:"light"},"dark"),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled?",!1),onToggle:()=>{store.set({checked:!store.state.checked})}})})).add("Select",()=>react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"310px",background:"#fff",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Limit Sites to"),type:"light",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{type:"light",title:"Limit Sites to",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),floating:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Floating",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"0"},"No Limit"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"10"},"Pay Only Top 10"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"50"},"Pay Top 50"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"100000"},"Really long limit that I know of 100000")))),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"310px",background:"#4B4C5C",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Limit Sites to"),type:"dark",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{type:"dark",title:"Limit Sites to",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),floating:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Floating",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"0"},"No Limit"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"10"},"Pay Only Top 10"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"50"},"Pay Top 50"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"100000"},"Really long limit that I know of 100000")))),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"310px",background:"#fff",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Monthly Budget"),type:"light",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_8__.a,{type:"light",title:"Monthly Budget",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),floating:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Floating",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"5"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"5","data-value":"5",color:"donation"})),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"10"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"10","data-value":"10",color:"donation"})),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"20"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"20","data-value":"20",color:"donation"}))))))).add("Checkbox",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({yt:!0,tw:!1,inst:!1},store=>{const onChange=(key,selected,child,all)=>{store.set(all)};return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"310px",background:"#fff",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Enable ability to give tips on ‘Like’ posts"),type:"light",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_9__.a,{value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Checkbox values",store.state),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Size",{small:"small",big:"big"},"small"),multiple:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Is multiple?",!1),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),onChange:onChange,type:"light"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"yt"},"YouTube"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"tw"},"Twitter"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"rd"},"Reddit"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"inst"},"Instagram Instagram Instagram Instagram Instagram")))),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"310px",background:"#4B4C5C",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Enable ability to give tips on ‘Like’ posts"),type:"dark",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_9__.a,{value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Checkbox values",store.state),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Size",{small:"small",big:"big"},"small"),multiple:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Is multiple?",!1),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),onChange:onChange,type:"dark"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"yt"},"YouTube"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"tw"},"Twitter"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"rd"},"Reddit"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-key":"inst"},"Instagram Instagram Instagram Instagram Instagram")))))})).add("Radio",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({5:!0,10:!1,15:!1,20:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"295px",background:"#fff",padding:"30px 60px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Monthly Budget"),type:"light",disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_10__.a,{value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.object)("Radio values",store.state),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Size",{small:"small",big:"big"},"small"),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),onChange:(key,selected,child,all)=>{store.set(all)}},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"5"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"5","data-value":"5",color:"donation"})),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"10"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"10","data-value":"10",color:"donation"})),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"15"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"15","data-value":"15",color:"donation"})),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{"data-value":"20"},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{size:"mini",value:"20","data-value":"20",color:"donation"}))))))})).add("TextArea",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({value:""},store=>{return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"250px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Recovery keys"),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_11__.a,{value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Value",store.state.value),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),onChange:event=>{store.set({value:event.target.value})}})))})).add("TextAreaClipboard",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({value:""},store=>{return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{width:"500px"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Title","Recovery keys"),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1)},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_12__.a,{copiedString:"Copied!",wordCountString:"Word Count:",value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Value",store.state.value),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),onChange:event=>{store.set({value:event.target.value})}})))})).add("Input",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({value:""},store=>{const type=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Type",{text:"text",email:"email",search:"search",password:"password"},"text");return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_13__.a,{type:type,icon:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_14__.a,null),value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Value",store.state.value),disabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Disabled",!1),onChange:event=>{store.set({value:event.target.value})}})}))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_src_components_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(163);const book=Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Components/Icons",module),AllIconComponents=[],AllIconExports=_src_components_icons__WEBPACK_IMPORTED_MODULE_2__;for(const componentName in _src_components_icons__WEBPACK_IMPORTED_MODULE_2__){const Component=AllIconExports[componentName];AllIconComponents.push({componentName:componentName,Component:Component})}book.add("All Icons",()=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_3__.a,null,AllIconComponents.map(({componentName:componentName,Component:Component})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_3__.b,{title:componentName},react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_3__.c,null,react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component,null)),react__WEBPACK_IMPORTED_MODULE_1__.createElement(_style__WEBPACK_IMPORTED_MODULE_3__.d,null,componentName)))))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(786),_src_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(71),_src_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(83);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Components/Layout",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_2___default.a).add("Tabs",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_4__.withState)({tabId:"cont1"},store=>{return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{style:{maxWidth:"900px",background:"#fff",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_5__.a,{activeTabId:store.state.tabId,onChange:tabId=>{store.set({tabId:tabId})}},react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{"data-key":"cont1","data-title":"Content 1"},"1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor incidunt laudantium magnam maiores molestias numquam quae quas tempore. Accusamus animi aperiam aspernatur autem commodi cumque cupiditate dignissimos dolore eius exercitationem fuga modi molestiae natus nemo nesciunt nihil nisi nobis obcaecati quasi quibusdam, sunt tempora temporibus ut veniam vitae! Exercitationem, possimus?"),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{"data-key":"cont2","data-title":"Content 2"},"2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at delectus dolores eaque eius eligendi error, et eveniet ex facere facilis fugit harum id in nesciunt non odit officia pariatur placeat porro, quam quisquam quos recusandae saepe totam. Ipsa nam nulla obcaecati perspiciatis saepe ullam. Aliquid amet architecto consequuntur dolor dolorem doloribus, eaque explicabo illum nam numquam quia quis voluptatem."),react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",{"data-key":"cont3","data-title":"Content 3"},"3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio dolore eaque eveniet fuga illo molestiae natus, officiis qui quia sit soluta sunt veniam. Dolorum eveniet illum quibusdam ratione temporibus tenetur voluptatum. Ab alias assumenda earum expedita odio tempore vitae?")))})).add("Grid List",()=>{const options={};Array.from({length:12},(v,i)=>i+1).forEach(size=>Object.assign(options,{[size.toString()]:size}));const value1=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Column #1 size",options,3),value2=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Column #2 size",options,9);return react__WEBPACK_IMPORTED_MODULE_3__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("h2",null,'Playground! (see "knobs" for usage)'),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.b,{customStyle:{backgroundColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Grid Background","gray"),maxWidth:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Max Grid Width","100%"),padding:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Own Grid Gutter (padding)","15px"),gridGap:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Grid Gutter (for columns)","15px")}},react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{size:value1,customStyle:{backgroundColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Column #1 Background","darkgray"),justifyContent:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Column #1 Align (flexbox-based)","flex-end"),alignItems:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Column #1 Vertical Align (flexbox-based)","flex-end")}},`${value1}/12`),react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_6__.a,{size:value2,customStyle:{backgroundColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Column #2 Background","darkgray"),justifyContent:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Column #1 Align (flexbox-based)","flex-start"),alignItems:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("Column #1 Vertical Align (flexbox-based)","flex-start")}},`${value2}/12`)))}).add("Card",()=>react__WEBPACK_IMPORTED_MODULE_3__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_3__.createElement("p",null,"Hello I'm a card!")))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),_src_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(42),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(316);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components/Popups and Modals",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Dialog",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_3__.withState)({visible:!0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Visible",store.state.visible)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{id:"modal",outsideClose:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Close with click outside",!1),onClose:()=>{store.set({visible:!store.state.visible})}},"Content"):null)})).add("AlertBox",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_5__.a,{okString:"Ok",cancelString:"Cancel"},"Content here"))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__),_src_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(32);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Components/Text",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default.a).add("Heading playground",()=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Level",1,{range:!0,min:1,max:6,step:1})},Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Text","Heading on fire"))}).add("Heading Demonstration",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:1},"Heading level 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:2},"Heading level 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:3},"Heading level 3"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:4},"Heading level 4"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:5},"Heading level 5"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components__WEBPACK_IMPORTED_MODULE_4__.a,{level:6},"Heading level 6")))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_src_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_src_theme_colors__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_src_theme_brave_default__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(36);const Palette=_src_theme__WEBPACK_IMPORTED_MODULE_2__.b.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(10, 1fr);
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }
`,PaletteItemContainer=_src_theme__WEBPACK_IMPORTED_MODULE_2__.b.div`
  min-height: 150px;
  background: white;
  padding: 4px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`,PaletteColor=_src_theme__WEBPACK_IMPORTED_MODULE_2__.b.div.withConfig({displayName:"PaletteColor"})`
  display: flex;
  height: 80px;
  background-color: ${p=>p.color};
`,PaletteItemName=_src_theme__WEBPACK_IMPORTED_MODULE_2__.b.div.withConfig({displayName:"PaletteItemName"})`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 8px 0 4px;
  overflow: auto;
`,PaletteItemHex=_src_theme__WEBPACK_IMPORTED_MODULE_2__.b.div.withConfig({displayName:"PaletteItemHex"})`
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  margin: 4px 0 8px;
`,PaletteItem=({color:color,name:name,individual:individual})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaletteItemContainer,{individual:individual},react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaletteColor,{color:color}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaletteItemName,null,name),react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaletteItemHex,null,color)),allPalletteItems=[];for(const name in _src_theme_colors__WEBPACK_IMPORTED_MODULE_3__.a)allPalletteItems.push({name:name,color:_src_theme_colors__WEBPACK_IMPORTED_MODULE_3__.a[name]});const allBraveDefaultItems=[];for(const name in _src_theme_brave_default__WEBPACK_IMPORTED_MODULE_4__.a.color)allBraveDefaultItems.push({name:name,color:_src_theme_brave_default__WEBPACK_IMPORTED_MODULE_4__.a.color[name]});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Theme",module).add("Colors",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Palette,null,allPalletteItems.map(({color:color,name:name})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaletteItem,{key:name,color:color,name:name})))).add("Theme Variables",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(Palette,{individual:!0},allBraveDefaultItems.map(({color:color,name:name})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(PaletteItem,{individual:!0,key:name,color:color,name:name}))))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_default_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(295);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/New Tab/Default",module).add("Page",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_default_index__WEBPACK_IMPORTED_MODULE_2__.default,null))}.call(this,__webpack_require__(30)(module))},,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_private_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(123);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/New Tab/Private",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Private Window",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_private_index__WEBPACK_IMPORTED_MODULE_3__.default,{isQwant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Is Qwant?",!1),isTor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Enable Tor?",!1)})).add("Qwant Window",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_private_index__WEBPACK_IMPORTED_MODULE_3__.default,{isQwant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Is Qwant?",!0),isTor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Enable Tor?",!1)})).add("Qwant Tor",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_private_index__WEBPACK_IMPORTED_MODULE_3__.default,{isQwant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Is Qwant?",!0),isTor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Enable Tor?",!0)})).add("Tor Window",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_private_index__WEBPACK_IMPORTED_MODULE_3__.default,{isQwant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Is Qwant?",!1),isTor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Enable Tor?",!0)}))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_settings_settings__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(298),_settingsMobile_settingsMobile__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(299),_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(503),_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(504),_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(789),_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(320),_src_features_rewards__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(165),_src_features_rewards__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(790),_src_features_rewards__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(791),_src_features_rewards__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(505),_src_features_rewards__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(506),_src_features_rewards__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(319),_src_components_icons__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(105),_src_components_icons__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(158),_src_features_rewards_welcomePage__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(307);const favicon=__webpack_require__(65),siteBgImage=__webpack_require__(771),siteBgLogo=__webpack_require__(433),siteScreen=__webpack_require__(772),captchaDrop=__webpack_require__(246),donationAmounts=[{tokens:"1.0",converted:"0.30",selected:!1},{tokens:"5.0",converted:"1.50",selected:!1},{tokens:"10.0",converted:"3.00",selected:!1},{tokens:"50.0",converted:"15.00",selected:!1},{tokens:"100.0",converted:"30.00",selected:!1}],grantNotification={id:"001",type:"grant",date:"July 7",onCloseNotification:id=>{console.log("nothing")},text:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Free 30 BAT have been awarded to you.")},dummyOptInAction=()=>{console.log(dummyOptInAction)};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Feature Components/Rewards/Concepts/Desktop",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("Settings Page",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_settings_settings__WEBPACK_IMPORTED_MODULE_4__.default,null)).add("Welcome Page",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_welcomePage__WEBPACK_IMPORTED_MODULE_18__.a,{id:"welcome-page",onTOSClick:dummyOptInAction,onPrivacyClick:dummyOptInAction,optInAction:dummyOptInAction})).add("Site Banner",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({donationAmounts:donationAmounts,currentAmount:"5.0",showBanner:!0},store=>{const screenName=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Screen Name",""),tweetText=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Tweet Text","");return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:`url(${siteScreen}) no-repeat top center / cover`,width:"100%",height:"100vh"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>{store.set({showBanner:!0})}},"Show banner"),store.state.showBanner?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100vh",width:"100%",backgroundColor:"rgba(12,13,33,0.85)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{domain:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Domain","duckduckgo.com"),name:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Name","duckduckgo.com"),screenName:screenName,title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title",""),recurringDonation:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Current recurring donation",!0),balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Balance ","5.0"),bgImage:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show bg image",!1)?siteBgImage:null,logo:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show logo",!1)?siteBgLogo:null,donationAmounts:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Donations",store.state.donationAmounts),logoBgColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logo bg color",""),onDonate:()=>{console.log("onDonate")},onAmountSelection:tokens=>{store.set({currentAmount:tokens})},currentAmount:store.state.currentAmount,onClose:()=>{store.set({showBanner:!1})},provider:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Provider",{youtube:"youtube",twitter:"twitter",twitch:"twitch",reddit:"reddit"},"youtube"),social:[{type:"twitter",url:"https://twitter.com/DuckDuckGo"},{type:"youtube",url:"https://www.youtube.com/channel/UCm_TyecHNHucwF_p4XpeFkQ"},{type:"twitch",url:"https://www.twitch.tv/duckduckgo"},{type:"reddit",url:"https://www.reddit.com/r/duckduckgo"}],showUnVerifiedNotice:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show unverified notice",!1)},(()=>screenName.length>0||tweetText.length>0)()?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__.a,{tweetText:tweetText,tweetTimestamp:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Timestamp in seconds",4642e4)||0}):null)):null)})).add("Tip",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({donationAmounts:donationAmounts,currentAmount:"5.0",allow:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__.a,{donationAmounts:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Donations",store.state.donationAmounts),title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Jonathon Doe"),allow:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Allow tips",store.state.allow),provider:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Provider","YouTube"),balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Balance","5"),onDonate:()=>{console.log("onDonate")},onClose:()=>{console.log("onClose")},onAllow:allow=>{store.set({allow:allow})},onAmountSelection:tokens=>{store.set({currentAmount:tokens})},currentAmount:store.state.currentAmount})))})).add("Pre Opt-In",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({creatingOne:!1,creatingTwo:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"40px",left:"120px",width:"373px",minHeight:"446px",borderRadius:"8px",overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__.a,{variant:"one",creating:store.state.creatingOne,optInAction:()=>{store.set({creatingOne:!0})},moreLink:dummyOptInAction,optInErrorAction:dummyOptInAction,error:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Wallet Creation Error",!1)})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"40px",left:"565px",width:"373px",minHeight:"446px",borderRadius:"8px",overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__.a,{variant:"two",optInAction:()=>{store.set({creatingTwo:!0})},creating:store.state.creatingTwo,optInErrorAction:dummyOptInAction,onTOSClick:dummyOptInAction,onPrivacyClick:dummyOptInAction,error:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Wallet Creation Error",!1)})))})).add("Disabled Panel",()=>{const doNothing=()=>{console.log("nothing")};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"40px",left:"40px",borderRadius:"8px",overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_10__.a,{compact:!0,contentPadding:!1,gradientTop:"249,251,252",balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Tokens","30.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Converted","15.50 USD"),actions:[{name:"Add funds",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_16__.a,null)},{name:"Settings",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_17__.a,null)}],showSecActions:!1,connectedWallet:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Connected wallet",!0),grants:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Grants",[{tokens:"8.0",expireDate:"7/15/2018",type:"ugp",tokenText:"Free Token Grant"},{tokens:"10.0",expireDate:"9/10/2018",type:"ugp",tokenText:"Free Token Grant"},{tokens:"10.0",expireDate:"10/10/2018",type:"ads",tokenText:"Your Brave Ads Token Grant"}])},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_11__.a,{onTOSClick:doNothing,onPrivacyClick:doNothing,onEnable:doNothing})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"40px",left:"500px",width:"330px",borderRadius:"8px",overflow:"hidden"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_12__.a,{isPrivate:!0,onLinkOpen:()=>{console.log("open up private tab info")}})))}).add("Wallet Panel",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({grant:{promotionId:"test",altcurrency:"none",probi:"",expiryTime:0,captcha:"",hint:"",finishTitle:"It's your lucky day!",finishText:"Your token grant is on its way.",finishTokenTitle:"Free Token Grant"},notification:grantNotification,showSummary:!1,tipsEnabled:!0,includeInAuto:!0,refreshingPublisher:!1,publisherRefreshed:!1,verified:!1},store=>{const doNothing=()=>{console.log("do nothing")};return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_10__.a,{compact:!0,contentPadding:!1,notification:store.state.notification,gradientTop:(()=>store.state.showSummary?"233,235,255":"249,251,252")(),balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Tokens","30.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Converted","15.50 USD"),actions:[{name:"Add funds",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_16__.a,null)},{name:"Settings",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_17__.a,null)}],showCopy:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show Uphold",!1),showSecActions:!1,connectedWallet:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Connected wallet",!1),grants:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Grants",[{tokens:"8.0",expireDate:"7/15/2018",type:"ugp"},{tokens:"10.0",expireDate:"9/10/2018",type:"ugp"},{tokens:"10.0",expireDate:"10/10/2018",type:"ads"}]),grant:store.state.grant,onGrantHide:()=>{const newGrant=Object.assign({},store.state.grant,{captcha:"",hint:""});store.set({grant:newGrant})},onNotificationClick:()=>{const captcha=captchaDrop,newGrant=Object.assign({},store.state.grant,{captcha:captcha,hint:"blue"});store.set({grant:newGrant})},onSolution:(x,y)=>{const newGrant=Object.assign({},store.state.grant,{expiryTime:99});store.set({grant:newGrant})},onFinish:()=>{store.set({grant:void 0}),store.set({notification:void 0})},convertProbiToFixed:(probi,places=1)=>"0.0"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_13__.a,{id:"panel-slider",onToggle:()=>{store.set({showSummary:!store.state.showSummary})}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_14__.a,{id:"wallet-panel",platform:"youtube",publisherImg:favicon,publisherName:"Jonathon Doe",monthlyAmount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Monthly contribution","5.0"),acEnabled:!0,isVerified:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Verified",!1),showUnVerified:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show Unverified",!0),tipsEnabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Tips enabled",store.state.tipsEnabled),includeInAuto:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Tips enabled",store.state.includeInAuto),attentionScore:"17",onToggleTips:()=>{store.set({tipsEnabled:!store.state.tipsEnabled})},donationAction:doNothing,onAmountChange:event=>{console.log(`New value is: ${event.target.value}`)},donationAmounts:donationAmounts,onIncludeInAuto:()=>{store.set({includeInAuto:!store.state.includeInAuto})},refreshingPublisher:store.state.refreshingPublisher,publisherRefreshed:store.state.publisherRefreshed,onRefreshPublisher:()=>{store.set({refreshingPublisher:!store.state.refreshingPublisher}),setTimeout(()=>{store.set({refreshingPublisher:!store.state.refreshingPublisher,publisherRefreshed:!store.state.publisherRefreshed,verified:!0})},3e3)}}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_15__.a,{compact:!0,report:{grant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Grant",{tokens:"10.0",converted:"0.25"}),ads:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Ads",{tokens:"10.0",converted:"0.25"}),contribute:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Contribute",{tokens:"10.0",converted:"0.25"}),donation:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Donation",{tokens:"2.0",converted:"0.25"}),tips:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Tips",{tokens:"19.0",converted:"5.25"})}}))))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Feature Components/Rewards/Concepts/Mobile",module).add("Welcome Page",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_welcomePage__WEBPACK_IMPORTED_MODULE_18__.a,{id:"welcome-page",optInAction:dummyOptInAction})).add("Settings",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_settingsMobile_settingsMobile__WEBPACK_IMPORTED_MODULE_5__.default,null)).add("Site Banner",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({donationAmounts:donationAmounts,currentAmount:"5.0",showBanner:!0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:`url(${siteScreen}) no-repeat top center / cover`,width:"100%",height:"100vh"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>{store.set({showBanner:!0})}},"Show banner"),store.state.showBanner?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100vh",width:"100%",backgroundColor:"rgba(12,13,33,0.85)"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{isMobile:!0,domain:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Domain","duckduckgo.com"),title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title",""),recurringDonation:!1,balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Balance ","5.0"),bgImage:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show bg image",!1)?siteBgImage:null,logo:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show logo",!1)?siteBgLogo:null,donationAmounts:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Donations",store.state.donationAmounts),logoBgColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Logo bg color",""),onDonate:()=>{console.log("onDonate")},onAmountSelection:tokens=>{store.set({currentAmount:tokens})},currentAmount:store.state.currentAmount,onClose:()=>{store.set({showBanner:!1})},social:[{type:"twitter",url:"https://twitter.com/DuckDuckGo"},{type:"youtube",url:"https://www.youtube.com/channel/UCm_TyecHNHucwF_p4XpeFkQ"},{type:"twitch",url:"https://www.twitch.tv/duckduckgo"},{type:"reddit",url:"https://www.reddit.com/r/duckduckgo"}]})):null)}))}.call(this,__webpack_require__(30)(module))},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/bg_siteBanner.83f72be5.jpg"},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/ddgo_site.a53d14ea.png"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__),_src_features_rewards_grantClaim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(125),_src_features_rewards_grantError__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(497),_src_features_rewards_grantWrapper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(164),_src_features_rewards_grantCaptcha__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(308),_src_features_rewards_grantComplete__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(204);const captchaDrop=__webpack_require__(246),dummyClick=()=>{console.log(dummyClick)};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Rewards/Grant",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default.a).add("Grant claim",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_grantClaim__WEBPACK_IMPORTED_MODULE_4__.a,{type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Type",{ugp:"ugp",ads:"ads"},"ugp"),onClaim:dummyClick})).add("Grant wrapper",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",height:"715px",position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_grantWrapper__WEBPACK_IMPORTED_MODULE_6__.a,{onClose:dummyClick,title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Title","Good news!"),text:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Text","Free 30 BAT have been awarded to you so you can support more publishers.")},"Content here"))).add("Grant captcha",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",height:"715px",position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_grantCaptcha__WEBPACK_IMPORTED_MODULE_7__.a,{onSolution:dummyClick,dropBgImage:captchaDrop,hint:"blue"}))).add("Grant complete",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",height:"715px",position:"relative"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_grantComplete__WEBPACK_IMPORTED_MODULE_8__.a,{onClose:dummyClick,amount:"30.0",date:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Date","8/15/2018"),tokenTitle:"Free token grant"}))).add("Grant Error",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",height:"250px",position:"relative",background:"#fff"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_grantError__WEBPACK_IMPORTED_MODULE_5__.a,{onButtonClick:dummyClick,buttonText:"ok",text:"The period for claiming this grant has ended"})))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(501),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(498),_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(502),_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(794),_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(795),_src_features_rewards_modalAddFunds__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(161);const favicon=__webpack_require__(65),ddgo=__webpack_require__(148),wiki=__webpack_require__(149),buzz=__webpack_require__(147),guardian=__webpack_require__(101),eich=__webpack_require__(186),doNothing=()=>{console.log("nothing")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Feature Components/Rewards/Modal",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).add("Backup/Restore",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({activeTabId:0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{maxWidth:"900px",background:"#fff",padding:"30px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{funds:"55 BAT",activeTabId:store.state.activeTabId,backupKey:"crouch  hint  glow  recall  round  angry  weasel  luggage save  hood  census  near  still   power  vague  balcony camp  law  now  certain  wagon  affair  butter  choice ",error:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Error",""),onTabChange:()=>{const newId=0===store.state.activeTabId?1:0;store.set({activeTabId:newId})},onClose:doNothing,onCopy:doNothing,onPrint:doNothing,onSaveFile:doNothing,onRestore:doNothing}))})).add("Contribute",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({activeTabId:0},store=>{const rows=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",attention:40,onRemove:doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:doNothing},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:doNothing},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:doNothing}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{rows:rows,excludedRows:rows,onTabChange:()=>{const newId=0===store.state.activeTabId?1:0;store.set({activeTabId:newId})},onClose:doNothing,onRestore:doNothing,activeTabId:store.state.activeTabId})})).add("Activity",()=>{const contributions=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",attention:40,onRemove:doNothing,token:{value:"5.0",converted:"5.00"}},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:doNothing,token:{value:"4.0",converted:"11.00"}},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:doNothing,token:{value:"3.0",converted:"15.00"}},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:doNothing,token:{value:"2.0",converted:"17.00"}},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:doNothing,token:{value:"1.0",converted:"11.00"}}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{contributeRows:contributions,transactionRows:[{date:"6/1",type:"deposit",description:"Brave Ads payment for May",amount:{value:"5.0",converted:"5.00"}},{date:"6/9",type:"tipOnLike",description:{publisher:"Jonathon Doe",platform:"YouTube"},amount:{isNegative:!0,value:"5.0",converted:"11.00"}},{date:"6/10",type:"deposit",description:"Token grant made available or unlocked",amount:{value:"10.0",converted:"15.00"}},{date:"6/12",type:"donation",description:"coinmarketcap.com",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/14",type:"tipOnLike",description:{publisher:"BrendanEich",platform:"Twitter"},amount:{isNegative:!0,value:"1.0",converted:"2.00"}},{date:"6/26",type:"deposit",description:"Added via Uphold",amount:{value:"10.0",converted:"15.00"}},{date:"6/31",type:"contribute",description:"Monthly payment",amount:{isNegative:!0,value:"10.0",converted:"15.00"}},{date:"6/31",type:"recurringDonation",description:"Monthly payment",amount:{isNegative:!0,value:"5.0",converted:"15.00"}}],onClose:doNothing,onPrint:doNothing,onDownloadPDF:doNothing,onMonthChange:doNothing,months:{"jun-2018":"June 2018","may-2018":"May 2018","apr-2018":"April 2018"},currentMonth:"jun-2018",summary:[{text:"Token Grant available",type:"grant",token:{value:"10.0",converted:"5.20"}},{text:"Earnings from Brave Ads",type:"ads",token:{value:"10.0",converted:"5.20"}},{text:"Deposits",type:"deposit",token:{value:"10.0",converted:"5.20"}},{text:"Brave Contribute",type:"contribute",notPaid:!0,token:{value:"10.0",converted:"5.20",isNegative:!0}},{text:"Recurring Donations",type:"recurring",notPaid:!0,token:{value:"2.0",converted:"1.10",isNegative:!0}},{text:"One-time Donations/Tips",type:"donations",token:{value:"19.0",converted:"10.10",isNegative:!0}}],total:{value:"11.0",converted:"0.5"},paymentDay:12,openBalance:{value:"10.0",converted:"5.20"},closingBalance:{value:"21.0",converted:"5.30"}})}).add("Add funds",()=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_modalAddFunds__WEBPACK_IMPORTED_MODULE_9__.a,{addresses:[{type:"BTC",address:"17fBi3kyqUd2jjPDSi8ArBbMWso16qmxW5",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAC5CAAAAABRxsGAAAABz0lEQVR42u3cQY7DIAwF0Nz/0u1uVgP5hqYV8Fh1lFF4qVRjbNrrteq4yMnJycnJycnJycnJyXeRX/ejfcO/q6X/q89GTn62PJiz+Wdz9v/uXJqNnJy8/blvRo9mLGg+V302cnLyAXm6jAfBiZyc/EF5kJ+n9yMnJ5/Pz4OZSnvu7+0syMmXlwdr+Qdffbk6R06+sjxu1YRpeD9f+EWHi5x8ZXnwuW8+QwAs1a3JycnjwJEm34OtpFJuT05+tjyIMkHtqm6bjy3k5MfI09JT0A5KL8THqcjJT5WnnddHwkqAJicnj/fDaa82zRzmO7nk5MfI+4SgxBz0eftv22hsISffVx6Ei9J0/TJYvQBNTk6ebJSDq6Os6bMW5OT7ypO1NzwhVdpf99MMcnLyuPP68HONrv7k5GfJSy2d+nY7jUHk5OQ38mDOWokqXP3nYws5+W7ydPRjUD3vLu25ycmPlV/3I60zB6cp+q/mO1zk5FvK04hSP9FU+qrAJ6tz5OS7yeuHK9IE4aoMcnLyUflgzCgVvsnJyedjS1oQSytq89U5cvLN5fWraWoerPTk5OTzv4FWf8z0uR6szpGTryxfYpCTk5OTk5OTk5OTk5OvON4QJEO8FpFK4QAAAABJRU5ErkJggg=="},{type:"ETH",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"BAT",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="},{type:"LTC",address:"Le8aswhmGJjn9jP5teEWdyJARak4xU8sCn",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACOUlEQVR42u3bQXLDIAwF0Nz/0u0FYvKFBNN0Hit7mtq8LDTwRV4//2m8aGhoaGhoaGhoaGhoaGhouprX57H+8LvnvbstPXT9DhoamnHNc+F4fNZyWmvX0AxoaGimNe/qyONf16UrqILBO2hoaL5Is4YESx4aGpov0pRK13prQ0ND86c0gbX0zvX0g/nS0NDc0wRJ4+Gry8ktDQ3NRptxL7ksTfBeF5eGhibYXQSR5mPtS/dBHTANDc2kJkguSwUrtbYaojQ0NEc06e1mSVq7gmCUhobmoCbIHIPOZsnVWd7Q0NCMa9Iwo9TZ3MgwwwyEhoZmXBN0MR+vgmVL50QEDQ3NPU2w4Ci1LUvdzsmUg4aGpt73TE8lBWlIqYhNdjxoaGg6fc/A1d6ZpKcjk7fR0NAMatJ5pM3PYPsU/Ec/s6GhoUlXNmlforRsqR9yCLqiNDQ045pSWekccCr1VvtZJw0NTSfrDEpXUBnTk9HpXouGhua0Zv3AzW7n+iMH+540NDT1rHN97LkejsRLlM9nrmloaO5pSpFmWr+Cn1qkSy0aGprLmtJpqHVcEViH9jc0NDQlTTo2s41SejF5oouGhqaTdaYlKbgKdk6lM9I0NDRnNEElS0OP9DtJ26o0NDT3NEG96fQvgv3Smd0aDQ3NoGZzPVPqc9DQ0PxlTTC3/orlc8BBQ0NzRpMGmeltUMTW3ywNDc09TZBPBH3PemFrlVEaGpoZzdcOGhoaGhoaGhoaGhoaGhqayvgFbnvHJxkVZlQAAAAASUVORK5CYII="}],onClose:doNothing})}).add("Add funds (JP)",()=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_modalAddFunds__WEBPACK_IMPORTED_MODULE_9__.a,{addresses:[{type:"BAT",address:"0xF10bfc0EB8Fcfd1240a5BB97C3e5a7752cD1C388",qr:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM0AAADNCAAAAAA+16u1AAACPklEQVR42u3bwU7DMBAE0P7/T8ONA1LcGXsTFfRyKpQ2+3IY2bvm9fWfrhcNDQ0NDQ0NDQ0NDQ0NDc2p5vX+6m7y84lfry6/ebMCGhqaSU1QW/CJX2+kT6KvgIaG5h7NZd5UubQu6/KbgwpoaGg+QNNn2iWYhobm72rSzwZxRkND81GatGex+bG14eHdGg0NTd/rvPnVw51bGhqajTHj8iZplWlL5O4pLg0NTbC7qIruextBqtLQ0DyiqQaYl8LL363Dbv04hlY2NDQ0qSYoK4ikILqC5c15ptHQ0FSa4E792HJzhHo08aChoTmeEfQ3Duae/RLqqMtBQ0NzsrIJGhebtfWtz/P9DQ0NTZVpgStY43T9yrBDQkND84imGmX2rYn10qiKMxoamnFNuhxJrZvnH9MGBw0NzbgmbWakZaVReHIaioaGZkhTRVe1sgkmKNXGh4aG5h7NzHQybWb0OXfU66ShoakmHsGwI9gMBXk4s8ahoaEZ0lSdy+CU08k/TQ0lNA0NzaYmaFqmG5X+EY13bmloaI4zbXOP0g871o9tKKFpaGjSTAuOL6Y90X7Pk8YZDQ3NpCZuKoQHodYxlbY5aWhontO83l/rP+6LmTlQTUNDM6lJkyzY7lSLpODJ0tDQPKfZLDCIs2p4Mtm5paGhuVmzLjrY5KQNTxoamo/XHGfaxgiGhoZmWpO+GxxcSmNq8+ADDQ3NuCbdbAQ/phuV4I9v7NzS0ND8g4uGhoaGhoaGhoaGhoaGhqa5vgFTleQ0sHcoKgAAAABJRU5ErkJggg=="}],onClose:doNothing})}).add("Donation",()=>{const rows=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:doNothing},{profile:{verified:!1,name:"theguardian.com",src:guardian},url:"https://brave.com",type:"donation",contribute:{tokens:"12000.0",converted:"6000.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:eich},url:"https://brave.com",type:"tip",contribute:{tokens:"7.0",converted:"3.20"},text:"May 2"}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__.a,{rows:rows,onClose:doNothing})}).add("Pending contributions",()=>{const rows=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",type:"recurring",amount:{tokens:"2.0",converted:"0.20"},date:"Jan 2",onRemove:doNothing},{profile:{verified:!1,name:"theguardian.com",src:guardian},url:"https://brave.com",type:"tip",amount:{tokens:"12000.0",converted:"6000.20"},date:"May 7",onRemove:doNothing},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:eich},url:"https://brave.com",type:"ac",amount:{tokens:"1.0",converted:"0.20"},date:"May 2",onRemove:doNothing}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__.a,{rows:rows,onClose:doNothing,onRemoveAll:doNothing})})}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4__),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(205),_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(317),_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(310),_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(787),_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(162),_src_features_rewards__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(72),_src_features_rewards__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(84),_src_features_rewards__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(22),_src_features_rewards__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(68),_src_features_rewards__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(311),_src_features_rewards__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(320),_src_features_rewards__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(312),_src_features_rewards__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(318),_src_features_rewards__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(796),_src_features_rewards__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(504),_src_features_rewards__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(788),_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(321),_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(792),_src_components_icons__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(193),_src_components_icons__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(158),_src_components_icons__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(259),_src_features_rewards_grantClaim__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(125);const favicon=__webpack_require__(65),tipScreen=__webpack_require__(776),siteBgLogo=__webpack_require__(433),dummyClick=()=>{console.log(dummyClick)};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Feature Components/Rewards/Other/Desktop",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4___default.a).add("Box",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({checked:!1,toggle:!0,settings:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,{title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Brave ads"),toggle:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show toggle",store.state.toggle),checked:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Toggle checked",store.state.checked),type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{contribute:"contribute",donation:"donation",ads:"ads"},"contribute"),description:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Description","Earn tokens by seeing ads on Brave. Ads are matched from machine learning and the data temporarily present in your browser without tracking your information or sending it outside."),onToggle:()=>{store.set({checked:!store.state.checked})},settingsChild:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Settings content"),settingsOpened:store.state.settings,onSettingsClick:()=>{store.set({settings:!store.state.settings})}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Some content")))})).add("Disabled content",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{contribute:"contribute",donation:"donation",ads:"ads"},"donation")},"• Donate on the spot as you find gems. ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("br",null),"• ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Enable Tips ")," on Twitter, YouTube, and more, to give tips to posts you ‘Like’.")).add("Alert",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__.a,{type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{error:"error",success:"success",warning:"warning"},"success"),bg:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Background color",!1),colored:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Text color",!1)},react__WEBPACK_IMPORTED_MODULE_0__.createElement("b",null,"Funds received!")," 25 BAT are added to your wallet successfully.")).add("Main toggle",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({checked:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"800px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__.a,{onTOSClick:dummyClick,onPrivacyClick:dummyClick,enabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Enable",store.state.checked),onToggle:()=>{store.set({checked:!store.state.checked})}}))})).add("Donate",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({donationAmounts:[{tokens:"1.0",converted:"0.30",selected:!1},{tokens:"5.0",converted:"1.50",selected:!1},{tokens:"10.0",converted:"3.00",selected:!1}],currentAmount:"5.0"},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:"#696fdc"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__.a,{donateType:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{big:"big",small:"small"},"small"),balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Balance ",5),donationAmounts:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.object)("Donations",store.state.donationAmounts),onDonate:()=>{console.log("onDonate")},title:"Donation amount",actionText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Action text","Send my Donation"),onAmountSelection:tokens=>{store.set({currentAmount:tokens})},currentAmount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Current amount",store.state.currentAmount)}))})).add("List",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_10__.a,{title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Earnings this month")},"Some content"))).add("List - Token",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_11__.a,{title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Brave Contribute"),value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Value","10.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Converted","0.25"),isNegative:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Is negative",!1),color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Color",{contribute:"contribute",donation:"donation",earnings:"earnings",notPaid:"notPaid",default:"default"},"default"),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Size",{normal:"normal",small:"small"},"small")}))).add("Tokens",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_12__.a,{value:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Tokens value","10.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Converted value","4.00"),currency:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Currency","USD"),isNegative:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Is negative",!1),color:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Color",{contribute:"contribute",donation:"donation",earnings:"earnings",notPaid:"notPaid",default:"default"},"default"),size:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Size",{normal:"normal",small:"small"},"small")})).add("Profile",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_13__.a,{type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{big:"big",small:"small"},"big"),title:"Jonathon Doe",verified:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Verified",!1),provider:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Provider",{youtube:"youtube",twitter:"twitter",twitch:"twitch",reddit:"reddit",vimeo:"vimeo"},"youtube"),src:favicon}))).add("Amount",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({selected:!1},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:"#696fdc",width:"335px",padding:"50px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_14__.a,{amount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Amount","5.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Converted","1.50"),selected:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Selected",store.state.selected),type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{big:"Big",small:"Small"},"big"),onSelect:()=>{store.set({selected:!store.state.selected})}}))})).add("Grant claim",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_grantClaim__WEBPACK_IMPORTED_MODULE_26__.a,{type:"ugp",onClaim:dummyClick})).add("Panel Welcome",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",minHeight:"446px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_15__.a,{optInAction:dummyClick,optInErrorAction:dummyClick,variant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Variant",{one:"One",two:"Two"},"one"),moreLink:dummyClick}))).add("Toggle Tips",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({tipsEnabled:!0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_16__.a,{id:"toggle-tips",onToggleTips:()=>{store.set({tipsEnabled:!store.state.tipsEnabled})},tipsEnabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Selected",store.state.tipsEnabled),provider:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Provider",{youtube:"youtube",twitter:"twitter",twitch:"twitch",reddit:"reddit",vimeo:"vimeo"},"youtube")})})).add("Tooltip",()=>{const braveAdsText=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Brave Ads Settings"),batLogoText=react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"BAT Logo"),styledUpholdContent=react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:{fontWeight:"bold",color:"#4AAF57"}},"Uphold. The Internet of Money."));return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"200px",left:"700px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_17__.a,{id:"tooltip-test",content:braveAdsText},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"30px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_23__.a,{color:"#A1A8F2"})))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"280px",left:"685px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_17__.a,{id:"tooltip-test",content:batLogoText},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"60px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_24__.a,null)))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",top:"390px",left:"670px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_17__.a,{id:"tooltip-test",content:styledUpholdContent},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"90px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_25__.a,null)))))}).add("Donation Overlay",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({displayed:!0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{background:`url(${tipScreen}) no-repeat top center`,width:"986px",height:"100vh",margin:"0 auto",position:"relative"}},store.state.displayed?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_18__.a,{onClose:()=>{store.set({displayed:!1})},success:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Success",!1),send:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Is send page?",!0),domain:"duckduckgo.com",amount:"5.0",monthlyDate:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Recurring",{yes:"October 31st, 2018",no:""},"October 31st, 2018"),logo:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show logo",!1)?siteBgLogo:null,onTweet:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show Tweet Now button",!1)?dummyClick:void 0}):null)})).add("Tweet Box",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_19__.a,{tweetTimestamp:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number)("Timestamp in seconds",4642e4),tweetText:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Tweet text","This is my tweet.")})).add("Tab",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({tabIndexSelected:0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"350px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_20__.a,{tabTitles:["Backup","Restore"],onChange:()=>{const newIndex=0===store.state.tabIndexSelected?1:0;store.set({tabIndexSelected:newIndex})},tabIndexSelected:store.state.tabIndexSelected}))})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Feature Components/Rewards/Other/Mobile",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_4___default.a).add("Box",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({checked:!0,toggle:!0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_21__.a,{title:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Title","Brave Auto-Contribute"),toggle:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Show toggle",store.state.toggle),checked:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Toggle checked",store.state.checked),type:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Type",{contribute:"contribute",donation:"donation",ads:"ads"},"contribute"),description:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)("Description","A simple way to support content creators. Set monthly allowance and browse normally. Your favorite sites (content sites only) receive your contributions automatically. You can exclude sites from funding right from the list below."),toggleAction:()=>{store.set({checked:!store.state.checked})},settingsChild:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Settings content")},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{padding:"0px 25px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Detail Content"))))})).add("Main Toggle",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_1__.withState)({checked:!1},store=>{let items=[];for(let i=0;i<25;i++)items.push(i);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_22__.a,{enabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean)("Enable",store.state.checked),onToggle:()=>{store.set({checked:!store.state.checked})}}),items.map(i=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:i},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_10__.a,{title:`Item No: ${i}`}))))}))}.call(this,__webpack_require__(30)(module))},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/tip_site.72253a00.jpg"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__),_src_features_rewards_tableContribute__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(82),_src_features_rewards_tableDonation__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(124),_src_features_rewards_tableTransactions__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(199),_src_features_rewards_tablePending__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(200);const favicon=__webpack_require__(65),ddgo=__webpack_require__(148),wiki=__webpack_require__(149),buzz=__webpack_require__(147),guardian=__webpack_require__(101),eich=__webpack_require__(186),doNothing=()=>{console.log("nothing")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Rewards/Table",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default.a).add("Contribution",()=>{const rows=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",attention:40,onRemove:doNothing},{profile:{name:"duckduckgo.com",verified:!0,src:ddgo},url:"https://brave.com",attention:20,onRemove:doNothing},{profile:{name:"buzzfeed.com",verified:!1,src:buzz},url:"https://brave.com",attention:10,onRemove:doNothing},{profile:{name:"theguardian.com",verified:!0,src:guardian},url:"https://brave.com",attention:5,onRemove:doNothing},{profile:{name:"wikipedia.org",verified:!1,src:wiki},url:"https://brave.com",attention:4,onRemove:doNothing}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_tableContribute__WEBPACK_IMPORTED_MODULE_4__.a,{header:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Header",["Site","Attention"]),rows:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Rows",rows),allSites:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Are this all sites?",!1),numSites:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Number of all sites?",55),showRowAmount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show row amount",!1),showRemove:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show remove action",!0),headerColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Colored header",!0)},"Please visit some sites"))}).add("Donation",()=>{const rows=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",type:"recurring",contribute:{tokens:"2.0",converted:"0.20"},onRemove:doNothing},{profile:{verified:!1,name:"theguardian.com",src:guardian},url:"https://brave.com",type:"donation",contribute:{tokens:"12000.0",converted:"6000.20"},text:"May 7"},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:eich},url:"https://brave.com",type:"tip",contribute:{tokens:"1.0",converted:"0.20"},text:"May 2"}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_tableDonation__WEBPACK_IMPORTED_MODULE_5__.a,{rows:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Rows",rows),allItems:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Are this all items?",!1),numItems:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Number of all items?",55),headerColor:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Colored header",!0)},"Please visit some sites"))}).add("Transactions",()=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_tableTransactions__WEBPACK_IMPORTED_MODULE_6__.a,{rows:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Rows",[{date:"6/1",type:"deposit",description:"Brave Ads payment for May",amount:{value:"5.0",converted:"5.00"}},{date:"6/9",type:"tipOnLike",description:{publisher:"Jonathon Doe",platform:"YouTube"},amount:{isNegative:!0,value:"5.0",converted:"11.00"}},{date:"6/31",type:"contribute",description:"Monthly payment",amount:{isNegative:!0,value:"5.0",converted:"15.00"}}])},"Sorry no transactions."))}).add("Pending contributions",()=>{const rows=[{profile:{name:"Jonathon Doe",verified:!0,provider:"youtube",src:favicon},url:"https://brave.com",type:"recurring",amount:{tokens:"2.0",converted:"0.20"},date:"Jan 2",onRemove:doNothing},{profile:{verified:!1,name:"theguardian.com",src:guardian},url:"https://brave.com",type:"tip",amount:{tokens:"12000.0",converted:"6000.20"},date:"May 7",onRemove:doNothing},{profile:{verified:!1,name:"BrendanEich",provider:"twitter",src:eich},url:"https://brave.com",type:"ac",amount:{tokens:"1.0",converted:"0.20"},date:"May 2",onRemove:doNothing}];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"595px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_tablePending__WEBPACK_IMPORTED_MODULE_7__.a,{rows:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Rows",rows)},"Please visit some sites"))})}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(38),_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3__),_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(165),_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(314),_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(319),_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(506),_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(500),_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(505),_src_components_icons__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(105),_src_components_icons__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(254),_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(793);const favicon=__webpack_require__(65),doNothing=()=>{console.log("nothing")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Rewards/Wallet/Desktop",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default.a).add("Wrapper",()=>{const alert={node:"Some text",type:"success",onAlertClose:doNothing},adsLaunchNotification={id:"001",type:"ads-launch",onCloseNotification:doNothing,text:react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,"Now you can earn by viewing ads.")},showAlert=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show alert",!1),showGrant=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show grants",!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_4__.a,{compact:!1,contentPadding:!1,onNotificationClick:()=>{console.log("enabling ads")},notification:adsLaunchNotification,connectedWallet:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Connected wallet",!1),showCopy:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show Uphold",!1),showSecActions:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show secondary actions",!0),balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Balance","25.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Converted","163230.50 USD"),actions:[{name:"Add funds",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_10__.a,null)},{name:"Withdraw Funds",action:doNothing,icon:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_components_icons__WEBPACK_IMPORTED_MODULE_11__.a,null)}],grants:showGrant?[{tokens:"8.0",expireDate:"7/15/2018",type:"ugp"},{tokens:"10.0",expireDate:"9/10/2018",type:"ugp"},{tokens:"10.0",expireDate:"10/10/2018",type:"ads"}]:[],alert:showAlert?alert:void 0},"Some content")}).add("Empty",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",background:"#f9fbfc",padding:"0 25px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_5__.a,null))).add("Summary",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",background:"#f9fbfc",padding:"0 25px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_6__.a,{report:{grant:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Grant",{tokens:"10.0",converted:"0.25"}),deposit:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Deposit",{tokens:"10.0",converted:"0.25"}),ads:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Ads",{tokens:"10.0",converted:"0.25"}),contribute:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Contribute",{tokens:"10.0",converted:"0.25"}),donation:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Donation",{tokens:"2.0",converted:"0.25"}),tips:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.object)("Tips",{tokens:"19.0",converted:"5.25"})},onActivity:doNothing,reservedAmount:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.number)("Reserved amount",52),reservedMoreLink:"https://brave.com",onSeeAllReserved:doNothing}))).add("Panel",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",background:"#fff"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_7__.a,{id:"wallet-panel",platform:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)("Provider",{youtube:"youtube",twitter:"twitter",twitch:"twitch",reddit:"reddit",vimeo:"vimeo"},"youtube"),publisherImg:favicon,publisherName:"Jonathan Doe",monthlyAmount:"10.0",isVerified:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Verified",!0),tipsEnabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Tips Enabled",!0),includeInAuto:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Include in monthly",!0),acEnabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("AC enabled?",!0),attentionScore:"15",donationAmounts:[{tokens:"0.0",converted:"0.00"},{tokens:"1.0",converted:"0.50"},{tokens:"5.0",converted:"2.50"},{tokens:"10.0",converted:"5.00"}],onToggleTips:doNothing,donationAction:doNothing,onAmountChange:doNothing,onIncludeInAuto:doNothing,showUnVerified:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Show unverified content",!0),onRefreshPublisher:doNothing}))).add("Off",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",background:"#f9fbfc",padding:"0 25px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_8__.a,null))).add("Summary Slider",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"373px",padding:"0 25px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards__WEBPACK_IMPORTED_MODULE_9__.a,{id:"summary-slider"}))),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Rewards/Wallet/Mobile",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).addDecorator(_storybook_addon_centered__WEBPACK_IMPORTED_MODULE_3___default.a).add("Wallet Info Header",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100vh",width:"100%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100%",position:"absolute",top:"30%"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_src_features_rewards_mobile__WEBPACK_IMPORTED_MODULE_12__.a,{id:"info-header",onClick:doNothing,balance:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Balance","30.0"),converted:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.text)("Converted","163230.50 USD")}))))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_src_theme_shields_light__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(479),_src_theme_shields_dark__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(480),storybook_addon_styled_component_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(189),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20),_index__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(284);const favicon=__webpack_require__(780),themes=[_src_theme_shields_light__WEBPACK_IMPORTED_MODULE_2__.a,_src_theme_shields_dark__WEBPACK_IMPORTED_MODULE_3__.a];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Shields",module).addDecorator(Object(storybook_addon_styled_component_theme__WEBPACK_IMPORTED_MODULE_4__.withThemesProvider)(themes)).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.withKnobs).add("Enabled",Object(_dump247_storybook_state__WEBPACK_IMPORTED_MODULE_6__.withState)({enabled:!0},store=>{return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{margin:"120px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_7__.default,{favicon:favicon,hostname:"buzzfeed.com",enabled:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean)("Enabled?",store.state.enabled),adsTrackersBlocked:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.number)("3rd-party trackers blocked",80)||0,httpsUpgrades:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.number)("Connections upgraded to HTTPS",0)||0,scriptsBlocked:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.number)("Scripts blocked",11)||0,fingerprintingBlocked:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.number)("3rd-party device recognition blocked",0)||0,fakeOnChange:()=>{store.set({enabled:!store.state.enabled})}}))}))}.call(this,__webpack_require__(30)(module))},function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/fake_favicon.d241873a.png"},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_page_fakeData__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44),_modals_resetSync__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(155),_modals_deviceType__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(103),_modals_scanCode__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(151),_modals_enterSyncCode__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(152),_modals_viewSyncCode__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(67),_modals_removeMainDevice__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(154),_modals_removeOtherDevice__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(153);const doNothing=()=>{console.log("nothing")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Sync/Popups and Modals",module).add("Reset Sync",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_resetSync__WEBPACK_IMPORTED_MODULE_3__.default,{onClose:doNothing,mainDeviceName:_page_fakeData__WEBPACK_IMPORTED_MODULE_2__.a.device1.name})).add("Device Type",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_deviceType__WEBPACK_IMPORTED_MODULE_4__.default,{onClose:doNothing})).add("Scan Code",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_scanCode__WEBPACK_IMPORTED_MODULE_5__.default,{onClose:doNothing})).add("Enter Sync Code",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_enterSyncCode__WEBPACK_IMPORTED_MODULE_6__.default,{onClose:doNothing})).add("View Sync Code",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_viewSyncCode__WEBPACK_IMPORTED_MODULE_7__.default,{onClose:doNothing})).add("Remove Main Device",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_removeMainDevice__WEBPACK_IMPORTED_MODULE_8__.default,{onClose:doNothing,mainDeviceName:_page_fakeData__WEBPACK_IMPORTED_MODULE_2__.a.device1.name})).add("Remove Other Device",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modals_removeOtherDevice__WEBPACK_IMPORTED_MODULE_9__.default,{onClose:doNothing,otherDeviceName:_page_fakeData__WEBPACK_IMPORTED_MODULE_2__.a.device2.name}))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storyUtils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(156),_page_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(198);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Sync/Page",module).addDecorator(_storyUtils__WEBPACK_IMPORTED_MODULE_2__.FullPageStory).add("Disabled Content",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_index__WEBPACK_IMPORTED_MODULE_3__.default,{disabled:!0})).add("Enabled Content",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_index__WEBPACK_IMPORTED_MODULE_3__.default,null))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_storyUtils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(156),_page_index__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(287);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Feature Components/Welcome",module).addDecorator(_storyUtils__WEBPACK_IMPORTED_MODULE_3__.FullPageStory).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Page",()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_page_index__WEBPACK_IMPORTED_MODULE_4__.default,{isDefaultSearchGoogle:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Is default search google?",!0)}))}.call(this,__webpack_require__(30)(module))},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const getThemeSizes=p=>{let fillSize="8",circleSize="18",fontSize="14";return"big"===p.size&&(fillSize="10",circleSize="24",fontSize="16"),theme.a`
    --radio-fill-size: ${fillSize}px;
    --radio-circle-size: ${circleSize}px;
    --radio-font-size: ${fontSize}px;
    --radio-right-margin: ${"17"}px;
  `},getThemeColors=(p,selected)=>{let fillColor=p.theme.color.brandBat,borderColor=p.theme.color.subtleActive;return p.disabled||(borderColor=selected?p.theme.color.brandBat:p.theme.color.brandBatActive),theme.a`
    --radio-fill-color: ${fillColor};
    --radio-border-color: ${borderColor};
  `},StyledLabel=Object(theme.b)("label").withConfig({displayName:"StyledLabel"})`
  ${p=>getThemeSizes(p)}
  line-height: 1.3;
  display: flex;
  margin-bottom: 30px;
  font-size: var(--radio-font-size);
  cursor: pointer;
`,StyledInput=Object(theme.b)("input").withConfig({displayName:"StyledInput"})`
  opacity: 0;
  position: absolute;
`,StyledCircle=Object(theme.b)("span").withConfig({displayName:"StyledCircle"})`
  ${p=>getThemeSizes(p)}
  ${p=>getThemeColors(p,p.selected)}
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: var(--radio-circle-size);
  width: var(--radio-circle-size);
  height: var(--radio-circle-size);
  border: 1px solid var(--radio-border-color);
  margin-right: var(--radio-right-margin);
  border-radius: 50%;
`,StyledFill=Object(theme.b)("div").withConfig({displayName:"StyledFill"})`
  ${p=>getThemeSizes(p)}
  ${p=>getThemeColors(p,p.selected)}
  width: var(--radio-fill-size);
  height: var(--radio-fill-size);
  border-radius: 50%;
  background: var(--radio-fill-color);
`,StyledText=Object(theme.b)("span").withConfig({displayName:"StyledText"})`
  flex: 1;
  letter-spacing: 0;
  display: flex;
  padding-top: ${p=>"big"===p.size?"2px":"1px"};
`;__webpack_require__.d(__webpack_exports__,"a",function(){return radio_Radio});class radio_Radio extends react.PureComponent{constructor(){super(...arguments),this.generateChecks=(children=>{const self=this;return react.Children.map(children,(child,i)=>{if(void 0===child.props["data-value"])return null;const element=child.props.children,key=child.props["data-value"],selected=self.props.value[key]||!1;return react.createElement(StyledLabel,{key:`option-${i}`,onClick:self.props.disabled?void 0:self.onOptionClick.bind(self,key,child,selected),size:self.props.size},react.createElement(StyledCircle,{selected:selected,disabled:self.props.disabled,size:self.props.size},selected?react.createElement(StyledFill,{size:self.props.size}):null),react.createElement(StyledText,{disabled:self.props.disabled,size:self.props.size},element),react.createElement(StyledInput,{type:"radio",checked:selected,readOnly:!0}))})}),this.onOptionClick=((key,child,selected)=>{if(!this.props.onChange)return;let newState={};this.props.value[key]||Object.keys(this.props.value).map(item=>{newState[item]=key===item&&!selected}),this.props.onChange(key,!selected,child,newState)})}render(){const{id:id,children:children}=this.props,numChildren=react.Children.count(children);return react.createElement("div",{id:id},numChildren>0?this.generateChecks(children):null)}}radio_Radio.defaultProps={size:"small",disabled:!1}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
`,StyledArea=Object(styled_components_browser_esm.default)("textarea").withConfig({displayName:"StyledArea"})`
  min-height: 140px;
  box-sizing: border-box;
  width: 100%;
  font-family: Muli, sans-serif;
  border: 1px solid ${p=>(p=>{let color="#DFDFE8";return p.disabled&&(color="#E5E5EA"),p.fieldError&&(color="#E2052A"),color})(p)};
  color: ${p=>p.disabled?"#D1D1DB":"#686978"};
  border-radius: 6px;
  padding: 15px 20px;
  font-size: 16px;
  line-height: 26px;

  &:disabled {
    background: #fff;
  }

  &:focus {
    border-color: #A1A8F2;
    outline: none;
  }
`;__webpack_require__.d(__webpack_exports__,"a",function(){return textarea_TextArea});class textarea_TextArea extends react.PureComponent{render(){const{id:id,onChange:onChange,value:value,defaultValue:defaultValue,readOnly:readOnly,placeholder:placeholder,disabled:disabled,fieldError:fieldError}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledArea,{onChange:onChange,disabled:disabled,value:value,readOnly:readOnly,placeholder:placeholder,defaultValue:defaultValue,fieldError:fieldError}))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledTabWrapper=Object(theme.b)("div").withConfig({displayName:"StyledTabWrapper"})`
  border-bottom: 1px solid #DFDFE8;
  text-align: center;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledTab=Object(theme.b)("div").withConfig({displayName:"StyledTab"})`
  border-radius: 6px 6px 0 0;
  border: 1px solid #DFDFE8;
  border-bottom: 1px solid ${p=>p.selected?"#FFF":"#DFDFE8"};
  color: ${p=>p.selected?"#FB542B":"#686978"};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.29px;
  line-height: 44px;
  display: inline-block;
  cursor: pointer;
  min-width: 230px;
  padding: 0 10px;
  margin: 0 2px;
  position: relative;
  top: 1px
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
  padding: 34px 56px 20px;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return tabs_Tabs});class tabs_Tabs extends react.PureComponent{constructor(){super(...arguments),this.generateTabs=(()=>{let content=null;const self=this;return 0===react.Children.count(self.props.children)?{tabs:null,content:null}:{tabs:react.Children.map(self.props.children,(child,i)=>{if(void 0===child.props["data-key"])return null;const key=child.props["data-key"],title=child.props["data-title"]||`Tab - ${i}`,selected=!!self.props.activeTabId&&(self.props.activeTabId===key||0===self.props.activeTabId.length&&0===i);return selected&&(content=child.props.children),react.createElement(StyledTab,{key:`${self.props.id}-tab-${key}`,onClick:self.props.onChange.bind(self,key),selected:selected},title)}),content:content}})}render(){const{id:id,className:className}=this.props,{content:content,tabs:tabs}=this.generateTabs();return react.createElement("div",{className:className,id:id},react.createElement(StyledTabWrapper,null,tabs),react.createElement(StyledContent,null,content))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const MainToggleWrapper=Object(theme.b)("div").withConfig({displayName:"MainToggleWrapper"})`
  display: flex;
  border-radius: 4px;
  background-color: #FFF;
  justify-content: space-between;
  padding: 20px 32px;
  margin-bottom: 24px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  flex-direction: column;
`,ToggleHeading=Object(theme.b)("div").withConfig({displayName:"ToggleHeading"})`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 28px;
  font-weight: 600;
  font-family: ${p=>p.theme.fontFamily.heading};
`,StyledLogotypeWrapper=Object(theme.b)("div").withConfig({displayName:"StyledLogotypeWrapper"})`
  display: flex;
  align-items: center;
`,StyledTOSWrapper=Object(theme.b)("div").withConfig({displayName:"StyledTOSWrapper"})`
  display: block;
  margin-top: 20px;
  font-family: Muli, sans-serif;
`,StyledServiceText=Object(theme.b)("span").withConfig({displayName:"StyledServiceText"})`
  color: ${p=>p.theme.palette.grey800};
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 18px;
`,StyledServiceLink=Object(theme.b)("a").withConfig({displayName:"StyledServiceLink"})`
  cursor: pointer;
  color: ${p=>p.theme.palette.blurple500};
  font-weight: 600;
`,StyledLogoWrapper=Object(theme.b)("div").withConfig({displayName:"StyledLogoWrapper"})`
width: 48px;
height: 48px;
margin: 8px;
`;var toggle=__webpack_require__(64),helpers=__webpack_require__(3),fc_logo_bat=__webpack_require__(158);__webpack_require__.d(__webpack_exports__,"a",function(){return mainToggle_MainToggle});class mainToggle_MainToggle extends react.PureComponent{render(){const{id:id,enabled:enabled,onToggle:onToggle,testId:testId,onTOSClick:onTOSClick,onPrivacyClick:onPrivacyClick}=this.props;return react.createElement(MainToggleWrapper,{id:id},react.createElement(ToggleHeading,null,react.createElement(StyledLogotypeWrapper,null,react.createElement(StyledLogoWrapper,null,react.createElement(fc_logo_bat.a,null)),react.createElement(StyledTitle,null,Object(helpers.a)("braveRewards"))),react.createElement(toggle.a,{checked:enabled,onToggle:onToggle,testId:testId})),enabled?null:react.createElement(StyledTOSWrapper,null,react.createElement(StyledServiceText,null,Object(helpers.a)("serviceTextToggle")," ",react.createElement(StyledServiceLink,{onClick:onTOSClick},Object(helpers.a)("termsOfService"))," ",Object(helpers.a)("and")," ",react.createElement(StyledServiceLink,{onClick:onPrivacyClick},Object(helpers.a)("privacyPolicy")),".")))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2),colors=__webpack_require__(6);const RewardsTabWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"RewardsTabWrapper"})`
  display: flex;
  font-family: Poppins,sans-serif;
`,StyledSwitch=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledSwitch"})`
  position: relative;
  display: block;
  width: 100%;
  height: 43px;
  cursor: pointer;
`,StyledSlider=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledSlider"})`
  width: 100%;
  height: 100%;
  background: #DFDFE8;
  border-radius: 21.5px 21.5px 21.5px 21.5px;
`,StyledBullet=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledBullet"})`
  top: -17px;
  width: 50%;
  height: 37px;
  background: ${p=>p.theme.color.primaryBackground};
  border-radius: 21.5px 21.5px 21.5px 21.5px;
  position: relative;
  transition: all .4s ease;
  transform: translate(calc(${p=>0===p.tabIndexSelected?2:97}%), calc(-50% - 4px));
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.05);
`,StyledTab=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTab"})`
  width: 50%;
  display: block;
  height: 100%;
  float: ${p=>p.left?"left":"right"};
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  z-index: 9;
  position: relative;
  font-size: 14px;
  width: 70%;
  margin: 13px auto 0 auto;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  text-align: center;
  user-select: none;
  color: ${p=>p.selected?"contribute"===p.type?colors.a.blurple500:p.theme.color.brandBrave:p.theme.color.subtleActive};
  font-weight: ${p=>p.selected?"500":"normal"};
`;__webpack_require__.d(__webpack_exports__,"a",function(){return tab_Tab});class tab_Tab extends react.PureComponent{constructor(){super(...arguments),this.getTabs=(tabTitles=>{const{type:type}=this.props;return tabTitles.map((title,i)=>react.createElement(StyledTab,{left:0===i,key:`tab-${i}`,onClick:this.onSwitchChange.bind(this,i)},react.createElement(StyledText,{type:type,selected:i===this.props.tabIndexSelected},title)))}),this.onSwitchChange=((index,event)=>{index!==this.props.tabIndexSelected&&this.props.onChange&&this.props.onChange(event)})}render(){const{testId:testId,tabTitles:tabTitles,tabIndexSelected:tabIndexSelected}=this.props;return tabTitles&&2===tabTitles.length?react.createElement(RewardsTabWrapper,null,react.createElement(StyledSwitch,null,react.createElement(StyledSlider,{"data-test-id":testId},this.getTabs(tabTitles)),react.createElement(StyledBullet,{tabIndexSelected:tabIndexSelected}))):(console.warn("Rewards Tab currently supports 2 tab titles"),null)}}tab_Tab.defaultProps={tabIndexSelected:0}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  border-radius: 8px;
  background-image: linear-gradient(148deg, #2825a7, #5465e8), linear-gradient(#696fdc, #696fdc);
  width: 214px;
  overflow: hidden;
  position: relative;
  padding: 16px 0 0;
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 12px;
  line-height: 1.83;
  color: #fff;
  opacity: 0.6;
  padding-left: 23px;
`,StyledAllowToggle=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledAllowToggle"})`
  display: inline-block;
  margin-left: 33px;
  vertical-align: middle;
  padding-top: 2px;
`,StyledAllowText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledAllowText"})`
  opacity: 0.65;
  font-size: 10px;
  line-height: 1.5;
  color: #fff;
`,StyledClose=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledClose"})`
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #DFDFE8;
  width: 20px;
  z-index: 2;
`,StyledTipWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTipWrapper"})`
  display: flex;
  max-width: 160px;
  margin-bottom: 7px;
`;var donate=__webpack_require__(162),toggle=__webpack_require__(64),helpers=__webpack_require__(3),close_circle_o=__webpack_require__(191);__webpack_require__.d(__webpack_exports__,"a",function(){return tip_Tip});class tip_Tip extends react.PureComponent{constructor(){super(...arguments),this.onDonate=(amount=>{this.props.onDonate&&this.props.onDonate(amount,this.props.allow)}),this.onToggle=(()=>{this.props.onAllow&&this.props.onAllow(!this.props.allow)}),this.onAmountChange=(tokens=>{this.props.onAmountSelection&&this.props.onAmountSelection(tokens)})}render(){const{id:id,title:title,balance:balance,donationAmounts:donationAmounts,allow:allow,onClose:onClose,provider:provider,currentAmount:currentAmount,addFundsLink:addFundsLink}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledClose,{onClick:onClose},react.createElement(close_circle_o.a,null)),react.createElement(StyledTitle,null,"Send my tip to"),react.createElement(donate.a,{title:title||"",actionText:Object(helpers.a)("sendTip"),balance:parseFloat(balance),donationAmounts:donationAmounts,onAmountSelection:this.onAmountChange,onDonate:this.onDonate,donateType:"small",currentAmount:currentAmount,addFundsLink:addFundsLink},react.createElement(StyledTipWrapper,null,react.createElement(StyledAllowText,null,Object(helpers.a)("allowTip")," ",provider),react.createElement(StyledAllowToggle,null,react.createElement(toggle.a,{onToggle:this.onToggle,checked:allow,size:"small",type:"light"})))))}}tip_Tip.defaultProps={title:""}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div")`
  text-align: center;
  font-family: Poppins, sans-serif;
  margin-top: 7px;
  padding-bottom: 20px;
  background: linear-gradient(-180deg, rgba(255,255,255,1) 0%, rgba(233, 235, 255,1) 99%);
`,StyledBatLogo=Object(styled_components_browser_esm.default)("span")`
  display: block;
  margin: -10px auto 0px;
  width: 150px;
  height: 115px;
  padding: 20px 0 15px;
`,StyledTitle=Object(styled_components_browser_esm.default)("span")`
  color: #4B4C5C;
  font-size: 28px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 22px;
  display: block;
`,StyledSubTitle=Object(styled_components_browser_esm.default)("span")`
  color: #4C54D2;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.23px;
  line-height: 22px;
  display: block;
  margin: 10px 0px 5px;
`,StyledText=Object(styled_components_browser_esm.default)("span")`
  display: block;
  color: #4B4C5C;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 24px;
  width: 285px;
  margin: 0 auto;
  font-family: Muli, sans-serif;
`,StyledArrowIcon=Object(styled_components_browser_esm.default)("span")`
  top: 2px;
  position: relative;
  font-weight: 600;
`,StyledButtonWrapper=Object(styled_components_browser_esm.default)("div")`
  width: 269px;
  margin: 18px auto 15px;
`,StyledServiceText=Object(styled_components_browser_esm.default)("span")`
  color: #4A4A4A;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
  width: 290px;
  margin: 0 auto;
  display: block;
  font-family: Muli, sans-serif;
`,StyledServiceLink=Object(styled_components_browser_esm.default)("a")`
  cursor: pointer;
  color: #73CBFF;
  font-weight: 500;
`;var rewardsButton=__webpack_require__(799),fc_logo_bat=__webpack_require__(158),icons=__webpack_require__(9),helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return walletPanelDisabled_WalletPanelDisabled});class walletPanelDisabled_WalletPanelDisabled extends react.PureComponent{render(){const{onEnable:onEnable,onTOSClick:onTOSClick,onPrivacyClick:onPrivacyClick}=this.props;return react.createElement(StyledWrapper,null,react.createElement(StyledBatLogo,null,react.createElement(fc_logo_bat.a,null)),react.createElement(StyledTitle,null,Object(helpers.a)("welcomeBack")),react.createElement(StyledSubTitle,null,Object(helpers.a)("braveRewardsSubTitle")),react.createElement(StyledText,null,Object(helpers.a)("disabledPanelTextTwo")),react.createElement(StyledButtonWrapper,null,react.createElement(rewardsButton.a,{type:"tip",testId:"optInAction",onClick:onEnable,text:Object(helpers.a)("enableRewards"),icon:react.createElement(StyledArrowIcon,null,react.createElement(icons.ArrowRightIcon,null))})),react.createElement(StyledServiceText,null,Object(helpers.a)("serviceText")," ",react.createElement(StyledServiceLink,{onClick:onTOSClick},Object(helpers.a)("termsOfService"))," ",Object(helpers.a)("and")," ",react.createElement(StyledServiceLink,{onClick:onPrivacyClick},Object(helpers.a)("privacyPolicy")),"."))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  padding: 30px 25px 25px;
  font-family: Poppins, sans-serif;
  background-image: linear-gradient(140deg, #392DD1 0%, #8E2995 100%);
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  color: #F1F1F9;
  font-weight: 500;
  letter-spacing: 0;
`,StyledOff=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledOff"})`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 600;
  letter-spacing: 0;
  margin-left: 3px;
`,StyledText=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledText"})`
  color: #F1F1F9;
  font-size: 14px;
  font-family: Muli,sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  line-height: 20px;
  max-width: 276px;
  margin-top: 7px;
`,StyledLink=Object(styled_components_browser_esm.default)("a").withConfig({displayName:"StyledLink"})`
  cursor: pointer;
  margin-left: 4px;
  display: inline-block;
  color: #8D92E2;
`,StyledTitleWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitleWrapper"})`
  display: flex;
`;var helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return disabledPanel_DisabledPanel});class disabledPanel_DisabledPanel extends react.PureComponent{render(){const{testId:testId,isPrivate:isPrivate,onLinkOpen:onLinkOpen}=this.props;return react.createElement(StyledWrapper,{"data-test-id":testId},react.createElement(StyledTitleWrapper,null,react.createElement(StyledTitle,null,Object(helpers.a)("disabledPanelTitle")),react.createElement(StyledOff,null,Object(helpers.a)("disabledPanelOff"))),react.createElement(StyledText,null,isPrivate?Object(helpers.a)("disabledPanelPrivateText"):Object(helpers.a)("disabledPanelText"),react.createElement(StyledLink,{onClick:onLinkOpen},isPrivate?Object(helpers.a)("learnMore"):Object(helpers.a)("disabledPanelSettings"))))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: ${p=>p.theme.fontFamily.body};
  display: flex;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 61px;
  z-index: 2;
  box-shadow: 0 2px 4px  rgba(0,0,0, 0.2);
  padding: 0 16px;
`,StyledLeft=Object(theme.b)("div").withConfig({displayName:"StyledLeft"})`
  display: flex;
  align-items: center;
`,StyledRight=Object(theme.b)("div").withConfig({displayName:"StyledRight"})`
  display: flex;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  color: #4B4C5C;
  font-size: 22px;
  font-weight: 600;
  font-family: ${p=>p.theme.fontFamily.heading};

  @media (max-width: 375px) {
    word-wrap: break-word;
  }
`,StyledLogoWrapper=Object(theme.b)("div").withConfig({displayName:"StyledLogoWrapper"})`
  width: 24px;
  height: 24px;
  margin: 8px;
`;var toggle=__webpack_require__(64),helpers=__webpack_require__(3),fc_logo_bat=__webpack_require__(158);__webpack_require__.d(__webpack_exports__,"a",function(){return mainToggleMobile_MainToggleMobile});class mainToggleMobile_MainToggleMobile extends react.PureComponent{render(){const{id:id,enabled:enabled,onToggle:onToggle,testId:testId}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledLeft,null,react.createElement(StyledLogoWrapper,null,react.createElement(fc_logo_bat.a,null)),react.createElement(StyledTitle,null,Object(helpers.a)("braveRewards"))),react.createElement(StyledRight,null,react.createElement(toggle.a,{checked:enabled,onToggle:onToggle,testId:testId})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1),panel=__webpack_require__(476),panel_default=__webpack_require__.n(panel);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  width: 100%;
  display: flex;
  border-radius: 6px;
  margin-bottom: 15px;
  font-family: ${p=>p.theme.fontFamily.heading};
  background: url(${panel_default.a}) no-repeat top left,
  linear-gradient(to bottom right, #392dd1 0%, #5813a6 100%) 100% no-repeat;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0,0,0,.2);
`,StyledHeader=Object(theme.b)("div").withConfig({displayName:"StyledHeader"})`
  padding: 16px 21px 14px 19px;
  position: relative;
`,StyledTitle=Object(theme.b)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.38;
  letter-spacing: -0.2px;
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: 360px) {
    font-size: 14px;
  }
`,StyledBalance=Object(theme.b)("div").withConfig({displayName:"StyledBalance"})`
  margin-top: -14px;
  text-align: center;
`,StyledBalanceTokens=Object(theme.b)("div").withConfig({displayName:"StyledBalanceTokens"})`
  font-size: 38px;
  line-height: 0.61;
  letter-spacing: -0.4px;
  color: #fff;
  font-weight: 300;
  margin-top: 10px;
`,StyledBalanceConverted=Object(theme.b)("div").withConfig({displayName:"StyledBalanceConverted"})`
  font-family: Muli, sans-serif;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  color: rgba(255, 255, 255, 0.65);
  margin: 8px 0;
`,StyledBalanceCurrency=Object(theme.b)("span").withConfig({displayName:"StyledBalanceCurrency"})`
  text-transform: uppercase;
  opacity: 0.66;
  font-family: Muli, sans-serif;
  font-size: 16px;
  line-height: 14px;
  color: #fff;
  letter-spacing: 0px;
`;var helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return walletInfoHeader_WalletInfoHeader});class walletInfoHeader_WalletInfoHeader extends react.PureComponent{render(){const{id:id,balance:balance,converted:converted,onClick:onClick}=this.props;return react.createElement(StyledWrapper,{id:id,onClick:onClick},react.createElement(StyledHeader,null,react.createElement(StyledTitle,null,Object(helpers.a)("yourWallet")),react.createElement(StyledBalance,null,react.createElement(StyledBalanceTokens,null,balance," ",react.createElement(StyledBalanceCurrency,null,"BAT")),converted?react.createElement(StyledBalanceConverted,null,converted):null)))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
  margin-bottom: 20px;
`;var modal=__webpack_require__(42),tableDonation=__webpack_require__(124),helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return modalDonation_ModalDonation});class modalDonation_ModalDonation extends react.PureComponent{render(){const{id:id,onClose:onClose,rows:rows}=this.props,numRows=rows&&rows.length||0;return react.createElement(modal.a,{id:id,onClose:onClose},react.createElement(StyledWrapper,null,react.createElement(StyledTitle,null,Object(helpers.a)("donationTips")),react.createElement(tableDonation.a,{rows:rows,allItems:!0,numItems:numRows,headerColor:!0})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledWrapper=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledWrapper"})`
  font-family: Poppins, sans-serif;
`,StyledTitle=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledTitle"})`
  font-size: 20px;
  font-weight: 600;
  line-height: 2;
  color: #4b4c5c;
  margin-bottom: 20px;
  display: flex;
`,StyledRemoveAll=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledRemoveAll"})`
  display: inline-block;
  border: none;
  background: none;
  color: #696fdc;
  font-size: 13px;
  font-weight: normal;
  cursor: pointer;
  margin: 6px 5px 0 0;
`;var modal=__webpack_require__(42),tablePending=__webpack_require__(200),helpers=__webpack_require__(3);__webpack_require__.d(__webpack_exports__,"a",function(){return modalPending_ModalPending});class modalPending_ModalPending extends react.PureComponent{render(){const{id:id,onClose:onClose,rows:rows,onRemoveAll:onRemoveAll}=this.props;return react.createElement(modal.a,{id:id,onClose:onClose},react.createElement(StyledWrapper,null,react.createElement(StyledTitle,null,Object(helpers.a)("pendingContributions"),onRemoveAll?react.createElement(StyledRemoveAll,{onClick:onRemoveAll},Object(helpers.a)("pendingContributionRemoveAll")):null),react.createElement(tablePending.a,{id:"pendingContributionTable",rows:rows,children:Object(helpers.a)("pendingContributionEmpty")})))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledOuterWrapper=Object(theme.b)("div").withConfig({displayName:"StyledOuterWrapper"})`
  display: flex;
`,StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(12,13,33,0.85);
  font-family: ${p=>p.theme.fontFamily.body};
  justify-content: center;
`,StyledHeaderText=Object(theme.b)("span").withConfig({displayName:"StyledHeaderText"})`
  color: #D1D1DB;
  font-size: 38px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
`,StyledOverlayTop=Object(theme.b)("div").withConfig({displayName:"StyledOverlayTop"})`
  display: flex;
  flex-direction: row;
  padding-top: 110px;
`,StyledOverlayContent=Object(theme.b)("div").withConfig({displayName:"StyledOverlayContent"})`
  display: block;
`,StyledIconWrapper=Object(theme.b)("span").withConfig({displayName:"StyledIconWrapper"})`
  flex: 1 0 0;
  margin-top: ${p=>p.success?0:"-25px"}
`,StyledIcon=Object(theme.b)("span").withConfig({displayName:"StyledIcon"})`
  width: 90px;
  margin-top: -7px;
  margin-right: 9px;
  display: inline-block;
`,StyledMessage=Object(theme.b)("div").withConfig({displayName:"StyledMessage"})`
  flex: 9 0 0;
  padding-top: 10px;
  text-align: ${p=>p.monthly?"center":"inherit"};
  margin-right: ${p=>p.success?0:"-10px"}
`,StyledProviderImage=Object(theme.b)("div").withConfig({displayName:"StyledProviderImage"})`
  width: 90px;
  height: 90px;
  padding: 0 20px;
  border-radius: 50%;
  margin-right: 25px;
  background-repeat: no-repeat;
  background-size: 90px;
  background-image:url(${p=>p.src?p.src:""});
`,StyledImageBorder=Object(theme.b)("div").withConfig({displayName:"StyledImageBorder"})`
  position: relative;
  top: 0;
  left: -20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 5px solid #ffffff;
`,StyledFailWrapper=Object(theme.b)("div").withConfig({displayName:"StyledFailWrapper"})`
  margin-top: 110px;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,StyledCloseIcon=Object(theme.b)("span").withConfig({displayName:"StyledCloseIcon"})`
  color: #FFF;
`,StyledClose=Object(theme.b)("button").withConfig({displayName:"StyledClose"})`
  top: 20px;
  right: 20px;
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: #FFF;
  padding: 0;
  z-index: 2;
`,StyledFailTitle=Object(theme.b)("span").withConfig({displayName:"StyledFailTitle"})`
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 28px;
  display: block;
  margin-bottom: 10px;
`,StyledFailMsg=Object(theme.b)("span").withConfig({displayName:"StyledFailMsg"})`
  color: #FFFFFF;
  font-size: 16px;
  font-family: "Muli", sans-serif;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
  display: block;
  text-align: center;
  width: 249px;
`,StyledBackgroundCurve=Object(theme.b)("div").withConfig({displayName:"StyledBackgroundCurve"})`
  position: fixed;
  top: 0;
  left: -19px;
  width: 105%;
  height: 480px;
  background: #191A2E;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 140%;
`,StyleSubHeaderText=Object(theme.b)("div").withConfig({displayName:"StyleSubHeaderText"})`
  font-size: 16px;
  font-family: "Muli", sans-serif;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 28px;
  display: block;
  margin: 10px 0 0 5px;
`,StyledLetter=Object(theme.b)("div").withConfig({displayName:"StyledLetter"})`
  border: 6px solid #fff;
  border-radius: 50%;
  width: 102px;
  height: 102px;
  background: ${p=>p.logoBgColor||"#DE4D26"};
  overflow: hidden;
  margin: -12px 25px 0 0;
  color: #fff;
  text-align: center;
  line-height: 90px;
  font-size: 65px;
  text-transform: uppercase;
`,StyledLogoImage=Object(theme.b)("div").withConfig({displayName:"StyledLogoImage"})`
  width: 90px;
  height: 90px;
  background: url(${p=>p.bg}) no-repeat;
  background-size: cover;
`,StyledLogoWrapper=Object(theme.b)("div").withConfig({displayName:"StyledLogoWrapper"})`
  padding-right: 25px;
  flex-basis: 217px;
`,StyledLogoBorder=Object(theme.b)("div").withConfig({displayName:"StyledLogoBorder"})`
  border: 6px solid #fff;
  border-radius: 50%;
  width: 102px;
  height: 102px;
  margin-top: -12px;
  background: ${p=>p.bg||"#DE4D26"};
  overflow: hidden;
`,StyledMonthlyInfo=Object(theme.b)("div").withConfig({displayName:"StyledMonthlyInfo"})`
  color: #fff;
`,StyledDomainText=Object(theme.b)("span").withConfig({displayName:"StyledDomainText"})`
  display: block;
  font-size: 22px;
  margin: 10px 0 25px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 32px;
`,StyledDateText=Object(theme.b)("span").withConfig({displayName:"StyledDateText"})`
  display: block;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
`,StyledDate=Object(theme.b)("span").withConfig({displayName:"StyledDate"})`
  display: block;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
  color: ${p=>p.theme.color.brandBrave};
`,StyledTwitterShareButton=Object(theme.b)("button").withConfig({displayName:"StyledTwitterShareButton"})`
  box-sizing: border-box;
  background: #38A1F3;
  border: none;
  color: white;
  outline-color: transparent;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  font-family: Poppins, sans-serif;
  user-select: none;
  font-size: 13px;
  border-radius: 20px;
  width: auto;
  min-width: 100px;
  padding: 7px 10px;
`,StyledLogoIcon=Object(theme.b)("div").withConfig({displayName:"StyledLogoIcon"})`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`,StyledButtonWrapper=Object(theme.b)("div").withConfig({displayName:"StyledButtonWrapper"})`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;var helpers=__webpack_require__(3),paper_airplane=__webpack_require__(420),logo_twitter=__webpack_require__(406),close_circle_o=__webpack_require__(191);__webpack_require__.d(__webpack_exports__,"a",function(){return donationOverlay_DonationOverlay});class donationOverlay_DonationOverlay extends react.PureComponent{constructor(){super(...arguments),this.getOverlayContent=(()=>{const{success:success,send:send,siteImg:siteImg,logo:logo,domain:domain,logoBgColor:logoBgColor,amount:amount,monthlyDate:monthlyDate,onTweet:onTweet}=this.props;return react.createElement(StyledOverlayContent,null,success||send?react.createElement(StyledOverlayTop,null,react.createElement(StyledIconWrapper,{success:success},send?react.createElement(StyledIcon,null,react.createElement(paper_airplane.a,null)):null,!send&&siteImg?react.createElement(StyledProviderImage,{src:siteImg},react.createElement(StyledImageBorder,null)):null,send||siteImg||logo||!domain?null:react.createElement(StyledLetter,{logoBgColor:logoBgColor},domain&&domain.substring(0,1)||""),send||siteImg||!logo?null:react.createElement(StyledLogoWrapper,null,react.createElement(StyledLogoBorder,{bg:logoBgColor},react.createElement(StyledLogoImage,{bg:logo})))),react.createElement(StyledMessage,{success:success,monthly:amount},react.createElement(StyledHeaderText,null,send?Object(helpers.a)("donationSent"):null,success?react.createElement(react.Fragment,null,Object(helpers.a)("thankYou"),react.createElement(StyledMonthlyInfo,null,react.createElement(StyleSubHeaderText,null,monthlyDate?Object(helpers.a)("autoTipText"):Object(helpers.a)("tipText")),react.createElement(StyledDomainText,null,domain,react.createElement("br",null),amount," ",Object(helpers.a)("bat"),monthlyDate?`, ${Object(helpers.a)("monthlyText")}`:null),monthlyDate?react.createElement(react.Fragment,null,react.createElement(StyledDateText,null,Object(helpers.a)("firstTipDateText")),react.createElement(StyledDate,null,monthlyDate)):null),onTweet?react.createElement(react.Fragment,null,react.createElement(StyleSubHeaderText,null,Object(helpers.a)("tellOthers")),react.createElement(StyledButtonWrapper,null,react.createElement(StyledTwitterShareButton,{onClick:onTweet},Object(helpers.a)("tweetNow"),react.createElement(StyledLogoIcon,null,react.createElement(logo_twitter.a,null))))):null):null))):this.getFailureContent())})}getFailureContent(){return react.createElement(StyledFailWrapper,null,react.createElement(StyledCloseIcon,null,react.createElement(close_circle_o.a,{onClick:this.props.onClose})),react.createElement(StyledFailTitle,null,Object(helpers.a)("uhOh")),react.createElement(StyledFailMsg,null,Object(helpers.a)("donationFailureMsg")))}render(){const{id:id,send:send,onClose:onClose}=this.props;return react.createElement(StyledOuterWrapper,null,send?react.createElement(StyledBackgroundCurve,null):null,react.createElement(StyledWrapper,{id:id},react.createElement(StyledClose,{onClick:onClose},react.createElement(close_circle_o.a,null)),this.getOverlayContent()))}}},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),theme=__webpack_require__(1);const StyledWrapper=Object(theme.b)("div").withConfig({displayName:"StyledWrapper"})`
  background: #f2f4f7;
  min-height: 100vh;
  min-width: 1024px;
  font-family: ${p=>p.theme.fontFamily.body};
`,StyledContent=Object(theme.b)("div").withConfig({displayName:"StyledContent"})`
 max-width: 1024px;
 margin: 0 auto;
 padding: 48px 0;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return settingsPage_SettingsPage});class settingsPage_SettingsPage extends react.PureComponent{render(){const{id:id,children:children}=this.props;return react.createElement(StyledWrapper,{id:id},react.createElement(StyledContent,null,children))}}},function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),styled_components_browser_esm=__webpack_require__(2);const StyledButtonWrapper=Object(styled_components_browser_esm.default)("button").withConfig({displayName:"StyledButtonWrapper"})`
  width: 100%;
  display: flex;
  color: white;
  font-size: 14px;
  border-radius: 28px;
  background: inherit;
  border: none;
  cursor: ${p=>p.disabled?"default":"pointer"};
  ${p=>((type,disabled)=>{let typeCss=null;switch(type){case"tip":typeCss=styled_components_browser_esm.css`
        height: 40px;
        color: #4C54D2;
        border-radius: 20px;
        font-size: 12px;
        border: 1px solid #A1A8F2;
      `;break;case"opt-in":typeCss=styled_components_browser_esm.css`
        height: 56px;
        border-radius: 28px;
        letter-spacing: .6px;
        border: 1px solid rgba(255, 255, 255, 0.35);

        &:hover {
          background: ${p=>disabled?"inherit":"rgba(0, 0, 0, 0.05)"};
        }
      `;break;case"cta-opt-in":typeCss=styled_components_browser_esm.css`
        height: 56px;
        letter-spacing: .6px;
        background: ${p=>p.theme.color.brandBrave};

        &:hover {
          background: ${p=>disabled?p.theme.color.brandBrave:p.theme.brandBraveInteracting};
        }
      `}return typeCss})(p.type,p.disabled)}

  &:focus {
    outline: 0;
  }
`,StyledButtonText=Object(styled_components_browser_esm.default)("span").withConfig({displayName:"StyledButtonText"})`
  font-family: Poppins, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.39px;
  margin: ${p=>p.hasIcon?"-3px auto 0px":"0 auto"};
`,StyledIcon=Object(styled_components_browser_esm.default)("div").withConfig({displayName:"StyledIcon"})`
  display: inline-block;
  line-height: 0;
  height: 18px;
  width: 18px;
  vertical-align: bottom;
  margin: 0 -4px 0 6px;
`;__webpack_require__.d(__webpack_exports__,"a",function(){return rewardsButton_RewardsButton});class rewardsButton_RewardsButton extends react.PureComponent{render(){const{text:text,testId:testId,type:type,disabled:disabled,onClick:onClick,icon:icon}=this.props;return react.createElement(StyledButtonWrapper,{type:type,disabled:disabled,onClick:onClick,"data-test-id":testId},react.createElement(StyledButtonText,{hasIcon:!!icon},text,icon?react.createElement(StyledIcon,null,icon):null))}}}],[[511,1,2]]]);
//# sourceMappingURL=main.3926333531dc2f8c290a.bundle.js.map