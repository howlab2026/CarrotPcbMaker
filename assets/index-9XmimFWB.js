var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,o)=>(o=n==null?{}:e(i(n)),c(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function A(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var j=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?A(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ee(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(j,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(j,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ee(a,u),c+=ne(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ee(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ie=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function N(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,ie)}catch(e){ie(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ae(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else N(ae.bind(null,e))}var oe={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ae,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=N,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.0`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=u(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=u(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=u(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.0`})),h=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}function m(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&m(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),A=Symbol.for(`react.portal`),j=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),ne=Symbol.for(`react.consumer`),M=Symbol.for(`react.context`),re=Symbol.for(`react.forward_ref`),ie=Symbol.for(`react.suspense`),N=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),de=Symbol.for(`react.recoverable`),fe=Symbol.iterator;function pe(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var me=Symbol.for(`react.client.reference`);function he(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case j:return`Fragment`;case te:return`Profiler`;case ee:return`StrictMode`;case ie:return`Suspense`;case N:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case A:return`Portal`;case M:return e.displayName||`Context`;case ne:return(e._context.displayName||`Context`)+`.Consumer`;case re:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var ge=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function be(e){return{current:e}}function xe(e){0>ye||(e.current=ve[ye],ve[ye]=null,ye--)}function I(e,t){ye++,ve[ye]=e.current,e.current=t}var Se=be(null),Ce=be(null),we=be(null),Te=be(null);function Ee(e,t){switch(I(we,t),I(Ce,e),I(Se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}xe(Se),I(Se,e)}function De(){xe(Se),xe(Ce),xe(we)}function Oe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,I(Te,e)),t=Se.current;var n=dp(t,e.type);t!==n&&(I(Ce,e),I(Se,n))}function ke(e){Ce.current===e&&(xe(Se),xe(Ce)),Te.current===e&&(xe(Te),sh._currentValue=_e)}var Ae,je;function Me(e){if(Ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ae=t&&t[1]||``,je=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ae+e+je}var Ne=!1;function Pe(e,t){if(!e||Ne)return``;Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Me(n):``}function Fe(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me(`Lazy`);case 13:return e.child!==t&&t!==null?Me(`Suspense Fallback`):Me(`Suspense`);case 19:return Me(`SuspenseList`);case 0:case 15:return Pe(e.type,!1);case 11:return Pe(e.type.render,!1);case 1:return Pe(e.type,!0);case 31:return Me(`Activity`);case 30:return Me(`ViewTransition`);default:return``}}function Ie(e){try{var t=``,n=null;do t+=Fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Le=Object.prototype.hasOwnProperty,Re=t.unstable_scheduleCallback,ze=t.unstable_cancelCallback,Be=t.unstable_shouldYield,Ve=t.unstable_requestPaint,He=t.unstable_now,Ue=t.unstable_getCurrentPriorityLevel,We=t.unstable_ImmediatePriority,Ge=t.unstable_UserBlockingPriority,Ke=t.unstable_NormalPriority,qe=t.unstable_LowPriority,Je=t.unstable_IdlePriority,Ye=t.log,Xe=t.unstable_setDisableYieldValue,Ze=null,Qe=null;function $e(e){if(typeof Ye==`function`&&Xe(e),Qe&&typeof Qe.setStrictMode==`function`)try{Qe.setStrictMode(Ze,e)}catch{}}var et=Math.clz32?Math.clz32:rt,tt=Math.log,nt=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(tt(e)/nt|0)|0}var it=256,at=262144,ot=4194304;function st(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=st(n))):i=st(o):i=st(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=st(n))):i=st(o)):i=st(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function lt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-et(n),i=1<<r;t|=e[r],n&=~i}return t}function dt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=ot;return ot<<=1,!(ot&62914560)&&(ot=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ht(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-et(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&gt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function gt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-et(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function vt(e,t){var n=t&-t;return n=n&42?1:yt(n),(n&(e.suspendedLanes|t))===0?n:0}function yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function xt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function St(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Ct=Math.random().toString(36).slice(2),wt=`__reactFiber$`+Ct,Tt=`__reactProps$`+Ct,Et=`__reactContainer$`+Ct,Dt=`__reactEvents$`+Ct,Ot=`__reactListeners$`+Ct,kt=`__reactHandles$`+Ct,At=`__reactResources$`+Ct,jt=`__reactMarker$`+Ct,Mt=`__reactLoad$`+Ct;function Nt(e){delete e[wt],delete e[Tt],delete e[Ot],delete e[kt]}function Pt(e){var t;if(t=e[wt])return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[wt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ft(e){if(e=e[wt]||e[Et]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function It(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Lt(e){var t=e[At];return t||=e[At]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Rt(e){e[jt]=!0}function zt(e){e[Mt]=void 0}var Bt=new Set,Vt={};function Ht(e,t){Ut(e,t),Ut(e+`Capture`,t)}function Ut(e,t){for(Vt[e]=t,e=0;e<t.length;e++)Bt.add(t[e])}var Wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Gt={},Kt={};function qt(e){return Le.call(Kt,e)?!0:Le.call(Gt,e)?!1:Wt.test(e)?Kt[e]=!0:(Gt[e]=!0,!1)}var L=!1;function Jt(){var e=L;return L=!1,e}function Yt(e,t,n){if(qt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Xt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Qt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function $t(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function en(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tn(e){if(!e._valueTracker){var t=$t(e)?`checked`:`value`;e._valueTracker=en(e,t,``+e[t])}}function nn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=$t(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var rn=/[\n"\\]/g;function an(e){return e.replace(rn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function on(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Qt(t)):e.value!==``+Qt(t)&&(e.value=``+Qt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):cn(e,Qt(n)):o===`number`&&e.value==t?cn(e,Qt(e.value)):cn(e,Qt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Qt(s):e.removeAttribute(`name`)}function sn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){tn(e);return}n=n==null?``:``+Qt(n),t=t==null?n:``+Qt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),tn(e)}function cn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function un(e,t,n){if(t!=null&&(t=``+Qt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Qt(n)}function dn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ge(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Qt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),tn(e)}function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function mn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||pn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function hn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,L=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(mn(e,a,r),L=!0)}else for(var o in t)t.hasOwnProperty(o)&&mn(e,o,t[o])}function gn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var _n=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),vn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yn(e){return vn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function bn(){}var xn=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,wn=null;function Tn(e){var t=Ft(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(on(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+an(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Tt]||null;if(!a)throw Error(i(90));on(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&nn(r)}break a;case`textarea`:un(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}}}var En=!1;function Dn(e,t,n){if(En)return e(t,n);En=!0;try{return e(t)}finally{if(En=!1,(Cn!==null||wn!==null)&&(zd(),Cn&&(t=Cn,e=wn,wn=Cn=null,Tn(t),e)))for(t=0;t<e.length;t++)Tn(e[t])}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,An=!1;if(kn)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){An=!0}}),window.addEventListener(`test`,jn,jn),window.removeEventListener(`test`,jn,jn)}catch{An=!1}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function Rn(){return!1}function zn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:Rn,this.isPropagationStopped=Rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vn=zn(Bn),Hn=D({},Bn,{view:0,detail:0}),Un=zn(Hn),Wn,Gn,Kn,qn=D({},Hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ir,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Kn&&(Kn&&e.type===`mousemove`?(Wn=e.screenX-Kn.screenX,Gn=e.screenY-Kn.screenY):Gn=Wn=0,Kn=e),Wn)},movementY:function(e){return`movementY`in e?e.movementY:Gn}}),Jn=zn(qn),Yn=zn(D({},qn,{dataTransfer:0})),Xn=zn(D({},Hn,{relatedTarget:0})),Zn=zn(D({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0})),Qn=zn(D({},Bn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),$n=zn(D({},Bn,{data:0})),er={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},tr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},nr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function rr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nr[e])?!!t[e]:!1}function ir(){return rr}var ar=zn(D({},Hn,{key:function(e){if(e.key){var t=er[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?tr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ir,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),or=zn(D({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),sr=zn(D({},Bn,{submitter:0})),cr=zn(D({},Hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ir})),lr=zn(D({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0})),ur=zn(D({},qn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),dr=zn(D({},Bn,{newState:0,oldState:0,source:0})),fr=[9,13,27,32],pr=kn&&`CompositionEvent`in window,mr=null;kn&&`documentMode`in document&&(mr=document.documentMode);var hr=kn&&`TextEvent`in window&&!mr,gr=kn&&(!pr||mr&&8<mr&&11>=mr),_r=` `,vr=!1;function yr(e,t){switch(e){case`keyup`:return fr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function br(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var xr=!1;function Sr(e,t){switch(e){case`compositionend`:return br(t);case`keypress`:return t.which===32?(vr=!0,_r):null;case`textInput`:return e=t.data,e===_r&&vr?null:e;default:return null}}function Cr(e,t){if(xr)return e===`compositionend`||!pr&&yr(e,t)?(e=Fn(),Pn=Nn=Mn=null,xr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return gr&&t.locale!==`ko`?null:t.data;default:return null}}var wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!wr[e.type]:t===`textarea`}function Er(e,t,n,r){Cn?wn?wn.push(r):wn=[r]:Cn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Vn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Or=null;function kr(e){Vf(e,0)}function Ar(e){if(nn(It(e)))return e}function jr(e,t){if(e===`change`)return t}var Mr=!1;if(kn){var Nr;if(kn){var Pr=`oninput`in document;if(!Pr){var Fr=document.createElement(`div`);Fr.setAttribute(`oninput`,`return;`),Pr=typeof Fr.oninput==`function`}Nr=Pr}else Nr=!1;Mr=Nr&&(!document.documentMode||9<document.documentMode)}function Ir(){Dr&&(Dr.detachEvent(`onpropertychange`,Lr),Or=Dr=null)}function Lr(e){if(e.propertyName===`value`&&Ar(Or)){var t=[];Er(t,Or,e,Sn(e)),Dn(kr,t)}}function Rr(e,t,n){e===`focusin`?(Ir(),Dr=t,Or=n,Dr.attachEvent(`onpropertychange`,Lr)):e===`focusout`&&Ir()}function zr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Ar(Or)}function Br(e,t){if(e===`click`)return Ar(t)}function Vr(e,t){if(e===`input`||e===`change`)return Ar(t)}function Hr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ur=typeof Object.is==`function`?Object.is:Hr;function Wr(e,t){if(Ur(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Le.call(t,i)||!Ur(e[i],t[i]))return!1}return!0}function Gr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qr(e,t){var n=Kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Kr(n)}}function Jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Gr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Gr(e.document)}return t}function Xr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Zr=kn&&`documentMode`in document&&11>=document.documentMode,Qr=null,$r=null,ei=null,ti=!1;function ni(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||Qr==null||Qr!==Gr(r)||(r=Qr,`selectionStart`in r&&Xr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ei&&Wr(ei,r)||(ei=r,r=Jf($r,`onSelect`),0<r.length&&(t=new Vn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Qr)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ii={animationend:ri(`Animation`,`AnimationEnd`),animationiteration:ri(`Animation`,`AnimationIteration`),animationstart:ri(`Animation`,`AnimationStart`),transitionrun:ri(`Transition`,`TransitionRun`),transitionstart:ri(`Transition`,`TransitionStart`),transitioncancel:ri(`Transition`,`TransitionCancel`),transitionend:ri(`Transition`,`TransitionEnd`)},ai={},oi={};kn&&(oi=document.createElement(`div`).style,`AnimationEvent`in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),`TransitionEvent`in window||delete ii.transitionend.transition);function si(e){if(ai[e])return ai[e];if(!ii[e])return e;var t=ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in oi)return ai[e]=t[n];return e}var ci=si(`animationend`),li=si(`animationiteration`),ui=si(`animationstart`),di=si(`transitionrun`),fi=si(`transitionstart`),pi=si(`transitioncancel`),mi=si(`transitionend`),hi=new Map,gi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);gi.push(`scrollEnd`);function _i(e,t){hi.set(e,t),Ht(t,[e])}var vi=0;function yi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=vi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function bi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function xi(e,t){return e=bi(e),t=bi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Si=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ci=[],wi=0,Ti=0;function Ei(){for(var e=wi,t=Ti=wi=0;t<e;){var n=Ci[t];Ci[t++]=null;var r=Ci[t];Ci[t++]=null;var i=Ci[t];Ci[t++]=null;var a=Ci[t];if(Ci[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ai(n,i,a)}}function Di(e,t,n,r){Ci[wi++]=e,Ci[wi++]=t,Ci[wi++]=n,Ci[wi++]=r,Ti|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Oi(e,t,n,r){return Di(e,t,n,r),ji(e)}function ki(e,t){return Di(e,null,null,t),ji(e)}function Ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-et(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ji(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Mi={};function Ni(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pi(e,t,n,r){return new Ni(e,t,n,r)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,t){var n=e.alternate;return n===null?(n=Pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Li(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function R(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Fi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Pi(31,n,t,a),e.elementType=se,e.lanes=o,e;case j:return Ri(n.children,a,o,t);case ee:s=8,a|=24;break;case te:return e=Pi(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case ie:return e=Pi(13,n,t,a),e.elementType=ie,e.lanes=o,e;case N:return e=Pi(19,n,t,a),e.elementType=N,e.lanes=o,e;case ce:case ue:return e=a|32,e=Pi(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case M:s=10;break a;case ne:s=9;break a;case re:s=11;break a;case ae:s=14;break a;case oe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ri(e,t,n,r){return e=Pi(7,e,r,t),e.lanes=n,e}function zi(e,t,n){return e=Pi(6,e,null,t),e.lanes=n,e}function Bi(e){var t=Pi(18,null,null,0);return t.stateNode=e,t}function Vi(e,t,n){return t=Pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hi=new WeakMap;function Ui(e,t){if(typeof e==`object`&&e){var n=Hi.get(e);return n===void 0?(t={value:e,source:t,stack:Ie(t)},Hi.set(e,t),t):n}return{value:e,source:t,stack:Ie(t)}}var Wi=[],Gi=0,Ki=null,qi=0,Ji=[],Yi=0,Xi=null,Zi=1,Qi=``;function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ki,Ki=e,qi=t}function ea(e,t,n){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Xi=e;var r=Zi;e=Qi;var i=32-et(r)-1;r&=~(1<<i),n+=1;var a=32-et(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zi=1<<32-et(t)+i|n<<i|r,Qi=a+e}else Zi=1<<a|n<<i|r,Qi=e}function ta(e){e.return!==null&&($i(e,1),ea(e,1,0))}function na(e){for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null;for(;e===Xi;)Xi=Ji[--Yi],Ji[Yi]=null,Qi=Ji[--Yi],Ji[Yi]=null,Zi=Ji[--Yi],Ji[Yi]=null}function ra(e,t){Ji[Yi++]=Zi,Ji[Yi++]=Qi,Ji[Yi++]=Xi,Zi=t.id,Qi=t.overflow,Xi=e}var ia=null,z=null,B=!1,aa=null,oa=!1,sa=Error(i(519));function ca(e){throw ma(Ui(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),sa}function la(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[wt]=e,t[Tt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),sn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||ca(e,!0)}function ua(e){for(ia=e.return;ia;)switch(ia.tag){case 5:case 31:case 13:oa=!1;return;case 27:case 3:oa=!0;return;default:ia=ia.return}}function da(e){if(e!==ia)return!1;if(!B)return ua(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&z&&ca(e),ua(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));z=dm(e)}else t===27?(t=z,Sp(e.type)?(e=um,um=null,z=e):z=t):z=ia?lm(e.stateNode.nextSibling):null;return!0}function fa(){z=ia=null,B=!1}function pa(){var e=aa;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),aa=null),e}function ma(e){aa===null?aa=[e]:aa.push(e)}var ha=be(null),ga=null,_a=null;function va(e,t,n){I(ha,t._currentValue),t._currentValue=n}function ya(e){e._currentValue=ha.current,xe(ha)}function ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function xa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ba(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ba(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ba(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Sa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ur(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Te.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&xa(t,e,n,r),t.flags|=262144,e!==null}function Ca(e){for(e=e.firstContext;e!==null;){if(!Ur(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wa(e){ga=e,_a=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ta(e){return V(ga,e)}function Ea(e,t){return ga===null&&wa(e),V(e,t)}function V(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},_a===null){if(e===null)throw Error(i(308));_a=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else _a=_a.next=t;return n}var Da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Oa=t.unstable_scheduleCallback,ka=t.unstable_NormalPriority,Aa={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ja(){return{controller:new Da,data:new Map,refCount:0}}function Ma(e){e.refCount--,e.refCount===0&&Oa(ka,function(){e.controller.abort()})}function Na(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Pa=null;function Fa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ia=null,La=0,Ra=0,za=null;function Ba(e,t){if(Ia===null){var n=Ia=[];La=0,Ra=Pf(),za={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return La++,t.then(Va,Va),t}function Va(){if(--La===0&&(Pa=null,Ia!==null)){za!==null&&(za.status=`fulfilled`);var e=Ia;Ia=null,Ra=0,za=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ha(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ua=P.S;P.S=function(e,t){if(hd=He(),typeof t==`object`&&t&&typeof t.then==`function`&&Ba(e,t),Pa!==null)for(var n=bf;n!==null;)Na(n,Pa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Na(r,n),r=r.next;if(Ra!==0){r=Pa,r===null&&(r=Pa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ua!==null&&Ua(e,t)};var Wa=be(null);function Ga(){var e=Wa.current;return e===null?q.pooledCache:e}function Ka(e,t){t===null?I(Wa,Wa.current):I(Wa,t.pool)}function qa(){var e=Ga();return e===null?null:{parent:Aa._currentValue,pool:e}}var Ja=Error(i(460)),Ya=Error(i(474)),Xa=Error(i(542)),Za={then:function(){}};function Qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function $a(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ro(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(bn,bn);else{if(e=q,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,ro(e),e}throw to=t,Ja}}function eo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(to=e,Ja):e}}var to=null;function no(){if(to===null)throw Error(i(459));var e=to;return to=null,e}function ro(e){if(e===Ja||e===Xa)throw Error(i(483))}var io=null,ao=0;function oo(e){var t=ao;return ao+=1,io===null&&(io=[]),$a(io,e,t)}function so(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function co(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function lo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ii(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===j?(e=d(e,t,n.props.children,r,n.key),so(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&eo(i)===t.type)?(t=a(t,n.props),so(t,n),t.return=e,t):(t=R(n.type,n.key,n.props,null,e.mode,r),so(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Vi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ri(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=zi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=R(t.type,t.key,t.props,null,e.mode,n),so(n,t),n.return=e,n;case A:return t=Vi(t,e.mode,n),t.return=e,t;case oe:return t=eo(t),f(e,t,n)}if(ge(t)||pe(t))return t=Ri(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,oo(t),n);if(t.$$typeof===M)return f(e,Ea(e,t),n);co(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case A:return n.key===i?u(e,t,n,r):null;case oe:return n=eo(n),p(e,t,n,r)}if(ge(n)||pe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,oo(n),r);if(n.$$typeof===M)return p(e,t,Ea(e,n),r);co(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case A:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:return r=eo(r),m(e,t,n,r,i)}if(ge(r)||pe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,oo(r),i);if(r.$$typeof===M)return m(e,t,n,Ea(t,r),i);co(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&$i(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&$i(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&$i(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&$i(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&$i(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&$i(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===j&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===j){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),so(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===oe&&eo(l)===r.type){n(e,r.sibling),c=a(r,o.props),so(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===j?(c=Ri(o.props.children,e.mode,c,o.key),so(c,o),c.return=e,e=c):(c=R(o.type,o.key,o.props,null,e.mode,c),so(c,o),c.return=e,e=c)}return s(e);case A:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Vi(o,e.mode,c),c.return=e,e=c}return s(e);case oe:return o=eo(o),_(e,r,o,c)}if(ge(o))return h(e,r,o,c);if(pe(o)){if(l=pe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,oo(o),c);if(o.$$typeof===M)return _(e,r,Ea(e,o),c);co(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=zi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ao=0;var i=_(e,t,n,r);return io=null,i}catch(t){if(t===Ja||t===Xa)throw t;var a=Pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var uo=lo(!0),fo=lo(!1),po=!1;function mo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ho(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function go(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _o(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ji(e),Ai(e,null,n),t}return Di(e,r,t,n),ji(e)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}function yo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bo=!1;function xo(){if(bo){var e=za;if(e!==null)throw e}}function So(e,t,n,r){bo=!1;var i=e.updateQueue;po=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===Ra&&(bo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:po=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function Co(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function wo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Co(n[e],t)}var To=be(null),Eo=be(0);function Do(e,t){e=id,I(Eo,e),I(To,t),id=e|t.baseLanes}function Oo(){I(Eo,id),I(To,To.current)}function ko(){id=Eo.current,xe(To),xe(Eo)}var Ao=be(null),jo=null;function Mo(e){var t=e.alternate;I(Lo,Lo.current&1),I(Ao,e),jo===null&&(t===null||To.current!==null||t.memoizedState!==null)&&(jo=e)}function No(e){I(Lo,Lo.current),I(Ao,e),jo===null&&(jo=e)}function Po(e){e.tag===22?(I(Lo,Lo.current),I(Ao,e),jo===null&&(jo=e)):Fo()}function Fo(){I(Lo,Lo.current),I(Ao,Ao.current)}function Io(e){xe(Ao),jo===e&&(jo=null),xe(Lo)}var Lo=be(0);function Ro(e,t){I(Ao,Ao.current),I(Lo,t)}function zo(e){xe(Lo),xe(Ao),jo===e&&(jo=null)}function Bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vo=0,H=null,U=null,Ho=null,Uo=!1,Wo=!1,Go=!1,Ko=0,qo=0,Jo=null,Yo=0;function Xo(){throw Error(i(321))}function Zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ur(e[n],t[n]))return!1;return!0}function Qo(e,t,n,r,i,a){return Vo=a,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?hc:gc,Go=!1,a=n(r,i),Go=!1,Wo&&(a=es(t,n,r,i)),$o(e),a}function $o(e){P.H=mc;var t=U!==null&&U.next!==null;if(Vo=0,Ho=U=H=null,Uo=!1,qo=0,Jo=null,t)throw Error(i(300));e===null||Nc||(e=e.dependencies,e!==null&&Ca(e)&&(Nc=!0))}function es(e,t,n,r){H=e;var a=0;do{if(Wo&&(Jo=null),qo=0,Wo=!1,25<=a)throw Error(i(301));if(a+=1,Ho=U=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=_c,o=t(n,r)}while(Wo);return o}function ts(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?cs(t):t,e=e.useState()[0],(U===null?null:U.memoizedState)!==e&&(H.flags|=1024),t}function ns(){var e=Ko!==0;return Ko=0,e}function rs(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function is(e){if(Uo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Uo=!1}Vo=0,Ho=U=H=null,Wo=!1,qo=Ko=0,Jo=null}function as(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e,Ho}function os(){if(U===null){var e=H.alternate;e=e===null?null:e.memoizedState}else e=U.next;var t=Ho===null?H.memoizedState:Ho.next;if(t!==null)Ho=t,U=e;else{if(e===null)throw H.alternate===null?Error(i(467)):Error(i(310));U=e,e={memoizedState:U.memoizedState,baseState:U.baseState,baseQueue:U.baseQueue,queue:U.queue,next:null},Ho===null?H.memoizedState=Ho=e:Ho=Ho.next=e}return Ho}function ss(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function cs(e){var t=qo;return qo+=1,Jo===null&&(Jo=[]),e=$a(Jo,e,t),t=H,(Ho===null?t.memoizedState:Ho.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?hc:gc),e}function ls(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return cs(e);if(e.$$typeof===de)return;if(e.$$typeof===M)return Ta(e)}throw Error(i(438,String(e)))}function us(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=H.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ss(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function ds(e,t){return typeof t==`function`?t(e):t}function fs(e){return ps(os(),U,e)}function ps(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Vo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ra&&(d=!0);else if((Vo&p)===p){u=u.next,p===Ra&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,H.lanes|=p,od|=p;f=u.action,Go&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,H.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ur(o,e.memoizedState)&&(Nc=!0,d&&(n=za,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ms(e){var t=os(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ur(o,t.memoizedState)||(Nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hs(e,t,n){var r=H,a=os(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ur((U||a).memoizedState,n);if(s&&(a.memoizedState=n,Nc=!0),a=a.queue,Bs(vs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ho!==null&&!!(Ho.memoizedState.tag&1),Fs(e?9:8,{destroy:void 0},_s.bind(null,r,a,n,t),null),e){if(r.flags|=2048,q===null)throw Error(i(349));o||Vo&127||gs(r,t,n)}return n}function gs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=ss(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _s(e,t,n,r){t.value=n,t.getSnapshot=r,ys(t)&&bs(e)}function vs(e,t,n){return n(function(){ys(t)&&bs(e)})}function ys(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ur(e,n)}catch{return!0}}function bs(e){var t=ki(e,2);t!==null&&Pd(t,e,2)}function xs(e){var t=as();if(typeof e==`function`){var n=e;if(e=n(),Go){$e(!0);try{n()}finally{$e(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:e},t}function Ss(e,t,n,r){return e.baseState=n,ps(e,U,typeof r==`function`?r:ds)}function Cs(e,t,n,r,a){if(dc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ws(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ws(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};o.types=a===null?null:a.types,P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Ts(e,t,s)}catch(n){Ds(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Ts(e,t,a)}catch(n){Ds(e,t,n)}}function Ts(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Es(e,t,n)},function(n){return Ds(e,t,n)}):Es(e,t,n)}function Es(e,t,n){t.status=`fulfilled`,t.value=n,Os(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ws(e,n)))}function Ds(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Os(t),t=t.next;while(t!==r)}e.action=null}function Os(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ks(e,t){return t}function As(e,t){if(B){var n=q.formState;if(n!==null){a:{var r=H;if(B){if(z){b:{for(var i=z,a=oa;i.nodeType!==8;){if(!a){i=null;break b}if(i=lm(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){z=lm(i.nextSibling),r=i.data===`F!`;break a}}ca(r)}r=!1}r&&(t=n[0])}}return n=as(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:t},n.queue=r,n=cc.bind(null,H,r),r.dispatch=n,r=xs(!1),a=uc.bind(null,H,!1,r.queue),r=as(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Cs.bind(null,H,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function js(e){return Ms(os(),U,e)}function Ms(e,t,n){if(t=ps(e,t,ks)[0],e=fs(ds)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=cs(t)}catch(e){throw e===Ja?Xa:e}else r=t;t=os();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Fs(9,{destroy:void 0},Ns.bind(null,i,n),null)),[r,a,e]}function Ns(e,t){e.action=t}function Ps(e){var t=os(),n=U;if(n!==null)return Ms(t,n,e);os(),t=t.memoizedState,n=os();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=H.updateQueue,t===null&&(t=ss(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Is(){return os().memoizedState}function Ls(e,t,n,r){var i=as();H.flags|=e,i.memoizedState=Fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Rs(e,t,n,r){var i=os();r=r===void 0?null:r;var a=i.memoizedState.inst;U!==null&&r!==null&&Zo(r,U.memoizedState.deps)?i.memoizedState=Fs(t,a,n,r):(H.flags|=e,i.memoizedState=Fs(1|t,a,n,r))}function zs(e,t){Ls(8390656,8,e,t)}function Bs(e,t){Rs(2048,8,e,t)}function Vs(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=ss(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Hs(e){var t=os().memoizedState;return Vs({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Us(e,t){return Rs(4,2,e,t)}function Ws(e,t){return Rs(4,4,e,t)}function Gs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ks(e,t,n){n=n==null?null:n.concat([e]),Rs(4,4,Gs.bind(null,t,e),n)}function qs(){}function Js(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ys(e,t){var n=os();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Zo(t,r[1]))return r[0];if(r=e(),Go){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r}function Xs(e,t,n){return n===void 0||Vo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),H.lanes|=e,od|=e,n)}function Zs(e,t,n,r){return Ur(n,t)?n:To.current===null?!(Vo&106)||Vo&1073741824&&!(Y&261930)?(Nc=!0,e.memoizedState=n):(e=Md(),H.lanes|=e,od|=e,t):(e=Xs(e,n,r),Ur(e,t)||(Nc=!0),e)}function Qs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};s.types=o===null?null:o.types,P.T=s,uc(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?lc(e,t,Ha(c,r),jd(e)):lc(e,t,r,jd(e))}catch(n){lc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function $s(){}function ec(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=tc(e).queue;Qs(e,a,t,_e,n===null?$s:function(){return nc(e),n(r)})}function tc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:_e},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ds,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function nc(e){var t=tc(e);t.next===null&&(t=e.alternate.memoizedState),lc(e,t.next.queue,{},jd())}function rc(){return Ta(sh)}function ic(){return os().memoizedState}function ac(){return os().memoizedState}function oc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=go(n);var r=_o(t,e,n);r!==null&&(Pd(r,t,n),vo(r,t,n)),t={cache:ja()},e.payload=t;return}t=t.return}}function sc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dc(e)?fc(t,n):(n=Oi(e,t,n,r),n!==null&&(Pd(n,e,r),pc(n,t,r)))}function cc(e,t,n){lc(e,t,n,jd())}function lc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dc(e))fc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ur(s,o))return Di(e,t,i,0),q===null&&Ei(),!1}catch{}if(n=Oi(e,t,i,r),n!==null)return Pd(n,e,r),pc(n,t,r),!0}return!1}function uc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},dc(e)){if(t)throw Error(i(479))}else t=Oi(e,n,r,2),t!==null&&Pd(t,e,2)}function dc(e){var t=e.alternate;return e===H||t!==null&&t===H}function fc(e,t){Wo=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}var mc={readContext:Ta,use:ls,useCallback:Xo,useContext:Xo,useEffect:Xo,useImperativeHandle:Xo,useLayoutEffect:Xo,useInsertionEffect:Xo,useMemo:Xo,useReducer:Xo,useRef:Xo,useState:Xo,useDebugValue:Xo,useDeferredValue:Xo,useTransition:Xo,useSyncExternalStore:Xo,useId:Xo,useHostTransitionStatus:Xo,useFormState:Xo,useActionState:Xo,useOptimistic:Xo,useMemoCache:Xo,useCacheRefresh:Xo,useEffectEvent:Xo},hc={readContext:Ta,use:ls,useCallback:function(e,t){return as().memoizedState=[e,t===void 0?null:t],e},useContext:Ta,useEffect:zs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ls(4194308,4,Gs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){Ls(4,2,e,t)},useMemo:function(e,t){var n=as();t=t===void 0?null:t;var r=e();if(Go){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=as();if(n!==void 0){var i=n(t);if(Go){$e(!0);try{n(t)}finally{$e(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=sc.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=as();return e={current:e},t.memoizedState=e},useState:function(e){e=xs(e);var t=e.queue,n=cc.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:qs,useDeferredValue:function(e,t){return Xs(as(),e,t)},useTransition:function(){var e=xs(!1);return e=Qs.bind(null,H,e.queue,!0,!1),as().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=H,a=as();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),q===null)throw Error(i(349));Y&127||gs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,zs(vs.bind(null,r,o,e),[e]),r.flags|=2048,Fs(9,{destroy:void 0},_s.bind(null,r,o,n,t),null),n},useId:function(){var e=as(),t=q.identifierPrefix;if(B){var n=Qi,r=Zi;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ko++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Yo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:rc,useFormState:As,useActionState:As,useOptimistic:function(e){var t=as();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=uc.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:us,useCacheRefresh:function(){return as().memoizedState=oc.bind(null,H)},useEffectEvent:function(e){var t=as(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},gc={readContext:Ta,use:ls,useCallback:Js,useContext:Ta,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:fs,useRef:Is,useState:function(){return fs(ds)},useDebugValue:qs,useDeferredValue:function(e,t){return Zs(os(),U.memoizedState,e,t)},useTransition:function(){var e=fs(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:js,useActionState:js,useOptimistic:function(e,t){return Ss(os(),U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs},_c={readContext:Ta,use:ls,useCallback:Js,useContext:Ta,useEffect:Bs,useImperativeHandle:Ks,useInsertionEffect:Us,useLayoutEffect:Ws,useMemo:Ys,useReducer:ms,useRef:Is,useState:function(){return ms(ds)},useDebugValue:qs,useDeferredValue:function(e,t){var n=os();return U===null?Xs(n,e,t):Zs(n,U.memoizedState,e,t)},useTransition:function(){var e=ms(ds)[0],t=os().memoizedState;return[typeof e==`boolean`?e:cs(e),t]},useSyncExternalStore:hs,useId:ic,useHostTransitionStatus:rc,useFormState:Ps,useActionState:Ps,useOptimistic:function(e,t){var n=os();return U===null?(n.baseState=e,[e,n.queue.dispatch]):Ss(n,U,e,t)},useMemoCache:us,useCacheRefresh:ac,useEffectEvent:Hs};function vc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=go(r);i.payload=t,n!=null&&(i.callback=n),t=_o(e,i,r),t!==null&&(Pd(t,e,r),vo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=go(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=_o(e,i,r),t!==null&&(Pd(t,e,r),vo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=go(n);r.tag=2,t!=null&&(r.callback=t),t=_o(e,r,n),t!==null&&(Pd(t,e,n),vo(t,e,n))}};function bc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,a):!0}function xc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yc.enqueueReplaceState(t,t.state,null)}function Sc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Cc(e){Si(e)}function wc(e){console.error(e)}function Tc(e){Si(e)}function Ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Oc(e,t,n){return n=go(n),n.tag=3,n.payload={element:null},n.callback=function(){Ec(e,t)},n}function kc(e){return e=go(e),e.tag=3,e}function Ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Dc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Dc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function jc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Sa(t,n,a,!0),n=Ao.current,n!==null){switch(n.tag){case 31:case 13:case 19:return jo===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Za?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Za?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(B)return t=Ao.current,t===null?(r!==sa&&(t=Error(i(423),{cause:r}),ma(Ui(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ui(r,n),a=Oc(e.stateNode,r,a),yo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&(e=Error(i(422),{cause:r}),ma(Ui(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ui(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Ui(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Oc(n.stateNode,r,e),yo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=kc(a),Ac(a,e,n,r),yo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Mc=Error(i(461)),Nc=!1;function Pc(e,t,n,r){t.child=e===null?fo(t,null,n,r):uo(t,e.child,n,r)}function Fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return wa(t),r=Qo(e,t,n,o,a,i),s=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(B&&s&&ta(t),t.flags|=1,Pc(e,t,r,i),t.child)}function Ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Fi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Lc(e,t,a,r,i)):(e=R(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ul(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Wr:n,n(o,r)&&e.ref===t.ref)return ll(e,t,i)}return t.flags|=1,e=Ii(a,r),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Wr(a,r)&&e.ref===t.ref){if(Nc=!1,t.pendingProps=r=a,ul(e,i))e.flags&131072&&(Nc=!0);else return t.lanes=e.lanes,ll(e,t,i)}}return Gc(e,t,n,r,i)}function Rc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Bc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ka(t,a===null?null:a.cachePool),a===null?Oo():Do(t,a),Po(t);else return r=t.lanes=536870912,Bc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ka(t,null),Oo(),Fo()):(Ka(t,a.cachePool),Do(t,a),Fo(),t.memoizedState=null);return Pc(e,t,i,n),t.child}function zc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Bc(e,t,n,r,i){var a=Ga();return a=a===null?null:{parent:Aa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ka(t,null),Oo(),Po(t),e!==null&&Sa(e,t,r,!0),t.childLanes=i,null}function Vc(e,t){return t=el({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Hc(e,t,n){return uo(t,e.child,null,n),e=Vc(t,t.pendingProps),e.flags|=2,Io(t),t.memoizedState=null,e}function Uc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=Vc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},zc(null,e);if(No(t),(e=z)?(e=am(e,oa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=536870912,null}return Vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(No(t),a){if(t.flags&256)t.flags&=-257,t=Hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Nc||Sa(e,t,n,!1),a=(n&e.childLanes)!==0,Nc||a){if(To.current===null){if(r=q,r!==null&&(s=vt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ki(e,s),Pd(r,e,s),Mc;Kd()}t=Hc(e,t,n)}else e=o.treeContext,z=lm(s.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=Vc(t,r),t.flags|=134221824;return t}return e=Ii(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Gc(e,t,n,r,i){return wa(t),n=Qo(e,t,n,r,void 0,i),r=ns(),e!==null&&!Nc?(rs(e,t,i),ll(e,t,i)):(B&&r&&ta(t),t.flags|=1,Pc(e,t,n,i),t.child)}function Kc(e,t,n,r,i,a){return wa(t),t.updateQueue=null,n=es(t,r,n,i),$o(e),r=ns(),e!==null&&!Nc?(rs(e,t,a),ll(e,t,a)):(B&&r&&ta(t),t.flags|=1,Pc(e,t,n,a),t.child)}function qc(e,t,n,r,i){if(wa(t),t.stateNode===null){var a=Mi,o=n.contextType;typeof o==`object`&&o&&(a=Ta(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=yc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},mo(t),o=n.contextType,a.context=typeof o==`object`&&o?Ta(o):Mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(vc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&yc.enqueueReplaceState(a,a.state,null),So(t,r,a,i),xo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Sc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Mi,typeof u==`object`&&u&&(o=Ta(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&xc(t,a,r,o),po=!1;var f=t.memoizedState;a.state=f,So(t,r,a,i),xo(),l=t.memoizedState,s||f!==l||po?(typeof d==`function`&&(vc(t,n,d,r),l=t.memoizedState),(c=po||bc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ho(e,t),o=t.memoizedProps,u=Sc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Mi,typeof l==`object`&&l&&(c=Ta(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&xc(t,a,r,c),po=!1,f=t.memoizedState,a.state=f,So(t,r,a,i),xo();var p=t.memoizedState;o!==d||f!==p||po||e!==null&&e.dependencies!==null&&Ca(e.dependencies)?(typeof s==`function`&&(vc(t,n,s,r),p=t.memoizedState),(u=po||bc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Wc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=uo(t,e.child,null,i),t.child=uo(t,null,n,i)):Pc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ll(e,t,i),e}function Jc(e,t,n,r){return fa(),t.flags|=256,Pc(e,t,n,r),t.child}var Yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xc(e){return{baseLanes:e,cachePool:qa()}}function Zc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Lo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(B){if(i?Mo(t):Fo(),(e=z)?(e=am(e,oa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi===null?null:{id:Zi,overflow:Qi},retryLane:536870912,hydrationErrors:null},n=Bi(e),n.return=t,t.child=n,ia=t,z=null)):e=null,e===null)throw ca(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Fo(),i=t.mode,a=el({mode:`hidden`,children:a},i),r=Ri(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Xc(n),r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(null,r)):(Mo(t),$c(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return nl(e,t,a,o,r,c,s,n)}return i?(Fo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ii(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ri(i,a,n,null),i.flags|=2):i=Ii(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,zc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Xc(n):(a=i.cachePool,a===null?a=qa():(s=Aa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Zc(e,o,n),t.memoizedState=Yc,zc(e.child,r)):(Mo(t),n=e.child,e=n.sibling,n=Ii(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function $c(e,t){return t=el({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function el(e,t){return e=Pi(22,e,null,t),e.lanes=0,e}function tl(e,t,n){return uo(t,e.child,null,n),e=$c(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Mo(t),t.flags&=-257,tl(e,t,c)):t.memoizedState===null?(Fo(),o=a.fallback,s=t.mode,a=el({mode:`visible`,children:a.children},s),o=Ri(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,uo(t,e.child,null,c),a=t.child,a.memoizedState=Xc(c),a.childLanes=Zc(e,r,c),t.memoizedState=Yc,zc(null,a)):(Fo(),t.child=e.child,t.flags|=128,null);if(Mo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ma({value:a,source:null,stack:null})),tl(e,t,c)}if(Nc||Sa(e,t,c,!1),r=(c&e.childLanes)!==0,Nc||r){if(To.current!==null)return tl(e,t,c);if(r=q,r!==null&&(a=vt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,ki(e,a),Pd(r,e,a),Mc;return om(o)||Kd(),tl(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,z=lm(o.nextSibling),ia=t,B=!0,aa=null,oa=!1,e!==null&&ra(t,e),t=$c(t,a.children),t.flags|=134221824,t)}function rl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ba(e.return,t,n)}function il(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Bo(n)===null&&(t=e),e=e.sibling}return t}function al(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function ol(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function sl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Lo.current;if(t.flags&128)return Ro(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ro(t,o),i===`backwards`&&e!==null?(ol(e),Pc(e,t,r,n),ol(e)):Pc(e,t,r,n),r=B?qi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rl(e,n,t);else if(e.tag===19)rl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,ol(t)),al(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Bo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,a,r);break;case`together`:al(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=il(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,a,r)}return t.child}function cl(e,t,n){var r=t.pendingProps;return va(t,t.type,r.value),Pc(e,t,r.children,n),t.child}function ll(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ii(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ii(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ul(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Ca(e)))}function dl(e,t,n){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),va(t,Aa,e.memoizedState.cache),fa();break;case 27:case 5:Oe(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,No(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Mo(t),t.flags|=128,null;r=Sa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Qc(e,t,n):(Mo(t),e=ll(e,t,n),e===null?null:e.sibling)}Mo(t);break;case 19:if(t.flags&128)return sl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return sl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ro(t,Lo.current),r)break;return null;case 22:return t.lanes=0,Rc(e,t,n,t.pendingProps);case 24:va(t,Aa,e.memoizedState.cache)}return ll(e,t,n)}function fl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Nc=!0;else{if(!ul(e,n)&&!(t.flags&128))return Nc=!1,dl(e,t,n);Nc=!!(e.flags&131072)}}else Nc=!1,B&&t.flags&1048576&&ea(t,qi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=eo(t.elementType),t.type=e,typeof e==`function`)Fi(e)?(r=Sc(e,r),t.tag=1,t=qc(null,t,e,r,n)):(t.tag=0,t=Gc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===re){t.tag=11,t=Fc(null,t,e,r,n);break a}if(a===ae){t.tag=14,t=Ic(null,t,e,r,n);break a}if(a===M){t.tag=10,t.type=e,t=cl(null,t,n);break a}}throw t=he(e)||e,Error(i(306,t,``))}}return t;case 0:return Gc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Sc(r,t.pendingProps),qc(e,t,r,a,n);case 3:a:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ho(e,t),So(t,r,null,n);var s=t.memoizedState;if(r=s.cache,va(t,Aa,r),r!==o.cache&&xa(t,[Aa],n,!0),xo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Jc(e,t,r,n);break a}if(r!==a){a=Ui(Error(i(424)),t),ma(a),t=Jc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(z=lm(e.firstChild),ia=t,B=!0,aa=null,oa=!0,n=fo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(fa(),r===a){t=ll(e,t,n);break a}Pc(e,t,r,n)}t=t.child}return t;case 26:return Wc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(t.stateNode=fp(t.type,t.pendingProps,we.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&B&&(r=t.stateNode=hm(t.type,t.pendingProps,we.current),ia=t,oa=!0,a=z,Sp(t.type)?(um=a,z=lm(r.firstChild)):z=a),Pc(e,t,t.pendingProps.children,n),Wc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=z)&&(r=rm(r,t.type,t.pendingProps,oa),r===null?a=!1:(t.stateNode=r,ia=t,z=lm(r.firstChild),oa=!1,a=!0)),a||ca(t)),Oe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Qo(e,t,ts,null,null,n),sh._currentValue=a),Wc(e,t),Pc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=z)&&(n=im(n,t.pendingProps,oa),n===null?e=!1:(t.stateNode=n,ia=t,z=null,e=!0)),e||ca(t)),null;case 13:return Qc(e,t,n);case 4:return Ee(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=uo(t,null,r,n):Pc(e,t,r,n),t.child;case 11:return Fc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Wc(e,t),Pc(e,t,r,n),t.child;case 8:return Pc(e,t,t.pendingProps.children,n),t.child;case 12:return Pc(e,t,t.pendingProps.children,n),t.child;case 10:return cl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,wa(t),a=Ta(a),r=r(a),t.flags|=1,Pc(e,t,r,n),t.child;case 14:return Ic(e,t,t.type,t.pendingProps,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 19:return sl(e,t,n);case 31:return Uc(e,t,n);case 22:return Rc(e,t,n,t.pendingProps);case 24:return wa(t),r=Ta(Aa),e===null?(a=Ga(),a===null&&(a=q,o=ja(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},mo(t),va(t,Aa,a)):((e.lanes&n)!==0&&(ho(e,t),So(t,null,null,n),xo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,va(t,Aa,r),r!==a.cache&&xa(t,[Aa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),va(t,Aa,r))),Pc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:B&&ta(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Wc(e,t),Pc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function pl(e){e.flags|=4}function ml(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw to=Za,Ya}}else e.flags&=-16777217}function hl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw to=Za,Ya}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ft(),e.lanes|=t,ud|=t)}function _l(e,t){if(!B)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function W(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vl(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(t),null;case 1:return W(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ya(Aa),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(da(t)?pl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pa())),W(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(pl(t),o===null?(W(t),ml(t,a,null,r,n)):(W(t),hl(t,o))):o?o===e.memoizedState?(W(t),t.flags&=-16777217):(pl(t),W(t),hl(t,o)):(e=e.memoizedProps,e!==r&&pl(t),W(t),ml(t,a,e,r,n)),null;case 27:if(ke(t),n=we.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),t.subtreeFlags&=-33554433,null}e=Se.current,da(t)?la(t,e):(e=hm(a,r,n),t.stateNode=e,pl(t))}return W(t),t.subtreeFlags&=-33554433,null;case 5:if(ke(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return W(t),t.subtreeFlags&=-33554433,null}if(o=Se.current,da(t))la(t,o);else{var s=lp(we.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[wt]=t,o[Tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&pl(t)}}return W(t),t.subtreeFlags&=-33554433,ml(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&pl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=we.current,da(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ia,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[wt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||ca(t,!0)}else e=lp(e).createTextNode(r),e[wt]=t,t.stateNode=e}return W(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=da(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[wt]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),e=!1}else n=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Io(t),t):(Io(t),null);if(t.flags&128)throw Error(i(558))}return W(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=da(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[wt]=t}else fa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;W(t),a=!1}else a=pa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Io(t),t):(Io(t),null)}return Io(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),gl(t,t.updateQueue),W(t),null);case 4:return De(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,W(t),null;case 10:return ya(t.type),W(t),null;case 19:if(zo(t),r=t.memoizedState,r===null)return W(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)_l(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bo(e),o!==null){for(t.flags|=128,_l(r,!1),e=o.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Li(n,e),n=n.sibling;return Ro(t,Lo.current&1|2),B&&$i(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&He()>gd&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Bo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),_l(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!B)return W(t),null}else 2*He()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,_l(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=He(),e.sibling=null,o=Lo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||B?Ro(t,o):(n=o,I(Ao,t),I(Lo,n),jo===null&&(jo=t)),B&&$i(t,r.treeForkCount),e}return W(t),null;case 22:case 23:return Io(t),ko(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(W(t),t.subtreeFlags&6&&(t.flags|=8192)):W(t),n=t.updateQueue,n!==null&&gl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&xe(Wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(Aa),W(t),null;case 25:return null;case 30:return t.flags|=33554432,W(t),null}throw Error(i(156,t.tag))}function yl(e,t){switch(na(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(Aa),De(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 31:if(t.memoizedState!==null){if(Io(t),t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Io(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));fa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return zo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return De(),null;case 10:return ya(t.type),null;case 22:case 23:return Io(t),ko(),e!==null&&xe(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(Aa),null;case 25:return null;default:return null}}function bl(e,t){switch(na(t),t.tag){case 3:ya(Aa),De();break;case 26:case 27:case 5:ke(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Io(t);break;case 13:Io(t);break;case 19:zo(t);break;case 10:ya(t.type);break;case 22:case 23:Io(t),ko(),e!==null&&xe(Wa);break;case 24:ya(Aa)}}function xl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Sl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Cl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{wo(t,n)}catch(t){Z(e,e.return,t)}}}function wl(e,t,n){n.props=Sc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=yi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);m(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function El(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&em(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&tm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Tt]=t}catch(t){Z(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[wt]=e,t[Tt]=n}catch(t){Z(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);zl=!0,Tp(o,Wl===0?t:t+`_`+Wl,n),Wl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||ql(e.child,t)),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=xi(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=yi(r,n),a=xi(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Nd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=xi(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=xi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Nd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=yi(t,e.stateNode);t=xi(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function eu(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e),e=e.sibling;else $l(e)}function tu(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&tu(e),e=e.sibling}function nu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:nu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function ru(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=yi(n,r),a=xi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=nu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&ru(e,t);e=e.sibling}}var iu=!1,G=!1,au=!1,ou=!1,su=typeof WeakSet==`function`?WeakSet:Set,cu=null,lu=!1,uu=!1,du=!1,fu=!1;function pu(e,t,n){if(e=e.containerInfo,sp=gh,e=Yr(e),Xr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,cu=t,t=n?9270:1024;cu!==null;){if(e=cu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),mu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),mu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),mu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,cu=r):(n&&Ql(e),mu(n))}}Bl=null}function mu(e){for(;cu!==null;){var t=cu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=Sc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=yi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=xi(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,cu=r;break}cu=t.return}}function hu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fu(e,n),r&4&&xl(5,n);break;case 1:if(Fu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Sc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Cl(n),r&512&&Tl(n,n.return);break;case 3:if(Fu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{wo(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Fu(e,n),t===null&&r&4&&Ml(n),r&512&&Tl(n,n.return);break;case 12:Fu(e,n);break;case 31:Fu(e,n),r&4&&wu(e,n);break;case 13:Fu(e,n),r&4&&Tu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||iu,!r){var a=t!==null&&t.memoizedState!==null||G;t=iu,i=G,iu=r,(G=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Lu(e,n,r)):Fu(e,n),iu=t,G=i}break;case 30:Fu(e,n),r&512&&Tl(n,n.return);break;case 7:r&512&&Tl(n,n.return);default:Fu(e,n)}}function gu(e,t){for(e=e.child;e!==null;)_u(e,t),e=e.sibling}function _u(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}vu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,L=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&gu(e,t);break;default:gu(e,t)}}function vu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:_u(n,r);break a;case 22:n.memoizedState===null&&vu(n,r);break a;default:vu(n,r)}}e=e.sibling}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var bu=null,xu=!1;function Su(e,t,n){for(n=n.child;n!==null;)Cu(e,t,n),n=n.sibling}function Cu(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount==`function`)try{Qe.onCommitFiberUnmount(Ze,n)}catch{}switch(n.tag){case 26:G||El(n,t),Su(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!G&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:G||El(n,t),kl(n);var r=bu,i=xu;Sp(n.type)&&(bu=n.stateNode,xu=!1),Su(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),bu=r,xu=i;break;case 5:G||El(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=bu,i=xu,bu=null,Su(e,t,n),bu=r,xu=i,bu!==null){if(xu)try{(bu.nodeType===9?bu.body:bu.nodeName===`HTML`?bu.ownerDocument.body:bu).removeChild(n.stateNode),L=!0}catch(e){Z(n,t,e)}else try{bu.removeChild(n.stateNode),L=!0}catch(e){Z(n,t,e)}}break;case 18:bu!==null&&(xu?(e=bu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(bu,n.stateNode));break;case 4:r=bu,i=xu,bu=n.stateNode.containerInfo,xu=!0,Su(e,t,n),bu=r,xu=i;break;case 0:case 11:case 14:case 15:Sl(2,n,t),G||Sl(4,n,t),Su(e,t,n);break;case 1:G||(El(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&wl(n,t,r)),Su(e,t,n);break;case 21:Su(e,t,n);break;case 22:G=(r=G)||n.memoizedState!==null,Su(e,t,n),G=r;break;case 30:El(n,t),Su(e,t,n);break;case 7:G||El(n,t),Su(e,t,n);break;default:Su(e,t,n)}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Eu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new su),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new su),t;default:throw Error(i(435,e.tag))}}function Du(e,t){var n=Eu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Ou(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){bu=l.stateNode,xu=!1;break a}break;case 5:bu=l.stateNode,xu=!1;break a;case 3:case 4:bu=l.stateNode.containerInfo,xu=!0;break a}l=l.return}if(bu===null)throw Error(i(160));Cu(s,c,o),bu=null,xu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Au(t,e,n),t=t.sibling}var ku=null;function Au(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Ou(t,e,n),ju(e),a&4&&(Sl(3,e,e.return),xl(3,e),Sl(5,e,e.return));break;case 1:Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),a&64&&iu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ku,Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(iu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[jt]||r[wt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[wt]=e,Rt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[wt]=e,Rt(r),t=r}e.stateNode=t}}else iu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||G||t.parentNode.removeChild(t)):a.count--,n===null?iu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Ou(t,e,n),ju(e),a&512&&(G||r===null||El(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=au,au=!1,Ou(t,e,n),au=o,ju(e),a&512&&(G||r===null||El(r,r.return)),e.flags&32){t=e.stateNode;try{fn(t,``),L=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(ou=!0);break;case 6:if(Ou(t,e,n),ju(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,L=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(L=!1,Wm=null,o=ku,ku=bm(t.containerInfo),Ou(t,e,n),ku=o,ju(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}ou&&(ou=!1,Mu(e)),L=!1;break;case 4:a=au,au=iu,r=Jt(),o=ku,ku=bm(e.stateNode.containerInfo),Ou(t,e,n),ju(e),ku=o,L&&uu&&(du=!0),L=r,au=a;break;case 12:Ou(t,e,n),ju(e);break;case 31:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 13:Ou(t,e,n),ju(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=He()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=iu,l=G,u=au;iu=c||o,au=u||o,G=l||s,Ou(t,e,n),G=l,au=u,iu=c,ju(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||iu||G||(t=s||G,n=iu,r=G,iu=o||iu,G=t,Iu(e,2),iu=n,G=r),!o&&au||gu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Du(e,n))));break;case 19:Ou(t,e,n),ju(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Du(e,t)));break;case 30:a&512&&(G||r===null||El(r,r.return)),a=Jt(),o=uu,s=(n&335544064)===n,c=e.memoizedProps,uu=s&&xi(c.default,c.update)!==`none`,Ou(t,e,n),ju(e),s&&r!==null&&L&&(e.flags|=4),uu=o,L=a;break;case 21:break;case 7:a&512&&(G||r===null||El(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Ou(t,e,n),ju(e)}}function ju(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(fn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Mu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Nu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling;else ru(t,!1)}function Pu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(fu=lu=!1,Ul(),Nu(t,e),!lu&&!du){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),fu=!0}Hl=null;break;case 5:Nu(t,e);break;case 4:r=lu,lu=!1,Nu(t,e),lu&&(du=!0),lu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Nu(t,e):Yl(e,!1));break;case 30:r=lu,i=Ul(),lu=!1,Nu(t,e),lu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=yi(a,o),o=yi(n.memoizedProps,o);var s=xi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=nu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),lu=e.flags&32?!0:r;break;default:Nu(t,e)}}function Fu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hu(e,t.alternate,t),t=t.sibling}function Iu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Sl(4,n,n.return),Iu(n,r);break;case 1:El(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&wl(n,n.return,i),Iu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:El(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Iu(n,r);break;case 6:kl(n);break;case 26:El(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||G||i.parentNode.removeChild(i),Iu(n,r);break;case 22:n.memoizedState===null&&Iu(n,r);break;case 30:El(n,n.return),Iu(n,r);break;case 7:El(n,n.return);default:Iu(n,r)}e=e.sibling}}function Lu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Lu(i,a,n),xl(4,a);break;case 1:if(Lu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Co(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Cl(a),Tl(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||iu||Km(bm(c.ownerDocument),a.type,c),Lu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 12:Lu(i,a,n);break;case 31:Lu(i,a,n),s&&o&4&&wu(i,a);break;case 13:Lu(i,a,n),s&&o&4&&Tu(i,a);break;case 22:a.memoizedState===null&&Lu(i,a,n),Tl(a,a.return);break;case 30:Lu(i,a,n),Tl(a,a.return);break;case 7:Tl(a,a.return);default:Lu(i,a,n)}t=t.sibling}}function Ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ma(n))}function zu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ma(e))}function Bu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Vu(e,t,n,r),t=t.sibling;else i&&tu(t)}function Vu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&eu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Bu(e,t,n,r),a&2048&&xl(9,t);break;case 1:Bu(e,t,n,r);break;case 3:Bu(e,t,n,r),i&&fu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ma(a)));break;case 12:if(a&2048){Bu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Bu(e,t,n,r);break;case 31:Bu(e,t,n,r);break;case 13:Bu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&eu(t),o._visibility&2?Bu(e,t,n,r):(o._visibility|=2,Hu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&eu(s),o._visibility&2?Bu(e,t,n,r):Uu(e,t)),a&2048&&Ru(s,t);break;case 24:Bu(e,t,n,r),a&2048&&zu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),Bu(e,t,n,r);break;default:Bu(e,t,n,r)}}function Hu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Hu(a,o,s,c,i),xl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Hu(a,o,s,c,i)):u._visibility&2?Hu(a,o,s,c,i):Uu(a,o),i&&l&2048&&Ru(o.alternate,o);break;case 24:Hu(a,o,s,c,i),i&&l&2048&&zu(o.alternate,o);break;default:Hu(a,o,s,c,i)}t=t.sibling}}function Uu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Uu(n,r),i&2048&&Ru(r.alternate,r);break;case 24:Uu(n,r),i&2048&&zu(r.alternate,r);break;default:Uu(n,r)}t=t.sibling}}var Wu=8192;function Gu(e,t,n){if(e.subtreeFlags&Wu)for(e=e.child;e!==null;)Ku(e,t,n),e=e.sibling}function Ku(e,t,n){switch(e.tag){case 26:Gu(e,t,n),e.flags&Wu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ku,e.memoizedState,e.memoizedProps));break;case 5:Gu(e,t,n),e.flags&Wu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ku;ku=bm(e.stateNode.containerInfo),Gu(e,t,n),ku=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Wu,Wu=16777216,Gu(e,t,n),Wu=r):Gu(e,t,n));break;case 30:if((e.flags&Wu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Gu(e,t,n);break;default:Gu(e,t,n)}}function qu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yu(e),e=e.sibling}function Yu(e){switch(e.tag){case 0:case 11:case 15:Ju(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:Ju(e);break;case 12:Ju(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Xu(e)):Ju(e);break;default:Ju(e)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];cu=r,Zu(r,e)}qu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Xu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Xu(t));break;default:Xu(t)}e=e.sibling}}function Zu(e,t){for(;cu!==null;){var n=cu;switch(n.tag){case 0:case 11:case 15:Sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,cu=r;else a:for(n=e;cu!==null;){r=cu;var i=r.sibling,a=r.return;if(yu(r),r===n){cu=null;break a}if(i!==null){i.return=a,cu=i;break a}cu=a}}}var Qu={getCacheForType:function(e){var t=Ta(Aa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ta(Aa).controller.signal}},$u=typeof WeakMap==`function`?WeakMap:Map,K=0,q=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return K&2&&Y!==0?Y&-Y:P.T===null?xt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||B){var e=at;at<<=1,!(at&3932160)&&(at=262144),ld=e}else ld=536870912}return e=Ao.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(yi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===q&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),mt(e,n),(!(K&2)||e!==q)&&(e===q&&(!(K&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(K&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||lt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n)){a=qd(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-He(),10<a)){if(Rd(r,t,ld,!td),ct(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;if(d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Bl=null,Ku(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-He():(a&4194048)===a?hd-He():0,m=eh(d,m),m!==null)){Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l);return}nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ur(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=ut(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-et(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&gt(e,n,t)}function zd(){return K&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,_a=ga=null,is(e),io=null,ao=0,e=J;for(;e!==null;)bl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),q=e,J=n=Ii(e.current,null),Y=t,X=0,ed=null,td=!1,nd=lt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=ut(e,t),Ei(),n}function Hd(e,t){H=null,P.H=mc,t===Ja||t===Xa?(t=no(),X=3):t===Ya?(t=no(),X=4):X=t===Mc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Ec(e,Ui(t,e.current)))}function Ud(){var e=Ao.current;return e===null?!0:(Y&4194048)===Y?jo===null:(Y&62914560)===Y||Y&536870912?e===jo:!1}function Wd(){var e=P.H;return P.H=mc,e===null?mc:e}function Gd(){var e=P.A;return P.A=Qu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&Ao.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||q===null||Rd(q,Y,ld,!1)}function qd(e,t,n){var r=K;K|=2;var i=Wd(),a=Gd();(q!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Ao.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,_a=ga=null,K=r,P.H=i,P.A=a,J===null&&(q=null,Y=0,Ei()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=K;K|=2;var r=Wd(),a=Gd();q!==e||Y!==t?(_d=null,gd=He()+500,Vd(e,t)):nd=lt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(Qa(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||q!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Qa(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return _a=ga=null,P.H=r,P.A=a,K=n,J===null?(q=null,Y=0,Ei(),ad):0}function Xd(){for(;J!==null&&!Be();)Zd(J)}function Zd(e){var t=fl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Kc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Kc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:is(t);var r=t;r===ia&&(B?(ua(r),r.tag===5&&r.stateNode!=null&&(z=r.stateNode)):(ua(r),B=!0));default:bl(n,t),t=J=Li(t,id),t=fl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){_a=ga=null,is(t),io=null,ao=0;var i=t.return;try{if(jc(e,i,t,n,Y)){ad=1,Ec(e,Ui(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Ec(e,Ui(n,e.current)),J=null;return}t.flags&32768?(B||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ao.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=vl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=yl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===q&&(J=q=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Ti,ht(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Fa(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ke,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,i=F.p,F.p=2,a=K,K|=4;try{pu(e,t,n)}finally{K=a,F.p=i,P.T=r}}yd=1,zl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Pu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=P.T,P.T=null;var i=F.p;F.p=2;var a=K;K|=4;try{uu=du=!1,Au(t,e,n),n=cp;var o=Yr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Jr(s.ownerDocument.documentElement,s)){if(c!==null&&Xr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=qr(s,h),v=qr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{K=a,F.p=i,P.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=K;K|=4;try{hu(e,t.alternate,t)}finally{K=i,F.p=r,P.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Ve();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),bt(r),n=n.stateNode,Qe&&typeof Qe.onCommitFiberRoot==`function`)try{Qe.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=P.T,a=F.p,F.p=2,P.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{P.T=n,F.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ma(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=bt(Sd),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,K&6)throw Error(i(331));var c=K;if(K|=4,Yu(o.current),Vu(o,o.current,s,n),K=c,Df(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot==`function`)try{Qe.onPostCommitFiberRoot(Ze,o)}catch{}return!0}finally{F.p=a,P.T=r,uf(e,t)}}function pf(e,t,n){t=Ui(n,t),t=Oc(e.stateNode,t,2),e=_o(e,t,2),e!==null&&(mt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Ui(n,e),n=kc(2),r=_o(t,n,2),r!==null&&(Ac(n,r,t,e),mt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $u;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,q===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>He()-md?K&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=ft()),e=ki(e,t),e!==null&&(mt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Re(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-et(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ct(r,r===q?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||lt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=He(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-et(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=q,n=Y,n=ct(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||lt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ze(r),bt(n)){case 2:case 8:n=Ge;break;case 32:n=Ke;break;case 268435456:n=Je;break;default:n=Ke}return r=jf.bind(null,e),n=Re(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ct(e,e===q?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,He()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){K&6?Re(We,Of):kf()})}function Pf(){if(Tf===0){var e=Ra;e===0&&(e=it,it<<=1,!(it&261888)&&(it=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:yn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Tt]||null).action),o=r.submitter;o&&(t=(t=o[Tt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Vn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);ec(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),ec(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<gi.length;Lf++){var Rf=gi[Lf];_i(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}_i(ci,`onAnimationEnd`),_i(li,`onAnimationIteration`),_i(ui,`onAnimationStart`),_i(`dblclick`,`onDoubleClick`),_i(`focusin`,`onFocus`),_i(`focusout`,`onBlur`),_i(di,`onTransitionRun`),_i(fi,`onTransitionStart`),_i(pi,`onTransitionCancel`),_i(mi,`onTransitionEnd`),Ut(`onMouseEnter`,[`mouseout`,`mouseover`]),Ut(`onMouseLeave`,[`mouseout`,`mouseover`]),Ut(`onPointerEnter`,[`pointerout`,`pointerover`]),Ut(`onPointerLeave`,[`pointerout`,`pointerover`]),Ht(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ht(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ht(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ht(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Si(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Dt];n===void 0&&(n=t[Dt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Bt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!An||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Dn(function(){var r=a,i=Sn(n),s=[];a:{var c=hi.get(e);if(c!==void 0){var l=Vn,u=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:l=ar;break;case`focusin`:u=`focus`,l=Xn;break;case`focusout`:u=`blur`,l=Xn;break;case`beforeblur`:case`afterblur`:l=Xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Yn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=cr;break;case ci:case li:case ui:l=Zn;break;case mi:l=lr;break;case`scroll`:case`scrollend`:l=Un;break;case`wheel`:l=ur;break;case`copy`:case`cut`:case`paste`:l=Qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=or;break;case`submit`:l=sr;break;case`toggle`:case`beforetoggle`:l=dr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=On(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==xn&&(u=n.relatedTarget||n.fromElement)&&(Pt(u)||u[Et]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Pt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=or,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:It(c),h=l==null?u:It(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Pt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?It(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=jr;else if(Tr(c)){if(Mr)_=Vr;else{_=zr;var v=Rr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&gn(r.elementType)&&(_=jr):_=Br;if(_&&=_(e,r)){Er(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?It(r):window,e){case`focusin`:(Tr(v)||v.contentEditable===`true`)&&(Qr=v,$r=r,ei=null);break;case`focusout`:ei=$r=Qr=null;break;case`mousedown`:ti=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:ti=!1,ni(s,n,i);break;case`selectionchange`:if(Zr)break;case`keydown`:case`keyup`:ni(s,n,i)}var y;if(pr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else xr?yr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(gr&&n.locale!==`ko`&&(xr||b!==`onCompositionStart`?b===`onCompositionEnd`&&xr&&(y=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,xr=!0)),v=Jf(r,b),0<v.length&&(b=new $n(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=br(n),y!==null&&(b.data=y)))),(y=hr?Sr(e,n):Cr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new $n(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=On(e,n),i!=null&&r.unshift(qf(e,i,a)),i=On(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=On(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=On(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&fn(e,``+r);else return;break;case`className`:Xt(e,`class`,r);break;case`tabIndex`:Xt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Xt(e,n,r);break;case`style`:hn(e,r,o);return;case`data`:if(t!==`object`){Xt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=yn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Yt(e,`popover`,r);break;case`xlinkActuate`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Yt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=_n.get(n)||n,Yt(e,n,r);else return}L=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:hn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)fn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=bn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Tt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}L=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Yt(e,n,r)}return}L=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}sn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&ln(e,!!r,n,!0):ln(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}dn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(gn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(L=!0),o=m;break;case`name`:m!==f&&(L=!0),a=m;break;case`checked`:m!==f&&(L=!0),u=m;break;case`defaultChecked`:m!==f&&(L=!0),d=m;break;case`value`:m!==f&&(L=!0),s=m;break;case`defaultValue`:m!==f&&(L=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}on(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(L=!0),p=o;break;case`defaultValue`:o!==l&&(L=!0),c=o;break;case`multiple`:o!==l&&(L=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?ln(e,!!n,n?[]:``,!1):ln(e,!!n,t,!0)):ln(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(L=!0),p=a;break;case`defaultValue`:a!==o&&(L=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}un(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(L=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(gn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[wt]=r,n[Tt]=t,np(n,e,t),Rt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[jt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),m(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){m(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];m(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),t.observe(e),!1)}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),m(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag!==6&&(e=b(e),t.unobserve(e),!1)}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];m(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Pt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(m(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(m(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];m(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Nt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[jt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===bn&&(e.onclick=null),Nt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=F.d;F.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ft(e);t!==null&&t.tag===5&&t.type===`form`?nc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=an(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Rt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+an(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+an(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+an(n.imageSizes)+`"]`)):i+=`[href="`+an(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Mt]=!0,o.onload=o.onerror=function(){zt(o)}),Rt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+an(r)+`"][href="`+an(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Rt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Lt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Rt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=we.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Lt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Lt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Lt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+an(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Mt]){r.loading=1;return}}else t=e.createElement(`link`),t[Mt]=!0,t.onload=t.onerror=zt.bind(null,t),np(t,`link`,n),Rt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+an(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+an(n.href)+`"]`);if(r)return t.instance=r,Rt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Rt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Rt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Rt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Rt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Rt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[jt]||a[wt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Rt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Rt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:M,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Pi(3,null,null,t),e.current=a,a.stateNode=e,t=ja(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},mo(a),e}function uh(e){return e?(e=Mi,e):Mi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=go(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=_o(e,r,t),n!==null&&(Pd(n,e,t),vo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=ki(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=yt(t);var n=ki(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function vh(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ft(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=st(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-et(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(K&6)&&(gd=He()+500,Df(0,!1))}}break;case 31:case 13:s=ki(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Sn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ue()){case We:return 2;case Ge:return 8;case Ke:case qe:return 32;case Je:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ft(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xn=r,n.target.dispatchEvent(r),xn=null}else return t=Ft(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ft(n);a!==null&&(e.splice(t,3),t-=3,ec(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Tt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Tt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Et]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=xt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.0`)throw Error(i(527,Kh,`19.3.0`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.0`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.3.0`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ze=Jh.inject(qh),Qe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Cc,s=wc,c=Tc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Et]=t.current,Wf(e),new Wh(t)}})),_=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),x=o(((e,t)=>{t.exports=b()}))(),S=(0,v.createContext)(),C=({children:e})=>{let[t,n]=(0,v.useState)(null),[r,i]=(0,v.useState)([]),[a,o]=(0,v.useState)(!0),s=async()=>{try{let e=await fetch(`/api/users`);if(e.ok){let t=await e.json();return i(t),t}}catch(e){console.error(`Failed to fetch users:`,e)}return[]};return(0,v.useEffect)(()=>{(async()=>{let e=await s(),t=localStorage.getItem(`carrot_pcb_user`);if(t)try{let r=JSON.parse(t),i=e.find(e=>e.id===r.id)||r;n(i)}catch{e.length>0&&n(e[0])}else e.length>0&&n(e[0]);o(!1)})()},[]),(0,x.jsx)(S.Provider,{value:{currentUser:t,users:r,loading:a,login:async(e,t)=>{let r=await fetch(`/api/auth/login`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({username:e,password:t})});if(!r.ok){let e=await r.json();throw Error(e.error||`로그인에 실패했습니다.`)}let i=await r.json();return n(i),localStorage.setItem(`carrot_pcb_user`,JSON.stringify(i)),i},register:async e=>{let t=await fetch(`/api/auth/register`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)});if(!t.ok){let e=await t.json();throw Error(e.error||`회원가입에 실패했습니다.`)}let r=await t.json();return n(r),localStorage.setItem(`carrot_pcb_user`,JSON.stringify(r)),await s(),r},quickSwitchUser:e=>{n(e),localStorage.setItem(`carrot_pcb_user`,JSON.stringify(e))},logout:()=>{localStorage.removeItem(`carrot_pcb_user`),r.length>0?n(r[0]):n(null)},refreshUsers:s},children:e})},w=()=>(0,v.useContext)(S),T=e=>e?.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase();function E(e,t,n=[]){if(t==null)throw Error(`[lucide]: iconNode is required when icon name is used`);return{name:T(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}var D=e=>{let t=``,n=!1;for(let r of e){if(r===`-`||r===`_`||r<=` `){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t},O=e=>{let t=D(e);return t.charAt(0).toUpperCase()+t.slice(1)},k=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),A={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":2,"stroke-linecap":`round`,"stroke-linejoin":`round`};function j(e){return e!=null}function ee(e,t={}){let n=t.attributeNames??{},r=e=>n[e]??e,i=e.size??e.width??A.width,a=e.size??e.height??A.height,o=e.aliases?.filter(e=>typeof e==`string`&&e.trim()!==``).map(e=>`lucide-${e}`)??[],s=[...e.name?[`lucide-${e.name}`]:[],...o],c=t.className?.split(` `).filter(Boolean)??[],l=t.includeDefaultClasses===!1?k(...c):k(`lucide`,...s,...c),u=t.absoluteStrokeWidth?Number(t.strokeWidth??A[`stroke-width`])*Number(e.size??e.width??A.width)/Number(t.size??t.width??A.width):t.strokeWidth??A[`stroke-width`];return[`svg`,{...Object.entries(A).reduce((e,[t,n])=>(e[r(t)]=n,e),{}),...`color`in t&&t.color&&{[r(`stroke`)]:t.color},...`size`in t&&j(t.size)&&{[r(`width`)]:t.size,[r(`height`)]:t.size},...`width`in t&&j(t.width)&&{[r(`width`)]:t.width},...`height`in t&&j(t.height)&&{[r(`height`)]:t.height},[r(`stroke-width`)]:u,...l&&{[r(`class`)]:l},[r(`viewBox`)]:`0 0 ${i} ${a}`,...t.hasA11yProp===!1?{[r(`aria-hidden`)]:`true`}:{},...`attributes`in t&&t.attributes},e.node.map(e=>{let[n,i,a]=e,o=t.nonScalingStroke?{[r(`vector-effect`)]:`non-scaling-stroke`,...i}:i;return a?[n,o,a]:[n,o]})]}function te(e,t={}){return ee(e,{...t,attributeNames:{...t.attributeNames,class:`className`,"stroke-width":`strokeWidth`,"stroke-linecap":`strokeLinecap`,"stroke-linejoin":`strokeLinejoin`,"vector-effect":`vectorEffect`}})}var ne=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},M=(0,v.createContext)({}),re=()=>(0,v.useContext)(M),ie=(0,v.forwardRef)(({color:e,size:t,width:n,height:r,strokeWidth:i,absoluteStrokeWidth:a,nonScalingStroke:o,className:s=``,children:c,iconNode:l=[],icon:u={node:l,aliases:[],size:24},...d},f)=>{let{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:h=!1,nonScalingStroke:g=!1,color:_=`currentColor`,className:y=``}=re()??{},b=!!c||ne(d),[x,S,C=[]]=te(u,{color:e??_,width:n??t??p,height:r??t??p,strokeWidth:i??m,absoluteStrokeWidth:a??h,nonScalingStroke:o??g,className:k(y,s),hasA11yProp:b,attributes:d});return(0,v.createElement)(x,{ref:f,...S},[...C.map(([e,t])=>(0,v.createElement)(e,t)),...Array.isArray(c)?c:[c]])});function N(e,t=[],n=[]){let r=typeof e==`string`?E(e,t,n):e,i=(0,v.forwardRef)(({className:e,...t},n)=>(0,v.createElement)(ie,{ref:n,icon:r,className:e,...t}));return r.name&&(i.displayName=O(r.name)),i}var ae={name:`activity`,size:24,node:[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]};ae.node;var oe=N(ae),se={name:`arrow-left`,size:24,node:[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]};se.node;var ce=N(se),le={name:`arrow-right`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]};le.node;var ue=N(le),de={name:`award`,size:24,node:[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]};de.node;var fe=N(de),pe={name:`ban`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M4.929 4.929 19.07 19.071`,key:`196cmz`}]]};pe.node;var me=N(pe),he={name:`bell`,size:24,node:[[`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`,key:`vwvbt9`}],[`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`,key:`11g9vi`}]]};he.node;var ge=N(he),P={name:`book-open`,size:24,node:[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]};P.node;var F=N(P),_e={name:`calculator`,size:24,node:[[`rect`,{width:`16`,height:`20`,x:`4`,y:`2`,rx:`2`,key:`1nb95v`}],[`line`,{x1:`8`,x2:`16`,y1:`6`,y2:`6`,key:`x4nwl0`}],[`line`,{x1:`16`,x2:`16`,y1:`14`,y2:`18`,key:`wjye3r`}],[`path`,{d:`M16 10h.01`,key:`1m94wz`}],[`path`,{d:`M12 10h.01`,key:`1nrarc`}],[`path`,{d:`M8 10h.01`,key:`19clt8`}],[`path`,{d:`M12 14h.01`,key:`1etili`}],[`path`,{d:`M8 14h.01`,key:`6423bh`}],[`path`,{d:`M12 18h.01`,key:`mhygvu`}],[`path`,{d:`M8 18h.01`,key:`lrp35t`}]]};_e.node;var ve=N(_e),ye={name:`calendar`,size:24,node:[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}]]};ye.node;var be=N(ye),xe={name:`chart-pie`,size:24,node:[[`path`,{d:`M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z`,key:`pzmjnu`}],[`path`,{d:`M21.21 15.89A10 10 0 1 1 8 2.83`,key:`k2fpak`}]],aliases:[`pie-chart`]};xe.node;var I=N(xe),Se={name:`check-check`,size:24,node:[[`path`,{d:`M18 6 7 17l-5-5`,key:`116fxf`}],[`path`,{d:`m22 10-7.5 7.5L13 16`,key:`ke71qq`}]]};Se.node;var Ce=N(Se),we={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]};we.node;var Te=N(we),Ee={name:`circle-alert`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]],aliases:[`alert-circle`]};Ee.node;var De=N(Ee),Oe={name:`circle-check-big`,size:24,node:[[`path`,{d:`M21.801 10A10 10 0 1 1 17 3.335`,key:`yps3ct`}],[`path`,{d:`m9 11 3 3L22 4`,key:`1pflzl`}]],aliases:[`check-circle`]};Oe.node;var ke=N(Oe),Ae={name:`circle-check`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m16 9-5.5 5.5L8 12`,key:`xofnsj`}]],aliases:[`check-circle-2`]};Ae.node;var je=N(Ae),Me={name:`circle-plus`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M8 12h8`,key:`1wcyev`}],[`path`,{d:`M12 8v8`,key:`napkw2`}]],aliases:[`plus-circle`]};Me.node;var Ne=N(Me),Pe={name:`circle`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]};Pe.node;var Fe=N(Pe),Ie={name:`clock`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}]]};Ie.node;var Le=N(Ie),Re={name:`cpu`,size:24,node:[[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M17 20v2`,key:`1rnc9c`}],[`path`,{d:`M17 2v2`,key:`11trls`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M2 17h2`,key:`7oei6x`}],[`path`,{d:`M2 7h2`,key:`asdhe0`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`M20 17h2`,key:`1fpfkl`}],[`path`,{d:`M20 7h2`,key:`1o8tra`}],[`path`,{d:`M7 20v2`,key:`4gnj0m`}],[`path`,{d:`M7 2v2`,key:`1i4yhu`}],[`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`,key:`1vbyd7`}],[`rect`,{x:`8`,y:`8`,width:`8`,height:`8`,rx:`1`,key:`z9xiuo`}]]};Re.node;var ze=N(Re),Be={name:`dollar-sign`,size:24,node:[[`line`,{x1:`12`,x2:`12`,y1:`2`,y2:`22`,key:`7eqyqh`}],[`path`,{d:`M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6`,key:`1b0p4s`}]]};Be.node;var Ve=N(Be),He={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]};He.node;var Ue=N(He),We={name:`eraser`,size:24,node:[[`path`,{d:`M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21`,key:`g5wo59`}],[`path`,{d:`m5.082 11.09 8.828 8.828`,key:`1wx5vj`}]]};We.node;var Ge=N(We),Ke={name:`eye-off`,size:24,node:[[`path`,{d:`M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49`,key:`ct8e1f`}],[`path`,{d:`M14.084 14.158a3 3 0 0 1-4.242-4.242`,key:`151rxh`}],[`path`,{d:`M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143`,key:`13bj9a`}],[`path`,{d:`m2 2 20 20`,key:`1ooewy`}]]};Ke.node;var qe=N(Ke),Je={name:`eye`,size:24,node:[[`path`,{d:`M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0`,key:`1nclc0`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]};Je.node;var Ye=N(Je),Xe={name:`file-spreadsheet`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M8 13h2`,key:`yr2amv`}],[`path`,{d:`M14 13h2`,key:`un5t4a`}],[`path`,{d:`M8 17h2`,key:`2yhykz`}],[`path`,{d:`M14 17h2`,key:`10kma7`}]]};Xe.node;var Ze=N(Xe),Qe={name:`flame`,size:24,node:[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]};Qe.node;var $e=N(Qe),et={name:`globe`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20`,key:`13o1zl`}],[`path`,{d:`M2 12h20`,key:`9i4pu4`}]]};et.node;var tt=N(et),nt={name:`graduation-cap`,size:24,node:[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]};nt.node;var rt=N(nt),it={name:`grid-3x3`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M3 15h18`,key:`5xshup`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`M15 3v18`,key:`14nvp0`}]],aliases:[`grid`,`grid-3-x-3`]};it.node;var at=N(it),ot={name:`hash`,size:24,node:[[`line`,{x1:`4`,x2:`20`,y1:`9`,y2:`9`,key:`4lhtct`}],[`line`,{x1:`4`,x2:`20`,y1:`15`,y2:`15`,key:`vyu0kd`}],[`line`,{x1:`10`,x2:`8`,y1:`3`,y2:`21`,key:`1ggp8o`}],[`line`,{x1:`16`,x2:`14`,y1:`3`,y2:`21`,key:`weycgp`}]]};ot.node;var st=N(ot),ct={name:`heart`,size:24,node:[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]};ct.node;var lt=N(ct),ut={name:`image`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`,key:`1m3agn`}],[`circle`,{cx:`9`,cy:`9`,r:`2`,key:`af1f0g`}],[`path`,{d:`m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21`,key:`1xmnt7`}]]};ut.node;var dt=N(ut),ft={name:`info`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]};ft.node;var pt=N(ft),mt={name:`layers`,size:24,node:[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]],aliases:[`layers-3`]};mt.node;var ht=N(mt),gt={name:`lock`,size:24,node:[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]};gt.node;var _t=N(gt),vt={name:`log-in`,size:24,node:[[`path`,{d:`m10 17 5-5-5-5`,key:`1bsop3`}],[`path`,{d:`M15 12H3`,key:`6jk70r`}],[`path`,{d:`M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4`,key:`u53s6r`}]]};vt.node;var yt=N(vt),bt={name:`map-pin`,size:24,node:[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]};bt.node;var xt=N(bt),St={name:`message-circle`,size:24,node:[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}]]};St.node;var Ct=N(St),wt={name:`message-square`,size:24,node:[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}]]};wt.node;var Tt=N(wt),Et={name:`messages-square`,size:24,node:[[`path`,{d:`M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z`,key:`1n2ejm`}],[`path`,{d:`M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1`,key:`1qfcsi`}]]};Et.node;var Dt=N(Et),Ot={name:`minus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]};Ot.node;var kt=N(Ot),At={name:`moon`,size:24,node:[[`path`,{d:`M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401`,key:`kfwtm`}]]};At.node;var jt=N(At),Mt={name:`package`,size:24,node:[[`path`,{d:`M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z`,key:`1a0edw`}],[`path`,{d:`M12 22V12`,key:`d0xqtd`}],[`polyline`,{points:`3.29 7 12 12 20.71 7`,key:`ousv84`}],[`path`,{d:`m7.5 4.27 9 5.15`,key:`1c824w`}]]};Mt.node;var Nt=N(Mt),Pt={name:`palette`,size:24,node:[[`path`,{d:`M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,key:`e79jfc`}],[`circle`,{cx:`13.5`,cy:`6.5`,r:`.5`,fill:`currentColor`,key:`1okk4w`}],[`circle`,{cx:`17.5`,cy:`10.5`,r:`.5`,fill:`currentColor`,key:`f64h9f`}],[`circle`,{cx:`6.5`,cy:`12.5`,r:`.5`,fill:`currentColor`,key:`qy21gx`}],[`circle`,{cx:`8.5`,cy:`7.5`,r:`.5`,fill:`currentColor`,key:`fotxhn`}]]};Pt.node;var Ft=N(Pt),It={name:`paperclip`,size:24,node:[[`path`,{d:`m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551`,key:`1miecu`}]]};It.node;var Lt=N(It),Rt={name:`pen-tool`,size:24,node:[[`path`,{d:`M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z`,key:`nt11vn`}],[`path`,{d:`m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18`,key:`15qc1e`}],[`path`,{d:`m2.3 2.3 7.286 7.286`,key:`1wuzzi`}],[`circle`,{cx:`11`,cy:`11`,r:`2`,key:`xmgehs`}]]};Rt.node;var zt=N(Rt),Bt={name:`pin`,size:24,node:[[`path`,{d:`M12 17v5`,key:`bb1du9`}],[`path`,{d:`M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z`,key:`1nkz8b`}]]};Bt.node;var Vt=N(Bt),Ht={name:`plus`,size:24,node:[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]};Ht.node;var Ut=N(Ht),Wt={name:`radio`,size:24,node:[[`path`,{d:`M16.247 7.761a6 6 0 0 1 0 8.478`,key:`1fwjs5`}],[`path`,{d:`M19.075 4.933a10 10 0 0 1 0 14.134`,key:`ehdyv1`}],[`path`,{d:`M4.925 19.067a10 10 0 0 1 0-14.134`,key:`1q22gi`}],[`path`,{d:`M7.753 16.239a6 6 0 0 1 0-8.478`,key:`r2q7qm`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}]]};Wt.node;var Gt=N(Wt),Kt={name:`refresh-cw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]};Kt.node;var qt=N(Kt),L={name:`rotate-ccw`,size:24,node:[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]};L.node;var Jt=N(L),Yt={name:`rotate-cw`,size:24,node:[[`path`,{d:`M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8`,key:`1p45f6`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}]]};Yt.node;var Xt=N(Yt),Zt={name:`save`,size:24,node:[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]};Zt.node;var Qt=N(Zt),$t={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]};$t.node;var en=N($t),tn={name:`send`,size:24,node:[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]};tn.node;var nn=N(tn),rn={name:`share-2`,size:24,node:[[`circle`,{cx:`18`,cy:`5`,r:`3`,key:`gq8acd`}],[`circle`,{cx:`6`,cy:`12`,r:`3`,key:`w7nqdw`}],[`circle`,{cx:`18`,cy:`19`,r:`3`,key:`1xt0gg`}],[`line`,{x1:`8.59`,x2:`15.42`,y1:`13.51`,y2:`17.49`,key:`47mynk`}],[`line`,{x1:`15.41`,x2:`8.59`,y1:`6.51`,y2:`10.49`,key:`1n3mei`}]]};rn.node;var an=N(rn),on={name:`shield-check`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]};on.node;var sn=N(on),cn={name:`shield`,size:24,node:[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}]]};cn.node;var ln=N(cn),un={name:`sliders-vertical`,size:24,node:[[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M12 21v-9`,key:`17s77i`}],[`path`,{d:`M12 8V3`,key:`13r4qs`}],[`path`,{d:`M17 16h4`,key:`h1uq16`}],[`path`,{d:`M19 12V3`,key:`o1uvq1`}],[`path`,{d:`M19 21v-5`,key:`qua636`}],[`path`,{d:`M3 14h4`,key:`bcjad9`}],[`path`,{d:`M5 10V3`,key:`cb8scm`}],[`path`,{d:`M5 21v-7`,key:`1w1uti`}]],aliases:[`sliders`]};un.node;var dn=N(un),fn={name:`sparkles`,size:24,node:[[`path`,{d:`M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,key:`1s2grr`}],[`path`,{d:`M20 2v4`,key:`1rf3ol`}],[`path`,{d:`M22 4h-4`,key:`gwowj6`}],[`circle`,{cx:`4`,cy:`20`,r:`2`,key:`6kqj1y`}]],aliases:[`stars`]};fn.node;var pn=N(fn),mn={name:`square`,size:24,node:[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]]};mn.node;var hn=N(mn),gn={name:`sun`,size:24,node:[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]};gn.node;var _n=N(gn),vn={name:`thermometer`,size:24,node:[[`path`,{d:`M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z`,key:`17jzev`}]]};vn.node;var yn=N(vn),bn={name:`thumbs-up`,size:24,node:[[`path`,{d:`M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,key:`emmmcr`}],[`path`,{d:`M7 10v12`,key:`1qc93n`}]]};bn.node;var xn=N(bn),Sn={name:`trash`,size:24,node:[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]],aliases:[`trash-2`]};Sn.node;var Cn=N(Sn),wn={name:`trending-up`,size:24,node:[[`path`,{d:`M16 7h6v6`,key:`box55l`}],[`path`,{d:`m22 7-8.5 8.5-5-5L2 17`,key:`1t1m79`}]]};wn.node;var Tn=N(wn),En={name:`triangle-alert`,size:24,node:[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]],aliases:[`alert-triangle`]};En.node;var Dn=N(En),On={name:`trophy`,size:24,node:[[`path`,{d:`M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2`,key:`pwuv1l`}],[`path`,{d:`M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2`,key:`1y54w1`}],[`path`,{d:`M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3`,key:`e30mpu`}],[`path`,{d:`M4 22h16`,key:`57wxv0`}],[`path`,{d:`M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z`,key:`1mhfuq`}],[`path`,{d:`M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3`,key:`i0yafy`}]]};On.node;var kn=N(On),An={name:`truck`,size:24,node:[[`path`,{d:`M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,key:`wrbu53`}],[`path`,{d:`M15 18H9`,key:`1lyqi6`}],[`path`,{d:`M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,key:`lysw3i`}],[`circle`,{cx:`17`,cy:`18`,r:`2`,key:`332jqn`}],[`circle`,{cx:`7`,cy:`18`,r:`2`,key:`19iecd`}]]};An.node;var jn=N(An),Mn={name:`upload`,size:24,node:[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]};Mn.node;var Nn=N(Mn),Pn={name:`user-check`,size:24,node:[[`path`,{d:`m16 11 2 2 4-4`,key:`9rsbq5`}],[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};Pn.node;var Fn=N(Pn),In={name:`user-plus`,size:24,node:[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}],[`line`,{x1:`19`,x2:`19`,y1:`8`,y2:`14`,key:`1bvyxn`}],[`line`,{x1:`22`,x2:`16`,y1:`11`,y2:`11`,key:`1shjgl`}]]};In.node;var Ln=N(In),Rn={name:`user`,size:24,node:[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]};Rn.node;var zn=N(Rn),Bn={name:`users`,size:24,node:[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]};Bn.node;var Vn=N(Bn),Hn={name:`wrench`,size:24,node:[[`path`,{d:`M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,key:`1ngwbx`}]]};Hn.node;var Un=N(Hn),Wn={name:`x`,size:24,node:[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]};Wn.node;var Gn=N(Wn),Kn={name:`zap`,size:24,node:[[`path`,{d:`M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z`,key:`1v7up4`}]]};Kn.node;var qn=N(Kn),Jn={name:`zoom-out`,size:24,node:[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]};Jn.node;var Yn=N(Jn),Xn={name:`zoom-in`,size:24,node:[[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}],[`line`,{x1:`21`,x2:`16.65`,y1:`21`,y2:`16.65`,key:`13gj7c`}],[`line`,{x1:`11`,x2:`11`,y1:`8`,y2:`14`,key:`1vmskp`}],[`line`,{x1:`8`,x2:`14`,y1:`11`,y2:`11`,key:`durymu`}]]};Xn.node;var Zn=N(Xn),Qn={sprout_maker:{id:`sprout_maker`,name:`새싹 납땜러 🌱`,desc:`당근 PCB 모임에 첫 발을 내딛은 메이커`,color:`#10B981`},first_pcb:{id:`first_pcb`,name:`첫 기판 발주 🏆`,desc:`직접 설계한 PCB 발주를 성공적으로 완료`,color:`#3B82F6`},iron_master:{id:`iron_master`,name:`인두기 장인 🔥`,desc:`오프라인 정기 밋업 및 납땜 워크숍 3회 이상 참석`,color:`#EA580C`},layer4_master:{id:`layer4_master`,name:`4층 기판 정복자 🧩`,desc:`고난도 4층 이상 다층 PCB 아트웍 제작 완료`,color:`#8B5CF6`},group_buy_lead:{id:`group_buy_lead`,name:`공구 총대장 📦`,desc:`모임원들을 위한 부품/기판 공동구매 주최`,color:`#F59E0B`},sos_detective:{id:`sos_detective`,name:`회로 SOS 명탐정 💡`,desc:`회원들의 난해한 하드웨어 버그를 해결 채택받음`,color:`#EC4899`}},$n=[{level:1,title:`🌱 새싹 메이커`,minTemp:36.5,maxTemp:39.9,color:`#059669`,icon:`🌱`},{level:2,title:`🔥 납땜 견습생`,minTemp:40,maxTemp:49.9,color:`#F59E0B`,icon:`🔥`},{level:3,title:`⚡ 회로 장인`,minTemp:50,maxTemp:64.9,color:`#3B82F6`,icon:`⚡`},{level:4,title:`💎 아트웍 대가`,minTemp:65,maxTemp:79.9,color:`#8B5CF6`,icon:`💎`},{level:5,title:`👑 PCB 마스터`,minTemp:80,maxTemp:94.9,color:`#DC2626`,icon:`👑`},{level:6,title:`🏆 전설의 납땜러`,minTemp:95,maxTemp:99.9,color:`#B91C1C`,icon:`🏆`}];function er(e){let t=Number(e||36.5);for(let e=$n.length-1;e>=0;e--)if(t>=$n[e].minTemp)return $n[e];return $n[0]}var tr={users:[{id:`usr_admin`,username:`admin`,password:`123`,name:`당근마스터 (운영진)`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,role:`admin`,bio:`당근 PCB 메이커스 모임지기 | 10년차 하드웨어 엔지니어 (KiCad, Altium)`,tags:[`운영자`,`고속신호PCB`,`KiCad`],solderingTemp:48.5,badges:[`first_pcb`,`iron_master`,`layer4_master`,`group_buy_lead`,`sos_detective`],createdAt:`2026-08-01T10:00:00.000Z`},{id:`usr_circuit`,username:`circuit_pro`,password:`123`,name:`회로도장인`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,role:`member`,bio:`SMPS 전원 회로 & 오디오 DAC 자작 매니아`,tags:[`정회원`,`전원회로`,`아날로그`],solderingTemp:41.2,badges:[`first_pcb`,`iron_master`,`sos_detective`],createdAt:`2026-08-05T14:30:00.000Z`},{id:`usr_artwork`,username:`artwork_fairy`,password:`123`,name:`아트웍요정`,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,role:`member`,bio:`예쁜 4층/6층 아트웍과 BGA 패키지 팬아웃을 좋아합니다 ✨`,tags:[`정회원`,`아트웍`,`RF회로`],solderingTemp:39.4,badges:[`first_pcb`,`layer4_master`,`group_buy_lead`],createdAt:`2026-08-10T09:15:00.000Z`},{id:`usr_rookie`,username:`rookie_maker`,password:`123`,name:`메이커꿈나무`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,role:`member`,bio:`ESP32 기반 스마트홈 IoT 기기를 직접 PCB 떠서 만들어보고 싶은 초보입니다!`,tags:[`새싹회원`,`ESP32`,`초보`],solderingTemp:37.2,badges:[`sprout_maker`,`first_pcb`],createdAt:`2026-09-01T18:20:00.000Z`}],projects:[{id:`prj_1`,userId:`usr_artwork`,userName:`아트웍요정`,userAvatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,title:`🥕 당근 모양 미니 매크로 키패드 (RP2040 기반 4키)`,description:`당근 잎사귀 모양의 RGB LED와 핫스왑 기계식 스위치가 탑재된 귀여운 당근 키패드 4층 PCB 설계입니다.`,specs:`• MCU: RP2040
• Layer: 4 Layers (SIG-GND-PWR-SIG)
• Dimensions: 52mm x 98mm
• Interface: USB Type-C
• Firmware: QMK / KMK 지원`,status:`조립완료`,isPublic:!0,tags:[`RP2040`,`키보드`,`4층기판`,`RGB`],images:[`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80`],likes:15,likedUsers:[`usr_admin`,`usr_circuit`,`usr_rookie`],comments:[{id:`cmt_p1_1`,userId:`usr_admin`,userName:`당근마스터 (운영진)`,userAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,text:`외곽선 커팅이 아주 매끄럽네요! 다음 오프라인 모임 때 실물 가져와서 보여주세요~`,createdAt:`2026-09-15T11:20:00.000Z`}],createdAt:`2026-09-14T10:00:00.000Z`},{id:`prj_2`,userId:`usr_circuit`,userName:`회로도장인`,userAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,title:`초저노이즈 하이파이 헤드폰 앰프 (OPA1612 + TPA6120A2)`,description:`왜곡율(THD+N) < 0.0001% 목표로 GND 면 분리와 스타 그라운드를 적용한 고성능 아날로그 헤드폰 앰프 보드입니다.`,specs:`• OPAMP: Dual OPA1612
• Buffer: TPA6120A2
• Power: ±12V 초저노이즈 LDO
• Layer: 2 Layer`,status:`샘플발주`,isPublic:!0,tags:[`오디오`,`아날로그`,`저노이즈`,`헤드폰앰프`],images:[`https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80`],likes:11,likedUsers:[`usr_admin`,`usr_artwork`],comments:[],createdAt:`2026-09-18T16:40:00.000Z`},{id:`prj_3`,userId:`usr_rookie`,userName:`메이커꿈나무`,userAvatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,title:`베란다 식물 모니터링 센서 보드 (ESP32-C3)`,description:`토양 수분, 온습도(SHT40), 조도(BH1750) 센서를 한 기판에 집적하고 리튬 폴리머 충전 IC를 내장한 첫 번째 개인 프로젝트입니다.`,specs:`• MCU: ESP32-C3-WROOM-02
• Sensors: SHT40, BH1750, Capacitive Soil Probe
• Battery: TP4056 + 배터리 보호회로`,status:`구상/스케치`,isPublic:!0,tags:[`ESP32`,`IoT`,`스마트홈`,`식물`],images:[`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`],likes:7,likedUsers:[`usr_admin`],comments:[],createdAt:`2026-09-20T09:15:00.000Z`}],marketItems:[{id:`mkt_1`,title:`🥕 [무료나눔] RP2040 미니 키보드 기판 3장 나눔합니다`,type:`share`,category:`pcb`,authorId:`usr_artwork`,authorName:`아트웍요정`,authorAvatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,price:0,targetCount:3,currentCount:2,deadline:`2026-09-30`,status:`recruiting`,location:`역삼동 직거래 또는 반값택배`,description:`JLCPCB에서 최소 수량 5장 발주 후 2장만 사용하고 3장이 남았습니다. 외곽선 커팅 완벽하고 상태 좋습니다. 키보드 자작해보실 분 편하게 신청해주세요!`,image:`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,participants:[`usr_rookie`,`usr_circuit`],createdAt:`2026-09-21T10:00:00.000Z`},{id:`mkt_2`,title:`📦 [공구] LCSC 0603 F급 1% 칩저항 10종 릴(Reel) 묶음 소분 공구`,type:`group_buy`,category:`component`,authorId:`usr_admin`,authorName:`당근마스터 (운영진)`,authorAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,price:2500,targetCount:10,currentCount:8,deadline:`2026-09-28`,status:`recruiting`,location:`정기 밋업 당일 수령 또는 우편`,description:`자주 쓰는 규격(100Ω, 1k, 4.7k, 10k, 100k 등 10종) 5,000개 릴을 통째로 구매해서 1인당 100개씩 지퍼백 소분합니다. 해외 배송비 무료 혜택!`,image:`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80`,participants:[`usr_circuit`,`usr_artwork`,`usr_rookie`],createdAt:`2026-09-19T14:30:00.000Z`},{id:`mkt_3`,title:`✈️ [공구] JLCPCB 4층 임피던스 기판 배송비 절약 묶음 발주`,type:`group_buy`,category:`pcb`,authorId:`usr_circuit`,authorName:`회로도장인`,authorAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,price:8500,targetCount:5,currentCount:5,deadline:`2026-09-23`,status:`completed`,location:`역삼동 랩실 수령`,description:`DHL 익스프레스 배송비($24)를 5명이 분담하여 인당 8,500원에 고속 배송으로 수령하는 묶음 발주입니다.`,image:`https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80`,participants:[`usr_admin`,`usr_artwork`],createdAt:`2026-09-15T18:00:00.000Z`}],sharedEquipment:[{id:`eq_1`,title:`Rigol DS1054Z 4채널 디지털 오실로스코프 (100MHz)`,category:`scope`,ownerId:`usr_admin`,ownerName:`당근마스터 (운영진)`,ownerAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,location:`역삼동 당근 하드웨어 랩`,condition:`정기 밋업 시 지참 가능 / 랩실 예약 방문 사용`,specs:`• 4채널 100MHz 대역폭
• 1GSa/s 샘플링
• SPI, I2C, UART 시리얼 버스 디코딩 지원
• 패시브 프로브 4개 구비`,image:`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80`,status:`available`},{id:`eq_2`,title:`Quick 861DW 고출력 1000W SMD 열풍기 리워크 스테이션`,category:`soldering`,ownerId:`usr_circuit`,ownerName:`회로도장인`,ownerAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,location:`판교 테크노밸리 인근 작업실`,condition:`작업실 방문 사용 (사전 1:1 DM 필수)`,specs:`• 1000W 급속 가열
• 디지털 풍량/온도 3채널 메모리
• QFN, BGA 패키지 디솔더링 및 리워크 전용`,image:`https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80`,status:`available`},{id:`eq_3`,title:`Bambu Lab P1S 고속 3D 프린터 (PCB 기구 케이스 출력용)`,category:`3dprinter`,ownerId:`usr_artwork`,ownerName:`아트웍요정`,ownerAvatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,location:`서초동 메이커 아지트`,condition:`STL 3D 모델 전달 시 밋업 당일 케이스 출력 나눔`,specs:`• 256x256x256mm 출력 볼륨
• PLA, PETG, ABS 기구물 출력
• 0.4mm 경화강 노즐 장착`,image:`https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80`,status:`available`},{id:`eq_4`,title:`광학 실체 현미경 (7X~45X 줌 & HDMI 1080p 모니터 출력)`,category:`microscope`,ownerId:`usr_admin`,ownerName:`당근마스터 (운영진)`,ownerAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,location:`역삼동 당근 하드웨어 랩`,condition:`0402/0201 미세 칩 납땜 시 랩실 방문 사용`,specs:`• 7X-45X 연속 가변 배율
• LED 링 라이트
• FHD 실시간 외부 모니터 관찰 지원`,image:`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,status:`available`}],posts:[{id:`post_sos_1`,boardType:`sos`,authorId:`usr_rookie`,authorName:`메이커꿈나무`,authorAvatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,title:`🚨 [SOS] ESP32 보드에 5V 인가 시 LDO에서 연기가 납니다! 도와주세요`,content:`첫 PCB를 발주하고 부품을 실장했는데 전원을 꽂자마자 LDO(AMS1117)가 뜨거워지며 연기가 납니다 ㅠㅠ 회로도와 보드 사진 첨부합니다. 어떤 부분이 쇼트난 걸까요?`,images:[`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`],pinMarkers:[{id:`pin_1`,x:44,y:38,label:`LDO 발열 및 탄 흔적 지점`},{id:`pin_2`,x:62,y:52,label:`GND-VCC 의심 비아`}],isResolved:!0,acceptedCommentId:`cmt_sos_101`,isPinned:!0,views:148,likes:9,likedUsers:[`usr_admin`,`usr_circuit`],comments:[{id:`cmt_sos_101`,userId:`usr_circuit`,userName:`회로도장인`,userAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,text:`사진의 Pin 1 바로 옆 역전류 방지 다이오드(D1)를 확인해보세요! 캐소드(줄무늬 마킹)가 반대로 뒤집혀 납땜되어 있어서 5V 전원과 접지가 직결 쇼트되고 있습니다. 인두기로 떼어내어 180도 돌려 실장하시면 정상 동작할 겁니다!`,isAccepted:!0,createdAt:`2026-09-20T11:30:00.000Z`},{id:`cmt_sos_102`,userId:`usr_rookie`,userName:`메이커꿈나무`,userAvatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,text:`와!! 장인님 말씀대로 다이오드를 돌려 붙이니까 3.3V 깨끗하게 나오고 ESP32 LED 켜졌습니다 ㅠㅠ 정말 감사합니다 채택 완료했습니다!!`,createdAt:`2026-09-20T12:05:00.000Z`}],createdAt:`2026-09-20T10:15:00.000Z`},{id:`post_1`,boardType:`notice`,authorId:`usr_admin`,authorName:`당근마스터 (운영진)`,authorAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,title:`📢 [필독] 9월 정기 오프라인 PCB 납땜 워크숍 안내 & 해외 묶음 발주 건`,content:`안녕하세요, 당근 PCB 메이커스 회원 여러분! 이번 주말 정기 모임에서는 초보자 분들을 위한 0805/0603 SMD 납땜 기초 실습과 각자 작업 중인 회로 품평회를 진행합니다.`,images:[`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80`],isPinned:!0,views:240,likes:18,likedUsers:[`usr_circuit`,`usr_artwork`,`usr_rookie`],comments:[],createdAt:`2026-09-18T09:00:00.000Z`},{id:`post_2`,boardType:`info`,authorId:`usr_circuit`,authorName:`회로도장인`,authorAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,title:`💡 초보자가 가장 많이 실수하는 노이즈 방지 디커플링 커패시터 배치 팁`,content:`MCU 전원 핀 바로 옆 1~2mm 이내에 0.1uF MLCC를 반드시 배치해야 하는 이유와 비아 인 패드(Via-in-pad) 기법을 정리해 공유합니다.`,images:[],isPinned:!1,views:185,likes:14,likedUsers:[`usr_admin`,`usr_rookie`],comments:[],createdAt:`2026-09-19T14:20:00.000Z`}],events:[{id:`evt_1`,title:`🥕 [정기밋업] 9월 강남/역삼 오프라인 SMD 납땜 & 기판 품평회`,type:`정기밋업`,date:`2026-09-26`,time:`14:00 ~ 18:00`,location:`역삼동 당근 하드웨어 랩 (역삼역 3번 출구 도보 5분)`,description:`각자 설계한 기판 실물을 가져와서 현미경으로 함께 검토하고, QFN/0603 납땜을 실습하는 정기 모임입니다.`,maxAttendees:15,attendees:[`usr_admin`,`usr_circuit`,`usr_artwork`,`usr_rookie`],status:`모집중`},{id:`evt_2`,title:`📦 [공구/발주] JLCPCB 4층 기판 & SMT 묶음 발주 마감 데이`,type:`공동발주`,date:`2026-09-28`,time:`23:59 마감`,location:`온라인 (디스코드 & 당근 채팅방)`,description:`배송비 절약을 위한 해외 묶음 발주 취합일입니다.`,maxAttendees:30,attendees:[`usr_admin`,`usr_circuit`],status:`모집중`}],chatChannels:[{id:`ch_general`,name:`🥕 자유수다방`,description:`PCB 잡담, 작업실 일상, 장비 지름 신고 등 편안한 대화 공간`,messages:[{id:`msg_1`,senderId:`usr_admin`,senderName:`당근마스터 (운영진)`,senderAvatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`,text:`당근 PCB 메이커스에 오신 여러분을 환영합니다! 자유롭게 인사 나눠주세요 🥕`,createdAt:`2026-09-22T06:00:00.000Z`},{id:`msg_2`,senderId:`usr_artwork`,senderName:`아트웍요정`,senderAvatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,text:`다들 주말에 작업 많이 하셨나요? 전 4층 키보드 기판 오늘 조립 완료했습니다 ㅎㅎ`,createdAt:`2026-09-22T07:15:00.000Z`},{id:`msg_3`,senderId:`usr_rookie`,senderName:`메이커꿈나무`,senderAvatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,text:`우와! 갤러리에 올라온 당근 키패드 맞죠? 실물 너무 기대됩니다`,createdAt:`2026-09-22T07:20:00.000Z`}]},{id:`ch_qna`,name:`⚡ 회로 & 아트웍 Q&A`,description:`KiCad, Altium 실계, DRC/ERC, 부품 풋프린트 질문방`,messages:[]},{id:`ch_groupbuy`,name:`📦 부품 공구 & 발주 나눔`,description:`JLCPCB/PCBWay 해외배송비 절약 묶음 발주 및 릴 단위 소자 나눔`,messages:[]},{id:`ch_offline`,name:`☕ 오프라인 번개 모임`,description:`동네 카페나 랩실에서 함께 설계하고 모각코(모여서 각자 코딩/아트웍)해요`,messages:[]}],directMessages:[],notifications:[{id:`notif_1`,userId:`usr_admin`,type:`comment`,title:`새 댓글`,message:`아트웍요정님이 당근 키패드 프로젝트에 댓글을 달았습니다.`,targetType:`project`,targetId:`prj_1`,isRead:!1,createdAt:`2026-09-22T08:00:00.000Z`},{id:`notif_2`,userId:`usr_admin`,type:`like`,title:`좋아요`,message:`메이커꿈나무님이 당신의 공지사항 글을 좋아합니다.`,targetType:`post`,targetId:`post_1`,isRead:!1,createdAt:`2026-09-22T07:30:00.000Z`},{id:`notif_3`,userId:`usr_admin`,type:`market_join`,title:`공구 참여`,message:`메이커꿈나무님이 칩저항 공구에 참여했습니다.`,targetType:`market`,targetId:`mkt_2`,isRead:!0,createdAt:`2026-09-21T16:00:00.000Z`},{id:`notif_4`,userId:`usr_admin`,type:`event_reminder`,title:`밋업 D-3`,message:`9월 SMD 납땜 워크숍이 3일 후에 시작됩니다!`,targetType:`event`,targetId:`evt_1`,isRead:!0,createdAt:`2026-09-23T09:00:00.000Z`},{id:`notif_5`,userId:`usr_circuit`,type:`sos_accepted`,title:`SOS 채택 🎉`,message:`메이커꿈나무님이 당신의 SOS 답변을 채택했습니다! 온도 +1.5℃`,targetType:`post`,targetId:`post_sos_1`,isRead:!1,createdAt:`2026-09-20T12:10:00.000Z`},{id:`notif_6`,userId:`usr_rookie`,type:`comment`,title:`새 댓글`,message:`회로도장인님이 SOS 글에 해결책을 달았습니다.`,targetType:`post`,targetId:`post_sos_1`,isRead:!0,createdAt:`2026-09-20T11:30:00.000Z`}],challenges:[{id:`chal_1`,title:`🏆 가장 작은 면적의 ESP32 보드 설계 챌린지`,description:`ESP32-C3 또는 S3 기반으로 가능한 한 작은 면적의 완전 동작 가능한 PCB를 설계해보세요! USB-C, 전원 레귤레이터, GPIO 최소 4핀 브레이크아웃 필수.`,rules:`1. ESP32 시리즈 MCU 사용 필수
2. USB Type-C 커넥터 포함
3. 전원 레귤레이터 내장
4. 최소 GPIO 4핀 브레이크아웃
5. KiCad 또는 Altium 설계 파일 제출`,prize:`납땜 온도 +3℃, 🏆 챌린지 우승자 뱃지`,startDate:`2026-09-20`,endDate:`2026-10-04`,status:`active`,createdBy:`usr_admin`,submissions:[{id:`sub_1`,userId:`usr_artwork`,userName:`아트웍요정`,userAvatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`,title:`🥕 당근 모양 초미니 ESP32-C3 (18mm x 24mm)`,description:`당근 실루엣 외곽선으로 커팅한 초미니 ESP32-C3 보드. 4층 기판으로 면적 최소화.`,image:`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,votes:8,votedUsers:[`usr_admin`,`usr_circuit`,`usr_rookie`],createdAt:`2026-09-22T10:00:00.000Z`},{id:`sub_2`,userId:`usr_circuit`,userName:`회로도장인`,userAvatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`,title:`극한 미니멀 ESP32-S3 (20mm x 22mm)`,description:`0201 사이즈 수동소자와 QFN 패키지만 사용하여 극한으로 줄인 설계.`,image:`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80`,votes:5,votedUsers:[`usr_admin`,`usr_artwork`],createdAt:`2026-09-23T08:00:00.000Z`}],createdAt:`2026-09-20T00:00:00.000Z`},{id:`chal_2`,title:`🎨 가장 아름다운 아트웍 PCB 디자인 콘테스트`,description:`기능보다 예술! 실크스크린, 동박 아트, 외곽선 커팅 등을 활용하여 가장 아름다운 기판을 설계해보세요.`,rules:`1. 2층 이상 PCB
2. 실크스크린 아트 또는 동박 아트 포함
3. 실제 제작 가능한 설계일 것`,prize:`납땜 온도 +3℃, 🎨 아트 마스터 뱃지`,startDate:`2026-10-01`,endDate:`2026-10-15`,status:`upcoming`,createdBy:`usr_admin`,submissions:[],createdAt:`2026-09-22T00:00:00.000Z`}],bomItems:[{id:`bom_1`,projectId:`prj_1`,userId:`usr_artwork`,title:`당근 키패드 BOM`,items:[{partNumber:`RP2040`,name:`RP2040 MCU`,quantity:1,unitPrice:.8,currency:`USD`,supplier:`LCSC`,footprint:`QFN-56`},{partNumber:`W25Q16JV`,name:`16Mbit NOR Flash`,quantity:1,unitPrice:.35,currency:`USD`,supplier:`LCSC`,footprint:`SOIC-8`},{partNumber:`USB4110-GF-A`,name:`USB Type-C 16P`,quantity:1,unitPrice:.45,currency:`USD`,supplier:`LCSC`,footprint:`SMD`},{partNumber:`AMS1117-3.3`,name:`3.3V LDO 1A`,quantity:1,unitPrice:.12,currency:`USD`,supplier:`LCSC`,footprint:`SOT-223`},{partNumber:`RC0603FR-07100RL`,name:`100Ω 0603 1%`,quantity:4,unitPrice:.002,currency:`USD`,supplier:`LCSC`,footprint:`0603`},{partNumber:`CC0603KRX7R8BB104`,name:`100nF MLCC 0603`,quantity:8,unitPrice:.005,currency:`USD`,supplier:`LCSC`,footprint:`0603`},{partNumber:`WS2812B-2020`,name:`RGB LED 2020`,quantity:4,unitPrice:.08,currency:`USD`,supplier:`LCSC`,footprint:`2020`},{partNumber:`CPG151101S05`,name:`기계식 스위치 소켓`,quantity:4,unitPrice:.15,currency:`USD`,supplier:`LCSC`,footprint:`THT`}],exchangeRate:1350,createdAt:`2026-09-21T10:00:00.000Z`}],partsDatabase:[{partNumber:`RP2040`,name:`RP2040 Dual-core ARM Cortex-M0+ MCU`,category:`MCU`,prices:{LCSC:.8,DigiKey:1,Mouser:.95}},{partNumber:`ESP32-C3-WROOM-02`,name:`ESP32-C3 WiFi+BLE Module`,category:`MCU`,prices:{LCSC:1.85,DigiKey:2.5,Mouser:2.3}},{partNumber:`STM32F407VGT6`,name:`STM32F4 168MHz ARM MCU`,category:`MCU`,prices:{LCSC:5.2,DigiKey:8.5,Mouser:7.8}},{partNumber:`AMS1117-3.3`,name:`3.3V LDO Regulator 1A`,category:`Power`,prices:{LCSC:.12,DigiKey:.45,Mouser:.38}},{partNumber:`TPS63020`,name:`Buck-Boost Converter 96%`,category:`Power`,prices:{LCSC:2.1,DigiKey:3.8,Mouser:3.5}},{partNumber:`W25Q16JV`,name:`16Mbit SPI NOR Flash`,category:`Memory`,prices:{LCSC:.35,DigiKey:.65,Mouser:.55}},{partNumber:`USB4110-GF-A`,name:`USB Type-C 16Pin SMD`,category:`Connector`,prices:{LCSC:.45,DigiKey:.9,Mouser:.75}},{partNumber:`RC0603FR-07100RL`,name:`100Ω 0603 1% Resistor`,category:`Passive`,prices:{LCSC:.002,DigiKey:.01,Mouser:.008}},{partNumber:`CC0603KRX7R8BB104`,name:`100nF 0603 MLCC`,category:`Passive`,prices:{LCSC:.005,DigiKey:.02,Mouser:.015}},{partNumber:`WS2812B-2020`,name:`RGB Addressable LED 2020`,category:`LED`,prices:{LCSC:.08,DigiKey:.25,Mouser:.2}}],orders:[{id:`ord_1`,userId:`usr_admin`,title:`당근 키패드 v1.2 메인보드`,manufacturer:`JLCPCB`,orderNumber:`JLC-20260922-8921`,layers:4,quantity:5,hasSmt:!0,cost:42.5,currency:`USD`,status:`production`,trackingNumber:``,orderedAt:`2026-09-21`,estimatedDelivery:`2026-09-28`,notes:`매트 블랙 마스크 + ENIG 도금 적용`},{id:`ord_2`,userId:`usr_admin`,title:`ESP32-S3 AIoT 환경 센서 모듈`,manufacturer:`PCBWay`,orderNumber:`W-98234-KR`,layers:2,quantity:10,hasSmt:!1,cost:28,currency:`USD`,status:`shipping`,trackingNumber:`DHL-9842103492`,orderedAt:`2026-09-16`,estimatedDelivery:`2026-09-24`,notes:`통관 완료 후 배송 출발`},{id:`ord_3`,userId:`usr_artwork`,title:`초미니 기계식 스위치 테스터 기판`,manufacturer:`JLCPCB`,orderNumber:`JLC-20260910-1123`,layers:2,quantity:20,hasSmt:!1,cost:15,currency:`USD`,status:`delivered`,trackingNumber:`CJ-6421098421`,orderedAt:`2026-09-10`,estimatedDelivery:`2026-09-18`,notes:`수령 완료 및 1차 조립 성공`},{id:`ord_4`,userId:`usr_circuit`,title:`고속 차동신호 임피던스 매칭 테스트 기판`,manufacturer:`JLCPCB`,orderNumber:`JLC-20260923-0041`,layers:4,quantity:5,hasSmt:!0,cost:65,currency:`USD`,status:`placed`,trackingNumber:``,orderedAt:`2026-09-23`,estimatedDelivery:`2026-10-02`,notes:`거버 검토 통과 후 생산 대기중`}],wikiArticles:[{id:`wiki_1`,title:`KiCad 8.0 기초: DRC 에러 완벽 해결 가이드`,category:`설계 기초`,tags:[`KiCad`,`DRC`,`초보`],authorName:`당근마스터`,views:342,likes:28,updatedAt:`2026-09-20`,content:`## 📌 DRC(Design Rules Check)란?
기판을 실제로 제조하기 전에, 선 폭(Track Width), 이격 거리(Clearance), 비아 홀 직경 등이 제조사의 가공 한계를 만족하는지 검사하는 필수 절차입니다.

### 1. Clearance Violation (이격 거리 위반)
- **원인**: 트레이스와 패드, 또는 비아 간의 거리가 설정한 최소 간격(예: 0.127mm / 5mil)보다 좁음
- **해결책**:
  1. 기판 설정(Board Setup)에서 제조사(JLCPCB 등)의 최소 이격 사양 확인
  2. 트레이스 라우팅 시 '밀어내기(Push and Shove)' 모드 활성화

### 2. Unconnected Items (미연결 네트)
- **원인**: 래츠네스트(Ratsnest) 선이 남아있거나 GND 플레인이 분리되어 섬(Island)이 생김
- **해결책**: 구리 채우기(Zone Fill, B키)를 다시 누르고 끊어진 GND에 스티칭 비아(Stitching Via) 추가

### 3. Track Width Too Small (선 폭 과소)
- 전원선(VCC)은 최소 0.4mm~0.8mm 이상, 일반 신호선은 0.2mm~0.25mm 권장`},{id:`wiki_2`,title:`초보자를 위한 JLCPCB 기판 발주 & SMT 실장 총정리`,category:`발주 가이드`,tags:[`JLCPCB`,`발주`,`SMT`,`거버`],authorName:`회로도장인`,views:521,likes:45,updatedAt:`2026-09-21`,content:`## 🚀 JLCPCB 해외 발주 A to Z
해외 기판 제조사를 처음 이용하시는 메이커분들을 위한 실전 체크리스트입니다.

### 필수 제출 파일 3종
1. **Gerber ZIP**: 드릴 파일(Excellon) 포함 거버 압축 파일
2. **BOM (CSV)**: LCSC 파트넘버(Cxxxx) 기재
3. **CPL / Centroid (CSV)**: 부품의 X, Y 좌표 및 각도(Rotation)

### 자주 발생하는 부품 회전(Rotation) 오류
- IC나 다이오드의 1번 핀 방향이 180도 또는 90도 돌아가는 현상
- **해결법**: 주문 페이지의 DFM 뷰어에서 3D 미리보기를 반드시 눈으로 하나하나 확인하고 각도 보정!`},{id:`wiki_3`,title:`SMD 미세 피치(0603 / QFN) 핸드 솔더링 꿀팁`,category:`납땜 팁`,tags:[`SMD`,`납땜`,`플럭스`,`인두기`],authorName:`아트웍요정`,views:418,likes:39,updatedAt:`2026-09-22`,content:`## 🔥 무연납 시대의 현명한 인두기 사용법
0603 수동소자와 리드 없는 QFN 패키지 납땜을 마스터해봅시다!

### 핵심 준비물
- **플럭스(Flux)**: 젤 타입 무세척(No-Clean) 플럭스 필수
- **칼팁(K-Tip)** 인두기 팁
- 솔더위크(Solder Wick) & 솔더 페이스트

### QFN 납땜 3단계
1. 한쪽 코너 핀을 먼저 납으로 가고정
2. 플럭스를 듬뿍 바른 후 인두기 팁에 소량의 납을 묻혀 드래그 솔더링
3. 중앙 Thermal Pad는 뒷면 스루홀 비아를 통해 납을 주입하거나 열풍기(Hot Air) 사용`}],mentoringSessions:[{id:`mentor_1`,mentorId:`usr_admin`,mentorName:`당근마스터`,mentorTemp:82.5,mentorTags:[`고속신호`,`4층기판`,`KiCad`],status:`active`,title:`KiCad 기반 고속 차동신호(USB/Ethernet) 아트웍 멘토링`,menteeId:`usr_rookie`,menteeName:`메이커꿈나무`,message:`USB Type-C 신호선 90옴 차동 임피던스 맞추는 방법 멘토링 진행중`,sessionsCount:3,createdAt:`2026-09-18`},{id:`mentor_2`,mentorId:`usr_circuit`,mentorName:`회로도장인`,mentorTemp:68,mentorTags:[`전원설계`,`노이즈대책`,`노이즈필터`],status:`recruiting`,title:`스위칭 레귤레이터(SMPS) 전원 노이즈 저감 1:1 멘토링`,menteeId:null,menteeName:null,message:`벅 컨버터 인덕터 배치와 그라운드 루프 최소화 노하우 전수합니다.`,sessionsCount:0,createdAt:`2026-09-22`}]},nr={comment:{icon:Tt,color:`#3B82F6`,bg:`#EFF6FF`},like:{icon:lt,color:`#EC4899`,bg:`#FDF2F8`},market_join:{icon:Nt,color:`#F59E0B`,bg:`#FFFBEB`},event_reminder:{icon:be,color:`#10B981`,bg:`#ECFDF5`},sos_accepted:{icon:fe,color:`#8B5CF6`,bg:`#F5F3FF`}};function rr(e){let t=Date.now()-new Date(e).getTime(),n=Math.floor(t/6e4);if(n<1)return`방금 전`;if(n<60)return`${n}분 전`;let r=Math.floor(n/60);return r<24?`${r}시간 전`:`${Math.floor(r/24)}일 전`}function ir({isOpen:e,onClose:t,onNavigate:n}){let{currentUser:r}=w(),[i,a]=(0,v.useState)([]),o=(0,v.useRef)(null);(0,v.useEffect)(()=>{e&&r&&s()},[e,r]),(0,v.useEffect)(()=>{let n=e=>{o.current&&!o.current.contains(e.target)&&t()};return e&&document.addEventListener(`mousedown`,n),()=>document.removeEventListener(`mousedown`,n)},[e,t]);let s=async()=>{try{let e=await fetch(`/api/notifications?userId=${r.id}`);e.ok&&a(await e.json())}catch(e){console.error(e)}},c=i.filter(e=>!e.isRead).length,l=async e=>{await fetch(`/api/notifications/${e}/read`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({})}),a(t=>t.map(t=>t.id===e?{...t,isRead:!0}:t))},u=async()=>{await fetch(`/api/notifications/read-all`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:r.id})}),a(e=>e.map(e=>({...e,isRead:!0})))},d=e=>{l(e.id),n&&n({project:`workspace`,post:`board`,market:`market`,event:`calendar`}[e.targetType]||`dashboard`),t()};return e?(0,x.jsxs)(`div`,{className:`notif-panel`,ref:o,children:[(0,x.jsxs)(`div`,{className:`notif-header`,children:[(0,x.jsx)(`h4`,{children:`🔔 알림`}),(0,x.jsxs)(`div`,{className:`notif-header-actions`,children:[c>0&&(0,x.jsxs)(`button`,{className:`notif-read-all-btn`,onClick:u,children:[(0,x.jsx)(Ce,{size:14}),` 모두 읽음`]}),(0,x.jsx)(`button`,{className:`notif-close-btn`,onClick:t,children:(0,x.jsx)(Gn,{size:16})})]})]}),(0,x.jsx)(`div`,{className:`notif-list`,children:i.length===0?(0,x.jsxs)(`div`,{className:`notif-empty`,children:[(0,x.jsx)(ge,{size:32,strokeWidth:1.5}),(0,x.jsx)(`p`,{children:`새로운 알림이 없습니다`})]}):i.map(e=>{let t=nr[e.type]||nr.comment,n=t.icon;return(0,x.jsxs)(`div`,{className:`notif-item ${e.isRead?``:`unread`}`,onClick:()=>d(e),children:[(0,x.jsx)(`div`,{className:`notif-icon-box`,style:{background:t.bg},children:(0,x.jsx)(n,{size:16,style:{color:t.color}})}),(0,x.jsxs)(`div`,{className:`notif-content`,children:[(0,x.jsx)(`div`,{className:`notif-title`,children:e.title}),(0,x.jsx)(`div`,{className:`notif-message`,children:e.message}),(0,x.jsx)(`div`,{className:`notif-time`,children:rr(e.createdAt)})]}),!e.isRead&&(0,x.jsx)(`div`,{className:`notif-unread-dot`})]},e.id)})}),(0,x.jsx)(`style`,{children:`
        .notif-panel {
          position: absolute;
          top: 100%;
          right: 0;
          width: 380px;
          max-height: 480px;
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border);
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          animation: notifSlideIn 0.2s ease;
        }
        @keyframes notifSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .notif-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border);
        }
        .notif-header h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-main, #0F172A);
        }
        .notif-header-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .notif-read-all-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }
        .notif-read-all-btn:hover { background: var(--primary-light, #FFF2E8); }
        .notif-close-btn {
          color: var(--text-muted, #64748B);
          padding: 0.25rem;
          border-radius: 6px;
        }
        .notif-close-btn:hover { background: var(--bg-subtle, #F1F5F9); }
        .notif-list {
          overflow-y: auto;
          flex: 1;
        }
        .notif-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 1rem;
          color: var(--text-sub, #94A3B8);
          gap: 0.75rem;
        }
        .notif-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.85rem 1.25rem;
          cursor: pointer;
          transition: background 0.15s;
          position: relative;
        }
        .notif-item:hover { background: var(--bg-subtle, #F1F5F9); }
        .notif-item.unread { background: #FFFBF5; }
        .notif-item.unread:hover { background: #FFF5EB; }
        .notif-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .notif-content { flex: 1; min-width: 0; }
        .notif-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main, #0F172A);
        }
        .notif-message {
          font-size: 0.78rem;
          color: var(--text-muted, #64748B);
          margin-top: 0.15rem;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .notif-time {
          font-size: 0.7rem;
          color: var(--text-sub, #94A3B8);
          margin-top: 0.25rem;
        }
        .notif-unread-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
          margin-top: 0.4rem;
        }
      `})]}):null}function ar({unreadCount:e,onClick:t}){return(0,x.jsxs)(`button`,{className:`notif-bell-btn`,onClick:t,title:`알림`,children:[(0,x.jsx)(ge,{size:18}),e>0&&(0,x.jsx)(`span`,{className:`notif-bell-badge`,children:e>9?`9+`:e}),(0,x.jsx)(`style`,{children:`
        .notif-bell-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          color: var(--text-muted, #64748B);
          background: var(--bg-subtle, #F1F5F9);
          border: 1px solid var(--border);
          transition: all 0.15s;
        }
        .notif-bell-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: var(--primary-light, #FFF2E8);
        }
        .notif-bell-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          min-width: 18px;
          height: 18px;
          background: #EF4444;
          color: white;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          border: 2px solid var(--bg-card, white);
          line-height: 1;
        }
      `})]})}function or({activeTab:e,setActiveTab:t,onOpenAuthModal:n,onOpenNewProjectModal:r,onOpenProfileModal:i}){let{currentUser:a}=w(),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(0),[u,d]=(0,v.useState)(()=>typeof window<`u`&&localStorage.getItem(`carrot_pcb_theme`)===`dark`);(0,v.useEffect)(()=>{document.documentElement.setAttribute(`data-theme`,u?`dark`:`light`)},[u]);let f=()=>{let e=!u;d(e),localStorage.setItem(`carrot_pcb_theme`,e?`dark`:`light`),document.documentElement.setAttribute(`data-theme`,e?`dark`:`light`)};(0,v.useEffect)(()=>{a&&fetch(`/api/notifications?userId=${a.id}`).then(e=>e.json()).then(e=>l(e.filter(e=>!e.isRead).length)).catch(()=>{})},[a,o]);let p=a?er(a.solderingTemp):null,m=[{id:`workspace`,label:`작업실`,icon:ht},{id:`tools`,label:`설계 계산기`,icon:ve},{id:`gerber`,label:`거버 뷰어`,icon:Ye},{id:`notepad`,label:`회로 스케치`,icon:zt},{id:`bom`,label:`BOM 관리`,icon:Ze},{id:`orders`,label:`발주 트래커`,icon:jn},{id:`market`,label:`나눔 & 공구`,icon:Nt},{id:`equipment`,label:`공유 장비`,icon:Un},{id:`calendar`,label:`일정 & 밋업`,icon:be}],h=[{id:`board`,label:`커뮤니티`,icon:Tt},{id:`chat`,label:`실시간 채팅`,icon:Dt},{id:`challenge`,label:`챌린지`,icon:kn},{id:`wiki`,label:`지식 위키`,icon:F},{id:`mentoring`,label:`멘토링`,icon:rt},{id:`stats`,label:`활동 통계`,icon:Tn}];return(0,x.jsxs)(`header`,{className:`header-bar`,children:[(0,x.jsxs)(`div`,{className:`header-container`,children:[(0,x.jsxs)(`div`,{className:`logo-container`,onClick:()=>t(`dashboard`),style:{cursor:`pointer`},title:`당근 PCB 메이커스 홈으로 이동`,role:`button`,tabIndex:0,children:[(0,x.jsxs)(`div`,{className:`logo-icon-box`,children:[(0,x.jsx)(`span`,{className:`carrot-emoji`,children:`🥕`}),(0,x.jsx)(ze,{className:`pcb-icon`,size:18})]}),(0,x.jsxs)(`div`,{className:`logo-text-col`,children:[(0,x.jsx)(`div`,{className:`logo-brand-main`,children:`당근 PCB`}),(0,x.jsx)(`div`,{className:`logo-brand-badge`,children:`메이커스`})]})]}),(0,x.jsxs)(`div`,{className:`header-nav-columns`,children:[(0,x.jsx)(`div`,{className:`header-nav-row header-nav-row-1`,children:(0,x.jsx)(`nav`,{className:`nav-menu`,children:m.map(n=>{let r=n.icon,i=e===n.id;return(0,x.jsxs)(`button`,{onClick:()=>t(n.id),className:`nav-btn ${i?`active`:``}`,children:[(0,x.jsx)(r,{size:16}),(0,x.jsx)(`span`,{children:n.label})]},n.id)})})}),(0,x.jsxs)(`div`,{className:`header-nav-row header-nav-row-2`,children:[(0,x.jsx)(`nav`,{className:`nav-menu`,children:h.map(n=>{let r=n.icon,i=e===n.id;return(0,x.jsxs)(`button`,{onClick:()=>t(n.id),className:`nav-btn ${i?`active`:``}`,children:[(0,x.jsx)(r,{size:16}),(0,x.jsx)(`span`,{children:n.label})]},n.id)})}),(0,x.jsxs)(`div`,{className:`bottom-row-actions`,children:[(0,x.jsxs)(`button`,{className:`quick-add-btn`,onClick:r,title:`새 작업물 등록`,children:[(0,x.jsx)(Ne,{size:15}),(0,x.jsx)(`span`,{children:`작업 등록`})]}),a?(0,x.jsxs)(`div`,{className:`user-profile-widget`,children:[(0,x.jsx)(`img`,{src:a.avatar,alt:a.name,className:`user-avatar`,onClick:i,style:{cursor:`pointer`},title:`메이커 프로필 & 뱃지 도감 보기`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsxs)(`div`,{className:`user-info-text`,onClick:i,style:{cursor:`pointer`},children:[(0,x.jsx)(`span`,{className:`user-name`,children:a.name?.replace(/\s*\(운영진\)\s*/g,``)}),(0,x.jsxs)(`span`,{className:`user-role-badge ${a.role}`,children:[`(`,a.role===`admin`?`운영진 👑`:`정회원 🌱`,`)`]})]}),(0,x.jsxs)(`button`,{className:`temp-pill-btn`,onClick:i,title:`당근 납땜 온도 & 뱃지 도감 열기`,children:[p&&(0,x.jsx)(`span`,{className:`level-icon`,children:p.icon}),(0,x.jsx)($e,{size:13,className:`temp-flame-icon`}),(0,x.jsxs)(`span`,{children:[Number(a.solderingTemp||36.5).toFixed(1),`℃`]})]}),(0,x.jsxs)(`button`,{className:`switch-account-btn`,onClick:n,title:`계정 간편 전환 / 회원가입`,children:[(0,x.jsx)(qt,{size:13}),(0,x.jsx)(`span`,{children:`계정 전환`})]})]}):(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:n,children:[(0,x.jsx)(yt,{size:15}),(0,x.jsx)(`span`,{children:`로그인 / 등록`})]}),(0,x.jsxs)(`div`,{style:{position:`relative`},children:[(0,x.jsx)(ar,{unreadCount:c,onClick:()=>s(!o)}),(0,x.jsx)(ir,{isOpen:o,onClose:()=>s(!1),onNavigate:e=>t(e)})]}),(0,x.jsx)(`button`,{className:`dark-toggle-btn`,onClick:f,title:u?`라이트 모드`:`다크 모드`,children:u?(0,x.jsx)(_n,{size:16}):(0,x.jsx)(jt,{size:16})}),(0,x.jsxs)(`button`,{className:`admin-entry-btn ${e===`admin`?`active`:``}`,onClick:()=>t(`admin`),title:`운영진 관리자 화면`,children:[(0,x.jsx)(sn,{size:15}),(0,x.jsx)(`span`,{children:`관리자 화면`}),(0,x.jsx)(`span`,{className:`admin-pill-tag`,children:`ADMIN`})]})]})]})]})]}),(0,x.jsx)(`style`,{children:`
        .header-bar {
          background: var(--bg-card, #ffffff);
          border-bottom: 1px solid var(--border);
          position: relative;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
        }
        .header-container {
          max-width: 1480px;
          margin: 0 auto;
          padding: 0.55rem 1.25rem 0.5rem;
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }
        /* 좌측: 두 줄에 걸쳐서 안정적인 모습으로 공간을 갖는 로고 */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.35rem 1.1rem 0.35rem 0.2rem;
          border-right: 1.5px solid var(--border, #E2E8F0);
          flex-shrink: 0;
          user-select: none;
          transition: opacity 0.15s ease;
        }
        .logo-container:hover {
          opacity: 0.95;
        }
        .logo-container:hover .logo-icon-box {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(255, 111, 15, 0.25);
        }
        .logo-container:hover .logo-brand-main {
          color: var(--primary, #FF6F0F);
        }
        .logo-icon-box {
          position: relative;
          width: 50px;
          height: 50px;
          background: #FFF2E8;
          border: 1.5px solid #FFD8BE;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 5px rgba(255, 111, 15, 0.12);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .carrot-emoji {
          font-size: 1.7rem;
        }
        .pcb-icon {
          position: absolute;
          bottom: -3px;
          right: -3px;
          color: var(--pcb-green, #10B981);
          background: white;
          border-radius: 50%;
          padding: 2px;
          border: 1.5px solid #CCFBF1;
        }
        .logo-text-col {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .logo-brand-main {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--text-main, #0F172A);
          letter-spacing: -0.02em;
          white-space: nowrap;
          line-height: 1.1;
          transition: color 0.15s ease;
        }
        .logo-brand-badge {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--primary, #FF6F0F);
          background: var(--primary-light, #FFF2E8);
          padding: 2px 8px;
          border-radius: 6px;
          width: fit-content;
          border: 1px solid #FFD8BE;
          letter-spacing: 0.08em;
          line-height: 1.25;
        }
        /* 우측: 2개 줄로 구성된 네비게이션 컬럼 */
        .header-nav-columns {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 0;
        }
        .header-nav-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
        }
        .header-nav-row-1 {
          justify-content: flex-start;
        }
        .header-nav-row-2 {
          justify-content: space-between;
          padding-top: 0.35rem;
          border-top: 1px dashed var(--border, #F1F5F9);
        }
        .bottom-row-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-left: auto;
          flex-shrink: 0;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: var(--bg-sub, #F8FAFC);
          padding: 0.25rem 0.35rem;
          border-radius: 10px;
          border: 1px solid var(--border, #E2E8F0);
          flex-shrink: 1;
          white-space: nowrap;
          overflow-x: auto;
        }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-main, #475569);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .nav-btn span {
          white-space: nowrap;
          word-break: keep-all;
          display: inline-block;
          font-size: 0.92rem;
          font-weight: 700;
        }
        .nav-btn:hover {
          color: var(--primary);
          background: var(--bg-card, #FFFFFF);
        }
        .nav-btn.active {
          background: var(--bg-card, #FFFFFF);
          color: var(--primary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .admin-nav-btn {
          color: #7C3AED;
        }
        .admin-nav-btn.active {
          color: #6D28D9;
        }
        .admin-pill {
          background: #EDE9FE;
          color: #6D28D9;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        /* Actions (Bottom Row, Right Aligned) */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .quick-add-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary-light);
          color: var(--primary-dark);
          border: 1px solid rgba(255, 111, 15, 0.25);
          padding: 0.5rem 0.95rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 700;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .quick-add-btn span {
          white-space: nowrap;
          word-break: keep-all;
        }
        .quick-add-btn:hover {
          background: var(--primary);
          color: white;
        }
        .user-profile-widget {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          background: #F8FAFC;
          padding: 0.35rem 0.7rem 0.35rem 0.45rem;
          border-radius: 30px;
          border: 1px solid var(--border);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          border: 1.5px solid #FFD8BE;
          flex-shrink: 0;
        }
        .user-info-text {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          white-space: nowrap;
          line-height: 1;
        }
        .user-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1E293B;
          white-space: nowrap;
          word-break: keep-all;
        }
        .user-role-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748B;
          white-space: nowrap;
          word-break: keep-all;
        }
        .user-role-badge.admin {
          color: #EA580C;
        }
        .temp-pill-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          color: #EA580C;
          border: 1px solid #FED7AA;
          padding: 0.25rem 0.6rem;
          border-radius: 14px;
          font-size: 0.78rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
          box-shadow: 0 1px 3px rgba(234, 88, 12, 0.1);
        }
        .temp-pill-btn:hover {
          background: #EA580C;
          color: white;
          border-color: #EA580C;
        }
        .temp-flame-icon {
          color: #EA580C;
        }
        .temp-pill-btn:hover .temp-flame-icon {
          color: white;
        }
        .switch-account-btn {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: #FFFFFF;
          border: 1px solid #CBD5E1;
          color: #475569;
          padding: 0.35rem 0.65rem;
          border-radius: 16px;
          font-size: 0.78rem;
          font-weight: 600;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .switch-account-btn span {
          white-space: nowrap;
          word-break: keep-all;
        }
        .switch-account-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .admin-entry-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #F5F3FF;
          color: #6D28D9;
          border: 1.5px solid #DDD6FE;
          padding: 0.45rem 0.85rem;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .admin-entry-btn:hover {
          background: #7C3AED;
          color: white;
          border-color: #7C3AED;
        }
        .admin-entry-btn.active {
          background: #7C3AED;
          color: white;
          border-color: #6D28D9;
          box-shadow: 0 2px 8px rgba(124, 58, 237, 0.25);
        }
        .admin-pill-tag {
          background: #EDE9FE;
          color: #6D28D9;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.1rem 0.35rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .admin-entry-btn:hover .admin-pill-tag,
        .admin-entry-btn.active .admin-pill-tag {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }
        .level-icon {
          font-size: 0.85rem;
          line-height: 1;
        }
        .dark-toggle-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          color: var(--text-muted, #64748B);
          background: var(--bg-subtle, #F1F5F9);
          border: 1px solid var(--border);
          transition: all 0.15s;
        }
        .dark-toggle-btn:hover {
          color: #F59E0B;
          border-color: #F59E0B;
          background: #FFFBEB;
        }
        @media (max-width: 1080px) {
          .header-top-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .nav-menu {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `})]})}function sr({setActiveTab:e,onOpenNewProject:t}){let{currentUser:n,users:r}=w(),[i,a]=(0,v.useState)(null),[o,s]=(0,v.useState)([]),[c,l]=(0,v.useState)(null),[u,d]=(0,v.useState)(null);return(0,v.useEffect)(()=>{(async()=>{try{let[e,t,n,r]=await Promise.all([fetch(`/api/stats`),fetch(`/api/projects?publicOnly=true`),fetch(`/api/events`),fetch(`/api/posts?boardType=notice`)]);if(e.ok&&a(await e.json()),t.ok){let e=await t.json();s(e.slice(0,3))}if(n.ok){let e=await n.json();e.length>0&&l(e[0])}if(r.ok){let e=await r.json();e.length>0&&d(e[0])}}catch(e){console.error(`Dashboard data load error:`,e)}})()},[]),(0,x.jsxs)(`div`,{className:`dashboard-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`hero-banner`,children:[(0,x.jsxs)(`div`,{className:`hero-content`,children:[(0,x.jsxs)(`div`,{className:`hero-pill-badge`,children:[(0,x.jsx)(`span`,{className:`hero-pill-dot`}),(0,x.jsx)(`span`,{children:`우리 동네 하드웨어 메이커들의 아지트`})]}),(0,x.jsxs)(`h1`,{className:`hero-title`,children:[`당근에서 만난 이웃들과 함께`,(0,x.jsx)(`br`,{}),(0,x.jsx)(`span`,{className:`hero-highlight`,children:`나만의 PCB 회로를 설계하고 제작하세요`})]}),(0,x.jsxs)(`p`,{className:`hero-subtitle`,children:[`회로도 검토, 4층 기판 아트웍, 부품 공동구매, 오프라인 SMD 납땜 워크숍까지!`,(0,x.jsx)(`br`,{}),`초보 메이커부터 현업 하드웨어 엔지니어까지 함께 배우고 성장하는 당근 PCB 모임입니다.`]}),(0,x.jsxs)(`div`,{className:`hero-cta-buttons`,children:[(0,x.jsxs)(`button`,{className:`btn-primary hero-btn`,onClick:t,children:[(0,x.jsx)(Ne,{size:18}),(0,x.jsx)(`span`,{children:`내 PCB 작업 등록하기`})]}),(0,x.jsxs)(`button`,{className:`btn-secondary hero-btn-sub`,onClick:()=>e(`workspace`),children:[(0,x.jsx)(ht,{size:18}),(0,x.jsx)(`span`,{children:`공유 갤러리 둘러보기`})]}),(0,x.jsxs)(`button`,{className:`btn-secondary hero-btn-sub`,onClick:()=>e(`chat`),children:[(0,x.jsx)(Tt,{size:18}),(0,x.jsx)(`span`,{children:`실시간 채팅 참여`})]})]})]}),(0,x.jsx)(`div`,{className:`hero-art-side`,children:(0,x.jsxs)(`div`,{className:`circuit-box`,children:[(0,x.jsxs)(`div`,{className:`circuit-chip`,children:[(0,x.jsx)(`span`,{className:`chip-name`,children:`RP2040 / ESP32`}),(0,x.jsx)(`div`,{className:`chip-pins-top`}),(0,x.jsx)(`div`,{className:`chip-pins-bottom`})]}),(0,x.jsxs)(`div`,{className:`circuit-badge-status`,children:[(0,x.jsx)(`span`,{className:`pulse-dot`}),` 당근 PCB Lab Live`]})]})})]}),(0,x.jsxs)(`div`,{className:`stats-highlight-grid`,children:[(0,x.jsxs)(`div`,{className:`stat-item-box`,onClick:()=>e(`admin`),children:[(0,x.jsx)(`div`,{className:`stat-icon-wrapper orange`,children:(0,x.jsx)(Vn,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-text-meta`,children:[(0,x.jsxs)(`span`,{className:`stat-num`,children:[i?.totalMembers||r.length,`명`]}),(0,x.jsx)(`span`,{className:`stat-label`,children:`활동 모임 회원`})]})]}),(0,x.jsxs)(`div`,{className:`stat-item-box`,onClick:()=>e(`workspace`),children:[(0,x.jsx)(`div`,{className:`stat-icon-wrapper green`,children:(0,x.jsx)(ze,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-text-meta`,children:[(0,x.jsxs)(`span`,{className:`stat-num`,children:[i?.totalProjects||3,`개`]}),(0,x.jsx)(`span`,{className:`stat-label`,children:`진행 중인 PCB 프로젝트`})]})]}),(0,x.jsxs)(`div`,{className:`stat-item-box`,onClick:()=>e(`calendar`),children:[(0,x.jsx)(`div`,{className:`stat-icon-wrapper blue`,children:(0,x.jsx)(be,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-text-meta`,children:[(0,x.jsxs)(`span`,{className:`stat-num`,children:[i?.upcomingEvents||3,`건`]}),(0,x.jsx)(`span`,{className:`stat-label`,children:`예정된 오프라인 밋업`})]})]}),(0,x.jsxs)(`div`,{className:`stat-item-box`,onClick:()=>e(`board`),children:[(0,x.jsx)(`div`,{className:`stat-icon-wrapper purple`,children:(0,x.jsx)(Tt,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-text-meta`,children:[(0,x.jsxs)(`span`,{className:`stat-num`,children:[i?.totalPosts||5,`개`]}),(0,x.jsx)(`span`,{className:`stat-label`,children:`지식 공유 & 건의 게시글`})]})]})]}),(0,x.jsxs)(`div`,{className:`dashboard-columns-2`,children:[c&&(0,x.jsxs)(`div`,{className:`dashboard-card event-highlight-card`,children:[(0,x.jsxs)(`div`,{className:`dash-card-header`,children:[(0,x.jsxs)(`div`,{className:`dash-card-badge-row`,children:[(0,x.jsx)(`span`,{className:`badge badge-orange dash-long-badge`,children:`⏰ D-Day 임박 모임`}),(0,x.jsxs)(`button`,{className:`link-arrow-btn`,onClick:()=>e(`calendar`),children:[(0,x.jsx)(`span`,{children:`전체 일정`}),(0,x.jsx)(Te,{size:15})]})]}),(0,x.jsx)(`h3`,{className:`dash-card-title`,children:c.title})]}),(0,x.jsx)(`p`,{className:`dash-event-desc`,children:c.description}),(0,x.jsxs)(`div`,{className:`dash-event-details`,children:[(0,x.jsxs)(`div`,{className:`dash-detail-row`,children:[(0,x.jsx)(be,{size:16,className:`text-orange`}),(0,x.jsxs)(`span`,{children:[c.date,` (`,c.time,`)`]})]}),(0,x.jsxs)(`div`,{className:`dash-detail-row`,children:[(0,x.jsx)(xt,{size:16,className:`text-orange`}),(0,x.jsx)(`span`,{children:c.location})]}),(0,x.jsxs)(`div`,{className:`dash-detail-row`,children:[(0,x.jsx)(Vn,{size:16,className:`text-orange`}),(0,x.jsxs)(`span`,{children:[`참석 신청 인원: `,(0,x.jsx)(`strong`,{children:c.attendees?.length||0}),` / `,c.maxAttendees,`명`]})]})]}),(0,x.jsx)(`div`,{className:`dash-event-action-bar`,children:(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>e(`calendar`),children:[(0,x.jsx)(`span`,{children:`참가 신청 현황 확인하기`}),(0,x.jsx)(ue,{size:16})]})})]}),u&&(0,x.jsxs)(`div`,{className:`dashboard-card notice-highlight-card`,children:[(0,x.jsxs)(`div`,{className:`dash-card-header`,children:[(0,x.jsxs)(`div`,{className:`dash-card-badge-row`,children:[(0,x.jsx)(`span`,{className:`badge badge-purple dash-long-badge`,children:`📢 운영진 필독 공지`}),(0,x.jsxs)(`button`,{className:`link-arrow-btn`,onClick:()=>e(`board`),children:[(0,x.jsx)(`span`,{children:`전체 게시판`}),(0,x.jsx)(Te,{size:15})]})]}),(0,x.jsx)(`h3`,{className:`dash-card-title`,children:u.title})]}),(0,x.jsxs)(`p`,{className:`dash-notice-preview`,children:[u.content.slice(0,180),`...`]}),(0,x.jsxs)(`div`,{className:`dash-notice-footer`,children:[(0,x.jsxs)(`div`,{className:`dash-author-meta`,children:[(0,x.jsx)(`img`,{src:u.authorAvatar,alt:u.authorName,className:`author-avatar-xs`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/identicon/svg?seed=admin`}}),(0,x.jsx)(`span`,{children:u.authorName}),(0,x.jsx)(`span`,{className:`post-date`,children:new Date(u.createdAt).toLocaleDateString(`ko-KR`)})]}),(0,x.jsx)(`button`,{className:`read-more-btn`,onClick:()=>e(`board`),children:`전문 읽기 →`})]})]})]}),(0,x.jsxs)(`div`,{className:`dash-projects-section`,children:[(0,x.jsxs)(`div`,{className:`dash-section-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{className:`dash-section-title`,children:`✨ 이웃 메이커들의 최신 공개 PCB 작업물`}),(0,x.jsx)(`p`,{className:`dash-section-sub`,children:`회원들이 직접 기획하고 배선한 회로도를 감상하고 피드백을 나눠보세요.`})]}),(0,x.jsxs)(`button`,{className:`link-arrow-btn`,onClick:()=>e(`workspace`),children:[`모든 작업물 보기 `,(0,x.jsx)(Te,{size:16})]})]}),(0,x.jsx)(`div`,{className:`dash-projects-grid`,children:o.map(t=>(0,x.jsxs)(`div`,{className:`dash-project-card`,onClick:()=>e(`workspace`),children:[(0,x.jsxs)(`div`,{className:`dash-project-img-box`,children:[(0,x.jsx)(`img`,{src:t.images?.[0]||`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80`,alt:t.title}),(0,x.jsx)(`span`,{className:`dash-status-badge`,children:t.status})]}),(0,x.jsxs)(`div`,{className:`dash-project-info`,children:[(0,x.jsxs)(`div`,{className:`dash-project-author`,children:[(0,x.jsx)(`img`,{src:t.userAvatar,alt:t.userName}),(0,x.jsx)(`span`,{children:t.userName})]}),(0,x.jsx)(`h4`,{className:`dash-prj-title`,children:t.title}),(0,x.jsxs)(`div`,{className:`dash-prj-footer`,children:[(0,x.jsxs)(`span`,{className:`dash-like-badge`,children:[(0,x.jsx)(lt,{size:13,fill:`#FF6F0F`,color:`#FF6F0F`}),` `,t.likes||0]}),(0,x.jsxs)(`span`,{className:`dash-cmt-count`,children:[`댓글 `,t.comments?.length||0]})]})]})]},t.id))})]}),(0,x.jsx)(`style`,{children:`
        .hero-banner {
          background: linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 60%, #F0FDFA 100%);
          border: 1px solid #FFEDD5;
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          margin-bottom: 2rem;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 10px 30px -10px rgba(255, 111, 15, 0.12);
        }
        @media (max-width: 900px) {
          .hero-banner {
            grid-template-columns: 1fr;
            padding: 2rem 1.5rem;
          }
          .hero-art-side {
            display: none;
          }
        }
        .hero-pill-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFE8D6;
          color: var(--primary-dark);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        .hero-pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
        }
        .hero-title {
          font-size: 2.1rem;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .hero-highlight {
          color: var(--primary);
        }
        .hero-subtitle {
          font-size: 1rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.75rem;
        }
        .hero-cta-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .hero-btn {
          padding: 0.75rem 1.4rem;
          font-size: 0.95rem;
        }
        .hero-btn-sub {
          padding: 0.75rem 1.25rem;
          font-size: 0.92rem;
        }
        /* Circuit Graphic */
        .circuit-box {
          background: #0F172A;
          border-radius: var(--radius-lg);
          height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 15px 30px rgba(15, 23, 42, 0.25);
          border: 2px solid #1E293B;
        }
        .circuit-chip {
          background: #1E293B;
          border: 1.5px solid #0D9488;
          color: #A7F3D0;
          font-family: var(--font-mono);
          padding: 1.5rem 2rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 1.05rem;
          box-shadow: 0 0 25px rgba(13, 148, 136, 0.3);
        }
        .circuit-badge-status {
          position: absolute;
          bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #6EE7B7;
          font-size: 0.78rem;
          font-weight: 600;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          box-shadow: 0 0 8px #10B981;
        }
        /* Stats Grid */
        .stats-highlight-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .stat-item-box {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: var(--shadow-sm);
        }
        .stat-item-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stat-icon-wrapper.orange { background: #FFF2E8; color: var(--primary); }
        .stat-icon-wrapper.green { background: #CCFBF1; color: var(--pcb-green); }
        .stat-icon-wrapper.blue { background: #EFF6FF; color: #2563EB; }
        .stat-icon-wrapper.purple { background: #F3E8FF; color: #7C3AED; }
        .stat-text-meta {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-size: 1.4rem;
          font-weight: 900;
          color: #0F172A;
          line-height: 1.2;
        }
        .stat-label {
          font-size: 0.82rem;
          color: #64748B;
          font-weight: 600;
        }
        /* Dashboard 2-Columns */
        .dashboard-columns-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        @media (max-width: 960px) {
          .dashboard-columns-2 {
            grid-template-columns: 1fr;
          }
        }
        .dashboard-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
        }
        .dash-card-header {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }
        .dash-card-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.65rem;
        }
        .dash-long-badge {
          min-width: 220px;
          padding: 0.35rem 1.25rem;
          font-size: 0.82rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          white-space: nowrap;
          border-radius: 9999px;
        }
        .dash-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
        }
        .link-arrow-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.82rem;
          font-weight: 700;
          color: #64748B;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .link-arrow-btn span {
          white-space: nowrap;
          word-break: keep-all;
        }
        .link-arrow-btn:hover {
          color: var(--primary);
        }
        .dash-event-desc, .dash-notice-preview {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .dash-event-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: #F8FAFC;
          padding: 0.85rem 1rem;
          border-radius: 8px;
          margin-bottom: 1.25rem;
        }
        .dash-detail-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.83rem;
          color: #334155;
        }
        .text-orange {
          color: var(--primary);
        }
        .dash-event-action-bar {
          margin-top: auto;
        }
        .dash-notice-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          border-top: 1px solid #F1F5F9;
          padding-top: 0.75rem;
        }
        .dash-author-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: #334155;
          font-weight: 600;
        }
        .author-avatar-xs {
          width: 22px;
          height: 22px;
          border-radius: 50%;
        }
        .read-more-btn {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary);
        }
        /* Projects Section */
        .dash-projects-section {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          box-shadow: var(--shadow-sm);
        }
        .dash-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }
        .dash-section-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
        }
        .dash-section-sub {
          font-size: 0.88rem;
          color: #64748B;
          margin-top: 0.2rem;
        }
        .dash-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
        }
        .dash-project-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.2s;
        }
        .dash-project-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .dash-project-img-box {
          position: relative;
          height: 150px;
          background: #0F172A;
        }
        .dash-project-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .dash-status-badge {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          background: rgba(15, 23, 42, 0.8);
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .dash-project-info {
          padding: 1rem;
        }
        .dash-project-author {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          color: #64748B;
          font-weight: 600;
          margin-bottom: 0.4rem;
        }
        .dash-project-author img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
        .dash-prj-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.75rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .dash-prj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #94A3B8;
        }
        .dash-like-badge {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-weight: 700;
          color: var(--primary);
        }
      `})]})}function cr({onOpenNewProject:e,initialFilter:t=`all`}){let{currentUser:n}=w(),[r,i]=(0,v.useState)([]),[a,o]=(0,v.useState)(`all`),[s,c]=(0,v.useState)(`all`),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)(null),[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)(!1),_=async()=>{try{let e=await fetch(`/api/projects`);if(e.ok){let t=await e.json();i(t)}}catch(e){console.error(`Failed to fetch projects:`,e)}};(0,v.useEffect)(()=>{_()},[]);let y=async e=>{if(n)try{let t=await fetch(`/api/projects/${e}/like`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:n.id})});if(t.ok){let n=await t.json();i(t=>t.map(t=>t.id===e?{...t,likes:n.likes,likedUsers:n.likedUsers}:t)),d?.id===e&&f(e=>({...e,likes:n.likes,likedUsers:n.likedUsers}))}}catch(e){console.error(`Failed to like project:`,e)}},b=async e=>{if(e.preventDefault(),p.trim()&&n&&d){g(!0);try{let e=await fetch(`/api/projects/${d.id}/comments`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:n.id,userName:n.name,userAvatar:n.avatar,text:p.trim()})});if(e.ok){let t=await e.json(),n=[...d.comments||[],t];f(e=>({...e,comments:n})),i(e=>e.map(e=>e.id===d.id?{...e,comments:n}:e)),m(``)}}catch(e){console.error(`Failed to add comment:`,e)}finally{g(!1)}}},S=async e=>{try{let t=await fetch(`/api/projects/${e.id}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({isPublic:!e.isPublic})});if(t.ok){let n=await t.json();i(t=>t.map(t=>t.id===e.id?n:t)),d?.id===e.id&&f(n)}}catch(e){console.error(`Failed to toggle share:`,e)}},C=async e=>{if(window.confirm(`정말 이 프로젝트를 삭제하시겠습니까?`))try{(await fetch(`/api/projects/${e}`,{method:`DELETE`})).ok&&(i(t=>t.filter(t=>t.id!==e)),d?.id===e&&f(null))}catch(e){console.error(`Failed to delete project:`,e)}},T=r.filter(e=>{if(a===`my`){if(e.userId!==n?.id)return!1}else if(!e.isPublic&&e.userId!==n?.id)return!1;if(s!==`all`&&e.status!==s)return!1;if(l.trim()){let t=l.toLowerCase(),n=e.title?.toLowerCase().includes(t),r=e.description?.toLowerCase().includes(t),i=e.tags?.some(e=>e.toLowerCase().includes(t));if(!n&&!r&&!i)return!1}return!0}),E=e=>{switch(e){case`조립완료`:return`badge-green`;case`샘플발주`:return`badge-blue`;case`아트웍`:return`badge-orange`;case`회로설계`:return`badge-purple`;default:return`badge-gray`}};return(0,x.jsxs)(`div`,{className:`workspace-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`workspace-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`section-title`,children:[(0,x.jsx)(`span`,{className:`title-icon`,children:`⚡`}),` PCB 작업실 & 공유 갤러리`]}),(0,x.jsx)(`p`,{className:`section-desc`,children:`회원 개인의 PCB 설계 작업물을 저장하고, 커뮤니티에 공개하여 피드백 및 회로 리뷰를 나눌 수 있습니다.`})]}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:e,children:[(0,x.jsx)(Ut,{size:18}),(0,x.jsx)(`span`,{children:`새 PCB 작업 등록`})]})]}),(0,x.jsxs)(`div`,{className:`workspace-controls`,children:[(0,x.jsxs)(`div`,{className:`tab-pills`,children:[(0,x.jsxs)(`button`,{className:`pill-btn ${a===`all`?`active`:``}`,onClick:()=>o(`all`),children:[(0,x.jsx)(tt,{size:16}),(0,x.jsx)(`span`,{children:`모임 공유 갤러리`}),(0,x.jsx)(`span`,{className:`count-pill`,children:r.filter(e=>e.isPublic).length})]}),(0,x.jsxs)(`button`,{className:`pill-btn ${a===`my`?`active`:``}`,onClick:()=>o(`my`),children:[(0,x.jsx)(_t,{size:16}),(0,x.jsx)(`span`,{children:`내 작업 보관함`}),(0,x.jsx)(`span`,{className:`count-pill`,children:r.filter(e=>e.userId===n?.id).length})]})]}),(0,x.jsxs)(`div`,{className:`filter-search-row`,children:[(0,x.jsx)(`div`,{className:`status-chips`,children:[`all`,`구상/스케치`,`회로설계`,`아트웍`,`샘플발주`,`조립완료`].map(e=>(0,x.jsx)(`button`,{className:`status-chip ${s===e?`active`:``}`,onClick:()=>c(e),children:e===`all`?`전체 상태`:e},e))}),(0,x.jsxs)(`div`,{className:`search-box`,children:[(0,x.jsx)(en,{size:16,className:`search-icon`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`프로젝트, 태그, 부품명 검색...`,value:l,onChange:e=>u(e.target.value),className:`search-input`})]})]})]}),T.length===0?(0,x.jsxs)(`div`,{className:`empty-state-box`,children:[(0,x.jsx)(`div`,{className:`empty-icon`,children:`🔌`}),(0,x.jsx)(`h3`,{children:`해당 조건의 PCB 작업물이 없습니다`}),(0,x.jsx)(`p`,{children:`새로운 아이디어를 등록하거나 전체 갤러리를 탐색해보세요.`}),(0,x.jsxs)(`button`,{className:`btn-primary`,style:{marginTop:`1rem`},onClick:e,children:[(0,x.jsx)(Ut,{size:16}),` 새 작업 등록하기`]})]}):(0,x.jsx)(`div`,{className:`projects-grid`,children:T.map(e=>{let t=n?.id===e.userId,r=e.likedUsers?.includes(n?.id);return(0,x.jsxs)(`div`,{className:`project-card`,onClick:()=>f(e),children:[(0,x.jsxs)(`div`,{className:`project-thumbnail-wrapper`,children:[(0,x.jsx)(`img`,{src:e.images?.[0]||`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80`,alt:e.title,className:`project-thumbnail`}),(0,x.jsxs)(`div`,{className:`thumbnail-badges`,children:[(0,x.jsx)(`span`,{className:`badge ${E(e.status)}`,children:e.status}),e.isPublic?(0,x.jsxs)(`span`,{className:`badge badge-orange`,title:`전체 회원에게 공개됨`,children:[(0,x.jsx)(tt,{size:11}),` 공유중`]}):(0,x.jsxs)(`span`,{className:`badge badge-gray`,title:`나만 보는 비공개 작업`,children:[(0,x.jsx)(_t,{size:11}),` 개인보관`]})]}),e.images?.length>1&&(0,x.jsxs)(`span`,{className:`image-count-tag`,children:[`+`,e.images.length-1,`장`]})]}),(0,x.jsxs)(`div`,{className:`project-card-body`,children:[(0,x.jsxs)(`div`,{className:`project-author-row`,children:[(0,x.jsx)(`img`,{src:e.userAvatar,alt:e.userName,className:`author-avatar-sm`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=user`}}),(0,x.jsx)(`span`,{className:`author-name`,children:e.userName}),(0,x.jsx)(`span`,{className:`post-date`,children:new Date(e.createdAt).toLocaleDateString(`ko-KR`,{month:`short`,day:`numeric`})})]}),(0,x.jsx)(`h3`,{className:`project-card-title`,children:e.title}),(0,x.jsx)(`p`,{className:`project-card-desc`,children:e.description}),(0,x.jsx)(`div`,{className:`project-tags`,children:e.tags?.map((e,t)=>(0,x.jsxs)(`span`,{className:`project-tag`,children:[`#`,e]},t))}),(0,x.jsxs)(`div`,{className:`project-card-footer`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`interaction-buttons`,children:[(0,x.jsxs)(`button`,{className:`like-btn ${r?`liked`:``}`,onClick:()=>y(e.id),children:[(0,x.jsx)(lt,{size:16,fill:r?`#FF6F0F`:`none`,color:r?`#FF6F0F`:`#64748B`}),(0,x.jsx)(`span`,{children:e.likes||0})]}),(0,x.jsxs)(`button`,{className:`cmt-count-btn`,children:[(0,x.jsx)(Tt,{size:16,color:`#64748B`}),(0,x.jsx)(`span`,{children:e.comments?.length||0})]})]}),t&&(0,x.jsx)(`div`,{className:`owner-action-group`,children:(0,x.jsxs)(`button`,{className:`share-toggle-btn`,onClick:()=>S(e),title:e.isPublic?`비공개로 전환`:`커뮤니티에 공개`,children:[(0,x.jsx)(an,{size:15}),(0,x.jsx)(`span`,{children:e.isPublic?`공개중`:`공개하기`})]})})]})]})]},e.id)})}),d&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>f(null),children:(0,x.jsxs)(`div`,{className:`modal-content project-detail-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`detail-header-meta`,children:[(0,x.jsx)(`span`,{className:`badge ${E(d.status)}`,children:d.status}),d.isPublic?(0,x.jsxs)(`span`,{className:`badge badge-orange`,children:[(0,x.jsx)(tt,{size:12}),` 커뮤니티 공유됨`]}):(0,x.jsxs)(`span`,{className:`badge badge-gray`,children:[(0,x.jsx)(_t,{size:12}),` 개인 비공개 작업`]}),(0,x.jsxs)(`span`,{className:`detail-date`,children:[`등록일: `,new Date(d.createdAt).toLocaleDateString(`ko-KR`)]})]}),(0,x.jsxs)(`div`,{className:`detail-header-right`,children:[n?.id===d.userId&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`button`,{className:`btn-secondary`,style:{padding:`0.4rem 0.75rem`,fontSize:`0.8rem`},onClick:()=>S(d),children:[(0,x.jsx)(an,{size:14}),d.isPublic?`비공개 전환`:`전체 공개 공유`]}),(0,x.jsx)(`button`,{className:`btn-secondary`,style:{padding:`0.4rem 0.6rem`,color:`#DC2626`},onClick:()=>C(d.id),title:`프로젝트 삭제`,children:(0,x.jsx)(Cn,{size:14})})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>f(null),children:`✕`})]})]}),(0,x.jsxs)(`div`,{className:`modal-body detail-modal-body`,children:[d.images&&d.images.length>0&&(0,x.jsx)(`div`,{className:`detail-images-row`,children:d.images.map((e,t)=>(0,x.jsxs)(`a`,{href:e,target:`_blank`,rel:`noreferrer`,className:`detail-img-box`,children:[(0,x.jsx)(`img`,{src:e,alt:`${d.title} ${t}`}),(0,x.jsxs)(`span`,{className:`expand-overlay`,children:[(0,x.jsx)(Ye,{size:16}),` 원본 보기`]})]},t))}),(0,x.jsxs)(`div`,{className:`detail-author-box`,children:[(0,x.jsx)(`img`,{src:d.userAvatar,alt:d.userName,className:`author-avatar-md`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=user`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`detail-author-name`,children:d.userName}),(0,x.jsx)(`div`,{className:`detail-author-role`,children:`작성자 / 프로젝트 오너`})]})]}),(0,x.jsx)(`h2`,{className:`detail-title`,children:d.title}),(0,x.jsxs)(`div`,{className:`detail-section`,children:[(0,x.jsx)(`h4`,{className:`detail-sec-title`,children:`📝 설계 개요 & 기능 설명`}),(0,x.jsx)(`p`,{className:`detail-desc-text`,children:d.description})]}),d.specs&&(0,x.jsxs)(`div`,{className:`detail-section`,children:[(0,x.jsx)(`h4`,{className:`detail-sec-title`,children:`🔧 회로 & PCB 상세 스펙 (층수/MCU/BOM)`}),(0,x.jsx)(`pre`,{className:`detail-specs-box`,children:d.specs})]}),(0,x.jsx)(`div`,{className:`detail-tags-box`,children:d.tags?.map((e,t)=>(0,x.jsxs)(`span`,{className:`project-tag`,children:[`#`,e]},t))}),(0,x.jsxs)(`div`,{className:`detail-like-bar`,children:[(0,x.jsxs)(`button`,{className:`btn-primary ${d.likedUsers?.includes(n?.id)?`active-like`:``}`,onClick:()=>y(d.id),style:{gap:`0.5rem`},children:[(0,x.jsx)(lt,{size:18,fill:d.likedUsers?.includes(n?.id)?`white`:`none`}),(0,x.jsxs)(`span`,{children:[`응원 & 좋아요 (`,d.likes||0,`)`]})]}),(0,x.jsx)(`span`,{className:`like-tip`,children:d.likedUsers?.length>0?`${d.likedUsers.length}명의 메이커가 이 회로를 추천했습니다.`:`가장 먼저 이 프로젝트를 응원해보세요!`})]}),(0,x.jsxs)(`div`,{className:`detail-comments-section`,children:[(0,x.jsxs)(`h4`,{className:`detail-sec-title`,children:[`💬 기술 토론 및 피드백 (`,d.comments?.length||0,`)`]}),(0,x.jsxs)(`form`,{onSubmit:b,className:`comment-form`,children:[(0,x.jsx)(`input`,{type:`text`,placeholder:`회로 설계 질문이나 조언, 피드백을 남겨주세요...`,className:`form-input`,value:p,onChange:e=>m(e.target.value),disabled:h}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:h||!p.trim(),children:`댓글 작성`})]}),(0,x.jsx)(`div`,{className:`comments-list`,children:d.comments?.length===0?(0,x.jsx)(`div`,{className:`no-comments`,children:`아직 등록된 피드백이 없습니다. 첫 번째 댓글을 남겨보세요!`}):d.comments?.map(e=>(0,x.jsxs)(`div`,{className:`comment-item`,children:[(0,x.jsx)(`img`,{src:e.userAvatar,alt:e.userName,className:`comment-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=cmt`}}),(0,x.jsxs)(`div`,{className:`comment-content`,children:[(0,x.jsxs)(`div`,{className:`comment-meta`,children:[(0,x.jsx)(`span`,{className:`comment-author`,children:e.userName}),(0,x.jsx)(`span`,{className:`comment-time`,children:new Date(e.createdAt).toLocaleDateString(`ko-KR`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})})]}),(0,x.jsx)(`p`,{className:`comment-text`,children:e.text})]})]},e.id))})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .workspace-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0F172A;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .title-icon {
          font-size: 1.4rem;
        }
        .section-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .workspace-controls {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1rem;
          margin-bottom: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          box-shadow: var(--shadow-sm);
        }
        .tab-pills {
          display: flex;
          gap: 0.5rem;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 0.75rem;
        }
        .pill-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.1rem;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .pill-btn:hover {
          background: #F1F5F9;
          color: #1E293B;
        }
        .pill-btn.active {
          background: var(--primary);
          color: #FFFFFF;
        }
        .count-pill {
          background: rgba(0, 0, 0, 0.08);
          padding: 0.1rem 0.45rem;
          border-radius: 10px;
          font-size: 0.75rem;
          white-space: nowrap;
        }
        .pill-btn.active .count-pill {
          background: rgba(255, 255, 255, 0.25);
          color: white;
        }
        .filter-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .status-chips {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .status-chip {
          padding: 0.35rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 600;
          border-radius: 8px;
          background: #F8FAFC;
          color: #475569;
          border: 1px solid var(--border);
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .status-chip:hover {
          border-color: #CBD5E1;
        }
        .status-chip.active {
          background: #0F172A;
          color: #FFFFFF;
          border-color: #0F172A;
        }
        .search-box {
          position: relative;
          min-width: 260px;
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
        .search-input {
          width: 100%;
          padding: 0.5rem 0.8rem 0.5rem 2.2rem;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 0.85rem;
          background: #F8FAFC;
        }
        .search-input:focus {
          outline: none;
          background: #FFFFFF;
          border-color: var(--primary);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          box-shadow: var(--shadow-sm);
        }
        .project-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .project-thumbnail-wrapper {
          position: relative;
          height: 190px;
          background: #0F172A;
          overflow: hidden;
        }
        .project-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .project-card:hover .project-thumbnail {
          transform: scale(1.03);
        }
        .thumbnail-badges {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          display: flex;
          gap: 0.4rem;
        }
        .image-count-tag {
          position: absolute;
          bottom: 0.6rem;
          right: 0.6rem;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .project-card-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .project-author-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }
        .author-avatar-sm {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        .author-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .post-date {
          font-size: 0.72rem;
          color: #94A3B8;
          margin-left: auto;
        }
        .project-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-card-desc {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 0.9rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-top: auto;
          margin-bottom: 1rem;
        }
        .project-tag {
          font-size: 0.72rem;
          color: #0D9488;
          background: #F0FDFA;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          font-weight: 600;
        }
        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 0.75rem;
        }
        .interaction-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .like-btn, .cmt-count-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: #64748B;
          font-weight: 600;
        }
        .like-btn.liked {
          color: var(--primary);
        }
        .share-toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
        }
        .share-toggle-btn:hover {
          background: #FFD8BE;
        }
        .empty-state-box {
          text-align: center;
          padding: 4rem 1rem;
          background: white;
          border-radius: var(--radius-lg);
          border: 1.5px dashed var(--border);
        }
        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        /* Project Detail Modal */
        .project-detail-modal {
          max-width: 820px;
        }
        .detail-header-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .detail-header-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .detail-date {
          font-size: 0.8rem;
          color: #94A3B8;
          margin-left: 0.4rem;
        }
        .detail-images-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0.75rem;
        }
        .detail-img-box {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          min-height: 240px;
          max-height: 380px;
          background: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .detail-img-box img {
          max-width: 100%;
          max-height: 380px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .expand-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          font-size: 0.85rem;
          font-weight: 600;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .detail-img-box:hover .expand-overlay {
          opacity: 1;
        }
        .detail-author-box {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #F8FAFC;
          padding: 0.75rem 1rem;
          border-radius: 10px;
        }
        .author-avatar-md {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .detail-author-name {
          font-weight: 700;
          color: #0F172A;
        }
        .detail-author-role {
          font-size: 0.75rem;
          color: #64748B;
        }
        .detail-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0F172A;
        }
        .detail-sec-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #334155;
          margin-bottom: 0.4rem;
        }
        .detail-desc-text {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .detail-specs-box {
          background: #0F172A;
          color: #A7F3D0;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          padding: 1rem;
          border-radius: 8px;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        .detail-like-bar {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: #FFF7F0;
          border: 1px solid #FFEDD5;
          border-radius: 10px;
        }
        .like-tip {
          font-size: 0.82rem;
          color: #C2410C;
          font-weight: 500;
        }
        .detail-comments-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .comment-form {
          display: flex;
          gap: 0.5rem;
        }
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .comment-item {
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem;
          background: #F8FAFC;
          border-radius: 8px;
        }
        .comment-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .comment-content {
          flex: 1;
        }
        .comment-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.2rem;
        }
        .comment-author {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1E293B;
        }
        .comment-time {
          font-size: 0.72rem;
          color: #94A3B8;
        }
        .comment-text {
          font-size: 0.85rem;
          color: #334155;
        }
        .no-comments {
          font-size: 0.85rem;
          color: #94A3B8;
          text-align: center;
          padding: 1rem;
        }
      `})]})}function lr(){let{currentUser:e,users:t}=w(),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(`2026-10`),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(`정기밋업`),[f,p]=(0,v.useState)(`2026-10-17`),[m,h]=(0,v.useState)(`14:00 ~ 17:00`),[g,_]=(0,v.useState)(`당근 메이커스페이스 2층`),[y,b]=(0,v.useState)(``),[S,C]=(0,v.useState)(15),[T,E]=(0,v.useState)(!1),D=async()=>{try{let e=await fetch(`/api/events`);if(e.ok){let t=await e.json();r(t)}}catch(e){console.error(`Failed to fetch events:`,e)}};(0,v.useEffect)(()=>{D()},[]);let O=async t=>{if(e)try{let n=await fetch(`/api/events/${t}/rsvp`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:e.id})});if(n.ok){let e=await n.json();r(n=>n.map(n=>n.id===t?e:n))}else{let e=await n.json();alert(e.error||`참가 신청에 실패했습니다.`)}}catch(e){console.error(`RSVP error:`,e)}},k=async e=>{if(e.preventDefault(),c.trim()&&f){E(!0);try{let e=await fetch(`/api/events`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({title:c.trim(),type:u,date:f,time:m,location:g,description:y,maxAttendees:S})});if(e.ok){let t=await e.json();r(e=>[...e,t]),s(!1),l(``),b(``)}}catch(e){console.error(`Failed to create event:`,e)}finally{E(!1)}}},A=e=>{switch(e){case`정기밋업`:return`badge-orange`;case`공동구매`:return`badge-green`;case`온라인리뷰`:return`badge-blue`;default:return`badge-purple`}};return(0,x.jsxs)(`div`,{className:`calendar-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`calendar-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`section-title`,children:[(0,x.jsx)(`span`,{className:`title-icon`,children:`📅`}),` 모임 일정 & 오프라인 밋업`]}),(0,x.jsx)(`p`,{className:`section-desc`,children:`당근 PCB 설계 모임의 정기 오프라인 납땜 워크숍, 기판 품평회, 해외 묶음 발주 일정을 확인하고 참가하세요.`})]}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>s(!0),children:[(0,x.jsx)(Ut,{size:18}),(0,x.jsx)(`span`,{children:`새 모임/일정 개설`})]})]}),(0,x.jsxs)(`div`,{className:`calendar-content-layout`,children:[(0,x.jsxs)(`div`,{className:`events-cards-list`,children:[(0,x.jsxs)(`div`,{className:`list-title-row`,children:[(0,x.jsxs)(`h3`,{children:[`다가오는 모임 & 밋업 목록 (`,n.length,`)`]}),(0,x.jsx)(`span`,{className:`badge badge-orange`,children:`참가 신청 실시간 접수 중`})]}),(0,x.jsx)(`div`,{className:`event-cards-grid`,children:n.map(n=>{let r=n.attendees?.includes(e?.id),i=n.attendees?.length>=n.maxAttendees;return(0,x.jsxs)(`div`,{className:`event-item-card`,children:[(0,x.jsxs)(`div`,{className:`event-top-row`,children:[(0,x.jsx)(`span`,{className:`badge ${A(n.type)}`,children:n.type}),(0,x.jsx)(`span`,{className:`event-status-tag`,children:i?`정원 마감`:`신청 가능`})]}),(0,x.jsx)(`h3`,{className:`event-card-title`,children:n.title}),(0,x.jsx)(`p`,{className:`event-card-desc`,children:n.description}),(0,x.jsxs)(`div`,{className:`event-info-table`,children:[(0,x.jsxs)(`div`,{className:`info-row`,children:[(0,x.jsx)(be,{size:15,className:`info-icon`}),(0,x.jsx)(`span`,{children:n.date})]}),(0,x.jsxs)(`div`,{className:`info-row`,children:[(0,x.jsx)(Le,{size:15,className:`info-icon`}),(0,x.jsx)(`span`,{children:n.time})]}),(0,x.jsxs)(`div`,{className:`info-row`,children:[(0,x.jsx)(xt,{size:15,className:`info-icon`}),(0,x.jsx)(`span`,{children:n.location})]}),(0,x.jsxs)(`div`,{className:`info-row`,children:[(0,x.jsx)(Vn,{size:15,className:`info-icon`}),(0,x.jsxs)(`span`,{children:[`참석 인원: `,(0,x.jsx)(`strong`,{children:n.attendees?.length||0}),` / `,n.maxAttendees,`명`]})]})]}),(0,x.jsxs)(`div`,{className:`attendees-stack-row`,children:[(0,x.jsxs)(`div`,{className:`avatar-stack`,children:[n.attendees?.slice(0,5).map((e,n)=>{let r=t.find(t=>t.id===e);return(0,x.jsx)(`img`,{src:r?.avatar||`https://api.dicebear.com/7.x/bottts/svg?seed=user`,alt:r?.name||`참가자`,title:r?.name||`참가자`,className:`stacked-avatar`},n)}),n.attendees?.length>5&&(0,x.jsxs)(`div`,{className:`stacked-more`,children:[`+`,n.attendees.length-5]})]}),(0,x.jsx)(`button`,{className:`rsvp-btn ${r?`attending`:``}`,onClick:()=>O(n.id),disabled:!r&&i,children:r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(ke,{size:16}),(0,x.jsx)(`span`,{children:`참가 확정 (취소)`})]}):i?(0,x.jsx)(`span`,{children:`정원 마감`}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ut,{size:16}),(0,x.jsx)(`span`,{children:`참가 신청하기`})]})})]})]},n.id)})})]}),(0,x.jsxs)(`div`,{className:`calendar-sidebar`,children:[(0,x.jsxs)(`div`,{className:`sidebar-card tips-card`,children:[(0,x.jsx)(`h4`,{children:`💡 오프라인 밋업 참여 안내`}),(0,x.jsxs)(`ul`,{children:[(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`strong`,{children:`납땜 워크숍`}),`: 인두기 및 페이스트 솔더, 확대경은 랩실에 비치되어 있습니다.`]}),(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`strong`,{children:`아트웍 품평회`}),`: 노트북에 KiCad 또는 Gerber 뷰어를 설치해 오시면 대형 모니터로 피어 리뷰를 진행합니다.`]}),(0,x.jsxs)(`li`,{children:[(0,x.jsx)(`strong`,{children:`공동구매`}),`: 마감 시간 이전까지 거버 파일 업로드 완료자에 한해 진행됩니다.`]})]})]}),(0,x.jsxs)(`div`,{className:`sidebar-card location-card`,children:[(0,x.jsx)(`h4`,{children:`📍 모임 아지트 안내`}),(0,x.jsx)(`p`,{className:`loc-title`,children:`당근 메이커스페이스 역삼점`}),(0,x.jsx)(`p`,{className:`loc-sub`,children:`서울시 강남구 테헤란로 14길 6, 2층 하드웨어 팹`}),(0,x.jsxs)(`div`,{className:`loc-equipments`,children:[(0,x.jsx)(`span`,{className:`eq-tag`,children:`2GHz 오실로스코프`}),(0,x.jsx)(`span`,{className:`eq-tag`,children:`SMD 리플로우 오븐`}),(0,x.jsx)(`span`,{className:`eq-tag`,children:`실체현미경`}),(0,x.jsx)(`span`,{className:`eq-tag`,children:`열화상 카메라`})]})]})]})]}),o&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>s(!1),children:(0,x.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsx)(`h3`,{children:`새 모임 및 밋업 일정 등록`}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>s(!1),children:(0,x.jsx)(Gn,{size:20})})]}),(0,x.jsxs)(`form`,{onSubmit:k,children:[(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`모임/일정 명칭 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: 4층 PCB 임피던스 매칭 스터디`,value:c,onChange:e=>l(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-row-2`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`모임 유형`}),(0,x.jsxs)(`select`,{className:`form-select`,value:u,onChange:e=>d(e.target.value),children:[(0,x.jsx)(`option`,{value:`정기밋업`,children:`정기밋업`}),(0,x.jsx)(`option`,{value:`공동구매`,children:`공동구매`}),(0,x.jsx)(`option`,{value:`온라인리뷰`,children:`온라인리뷰`}),(0,x.jsx)(`option`,{value:`납땜스터디`,children:`납땜스터디`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`최대 모집 인원`}),(0,x.jsx)(`input`,{type:`number`,className:`form-input`,value:S,onChange:e=>C(e.target.value),min:2,max:100})]})]}),(0,x.jsxs)(`div`,{className:`form-row-2`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`날짜`}),(0,x.jsx)(`input`,{type:`date`,className:`form-input`,value:f,onChange:e=>p(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`시간`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: 14:00 ~ 17:00`,value:m,onChange:e=>h(e.target.value)})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`장소`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: 역삼 당근 메이커스페이스 2층`,value:g,onChange:e=>_(e.target.value)})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`모임 상세 설명 & 준비물`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:3,placeholder:`모임의 주요 아젠다 및 참가자가 챙겨야 할 준비물을 적어주세요.`,value:y,onChange:e=>b(e.target.value)})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>s(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:T,children:T?`등록 중...`:`일정 등록 완료`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .calendar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .calendar-content-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .calendar-content-layout {
            grid-template-columns: 1fr;
          }
        }
        .list-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .list-title-row h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
        }
        .event-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .event-item-card {
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
          transition: all 0.2s;
        }
        .event-item-card:hover {
          box-shadow: var(--shadow-md);
          border-color: #CBD5E1;
        }
        .event-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.6rem;
        }
        .event-status-tag {
          font-size: 0.75rem;
          color: #10B981;
          font-weight: 700;
        }
        .event-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.4rem;
        }
        .event-card-desc {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 0.9rem;
        }
        .event-info-table {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 0.5rem;
          background: #F8FAFC;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .info-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: #334155;
        }
        .info-icon {
          color: var(--primary);
        }
        .attendees-stack-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F1F5F9;
          padding-top: 0.75rem;
        }
        .avatar-stack {
          display: flex;
          align-items: center;
        }
        .stacked-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid white;
          margin-left: -8px;
          object-fit: cover;
        }
        .stacked-avatar:first-child {
          margin-left: 0;
        }
        .stacked-more {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #E2E8F0;
          color: #475569;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: -8px;
          border: 2px solid white;
        }
        .rsvp-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          background: var(--primary);
          color: white;
          box-shadow: var(--shadow-orange);
        }
        .rsvp-btn.attending {
          background: #10B981;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }
        .sidebar-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .sidebar-card h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.75rem;
        }
        .tips-card ul {
          padding-left: 1.2rem;
          font-size: 0.83rem;
          color: #475569;
          line-height: 1.6;
        }
        .tips-card li {
          margin-bottom: 0.5rem;
        }
        .loc-title {
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--primary-dark);
        }
        .loc-sub {
          font-size: 0.8rem;
          color: #64748B;
          margin-bottom: 0.75rem;
        }
        .loc-equipments {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .eq-tag {
          font-size: 0.72rem;
          background: #F1F5F9;
          color: #334155;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-weight: 500;
        }
      `})]})}function ur(){let{currentUser:e}=w(),[t,n]=(0,v.useState)(`sos`),[r,i]=(0,v.useState)([]),[a,o]=(0,v.useState)(``),[s,c]=(0,v.useState)(null),[l,u]=(0,v.useState)(!1),[d,f]=(0,v.useState)(``),[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)(`sos`),[_,y]=(0,v.useState)(!1),[b,S]=(0,v.useState)([]),[C,T]=(0,v.useState)([]),[E,D]=(0,v.useState)(!1),[O,k]=(0,v.useState)(``),[A,j]=(0,v.useState)(``),[ee,te]=(0,v.useState)(`검토중`),ne=[{id:`sos`,label:`🚨 회로 SOS`,desc:`타버린 기판, 쇼트, 미작동 버그! 핀포인트 사진 찍고 해결책 채택받기 (+1.5℃)`},{id:`notice`,label:`📢 공지사항`,desc:`모임 정기 공지 및 필독 운영 안내`},{id:`info`,label:`💡 정보게시판`,desc:`KiCad 노하우, PCB 발주 가이드, 부품 소싱 팁`},{id:`general`,label:`💬 일반게시판`,desc:`자유로운 하드웨어 잡담, Q&A, 작업 후기`},{id:`secret`,label:`🔒 비밀게시판`,desc:`익명으로 솔직하게 털어놓는 고민과 비밀 질문`},{id:`suggestion`,label:`📮 건의사항`,desc:`모임 운영 개선 아이디어 제안 및 처리 현황`}],M=async()=>{try{let e=await fetch(`/api/posts?boardType=${t}`);if(e.ok){let t=await e.json();i(t)}}catch(e){console.error(`Failed to fetch posts:`,e)}};(0,v.useEffect)(()=>{M()},[t]);let re=async e=>{try{let t=await fetch(`/api/posts/${e}`);if(t.ok){let e=await t.json();c(e),e.status&&te(e.status),e.adminResponse&&j(e.adminResponse)}}catch(e){console.error(`Failed to load post detail:`,e)}},ie=async t=>{if(e)try{let n=await fetch(`/api/posts/${t}/like`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:e.id})});if(n.ok){let e=await n.json();i(n=>n.map(n=>n.id===t?{...n,likes:e.likes,likedUsers:e.likedUsers}:n)),s?.id===t&&c(t=>({...t,likes:e.likes,likedUsers:e.likedUsers}))}}catch(e){console.error(`Like error:`,e)}},N=async t=>{if(t.preventDefault(),O.trim()&&e&&s)try{let t=await fetch(`/api/posts/${s.id}/comments`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:e.id,userName:e.name,userAvatar:e.avatar,text:O.trim(),isAnonymous:s.boardType===`secret`})});if(t.ok){let e=await t.json();c(t=>({...t,comments:[...t.comments||[],e]})),k(``)}}catch(e){console.error(`Add comment error:`,e)}},ae=async()=>{if(s&&e?.role===`admin`)try{let e=await fetch(`/api/posts/${s.id}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:ee,adminResponse:A})});if(e.ok){let t=await e.json();c(t),i(e=>e.map(e=>e.id===t.id?t:e)),alert(`건의사항 상태 및 관리자 답변이 저장되었습니다.`)}}catch(e){console.error(`Admin update error:`,e)}},oe=async t=>{if(s&&e){if(s.authorId!==e.id&&e.role!==`admin`){alert(`질문 작성자 또는 관리자만 해결책을 채택할 수 있습니다.`);return}try{let e=await fetch(`/api/posts/${s.id}/accept-solution`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({commentId:t})});if(e.ok){let t=await e.json();c(t),i(e=>e.map(e=>e.id===t.id?t:e)),alert(`🎉 해결책이 성공적으로 채택되었습니다! 답변자에게 납땜 온도 +1.5℃와 "회로 SOS 명탐정 💡" 뱃지가 부여되었습니다.`)}}catch(e){console.error(`Accept solution error:`,e)}}},se=async r=>{if(r.preventDefault(),d.trim()&&p.trim()&&e)try{let r=await fetch(`/api/posts`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({boardType:h,authorId:e.id,authorName:e.name,authorAvatar:e.avatar,title:d.trim(),content:p.trim(),images:b,pinMarkers:h===`sos`?C:[],isPinned:e.role===`admin`&&_})});if(r.ok){let e=await r.json();e.boardType===t?i(t=>[e,...t]):n(e.boardType),u(!1),f(``),m(``),S([]),T([])}}catch(e){console.error(`Submit post error:`,e)}},ce=e=>{let t=e.currentTarget.getBoundingClientRect(),n=Math.round((e.clientX-t.left)/t.width*100),r=Math.round((e.clientY-t.top)/t.height*100),i=prompt(`이 지점의 의심 증상/발열 부위 설명을 입력하세요:`,`Pin ${C.length+1} 의심 지점`);i&&i.trim()&&T(e=>[...e,{id:`pin_${Date.now()}`,x:n,y:r,label:i.trim()}])},le=async e=>{let t=e.target.files[0];if(t){D(!0);try{let e=new FormData;e.append(`file`,t);let n=await fetch(`/api/upload`,{method:`POST`,body:e});if(n.ok){let e=await n.json();S(t=>[...t,e.url])}else{let e=URL.createObjectURL(t);S(t=>[...t,e])}}catch{let e=URL.createObjectURL(t);S(t=>[...t,e])}finally{D(!1)}}},ue=ne.find(e=>e.id===t),de=r.filter(e=>{if(!a.trim())return!0;let t=a.toLowerCase();return e.title.toLowerCase().includes(t)||e.content.toLowerCase().includes(t)}),pe=e=>{switch(e){case`반영완료`:return`badge-green`;case`검토중`:return`badge-orange`;default:return`badge-blue`}};return(0,x.jsxs)(`div`,{className:`board-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`board-top-bar`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`section-title`,children:[(0,x.jsx)(`span`,{className:`title-icon`,children:`📋`}),` 당근 PCB 커뮤니티 게시판`]}),(0,x.jsx)(`p`,{className:`section-desc`,children:ue?.desc})]}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>{g(t),u(!0)},children:[(0,x.jsx)(Ut,{size:18}),(0,x.jsx)(`span`,{children:`게시글 작성`})]})]}),(0,x.jsxs)(`div`,{className:`board-tabs-bar`,children:[(0,x.jsx)(`div`,{className:`board-tabs`,children:ne.map(e=>(0,x.jsx)(`button`,{className:`board-tab-btn ${t===e.id?`active`:``}`,onClick:()=>n(e.id),children:(0,x.jsx)(`span`,{children:e.label})},e.id))}),(0,x.jsxs)(`div`,{className:`board-search-box`,children:[(0,x.jsx)(en,{size:16,className:`search-icon`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`제목, 본문 검색...`,value:a,onChange:e=>o(e.target.value),className:`search-input`})]})]}),(0,x.jsx)(`div`,{className:`board-posts-wrapper`,children:de.length===0?(0,x.jsx)(`div`,{className:`empty-board`,children:(0,x.jsx)(`p`,{children:`등록된 게시글이 없습니다. 첫 번째 글을 남겨보세요!`})}):(0,x.jsxs)(`div`,{className:`posts-table`,children:[(0,x.jsxs)(`div`,{className:`posts-table-header`,children:[(0,x.jsx)(`span`,{className:`col-status`,children:`구분`}),(0,x.jsx)(`span`,{className:`col-title`,children:`제목`}),(0,x.jsx)(`span`,{className:`col-author`,children:`작성자`}),(0,x.jsx)(`span`,{className:`col-date`,children:`등록일`}),(0,x.jsx)(`span`,{className:`col-views`,children:`조회`}),(0,x.jsx)(`span`,{className:`col-likes`,children:`좋아요`})]}),de.map(e=>{let t=e.boardType===`secret`;return(0,x.jsxs)(`div`,{className:`post-row ${e.isPinned?`pinned-row`:``}`,onClick:()=>re(e.id),children:[(0,x.jsx)(`div`,{className:`col-status`,children:e.isPinned?(0,x.jsxs)(`span`,{className:`badge badge-orange`,children:[(0,x.jsx)(Vt,{size:11}),` 필독`]}):e.boardType===`sos`?e.isResolved?(0,x.jsx)(`span`,{className:`badge badge-green`,children:`✓ 해결`}):(0,x.jsx)(`span`,{className:`badge badge-orange`,children:`🚨 SOS`}):e.boardType===`suggestion`?(0,x.jsx)(`span`,{className:`badge ${pe(e.status)}`,children:e.status||`접수`}):t?(0,x.jsxs)(`span`,{className:`badge badge-gray`,children:[(0,x.jsx)(_t,{size:11}),` 비밀`]}):(0,x.jsx)(`span`,{className:`badge badge-gray`,children:`일반`})}),(0,x.jsxs)(`div`,{className:`col-title`,children:[(0,x.jsx)(`span`,{className:`post-title-text`,children:e.title}),e.pinMarkers?.length>0&&(0,x.jsxs)(`span`,{className:`pin-indicator-badge`,children:[`📍 핀 `,e.pinMarkers.length,`개`]}),e.comments?.length>0&&(0,x.jsxs)(`span`,{className:`comment-badge-count`,children:[`[`,e.comments.length,`]`]}),e.images?.length>0&&(0,x.jsx)(`span`,{className:`image-attach-icon`,children:`📷`})]}),(0,x.jsx)(`div`,{className:`col-author`,children:t?(0,x.jsx)(`span`,{className:`anonymous-author`,children:`🔒 익명`}):(0,x.jsx)(`span`,{className:`author-name-text`,children:e.authorName})}),(0,x.jsx)(`div`,{className:`col-date`,children:new Date(e.createdAt).toLocaleDateString(`ko-KR`,{month:`2-digit`,day:`2-digit`})}),(0,x.jsx)(`div`,{className:`col-views`,children:e.views||0}),(0,x.jsx)(`div`,{className:`col-likes`,children:e.likes||0})]},e.id)})]})}),s&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>c(null),children:(0,x.jsxs)(`div`,{className:`modal-content post-detail-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`modal-header-meta`,children:[(0,x.jsx)(`span`,{className:`badge badge-orange`,children:ne.find(e=>e.id===s.boardType)?.label}),s.boardType===`sos`&&(s.isResolved?(0,x.jsx)(`span`,{className:`badge badge-green`,children:`✓ 채택 완료`}):(0,x.jsx)(`span`,{className:`badge badge-orange`,children:`진단 요청중`})),s.status&&(0,x.jsxs)(`span`,{className:`badge ${pe(s.status)}`,children:[`상태: `,s.status]}),(0,x.jsx)(`span`,{className:`detail-date`,children:new Date(s.createdAt).toLocaleString(`ko-KR`)})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>c(null),children:`✕`})]}),(0,x.jsxs)(`div`,{className:`modal-body`,children:[s.boardType===`sos`&&(s.isResolved?(0,x.jsxs)(`div`,{className:`sos-resolved-banner`,children:[(0,x.jsx)(je,{size:18}),(0,x.jsx)(`span`,{children:`이 회로 버그는 해결책이 채택되어 수리 완료되었습니다! 🎉`})]}):(0,x.jsxs)(`div`,{className:`sos-unresolved-banner`,children:[(0,x.jsx)(De,{size:18}),(0,x.jsx)(`span`,{children:`도움 요청 중인 회로 버그입니다. 핀포인트를 확인하고 댓글로 해결책을 알려주세요! (채택 시 +1.5℃ 납땜온도)`})]})),(0,x.jsx)(`h2`,{className:`post-view-title`,children:s.title}),(0,x.jsxs)(`div`,{className:`post-author-bar`,children:[(0,x.jsx)(`img`,{src:s.authorAvatar,alt:s.authorName,className:`author-avatar-sm`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/identicon/svg?seed=post`}}),(0,x.jsx)(`span`,{className:`author-name`,children:s.authorName}),(0,x.jsxs)(`span`,{className:`stat-item`,children:[(0,x.jsx)(Ye,{size:14}),` `,s.views||0]}),(0,x.jsxs)(`span`,{className:`stat-item`,children:[(0,x.jsx)(lt,{size:14}),` `,s.likes||0]})]}),s.boardType===`sos`&&s.images?.[0]?(0,x.jsxs)(`div`,{className:`sos-pinpoint-viewer`,children:[(0,x.jsxs)(`div`,{className:`pin-viewer-stage`,children:[(0,x.jsx)(`img`,{src:s.images[0],alt:`Circuit SOS Board`,className:`pin-stage-image`}),(s.pinMarkers||[]).map((e,t)=>(0,x.jsxs)(`div`,{className:`interactive-pin-dot`,style:{left:`${e.x}%`,top:`${e.y}%`},children:[(0,x.jsx)(`span`,{className:`pin-num`,children:t+1}),(0,x.jsxs)(`div`,{className:`pin-floating-tooltip`,children:[(0,x.jsxs)(`strong`,{children:[`Pin `,t+1,`:`]}),` `,e.label]})]},e.id||t))]}),(s.pinMarkers||[]).length>0&&(0,x.jsxs)(`div`,{className:`pin-legend-box`,children:[(0,x.jsxs)(`div`,{className:`legend-title`,children:[(0,x.jsx)(xt,{size:14}),(0,x.jsxs)(`span`,{children:[`등록된 버그 의심 핀포인트 (`,s.pinMarkers.length,`개):`]})]}),(0,x.jsx)(`div`,{className:`legend-list`,children:s.pinMarkers.map((e,t)=>(0,x.jsxs)(`div`,{className:`legend-item`,children:[(0,x.jsxs)(`span`,{className:`legend-badge`,children:[`Pin `,t+1]}),(0,x.jsx)(`span`,{className:`legend-text`,children:e.label})]},e.id||t))})]})]}):s.images&&s.images.length>0?(0,x.jsx)(`div`,{className:`post-images-grid`,children:s.images.map((e,t)=>(0,x.jsx)(`a`,{href:e,target:`_blank`,rel:`noreferrer`,className:`post-img-item`,children:(0,x.jsx)(`img`,{src:e,alt:`Attached`})},t))}):null,(0,x.jsx)(`div`,{className:`post-view-content`,children:s.content}),s.boardType===`suggestion`&&(0,x.jsxs)(`div`,{className:`admin-reply-box`,children:[(0,x.jsxs)(`div`,{className:`admin-reply-header`,children:[(0,x.jsx)(ln,{size:16,color:`#EA580C`}),(0,x.jsx)(`h4`,{children:`운영진 공식 답변 및 조치 사항`})]}),s.adminResponse?(0,x.jsx)(`p`,{className:`admin-reply-text`,children:s.adminResponse}):(0,x.jsx)(`p`,{className:`admin-reply-empty`,children:`아직 등록된 운영진 답변이 없습니다. 검토 중입니다.`}),e?.role===`admin`&&(0,x.jsxs)(`div`,{className:`admin-control-area`,children:[(0,x.jsxs)(`div`,{className:`admin-control-row`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`처리 상태 변경:`}),(0,x.jsxs)(`select`,{className:`form-select`,value:ee,onChange:e=>te(e.target.value),children:[(0,x.jsx)(`option`,{value:`접수`,children:`접수 (Received)`}),(0,x.jsx)(`option`,{value:`검토중`,children:`검토중 (Reviewing)`}),(0,x.jsx)(`option`,{value:`반영완료`,children:`반영완료 (Completed)`})]})]}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:2,placeholder:`회원 건의사항에 대한 운영진 공식 피드백을 입력하세요.`,value:A,onChange:e=>j(e.target.value)}),(0,x.jsx)(`button`,{className:`btn-primary`,style:{alignSelf:`flex-end`,padding:`0.45rem 1rem`},onClick:ae,children:`답변 및 상태 저장`})]})]}),(0,x.jsx)(`div`,{className:`post-like-center`,children:(0,x.jsxs)(`button`,{className:`post-like-button ${s.likedUsers?.includes(e?.id)?`active`:``}`,onClick:()=>ie(s.id),children:[(0,x.jsx)(lt,{size:20,fill:s.likedUsers?.includes(e?.id)?`#FF6F0F`:`none`}),(0,x.jsxs)(`span`,{children:[`공감 & 응원 `,s.likes||0]})]})}),(0,x.jsxs)(`div`,{className:`post-comments-area`,children:[(0,x.jsxs)(`h4`,{children:[`답변 & 댓글 (`,s.comments?.length||0,`)`]}),(0,x.jsxs)(`form`,{onSubmit:N,className:`comment-form`,children:[(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:s.boardType===`sos`?`버그 원인 진단 및 해결 팁을 작성하세요 (채택 시 +1.5℃ 납땜온도)...`:s.boardType===`secret`?`익명으로 댓글을 작성합니다...`:`댓글을 작성하세요...`,value:O,onChange:e=>k(e.target.value)}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,children:(0,x.jsx)(nn,{size:15})})]}),(0,x.jsx)(`div`,{className:`comments-list`,children:s.comments?.map(t=>{let n=t.isAccepted||s.acceptedCommentId===t.id,r=s.boardType===`sos`&&!s.isResolved&&(e?.id===s.authorId||e?.role===`admin`)&&t.userId!==s.authorId;return(0,x.jsxs)(`div`,{className:`comment-item ${n?`accepted-solution-card`:``}`,children:[n&&(0,x.jsxs)(`div`,{className:`accepted-banner`,children:[(0,x.jsx)(fe,{size:16}),(0,x.jsx)(`span`,{children:`🏆 질문자가 채택한 해결책 솔루션 (+1.5℃ 납땜 온도 획득)`})]}),(0,x.jsxs)(`div`,{className:`comment-inner-row`,children:[(0,x.jsx)(`img`,{src:t.userAvatar,alt:t.userName,className:`comment-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/identicon/svg?seed=cmt`}}),(0,x.jsxs)(`div`,{className:`comment-content`,children:[(0,x.jsxs)(`div`,{className:`comment-meta`,children:[(0,x.jsx)(`span`,{className:`comment-author`,children:t.userName}),(0,x.jsx)(`span`,{className:`comment-time`,children:new Date(t.createdAt).toLocaleDateString(`ko-KR`,{month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})})]}),(0,x.jsx)(`p`,{className:`comment-text`,children:t.text}),r&&(0,x.jsx)(`div`,{className:`solution-accept-box`,children:(0,x.jsxs)(`button`,{className:`accept-solve-btn`,onClick:()=>oe(t.id),children:[(0,x.jsx)(fe,{size:14}),(0,x.jsx)(`span`,{children:`이 답변을 해결책으로 채택하기 (+1.5℃)`})]})})]})]})]},t.id)})})]})]})]})}),l&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>u(!1),children:(0,x.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsx)(`h3`,{children:`새 게시글 작성`}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>u(!1),children:`✕`})]}),(0,x.jsxs)(`form`,{onSubmit:se,children:[(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsxs)(`div`,{className:`form-row-2`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`게시판 선택`}),(0,x.jsxs)(`select`,{className:`form-select`,value:h,onChange:e=>g(e.target.value),children:[(0,x.jsx)(`option`,{value:`sos`,children:`🚨 회로 SOS (핀포인트 마킹 & 채택)`}),e?.role===`admin`&&(0,x.jsx)(`option`,{value:`notice`,children:`📢 공지사항`}),(0,x.jsx)(`option`,{value:`info`,children:`💡 정보게시판`}),(0,x.jsx)(`option`,{value:`general`,children:`💬 일반게시판`}),(0,x.jsx)(`option`,{value:`secret`,children:`🔒 비밀게시판 (익명 보호)`}),(0,x.jsx)(`option`,{value:`suggestion`,children:`📮 건의사항`})]})]}),e?.role===`admin`&&h===`notice`&&(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`상단 고정 (Pin)`}),(0,x.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`,marginTop:`0.5rem`},children:[(0,x.jsx)(`input`,{type:`checkbox`,checked:_,onChange:e=>y(e.target.checked)}),(0,x.jsx)(`span`,{children:`필독 공지글로 상단에 고정`})]})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`제목 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:h===`sos`?`예: [SOS] ESP32 5V 인가 시 LDO에서 연기가 납니다!`:`제목을 입력하세요`,value:d,onChange:e=>f(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`내용 *`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:6,placeholder:h===`sos`?`증상, 전원 입력 조건, 쇼트 및 발열 상태를 상세히 적어주세요.`:`내용을 작성하세요.`,value:p,onChange:e=>m(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:h===`sos`?`기판 사진 첨부 (필수 - 핀포인트 마킹용)`:`이미지 첨부`}),(0,x.jsxs)(`label`,{className:`file-upload-btn`,children:[(0,x.jsx)(Nn,{size:16}),(0,x.jsx)(`span`,{children:`이미지 업로드`}),(0,x.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:le,style:{display:`none`},disabled:E})]}),h===`sos`&&b.length>0&&(0,x.jsxs)(`div`,{className:`sos-write-pin-tool`,children:[(0,x.jsxs)(`div`,{className:`pin-tool-hint`,children:[`💡 `,(0,x.jsx)(`strong`,{children:`사진의 이상 지점을 클릭`}),`하면 핀포인트 마킹(Pin 1, Pin 2...)을 추가할 수 있습니다.`]}),(0,x.jsxs)(`div`,{className:`pin-interactive-canvas`,onClick:ce,children:[(0,x.jsx)(`img`,{src:b[0],alt:`SOS Uploaded Board`}),C.map((e,t)=>(0,x.jsx)(`div`,{className:`interactive-pin-dot`,style:{left:`${e.x}%`,top:`${e.y}%`},onClick:n=>{n.stopPropagation(),confirm(`Pin ${t+1} ("${e.label}") 마킹을 삭제할까요?`)&&T(e=>e.filter((e,n)=>n!==t))},children:(0,x.jsx)(`span`,{className:`pin-num`,children:t+1})},e.id||t))]}),C.length>0&&(0,x.jsx)(`div`,{className:`pin-markers-summary`,children:C.map((e,t)=>(0,x.jsxs)(`div`,{className:`summary-pin-tag`,children:[(0,x.jsxs)(`span`,{children:[`Pin `,t+1,`: `,e.label]}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>T(e=>e.filter((e,n)=>n!==t)),children:`✕`})]},e.id||t))})]}),h!==`sos`&&b.length>0&&(0,x.jsx)(`div`,{className:`uploaded-previews-grid`,children:b.map((e,t)=>(0,x.jsx)(`div`,{className:`preview-item`,children:(0,x.jsx)(`img`,{src:e,alt:`Attach`})},t))})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>u(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:E,children:`게시글 등록`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .board-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }
        .board-tabs-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 1.25rem;
          background: white;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .board-tabs {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .board-tab-btn {
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          white-space: nowrap;
          word-break: keep-all;
          flex-shrink: 0;
        }
        .board-tab-btn:hover {
          color: var(--primary);
        }
        .board-tab-btn.active {
          background: var(--primary);
          color: white;
        }
        .board-search-box {
          position: relative;
          min-width: 240px;
        }
        .posts-table {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .posts-table-header {
          display: grid;
          grid-template-columns: 80px 1fr 140px 90px 60px 60px;
          padding: 0.85rem 1.25rem;
          background: #F8FAFC;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748B;
          border-bottom: 1px solid var(--border);
        }
        .post-row {
          display: grid;
          grid-template-columns: 80px 1fr 140px 90px 60px 60px;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid #F1F5F9;
          font-size: 0.88rem;
          align-items: center;
          cursor: pointer;
          transition: background 0.15s;
        }
        .post-row:hover {
          background: #FFFBF7;
        }
        .pinned-row {
          background: #FFFDF9;
          font-weight: 600;
        }
        .col-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-right: 1rem;
          line-height: 1.4;
        }
        .post-title-text {
          color: #0F172A;
          font-weight: 600;
          word-break: break-word;
        }
        .comment-badge-count {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.8rem;
        }
        .col-author, .col-date, .col-views, .col-likes {
          font-size: 0.82rem;
          color: #64748B;
        }
        .col-views, .col-likes {
          text-align: center;
        }
        @media (max-width: 768px) {
          .posts-table-header {
            display: none;
          }
          .post-row {
            grid-template-columns: 1fr;
            gap: 0.4rem;
          }
          .col-author, .col-date, .col-views, .col-likes {
            display: inline-block;
            margin-right: 0.5rem;
          }
        }
        .empty-board {
          padding: 4rem 1rem;
          text-align: center;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px dashed var(--border);
          color: #94A3B8;
        }
        /* Detail Modal */
        .post-detail-modal {
          max-width: 760px;
        }
        .modal-header-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .post-view-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
        }
        .post-author-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid #F1F5F9;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.78rem;
          color: #94A3B8;
        }
        .post-view-content {
          font-size: 0.95rem;
          color: #334155;
          line-height: 1.7;
          white-space: pre-wrap;
          margin-top: 0.5rem;
        }
        .post-images-grid {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin: 0.75rem 0;
        }
        .post-img-item {
          max-width: 420px;
          min-width: 180px;
          height: auto;
          max-height: 340px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: #0F172A;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .post-img-item img {
          max-width: 100%;
          max-height: 340px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
        .admin-reply-box {
          background: #FFF7ED;
          border: 1.5px solid #FED7AA;
          border-radius: var(--radius-md);
          padding: 1rem;
          margin-top: 1rem;
        }
        .admin-reply-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.5rem;
        }
        .admin-reply-header h4 {
          font-size: 0.92rem;
          font-weight: 700;
          color: #C2410C;
        }
        .admin-reply-text {
          font-size: 0.9rem;
          color: #7C2D12;
          line-height: 1.5;
          white-space: pre-wrap;
        }
        .admin-reply-empty {
          font-size: 0.85rem;
          color: #9A3412;
          font-style: italic;
        }
        .admin-control-area {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          margin-top: 1rem;
          padding-top: 0.75rem;
          border-top: 1px dashed #FDBA74;
        }
        .admin-control-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .post-like-center {
          display: flex;
          justify-content: center;
          margin: 1.5rem 0;
        }
        .post-like-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          border: 1.5px solid var(--border);
          background: white;
          color: #475569;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.2s;
        }
        .post-like-button:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        .post-like-button.active {
          border-color: var(--primary);
          color: var(--primary);
          background: #FFF7ED;
        }
        .post-comments-area {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        /* SOS & Pinpoint Styles */
        .pin-indicator-badge {
          background: #FEF2F2;
          color: #DC2626;
          border: 1px solid #FECACA;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .sos-resolved-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #ECFDF5;
          color: #065F46;
          border: 1.5px solid #A7F3D0;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .sos-unresolved-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFF7ED;
          color: #C2410C;
          border: 1.5px solid #FDBA74;
          border-radius: 10px;
          padding: 0.75rem 1rem;
          font-weight: 700;
          font-size: 0.88rem;
          margin-bottom: 1rem;
        }
        .sos-pinpoint-viewer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 0.75rem 0 1.25rem;
        }
        .pin-viewer-stage {
          position: relative;
          width: 100%;
          max-height: 420px;
          background: #0F172A;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
        }
        .pin-stage-image {
          max-width: 100%;
          max-height: 420px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .interactive-pin-dot {
          position: absolute;
          transform: translate(-50%, -50%);
          width: 26px;
          height: 26px;
          background: #EF4444;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.78rem;
          font-weight: 900;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.9), 0 0 14px rgba(239, 68, 68, 0.8);
          cursor: pointer;
          z-index: 10;
          transition: transform 0.2s ease;
          animation: pinPulse 2s infinite ease-in-out;
        }
        .interactive-pin-dot:hover {
          transform: translate(-50%, -50%) scale(1.3);
          z-index: 20;
        }
        @keyframes pinPulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.9), 0 0 10px rgba(239, 68, 68, 0.6); }
          50% { box-shadow: 0 0 0 5px rgba(255, 255, 255, 1), 0 0 18px rgba(239, 68, 68, 1); }
        }
        .pin-floating-tooltip {
          display: none;
          position: absolute;
          bottom: 115%;
          left: 50%;
          transform: translateX(-50%);
          background: #0F172A;
          color: white;
          padding: 0.35rem 0.65rem;
          border-radius: 6px;
          font-size: 0.76rem;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 30;
        }
        .interactive-pin-dot:hover .pin-floating-tooltip {
          display: block;
        }
        .pin-legend-box {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.75rem 1rem;
        }
        .legend-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.4rem;
        }
        .legend-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.84rem;
          color: #1E293B;
        }
        .legend-badge {
          background: #EF4444;
          color: white;
          font-size: 0.72rem;
          font-weight: 800;
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
        }
        /* Comment Acceptance */
        .accepted-solution-card {
          border: 2px solid #10B981 !important;
          background: #F0FDF4 !important;
          border-radius: 10px;
          overflow: hidden;
        }
        .accepted-banner {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #10B981;
          color: white;
          padding: 0.35rem 0.85rem;
          font-size: 0.78rem;
          font-weight: 800;
        }
        .comment-inner-row {
          display: flex;
          gap: 0.75rem;
          padding: 0.85rem;
        }
        .solution-accept-box {
          margin-top: 0.5rem;
        }
        .accept-solve-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFF7ED;
          color: #EA580C;
          border: 1.5px solid #FED7AA;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .accept-solve-btn:hover {
          background: #EA580C;
          color: white;
          border-color: #EA580C;
        }
        /* Write pin tool */
        .sos-write-pin-tool {
          margin-top: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .pin-tool-hint {
          font-size: 0.82rem;
          color: #C2410C;
          background: #FFF7ED;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #FFEDD5;
        }
        .pin-interactive-canvas {
          position: relative;
          cursor: crosshair;
          max-height: 280px;
          background: #0F172A;
          border-radius: 8px;
          overflow: hidden;
          display: inline-block;
          border: 2px dashed #FDBA74;
        }
        .pin-interactive-canvas img {
          max-height: 280px;
          width: auto;
          display: block;
        }
        .pin-markers-summary {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        .summary-pin-tag {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #334155;
        }
        .summary-pin-tag button {
          border: none;
          background: transparent;
          color: #DC2626;
          font-weight: 800;
          cursor: pointer;
        }
      `})]})}var dr=Object.create(null);dr.open=`0`,dr.close=`1`,dr.ping=`2`,dr.pong=`3`,dr.message=`4`,dr.upgrade=`5`,dr.noop=`6`;var fr=Object.create(null);Object.keys(dr).forEach(e=>{fr[dr[e]]=e});var pr={type:`error`,data:`parser error`},mr=typeof Blob==`function`||typeof Blob<`u`&&Object.prototype.toString.call(Blob)===`[object BlobConstructor]`,hr=typeof ArrayBuffer==`function`,gr=e=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(e):e&&e.buffer instanceof ArrayBuffer,_r=({type:e,data:t},n,r)=>mr&&t instanceof Blob?n?r(t):vr(t,r):hr&&(t instanceof ArrayBuffer||gr(t))?n?r(t):vr(new Blob([t]),r):r(dr[e]+(t||``)),vr=(e,t)=>{let n=new FileReader;return n.onload=function(){let e=n.result.split(`,`)[1];t(`b`+(e||``))},n.readAsDataURL(e)};function yr(e){return e instanceof Uint8Array?e:e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)}var br;function xr(e,t){if(mr&&e.data instanceof Blob)return e.data.arrayBuffer().then(yr).then(t);if(hr&&(e.data instanceof ArrayBuffer||gr(e.data)))return t(yr(e.data));_r(e,!1,e=>{br||=new TextEncoder,t(br.encode(e))})}var Sr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`,Cr=typeof Uint8Array>`u`?[]:new Uint8Array(256);for(let e=0;e<64;e++)Cr[Sr.charCodeAt(e)]=e;var wr=e=>{let t=e.length*.75,n=e.length,r,i=0,a,o,s,c;e[e.length-1]===`=`&&(t--,e[e.length-2]===`=`&&t--);let l=new ArrayBuffer(t),u=new Uint8Array(l);for(r=0;r<n;r+=4)a=Cr[e.charCodeAt(r)],o=Cr[e.charCodeAt(r+1)],s=Cr[e.charCodeAt(r+2)],c=Cr[e.charCodeAt(r+3)],u[i++]=a<<2|o>>4,u[i++]=(o&15)<<4|s>>2,u[i++]=(s&3)<<6|c&63;return l},Tr=typeof ArrayBuffer==`function`,Er=(e,t)=>{if(typeof e!=`string`)return{type:`message`,data:Or(e,t)};let n=e.charAt(0);return n===`b`?{type:`message`,data:Dr(e.substring(1),t)}:fr[n]?e.length>1?{type:fr[n],data:e.substring(1)}:{type:fr[n]}:pr},Dr=(e,t)=>Tr?Or(wr(e),t):{base64:!0,data:e},Or=(e,t)=>{switch(t){case`blob`:return e instanceof Blob?e:new Blob([e]);default:return e instanceof ArrayBuffer?e:e.buffer}},kr=``,Ar=(e,t)=>{let n=e.length,r=Array(n),i=0;e.forEach((e,a)=>{_r(e,!1,e=>{r[a]=e,++i===n&&t(r.join(kr))})})},jr=(e,t)=>{let n=e.split(kr),r=[];for(let e=0;e<n.length;e++){let i=Er(n[e],t);if(r.push(i),i.type===`error`)break}return r};function Mr(){return new TransformStream({transform(e,t){xr(e,n=>{let r=n.length,i;if(r<126)i=new Uint8Array(1),new DataView(i.buffer).setUint8(0,r);else if(r<65536){i=new Uint8Array(3);let e=new DataView(i.buffer);e.setUint8(0,126),e.setUint16(1,r)}else{i=new Uint8Array(9);let e=new DataView(i.buffer);e.setUint8(0,127),e.setBigUint64(1,BigInt(r))}e.data&&typeof e.data!=`string`&&(i[0]|=128),t.enqueue(i),t.enqueue(n)})}})}var Nr;function Pr(e){return e.reduce((e,t)=>e+t.length,0)}function Fr(e,t){if(e[0].length===t)return e.shift();let n=new Uint8Array(t),r=0;for(let i=0;i<t;i++)n[i]=e[0][r++],r===e[0].length&&(e.shift(),r=0);return e.length&&r<e[0].length&&(e[0]=e[0].slice(r)),n}function Ir(e,t){Nr||=new TextDecoder;let n=[],r=0,i=-1,a=!1;return new TransformStream({transform(o,s){for(n.push(o);;){if(r===0){if(Pr(n)<1)break;let e=Fr(n,1);a=(e[0]&128)==128,i=e[0]&127,r=i<126?3:i===126?1:2}else if(r===1){if(Pr(n)<2)break;let e=Fr(n,2);i=new DataView(e.buffer,e.byteOffset,e.length).getUint16(0),r=3}else if(r===2){if(Pr(n)<8)break;let e=Fr(n,8),t=new DataView(e.buffer,e.byteOffset,e.length),a=t.getUint32(0);if(a>2**21-1){s.enqueue(pr);break}i=a*2**32+t.getUint32(4),r=3}else{if(Pr(n)<i)break;let e=Fr(n,i);s.enqueue(Er(a?e:Nr.decode(e),t)),r=0}if(i===0||i>e){s.enqueue(pr);break}}}})}function Lr(e){if(e)return Rr(e)}function Rr(e){for(var t in Lr.prototype)e[t]=Lr.prototype[t];return e}Lr.prototype.on=Lr.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[`$`+e]=this._callbacks[`$`+e]||[]).push(t),this},Lr.prototype.once=function(e,t){function n(){this.off(e,n),t.apply(this,arguments)}return n.fn=t,this.on(e,n),this},Lr.prototype.off=Lr.prototype.removeListener=Lr.prototype.removeAllListeners=Lr.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var n=this._callbacks[`$`+e];if(!n)return this;if(arguments.length==1)return delete this._callbacks[`$`+e],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===t||r.fn===t){n.splice(i,1);break}return n.length===0&&delete this._callbacks[`$`+e],this},Lr.prototype.emit=function(e){this._callbacks=this._callbacks||{};for(var t=Array(arguments.length-1),n=this._callbacks[`$`+e],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,t)}return this},Lr.prototype.emitReserved=Lr.prototype.emit,Lr.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[`$`+e]||[]},Lr.prototype.hasListeners=function(e){return!!this.listeners(e).length};var zr=typeof Promise==`function`&&typeof Promise.resolve==`function`?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Br=typeof self<`u`?self:typeof window<`u`?window:Function(`return this`)(),Vr=`arraybuffer`;function Hr(e,...t){return t.reduce((t,n)=>(e.hasOwnProperty(n)&&(t[n]=e[n]),t),{})}var Ur=Br.setTimeout,Wr=Br.clearTimeout;function Gr(e,t){t.useNativeTimers?(e.setTimeoutFn=Ur.bind(Br),e.clearTimeoutFn=Wr.bind(Br)):(e.setTimeoutFn=Br.setTimeout.bind(Br),e.clearTimeoutFn=Br.clearTimeout.bind(Br))}var Kr=1.33;function qr(e){return typeof e==`string`?Jr(e):Math.ceil((e.byteLength||e.size)*Kr)}function Jr(e){let t=0,n=0;for(let r=0,i=e.length;r<i;r++)t=e.charCodeAt(r),t<128?n+=1:t<2048?n+=2:t<55296||t>=57344?n+=3:(r++,n+=4);return n}function Yr(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Xr(e){let t=``;for(let n in e)e.hasOwnProperty(n)&&(t.length&&(t+=`&`),t+=encodeURIComponent(n)+`=`+encodeURIComponent(e[n]));return t}function Zr(e){let t={},n=e.split(`&`);for(let e=0,r=n.length;e<r;e++){let r=n[e].split(`=`);t[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return t}var Qr=class extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type=`TransportError`}},$r=class extends Lr{constructor(e){super(),this.writable=!1,Gr(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved(`error`,new Qr(e,t,n)),this}open(){return this.readyState=`opening`,this.doOpen(),this}close(){return(this.readyState===`opening`||this.readyState===`open`)&&(this.doClose(),this.onClose()),this}send(e){this.readyState===`open`&&this.write(e)}onOpen(){this.readyState=`open`,this.writable=!0,super.emitReserved(`open`)}onData(e){let t=Er(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved(`packet`,e)}onClose(e){this.readyState=`closed`,super.emitReserved(`close`,e)}pause(e){}createUri(e,t={}){return e+`://`+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(`:`)===-1?e:`[`+e+`]`}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?`:`+this.opts.port:``}_query(e){let t=Xr(e);return t.length?`?`+t:``}},ei=class extends $r{constructor(){super(...arguments),this._polling=!1}get name(){return`polling`}doOpen(){this._poll()}pause(e){this.readyState=`pausing`;let t=()=>{this.readyState=`paused`,e()};if(this._polling||!this.writable){let e=0;this._polling&&(e++,this.once(`pollComplete`,function(){--e||t()})),this.writable||(e++,this.once(`drain`,function(){--e||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved(`poll`)}onData(e){jr(e,this.socket.binaryType).forEach(e=>{if(this.readyState===`opening`&&e.type===`open`&&this.onOpen(),e.type===`close`)return this.onClose({description:`transport closed by the server`}),!1;this.onPacket(e)}),this.readyState!==`closed`&&(this._polling=!1,this.emitReserved(`pollComplete`),this.readyState===`open`&&this._poll())}doClose(){let e=()=>{this.write([{type:`close`}])};this.readyState===`open`?e():this.once(`open`,e)}write(e){this.writable=!1,Ar(e,e=>{this.doWrite(e,()=>{this.writable=!0,this.emitReserved(`drain`)})})}uri(){let e=this.opts.secure?`https`:`http`,t=this.query||{};return!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=Yr()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}},ti=!1;try{ti=typeof XMLHttpRequest<`u`&&`withCredentials`in new XMLHttpRequest}catch{}var ni=ti;function ri(){}var ii=class extends ei{constructor(e){if(super(e),typeof location<`u`){let t=location.protocol===`https:`,n=location.port;n||=t?`443`:`80`,this.xd=typeof location<`u`&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){let n=this.request({method:`POST`,data:e});n.on(`success`,t),n.on(`error`,(e,t)=>{this.onError(`xhr post error`,e,t)})}doPoll(){let e=this.request();e.on(`data`,this.onData.bind(this)),e.on(`error`,(e,t)=>{this.onError(`xhr poll error`,e,t)}),this.pollXhr=e}},ai=class e extends Lr{constructor(e,t,n){super(),this.createRequest=e,Gr(this,n),this._opts=n,this._method=n.method||`GET`,this._uri=t,this._data=n.data===void 0?null:n.data,this._create()}_create(){var t;let n=Hr(this._opts,`agent`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`autoUnref`);n.xdomain=!!this._opts.xd;let r=this._xhr=this.createRequest(n);try{r.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){r.setDisableHeaderCheck&&r.setDisableHeaderCheck(!0);for(let e in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(e)&&r.setRequestHeader(e,this._opts.extraHeaders[e])}}catch{}if(this._method===`POST`)try{r.setRequestHeader(`Content-type`,`text/plain;charset=UTF-8`)}catch{}try{r.setRequestHeader(`Accept`,`*/*`)}catch{}(t=this._opts.cookieJar)==null||t.addCookies(r),`withCredentials`in r&&(r.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(r.timeout=this._opts.requestTimeout),r.onreadystatechange=()=>{var e;r.readyState===3&&((e=this._opts.cookieJar)==null||e.parseCookies(r.getResponseHeader(`set-cookie`))),r.readyState===4&&(r.status===200||r.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof r.status==`number`?r.status:0)},0))},r.send(this._data)}catch(e){this.setTimeoutFn(()=>{this._onError(e)},0);return}typeof document<`u`&&(this._index=e.requestsCount++,e.requests[this._index]=this)}_onError(e){this.emitReserved(`error`,e,this._xhr),this._cleanup(!0)}_cleanup(t){if(this._xhr!==void 0&&this._xhr!==null){if(this._xhr.onreadystatechange=ri,t)try{this._xhr.abort()}catch{}typeof document<`u`&&delete e.requests[this._index],this._xhr=null}}_onLoad(){let e=this._xhr.responseText;e!==null&&(this.emitReserved(`data`,e),this.emitReserved(`success`),this._cleanup())}abort(){this._cleanup()}};if(ai.requestsCount=0,ai.requests={},typeof document<`u`){if(typeof attachEvent==`function`)attachEvent(`onunload`,oi);else if(typeof addEventListener==`function`){let e=`onpagehide`in Br?`pagehide`:`unload`;addEventListener(e,oi,!1)}}function oi(){for(let e in ai.requests)ai.requests.hasOwnProperty(e)&&ai.requests[e].abort()}var si=(function(){let e=li({xdomain:!1});return e&&e.responseType!==null})(),ci=class extends ii{constructor(e){super(e);let t=e&&e.forceBase64;this.supportsBinary=si&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ai(li,this.uri(),e)}};function li(e){let t=e.xdomain;try{if(typeof XMLHttpRequest<`u`&&(!t||ni))return new XMLHttpRequest}catch{}if(!t)try{return new Br[[`Active`,`Object`].join(`X`)](`Microsoft.XMLHTTP`)}catch{}}var ui=typeof navigator<`u`&&typeof navigator.product==`string`&&navigator.product.toLowerCase()===`reactnative`,di=class extends $r{get name(){return`websocket`}doOpen(){let e=this.uri(),t=this.opts.protocols,n=ui?{}:Hr(this.opts,`agent`,`perMessageDeflate`,`pfx`,`key`,`passphrase`,`cert`,`ca`,`ciphers`,`rejectUnauthorized`,`localAddress`,`protocolVersion`,`origin`,`maxPayload`,`family`,`checkServerIdentity`);this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(e){return this.emitReserved(`error`,e)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:`websocket connection closed`,context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError(`websocket error`,e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],r=t===e.length-1;_r(n,this.supportsBinary,e=>{try{this.doWrite(n,e)}catch{}r&&zr(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){this.ws!==void 0&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?`wss`:`ws`,t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Yr()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}},fi=Br.WebSocket||Br.MozWebSocket,pi={websocket:class extends di{createSocket(e,t,n){return ui?new fi(e,t,n):t?new fi(e,t):new fi(e)}doWrite(e,t){this.ws.send(t)}},webtransport:class extends $r{get name(){return`webtransport`}doOpen(){try{this._transport=new WebTransport(this.createUri(`https`),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved(`error`,e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError(`webtransport error`,e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{let t=Ir(2**53-1,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),r=Mr();r.readable.pipeTo(e.writable),this._writer=r.writable.getWriter();let i=()=>{n.read().then(({done:e,value:t})=>{e||(this.onPacket(t),i())}).catch(e=>{})};i();let a={type:`open`};this.query.sid&&(a.data=`{"sid":"${this.query.sid}"}`),this._writer.write(a).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],r=t===e.length-1;this._writer.write(n).then(()=>{r&&zr(()=>{this.writable=!0,this.emitReserved(`drain`)},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)==null||e.close()}},polling:ci},mi=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,hi=[`source`,`protocol`,`authority`,`userInfo`,`user`,`password`,`host`,`port`,`relative`,`path`,`directory`,`file`,`query`,`anchor`];function gi(e){if(e.length>8e3)throw`URI too long`;let t=e,n=e.indexOf(`[`),r=e.indexOf(`]`);n!=-1&&r!=-1&&(e=e.substring(0,n)+e.substring(n,r).replace(/:/g,`;`)+e.substring(r,e.length));let i=mi.exec(e||``),a={},o=14;for(;o--;)a[hi[o]]=i[o]||``;return n!=-1&&r!=-1&&(a.source=t,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,`:`),a.authority=a.authority.replace(`[`,``).replace(`]`,``).replace(/;/g,`:`),a.ipv6uri=!0),a.pathNames=_i(a,a.path),a.queryKey=vi(a,a.query),a}function _i(e,t){let n=t.replace(/\/{2,9}/g,`/`).split(`/`);return(t.slice(0,1)==`/`||t.length===0)&&n.splice(0,1),t.slice(-1)==`/`&&n.splice(n.length-1,1),n}function vi(e,t){let n={};return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(e,t,r){t&&(n[t]=r)}),n}var yi=typeof addEventListener==`function`&&typeof removeEventListener==`function`,bi=[];yi&&addEventListener(`offline`,()=>{bi.forEach(e=>e())},!1);var xi=class e extends Lr{constructor(e,t){if(super(),this.binaryType=Vr,this.writeBuffer=[],this._prevBufferLen=0,this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e==`object`&&(t=e,e=null),e){let n=gi(e);t.hostname=n.host,t.secure=n.protocol===`https`||n.protocol===`wss`,t.port=n.port,n.query&&(t.query=n.query)}else t.host&&(t.hostname=gi(t.host).host);Gr(this,t),this.secure=t.secure==null?typeof location<`u`&&location.protocol===`https:`:t.secure,t.hostname&&!t.port&&(t.port=this.secure?`443`:`80`),this.hostname=t.hostname||(typeof location<`u`?location.hostname:`localhost`),this.port=t.port||(typeof location<`u`&&location.port?location.port:this.secure?`443`:`80`),this.transports=[],this._transportsByName={},t.transports.forEach(e=>{let t=e.prototype.name;this.transports.push(t),this._transportsByName[t]=e}),this.opts=Object.assign({path:`/engine.io`,agent:!1,withCredentials:!1,upgrade:!0,timestampParam:`t`,rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,``)+(this.opts.addTrailingSlash?`/`:``),typeof this.opts.query==`string`&&(this.opts.query=Zr(this.opts.query)),yi&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener(`beforeunload`,this._beforeunloadEventListener,!1)),this.hostname!==`localhost`&&(this._offlineEventListener=()=>{this._onClose(`transport close`,{description:`network connection lost`})},bi.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=4,t.transport=e,this.id&&(t.sid=this.id);let n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved(`error`,`No transports available`)},0);return}let t=this.opts.rememberUpgrade&&e.priorWebsocketSuccess&&this.transports.indexOf(`websocket`)!==-1?`websocket`:this.transports[0];this.readyState=`opening`;let n=this.createTransport(t);n.open(),this.setTransport(n)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on(`drain`,this._onDrain.bind(this)).on(`packet`,this._onPacket.bind(this)).on(`error`,this._onError.bind(this)).on(`close`,e=>this._onClose(`transport close`,e))}onOpen(){this.readyState=`open`,e.priorWebsocketSuccess=this.transport.name===`websocket`,this.emitReserved(`open`),this.flush()}_onPacket(e){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`)switch(this.emitReserved(`packet`,e),this.emitReserved(`heartbeat`),e.type){case`open`:this.onHandshake(JSON.parse(e.data));break;case`ping`:this._sendPacket(`pong`),this.emitReserved(`ping`),this.emitReserved(`pong`),this._resetPingTimeout();break;case`error`:let t=Error(`server error`);t.code=e.data,this._onError(t);break;case`message`:this.emitReserved(`data`,e.data),this.emitReserved(`message`,e.data)}}onHandshake(e){this.emitReserved(`handshake`,e),this.id=e.sid,this.transport.query.sid=e.sid,this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!==`closed`&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose(`ping timeout`)},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved(`drain`):this.flush()}flush(){if(this.readyState!==`closed`&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved(`flush`)}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name===`polling`&&this.writeBuffer.length>1))return this.writeBuffer;let e=1;for(let t=0;t<this.writeBuffer.length;t++){let n=this.writeBuffer[t].data;if(n&&(e+=qr(n)),t>0&&e>this._maxPayload)return this.writeBuffer.slice(0,t);e+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,zr(()=>{this._onClose(`ping timeout`)},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket(`message`,e,t,n),this}send(e,t,n){return this._sendPacket(`message`,e,t,n),this}_sendPacket(e,t,n,r){if(typeof t==`function`&&(r=t,t=void 0),typeof n==`function`&&(r=n,n=null),this.readyState===`closing`||this.readyState===`closed`)return;n||={},n.compress=!1!==n.compress;let i={type:e,data:t,options:n};this.emitReserved(`packetCreate`,i),this.writeBuffer.push(i),r&&this.once(`flush`,r),this.flush()}close(){let e=()=>{this._onClose(`forced close`),this.transport.close()},t=()=>{this.off(`upgrade`,t),this.off(`upgradeError`,t),e()},n=()=>{this.once(`upgrade`,t),this.once(`upgradeError`,t)};return(this.readyState===`opening`||this.readyState===`open`)&&(this.readyState=`closing`,this.writeBuffer.length?this.once(`drain`,()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(t){if(e.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState===`opening`)return this.transports.shift(),this._open();this.emitReserved(`error`,t),this._onClose(`transport error`,t)}_onClose(e,t){if(this.readyState===`opening`||this.readyState===`open`||this.readyState===`closing`){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners(`close`),this.transport.close(),this.transport.removeAllListeners(),yi&&(this._beforeunloadEventListener&&removeEventListener(`beforeunload`,this._beforeunloadEventListener,!1),this._offlineEventListener)){let e=bi.indexOf(this._offlineEventListener);e!==-1&&bi.splice(e,1)}this.readyState=`closed`,this.id=null,this.emitReserved(`close`,e,t),this.writeBuffer=[],this._prevBufferLen=0}}};xi.protocol=4;var Si=class extends xi{constructor(){super(...arguments),this._upgrades=[]}onOpen(){if(super.onOpen(),this.readyState===`open`&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_probe(e){let t=this.createTransport(e),n=!1;xi.priorWebsocketSuccess=!1;let r=()=>{n||(t.send([{type:`ping`,data:`probe`}]),t.once(`packet`,e=>{if(!n){if(e.type===`pong`&&e.data===`probe`){if(this.upgrading=!0,this.emitReserved(`upgrading`,t),!t)return;xi.priorWebsocketSuccess=t.name===`websocket`,this.transport.pause(()=>{n||this.readyState!==`closed`&&(l(),this.setTransport(t),t.send([{type:`upgrade`}]),this.emitReserved(`upgrade`,t),t=null,this.upgrading=!1,this.flush())})}else{let e=Error(`probe error`);e.transport=t.name,this.emitReserved(`upgradeError`,e)}}}))};function i(){n||(n=!0,l(),t.close(),t=null)}let a=e=>{let n=Error(`probe error: `+e);n.transport=t.name,i(),this.emitReserved(`upgradeError`,n)};function o(){a(`transport closed`)}function s(){a(`socket closed`)}function c(e){t&&e.name!==t.name&&i()}let l=()=>{t.removeListener(`open`,r),t.removeListener(`error`,a),t.removeListener(`close`,o),this.off(`close`,s),this.off(`upgrading`,c)};t.once(`open`,r),t.once(`error`,a),t.once(`close`,o),this.once(`close`,s),this.once(`upgrading`,c),this._upgrades.indexOf(`webtransport`)!==-1&&e!==`webtransport`?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onHandshake(e){this._upgrades=this._filterUpgrades(e.upgrades),super.onHandshake(e)}_filterUpgrades(e){let t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}},Ci=class extends Si{constructor(e,t={}){let n=typeof e==`object`,r=n?{...e}:{...t};(!r.transports||r.transports&&typeof r.transports[0]==`string`)&&(r.transports=(r.transports||[`polling`,`websocket`,`webtransport`]).map(e=>pi[e]).filter(e=>!!e)),super(n?r:e,r)}};Ci.protocol;function wi(e,t=``,n){let r=e;n||=typeof location<`u`&&location,e??=n.protocol+`//`+n.host,typeof e==`string`&&(e.charAt(0)===`/`&&(e=e.charAt(1)===`/`?n.protocol+e:n.host+e),/^(https?|wss?):\/\//.test(e)||(e=n===void 0?`https://`+e:n.protocol+`//`+e),r=gi(e)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port=`80`:/^(http|ws)s$/.test(r.protocol)&&(r.port=`443`)),r.path=r.path||`/`;let i=r.host.indexOf(`:`)===-1?r.host:`[`+r.host+`]`;return r.id=r.protocol+`://`+i+`:`+r.port+t,r.href=r.protocol+`://`+i+(n&&n.port===r.port?``:`:`+r.port),r}var Ti=typeof ArrayBuffer==`function`,Ei=e=>typeof ArrayBuffer.isView==`function`?ArrayBuffer.isView(e):e.buffer instanceof ArrayBuffer,Di=Object.prototype.toString,Oi=typeof Blob==`function`||typeof Blob<`u`&&Di.call(Blob)===`[object BlobConstructor]`,ki=typeof File==`function`||typeof File<`u`&&Di.call(File)===`[object FileConstructor]`;function Ai(e){return Ti&&(e instanceof ArrayBuffer||Ei(e))||Oi&&e instanceof Blob||ki&&e instanceof File}function ji(e,t){if(!e||typeof e!=`object`)return!1;if(Array.isArray(e)){for(let t=0,n=e.length;t<n;t++)if(ji(e[t]))return!0;return!1}if(Ai(e))return!0;if(e.toJSON&&typeof e.toJSON==`function`&&arguments.length===1)return ji(e.toJSON(),!0);for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&ji(e[t]))return!0;return!1}function Mi(e){let t=[],n=e.data,r=e;return r.data=Ni(n,t),r.attachments=t.length,{packet:r,buffers:t}}function Ni(e,t,n){if(!e)return e;if(Ai(e)){let n={_placeholder:!0,num:t.length};return t.push(e),n}if(Array.isArray(e)){let n=Array(e.length);for(let r=0;r<e.length;r++)n[r]=Ni(e[r],t);return n}if(typeof e==`object`&&!(e instanceof Date)){if(e.toJSON&&typeof e.toJSON==`function`&&!n)return Ni(e.toJSON(),t,!0);let r={};for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=Ni(e[n],t));return r}return e}function Pi(e,t){return e.data=Fi(e.data,t),delete e.attachments,e}function Fi(e,t){if(!e)return e;if(e&&e._placeholder===!0){if(typeof e.num==`number`&&e.num>=0&&e.num<t.length)return t[e.num];throw Error(`illegal attachments`)}if(Array.isArray(e))for(let n=0;n<e.length;n++)e[n]=Fi(e[n],t);else if(typeof e==`object`)for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=Fi(e[n],t));return e}var Ii=s({Decoder:()=>zi,Encoder:()=>Ri,PacketType:()=>R,isPacketValid:()=>Ki,protocol:()=>5}),Li=[`connect`,`connect_error`,`disconnect`,`disconnecting`,`newListener`,`removeListener`],R;(function(e){e[e.CONNECT=0]=`CONNECT`,e[e.DISCONNECT=1]=`DISCONNECT`,e[e.EVENT=2]=`EVENT`,e[e.ACK=3]=`ACK`,e[e.CONNECT_ERROR=4]=`CONNECT_ERROR`,e[e.BINARY_EVENT=5]=`BINARY_EVENT`,e[e.BINARY_ACK=6]=`BINARY_ACK`})(R||={});var Ri=class{constructor(e){this.replacer=e}encode(e){return(e.type===R.EVENT||e.type===R.ACK)&&ji(e)?this.encodeAsBinary({type:e.type===R.EVENT?R.BINARY_EVENT:R.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=``+e.type;return(e.type===R.BINARY_EVENT||e.type===R.BINARY_ACK)&&(t+=e.attachments+`-`),e.nsp&&e.nsp!==`/`&&(t+=e.nsp+`,`),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=Mi(e),n=this.encodeAsString(t.packet),r=t.buffers;return r.unshift(n),r}},zi=class e extends Lr{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e==`function`?{reviver:e}:e)}add(e){let t;if(typeof e==`string`){if(this.reconstructor)throw Error(`got plaintext data when reconstructing a packet`);t=this.decodeString(e);let n=t.type===R.BINARY_EVENT;n||t.type===R.BINARY_ACK?(t.type=n?R.EVENT:R.ACK,this.reconstructor=new Bi(t)):super.emitReserved(`decoded`,t)}else if(Ai(e)||e.base64){if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved(`decoded`,t));else throw Error(`got binary data when not reconstructing a packet`)}else throw Error(`Unknown type: `+e)}decodeString(t){let n=0,r={type:Number(t.charAt(0))};if(R[r.type]===void 0)throw Error(`unknown packet type `+r.type);if(r.type===R.BINARY_EVENT||r.type===R.BINARY_ACK){let e=n+1;for(;t.charAt(++n)!==`-`&&n!=t.length;);let i=t.substring(e,n);if(i!=Number(i)||t.charAt(n)!==`-`)throw Error(`Illegal attachments`);let a=Number(i);if(!Hi(a)||a<1)throw Error(`Illegal attachments`);if(a>this.opts.maxAttachments)throw Error(`too many attachments`);r.attachments=a}if(t.charAt(n+1)===`/`){let e=n+1;for(;++n&&t.charAt(n)!==`,`&&n!==t.length;);r.nsp=t.substring(e,n)}else r.nsp=`/`;let i=t.charAt(n+1);if(i!==``&&Number(i)==i){let e=n+1;for(;++n;){let e=t.charAt(n);if(e==null||Number(e)!=e){--n;break}if(n===t.length)break}r.id=Number(t.substring(e,n+1))}if(t.charAt(++n)){let i=this.tryParse(t.substr(n));if(e.isPayloadValid(r.type,i))r.data=i;else throw Error(`invalid payload`)}return r}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case R.CONNECT:return Wi(t);case R.DISCONNECT:return t===void 0;case R.CONNECT_ERROR:return typeof t==`string`||Wi(t);case R.EVENT:case R.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]==`number`||typeof t[0]==`string`&&Li.indexOf(t[0])===-1);case R.ACK:case R.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&=(this.reconstructor.finishedReconstruction(),null)}},Bi=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let e=Pi(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function Vi(e){return typeof e==`string`}var Hi=Number.isInteger||function(e){return typeof e==`number`&&isFinite(e)&&Math.floor(e)===e};function Ui(e){return e===void 0||Hi(e)}function Wi(e){return Object.prototype.toString.call(e)===`[object Object]`}function Gi(e,t){switch(e){case R.CONNECT:return t===void 0||Wi(t);case R.DISCONNECT:return t===void 0;case R.EVENT:return Array.isArray(t)&&(typeof t[0]==`number`||typeof t[0]==`string`&&Li.indexOf(t[0])===-1);case R.ACK:return Array.isArray(t);case R.CONNECT_ERROR:return typeof t==`string`||Wi(t);default:return!1}}function Ki(e){return Vi(e.nsp)&&Ui(e.id)&&Gi(e.type,e.data)}function qi(e,t,n){return e.on(t,n),function(){e.off(t,n)}}var Ji=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Yi=class extends Lr{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[qi(e,`open`,this.onopen.bind(this)),qi(e,`packet`,this.onpacket.bind(this)),qi(e,`error`,this.onerror.bind(this)),qi(e,`close`,this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState===`open`&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift(`message`),this.emit.apply(this,e),this}emit(e,...t){if(Ji.hasOwnProperty(e))throw Error(`"`+e.toString()+`" is a reserved event name`);if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let n={type:R.EVENT,data:t};if(n.options={},n.options.compress=this.flags.compress!==!1,typeof t[t.length-1]==`function`){let e=this.ids++,r=t.pop();this._registerAckCallback(e,r),n.id=e}let r=this.io.engine?.transport?.writable,i=this.connected&&!this.io.engine?._hasPingExpired();return this.flags.volatile&&!r||(i?(this.notifyOutgoingListeners(n),this.packet(n)):this.sendBuffer.push(n)),this.flags={},this}_registerAckCallback(e,t){let n=this.flags.timeout??this._opts.ackTimeout;if(n===void 0){this.acks[e]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let t=0;t<this.sendBuffer.length;t++)this.sendBuffer[t].id===e&&this.sendBuffer.splice(t,1);t.call(this,Error(`operation has timed out`))},n),i=(...e)=>{this.io.clearTimeoutFn(r),t.apply(this,e)};i.withError=!0,this.acks[e]=i}emitWithAck(e,...t){return new Promise((n,r)=>{let i=(e,t)=>e?r(e):n(t);i.withError=!0,t.push(i),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]==`function`&&(t=e.pop());let n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((e,...r)=>(this._queue[0],e===null?(this._queue.shift(),t&&t(null,...r)):n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(e)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];(!t.pending||e)&&(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth==`function`?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:R.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved(`connect_error`,e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved(`disconnect`,e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(t=>String(t.id)===e)){let t=this.acks[e];delete this.acks[e],t.withError&&t.call(this,Error(`socket has been disconnected`))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case R.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved(`connect_error`,Error(`It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)`));break;case R.EVENT:case R.BINARY_EVENT:this.onevent(e);break;case R.ACK:case R.BINARY_ACK:this.onack(e);break;case R.DISCONNECT:this.ondisconnect();break;case R.CONNECT_ERROR:this.destroy();let t=Error(e.data.message);t.data=e.data.data,this.emitReserved(`connect_error`,t)}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]==`string`&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,n=!1;return function(...r){n||(n=!0,t.packet({type:R.ACK,id:e,data:r}))}}onack(e){let t=this.acks[e.id];typeof t==`function`&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved(`connect`)}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose(`io server disconnect`)}destroy(){this.subs&&=(this.subs.forEach(e=>e()),void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:R.DISCONNECT}),this.destroy(),this.connected&&this.onclose(`io client disconnect`),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let n of t)n.apply(this,e.data)}}};function Xi(e){e||={},this.ms=e.min||100,this.max=e.max||1e4,this.factor=e.factor||2,this.jitter=e.jitter>0&&e.jitter<=1?e.jitter:0,this.attempts=0}Xi.prototype.duration=function(){var e=this.ms*this.factor**+this.attempts++;if(this.jitter){var t=Math.random(),n=Math.floor(t*this.jitter*e);e=Math.floor(t*10)&1?e+n:e-n}return Math.min(e,this.max)|0},Xi.prototype.reset=function(){this.attempts=0},Xi.prototype.setMin=function(e){this.ms=e},Xi.prototype.setMax=function(e){this.max=e},Xi.prototype.setJitter=function(e){this.jitter=e};var Zi=class extends Lr{constructor(e,t){super(),this.nsps={},this.subs=[],e&&typeof e==`object`&&(t=e,e=void 0),t||={},t.path=t.path||`/socket.io`,this.opts=t,Gr(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(t.randomizationFactor??.5),this.backoff=new Xi({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState=`closed`,this.uri=e;let n=t.parser||Ii;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)==null||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)==null||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)==null||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf(`open`))return this;this.engine=new Ci(this.uri,this.opts);let t=this.engine,n=this;this._readyState=`opening`,this.skipReconnect=!1;let r=qi(t,`open`,function(){n.onopen(),e&&e()}),i=t=>{this.cleanup(),this._readyState=`closed`,this.emitReserved(`error`,t),e?e(t):this.maybeReconnectOnOpen()},a=qi(t,`error`,i);if(!1!==this._timeout){let e=this._timeout,n=this.setTimeoutFn(()=>{r(),i(Error(`timeout`)),t.close()},e);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}return this.subs.push(r),this.subs.push(a),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState=`open`,this.emitReserved(`open`);let e=this.engine;this.subs.push(qi(e,`ping`,this.onping.bind(this)),qi(e,`data`,this.ondata.bind(this)),qi(e,`error`,this.onerror.bind(this)),qi(e,`close`,this.onclose.bind(this)),qi(this.decoder,`decoded`,this.ondecoded.bind(this)))}onping(){this.emitReserved(`ping`)}ondata(e){try{this.decoder.add(e)}catch(e){this.onclose(`parse error`,e)}}ondecoded(e){zr(()=>{this.emitReserved(`packet`,e)},this.setTimeoutFn)}onerror(e){this.emitReserved(`error`,e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Yi(this,e,t),this.nsps[e]=n),n}_destroy(e){let t=Object.keys(this.nsps);for(let e of t)if(this.nsps[e].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose(`forced close`)}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)==null||n.close(),this.backoff.reset(),this._readyState=`closed`,this.emitReserved(`close`,e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved(`reconnect_failed`),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved(`reconnect_attempt`,e.backoff.attempts),!e.skipReconnect&&e.open(t=>{t?(e._reconnecting=!1,e.reconnect(),this.emitReserved(`reconnect_error`,t)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved(`reconnect`,e)}},Qi={};function $i(e,t){typeof e==`object`&&(t=e,e=void 0),t||={};let n=wi(e,t.path||`/socket.io`),r=n.source,i=n.id,a=n.path,o=Qi[i]&&a in Qi[i].nsps,s=t.forceNew||t[`force new connection`]||!1===t.multiplex||o,c;return s?c=new Zi(r,t):(Qi[i]||(Qi[i]=new Zi(r,t)),c=Qi[i]),n.query&&!t.query&&(t.query=n.queryKey),c.socket(n.path,t)}Object.assign($i,{Manager:Zi,Socket:Yi,io:$i,connect:$i});function ea({initialDmUserId:e}){let{currentUser:t,users:n}=w(),[r,i]=(0,v.useState)(`channel`),[a,o]=(0,v.useState)([]),[s,c]=(0,v.useState)(`ch_general`),[l,u]=(0,v.useState)(null),[d,f]=(0,v.useState)(null);(0,v.useEffect)(()=>{if(e&&n?.length){let t=n.find(t=>t.id===e);t&&(i(`dm`),u(t))}},[e,n]);let[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)(!1),[_,y]=(0,v.useState)(``),b=(0,v.useRef)(null),S=(0,v.useRef)(null);(0,v.useEffect)(()=>{if(!window.location.hostname.includes(`github.io`))try{b.current=$i({reconnectionAttempts:3,timeout:3e3})}catch(e){console.warn(`Socket connection error, running in local fallback mode:`,e)}return b.current&&(b.current.on(`new_channel_message`,({channelId:e,message:t})=>{o(n=>n.map(n=>n.id===e?n.messages.some(e=>e.id===t.id)?n:{...n,messages:[...n.messages,t]}:n))}),b.current.on(`new_dm_message`,({threadId:e,message:t})=>{f(n=>n&&n.id===e?n.messages.some(e=>e.id===t.id)?n:{...n,messages:[...n.messages,t]}:n)})),()=>{b.current&&b.current.disconnect()}},[]);let C=async()=>{try{let e=await fetch(`/api/channels`);if(e.ok){let t=await e.json();o(t)}}catch(e){console.error(`Failed to load channels:`,e)}};(0,v.useEffect)(()=>{C()},[]),(0,v.useEffect)(()=>{r===`channel`&&s&&b.current&&b.current.emit(`join_channel`,s)},[r,s]),(0,v.useEffect)(()=>{(async()=>{if(r===`dm`&&l&&t)try{let e=await fetch(`/api/dm/${t.id}/${l.id}`);if(e.ok){let t=await e.json();f(t),b.current&&b.current.emit(`join_dm`,t.id)}}catch(e){console.error(`Failed to load DM:`,e)}})()},[r,l,t]),(0,v.useEffect)(()=>{S.current&&(S.current.scrollTop=S.current.scrollHeight)},[a,d,s,l]),(0,v.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})},[]);let T=a.find(e=>e.id===s),E=e=>{if(e.preventDefault(),!p.trim()&&!_||!t)return;let n={id:`msg_${Date.now()}_${Math.random().toString(36).substr(2,5)}`,senderId:t.id,senderName:t.name,senderAvatar:t.avatar,text:p.trim(),image:_||void 0,createdAt:new Date().toISOString()};r===`channel`?(b.current?.emit(`send_channel_message`,{channelId:s,message:n}),o(e=>e.map(e=>e.id===s?{...e,messages:[...e.messages,n]}:e))):r===`dm`&&l&&d&&(b.current?.emit(`send_dm_message`,{user1Id:t.id,user2Id:l.id,threadId:d.id,message:n}),f(e=>({...e,messages:[...e?.messages||[],n]}))),m(``),y(``)},D=async e=>{let t=e.target.files[0];if(t){g(!0);try{let e=new FormData;e.append(`file`,t);let n=await fetch(`/api/upload`,{method:`POST`,body:e});if(n.ok){let e=await n.json();y(e.url)}else y(URL.createObjectURL(t))}catch{y(URL.createObjectURL(t))}finally{g(!1)}}},O=n.filter(e=>e.id!==t?.id);return(0,x.jsxs)(`div`,{className:`chat-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`chat-layout`,children:[(0,x.jsxs)(`div`,{className:`chat-sidebar`,children:[(0,x.jsxs)(`div`,{className:`chat-nav-tabs`,children:[(0,x.jsxs)(`button`,{className:`chat-tab-btn ${r===`channel`?`active`:``}`,onClick:()=>i(`channel`),children:[(0,x.jsx)(Vn,{size:16}),(0,x.jsx)(`span`,{children:`멀티 채널`})]}),(0,x.jsxs)(`button`,{className:`chat-tab-btn ${r===`dm`?`active`:``}`,onClick:()=>{i(`dm`),!l&&O.length>0&&u(O[0])},children:[(0,x.jsx)(Ct,{size:16}),(0,x.jsx)(`span`,{children:`1:1 개인 DM`})]})]}),r===`channel`?(0,x.jsxs)(`div`,{className:`sidebar-list`,children:[(0,x.jsx)(`div`,{className:`sidebar-header-label`,children:`모임 단체 채팅 채널`}),a.map(e=>(0,x.jsxs)(`div`,{className:`channel-item ${s===e.id?`active`:``}`,onClick:()=>c(e.id),children:[(0,x.jsx)(st,{size:16,className:`channel-hash-icon`}),(0,x.jsxs)(`div`,{className:`channel-item-info`,children:[(0,x.jsx)(`span`,{className:`channel-item-name`,children:e.name}),(0,x.jsx)(`span`,{className:`channel-item-preview`,children:e.description})]})]},e.id))]}):(0,x.jsxs)(`div`,{className:`sidebar-list`,children:[(0,x.jsx)(`div`,{className:`sidebar-header-label`,children:`회원 다이렉트 메시지`}),O.map(e=>{let t=l?.id===e.id;return(0,x.jsxs)(`div`,{className:`dm-user-item ${t?`active`:``}`,onClick:()=>u(e),children:[(0,x.jsxs)(`div`,{className:`dm-avatar-wrapper`,children:[(0,x.jsx)(`img`,{src:e.avatar,alt:e.name,className:`dm-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=dm`}}),(0,x.jsx)(`span`,{className:`online-dot`})]}),(0,x.jsxs)(`div`,{className:`dm-user-info`,children:[(0,x.jsxs)(`div`,{className:`dm-user-top`,children:[(0,x.jsx)(`span`,{className:`dm-user-name`,children:e.name}),e.role===`admin`&&(0,x.jsx)(`span`,{className:`mini-admin-badge`,children:`운영진`})]}),(0,x.jsx)(`span`,{className:`dm-user-bio`,children:e.bio})]})]},e.id)})]})]}),(0,x.jsxs)(`div`,{className:`chat-main-panel`,children:[(0,x.jsx)(`div`,{className:`chat-top-header`,children:r===`channel`?(0,x.jsxs)(`div`,{className:`chat-target-info`,children:[(0,x.jsx)(st,{size:20,className:`active-hash-icon`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{className:`active-title`,children:T?.name||`자유수다방`}),(0,x.jsx)(`span`,{className:`active-desc`,children:T?.description})]})]}):(0,x.jsxs)(`div`,{className:`chat-target-info`,children:[(0,x.jsx)(`img`,{src:l?.avatar,alt:l?.name,className:`dm-header-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=header`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h3`,{className:`active-title`,children:l?.name||`회원 선택`}),(0,x.jsxs)(`span`,{className:`active-desc`,children:[`@`,l?.username,` • 1:1 다이렉트 메시지`]})]})]})}),(0,x.jsx)(`div`,{className:`chat-messages-scroll`,ref:S,children:r===`channel`?T?.messages?.map(e=>{let n=e.senderId===t?.id;return(0,x.jsxs)(`div`,{className:`chat-message-row ${n?`me`:`other`}`,children:[!n&&(0,x.jsx)(`img`,{src:e.senderAvatar,alt:e.senderName,className:`msg-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=msg`}}),(0,x.jsxs)(`div`,{className:`msg-bubble-container`,children:[!n&&(0,x.jsx)(`span`,{className:`msg-sender-name`,children:e.senderName}),(0,x.jsxs)(`div`,{className:`msg-bubble ${n?`bubble-me`:`bubble-other`}`,children:[e.image&&(0,x.jsx)(`div`,{className:`msg-image-box`,children:(0,x.jsx)(`img`,{src:e.image,alt:`Sent`})}),e.text&&(0,x.jsx)(`p`,{className:`msg-text`,children:e.text})]}),(0,x.jsx)(`span`,{className:`msg-time`,children:new Date(e.createdAt).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})})]})]},e.id)}):d?.messages?.map(e=>{let n=e.senderId===t?.id;return(0,x.jsx)(`div`,{className:`chat-message-row ${n?`me`:`other`}`,children:(0,x.jsxs)(`div`,{className:`msg-bubble-container`,children:[(0,x.jsxs)(`div`,{className:`msg-bubble ${n?`bubble-me`:`bubble-other`}`,children:[e.image&&(0,x.jsx)(`div`,{className:`msg-image-box`,children:(0,x.jsx)(`img`,{src:e.image,alt:`Sent`})}),e.text&&(0,x.jsx)(`p`,{className:`msg-text`,children:e.text})]}),(0,x.jsx)(`span`,{className:`msg-time`,children:new Date(e.createdAt).toLocaleTimeString(`ko-KR`,{hour:`2-digit`,minute:`2-digit`})})]})},e.id)})}),_&&(0,x.jsxs)(`div`,{className:`chat-upload-preview`,children:[(0,x.jsx)(`img`,{src:_,alt:`Preview`}),(0,x.jsx)(`button`,{type:`button`,className:`remove-preview-btn`,onClick:()=>y(``),children:`✕`})]}),(0,x.jsxs)(`form`,{onSubmit:E,className:`chat-input-bar`,children:[(0,x.jsxs)(`label`,{className:`chat-attach-btn`,title:`사진 / 회로도 이미지 전송`,children:[(0,x.jsx)(Lt,{size:18}),(0,x.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:D,style:{display:`none`},disabled:h})]}),(0,x.jsx)(`input`,{type:`text`,className:`chat-text-input`,placeholder:r===`channel`?`${T?.name||`채널`}에 실시간 메시지 입력...`:`${l?.name||`회원`}님에게 1:1 메시지 보내기...`,value:p,onChange:e=>m(e.target.value)}),(0,x.jsx)(`button`,{type:`submit`,className:`chat-send-btn`,disabled:!p.trim()&&!_,children:(0,x.jsx)(nn,{size:18})})]})]})]}),(0,x.jsx)(`style`,{children:`
        .chat-container {
          width: 100%;
        }
        .chat-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          height: calc(100vh - 220px);
          min-height: 520px;
          max-height: 800px;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        @media (max-width: 800px) {
          .chat-layout {
            grid-template-columns: 1fr;
          }
          .chat-sidebar {
            display: none;
          }
        }
        .chat-sidebar {
          background: #F8FAFC;
          border-right: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .chat-nav-tabs {
          display: flex;
          padding: 0.75rem;
          gap: 0.5rem;
          border-bottom: 1px solid var(--border);
          background: white;
        }
        .chat-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.6rem 0.5rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #64748B;
          background: #F1F5F9;
        }
        .chat-tab-btn.active {
          background: var(--primary);
          color: white;
        }
        .sidebar-list {
          flex: 1;
          overflow-y: auto;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .sidebar-header-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.4rem 0.5rem;
        }
        .channel-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .channel-item:hover {
          background: #EEF2F6;
        }
        .channel-item.active {
          background: white;
          box-shadow: var(--shadow-sm);
          border: 1px solid #E2E8F0;
        }
        .channel-hash-icon {
          color: #94A3B8;
        }
        .channel-item.active .channel-hash-icon {
          color: var(--primary);
        }
        .channel-item-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .channel-item-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1E293B;
        }
        .channel-item-preview {
          font-size: 0.72rem;
          color: #64748B;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        /* DM Item */
        .dm-user-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.65rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .dm-user-item:hover {
          background: #EEF2F6;
        }
        .dm-user-item.active {
          background: white;
          box-shadow: var(--shadow-sm);
          border: 1px solid #E2E8F0;
        }
        .dm-avatar-wrapper {
          position: relative;
        }
        .dm-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }
        .online-dot {
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 9px;
          height: 9px;
          background: #10B981;
          border-radius: 50%;
          border: 1.5px solid white;
        }
        .dm-user-info {
          flex: 1;
          overflow: hidden;
        }
        .dm-user-top {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .dm-user-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1E293B;
        }
        .mini-admin-badge {
          font-size: 0.65rem;
          background: #FFF2E8;
          color: #EA580C;
          font-weight: 800;
          padding: 0.05rem 0.3rem;
          border-radius: 4px;
        }
        .dm-user-bio {
          font-size: 0.72rem;
          color: #94A3B8;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
        }
        /* Chat Main Panel */
        .chat-main-panel {
          display: flex;
          flex-direction: column;
          background: #FAFBFD;
        }
        .chat-top-header {
          padding: 0.9rem 1.25rem;
          background: white;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .chat-target-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .active-hash-icon {
          color: var(--primary);
        }
        .dm-header-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid #FFD8BE;
        }
        .active-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
        }
        .active-desc {
          font-size: 0.75rem;
          color: #64748B;
        }
        .chat-messages-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chat-message-row {
          display: flex;
          gap: 0.6rem;
          max-width: 75%;
        }
        .chat-message-row.me {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .chat-message-row.other {
          align-self: flex-start;
        }
        .msg-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          align-self: flex-start;
          object-fit: cover;
        }
        .msg-bubble-container {
          display: flex;
          flex-direction: column;
        }
        .chat-message-row.me .msg-bubble-container {
          align-items: flex-end;
        }
        .msg-sender-name {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748B;
          margin-bottom: 0.2rem;
          margin-left: 0.2rem;
        }
        .msg-bubble {
          padding: 0.75rem 1rem;
          border-radius: 14px;
          font-size: 0.9rem;
          line-height: 1.5;
          word-break: break-word;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .bubble-other {
          background: white;
          color: #1E293B;
          border: 1px solid var(--border);
          border-top-left-radius: 3px;
        }
        .bubble-me {
          background: var(--primary);
          color: white;
          border-top-right-radius: 3px;
        }
        .msg-image-box {
          max-width: 280px;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 0.4rem;
        }
        .msg-image-box img {
          width: 100%;
          display: block;
        }
        .msg-time {
          font-size: 0.68rem;
          color: #94A3B8;
          margin-top: 0.2rem;
          padding: 0 0.25rem;
        }
        .chat-upload-preview {
          position: relative;
          width: 100px;
          height: 80px;
          margin: 0.5rem 1.25rem 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .chat-upload-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .remove-preview-btn {
          position: absolute;
          top: 2px;
          right: 2px;
          background: rgba(0, 0, 0, 0.65);
          color: white;
          border-radius: 50%;
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
        }
        .chat-input-bar {
          padding: 0.85rem 1.25rem;
          background: white;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .chat-attach-btn {
          color: #64748B;
          cursor: pointer;
          padding: 0.4rem;
          border-radius: 6px;
        }
        .chat-attach-btn:hover {
          color: var(--primary);
          background: #F8FAFC;
        }
        .chat-text-input {
          flex: 1;
          padding: 0.7rem 1rem;
          border: 1px solid var(--border);
          border-radius: 20px;
          font-size: 0.9rem;
          background: #F8FAFC;
        }
        .chat-text-input:focus {
          outline: none;
          background: white;
          border-color: var(--primary);
        }
        .chat-send-btn {
          background: var(--primary);
          color: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-orange);
        }
        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})}function ta(){let[e,t]=(0,v.useState)(`trace`),[n,r]=(0,v.useState)(2),[i,a]=(0,v.useState)(1),[o,s]=(0,v.useState)(10),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(50),f=i*1.378,p=i*.035,m=(n/((c?.024:.048)*o**.44))**(1/.725)/f,h=m*.0254,g=h*p,_=u/1e3*.01724/(g||.001),y=n*_,b=n**2*_,[S,C]=(0,v.useState)(`diff`),[w,T]=(0,v.useState)(4.4),[E,D]=(0,v.useState)(1.6),[O,k]=(0,v.useState)(.3),[A,j]=(0,v.useState)(.2),[ee,te]=(0,v.useState)(1),ne=ee*.035,M=87/Math.sqrt(w+1.41)*Math.log(5.98*E/(.8*O+ne)),re=2*M*(1-.48*Math.exp(A/E*-.96)),[ie,N]=(0,v.useState)(`103`),[ae,oe]=(0,v.useState)(`104`),[se,ce]=(0,v.useState)(5),[le,ue]=(0,v.useState)(2),[de,fe]=(0,v.useState)(20),pe=e=>{let t=e.trim().toUpperCase();if(!t)return{val:0,text:`값을 입력하세요`};if(t.includes(`R`)){let e=parseFloat(t.replace(`R`,`.`));if(!isNaN(e))return{val:e,text:`${e} Ω`}}if(/^\d{3}$/.test(t)){let e=parseInt(t.slice(0,2),10)*10**parseInt(t[2],10);return me(e)}if(/^\d{4}$/.test(t)){let e=parseInt(t.slice(0,3),10)*10**parseInt(t[3],10);return me(e)}let n={"01":100,"02":102,"03":105,"04":107,"05":110,"06":113,"07":115,"08":118,"09":121,10:124,11:127,12:130,13:133,14:137,15:140,16:143,17:147,18:150,19:154,20:158,21:162,22:165,23:169,24:174,25:178,26:182,27:187,28:191,29:196,30:200,31:205,32:210,33:215,34:221,35:226,36:232,37:237,38:243,39:249,40:255,41:261,42:267,43:274,44:280,45:287,46:294,47:301,48:309,49:316,50:324,51:332,52:340,53:348,54:357,55:365,56:374,57:383,58:392,59:402,60:412,61:422,62:432,63:442,64:453,65:464,66:475,67:487,68:499,69:511,70:523,71:536,72:549,73:562,74:576,75:590,76:604,77:619,78:634,79:649,80:665,81:681,82:698,83:715,84:732,85:750,86:768,87:787,88:806,89:825,90:845,91:866,92:887,93:909,94:931,95:953,96:976},r={Z:.001,Y:.01,R:.01,X:.1,S:.1,A:1,B:10,C:100,D:1e3,E:1e4,F:1e5};if(t.length===3&&n[t.slice(0,2)]&&r[t[2]]){let e=n[t.slice(0,2)]*r[t[2]];return{val:e,text:`${me(e).text} (EIA-96 1% 정밀저항)`}}return{val:0,text:`해석할 수 없는 코드입니다`}},me=e=>e>=1e6?{val:e,text:`${(e/1e6).toFixed(2)} MΩ`}:e>=1e3?{val:e,text:`${(e/1e3).toFixed(2)} kΩ`}:{val:e,text:`${e.toFixed(1)} Ω`},he=e=>{let t=e.trim();if(/^\d{3}$/.test(t)){let e=parseInt(t.slice(0,2),10)*10**parseInt(t[2],10);return{pf:e,nf:e/1e3,uf:e/1e6}}return null},ge=Math.max(0,se-le),P=de>0?ge/(de/1e3):0,F=(de/1e3)**2*P,[_e,ve]=(0,v.useState)(12),[ye,be]=(0,v.useState)(3.3),[xe,I]=(0,v.useState)(500),[Se,Ce]=(0,v.useState)(25),[we,Te]=(0,v.useState)(62),Ee=Math.max(0,(_e-ye)*(xe/1e3)),De=Se+Ee*we;return(0,x.jsxs)(`div`,{className:`pcb-calculator-page fade-in`,children:[(0,x.jsxs)(`div`,{className:`calc-header-banner`,children:[(0,x.jsx)(`div`,{className:`calc-header-content`,children:(0,x.jsxs)(`div`,{className:`calc-title-box`,children:[(0,x.jsxs)(`span`,{className:`calc-badge`,children:[(0,x.jsx)(pn,{size:14}),(0,x.jsx)(`span`,{children:`하드웨어 엔지니어링 툴킷`})]}),(0,x.jsx)(`h1`,{className:`calc-main-title`,children:`🥕 당근 PCB 설계 계산기`}),(0,x.jsx)(`p`,{className:`calc-subtitle`,children:`KiCad, Altium 실무 설계에 필요한 IPC-2152 패턴 폭, 고속 신호 임피던스, 부품 코드 및 발열 진단을 웹에서 즉시 계산하세요.`})]})}),(0,x.jsxs)(`div`,{className:`calc-tab-nav`,children:[(0,x.jsxs)(`button`,{className:`calc-nav-item ${e===`trace`?`active`:``}`,onClick:()=>t(`trace`),children:[(0,x.jsx)(qn,{size:18}),(0,x.jsx)(`span`,{children:`패턴 폭 & 허용 전류`})]}),(0,x.jsxs)(`button`,{className:`calc-nav-item ${e===`impedance`?`active`:``}`,onClick:()=>t(`impedance`),children:[(0,x.jsx)(Gt,{size:18}),(0,x.jsx)(`span`,{children:`고속 신호 & 임피던스`})]}),(0,x.jsxs)(`button`,{className:`calc-nav-item ${e===`smd`?`active`:``}`,onClick:()=>t(`smd`),children:[(0,x.jsx)(ze,{size:18}),(0,x.jsx)(`span`,{children:`SMD 코드 & LED 저항`})]}),(0,x.jsxs)(`button`,{className:`calc-nav-item ${e===`thermal`?`active`:``}`,onClick:()=>t(`thermal`),children:[(0,x.jsx)(yn,{size:18}),(0,x.jsx)(`span`,{children:`LDO 발열 & 방열 진단`})]})]})]}),(0,x.jsxs)(`div`,{className:`calc-body-card`,children:[e===`trace`&&(0,x.jsxs)(`div`,{className:`calc-pane fade-in`,children:[(0,x.jsxs)(`div`,{className:`pane-intro`,children:[(0,x.jsxs)(`div`,{className:`pane-intro-title`,children:[(0,x.jsx)(qn,{size:22,className:`text-orange`}),(0,x.jsx)(`h2`,{children:`패턴 폭 (Trace Width) & 허용 전류 계산기 (IPC-2152)`})]}),(0,x.jsx)(`p`,{children:`동박 두께(oz)와 허용 온도 상승치($ΔT$)를 기준으로 안전하게 전류를 통전할 수 있는 최소 배선 폭과 전압 강하를 산출합니다.`})]}),(0,x.jsxs)(`div`,{className:`calc-grid-2col`,children:[(0,x.jsxs)(`div`,{className:`calc-input-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`설계 파라미터 입력`}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`통전 전류 (Current)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,min:`0.1`,max:`30`,step:`0.1`,value:n,onChange:e=>r(Math.max(.01,parseFloat(e.target.value)||0))}),(0,x.jsx)(`span`,{className:`unit-label`,children:`A (암페어)`})]}),(0,x.jsx)(`div`,{className:`preset-buttons`,children:[.5,1,2,3,5].map(e=>(0,x.jsxs)(`button`,{type:`button`,className:`preset-pill ${n===e?`active`:``}`,onClick:()=>r(e),children:[e,`A`]},e))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`동박 두께 (Copper Weight)`}),(0,x.jsx)(`div`,{className:`select-wrapper`,children:(0,x.jsxs)(`select`,{value:i,onChange:e=>a(parseFloat(e.target.value)),children:[(0,x.jsx)(`option`,{value:`0.5`,children:`0.5 oz (17.5 µm - 미세 신호선)`}),(0,x.jsx)(`option`,{value:`1.0`,children:`1.0 oz (35 µm - 표준 기판 기본값)`}),(0,x.jsx)(`option`,{value:`2.0`,children:`2.0 oz (70 µm - 전원 보드 / 대전류)`}),(0,x.jsx)(`option`,{value:`3.0`,children:`3.0 oz (105 µm - 고전력 특수 기판)`})]})})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`허용 온도 상승 ($ΔT$)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,min:`1`,max:`100`,step:`1`,value:o,onChange:e=>s(Math.max(1,parseFloat(e.target.value)||1))}),(0,x.jsx)(`span`,{className:`unit-label`,children:`°C 상승`})]}),(0,x.jsx)(`span`,{className:`field-hint`,children:`일반적으로 10°C (보수적 안전) 또는 20°C를 적용합니다.`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`레이어 위치 (Layer Placement)`}),(0,x.jsxs)(`div`,{className:`toggle-group`,children:[(0,x.jsx)(`button`,{type:`button`,className:`toggle-option ${c?``:`selected`}`,onClick:()=>l(!1),children:`외층 (Top / Bottom Layer)`}),(0,x.jsx)(`button`,{type:`button`,className:`toggle-option ${c?`selected`:``}`,onClick:()=>l(!0),children:`내층 (Inner 1 / Inner 2)`})]}),(0,x.jsx)(`span`,{className:`field-hint`,children:`내층은 공기 냉각이 어려워 동일 전류 시 약 2배 더 넓은 선폭이 필요합니다.`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`배선 길이 (Trace Length)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,min:`1`,max:`1000`,step:`5`,value:u,onChange:e=>d(Math.max(1,parseFloat(e.target.value)||1))}),(0,x.jsx)(`span`,{className:`unit-label`,children:`mm`})]})]})]}),(0,x.jsxs)(`div`,{className:`calc-result-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`계산 결과 요약`}),(0,x.jsxs)(`div`,{className:`highlight-metric-box`,children:[(0,x.jsx)(`span`,{className:`metric-caption`,children:`최소 권장 패턴 폭 (Minimum Trace Width)`}),(0,x.jsxs)(`div`,{className:`metric-primary-val`,children:[h.toFixed(3),` `,(0,x.jsx)(`span`,{className:`metric-unit`,children:`mm`})]}),(0,x.jsxs)(`div`,{className:`metric-sub-val`,children:[`약 `,(0,x.jsxs)(`strong`,{children:[m.toFixed(1),` mil`]}),` (0.001 인치)`]})]}),(0,x.jsxs)(`div`,{className:`result-stats-grid`,children:[(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`패턴 저항 (Resistance)`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[(_*1e3).toFixed(2),` mΩ`]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`전압 강하 (Voltage Drop)`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[(y*1e3).toFixed(2),` mV`]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`발열 손실 (Power Dissipation)`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[(b*1e3).toFixed(2),` mW`]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`패턴 단면적 (Cross Section)`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[(g*1e3).toFixed(1),` µm²`]})]})]}),(0,x.jsxs)(`div`,{className:`guideline-card`,children:[(0,x.jsxs)(`div`,{className:`guideline-head`,children:[(0,x.jsx)(pt,{size:16}),(0,x.jsx)(`span`,{children:`메이커 실무 팁 (PCB Routing Tips)`})]}),(0,x.jsxs)(`ul`,{children:[(0,x.jsxs)(`li`,{children:[`JLCPCB / PCBWay 일반 공정의 최소 선폭은 `,(0,x.jsx)(`strong`,{children:`0.127mm (5 mil)`}),`입니다.`]}),(0,x.jsxs)(`li`,{children:[`모터, 솔레노이드 등 순간 서지 전류가 흐르는 라인은 계산값의 `,(0,x.jsx)(`strong`,{children:`1.5배~2배`}),` 여유 폭을 권장합니다.`]}),(0,x.jsx)(`li`,{children:`공간이 부족할 경우 상/하 양면을 비아(Via)로 묶어 병렬 배선하면 폭을 절반으로 줄일 수 있습니다.`})]})]})]})]})]}),e===`impedance`&&(0,x.jsxs)(`div`,{className:`calc-pane fade-in`,children:[(0,x.jsxs)(`div`,{className:`pane-intro`,children:[(0,x.jsxs)(`div`,{className:`pane-intro-title`,children:[(0,x.jsx)(Gt,{size:22,className:`text-orange`}),(0,x.jsx)(`h2`,{children:`고속 신호 & 마이크로스트립 임피던스 계산기`})]}),(0,x.jsx)(`p`,{children:`USB 2.0 D+/D- (90Ω 차동), RF 안테나 (50Ω 단일), Ethernet (100Ω) 배선 시 신호 반사를 방지하기 위한 기하학적 형상을 산출합니다.`})]}),(0,x.jsxs)(`div`,{className:`calc-grid-2col`,children:[(0,x.jsxs)(`div`,{className:`calc-input-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`신호 규격 및 기판 스택업`}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`배선 모드 선택`}),(0,x.jsxs)(`div`,{className:`toggle-group`,children:[(0,x.jsx)(`button`,{type:`button`,className:`toggle-option ${S===`diff`?`selected`:``}`,onClick:()=>C(`diff`),children:`차동 배선 (USB 90Ω / Ethernet 100Ω)`}),(0,x.jsx)(`button`,{type:`button`,className:`toggle-option ${S===`single`?`selected`:``}`,onClick:()=>C(`single`),children:`단일 신호선 (RF 50Ω / SPI / I2S)`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`유전체 비유전율 ($εr$)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.05`,value:w,onChange:e=>T(parseFloat(e.target.value)||1)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`$εr$`})]}),(0,x.jsxs)(`div`,{className:`preset-buttons`,children:[(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${w===4.4?`active`:``}`,onClick:()=>T(4.4),children:`FR-4 (4.4)`}),(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${w===3.66?`active`:``}`,onClick:()=>T(3.66),children:`Rogers RO4350 (3.66)`}),(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${w===4.2?`active`:``}`,onClick:()=>T(4.2),children:`High-Tg (4.2)`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`유전체 두께 / GND 평면까지 높이 ($H$)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.05`,value:E,onChange:e=>D(Math.max(.05,parseFloat(e.target.value)||.1))}),(0,x.jsx)(`span`,{className:`unit-label`,children:`mm`})]}),(0,x.jsx)(`span`,{className:`field-hint`,children:`4층 기판 외층 기준(L1-L2)은 보통 0.1mm~0.2mm 프리프레그입니다.`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`신호 패턴 폭 ($W$)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.05`,value:O,onChange:e=>k(Math.max(.05,parseFloat(e.target.value)||.1))}),(0,x.jsx)(`span`,{className:`unit-label`,children:`mm`})]})]}),S===`diff`&&(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`차동 배선 간격 ($S$)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.05`,value:A,onChange:e=>j(Math.max(.05,parseFloat(e.target.value)||.1))}),(0,x.jsx)(`span`,{className:`unit-label`,children:`mm`})]})]})]}),(0,x.jsxs)(`div`,{className:`calc-result-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`임피던스 계산 결과`}),S===`diff`?(0,x.jsxs)(`div`,{className:`highlight-metric-box`,children:[(0,x.jsx)(`span`,{className:`metric-caption`,children:`차동 임피던스 (Zdiff)`}),(0,x.jsxs)(`div`,{className:`metric-primary-val`,children:[isFinite(re)&&re>0?re.toFixed(1):`--`,` `,(0,x.jsx)(`span`,{className:`metric-unit`,children:`Ω`})]}),(0,x.jsxs)(`div`,{className:`metric-sub-val`,children:[`단일 신호 임피던스: `,(0,x.jsxs)(`strong`,{children:[M.toFixed(1),` Ω`]})]})]}):(0,x.jsxs)(`div`,{className:`highlight-metric-box`,children:[(0,x.jsx)(`span`,{className:`metric-caption`,children:`특성 임피던스 ($Z_0$)`}),(0,x.jsxs)(`div`,{className:`metric-primary-val`,children:[isFinite(M)&&M>0?M.toFixed(1):`--`,` `,(0,x.jsx)(`span`,{className:`metric-unit`,children:`Ω`})]}),(0,x.jsx)(`div`,{className:`metric-sub-val`,children:`단일선 마이크로스트립 모델`})]}),(0,x.jsx)(`div`,{className:`match-status-card`,children:S===`diff`?Math.abs(re-90)<=5?(0,x.jsxs)(`div`,{className:`match-pill success`,children:[(0,x.jsx)(je,{size:18}),(0,x.jsx)(`span`,{children:`USB 2.0 (90Ω ±10%) 규격에 완벽히 부합합니다! ✨`})]}):(0,x.jsxs)(`div`,{className:`match-pill warning`,children:[(0,x.jsx)(Dn,{size:18}),(0,x.jsxs)(`span`,{children:[`USB 기준(90Ω)과 `,Math.abs(re-90).toFixed(1),`Ω 차이가 납니다. 선폭($W$) 또는 간격($S$)을 조절하세요.`]})]}):Math.abs(M-50)<=3?(0,x.jsxs)(`div`,{className:`match-pill success`,children:[(0,x.jsx)(je,{size:18}),(0,x.jsx)(`span`,{children:`RF 안테나 / 50Ω 매칭에 최적입니다! ✨`})]}):(0,x.jsxs)(`div`,{className:`match-pill warning`,children:[(0,x.jsx)(Dn,{size:18}),(0,x.jsxs)(`span`,{children:[`50Ω 기준과 `,Math.abs(M-50).toFixed(1),`Ω 차이가 납니다. 선폭($W$)을 조절하세요.`]})]})}),(0,x.jsxs)(`div`,{className:`guideline-card`,children:[(0,x.jsxs)(`div`,{className:`guideline-head`,children:[(0,x.jsx)(pt,{size:16}),(0,x.jsx)(`span`,{children:`고속 차동 배선 주의사항`})]}),(0,x.jsxs)(`ul`,{children:[(0,x.jsxs)(`li`,{children:[`USB D+/D- 두 신호선은 `,(0,x.jsx)(`strong`,{children:`길이 편차(Skew)가 1.25mm(50 mil) 이내`}),`가 되도록 등길이 배선(Length Matching)해야 합니다.`]}),(0,x.jsx)(`li`,{children:`차동 신호선 하부에는 절대 슬릿(GND 단절)이 없어야 하며, 완전한 연속 GND 평면이 유지되어야 합니다.`})]})]})]})]})]}),e===`smd`&&(0,x.jsxs)(`div`,{className:`calc-pane fade-in`,children:[(0,x.jsxs)(`div`,{className:`pane-intro`,children:[(0,x.jsxs)(`div`,{className:`pane-intro-title`,children:[(0,x.jsx)(ze,{size:22,className:`text-orange`}),(0,x.jsx)(`h2`,{children:`SMD 부품 코드 판독기 & LED 전류제한 저항`})]}),(0,x.jsx)(`p`,{children:`기판 위 미세 부품에 인쇄된 3자리/4자리 및 EIA-96 정밀 저항/커패시터 코드를 해석하고, LED용 저항을 즉시 계산합니다.`})]}),(0,x.jsxs)(`div`,{className:`calc-grid-2col`,children:[(0,x.jsxs)(`div`,{className:`calc-input-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`1. SMD 저항 코드 디코더`}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`저항 표면 마킹 코드 입력`}),(0,x.jsx)(`input`,{type:`text`,className:`big-code-input`,value:ie,onChange:e=>N(e.target.value.toUpperCase()),placeholder:`예: 103, 4701, 4R7, 01C`}),(0,x.jsx)(`div`,{className:`preset-buttons`,children:[`103`,`472`,`1002`,`4R7`,`01C`,`68X`].map(e=>(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${ie===e?`active`:``}`,onClick:()=>N(e),children:e},e))})]}),(0,x.jsxs)(`div`,{className:`decoded-result-box`,children:[(0,x.jsx)(`span`,{className:`decoded-label`,children:`해석된 저항값`}),(0,x.jsx)(`div`,{className:`decoded-value`,children:pe(ie).text})]}),(0,x.jsx)(`hr`,{style:{margin:`1.5rem 0`,borderColor:`#F1F5F9`}}),(0,x.jsx)(`h3`,{className:`panel-title`,children:`2. 적층 세라믹 커패시터(MLCC) 코드`}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`3자리 커패시터 코드 입력`}),(0,x.jsx)(`input`,{type:`text`,className:`big-code-input`,value:ae,onChange:e=>oe(e.target.value),placeholder:`예: 104, 225, 471`}),(0,x.jsx)(`div`,{className:`preset-buttons`,children:[`101`,`104`,`225`,`473`,`105`].map(e=>(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${ae===e?`active`:``}`,onClick:()=>oe(e),children:e},e))})]}),he(ae)?(0,x.jsxs)(`div`,{className:`cap-stats-grid`,children:[(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`pF 단위`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[he(ae).pf.toLocaleString(),` pF`]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`nF 단위`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[he(ae).nf,` nF`]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-label`,children:`µF 단위`}),(0,x.jsxs)(`span`,{className:`stat-value`,children:[he(ae).uf,` µF`]})]})]}):(0,x.jsx)(`div`,{className:`decoded-result-box`,children:(0,x.jsx)(`span`,{className:`decoded-label`,children:`3자리 숫자를 입력하세요 (예: 104 = 100nF)`})})]}),(0,x.jsxs)(`div`,{className:`calc-result-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`3. LED 전류 제한 저항 계산기`}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`전원 전압 (Vcc)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.1`,value:se,onChange:e=>ce(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`V`})]}),(0,x.jsx)(`div`,{className:`preset-buttons`,children:[3.3,5,9,12].map(e=>(0,x.jsxs)(`button`,{type:`button`,className:`preset-pill ${se===e?`active`:``}`,onClick:()=>ce(e),children:[e,`V`]},e))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`LED 순방향 전압 (Vf)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.1`,value:le,onChange:e=>ue(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`V`})]}),(0,x.jsxs)(`div`,{className:`preset-buttons`,children:[(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${le===2?`active`:``}`,onClick:()=>ue(2),children:`🔴 적/황/오렌지 (2.0V)`}),(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${le===3?`active`:``}`,onClick:()=>ue(3),children:`🟢 녹색 (3.0V)`}),(0,x.jsx)(`button`,{type:`button`,className:`preset-pill ${le===3.2?`active`:``}`,onClick:()=>ue(3.2),children:`🔵 청/백색 (3.2V)`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`목표 LED 전류 (If)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`1`,value:de,onChange:e=>fe(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`mA`})]}),(0,x.jsx)(`span`,{className:`field-hint`,children:`인디케이터용 LED는 보통 5mA ~ 15mA가 적절합니다.`})]}),(0,x.jsxs)(`div`,{className:`highlight-metric-box`,children:[(0,x.jsx)(`span`,{className:`metric-caption`,children:`권장 저항값 (Required Resistance)`}),(0,x.jsxs)(`div`,{className:`metric-primary-val`,children:[P>0?P.toFixed(0):`0`,` `,(0,x.jsx)(`span`,{className:`metric-unit`,children:`Ω`})]}),(0,x.jsxs)(`div`,{className:`metric-sub-val`,children:[`저항 소비 전력: `,(0,x.jsxs)(`strong`,{children:[(F*1e3).toFixed(1),` mW`]}),`(`,F<.1?`일반 0603 1/10W 저항 적합`:`0805 또는 1206 규격 권장`,`)`]})]})]})]})]}),e===`thermal`&&(0,x.jsxs)(`div`,{className:`calc-pane fade-in`,children:[(0,x.jsxs)(`div`,{className:`pane-intro`,children:[(0,x.jsxs)(`div`,{className:`pane-intro-title`,children:[(0,x.jsx)(yn,{size:22,className:`text-orange`}),(0,x.jsx)(`h2`,{children:`LDO 레귤레이터 발열 & 방열판 진단기`})]}),(0,x.jsx)(`p`,{children:`선형 레귤레이터(AMS1117, LM7805 등)의 전압 강하량(Vin - Vout)에 따른 전력 손실과 정션 온도(Tj)를 계산하여 화재 및 과열 차단을 방지합니다.`})]}),(0,x.jsxs)(`div`,{className:`calc-grid-2col`,children:[(0,x.jsxs)(`div`,{className:`calc-input-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`전원 및 패키지 사양`}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`입력 전압 (Vin)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.5`,value:_e,onChange:e=>ve(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`V`})]}),(0,x.jsx)(`div`,{className:`preset-buttons`,children:[5,9,12,24].map(e=>(0,x.jsxs)(`button`,{type:`button`,className:`preset-pill ${_e===e?`active`:``}`,onClick:()=>ve(e),children:[e,`V`]},e))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`출력 전압 (Vout)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`0.1`,value:ye,onChange:e=>be(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`V`})]}),(0,x.jsx)(`div`,{className:`preset-buttons`,children:[1.8,3.3,5].map(e=>(0,x.jsxs)(`button`,{type:`button`,className:`preset-pill ${ye===e?`active`:``}`,onClick:()=>be(e),children:[e,`V`]},e))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`부하 전류 (Iload)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,step:`50`,value:xe,onChange:e=>I(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`mA`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`IC 패키지 형태 (열저항 θJA)`}),(0,x.jsx)(`div`,{className:`select-wrapper`,children:(0,x.jsxs)(`select`,{value:we,onChange:e=>Te(parseFloat(e.target.value)),children:[(0,x.jsx)(`option`,{value:`62`,children:`SOT-223 (AMS1117 기본 패키지 - 62 °C/W)`}),(0,x.jsx)(`option`,{value:`45`,children:`TO-252 / DPAK (45 °C/W)`}),(0,x.jsx)(`option`,{value:`29`,children:`TO-220 (방열판 미장착 시 - 29 °C/W)`}),(0,x.jsx)(`option`,{value:`250`,children:`SOT-23 / SOT-89 (소형 - 250 °C/W)`}),(0,x.jsx)(`option`,{value:`105`,children:`SOIC-8 (105 °C/W)`})]})})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`주변 환경 온도 ($T_A$)`}),(0,x.jsxs)(`div`,{className:`input-with-unit`,children:[(0,x.jsx)(`input`,{type:`number`,value:Se,onChange:e=>Ce(parseFloat(e.target.value)||0)}),(0,x.jsx)(`span`,{className:`unit-label`,children:`°C (기본 상온 25°C)`})]})]})]}),(0,x.jsxs)(`div`,{className:`calc-result-panel`,children:[(0,x.jsx)(`h3`,{className:`panel-title`,children:`발열 진단 결과`}),(0,x.jsxs)(`div`,{className:`highlight-metric-box`,children:[(0,x.jsx)(`span`,{className:`metric-caption`,children:`IC 소비 발열량 (Power Loss)`}),(0,x.jsxs)(`div`,{className:`metric-primary-val`,children:[Ee.toFixed(2),` `,(0,x.jsx)(`span`,{className:`metric-unit`,children:`W`})]}),(0,x.jsxs)(`div`,{className:`metric-sub-val`,children:[`예상 내부 정션 온도: `,(0,x.jsxs)(`strong`,{children:[De.toFixed(1),` °C`]})]})]}),(0,x.jsx)(`div`,{className:`thermal-status-card`,children:De<70?(0,x.jsxs)(`div`,{className:`match-pill success`,children:[(0,x.jsx)(je,{size:20}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`strong`,{children:`안전 상태 (정상 동작)`}),(0,x.jsx)(`p`,{children:`발열이 거의 없으며 추가 방열판 없이 안정적으로 동작합니다.`})]})]}):De<=110?(0,x.jsxs)(`div`,{className:`match-pill warning`,children:[(0,x.jsx)(Dn,{size:20}),(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`strong`,{children:[`주의: 발열이 꽤 뜨겁습니다! (`,De.toFixed(0),`°C)`]}),(0,x.jsx)(`p`,{children:`손을 대면 화상을 입을 수 있습니다. PCB에 넓은 구리 솔더패드를 깔거나 작은 방열판 부착을 권장합니다.`})]})]}):(0,x.jsxs)(`div`,{className:`match-pill danger`,children:[(0,x.jsx)($e,{size:22}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`strong`,{children:`위험: 열 차단(Thermal Shutdown) 및 소손 위험!`}),(0,x.jsx)(`p`,{children:`정션 온도가 허용 한계(125°C)를 초과합니다! DC-DC 벅 컨버터로 교체하거나 대형 방열판을 필히 장착하세요.`})]})]})}),(0,x.jsxs)(`div`,{className:`guideline-card`,children:[(0,x.jsxs)(`div`,{className:`guideline-head`,children:[(0,x.jsx)(pt,{size:16}),(0,x.jsx)(`span`,{children:`LDO 발열 절감 솔루션`})]}),(0,x.jsxs)(`ul`,{children:[(0,x.jsxs)(`li`,{children:[`12V $→$ 3.3V 전압 강하처럼 입력-출력 차이가 클 때 LDO는 `,(0,x.jsx)(`strong`,{children:`효율이 27% 이하`}),`로 떨어져 거의 모든 에너지가 열로 버려집니다.`]}),(0,x.jsxs)(`li`,{children:[`이 경우 핀 호환되는 `,(0,x.jsx)(`strong`,{children:`DC-DC 벅 모듈 (예: MP2307, TPS54302 등)`}),`을 적용하면 발열 없이 90% 이상 효율을 얻을 수 있습니다.`]})]})]})]})]})]})]}),(0,x.jsx)(`style`,{children:`
        .pcb-calculator-page {
          max-width: 1200px;
          margin: 0 auto;
        }
        .calc-header-banner {
          background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2.25rem 1rem;
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
          position: relative;
          overflow: hidden;
        }
        .calc-header-banner::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, rgba(255, 111, 15, 0.25) 0%, rgba(255, 111, 15, 0) 70%);
          pointer-events: none;
        }
        .calc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 111, 15, 0.2);
          border: 1px solid rgba(255, 111, 15, 0.4);
          color: #FF8A3D;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .calc-main-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .calc-subtitle {
          color: #94A3B8;
          font-size: 0.95rem;
          max-width: 720px;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .calc-tab-nav {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }
        .calc-nav-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.75rem 1.25rem;
          border-radius: 12px;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.05);
          font-size: 0.92rem;
          font-weight: 700;
          transition: all 0.2s;
          white-space: nowrap;
          border: 1px solid transparent;
        }
        .calc-nav-item:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .calc-nav-item.active {
          background: var(--primary);
          color: white;
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 14px rgba(255, 111, 15, 0.4);
        }
        .calc-body-card {
          background: white;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
          padding: 2rem;
        }
        .pane-intro {
          margin-bottom: 2rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #F1F5F9;
        }
        .pane-intro-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.4rem;
        }
        .pane-intro-title h2 {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
        }
        .pane-intro p {
          color: #64748B;
          font-size: 0.92rem;
        }
        .text-orange {
          color: var(--primary);
        }
        .calc-grid-2col {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2.25rem;
        }
        @media (max-width: 900px) {
          .calc-grid-2col {
            grid-template-columns: 1fr;
          }
        }
        .calc-input-panel {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .panel-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #1E293B;
          margin-bottom: 0.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .form-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #334155;
        }
        .input-with-unit {
          display: flex;
          align-items: center;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 10px;
          overflow: hidden;
          transition: border-color 0.15s;
        }
        .input-with-unit:focus-within {
          border-color: var(--primary);
          background: white;
        }
        .input-with-unit input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 0.65rem 0.9rem;
          font-weight: 700;
          font-size: 1rem;
          color: #0F172A;
          outline: none;
        }
        .unit-label {
          padding: 0.65rem 0.85rem;
          background: #EEF2F6;
          color: #64748B;
          font-size: 0.82rem;
          font-weight: 700;
          border-left: 1px solid #E2E8F0;
        }
        .select-wrapper select {
          width: 100%;
          padding: 0.75rem 0.9rem;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          background: #F8FAFC;
          font-size: 0.9rem;
          font-weight: 600;
          color: #0F172A;
          outline: none;
        }
        .select-wrapper select:focus {
          border-color: var(--primary);
          background: white;
        }
        .preset-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.35rem;
        }
        .preset-pill {
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: #F1F5F9;
          color: #475569;
          font-size: 0.78rem;
          font-weight: 700;
          border: 1px solid #E2E8F0;
          transition: all 0.15s;
        }
        .preset-pill:hover {
          background: #E2E8F0;
          color: #0F172A;
        }
        .preset-pill.active {
          background: #FFF2E8;
          color: var(--primary-dark);
          border-color: #FFD8BE;
        }
        .field-hint {
          font-size: 0.74rem;
          color: #94A3B8;
          line-height: 1.4;
        }
        .toggle-group {
          display: flex;
          gap: 0.5rem;
        }
        .toggle-option {
          flex: 1;
          padding: 0.65rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          background: #F1F5F9;
          color: #475569;
          border: 1.5px solid transparent;
          text-align: center;
        }
        .toggle-option.selected {
          background: #FFF2E8;
          color: var(--primary-dark);
          border-color: var(--primary);
        }
        .big-code-input {
          padding: 0.85rem 1rem;
          border-radius: 10px;
          border: 1.5px solid #E2E8F0;
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          background: #F8FAFC;
          color: #0F172A;
          outline: none;
          text-transform: uppercase;
        }
        .big-code-input:focus {
          border-color: var(--primary);
          background: white;
        }
        /* Results Panel */
        .calc-result-panel {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .highlight-metric-box {
          background: linear-gradient(135deg, #FFF9F5 0%, #FFF2E8 100%);
          border: 2px solid #FFD8BE;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 12px rgba(255, 111, 15, 0.08);
        }
        .metric-caption {
          font-size: 0.82rem;
          font-weight: 800;
          color: #C94B00;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.5rem;
        }
        .metric-primary-val {
          font-size: 2.5rem;
          font-weight: 900;
          color: #EA580C;
          line-height: 1.1;
        }
        .metric-unit {
          font-size: 1.3rem;
          font-weight: 700;
          color: #9A3412;
        }
        .metric-sub-val {
          margin-top: 0.6rem;
          font-size: 0.95rem;
          color: #64748B;
        }
        .result-stats-grid, .cap-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }
        .stat-card {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .stat-label {
          font-size: 0.74rem;
          font-weight: 700;
          color: #64748B;
        }
        .stat-value {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
        }
        .decoded-result-box {
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          border-radius: 12px;
          padding: 1.25rem;
          text-align: center;
        }
        .decoded-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748B;
          display: block;
          margin-bottom: 0.35rem;
        }
        .decoded-value {
          font-size: 1.85rem;
          font-weight: 900;
          color: var(--primary);
        }
        .match-pill {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          font-size: 0.88rem;
          line-height: 1.5;
        }
        .match-pill.success {
          background: #ECFDF5;
          color: #065F46;
          border: 1px solid #A7F3D0;
        }
        .match-pill.warning {
          background: #FFFBEB;
          color: #92400E;
          border: 1px solid #FDE68A;
        }
        .match-pill.danger {
          background: #FEF2F2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }
        .guideline-card {
          background: #F8FAFC;
          border-radius: 12px;
          padding: 1.2rem;
          border: 1px solid #E2E8F0;
        }
        .guideline-head {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          font-size: 0.85rem;
          color: #334155;
          margin-bottom: 0.6rem;
        }
        .guideline-card ul {
          padding-left: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .guideline-card li {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.5;
        }
      `})]})}var na={carrot_keypad:{id:`carrot_keypad`,name:`🥕 당근 매크로 키패드 (RP2040 4층 보드)`,dimensions:{width:52,height:98},layersCount:4,description:`당근 실루엣 외형의 4키 핫스왑 기계식 키패드와 RP2040 MCU, Type-C, RGB LED 회로입니다.`,stats:{pads:142,vias:68,drills:24},defaultColor:`orange`},hifi_amp:{id:`hifi_amp`,name:`🎧 초저노이즈 하이파이 헤드폰 앰프 (2층 보드)`,dimensions:{width:85,height:60},layersCount:2,description:`OPA1612 + TPA6120A2 기반 왜곡률 <0.0001%의 스타 그라운드 2층 오디오 기판입니다.`,stats:{pads:96,vias:42,drills:18},defaultColor:`green`},esp32_sensor:{id:`esp32_sensor`,name:`🌱 베란다 스마트 IoT 센서 보드 (ESP32-C3)`,dimensions:{width:38,height:82},layersCount:2,description:`토양 수분 정전용량 센서 패턴과 SHT40 온습도, TP4056 배터리 충전 회로가 집적된 보드입니다.`,stats:{pads:88,vias:36,drills:12},defaultColor:`purple`}},ra={orange:{name:`당근 오렌지`,base:`#E65100`,mask:`#F57C00`,copper:`#FFB74D`,silk:`#FFFFFF`},green:{name:`클래식 그린`,base:`#004D20`,mask:`#0F763E`,copper:`#81C784`,silk:`#FFFFFF`},black:{name:`매트 블랙`,base:`#1A1A1A`,mask:`#262626`,copper:`#B0BEC5`,silk:`#E0E0E0`},blue:{name:`로열 블루`,base:`#0D47A1`,mask:`#1976D2`,copper:`#90CAF9`,silk:`#FFFFFF`},purple:{name:`매직 퍼플`,base:`#4A148C`,mask:`#7B1FA2`,copper:`#CE93D8`,silk:`#FFFFFF`}};function ia(){let[e,t]=(0,v.useState)(`carrot_keypad`),[n,r]=(0,v.useState)(`orange`),[i,a]=(0,v.useState)(1),[o,s]=(0,v.useState)({x:0,y:0}),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)({x:0,y:0}),[f,p]=(0,v.useState)({f_silk:{id:`f_silk`,name:`Top 실크스크린 (F.SilkS)`,color:`#FFFFFF`,visible:!0},f_mask:{id:`f_mask`,name:`Top 솔더마스크 (F.Mask)`,color:`#FFB74D`,visible:!0},f_cu:{id:`f_cu`,name:`Top 동박/패턴 (F.Cu)`,color:`#F59E0B`,visible:!0},in1_cu:{id:`in1_cu`,name:`Inner 1 GND 평면 (In1.Cu)`,color:`#10B981`,visible:!1},in2_cu:{id:`in2_cu`,name:`Inner 2 전원 평면 (In2.Cu)`,color:`#3B82F6`,visible:!1},b_cu:{id:`b_cu`,name:`Bottom 동박/패턴 (B.Cu)`,color:`#0D9488`,visible:!1},b_silk:{id:`b_silk`,name:`Bottom 실크스크린 (B.SilkS)`,color:`#E2E8F0`,visible:!1},edge:{id:`edge`,name:`외곽선 및 홀 (Edge.Cuts & Holes)`,color:`#EF4444`,visible:!0}}),m=(0,v.useRef)(null),h=na[e],g=ra[n];(0,v.useEffect)(()=>{r(h.defaultColor),a(1),s({x:0,y:0})},[e]),(0,v.useEffect)(()=>{let t=m.current;if(!t)return;let n=t.getContext(`2d`),r=t.width,a=t.height;n.clearRect(0,0,r,a),n.fillStyle=`#0F172A`,n.fillRect(0,0,r,a),n.save(),n.strokeStyle=`#1E293B`,n.lineWidth=1;let s=25*i,c=(o.x+r/2)%s,l=(o.y+a/2)%s;n.beginPath();for(let e=c;e<r;e+=s)n.moveTo(e,0),n.lineTo(e,a);for(let e=l;e<a;e+=s)n.moveTo(0,e),n.lineTo(r,e);n.stroke(),n.translate(r/2+o.x,a/2+o.y),n.scale(i,i);let u=5.5,d=h.dimensions.width*u,p=h.dimensions.height*u,_=-d/2,v=-p/2;if(f.edge.visible&&(n.fillStyle=g.base,n.shadowColor=`rgba(0, 0, 0, 0.4)`,n.shadowBlur=20,e===`carrot_keypad`?(n.beginPath(),n.moveTo(_+15,v),n.lineTo(_+d-15,v),n.quadraticCurveTo(_+d,v+10,_+d,v+25),n.bezierCurveTo(_+d,v+p*.6,_+d*.75,v+p*.85,_+d/2,v+p),n.bezierCurveTo(_+d*.25,v+p*.85,_,v+p*.6,_,v+25),n.quadraticCurveTo(_,v+10,_+15,v),n.closePath(),n.fill(),n.shadowBlur=0,n.strokeStyle=`#FFD8BE`,n.lineWidth=2.5,n.stroke()):(n.beginPath(),n.roundRect(_,v,d,p,14),n.fill(),n.shadowBlur=0,n.strokeStyle=g.mask,n.lineWidth=2,n.stroke())),f.in1_cu.visible&&(n.fillStyle=`rgba(16, 185, 129, 0.35)`,n.fillRect(_+10,v+10,d-20,p-20)),f.in2_cu.visible&&(n.fillStyle=`rgba(59, 130, 246, 0.35)`,n.fillRect(_+15,v+15,d-30,p-30)),f.f_cu.visible){if(n.strokeStyle=g.copper,n.lineWidth=2.2,n.lineCap=`round`,n.lineJoin=`round`,n.beginPath(),e===`carrot_keypad`){for(let e=0;e<4;e++){let t=v+70+e*85;n.moveTo(_+35,t),n.lineTo(_+d/2-20,t),n.lineTo(_+d/2,v+45+e*8),n.moveTo(_+d-35,t),n.lineTo(_+d/2+20,t),n.lineTo(_+d/2+10,v+45+e*8)}n.moveTo(_+d/2-4,v+15),n.lineTo(_+d/2-4,v+35),n.moveTo(_+d/2+4,v+15),n.lineTo(_+d/2+4,v+35)}else for(let e=0;e<8;e++)n.moveTo(_+20,v+30+e*35),n.lineTo(_+60,v+30+e*35),n.lineTo(_+100+e*20,v+60),n.lineTo(_+d-30,v+60+e*25);if(n.stroke(),n.fillStyle=`#FBBF24`,e===`carrot_keypad`){for(let e=0;e<4;e++){let t=v+75+e*90;n.fillRect(_+d/2-45,t-8,16,12),n.fillRect(_+d/2+30,t-8,16,12),n.fillRect(_+d/2-12,t+25,8,8),n.fillRect(_+d/2+4,t+25,8,8)}for(let e=0;e<14;e++)n.fillRect(_+d/2-25,v+40+e*3,6,2),n.fillRect(_+d/2+20,v+40+e*3,6,2)}else for(let e=0;e<8;e++)n.fillRect(_+d/2-30,v+40+e*8,12,5),n.fillRect(_+d/2+18,v+40+e*8,12,5)}if(f.b_cu.visible){n.strokeStyle=`#0D9488`,n.lineWidth=2.5,n.beginPath();for(let e=0;e<5;e++)n.moveTo(_+40,v+p-40-e*40),n.lineTo(_+d-40,v+p-60-e*40);n.stroke()}if(f.f_silk.visible){if(n.strokeStyle=g.silk,n.fillStyle=g.silk,n.lineWidth=1.2,n.font=`bold 13px sans-serif`,n.textAlign=`center`,e===`carrot_keypad`){n.fillText(`CARROT 4K KEYPAD`,0,v+28),n.font=`10px monospace`,n.fillText(`RP2040 • REV 1.2`,0,v+38);for(let e=0;e<4;e++){let t=v+75+e*90;n.strokeRect(_+d/2-50,t-35,100,70),n.font=`bold 11px sans-serif`,n.fillText(`SW ${e+1}`,0,t-18)}}else n.fillText(h.name.split(` `)[1]||`PCB DESIGN`,0,v+24),n.strokeRect(_+15,v+15,d-30,p-30)}if(f.edge.visible){n.fillStyle=`#0F172A`,n.strokeStyle=`#FBBF24`,n.lineWidth=1.5;let t=(e,t,r)=>{n.beginPath(),n.arc(e,t,r,0,Math.PI*2),n.fill(),n.stroke()};if(e===`carrot_keypad`){for(let e=0;e<4;e++){let n=v+75+e*90;t(0,n,8),t(-25,n,3),t(25,n,3)}t(_+15,v+15,4),t(_+d-15,v+15,4)}else t(_+15,v+15,4.5),t(_+d-15,v+15,4.5),t(_+15,v+p-15,4.5),t(_+d-15,v+p-15,4.5)}n.restore()},[e,n,f,i,o]);let _=e=>{l(!0),d({x:e.clientX-o.x,y:e.clientY-o.y})},y=e=>{c&&s({x:e.clientX-u.x,y:e.clientY-u.y})},b=()=>l(!1),S=e=>{e.preventDefault();let t=e.deltaY>0?-.1:.1;a(e=>Math.min(3.5,Math.max(.4,e+t)))},C=e=>{p(t=>({...t,[e]:{...t[e],visible:!t[e].visible}}))},w=e=>{p(t=>{let n={};return Object.keys(t).forEach(r=>{n[r]={...t[r],visible:e}}),n})};return(0,x.jsxs)(`div`,{className:`gerber-viewer-page fade-in`,children:[(0,x.jsxs)(`div`,{className:`gerber-header-banner`,children:[(0,x.jsxs)(`div`,{className:`gerber-title-col`,children:[(0,x.jsxs)(`span`,{className:`gerber-badge`,children:[(0,x.jsx)(ht,{size:14}),(0,x.jsx)(`span`,{children:`웹 기반 실시간 거버 뷰어`})]}),(0,x.jsx)(`h1`,{className:`gerber-main-title`,children:`🔍 실시간 인터랙티브 PCB 거버 뷰어`}),(0,x.jsx)(`p`,{className:`gerber-subtitle`,children:`별도 캐드 프로그램(KiCad, Altium) 설치 없이 웹 브라우저에서 회로 레이어(F.Cu, B.Cu, 실크스크린, 홀)를 켜고 끄며 회로를 검토할 수 있습니다.`})]}),(0,x.jsx)(`div`,{className:`demo-board-selector`,children:Object.values(na).map(n=>(0,x.jsxs)(`button`,{className:`board-select-btn ${e===n.id?`active`:``}`,onClick:()=>t(n.id),children:[(0,x.jsx)(ze,{size:16}),(0,x.jsx)(`span`,{children:n.name})]},n.id))})]}),(0,x.jsxs)(`div`,{className:`gerber-workspace-grid`,children:[(0,x.jsxs)(`div`,{className:`canvas-wrapper-box`,children:[(0,x.jsxs)(`div`,{className:`canvas-toolbar`,children:[(0,x.jsxs)(`div`,{className:`board-info-pill`,children:[(0,x.jsx)(`span`,{className:`board-name-badge`,children:h.name}),(0,x.jsxs)(`span`,{className:`dimension-badge`,children:[h.dimensions.width,`mm × `,h.dimensions.height,`mm (`,h.layersCount,`층)`]})]}),(0,x.jsxs)(`div`,{className:`toolbar-actions`,children:[(0,x.jsx)(`button`,{className:`tool-btn`,onClick:()=>a(e=>Math.min(3.5,e+.2)),title:`확대`,children:(0,x.jsx)(Zn,{size:18})}),(0,x.jsx)(`button`,{className:`tool-btn`,onClick:()=>a(e=>Math.max(.4,e-.2)),title:`축소`,children:(0,x.jsx)(Yn,{size:18})}),(0,x.jsx)(`button`,{className:`tool-btn`,onClick:()=>{a(1),s({x:0,y:0})},title:`화면 맞춤 (Reset)`,children:(0,x.jsx)(Jt,{size:18})}),(0,x.jsxs)(`span`,{className:`zoom-indicator`,children:[(i*100).toFixed(0),`%`]})]})]}),(0,x.jsx)(`canvas`,{ref:m,width:900,height:640,className:`gerber-canvas`,onMouseDown:_,onMouseMove:y,onMouseUp:b,onMouseLeave:b,onWheel:S}),(0,x.jsx)(`div`,{className:`canvas-footer-hint`,children:(0,x.jsx)(`span`,{children:`🖱️ 마우스 드래그: 기판 이동(Pan) | 마우스 휠: 확대/축소(Zoom)`})})]}),(0,x.jsxs)(`div`,{className:`gerber-control-sidebar`,children:[(0,x.jsxs)(`div`,{className:`control-section`,children:[(0,x.jsxs)(`div`,{className:`section-header`,children:[(0,x.jsx)(Ft,{size:16,className:`text-orange`}),(0,x.jsx)(`h3`,{children:`솔더마스크 색상 테마`})]}),(0,x.jsx)(`div`,{className:`color-swatches-grid`,children:Object.entries(ra).map(([e,t])=>(0,x.jsxs)(`button`,{className:`color-swatch-item ${n===e?`active`:``}`,onClick:()=>r(e),children:[(0,x.jsx)(`span`,{className:`swatch-circle`,style:{backgroundColor:t.mask}}),(0,x.jsx)(`span`,{className:`swatch-name`,children:t.name})]},e))})]}),(0,x.jsxs)(`div`,{className:`control-section`,children:[(0,x.jsxs)(`div`,{className:`section-header`,style:{justifyContent:`space-between`},children:[(0,x.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.4rem`},children:[(0,x.jsx)(ht,{size:16,className:`text-orange`}),(0,x.jsx)(`h3`,{children:`레이어별 표시 (ON / OFF)`})]}),(0,x.jsxs)(`div`,{className:`layer-bulk-actions`,children:[(0,x.jsx)(`button`,{type:`button`,onClick:()=>w(!0),className:`mini-link-btn`,children:`전체 켜기`}),(0,x.jsx)(`button`,{type:`button`,onClick:()=>w(!1),className:`mini-link-btn`,children:`끄기`})]})]}),(0,x.jsx)(`div`,{className:`layers-list`,children:Object.values(f).map(e=>(0,x.jsxs)(`div`,{className:`layer-toggle-row ${e.visible?`active`:``}`,onClick:()=>C(e.id),children:[(0,x.jsxs)(`div`,{className:`layer-info-left`,children:[(0,x.jsx)(`span`,{className:`layer-color-dot`,style:{backgroundColor:e.color}}),(0,x.jsx)(`span`,{className:`layer-name-text`,children:e.name})]}),(0,x.jsx)(`button`,{className:`layer-eye-btn`,type:`button`,children:e.visible?(0,x.jsx)(Ye,{size:16,className:`text-orange`}):(0,x.jsx)(qe,{size:16,className:`text-muted`})})]},e.id))})]}),(0,x.jsxs)(`div`,{className:`control-section`,children:[(0,x.jsxs)(`div`,{className:`section-header`,children:[(0,x.jsx)(dn,{size:16,className:`text-orange`}),(0,x.jsx)(`h3`,{children:`기판 제조 스펙 검토`})]}),(0,x.jsxs)(`div`,{className:`board-specs-table`,children:[(0,x.jsxs)(`div`,{className:`spec-row`,children:[(0,x.jsx)(`span`,{className:`spec-name`,children:`기판 외형 규격`}),(0,x.jsxs)(`span`,{className:`spec-val`,children:[h.dimensions.width,` × `,h.dimensions.height,` mm`]})]}),(0,x.jsxs)(`div`,{className:`spec-row`,children:[(0,x.jsx)(`span`,{className:`spec-name`,children:`레이어 적층 (Stackup)`}),(0,x.jsxs)(`span`,{className:`spec-val`,children:[h.layersCount,` Layers`]})]}),(0,x.jsxs)(`div`,{className:`spec-row`,children:[(0,x.jsx)(`span`,{className:`spec-name`,children:`SMD 패드 수`}),(0,x.jsxs)(`span`,{className:`spec-val`,children:[h.stats.pads,` 개`]})]}),(0,x.jsxs)(`div`,{className:`spec-row`,children:[(0,x.jsx)(`span`,{className:`spec-name`,children:`비아 홀 (Via Stitching)`}),(0,x.jsxs)(`span`,{className:`spec-val`,children:[h.stats.vias,` 개`]})]}),(0,x.jsxs)(`div`,{className:`spec-row`,children:[(0,x.jsx)(`span`,{className:`spec-name`,children:`스루홀 드릴 (PTH/NPTH)`}),(0,x.jsxs)(`span`,{className:`spec-val`,children:[h.stats.drills,` 개`]})]})]})]})]})]}),(0,x.jsx)(`style`,{children:`
        .gerber-viewer-page {
          max-width: 1280px;
          margin: 0 auto;
        }
        .gerber-header-banner {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          border-radius: var(--radius-xl);
          padding: 2.25rem 2.25rem 1.25rem;
          color: white;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.25);
          position: relative;
          overflow: hidden;
        }
        .gerber-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 111, 15, 0.2);
          border: 1px solid rgba(255, 111, 15, 0.4);
          color: #FF8A3D;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .gerber-main-title {
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }
        .gerber-subtitle {
          color: #94A3B8;
          font-size: 0.95rem;
          max-width: 760px;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .demo-board-selector {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }
        .board-select-btn {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          padding: 0.7rem 1.2rem;
          border-radius: 12px;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.05);
          font-size: 0.9rem;
          font-weight: 700;
          transition: all 0.2s;
          white-space: nowrap;
          border: 1px solid transparent;
        }
        .board-select-btn:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }
        .board-select-btn.active {
          background: var(--primary);
          color: white;
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 4px 14px rgba(255, 111, 15, 0.4);
        }
        .gerber-workspace-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 1.5rem;
        }
        @media (max-width: 960px) {
          .gerber-workspace-grid {
            grid-template-columns: 1fr;
          }
        }
        /* Canvas Box */
        .canvas-wrapper-box {
          background: #0F172A;
          border-radius: var(--radius-xl);
          border: 1px solid #334155;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
        }
        .canvas-toolbar {
          padding: 0.85rem 1.25rem;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #334155;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
        }
        .board-info-pill {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .board-name-badge {
          color: white;
          font-size: 0.9rem;
          font-weight: 800;
        }
        .dimension-badge {
          font-size: 0.75rem;
          background: #334155;
          color: #94A3B8;
          font-weight: 700;
          padding: 0.15rem 0.5rem;
          border-radius: 6px;
        }
        .toolbar-actions {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .tool-btn {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: #1E293B;
          color: #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
        }
        .tool-btn:hover {
          background: #334155;
          color: var(--primary);
        }
        .zoom-indicator {
          font-size: 0.8rem;
          font-weight: 800;
          color: #94A3B8;
          padding: 0 0.4rem;
        }
        .gerber-canvas {
          width: 100%;
          height: 600px;
          display: block;
          cursor: grab;
        }
        .gerber-canvas:active {
          cursor: grabbing;
        }
        .canvas-footer-hint {
          padding: 0.6rem 1.25rem;
          background: #0B1120;
          border-top: 1px solid #1E293B;
          font-size: 0.78rem;
          color: #64748B;
          text-align: center;
        }
        /* Right Controls Sidebar */
        .gerber-control-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .control-section {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          padding: 1.25rem;
          box-shadow: var(--shadow-sm);
        }
        .section-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.85rem;
        }
        .section-header h3 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #1E293B;
        }
        .color-swatches-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        .color-swatch-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.65rem;
          border-radius: 8px;
          background: #F8FAFC;
          border: 1.5px solid #E2E8F0;
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
          transition: all 0.15s;
        }
        .color-swatch-item:hover {
          background: #EEF2F6;
        }
        .color-swatch-item.active {
          border-color: var(--primary);
          background: #FFF2E8;
          color: var(--primary-dark);
        }
        .swatch-circle {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }
        .layer-bulk-actions {
          display: flex;
          gap: 0.5rem;
        }
        .mini-link-btn {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--primary);
          background: none;
          padding: 0.1rem 0.3rem;
        }
        .layers-list {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .layer-toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.55rem 0.75rem;
          border-radius: 8px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          cursor: pointer;
          transition: all 0.15s;
        }
        .layer-toggle-row:hover {
          background: #EEF2F6;
        }
        .layer-toggle-row.active {
          background: white;
          border-color: #CBD5E1;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .layer-info-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .layer-color-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .layer-name-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: #334155;
        }
        .board-specs-table {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .spec-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0.5rem;
          border-bottom: 1px solid #F1F5F9;
        }
        .spec-row:last-child {
          border-bottom: none;
        }
        .spec-name {
          font-size: 0.8rem;
          color: #64748B;
          font-weight: 600;
        }
        .spec-val {
          font-size: 0.85rem;
          color: #0F172A;
          font-weight: 800;
        }
      `})]})}function z({onNavigateToChat:e}){let{currentUser:t}=w(),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(`all`),[o,s]=(0,v.useState)(`all`),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)(!1),[f,p]=(0,v.useState)(null),[m,h]=(0,v.useState)(`share`),[g,_]=(0,v.useState)(`pcb`),[y,b]=(0,v.useState)(``),[S,C]=(0,v.useState)(0),[T,E]=(0,v.useState)(3),[D,O]=(0,v.useState)(``),[k,A]=(0,v.useState)(`역삼동 직거래 또는 반값택배`),[j,ee]=(0,v.useState)(``),[te,ne]=(0,v.useState)(``),[M,re]=(0,v.useState)(!1),ie=async()=>{try{let e=`/api/market?type=${i}&status=${o}`;c.trim()&&(e+=`&search=${encodeURIComponent(c.trim())}`);let t=await fetch(e);if(t.ok){let e=await t.json();r(e)}}catch(e){console.error(`Failed to fetch market items:`,e)}};(0,v.useEffect)(()=>{ie()},[i,o,c]);let N=async(e,n)=>{if(n?.stopPropagation(),!t){alert(`로그인이 필요한 기능입니다.`);return}try{let n=await fetch(`/api/market/${e}/join`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:t.id})});if(n.ok){let e=await n.json();r(t=>t.map(t=>t.id===e.id?e:t)),f?.id===e.id&&p(e)}}catch(e){console.error(`Join error:`,e)}};return(0,x.jsxs)(`div`,{className:`market-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`market-header-banner`,children:[(0,x.jsxs)(`div`,{className:`banner-text`,children:[(0,x.jsxs)(`h2`,{className:`banner-title`,children:[(0,x.jsx)(`span`,{className:`banner-emoji`,children:`📦`}),` 부품 나눔 & 해외 기판 묶음 공구 장터`]}),(0,x.jsx)(`p`,{className:`banner-desc`,children:`최소 수량 5장 발주 후 남는 PCB 무료 나눔과 DHL 배송비 0원 혜택! 소자 릴(Reel) 묶음 소분으로 제작 비용을 함께 절약해요.`})]}),(0,x.jsxs)(`button`,{className:`btn-primary write-market-btn`,onClick:()=>d(!0),children:[(0,x.jsx)(Ut,{size:18}),(0,x.jsx)(`span`,{children:`나눔 / 공구 등록`})]})]}),(0,x.jsxs)(`div`,{className:`market-filter-bar`,children:[(0,x.jsxs)(`div`,{className:`filter-group-tabs`,children:[(0,x.jsx)(`button`,{className:`filter-tab ${i===`all`?`active`:``}`,onClick:()=>a(`all`),children:`전체보기`}),(0,x.jsx)(`button`,{className:`filter-tab ${i===`share`?`active`:``}`,onClick:()=>a(`share`),children:`🥕 무료 나눔`}),(0,x.jsx)(`button`,{className:`filter-tab ${i===`group_buy`?`active`:``}`,onClick:()=>a(`group_buy`),children:`✈️ 해외 묶음 공구`})]}),(0,x.jsxs)(`div`,{className:`filter-right-tools`,children:[(0,x.jsx)(`button`,{className:`toggle-status-btn ${o===`recruiting`?`active`:``}`,onClick:()=>s(e=>e===`recruiting`?`all`:`recruiting`),children:o===`recruiting`?`✓ 모집중만 보는 중`:`모집중만 보기`}),(0,x.jsxs)(`div`,{className:`market-search`,children:[(0,x.jsx)(en,{size:16,className:`search-icon`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`부품명, 기판 검색...`,value:c,onChange:e=>l(e.target.value)})]})]})]}),(0,x.jsx)(`div`,{className:`market-grid`,children:n.length===0?(0,x.jsxs)(`div`,{className:`empty-market`,children:[(0,x.jsx)(`div`,{className:`empty-icon`,children:`📦`}),(0,x.jsx)(`h3`,{children:`등록된 나눔 / 공구 항목이 없습니다`}),(0,x.jsx)(`p`,{children:`직접 남는 기판이나 소자를 이웃 메이커들과 함께 나누어보세요!`})]}):n.map(e=>{let n=t&&(e.participants||[]).includes(t.id),r=e.status===`completed`||e.currentCount>=e.targetCount,i=Math.min(100,Math.round(e.currentCount/e.targetCount*100));return(0,x.jsxs)(`div`,{className:`market-card ${r?`completed-card`:``}`,onClick:()=>p(e),children:[(0,x.jsxs)(`div`,{className:`card-thumb-wrap`,children:[(0,x.jsx)(`img`,{src:e.image||`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,alt:e.title,className:`card-thumb`}),(0,x.jsxs)(`div`,{className:`card-badges-top`,children:[e.type===`share`?(0,x.jsx)(`span`,{className:`badge-type share`,children:`🥕 무료나눔`}):(0,x.jsx)(`span`,{className:`badge-type groupbuy`,children:`✈️ 묶음공구`}),r?(0,x.jsx)(`span`,{className:`badge-status completed`,children:`마감 완료`}):(0,x.jsx)(`span`,{className:`badge-status recruiting`,children:`모집중`})]})]}),(0,x.jsxs)(`div`,{className:`card-content`,children:[(0,x.jsx)(`h3`,{className:`card-title`,children:e.title}),(0,x.jsxs)(`div`,{className:`card-price-row`,children:[e.type===`share`?(0,x.jsx)(`span`,{className:`price-tag free`,children:`0원 (무료 나눔)`}):(0,x.jsxs)(`span`,{className:`price-tag paid`,children:[`1인당 `,(0,x.jsxs)(`strong`,{children:[`₩`,Number(e.price).toLocaleString()]})]}),(0,x.jsxs)(`span`,{className:`deadline-text`,children:[(0,x.jsx)(Le,{size:13}),` `,e.deadline,` 까지`]})]}),(0,x.jsxs)(`div`,{className:`card-progress-wrap`,children:[(0,x.jsxs)(`div`,{className:`progress-labels`,children:[(0,x.jsxs)(`span`,{className:`progress-count`,children:[(0,x.jsx)(Vn,{size:14}),` `,e.currentCount,` / `,e.targetCount,`명`]}),(0,x.jsxs)(`span`,{className:`progress-pct`,children:[i,`%`]})]}),(0,x.jsx)(`div`,{className:`progress-bar-bg`,children:(0,x.jsx)(`div`,{className:`progress-bar-fill`,style:{width:`${i}%`}})})]}),(0,x.jsxs)(`div`,{className:`card-location`,children:[(0,x.jsx)(xt,{size:13}),(0,x.jsx)(`span`,{children:e.location})]}),(0,x.jsx)(`p`,{className:`card-desc-preview`,children:e.description}),(0,x.jsxs)(`div`,{className:`card-footer`,children:[(0,x.jsxs)(`div`,{className:`author-col`,children:[(0,x.jsx)(`img`,{src:e.authorAvatar,alt:e.authorName,className:`author-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsx)(`span`,{className:`author-name`,children:e.authorName})]}),(0,x.jsx)(`div`,{className:`action-buttons-group`,children:(0,x.jsx)(`button`,{className:`join-btn ${n?`participating`:``}`,onClick:t=>N(e.id,t),disabled:!n&&r,children:n?`참여 취소`:e.type===`share`?`나눔 신청`:`공구 참여`})})]})]})]},e.id)})}),f&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>p(null),children:(0,x.jsxs)(`div`,{className:`modal-content market-detail-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`modal-header-badges`,children:[f.type===`share`?(0,x.jsx)(`span`,{className:`badge-type share`,children:`🥕 무료나눔`}):(0,x.jsx)(`span`,{className:`badge-type groupbuy`,children:`✈️ 묶음공구`}),f.status===`completed`?(0,x.jsx)(`span`,{className:`badge-status completed`,children:`모집마감`}):(0,x.jsx)(`span`,{className:`badge-status recruiting`,children:`모집중`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>p(null),children:`✕`})]}),(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsx)(`h2`,{className:`detail-title`,children:f.title}),(0,x.jsx)(`div`,{className:`detail-image-box`,children:(0,x.jsx)(`img`,{src:f.image,alt:f.title})}),(0,x.jsxs)(`div`,{className:`detail-meta-grid`,children:[(0,x.jsxs)(`div`,{className:`meta-card`,children:[(0,x.jsx)(`span`,{className:`meta-label`,children:`1인당 부담 금액`}),(0,x.jsx)(`span`,{className:`meta-val price`,children:f.type===`share`?`0원 (무료)`:`₩${Number(f.price).toLocaleString()}원`})]}),(0,x.jsxs)(`div`,{className:`meta-card`,children:[(0,x.jsx)(`span`,{className:`meta-label`,children:`참여 현황`}),(0,x.jsxs)(`span`,{className:`meta-val`,children:[f.currentCount,` / `,f.targetCount,`명 (`,Math.round(f.currentCount/f.targetCount*100),`%)`]})]}),(0,x.jsxs)(`div`,{className:`meta-card`,children:[(0,x.jsx)(`span`,{className:`meta-label`,children:`마감 기한`}),(0,x.jsx)(`span`,{className:`meta-val`,children:f.deadline})]}),(0,x.jsxs)(`div`,{className:`meta-card`,children:[(0,x.jsx)(`span`,{className:`meta-label`,children:`수령 및 전달 방식`}),(0,x.jsx)(`span`,{className:`meta-val`,children:f.location})]})]}),(0,x.jsxs)(`div`,{className:`detail-desc-box`,children:[(0,x.jsx)(`h4`,{children:`상세 설명 및 안내`}),(0,x.jsx)(`p`,{children:f.description})]}),(0,x.jsxs)(`div`,{className:`detail-author-row`,children:[(0,x.jsx)(`img`,{src:f.authorAvatar,alt:f.authorName,className:`author-avatar-lg`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`author-name-lg`,children:f.authorName}),(0,x.jsx)(`div`,{className:`author-desc-sm`,children:`나눔/공구 총대 메이커`})]})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsxs)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>{e?(e(f.authorId),p(null)):alert(`실시간 채팅 탭에서 1:1 대화를 나눠보세요.`)},children:[(0,x.jsx)(Tt,{size:16}),(0,x.jsx)(`span`,{children:`주최자에게 1:1 문의`})]}),(0,x.jsx)(`button`,{type:`button`,className:`btn-primary ${t&&(f.participants||[]).includes(t.id)?`active`:``}`,onClick:()=>N(f.id),children:t&&(f.participants||[]).includes(t.id)?`신청 취소하기`:f.type===`share`?`🥕 나눔 신청하기`:`📦 공구 참여하기`})]})]})}),u&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>d(!1),children:(0,x.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsx)(`h3`,{children:`새 부품 나눔 / 묶음 공구 등록`}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>d(!1),children:`✕`})]}),(0,x.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),y.trim()&&t)try{let e=await fetch(`/api/market`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({type:m,category:g,title:y.trim(),price:m===`share`?0:Number(S)||0,targetCount:Number(T)||2,deadline:D||`2026-10-15`,location:k.trim(),description:j.trim(),image:te||`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,authorId:t.id,authorName:t.name,authorAvatar:t.avatar})});if(e.ok){let t=await e.json();r(e=>[t,...e]),d(!1),b(``),ee(``),ne(``),C(0)}}catch(e){console.error(`Create market item error:`,e)}},children:[(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsxs)(`div`,{className:`form-row-2`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`구분 *`}),(0,x.jsxs)(`select`,{className:`form-select`,value:m,onChange:e=>h(e.target.value),children:[(0,x.jsx)(`option`,{value:`share`,children:`🥕 무료 나눔 (남는 기판/부품)`}),(0,x.jsx)(`option`,{value:`group_buy`,children:`✈️ 묶음 공구 (해외 배송비 절약)`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`카테고리 *`}),(0,x.jsxs)(`select`,{className:`form-select`,value:g,onChange:e=>_(e.target.value),children:[(0,x.jsx)(`option`,{value:`pcb`,children:`PCB 기판 (JLCPCB/PCBWay 등)`}),(0,x.jsx)(`option`,{value:`component`,children:`수동소자 / 칩릴 (LCSC 등)`}),(0,x.jsx)(`option`,{value:`mcu`,children:`MCU / IC / 센서`}),(0,x.jsx)(`option`,{value:`etc`,children:`공구 / 3D 출력물 / 기타`})]})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`제목 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: [나눔] RP2040 키보드 기판 3장 나눔 / [공구] 0603 칩저항 10종 릴 소분`,value:y,onChange:e=>b(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-row-2`,children:[m===`group_buy`&&(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`1인당 예상 분담 금액 (원) *`}),(0,x.jsx)(`input`,{type:`number`,className:`form-input`,placeholder:`예: 3500`,value:S,onChange:e=>C(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`모집 인원 (수량) *`}),(0,x.jsx)(`input`,{type:`number`,className:`form-input`,min:`1`,max:`100`,value:T,onChange:e=>E(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`모집 마감일 *`}),(0,x.jsx)(`input`,{type:`date`,className:`form-input`,value:D,onChange:e=>O(e.target.value)})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`수령 / 직거래 방식 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: 정기 밋업 당일 수령 / 역삼동 직거래 / 편의점 반값택배`,value:k,onChange:e=>A(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`상세 설명 *`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:4,placeholder:`부품 규격, 발주 스펙, 나눔/공구 조건 등을 상세히 적어주세요.`,value:j,onChange:e=>ee(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`실물 / 발주 내역 사진`}),(0,x.jsxs)(`label`,{className:`file-upload-btn`,children:[(0,x.jsx)(Nn,{size:16}),(0,x.jsx)(`span`,{children:`사진 첨부하기`}),(0,x.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async e=>{let t=e.target.files[0];if(t){re(!0);try{let e=new FormData;e.append(`file`,t);let n=await fetch(`/api/upload`,{method:`POST`,body:e});if(n.ok){let e=await n.json();ne(e.url)}else ne(URL.createObjectURL(t))}catch{ne(URL.createObjectURL(t))}finally{re(!1)}}},style:{display:`none`},disabled:M})]}),te&&(0,x.jsx)(`div`,{className:`uploaded-preview-single`,children:(0,x.jsx)(`img`,{src:te,alt:`Uploaded`})})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>d(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:M,children:`등록 완료 (+0.5℃ 납땜온도)`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .market-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .market-header-banner {
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          border: 1.5px solid #FDBA74;
          border-radius: 16px;
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .banner-emoji {
          font-size: 1.7rem;
        }
        .banner-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #9A3412;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .banner-desc {
          font-size: 0.92rem;
          color: #C2410C;
          margin-top: 0.35rem;
          line-height: 1.5;
          max-width: 800px;
        }
        .write-market-btn {
          white-space: nowrap;
          padding: 0.75rem 1.4rem;
          font-size: 0.95rem;
        }
        .market-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          background: white;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .filter-group-tabs {
          display: flex;
          gap: 0.5rem;
        }
        .filter-tab {
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          transition: all 0.15s;
        }
        .filter-tab:hover {
          color: var(--primary);
        }
        .filter-tab.active {
          background: var(--primary);
          color: white;
        }
        .filter-right-tools {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .toggle-status-btn {
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
        }
        .toggle-status-btn.active {
          background: #ECFDF5;
          color: #059669;
          border-color: #6EE7B7;
        }
        .market-search {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F8FAFC;
          border: 1px solid var(--border);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
        }
        .market-search input {
          border: none;
          background: transparent;
          font-size: 0.85rem;
          outline: none;
          min-width: 170px;
        }
        .market-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .market-card {
          background: white;
          border-radius: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .market-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
          border-color: #FFD8BE;
        }
        .card-thumb-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          background: #0F172A;
          overflow: hidden;
        }
        .card-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .market-card:hover .card-thumb {
          transform: scale(1.04);
        }
        .card-badges-top {
          position: absolute;
          top: 10px;
          left: 10px;
          right: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .badge-type {
          font-size: 0.76rem;
          font-weight: 800;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
        .badge-type.share {
          background: #10B981;
          color: white;
        }
        .badge-type.groupbuy {
          background: #FF6F0F;
          color: white;
        }
        .badge-status {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          background: rgba(15, 23, 42, 0.75);
          color: white;
          backdrop-filter: blur(4px);
        }
        .badge-status.recruiting {
          background: #0284C7;
        }
        .card-content {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .card-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.6rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }
        .price-tag.free {
          font-size: 0.95rem;
          font-weight: 800;
          color: #059669;
        }
        .price-tag.paid {
          font-size: 0.88rem;
          color: #64748B;
        }
        .price-tag.paid strong {
          font-size: 1.1rem;
          color: var(--primary);
        }
        .deadline-text {
          font-size: 0.76rem;
          color: #94A3B8;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .card-progress-wrap {
          margin-bottom: 0.75rem;
        }
        .progress-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          font-weight: 700;
          color: #475569;
          margin-bottom: 0.3rem;
        }
        .progress-count {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        .progress-pct {
          color: var(--primary);
        }
        .progress-bar-bg {
          width: 100%;
          height: 7px;
          background: #E2E8F0;
          border-radius: 9999px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #FB923C 0%, #FF6F0F 100%);
          border-radius: 9999px;
          transition: width 0.3s ease;
        }
        .card-location {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #64748B;
          margin-bottom: 0.5rem;
        }
        .card-desc-preview {
          font-size: 0.84rem;
          color: #475569;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: 1rem;
          flex: 1;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid #F1F5F9;
        }
        .author-col {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .author-avatar {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .join-btn {
          font-size: 0.82rem;
          font-weight: 700;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: #FFF2E8;
          color: #EA580C;
          border: 1px solid #FFD8BE;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .join-btn:hover {
          background: var(--primary);
          color: white;
        }
        .join-btn.participating {
          background: #F1F5F9;
          color: #64748B;
          border-color: #CBD5E1;
        }
        .market-detail-modal {
          max-width: 680px;
        }
        .modal-header-badges {
          display: flex;
          gap: 0.5rem;
        }
        .detail-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 1rem;
        }
        .detail-image-box {
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #0F172A;
        }
        .detail-image-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .detail-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .meta-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.75rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .meta-label {
          font-size: 0.76rem;
          color: #64748B;
          font-weight: 600;
        }
        .meta-val {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1E293B;
        }
        .meta-val.price {
          color: var(--primary);
          font-size: 1.05rem;
        }
        .detail-desc-box {
          background: #FFFBF7;
          border: 1px solid #FED7AA;
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.25rem;
        }
        .detail-desc-box h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #9A3412;
          margin-bottom: 0.5rem;
        }
        .detail-desc-box p {
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
          white-space: pre-wrap;
        }
        .detail-author-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
        }
        .author-avatar-lg {
          width: 42px;
          height: 42px;
          border-radius: 50%;
        }
        .author-name-lg {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0F172A;
        }
        .author-desc-sm {
          font-size: 0.78rem;
          color: #64748B;
        }
        .uploaded-preview-single {
          margin-top: 0.5rem;
          max-width: 240px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .uploaded-preview-single img {
          width: 100%;
          height: auto;
          display: block;
        }
        .empty-market {
          grid-column: 1 / -1;
          padding: 4rem 1rem;
          text-align: center;
          background: white;
          border: 1px dashed var(--border);
          border-radius: 16px;
        }
        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }
      `})]})}function B({onNavigateToChat:e}){let{currentUser:t}=w(),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(`all`),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(null),[f,p]=(0,v.useState)(`scope`),[m,h]=(0,v.useState)(``),[g,_]=(0,v.useState)(`역삼동 당근 하드웨어 랩`),[y,b]=(0,v.useState)(`정기 밋업 시 지참 가능 / 작업실 방문 사용`),[S,C]=(0,v.useState)(``),[T,E]=(0,v.useState)(``),[D,O]=(0,v.useState)(!1),k=[{id:`all`,label:`전체 장비`},{id:`scope`,label:`🔬 오실로스코프 & 계측기`},{id:`soldering`,label:`🔥 열풍기 & 리워크`},{id:`3dprinter`,label:`🖨️ 3D 프린터 & 기구`},{id:`microscope`,label:`🔍 광학 현미경`}],A=async()=>{try{let e=`/api/equipment?category=${i}`;o.trim()&&(e+=`&search=${encodeURIComponent(o.trim())}`);let t=await fetch(e);if(t.ok){let e=await t.json();r(e)}}catch(e){console.error(`Failed to fetch equipment:`,e)}};return(0,v.useEffect)(()=>{A()},[i,o]),(0,x.jsxs)(`div`,{className:`equipment-container fade-in`,children:[(0,x.jsxs)(`div`,{className:`equipment-header-banner`,children:[(0,x.jsxs)(`div`,{className:`banner-text`,children:[(0,x.jsxs)(`h2`,{className:`banner-title`,children:[(0,x.jsx)(`span`,{className:`banner-emoji`,children:`🗺️`}),` 동네 공유 장비 & 공방 맵`]}),(0,x.jsx)(`p`,{className:`banner-desc`,children:`개인이 구매하기 부담스러운 4채널 디지털 오실로스코프, 고출력 SMD 열풍기, 고해상도 납땜 현미경을 이웃들과 함께 공유하고 대여해보세요.`})]}),(0,x.jsxs)(`button`,{className:`btn-primary write-eq-btn`,onClick:()=>l(!0),children:[(0,x.jsx)(Ut,{size:18}),(0,x.jsx)(`span`,{children:`내 장비 공유 / 등록`})]})]}),(0,x.jsxs)(`div`,{className:`equipment-filter-bar`,children:[(0,x.jsx)(`div`,{className:`filter-group-tabs`,children:k.map(e=>(0,x.jsx)(`button`,{className:`filter-tab ${i===e.id?`active`:``}`,onClick:()=>a(e.id),children:e.label},e.id))}),(0,x.jsxs)(`div`,{className:`equipment-search`,children:[(0,x.jsx)(en,{size:16,className:`search-icon`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`장비명, 제조사, 사양 검색...`,value:o,onChange:e=>s(e.target.value)})]})]}),(0,x.jsx)(`div`,{className:`equipment-grid`,children:n.length===0?(0,x.jsxs)(`div`,{className:`empty-equipment`,children:[(0,x.jsx)(`div`,{className:`empty-icon`,children:`🔬`}),(0,x.jsx)(`h3`,{children:`등록된 공유 장비가 없습니다`}),(0,x.jsx)(`p`,{children:`보유 중인 계측기나 공구를 등록하여 이웃 메이커들에게 도움을 나누어보세요!`})]}):n.map(t=>(0,x.jsxs)(`div`,{className:`equipment-card`,onClick:()=>d(t),children:[(0,x.jsxs)(`div`,{className:`eq-thumb-wrap`,children:[(0,x.jsx)(`img`,{src:t.image||`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80`,alt:t.title,className:`eq-thumb`}),(0,x.jsxs)(`span`,{className:`status-badge-available`,children:[(0,x.jsx)(je,{size:12}),` 이용 가능`]})]}),(0,x.jsxs)(`div`,{className:`eq-content`,children:[(0,x.jsx)(`h3`,{className:`eq-title`,children:t.title}),(0,x.jsxs)(`div`,{className:`eq-location-row`,children:[(0,x.jsx)(xt,{size:13}),(0,x.jsx)(`span`,{children:t.location})]}),(0,x.jsxs)(`div`,{className:`eq-specs-box`,children:[(0,x.jsx)(`div`,{className:`eq-specs-title`,children:`주요 성능 / 스펙`}),(0,x.jsx)(`pre`,{className:`eq-specs-text`,children:t.specs})]}),(0,x.jsxs)(`div`,{className:`eq-condition-note`,children:[(0,x.jsx)(`strong`,{children:`대여 조건:`}),` `,t.condition]}),(0,x.jsxs)(`div`,{className:`eq-footer`,children:[(0,x.jsxs)(`div`,{className:`owner-col`,children:[(0,x.jsx)(`img`,{src:t.ownerAvatar,alt:t.ownerName,className:`owner-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsxs)(`div`,{className:`owner-info`,children:[(0,x.jsx)(`span`,{className:`owner-name`,children:t.ownerName}),(0,x.jsx)(`span`,{className:`owner-role`,children:`장비 제공자`})]})]}),(0,x.jsxs)(`button`,{className:`contact-dm-btn`,onClick:n=>{n.stopPropagation(),e&&e(t.ownerId)},children:[(0,x.jsx)(Tt,{size:14}),(0,x.jsx)(`span`,{children:`대여 문의`})]})]})]})]},t.id))}),u&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>d(null),children:(0,x.jsxs)(`div`,{className:`modal-content equipment-detail-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`span`,{className:`status-badge-available`,children:[(0,x.jsx)(je,{size:13}),` 공유 및 대여 가능`]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>d(null),children:`✕`})]}),(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsx)(`h2`,{className:`detail-eq-title`,children:u.title}),(0,x.jsx)(`div`,{className:`detail-eq-image`,children:(0,x.jsx)(`img`,{src:u.image,alt:u.title})}),(0,x.jsxs)(`div`,{className:`detail-meta-grid`,children:[(0,x.jsxs)(`div`,{className:`meta-card`,children:[(0,x.jsx)(`span`,{className:`meta-label`,children:`보관 및 이용 위치`}),(0,x.jsx)(`span`,{className:`meta-val`,children:u.location})]}),(0,x.jsxs)(`div`,{className:`meta-card`,children:[(0,x.jsx)(`span`,{className:`meta-label`,children:`대여 및 사용 조건`}),(0,x.jsx)(`span`,{className:`meta-val`,children:u.condition})]})]}),(0,x.jsxs)(`div`,{className:`detail-specs-card`,children:[(0,x.jsx)(`h4`,{children:`상세 스펙 및 부속품`}),(0,x.jsx)(`pre`,{children:u.specs})]}),(0,x.jsxs)(`div`,{className:`detail-owner-row`,children:[(0,x.jsx)(`img`,{src:u.ownerAvatar,alt:u.ownerName,className:`owner-avatar-lg`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`owner-name-lg`,children:u.ownerName}),(0,x.jsx)(`div`,{className:`owner-desc-sm`,children:`당근 PCB 메이커스 장비 호스트`})]})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>d(null),children:`닫기`}),(0,x.jsxs)(`button`,{type:`button`,className:`btn-primary`,onClick:()=>{e&&(e(u.ownerId),d(null))},children:[(0,x.jsx)(Tt,{size:16}),(0,x.jsx)(`span`,{children:`장비 호스트에게 1:1 대여 문의하기`})]})]})]})}),c&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>l(!1),children:(0,x.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsx)(`h3`,{children:`공유 장비 등록하기`}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>l(!1),children:`✕`})]}),(0,x.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),m.trim()&&t)try{let e=await fetch(`/api/equipment`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({category:f,title:m.trim(),location:g.trim(),condition:y.trim(),specs:S.trim(),image:T||`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80`,ownerId:t.id,ownerName:t.name,ownerAvatar:t.avatar})});if(e.ok){let t=await e.json();r(e=>[t,...e]),l(!1),h(``),C(``),E(``)}}catch(e){console.error(`Create equipment error:`,e)}},children:[(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsxs)(`div`,{className:`form-row-2`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`장비 분류 *`}),(0,x.jsxs)(`select`,{className:`form-select`,value:f,onChange:e=>p(e.target.value),children:[(0,x.jsx)(`option`,{value:`scope`,children:`🔬 오실로스코프 & 계측기`}),(0,x.jsx)(`option`,{value:`soldering`,children:`🔥 열풍기 & 리워크 스테이션`}),(0,x.jsx)(`option`,{value:`3dprinter`,children:`🖨️ 3D 프린터 & 기구물`}),(0,x.jsx)(`option`,{value:`microscope`,children:`🔍 실체 현미경`}),(0,x.jsx)(`option`,{value:`etc`,children:`🛠️ 기타 전자기기/공구`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`위치 / 작업실 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: 역삼동 당근 하드웨어 랩 / 판교 개인 작업실`,value:g,onChange:e=>_(e.target.value),required:!0})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`장비 모델명 및 명칭 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: Rigol DS1054Z 4CH 오실로스코프 (100MHz)`,value:m,onChange:e=>h(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`이용 및 대여 조건 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: 정기 밋업 당일 지참 / 작업실 방문 예약 사용 (사전 1:1 문의)`,value:y,onChange:e=>b(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`주요 성능 / 스펙 / 부속품 *`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:4,placeholder:`• 4채널 100MHz 대역폭
• 패시브 프로브 4개 구비
• I2C/SPI 디코딩 지원`,value:S,onChange:e=>C(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`장비 실물 사진`}),(0,x.jsxs)(`label`,{className:`file-upload-btn`,children:[(0,x.jsx)(Nn,{size:16}),(0,x.jsx)(`span`,{children:`장비 사진 업로드`}),(0,x.jsx)(`input`,{type:`file`,accept:`image/*`,onChange:async e=>{let t=e.target.files[0];if(t){O(!0);try{let e=new FormData;e.append(`file`,t);let n=await fetch(`/api/upload`,{method:`POST`,body:e});if(n.ok){let e=await n.json();E(e.url)}else E(URL.createObjectURL(t))}catch{E(URL.createObjectURL(t))}finally{O(!1)}}},style:{display:`none`},disabled:D})]}),T&&(0,x.jsx)(`div`,{className:`uploaded-preview-single`,children:(0,x.jsx)(`img`,{src:T,alt:`Equipment`})})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>l(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:D,children:`공유 장비 등록 완료 (+0.8℃ 납땜온도)`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .equipment-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .equipment-header-banner {
          background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
          border: 1.5px solid #86EFAC;
          border-radius: 16px;
          padding: 1.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .banner-emoji {
          font-size: 1.7rem;
        }
        .banner-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #166534;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .banner-desc {
          font-size: 0.92rem;
          color: #15803D;
          margin-top: 0.35rem;
          line-height: 1.5;
          max-width: 800px;
        }
        .write-eq-btn {
          white-space: nowrap;
          padding: 0.75rem 1.4rem;
          font-size: 0.95rem;
          background: #16A34A;
          border-color: #16A34A;
        }
        .write-eq-btn:hover {
          background: #15803D;
        }
        .equipment-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          background: white;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .filter-group-tabs {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .filter-tab {
          padding: 0.45rem 0.9rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
          background: #F8FAFC;
          transition: all 0.15s;
        }
        .filter-tab:hover {
          color: #16A34A;
        }
        .filter-tab.active {
          background: #16A34A;
          color: white;
        }
        .equipment-search {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #F8FAFC;
          border: 1px solid var(--border);
          padding: 0.4rem 0.75rem;
          border-radius: 8px;
        }
        .equipment-search input {
          border: none;
          background: transparent;
          font-size: 0.85rem;
          outline: none;
          min-width: 180px;
        }
        .equipment-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .equipment-card {
          background: white;
          border-radius: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .equipment-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
          border-color: #86EFAC;
        }
        .eq-thumb-wrap {
          position: relative;
          width: 100%;
          height: 190px;
          background: #0F172A;
          overflow: hidden;
        }
        .eq-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .equipment-card:hover .eq-thumb {
          transform: scale(1.04);
        }
        .status-badge-available {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: #16A34A;
          color: white;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .eq-content {
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .eq-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }
        .eq-location-row {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          color: #64748B;
          margin-bottom: 0.75rem;
        }
        .eq-specs-box {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.65rem 0.85rem;
          margin-bottom: 0.75rem;
        }
        .eq-specs-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: #475569;
          margin-bottom: 0.3rem;
        }
        .eq-specs-text {
          font-family: inherit;
          font-size: 0.82rem;
          color: #334155;
          line-height: 1.45;
          white-space: pre-wrap;
          margin: 0;
        }
        .eq-condition-note {
          font-size: 0.8rem;
          color: #15803D;
          background: #F0FDF4;
          border: 1px solid #BBF7D0;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          flex: 1;
        }
        .eq-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid #F1F5F9;
        }
        .owner-col {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .owner-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
        }
        .owner-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .owner-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #334155;
        }
        .owner-role {
          font-size: 0.7rem;
          color: #94A3B8;
        }
        .contact-dm-btn {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          background: #F0FDF4;
          color: #16A34A;
          border: 1px solid #86EFAC;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .contact-dm-btn:hover {
          background: #16A34A;
          color: white;
        }
        .equipment-detail-modal {
          max-width: 680px;
        }
        .detail-eq-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 1rem;
        }
        .detail-eq-image {
          width: 100%;
          height: 280px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #0F172A;
        }
        .detail-eq-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .detail-specs-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 1rem;
          margin-bottom: 1.25rem;
        }
        .detail-specs-card h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }
        .detail-specs-card pre {
          font-family: inherit;
          font-size: 0.9rem;
          color: #334155;
          line-height: 1.6;
          white-space: pre-wrap;
          margin: 0;
        }
        .detail-owner-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.5rem 0;
        }
        .owner-avatar-lg {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }
        .owner-name-lg {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0F172A;
        }
        .owner-desc-sm {
          font-size: 0.78rem;
          color: #64748B;
        }
        .empty-equipment {
          grid-column: 1 / -1;
          padding: 4rem 1rem;
          text-align: center;
          background: white;
          border: 1px dashed var(--border);
          border-radius: 16px;
        }
        .empty-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }
      `})]})}function aa({isOpen:e,onClose:t}){let{currentUser:n}=w();if(!e||!n)return null;let r=Number(n.solderingTemp||36.5),i=Math.min(100,Math.max(0,(r-36.5)/63.400000000000006*100)),a=er(r),o=n.badges||[`sprout_maker`];return(0,x.jsxs)(`div`,{className:`modal-overlay`,onClick:t,children:[(0,x.jsxs)(`div`,{className:`modal-content profile-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`header-title-box`,children:[(0,x.jsx)(`span`,{className:`modal-emoji`,children:`🌡️`}),(0,x.jsx)(`h3`,{children:`당근 납땜 온도 & 메이커 프로필`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:t,children:`✕`})]}),(0,x.jsxs)(`div`,{className:`modal-body profile-body`,children:[(0,x.jsxs)(`div`,{className:`profile-user-hero`,children:[(0,x.jsxs)(`div`,{className:`hero-avatar-wrap`,children:[(0,x.jsx)(`img`,{src:n.avatar,alt:n.name,className:`hero-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsx)(`span`,{className:`hero-role-badge`,children:n.role===`admin`?`운영진 👑`:`정회원 🌱`})]}),(0,x.jsxs)(`div`,{className:`hero-info`,children:[(0,x.jsx)(`h2`,{className:`hero-name`,children:n.name}),(0,x.jsx)(`p`,{className:`hero-bio`,children:n.bio}),(0,x.jsx)(`div`,{className:`hero-tags`,children:(n.tags||[]).map((e,t)=>(0,x.jsxs)(`span`,{className:`hero-tag`,children:[`#`,e]},t))})]})]}),(0,x.jsxs)(`div`,{className:`temp-gauge-card`,children:[(0,x.jsxs)(`div`,{className:`temp-header`,children:[(0,x.jsxs)(`div`,{className:`temp-label-group`,children:[(0,x.jsx)($e,{size:24,className:`temp-flame-icon`}),(0,x.jsx)(`span`,{className:`temp-label`,children:`당근 납땜 온도`})]}),(0,x.jsxs)(`div`,{className:`temp-number-box`,children:[(0,x.jsxs)(`span`,{className:`temp-degrees`,children:[r.toFixed(1),`℃`]}),(0,x.jsx)(`span`,{className:`temp-level-badge`,style:{background:a.color},children:a.title})]})]}),(0,x.jsx)(`div`,{className:`temp-bar-track`,children:(0,x.jsx)(`div`,{className:`temp-bar-fill`,style:{width:`${Math.max(5,i)}%`},children:(0,x.jsx)(`span`,{className:`temp-thumb-flame`,children:`🔥`})})}),(0,x.jsxs)(`div`,{className:`temp-scale-marks`,children:[(0,x.jsx)(`span`,{children:`36.5℃ (기본)`}),(0,x.jsx)(`span`,{children:`45.0℃ (열정)`}),(0,x.jsx)(`span`,{children:`65.0℃ (장인)`}),(0,x.jsx)(`span`,{children:`99.9℃ (마스터)`})]}),(0,x.jsx)(`p`,{className:`temp-desc-sub`,children:a.desc})]}),(0,x.jsxs)(`div`,{className:`temp-boost-guide`,children:[(0,x.jsxs)(`h4`,{className:`guide-title`,children:[(0,x.jsx)(Tn,{size:16}),` 납땜 온도를 올리는 방법`]}),(0,x.jsxs)(`div`,{className:`boost-items-grid`,children:[(0,x.jsxs)(`div`,{className:`boost-item`,children:[(0,x.jsx)(`span`,{className:`boost-badge`,children:`+1.5℃`}),(0,x.jsx)(`span`,{className:`boost-desc`,children:`🚨 회로 SOS 버그 해결책 채택받기`})]}),(0,x.jsxs)(`div`,{className:`boost-item`,children:[(0,x.jsx)(`span`,{className:`boost-badge`,children:`+0.8℃`}),(0,x.jsx)(`span`,{className:`boost-desc`,children:`🗺️ 내 고가 계측기/공구 이웃과 공유하기`})]}),(0,x.jsxs)(`div`,{className:`boost-item`,children:[(0,x.jsx)(`span`,{className:`boost-badge`,children:`+0.5℃`}),(0,x.jsx)(`span`,{className:`boost-desc`,children:`📦 남는 PCB 나눔 및 부품 묶음공구 주최`})]}),(0,x.jsxs)(`div`,{className:`boost-item`,children:[(0,x.jsx)(`span`,{className:`boost-badge`,children:`+0.5℃`}),(0,x.jsx)(`span`,{className:`boost-desc`,children:`☕ 정기 오프라인 납땜 워크숍 참석`})]})]})]}),(0,x.jsxs)(`div`,{className:`levels-tier-section`,children:[(0,x.jsxs)(`h4`,{className:`guide-title`,children:[(0,x.jsx)(fe,{size:16}),` 당근 PCB 메이커스 6단계 등급 체계`]}),(0,x.jsx)(`div`,{className:`levels-tier-grid`,children:$n.map(e=>{let t=a.level===e.level;return(0,x.jsxs)(`div`,{className:`level-tier-pill ${t?`current`:``}`,children:[(0,x.jsx)(`span`,{className:`lvl-icon`,children:e.icon}),(0,x.jsxs)(`div`,{className:`lvl-info`,children:[(0,x.jsxs)(`span`,{className:`lvl-name`,children:[`Lv.`,e.level,` `,e.title.replace(/^[^ ]+ /,``)]}),(0,x.jsxs)(`span`,{className:`lvl-range`,children:[e.minTemp,` ~ `,e.maxTemp,`℃`]})]}),t&&(0,x.jsx)(`span`,{className:`lvl-now-badge`,children:`현재 등급`})]},e.level)})})]}),(0,x.jsxs)(`div`,{className:`badges-section`,children:[(0,x.jsxs)(`div`,{className:`badges-section-header`,children:[(0,x.jsx)(fe,{size:18,color:`#FF6F0F`}),(0,x.jsxs)(`h4`,{children:[`메이커 업적 뱃지 (`,o.length,` / `,Object.keys(Qn).length,`)`]})]}),(0,x.jsx)(`div`,{className:`badges-grid`,children:Object.values(Qn).map(e=>{let t=o.includes(e.id);return(0,x.jsxs)(`div`,{className:`badge-card ${t?`unlocked`:`locked`}`,children:[(0,x.jsx)(`div`,{className:`badge-icon-box`,style:{borderColor:t?e.color:`#CBD5E1`},children:t?(0,x.jsx)(je,{size:22,color:e.color}):(0,x.jsx)(_t,{size:20,color:`#94A3B8`})}),(0,x.jsxs)(`div`,{className:`badge-text-box`,children:[(0,x.jsx)(`div`,{className:`badge-name`,children:e.name}),(0,x.jsx)(`div`,{className:`badge-desc`,children:e.desc})]})]},e.id)})})]})]}),(0,x.jsx)(`div`,{className:`modal-footer`,children:(0,x.jsx)(`button`,{type:`button`,className:`btn-primary`,style:{width:`100%`},onClick:t,children:`확인`})})]}),(0,x.jsx)(`style`,{children:`
        .profile-modal {
          max-width: 620px;
        }
        .header-title-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .modal-emoji {
          font-size: 1.4rem;
        }
        .profile-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profile-user-hero {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.25rem;
        }
        .hero-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }
        .hero-avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          border: 2.5px solid #FFD8BE;
          object-fit: cover;
        }
        .hero-role-badge {
          position: absolute;
          bottom: -4px;
          right: -4px;
          background: #0F172A;
          color: white;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 0.15rem 0.45rem;
          border-radius: 10px;
          white-space: nowrap;
        }
        .hero-info {
          flex: 1;
        }
        .hero-name {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.25rem;
        }
        .hero-bio {
          font-size: 0.86rem;
          color: #475569;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }
        .hero-tags {
          display: flex;
          gap: 0.35rem;
          flex-wrap: wrap;
        }
        .hero-tag {
          font-size: 0.74rem;
          font-weight: 700;
          color: var(--primary);
          background: var(--primary-light);
          padding: 0.15rem 0.45rem;
          border-radius: 6px;
        }
        /* Temperature Gauge */
        .temp-gauge-card {
          background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
          border: 1.5px solid #FED7AA;
          border-radius: 14px;
          padding: 1.25rem;
        }
        .temp-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }
        .temp-label-group {
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .temp-flame-icon {
          color: #EA580C;
        }
        .temp-label {
          font-size: 1.05rem;
          font-weight: 800;
          color: #9A3412;
        }
        .temp-number-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .temp-degrees {
          font-size: 1.45rem;
          font-weight: 900;
          color: #EA580C;
          letter-spacing: -0.02em;
        }
        .temp-level-badge {
          color: white;
          font-size: 0.78rem;
          font-weight: 800;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
        }
        .temp-bar-track {
          width: 100%;
          height: 12px;
          background: #FED7AA;
          border-radius: 9999px;
          position: relative;
          overflow: visible;
          margin-bottom: 0.5rem;
        }
        .temp-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981 0%, #F59E0B 40%, #EA580C 75%, #DC2626 100%);
          border-radius: 9999px;
          position: relative;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .temp-thumb-flame {
          position: absolute;
          right: -8px;
          top: -12px;
          font-size: 1.1rem;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        .temp-scale-marks {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 700;
          color: #9A3412;
          margin-bottom: 0.5rem;
        }
        .temp-desc-sub {
          font-size: 0.82rem;
          color: #C2410C;
          margin-top: 0.25rem;
          font-weight: 600;
        }
        /* Boost tips */
        .temp-boost-guide {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem;
        }
        .guide-title {
          font-size: 0.88rem;
          font-weight: 800;
          color: #1E293B;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.75rem;
        }
        .boost-items-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 0.5rem;
        }
        .boost-item {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #F8FAFC;
          padding: 0.45rem 0.65rem;
          border-radius: 8px;
          border: 1px solid #F1F5F9;
        }

        /* 6단계 등급 체계 스타일 */
        .levels-tier-section {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem;
        }
        .levels-tier-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }
        .level-tier-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 0.5rem;
          position: relative;
        }
        .level-tier-pill.current {
          background: #FFF2E8;
          border-color: #FF6F0F;
          box-shadow: 0 0 0 1px #FF6F0F;
        }
        .lvl-icon {
          font-size: 1.25rem;
        }
        .lvl-info {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }
        .lvl-name {
          font-size: 0.8rem;
          font-weight: 700;
          color: #1E293B;
        }
        .lvl-range {
          font-size: 0.72rem;
          color: #64748B;
        }
        .lvl-now-badge {
          position: absolute;
          top: -6px;
          right: 6px;
          background: #FF6F0F;
          color: #FFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 5px;
          border-radius: 4px;
        }
        .boost-badge {
          background: #FEF3C7;
          color: #D97706;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 0.15rem 0.4rem;
          border-radius: 6px;
          white-space: nowrap;
        }
        .boost-desc {
          font-size: 0.8rem;
          color: #334155;
          font-weight: 600;
        }
        /* Badges */
        .badges-section {
          background: white;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1rem;
        }
        .badges-section-header {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          margin-bottom: 0.85rem;
        }
        .badges-section-header h4 {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0F172A;
        }
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 0.75rem;
        }
        .badge-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.85rem;
          border-radius: 10px;
          border: 1.5px solid var(--border);
          transition: all 0.15s ease;
        }
        .badge-card.unlocked {
          background: #FFFFFF;
          border-color: #FED7AA;
          box-shadow: 0 2px 6px rgba(255, 111, 15, 0.08);
        }
        .badge-card.locked {
          background: #F8FAFC;
          opacity: 0.6;
        }
        .badge-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          flex-shrink: 0;
        }
        .badge-text-box {
          flex: 1;
        }
        .badge-name {
          font-size: 0.86rem;
          font-weight: 800;
          color: #0F172A;
          margin-bottom: 0.15rem;
        }
        .badge-desc {
          font-size: 0.75rem;
          color: #64748B;
          line-height: 1.35;
        }
      `})]})}function oa({onNavigateToBoard:e}){let{currentUser:t,users:n,refreshUsers:r}=w(),[i,a]=(0,v.useState)(`users`),[o,s]=(0,v.useState)(null),[c,l]=(0,v.useState)([]),[u,d]=(0,v.useState)(``),[f,p]=(0,v.useState)(null),m=async()=>{try{let[e,t]=await Promise.all([fetch(`/api/stats`),fetch(`/api/posts?boardType=suggestion`)]);e.ok&&s(await e.json()),t.ok&&l(await t.json())}catch(e){console.error(`Failed to load admin data:`,e)}};(0,v.useEffect)(()=>{m()},[]);let h=async(e,t)=>{p(e);try{(await fetch(`/api/users/${e}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({role:t})})).ok&&await r()}catch(e){console.error(`Failed to update role:`,e)}finally{p(null)}},g=async(e,t,n)=>{try{(await fetch(`/api/posts/${e}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})})).ok&&l(n=>n.map(n=>n.id===e?{...n,status:t}:n))}catch(e){console.error(`Failed to update suggestion status:`,e)}},_=n.filter(e=>{if(!u.trim())return!0;let t=u.toLowerCase();return e.name.toLowerCase().includes(t)||e.username.toLowerCase().includes(t)||e.bio?.toLowerCase().includes(t)});return(0,x.jsxs)(`div`,{className:`admin-container fade-in`,children:[(0,x.jsx)(`div`,{className:`admin-header`,children:(0,x.jsxs)(`div`,{className:`admin-title-group`,children:[(0,x.jsx)(`div`,{className:`admin-badge-icon`,children:(0,x.jsx)(sn,{size:28,color:`#6D28D9`})}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{className:`section-title`,children:`당근 PCB 메이커스 운영진 관리자 센터`}),(0,x.jsx)(`p`,{className:`section-desc`,children:`회원 권한 관리, 건의사항 검토 및 모임 통계 현황을 관리합니다.`})]})]})}),(0,x.jsxs)(`div`,{className:`admin-nav-bar`,children:[(0,x.jsxs)(`button`,{className:`admin-tab-btn ${i===`users`?`active`:``}`,onClick:()=>a(`users`),children:[(0,x.jsx)(Vn,{size:17}),(0,x.jsxs)(`span`,{children:[`회원 관리 (`,n.length,`명)`]})]}),(0,x.jsxs)(`button`,{className:`admin-tab-btn ${i===`suggestions`?`active`:``}`,onClick:()=>a(`suggestions`),children:[(0,x.jsx)(Tt,{size:17}),(0,x.jsxs)(`span`,{children:[`건의사항 처리 (`,c.length,`건)`]})]}),(0,x.jsxs)(`button`,{className:`admin-tab-btn ${i===`stats`?`active`:``}`,onClick:()=>a(`stats`),children:[(0,x.jsx)(Tn,{size:17}),(0,x.jsx)(`span`,{children:`모임 활동 지표 & 통계`})]})]}),i===`users`&&(0,x.jsxs)(`div`,{className:`admin-card`,children:[(0,x.jsxs)(`div`,{className:`card-top-action`,children:[(0,x.jsx)(`h3`,{className:`card-heading`,children:`클럽 회원 목록 및 등급 권한 조정`}),(0,x.jsxs)(`div`,{className:`user-search-wrapper`,children:[(0,x.jsx)(en,{size:16,className:`search-icon`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`회원 이름, 아이디 검색...`,value:u,onChange:e=>d(e.target.value),className:`search-input`})]})]}),(0,x.jsxs)(`div`,{className:`users-admin-table`,children:[(0,x.jsxs)(`div`,{className:`users-table-head`,children:[(0,x.jsx)(`span`,{children:`회원 프로필`}),(0,x.jsx)(`span`,{children:`아이디`}),(0,x.jsx)(`span`,{children:`관심 분야`}),(0,x.jsx)(`span`,{children:`가입일`}),(0,x.jsx)(`span`,{children:`현재 등급`}),(0,x.jsx)(`span`,{children:`권한 관리`})]}),_.map(e=>(0,x.jsxs)(`div`,{className:`user-row-item`,children:[(0,x.jsxs)(`div`,{className:`user-avatar-name-cell`,children:[(0,x.jsx)(`img`,{src:e.avatar,alt:e.name,className:`admin-user-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=user`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`table-user-name`,children:e.name}),(0,x.jsx)(`div`,{className:`table-user-bio`,children:e.bio})]})]}),(0,x.jsxs)(`div`,{className:`table-cell font-mono`,children:[`@`,e.username]}),(0,x.jsx)(`div`,{className:`table-cell tags-cell`,children:e.tags?.map((e,t)=>(0,x.jsxs)(`span`,{className:`admin-tag-pill`,children:[`#`,e]},t))}),(0,x.jsx)(`div`,{className:`table-cell`,children:new Date(e.createdAt).toLocaleDateString(`ko-KR`)}),(0,x.jsx)(`div`,{className:`table-cell`,children:e.role===`admin`?(0,x.jsxs)(`span`,{className:`badge badge-purple`,children:[(0,x.jsx)(sn,{size:12}),` 운영진`]}):e.role===`suspended`?(0,x.jsxs)(`span`,{className:`badge badge-gray`,style:{color:`#DC2626`},children:[(0,x.jsx)(me,{size:12}),` 이용정지`]}):(0,x.jsxs)(`span`,{className:`badge badge-green`,children:[(0,x.jsx)(Fn,{size:12}),` 정회원`]})}),(0,x.jsx)(`div`,{className:`table-cell actions-cell`,children:(0,x.jsxs)(`select`,{className:`role-select`,value:e.role,disabled:f===e.id||e.id===t?.id,onChange:t=>h(e.id,t.target.value),children:[(0,x.jsx)(`option`,{value:`member`,children:`정회원`}),(0,x.jsx)(`option`,{value:`admin`,children:`운영진 (Admin)`}),(0,x.jsx)(`option`,{value:`suspended`,children:`활동 정지`})]})})]},e.id))]})]}),i===`suggestions`&&(0,x.jsxs)(`div`,{className:`admin-card`,children:[(0,x.jsx)(`div`,{className:`card-top-action`,children:(0,x.jsx)(`h3`,{className:`card-heading`,children:`회원 건의사항 통합 처리 데스크`})}),(0,x.jsx)(`div`,{className:`suggestions-admin-list`,children:c.length===0?(0,x.jsx)(`p`,{className:`no-data`,children:`등록된 건의사항이 없습니다.`}):c.map(e=>(0,x.jsxs)(`div`,{className:`sugg-admin-card`,children:[(0,x.jsxs)(`div`,{className:`sugg-admin-top`,children:[(0,x.jsxs)(`div`,{className:`sugg-author-info`,children:[(0,x.jsxs)(`span`,{className:`sugg-author`,children:[e.authorName,`님의 건의`]}),(0,x.jsx)(`span`,{className:`sugg-date`,children:new Date(e.createdAt).toLocaleDateString(`ko-KR`)})]}),(0,x.jsxs)(`div`,{className:`sugg-status-selector`,children:[(0,x.jsx)(`label`,{children:`처리 상태:`}),(0,x.jsxs)(`select`,{className:`form-select status-select-sm`,value:e.status||`접수`,onChange:t=>g(e.id,t.target.value,e.adminResponse),children:[(0,x.jsx)(`option`,{value:`접수`,children:`접수 (Received)`}),(0,x.jsx)(`option`,{value:`검토중`,children:`검토중 (In Review)`}),(0,x.jsx)(`option`,{value:`반영완료`,children:`반영완료 (Done)`})]})]})]}),(0,x.jsx)(`h4`,{className:`sugg-title`,children:e.title}),(0,x.jsx)(`p`,{className:`sugg-content`,children:e.content}),e.adminResponse&&(0,x.jsxs)(`div`,{className:`sugg-current-reply`,children:[(0,x.jsx)(`strong`,{children:`현재 등록된 운영진 답변:`}),` `,e.adminResponse]})]},e.id))})]}),i===`stats`&&(0,x.jsxs)(`div`,{className:`stats-grid`,children:[(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-card-label`,children:`전체 등록 회원`}),(0,x.jsxs)(`div`,{className:`stat-card-value`,children:[o?.totalMembers||n.length,`명`]}),(0,x.jsx)(`span`,{className:`stat-card-desc`,children:`당근 모임 회원 가입수`})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-card-label`,children:`누적 등록 PCB 프로젝트`}),(0,x.jsxs)(`div`,{className:`stat-card-value`,children:[o?.totalProjects||0,`개`]}),(0,x.jsx)(`span`,{className:`stat-card-desc`,children:`회원 개인 작업실 보관함 포함`})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-card-label`,children:`전체 공개 갤러리 공유작`}),(0,x.jsxs)(`div`,{className:`stat-card-value`,children:[o?.publicProjects||0,`개`]}),(0,x.jsx)(`span`,{className:`stat-card-desc`,children:`피어 리뷰 진행 중`})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`span`,{className:`stat-card-label`,children:`게시판 작성글`}),(0,x.jsxs)(`div`,{className:`stat-card-value`,children:[o?.totalPosts||0,`개`]}),(0,x.jsx)(`span`,{className:`stat-card-desc`,children:`5대 게시판 누적 글 수`})]})]}),(0,x.jsx)(`style`,{children:`
        .admin-header {
          margin-bottom: 1.5rem;
        }
        .admin-title-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .admin-badge-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: #EDE9FE;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-nav-bar {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          background: white;
          padding: 0.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
        }
        .admin-tab-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.65rem 1.1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748B;
        }
        .admin-tab-btn:hover {
          color: #6D28D9;
          background: #F5F3FF;
        }
        .admin-tab-btn.active {
          background: #6D28D9;
          color: white;
        }
        .admin-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .card-top-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .card-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0F172A;
        }
        .user-search-wrapper {
          position: relative;
          min-width: 250px;
        }
        .users-admin-table {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border);
          border-radius: 8px;
          overflow: hidden;
        }
        .users-table-head {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr 1fr;
          padding: 0.75rem 1rem;
          background: #F8FAFC;
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748B;
          border-bottom: 1px solid var(--border);
        }
        .user-row-item {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr 1fr 1fr 1fr;
          padding: 0.9rem 1rem;
          border-bottom: 1px solid #F1F5F9;
          align-items: center;
          font-size: 0.85rem;
        }
        .user-row-item:hover {
          background: #FAFBFD;
        }
        .user-avatar-name-cell {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .admin-user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }
        .table-user-name {
          font-weight: 700;
          color: #1E293B;
        }
        .table-user-bio {
          font-size: 0.75rem;
          color: #94A3B8;
          max-width: 200px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .tags-cell {
          display: flex;
          gap: 0.25rem;
          flex-wrap: wrap;
        }
        .admin-tag-pill {
          font-size: 0.72rem;
          color: #0D9488;
          background: #F0FDFA;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }
        .role-select {
          padding: 0.35rem 0.6rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          font-size: 0.8rem;
          background: white;
        }
        .role-select:focus {
          border-color: #6D28D9;
          outline: none;
        }
        .suggestions-admin-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .sugg-admin-card {
          background: #F8FAFC;
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1.25rem;
        }
        .sugg-admin-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .sugg-author {
          font-weight: 700;
          color: #1E293B;
          font-size: 0.88rem;
        }
        .sugg-date {
          font-size: 0.75rem;
          color: #94A3B8;
          margin-left: 0.5rem;
        }
        .sugg-status-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
        }
        .status-select-sm {
          padding: 0.3rem 0.5rem;
          font-size: 0.8rem;
          width: auto;
        }
        .sugg-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.3rem;
        }
        .sugg-content {
          font-size: 0.88rem;
          color: #475569;
          line-height: 1.5;
        }
        .sugg-current-reply {
          margin-top: 0.75rem;
          background: #FFF7ED;
          border-left: 3px solid #EA580C;
          padding: 0.6rem 0.85rem;
          border-radius: 0 6px 6px 0;
          font-size: 0.85rem;
          color: #7C2D12;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .stat-card {
          background: white;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
        }
        .stat-card-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748B;
        }
        .stat-card-value {
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--primary);
          margin: 0.4rem 0;
        }
        .stat-card-desc {
          font-size: 0.78rem;
          color: #94A3B8;
        }
      `})]})}function sa({isOpen:e,onClose:t}){let{currentUser:n,users:r,quickSwitchUser:i,login:a,register:o}=w(),[s,c]=(0,v.useState)(`switch`),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)(``),[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)(``),[_,y]=(0,v.useState)(``),[b,S]=(0,v.useState)(``),[C,T]=(0,v.useState)(`KiCad, 아두이노, 2층기판`),[E,D]=(0,v.useState)(``),[O,k]=(0,v.useState)(``),[A,j]=(0,v.useState)(``);return e?(0,x.jsxs)(`div`,{className:`modal-overlay`,onClick:t,children:[(0,x.jsxs)(`div`,{className:`modal-content auth-modal-box`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`auth-header-title`,children:[(0,x.jsx)(`span`,{className:`auth-carrot-badge`,children:`🥕`}),(0,x.jsx)(`h3`,{children:`당근 PCB 메이커스 회원 센터`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:t,children:(0,x.jsx)(Gn,{size:20})})]}),(0,x.jsxs)(`div`,{className:`auth-tabs`,children:[(0,x.jsxs)(`button`,{className:`auth-tab ${s===`switch`?`active`:``}`,onClick:()=>{c(`switch`),k(``)},children:[(0,x.jsx)(pn,{size:16}),(0,x.jsx)(`span`,{children:`원클릭 계정 전환`})]}),(0,x.jsxs)(`button`,{className:`auth-tab ${s===`register`?`active`:``}`,onClick:()=>{c(`register`),k(``)},children:[(0,x.jsx)(Ln,{size:16}),(0,x.jsx)(`span`,{children:`신규 회원 등록`})]}),(0,x.jsxs)(`button`,{className:`auth-tab ${s===`login`?`active`:``}`,onClick:()=>{c(`login`),k(``)},children:[(0,x.jsx)(yt,{size:16}),(0,x.jsx)(`span`,{children:`기존 로그인`})]})]}),(0,x.jsxs)(`div`,{className:`modal-body`,children:[O&&(0,x.jsx)(`div`,{className:`auth-alert error`,children:O}),A&&(0,x.jsx)(`div`,{className:`auth-alert success`,children:A}),s===`switch`&&(0,x.jsxs)(`div`,{className:`quick-switch-section`,children:[(0,x.jsx)(`p`,{className:`quick-switch-desc`,children:`다양한 회원의 시각(운영진, 회로 엔지니어, 초보 메이커 등)으로 기능을 즉시 테스트할 수 있는 원클릭 데모 계정 전환 기능입니다.`}),(0,x.jsx)(`div`,{className:`user-cards-grid`,children:r.map(e=>{let r=n?.id===e.id;return(0,x.jsxs)(`div`,{className:`user-card-item ${r?`current-active`:``}`,onClick:()=>{i(e),t()},children:[(0,x.jsxs)(`div`,{className:`user-card-top`,children:[(0,x.jsx)(`img`,{src:e.avatar,alt:e.name,className:`user-card-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=avatar`}}),(0,x.jsxs)(`div`,{className:`user-card-meta`,children:[(0,x.jsxs)(`div`,{className:`user-card-name-row`,children:[(0,x.jsx)(`span`,{className:`user-card-name`,children:e.name}),e.role===`admin`?(0,x.jsxs)(`span`,{className:`badge badge-orange`,children:[(0,x.jsx)(ln,{size:12}),` 관리자`]}):(0,x.jsxs)(`span`,{className:`badge badge-green`,children:[(0,x.jsx)(zn,{size:12}),` `,e.tags?.[0]||`정회원`]})]}),(0,x.jsxs)(`span`,{className:`user-card-id`,children:[`@`,e.username]})]})]}),(0,x.jsx)(`p`,{className:`user-card-bio`,children:e.bio}),(0,x.jsxs)(`div`,{className:`user-card-footer`,children:[(0,x.jsx)(`span`,{className:`user-card-tags`,children:e.tags?.map((e,t)=>(0,x.jsxs)(`span`,{className:`mini-tag`,children:[`#`,e]},t))}),r?(0,x.jsxs)(`span`,{className:`current-badge`,children:[(0,x.jsx)(Fn,{size:14}),` 현재 접속 중`]}):(0,x.jsx)(`span`,{className:`select-badge`,children:`클릭하여 전환 →`})]})]},e.id)})})]}),s===`register`&&(0,x.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),k(``),j(``);try{let e=C.split(`,`).map(e=>e.trim()).filter(Boolean);await o({username:p,password:h,name:_,bio:b,tags:e,avatar:E||`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(p)}`}),j(`회원가입이 완료되어 자동 로그인되었습니다! 환영합니다 🥕`),setTimeout(()=>{t()},600)}catch(e){k(e.message)}},className:`auth-form`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`아이디 (ID) *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,value:p,onChange:e=>m(e.target.value),placeholder:`예: pcb_newbie`,required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`비밀번호 *`}),(0,x.jsx)(`input`,{type:`password`,className:`form-input`,value:h,onChange:e=>g(e.target.value),placeholder:`비밀번호를 입력하세요`,required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`닉네임 / 활동명 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,value:_,onChange:e=>y(e.target.value),placeholder:`예: 역삼동 납땜마스터`,required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`관심 분야 (쉼표로 구분)`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,value:C,onChange:e=>T(e.target.value),placeholder:`예: KiCad, ESP32, 4층기판, SMPS`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`자기소개 / 모임 가입 인사`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:2,value:b,onChange:e=>S(e.target.value),placeholder:`관심있는 하드웨어 프로젝트나 모임에서 하고 싶은 활동을 적어주세요.`})]}),(0,x.jsxs)(`button`,{type:`submit`,className:`btn-primary`,style:{width:`100%`,marginTop:`0.5rem`},children:[(0,x.jsx)(Ln,{size:18}),(0,x.jsx)(`span`,{children:`당근 PCB 모임 가입 완료`})]})]}),s===`login`&&(0,x.jsxs)(`form`,{onSubmit:async e=>{e.preventDefault(),k(``),j(``);try{await a(l,d),j(`성공적으로 로그인되었습니다!`),setTimeout(()=>{t()},500)}catch(e){k(e.message)}},className:`auth-form`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`아이디`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,value:l,onChange:e=>u(e.target.value),placeholder:`아이디 (예: admin, circuit_pro, rookie_maker)`,required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`비밀번호`}),(0,x.jsx)(`input`,{type:`password`,className:`form-input`,value:d,onChange:e=>f(e.target.value),placeholder:`기본 비밀번호: 123`,required:!0})]}),(0,x.jsxs)(`div`,{className:`login-tip`,children:[`💡 팁: 데모 계정들의 비밀번호는 모두 `,(0,x.jsx)(`code`,{children:`123`}),` 입니다.`]}),(0,x.jsxs)(`button`,{type:`submit`,className:`btn-primary`,style:{width:`100%`,marginTop:`0.5rem`},children:[(0,x.jsx)(yt,{size:18}),(0,x.jsx)(`span`,{children:`로그인`})]})]})]})]}),(0,x.jsx)(`style`,{children:`
        .auth-modal-box {
          max-width: 620px;
        }
        .auth-header-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .auth-carrot-badge {
          font-size: 1.3rem;
        }
        .close-btn {
          color: #94A3B8;
          padding: 0.25rem;
          border-radius: 6px;
        }
        .close-btn:hover {
          color: #0F172A;
          background: #F1F5F9;
        }
        .auth-tabs {
          display: flex;
          border-bottom: 1px solid var(--border);
          background: #F8FAFC;
        }
        .auth-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          padding: 0.85rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: #64748B;
          border-bottom: 2px solid transparent;
        }
        .auth-tab.active {
          color: var(--primary);
          background: white;
          border-bottom-color: var(--primary);
        }
        .auth-alert {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 500;
        }
        .auth-alert.error {
          background: #FEF2F2;
          color: #B91C1C;
          border: 1px solid #FECACA;
        }
        .auth-alert.success {
          background: #ECFDF5;
          color: #047857;
          border: 1px solid #A7F3D0;
        }
        .quick-switch-desc {
          font-size: 0.88rem;
          color: #64748B;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .user-cards-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .user-card-item {
          background: #FFFFFF;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-md);
          padding: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .user-card-item:hover {
          border-color: var(--primary);
          background: #FFFBF7;
          transform: translateY(-1px);
          box-shadow: var(--shadow-sm);
        }
        .user-card-item.current-active {
          border-color: var(--primary);
          background: #FFF7F0;
        }
        .user-card-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        .user-card-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #FED7AA;
        }
        .user-card-meta {
          flex: 1;
        }
        .user-card-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .user-card-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #1E293B;
        }
        .user-card-id {
          font-size: 0.75rem;
          color: #94A3B8;
        }
        .user-card-bio {
          font-size: 0.83rem;
          color: #475569;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }
        .user-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px dashed #E2E8F0;
          padding-top: 0.5rem;
        }
        .mini-tag {
          font-size: 0.72rem;
          color: #0D9488;
          background: #F0FDFA;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
          margin-right: 0.3rem;
          font-weight: 500;
        }
        .current-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .select-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748B;
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .login-tip {
          font-size: 0.8rem;
          color: #64748B;
          background: #F8FAFC;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .login-tip code {
          background: #E2E8F0;
          padding: 0.1rem 0.3rem;
          border-radius: 3px;
          font-family: var(--font-mono);
          font-weight: 700;
        }
      `})]}):null}function ca({isOpen:e,onClose:t,onProjectCreated:n}){let{currentUser:r}=w(),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(`• Layer: 2 Layer
• MCU: 
• Dimensions: 
• Power: 5V USB-C`),[u,d]=(0,v.useState)(`회로설계`),[f,p]=(0,v.useState)(!0),[m,h]=(0,v.useState)(`KiCad, 아두이노`),[g,_]=(0,v.useState)([]),[y,b]=(0,v.useState)(!1),[S,C]=(0,v.useState)(!1),[T,E]=(0,v.useState)(``);if(!e)return null;let D=async e=>{let t=Array.from(e.target.files);if(t.length){b(!0),E(``);try{for(let e of t){let t=new FormData;t.append(`file`,e);let n=await fetch(`/api/upload`,{method:`POST`,body:t});if(n.ok){let e=await n.json();_(t=>[...t,e.url])}else{let t=URL.createObjectURL(e);_(e=>[...e,t])}}}catch(e){console.error(`File upload error:`,e);let n=URL.createObjectURL(t[0]);_(e=>[...e,n])}finally{b(!1)}}},O=()=>{let e=[`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`,`https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80`,`https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80`,`https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80`],t=e[Math.floor(Math.random()*e.length)];_(e=>[...e,t])},k=e=>{_(t=>t.filter((t,n)=>n!==e))};return(0,x.jsxs)(`div`,{className:`modal-overlay`,onClick:t,children:[(0,x.jsxs)(`div`,{className:`modal-content new-project-modal`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`np-title-row`,children:[(0,x.jsx)(`span`,{className:`np-icon`,children:`⚡`}),(0,x.jsx)(`h3`,{children:`새 PCB 설계 프로젝트 등록`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:t,children:(0,x.jsx)(Gn,{size:20})})]}),(0,x.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!i.trim()){E(`프로젝트 제목을 입력해주세요.`);return}if(!r){E(`로그인 후 이용할 수 있습니다.`);return}C(!0),E(``);let a=m.split(`,`).map(e=>e.trim()).filter(Boolean);try{let e=await fetch(`/api/projects`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:r.id,userName:r.name,userAvatar:r.avatar,title:i.trim(),description:o.trim(),specs:c.trim(),status:u,isPublic:f,tags:a,images:g.length>0?g:[`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`]})});if(!e.ok){let t=await e.json();throw Error(t.error||`프로젝트 등록에 실패했습니다.`)}let s=await e.json();n&&n(s),t()}catch(e){E(e.message)}finally{C(!1)}},children:[(0,x.jsxs)(`div`,{className:`modal-body`,children:[T&&(0,x.jsx)(`div`,{className:`auth-alert error`,children:T}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`프로젝트 명 *`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: STM32 기반 스마트 전력 모니터링 보드`,value:i,onChange:e=>a(e.target.value),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-row-2`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`진행 단계 (Status)`}),(0,x.jsxs)(`select`,{className:`form-select`,value:u,onChange:e=>d(e.target.value),children:[(0,x.jsx)(`option`,{value:`구상/스케치`,children:`구상/스케치`}),(0,x.jsx)(`option`,{value:`회로설계`,children:`회로설계`}),(0,x.jsx)(`option`,{value:`아트웍`,children:`아트웍 (Artwork)`}),(0,x.jsx)(`option`,{value:`샘플발주`,children:`샘플발주 (Fabrication)`}),(0,x.jsx)(`option`,{value:`조립완료`,children:`조립완료 (Assembled)`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`공개 범위 설정`}),(0,x.jsx)(`div`,{className:`share-toggle-card ${f?`public`:`private`}`,onClick:()=>p(!f),children:f?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(tt,{size:18,className:`toggle-icon public`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`toggle-label`,children:`전체 회원 공개 공유`}),(0,x.jsx)(`div`,{className:`toggle-sub`,children:`갤러리에 노출되어 피드백을 받습니다`})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_t,{size:18,className:`toggle-icon private`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`toggle-label`,children:`나만 보기 (비공개)`}),(0,x.jsx)(`div`,{className:`toggle-sub`,children:`내 작업 보관함에만 저장됩니다`})]})]})})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`회로/기판 사진 업로드 (다중 선택 가능)`}),(0,x.jsxs)(`div`,{className:`image-upload-zone`,children:[(0,x.jsxs)(`label`,{className:`file-upload-btn`,children:[(0,x.jsx)(Nn,{size:18}),(0,x.jsx)(`span`,{children:`내 PC에서 이미지 파일 선택`}),(0,x.jsx)(`input`,{type:`file`,accept:`image/*`,multiple:!0,onChange:D,style:{display:`none`},disabled:y})]}),(0,x.jsxs)(`button`,{type:`button`,className:`sample-img-btn`,onClick:O,children:[(0,x.jsx)(dt,{size:16}),(0,x.jsx)(`span`,{children:`샘플 기판 사진 추가`})]})]}),g.length>0&&(0,x.jsx)(`div`,{className:`uploaded-previews-grid`,children:g.map((e,t)=>(0,x.jsxs)(`div`,{className:`preview-item`,children:[(0,x.jsx)(`img`,{src:e,alt:`Preview ${t}`}),(0,x.jsx)(`button`,{type:`button`,className:`remove-img-btn`,onClick:()=>k(t),children:(0,x.jsx)(Cn,{size:13})})]},t))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`프로젝트 설명 & 개발 목적`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:3,placeholder:`어떤 기능을 하는 회로인지, 어떤 계기로 만들게 되었는지 자유롭게 설명해주세요.`,value:o,onChange:e=>s(e.target.value)})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`회로 및 PCB 상세 스펙 (층수, 부품, 치수 등)`}),(0,x.jsx)(`textarea`,{className:`form-textarea font-mono`,rows:4,value:c,onChange:e=>l(e.target.value),placeholder:`• Layer: 4 Layer
• MCU: ESP32-S3
• Power: 3.3V LDO
• Package: 0603 SMD`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`태그 (쉼표로 구분)`}),(0,x.jsx)(`input`,{type:`text`,className:`form-input`,placeholder:`예: KiCad, ESP32, 4층기판, 고속신호`,value:m,onChange:e=>h(e.target.value)})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:t,children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,disabled:S||y,children:S?`저장 중...`:`작업물 저장 및 등록`})]})]})]}),(0,x.jsx)(`style`,{children:`
        .new-project-modal {
          max-width: 680px;
        }
        .np-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .np-icon {
          font-size: 1.3rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        @media (max-width: 600px) {
          .form-row-2 {
            grid-template-columns: 1fr;
          }
        }
        .share-toggle-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.65rem 0.9rem;
          border-radius: var(--radius-sm);
          border: 1.5px solid var(--border);
          cursor: pointer;
          background: #F8FAFC;
          transition: all 0.2s;
        }
        .share-toggle-card.public {
          border-color: #FED7AA;
          background: #FFF7ED;
        }
        .toggle-icon.public {
          color: var(--primary);
        }
        .toggle-icon.private {
          color: #64748B;
        }
        .toggle-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1E293B;
        }
        .toggle-sub {
          font-size: 0.72rem;
          color: #64748B;
        }
        .image-upload-zone {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .file-upload-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          border: 1.5px dashed var(--primary);
          background: var(--primary-light);
          color: var(--primary-dark);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }
        .file-upload-btn:hover {
          background: #FFEDD5;
        }
        .sample-img-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 0.9rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: white;
          color: #475569;
          font-size: 0.85rem;
          font-weight: 600;
        }
        .sample-img-btn:hover {
          background: #F1F5F9;
        }
        .uploaded-previews-grid {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-top: 0.75rem;
        }
        .preview-item {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border);
        }
        .preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .remove-img-btn {
          position: absolute;
          top: 3px;
          right: 3px;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .font-mono {
          font-family: var(--font-mono);
          font-size: 0.82rem;
        }
      `})]})}function la(e){let t=new Date(e)-new Date;return Math.max(0,Math.ceil(t/864e5))}function ua(e){return new Date(e).toLocaleDateString(`ko-KR`,{year:`numeric`,month:`short`,day:`numeric`})}function da(){let{currentUser:e}=w(),[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)(!1),[s,c]=(0,v.useState)({title:``,description:``,image:``}),[l,u]=(0,v.useState)(`all`);(0,v.useEffect)(()=>{d()},[]);let d=async()=>{try{let e=await fetch(`/api/challenges`);e.ok&&n(await e.json())}catch(e){console.error(e)}},f=async()=>{if(r&&e&&s.title.trim())try{(await fetch(`/api/challenges/${r.id}/submit`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:e.id,userName:e.name,userAvatar:e.avatar,title:s.title,description:s.description,image:s.image||`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`})})).ok&&(o(!1),c({title:``,description:``,image:``}),d())}catch(e){console.error(e)}},p=async(t,n)=>{if(e)try{await fetch(`/api/challenges/${t}/vote/${n}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:e.id})}),d()}catch(e){console.error(e)}},m=t.filter(e=>l===`all`||e.status===l),h={active:`진행중`,upcoming:`예정`,ended:`종료`},g={active:`#10B981`,upcoming:`#3B82F6`,ended:`#94A3B8`};return(0,x.jsxs)(`div`,{className:`challenge-view fade-in`,children:[(0,x.jsx)(`div`,{className:`challenge-header-section`,children:(0,x.jsxs)(`div`,{className:`challenge-title-box`,children:[(0,x.jsx)(kn,{size:28,style:{color:`#F59E0B`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{children:`🏆 주간 챌린지 & 콘테스트`}),(0,x.jsx)(`p`,{children:`매주 다양한 PCB 설계 챌린지에 참여하고 메이커 온도를 올려보세요!`})]})]})}),(0,x.jsx)(`div`,{className:`challenge-filters`,children:[{key:`all`,label:`전체`},{key:`active`,label:`🔥 진행중`},{key:`upcoming`,label:`📅 예정`},{key:`ended`,label:`🏁 종료`}].map(e=>(0,x.jsx)(`button`,{className:`filter-chip ${l===e.key?`active`:``}`,onClick:()=>u(e.key),children:e.label},e.key))}),(0,x.jsx)(`div`,{className:`challenge-grid`,children:m.map(e=>{let t=la(e.endDate),n=e.status===`active`,a=e.submissions.reduce((e,t)=>e+t.votes,0);return(0,x.jsxs)(`div`,{className:`challenge-card ${e.status}`,onClick:()=>i(r?.id===e.id?null:e),children:[(0,x.jsxs)(`div`,{className:`chal-card-top`,children:[(0,x.jsx)(`span`,{className:`chal-status-badge`,style:{background:g[e.status]+`20`,color:g[e.status]},children:h[e.status]}),n&&(0,x.jsxs)(`span`,{className:`chal-dday`,children:[`D-`,t]})]}),(0,x.jsx)(`h3`,{children:e.title}),(0,x.jsx)(`p`,{className:`chal-desc`,children:e.description}),(0,x.jsxs)(`div`,{className:`chal-meta`,children:[(0,x.jsxs)(`span`,{children:[(0,x.jsx)(be,{size:14}),` `,ua(e.startDate),` ~ `,ua(e.endDate)]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(Vn,{size:14}),` `,e.submissions.length,`팀 참여`]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(xn,{size:14}),` `,a,`표`]})]}),(0,x.jsxs)(`div`,{className:`chal-prize`,children:[(0,x.jsx)(fe,{size:14}),` `,e.prize]})]},e.id)})}),r&&(0,x.jsxs)(`div`,{className:`challenge-detail-section`,children:[(0,x.jsxs)(`div`,{className:`chal-detail-header`,children:[(0,x.jsx)(`h3`,{children:r.title}),r.status===`active`&&e&&(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>o(!0),children:[(0,x.jsx)(Nn,{size:16}),` 작품 제출`]})]}),(0,x.jsxs)(`div`,{className:`chal-rules-box`,children:[(0,x.jsx)(`h4`,{children:`📋 참가 규칙`}),(0,x.jsx)(`div`,{className:`chal-rules-content`,children:r.rules.split(`\\n`).map((e,t)=>(0,x.jsxs)(`div`,{className:`chal-rule-item`,children:[(0,x.jsx)(je,{size:14,style:{color:`#10B981`}}),` `,e]},t))})]}),(0,x.jsxs)(`h4`,{className:`submissions-title`,children:[`🎨 제출 작품 (`,r.submissions.length,`)`]}),(0,x.jsx)(`div`,{className:`submissions-grid`,children:r.submissions.length===0?(0,x.jsx)(`div`,{className:`empty-submissions`,children:`아직 제출된 작품이 없습니다. 첫 번째 참가자가 되어보세요!`}):[...r.submissions].sort((e,t)=>t.votes-e.votes).map((t,n)=>{let i=e&&t.votedUsers?.includes(e.id);return(0,x.jsxs)(`div`,{className:`submission-card`,children:[n===0&&(0,x.jsx)(`div`,{className:`rank-badge gold`,children:`🥇`}),n===1&&(0,x.jsx)(`div`,{className:`rank-badge silver`,children:`🥈`}),n===2&&(0,x.jsx)(`div`,{className:`rank-badge bronze`,children:`🥉`}),(0,x.jsx)(`div`,{className:`sub-image`,style:{backgroundImage:`url(${t.image})`}}),(0,x.jsxs)(`div`,{className:`sub-info`,children:[(0,x.jsxs)(`div`,{className:`sub-author`,children:[(0,x.jsx)(`img`,{src:t.userAvatar,alt:``,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsx)(`span`,{children:t.userName})]}),(0,x.jsx)(`h4`,{children:t.title}),(0,x.jsx)(`p`,{children:t.description}),(0,x.jsx)(`div`,{className:`sub-actions`,children:(0,x.jsxs)(`button`,{className:`vote-btn ${i?`voted`:``}`,onClick:e=>{e.stopPropagation(),p(r.id,t.id)},children:[(0,x.jsx)(xn,{size:14}),` `,t.votes,`표 `,i?`(투표함)`:`투표`]})})]})]},t.id)})})]}),a&&(0,x.jsx)(`div`,{className:`modal-overlay`,onClick:()=>o(!1),children:(0,x.jsxs)(`div`,{className:`modal-content`,onClick:e=>e.stopPropagation(),style:{maxWidth:520},children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsx)(`h3`,{children:`🎯 작품 제출`}),(0,x.jsx)(`button`,{onClick:()=>o(!1),children:(0,x.jsx)(Gn,{size:20})})]}),(0,x.jsxs)(`div`,{className:`modal-body`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`작품 제목 *`}),(0,x.jsx)(`input`,{className:`form-input`,value:s.title,onChange:e=>c(t=>({...t,title:e.target.value})),placeholder:`예: 초미니 ESP32-C3 보드 (18mm x 24mm)`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`설명`}),(0,x.jsx)(`textarea`,{className:`form-textarea`,rows:3,value:s.description,onChange:e=>c(t=>({...t,description:e.target.value})),placeholder:`설계 포인트, 사용 기술 등을 설명해주세요`})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{className:`form-label`,children:`이미지 URL`}),(0,x.jsx)(`input`,{className:`form-input`,value:s.image,onChange:e=>c(t=>({...t,image:e.target.value})),placeholder:`기판 사진 또는 3D 렌더링 URL`})]})]}),(0,x.jsxs)(`div`,{className:`modal-footer`,children:[(0,x.jsx)(`button`,{className:`btn-secondary`,onClick:()=>o(!1),children:`취소`}),(0,x.jsx)(`button`,{className:`btn-primary`,onClick:f,disabled:!s.title.trim(),children:`제출하기`})]})]})}),(0,x.jsx)(`style`,{children:`
        .challenge-view { max-width: 1100px; margin: 0 auto; }
        .challenge-header-section { margin-bottom: 1.5rem; }
        .challenge-title-box { display: flex; align-items: flex-start; gap: 1rem; }
        .challenge-title-box h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-main, #0F172A); margin: 0; }
        .challenge-title-box p { font-size: 0.9rem; color: var(--text-muted, #64748B); margin-top: 0.25rem; }
        .challenge-filters { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
        .filter-chip {
          padding: 0.45rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;
          background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); color: var(--text-muted, #64748B); cursor: pointer;
        }
        .filter-chip.active { background: var(--primary); color: white; border-color: var(--primary); }
        .challenge-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.25rem; margin-bottom: 2rem; }
        .challenge-card {
          background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 16px; padding: 1.5rem;
          cursor: pointer; transition: all 0.2s;
        }
        .challenge-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .challenge-card.active { border-color: #10B981; border-width: 2px; }
        .chal-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
        .chal-status-badge { padding: 0.2rem 0.65rem; border-radius: 12px; font-size: 0.75rem; font-weight: 700; }
        .chal-dday { font-size: 0.85rem; font-weight: 800; color: #DC2626; }
        .challenge-card h3 { font-size: 1.05rem; font-weight: 700; color: var(--text-main, #0F172A); margin-bottom: 0.5rem; line-height: 1.4; }
        .chal-desc { font-size: 0.85rem; color: var(--text-muted, #64748B); line-height: 1.5; margin-bottom: 1rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .chal-meta { display: flex; flex-wrap: wrap; gap: 1rem; font-size: 0.78rem; color: var(--text-sub, #94A3B8); margin-bottom: 0.75rem; }
        .chal-meta span { display: flex; align-items: center; gap: 0.3rem; }
        .chal-prize { display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; font-weight: 600; color: #F59E0B; background: #FFFBEB; padding: 0.4rem 0.75rem; border-radius: 8px; border: 1px solid #FEF3C7; }
        .challenge-detail-section { background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 16px; padding: 2rem; }
        .chal-detail-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .chal-detail-header h3 { font-size: 1.2rem; font-weight: 800; }
        .chal-rules-box { background: var(--bg-subtle, #F8FAFC); border: 1px solid var(--border); border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; }
        .chal-rules-box h4 { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.75rem; }
        .chal-rule-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--text-muted, #64748B); padding: 0.3rem 0; }
        .submissions-title { font-size: 1.05rem; font-weight: 700; margin-bottom: 1rem; }
        .submissions-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.25rem; }
        .empty-submissions { text-align: center; padding: 2rem; color: var(--text-sub, #94A3B8); font-size: 0.9rem; grid-column: 1 / -1; }
        .submission-card {
          background: var(--bg-subtle, #F8FAFC); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; position: relative;
        }
        .rank-badge { position: absolute; top: 0.75rem; left: 0.75rem; font-size: 1.3rem; z-index: 1; background: white; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }
        .sub-image { height: 160px; background-size: cover; background-position: center; background-color: var(--bg-subtle, #E2E8F0); }
        .sub-info { padding: 1rem; }
        .sub-author { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem; }
        .sub-author img { width: 24px; height: 24px; border-radius: 50%; object-fit: cover; }
        .sub-author span { font-size: 0.8rem; font-weight: 600; color: var(--text-muted, #64748B); }
        .sub-info h4 { font-size: 0.92rem; font-weight: 700; color: var(--text-main, #0F172A); margin-bottom: 0.35rem; }
        .sub-info p { font-size: 0.8rem; color: var(--text-muted, #64748B); line-height: 1.4; margin-bottom: 0.75rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .vote-btn {
          display: flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.85rem; border-radius: 8px;
          font-size: 0.8rem; font-weight: 600; background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); color: var(--text-muted, #64748B); cursor: pointer;
        }
        .vote-btn:hover { border-color: var(--primary); color: var(--primary); }
        .vote-btn.voted { background: var(--primary-light, #FFF2E8); color: var(--primary); border-color: var(--primary); }
        .sub-actions { display: flex; gap: 0.5rem; }
      `})]})}function fa(){let{currentUser:e}=w(),[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(null),[a,o]=(0,v.useState)([]),[s,c]=(0,v.useState)(1350),[l,u]=(0,v.useState)(!1),[d,f]=(0,v.useState)(``),[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)([]),[_,y]=(0,v.useState)(!1);(0,v.useEffect)(()=>{b()},[e]);let b=async()=>{if(e)try{let t=await fetch(`/api/bom?userId=${e.id}`);if(t.ok){let e=await t.json();n(e),e.length>0&&!r&&(i(e[0]),o(e[0].items||[]),c(e[0].exchangeRate||1350))}}catch(e){console.error(e)}},S=async()=>{if(d.trim()&&e)try{(await fetch(`/api/bom`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({userId:e.id,title:d,items:[],exchangeRate:1350})})).ok&&(u(!1),f(``),b())}catch(e){console.error(e)}},C=async()=>{if(r)try{await fetch(`/api/bom/${r.id}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({items:a,exchangeRate:s})}),b()}catch(e){console.error(e)}},T=async()=>{if(p.trim())try{let e=await fetch(`/api/parts/search?q=${encodeURIComponent(p)}`);e.ok&&g(await e.json())}catch(e){console.error(e)}},E=e=>{let t={partNumber:e.partNumber,name:e.name,quantity:1,unitPrice:e.prices.LCSC||0,currency:`USD`,supplier:`LCSC`,footprint:``};o(e=>[...e,t]),y(!1),m(``),g([])},D=()=>{o(e=>[...e,{partNumber:``,name:``,quantity:1,unitPrice:0,currency:`USD`,supplier:`LCSC`,footprint:``}])},O=(e,t,n)=>{o(r=>r.map((r,i)=>i===e?{...r,[t]:t===`quantity`||t===`unitPrice`?Number(n):n}:r))},k=e=>{o(t=>t.filter((t,n)=>n!==e))},A=a.reduce((e,t)=>e+t.quantity*t.unitPrice,0),j=A*s,ee=e=>{i(e),o(e.items||[]),c(e.exchangeRate||1350)};return(0,x.jsxs)(`div`,{className:`bom-manager fade-in`,children:[(0,x.jsx)(`div`,{className:`bom-header-section`,children:(0,x.jsxs)(`div`,{className:`bom-title-box`,children:[(0,x.jsx)(Ze,{size:28,style:{color:`#10B981`}}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h2`,{children:`📦 BOM 관리기`}),(0,x.jsx)(`p`,{children:`프로젝트별 BOM 작성, 부품 검색 및 원가 계산`})]})]})}),(0,x.jsxs)(`div`,{className:`bom-layout`,children:[(0,x.jsxs)(`div`,{className:`bom-sidebar`,children:[(0,x.jsxs)(`div`,{className:`bom-sidebar-header`,children:[(0,x.jsx)(`h4`,{children:`내 BOM 목록`}),(0,x.jsx)(`button`,{className:`bom-add-btn`,onClick:()=>u(!0),children:(0,x.jsx)(Ut,{size:16})})]}),l&&(0,x.jsxs)(`div`,{className:`bom-new-form`,children:[(0,x.jsx)(`input`,{className:`form-input`,value:d,onChange:e=>f(e.target.value),placeholder:`BOM 이름 (예: LED 매트릭스 BOM)`,onKeyDown:e=>e.key===`Enter`&&S()}),(0,x.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,marginTop:`0.5rem`},children:[(0,x.jsx)(`button`,{className:`btn-primary`,style:{flex:1,padding:`0.4rem`},onClick:S,children:`생성`}),(0,x.jsx)(`button`,{className:`btn-secondary`,style:{flex:1,padding:`0.4rem`},onClick:()=>u(!1),children:`취소`})]})]}),t.map(e=>(0,x.jsxs)(`div`,{className:`bom-list-item ${r?.id===e.id?`active`:``}`,onClick:()=>ee(e),children:[(0,x.jsx)(Ze,{size:16}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`div`,{className:`bom-item-title`,children:e.title}),(0,x.jsxs)(`div`,{className:`bom-item-meta`,children:[(e.items||[]).length,`종 부품`]})]})]},e.id)),t.length===0&&!l&&(0,x.jsx)(`div`,{className:`bom-empty`,children:`BOM이 없습니다. 새로 만들어보세요!`})]}),(0,x.jsx)(`div`,{className:`bom-editor`,children:r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`bom-editor-toolbar`,children:[(0,x.jsx)(`h3`,{children:r.title}),(0,x.jsxs)(`div`,{className:`bom-toolbar-actions`,children:[(0,x.jsxs)(`button`,{className:`bom-tool-btn`,onClick:()=>y(!0),children:[(0,x.jsx)(en,{size:15}),` 부품 검색`]}),(0,x.jsxs)(`button`,{className:`bom-tool-btn`,onClick:D,children:[(0,x.jsx)(Ut,{size:15}),` 행 추가`]}),(0,x.jsxs)(`button`,{className:`bom-save-btn`,onClick:C,children:[(0,x.jsx)(Qt,{size:15}),` 저장`]})]})]}),_&&(0,x.jsxs)(`div`,{className:`parts-search-panel`,children:[(0,x.jsxs)(`div`,{className:`parts-search-bar`,children:[(0,x.jsx)(en,{size:16}),(0,x.jsx)(`input`,{className:`form-input`,value:p,onChange:e=>m(e.target.value),placeholder:`부품번호 또는 이름 검색 (예: RP2040, LDO)`,onKeyDown:e=>e.key===`Enter`&&T()}),(0,x.jsx)(`button`,{className:`btn-primary`,style:{padding:`0.4rem 0.8rem`,fontSize:`0.82rem`},onClick:T,children:`검색`}),(0,x.jsx)(`button`,{onClick:()=>{y(!1),g([])},children:(0,x.jsx)(Gn,{size:18})})]}),h.length>0&&(0,x.jsx)(`div`,{className:`parts-results`,children:h.map(e=>(0,x.jsxs)(`div`,{className:`parts-result-item`,onClick:()=>E(e),children:[(0,x.jsxs)(`div`,{className:`parts-result-name`,children:[(0,x.jsx)(`strong`,{children:e.partNumber}),(0,x.jsx)(`span`,{children:e.name})]}),(0,x.jsx)(`div`,{className:`parts-result-prices`,children:Object.entries(e.prices).map(([e,t])=>(0,x.jsxs)(`span`,{className:`price-tag`,children:[e,`: $`,t.toFixed(3)]},e))}),(0,x.jsxs)(`button`,{className:`parts-add-btn`,children:[(0,x.jsx)(Ut,{size:14}),` 추가`]})]},e.partNumber))})]}),(0,x.jsx)(`div`,{className:`bom-table-wrap`,children:(0,x.jsxs)(`table`,{className:`bom-table`,children:[(0,x.jsx)(`thead`,{children:(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`th`,{children:`#`}),(0,x.jsx)(`th`,{children:`부품번호`}),(0,x.jsx)(`th`,{children:`부품명`}),(0,x.jsx)(`th`,{children:`수량`}),(0,x.jsx)(`th`,{children:`단가(USD)`}),(0,x.jsx)(`th`,{children:`소계(USD)`}),(0,x.jsx)(`th`,{children:`유통사`}),(0,x.jsx)(`th`,{children:`풋프린트`}),(0,x.jsx)(`th`,{})]})}),(0,x.jsx)(`tbody`,{children:a.map((e,t)=>(0,x.jsxs)(`tr`,{children:[(0,x.jsx)(`td`,{className:`row-num`,children:t+1}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`input`,{value:e.partNumber,onChange:e=>O(t,`partNumber`,e.target.value)})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`input`,{value:e.name,onChange:e=>O(t,`name`,e.target.value)})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`input`,{type:`number`,value:e.quantity,onChange:e=>O(t,`quantity`,e.target.value),min:1})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`input`,{type:`number`,value:e.unitPrice,onChange:e=>O(t,`unitPrice`,e.target.value),step:.001,min:0})}),(0,x.jsxs)(`td`,{className:`subtotal`,children:[`$`,(e.quantity*e.unitPrice).toFixed(3)]}),(0,x.jsx)(`td`,{children:(0,x.jsxs)(`select`,{value:e.supplier,onChange:e=>O(t,`supplier`,e.target.value),children:[(0,x.jsx)(`option`,{value:`LCSC`,children:`LCSC`}),(0,x.jsx)(`option`,{value:`DigiKey`,children:`DigiKey`}),(0,x.jsx)(`option`,{value:`Mouser`,children:`Mouser`}),(0,x.jsx)(`option`,{value:`기타`,children:`기타`})]})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`input`,{value:e.footprint,onChange:e=>O(t,`footprint`,e.target.value),placeholder:`0603`})}),(0,x.jsx)(`td`,{children:(0,x.jsx)(`button`,{className:`row-delete-btn`,onClick:()=>k(t),children:(0,x.jsx)(Cn,{size:14})})})]},t))})]})}),(0,x.jsxs)(`div`,{className:`bom-summary`,children:[(0,x.jsxs)(`div`,{className:`bom-summary-item`,children:[(0,x.jsx)(`span`,{children:`총 부품 종수`}),(0,x.jsxs)(`strong`,{children:[a.length,`종`]})]}),(0,x.jsxs)(`div`,{className:`bom-summary-item`,children:[(0,x.jsx)(`span`,{children:`총 부품 수`}),(0,x.jsxs)(`strong`,{children:[a.reduce((e,t)=>e+t.quantity,0),`개`]})]}),(0,x.jsxs)(`div`,{className:`bom-exchange`,children:[(0,x.jsx)(`span`,{children:`환율 (USD→KRW)`}),(0,x.jsx)(`input`,{type:`number`,value:s,onChange:e=>c(Number(e.target.value))})]}),(0,x.jsxs)(`div`,{className:`bom-summary-total`,children:[(0,x.jsxs)(`div`,{className:`total-usd`,children:[(0,x.jsx)(Ve,{size:16}),` $`,A.toFixed(2),` USD`]}),(0,x.jsxs)(`div`,{className:`total-krw`,children:[`≈ ₩`,Math.round(j).toLocaleString(),` KRW`]})]})]})]}):(0,x.jsxs)(`div`,{className:`bom-empty-editor`,children:[(0,x.jsx)(Ze,{size:48,strokeWidth:1.2}),(0,x.jsx)(`h3`,{children:`BOM을 선택하거나 새로 만들어주세요`}),(0,x.jsx)(`p`,{children:`부품 관리, 가격 비교, 원가 계산이 가능합니다.`})]})})]}),(0,x.jsx)(`style`,{children:`
        .bom-manager { max-width: 1200px; margin: 0 auto; }
        .bom-header-section { margin-bottom: 1.5rem; }
        .bom-title-box { display: flex; align-items: flex-start; gap: 1rem; }
        .bom-title-box h2 { font-size: 1.5rem; font-weight: 800; color: var(--text-main, #0F172A); margin: 0; }
        .bom-title-box p { font-size: 0.9rem; color: var(--text-muted, #64748B); margin-top: 0.25rem; }
        .bom-layout { display: grid; grid-template-columns: 260px 1fr; gap: 1.25rem; min-height: 600px; }
        .bom-sidebar { background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 14px; padding: 1rem; }
        .bom-sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
        .bom-sidebar-header h4 { font-size: 0.92rem; font-weight: 700; }
        .bom-add-btn { width: 30px; height: 30px; border-radius: 8px; background: var(--primary-light, #FFF2E8); color: var(--primary); display: flex; align-items: center; justify-content: center; border: 1px solid rgba(255,111,15,0.2); }
        .bom-add-btn:hover { background: var(--primary); color: white; }
        .bom-new-form { padding: 0.75rem; background: var(--bg-subtle, #F8FAFC); border-radius: 10px; margin-bottom: 0.75rem; }
        .bom-list-item { display: flex; align-items: center; gap: 0.65rem; padding: 0.65rem 0.75rem; border-radius: 10px; cursor: pointer; color: var(--text-muted, #64748B); transition: all 0.15s; margin-bottom: 0.25rem; }
        .bom-list-item:hover { background: var(--bg-subtle, #F1F5F9); }
        .bom-list-item.active { background: var(--primary-light, #FFF2E8); color: var(--primary); }
        .bom-item-title { font-size: 0.85rem; font-weight: 600; color: var(--text-main, #0F172A); }
        .bom-list-item.active .bom-item-title { color: var(--primary); }
        .bom-item-meta { font-size: 0.75rem; color: var(--text-sub, #94A3B8); }
        .bom-empty { text-align: center; padding: 2rem 1rem; font-size: 0.85rem; color: var(--text-sub, #94A3B8); }
        .bom-editor { background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 14px; padding: 1.25rem; overflow: hidden; }
        .bom-editor-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem; }
        .bom-editor-toolbar h3 { font-size: 1.1rem; font-weight: 700; }
        .bom-toolbar-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .bom-tool-btn { display: flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.75rem; border-radius: 8px; font-size: 0.8rem; font-weight: 600; background: var(--bg-subtle, #F1F5F9); color: var(--text-muted, #64748B); border: 1px solid var(--border); }
        .bom-tool-btn:hover { border-color: var(--primary); color: var(--primary); }
        .bom-save-btn { display: flex; align-items: center; gap: 0.35rem; padding: 0.4rem 0.85rem; border-radius: 8px; font-size: 0.8rem; font-weight: 700; background: #10B981; color: white; border: none; }
        .bom-save-btn:hover { background: #059669; }
        .parts-search-panel { background: var(--bg-subtle, #F8FAFC); border: 1px solid var(--border); border-radius: 12px; padding: 1rem; margin-bottom: 1rem; }
        .parts-search-bar { display: flex; align-items: center; gap: 0.5rem; }
        .parts-search-bar .form-input { flex: 1; }
        .parts-results { margin-top: 0.75rem; max-height: 200px; overflow-y: auto; }
        .parts-result-item { display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 0.75rem; border-radius: 8px; cursor: pointer; gap: 0.75rem; }
        .parts-result-item:hover { background: var(--bg-card, #FFFFFF); }
        .parts-result-name { display: flex; flex-direction: column; }
        .parts-result-name strong { font-size: 0.85rem; color: var(--text-main, #0F172A); }
        .parts-result-name span { font-size: 0.78rem; color: var(--text-muted, #64748B); }
        .parts-result-prices { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .price-tag { font-size: 0.72rem; padding: 0.15rem 0.45rem; background: var(--bg-card, #FFFFFF); border: 1px solid var(--border); border-radius: 4px; font-weight: 600; color: var(--text-muted, #64748B); }
        .parts-add-btn { display: flex; align-items: center; gap: 0.25rem; font-size: 0.78rem; font-weight: 600; color: var(--primary); flex-shrink: 0; }
        .bom-table-wrap { overflow-x: auto; margin-bottom: 1rem; }
        .bom-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
        .bom-table th { background: var(--bg-subtle, #F1F5F9); padding: 0.6rem 0.5rem; text-align: left; font-weight: 700; color: var(--text-muted, #64748B); font-size: 0.78rem; border-bottom: 2px solid var(--border); white-space: nowrap; }
        .bom-table td { padding: 0.4rem 0.3rem; border-bottom: 1px solid var(--border); }
        .bom-table input, .bom-table select { width: 100%; border: 1px solid transparent; padding: 0.35rem 0.4rem; border-radius: 6px; font-size: 0.82rem; background: transparent; color: var(--text-main, #0F172A); }
        .bom-table input:focus, .bom-table select:focus { border-color: var(--primary); outline: none; background: var(--bg-card, #FFFFFF); }
        .bom-table input[type="number"] { width: 70px; }
        .row-num { font-size: 0.75rem; color: var(--text-sub, #94A3B8); font-weight: 600; text-align: center; width: 30px; }
        .subtotal { font-weight: 700; color: var(--text-main, #0F172A); white-space: nowrap; padding-left: 0.5rem !important; }
        .row-delete-btn { color: #EF4444; padding: 0.25rem; border-radius: 6px; }
        .row-delete-btn:hover { background: #FEF2F2; }
        .bom-summary { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; padding: 1rem; background: var(--bg-subtle, #F8FAFC); border-radius: 12px; border: 1px solid var(--border); }
        .bom-summary-item { display: flex; flex-direction: column; }
        .bom-summary-item span { font-size: 0.75rem; color: var(--text-sub, #94A3B8); }
        .bom-summary-item strong { font-size: 1rem; font-weight: 800; color: var(--text-main, #0F172A); }
        .bom-exchange { display: flex; flex-direction: column; }
        .bom-exchange span { font-size: 0.75rem; color: var(--text-sub, #94A3B8); }
        .bom-exchange input { width: 90px; padding: 0.3rem 0.5rem; border: 1px solid var(--border); border-radius: 6px; font-size: 0.85rem; font-weight: 600; }
        .bom-summary-total { margin-left: auto; text-align: right; }
        .total-usd { font-size: 1.15rem; font-weight: 800; color: #10B981; display: flex; align-items: center; gap: 0.3rem; }
        .total-krw { font-size: 0.9rem; font-weight: 600; color: var(--text-muted, #64748B); }
        .bom-empty-editor { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 4rem; color: var(--text-sub, #94A3B8); text-align: center; gap: 0.75rem; }
        .bom-empty-editor h3 { color: var(--text-muted, #64748B); font-size: 1.1rem; }
        .bom-empty-editor p { font-size: 0.9rem; }
        @media (max-width: 768px) {
          .bom-layout { grid-template-columns: 1fr; }
        }
      `})]})}var pa=[{id:`resistor`,label:`저항 (R)`,symbol:`─/\\/\\/\\─`},{id:`capacitor`,label:`커패시터 (C)`,symbol:`─┤├─`},{id:`inductor`,label:`인덕터 (L)`,symbol:`─ᴖᴖᴖ─`},{id:`diode`,label:`다이오드 (D)`,symbol:`─▷|─`},{id:`led`,label:`LED 💡`,symbol:`─▷|─↝`},{id:`gnd`,label:`GND ⏚`,symbol:`⏚ GND`},{id:`vcc`,label:`VCC ⚡`,symbol:`▲ VCC`},{id:`transistor`,label:`NPN 트랜지스터`,symbol:`─|◀─`},{id:`ic_chip`,label:`IC 8-Pin`,symbol:`[ IC ]`},{id:`switch`,label:`스위치 (SW)`,symbol:`─/ ─`},{id:`battery`,label:`배터리 (+/-)`,symbol:`─┤ ├──`},{id:`crystal`,label:`크리스탈 (XTAL)`,symbol:`─[■]─`}],ma=[{name:`기판 블랙`,value:`#1E293B`},{name:`당근 오렌지`,value:`#FF6F0F`},{name:`PCB 에메랄드`,value:`#10B981`},{name:`신호 블루`,value:`#2563EB`},{name:`전원 레드`,value:`#DC2626`},{name:`주의 옐로우`,value:`#D97706`},{name:`퍼플`,value:`#7C3AED`},{name:`화이트`,value:`#FFFFFF`}];function ha(){let e=(0,v.useRef)(null),[t,n]=(0,v.useState)(`pen`),[r,i]=(0,v.useState)(pa[0]),[a,o]=(0,v.useState)(`#1E293B`),[s,c]=(0,v.useState)(3),[l,u]=(0,v.useState)(!0),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)({x:0,y:0}),[h,g]=(0,v.useState)([]),[_,y]=(0,v.useState)(-1),[b,S]=(0,v.useState)(``);(0,v.useEffect)(()=>{let t=e.current;if(!t)return;let n=t.getContext(`2d`);t.width=960,t.height=600,n.fillStyle=`#FFFFFF`,n.fillRect(0,0,t.width,t.height),C()},[]);let C=()=>{let t=e.current;if(!t)return;let n=t.toDataURL();g(e=>[...e.slice(0,_+1),n]),y(e=>e+1)},w=t=>{let n=e.current;if(!n||t<0||t>=h.length)return;let r=n.getContext(`2d`),i=new Image;i.src=h[t],i.onload=()=>{r.clearRect(0,0,n.width,n.height),r.drawImage(i,0,0),y(t)}},T=()=>{_>0&&w(_-1)},E=()=>{_<h.length-1&&w(_+1)},D=()=>{if(!window.confirm(`스케치를 모두 지우시겠습니까?`))return;let t=e.current;if(!t)return;let n=t.getContext(`2d`);n.fillStyle=`#FFFFFF`,n.fillRect(0,0,t.width,t.height),C(),k(`캔버스가 초기화되었습니다.`)},O=()=>{let t=e.current;if(!t)return;let n=document.createElement(`a`);n.download=`carrot_schematic_${Date.now()}.png`,n.href=t.toDataURL(`image/png`),n.click(),k(`회로 스케치가 PNG 파일로 저장되었습니다!`)},k=e=>{S(e),setTimeout(()=>S(``),3e3)},A=t=>{let n=e.current,r=n.getBoundingClientRect(),i=n.width/r.width,a=n.height/r.height;return{x:(t.clientX-r.left)*i,y:(t.clientY-r.top)*a}},j=n=>{let i=A(n),o=e.current.getContext(`2d`);if(t===`stamp`){ne(i.x,i.y,r),C();return}f(!0),m(i),o.beginPath(),o.moveTo(i.x,i.y),o.strokeStyle=t===`eraser`?`#FFFFFF`:a,o.lineWidth=t===`eraser`?s*4:s,o.lineCap=`round`,o.lineJoin=`round`},ee=n=>{if(!d)return;let r=A(n),i=e.current,o=i.getContext(`2d`);if(t===`pen`||t===`eraser`)o.lineTo(r.x,r.y),o.stroke();else if((t===`line`||t===`rect`||t===`circle`)&&_>=0&&h[_]){let e=new Image;if(e.src=h[_],o.clearRect(0,0,i.width,i.height),o.drawImage(e,0,0),o.beginPath(),o.strokeStyle=a,o.lineWidth=s,o.lineCap=`round`,t===`line`)o.moveTo(p.x,p.y),o.lineTo(r.x,r.y),o.stroke();else if(t===`rect`){let e=r.x-p.x,t=r.y-p.y;o.strokeRect(p.x,p.y,e,t)}else if(t===`circle`){let e=Math.sqrt((r.x-p.x)**2+(r.y-p.y)**2);o.arc(p.x,p.y,e,0,Math.PI*2),o.stroke()}}},te=()=>{d&&(f(!1),C())},ne=(t,n,r)=>{let i=e.current.getContext(`2d`);switch(i.save(),i.strokeStyle=a,i.fillStyle=a,i.lineWidth=2,i.font=`bold 15px monospace`,i.textAlign=`center`,i.textBaseline=`middle`,r.id){case`resistor`:i.beginPath(),i.moveTo(t-40,n),i.lineTo(t-25,n),i.lineTo(t-20,n-10),i.lineTo(t-10,n+10),i.lineTo(t,n-10),i.lineTo(t+10,n+10),i.lineTo(t+20,n-10),i.lineTo(t+25,n),i.lineTo(t+40,n),i.stroke(),i.fillText(`R`,t,n-18);break;case`capacitor`:i.beginPath(),i.moveTo(t-30,n),i.lineTo(t-8,n),i.moveTo(t-8,n-16),i.lineTo(t-8,n+16),i.moveTo(t+8,n-16),i.lineTo(t+8,n+16),i.moveTo(t+8,n),i.lineTo(t+30,n),i.stroke(),i.fillText(`C`,t,n-22);break;case`inductor`:i.beginPath(),i.moveTo(t-35,n),i.lineTo(t-24,n),i.arc(t-16,n,8,Math.PI,0,!1),i.arc(t,n,8,Math.PI,0,!1),i.arc(t+16,n,8,Math.PI,0,!1),i.lineTo(t+35,n),i.stroke(),i.fillText(`L`,t,n-18);break;case`diode`:i.beginPath(),i.moveTo(t-30,n),i.lineTo(t-10,n),i.moveTo(t-10,n-12),i.lineTo(t-10,n+12),i.lineTo(t+10,n),i.closePath(),i.stroke(),i.beginPath(),i.moveTo(t+10,n-12),i.lineTo(t+10,n+12),i.moveTo(t+10,n),i.lineTo(t+30,n),i.stroke(),i.fillText(`D`,t,n-20);break;case`gnd`:i.beginPath(),i.moveTo(t,n-25),i.lineTo(t,n),i.moveTo(t-20,n),i.lineTo(t+20,n),i.moveTo(t-12,n+6),i.lineTo(t+12,n+6),i.moveTo(t-5,n+12),i.lineTo(t+5,n+12),i.stroke(),i.fillText(`GND`,t,n+25);break;case`vcc`:i.beginPath(),i.moveTo(t,n+20),i.lineTo(t,n-5),i.lineTo(t-10,n+5),i.moveTo(t,n-5),i.lineTo(t+10,n+5),i.stroke(),i.fillText(`VCC (3.3V)`,t,n-18);break;case`ic_chip`:i.strokeRect(t-35,n-25,70,50),i.beginPath(),i.arc(t-35,n,6,-Math.PI/2,Math.PI/2),i.stroke();for(let e=-18;e<=18;e+=12)i.beginPath(),i.moveTo(t-45,n+e),i.lineTo(t-35,n+e),i.moveTo(t+35,n+e),i.lineTo(t+45,n+e),i.stroke();i.font=`bold 12px sans-serif`,i.fillText(`MCU/IC`,t,n);break;default:i.font=`bold 16px sans-serif`,i.fillText(r.symbol,t,n)}i.restore()};return(0,x.jsxs)(`div`,{className:`schematic-notepad-view`,children:[(0,x.jsxs)(`div`,{className:`notepad-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`page-title`,children:[(0,x.jsx)(`span`,{className:`title-emoji`,children:`📐`}),` 회로 스케치 메모장`]}),(0,x.jsx)(`p`,{className:`page-desc`,children:`복잡한 EDA 툴 없이도 브라우저에서 회로 아이디어나 핀맵을 손쉽게 스케치하고 이미지로 저장하세요.`})]}),(0,x.jsxs)(`div`,{className:`header-actions-group`,children:[b&&(0,x.jsx)(`span`,{className:`status-toast`,children:b}),(0,x.jsxs)(`button`,{className:`btn-secondary`,onClick:T,disabled:_<=0,title:`되돌리기 (Ctrl+Z)`,children:[(0,x.jsx)(Jt,{size:16}),` 되돌리기`]}),(0,x.jsxs)(`button`,{className:`btn-secondary`,onClick:E,disabled:_>=h.length-1,title:`다시하기`,children:[(0,x.jsx)(Xt,{size:16}),` 다시실행`]}),(0,x.jsxs)(`button`,{className:`btn-secondary danger`,onClick:D,title:`캔버스 전체 지우기`,children:[(0,x.jsx)(Cn,{size:16}),` 전체 지우기`]}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:O,title:`PNG 이미지로 다운로드`,children:[(0,x.jsx)(Ue,{size:16}),` PNG 저장`]})]})]}),(0,x.jsxs)(`div`,{className:`notepad-layout`,children:[(0,x.jsxs)(`aside`,{className:`toolbar-panel`,children:[(0,x.jsxs)(`div`,{className:`tool-section`,children:[(0,x.jsx)(`span`,{className:`section-label`,children:`도구`}),(0,x.jsxs)(`div`,{className:`tools-grid`,children:[(0,x.jsxs)(`button`,{className:`tool-btn ${t===`pen`?`active`:``}`,onClick:()=>n(`pen`),title:`펜`,children:[(0,x.jsx)(zt,{size:18}),(0,x.jsx)(`span`,{children:`펜`})]}),(0,x.jsxs)(`button`,{className:`tool-btn ${t===`eraser`?`active`:``}`,onClick:()=>n(`eraser`),title:`지우개`,children:[(0,x.jsx)(Ge,{size:18}),(0,x.jsx)(`span`,{children:`지우개`})]}),(0,x.jsxs)(`button`,{className:`tool-btn ${t===`line`?`active`:``}`,onClick:()=>n(`line`),title:`직선/와이어`,children:[(0,x.jsx)(kt,{size:18}),(0,x.jsx)(`span`,{children:`직선`})]}),(0,x.jsxs)(`button`,{className:`tool-btn ${t===`rect`?`active`:``}`,onClick:()=>n(`rect`),title:`직사각형/IC`,children:[(0,x.jsx)(hn,{size:18}),(0,x.jsx)(`span`,{children:`사각형`})]}),(0,x.jsxs)(`button`,{className:`tool-btn ${t===`circle`?`active`:``}`,onClick:()=>n(`circle`),title:`원/패드`,children:[(0,x.jsx)(Fe,{size:18}),(0,x.jsx)(`span`,{children:`원형`})]}),(0,x.jsxs)(`button`,{className:`tool-btn ${t===`stamp`?`active`:``}`,onClick:()=>n(`stamp`),title:`회로 기호 스탬프`,children:[(0,x.jsx)(pn,{size:18}),(0,x.jsx)(`span`,{children:`스탬프`})]})]})]}),(0,x.jsxs)(`div`,{className:`tool-section`,children:[(0,x.jsxs)(`span`,{className:`section-label`,children:[`선 굵기: `,s,`px`]}),(0,x.jsx)(`div`,{className:`width-selectors`,children:[1,2,4,8].map(e=>(0,x.jsx)(`button`,{className:`width-btn ${s===e?`active`:``}`,onClick:()=>c(e),children:(0,x.jsx)(`span`,{className:`line-preview`,style:{height:`${e}px`}})},e))})]}),(0,x.jsxs)(`div`,{className:`tool-section`,children:[(0,x.jsx)(`span`,{className:`section-label`,children:`선 색상`}),(0,x.jsx)(`div`,{className:`color-palette`,children:ma.map(e=>(0,x.jsx)(`button`,{className:`color-dot ${a===e.value?`selected`:``}`,style:{backgroundColor:e.value,border:e.value===`#FFFFFF`?`1px solid #CBD5E1`:`none`},onClick:()=>o(e.value),title:e.name},e.value))})]}),(0,x.jsx)(`div`,{className:`tool-section`,children:(0,x.jsxs)(`button`,{className:`grid-toggle-btn ${l?`active`:``}`,onClick:()=>u(!l),children:[(0,x.jsx)(at,{size:16}),(0,x.jsxs)(`span`,{children:[`모눈 그리드 `,l?`ON`:`OFF`]})]})}),(0,x.jsxs)(`div`,{className:`tool-section stamps-section`,children:[(0,x.jsx)(`span`,{className:`section-label`,children:`회로 기호 스탬프 선택`}),(0,x.jsx)(`div`,{className:`stamps-list`,children:pa.map(e=>(0,x.jsxs)(`button`,{className:`stamp-item ${t===`stamp`&&r.id===e.id?`active`:``}`,onClick:()=>{n(`stamp`),i(e)},children:[(0,x.jsx)(`span`,{className:`stamp-icon`,children:e.symbol}),(0,x.jsx)(`span`,{className:`stamp-name`,children:e.label})]},e.id))})]})]}),(0,x.jsxs)(`div`,{className:`canvas-wrapper`,children:[(0,x.jsx)(`div`,{className:`canvas-container ${l?`with-grid`:``}`,children:(0,x.jsx)(`canvas`,{ref:e,onMouseDown:j,onMouseMove:ee,onMouseUp:te,onMouseLeave:te,className:`drawing-canvas`})}),(0,x.jsxs)(`div`,{className:`canvas-footer-hint`,children:[(0,x.jsx)(pt,{size:14}),(0,x.jsx)(`span`,{children:t===`stamp`?`스탬프 모드: 캔버스 원하는 위치를 클릭하면 [${r.label}] 기호가 배치됩니다.`:`마우스 드래그로 선이나 기호를 스케치하세요. 완성을 마친 후 [PNG 저장]을 눌러 다운로드할 수 있습니다.`})]})]})]}),(0,x.jsx)(`style`,{children:`
        .schematic-notepad-view {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .notepad-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .header-actions-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-toast {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid #A7F3D0;
          animation: fadeIn 0.3s ease;
        }

        .notepad-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        .toolbar-panel {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .section-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted, #64748B);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.4rem;
        }

        .tool-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          padding: 0.6rem 0.4rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 8px;
          color: var(--text-main, #334155);
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .tool-btn:hover {
          background: var(--primary-light, #FFF2E8);
          color: var(--primary, #FF6F0F);
          border-color: var(--primary, #FF6F0F);
        }

        .tool-btn.active {
          background: var(--primary, #FF6F0F);
          color: #FFFFFF;
          border-color: var(--primary, #FF6F0F);
        }

        .width-selectors {
          display: flex;
          gap: 0.5rem;
        }

        .width-btn {
          flex: 1;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 6px;
          cursor: pointer;
        }

        .width-btn.active {
          border-color: var(--primary, #FF6F0F);
          background: var(--primary-light, #FFF2E8);
        }

        .line-preview {
          width: 80%;
          background: var(--text-main, #334155);
          border-radius: 2px;
        }

        .color-palette {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }

        .color-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.15s ease;
          position: relative;
        }

        .color-dot:hover {
          transform: scale(1.15);
        }

        .color-dot.selected::after {
          content: '✓';
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          font-size: 14px;
          font-weight: bold;
          text-shadow: 0 0 2px rgba(0,0,0,0.8);
        }

        .grid-toggle-btn {
          width: 100%;
          padding: 0.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
        }

        .grid-toggle-btn.active {
          background: #ECFDF5;
          color: #059669;
          border-color: #10B981;
        }

        .stamps-list {
          max-height: 240px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .stamp-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.75rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.8rem;
          color: var(--text-main, #334155);
          transition: all 0.15s ease;
          text-align: left;
        }

        .stamp-item:hover {
          background: var(--primary-light, #FFF2E8);
          border-color: var(--primary, #FF6F0F);
        }

        .stamp-item.active {
          background: #EFF6FF;
          border-color: #3B82F6;
          color: #1D4ED8;
          font-weight: 700;
        }

        .stamp-icon {
          font-family: monospace;
          background: #FFFFFF;
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border, #CBD5E1);
          font-size: 0.75rem;
          min-width: 60px;
          text-align: center;
        }

        .canvas-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .canvas-container {
          background: #FFFFFF;
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .canvas-container.with-grid {
          background-image: 
            linear-gradient(to right, #F1F5F9 1px, transparent 1px),
            linear-gradient(to bottom, #F1F5F9 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .drawing-canvas {
          cursor: crosshair;
          display: block;
          max-width: 100%;
          height: auto;
        }

        .canvas-footer-hint {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted, #64748B);
          font-size: 0.85rem;
          padding: 0 0.5rem;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #334155);
          border: 1px solid var(--border, #E2E8F0);
          padding: 0.55rem 0.9rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary:hover:not(:disabled) {
          background: var(--bg-sub, #F8FAFC);
        }

        .btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-secondary.danger:hover {
          background: #FEF2F2;
          color: #DC2626;
          border-color: #F87171;
        }

        @media (max-width: 1024px) {
          .notepad-layout {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var ga=[{id:`placed`,title:`주문 접수`,icon:Le,color:`#64748B`,bg:`#F1F5F9`},{id:`production`,title:`기판 제작중`,icon:ze,color:`#3B82F6`,bg:`#EFF6FF`},{id:`smt`,title:`SMT 부품실장`,icon:ht,color:`#8B5CF6`,bg:`#F5F3FF`},{id:`shipping`,title:`국제 배송중`,icon:jn,color:`#F59E0B`,bg:`#FFFBEB`},{id:`delivered`,title:`수령 완료`,icon:je,color:`#10B981`,bg:`#ECFDF5`}],_a=[`JLCPCB`,`PCBWay`,`Aisler`,`한샘디지텍`,`샘플PCB`,`기타`];function va(){let{currentUser:e}=w(),[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)(`all`),[s,c]=(0,v.useState)(!1),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)({title:``,manufacturer:`JLCPCB`,orderNumber:``,layers:2,quantity:5,hasSmt:!1,cost:``,currency:`USD`,estimatedDelivery:``,trackingNumber:``,notes:``}),p=async()=>{try{i(!0);let e=await(await fetch(`/api/orders`)).json();n(e)}catch(e){console.error(`Failed to fetch orders:`,e)}finally{i(!1)}};(0,v.useEffect)(()=>{p()},[]);let m=e=>{u(e),setTimeout(()=>u(``),3e3)},h=async(e,t)=>{try{(await fetch(`/api/orders/${e}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:t})})).ok&&(n(n=>n.map(n=>n.id===e?{...n,status:t}:n)),m(`발주 상태가 업데이트되었습니다.`))}catch(e){console.error(e)}},g=async e=>{if(window.confirm(`이 발주 내역을 삭제하시겠습니까?`))try{(await fetch(`/api/orders/${e}`,{method:`DELETE`})).ok&&(n(t=>t.filter(t=>t.id!==e)),m(`발주 항목이 삭제되었습니다.`))}catch(e){console.error(e)}},_=async t=>{if(t.preventDefault(),!d.title.trim()){alert(`기판 프로젝트명을 입력해주세요.`);return}try{let t={...d,cost:Number(d.cost)||0,layers:Number(d.layers)||2,quantity:Number(d.quantity)||5,userId:e?.id||`usr_admin`,status:`placed`};(await fetch(`/api/orders`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})).ok&&(c(!1),f({title:``,manufacturer:`JLCPCB`,orderNumber:``,layers:2,quantity:5,hasSmt:!1,cost:``,currency:`USD`,estimatedDelivery:``,trackingNumber:``,notes:``}),p(),m(`새 발주 건이 성공적으로 등록되었습니다!`))}catch(e){console.error(e)}},y=t.filter(e=>e.status!==`delivered`).length,b=t.filter(e=>e.status===`delivered`).length,S=t.reduce((e,t)=>e+(Number(t.cost)||0),0),C=Math.round(S*1350),T=e=>{if(!e)return null;let t=Math.ceil((new Date(e)-new Date)/864e5);return t>0?`D-${t}`:t===0?`D-Day`:`D+${Math.abs(t)}`},E=t.filter(e=>a===`all`||e.manufacturer===a);return(0,x.jsxs)(`div`,{className:`order-tracker-view`,children:[(0,x.jsxs)(`div`,{className:`tracker-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`page-title`,children:[(0,x.jsx)(`span`,{className:`title-emoji`,children:`📦`}),` 기판 발주 트래커`]}),(0,x.jsx)(`p`,{className:`page-desc`,children:`JLCPCB, PCBWay 등 해외 기판 발주 제작 현황과 배송 일정을 한눈에 관리하세요.`})]}),(0,x.jsxs)(`div`,{className:`header-actions`,children:[l&&(0,x.jsx)(`span`,{className:`toast-badge`,children:l}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>c(!0),children:[(0,x.jsx)(Ut,{size:16}),` 새 발주 등록`]})]})]}),(0,x.jsxs)(`div`,{className:`stats-row`,children:[(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`div`,{className:`stat-icon`,style:{background:`#EFF6FF`,color:`#3B82F6`},children:(0,x.jsx)(ze,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-info`,children:[(0,x.jsxs)(`span`,{className:`stat-val`,children:[y,`건`]}),(0,x.jsx)(`span`,{className:`stat-lbl`,children:`진행 중인 발주`})]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`div`,{className:`stat-icon`,style:{background:`#ECFDF5`,color:`#10B981`},children:(0,x.jsx)(je,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-info`,children:[(0,x.jsxs)(`span`,{className:`stat-val`,children:[b,`건`]}),(0,x.jsx)(`span`,{className:`stat-lbl`,children:`수령 완료 기판`})]})]}),(0,x.jsxs)(`div`,{className:`stat-card`,children:[(0,x.jsx)(`div`,{className:`stat-icon`,style:{background:`#FFF2E8`,color:`#FF6F0F`},children:(0,x.jsx)(Ve,{size:22})}),(0,x.jsxs)(`div`,{className:`stat-info`,children:[(0,x.jsxs)(`span`,{className:`stat-val`,children:[`$`,S.toFixed(1)]}),(0,x.jsxs)(`span`,{className:`stat-lbl`,children:[`총 발주 비용 (~약 `,C.toLocaleString(),`원)`]})]})]})]}),(0,x.jsxs)(`div`,{className:`filter-bar`,children:[(0,x.jsx)(`span`,{className:`filter-label`,children:`제조사:`}),(0,x.jsxs)(`button`,{className:`filter-chip ${a===`all`?`active`:``}`,onClick:()=>o(`all`),children:[`전체 보기 (`,t.length,`)`]}),_a.map(e=>{let n=t.filter(t=>t.manufacturer===e).length;return(0,x.jsxs)(`button`,{className:`filter-chip ${a===e?`active`:``}`,onClick:()=>o(e),children:[e,` `,n>0&&`(${n})`]},e)})]}),(0,x.jsx)(`div`,{className:`kanban-board`,children:ga.map((e,t)=>{let n=e.icon,r=E.filter(t=>t.status===e.id);return(0,x.jsxs)(`div`,{className:`kanban-column`,children:[(0,x.jsx)(`div`,{className:`column-header`,style:{borderTopColor:e.color},children:(0,x.jsxs)(`div`,{className:`col-title-group`,children:[(0,x.jsx)(n,{size:18,style:{color:e.color}}),(0,x.jsx)(`span`,{className:`col-title`,children:e.title}),(0,x.jsx)(`span`,{className:`col-badge`,style:{background:e.bg,color:e.color},children:r.length})]})}),(0,x.jsx)(`div`,{className:`column-cards-list`,children:r.length===0?(0,x.jsx)(`div`,{className:`column-empty`,children:`항목 없음`}):r.map(e=>{let n=T(e.estimatedDelivery);return(0,x.jsxs)(`div`,{className:`order-card`,children:[(0,x.jsxs)(`div`,{className:`card-top`,children:[(0,x.jsx)(`span`,{className:`mfr-tag`,children:e.manufacturer}),n&&(0,x.jsx)(`span`,{className:`dday-tag ${n.includes(`-`)?`urgent`:`normal`}`,children:n})]}),(0,x.jsx)(`h4`,{className:`order-title`,children:e.title}),e.orderNumber&&(0,x.jsx)(`div`,{className:`order-num-row`,children:(0,x.jsxs)(`span`,{className:`order-num`,children:[`#`,e.orderNumber]})}),(0,x.jsxs)(`div`,{className:`specs-grid`,children:[(0,x.jsxs)(`span`,{className:`spec-item`,children:[e.layers,`층 PCB`]}),(0,x.jsxs)(`span`,{className:`spec-item`,children:[e.quantity,`장`]}),e.hasSmt&&(0,x.jsx)(`span`,{className:`spec-item smt`,children:`SMT 포함`}),e.cost>0&&(0,x.jsxs)(`span`,{className:`spec-item cost`,children:[`$`,e.cost]})]}),e.notes&&(0,x.jsx)(`p`,{className:`order-notes`,children:e.notes}),e.estimatedDelivery&&(0,x.jsxs)(`div`,{className:`date-row`,children:[(0,x.jsx)(be,{size:13}),(0,x.jsxs)(`span`,{children:[`예상수령: `,e.estimatedDelivery]})]}),e.trackingNumber&&(0,x.jsxs)(`div`,{className:`tracking-row`,children:[(0,x.jsx)(jn,{size:13}),(0,x.jsx)(`span`,{className:`tracking-code`,children:e.trackingNumber})]}),(0,x.jsxs)(`div`,{className:`card-actions`,children:[t>0&&(0,x.jsx)(`button`,{className:`step-btn prev`,onClick:()=>h(e.id,ga[t-1].id),title:`이전 단계로`,children:(0,x.jsx)(ce,{size:13})}),(0,x.jsx)(`button`,{className:`delete-card-btn`,onClick:()=>g(e.id),title:`삭제`,children:(0,x.jsx)(Cn,{size:13})}),t<ga.length-1&&(0,x.jsxs)(`button`,{className:`step-btn next`,onClick:()=>h(e.id,ga[t+1].id),title:`다음 단계로 이동`,children:[(0,x.jsx)(`span`,{children:`다음 단계`}),(0,x.jsx)(ue,{size:13})]})]})]},e.id)})})]},e.id)})}),s&&(0,x.jsx)(`div`,{className:`modal-backdrop`,onClick:()=>c(!1),children:(0,x.jsxs)(`div`,{className:`modal-container`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`modal-title-wrap`,children:[(0,x.jsx)(Nt,{size:20,color:`#FF6F0F`}),(0,x.jsx)(`h3`,{children:`새 기판 발주 등록`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>c(!1),children:(0,x.jsx)(Gn,{size:18})})]}),(0,x.jsxs)(`form`,{onSubmit:_,className:`modal-form`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`기판 프로젝트명 *`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: 당근 키패드 메인보드 v1.2`,value:d.title,onChange:e=>f({...d,title:e.target.value}),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-row`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`제조사`}),(0,x.jsx)(`select`,{value:d.manufacturer,onChange:e=>f({...d,manufacturer:e.target.value}),children:_a.map(e=>(0,x.jsx)(`option`,{value:e,children:e},e))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`주문 번호`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: JLC-20260923-01`,value:d.orderNumber,onChange:e=>f({...d,orderNumber:e.target.value})})]})]}),(0,x.jsxs)(`div`,{className:`form-row three-col`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`층수 (Layer)`}),(0,x.jsxs)(`select`,{value:d.layers,onChange:e=>f({...d,layers:e.target.value}),children:[(0,x.jsx)(`option`,{value:1,children:`1층 (단면)`}),(0,x.jsx)(`option`,{value:2,children:`2층 (양면)`}),(0,x.jsx)(`option`,{value:4,children:`4층`}),(0,x.jsx)(`option`,{value:6,children:`6층`})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`제작 수량 (PCS)`}),(0,x.jsx)(`input`,{type:`number`,min:`1`,value:d.quantity,onChange:e=>f({...d,quantity:e.target.value})})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`발주 비용 ($ USD)`}),(0,x.jsx)(`input`,{type:`number`,step:`0.1`,placeholder:`예: 25.5`,value:d.cost,onChange:e=>f({...d,cost:e.target.value})})]})]}),(0,x.jsx)(`div`,{className:`form-group checkbox-group`,children:(0,x.jsxs)(`label`,{className:`checkbox-label`,children:[(0,x.jsx)(`input`,{type:`checkbox`,checked:d.hasSmt,onChange:e=>f({...d,hasSmt:e.target.checked})}),(0,x.jsx)(`span`,{children:`SMT 부품 실장 서비스 포함`})]})}),(0,x.jsxs)(`div`,{className:`form-row`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`도착 예정일`}),(0,x.jsx)(`input`,{type:`date`,value:d.estimatedDelivery,onChange:e=>f({...d,estimatedDelivery:e.target.value})})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`운송장 번호 (Tracking)`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: DHL / CJ대한통운 번호`,value:d.trackingNumber,onChange:e=>f({...d,trackingNumber:e.target.value})})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`메모 / 사양 특이사항`}),(0,x.jsx)(`textarea`,{rows:`2`,placeholder:`예: ENIG 금도금, 무연납 HASL, 스텐실 포함 등`,value:d.notes,onChange:e=>f({...d,notes:e.target.value})})]}),(0,x.jsxs)(`div`,{className:`modal-actions`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>c(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,children:`등록 완료`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .order-tracker-view {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .tracker-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .toast-badge {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid #A7F3D0;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .stat-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .stat-lbl {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
        }

        .filter-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .filter-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted, #64748B);
        }

        .filter-chip {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 20px;
          padding: 0.35rem 0.8rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .filter-chip:hover {
          border-color: var(--primary, #FF6F0F);
          color: var(--primary, #FF6F0F);
        }

        .filter-chip.active {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border-color: var(--primary, #FF6F0F);
        }

        .kanban-board {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
          align-items: start;
        }

        .kanban-column {
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          overflow: hidden;
          min-height: 520px;
          display: flex;
          flex-direction: column;
        }

        .column-header {
          padding: 0.9rem;
          background: var(--bg-card, #FFFFFF);
          border-bottom: 1px solid var(--border, #E2E8F0);
          border-top: 3px solid #64748B;
        }

        .col-title-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .col-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          flex: 1;
        }

        .col-badge {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 2px 7px;
          border-radius: 12px;
        }

        .column-cards-list {
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .column-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: var(--text-muted, #94A3B8);
          font-size: 0.85rem;
        }

        .order-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 10px;
          padding: 0.9rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .order-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mfr-tag {
          background: #EFF6FF;
          color: #2563EB;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dday-tag {
          font-size: 0.75rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .dday-tag.urgent {
          background: #FEF2F2;
          color: #DC2626;
        }

        .dday-tag.normal {
          background: #F1F5F9;
          color: #475569;
        }

        .order-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          line-height: 1.35;
        }

        .order-num-row {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
          font-family: monospace;
        }

        .specs-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .spec-item {
          font-size: 0.72rem;
          font-weight: 600;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-muted, #64748B);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border, #E2E8F0);
        }

        .spec-item.smt {
          background: #F5F3FF;
          color: #7C3AED;
          border-color: #DDD6FE;
        }

        .spec-item.cost {
          background: #ECFDF5;
          color: #059669;
          border-color: #A7F3D0;
        }

        .order-notes {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
          background: var(--bg-sub, #F8FAFC);
          padding: 0.4rem;
          border-radius: 4px;
          line-height: 1.4;
        }

        .date-row, .tracking-row {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
        }

        .tracking-code {
          font-family: monospace;
          background: #F1F5F9;
          padding: 1px 4px;
          border-radius: 3px;
        }

        .card-actions {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 0.3rem;
          padding-top: 0.5rem;
          border-top: 1px dashed var(--border, #E2E8F0);
        }

        .step-btn {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 6px;
          padding: 0.3rem 0.5rem;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .step-btn.next {
          margin-left: auto;
          background: var(--primary-light, #FFF2E8);
          color: var(--primary, #FF6F0F);
          border-color: var(--primary, #FF6F0F);
        }

        .step-btn:hover {
          opacity: 0.85;
        }

        .delete-card-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0.3rem;
          border-radius: 4px;
        }

        .delete-card-btn:hover {
          color: #DC2626;
          background: #FEF2F2;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-container {
          background: var(--bg-card, #FFFFFF);
          border-radius: 14px;
          max-width: 520px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border, #E2E8F0);
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
          padding: 0.2rem;
        }

        .modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main, #334155);
        }

        .form-group input, .form-group select, .form-group textarea {
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 8px;
          padding: 0.55rem 0.75rem;
          font-size: 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-main, #1E293B);
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary, #FF6F0F);
          background: #FFFFFF;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-row.three-col {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .checkbox-group {
          margin-top: -0.25rem;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary {
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #334155);
          border: 1px solid var(--border, #E2E8F0);
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .kanban-board {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .kanban-board {
            grid-template-columns: 1fr;
          }
          .stats-row {
            grid-template-columns: 1fr;
          }
        }
      `})]})}var ya=[`전체`,`설계 기초`,`소자 선택`,`발주 가이드`,`납땜 팁`,`트러블슈팅`];function ba(){let{currentUser:e}=w(),[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)(`전체`),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(null),[d,f]=(0,v.useState)(!1),[p,m]=(0,v.useState)(``),[h,g]=(0,v.useState)({title:``,category:`설계 기초`,tags:``,content:``}),_=async()=>{try{i(!0);let e=`/api/wiki`,t=new URLSearchParams;a!==`전체`&&t.append(`category`,a),s.trim()&&t.append(`search`,s.trim()),t.toString()&&(e+=`?${t.toString()}`);let r=await(await fetch(e)).json();n(r)}catch(e){console.error(e)}finally{i(!1)}};(0,v.useEffect)(()=>{_()},[a,s]);let y=e=>{m(e),setTimeout(()=>m(``),3e3)},b=e=>{u(e),fetch(`/api/wiki/${e.id}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({views:(e.views||0)+1})}).catch(()=>{})},S=async e=>{if(!l)return;let t=(l.likes||0)+1;try{(await fetch(`/api/wiki/${e}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({likes:t})})).ok&&(u(e=>({...e,likes:t})),n(n=>n.map(n=>n.id===e?{...n,likes:t}:n)),y(`좋아요를 눌렀습니다! 👍`))}catch(e){console.error(e)}};return(0,x.jsxs)(`div`,{className:`wiki-view`,children:[(0,x.jsxs)(`div`,{className:`wiki-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`page-title`,children:[(0,x.jsx)(`span`,{className:`title-emoji`,children:`📚`}),` 메이커 지식 위키`]}),(0,x.jsx)(`p`,{className:`page-desc`,children:`반복되는 KiCad 설계 오류, 부품 선정 팁, 해외 발주 노하우를 집단 지성으로 공유합니다.`})]}),(0,x.jsxs)(`div`,{className:`header-actions`,children:[p&&(0,x.jsx)(`span`,{className:`toast-badge`,children:p}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>f(!0),children:[(0,x.jsx)(Ut,{size:16}),` 지식 문서 작성`]})]})]}),l?(0,x.jsxs)(`div`,{className:`article-detail-view`,children:[(0,x.jsxs)(`button`,{className:`back-btn`,onClick:()=>u(null),children:[(0,x.jsx)(ce,{size:16}),` 목록으로 돌아가기`]}),(0,x.jsxs)(`article`,{className:`detail-card`,children:[(0,x.jsxs)(`div`,{className:`detail-meta`,children:[(0,x.jsx)(`span`,{className:`category-pill`,children:l.category}),(0,x.jsxs)(`span`,{className:`meta-date`,children:[(0,x.jsx)(be,{size:13}),` `,l.updatedAt]}),(0,x.jsxs)(`span`,{className:`meta-author`,children:[`작성자: `,l.authorName]})]}),(0,x.jsx)(`h1`,{className:`detail-title`,children:l.title}),(0,x.jsx)(`div`,{className:`detail-tags`,children:(l.tags||[]).map((e,t)=>(0,x.jsxs)(`span`,{className:`tag-chip`,children:[`#`,e]},t))}),(0,x.jsx)(`div`,{className:`detail-divider`}),(0,x.jsx)(`div`,{className:`detail-content-body`,children:l.content.split(`

`).map((e,t)=>e.startsWith(`## `)?(0,x.jsx)(`h2`,{className:`content-h2`,children:e.replace(`## `,``)},t):e.startsWith(`### `)?(0,x.jsx)(`h3`,{className:`content-h3`,children:e.replace(`### `,``)},t):e.startsWith(`- `)?(0,x.jsx)(`ul`,{className:`content-ul`,children:e.split(`
`).map((e,t)=>(0,x.jsx)(`li`,{children:e.replace(/^- /,``)},t))},t):e.match(/^\d+\. /)?(0,x.jsx)(`ol`,{className:`content-ol`,children:e.split(`
`).map((e,t)=>(0,x.jsx)(`li`,{children:e.replace(/^\d+\. /,``)},t))},t):(0,x.jsx)(`p`,{className:`content-p`,children:e},t))}),(0,x.jsxs)(`div`,{className:`detail-footer`,children:[(0,x.jsxs)(`button`,{className:`like-btn`,onClick:()=>S(l.id),children:[(0,x.jsx)(xn,{size:16}),(0,x.jsxs)(`span`,{children:[`도움이 되었어요 (`,l.likes||0,`)`]})]}),(0,x.jsx)(`div`,{className:`detail-stats`,children:(0,x.jsxs)(`span`,{children:[(0,x.jsx)(Ye,{size:14}),` 조회수 `,l.views||0]})})]})]})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(`div`,{className:`search-filter-section`,children:[(0,x.jsxs)(`div`,{className:`search-box`,children:[(0,x.jsx)(en,{size:18,className:`search-icon`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`궁금한 키워드 검색 (예: KiCad, DRC, 0603, JLCPCB, 노이즈 등)...`,value:s,onChange:e=>c(e.target.value)}),s&&(0,x.jsx)(`button`,{className:`clear-search`,onClick:()=>c(``),children:(0,x.jsx)(Gn,{size:16})})]}),(0,x.jsx)(`div`,{className:`category-tabs`,children:ya.map(e=>(0,x.jsx)(`button`,{className:`category-tab ${a===e?`active`:``}`,onClick:()=>o(e),children:e},e))})]}),r?(0,x.jsx)(`div`,{className:`loading-state`,children:`문서를 불러오는 중입니다...`}):t.length===0?(0,x.jsxs)(`div`,{className:`empty-state`,children:[(0,x.jsx)(F,{size:48,color:`#CBD5E1`}),(0,x.jsx)(`h3`,{children:`검색된 지식 문서가 없습니다`}),(0,x.jsx)(`p`,{children:`첫 번째로 이 주제에 관한 노하우 문서를 작성해보세요!`}),(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>f(!0),children:[(0,x.jsx)(Ut,{size:16}),` 새 문서 작성하기`]})]}):(0,x.jsx)(`div`,{className:`articles-grid`,children:t.map(e=>(0,x.jsxs)(`div`,{className:`article-card`,onClick:()=>b(e),children:[(0,x.jsxs)(`div`,{className:`card-top-row`,children:[(0,x.jsx)(`span`,{className:`card-cat-badge`,children:e.category}),(0,x.jsx)(`span`,{className:`card-date`,children:e.updatedAt})]}),(0,x.jsx)(`h3`,{className:`card-title`,children:e.title}),(0,x.jsxs)(`p`,{className:`card-snippet`,children:[e.content.replace(/[#\-\*]/g,``).slice(0,100),`...`]}),(0,x.jsx)(`div`,{className:`card-tags`,children:(e.tags||[]).slice(0,3).map((e,t)=>(0,x.jsxs)(`span`,{className:`card-tag`,children:[`#`,e]},t))}),(0,x.jsxs)(`div`,{className:`card-footer`,children:[(0,x.jsxs)(`span`,{className:`card-author`,children:[`by `,e.authorName]}),(0,x.jsxs)(`div`,{className:`card-meta-icons`,children:[(0,x.jsxs)(`span`,{children:[(0,x.jsx)(Ye,{size:13}),` `,e.views||0]}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(xn,{size:13}),` `,e.likes||0]})]})]})]},e.id))})]}),d&&(0,x.jsx)(`div`,{className:`modal-backdrop`,onClick:()=>f(!1),children:(0,x.jsxs)(`div`,{className:`modal-container`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`modal-title-wrap`,children:[(0,x.jsx)(F,{size:20,color:`#FF6F0F`}),(0,x.jsx)(`h3`,{children:`새 지식 위키 문서 작성`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>f(!1),children:(0,x.jsx)(Gn,{size:18})})]}),(0,x.jsxs)(`form`,{onSubmit:async t=>{if(t.preventDefault(),!h.title.trim()||!h.content.trim()){alert(`제목과 내용을 입력해주세요.`);return}try{let t=h.tags.split(`,`).map(e=>e.trim().replace(/^#/,``)).filter(Boolean),n={title:h.title,category:h.category,tags:t.length>0?t:[`PCB`],content:h.content,authorName:e?.name||`익명 메이커`,authorId:e?.id||`usr_guest`};(await fetch(`/api/wiki`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})).ok&&(f(!1),g({title:``,category:`설계 기초`,tags:``,content:``}),_(),y(`새 지식 위키 문서가 발행되었습니다! 📚`))}catch(e){console.error(e)}},className:`modal-form`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`문서 제목 *`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: STM32F4 클럭 오실레이터 회로 설계 시 주의사항`,value:h.title,onChange:e=>g({...h,title:e.target.value}),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-row`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`카테고리`}),(0,x.jsx)(`select`,{value:h.category,onChange:e=>g({...h,category:e.target.value}),children:ya.filter(e=>e!==`전체`).map(e=>(0,x.jsx)(`option`,{value:e,children:e},e))})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`태그 (쉼표로 구분)`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: STM32, 크리스탈, 노이즈`,value:h.tags,onChange:e=>g({...h,tags:e.target.value})})]})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`본문 내용 (마크다운 지원) *`}),(0,x.jsx)(`textarea`,{rows:`10`,placeholder:`## 소제목 작성
내용을 상세하게 적어주세요.
- 체크리스트 1
- 체크리스트 2
1. 순서 1
2. 순서 2`,value:h.content,onChange:e=>g({...h,content:e.target.value}),required:!0})]}),(0,x.jsxs)(`div`,{className:`modal-actions`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>f(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,children:`문서 발행하기`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .wiki-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .wiki-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .toast-badge {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid #A7F3D0;
        }

        .search-filter-section {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .search-box {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted, #94A3B8);
        }

        .search-box input {
          width: 100%;
          padding: 0.85rem 1rem 0.85rem 2.8rem;
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 12px;
          font-size: 0.95rem;
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #1E293B);
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--primary, #FF6F0F);
        }

        .clear-search {
          position: absolute;
          right: 1rem;
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
        }

        .category-tabs {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .category-tab {
          padding: 0.45rem 1rem;
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.15s ease;
        }

        .category-tab:hover {
          border-color: var(--primary, #FF6F0F);
          color: var(--primary, #FF6F0F);
        }

        .category-tab.active {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border-color: var(--primary, #FF6F0F);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
        }

        .article-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .article-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.08);
          border-color: var(--primary-light, #FFD8BE);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-cat-badge {
          background: #EFF6FF;
          color: #2563EB;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 6px;
        }

        .card-date {
          font-size: 0.75rem;
          color: var(--text-muted, #94A3B8);
        }

        .card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          line-height: 1.4;
        }

        .card-snippet {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          line-height: 1.5;
          flex: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .card-tag {
          font-size: 0.75rem;
          color: var(--primary, #FF6F0F);
          background: var(--primary-light, #FFF2E8);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border, #F1F5F9);
          font-size: 0.8rem;
          color: var(--text-muted, #64748B);
        }

        .card-meta-icons {
          display: flex;
          gap: 0.75rem;
        }

        .card-meta-icons span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Detail View */
        .article-detail-view {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: none;
          border: none;
          color: var(--text-muted, #64748B);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          width: fit-content;
          padding: 0.3rem 0;
        }

        .back-btn:hover {
          color: var(--primary, #FF6F0F);
        }

        .detail-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 14px;
          padding: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.04);
        }

        .detail-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .category-pill {
          background: var(--primary-light, #FFF2E8);
          color: var(--primary, #FF6F0F);
          font-size: 0.8rem;
          font-weight: 700;
          padding: 3px 10px;
          border-radius: 12px;
        }

        .meta-date, .meta-author {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .detail-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          line-height: 1.35;
          margin-bottom: 1rem;
        }

        .detail-tags {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag-chip {
          font-size: 0.8rem;
          font-weight: 600;
          color: #2563EB;
          background: #EFF6FF;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .detail-divider {
          height: 1px;
          background: var(--border, #E2E8F0);
          margin-bottom: 1.5rem;
        }

        .detail-content-body {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--text-main, #334155);
        }

        .content-h2 {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 1.5rem 0 0.75rem 0;
          color: var(--text-main, #1E293B);
        }

        .content-h3 {
          font-size: 1.15rem;
          font-weight: 700;
          margin: 1.25rem 0 0.5rem 0;
          color: var(--text-main, #1E293B);
        }

        .content-p {
          margin-bottom: 1rem;
        }

        .content-ul, .content-ol {
          margin-bottom: 1rem;
          padding-left: 1.5rem;
        }

        .content-ul li, .content-ol li {
          margin-bottom: 0.35rem;
        }

        .detail-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border, #E2E8F0);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .like-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #EFF6FF;
          color: #2563EB;
          border: 1px solid #BFDBFE;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .like-btn:hover {
          background: #DBEAFE;
        }

        .detail-stats {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          display: flex;
          gap: 1rem;
        }

        .detail-stats span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .empty-state, .loading-state {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--text-muted, #64748B);
        }

        .empty-state h3 {
          margin: 1rem 0 0.5rem 0;
          color: var(--text-main, #1E293B);
        }

        .empty-state p {
          margin-bottom: 1.5rem;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-container {
          background: var(--bg-card, #FFFFFF);
          border-radius: 14px;
          max-width: 640px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border, #E2E8F0);
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
        }

        .modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main, #334155);
        }

        .form-group input, .form-group select, .form-group textarea {
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 8px;
          padding: 0.55rem 0.75rem;
          font-size: 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-main, #1E293B);
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--primary, #FF6F0F);
          background: #FFFFFF;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary {
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #334155);
          border: 1px solid var(--border, #E2E8F0);
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }
      `})]})}function xa({onNavigateToChat:e}){let{currentUser:t}=w(),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(``),[u,d]=(0,v.useState)({title:``,tags:``,message:``}),f=Number(t?.solderingTemp||36.5),p=f>=50,m=async()=>{try{a(!0);let e=await(await fetch(`/api/mentoring`)).json();r(e)}catch(e){console.error(e)}finally{a(!1)}};(0,v.useEffect)(()=>{m()},[]);let h=e=>{l(e),setTimeout(()=>l(``),3e3)},g=async n=>{if(!t){alert(`로그인이 필요한 서비스입니다.`);return}if(n.mentorId===t.id){alert(`자신이 개설한 멘토링에는 멘티로 신청할 수 없습니다.`);return}try{(await fetch(`/api/mentoring/${n.id}`,{method:`PUT`,headers:{"Content-Type":`application/json`},body:JSON.stringify({status:`active`,menteeId:t.id,menteeName:t.name,sessionsCount:(n.sessionsCount||0)+1})})).ok&&(r(e=>e.map(e=>e.id===n.id?{...e,status:`active`,menteeId:t.id,menteeName:t.name,sessionsCount:(e.sessionsCount||0)+1}:e)),h(`멘토링 매칭이 성사되었습니다! 🎉`),e&&setTimeout(()=>e(n.mentorId),1e3))}catch(e){console.error(e)}};return(0,x.jsxs)(`div`,{className:`mentoring-view`,children:[(0,x.jsxs)(`div`,{className:`mentoring-header`,children:[(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`page-title`,children:[(0,x.jsx)(`span`,{className:`title-emoji`,children:`🎓`}),` 메이커 멘토링 매칭`]}),(0,x.jsx)(`p`,{className:`page-desc`,children:`고수 메이커에게 1:1로 아트웍 검토와 디버깅 코칭을 받고, 함께 성장하는 온·오프라인 멘토링 프로그램입니다.`})]}),(0,x.jsxs)(`div`,{className:`header-actions`,children:[c&&(0,x.jsx)(`span`,{className:`toast-badge`,children:c}),p?(0,x.jsxs)(`button`,{className:`btn-primary`,onClick:()=>s(!0),children:[(0,x.jsx)(Ut,{size:16}),` 멘토 등록하기`]}):(0,x.jsxs)(`div`,{className:`mentor-qualify-tip`,children:[(0,x.jsx)($e,{size:14,color:`#EA580C`}),(0,x.jsxs)(`span`,{children:[`온도 50℃ 이상 시 멘토 개설 가능 (현재 `,f.toFixed(1),`℃)`]})]})]})]}),(0,x.jsxs)(`div`,{className:`mentoring-info-banner`,children:[(0,x.jsxs)(`div`,{className:`banner-col`,children:[(0,x.jsx)(`div`,{className:`banner-icon-box`,children:`🌱`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{children:`초보 메이커 (멘티)`}),(0,x.jsx)(`p`,{children:`설계한 거버 파일이나 회로도 검토, 에러 트러블슈팅을 1:1로 질문하세요.`})]})]}),(0,x.jsx)(`div`,{className:`banner-divider`}),(0,x.jsxs)(`div`,{className:`banner-col`,children:[(0,x.jsx)(`div`,{className:`banner-icon-box`,children:`⚡`}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(`h4`,{children:`경험 메이커 (멘토)`}),(0,x.jsx)(`p`,{children:`납땜 온도 50℃ 이상 회원이 노하우를 전수하며, 완료 시 온도 +2℃와 멘토 뱃지 수여!`})]})]})]}),(0,x.jsxs)(`div`,{className:`sessions-list-section`,children:[(0,x.jsxs)(`h3`,{className:`section-title`,children:[(0,x.jsx)(Vn,{size:18}),` 개설된 멘토링 프로그램 (`,n.length,`)`]}),i?(0,x.jsx)(`div`,{className:`loading-state`,children:`멘토링 목록을 불러오는 중입니다...`}):n.length===0?(0,x.jsxs)(`div`,{className:`empty-state`,children:[(0,x.jsx)(rt,{size:48,color:`#CBD5E1`}),(0,x.jsx)(`p`,{children:`현재 등록된 멘토링 프로그램이 없습니다.`})]}):(0,x.jsx)(`div`,{className:`sessions-grid`,children:n.map(n=>{let r=er(n.mentorTemp),i=n.mentorId===t?.id,a=n.status===`active`;return(0,x.jsxs)(`div`,{className:`session-card ${a?`matched`:``}`,children:[(0,x.jsxs)(`div`,{className:`session-top`,children:[(0,x.jsxs)(`div`,{className:`mentor-profile-group`,children:[(0,x.jsx)(`div`,{className:`mentor-avatar-badge`,children:(0,x.jsx)(`span`,{className:`mentor-emoji`,children:`👨‍🔧`})}),(0,x.jsxs)(`div`,{className:`mentor-info`,children:[(0,x.jsx)(`span`,{className:`mentor-name`,children:n.mentorName}),(0,x.jsxs)(`div`,{className:`mentor-temp-tag`,children:[(0,x.jsx)($e,{size:12,color:`#FF6F0F`}),(0,x.jsxs)(`span`,{children:[Number(n.mentorTemp).toFixed(1),`℃ (`,r.title,`)`]})]})]})]}),(0,x.jsx)(`span`,{className:`status-pill ${a?`active`:`recruiting`}`,children:a?`진행중 (매칭완료)`:`멘티 모집중`})]}),(0,x.jsx)(`h4`,{className:`session-title`,children:n.title}),(0,x.jsx)(`p`,{className:`session-msg`,children:n.message}),(0,x.jsx)(`div`,{className:`session-tags`,children:(n.mentorTags||[]).map((e,t)=>(0,x.jsxs)(`span`,{className:`tag-chip`,children:[`#`,e]},t))}),a&&(0,x.jsxs)(`div`,{className:`matched-info-box`,children:[(0,x.jsx)(je,{size:14,color:`#10B981`}),(0,x.jsxs)(`span`,{children:[`멘티: `,(0,x.jsx)(`strong`,{children:n.menteeName}),` 메이커 매칭 완료`]})]}),(0,x.jsxs)(`div`,{className:`session-footer`,children:[(0,x.jsxs)(`span`,{className:`session-count`,children:[`진행 세션: `,n.sessionsCount||0,`회`]}),a?(0,x.jsxs)(`button`,{className:`btn-chat`,onClick:()=>e&&e(i?n.menteeId:n.mentorId),children:[(0,x.jsx)(Tt,{size:14}),` 1:1 대화방`]}):(0,x.jsx)(`button`,{className:`btn-apply`,onClick:()=>g(n),disabled:i,children:i?`내가 개설한 멘토링`:`멘티 신청하기`})]})]},n.id)})})]}),o&&(0,x.jsx)(`div`,{className:`modal-backdrop`,onClick:()=>s(!1),children:(0,x.jsxs)(`div`,{className:`modal-container`,onClick:e=>e.stopPropagation(),children:[(0,x.jsxs)(`div`,{className:`modal-header`,children:[(0,x.jsxs)(`div`,{className:`modal-title-wrap`,children:[(0,x.jsx)(rt,{size:20,color:`#FF6F0F`}),(0,x.jsx)(`h3`,{children:`새 멘토 프로그램 개설`})]}),(0,x.jsx)(`button`,{className:`close-btn`,onClick:()=>s(!1),children:(0,x.jsx)(Gn,{size:18})})]}),(0,x.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!u.title.trim()||!u.message.trim()){alert(`제목과 안내 메시지를 입력해주세요.`);return}try{let e=u.tags.split(`,`).map(e=>e.trim().replace(/^#/,``)).filter(Boolean),n={mentorId:t.id,mentorName:t.name,mentorTemp:t.solderingTemp||50,mentorTags:e.length>0?e:[`회로설계`],title:u.title,message:u.message};(await fetch(`/api/mentoring`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)})).ok&&(s(!1),d({title:``,tags:``,message:``}),m(),h(`멘토 프로그램이 등록되었습니다! 🎓`))}catch(e){console.error(e)}},className:`modal-form`,children:[(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`멘토링 주제 *`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: 초보자를 위한 4층 기판 KiCad 라우팅 & DRC 검토`,value:u.title,onChange:e=>d({...u,title:e.target.value}),required:!0})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`전문 분야 태그 (쉼표로 구분)`}),(0,x.jsx)(`input`,{type:`text`,placeholder:`예: KiCad, 전원회로, BGA, 노이즈대책`,value:u.tags,onChange:e=>d({...u,tags:e.target.value})})]}),(0,x.jsxs)(`div`,{className:`form-group`,children:[(0,x.jsx)(`label`,{children:`멘티에게 전하는 말 / 멘토링 방식 *`}),(0,x.jsx)(`textarea`,{rows:`4`,placeholder:`예: 설계하신 회로도/거버를 함께 검토하고, 질문에 답변해 드립니다. 온라인 당근 채팅 또는 오프라인 밋업에서 진행 가능합니다.`,value:u.message,onChange:e=>d({...u,message:e.target.value}),required:!0})]}),(0,x.jsxs)(`div`,{className:`modal-actions`,children:[(0,x.jsx)(`button`,{type:`button`,className:`btn-secondary`,onClick:()=>s(!1),children:`취소`}),(0,x.jsx)(`button`,{type:`submit`,className:`btn-primary`,children:`멘토 프로그램 등록`})]})]})]})}),(0,x.jsx)(`style`,{children:`
        .mentoring-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .mentoring-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .toast-badge {
          background: #ECFDF5;
          color: #059669;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          border: 1px solid #A7F3D0;
        }

        .mentor-qualify-tip {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFF2E8;
          color: #C2410C;
          border: 1px solid #FFD8BE;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 600;
        }

        .mentoring-info-banner {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .banner-col {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .banner-icon-box {
          font-size: 1.75rem;
        }

        .banner-col h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          margin-bottom: 0.25rem;
        }

        .banner-col p {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          line-height: 1.4;
        }

        .banner-divider {
          width: 1px;
          background: var(--border, #E2E8F0);
        }

        .section-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .sessions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 1.25rem;
        }

        .session-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }

        .session-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px -2px rgba(0,0,0,0.06);
        }

        .session-card.matched {
          border-color: #86EFAC;
          background: #F0FDF4;
        }

        .session-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mentor-profile-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .mentor-avatar-badge {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--primary-light, #FFF2E8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
        }

        .mentor-info {
          display: flex;
          flex-direction: column;
        }

        .mentor-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
        }

        .mentor-temp-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
          font-weight: 600;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .status-pill.recruiting {
          background: #EFF6FF;
          color: #2563EB;
        }

        .status-pill.active {
          background: #DCFCE7;
          color: #15803D;
        }

        .session-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
          line-height: 1.4;
        }

        .session-msg {
          font-size: 0.85rem;
          color: var(--text-muted, #64748B);
          line-height: 1.5;
          flex: 1;
        }

        .session-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }

        .tag-chip {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-main, #475569);
          background: var(--bg-sub, #F8FAFC);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid var(--border, #E2E8F0);
        }

        .matched-info-box {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #FFFFFF;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          border: 1px solid #BBF7D0;
          font-size: 0.8rem;
          color: #166534;
        }

        .session-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border, #F1F5F9);
        }

        .session-count {
          font-size: 0.8rem;
          color: var(--text-muted, #64748B);
        }

        .btn-apply {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-apply:disabled {
          background: #E2E8F0;
          color: #94A3B8;
          cursor: not-allowed;
        }

        .btn-chat {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #2563EB;
          color: #FFF;
          border: none;
          padding: 0.45rem 0.9rem;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* Modal */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-container {
          background: var(--bg-card, #FFFFFF);
          border-radius: 14px;
          max-width: 500px;
          width: 100%;
          overflow: hidden;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border, #E2E8F0);
        }

        .modal-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .close-btn {
          background: none;
          border: none;
          color: #94A3B8;
          cursor: pointer;
        }

        .modal-form {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .form-group label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-main, #334155);
        }

        .form-group input, .form-group textarea {
          border: 1px solid var(--border, #CBD5E1);
          border-radius: 8px;
          padding: 0.55rem 0.75rem;
          font-size: 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          color: var(--text-main, #1E293B);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .btn-primary {
          background: var(--primary, #FF6F0F);
          color: #FFF;
          border: none;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        .btn-secondary {
          background: var(--bg-card, #FFFFFF);
          color: var(--text-main, #334155);
          border: 1px solid var(--border, #E2E8F0);
          padding: 0.55rem 1rem;
          border-radius: 8px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .mentoring-info-banner {
            flex-direction: column;
            gap: 1rem;
          }
          .banner-divider {
            display: none;
          }
        }
      `})]})}function Sa(){let{currentUser:e}=w(),[t,n]=(0,v.useState)(null),[r,i]=(0,v.useState)(!0),[a,o]=(0,v.useState)(null);(0,v.useEffect)(()=>{fetch(`/api/stats`).then(e=>e.json()).then(e=>{n(e),i(!1)}).catch(()=>i(!1))},[]);let s=(()=>{let e=[],t=new Date;for(let n=181;n>=0;n--){let r=new Date(t);r.setDate(r.getDate()-n);let i=r.toISOString().split(`T`)[0],a=r.getDay(),o=0,s=(r.getFullYear()*1e3+r.getMonth()*100+r.getDate())%17;s===0||s===3||s===7?o=3+s%4:s===2||s===8||s===11?o=1+s%3:(a===6||a===0)&&(o=s%5);let c=0;o>=5?c=4:o>=3?c=3:o>=2?c=2:o>=1&&(c=1),e.push({date:i,count:o,level:c,dayOfWeek:a})}return e})(),c=s.reduce((e,t)=>e+t.count,0);return(0,x.jsxs)(`div`,{className:`stats-view`,children:[(0,x.jsx)(`div`,{className:`stats-header`,children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`h2`,{className:`page-title`,children:[(0,x.jsx)(`span`,{className:`title-emoji`,children:`📈`}),` 활동 히트맵 & 통계 분석`]}),(0,x.jsx)(`p`,{className:`page-desc`,children:`내가 설계하고 소통한 자작 활동의 발자취를 잔디 히트맵과 통계 차트로 확인하세요.`})]})}),(0,x.jsxs)(`div`,{className:`summary-cards-grid`,children:[(0,x.jsxs)(`div`,{className:`summary-card`,children:[(0,x.jsx)(`div`,{className:`summary-icon`,style:{background:`#FFF2E8`,color:`#FF6F0F`},children:(0,x.jsx)(oe,{size:24})}),(0,x.jsxs)(`div`,{className:`summary-data`,children:[(0,x.jsxs)(`span`,{className:`data-val`,children:[c,`회`]}),(0,x.jsx)(`span`,{className:`data-lbl`,children:`최근 6개월 총 활동`})]})]}),(0,x.jsxs)(`div`,{className:`summary-card`,children:[(0,x.jsx)(`div`,{className:`summary-icon`,style:{background:`#ECFDF5`,color:`#10B981`},children:(0,x.jsx)($e,{size:24})}),(0,x.jsxs)(`div`,{className:`summary-data`,children:[(0,x.jsxs)(`span`,{className:`data-val`,children:[`+`,((e?.solderingTemp||36.5)-36.5).toFixed(1),`℃`]}),(0,x.jsx)(`span`,{className:`data-lbl`,children:`누적 납땜 온도 상승치`})]})]}),(0,x.jsxs)(`div`,{className:`summary-card`,children:[(0,x.jsx)(`div`,{className:`summary-icon`,style:{background:`#EFF6FF`,color:`#3B82F6`},children:(0,x.jsx)(be,{size:24})}),(0,x.jsxs)(`div`,{className:`summary-data`,children:[(0,x.jsx)(`span`,{className:`data-val`,children:`14일`}),(0,x.jsx)(`span`,{className:`data-lbl`,children:`최장 연속 활동 스트릭`})]})]}),(0,x.jsxs)(`div`,{className:`summary-card`,children:[(0,x.jsx)(`div`,{className:`summary-icon`,style:{background:`#F5F3FF`,color:`#8B5CF6`},children:(0,x.jsx)(fe,{size:24})}),(0,x.jsxs)(`div`,{className:`summary-data`,children:[(0,x.jsxs)(`span`,{className:`data-val`,children:[e?.badges?.length||2,`개`]}),(0,x.jsx)(`span`,{className:`data-lbl`,children:`획득한 업적 뱃지`})]})]})]}),(0,x.jsxs)(`div`,{className:`heatmap-card`,children:[(0,x.jsxs)(`div`,{className:`heatmap-card-header`,children:[(0,x.jsxs)(`div`,{className:`heatmap-title-wrap`,children:[(0,x.jsx)(be,{size:18,color:`#FF6F0F`}),(0,x.jsx)(`h3`,{className:`heatmap-title`,children:`메이커 활동 잔디 히트맵 (최근 26주)`})]}),(0,x.jsxs)(`div`,{className:`heatmap-legend`,children:[(0,x.jsx)(`span`,{className:`legend-text`,children:`적음`}),(0,x.jsx)(`span`,{className:`legend-cell level-0`}),(0,x.jsx)(`span`,{className:`legend-cell level-1`}),(0,x.jsx)(`span`,{className:`legend-cell level-2`}),(0,x.jsx)(`span`,{className:`legend-cell level-3`}),(0,x.jsx)(`span`,{className:`legend-cell level-4`}),(0,x.jsx)(`span`,{className:`legend-text`,children:`많음`})]})]}),(0,x.jsx)(`div`,{className:`heatmap-grid-container`,children:(0,x.jsx)(`div`,{className:`heatmap-grid`,children:s.map((e,t)=>(0,x.jsx)(`div`,{className:`heatmap-cell level-${e.level}`,title:`${e.date}: 활동 ${e.count}건`,onClick:()=>o(e)},t))})}),a&&(0,x.jsxs)(`div`,{className:`selected-cell-info`,children:[(0,x.jsx)(pn,{size:14,color:`#FF6F0F`}),(0,x.jsxs)(`span`,{children:[(0,x.jsx)(`strong`,{children:a.date}),`: 회로 설계, 커뮤니티 소통 등 `,(0,x.jsxs)(`strong`,{children:[a.count,`건`]}),`의 메이커 활동 기록`]})]})]}),(0,x.jsxs)(`div`,{className:`stats-bottom-row`,children:[(0,x.jsxs)(`div`,{className:`breakdown-card`,children:[(0,x.jsxs)(`h3`,{className:`card-heading`,children:[(0,x.jsx)(I,{size:18}),` 활동 유형별 기여 분포`]}),(0,x.jsxs)(`div`,{className:`category-bars-list`,children:[(0,x.jsxs)(`div`,{className:`bar-item`,children:[(0,x.jsxs)(`div`,{className:`bar-meta`,children:[(0,x.jsx)(`span`,{className:`bar-name`,children:`🛠️ PCB 회로 설계 & 갤러리 등록`}),(0,x.jsx)(`span`,{className:`bar-val`,children:`38%`})]}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill`,style:{width:`38%`,background:`#FF6F0F`}})})]}),(0,x.jsxs)(`div`,{className:`bar-item`,children:[(0,x.jsxs)(`div`,{className:`bar-meta`,children:[(0,x.jsx)(`span`,{className:`bar-name`,children:`💬 커뮤니티 글/댓글 & 회로 SOS 답변`}),(0,x.jsx)(`span`,{className:`bar-val`,children:`32%`})]}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill`,style:{width:`32%`,background:`#10B981`}})})]}),(0,x.jsxs)(`div`,{className:`bar-item`,children:[(0,x.jsxs)(`div`,{className:`bar-meta`,children:[(0,x.jsx)(`span`,{className:`bar-name`,children:`📦 부품 나눔 & 해외 기판 발주`}),(0,x.jsx)(`span`,{className:`bar-val`,children:`18%`})]}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill`,style:{width:`18%`,background:`#3B82F6`}})})]}),(0,x.jsxs)(`div`,{className:`bar-item`,children:[(0,x.jsxs)(`div`,{className:`bar-meta`,children:[(0,x.jsx)(`span`,{className:`bar-name`,children:`☕ 오프라인 밋업 & 납땜 워크숍 참석`}),(0,x.jsx)(`span`,{className:`bar-val`,children:`12%`})]}),(0,x.jsx)(`div`,{className:`bar-track`,children:(0,x.jsx)(`div`,{className:`bar-fill`,style:{width:`12%`,background:`#8B5CF6`}})})]})]})]}),(0,x.jsxs)(`div`,{className:`leaderboard-card`,children:[(0,x.jsxs)(`h3`,{className:`card-heading`,children:[(0,x.jsx)(fe,{size:18}),` 당근 PCB 메이커스 명예의 전당`]}),(0,x.jsx)(`div`,{className:`leaderboard-list`,children:[{rank:1,name:`당근마스터 (운영진)`,temp:85.5,projects:12,badges:6,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80`},{rank:2,name:`회로도장인`,temp:68,projects:8,badges:5,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80`},{rank:3,name:`아트웍요정`,temp:62.5,projects:7,badges:4,avatar:`https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80`},{rank:4,name:`메이커꿈나무`,temp:42,projects:3,badges:2,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`},{rank:5,name:`SMT장인김씨`,temp:39.5,projects:2,badges:2,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80`}].map(e=>{let t=er(e.temp);return(0,x.jsxs)(`div`,{className:`leaderboard-item`,children:[(0,x.jsx)(`div`,{className:`rank-badge rank-${e.rank}`,children:e.rank===1?`🥇`:e.rank===2?`🥈`:e.rank===3?`🥉`:e.rank}),(0,x.jsx)(`img`,{src:e.avatar,alt:e.name,className:`maker-avatar`,onError:e=>{e.target.src=`https://api.dicebear.com/7.x/bottts/svg?seed=fallback`}}),(0,x.jsxs)(`div`,{className:`maker-details`,children:[(0,x.jsx)(`span`,{className:`maker-name`,children:e.name}),(0,x.jsxs)(`span`,{className:`maker-level-title`,children:[t.title,` · 프로젝트 `,e.projects,`개`]})]}),(0,x.jsxs)(`div`,{className:`maker-temp-box`,children:[(0,x.jsx)($e,{size:14,color:`#EA580C`}),(0,x.jsxs)(`span`,{children:[e.temp.toFixed(1),`℃`]})]})]},e.rank)})})]})]}),(0,x.jsx)(`style`,{children:`
        .stats-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem;
        }

        .stats-header {
          margin-bottom: 1.5rem;
        }

        .page-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.35rem;
        }

        .page-desc {
          color: var(--text-muted, #64748B);
          font-size: 0.95rem;
        }

        .summary-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .summary-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .summary-icon {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .summary-data {
          display: flex;
          flex-direction: column;
        }

        .data-val {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .data-lbl {
          font-size: 0.8rem;
          color: var(--text-muted, #64748B);
        }

        .heatmap-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 14px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .heatmap-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .heatmap-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .heatmap-title {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
        }

        .heatmap-legend {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .legend-text {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
        }

        .legend-cell {
          width: 12px;
          height: 12px;
          border-radius: 2px;
        }

        .heatmap-grid-container {
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .heatmap-grid {
          display: grid;
          grid-template-rows: repeat(7, 14px);
          grid-auto-flow: column;
          grid-auto-columns: 14px;
          gap: 4px;
          width: fit-content;
        }

        .heatmap-cell {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        .heatmap-cell:hover {
          transform: scale(1.3);
          outline: 1px solid var(--text-main, #334155);
        }

        .level-0 { background: #F1F5F9; }
        .level-1 { background: #FFD8BE; }
        .level-2 { background: #FFAA7A; }
        .level-3 { background: #FF6F0F; }
        .level-4 { background: #C2410C; }

        .selected-cell-info {
          margin-top: 1rem;
          padding: 0.6rem 0.9rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--text-main, #334155);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stats-bottom-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .breakdown-card, .leaderboard-card {
          background: var(--bg-card, #FFFFFF);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 14px;
          padding: 1.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }

        .card-heading {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-main, #1E293B);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .category-bars-list {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .bar-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main, #334155);
        }

        .bar-val {
          font-weight: 700;
          color: var(--primary, #FF6F0F);
        }

        .bar-track {
          height: 8px;
          background: var(--bg-sub, #F1F5F9);
          border-radius: 4px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .leaderboard-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.8rem;
          background: var(--bg-sub, #F8FAFC);
          border: 1px solid var(--border, #E2E8F0);
          border-radius: 10px;
        }

        .rank-badge {
          font-size: 0.95rem;
          font-weight: 800;
          min-width: 24px;
          text-align: center;
        }

        .maker-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
        }

        .maker-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .maker-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-main, #1E293B);
        }

        .maker-level-title {
          font-size: 0.75rem;
          color: var(--text-muted, #64748B);
        }

        .maker-temp-box {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          font-size: 0.85rem;
          font-weight: 800;
          color: #EA580C;
          background: #FFF2E8;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }

        @media (max-width: 1024px) {
          .summary-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .stats-bottom-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .summary-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Ca(){let[e,t]=(0,v.useState)(`dashboard`),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(!1),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(null),{currentUser:u}=w(),d=e=>{t(e),window.scrollTo({top:0,left:0,behavior:`instant`})},f=e=>{l(e),d(`chat`)};return(0,x.jsxs)(`div`,{className:`app-container`,children:[(0,x.jsx)(or,{activeTab:e,setActiveTab:d,onOpenAuthModal:()=>r(!0),onOpenNewProjectModal:()=>a(!0),onOpenProfileModal:()=>s(!0)}),(0,x.jsxs)(`main`,{className:`main-content`,children:[e===`dashboard`&&(0,x.jsx)(sr,{setActiveTab:d,onOpenNewProject:()=>a(!0)}),e===`workspace`&&(0,x.jsx)(cr,{onOpenNewProject:()=>a(!0)}),e===`tools`&&(0,x.jsx)(ta,{}),e===`gerber`&&(0,x.jsx)(ia,{}),e===`market`&&(0,x.jsx)(z,{onNavigateToChat:f}),e===`equipment`&&(0,x.jsx)(B,{onNavigateToChat:f}),e===`calendar`&&(0,x.jsx)(lr,{}),e===`board`&&(0,x.jsx)(ur,{}),e===`chat`&&(0,x.jsx)(ea,{initialDmUserId:c}),e===`challenge`&&(0,x.jsx)(da,{}),e===`bom`&&(0,x.jsx)(fa,{}),e===`notepad`&&(0,x.jsx)(ha,{}),e===`orders`&&(0,x.jsx)(va,{}),e===`wiki`&&(0,x.jsx)(ba,{}),e===`mentoring`&&(0,x.jsx)(xa,{onNavigateToChat:f}),e===`stats`&&(0,x.jsx)(Sa,{}),e===`admin`&&(u?.role===`admin`?(0,x.jsx)(oa,{onNavigateToBoard:()=>d(`board`)}):(0,x.jsxs)(`div`,{className:`empty-state-box`,children:[(0,x.jsx)(`div`,{className:`empty-icon`,children:`🔒`}),(0,x.jsx)(`h3`,{children:`관리자(운영진) 전용 페이지입니다`}),(0,x.jsxs)(`p`,{children:[`우측 상단의 '계정 전환' 버튼을 눌러 `,(0,x.jsx)(`strong`,{children:`당근마스터 (운영진)`}),` 계정으로 전환해주세요.`]}),(0,x.jsx)(`button`,{className:`btn-primary`,style:{marginTop:`1rem`},onClick:()=>r(!0),children:`운영진 계정으로 전환하기`})]}))]}),(0,x.jsx)(`footer`,{className:`footer-bar`,children:(0,x.jsxs)(`div`,{className:`footer-content`,children:[(0,x.jsxs)(`div`,{className:`footer-left`,children:[(0,x.jsx)(`span`,{className:`footer-logo`,children:`🥕 당근 PCB 메이커스`}),(0,x.jsx)(`p`,{className:`footer-desc`,children:`당근마켓 이웃들과 함께하는 오픈 하드웨어 & 회로 설계 자작 커뮤니티 플랫폼`})]}),(0,x.jsxs)(`div`,{className:`footer-links`,children:[(0,x.jsx)(`button`,{onClick:()=>t(`dashboard`),children:`홈`}),(0,x.jsx)(`button`,{onClick:()=>t(`workspace`),children:`작업실`}),(0,x.jsx)(`button`,{onClick:()=>t(`tools`),children:`설계 계산기`}),(0,x.jsx)(`button`,{onClick:()=>t(`gerber`),children:`거버 뷰어`}),(0,x.jsx)(`button`,{onClick:()=>t(`notepad`),children:`회로 스케치`}),(0,x.jsx)(`button`,{onClick:()=>t(`bom`),children:`BOM 관리`}),(0,x.jsx)(`button`,{onClick:()=>t(`orders`),children:`발주 트래커`}),(0,x.jsx)(`button`,{onClick:()=>t(`market`),children:`나눔 & 공구`}),(0,x.jsx)(`button`,{onClick:()=>t(`equipment`),children:`공유 장비`}),(0,x.jsx)(`button`,{onClick:()=>t(`calendar`),children:`모임 일정`}),(0,x.jsx)(`button`,{onClick:()=>t(`board`),children:`커뮤니티`}),(0,x.jsx)(`button`,{onClick:()=>t(`chat`),children:`실시간 채팅`}),(0,x.jsx)(`button`,{onClick:()=>t(`challenge`),children:`챌린지`}),(0,x.jsx)(`button`,{onClick:()=>t(`wiki`),children:`지식 위키`}),(0,x.jsx)(`button`,{onClick:()=>t(`mentoring`),children:`멘토링`}),(0,x.jsx)(`button`,{onClick:()=>t(`stats`),children:`활동 통계`}),(0,x.jsx)(`button`,{onClick:()=>r(!0),children:`계정 전환 / 등록`})]}),(0,x.jsx)(`div`,{className:`footer-copy`,children:`© 2026 Carrot PCB Makers Club. All rights reserved. Designed for local hardware enthusiasts.`})]})}),(0,x.jsx)(sa,{isOpen:n,onClose:()=>r(!1)}),(0,x.jsx)(ca,{isOpen:i,onClose:()=>a(!1),onProjectCreated:e=>{d(`workspace`)}}),(0,x.jsx)(aa,{isOpen:o,onClose:()=>s(!1)}),(0,x.jsx)(`style`,{children:`
        .footer-bar {
          background: #FFFFFF;
          border-top: 1px solid var(--border);
          margin-top: auto;
          padding: 2.5rem 1.5rem;
        }
        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }
        .footer-logo {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0F172A;
        }
        .footer-desc {
          font-size: 0.85rem;
          color: #64748B;
          margin-top: 0.25rem;
        }
        .footer-links {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-links button {
          font-size: 0.85rem;
          color: #475569;
          font-weight: 600;
        }
        .footer-links button:hover {
          color: var(--primary);
        }
        .footer-copy {
          font-size: 0.75rem;
          color: #94A3B8;
        }
      `})]})}function wa(){return(0,x.jsx)(C,{children:(0,x.jsx)(Ca,{})})}var Ta=`carrot_pcb_store_v1`;function Ea(){try{let e=localStorage.getItem(Ta);if(e){let t=JSON.parse(e);if(t.marketItems||=JSON.parse(JSON.stringify(tr.marketItems||[])),t.sharedEquipment||=JSON.parse(JSON.stringify(tr.sharedEquipment||[])),t.posts&&!t.posts.some(e=>e.id===`post_sos_1`)){let e=tr.posts.find(e=>e.id===`post_sos_1`);e&&t.posts.unshift(JSON.parse(JSON.stringify(e)))}return t.users&&t.users.forEach(e=>{if(e.solderingTemp===void 0){let t=tr.users.find(t=>t.id===e.id);e.solderingTemp=t?.solderingTemp||36.5,e.badges=t?.badges||[`sprout_maker`]}}),t.notifications||=JSON.parse(JSON.stringify(tr.notifications||[])),t.challenges||=JSON.parse(JSON.stringify(tr.challenges||[])),t.bomItems||=JSON.parse(JSON.stringify(tr.bomItems||[])),t.partsDatabase||=JSON.parse(JSON.stringify(tr.partsDatabase||[])),t.orders||=JSON.parse(JSON.stringify(tr.orders||[])),t.wikiArticles||=JSON.parse(JSON.stringify(tr.wikiArticles||[])),t.mentoringSessions||=JSON.parse(JSON.stringify(tr.mentoringSessions||[])),t}}catch(e){console.warn(`Failed to parse localStorage store:`,e)}let e=JSON.parse(JSON.stringify(tr));try{localStorage.setItem(Ta,JSON.stringify(e))}catch(e){console.warn(`LocalStorage not available:`,e)}return e}function V(e){try{localStorage.setItem(Ta,JSON.stringify(e))}catch(e){console.warn(`Failed to save to localStorage:`,e)}}function Da(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>t(r.result),r.onerror=n,r.readAsDataURL(e)})}var Oa=typeof window<`u`&&(window.location.hostname.includes(`github.io`)||window.location.protocol===`file:`||window.__USE_MOCK_API__===!0);function ka(){if(typeof window>`u`)return;let e=window.fetch;window.fetch=async function(t,n={}){let r=typeof t==`string`?t:t?.url||``;if(!r.includes(`/api/`))return e(t,n);if(!Oa)try{let r=await e(t,n);if(r.status!==404&&r.status!==502&&r.status!==503)return r}catch(e){console.warn(`Backend unavailable, falling back to client mock store:`,e.message)}let i=new URL(r,window.location.origin),a=i.pathname,o=Object.fromEntries(i.searchParams.entries()),s=(n.method||`GET`).toUpperCase(),c=null;if(n.body){if(typeof n.body==`string`)try{c=JSON.parse(n.body)}catch{c=n.body}else c=n.body}let l=Ea(),u=(e,t=200)=>new Response(JSON.stringify(e),{status:t,headers:{"Content-Type":`application/json`}});if(a===`/api/upload`&&s===`POST`)try{let e=null;return c instanceof FormData&&(e=c.get(`file`)),u(e&&typeof e!=`string`?{url:await Da(e),filename:e.name,originalName:e.name}:{url:`https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80`})}catch(e){return u({error:e.message},500)}if(a===`/api/users`&&s===`GET`)return u(l.users.map(({password:e,...t})=>t));if(a===`/api/auth/login`&&s===`POST`){let{username:e,password:t}=c||{},n=l.users.find(t=>t.username===e);if(!n||n.password!==t)return u({error:`아이디 또는 비밀번호가 일치하지 않습니다.`},401);if(n.role===`suspended`)return u({error:`이용이 정지된 회원 계정입니다.`},403);let{password:r,...i}=n;return u(i)}if(a===`/api/auth/register`&&s===`POST`){let{username:e,password:t,name:n,bio:r,tags:i,avatar:a}=c||{};if(l.users.some(t=>t.username===e))return u({error:`이미 사용 중인 아이디입니다.`},409);let o={id:`usr_${Date.now()}`,username:e,password:t,name:n,avatar:a||`https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(e)}`,role:`member`,bio:r||`당근 PCB 모임 새싹 회원입니다 🌱`,tags:i&&i.length?i:[`새싹회원`,`PCB입문`],createdAt:new Date().toISOString()};l.users.push(o),V(l);let{password:s,...d}=o;return u(d,201)}let d=a.match(/^\/api\/users\/([^/]+)$/);if(d&&s===`PUT`){let e=d[1],t=l.users.findIndex(t=>t.id===e);return t===-1?u({error:`회원을 찾을 수 없습니다.`},404):(l.users[t]={...l.users[t],...c},delete l.users[t].password,V(l),u(l.users[t]))}if(a===`/api/stats`&&s===`GET`)return u({totalMembers:l.users.length,totalProjects:l.projects.length,publicProjects:l.projects.filter(e=>e.isPublic).length,totalPosts:l.posts.length,upcomingEvents:l.events.length});if(a===`/api/projects`&&s===`GET`){let e=l.projects;return o.publicOnly===`true`?e=e.filter(e=>e.isPublic):o.userId&&(e=e.filter(e=>e.userId===o.userId||e.isPublic)),u(e)}if(a===`/api/projects`&&s===`POST`){let e={id:`prj_${Date.now()}`,...c,likes:0,likedUsers:[],comments:[],createdAt:new Date().toISOString()};return l.projects.unshift(e),V(l),u(e,201)}let f=a.match(/^\/api\/projects\/([^/]+)$/);if(f){let e=f[1],t=l.projects.findIndex(t=>t.id===e);if(t===-1)return u({error:`Not found`},404);if(s===`GET`)return u(l.projects[t]);if(s===`PUT`)return l.projects[t]={...l.projects[t],...c},V(l),u(l.projects[t]);if(s===`DELETE`)return l.projects.splice(t,1),V(l),u({message:`Deleted`,id:e})}let p=a.match(/^\/api\/projects\/([^/]+)\/like$/);if(p&&s===`POST`){let e=p[1],t=l.projects.find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n=c?.userId,r=t.likedUsers.indexOf(n);return r===-1?(t.likedUsers.push(n),t.likes+=1):(t.likedUsers.splice(r,1),t.likes=Math.max(0,t.likes-1)),V(l),u({likes:t.likes,likedUsers:t.likedUsers})}let m=a.match(/^\/api\/projects\/([^/]+)\/comments$/);if(m&&s===`POST`){let e=m[1],t=l.projects.find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n={id:`cmt_${Date.now()}`,userId:c.userId,userName:c.userName,userAvatar:c.userAvatar,text:c.text,createdAt:new Date().toISOString()};return t.comments.push(n),V(l),u(n,201)}if(a===`/api/posts`&&s===`GET`){let e=l.posts;if(o.boardType&&(e=e.filter(e=>e.boardType===o.boardType)),o.search){let t=o.search.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.content.toLowerCase().includes(t))}return u(e)}if(a===`/api/posts`&&s===`POST`){let e={id:`post_${Date.now()}`,...c,views:0,likes:0,likedUsers:[],comments:[],createdAt:new Date().toISOString()};return e.boardType===`secret`&&(e.authorName=`익명의 납땜러`,e.authorAvatar=`https://api.dicebear.com/7.x/identicon/svg?seed=secret`),l.posts.unshift(e),V(l),u(e,201)}let h=a.match(/^\/api\/posts\/([^/]+)$/);if(h){let e=h[1],t=l.posts.findIndex(t=>t.id===e);if(t===-1)return u({error:`Not found`},404);if(s===`GET`)return l.posts[t].views=(l.posts[t].views||0)+1,V(l),u(l.posts[t]);if(s===`PUT`)return l.posts[t]={...l.posts[t],...c},V(l),u(l.posts[t]);if(s===`DELETE`)return l.posts.splice(t,1),V(l),u({message:`Deleted`,id:e})}let g=a.match(/^\/api\/posts\/([^/]+)\/like$/);if(g&&s===`POST`){let e=g[1],t=l.posts.find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n=c?.userId,r=t.likedUsers.indexOf(n);return r===-1?(t.likedUsers.push(n),t.likes=(t.likes||0)+1):(t.likedUsers.splice(r,1),t.likes=Math.max(0,(t.likes||0)-1)),V(l),u({likes:t.likes,likedUsers:t.likedUsers})}let _=a.match(/^\/api\/posts\/([^/]+)\/comments$/);if(_&&s===`POST`){let e=_[1],t=l.posts.find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n=c.isAnonymous||t.boardType===`secret`,r={id:`cmt_${Date.now()}`,userId:c.userId,userName:n?`익명의 메이커`:c.userName,userAvatar:n?`https://api.dicebear.com/7.x/identicon/svg?seed=cmt`:c.userAvatar,text:c.text,createdAt:new Date().toISOString()};return t.comments.push(r),V(l),u(r,201)}if(a===`/api/events`&&s===`GET`)return u(l.events);if(a===`/api/events`&&s===`POST`){let e={id:`evt_${Date.now()}`,...c,maxAttendees:Number(c.maxAttendees)||20,attendees:[],status:`모집중`};return l.events.unshift(e),V(l),u(e,201)}let v=a.match(/^\/api\/events\/([^/]+)\/rsvp$/);if(v&&s===`POST`){let e=v[1],t=l.events.find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n=c?.userId,r=t.attendees.indexOf(n);if(r===-1){if(t.attendees.length>=t.maxAttendees)return u({error:`정원이 마감되었습니다.`},400);t.attendees.push(n)}else t.attendees.splice(r,1);return V(l),u(t)}if(a===`/api/channels`&&s===`GET`)return u(l.chatChannels||[]);let y=a.match(/^\/api\/dm\/([^/]+)\/([^/]+)$/);if(y&&s===`GET`){let[,e,t]=y,n=(l.directMessages||[]).find(n=>n.user1Id===e&&n.user2Id===t||n.user1Id===t&&n.user2Id===e);return n||(n={id:`dm_${e}_${t}`,user1Id:e,user2Id:t,messages:[]},l.directMessages=l.directMessages||[],l.directMessages.push(n),V(l)),u(n)}let b=a.match(/^\/api\/posts\/([^/]+)\/accept-solution$/);if(b&&s===`POST`){let e=b[1],t=l.posts.find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let{commentId:n}=c||{},r=(t.comments||[]).find(e=>e.id===n);if(!r)return u({error:`Comment not found`},404);if(t.isResolved=!0,t.acceptedCommentId=n,r.isAccepted=!0,r.userId){let e=l.users.find(e=>e.id===r.userId);e&&(e.solderingTemp=Math.min(99.9,Number(((e.solderingTemp||36.5)+1.5).toFixed(1))),e.badges=e.badges||[],e.badges.includes(`sos_detective`)||e.badges.push(`sos_detective`))}return V(l),u(t)}if(a===`/api/market`&&s===`GET`){let e=l.marketItems||[];if(o.type&&o.type!==`all`&&(e=e.filter(e=>e.type===o.type)),o.category&&o.category!==`all`&&(e=e.filter(e=>e.category===o.category)),o.status&&o.status!==`all`&&(e=e.filter(e=>e.status===o.status)),o.search){let t=o.search.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t))}return u(e)}if(a===`/api/market`&&s===`POST`){let e={id:`mkt_${Date.now()}`,...c,currentCount:1,participants:[c.authorId],status:`recruiting`,createdAt:new Date().toISOString()};l.marketItems=l.marketItems||[],l.marketItems.unshift(e);let t=l.users.find(e=>e.id===c.authorId);return t&&(t.solderingTemp=Math.min(99.9,Number(((t.solderingTemp||36.5)+.5).toFixed(1))),e.type===`group_buy`&&(t.badges=t.badges||[],t.badges.includes(`group_buy_lead`)||t.badges.push(`group_buy_lead`))),V(l),u(e,201)}let x=a.match(/^\/api\/market\/([^/]+)\/join$/);if(x&&s===`POST`){let e=x[1],t=(l.marketItems||[]).find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n=c?.userId;t.participants=t.participants||[];let r=t.participants.indexOf(n);if(r===-1){if(t.currentCount>=t.targetCount)return u({error:`모집 인원이 마감되었습니다.`},400);t.participants.push(n),t.currentCount=t.participants.length,t.currentCount>=t.targetCount&&(t.status=`completed`)}else t.participants.splice(r,1),t.currentCount=t.participants.length,t.currentCount<t.targetCount&&(t.status=`recruiting`);return V(l),u(t)}if(a===`/api/equipment`&&s===`GET`){let e=l.sharedEquipment||[];if(o.category&&o.category!==`all`&&(e=e.filter(e=>e.category===o.category)),o.search){let t=o.search.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.specs.toLowerCase().includes(t)||e.location.toLowerCase().includes(t))}return u(e)}if(a===`/api/equipment`&&s===`POST`){let e={id:`eq_${Date.now()}`,...c,status:`available`,createdAt:new Date().toISOString()};l.sharedEquipment=l.sharedEquipment||[],l.sharedEquipment.unshift(e);let t=l.users.find(e=>e.id===c.ownerId);return t&&(t.solderingTemp=Math.min(99.9,Number(((t.solderingTemp||36.5)+.8).toFixed(1)))),V(l),u(e,201)}if(a===`/api/notifications`&&s===`GET`){let e=o.userId,t=l.notifications||[];return e&&(t=t.filter(t=>t.userId===e)),t.sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)),u(t)}if(a===`/api/notifications/read-all`&&s===`PUT`){let e=c?.userId;return(l.notifications||[]).forEach(t=>{t.userId===e&&(t.isRead=!0)}),V(l),u({message:`All read`})}let S=a.match(/^\/api\/notifications\/([^/]+)\/read$/);if(S&&s===`PUT`){let e=S[1],t=(l.notifications||[]).find(t=>t.id===e);return t&&(t.isRead=!0,V(l)),u({message:`Read`})}if(a===`/api/challenges`&&s===`GET`)return u(l.challenges||[]);if(a===`/api/challenges`&&s===`POST`){let e={id:`chal_${Date.now()}`,...c,submissions:[],createdAt:new Date().toISOString()};return l.challenges=l.challenges||[],l.challenges.unshift(e),V(l),u(e,201)}let C=a.match(/^\/api\/challenges\/([^/]+)\/submit$/);if(C&&s===`POST`){let e=C[1],t=(l.challenges||[]).find(t=>t.id===e);if(!t)return u({error:`Not found`},404);let n={id:`sub_${Date.now()}`,...c,votes:0,votedUsers:[],createdAt:new Date().toISOString()};return t.submissions.push(n),V(l),u(n,201)}let w=a.match(/^\/api\/challenges\/([^/]+)\/vote\/([^/]+)$/);if(w&&s===`POST`){let[,e,t]=w,n=(l.challenges||[]).find(t=>t.id===e);if(!n)return u({error:`Not found`},404);let r=n.submissions.find(e=>e.id===t);if(!r)return u({error:`Submission not found`},404);let i=c?.userId,a=r.votedUsers.indexOf(i);return a===-1?(r.votedUsers.push(i),r.votes+=1):(r.votedUsers.splice(a,1),r.votes=Math.max(0,r.votes-1)),V(l),u(r)}if(a===`/api/bom`&&s===`GET`){let e=l.bomItems||[];return o.userId&&(e=e.filter(e=>e.userId===o.userId)),o.projectId&&(e=e.filter(e=>e.projectId===o.projectId)),u(e)}if(a===`/api/bom`&&s===`POST`){let e={id:`bom_${Date.now()}`,...c,createdAt:new Date().toISOString()};return l.bomItems=l.bomItems||[],l.bomItems.unshift(e),V(l),u(e,201)}let T=a.match(/^\/api\/bom\/([^/]+)$/);if(T){let e=T[1],t=(l.bomItems||[]).findIndex(t=>t.id===e);if(t===-1)return u({error:`Not found`},404);if(s===`PUT`)return l.bomItems[t]={...l.bomItems[t],...c},V(l),u(l.bomItems[t]);if(s===`DELETE`)return l.bomItems.splice(t,1),V(l),u({message:`Deleted`})}if(a===`/api/parts/search`&&s===`GET`){let e=l.partsDatabase||[],t=e;if(o.q){let n=o.q.toLowerCase();t=e.filter(e=>e.partNumber.toLowerCase().includes(n)||e.name.toLowerCase().includes(n))}return o.category&&o.category!==`all`&&(t=t.filter(e=>e.category===o.category)),u(t)}if(a===`/api/orders`&&s===`GET`){let e=l.orders||[];return o.userId&&(e=e.filter(e=>e.userId===o.userId)),o.status&&o.status!==`all`&&(e=e.filter(e=>e.status===o.status)),u(e)}if(a===`/api/orders`&&s===`POST`){let e={id:`ord_${Date.now()}`,...c,orderedAt:c.orderedAt||new Date().toISOString().split(`T`)[0]};return l.orders=l.orders||[],l.orders.unshift(e),V(l),u(e,201)}let E=a.match(/^\/api\/orders\/([^/]+)$/);if(E){let e=E[1],t=(l.orders||[]).findIndex(t=>t.id===e);if(t===-1)return u({error:`Order not found`},404);if(s===`PUT`)return l.orders[t]={...l.orders[t],...c},V(l),u(l.orders[t]);if(s===`DELETE`)return l.orders.splice(t,1),V(l),u({message:`Order deleted`})}if(a===`/api/wiki`&&s===`GET`){let e=l.wikiArticles||[];if(o.category&&o.category!==`all`&&(e=e.filter(e=>e.category===o.category)),o.search){let t=o.search.toLowerCase();e=e.filter(e=>e.title.toLowerCase().includes(t)||e.content.toLowerCase().includes(t)||e.tags&&e.tags.some(e=>e.toLowerCase().includes(t)))}return u(e)}if(a===`/api/wiki`&&s===`POST`){let e={id:`wiki_${Date.now()}`,views:1,likes:0,updatedAt:new Date().toISOString().split(`T`)[0],...c};return l.wikiArticles=l.wikiArticles||[],l.wikiArticles.unshift(e),V(l),u(e,201)}let D=a.match(/^\/api\/wiki\/([^/]+)$/);if(D){let e=D[1],t=(l.wikiArticles||[]).findIndex(t=>t.id===e);if(t===-1)return u({error:`Article not found`},404);if(s===`PUT`)return l.wikiArticles[t]={...l.wikiArticles[t],...c,updatedAt:new Date().toISOString().split(`T`)[0]},V(l),u(l.wikiArticles[t])}if(a===`/api/mentoring`&&s===`GET`)return u(l.mentoringSessions||[]);if(a===`/api/mentoring`&&s===`POST`){let e={id:`mentor_${Date.now()}`,status:`recruiting`,sessionsCount:0,createdAt:new Date().toISOString().split(`T`)[0],...c};return l.mentoringSessions=l.mentoringSessions||[],l.mentoringSessions.unshift(e),V(l),u(e,201)}let O=a.match(/^\/api\/mentoring\/([^/]+)$/);if(O){let e=O[1],t=(l.mentoringSessions||[]).findIndex(t=>t.id===e);if(t===-1)return u({error:`Session not found`},404);if(s===`PUT`)return l.mentoringSessions[t]={...l.mentoringSessions[t],...c},V(l),u(l.mentoringSessions[t])}return u({message:`OK`})}}ka(),(0,y.createRoot)(document.getElementById(`root`)).render((0,x.jsx)(v.StrictMode,{children:(0,x.jsx)(wa,{})}));