(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=l(c);fetch(c.href,f)}})();function dg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var uc={exports:{}},Ar={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function C1(){if(zp)return Ar;zp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(o,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var g in c)g!=="key"&&(f[g]=c[g])}else f=c;return c=f.ref,{$$typeof:n,type:o,key:d,ref:c!==void 0?c:null,props:f}}return Ar.Fragment=i,Ar.jsx=l,Ar.jsxs=l,Ar}var Np;function k1(){return Np||(Np=1,uc.exports=C1()),uc.exports}var G=k1(),cc={exports:{}},st={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function _1(){if(Vp)return st;Vp=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function x(T){return T===null||typeof T!="object"?null:(T=b&&T[b]||T["@@iterator"],typeof T=="function"?T:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,O={};function N(T,P,Z){this.props=T,this.context=P,this.refs=O,this.updater=Z||D}N.prototype.isReactComponent={},N.prototype.setState=function(T,P){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,P,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function w(){}w.prototype=N.prototype;function H(T,P,Z){this.props=T,this.context=P,this.refs=O,this.updater=Z||D}var B=H.prototype=new w;B.constructor=H,E(B,N.prototype),B.isPureReactComponent=!0;var K=Array.isArray,q={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function lt(T,P,Z,X,tt,pt){return Z=pt.ref,{$$typeof:n,type:T,key:P,ref:Z!==void 0?Z:null,props:pt}}function F(T,P){return lt(T.type,P,void 0,void 0,void 0,T.props)}function at(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Dt(T){var P={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(Z){return P[Z]})}var Gt=/\/+/g;function Xt(T,P){return typeof T=="object"&&T!==null&&T.key!=null?Dt(""+T.key):P.toString(36)}function an(){}function Xe(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(an,an):(T.status="pending",T.then(function(P){T.status==="pending"&&(T.status="fulfilled",T.value=P)},function(P){T.status==="pending"&&(T.status="rejected",T.reason=P)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function It(T,P,Z,X,tt){var pt=typeof T;(pt==="undefined"||pt==="boolean")&&(T=null);var ot=!1;if(T===null)ot=!0;else switch(pt){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(T.$$typeof){case n:case i:ot=!0;break;case y:return ot=T._init,It(ot(T._payload),P,Z,X,tt)}}if(ot)return tt=tt(T),ot=X===""?"."+Xt(T,0):X,K(tt)?(Z="",ot!=null&&(Z=ot.replace(Gt,"$&/")+"/"),It(tt,P,Z,"",function(Mn){return Mn})):tt!=null&&(at(tt)&&(tt=F(tt,Z+(tt.key==null||T&&T.key===tt.key?"":(""+tt.key).replace(Gt,"$&/")+"/")+ot)),P.push(tt)),1;ot=0;var ge=X===""?".":X+":";if(K(T))for(var Rt=0;Rt<T.length;Rt++)X=T[Rt],pt=ge+Xt(X,Rt),ot+=It(X,P,Z,pt,tt);else if(Rt=x(T),typeof Rt=="function")for(T=Rt.call(T),Rt=0;!(X=T.next()).done;)X=X.value,pt=ge+Xt(X,Rt++),ot+=It(X,P,Z,pt,tt);else if(pt==="object"){if(typeof T.then=="function")return It(Xe(T),P,Z,X,tt);throw P=String(T),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.")}return ot}function U(T,P,Z){if(T==null)return T;var X=[],tt=0;return It(T,X,"","",function(pt){return P.call(Z,pt,tt++)}),X}function Y(T){if(T._status===-1){var P=T._result;P=P(),P.then(function(Z){(T._status===0||T._status===-1)&&(T._status=1,T._result=Z)},function(Z){(T._status===0||T._status===-1)&&(T._status=2,T._result=Z)}),T._status===-1&&(T._status=0,T._result=P)}if(T._status===1)return T._result.default;throw T._result}var $=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var P=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(P))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)};function yt(){}return st.Children={map:U,forEach:function(T,P,Z){U(T,function(){P.apply(this,arguments)},Z)},count:function(T){var P=0;return U(T,function(){P++}),P},toArray:function(T){return U(T,function(P){return P})||[]},only:function(T){if(!at(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},st.Component=N,st.Fragment=l,st.Profiler=c,st.PureComponent=H,st.StrictMode=o,st.Suspense=m,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,st.__COMPILER_RUNTIME={__proto__:null,c:function(T){return q.H.useMemoCache(T)}},st.cache=function(T){return function(){return T.apply(null,arguments)}},st.cloneElement=function(T,P,Z){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var X=E({},T.props),tt=T.key,pt=void 0;if(P!=null)for(ot in P.ref!==void 0&&(pt=void 0),P.key!==void 0&&(tt=""+P.key),P)!I.call(P,ot)||ot==="key"||ot==="__self"||ot==="__source"||ot==="ref"&&P.ref===void 0||(X[ot]=P[ot]);var ot=arguments.length-2;if(ot===1)X.children=Z;else if(1<ot){for(var ge=Array(ot),Rt=0;Rt<ot;Rt++)ge[Rt]=arguments[Rt+2];X.children=ge}return lt(T.type,tt,void 0,void 0,pt,X)},st.createContext=function(T){return T={$$typeof:d,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},st.createElement=function(T,P,Z){var X,tt={},pt=null;if(P!=null)for(X in P.key!==void 0&&(pt=""+P.key),P)I.call(P,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(tt[X]=P[X]);var ot=arguments.length-2;if(ot===1)tt.children=Z;else if(1<ot){for(var ge=Array(ot),Rt=0;Rt<ot;Rt++)ge[Rt]=arguments[Rt+2];tt.children=ge}if(T&&T.defaultProps)for(X in ot=T.defaultProps,ot)tt[X]===void 0&&(tt[X]=ot[X]);return lt(T,pt,void 0,void 0,null,tt)},st.createRef=function(){return{current:null}},st.forwardRef=function(T){return{$$typeof:g,render:T}},st.isValidElement=at,st.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:Y}},st.memo=function(T,P){return{$$typeof:h,type:T,compare:P===void 0?null:P}},st.startTransition=function(T){var P=q.T,Z={};q.T=Z;try{var X=T(),tt=q.S;tt!==null&&tt(Z,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(yt,$)}catch(pt){$(pt)}finally{q.T=P}},st.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},st.use=function(T){return q.H.use(T)},st.useActionState=function(T,P,Z){return q.H.useActionState(T,P,Z)},st.useCallback=function(T,P){return q.H.useCallback(T,P)},st.useContext=function(T){return q.H.useContext(T)},st.useDebugValue=function(){},st.useDeferredValue=function(T,P){return q.H.useDeferredValue(T,P)},st.useEffect=function(T,P,Z){var X=q.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(T,P)},st.useId=function(){return q.H.useId()},st.useImperativeHandle=function(T,P,Z){return q.H.useImperativeHandle(T,P,Z)},st.useInsertionEffect=function(T,P){return q.H.useInsertionEffect(T,P)},st.useLayoutEffect=function(T,P){return q.H.useLayoutEffect(T,P)},st.useMemo=function(T,P){return q.H.useMemo(T,P)},st.useOptimistic=function(T,P){return q.H.useOptimistic(T,P)},st.useReducer=function(T,P,Z){return q.H.useReducer(T,P,Z)},st.useRef=function(T){return q.H.useRef(T)},st.useState=function(T){return q.H.useState(T)},st.useSyncExternalStore=function(T,P,Z){return q.H.useSyncExternalStore(T,P,Z)},st.useTransition=function(){return q.H.useTransition()},st.version="19.1.0",st}var Up;function ef(){return Up||(Up=1,cc.exports=_1()),cc.exports}var k=ef();const St=dg(k);var fc={exports:{}},Er={},dc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function z1(){return Bp||(Bp=1,function(n){function i(U,Y){var $=U.length;U.push(Y);t:for(;0<$;){var yt=$-1>>>1,T=U[yt];if(0<c(T,Y))U[yt]=Y,U[$]=T,$=yt;else break t}}function l(U){return U.length===0?null:U[0]}function o(U){if(U.length===0)return null;var Y=U[0],$=U.pop();if($!==Y){U[0]=$;t:for(var yt=0,T=U.length,P=T>>>1;yt<P;){var Z=2*(yt+1)-1,X=U[Z],tt=Z+1,pt=U[tt];if(0>c(X,$))tt<T&&0>c(pt,X)?(U[yt]=pt,U[tt]=$,yt=tt):(U[yt]=X,U[Z]=$,yt=Z);else if(tt<T&&0>c(pt,$))U[yt]=pt,U[tt]=$,yt=tt;else break t}}return Y}function c(U,Y){var $=U.sortIndex-Y.sortIndex;return $!==0?$:U.id-Y.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var d=Date,g=d.now();n.unstable_now=function(){return d.now()-g}}var m=[],h=[],y=1,b=null,x=3,D=!1,E=!1,O=!1,N=!1,w=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function K(U){for(var Y=l(h);Y!==null;){if(Y.callback===null)o(h);else if(Y.startTime<=U)o(h),Y.sortIndex=Y.expirationTime,i(m,Y);else break;Y=l(h)}}function q(U){if(O=!1,K(U),!E)if(l(m)!==null)E=!0,I||(I=!0,Xt());else{var Y=l(h);Y!==null&&It(q,Y.startTime-U)}}var I=!1,lt=-1,F=5,at=-1;function Dt(){return N?!0:!(n.unstable_now()-at<F)}function Gt(){if(N=!1,I){var U=n.unstable_now();at=U;var Y=!0;try{t:{E=!1,O&&(O=!1,H(lt),lt=-1),D=!0;var $=x;try{e:{for(K(U),b=l(m);b!==null&&!(b.expirationTime>U&&Dt());){var yt=b.callback;if(typeof yt=="function"){b.callback=null,x=b.priorityLevel;var T=yt(b.expirationTime<=U);if(U=n.unstable_now(),typeof T=="function"){b.callback=T,K(U),Y=!0;break e}b===l(m)&&o(m),K(U)}else o(m);b=l(m)}if(b!==null)Y=!0;else{var P=l(h);P!==null&&It(q,P.startTime-U),Y=!1}}break t}finally{b=null,x=$,D=!1}Y=void 0}}finally{Y?Xt():I=!1}}}var Xt;if(typeof B=="function")Xt=function(){B(Gt)};else if(typeof MessageChannel<"u"){var an=new MessageChannel,Xe=an.port2;an.port1.onmessage=Gt,Xt=function(){Xe.postMessage(null)}}else Xt=function(){w(Gt,0)};function It(U,Y){lt=w(function(){U(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(U){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var $=x;x=Y;try{return U()}finally{x=$}},n.unstable_requestPaint=function(){N=!0},n.unstable_runWithPriority=function(U,Y){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var $=x;x=U;try{return Y()}finally{x=$}},n.unstable_scheduleCallback=function(U,Y,$){var yt=n.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?yt+$:yt):$=yt,U){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=$+T,U={id:y++,callback:Y,priorityLevel:U,startTime:$,expirationTime:T,sortIndex:-1},$>yt?(U.sortIndex=$,i(h,U),l(m)===null&&U===l(h)&&(O?(H(lt),lt=-1):O=!0,It(q,$-yt))):(U.sortIndex=T,i(m,U),E||D||(E=!0,I||(I=!0,Xt()))),U},n.unstable_shouldYield=Dt,n.unstable_wrapCallback=function(U){var Y=x;return function(){var $=x;x=Y;try{return U.apply(this,arguments)}finally{x=$}}}}(hc)),hc}var Lp;function N1(){return Lp||(Lp=1,dc.exports=z1()),dc.exports}var mc={exports:{}},le={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function V1(){if(jp)return le;jp=1;var n=ef();function i(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(m,h,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:b==null?null:""+b,children:m,containerInfo:h,implementation:y}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,le.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(i(299));return f(m,h,null,y)},le.flushSync=function(m){var h=d.T,y=o.p;try{if(d.T=null,o.p=2,m)return m()}finally{d.T=h,o.p=y,o.d.f()}},le.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},le.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},le.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,b=g(y,h.crossOrigin),x=typeof h.integrity=="string"?h.integrity:void 0,D=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:D}):y==="script"&&o.d.X(m,{crossOrigin:b,integrity:x,fetchPriority:D,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},le.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=g(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},le.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,b=g(y,h.crossOrigin);o.d.L(m,y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},le.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=g(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},le.requestFormReset=function(m){o.d.r(m)},le.unstable_batchedUpdates=function(m,h){return m(h)},le.useFormState=function(m,h,y){return d.H.useFormState(m,h,y)},le.useFormStatus=function(){return d.H.useHostTransitionStatus()},le.version="19.1.0",le}var Pp;function U1(){if(Pp)return mc.exports;Pp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),mc.exports=V1(),mc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function B1(){if(Hp)return Er;Hp=1;var n=N1(),i=ef(),l=U1();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function d(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(f(t)!==t)throw Error(o(188))}function m(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,r=e;;){var s=a.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){a=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===a)return g(s),t;if(u===r)return g(s),e;u=u.sibling}throw Error(o(188))}if(a.return!==r.return)a=s,r=u;else{for(var p=!1,v=s.child;v;){if(v===a){p=!0,a=s,r=u;break}if(v===r){p=!0,r=s,a=u;break}v=v.sibling}if(!p){for(v=u.child;v;){if(v===a){p=!0,a=u,r=s;break}if(v===r){p=!0,r=u,a=s;break}v=v.sibling}if(!p)throw Error(o(189))}}if(a.alternate!==r)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function h(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=h(t),e!==null)return e;t=t.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),at=Symbol.for("react.activity"),Dt=Symbol.for("react.memo_cache_sentinel"),Gt=Symbol.iterator;function Xt(t){return t===null||typeof t!="object"?null:(t=Gt&&t[Gt]||t["@@iterator"],typeof t=="function"?t:null)}var an=Symbol.for("react.client.reference");function Xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===an?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case N:return"Profiler";case O:return"StrictMode";case q:return"Suspense";case I:return"SuspenseList";case at:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case D:return"Portal";case B:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case K:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return e=t.displayName||null,e!==null?e:Xe(t.type)||"Memo";case F:e=t._payload,t=t._init;try{return Xe(t(e))}catch{}}return null}var It=Array.isArray,U=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},yt=[],T=-1;function P(t){return{current:t}}function Z(t){0>T||(t.current=yt[T],yt[T]=null,T--)}function X(t,e){T++,yt[T]=t.current,t.current=e}var tt=P(null),pt=P(null),ot=P(null),ge=P(null);function Rt(t,e){switch(X(ot,e),X(pt,t),X(tt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?op(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=op(e),t=sp(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(tt),X(tt,t)}function Mn(){Z(tt),Z(pt),Z(ot)}function Qo(t){t.memoizedState!==null&&X(ge,t);var e=tt.current,a=sp(e,t.type);e!==a&&(X(pt,t),X(tt,a))}function el(t){pt.current===t&&(Z(tt),Z(pt)),ge.current===t&&(Z(ge),vr._currentValue=$)}var Fo=Object.prototype.hasOwnProperty,Jo=n.unstable_scheduleCallback,$o=n.unstable_cancelCallback,sv=n.unstable_shouldYield,uv=n.unstable_requestPaint,Ze=n.unstable_now,cv=n.unstable_getCurrentPriorityLevel,Hf=n.unstable_ImmediatePriority,qf=n.unstable_UserBlockingPriority,nl=n.unstable_NormalPriority,fv=n.unstable_LowPriority,Yf=n.unstable_IdlePriority,dv=n.log,hv=n.unstable_setDisableYieldValue,Di=null,ye=null;function Rn(t){if(typeof dv=="function"&&hv(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Di,t)}catch{}}var ve=Math.clz32?Math.clz32:gv,mv=Math.log,pv=Math.LN2;function gv(t){return t>>>=0,t===0?32:31-(mv(t)/pv|0)|0}var al=256,il=4194304;function aa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function rl(t,e,a){var r=t.pendingLanes;if(r===0)return 0;var s=0,u=t.suspendedLanes,p=t.pingedLanes;t=t.warmLanes;var v=r&134217727;return v!==0?(r=v&~u,r!==0?s=aa(r):(p&=v,p!==0?s=aa(p):a||(a=v&~t,a!==0&&(s=aa(a))))):(v=r&~u,v!==0?s=aa(v):p!==0?s=aa(p):a||(a=r&~t,a!==0&&(s=aa(a)))),s===0?0:e!==0&&e!==s&&(e&u)===0&&(u=s&-s,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:s}function Mi(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function yv(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gf(){var t=al;return al<<=1,(al&4194048)===0&&(al=256),t}function Xf(){var t=il;return il<<=1,(il&62914560)===0&&(il=4194304),t}function Wo(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Ri(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function vv(t,e,a,r,s,u){var p=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var v=t.entanglements,S=t.expirationTimes,C=t.hiddenUpdates;for(a=p&~a;0<a;){var V=31-ve(a),j=1<<V;v[V]=0,S[V]=-1;var _=C[V];if(_!==null)for(C[V]=null,V=0;V<_.length;V++){var z=_[V];z!==null&&(z.lane&=-536870913)}a&=~j}r!==0&&Zf(t,r,0),u!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=u&~(p&~e))}function Zf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-ve(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&4194090}function Kf(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-ve(a),s=1<<r;s&e|t[r]&e&&(t[r]|=e),a&=~s}}function Io(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ts(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Qf(){var t=Y.p;return t!==0?t:(t=window.event,t===void 0?32:Mp(t.type))}function bv(t,e){var a=Y.p;try{return Y.p=t,e()}finally{Y.p=a}}var wn=Math.random().toString(36).slice(2),ie="__reactFiber$"+wn,ce="__reactProps$"+wn,Ra="__reactContainer$"+wn,es="__reactEvents$"+wn,xv="__reactListeners$"+wn,Sv="__reactHandles$"+wn,Ff="__reactResources$"+wn,wi="__reactMarker$"+wn;function ns(t){delete t[ie],delete t[ce],delete t[es],delete t[xv],delete t[Sv]}function wa(t){var e=t[ie];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ra]||a[ie]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=dp(t);t!==null;){if(a=t[ie])return a;t=dp(t)}return e}t=a,a=t.parentNode}return null}function Ca(t){if(t=t[ie]||t[Ra]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ci(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ka(t){var e=t[Ff];return e||(e=t[Ff]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Ft(t){t[wi]=!0}var Jf=new Set,$f={};function ia(t,e){_a(t,e),_a(t+"Capture",e)}function _a(t,e){for($f[t]=e,t=0;t<e.length;t++)Jf.add(e[t])}var Tv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Wf={},If={};function Av(t){return Fo.call(If,t)?!0:Fo.call(Wf,t)?!1:Tv.test(t)?If[t]=!0:(Wf[t]=!0,!1)}function ll(t,e,a){if(Av(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function ol(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function rn(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+r)}}var as,td;function za(t){if(as===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);as=e&&e[1]||"",td=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+as+t+td}var is=!1;function rs(t,e){if(!t||is)return"";is=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(z){var _=z}Reflect.construct(t,[],j)}else{try{j.call()}catch(z){_=z}t.call(j.prototype)}}else{try{throw Error()}catch(z){_=z}(j=t())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(z){if(z&&_&&typeof z.stack=="string")return[z.stack,_.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),p=u[0],v=u[1];if(p&&v){var S=p.split(`
`),C=v.split(`
`);for(s=r=0;r<S.length&&!S[r].includes("DetermineComponentFrameRoot");)r++;for(;s<C.length&&!C[s].includes("DetermineComponentFrameRoot");)s++;if(r===S.length||s===C.length)for(r=S.length-1,s=C.length-1;1<=r&&0<=s&&S[r]!==C[s];)s--;for(;1<=r&&0<=s;r--,s--)if(S[r]!==C[s]){if(r!==1||s!==1)do if(r--,s--,0>s||S[r]!==C[s]){var V=`
`+S[r].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=r&&0<=s);break}}}finally{is=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?za(a):""}function Ev(t){switch(t.tag){case 26:case 27:case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return rs(t.type,!1);case 11:return rs(t.type.render,!1);case 1:return rs(t.type,!0);case 31:return za("Activity");default:return""}}function ed(t){try{var e="";do e+=Ev(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Me(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nd(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ov(t){var e=nd(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var s=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(p){r=""+p,u.call(this,p)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(p){r=""+p},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=Ov(t))}function ad(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=nd(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dv=/[\n"\\]/g;function Re(t){return t.replace(Dv,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ls(t,e,a,r,s,u,p,v){t.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.type=p:t.removeAttribute("type"),e!=null?p==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Me(e)):t.value!==""+Me(e)&&(t.value=""+Me(e)):p!=="submit"&&p!=="reset"||t.removeAttribute("value"),e!=null?os(t,p,Me(e)):a!=null?os(t,p,Me(a)):r!=null&&t.removeAttribute("value"),s==null&&u!=null&&(t.defaultChecked=!!u),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.name=""+Me(v):t.removeAttribute("name")}function id(t,e,a,r,s,u,p,v){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;a=a!=null?""+Me(a):"",e=e!=null?""+Me(e):a,v||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=v?t.checked:!!r,t.defaultChecked=!!r,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.name=p)}function os(t,e,a){e==="number"&&ul(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Na(t,e,a,r){if(t=t.options,e){e={};for(var s=0;s<a.length;s++)e["$"+a[s]]=!0;for(a=0;a<t.length;a++)s=e.hasOwnProperty("$"+t[a].value),t[a].selected!==s&&(t[a].selected=s),s&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Me(a),e=null,s=0;s<t.length;s++){if(t[s].value===a){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function rd(t,e,a){if(e!=null&&(e=""+Me(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+Me(a):""}function ld(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(o(92));if(It(r)){if(1<r.length)throw Error(o(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=Me(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r)}function Va(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function od(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||Mv.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function sd(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&a[s]!==r&&od(t,s,r)}else for(var u in e)e.hasOwnProperty(u)&&od(t,u,e[u])}function ss(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(t){return wv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var us=null;function cs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ua=null,Ba=null;function ud(t){var e=Ca(t);if(e&&(t=e.stateNode)){var a=t[ce]||null;t:switch(t=e.stateNode,e.type){case"input":if(ls(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var s=r[ce]||null;if(!s)throw Error(o(90));ls(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&ad(r)}break t;case"textarea":rd(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&Na(t,!!a.multiple,e,!1)}}}var fs=!1;function cd(t,e,a){if(fs)return t(e,a);fs=!0;try{var r=t(e);return r}finally{if(fs=!1,(Ua!==null||Ba!==null)&&(Fl(),Ua&&(e=Ua,t=Ba,Ba=Ua=null,ud(e),t)))for(e=0;e<t.length;e++)ud(t[e])}}function ki(t,e){var a=t.stateNode;if(a===null)return null;var r=a[ce]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ds=!1;if(ln)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){ds=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{ds=!1}var Cn=null,hs=null,fl=null;function fd(){if(fl)return fl;var t,e=hs,a=e.length,r,s="value"in Cn?Cn.value:Cn.textContent,u=s.length;for(t=0;t<a&&e[t]===s[t];t++);var p=a-t;for(r=1;r<=p&&e[a-r]===s[u-r];r++);return fl=s.slice(t,1<r?1-r:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function dd(){return!1}function fe(t){function e(a,r,s,u,p){this._reactName=a,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=p,this.currentTarget=null;for(var v in t)t.hasOwnProperty(v)&&(a=t[v],this[v]=a?a(u):u[v]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?hl:dd,this.isPropagationStopped=dd,this}return y(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=fe(ra),zi=y({},ra,{view:0,detail:0}),Cv=fe(zi),ms,ps,Ni,pl=y({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(ms=t.screenX-Ni.screenX,ps=t.screenY-Ni.screenY):ps=ms=0,Ni=t),ms)},movementY:function(t){return"movementY"in t?t.movementY:ps}}),hd=fe(pl),kv=y({},pl,{dataTransfer:0}),_v=fe(kv),zv=y({},zi,{relatedTarget:0}),gs=fe(zv),Nv=y({},ra,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=fe(Nv),Uv=y({},ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bv=fe(Uv),Lv=y({},ra,{data:0}),md=fe(Lv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hv[t])?!!e[t]:!1}function ys(){return qv}var Yv=y({},zi,{key:function(t){if(t.key){var e=jv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Pv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gv=fe(Yv),Xv=y({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=fe(Xv),Zv=y({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Kv=fe(Zv),Qv=y({},ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=fe(Qv),Jv=y({},pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=fe(Jv),Wv=y({},ra,{newState:0,oldState:0}),Iv=fe(Wv),tb=[9,13,27,32],vs=ln&&"CompositionEvent"in window,Vi=null;ln&&"documentMode"in document&&(Vi=document.documentMode);var eb=ln&&"TextEvent"in window&&!Vi,gd=ln&&(!vs||Vi&&8<Vi&&11>=Vi),yd=" ",vd=!1;function bd(t,e){switch(t){case"keyup":return tb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var La=!1;function nb(t,e){switch(t){case"compositionend":return xd(e);case"keypress":return e.which!==32?null:(vd=!0,yd);case"textInput":return t=e.data,t===yd&&vd?null:t;default:return null}}function ab(t,e){if(La)return t==="compositionend"||!vs&&bd(t,e)?(t=fd(),fl=hs=Cn=null,La=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gd&&e.locale!=="ko"?null:e.data;default:return null}}var ib={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ib[t.type]:e==="textarea"}function Td(t,e,a,r){Ua?Ba?Ba.push(r):Ba=[r]:Ua=r,e=eo(e,"onChange"),0<e.length&&(a=new ml("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var Ui=null,Bi=null;function rb(t){np(t,0)}function gl(t){var e=Ci(t);if(ad(e))return t}function Ad(t,e){if(t==="change")return e}var Ed=!1;if(ln){var bs;if(ln){var xs="oninput"in document;if(!xs){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),xs=typeof Od.oninput=="function"}bs=xs}else bs=!1;Ed=bs&&(!document.documentMode||9<document.documentMode)}function Dd(){Ui&&(Ui.detachEvent("onpropertychange",Md),Bi=Ui=null)}function Md(t){if(t.propertyName==="value"&&gl(Bi)){var e=[];Td(e,Bi,t,cs(t)),cd(rb,e)}}function lb(t,e,a){t==="focusin"?(Dd(),Ui=e,Bi=a,Ui.attachEvent("onpropertychange",Md)):t==="focusout"&&Dd()}function ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gl(Bi)}function sb(t,e){if(t==="click")return gl(e)}function ub(t,e){if(t==="input"||t==="change")return gl(e)}function cb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var be=typeof Object.is=="function"?Object.is:cb;function Li(t,e){if(be(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var s=a[r];if(!Fo.call(e,s)||!be(t[s],e[s]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,e){var a=Rd(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Rd(a)}}function Cd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=ul(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=ul(t.document)}return e}function Ss(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var fb=ln&&"documentMode"in document&&11>=document.documentMode,ja=null,Ts=null,ji=null,As=!1;function _d(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;As||ja==null||ja!==ul(r)||(r=ja,"selectionStart"in r&&Ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Li(ji,r)||(ji=r,r=eo(Ts,"onSelect"),0<r.length&&(e=new ml("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=ja)))}function la(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Pa={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionrun:la("Transition","TransitionRun"),transitionstart:la("Transition","TransitionStart"),transitioncancel:la("Transition","TransitionCancel"),transitionend:la("Transition","TransitionEnd")},Es={},zd={};ln&&(zd=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function oa(t){if(Es[t])return Es[t];if(!Pa[t])return t;var e=Pa[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in zd)return Es[t]=e[a];return t}var Nd=oa("animationend"),Vd=oa("animationiteration"),Ud=oa("animationstart"),db=oa("transitionrun"),hb=oa("transitionstart"),mb=oa("transitioncancel"),Bd=oa("transitionend"),Ld=new Map,Os="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Os.push("scrollEnd");function je(t,e){Ld.set(t,e),ia(e,[t])}var jd=new WeakMap;function we(t,e){if(typeof t=="object"&&t!==null){var a=jd.get(t);return a!==void 0?a:(e={value:t,source:e,stack:ed(e)},jd.set(t,e),e)}return{value:t,source:e,stack:ed(e)}}var Ce=[],Ha=0,Ds=0;function yl(){for(var t=Ha,e=Ds=Ha=0;e<t;){var a=Ce[e];Ce[e++]=null;var r=Ce[e];Ce[e++]=null;var s=Ce[e];Ce[e++]=null;var u=Ce[e];if(Ce[e++]=null,r!==null&&s!==null){var p=r.pending;p===null?s.next=s:(s.next=p.next,p.next=s),r.pending=s}u!==0&&Pd(a,s,u)}}function vl(t,e,a,r){Ce[Ha++]=t,Ce[Ha++]=e,Ce[Ha++]=a,Ce[Ha++]=r,Ds|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Ms(t,e,a,r){return vl(t,e,a,r),bl(t)}function qa(t,e){return vl(t,null,null,e),bl(t)}function Pd(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var s=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(s=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,s&&e!==null&&(s=31-ve(a),t=u.hiddenUpdates,r=t[s],r===null?t[s]=[e]:r.push(e),e.lane=a|536870912),u):null}function bl(t){if(50<cr)throw cr=0,zu=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ya={};function pb(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,a,r){return new pb(t,e,a,r)}function Rs(t){return t=t.prototype,!(!t||!t.isReactComponent)}function on(t,e){var a=t.alternate;return a===null?(a=xe(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hd(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function xl(t,e,a,r,s,u){var p=0;if(r=t,typeof t=="function")Rs(t)&&(p=1);else if(typeof t=="string")p=y1(t,a,tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case at:return t=xe(31,a,e,s),t.elementType=at,t.lanes=u,t;case E:return sa(a.children,s,u,e);case O:p=8,s|=24;break;case N:return t=xe(12,a,e,s|2),t.elementType=N,t.lanes=u,t;case q:return t=xe(13,a,e,s),t.elementType=q,t.lanes=u,t;case I:return t=xe(19,a,e,s),t.elementType=I,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:case B:p=10;break t;case H:p=9;break t;case K:p=11;break t;case lt:p=14;break t;case F:p=16,r=null;break t}p=29,a=Error(o(130,t===null?"null":typeof t,"")),r=null}return e=xe(p,a,e,s),e.elementType=t,e.type=r,e.lanes=u,e}function sa(t,e,a,r){return t=xe(7,t,r,e),t.lanes=a,t}function ws(t,e,a){return t=xe(6,t,null,e),t.lanes=a,t}function Cs(t,e,a){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ga=[],Xa=0,Sl=null,Tl=0,ke=[],_e=0,ua=null,sn=1,un="";function ca(t,e){Ga[Xa++]=Tl,Ga[Xa++]=Sl,Sl=t,Tl=e}function qd(t,e,a){ke[_e++]=sn,ke[_e++]=un,ke[_e++]=ua,ua=t;var r=sn;t=un;var s=32-ve(r)-1;r&=~(1<<s),a+=1;var u=32-ve(e)+s;if(30<u){var p=s-s%5;u=(r&(1<<p)-1).toString(32),r>>=p,s-=p,sn=1<<32-ve(e)+s|a<<s|r,un=u+t}else sn=1<<u|a<<s|r,un=t}function ks(t){t.return!==null&&(ca(t,1),qd(t,1,0))}function _s(t){for(;t===Sl;)Sl=Ga[--Xa],Ga[Xa]=null,Tl=Ga[--Xa],Ga[Xa]=null;for(;t===ua;)ua=ke[--_e],ke[_e]=null,un=ke[--_e],ke[_e]=null,sn=ke[--_e],ke[_e]=null}var se=null,Vt=null,vt=!1,fa=null,Ke=!1,zs=Error(o(519));function da(t){var e=Error(o(418,""));throw qi(we(e,t)),zs}function Yd(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[ie]=t,e[ce]=r,a){case"dialog":dt("cancel",e),dt("close",e);break;case"iframe":case"object":case"embed":dt("load",e);break;case"video":case"audio":for(a=0;a<dr.length;a++)dt(dr[a],e);break;case"source":dt("error",e);break;case"img":case"image":case"link":dt("error",e),dt("load",e);break;case"details":dt("toggle",e);break;case"input":dt("invalid",e),id(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),sl(e);break;case"select":dt("invalid",e);break;case"textarea":dt("invalid",e),ld(e,r.value,r.defaultValue,r.children),sl(e)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||lp(e.textContent,a)?(r.popover!=null&&(dt("beforetoggle",e),dt("toggle",e)),r.onScroll!=null&&dt("scroll",e),r.onScrollEnd!=null&&dt("scrollend",e),r.onClick!=null&&(e.onclick=no),e=!0):e=!1,e||da(t)}function Gd(t){for(se=t.return;se;)switch(se.tag){case 5:case 13:Ke=!1;return;case 27:case 3:Ke=!0;return;default:se=se.return}}function Pi(t){if(t!==se)return!1;if(!vt)return Gd(t),vt=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Fu(t.type,t.memoizedProps)),a=!a),a&&Vt&&da(t),Gd(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){Vt=He(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}Vt=null}}else e===27?(e=Vt,Zn(t.type)?(t=Iu,Iu=null,Vt=t):Vt=e):Vt=se?He(t.stateNode.nextSibling):null;return!0}function Hi(){Vt=se=null,vt=!1}function Xd(){var t=fa;return t!==null&&(me===null?me=t:me.push.apply(me,t),fa=null),t}function qi(t){fa===null?fa=[t]:fa.push(t)}var Ns=P(null),ha=null,cn=null;function kn(t,e,a){X(Ns,e._currentValue),e._currentValue=a}function fn(t){t._currentValue=Ns.current,Z(Ns)}function Vs(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function Us(t,e,a,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){var p=s.child;u=u.firstContext;t:for(;u!==null;){var v=u;u=s;for(var S=0;S<e.length;S++)if(v.context===e[S]){u.lanes|=a,v=u.alternate,v!==null&&(v.lanes|=a),Vs(u.return,a,t),r||(p=null);break t}u=v.next}}else if(s.tag===18){if(p=s.return,p===null)throw Error(o(341));p.lanes|=a,u=p.alternate,u!==null&&(u.lanes|=a),Vs(p,a,t),p=null}else p=s.child;if(p!==null)p.return=s;else for(p=s;p!==null;){if(p===t){p=null;break}if(s=p.sibling,s!==null){s.return=p.return,p=s;break}p=p.return}s=p}}function Yi(t,e,a,r){t=null;for(var s=e,u=!1;s!==null;){if(!u){if((s.flags&524288)!==0)u=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var p=s.alternate;if(p===null)throw Error(o(387));if(p=p.memoizedProps,p!==null){var v=s.type;be(s.pendingProps.value,p.value)||(t!==null?t.push(v):t=[v])}}else if(s===ge.current){if(p=s.alternate,p===null)throw Error(o(387));p.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(vr):t=[vr])}s=s.return}t!==null&&Us(e,t,a,r),e.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ma(t){ha=t,cn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function re(t){return Zd(ha,t)}function El(t,e){return ha===null&&ma(t),Zd(t,e)}function Zd(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},cn===null){if(t===null)throw Error(o(308));cn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else cn=cn.next=e;return a}var gb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},yb=n.unstable_scheduleCallback,vb=n.unstable_NormalPriority,Zt={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bs(){return{controller:new gb,data:new Map,refCount:0}}function Gi(t){t.refCount--,t.refCount===0&&yb(vb,function(){t.controller.abort()})}var Xi=null,Ls=0,Za=0,Ka=null;function bb(t,e){if(Xi===null){var a=Xi=[];Ls=0,Za=Pu(),Ka={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ls++,e.then(Kd,Kd),e}function Kd(){if(--Ls===0&&Xi!==null){Ka!==null&&(Ka.status="fulfilled");var t=Xi;Xi=null,Za=0,Ka=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function xb(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(s){a.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<a.length;s++)(0,a[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<a.length;s++)(0,a[s])(void 0)}),r}var Qd=U.S;U.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&bb(t,e),Qd!==null&&Qd(t,e)};var pa=P(null);function js(){var t=pa.current;return t!==null?t:Mt.pooledCache}function Ol(t,e){e===null?X(pa,pa.current):X(pa,e.pool)}function Fd(){var t=js();return t===null?null:{parent:Zt._currentValue,pool:t}}var Zi=Error(o(460)),Jd=Error(o(474)),Dl=Error(o(542)),Ps={then:function(){}};function $d(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ml(){}function Wd(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ml,Ml),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,th(t),t;default:if(typeof e.status=="string")e.then(Ml,Ml);else{if(t=Mt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,th(t),t}throw Ki=e,Zi}}var Ki=null;function Id(){if(Ki===null)throw Error(o(459));var t=Ki;return Ki=null,t}function th(t){if(t===Zi||t===Dl)throw Error(o(483))}var _n=!1;function Hs(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qs(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(bt&2)!==0){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=bl(t),Pd(t,null,a),e}return vl(t,r,e,a),bl(t)}function Qi(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Kf(t,a)}}function Ys(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var s=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?s=u=p:u=u.next=p,a=a.next}while(a!==null);u===null?s=u=e:u=u.next=e}else s=u=e;a={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Gs=!1;function Fi(){if(Gs){var t=Ka;if(t!==null)throw t}}function Ji(t,e,a,r){Gs=!1;var s=t.updateQueue;_n=!1;var u=s.firstBaseUpdate,p=s.lastBaseUpdate,v=s.shared.pending;if(v!==null){s.shared.pending=null;var S=v,C=S.next;S.next=null,p===null?u=C:p.next=C,p=S;var V=t.alternate;V!==null&&(V=V.updateQueue,v=V.lastBaseUpdate,v!==p&&(v===null?V.firstBaseUpdate=C:v.next=C,V.lastBaseUpdate=S))}if(u!==null){var j=s.baseState;p=0,V=C=S=null,v=u;do{var _=v.lane&-536870913,z=_!==v.lane;if(z?(mt&_)===_:(r&_)===_){_!==0&&_===Za&&(Gs=!0),V!==null&&(V=V.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});t:{var it=t,et=v;_=e;var Et=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){j=it.call(Et,j,_);break t}j=it;break t;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,_=typeof it=="function"?it.call(Et,j,_):it,_==null)break t;j=y({},j,_);break t;case 2:_n=!0}}_=v.callback,_!==null&&(t.flags|=64,z&&(t.flags|=8192),z=s.callbacks,z===null?s.callbacks=[_]:z.push(_))}else z={lane:_,tag:v.tag,payload:v.payload,callback:v.callback,next:null},V===null?(C=V=z,S=j):V=V.next=z,p|=_;if(v=v.next,v===null){if(v=s.shared.pending,v===null)break;z=v,v=z.next,z.next=null,s.lastBaseUpdate=z,s.shared.pending=null}}while(!0);V===null&&(S=j),s.baseState=S,s.firstBaseUpdate=C,s.lastBaseUpdate=V,u===null&&(s.shared.lanes=0),qn|=p,t.lanes=p,t.memoizedState=j}}function eh(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function nh(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)eh(a[t],e)}var Qa=P(null),Rl=P(0);function ah(t,e){t=vn,X(Rl,t),X(Qa,e),vn=t|e.baseLanes}function Xs(){X(Rl,vn),X(Qa,Qa.current)}function Zs(){vn=Rl.current,Z(Qa),Z(Rl)}var Vn=0,ut=null,Tt=null,Ht=null,wl=!1,Fa=!1,ga=!1,Cl=0,$i=0,Ja=null,Sb=0;function Lt(){throw Error(o(321))}function Ks(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!be(t[a],e[a]))return!1;return!0}function Qs(t,e,a,r,s,u){return Vn=u,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,U.H=t===null||t.memoizedState===null?Ph:Hh,ga=!1,u=a(r,s),ga=!1,Fa&&(u=rh(e,a,r,s)),ih(t),u}function ih(t){U.H=Ul;var e=Tt!==null&&Tt.next!==null;if(Vn=0,Ht=Tt=ut=null,wl=!1,$i=0,Ja=null,e)throw Error(o(300));t===null||Jt||(t=t.dependencies,t!==null&&Al(t)&&(Jt=!0))}function rh(t,e,a,r){ut=t;var s=0;do{if(Fa&&(Ja=null),$i=0,Fa=!1,25<=s)throw Error(o(301));if(s+=1,Ht=Tt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}U.H=Rb,u=e(a,r)}while(Fa);return u}function Tb(){var t=U.H,e=t.useState()[0];return e=typeof e.then=="function"?Wi(e):e,t=t.useState()[0],(Tt!==null?Tt.memoizedState:null)!==t&&(ut.flags|=1024),e}function Fs(){var t=Cl!==0;return Cl=0,t}function Js(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function $s(t){if(wl){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}wl=!1}Vn=0,Ht=Tt=ut=null,Fa=!1,$i=Cl=0,Ja=null}function de(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?ut.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function qt(){if(Tt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Ht===null?ut.memoizedState:Ht.next;if(e!==null)Ht=e,Tt=t;else{if(t===null)throw ut.alternate===null?Error(o(467)):Error(o(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Ht===null?ut.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ws(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wi(t){var e=$i;return $i+=1,Ja===null&&(Ja=[]),t=Wd(Ja,t,e),e=ut,(Ht===null?e.memoizedState:Ht.next)===null&&(e=e.alternate,U.H=e===null||e.memoizedState===null?Ph:Hh),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wi(t);if(t.$$typeof===B)return re(t)}throw Error(o(438,String(t)))}function Is(t){var e=null,a=ut.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=ut.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=Ws(),ut.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=Dt;return e.index++,a}function dn(t,e){return typeof e=="function"?e(t):e}function _l(t){var e=qt();return tu(e,Tt,t)}function tu(t,e,a){var r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=a;var s=t.baseQueue,u=r.pending;if(u!==null){if(s!==null){var p=s.next;s.next=u.next,u.next=p}e.baseQueue=s=u,r.pending=null}if(u=t.baseState,s===null)t.memoizedState=u;else{e=s.next;var v=p=null,S=null,C=e,V=!1;do{var j=C.lane&-536870913;if(j!==C.lane?(mt&j)===j:(Vn&j)===j){var _=C.revertLane;if(_===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),j===Za&&(V=!0);else if((Vn&_)===_){C=C.next,_===Za&&(V=!0);continue}else j={lane:0,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(v=S=j,p=u):S=S.next=j,ut.lanes|=_,qn|=_;j=C.action,ga&&a(u,j),u=C.hasEagerState?C.eagerState:a(u,j)}else _={lane:j,revertLane:C.revertLane,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null},S===null?(v=S=_,p=u):S=S.next=_,ut.lanes|=j,qn|=j;C=C.next}while(C!==null&&C!==e);if(S===null?p=u:S.next=v,!be(u,t.memoizedState)&&(Jt=!0,V&&(a=Ka,a!==null)))throw a;t.memoizedState=u,t.baseState=p,t.baseQueue=S,r.lastRenderedState=u}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function eu(t){var e=qt(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var r=a.dispatch,s=a.pending,u=e.memoizedState;if(s!==null){a.pending=null;var p=s=s.next;do u=t(u,p.action),p=p.next;while(p!==s);be(u,e.memoizedState)||(Jt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,r]}function lh(t,e,a){var r=ut,s=qt(),u=vt;if(u){if(a===void 0)throw Error(o(407));a=a()}else a=e();var p=!be((Tt||s).memoizedState,a);p&&(s.memoizedState=a,Jt=!0),s=s.queue;var v=uh.bind(null,r,s,t);if(Ii(2048,8,v,[t]),s.getSnapshot!==e||p||Ht!==null&&Ht.memoizedState.tag&1){if(r.flags|=2048,$a(9,zl(),sh.bind(null,r,s,a,e),null),Mt===null)throw Error(o(349));u||(Vn&124)!==0||oh(r,e,a)}return a}function oh(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=ut.updateQueue,e===null?(e=Ws(),ut.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function sh(t,e,a,r){e.value=a,e.getSnapshot=r,ch(e)&&fh(t)}function uh(t,e,a){return a(function(){ch(e)&&fh(t)})}function ch(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!be(t,a)}catch{return!0}}function fh(t){var e=qa(t,2);e!==null&&Oe(e,t,2)}function nu(t){var e=de();if(typeof t=="function"){var a=t;if(t=a(),ga){Rn(!0);try{a()}finally{Rn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:t},e}function dh(t,e,a,r){return t.baseState=a,tu(t,Tt,typeof r=="function"?r:dn)}function Ab(t,e,a,r,s){if(Vl(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){u.listeners.push(p)}};U.T!==null?a(!0):u.isTransition=!1,r(u),a=e.pending,a===null?(u.next=e.pending=u,hh(e,u)):(u.next=a.next,e.pending=a.next=u)}}function hh(t,e){var a=e.action,r=e.payload,s=t.state;if(e.isTransition){var u=U.T,p={};U.T=p;try{var v=a(s,r),S=U.S;S!==null&&S(p,v),mh(t,e,v)}catch(C){au(t,e,C)}finally{U.T=u}}else try{u=a(s,r),mh(t,e,u)}catch(C){au(t,e,C)}}function mh(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){ph(t,e,r)},function(r){return au(t,e,r)}):ph(t,e,a)}function ph(t,e,a){e.status="fulfilled",e.value=a,gh(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,hh(t,a)))}function au(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,gh(e),e=e.next;while(e!==r)}t.action=null}function gh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function yh(t,e){return e}function vh(t,e){if(vt){var a=Mt.formState;if(a!==null){t:{var r=ut;if(vt){if(Vt){e:{for(var s=Vt,u=Ke;s.nodeType!==8;){if(!u){s=null;break e}if(s=He(s.nextSibling),s===null){s=null;break e}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){Vt=He(s.nextSibling),r=s.data==="F!";break t}}da(r)}r=!1}r&&(e=a[0])}}return a=de(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yh,lastRenderedState:e},a.queue=r,a=Bh.bind(null,ut,r),r.dispatch=a,r=nu(!1),u=su.bind(null,ut,!1,r.queue),r=de(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,a=Ab.bind(null,ut,s,u,a),s.dispatch=a,r.memoizedState=t,[e,a,!1]}function bh(t){var e=qt();return xh(e,Tt,t)}function xh(t,e,a){if(e=tu(t,e,yh)[0],t=_l(dn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=Wi(e)}catch(p){throw p===Zi?Dl:p}else r=e;e=qt();var s=e.queue,u=s.dispatch;return a!==e.memoizedState&&(ut.flags|=2048,$a(9,zl(),Eb.bind(null,s,a),null)),[r,u,t]}function Eb(t,e){t.action=e}function Sh(t){var e=qt(),a=Tt;if(a!==null)return xh(e,a,t);qt(),e=e.memoizedState,a=qt();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function $a(t,e,a,r){return t={tag:t,create:a,deps:r,inst:e,next:null},e=ut.updateQueue,e===null&&(e=Ws(),ut.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function zl(){return{destroy:void 0,resource:void 0}}function Th(){return qt().memoizedState}function Nl(t,e,a,r){var s=de();r=r===void 0?null:r,ut.flags|=t,s.memoizedState=$a(1|e,zl(),a,r)}function Ii(t,e,a,r){var s=qt();r=r===void 0?null:r;var u=s.memoizedState.inst;Tt!==null&&r!==null&&Ks(r,Tt.memoizedState.deps)?s.memoizedState=$a(e,u,a,r):(ut.flags|=t,s.memoizedState=$a(1|e,u,a,r))}function Ah(t,e){Nl(8390656,8,t,e)}function Eh(t,e){Ii(2048,8,t,e)}function Oh(t,e){return Ii(4,2,t,e)}function Dh(t,e){return Ii(4,4,t,e)}function Mh(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rh(t,e,a){a=a!=null?a.concat([t]):null,Ii(4,4,Mh.bind(null,e,t),a)}function iu(){}function wh(t,e){var a=qt();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Ks(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function Ch(t,e){var a=qt();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Ks(e,r[1]))return r[0];if(r=t(),ga){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[r,e],r}function ru(t,e,a){return a===void 0||(Vn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=zm(),ut.lanes|=t,qn|=t,a)}function kh(t,e,a,r){return be(a,e)?a:Qa.current!==null?(t=ru(t,a,r),be(t,e)||(Jt=!0),t):(Vn&42)===0?(Jt=!0,t.memoizedState=a):(t=zm(),ut.lanes|=t,qn|=t,e)}function _h(t,e,a,r,s){var u=Y.p;Y.p=u!==0&&8>u?u:8;var p=U.T,v={};U.T=v,su(t,!1,e,a);try{var S=s(),C=U.S;if(C!==null&&C(v,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=xb(S,r);tr(t,e,V,Ee(t))}else tr(t,e,r,Ee(t))}catch(j){tr(t,e,{then:function(){},status:"rejected",reason:j},Ee())}finally{Y.p=u,U.T=p}}function Ob(){}function lu(t,e,a,r){if(t.tag!==5)throw Error(o(476));var s=zh(t).queue;_h(t,s,e,$,a===null?Ob:function(){return Nh(t),a(r)})}function zh(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:$},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Nh(t){var e=zh(t).next.queue;tr(t,e,{},Ee())}function ou(){return re(vr)}function Vh(){return qt().memoizedState}function Uh(){return qt().memoizedState}function Db(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ee();t=zn(a);var r=Nn(e,t,a);r!==null&&(Oe(r,e,a),Qi(r,e,a)),e={cache:Bs()},t.payload=e;return}e=e.return}}function Mb(t,e,a){var r=Ee();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?Lh(e,a):(a=Ms(t,e,a,r),a!==null&&(Oe(a,t,r),jh(a,e,r)))}function Bh(t,e,a){var r=Ee();tr(t,e,a,r)}function tr(t,e,a,r){var s={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))Lh(e,s);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var p=e.lastRenderedState,v=u(p,a);if(s.hasEagerState=!0,s.eagerState=v,be(v,p))return vl(t,e,s,0),Mt===null&&yl(),!1}catch{}finally{}if(a=Ms(t,e,s,r),a!==null)return Oe(a,t,r),jh(a,e,r),!0}return!1}function su(t,e,a,r){if(r={lane:2,revertLane:Pu(),action:r,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(e)throw Error(o(479))}else e=Ms(t,a,r,2),e!==null&&Oe(e,t,2)}function Vl(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Lh(t,e){Fa=wl=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function jh(t,e,a){if((a&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Kf(t,a)}}var Ul={readContext:re,use:kl,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt},Ph={readContext:re,use:kl,useCallback:function(t,e){return de().memoizedState=[t,e===void 0?null:e],t},useContext:re,useEffect:Ah,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,Mh.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){Nl(4,2,t,e)},useMemo:function(t,e){var a=de();e=e===void 0?null:e;var r=t();if(ga){Rn(!0);try{t()}finally{Rn(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=de();if(a!==void 0){var s=a(e);if(ga){Rn(!0);try{a(e)}finally{Rn(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=Mb.bind(null,ut,t),[r.memoizedState,t]},useRef:function(t){var e=de();return t={current:t},e.memoizedState=t},useState:function(t){t=nu(t);var e=t.queue,a=Bh.bind(null,ut,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:iu,useDeferredValue:function(t,e){var a=de();return ru(a,t,e)},useTransition:function(){var t=nu(!1);return t=_h.bind(null,ut,t.queue,!0,!1),de().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=ut,s=de();if(vt){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Mt===null)throw Error(o(349));(mt&124)!==0||oh(r,e,a)}s.memoizedState=a;var u={value:a,getSnapshot:e};return s.queue=u,Ah(uh.bind(null,r,u,t),[t]),r.flags|=2048,$a(9,zl(),sh.bind(null,r,u,a,e),null),a},useId:function(){var t=de(),e=Mt.identifierPrefix;if(vt){var a=un,r=sn;a=(r&~(1<<32-ve(r)-1)).toString(32)+a,e="«"+e+"R"+a,a=Cl++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=Sb++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:ou,useFormState:vh,useActionState:vh,useOptimistic:function(t){var e=de();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=su.bind(null,ut,!0,a),a.dispatch=e,[t,e]},useMemoCache:Is,useCacheRefresh:function(){return de().memoizedState=Db.bind(null,ut)}},Hh={readContext:re,use:kl,useCallback:wh,useContext:re,useEffect:Eh,useImperativeHandle:Rh,useInsertionEffect:Oh,useLayoutEffect:Dh,useMemo:Ch,useReducer:_l,useRef:Th,useState:function(){return _l(dn)},useDebugValue:iu,useDeferredValue:function(t,e){var a=qt();return kh(a,Tt.memoizedState,t,e)},useTransition:function(){var t=_l(dn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Wi(t),e]},useSyncExternalStore:lh,useId:Vh,useHostTransitionStatus:ou,useFormState:bh,useActionState:bh,useOptimistic:function(t,e){var a=qt();return dh(a,Tt,t,e)},useMemoCache:Is,useCacheRefresh:Uh},Rb={readContext:re,use:kl,useCallback:wh,useContext:re,useEffect:Eh,useImperativeHandle:Rh,useInsertionEffect:Oh,useLayoutEffect:Dh,useMemo:Ch,useReducer:eu,useRef:Th,useState:function(){return eu(dn)},useDebugValue:iu,useDeferredValue:function(t,e){var a=qt();return Tt===null?ru(a,t,e):kh(a,Tt.memoizedState,t,e)},useTransition:function(){var t=eu(dn)[0],e=qt().memoizedState;return[typeof t=="boolean"?t:Wi(t),e]},useSyncExternalStore:lh,useId:Vh,useHostTransitionStatus:ou,useFormState:Sh,useActionState:Sh,useOptimistic:function(t,e){var a=qt();return Tt!==null?dh(a,Tt,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Is,useCacheRefresh:Uh},Wa=null,er=0;function Bl(t){var e=er;return er+=1,Wa===null&&(Wa=[]),Wd(Wa,t,e)}function nr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Ll(t,e){throw e.$$typeof===b?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function qh(t){var e=t._init;return e(t._payload)}function Yh(t){function e(M,A){if(t){var R=M.deletions;R===null?(M.deletions=[A],M.flags|=16):R.push(A)}}function a(M,A){if(!t)return null;for(;A!==null;)e(M,A),A=A.sibling;return null}function r(M){for(var A=new Map;M!==null;)M.key!==null?A.set(M.key,M):A.set(M.index,M),M=M.sibling;return A}function s(M,A){return M=on(M,A),M.index=0,M.sibling=null,M}function u(M,A,R){return M.index=R,t?(R=M.alternate,R!==null?(R=R.index,R<A?(M.flags|=67108866,A):R):(M.flags|=67108866,A)):(M.flags|=1048576,A)}function p(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function v(M,A,R,L){return A===null||A.tag!==6?(A=ws(R,M.mode,L),A.return=M,A):(A=s(A,R),A.return=M,A)}function S(M,A,R,L){var Q=R.type;return Q===E?V(M,A,R.props.children,L,R.key):A!==null&&(A.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===F&&qh(Q)===A.type)?(A=s(A,R.props),nr(A,R),A.return=M,A):(A=xl(R.type,R.key,R.props,null,M.mode,L),nr(A,R),A.return=M,A)}function C(M,A,R,L){return A===null||A.tag!==4||A.stateNode.containerInfo!==R.containerInfo||A.stateNode.implementation!==R.implementation?(A=Cs(R,M.mode,L),A.return=M,A):(A=s(A,R.children||[]),A.return=M,A)}function V(M,A,R,L,Q){return A===null||A.tag!==7?(A=sa(R,M.mode,L,Q),A.return=M,A):(A=s(A,R),A.return=M,A)}function j(M,A,R){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=ws(""+A,M.mode,R),A.return=M,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case x:return R=xl(A.type,A.key,A.props,null,M.mode,R),nr(R,A),R.return=M,R;case D:return A=Cs(A,M.mode,R),A.return=M,A;case F:var L=A._init;return A=L(A._payload),j(M,A,R)}if(It(A)||Xt(A))return A=sa(A,M.mode,R,null),A.return=M,A;if(typeof A.then=="function")return j(M,Bl(A),R);if(A.$$typeof===B)return j(M,El(M,A),R);Ll(M,A)}return null}function _(M,A,R,L){var Q=A!==null?A.key:null;if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return Q!==null?null:v(M,A,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case x:return R.key===Q?S(M,A,R,L):null;case D:return R.key===Q?C(M,A,R,L):null;case F:return Q=R._init,R=Q(R._payload),_(M,A,R,L)}if(It(R)||Xt(R))return Q!==null?null:V(M,A,R,L,null);if(typeof R.then=="function")return _(M,A,Bl(R),L);if(R.$$typeof===B)return _(M,A,El(M,R),L);Ll(M,R)}return null}function z(M,A,R,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return M=M.get(R)||null,v(A,M,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case x:return M=M.get(L.key===null?R:L.key)||null,S(A,M,L,Q);case D:return M=M.get(L.key===null?R:L.key)||null,C(A,M,L,Q);case F:var ct=L._init;return L=ct(L._payload),z(M,A,R,L,Q)}if(It(L)||Xt(L))return M=M.get(R)||null,V(A,M,L,Q,null);if(typeof L.then=="function")return z(M,A,R,Bl(L),Q);if(L.$$typeof===B)return z(M,A,R,El(A,L),Q);Ll(A,L)}return null}function it(M,A,R,L){for(var Q=null,ct=null,W=A,nt=A=0,Wt=null;W!==null&&nt<R.length;nt++){W.index>nt?(Wt=W,W=null):Wt=W.sibling;var gt=_(M,W,R[nt],L);if(gt===null){W===null&&(W=Wt);break}t&&W&&gt.alternate===null&&e(M,W),A=u(gt,A,nt),ct===null?Q=gt:ct.sibling=gt,ct=gt,W=Wt}if(nt===R.length)return a(M,W),vt&&ca(M,nt),Q;if(W===null){for(;nt<R.length;nt++)W=j(M,R[nt],L),W!==null&&(A=u(W,A,nt),ct===null?Q=W:ct.sibling=W,ct=W);return vt&&ca(M,nt),Q}for(W=r(W);nt<R.length;nt++)Wt=z(W,M,nt,R[nt],L),Wt!==null&&(t&&Wt.alternate!==null&&W.delete(Wt.key===null?nt:Wt.key),A=u(Wt,A,nt),ct===null?Q=Wt:ct.sibling=Wt,ct=Wt);return t&&W.forEach(function($n){return e(M,$n)}),vt&&ca(M,nt),Q}function et(M,A,R,L){if(R==null)throw Error(o(151));for(var Q=null,ct=null,W=A,nt=A=0,Wt=null,gt=R.next();W!==null&&!gt.done;nt++,gt=R.next()){W.index>nt?(Wt=W,W=null):Wt=W.sibling;var $n=_(M,W,gt.value,L);if($n===null){W===null&&(W=Wt);break}t&&W&&$n.alternate===null&&e(M,W),A=u($n,A,nt),ct===null?Q=$n:ct.sibling=$n,ct=$n,W=Wt}if(gt.done)return a(M,W),vt&&ca(M,nt),Q;if(W===null){for(;!gt.done;nt++,gt=R.next())gt=j(M,gt.value,L),gt!==null&&(A=u(gt,A,nt),ct===null?Q=gt:ct.sibling=gt,ct=gt);return vt&&ca(M,nt),Q}for(W=r(W);!gt.done;nt++,gt=R.next())gt=z(W,M,nt,gt.value,L),gt!==null&&(t&&gt.alternate!==null&&W.delete(gt.key===null?nt:gt.key),A=u(gt,A,nt),ct===null?Q=gt:ct.sibling=gt,ct=gt);return t&&W.forEach(function(w1){return e(M,w1)}),vt&&ca(M,nt),Q}function Et(M,A,R,L){if(typeof R=="object"&&R!==null&&R.type===E&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case x:t:{for(var Q=R.key;A!==null;){if(A.key===Q){if(Q=R.type,Q===E){if(A.tag===7){a(M,A.sibling),L=s(A,R.props.children),L.return=M,M=L;break t}}else if(A.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===F&&qh(Q)===A.type){a(M,A.sibling),L=s(A,R.props),nr(L,R),L.return=M,M=L;break t}a(M,A);break}else e(M,A);A=A.sibling}R.type===E?(L=sa(R.props.children,M.mode,L,R.key),L.return=M,M=L):(L=xl(R.type,R.key,R.props,null,M.mode,L),nr(L,R),L.return=M,M=L)}return p(M);case D:t:{for(Q=R.key;A!==null;){if(A.key===Q)if(A.tag===4&&A.stateNode.containerInfo===R.containerInfo&&A.stateNode.implementation===R.implementation){a(M,A.sibling),L=s(A,R.children||[]),L.return=M,M=L;break t}else{a(M,A);break}else e(M,A);A=A.sibling}L=Cs(R,M.mode,L),L.return=M,M=L}return p(M);case F:return Q=R._init,R=Q(R._payload),Et(M,A,R,L)}if(It(R))return it(M,A,R,L);if(Xt(R)){if(Q=Xt(R),typeof Q!="function")throw Error(o(150));return R=Q.call(R),et(M,A,R,L)}if(typeof R.then=="function")return Et(M,A,Bl(R),L);if(R.$$typeof===B)return Et(M,A,El(M,R),L);Ll(M,R)}return typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint"?(R=""+R,A!==null&&A.tag===6?(a(M,A.sibling),L=s(A,R),L.return=M,M=L):(a(M,A),L=ws(R,M.mode,L),L.return=M,M=L),p(M)):a(M,A)}return function(M,A,R,L){try{er=0;var Q=Et(M,A,R,L);return Wa=null,Q}catch(W){if(W===Zi||W===Dl)throw W;var ct=xe(29,W,null,M.mode);return ct.lanes=L,ct.return=M,ct}finally{}}}var Ia=Yh(!0),Gh=Yh(!1),ze=P(null),Qe=null;function Un(t){var e=t.alternate;X(Kt,Kt.current&1),X(ze,t),Qe===null&&(e===null||Qa.current!==null||e.memoizedState!==null)&&(Qe=t)}function Xh(t){if(t.tag===22){if(X(Kt,Kt.current),X(ze,t),Qe===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Qe=t)}}else Bn()}function Bn(){X(Kt,Kt.current),X(ze,ze.current)}function hn(t){Z(ze),Qe===t&&(Qe=null),Z(Kt)}var Kt=P(0);function jl(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Wu(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function uu(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:y({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cu={enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Ee(),s=zn(r);s.payload=e,a!=null&&(s.callback=a),e=Nn(t,s,r),e!==null&&(Oe(e,t,r),Qi(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Ee(),s=zn(r);s.tag=1,s.payload=e,a!=null&&(s.callback=a),e=Nn(t,s,r),e!==null&&(Oe(e,t,r),Qi(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ee(),r=zn(a);r.tag=2,e!=null&&(r.callback=e),e=Nn(t,r,a),e!==null&&(Oe(e,t,a),Qi(e,t,a))}};function Zh(t,e,a,r,s,u,p){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,p):e.prototype&&e.prototype.isPureReactComponent?!Li(a,r)||!Li(s,u):!0}function Kh(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function ya(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=y({},a));for(var s in t)a[s]===void 0&&(a[s]=t[s])}return a}var Pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Qh(t){Pl(t)}function Fh(t){console.error(t)}function Jh(t){Pl(t)}function Hl(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function $h(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function fu(t,e,a){return a=zn(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(t,e)},a}function Wh(t){return t=zn(t),t.tag=3,t}function Ih(t,e,a,r){var s=a.type.getDerivedStateFromError;if(typeof s=="function"){var u=r.value;t.payload=function(){return s(u)},t.callback=function(){$h(e,a,r)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(t.callback=function(){$h(e,a,r),typeof s!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})})}function wb(t,e,a,r,s){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&Yi(e,a,s,!0),a=ze.current,a!==null){switch(a.tag){case 13:return Qe===null?Vu():a.alternate===null&&Ut===0&&(Ut=3),a.flags&=-257,a.flags|=65536,a.lanes=s,r===Ps?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),Bu(t,r,s)),!1;case 22:return a.flags|=65536,r===Ps?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),Bu(t,r,s)),!1}throw Error(o(435,a.tag))}return Bu(t,r,s),Vu(),!1}if(vt)return e=ze.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==zs&&(t=Error(o(422),{cause:r}),qi(we(t,a)))):(r!==zs&&(e=Error(o(423),{cause:r}),qi(we(e,a))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=we(r,a),s=fu(t.stateNode,r,s),Ys(t,s),Ut!==4&&(Ut=2)),!1;var u=Error(o(520),{cause:r});if(u=we(u,a),ur===null?ur=[u]:ur.push(u),Ut!==4&&(Ut=2),e===null)return!0;r=we(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=s&-s,a.lanes|=t,t=fu(a.stateNode,r,t),Ys(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Yn===null||!Yn.has(u))))return a.flags|=65536,s&=-s,a.lanes|=s,s=Wh(s),Ih(s,t,a,r),Ys(a,s),!1}a=a.return}while(a!==null);return!1}var tm=Error(o(461)),Jt=!1;function te(t,e,a,r){e.child=t===null?Gh(e,null,a,r):Ia(e,t.child,a,r)}function em(t,e,a,r,s){a=a.render;var u=e.ref;if("ref"in r){var p={};for(var v in r)v!=="ref"&&(p[v]=r[v])}else p=r;return ma(e),r=Qs(t,e,a,p,u,s),v=Fs(),t!==null&&!Jt?(Js(t,e,s),mn(t,e,s)):(vt&&v&&ks(e),e.flags|=1,te(t,e,r,s),e.child)}function nm(t,e,a,r,s){if(t===null){var u=a.type;return typeof u=="function"&&!Rs(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,am(t,e,u,r,s)):(t=xl(a.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!bu(t,s)){var p=u.memoizedProps;if(a=a.compare,a=a!==null?a:Li,a(p,r)&&t.ref===e.ref)return mn(t,e,s)}return e.flags|=1,t=on(u,r),t.ref=e.ref,t.return=e,e.child=t}function am(t,e,a,r,s){if(t!==null){var u=t.memoizedProps;if(Li(u,r)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=r=u,bu(t,s))(t.flags&131072)!==0&&(Jt=!0);else return e.lanes=t.lanes,mn(t,e,s)}return du(t,e,a,r,s)}function im(t,e,a){var r=e.pendingProps,s=r.children,u=t!==null?t.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=u!==null?u.baseLanes|a:a,t!==null){for(s=e.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return rm(t,e,r,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(e,u!==null?u.cachePool:null),u!==null?ah(e,u):Xs(),Xh(e);else return e.lanes=e.childLanes=536870912,rm(t,e,u!==null?u.baseLanes|a:a,a)}else u!==null?(Ol(e,u.cachePool),ah(e,u),Bn(),e.memoizedState=null):(t!==null&&Ol(e,null),Xs(),Bn());return te(t,e,s,a),e.child}function rm(t,e,a,r){var s=js();return s=s===null?null:{parent:Zt._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Ol(e,null),Xs(),Xh(e),t!==null&&Yi(t,e,r,!0),null}function ql(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function du(t,e,a,r,s){return ma(e),a=Qs(t,e,a,r,void 0,s),r=Fs(),t!==null&&!Jt?(Js(t,e,s),mn(t,e,s)):(vt&&r&&ks(e),e.flags|=1,te(t,e,a,s),e.child)}function lm(t,e,a,r,s,u){return ma(e),e.updateQueue=null,a=rh(e,r,a,s),ih(t),r=Fs(),t!==null&&!Jt?(Js(t,e,u),mn(t,e,u)):(vt&&r&&ks(e),e.flags|=1,te(t,e,a,u),e.child)}function om(t,e,a,r,s){if(ma(e),e.stateNode===null){var u=Ya,p=a.contextType;typeof p=="object"&&p!==null&&(u=re(p)),u=new a(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=cu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},Hs(e),p=a.contextType,u.context=typeof p=="object"&&p!==null?re(p):Ya,u.state=e.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(uu(e,a,p,r),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(p=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),p!==u.state&&cu.enqueueReplaceState(u,u.state,null),Ji(e,r,u,s),Fi(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var v=e.memoizedProps,S=ya(a,v);u.props=S;var C=u.context,V=a.contextType;p=Ya,typeof V=="object"&&V!==null&&(p=re(V));var j=a.getDerivedStateFromProps;V=typeof j=="function"||typeof u.getSnapshotBeforeUpdate=="function",v=e.pendingProps!==v,V||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v||C!==p)&&Kh(e,u,r,p),_n=!1;var _=e.memoizedState;u.state=_,Ji(e,r,u,s),Fi(),C=e.memoizedState,v||_!==C||_n?(typeof j=="function"&&(uu(e,a,j,r),C=e.memoizedState),(S=_n||Zh(e,a,S,r,_,C,p))?(V||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=C),u.props=r,u.state=C,u.context=p,r=S):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,qs(t,e),p=e.memoizedProps,V=ya(a,p),u.props=V,j=e.pendingProps,_=u.context,C=a.contextType,S=Ya,typeof C=="object"&&C!==null&&(S=re(C)),v=a.getDerivedStateFromProps,(C=typeof v=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p!==j||_!==S)&&Kh(e,u,r,S),_n=!1,_=e.memoizedState,u.state=_,Ji(e,r,u,s),Fi();var z=e.memoizedState;p!==j||_!==z||_n||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof v=="function"&&(uu(e,a,v,r),z=e.memoizedState),(V=_n||Zh(e,a,V,r,_,z,S)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(C||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,z,S),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,z,S)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=z),u.props=r,u.state=z,u.context=S,r=V):(typeof u.componentDidUpdate!="function"||p===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||p===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,ql(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Ia(e,t.child,null,s),e.child=Ia(e,null,a,s)):te(t,e,a,s),e.memoizedState=u.state,t=e.child):t=mn(t,e,s),t}function sm(t,e,a,r){return Hi(),e.flags|=256,te(t,e,a,r),e.child}var hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mu(t){return{baseLanes:t,cachePool:Fd()}}function pu(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=Ne),t}function um(t,e,a){var r=e.pendingProps,s=!1,u=(e.flags&128)!==0,p;if((p=u)||(p=t!==null&&t.memoizedState===null?!1:(Kt.current&2)!==0),p&&(s=!0,e.flags&=-129),p=(e.flags&32)!==0,e.flags&=-33,t===null){if(vt){if(s?Un(e):Bn(),vt){var v=Vt,S;if(S=v){t:{for(S=v,v=Ke;S.nodeType!==8;){if(!v){v=null;break t}if(S=He(S.nextSibling),S===null){v=null;break t}}v=S}v!==null?(e.memoizedState={dehydrated:v,treeContext:ua!==null?{id:sn,overflow:un}:null,retryLane:536870912,hydrationErrors:null},S=xe(18,null,null,0),S.stateNode=v,S.return=e,e.child=S,se=e,Vt=null,S=!0):S=!1}S||da(e)}if(v=e.memoizedState,v!==null&&(v=v.dehydrated,v!==null))return Wu(v)?e.lanes=32:e.lanes=536870912,null;hn(e)}return v=r.children,r=r.fallback,s?(Bn(),s=e.mode,v=Yl({mode:"hidden",children:v},s),r=sa(r,s,a,null),v.return=e,r.return=e,v.sibling=r,e.child=v,s=e.child,s.memoizedState=mu(a),s.childLanes=pu(t,p,a),e.memoizedState=hu,r):(Un(e),gu(e,v))}if(S=t.memoizedState,S!==null&&(v=S.dehydrated,v!==null)){if(u)e.flags&256?(Un(e),e.flags&=-257,e=yu(t,e,a)):e.memoizedState!==null?(Bn(),e.child=t.child,e.flags|=128,e=null):(Bn(),s=r.fallback,v=e.mode,r=Yl({mode:"visible",children:r.children},v),s=sa(s,v,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,Ia(e,t.child,null,a),r=e.child,r.memoizedState=mu(a),r.childLanes=pu(t,p,a),e.memoizedState=hu,e=s);else if(Un(e),Wu(v)){if(p=v.nextSibling&&v.nextSibling.dataset,p)var C=p.dgst;p=C,r=Error(o(419)),r.stack="",r.digest=p,qi({value:r,source:null,stack:null}),e=yu(t,e,a)}else if(Jt||Yi(t,e,a,!1),p=(a&t.childLanes)!==0,Jt||p){if(p=Mt,p!==null&&(r=a&-a,r=(r&42)!==0?1:Io(r),r=(r&(p.suspendedLanes|a))!==0?0:r,r!==0&&r!==S.retryLane))throw S.retryLane=r,qa(t,r),Oe(p,t,r),tm;v.data==="$?"||Vu(),e=yu(t,e,a)}else v.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=S.treeContext,Vt=He(v.nextSibling),se=e,vt=!0,fa=null,Ke=!1,t!==null&&(ke[_e++]=sn,ke[_e++]=un,ke[_e++]=ua,sn=t.id,un=t.overflow,ua=e),e=gu(e,r.children),e.flags|=4096);return e}return s?(Bn(),s=r.fallback,v=e.mode,S=t.child,C=S.sibling,r=on(S,{mode:"hidden",children:r.children}),r.subtreeFlags=S.subtreeFlags&65011712,C!==null?s=on(C,s):(s=sa(s,v,a,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,v=t.child.memoizedState,v===null?v=mu(a):(S=v.cachePool,S!==null?(C=Zt._currentValue,S=S.parent!==C?{parent:C,pool:C}:S):S=Fd(),v={baseLanes:v.baseLanes|a,cachePool:S}),s.memoizedState=v,s.childLanes=pu(t,p,a),e.memoizedState=hu,r):(Un(e),a=t.child,t=a.sibling,a=on(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(p=e.deletions,p===null?(e.deletions=[t],e.flags|=16):p.push(t)),e.child=a,e.memoizedState=null,a)}function gu(t,e){return e=Yl({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Yl(t,e){return t=xe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function yu(t,e,a){return Ia(e,t.child,null,a),t=gu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cm(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Vs(t.return,e,a)}function vu(t,e,a,r,s){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:s}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=a,u.tailMode=s)}function fm(t,e,a){var r=e.pendingProps,s=r.revealOrder,u=r.tail;if(te(t,e,r.children,a),r=Kt.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,a,e);else if(t.tag===19)cm(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(X(Kt,r),s){case"forwards":for(a=e.child,s=null;a!==null;)t=a.alternate,t!==null&&jl(t)===null&&(s=a),a=a.sibling;a=s,a===null?(s=e.child,e.child=null):(s=a.sibling,a.sibling=null),vu(e,!1,s,a,u);break;case"backwards":for(a=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&jl(t)===null){e.child=s;break}t=s.sibling,s.sibling=a,a=s,s=t}vu(e,!0,a,null,u);break;case"together":vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mn(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),qn|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Yi(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=on(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=on(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function bu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function Cb(t,e,a){switch(e.tag){case 3:Rt(e,e.stateNode.containerInfo),kn(e,Zt,t.memoizedState.cache),Hi();break;case 27:case 5:Qo(e);break;case 4:Rt(e,e.stateNode.containerInfo);break;case 10:kn(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Un(e),e.flags|=128,null):(a&e.child.childLanes)!==0?um(t,e,a):(Un(e),t=mn(t,e,a),t!==null?t.sibling:null);Un(e);break;case 19:var s=(t.flags&128)!==0;if(r=(a&e.childLanes)!==0,r||(Yi(t,e,a,!1),r=(a&e.childLanes)!==0),s){if(r)return fm(t,e,a);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),X(Kt,Kt.current),r)break;return null;case 22:case 23:return e.lanes=0,im(t,e,a);case 24:kn(e,Zt,t.memoizedState.cache)}return mn(t,e,a)}function dm(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Jt=!0;else{if(!bu(t,a)&&(e.flags&128)===0)return Jt=!1,Cb(t,e,a);Jt=(t.flags&131072)!==0}else Jt=!1,vt&&(e.flags&1048576)!==0&&qd(e,Tl,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")Rs(r)?(t=ya(r,t),e.tag=1,e=om(null,e,r,t,a)):(e.tag=0,e=du(null,e,r,t,a));else{if(r!=null){if(s=r.$$typeof,s===K){e.tag=11,e=em(null,e,r,t,a);break t}else if(s===lt){e.tag=14,e=nm(null,e,r,t,a);break t}}throw e=Xe(r)||r,Error(o(306,e,""))}}return e;case 0:return du(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,s=ya(r,e.pendingProps),om(t,e,r,s,a);case 3:t:{if(Rt(e,e.stateNode.containerInfo),t===null)throw Error(o(387));r=e.pendingProps;var u=e.memoizedState;s=u.element,qs(t,e),Ji(e,r,null,a);var p=e.memoizedState;if(r=p.cache,kn(e,Zt,r),r!==u.cache&&Us(e,[Zt],a,!0),Fi(),r=p.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:p.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=sm(t,e,r,a);break t}else if(r!==s){s=we(Error(o(424)),e),qi(s),e=sm(t,e,r,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Vt=He(t.firstChild),se=e,vt=!0,fa=null,Ke=!0,a=Gh(e,null,r,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hi(),r===s){e=mn(t,e,a);break t}te(t,e,r,a)}e=e.child}return e;case 26:return ql(t,e),t===null?(a=gp(e.type,null,e.pendingProps,null))?e.memoizedState=a:vt||(a=e.type,t=e.pendingProps,r=ao(ot.current).createElement(a),r[ie]=e,r[ce]=t,ne(r,a,t),Ft(r),e.stateNode=r):e.memoizedState=gp(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Qo(e),t===null&&vt&&(r=e.stateNode=hp(e.type,e.pendingProps,ot.current),se=e,Ke=!0,s=Vt,Zn(e.type)?(Iu=s,Vt=He(r.firstChild)):Vt=s),te(t,e,e.pendingProps.children,a),ql(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&vt&&((s=r=Vt)&&(r=i1(r,e.type,e.pendingProps,Ke),r!==null?(e.stateNode=r,se=e,Vt=He(r.firstChild),Ke=!1,s=!0):s=!1),s||da(e)),Qo(e),s=e.type,u=e.pendingProps,p=t!==null?t.memoizedProps:null,r=u.children,Fu(s,u)?r=null:p!==null&&Fu(s,p)&&(e.flags|=32),e.memoizedState!==null&&(s=Qs(t,e,Tb,null,null,a),vr._currentValue=s),ql(t,e),te(t,e,r,a),e.child;case 6:return t===null&&vt&&((t=a=Vt)&&(a=r1(a,e.pendingProps,Ke),a!==null?(e.stateNode=a,se=e,Vt=null,t=!0):t=!1),t||da(e)),null;case 13:return um(t,e,a);case 4:return Rt(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ia(e,null,r,a):te(t,e,r,a),e.child;case 11:return em(t,e,e.type,e.pendingProps,a);case 7:return te(t,e,e.pendingProps,a),e.child;case 8:return te(t,e,e.pendingProps.children,a),e.child;case 12:return te(t,e,e.pendingProps.children,a),e.child;case 10:return r=e.pendingProps,kn(e,e.type,r.value),te(t,e,r.children,a),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,ma(e),s=re(s),r=r(s),e.flags|=1,te(t,e,r,a),e.child;case 14:return nm(t,e,e.type,e.pendingProps,a);case 15:return am(t,e,e.type,e.pendingProps,a);case 19:return fm(t,e,a);case 31:return r=e.pendingProps,a=e.mode,r={mode:r.mode,children:r.children},t===null?(a=Yl(r,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=on(t.child,r),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return im(t,e,a);case 24:return ma(e),r=re(Zt),t===null?(s=js(),s===null&&(s=Mt,u=Bs(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=a),s=u),e.memoizedState={parent:r,cache:s},Hs(e),kn(e,Zt,s)):((t.lanes&a)!==0&&(qs(t,e),Ji(e,null,null,a),Fi()),s=t.memoizedState,u=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),kn(e,Zt,r)):(r=u.cache,kn(e,Zt,r),r!==s.cache&&Us(e,[Zt],a,!0))),te(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function pn(t){t.flags|=4}function hm(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sp(e)){if(e=ze.current,e!==null&&((mt&4194048)===mt?Qe!==null:(mt&62914560)!==mt&&(mt&536870912)===0||e!==Qe))throw Ki=Ps,Jd;t.flags|=8192}}function Gl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Xf():536870912,t.lanes|=e,ai|=e)}function ar(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags&65011712,r|=s.flags&65011712,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)a|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function kb(t,e,a){var r=e.pendingProps;switch(_s(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return _t(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),fn(Zt),Mn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Pi(e)?pn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Xd())),_t(e),null;case 26:return a=e.memoizedState,t===null?(pn(e),a!==null?(_t(e),hm(e,a)):(_t(e),e.flags&=-16777217)):a?a!==t.memoizedState?(pn(e),_t(e),hm(e,a)):(_t(e),e.flags&=-16777217):(t.memoizedProps!==r&&pn(e),_t(e),e.flags&=-16777217),null;case 27:el(e),a=ot.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return _t(e),null}t=tt.current,Pi(e)?Yd(e):(t=hp(s,r,a),e.stateNode=t,pn(e))}return _t(e),null;case 5:if(el(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return _t(e),null}if(t=tt.current,Pi(e))Yd(e);else{switch(s=ao(ot.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(a,{is:r.is}):s.createElement(a)}}t[ie]=e,t[ce]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(ne(t,a,r),a){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&pn(e)}}return _t(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&pn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(t=ot.current,Pi(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,s=se,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[ie]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||lp(t.nodeValue,a)),t||da(e)}else t=ao(t).createTextNode(r),t[ie]=e,e.stateNode=t}return _t(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Pi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(o(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[ie]=e}else Hi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else s=Xd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),s=!0;if(!s)return e.flags&256?(hn(e),e):(hn(e),null)}if(hn(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=r!==null,t=t!==null&&t.memoizedState!==null,a){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),Gl(e,e.updateQueue),_t(e),null;case 4:return Mn(),t===null&&Gu(e.stateNode.containerInfo),_t(e),null;case 10:return fn(e.type),_t(e),null;case 19:if(Z(Kt),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,u=s.rendering,u===null)if(r)ar(s,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=jl(t),u!==null){for(e.flags|=128,ar(s,!1),t=u.updateQueue,e.updateQueue=t,Gl(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Hd(a,t),a=a.sibling;return X(Kt,Kt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>Kl&&(e.flags|=128,r=!0,ar(s,!1),e.lanes=4194304)}else{if(!r)if(t=jl(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Gl(e,t),ar(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!vt)return _t(e),null}else 2*Ze()-s.renderingStartTime>Kl&&a!==536870912&&(e.flags|=128,r=!0,ar(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,t=Kt.current,X(Kt,r?t&1|2:t&1),e):(_t(e),null);case 22:case 23:return hn(e),Zs(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),a=e.updateQueue,a!==null&&Gl(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&Z(pa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),fn(Zt),_t(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function _b(t,e){switch(_s(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fn(Zt),Mn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return el(e),null;case 13:if(hn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(Kt),null;case 4:return Mn(),null;case 10:return fn(e.type),null;case 22:case 23:return hn(e),Zs(),t!==null&&Z(pa),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return fn(Zt),null;case 25:return null;default:return null}}function mm(t,e){switch(_s(e),e.tag){case 3:fn(Zt),Mn();break;case 26:case 27:case 5:el(e);break;case 4:Mn();break;case 13:hn(e);break;case 19:Z(Kt);break;case 10:fn(e.type);break;case 22:case 23:hn(e),Zs(),t!==null&&Z(pa);break;case 24:fn(Zt)}}function ir(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var s=r.next;a=s;do{if((a.tag&t)===t){r=void 0;var u=a.create,p=a.inst;r=u(),p.destroy=r}a=a.next}while(a!==s)}}catch(v){Ot(e,e.return,v)}}function Ln(t,e,a){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&t)===t){var p=r.inst,v=p.destroy;if(v!==void 0){p.destroy=void 0,s=e;var S=a,C=v;try{C()}catch(V){Ot(s,S,V)}}}r=r.next}while(r!==u)}}catch(V){Ot(e,e.return,V)}}function pm(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{nh(e,a)}catch(r){Ot(t,t.return,r)}}}function gm(t,e,a){a.props=ya(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ot(t,e,r)}}function rr(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(s){Ot(t,e,s)}}function Fe(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(s){Ot(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(s){Ot(t,e,s)}else a.current=null}function ym(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(s){Ot(t,t.return,s)}}function xu(t,e,a){try{var r=t.stateNode;Ib(r,t.type,a,e),r[ce]=e}catch(s){Ot(t,t.return,s)}}function vm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Zn(t.type)||t.tag===4}function Su(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Zn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tu(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=no));else if(r!==4&&(r===27&&Zn(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(Tu(t,e,a),t=t.sibling;t!==null;)Tu(t,e,a),t=t.sibling}function Xl(t,e,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(r!==4&&(r===27&&Zn(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Xl(t,e,a),t=t.sibling;t!==null;)Xl(t,e,a),t=t.sibling}function bm(t){var e=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,s=e.attributes;s.length;)e.removeAttributeNode(s[0]);ne(e,r,a),e[ie]=t,e[ce]=a}catch(u){Ot(t,t.return,u)}}var gn=!1,jt=!1,Au=!1,xm=typeof WeakSet=="function"?WeakSet:Set,$t=null;function zb(t,e){if(t=t.containerInfo,Ku=uo,t=kd(t),Ss(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var p=0,v=-1,S=-1,C=0,V=0,j=t,_=null;e:for(;;){for(var z;j!==a||s!==0&&j.nodeType!==3||(v=p+s),j!==u||r!==0&&j.nodeType!==3||(S=p+r),j.nodeType===3&&(p+=j.nodeValue.length),(z=j.firstChild)!==null;)_=j,j=z;for(;;){if(j===t)break e;if(_===a&&++C===s&&(v=p),_===u&&++V===r&&(S=p),(z=j.nextSibling)!==null)break;j=_,_=j.parentNode}j=z}a=v===-1||S===-1?null:{start:v,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qu={focusedElem:t,selectionRange:a},uo=!1,$t=e;$t!==null;)if(e=$t,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,$t=t;else for(;$t!==null;){switch(e=$t,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=e,s=u.memoizedProps,u=u.memoizedState,r=a.stateNode;try{var it=ya(a.type,s,a.elementType===a.type);t=r.getSnapshotBeforeUpdate(it,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(et){Ot(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)$u(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$u(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,$t=t;break}$t=e.return}}function Sm(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:jn(t,a),r&4&&ir(5,a);break;case 1:if(jn(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(p){Ot(a,a.return,p)}else{var s=ya(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Ot(a,a.return,p)}}r&64&&pm(a),r&512&&rr(a,a.return);break;case 3:if(jn(t,a),r&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{nh(t,e)}catch(p){Ot(a,a.return,p)}}break;case 27:e===null&&r&4&&bm(a);case 26:case 5:jn(t,a),e===null&&r&4&&ym(a),r&512&&rr(a,a.return);break;case 12:jn(t,a);break;case 13:jn(t,a),r&4&&Em(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qb.bind(null,a),l1(t,a))));break;case 22:if(r=a.memoizedState!==null||gn,!r){e=e!==null&&e.memoizedState!==null||jt,s=gn;var u=jt;gn=r,(jt=e)&&!u?Pn(t,a,(a.subtreeFlags&8772)!==0):jn(t,a),gn=s,jt=u}break;case 30:break;default:jn(t,a)}}function Tm(t){var e=t.alternate;e!==null&&(t.alternate=null,Tm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ns(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var wt=null,he=!1;function yn(t,e,a){for(a=a.child;a!==null;)Am(t,e,a),a=a.sibling}function Am(t,e,a){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Di,a)}catch{}switch(a.tag){case 26:jt||Fe(a,e),yn(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:jt||Fe(a,e);var r=wt,s=he;Zn(a.type)&&(wt=a.stateNode,he=!1),yn(t,e,a),mr(a.stateNode),wt=r,he=s;break;case 5:jt||Fe(a,e);case 6:if(r=wt,s=he,wt=null,yn(t,e,a),wt=r,he=s,wt!==null)if(he)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(u){Ot(a,e,u)}else try{wt.removeChild(a.stateNode)}catch(u){Ot(a,e,u)}break;case 18:wt!==null&&(he?(t=wt,fp(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):fp(wt,a.stateNode));break;case 4:r=wt,s=he,wt=a.stateNode.containerInfo,he=!0,yn(t,e,a),wt=r,he=s;break;case 0:case 11:case 14:case 15:jt||Ln(2,a,e),jt||Ln(4,a,e),yn(t,e,a);break;case 1:jt||(Fe(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&gm(a,e,r)),yn(t,e,a);break;case 21:yn(t,e,a);break;case 22:jt=(r=jt)||a.memoizedState!==null,yn(t,e,a),jt=r;break;default:yn(t,e,a)}}function Em(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Ot(e,e.return,a)}}function Nb(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new xm),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new xm),e;default:throw Error(o(435,t.tag))}}function Eu(t,e){var a=Nb(t);e.forEach(function(r){var s=Yb.bind(null,t,r);a.has(r)||(a.add(r),r.then(s,s))})}function Se(t,e){var a=e.deletions;if(a!==null)for(var r=0;r<a.length;r++){var s=a[r],u=t,p=e,v=p;t:for(;v!==null;){switch(v.tag){case 27:if(Zn(v.type)){wt=v.stateNode,he=!1;break t}break;case 5:wt=v.stateNode,he=!1;break t;case 3:case 4:wt=v.stateNode.containerInfo,he=!0;break t}v=v.return}if(wt===null)throw Error(o(160));Am(u,p,s),wt=null,he=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Om(e,t),e=e.sibling}var Pe=null;function Om(t,e){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Se(e,t),Te(t),r&4&&(Ln(3,t,t.return),ir(3,t),Ln(5,t,t.return));break;case 1:Se(e,t),Te(t),r&512&&(jt||a===null||Fe(a,a.return)),r&64&&gn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var s=Pe;if(Se(e,t),Te(t),r&512&&(jt||a===null||Fe(a,a.return)),r&4){var u=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":u=s.getElementsByTagName("title")[0],(!u||u[wi]||u[ie]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(r),s.head.insertBefore(u,s.querySelector("head > title"))),ne(u,r,a),u[ie]=t,Ft(u),r=u;break t;case"link":var p=bp("link","href",s).get(r+(a.href||""));if(p){for(var v=0;v<p.length;v++)if(u=p[v],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(v,1);break e}}u=s.createElement(r),ne(u,r,a),s.head.appendChild(u);break;case"meta":if(p=bp("meta","content",s).get(r+(a.content||""))){for(v=0;v<p.length;v++)if(u=p[v],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(v,1);break e}}u=s.createElement(r),ne(u,r,a),s.head.appendChild(u);break;default:throw Error(o(468,r))}u[ie]=t,Ft(u),r=u}t.stateNode=r}else xp(s,t.type,t.stateNode);else t.stateNode=vp(s,r,t.memoizedProps);else u!==r?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,r===null?xp(s,t.type,t.stateNode):vp(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&xu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Se(e,t),Te(t),r&512&&(jt||a===null||Fe(a,a.return)),a!==null&&r&4&&xu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Se(e,t),Te(t),r&512&&(jt||a===null||Fe(a,a.return)),t.flags&32){s=t.stateNode;try{Va(s,"")}catch(z){Ot(t,t.return,z)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,xu(t,s,a!==null?a.memoizedProps:s)),r&1024&&(Au=!0);break;case 6:if(Se(e,t),Te(t),r&4){if(t.stateNode===null)throw Error(o(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(z){Ot(t,t.return,z)}}break;case 3:if(lo=null,s=Pe,Pe=io(e.containerInfo),Se(e,t),Pe=s,Te(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(e.containerInfo)}catch(z){Ot(t,t.return,z)}Au&&(Au=!1,Dm(t));break;case 4:r=Pe,Pe=io(t.stateNode.containerInfo),Se(e,t),Te(t),Pe=r;break;case 12:Se(e,t),Te(t);break;case 13:Se(e,t),Te(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cu=Ze()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 22:s=t.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,C=gn,V=jt;if(gn=C||s,jt=V||S,Se(e,t),jt=V,gn=C,Te(t),r&8192)t:for(e=t.stateNode,e._visibility=s?e._visibility&-2:e._visibility|1,s&&(a===null||S||gn||jt||va(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){S=a=e;try{if(u=S.stateNode,s)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{v=S.stateNode;var j=S.memoizedProps.style,_=j!=null&&j.hasOwnProperty("display")?j.display:null;v.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){Ot(S,S.return,z)}}}else if(e.tag===6){if(a===null){S=e;try{S.stateNode.nodeValue=s?"":S.memoizedProps}catch(z){Ot(S,S.return,z)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Eu(t,a))));break;case 19:Se(e,t),Te(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Eu(t,r)));break;case 30:break;case 21:break;default:Se(e,t),Te(t)}}function Te(t){var e=t.flags;if(e&2){try{for(var a,r=t.return;r!==null;){if(vm(r)){a=r;break}r=r.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var s=a.stateNode,u=Su(t);Xl(t,u,s);break;case 5:var p=a.stateNode;a.flags&32&&(Va(p,""),a.flags&=-33);var v=Su(t);Xl(t,v,p);break;case 3:case 4:var S=a.stateNode.containerInfo,C=Su(t);Tu(t,C,S);break;default:throw Error(o(161))}}catch(V){Ot(t,t.return,V)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Dm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function jn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Sm(t,e.alternate,e),e=e.sibling}function va(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ln(4,e,e.return),va(e);break;case 1:Fe(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&gm(e,e.return,a),va(e);break;case 27:mr(e.stateNode);case 26:case 5:Fe(e,e.return),va(e);break;case 22:e.memoizedState===null&&va(e);break;case 30:va(e);break;default:va(e)}t=t.sibling}}function Pn(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,u=e,p=u.flags;switch(u.tag){case 0:case 11:case 15:Pn(s,u,a),ir(4,u);break;case 1:if(Pn(s,u,a),r=u,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(C){Ot(r,r.return,C)}if(r=u,s=r.updateQueue,s!==null){var v=r.stateNode;try{var S=s.shared.hiddenCallbacks;if(S!==null)for(s.shared.hiddenCallbacks=null,s=0;s<S.length;s++)eh(S[s],v)}catch(C){Ot(r,r.return,C)}}a&&p&64&&pm(u),rr(u,u.return);break;case 27:bm(u);case 26:case 5:Pn(s,u,a),a&&r===null&&p&4&&ym(u),rr(u,u.return);break;case 12:Pn(s,u,a);break;case 13:Pn(s,u,a),a&&p&4&&Em(s,u);break;case 22:u.memoizedState===null&&Pn(s,u,a),rr(u,u.return);break;case 30:break;default:Pn(s,u,a)}e=e.sibling}}function Ou(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gi(a))}function Du(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gi(t))}function Je(t,e,a,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mm(t,e,a,r),e=e.sibling}function Mm(t,e,a,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Je(t,e,a,r),s&2048&&ir(9,e);break;case 1:Je(t,e,a,r);break;case 3:Je(t,e,a,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Gi(t)));break;case 12:if(s&2048){Je(t,e,a,r),t=e.stateNode;try{var u=e.memoizedProps,p=u.id,v=u.onPostCommit;typeof v=="function"&&v(p,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(S){Ot(e,e.return,S)}}else Je(t,e,a,r);break;case 13:Je(t,e,a,r);break;case 23:break;case 22:u=e.stateNode,p=e.alternate,e.memoizedState!==null?u._visibility&2?Je(t,e,a,r):lr(t,e):u._visibility&2?Je(t,e,a,r):(u._visibility|=2,ti(t,e,a,r,(e.subtreeFlags&10256)!==0)),s&2048&&Ou(p,e);break;case 24:Je(t,e,a,r),s&2048&&Du(e.alternate,e);break;default:Je(t,e,a,r)}}function ti(t,e,a,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,p=e,v=a,S=r,C=p.flags;switch(p.tag){case 0:case 11:case 15:ti(u,p,v,S,s),ir(8,p);break;case 23:break;case 22:var V=p.stateNode;p.memoizedState!==null?V._visibility&2?ti(u,p,v,S,s):lr(u,p):(V._visibility|=2,ti(u,p,v,S,s)),s&&C&2048&&Ou(p.alternate,p);break;case 24:ti(u,p,v,S,s),s&&C&2048&&Du(p.alternate,p);break;default:ti(u,p,v,S,s)}e=e.sibling}}function lr(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,s=r.flags;switch(r.tag){case 22:lr(a,r),s&2048&&Ou(r.alternate,r);break;case 24:lr(a,r),s&2048&&Du(r.alternate,r);break;default:lr(a,r)}e=e.sibling}}var or=8192;function ei(t){if(t.subtreeFlags&or)for(t=t.child;t!==null;)Rm(t),t=t.sibling}function Rm(t){switch(t.tag){case 26:ei(t),t.flags&or&&t.memoizedState!==null&&b1(Pe,t.memoizedState,t.memoizedProps);break;case 5:ei(t);break;case 3:case 4:var e=Pe;Pe=io(t.stateNode.containerInfo),ei(t),Pe=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=or,or=16777216,ei(t),or=e):ei(t));break;default:ei(t)}}function wm(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function sr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];$t=r,km(r,t)}wm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Cm(t),t=t.sibling}function Cm(t){switch(t.tag){case 0:case 11:case 15:sr(t),t.flags&2048&&Ln(9,t,t.return);break;case 3:sr(t);break;case 12:sr(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Zl(t)):sr(t);break;default:sr(t)}}function Zl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];$t=r,km(r,t)}wm(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ln(8,e,e.return),Zl(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(e));break;default:Zl(e)}t=t.sibling}}function km(t,e){for(;$t!==null;){var a=$t;switch(a.tag){case 0:case 11:case 15:Ln(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Gi(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,$t=r;else t:for(a=t;$t!==null;){r=$t;var s=r.sibling,u=r.return;if(Tm(r),r===a){$t=null;break t}if(s!==null){s.return=u,$t=s;break t}$t=u}}}var Vb={getCacheForType:function(t){var e=re(Zt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Ub=typeof WeakMap=="function"?WeakMap:Map,bt=0,Mt=null,ft=null,mt=0,xt=0,Ae=null,Hn=!1,ni=!1,Mu=!1,vn=0,Ut=0,qn=0,ba=0,Ru=0,Ne=0,ai=0,ur=null,me=null,wu=!1,Cu=0,Kl=1/0,Ql=null,Yn=null,ee=0,Gn=null,ii=null,ri=0,ku=0,_u=null,_m=null,cr=0,zu=null;function Ee(){if((bt&2)!==0&&mt!==0)return mt&-mt;if(U.T!==null){var t=Za;return t!==0?t:Pu()}return Qf()}function zm(){Ne===0&&(Ne=(mt&536870912)===0||vt?Gf():536870912);var t=ze.current;return t!==null&&(t.flags|=32),Ne}function Oe(t,e,a){(t===Mt&&(xt===2||xt===9)||t.cancelPendingCommit!==null)&&(li(t,0),Xn(t,mt,Ne,!1)),Ri(t,a),((bt&2)===0||t!==Mt)&&(t===Mt&&((bt&2)===0&&(ba|=a),Ut===4&&Xn(t,mt,Ne,!1)),$e(t))}function Nm(t,e,a){if((bt&6)!==0)throw Error(o(327));var r=!a&&(e&124)===0&&(e&t.expiredLanes)===0||Mi(t,e),s=r?jb(t,e):Uu(t,e,!0),u=r;do{if(s===0){ni&&!r&&Xn(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!Bb(a)){s=Uu(t,e,!1),u=!1;continue}if(s===2){if(u=e,t.errorRecoveryDisabledLanes&u)var p=0;else p=t.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){e=p;t:{var v=t;s=ur;var S=v.current.memoizedState.isDehydrated;if(S&&(li(v,p).flags|=256),p=Uu(v,p,!1),p!==2){if(Mu&&!S){v.errorRecoveryDisabledLanes|=u,ba|=u,s=4;break t}u=me,me=s,u!==null&&(me===null?me=u:me.push.apply(me,u))}s=p}if(u=!1,s!==2)continue}}if(s===1){li(t,0),Xn(t,e,0,!0);break}t:{switch(r=t,u=s,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Xn(r,e,Ne,!Hn);break t;case 2:me=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(s=Cu+300-Ze(),10<s)){if(Xn(r,e,Ne,!Hn),rl(r,0,!0)!==0)break t;r.timeoutHandle=up(Vm.bind(null,r,a,me,Ql,wu,e,Ne,ba,ai,Hn,u,2,-0,0),s);break t}Vm(r,a,me,Ql,wu,e,Ne,ba,ai,Hn,u,0,-0,0)}}break}while(!0);$e(t)}function Vm(t,e,a,r,s,u,p,v,S,C,V,j,_,z){if(t.timeoutHandle=-1,j=e.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(yr={stylesheets:null,count:0,unsuspend:v1},Rm(e),j=x1(),j!==null)){t.cancelPendingCommit=j(qm.bind(null,t,e,u,a,r,s,p,v,S,V,1,_,z)),Xn(t,u,p,!C);return}qm(t,e,u,a,r,s,p,v,S)}function Bb(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var s=a[r],u=s.getSnapshot;s=s.value;try{if(!be(u(),s))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e,a,r){e&=~Ru,e&=~ba,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var u=31-ve(s),p=1<<u;r[u]=-1,s&=~p}a!==0&&Zf(t,a,e)}function Fl(){return(bt&6)===0?(fr(0),!1):!0}function Nu(){if(ft!==null){if(xt===0)var t=ft.return;else t=ft,cn=ha=null,$s(t),Wa=null,er=0,t=ft;for(;t!==null;)mm(t.alternate,t),t=t.return;ft=null}}function li(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,e1(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Nu(),Mt=t,ft=a=on(t.current,null),mt=e,xt=0,Ae=null,Hn=!1,ni=Mi(t,e),Mu=!1,ai=Ne=Ru=ba=qn=Ut=0,me=ur=null,wu=!1,(e&8)!==0&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-ve(r),u=1<<s;e|=t[s],r&=~u}return vn=e,yl(),a}function Um(t,e){ut=null,U.H=Ul,e===Zi||e===Dl?(e=Id(),xt=3):e===Jd?(e=Id(),xt=4):xt=e===tm?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ae=e,ft===null&&(Ut=1,Hl(t,we(e,t.current)))}function Bm(){var t=U.H;return U.H=Ul,t===null?Ul:t}function Lm(){var t=U.A;return U.A=Vb,t}function Vu(){Ut=4,Hn||(mt&4194048)!==mt&&ze.current!==null||(ni=!0),(qn&134217727)===0&&(ba&134217727)===0||Mt===null||Xn(Mt,mt,Ne,!1)}function Uu(t,e,a){var r=bt;bt|=2;var s=Bm(),u=Lm();(Mt!==t||mt!==e)&&(Ql=null,li(t,e)),e=!1;var p=Ut;t:do try{if(xt!==0&&ft!==null){var v=ft,S=Ae;switch(xt){case 8:Nu(),p=6;break t;case 3:case 2:case 9:case 6:ze.current===null&&(e=!0);var C=xt;if(xt=0,Ae=null,oi(t,v,S,C),a&&ni){p=0;break t}break;default:C=xt,xt=0,Ae=null,oi(t,v,S,C)}}Lb(),p=Ut;break}catch(V){Um(t,V)}while(!0);return e&&t.shellSuspendCounter++,cn=ha=null,bt=r,U.H=s,U.A=u,ft===null&&(Mt=null,mt=0,yl()),p}function Lb(){for(;ft!==null;)jm(ft)}function jb(t,e){var a=bt;bt|=2;var r=Bm(),s=Lm();Mt!==t||mt!==e?(Ql=null,Kl=Ze()+500,li(t,e)):ni=Mi(t,e);t:do try{if(xt!==0&&ft!==null){e=ft;var u=Ae;e:switch(xt){case 1:xt=0,Ae=null,oi(t,e,u,1);break;case 2:case 9:if($d(u)){xt=0,Ae=null,Pm(e);break}e=function(){xt!==2&&xt!==9||Mt!==t||(xt=7),$e(t)},u.then(e,e);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:$d(u)?(xt=0,Ae=null,Pm(e)):(xt=0,Ae=null,oi(t,e,u,7));break;case 5:var p=null;switch(ft.tag){case 26:p=ft.memoizedState;case 5:case 27:var v=ft;if(!p||Sp(p)){xt=0,Ae=null;var S=v.sibling;if(S!==null)ft=S;else{var C=v.return;C!==null?(ft=C,Jl(C)):ft=null}break e}}xt=0,Ae=null,oi(t,e,u,5);break;case 6:xt=0,Ae=null,oi(t,e,u,6);break;case 8:Nu(),Ut=6;break t;default:throw Error(o(462))}}Pb();break}catch(V){Um(t,V)}while(!0);return cn=ha=null,U.H=r,U.A=s,bt=a,ft!==null?0:(Mt=null,mt=0,yl(),Ut)}function Pb(){for(;ft!==null&&!sv();)jm(ft)}function jm(t){var e=dm(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Jl(t):ft=e}function Pm(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=lm(a,e,e.pendingProps,e.type,void 0,mt);break;case 11:e=lm(a,e,e.pendingProps,e.type.render,e.ref,mt);break;case 5:$s(e);default:mm(a,e),e=ft=Hd(e,vn),e=dm(a,e,vn)}t.memoizedProps=t.pendingProps,e===null?Jl(t):ft=e}function oi(t,e,a,r){cn=ha=null,$s(e),Wa=null,er=0;var s=e.return;try{if(wb(t,s,e,a,mt)){Ut=1,Hl(t,we(a,t.current)),ft=null;return}}catch(u){if(s!==null)throw ft=s,u;Ut=1,Hl(t,we(a,t.current)),ft=null;return}e.flags&32768?(vt||r===1?t=!0:ni||(mt&536870912)!==0?t=!1:(Hn=t=!0,(r===2||r===9||r===3||r===6)&&(r=ze.current,r!==null&&r.tag===13&&(r.flags|=16384))),Hm(e,t)):Jl(e)}function Jl(t){var e=t;do{if((e.flags&32768)!==0){Hm(e,Hn);return}t=e.return;var a=kb(e.alternate,e,vn);if(a!==null){ft=a;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);Ut===0&&(Ut=5)}function Hm(t,e){do{var a=_b(t.alternate,t);if(a!==null){a.flags&=32767,ft=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){ft=t;return}ft=t=a}while(t!==null);Ut=6,ft=null}function qm(t,e,a,r,s,u,p,v,S){t.cancelPendingCommit=null;do $l();while(ee!==0);if((bt&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(u=e.lanes|e.childLanes,u|=Ds,vv(t,a,u,p,v,S),t===Mt&&(ft=Mt=null,mt=0),ii=e,Gn=t,ri=a,ku=u,_u=s,_m=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Gb(nl,function(){return Km(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=U.T,U.T=null,s=Y.p,Y.p=2,p=bt,bt|=4;try{zb(t,e,a)}finally{bt=p,Y.p=s,U.T=r}}ee=1,Ym(),Gm(),Xm()}}function Ym(){if(ee===1){ee=0;var t=Gn,e=ii,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var r=Y.p;Y.p=2;var s=bt;bt|=4;try{Om(e,t);var u=Qu,p=kd(t.containerInfo),v=u.focusedElem,S=u.selectionRange;if(p!==v&&v&&v.ownerDocument&&Cd(v.ownerDocument.documentElement,v)){if(S!==null&&Ss(v)){var C=S.start,V=S.end;if(V===void 0&&(V=C),"selectionStart"in v)v.selectionStart=C,v.selectionEnd=Math.min(V,v.value.length);else{var j=v.ownerDocument||document,_=j&&j.defaultView||window;if(_.getSelection){var z=_.getSelection(),it=v.textContent.length,et=Math.min(S.start,it),Et=S.end===void 0?et:Math.min(S.end,it);!z.extend&&et>Et&&(p=Et,Et=et,et=p);var M=wd(v,et),A=wd(v,Et);if(M&&A&&(z.rangeCount!==1||z.anchorNode!==M.node||z.anchorOffset!==M.offset||z.focusNode!==A.node||z.focusOffset!==A.offset)){var R=j.createRange();R.setStart(M.node,M.offset),z.removeAllRanges(),et>Et?(z.addRange(R),z.extend(A.node,A.offset)):(R.setEnd(A.node,A.offset),z.addRange(R))}}}}for(j=[],z=v;z=z.parentNode;)z.nodeType===1&&j.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<j.length;v++){var L=j[v];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}uo=!!Ku,Qu=Ku=null}finally{bt=s,Y.p=r,U.T=a}}t.current=e,ee=2}}function Gm(){if(ee===2){ee=0;var t=Gn,e=ii,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var r=Y.p;Y.p=2;var s=bt;bt|=4;try{Sm(t,e.alternate,e)}finally{bt=s,Y.p=r,U.T=a}}ee=3}}function Xm(){if(ee===4||ee===3){ee=0,uv();var t=Gn,e=ii,a=ri,r=_m;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?ee=5:(ee=0,ii=Gn=null,Zm(t,t.pendingLanes));var s=t.pendingLanes;if(s===0&&(Yn=null),ts(a),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Di,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=U.T,s=Y.p,Y.p=2,U.T=null;try{for(var u=t.onRecoverableError,p=0;p<r.length;p++){var v=r[p];u(v.value,{componentStack:v.stack})}}finally{U.T=e,Y.p=s}}(ri&3)!==0&&$l(),$e(t),s=t.pendingLanes,(a&4194090)!==0&&(s&42)!==0?t===zu?cr++:(cr=0,zu=t):cr=0,fr(0)}}function Zm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Gi(e)))}function $l(t){return Ym(),Gm(),Xm(),Km()}function Km(){if(ee!==5)return!1;var t=Gn,e=ku;ku=0;var a=ts(ri),r=U.T,s=Y.p;try{Y.p=32>a?32:a,U.T=null,a=_u,_u=null;var u=Gn,p=ri;if(ee=0,ii=Gn=null,ri=0,(bt&6)!==0)throw Error(o(331));var v=bt;if(bt|=4,Cm(u.current),Mm(u,u.current,p,a),bt=v,fr(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Di,u)}catch{}return!0}finally{Y.p=s,U.T=r,Zm(t,e)}}function Qm(t,e,a){e=we(a,e),e=fu(t.stateNode,e,2),t=Nn(t,e,2),t!==null&&(Ri(t,2),$e(t))}function Ot(t,e,a){if(t.tag===3)Qm(t,t,a);else for(;e!==null;){if(e.tag===3){Qm(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=we(a,t),a=Wh(2),r=Nn(e,a,2),r!==null&&(Ih(a,r,e,t),Ri(r,2),$e(r));break}}e=e.return}}function Bu(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Ub;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(a)||(Mu=!0,s.add(a),t=Hb.bind(null,t,e,a),e.then(t,t))}function Hb(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Mt===t&&(mt&a)===a&&(Ut===4||Ut===3&&(mt&62914560)===mt&&300>Ze()-Cu?(bt&2)===0&&li(t,0):Ru|=a,ai===mt&&(ai=0)),$e(t)}function Fm(t,e){e===0&&(e=Xf()),t=qa(t,e),t!==null&&(Ri(t,e),$e(t))}function qb(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),Fm(t,a)}function Yb(t,e){var a=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(a=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),Fm(t,a)}function Gb(t,e){return Jo(t,e)}var Wl=null,si=null,Lu=!1,Il=!1,ju=!1,xa=0;function $e(t){t!==si&&t.next===null&&(si===null?Wl=si=t:si=si.next=t),Il=!0,Lu||(Lu=!0,Zb())}function fr(t,e){if(!ju&&Il){ju=!0;do for(var a=!1,r=Wl;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var u=0;else{var p=r.suspendedLanes,v=r.pingedLanes;u=(1<<31-ve(42|t)+1)-1,u&=s&~(p&~v),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Im(r,u))}else u=mt,u=rl(r,r===Mt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Mi(r,u)||(a=!0,Im(r,u));r=r.next}while(a);ju=!1}}function Xb(){Jm()}function Jm(){Il=Lu=!1;var t=0;xa!==0&&(t1()&&(t=xa),xa=0);for(var e=Ze(),a=null,r=Wl;r!==null;){var s=r.next,u=$m(r,e);u===0?(r.next=null,a===null?Wl=s:a.next=s,s===null&&(si=a)):(a=r,(t!==0||(u&3)!==0)&&(Il=!0)),r=s}fr(t)}function $m(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var p=31-ve(u),v=1<<p,S=s[p];S===-1?((v&a)===0||(v&r)!==0)&&(s[p]=yv(v,e)):S<=e&&(t.expiredLanes|=v),u&=~v}if(e=Mt,a=mt,a=rl(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===e&&(xt===2||xt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$o(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Mi(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&$o(r),ts(a)){case 2:case 8:a=qf;break;case 32:a=nl;break;case 268435456:a=Yf;break;default:a=nl}return r=Wm.bind(null,t),a=Jo(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&$o(r),t.callbackPriority=2,t.callbackNode=null,2}function Wm(t,e){if(ee!==0&&ee!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if($l()&&t.callbackNode!==a)return null;var r=mt;return r=rl(t,t===Mt?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Nm(t,r,e),$m(t,Ze()),t.callbackNode!=null&&t.callbackNode===a?Wm.bind(null,t):null)}function Im(t,e){if($l())return null;Nm(t,e,!0)}function Zb(){n1(function(){(bt&6)!==0?Jo(Hf,Xb):Jm()})}function Pu(){return xa===0&&(xa=Gf()),xa}function tp(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:cl(""+t)}function ep(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Kb(t,e,a,r,s){if(e==="submit"&&a&&a.stateNode===s){var u=tp((s[ce]||null).action),p=r.submitter;p&&(e=(e=p[ce]||null)?tp(e.formAction):p.getAttribute("formAction"),e!==null&&(u=e,p=null));var v=new ml("action","action",null,r,s);t.push({event:v,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xa!==0){var S=p?ep(s,p):new FormData(s);lu(a,{pending:!0,data:S,method:s.method,action:u},null,S)}}else typeof u=="function"&&(v.preventDefault(),S=p?ep(s,p):new FormData(s),lu(a,{pending:!0,data:S,method:s.method,action:u},u,S))},currentTarget:s}]})}}for(var Hu=0;Hu<Os.length;Hu++){var qu=Os[Hu],Qb=qu.toLowerCase(),Fb=qu[0].toUpperCase()+qu.slice(1);je(Qb,"on"+Fb)}je(Nd,"onAnimationEnd"),je(Vd,"onAnimationIteration"),je(Ud,"onAnimationStart"),je("dblclick","onDoubleClick"),je("focusin","onFocus"),je("focusout","onBlur"),je(db,"onTransitionRun"),je(hb,"onTransitionStart"),je(mb,"onTransitionCancel"),je(Bd,"onTransitionEnd"),_a("onMouseEnter",["mouseout","mouseover"]),_a("onMouseLeave",["mouseout","mouseover"]),_a("onPointerEnter",["pointerout","pointerover"]),_a("onPointerLeave",["pointerout","pointerover"]),ia("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ia("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ia("onBeforeInput",["compositionend","keypress","textInput","paste"]),ia("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ia("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dr));function np(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],s=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var p=r.length-1;0<=p;p--){var v=r[p],S=v.instance,C=v.currentTarget;if(v=v.listener,S!==u&&s.isPropagationStopped())break t;u=v,s.currentTarget=C;try{u(s)}catch(V){Pl(V)}s.currentTarget=null,u=S}else for(p=0;p<r.length;p++){if(v=r[p],S=v.instance,C=v.currentTarget,v=v.listener,S!==u&&s.isPropagationStopped())break t;u=v,s.currentTarget=C;try{u(s)}catch(V){Pl(V)}s.currentTarget=null,u=S}}}}function dt(t,e){var a=e[es];a===void 0&&(a=e[es]=new Set);var r=t+"__bubble";a.has(r)||(ap(e,t,2,!1),a.add(r))}function Yu(t,e,a){var r=0;e&&(r|=4),ap(a,t,r,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function Gu(t){if(!t[to]){t[to]=!0,Jf.forEach(function(a){a!=="selectionchange"&&(Jb.has(a)||Yu(a,!1,t),Yu(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,Yu("selectionchange",!1,e))}}function ap(t,e,a,r){switch(Mp(e)){case 2:var s=A1;break;case 8:s=E1;break;default:s=ic}a=s.bind(null,e,a,t),s=void 0,!ds||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,a,{capture:!0,passive:s}):t.addEventListener(e,a,!0):s!==void 0?t.addEventListener(e,a,{passive:s}):t.addEventListener(e,a,!1)}function Xu(t,e,a,r,s){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var p=r.tag;if(p===3||p===4){var v=r.stateNode.containerInfo;if(v===s)break;if(p===4)for(p=r.return;p!==null;){var S=p.tag;if((S===3||S===4)&&p.stateNode.containerInfo===s)return;p=p.return}for(;v!==null;){if(p=wa(v),p===null)return;if(S=p.tag,S===5||S===6||S===26||S===27){r=u=p;continue t}v=v.parentNode}}r=r.return}cd(function(){var C=u,V=cs(a),j=[];t:{var _=Ld.get(t);if(_!==void 0){var z=ml,it=t;switch(t){case"keypress":if(dl(a)===0)break t;case"keydown":case"keyup":z=Gv;break;case"focusin":it="focus",z=gs;break;case"focusout":it="blur",z=gs;break;case"beforeblur":case"afterblur":z=gs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=_v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Kv;break;case Nd:case Vd:case Ud:z=Vv;break;case Bd:z=Fv;break;case"scroll":case"scrollend":z=Cv;break;case"wheel":z=$v;break;case"copy":case"cut":case"paste":z=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=pd;break;case"toggle":case"beforetoggle":z=Iv}var et=(e&4)!==0,Et=!et&&(t==="scroll"||t==="scrollend"),M=et?_!==null?_+"Capture":null:_;et=[];for(var A=C,R;A!==null;){var L=A;if(R=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||R===null||M===null||(L=ki(A,M),L!=null&&et.push(hr(A,L,R))),Et)break;A=A.return}0<et.length&&(_=new z(_,it,null,a,V),j.push({event:_,listeners:et}))}}if((e&7)===0){t:{if(_=t==="mouseover"||t==="pointerover",z=t==="mouseout"||t==="pointerout",_&&a!==us&&(it=a.relatedTarget||a.fromElement)&&(wa(it)||it[Ra]))break t;if((z||_)&&(_=V.window===V?V:(_=V.ownerDocument)?_.defaultView||_.parentWindow:window,z?(it=a.relatedTarget||a.toElement,z=C,it=it?wa(it):null,it!==null&&(Et=f(it),et=it.tag,it!==Et||et!==5&&et!==27&&et!==6)&&(it=null)):(z=null,it=C),z!==it)){if(et=hd,L="onMouseLeave",M="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(et=pd,L="onPointerLeave",M="onPointerEnter",A="pointer"),Et=z==null?_:Ci(z),R=it==null?_:Ci(it),_=new et(L,A+"leave",z,a,V),_.target=Et,_.relatedTarget=R,L=null,wa(V)===C&&(et=new et(M,A+"enter",it,a,V),et.target=R,et.relatedTarget=Et,L=et),Et=L,z&&it)e:{for(et=z,M=it,A=0,R=et;R;R=ui(R))A++;for(R=0,L=M;L;L=ui(L))R++;for(;0<A-R;)et=ui(et),A--;for(;0<R-A;)M=ui(M),R--;for(;A--;){if(et===M||M!==null&&et===M.alternate)break e;et=ui(et),M=ui(M)}et=null}else et=null;z!==null&&ip(j,_,z,et,!1),it!==null&&Et!==null&&ip(j,Et,it,et,!0)}}t:{if(_=C?Ci(C):window,z=_.nodeName&&_.nodeName.toLowerCase(),z==="select"||z==="input"&&_.type==="file")var Q=Ad;else if(Sd(_))if(Ed)Q=ub;else{Q=ob;var ct=lb}else z=_.nodeName,!z||z.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?C&&ss(C.elementType)&&(Q=Ad):Q=sb;if(Q&&(Q=Q(t,C))){Td(j,Q,a,V);break t}ct&&ct(t,_,C),t==="focusout"&&C&&_.type==="number"&&C.memoizedProps.value!=null&&os(_,"number",_.value)}switch(ct=C?Ci(C):window,t){case"focusin":(Sd(ct)||ct.contentEditable==="true")&&(ja=ct,Ts=C,ji=null);break;case"focusout":ji=Ts=ja=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,_d(j,a,V);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":_d(j,a,V)}var W;if(vs)t:{switch(t){case"compositionstart":var nt="onCompositionStart";break t;case"compositionend":nt="onCompositionEnd";break t;case"compositionupdate":nt="onCompositionUpdate";break t}nt=void 0}else La?bd(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(gd&&a.locale!=="ko"&&(La||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&La&&(W=fd()):(Cn=V,hs="value"in Cn?Cn.value:Cn.textContent,La=!0)),ct=eo(C,nt),0<ct.length&&(nt=new md(nt,t,null,a,V),j.push({event:nt,listeners:ct}),W?nt.data=W:(W=xd(a),W!==null&&(nt.data=W)))),(W=eb?nb(t,a):ab(t,a))&&(nt=eo(C,"onBeforeInput"),0<nt.length&&(ct=new md("onBeforeInput","beforeinput",null,a,V),j.push({event:ct,listeners:nt}),ct.data=W)),Kb(j,t,C,a,V)}np(j,e)})}function hr(t,e,a){return{instance:t,listener:e,currentTarget:a}}function eo(t,e){for(var a=e+"Capture",r=[];t!==null;){var s=t,u=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=ki(t,a),s!=null&&r.unshift(hr(t,s,u)),s=ki(t,e),s!=null&&r.push(hr(t,s,u))),t.tag===3)return r;t=t.return}return[]}function ui(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ip(t,e,a,r,s){for(var u=e._reactName,p=[];a!==null&&a!==r;){var v=a,S=v.alternate,C=v.stateNode;if(v=v.tag,S!==null&&S===r)break;v!==5&&v!==26&&v!==27||C===null||(S=C,s?(C=ki(a,u),C!=null&&p.unshift(hr(a,C,S))):s||(C=ki(a,u),C!=null&&p.push(hr(a,C,S)))),a=a.return}p.length!==0&&t.push({event:e,listeners:p})}var $b=/\r\n?/g,Wb=/\u0000|\uFFFD/g;function rp(t){return(typeof t=="string"?t:""+t).replace($b,`
`).replace(Wb,"")}function lp(t,e){return e=rp(e),rp(t)===e}function no(){}function At(t,e,a,r,s,u){switch(a){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Va(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Va(t,""+r);break;case"className":ol(t,"class",r);break;case"tabIndex":ol(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":ol(t,a,r);break;case"style":sd(t,r,u);break;case"data":if(e!=="object"){ol(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cl(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&At(t,e,"name",s.name,s,null),At(t,e,"formEncType",s.formEncType,s,null),At(t,e,"formMethod",s.formMethod,s,null),At(t,e,"formTarget",s.formTarget,s,null)):(At(t,e,"encType",s.encType,s,null),At(t,e,"method",s.method,s,null),At(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=cl(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=no);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=cl(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":dt("beforetoggle",t),dt("toggle",t),ll(t,"popover",r);break;case"xlinkActuate":rn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ll(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rv.get(a)||a,ll(t,a,r))}}function Zu(t,e,a,r,s,u){switch(a){case"style":sd(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(a=r.__html,a!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Va(t,r):(typeof r=="number"||typeof r=="bigint")&&Va(t,""+r);break;case"onScroll":r!=null&&dt("scroll",t);break;case"onScrollEnd":r!=null&&dt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=no);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$f.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(s=a.endsWith("Capture"),e=a.slice(2,s?a.length-7:void 0),u=t[ce]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(e,u,s),typeof r=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,r,s);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ll(t,a,r)}}}function ne(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":dt("error",t),dt("load",t);var r=!1,s=!1,u;for(u in a)if(a.hasOwnProperty(u)){var p=a[u];if(p!=null)switch(u){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:At(t,e,u,p,a,null)}}s&&At(t,e,"srcSet",a.srcSet,a,null),r&&At(t,e,"src",a.src,a,null);return;case"input":dt("invalid",t);var v=u=p=s=null,S=null,C=null;for(r in a)if(a.hasOwnProperty(r)){var V=a[r];if(V!=null)switch(r){case"name":s=V;break;case"type":p=V;break;case"checked":S=V;break;case"defaultChecked":C=V;break;case"value":u=V;break;case"defaultValue":v=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,e));break;default:At(t,e,r,V,a,null)}}id(t,u,v,S,C,p,s,!1),sl(t);return;case"select":dt("invalid",t),r=p=u=null;for(s in a)if(a.hasOwnProperty(s)&&(v=a[s],v!=null))switch(s){case"value":u=v;break;case"defaultValue":p=v;break;case"multiple":r=v;default:At(t,e,s,v,a,null)}e=u,a=p,t.multiple=!!r,e!=null?Na(t,!!r,e,!1):a!=null&&Na(t,!!r,a,!0);return;case"textarea":dt("invalid",t),u=s=r=null;for(p in a)if(a.hasOwnProperty(p)&&(v=a[p],v!=null))switch(p){case"value":r=v;break;case"defaultValue":s=v;break;case"children":u=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:At(t,e,p,v,a,null)}ld(t,r,s,u),sl(t);return;case"option":for(S in a)if(a.hasOwnProperty(S)&&(r=a[S],r!=null))switch(S){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:At(t,e,S,r,a,null)}return;case"dialog":dt("beforetoggle",t),dt("toggle",t),dt("cancel",t),dt("close",t);break;case"iframe":case"object":dt("load",t);break;case"video":case"audio":for(r=0;r<dr.length;r++)dt(dr[r],t);break;case"image":dt("error",t),dt("load",t);break;case"details":dt("toggle",t);break;case"embed":case"source":case"link":dt("error",t),dt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(C in a)if(a.hasOwnProperty(C)&&(r=a[C],r!=null))switch(C){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:At(t,e,C,r,a,null)}return;default:if(ss(e)){for(V in a)a.hasOwnProperty(V)&&(r=a[V],r!==void 0&&Zu(t,e,V,r,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(r=a[v],r!=null&&At(t,e,v,r,a,null))}function Ib(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,p=null,v=null,S=null,C=null,V=null;for(z in a){var j=a[z];if(a.hasOwnProperty(z)&&j!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":S=j;default:r.hasOwnProperty(z)||At(t,e,z,null,r,j)}}for(var _ in r){var z=r[_];if(j=a[_],r.hasOwnProperty(_)&&(z!=null||j!=null))switch(_){case"type":u=z;break;case"name":s=z;break;case"checked":C=z;break;case"defaultChecked":V=z;break;case"value":p=z;break;case"defaultValue":v=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:z!==j&&At(t,e,_,z,r,j)}}ls(t,p,v,S,C,V,u,s);return;case"select":z=p=v=_=null;for(u in a)if(S=a[u],a.hasOwnProperty(u)&&S!=null)switch(u){case"value":break;case"multiple":z=S;default:r.hasOwnProperty(u)||At(t,e,u,null,r,S)}for(s in r)if(u=r[s],S=a[s],r.hasOwnProperty(s)&&(u!=null||S!=null))switch(s){case"value":_=u;break;case"defaultValue":v=u;break;case"multiple":p=u;default:u!==S&&At(t,e,s,u,r,S)}e=v,a=p,r=z,_!=null?Na(t,!!a,_,!1):!!r!=!!a&&(e!=null?Na(t,!!a,e,!0):Na(t,!!a,a?[]:"",!1));return;case"textarea":z=_=null;for(v in a)if(s=a[v],a.hasOwnProperty(v)&&s!=null&&!r.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:At(t,e,v,null,r,s)}for(p in r)if(s=r[p],u=a[p],r.hasOwnProperty(p)&&(s!=null||u!=null))switch(p){case"value":_=s;break;case"defaultValue":z=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==u&&At(t,e,p,s,r,u)}rd(t,_,z);return;case"option":for(var it in a)if(_=a[it],a.hasOwnProperty(it)&&_!=null&&!r.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:At(t,e,it,null,r,_)}for(S in r)if(_=r[S],z=a[S],r.hasOwnProperty(S)&&_!==z&&(_!=null||z!=null))switch(S){case"selected":t.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:At(t,e,S,_,r,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)_=a[et],a.hasOwnProperty(et)&&_!=null&&!r.hasOwnProperty(et)&&At(t,e,et,null,r,_);for(C in r)if(_=r[C],z=a[C],r.hasOwnProperty(C)&&_!==z&&(_!=null||z!=null))switch(C){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,e));break;default:At(t,e,C,_,r,z)}return;default:if(ss(e)){for(var Et in a)_=a[Et],a.hasOwnProperty(Et)&&_!==void 0&&!r.hasOwnProperty(Et)&&Zu(t,e,Et,void 0,r,_);for(V in r)_=r[V],z=a[V],!r.hasOwnProperty(V)||_===z||_===void 0&&z===void 0||Zu(t,e,V,_,r,z);return}}for(var M in a)_=a[M],a.hasOwnProperty(M)&&_!=null&&!r.hasOwnProperty(M)&&At(t,e,M,null,r,_);for(j in r)_=r[j],z=a[j],!r.hasOwnProperty(j)||_===z||_==null&&z==null||At(t,e,j,_,r,z)}var Ku=null,Qu=null;function ao(t){return t.nodeType===9?t:t.ownerDocument}function op(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sp(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Fu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=null;function t1(){var t=window.event;return t&&t.type==="popstate"?t===Ju?!1:(Ju=t,!0):(Ju=null,!1)}var up=typeof setTimeout=="function"?setTimeout:void 0,e1=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(t){return cp.resolve(null).then(t).catch(a1)}:up;function a1(t){setTimeout(function(){throw t})}function Zn(t){return t==="head"}function fp(t,e){var a=e,r=0,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(0<r&&8>r){a=r;var p=t.ownerDocument;if(a&1&&mr(p.documentElement),a&2&&mr(p.body),a&4)for(a=p.head,mr(a),p=a.firstChild;p;){var v=p.nextSibling,S=p.nodeName;p[wi]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&p.rel.toLowerCase()==="stylesheet"||a.removeChild(p),p=v}}if(s===0){t.removeChild(u),Tr(e);return}s--}else a==="$"||a==="$?"||a==="$!"?s++:r=a.charCodeAt(0)-48;else r=0;a=u}while(a);Tr(e)}function $u(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$u(a),ns(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function i1(t,e,a,r){for(;t.nodeType===1;){var s=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[wi])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==s.rel||t.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function r1(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=He(t.nextSibling),t===null))return null;return t}function Wu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function l1(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var r=function(){e(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function He(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Iu=null;function dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function hp(t,e,a){switch(e=ao(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function mr(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);ns(t)}var Ve=new Map,mp=new Set;function io(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var bn=Y.d;Y.d={f:o1,r:s1,D:u1,C:c1,L:f1,m:d1,X:m1,S:h1,M:p1};function o1(){var t=bn.f(),e=Fl();return t||e}function s1(t){var e=Ca(t);e!==null&&e.tag===5&&e.type==="form"?Nh(e):bn.r(t)}var ci=typeof document>"u"?null:document;function pp(t,e,a){var r=ci;if(r&&typeof e=="string"&&e){var s=Re(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof a=="string"&&(s+='[crossorigin="'+a+'"]'),mp.has(s)||(mp.add(s),t={rel:t,crossOrigin:a,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),ne(e,"link",t),Ft(e),r.head.appendChild(e)))}}function u1(t){bn.D(t),pp("dns-prefetch",t,null)}function c1(t,e){bn.C(t,e),pp("preconnect",t,e)}function f1(t,e,a){bn.L(t,e,a);var r=ci;if(r&&t&&e){var s='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&a&&a.imageSrcSet?(s+='[imagesrcset="'+Re(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(s+='[imagesizes="'+Re(a.imageSizes)+'"]')):s+='[href="'+Re(t)+'"]';var u=s;switch(e){case"style":u=fi(t);break;case"script":u=di(t)}Ve.has(u)||(t=y({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Ve.set(u,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(pr(u))||e==="script"&&r.querySelector(gr(u))||(e=r.createElement("link"),ne(e,"link",t),Ft(e),r.head.appendChild(e)))}}function d1(t,e){bn.m(t,e);var a=ci;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Re(r)+'"][href="'+Re(t)+'"]',u=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=di(t)}if(!Ve.has(u)&&(t=y({rel:"modulepreload",href:t},e),Ve.set(u,t),a.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gr(u)))return}r=a.createElement("link"),ne(r,"link",t),Ft(r),a.head.appendChild(r)}}}function h1(t,e,a){bn.S(t,e,a);var r=ci;if(r&&t){var s=ka(r).hoistableStyles,u=fi(t);e=e||"default";var p=s.get(u);if(!p){var v={loading:0,preload:null};if(p=r.querySelector(pr(u)))v.loading=5;else{t=y({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Ve.get(u))&&tc(t,a);var S=p=r.createElement("link");Ft(S),ne(S,"link",t),S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),S.addEventListener("load",function(){v.loading|=1}),S.addEventListener("error",function(){v.loading|=2}),v.loading|=4,ro(p,e,r)}p={type:"stylesheet",instance:p,count:1,state:v},s.set(u,p)}}}function m1(t,e){bn.X(t,e);var a=ci;if(a&&t){var r=ka(a).hoistableScripts,s=di(t),u=r.get(s);u||(u=a.querySelector(gr(s)),u||(t=y({src:t,async:!0},e),(e=Ve.get(s))&&ec(t,e),u=a.createElement("script"),Ft(u),ne(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function p1(t,e){bn.M(t,e);var a=ci;if(a&&t){var r=ka(a).hoistableScripts,s=di(t),u=r.get(s);u||(u=a.querySelector(gr(s)),u||(t=y({src:t,async:!0,type:"module"},e),(e=Ve.get(s))&&ec(t,e),u=a.createElement("script"),Ft(u),ne(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function gp(t,e,a,r){var s=(s=ot.current)?io(s):null;if(!s)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=fi(a.href),a=ka(s).hoistableStyles,r=a.get(e),r||(r={type:"style",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=fi(a.href);var u=ka(s).hoistableStyles,p=u.get(t);if(p||(s=s.ownerDocument||s,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,p),(u=s.querySelector(pr(t)))&&!u._p&&(p.instance=u,p.state.loading=5),Ve.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ve.set(t,a),u||g1(s,t,a,p.state))),e&&r===null)throw Error(o(528,""));return p}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=di(a),a=ka(s).hoistableScripts,r=a.get(e),r||(r={type:"script",instance:null,count:0,state:null},a.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function fi(t){return'href="'+Re(t)+'"'}function pr(t){return'link[rel="stylesheet"]['+t+"]"}function yp(t){return y({},t,{"data-precedence":t.precedence,precedence:null})}function g1(t,e,a,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ne(e,"link",a),Ft(e),t.head.appendChild(e))}function di(t){return'[src="'+Re(t)+'"]'}function gr(t){return"script[async]"+t}function vp(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Re(a.href)+'"]');if(r)return e.instance=r,Ft(r),r;var s=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ft(r),ne(r,"style",s),ro(r,a.precedence,t),e.instance=r;case"stylesheet":s=fi(a.href);var u=t.querySelector(pr(s));if(u)return e.state.loading|=4,e.instance=u,Ft(u),u;r=yp(a),(s=Ve.get(s))&&tc(r,s),u=(t.ownerDocument||t).createElement("link"),Ft(u);var p=u;return p._p=new Promise(function(v,S){p.onload=v,p.onerror=S}),ne(u,"link",r),e.state.loading|=4,ro(u,a.precedence,t),e.instance=u;case"script":return u=di(a.src),(s=t.querySelector(gr(u)))?(e.instance=s,Ft(s),s):(r=a,(s=Ve.get(u))&&(r=y({},a),ec(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),Ft(s),ne(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,ro(r,a.precedence,t));return e.instance}function ro(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,u=s,p=0;p<r.length;p++){var v=r[p];if(v.dataset.precedence===e)u=v;else if(u!==s)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function tc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function ec(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var lo=null;function bp(t,e,a){if(lo===null){var r=new Map,s=lo=new Map;s.set(a,r)}else s=lo,r=s.get(a),r||(r=new Map,s.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),s=0;s<a.length;s++){var u=a[s];if(!(u[wi]||u[ie]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var p=u.getAttribute(e)||"";p=t+p;var v=r.get(p);v?v.push(u):r.set(p,[u])}}return r}function xp(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function y1(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Sp(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var yr=null;function v1(){}function b1(t,e,a){if(yr===null)throw Error(o(475));var r=yr;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var s=fi(a.href),u=t.querySelector(pr(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=oo.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,Ft(u);return}u=t.ownerDocument||t,a=yp(a),(s=Ve.get(s))&&tc(a,s),u=u.createElement("link"),Ft(u);var p=u;p._p=new Promise(function(v,S){p.onload=v,p.onerror=S}),ne(u,"link",a),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=oo.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function x1(){if(yr===null)throw Error(o(475));var t=yr;return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function oo(){if(this.count--,this.count===0){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var so=null;function nc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,so=new Map,e.forEach(S1,t),so=null,oo.call(t))}function S1(t,e){if(!(e.state.loading&4)){var a=so.get(t);if(a)var r=a.get(null);else{a=new Map,so.set(t,a);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var p=s[u];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),r=p)}r&&a.set(null,r)}s=e.instance,p=s.getAttribute("data-precedence"),u=a.get(p)||r,u===r&&a.set(null,s),a.set(p,s),this.count++,r=oo.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),u?u.parentNode.insertBefore(s,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var vr={$$typeof:B,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function T1(t,e,a,r,s,u,p,v){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wo(0),this.hiddenUpdates=Wo(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=v,this.incompleteTransitions=new Map}function Tp(t,e,a,r,s,u,p,v,S,C,V,j){return t=new T1(t,e,a,p,v,S,C,j),e=1,u===!0&&(e|=24),u=xe(3,null,null,e),t.current=u,u.stateNode=t,e=Bs(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:e},Hs(u),t}function Ap(t){return t?(t=Ya,t):Ya}function Ep(t,e,a,r,s,u){s=Ap(s),r.context===null?r.context=s:r.pendingContext=s,r=zn(e),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=Nn(t,r,e),a!==null&&(Oe(a,t,e),Qi(a,t,e))}function Op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function ac(t,e){Op(t,e),(t=t.alternate)&&Op(t,e)}function Dp(t){if(t.tag===13){var e=qa(t,67108864);e!==null&&Oe(e,t,67108864),ac(t,67108864)}}var uo=!0;function A1(t,e,a,r){var s=U.T;U.T=null;var u=Y.p;try{Y.p=2,ic(t,e,a,r)}finally{Y.p=u,U.T=s}}function E1(t,e,a,r){var s=U.T;U.T=null;var u=Y.p;try{Y.p=8,ic(t,e,a,r)}finally{Y.p=u,U.T=s}}function ic(t,e,a,r){if(uo){var s=rc(r);if(s===null)Xu(t,e,r,co,a),Rp(t,r);else if(D1(s,t,e,a,r))r.stopPropagation();else if(Rp(t,r),e&4&&-1<O1.indexOf(t)){for(;s!==null;){var u=Ca(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var p=aa(u.pendingLanes);if(p!==0){var v=u;for(v.pendingLanes|=2,v.entangledLanes|=2;p;){var S=1<<31-ve(p);v.entanglements[1]|=S,p&=~S}$e(u),(bt&6)===0&&(Kl=Ze()+500,fr(0))}}break;case 13:v=qa(u,2),v!==null&&Oe(v,u,2),Fl(),ac(u,2)}if(u=rc(r),u===null&&Xu(t,e,r,co,a),u===s)break;s=u}s!==null&&r.stopPropagation()}else Xu(t,e,r,null,a)}}function rc(t){return t=cs(t),lc(t)}var co=null;function lc(t){if(co=null,t=wa(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=d(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return co=t,null}function Mp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cv()){case Hf:return 2;case qf:return 8;case nl:case fv:return 32;case Yf:return 268435456;default:return 32}default:return 32}}var oc=!1,Kn=null,Qn=null,Fn=null,br=new Map,xr=new Map,Jn=[],O1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rp(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":br.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xr.delete(e.pointerId)}}function Sr(t,e,a,r,s,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},e!==null&&(e=Ca(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function D1(t,e,a,r,s){switch(e){case"focusin":return Kn=Sr(Kn,t,e,a,r,s),!0;case"dragenter":return Qn=Sr(Qn,t,e,a,r,s),!0;case"mouseover":return Fn=Sr(Fn,t,e,a,r,s),!0;case"pointerover":var u=s.pointerId;return br.set(u,Sr(br.get(u)||null,t,e,a,r,s)),!0;case"gotpointercapture":return u=s.pointerId,xr.set(u,Sr(xr.get(u)||null,t,e,a,r,s)),!0}return!1}function wp(t){var e=wa(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=d(a),e!==null){t.blockedOn=e,bv(t.priority,function(){if(a.tag===13){var r=Ee();r=Io(r);var s=qa(a,r);s!==null&&Oe(s,a,r),ac(a,r)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=rc(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);us=r,a.target.dispatchEvent(r),us=null}else return e=Ca(a),e!==null&&Dp(e),t.blockedOn=a,!1;e.shift()}return!0}function Cp(t,e,a){fo(t)&&a.delete(e)}function M1(){oc=!1,Kn!==null&&fo(Kn)&&(Kn=null),Qn!==null&&fo(Qn)&&(Qn=null),Fn!==null&&fo(Fn)&&(Fn=null),br.forEach(Cp),xr.forEach(Cp)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,oc||(oc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,M1)))}var mo=null;function kp(t){mo!==t&&(mo=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){mo===t&&(mo=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(lc(r||a)===null)continue;break}var u=Ca(a);u!==null&&(t.splice(e,3),e-=3,lu(u,{pending:!0,data:s,method:a.method,action:r},r,s))}}))}function Tr(t){function e(S){return ho(S,t)}Kn!==null&&ho(Kn,t),Qn!==null&&ho(Qn,t),Fn!==null&&ho(Fn,t),br.forEach(e),xr.forEach(e);for(var a=0;a<Jn.length;a++){var r=Jn[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Jn.length&&(a=Jn[0],a.blockedOn===null);)wp(a),a.blockedOn===null&&Jn.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var s=a[r],u=a[r+1],p=s[ce]||null;if(typeof u=="function")p||kp(a);else if(p){var v=null;if(u&&u.hasAttribute("formAction")){if(s=u,p=u[ce]||null)v=p.formAction;else if(lc(s)!==null)continue}else v=p.action;typeof v=="function"?a[r+1]=v:(a.splice(r,3),r-=3),kp(a)}}}function sc(t){this._internalRoot=t}po.prototype.render=sc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,r=Ee();Ep(a,r,t,e,null,null)},po.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ep(t.current,2,null,t,null,null),Fl(),e[Ra]=null}};function po(t){this._internalRoot=t}po.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<Jn.length&&e!==0&&e<Jn[a].priority;a++);Jn.splice(a,0,t),a===0&&wp(t)}};var _p=i.version;if(_p!=="19.1.0")throw Error(o(527,_p,"19.1.0"));Y.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=m(e),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var R1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{Di=go.inject(R1),ye=go}catch{}}return Er.createRoot=function(t,e){if(!c(t))throw Error(o(299));var a=!1,r="",s=Qh,u=Fh,p=Jh,v=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(p=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(v=e.unstable_transitionCallbacks)),e=Tp(t,1,!1,null,null,a,r,s,u,p,v,null),t[Ra]=e.current,Gu(t),new sc(e)},Er.hydrateRoot=function(t,e,a){if(!c(t))throw Error(o(299));var r=!1,s="",u=Qh,p=Fh,v=Jh,S=null,C=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(s=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(S=a.unstable_transitionCallbacks),a.formState!==void 0&&(C=a.formState)),e=Tp(t,1,!0,e,a??null,r,s,u,p,v,S,C),e.context=Ap(null),a=e.current,r=Ee(),r=Io(r),s=zn(r),s.callback=null,Nn(a,s,r),a=r,e.current.lanes=a,Ri(e,a),$e(e),t[Ra]=e.current,Gu(t),new po(e)},Er.version="19.1.0",Er}var qp;function L1(){if(qp)return fc.exports;qp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),fc.exports=B1(),fc.exports}var j1=L1();const P1=dg(j1);/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yp="popstate";function H1(n={}){function i(o,c){let{pathname:f,search:d,hash:g}=o.location;return _c("",{pathname:f,search:d,hash:g},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function l(o,c){return typeof c=="string"?c:Ur(c)}return Y1(i,l,null,n)}function Nt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function en(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function q1(){return Math.random().toString(36).substring(2,10)}function Gp(n,i){return{usr:n.state,key:n.key,idx:i}}function _c(n,i,l=null,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Si(i):i,state:l,key:i&&i.key||o||q1()}}function Ur({pathname:n="/",search:i="",hash:l=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function Si(n){let i={};if(n){let l=n.indexOf("#");l>=0&&(i.hash=n.substring(l),n=n.substring(0,l));let o=n.indexOf("?");o>=0&&(i.search=n.substring(o),n=n.substring(0,o)),n&&(i.pathname=n)}return i}function Y1(n,i,l,o={}){let{window:c=document.defaultView,v5Compat:f=!1}=o,d=c.history,g="POP",m=null,h=y();h==null&&(h=0,d.replaceState({...d.state,idx:h},""));function y(){return(d.state||{idx:null}).idx}function b(){g="POP";let N=y(),w=N==null?null:N-h;h=N,m&&m({action:g,location:O.location,delta:w})}function x(N,w){g="PUSH";let H=_c(O.location,N,w);h=y()+1;let B=Gp(H,h),K=O.createHref(H);try{d.pushState(B,"",K)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;c.location.assign(K)}f&&m&&m({action:g,location:O.location,delta:1})}function D(N,w){g="REPLACE";let H=_c(O.location,N,w);h=y();let B=Gp(H,h),K=O.createHref(H);d.replaceState(B,"",K),f&&m&&m({action:g,location:O.location,delta:0})}function E(N){return G1(N)}let O={get action(){return g},get location(){return n(c,d)},listen(N){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Yp,b),m=N,()=>{c.removeEventListener(Yp,b),m=null}},createHref(N){return i(c,N)},createURL:E,encodeLocation(N){let w=E(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:x,replace:D,go(N){return d.go(N)}};return O}function G1(n,i=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Nt(l,"No window.location.(origin|href) available to create URL");let o=typeof n=="string"?n:Ur(n);return o=o.replace(/ $/,"%20"),!i&&o.startsWith("//")&&(o=l+o),new URL(o,l)}function hg(n,i,l="/"){return X1(n,i,l,!1)}function X1(n,i,l,o){let c=typeof i=="string"?Si(i):i,f=An(c.pathname||"/",l);if(f==null)return null;let d=mg(n);Z1(d);let g=null;for(let m=0;g==null&&m<d.length;++m){let h=ax(f);g=ex(d[m],h,o)}return g}function mg(n,i=[],l=[],o=""){let c=(f,d,g)=>{let m={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};m.relativePath.startsWith("/")&&(Nt(m.relativePath.startsWith(o),`Absolute route path "${m.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(o.length));let h=Tn([o,m.relativePath]),y=l.concat(m);f.children&&f.children.length>0&&(Nt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),mg(f.children,i,y,h)),!(f.path==null&&!f.index)&&i.push({path:h,score:I1(h,f.index),routesMeta:y})};return n.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let g of pg(f.path))c(f,d,g)}),i}function pg(n){let i=n.split("/");if(i.length===0)return[];let[l,...o]=i,c=l.endsWith("?"),f=l.replace(/\?$/,"");if(o.length===0)return c?[f,""]:[f];let d=pg(o.join("/")),g=[];return g.push(...d.map(m=>m===""?f:[f,m].join("/"))),c&&g.push(...d),g.map(m=>n.startsWith("/")&&m===""?"/":m)}function Z1(n){n.sort((i,l)=>i.score!==l.score?l.score-i.score:tx(i.routesMeta.map(o=>o.childrenIndex),l.routesMeta.map(o=>o.childrenIndex)))}var K1=/^:[\w-]+$/,Q1=3,F1=2,J1=1,$1=10,W1=-2,Xp=n=>n==="*";function I1(n,i){let l=n.split("/"),o=l.length;return l.some(Xp)&&(o+=W1),i&&(o+=F1),l.filter(c=>!Xp(c)).reduce((c,f)=>c+(K1.test(f)?Q1:f===""?J1:$1),o)}function tx(n,i){return n.length===i.length&&n.slice(0,-1).every((o,c)=>o===i[c])?n[n.length-1]-i[i.length-1]:0}function ex(n,i,l=!1){let{routesMeta:o}=n,c={},f="/",d=[];for(let g=0;g<o.length;++g){let m=o[g],h=g===o.length-1,y=f==="/"?i:i.slice(f.length)||"/",b=Vo({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},y),x=m.route;if(!b&&h&&l&&!o[o.length-1].route.index&&(b=Vo({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!b)return null;Object.assign(c,b.params),d.push({params:c,pathname:Tn([f,b.pathname]),pathnameBase:ox(Tn([f,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(f=Tn([f,b.pathnameBase]))}return d}function Vo(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[l,o]=nx(n.path,n.caseSensitive,n.end),c=i.match(l);if(!c)return null;let f=c[0],d=f.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:o.reduce((h,{paramName:y,isOptional:b},x)=>{if(y==="*"){let E=g[x]||"";d=f.slice(0,f.length-E.length).replace(/(.)\/+$/,"$1")}const D=g[x];return b&&!D?h[y]=void 0:h[y]=(D||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:d,pattern:n}}function nx(n,i=!1,l=!0){en(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],c="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,g,m)=>(o.push({paramName:g,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(o.push({paramName:"*"}),c+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?c+="\\/*$":n!==""&&n!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,i?void 0:"i"),o]}function ax(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return en(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function An(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,o=n.charAt(l);return o&&o!=="/"?null:n.slice(l)||"/"}function ix(n,i="/"){let{pathname:l,search:o="",hash:c=""}=typeof n=="string"?Si(n):n;return{pathname:l?l.startsWith("/")?l:rx(l,i):i,search:sx(o),hash:ux(c)}}function rx(n,i){let l=i.replace(/\/+$/,"").split("/");return n.split("/").forEach(c=>{c===".."?l.length>1&&l.pop():c!=="."&&l.push(c)}),l.length>1?l.join("/"):"/"}function pc(n,i,l,o){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lx(n){return n.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function gg(n){let i=lx(n);return i.map((l,o)=>o===i.length-1?l.pathname:l.pathnameBase)}function yg(n,i,l,o=!1){let c;typeof n=="string"?c=Si(n):(c={...n},Nt(!c.pathname||!c.pathname.includes("?"),pc("?","pathname","search",c)),Nt(!c.pathname||!c.pathname.includes("#"),pc("#","pathname","hash",c)),Nt(!c.search||!c.search.includes("#"),pc("#","search","hash",c)));let f=n===""||c.pathname==="",d=f?"/":c.pathname,g;if(d==null)g=l;else{let b=i.length-1;if(!o&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),b-=1;c.pathname=x.join("/")}g=b>=0?i[b]:"/"}let m=ix(c,g),h=d&&d!=="/"&&d.endsWith("/"),y=(f||d===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(h||y)&&(m.pathname+="/"),m}var Tn=n=>n.join("/").replace(/\/\/+/g,"/"),ox=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),sx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ux=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function cx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var vg=["POST","PUT","PATCH","DELETE"];new Set(vg);var fx=["GET",...vg];new Set(fx);var Ti=k.createContext(null);Ti.displayName="DataRouter";var qo=k.createContext(null);qo.displayName="DataRouterState";k.createContext(!1);var bg=k.createContext({isTransitioning:!1});bg.displayName="ViewTransition";var dx=k.createContext(new Map);dx.displayName="Fetchers";var hx=k.createContext(null);hx.displayName="Await";var nn=k.createContext(null);nn.displayName="Navigation";var Gr=k.createContext(null);Gr.displayName="Location";var Dn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var nf=k.createContext(null);nf.displayName="RouteError";function mx(n,{relative:i}={}){Nt(Xr(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:o}=k.useContext(nn),{hash:c,pathname:f,search:d}=Zr(n,{relative:i}),g=f;return l!=="/"&&(g=f==="/"?l:Tn([l,f])),o.createHref({pathname:g,search:d,hash:c})}function Xr(){return k.useContext(Gr)!=null}function Ma(){return Nt(Xr(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Gr).location}var xg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sg(n){k.useContext(nn).static||k.useLayoutEffect(n)}function px(){let{isDataRoute:n}=k.useContext(Dn);return n?Rx():gx()}function gx(){Nt(Xr(),"useNavigate() may be used only in the context of a <Router> component.");let n=k.useContext(Ti),{basename:i,navigator:l}=k.useContext(nn),{matches:o}=k.useContext(Dn),{pathname:c}=Ma(),f=JSON.stringify(gg(o)),d=k.useRef(!1);return Sg(()=>{d.current=!0}),k.useCallback((m,h={})=>{if(en(d.current,xg),!d.current)return;if(typeof m=="number"){l.go(m);return}let y=yg(m,JSON.parse(f),c,h.relative==="path");n==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:Tn([i,y.pathname])),(h.replace?l.replace:l.push)(y,h.state,h)},[i,l,f,c,n])}k.createContext(null);function Zr(n,{relative:i}={}){let{matches:l}=k.useContext(Dn),{pathname:o}=Ma(),c=JSON.stringify(gg(l));return k.useMemo(()=>yg(n,JSON.parse(c),o,i==="path"),[n,c,o,i])}function yx(n,i){return Tg(n,i)}function Tg(n,i,l,o){Nt(Xr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=k.useContext(nn),{matches:f}=k.useContext(Dn),d=f[f.length-1],g=d?d.params:{},m=d?d.pathname:"/",h=d?d.pathnameBase:"/",y=d&&d.route;{let w=y&&y.path||"";Ag(m,!y||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let b=Ma(),x;if(i){let w=typeof i=="string"?Si(i):i;Nt(h==="/"||w.pathname?.startsWith(h),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${w.pathname}" was given in the \`location\` prop.`),x=w}else x=b;let D=x.pathname||"/",E=D;if(h!=="/"){let w=h.replace(/^\//,"").split("/");E="/"+D.replace(/^\//,"").split("/").slice(w.length).join("/")}let O=hg(n,{pathname:E});en(y||O!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),en(O==null||O[O.length-1].route.element!==void 0||O[O.length-1].route.Component!==void 0||O[O.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=Tx(O&&O.map(w=>Object.assign({},w,{params:Object.assign({},g,w.params),pathname:Tn([h,c.encodeLocation?c.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?h:Tn([h,c.encodeLocation?c.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),f,l,o);return i&&N?k.createElement(Gr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},N):N}function vx(){let n=Mx(),i=cx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),l=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:f},"ErrorBoundary")," or"," ",k.createElement("code",{style:f},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},i),l?k.createElement("pre",{style:c},l):null,d)}var bx=k.createElement(vx,null),xx=class extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?k.createElement(Dn.Provider,{value:this.props.routeContext},k.createElement(nf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Sx({routeContext:n,match:i,children:l}){let o=k.useContext(Ti);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(Dn.Provider,{value:n},l)}function Tx(n,i=[],l=null,o=null){if(n==null){if(!l)return null;if(l.errors)n=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)n=l.matches;else return null}let c=n,f=l?.errors;if(f!=null){let m=c.findIndex(h=>h.route.id&&f?.[h.route.id]!==void 0);Nt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let d=!1,g=-1;if(l)for(let m=0;m<c.length;m++){let h=c[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(g=m),h.route.id){let{loaderData:y,errors:b}=l,x=h.route.loader&&!y.hasOwnProperty(h.route.id)&&(!b||b[h.route.id]===void 0);if(h.route.lazy||x){d=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}return c.reduceRight((m,h,y)=>{let b,x=!1,D=null,E=null;l&&(b=f&&h.route.id?f[h.route.id]:void 0,D=h.route.errorElement||bx,d&&(g<0&&y===0?(Ag("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):g===y&&(x=!0,E=h.route.hydrateFallbackElement||null)));let O=i.concat(c.slice(0,y+1)),N=()=>{let w;return b?w=D:x?w=E:h.route.Component?w=k.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=m,k.createElement(Sx,{match:h,routeContext:{outlet:m,matches:O,isDataRoute:l!=null},children:w})};return l&&(h.route.ErrorBoundary||h.route.errorElement||y===0)?k.createElement(xx,{location:l.location,revalidation:l.revalidation,component:D,error:b,children:N(),routeContext:{outlet:null,matches:O,isDataRoute:!0}}):N()},null)}function af(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ax(n){let i=k.useContext(Ti);return Nt(i,af(n)),i}function Ex(n){let i=k.useContext(qo);return Nt(i,af(n)),i}function Ox(n){let i=k.useContext(Dn);return Nt(i,af(n)),i}function rf(n){let i=Ox(n),l=i.matches[i.matches.length-1];return Nt(l.route.id,`${n} can only be used on routes that contain a unique "id"`),l.route.id}function Dx(){return rf("useRouteId")}function Mx(){let n=k.useContext(nf),i=Ex("useRouteError"),l=rf("useRouteError");return n!==void 0?n:i.errors?.[l]}function Rx(){let{router:n}=Ax("useNavigate"),i=rf("useNavigate"),l=k.useRef(!1);return Sg(()=>{l.current=!0}),k.useCallback(async(c,f={})=>{en(l.current,xg),l.current&&(typeof c=="number"?n.navigate(c):await n.navigate(c,{fromRouteId:i,...f}))},[n,i])}var Zp={};function Ag(n,i,l){!i&&!Zp[n]&&(Zp[n]=!0,en(!1,l))}k.memo(wx);function wx({routes:n,future:i,state:l}){return Tg(n,void 0,l,i)}function Ro(n){Nt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Cx({basename:n="/",children:i=null,location:l,navigationType:o="POP",navigator:c,static:f=!1}){Nt(!Xr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),g=k.useMemo(()=>({basename:d,navigator:c,static:f,future:{}}),[d,c,f]);typeof l=="string"&&(l=Si(l));let{pathname:m="/",search:h="",hash:y="",state:b=null,key:x="default"}=l,D=k.useMemo(()=>{let E=An(m,d);return E==null?null:{location:{pathname:E,search:h,hash:y,state:b,key:x},navigationType:o}},[d,m,h,y,b,x,o]);return en(D!=null,`<Router basename="${d}"> is not able to match the URL "${m}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:k.createElement(nn.Provider,{value:g},k.createElement(Gr.Provider,{children:i,value:D}))}function kx({children:n,location:i}){return yx(zc(n),i)}function zc(n,i=[]){let l=[];return k.Children.forEach(n,(o,c)=>{if(!k.isValidElement(o))return;let f=[...i,c];if(o.type===k.Fragment){l.push.apply(l,zc(o.props.children,f));return}Nt(o.type===Ro,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Nt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=zc(o.props.children,f)),l.push(d)}),l}var wo="get",Co="application/x-www-form-urlencoded";function Yo(n){return n!=null&&typeof n.tagName=="string"}function _x(n){return Yo(n)&&n.tagName.toLowerCase()==="button"}function zx(n){return Yo(n)&&n.tagName.toLowerCase()==="form"}function Nx(n){return Yo(n)&&n.tagName.toLowerCase()==="input"}function Vx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Ux(n,i){return n.button===0&&(!i||i==="_self")&&!Vx(n)}var yo=null;function Bx(){if(yo===null)try{new FormData(document.createElement("form"),0),yo=!1}catch{yo=!0}return yo}var Lx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gc(n){return n!=null&&!Lx.has(n)?(en(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Co}"`),null):n}function jx(n,i){let l,o,c,f,d;if(zx(n)){let g=n.getAttribute("action");o=g?An(g,i):null,l=n.getAttribute("method")||wo,c=gc(n.getAttribute("enctype"))||Co,f=new FormData(n)}else if(_x(n)||Nx(n)&&(n.type==="submit"||n.type==="image")){let g=n.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||g.getAttribute("action");if(o=m?An(m,i):null,l=n.getAttribute("formmethod")||g.getAttribute("method")||wo,c=gc(n.getAttribute("formenctype"))||gc(g.getAttribute("enctype"))||Co,f=new FormData(g,n),!Bx()){let{name:h,type:y,value:b}=n;if(y==="image"){let x=h?`${h}.`:"";f.append(`${x}x`,"0"),f.append(`${x}y`,"0")}else h&&f.append(h,b)}}else{if(Yo(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=wo,o=null,c=Co,d=n}return f&&c==="text/plain"&&(d=f,f=void 0),{action:o,method:l.toLowerCase(),encType:c,formData:f,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lf(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Px(n,i,l){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname=`_root.${l}`:i&&An(o.pathname,i)==="/"?o.pathname=`${i.replace(/\/$/,"")}/_root.${l}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${l}`,o}async function Hx(n,i){if(n.id in i)return i[n.id];try{let l=await import(n.module);return i[n.id]=l,l}catch(l){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function qx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Yx(n,i,l){let o=await Promise.all(n.map(async c=>{let f=i.routes[c.route.id];if(f){let d=await Hx(f,l);return d.links?d.links():[]}return[]}));return Kx(o.flat(1).filter(qx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Kp(n,i,l,o,c,f){let d=(m,h)=>l[h]?m.route.id!==l[h].route.id:!0,g=(m,h)=>l[h].pathname!==m.pathname||l[h].route.path?.endsWith("*")&&l[h].params["*"]!==m.params["*"];return f==="assets"?i.filter((m,h)=>d(m,h)||g(m,h)):f==="data"?i.filter((m,h)=>{let y=o.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(d(m,h)||g(m,h))return!0;if(m.route.shouldRevalidate){let b=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function Gx(n,i,{includeHydrateFallback:l}={}){return Xx(n.map(o=>{let c=i.routes[o.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),l&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function Xx(n){return[...new Set(n)]}function Zx(n){let i={},l=Object.keys(n).sort();for(let o of l)i[o]=n[o];return i}function Kx(n,i){let l=new Set;return new Set(i),n.reduce((o,c)=>{let f=JSON.stringify(Zx(c));return l.has(f)||(l.add(f),o.push({key:f,link:c})),o},[])}function Eg(){let n=k.useContext(Ti);return lf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Qx(){let n=k.useContext(qo);return lf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var of=k.createContext(void 0);of.displayName="FrameworkContext";function Og(){let n=k.useContext(of);return lf(n,"You must render this element inside a <HydratedRouter> element"),n}function Fx(n,i){let l=k.useContext(of),[o,c]=k.useState(!1),[f,d]=k.useState(!1),{onFocus:g,onBlur:m,onMouseEnter:h,onMouseLeave:y,onTouchStart:b}=i,x=k.useRef(null);k.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let O=w=>{w.forEach(H=>{d(H.isIntersecting)})},N=new IntersectionObserver(O,{threshold:.5});return x.current&&N.observe(x.current),()=>{N.disconnect()}}},[n]),k.useEffect(()=>{if(o){let O=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(O)}}},[o]);let D=()=>{c(!0)},E=()=>{c(!1),d(!1)};return l?n!=="intent"?[f,x,{}]:[f,x,{onFocus:Or(g,D),onBlur:Or(m,E),onMouseEnter:Or(h,D),onMouseLeave:Or(y,E),onTouchStart:Or(b,D)}]:[!1,x,{}]}function Or(n,i){return l=>{n&&n(l),l.defaultPrevented||i(l)}}function Jx({page:n,...i}){let{router:l}=Eg(),o=k.useMemo(()=>hg(l.routes,n,l.basename),[l.routes,n,l.basename]);return o?k.createElement(Wx,{page:n,matches:o,...i}):null}function $x(n){let{manifest:i,routeModules:l}=Og(),[o,c]=k.useState([]);return k.useEffect(()=>{let f=!1;return Yx(n,i,l).then(d=>{f||c(d)}),()=>{f=!0}},[n,i,l]),o}function Wx({page:n,matches:i,...l}){let o=Ma(),{manifest:c,routeModules:f}=Og(),{basename:d}=Eg(),{loaderData:g,matches:m}=Qx(),h=k.useMemo(()=>Kp(n,i,m,c,o,"data"),[n,i,m,c,o]),y=k.useMemo(()=>Kp(n,i,m,c,o,"assets"),[n,i,m,c,o]),b=k.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let E=new Set,O=!1;if(i.forEach(w=>{let H=c.routes[w.route.id];!H||!H.hasLoader||(!h.some(B=>B.route.id===w.route.id)&&w.route.id in g&&f[w.route.id]?.shouldRevalidate||H.hasClientLoader?O=!0:E.add(w.route.id))}),E.size===0)return[];let N=Px(n,d,"data");return O&&E.size>0&&N.searchParams.set("_routes",i.filter(w=>E.has(w.route.id)).map(w=>w.route.id).join(",")),[N.pathname+N.search]},[d,g,o,c,h,i,n,f]),x=k.useMemo(()=>Gx(y,c),[y,c]),D=$x(y);return k.createElement(k.Fragment,null,b.map(E=>k.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...l})),x.map(E=>k.createElement("link",{key:E,rel:"modulepreload",href:E,...l})),D.map(({key:E,link:O})=>k.createElement("link",{key:E,...O})))}function Ix(...n){return i=>{n.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var Dg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Dg&&(window.__reactRouterVersion="7.7.0")}catch{}function t5({basename:n,children:i,window:l}){let o=k.useRef();o.current==null&&(o.current=H1({window:l,v5Compat:!0}));let c=o.current,[f,d]=k.useState({action:c.action,location:c.location}),g=k.useCallback(m=>{k.startTransition(()=>d(m))},[d]);return k.useLayoutEffect(()=>c.listen(g),[c,g]),k.createElement(Cx,{basename:n,children:i,location:f.location,navigationType:f.action,navigator:c})}var Mg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cr=k.forwardRef(function({onClick:i,discover:l="render",prefetch:o="none",relative:c,reloadDocument:f,replace:d,state:g,target:m,to:h,preventScrollReset:y,viewTransition:b,...x},D){let{basename:E}=k.useContext(nn),O=typeof h=="string"&&Mg.test(h),N,w=!1;if(typeof h=="string"&&O&&(N=h,Dg))try{let at=new URL(window.location.href),Dt=h.startsWith("//")?new URL(at.protocol+h):new URL(h),Gt=An(Dt.pathname,E);Dt.origin===at.origin&&Gt!=null?h=Gt+Dt.search+Dt.hash:w=!0}catch{en(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=mx(h,{relative:c}),[B,K,q]=Fx(o,x),I=i5(h,{replace:d,state:g,target:m,preventScrollReset:y,relative:c,viewTransition:b});function lt(at){i&&i(at),at.defaultPrevented||I(at)}let F=k.createElement("a",{...x,...q,href:N||H,onClick:w||f?i:lt,ref:Ix(D,K),target:m,"data-discover":!O&&l==="render"?"true":void 0});return B&&!O?k.createElement(k.Fragment,null,F,k.createElement(Jx,{page:H})):F});Cr.displayName="Link";var e5=k.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:o="",end:c=!1,style:f,to:d,viewTransition:g,children:m,...h},y){let b=Zr(d,{relative:h.relative}),x=Ma(),D=k.useContext(qo),{navigator:E,basename:O}=k.useContext(nn),N=D!=null&&u5(b)&&g===!0,w=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,H=x.pathname,B=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;l||(H=H.toLowerCase(),B=B?B.toLowerCase():null,w=w.toLowerCase()),B&&O&&(B=An(B,O)||B);const K=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let q=H===w||!c&&H.startsWith(w)&&H.charAt(K)==="/",I=B!=null&&(B===w||!c&&B.startsWith(w)&&B.charAt(w.length)==="/"),lt={isActive:q,isPending:I,isTransitioning:N},F=q?i:void 0,at;typeof o=="function"?at=o(lt):at=[o,q?"active":null,I?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let Dt=typeof f=="function"?f(lt):f;return k.createElement(Cr,{...h,"aria-current":F,className:at,ref:y,style:Dt,to:d,viewTransition:g},typeof m=="function"?m(lt):m)});e5.displayName="NavLink";var n5=k.forwardRef(({discover:n="render",fetcherKey:i,navigate:l,reloadDocument:o,replace:c,state:f,method:d=wo,action:g,onSubmit:m,relative:h,preventScrollReset:y,viewTransition:b,...x},D)=>{let E=o5(),O=s5(g,{relative:h}),N=d.toLowerCase()==="get"?"get":"post",w=typeof g=="string"&&Mg.test(g),H=B=>{if(m&&m(B),B.defaultPrevented)return;B.preventDefault();let K=B.nativeEvent.submitter,q=K?.getAttribute("formmethod")||d;E(K||B.currentTarget,{fetcherKey:i,method:q,navigate:l,replace:c,state:f,relative:h,preventScrollReset:y,viewTransition:b})};return k.createElement("form",{ref:D,method:N,action:O,onSubmit:o?m:H,...x,"data-discover":!w&&n==="render"?"true":void 0})});n5.displayName="Form";function a5(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Rg(n){let i=k.useContext(Ti);return Nt(i,a5(n)),i}function i5(n,{target:i,replace:l,state:o,preventScrollReset:c,relative:f,viewTransition:d}={}){let g=px(),m=Ma(),h=Zr(n,{relative:f});return k.useCallback(y=>{if(Ux(y,i)){y.preventDefault();let b=l!==void 0?l:Ur(m)===Ur(h);g(n,{replace:b,state:o,preventScrollReset:c,relative:f,viewTransition:d})}},[m,g,h,l,o,i,n,c,f,d])}var r5=0,l5=()=>`__${String(++r5)}__`;function o5(){let{router:n}=Rg("useSubmit"),{basename:i}=k.useContext(nn),l=Dx();return k.useCallback(async(o,c={})=>{let{action:f,method:d,encType:g,formData:m,body:h}=jx(o,i);if(c.navigate===!1){let y=c.fetcherKey||l5();await n.fetch(y,l,c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:h,formMethod:c.method||d,formEncType:c.encType||g,flushSync:c.flushSync})}else await n.navigate(c.action||f,{preventScrollReset:c.preventScrollReset,formData:m,body:h,formMethod:c.method||d,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:l,flushSync:c.flushSync,viewTransition:c.viewTransition})},[n,i,l])}function s5(n,{relative:i}={}){let{basename:l}=k.useContext(nn),o=k.useContext(Dn);Nt(o,"useFormAction must be used inside a RouteContext");let[c]=o.matches.slice(-1),f={...Zr(n||".",{relative:i})},d=Ma();if(n==null){f.search=d.search;let g=new URLSearchParams(f.search),m=g.getAll("index");if(m.some(y=>y==="")){g.delete("index"),m.filter(b=>b).forEach(b=>g.append("index",b));let y=g.toString();f.search=y?`?${y}`:""}}return(!n||n===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(f.pathname=f.pathname==="/"?l:Tn([l,f.pathname])),Ur(f)}function u5(n,i={}){let l=k.useContext(bg);Nt(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Rg("useViewTransitionState"),c=Zr(n,{relative:i.relative});if(!l.isTransitioning)return!1;let f=An(l.currentLocation.pathname,o)||l.currentLocation.pathname,d=An(l.nextLocation.pathname,o)||l.nextLocation.pathname;return Vo(c.pathname,d)!=null||Vo(c.pathname,f)!=null}const wg=k.createContext({});function c5(n){const i=k.useRef(null);return i.current===null&&(i.current=n()),i.current}const sf=typeof window<"u",f5=sf?k.useLayoutEffect:k.useEffect,uf=k.createContext(null);function cf(n,i){n.indexOf(i)===-1&&n.push(i)}function ff(n,i){const l=n.indexOf(i);l>-1&&n.splice(l,1)}const En=(n,i,l)=>l>i?i:l<n?n:l;let df=()=>{};const On={},Cg=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function kg(n){return typeof n=="object"&&n!==null}const _g=n=>/^0[^.\s]+$/u.test(n);function hf(n){let i;return()=>(i===void 0&&(i=n()),i)}const Le=n=>n,d5=(n,i)=>l=>i(n(l)),Kr=(...n)=>n.reduce(d5),Br=(n,i,l)=>{const o=i-n;return o===0?1:(l-n)/o};class mf{constructor(){this.subscriptions=[]}add(i){return cf(this.subscriptions,i),()=>ff(this.subscriptions,i)}notify(i,l,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,l,o);else for(let f=0;f<c;f++){const d=this.subscriptions[f];d&&d(i,l,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const We=n=>n*1e3,Ie=n=>n/1e3;function zg(n,i){return i?n*(1e3/i):0}const Ng=(n,i,l)=>(((1-3*l+3*i)*n+(3*l-6*i))*n+3*i)*n,h5=1e-7,m5=12;function p5(n,i,l,o,c){let f,d,g=0;do d=i+(l-i)/2,f=Ng(d,o,c)-n,f>0?l=d:i=d;while(Math.abs(f)>h5&&++g<m5);return d}function Qr(n,i,l,o){if(n===i&&l===o)return Le;const c=f=>p5(f,0,1,n,l);return f=>f===0||f===1?f:Ng(c(f),i,o)}const Vg=n=>i=>i<=.5?n(2*i)/2:(2-n(2*(1-i)))/2,Ug=n=>i=>1-n(1-i),Bg=Qr(.33,1.53,.69,.99),pf=Ug(Bg),Lg=Vg(pf),jg=n=>(n*=2)<1?.5*pf(n):.5*(2-Math.pow(2,-10*(n-1))),gf=n=>1-Math.sin(Math.acos(n)),Pg=Ug(gf),Hg=Vg(gf),g5=Qr(.42,0,1,1),y5=Qr(0,0,.58,1),qg=Qr(.42,0,.58,1),v5=n=>Array.isArray(n)&&typeof n[0]!="number",Yg=n=>Array.isArray(n)&&typeof n[0]=="number",b5={linear:Le,easeIn:g5,easeInOut:qg,easeOut:y5,circIn:gf,circInOut:Hg,circOut:Pg,backIn:pf,backInOut:Lg,backOut:Bg,anticipate:jg},x5=n=>typeof n=="string",Qp=n=>{if(Yg(n)){df(n.length===4);const[i,l,o,c]=n;return Qr(i,l,o,c)}else if(x5(n))return b5[n];return n},vo=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function S5(n,i){let l=new Set,o=new Set,c=!1,f=!1;const d=new WeakSet;let g={delta:0,timestamp:0,isProcessing:!1};function m(y){d.has(y)&&(h.schedule(y),n()),y(g)}const h={schedule:(y,b=!1,x=!1)=>{const E=x&&c?l:o;return b&&d.add(y),E.has(y)||E.add(y),y},cancel:y=>{o.delete(y),d.delete(y)},process:y=>{if(g=y,c){f=!0;return}c=!0,[l,o]=[o,l],l.forEach(m),l.clear(),c=!1,f&&(f=!1,h.process(y))}};return h}const T5=40;function Gg(n,i){let l=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>l=!0,d=vo.reduce((B,K)=>(B[K]=S5(f),B),{}),{setup:g,read:m,resolveKeyframes:h,preUpdate:y,update:b,preRender:x,render:D,postRender:E}=d,O=()=>{const B=On.useManualTiming?c.timestamp:performance.now();l=!1,On.useManualTiming||(c.delta=o?1e3/60:Math.max(Math.min(B-c.timestamp,T5),1)),c.timestamp=B,c.isProcessing=!0,g.process(c),m.process(c),h.process(c),y.process(c),b.process(c),x.process(c),D.process(c),E.process(c),c.isProcessing=!1,l&&i&&(o=!1,n(O))},N=()=>{l=!0,o=!0,c.isProcessing||n(O)};return{schedule:vo.reduce((B,K)=>{const q=d[K];return B[K]=(I,lt=!1,F=!1)=>(l||N(),q.schedule(I,lt,F)),B},{}),cancel:B=>{for(let K=0;K<vo.length;K++)d[vo[K]].cancel(B)},state:c,steps:d}}const{schedule:kt,cancel:ta,state:ae,steps:yc}=Gg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0);let ko;function A5(){ko=void 0}const pe={now:()=>(ko===void 0&&pe.set(ae.isProcessing||On.useManualTiming?ae.timestamp:performance.now()),ko),set:n=>{ko=n,queueMicrotask(A5)}},Xg=n=>i=>typeof i=="string"&&i.startsWith(n),yf=Xg("--"),E5=Xg("var(--"),vf=n=>E5(n)?O5.test(n.split("/*")[0].trim()):!1,O5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ai={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Lr={...Ai,transform:n=>En(0,1,n)},bo={...Ai,default:1},kr=n=>Math.round(n*1e5)/1e5,bf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function D5(n){return n==null}const M5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xf=(n,i)=>l=>!!(typeof l=="string"&&M5.test(l)&&l.startsWith(n)||i&&!D5(l)&&Object.prototype.hasOwnProperty.call(l,i)),Zg=(n,i,l)=>o=>{if(typeof o!="string")return o;const[c,f,d,g]=o.match(bf);return{[n]:parseFloat(c),[i]:parseFloat(f),[l]:parseFloat(d),alpha:g!==void 0?parseFloat(g):1}},R5=n=>En(0,255,n),vc={...Ai,transform:n=>Math.round(R5(n))},Aa={test:xf("rgb","red"),parse:Zg("red","green","blue"),transform:({red:n,green:i,blue:l,alpha:o=1})=>"rgba("+vc.transform(n)+", "+vc.transform(i)+", "+vc.transform(l)+", "+kr(Lr.transform(o))+")"};function w5(n){let i="",l="",o="",c="";return n.length>5?(i=n.substring(1,3),l=n.substring(3,5),o=n.substring(5,7),c=n.substring(7,9)):(i=n.substring(1,2),l=n.substring(2,3),o=n.substring(3,4),c=n.substring(4,5),i+=i,l+=l,o+=o,c+=c),{red:parseInt(i,16),green:parseInt(l,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const Nc={test:xf("#"),parse:w5,transform:Aa.transform},Fr=n=>({test:i=>typeof i=="string"&&i.endsWith(n)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${n}`}),In=Fr("deg"),tn=Fr("%"),rt=Fr("px"),C5=Fr("vh"),k5=Fr("vw"),Fp={...tn,parse:n=>tn.parse(n)/100,transform:n=>tn.transform(n*100)},mi={test:xf("hsl","hue"),parse:Zg("hue","saturation","lightness"),transform:({hue:n,saturation:i,lightness:l,alpha:o=1})=>"hsla("+Math.round(n)+", "+tn.transform(kr(i))+", "+tn.transform(kr(l))+", "+kr(Lr.transform(o))+")"},Yt={test:n=>Aa.test(n)||Nc.test(n)||mi.test(n),parse:n=>Aa.test(n)?Aa.parse(n):mi.test(n)?mi.parse(n):Nc.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Aa.transform(n):mi.transform(n),getAnimatableNone:n=>{const i=Yt.parse(n);return i.alpha=0,Yt.transform(i)}},_5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function z5(n){return isNaN(n)&&typeof n=="string"&&(n.match(bf)?.length||0)+(n.match(_5)?.length||0)>0}const Kg="number",Qg="color",N5="var",V5="var(",Jp="${}",U5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function jr(n){const i=n.toString(),l=[],o={color:[],number:[],var:[]},c=[];let f=0;const g=i.replace(U5,m=>(Yt.test(m)?(o.color.push(f),c.push(Qg),l.push(Yt.parse(m))):m.startsWith(V5)?(o.var.push(f),c.push(N5),l.push(m)):(o.number.push(f),c.push(Kg),l.push(parseFloat(m))),++f,Jp)).split(Jp);return{values:l,split:g,indexes:o,types:c}}function Fg(n){return jr(n).values}function Jg(n){const{split:i,types:l}=jr(n),o=i.length;return c=>{let f="";for(let d=0;d<o;d++)if(f+=i[d],c[d]!==void 0){const g=l[d];g===Kg?f+=kr(c[d]):g===Qg?f+=Yt.transform(c[d]):f+=c[d]}return f}}const B5=n=>typeof n=="number"?0:Yt.test(n)?Yt.getAnimatableNone(n):n;function L5(n){const i=Fg(n);return Jg(n)(i.map(B5))}const ea={test:z5,parse:Fg,createTransformer:Jg,getAnimatableNone:L5};function bc(n,i,l){return l<0&&(l+=1),l>1&&(l-=1),l<1/6?n+(i-n)*6*l:l<1/2?i:l<2/3?n+(i-n)*(2/3-l)*6:n}function j5({hue:n,saturation:i,lightness:l,alpha:o}){n/=360,i/=100,l/=100;let c=0,f=0,d=0;if(!i)c=f=d=l;else{const g=l<.5?l*(1+i):l+i-l*i,m=2*l-g;c=bc(m,g,n+1/3),f=bc(m,g,n),d=bc(m,g,n-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(d*255),alpha:o}}function Uo(n,i){return l=>l>0?i:n}const zt=(n,i,l)=>n+(i-n)*l,xc=(n,i,l)=>{const o=n*n,c=l*(i*i-o)+o;return c<0?0:Math.sqrt(c)},P5=[Nc,Aa,mi],H5=n=>P5.find(i=>i.test(n));function $p(n){const i=H5(n);if(!i)return!1;let l=i.parse(n);return i===mi&&(l=j5(l)),l}const Wp=(n,i)=>{const l=$p(n),o=$p(i);if(!l||!o)return Uo(n,i);const c={...l};return f=>(c.red=xc(l.red,o.red,f),c.green=xc(l.green,o.green,f),c.blue=xc(l.blue,o.blue,f),c.alpha=zt(l.alpha,o.alpha,f),Aa.transform(c))},Vc=new Set(["none","hidden"]);function q5(n,i){return Vc.has(n)?l=>l<=0?n:i:l=>l>=1?i:n}function Y5(n,i){return l=>zt(n,i,l)}function Sf(n){return typeof n=="number"?Y5:typeof n=="string"?vf(n)?Uo:Yt.test(n)?Wp:Z5:Array.isArray(n)?$g:typeof n=="object"?Yt.test(n)?Wp:G5:Uo}function $g(n,i){const l=[...n],o=l.length,c=n.map((f,d)=>Sf(f)(f,i[d]));return f=>{for(let d=0;d<o;d++)l[d]=c[d](f);return l}}function G5(n,i){const l={...n,...i},o={};for(const c in l)n[c]!==void 0&&i[c]!==void 0&&(o[c]=Sf(n[c])(n[c],i[c]));return c=>{for(const f in o)l[f]=o[f](c);return l}}function X5(n,i){const l=[],o={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const f=i.types[c],d=n.indexes[f][o[f]],g=n.values[d]??0;l[c]=g,o[f]++}return l}const Z5=(n,i)=>{const l=ea.createTransformer(i),o=jr(n),c=jr(i);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?Vc.has(n)&&!c.values.length||Vc.has(i)&&!o.values.length?q5(n,i):Kr($g(X5(o,c),c.values),l):Uo(n,i)};function Wg(n,i,l){return typeof n=="number"&&typeof i=="number"&&typeof l=="number"?zt(n,i,l):Sf(n)(n,i)}const K5=n=>{const i=({timestamp:l})=>n(l);return{start:(l=!0)=>kt.update(i,l),stop:()=>ta(i),now:()=>ae.isProcessing?ae.timestamp:pe.now()}},Ig=(n,i,l=10)=>{let o="";const c=Math.max(Math.round(i/l),2);for(let f=0;f<c;f++)o+=Math.round(n(f/(c-1))*1e4)/1e4+", ";return`linear(${o.substring(0,o.length-2)})`},Bo=2e4;function Tf(n){let i=0;const l=50;let o=n.next(i);for(;!o.done&&i<Bo;)i+=l,o=n.next(i);return i>=Bo?1/0:i}function Q5(n,i=100,l){const o=l({...n,keyframes:[0,i]}),c=Math.min(Tf(o),Bo);return{type:"keyframes",ease:f=>o.next(c*f).value/i,duration:Ie(c)}}const F5=5;function ty(n,i,l){const o=Math.max(i-F5,0);return zg(l-n(o),i-o)}const Bt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Sc=.001;function J5({duration:n=Bt.duration,bounce:i=Bt.bounce,velocity:l=Bt.velocity,mass:o=Bt.mass}){let c,f,d=1-i;d=En(Bt.minDamping,Bt.maxDamping,d),n=En(Bt.minDuration,Bt.maxDuration,Ie(n)),d<1?(c=h=>{const y=h*d,b=y*n,x=y-l,D=Uc(h,d),E=Math.exp(-b);return Sc-x/D*E},f=h=>{const b=h*d*n,x=b*l+l,D=Math.pow(d,2)*Math.pow(h,2)*n,E=Math.exp(-b),O=Uc(Math.pow(h,2),d);return(-c(h)+Sc>0?-1:1)*((x-D)*E)/O}):(c=h=>{const y=Math.exp(-h*n),b=(h-l)*n+1;return-Sc+y*b},f=h=>{const y=Math.exp(-h*n),b=(l-h)*(n*n);return y*b});const g=5/n,m=W5(c,f,g);if(n=We(n),isNaN(m))return{stiffness:Bt.stiffness,damping:Bt.damping,duration:n};{const h=Math.pow(m,2)*o;return{stiffness:h,damping:d*2*Math.sqrt(o*h),duration:n}}}const $5=12;function W5(n,i,l){let o=l;for(let c=1;c<$5;c++)o=o-n(o)/i(o);return o}function Uc(n,i){return n*Math.sqrt(1-i*i)}const I5=["duration","bounce"],tS=["stiffness","damping","mass"];function Ip(n,i){return i.some(l=>n[l]!==void 0)}function eS(n){let i={velocity:Bt.velocity,stiffness:Bt.stiffness,damping:Bt.damping,mass:Bt.mass,isResolvedFromDuration:!1,...n};if(!Ip(n,tS)&&Ip(n,I5))if(n.visualDuration){const l=n.visualDuration,o=2*Math.PI/(l*1.2),c=o*o,f=2*En(.05,1,1-(n.bounce||0))*Math.sqrt(c);i={...i,mass:Bt.mass,stiffness:c,damping:f}}else{const l=J5(n);i={...i,...l,mass:Bt.mass},i.isResolvedFromDuration=!0}return i}function Lo(n=Bt.visualDuration,i=Bt.bounce){const l=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:i}:n;let{restSpeed:o,restDelta:c}=l;const f=l.keyframes[0],d=l.keyframes[l.keyframes.length-1],g={done:!1,value:f},{stiffness:m,damping:h,mass:y,duration:b,velocity:x,isResolvedFromDuration:D}=eS({...l,velocity:-Ie(l.velocity||0)}),E=x||0,O=h/(2*Math.sqrt(m*y)),N=d-f,w=Ie(Math.sqrt(m/y)),H=Math.abs(N)<5;o||(o=H?Bt.restSpeed.granular:Bt.restSpeed.default),c||(c=H?Bt.restDelta.granular:Bt.restDelta.default);let B;if(O<1){const q=Uc(w,O);B=I=>{const lt=Math.exp(-O*w*I);return d-lt*((E+O*w*N)/q*Math.sin(q*I)+N*Math.cos(q*I))}}else if(O===1)B=q=>d-Math.exp(-w*q)*(N+(E+w*N)*q);else{const q=w*Math.sqrt(O*O-1);B=I=>{const lt=Math.exp(-O*w*I),F=Math.min(q*I,300);return d-lt*((E+O*w*N)*Math.sinh(F)+q*N*Math.cosh(F))/q}}const K={calculatedDuration:D&&b||null,next:q=>{const I=B(q);if(D)g.done=q>=b;else{let lt=q===0?E:0;O<1&&(lt=q===0?We(E):ty(B,q,I));const F=Math.abs(lt)<=o,at=Math.abs(d-I)<=c;g.done=F&&at}return g.value=g.done?d:I,g},toString:()=>{const q=Math.min(Tf(K),Bo),I=Ig(lt=>K.next(q*lt).value,q,30);return q+"ms "+I},toTransition:()=>{}};return K}Lo.applyToOptions=n=>{const i=Q5(n,100,Lo);return n.ease=i.ease,n.duration=We(i.duration),n.type="keyframes",n};function Bc({keyframes:n,velocity:i=0,power:l=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:d,min:g,max:m,restDelta:h=.5,restSpeed:y}){const b=n[0],x={done:!1,value:b},D=F=>g!==void 0&&F<g||m!==void 0&&F>m,E=F=>g===void 0?m:m===void 0||Math.abs(g-F)<Math.abs(m-F)?g:m;let O=l*i;const N=b+O,w=d===void 0?N:d(N);w!==N&&(O=w-b);const H=F=>-O*Math.exp(-F/o),B=F=>w+H(F),K=F=>{const at=H(F),Dt=B(F);x.done=Math.abs(at)<=h,x.value=x.done?w:Dt};let q,I;const lt=F=>{D(x.value)&&(q=F,I=Lo({keyframes:[x.value,E(x.value)],velocity:ty(B,F,x.value),damping:c,stiffness:f,restDelta:h,restSpeed:y}))};return lt(0),{calculatedDuration:null,next:F=>{let at=!1;return!I&&q===void 0&&(at=!0,K(F),lt(F)),q!==void 0&&F>=q?I.next(F-q):(!at&&K(F),x)}}}function nS(n,i,l){const o=[],c=l||On.mix||Wg,f=n.length-1;for(let d=0;d<f;d++){let g=c(n[d],n[d+1]);if(i){const m=Array.isArray(i)?i[d]||Le:i;g=Kr(m,g)}o.push(g)}return o}function aS(n,i,{clamp:l=!0,ease:o,mixer:c}={}){const f=n.length;if(df(f===i.length),f===1)return()=>i[0];if(f===2&&i[0]===i[1])return()=>i[1];const d=n[0]===n[1];n[0]>n[f-1]&&(n=[...n].reverse(),i=[...i].reverse());const g=nS(i,o,c),m=g.length,h=y=>{if(d&&y<n[0])return i[0];let b=0;if(m>1)for(;b<n.length-2&&!(y<n[b+1]);b++);const x=Br(n[b],n[b+1],y);return g[b](x)};return l?y=>h(En(n[0],n[f-1],y)):h}function iS(n,i){const l=n[n.length-1];for(let o=1;o<=i;o++){const c=Br(0,i,o);n.push(zt(l,1,c))}}function rS(n){const i=[0];return iS(i,n.length-1),i}function lS(n,i){return n.map(l=>l*i)}function oS(n,i){return n.map(()=>i||qg).splice(0,n.length-1)}function _r({duration:n=300,keyframes:i,times:l,ease:o="easeInOut"}){const c=v5(o)?o.map(Qp):Qp(o),f={done:!1,value:i[0]},d=lS(l&&l.length===i.length?l:rS(i),n),g=aS(d,i,{ease:Array.isArray(c)?c:oS(i,c)});return{calculatedDuration:n,next:m=>(f.value=g(m),f.done=m>=n,f)}}const sS=n=>n!==null;function Af(n,{repeat:i,repeatType:l="loop"},o,c=1){const f=n.filter(sS),g=c<0||i&&l!=="loop"&&i%2===1?0:f.length-1;return!g||o===void 0?f[g]:o}const uS={decay:Bc,inertia:Bc,tween:_r,keyframes:_r,spring:Lo};function ey(n){typeof n.type=="string"&&(n.type=uS[n.type])}class Ef{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,l){return this.finished.then(i,l)}}const cS=n=>n/100;class Of extends Ef{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:l}=this.options;l&&l.updatedAt!==pe.now()&&this.tick(pe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;ey(i);const{type:l=_r,repeat:o=0,repeatDelay:c=0,repeatType:f,velocity:d=0}=i;let{keyframes:g}=i;const m=l||_r;m!==_r&&typeof g[0]!="number"&&(this.mixKeyframes=Kr(cS,Wg(g[0],g[1])),g=[0,100]);const h=m({...i,keyframes:g});f==="mirror"&&(this.mirroredGenerator=m({...i,keyframes:[...g].reverse(),velocity:-d})),h.calculatedDuration===null&&(h.calculatedDuration=Tf(h));const{calculatedDuration:y}=h;this.calculatedDuration=y,this.resolvedDuration=y+c,this.totalDuration=this.resolvedDuration*(o+1)-c,this.generator=h}updateTime(i){const l=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=l}tick(i,l=!1){const{generator:o,totalDuration:c,mixKeyframes:f,mirroredGenerator:d,resolvedDuration:g,calculatedDuration:m}=this;if(this.startTime===null)return o.next(0);const{delay:h=0,keyframes:y,repeat:b,repeatType:x,repeatDelay:D,type:E,onUpdate:O,finalKeyframe:N}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),l?this.currentTime=i:this.updateTime(i);const w=this.currentTime-h*(this.playbackSpeed>=0?1:-1),H=this.playbackSpeed>=0?w<0:w>c;this.currentTime=Math.max(w,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let B=this.currentTime,K=o;if(b){const F=Math.min(this.currentTime,c)/g;let at=Math.floor(F),Dt=F%1;!Dt&&F>=1&&(Dt=1),Dt===1&&at--,at=Math.min(at,b+1),!!(at%2)&&(x==="reverse"?(Dt=1-Dt,D&&(Dt-=D/g)):x==="mirror"&&(K=d)),B=En(0,1,Dt)*g}const q=H?{done:!1,value:y[0]}:K.next(B);f&&(q.value=f(q.value));let{done:I}=q;!H&&m!==null&&(I=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const lt=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return lt&&E!==Bc&&(q.value=Af(y,this.options,N,this.speed)),O&&O(q.value),lt&&this.finish(),q}then(i,l){return this.finished.then(i,l)}get duration(){return Ie(this.calculatedDuration)}get time(){return Ie(this.currentTime)}set time(i){i=We(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(i){this.updateTime(pe.now());const l=this.playbackSpeed!==i;this.playbackSpeed=i,l&&(this.time=Ie(this.currentTime))}play(){if(this.isStopped)return;const{driver:i=K5,startTime:l}=this.options;this.driver||(this.driver=i(c=>this.tick(c))),this.options.onPlay?.();const o=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=o):this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime||(this.startTime=l??o),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(pe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),i.observe(this)}}function fS(n){for(let i=1;i<n.length;i++)n[i]??(n[i]=n[i-1])}const Ea=n=>n*180/Math.PI,Lc=n=>{const i=Ea(Math.atan2(n[1],n[0]));return jc(i)},dS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Lc,rotateZ:Lc,skewX:n=>Ea(Math.atan(n[1])),skewY:n=>Ea(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},jc=n=>(n=n%360,n<0&&(n+=360),n),t0=Lc,e0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),n0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),hS={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:e0,scaleY:n0,scale:n=>(e0(n)+n0(n))/2,rotateX:n=>jc(Ea(Math.atan2(n[6],n[5]))),rotateY:n=>jc(Ea(Math.atan2(-n[2],n[0]))),rotateZ:t0,rotate:t0,skewX:n=>Ea(Math.atan(n[4])),skewY:n=>Ea(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Pc(n){return n.includes("scale")?1:0}function Hc(n,i){if(!n||n==="none")return Pc(i);const l=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let o,c;if(l)o=hS,c=l;else{const g=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);o=dS,c=g}if(!c)return Pc(i);const f=o[i],d=c[1].split(",").map(pS);return typeof f=="function"?f(d):d[f]}const mS=(n,i)=>{const{transform:l="none"}=getComputedStyle(n);return Hc(l,i)};function pS(n){return parseFloat(n.trim())}const Ei=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Oi=new Set(Ei),a0=n=>n===Ai||n===rt,gS=new Set(["x","y","z"]),yS=Ei.filter(n=>!gS.has(n));function vS(n){const i=[];return yS.forEach(l=>{const o=n.getValue(l);o!==void 0&&(i.push([l,o.get()]),o.set(l.startsWith("scale")?1:0))}),i}const Oa={width:({x:n},{paddingLeft:i="0",paddingRight:l="0"})=>n.max-n.min-parseFloat(i)-parseFloat(l),height:({y:n},{paddingTop:i="0",paddingBottom:l="0"})=>n.max-n.min-parseFloat(i)-parseFloat(l),top:(n,{top:i})=>parseFloat(i),left:(n,{left:i})=>parseFloat(i),bottom:({y:n},{top:i})=>parseFloat(i)+(n.max-n.min),right:({x:n},{left:i})=>parseFloat(i)+(n.max-n.min),x:(n,{transform:i})=>Hc(i,"x"),y:(n,{transform:i})=>Hc(i,"y")};Oa.translateX=Oa.x;Oa.translateY=Oa.y;const Da=new Set;let qc=!1,Yc=!1,Gc=!1;function ny(){if(Yc){const n=Array.from(Da).filter(o=>o.needsMeasurement),i=new Set(n.map(o=>o.element)),l=new Map;i.forEach(o=>{const c=vS(o);c.length&&(l.set(o,c),o.render())}),n.forEach(o=>o.measureInitialState()),i.forEach(o=>{o.render();const c=l.get(o);c&&c.forEach(([f,d])=>{o.getValue(f)?.set(d)})}),n.forEach(o=>o.measureEndState()),n.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}Yc=!1,qc=!1,Da.forEach(n=>n.complete(Gc)),Da.clear()}function ay(){Da.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Yc=!0)})}function bS(){Gc=!0,ay(),ny(),Gc=!1}class Df{constructor(i,l,o,c,f,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=l,this.name=o,this.motionValue=c,this.element=f,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Da.add(this),qc||(qc=!0,kt.read(ay),kt.resolveKeyframes(ny))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:l,element:o,motionValue:c}=this;if(i[0]===null){const f=c?.get(),d=i[i.length-1];if(f!==void 0)i[0]=f;else if(o&&l){const g=o.readValue(l,d);g!=null&&(i[0]=g)}i[0]===void 0&&(i[0]=d),c&&f===void 0&&c.set(i[0])}fS(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Da.delete(this)}cancel(){this.state==="scheduled"&&(Da.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const xS=n=>n.startsWith("--");function SS(n,i,l){xS(i)?n.style.setProperty(i,l):n.style[i]=l}const TS=hf(()=>window.ScrollTimeline!==void 0),AS={};function ES(n,i){const l=hf(n);return()=>AS[i]??l()}const iy=ES(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rr=([n,i,l,o])=>`cubic-bezier(${n}, ${i}, ${l}, ${o})`,i0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Rr([0,.65,.55,1]),circOut:Rr([.55,0,1,.45]),backIn:Rr([.31,.01,.66,-.59]),backOut:Rr([.33,1.53,.69,.99])};function ry(n,i){if(n)return typeof n=="function"?iy()?Ig(n,i):"ease-out":Yg(n)?Rr(n):Array.isArray(n)?n.map(l=>ry(l,i)||i0.easeOut):i0[n]}function OS(n,i,l,{delay:o=0,duration:c=300,repeat:f=0,repeatType:d="loop",ease:g="easeOut",times:m}={},h=void 0){const y={[i]:l};m&&(y.offset=m);const b=ry(g,c);Array.isArray(b)&&(y.easing=b);const x={delay:o,duration:c,easing:Array.isArray(b)?"linear":b,fill:"both",iterations:f+1,direction:d==="reverse"?"alternate":"normal"};return h&&(x.pseudoElement=h),n.animate(y,x)}function ly(n){return typeof n=="function"&&"applyToOptions"in n}function DS({type:n,...i}){return ly(n)&&iy()?n.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class MS extends Ef{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,!i)return;const{element:l,name:o,keyframes:c,pseudoElement:f,allowFlatten:d=!1,finalKeyframe:g,onComplete:m}=i;this.isPseudoElement=!!f,this.allowFlatten=d,this.options=i,df(typeof i.type!="string");const h=DS(i);this.animation=OS(l,o,c,h,f),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const y=Af(c,this.options,g,this.speed);this.updateMotionValue?this.updateMotionValue(y):SS(l,o,y),this.animation.cancel()}m?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const i=this.animation.effect?.getComputedTiming?.().duration||0;return Ie(Number(i))}get time(){return Ie(Number(this.animation.currentTime)||0)}set time(i){this.finishedTime=null,this.animation.currentTime=We(i)}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(i){this.animation.startTime=i}attachTimeline({timeline:i,observe:l}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,i&&TS()?(this.animation.timeline=i,Le):l(this)}}const oy={anticipate:jg,backInOut:Lg,circInOut:Hg};function RS(n){return n in oy}function wS(n){typeof n.ease=="string"&&RS(n.ease)&&(n.ease=oy[n.ease])}const r0=10;class CS extends MS{constructor(i){wS(i),ey(i),super(i),i.startTime&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:l,onUpdate:o,onComplete:c,element:f,...d}=this.options;if(!l)return;if(i!==void 0){l.set(i);return}const g=new Of({...d,autoplay:!1}),m=We(this.finishedTime??this.time);l.setWithVelocity(g.sample(m-r0).value,g.sample(m).value,r0),g.stop()}}const l0=(n,i)=>i==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ea.test(n)||n==="0")&&!n.startsWith("url("));function kS(n){const i=n[0];if(n.length===1)return!0;for(let l=0;l<n.length;l++)if(n[l]!==i)return!0}function _S(n,i,l,o){const c=n[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const f=n[n.length-1],d=l0(c,i),g=l0(f,i);return!d||!g?!1:kS(n)||(l==="spring"||ly(l))&&o}const zS=new Set(["opacity","clipPath","filter","transform"]),NS=hf(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function VS(n){const{motionValue:i,name:l,repeatDelay:o,repeatType:c,damping:f,type:d}=n;if(!(i?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:m,transformTemplate:h}=i.owner.getProps();return NS()&&l&&zS.has(l)&&(l!=="transform"||!h)&&!m&&!o&&c!=="mirror"&&f!==0&&d!=="inertia"}const US=40;class BS extends Ef{constructor({autoplay:i=!0,delay:l=0,type:o="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:d="loop",keyframes:g,name:m,motionValue:h,element:y,...b}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=pe.now();const x={autoplay:i,delay:l,type:o,repeat:c,repeatDelay:f,repeatType:d,name:m,motionValue:h,element:y,...b},D=y?.KeyframeResolver||Df;this.keyframeResolver=new D(g,(E,O,N)=>this.onKeyframesResolved(E,O,x,!N),m,h,y),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(i,l,o,c){this.keyframeResolver=void 0;const{name:f,type:d,velocity:g,delay:m,isHandoff:h,onUpdate:y}=o;this.resolvedAt=pe.now(),_S(i,f,d,g)||((On.instantAnimations||!m)&&y?.(Af(i,o,l)),i[0]=i[i.length-1],o.duration=0,o.repeat=0);const x={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>US?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:l,...o,keyframes:i},D=!h&&VS(x)?new CS({...x,element:x.motionValue.owner.current}):new Of(x);D.finished.then(()=>this.notifyFinished()).catch(Le),this.pendingTimeline&&(this.stopTimeline=D.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=D}get finished(){return this._animation?this.animation.finished:this._finished}then(i,l){return this.finished.finally(i).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),bS()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const LS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jS(n){const i=LS.exec(n);if(!i)return[,];const[,l,o,c]=i;return[`--${l??o}`,c]}function sy(n,i,l=1){const[o,c]=jS(n);if(!o)return;const f=window.getComputedStyle(i).getPropertyValue(o);if(f){const d=f.trim();return Cg(d)?parseFloat(d):d}return vf(c)?sy(c,i,l+1):c}function Mf(n,i){return n?.[i]??n?.default??n}const uy=new Set(["width","height","top","left","right","bottom",...Ei]),PS={test:n=>n==="auto",parse:n=>n},cy=n=>i=>i.test(n),fy=[Ai,rt,tn,In,k5,C5,PS],o0=n=>fy.find(cy(n));function HS(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||_g(n):!0}const qS=new Set(["brightness","contrast","saturate","opacity"]);function YS(n){const[i,l]=n.slice(0,-1).split("(");if(i==="drop-shadow")return n;const[o]=l.match(bf)||[];if(!o)return n;const c=l.replace(o,"");let f=qS.has(i)?1:0;return o!==l&&(f*=100),i+"("+f+c+")"}const GS=/\b([a-z-]*)\(.*?\)/gu,Xc={...ea,getAnimatableNone:n=>{const i=n.match(GS);return i?i.map(YS).join(" "):n}},s0={...Ai,transform:Math.round},XS={rotate:In,rotateX:In,rotateY:In,rotateZ:In,scale:bo,scaleX:bo,scaleY:bo,scaleZ:bo,skew:In,skewX:In,skewY:In,distance:rt,translateX:rt,translateY:rt,translateZ:rt,x:rt,y:rt,z:rt,perspective:rt,transformPerspective:rt,opacity:Lr,originX:Fp,originY:Fp,originZ:rt},Rf={borderWidth:rt,borderTopWidth:rt,borderRightWidth:rt,borderBottomWidth:rt,borderLeftWidth:rt,borderRadius:rt,radius:rt,borderTopLeftRadius:rt,borderTopRightRadius:rt,borderBottomRightRadius:rt,borderBottomLeftRadius:rt,width:rt,maxWidth:rt,height:rt,maxHeight:rt,top:rt,right:rt,bottom:rt,left:rt,padding:rt,paddingTop:rt,paddingRight:rt,paddingBottom:rt,paddingLeft:rt,margin:rt,marginTop:rt,marginRight:rt,marginBottom:rt,marginLeft:rt,backgroundPositionX:rt,backgroundPositionY:rt,...XS,zIndex:s0,fillOpacity:Lr,strokeOpacity:Lr,numOctaves:s0},ZS={...Rf,color:Yt,backgroundColor:Yt,outlineColor:Yt,fill:Yt,stroke:Yt,borderColor:Yt,borderTopColor:Yt,borderRightColor:Yt,borderBottomColor:Yt,borderLeftColor:Yt,filter:Xc,WebkitFilter:Xc},dy=n=>ZS[n];function hy(n,i){let l=dy(n);return l!==Xc&&(l=ea),l.getAnimatableNone?l.getAnimatableNone(i):void 0}const KS=new Set(["auto","none","0"]);function QS(n,i,l){let o=0,c;for(;o<n.length&&!c;){const f=n[o];typeof f=="string"&&!KS.has(f)&&jr(f).values.length&&(c=n[o]),o++}if(c&&l)for(const f of i)n[f]=hy(l,c)}class FS extends Df{constructor(i,l,o,c,f){super(i,l,o,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:l,name:o}=this;if(!l||!l.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let h=i[m];if(typeof h=="string"&&(h=h.trim(),vf(h))){const y=sy(h,l.current);y!==void 0&&(i[m]=y),m===i.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!uy.has(o)||i.length!==2)return;const[c,f]=i,d=o0(c),g=o0(f);if(d!==g)if(a0(d)&&a0(g))for(let m=0;m<i.length;m++){const h=i[m];typeof h=="string"&&(i[m]=parseFloat(h))}else Oa[o]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:l}=this,o=[];for(let c=0;c<i.length;c++)(i[c]===null||HS(i[c]))&&o.push(c);o.length&&QS(i,o,l)}measureInitialState(){const{element:i,unresolvedKeyframes:l,name:o}=this;if(!i||!i.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oa[o](i.measureViewportBox(),window.getComputedStyle(i.current)),l[0]=this.measuredOrigin;const c=l[l.length-1];c!==void 0&&i.getValue(o,c).jump(c,!1)}measureEndState(){const{element:i,name:l,unresolvedKeyframes:o}=this;if(!i||!i.current)return;const c=i.getValue(l);c&&c.jump(this.measuredOrigin,!1);const f=o.length-1,d=o[f];o[f]=Oa[l](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),this.removedTransforms?.length&&this.removedTransforms.forEach(([g,m])=>{i.getValue(g).set(m)}),this.resolveNoneKeyframes()}}function JS(n,i,l){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let o=document;const c=l?.[n]??o.querySelectorAll(n);return c?Array.from(c):[]}return Array.from(n)}const my=(n,i)=>i&&typeof n=="number"?i.transform(n):n;function $S(n){return kg(n)&&"offsetHeight"in n}const u0=30,WS=n=>!isNaN(parseFloat(n));class IS{constructor(i,l={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,c=!0)=>{const f=pe.now();if(this.updatedAt!==f&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty();c&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(i),this.owner=l.owner}setCurrent(i){this.current=i,this.updatedAt=pe.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=WS(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,l){this.events[i]||(this.events[i]=new mf);const o=this.events[i].add(l);return i==="change"?()=>{o(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,l){this.passiveEffect=i,this.stopPassiveEffect=l}set(i,l=!0){!l||!this.passiveEffect?this.updateAndNotify(i,l):this.passiveEffect(i,this.updateAndNotify)}setWithVelocity(i,l,o){this.set(l),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-o}jump(i,l=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,l&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=pe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>u0)return 0;const l=Math.min(this.updatedAt-this.prevUpdatedAt,u0);return zg(parseFloat(this.current)-parseFloat(this.prevFrameValue),l)}start(i){return this.stop(),new Promise(l=>{this.hasAnimated=!0,this.animation=i(l),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bi(n,i){return new IS(n,i)}const{schedule:wf}=Gg(queueMicrotask,!1),Ye={x:!1,y:!1};function py(){return Ye.x||Ye.y}function t2(n){return n==="x"||n==="y"?Ye[n]?null:(Ye[n]=!0,()=>{Ye[n]=!1}):Ye.x||Ye.y?null:(Ye.x=Ye.y=!0,()=>{Ye.x=Ye.y=!1})}function gy(n,i){const l=JS(n),o=new AbortController,c={passive:!0,...i,signal:o.signal};return[l,c,()=>o.abort()]}function c0(n){return!(n.pointerType==="touch"||py())}function e2(n,i,l={}){const[o,c,f]=gy(n,l),d=g=>{if(!c0(g))return;const{target:m}=g,h=i(m,g);if(typeof h!="function"||!m)return;const y=b=>{c0(b)&&(h(b),m.removeEventListener("pointerleave",y))};m.addEventListener("pointerleave",y,c)};return o.forEach(g=>{g.addEventListener("pointerenter",d,c)}),f}const yy=(n,i)=>i?n===i?!0:yy(n,i.parentElement):!1,Cf=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,n2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function a2(n){return n2.has(n.tagName)||n.tabIndex!==-1}const _o=new WeakSet;function f0(n){return i=>{i.key==="Enter"&&n(i)}}function Tc(n,i){n.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const i2=(n,i)=>{const l=n.currentTarget;if(!l)return;const o=f0(()=>{if(_o.has(l))return;Tc(l,"down");const c=f0(()=>{Tc(l,"up")}),f=()=>Tc(l,"cancel");l.addEventListener("keyup",c,i),l.addEventListener("blur",f,i)});l.addEventListener("keydown",o,i),l.addEventListener("blur",()=>l.removeEventListener("keydown",o),i)};function d0(n){return Cf(n)&&!py()}function r2(n,i,l={}){const[o,c,f]=gy(n,l),d=g=>{const m=g.currentTarget;if(!d0(g))return;_o.add(m);const h=i(m,g),y=(D,E)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",x),_o.has(m)&&_o.delete(m),d0(D)&&typeof h=="function"&&h(D,{success:E})},b=D=>{y(D,m===window||m===document||l.useGlobalTarget||yy(m,D.target))},x=D=>{y(D,!1)};window.addEventListener("pointerup",b,c),window.addEventListener("pointercancel",x,c)};return o.forEach(g=>{(l.useGlobalTarget?window:g).addEventListener("pointerdown",d,c),$S(g)&&(g.addEventListener("focus",h=>i2(h,c)),!a2(g)&&!g.hasAttribute("tabindex")&&(g.tabIndex=0))}),f}function vy(n){return kg(n)&&"ownerSVGElement"in n}function l2(n){return vy(n)&&n.tagName==="svg"}const oe=n=>!!(n&&n.getVelocity),o2=[...fy,Yt,ea],s2=n=>o2.find(cy(n)),by=k.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function u2(n=!0){const i=k.useContext(uf);if(i===null)return[!0,null];const{isPresent:l,onExitComplete:o,register:c}=i,f=k.useId();k.useEffect(()=>{if(n)return c(f)},[n]);const d=k.useCallback(()=>n&&o&&o(f),[f,o,n]);return!l&&o?[!1,d]:[!0]}const xy=k.createContext({strict:!1}),h0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},xi={};for(const n in h0)xi[n]={isEnabled:i=>h0[n].some(l=>!!i[l])};function c2(n){for(const i in n)xi[i]={...xi[i],...n[i]}}const f2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function jo(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||f2.has(n)}let Sy=n=>!jo(n);function d2(n){typeof n=="function"&&(Sy=i=>i.startsWith("on")?!jo(i):n(i))}try{d2(require("@emotion/is-prop-valid").default)}catch{}function h2(n,i,l){const o={};for(const c in n)c==="values"&&typeof n.values=="object"||(Sy(c)||l===!0&&jo(c)||!i&&!jo(c)||n.draggable&&c.startsWith("onDrag"))&&(o[c]=n[c]);return o}const Go=k.createContext({});function Xo(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Pr(n){return typeof n=="string"||Array.isArray(n)}const kf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],_f=["initial",...kf];function Zo(n){return Xo(n.animate)||_f.some(i=>Pr(n[i]))}function Ty(n){return!!(Zo(n)||n.variants)}function m2(n,i){if(Zo(n)){const{initial:l,animate:o}=n;return{initial:l===!1||Pr(l)?l:void 0,animate:Pr(o)?o:void 0}}return n.inherit!==!1?i:{}}function p2(n){const{initial:i,animate:l}=m2(n,k.useContext(Go));return k.useMemo(()=>({initial:i,animate:l}),[m0(i),m0(l)])}function m0(n){return Array.isArray(n)?n.join(" "):n}const Hr={};function g2(n){for(const i in n)Hr[i]=n[i],yf(i)&&(Hr[i].isCSSVariable=!0)}function Ay(n,{layout:i,layoutId:l}){return Oi.has(n)||n.startsWith("origin")||(i||l!==void 0)&&(!!Hr[n]||n==="opacity")}const y2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},v2=Ei.length;function b2(n,i,l){let o="",c=!0;for(let f=0;f<v2;f++){const d=Ei[f],g=n[d];if(g===void 0)continue;let m=!0;if(typeof g=="number"?m=g===(d.startsWith("scale")?1:0):m=parseFloat(g)===0,!m||l){const h=my(g,Rf[d]);if(!m){c=!1;const y=y2[d]||d;o+=`${y}(${h}) `}l&&(i[d]=h)}}return o=o.trim(),l?o=l(i,c?"":o):c&&(o="none"),o}function zf(n,i,l){const{style:o,vars:c,transformOrigin:f}=n;let d=!1,g=!1;for(const m in i){const h=i[m];if(Oi.has(m)){d=!0;continue}else if(yf(m)){c[m]=h;continue}else{const y=my(h,Rf[m]);m.startsWith("origin")?(g=!0,f[m]=y):o[m]=y}}if(i.transform||(d||l?o.transform=b2(i,n.transform,l):o.transform&&(o.transform="none")),g){const{originX:m="50%",originY:h="50%",originZ:y=0}=f;o.transformOrigin=`${m} ${h} ${y}`}}const Nf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ey(n,i,l){for(const o in i)!oe(i[o])&&!Ay(o,l)&&(n[o]=i[o])}function x2({transformTemplate:n},i){return k.useMemo(()=>{const l=Nf();return zf(l,i,n),Object.assign({},l.vars,l.style)},[i])}function S2(n,i){const l=n.style||{},o={};return Ey(o,l,n),Object.assign(o,x2(n,i)),o}function T2(n,i){const l={},o=S2(n,i);return n.drag&&n.dragListener!==!1&&(l.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(l.tabIndex=0),l.style=o,l}const A2={offset:"stroke-dashoffset",array:"stroke-dasharray"},E2={offset:"strokeDashoffset",array:"strokeDasharray"};function O2(n,i,l=1,o=0,c=!0){n.pathLength=1;const f=c?A2:E2;n[f.offset]=rt.transform(-o);const d=rt.transform(i),g=rt.transform(l);n[f.array]=`${d} ${g}`}function Oy(n,{attrX:i,attrY:l,attrScale:o,pathLength:c,pathSpacing:f=1,pathOffset:d=0,...g},m,h,y){if(zf(n,g,h),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:b,style:x}=n;b.transform&&(x.transform=b.transform,delete b.transform),(x.transform||b.transformOrigin)&&(x.transformOrigin=b.transformOrigin??"50% 50%",delete b.transformOrigin),x.transform&&(x.transformBox=y?.transformBox??"fill-box",delete b.transformBox),i!==void 0&&(b.x=i),l!==void 0&&(b.y=l),o!==void 0&&(b.scale=o),c!==void 0&&O2(b,c,f,d,!1)}const Dy=()=>({...Nf(),attrs:{}}),My=n=>typeof n=="string"&&n.toLowerCase()==="svg";function D2(n,i,l,o){const c=k.useMemo(()=>{const f=Dy();return Oy(f,i,My(o),n.transformTemplate,n.style),{...f.attrs,style:{...f.style}}},[i]);if(n.style){const f={};Ey(f,n.style,n),c.style={...f,...c.style}}return c}const M2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Vf(n){return typeof n!="string"||n.includes("-")?!1:!!(M2.indexOf(n)>-1||/[A-Z]/u.test(n))}function R2(n,i,l,{latestValues:o},c,f=!1){const g=(Vf(n)?D2:T2)(i,o,c,n),m=h2(i,typeof n=="string",f),h=n!==k.Fragment?{...m,...g,ref:l}:{},{children:y}=i,b=k.useMemo(()=>oe(y)?y.get():y,[y]);return k.createElement(n,{...h,children:b})}function p0(n){const i=[{},{}];return n?.values.forEach((l,o)=>{i[0][o]=l.get(),i[1][o]=l.getVelocity()}),i}function Uf(n,i,l,o){if(typeof i=="function"){const[c,f]=p0(o);i=i(l!==void 0?l:n.custom,c,f)}if(typeof i=="string"&&(i=n.variants&&n.variants[i]),typeof i=="function"){const[c,f]=p0(o);i=i(l!==void 0?l:n.custom,c,f)}return i}function zo(n){return oe(n)?n.get():n}function w2({scrapeMotionValuesFromProps:n,createRenderState:i},l,o,c){return{latestValues:C2(l,o,c,n),renderState:i()}}function C2(n,i,l,o){const c={},f=o(n,{});for(const x in f)c[x]=zo(f[x]);let{initial:d,animate:g}=n;const m=Zo(n),h=Ty(n);i&&h&&!m&&n.inherit!==!1&&(d===void 0&&(d=i.initial),g===void 0&&(g=i.animate));let y=l?l.initial===!1:!1;y=y||d===!1;const b=y?g:d;if(b&&typeof b!="boolean"&&!Xo(b)){const x=Array.isArray(b)?b:[b];for(let D=0;D<x.length;D++){const E=Uf(n,x[D]);if(E){const{transitionEnd:O,transition:N,...w}=E;for(const H in w){let B=w[H];if(Array.isArray(B)){const K=y?B.length-1:0;B=B[K]}B!==null&&(c[H]=B)}for(const H in O)c[H]=O[H]}}}return c}const Ry=n=>(i,l)=>{const o=k.useContext(Go),c=k.useContext(uf),f=()=>w2(n,i,o,c);return l?f():c5(f)};function Bf(n,i,l){const{style:o}=n,c={};for(const f in o)(oe(o[f])||i.style&&oe(i.style[f])||Ay(f,n)||l?.getValue(f)?.liveStyle!==void 0)&&(c[f]=o[f]);return c}const k2=Ry({scrapeMotionValuesFromProps:Bf,createRenderState:Nf});function wy(n,i,l){const o=Bf(n,i,l);for(const c in n)if(oe(n[c])||oe(i[c])){const f=Ei.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[f]=n[c]}return o}const _2=Ry({scrapeMotionValuesFromProps:wy,createRenderState:Dy}),z2=Symbol.for("motionComponentSymbol");function pi(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function N2(n,i,l){return k.useCallback(o=>{o&&n.onMount&&n.onMount(o),i&&(o?i.mount(o):i.unmount()),l&&(typeof l=="function"?l(o):pi(l)&&(l.current=o))},[i])}const Lf=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),V2="framerAppearId",Cy="data-"+Lf(V2),ky=k.createContext({});function U2(n,i,l,o,c){const{visualElement:f}=k.useContext(Go),d=k.useContext(xy),g=k.useContext(uf),m=k.useContext(by).reducedMotion,h=k.useRef(null);o=o||d.renderer,!h.current&&o&&(h.current=o(n,{visualState:i,parent:f,props:l,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:m}));const y=h.current,b=k.useContext(ky);y&&!y.projection&&c&&(y.type==="html"||y.type==="svg")&&B2(h.current,l,c,b);const x=k.useRef(!1);k.useInsertionEffect(()=>{y&&x.current&&y.update(l,g)});const D=l[Cy],E=k.useRef(!!D&&!window.MotionHandoffIsComplete?.(D)&&window.MotionHasOptimisedAnimation?.(D));return f5(()=>{y&&(x.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),E.current&&y.animationState&&y.animationState.animateChanges())}),k.useEffect(()=>{y&&(!E.current&&y.animationState&&y.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(D)}),E.current=!1))}),y}function B2(n,i,l,o){const{layoutId:c,layout:f,drag:d,dragConstraints:g,layoutScroll:m,layoutRoot:h,layoutCrossfade:y}=i;n.projection=new l(n.latestValues,i["data-framer-portal-id"]?void 0:_y(n.parent)),n.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!d||g&&pi(g),visualElement:n,animationType:typeof f=="string"?f:"both",initialPromotionConfig:o,crossfade:y,layoutScroll:m,layoutRoot:h})}function _y(n){if(n)return n.options.allowProjection!==!1?n.projection:_y(n.parent)}function Ac(n,{forwardMotionProps:i=!1}={},l,o){l&&c2(l);const c=Vf(n)?_2:k2;function f(g,m){let h;const y={...k.useContext(by),...g,layoutId:L2(g)},{isStatic:b}=y,x=p2(g),D=c(g,b);if(!b&&sf){j2();const E=P2(y);h=E.MeasureLayout,x.visualElement=U2(n,D,y,o,E.ProjectionNode)}return G.jsxs(Go.Provider,{value:x,children:[h&&x.visualElement?G.jsx(h,{visualElement:x.visualElement,...y}):null,R2(n,g,N2(D,x.visualElement,m),D,b,i)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=k.forwardRef(f);return d[z2]=n,d}function L2({layoutId:n}){const i=k.useContext(wg).id;return i&&n!==void 0?i+"-"+n:n}function j2(n,i){k.useContext(xy).strict}function P2(n){const{drag:i,layout:l}=xi;if(!i&&!l)return{};const o={...i,...l};return{MeasureLayout:i?.isEnabled(n)||l?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function H2(n,i){if(typeof Proxy>"u")return Ac;const l=new Map,o=(f,d)=>Ac(f,d,n,i),c=(f,d)=>o(f,d);return new Proxy(c,{get:(f,d)=>d==="create"?o:(l.has(d)||l.set(d,Ac(d,void 0,n,i)),l.get(d))})}function zy({top:n,left:i,right:l,bottom:o}){return{x:{min:i,max:l},y:{min:n,max:o}}}function q2({x:n,y:i}){return{top:i.min,right:n.max,bottom:i.max,left:n.min}}function Y2(n,i){if(!i)return n;const l=i({x:n.left,y:n.top}),o=i({x:n.right,y:n.bottom});return{top:l.y,left:l.x,bottom:o.y,right:o.x}}function Ec(n){return n===void 0||n===1}function Zc({scale:n,scaleX:i,scaleY:l}){return!Ec(n)||!Ec(i)||!Ec(l)}function Ta(n){return Zc(n)||Ny(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ny(n){return g0(n.x)||g0(n.y)}function g0(n){return n&&n!=="0%"}function Po(n,i,l){const o=n-l,c=i*o;return l+c}function y0(n,i,l,o,c){return c!==void 0&&(n=Po(n,c,o)),Po(n,l,o)+i}function Kc(n,i=0,l=1,o,c){n.min=y0(n.min,i,l,o,c),n.max=y0(n.max,i,l,o,c)}function Vy(n,{x:i,y:l}){Kc(n.x,i.translate,i.scale,i.originPoint),Kc(n.y,l.translate,l.scale,l.originPoint)}const v0=.999999999999,b0=1.0000000000001;function G2(n,i,l,o=!1){const c=l.length;if(!c)return;i.x=i.y=1;let f,d;for(let g=0;g<c;g++){f=l[g],d=f.projectionDelta;const{visualElement:m}=f.options;m&&m.props.style&&m.props.style.display==="contents"||(o&&f.options.layoutScroll&&f.scroll&&f!==f.root&&yi(n,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Vy(n,d)),o&&Ta(f.latestValues)&&yi(n,f.latestValues))}i.x<b0&&i.x>v0&&(i.x=1),i.y<b0&&i.y>v0&&(i.y=1)}function gi(n,i){n.min=n.min+i,n.max=n.max+i}function x0(n,i,l,o,c=.5){const f=zt(n.min,n.max,c);Kc(n,i,l,f,o)}function yi(n,i){x0(n.x,i.x,i.scaleX,i.scale,i.originX),x0(n.y,i.y,i.scaleY,i.scale,i.originY)}function Uy(n,i){return zy(Y2(n.getBoundingClientRect(),i))}function X2(n,i,l){const o=Uy(n,l),{scroll:c}=i;return c&&(gi(o.x,c.offset.x),gi(o.y,c.offset.y)),o}const S0=()=>({translate:0,scale:1,origin:0,originPoint:0}),vi=()=>({x:S0(),y:S0()}),T0=()=>({min:0,max:0}),Pt=()=>({x:T0(),y:T0()}),Qc={current:null},By={current:!1};function Z2(){if(By.current=!0,!!sf)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),i=()=>Qc.current=n.matches;n.addEventListener("change",i),i()}else Qc.current=!1}const K2=new WeakMap;function Q2(n,i,l){for(const o in i){const c=i[o],f=l[o];if(oe(c))n.addValue(o,c);else if(oe(f))n.addValue(o,bi(c,{owner:n}));else if(f!==c)if(n.hasValue(o)){const d=n.getValue(o);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=n.getStaticValue(o);n.addValue(o,bi(d!==void 0?d:c,{owner:n}))}}for(const o in l)i[o]===void 0&&n.removeValue(o);return i}const A0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class F2{scrapeMotionValuesFromProps(i,l,o){return{}}constructor({parent:i,props:l,presenceContext:o,reducedMotionConfig:c,blockInitialAnimation:f,visualState:d},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Df,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=pe.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,kt.render(this.render,!1,!0))};const{latestValues:m,renderState:h}=d;this.latestValues=m,this.baseTarget={...m},this.initialValues=l.initial?{...m}:{},this.renderState=h,this.parent=i,this.props=l,this.presenceContext=o,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.options=g,this.blockInitialAnimation=!!f,this.isControllingVariants=Zo(l),this.isVariantNode=Ty(l),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:y,...b}=this.scrapeMotionValuesFromProps(l,{},this);for(const x in b){const D=b[x];m[x]!==void 0&&oe(D)&&D.set(m[x],!1)}}mount(i){this.current=i,K2.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,o)=>this.bindToMotionValue(o,l)),By.current||Z2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Qc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),ta(this.notifyUpdate),ta(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const l=this.features[i];l&&(l.unmount(),l.isMounted=!1)}this.current=null}bindToMotionValue(i,l){this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)();const o=Oi.has(i);o&&this.onBindTransform&&this.onBindTransform();const c=l.on("change",g=>{this.latestValues[i]=g,this.props.onUpdate&&kt.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),f=l.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,i,l)),this.valueSubscriptions.set(i,()=>{c(),f(),d&&d(),l.owner&&l.stop()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in xi){const l=xi[i];if(!l)continue;const{isEnabled:o,Feature:c}=l;if(!this.features[i]&&c&&o(this.props)&&(this.features[i]=new c(this)),this.features[i]){const f=this.features[i];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Pt()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,l){this.latestValues[i]=l}update(i,l){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=l;for(let o=0;o<A0.length;o++){const c=A0[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,d=i[f];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=Q2(this,this.scrapeMotionValuesFromProps(i,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const l=this.getClosestVariantNode();if(l)return l.variantChildren&&l.variantChildren.add(i),()=>l.variantChildren.delete(i)}addValue(i,l){const o=this.values.get(i);l!==o&&(o&&this.removeValue(i),this.bindToMotionValue(i,l),this.values.set(i,l),this.latestValues[i]=l.get())}removeValue(i){this.values.delete(i);const l=this.valueSubscriptions.get(i);l&&(l(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,l){if(this.props.values&&this.props.values[i])return this.props.values[i];let o=this.values.get(i);return o===void 0&&l!==void 0&&(o=bi(l===null?void 0:l,{owner:this}),this.addValue(i,o)),o}readValue(i,l){let o=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return o!=null&&(typeof o=="string"&&(Cg(o)||_g(o))?o=parseFloat(o):!s2(o)&&ea.test(l)&&(o=hy(i,l)),this.setBaseTarget(i,oe(o)?o.get():o)),oe(o)?o.get():o}setBaseTarget(i,l){this.baseTarget[i]=l}getBaseTarget(i){const{initial:l}=this.props;let o;if(typeof l=="string"||typeof l=="object"){const f=Uf(this.props,l,this.presenceContext?.custom);f&&(o=f[i])}if(l&&o!==void 0)return o;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!oe(c)?c:this.initialValues[i]!==void 0&&o===void 0?void 0:this.baseTarget[i]}on(i,l){return this.events[i]||(this.events[i]=new mf),this.events[i].add(l)}notify(i,...l){this.events[i]&&this.events[i].notify(...l)}scheduleRenderMicrotask(){wf.render(this.render)}}class Ly extends F2{constructor(){super(...arguments),this.KeyframeResolver=FS}sortInstanceNodePosition(i,l){return i.compareDocumentPosition(l)&2?1:-1}getBaseTargetFromProps(i,l){return i.style?i.style[l]:void 0}removeValueFromRenderState(i,{vars:l,style:o}){delete l[i],delete o[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;oe(i)&&(this.childSubscription=i.on("change",l=>{this.current&&(this.current.textContent=`${l}`)}))}}function jy(n,{style:i,vars:l},o,c){const f=n.style;let d;for(d in i)f[d]=i[d];c?.applyProjectionStyles(f,o);for(d in l)f.setProperty(d,l[d])}function J2(n){return window.getComputedStyle(n)}class $2 extends Ly{constructor(){super(...arguments),this.type="html",this.renderInstance=jy}readValueFromInstance(i,l){if(Oi.has(l))return this.projection?.isProjecting?Pc(l):mS(i,l);{const o=J2(i),c=(yf(l)?o.getPropertyValue(l):o[l])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(i,{transformPagePoint:l}){return Uy(i,l)}build(i,l,o){zf(i,l,o.transformTemplate)}scrapeMotionValuesFromProps(i,l,o){return Bf(i,l,o)}}const Py=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function W2(n,i,l,o){jy(n,i,void 0,o);for(const c in i.attrs)n.setAttribute(Py.has(c)?c:Lf(c),i.attrs[c])}class I2 extends Ly{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Pt}getBaseTargetFromProps(i,l){return i[l]}readValueFromInstance(i,l){if(Oi.has(l)){const o=dy(l);return o&&o.default||0}return l=Py.has(l)?l:Lf(l),i.getAttribute(l)}scrapeMotionValuesFromProps(i,l,o){return wy(i,l,o)}build(i,l,o){Oy(i,l,this.isSVGTag,o.transformTemplate,o.style)}renderInstance(i,l,o,c){W2(i,l,o,c)}mount(i){this.isSVGTag=My(i.tagName),super.mount(i)}}const tT=(n,i)=>Vf(n)?new I2(i):new $2(i,{allowProjection:n!==k.Fragment});function qr(n,i,l){const o=n.getProps();return Uf(o,i,l!==void 0?l:o.custom,n)}const Fc=n=>Array.isArray(n);function eT(n,i,l){n.hasValue(i)?n.getValue(i).set(l):n.addValue(i,bi(l))}function nT(n){return Fc(n)?n[n.length-1]||0:n}function aT(n,i){const l=qr(n,i);let{transitionEnd:o={},transition:c={},...f}=l||{};f={...f,...o};for(const d in f){const g=nT(f[d]);eT(n,d,g)}}function iT(n){return!!(oe(n)&&n.add)}function Jc(n,i){const l=n.getValue("willChange");if(iT(l))return l.add(i);if(!l&&On.WillChange){const o=new On.WillChange("auto");n.addValue("willChange",o),o.add(i)}}function Hy(n){return n.props[Cy]}const rT=n=>n!==null;function lT(n,{repeat:i,repeatType:l="loop"},o){const c=n.filter(rT),f=i&&l!=="loop"&&i%2===1?0:c.length-1;return c[f]}const oT={type:"spring",stiffness:500,damping:25,restSpeed:10},sT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),uT={type:"keyframes",duration:.8},cT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fT=(n,{keyframes:i})=>i.length>2?uT:Oi.has(n)?n.startsWith("scale")?sT(i[1]):oT:cT;function dT({when:n,delay:i,delayChildren:l,staggerChildren:o,staggerDirection:c,repeat:f,repeatType:d,repeatDelay:g,from:m,elapsed:h,...y}){return!!Object.keys(y).length}const jf=(n,i,l,o={},c,f)=>d=>{const g=Mf(o,n)||{},m=g.delay||o.delay||0;let{elapsed:h=0}=o;h=h-We(m);const y={keyframes:Array.isArray(l)?l:[null,l],ease:"easeOut",velocity:i.getVelocity(),...g,delay:-h,onUpdate:x=>{i.set(x),g.onUpdate&&g.onUpdate(x)},onComplete:()=>{d(),g.onComplete&&g.onComplete()},name:n,motionValue:i,element:f?void 0:c};dT(g)||Object.assign(y,fT(n,y)),y.duration&&(y.duration=We(y.duration)),y.repeatDelay&&(y.repeatDelay=We(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let b=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(y.duration=0,y.delay===0&&(b=!0)),(On.instantAnimations||On.skipAnimations)&&(b=!0,y.duration=0,y.delay=0),y.allowFlatten=!g.type&&!g.ease,b&&!f&&i.get()!==void 0){const x=lT(y.keyframes,g);if(x!==void 0){kt.update(()=>{y.onUpdate(x),y.onComplete()});return}}return g.isSync?new Of(y):new BS(y)};function hT({protectedKeys:n,needsAnimating:i},l){const o=n.hasOwnProperty(l)&&i[l]!==!0;return i[l]=!1,o}function qy(n,i,{delay:l=0,transitionOverride:o,type:c}={}){let{transition:f=n.getDefaultTransition(),transitionEnd:d,...g}=i;o&&(f=o);const m=[],h=c&&n.animationState&&n.animationState.getState()[c];for(const y in g){const b=n.getValue(y,n.latestValues[y]??null),x=g[y];if(x===void 0||h&&hT(h,y))continue;const D={delay:l,...Mf(f||{},y)},E=b.get();if(E!==void 0&&!b.isAnimating&&!Array.isArray(x)&&x===E&&!D.velocity)continue;let O=!1;if(window.MotionHandoffAnimation){const w=Hy(n);if(w){const H=window.MotionHandoffAnimation(w,y,kt);H!==null&&(D.startTime=H,O=!0)}}Jc(n,y),b.start(jf(y,b,x,n.shouldReduceMotion&&uy.has(y)?{type:!1}:D,n,O));const N=b.animation;N&&m.push(N)}return d&&Promise.all(m).then(()=>{kt.update(()=>{d&&aT(n,d)})}),m}function $c(n,i,l={}){const o=qr(n,i,l.type==="exit"?n.presenceContext?.custom:void 0);let{transition:c=n.getDefaultTransition()||{}}=o||{};l.transitionOverride&&(c=l.transitionOverride);const f=o?()=>Promise.all(qy(n,o,l)):()=>Promise.resolve(),d=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:h=0,staggerChildren:y,staggerDirection:b}=c;return mT(n,i,m,h,y,b,l)}:()=>Promise.resolve(),{when:g}=c;if(g){const[m,h]=g==="beforeChildren"?[f,d]:[d,f];return m().then(()=>h())}else return Promise.all([f(),d(l.delay)])}function mT(n,i,l=0,o=0,c=0,f=1,d){const g=[],m=n.variantChildren.size,h=(m-1)*c,y=typeof o=="function",b=y?x=>o(x,m):f===1?(x=0)=>x*c:(x=0)=>h-x*c;return Array.from(n.variantChildren).sort(pT).forEach((x,D)=>{x.notify("AnimationStart",i),g.push($c(x,i,{...d,delay:l+(y?0:o)+b(D)}).then(()=>x.notify("AnimationComplete",i)))}),Promise.all(g)}function pT(n,i){return n.sortNodePosition(i)}function gT(n,i,l={}){n.notify("AnimationStart",i);let o;if(Array.isArray(i)){const c=i.map(f=>$c(n,f,l));o=Promise.all(c)}else if(typeof i=="string")o=$c(n,i,l);else{const c=typeof i=="function"?qr(n,i,l.custom):i;o=Promise.all(qy(n,c,l))}return o.then(()=>{n.notify("AnimationComplete",i)})}function Yy(n,i){if(!Array.isArray(i))return!1;const l=i.length;if(l!==n.length)return!1;for(let o=0;o<l;o++)if(i[o]!==n[o])return!1;return!0}const yT=_f.length;function Gy(n){if(!n)return;if(!n.isControllingVariants){const l=n.parent?Gy(n.parent)||{}:{};return n.props.initial!==void 0&&(l.initial=n.props.initial),l}const i={};for(let l=0;l<yT;l++){const o=_f[l],c=n.props[o];(Pr(c)||c===!1)&&(i[o]=c)}return i}const vT=[...kf].reverse(),bT=kf.length;function xT(n){return i=>Promise.all(i.map(({animation:l,options:o})=>gT(n,l,o)))}function ST(n){let i=xT(n),l=E0(),o=!0;const c=m=>(h,y)=>{const b=qr(n,y,m==="exit"?n.presenceContext?.custom:void 0);if(b){const{transition:x,transitionEnd:D,...E}=b;h={...h,...E,...D}}return h};function f(m){i=m(n)}function d(m){const{props:h}=n,y=Gy(n.parent)||{},b=[],x=new Set;let D={},E=1/0;for(let N=0;N<bT;N++){const w=vT[N],H=l[w],B=h[w]!==void 0?h[w]:y[w],K=Pr(B),q=w===m?H.isActive:null;q===!1&&(E=N);let I=B===y[w]&&B!==h[w]&&K;if(I&&o&&n.manuallyAnimateOnMount&&(I=!1),H.protectedKeys={...D},!H.isActive&&q===null||!B&&!H.prevProp||Xo(B)||typeof B=="boolean")continue;const lt=TT(H.prevProp,B);let F=lt||w===m&&H.isActive&&!I&&K||N>E&&K,at=!1;const Dt=Array.isArray(B)?B:[B];let Gt=Dt.reduce(c(w),{});q===!1&&(Gt={});const{prevResolvedValues:Xt={}}=H,an={...Xt,...Gt},Xe=Y=>{F=!0,x.has(Y)&&(at=!0,x.delete(Y)),H.needsAnimating[Y]=!0;const $=n.getValue(Y);$&&($.liveStyle=!1)};for(const Y in an){const $=Gt[Y],yt=Xt[Y];if(D.hasOwnProperty(Y))continue;let T=!1;Fc($)&&Fc(yt)?T=!Yy($,yt):T=$!==yt,T?$!=null?Xe(Y):x.add(Y):$!==void 0&&x.has(Y)?Xe(Y):H.protectedKeys[Y]=!0}H.prevProp=B,H.prevResolvedValues=Gt,H.isActive&&(D={...D,...Gt}),o&&n.blockInitialAnimation&&(F=!1),F&&(!(I&&lt)||at)&&b.push(...Dt.map(Y=>({animation:Y,options:{type:w}})))}if(x.size){const N={};if(typeof h.initial!="boolean"){const w=qr(n,Array.isArray(h.initial)?h.initial[0]:h.initial);w&&w.transition&&(N.transition=w.transition)}x.forEach(w=>{const H=n.getBaseTarget(w),B=n.getValue(w);B&&(B.liveStyle=!0),N[w]=H??null}),b.push({animation:N})}let O=!!b.length;return o&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(O=!1),o=!1,O?i(b):Promise.resolve()}function g(m,h){if(l[m].isActive===h)return Promise.resolve();n.variantChildren?.forEach(b=>b.animationState?.setActive(m,h)),l[m].isActive=h;const y=d(m);for(const b in l)l[b].protectedKeys={};return y}return{animateChanges:d,setActive:g,setAnimateFunction:f,getState:()=>l,reset:()=>{l=E0(),o=!0}}}function TT(n,i){return typeof i=="string"?i!==n:Array.isArray(i)?!Yy(i,n):!1}function Sa(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function E0(){return{animate:Sa(!0),whileInView:Sa(),whileHover:Sa(),whileTap:Sa(),whileDrag:Sa(),whileFocus:Sa(),exit:Sa()}}class na{constructor(i){this.isMounted=!1,this.node=i}update(){}}class AT extends na{constructor(i){super(i),i.animationState||(i.animationState=ST(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();Xo(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:l}=this.node.prevProps||{};i!==l&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let ET=0;class OT extends na{constructor(){super(...arguments),this.id=ET++}update(){if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:l}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===o)return;const c=this.node.animationState.setActive("exit",!i);l&&!i&&c.then(()=>{l(this.id)})}mount(){const{register:i,onExitComplete:l}=this.node.presenceContext||{};l&&l(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const DT={animation:{Feature:AT},exit:{Feature:OT}};function Yr(n,i,l,o={passive:!0}){return n.addEventListener(i,l,o),()=>n.removeEventListener(i,l)}function Jr(n){return{point:{x:n.pageX,y:n.pageY}}}const MT=n=>i=>Cf(i)&&n(i,Jr(i));function zr(n,i,l,o){return Yr(n,i,MT(l),o)}const Xy=1e-4,RT=1-Xy,wT=1+Xy,Zy=.01,CT=0-Zy,kT=0+Zy;function ue(n){return n.max-n.min}function _T(n,i,l){return Math.abs(n-i)<=l}function O0(n,i,l,o=.5){n.origin=o,n.originPoint=zt(i.min,i.max,n.origin),n.scale=ue(l)/ue(i),n.translate=zt(l.min,l.max,n.origin)-n.originPoint,(n.scale>=RT&&n.scale<=wT||isNaN(n.scale))&&(n.scale=1),(n.translate>=CT&&n.translate<=kT||isNaN(n.translate))&&(n.translate=0)}function Nr(n,i,l,o){O0(n.x,i.x,l.x,o?o.originX:void 0),O0(n.y,i.y,l.y,o?o.originY:void 0)}function D0(n,i,l){n.min=l.min+i.min,n.max=n.min+ue(i)}function zT(n,i,l){D0(n.x,i.x,l.x),D0(n.y,i.y,l.y)}function M0(n,i,l){n.min=i.min-l.min,n.max=n.min+ue(i)}function Vr(n,i,l){M0(n.x,i.x,l.x),M0(n.y,i.y,l.y)}function Be(n){return[n("x"),n("y")]}const Ky=({current:n})=>n?n.ownerDocument.defaultView:null,R0=(n,i)=>Math.abs(n-i);function NT(n,i){const l=R0(n.x,i.x),o=R0(n.y,i.y);return Math.sqrt(l**2+o**2)}class Qy{constructor(i,l,{transformPagePoint:o,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:d=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Dc(this.lastMoveEventInfo,this.history),D=this.startEvent!==null,E=NT(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!D&&!E)return;const{point:O}=x,{timestamp:N}=ae;this.history.push({...O,timestamp:N});const{onStart:w,onMove:H}=this.handlers;D||(w&&w(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),H&&H(this.lastMoveEvent,x)},this.handlePointerMove=(x,D)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Oc(D,this.transformPagePoint),kt.update(this.updatePoint,!0)},this.handlePointerUp=(x,D)=>{this.end();const{onEnd:E,onSessionEnd:O,resumeAnimation:N}=this.handlers;if(this.dragSnapToOrigin&&N&&N(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Dc(x.type==="pointercancel"?this.lastMoveEventInfo:Oc(D,this.transformPagePoint),this.history);this.startEvent&&E&&E(x,w),O&&O(x,w)},!Cf(i))return;this.dragSnapToOrigin=f,this.handlers=l,this.transformPagePoint=o,this.distanceThreshold=d,this.contextWindow=c||window;const g=Jr(i),m=Oc(g,this.transformPagePoint),{point:h}=m,{timestamp:y}=ae;this.history=[{...h,timestamp:y}];const{onSessionStart:b}=l;b&&b(i,Dc(m,this.history)),this.removeListeners=Kr(zr(this.contextWindow,"pointermove",this.handlePointerMove),zr(this.contextWindow,"pointerup",this.handlePointerUp),zr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),ta(this.updatePoint)}}function Oc(n,i){return i?{point:i(n.point)}:n}function w0(n,i){return{x:n.x-i.x,y:n.y-i.y}}function Dc({point:n},i){return{point:n,delta:w0(n,Fy(i)),offset:w0(n,VT(i)),velocity:UT(i,.1)}}function VT(n){return n[0]}function Fy(n){return n[n.length-1]}function UT(n,i){if(n.length<2)return{x:0,y:0};let l=n.length-1,o=null;const c=Fy(n);for(;l>=0&&(o=n[l],!(c.timestamp-o.timestamp>We(i)));)l--;if(!o)return{x:0,y:0};const f=Ie(c.timestamp-o.timestamp);if(f===0)return{x:0,y:0};const d={x:(c.x-o.x)/f,y:(c.y-o.y)/f};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function BT(n,{min:i,max:l},o){return i!==void 0&&n<i?n=o?zt(i,n,o.min):Math.max(n,i):l!==void 0&&n>l&&(n=o?zt(l,n,o.max):Math.min(n,l)),n}function C0(n,i,l){return{min:i!==void 0?n.min+i:void 0,max:l!==void 0?n.max+l-(n.max-n.min):void 0}}function LT(n,{top:i,left:l,bottom:o,right:c}){return{x:C0(n.x,l,c),y:C0(n.y,i,o)}}function k0(n,i){let l=i.min-n.min,o=i.max-n.max;return i.max-i.min<n.max-n.min&&([l,o]=[o,l]),{min:l,max:o}}function jT(n,i){return{x:k0(n.x,i.x),y:k0(n.y,i.y)}}function PT(n,i){let l=.5;const o=ue(n),c=ue(i);return c>o?l=Br(i.min,i.max-o,n.min):o>c&&(l=Br(n.min,n.max-c,i.min)),En(0,1,l)}function HT(n,i){const l={};return i.min!==void 0&&(l.min=i.min-n.min),i.max!==void 0&&(l.max=i.max-n.min),l}const Wc=.35;function qT(n=Wc){return n===!1?n=0:n===!0&&(n=Wc),{x:_0(n,"left","right"),y:_0(n,"top","bottom")}}function _0(n,i,l){return{min:z0(n,i),max:z0(n,l)}}function z0(n,i){return typeof n=="number"?n:n[i]||0}const YT=new WeakMap;class GT{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Pt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:l=!1,distanceThreshold:o}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=b=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),l&&this.snapToCursor(Jr(b).point)},d=(b,x)=>{const{drag:D,dragPropagation:E,onDragStart:O}=this.getProps();if(D&&!E&&(this.openDragLock&&this.openDragLock(),this.openDragLock=t2(D),!this.openDragLock))return;this.latestPointerEvent=b,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Be(w=>{let H=this.getAxisMotionValue(w).get()||0;if(tn.test(H)){const{projection:B}=this.visualElement;if(B&&B.layout){const K=B.layout.layoutBox[w];K&&(H=ue(K)*(parseFloat(H)/100))}}this.originPoint[w]=H}),O&&kt.postRender(()=>O(b,x)),Jc(this.visualElement,"transform");const{animationState:N}=this.visualElement;N&&N.setActive("whileDrag",!0)},g=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x;const{dragPropagation:D,dragDirectionLock:E,onDirectionLock:O,onDrag:N}=this.getProps();if(!D&&!this.openDragLock)return;const{offset:w}=x;if(E&&this.currentDirection===null){this.currentDirection=XT(w),this.currentDirection!==null&&O&&O(this.currentDirection);return}this.updateAxis("x",x.point,w),this.updateAxis("y",x.point,w),this.visualElement.render(),N&&N(b,x)},m=(b,x)=>{this.latestPointerEvent=b,this.latestPanInfo=x,this.stop(b,x),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>Be(b=>this.getAnimationState(b)==="paused"&&this.getAxisMotionValue(b).animation?.play()),{dragSnapToOrigin:y}=this.getProps();this.panSession=new Qy(i,{onSessionStart:f,onStart:d,onMove:g,onSessionEnd:m,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:o,contextWindow:Ky(this.visualElement)})}stop(i,l){const o=i||this.latestPointerEvent,c=l||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!o)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:g}=this.getProps();g&&kt.postRender(()=>g(o,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:l}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),l&&l.setActive("whileDrag",!1)}updateAxis(i,l,o){const{drag:c}=this.getProps();if(!o||!xo(i,c,this.currentDirection))return;const f=this.getAxisMotionValue(i);let d=this.originPoint[i]+o[i];this.constraints&&this.constraints[i]&&(d=BT(d,this.constraints[i],this.elastic[i])),f.set(d)}resolveConstraints(){const{dragConstraints:i,dragElastic:l}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,c=this.constraints;i&&pi(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&o?this.constraints=LT(o.layoutBox,i):this.constraints=!1,this.elastic=qT(l),c!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&Be(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=HT(o.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:l}=this.getProps();if(!i||!pi(i))return!1;const o=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const f=X2(o,c.root,this.visualElement.getTransformPagePoint());let d=jT(c.layout.layoutBox,f);if(l){const g=l(q2(d));this.hasMutatedConstraints=!!g,g&&(d=zy(g))}return d}startAnimation(i){const{drag:l,dragMomentum:o,dragElastic:c,dragTransition:f,dragSnapToOrigin:d,onDragTransitionEnd:g}=this.getProps(),m=this.constraints||{},h=Be(y=>{if(!xo(y,l,this.currentDirection))return;let b=m&&m[y]||{};d&&(b={min:0,max:0});const x=c?200:1e6,D=c?40:1e7,E={type:"inertia",velocity:o?i[y]:0,bounceStiffness:x,bounceDamping:D,timeConstant:750,restDelta:1,restSpeed:10,...f,...b};return this.startAxisValueAnimation(y,E)});return Promise.all(h).then(g)}startAxisValueAnimation(i,l){const o=this.getAxisMotionValue(i);return Jc(this.visualElement,i),o.start(jf(i,o,0,l,this.visualElement,!1))}stopAnimation(){Be(i=>this.getAxisMotionValue(i).stop())}pauseAnimation(){Be(i=>this.getAxisMotionValue(i).animation?.pause())}getAnimationState(i){return this.getAxisMotionValue(i).animation?.state}getAxisMotionValue(i){const l=`_drag${i.toUpperCase()}`,o=this.visualElement.getProps(),c=o[l];return c||this.visualElement.getValue(i,(o.initial?o.initial[i]:void 0)||0)}snapToCursor(i){Be(l=>{const{drag:o}=this.getProps();if(!xo(l,o,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(l);if(c&&c.layout){const{min:d,max:g}=c.layout.layoutBox[l];f.set(i[l]-zt(d,g,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:l}=this.getProps(),{projection:o}=this.visualElement;if(!pi(l)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Be(d=>{const g=this.getAxisMotionValue(d);if(g&&this.constraints!==!1){const m=g.get();c[d]=PT({min:m,max:m},this.constraints[d])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Be(d=>{if(!xo(d,i,null))return;const g=this.getAxisMotionValue(d),{min:m,max:h}=this.constraints[d];g.set(zt(m,h,c[d]))})}addListeners(){if(!this.visualElement.current)return;YT.set(this.visualElement,this);const i=this.visualElement.current,l=zr(i,"pointerdown",m=>{const{drag:h,dragListener:y=!0}=this.getProps();h&&y&&this.start(m)}),o=()=>{const{dragConstraints:m}=this.getProps();pi(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,f=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),kt.read(o);const d=Yr(window,"resize",()=>this.scalePositionWithinConstraints()),g=c.addEventListener("didUpdate",({delta:m,hasLayoutChanged:h})=>{this.isDragging&&h&&(Be(y=>{const b=this.getAxisMotionValue(y);b&&(this.originPoint[y]+=m[y].translate,b.set(b.get()+m[y].translate))}),this.visualElement.render())});return()=>{d(),l(),f(),g&&g()}}getProps(){const i=this.visualElement.getProps(),{drag:l=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:d=Wc,dragMomentum:g=!0}=i;return{...i,drag:l,dragDirectionLock:o,dragPropagation:c,dragConstraints:f,dragElastic:d,dragMomentum:g}}}function xo(n,i,l){return(i===!0||i===n)&&(l===null||l===n)}function XT(n,i=10){let l=null;return Math.abs(n.y)>i?l="y":Math.abs(n.x)>i&&(l="x"),l}class ZT extends na{constructor(i){super(i),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new GT(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const N0=n=>(i,l)=>{n&&kt.postRender(()=>n(i,l))};class KT extends na{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(i){this.session=new Qy(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ky(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:l,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:N0(i),onStart:N0(l),onMove:o,onEnd:(f,d)=>{delete this.session,c&&kt.postRender(()=>c(f,d))}}}mount(){this.removePointerDownListener=zr(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const No={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function V0(n,i){return i.max===i.min?0:n/(i.max-i.min)*100}const Dr={correct:(n,i)=>{if(!i.target)return n;if(typeof n=="string")if(rt.test(n))n=parseFloat(n);else return n;const l=V0(n,i.target.x),o=V0(n,i.target.y);return`${l}% ${o}%`}},QT={correct:(n,{treeScale:i,projectionDelta:l})=>{const o=n,c=ea.parse(n);if(c.length>5)return o;const f=ea.createTransformer(n),d=typeof c[0]!="number"?1:0,g=l.x.scale*i.x,m=l.y.scale*i.y;c[0+d]/=g,c[1+d]/=m;const h=zt(g,m,.5);return typeof c[2+d]=="number"&&(c[2+d]/=h),typeof c[3+d]=="number"&&(c[3+d]/=h),f(c)}};let U0=!1;class FT extends k.Component{componentDidMount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o,layoutId:c}=this.props,{projection:f}=i;g2(JT),f&&(l.group&&l.group.add(f),o&&o.register&&c&&o.register(f),U0&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,onExitComplete:()=>this.safeToRemove()})),No.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:l,visualElement:o,drag:c,isPresent:f}=this.props,{projection:d}=o;return d&&(d.isPresent=f,U0=!0,c||i.layoutDependency!==l||l===void 0||i.isPresent!==f?d.willUpdate():this.safeToRemove(),i.isPresent!==f&&(f?d.promote():d.relegate()||kt.postRender(()=>{const g=d.getStack();(!g||!g.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:i}=this.props.visualElement;i&&(i.root.didUpdate(),wf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:l,switchLayoutGroup:o}=this.props,{projection:c}=i;c&&(c.scheduleCheckAfterUnmount(),l&&l.group&&l.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function Jy(n){const[i,l]=u2(),o=k.useContext(wg);return G.jsx(FT,{...n,layoutGroup:o,switchLayoutGroup:k.useContext(ky),isPresent:i,safeToRemove:l})}const JT={borderRadius:{...Dr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Dr,borderTopRightRadius:Dr,borderBottomLeftRadius:Dr,borderBottomRightRadius:Dr,boxShadow:QT};function $T(n,i,l){const o=oe(n)?n:bi(n);return o.start(jf("",o,i,l)),o.animation}const WT=(n,i)=>n.depth-i.depth;class IT{constructor(){this.children=[],this.isDirty=!1}add(i){cf(this.children,i),this.isDirty=!0}remove(i){ff(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort(WT),this.isDirty=!1,this.children.forEach(i)}}function tA(n,i){const l=pe.now(),o=({timestamp:c})=>{const f=c-l;f>=i&&(ta(o),n(f-i))};return kt.setup(o,!0),()=>ta(o)}const $y=["TopLeft","TopRight","BottomLeft","BottomRight"],eA=$y.length,B0=n=>typeof n=="string"?parseFloat(n):n,L0=n=>typeof n=="number"||rt.test(n);function nA(n,i,l,o,c,f){c?(n.opacity=zt(0,l.opacity??1,aA(o)),n.opacityExit=zt(i.opacity??1,0,iA(o))):f&&(n.opacity=zt(i.opacity??1,l.opacity??1,o));for(let d=0;d<eA;d++){const g=`border${$y[d]}Radius`;let m=j0(i,g),h=j0(l,g);if(m===void 0&&h===void 0)continue;m||(m=0),h||(h=0),m===0||h===0||L0(m)===L0(h)?(n[g]=Math.max(zt(B0(m),B0(h),o),0),(tn.test(h)||tn.test(m))&&(n[g]+="%")):n[g]=h}(i.rotate||l.rotate)&&(n.rotate=zt(i.rotate||0,l.rotate||0,o))}function j0(n,i){return n[i]!==void 0?n[i]:n.borderRadius}const aA=Wy(0,.5,Pg),iA=Wy(.5,.95,Le);function Wy(n,i,l){return o=>o<n?0:o>i?1:l(Br(n,i,o))}function P0(n,i){n.min=i.min,n.max=i.max}function Ue(n,i){P0(n.x,i.x),P0(n.y,i.y)}function H0(n,i){n.translate=i.translate,n.scale=i.scale,n.originPoint=i.originPoint,n.origin=i.origin}function q0(n,i,l,o,c){return n-=i,n=Po(n,1/l,o),c!==void 0&&(n=Po(n,1/c,o)),n}function rA(n,i=0,l=1,o=.5,c,f=n,d=n){if(tn.test(i)&&(i=parseFloat(i),i=zt(d.min,d.max,i/100)-d.min),typeof i!="number")return;let g=zt(f.min,f.max,o);n===f&&(g-=i),n.min=q0(n.min,i,l,g,c),n.max=q0(n.max,i,l,g,c)}function Y0(n,i,[l,o,c],f,d){rA(n,i[l],i[o],i[c],i.scale,f,d)}const lA=["x","scaleX","originX"],oA=["y","scaleY","originY"];function G0(n,i,l,o){Y0(n.x,i,lA,l?l.x:void 0,o?o.x:void 0),Y0(n.y,i,oA,l?l.y:void 0,o?o.y:void 0)}function X0(n){return n.translate===0&&n.scale===1}function Iy(n){return X0(n.x)&&X0(n.y)}function Z0(n,i){return n.min===i.min&&n.max===i.max}function sA(n,i){return Z0(n.x,i.x)&&Z0(n.y,i.y)}function K0(n,i){return Math.round(n.min)===Math.round(i.min)&&Math.round(n.max)===Math.round(i.max)}function tv(n,i){return K0(n.x,i.x)&&K0(n.y,i.y)}function Q0(n){return ue(n.x)/ue(n.y)}function F0(n,i){return n.translate===i.translate&&n.scale===i.scale&&n.originPoint===i.originPoint}class uA{constructor(){this.members=[]}add(i){cf(this.members,i),i.scheduleRender()}remove(i){if(ff(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const l=this.members[this.members.length-1];l&&this.promote(l)}}relegate(i){const l=this.members.findIndex(c=>i===c);if(l===0)return!1;let o;for(let c=l;c>=0;c--){const f=this.members[c];if(f.isPresent!==!1){o=f;break}}return o?(this.promote(o),!0):!1}promote(i,l){const o=this.lead;if(i!==o&&(this.prevLead=o,this.lead=i,i.show(),o)){o.instance&&o.scheduleRender(),i.scheduleRender(),i.resumeFrom=o,l&&(i.resumeFrom.preserveOpacity=!0),o.snapshot&&(i.snapshot=o.snapshot,i.snapshot.latestValues=o.animationValues||o.latestValues),i.root&&i.root.isUpdating&&(i.isLayoutDirty=!0);const{crossfade:c}=i.options;c===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(i=>{const{options:l,resumingFrom:o}=i;l.onExitComplete&&l.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(i=>{i.instance&&i.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function cA(n,i,l){let o="";const c=n.x.translate/i.x,f=n.y.translate/i.y,d=l?.z||0;if((c||f||d)&&(o=`translate3d(${c}px, ${f}px, ${d}px) `),(i.x!==1||i.y!==1)&&(o+=`scale(${1/i.x}, ${1/i.y}) `),l){const{transformPerspective:h,rotate:y,rotateX:b,rotateY:x,skewX:D,skewY:E}=l;h&&(o=`perspective(${h}px) ${o}`),y&&(o+=`rotate(${y}deg) `),b&&(o+=`rotateX(${b}deg) `),x&&(o+=`rotateY(${x}deg) `),D&&(o+=`skewX(${D}deg) `),E&&(o+=`skewY(${E}deg) `)}const g=n.x.scale*i.x,m=n.y.scale*i.y;return(g!==1||m!==1)&&(o+=`scale(${g}, ${m})`),o||"none"}const Mc=["","X","Y","Z"],fA=1e3;let dA=0;function Rc(n,i,l,o){const{latestValues:c}=i;c[n]&&(l[n]=c[n],i.setStaticValue(n,0),o&&(o[n]=0))}function ev(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:i}=n.options;if(!i)return;const l=Hy(i);if(window.MotionHasOptimisedAnimation(l,"transform")){const{layout:c,layoutId:f}=n.options;window.MotionCancelOptimisedAnimation(l,"transform",kt,!(c||f))}const{parent:o}=n;o&&!o.hasCheckedOptimisedAppear&&ev(o)}function nv({attachResizeListener:n,defaultParent:i,measureScroll:l,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(d={},g=i?.()){this.id=dA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pA),this.nodes.forEach(bA),this.nodes.forEach(xA),this.nodes.forEach(gA)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=g?g.root||g:this,this.path=g?[...g.path,g]:[],this.parent=g,this.depth=g?g.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new IT)}addEventListener(d,g){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new mf),this.eventHandlers.get(d).add(g)}notifyListeners(d,...g){const m=this.eventHandlers.get(d);m&&m.notify(...g)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=vy(d)&&!l2(d),this.instance=d;const{layoutId:g,layout:m,visualElement:h}=this.options;if(h&&!h.current&&h.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||g)&&(this.isLayoutDirty=!0),n){let y,b=0;const x=()=>this.root.updateBlockedByResize=!1;kt.read(()=>{b=window.innerWidth}),n(d,()=>{const D=window.innerWidth;D!==b&&(b=D,this.root.updateBlockedByResize=!0,y&&y(),y=tA(x,250),No.hasAnimatedSinceResize&&(No.hasAnimatedSinceResize=!1,this.nodes.forEach(W0)))})}g&&this.root.registerSharedNode(g,this),this.options.animate!==!1&&h&&(g||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:b,hasRelativeLayoutChanged:x,layout:D})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||h.getDefaultTransition()||OA,{onLayoutAnimationStart:O,onLayoutAnimationComplete:N}=h.getProps(),w=!this.targetLayout||!tv(this.targetLayout,D),H=!b&&x;if(this.options.layoutRoot||this.resumeFrom||H||b&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const B={...Mf(E,"layout"),onPlay:O,onComplete:N};(h.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B),this.setAnimationOrigin(y,H)}else b||W0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=D})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ta(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SA),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ev(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const b=this.path[y];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:g,layout:m}=this.options;if(g===void 0&&!m)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(J0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach($0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(vA),this.nodes.forEach(hA),this.nodes.forEach(mA)):this.nodes.forEach($0),this.clearAllSnapshots();const g=pe.now();ae.delta=En(0,1e3/60,g-ae.timestamp),ae.timestamp=g,ae.isProcessing=!0,yc.update.process(ae),yc.preRender.process(ae),yc.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yA),this.sharedNodes.forEach(TA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ue(this.snapshot.measuredBox.x)&&!ue(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Pt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:g}=this.options;g&&g.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let g=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(g=!1),g&&this.instance){const m=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:m,offset:l(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,g=this.projectionDelta&&!Iy(this.projectionDelta),m=this.getTransformTemplate(),h=m?m(this.latestValues,""):void 0,y=h!==this.prevTransformTemplateValue;d&&this.instance&&(g||Ta(this.latestValues)||y)&&(c(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const g=this.measurePageBox();let m=this.removeElementScroll(g);return d&&(m=this.removeTransform(m)),DA(m),{animationId:this.root.animationId,measuredBox:g,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return Pt();const g=d.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(MA))){const{scroll:h}=this.root;h&&(gi(g.x,h.offset.x),gi(g.y,h.offset.y))}return g}removeElementScroll(d){const g=Pt();if(Ue(g,d),this.scroll?.wasRoot)return g;for(let m=0;m<this.path.length;m++){const h=this.path[m],{scroll:y,options:b}=h;h!==this.root&&y&&b.layoutScroll&&(y.wasRoot&&Ue(g,d),gi(g.x,y.offset.x),gi(g.y,y.offset.y))}return g}applyTransform(d,g=!1){const m=Pt();Ue(m,d);for(let h=0;h<this.path.length;h++){const y=this.path[h];!g&&y.options.layoutScroll&&y.scroll&&y!==y.root&&yi(m,{x:-y.scroll.offset.x,y:-y.scroll.offset.y}),Ta(y.latestValues)&&yi(m,y.latestValues)}return Ta(this.latestValues)&&yi(m,this.latestValues),m}removeTransform(d){const g=Pt();Ue(g,d);for(let m=0;m<this.path.length;m++){const h=this.path[m];if(!h.instance||!Ta(h.latestValues))continue;Zc(h.latestValues)&&h.updateSnapshot();const y=Pt(),b=h.measurePageBox();Ue(y,b),G0(g,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,y)}return Ta(this.latestValues)&&G0(g,this.latestValues),g}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){const g=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=g.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=g.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=g.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==g;if(!(d||m&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:b}=this.options;if(!(!this.layout||!(y||b))){if(this.resolvedRelativeTargetAt=ae.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),Vr(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Pt(),this.targetWithTransforms=Pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),zT(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ue(this.target,this.layout.layoutBox),Vy(this.target,this.targetDelta)):Ue(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Pt(),this.relativeTargetOrigin=Pt(),Vr(this.relativeTargetOrigin,this.target,x.target),Ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Zc(this.parent.latestValues)||Ny(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const d=this.getLead(),g=!!this.resumingFrom||this!==d;let m=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(m=!1),g&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(m=!1),m)return;const{layout:h,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||y))return;Ue(this.layoutCorrected,this.layout.layoutBox);const b=this.treeScale.x,x=this.treeScale.y;G2(this.layoutCorrected,this.treeScale,this.path,g),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=Pt());const{target:D}=d;if(!D){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(H0(this.prevProjectionDelta.x,this.projectionDelta.x),H0(this.prevProjectionDelta.y,this.projectionDelta.y)),Nr(this.projectionDelta,this.layoutCorrected,D,this.latestValues),(this.treeScale.x!==b||this.treeScale.y!==x||!F0(this.projectionDelta.x,this.prevProjectionDelta.x)||!F0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",D))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.visualElement?.scheduleRender(),d){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=vi(),this.projectionDelta=vi(),this.projectionDeltaWithTransform=vi()}setAnimationOrigin(d,g=!1){const m=this.snapshot,h=m?m.latestValues:{},y={...this.latestValues},b=vi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!g;const x=Pt(),D=m?m.source:void 0,E=this.layout?this.layout.source:void 0,O=D!==E,N=this.getStack(),w=!N||N.members.length<=1,H=!!(O&&!w&&this.options.crossfade===!0&&!this.path.some(EA));this.animationProgress=0;let B;this.mixTargetDelta=K=>{const q=K/1e3;I0(b.x,d.x,q),I0(b.y,d.y,q),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vr(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),AA(this.relativeTarget,this.relativeTargetOrigin,x,q),B&&sA(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=Pt()),Ue(B,this.relativeTarget)),O&&(this.animationValues=y,nA(y,h,this.latestValues,q,H,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(ta(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{No.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=bi(0)),this.currentAnimation=$T(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:g=>{this.mixTargetDelta(g),d.onUpdate&&d.onUpdate(g)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:g,target:m,layout:h,latestValues:y}=d;if(!(!g||!m||!h)){if(this!==d&&this.layout&&h&&av(this.options.animationType,this.layout.layoutBox,h.layoutBox)){m=this.target||Pt();const b=ue(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+b;const x=ue(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+x}Ue(g,m),yi(g,y),Nr(this.projectionDeltaWithTransform,this.layoutCorrected,g,y)}}registerSharedNode(d,g){this.sharedNodes.has(d)||this.sharedNodes.set(d,new uA),this.sharedNodes.get(d).add(g);const h=g.options.initialPromotionConfig;g.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(g):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){const{layoutId:d}=this.options;return d?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:d}=this.options;return d?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:g,preserveFollowOpacity:m}={}){const h=this.getStack();h&&h.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),g&&this.setOptions({transition:g})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let g=!1;const{latestValues:m}=d;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(g=!0),!g)return;const h={};m.z&&Rc("z",d,h,this.animationValues);for(let y=0;y<Mc.length;y++)Rc(`rotate${Mc[y]}`,d,h,this.animationValues),Rc(`skew${Mc[y]}`,d,h,this.animationValues);d.render();for(const y in h)d.setStaticValue(y,h[y]),this.animationValues&&(this.animationValues[y]=h[y]);d.scheduleRender()}applyProjectionStyles(d,g){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=zo(g?.pointerEvents)||"",d.transform=m?m(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=zo(g?.pointerEvents)||""),this.hasProjected&&!Ta(this.latestValues)&&(d.transform=m?m({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=h.animationValues||h.latestValues;this.applyTransformsToTarget();let b=cA(this.projectionDeltaWithTransform,this.treeScale,y);m&&(b=m(y,b)),d.transform=b;const{x,y:D}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${D.origin*100}% 0`,h.animationValues?d.opacity=h===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=h===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const E in Hr){if(y[E]===void 0)continue;const{correct:O,applyTo:N,isCSSVariable:w}=Hr[E],H=b==="none"?y[E]:O(y[E],h);if(N){const B=N.length;for(let K=0;K<B;K++)d[N[K]]=H}else w?this.options.visualElement.renderState.vars[E]=H:d[E]=H}this.options.layoutId&&(d.pointerEvents=h===this?zo(g?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>d.currentAnimation?.stop()),this.root.nodes.forEach(J0),this.root.sharedNodes.clear()}}}function hA(n){n.updateLayout()}function mA(n){const i=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&i&&n.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:o}=n.layout,{animationType:c}=n.options,f=i.source!==n.layout.source;c==="size"?Be(y=>{const b=f?i.measuredBox[y]:i.layoutBox[y],x=ue(b);b.min=l[y].min,b.max=b.min+x}):av(c,i.layoutBox,l)&&Be(y=>{const b=f?i.measuredBox[y]:i.layoutBox[y],x=ue(l[y]);b.max=b.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[y].max=n.relativeTarget[y].min+x)});const d=vi();Nr(d,l,i.layoutBox);const g=vi();f?Nr(g,n.applyTransform(o,!0),i.measuredBox):Nr(g,l,i.layoutBox);const m=!Iy(d);let h=!1;if(!n.resumeFrom){const y=n.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:b,layout:x}=y;if(b&&x){const D=Pt();Vr(D,i.layoutBox,b.layoutBox);const E=Pt();Vr(E,l,x.layoutBox),tv(D,E)||(h=!0),y.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=D,n.relativeParent=y)}}}n.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:g,layoutDelta:d,hasLayoutChanged:m,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:l}=n.options;l&&l()}n.options.transition=void 0}function pA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function gA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function yA(n){n.clearSnapshot()}function J0(n){n.clearMeasurements()}function $0(n){n.isLayoutDirty=!1}function vA(n){const{visualElement:i}=n.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),n.resetTransform()}function W0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function bA(n){n.resolveTargetDelta()}function xA(n){n.calcProjection()}function SA(n){n.resetSkewAndRotation()}function TA(n){n.removeLeadSnapshot()}function I0(n,i,l){n.translate=zt(i.translate,0,l),n.scale=zt(i.scale,1,l),n.origin=i.origin,n.originPoint=i.originPoint}function tg(n,i,l,o){n.min=zt(i.min,l.min,o),n.max=zt(i.max,l.max,o)}function AA(n,i,l,o){tg(n.x,i.x,l.x,o),tg(n.y,i.y,l.y,o)}function EA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const OA={duration:.45,ease:[.4,0,.1,1]},eg=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ng=eg("applewebkit/")&&!eg("chrome/")?Math.round:Le;function ag(n){n.min=ng(n.min),n.max=ng(n.max)}function DA(n){ag(n.x),ag(n.y)}function av(n,i,l){return n==="position"||n==="preserve-aspect"&&!_T(Q0(i),Q0(l),.2)}function MA(n){return n!==n.root&&n.scroll?.wasRoot}const RA=nv({attachResizeListener:(n,i)=>Yr(n,"resize",i),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wc={current:void 0},iv=nv({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!wc.current){const n=new RA({});n.mount(window),n.setOptions({layoutScroll:!0}),wc.current=n}return wc.current},resetTransform:(n,i)=>{n.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),wA={pan:{Feature:KT},drag:{Feature:ZT,ProjectionNode:iv,MeasureLayout:Jy}};function ig(n,i,l){const{props:o}=n;n.animationState&&o.whileHover&&n.animationState.setActive("whileHover",l==="Start");const c="onHover"+l,f=o[c];f&&kt.postRender(()=>f(i,Jr(i)))}class CA extends na{mount(){const{current:i}=this.node;i&&(this.unmount=e2(i,(l,o)=>(ig(this.node,o,"Start"),c=>ig(this.node,c,"End"))))}unmount(){}}class kA extends na{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Kr(Yr(this.node.current,"focus",()=>this.onFocus()),Yr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function rg(n,i,l){const{props:o}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&o.whileTap&&n.animationState.setActive("whileTap",l==="Start");const c="onTap"+(l==="End"?"":l),f=o[c];f&&kt.postRender(()=>f(i,Jr(i)))}class _A extends na{mount(){const{current:i}=this.node;i&&(this.unmount=r2(i,(l,o)=>(rg(this.node,o,"Start"),(c,{success:f})=>rg(this.node,c,f?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ic=new WeakMap,Cc=new WeakMap,zA=n=>{const i=Ic.get(n.target);i&&i(n)},NA=n=>{n.forEach(zA)};function VA({root:n,...i}){const l=n||document;Cc.has(l)||Cc.set(l,{});const o=Cc.get(l),c=JSON.stringify(i);return o[c]||(o[c]=new IntersectionObserver(NA,{root:n,...i})),o[c]}function UA(n,i,l){const o=VA(i);return Ic.set(n,l),o.observe(n),()=>{Ic.delete(n),o.unobserve(n)}}const BA={some:0,all:1};class LA extends na{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:i={}}=this.node.getProps(),{root:l,margin:o,amount:c="some",once:f}=i,d={root:l?l.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:BA[c]},g=m=>{const{isIntersecting:h}=m;if(this.isInView===h||(this.isInView=h,f&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:y,onViewportLeave:b}=this.node.getProps(),x=h?y:b;x&&x(m)};return UA(this.node.current,d,g)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:l}=this.node;["amount","margin","root"].some(jA(i,l))&&this.startObserver()}unmount(){}}function jA({viewport:n={}},{viewport:i={}}={}){return l=>n[l]!==i[l]}const PA={inView:{Feature:LA},tap:{Feature:_A},focus:{Feature:kA},hover:{Feature:CA}},HA={layout:{ProjectionNode:iv,MeasureLayout:Jy}},qA={...DT,...PA,...wA,...HA},YA=H2(qA,tT);function Pf({text:n="",gradientColors:i=["#ff0080","#7928ca","#ff0080"],className:l=""}){return G.jsx("div",{className:`w-full h-full flex items-center justify-center overflow-hidden ${l}`,children:G.jsx(YA.div,{className:"text-4xl font-bold whitespace-nowrap",animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:5,ease:"linear",repeat:1/0},style:{backgroundImage:`linear-gradient(90deg, ${i.join(", ")})`,backgroundSize:"200% 100%",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent"},children:n})})}const GA=()=>G.jsxs("div",{className:"p-10 bg-white w-full min-h-screen flex flex-col items-center justify-start",children:[G.jsxs("div",{className:"flex flex-row items-center justify-center mb-10 w-full",children:[G.jsx(Pf,{text:"About Me",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight"}),G.jsx("img",{src:"/my_website//SelfPortrait.jpeg",alt:"Self Portrait",className:"rounded-full w-28 h-28 ml-6 shadow-lg object-cover border-4 border-gray-200"})]}),G.jsxs("div",{className:"max-w-3xl text-center text-gray-800",children:[G.jsx("p",{className:"text-xl leading-relaxed",children:"Hi, I'm Junior—an engineer and creative technologist with a passion for building innovative, user-focused web applications. I recently graduated with a B.S. in Computer Science & Engineering and a minor in Physics from Bucknell University, and have since been working on projects at the intersection of AI, full-stack development, and automation."}),G.jsx("p",{className:"text-xl leading-relaxed mt-6",children:"I’ve developed AI-powered mobile apps, backend pipelines for real-world data ingestion, and interactive dashboards that make complex systems usable. Whether I’m building a trading bot using NLP or contributing to open-source tools, I thrive on solving problems that blend functionality with great user experience."}),G.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left",children:[G.jsxs("div",{children:[G.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Programming Languages"}),G.jsxs("ul",{className:"list-disc list-inside text-lg",children:[G.jsx("li",{children:"Python"}),G.jsx("li",{children:"JavaScript / TypeScript"}),G.jsx("li",{children:"C / C++"}),G.jsx("li",{children:"HTML / CSS"}),G.jsx("li",{children:"SQL"})]})]}),G.jsxs("div",{children:[G.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Frameworks & Tools"}),G.jsxs("ul",{className:"list-disc list-inside text-lg",children:[G.jsx("li",{children:"React, Next.js, Node.js, Express"}),G.jsx("li",{children:"MariaDB, PostgreSQL"}),G.jsx("li",{children:"TensorFlow, Hugging Face"}),G.jsx("li",{children:"Git, Linux, Docker"})]})]})]}),G.jsxs("div",{className:"mt-10",children:[G.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"What I'm Passionate About"}),G.jsx("p",{className:"text-lg",children:"AI development, intuitive UX design, building scalable web apps, open-source contributions, and empowering users with smart, elegant technology."})]}),G.jsxs("div",{className:"mt-10",children:[G.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Outside of Tech"}),G.jsx("p",{className:"text-lg",children:"When I’m not coding, you can find me exploring new bouldering, gaming, reading about physics or tech trends, or brainstorming my next side project."})]})]})]});function XA({frontContent:n,backContent:i,className:l="",onClick:o}){const[c,f]=k.useState(!1),d=()=>{f(!c),o?.()};return G.jsx("div",{className:`relative w-[400px] h-[300px] cursor-pointer [perspective:1000px] ${l}`,onClick:d,children:G.jsxs("div",{className:`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${c?"[transform:rotateY(180deg)]":""}`,children:[G.jsx("div",{className:"absolute w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-md p-4",children:n}),G.jsx("div",{className:"absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl shadow-md p-4 flex items-center justify-center text-center",children:i})]})})}function ZA(){const n=[{image:"undefined/DataDriveVehicle.jpg",title:"Data Drive Vehicle",docLink:"https://docs.google.com/document/d/1R62fZxs_eFVezG9opYTs5jEd1oRQatV5bLbR9Gc6CI4/edit?tab=t.0",docLinkButtonText:"View Document",docLinkText:null},{image:"undefined/kaggleImages/AUC.png",title:"Kaggle Home Credit",docLink:"/my_website/kaggle",docLinkButtonText:"View Figures",docLinkText:""}];return G.jsx("section",{className:"py-14",children:G.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-8",children:[G.jsx("div",{className:"flex flex-grid items-center justify-center overflow-x-auto",children:G.jsx(Pf,{className:"text-gray-800 text-3xl font-semibold sm:text-4xl",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],text:"Projects"})}),G.jsx("div",{className:"mt-12",children:G.jsx("ul",{className:"grid gap-10 grid-cols-2",children:n.map((i,l)=>G.jsx("li",{children:G.jsx(XA,{frontContent:G.jsxs("div",{className:"items-center justify-center flex flex-col gap-4 p-4",children:[G.jsx("img",{src:i.image,alt:i.title}),G.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:i.title})]}),backContent:G.jsx(G.Fragment,{children:G.jsx("a",{href:i.docLink,rel:"noopener noreferrer",className:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",children:i.docLinkButtonText})})})},l))})})]})})}const KA=()=>G.jsx("div",{className:"p-10 bg-white w-full min-h-screen overflow-hidden flex-col items-center justify-center rounded",children:G.jsx(ZA,{})});function Qt(n,i){i===void 0&&(i={});var l=i.insertAt;if(n&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&o.firstChild?o.insertBefore(c,o.firstChild):o.appendChild(c),c.styleSheet?c.styleSheet.cssText=n:c.appendChild(document.createTextNode(n))}}Qt(`.react-loading-indicator-normalize,
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
}`);var ht=function(){return ht=Object.assign||function(n){for(var i,l=1,o=arguments.length;l<o;l++)for(var c in i=arguments[l])Object.prototype.hasOwnProperty.call(i,c)&&(n[c]=i[c]);return n},ht.apply(this,arguments)};function Ho(n){return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Ho(n)}var QA=/^\s+/,FA=/\s+$/;function J(n,i){if(i=i||{},(n=n||"")instanceof J)return n;if(!(this instanceof J))return new J(n,i);var l=function(o){var c={r:0,g:0,b:0},f=1,d=null,g=null,m=null,h=!1,y=!1;typeof o=="string"&&(o=function(E){E=E.replace(QA,"").replace(FA,"").toLowerCase();var O,N=!1;if(tf[E])E=tf[E],N=!0;else if(E=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(O=qe.rgb.exec(E))?{r:O[1],g:O[2],b:O[3]}:(O=qe.rgba.exec(E))?{r:O[1],g:O[2],b:O[3],a:O[4]}:(O=qe.hsl.exec(E))?{h:O[1],s:O[2],l:O[3]}:(O=qe.hsla.exec(E))?{h:O[1],s:O[2],l:O[3],a:O[4]}:(O=qe.hsv.exec(E))?{h:O[1],s:O[2],v:O[3]}:(O=qe.hsva.exec(E))?{h:O[1],s:O[2],v:O[3],a:O[4]}:(O=qe.hex8.exec(E))?{r:De(O[1]),g:De(O[2]),b:De(O[3]),a:fg(O[4]),format:N?"name":"hex8"}:(O=qe.hex6.exec(E))?{r:De(O[1]),g:De(O[2]),b:De(O[3]),format:N?"name":"hex"}:(O=qe.hex4.exec(E))?{r:De(O[1]+""+O[1]),g:De(O[2]+""+O[2]),b:De(O[3]+""+O[3]),a:fg(O[4]+""+O[4]),format:N?"name":"hex8"}:(O=qe.hex3.exec(E))?{r:De(O[1]+""+O[1]),g:De(O[2]+""+O[2]),b:De(O[3]+""+O[3]),format:N?"name":"hex"}:!1}(o)),Ho(o)=="object"&&(xn(o.r)&&xn(o.g)&&xn(o.b)?(b=o.r,x=o.g,D=o.b,c={r:255*Ct(b,255),g:255*Ct(x,255),b:255*Ct(D,255)},h=!0,y=String(o.r).substr(-1)==="%"?"prgb":"rgb"):xn(o.h)&&xn(o.s)&&xn(o.v)?(d=wr(o.s),g=wr(o.v),c=function(E,O,N){E=6*Ct(E,360),O=Ct(O,100),N=Ct(N,100);var w=Math.floor(E),H=E-w,B=N*(1-O),K=N*(1-H*O),q=N*(1-(1-H)*O),I=w%6,lt=[N,K,B,B,q,N][I],F=[q,N,N,K,B,B][I],at=[B,B,q,N,N,K][I];return{r:255*lt,g:255*F,b:255*at}}(o.h,d,g),h=!0,y="hsv"):xn(o.h)&&xn(o.s)&&xn(o.l)&&(d=wr(o.s),m=wr(o.l),c=function(E,O,N){var w,H,B;function K(lt,F,at){return at<0&&(at+=1),at>1&&(at-=1),at<1/6?lt+6*(F-lt)*at:at<.5?F:at<2/3?lt+(F-lt)*(2/3-at)*6:lt}if(E=Ct(E,360),O=Ct(O,100),N=Ct(N,100),O===0)w=H=B=N;else{var q=N<.5?N*(1+O):N+O-N*O,I=2*N-q;w=K(I,q,E+1/3),H=K(I,q,E),B=K(I,q,E-1/3)}return{r:255*w,g:255*H,b:255*B}}(o.h,d,m),h=!0,y="hsl"),o.hasOwnProperty("a")&&(f=o.a));var b,x,D;return f=rv(f),{ok:h,format:o.format||y,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}}(n);this._originalInput=n,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=i.format||l.format,this._gradientType=i.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function lg(n,i,l){n=Ct(n,255),i=Ct(i,255),l=Ct(l,255);var o,c,f=Math.max(n,i,l),d=Math.min(n,i,l),g=(f+d)/2;if(f==d)o=c=0;else{var m=f-d;switch(c=g>.5?m/(2-f-d):m/(f+d),f){case n:o=(i-l)/m+(i<l?6:0);break;case i:o=(l-n)/m+2;break;case l:o=(n-i)/m+4}o/=6}return{h:o,s:c,l:g}}function og(n,i,l){n=Ct(n,255),i=Ct(i,255),l=Ct(l,255);var o,c,f=Math.max(n,i,l),d=Math.min(n,i,l),g=f,m=f-d;if(c=f===0?0:m/f,f==d)o=0;else{switch(f){case n:o=(i-l)/m+(i<l?6:0);break;case i:o=(l-n)/m+2;break;case l:o=(n-i)/m+4}o/=6}return{h:o,s:c,v:g}}function sg(n,i,l,o){var c=[Ge(Math.round(n).toString(16)),Ge(Math.round(i).toString(16)),Ge(Math.round(l).toString(16))];return o&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function ug(n,i,l,o){return[Ge(lv(o)),Ge(Math.round(n).toString(16)),Ge(Math.round(i).toString(16)),Ge(Math.round(l).toString(16))].join("")}function JA(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.s-=i/100,l.s=Ko(l.s),J(l)}function $A(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.s+=i/100,l.s=Ko(l.s),J(l)}function WA(n){return J(n).desaturate(100)}function IA(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.l+=i/100,l.l=Ko(l.l),J(l)}function tE(n,i){i=i===0?0:i||10;var l=J(n).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-i/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-i/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-i/100*255))),J(l)}function eE(n,i){i=i===0?0:i||10;var l=J(n).toHsl();return l.l-=i/100,l.l=Ko(l.l),J(l)}function nE(n,i){var l=J(n).toHsl(),o=(l.h+i)%360;return l.h=o<0?360+o:o,J(l)}function aE(n){var i=J(n).toHsl();return i.h=(i.h+180)%360,J(i)}function cg(n,i){if(isNaN(i)||i<=0)throw new Error("Argument to polyad must be a positive number");for(var l=J(n).toHsl(),o=[J(n)],c=360/i,f=1;f<i;f++)o.push(J({h:(l.h+f*c)%360,s:l.s,l:l.l}));return o}function iE(n){var i=J(n).toHsl(),l=i.h;return[J(n),J({h:(l+72)%360,s:i.s,l:i.l}),J({h:(l+216)%360,s:i.s,l:i.l})]}function rE(n,i,l){i=i||6,l=l||30;var o=J(n).toHsl(),c=360/l,f=[J(n)];for(o.h=(o.h-(c*i>>1)+720)%360;--i;)o.h=(o.h+c)%360,f.push(J(o));return f}function lE(n,i){i=i||6;for(var l=J(n).toHsv(),o=l.h,c=l.s,f=l.v,d=[],g=1/i;i--;)d.push(J({h:o,s:c,v:f})),f=(f+g)%1;return d}J.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,i,l,o=this.toRgb();return n=o.r/255,i=o.g/255,l=o.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(n){return this._a=rv(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=og(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=og(this._r,this._g,this._b),i=Math.round(360*n.h),l=Math.round(100*n.s),o=Math.round(100*n.v);return this._a==1?"hsv("+i+", "+l+"%, "+o+"%)":"hsva("+i+", "+l+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var n=lg(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=lg(this._r,this._g,this._b),i=Math.round(360*n.h),l=Math.round(100*n.s),o=Math.round(100*n.l);return this._a==1?"hsl("+i+", "+l+"%, "+o+"%)":"hsla("+i+", "+l+"%, "+o+"%, "+this._roundA+")"},toHex:function(n){return sg(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return function(i,l,o,c,f){var d=[Ge(Math.round(i).toString(16)),Ge(Math.round(l).toString(16)),Ge(Math.round(o).toString(16)),Ge(lv(c))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Ct(this._r,255))+"%",g:Math.round(100*Ct(this._g,255))+"%",b:Math.round(100*Ct(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%)":"rgba("+Math.round(100*Ct(this._r,255))+"%, "+Math.round(100*Ct(this._g,255))+"%, "+Math.round(100*Ct(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(oE[sg(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var i="#"+ug(this._r,this._g,this._b,this._a),l=i,o=this._gradientType?"GradientType = 1, ":"";if(n){var c=J(n);l="#"+ug(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+i+",endColorstr="+l+")"},toString:function(n){var i=!!n;n=n||this._format;var l=!1,o=this._a<1&&this._a>=0;return i||!o||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(l=this.toRgbString()),n==="prgb"&&(l=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(l=this.toHexString()),n==="hex3"&&(l=this.toHexString(!0)),n==="hex4"&&(l=this.toHex8String(!0)),n==="hex8"&&(l=this.toHex8String()),n==="name"&&(l=this.toName()),n==="hsl"&&(l=this.toHslString()),n==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return J(this.toString())},_applyModification:function(n,i){var l=n.apply(null,[this].concat([].slice.call(i)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(IA,arguments)},brighten:function(){return this._applyModification(tE,arguments)},darken:function(){return this._applyModification(eE,arguments)},desaturate:function(){return this._applyModification(JA,arguments)},saturate:function(){return this._applyModification($A,arguments)},greyscale:function(){return this._applyModification(WA,arguments)},spin:function(){return this._applyModification(nE,arguments)},_applyCombination:function(n,i){return n.apply(null,[this].concat([].slice.call(i)))},analogous:function(){return this._applyCombination(rE,arguments)},complement:function(){return this._applyCombination(aE,arguments)},monochromatic:function(){return this._applyCombination(lE,arguments)},splitcomplement:function(){return this._applyCombination(iE,arguments)},triad:function(){return this._applyCombination(cg,[3])},tetrad:function(){return this._applyCombination(cg,[4])}},J.fromRatio=function(n,i){if(Ho(n)=="object"){var l={};for(var o in n)n.hasOwnProperty(o)&&(l[o]=o==="a"?n[o]:wr(n[o]));n=l}return J(n,i)},J.equals=function(n,i){return!(!n||!i)&&J(n).toRgbString()==J(i).toRgbString()},J.random=function(){return J.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},J.mix=function(n,i,l){l=l===0?0:l||50;var o=J(n).toRgb(),c=J(i).toRgb(),f=l/100;return J({r:(c.r-o.r)*f+o.r,g:(c.g-o.g)*f+o.g,b:(c.b-o.b)*f+o.b,a:(c.a-o.a)*f+o.a})},J.readability=function(n,i){var l=J(n),o=J(i);return(Math.max(l.getLuminance(),o.getLuminance())+.05)/(Math.min(l.getLuminance(),o.getLuminance())+.05)},J.isReadable=function(n,i,l){var o,c,f=J.readability(n,i);switch(c=!1,(o=function(d){var g,m;return g=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),m=(d.size||"small").toLowerCase(),g!=="AA"&&g!=="AAA"&&(g="AA"),m!=="small"&&m!=="large"&&(m="small"),{level:g,size:m}}(l)).level+o.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},J.mostReadable=function(n,i,l){var o,c,f,d,g=null,m=0;c=(l=l||{}).includeFallbackColors,f=l.level,d=l.size;for(var h=0;h<i.length;h++)(o=J.readability(n,i[h]))>m&&(m=o,g=J(i[h]));return J.isReadable(n,g,{level:f,size:d})||!c?g:(l.includeFallbackColors=!1,J.mostReadable(n,["#fff","#000"],l))};var tf=J.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},oE=J.hexNames=function(n){var i={};for(var l in n)n.hasOwnProperty(l)&&(i[n[l]]=l);return i}(tf);function rv(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function Ct(n,i){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(n)&&(n="100%");var l=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(n);return n=Math.min(i,Math.max(0,parseFloat(n))),l&&(n=parseInt(n*i,10)/100),Math.abs(n-i)<1e-6?1:n%i/parseFloat(i)}function Ko(n){return Math.min(1,Math.max(0,n))}function De(n){return parseInt(n,16)}function Ge(n){return n.length==1?"0"+n:""+n}function wr(n){return n<=1&&(n=100*n+"%"),n}function lv(n){return Math.round(255*parseFloat(n)).toString(16)}function fg(n){return De(n)/255}var Wn,So,To,qe=(So="[\\s|\\(]+("+(Wn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")\\s*\\)?",To="[\\s|\\(]+("+Wn+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")[,|\\s]+("+Wn+")\\s*\\)?",{CSS_UNIT:new RegExp(Wn),rgb:new RegExp("rgb"+So),rgba:new RegExp("rgba"+To),hsl:new RegExp("hsl"+So),hsla:new RegExp("hsla"+To),hsv:new RegExp("hsv"+So),hsva:new RegExp("hsva"+To),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function xn(n){return!!qe.CSS_UNIT.exec(n)}var $r=function(n,i){var l=(typeof n=="string"?parseInt(n):n)||0;if(l>=-5&&l<=5){var o=l,c=parseFloat(i),f=c+o*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:i}},Wr=function(n,i){var l=n||{},o="";switch(i){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var c={};if(l.fontSize){var f=l.fontSize;c=function(d,g){var m={};for(var h in d)Object.prototype.hasOwnProperty.call(d,h)&&g.indexOf(h)<0&&(m[h]=d[h]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var y=0;for(h=Object.getOwnPropertySymbols(d);y<h.length;y++)g.indexOf(h[y])<0&&Object.prototype.propertyIsEnumerable.call(d,h[y])&&(m[h[y]]=d[h[y]])}return m}(l,["fontSize"]),o=f}return{fontSize:o,styles:c}},sE={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ir=function(n){var i=n.className,l=n.text,o=n.textColor,c=n.staticText,f=n.style;return l?St.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(i||"").trim(),style:ht(ht(ht({},c&&sE),o&&{color:o,mixBlendMode:"unset"}),f&&f)},typeof l=="string"&&l.length?l:"loading"):null},Sn="rgb(50, 205, 50)";function tl(n,i){if(i===void 0&&(i=0),n.length===0)throw new Error("Input array cannot be empty!");var l=[];return function o(c,f){return f===void 0&&(f=0),l.push.apply(l,c),l.length<f&&o(l,f),l.slice(0,f)}(n,i)}Qt(`.atom-rli-bounding-box {
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
}`);var Ao=Array.from({length:4},function(n,i){return"--OP-annulus-phase".concat(i+1,"-color")}),uE=function(n){var i,l=Wr(n?.style,n?.size),o=l.styles,c=l.fontSize,f=n?.easing,d=$r(n?.speedPlus,"1.5s").animationPeriod,g=function(h){var y={},b=Ao.length;if(h instanceof Array){for(var x=tl(h,b),D=0;D<x.length&&!(D>=4);D++)y[Ao[D]]=x[D];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[Ao[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[Ao[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n?.dense?4.3:2.9;return St.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},St.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},St.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},St.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:m,strokeMiterlimit:"10"})),St.createElement(Ir,{className:"OP-annulus-text",text:n?.text,textColor:n?.textColor})))};function kc(n){return n&&n.Math===Math&&n}Qt(`.OP-dotted-rli-bounding-box {
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
}`);var hi=kc(typeof window=="object"&&window)||kc(typeof self=="object"&&self)||kc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function ov(){var n,i;return!((n=hi?.crypto)===null||n===void 0)&&n.randomUUID?hi.crypto.randomUUID():!((i=hi?.btoa)===null||i===void 0)&&i.name?hi.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Eo=Array.from({length:4},function(n,i){return"--OP-dotted-phase".concat(i+1,"-color")}),cE=function(n){var i,l=Wr(n?.style,n?.size),o=l.styles,c=l.fontSize,f=n?.easing,d=$r(n?.speedPlus,"1.2s").animationPeriod,g=function(h){var y={},b=Eo.length;if(h instanceof Array){for(var x=tl(h,b),D=0;D<x.length&&!(D>=4);D++)y[Eo[D]]=x[D];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[Eo[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[Eo[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n?.dense?16:12;return St.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},St.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:m}).map(function(h,y){var b=function(E,O,N){if(O===16){var w=360*E/O,H=O-E,B=Number.parseFloat(N)/O*H*-1;return{transform:"rotate(".concat(w,"deg)"),animationDelay:"".concat(B,"s")}}return{transform:"",animationDelay:""}}(y,m,d),x=b.animationDelay,D=b.transform;return St.createElement("span",{key:ov(),className:"rli-d-i-b dot-shape-holder",style:D?{transform:D}:void 0},St.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),St.createElement(Ir,{className:"OP-dotted-text",text:n?.text,textColor:n?.textColor})))};Qt(`.OP-spokes-rli-bounding-box {
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
}`);var Oo=Array.from({length:4},function(n,i){return"--OP-spokes-phase".concat(i+1,"-color")}),fE=function(n){var i,l=Wr(n?.style,n?.size),o=l.styles,c=l.fontSize,f=n?.easing,d=$r(n?.speedPlus,"1.2s").animationPeriod,g=function(h){var y={},b=Oo.length;if(h instanceof Array){for(var x=tl(h,b),D=0;D<x.length&&!(D>=4);D++)y[Oo[D]]=x[D];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[Oo[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" instead with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[Oo[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n?.dense?16:12;return St.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},St.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:m},function(h,y){return St.createElement("span",{key:ov(),className:"rli-d-i-b spoke",style:dE(y,m,d)})})),St.createElement(Ir,{text:n?.text,textColor:n?.textColor}))};function dE(n,i,l){if(i===16){var o=i-n,c=Number.parseFloat(l)/i;return{transform:"rotate(".concat(360*n/i,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((o-1)*c*-1,"s")}}}Qt(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var Do=Array.from({length:4},function(n,i){return"--OP-annulus-dual-sectors-phase".concat(i+1,"-color")}),hE=function(n){var i,l=Wr(n?.style,n?.size),o=l.styles,c=l.fontSize,f=n?.easing,d=$r(n?.speedPlus,"1.2s").animationPeriod,g=function(h){var y={},b=Do.length;if(h instanceof Array){for(var x=tl(h,b),D=0;D<x.length&&!(D>=4);D++)y[Do[D]]=x[D];return y}try{if(typeof h!="string")throw new Error("Color String expected");for(var E=0;E<b;E++)y[Do[E]]=h}catch(O){for(O instanceof Error?console.warn("[".concat(O.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),E=0;E<b;E++)y[Do[E]]=Sn}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n.dense?"0.45em":"";return St.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},St.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},St.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ht({},m&&{borderWidth:m})}),St.createElement(Ir,{className:"OP-annulus-dual-sectors-text",text:n?.text,textColor:n?.textColor})))};Qt(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var Mr=Array.from({length:4},function(n,i){return["--OP-annulus-track-phase".concat(i+1,"-color"),"--OP-annulus-sector-phase".concat(i+1,"-color")]}),Mo=function(n){return n===void 0&&(n=1),.25*n},mE=function(n){var i,l=Wr(n?.style,n?.size),o=l.styles,c=l.fontSize,f=n?.easing,d=$r(n?.speedPlus,"1s").animationPeriod,g=function(h){var y={},b=Mr.length;if(h instanceof Array){for(var x=tl(h,b),D=0;D<x.length&&!(D>=4);D++){var E=Mr[D];try{if(!(w=J(x[D])).isValid())throw new Error("Invalid Color: ".concat(w.getOriginalInput()));var O=w.setAlpha(Mo(w.getAlpha())).toRgbString(),N=x[D];y[E[0]]=O,y[E[1]]=N}catch{N=Sn,O=(w=J(Sn)).setAlpha(Mo(w.getAlpha())).toRgbString(),y[E[0]]=O,y[E[1]]=N}}return y}try{var w=J(h);if(typeof h!="string")throw new Error("Color String expected");if(!w.isValid())throw new Error("Invalid Color: ".concat(w.getOriginalInput()));N=h,O=w.setAlpha(Mo(w.getAlpha())).toRgbString();for(var H=0;H<b;H++)y[(E=Mr[H])[0]]=O,y[E[1]]=N}catch(B){for(B instanceof Error?console.warn("[".concat(B.message,']: Received "').concat(typeof h,'" with value, ').concat(JSON.stringify(h))):console.warn("".concat(JSON.stringify(h),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),N=Sn,O=(w=J(Sn)).setAlpha(Mo(w.getAlpha())).toRgbString(),H=0;H<Mr.length;H++)y[(E=Mr[H])[0]]=O,y[E[1]]=N}return y}((i=n?.color)!==null&&i!==void 0?i:""),m=n.dense?"0.45em":"";return St.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ht(ht(ht(ht(ht({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),g),o),role:"status","aria-live":"polite","aria-label":"Loading"},St.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},St.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ht({},m&&{borderWidth:m})}),St.createElement(Ir,{className:"OP-annulus-sector-text",text:n?.text,textColor:n?.textColor})))},pE=function(n){var i=Object(n).variant,l=i===void 0?"disc":i;return l==="dotted"?St.createElement(cE,ht({},n)):l==="spokes"?St.createElement(fE,ht({},n)):l==="disc"?St.createElement(uE,ht({},n)):l==="split-disc"?St.createElement(hE,ht({},n)):l==="track-disc"?St.createElement(mE,ht({},n)):null};Qt(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(n,i){return"--life-line-phase".concat(i+1,"-color")});const gE=()=>G.jsx("div",{className:"w-screen justify-center",children:G.jsxs("div",{className:"p-10 w-3/4 min-h-screen bg-white flex flex-col items-center justify-center",children:[G.jsx(Pf,{text:"My Resume",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight p-10"}),G.jsx(k.Suspense,{fallback:G.jsx(pE,{variant:"disc",color:"#a9a9a9",size:"medium"}),children:G.jsx("iframe",{src:"/my_website//Resume.pdf",title:"Resume PDF",className:"w-full max-w-5xl h-[90vh] border rounded-lg shadow-lg"})}),G.jsx("a",{href:"/my_website//Resume.pdf",download:!0,className:"mt-6 text-blue-600 hover:underline text-lg",children:"Download PDF"})]})});function yE(){return G.jsxs("div",{children:[G.jsxs("nav",{style:{display:"flex",gap:12},children:[G.jsx(Cr,{to:"",children:"Home"}),G.jsx(Cr,{to:"projects",children:"Projects"}),G.jsx(Cr,{to:"resume",children:"Resume"})]}),G.jsxs(kx,{children:[G.jsx(Ro,{path:"/",element:G.jsx(GA,{})}),G.jsx(Ro,{path:"projects",element:G.jsx(KA,{})}),G.jsx(Ro,{path:"resume",element:G.jsx(gE,{})})]})]})}const vE="/my_website/".replace(/\/$/,"");P1.createRoot(document.getElementById("root")).render(G.jsx(St.StrictMode,{children:G.jsx(t5,{basename:vE,children:G.jsx(yE,{})})}));
