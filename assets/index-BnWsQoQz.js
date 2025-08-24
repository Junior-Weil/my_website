(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(u){if(u.ep)return;u.ep=!0;const f=l(u);fetch(u.href,f)}})();function j1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var mc={exports:{}},Rr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function V1(){if(Bp)return Rr;Bp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(o,u,f){var d=null;if(f!==void 0&&(d=""+f),u.key!==void 0&&(d=""+u.key),"key"in u){f={};for(var p in u)p!=="key"&&(f[p]=u[p])}else f=u;return u=f.ref,{$$typeof:n,type:o,key:d,ref:u!==void 0?u:null,props:f}}return Rr.Fragment=i,Rr.jsx=l,Rr.jsxs=l,Rr}var Lp;function U1(){return Lp||(Lp=1,mc.exports=V1()),mc.exports}var w=U1(),pc={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function B1(){if(Pp)return st;Pp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,O={};function j(T,H,Z){this.props=T,this.context=H,this.refs=O,this.updater=Z||M}j.prototype.isReactComponent={},j.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},j.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function _(){}_.prototype=j.prototype;function q(T,H,Z){this.props=T,this.context=H,this.refs=O,this.updater=Z||M}var B=q.prototype=new _;B.constructor=q,E(B,j.prototype),B.isPureReactComponent=!0;var K=Array.isArray,Y={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function lt(T,H,Z,X,tt,pt){return Z=pt.ref,{$$typeof:n,type:T,key:H,ref:Z!==void 0?Z:null,props:pt}}function F(T,H){return lt(T.type,H,void 0,void 0,void 0,T.props)}function at(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Mt(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return H[Z]})}var Gt=/\/+/g;function Xt(T,H){return typeof T=="object"&&T!==null&&T.key!=null?Mt(""+T.key):H.toString(36)}function an(){}function Xe(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(an,an):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function It(T,H,Z,X,tt){var pt=typeof T;(pt==="undefined"||pt==="boolean")&&(T=null);var ot=!1;if(T===null)ot=!0;else switch(pt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(T.$$typeof){case n:case i:ot=!0;break;case y:return ot=T._init,It(ot(T._payload),H,Z,X,tt)}}if(ot)return tt=tt(T),ot=X===""?"."+Xt(T,0):X,K(tt)?(Z="",ot!=null&&(Z=ot.replace(Gt,"$&/")+"/"),It(tt,H,Z,"",function(Dn){return Dn})):tt!=null&&(at(tt)&&(tt=F(tt,Z+(tt.key==null||T&&T.key===tt.key?"":(""+tt.key).replace(Gt,"$&/")+"/")+ot)),H.push(tt)),1;ot=0;var ge=X===""?".":X+":";if(K(T))for(var wt=0;wt<T.length;wt++)X=T[wt],pt=ge+Xt(X,wt),ot+=It(X,H,Z,pt,tt);else if(wt=x(T),typeof wt=="function")for(T=wt.call(T),wt=0;!(X=T.next()).done;)X=X.value,pt=ge+Xt(X,wt++),ot+=It(X,H,Z,pt,tt);else if(pt==="object"){if(typeof T.then=="function")return It(Xe(T),H,Z,X,tt);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ot}function U(T,H,Z){if(T==null)return T;var X=[],tt=0;return It(T,X,"","",function(pt){return H.call(Z,pt,tt++)}),X}function G(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var $=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function yt(){}return st.Children={map:U,forEach:function(T,H,Z){U(T,function(){H.apply(this,arguments)},Z)},count:function(T){var H=0;return U(T,function(){H++}),H},toArray:function(T){return U(T,function(H){return H})||[]},only:function(T){if(!at(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},st.Component=j,st.Fragment=l,st.Profiler=u,st.PureComponent=q,st.StrictMode=o,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,st.__COMPILER_RUNTIME={__proto__:null,c:function(T){return Y.H.useMemoCache(T)}},st.cache=function(T){return function(){return T.apply(null,arguments)}},st.cloneElement=function(T,H,Z){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=E({},T.props),tt=T.key,pt=void 0;if(H!=null)for(ot in H.ref!==void 0&&(pt=void 0),H.key!==void 0&&(tt=""+H.key),H)!I.call(H,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&H.ref===void 0||(X[ot]=H[ot]);var ot=arguments.length-2;if(ot===1)X.children=Z;else if(1<ot){for(var ge=Array(ot),wt=0;wt<ot;wt++)ge[wt]=arguments[wt+2];X.children=ge}return lt(T.type,tt,void 0,void 0,pt,X)},st.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},st.createElement=function(T,H,Z){var X,tt={},pt=null;if(H!=null)for(X in H.key!==void 0&&(pt=""+H.key),H)I.call(H,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(tt[X]=H[X]);var ot=arguments.length-2;if(ot===1)tt.children=Z;else if(1<ot){for(var ge=Array(ot),wt=0;wt<ot;wt++)ge[wt]=arguments[wt+2];tt.children=ge}if(T&&T.defaultProps)for(X in ot=T.defaultProps,ot)tt[X]===void 0&&(tt[X]=ot[X]);return lt(T,pt,void 0,void 0,null,tt)},st.createRef=function(){return{current:null}},st.forwardRef=function(T){return{$$typeof:p,render:T}},st.isValidElement=at,st.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:G}},st.memo=function(T,H){return{$$typeof:h,type:T,compare:H===void 0?null:H}},st.startTransition=function(T){var H=Y.T,Z={};Y.T=Z;try{var X=T(),tt=Y.S;tt!==null&&tt(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(yt,$)}catch(pt){$(pt)}finally{Y.T=H}},st.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},st.use=function(T){return Y.H.use(T)},st.useActionState=function(T,H,Z){return Y.H.useActionState(T,H,Z)},st.useCallback=function(T,H){return Y.H.useCallback(T,H)},st.useContext=function(T){return Y.H.useContext(T)},st.useDebugValue=function(){},st.useDeferredValue=function(T,H){return Y.H.useDeferredValue(T,H)},st.useEffect=function(T,H,Z){var X=Y.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(T,H)},st.useId=function(){return Y.H.useId()},st.useImperativeHandle=function(T,H,Z){return Y.H.useImperativeHandle(T,H,Z)},st.useInsertionEffect=function(T,H){return Y.H.useInsertionEffect(T,H)},st.useLayoutEffect=function(T,H){return Y.H.useLayoutEffect(T,H)},st.useMemo=function(T,H){return Y.H.useMemo(T,H)},st.useOptimistic=function(T,H){return Y.H.useOptimistic(T,H)},st.useReducer=function(T,H,Z){return Y.H.useReducer(T,H,Z)},st.useRef=function(T){return Y.H.useRef(T)},st.useState=function(T){return Y.H.useState(T)},st.useSyncExternalStore=function(T,H,Z){return Y.H.useSyncExternalStore(T,H,Z)},st.useTransition=function(){return Y.H.useTransition()},st.version="19.1.0",st}var Hp;function of(){return Hp||(Hp=1,pc.exports=B1()),pc.exports}var R=of();const Et=j1(R);var gc={exports:{}},Cr={},yc={exports:{}},vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function L1(){return qp||(qp=1,function(n){function i(U,G){var $=U.length;U.push(G);t:for(;0<$;){var yt=$-1>>>1,T=U[yt];if(0<u(T,G))U[yt]=G,U[$]=T,$=yt;else break t}}function l(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var G=U[0],$=U.pop();if($!==G){U[0]=$;t:for(var yt=0,T=U.length,H=T>>>1;yt<H;){var Z=2*(yt+1)-1,X=U[Z],tt=Z+1,pt=U[tt];if(0>u(X,$))tt<T&&0>u(pt,X)?(U[yt]=pt,U[tt]=$,yt=tt):(U[yt]=X,U[Z]=$,yt=Z);else if(tt<T&&0>u(pt,$))U[yt]=pt,U[tt]=$,yt=tt;else break t}}return G}function u(U,G){var $=U.sortIndex-G.sortIndex;return $!==0?$:U.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,p=d.now();n.unstable_now=function(){return d.now()-p}}var m=[],h=[],y=1,b=null,x=3,M=!1,E=!1,O=!1,j=!1,_=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function K(U){for(var G=l(h);G!==null;){if(G.callback===null)o(h);else if(G.startTime<=U)o(h),G.sortIndex=G.expirationTime,i(m,G);else break;G=l(h)}}function Y(U){if(O=!1,K(U),!E)if(l(m)!==null)E=!0,I||(I=!0,Xt());else{var G=l(h);G!==null&&It(Y,G.startTime-U)}}var I=!1,lt=-1,F=5,at=-1;function Mt(){return j?!0:!(n.unstable_now()-at<F)}function Gt(){if(j=!1,I){var U=n.unstable_now();at=U;var G=!0;try{t:{E=!1,O&&(O=!1,q(lt),lt=-1),M=!0;var $=x;try{e:{for(K(U),b=l(m);b!==null&&!(b.expirationTime>U&&Mt());){var yt=b.callback;if(typeof yt=="function"){b.callback=null,x=b.priorityLevel;var T=yt(b.expirationTime<=U);if(U=n.unstable_now(),typeof T=="function"){b.callback=T,K(U),G=!0;break e}b===l(m)&&o(m),K(U)}else o(m);b=l(m)}if(b!==null)G=!0;else{var H=l(h);H!==null&&It(Y,H.startTime-U),G=!1}}break t}finally{b=null,x=$,M=!1}G=void 0}}finally{G?Xt():I=!1}}}var Xt;if(typeof B=="function")Xt=function(){B(Gt)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Xe=an.port2;an.port1.onmessage=Gt,Xt=function(){Xe.postMessage(null)}}else Xt=function(){_(Gt,0)};function It(U,G){lt=_(function(){U(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(U){switch(x){case 1:case 2:case 3:var G=3;break;default:G=x}var $=x;x=G;try{return U()}finally{x=$}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(U,G){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=x;x=U;try{return G()}finally{x=$}},n.unstable_scheduleCallback=function(U,G,$){var yt=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?yt+$:yt):$=yt,U){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=$+T,U={id:y++,callback:G,priorityLevel:U,startTime:$,expirationTime:T,sortIndex:-1},$>yt?(U.sortIndex=$,i(h,U),l(m)===null&&U===l(h)&&(O?(q(lt),lt=-1):O=!0,It(Y,$-yt))):(U.sortIndex=T,i(m,U),E||M||(E=!0,I||(I=!0,Xt()))),U},n.unstable_shouldYield=Mt,n.unstable_wrapCallback=function(U){var G=x;return function(){var $=x;x=G;try{return U.apply(this,arguments)}finally{x=$}}}}(vc)),vc}var Yp;function P1(){return Yp||(Yp=1,yc.exports=L1()),yc.exports}var bc={exports:{}},le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function H1(){if(Gp)return le;Gp=1;var n=of();function i(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(m,h,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:b==null?null:""+b,children:m,containerInfo:h,implementation:y}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,le.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return f(m,h,null,y)},le.flushSync=function(m){var h=d.T,y=o.p;try{if(d.T=null,o.p=2,m)return m()}finally{d.T=h,o.p=y,o.d.f()}},le.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},le.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},le.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:M}):y==="script"&&o.d.X(m,{crossOrigin:b,integrity:x,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},le.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=p(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},le.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin);o.d.L(m,y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},le.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=p(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},le.requestFormReset=function(m){o.d.r(m)},le.unstable_batchedUpdates=function(m,h){return m(h)},le.useFormState=function(m,h,y){return d.H.useFormState(m,h,y)},le.useFormStatus=function(){return d.H.useHostTransitionStatus()},le.version="19.1.0",le}var Xp;function q1(){if(Xp)return bc.exports;Xp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),bc.exports=H1(),bc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function Y1(){if(Zp)return Cr;Zp=1;var n=P1(),i=of(),l=q1();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(o(188))}function m(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,r=e;;){var s=a.return;if(s===null)break;var c=s.alternate;if(c===null){if(r=s.return,r!==null){a=r;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===a)return p(s),t;if(c===r)return p(s),e;c=c.sibling}throw Error(o(188))}if(a.return!==r.return)a=s,r=c;else{for(var g=!1,v=s.child;v;){if(v===a){g=!0,a=s,r=c;break}if(v===r){g=!0,r=s,a=c;break}v=v.sibling}if(!g){for(v=c.child;v;){if(v===a){g=!0,a=c,r=s;break}if(v===r){g=!0,r=c,a=s;break}v=v.sibling}if(!g)throw Error(o(189))}}if(a.alternate!==r)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),Mt=Symbol.for("react.memo_cache_sentinel"),Gt=Symbol.iterator;function Xt(t){return t===null||typeof t!="object"?null:(t=Gt&&t[Gt]||t["@@iterator"],typeof t=="function"?t:null)}var an=Symbol.for("react.client.reference");function Xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===an?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case j:return"Profiler";case O:return"StrictMode";case Y:return"Suspense";case I:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case B:return(t.displayName||"Context")+".Provider";case q:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:Xe(t.type)||"Memo";case F:e=t._payload,t=t._init;try{return Xe(t(e))}catch{}}return null}var It=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},yt=[],T=-1;function H(t){return{current:t}}function Z(t){0>T||(t.current=yt[T],yt[T]=null,T--)}function X(t,e){T++,yt[T]=t.current,t.current=e}var tt=H(null),pt=H(null),ot=H(null),ge=H(null);function wt(t,e){switch(X(ot,e),X(pt,t),X(tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?dp(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=dp(e),t=hp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(tt),X(tt,t)}function Dn(){Z(tt),Z(pt),Z(ot)}function Io(t){t.memoizedState!==null&&X(ge,t);var e=tt.current,a=hp(e,t.type);e!==a&&(X(pt,t),X(tt,a))}function ll(t){pt.current===t&&(Z(tt),Z(pt)),ge.current===t&&(Z(ge),Er._currentValue=$)}var ts=Object.prototype.hasOwnProperty,es=n.unstable_scheduleCallback,ns=n.unstable_cancelCallback,hv=n.unstable_shouldYield,mv=n.unstable_requestPaint,Ze=n.unstable_now,pv=n.unstable_getCurrentPriorityLevel,Zf=n.unstable_ImmediatePriority,Kf=n.unstable_UserBlockingPriority,ol=n.unstable_NormalPriority,gv=n.unstable_LowPriority,Qf=n.unstable_IdlePriority,yv=n.log,vv=n.unstable_setDisableYieldValue,ki=null,ye=null;function wn(t){if(typeof yv=="function"&&vv(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(ki,t)}catch{}}var ve=Math.clz32?Math.clz32:Sv,bv=Math.log,xv=Math.LN2;function Sv(t){return t>>>=0,t===0?32:31-(bv(t)/xv|0)|0}var sl=256,ul=4194304;function la(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function cl(t,e,a){var r=t.pendingLanes;if(r===0)return 0;var s=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~c,r!==0?s=la(r):(g&=v,g!==0?s=la(g):a||(a=v&~t,a!==0&&(s=la(a))))):(v=r&~c,v!==0?s=la(v):g!==0?s=la(g):a||(a=r&~t,a!==0&&(s=la(a)))),s===0?0:e!==0&&e!==s&&(e&c)===0&&(c=s&-s,a=e&-e,c>=a||c===32&&(a&4194048)!==0)?e:s}function Ni(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Tv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(){var t=sl;return sl<<=1,(sl&4194048)===0&&(sl=256),t}function Jf(){var t=ul;return ul<<=1,(ul&62914560)===0&&(ul=4194304),t}function as(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function zi(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Av(t,e,a,r,s,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var v=t.entanglements,S=t.expirationTimes,k=t.hiddenUpdates;for(a=g&~a;0<a;){var V=31-ve(a),P=1<<V;v[V]=0,S[V]=-1;var N=k[V];if(N!==null)for(k[V]=null,V=0;V<N.length;V++){var z=N[V];z!==null&&(z.lane&=-536870913)}a&=~P}r!==0&&$f(t,r,0),c!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~e))}function $f(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ve(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194090}function Wf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-ve(a),s=1<<r;s&e|t[r]&e&&(t[r]|=e),a&=~s}}function is(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function rs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function If(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:kp(t.type))}function Ev(t,e){var a=G.p;try{return G.p=t,e()}finally{G.p=a}}var Rn=Math.random().toString(36).slice(2),ie="__reactFiber$"+Rn,ce="__reactProps$"+Rn,ka="__reactContainer$"+Rn,ls="__reactEvents$"+Rn,Ov="__reactListeners$"+Rn,Mv="__reactHandles$"+Rn,td="__reactResources$"+Rn,ji="__reactMarker$"+Rn;function os(t){delete t[ie],delete t[ce],delete t[ls],delete t[Ov],delete t[Mv]}function Na(t){var e=t[ie];if(e)return e;for(var a=t.parentNode;a;){if(e=a[ka]||a[ie]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=yp(t);t!==null;){if(a=t[ie])return a;t=yp(t)}return e}t=a,a=t.parentNode}return null}function za(t){if(t=t[ie]||t[ka]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Vi(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ja(t){var e=t[td];return e||(e=t[td]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[ji]=!0}var ed=new Set,nd={};function oa(t,e){Va(t,e),Va(t+"Capture",e)}function Va(t,e){for(nd[t]=e,t=0;t<e.length;t++)ed.add(e[t])}var Dv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ad={},id={};function wv(t){return ts.call(id,t)?!0:ts.call(ad,t)?!1:Dv.test(t)?id[t]=!0:(ad[t]=!0,!1)}function fl(t,e,a){if(wv(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function dl(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function rn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}var ss,rd;function Ua(t){if(ss===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);ss=e&&e[1]||"",rd=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ss+t+rd}var us=!1;function cs(t,e){if(!t||us)return"";us=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var P=function(){throw Error()};if(Object.defineProperty(P.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(P,[])}catch(z){var N=z}Reflect.construct(t,[],P)}else{try{P.call()}catch(z){N=z}t.call(P.prototype)}}else{try{throw Error()}catch(z){N=z}(P=t())&&typeof P.catch=="function"&&P.catch(function(){})}}catch(z){if(z&&N&&typeof z.stack=="string")return[z.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],v=c[1];if(g&&v){var S=g.split(`
`),k=v.split(`
`);for(s=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;s<k.length&&!k[s].includes("DetermineComponentFrameRoot");)s++;if(r===S.length||s===k.length)for(r=S.length-1,s=k.length-1;1<=r&&0<=s&&S[r]!==k[s];)s--;for(;1<=r&&0<=s;r--,s--)if(S[r]!==k[s]){if(r!==1||s!==1)do if(r--,s--,0>s||S[r]!==k[s]){var V=`
`+S[r].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=r&&0<=s);break}}}finally{us=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ua(a):""}function Rv(t){switch(t.tag){case 26:case 27:case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 15:return cs(t.type,!1);case 11:return cs(t.type.render,!1);case 1:return cs(t.type,!0);case 31:return Ua("Activity");default:return""}}function ld(t){try{var e="";do e+=Rv(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function De(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function od(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Cv(t){var e=od(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,c=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(g){r=""+g,c.call(this,g)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(g){r=""+g},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hl(t){t._valueTracker||(t._valueTracker=Cv(t))}function sd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=od(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _v=/[\n"\\]/g;function we(t){return t.replace(_v,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fs(t,e,a,r,s,c,g,v){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),e!=null?g==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+De(e)):t.value!==""+De(e)&&(t.value=""+De(e)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),e!=null?ds(t,g,De(e)):a!=null?ds(t,g,De(a)):r!=null&&t.removeAttribute("value"),s==null&&c!=null&&(t.defaultChecked=!!c),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+De(v):t.removeAttribute("name")}function ud(t,e,a,r,s,c,g,v){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),e!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||e!=null))return;a=a!=null?""+De(a):"",e=e!=null?""+De(e):a,v||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g)}function ds(t,e,a){e==="number"&&ml(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Ba(t,e,a,r){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&r&&(t[a].defaultSelected=!0)}else{for(a=""+De(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function cd(t,e,a){if(e!=null&&(e=""+De(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+De(a):""}function fd(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(o(92));if(It(r)){if(1<r.length)throw Error(o(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=De(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function La(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var kv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||kv.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function hd(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&a[s]!==r&&dd(t,s,r)}else for(var c in e)e.hasOwnProperty(c)&&dd(t,c,e[c])}function hs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(t){return zv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ms=null;function ps(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pa=null,Ha=null;function md(t){var e=za(t);if(e&&(t=e.stateNode)){var a=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(fs(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+we(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var s=r[ce]||null;if(!s)throw Error(o(90));fs(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&sd(r)}break t;case"textarea":cd(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Ba(t,!!a.multiple,e,!1)}}}var gs=!1;function pd(t,e,a){if(gs)return t(e,a);gs=!0;try{var r=t(e);return r}finally{if(gs=!1,(Pa!==null||Ha!==null)&&(to(),Pa&&(e=Pa,t=Ha,Ha=Pa=null,md(e),t)))for(e=0;e<t.length;e++)md(t[e])}}function Ui(t,e){var a=t.stateNode;if(a===null)return null;var r=a[ce]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ys=!1;if(ln)try{var Bi={};Object.defineProperty(Bi,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{ys=!1}var Cn=null,vs=null,gl=null;function gd(){if(gl)return gl;var t,e=vs,a=e.length,r,s="value"in Cn?Cn.value:Cn.textContent,c=s.length;for(t=0;t<a&&e[t]===s[t];t++);var g=a-t;for(r=1;r<=g&&e[a-r]===s[c-r];r++);return gl=s.slice(t,1<r?1-r:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function yd(){return!1}function fe(t){function e(a,r,s,c,g){this._reactName=a,this._targetInst=s,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(a=t[v],this[v]=a?a(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?vl:yd,this.isPropagationStopped=yd,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bl=fe(sa),Li=y({},sa,{view:0,detail:0}),jv=fe(Li),bs,xs,Pi,xl=y({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pi&&(Pi&&t.type==="mousemove"?(bs=t.screenX-Pi.screenX,xs=t.screenY-Pi.screenY):xs=bs=0,Pi=t),bs)},movementY:function(t){return"movementY"in t?t.movementY:xs}}),vd=fe(xl),Vv=y({},xl,{dataTransfer:0}),Uv=fe(Vv),Bv=y({},Li,{relatedTarget:0}),Ss=fe(Bv),Lv=y({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=fe(Lv),Hv=y({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=fe(Hv),Yv=y({},sa,{data:0}),bd=fe(Yv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zv[t])?!!e[t]:!1}function Ts(){return Kv}var Qv=y({},Li,{key:function(t){if(t.key){var e=Gv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=fe(Qv),Jv=y({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=fe(Jv),$v=y({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),Wv=fe($v),Iv=y({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),tb=fe(Iv),eb=y({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=fe(eb),ab=y({},sa,{newState:0,oldState:0}),ib=fe(ab),rb=[9,13,27,32],As=ln&&"CompositionEvent"in window,Hi=null;ln&&"documentMode"in document&&(Hi=document.documentMode);var lb=ln&&"TextEvent"in window&&!Hi,Sd=ln&&(!As||Hi&&8<Hi&&11>=Hi),Td=" ",Ad=!1;function Ed(t,e){switch(t){case"keyup":return rb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Od(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qa=!1;function ob(t,e){switch(t){case"compositionend":return Od(e);case"keypress":return e.which!==32?null:(Ad=!0,Td);case"textInput":return t=e.data,t===Td&&Ad?null:t;default:return null}}function sb(t,e){if(qa)return t==="compositionend"||!As&&Ed(t,e)?(t=gd(),gl=vs=Cn=null,qa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sd&&e.locale!=="ko"?null:e.data;default:return null}}var ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ub[t.type]:e==="textarea"}function Dd(t,e,a,r){Pa?Ha?Ha.push(r):Ha=[r]:Pa=r,e=lo(e,"onChange"),0<e.length&&(a=new bl("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var qi=null,Yi=null;function cb(t){op(t,0)}function Sl(t){var e=Vi(t);if(sd(e))return t}function wd(t,e){if(t==="change")return e}var Rd=!1;if(ln){var Es;if(ln){var Os="oninput"in document;if(!Os){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Os=typeof Cd.oninput=="function"}Es=Os}else Es=!1;Rd=Es&&(!document.documentMode||9<document.documentMode)}function _d(){qi&&(qi.detachEvent("onpropertychange",kd),Yi=qi=null)}function kd(t){if(t.propertyName==="value"&&Sl(Yi)){var e=[];Dd(e,Yi,t,ps(t)),pd(cb,e)}}function fb(t,e,a){t==="focusin"?(_d(),qi=e,Yi=a,qi.attachEvent("onpropertychange",kd)):t==="focusout"&&_d()}function db(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(Yi)}function hb(t,e){if(t==="click")return Sl(e)}function mb(t,e){if(t==="input"||t==="change")return Sl(e)}function pb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var be=typeof Object.is=="function"?Object.is:pb;function Gi(t,e){if(be(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var s=a[r];if(!ts.call(e,s)||!be(t[s],e[s]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function zd(t,e){var a=Nd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Nd(a)}}function jd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ml(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ml(t.document)}return e}function Ms(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var gb=ln&&"documentMode"in document&&11>=document.documentMode,Ya=null,Ds=null,Xi=null,ws=!1;function Ud(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ws||Ya==null||Ya!==ml(r)||(r=Ya,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&Gi(Xi,r)||(Xi=r,r=lo(Ds,"onSelect"),0<r.length&&(e=new bl("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Ya)))}function ua(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Ga={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionrun:ua("Transition","TransitionRun"),transitionstart:ua("Transition","TransitionStart"),transitioncancel:ua("Transition","TransitionCancel"),transitionend:ua("Transition","TransitionEnd")},Rs={},Bd={};ln&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete Ga.animationend.animation,delete Ga.animationiteration.animation,delete Ga.animationstart.animation),"TransitionEvent"in window||delete Ga.transitionend.transition);function ca(t){if(Rs[t])return Rs[t];if(!Ga[t])return t;var e=Ga[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Bd)return Rs[t]=e[a];return t}var Ld=ca("animationend"),Pd=ca("animationiteration"),Hd=ca("animationstart"),yb=ca("transitionrun"),vb=ca("transitionstart"),bb=ca("transitioncancel"),qd=ca("transitionend"),Yd=new Map,Cs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cs.push("scrollEnd");function Le(t,e){Yd.set(t,e),oa(e,[t])}var Gd=new WeakMap;function Re(t,e){if(typeof t=="object"&&t!==null){var a=Gd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:ld(e)},Gd.set(t,e),e)}return{value:t,source:e,stack:ld(e)}}var Ce=[],Xa=0,_s=0;function Tl(){for(var t=Xa,e=_s=Xa=0;e<t;){var a=Ce[e];Ce[e++]=null;var r=Ce[e];Ce[e++]=null;var s=Ce[e];Ce[e++]=null;var c=Ce[e];if(Ce[e++]=null,r!==null&&s!==null){var g=r.pending;g===null?s.next=s:(s.next=g.next,g.next=s),r.pending=s}c!==0&&Xd(a,s,c)}}function Al(t,e,a,r){Ce[Xa++]=t,Ce[Xa++]=e,Ce[Xa++]=a,Ce[Xa++]=r,_s|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function ks(t,e,a,r){return Al(t,e,a,r),El(t)}function Za(t,e){return Al(t,null,null,e),El(t)}function Xd(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var s=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(s=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,s&&e!==null&&(s=31-ve(a),t=c.hiddenUpdates,r=t[s],r===null?t[s]=[e]:r.push(e),e.lane=a|536870912),c):null}function El(t){if(50<gr)throw gr=0,Bu=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ka={};function xb(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,a,r){return new xb(t,e,a,r)}function Ns(t){return t=t.prototype,!(!t||!t.isReactComponent)}function on(t,e){var a=t.alternate;return a===null?(a=xe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Zd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ol(t,e,a,r,s,c){var g=0;if(r=t,typeof t=="function")Ns(t)&&(g=1);else if(typeof t=="string")g=T1(t,a,tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=xe(31,a,e,s),t.elementType=at,t.lanes=c,t;case E:return fa(a.children,s,c,e);case O:g=8,s|=24;break;case j:return t=xe(12,a,e,s|2),t.elementType=j,t.lanes=c,t;case Y:return t=xe(13,a,e,s),t.elementType=Y,t.lanes=c,t;case I:return t=xe(19,a,e,s),t.elementType=I,t.lanes=c,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case B:g=10;break t;case q:g=9;break t;case K:g=11;break t;case lt:g=14;break t;case F:g=16,r=null;break t}g=29,a=Error(o(130,t===null?"null":typeof t,"")),r=null}return e=xe(g,a,e,s),e.elementType=t,e.type=r,e.lanes=c,e}function fa(t,e,a,r){return t=xe(7,t,r,e),t.lanes=a,t}function zs(t,e,a){return t=xe(6,t,null,e),t.lanes=a,t}function js(t,e,a){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qa=[],Fa=0,Ml=null,Dl=0,_e=[],ke=0,da=null,sn=1,un="";function ha(t,e){Qa[Fa++]=Dl,Qa[Fa++]=Ml,Ml=t,Dl=e}function Kd(t,e,a){_e[ke++]=sn,_e[ke++]=un,_e[ke++]=da,da=t;var r=sn;t=un;var s=32-ve(r)-1;r&=~(1<<s),a+=1;var c=32-ve(e)+s;if(30<c){var g=s-s%5;c=(r&(1<<g)-1).toString(32),r>>=g,s-=g,sn=1<<32-ve(e)+s|a<<s|r,un=c+t}else sn=1<<c|a<<s|r,un=t}function Vs(t){t.return!==null&&(ha(t,1),Kd(t,1,0))}function Us(t){for(;t===Ml;)Ml=Qa[--Fa],Qa[Fa]=null,Dl=Qa[--Fa],Qa[Fa]=null;for(;t===da;)da=_e[--ke],_e[ke]=null,un=_e[--ke],_e[ke]=null,sn=_e[--ke],_e[ke]=null}var se=null,jt=null,vt=!1,ma=null,Ke=!1,Bs=Error(o(519));function pa(t){var e=Error(o(418,""));throw Qi(Re(e,t)),Bs}function Qd(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ie]=t,e[ce]=r,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<vr.length;a++)dt(vr[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),ud(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),hl(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),fd(e,r.value,r.defaultValue,r.children),hl(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||fp(e.textContent,a)?(r.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),r.onScroll!=null&&dt("scroll",e),r.onScrollEnd!=null&&dt("scrollend",e),r.onClick!=null&&(e.onclick=oo),e=!0):e=!1,e||pa(t)}function Fd(t){for(se=t.return;se;)switch(se.tag){case 5:case 13:Ke=!1;return;case 27:case 3:Ke=!0;return;default:se=se.return}}function Zi(t){if(t!==se)return!1;if(!vt)return Fd(t),vt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||tc(t.type,t.memoizedProps)),a=!a),a&&jt&&pa(t),Fd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){jt=He(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}jt=null}}else e===27?(e=jt,Zn(t.type)?(t=ic,ic=null,jt=t):jt=e):jt=se?He(t.stateNode.nextSibling):null;return!0}function Ki(){jt=se=null,vt=!1}function Jd(){var t=ma;return t!==null&&(me===null?me=t:me.push.apply(me,t),ma=null),t}function Qi(t){ma===null?ma=[t]:ma.push(t)}var Ls=H(null),ga=null,cn=null;function _n(t,e,a){X(Ls,e._currentValue),e._currentValue=a}function fn(t){t._currentValue=Ls.current,Z(Ls)}function Ps(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Hs(t,e,a,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){var g=s.child;c=c.firstContext;t:for(;c!==null;){var v=c;c=s;for(var S=0;S<e.length;S++)if(v.context===e[S]){c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),Ps(c.return,a,t),r||(g=null);break t}c=v.next}}else if(s.tag===18){if(g=s.return,g===null)throw Error(o(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Ps(g,a,t),g=null}else g=s.child;if(g!==null)g.return=s;else for(g=s;g!==null;){if(g===t){g=null;break}if(s=g.sibling,s!==null){s.return=g.return,g=s;break}g=g.return}s=g}}function Fi(t,e,a,r){t=null;for(var s=e,c=!1;s!==null;){if(!c){if((s.flags&524288)!==0)c=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var g=s.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var v=s.type;be(s.pendingProps.value,g.value)||(t!==null?t.push(v):t=[v])}}else if(s===ge.current){if(g=s.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(Er):t=[Er])}s=s.return}t!==null&&Hs(e,t,a,r),e.flags|=262144}function wl(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ya(t){ga=t,cn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return $d(ga,t)}function Rl(t,e){return ga===null&&ya(t),$d(t,e)}function $d(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},cn===null){if(t===null)throw Error(o(308));cn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else cn=cn.next=e;return a}var Sb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Tb=n.unstable_scheduleCallback,Ab=n.unstable_NormalPriority,Zt={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qs(){return{controller:new Sb,data:new Map,refCount:0}}function Ji(t){t.refCount--,t.refCount===0&&Tb(Ab,function(){t.controller.abort()})}var $i=null,Ys=0,Ja=0,$a=null;function Eb(t,e){if($i===null){var a=$i=[];Ys=0,Ja=Xu(),$a={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ys++,e.then(Wd,Wd),e}function Wd(){if(--Ys===0&&$i!==null){$a!==null&&($a.status="fulfilled");var t=$i;$i=null,Ja=0,$a=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Ob(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),r}var Id=U.S;U.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Eb(t,e),Id!==null&&Id(t,e)};var va=H(null);function Gs(){var t=va.current;return t!==null?t:Dt.pooledCache}function Cl(t,e){e===null?X(va,va.current):X(va,e.pool)}function th(){var t=Gs();return t===null?null:{parent:Zt._currentValue,pool:t}}var Wi=Error(o(460)),eh=Error(o(474)),_l=Error(o(542)),Xs={then:function(){}};function nh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kl(){}function ah(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(kl,kl),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rh(t),t;default:if(typeof e.status=="string")e.then(kl,kl);else{if(t=Dt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,rh(t),t}throw Ii=e,Wi}}var Ii=null;function ih(){if(Ii===null)throw Error(o(459));var t=Ii;return Ii=null,t}function rh(t){if(t===Wi||t===_l)throw Error(o(483))}var kn=!1;function Zs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ks(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Nn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(bt&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=El(t),Xd(t,null,a),e}return Al(t,r,e,a),El(t)}function tr(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Wf(t,a)}}function Qs(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var s=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?s=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?s=c=e:c=c.next=e}else s=c=e;a={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Fs=!1;function er(){if(Fs){var t=$a;if(t!==null)throw t}}function nr(t,e,a,r){Fs=!1;var s=t.updateQueue;kn=!1;var c=s.firstBaseUpdate,g=s.lastBaseUpdate,v=s.shared.pending;if(v!==null){s.shared.pending=null;var S=v,k=S.next;S.next=null,g===null?c=k:g.next=k,g=S;var V=t.alternate;V!==null&&(V=V.updateQueue,v=V.lastBaseUpdate,v!==g&&(v===null?V.firstBaseUpdate=k:v.next=k,V.lastBaseUpdate=S))}if(c!==null){var P=s.baseState;g=0,V=k=S=null,v=c;do{var N=v.lane&-536870913,z=N!==v.lane;if(z?(mt&N)===N:(r&N)===N){N!==0&&N===Ja&&(Fs=!0),V!==null&&(V=V.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var it=t,et=v;N=e;var At=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){P=it.call(At,P,N);break t}P=it;break t;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,N=typeof it=="function"?it.call(At,P,N):it,N==null)break t;P=y({},P,N);break t;case 2:kn=!0}}N=v.callback,N!==null&&(t.flags|=64,z&&(t.flags|=8192),z=s.callbacks,z===null?s.callbacks=[N]:z.push(N))}else z={lane:N,tag:v.tag,payload:v.payload,callback:v.callback,next:null},V===null?(k=V=z,S=P):V=V.next=z,g|=N;if(v=v.next,v===null){if(v=s.shared.pending,v===null)break;z=v,v=z.next,z.next=null,s.lastBaseUpdate=z,s.shared.pending=null}}while(!0);V===null&&(S=P),s.baseState=S,s.firstBaseUpdate=k,s.lastBaseUpdate=V,c===null&&(s.shared.lanes=0),qn|=g,t.lanes=g,t.memoizedState=P}}function lh(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function oh(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)lh(a[t],e)}var Wa=H(null),Nl=H(0);function sh(t,e){t=vn,X(Nl,t),X(Wa,e),vn=t|e.baseLanes}function Js(){X(Nl,vn),X(Wa,Wa.current)}function $s(){vn=Nl.current,Z(Wa),Z(Nl)}var jn=0,ut=null,St=null,Ht=null,zl=!1,Ia=!1,ba=!1,jl=0,ar=0,ti=null,Mb=0;function Bt(){throw Error(o(321))}function Ws(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!be(t[a],e[a]))return!1;return!0}function Is(t,e,a,r,s,c){return jn=c,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,U.H=t===null||t.memoizedState===null?Xh:Zh,ba=!1,c=a(r,s),ba=!1,Ia&&(c=ch(e,a,r,s)),uh(t),c}function uh(t){U.H=Hl;var e=St!==null&&St.next!==null;if(jn=0,Ht=St=ut=null,zl=!1,ar=0,ti=null,e)throw Error(o(300));t===null||Jt||(t=t.dependencies,t!==null&&wl(t)&&(Jt=!0))}function ch(t,e,a,r){ut=t;var s=0;do{if(Ia&&(ti=null),ar=0,Ia=!1,25<=s)throw Error(o(301));if(s+=1,Ht=St=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}U.H=Nb,c=e(a,r)}while(Ia);return c}function Db(){var t=U.H,e=t.useState()[0];return e=typeof e.then=="function"?ir(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(ut.flags|=1024),e}function tu(){var t=jl!==0;return jl=0,t}function eu(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function nu(t){if(zl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}zl=!1}jn=0,Ht=St=ut=null,Ia=!1,ar=jl=0,ti=null}function de(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?ut.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qt(){if(St===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=Ht===null?ut.memoizedState:Ht.next;if(e!==null)Ht=e,St=t;else{if(t===null)throw ut.alternate===null?Error(o(467)):Error(o(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Ht===null?ut.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ir(t){var e=ar;return ar+=1,ti===null&&(ti=[]),t=ah(ti,t,e),e=ut,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,U.H=e===null||e.memoizedState===null?Xh:Zh),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ir(t);if(t.$$typeof===B)return re(t)}throw Error(o(438,String(t)))}function iu(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ut.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=au(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=Mt;return e.index++,a}function dn(t,e){return typeof e=="function"?e(t):e}function Ul(t){var e=qt();return ru(e,St,t)}function ru(t,e,a){var r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=a;var s=t.baseQueue,c=r.pending;if(c!==null){if(s!==null){var g=s.next;s.next=c.next,c.next=g}e.baseQueue=s=c,r.pending=null}if(c=t.baseState,s===null)t.memoizedState=c;else{e=s.next;var v=g=null,S=null,k=e,V=!1;do{var P=k.lane&-536870913;if(P!==k.lane?(mt&P)===P:(jn&P)===P){var N=k.revertLane;if(N===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),P===Ja&&(V=!0);else if((jn&N)===N){k=k.next,N===Ja&&(V=!0);continue}else P={lane:0,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},S===null?(v=S=P,g=c):S=S.next=P,ut.lanes|=N,qn|=N;P=k.action,ba&&a(c,P),c=k.hasEagerState?k.eagerState:a(c,P)}else N={lane:P,revertLane:k.revertLane,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},S===null?(v=S=N,g=c):S=S.next=N,ut.lanes|=P,qn|=P;k=k.next}while(k!==null&&k!==e);if(S===null?g=c:S.next=v,!be(c,t.memoizedState)&&(Jt=!0,V&&(a=$a,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=S,r.lastRenderedState=c}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function lu(t){var e=qt(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var r=a.dispatch,s=a.pending,c=e.memoizedState;if(s!==null){a.pending=null;var g=s=s.next;do c=t(c,g.action),g=g.next;while(g!==s);be(c,e.memoizedState)||(Jt=!0),e.memoizedState=c,e.baseQueue===null&&(e.baseState=c),a.lastRenderedState=c}return[c,r]}function fh(t,e,a){var r=ut,s=qt(),c=vt;if(c){if(a===void 0)throw Error(o(407));a=a()}else a=e();var g=!be((St||s).memoizedState,a);g&&(s.memoizedState=a,Jt=!0),s=s.queue;var v=mh.bind(null,r,s,t);if(rr(2048,8,v,[t]),s.getSnapshot!==e||g||Ht!==null&&Ht.memoizedState.tag&1){if(r.flags|=2048,ei(9,Bl(),hh.bind(null,r,s,a,e),null),Dt===null)throw Error(o(349));c||(jn&124)!==0||dh(r,e,a)}return a}function dh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=au(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function hh(t,e,a,r){e.value=a,e.getSnapshot=r,ph(e)&&gh(t)}function mh(t,e,a){return a(function(){ph(e)&&gh(t)})}function ph(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!be(t,a)}catch{return!0}}function gh(t){var e=Za(t,2);e!==null&&Oe(e,t,2)}function ou(t){var e=de();if(typeof t=="function"){var a=t;if(t=a(),ba){wn(!0);try{a()}finally{wn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:t},e}function yh(t,e,a,r){return t.baseState=a,ru(t,St,typeof r=="function"?r:dn)}function wb(t,e,a,r,s){if(Pl(t))throw Error(o(485));if(t=e.action,t!==null){var c={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};U.T!==null?a(!0):c.isTransition=!1,r(c),a=e.pending,a===null?(c.next=e.pending=c,vh(e,c)):(c.next=a.next,e.pending=a.next=c)}}function vh(t,e){var a=e.action,r=e.payload,s=t.state;if(e.isTransition){var c=U.T,g={};U.T=g;try{var v=a(s,r),S=U.S;S!==null&&S(g,v),bh(t,e,v)}catch(k){su(t,e,k)}finally{U.T=c}}else try{c=a(s,r),bh(t,e,c)}catch(k){su(t,e,k)}}function bh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){xh(t,e,r)},function(r){return su(t,e,r)}):xh(t,e,a)}function xh(t,e,a){e.status="fulfilled",e.value=a,Sh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,vh(t,a)))}function su(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,Sh(e),e=e.next;while(e!==r)}t.action=null}function Sh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Th(t,e){return e}function Ah(t,e){if(vt){var a=Dt.formState;if(a!==null){t:{var r=ut;if(vt){if(jt){e:{for(var s=jt,c=Ke;s.nodeType!==8;){if(!c){s=null;break e}if(s=He(s.nextSibling),s===null){s=null;break e}}c=s.data,s=c==="F!"||c==="F"?s:null}if(s){jt=He(s.nextSibling),r=s.data==="F!";break t}}pa(r)}r=!1}r&&(e=a[0])}}return a=de(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Th,lastRenderedState:e},a.queue=r,a=qh.bind(null,ut,r),r.dispatch=a,r=ou(!1),c=hu.bind(null,ut,!1,r.queue),r=de(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,a=wb.bind(null,ut,s,c,a),s.dispatch=a,r.memoizedState=t,[e,a,!1]}function Eh(t){var e=qt();return Oh(e,St,t)}function Oh(t,e,a){if(e=ru(t,e,Th)[0],t=Ul(dn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=ir(e)}catch(g){throw g===Wi?_l:g}else r=e;e=qt();var s=e.queue,c=s.dispatch;return a!==e.memoizedState&&(ut.flags|=2048,ei(9,Bl(),Rb.bind(null,s,a),null)),[r,c,t]}function Rb(t,e){t.action=e}function Mh(t){var e=qt(),a=St;if(a!==null)return Oh(e,a,t);qt(),e=e.memoizedState,a=qt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function ei(t,e,a,r){return t={tag:t,create:a,deps:r,inst:e,next:null},e=ut.updateQueue,e===null&&(e=au(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function Bl(){return{destroy:void 0,resource:void 0}}function Dh(){return qt().memoizedState}function Ll(t,e,a,r){var s=de();r=r===void 0?null:r,ut.flags|=t,s.memoizedState=ei(1|e,Bl(),a,r)}function rr(t,e,a,r){var s=qt();r=r===void 0?null:r;var c=s.memoizedState.inst;St!==null&&r!==null&&Ws(r,St.memoizedState.deps)?s.memoizedState=ei(e,c,a,r):(ut.flags|=t,s.memoizedState=ei(1|e,c,a,r))}function wh(t,e){Ll(8390656,8,t,e)}function Rh(t,e){rr(2048,8,t,e)}function Ch(t,e){return rr(4,2,t,e)}function _h(t,e){return rr(4,4,t,e)}function kh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nh(t,e,a){a=a!=null?a.concat([t]):null,rr(4,4,kh.bind(null,e,t),a)}function uu(){}function zh(t,e){var a=qt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Ws(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function jh(t,e){var a=qt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Ws(e,r[1]))return r[0];if(r=t(),ba){wn(!0);try{t()}finally{wn(!1)}}return a.memoizedState=[r,e],r}function cu(t,e,a){return a===void 0||(jn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Bm(),ut.lanes|=t,qn|=t,a)}function Vh(t,e,a,r){return be(a,e)?a:Wa.current!==null?(t=cu(t,a,r),be(t,e)||(Jt=!0),t):(jn&42)===0?(Jt=!0,t.memoizedState=a):(t=Bm(),ut.lanes|=t,qn|=t,e)}function Uh(t,e,a,r,s){var c=G.p;G.p=c!==0&&8>c?c:8;var g=U.T,v={};U.T=v,hu(t,!1,e,a);try{var S=s(),k=U.S;if(k!==null&&k(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=Ob(S,r);lr(t,e,V,Ee(t))}else lr(t,e,r,Ee(t))}catch(P){lr(t,e,{then:function(){},status:"rejected",reason:P},Ee())}finally{G.p=c,U.T=g}}function Cb(){}function fu(t,e,a,r){if(t.tag!==5)throw Error(o(476));var s=Bh(t).queue;Uh(t,s,e,$,a===null?Cb:function(){return Lh(t),a(r)})}function Bh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Lh(t){var e=Bh(t).next.queue;lr(t,e,{},Ee())}function du(){return re(Er)}function Ph(){return qt().memoizedState}function Hh(){return qt().memoizedState}function _b(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ee();t=Nn(a);var r=zn(e,t,a);r!==null&&(Oe(r,e,a),tr(r,e,a)),e={cache:qs()},t.payload=e;return}e=e.return}}function kb(t,e,a){var r=Ee();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(t)?Yh(e,a):(a=ks(t,e,a,r),a!==null&&(Oe(a,t,r),Gh(a,e,r)))}function qh(t,e,a){var r=Ee();lr(t,e,a,r)}function lr(t,e,a,r){var s={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(t))Yh(e,s);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=e.lastRenderedReducer,c!==null))try{var g=e.lastRenderedState,v=c(g,a);if(s.hasEagerState=!0,s.eagerState=v,be(v,g))return Al(t,e,s,0),Dt===null&&Tl(),!1}catch{}finally{}if(a=ks(t,e,s,r),a!==null)return Oe(a,t,r),Gh(a,e,r),!0}return!1}function hu(t,e,a,r){if(r={lane:2,revertLane:Xu(),action:r,hasEagerState:!1,eagerState:null,next:null},Pl(t)){if(e)throw Error(o(479))}else e=ks(t,a,r,2),e!==null&&Oe(e,t,2)}function Pl(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Yh(t,e){Ia=zl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Gh(t,e,a){if((a&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Wf(t,a)}}var Hl={readContext:re,use:Vl,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt},Xh={readContext:re,use:Vl,useCallback:function(t,e){return de().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:wh,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Ll(4194308,4,kh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){Ll(4,2,t,e)},useMemo:function(t,e){var a=de();e=e===void 0?null:e;var r=t();if(ba){wn(!0);try{t()}finally{wn(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=de();if(a!==void 0){var s=a(e);if(ba){wn(!0);try{a(e)}finally{wn(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=kb.bind(null,ut,t),[r.memoizedState,t]},useRef:function(t){var e=de();return t={current:t},e.memoizedState=t},useState:function(t){t=ou(t);var e=t.queue,a=qh.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:uu,useDeferredValue:function(t,e){var a=de();return cu(a,t,e)},useTransition:function(){var t=ou(!1);return t=Uh.bind(null,ut,t.queue,!0,!1),de().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ut,s=de();if(vt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Dt===null)throw Error(o(349));(mt&124)!==0||dh(r,e,a)}s.memoizedState=a;var c={value:a,getSnapshot:e};return s.queue=c,wh(mh.bind(null,r,c,t),[t]),r.flags|=2048,ei(9,Bl(),hh.bind(null,r,c,a,e),null),a},useId:function(){var t=de(),e=Dt.identifierPrefix;if(vt){var a=un,r=sn;a=(r&~(1<<32-ve(r)-1)).toString(32)+a,e="«"+e+"R"+a,a=jl++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Mb++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:du,useFormState:Ah,useActionState:Ah,useOptimistic:function(t){var e=de();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=hu.bind(null,ut,!0,a),a.dispatch=e,[t,e]},useMemoCache:iu,useCacheRefresh:function(){return de().memoizedState=_b.bind(null,ut)}},Zh={readContext:re,use:Vl,useCallback:zh,useContext:re,useEffect:Rh,useImperativeHandle:Nh,useInsertionEffect:Ch,useLayoutEffect:_h,useMemo:jh,useReducer:Ul,useRef:Dh,useState:function(){return Ul(dn)},useDebugValue:uu,useDeferredValue:function(t,e){var a=qt();return Vh(a,St.memoizedState,t,e)},useTransition:function(){var t=Ul(dn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:ir(t),e]},useSyncExternalStore:fh,useId:Ph,useHostTransitionStatus:du,useFormState:Eh,useActionState:Eh,useOptimistic:function(t,e){var a=qt();return yh(a,St,t,e)},useMemoCache:iu,useCacheRefresh:Hh},Nb={readContext:re,use:Vl,useCallback:zh,useContext:re,useEffect:Rh,useImperativeHandle:Nh,useInsertionEffect:Ch,useLayoutEffect:_h,useMemo:jh,useReducer:lu,useRef:Dh,useState:function(){return lu(dn)},useDebugValue:uu,useDeferredValue:function(t,e){var a=qt();return St===null?cu(a,t,e):Vh(a,St.memoizedState,t,e)},useTransition:function(){var t=lu(dn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:ir(t),e]},useSyncExternalStore:fh,useId:Ph,useHostTransitionStatus:du,useFormState:Mh,useActionState:Mh,useOptimistic:function(t,e){var a=qt();return St!==null?yh(a,St,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:iu,useCacheRefresh:Hh},ni=null,or=0;function ql(t){var e=or;return or+=1,ni===null&&(ni=[]),ah(ni,t,e)}function sr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Yl(t,e){throw e.$$typeof===b?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Kh(t){var e=t._init;return e(t._payload)}function Qh(t){function e(D,A){if(t){var C=D.deletions;C===null?(D.deletions=[A],D.flags|=16):C.push(A)}}function a(D,A){if(!t)return null;for(;A!==null;)e(D,A),A=A.sibling;return null}function r(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function s(D,A){return D=on(D,A),D.index=0,D.sibling=null,D}function c(D,A,C){return D.index=C,t?(C=D.alternate,C!==null?(C=C.index,C<A?(D.flags|=67108866,A):C):(D.flags|=67108866,A)):(D.flags|=1048576,A)}function g(D){return t&&D.alternate===null&&(D.flags|=67108866),D}function v(D,A,C,L){return A===null||A.tag!==6?(A=zs(C,D.mode,L),A.return=D,A):(A=s(A,C),A.return=D,A)}function S(D,A,C,L){var Q=C.type;return Q===E?V(D,A,C.props.children,L,C.key):A!==null&&(A.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===F&&Kh(Q)===A.type)?(A=s(A,C.props),sr(A,C),A.return=D,A):(A=Ol(C.type,C.key,C.props,null,D.mode,L),sr(A,C),A.return=D,A)}function k(D,A,C,L){return A===null||A.tag!==4||A.stateNode.containerInfo!==C.containerInfo||A.stateNode.implementation!==C.implementation?(A=js(C,D.mode,L),A.return=D,A):(A=s(A,C.children||[]),A.return=D,A)}function V(D,A,C,L,Q){return A===null||A.tag!==7?(A=fa(C,D.mode,L,Q),A.return=D,A):(A=s(A,C),A.return=D,A)}function P(D,A,C){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=zs(""+A,D.mode,C),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return C=Ol(A.type,A.key,A.props,null,D.mode,C),sr(C,A),C.return=D,C;case M:return A=js(A,D.mode,C),A.return=D,A;case F:var L=A._init;return A=L(A._payload),P(D,A,C)}if(It(A)||Xt(A))return A=fa(A,D.mode,C,null),A.return=D,A;if(typeof A.then=="function")return P(D,ql(A),C);if(A.$$typeof===B)return P(D,Rl(D,A),C);Yl(D,A)}return null}function N(D,A,C,L){var Q=A!==null?A.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Q!==null?null:v(D,A,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case x:return C.key===Q?S(D,A,C,L):null;case M:return C.key===Q?k(D,A,C,L):null;case F:return Q=C._init,C=Q(C._payload),N(D,A,C,L)}if(It(C)||Xt(C))return Q!==null?null:V(D,A,C,L,null);if(typeof C.then=="function")return N(D,A,ql(C),L);if(C.$$typeof===B)return N(D,A,Rl(D,C),L);Yl(D,C)}return null}function z(D,A,C,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return D=D.get(C)||null,v(A,D,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return D=D.get(L.key===null?C:L.key)||null,S(A,D,L,Q);case M:return D=D.get(L.key===null?C:L.key)||null,k(A,D,L,Q);case F:var ct=L._init;return L=ct(L._payload),z(D,A,C,L,Q)}if(It(L)||Xt(L))return D=D.get(C)||null,V(A,D,L,Q,null);if(typeof L.then=="function")return z(D,A,C,ql(L),Q);if(L.$$typeof===B)return z(D,A,C,Rl(A,L),Q);Yl(A,L)}return null}function it(D,A,C,L){for(var Q=null,ct=null,W=A,nt=A=0,Wt=null;W!==null&&nt<C.length;nt++){W.index>nt?(Wt=W,W=null):Wt=W.sibling;var gt=N(D,W,C[nt],L);if(gt===null){W===null&&(W=Wt);break}t&&W&&gt.alternate===null&&e(D,W),A=c(gt,A,nt),ct===null?Q=gt:ct.sibling=gt,ct=gt,W=Wt}if(nt===C.length)return a(D,W),vt&&ha(D,nt),Q;if(W===null){for(;nt<C.length;nt++)W=P(D,C[nt],L),W!==null&&(A=c(W,A,nt),ct===null?Q=W:ct.sibling=W,ct=W);return vt&&ha(D,nt),Q}for(W=r(W);nt<C.length;nt++)Wt=z(W,D,nt,C[nt],L),Wt!==null&&(t&&Wt.alternate!==null&&W.delete(Wt.key===null?nt:Wt.key),A=c(Wt,A,nt),ct===null?Q=Wt:ct.sibling=Wt,ct=Wt);return t&&W.forEach(function($n){return e(D,$n)}),vt&&ha(D,nt),Q}function et(D,A,C,L){if(C==null)throw Error(o(151));for(var Q=null,ct=null,W=A,nt=A=0,Wt=null,gt=C.next();W!==null&&!gt.done;nt++,gt=C.next()){W.index>nt?(Wt=W,W=null):Wt=W.sibling;var $n=N(D,W,gt.value,L);if($n===null){W===null&&(W=Wt);break}t&&W&&$n.alternate===null&&e(D,W),A=c($n,A,nt),ct===null?Q=$n:ct.sibling=$n,ct=$n,W=Wt}if(gt.done)return a(D,W),vt&&ha(D,nt),Q;if(W===null){for(;!gt.done;nt++,gt=C.next())gt=P(D,gt.value,L),gt!==null&&(A=c(gt,A,nt),ct===null?Q=gt:ct.sibling=gt,ct=gt);return vt&&ha(D,nt),Q}for(W=r(W);!gt.done;nt++,gt=C.next())gt=z(W,D,nt,gt.value,L),gt!==null&&(t&&gt.alternate!==null&&W.delete(gt.key===null?nt:gt.key),A=c(gt,A,nt),ct===null?Q=gt:ct.sibling=gt,ct=gt);return t&&W.forEach(function(z1){return e(D,z1)}),vt&&ha(D,nt),Q}function At(D,A,C,L){if(typeof C=="object"&&C!==null&&C.type===E&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case x:t:{for(var Q=C.key;A!==null;){if(A.key===Q){if(Q=C.type,Q===E){if(A.tag===7){a(D,A.sibling),L=s(A,C.props.children),L.return=D,D=L;break t}}else if(A.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===F&&Kh(Q)===A.type){a(D,A.sibling),L=s(A,C.props),sr(L,C),L.return=D,D=L;break t}a(D,A);break}else e(D,A);A=A.sibling}C.type===E?(L=fa(C.props.children,D.mode,L,C.key),L.return=D,D=L):(L=Ol(C.type,C.key,C.props,null,D.mode,L),sr(L,C),L.return=D,D=L)}return g(D);case M:t:{for(Q=C.key;A!==null;){if(A.key===Q)if(A.tag===4&&A.stateNode.containerInfo===C.containerInfo&&A.stateNode.implementation===C.implementation){a(D,A.sibling),L=s(A,C.children||[]),L.return=D,D=L;break t}else{a(D,A);break}else e(D,A);A=A.sibling}L=js(C,D.mode,L),L.return=D,D=L}return g(D);case F:return Q=C._init,C=Q(C._payload),At(D,A,C,L)}if(It(C))return it(D,A,C,L);if(Xt(C)){if(Q=Xt(C),typeof Q!="function")throw Error(o(150));return C=Q.call(C),et(D,A,C,L)}if(typeof C.then=="function")return At(D,A,ql(C),L);if(C.$$typeof===B)return At(D,A,Rl(D,C),L);Yl(D,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,A!==null&&A.tag===6?(a(D,A.sibling),L=s(A,C),L.return=D,D=L):(a(D,A),L=zs(C,D.mode,L),L.return=D,D=L),g(D)):a(D,A)}return function(D,A,C,L){try{or=0;var Q=At(D,A,C,L);return ni=null,Q}catch(W){if(W===Wi||W===_l)throw W;var ct=xe(29,W,null,D.mode);return ct.lanes=L,ct.return=D,ct}finally{}}}var ai=Qh(!0),Fh=Qh(!1),Ne=H(null),Qe=null;function Vn(t){var e=t.alternate;X(Kt,Kt.current&1),X(Ne,t),Qe===null&&(e===null||Wa.current!==null||e.memoizedState!==null)&&(Qe=t)}function Jh(t){if(t.tag===22){if(X(Kt,Kt.current),X(Ne,t),Qe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Qe=t)}}else Un()}function Un(){X(Kt,Kt.current),X(Ne,Ne.current)}function hn(t){Z(Ne),Qe===t&&(Qe=null),Z(Kt)}var Kt=H(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||ac(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function mu(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:y({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pu={enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Ee(),s=Nn(r);s.payload=e,a!=null&&(s.callback=a),e=zn(t,s,r),e!==null&&(Oe(e,t,r),tr(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Ee(),s=Nn(r);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=zn(t,s,r),e!==null&&(Oe(e,t,r),tr(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ee(),r=Nn(a);r.tag=2,e!=null&&(r.callback=e),e=zn(t,r,a),e!==null&&(Oe(e,t,a),tr(e,t,a))}};function $h(t,e,a,r,s,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):e.prototype&&e.prototype.isPureReactComponent?!Gi(a,r)||!Gi(s,c):!0}function Wh(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&pu.enqueueReplaceState(e,e.state,null)}function xa(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=y({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}var Xl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ih(t){Xl(t)}function tm(t){console.error(t)}function em(t){Xl(t)}function Zl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function nm(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function gu(t,e,a){return a=Nn(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(t,e)},a}function am(t){return t=Nn(t),t.tag=3,t}function im(t,e,a,r){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var c=r.value;t.payload=function(){return s(c)},t.callback=function(){nm(e,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){nm(e,a,r),typeof s!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function zb(t,e,a,r,s){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&Fi(e,a,s,!0),a=Ne.current,a!==null){switch(a.tag){case 13:return Qe===null?Pu():a.alternate===null&&Vt===0&&(Vt=3),a.flags&=-257,a.flags|=65536,a.lanes=s,r===Xs?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),qu(t,r,s)),!1;case 22:return a.flags|=65536,r===Xs?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),qu(t,r,s)),!1}throw Error(o(435,a.tag))}return qu(t,r,s),Pu(),!1}if(vt)return e=Ne.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==Bs&&(t=Error(o(422),{cause:r}),Qi(Re(t,a)))):(r!==Bs&&(e=Error(o(423),{cause:r}),Qi(Re(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=Re(r,a),s=gu(t.stateNode,r,s),Qs(t,s),Vt!==4&&(Vt=2)),!1;var c=Error(o(520),{cause:r});if(c=Re(c,a),pr===null?pr=[c]:pr.push(c),Vt!==4&&(Vt=2),e===null)return!0;r=Re(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=gu(a.stateNode,r,t),Qs(a,t),!1;case 1:if(e=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Yn===null||!Yn.has(c))))return a.flags|=65536,s&=-s,a.lanes|=s,s=am(s),im(s,t,a,r),Qs(a,s),!1}a=a.return}while(a!==null);return!1}var rm=Error(o(461)),Jt=!1;function te(t,e,a,r){e.child=t===null?Fh(e,null,a,r):ai(e,t.child,a,r)}function lm(t,e,a,r,s){a=a.render;var c=e.ref;if("ref"in r){var g={};for(var v in r)v!=="ref"&&(g[v]=r[v])}else g=r;return ya(e),r=Is(t,e,a,g,c,s),v=tu(),t!==null&&!Jt?(eu(t,e,s),mn(t,e,s)):(vt&&v&&Vs(e),e.flags|=1,te(t,e,r,s),e.child)}function om(t,e,a,r,s){if(t===null){var c=a.type;return typeof c=="function"&&!Ns(c)&&c.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=c,sm(t,e,c,r,s)):(t=Ol(a.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(c=t.child,!Eu(t,s)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Gi,a(g,r)&&t.ref===e.ref)return mn(t,e,s)}return e.flags|=1,t=on(c,r),t.ref=e.ref,t.return=e,e.child=t}function sm(t,e,a,r,s){if(t!==null){var c=t.memoizedProps;if(Gi(c,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=c,Eu(t,s))(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,mn(t,e,s)}return yu(t,e,a,r,s)}function um(t,e,a){var r=e.pendingProps,s=r.children,c=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=c!==null?c.baseLanes|a:a,t!==null){for(s=e.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;e.childLanes=c&~r}else e.childLanes=0,e.child=null;return cm(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Cl(e,c!==null?c.cachePool:null),c!==null?sh(e,c):Js(),Jh(e);else return e.lanes=e.childLanes=536870912,cm(t,e,c!==null?c.baseLanes|a:a,a)}else c!==null?(Cl(e,c.cachePool),sh(e,c),Un(),e.memoizedState=null):(t!==null&&Cl(e,null),Js(),Un());return te(t,e,s,a),e.child}function cm(t,e,a,r){var s=Gs();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Cl(e,null),Js(),Jh(e),t!==null&&Fi(t,e,r,!0),null}function Kl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function yu(t,e,a,r,s){return ya(e),a=Is(t,e,a,r,void 0,s),r=tu(),t!==null&&!Jt?(eu(t,e,s),mn(t,e,s)):(vt&&r&&Vs(e),e.flags|=1,te(t,e,a,s),e.child)}function fm(t,e,a,r,s,c){return ya(e),e.updateQueue=null,a=ch(e,r,a,s),uh(t),r=tu(),t!==null&&!Jt?(eu(t,e,c),mn(t,e,c)):(vt&&r&&Vs(e),e.flags|=1,te(t,e,a,c),e.child)}function dm(t,e,a,r,s){if(ya(e),e.stateNode===null){var c=Ka,g=a.contextType;typeof g=="object"&&g!==null&&(c=re(g)),c=new a(r,c),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=pu,e.stateNode=c,c._reactInternals=e,c=e.stateNode,c.props=r,c.state=e.memoizedState,c.refs={},Zs(e),g=a.contextType,c.context=typeof g=="object"&&g!==null?re(g):Ka,c.state=e.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(mu(e,a,g,r),c.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&pu.enqueueReplaceState(c,c.state,null),nr(e,r,c,s),er(),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){c=e.stateNode;var v=e.memoizedProps,S=xa(a,v);c.props=S;var k=c.context,V=a.contextType;g=Ka,typeof V=="object"&&V!==null&&(g=re(V));var P=a.getDerivedStateFromProps;V=typeof P=="function"||typeof c.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,V||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(v||k!==g)&&Wh(e,c,r,g),kn=!1;var N=e.memoizedState;c.state=N,nr(e,r,c,s),er(),k=e.memoizedState,v||N!==k||kn?(typeof P=="function"&&(mu(e,a,P,r),k=e.memoizedState),(S=kn||$h(e,a,S,r,N,k,g))?(V||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=k),c.props=r,c.state=k,c.context=g,r=S):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{c=e.stateNode,Ks(t,e),g=e.memoizedProps,V=xa(a,g),c.props=V,P=e.pendingProps,N=c.context,k=a.contextType,S=Ka,typeof k=="object"&&k!==null&&(S=re(k)),v=a.getDerivedStateFromProps,(k=typeof v=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==P||N!==S)&&Wh(e,c,r,S),kn=!1,N=e.memoizedState,c.state=N,nr(e,r,c,s),er();var z=e.memoizedState;g!==P||N!==z||kn||t!==null&&t.dependencies!==null&&wl(t.dependencies)?(typeof v=="function"&&(mu(e,a,v,r),z=e.memoizedState),(V=kn||$h(e,a,V,r,N,z,S)||t!==null&&t.dependencies!==null&&wl(t.dependencies))?(k||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,z,S),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,z,S)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=z),c.props=r,c.state=z,c.context=S,r=V):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&N===t.memoizedState||(e.flags|=1024),r=!1)}return c=r,Kl(t,e),r=(e.flags&128)!==0,c||r?(c=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),e.flags|=1,t!==null&&r?(e.child=ai(e,t.child,null,s),e.child=ai(e,null,a,s)):te(t,e,a,s),e.memoizedState=c.state,t=e.child):t=mn(t,e,s),t}function hm(t,e,a,r){return Ki(),e.flags|=256,te(t,e,a,r),e.child}var vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function bu(t){return{baseLanes:t,cachePool:th()}}function xu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=ze),t}function mm(t,e,a){var r=e.pendingProps,s=!1,c=(e.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),g&&(s=!0,e.flags&=-129),g=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(s?Vn(e):Un(),vt){var v=jt,S;if(S=v){t:{for(S=v,v=Ke;S.nodeType!==8;){if(!v){v=null;break t}if(S=He(S.nextSibling),S===null){v=null;break t}}v=S}v!==null?(e.memoizedState={dehydrated:v,treeContext:da!==null?{id:sn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},S=xe(18,null,null,0),S.stateNode=v,S.return=e,e.child=S,se=e,jt=null,S=!0):S=!1}S||pa(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return ac(v)?e.lanes=32:e.lanes=536870912,null;hn(e)}return v=r.children,r=r.fallback,s?(Un(),s=e.mode,v=Ql({mode:"hidden",children:v},s),r=fa(r,s,a,null),v.return=e,r.return=e,v.sibling=r,e.child=v,s=e.child,s.memoizedState=bu(a),s.childLanes=xu(t,g,a),e.memoizedState=vu,r):(Vn(e),Su(e,v))}if(S=t.memoizedState,S!==null&&(v=S.dehydrated,v!==null)){if(c)e.flags&256?(Vn(e),e.flags&=-257,e=Tu(t,e,a)):e.memoizedState!==null?(Un(),e.child=t.child,e.flags|=128,e=null):(Un(),s=r.fallback,v=e.mode,r=Ql({mode:"visible",children:r.children},v),s=fa(s,v,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,ai(e,t.child,null,a),r=e.child,r.memoizedState=bu(a),r.childLanes=xu(t,g,a),e.memoizedState=vu,e=s);else if(Vn(e),ac(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var k=g.dgst;g=k,r=Error(o(419)),r.stack="",r.digest=g,Qi({value:r,source:null,stack:null}),e=Tu(t,e,a)}else if(Jt||Fi(t,e,a,!1),g=(a&t.childLanes)!==0,Jt||g){if(g=Dt,g!==null&&(r=a&-a,r=(r&42)!==0?1:is(r),r=(r&(g.suspendedLanes|a))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,Za(t,r),Oe(g,t,r),rm;v.data==="$?"||Pu(),e=Tu(t,e,a)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,jt=He(v.nextSibling),se=e,vt=!0,ma=null,Ke=!1,t!==null&&(_e[ke++]=sn,_e[ke++]=un,_e[ke++]=da,sn=t.id,un=t.overflow,da=e),e=Su(e,r.children),e.flags|=4096);return e}return s?(Un(),s=r.fallback,v=e.mode,S=t.child,k=S.sibling,r=on(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,k!==null?s=on(k,s):(s=fa(s,v,a,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,v=t.child.memoizedState,v===null?v=bu(a):(S=v.cachePool,S!==null?(k=Zt._currentValue,S=S.parent!==k?{parent:k,pool:k}:S):S=th(),v={baseLanes:v.baseLanes|a,cachePool:S}),s.memoizedState=v,s.childLanes=xu(t,g,a),e.memoizedState=vu,r):(Vn(e),a=t.child,t=a.sibling,a=on(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(g=e.deletions,g===null?(e.deletions=[t],e.flags|=16):g.push(t)),e.child=a,e.memoizedState=null,a)}function Su(t,e){return e=Ql({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ql(t,e){return t=xe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tu(t,e,a){return ai(e,t.child,null,a),t=Su(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pm(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ps(t.return,e,a)}function Au(t,e,a,r,s){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:s}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=r,c.tail=a,c.tailMode=s)}function gm(t,e,a){var r=e.pendingProps,s=r.revealOrder,c=r.tail;if(te(t,e,r.children,a),r=Kt.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pm(t,a,e);else if(t.tag===19)pm(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(X(Kt,r),s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&Gl(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),Au(e,!1,s,a,c);break;case"backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Gl(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}Au(e,!0,a,null,c);break;case"together":Au(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Fi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=on(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=on(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function Eu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&wl(t)))}function jb(t,e,a){switch(e.tag){case 3:wt(e,e.stateNode.containerInfo),_n(e,Zt,t.memoizedState.cache),Ki();break;case 27:case 5:Io(e);break;case 4:wt(e,e.stateNode.containerInfo);break;case 10:_n(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Vn(e),e.flags|=128,null):(a&e.child.childLanes)!==0?mm(t,e,a):(Vn(e),t=mn(t,e,a),t!==null?t.sibling:null);Vn(e);break;case 19:var s=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(Fi(t,e,a,!1),r=(a&e.childLanes)!==0),s){if(r)return gm(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),X(Kt,Kt.current),r)break;return null;case 22:case 23:return e.lanes=0,um(t,e,a);case 24:_n(e,Zt,t.memoizedState.cache)}return mn(t,e,a)}function ym(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Jt=!0;else{if(!Eu(t,a)&&(e.flags&128)===0)return Jt=!1,jb(t,e,a);Jt=(t.flags&131072)!==0}else Jt=!1,vt&&(e.flags&1048576)!==0&&Kd(e,Dl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")Ns(r)?(t=xa(r,t),e.tag=1,e=dm(null,e,r,t,a)):(e.tag=0,e=yu(null,e,r,t,a));else{if(r!=null){if(s=r.$$typeof,s===K){e.tag=11,e=lm(null,e,r,t,a);break t}else if(s===lt){e.tag=14,e=om(null,e,r,t,a);break t}}throw e=Xe(r)||r,Error(o(306,e,""))}}return e;case 0:return yu(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,s=xa(r,e.pendingProps),dm(t,e,r,s,a);case 3:t:{if(wt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));r=e.pendingProps;var c=e.memoizedState;s=c.element,Ks(t,e),nr(e,r,null,a);var g=e.memoizedState;if(r=g.cache,_n(e,Zt,r),r!==c.cache&&Hs(e,[Zt],a,!0),er(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},e.updateQueue.baseState=c,e.memoizedState=c,e.flags&256){e=hm(t,e,r,a);break t}else if(r!==s){s=Re(Error(o(424)),e),Qi(s),e=hm(t,e,r,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(jt=He(t.firstChild),se=e,vt=!0,ma=null,Ke=!0,a=Fh(e,null,r,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ki(),r===s){e=mn(t,e,a);break t}te(t,e,r,a)}e=e.child}return e;case 26:return Kl(t,e),t===null?(a=Sp(e.type,null,e.pendingProps,null))?e.memoizedState=a:vt||(a=e.type,t=e.pendingProps,r=so(ot.current).createElement(a),r[ie]=e,r[ce]=t,ne(r,a,t),Ft(r),e.stateNode=r):e.memoizedState=Sp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Io(e),t===null&&vt&&(r=e.stateNode=vp(e.type,e.pendingProps,ot.current),se=e,Ke=!0,s=jt,Zn(e.type)?(ic=s,jt=He(r.firstChild)):jt=s),te(t,e,e.pendingProps.children,a),Kl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((s=r=jt)&&(r=u1(r,e.type,e.pendingProps,Ke),r!==null?(e.stateNode=r,se=e,jt=He(r.firstChild),Ke=!1,s=!0):s=!1),s||pa(e)),Io(e),s=e.type,c=e.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,tc(s,c)?r=null:g!==null&&tc(s,g)&&(e.flags|=32),e.memoizedState!==null&&(s=Is(t,e,Db,null,null,a),Er._currentValue=s),Kl(t,e),te(t,e,r,a),e.child;case 6:return t===null&&vt&&((t=a=jt)&&(a=c1(a,e.pendingProps,Ke),a!==null?(e.stateNode=a,se=e,jt=null,t=!0):t=!1),t||pa(e)),null;case 13:return mm(t,e,a);case 4:return wt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ai(e,null,r,a):te(t,e,r,a),e.child;case 11:return lm(t,e,e.type,e.pendingProps,a);case 7:return te(t,e,e.pendingProps,a),e.child;case 8:return te(t,e,e.pendingProps.children,a),e.child;case 12:return te(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,_n(e,e.type,r.value),te(t,e,r.children,a),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,ya(e),s=re(s),r=r(s),e.flags|=1,te(t,e,r,a),e.child;case 14:return om(t,e,e.type,e.pendingProps,a);case 15:return sm(t,e,e.type,e.pendingProps,a);case 19:return gm(t,e,a);case 31:return r=e.pendingProps,a=e.mode,r={mode:r.mode,children:r.children},t===null?(a=Ql(r,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=on(t.child,r),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return um(t,e,a);case 24:return ya(e),r=re(Zt),t===null?(s=Gs(),s===null&&(s=Dt,c=qs(),s.pooledCache=c,c.refCount++,c!==null&&(s.pooledCacheLanes|=a),s=c),e.memoizedState={parent:r,cache:s},Zs(e),_n(e,Zt,s)):((t.lanes&a)!==0&&(Ks(t,e),nr(e,null,null,a),er()),s=t.memoizedState,c=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),_n(e,Zt,r)):(r=c.cache,_n(e,Zt,r),r!==s.cache&&Hs(e,[Zt],a,!0))),te(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function pn(t){t.flags|=4}function vm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mp(e)){if(e=Ne.current,e!==null&&((mt&4194048)===mt?Qe!==null:(mt&62914560)!==mt&&(mt&536870912)===0||e!==Qe))throw Ii=Xs,eh;t.flags|=8192}}function Fl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Jf():536870912,t.lanes|=e,oi|=e)}function ur(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function Vb(t,e,a){var r=e.pendingProps;switch(Us(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return kt(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),fn(Zt),Dn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?pn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Jd())),kt(e),null;case 26:return a=e.memoizedState,t===null?(pn(e),a!==null?(kt(e),vm(e,a)):(kt(e),e.flags&=-16777217)):a?a!==t.memoizedState?(pn(e),kt(e),vm(e,a)):(kt(e),e.flags&=-16777217):(t.memoizedProps!==r&&pn(e),kt(e),e.flags&=-16777217),null;case 27:ll(e),a=ot.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return kt(e),null}t=tt.current,Zi(e)?Qd(e):(t=vp(s,r,a),e.stateNode=t,pn(e))}return kt(e),null;case 5:if(ll(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return kt(e),null}if(t=tt.current,Zi(e))Qd(e);else{switch(s=so(ot.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(a,{is:r.is}):s.createElement(a)}}t[ie]=e,t[ce]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(ne(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&pn(e)}}return kt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(t=ot.current,Zi(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,s=se,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[ie]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||fp(t.nodeValue,a)),t||pa(e)}else t=so(t).createTextNode(r),t[ie]=e,e.stateNode=t}return kt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Zi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(o(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[ie]=e}else Ki(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else s=Jd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(hn(e),e):(hn(e),null)}if(hn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var c=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==s&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Fl(e,e.updateQueue),kt(e),null;case 4:return Dn(),t===null&&Fu(e.stateNode.containerInfo),kt(e),null;case 10:return fn(e.type),kt(e),null;case 19:if(Z(Kt),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,c=s.rendering,c===null)if(r)ur(s,!1);else{if(Vt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(c=Gl(t),c!==null){for(e.flags|=128,ur(s,!1),t=c.updateQueue,e.updateQueue=t,Fl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Zd(a,t),a=a.sibling;return X(Kt,Kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>Wl&&(e.flags|=128,r=!0,ur(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(c),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Fl(e,t),ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!vt)return kt(e),null}else 2*Ze()-s.renderingStartTime>Wl&&a!==536870912&&(e.flags|=128,r=!0,ur(s,!1),e.lanes=4194304);s.isBackwards?(c.sibling=e.child,e.child=c):(t=s.last,t!==null?t.sibling=c:e.child=c,s.last=c)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,t=Kt.current,X(Kt,r?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return hn(e),$s(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),a=e.updateQueue,a!==null&&Fl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Z(va),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fn(Zt),kt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Ub(t,e){switch(Us(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fn(Zt),Dn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ll(e),null;case 13:if(hn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Ki()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(Kt),null;case 4:return Dn(),null;case 10:return fn(e.type),null;case 22:case 23:return hn(e),$s(),t!==null&&Z(va),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fn(Zt),null;case 25:return null;default:return null}}function bm(t,e){switch(Us(e),e.tag){case 3:fn(Zt),Dn();break;case 26:case 27:case 5:ll(e);break;case 4:Dn();break;case 13:hn(e);break;case 19:Z(Kt);break;case 10:fn(e.type);break;case 22:case 23:hn(e),$s(),t!==null&&Z(va);break;case 24:fn(Zt)}}function cr(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==s)}}catch(v){Ot(e,e.return,v)}}function Bn(t,e,a){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var c=s.next;r=c;do{if((r.tag&t)===t){var g=r.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,s=e;var S=a,k=v;try{k()}catch(V){Ot(s,S,V)}}}r=r.next}while(r!==c)}}catch(V){Ot(e,e.return,V)}}function xm(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{oh(e,a)}catch(r){Ot(t,t.return,r)}}}function Sm(t,e,a){a.props=xa(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ot(t,e,r)}}function fr(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(s){Ot(t,e,s)}}function Fe(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(s){Ot(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Ot(t,e,s)}else a.current=null}function Tm(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(s){Ot(t,t.return,s)}}function Ou(t,e,a){try{var r=t.stateNode;i1(r,t.type,a,e),r[ce]=e}catch(s){Ot(t,t.return,s)}}function Am(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Zn(t.type)||t.tag===4}function Mu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Zn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Du(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=oo));else if(r!==4&&(r===27&&Zn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Du(t,e,a),t=t.sibling;t!==null;)Du(t,e,a),t=t.sibling}function Jl(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&(r===27&&Zn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Jl(t,e,a),t=t.sibling;t!==null;)Jl(t,e,a),t=t.sibling}function Em(t){var e=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ne(e,r,a),e[ie]=t,e[ce]=a}catch(c){Ot(t,t.return,c)}}var gn=!1,Lt=!1,wu=!1,Om=typeof WeakSet=="function"?WeakSet:Set,$t=null;function Bb(t,e){if(t=t.containerInfo,Wu=po,t=Vd(t),Ms(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var s=r.anchorOffset,c=r.focusNode;r=r.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break t}var g=0,v=-1,S=-1,k=0,V=0,P=t,N=null;e:for(;;){for(var z;P!==a||s!==0&&P.nodeType!==3||(v=g+s),P!==c||r!==0&&P.nodeType!==3||(S=g+r),P.nodeType===3&&(g+=P.nodeValue.length),(z=P.firstChild)!==null;)N=P,P=z;for(;;){if(P===t)break e;if(N===a&&++k===s&&(v=g),N===c&&++V===r&&(S=g),(z=P.nextSibling)!==null)break;P=N,N=P.parentNode}P=z}a=v===-1||S===-1?null:{start:v,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Iu={focusedElem:t,selectionRange:a},po=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,c=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&c!==null){t=void 0,a=e,s=c.memoizedProps,c=c.memoizedState,r=a.stateNode;try{var it=xa(a.type,s,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(it,c),r.__reactInternalSnapshotBeforeUpdate=t}catch(et){Ot(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)nc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":nc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function Mm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ln(t,a),r&4&&cr(5,a);break;case 1:if(Ln(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(g){Ot(a,a.return,g)}else{var s=xa(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ot(a,a.return,g)}}r&64&&xm(a),r&512&&fr(a,a.return);break;case 3:if(Ln(t,a),r&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{oh(t,e)}catch(g){Ot(a,a.return,g)}}break;case 27:e===null&&r&4&&Em(a);case 26:case 5:Ln(t,a),e===null&&r&4&&Tm(a),r&512&&fr(a,a.return);break;case 12:Ln(t,a);break;case 13:Ln(t,a),r&4&&Rm(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Kb.bind(null,a),f1(t,a))));break;case 22:if(r=a.memoizedState!==null||gn,!r){e=e!==null&&e.memoizedState!==null||Lt,s=gn;var c=Lt;gn=r,(Lt=e)&&!c?Pn(t,a,(a.subtreeFlags&8772)!==0):Ln(t,a),gn=s,Lt=c}break;case 30:break;default:Ln(t,a)}}function Dm(t){var e=t.alternate;e!==null&&(t.alternate=null,Dm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&os(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Rt=null,he=!1;function yn(t,e,a){for(a=a.child;a!==null;)wm(t,e,a),a=a.sibling}function wm(t,e,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(ki,a)}catch{}switch(a.tag){case 26:Lt||Fe(a,e),yn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Lt||Fe(a,e);var r=Rt,s=he;Zn(a.type)&&(Rt=a.stateNode,he=!1),yn(t,e,a),xr(a.stateNode),Rt=r,he=s;break;case 5:Lt||Fe(a,e);case 6:if(r=Rt,s=he,Rt=null,yn(t,e,a),Rt=r,he=s,Rt!==null)if(he)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(a.stateNode)}catch(c){Ot(a,e,c)}else try{Rt.removeChild(a.stateNode)}catch(c){Ot(a,e,c)}break;case 18:Rt!==null&&(he?(t=Rt,gp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),wr(t)):gp(Rt,a.stateNode));break;case 4:r=Rt,s=he,Rt=a.stateNode.containerInfo,he=!0,yn(t,e,a),Rt=r,he=s;break;case 0:case 11:case 14:case 15:Lt||Bn(2,a,e),Lt||Bn(4,a,e),yn(t,e,a);break;case 1:Lt||(Fe(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Sm(a,e,r)),yn(t,e,a);break;case 21:yn(t,e,a);break;case 22:Lt=(r=Lt)||a.memoizedState!==null,yn(t,e,a),Lt=r;break;default:yn(t,e,a)}}function Rm(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{wr(t)}catch(a){Ot(e,e.return,a)}}function Lb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Om),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Om),e;default:throw Error(o(435,t.tag))}}function Ru(t,e){var a=Lb(t);e.forEach(function(r){var s=Qb.bind(null,t,r);a.has(r)||(a.add(r),r.then(s,s))})}function Se(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var s=a[r],c=t,g=e,v=g;t:for(;v!==null;){switch(v.tag){case 27:if(Zn(v.type)){Rt=v.stateNode,he=!1;break t}break;case 5:Rt=v.stateNode,he=!1;break t;case 3:case 4:Rt=v.stateNode.containerInfo,he=!0;break t}v=v.return}if(Rt===null)throw Error(o(160));wm(c,g,s),Rt=null,he=!1,c=s.alternate,c!==null&&(c.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Cm(e,t),e=e.sibling}var Pe=null;function Cm(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Se(e,t),Te(t),r&4&&(Bn(3,t,t.return),cr(3,t),Bn(5,t,t.return));break;case 1:Se(e,t),Te(t),r&512&&(Lt||a===null||Fe(a,a.return)),r&64&&gn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var s=Pe;if(Se(e,t),Te(t),r&512&&(Lt||a===null||Fe(a,a.return)),r&4){var c=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":c=s.getElementsByTagName("title")[0],(!c||c[ji]||c[ie]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=s.createElement(r),s.head.insertBefore(c,s.querySelector("head > title"))),ne(c,r,a),c[ie]=t,Ft(c),r=c;break t;case"link":var g=Ep("link","href",s).get(r+(a.href||""));if(g){for(var v=0;v<g.length;v++)if(c=g[v],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(v,1);break e}}c=s.createElement(r),ne(c,r,a),s.head.appendChild(c);break;case"meta":if(g=Ep("meta","content",s).get(r+(a.content||""))){for(v=0;v<g.length;v++)if(c=g[v],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(v,1);break e}}c=s.createElement(r),ne(c,r,a),s.head.appendChild(c);break;default:throw Error(o(468,r))}c[ie]=t,Ft(c),r=c}t.stateNode=r}else Op(s,t.type,t.stateNode);else t.stateNode=Ap(s,r,t.memoizedProps);else c!==r?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,r===null?Op(s,t.type,t.stateNode):Ap(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Ou(t,t.memoizedProps,a.memoizedProps)}break;case 27:Se(e,t),Te(t),r&512&&(Lt||a===null||Fe(a,a.return)),a!==null&&r&4&&Ou(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Se(e,t),Te(t),r&512&&(Lt||a===null||Fe(a,a.return)),t.flags&32){s=t.stateNode;try{La(s,"")}catch(z){Ot(t,t.return,z)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,Ou(t,s,a!==null?a.memoizedProps:s)),r&1024&&(wu=!0);break;case 6:if(Se(e,t),Te(t),r&4){if(t.stateNode===null)throw Error(o(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(z){Ot(t,t.return,z)}}break;case 3:if(fo=null,s=Pe,Pe=uo(e.containerInfo),Se(e,t),Pe=s,Te(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{wr(e.containerInfo)}catch(z){Ot(t,t.return,z)}wu&&(wu=!1,_m(t));break;case 4:r=Pe,Pe=uo(t.stateNode.containerInfo),Se(e,t),Te(t),Pe=r;break;case 12:Se(e,t),Te(t);break;case 13:Se(e,t),Te(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ju=Ze()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ru(t,r)));break;case 22:s=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,k=gn,V=Lt;if(gn=k||s,Lt=V||S,Se(e,t),Lt=V,gn=k,Te(t),r&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(a===null||S||gn||Lt||Sa(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(c=S.stateNode,s)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=S.stateNode;var P=S.memoizedProps.style,N=P!=null&&P.hasOwnProperty("display")?P.display:null;v.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(z){Ot(S,S.return,z)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(z){Ot(S,S.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ru(t,a))));break;case 19:Se(e,t),Te(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Ru(t,r)));break;case 30:break;case 21:break;default:Se(e,t),Te(t)}}function Te(t){var e=t.flags;if(e&2){try{for(var a,r=t.return;r!==null;){if(Am(r)){a=r;break}r=r.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,c=Mu(t);Jl(t,c,s);break;case 5:var g=a.stateNode;a.flags&32&&(La(g,""),a.flags&=-33);var v=Mu(t);Jl(t,v,g);break;case 3:case 4:var S=a.stateNode.containerInfo,k=Mu(t);Du(t,k,S);break;default:throw Error(o(161))}}catch(V){Ot(t,t.return,V)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function _m(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;_m(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ln(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mm(t,e.alternate,e),e=e.sibling}function Sa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Bn(4,e,e.return),Sa(e);break;case 1:Fe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Sm(e,e.return,a),Sa(e);break;case 27:xr(e.stateNode);case 26:case 5:Fe(e,e.return),Sa(e);break;case 22:e.memoizedState===null&&Sa(e);break;case 30:Sa(e);break;default:Sa(e)}t=t.sibling}}function Pn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,c=e,g=c.flags;switch(c.tag){case 0:case 11:case 15:Pn(s,c,a),cr(4,c);break;case 1:if(Pn(s,c,a),r=c,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(k){Ot(r,r.return,k)}if(r=c,s=r.updateQueue,s!==null){var v=r.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)lh(S[s],v)}catch(k){Ot(r,r.return,k)}}a&&g&64&&xm(c),fr(c,c.return);break;case 27:Em(c);case 26:case 5:Pn(s,c,a),a&&r===null&&g&4&&Tm(c),fr(c,c.return);break;case 12:Pn(s,c,a);break;case 13:Pn(s,c,a),a&&g&4&&Rm(s,c);break;case 22:c.memoizedState===null&&Pn(s,c,a),fr(c,c.return);break;case 30:break;default:Pn(s,c,a)}e=e.sibling}}function Cu(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ji(a))}function _u(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ji(t))}function Je(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)km(t,e,a,r),e=e.sibling}function km(t,e,a,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Je(t,e,a,r),s&2048&&cr(9,e);break;case 1:Je(t,e,a,r);break;case 3:Je(t,e,a,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ji(t)));break;case 12:if(s&2048){Je(t,e,a,r),t=e.stateNode;try{var c=e.memoizedProps,g=c.id,v=c.onPostCommit;typeof v=="function"&&v(g,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ot(e,e.return,S)}}else Je(t,e,a,r);break;case 13:Je(t,e,a,r);break;case 23:break;case 22:c=e.stateNode,g=e.alternate,e.memoizedState!==null?c._visibility&2?Je(t,e,a,r):dr(t,e):c._visibility&2?Je(t,e,a,r):(c._visibility|=2,ii(t,e,a,r,(e.subtreeFlags&10256)!==0)),s&2048&&Cu(g,e);break;case 24:Je(t,e,a,r),s&2048&&_u(e.alternate,e);break;default:Je(t,e,a,r)}}function ii(t,e,a,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var c=t,g=e,v=a,S=r,k=g.flags;switch(g.tag){case 0:case 11:case 15:ii(c,g,v,S,s),cr(8,g);break;case 23:break;case 22:var V=g.stateNode;g.memoizedState!==null?V._visibility&2?ii(c,g,v,S,s):dr(c,g):(V._visibility|=2,ii(c,g,v,S,s)),s&&k&2048&&Cu(g.alternate,g);break;case 24:ii(c,g,v,S,s),s&&k&2048&&_u(g.alternate,g);break;default:ii(c,g,v,S,s)}e=e.sibling}}function dr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,s=r.flags;switch(r.tag){case 22:dr(a,r),s&2048&&Cu(r.alternate,r);break;case 24:dr(a,r),s&2048&&_u(r.alternate,r);break;default:dr(a,r)}e=e.sibling}}var hr=8192;function ri(t){if(t.subtreeFlags&hr)for(t=t.child;t!==null;)Nm(t),t=t.sibling}function Nm(t){switch(t.tag){case 26:ri(t),t.flags&hr&&t.memoizedState!==null&&E1(Pe,t.memoizedState,t.memoizedProps);break;case 5:ri(t);break;case 3:case 4:var e=Pe;Pe=uo(t.stateNode.containerInfo),ri(t),Pe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=hr,hr=16777216,ri(t),hr=e):ri(t));break;default:ri(t)}}function zm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function mr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];$t=r,Vm(r,t)}zm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jm(t),t=t.sibling}function jm(t){switch(t.tag){case 0:case 11:case 15:mr(t),t.flags&2048&&Bn(9,t,t.return);break;case 3:mr(t);break;case 12:mr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,$l(t)):mr(t);break;default:mr(t)}}function $l(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];$t=r,Vm(r,t)}zm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Bn(8,e,e.return),$l(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,$l(e));break;default:$l(e)}t=t.sibling}}function Vm(t,e){for(;$t!==null;){var a=$t;switch(a.tag){case 0:case 11:case 15:Bn(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ji(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,$t=r;else t:for(a=t;$t!==null;){r=$t;var s=r.sibling,c=r.return;if(Dm(r),r===a){$t=null;break t}if(s!==null){s.return=c,$t=s;break t}$t=c}}}var Pb={getCacheForType:function(t){var e=re(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Hb=typeof WeakMap=="function"?WeakMap:Map,bt=0,Dt=null,ft=null,mt=0,xt=0,Ae=null,Hn=!1,li=!1,ku=!1,vn=0,Vt=0,qn=0,Ta=0,Nu=0,ze=0,oi=0,pr=null,me=null,zu=!1,ju=0,Wl=1/0,Il=null,Yn=null,ee=0,Gn=null,si=null,ui=0,Vu=0,Uu=null,Um=null,gr=0,Bu=null;function Ee(){if((bt&2)!==0&&mt!==0)return mt&-mt;if(U.T!==null){var t=Ja;return t!==0?t:Xu()}return If()}function Bm(){ze===0&&(ze=(mt&536870912)===0||vt?Ff():536870912);var t=Ne.current;return t!==null&&(t.flags|=32),ze}function Oe(t,e,a){(t===Dt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(ci(t,0),Xn(t,mt,ze,!1)),zi(t,a),((bt&2)===0||t!==Dt)&&(t===Dt&&((bt&2)===0&&(Ta|=a),Vt===4&&Xn(t,mt,ze,!1)),$e(t))}function Lm(t,e,a){if((bt&6)!==0)throw Error(o(327));var r=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Ni(t,e),s=r?Gb(t,e):Hu(t,e,!0),c=r;do{if(s===0){li&&!r&&Xn(t,e,0,!1);break}else{if(a=t.current.alternate,c&&!qb(a)){s=Hu(t,e,!1),c=!1;continue}if(s===2){if(c=e,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){e=g;t:{var v=t;s=pr;var S=v.current.memoizedState.isDehydrated;if(S&&(ci(v,g).flags|=256),g=Hu(v,g,!1),g!==2){if(ku&&!S){v.errorRecoveryDisabledLanes|=c,Ta|=c,s=4;break t}c=me,me=s,c!==null&&(me===null?me=c:me.push.apply(me,c))}s=g}if(c=!1,s!==2)continue}}if(s===1){ci(t,0),Xn(t,e,0,!0);break}t:{switch(r=t,c=s,c){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Xn(r,e,ze,!Hn);break t;case 2:me=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(s=ju+300-Ze(),10<s)){if(Xn(r,e,ze,!Hn),cl(r,0,!0)!==0)break t;r.timeoutHandle=mp(Pm.bind(null,r,a,me,Il,zu,e,ze,Ta,oi,Hn,c,2,-0,0),s);break t}Pm(r,a,me,Il,zu,e,ze,Ta,oi,Hn,c,0,-0,0)}}break}while(!0);$e(t)}function Pm(t,e,a,r,s,c,g,v,S,k,V,P,N,z){if(t.timeoutHandle=-1,P=e.subtreeFlags,(P&8192||(P&16785408)===16785408)&&(Ar={stylesheets:null,count:0,unsuspend:A1},Nm(e),P=O1(),P!==null)){t.cancelPendingCommit=P(Km.bind(null,t,e,c,a,r,s,g,v,S,V,1,N,z)),Xn(t,c,g,!k);return}Km(t,e,c,a,r,s,g,v,S)}function qb(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var s=a[r],c=s.getSnapshot;s=s.value;try{if(!be(c(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e,a,r){e&=~Nu,e&=~Ta,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var c=31-ve(s),g=1<<c;r[c]=-1,s&=~g}a!==0&&$f(t,a,e)}function to(){return(bt&6)===0?(yr(0),!1):!0}function Lu(){if(ft!==null){if(xt===0)var t=ft.return;else t=ft,cn=ga=null,nu(t),ni=null,or=0,t=ft;for(;t!==null;)bm(t.alternate,t),t=t.return;ft=null}}function ci(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,l1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Lu(),Dt=t,ft=a=on(t.current,null),mt=e,xt=0,Ae=null,Hn=!1,li=Ni(t,e),ku=!1,oi=ze=Nu=Ta=qn=Vt=0,me=pr=null,zu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-ve(r),c=1<<s;e|=t[s],r&=~c}return vn=e,Tl(),a}function Hm(t,e){ut=null,U.H=Hl,e===Wi||e===_l?(e=ih(),xt=3):e===eh?(e=ih(),xt=4):xt=e===rm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ae=e,ft===null&&(Vt=1,Zl(t,Re(e,t.current)))}function qm(){var t=U.H;return U.H=Hl,t===null?Hl:t}function Ym(){var t=U.A;return U.A=Pb,t}function Pu(){Vt=4,Hn||(mt&4194048)!==mt&&Ne.current!==null||(li=!0),(qn&134217727)===0&&(Ta&134217727)===0||Dt===null||Xn(Dt,mt,ze,!1)}function Hu(t,e,a){var r=bt;bt|=2;var s=qm(),c=Ym();(Dt!==t||mt!==e)&&(Il=null,ci(t,e)),e=!1;var g=Vt;t:do try{if(xt!==0&&ft!==null){var v=ft,S=Ae;switch(xt){case 8:Lu(),g=6;break t;case 3:case 2:case 9:case 6:Ne.current===null&&(e=!0);var k=xt;if(xt=0,Ae=null,fi(t,v,S,k),a&&li){g=0;break t}break;default:k=xt,xt=0,Ae=null,fi(t,v,S,k)}}Yb(),g=Vt;break}catch(V){Hm(t,V)}while(!0);return e&&t.shellSuspendCounter++,cn=ga=null,bt=r,U.H=s,U.A=c,ft===null&&(Dt=null,mt=0,Tl()),g}function Yb(){for(;ft!==null;)Gm(ft)}function Gb(t,e){var a=bt;bt|=2;var r=qm(),s=Ym();Dt!==t||mt!==e?(Il=null,Wl=Ze()+500,ci(t,e)):li=Ni(t,e);t:do try{if(xt!==0&&ft!==null){e=ft;var c=Ae;e:switch(xt){case 1:xt=0,Ae=null,fi(t,e,c,1);break;case 2:case 9:if(nh(c)){xt=0,Ae=null,Xm(e);break}e=function(){xt!==2&&xt!==9||Dt!==t||(xt=7),$e(t)},c.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:nh(c)?(xt=0,Ae=null,Xm(e)):(xt=0,Ae=null,fi(t,e,c,7));break;case 5:var g=null;switch(ft.tag){case 26:g=ft.memoizedState;case 5:case 27:var v=ft;if(!g||Mp(g)){xt=0,Ae=null;var S=v.sibling;if(S!==null)ft=S;else{var k=v.return;k!==null?(ft=k,eo(k)):ft=null}break e}}xt=0,Ae=null,fi(t,e,c,5);break;case 6:xt=0,Ae=null,fi(t,e,c,6);break;case 8:Lu(),Vt=6;break t;default:throw Error(o(462))}}Xb();break}catch(V){Hm(t,V)}while(!0);return cn=ga=null,U.H=r,U.A=s,bt=a,ft!==null?0:(Dt=null,mt=0,Tl(),Vt)}function Xb(){for(;ft!==null&&!hv();)Gm(ft)}function Gm(t){var e=ym(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?eo(t):ft=e}function Xm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=fm(a,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=fm(a,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:nu(e);default:bm(a,e),e=ft=Zd(e,vn),e=ym(a,e,vn)}t.memoizedProps=t.pendingProps,e===null?eo(t):ft=e}function fi(t,e,a,r){cn=ga=null,nu(e),ni=null,or=0;var s=e.return;try{if(zb(t,s,e,a,mt)){Vt=1,Zl(t,Re(a,t.current)),ft=null;return}}catch(c){if(s!==null)throw ft=s,c;Vt=1,Zl(t,Re(a,t.current)),ft=null;return}e.flags&32768?(vt||r===1?t=!0:li||(mt&536870912)!==0?t=!1:(Hn=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ne.current,r!==null&&r.tag===13&&(r.flags|=16384))),Zm(e,t)):eo(e)}function eo(t){var e=t;do{if((e.flags&32768)!==0){Zm(e,Hn);return}t=e.return;var a=Vb(e.alternate,e,vn);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Vt===0&&(Vt=5)}function Zm(t,e){do{var a=Ub(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Vt=6,ft=null}function Km(t,e,a,r,s,c,g,v,S){t.cancelPendingCommit=null;do no();while(ee!==0);if((bt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(c=e.lanes|e.childLanes,c|=_s,Av(t,a,c,g,v,S),t===Dt&&(ft=Dt=null,mt=0),si=e,Gn=t,ui=a,Vu=c,Uu=s,Um=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Fb(ol,function(){return Wm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,s=G.p,G.p=2,g=bt,bt|=4;try{Bb(t,e,a)}finally{bt=g,G.p=s,U.T=r}}ee=1,Qm(),Fm(),Jm()}}function Qm(){if(ee===1){ee=0;var t=Gn,e=si,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=G.p;G.p=2;var s=bt;bt|=4;try{Cm(e,t);var c=Iu,g=Vd(t.containerInfo),v=c.focusedElem,S=c.selectionRange;if(g!==v&&v&&v.ownerDocument&&jd(v.ownerDocument.documentElement,v)){if(S!==null&&Ms(v)){var k=S.start,V=S.end;if(V===void 0&&(V=k),"selectionStart"in v)v.selectionStart=k,v.selectionEnd=Math.min(V,v.value.length);else{var P=v.ownerDocument||document,N=P&&P.defaultView||window;if(N.getSelection){var z=N.getSelection(),it=v.textContent.length,et=Math.min(S.start,it),At=S.end===void 0?et:Math.min(S.end,it);!z.extend&&et>At&&(g=At,At=et,et=g);var D=zd(v,et),A=zd(v,At);if(D&&A&&(z.rangeCount!==1||z.anchorNode!==D.node||z.anchorOffset!==D.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var C=P.createRange();C.setStart(D.node,D.offset),z.removeAllRanges(),et>At?(z.addRange(C),z.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),z.addRange(C))}}}}for(P=[],z=v;z=z.parentNode;)z.nodeType===1&&P.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<P.length;v++){var L=P[v];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}po=!!Wu,Iu=Wu=null}finally{bt=s,G.p=r,U.T=a}}t.current=e,ee=2}}function Fm(){if(ee===2){ee=0;var t=Gn,e=si,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=G.p;G.p=2;var s=bt;bt|=4;try{Mm(t,e.alternate,e)}finally{bt=s,G.p=r,U.T=a}}ee=3}}function Jm(){if(ee===4||ee===3){ee=0,mv();var t=Gn,e=si,a=ui,r=Um;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ee=5:(ee=0,si=Gn=null,$m(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Yn=null),rs(a),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=U.T,s=G.p,G.p=2,U.T=null;try{for(var c=t.onRecoverableError,g=0;g<r.length;g++){var v=r[g];c(v.value,{componentStack:v.stack})}}finally{U.T=e,G.p=s}}(ui&3)!==0&&no(),$e(t),s=t.pendingLanes,(a&4194090)!==0&&(s&42)!==0?t===Bu?gr++:(gr=0,Bu=t):gr=0,yr(0)}}function $m(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ji(e)))}function no(t){return Qm(),Fm(),Jm(),Wm()}function Wm(){if(ee!==5)return!1;var t=Gn,e=Vu;Vu=0;var a=rs(ui),r=U.T,s=G.p;try{G.p=32>a?32:a,U.T=null,a=Uu,Uu=null;var c=Gn,g=ui;if(ee=0,si=Gn=null,ui=0,(bt&6)!==0)throw Error(o(331));var v=bt;if(bt|=4,jm(c.current),km(c,c.current,g,a),bt=v,yr(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(ki,c)}catch{}return!0}finally{G.p=s,U.T=r,$m(t,e)}}function Im(t,e,a){e=Re(a,e),e=gu(t.stateNode,e,2),t=zn(t,e,2),t!==null&&(zi(t,2),$e(t))}function Ot(t,e,a){if(t.tag===3)Im(t,t,a);else for(;e!==null;){if(e.tag===3){Im(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Re(a,t),a=am(2),r=zn(e,a,2),r!==null&&(im(a,r,e,t),zi(r,2),$e(r));break}}e=e.return}}function qu(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Hb;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(a)||(ku=!0,s.add(a),t=Zb.bind(null,t,e,a),e.then(t,t))}function Zb(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Dt===t&&(mt&a)===a&&(Vt===4||Vt===3&&(mt&62914560)===mt&&300>Ze()-ju?(bt&2)===0&&ci(t,0):Nu|=a,oi===mt&&(oi=0)),$e(t)}function tp(t,e){e===0&&(e=Jf()),t=Za(t,e),t!==null&&(zi(t,e),$e(t))}function Kb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),tp(t,a)}function Qb(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),tp(t,a)}function Fb(t,e){return es(t,e)}var ao=null,di=null,Yu=!1,io=!1,Gu=!1,Aa=0;function $e(t){t!==di&&t.next===null&&(di===null?ao=di=t:di=di.next=t),io=!0,Yu||(Yu=!0,$b())}function yr(t,e){if(!Gu&&io){Gu=!0;do for(var a=!1,r=ao;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var c=0;else{var g=r.suspendedLanes,v=r.pingedLanes;c=(1<<31-ve(42|t)+1)-1,c&=s&~(g&~v),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,ip(r,c))}else c=mt,c=cl(r,r===Dt?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ni(r,c)||(a=!0,ip(r,c));r=r.next}while(a);Gu=!1}}function Jb(){ep()}function ep(){io=Yu=!1;var t=0;Aa!==0&&(r1()&&(t=Aa),Aa=0);for(var e=Ze(),a=null,r=ao;r!==null;){var s=r.next,c=np(r,e);c===0?(r.next=null,a===null?ao=s:a.next=s,s===null&&(di=a)):(a=r,(t!==0||(c&3)!==0)&&(io=!0)),r=s}yr(t)}function np(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-ve(c),v=1<<g,S=s[g];S===-1?((v&a)===0||(v&r)!==0)&&(s[g]=Tv(v,e)):S<=e&&(t.expiredLanes|=v),c&=~v}if(e=Dt,a=mt,a=cl(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&ns(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ni(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&ns(r),rs(a)){case 2:case 8:a=Kf;break;case 32:a=ol;break;case 268435456:a=Qf;break;default:a=ol}return r=ap.bind(null,t),a=es(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&ns(r),t.callbackPriority=2,t.callbackNode=null,2}function ap(t,e){if(ee!==0&&ee!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(no()&&t.callbackNode!==a)return null;var r=mt;return r=cl(t,t===Dt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Lm(t,r,e),np(t,Ze()),t.callbackNode!=null&&t.callbackNode===a?ap.bind(null,t):null)}function ip(t,e){if(no())return null;Lm(t,e,!0)}function $b(){o1(function(){(bt&6)!==0?es(Zf,Jb):ep()})}function Xu(){return Aa===0&&(Aa=Ff()),Aa}function rp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:pl(""+t)}function lp(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Wb(t,e,a,r,s){if(e==="submit"&&a&&a.stateNode===s){var c=rp((s[ce]||null).action),g=r.submitter;g&&(e=(e=g[ce]||null)?rp(e.formAction):g.getAttribute("formAction"),e!==null&&(c=e,g=null));var v=new bl("action","action",null,r,s);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var S=g?lp(s,g):new FormData(s);fu(a,{pending:!0,data:S,method:s.method,action:c},null,S)}}else typeof c=="function"&&(v.preventDefault(),S=g?lp(s,g):new FormData(s),fu(a,{pending:!0,data:S,method:s.method,action:c},c,S))},currentTarget:s}]})}}for(var Zu=0;Zu<Cs.length;Zu++){var Ku=Cs[Zu],Ib=Ku.toLowerCase(),t1=Ku[0].toUpperCase()+Ku.slice(1);Le(Ib,"on"+t1)}Le(Ld,"onAnimationEnd"),Le(Pd,"onAnimationIteration"),Le(Hd,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(yb,"onTransitionRun"),Le(vb,"onTransitionStart"),Le(bb,"onTransitionCancel"),Le(qd,"onTransitionEnd"),Va("onMouseEnter",["mouseout","mouseover"]),Va("onMouseLeave",["mouseout","mouseover"]),Va("onPointerEnter",["pointerout","pointerover"]),Va("onPointerLeave",["pointerout","pointerover"]),oa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oa("onBeforeInput",["compositionend","keypress","textInput","paste"]),oa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vr));function op(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],s=r.event;r=r.listeners;t:{var c=void 0;if(e)for(var g=r.length-1;0<=g;g--){var v=r[g],S=v.instance,k=v.currentTarget;if(v=v.listener,S!==c&&s.isPropagationStopped())break t;c=v,s.currentTarget=k;try{c(s)}catch(V){Xl(V)}s.currentTarget=null,c=S}else for(g=0;g<r.length;g++){if(v=r[g],S=v.instance,k=v.currentTarget,v=v.listener,S!==c&&s.isPropagationStopped())break t;c=v,s.currentTarget=k;try{c(s)}catch(V){Xl(V)}s.currentTarget=null,c=S}}}}function dt(t,e){var a=e[ls];a===void 0&&(a=e[ls]=new Set);var r=t+"__bubble";a.has(r)||(sp(e,t,2,!1),a.add(r))}function Qu(t,e,a){var r=0;e&&(r|=4),sp(a,t,r,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Fu(t){if(!t[ro]){t[ro]=!0,ed.forEach(function(a){a!=="selectionchange"&&(e1.has(a)||Qu(a,!1,t),Qu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,Qu("selectionchange",!1,e))}}function sp(t,e,a,r){switch(kp(e)){case 2:var s=w1;break;case 8:s=R1;break;default:s=uc}a=s.bind(null,e,a,t),s=void 0,!ys||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function Ju(t,e,a,r,s){var c=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var v=r.stateNode.containerInfo;if(v===s)break;if(g===4)for(g=r.return;g!==null;){var S=g.tag;if((S===3||S===4)&&g.stateNode.containerInfo===s)return;g=g.return}for(;v!==null;){if(g=Na(v),g===null)return;if(S=g.tag,S===5||S===6||S===26||S===27){r=c=g;continue t}v=v.parentNode}}r=r.return}pd(function(){var k=c,V=ps(a),P=[];t:{var N=Yd.get(t);if(N!==void 0){var z=bl,it=t;switch(t){case"keypress":if(yl(a)===0)break t;case"keydown":case"keyup":z=Fv;break;case"focusin":it="focus",z=Ss;break;case"focusout":it="blur",z=Ss;break;case"beforeblur":case"afterblur":z=Ss;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Wv;break;case Ld:case Pd:case Hd:z=Pv;break;case qd:z=tb;break;case"scroll":case"scrollend":z=jv;break;case"wheel":z=nb;break;case"copy":case"cut":case"paste":z=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=xd;break;case"toggle":case"beforetoggle":z=ib}var et=(e&4)!==0,At=!et&&(t==="scroll"||t==="scrollend"),D=et?N!==null?N+"Capture":null:N;et=[];for(var A=k,C;A!==null;){var L=A;if(C=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||C===null||D===null||(L=Ui(A,D),L!=null&&et.push(br(A,L,C))),At)break;A=A.return}0<et.length&&(N=new z(N,it,null,a,V),P.push({event:N,listeners:et}))}}if((e&7)===0){t:{if(N=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",N&&a!==ms&&(it=a.relatedTarget||a.fromElement)&&(Na(it)||it[ka]))break t;if((z||N)&&(N=V.window===V?V:(N=V.ownerDocument)?N.defaultView||N.parentWindow:window,z?(it=a.relatedTarget||a.toElement,z=k,it=it?Na(it):null,it!==null&&(At=f(it),et=it.tag,it!==At||et!==5&&et!==27&&et!==6)&&(it=null)):(z=null,it=k),z!==it)){if(et=vd,L="onMouseLeave",D="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(et=xd,L="onPointerLeave",D="onPointerEnter",A="pointer"),At=z==null?N:Vi(z),C=it==null?N:Vi(it),N=new et(L,A+"leave",z,a,V),N.target=At,N.relatedTarget=C,L=null,Na(V)===k&&(et=new et(D,A+"enter",it,a,V),et.target=C,et.relatedTarget=At,L=et),At=L,z&&it)e:{for(et=z,D=it,A=0,C=et;C;C=hi(C))A++;for(C=0,L=D;L;L=hi(L))C++;for(;0<A-C;)et=hi(et),A--;for(;0<C-A;)D=hi(D),C--;for(;A--;){if(et===D||D!==null&&et===D.alternate)break e;et=hi(et),D=hi(D)}et=null}else et=null;z!==null&&up(P,N,z,et,!1),it!==null&&At!==null&&up(P,At,it,et,!0)}}t:{if(N=k?Vi(k):window,z=N.nodeName&&N.nodeName.toLowerCase(),z==="select"||z==="input"&&N.type==="file")var Q=wd;else if(Md(N))if(Rd)Q=mb;else{Q=db;var ct=fb}else z=N.nodeName,!z||z.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?k&&hs(k.elementType)&&(Q=wd):Q=hb;if(Q&&(Q=Q(t,k))){Dd(P,Q,a,V);break t}ct&&ct(t,N,k),t==="focusout"&&k&&N.type==="number"&&k.memoizedProps.value!=null&&ds(N,"number",N.value)}switch(ct=k?Vi(k):window,t){case"focusin":(Md(ct)||ct.contentEditable==="true")&&(Ya=ct,Ds=k,Xi=null);break;case"focusout":Xi=Ds=Ya=null;break;case"mousedown":ws=!0;break;case"contextmenu":case"mouseup":case"dragend":ws=!1,Ud(P,a,V);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":Ud(P,a,V)}var W;if(As)t:{switch(t){case"compositionstart":var nt="onCompositionStart";break t;case"compositionend":nt="onCompositionEnd";break t;case"compositionupdate":nt="onCompositionUpdate";break t}nt=void 0}else qa?Ed(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Sd&&a.locale!=="ko"&&(qa||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&qa&&(W=gd()):(Cn=V,vs="value"in Cn?Cn.value:Cn.textContent,qa=!0)),ct=lo(k,nt),0<ct.length&&(nt=new bd(nt,t,null,a,V),P.push({event:nt,listeners:ct}),W?nt.data=W:(W=Od(a),W!==null&&(nt.data=W)))),(W=lb?ob(t,a):sb(t,a))&&(nt=lo(k,"onBeforeInput"),0<nt.length&&(ct=new bd("onBeforeInput","beforeinput",null,a,V),P.push({event:ct,listeners:nt}),ct.data=W)),Wb(P,t,k,a,V)}op(P,e)})}function br(t,e,a){return{instance:t,listener:e,currentTarget:a}}function lo(t,e){for(var a=e+"Capture",r=[];t!==null;){var s=t,c=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||c===null||(s=Ui(t,a),s!=null&&r.unshift(br(t,s,c)),s=Ui(t,e),s!=null&&r.push(br(t,s,c))),t.tag===3)return r;t=t.return}return[]}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function up(t,e,a,r,s){for(var c=e._reactName,g=[];a!==null&&a!==r;){var v=a,S=v.alternate,k=v.stateNode;if(v=v.tag,S!==null&&S===r)break;v!==5&&v!==26&&v!==27||k===null||(S=k,s?(k=Ui(a,c),k!=null&&g.unshift(br(a,k,S))):s||(k=Ui(a,c),k!=null&&g.push(br(a,k,S)))),a=a.return}g.length!==0&&t.push({event:e,listeners:g})}var n1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(n1,`
`).replace(a1,"")}function fp(t,e){return e=cp(e),cp(t)===e}function oo(){}function Tt(t,e,a,r,s,c){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||La(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&La(t,""+r);break;case"className":dl(t,"class",r);break;case"tabIndex":dl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(t,a,r);break;case"style":hd(t,r,c);break;case"data":if(e!=="object"){dl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=pl(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(e!=="input"&&Tt(t,e,"name",s.name,s,null),Tt(t,e,"formEncType",s.formEncType,s,null),Tt(t,e,"formMethod",s.formMethod,s,null),Tt(t,e,"formTarget",s.formTarget,s,null)):(Tt(t,e,"encType",s.encType,s,null),Tt(t,e,"method",s.method,s,null),Tt(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=pl(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=oo);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=pl(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":dt("beforetoggle",t),dt("toggle",t),fl(t,"popover",r);break;case"xlinkActuate":rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":fl(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nv.get(a)||a,fl(t,a,r))}}function $u(t,e,a,r,s,c){switch(a){case"style":hd(t,r,c);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof r=="string"?La(t,r):(typeof r=="number"||typeof r=="bigint")&&La(t,""+r);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=oo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),c=t[ce]||null,c=c!=null?c[a]:null,typeof c=="function"&&t.removeEventListener(e,c,s),typeof r=="function")){typeof c!="function"&&c!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,s);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):fl(t,a,r)}}}function ne(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var r=!1,s=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Tt(t,e,c,g,a,null)}}s&&Tt(t,e,"srcSet",a.srcSet,a,null),r&&Tt(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var v=c=g=s=null,S=null,k=null;for(r in a)if(a.hasOwnProperty(r)){var V=a[r];if(V!=null)switch(r){case"name":s=V;break;case"type":g=V;break;case"checked":S=V;break;case"defaultChecked":k=V;break;case"value":c=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,e));break;default:Tt(t,e,r,V,a,null)}}ud(t,c,v,S,k,g,s,!1),hl(t);return;case"select":dt("invalid",t),r=g=c=null;for(s in a)if(a.hasOwnProperty(s)&&(v=a[s],v!=null))switch(s){case"value":c=v;break;case"defaultValue":g=v;break;case"multiple":r=v;default:Tt(t,e,s,v,a,null)}e=c,a=g,t.multiple=!!r,e!=null?Ba(t,!!r,e,!1):a!=null&&Ba(t,!!r,a,!0);return;case"textarea":dt("invalid",t),c=s=r=null;for(g in a)if(a.hasOwnProperty(g)&&(v=a[g],v!=null))switch(g){case"value":r=v;break;case"defaultValue":s=v;break;case"children":c=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Tt(t,e,g,v,a,null)}fd(t,r,s,c),hl(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(r=a[S],r!=null))switch(S){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Tt(t,e,S,r,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(r=0;r<vr.length;r++)dt(vr[r],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Tt(t,e,k,r,a,null)}return;default:if(hs(e)){for(V in a)a.hasOwnProperty(V)&&(r=a[V],r!==void 0&&$u(t,e,V,r,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(r=a[v],r!=null&&Tt(t,e,v,r,a,null))}function i1(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,c=null,g=null,v=null,S=null,k=null,V=null;for(z in a){var P=a[z];if(a.hasOwnProperty(z)&&P!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=P;default:r.hasOwnProperty(z)||Tt(t,e,z,null,r,P)}}for(var N in r){var z=r[N];if(P=a[N],r.hasOwnProperty(N)&&(z!=null||P!=null))switch(N){case"type":c=z;break;case"name":s=z;break;case"checked":k=z;break;case"defaultChecked":V=z;break;case"value":g=z;break;case"defaultValue":v=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:z!==P&&Tt(t,e,N,z,r,P)}}fs(t,g,v,S,k,V,c,s);return;case"select":z=g=v=N=null;for(c in a)if(S=a[c],a.hasOwnProperty(c)&&S!=null)switch(c){case"value":break;case"multiple":z=S;default:r.hasOwnProperty(c)||Tt(t,e,c,null,r,S)}for(s in r)if(c=r[s],S=a[s],r.hasOwnProperty(s)&&(c!=null||S!=null))switch(s){case"value":N=c;break;case"defaultValue":v=c;break;case"multiple":g=c;default:c!==S&&Tt(t,e,s,c,r,S)}e=v,a=g,r=z,N!=null?Ba(t,!!a,N,!1):!!r!=!!a&&(e!=null?Ba(t,!!a,e,!0):Ba(t,!!a,a?[]:"",!1));return;case"textarea":z=N=null;for(v in a)if(s=a[v],a.hasOwnProperty(v)&&s!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Tt(t,e,v,null,r,s)}for(g in r)if(s=r[g],c=a[g],r.hasOwnProperty(g)&&(s!=null||c!=null))switch(g){case"value":N=s;break;case"defaultValue":z=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==c&&Tt(t,e,g,s,r,c)}cd(t,N,z);return;case"option":for(var it in a)if(N=a[it],a.hasOwnProperty(it)&&N!=null&&!r.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Tt(t,e,it,null,r,N)}for(S in r)if(N=r[S],z=a[S],r.hasOwnProperty(S)&&N!==z&&(N!=null||z!=null))switch(S){case"selected":t.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Tt(t,e,S,N,r,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)N=a[et],a.hasOwnProperty(et)&&N!=null&&!r.hasOwnProperty(et)&&Tt(t,e,et,null,r,N);for(k in r)if(N=r[k],z=a[k],r.hasOwnProperty(k)&&N!==z&&(N!=null||z!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,e));break;default:Tt(t,e,k,N,r,z)}return;default:if(hs(e)){for(var At in a)N=a[At],a.hasOwnProperty(At)&&N!==void 0&&!r.hasOwnProperty(At)&&$u(t,e,At,void 0,r,N);for(V in r)N=r[V],z=a[V],!r.hasOwnProperty(V)||N===z||N===void 0&&z===void 0||$u(t,e,V,N,r,z);return}}for(var D in a)N=a[D],a.hasOwnProperty(D)&&N!=null&&!r.hasOwnProperty(D)&&Tt(t,e,D,null,r,N);for(P in r)N=r[P],z=a[P],!r.hasOwnProperty(P)||N===z||N==null&&z==null||Tt(t,e,P,N,r,z)}var Wu=null,Iu=null;function so(t){return t.nodeType===9?t:t.ownerDocument}function dp(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function tc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ec=null;function r1(){var t=window.event;return t&&t.type==="popstate"?t===ec?!1:(ec=t,!0):(ec=null,!1)}var mp=typeof setTimeout=="function"?setTimeout:void 0,l1=typeof clearTimeout=="function"?clearTimeout:void 0,pp=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof pp<"u"?function(t){return pp.resolve(null).then(t).catch(s1)}:mp;function s1(t){setTimeout(function(){throw t})}function Zn(t){return t==="head"}function gp(t,e){var a=e,r=0,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<r&&8>r){a=r;var g=t.ownerDocument;if(a&1&&xr(g.documentElement),a&2&&xr(g.body),a&4)for(a=g.head,xr(a),g=a.firstChild;g;){var v=g.nextSibling,S=g.nodeName;g[ji]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=v}}if(s===0){t.removeChild(c),wr(e);return}s--}else a==="$"||a==="$?"||a==="$!"?s++:r=a.charCodeAt(0)-48;else r=0;a=c}while(a);wr(e)}function nc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nc(a),os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function u1(t,e,a,r){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ji])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var c=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function c1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=He(t.nextSibling),t===null))return null;return t}function ac(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function f1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var r=function(){e(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function He(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var ic=null;function yp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function vp(t,e,a){switch(e=so(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function xr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);os(t)}var je=new Map,bp=new Set;function uo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var bn=G.d;G.d={f:d1,r:h1,D:m1,C:p1,L:g1,m:y1,X:b1,S:v1,M:x1};function d1(){var t=bn.f(),e=to();return t||e}function h1(t){var e=za(t);e!==null&&e.tag===5&&e.type==="form"?Lh(e):bn.r(t)}var mi=typeof document>"u"?null:document;function xp(t,e,a){var r=mi;if(r&&typeof e=="string"&&e){var s=we(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),bp.has(s)||(bp.add(s),t={rel:t,crossOrigin:a,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),ne(e,"link",t),Ft(e),r.head.appendChild(e)))}}function m1(t){bn.D(t),xp("dns-prefetch",t,null)}function p1(t,e){bn.C(t,e),xp("preconnect",t,e)}function g1(t,e,a){bn.L(t,e,a);var r=mi;if(r&&t&&e){var s='link[rel="preload"][as="'+we(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+we(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+we(a.imageSizes)+'"]')):s+='[href="'+we(t)+'"]';var c=s;switch(e){case"style":c=pi(t);break;case"script":c=gi(t)}je.has(c)||(t=y({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),je.set(c,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(Sr(c))||e==="script"&&r.querySelector(Tr(c))||(e=r.createElement("link"),ne(e,"link",t),Ft(e),r.head.appendChild(e)))}}function y1(t,e){bn.m(t,e);var a=mi;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+we(r)+'"][href="'+we(t)+'"]',c=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=gi(t)}if(!je.has(c)&&(t=y({rel:"modulepreload",href:t},e),je.set(c,t),a.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tr(c)))return}r=a.createElement("link"),ne(r,"link",t),Ft(r),a.head.appendChild(r)}}}function v1(t,e,a){bn.S(t,e,a);var r=mi;if(r&&t){var s=ja(r).hoistableStyles,c=pi(t);e=e||"default";var g=s.get(c);if(!g){var v={loading:0,preload:null};if(g=r.querySelector(Sr(c)))v.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},a),(a=je.get(c))&&rc(t,a);var S=g=r.createElement("link");Ft(S),ne(S,"link",t),S._p=new Promise(function(k,V){S.onload=k,S.onerror=V}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,co(g,e,r)}g={type:"stylesheet",instance:g,count:1,state:v},s.set(c,g)}}}function b1(t,e){bn.X(t,e);var a=mi;if(a&&t){var r=ja(a).hoistableScripts,s=gi(t),c=r.get(s);c||(c=a.querySelector(Tr(s)),c||(t=y({src:t,async:!0},e),(e=je.get(s))&&lc(t,e),c=a.createElement("script"),Ft(c),ne(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function x1(t,e){bn.M(t,e);var a=mi;if(a&&t){var r=ja(a).hoistableScripts,s=gi(t),c=r.get(s);c||(c=a.querySelector(Tr(s)),c||(t=y({src:t,async:!0,type:"module"},e),(e=je.get(s))&&lc(t,e),c=a.createElement("script"),Ft(c),ne(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(s,c))}}function Sp(t,e,a,r){var s=(s=ot.current)?uo(s):null;if(!s)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=pi(a.href),a=ja(s).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pi(a.href);var c=ja(s).hoistableStyles,g=c.get(t);if(g||(s=s.ownerDocument||s,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=s.querySelector(Sr(t)))&&!c._p&&(g.instance=c,g.state.loading=5),je.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},je.set(t,a),c||S1(s,t,a,g.state))),e&&r===null)throw Error(o(528,""));return g}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=gi(a),a=ja(s).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function pi(t){return'href="'+we(t)+'"'}function Sr(t){return'link[rel="stylesheet"]['+t+"]"}function Tp(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function S1(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ne(e,"link",a),Ft(e),t.head.appendChild(e))}function gi(t){return'[src="'+we(t)+'"]'}function Tr(t){return"script[async]"+t}function Ap(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+we(a.href)+'"]');if(r)return e.instance=r,Ft(r),r;var s=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ft(r),ne(r,"style",s),co(r,a.precedence,t),e.instance=r;case"stylesheet":s=pi(a.href);var c=t.querySelector(Sr(s));if(c)return e.state.loading|=4,e.instance=c,Ft(c),c;r=Tp(a),(s=je.get(s))&&rc(r,s),c=(t.ownerDocument||t).createElement("link"),Ft(c);var g=c;return g._p=new Promise(function(v,S){g.onload=v,g.onerror=S}),ne(c,"link",r),e.state.loading|=4,co(c,a.precedence,t),e.instance=c;case"script":return c=gi(a.src),(s=t.querySelector(Tr(c)))?(e.instance=s,Ft(s),s):(r=a,(s=je.get(c))&&(r=y({},a),lc(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),Ft(s),ne(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,co(r,a.precedence,t));return e.instance}function co(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,c=s,g=0;g<r.length;g++){var v=r[g];if(v.dataset.precedence===e)c=v;else if(c!==s)break}c?c.parentNode.insertBefore(t,c.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function rc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function lc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var fo=null;function Ep(t,e,a){if(fo===null){var r=new Map,s=fo=new Map;s.set(a,r)}else s=fo,r=s.get(a),r||(r=new Map,s.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var c=a[s];if(!(c[ji]||c[ie]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(e)||"";g=t+g;var v=r.get(g);v?v.push(c):r.set(g,[c])}}return r}function Op(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function T1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Mp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ar=null;function A1(){}function E1(t,e,a){if(Ar===null)throw Error(o(475));var r=Ar;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=pi(a.href),c=t.querySelector(Sr(s));if(c){t=c._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=ho.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=c,Ft(c);return}c=t.ownerDocument||t,a=Tp(a),(s=je.get(s))&&rc(a,s),c=c.createElement("link"),Ft(c);var g=c;g._p=new Promise(function(v,S){g.onload=v,g.onerror=S}),ne(c,"link",a),e.instance=c}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=ho.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function O1(){if(Ar===null)throw Error(o(475));var t=Ar;return t.stylesheets&&t.count===0&&oc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&oc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function ho(){if(this.count--,this.count===0){if(this.stylesheets)oc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mo=null;function oc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mo=new Map,e.forEach(M1,t),mo=null,ho.call(t))}function M1(t,e){if(!(e.state.loading&4)){var a=mo.get(t);if(a)var r=a.get(null);else{a=new Map,mo.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<s.length;c++){var g=s[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}s=e.instance,g=s.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,s),a.set(g,s),this.count++,r=ho.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),c?c.parentNode.insertBefore(s,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var Er={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function D1(t,e,a,r,s,c,g,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=as(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=as(0),this.hiddenUpdates=as(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Dp(t,e,a,r,s,c,g,v,S,k,V,P){return t=new D1(t,e,a,g,v,S,k,P),e=1,c===!0&&(e|=24),c=xe(3,null,null,e),t.current=c,c.stateNode=t,e=qs(),e.refCount++,t.pooledCache=e,e.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:e},Zs(c),t}function wp(t){return t?(t=Ka,t):Ka}function Rp(t,e,a,r,s,c){s=wp(s),r.context===null?r.context=s:r.pendingContext=s,r=Nn(e),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=zn(t,r,e),a!==null&&(Oe(a,t,e),tr(a,t,e))}function Cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function sc(t,e){Cp(t,e),(t=t.alternate)&&Cp(t,e)}function _p(t){if(t.tag===13){var e=Za(t,67108864);e!==null&&Oe(e,t,67108864),sc(t,67108864)}}var po=!0;function w1(t,e,a,r){var s=U.T;U.T=null;var c=G.p;try{G.p=2,uc(t,e,a,r)}finally{G.p=c,U.T=s}}function R1(t,e,a,r){var s=U.T;U.T=null;var c=G.p;try{G.p=8,uc(t,e,a,r)}finally{G.p=c,U.T=s}}function uc(t,e,a,r){if(po){var s=cc(r);if(s===null)Ju(t,e,r,go,a),Np(t,r);else if(_1(s,t,e,a,r))r.stopPropagation();else if(Np(t,r),e&4&&-1<C1.indexOf(t)){for(;s!==null;){var c=za(s);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=la(c.pendingLanes);if(g!==0){var v=c;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var S=1<<31-ve(g);v.entanglements[1]|=S,g&=~S}$e(c),(bt&6)===0&&(Wl=Ze()+500,yr(0))}}break;case 13:v=Za(c,2),v!==null&&Oe(v,c,2),to(),sc(c,2)}if(c=cc(r),c===null&&Ju(t,e,r,go,a),c===s)break;s=c}s!==null&&r.stopPropagation()}else Ju(t,e,r,null,a)}}function cc(t){return t=ps(t),fc(t)}var go=null;function fc(t){if(go=null,t=Na(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return go=t,null}function kp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pv()){case Zf:return 2;case Kf:return 8;case ol:case gv:return 32;case Qf:return 268435456;default:return 32}default:return 32}}var dc=!1,Kn=null,Qn=null,Fn=null,Or=new Map,Mr=new Map,Jn=[],C1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Np(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Or.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mr.delete(e.pointerId)}}function Dr(t,e,a,r,s,c){return t===null||t.nativeEvent!==c?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[s]},e!==null&&(e=za(e),e!==null&&_p(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function _1(t,e,a,r,s){switch(e){case"focusin":return Kn=Dr(Kn,t,e,a,r,s),!0;case"dragenter":return Qn=Dr(Qn,t,e,a,r,s),!0;case"mouseover":return Fn=Dr(Fn,t,e,a,r,s),!0;case"pointerover":var c=s.pointerId;return Or.set(c,Dr(Or.get(c)||null,t,e,a,r,s)),!0;case"gotpointercapture":return c=s.pointerId,Mr.set(c,Dr(Mr.get(c)||null,t,e,a,r,s)),!0}return!1}function zp(t){var e=Na(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,Ev(t.priority,function(){if(a.tag===13){var r=Ee();r=is(r);var s=Za(a,r);s!==null&&Oe(s,a,r),sc(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=cc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ms=r,a.target.dispatchEvent(r),ms=null}else return e=za(a),e!==null&&_p(e),t.blockedOn=a,!1;e.shift()}return!0}function jp(t,e,a){yo(t)&&a.delete(e)}function k1(){dc=!1,Kn!==null&&yo(Kn)&&(Kn=null),Qn!==null&&yo(Qn)&&(Qn=null),Fn!==null&&yo(Fn)&&(Fn=null),Or.forEach(jp),Mr.forEach(jp)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,dc||(dc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,k1)))}var bo=null;function Vp(t){bo!==t&&(bo=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){bo===t&&(bo=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(fc(r||a)===null)continue;break}var c=za(a);c!==null&&(t.splice(e,3),e-=3,fu(c,{pending:!0,data:s,method:a.method,action:r},r,s))}}))}function wr(t){function e(S){return vo(S,t)}Kn!==null&&vo(Kn,t),Qn!==null&&vo(Qn,t),Fn!==null&&vo(Fn,t),Or.forEach(e),Mr.forEach(e);for(var a=0;a<Jn.length;a++){var r=Jn[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)zp(a),a.blockedOn===null&&Jn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var s=a[r],c=a[r+1],g=s[ce]||null;if(typeof c=="function")g||Vp(a);else if(g){var v=null;if(c&&c.hasAttribute("formAction")){if(s=c,g=c[ce]||null)v=g.formAction;else if(fc(s)!==null)continue}else v=g.action;typeof v=="function"?a[r+1]=v:(a.splice(r,3),r-=3),Vp(a)}}}function hc(t){this._internalRoot=t}xo.prototype.render=hc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,r=Ee();Rp(a,r,t,e,null,null)},xo.prototype.unmount=hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rp(t.current,2,null,t,null,null),to(),e[ka]=null}};function xo(t){this._internalRoot=t}xo.prototype.unstable_scheduleHydration=function(t){if(t){var e=If();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Jn.length&&e!==0&&e<Jn[a].priority;a++);Jn.splice(a,0,t),a===0&&zp(t)}};var Up=i.version;if(Up!=="19.1.0")throw Error(o(527,Up,"19.1.0"));G.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=m(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var N1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var So=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!So.isDisabled&&So.supportsFiber)try{ki=So.inject(N1),ye=So}catch{}}return Cr.createRoot=function(t,e){if(!u(t))throw Error(o(299));var a=!1,r="",s=Ih,c=tm,g=em,v=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(c=e.onCaughtError),e.onRecoverableError!==void 0&&(g=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=Dp(t,1,!1,null,null,a,r,s,c,g,v,null),t[ka]=e.current,Fu(t),new hc(e)},Cr.hydrateRoot=function(t,e,a){if(!u(t))throw Error(o(299));var r=!1,s="",c=Ih,g=tm,v=em,S=null,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(k=a.formState)),e=Dp(t,1,!0,e,a??null,r,s,c,g,v,S,k),e.context=wp(null),a=e.current,r=Ee(),r=is(r),s=Nn(r),s.callback=null,zn(a,s,r),a=r,e.current.lanes=a,zi(e,a),$e(e),t[ka]=e.current,Fu(t),new xo(e)},Cr.version="19.1.0",Cr}var Kp;function G1(){if(Kp)return gc.exports;Kp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),gc.exports=Y1(),gc.exports}var X1=G1();/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Qp="popstate";function Z1(n={}){function i(o,u){let{pathname:f,search:d,hash:p}=o.location;return Uc("",{pathname:f,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(o,u){return typeof u=="string"?u:Hr(u)}return Q1(i,l,null,n)}function zt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function en(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function K1(){return Math.random().toString(36).substring(2,10)}function Fp(n,i){return{usr:n.state,key:n.key,idx:i}}function Uc(n,i,l=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Di(i):i,state:l,key:i&&i.key||o||K1()}}function Hr({pathname:n="/",search:i="",hash:l=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Di(n){let i={};if(n){let l=n.indexOf("#");l>=0&&(i.hash=n.substring(l),n=n.substring(0,l));let o=n.indexOf("?");o>=0&&(i.search=n.substring(o),n=n.substring(0,o)),n&&(i.pathname=n)}return i}function Q1(n,i,l,o={}){let{window:u=document.defaultView,v5Compat:f=!1}=o,d=u.history,p="POP",m=null,h=y();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function y(){return(d.state||{idx:null}).idx}function b(){p="POP";let j=y(),_=j==null?null:j-h;h=j,m&&m({action:p,location:O.location,delta:_})}function x(j,_){p="PUSH";let q=Uc(O.location,j,_);h=y()+1;let B=Fp(q,h),K=O.createHref(q);try{d.pushState(B,"",K)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;u.location.assign(K)}f&&m&&m({action:p,location:O.location,delta:1})}function M(j,_){p="REPLACE";let q=Uc(O.location,j,_);h=y();let B=Fp(q,h),K=O.createHref(q);d.replaceState(B,"",K),f&&m&&m({action:p,location:O.location,delta:0})}function E(j){return F1(j)}let O={get action(){return p},get location(){return n(u,d)},listen(j){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(Qp,b),m=j,()=>{u.removeEventListener(Qp,b),m=null}},createHref(j){return i(u,j)},createURL:E,encodeLocation(j){let _=E(j);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:M,go(j){return d.go(j)}};return O}function F1(n,i=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),zt(l,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:Hr(n);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function vg(n,i,l="/"){return J1(n,i,l,!1)}function J1(n,i,l,o){let u=typeof i=="string"?Di(i):i,f=An(u.pathname||"/",l);if(f==null)return null;let d=bg(n);$1(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let h=sx(f);p=lx(d[m],h,o)}return p}function bg(n,i=[],l=[],o=""){let u=(f,d,p)=>{let m={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};m.relativePath.startsWith("/")&&(zt(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let h=Tn([o,m.relativePath]),y=l.concat(m);f.children&&f.children.length>0&&(zt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),bg(f.children,i,y,h)),!(f.path==null&&!f.index)&&i.push({path:h,score:ix(h,f.index),routesMeta:y})};return n.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))u(f,d);else for(let p of xg(f.path))u(f,d,p)}),i}function xg(n){let i=n.split("/");if(i.length===0)return[];let[l,...o]=i,u=l.endsWith("?"),f=l.replace(/\?$/,"");if(o.length===0)return u?[f,""]:[f];let d=xg(o.join("/")),p=[];return p.push(...d.map(m=>m===""?f:[f,m].join("/"))),u&&p.push(...d),p.map(m=>n.startsWith("/")&&m===""?"/":m)}function $1(n){n.sort((i,l)=>i.score!==l.score?l.score-i.score:rx(i.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var W1=/^:[\w-]+$/,I1=3,tx=2,ex=1,nx=10,ax=-2,Jp=n=>n==="*";function ix(n,i){let l=n.split("/"),o=l.length;return l.some(Jp)&&(o+=ax),i&&(o+=tx),l.filter(u=>!Jp(u)).reduce((u,f)=>u+(W1.test(f)?I1:f===""?ex:nx),o)}function rx(n,i){return n.length===i.length&&n.slice(0,-1).every((o,u)=>o===i[u])?n[n.length-1]-i[i.length-1]:0}function lx(n,i,l=!1){let{routesMeta:o}=n,u={},f="/",d=[];for(let p=0;p<o.length;++p){let m=o[p],h=p===o.length-1,y=f==="/"?i:i.slice(f.length)||"/",b=Lo({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),x=m.route;if(!b&&h&&l&&!o[o.length-1].route.index&&(b=Lo({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(u,b.params),d.push({params:u,pathname:Tn([f,b.pathname]),pathnameBase:dx(Tn([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=Tn([f,b.pathnameBase]))}return d}function Lo(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,o]=ox(n.path,n.caseSensitive,n.end),u=i.match(l);if(!u)return null;let f=u[0],d=f.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:o.reduce((h,{paramName:y,isOptional:b},x)=>{if(y==="*"){let E=p[x]||"";d=f.slice(0,f.length-E.length).replace(/(.)\/+$/,"$1")}const M=p[x];return b&&!M?h[y]=void 0:h[y]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:d,pattern:n}}function ox(n,i=!1,l=!0){en(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(o.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(o.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),o]}function sx(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return en(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function An(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,o=n.charAt(l);return o&&o!=="/"?null:n.slice(l)||"/"}function ux(n,i="/"){let{pathname:l,search:o="",hash:u=""}=typeof n=="string"?Di(n):n;return{pathname:l?l.startsWith("/")?l:cx(l,i):i,search:hx(o),hash:mx(u)}}function cx(n,i){let l=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function xc(n,i,l,o){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fx(n){return n.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function Sg(n){let i=fx(n);return i.map((l,o)=>o===i.length-1?l.pathname:l.pathnameBase)}function Tg(n,i,l,o=!1){let u;typeof n=="string"?u=Di(n):(u={...n},zt(!u.pathname||!u.pathname.includes("?"),xc("?","pathname","search",u)),zt(!u.pathname||!u.pathname.includes("#"),xc("#","pathname","hash",u)),zt(!u.search||!u.search.includes("#"),xc("#","search","hash",u)));let f=n===""||u.pathname==="",d=f?"/":u.pathname,p;if(d==null)p=l;else{let b=i.length-1;if(!o&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;u.pathname=x.join("/")}p=b>=0?i[b]:"/"}let m=ux(u,p),h=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var Tn=n=>n.join("/").replace(/\/\/+/g,"/"),dx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),hx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,mx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function px(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Ag=["POST","PUT","PATCH","DELETE"];new Set(Ag);var gx=["GET",...Ag];new Set(gx);var wi=R.createContext(null);wi.displayName="DataRouter";var Zo=R.createContext(null);Zo.displayName="DataRouterState";R.createContext(!1);var Eg=R.createContext({isTransitioning:!1});Eg.displayName="ViewTransition";var yx=R.createContext(new Map);yx.displayName="Fetchers";var vx=R.createContext(null);vx.displayName="Await";var nn=R.createContext(null);nn.displayName="Navigation";var Fr=R.createContext(null);Fr.displayName="Location";var Mn=R.createContext({outlet:null,matches:[],isDataRoute:!1});Mn.displayName="Route";var sf=R.createContext(null);sf.displayName="RouteError";function bx(n,{relative:i}={}){zt(Jr(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=R.useContext(nn),{hash:u,pathname:f,search:d}=$r(n,{relative:i}),p=f;return l!=="/"&&(p=f==="/"?l:Tn([l,f])),o.createHref({pathname:p,search:d,hash:u})}function Jr(){return R.useContext(Fr)!=null}function _a(){return zt(Jr(),"useLocation() may be used only in the context of a <Router> component."),R.useContext(Fr).location}var Og="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Mg(n){R.useContext(nn).static||R.useLayoutEffect(n)}function xx(){let{isDataRoute:n}=R.useContext(Mn);return n?Nx():Sx()}function Sx(){zt(Jr(),"useNavigate() may be used only in the context of a <Router> component.");let n=R.useContext(wi),{basename:i,navigator:l}=R.useContext(nn),{matches:o}=R.useContext(Mn),{pathname:u}=_a(),f=JSON.stringify(Sg(o)),d=R.useRef(!1);return Mg(()=>{d.current=!0}),R.useCallback((m,h={})=>{if(en(d.current,Og),!d.current)return;if(typeof m=="number"){l.go(m);return}let y=Tg(m,JSON.parse(f),u,h.relative==="path");n==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Tn([i,y.pathname])),(h.replace?l.replace:l.push)(y,h.state,h)},[i,l,f,u,n])}R.createContext(null);function $r(n,{relative:i}={}){let{matches:l}=R.useContext(Mn),{pathname:o}=_a(),u=JSON.stringify(Sg(l));return R.useMemo(()=>Tg(n,JSON.parse(u),o,i==="path"),[n,u,o,i])}function Tx(n,i){return Dg(n,i)}function Dg(n,i,l,o){zt(Jr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=R.useContext(nn),{matches:f}=R.useContext(Mn),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",y=d&&d.route;{let _=y&&y.path||"";wg(m,!y||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let b=_a(),x;if(i){let _=typeof i=="string"?Di(i):i;zt(h==="/"||_.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${_.pathname}" was given in the \`location\` prop.`),x=_}else x=b;let M=x.pathname||"/",E=M;if(h!=="/"){let _=h.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(_.length).join("/")}let O=vg(n,{pathname:E});en(y||O!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),en(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=Dx(O&&O.map(_=>Object.assign({},_,{params:Object.assign({},p,_.params),pathname:Tn([h,u.encodeLocation?u.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:Tn([h,u.encodeLocation?u.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),f,l,o);return i&&j?R.createElement(Fr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},j):j}function Ax(){let n=kx(),i=px(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=R.createElement(R.Fragment,null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:f},"ErrorBoundary")," or"," ",R.createElement("code",{style:f},"errorElement")," prop on your route.")),R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},i),l?R.createElement("pre",{style:u},l):null,d)}var Ex=R.createElement(Ax,null),Ox=class extends R.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?R.createElement(Mn.Provider,{value:this.props.routeContext},R.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Mx({routeContext:n,match:i,children:l}){let o=R.useContext(wi);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),R.createElement(Mn.Provider,{value:n},l)}function Dx(n,i=[],l=null,o=null){if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let u=n,f=l?.errors;if(f!=null){let m=u.findIndex(h=>h.route.id&&f?.[h.route.id]!==void 0);zt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,m+1))}let d=!1,p=-1;if(l)for(let m=0;m<u.length;m++){let h=u[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(p=m),h.route.id){let{loaderData:y,errors:b}=l,x=h.route.loader&&!y.hasOwnProperty(h.route.id)&&(!b||b[h.route.id]===void 0);if(h.route.lazy||x){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((m,h,y)=>{let b,x=!1,M=null,E=null;l&&(b=f&&h.route.id?f[h.route.id]:void 0,M=h.route.errorElement||Ex,d&&(p<0&&y===0?(wg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):p===y&&(x=!0,E=h.route.hydrateFallbackElement||null)));let O=i.concat(u.slice(0,y+1)),j=()=>{let _;return b?_=M:x?_=E:h.route.Component?_=R.createElement(h.route.Component,null):h.route.element?_=h.route.element:_=m,R.createElement(Mx,{match:h,routeContext:{outlet:m,matches:O,isDataRoute:l!=null},children:_})};return l&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?R.createElement(Ox,{location:l.location,revalidation:l.revalidation,component:M,error:b,children:j(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):j()},null)}function uf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wx(n){let i=R.useContext(wi);return zt(i,uf(n)),i}function Rx(n){let i=R.useContext(Zo);return zt(i,uf(n)),i}function Cx(n){let i=R.useContext(Mn);return zt(i,uf(n)),i}function cf(n){let i=Cx(n),l=i.matches[i.matches.length-1];return zt(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function _x(){return cf("useRouteId")}function kx(){let n=R.useContext(sf),i=Rx("useRouteError"),l=cf("useRouteError");return n!==void 0?n:i.errors?.[l]}function Nx(){let{router:n}=wx("useNavigate"),i=cf("useNavigate"),l=R.useRef(!1);return Mg(()=>{l.current=!0}),R.useCallback(async(u,f={})=>{en(l.current,Og),l.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:i,...f}))},[n,i])}var $p={};function wg(n,i,l){!i&&!$p[n]&&($p[n]=!0,en(!1,l))}R.memo(zx);function zx({routes:n,future:i,state:l}){return Dg(n,void 0,l,i)}function bi(n){zt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jx({basename:n="/",children:i=null,location:l,navigationType:o="POP",navigator:u,static:f=!1}){zt(!Jr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=R.useMemo(()=>({basename:d,navigator:u,static:f,future:{}}),[d,u,f]);typeof l=="string"&&(l=Di(l));let{pathname:m="/",search:h="",hash:y="",state:b=null,key:x="default"}=l,M=R.useMemo(()=>{let E=An(m,d);return E==null?null:{location:{pathname:E,search:h,hash:y,state:b,key:x},navigationType:o}},[d,m,h,y,b,x,o]);return en(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:R.createElement(nn.Provider,{value:p},R.createElement(Fr.Provider,{children:i,value:M}))}function Vx({children:n,location:i}){return Tx(Bc(n),i)}function Bc(n,i=[]){let l=[];return R.Children.forEach(n,(o,u)=>{if(!R.isValidElement(o))return;let f=[...i,u];if(o.type===R.Fragment){l.push.apply(l,Bc(o.props.children,f));return}zt(o.type===bi,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),zt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=Bc(o.props.children,f)),l.push(d)}),l}var No="get",zo="application/x-www-form-urlencoded";function Ko(n){return n!=null&&typeof n.tagName=="string"}function Ux(n){return Ko(n)&&n.tagName.toLowerCase()==="button"}function Bx(n){return Ko(n)&&n.tagName.toLowerCase()==="form"}function Lx(n){return Ko(n)&&n.tagName.toLowerCase()==="input"}function Px(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Hx(n,i){return n.button===0&&(!i||i==="_self")&&!Px(n)}var To=null;function qx(){if(To===null)try{new FormData(document.createElement("form"),0),To=!1}catch{To=!0}return To}var Yx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sc(n){return n!=null&&!Yx.has(n)?(en(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zo}"`),null):n}function Gx(n,i){let l,o,u,f,d;if(Bx(n)){let p=n.getAttribute("action");o=p?An(p,i):null,l=n.getAttribute("method")||No,u=Sc(n.getAttribute("enctype"))||zo,f=new FormData(n)}else if(Ux(n)||Lx(n)&&(n.type==="submit"||n.type==="image")){let p=n.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||p.getAttribute("action");if(o=m?An(m,i):null,l=n.getAttribute("formmethod")||p.getAttribute("method")||No,u=Sc(n.getAttribute("formenctype"))||Sc(p.getAttribute("enctype"))||zo,f=new FormData(p,n),!qx()){let{name:h,type:y,value:b}=n;if(y==="image"){let x=h?`${h}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else h&&f.append(h,b)}}else{if(Ko(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=No,o=null,u=zo,d=n}return f&&u==="text/plain"&&(d=f,f=void 0),{action:o,method:l.toLowerCase(),encType:u,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ff(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Xx(n,i,l){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${l}`:i&&An(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function Zx(n,i){if(n.id in i)return i[n.id];try{let l=await import(n.module);return i[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Kx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Qx(n,i,l){let o=await Promise.all(n.map(async u=>{let f=i.routes[u.route.id];if(f){let d=await Zx(f,l);return d.links?d.links():[]}return[]}));return Wx(o.flat(1).filter(Kx).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Wp(n,i,l,o,u,f){let d=(m,h)=>l[h]?m.route.id!==l[h].route.id:!0,p=(m,h)=>l[h].pathname!==m.pathname||l[h].route.path?.endsWith("*")&&l[h].params["*"]!==m.params["*"];return f==="assets"?i.filter((m,h)=>d(m,h)||p(m,h)):f==="data"?i.filter((m,h)=>{let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(d(m,h)||p(m,h))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Fx(n,i,{includeHydrateFallback:l}={}){return Jx(n.map(o=>{let u=i.routes[o.route.id];if(!u)return[];let f=[u.module];return u.clientActionModule&&(f=f.concat(u.clientActionModule)),u.clientLoaderModule&&(f=f.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(f=f.concat(u.hydrateFallbackModule)),u.imports&&(f=f.concat(u.imports)),f}).flat(1))}function Jx(n){return[...new Set(n)]}function $x(n){let i={},l=Object.keys(n).sort();for(let o of l)i[o]=n[o];return i}function Wx(n,i){let l=new Set;return new Set(i),n.reduce((o,u)=>{let f=JSON.stringify($x(u));return l.has(f)||(l.add(f),o.push({key:f,link:u})),o},[])}function Rg(){let n=R.useContext(wi);return ff(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Ix(){let n=R.useContext(Zo);return ff(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var df=R.createContext(void 0);df.displayName="FrameworkContext";function Cg(){let n=R.useContext(df);return ff(n,"You must render this element inside a <HydratedRouter> element"),n}function t5(n,i){let l=R.useContext(df),[o,u]=R.useState(!1),[f,d]=R.useState(!1),{onFocus:p,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:b}=i,x=R.useRef(null);R.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let O=_=>{_.forEach(q=>{d(q.isIntersecting)})},j=new IntersectionObserver(O,{threshold:.5});return x.current&&j.observe(x.current),()=>{j.disconnect()}}},[n]),R.useEffect(()=>{if(o){let O=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(O)}}},[o]);let M=()=>{u(!0)},E=()=>{u(!1),d(!1)};return l?n!=="intent"?[f,x,{}]:[f,x,{onFocus:_r(p,M),onBlur:_r(m,E),onMouseEnter:_r(h,M),onMouseLeave:_r(y,E),onTouchStart:_r(b,M)}]:[!1,x,{}]}function _r(n,i){return l=>{n&&n(l),l.defaultPrevented||i(l)}}function e5({page:n,...i}){let{router:l}=Rg(),o=R.useMemo(()=>vg(l.routes,n,l.basename),[l.routes,n,l.basename]);return o?R.createElement(a5,{page:n,matches:o,...i}):null}function n5(n){let{manifest:i,routeModules:l}=Cg(),[o,u]=R.useState([]);return R.useEffect(()=>{let f=!1;return Qx(n,i,l).then(d=>{f||u(d)}),()=>{f=!0}},[n,i,l]),o}function a5({page:n,matches:i,...l}){let o=_a(),{manifest:u,routeModules:f}=Cg(),{basename:d}=Rg(),{loaderData:p,matches:m}=Ix(),h=R.useMemo(()=>Wp(n,i,m,u,o,"data"),[n,i,m,u,o]),y=R.useMemo(()=>Wp(n,i,m,u,o,"assets"),[n,i,m,u,o]),b=R.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let E=new Set,O=!1;if(i.forEach(_=>{let q=u.routes[_.route.id];!q||!q.hasLoader||(!h.some(B=>B.route.id===_.route.id)&&_.route.id in p&&f[_.route.id]?.shouldRevalidate||q.hasClientLoader?O=!0:E.add(_.route.id))}),E.size===0)return[];let j=Xx(n,d,"data");return O&&E.size>0&&j.searchParams.set("_routes",i.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[j.pathname+j.search]},[d,p,o,u,h,i,n,f]),x=R.useMemo(()=>Fx(y,u),[y,u]),M=n5(y);return R.createElement(R.Fragment,null,b.map(E=>R.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...l})),x.map(E=>R.createElement("link",{key:E,rel:"modulepreload",href:E,...l})),M.map(({key:E,link:O})=>R.createElement("link",{key:E,...O})))}function i5(...n){return i=>{n.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var _g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_g&&(window.__reactRouterVersion="7.7.0")}catch{}function r5({basename:n,children:i,window:l}){let o=R.useRef();o.current==null&&(o.current=Z1({window:l,v5Compat:!0}));let u=o.current,[f,d]=R.useState({action:u.action,location:u.location}),p=R.useCallback(m=>{R.startTransition(()=>d(m))},[d]);return R.useLayoutEffect(()=>u.listen(p),[u,p]),R.createElement(jx,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:u})}var kg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hf=R.forwardRef(function({onClick:i,discover:l="render",prefetch:o="none",relative:u,reloadDocument:f,replace:d,state:p,target:m,to:h,preventScrollReset:y,viewTransition:b,...x},M){let{basename:E}=R.useContext(nn),O=typeof h=="string"&&kg.test(h),j,_=!1;if(typeof h=="string"&&O&&(j=h,_g))try{let at=new URL(window.location.href),Mt=h.startsWith("//")?new URL(at.protocol+h):new URL(h),Gt=An(Mt.pathname,E);Mt.origin===at.origin&&Gt!=null?h=Gt+Mt.search+Mt.hash:_=!0}catch{en(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=bx(h,{relative:u}),[B,K,Y]=t5(o,x),I=u5(h,{replace:d,state:p,target:m,preventScrollReset:y,relative:u,viewTransition:b});function lt(at){i&&i(at),at.defaultPrevented||I(at)}let F=R.createElement("a",{...x,...Y,href:j||q,onClick:_||f?i:lt,ref:i5(M,K),target:m,"data-discover":!O&&l==="render"?"true":void 0});return B&&!O?R.createElement(R.Fragment,null,F,R.createElement(e5,{page:q})):F});hf.displayName="Link";var l5=R.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:o="",end:u=!1,style:f,to:d,viewTransition:p,children:m,...h},y){let b=$r(d,{relative:h.relative}),x=_a(),M=R.useContext(Zo),{navigator:E,basename:O}=R.useContext(nn),j=M!=null&&m5(b)&&p===!0,_=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,q=x.pathname,B=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;l||(q=q.toLowerCase(),B=B?B.toLowerCase():null,_=_.toLowerCase()),B&&O&&(B=An(B,O)||B);const K=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let Y=q===_||!u&&q.startsWith(_)&&q.charAt(K)==="/",I=B!=null&&(B===_||!u&&B.startsWith(_)&&B.charAt(_.length)==="/"),lt={isActive:Y,isPending:I,isTransitioning:j},F=Y?i:void 0,at;typeof o=="function"?at=o(lt):at=[o,Y?"active":null,I?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let Mt=typeof f=="function"?f(lt):f;return R.createElement(hf,{...h,"aria-current":F,className:at,ref:y,style:Mt,to:d,viewTransition:p},typeof m=="function"?m(lt):m)});l5.displayName="NavLink";var o5=R.forwardRef(({discover:n="render",fetcherKey:i,navigate:l,reloadDocument:o,replace:u,state:f,method:d=No,action:p,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:b,...x},M)=>{let E=d5(),O=h5(p,{relative:h}),j=d.toLowerCase()==="get"?"get":"post",_=typeof p=="string"&&kg.test(p),q=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let K=B.nativeEvent.submitter,Y=K?.getAttribute("formmethod")||d;E(K||B.currentTarget,{fetcherKey:i,method:Y,navigate:l,replace:u,state:f,relative:h,preventScrollReset:y,viewTransition:b})};return R.createElement("form",{ref:M,method:j,action:O,onSubmit:o?m:q,...x,"data-discover":!_&&n==="render"?"true":void 0})});o5.displayName="Form";function s5(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ng(n){let i=R.useContext(wi);return zt(i,s5(n)),i}function u5(n,{target:i,replace:l,state:o,preventScrollReset:u,relative:f,viewTransition:d}={}){let p=xx(),m=_a(),h=$r(n,{relative:f});return R.useCallback(y=>{if(Hx(y,i)){y.preventDefault();let b=l!==void 0?l:Hr(m)===Hr(h);p(n,{replace:b,state:o,preventScrollReset:u,relative:f,viewTransition:d})}},[m,p,h,l,o,i,n,u,f,d])}var c5=0,f5=()=>`__${String(++c5)}__`;function d5(){let{router:n}=Ng("useSubmit"),{basename:i}=R.useContext(nn),l=_x();return R.useCallback(async(o,u={})=>{let{action:f,method:d,encType:p,formData:m,body:h}=Gx(o,i);if(u.navigate===!1){let y=u.fetcherKey||f5();await n.fetch(y,l,u.action||f,{preventScrollReset:u.preventScrollReset,formData:m,body:h,formMethod:u.method||d,formEncType:u.encType||p,flushSync:u.flushSync})}else await n.navigate(u.action||f,{preventScrollReset:u.preventScrollReset,formData:m,body:h,formMethod:u.method||d,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:l,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,i,l])}function h5(n,{relative:i}={}){let{basename:l}=R.useContext(nn),o=R.useContext(Mn);zt(o,"useFormAction must be used inside a RouteContext");let[u]=o.matches.slice(-1),f={...$r(n||".",{relative:i})},d=_a();if(n==null){f.search=d.search;let p=new URLSearchParams(f.search),m=p.getAll("index");if(m.some(y=>y==="")){p.delete("index"),m.filter(b=>b).forEach(b=>p.append("index",b));let y=p.toString();f.search=y?`?${y}`:""}}return(!n||n===".")&&u.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:Tn([l,f.pathname])),Hr(f)}function m5(n,i={}){let l=R.useContext(Eg);zt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Ng("useViewTransitionState"),u=$r(n,{relative:i.relative});if(!l.isTransitioning)return!1;let f=An(l.currentLocation.pathname,o)||l.currentLocation.pathname,d=An(l.nextLocation.pathname,o)||l.nextLocation.pathname;return Lo(u.pathname,d)!=null||Lo(u.pathname,f)!=null}const zg=R.createContext({});function p5(n){const i=R.useRef(null);return i.current===null&&(i.current=n()),i.current}const mf=typeof window<"u",g5=mf?R.useLayoutEffect:R.useEffect,pf=R.createContext(null);function gf(n,i){n.indexOf(i)===-1&&n.push(i)}function yf(n,i){const l=n.indexOf(i);l>-1&&n.splice(l,1)}const En=(n,i,l)=>l>i?i:l<n?n:l;let vf=()=>{};const On={},jg=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Vg(n){return typeof n=="object"&&n!==null}const Ug=n=>/^0[^.\s]+$/u.test(n);function bf(n){let i;return()=>(i===void 0&&(i=n()),i)}const Be=n=>n,y5=(n,i)=>l=>i(n(l)),Wr=(...n)=>n.reduce(y5),qr=(n,i,l)=>{const o=i-n;return o===0?1:(l-n)/o};class xf{constructor(){this.subscriptions=[]}add(i){return gf(this.subscriptions,i),()=>yf(this.subscriptions,i)}notify(i,l,o){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](i,l,o);else for(let f=0;f<u;f++){const d=this.subscriptions[f];d&&d(i,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const We=n=>n*1e3,Ie=n=>n/1e3;function Bg(n,i){return i?n*(1e3/i):0}const Lg=(n,i,l)=>(((1-3*l+3*i)*n+(3*l-6*i))*n+3*i)*n,v5=1e-7,b5=12;function x5(n,i,l,o,u){let f,d,p=0;do d=i+(l-i)/2,f=Lg(d,o,u)-n,f>0?l=d:i=d;while(Math.abs(f)>v5&&++p<b5);return d}function Ir(n,i,l,o){if(n===i&&l===o)return Be;const u=f=>x5(f,0,1,n,l);return f=>f===0||f===1?f:Lg(u(f),i,o)}const Pg=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Hg=n=>i=>1-n(1-i),qg=Ir(.33,1.53,.69,.99),Sf=Hg(qg),Yg=Pg(Sf),Gg=n=>(n*=2)<1?.5*Sf(n):.5*(2-Math.pow(2,-10*(n-1))),Tf=n=>1-Math.sin(Math.acos(n)),Xg=Hg(Tf),Zg=Pg(Tf),S5=Ir(.42,0,1,1),T5=Ir(0,0,.58,1),Kg=Ir(.42,0,.58,1),A5=n=>Array.isArray(n)&&typeof n[0]!="number",Qg=n=>Array.isArray(n)&&typeof n[0]=="number",E5={linear:Be,easeIn:S5,easeInOut:Kg,easeOut:T5,circIn:Tf,circInOut:Zg,circOut:Xg,backIn:Sf,backInOut:Yg,backOut:qg,anticipate:Gg},O5=n=>typeof n=="string",Ip=n=>{if(Qg(n)){vf(n.length===4);const[i,l,o,u]=n;return Ir(i,l,o,u)}else if(O5(n))return E5[n];return n},Ao=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function M5(n,i){let l=new Set,o=new Set,u=!1,f=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function m(y){d.has(y)&&(h.schedule(y),n()),y(p)}const h={schedule:(y,b=!1,x=!1)=>{const E=x&&u?l:o;return b&&d.add(y),E.has(y)||E.add(y),y},cancel:y=>{o.delete(y),d.delete(y)},process:y=>{if(p=y,u){f=!0;return}u=!0,[l,o]=[o,l],l.forEach(m),l.clear(),u=!1,f&&(f=!1,h.process(y))}};return h}const D5=40;function Fg(n,i){let l=!1,o=!0;const u={delta:0,timestamp:0,isProcessing:!1},f=()=>l=!0,d=Ao.reduce((B,K)=>(B[K]=M5(f),B),{}),{setup:p,read:m,resolveKeyframes:h,preUpdate:y,update:b,preRender:x,render:M,postRender:E}=d,O=()=>{const B=On.useManualTiming?u.timestamp:performance.now();l=!1,On.useManualTiming||(u.delta=o?1e3/60:Math.max(Math.min(B-u.timestamp,D5),1)),u.timestamp=B,u.isProcessing=!0,p.process(u),m.process(u),h.process(u),y.process(u),b.process(u),x.process(u),M.process(u),E.process(u),u.isProcessing=!1,l&&i&&(o=!1,n(O))},j=()=>{l=!0,o=!0,u.isProcessing||n(O)};return{schedule:Ao.reduce((B,K)=>{const Y=d[K];return B[K]=(I,lt=!1,F=!1)=>(l||j(),Y.schedule(I,lt,F)),B},{}),cancel:B=>{for(let K=0;K<Ao.length;K++)d[Ao[K]].cancel(B)},state:u,steps:d}}const{schedule:_t,cancel:aa,state:ae,steps:Tc}=Fg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Be,!0);let jo;function w5(){jo=void 0}const pe={now:()=>(jo===void 0&&pe.set(ae.isProcessing||On.useManualTiming?ae.timestamp:performance.now()),jo),set:n=>{jo=n,queueMicrotask(w5)}},Jg=n=>i=>typeof i=="string"&&i.startsWith(n),Af=Jg("--"),R5=Jg("var(--"),Ef=n=>R5(n)?C5.test(n.split("/*")[0].trim()):!1,C5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ri={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Yr={...Ri,transform:n=>En(0,1,n)},Eo={...Ri,default:1},Vr=n=>Math.round(n*1e5)/1e5,Of=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function _5(n){return n==null}const k5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mf=(n,i)=>l=>!!(typeof l=="string"&&k5.test(l)&&l.startsWith(n)||i&&!_5(l)&&Object.prototype.hasOwnProperty.call(l,i)),$g=(n,i,l)=>o=>{if(typeof o!="string")return o;const[u,f,d,p]=o.match(Of);return{[n]:parseFloat(u),[i]:parseFloat(f),[l]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},N5=n=>En(0,255,n),Ac={...Ri,transform:n=>Math.round(N5(n))},Da={test:Mf("rgb","red"),parse:$g("red","green","blue"),transform:({red:n,green:i,blue:l,alpha:o=1})=>"rgba("+Ac.transform(n)+", "+Ac.transform(i)+", "+Ac.transform(l)+", "+Vr(Yr.transform(o))+")"};function z5(n){let i="",l="",o="",u="";return n.length>5?(i=n.substring(1,3),l=n.substring(3,5),o=n.substring(5,7),u=n.substring(7,9)):(i=n.substring(1,2),l=n.substring(2,3),o=n.substring(3,4),u=n.substring(4,5),i+=i,l+=l,o+=o,u+=u),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:u?parseInt(u,16)/255:1}}const Lc={test:Mf("#"),parse:z5,transform:Da.transform},tl=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),na=tl("deg"),tn=tl("%"),rt=tl("px"),j5=tl("vh"),V5=tl("vw"),t0={...tn,parse:n=>tn.parse(n)/100,transform:n=>tn.transform(n*100)},xi={test:Mf("hsl","hue"),parse:$g("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:l,alpha:o=1})=>"hsla("+Math.round(n)+", "+tn.transform(Vr(i))+", "+tn.transform(Vr(l))+", "+Vr(Yr.transform(o))+")"},Yt={test:n=>Da.test(n)||Lc.test(n)||xi.test(n),parse:n=>Da.test(n)?Da.parse(n):xi.test(n)?xi.parse(n):Lc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Da.transform(n):xi.transform(n),getAnimatableNone:n=>{const i=Yt.parse(n);return i.alpha=0,Yt.transform(i)}},U5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function B5(n){return isNaN(n)&&typeof n=="string"&&(n.match(Of)?.length||0)+(n.match(U5)?.length||0)>0}const Wg="number",Ig="color",L5="var",P5="var(",e0="${}",H5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Gr(n){const i=n.toString(),l=[],o={color:[],number:[],var:[]},u=[];let f=0;const p=i.replace(H5,m=>(Yt.test(m)?(o.color.push(f),u.push(Ig),l.push(Yt.parse(m))):m.startsWith(P5)?(o.var.push(f),u.push(L5),l.push(m)):(o.number.push(f),u.push(Wg),l.push(parseFloat(m))),++f,e0)).split(e0);return{values:l,split:p,indexes:o,types:u}}function ty(n){return Gr(n).values}function ey(n){const{split:i,types:l}=Gr(n),o=i.length;return u=>{let f="";for(let d=0;d<o;d++)if(f+=i[d],u[d]!==void 0){const p=l[d];p===Wg?f+=Vr(u[d]):p===Ig?f+=Yt.transform(u[d]):f+=u[d]}return f}}const q5=n=>typeof n=="number"?0:Yt.test(n)?Yt.getAnimatableNone(n):n;function Y5(n){const i=ty(n);return ey(n)(i.map(q5))}const ia={test:B5,parse:ty,createTransformer:ey,getAnimatableNone:Y5};function Ec(n,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?n+(i-n)*6*l:l<1/2?i:l<2/3?n+(i-n)*(2/3-l)*6:n}function G5({hue:n,saturation:i,lightness:l,alpha:o}){n/=360,i/=100,l/=100;let u=0,f=0,d=0;if(!i)u=f=d=l;else{const p=l<.5?l*(1+i):l+i-l*i,m=2*l-p;u=Ec(m,p,n+1/3),f=Ec(m,p,n),d=Ec(m,p,n-1/3)}return{red:Math.round(u*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:o}}function Po(n,i){return l=>l>0?i:n}const Nt=(n,i,l)=>n+(i-n)*l,Oc=(n,i,l)=>{const o=n*n,u=l*(i*i-o)+o;return u<0?0:Math.sqrt(u)},X5=[Lc,Da,xi],Z5=n=>X5.find(i=>i.test(n));function n0(n){const i=Z5(n);if(!i)return!1;let l=i.parse(n);return i===xi&&(l=G5(l)),l}const a0=(n,i)=>{const l=n0(n),o=n0(i);if(!l||!o)return Po(n,i);const u={...l};return f=>(u.red=Oc(l.red,o.red,f),u.green=Oc(l.green,o.green,f),u.blue=Oc(l.blue,o.blue,f),u.alpha=Nt(l.alpha,o.alpha,f),Da.transform(u))},Pc=new Set(["none","hidden"]);function K5(n,i){return Pc.has(n)?l=>l<=0?n:i:l=>l>=1?i:n}function Q5(n,i){return l=>Nt(n,i,l)}function Df(n){return typeof n=="number"?Q5:typeof n=="string"?Ef(n)?Po:Yt.test(n)?a0:$5:Array.isArray(n)?ny:typeof n=="object"?Yt.test(n)?a0:F5:Po}function ny(n,i){const l=[...n],o=l.length,u=n.map((f,d)=>Df(f)(f,i[d]));return f=>{for(let d=0;d<o;d++)l[d]=u[d](f);return l}}function F5(n,i){const l={...n,...i},o={};for(const u in l)n[u]!==void 0&&i[u]!==void 0&&(o[u]=Df(n[u])(n[u],i[u]));return u=>{for(const f in o)l[f]=o[f](u);return l}}function J5(n,i){const l=[],o={color:0,var:0,number:0};for(let u=0;u<i.values.length;u++){const f=i.types[u],d=n.indexes[f][o[f]],p=n.values[d]??0;l[u]=p,o[f]++}return l}const $5=(n,i)=>{const l=ia.createTransformer(i),o=Gr(n),u=Gr(i);return o.indexes.var.length===u.indexes.var.length&&o.indexes.color.length===u.indexes.color.length&&o.indexes.number.length>=u.indexes.number.length?Pc.has(n)&&!u.values.length||Pc.has(i)&&!o.values.length?K5(n,i):Wr(ny(J5(o,u),u.values),l):Po(n,i)};function ay(n,i,l){return typeof n=="number"&&typeof i=="number"&&typeof l=="number"?Nt(n,i,l):Df(n)(n,i)}const W5=n=>{const i=({timestamp:l})=>n(l);return{start:(l=!0)=>_t.update(i,l),stop:()=>aa(i),now:()=>ae.isProcessing?ae.timestamp:pe.now()}},iy=(n,i,l=10)=>{let o="";const u=Math.max(Math.round(i/l),2);for(let f=0;f<u;f++)o+=Math.round(n(f/(u-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Ho=2e4;function wf(n){let i=0;const l=50;let o=n.next(i);for(;!o.done&&i<Ho;)i+=l,o=n.next(i);return i>=Ho?1/0:i}function I5(n,i=100,l){const o=l({...n,keyframes:[0,i]}),u=Math.min(wf(o),Ho);return{type:"keyframes",ease:f=>o.next(u*f).value/i,duration:Ie(u)}}const t2=5;function ry(n,i,l){const o=Math.max(i-t2,0);return Bg(l-n(o),i-o)}const Ut={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mc=.001;function e2({duration:n=Ut.duration,bounce:i=Ut.bounce,velocity:l=Ut.velocity,mass:o=Ut.mass}){let u,f,d=1-i;d=En(Ut.minDamping,Ut.maxDamping,d),n=En(Ut.minDuration,Ut.maxDuration,Ie(n)),d<1?(u=h=>{const y=h*d,b=y*n,x=y-l,M=Hc(h,d),E=Math.exp(-b);return Mc-x/M*E},f=h=>{const b=h*d*n,x=b*l+l,M=Math.pow(d,2)*Math.pow(h,2)*n,E=Math.exp(-b),O=Hc(Math.pow(h,2),d);return(-u(h)+Mc>0?-1:1)*((x-M)*E)/O}):(u=h=>{const y=Math.exp(-h*n),b=(h-l)*n+1;return-Mc+y*b},f=h=>{const y=Math.exp(-h*n),b=(l-h)*(n*n);return y*b});const p=5/n,m=a2(u,f,p);if(n=We(n),isNaN(m))return{stiffness:Ut.stiffness,damping:Ut.damping,duration:n};{const h=Math.pow(m,2)*o;return{stiffness:h,damping:d*2*Math.sqrt(o*h),duration:n}}}const n2=12;function a2(n,i,l){let o=l;for(let u=1;u<n2;u++)o=o-n(o)/i(o);return o}function Hc(n,i){return n*Math.sqrt(1-i*i)}const i2=["duration","bounce"],r2=["stiffness","damping","mass"];function i0(n,i){return i.some(l=>n[l]!==void 0)}function l2(n){let i={velocity:Ut.velocity,stiffness:Ut.stiffness,damping:Ut.damping,mass:Ut.mass,isResolvedFromDuration:!1,...n};if(!i0(n,r2)&&i0(n,i2))if(n.visualDuration){const l=n.visualDuration,o=2*Math.PI/(l*1.2),u=o*o,f=2*En(.05,1,1-(n.bounce||0))*Math.sqrt(u);i={...i,mass:Ut.mass,stiffness:u,damping:f}}else{const l=e2(n);i={...i,...l,mass:Ut.mass},i.isResolvedFromDuration=!0}return i}function qo(n=Ut.visualDuration,i=Ut.bounce){const l=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:o,restDelta:u}=l;const f=l.keyframes[0],d=l.keyframes[l.keyframes.length-1],p={done:!1,value:f},{stiffness:m,damping:h,mass:y,duration:b,velocity:x,isResolvedFromDuration:M}=l2({...l,velocity:-Ie(l.velocity||0)}),E=x||0,O=h/(2*Math.sqrt(m*y)),j=d-f,_=Ie(Math.sqrt(m/y)),q=Math.abs(j)<5;o||(o=q?Ut.restSpeed.granular:Ut.restSpeed.default),u||(u=q?Ut.restDelta.granular:Ut.restDelta.default);let B;if(O<1){const Y=Hc(_,O);B=I=>{const lt=Math.exp(-O*_*I);return d-lt*((E+O*_*j)/Y*Math.sin(Y*I)+j*Math.cos(Y*I))}}else if(O===1)B=Y=>d-Math.exp(-_*Y)*(j+(E+_*j)*Y);else{const Y=_*Math.sqrt(O*O-1);B=I=>{const lt=Math.exp(-O*_*I),F=Math.min(Y*I,300);return d-lt*((E+O*_*j)*Math.sinh(F)+Y*j*Math.cosh(F))/Y}}const K={calculatedDuration:M&&b||null,next:Y=>{const I=B(Y);if(M)p.done=Y>=b;else{let lt=Y===0?E:0;O<1&&(lt=Y===0?We(E):ry(B,Y,I));const F=Math.abs(lt)<=o,at=Math.abs(d-I)<=u;p.done=F&&at}return p.value=p.done?d:I,p},toString:()=>{const Y=Math.min(wf(K),Ho),I=iy(lt=>K.next(Y*lt).value,Y,30);return Y+"ms "+I},toTransition:()=>{}};return K}qo.applyToOptions=n=>{const i=I5(n,100,qo);return n.ease=i.ease,n.duration=We(i.duration),n.type="keyframes",n};function qc({keyframes:n,velocity:i=0,power:l=.8,timeConstant:o=325,bounceDamping:u=10,bounceStiffness:f=500,modifyTarget:d,min:p,max:m,restDelta:h=.5,restSpeed:y}){const b=n[0],x={done:!1,value:b},M=F=>p!==void 0&&F<p||m!==void 0&&F>m,E=F=>p===void 0?m:m===void 0||Math.abs(p-F)<Math.abs(m-F)?p:m;let O=l*i;const j=b+O,_=d===void 0?j:d(j);_!==j&&(O=_-b);const q=F=>-O*Math.exp(-F/o),B=F=>_+q(F),K=F=>{const at=q(F),Mt=B(F);x.done=Math.abs(at)<=h,x.value=x.done?_:Mt};let Y,I;const lt=F=>{M(x.value)&&(Y=F,I=qo({keyframes:[x.value,E(x.value)],velocity:ry(B,F,x.value),damping:u,stiffness:f,restDelta:h,restSpeed:y}))};return lt(0),{calculatedDuration:null,next:F=>{let at=!1;return!I&&Y===void 0&&(at=!0,K(F),lt(F)),Y!==void 0&&F>=Y?I.next(F-Y):(!at&&K(F),x)}}}function o2(n,i,l){const o=[],u=l||On.mix||ay,f=n.length-1;for(let d=0;d<f;d++){let p=u(n[d],n[d+1]);if(i){const m=Array.isArray(i)?i[d]||Be:i;p=Wr(m,p)}o.push(p)}return o}function s2(n,i,{clamp:l=!0,ease:o,mixer:u}={}){const f=n.length;if(vf(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const p=o2(i,o,u),m=p.length,h=y=>{if(d&&y<n[0])return i[0];let b=0;if(m>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const x=qr(n[b],n[b+1],y);return p[b](x)};return l?y=>h(En(n[0],n[f-1],y)):h}function u2(n,i){const l=n[n.length-1];for(let o=1;o<=i;o++){const u=qr(0,i,o);n.push(Nt(l,1,u))}}function c2(n){const i=[0];return u2(i,n.length-1),i}function f2(n,i){return n.map(l=>l*i)}function d2(n,i){return n.map(()=>i||Kg).splice(0,n.length-1)}function Ur({duration:n=300,keyframes:i,times:l,ease:o="easeInOut"}){const u=A5(o)?o.map(Ip):Ip(o),f={done:!1,value:i[0]},d=f2(l&&l.length===i.length?l:c2(i),n),p=s2(d,i,{ease:Array.isArray(u)?u:d2(i,u)});return{calculatedDuration:n,next:m=>(f.value=p(m),f.done=m>=n,f)}}const h2=n=>n!==null;function Rf(n,{repeat:i,repeatType:l="loop"},o,u=1){const f=n.filter(h2),p=u<0||i&&l!=="loop"&&i%2===1?0:f.length-1;return!p||o===void 0?f[p]:o}const m2={decay:qc,inertia:qc,tween:Ur,keyframes:Ur,spring:qo};function ly(n){typeof n.type=="string"&&(n.type=m2[n.type])}class Cf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const p2=n=>n/100;class _f extends Cf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==pe.now()&&this.tick(pe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;ly(i);const{type:l=Ur,repeat:o=0,repeatDelay:u=0,repeatType:f,velocity:d=0}=i;let{keyframes:p}=i;const m=l||Ur;m!==Ur&&typeof p[0]!="number"&&(this.mixKeyframes=Wr(p2,ay(p[0],p[1])),p=[0,100]);const h=m({...i,keyframes:p});f==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...p].reverse(),velocity:-d})),h.calculatedDuration===null&&(h.calculatedDuration=wf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+u,this.totalDuration=this.resolvedDuration*(o+1)-u,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:o,totalDuration:u,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:p,calculatedDuration:m}=this;if(this.startTime===null)return o.next(0);const{delay:h=0,keyframes:y,repeat:b,repeatType:x,repeatDelay:M,type:E,onUpdate:O,finalKeyframe:j}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-u/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const _=this.currentTime-h*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?_<0:_>u;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let B=this.currentTime,K=o;if(b){const F=Math.min(this.currentTime,u)/p;let at=Math.floor(F),Mt=F%1;!Mt&&F>=1&&(Mt=1),Mt===1&&at--,at=Math.min(at,b+1),!!(at%2)&&(x==="reverse"?(Mt=1-Mt,M&&(Mt-=M/p)):x==="mirror"&&(K=d)),B=En(0,1,Mt)*p}const Y=q?{done:!1,value:y[0]}:K.next(B);f&&(Y.value=f(Y.value));let{done:I}=Y;!q&&m!==null&&(I=this.playbackSpeed>=0?this.currentTime>=u:this.currentTime<=0);const lt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return lt&&E!==qc&&(Y.value=Rf(y,this.options,j,this.speed)),O&&O(Y.value),lt&&this.finish(),Y}then(i,l){return this.finished.then(i,l)}get duration(){return Ie(this.calculatedDuration)}get time(){return Ie(this.currentTime)}set time(i){i=We(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(pe.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Ie(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=W5,startTime:l}=this.options;this.driver||(this.driver=i(u=>this.tick(u))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(pe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function g2(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const wa=n=>n*180/Math.PI,Yc=n=>{const i=wa(Math.atan2(n[1],n[0]));return Gc(i)},y2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Yc,rotateZ:Yc,skewX:n=>wa(Math.atan(n[1])),skewY:n=>wa(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Gc=n=>(n=n%360,n<0&&(n+=360),n),r0=Yc,l0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),o0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),v2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:l0,scaleY:o0,scale:n=>(l0(n)+o0(n))/2,rotateX:n=>Gc(wa(Math.atan2(n[6],n[5]))),rotateY:n=>Gc(wa(Math.atan2(-n[2],n[0]))),rotateZ:r0,rotate:r0,skewX:n=>wa(Math.atan(n[4])),skewY:n=>wa(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Xc(n){return n.includes("scale")?1:0}function Zc(n,i){if(!n||n==="none")return Xc(i);const l=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,u;if(l)o=v2,u=l;else{const p=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=y2,u=p}if(!u)return Xc(i);const f=o[i],d=u[1].split(",").map(x2);return typeof f=="function"?f(d):d[f]}const b2=(n,i)=>{const{transform:l="none"}=getComputedStyle(n);return Zc(l,i)};function x2(n){return parseFloat(n.trim())}const Ci=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_i=new Set(Ci),s0=n=>n===Ri||n===rt,S2=new Set(["x","y","z"]),T2=Ci.filter(n=>!S2.has(n));function A2(n){const i=[];return T2.forEach(l=>{const o=n.getValue(l);o!==void 0&&(i.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),i}const Ra={width:({x:n},{paddingLeft:i="0",paddingRight:l="0"})=>n.max-n.min-parseFloat(i)-parseFloat(l),height:({y:n},{paddingTop:i="0",paddingBottom:l="0"})=>n.max-n.min-parseFloat(i)-parseFloat(l),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Zc(i,"x"),y:(n,{transform:i})=>Zc(i,"y")};Ra.translateX=Ra.x;Ra.translateY=Ra.y;const Ca=new Set;let Kc=!1,Qc=!1,Fc=!1;function oy(){if(Qc){const n=Array.from(Ca).filter(o=>o.needsMeasurement),i=new Set(n.map(o=>o.element)),l=new Map;i.forEach(o=>{const u=A2(o);u.length&&(l.set(o,u),o.render())}),n.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const u=l.get(o);u&&u.forEach(([f,d])=>{o.getValue(f)?.set(d)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Qc=!1,Kc=!1,Ca.forEach(n=>n.complete(Fc)),Ca.clear()}function sy(){Ca.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Qc=!0)})}function E2(){Fc=!0,sy(),oy(),Fc=!1}class kf{constructor(i,l,o,u,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=o,this.motionValue=u,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Ca.add(this),Kc||(Kc=!0,_t.read(sy),_t.resolveKeyframes(oy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:o,motionValue:u}=this;if(i[0]===null){const f=u?.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(o&&l){const p=o.readValue(l,d);p!=null&&(i[0]=p)}i[0]===void 0&&(i[0]=d),u&&f===void 0&&u.set(i[0])}g2(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Ca.delete(this)}cancel(){this.state==="scheduled"&&(Ca.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const O2=n=>n.startsWith("--");function M2(n,i,l){O2(i)?n.style.setProperty(i,l):n.style[i]=l}const D2=bf(()=>window.ScrollTimeline!==void 0),w2={};function R2(n,i){const l=bf(n);return()=>w2[i]??l()}const uy=R2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zr=([n,i,l,o])=>`cubic-bezier(${n}, ${i}, ${l}, ${o})`,u0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zr([0,.65,.55,1]),circOut:zr([.55,0,1,.45]),backIn:zr([.31,.01,.66,-.59]),backOut:zr([.33,1.53,.69,.99])};function cy(n,i){if(n)return typeof n=="function"?uy()?iy(n,i):"ease-out":Qg(n)?zr(n):Array.isArray(n)?n.map(l=>cy(l,i)||u0.easeOut):u0[n]}function C2(n,i,l,{delay:o=0,duration:u=300,repeat:f=0,repeatType:d="loop",ease:p="easeOut",times:m}={},h=void 0){const y={[i]:l};m&&(y.offset=m);const b=cy(p,u);Array.isArray(b)&&(y.easing=b);const x={delay:o,duration:u,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),n.animate(y,x)}function fy(n){return typeof n=="function"&&"applyToOptions"in n}function _2({type:n,...i}){return fy(n)&&uy()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class k2 extends Cf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:o,keyframes:u,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:p,onComplete:m}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,vf(typeof i.type!="string");const h=_2(i);this.animation=C2(l,o,u,h,f),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=Rf(u,this.options,p,this.speed);this.updateMotionValue?this.updateMotionValue(y):M2(l,o,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Ie(Number(i))}get time(){return Ie(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=We(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&D2()?(this.animation.timeline=i,Be):l(this)}}const dy={anticipate:Gg,backInOut:Yg,circInOut:Zg};function N2(n){return n in dy}function z2(n){typeof n.ease=="string"&&N2(n.ease)&&(n.ease=dy[n.ease])}const c0=10;class j2 extends k2{constructor(i){z2(i),ly(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:o,onComplete:u,element:f,...d}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const p=new _f({...d,autoplay:!1}),m=We(this.finishedTime??this.time);l.setWithVelocity(p.sample(m-c0).value,p.sample(m).value,c0),p.stop()}}const f0=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ia.test(n)||n==="0")&&!n.startsWith("url("));function V2(n){const i=n[0];if(n.length===1)return!0;for(let l=0;l<n.length;l++)if(n[l]!==i)return!0}function U2(n,i,l,o){const u=n[0];if(u===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=f0(u,i),p=f0(f,i);return!d||!p?!1:V2(n)||(l==="spring"||fy(l))&&o}const B2=new Set(["opacity","clipPath","filter","transform"]),L2=bf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function P2(n){const{motionValue:i,name:l,repeatDelay:o,repeatType:u,damping:f,type:d}=n;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:h}=i.owner.getProps();return L2()&&l&&B2.has(l)&&(l!=="transform"||!h)&&!m&&!o&&u!=="mirror"&&f!==0&&d!=="inertia"}const H2=40;class q2 extends Cf{constructor({autoplay:i=!0,delay:l=0,type:o="keyframes",repeat:u=0,repeatDelay:f=0,repeatType:d="loop",keyframes:p,name:m,motionValue:h,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=pe.now();const x={autoplay:i,delay:l,type:o,repeat:u,repeatDelay:f,repeatType:d,name:m,motionValue:h,element:y,...b},M=y?.KeyframeResolver||kf;this.keyframeResolver=new M(p,(E,O,j)=>this.onKeyframesResolved(E,O,x,!j),m,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,o,u){this.keyframeResolver=void 0;const{name:f,type:d,velocity:p,delay:m,isHandoff:h,onUpdate:y}=o;this.resolvedAt=pe.now(),U2(i,f,d,p)||((On.instantAnimations||!m)&&y?.(Rf(i,o,l)),i[0]=i[i.length-1],o.duration=0,o.repeat=0);const x={startTime:u?this.resolvedAt?this.resolvedAt-this.createdAt>H2?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:i},M=!h&&P2(x)?new j2({...x,element:x.motionValue.owner.current}):new _f(x);M.finished.then(()=>this.notifyFinished()).catch(Be),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),E2()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const Y2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function G2(n){const i=Y2.exec(n);if(!i)return[,];const[,l,o,u]=i;return[`--${l??o}`,u]}function hy(n,i,l=1){const[o,u]=G2(n);if(!o)return;const f=window.getComputedStyle(i).getPropertyValue(o);if(f){const d=f.trim();return jg(d)?parseFloat(d):d}return Ef(u)?hy(u,i,l+1):u}function Nf(n,i){return n?.[i]??n?.default??n}const my=new Set(["width","height","top","left","right","bottom",...Ci]),X2={test:n=>n==="auto",parse:n=>n},py=n=>i=>i.test(n),gy=[Ri,rt,tn,na,V5,j5,X2],d0=n=>gy.find(py(n));function Z2(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ug(n):!0}const K2=new Set(["brightness","contrast","saturate","opacity"]);function Q2(n){const[i,l]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[o]=l.match(Of)||[];if(!o)return n;const u=l.replace(o,"");let f=K2.has(i)?1:0;return o!==l&&(f*=100),i+"("+f+u+")"}const F2=/\b([a-z-]*)\(.*?\)/gu,Jc={...ia,getAnimatableNone:n=>{const i=n.match(F2);return i?i.map(Q2).join(" "):n}},h0={...Ri,transform:Math.round},J2={rotate:na,rotateX:na,rotateY:na,rotateZ:na,scale:Eo,scaleX:Eo,scaleY:Eo,scaleZ:Eo,skew:na,skewX:na,skewY:na,distance:rt,translateX:rt,translateY:rt,translateZ:rt,x:rt,y:rt,z:rt,perspective:rt,transformPerspective:rt,opacity:Yr,originX:t0,originY:t0,originZ:rt},zf={borderWidth:rt,borderTopWidth:rt,borderRightWidth:rt,borderBottomWidth:rt,borderLeftWidth:rt,borderRadius:rt,radius:rt,borderTopLeftRadius:rt,borderTopRightRadius:rt,borderBottomRightRadius:rt,borderBottomLeftRadius:rt,width:rt,maxWidth:rt,height:rt,maxHeight:rt,top:rt,right:rt,bottom:rt,left:rt,padding:rt,paddingTop:rt,paddingRight:rt,paddingBottom:rt,paddingLeft:rt,margin:rt,marginTop:rt,marginRight:rt,marginBottom:rt,marginLeft:rt,backgroundPositionX:rt,backgroundPositionY:rt,...J2,zIndex:h0,fillOpacity:Yr,strokeOpacity:Yr,numOctaves:h0},$2={...zf,color:Yt,backgroundColor:Yt,outlineColor:Yt,fill:Yt,stroke:Yt,borderColor:Yt,borderTopColor:Yt,borderRightColor:Yt,borderBottomColor:Yt,borderLeftColor:Yt,filter:Jc,WebkitFilter:Jc},yy=n=>$2[n];function vy(n,i){let l=yy(n);return l!==Jc&&(l=ia),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const W2=new Set(["auto","none","0"]);function I2(n,i,l){let o=0,u;for(;o<n.length&&!u;){const f=n[o];typeof f=="string"&&!W2.has(f)&&Gr(f).values.length&&(u=n[o]),o++}if(u&&l)for(const f of i)n[f]=vy(l,u)}class tS extends kf{constructor(i,l,o,u,f){super(i,l,o,u,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let h=i[m];if(typeof h=="string"&&(h=h.trim(),Ef(h))){const y=hy(h,l.current);y!==void 0&&(i[m]=y),m===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!my.has(o)||i.length!==2)return;const[u,f]=i,d=d0(u),p=d0(f);if(d!==p)if(s0(d)&&s0(p))for(let m=0;m<i.length;m++){const h=i[m];typeof h=="string"&&(i[m]=parseFloat(h))}else Ra[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,o=[];for(let u=0;u<i.length;u++)(i[u]===null||Z2(i[u]))&&o.push(u);o.length&&I2(i,o,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ra[o](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const u=l[l.length-1];u!==void 0&&i.getValue(o,u).jump(u,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const u=i.getValue(l);u&&u.jump(this.measuredOrigin,!1);const f=o.length-1,d=o[f];o[f]=Ra[l](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([p,m])=>{i.getValue(p).set(m)}),this.resolveNoneKeyframes()}}function eS(n,i,l){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const u=l?.[n]??o.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}const by=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function nS(n){return Vg(n)&&"offsetHeight"in n}const m0=30,aS=n=>!isNaN(parseFloat(n));class iS{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,u=!0)=>{const f=pe.now();if(this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty();u&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=pe.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=aS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new xf);const o=this.events[i].add(l);return i==="change"?()=>{o(),_t.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=pe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>m0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,m0);return Bg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Oi(n,i){return new iS(n,i)}const{schedule:jf}=Fg(queueMicrotask,!1),Ye={x:!1,y:!1};function xy(){return Ye.x||Ye.y}function rS(n){return n==="x"||n==="y"?Ye[n]?null:(Ye[n]=!0,()=>{Ye[n]=!1}):Ye.x||Ye.y?null:(Ye.x=Ye.y=!0,()=>{Ye.x=Ye.y=!1})}function Sy(n,i){const l=eS(n),o=new AbortController,u={passive:!0,...i,signal:o.signal};return[l,u,()=>o.abort()]}function p0(n){return!(n.pointerType==="touch"||xy())}function lS(n,i,l={}){const[o,u,f]=Sy(n,l),d=p=>{if(!p0(p))return;const{target:m}=p,h=i(m,p);if(typeof h!="function"||!m)return;const y=b=>{p0(b)&&(h(b),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,u)};return o.forEach(p=>{p.addEventListener("pointerenter",d,u)}),f}const Ty=(n,i)=>i?n===i?!0:Ty(n,i.parentElement):!1,Vf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,oS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function sS(n){return oS.has(n.tagName)||n.tabIndex!==-1}const Vo=new WeakSet;function g0(n){return i=>{i.key==="Enter"&&n(i)}}function Dc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const uS=(n,i)=>{const l=n.currentTarget;if(!l)return;const o=g0(()=>{if(Vo.has(l))return;Dc(l,"down");const u=g0(()=>{Dc(l,"up")}),f=()=>Dc(l,"cancel");l.addEventListener("keyup",u,i),l.addEventListener("blur",f,i)});l.addEventListener("keydown",o,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),i)};function y0(n){return Vf(n)&&!xy()}function cS(n,i,l={}){const[o,u,f]=Sy(n,l),d=p=>{const m=p.currentTarget;if(!y0(p))return;Vo.add(m);const h=i(m,p),y=(M,E)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",x),Vo.has(m)&&Vo.delete(m),y0(M)&&typeof h=="function"&&h(M,{success:E})},b=M=>{y(M,m===window||m===document||l.useGlobalTarget||Ty(m,M.target))},x=M=>{y(M,!1)};window.addEventListener("pointerup",b,u),window.addEventListener("pointercancel",x,u)};return o.forEach(p=>{(l.useGlobalTarget?window:p).addEventListener("pointerdown",d,u),nS(p)&&(p.addEventListener("focus",h=>uS(h,u)),!sS(p)&&!p.hasAttribute("tabindex")&&(p.tabIndex=0))}),f}function Ay(n){return Vg(n)&&"ownerSVGElement"in n}function fS(n){return Ay(n)&&n.tagName==="svg"}const oe=n=>!!(n&&n.getVelocity),dS=[...gy,Yt,ia],hS=n=>dS.find(py(n)),Ey=R.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function mS(n=!0){const i=R.useContext(pf);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:u}=i,f=R.useId();R.useEffect(()=>{if(n)return u(f)},[n]);const d=R.useCallback(()=>n&&o&&o(f),[f,o,n]);return!l&&o?[!1,d]:[!0]}const Oy=R.createContext({strict:!1}),v0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mi={};for(const n in v0)Mi[n]={isEnabled:i=>v0[n].some(l=>!!i[l])};function pS(n){for(const i in n)Mi[i]={...Mi[i],...n[i]}}const gS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Yo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||gS.has(n)}let My=n=>!Yo(n);function yS(n){typeof n=="function"&&(My=i=>i.startsWith("on")?!Yo(i):n(i))}try{yS(require("@emotion/is-prop-valid").default)}catch{}function vS(n,i,l){const o={};for(const u in n)u==="values"&&typeof n.values=="object"||(My(u)||l===!0&&Yo(u)||!i&&!Yo(u)||n.draggable&&u.startsWith("onDrag"))&&(o[u]=n[u]);return o}const Qo=R.createContext({});function Fo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Xr(n){return typeof n=="string"||Array.isArray(n)}const Uf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bf=["initial",...Uf];function Jo(n){return Fo(n.animate)||Bf.some(i=>Xr(n[i]))}function Dy(n){return!!(Jo(n)||n.variants)}function bS(n,i){if(Jo(n)){const{initial:l,animate:o}=n;return{initial:l===!1||Xr(l)?l:void 0,animate:Xr(o)?o:void 0}}return n.inherit!==!1?i:{}}function xS(n){const{initial:i,animate:l}=bS(n,R.useContext(Qo));return R.useMemo(()=>({initial:i,animate:l}),[b0(i),b0(l)])}function b0(n){return Array.isArray(n)?n.join(" "):n}const Zr={};function SS(n){for(const i in n)Zr[i]=n[i],Af(i)&&(Zr[i].isCSSVariable=!0)}function wy(n,{layout:i,layoutId:l}){return _i.has(n)||n.startsWith("origin")||(i||l!==void 0)&&(!!Zr[n]||n==="opacity")}const TS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},AS=Ci.length;function ES(n,i,l){let o="",u=!0;for(let f=0;f<AS;f++){const d=Ci[f],p=n[d];if(p===void 0)continue;let m=!0;if(typeof p=="number"?m=p===(d.startsWith("scale")?1:0):m=parseFloat(p)===0,!m||l){const h=by(p,zf[d]);if(!m){u=!1;const y=TS[d]||d;o+=`${y}(${h}) `}l&&(i[d]=h)}}return o=o.trim(),l?o=l(i,u?"":o):u&&(o="none"),o}function Lf(n,i,l){const{style:o,vars:u,transformOrigin:f}=n;let d=!1,p=!1;for(const m in i){const h=i[m];if(_i.has(m)){d=!0;continue}else if(Af(m)){u[m]=h;continue}else{const y=by(h,zf[m]);m.startsWith("origin")?(p=!0,f[m]=y):o[m]=y}}if(i.transform||(d||l?o.transform=ES(i,n.transform,l):o.transform&&(o.transform="none")),p){const{originX:m="50%",originY:h="50%",originZ:y=0}=f;o.transformOrigin=`${m} ${h} ${y}`}}const Pf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ry(n,i,l){for(const o in i)!oe(i[o])&&!wy(o,l)&&(n[o]=i[o])}function OS({transformTemplate:n},i){return R.useMemo(()=>{const l=Pf();return Lf(l,i,n),Object.assign({},l.vars,l.style)},[i])}function MS(n,i){const l=n.style||{},o={};return Ry(o,l,n),Object.assign(o,OS(n,i)),o}function DS(n,i){const l={},o=MS(n,i);return n.drag&&n.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(l.tabIndex=0),l.style=o,l}const wS={offset:"stroke-dashoffset",array:"stroke-dasharray"},RS={offset:"strokeDashoffset",array:"strokeDasharray"};function CS(n,i,l=1,o=0,u=!0){n.pathLength=1;const f=u?wS:RS;n[f.offset]=rt.transform(-o);const d=rt.transform(i),p=rt.transform(l);n[f.array]=`${d} ${p}`}function Cy(n,{attrX:i,attrY:l,attrScale:o,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...p},m,h,y){if(Lf(n,p,h),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:x}=n;b.transform&&(x.transform=b.transform,delete b.transform),(x.transform||b.transformOrigin)&&(x.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),l!==void 0&&(b.y=l),o!==void 0&&(b.scale=o),u!==void 0&&CS(b,u,f,d,!1)}const _y=()=>({...Pf(),attrs:{}}),ky=n=>typeof n=="string"&&n.toLowerCase()==="svg";function _S(n,i,l,o){const u=R.useMemo(()=>{const f=_y();return Cy(f,i,ky(o),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Ry(f,n.style,n),u.style={...f,...u.style}}return u}const kS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hf(n){return typeof n!="string"||n.includes("-")?!1:!!(kS.indexOf(n)>-1||/[A-Z]/u.test(n))}function NS(n,i,l,{latestValues:o},u,f=!1){const p=(Hf(n)?_S:DS)(i,o,u,n),m=vS(i,typeof n=="string",f),h=n!==R.Fragment?{...m,...p,ref:l}:{},{children:y}=i,b=R.useMemo(()=>oe(y)?y.get():y,[y]);return R.createElement(n,{...h,children:b})}function x0(n){const i=[{},{}];return n?.values.forEach((l,o)=>{i[0][o]=l.get(),i[1][o]=l.getVelocity()}),i}function qf(n,i,l,o){if(typeof i=="function"){const[u,f]=x0(o);i=i(l!==void 0?l:n.custom,u,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[u,f]=x0(o);i=i(l!==void 0?l:n.custom,u,f)}return i}function Uo(n){return oe(n)?n.get():n}function zS({scrapeMotionValuesFromProps:n,createRenderState:i},l,o,u){return{latestValues:jS(l,o,u,n),renderState:i()}}function jS(n,i,l,o){const u={},f=o(n,{});for(const x in f)u[x]=Uo(f[x]);let{initial:d,animate:p}=n;const m=Jo(n),h=Dy(n);i&&h&&!m&&n.inherit!==!1&&(d===void 0&&(d=i.initial),p===void 0&&(p=i.animate));let y=l?l.initial===!1:!1;y=y||d===!1;const b=y?p:d;if(b&&typeof b!="boolean"&&!Fo(b)){const x=Array.isArray(b)?b:[b];for(let M=0;M<x.length;M++){const E=qf(n,x[M]);if(E){const{transitionEnd:O,transition:j,..._}=E;for(const q in _){let B=_[q];if(Array.isArray(B)){const K=y?B.length-1:0;B=B[K]}B!==null&&(u[q]=B)}for(const q in O)u[q]=O[q]}}}return u}const Ny=n=>(i,l)=>{const o=R.useContext(Qo),u=R.useContext(pf),f=()=>zS(n,i,o,u);return l?f():p5(f)};function Yf(n,i,l){const{style:o}=n,u={};for(const f in o)(oe(o[f])||i.style&&oe(i.style[f])||wy(f,n)||l?.getValue(f)?.liveStyle!==void 0)&&(u[f]=o[f]);return u}const VS=Ny({scrapeMotionValuesFromProps:Yf,createRenderState:Pf});function zy(n,i,l){const o=Yf(n,i,l);for(const u in n)if(oe(n[u])||oe(i[u])){const f=Ci.indexOf(u)!==-1?"attr"+u.charAt(0).toUpperCase()+u.substring(1):u;o[f]=n[u]}return o}const US=Ny({scrapeMotionValuesFromProps:zy,createRenderState:_y}),BS=Symbol.for("motionComponentSymbol");function Si(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function LS(n,i,l){return R.useCallback(o=>{o&&n.onMount&&n.onMount(o),i&&(o?i.mount(o):i.unmount()),l&&(typeof l=="function"?l(o):Si(l)&&(l.current=o))},[i])}const Gf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),PS="framerAppearId",jy="data-"+Gf(PS),Vy=R.createContext({});function HS(n,i,l,o,u){const{visualElement:f}=R.useContext(Qo),d=R.useContext(Oy),p=R.useContext(pf),m=R.useContext(Ey).reducedMotion,h=R.useRef(null);o=o||d.renderer,!h.current&&o&&(h.current=o(n,{visualState:i,parent:f,props:l,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:m}));const y=h.current,b=R.useContext(Vy);y&&!y.projection&&u&&(y.type==="html"||y.type==="svg")&&qS(h.current,l,u,b);const x=R.useRef(!1);R.useInsertionEffect(()=>{y&&x.current&&y.update(l,p)});const M=l[jy],E=R.useRef(!!M&&!window.MotionHandoffIsComplete?.(M)&&window.MotionHasOptimisedAnimation?.(M));return g5(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),E.current&&y.animationState&&y.animationState.animateChanges())}),R.useEffect(()=>{y&&(!E.current&&y.animationState&&y.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(M)}),E.current=!1))}),y}function qS(n,i,l,o){const{layoutId:u,layout:f,drag:d,dragConstraints:p,layoutScroll:m,layoutRoot:h,layoutCrossfade:y}=i;n.projection=new l(n.latestValues,i["data-framer-portal-id"]?void 0:Uy(n.parent)),n.projection.setOptions({layoutId:u,layout:f,alwaysMeasureLayout:!!d||p&&Si(p),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:m,layoutRoot:h})}function Uy(n){if(n)return n.options.allowProjection!==!1?n.projection:Uy(n.parent)}function wc(n,{forwardMotionProps:i=!1}={},l,o){l&&pS(l);const u=Hf(n)?US:VS;function f(p,m){let h;const y={...R.useContext(Ey),...p,layoutId:YS(p)},{isStatic:b}=y,x=xS(p),M=u(p,b);if(!b&&mf){GS();const E=XS(y);h=E.MeasureLayout,x.visualElement=HS(n,M,y,o,E.ProjectionNode)}return w.jsxs(Qo.Provider,{value:x,children:[h&&x.visualElement?w.jsx(h,{visualElement:x.visualElement,...y}):null,NS(n,p,LS(M,x.visualElement,m),M,b,i)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=R.forwardRef(f);return d[BS]=n,d}function YS({layoutId:n}){const i=R.useContext(zg).id;return i&&n!==void 0?i+"-"+n:n}function GS(n,i){R.useContext(Oy).strict}function XS(n){const{drag:i,layout:l}=Mi;if(!i&&!l)return{};const o={...i,...l};return{MeasureLayout:i?.isEnabled(n)||l?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function ZS(n,i){if(typeof Proxy>"u")return wc;const l=new Map,o=(f,d)=>wc(f,d,n,i),u=(f,d)=>o(f,d);return new Proxy(u,{get:(f,d)=>d==="create"?o:(l.has(d)||l.set(d,wc(d,void 0,n,i)),l.get(d))})}function By({top:n,left:i,right:l,bottom:o}){return{x:{min:i,max:l},y:{min:n,max:o}}}function KS({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function QS(n,i){if(!i)return n;const l=i({x:n.left,y:n.top}),o=i({x:n.right,y:n.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function Rc(n){return n===void 0||n===1}function $c({scale:n,scaleX:i,scaleY:l}){return!Rc(n)||!Rc(i)||!Rc(l)}function Ma(n){return $c(n)||Ly(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ly(n){return S0(n.x)||S0(n.y)}function S0(n){return n&&n!=="0%"}function Go(n,i,l){const o=n-l,u=i*o;return l+u}function T0(n,i,l,o,u){return u!==void 0&&(n=Go(n,u,o)),Go(n,l,o)+i}function Wc(n,i=0,l=1,o,u){n.min=T0(n.min,i,l,o,u),n.max=T0(n.max,i,l,o,u)}function Py(n,{x:i,y:l}){Wc(n.x,i.translate,i.scale,i.originPoint),Wc(n.y,l.translate,l.scale,l.originPoint)}const A0=.999999999999,E0=1.0000000000001;function FS(n,i,l,o=!1){const u=l.length;if(!u)return;i.x=i.y=1;let f,d;for(let p=0;p<u;p++){f=l[p],d=f.projectionDelta;const{visualElement:m}=f.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ai(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Py(n,d)),o&&Ma(f.latestValues)&&Ai(n,f.latestValues))}i.x<E0&&i.x>A0&&(i.x=1),i.y<E0&&i.y>A0&&(i.y=1)}function Ti(n,i){n.min=n.min+i,n.max=n.max+i}function O0(n,i,l,o,u=.5){const f=Nt(n.min,n.max,u);Wc(n,i,l,f,o)}function Ai(n,i){O0(n.x,i.x,i.scaleX,i.scale,i.originX),O0(n.y,i.y,i.scaleY,i.scale,i.originY)}function Hy(n,i){return By(QS(n.getBoundingClientRect(),i))}function JS(n,i,l){const o=Hy(n,l),{scroll:u}=i;return u&&(Ti(o.x,u.offset.x),Ti(o.y,u.offset.y)),o}const M0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ei=()=>({x:M0(),y:M0()}),D0=()=>({min:0,max:0}),Pt=()=>({x:D0(),y:D0()}),Ic={current:null},qy={current:!1};function $S(){if(qy.current=!0,!!mf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Ic.current=n.matches;n.addEventListener("change",i),i()}else Ic.current=!1}const WS=new WeakMap;function IS(n,i,l){for(const o in i){const u=i[o],f=l[o];if(oe(u))n.addValue(o,u);else if(oe(f))n.addValue(o,Oi(u,{owner:n}));else if(f!==u)if(n.hasValue(o)){const d=n.getValue(o);d.liveStyle===!0?d.jump(u):d.hasAnimated||d.set(u)}else{const d=n.getStaticValue(o);n.addValue(o,Oi(d!==void 0?d:u,{owner:n}))}}for(const o in l)i[o]===void 0&&n.removeValue(o);return i}const w0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class tT{scrapeMotionValuesFromProps(i,l,o){return{}}constructor({parent:i,props:l,presenceContext:o,reducedMotionConfig:u,blockInitialAnimation:f,visualState:d},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=kf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=pe.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,_t.render(this.render,!1,!0))};const{latestValues:m,renderState:h}=d;this.latestValues=m,this.baseTarget={...m},this.initialValues=l.initial?{...m}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=u,this.options=p,this.blockInitialAnimation=!!f,this.isControllingVariants=Jo(l),this.isVariantNode=Dy(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in b){const M=b[x];m[x]!==void 0&&oe(M)&&M.set(m[x],!1)}}mount(i){this.current=i,WS.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),qy.current||$S(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ic.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),aa(this.notifyUpdate),aa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const o=_i.has(i);o&&this.onBindTransform&&this.onBindTransform();const u=l.on("change",p=>{this.latestValues[i]=p,this.props.onUpdate&&_t.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),f=l.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{u(),f(),d&&d(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Mi){const l=Mi[i];if(!l)continue;const{isEnabled:o,Feature:u}=l;if(!this.features[i]&&u&&o(this.props)&&(this.features[i]=new u(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<w0.length;o++){const u=w0[o];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const f="on"+u,d=i[f];d&&(this.propEventSubscriptions[u]=this.on(u,d))}this.prevMotionValues=IS(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const o=this.values.get(i);l!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&l!==void 0&&(o=Oi(l===null?void 0:l,{owner:this}),this.addValue(i,o)),o}readValue(i,l){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(jg(o)||Ug(o))?o=parseFloat(o):!hS(o)&&ia.test(l)&&(o=vy(i,l)),this.setBaseTarget(i,oe(o)?o.get():o)),oe(o)?o.get():o}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const f=qf(this.props,l,this.presenceContext?.custom);f&&(o=f[i])}if(l&&o!==void 0)return o;const u=this.getBaseTargetFromProps(this.props,i);return u!==void 0&&!oe(u)?u:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new xf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){jf.render(this.render)}}class Yy extends tT{constructor(){super(...arguments),this.KeyframeResolver=tS}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:o}){delete l[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;oe(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function Gy(n,{style:i,vars:l},o,u){const f=n.style;let d;for(d in i)f[d]=i[d];u?.applyProjectionStyles(f,o);for(d in l)f.setProperty(d,l[d])}function eT(n){return window.getComputedStyle(n)}class nT extends Yy{constructor(){super(...arguments),this.type="html",this.renderInstance=Gy}readValueFromInstance(i,l){if(_i.has(l))return this.projection?.isProjecting?Xc(l):b2(i,l);{const o=eT(i),u=(Af(l)?o.getPropertyValue(l):o[l])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(i,{transformPagePoint:l}){return Hy(i,l)}build(i,l,o){Lf(i,l,o.transformTemplate)}scrapeMotionValuesFromProps(i,l,o){return Yf(i,l,o)}}const Xy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function aT(n,i,l,o){Gy(n,i,void 0,o);for(const u in i.attrs)n.setAttribute(Xy.has(u)?u:Gf(u),i.attrs[u])}class iT extends Yy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pt}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(_i.has(l)){const o=yy(l);return o&&o.default||0}return l=Xy.has(l)?l:Gf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,o){return zy(i,l,o)}build(i,l,o){Cy(i,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(i,l,o,u){aT(i,l,o,u)}mount(i){this.isSVGTag=ky(i.tagName),super.mount(i)}}const rT=(n,i)=>Hf(n)?new iT(i):new nT(i,{allowProjection:n!==R.Fragment});function Kr(n,i,l){const o=n.getProps();return qf(o,i,l!==void 0?l:o.custom,n)}const tf=n=>Array.isArray(n);function lT(n,i,l){n.hasValue(i)?n.getValue(i).set(l):n.addValue(i,Oi(l))}function oT(n){return tf(n)?n[n.length-1]||0:n}function sT(n,i){const l=Kr(n,i);let{transitionEnd:o={},transition:u={},...f}=l||{};f={...f,...o};for(const d in f){const p=oT(f[d]);lT(n,d,p)}}function uT(n){return!!(oe(n)&&n.add)}function ef(n,i){const l=n.getValue("willChange");if(uT(l))return l.add(i);if(!l&&On.WillChange){const o=new On.WillChange("auto");n.addValue("willChange",o),o.add(i)}}function Zy(n){return n.props[jy]}const cT=n=>n!==null;function fT(n,{repeat:i,repeatType:l="loop"},o){const u=n.filter(cT),f=i&&l!=="loop"&&i%2===1?0:u.length-1;return u[f]}const dT={type:"spring",stiffness:500,damping:25,restSpeed:10},hT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),mT={type:"keyframes",duration:.8},pT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},gT=(n,{keyframes:i})=>i.length>2?mT:_i.has(n)?n.startsWith("scale")?hT(i[1]):dT:pT;function yT({when:n,delay:i,delayChildren:l,staggerChildren:o,staggerDirection:u,repeat:f,repeatType:d,repeatDelay:p,from:m,elapsed:h,...y}){return!!Object.keys(y).length}const Xf=(n,i,l,o={},u,f)=>d=>{const p=Nf(o,n)||{},m=p.delay||o.delay||0;let{elapsed:h=0}=o;h=h-We(m);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...p,delay:-h,onUpdate:x=>{i.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{d(),p.onComplete&&p.onComplete()},name:n,motionValue:i,element:f?void 0:u};yT(p)||Object.assign(y,gT(n,y)),y.duration&&(y.duration=We(y.duration)),y.repeatDelay&&(y.repeatDelay=We(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(On.instantAnimations||On.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!p.type&&!p.ease,b&&!f&&i.get()!==void 0){const x=fT(y.keyframes,p);if(x!==void 0){_t.update(()=>{y.onUpdate(x),y.onComplete()});return}}return p.isSync?new _f(y):new q2(y)};function vT({protectedKeys:n,needsAnimating:i},l){const o=n.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,o}function Ky(n,i,{delay:l=0,transitionOverride:o,type:u}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...p}=i;o&&(f=o);const m=[],h=u&&n.animationState&&n.animationState.getState()[u];for(const y in p){const b=n.getValue(y,n.latestValues[y]??null),x=p[y];if(x===void 0||h&&vT(h,y))continue;const M={delay:l,...Nf(f||{},y)},E=b.get();if(E!==void 0&&!b.isAnimating&&!Array.isArray(x)&&x===E&&!M.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const _=Zy(n);if(_){const q=window.MotionHandoffAnimation(_,y,_t);q!==null&&(M.startTime=q,O=!0)}}ef(n,y),b.start(Xf(y,b,x,n.shouldReduceMotion&&my.has(y)?{type:!1}:M,n,O));const j=b.animation;j&&m.push(j)}return d&&Promise.all(m).then(()=>{_t.update(()=>{d&&sT(n,d)})}),m}function nf(n,i,l={}){const o=Kr(n,i,l.type==="exit"?n.presenceContext?.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(u=l.transitionOverride);const f=o?()=>Promise.all(Ky(n,o,l)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:b}=u;return bT(n,i,m,h,y,b,l)}:()=>Promise.resolve(),{when:p}=u;if(p){const[m,h]=p==="beforeChildren"?[f,d]:[d,f];return m().then(()=>h())}else return Promise.all([f(),d(l.delay)])}function bT(n,i,l=0,o=0,u=0,f=1,d){const p=[],m=n.variantChildren.size,h=(m-1)*u,y=typeof o=="function",b=y?x=>o(x,m):f===1?(x=0)=>x*u:(x=0)=>h-x*u;return Array.from(n.variantChildren).sort(xT).forEach((x,M)=>{x.notify("AnimationStart",i),p.push(nf(x,i,{...d,delay:l+(y?0:o)+b(M)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(p)}function xT(n,i){return n.sortNodePosition(i)}function ST(n,i,l={}){n.notify("AnimationStart",i);let o;if(Array.isArray(i)){const u=i.map(f=>nf(n,f,l));o=Promise.all(u)}else if(typeof i=="string")o=nf(n,i,l);else{const u=typeof i=="function"?Kr(n,i,l.custom):i;o=Promise.all(Ky(n,u,l))}return o.then(()=>{n.notify("AnimationComplete",i)})}function Qy(n,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==n.length)return!1;for(let o=0;o<l;o++)if(i[o]!==n[o])return!1;return!0}const TT=Bf.length;function Fy(n){if(!n)return;if(!n.isControllingVariants){const l=n.parent?Fy(n.parent)||{}:{};return n.props.initial!==void 0&&(l.initial=n.props.initial),l}const i={};for(let l=0;l<TT;l++){const o=Bf[l],u=n.props[o];(Xr(u)||u===!1)&&(i[o]=u)}return i}const AT=[...Uf].reverse(),ET=Uf.length;function OT(n){return i=>Promise.all(i.map(({animation:l,options:o})=>ST(n,l,o)))}function MT(n){let i=OT(n),l=R0(),o=!0;const u=m=>(h,y)=>{const b=Kr(n,y,m==="exit"?n.presenceContext?.custom:void 0);if(b){const{transition:x,transitionEnd:M,...E}=b;h={...h,...E,...M}}return h};function f(m){i=m(n)}function d(m){const{props:h}=n,y=Fy(n.parent)||{},b=[],x=new Set;let M={},E=1/0;for(let j=0;j<ET;j++){const _=AT[j],q=l[_],B=h[_]!==void 0?h[_]:y[_],K=Xr(B),Y=_===m?q.isActive:null;Y===!1&&(E=j);let I=B===y[_]&&B!==h[_]&&K;if(I&&o&&n.manuallyAnimateOnMount&&(I=!1),q.protectedKeys={...M},!q.isActive&&Y===null||!B&&!q.prevProp||Fo(B)||typeof B=="boolean")continue;const lt=DT(q.prevProp,B);let F=lt||_===m&&q.isActive&&!I&&K||j>E&&K,at=!1;const Mt=Array.isArray(B)?B:[B];let Gt=Mt.reduce(u(_),{});Y===!1&&(Gt={});const{prevResolvedValues:Xt={}}=q,an={...Xt,...Gt},Xe=G=>{F=!0,x.has(G)&&(at=!0,x.delete(G)),q.needsAnimating[G]=!0;const $=n.getValue(G);$&&($.liveStyle=!1)};for(const G in an){const $=Gt[G],yt=Xt[G];if(M.hasOwnProperty(G))continue;let T=!1;tf($)&&tf(yt)?T=!Qy($,yt):T=$!==yt,T?$!=null?Xe(G):x.add(G):$!==void 0&&x.has(G)?Xe(G):q.protectedKeys[G]=!0}q.prevProp=B,q.prevResolvedValues=Gt,q.isActive&&(M={...M,...Gt}),o&&n.blockInitialAnimation&&(F=!1),F&&(!(I&&lt)||at)&&b.push(...Mt.map(G=>({animation:G,options:{type:_}})))}if(x.size){const j={};if(typeof h.initial!="boolean"){const _=Kr(n,Array.isArray(h.initial)?h.initial[0]:h.initial);_&&_.transition&&(j.transition=_.transition)}x.forEach(_=>{const q=n.getBaseTarget(_),B=n.getValue(_);B&&(B.liveStyle=!0),j[_]=q??null}),b.push({animation:j})}let O=!!b.length;return o&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(O=!1),o=!1,O?i(b):Promise.resolve()}function p(m,h){if(l[m].isActive===h)return Promise.resolve();n.variantChildren?.forEach(b=>b.animationState?.setActive(m,h)),l[m].isActive=h;const y=d(m);for(const b in l)l[b].protectedKeys={};return y}return{animateChanges:d,setActive:p,setAnimateFunction:f,getState:()=>l,reset:()=>{l=R0(),o=!0}}}function DT(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Qy(i,n):!1}function Ea(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function R0(){return{animate:Ea(!0),whileInView:Ea(),whileHover:Ea(),whileTap:Ea(),whileDrag:Ea(),whileFocus:Ea(),exit:Ea()}}class ra{constructor(i){this.isMounted=!1,this.node=i}update(){}}class wT extends ra{constructor(i){super(i),i.animationState||(i.animationState=MT(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Fo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let RT=0;class CT extends ra{constructor(){super(...arguments),this.id=RT++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;const u=this.node.animationState.setActive("exit",!i);l&&!i&&u.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const _T={animation:{Feature:wT},exit:{Feature:CT}};function Qr(n,i,l,o={passive:!0}){return n.addEventListener(i,l,o),()=>n.removeEventListener(i,l)}function el(n){return{point:{x:n.pageX,y:n.pageY}}}const kT=n=>i=>Vf(i)&&n(i,el(i));function Br(n,i,l,o){return Qr(n,i,kT(l),o)}const Jy=1e-4,NT=1-Jy,zT=1+Jy,$y=.01,jT=0-$y,VT=0+$y;function ue(n){return n.max-n.min}function UT(n,i,l){return Math.abs(n-i)<=l}function C0(n,i,l,o=.5){n.origin=o,n.originPoint=Nt(i.min,i.max,n.origin),n.scale=ue(l)/ue(i),n.translate=Nt(l.min,l.max,n.origin)-n.originPoint,(n.scale>=NT&&n.scale<=zT||isNaN(n.scale))&&(n.scale=1),(n.translate>=jT&&n.translate<=VT||isNaN(n.translate))&&(n.translate=0)}function Lr(n,i,l,o){C0(n.x,i.x,l.x,o?o.originX:void 0),C0(n.y,i.y,l.y,o?o.originY:void 0)}function _0(n,i,l){n.min=l.min+i.min,n.max=n.min+ue(i)}function BT(n,i,l){_0(n.x,i.x,l.x),_0(n.y,i.y,l.y)}function k0(n,i,l){n.min=i.min-l.min,n.max=n.min+ue(i)}function Pr(n,i,l){k0(n.x,i.x,l.x),k0(n.y,i.y,l.y)}function Ue(n){return[n("x"),n("y")]}const Wy=({current:n})=>n?n.ownerDocument.defaultView:null,N0=(n,i)=>Math.abs(n-i);function LT(n,i){const l=N0(n.x,i.x),o=N0(n.y,i.y);return Math.sqrt(l**2+o**2)}class Iy{constructor(i,l,{transformPagePoint:o,contextWindow:u=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=_c(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,E=LT(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!E)return;const{point:O}=x,{timestamp:j}=ae;this.history.push({...O,timestamp:j});const{onStart:_,onMove:q}=this.handlers;M||(_&&_(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),q&&q(this.lastMoveEvent,x)},this.handlePointerMove=(x,M)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Cc(M,this.transformPagePoint),_t.update(this.updatePoint,!0)},this.handlePointerUp=(x,M)=>{this.end();const{onEnd:E,onSessionEnd:O,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=_c(x.type==="pointercancel"?this.lastMoveEventInfo:Cc(M,this.transformPagePoint),this.history);this.startEvent&&E&&E(x,_),O&&O(x,_)},!Vf(i))return;this.dragSnapToOrigin=f,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=u||window;const p=el(i),m=Cc(p,this.transformPagePoint),{point:h}=m,{timestamp:y}=ae;this.history=[{...h,timestamp:y}];const{onSessionStart:b}=l;b&&b(i,_c(m,this.history)),this.removeListeners=Wr(Br(this.contextWindow,"pointermove",this.handlePointerMove),Br(this.contextWindow,"pointerup",this.handlePointerUp),Br(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),aa(this.updatePoint)}}function Cc(n,i){return i?{point:i(n.point)}:n}function z0(n,i){return{x:n.x-i.x,y:n.y-i.y}}function _c({point:n},i){return{point:n,delta:z0(n,tv(i)),offset:z0(n,PT(i)),velocity:HT(i,.1)}}function PT(n){return n[0]}function tv(n){return n[n.length-1]}function HT(n,i){if(n.length<2)return{x:0,y:0};let l=n.length-1,o=null;const u=tv(n);for(;l>=0&&(o=n[l],!(u.timestamp-o.timestamp>We(i)));)l--;if(!o)return{x:0,y:0};const f=Ie(u.timestamp-o.timestamp);if(f===0)return{x:0,y:0};const d={x:(u.x-o.x)/f,y:(u.y-o.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function qT(n,{min:i,max:l},o){return i!==void 0&&n<i?n=o?Nt(i,n,o.min):Math.max(n,i):l!==void 0&&n>l&&(n=o?Nt(l,n,o.max):Math.min(n,l)),n}function j0(n,i,l){return{min:i!==void 0?n.min+i:void 0,max:l!==void 0?n.max+l-(n.max-n.min):void 0}}function YT(n,{top:i,left:l,bottom:o,right:u}){return{x:j0(n.x,l,u),y:j0(n.y,i,o)}}function V0(n,i){let l=i.min-n.min,o=i.max-n.max;return i.max-i.min<n.max-n.min&&([l,o]=[o,l]),{min:l,max:o}}function GT(n,i){return{x:V0(n.x,i.x),y:V0(n.y,i.y)}}function XT(n,i){let l=.5;const o=ue(n),u=ue(i);return u>o?l=qr(i.min,i.max-o,n.min):o>u&&(l=qr(n.min,n.max-u,i.min)),En(0,1,l)}function ZT(n,i){const l={};return i.min!==void 0&&(l.min=i.min-n.min),i.max!==void 0&&(l.max=i.max-n.min),l}const af=.35;function KT(n=af){return n===!1?n=0:n===!0&&(n=af),{x:U0(n,"left","right"),y:U0(n,"top","bottom")}}function U0(n,i,l){return{min:B0(n,i),max:B0(n,l)}}function B0(n,i){return typeof n=="number"?n:n[i]||0}const QT=new WeakMap;class FT{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:u}=this.visualElement;if(u&&u.isPresent===!1)return;const f=b=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(el(b).point)},d=(b,x)=>{const{drag:M,dragPropagation:E,onDragStart:O}=this.getProps();if(M&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=rS(M),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ue(_=>{let q=this.getAxisMotionValue(_).get()||0;if(tn.test(q)){const{projection:B}=this.visualElement;if(B&&B.layout){const K=B.layout.layoutBox[_];K&&(q=ue(K)*(parseFloat(q)/100))}}this.originPoint[_]=q}),O&&_t.postRender(()=>O(b,x)),ef(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},p=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x;const{dragPropagation:M,dragDirectionLock:E,onDirectionLock:O,onDrag:j}=this.getProps();if(!M&&!this.openDragLock)return;const{offset:_}=x;if(E&&this.currentDirection===null){this.currentDirection=JT(_),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",x.point,_),this.updateAxis("y",x.point,_),this.visualElement.render(),j&&j(b,x)},m=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x,this.stop(b,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>Ue(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Iy(i,{onSessionStart:f,onStart:d,onMove:p,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:o,contextWindow:Wy(this.visualElement)})}stop(i,l){const o=i||this.latestPointerEvent,u=l||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!u||!o)return;const{velocity:d}=u;this.startAnimation(d);const{onDragEnd:p}=this.getProps();p&&_t.postRender(()=>p(o,u))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,o){const{drag:u}=this.getProps();if(!o||!Oo(i,u,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(d=qT(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,u=this.constraints;i&&Si(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=YT(o.layoutBox,i):this.constraints=!1,this.elastic=KT(l),u!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Ue(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=ZT(o.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!Si(i))return!1;const o=i.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const f=JS(o,u.root,this.visualElement.getTransformPagePoint());let d=GT(u.layout.layoutBox,f);if(l){const p=l(KS(d));this.hasMutatedConstraints=!!p,p&&(d=By(p))}return d}startAnimation(i){const{drag:l,dragMomentum:o,dragElastic:u,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},h=Ue(y=>{if(!Oo(y,l,this.currentDirection))return;let b=m&&m[y]||{};d&&(b={min:0,max:0});const x=u?200:1e6,M=u?40:1e7,E={type:"inertia",velocity:o?i[y]:0,bounceStiffness:x,bounceDamping:M,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(y,E)});return Promise.all(h).then(p)}startAxisValueAnimation(i,l){const o=this.getAxisMotionValue(i);return ef(this.visualElement,i),o.start(Xf(i,o,0,l,this.visualElement,!1))}stopAnimation(){Ue(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Ue(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),u=o[l];return u||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){Ue(l=>{const{drag:o}=this.getProps();if(!Oo(l,o,this.currentDirection))return;const{projection:u}=this.visualElement,f=this.getAxisMotionValue(l);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[l];f.set(i[l]-Nt(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!Si(l)||!o||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Ue(d=>{const p=this.getAxisMotionValue(d);if(p&&this.constraints!==!1){const m=p.get();u[d]=XT({min:m,max:m},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Ue(d=>{if(!Oo(d,i,null))return;const p=this.getAxisMotionValue(d),{min:m,max:h}=this.constraints[d];p.set(Nt(m,h,u[d]))})}addListeners(){if(!this.visualElement.current)return;QT.set(this.visualElement,this);const i=this.visualElement.current,l=Br(i,"pointerdown",m=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(m)}),o=()=>{const{dragConstraints:m}=this.getProps();Si(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,f=u.addEventListener("measure",o);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),_t.read(o);const d=Qr(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",({delta:m,hasLayoutChanged:h})=>{this.isDragging&&h&&(Ue(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())});return()=>{d(),l(),f(),p&&p()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:u=!1,dragConstraints:f=!1,dragElastic:d=af,dragMomentum:p=!0}=i;return{...i,drag:l,dragDirectionLock:o,dragPropagation:u,dragConstraints:f,dragElastic:d,dragMomentum:p}}}function Oo(n,i,l){return(i===!0||i===n)&&(l===null||l===n)}function JT(n,i=10){let l=null;return Math.abs(n.y)>i?l="y":Math.abs(n.x)>i&&(l="x"),l}class $T extends ra{constructor(i){super(i),this.removeGroupControls=Be,this.removeListeners=Be,this.controls=new FT(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Be}unmount(){this.removeGroupControls(),this.removeListeners()}}const L0=n=>(i,l)=>{n&&_t.postRender(()=>n(i,l))};class WT extends ra{constructor(){super(...arguments),this.removePointerDownListener=Be}onPointerDown(i){this.session=new Iy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Wy(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:o,onPanEnd:u}=this.node.getProps();return{onSessionStart:L0(i),onStart:L0(l),onMove:o,onEnd:(f,d)=>{delete this.session,u&&_t.postRender(()=>u(f,d))}}}mount(){this.removePointerDownListener=Br(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Bo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function P0(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const kr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(rt.test(n))n=parseFloat(n);else return n;const l=P0(n,i.target.x),o=P0(n,i.target.y);return`${l}% ${o}%`}},IT={correct:(n,{treeScale:i,projectionDelta:l})=>{const o=n,u=ia.parse(n);if(u.length>5)return o;const f=ia.createTransformer(n),d=typeof u[0]!="number"?1:0,p=l.x.scale*i.x,m=l.y.scale*i.y;u[0+d]/=p,u[1+d]/=m;const h=Nt(p,m,.5);return typeof u[2+d]=="number"&&(u[2+d]/=h),typeof u[3+d]=="number"&&(u[3+d]/=h),f(u)}};let H0=!1;class tA extends R.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o,layoutId:u}=this.props,{projection:f}=i;SS(eA),f&&(l.group&&l.group.add(f),o&&o.register&&u&&o.register(f),H0&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),Bo.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:o,drag:u,isPresent:f}=this.props,{projection:d}=o;return d&&(d.isPresent=f,H0=!0,u||i.layoutDependency!==l||l===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||_t.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),jf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:u}=i;u&&(u.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(u),o&&o.deregister&&o.deregister(u))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function ev(n){const[i,l]=mS(),o=R.useContext(zg);return w.jsx(tA,{...n,layoutGroup:o,switchLayoutGroup:R.useContext(Vy),isPresent:i,safeToRemove:l})}const eA={borderRadius:{...kr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:kr,borderTopRightRadius:kr,borderBottomLeftRadius:kr,borderBottomRightRadius:kr,boxShadow:IT};function nA(n,i,l){const o=oe(n)?n:Oi(n);return o.start(Xf("",o,i,l)),o.animation}const aA=(n,i)=>n.depth-i.depth;class iA{constructor(){this.children=[],this.isDirty=!1}add(i){gf(this.children,i),this.isDirty=!0}remove(i){yf(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(aA),this.isDirty=!1,this.children.forEach(i)}}function rA(n,i){const l=pe.now(),o=({timestamp:u})=>{const f=u-l;f>=i&&(aa(o),n(f-i))};return _t.setup(o,!0),()=>aa(o)}const nv=["TopLeft","TopRight","BottomLeft","BottomRight"],lA=nv.length,q0=n=>typeof n=="string"?parseFloat(n):n,Y0=n=>typeof n=="number"||rt.test(n);function oA(n,i,l,o,u,f){u?(n.opacity=Nt(0,l.opacity??1,sA(o)),n.opacityExit=Nt(i.opacity??1,0,uA(o))):f&&(n.opacity=Nt(i.opacity??1,l.opacity??1,o));for(let d=0;d<lA;d++){const p=`border${nv[d]}Radius`;let m=G0(i,p),h=G0(l,p);if(m===void 0&&h===void 0)continue;m||(m=0),h||(h=0),m===0||h===0||Y0(m)===Y0(h)?(n[p]=Math.max(Nt(q0(m),q0(h),o),0),(tn.test(h)||tn.test(m))&&(n[p]+="%")):n[p]=h}(i.rotate||l.rotate)&&(n.rotate=Nt(i.rotate||0,l.rotate||0,o))}function G0(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const sA=av(0,.5,Xg),uA=av(.5,.95,Be);function av(n,i,l){return o=>o<n?0:o>i?1:l(qr(n,i,o))}function X0(n,i){n.min=i.min,n.max=i.max}function Ve(n,i){X0(n.x,i.x),X0(n.y,i.y)}function Z0(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function K0(n,i,l,o,u){return n-=i,n=Go(n,1/l,o),u!==void 0&&(n=Go(n,1/u,o)),n}function cA(n,i=0,l=1,o=.5,u,f=n,d=n){if(tn.test(i)&&(i=parseFloat(i),i=Nt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let p=Nt(f.min,f.max,o);n===f&&(p-=i),n.min=K0(n.min,i,l,p,u),n.max=K0(n.max,i,l,p,u)}function Q0(n,i,[l,o,u],f,d){cA(n,i[l],i[o],i[u],i.scale,f,d)}const fA=["x","scaleX","originX"],dA=["y","scaleY","originY"];function F0(n,i,l,o){Q0(n.x,i,fA,l?l.x:void 0,o?o.x:void 0),Q0(n.y,i,dA,l?l.y:void 0,o?o.y:void 0)}function J0(n){return n.translate===0&&n.scale===1}function iv(n){return J0(n.x)&&J0(n.y)}function $0(n,i){return n.min===i.min&&n.max===i.max}function hA(n,i){return $0(n.x,i.x)&&$0(n.y,i.y)}function W0(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function rv(n,i){return W0(n.x,i.x)&&W0(n.y,i.y)}function I0(n){return ue(n.x)/ue(n.y)}function tg(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class mA{constructor(){this.members=[]}add(i){gf(this.members,i),i.scheduleRender()}remove(i){if(yf(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(u=>i===u);if(l===0)return!1;let o;for(let u=l;u>=0;u--){const f=this.members[u];if(f.isPresent!==!1){o=f;break}}return o?(this.promote(o),!0):!1}promote(i,l){const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.instance&&o.scheduleRender(),i.scheduleRender(),i.resumeFrom=o,l&&(i.resumeFrom.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:u}=i.options;u===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:o}=i;l.onExitComplete&&l.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function pA(n,i,l){let o="";const u=n.x.translate/i.x,f=n.y.translate/i.y,d=l?.z||0;if((u||f||d)&&(o=`translate3d(${u}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:b,rotateY:x,skewX:M,skewY:E}=l;h&&(o=`perspective(${h}px) ${o}`),y&&(o+=`rotate(${y}deg) `),b&&(o+=`rotateX(${b}deg) `),x&&(o+=`rotateY(${x}deg) `),M&&(o+=`skewX(${M}deg) `),E&&(o+=`skewY(${E}deg) `)}const p=n.x.scale*i.x,m=n.y.scale*i.y;return(p!==1||m!==1)&&(o+=`scale(${p}, ${m})`),o||"none"}const kc=["","X","Y","Z"],gA=1e3;let yA=0;function Nc(n,i,l,o){const{latestValues:u}=i;u[n]&&(l[n]=u[n],i.setStaticValue(n,0),o&&(o[n]=0))}function lv(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const l=Zy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:u,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(l,"transform",_t,!(u||f))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&lv(o)}function ov({attachResizeListener:n,defaultParent:i,measureScroll:l,checkIsScrollRoot:o,resetTransform:u}){return class{constructor(d={},p=i?.()){this.id=yA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(xA),this.nodes.forEach(EA),this.nodes.forEach(OA),this.nodes.forEach(SA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new iA)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new xf),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const m=this.eventHandlers.get(d);m&&m.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Ay(d)&&!fS(d),this.instance=d;const{layoutId:p,layout:m,visualElement:h}=this.options;if(h&&!h.current&&h.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||p)&&(this.isLayoutDirty=!0),n){let y,b=0;const x=()=>this.root.updateBlockedByResize=!1;_t.read(()=>{b=window.innerWidth}),n(d,()=>{const M=window.innerWidth;M!==b&&(b=M,this.root.updateBlockedByResize=!0,y&&y(),y=rA(x,250),Bo.hasAnimatedSinceResize&&(Bo.hasAnimatedSinceResize=!1,this.nodes.forEach(ag)))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&h&&(p||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||CA,{onLayoutAnimationStart:O,onLayoutAnimationComplete:j}=h.getProps(),_=!this.targetLayout||!rv(this.targetLayout,M),q=!b&&x;if(this.options.layoutRoot||this.resumeFrom||q||b&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Nf(E,"layout"),onPlay:O,onComplete:j};(h.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(y,q)}else b||ag(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),aa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(MA),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lv(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(eg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ng);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(AA),this.nodes.forEach(vA),this.nodes.forEach(bA)):this.nodes.forEach(ng),this.clearAllSnapshots();const p=pe.now();ae.delta=En(0,1e3/60,p-ae.timestamp),ae.timestamp=p,ae.isProcessing=!0,Tc.update.process(ae),Tc.preRender.process(ae),Tc.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,jf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(TA),this.sharedNodes.forEach(DA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,_t.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){_t.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&this.instance){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!iv(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;d&&this.instance&&(p||Ma(this.latestValues)||y)&&(u(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return d&&(m=this.removeTransform(m)),_A(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Pt();const p=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(kA))){const{scroll:h}=this.root;h&&(Ti(p.x,h.offset.x),Ti(p.y,h.offset.y))}return p}removeElementScroll(d){const p=Pt();if(Ve(p,d),this.scroll?.wasRoot)return p;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:y,options:b}=h;h!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Ve(p,d),Ti(p.x,y.offset.x),Ti(p.y,y.offset.y))}return p}applyTransform(d,p=!1){const m=Pt();Ve(m,d);for(let h=0;h<this.path.length;h++){const y=this.path[h];!p&&y.options.layoutScroll&&y.scroll&&y!==y.root&&Ai(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ma(y.latestValues)&&Ai(m,y.latestValues)}return Ma(this.latestValues)&&Ai(m,this.latestValues),m}removeTransform(d){const p=Pt();Ve(p,d);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!Ma(h.latestValues))continue;$c(h.latestValues)&&h.updateSnapshot();const y=Pt(),b=h.measurePageBox();Ve(y,b),F0(p,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return Ma(this.latestValues)&&F0(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==p;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ae.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),Pr(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pt(),this.targetWithTransforms=Pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),BT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),Py(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),Pr(this.relativeTargetOrigin,this.target,x.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||$c(this.parent.latestValues)||Ly(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),p=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(m=!1),m)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;Ve(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,x=this.treeScale.y;FS(this.layoutCorrected,this.treeScale,this.path,p),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Pt());const{target:M}=d;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Z0(this.prevProjectionDelta.x,this.projectionDelta.x),Z0(this.prevProjectionDelta.y,this.projectionDelta.y)),Lr(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==x||!tg(this.projectionDelta.x,this.prevProjectionDelta.x)||!tg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ei(),this.projectionDelta=Ei(),this.projectionDeltaWithTransform=Ei()}setAnimationOrigin(d,p=!1){const m=this.snapshot,h=m?m.latestValues:{},y={...this.latestValues},b=Ei();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Pt(),M=m?m.source:void 0,E=this.layout?this.layout.source:void 0,O=M!==E,j=this.getStack(),_=!j||j.members.length<=1,q=!!(O&&!_&&this.options.crossfade===!0&&!this.path.some(RA));this.animationProgress=0;let B;this.mixTargetDelta=K=>{const Y=K/1e3;ig(b.x,d.x,Y),ig(b.y,d.y,Y),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Pr(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),wA(this.relativeTarget,this.relativeTargetOrigin,x,Y),B&&hA(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=Pt()),Ve(B,this.relativeTarget)),O&&(this.animationValues=y,oA(y,h,this.latestValues,Y,q,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=Y},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(aa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=_t.update(()=>{Bo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Oi(0)),this.currentAnimation=nA(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(gA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:m,layout:h,latestValues:y}=d;if(!(!p||!m||!h)){if(this!==d&&this.layout&&h&&sv(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||Pt();const b=ue(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+b;const x=ue(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+x}Ve(p,m),Ai(p,y),Lr(this.projectionDeltaWithTransform,this.layoutCorrected,p,y)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new mA),this.sharedNodes.get(d).add(p);const h=p.options.initialPromotionConfig;p.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(p=!0),!p)return;const h={};m.z&&Nc("z",d,h,this.animationValues);for(let y=0;y<kc.length;y++)Nc(`rotate${kc[y]}`,d,h,this.animationValues),Nc(`skew${kc[y]}`,d,h,this.animationValues);d.render();for(const y in h)d.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);d.scheduleRender()}applyProjectionStyles(d,p){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Uo(p?.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Uo(p?.pointerEvents)||""),this.hasProjected&&!Ma(this.latestValues)&&(d.transform=m?m({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let b=pA(this.projectionDeltaWithTransform,this.treeScale,y);m&&(b=m(y,b)),d.transform=b;const{x,y:M}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,h.animationValues?d.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const E in Zr){if(y[E]===void 0)continue;const{correct:O,applyTo:j,isCSSVariable:_}=Zr[E],q=b==="none"?y[E]:O(y[E],h);if(j){const B=j.length;for(let K=0;K<B;K++)d[j[K]]=q}else _?this.options.visualElement.renderState.vars[E]=q:d[E]=q}this.options.layoutId&&(d.pointerEvents=h===this?Uo(p?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(eg),this.root.sharedNodes.clear()}}}function vA(n){n.updateLayout()}function bA(n){const i=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:o}=n.layout,{animationType:u}=n.options,f=i.source!==n.layout.source;u==="size"?Ue(y=>{const b=f?i.measuredBox[y]:i.layoutBox[y],x=ue(b);b.min=l[y].min,b.max=b.min+x}):sv(u,i.layoutBox,l)&&Ue(y=>{const b=f?i.measuredBox[y]:i.layoutBox[y],x=ue(l[y]);b.max=b.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+x)});const d=Ei();Lr(d,l,i.layoutBox);const p=Ei();f?Lr(p,n.applyTransform(o,!0),i.measuredBox):Lr(p,l,i.layoutBox);const m=!iv(d);let h=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:x}=y;if(b&&x){const M=Pt();Pr(M,i.layoutBox,b.layoutBox);const E=Pt();Pr(E,l,x.layoutBox),rv(M,E)||(h=!0),y.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:p,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function xA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function SA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function TA(n){n.clearSnapshot()}function eg(n){n.clearMeasurements()}function ng(n){n.isLayoutDirty=!1}function AA(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function ag(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function EA(n){n.resolveTargetDelta()}function OA(n){n.calcProjection()}function MA(n){n.resetSkewAndRotation()}function DA(n){n.removeLeadSnapshot()}function ig(n,i,l){n.translate=Nt(i.translate,0,l),n.scale=Nt(i.scale,1,l),n.origin=i.origin,n.originPoint=i.originPoint}function rg(n,i,l,o){n.min=Nt(i.min,l.min,o),n.max=Nt(i.max,l.max,o)}function wA(n,i,l,o){rg(n.x,i.x,l.x,o),rg(n.y,i.y,l.y,o)}function RA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const CA={duration:.45,ease:[.4,0,.1,1]},lg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),og=lg("applewebkit/")&&!lg("chrome/")?Math.round:Be;function sg(n){n.min=og(n.min),n.max=og(n.max)}function _A(n){sg(n.x),sg(n.y)}function sv(n,i,l){return n==="position"||n==="preserve-aspect"&&!UT(I0(i),I0(l),.2)}function kA(n){return n!==n.root&&n.scroll?.wasRoot}const NA=ov({attachResizeListener:(n,i)=>Qr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),zc={current:void 0},uv=ov({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!zc.current){const n=new NA({});n.mount(window),n.setOptions({layoutScroll:!0}),zc.current=n}return zc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),zA={pan:{Feature:WT},drag:{Feature:$T,ProjectionNode:uv,MeasureLayout:ev}};function ug(n,i,l){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",l==="Start");const u="onHover"+l,f=o[u];f&&_t.postRender(()=>f(i,el(i)))}class jA extends ra{mount(){const{current:i}=this.node;i&&(this.unmount=lS(i,(l,o)=>(ug(this.node,o,"Start"),u=>ug(this.node,u,"End"))))}unmount(){}}class VA extends ra{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wr(Qr(this.node.current,"focus",()=>this.onFocus()),Qr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function cg(n,i,l){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",l==="Start");const u="onTap"+(l==="End"?"":l),f=o[u];f&&_t.postRender(()=>f(i,el(i)))}class UA extends ra{mount(){const{current:i}=this.node;i&&(this.unmount=cS(i,(l,o)=>(cg(this.node,o,"Start"),(u,{success:f})=>cg(this.node,u,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const rf=new WeakMap,jc=new WeakMap,BA=n=>{const i=rf.get(n.target);i&&i(n)},LA=n=>{n.forEach(BA)};function PA({root:n,...i}){const l=n||document;jc.has(l)||jc.set(l,{});const o=jc.get(l),u=JSON.stringify(i);return o[u]||(o[u]=new IntersectionObserver(LA,{root:n,...i})),o[u]}function HA(n,i,l){const o=PA(i);return rf.set(n,l),o.observe(n),()=>{rf.delete(n),o.unobserve(n)}}const qA={some:0,all:1};class YA extends ra{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:o,amount:u="some",once:f}=i,d={root:l?l.current:void 0,rootMargin:o,threshold:typeof u=="number"?u:qA[u]},p=m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,f&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),x=h?y:b;x&&x(m)};return HA(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(GA(i,l))&&this.startObserver()}unmount(){}}function GA({viewport:n={}},{viewport:i={}}={}){return l=>n[l]!==i[l]}const XA={inView:{Feature:YA},tap:{Feature:UA},focus:{Feature:VA},hover:{Feature:jA}},ZA={layout:{ProjectionNode:uv,MeasureLayout:ev}},KA={..._T,...XA,...zA,...ZA},QA=ZS(KA,rT);function $o({text:n="",gradientColors:i=["#ff0080","#7928ca","#ff0080"],className:l=""}){return w.jsx("div",{className:`w-full h-full flex items-center justify-center overflow-hidden ${l}`,children:w.jsx(QA.div,{className:"text-4xl font-bold whitespace-nowrap",animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:5,ease:"linear",repeat:1/0},style:{backgroundImage:`linear-gradient(90deg, ${i.join(", ")})`,backgroundSize:"200% 100%",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent"},children:n})})}const FA=()=>w.jsxs("div",{className:"p-10 bg-white w-full min-h-screen flex flex-col items-center justify-start",children:[w.jsxs("div",{className:"flex flex-row items-center justify-center mb-10 w-full",children:[w.jsx($o,{text:"About Me",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight"}),w.jsx("img",{src:"/my_website//SelfPortrait.jpeg",alt:"Self Portrait",className:"rounded-full w-28 h-28 ml-6 shadow-lg object-cover border-4 border-gray-200"})]}),w.jsxs("div",{className:"max-w-3xl text-center text-gray-800",children:[w.jsx("p",{className:"text-xl leading-relaxed",children:"Hi, I'm Junior—an engineer and creative technologist with a passion for building innovative, user-focused web applications. I recently graduated with a B.S. in Computer Science & Engineering and a minor in Physics from Bucknell University, and have since been working on projects at the intersection of AI, full-stack development, and automation."}),w.jsx("p",{className:"text-xl leading-relaxed mt-6",children:"I’ve developed AI-powered mobile apps, backend pipelines for real-world data ingestion, and interactive dashboards that make complex systems usable. Whether I’m building a trading bot using NLP or contributing to open-source tools, I thrive on solving problems that blend functionality with great user experience."}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Programming Languages"}),w.jsxs("ul",{className:"list-disc list-inside text-lg",children:[w.jsx("li",{children:"Python"}),w.jsx("li",{children:"JavaScript / TypeScript"}),w.jsx("li",{children:"C / C++"}),w.jsx("li",{children:"HTML / CSS"}),w.jsx("li",{children:"SQL"})]})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Frameworks & Tools"}),w.jsxs("ul",{className:"list-disc list-inside text-lg",children:[w.jsx("li",{children:"React, Next.js, Node.js, Express"}),w.jsx("li",{children:"MariaDB, PostgreSQL"}),w.jsx("li",{children:"TensorFlow, Hugging Face"}),w.jsx("li",{children:"Git, Linux, Docker"})]})]})]}),w.jsxs("div",{className:"mt-10",children:[w.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"What I'm Passionate About"}),w.jsx("p",{className:"text-lg",children:"AI development, intuitive UX design, building scalable web apps, open-source contributions, and empowering users with smart, elegant technology."})]}),w.jsxs("div",{className:"mt-10",children:[w.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Outside of Tech"}),w.jsx("p",{className:"text-lg",children:"When I’m not coding, you can find me exploring new bouldering, gaming, reading about physics or tech trends, or brainstorming my next side project."})]})]})]}),JA=()=>{const n=R.useRef(null),[i,l]=R.useState(0),[o,u]=R.useState(0),[f,d]=R.useState(0),[p,m]=R.useState(0),[h,y]=R.useState(!1);R.useEffect(()=>{y(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))},[]),R.useEffect(()=>{const x=setInterval(()=>{l(M=>M+(f-M)/20),u(M=>M+(p-M)/20),n.current&&(n.current.style.transform=`translate(${Math.round(i)}px, ${Math.round(o)}px)`)},16.666666666666668);return()=>clearInterval(x)},[i,o,f,p]);const b=x=>{if(n.current){const M=n.current.getBoundingClientRect();d(x.clientX-M.left),m(x.clientY-M.top)}};return w.jsxs("div",{className:"h-full w-full relative overflow-hidden bg-[linear-gradient(40deg,rgb(108,0,162),rgb(0,17,82))]",children:[w.jsx("svg",{className:"hidden",children:w.jsx("defs",{children:w.jsxs("filter",{id:"blurMe",children:[w.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),w.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8",result:"goo"}),w.jsx("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),w.jsxs("div",{className:`gradients-container h-full w-full blur-lg ${h?"blur-2xl":"[filter:url(#blurMe)_blur(40px)]"}`,children:[w.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(18,113,255,0.8)_0,_rgba(18,113,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:center_center] animate-first opacity-100"}),w.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(221,74,255,0.8)_0,_rgba(221,74,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-400px)] animate-second opacity-100"}),w.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(100,220,255,0.8)_0,_rgba(100,220,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%+400px)] animate-third opacity-100"}),w.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(200,50,50,0.8)_0,_rgba(200,50,50,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"}),w.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(180,180,50,0.8)_0,_rgba(180,180,50,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"}),w.jsx("div",{ref:n,onMouseMove:b,className:"absolute [background:radial-gradient(circle_at_center,_rgba(140,100,255,0.8)_0,_rgba(140,100,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-full h-full -top-1/2 -left-1/2 opacity-70"})]}),w.jsx("div",{className:"relative z-10 h-full flex items-center justify-center",children:w.jsxs("div",{className:"text-white text-center",children:[w.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Gradient Background"}),w.jsx("p",{className:"text-xl",children:"Interactive animated background with mouse tracking"})]})})]})},$A=()=>w.jsx("div",{className:"h-screen w-screen relative overflow-hidden h-center items-center justify-center",children:w.jsx(JA,{children:w.jsx("p",{children:"Interactive Gradient Background"})})});function fg({text:n,to:i}){return i.startsWith("http")||i.startsWith("mailto:")?w.jsx("a",{href:i,target:"_blank",rel:"nooperner noreferrer",className:"justify-center py-2 cursor-pointer hover:text-blue-600 transition-colors",children:n}):w.jsx(hf,{to:i,className:"justify-center py-2 cursor-pointer hover:text-blue-600 transition-colors",children:n})}function WA({downloadVisible:n=!1}){const[i,l]=R.useState([{text:"AboutMe",to:"/"},{text:"Projects",to:"/projects"},{text:"Resume",to:"/Resume"}]),[o,u]=R.useState([{text:"GitHub",to:"https://github.com/Junior-Weil"},{text:"LinkedIn",to:"https://www.linkedin.com/in/ronald-weil-9561a6251"},{text:"Email",to:"mailto:rmw020@bucknell.edu"}]);return R.useEffect(()=>{},[]),w.jsx("div",{className:"fixed top-0 left-0 w-full z-50 bg-white",children:w.jsxs("div",{className:"flex gap-5 justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff]",children:[w.jsxs("div",{className:"flex gap-4 justify-between items-center py-1.5 my-auto w-full sm:w-auto",children:[w.jsx("div",{className:"flex justify-center items-center px-0.5",children:w.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"JW"})}),w.jsx("div",{className:"my-auto font-bold text-lg text-zinc-950",children:w.jsx("nav",{className:"flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto",children:o.map((f,d)=>w.jsx(fg,{text:f.text,to:f.to},d))})})]}),w.jsx("nav",{className:"flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto",children:i.map((f,d)=>w.jsx(fg,{text:f.text,to:f.to},d))}),n&&w.jsx("button",{className:"justify-center self-stretch sm:self-auto px-6 py-5 text-base leading-6 text-center text-white rounded-2xl bg-neutral-900 max-md:px-5 font-light w-full sm:w-auto",onClick:()=>alert("Download Now button clicked"),children:"Download Now"})]})})}function IA({frontContent:n,backContent:i,className:l="",onClick:o}){const[u,f]=R.useState(!1),d=()=>{f(!u),o?.()};return w.jsx("div",{className:`relative w-[400px] h-[300px] cursor-pointer [perspective:1000px] ${l}`,onClick:d,children:w.jsxs("div",{className:`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${u?"[transform:rotateY(180deg)]":""}`,children:[w.jsx("div",{className:"absolute w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-md p-4",children:n}),w.jsx("div",{className:"absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl shadow-md p-4 flex items-center justify-center text-center",children:i})]})})}function tE(){const n=[{image:"/my_website/DataDriveVehicle.jpg",title:"Data Drive Vehicle",docLink:"https://docs.google.com/document/d/1R62fZxs_eFVezG9opYTs5jEd1oRQatV5bLbR9Gc6CI4/edit?tab=t.0",docLinkButtonText:"View Document",docLinkText:null},{image:"/my_website/kaggleImages/AUC.png",title:"Kaggle Home Credit",docLink:"/kaggle",docLinkButtonText:"View Figures",docLinkText:""}];return w.jsx("section",{className:"py-14",children:w.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-8",children:[w.jsx("div",{className:"flex flex-grid items-center justify-center overflow-x-auto",children:w.jsx($o,{className:"text-gray-800 text-3xl font-semibold sm:text-4xl",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],text:"Projects"})}),w.jsx("div",{className:"mt-12",children:w.jsx("ul",{className:"grid gap-10 grid-cols-2",children:n.map((i,l)=>w.jsx("li",{children:w.jsx(IA,{frontContent:w.jsxs("div",{className:"items-center justify-center flex flex-col gap-4 p-4",children:[w.jsx("img",{src:i.image,alt:i.title}),w.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:i.title})]}),backContent:w.jsx(w.Fragment,{children:w.jsx("a",{href:i.docLink,rel:"noopener noreferrer",className:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",children:i.docLinkButtonText})})})},l))})})]})})}const eE=()=>w.jsx("div",{className:"p-10 bg-white w-full min-h-screen overflow-hidden flex-col items-center justify-center rounded",children:w.jsx(tE,{})});function Qt(n,i){i===void 0&&(i={});var l=i.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],u=document.createElement("style");u.type="text/css",l==="top"&&o.firstChild?o.insertBefore(u,o.firstChild):o.appendChild(u),u.styleSheet?u.styleSheet.cssText=n:u.appendChild(document.createTextNode(n))}}Qt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ht=function(){return ht=Object.assign||function(n){for(var i,l=1,o=arguments.length;l<o;l++)for(var u in i=arguments[l])Object.prototype.hasOwnProperty.call(i,u)&&(n[u]=i[u]);return n},ht.apply(this,arguments)};function Xo(n){return Xo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Xo(n)}var nE=/^\s+/,aE=/\s+$/;function J(n,i){if(i=i||{},(n=n||"")instanceof J)return n;if(!(this instanceof J))return new J(n,i);var l=function(o){var u={r:0,g:0,b:0},f=1,d=null,p=null,m=null,h=!1,y=!1;typeof o=="string"&&(o=function(E){E=E.replace(nE,"").replace(aE,"").toLowerCase();var O,j=!1;if(lf[E])E=lf[E],j=!0;else if(E=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(O=qe.rgb.exec(E))?{r:O[1],g:O[2],b:O[3]}:(O=qe.rgba.exec(E))?{r:O[1],g:O[2],b:O[3],a:O[4]}:(O=qe.hsl.exec(E))?{h:O[1],s:O[2],l:O[3]}:(O=qe.hsla.exec(E))?{h:O[1],s:O[2],l:O[3],a:O[4]}:(O=qe.hsv.exec(E))?{h:O[1],s:O[2],v:O[3]}:(O=qe.hsva.exec(E))?{h:O[1],s:O[2],v:O[3],a:O[4]}:(O=qe.hex8.exec(E))?{r:Me(O[1]),g:Me(O[2]),b:Me(O[3]),a:yg(O[4]),format:j?"name":"hex8"}:(O=qe.hex6.exec(E))?{r:Me(O[1]),g:Me(O[2]),b:Me(O[3]),format:j?"name":"hex"}:(O=qe.hex4.exec(E))?{r:Me(O[1]+""+O[1]),g:Me(O[2]+""+O[2]),b:Me(O[3]+""+O[3]),a:yg(O[4]+""+O[4]),format:j?"name":"hex8"}:(O=qe.hex3.exec(E))?{r:Me(O[1]+""+O[1]),g:Me(O[2]+""+O[2]),b:Me(O[3]+""+O[3]),format:j?"name":"hex"}:!1}(o)),Xo(o)=="object"&&(xn(o.r)&&xn(o.g)&&xn(o.b)?(b=o.r,x=o.g,M=o.b,u={r:255*Ct(b,255),g:255*Ct(x,255),b:255*Ct(M,255)},h=!0,y=String(o.r).substr(-1)==="%"?"prgb":"rgb"):xn(o.h)&&xn(o.s)&&xn(o.v)?(d=jr(o.s),p=jr(o.v),u=function(E,O,j){E=6*Ct(E,360),O=Ct(O,100),j=Ct(j,100);var _=Math.floor(E),q=E-_,B=j*(1-O),K=j*(1-q*O),Y=j*(1-(1-q)*O),I=_%6,lt=[j,K,B,B,Y,j][I],F=[Y,j,j,K,B,B][I],at=[B,B,Y,j,j,K][I];return{r:255*lt,g:255*F,b:255*at}}(o.h,d,p),h=!0,y="hsv"):xn(o.h)&&xn(o.s)&&xn(o.l)&&(d=jr(o.s),m=jr(o.l),u=function(E,O,j){var _,q,B;function K(lt,F,at){return at<0&&(at+=1),at>1&&(at-=1),at<1/6?lt+6*(F-lt)*at:at<.5?F:at<2/3?lt+(F-lt)*(2/3-at)*6:lt}if(E=Ct(E,360),O=Ct(O,100),j=Ct(j,100),O===0)_=q=B=j;else{var Y=j<.5?j*(1+O):j+O-j*O,I=2*j-Y;_=K(I,Y,E+1/3),q=K(I,Y,E),B=K(I,Y,E-1/3)}return{r:255*_,g:255*q,b:255*B}}(o.h,d,m),h=!0,y="hsl"),o.hasOwnProperty("a")&&(f=o.a));var b,x,M;return f=cv(f),{ok:h,format:o.format||y,r:Math.min(255,Math.max(u.r,0)),g:Math.min(255,Math.max(u.g,0)),b:Math.min(255,Math.max(u.b,0)),a:f}}(n);this._originalInput=n,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function dg(n,i,l){n=Ct(n,255),i=Ct(i,255),l=Ct(l,255);var o,u,f=Math.max(n,i,l),d=Math.min(n,i,l),p=(f+d)/2;if(f==d)o=u=0;else{var m=f-d;switch(u=p>.5?m/(2-f-d):m/(f+d),f){case n:o=(i-l)/m+(i<l?6:0);break;case i:o=(l-n)/m+2;break;case l:o=(n-i)/m+4}o/=6}return{h:o,s:u,l:p}}function hg(n,i,l){n=Ct(n,255),i=Ct(i,255),l=Ct(l,255);var o,u,f=Math.max(n,i,l),d=Math.min(n,i,l),p=f,m=f-d;if(u=f===0?0:m/f,f==d)o=0;else{switch(f){case n:o=(i-l)/m+(i<l?6:0);break;case i:o=(l-n)/m+2;break;case l:o=(n-i)/m+4}o/=6}return{h:o,s:u,v:p}}function mg(n,i,l,o){var u=[Ge(Math.round(n).toString(16)),Ge(Math.round(i).toString(16)),Ge(Math.round(l).toString(16))];return o&&u[0].charAt(0)==u[0].charAt(1)&&u[1].charAt(0)==u[1].charAt(1)&&u[2].charAt(0)==u[2].charAt(1)?u[0].charAt(0)+u[1].charAt(0)+u[2].charAt(0):u.join("")}function pg(n,i,l,o){return[Ge(fv(o)),Ge(Math.round(n).toString(16)),Ge(Math.round(i).toString(16)),Ge(Math.round(l).toString(16))].join("")}function iE(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.s-=i/100,l.s=Wo(l.s),J(l)}function rE(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.s+=i/100,l.s=Wo(l.s),J(l)}function lE(n){return J(n).desaturate(100)}function oE(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.l+=i/100,l.l=Wo(l.l),J(l)}function sE(n,i){i=i===0?0:i||10;var l=J(n).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),J(l)}function uE(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.l-=i/100,l.l=Wo(l.l),J(l)}function cE(n,i){var l=J(n).toHsl(),o=(l.h+i)%360;return l.h=o<0?360+o:o,J(l)}function fE(n){var i=J(n).toHsl();return i.h=(i.h+180)%360,J(i)}function gg(n,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=J(n).toHsl(),o=[J(n)],u=360/i,f=1;f<i;f++)o.push(J({h:(l.h+f*u)%360,s:l.s,l:l.l}));return o}function dE(n){var i=J(n).toHsl(),l=i.h;return[J(n),J({h:(l+72)%360,s:i.s,l:i.l}),J({h:(l+216)%360,s:i.s,l:i.l})]}function hE(n,i,l){i=i||6,l=l||30;var o=J(n).toHsl(),u=360/l,f=[J(n)];for(o.h=(o.h-(u*i>>1)+720)%360;--i;)o.h=(o.h+u)%360,f.push(J(o));return f}function mE(n,i){i=i||6;for(var l=J(n).toHsv(),o=l.h,u=l.s,f=l.v,d=[],p=1/i;i--;)d.push(J({h:o,s:u,v:f})),f=(f+p)%1;return d}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,i,l,o=this.toRgb();return n=o.r/255,i=o.g/255,l=o.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(n){return this._a=cv(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=hg(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=hg(this._r,this._g,this._b),i=Math.round(360*n.h),l=Math.round(100*n.s),o=Math.round(100*n.v);return this._a==1?"hsv("+i+", "+l+"%, "+o+"%)":"hsva("+i+", "+l+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var n=dg(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=dg(this._r,this._g,this._b),i=Math.round(360*n.h),l=Math.round(100*n.s),o=Math.round(100*n.l);return this._a==1?"hsl("+i+", "+l+"%, "+o+"%)":"hsla("+i+", "+l+"%, "+o+"%, "+this._roundA+")"},toHex:function(n){return mg(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(i,l,o,u,f){var d=[Ge(Math.round(i).toString(16)),Ge(Math.round(l).toString(16)),Ge(Math.round(o).toString(16)),Ge(fv(u))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ct(this._r,255))+"%",g:Math.round(100*Ct(this._g,255))+"%",b:Math.round(100*Ct(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%)":"rgba("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(pE[mg(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var i="#"+pg(this._r,this._g,this._b,this._a),l=i,o=this._gradientType?"GradientType = 1, ":"";if(n){var u=J(n);l="#"+pg(u._r,u._g,u._b,u._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+i+",endColorstr="+l+")"},toString:function(n){var i=!!n;n=n||this._format;var l=!1,o=this._a<1&&this._a>=0;return i||!o||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(l=this.toRgbString()),n==="prgb"&&(l=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(l=this.toHexString()),n==="hex3"&&(l=this.toHexString(!0)),n==="hex4"&&(l=this.toHex8String(!0)),n==="hex8"&&(l=this.toHex8String()),n==="name"&&(l=this.toName()),n==="hsl"&&(l=this.toHslString()),n==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(n,i){var l=n.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(oE,arguments)},brighten:function(){return this._applyModification(sE,arguments)},darken:function(){return this._applyModification(uE,arguments)},desaturate:function(){return this._applyModification(iE,arguments)},saturate:function(){return this._applyModification(rE,arguments)},greyscale:function(){return this._applyModification(lE,arguments)},spin:function(){return this._applyModification(cE,arguments)},_applyCombination:function(n,i){return n.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(hE,arguments)},complement:function(){return this._applyCombination(fE,arguments)},monochromatic:function(){return this._applyCombination(mE,arguments)},splitcomplement:function(){return this._applyCombination(dE,arguments)},triad:function(){return this._applyCombination(gg,[3])},tetrad:function(){return this._applyCombination(gg,[4])}},J.fromRatio=function(n,i){if(Xo(n)=="object"){var l={};for(var o in n)n.hasOwnProperty(o)&&(l[o]=o==="a"?n[o]:jr(n[o]));n=l}return J(n,i)},J.equals=function(n,i){return!(!n||!i)&&J(n).toRgbString()==J(i).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(n,i,l){l=l===0?0:l||50;var o=J(n).toRgb(),u=J(i).toRgb(),f=l/100;return J({r:(u.r-o.r)*f+o.r,g:(u.g-o.g)*f+o.g,b:(u.b-o.b)*f+o.b,a:(u.a-o.a)*f+o.a})},J.readability=function(n,i){var l=J(n),o=J(i);return(Math.max(l.getLuminance(),o.getLuminance())+.05)/(Math.min(l.getLuminance(),o.getLuminance())+.05)},J.isReadable=function(n,i,l){var o,u,f=J.readability(n,i);switch(u=!1,(o=function(d){var p,m;return p=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(d.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:p,size:m}}(l)).level+o.size){case"AAsmall":case"AAAlarge":u=f>=4.5;break;case"AAlarge":u=f>=3;break;case"AAAsmall":u=f>=7}return u},J.mostReadable=function(n,i,l){var o,u,f,d,p=null,m=0;u=(l=l||{}).includeFallbackColors,f=l.level,d=l.size;for(var h=0;h<i.length;h++)(o=J.readability(n,i[h]))>m&&(m=o,p=J(i[h]));return J.isReadable(n,p,{level:f,size:d})||!u?p:(l.includeFallbackColors=!1,J.mostReadable(n,["#fff","#000"],l))};var lf=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},pE=J.hexNames=function(n){var i={};for(var l in n)n.hasOwnProperty(l)&&(i[n[l]]=l);return i}(lf);function cv(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ct(n,i){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(n)&&(n="100%");var l=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(n);return n=Math.min(i,Math.max(0,parseFloat(n))),l&&(n=parseInt(n*i,10)/100),Math.abs(n-i)<1e-6?1:n%i/parseFloat(i)}function Wo(n){return Math.min(1,Math.max(0,n))}function Me(n){return parseInt(n,16)}function Ge(n){return n.length==1?"0"+n:""+n}function jr(n){return n<=1&&(n=100*n+"%"),n}function fv(n){return Math.round(255*parseFloat(n)).toString(16)}function yg(n){return Me(n)/255}var Wn,Mo,Do,qe=(Mo="[\\s|\\(]+("+(Wn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")\\s*\\)?",Do="[\\s|\\(]+("+Wn+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")\\s*\\)?",{CSS_UNIT:new RegExp(Wn),rgb:new RegExp("rgb"+Mo),rgba:new RegExp("rgba"+Do),hsl:new RegExp("hsl"+Mo),hsla:new RegExp("hsla"+Do),hsv:new RegExp("hsv"+Mo),hsva:new RegExp("hsva"+Do),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function xn(n){return!!qe.CSS_UNIT.exec(n)}var nl=function(n,i){var l=(typeof n=="string"?parseInt(n):n)||0;if(l>=-5&&l<=5){var o=l,u=parseFloat(i),f=u+o*(u/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:i}},al=function(n,i){var l=n||{},o="";switch(i){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var u={};if(l.fontSize){var f=l.fontSize;u=function(d,p){var m={};for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&p.indexOf(h)<0&&(m[h]=d[h]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(d);y<h.length;y++)p.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(d,h[y])&&(m[h[y]]=d[h[y]])}return m}(l,["fontSize"]),o=f}return{fontSize:o,styles:u}},gE={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},il=function(n){var i=n.className,l=n.text,o=n.textColor,u=n.staticText,f=n.style;return l?Et.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:ht(ht(ht({},u&&gE),o&&{color:o,mixBlendMode:"unset"}),f&&f)},typeof l=="string"&&l.length?l:"loading"):null},Sn="rgb(50, 205, 50)";function rl(n,i){if(i===void 0&&(i=0),n.length===0)throw new Error("Input array cannot be empty!");var l=[];return function o(u,f){return f===void 0&&(f=0),l.push.apply(l,u),l.length<f&&o(l,f),l.slice(0,f)}(n,i)}Qt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);J(Sn).toRgb();Array.from({length:4},function(n,i){return"--atom-phase".concat(i+1,"-rgb")});Qt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--commet-phase".concat(i+1,"-color")});Qt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var wo=Array.from({length:4},function(n,i){return"--OP-annulus-phase".concat(i+1,"-color")}),yE=function(n){var i,l=al(n?.style,n?.size),o=l.styles,u=l.fontSize,f=n?.easing,d=nl(n?.speedPlus,"1.5s").animationPeriod,p=function(h){var y={},b=wo.length;if(h instanceof Array){for(var x=rl(h,b),M=0;M<x.length&&!(M>=4);M++)y[wo[M]]=x[M];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[wo[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[wo[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n?.dense?4.3:2.9;return Et.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ht(ht(ht(ht(ht({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},Et.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Et.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Et.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:m,strokeMiterlimit:"10"})),Et.createElement(il,{className:"OP-annulus-text",text:n?.text,textColor:n?.textColor})))};function Vc(n){return n&&n.Math===Math&&n}Qt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var yi=Vc(typeof window=="object"&&window)||Vc(typeof self=="object"&&self)||Vc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function dv(){var n,i;return!((n=yi?.crypto)===null||n===void 0)&&n.randomUUID?yi.crypto.randomUUID():!((i=yi?.btoa)===null||i===void 0)&&i.name?yi.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Ro=Array.from({length:4},function(n,i){return"--OP-dotted-phase".concat(i+1,"-color")}),vE=function(n){var i,l=al(n?.style,n?.size),o=l.styles,u=l.fontSize,f=n?.easing,d=nl(n?.speedPlus,"1.2s").animationPeriod,p=function(h){var y={},b=Ro.length;if(h instanceof Array){for(var x=rl(h,b),M=0;M<x.length&&!(M>=4);M++)y[Ro[M]]=x[M];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[Ro[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[Ro[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n?.dense?16:12;return Et.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ht(ht(ht(ht(ht({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},Et.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:m}).map(function(h,y){var b=function(E,O,j){if(O===16){var _=360*E/O,q=O-E,B=Number.parseFloat(j)/O*q*-1;return{transform:"rotate(".concat(_,"deg)"),animationDelay:"".concat(B,"s")}}return{transform:"",animationDelay:""}}(y,m,d),x=b.animationDelay,M=b.transform;return Et.createElement("span",{key:dv(),className:"rli-d-i-b dot-shape-holder",style:M?{transform:M}:void 0},Et.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),Et.createElement(il,{className:"OP-dotted-text",text:n?.text,textColor:n?.textColor})))};Qt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Co=Array.from({length:4},function(n,i){return"--OP-spokes-phase".concat(i+1,"-color")}),bE=function(n){var i,l=al(n?.style,n?.size),o=l.styles,u=l.fontSize,f=n?.easing,d=nl(n?.speedPlus,"1.2s").animationPeriod,p=function(h){var y={},b=Co.length;if(h instanceof Array){for(var x=rl(h,b),M=0;M<x.length&&!(M>=4);M++)y[Co[M]]=x[M];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[Co[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[Co[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n?.dense?16:12;return Et.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ht(ht(ht(ht(ht({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},Et.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:m},function(h,y){return Et.createElement("span",{key:dv(),className:"rli-d-i-b spoke",style:xE(y,m,d)})})),Et.createElement(il,{text:n?.text,textColor:n?.textColor}))};function xE(n,i,l){if(i===16){var o=i-n,u=Number.parseFloat(l)/i;return{transform:"rotate(".concat(360*n/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((o-1)*u*-1,"s")}}}Qt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var _o=Array.from({length:4},function(n,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")}),SE=function(n){var i,l=al(n?.style,n?.size),o=l.styles,u=l.fontSize,f=n?.easing,d=nl(n?.speedPlus,"1.2s").animationPeriod,p=function(h){var y={},b=_o.length;if(h instanceof Array){for(var x=rl(h,b),M=0;M<x.length&&!(M>=4);M++)y[_o[M]]=x[M];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[_o[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[_o[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n.dense?"0.45em":"";return Et.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ht(ht(ht(ht(ht({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},Et.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Et.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ht({},m&&{borderWidth:m})}),Et.createElement(il,{className:"OP-annulus-dual-sectors-text",text:n?.text,textColor:n?.textColor})))};Qt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Nr=Array.from({length:4},function(n,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]}),ko=function(n){return n===void 0&&(n=1),.25*n},TE=function(n){var i,l=al(n?.style,n?.size),o=l.styles,u=l.fontSize,f=n?.easing,d=nl(n?.speedPlus,"1s").animationPeriod,p=function(h){var y={},b=Nr.length;if(h instanceof Array){for(var x=rl(h,b),M=0;M<x.length&&!(M>=4);M++){var E=Nr[M];try{if(!(_=J(x[M])).isValid())throw new Error("Invalid Color: ".concat(_.getOriginalInput()));var O=_.setAlpha(ko(_.getAlpha())).toRgbString(),j=x[M];y[E[0]]=O,y[E[1]]=j}catch{j=Sn,O=(_=J(Sn)).setAlpha(ko(_.getAlpha())).toRgbString(),y[E[0]]=O,y[E[1]]=j}}return y}try{var _=J(h);if(typeof h!="string")throw new Error("Color String expected");if(!_.isValid())throw new Error("Invalid Color: ".concat(_.getOriginalInput()));j=h,O=_.setAlpha(ko(_.getAlpha())).toRgbString();for(var q=0;q<b;q++)y[(E=Nr[q])[0]]=O,y[E[1]]=j}catch(B){for(B instanceof Error?console.warn("[".concat(B.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),j=Sn,O=(_=J(Sn)).setAlpha(ko(_.getAlpha())).toRgbString(),q=0;q<Nr.length;q++)y[(E=Nr[q])[0]]=O,y[E[1]]=j}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n.dense?"0.45em":"";return Et.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ht(ht(ht(ht(ht({},u&&{fontSize:u}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),p),o),role:"status","aria-live":"polite","aria-label":"Loading"},Et.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Et.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ht({},m&&{borderWidth:m})}),Et.createElement(il,{className:"OP-annulus-sector-text",text:n?.text,textColor:n?.textColor})))},AE=function(n){var i=Object(n).variant,l=i===void 0?"disc":i;return l==="dotted"?Et.createElement(vE,ht({},n)):l==="spokes"?Et.createElement(bE,ht({},n)):l==="disc"?Et.createElement(yE,ht({},n)):l==="split-disc"?Et.createElement(SE,ht({},n)):l==="track-disc"?Et.createElement(TE,ht({},n)):null};Qt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--four-square-phase".concat(i+1,"-color")});Qt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--mosaic-phase".concat(i+1,"-color")});Qt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--riple-phase".concat(i+1,"-color")});Qt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-pulsate-phase".concat(i+1,"-color")});Qt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-brick-stack-phase".concat(i+1,"-color")});Qt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-bob-phase".concat(i+1,"-color")});Qt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--TD-bounce-phase".concat(i+1,"-color")});Qt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--shape-phase".concat(i+1,"-color")});Qt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--trophySpin-phase".concat(i+1,"-color")});Qt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--slab-phase".concat(i+1,"-color")});Qt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(n,i){return"--life-line-phase".concat(i+1,"-color")});const EE=()=>w.jsx("div",{className:"w-screen justify-center",children:w.jsxs("div",{className:"p-10 w-3/4 min-h-screen bg-white flex flex-col items-center justify-center",children:[w.jsx($o,{text:"My Resume",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight p-10"}),w.jsx(R.Suspense,{fallback:w.jsx(AE,{variant:"disc",color:"#a9a9a9",size:"medium"}),children:w.jsx("iframe",{src:"/my_website//Resume.pdf",title:"Resume PDF",className:"w-full max-w-5xl h-[90vh] border rounded-lg shadow-lg"})}),w.jsx("a",{href:"/my_website//Resume.pdf",download:!0,className:"mt-6 text-blue-600 hover:underline text-lg",children:"Download PDF"})]})}),In="bg-white/80 rounded-xl shadow-lg p-8 mb-8 w-full max-w-3xl flex flex-col items-center",ta="text-3xl md:text-4xl font-bold mb-4 text-gray-900",ea="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed",vi="list-disc pl-6 text-gray-700 mb-4",Oa="my-6 rounded-lg shadow-md border border-gray-200 w-full max-w-md",OE=()=>w.jsxs("div",{className:"min-h-screen w-full bg-slate-200 from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center py-12 px-4",children:[w.jsx("div",{className:"flex flex-row items-center justify-center mb-12 w-full",children:w.jsx($o,{text:"Kaggle Competition: Predicting Client Loan Default Risk",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight drop-shadow-lg"})}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Problem Statement"}),w.jsxs("p",{className:ea,children:["The goal of the competition, hosted by Home Credit on Kaggle, was to accurately predict which clients are likely to default on their loans. Achieving reliable, stable predictions over time is crucial for financial institutions to manage risk effectively and ensure fair access to credit for individuals with limited or no credit history.",w.jsx("br",{}),w.jsx("br",{}),"Financial institutions face significant challenges when evaluating the risk of lending to customers without extensive financial histories. Traditional credit assessment methods can unfairly deny credit to individuals capable of repaying loans. Thus, creating predictive models that balance performance and stability over time can significantly impact financial inclusion and economic opportunities for many."]})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Our Approach and Results"}),w.jsx("p",{className:ea,children:"Our solution aimed not only for high predictive performance but also emphasized long-term stability in predictions, critical for real-world implementation."}),w.jsxs("div",{className:"w-full flex flex-col items-center",children:[w.jsx("h4",{className:"text-xl font-semibold mb-2 text-gray-800",children:"Model Performance Metrics:"}),w.jsx("img",{src:"/my_website/kaggleImages/AUC.png",alt:"AUC Curve",className:Oa}),w.jsx("ul",{className:vi,children:w.jsxs("li",{children:[w.jsx("span",{className:"font-semibold",children:"AUC (Area Under Curve):"})," Achieved an impressive ~0.90 AUC, indicating excellent predictive capability."]})}),w.jsx("img",{src:"/my_website/kaggleImages/Learning_Curve.png",alt:"Learning Curve",className:Oa}),w.jsx("ul",{className:vi,children:w.jsxs("li",{children:[w.jsx("span",{className:"font-semibold",children:"Log Loss:"})," Reduced effectively over iterations, converging to around 0.38, demonstrating robust probability calibration and confidence in predictions."]})}),w.jsx("img",{src:"/my_website/kaggleImages/FPR-FNR.png",alt:"FPR-FNR Curve",className:Oa}),w.jsx("ul",{className:vi,children:w.jsxs("li",{children:[w.jsx("span",{className:"font-semibold",children:"FPR-FNR Curve:"})," The False Positive Rate (FPR) and False Negative Rate (FNR) curves demonstrated a balanced trade-off, enabling informed threshold adjustments to suit different operational requirements."]})})]})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Feature Importance Analysis (SHAP values)"}),w.jsx("img",{src:"/my_website/kaggleImages/Shap_Bar.png",alt:"SHAP Bar",className:Oa}),w.jsx("img",{src:"/my_website/kaggleImages/Shap_Features.png",alt:"SHAP Features",className:Oa}),w.jsx("p",{className:ea,children:"Our SHAP analysis revealed key features influencing loan defaults:"}),w.jsx("ul",{className:vi,children:w.jsxs("li",{children:[w.jsx("span",{className:"font-semibold",children:"High Impact Features:"})," Loan amount (credamount_770A), annuity payments (annuity_780A), mobile phone account counts (mobilephncnt_593L), and disbursed credit amount (disbursedcredamount_1113A). These significantly affected predictions, with larger loan and annuity amounts strongly correlating with higher default risk."]})})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Confusion Matrix"}),w.jsx("img",{src:"/my_website/kaggleImages/Confusion_Matrix.png",alt:"Confusion Matrix",className:Oa}),w.jsxs("ul",{className:vi,children:[w.jsx("li",{children:"True Positives: 176,366"}),w.jsx("li",{children:"True Negatives: 167,341"}),w.jsx("li",{children:"False Positives: 36,480"}),w.jsx("li",{children:"False Negatives: 26,446"})]}),w.jsx("p",{className:ea,children:"The confusion matrix highlighted a strong ability to identify actual default cases correctly while maintaining a manageable level of incorrect predictions."})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Class Imbalance Handling"}),w.jsx("img",{src:"/my_website/kaggleImages/pos_neg_ration.png",alt:"Class Imbalance",className:Oa}),w.jsx("p",{className:ea,children:"Our dataset exhibited a significant class imbalance (~96.86% non-default, 3.14% default). Effective strategies were implemented to manage this imbalance, resulting in robust model performance despite skewed class distribution."})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Stability Over Time"}),w.jsx("p",{className:ea,children:"We placed substantial emphasis on model stability, an essential factor evaluated explicitly in this competition. Our predictions maintained consistency across evaluation periods, minimizing performance drop-offs and achieving stable metrics, critical for deployment in real-world scenarios."})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Learnings and Insights"}),w.jsx("p",{className:ea,children:"Participating in this competition provided valuable insights into:"}),w.jsxs("ul",{className:vi,children:[w.jsx("li",{children:"Advanced methods for ensuring long-term prediction stability."}),w.jsx("li",{children:"Techniques for effectively handling class imbalance, crucial for real-world credit scoring."}),w.jsx("li",{children:"Importance of interpretability (e.g., SHAP values) in explaining model predictions to stakeholders, improving transparency and trust."}),w.jsx("li",{children:"Practical applications of balancing model precision, recall, and stability to maximize operational performance in finance."})]})]}),w.jsxs("div",{className:In,children:[w.jsx("h2",{className:ta,children:"Final Thoughts"}),w.jsx("p",{className:ea,children:"This competition underscored the critical role that stable and interpretable predictive models play in financial decision-making, especially for underserved populations. Our strong predictive performance, coupled with reliable stability, demonstrated our model's readiness for real-world application, helping to improve financial accessibility and decision-making reliability for consumer finance providers."})]})]}),ME="/my_website/".replace(/\/$/,"");function DE(){return w.jsx("div",{className:"min-h-screen w-full bg-slate-100 pt-24",children:w.jsxs(r5,{basename:ME,children:[w.jsx(WA,{}),w.jsxs(Vx,{children:[w.jsx(bi,{path:"/",element:w.jsx(FA,{})}),w.jsx(bi,{path:"/projects",element:w.jsx(eE,{})}),w.jsx(bi,{path:"/gradient",element:w.jsx($A,{})}),w.jsx(bi,{path:"/resume",element:w.jsx(EE,{})}),w.jsx(bi,{path:"/kaggle",element:w.jsx(OE,{})})]})]})})}X1.createRoot(document.getElementById("root")).render(w.jsx(R.StrictMode,{children:w.jsx(DE,{})}));
