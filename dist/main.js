(()=>{"use strict";var e={917:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}",""]);const d=i},426:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    background-color: #C1ECE4;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\nheader {\n    background-color: #FFD0D0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n    padding: 0 20px;\n}\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr 1fr;\n    width: 80vw;\n    background-color: #fff4f4;\n}\n\n#logo-div {\n    display: flex;\n    align-items: center;\n    color: #3AA6B9;\n    font-size: 50px;\n    font-weight: 700;\n}\n\n#icon {\n    filter: invert(75%) sepia(10%) saturate(2586%) hue-rotate(145deg) brightness(76%) contrast(87%);\n    width: 35px;\n    margin-left: 10px;\n}\n\n#add-task-header {\n    color: white;\n    background-color: #3AA6B9;\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    font-size: 40px;\n    border: none;\n}\n\n#menu-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.hidden-todo {\n    display: none;\n}\n\n.show-todo {\n    display: block;\n}\n\n.child-todo {\n    display: flex;\n}",""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var u=this[d][0];null!=u&&(i[u]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],d=0;d<e.length;d++){var u=e[d],s=r.base?u[0]+r.base:u[0],c=a[s]||0,l="".concat(s," ").concat(c);a[s]=c+1;var m=n(l),h={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=o(h,r);r.byIndex=d,t.splice(d,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var u=r(e,o),s=0;s<a.length;s++){var c=n(a[s]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),d=n(565),u=n.n(d),s=n(216),c=n.n(s),l=n(589),m=n.n(l),h=n(917),f={};f.styleTagTransform=m(),f.setAttributes=u(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=c(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var g=n(426),p={};p.styleTagTransform=m(),p.setAttributes=u(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=c(),t()(g.Z,p),g.Z&&g.Z.locals&&g.Z.locals;const v=n.p+"fc206c2b3a24c4ad59ac.svg";function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function b(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function y(e){b(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===w(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function C(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function T(e){b(1,arguments);var t=y(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function M(e){b(1,arguments);var t=y(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=T(r),a=new Date(0);a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0);var i=T(a);return t.getTime()>=o.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}var E={};function x(){return E}function k(e,t){var n,r,o,a,i,d,u,s;b(1,arguments);var c=x(),l=C(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.weekStartsOn)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==o?o:c.weekStartsOn)&&void 0!==r?r:null===(u=c.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=y(e),h=m.getUTCDay(),f=(h<l?7:0)+h-l;return m.setUTCDate(m.getUTCDate()-f),m.setUTCHours(0,0,0,0),m}function D(e,t){var n,r,o,a,i,d,u,s;b(1,arguments);var c=y(e),l=c.getUTCFullYear(),m=x(),h=C(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.firstWeekContainsDate)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(u=m.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(l+1,0,h),f.setUTCHours(0,0,0,0);var g=k(f,t),p=new Date(0);p.setUTCFullYear(l,0,h),p.setUTCHours(0,0,0,0);var v=k(p,t);return c.getTime()>=g.getTime()?l+1:c.getTime()>=v.getTime()?l:l-1}function j(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const S=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return j("yy"===t?r%100:r,t.length)},P=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):j(n+1,2)},U=function(e,t){return j(e.getUTCDate(),t.length)},L=function(e,t){return j(e.getUTCHours()%12||12,t.length)},N=function(e,t){return j(e.getUTCHours(),t.length)},W=function(e,t){return j(e.getUTCMinutes(),t.length)},q=function(e,t){return j(e.getUTCSeconds(),t.length)},Y=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return j(Math.floor(r*Math.pow(10,n-3)),t.length)};var O={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return S(e,t)},Y:function(e,t,n,r){var o=D(e,r),a=o>0?o:1-o;return"YY"===t?j(a%100,2):"Yo"===t?n.ordinalNumber(a,{unit:"year"}):j(a,t.length)},R:function(e,t){return j(M(e),t.length)},u:function(e,t){return j(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return j(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return j(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return P(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return j(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var o=function(e,t){b(1,arguments);var n=y(e),r=k(n,t).getTime()-function(e,t){var n,r,o,a,i,d,u,s;b(1,arguments);var c=x(),l=C(null!==(n=null!==(r=null!==(o=null!==(a=null==t?void 0:t.firstWeekContainsDate)&&void 0!==a?a:null==t||null===(i=t.locale)||void 0===i||null===(d=i.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==o?o:c.firstWeekContainsDate)&&void 0!==r?r:null===(u=c.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==n?n:1),m=D(e,t),h=new Date(0);return h.setUTCFullYear(m,0,l),h.setUTCHours(0,0,0,0),k(h,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(o,{unit:"week"}):j(o,t.length)},I:function(e,t,n){var r=function(e){b(1,arguments);var t=y(e),n=T(t).getTime()-function(e){b(1,arguments);var t=M(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),T(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):j(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):U(e,t)},D:function(e,t,n){var r=function(e){b(1,arguments);var t=y(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):j(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(a);case"ee":return j(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var o=e.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(a);case"cc":return j(a,t.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),o=0===r?7:r;switch(t){case"i":return String(o);case"ii":return j(o,t.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,o=e.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,o=e.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return L(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):N(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):j(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):W(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):q(e,t)},S:function(e,t){return Y(e,t)},X:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return B(o);case"XXXX":case"XX":return A(o);default:return A(o,":")}},x:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return B(o);case"xxxx":case"xx":return A(o);default:return A(o,":")}},O:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+H(o,":");default:return"GMT"+A(o,":")}},z:function(e,t,n,r){var o=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+H(o,":");default:return"GMT"+A(o,":")}},t:function(e,t,n,r){var o=r._originalDate||e;return j(Math.floor(o.getTime()/1e3),t.length)},T:function(e,t,n,r){return j((r._originalDate||e).getTime(),t.length)}};function H(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=t||"";return n+String(o)+i+j(a,2)}function B(e,t){return e%60==0?(e>0?"-":"+")+j(Math.abs(e)/60,2):A(e,t)}function A(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e);return r+j(Math.floor(o/60),2)+n+j(o%60,2)}const I=O;var F=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},z=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const Q={p:z,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return F(e,t);switch(o){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",F(o,t)).replace("{{time}}",z(a,t))}};var G=["D","DD"],R=["YY","YYYY"];function X(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var $={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Z(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const J={date:Z({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Z({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Z({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var _={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function V(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=e.formattingValues[a]||e.formattingValues[o]}else{var i=e.defaultWidth,d=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[d]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const K={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:V({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:V({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:V({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:V({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:V({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function ee(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],a=t.match(o);if(!a)return null;var i,d=a[0],u=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(u);return i=e.valueCallback?e.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(d.length)}}}var te,ne={ordinalNumber:(te={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(te.matchPattern);if(!n)return null;var r=n[0],o=e.match(te.parsePattern);if(!o)return null;var a=te.valueCallback?te.valueCallback(o[0]):o[0];return{value:a=t.valueCallback?t.valueCallback(a):a,rest:e.slice(r.length)}}),era:ee({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ee({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:ee({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ee({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ee({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const re={code:"en-US",formatDistance:function(e,t,n){var r,o=$[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:J,formatRelative:function(e,t,n,r){return _[e]},localize:K,match:ne,options:{weekStartsOn:0,firstWeekContainsDate:1}};var oe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ae=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,ie=/^'([^]*?)'?$/,de=/''/g,ue=/[a-zA-Z]/;function se(e,t,n){var r,o,a,i,d,u,s,c,l,m,h,f,g,p,v,T,M,E;b(2,arguments);var k=String(t),D=x(),j=null!==(r=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:D.locale)&&void 0!==r?r:re,S=C(null!==(a=null!==(i=null!==(d=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==d?d:D.firstWeekContainsDate)&&void 0!==i?i:null===(l=D.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==a?a:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=C(null!==(h=null!==(f=null!==(g=null!==(p=null==n?void 0:n.weekStartsOn)&&void 0!==p?p:null==n||null===(v=n.locale)||void 0===v||null===(T=v.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==g?g:D.weekStartsOn)&&void 0!==f?f:null===(M=D.locale)||void 0===M||null===(E=M.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==h?h:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw new RangeError("locale must contain localize property");if(!j.formatLong)throw new RangeError("locale must contain formatLong property");var U=y(e);if(!function(e){if(b(1,arguments),!function(e){return b(1,arguments),e instanceof Date||"object"===w(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=y(e);return!isNaN(Number(t))}(U))throw new RangeError("Invalid time value");var L=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(U),N=function(e,t){return b(2,arguments),function(e,t){b(2,arguments);var n=y(e).getTime(),r=C(t);return new Date(n+r)}(e,-C(t))}(U,L),W={firstWeekContainsDate:S,weekStartsOn:P,locale:j,_originalDate:U};return k.match(ae).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Q[t])(e,j.formatLong):e})).join("").match(oe).map((function(r){if("''"===r)return"'";var o,a,i=r[0];if("'"===i)return(a=(o=r).match(ie))?a[1].replace(de,"'"):o;var d,u=I[i];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(d=r,-1===R.indexOf(d))||X(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==G.indexOf(e)}(r)||X(r,t,String(e)),u(N,r,j.localize,W);if(i.match(ue))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}class ce{constructor(e,t,n,r,o,a){this.title=e,this.done=t,this.urgent=n,this.date=r,this.project=o,this.description=a}}const le={project:{"My Project":[new ce("Buy lemon juice",!1,!1,"2023-11-22","My Project","")]},setProject:function(e){e.project in this.project?this.project[e.project].push(e):this.project[e.project]=[e]}};function me(e,t){const n=document.createElement("p");!0===t.urgent&&(n.innerHTML="&#10071;"),n.id="child-todo-urgent";const r=document.createElement("p");r.innerHTML=t.title,r.id="child-todo-title";const o=document.createElement("p");o.innerHTML=t.date,o.id="child-todo-date";const a=document.createElement("input");a.setAttribute("type","checkbox"),a.setAttribute("name","done"),a.id="child-todo-done",a.addEventListener("click",(()=>{!0===a.checked?(r.style.textDecoration="line-through",o.style.textDecoration="line-through",n.style.textDecoration="line-through",t.done=!0,console.log(t.done)):(r.style.textDecoration="none",o.style.textDecoration="none",n.style.textDecoration="none",t.done=!1,console.log(t.done))})),e.appendChild(a),e.appendChild(n),e.appendChild(r),e.appendChild(o)}document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.getElementById("logo-div"),t=new Image;t.src=v,t.id="icon",e.appendChild(t)}(),function(){const e=document.getElementById("mainboard-div");for(let e in le.project){const t=document.getElementById("mainboard-div"),n=document.createElement("div");n.className="project-div",n.id=e.toLowerCase().split(" ").join("");const r=document.createElement("div");r.className="project-header";const o=document.createElement("p");o.classList="project-title",o.innerHTML=e;const a=document.createElement("button");a.classList="remove-project-button",a.innerHTML="✕",a.addEventListener("click",(()=>{confirm("Are you sure you want to delete this project?")&&(delete le.project[e],r.remove(),document.getElementById(`${e.toLowerCase().split(" ").join("")}-option`).remove(),console.log(le.project))})),r.appendChild(o),r.appendChild(a),n.appendChild(r);const i=document.createElement("div");i.id=`${e.toLowerCase().split(" ").join("")}-todos`,i.className="show-todo";for(let t of le.project[e]){const e=document.createElement("div");e.className="child-todo",me(e,t),i.appendChild(e)}n.appendChild(i),o.addEventListener("click",(()=>{"hidden-todo"===i.className?i.className="show-todo":i.className="hidden-todo"})),t.appendChild(n)}const t=document.createElement("div");t.id="add-project-div";const n=document.createElement("button");n.id="add-project-button",n.innerHTML="Add a project",n.addEventListener("click",(()=>{"none"===a.style.display?a.style.display="":a.style.display="none"}));const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("placeholder","Project Title"),r.autofocus=!0,r.id="add-project-input";const o=document.createElement("button");o.id="add-project-enter",o.innerHTML="Enter",o.addEventListener("click",(()=>{le.project[`${r.value}`]=[],r.value="",console.log(le.project)}));const a=document.createElement("div");a.appendChild(r),a.appendChild(o),a.style.display="none",t.appendChild(n),t.appendChild(a),e.appendChild(t)}(),function(){const e=document.getElementById("dialog");document.getElementById("close-button").addEventListener("click",(()=>{e.close()}));const t=document.getElementById("todo-date"),n=new Date;t.min=se(n,"yyyy-MM-dd");const r=document.getElementById("project");for(let e in le.project){const t=document.createElement("option");t.value=e,t.innerHTML=e,t.id=`${e.toLowerCase().split(" ").join("")}-option`,r.appendChild(t)}const o=document.createElement("option");o.innerHTML="Create a new project",o.value="new";const a=document.getElementById("new-project");r.addEventListener("change",(()=>{"new"===r.value?(a.required=!0,a.style.display=""):(a.required=!1,a.style.display="none")})),r.appendChild(o),document.getElementById("submit-button").addEventListener("click",(()=>{const n=document.getElementById("form");if(n.checkValidity()){let o=document.getElementById("todo-title").value,i=!1,d=document.getElementById("urgent").checked,u=t.value,s="";s="new"===r.value?a.value:r.value;let c=document.getElementById("description").value,l=new ce(o,i,d,u,s,c);if(le.setProject(l),"none"!==a.style.display){const e=document.createElement("option");e.innerHTML=s,e.value=s,e.id=`${s.toLowerCase().split(" ").join("")}-option`,project.insertBefore(e,r.lastChild);const t=document.getElementById("mainboard-div");t.insertBefore(function(e){const t=document.createElement("div");t.className="project-div",t.id=e.toLowerCase().split(" ").join("");const n=document.createElement("div");n.className="project-header";const r=document.createElement("p");r.classList="project-title",r.innerHTML=e;const o=document.createElement("button");o.classList="remove-project-button",o.innerHTML="✕",n.appendChild(r),n.appendChild(o),t.appendChild(n);const a=document.createElement("div");a.id=`${e.toLowerCase().split(" ").join("")}-todos`,a.className="show-todo";for(let t of le.project[e]){const e=document.createElement("div");e.className="child-todo",me(e,t),a.appendChild(e)}return t.appendChild(a),r.addEventListener("click",(()=>{"hidden-todo"===a.className?a.className="show-todo":a.className="hidden-todo"})),t}(s),t.firstChild)}else{const e=document.getElementById(`${s.toLowerCase().split(" ").join("")}-todos`),t=document.createElement("div");t.className="child-todo",me(t,l),e.appendChild(t)}a.required=!1,a.style.display="none",n.reset(),e.close()}else n.reportValidity()}))}(),function(){const e=document.getElementById("dialog");document.querySelectorAll(".add-button").forEach((t=>{t.addEventListener("click",(()=>{e.showModal()}))}))}()}))})()})();