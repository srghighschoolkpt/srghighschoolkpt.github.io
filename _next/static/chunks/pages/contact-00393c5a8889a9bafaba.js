(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3646:function(e,t,r){var a=r(7228);e.exports=function(e){if(Array.isArray(e))return a(e)}},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,r){var a=r(3646),n=r(6860),i=r(379),o=r(8206);e.exports=function(e){return a(e)||n(e)||i(e)||o()}},8179:function(e,t,r){"use strict";var a=r(5893),n=r(1664),i=r(8949),o=r.n(i),s=(r(7294),r(682)),l=r(4051),c=r(1555);t.Z=function(e){var t=e.current;return(0,a.jsx)("div",{children:(0,a.jsxs)(s.Z,{fluid:!0,className:o().bcContainer,children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)(c.Z,{sm:12,children:(0,a.jsx)("em",{className:o().bcHeader,children:t})})}),(0,a.jsx)(l.Z,{children:(0,a.jsxs)(c.Z,{sm:12,children:[(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{children:(0,a.jsx)("em",{className:o().bcElemActive,children:"Home"})})}),(0,a.jsx)("em",{className:o().bcElemInactive,children:" / "}),(0,a.jsx)("em",{className:o().bcElemInactive,children:t})]})})]})})}},3367:function(e,t,r){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var n=((a=r(7294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=n},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(n.default.useContext(i.AmpStateContext))};var a,n=(a=r(7294))&&a.__esModule?a:{default:a},i=r(3367);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,a=e.hybrid,n=void 0!==a&&a,i=e.hasQuery,o=void 0!==i&&i;return r||n&&o}},7947:function(e,t,r){"use strict";var a=r(9713);function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var i,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=a?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(r,n,i):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r(7294)),s=(i=r(617))&&i.__esModule?i:{default:i},l=r(3367),c=r(4287),d=r(7845);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function m(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(m,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,a={};return function(n){var i=!0,o=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){o=!0;var s=n.key.slice(n.key.indexOf("$")+1);e.has(s)?i=!1:e.add(s)}switch(n.type){case"title":case"base":t.has(n.type)?i=!1:t.add(n.type);break;case"meta":for(var l=0,c=p.length;l<c;l++){var d=p[l];if(n.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?i=!1:r.add(d);else{var u=n.props[d],f=a[d]||new Set;"name"===d&&o||!f.has(u)?(f.add(u),a[d]=f):i=!1}}}return i}}()).reverse().map((function(e,r){var i=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:i})}))}function h(e){var t=e.children,r=(0,o.useContext)(l.AmpStateContext),a=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:v,headManager:a,inAmpMode:(0,d.isInAmpMode)(r)},t)}h.rewind=function(){};var b=h;t.default=b},617:function(e,t,r){"use strict";var a=r(319),n=r(4575),i=r(3913),o=(r(1506),r(2205)),s=r(8585),l=r(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=l(e);if(t){var n=l(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return s(this,r)}}t.__esModule=!0,t.default=void 0;var d=r(7294),u=function(e){o(r,e);var t=c(r);function r(e){var i;return n(this,r),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(a(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=u},4854:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return le}});var a=r(5893),n=r(7294),i=r(9008),o=r(9578),s=r(8829),l=r(4036),c=r.n(l),d=(r(4391),r(5697)),u=r.n(d),f=["as","className","type","tooltip"],m={type:u().string,tooltip:u().bool,as:u().elementType},p=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"div":r,i=e.className,l=e.type,d=void 0===l?"valid":l,u=e.tooltip,m=void 0!==u&&u,p=(0,s.Z)(e,f);return n.createElement(a,(0,o.Z)({},p,{ref:t,className:c()(i,d+"-"+(m?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=m;var v=p,h=n.createContext({controlId:void 0}),b=r(6792),x=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=n.forwardRef((function(e,t){var r=e.id,a=e.bsPrefix,i=e.bsCustomPrefix,l=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,m=void 0!==f&&f,p=e.isInvalid,v=void 0!==p&&p,y=e.isStatic,j=e.as,C=void 0===j?"input":j,N=(0,s.Z)(e,x),E=(0,n.useContext)(h),P=E.controlId,w=E.custom?[i,"custom-control-input"]:[a,"form-check-input"],g=w[0],_=w[1];return a=(0,b.vE)(g,_),n.createElement(C,(0,o.Z)({},N,{ref:t,type:u,id:r||P,className:c()(l,a,m&&"is-valid",v&&"is-invalid",y&&"position-static")}))}));y.displayName="FormCheckInput";var j=y,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],N=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.bsCustomPrefix,i=e.className,l=e.htmlFor,d=(0,s.Z)(e,C),u=(0,n.useContext)(h),f=u.controlId,m=u.custom?[a,"custom-control-label"]:[r,"form-check-label"],p=m[0],v=m[1];return r=(0,b.vE)(p,v),n.createElement("label",(0,o.Z)({},d,{ref:t,htmlFor:l||f,className:c()(i,r)}))}));N.displayName="FormCheckLabel";var E=N,P=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],w=n.forwardRef((function(e,t){var r=e.id,a=e.bsPrefix,i=e.bsCustomPrefix,l=e.inline,d=void 0!==l&&l,u=e.disabled,f=void 0!==u&&u,m=e.isValid,p=void 0!==m&&m,x=e.isInvalid,y=void 0!==x&&x,C=e.feedbackTooltip,N=void 0!==C&&C,w=e.feedback,g=e.className,_=e.style,Z=e.title,I=void 0===Z?"":Z,k=e.type,O=void 0===k?"checkbox":k,F=e.label,M=e.children,S=e.custom,A=e.as,H=void 0===A?"input":A,R=(0,s.Z)(e,P),T="switch"===O||S,G=T?[i,"custom-control"]:[a,"form-check"],L=G[0],V=G[1];a=(0,b.vE)(L,V);var D=(0,n.useContext)(h).controlId,B=(0,n.useMemo)((function(){return{controlId:r||D,custom:T}}),[D,T,r]),z=T||null!=F&&!1!==F&&!M,U=n.createElement(j,(0,o.Z)({},R,{type:"switch"===O?"checkbox":O,ref:t,isValid:p,isInvalid:y,isStatic:!z,disabled:f,as:H}));return n.createElement(h.Provider,{value:B},n.createElement("div",{style:_,className:c()(g,a,T&&"custom-"+O,d&&a+"-inline")},M||n.createElement(n.Fragment,null,U,z&&n.createElement(E,{title:I},F),(p||y)&&n.createElement(v,{type:p?"valid":"invalid",tooltip:N},w))))}));w.displayName="FormCheck",w.Input=j,w.Label=E;var g=w,_=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],Z=n.forwardRef((function(e,t){var r=e.id,a=e.bsPrefix,i=e.bsCustomPrefix,l=e.className,d=e.isValid,u=e.isInvalid,f=e.lang,m=e.as,p=void 0===m?"input":m,v=(0,s.Z)(e,_),x=(0,n.useContext)(h),y=x.controlId,j=x.custom?[i,"custom-file-input"]:[a,"form-control-file"],C=j[0],N=j[1];return a=(0,b.vE)(C,N),n.createElement(p,(0,o.Z)({},v,{ref:t,id:r||y,type:"file",lang:f,className:c()(l,a,d&&"is-valid",u&&"is-invalid")}))}));Z.displayName="FormFileInput";var I=Z,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.bsCustomPrefix,i=e.className,l=e.htmlFor,d=(0,s.Z)(e,k),u=(0,n.useContext)(h),f=u.controlId,m=u.custom?[a,"custom-file-label"]:[r,"form-file-label"],p=m[0],v=m[1];return r=(0,b.vE)(p,v),n.createElement("label",(0,o.Z)({},d,{ref:t,htmlFor:l||f,className:c()(i,r),"data-browse":d["data-browse"]}))}));O.displayName="FormFileLabel";var F=O,M=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],S=n.forwardRef((function(e,t){var r=e.id,a=e.bsPrefix,i=e.bsCustomPrefix,l=e.disabled,d=void 0!==l&&l,u=e.isValid,f=void 0!==u&&u,m=e.isInvalid,p=void 0!==m&&m,x=e.feedbackTooltip,y=void 0!==x&&x,j=e.feedback,C=e.className,N=e.style,E=e.label,P=e.children,w=e.custom,g=e.lang,_=e["data-browse"],Z=e.as,k=void 0===Z?"div":Z,O=e.inputAs,S=void 0===O?"input":O,A=(0,s.Z)(e,M),H=w?[i,"custom"]:[a,"form-file"],R=H[0],T=H[1];a=(0,b.vE)(R,T);var G=(0,n.useContext)(h).controlId,L=(0,n.useMemo)((function(){return{controlId:r||G,custom:w}}),[G,w,r]),V=null!=E&&!1!==E&&!P,D=n.createElement(I,(0,o.Z)({},A,{ref:t,isValid:f,isInvalid:p,disabled:d,as:S,lang:g}));return n.createElement(h.Provider,{value:L},n.createElement(k,{style:N,className:c()(C,a,w&&"custom-file")},P||n.createElement(n.Fragment,null,w?n.createElement(n.Fragment,null,D,V&&n.createElement(F,{"data-browse":_},E)):n.createElement(n.Fragment,null,V&&n.createElement(F,null,E),D),(f||p)&&n.createElement(v,{type:f?"valid":"invalid",tooltip:y},j))))}));S.displayName="FormFile",S.Input=I,S.Label=F;var A=S,H=(r(2473),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=n.forwardRef((function(e,t){var r,a,i=e.bsPrefix,l=e.bsCustomPrefix,d=e.type,u=e.size,f=e.htmlSize,m=e.id,p=e.className,v=e.isValid,x=void 0!==v&&v,y=e.isInvalid,j=void 0!==y&&y,C=e.plaintext,N=e.readOnly,E=e.custom,P=e.as,w=void 0===P?"input":P,g=(0,s.Z)(e,H),_=(0,n.useContext)(h).controlId,Z=E?[l,"custom"]:[i,"form-control"],I=Z[0],k=Z[1];if(i=(0,b.vE)(I,k),C)(a={})[i+"-plaintext"]=!0,r=a;else if("file"===d){var O;(O={})[i+"-file"]=!0,r=O}else if("range"===d){var F;(F={})[i+"-range"]=!0,r=F}else if("select"===w&&E){var M;(M={})[i+"-select"]=!0,M[i+"-select-"+u]=u,r=M}else{var S;(S={})[i]=!0,S[i+"-"+u]=u,r=S}return n.createElement(w,(0,o.Z)({},g,{type:d,size:f,ref:t,readOnly:N,id:m||_,className:c()(p,r,x&&"is-valid",j&&"is-invalid")}))}));R.displayName="FormControl";var T=Object.assign(R,{Feedback:v}),G=["bsPrefix","className","children","controlId","as"],L=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,i=e.children,l=e.controlId,d=e.as,u=void 0===d?"div":d,f=(0,s.Z)(e,G);r=(0,b.vE)(r,"form-group");var m=(0,n.useMemo)((function(){return{controlId:l}}),[l]);return n.createElement(h.Provider,{value:m},n.createElement(u,(0,o.Z)({},f,{ref:t,className:c()(a,r)}),i))}));L.displayName="FormGroup";var V=L,D=r(1555),B=["as","bsPrefix","column","srOnly","className","htmlFor"],z=n.forwardRef((function(e,t){var r=e.as,a=void 0===r?"label":r,i=e.bsPrefix,l=e.column,d=e.srOnly,u=e.className,f=e.htmlFor,m=(0,s.Z)(e,B),p=(0,n.useContext)(h).controlId;i=(0,b.vE)(i,"form-label");var v="col-form-label";"string"===typeof l&&(v=v+" "+v+"-"+l);var x=c()(u,i,d&&"sr-only",l&&v);return f=f||p,l?n.createElement(D.Z,(0,o.Z)({ref:t,as:"label",className:x,htmlFor:f},m)):n.createElement(a,(0,o.Z)({ref:t,className:x,htmlFor:f},m))}));z.displayName="FormLabel",z.defaultProps={column:!1,srOnly:!1};var U=z,W=["bsPrefix","className","as","muted"],Q=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,i=e.as,l=void 0===i?"small":i,d=e.muted,u=(0,s.Z)(e,W);return r=(0,b.vE)(r,"form-text"),n.createElement(l,(0,o.Z)({},u,{ref:t,className:c()(a,r,d&&"text-muted")}))}));Q.displayName="FormText";var K=Q,X=n.forwardRef((function(e,t){return n.createElement(g,(0,o.Z)({},e,{ref:t,type:"switch"}))}));X.displayName="Switch",X.Input=g.Input,X.Label=g.Label;var Y=X,$=r(4680),q=["bsPrefix","inline","className","validated","as"],J=(0,$.Z)("form-row"),ee=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.inline,i=e.className,l=e.validated,d=e.as,u=void 0===d?"form":d,f=(0,s.Z)(e,q);return r=(0,b.vE)(r,"form"),n.createElement(u,(0,o.Z)({},f,{ref:t,className:c()(i,l&&"was-validated",a&&r+"-inline")}))}));ee.displayName="Form",ee.defaultProps={inline:!1},ee.Row=J,ee.Group=V,ee.Control=T,ee.Check=g,ee.File=A,ee.Switch=Y,ee.Label=U,ee.Text=K;var te=ee,re=r(682),ae=r(4051),ne=r(5005),ie=r(8179),oe=r(5385),se=r.n(oe),le=function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(i.default,{children:[(0,a.jsx)("title",{children:"Contact :: SRG High School"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,a.jsx)("header",{children:(0,a.jsx)(ie.Z,{current:"Contact Us"})}),(0,a.jsxs)("section",{className:se().contactPage,children:[(0,a.jsx)("section",{className:se().cpHeader,children:(0,a.jsxs)(re.Z,{children:[(0,a.jsx)(ae.Z,{children:(0,a.jsx)(D.Z,{children:(0,a.jsx)("em",{className:se().cpHeaderText,children:"GET IN TOUCH"})})}),(0,a.jsx)(ae.Z,{children:(0,a.jsx)(D.Z,{children:(0,a.jsx)("p",{className:se().cpHeaderBodyText,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores ut laboriosam corporis doloribus, officia, accusamus illo nam tempore totam alias!"})})})]})}),(0,a.jsx)("section",{className:se().cpForm,children:(0,a.jsx)(re.Z,{children:(0,a.jsxs)(ae.Z,{children:[(0,a.jsx)(D.Z,{sm:12,md:6,children:(0,a.jsxs)(te,{children:[(0,a.jsx)(te.Row,{children:(0,a.jsxs)(te.Group,{as:D.Z,controlId:"formGridEmail",children:[(0,a.jsx)(te.Label,{children:(0,a.jsx)("em",{children:"Email"})}),(0,a.jsx)(te.Control,{type:"email",placeholder:"Enter email"})]})}),(0,a.jsxs)(te.Group,{controlId:"formGridAddress1",children:[(0,a.jsx)(te.Label,{children:"Address"}),(0,a.jsx)(te.Control,{placeholder:"1234 Main St"})]}),(0,a.jsxs)(te.Group,{controlId:"formGridAddress2",children:[(0,a.jsx)(te.Label,{children:"Address 2"}),(0,a.jsx)(te.Control,{placeholder:"Apartment, studio, or floor"})]}),(0,a.jsxs)(te.Row,{children:[(0,a.jsxs)(te.Group,{as:D.Z,controlId:"formGridCity",children:[(0,a.jsx)(te.Label,{children:"City"}),(0,a.jsx)(te.Control,{})]}),(0,a.jsxs)(te.Group,{as:D.Z,controlId:"formGridState",children:[(0,a.jsx)(te.Label,{children:"State"}),(0,a.jsxs)(te.Control,{as:"select",defaultValue:"Choose...",children:[(0,a.jsx)("option",{children:"Choose..."}),(0,a.jsx)("option",{children:"..."})]})]}),(0,a.jsxs)(te.Group,{as:D.Z,controlId:"formGridZip",children:[(0,a.jsx)(te.Label,{children:"Zip"}),(0,a.jsx)(te.Control,{})]})]}),(0,a.jsx)(te.Group,{id:"formGridCheckbox",children:(0,a.jsx)(te.Check,{type:"checkbox",label:"Check me out"})}),(0,a.jsx)(ne.Z,{variant:"primary",type:"submit",children:"Submit"})]})}),(0,a.jsx)(D.Z,{})]})})})]})]})}},3269:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(4854)}])},8949:function(e){e.exports={bcContainer:"BreadcrumbNav_bcContainer__1Gfg_",bcHeader:"BreadcrumbNav_bcHeader__2mlOk",bcElemActive:"BreadcrumbNav_bcElemActive__1C5fQ",bcElemInactive:"BreadcrumbNav_bcElemInactive__siZYT"}},5385:function(e){e.exports={contactPage:"Contact_contactPage__PKpRU",cpHeader:"Contact_cpHeader__pbEc9",cpHeaderText:"Contact_cpHeaderText__2QwYW",cpHeaderBodyText:"Contact_cpHeaderBodyText__3FKZH"}},9008:function(e,t,r){e.exports=r(7947)}},function(e){e.O(0,[774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);