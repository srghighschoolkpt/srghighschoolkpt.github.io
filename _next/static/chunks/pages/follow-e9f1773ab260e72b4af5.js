(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[693],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),i=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},5671:function(e,t){var r,n,o;n=[],void 0===(o="function"===typeof(r=function(){var e=function(){},t={},r={},n={};function o(e,t){e=e.push?e:[e];var o,a,i,c=[],u=e.length,s=u;for(o=function(e,r){r.length&&c.push(e),--s||t(c)};u--;)a=e[u],(i=r[a])?o(a,i):(n[a]=n[a]||[]).push(o)}function a(e,t){if(e){var o=n[e];if(r[e]=t,o)for(;o.length;)o[0](e,t),o.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function c(t,r,n,o){var a,i,u=document,s=n.async,f=(n.numRetries||0)+1,l=n.before||e,d=t.replace(/[\?|#].*$/,""),p=t.replace(/^(css|img)!/,"");o=o||0,/(^css!|\.css$)/.test(d)?((i=u.createElement("link")).rel="stylesheet",i.href=p,(a="hideFocus"in i)&&i.relList&&(a=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(i=u.createElement("img")).src=p:((i=u.createElement("script")).src=t,i.async=void 0===s||s),i.onload=i.onerror=i.onbeforeload=function(e){var u=e.type[0];if(a)try{i.sheet.cssText.length||(u="e")}catch(s){18!=s.code&&(u="e")}if("e"==u){if((o+=1)<f)return c(t,r,n,o)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";r(t,u,e.defaultPrevented)},!1!==l(t,i)&&u.head.appendChild(i)}function u(e,t,r){var n,o,a=(e=e.push?e:[e]).length,i=a,u=[];for(n=function(e,r,n){if("e"==r&&u.push(e),"b"==r){if(!n)return;u.push(e)}--a||t(u)},o=0;o<i;o++)c(e[o],n,r)}function s(e,r,n){var o,c;if(r&&r.trim&&(o=r),c=(o?n:r)||{},o){if(o in t)throw"LoadJS";t[o]=!0}function s(t,r){u(e,(function(e){i(c,e),t&&i({success:t,error:r},e),a(o,e)}),c)}if(c.returnPromise)return new Promise(s);s()}return s.ready=function(e,t){return o(e,(function(e){i(t,e)})),s},s.done=function(e){a(e,[])},s.reset=function(){t={},r={},n={}},s.isDefined=function(e){return e in t},s})?r.apply(t,n):r)||(e.exports=o)},8179:function(e,t,r){"use strict";var n=r(5893),o=r(1664),a=r(8949),i=r.n(a),c=(r(7294),r(682)),u=r(4051),s=r(1555);t.Z=function(e){var t=e.current;return(0,n.jsx)("div",{children:(0,n.jsxs)(c.Z,{fluid:!0,className:i().bcContainer,children:[(0,n.jsx)(u.Z,{children:(0,n.jsx)(s.Z,{sm:12,children:(0,n.jsx)("em",{className:i().bcHeader,children:t})})}),(0,n.jsx)(u.Z,{children:(0,n.jsxs)(s.Z,{sm:12,children:[(0,n.jsx)(o.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("em",{className:i().bcElemActive,children:"Home"})})}),(0,n.jsx)("em",{className:i().bcElemInactive,children:" / "}),(0,n.jsx)("em",{className:i().bcElemInactive,children:t})]})})]})})}},6155:function(e,t,r){"use strict";var n=r(5893),o=r(7294),a=r(9008),i=r(8179),c=r(9285);t.Z=function(e){var t=e.children,r=e.header,u=e.title,s=e.ready,f=e.breadCrmb,l=void 0===f||f,d=(0,o.useState)(!0),p=d[0],h=d[1];return(0,o.useEffect)((function(){s&&h(!1)}),[s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:u&&u}),t]}),(0,n.jsx)("header",{children:l&&(0,n.jsx)(i.Z,{current:r&&r})}),(0,n.jsx)("div",{id:"main",children:p&&(0,n.jsx)(c.Z,{})})]})}},3367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},7947:function(e,t,r){"use strict";var n=r(9713);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(7294)),c=(a=r(617))&&a.__esModule?a:{default:a},u=r(3367),s=r(4287),f=r(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var f=h[u];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var l=o.props[f],d=n[f]||new Set;"name"===f&&i||!d.has(l)?(d.add(l),n[f]=d):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function m(e){var t=e.children,r=(0,i.useContext)(u.AmpStateContext),n=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)}m.rewind=function(){};var y=m;t.default=y},617:function(e,t,r){"use strict";var n=r(319),o=r(4575),a=r(3913),i=(r(1506),r(2205)),c=r(8585),u=r(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(7294),l=function(e){i(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=l},7890:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var n=r(5893),o=r(6156),a=r(7294),i=r(7757),c=r.n(i),u=r(5671),s=r.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var l="twttr",d=l,p=!("undefined"===typeof window||!window.document||!window.document.createElement);function h(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function v(e){var t=(0,a.useRef)();return function(e,t){if(h(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!h(e[r[o]],t[r[o]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function m(e){return"object"===typeof e?f({},e):e}function y(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}p&&s()("https://platform.twitter.com/widgets.js",d);var b="twdiv";function w(e,t,r,n){var o=(0,a.useState)(null),i=o[0],u=o[1],f=(0,a.useRef)(null);if(!p)return{ref:f,error:i};var l=[e,v(t),v(r)];return(0,a.useEffect)((function(){u(null);var o,a,i=!1;if(f.current){var l=function(){var o,a=(o=c().mark((function o(){var a,l;return c().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(f&&f.current){o.next=2;break}return o.abrupt("return");case 2:return(a=document.createElement("div")).setAttribute(b,"yes"),f.current.appendChild(a),o.prev=5,o.next=8,new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};s().ready(d,{success:function(){var t=window.twttr;t&&t.widgets||r(),e(t.widgets)},error:r})}));case 8:return l=o.sent,o.next=11,l[e](m(t),a,m(r));case 11:if(o.sent||i){o.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:o.next=21;break;case 16:return o.prev=16,o.t0=o.catch(5),console.error(o.t0),u(o.t0),o.abrupt("return");case 21:if(f&&f.current){o.next=23;break}return o.abrupt("return");case 23:if(!i){o.next=26;break}return a&&a.remove(),o.abrupt("return");case 26:n&&n();case 27:case"end":return o.stop()}}),o,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function i(e){y(a,r,n,i,c,"next",e)}function c(e){y(a,r,n,i,c,"throw",e)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();o=f.current,a=b,o&&o.querySelectorAll("*").forEach((function(e){e.hasAttribute(a)&&e.remove()})),l()}return function(){i=!0}}),l),{ref:f,error:i}}var g=function(e){var t=e.dataSource,r=e.options,n=e.onLoad,o=e.renderError,i=w("createTimeline",t,r,n),c=i.ref,u=i.error;return a.createElement("div",{ref:c},u&&o&&o(u))},j=r(6155),x=r(7823);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(){var e=(0,a.useState)(),t=e[0],r=e[1],o=(0,a.useState)(!0),i=o[0],c=o[1];return(0,a.useEffect)((function(){(0,x.fx)("FollowusPage").then((function(e){r(e)}))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(j.Z,{ready:!i,title:t&&t.title,header:t&&t.header,children:[(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{name:"description",content:t&&t.metaDescription}),(0,n.jsx)("meta",{name:"keywords",content:t&&t.metaKeywords})]}),(0,n.jsx)("section",{children:t&&(0,n.jsx)(g,{dataSource:_({},t&&t.sections[0].fields.components[0].fields.details),onLoad:function(){return c(!1)}})})]})}},1374:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/follow",function(){return r(7890)}])},8949:function(e){e.exports={bcContainer:"BreadcrumbNav_bcContainer__1Gfg_",bcHeader:"BreadcrumbNav_bcHeader__2mlOk",bcElemActive:"BreadcrumbNav_bcElemActive__1C5fQ",bcElemInactive:"BreadcrumbNav_bcElemInactive__siZYT"}},9008:function(e,t,r){e.exports=r(7947)}},function(e){e.O(0,[774,888,179],(function(){return t=1374,e(e.s=t);var t}));var t=e.O();_N_E=t}]);