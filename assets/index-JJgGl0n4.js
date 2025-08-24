(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function fs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mn={exports:{}},oe={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br;function ps(){if(Br)return oe;Br=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,i,o){var a=null;if(o!==void 0&&(a=""+o),i.key!==void 0&&(a=""+i.key),"key"in i){o={};for(var s in i)s!=="key"&&(o[s]=i[s])}else o=i;return i=o.ref,{$$typeof:t,type:r,key:a,ref:i!==void 0?i:null,props:o}}return oe.Fragment=e,oe.jsx=n,oe.jsxs=n,oe}var $r;function ms(){return $r||($r=1,mn.exports=ps()),mn.exports}var b=ms(),gn={exports:{}},j={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zr;function gs(){if(zr)return j;zr=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),a=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),d=Symbol.iterator;function h(m){return m===null||typeof m!="object"?null:(m=d&&m[d]||m["@@iterator"],typeof m=="function"?m:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,f={};function x(m,T,O){this.props=m,this.context=T,this.refs=f,this.updater=O||g}x.prototype.isReactComponent={},x.prototype.setState=function(m,T){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,T,"setState")},x.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function v(){}v.prototype=x.prototype;function P(m,T,O){this.props=m,this.context=T,this.refs=f,this.updater=O||g}var w=P.prototype=new v;w.constructor=P,p(w,x.prototype),w.isPureReactComponent=!0;var C=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},M=Object.prototype.hasOwnProperty;function V(m,T,O,R,_,W){return O=W.ref,{$$typeof:t,type:m,key:T,ref:O!==void 0?O:null,props:W}}function A(m,T){return V(m.type,T,void 0,void 0,void 0,m.props)}function D(m){return typeof m=="object"&&m!==null&&m.$$typeof===t}function H(m){var T={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(O){return T[O]})}var nt=/\/+/g;function $t(m,T){return typeof m=="object"&&m!==null&&m.key!=null?H(""+m.key):T.toString(36)}function Ve(){}function Le(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Ve,Ve):(m.status="pending",m.then(function(T){m.status==="pending"&&(m.status="fulfilled",m.value=T)},function(T){m.status==="pending"&&(m.status="rejected",m.reason=T)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function Mt(m,T,O,R,_){var W=typeof m;(W==="undefined"||W==="boolean")&&(m=null);var N=!1;if(m===null)N=!0;else switch(W){case"bigint":case"string":case"number":N=!0;break;case"object":switch(m.$$typeof){case t:case e:N=!0;break;case u:return N=m._init,Mt(N(m._payload),T,O,R,_)}}if(N)return _=_(m),N=R===""?"."+$t(m,0):R,C(_)?(O="",N!=null&&(O=N.replace(nt,"$&/")+"/"),Mt(_,T,O,"",function(hs){return hs})):_!=null&&(D(_)&&(_=A(_,O+(_.key==null||m&&m.key===_.key?"":(""+_.key).replace(nt,"$&/")+"/")+N)),T.push(_)),1;N=0;var Pt=R===""?".":R+":";if(C(m))for(var Y=0;Y<m.length;Y++)R=m[Y],W=Pt+$t(R,Y),N+=Mt(R,T,O,W,_);else if(Y=h(m),typeof Y=="function")for(m=Y.call(m),Y=0;!(R=m.next()).done;)R=R.value,W=Pt+$t(R,Y++),N+=Mt(R,T,O,W,_);else if(W==="object"){if(typeof m.then=="function")return Mt(Le(m),T,O,R,_);throw T=String(m),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return N}function re(m,T,O){if(m==null)return m;var R=[],_=0;return Mt(m,R,"","",function(W){return T.call(O,W,_++)}),R}function X(m){if(m._status===-1){var T=m._result;T=T(),T.then(function(O){(m._status===0||m._status===-1)&&(m._status=1,m._result=O)},function(O){(m._status===0||m._status===-1)&&(m._status=2,m._result=O)}),m._status===-1&&(m._status=0,m._result=T)}if(m._status===1)return m._result.default;throw m._result}var rt=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)};function ie(){}return j.Children={map:re,forEach:function(m,T,O){re(m,function(){T.apply(this,arguments)},O)},count:function(m){var T=0;return re(m,function(){T++}),T},toArray:function(m){return re(m,function(T){return T})||[]},only:function(m){if(!D(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},j.Component=x,j.Fragment=n,j.Profiler=i,j.PureComponent=P,j.StrictMode=r,j.Suspense=l,j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,j.__COMPILER_RUNTIME={__proto__:null,c:function(m){return k.H.useMemoCache(m)}},j.cache=function(m){return function(){return m.apply(null,arguments)}},j.cloneElement=function(m,T,O){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var R=p({},m.props),_=m.key,W=void 0;if(T!=null)for(N in T.ref!==void 0&&(W=void 0),T.key!==void 0&&(_=""+T.key),T)!M.call(T,N)||N==="key"||N==="__self"||N==="__source"||N==="ref"&&T.ref===void 0||(R[N]=T[N]);var N=arguments.length-2;if(N===1)R.children=O;else if(1<N){for(var Pt=Array(N),Y=0;Y<N;Y++)Pt[Y]=arguments[Y+2];R.children=Pt}return V(m.type,_,void 0,void 0,W,R)},j.createContext=function(m){return m={$$typeof:a,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:o,_context:m},m},j.createElement=function(m,T,O){var R,_={},W=null;if(T!=null)for(R in T.key!==void 0&&(W=""+T.key),T)M.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(_[R]=T[R]);var N=arguments.length-2;if(N===1)_.children=O;else if(1<N){for(var Pt=Array(N),Y=0;Y<N;Y++)Pt[Y]=arguments[Y+2];_.children=Pt}if(m&&m.defaultProps)for(R in N=m.defaultProps,N)_[R]===void 0&&(_[R]=N[R]);return V(m,W,void 0,void 0,null,_)},j.createRef=function(){return{current:null}},j.forwardRef=function(m){return{$$typeof:s,render:m}},j.isValidElement=D,j.lazy=function(m){return{$$typeof:u,_payload:{_status:-1,_result:m},_init:X}},j.memo=function(m,T){return{$$typeof:c,type:m,compare:T===void 0?null:T}},j.startTransition=function(m){var T=k.T,O={};k.T=O;try{var R=m(),_=k.S;_!==null&&_(O,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(ie,rt)}catch(W){rt(W)}finally{k.T=T}},j.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},j.use=function(m){return k.H.use(m)},j.useActionState=function(m,T,O){return k.H.useActionState(m,T,O)},j.useCallback=function(m,T){return k.H.useCallback(m,T)},j.useContext=function(m){return k.H.useContext(m)},j.useDebugValue=function(){},j.useDeferredValue=function(m,T){return k.H.useDeferredValue(m,T)},j.useEffect=function(m,T,O){var R=k.H;if(typeof O=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(m,T)},j.useId=function(){return k.H.useId()},j.useImperativeHandle=function(m,T,O){return k.H.useImperativeHandle(m,T,O)},j.useInsertionEffect=function(m,T){return k.H.useInsertionEffect(m,T)},j.useLayoutEffect=function(m,T){return k.H.useLayoutEffect(m,T)},j.useMemo=function(m,T){return k.H.useMemo(m,T)},j.useOptimistic=function(m,T){return k.H.useOptimistic(m,T)},j.useReducer=function(m,T,O){return k.H.useReducer(m,T,O)},j.useRef=function(m){return k.H.useRef(m)},j.useState=function(m){return k.H.useState(m)},j.useSyncExternalStore=function(m,T,O){return k.H.useSyncExternalStore(m,T,O)},j.useTransition=function(){return k.H.useTransition()},j.version="19.1.0",j}var Ur;function bs(){return Ur||(Ur=1,gn.exports=gs()),gn.exports}var y=bs();const F=fs(y);/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hr="popstate";function ys(t={}){function e(r,i){let{pathname:o,search:a,hash:s}=r.location;return Qe("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xt(i)}return mo(e,n,null,t)}function vs(t={}){function e(i,o){let{pathname:a="/",search:s="",hash:l=""}=It(i.location.hash.substring(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Qe("",{pathname:a,search:s,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let a=i.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");s=c===-1?l:l.slice(0,c)}return s+"#"+(typeof o=="string"?o:Xt(o))}function r(i,o){ut(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(o)})`)}return mo(e,n,r,t)}function z(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ut(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xs(){return Math.random().toString(36).substring(2,10)}function Wr(t,e){return{usr:t.state,key:t.key,idx:e}}function Qe(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?It(e):e,state:n,key:e&&e.key||r||xs()}}function Xt({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function It(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function mo(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,s="POP",l=null,c=u();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function u(){return(a.state||{idx:null}).idx}function d(){s="POP";let x=u(),v=x==null?null:x-c;c=x,l&&l({action:s,location:f.location,delta:v})}function h(x,v){s="PUSH";let P=Qe(f.location,x,v);n&&n(P,x),c=u()+1;let w=Wr(P,c),C=f.createHref(P);try{a.pushState(w,"",C)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(C)}o&&l&&l({action:s,location:f.location,delta:1})}function g(x,v){s="REPLACE";let P=Qe(f.location,x,v);n&&n(P,x),c=u();let w=Wr(P,c),C=f.createHref(P);a.replaceState(w,"",C),o&&l&&l({action:s,location:f.location,delta:0})}function p(x){return ws(x)}let f={get action(){return s},get location(){return t(i,a)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hr,d),l=x,()=>{i.removeEventListener(Hr,d),l=null}},createHref(x){return e(i,x)},createURL:p,encodeLocation(x){let v=p(x);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:h,replace:g,go(x){return a.go(x)}};return f}function ws(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),z(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:Xt(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function go(t,e,n="/"){return Ps(t,e,n,!1)}function Ps(t,e,n,r){let i=typeof e=="string"?It(e):e,o=yt(i.pathname||"/",n);if(o==null)return null;let a=bo(t);ks(a);let s=null;for(let l=0;s==null&&l<a.length;++l){let c=Vs(o);s=Ds(a[l],c,r)}return s}function bo(t,e=[],n=[],r=""){let i=(o,a,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};l.relativePath.startsWith("/")&&(z(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let c=bt([r,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(z(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),bo(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:Rs(c,o.index),routesMeta:u})};return t.forEach((o,a)=>{if(o.path===""||!o.path?.includes("?"))i(o,a);else for(let s of yo(o.path))i(o,a,s)}),e}function yo(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=yo(r.join("/")),s=[];return s.push(...a.map(l=>l===""?o:[o,l].join("/"))),i&&s.push(...a),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function ks(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ms(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Ts=/^:[\w-]+$/,Ss=3,Cs=2,As=1,Es=10,Os=-2,qr=t=>t==="*";function Rs(t,e){let n=t.split("/"),r=n.length;return n.some(qr)&&(r+=Os),e&&(r+=Cs),n.filter(i=>!qr(i)).reduce((i,o)=>i+(Ts.test(o)?Ss:o===""?As:Es),r)}function Ms(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ds(t,e,n=!1){let{routesMeta:r}=t,i={},o="/",a=[];for(let s=0;s<r.length;++s){let l=r[s],c=s===r.length-1,u=o==="/"?e:e.slice(o.length)||"/",d=tn({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=tn({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:bt([o,d.pathname]),pathnameBase:Fs(bt([o,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(o=bt([o,d.pathnameBase]))}return a}function tn(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=js(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,{paramName:u,isOptional:d},h)=>{if(u==="*"){let p=s[h]||"";a=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}const g=s[h];return d&&!g?c[u]=void 0:c[u]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:t}}function js(t,e=!1,n=!0){ut(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Vs(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ut(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function yt(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ls(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?It(t):t;return{pathname:n?n.startsWith("/")?n:Ns(n,e):e,search:Is(r),hash:Bs(i)}}function Ns(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bn(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _s(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vo(t){let e=_s(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function xo(t,e,n,r=!1){let i;typeof t=="string"?i=It(t):(i={...t},z(!i.pathname||!i.pathname.includes("?"),bn("?","pathname","search",i)),z(!i.pathname||!i.pathname.includes("#"),bn("#","pathname","hash",i)),z(!i.search||!i.search.includes("#"),bn("#","search","hash",i)));let o=t===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=n;else{let d=e.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}s=d>=0?e[d]:"/"}let l=Ls(i,s),c=a&&a!=="/"&&a.endsWith("/"),u=(o||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var bt=t=>t.join("/").replace(/\/\/+/g,"/"),Fs=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Is=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Bs=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function $s(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var wo=["POST","PUT","PATCH","DELETE"];new Set(wo);var zs=["GET",...wo];new Set(zs);var Qt=y.createContext(null);Qt.displayName="DataRouter";var ln=y.createContext(null);ln.displayName="DataRouterState";y.createContext(!1);var Po=y.createContext({isTransitioning:!1});Po.displayName="ViewTransition";var Us=y.createContext(new Map);Us.displayName="Fetchers";var Hs=y.createContext(null);Hs.displayName="Await";var pt=y.createContext(null);pt.displayName="Navigation";var ke=y.createContext(null);ke.displayName="Location";var wt=y.createContext({outlet:null,matches:[],isDataRoute:!1});wt.displayName="Route";var nr=y.createContext(null);nr.displayName="RouteError";function Ws(t,{relative:e}={}){z(Te(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.useContext(pt),{hash:i,pathname:o,search:a}=Se(t,{relative:e}),s=o;return n!=="/"&&(s=o==="/"?n:bt([n,o])),r.createHref({pathname:s,search:a,hash:i})}function Te(){return y.useContext(ke)!=null}function Bt(){return z(Te(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(ke).location}var ko="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function To(t){y.useContext(pt).static||y.useLayoutEffect(t)}function qs(){let{isDataRoute:t}=y.useContext(wt);return t?ol():Ks()}function Ks(){z(Te(),"useNavigate() may be used only in the context of a <Router> component.");let t=y.useContext(Qt),{basename:e,navigator:n}=y.useContext(pt),{matches:r}=y.useContext(wt),{pathname:i}=Bt(),o=JSON.stringify(vo(r)),a=y.useRef(!1);return To(()=>{a.current=!0}),y.useCallback((l,c={})=>{if(ut(a.current,ko),!a.current)return;if(typeof l=="number"){n.go(l);return}let u=xo(l,JSON.parse(o),i,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:bt([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,o,i,t])}y.createContext(null);function Se(t,{relative:e}={}){let{matches:n}=y.useContext(wt),{pathname:r}=Bt(),i=JSON.stringify(vo(n));return y.useMemo(()=>xo(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function Ys(t,e){return So(t,e)}function So(t,e,n,r){z(Te(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=y.useContext(pt),{matches:o}=y.useContext(wt),a=o[o.length-1],s=a?a.params:{},l=a?a.pathname:"/",c=a?a.pathnameBase:"/",u=a&&a.route;{let v=u&&u.path||"";Co(l,!u||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let d=Bt(),h;if(e){let v=typeof e=="string"?It(e):e;z(c==="/"||v.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${v.pathname}" was given in the \`location\` prop.`),h=v}else h=d;let g=h.pathname||"/",p=g;if(c!=="/"){let v=c.replace(/^\//,"").split("/");p="/"+g.replace(/^\//,"").split("/").slice(v.length).join("/")}let f=go(t,{pathname:p});ut(u||f!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),ut(f==null||f[f.length-1].route.element!==void 0||f[f.length-1].route.Component!==void 0||f[f.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=Qs(f&&f.map(v=>Object.assign({},v,{params:Object.assign({},s,v.params),pathname:bt([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:bt([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,n,r);return e&&x?y.createElement(ke.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...h},navigationType:"POP"}},x):x}function Gs(){let t=il(),e=$s(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},o={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",t),a=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:o},"ErrorBoundary")," or"," ",y.createElement("code",{style:o},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),n?y.createElement("pre",{style:i},n):null,a)}var Xs=y.createElement(Gs,null),Zs=class extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?y.createElement(wt.Provider,{value:this.props.routeContext},y.createElement(nr.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Js({routeContext:t,match:e,children:n}){let r=y.useContext(Qt);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),y.createElement(wt.Provider,{value:t},n)}function Qs(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,o=n?.errors;if(o!=null){let l=i.findIndex(c=>c.route.id&&o?.[c.route.id]!==void 0);z(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let a=!1,s=-1;if(n)for(let l=0;l<i.length;l++){let c=i[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(s=l),c.route.id){let{loaderData:u,errors:d}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!d||d[c.route.id]===void 0);if(c.route.lazy||h){a=!0,s>=0?i=i.slice(0,s+1):i=[i[0]];break}}}return i.reduceRight((l,c,u)=>{let d,h=!1,g=null,p=null;n&&(d=o&&c.route.id?o[c.route.id]:void 0,g=c.route.errorElement||Xs,a&&(s<0&&u===0?(Co("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,p=null):s===u&&(h=!0,p=c.route.hydrateFallbackElement||null)));let f=e.concat(i.slice(0,u+1)),x=()=>{let v;return d?v=g:h?v=p:c.route.Component?v=y.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=l,y.createElement(Js,{match:c,routeContext:{outlet:l,matches:f,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?y.createElement(Zs,{location:n.location,revalidation:n.revalidation,component:g,error:d,children:x(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):x()},null)}function rr(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tl(t){let e=y.useContext(Qt);return z(e,rr(t)),e}function el(t){let e=y.useContext(ln);return z(e,rr(t)),e}function nl(t){let e=y.useContext(wt);return z(e,rr(t)),e}function ir(t){let e=nl(t),n=e.matches[e.matches.length-1];return z(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function rl(){return ir("useRouteId")}function il(){let t=y.useContext(nr),e=el("useRouteError"),n=ir("useRouteError");return t!==void 0?t:e.errors?.[n]}function ol(){let{router:t}=tl("useNavigate"),e=ir("useNavigate"),n=y.useRef(!1);return To(()=>{n.current=!0}),y.useCallback(async(i,o={})=>{ut(n.current,ko),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...o}))},[t,e])}var Kr={};function Co(t,e,n){!e&&!Kr[t]&&(Kr[t]=!0,ut(!1,n))}y.memo(al);function al({routes:t,future:e,state:n}){return So(t,void 0,n,e)}function Ht(t){z(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ao({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:o=!1}){z(!Te(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=t.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:a,navigator:i,static:o,future:{}}),[a,i,o]);typeof n=="string"&&(n=It(n));let{pathname:l="/",search:c="",hash:u="",state:d=null,key:h="default"}=n,g=y.useMemo(()=>{let p=yt(l,a);return p==null?null:{location:{pathname:p,search:c,hash:u,state:d,key:h},navigationType:r}},[a,l,c,u,d,h,r]);return ut(g!=null,`<Router basename="${a}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),g==null?null:y.createElement(pt.Provider,{value:s},y.createElement(ke.Provider,{children:e,value:g}))}function sl({children:t,location:e}){return Ys(Vn(t),e)}function Vn(t,e=[]){let n=[];return y.Children.forEach(t,(r,i)=>{if(!y.isValidElement(r))return;let o=[...e,i];if(r.type===y.Fragment){n.push.apply(n,Vn(r.props.children,o));return}z(r.type===Ht,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),z(!r.props.index||!r.props.children,"An index route cannot have child routes.");let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Vn(r.props.children,o)),n.push(a)}),n}var Ke="get",Ye="application/x-www-form-urlencoded";function cn(t){return t!=null&&typeof t.tagName=="string"}function ll(t){return cn(t)&&t.tagName.toLowerCase()==="button"}function cl(t){return cn(t)&&t.tagName.toLowerCase()==="form"}function ul(t){return cn(t)&&t.tagName.toLowerCase()==="input"}function dl(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hl(t,e){return t.button===0&&(!e||e==="_self")&&!dl(t)}var Ne=null;function fl(){if(Ne===null)try{new FormData(document.createElement("form"),0),Ne=!1}catch{Ne=!0}return Ne}var pl=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function yn(t){return t!=null&&!pl.has(t)?(ut(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ye}"`),null):t}function ml(t,e){let n,r,i,o,a;if(cl(t)){let s=t.getAttribute("action");r=s?yt(s,e):null,n=t.getAttribute("method")||Ke,i=yn(t.getAttribute("enctype"))||Ye,o=new FormData(t)}else if(ll(t)||ul(t)&&(t.type==="submit"||t.type==="image")){let s=t.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||s.getAttribute("action");if(r=l?yt(l,e):null,n=t.getAttribute("formmethod")||s.getAttribute("method")||Ke,i=yn(t.getAttribute("formenctype"))||yn(s.getAttribute("enctype"))||Ye,o=new FormData(s,t),!fl()){let{name:c,type:u,value:d}=t;if(u==="image"){let h=c?`${c}.`:"";o.append(`${h}x`,"0"),o.append(`${h}y`,"0")}else c&&o.append(c,d)}}else{if(cn(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ke,r=null,i=Ye,a=t}return o&&i==="text/plain"&&(a=o,o=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function or(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gl(t,e,n){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname=`_root.${n}`:e&&yt(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function bl(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yl(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function vl(t,e,n){let r=await Promise.all(t.map(async i=>{let o=e.routes[i.route.id];if(o){let a=await bl(o,n);return a.links?a.links():[]}return[]}));return kl(r.flat(1).filter(yl).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Yr(t,e,n,r,i,o){let a=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,s=(l,c)=>n[c].pathname!==l.pathname||n[c].route.path?.endsWith("*")&&n[c].params["*"]!==l.params["*"];return o==="assets"?e.filter((l,c)=>a(l,c)||s(l,c)):o==="data"?e.filter((l,c)=>{let u=r.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(a(l,c)||s(l,c))return!0;if(l.route.shouldRevalidate){let d=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof d=="boolean")return d}return!0}):[]}function xl(t,e,{includeHydrateFallback:n}={}){return wl(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function wl(t){return[...new Set(t)]}function Pl(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function kl(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let o=JSON.stringify(Pl(i));return n.has(o)||(n.add(o),r.push({key:o,link:i})),r},[])}function Eo(){let t=y.useContext(Qt);return or(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Tl(){let t=y.useContext(ln);return or(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var ar=y.createContext(void 0);ar.displayName="FrameworkContext";function Oo(){let t=y.useContext(ar);return or(t,"You must render this element inside a <HydratedRouter> element"),t}function Sl(t,e){let n=y.useContext(ar),[r,i]=y.useState(!1),[o,a]=y.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:d}=e,h=y.useRef(null);y.useEffect(()=>{if(t==="render"&&a(!0),t==="viewport"){let f=v=>{v.forEach(P=>{a(P.isIntersecting)})},x=new IntersectionObserver(f,{threshold:.5});return h.current&&x.observe(h.current),()=>{x.disconnect()}}},[t]),y.useEffect(()=>{if(r){let f=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(f)}}},[r]);let g=()=>{i(!0)},p=()=>{i(!1),a(!1)};return n?t!=="intent"?[o,h,{}]:[o,h,{onFocus:ae(s,g),onBlur:ae(l,p),onMouseEnter:ae(c,g),onMouseLeave:ae(u,p),onTouchStart:ae(d,g)}]:[!1,h,{}]}function ae(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Cl({page:t,...e}){let{router:n}=Eo(),r=y.useMemo(()=>go(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?y.createElement(El,{page:t,matches:r,...e}):null}function Al(t){let{manifest:e,routeModules:n}=Oo(),[r,i]=y.useState([]);return y.useEffect(()=>{let o=!1;return vl(t,e,n).then(a=>{o||i(a)}),()=>{o=!0}},[t,e,n]),r}function El({page:t,matches:e,...n}){let r=Bt(),{manifest:i,routeModules:o}=Oo(),{basename:a}=Eo(),{loaderData:s,matches:l}=Tl(),c=y.useMemo(()=>Yr(t,e,l,i,r,"data"),[t,e,l,i,r]),u=y.useMemo(()=>Yr(t,e,l,i,r,"assets"),[t,e,l,i,r]),d=y.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let p=new Set,f=!1;if(e.forEach(v=>{let P=i.routes[v.route.id];!P||!P.hasLoader||(!c.some(w=>w.route.id===v.route.id)&&v.route.id in s&&o[v.route.id]?.shouldRevalidate||P.hasClientLoader?f=!0:p.add(v.route.id))}),p.size===0)return[];let x=gl(t,a,"data");return f&&p.size>0&&x.searchParams.set("_routes",e.filter(v=>p.has(v.route.id)).map(v=>v.route.id).join(",")),[x.pathname+x.search]},[a,s,r,i,c,e,t,o]),h=y.useMemo(()=>xl(u,i),[u,i]),g=Al(u);return y.createElement(y.Fragment,null,d.map(p=>y.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...n})),h.map(p=>y.createElement("link",{key:p,rel:"modulepreload",href:p,...n})),g.map(({key:p,link:f})=>y.createElement("link",{key:p,...f})))}function Ol(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Ro=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ro&&(window.__reactRouterVersion="7.7.0")}catch{}function Rl({basename:t,children:e,window:n}){let r=y.useRef();r.current==null&&(r.current=ys({window:n,v5Compat:!0}));let i=r.current,[o,a]=y.useState({action:i.action,location:i.location}),s=y.useCallback(l=>{y.startTransition(()=>a(l))},[a]);return y.useLayoutEffect(()=>i.listen(s),[i,s]),y.createElement(Ao,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i})}function Ml({basename:t,children:e,window:n}){let r=y.useRef();r.current==null&&(r.current=vs({window:n,v5Compat:!0}));let i=r.current,[o,a]=y.useState({action:i.action,location:i.location}),s=y.useCallback(l=>{y.startTransition(()=>a(l))},[a]);return y.useLayoutEffect(()=>i.listen(s),[i,s]),y.createElement(Ao,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:i})}var Mo=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sr=y.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:o,replace:a,state:s,target:l,to:c,preventScrollReset:u,viewTransition:d,...h},g){let{basename:p}=y.useContext(pt),f=typeof c=="string"&&Mo.test(c),x,v=!1;if(typeof c=="string"&&f&&(x=c,Ro))try{let D=new URL(window.location.href),H=c.startsWith("//")?new URL(D.protocol+c):new URL(c),nt=yt(H.pathname,p);H.origin===D.origin&&nt!=null?c=nt+H.search+H.hash:v=!0}catch{ut(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=Ws(c,{relative:i}),[w,C,k]=Sl(r,h),M=Ll(c,{replace:a,state:s,target:l,preventScrollReset:u,relative:i,viewTransition:d});function V(D){e&&e(D),D.defaultPrevented||M(D)}let A=y.createElement("a",{...h,...k,href:x||P,onClick:v||o?e:V,ref:Ol(g,C),target:l,"data-discover":!f&&n==="render"?"true":void 0});return w&&!f?y.createElement(y.Fragment,null,A,y.createElement(Cl,{page:P})):A});sr.displayName="Link";var Dl=y.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:o,to:a,viewTransition:s,children:l,...c},u){let d=Se(a,{relative:c.relative}),h=Bt(),g=y.useContext(ln),{navigator:p,basename:f}=y.useContext(pt),x=g!=null&&Bl(d)&&s===!0,v=p.encodeLocation?p.encodeLocation(d).pathname:d.pathname,P=h.pathname,w=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;n||(P=P.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&f&&(w=yt(w,f)||w);const C=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let k=P===v||!i&&P.startsWith(v)&&P.charAt(C)==="/",M=w!=null&&(w===v||!i&&w.startsWith(v)&&w.charAt(v.length)==="/"),V={isActive:k,isPending:M,isTransitioning:x},A=k?e:void 0,D;typeof r=="function"?D=r(V):D=[r,k?"active":null,M?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let H=typeof o=="function"?o(V):o;return y.createElement(sr,{...c,"aria-current":A,className:D,ref:u,style:H,to:a,viewTransition:s},typeof l=="function"?l(V):l)});Dl.displayName="NavLink";var jl=y.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:o,method:a=Ke,action:s,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:d,...h},g)=>{let p=Fl(),f=Il(s,{relative:c}),x=a.toLowerCase()==="get"?"get":"post",v=typeof s=="string"&&Mo.test(s),P=w=>{if(l&&l(w),w.defaultPrevented)return;w.preventDefault();let C=w.nativeEvent.submitter,k=C?.getAttribute("formmethod")||a;p(C||w.currentTarget,{fetcherKey:e,method:k,navigate:n,replace:i,state:o,relative:c,preventScrollReset:u,viewTransition:d})};return y.createElement("form",{ref:g,method:x,action:f,onSubmit:r?l:P,...h,"data-discover":!v&&t==="render"?"true":void 0})});jl.displayName="Form";function Vl(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Do(t){let e=y.useContext(Qt);return z(e,Vl(t)),e}function Ll(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:o,viewTransition:a}={}){let s=qs(),l=Bt(),c=Se(t,{relative:o});return y.useCallback(u=>{if(hl(u,e)){u.preventDefault();let d=n!==void 0?n:Xt(l)===Xt(c);s(t,{replace:d,state:r,preventScrollReset:i,relative:o,viewTransition:a})}},[l,s,c,n,r,e,t,i,o,a])}var Nl=0,_l=()=>`__${String(++Nl)}__`;function Fl(){let{router:t}=Do("useSubmit"),{basename:e}=y.useContext(pt),n=rl();return y.useCallback(async(r,i={})=>{let{action:o,method:a,encType:s,formData:l,body:c}=ml(r,e);if(i.navigate===!1){let u=i.fetcherKey||_l();await t.fetch(u,n,i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||o,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||a,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function Il(t,{relative:e}={}){let{basename:n}=y.useContext(pt),r=y.useContext(wt);z(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),o={...Se(t||".",{relative:e})},a=Bt();if(t==null){o.search=a.search;let s=new URLSearchParams(o.search),l=s.getAll("index");if(l.some(u=>u==="")){s.delete("index"),l.filter(d=>d).forEach(d=>s.append("index",d));let u=s.toString();o.search=u?`?${u}`:""}}return(!t||t===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(o.pathname=o.pathname==="/"?n:bt([n,o.pathname])),Xt(o)}function Bl(t,e={}){let n=y.useContext(Po);z(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Do("useViewTransitionState"),i=Se(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=yt(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=yt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return tn(i.pathname,a)!=null||tn(i.pathname,o)!=null}const jo=y.createContext({});function $l(t){const e=y.useRef(null);return e.current===null&&(e.current=t()),e.current}const lr=typeof window<"u",zl=lr?y.useLayoutEffect:y.useEffect,cr=y.createContext(null);function ur(t,e){t.indexOf(e)===-1&&t.push(e)}function dr(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const vt=(t,e,n)=>n>e?e:n<t?t:n;let hr=()=>{};const xt={},Vo=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function Lo(t){return typeof t=="object"&&t!==null}const No=t=>/^0[^.\s]+$/u.test(t);function fr(t){let e;return()=>(e===void 0&&(e=t()),e)}const at=t=>t,Ul=(t,e)=>n=>e(t(n)),Ce=(...t)=>t.reduce(Ul),ge=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class pr{constructor(){this.subscriptions=[]}add(e){return ur(this.subscriptions,e),()=>dr(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let o=0;o<i;o++){const a=this.subscriptions[o];a&&a(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const dt=t=>t*1e3,ht=t=>t/1e3;function _o(t,e){return e?t*(1e3/e):0}const Fo=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Hl=1e-7,Wl=12;function ql(t,e,n,r,i){let o,a,s=0;do a=e+(n-e)/2,o=Fo(a,r,i)-t,o>0?n=a:e=a;while(Math.abs(o)>Hl&&++s<Wl);return a}function Ae(t,e,n,r){if(t===e&&n===r)return at;const i=o=>ql(o,0,1,t,n);return o=>o===0||o===1?o:Fo(i(o),e,r)}const Io=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Bo=t=>e=>1-t(1-e),$o=Ae(.33,1.53,.69,.99),mr=Bo($o),zo=Io(mr),Uo=t=>(t*=2)<1?.5*mr(t):.5*(2-Math.pow(2,-10*(t-1))),gr=t=>1-Math.sin(Math.acos(t)),Ho=Bo(gr),Wo=Io(gr),Kl=Ae(.42,0,1,1),Yl=Ae(0,0,.58,1),qo=Ae(.42,0,.58,1),Gl=t=>Array.isArray(t)&&typeof t[0]!="number",Ko=t=>Array.isArray(t)&&typeof t[0]=="number",Xl={linear:at,easeIn:Kl,easeInOut:qo,easeOut:Yl,circIn:gr,circInOut:Wo,circOut:Ho,backIn:mr,backInOut:zo,backOut:$o,anticipate:Uo},Zl=t=>typeof t=="string",Gr=t=>{if(Ko(t)){hr(t.length===4);const[e,n,r,i]=t;return Ae(e,n,r,i)}else if(Zl(t))return Xl[t];return t},_e=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Jl(t,e){let n=new Set,r=new Set,i=!1,o=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(u){a.has(u)&&(c.schedule(u),t()),u(s)}const c={schedule:(u,d=!1,h=!1)=>{const p=h&&i?n:r;return d&&a.add(u),p.has(u)||p.add(u),u},cancel:u=>{r.delete(u),a.delete(u)},process:u=>{if(s=u,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),n.clear(),i=!1,o&&(o=!1,c.process(u))}};return c}const Ql=40;function Yo(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,a=_e.reduce((w,C)=>(w[C]=Jl(o),w),{}),{setup:s,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:h,render:g,postRender:p}=a,f=()=>{const w=xt.useManualTiming?i.timestamp:performance.now();n=!1,xt.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,Ql),1)),i.timestamp=w,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),h.process(i),g.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(f))},x=()=>{n=!0,r=!0,i.isProcessing||t(f)};return{schedule:_e.reduce((w,C)=>{const k=a[C];return w[C]=(M,V=!1,A=!1)=>(n||x(),k.schedule(M,V,A)),w},{}),cancel:w=>{for(let C=0;C<_e.length;C++)a[_e[C]].cancel(w)},state:i,steps:a}}const{schedule:B,cancel:Et,state:Z,steps:vn}=Yo(typeof requestAnimationFrame<"u"?requestAnimationFrame:at,!0);let Ge;function tc(){Ge=void 0}const tt={now:()=>(Ge===void 0&&tt.set(Z.isProcessing||xt.useManualTiming?Z.timestamp:performance.now()),Ge),set:t=>{Ge=t,queueMicrotask(tc)}},Go=t=>e=>typeof e=="string"&&e.startsWith(t),br=Go("--"),ec=Go("var(--"),yr=t=>ec(t)?nc.test(t.split("/*")[0].trim()):!1,nc=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,te={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},be={...te,transform:t=>vt(0,1,t)},Fe={...te,default:1},de=t=>Math.round(t*1e5)/1e5,vr=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rc(t){return t==null}const ic=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,xr=(t,e)=>n=>!!(typeof n=="string"&&ic.test(n)&&n.startsWith(t)||e&&!rc(n)&&Object.prototype.hasOwnProperty.call(n,e)),Xo=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,o,a,s]=r.match(vr);return{[t]:parseFloat(i),[e]:parseFloat(o),[n]:parseFloat(a),alpha:s!==void 0?parseFloat(s):1}},oc=t=>vt(0,255,t),xn={...te,transform:t=>Math.round(oc(t))},Lt={test:xr("rgb","red"),parse:Xo("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+xn.transform(t)+", "+xn.transform(e)+", "+xn.transform(n)+", "+de(be.transform(r))+")"};function ac(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ln={test:xr("#"),parse:ac,transform:Lt.transform},Ee=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),At=Ee("deg"),ft=Ee("%"),E=Ee("px"),sc=Ee("vh"),lc=Ee("vw"),Xr={...ft,parse:t=>ft.parse(t)/100,transform:t=>ft.transform(t*100)},Wt={test:xr("hsl","hue"),parse:Xo("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+ft.transform(de(e))+", "+ft.transform(de(n))+", "+de(be.transform(r))+")"},K={test:t=>Lt.test(t)||Ln.test(t)||Wt.test(t),parse:t=>Lt.test(t)?Lt.parse(t):Wt.test(t)?Wt.parse(t):Ln.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Lt.transform(t):Wt.transform(t),getAnimatableNone:t=>{const e=K.parse(t);return e.alpha=0,K.transform(e)}},cc=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function uc(t){return isNaN(t)&&typeof t=="string"&&(t.match(vr)?.length||0)+(t.match(cc)?.length||0)>0}const Zo="number",Jo="color",dc="var",hc="var(",Zr="${}",fc=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ye(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const s=e.replace(fc,l=>(K.test(l)?(r.color.push(o),i.push(Jo),n.push(K.parse(l))):l.startsWith(hc)?(r.var.push(o),i.push(dc),n.push(l)):(r.number.push(o),i.push(Zo),n.push(parseFloat(l))),++o,Zr)).split(Zr);return{values:n,split:s,indexes:r,types:i}}function Qo(t){return ye(t).values}function ta(t){const{split:e,types:n}=ye(t),r=e.length;return i=>{let o="";for(let a=0;a<r;a++)if(o+=e[a],i[a]!==void 0){const s=n[a];s===Zo?o+=de(i[a]):s===Jo?o+=K.transform(i[a]):o+=i[a]}return o}}const pc=t=>typeof t=="number"?0:K.test(t)?K.getAnimatableNone(t):t;function mc(t){const e=Qo(t);return ta(t)(e.map(pc))}const Ot={test:uc,parse:Qo,createTransformer:ta,getAnimatableNone:mc};function wn(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function gc({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,o=0,a=0;if(!e)i=o=a=n;else{const s=n<.5?n*(1+e):n+e-n*e,l=2*n-s;i=wn(l,s,t+1/3),o=wn(l,s,t),a=wn(l,s,t-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:r}}function en(t,e){return n=>n>0?e:t}const $=(t,e,n)=>t+(e-t)*n,Pn=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},bc=[Ln,Lt,Wt],yc=t=>bc.find(e=>e.test(t));function Jr(t){const e=yc(t);if(!e)return!1;let n=e.parse(t);return e===Wt&&(n=gc(n)),n}const Qr=(t,e)=>{const n=Jr(t),r=Jr(e);if(!n||!r)return en(t,e);const i={...n};return o=>(i.red=Pn(n.red,r.red,o),i.green=Pn(n.green,r.green,o),i.blue=Pn(n.blue,r.blue,o),i.alpha=$(n.alpha,r.alpha,o),Lt.transform(i))},Nn=new Set(["none","hidden"]);function vc(t,e){return Nn.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function xc(t,e){return n=>$(t,e,n)}function wr(t){return typeof t=="number"?xc:typeof t=="string"?yr(t)?en:K.test(t)?Qr:kc:Array.isArray(t)?ea:typeof t=="object"?K.test(t)?Qr:wc:en}function ea(t,e){const n=[...t],r=n.length,i=t.map((o,a)=>wr(o)(o,e[a]));return o=>{for(let a=0;a<r;a++)n[a]=i[a](o);return n}}function wc(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=wr(t[i])(t[i],e[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Pc(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const o=e.types[i],a=t.indexes[o][r[o]],s=t.values[a]??0;n[i]=s,r[o]++}return n}const kc=(t,e)=>{const n=Ot.createTransformer(e),r=ye(t),i=ye(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nn.has(t)&&!i.values.length||Nn.has(e)&&!r.values.length?vc(t,e):Ce(ea(Pc(r,i),i.values),n):en(t,e)};function na(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?$(t,e,n):wr(t)(t,e)}const Tc=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>B.update(e,n),stop:()=>Et(e),now:()=>Z.isProcessing?Z.timestamp:tt.now()}},ra=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let o=0;o<i;o++)r+=Math.round(t(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},nn=2e4;function Pr(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<nn;)e+=n,r=t.next(e);return e>=nn?1/0:e}function Sc(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(Pr(r),nn);return{type:"keyframes",ease:o=>r.next(i*o).value/e,duration:ht(i)}}const Cc=5;function ia(t,e,n){const r=Math.max(e-Cc,0);return _o(n-t(r),e-r)}const U={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},kn=.001;function Ac({duration:t=U.duration,bounce:e=U.bounce,velocity:n=U.velocity,mass:r=U.mass}){let i,o,a=1-e;a=vt(U.minDamping,U.maxDamping,a),t=vt(U.minDuration,U.maxDuration,ht(t)),a<1?(i=c=>{const u=c*a,d=u*t,h=u-n,g=_n(c,a),p=Math.exp(-d);return kn-h/g*p},o=c=>{const d=c*a*t,h=d*n+n,g=Math.pow(a,2)*Math.pow(c,2)*t,p=Math.exp(-d),f=_n(Math.pow(c,2),a);return(-i(c)+kn>0?-1:1)*((h-g)*p)/f}):(i=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-kn+u*d},o=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const s=5/t,l=Oc(i,o,s);if(t=dt(t),isNaN(l))return{stiffness:U.stiffness,damping:U.damping,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:a*2*Math.sqrt(r*c),duration:t}}}const Ec=12;function Oc(t,e,n){let r=n;for(let i=1;i<Ec;i++)r=r-t(r)/e(r);return r}function _n(t,e){return t*Math.sqrt(1-e*e)}const Rc=["duration","bounce"],Mc=["stiffness","damping","mass"];function ti(t,e){return e.some(n=>t[n]!==void 0)}function Dc(t){let e={velocity:U.velocity,stiffness:U.stiffness,damping:U.damping,mass:U.mass,isResolvedFromDuration:!1,...t};if(!ti(t,Mc)&&ti(t,Rc))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*vt(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:U.mass,stiffness:i,damping:o}}else{const n=Ac(t);e={...e,...n,mass:U.mass},e.isResolvedFromDuration=!0}return e}function rn(t=U.visualDuration,e=U.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:o},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:g}=Dc({...n,velocity:-ht(n.velocity||0)}),p=h||0,f=c/(2*Math.sqrt(l*u)),x=a-o,v=ht(Math.sqrt(l/u)),P=Math.abs(x)<5;r||(r=P?U.restSpeed.granular:U.restSpeed.default),i||(i=P?U.restDelta.granular:U.restDelta.default);let w;if(f<1){const k=_n(v,f);w=M=>{const V=Math.exp(-f*v*M);return a-V*((p+f*v*x)/k*Math.sin(k*M)+x*Math.cos(k*M))}}else if(f===1)w=k=>a-Math.exp(-v*k)*(x+(p+v*x)*k);else{const k=v*Math.sqrt(f*f-1);w=M=>{const V=Math.exp(-f*v*M),A=Math.min(k*M,300);return a-V*((p+f*v*x)*Math.sinh(A)+k*x*Math.cosh(A))/k}}const C={calculatedDuration:g&&d||null,next:k=>{const M=w(k);if(g)s.done=k>=d;else{let V=k===0?p:0;f<1&&(V=k===0?dt(p):ia(w,k,M));const A=Math.abs(V)<=r,D=Math.abs(a-M)<=i;s.done=A&&D}return s.value=s.done?a:M,s},toString:()=>{const k=Math.min(Pr(C),nn),M=ra(V=>C.next(k*V).value,k,30);return k+"ms "+M},toTransition:()=>{}};return C}rn.applyToOptions=t=>{const e=Sc(t,100,rn);return t.ease=e.ease,t.duration=dt(e.duration),t.type="keyframes",t};function Fn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:a,min:s,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},g=A=>s!==void 0&&A<s||l!==void 0&&A>l,p=A=>s===void 0?l:l===void 0||Math.abs(s-A)<Math.abs(l-A)?s:l;let f=n*e;const x=d+f,v=a===void 0?x:a(x);v!==x&&(f=v-d);const P=A=>-f*Math.exp(-A/r),w=A=>v+P(A),C=A=>{const D=P(A),H=w(A);h.done=Math.abs(D)<=c,h.value=h.done?v:H};let k,M;const V=A=>{g(h.value)&&(k=A,M=rn({keyframes:[h.value,p(h.value)],velocity:ia(w,A,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:u}))};return V(0),{calculatedDuration:null,next:A=>{let D=!1;return!M&&k===void 0&&(D=!0,C(A),V(A)),k!==void 0&&A>=k?M.next(A-k):(!D&&C(A),h)}}}function jc(t,e,n){const r=[],i=n||xt.mix||na,o=t.length-1;for(let a=0;a<o;a++){let s=i(t[a],t[a+1]);if(e){const l=Array.isArray(e)?e[a]||at:e;s=Ce(l,s)}r.push(s)}return r}function Vc(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const o=t.length;if(hr(o===e.length),o===1)return()=>e[0];if(o===2&&e[0]===e[1])return()=>e[1];const a=t[0]===t[1];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const s=jc(e,r,i),l=s.length,c=u=>{if(a&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=ge(t[d],t[d+1],u);return s[d](h)};return n?u=>c(vt(t[0],t[o-1],u)):c}function Lc(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=ge(0,e,r);t.push($(n,1,i))}}function Nc(t){const e=[0];return Lc(e,t.length-1),e}function _c(t,e){return t.map(n=>n*e)}function Fc(t,e){return t.map(()=>e||qo).splice(0,t.length-1)}function he({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=Gl(r)?r.map(Gr):Gr(r),o={done:!1,value:e[0]},a=_c(n&&n.length===e.length?n:Nc(e),t),s=Vc(a,e,{ease:Array.isArray(i)?i:Fc(e,i)});return{calculatedDuration:t,next:l=>(o.value=s(l),o.done=l>=t,o)}}const Ic=t=>t!==null;function kr(t,{repeat:e,repeatType:n="loop"},r,i=1){const o=t.filter(Ic),s=i<0||e&&n!=="loop"&&e%2===1?0:o.length-1;return!s||r===void 0?o[s]:r}const Bc={decay:Fn,inertia:Fn,tween:he,keyframes:he,spring:rn};function oa(t){typeof t.type=="string"&&(t.type=Bc[t.type])}class Tr{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const $c=t=>t/100;class Sr extends Tr{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==tt.now()&&this.tick(tt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;oa(e);const{type:n=he,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:a=0}=e;let{keyframes:s}=e;const l=n||he;l!==he&&typeof s[0]!="number"&&(this.mixKeyframes=Ce($c,na(s[0],s[1])),s=[0,100]);const c=l({...e,keyframes:s});o==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...s].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Pr(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:a,resolvedDuration:s,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:u,repeat:d,repeatType:h,repeatDelay:g,type:p,onUpdate:f,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const v=this.currentTime-c*(this.playbackSpeed>=0?1:-1),P=this.playbackSpeed>=0?v<0:v>i;this.currentTime=Math.max(v,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let w=this.currentTime,C=r;if(d){const A=Math.min(this.currentTime,i)/s;let D=Math.floor(A),H=A%1;!H&&A>=1&&(H=1),H===1&&D--,D=Math.min(D,d+1),!!(D%2)&&(h==="reverse"?(H=1-H,g&&(H-=g/s)):h==="mirror"&&(C=a)),w=vt(0,1,H)*s}const k=P?{done:!1,value:u[0]}:C.next(w);o&&(k.value=o(k.value));let{done:M}=k;!P&&l!==null&&(M=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&M);return V&&p!==Fn&&(k.value=kr(u,this.options,x,this.speed)),f&&f(k.value),V&&this.finish(),k}then(e,n){return this.finished.then(e,n)}get duration(){return ht(this.calculatedDuration)}get time(){return ht(this.currentTime)}set time(e){e=dt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(tt.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=ht(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=Tc,startTime:n}=this.options;this.driver||(this.driver=e(i=>this.tick(i))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(tt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function zc(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Nt=t=>t*180/Math.PI,In=t=>{const e=Nt(Math.atan2(t[1],t[0]));return Bn(e)},Uc={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:In,rotateZ:In,skewX:t=>Nt(Math.atan(t[1])),skewY:t=>Nt(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Bn=t=>(t=t%360,t<0&&(t+=360),t),ei=In,ni=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ri=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Hc={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ni,scaleY:ri,scale:t=>(ni(t)+ri(t))/2,rotateX:t=>Bn(Nt(Math.atan2(t[6],t[5]))),rotateY:t=>Bn(Nt(Math.atan2(-t[2],t[0]))),rotateZ:ei,rotate:ei,skewX:t=>Nt(Math.atan(t[4])),skewY:t=>Nt(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function $n(t){return t.includes("scale")?1:0}function zn(t,e){if(!t||t==="none")return $n(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Hc,i=n;else{const s=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Uc,i=s}if(!i)return $n(e);const o=r[e],a=i[1].split(",").map(qc);return typeof o=="function"?o(a):a[o]}const Wc=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return zn(n,e)};function qc(t){return parseFloat(t.trim())}const ee=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ne=new Set(ee),ii=t=>t===te||t===E,Kc=new Set(["x","y","z"]),Yc=ee.filter(t=>!Kc.has(t));function Gc(t){const e=[];return Yc.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const _t={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>zn(e,"x"),y:(t,{transform:e})=>zn(e,"y")};_t.translateX=_t.x;_t.translateY=_t.y;const Ft=new Set;let Un=!1,Hn=!1,Wn=!1;function aa(){if(Hn){const t=Array.from(Ft).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=Gc(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,a])=>{r.getValue(o)?.set(a)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Hn=!1,Un=!1,Ft.forEach(t=>t.complete(Wn)),Ft.clear()}function sa(){Ft.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Hn=!0)})}function Xc(){Wn=!0,sa(),aa(),Wn=!1}class Cr{constructor(e,n,r,i,o,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(Ft.add(this),Un||(Un=!0,B.read(sa),B.resolveKeyframes(aa))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const o=i?.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const s=r.readValue(n,a);s!=null&&(e[0]=s)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}zc(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ft.delete(this)}cancel(){this.state==="scheduled"&&(Ft.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Zc=t=>t.startsWith("--");function Jc(t,e,n){Zc(e)?t.style.setProperty(e,n):t.style[e]=n}const Qc=fr(()=>window.ScrollTimeline!==void 0),tu={};function eu(t,e){const n=fr(t);return()=>tu[e]??n()}const la=eu(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ce=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,oi={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ce([0,.65,.55,1]),circOut:ce([.55,0,1,.45]),backIn:ce([.31,.01,.66,-.59]),backOut:ce([.33,1.53,.69,.99])};function ca(t,e){if(t)return typeof t=="function"?la()?ra(t,e):"ease-out":Ko(t)?ce(t):Array.isArray(t)?t.map(n=>ca(n,e)||oi.easeOut):oi[t]}function nu(t,e,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:a="loop",ease:s="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=ca(s,i);Array.isArray(d)&&(u.easing=d);const h={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:a==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),t.animate(u,h)}function ua(t){return typeof t=="function"&&"applyToOptions"in t}function ru({type:t,...e}){return ua(t)&&la()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class iu extends Tr{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:a=!1,finalKeyframe:s,onComplete:l}=e;this.isPseudoElement=!!o,this.allowFlatten=a,this.options=e,hr(typeof e.type!="string");const c=ru(e);this.animation=nu(n,r,i,c,o),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const u=kr(i,this.options,s,this.speed);this.updateMotionValue?this.updateMotionValue(u):Jc(n,r,u),this.animation.cancel()}l?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return ht(Number(e))}get time(){return ht(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=dt(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&Qc()?(this.animation.timeline=e,at):n(this)}}const da={anticipate:Uo,backInOut:zo,circInOut:Wo};function ou(t){return t in da}function au(t){typeof t.ease=="string"&&ou(t.ease)&&(t.ease=da[t.ease])}const ai=10;class su extends iu{constructor(e){au(e),oa(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...a}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const s=new Sr({...a,autoplay:!1}),l=dt(this.finishedTime??this.time);n.setWithVelocity(s.sample(l-ai).value,s.sample(l).value,ai),s.stop()}}const si=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ot.test(t)||t==="0")&&!t.startsWith("url("));function lu(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function cu(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const o=t[t.length-1],a=si(i,e),s=si(o,e);return!a||!s?!1:lu(t)||(n==="spring"||ua(n))&&r}const uu=new Set(["opacity","clipPath","filter","transform"]),du=fr(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function hu(t){const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:o,type:a}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return du()&&n&&uu.has(n)&&(n!=="transform"||!c)&&!l&&!r&&i!=="mirror"&&o!==0&&a!=="inertia"}const fu=40;class pu extends Tr{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:a="loop",keyframes:s,name:l,motionValue:c,element:u,...d}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=tt.now();const h={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:a,name:l,motionValue:c,element:u,...d},g=u?.KeyframeResolver||Cr;this.keyframeResolver=new g(s,(p,f,x)=>this.onKeyframesResolved(p,f,h,!x),l,c,u),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,n,r,i){this.keyframeResolver=void 0;const{name:o,type:a,velocity:s,delay:l,isHandoff:c,onUpdate:u}=r;this.resolvedAt=tt.now(),cu(e,o,a,s)||((xt.instantAnimations||!l)&&u?.(kr(e,r,n)),e[0]=e[e.length-1],r.duration=0,r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>fu?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},g=!c&&hu(h)?new su({...h,element:h.motionValue.owner.current}):new Sr(h);g.finished.then(()=>this.notifyFinished()).catch(at),this.pendingTimeline&&(this.stopTimeline=g.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=g}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Xc()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const mu=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function gu(t){const e=mu.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function ha(t,e,n=1){const[r,i]=gu(t);if(!r)return;const o=window.getComputedStyle(e).getPropertyValue(r);if(o){const a=o.trim();return Vo(a)?parseFloat(a):a}return yr(i)?ha(i,e,n+1):i}function Ar(t,e){return t?.[e]??t?.default??t}const fa=new Set(["width","height","top","left","right","bottom",...ee]),bu={test:t=>t==="auto",parse:t=>t},pa=t=>e=>e.test(t),ma=[te,E,ft,At,lc,sc,bu],li=t=>ma.find(pa(t));function yu(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||No(t):!0}const vu=new Set(["brightness","contrast","saturate","opacity"]);function xu(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(vr)||[];if(!r)return t;const i=n.replace(r,"");let o=vu.has(e)?1:0;return r!==n&&(o*=100),e+"("+o+i+")"}const wu=/\b([a-z-]*)\(.*?\)/gu,qn={...Ot,getAnimatableNone:t=>{const e=t.match(wu);return e?e.map(xu).join(" "):t}},ci={...te,transform:Math.round},Pu={rotate:At,rotateX:At,rotateY:At,rotateZ:At,scale:Fe,scaleX:Fe,scaleY:Fe,scaleZ:Fe,skew:At,skewX:At,skewY:At,distance:E,translateX:E,translateY:E,translateZ:E,x:E,y:E,z:E,perspective:E,transformPerspective:E,opacity:be,originX:Xr,originY:Xr,originZ:E},Er={borderWidth:E,borderTopWidth:E,borderRightWidth:E,borderBottomWidth:E,borderLeftWidth:E,borderRadius:E,radius:E,borderTopLeftRadius:E,borderTopRightRadius:E,borderBottomRightRadius:E,borderBottomLeftRadius:E,width:E,maxWidth:E,height:E,maxHeight:E,top:E,right:E,bottom:E,left:E,padding:E,paddingTop:E,paddingRight:E,paddingBottom:E,paddingLeft:E,margin:E,marginTop:E,marginRight:E,marginBottom:E,marginLeft:E,backgroundPositionX:E,backgroundPositionY:E,...Pu,zIndex:ci,fillOpacity:be,strokeOpacity:be,numOctaves:ci},ku={...Er,color:K,backgroundColor:K,outlineColor:K,fill:K,stroke:K,borderColor:K,borderTopColor:K,borderRightColor:K,borderBottomColor:K,borderLeftColor:K,filter:qn,WebkitFilter:qn},ga=t=>ku[t];function ba(t,e){let n=ga(t);return n!==qn&&(n=Ot),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Tu=new Set(["auto","none","0"]);function Su(t,e,n){let r=0,i;for(;r<t.length&&!i;){const o=t[r];typeof o=="string"&&!Tu.has(o)&&ye(o).values.length&&(i=t[r]),r++}if(i&&n)for(const o of e)t[o]=ba(n,i)}class Cu extends Cr{constructor(e,n,r,i,o){super(e,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),yr(c))){const u=ha(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!fa.has(r)||e.length!==2)return;const[i,o]=e,a=li(i),s=li(o);if(a!==s)if(ii(a)&&ii(s))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else _t[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||yu(e[i]))&&r.push(i);r.length&&Su(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=_t[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=_t[n](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([s,l])=>{e.getValue(s).set(l)}),this.resolveNoneKeyframes()}}function Au(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const i=n?.[t]??r.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t)}const ya=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Eu(t){return Lo(t)&&"offsetHeight"in t}const ui=30,Ou=t=>!isNaN(parseFloat(t));class Ru{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=tt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty();i&&this.events.renderRequest?.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=tt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Ou(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new pr);const r=this.events[e].add(n);return e==="change"?()=>{r(),B.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=tt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ui)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ui);return _o(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zt(t,e){return new Ru(t,e)}const{schedule:Or}=Yo(queueMicrotask,!1),lt={x:!1,y:!1};function va(){return lt.x||lt.y}function Mu(t){return t==="x"||t==="y"?lt[t]?null:(lt[t]=!0,()=>{lt[t]=!1}):lt.x||lt.y?null:(lt.x=lt.y=!0,()=>{lt.x=lt.y=!1})}function xa(t,e){const n=Au(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function di(t){return!(t.pointerType==="touch"||va())}function Du(t,e,n={}){const[r,i,o]=xa(t,n),a=s=>{if(!di(s))return;const{target:l}=s,c=e(l,s);if(typeof c!="function"||!l)return;const u=d=>{di(d)&&(c(d),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,i)};return r.forEach(s=>{s.addEventListener("pointerenter",a,i)}),o}const wa=(t,e)=>e?t===e?!0:wa(t,e.parentElement):!1,Rr=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,ju=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Vu(t){return ju.has(t.tagName)||t.tabIndex!==-1}const Xe=new WeakSet;function hi(t){return e=>{e.key==="Enter"&&t(e)}}function Tn(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Lu=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=hi(()=>{if(Xe.has(n))return;Tn(n,"down");const i=hi(()=>{Tn(n,"up")}),o=()=>Tn(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",o,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function fi(t){return Rr(t)&&!va()}function Nu(t,e,n={}){const[r,i,o]=xa(t,n),a=s=>{const l=s.currentTarget;if(!fi(s))return;Xe.add(l);const c=e(l,s),u=(g,p)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),Xe.has(l)&&Xe.delete(l),fi(g)&&typeof c=="function"&&c(g,{success:p})},d=g=>{u(g,l===window||l===document||n.useGlobalTarget||wa(l,g.target))},h=g=>{u(g,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",h,i)};return r.forEach(s=>{(n.useGlobalTarget?window:s).addEventListener("pointerdown",a,i),Eu(s)&&(s.addEventListener("focus",c=>Lu(c,i)),!Vu(s)&&!s.hasAttribute("tabindex")&&(s.tabIndex=0))}),o}function Pa(t){return Lo(t)&&"ownerSVGElement"in t}function _u(t){return Pa(t)&&t.tagName==="svg"}const J=t=>!!(t&&t.getVelocity),Fu=[...ma,K,Ot],Iu=t=>Fu.find(pa(t)),ka=y.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Bu(t=!0){const e=y.useContext(cr);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,o=y.useId();y.useEffect(()=>{if(t)return i(o)},[t]);const a=y.useCallback(()=>t&&r&&r(o),[o,r,t]);return!n&&r?[!1,a]:[!0]}const Ta=y.createContext({strict:!1}),pi={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Jt={};for(const t in pi)Jt[t]={isEnabled:e=>pi[t].some(n=>!!e[n])};function $u(t){for(const e in t)Jt[e]={...Jt[e],...t[e]}}const zu=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function on(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zu.has(t)}let Sa=t=>!on(t);function Uu(t){typeof t=="function"&&(Sa=e=>e.startsWith("on")?!on(e):t(e))}try{Uu(require("@emotion/is-prop-valid").default)}catch{}function Hu(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(Sa(i)||n===!0&&on(i)||!e&&!on(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}const un=y.createContext({});function dn(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ve(t){return typeof t=="string"||Array.isArray(t)}const Mr=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Dr=["initial",...Mr];function hn(t){return dn(t.animate)||Dr.some(e=>ve(t[e]))}function Ca(t){return!!(hn(t)||t.variants)}function Wu(t,e){if(hn(t)){const{initial:n,animate:r}=t;return{initial:n===!1||ve(n)?n:void 0,animate:ve(r)?r:void 0}}return t.inherit!==!1?e:{}}function qu(t){const{initial:e,animate:n}=Wu(t,y.useContext(un));return y.useMemo(()=>({initial:e,animate:n}),[mi(e),mi(n)])}function mi(t){return Array.isArray(t)?t.join(" "):t}const xe={};function Ku(t){for(const e in t)xe[e]=t[e],br(e)&&(xe[e].isCSSVariable=!0)}function Aa(t,{layout:e,layoutId:n}){return ne.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!xe[t]||t==="opacity")}const Yu={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Gu=ee.length;function Xu(t,e,n){let r="",i=!0;for(let o=0;o<Gu;o++){const a=ee[o],s=t[a];if(s===void 0)continue;let l=!0;if(typeof s=="number"?l=s===(a.startsWith("scale")?1:0):l=parseFloat(s)===0,!l||n){const c=ya(s,Er[a]);if(!l){i=!1;const u=Yu[a]||a;r+=`${u}(${c}) `}n&&(e[a]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function jr(t,e,n){const{style:r,vars:i,transformOrigin:o}=t;let a=!1,s=!1;for(const l in e){const c=e[l];if(ne.has(l)){a=!0;continue}else if(br(l)){i[l]=c;continue}else{const u=ya(c,Er[l]);l.startsWith("origin")?(s=!0,o[l]=u):r[l]=u}}if(e.transform||(a||n?r.transform=Xu(e,t.transform,n):r.transform&&(r.transform="none")),s){const{originX:l="50%",originY:c="50%",originZ:u=0}=o;r.transformOrigin=`${l} ${c} ${u}`}}const Vr=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ea(t,e,n){for(const r in e)!J(e[r])&&!Aa(r,n)&&(t[r]=e[r])}function Zu({transformTemplate:t},e){return y.useMemo(()=>{const n=Vr();return jr(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Ju(t,e){const n=t.style||{},r={};return Ea(r,n,t),Object.assign(r,Zu(t,e)),r}function Qu(t,e){const n={},r=Ju(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const td={offset:"stroke-dashoffset",array:"stroke-dasharray"},ed={offset:"strokeDashoffset",array:"strokeDasharray"};function nd(t,e,n=1,r=0,i=!0){t.pathLength=1;const o=i?td:ed;t[o.offset]=E.transform(-r);const a=E.transform(e),s=E.transform(n);t[o.array]=`${a} ${s}`}function Oa(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:a=0,...s},l,c,u){if(jr(t,s,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:h}=t;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=u?.transformBox??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&nd(d,i,o,a,!1)}const Ra=()=>({...Vr(),attrs:{}}),Ma=t=>typeof t=="string"&&t.toLowerCase()==="svg";function rd(t,e,n,r){const i=y.useMemo(()=>{const o=Ra();return Oa(o,e,Ma(r),t.transformTemplate,t.style),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};Ea(o,t.style,t),i.style={...o,...i.style}}return i}const id=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Lr(t){return typeof t!="string"||t.includes("-")?!1:!!(id.indexOf(t)>-1||/[A-Z]/u.test(t))}function od(t,e,n,{latestValues:r},i,o=!1){const s=(Lr(t)?rd:Qu)(e,r,i,t),l=Hu(e,typeof t=="string",o),c=t!==y.Fragment?{...l,...s,ref:n}:{},{children:u}=e,d=y.useMemo(()=>J(u)?u.get():u,[u]);return y.createElement(t,{...c,children:d})}function gi(t){const e=[{},{}];return t?.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function Nr(t,e,n,r){if(typeof e=="function"){const[i,o]=gi(r);e=e(n!==void 0?n:t.custom,i,o)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,o]=gi(r);e=e(n!==void 0?n:t.custom,i,o)}return e}function Ze(t){return J(t)?t.get():t}function ad({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:sd(n,r,i,t),renderState:e()}}function sd(t,e,n,r){const i={},o=r(t,{});for(const h in o)i[h]=Ze(o[h]);let{initial:a,animate:s}=t;const l=hn(t),c=Ca(t);e&&c&&!l&&t.inherit!==!1&&(a===void 0&&(a=e.initial),s===void 0&&(s=e.animate));let u=n?n.initial===!1:!1;u=u||a===!1;const d=u?s:a;if(d&&typeof d!="boolean"&&!dn(d)){const h=Array.isArray(d)?d:[d];for(let g=0;g<h.length;g++){const p=Nr(t,h[g]);if(p){const{transitionEnd:f,transition:x,...v}=p;for(const P in v){let w=v[P];if(Array.isArray(w)){const C=u?w.length-1:0;w=w[C]}w!==null&&(i[P]=w)}for(const P in f)i[P]=f[P]}}}return i}const Da=t=>(e,n)=>{const r=y.useContext(un),i=y.useContext(cr),o=()=>ad(t,e,r,i);return n?o():$l(o)};function _r(t,e,n){const{style:r}=t,i={};for(const o in r)(J(r[o])||e.style&&J(e.style[o])||Aa(o,t)||n?.getValue(o)?.liveStyle!==void 0)&&(i[o]=r[o]);return i}const ld=Da({scrapeMotionValuesFromProps:_r,createRenderState:Vr});function ja(t,e,n){const r=_r(t,e,n);for(const i in t)if(J(t[i])||J(e[i])){const o=ee.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=t[i]}return r}const cd=Da({scrapeMotionValuesFromProps:ja,createRenderState:Ra}),ud=Symbol.for("motionComponentSymbol");function qt(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function dd(t,e,n){return y.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):qt(n)&&(n.current=r))},[e])}const Fr=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),hd="framerAppearId",Va="data-"+Fr(hd),La=y.createContext({});function fd(t,e,n,r,i){const{visualElement:o}=y.useContext(un),a=y.useContext(Ta),s=y.useContext(cr),l=y.useContext(ka).reducedMotion,c=y.useRef(null);r=r||a.renderer,!c.current&&r&&(c.current=r(t,{visualState:e,parent:o,props:n,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,d=y.useContext(La);u&&!u.projection&&i&&(u.type==="html"||u.type==="svg")&&pd(c.current,n,i,d);const h=y.useRef(!1);y.useInsertionEffect(()=>{u&&h.current&&u.update(n,s)});const g=n[Va],p=y.useRef(!!g&&!window.MotionHandoffIsComplete?.(g)&&window.MotionHasOptimisedAnimation?.(g));return zl(()=>{u&&(h.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),p.current&&u.animationState&&u.animationState.animateChanges())}),y.useEffect(()=>{u&&(!p.current&&u.animationState&&u.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(g)}),p.current=!1))}),u}function pd(t,e,n,r){const{layoutId:i,layout:o,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Na(t.parent)),t.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!a||s&&qt(s),visualElement:t,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}function Na(t){if(t)return t.options.allowProjection!==!1?t.projection:Na(t.parent)}function Sn(t,{forwardMotionProps:e=!1}={},n,r){n&&$u(n);const i=Lr(t)?cd:ld;function o(s,l){let c;const u={...y.useContext(ka),...s,layoutId:md(s)},{isStatic:d}=u,h=qu(s),g=i(s,d);if(!d&&lr){gd();const p=bd(u);c=p.MeasureLayout,h.visualElement=fd(t,g,u,r,p.ProjectionNode)}return b.jsxs(un.Provider,{value:h,children:[c&&h.visualElement?b.jsx(c,{visualElement:h.visualElement,...u}):null,od(t,s,dd(g,h.visualElement,l),g,d,e)]})}o.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const a=y.forwardRef(o);return a[ud]=t,a}function md({layoutId:t}){const e=y.useContext(jo).id;return e&&t!==void 0?e+"-"+t:t}function gd(t,e){y.useContext(Ta).strict}function bd(t){const{drag:e,layout:n}=Jt;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e?.isEnabled(t)||n?.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function yd(t,e){if(typeof Proxy>"u")return Sn;const n=new Map,r=(o,a)=>Sn(o,a,t,e),i=(o,a)=>r(o,a);return new Proxy(i,{get:(o,a)=>a==="create"?r:(n.has(a)||n.set(a,Sn(a,void 0,t,e)),n.get(a))})}function _a({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function vd({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function xd(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Cn(t){return t===void 0||t===1}function Kn({scale:t,scaleX:e,scaleY:n}){return!Cn(t)||!Cn(e)||!Cn(n)}function Vt(t){return Kn(t)||Fa(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Fa(t){return bi(t.x)||bi(t.y)}function bi(t){return t&&t!=="0%"}function an(t,e,n){const r=t-n,i=e*r;return n+i}function yi(t,e,n,r,i){return i!==void 0&&(t=an(t,i,r)),an(t,n,r)+e}function Yn(t,e=0,n=1,r,i){t.min=yi(t.min,e,n,r,i),t.max=yi(t.max,e,n,r,i)}function Ia(t,{x:e,y:n}){Yn(t.x,e.translate,e.scale,e.originPoint),Yn(t.y,n.translate,n.scale,n.originPoint)}const vi=.999999999999,xi=1.0000000000001;function wd(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let o,a;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&Yt(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(e.x*=a.x.scale,e.y*=a.y.scale,Ia(t,a)),r&&Vt(o.latestValues)&&Yt(t,o.latestValues))}e.x<xi&&e.x>vi&&(e.x=1),e.y<xi&&e.y>vi&&(e.y=1)}function Kt(t,e){t.min=t.min+e,t.max=t.max+e}function wi(t,e,n,r,i=.5){const o=$(t.min,t.max,i);Yn(t,e,n,o,r)}function Yt(t,e){wi(t.x,e.x,e.scaleX,e.scale,e.originX),wi(t.y,e.y,e.scaleY,e.scale,e.originY)}function Ba(t,e){return _a(xd(t.getBoundingClientRect(),e))}function Pd(t,e,n){const r=Ba(t,n),{scroll:i}=e;return i&&(Kt(r.x,i.offset.x),Kt(r.y,i.offset.y)),r}const Pi=()=>({translate:0,scale:1,origin:0,originPoint:0}),Gt=()=>({x:Pi(),y:Pi()}),ki=()=>({min:0,max:0}),q=()=>({x:ki(),y:ki()}),Gn={current:null},$a={current:!1};function kd(){if($a.current=!0,!!lr)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Gn.current=t.matches;t.addEventListener("change",e),e()}else Gn.current=!1}const Td=new WeakMap;function Sd(t,e,n){for(const r in e){const i=e[r],o=n[r];if(J(i))t.addValue(r,i);else if(J(o))t.addValue(r,Zt(i,{owner:t}));else if(o!==i)if(t.hasValue(r)){const a=t.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=t.getStaticValue(r);t.addValue(r,Zt(a!==void 0?a:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Ti=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Cd{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:a},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Cr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=tt.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,B.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=!!o,this.isControllingVariants=hn(n),this.isVariantNode=Ca(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in d){const g=d[h];l[h]!==void 0&&J(g)&&g.set(l[h],!1)}}mount(e){this.current=e,Td.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),$a.current||kd(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gn.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Et(this.notifyUpdate),Et(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=ne.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[e]=s,this.props.onUpdate&&B.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),o(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Jt){const n=Jt[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const o=this.features[e];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):q()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Ti.length;r++){const i=Ti[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,a=e[o];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=Sd(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Zt(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Vo(r)||No(r))?r=parseFloat(r):!Iu(r)&&Ot.test(n)&&(r=ba(e,n)),this.setBaseTarget(e,J(r)?r.get():r)),J(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=Nr(this.props,n,this.presenceContext?.custom);o&&(r=o[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!J(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new pr),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Or.render(this.render)}}class za extends Cd{constructor(){super(...arguments),this.KeyframeResolver=Cu}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;J(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Ua(t,{style:e,vars:n},r,i){const o=t.style;let a;for(a in e)o[a]=e[a];i?.applyProjectionStyles(o,r);for(a in n)o.setProperty(a,n[a])}function Ad(t){return window.getComputedStyle(t)}class Ed extends za{constructor(){super(...arguments),this.type="html",this.renderInstance=Ua}readValueFromInstance(e,n){if(ne.has(n))return this.projection?.isProjecting?$n(n):Wc(e,n);{const r=Ad(e),i=(br(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Ba(e,n)}build(e,n,r){jr(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return _r(e,n,r)}}const Ha=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Od(t,e,n,r){Ua(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(Ha.has(i)?i:Fr(i),e.attrs[i])}class Rd extends za{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=q}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(ne.has(n)){const r=ga(n);return r&&r.default||0}return n=Ha.has(n)?n:Fr(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return ja(e,n,r)}build(e,n,r){Oa(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){Od(e,n,r,i)}mount(e){this.isSVGTag=Ma(e.tagName),super.mount(e)}}const Md=(t,e)=>Lr(t)?new Rd(e):new Ed(e,{allowProjection:t!==y.Fragment});function we(t,e,n){const r=t.getProps();return Nr(r,e,n!==void 0?n:r.custom,t)}const Xn=t=>Array.isArray(t);function Dd(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Zt(n))}function jd(t){return Xn(t)?t[t.length-1]||0:t}function Vd(t,e){const n=we(t,e);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const a in o){const s=jd(o[a]);Dd(t,a,s)}}function Ld(t){return!!(J(t)&&t.add)}function Zn(t,e){const n=t.getValue("willChange");if(Ld(n))return n.add(e);if(!n&&xt.WillChange){const r=new xt.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Wa(t){return t.props[Va]}const Nd=t=>t!==null;function _d(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(Nd),o=e&&n!=="loop"&&e%2===1?0:i.length-1;return i[o]}const Fd={type:"spring",stiffness:500,damping:25,restSpeed:10},Id=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Bd={type:"keyframes",duration:.8},$d={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zd=(t,{keyframes:e})=>e.length>2?Bd:ne.has(t)?t.startsWith("scale")?Id(e[1]):Fd:$d;function Ud({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:a,repeatDelay:s,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Ir=(t,e,n,r={},i,o)=>a=>{const s=Ar(r,t)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c=c-dt(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...s,delay:-c,onUpdate:h=>{e.set(h),s.onUpdate&&s.onUpdate(h)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:t,motionValue:e,element:o?void 0:i};Ud(s)||Object.assign(u,zd(t,u)),u.duration&&(u.duration=dt(u.duration)),u.repeatDelay&&(u.repeatDelay=dt(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),(xt.instantAnimations||xt.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!o&&e.get()!==void 0){const h=_d(u.keyframes,s);if(h!==void 0){B.update(()=>{u.onUpdate(h),u.onComplete()});return}}return s.isSync?new Sr(u):new pu(u)};function Hd({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function qa(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:a,...s}=e;r&&(o=r);const l=[],c=i&&t.animationState&&t.animationState.getState()[i];for(const u in s){const d=t.getValue(u,t.latestValues[u]??null),h=s[u];if(h===void 0||c&&Hd(c,u))continue;const g={delay:n,...Ar(o||{},u)},p=d.get();if(p!==void 0&&!d.isAnimating&&!Array.isArray(h)&&h===p&&!g.velocity)continue;let f=!1;if(window.MotionHandoffAnimation){const v=Wa(t);if(v){const P=window.MotionHandoffAnimation(v,u,B);P!==null&&(g.startTime=P,f=!0)}}Zn(t,u),d.start(Ir(u,d,h,t.shouldReduceMotion&&fa.has(u)?{type:!1}:g,t,f));const x=d.animation;x&&l.push(x)}return a&&Promise.all(l).then(()=>{B.update(()=>{a&&Vd(t,a)})}),l}function Jn(t,e,n={}){const r=we(t,e,n.type==="exit"?t.presenceContext?.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(qa(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:u,staggerDirection:d}=i;return Wd(t,e,l,c,u,d,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[l,c]=s==="beforeChildren"?[o,a]:[a,o];return l().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function Wd(t,e,n=0,r=0,i=0,o=1,a){const s=[],l=t.variantChildren.size,c=(l-1)*i,u=typeof r=="function",d=u?h=>r(h,l):o===1?(h=0)=>h*i:(h=0)=>c-h*i;return Array.from(t.variantChildren).sort(qd).forEach((h,g)=>{h.notify("AnimationStart",e),s.push(Jn(h,e,{...a,delay:n+(u?0:r)+d(g)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(s)}function qd(t,e){return t.sortNodePosition(e)}function Kd(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(o=>Jn(t,o,n));r=Promise.all(i)}else if(typeof e=="string")r=Jn(t,e,n);else{const i=typeof e=="function"?we(t,e,n.custom):e;r=Promise.all(qa(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}function Ka(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const Yd=Dr.length;function Ya(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Ya(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Yd;n++){const r=Dr[n],i=t.props[r];(ve(i)||i===!1)&&(e[r]=i)}return e}const Gd=[...Mr].reverse(),Xd=Mr.length;function Zd(t){return e=>Promise.all(e.map(({animation:n,options:r})=>Kd(t,n,r)))}function Jd(t){let e=Zd(t),n=Si(),r=!0;const i=l=>(c,u)=>{const d=we(t,u,l==="exit"?t.presenceContext?.custom:void 0);if(d){const{transition:h,transitionEnd:g,...p}=d;c={...c,...p,...g}}return c};function o(l){e=l(t)}function a(l){const{props:c}=t,u=Ya(t.parent)||{},d=[],h=new Set;let g={},p=1/0;for(let x=0;x<Xd;x++){const v=Gd[x],P=n[v],w=c[v]!==void 0?c[v]:u[v],C=ve(w),k=v===l?P.isActive:null;k===!1&&(p=x);let M=w===u[v]&&w!==c[v]&&C;if(M&&r&&t.manuallyAnimateOnMount&&(M=!1),P.protectedKeys={...g},!P.isActive&&k===null||!w&&!P.prevProp||dn(w)||typeof w=="boolean")continue;const V=Qd(P.prevProp,w);let A=V||v===l&&P.isActive&&!M&&C||x>p&&C,D=!1;const H=Array.isArray(w)?w:[w];let nt=H.reduce(i(v),{});k===!1&&(nt={});const{prevResolvedValues:$t={}}=P,Ve={...$t,...nt},Le=X=>{A=!0,h.has(X)&&(D=!0,h.delete(X)),P.needsAnimating[X]=!0;const rt=t.getValue(X);rt&&(rt.liveStyle=!1)};for(const X in Ve){const rt=nt[X],ie=$t[X];if(g.hasOwnProperty(X))continue;let m=!1;Xn(rt)&&Xn(ie)?m=!Ka(rt,ie):m=rt!==ie,m?rt!=null?Le(X):h.add(X):rt!==void 0&&h.has(X)?Le(X):P.protectedKeys[X]=!0}P.prevProp=w,P.prevResolvedValues=nt,P.isActive&&(g={...g,...nt}),r&&t.blockInitialAnimation&&(A=!1),A&&(!(M&&V)||D)&&d.push(...H.map(X=>({animation:X,options:{type:v}})))}if(h.size){const x={};if(typeof c.initial!="boolean"){const v=we(t,Array.isArray(c.initial)?c.initial[0]:c.initial);v&&v.transition&&(x.transition=v.transition)}h.forEach(v=>{const P=t.getBaseTarget(v),w=t.getValue(v);w&&(w.liveStyle=!0),x[v]=P??null}),d.push({animation:x})}let f=!!d.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(f=!1),r=!1,f?e(d):Promise.resolve()}function s(l,c){if(n[l].isActive===c)return Promise.resolve();t.variantChildren?.forEach(d=>d.animationState?.setActive(l,c)),n[l].isActive=c;const u=a(l);for(const d in n)n[d].protectedKeys={};return u}return{animateChanges:a,setActive:s,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Si(),r=!0}}}function Qd(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Ka(e,t):!1}function Dt(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Si(){return{animate:Dt(!0),whileInView:Dt(),whileHover:Dt(),whileTap:Dt(),whileDrag:Dt(),whileFocus:Dt(),exit:Dt()}}class Rt{constructor(e){this.isMounted=!1,this.node=e}update(){}}class th extends Rt{constructor(e){super(e),e.animationState||(e.animationState=Jd(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();dn(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let eh=0;class nh extends Rt{constructor(){super(...arguments),this.id=eh++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const rh={animation:{Feature:th},exit:{Feature:nh}};function Pe(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Oe(t){return{point:{x:t.pageX,y:t.pageY}}}const ih=t=>e=>Rr(e)&&t(e,Oe(e));function fe(t,e,n,r){return Pe(t,e,ih(n),r)}const Ga=1e-4,oh=1-Ga,ah=1+Ga,Xa=.01,sh=0-Xa,lh=0+Xa;function Q(t){return t.max-t.min}function ch(t,e,n){return Math.abs(t-e)<=n}function Ci(t,e,n,r=.5){t.origin=r,t.originPoint=$(e.min,e.max,t.origin),t.scale=Q(n)/Q(e),t.translate=$(n.min,n.max,t.origin)-t.originPoint,(t.scale>=oh&&t.scale<=ah||isNaN(t.scale))&&(t.scale=1),(t.translate>=sh&&t.translate<=lh||isNaN(t.translate))&&(t.translate=0)}function pe(t,e,n,r){Ci(t.x,e.x,n.x,r?r.originX:void 0),Ci(t.y,e.y,n.y,r?r.originY:void 0)}function Ai(t,e,n){t.min=n.min+e.min,t.max=t.min+Q(e)}function uh(t,e,n){Ai(t.x,e.x,n.x),Ai(t.y,e.y,n.y)}function Ei(t,e,n){t.min=e.min-n.min,t.max=t.min+Q(e)}function me(t,e,n){Ei(t.x,e.x,n.x),Ei(t.y,e.y,n.y)}function ot(t){return[t("x"),t("y")]}const Za=({current:t})=>t?t.ownerDocument.defaultView:null,Oi=(t,e)=>Math.abs(t-e);function dh(t,e){const n=Oi(t.x,e.x),r=Oi(t.y,e.y);return Math.sqrt(n**2+r**2)}class Ja{constructor(e,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:a=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=En(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,p=dh(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!p)return;const{point:f}=h,{timestamp:x}=Z;this.history.push({...f,timestamp:x});const{onStart:v,onMove:P}=this.handlers;g||(v&&v(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,h)},this.handlePointerMove=(h,g)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=An(g,this.transformPagePoint),B.update(this.updatePoint,!0)},this.handlePointerUp=(h,g)=>{this.end();const{onEnd:p,onSessionEnd:f,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=En(h.type==="pointercancel"?this.lastMoveEventInfo:An(g,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,v),f&&f(h,v)},!Rr(e))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=a,this.contextWindow=i||window;const s=Oe(e),l=An(s,this.transformPagePoint),{point:c}=l,{timestamp:u}=Z;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(e,En(l,this.history)),this.removeListeners=Ce(fe(this.contextWindow,"pointermove",this.handlePointerMove),fe(this.contextWindow,"pointerup",this.handlePointerUp),fe(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Et(this.updatePoint)}}function An(t,e){return e?{point:e(t.point)}:t}function Ri(t,e){return{x:t.x-e.x,y:t.y-e.y}}function En({point:t},e){return{point:t,delta:Ri(t,Qa(e)),offset:Ri(t,hh(e)),velocity:fh(e,.1)}}function hh(t){return t[0]}function Qa(t){return t[t.length-1]}function fh(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Qa(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>dt(e)));)n--;if(!r)return{x:0,y:0};const o=ht(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function ph(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?$(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?$(n,t,r.max):Math.min(t,n)),t}function Mi(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function mh(t,{top:e,left:n,bottom:r,right:i}){return{x:Mi(t.x,n,i),y:Mi(t.y,e,r)}}function Di(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function gh(t,e){return{x:Di(t.x,e.x),y:Di(t.y,e.y)}}function bh(t,e){let n=.5;const r=Q(t),i=Q(e);return i>r?n=ge(e.min,e.max-r,t.min):r>i&&(n=ge(t.min,t.max-i,e.min)),vt(0,1,n)}function yh(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Qn=.35;function vh(t=Qn){return t===!1?t=0:t===!0&&(t=Qn),{x:ji(t,"left","right"),y:ji(t,"top","bottom")}}function ji(t,e,n){return{min:Vi(t,e),max:Vi(t,n)}}function Vi(t,e){return typeof t=="number"?t:t[e]||0}const xh=new WeakMap;class wh{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=q(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Oe(d).point)},a=(d,h)=>{const{drag:g,dragPropagation:p,onDragStart:f}=this.getProps();if(g&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Mu(g),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ot(v=>{let P=this.getAxisMotionValue(v).get()||0;if(ft.test(P)){const{projection:w}=this.visualElement;if(w&&w.layout){const C=w.layout.layoutBox[v];C&&(P=Q(C)*(parseFloat(P)/100))}}this.originPoint[v]=P}),f&&B.postRender(()=>f(d,h)),Zn(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},s=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:g,dragDirectionLock:p,onDirectionLock:f,onDrag:x}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:v}=h;if(p&&this.currentDirection===null){this.currentDirection=Ph(v),this.currentDirection!==null&&f&&f(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),x&&x(d,h)},l=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>ot(d=>this.getAnimationState(d)==="paused"&&this.getAxisMotionValue(d).animation?.play()),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Ja(e,{onSessionStart:o,onStart:a,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:r,contextWindow:Za(this.visualElement)})}stop(e,n){const r=e||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:a}=i;this.startAnimation(a);const{onDragEnd:s}=this.getProps();s&&B.postRender(()=>s(r,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Ie(e,i,this.currentDirection))return;const o=this.getAxisMotionValue(e);let a=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(a=ph(a,this.constraints[e],this.elastic[e])),o.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,i=this.constraints;e&&qt(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=mh(r.layoutBox,e):this.constraints=!1,this.elastic=vh(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ot(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=yh(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!qt(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=Pd(r,i.root,this.visualElement.getTransformPagePoint());let a=gh(i.layout.layoutBox,o);if(n){const s=n(vd(a));this.hasMutatedConstraints=!!s,s&&(a=_a(s))}return a}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:a,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},c=ot(u=>{if(!Ie(u,n,this.currentDirection))return;let d=l&&l[u]||{};a&&(d={min:0,max:0});const h=i?200:1e6,g=i?40:1e7,p={type:"inertia",velocity:r?e[u]:0,bounceStiffness:h,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,p)});return Promise.all(c).then(s)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Zn(this.visualElement,e),r.start(Ir(e,r,0,n,this.visualElement,!1))}stopAnimation(){ot(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ot(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ot(n=>{const{drag:r}=this.getProps();if(!Ie(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:s}=i.layout.layoutBox[n];o.set(e[n]-$(a,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!qt(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ot(a=>{const s=this.getAxisMotionValue(a);if(s&&this.constraints!==!1){const l=s.get();i[a]=bh({min:l,max:l},this.constraints[a])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ot(a=>{if(!Ie(a,e,null))return;const s=this.getAxisMotionValue(a),{min:l,max:c}=this.constraints[a];s.set($(l,c,i[a]))})}addListeners(){if(!this.visualElement.current)return;xh.set(this.visualElement,this);const e=this.visualElement.current,n=fe(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();qt(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),B.read(r);const a=Pe(window,"resize",()=>this.scalePositionWithinConstraints()),s=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(ot(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),s&&s()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:a=Qn,dragMomentum:s=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:a,dragMomentum:s}}}function Ie(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Ph(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class kh extends Rt{constructor(e){super(e),this.removeGroupControls=at,this.removeListeners=at,this.controls=new wh(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||at}unmount(){this.removeGroupControls(),this.removeListeners()}}const Li=t=>(e,n)=>{t&&B.postRender(()=>t(e,n))};class Th extends Rt{constructor(){super(...arguments),this.removePointerDownListener=at}onPointerDown(e){this.session=new Ja(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Za(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Li(e),onStart:Li(n),onMove:r,onEnd:(o,a)=>{delete this.session,i&&B.postRender(()=>i(o,a))}}}mount(){this.removePointerDownListener=fe(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Je={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ni(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const se={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(E.test(t))t=parseFloat(t);else return t;const n=Ni(t,e.target.x),r=Ni(t,e.target.y);return`${n}% ${r}%`}},Sh={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Ot.parse(t);if(i.length>5)return r;const o=Ot.createTransformer(t),a=typeof i[0]!="number"?1:0,s=n.x.scale*e.x,l=n.y.scale*e.y;i[0+a]/=s,i[1+a]/=l;const c=$(s,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=c),typeof i[3+a]=="number"&&(i[3+a]/=c),o(i)}};let _i=!1;class Ch extends y.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=e;Ku(Ah),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),_i&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Je.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:a}=r;return a&&(a.isPresent=o,_i=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==o?a.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?a.promote():a.relegate()||B.postRender(()=>{const s=a.getStack();(!s||!s.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Or.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ts(t){const[e,n]=Bu(),r=y.useContext(jo);return b.jsx(Ch,{...t,layoutGroup:r,switchLayoutGroup:y.useContext(La),isPresent:e,safeToRemove:n})}const Ah={borderRadius:{...se,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomLeftRadius:se,borderBottomRightRadius:se,boxShadow:Sh};function Eh(t,e,n){const r=J(t)?t:Zt(t);return r.start(Ir("",r,e,n)),r.animation}const Oh=(t,e)=>t.depth-e.depth;class Rh{constructor(){this.children=[],this.isDirty=!1}add(e){ur(this.children,e),this.isDirty=!0}remove(e){dr(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Oh),this.isDirty=!1,this.children.forEach(e)}}function Mh(t,e){const n=tt.now(),r=({timestamp:i})=>{const o=i-n;o>=e&&(Et(r),t(o-e))};return B.setup(r,!0),()=>Et(r)}const es=["TopLeft","TopRight","BottomLeft","BottomRight"],Dh=es.length,Fi=t=>typeof t=="string"?parseFloat(t):t,Ii=t=>typeof t=="number"||E.test(t);function jh(t,e,n,r,i,o){i?(t.opacity=$(0,n.opacity??1,Vh(r)),t.opacityExit=$(e.opacity??1,0,Lh(r))):o&&(t.opacity=$(e.opacity??1,n.opacity??1,r));for(let a=0;a<Dh;a++){const s=`border${es[a]}Radius`;let l=Bi(e,s),c=Bi(n,s);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Ii(l)===Ii(c)?(t[s]=Math.max($(Fi(l),Fi(c),r),0),(ft.test(c)||ft.test(l))&&(t[s]+="%")):t[s]=c}(e.rotate||n.rotate)&&(t.rotate=$(e.rotate||0,n.rotate||0,r))}function Bi(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Vh=ns(0,.5,Ho),Lh=ns(.5,.95,at);function ns(t,e,n){return r=>r<t?0:r>e?1:n(ge(t,e,r))}function $i(t,e){t.min=e.min,t.max=e.max}function it(t,e){$i(t.x,e.x),$i(t.y,e.y)}function zi(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Ui(t,e,n,r,i){return t-=e,t=an(t,1/n,r),i!==void 0&&(t=an(t,1/i,r)),t}function Nh(t,e=0,n=1,r=.5,i,o=t,a=t){if(ft.test(e)&&(e=parseFloat(e),e=$(a.min,a.max,e/100)-a.min),typeof e!="number")return;let s=$(o.min,o.max,r);t===o&&(s-=e),t.min=Ui(t.min,e,n,s,i),t.max=Ui(t.max,e,n,s,i)}function Hi(t,e,[n,r,i],o,a){Nh(t,e[n],e[r],e[i],e.scale,o,a)}const _h=["x","scaleX","originX"],Fh=["y","scaleY","originY"];function Wi(t,e,n,r){Hi(t.x,e,_h,n?n.x:void 0,r?r.x:void 0),Hi(t.y,e,Fh,n?n.y:void 0,r?r.y:void 0)}function qi(t){return t.translate===0&&t.scale===1}function rs(t){return qi(t.x)&&qi(t.y)}function Ki(t,e){return t.min===e.min&&t.max===e.max}function Ih(t,e){return Ki(t.x,e.x)&&Ki(t.y,e.y)}function Yi(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function is(t,e){return Yi(t.x,e.x)&&Yi(t.y,e.y)}function Gi(t){return Q(t.x)/Q(t.y)}function Xi(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Bh{constructor(){this.members=[]}add(e){ur(this.members,e),e.scheduleRender()}remove(e){if(dr(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $h(t,e,n){let r="";const i=t.x.translate/e.x,o=t.y.translate/e.y,a=n?.z||0;if((i||o||a)&&(r=`translate3d(${i}px, ${o}px, ${a}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:g,skewY:p}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),d&&(r+=`rotateX(${d}deg) `),h&&(r+=`rotateY(${h}deg) `),g&&(r+=`skewX(${g}deg) `),p&&(r+=`skewY(${p}deg) `)}const s=t.x.scale*e.x,l=t.y.scale*e.y;return(s!==1||l!==1)&&(r+=`scale(${s}, ${l})`),r||"none"}const On=["","X","Y","Z"],zh=1e3;let Uh=0;function Rn(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function os(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Wa(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",B,!(i||o))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&os(r)}function as({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},s=e?.()){this.id=Uh++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(qh),this.nodes.forEach(Xh),this.nodes.forEach(Zh),this.nodes.forEach(Kh)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=s?s.root||s:this,this.path=s?[...s.path,s]:[],this.parent=s,this.depth=s?s.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rh)}addEventListener(a,s){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new pr),this.eventHandlers.get(a).add(s)}notifyListeners(a,...s){const l=this.eventHandlers.get(a);l&&l.notify(...s)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=Pa(a)&&!_u(a),this.instance=a;const{layoutId:s,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||s)&&(this.isLayoutDirty=!0),t){let u,d=0;const h=()=>this.root.updateBlockedByResize=!1;B.read(()=>{d=window.innerWidth}),t(a,()=>{const g=window.innerWidth;g!==d&&(d=g,this.root.updateBlockedByResize=!0,u&&u(),u=Mh(h,250),Je.hasAnimatedSinceResize&&(Je.hasAnimatedSinceResize=!1,this.nodes.forEach(Qi)))})}s&&this.root.registerSharedNode(s,this),this.options.animate!==!1&&c&&(s||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||c.getDefaultTransition()||nf,{onLayoutAnimationStart:f,onLayoutAnimationComplete:x}=c.getProps(),v=!this.targetLayout||!is(this.targetLayout,g),P=!d&&h;if(this.options.layoutRoot||this.resumeFrom||P||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...Ar(p,"layout"),onPlay:f,onComplete:x};(c.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(u,P)}else d||Qi(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Et(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Jh),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&os(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:s,layout:l}=this.options;if(s===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Zi);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Ji);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Gh),this.nodes.forEach(Hh),this.nodes.forEach(Wh)):this.nodes.forEach(Ji),this.clearAllSnapshots();const s=tt.now();Z.delta=vt(0,1e3/60,s-Z.timestamp),Z.timestamp=s,Z.isProcessing=!0,vn.update.process(Z),vn.preRender.process(Z),vn.render.process(Z),Z.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Or.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Yh),this.sharedNodes.forEach(Qh)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,B.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){B.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Q(this.snapshot.measuredBox.x)&&!Q(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=q(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:s}=this.options;s&&s.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let s=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(s=!1),s&&this.instance){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,s=this.projectionDelta&&!rs(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;a&&this.instance&&(s||Vt(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return a&&(l=this.removeTransform(l)),rf(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:a}=this.options;if(!a)return q();const s=a.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(of))){const{scroll:c}=this.root;c&&(Kt(s.x,c.offset.x),Kt(s.y,c.offset.y))}return s}removeElementScroll(a){const s=q();if(it(s,a),this.scroll?.wasRoot)return s;for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:u,options:d}=c;c!==this.root&&u&&d.layoutScroll&&(u.wasRoot&&it(s,a),Kt(s.x,u.offset.x),Kt(s.y,u.offset.y))}return s}applyTransform(a,s=!1){const l=q();it(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];!s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Yt(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Vt(u.latestValues)&&Yt(l,u.latestValues)}return Vt(this.latestValues)&&Yt(l,this.latestValues),l}removeTransform(a){const s=q();it(s,a);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Vt(c.latestValues))continue;Kn(c.latestValues)&&c.updateSnapshot();const u=q(),d=c.measurePageBox();it(u,d),Wi(s,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Vt(this.latestValues)&&Wi(s,this.latestValues),s}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Z.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){const s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==s;if(!(a||l&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=Z.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=q(),this.relativeTargetOrigin=q(),me(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),it(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=q(),this.targetWithTransforms=q()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),uh(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):it(this.target,this.layout.layoutBox),Ia(this.target,this.targetDelta)):it(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=q(),this.relativeTargetOrigin=q(),me(this.relativeTargetOrigin,this.target,h.target),it(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Kn(this.parent.latestValues)||Fa(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const a=this.getLead(),s=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(l=!1),s&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Z.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;it(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;wd(this.layoutCorrected,this.treeScale,this.path,s),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=q());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(zi(this.prevProjectionDelta.x,this.projectionDelta.x),zi(this.prevProjectionDelta.y,this.projectionDelta.y)),pe(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!Xi(this.projectionDelta.x,this.prevProjectionDelta.x)||!Xi(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){if(this.options.visualElement?.scheduleRender(),a){const s=this.getStack();s&&s.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Gt(),this.projectionDelta=Gt(),this.projectionDeltaWithTransform=Gt()}setAnimationOrigin(a,s=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Gt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!s;const h=q(),g=l?l.source:void 0,p=this.layout?this.layout.source:void 0,f=g!==p,x=this.getStack(),v=!x||x.members.length<=1,P=!!(f&&!v&&this.options.crossfade===!0&&!this.path.some(ef));this.animationProgress=0;let w;this.mixTargetDelta=C=>{const k=C/1e3;to(d.x,a.x,k),to(d.y,a.y,k),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(me(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),tf(this.relativeTarget,this.relativeTargetOrigin,h,k),w&&Ih(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=q()),it(w,this.relativeTarget)),f&&(this.animationValues=u,jh(u,c,this.latestValues,k,P,v)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Et(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=B.update(()=>{Je.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Zt(0)),this.currentAnimation=Eh(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:s=>{this.mixTargetDelta(s),a.onUpdate&&a.onUpdate(s)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zh),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:s,target:l,layout:c,latestValues:u}=a;if(!(!s||!l||!c)){if(this!==a&&this.layout&&c&&ss(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||q();const d=Q(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+d;const h=Q(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+h}it(s,l),Yt(s,u),pe(this.projectionDeltaWithTransform,this.layoutCorrected,s,u)}}registerSharedNode(a,s){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Bh),this.sharedNodes.get(a).add(s);const c=s.options.initialPromotionConfig;s.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(s):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){const{layoutId:a}=this.options;return a?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:a}=this.options;return a?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:s,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let s=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(s=!0),!s)return;const c={};l.z&&Rn("z",a,c,this.animationValues);for(let u=0;u<On.length;u++)Rn(`rotate${On[u]}`,a,c,this.animationValues),Rn(`skew${On[u]}`,a,c,this.animationValues);a.render();for(const u in c)a.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);a.scheduleRender()}applyProjectionStyles(a,s){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Ze(s?.pointerEvents)||"",a.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Ze(s?.pointerEvents)||""),this.hasProjected&&!Vt(this.latestValues)&&(a.transform=l?l({},""):"none",this.hasProjected=!1);return}a.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=$h(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),a.transform=d;const{x:h,y:g}=this.projectionDelta;a.transformOrigin=`${h.origin*100}% ${g.origin*100}% 0`,c.animationValues?a.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:a.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const p in xe){if(u[p]===void 0)continue;const{correct:f,applyTo:x,isCSSVariable:v}=xe[p],P=d==="none"?u[p]:f(u[p],c);if(x){const w=x.length;for(let C=0;C<w;C++)a[x[C]]=P}else v?this.options.visualElement.renderState.vars[p]=P:a[p]=P}this.options.layoutId&&(a.pointerEvents=c===this?Ze(s?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>a.currentAnimation?.stop()),this.root.nodes.forEach(Zi),this.root.sharedNodes.clear()}}}function Hh(t){t.updateLayout()}function Wh(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=t.layout,{animationType:i}=t.options,o=e.source!==t.layout.source;i==="size"?ot(u=>{const d=o?e.measuredBox[u]:e.layoutBox[u],h=Q(d);d.min=n[u].min,d.max=d.min+h}):ss(i,e.layoutBox,n)&&ot(u=>{const d=o?e.measuredBox[u]:e.layoutBox[u],h=Q(n[u]);d.max=d.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[u].max=t.relativeTarget[u].min+h)});const a=Gt();pe(a,n,e.layoutBox);const s=Gt();o?pe(s,t.applyTransform(r,!0),e.measuredBox):pe(s,n,e.layoutBox);const l=!rs(a);let c=!1;if(!t.resumeFrom){const u=t.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:d,layout:h}=u;if(d&&h){const g=q();me(g,e.layoutBox,d.layoutBox);const p=q();me(p,n,h.layoutBox),is(g,p)||(c=!0),u.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=g,t.relativeParent=u)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function qh(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Kh(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Yh(t){t.clearSnapshot()}function Zi(t){t.clearMeasurements()}function Ji(t){t.isLayoutDirty=!1}function Gh(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Qi(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Xh(t){t.resolveTargetDelta()}function Zh(t){t.calcProjection()}function Jh(t){t.resetSkewAndRotation()}function Qh(t){t.removeLeadSnapshot()}function to(t,e,n){t.translate=$(e.translate,0,n),t.scale=$(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function eo(t,e,n,r){t.min=$(e.min,n.min,r),t.max=$(e.max,n.max,r)}function tf(t,e,n,r){eo(t.x,e.x,n.x,r),eo(t.y,e.y,n.y,r)}function ef(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const nf={duration:.45,ease:[.4,0,.1,1]},no=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),ro=no("applewebkit/")&&!no("chrome/")?Math.round:at;function io(t){t.min=ro(t.min),t.max=ro(t.max)}function rf(t){io(t.x),io(t.y)}function ss(t,e,n){return t==="position"||t==="preserve-aspect"&&!ch(Gi(e),Gi(n),.2)}function of(t){return t!==t.root&&t.scroll?.wasRoot}const af=as({attachResizeListener:(t,e)=>Pe(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Mn={current:void 0},ls=as({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Mn.current){const t=new af({});t.mount(window),t.setOptions({layoutScroll:!0}),Mn.current=t}return Mn.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),sf={pan:{Feature:Th},drag:{Feature:kh,ProjectionNode:ls,MeasureLayout:ts}};function oo(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&B.postRender(()=>o(e,Oe(e)))}class lf extends Rt{mount(){const{current:e}=this.node;e&&(this.unmount=Du(e,(n,r)=>(oo(this.node,r,"Start"),i=>oo(this.node,i,"End"))))}unmount(){}}class cf extends Rt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ce(Pe(this.node.current,"focus",()=>this.onFocus()),Pe(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ao(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&B.postRender(()=>o(e,Oe(e)))}class uf extends Rt{mount(){const{current:e}=this.node;e&&(this.unmount=Nu(e,(n,r)=>(ao(this.node,r,"Start"),(i,{success:o})=>ao(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const tr=new WeakMap,Dn=new WeakMap,df=t=>{const e=tr.get(t.target);e&&e(t)},hf=t=>{t.forEach(df)};function ff({root:t,...e}){const n=t||document;Dn.has(n)||Dn.set(n,{});const r=Dn.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(hf,{root:t,...e})),r[i]}function pf(t,e,n){const r=ff(e);return tr.set(t,n),r.observe(t),()=>{tr.delete(t),r.unobserve(t)}}const mf={some:0,all:1};class gf extends Rt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=e,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:mf[i]},s=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return pf(this.node.current,a,s)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(bf(e,n))&&this.startObserver()}unmount(){}}function bf({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const yf={inView:{Feature:gf},tap:{Feature:uf},focus:{Feature:cf},hover:{Feature:lf}},vf={layout:{ProjectionNode:ls,MeasureLayout:ts}},xf={...rh,...yf,...sf,...vf},wf=yd(xf,Md);function fn({text:t="",gradientColors:e=["#ff0080","#7928ca","#ff0080"],className:n=""}){return b.jsx("div",{className:`w-full h-full flex items-center justify-center overflow-hidden ${n}`,children:b.jsx(wf.div,{className:"text-4xl font-bold whitespace-nowrap",animate:{backgroundPosition:["0% 50%","100% 50%","0% 50%"]},transition:{duration:5,ease:"linear",repeat:1/0},style:{backgroundImage:`linear-gradient(90deg, ${e.join(", ")})`,backgroundSize:"200% 100%",backgroundClip:"text",WebkitBackgroundClip:"text",color:"transparent"},children:t})})}const Pf=()=>b.jsxs("div",{className:"p-10 bg-white w-full min-h-screen flex flex-col items-center justify-start",children:[b.jsxs("div",{className:"flex flex-row items-center justify-center mb-10 w-full",children:[b.jsx(fn,{text:"About Me",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight"}),b.jsx("img",{src:"/my_website//SelfPortrait.jpeg",alt:"Self Portrait",className:"rounded-full w-28 h-28 ml-6 shadow-lg object-cover border-4 border-gray-200"})]}),b.jsxs("div",{className:"max-w-3xl text-center text-gray-800",children:[b.jsx("p",{className:"text-xl leading-relaxed",children:"Hi, I'm Junior—an engineer and creative technologist with a passion for building innovative, user-focused web applications. I recently graduated with a B.S. in Computer Science & Engineering and a minor in Physics from Bucknell University, and have since been working on projects at the intersection of AI, full-stack development, and automation."}),b.jsx("p",{className:"text-xl leading-relaxed mt-6",children:"I’ve developed AI-powered mobile apps, backend pipelines for real-world data ingestion, and interactive dashboards that make complex systems usable. Whether I’m building a trading bot using NLP or contributing to open-source tools, I thrive on solving problems that blend functionality with great user experience."}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 text-left",children:[b.jsxs("div",{children:[b.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Programming Languages"}),b.jsxs("ul",{className:"list-disc list-inside text-lg",children:[b.jsx("li",{children:"Python"}),b.jsx("li",{children:"JavaScript / TypeScript"}),b.jsx("li",{children:"C / C++"}),b.jsx("li",{children:"HTML / CSS"}),b.jsx("li",{children:"SQL"})]})]}),b.jsxs("div",{children:[b.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Frameworks & Tools"}),b.jsxs("ul",{className:"list-disc list-inside text-lg",children:[b.jsx("li",{children:"React, Next.js, Node.js, Express"}),b.jsx("li",{children:"MariaDB, PostgreSQL"}),b.jsx("li",{children:"TensorFlow, Hugging Face"}),b.jsx("li",{children:"Git, Linux, Docker"})]})]})]}),b.jsxs("div",{className:"mt-10",children:[b.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"What I'm Passionate About"}),b.jsx("p",{className:"text-lg",children:"AI development, intuitive UX design, building scalable web apps, open-source contributions, and empowering users with smart, elegant technology."})]}),b.jsxs("div",{className:"mt-10",children:[b.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Outside of Tech"}),b.jsx("p",{className:"text-lg",children:"When I’m not coding, you can find me exploring new bouldering, gaming, reading about physics or tech trends, or brainstorming my next side project."})]})]})]}),kf=()=>{const t=y.useRef(null),[e,n]=y.useState(0),[r,i]=y.useState(0),[o,a]=y.useState(0),[s,l]=y.useState(0),[c,u]=y.useState(!1);y.useEffect(()=>{u(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))},[]),y.useEffect(()=>{const h=setInterval(()=>{n(g=>g+(o-g)/20),i(g=>g+(s-g)/20),t.current&&(t.current.style.transform=`translate(${Math.round(e)}px, ${Math.round(r)}px)`)},16.666666666666668);return()=>clearInterval(h)},[e,r,o,s]);const d=h=>{if(t.current){const g=t.current.getBoundingClientRect();a(h.clientX-g.left),l(h.clientY-g.top)}};return b.jsxs("div",{className:"h-full w-full relative overflow-hidden bg-[linear-gradient(40deg,rgb(108,0,162),rgb(0,17,82))]",children:[b.jsx("svg",{className:"hidden",children:b.jsx("defs",{children:b.jsxs("filter",{id:"blurMe",children:[b.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),b.jsx("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8",result:"goo"}),b.jsx("feBlend",{in:"SourceGraphic",in2:"goo"})]})})}),b.jsxs("div",{className:`gradients-container h-full w-full blur-lg ${c?"blur-2xl":"[filter:url(#blurMe)_blur(40px)]"}`,children:[b.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(18,113,255,0.8)_0,_rgba(18,113,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:center_center] animate-first opacity-100"}),b.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(221,74,255,0.8)_0,_rgba(221,74,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-400px)] animate-second opacity-100"}),b.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(100,220,255,0.8)_0,_rgba(100,220,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%+400px)] animate-third opacity-100"}),b.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(200,50,50,0.8)_0,_rgba(200,50,50,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70"}),b.jsx("div",{className:"absolute [background:radial-gradient(circle_at_center,_rgba(180,180,50,0.8)_0,_rgba(180,180,50,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-[80%] h-[80%] top-[calc(50%-40%)] left-[calc(50%-40%)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100"}),b.jsx("div",{ref:t,onMouseMove:d,className:"absolute [background:radial-gradient(circle_at_center,_rgba(140,100,255,0.8)_0,_rgba(140,100,255,0)_50%)_no-repeat] [mix-blend-mode:hard-light] w-full h-full -top-1/2 -left-1/2 opacity-70"})]}),b.jsx("div",{className:"relative z-10 h-full flex items-center justify-center",children:b.jsxs("div",{className:"text-white text-center",children:[b.jsx("h1",{className:"text-5xl font-bold mb-4",children:"Gradient Background"}),b.jsx("p",{className:"text-xl",children:"Interactive animated background with mouse tracking"})]})})]})},Tf=()=>b.jsx("div",{className:"h-screen w-screen relative overflow-hidden h-center items-center justify-center",children:b.jsx(kf,{children:b.jsx("p",{children:"Interactive Gradient Background"})})});function so({text:t,to:e}){return e.startsWith("http")||e.startsWith("mailto:")?b.jsx("a",{href:e,target:"_blank",rel:"nooperner noreferrer",className:"justify-center py-2 cursor-pointer hover:text-blue-600 transition-colors",children:t}):b.jsx(sr,{to:e,className:"justify-center py-2 cursor-pointer hover:text-blue-600 transition-colors",children:t})}function Sf({downloadVisible:t=!1}){const[e,n]=y.useState([{text:"AboutMe",to:"/"},{text:"Projects",to:"/projects"},{text:"Resume",to:"/Resume"}]),[r,i]=y.useState([{text:"GitHub",to:"https://github.com/Junior-Weil"},{text:"LinkedIn",to:"https://www.linkedin.com/in/ronald-weil-9561a6251"},{text:"Email",to:"mailto:rmw020@bucknell.edu"}]);return y.useEffect(()=>{},[]),b.jsx("div",{className:"fixed top-0 left-0 w-full z-50 bg-white",children:b.jsxs("div",{className:"flex gap-5 justify-between items-center py-1.5 px-6 rounded-3xl backdrop-blur-[17.5px] bg-opacity-80 w-full max-w-full flex-wrap sm:flex-nowrap sm:py-4 sm:px-10 bg-[#ffffffff]",children:[b.jsxs("div",{className:"flex gap-4 justify-between items-center py-1.5 my-auto w-full sm:w-auto",children:[b.jsx("div",{className:"flex justify-center items-center px-0.5",children:b.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"JW"})}),b.jsx("div",{className:"my-auto font-bold text-lg text-zinc-950",children:b.jsx("nav",{className:"flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto",children:r.map((o,a)=>b.jsx(so,{text:o.text,to:o.to},a))})})]}),b.jsx("nav",{className:"flex sm:flex-row flex-col gap-5 justify-center items-center self-stretch my-auto text-base text-center text-neutral-900 font-light w-full sm:w-auto",children:e.map((o,a)=>b.jsx(so,{text:o.text,to:o.to},a))}),t&&b.jsx("button",{className:"justify-center self-stretch sm:self-auto px-6 py-5 text-base leading-6 text-center text-white rounded-2xl bg-neutral-900 max-md:px-5 font-light w-full sm:w-auto",onClick:()=>alert("Download Now button clicked"),children:"Download Now"})]})})}function Cf({frontContent:t,backContent:e,className:n="",onClick:r}){const[i,o]=y.useState(!1),a=()=>{o(!i),r?.()};return b.jsx("div",{className:`relative w-[400px] h-[300px] cursor-pointer [perspective:1000px] ${n}`,onClick:a,children:b.jsxs("div",{className:`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${i?"[transform:rotateY(180deg)]":""}`,children:[b.jsx("div",{className:"absolute w-full h-full [backface-visibility:hidden] bg-white rounded-xl shadow-md p-4",children:t}),b.jsx("div",{className:"absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-white rounded-xl shadow-md p-4 flex items-center justify-center text-center",children:e})]})})}function Af(){const t=[{image:"/my_website/DataDriveVehicle.jpg",title:"Data Drive Vehicle",docLink:"https://docs.google.com/document/d/1R62fZxs_eFVezG9opYTs5jEd1oRQatV5bLbR9Gc6CI4/edit?tab=t.0",docLinkButtonText:"View Document",docLinkText:null},{image:"/my_website/kaggleImages/AUC.png",title:"Kaggle Home Credit",docLink:"/kaggle",docLinkButtonText:"View Figures",docLinkText:""}];return b.jsx("section",{className:"py-14",children:b.jsxs("div",{className:"max-w-screen-xl mx-auto px-4 md:px-8",children:[b.jsx("div",{className:"flex flex-grid items-center justify-center overflow-x-auto",children:b.jsx(fn,{className:"text-gray-800 text-3xl font-semibold sm:text-4xl",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],text:"Projects"})}),b.jsx("div",{className:"mt-12",children:b.jsx("ul",{className:"grid gap-10 grid-cols-2",children:t.map((e,n)=>b.jsx("li",{children:b.jsx(Cf,{frontContent:b.jsxs("div",{className:"items-center justify-center flex flex-col gap-4 p-4",children:[b.jsx("img",{src:e.image,alt:e.title}),b.jsx("h4",{className:"text-lg font-semibold text-gray-800",children:e.title})]}),backContent:b.jsx(b.Fragment,{children:b.jsx("a",{href:e.docLink,rel:"noopener noreferrer",className:"bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",children:e.docLinkButtonText})})})},n))})})]})})}const Ef=()=>b.jsx("div",{className:"p-10 bg-white w-full min-h-screen overflow-hidden flex-col items-center justify-center rounded",children:b.jsx(Af,{})});function G(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}G(`.react-loading-indicator-normalize,
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
}`);var L=function(){return L=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},L.apply(this,arguments)};function sn(t){return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sn(t)}var Of=/^\s+/,Rf=/\s+$/;function S(t,e){if(e=e||{},(t=t||"")instanceof S)return t;if(!(this instanceof S))return new S(t,e);var n=function(r){var i={r:0,g:0,b:0},o=1,a=null,s=null,l=null,c=!1,u=!1;typeof r=="string"&&(r=function(p){p=p.replace(Of,"").replace(Rf,"").toLowerCase();var f,x=!1;if(er[p])p=er[p],x=!0;else if(p=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(f=st.rgb.exec(p))?{r:f[1],g:f[2],b:f[3]}:(f=st.rgba.exec(p))?{r:f[1],g:f[2],b:f[3],a:f[4]}:(f=st.hsl.exec(p))?{h:f[1],s:f[2],l:f[3]}:(f=st.hsla.exec(p))?{h:f[1],s:f[2],l:f[3],a:f[4]}:(f=st.hsv.exec(p))?{h:f[1],s:f[2],v:f[3]}:(f=st.hsva.exec(p))?{h:f[1],s:f[2],v:f[3],a:f[4]}:(f=st.hex8.exec(p))?{r:et(f[1]),g:et(f[2]),b:et(f[3]),a:po(f[4]),format:x?"name":"hex8"}:(f=st.hex6.exec(p))?{r:et(f[1]),g:et(f[2]),b:et(f[3]),format:x?"name":"hex"}:(f=st.hex4.exec(p))?{r:et(f[1]+""+f[1]),g:et(f[2]+""+f[2]),b:et(f[3]+""+f[3]),a:po(f[4]+""+f[4]),format:x?"name":"hex8"}:(f=st.hex3.exec(p))?{r:et(f[1]+""+f[1]),g:et(f[2]+""+f[2]),b:et(f[3]+""+f[3]),format:x?"name":"hex"}:!1}(r)),sn(r)=="object"&&(mt(r.r)&&mt(r.g)&&mt(r.b)?(d=r.r,h=r.g,g=r.b,i={r:255*I(d,255),g:255*I(h,255),b:255*I(g,255)},c=!0,u=String(r.r).substr(-1)==="%"?"prgb":"rgb"):mt(r.h)&&mt(r.s)&&mt(r.v)?(a=ue(r.s),s=ue(r.v),i=function(p,f,x){p=6*I(p,360),f=I(f,100),x=I(x,100);var v=Math.floor(p),P=p-v,w=x*(1-f),C=x*(1-P*f),k=x*(1-(1-P)*f),M=v%6,V=[x,C,w,w,k,x][M],A=[k,x,x,C,w,w][M],D=[w,w,k,x,x,C][M];return{r:255*V,g:255*A,b:255*D}}(r.h,a,s),c=!0,u="hsv"):mt(r.h)&&mt(r.s)&&mt(r.l)&&(a=ue(r.s),l=ue(r.l),i=function(p,f,x){var v,P,w;function C(V,A,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?V+6*(A-V)*D:D<.5?A:D<2/3?V+(A-V)*(2/3-D)*6:V}if(p=I(p,360),f=I(f,100),x=I(x,100),f===0)v=P=w=x;else{var k=x<.5?x*(1+f):x+f-x*f,M=2*x-k;v=C(M,k,p+1/3),P=C(M,k,p),w=C(M,k,p-1/3)}return{r:255*v,g:255*P,b:255*w}}(r.h,a,l),c=!0,u="hsl"),r.hasOwnProperty("a")&&(o=r.a));var d,h,g;return o=cs(o),{ok:c,format:r.format||u,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:o}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function lo(t,e,n){t=I(t,255),e=I(e,255),n=I(n,255);var r,i,o=Math.max(t,e,n),a=Math.min(t,e,n),s=(o+a)/2;if(o==a)r=i=0;else{var l=o-a;switch(i=s>.5?l/(2-o-a):l/(o+a),o){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,l:s}}function co(t,e,n){t=I(t,255),e=I(e,255),n=I(n,255);var r,i,o=Math.max(t,e,n),a=Math.min(t,e,n),s=o,l=o-a;if(i=o===0?0:l/o,o==a)r=0;else{switch(o){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,v:s}}function uo(t,e,n,r){var i=[ct(Math.round(t).toString(16)),ct(Math.round(e).toString(16)),ct(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function ho(t,e,n,r){return[ct(us(r)),ct(Math.round(t).toString(16)),ct(Math.round(e).toString(16)),ct(Math.round(n).toString(16))].join("")}function Mf(t,e){e=e===0?0:e||10;var n=S(t).toHsl();return n.s-=e/100,n.s=pn(n.s),S(n)}function Df(t,e){e=e===0?0:e||10;var n=S(t).toHsl();return n.s+=e/100,n.s=pn(n.s),S(n)}function jf(t){return S(t).desaturate(100)}function Vf(t,e){e=e===0?0:e||10;var n=S(t).toHsl();return n.l+=e/100,n.l=pn(n.l),S(n)}function Lf(t,e){e=e===0?0:e||10;var n=S(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),S(n)}function Nf(t,e){e=e===0?0:e||10;var n=S(t).toHsl();return n.l-=e/100,n.l=pn(n.l),S(n)}function _f(t,e){var n=S(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,S(n)}function Ff(t){var e=S(t).toHsl();return e.h=(e.h+180)%360,S(e)}function fo(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=S(t).toHsl(),r=[S(t)],i=360/e,o=1;o<e;o++)r.push(S({h:(n.h+o*i)%360,s:n.s,l:n.l}));return r}function If(t){var e=S(t).toHsl(),n=e.h;return[S(t),S({h:(n+72)%360,s:e.s,l:e.l}),S({h:(n+216)%360,s:e.s,l:e.l})]}function Bf(t,e,n){e=e||6,n=n||30;var r=S(t).toHsl(),i=360/n,o=[S(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,o.push(S(r));return o}function $f(t,e){e=e||6;for(var n=S(t).toHsv(),r=n.h,i=n.s,o=n.v,a=[],s=1/e;e--;)a.push(S({h:r,s:i,v:o})),o=(o+s)%1;return a}S.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=cs(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=co(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=co(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.v);return this._a==1?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=lo(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=lo(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.l);return this._a==1?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return uo(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,n,r,i,o){var a=[ct(Math.round(e).toString(16)),ct(Math.round(n).toString(16)),ct(Math.round(r).toString(16)),ct(us(i))];return o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*I(this._r,255))+"%",g:Math.round(100*I(this._g,255))+"%",b:Math.round(100*I(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*I(this._r,255))+"%, "+Math.round(100*I(this._g,255))+"%, "+Math.round(100*I(this._b,255))+"%)":"rgba("+Math.round(100*I(this._r,255))+"%, "+Math.round(100*I(this._g,255))+"%, "+Math.round(100*I(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(zf[uo(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+ho(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=S(t);n="#"+ho(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return S(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Vf,arguments)},brighten:function(){return this._applyModification(Lf,arguments)},darken:function(){return this._applyModification(Nf,arguments)},desaturate:function(){return this._applyModification(Mf,arguments)},saturate:function(){return this._applyModification(Df,arguments)},greyscale:function(){return this._applyModification(jf,arguments)},spin:function(){return this._applyModification(_f,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(Bf,arguments)},complement:function(){return this._applyCombination(Ff,arguments)},monochromatic:function(){return this._applyCombination($f,arguments)},splitcomplement:function(){return this._applyCombination(If,arguments)},triad:function(){return this._applyCombination(fo,[3])},tetrad:function(){return this._applyCombination(fo,[4])}},S.fromRatio=function(t,e){if(sn(t)=="object"){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=r==="a"?t[r]:ue(t[r]));t=n}return S(t,e)},S.equals=function(t,e){return!(!t||!e)&&S(t).toRgbString()==S(e).toRgbString()},S.random=function(){return S.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},S.mix=function(t,e,n){n=n===0?0:n||50;var r=S(t).toRgb(),i=S(e).toRgb(),o=n/100;return S({r:(i.r-r.r)*o+r.r,g:(i.g-r.g)*o+r.g,b:(i.b-r.b)*o+r.b,a:(i.a-r.a)*o+r.a})},S.readability=function(t,e){var n=S(t),r=S(e);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},S.isReadable=function(t,e,n){var r,i,o=S.readability(t,e);switch(i=!1,(r=function(a){var s,l;return s=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(a.size||"small").toLowerCase(),s!=="AA"&&s!=="AAA"&&(s="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:s,size:l}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=o>=4.5;break;case"AAlarge":i=o>=3;break;case"AAAsmall":i=o>=7}return i},S.mostReadable=function(t,e,n){var r,i,o,a,s=null,l=0;i=(n=n||{}).includeFallbackColors,o=n.level,a=n.size;for(var c=0;c<e.length;c++)(r=S.readability(t,e[c]))>l&&(l=r,s=S(e[c]));return S.isReadable(t,s,{level:o,size:a})||!i?s:(n.includeFallbackColors=!1,S.mostReadable(t,["#fff","#000"],n))};var er=S.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},zf=S.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(er);function cs(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function I(t,e){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(t)&&(t="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function pn(t){return Math.min(1,Math.max(0,t))}function et(t){return parseInt(t,16)}function ct(t){return t.length==1?"0"+t:""+t}function ue(t){return t<=1&&(t=100*t+"%"),t}function us(t){return Math.round(255*parseFloat(t)).toString(16)}function po(t){return et(t)/255}var kt,Be,$e,st=(Be="[\\s|\\(]+("+(kt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+kt+")[,|\\s]+("+kt+")\\s*\\)?",$e="[\\s|\\(]+("+kt+")[,|\\s]+("+kt+")[,|\\s]+("+kt+")[,|\\s]+("+kt+")\\s*\\)?",{CSS_UNIT:new RegExp(kt),rgb:new RegExp("rgb"+Be),rgba:new RegExp("rgba"+$e),hsl:new RegExp("hsl"+Be),hsla:new RegExp("hsla"+$e),hsv:new RegExp("hsv"+Be),hsva:new RegExp("hsva"+$e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function mt(t){return!!st.CSS_UNIT.exec(t)}var Re=function(t,e){var n=(typeof t=="string"?parseInt(t):t)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(e),o=i+r*(i/5)*-1;return(o==0||o<=Number.EPSILON)&&(o=.1),{animationPeriod:o+"s"}}return{animationPeriod:e}},Me=function(t,e){var n=t||{},r="";switch(e){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var o=n.fontSize;i=function(a,s){var l={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&s.indexOf(c)<0&&(l[c]=a[c]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var u=0;for(c=Object.getOwnPropertySymbols(a);u<c.length;u++)s.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(a,c[u])&&(l[c[u]]=a[c[u]])}return l}(n,["fontSize"]),r=o}return{fontSize:r,styles:i}},Uf={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},De=function(t){var e=t.className,n=t.text,r=t.textColor,i=t.staticText,o=t.style;return n?F.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:L(L(L({},i&&Uf),r&&{color:r,mixBlendMode:"unset"}),o&&o)},typeof n=="string"&&n.length?n:"loading"):null},gt="rgb(50, 205, 50)";function je(t,e){if(e===void 0&&(e=0),t.length===0)throw new Error("Input array cannot be empty!");var n=[];return function r(i,o){return o===void 0&&(o=0),n.push.apply(n,i),n.length<o&&r(n,o),n.slice(0,o)}(t,e)}G(`.atom-rli-bounding-box {
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
}`);S(gt).toRgb();Array.from({length:4},function(t,e){return"--atom-phase".concat(e+1,"-rgb")});G(`.commet-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--commet-phase".concat(e+1,"-color")});G(`.OP-annulus-rli-bounding-box {
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
}`);var ze=Array.from({length:4},function(t,e){return"--OP-annulus-phase".concat(e+1,"-color")}),Hf=function(t){var e,n=Me(t?.style,t?.size),r=n.styles,i=n.fontSize,o=t?.easing,a=Re(t?.speedPlus,"1.5s").animationPeriod,s=function(c){var u={},d=ze.length;if(c instanceof Array){for(var h=je(c,d),g=0;g<h.length&&!(g>=4);g++)u[ze[g]]=h[g];return u}try{if(typeof c!="string")throw new Error("Color String expected");for(var p=0;p<d;p++)u[ze[p]]=c}catch(f){for(f instanceof Error?console.warn("[".concat(f.message,']: Received "').concat(typeof c,'" instead with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),p=0;p<d;p++)u[ze[p]]=gt}return u}((e=t?.color)!==null&&e!==void 0?e:""),l=t?.dense?4.3:2.9;return F.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:L(L(L(L(L({},i&&{fontSize:i}),a&&{"--rli-animation-duration":a}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},F.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},F.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},F.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:l,strokeMiterlimit:"10"})),F.createElement(De,{className:"OP-annulus-text",text:t?.text,textColor:t?.textColor})))};function jn(t){return t&&t.Math===Math&&t}G(`.OP-dotted-rli-bounding-box {
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
}`);var zt=jn(typeof window=="object"&&window)||jn(typeof self=="object"&&self)||jn(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function ds(){var t,e;return!((t=zt?.crypto)===null||t===void 0)&&t.randomUUID?zt.crypto.randomUUID():!((e=zt?.btoa)===null||e===void 0)&&e.name?zt.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Ue=Array.from({length:4},function(t,e){return"--OP-dotted-phase".concat(e+1,"-color")}),Wf=function(t){var e,n=Me(t?.style,t?.size),r=n.styles,i=n.fontSize,o=t?.easing,a=Re(t?.speedPlus,"1.2s").animationPeriod,s=function(c){var u={},d=Ue.length;if(c instanceof Array){for(var h=je(c,d),g=0;g<h.length&&!(g>=4);g++)u[Ue[g]]=h[g];return u}try{if(typeof c!="string")throw new Error("Color String expected");for(var p=0;p<d;p++)u[Ue[p]]=c}catch(f){for(f instanceof Error?console.warn("[".concat(f.message,']: Received "').concat(typeof c,'" with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),p=0;p<d;p++)u[Ue[p]]=gt}return u}((e=t?.color)!==null&&e!==void 0?e:""),l=t?.dense?16:12;return F.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:L(L(L(L(L({},i&&{fontSize:i}),a&&{"--rli-animation-duration":a}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},F.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:l}).map(function(c,u){var d=function(p,f,x){if(f===16){var v=360*p/f,P=f-p,w=Number.parseFloat(x)/f*P*-1;return{transform:"rotate(".concat(v,"deg)"),animationDelay:"".concat(w,"s")}}return{transform:"",animationDelay:""}}(u,l,a),h=d.animationDelay,g=d.transform;return F.createElement("span",{key:ds(),className:"rli-d-i-b dot-shape-holder",style:g?{transform:g}:void 0},F.createElement("span",{className:"dot",style:h?{animationDelay:h}:void 0}))}),F.createElement(De,{className:"OP-dotted-text",text:t?.text,textColor:t?.textColor})))};G(`.OP-spokes-rli-bounding-box {
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
}`);var He=Array.from({length:4},function(t,e){return"--OP-spokes-phase".concat(e+1,"-color")}),qf=function(t){var e,n=Me(t?.style,t?.size),r=n.styles,i=n.fontSize,o=t?.easing,a=Re(t?.speedPlus,"1.2s").animationPeriod,s=function(c){var u={},d=He.length;if(c instanceof Array){for(var h=je(c,d),g=0;g<h.length&&!(g>=4);g++)u[He[g]]=h[g];return u}try{if(typeof c!="string")throw new Error("Color String expected");for(var p=0;p<d;p++)u[He[p]]=c}catch(f){for(f instanceof Error?console.warn("[".concat(f.message,']: Received "').concat(typeof c,'" instead with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),p=0;p<d;p++)u[He[p]]=gt}return u}((e=t?.color)!==null&&e!==void 0?e:""),l=t?.dense?16:12;return F.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:L(L(L(L(L({},i&&{fontSize:i}),a&&{"--rli-animation-duration":a}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},F.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:l},function(c,u){return F.createElement("span",{key:ds(),className:"rli-d-i-b spoke",style:Kf(u,l,a)})})),F.createElement(De,{text:t?.text,textColor:t?.textColor}))};function Kf(t,e,n){if(e===16){var r=e-t,i=Number.parseFloat(n)/e;return{transform:"rotate(".concat(360*t/e,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*i*-1,"s")}}}G(`.OP-annulus-dual-sectors-rli-bounding-box {
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
}`);var We=Array.from({length:4},function(t,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")}),Yf=function(t){var e,n=Me(t?.style,t?.size),r=n.styles,i=n.fontSize,o=t?.easing,a=Re(t?.speedPlus,"1.2s").animationPeriod,s=function(c){var u={},d=We.length;if(c instanceof Array){for(var h=je(c,d),g=0;g<h.length&&!(g>=4);g++)u[We[g]]=h[g];return u}try{if(typeof c!="string")throw new Error("Color String expected");for(var p=0;p<d;p++)u[We[p]]=c}catch(f){for(f instanceof Error?console.warn("[".concat(f.message,']: Received "').concat(typeof c,'" with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),p=0;p<d;p++)u[We[p]]=gt}return u}((e=t?.color)!==null&&e!==void 0?e:""),l=t.dense?"0.45em":"";return F.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:L(L(L(L(L({},i&&{fontSize:i}),a&&{"--rli-animation-duration":a}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},F.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},F.createElement("span",{className:"rli-d-i-b annulus-sectors",style:L({},l&&{borderWidth:l})}),F.createElement(De,{className:"OP-annulus-dual-sectors-text",text:t?.text,textColor:t?.textColor})))};G(`.OP-annulus-sector-track-rli-bounding-box {
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
}`);var le=Array.from({length:4},function(t,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]}),qe=function(t){return t===void 0&&(t=1),.25*t},Gf=function(t){var e,n=Me(t?.style,t?.size),r=n.styles,i=n.fontSize,o=t?.easing,a=Re(t?.speedPlus,"1s").animationPeriod,s=function(c){var u={},d=le.length;if(c instanceof Array){for(var h=je(c,d),g=0;g<h.length&&!(g>=4);g++){var p=le[g];try{if(!(v=S(h[g])).isValid())throw new Error("Invalid Color: ".concat(v.getOriginalInput()));var f=v.setAlpha(qe(v.getAlpha())).toRgbString(),x=h[g];u[p[0]]=f,u[p[1]]=x}catch{x=gt,f=(v=S(gt)).setAlpha(qe(v.getAlpha())).toRgbString(),u[p[0]]=f,u[p[1]]=x}}return u}try{var v=S(c);if(typeof c!="string")throw new Error("Color String expected");if(!v.isValid())throw new Error("Invalid Color: ".concat(v.getOriginalInput()));x=c,f=v.setAlpha(qe(v.getAlpha())).toRgbString();for(var P=0;P<d;P++)u[(p=le[P])[0]]=f,u[p[1]]=x}catch(w){for(w instanceof Error?console.warn("[".concat(w.message,']: Received "').concat(typeof c,'" with value, ').concat(JSON.stringify(c))):console.warn("".concat(JSON.stringify(c),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),x=gt,f=(v=S(gt)).setAlpha(qe(v.getAlpha())).toRgbString(),P=0;P<le.length;P++)u[(p=le[P])[0]]=f,u[p[1]]=x}return u}((e=t?.color)!==null&&e!==void 0?e:""),l=t.dense?"0.45em":"";return F.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:L(L(L(L(L({},i&&{fontSize:i}),a&&{"--rli-animation-duration":a}),o&&{"--rli-animation-function":o}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},F.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},F.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:L({},l&&{borderWidth:l})}),F.createElement(De,{className:"OP-annulus-sector-text",text:t?.text,textColor:t?.textColor})))},Xf=function(t){var e=Object(t).variant,n=e===void 0?"disc":e;return n==="dotted"?F.createElement(Wf,L({},t)):n==="spokes"?F.createElement(qf,L({},t)):n==="disc"?F.createElement(Hf,L({},t)):n==="split-disc"?F.createElement(Yf,L({},t)):n==="track-disc"?F.createElement(Gf,L({},t)):null};G(`.foursquare-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--four-square-phase".concat(e+1,"-color")});G(`.mosaic-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--mosaic-phase".concat(e+1,"-color")});G(`.riple-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--riple-phase".concat(e+1,"-color")});G(`.pulsate-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--TD-pulsate-phase".concat(e+1,"-color")});G(`.brick-stack-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--TD-brick-stack-phase".concat(e+1,"-color")});G(`.bob-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--TD-bob-phase".concat(e+1,"-color")});G(`.bounce-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--TD-bounce-phase".concat(e+1,"-color")});G(`.blink-blur-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--shape-phase".concat(e+1,"-color")});G(`.trophy-spin-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--trophySpin-phase".concat(e+1,"-color")});G(`.slab-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--slab-phase".concat(e+1,"-color")});G(`.lifeline-rli-bounding-box {
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
}`);Array.from({length:4},function(t,e){return"--life-line-phase".concat(e+1,"-color")});const Zf=()=>b.jsx("div",{className:"w-screen justify-center",children:b.jsxs("div",{className:"p-10 w-3/4 min-h-screen bg-white flex flex-col items-center justify-center",children:[b.jsx(fn,{text:"My Resume",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight p-10"}),b.jsx(y.Suspense,{fallback:b.jsx(Xf,{variant:"disc",color:"#a9a9a9",size:"medium"}),children:b.jsx("iframe",{src:"/my_website//Resume.pdf",title:"Resume PDF",className:"w-full max-w-5xl h-[90vh] border rounded-lg shadow-lg"})}),b.jsx("a",{href:"/my_website//Resume.pdf",download:!0,className:"mt-6 text-blue-600 hover:underline text-lg",children:"Download PDF"})]})}),Tt="bg-white/80 rounded-xl shadow-lg p-8 mb-8 w-full max-w-3xl flex flex-col items-center",St="text-3xl md:text-4xl font-bold mb-4 text-gray-900",Ct="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed",Ut="list-disc pl-6 text-gray-700 mb-4",jt="my-6 rounded-lg shadow-md border border-gray-200 w-full max-w-md",Jf=()=>b.jsxs("div",{className:"min-h-screen w-full bg-slate-200 from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center py-12 px-4",children:[b.jsx("div",{className:"flex flex-row items-center justify-center mb-12 w-full",children:b.jsx(fn,{text:"Kaggle Competition: Predicting Client Loan Default Risk",gradientColors:["#1F1C2C","#928DAB","#1F1C2C"],className:"text-5xl font-extrabold tracking-tight drop-shadow-lg"})}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Problem Statement"}),b.jsxs("p",{className:Ct,children:["The goal of the competition, hosted by Home Credit on Kaggle, was to accurately predict which clients are likely to default on their loans. Achieving reliable, stable predictions over time is crucial for financial institutions to manage risk effectively and ensure fair access to credit for individuals with limited or no credit history.",b.jsx("br",{}),b.jsx("br",{}),"Financial institutions face significant challenges when evaluating the risk of lending to customers without extensive financial histories. Traditional credit assessment methods can unfairly deny credit to individuals capable of repaying loans. Thus, creating predictive models that balance performance and stability over time can significantly impact financial inclusion and economic opportunities for many."]})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Our Approach and Results"}),b.jsx("p",{className:Ct,children:"Our solution aimed not only for high predictive performance but also emphasized long-term stability in predictions, critical for real-world implementation."}),b.jsxs("div",{className:"w-full flex flex-col items-center",children:[b.jsx("h4",{className:"text-xl font-semibold mb-2 text-gray-800",children:"Model Performance Metrics:"}),b.jsx("img",{src:"/my_website/kaggleImages/AUC.png",alt:"AUC Curve",className:jt}),b.jsx("ul",{className:Ut,children:b.jsxs("li",{children:[b.jsx("span",{className:"font-semibold",children:"AUC (Area Under Curve):"})," Achieved an impressive ~0.90 AUC, indicating excellent predictive capability."]})}),b.jsx("img",{src:"/my_website/kaggleImages/Learning_Curve.png",alt:"Learning Curve",className:jt}),b.jsx("ul",{className:Ut,children:b.jsxs("li",{children:[b.jsx("span",{className:"font-semibold",children:"Log Loss:"})," Reduced effectively over iterations, converging to around 0.38, demonstrating robust probability calibration and confidence in predictions."]})}),b.jsx("img",{src:"/my_website/kaggleImages/FPR-FNR.png",alt:"FPR-FNR Curve",className:jt}),b.jsx("ul",{className:Ut,children:b.jsxs("li",{children:[b.jsx("span",{className:"font-semibold",children:"FPR-FNR Curve:"})," The False Positive Rate (FPR) and False Negative Rate (FNR) curves demonstrated a balanced trade-off, enabling informed threshold adjustments to suit different operational requirements."]})})]})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Feature Importance Analysis (SHAP values)"}),b.jsx("img",{src:"/my_website/kaggleImages/Shap_Bar.png",alt:"SHAP Bar",className:jt}),b.jsx("img",{src:"/my_website/kaggleImages/Shap_Features.png",alt:"SHAP Features",className:jt}),b.jsx("p",{className:Ct,children:"Our SHAP analysis revealed key features influencing loan defaults:"}),b.jsx("ul",{className:Ut,children:b.jsxs("li",{children:[b.jsx("span",{className:"font-semibold",children:"High Impact Features:"})," Loan amount (credamount_770A), annuity payments (annuity_780A), mobile phone account counts (mobilephncnt_593L), and disbursed credit amount (disbursedcredamount_1113A). These significantly affected predictions, with larger loan and annuity amounts strongly correlating with higher default risk."]})})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Confusion Matrix"}),b.jsx("img",{src:"/my_website/kaggleImages/Confusion_Matrix.png",alt:"Confusion Matrix",className:jt}),b.jsxs("ul",{className:Ut,children:[b.jsx("li",{children:"True Positives: 176,366"}),b.jsx("li",{children:"True Negatives: 167,341"}),b.jsx("li",{children:"False Positives: 36,480"}),b.jsx("li",{children:"False Negatives: 26,446"})]}),b.jsx("p",{className:Ct,children:"The confusion matrix highlighted a strong ability to identify actual default cases correctly while maintaining a manageable level of incorrect predictions."})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Class Imbalance Handling"}),b.jsx("img",{src:"/my_website/kaggleImages/pos_neg_ration.png",alt:"Class Imbalance",className:jt}),b.jsx("p",{className:Ct,children:"Our dataset exhibited a significant class imbalance (~96.86% non-default, 3.14% default). Effective strategies were implemented to manage this imbalance, resulting in robust model performance despite skewed class distribution."})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Stability Over Time"}),b.jsx("p",{className:Ct,children:"We placed substantial emphasis on model stability, an essential factor evaluated explicitly in this competition. Our predictions maintained consistency across evaluation periods, minimizing performance drop-offs and achieving stable metrics, critical for deployment in real-world scenarios."})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Learnings and Insights"}),b.jsx("p",{className:Ct,children:"Participating in this competition provided valuable insights into:"}),b.jsxs("ul",{className:Ut,children:[b.jsx("li",{children:"Advanced methods for ensuring long-term prediction stability."}),b.jsx("li",{children:"Techniques for effectively handling class imbalance, crucial for real-world credit scoring."}),b.jsx("li",{children:"Importance of interpretability (e.g., SHAP values) in explaining model predictions to stakeholders, improving transparency and trust."}),b.jsx("li",{children:"Practical applications of balancing model precision, recall, and stability to maximize operational performance in finance."})]})]}),b.jsxs("div",{className:Tt,children:[b.jsx("h2",{className:St,children:"Final Thoughts"}),b.jsx("p",{className:Ct,children:"This competition underscored the critical role that stable and interpretable predictive models play in financial decision-making, especially for underserved populations. Our strong predictive performance, coupled with reliable stability, demonstrated our model's readiness for real-world application, helping to improve financial accessibility and decision-making reliability for consumer finance providers."})]})]}),Qf="/my_website/".replace(/\/$/,"");function tp(){return b.jsx("div",{className:"min-h-screen w-full bg-slate-100 pt-24",children:b.jsxs(Rl,{basename:Qf,children:[b.jsx(Sf,{}),b.jsxs(sl,{children:[b.jsx(Ht,{path:"/",element:b.jsx(Pf,{})}),b.jsx(Ht,{path:"/projects",element:b.jsx(Ef,{})}),b.jsx(Ht,{path:"/gradient",element:b.jsx(Tf,{})}),b.jsx(Ht,{path:"/resume",element:b.jsx(Zf,{})}),b.jsx(Ht,{path:"/kaggle",element:b.jsx(Jf,{})})]})]})})}ReactDOM.createRoot(document.getElementById("root")).render(b.jsx(Ml,{children:b.jsx(tp,{})}));
