(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{676:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}t.d(n,{Z:function(){return r}})},2961:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(676);function s(e,n){if(e){if("string"===typeof e)return(0,r.Z)(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,r.Z)(e,n):void 0}}},8169:function(e,n,t){"use strict";var r=t(5893),s=(t(7294),t(7077)),i=t.n(s),o=t(682),l=t(4051),c=t(1555),d=t(4129);n.Z=function(e){var n=e.component;return(0,r.jsx)("section",{children:(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{children:(0,r.jsx)(c.Z,{className:i().aboutHeader,children:(0,r.jsx)("h1",{children:n&&n.fields.header})})}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(c.Z,{md:12,lg:6,className:i().aboutText,children:n&&(0,d.h)(n.fields.richText)}),(0,r.jsx)(c.Z,{md:12,lg:6,className:i().aboutVideo,children:n&&(0,r.jsx)("iframe",{width:"340",height:"300",src:n.fields.details.media})})]})]})})}},8179:function(e,n,t){"use strict";var r=t(5893),s=t(1664),i=t(8949),o=t.n(i),l=(t(7294),t(682)),c=t(4051),d=t(1555);n.Z=function(e){var n=e.current;return(0,r.jsx)("div",{children:(0,r.jsxs)(l.Z,{fluid:!0,className:o().bcContainer,children:[(0,r.jsx)(c.Z,{children:(0,r.jsx)(d.Z,{sm:12,children:(0,r.jsx)("em",{className:o().bcHeader,children:n})})}),(0,r.jsx)(c.Z,{children:(0,r.jsxs)(d.Z,{sm:12,children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)("em",{className:o().bcElemActive,children:"Home"})})}),(0,r.jsx)("em",{className:o().bcElemInactive,children:" / "}),(0,r.jsx)("em",{className:o().bcElemInactive,children:n})]})})]})})}},6155:function(e,n,t){"use strict";var r=t(5893),s=t(7294),i=t(9008),o=t(8179),l=t(9285);n.Z=function(e){var n=e.header,t=e.title,c=e.ready,d=e.breadCrmb,a=void 0===d||d,u=(0,s.useState)(!0),h=u[0],x=u[1];return(0,s.useEffect)((function(){c&&x(!1)}),[c]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:t&&t}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:a&&(0,r.jsx)(o.Z,{current:n&&n})}),(0,r.jsx)("div",{id:"main",children:h&&(0,r.jsx)(l.Z,{})})]})}},3331:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var r=t(5893),s=t(7294),i=t(7823),o=t(9008),l=t(9578),c=t(8829),d=t(8146);var a=function(e,n){var t=(0,s.useRef)(!0);(0,s.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},u=t(2029),h=t(6454);function x(e){var n=function(e){var n=(0,s.useRef)(e);return n.current=e,n}(e);(0,s.useEffect)((function(){return function(){return n.current()}}),[])}var f=Math.pow(2,31)-1;function m(e,n,t){var r=t-Date.now();e.current=r<=f?setTimeout(n,r):setTimeout((function(){return m(e,n,t)}),f)}function j(){var e=(0,h.Z)(),n=(0,s.useRef)();return x((function(){return clearTimeout(n.current)})),(0,s.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,s){void 0===s&&(s=0),e()&&(t(),s<=f?n.current=setTimeout(r,s):m(n,r,Date.now()+s))},clear:t}}),[])}var v=t(4036),p=t.n(v),b=t(5422),y=t(5697),Z=t.n(y),g=t(2629),E=(0,t(4680).Z)("carousel-caption"),I=t(6792),_=["as","bsPrefix","children","className"],N=s.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,i=e.bsPrefix,o=e.children,d=e.className,a=(0,c.Z)(e,_),u=p()(d,(0,I.vE)(i,"carousel-item"));return s.createElement(r,(0,l.Z)({ref:n},a,{className:u}),o)}));N.displayName="CarouselItem";var C=N;function T(e,n){var t=0;return s.Children.map(e,(function(e){return s.isValidElement(e)?n(e,t++):e}))}var S=t(8358),F=t(492),w=t(4509),A=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],H={bsPrefix:Z().string,as:Z().elementType,slide:Z().bool,fade:Z().bool,controls:Z().bool,indicators:Z().bool,activeIndex:Z().number,onSelect:Z().func,onSlide:Z().func,onSlid:Z().func,interval:Z().number,keyboard:Z().bool,pause:Z().oneOf(["hover",!1]),wrap:Z().bool,touch:Z().bool,prevIcon:Z().node,prevLabel:Z().string,nextIcon:Z().node,nextLabel:Z().string},R={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:s.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:s.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function k(e,n){var t=(0,g.Ch)(e,{activeIndex:"onSelect"}),r=t.as,i=void 0===r?"div":r,o=t.bsPrefix,h=t.slide,x=t.fade,f=t.controls,m=t.indicators,v=t.activeIndex,y=t.onSelect,Z=t.onSlide,E=t.onSlid,_=t.interval,N=t.keyboard,C=t.onKeyDown,H=t.pause,R=t.onMouseOver,k=t.onMouseOut,B=t.wrap,O=t.touch,L=t.onTouchStart,M=t.onTouchMove,W=t.onTouchEnd,G=t.prevIcon,P=t.prevLabel,z=t.nextIcon,D=t.nextLabel,V=t.className,Y=t.children,J=(0,c.Z)(t,A),X=(0,I.vE)(o,"carousel"),U=(0,s.useRef)(null),K=(0,s.useState)("next"),Q=K[0],$=K[1],q=(0,s.useState)(!1),ee=q[0],ne=q[1],te=(0,s.useState)(!1),re=te[0],se=te[1],ie=(0,s.useState)(v||0),oe=ie[0],le=ie[1];re||v===oe||(U.current?$(U.current):$((v||0)>oe?"next":"prev"),h&&se(!0),le(v||0)),(0,s.useEffect)((function(){U.current&&(U.current=null)}));var ce,de=0;!function(e,n){var t=0;s.Children.forEach(e,(function(e){s.isValidElement(e)&&n(e,t++)}))}(Y,(function(e,n){++de,n===v&&(ce=e.props.interval)}));var ae=(0,u.Z)(ce),ue=(0,s.useCallback)((function(e){if(!re){var n=oe-1;if(n<0){if(!B)return;n=de-1}U.current="prev",y&&y(n,e)}}),[re,oe,y,B,de]),he=(0,d.Z)((function(e){if(!re){var n=oe+1;if(n>=de){if(!B)return;n=0}U.current="next",y&&y(n,e)}})),xe=(0,s.useRef)();(0,s.useImperativeHandle)(n,(function(){return{element:xe.current,prev:ue,next:he}}));var fe=(0,d.Z)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(xe.current)&&he()})),me="next"===Q?"left":"right";a((function(){h||(Z&&Z(oe,me),E&&E(oe,me))}),[oe]);var je=X+"-item-"+Q,ve=X+"-item-"+me,pe=(0,s.useCallback)((function(e){(0,w.Z)(e),Z&&Z(oe,me)}),[Z,oe,me]),be=(0,s.useCallback)((function(){se(!1),E&&E(oe,me)}),[E,oe,me]),ye=(0,s.useCallback)((function(e){if(N&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ue(e);case"ArrowRight":return e.preventDefault(),void he(e)}C&&C(e)}),[N,C,ue,he]),Ze=(0,s.useCallback)((function(e){"hover"===H&&ne(!0),R&&R(e)}),[H,R]),ge=(0,s.useCallback)((function(e){ne(!1),k&&k(e)}),[k]),Ee=(0,s.useRef)(0),Ie=(0,s.useRef)(0),_e=j(),Ne=(0,s.useCallback)((function(e){Ee.current=e.touches[0].clientX,Ie.current=0,"hover"===H&&ne(!0),L&&L(e)}),[H,L]),Ce=(0,s.useCallback)((function(e){e.touches&&e.touches.length>1?Ie.current=0:Ie.current=e.touches[0].clientX-Ee.current,M&&M(e)}),[M]),Te=(0,s.useCallback)((function(e){if(O){var n=Ie.current;Math.abs(n)>40&&(n>0?ue(e):he(e))}"hover"===H&&_e.set((function(){ne(!1)}),_||void 0),W&&W(e)}),[O,H,ue,he,_e,_,W]),Se=null!=_&&!ee&&!re,Fe=(0,s.useRef)();(0,s.useEffect)((function(){var e,n;if(Se)return Fe.current=window.setInterval(document.visibilityState?fe:he,null!=(e=null!=(n=ae.current)?n:_)?e:void 0),function(){null!==Fe.current&&clearInterval(Fe.current)}}),[Se,he,ae,_,fe]);var we=(0,s.useMemo)((function(){return m&&Array.from({length:de},(function(e,n){return function(e){y&&y(n,e)}}))}),[m,de,y]);return s.createElement(i,(0,l.Z)({ref:xe},J,{onKeyDown:ye,onMouseOver:Ze,onMouseOut:ge,onTouchStart:Ne,onTouchMove:Ce,onTouchEnd:Te,className:p()(V,X,h&&"slide",x&&X+"-fade")}),m&&s.createElement("ol",{className:X+"-indicators"},T(Y,(function(e,n){return s.createElement("li",{key:n,className:n===oe?"active":void 0,onClick:we?we[n]:void 0})}))),s.createElement("div",{className:X+"-inner"},T(Y,(function(e,n){var t=n===oe;return h?s.createElement(b.ZP,{in:t,onEnter:t?pe:void 0,onEntered:t?be:void 0,addEndListener:F.Z},(function(n){return s.cloneElement(e,{className:p()(e.props.className,t&&"entered"!==n&&je,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&ve)})})):s.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))),f&&s.createElement(s.Fragment,null,(B||0!==v)&&s.createElement(S.Z,{className:X+"-control-prev",onClick:ue},G,P&&s.createElement("span",{className:"sr-only"},P)),(B||v!==de-1)&&s.createElement(S.Z,{className:X+"-control-next",onClick:he},z,D&&s.createElement("span",{className:"sr-only"},D))))}var B=s.forwardRef(k);B.displayName="Carousel",B.propTypes=H,B.defaultProps=R,B.Caption=E,B.Item=C;var O=B,L=t(682),M=t(1330),W=t(4051),G=t(1555),P=t(5005),z=t(5323),D=t.n(z),V=t(8169),Y=t(6155),J=t(7625),X=t(1436),U=t(2442);var K=t(2961);function Q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,s=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(c){s=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(s)throw i}}return t}}(e,n)||(0,K.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=(e,{root:n,rootMargin:t,threshold:r}={},i=[])=>{const o=(0,s.useRef)(null),l=(0,s.useRef)(null);return(0,s.useCallback)((s=>{o.current&&l.current&&(l.current.unobserve(o.current),l.current.disconnect(),l.current=null),s&&(l.current=new IntersectionObserver(e,{root:n,rootMargin:t,threshold:r}),l.current.observe(s),o.current=s)}),[o,n,t,r,...i])};var q=({root:e,rootMargin:n,threshold:t,unobserveOnEnter:r,target:i,onEnter:o,onLeave:l}={},c=[])=>{const[d,a]=(0,s.useState)({inView:!1,entry:null,observer:null}),u=(0,s.useCallback)((([e],n)=>{const t=n.thresholds.some((n=>e.intersectionRatio>=n))&&e.isIntersecting;a({inView:t,entry:e,observer:n}),t&&r&&(n.unobserve(e.target),n.disconnect()),t?null===o||void 0===o||o(e,n):null===l||void 0===l||l(e,n)}),[o,l,r]),h=$(u,{root:e,rootMargin:n,threshold:t},[r,...c]);return(0,s.useEffect)((()=>{(null===i||void 0===i?void 0:i.current)&&h(i.current)}),[i,h]),[h,d.inView,d.entry,d.observer]},ee=function(e){var n=e.start,t=e.end,i=e.increment,o=void 0===i?5:i,l=e.times,c=void 0===l?5:l,d=e.interval,a=void 0===d?2e3:d,u=e.className,h=parseInt(n),x=parseInt(t),f=parseInt(a),m=parseInt(o),j=(0,s.useState)(0),v=j[0],p=j[1],b=Q(q({threshold:.5}),2),y=b[0],Z=b[1],g=(0,s.useState)(0),E=g[0],I=g[1];return(0,s.useEffect)((function(){if(I((function(e){return e+1})),Z&&E<=c)var e=setInterval((function(){(h+=m)===x&&clearInterval(e),p(h)}),f)}),[Z]),(0,r.jsx)("div",{ref:y,className:u,children:v})};function ne(){var e=(0,s.useState)(),n=e[0],t=e[1],l=(0,s.useState)(!0),c=l[0],d=l[1];return(0,s.useEffect)((function(){(0,i.fx)("HomePage").then((function(e){t(e)})).then((function(){return d(!1)}))}),[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:n&&n.header}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)(Y.Z,{ready:!c,title:"Sahid Rajeev Gandhi High School, Sunapur, Koraput",breadCrmb:!1}),(0,r.jsxs)("section",{children:[(0,r.jsxs)("section",{id:"highlights",children:[(0,r.jsx)("section",{id:"highImage",children:n&&(0,r.jsx)(L.Z,{fluid:!0,className:D().zeroPad,children:(0,r.jsx)(O,{interval:1800,children:n.sections[0].fields.components.map((function(e){return(0,r.jsxs)(O.Item,{children:[(0,r.jsx)(M.Z,{src:e.fields.medias[0].fields.file.url,className:D().sliderImg}),(0,r.jsxs)(O.Caption,{children:[(0,r.jsx)("h3",{style:{display:"none"},children:e.fields.header}),(0,r.jsx)("h5",{style:{display:"block"},children:e.fields.bodyText})]})]},e.fields.id)}))})})}),(0,r.jsx)("section",{id:"highText",className:D().highText,children:(0,r.jsx)(L.Z,{className:D().htItemsContainer,children:(0,r.jsx)(W.Z,{className:D().highTextRow,style:{textAlign:"right"},children:n&&n.sections[1].fields.components.map((function(e){return(0,r.jsx)(G.Z,{xs:12,sm:12,md:4,className:D().highTextItem,children:(0,r.jsxs)(U.Z,{className:e.fields.details.bgColorClass,style:{backgroundColor:e.fields.details.bgColor,color:"#E4F1F2"},children:[(0,r.jsxs)(U.Z.Icon,{children:["TEACHERS"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.FVb,size:"2x"}),"ONLINE"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.aNY,size:"2x"}),"FACILITIES"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.P88,size:"2x"})]}),(0,r.jsx)(U.Z.Title,{children:e.fields.title}),(0,r.jsx)(U.Z.Body,{style:{color:"#ECF1F2"},children:e.fields.bodyText})]})},e.fields.id)}))})})})]}),(0,r.jsx)("section",{id:"about",className:D().about,children:n&&(0,r.jsx)(V.Z,{component:n.sections[2].fields.components[0]})}),(0,r.jsx)("section",{id:"features",children:(0,r.jsxs)(L.Z,{children:[(0,r.jsx)(W.Z,{children:(0,r.jsxs)(G.Z,{children:[(0,r.jsx)("h1",{children:n&&n.sections[3].fields.header}),(0,r.jsx)("p",{children:n&&n.sections[3].fields.bodyText})]})}),(0,r.jsx)(W.Z,{children:n&&n.sections[3].fields.components.map((function(e){return(0,r.jsx)(G.Z,{sm:12,md:6,style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{className:D().ftrCard,children:[(0,r.jsxs)(U.Z.Icon,{style:{color:"#33E2FF"},children:["COURSES"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.FL8,size:"3x",style:{color:"#33E2FF",padding:"8px",border:"1px solid"}}),"TEACHERS"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.FVb,size:"3x",style:{color:"#33E2FF",padding:"8px",border:"1px solid"}}),"ONLINE"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.aNY,size:"3x",style:{color:"#33E2FF",padding:"8px",border:"1px solid"}}),"EXTRACURRICULAR"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.Xig,size:"3x",style:{color:"#33E2FF",padding:"8px",border:"1px solid"}}),"FUN"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.dy,size:"3x",style:{color:"#33E2FF",padding:"8px",border:"1px solid"}}),"FACILITIES"===e.fields.details.ftrId&&(0,r.jsx)(J.G,{icon:X.P88,size:"3x",style:{color:"#33E2FF",padding:"8px",border:"1px solid"}})]}),(0,r.jsx)(U.Z.Title,{style:{color:"#000000"},children:e.fields.header}),(0,r.jsx)(U.Z.Body,{style:{color:"#000000"},children:e.fields.bodyText}),(0,r.jsx)(U.Z.Ref,{href:"/gallery",children:(0,r.jsx)(P.Z,{variant:"outline-primary",children:"Read More"})})]})},e.fields.id)}))})]})}),(0,r.jsx)("section",{id:"stats",children:(0,r.jsx)(L.Z,{fluid:!0,className:D().countersContainer,children:(0,r.jsxs)(W.Z,{children:[(0,r.jsx)(G.Z,{sm:12,md:3,children:(0,r.jsxs)(U.Z,{children:[(0,r.jsx)(U.Z.Icon,{children:(0,r.jsx)(J.G,{icon:X.vNB,size:"sm"})}),(0,r.jsx)(U.Z.Body,{children:(0,r.jsx)(ee,{start:0,end:50,increment:2,interval:60,className:D().counter})}),(0,r.jsx)(U.Z.Title,{children:"ACRES(+) SPACE"})]})}),(0,r.jsx)(G.Z,{sm:12,md:3,children:(0,r.jsxs)(U.Z,{children:[(0,r.jsx)(U.Z.Icon,{children:(0,r.jsx)(J.G,{icon:X.FL8,size:"sm"})}),(0,r.jsx)(U.Z.Body,{children:(0,r.jsx)(ee,{start:0,end:400,increment:10,interval:50,className:D().counter})}),(0,r.jsx)(U.Z.Title,{children:"BOOKS(+) LIBRARY"})]})}),(0,r.jsx)(G.Z,{sm:12,md:3,children:(0,r.jsxs)(U.Z,{children:[(0,r.jsx)(U.Z.Icon,{children:(0,r.jsx)(J.G,{icon:X.FVb,size:"sm"})}),(0,r.jsx)(U.Z.Body,{children:(0,r.jsx)(ee,{start:0,end:1100,increment:25,interval:45,className:D().counter})}),(0,r.jsx)(U.Z.Title,{children:"MEMBERS(+) ALUMNI"})]})}),(0,r.jsx)(G.Z,{sm:12,md:3,children:(0,r.jsxs)(U.Z,{children:[(0,r.jsx)(U.Z.Icon,{children:(0,r.jsx)(J.G,{icon:X.QRb,size:"sm"})}),(0,r.jsx)(U.Z.Body,{children:(0,r.jsx)(ee,{start:0,end:25,increment:1,interval:100,className:D().counter})}),(0,r.jsx)(U.Z.Title,{children:"YEARS(+) OPERATION"})]})})]})})}),(0,r.jsx)("section",{id:"teachers",className:D().teachers,children:(0,r.jsxs)(L.Z,{children:[(0,r.jsx)(W.Z,{children:(0,r.jsxs)(G.Z,{children:[(0,r.jsx)("h1",{children:n&&n.sections[6].fields.header}),(0,r.jsx)("p",{children:n&&n.sections[6].fields.bodyText})]})}),(0,r.jsx)(W.Z,{children:n&&n.sections[6].fields.components.map((function(e){return(0,r.jsx)(G.Z,{style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{style:{textAlign:"center"},children:[(0,r.jsx)(U.Z.Icon,{style:{color:"#1395AB"},children:(0,r.jsx)(M.Z,{rounded:!0,src:e.fields.medias[0].fields.file.url,width:"220",height:"290"})}),(0,r.jsx)(U.Z.Title,{style:{color:"#000000"},children:e.fields.header}),(0,r.jsx)(U.Z.SubTitle,{style:{color:"#5F6A6D"},children:e.fields.title}),(0,r.jsx)(U.Z.Body,{style:{color:"#000000"},children:e.fields.bodyText})]})},e.fields.id)}))})]})}),(0,r.jsx)("section",{id:"testimonials",className:D().highImage,children:(0,r.jsx)(L.Z,{fluid:!0,children:(0,r.jsx)(O,{interval:1500,children:n&&n.sections[7].fields.components.map((function(e){return(0,r.jsx)(O.Item,{style:{backgroundColor:"black"},children:(0,r.jsx)(G.Z,{sm:12,md:12,style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{style:{textAlign:"center",backgroundColor:"#000000"},children:[(0,r.jsxs)(U.Z.Body,{style:{color:"#FFFFFF",backgroundColor:"#444848",padding:"3% 5% 2% 5%",borderRadius:"5px"},children:[e.fields.bodyText,(0,r.jsx)("div",{style:{height:"75px"}})]}),(0,r.jsx)(U.Z.Icon,{style:{color:"#1395AB",position:"relative"},children:(0,r.jsx)("div",{style:{position:"absolute",left:"0",right:"0",top:"-60px"},children:(0,r.jsx)(M.Z,{src:"/img/teachers/teacher-01.png",roundedCircle:!0,width:"150px",height:"150px"})})}),(0,r.jsxs)(U.Z.Title,{style:{color:"#FFFFFF"},children:[(0,r.jsx)("div",{style:{height:"80px"}}),e.fields.header]}),(0,r.jsx)(U.Z.SubTitle,{style:{color:"#10DDEE"},children:e.fields.title})]})},e.fields.id)},e.fields.id)}))})})}),(0,r.jsx)("section",{id:"blogs",style:{display:"none"},children:(0,r.jsx)(L.Z,{children:(0,r.jsxs)(W.Z,{style:{padding:"0px"},children:[(0,r.jsx)(G.Z,{sm:12,md:4,style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{style:{backgroundColor:"#37CFE9",textAlign:"center"},children:[(0,r.jsx)(U.Z.Icon,{children:(0,r.jsx)(J.G,{icon:X.FL8,size:"2x"})}),(0,r.jsx)(U.Z.Title,{children:"Hello World!!"}),(0,r.jsx)(U.Z.Body,{children:"Welcome to the Jungle!! We Stay Here. You Would love it here!!"})]})}),(0,r.jsx)(G.Z,{sm:12,md:4,style:{padding:"0px",textAlign:"center"},children:(0,r.jsxs)(U.Z,{style:{backgroundColor:"#32AB07"},children:[(0,r.jsx)(U.Z.Icon,{children:(0,r.jsx)(J.G,{icon:X.FL8,size:"2x"})}),(0,r.jsx)(U.Z.Title,{children:"Hello World!!"}),(0,r.jsx)(U.Z.Body,{children:"Welcome to the Jungle!! We Stay Here. You Would love it here!!"})]})}),(0,r.jsx)(G.Z,{sm:12,md:4,style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{className:D().ftrCard,children:[(0,r.jsx)(U.Z.Icon,{style:{color:"#1395AB"},children:(0,r.jsx)(J.G,{icon:X.FL8,size:"2x",style:{color:"#1395AB"}})}),(0,r.jsxs)(U.Z.Title,{style:{color:"#000000"},children:[(0,r.jsx)("u",{children:"Professional"})," Courses"]}),(0,r.jsx)(U.Z.Body,{style:{color:"#000000"},children:"Welcome to the Jungle!! We Stay Here. You Would love it here!!"}),(0,r.jsx)(U.Z.Ref,{href:"/",children:(0,r.jsx)(P.Z,{variant:"outline-primary",children:"Read More"})})]})}),(0,r.jsx)(G.Z,{sm:12,md:4,style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{style:{textAlign:"left"},children:[(0,r.jsx)(U.Z.Icon,{style:{color:"#1395AB"},children:(0,r.jsx)(M.Z,{src:"/img/teachers/teacher-01.png"})}),(0,r.jsx)(U.Z.Title,{style:{color:"#000000"},children:"JOHN DOE"}),(0,r.jsx)(U.Z.SubTitle,{style:{color:"#000000"},children:"Maths Teacher"}),(0,r.jsx)(U.Z.Body,{style:{color:"#000000"},children:"Welcome to the Jungle!! We Stay Here. You Would love it here!!"})]})}),(0,r.jsx)(G.Z,{sm:12,md:12,style:{padding:"0px"},children:(0,r.jsxs)(U.Z,{style:{textAlign:"center",backgroundColor:"#000000"},children:[(0,r.jsxs)(U.Z.Body,{style:{color:"#FFFFFF",backgroundColor:"#444848",padding:"10% 5% 15% 5%",borderRadius:"5px"},children:["Welcome to the Jungle!! We Stay Here. You Would love it here!! Welcome to the Jungle!! We Stay Here. You Would love it here!! Welcome to the Jungle!! We Stay Here. You Would love it here!!",(0,r.jsx)("div",{style:{height:"75px"}})]}),(0,r.jsx)(U.Z.Icon,{style:{color:"#1395AB",position:"relative"},children:(0,r.jsx)("div",{style:{position:"absolute",left:"0",right:"0",top:"-75px"},children:(0,r.jsx)(M.Z,{src:"/img/teachers/teacher-01.png",roundedCircle:!0,width:"150",height:"150"})})}),(0,r.jsx)(U.Z.Title,{style:{color:"#FFFFFF",marginTop:"20%"},children:"JOHN DOE"}),(0,r.jsx)(U.Z.SubTitle,{style:{color:"#10DDEE"},children:"Ex-Student"})]})})]})})})]})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3331)}])},7077:function(e){e.exports={emptyCol:"About_emptyCol__2wE-M",aboutHeader:"About_aboutHeader__1GMGz",aboutText:"About_aboutText__nuyZ0",aboutVideo:"About_aboutVideo__32cL5"}},8949:function(e){e.exports={bcContainer:"BreadcrumbNav_bcContainer__1Gfg_",bcHeader:"BreadcrumbNav_bcHeader__2mlOk",bcElemActive:"BreadcrumbNav_bcElemActive__1C5fQ",bcElemInactive:"BreadcrumbNav_bcElemInactive__siZYT"}},5323:function(e){e.exports={zeroPad:"Home_zeroPad___BLE8",highlights:"Home_highlights__uZseT",highImage:"Home_highImage__SadWr",sliderImg:"Home_sliderImg__e13O6",highText:"Home_highText__2bI28",htItemsContainer:"Home_htItemsContainer__2kJA3",highTextRow:"Home_highTextRow__yIXP4",highTextItem:"Home_highTextItem__1wfb6",aboutHeader:"Home_aboutHeader__FQkwG",about:"Home_about__3PaLB",aboutText:"Home_aboutText__1xD2Q",aboutVideo:"Home_aboutVideo__24OjQ",countersContainer:"Home_countersContainer__3eoWU",counter:"Home_counter__-9O5H",ftrCard:"Home_ftrCard__3XJGA"}}},function(e){e.O(0,[154,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);