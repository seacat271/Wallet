"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[681],{8182:function(e,t,n){function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},5462:function(){},5985:function(e,t,n){n.d(t,{Am:function(){return Q},Ix:function(){return M}});var o=n(4942),a=n(885),r=n(1413),i=n(5987),s=n(2982),c=n(2791),u=n(8182),l=["theme","type"],d=["delay","staleId"];function f(e){return"number"===typeof e&&!isNaN(e)}function p(e){return"boolean"===typeof e}function m(e){return"string"===typeof e}function v(e){return"function"===typeof e}function g(e){return m(e)||v(e)?e:null}function y(e){return null!=e}function h(e){return(0,c.isValidElement)(e)||m(e)||v(e)||f(e)}var T={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},E={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function b(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,r=e.collapse,i=void 0===r||r,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,r=e.position,u=e.preventExitTransition,d=e.done,f=e.nodeRef,p=e.isIn,m=a?t+"--"+r:t,v=a?n+"--"+r:n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e=f.current,t=m.split(" "),n=function n(o){var a;o.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,s.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,s.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all "+n+"ms",requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,d,l):d()};p||(u?t():(g.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var Z={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,s.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},_=function(e){var t=e.theme,n=e.type,o=(0,i.Z)(e,l);return c.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))};var I={info:function(e){return c.createElement(_,(0,r.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(_,(0,r.Z)({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(_,(0,r.Z)({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(_,(0,r.Z)({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,r=null,i={theme:t,type:n};return!1===a||(v(a)?r=a(i):(0,c.isValidElement)(a)?r=(0,c.cloneElement)(a,i):m(a)||f(a)?r=a:o?r=I.spinner():function(e){return e in I}(n)&&(r=I[n](i))),r}function O(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,c.useState)([]),r=(0,a.Z)(o,2),u=r[0],l=r[1],T=(0,c.useRef)(null),E=(0,c.useRef)(new Map).current,b=function(e){return-1!==u.indexOf(e)},_=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:b,getToast:function(e){return E.get(e)}}).current;function I(e){var t=e.containerId;!_.props.limit||t&&_.containerId!==t||(_.count-=_.queue.length,_.queue=[])}function O(e){l((function(t){return y(e)?t.filter((function(t){return t!==e})):[]}))}function R(){var e=_.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function N(e,t){var o=t.delay,a=t.staleId,r=(0,i.Z)(t,d);if(h(e)&&!function(e){return!T.current||_.props.enableMultiContainer&&e.containerId!==_.props.containerId||E.has(e.toastId)&&null==e.updateId}(r)){var s=r.toastId,u=r.updateId,l=r.data,b=_.props,I=function(){return O(s)},N=null==u;N&&_.count++;var k,w,x={toastId:s,updateId:u,data:l,containerId:r.containerId,isLoading:r.isLoading,theme:r.theme||b.theme,icon:null!=r.icon?r.icon:b.icon,isIn:!1,key:r.key||_.toastKey++,type:r.type,closeToast:I,closeButton:r.closeButton,rtl:b.rtl,position:r.position||b.position,transition:r.transition||b.transition,className:g(r.className||b.toastClassName),bodyClassName:g(r.bodyClassName||b.bodyClassName),style:r.style||b.toastStyle,bodyStyle:r.bodyStyle||b.bodyStyle,onClick:r.onClick||b.onClick,pauseOnHover:p(r.pauseOnHover)?r.pauseOnHover:b.pauseOnHover,pauseOnFocusLoss:p(r.pauseOnFocusLoss)?r.pauseOnFocusLoss:b.pauseOnFocusLoss,draggable:p(r.draggable)?r.draggable:b.draggable,draggablePercent:r.draggablePercent||b.draggablePercent,draggableDirection:r.draggableDirection||b.draggableDirection,closeOnClick:p(r.closeOnClick)?r.closeOnClick:b.closeOnClick,progressClassName:g(r.progressClassName||b.progressClassName),progressStyle:r.progressStyle||b.progressStyle,autoClose:!r.isLoading&&(k=r.autoClose,w=b.autoClose,!1===k||f(k)&&k>0?k:w),hideProgressBar:p(r.hideProgressBar)?r.hideProgressBar:b.hideProgressBar,progress:r.progress,role:r.role||b.role,deleteToast:function(){var e=C(E.get(s),"removed");E.delete(s),Z.emit(4,e);var t=_.queue.length;if(_.count=y(s)?_.count-1:_.count-_.displayedToast,_.count<0&&(_.count=0),t>0){var o=y(s)?1:_.props.limit;if(1===t||1===o)_.displayedToast++,R();else{var a=o>t?t:o;_.displayedToast=a;for(var r=0;r<a;r++)R()}}else n()}};x.iconOut=L(x),v(r.onOpen)&&(x.onOpen=r.onOpen),v(r.onClose)&&(x.onClose=r.onClose),x.closeButton=b.closeButton,!1===r.closeButton||h(r.closeButton)?x.closeButton=r.closeButton:!0===r.closeButton&&(x.closeButton=!h(b.closeButton)||b.closeButton);var B=e;(0,c.isValidElement)(e)&&!m(e.type)?B=(0,c.cloneElement)(e,{closeToast:I,toastProps:x,data:l}):v(e)&&(B=e({closeToast:I,toastProps:x,data:l})),b.limit&&b.limit>0&&_.count>b.limit&&N?_.queue.push({toastContent:B,toastProps:x,staleId:a}):f(o)?setTimeout((function(){P(B,x,a)}),o):P(B,x,a)}}function P(e,t,n){var o=t.toastId;n&&E.delete(n);var a={content:e,props:t};E.set(o,a),l((function(e){return[].concat((0,s.Z)(e),[o]).filter((function(e){return e!==n}))})),Z.emit(4,C(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return _.containerId=e.containerId,Z.cancelEmit(3).on(0,N).on(1,(function(e){return T.current&&O(e)})).on(5,I).emit(2,_),function(){E.clear(),Z.emit(3,_)}}),[]),(0,c.useEffect)((function(){_.props=e,_.isToastActive=b,_.displayedToast=u.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(E.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:T,isToastActive:b}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),o=n[0],r=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],d=(0,c.useRef)(null),f=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,g=e.pauseOnHover,y=e.closeToast,h=e.onClick,T=e.closeOnClick;function E(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=R(t.nativeEvent),f.y=N(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,a=t.left,r=t.right;e.pauseOnHover&&f.x>=a&&f.x<=r&&f.y>=n&&f.y<=o?Z():C()}}function C(){r(!0)}function Z(){r(!1)}function _(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&Z(),f.x=R(t),f.y=N(t),"x"===e.draggableDirection?f.delta=f.x-f.start:f.delta=f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),v(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;v(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||Z();window.addEventListener("focus",C),window.addEventListener("blur",Z)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",Z))}}),[e.pauseOnFocusLoss]);var L={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&g&&(L.onMouseEnter=Z,L.onMouseLeave=C),T&&(L.onClick=function(e){h&&h(e),f.canCloseOnClick&&y()}),{playToast:C,pauseToast:Z,isRunning:o,preventExitTransition:u,toastRef:d,eventHandlers:L}}function k(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){var t=e.delay,n=e.isRunning,a=e.closeToast,i=e.type,s=e.hide,l=e.className,d=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,g=e.isIn,y=e.theme,h=(0,r.Z)((0,r.Z)({},d),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:s?0:1});f&&(h.transform="scaleX("+p+")");var T=(0,u.Z)("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+y,"Toastify__progress-bar--"+i,(0,o.Z)({},"Toastify__progress-bar--rtl",m)),E=v(l)?l({rtl:m,type:i,defaultClassName:T}):(0,u.Z)(T,l),b=(0,o.Z)({},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){g&&a()});return c.createElement("div",(0,r.Z)({role:"progressbar","aria-hidden":s?"true":"false","aria-label":"notification timer",className:E,style:h},b))}w.defaultProps={type:E.DEFAULT,hide:!1};var x=function(e){var t=P(e),n=t.isRunning,a=t.preventExitTransition,i=t.toastRef,s=t.eventHandlers,l=e.closeButton,d=e.children,f=e.autoClose,p=e.onClick,m=e.type,g=e.hideProgressBar,y=e.closeToast,h=e.transition,T=e.position,E=e.className,b=e.style,C=e.bodyClassName,Z=e.bodyStyle,_=e.progressClassName,I=e.progressStyle,L=e.updateId,O=e.role,R=e.progress,N=e.rtl,x=e.toastId,B=e.deleteToast,M=e.isIn,A=e.isLoading,D=e.iconOut,S=e.theme,F=(0,u.Z)("Toastify__toast","Toastify__toast-theme--"+S,"Toastify__toast--"+m,(0,o.Z)({},"Toastify__toast--rtl",N)),z=v(E)?E({rtl:N,position:T,type:m,defaultClassName:F}):(0,u.Z)(F,E),H=!!R,q={closeToast:y,type:m,theme:S},U=null;return!1===l||(U=v(l)?l(q):c.isValidElement(l)?c.cloneElement(l,q):k(q)),c.createElement(h,{isIn:M,done:B,position:T,preventExitTransition:a,nodeRef:i},c.createElement("div",(0,r.Z)((0,r.Z)({id:x,onClick:p,className:z},s),{},{style:b,ref:i}),c.createElement("div",(0,r.Z)((0,r.Z)({},M&&{role:O}),{},{className:v(C)?C({type:m}):(0,u.Z)("Toastify__toast-body",C),style:Z}),null!=D&&c.createElement("div",{className:(0,u.Z)("Toastify__toast-icon",(0,o.Z)({},"Toastify--animate-icon Toastify__zoom-enter",!A))},D),c.createElement("div",null,d)),U,(f||H)&&c.createElement(w,(0,r.Z)((0,r.Z)({},L&&!H?{key:"pb-"+L}:{}),{},{rtl:N,theme:S,delay:f,isRunning:n,isIn:M,closeToast:y,hide:g,type:m,style:I,className:_,controlledProgress:H,progress:R}))))},B=b({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),M=(b({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),b({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),b({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,c.forwardRef)((function(e,t){var n=O(e),a=n.getToastToRender,i=n.containerRef,s=n.isToastActive,l=e.className,d=e.style,f=e.rtl,p=e.containerId;function m(e){var t=(0,u.Z)("Toastify__toast-container","Toastify__toast-container--"+e,(0,o.Z)({},"Toastify__toast-container--rtl",f));return v(l)?l({position:e,rtl:f,defaultClassName:t}):(0,u.Z)(t,g(l))}return(0,c.useEffect)((function(){t&&(t.current=i.current)}),[]),c.createElement("div",{ref:i,className:"Toastify",id:p},a((function(e,t){var n=t.length?(0,r.Z)({},d):(0,r.Z)((0,r.Z)({},d),{},{pointerEvents:"none"});return c.createElement("div",{className:m(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,a=e.props;return c.createElement(x,(0,r.Z)((0,r.Z)({},a),{},{isIn:s(a.toastId),style:(0,r.Z)((0,r.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+a.key}),o)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:T.TOP_RIGHT,transition:B,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var A,D=new Map,S=[];function F(){return Math.random().toString(36).substring(2,9)}function z(e){return e&&(m(e.toastId)||f(e.toastId))?e.toastId:F()}function H(e,t){return D.size>0?Z.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function q(e,t){return(0,r.Z)((0,r.Z)({},t),{},{type:t&&t.type||e,toastId:z(t)})}function U(e){return function(t,n){return H(t,q(e,n))}}function Q(e,t){return H(e,q(E.DEFAULT,t))}Q.loading=function(e,t){return H(e,q(E.DEFAULT,(0,r.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var o,a=t.pending,i=t.error,s=t.success;a&&(o=m(a)?Q.loading(a,n):Q.loading(a.render,(0,r.Z)((0,r.Z)({},n),a)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,a){if(null!=t){var i=(0,r.Z)((0,r.Z)((0,r.Z)({type:e},c),n),{},{data:a}),s=m(t)?{render:t}:t;return o?Q.update(o,(0,r.Z)((0,r.Z)({},i),s)):Q(s.render,(0,r.Z)((0,r.Z)({},i),s)),a}Q.dismiss(o)},l=v(e)?e():e;return l.then((function(e){return u("success",s,e)})).catch((function(e){return u("error",i,e)})),l},Q.success=U(E.SUCCESS),Q.info=U(E.INFO),Q.error=U(E.ERROR),Q.warning=U(E.WARNING),Q.warn=Q.warning,Q.dark=function(e,t){return H(e,q(E.DEFAULT,(0,r.Z)({theme:"dark"},t)))},Q.dismiss=function(e){D.size>0?Z.emit(1,e):S=S.filter((function(t){return y(e)&&t.options.toastId!==e}))},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),Z.emit(5,e)},Q.isActive=function(e){var t=!1;return D.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=D.get(n||A);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,a=n.content,i=(0,r.Z)((0,r.Z)((0,r.Z)({},o),t),{},{toastId:t.toastId||e,updateId:F()});i.toastId!==e&&(i.staleId=e);var s=i.render||a;delete i.render,H(s,i)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return Z.on(4,e),function(){Z.off(4,e)}},Q.POSITION=T,Q.TYPE=E,Z.on(2,(function(e){A=e.containerId||e,D.set(A,e),S.forEach((function(e){Z.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){D.delete(e.containerId||e),0===D.size&&Z.off(0).off(1).off(5)}))}}]);
//# sourceMappingURL=681.b010103f.chunk.js.map