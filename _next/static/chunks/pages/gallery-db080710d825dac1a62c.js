(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},676:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},2961:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(676);function i(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var r=n(3646),i=n(6860),a=n(379),o=n(8206);e.exports=function(e){return r(e)||i(e)||a(e)||o()}},8179:function(e,t,n){"use strict";var r=n(5893),i=n(1664),a=n(8949),o=n.n(a),c=(n(7294),n(682)),s=n(4051),u=n(1555);t.Z=function(e){var t=e.current;return(0,r.jsx)("div",{children:(0,r.jsxs)(c.Z,{fluid:!0,className:o().bcContainer,children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(u.Z,{sm:12,children:(0,r.jsx)("em",{className:o().bcHeader,children:t})})}),(0,r.jsx)(s.Z,{children:(0,r.jsxs)(u.Z,{sm:12,children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("em",{className:o().bcElemActive,children:"Home"})})}),(0,r.jsx)("em",{className:o().bcElemInactive,children:" / "}),(0,r.jsx)("em",{className:o().bcElemInactive,children:t})]})})]})})}},9467:function(e,t,n){"use strict";var r=n(5893),i=(n(7294),n(682)),a=n(4051),o=n(1555),c=n(1330),s=n(4467),u=n.n(s),l=n(961);n(8546),n(8587);t.Z=function(e){var t=e.photos;return(0,r.jsx)("div",{children:(0,r.jsx)(i.Z,{fluid:!0,children:(0,r.jsx)(l.Gallery,{children:(0,r.jsx)(a.Z,{children:t&&t.map((function(e){return(0,r.jsx)(o.Z,{className:u().itemBox,style:{textAlign:"center"},children:(0,r.jsx)(l.Item,{original:e.src,thumbnail:e.src,width:e.width,height:e.height,children:function(t){var n=t.ref,i=t.open;return(0,r.jsx)("div",{className:u().imgWrapper,children:(0,r.jsx)(c.Z,{ref:n,onClick:i,src:e.src,className:u().item})})}},e.title)},e.title)}))})})})})}},6155:function(e,t,n){"use strict";var r=n(5893),i=n(7294),a=n(9008),o=n(8179),c=n(9285);t.Z=function(e){var t=e.children,n=e.header,s=e.title,u=e.ready,l=e.breadCrmb,d=void 0===l||l,f=(0,i.useState)(!0),p=f[0],h=f[1];return(0,i.useEffect)((function(){u&&h(!1)}),[u]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:s&&s}),t]}),(0,r.jsx)("header",{children:d&&(0,r.jsx)(o.Z,{current:n&&n})}),(0,r.jsx)("div",{id:"main",children:p&&(0,r.jsx)(c.Z,{})})]})}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(i.default.useContext(a.AmpStateContext))};var r,i=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,a=e.hasQuery,o=void 0!==a&&a;return n||i&&o}},7947:function(e,t,n){"use strict";var r=n(9713);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var a=r?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(617))&&a.__esModule?a:{default:a},s=n(3367),u=n(4287),l=n(7845);function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var a=!0,o=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){o=!0;var c=i.key.slice(i.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(i.type){case"title":case"base":t.has(i.type)?a=!1:t.add(i.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var d=i.props[l],f=r[l]||new Set;"name"===l&&o||!f.has(d)?(f.add(d),r[l]=f):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(e,c)}return o.default.cloneElement(e,{key:a})}))}function y(e){var t=e.children,n=(0,o.useContext)(s.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}y.rewind=function(){};var v=y;t.default=v},617:function(e,t,n){"use strict";var r=n(319),i=n(4575),a=n(3913),o=(n(1506),n(2205)),c=n(8585),s=n(9754);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),d=function(e){o(n,e);var t=u(n);function n(e){var a;return i(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},5466:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=n(7294),a=n(682),o=n(4051),c=n(1555),s=n(676);var u=n(2961);function l(e){return function(e){if(Array.isArray(e))return(0,s.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,u.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(5005),f=(n(961),n(8546),n(8587),n(9467)),p=function(e){var t=e.images,n=(0,i.useState)([]),s=n[0],u=n[1],p=(0,i.useState)([]),h=p[0],m=p[1];(0,i.useEffect)((function(){u((function(e){return t}))}),[t]),(0,i.useEffect)((function(){var e=t.map((function(e){return e.category})),n=Array.from(new Set(l(e))).map((function(e){return{category:e,innerRef:i.createRef(),variant:"warning"}})),r=[{category:"All",innerRef:i.createRef(),variant:"primary"}].concat(l(n));m(r,console.log(h))}),[t]);var y=function(e){console.log(e.target.innerText),console.log(h),h.filter((function(t){return t.category===e.target.innerText}))[0].innerRef.current.className="btn btn-primary",h.filter((function(t){return t.category!=e.target.innerText})).map((function(e){return e.innerRef.current.className="btn btn-warning"})),u((function(n){return"All"===e.target.innerText?t:t.filter((function(t){return t.category===e.target.innerText}))}))};return(0,r.jsxs)("div",{id:"galleria-comp",children:[(0,r.jsx)("section",{id:"galleria-header",children:(0,r.jsx)(a.Z,{style:{textAlign:"center"},children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c.Z,{sm:2}),(0,r.jsx)(c.Z,{children:h.map((function(e){return(0,r.jsx)(d.Z,{ref:e.innerRef,variant:e.variant,onClick:y,style:{margin:"10px 5px"},children:e.category},e.category)}))}),(0,r.jsx)(c.Z,{sm:2})]})})}),(0,r.jsx)("section",{id:"galleria-body",children:(0,r.jsx)(a.Z,{style:{textAlign:"center"},children:(0,r.jsx)(f.Z,{photos:s})})})]})},h=n(7823),m=n(6155),y=function(){var e=(0,i.useState)(),t=e[0],n=e[1],s=(0,i.useState)([]),u=s[0],l=s[1],d=(0,i.useState)(!0),f=d[0],y=d[1];return(0,i.useEffect)((function(){(0,h.e9)({content_type:"page",id:"GalleryPage"}).then((function(e){var t=e.sections[0].fields.components[0].fields.medias.map((function(e){return{title:e.fields.title,src:e.fields.file.url,width:e.fields.file.details.image.width,height:e.fields.file.details.image.height,category:e.metadata.tags[0].sys.id,tags:e.metadata.tags}}));l(t),n(e)})).then((function(){return y(!1)}))}),[]),(0,r.jsxs)("div",{id:"gallery-page",children:[(0,r.jsxs)(m.Z,{ready:!f,title:"Gallery :: SRG High School, Koraput",header:"Gallery",children:[(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"description",content:t&&t.metaDescription}),(0,r.jsx)("meta",{name:"keywords",content:t&&t.metaKeywords})]}),(0,r.jsx)("section",{id:"gallery-head",children:(0,r.jsx)(a.Z,{style:{textAlign:"center"},fluid:!0,children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c.Z,{sm:2}),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h3",{children:t&&t.sections[0].fields.header}),(0,r.jsx)("p",{children:t&&t.sections[0].fields.bodyText})]}),(0,r.jsx)(c.Z,{sm:2})]})})}),(0,r.jsx)("section",{id:"gallery-main",children:(0,r.jsx)(a.Z,{fluid:!0,children:(0,r.jsx)(o.Z,{children:(0,r.jsx)(c.Z,{style:{textAlign:"center"},children:u&&(0,r.jsx)(p,{images:u})})})})})]})}},7899:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return n(5466)}])},8949:function(e){e.exports={bcContainer:"BreadcrumbNav_bcContainer__1Gfg_",bcHeader:"BreadcrumbNav_bcHeader__2mlOk",bcElemActive:"BreadcrumbNav_bcElemActive__1C5fQ",bcElemInactive:"BreadcrumbNav_bcElemInactive__siZYT"}},4467:function(e){e.exports={itemBox:"Galleria_itemBox__3iV3O",imgWrapper:"Galleria_imgWrapper__2hIxC",item:"Galleria_item__SGJpU"}},9008:function(e,t,n){e.exports=n(7947)},1330:function(e,t,n){"use strict";var r=n(9578),i=n(8829),a=n(4036),o=n.n(a),c=n(7294),s=n(5697),u=n.n(s),l=n(6792),d=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],f=(u().string,u().bool,u().bool,u().bool,u().bool,c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,s=e.fluid,u=e.rounded,f=e.roundedCircle,p=e.thumbnail,h=(0,i.Z)(e,d);n=(0,l.vE)(n,"img");var m=o()(s&&n+"-fluid",u&&"rounded",f&&"rounded-circle",p&&n+"-thumbnail");return c.createElement("img",(0,r.Z)({ref:t},h,{className:o()(a,m)}))})));f.displayName="Image",f.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.Z=f}},function(e){e.O(0,[201,774,888,179],(function(){return t=7899,e(e.s=t);var t}));var t=e.O();_N_E=t}]);