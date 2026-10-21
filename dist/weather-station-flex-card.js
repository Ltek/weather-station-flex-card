/* weather-station-flex-card 2026.10.21.16 — https://github.com/Ltek/weather-station-flex-card */
var ZV=Object.create;var T6=Object.defineProperty;var ji=Object.getOwnPropertyDescriptor;var kV=Object.getOwnPropertyNames;var OV=Object.getPrototypeOf,TV=Object.prototype.hasOwnProperty;var PV=(r,t,e)=>t in r?T6(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Gi=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var EV=(r,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of kV(t))!TV.call(r,o)&&o!==e&&T6(r,o,{get:()=>t[o],enumerable:!(i=ji(t,o))||i.enumerable});return r};var _4=(r,t,e)=>(e=r!=null?ZV(OV(r)):{},EV(t||!r||!r.__esModule?T6(e,"default",{value:r,enumerable:!0}):e,r));var Q=(r,t,e,i)=>{for(var o=i>1?void 0:i?ji(t,e):t,a=r.length-1,n;a>=0;a--)(n=r[a])&&(o=(i?n(t,e,o):n(o))||o);return i&&o&&T6(t,e,o),o};var z=(r,t,e)=>PV(r,typeof t!="symbol"?t+"":t,e);var U4=Gi((Va,xe)=>{(function(){"use strict";var r=Math.PI,t=Math.sin,e=Math.cos,i=Math.tan,o=Math.asin,a=Math.atan2,n=Math.acos,s=r/180,V=1e3*60*60*24,c=2440588,p=2451545;function h(U){return U.valueOf()/V-.5+c}function v(U){return new Date((U+.5-c)*V)}function g(U){return h(U)-p}var y=s*23.4397;function O(U,r1){return a(t(U)*e(y)-i(r1)*t(y),e(U))}function k(U,r1){return o(t(r1)*e(y)+e(r1)*t(y)*t(U))}function T(U,r1,H1){return a(t(U),e(U)*t(r1)-i(H1)*e(r1))}function F(U,r1,H1){return o(t(r1)*t(H1)+e(r1)*e(H1)*e(U))}function R(U,r1){return s*(280.16+360.9856235*U)-r1}function K(U){return U<0&&(U=0),2967e-7/Math.tan(U+.00312536/(U+.08901179))}function G(U){return s*(357.5291+.98560028*U)}function L1(U){var r1=s*(1.9148*t(U)+.02*t(2*U)+3e-4*t(3*U)),H1=s*102.9372;return U+r1+H1+r}function X(U){var r1=G(U),H1=L1(r1);return{dec:k(H1,0),ra:O(H1,0)}}var e1={};e1.getPosition=function(U,r1,H1){var h1=s*-H1,s1=s*r1,V1=g(U),g1=X(V1),k1=R(V1,h1)-g1.ra;return{azimuth:T(k1,s1,g1.dec),altitude:F(k1,s1,g1.dec)}};var o1=e1.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];e1.addTime=function(U,r1,H1){o1.push([U,r1,H1])};var m1=9e-4;function W1(U,r1){return Math.round(U-m1-r1/(2*r))}function y1(U,r1,H1){return m1+(U+r1)/(2*r)+H1}function L2(U,r1,H1){return p+U+.0053*t(r1)-.0069*t(2*H1)}function Y1(U,r1,H1){return n((t(U)-t(r1)*t(H1))/(e(r1)*e(H1)))}function Z1(U){return-2.076*Math.sqrt(U)/60}function J(U,r1,H1,h1,s1,V1,g1){var k1=Y1(U,H1,h1),u2=y1(k1,r1,s1);return L2(u2,V1,g1)}e1.getTimes=function(U,r1,H1,h1){h1=h1||0;var s1=s*-H1,V1=s*r1,g1=Z1(h1),k1=g(U),u2=W1(k1,s1),x2=y1(0,s1,u2),E2=G(x2),l2=L1(E2),c1=k(l2,0),o5=L2(x2,E2,l2),q2,x5,F2,g2,l5,c5,t2={solarNoon:v(o5),nadir:v(o5-.5)};for(q2=0,x5=o1.length;q2<x5;q2+=1)F2=o1[q2],g2=(F2[0]+g1)*s,l5=J(g2,s1,V1,c1,u2,E2,l2),c5=o5-(l5-o5),t2[F2[1]]=v(c5),t2[F2[2]]=v(l5);return t2};function Q1(U){var r1=s*(218.316+13.176396*U),H1=s*(134.963+13.064993*U),h1=s*(93.272+13.22935*U),s1=r1+s*6.289*t(H1),V1=s*5.128*t(h1),g1=385001-20905*e(H1);return{ra:O(s1,V1),dec:k(s1,V1),dist:g1}}e1.getMoonPosition=function(U,r1,H1){var h1=s*-H1,s1=s*r1,V1=g(U),g1=Q1(V1),k1=R(V1,h1)-g1.ra,u2=F(k1,s1,g1.dec),x2=a(t(k1),i(s1)*e(g1.dec)-t(g1.dec)*e(k1));return u2=u2+K(u2),{azimuth:T(k1,s1,g1.dec),altitude:u2,distance:g1.dist,parallacticAngle:x2}},e1.getMoonIllumination=function(U){var r1=g(U||new Date),H1=X(r1),h1=Q1(r1),s1=149598e3,V1=n(t(H1.dec)*t(h1.dec)+e(H1.dec)*e(h1.dec)*e(H1.ra-h1.ra)),g1=a(s1*t(V1),h1.dist-s1*e(V1)),k1=a(e(H1.dec)*t(H1.ra-h1.ra),t(H1.dec)*e(h1.dec)-e(H1.dec)*t(h1.dec)*e(H1.ra-h1.ra));return{fraction:(1+e(g1))/2,phase:.5+.5*g1*(k1<0?-1:1)/Math.PI,angle:k1}};function n1(U,r1){return new Date(U.valueOf()+r1*V/24)}e1.getMoonTimes=function(U,r1,H1,h1){var s1=new Date(U);h1?s1.setUTCHours(0,0,0,0):s1.setHours(0,0,0,0);for(var V1=.133*s,g1=e1.getMoonPosition(s1,r1,H1).altitude-V1,k1,u2,x2,E2,l2,c1,o5,q2,x5,F2,g2,l5,c5,t2=1;t2<=24&&(k1=e1.getMoonPosition(n1(s1,t2),r1,H1).altitude-V1,u2=e1.getMoonPosition(n1(s1,t2+1),r1,H1).altitude-V1,l2=(g1+u2)/2-k1,c1=(u2-g1)/2,o5=-c1/(2*l2),q2=(l2*o5+c1)*o5+k1,x5=c1*c1-4*l2*k1,F2=0,x5>=0&&(c5=Math.sqrt(x5)/(Math.abs(l2)*2),g2=o5-c5,l5=o5+c5,Math.abs(g2)<=1&&F2++,Math.abs(l5)<=1&&F2++,g2<-1&&(g2=l5)),F2===1?g1<0?x2=t2+g2:E2=t2+g2:F2===2&&(x2=t2+(q2<0?l5:g2),E2=t2+(q2<0?g2:l5)),!(x2&&E2));t2+=2)g1=u2;var _2={};return x2&&(_2.rise=n1(s1,x2)),E2&&(_2.set=n1(s1,E2)),!x2&&!E2&&(_2[q2>0?"alwaysUp":"alwaysDown"]=!0),_2},typeof Va=="object"&&typeof xe<"u"?xe.exports=e1:typeof define=="function"&&define.amd?define(e1):window.SunCalc=e1})()});var Es=Gi((Ot,Ps)=>{(function(r,t){typeof Ot=="object"&&typeof Ps<"u"?t(Ot):typeof define=="function"&&define.amd?define(["exports"],t):(r=typeof globalThis<"u"?globalThis:r||self,t(r.leaflet={}))})(Ot,(function(r){"use strict";var t="1.9.4";function e(C){var H,l,u,f;for(l=1,u=arguments.length;l<u;l++){f=arguments[l];for(H in f)C[H]=f[H]}return C}var i=Object.create||(function(){function C(){}return function(H){return C.prototype=H,new C}})();function o(C,H){var l=Array.prototype.slice;if(C.bind)return C.bind.apply(C,l.call(arguments,1));var u=l.call(arguments,2);return function(){return C.apply(H,u.length?u.concat(l.call(arguments)):arguments)}}var a=0;function n(C){return"_leaflet_id"in C||(C._leaflet_id=++a),C._leaflet_id}function s(C,H,l){var u,f,b,P;return P=function(){u=!1,f&&(b.apply(l,f),f=!1)},b=function(){u?f=arguments:(C.apply(l,arguments),setTimeout(P,H),u=!0)},b}function V(C,H,l){var u=H[1],f=H[0],b=u-f;return C===u&&l?C:((C-f)%b+b)%b+f}function c(){return!1}function p(C,H){if(H===!1)return C;var l=Math.pow(10,H===void 0?6:H);return Math.round(C*l)/l}function h(C){return C.trim?C.trim():C.replace(/^\s+|\s+$/g,"")}function v(C){return h(C).split(/\s+/)}function g(C,H){Object.prototype.hasOwnProperty.call(C,"options")||(C.options=C.options?i(C.options):{});for(var l in H)C.options[l]=H[l];return C.options}function y(C,H,l){var u=[];for(var f in C)u.push(encodeURIComponent(l?f.toUpperCase():f)+"="+encodeURIComponent(C[f]));return(!H||H.indexOf("?")===-1?"?":"&")+u.join("&")}var O=/\{ *([\w_ -]+) *\}/g;function k(C,H){return C.replace(O,function(l,u){var f=H[u];if(f===void 0)throw new Error("No value provided for variable "+l);return typeof f=="function"&&(f=f(H)),f})}var T=Array.isArray||function(C){return Object.prototype.toString.call(C)==="[object Array]"};function F(C,H){for(var l=0;l<C.length;l++)if(C[l]===H)return l;return-1}var R="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function K(C){return window["webkit"+C]||window["moz"+C]||window["ms"+C]}var G=0;function L1(C){var H=+new Date,l=Math.max(0,16-(H-G));return G=H+l,window.setTimeout(C,l)}var X=window.requestAnimationFrame||K("RequestAnimationFrame")||L1,e1=window.cancelAnimationFrame||K("CancelAnimationFrame")||K("CancelRequestAnimationFrame")||function(C){window.clearTimeout(C)};function o1(C,H,l){if(l&&X===L1)C.call(H);else return X.call(window,o(C,H))}function m1(C){C&&e1.call(window,C)}var W1={__proto__:null,extend:e,create:i,bind:o,get lastId(){return a},stamp:n,throttle:s,wrapNum:V,falseFn:c,formatNum:p,trim:h,splitWords:v,setOptions:g,getParamString:y,template:k,isArray:T,indexOf:F,emptyImageUrl:R,requestFn:X,cancelFn:e1,requestAnimFrame:o1,cancelAnimFrame:m1};function y1(){}y1.extend=function(C){var H=function(){g(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=H.__super__=this.prototype,u=i(l);u.constructor=H,H.prototype=u;for(var f in this)Object.prototype.hasOwnProperty.call(this,f)&&f!=="prototype"&&f!=="__super__"&&(H[f]=this[f]);return C.statics&&e(H,C.statics),C.includes&&(L2(C.includes),e.apply(null,[u].concat(C.includes))),e(u,C),delete u.statics,delete u.includes,u.options&&(u.options=l.options?i(l.options):{},e(u.options,C.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var b=0,P=u._initHooks.length;b<P;b++)u._initHooks[b].call(this)}},H},y1.include=function(C){var H=this.prototype.options;return e(this.prototype,C),C.options&&(this.prototype.options=H,this.mergeOptions(C.options)),this},y1.mergeOptions=function(C){return e(this.prototype.options,C),this},y1.addInitHook=function(C){var H=Array.prototype.slice.call(arguments,1),l=typeof C=="function"?C:function(){this[C].apply(this,H)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function L2(C){if(!(typeof L>"u"||!L||!L.Mixin)){C=T(C)?C:[C];for(var H=0;H<C.length;H++)C[H]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var Y1={on:function(C,H,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],H);else{C=v(C);for(var f=0,b=C.length;f<b;f++)this._on(C[f],H,l)}return this},off:function(C,H,l){if(!arguments.length)delete this._events;else if(typeof C=="object")for(var u in C)this._off(u,C[u],H);else{C=v(C);for(var f=arguments.length===1,b=0,P=C.length;b<P;b++)f?this._off(C[b]):this._off(C[b],H,l)}return this},_on:function(C,H,l,u){if(typeof H!="function"){console.warn("wrong listener type: "+typeof H);return}if(this._listens(C,H,l)===!1){l===this&&(l=void 0);var f={fn:H,ctx:l};u&&(f.once=!0),this._events=this._events||{},this._events[C]=this._events[C]||[],this._events[C].push(f)}},_off:function(C,H,l){var u,f,b;if(this._events&&(u=this._events[C],!!u)){if(arguments.length===1){if(this._firingCount)for(f=0,b=u.length;f<b;f++)u[f].fn=c;delete this._events[C];return}if(typeof H!="function"){console.warn("wrong listener type: "+typeof H);return}var P=this._listens(C,H,l);if(P!==!1){var $=u[P];this._firingCount&&($.fn=c,this._events[C]=u=u.slice()),u.splice(P,1)}}},fire:function(C,H,l){if(!this.listens(C,l))return this;var u=e({},H,{type:C,target:this,sourceTarget:H&&H.sourceTarget||this});if(this._events){var f=this._events[C];if(f){this._firingCount=this._firingCount+1||1;for(var b=0,P=f.length;b<P;b++){var $=f[b],I=$.fn;$.once&&this.off(C,I,$.ctx),I.call($.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(C,H,l,u){typeof C!="string"&&console.warn('"string" type argument expected');var f=H;typeof H!="function"&&(u=!!H,f=void 0,l=void 0);var b=this._events&&this._events[C];if(b&&b.length&&this._listens(C,f,l)!==!1)return!0;if(u){for(var P in this._eventParents)if(this._eventParents[P].listens(C,H,l,u))return!0}return!1},_listens:function(C,H,l){if(!this._events)return!1;var u=this._events[C]||[];if(!H)return!!u.length;l===this&&(l=void 0);for(var f=0,b=u.length;f<b;f++)if(u[f].fn===H&&u[f].ctx===l)return f;return!1},once:function(C,H,l){if(typeof C=="object")for(var u in C)this._on(u,C[u],H,!0);else{C=v(C);for(var f=0,b=C.length;f<b;f++)this._on(C[f],H,l,!0)}return this},addEventParent:function(C){return this._eventParents=this._eventParents||{},this._eventParents[n(C)]=C,this},removeEventParent:function(C){return this._eventParents&&delete this._eventParents[n(C)],this},_propagateEvent:function(C){for(var H in this._eventParents)this._eventParents[H].fire(C.type,e({layer:C.target,propagatedFrom:C.target},C),!0)}};Y1.addEventListener=Y1.on,Y1.removeEventListener=Y1.clearAllEventListeners=Y1.off,Y1.addOneTimeEventListener=Y1.once,Y1.fireEvent=Y1.fire,Y1.hasEventListeners=Y1.listens;var Z1=y1.extend(Y1);function J(C,H,l){this.x=l?Math.round(C):C,this.y=l?Math.round(H):H}var Q1=Math.trunc||function(C){return C>0?Math.floor(C):Math.ceil(C)};J.prototype={clone:function(){return new J(this.x,this.y)},add:function(C){return this.clone()._add(n1(C))},_add:function(C){return this.x+=C.x,this.y+=C.y,this},subtract:function(C){return this.clone()._subtract(n1(C))},_subtract:function(C){return this.x-=C.x,this.y-=C.y,this},divideBy:function(C){return this.clone()._divideBy(C)},_divideBy:function(C){return this.x/=C,this.y/=C,this},multiplyBy:function(C){return this.clone()._multiplyBy(C)},_multiplyBy:function(C){return this.x*=C,this.y*=C,this},scaleBy:function(C){return new J(this.x*C.x,this.y*C.y)},unscaleBy:function(C){return new J(this.x/C.x,this.y/C.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Q1(this.x),this.y=Q1(this.y),this},distanceTo:function(C){C=n1(C);var H=C.x-this.x,l=C.y-this.y;return Math.sqrt(H*H+l*l)},equals:function(C){return C=n1(C),C.x===this.x&&C.y===this.y},contains:function(C){return C=n1(C),Math.abs(C.x)<=Math.abs(this.x)&&Math.abs(C.y)<=Math.abs(this.y)},toString:function(){return"Point("+p(this.x)+", "+p(this.y)+")"}};function n1(C,H,l){return C instanceof J?C:T(C)?new J(C[0],C[1]):C==null?C:typeof C=="object"&&"x"in C&&"y"in C?new J(C.x,C.y):new J(C,H,l)}function U(C,H){if(C)for(var l=H?[C,H]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}U.prototype={extend:function(C){var H,l;if(!C)return this;if(C instanceof J||typeof C[0]=="number"||"x"in C)H=l=n1(C);else if(C=r1(C),H=C.min,l=C.max,!H||!l)return this;return!this.min&&!this.max?(this.min=H.clone(),this.max=l.clone()):(this.min.x=Math.min(H.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(H.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(C){return n1((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,C)},getBottomLeft:function(){return n1(this.min.x,this.max.y)},getTopRight:function(){return n1(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(C){var H,l;return typeof C[0]=="number"||C instanceof J?C=n1(C):C=r1(C),C instanceof U?(H=C.min,l=C.max):H=l=C,H.x>=this.min.x&&l.x<=this.max.x&&H.y>=this.min.y&&l.y<=this.max.y},intersects:function(C){C=r1(C);var H=this.min,l=this.max,u=C.min,f=C.max,b=f.x>=H.x&&u.x<=l.x,P=f.y>=H.y&&u.y<=l.y;return b&&P},overlaps:function(C){C=r1(C);var H=this.min,l=this.max,u=C.min,f=C.max,b=f.x>H.x&&u.x<l.x,P=f.y>H.y&&u.y<l.y;return b&&P},isValid:function(){return!!(this.min&&this.max)},pad:function(C){var H=this.min,l=this.max,u=Math.abs(H.x-l.x)*C,f=Math.abs(H.y-l.y)*C;return r1(n1(H.x-u,H.y-f),n1(l.x+u,l.y+f))},equals:function(C){return C?(C=r1(C),this.min.equals(C.getTopLeft())&&this.max.equals(C.getBottomRight())):!1}};function r1(C,H){return!C||C instanceof U?C:new U(C,H)}function H1(C,H){if(C)for(var l=H?[C,H]:C,u=0,f=l.length;u<f;u++)this.extend(l[u])}H1.prototype={extend:function(C){var H=this._southWest,l=this._northEast,u,f;if(C instanceof s1)u=C,f=C;else if(C instanceof H1){if(u=C._southWest,f=C._northEast,!u||!f)return this}else return C?this.extend(V1(C)||h1(C)):this;return!H&&!l?(this._southWest=new s1(u.lat,u.lng),this._northEast=new s1(f.lat,f.lng)):(H.lat=Math.min(u.lat,H.lat),H.lng=Math.min(u.lng,H.lng),l.lat=Math.max(f.lat,l.lat),l.lng=Math.max(f.lng,l.lng)),this},pad:function(C){var H=this._southWest,l=this._northEast,u=Math.abs(H.lat-l.lat)*C,f=Math.abs(H.lng-l.lng)*C;return new H1(new s1(H.lat-u,H.lng-f),new s1(l.lat+u,l.lng+f))},getCenter:function(){return new s1((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new s1(this.getNorth(),this.getWest())},getSouthEast:function(){return new s1(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(C){typeof C[0]=="number"||C instanceof s1||"lat"in C?C=V1(C):C=h1(C);var H=this._southWest,l=this._northEast,u,f;return C instanceof H1?(u=C.getSouthWest(),f=C.getNorthEast()):u=f=C,u.lat>=H.lat&&f.lat<=l.lat&&u.lng>=H.lng&&f.lng<=l.lng},intersects:function(C){C=h1(C);var H=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),b=f.lat>=H.lat&&u.lat<=l.lat,P=f.lng>=H.lng&&u.lng<=l.lng;return b&&P},overlaps:function(C){C=h1(C);var H=this._southWest,l=this._northEast,u=C.getSouthWest(),f=C.getNorthEast(),b=f.lat>H.lat&&u.lat<l.lat,P=f.lng>H.lng&&u.lng<l.lng;return b&&P},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(C,H){return C?(C=h1(C),this._southWest.equals(C.getSouthWest(),H)&&this._northEast.equals(C.getNorthEast(),H)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function h1(C,H){return C instanceof H1?C:new H1(C,H)}function s1(C,H,l){if(isNaN(C)||isNaN(H))throw new Error("Invalid LatLng object: ("+C+", "+H+")");this.lat=+C,this.lng=+H,l!==void 0&&(this.alt=+l)}s1.prototype={equals:function(C,H){if(!C)return!1;C=V1(C);var l=Math.max(Math.abs(this.lat-C.lat),Math.abs(this.lng-C.lng));return l<=(H===void 0?1e-9:H)},toString:function(C){return"LatLng("+p(this.lat,C)+", "+p(this.lng,C)+")"},distanceTo:function(C){return k1.distance(this,V1(C))},wrap:function(){return k1.wrapLatLng(this)},toBounds:function(C){var H=180*C/40075017,l=H/Math.cos(Math.PI/180*this.lat);return h1([this.lat-H,this.lng-l],[this.lat+H,this.lng+l])},clone:function(){return new s1(this.lat,this.lng,this.alt)}};function V1(C,H,l){return C instanceof s1?C:T(C)&&typeof C[0]!="object"?C.length===3?new s1(C[0],C[1],C[2]):C.length===2?new s1(C[0],C[1]):null:C==null?C:typeof C=="object"&&"lat"in C?new s1(C.lat,"lng"in C?C.lng:C.lon,C.alt):H===void 0?null:new s1(C,H,l)}var g1={latLngToPoint:function(C,H){var l=this.projection.project(C),u=this.scale(H);return this.transformation._transform(l,u)},pointToLatLng:function(C,H){var l=this.scale(H),u=this.transformation.untransform(C,l);return this.projection.unproject(u)},project:function(C){return this.projection.project(C)},unproject:function(C){return this.projection.unproject(C)},scale:function(C){return 256*Math.pow(2,C)},zoom:function(C){return Math.log(C/256)/Math.LN2},getProjectedBounds:function(C){if(this.infinite)return null;var H=this.projection.bounds,l=this.scale(C),u=this.transformation.transform(H.min,l),f=this.transformation.transform(H.max,l);return new U(u,f)},infinite:!1,wrapLatLng:function(C){var H=this.wrapLng?V(C.lng,this.wrapLng,!0):C.lng,l=this.wrapLat?V(C.lat,this.wrapLat,!0):C.lat,u=C.alt;return new s1(l,H,u)},wrapLatLngBounds:function(C){var H=C.getCenter(),l=this.wrapLatLng(H),u=H.lat-l.lat,f=H.lng-l.lng;if(u===0&&f===0)return C;var b=C.getSouthWest(),P=C.getNorthEast(),$=new s1(b.lat-u,b.lng-f),I=new s1(P.lat-u,P.lng-f);return new H1($,I)}},k1=e({},g1,{wrapLng:[-180,180],R:6371e3,distance:function(C,H){var l=Math.PI/180,u=C.lat*l,f=H.lat*l,b=Math.sin((H.lat-C.lat)*l/2),P=Math.sin((H.lng-C.lng)*l/2),$=b*b+Math.cos(u)*Math.cos(f)*P*P,I=2*Math.atan2(Math.sqrt($),Math.sqrt(1-$));return this.R*I}}),u2=6378137,x2={R:u2,MAX_LATITUDE:85.0511287798,project:function(C){var H=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,C.lat),-l),f=Math.sin(u*H);return new J(this.R*C.lng*H,this.R*Math.log((1+f)/(1-f))/2)},unproject:function(C){var H=180/Math.PI;return new s1((2*Math.atan(Math.exp(C.y/this.R))-Math.PI/2)*H,C.x*H/this.R)},bounds:(function(){var C=u2*Math.PI;return new U([-C,-C],[C,C])})()};function E2(C,H,l,u){if(T(C)){this._a=C[0],this._b=C[1],this._c=C[2],this._d=C[3];return}this._a=C,this._b=H,this._c=l,this._d=u}E2.prototype={transform:function(C,H){return this._transform(C.clone(),H)},_transform:function(C,H){return H=H||1,C.x=H*(this._a*C.x+this._b),C.y=H*(this._c*C.y+this._d),C},untransform:function(C,H){return H=H||1,new J((C.x/H-this._b)/this._a,(C.y/H-this._d)/this._c)}};function l2(C,H,l,u){return new E2(C,H,l,u)}var c1=e({},k1,{code:"EPSG:3857",projection:x2,transformation:(function(){var C=.5/(Math.PI*x2.R);return l2(C,.5,-C,.5)})()}),o5=e({},c1,{code:"EPSG:900913"});function q2(C){return document.createElementNS("http://www.w3.org/2000/svg",C)}function x5(C,H){var l="",u,f,b,P,$,I;for(u=0,b=C.length;u<b;u++){for($=C[u],f=0,P=$.length;f<P;f++)I=$[f],l+=(f?"L":"M")+I.x+" "+I.y;l+=H?u1.svg?"z":"x":""}return l||"M0 0"}var F2=document.documentElement.style,g2="ActiveXObject"in window,l5=g2&&!document.addEventListener,c5="msLaunchUri"in navigator&&!("documentMode"in document),t2=g5("webkit"),_2=g5("android"),G0=g5("android 2")||g5("android 3"),Rt=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Dt=_2&&g5("Google")&&Rt<537&&!("AudioNode"in window),M7=!!window.opera,Z3=!c5&&g5("chrome"),a6=g5("gecko")&&!t2&&!M7&&!g2,n6=!Z3&&g5("safari"),M4=g5("phantom"),H6="OTransition"in F2,s6=navigator.platform.indexOf("Win")===0,d7=g2&&"transition"in F2,p7="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!G0,q0="MozPerspective"in F2,V6=!window.L_DISABLE_3D&&(d7||p7||q0)&&!H6&&!M4,q=typeof orientation<"u"||g5("mobile"),L6=q&&t2,d4=q&&p7,k3=!window.PointerEvent&&window.MSPointerEvent,l6=!!(window.PointerEvent||k3),p4="ontouchstart"in window||!!window.TouchEvent,Bt=!window.L_NO_TOUCH&&(p4||l6),di=q&&M7,zt=q&&a6,It=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Nt=(function(){var C=!1;try{var H=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("testPassiveEventSupport",c,H),window.removeEventListener("testPassiveEventSupport",c,H)}catch{}return C})(),Wt=(function(){return!!document.createElement("canvas").getContext})(),u7=!!(document.createElementNS&&q2("svg").createSVGRect),c6=!!u7&&(function(){var C=document.createElement("div");return C.innerHTML="<svg/>",(C.firstChild&&C.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Ut=!u7&&(function(){try{var C=document.createElement("div");C.innerHTML='<v:shape adj="1"/>';var H=C.firstChild;return H.style.behavior="url(#default#VML)",H&&typeof H.adj=="object"}catch{return!1}})(),u4=navigator.platform.indexOf("Mac")===0,jt=navigator.platform.indexOf("Linux")===0;function g5(C){return navigator.userAgent.toLowerCase().indexOf(C)>=0}var u1={ie:g2,ielt9:l5,edge:c5,webkit:t2,android:_2,android23:G0,androidStock:Dt,opera:M7,chrome:Z3,gecko:a6,safari:n6,phantom:M4,opera12:H6,win:s6,ie3d:d7,webkit3d:p7,gecko3d:q0,any3d:V6,mobile:q,mobileWebkit:L6,mobileWebkit3d:d4,msPointer:k3,pointer:l6,touch:Bt,touchNative:p4,mobileOpera:di,mobileGecko:zt,retina:It,passiveEvents:Nt,canvas:Wt,svg:u7,vml:Ut,inlineSvg:c6,mac:u4,linux:jt},M6=u1.msPointer?"MSPointerDown":"pointerdown",d6=u1.msPointer?"MSPointerMove":"pointermove",m7=u1.msPointer?"MSPointerUp":"pointerup",Y0=u1.msPointer?"MSPointerCancel":"pointercancel",O3={touchstart:M6,touchmove:d6,touchend:m7,touchcancel:Y0},m4={touchstart:A,touchmove:d,touchend:d,touchcancel:d},_5={},h4=!1;function p6(C,H,l){return H==="touchstart"&&m(),m4[H]?(l=m4[H].bind(this,l),C.addEventListener(O3[H],l,!1),l):(console.warn("wrong event specified:",H),c)}function u6(C,H,l){if(!O3[H]){console.warn("wrong event specified:",H);return}C.removeEventListener(O3[H],l,!1)}function Gt(C){_5[C.pointerId]=C}function m6(C){_5[C.pointerId]&&(_5[C.pointerId]=C)}function M(C){delete _5[C.pointerId]}function m(){h4||(document.addEventListener(M6,Gt,!0),document.addEventListener(d6,m6,!0),document.addEventListener(m7,M,!0),document.addEventListener(Y0,M,!0),h4=!0)}function d(C,H){if(H.pointerType!==(H.MSPOINTER_TYPE_MOUSE||"mouse")){H.touches=[];for(var l in _5)H.touches.push(_5[l]);H.changedTouches=[H],C(H)}}function A(C,H){H.MSPOINTER_TYPE_TOUCH&&H.pointerType===H.MSPOINTER_TYPE_TOUCH&&M2(H),d(C,H)}function _(C){var H={},l,u;for(u in C)l=C[u],H[u]=l&&l.bind?l.bind(C):l;return C=H,H.type="dblclick",H.detail=2,H.isTrusted=!1,H._simulated=!0,H}var w=200;function S(C,H){C.addEventListener("dblclick",H);var l=0,u;function f(b){if(b.detail!==1){u=b.detail;return}if(!(b.pointerType==="mouse"||b.sourceCapabilities&&!b.sourceCapabilities.firesTouchEvents)){var P=f7(b);if(!(P.some(function(I){return I instanceof HTMLLabelElement&&I.attributes.for})&&!P.some(function(I){return I instanceof HTMLInputElement||I instanceof HTMLSelectElement}))){var $=Date.now();$-l<=w?(u++,u===2&&H(_(b))):u=1,l=$}}}return C.addEventListener("click",f),{dblclick:H,simDblclick:f}}function E(C,H){C.removeEventListener("dblclick",H.dblclick),C.removeEventListener("click",H.simDblclick)}var B=A2(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),W=A2(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),N=W==="webkitTransition"||W==="OTransition"?W+"End":"transitionend";function a1(C){return typeof C=="string"?document.getElementById(C):C}function p1(C,H){var l=C.style[H]||C.currentStyle&&C.currentStyle[H];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(C,null);l=u?u[H]:null}return l==="auto"?null:l}function D(C,H,l){var u=document.createElement(C);return u.className=H||"",l&&l.appendChild(u),u}function M1(C){var H=C.parentNode;H&&H.removeChild(C)}function G1(C){for(;C.firstChild;)C.removeChild(C.firstChild)}function F1(C){var H=C.parentNode;H&&H.lastChild!==C&&H.appendChild(C)}function $1(C){var H=C.parentNode;H&&H.firstChild!==C&&H.insertBefore(C,H.firstChild)}function q1(C,H){if(C.classList!==void 0)return C.classList.contains(H);var l=M5(C);return l.length>0&&new RegExp("(^|\\s)"+H+"(\\s|$)").test(l)}function d1(C,H){if(C.classList!==void 0)for(var l=v(H),u=0,f=l.length;u<f;u++)C.classList.add(l[u]);else if(!q1(C,H)){var b=M5(C);o0(C,(b?b+" ":"")+H)}}function R1(C,H){C.classList!==void 0?C.classList.remove(H):o0(C,h((" "+M5(C)+" ").replace(" "+H+" "," ")))}function o0(C,H){C.className.baseVal===void 0?C.className=H:C.className.baseVal=H}function M5(C){return C.correspondingElement&&(C=C.correspondingElement),C.className.baseVal===void 0?C.className:C.className.baseVal}function $2(C,H){"opacity"in C.style?C.style.opacity=H:"filter"in C.style&&D5(C,H)}function D5(C,H){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=C.filters.item(u)}catch{if(H===1)return}H=Math.round(H*100),l?(l.Enabled=H!==100,l.Opacity=H):C.style.filter+=" progid:"+u+"(opacity="+H+")"}function A2(C){for(var H=document.documentElement.style,l=0;l<C.length;l++)if(C[l]in H)return C[l];return!1}function m2(C,H,l){var u=H||new J(0,0);C.style[B]=(u1.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function K1(C,H){C._leaflet_pos=H,u1.any3d?m2(C,H):(C.style.left=H.x+"px",C.style.top=H.y+"px")}function N2(C){return C._leaflet_pos||new J(0,0)}var b2,d5,C0;if("onselectstart"in document)b2=function(){A1(window,"selectstart",M2)},d5=function(){U1(window,"selectstart",M2)};else{var B5=A2(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);b2=function(){if(B5){var C=document.documentElement.style;C0=C[B5],C[B5]="none"}},d5=function(){B5&&(document.documentElement.style[B5]=C0,C0=void 0)}}function a0(){A1(window,"dragstart",M2)}function n0(){U1(window,"dragstart",M2)}var Q0,w2;function H0(C){for(;C.tabIndex===-1;)C=C.parentNode;C.style&&(b5(),Q0=C,w2=C.style.outlineStyle,C.style.outlineStyle="none",A1(window,"keydown",b5))}function b5(){Q0&&(Q0.style.outlineStyle=w2,Q0=void 0,w2=void 0,U1(window,"keydown",b5))}function h7(C){do C=C.parentNode;while((!C.offsetWidth||!C.offsetHeight)&&C!==document.body);return C}function T3(C){var H=C.getBoundingClientRect();return{x:H.width/C.offsetWidth||1,y:H.height/C.offsetHeight||1,boundingClientRect:H}}var P3={__proto__:null,TRANSFORM:B,TRANSITION:W,TRANSITION_END:N,get:a1,getStyle:p1,create:D,remove:M1,empty:G1,toFront:F1,toBack:$1,hasClass:q1,addClass:d1,removeClass:R1,setClass:o0,getClass:M5,setOpacity:$2,testProp:A2,setTransform:m2,setPosition:K1,getPosition:N2,get disableTextSelection(){return b2},get enableTextSelection(){return d5},disableImageDrag:a0,enableImageDrag:n0,preventOutline:H0,restoreOutline:b5,getSizedParentNode:h7,getScale:T3};function A1(C,H,l,u){if(H&&typeof H=="object")for(var f in H)g0(C,f,H[f],l);else{H=v(H);for(var b=0,P=H.length;b<P;b++)g0(C,H[b],l,u)}return this}var R2="_leaflet_events";function U1(C,H,l,u){if(arguments.length===1)z5(C),delete C[R2];else if(H&&typeof H=="object")for(var f in H)V0(C,f,H[f],l);else if(H=v(H),arguments.length===2)z5(C,function($){return F(H,$)!==-1});else for(var b=0,P=H.length;b<P;b++)V0(C,H[b],l,u);return this}function z5(C,H){for(var l in C[R2]){var u=l.split(/\d/)[0];(!H||H(u))&&V0(C,u,null,null,l)}}var s0={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function g0(C,H,l,u){var f=H+n(l)+(u?"_"+n(u):"");if(C[R2]&&C[R2][f])return this;var b=function($){return l.call(u||C,$||window.event)},P=b;!u1.touchNative&&u1.pointer&&H.indexOf("touch")===0?b=p6(C,H,b):u1.touch&&H==="dblclick"?b=S(C,b):"addEventListener"in C?H==="touchstart"||H==="touchmove"||H==="wheel"||H==="mousewheel"?C.addEventListener(s0[H]||H,b,u1.passiveEvents?{passive:!1}:!1):H==="mouseenter"||H==="mouseleave"?(b=function($){$=$||window.event,y2(C,$)&&P($)},C.addEventListener(s0[H],b,!1)):C.addEventListener(H,P,!1):C.attachEvent("on"+H,b),C[R2]=C[R2]||{},C[R2][f]=b}function V0(C,H,l,u,f){f=f||H+n(l)+(u?"_"+n(u):"");var b=C[R2]&&C[R2][f];if(!b)return this;!u1.touchNative&&u1.pointer&&H.indexOf("touch")===0?u6(C,H,b):u1.touch&&H==="dblclick"?E(C,b):"removeEventListener"in C?C.removeEventListener(s0[H]||H,b,!1):C.detachEvent("on"+H,b),C[R2][f]=null}function Y2(C){return C.stopPropagation?C.stopPropagation():C.originalEvent?C.originalEvent._stopped=!0:C.cancelBubble=!0,this}function c2(C){return g0(C,"wheel",Y2),this}function C5(C){return A1(C,"mousedown touchstart dblclick contextmenu",Y2),C._leaflet_disable_click=!0,this}function M2(C){return C.preventDefault?C.preventDefault():C.returnValue=!1,this}function I5(C){return M2(C),Y2(C),this}function f7(C){if(C.composedPath)return C.composedPath();for(var H=[],l=C.target;l;)H.push(l),l=l.parentNode;return H}function x1(C,H){if(!H)return new J(C.clientX,C.clientY);var l=T3(H),u=l.boundingClientRect;return new J((C.clientX-u.left)/l.x-H.clientLeft,(C.clientY-u.top)/l.y-H.clientTop)}var z1=u1.linux&&u1.chrome?window.devicePixelRatio:u1.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function S2(C){return u1.edge?C.wheelDeltaY/2:C.deltaY&&C.deltaMode===0?-C.deltaY/z1:C.deltaY&&C.deltaMode===1?-C.deltaY*20:C.deltaY&&C.deltaMode===2?-C.deltaY*60:C.deltaX||C.deltaZ?0:C.wheelDelta?(C.wheelDeltaY||C.wheelDelta)/2:C.detail&&Math.abs(C.detail)<32765?-C.detail*20:C.detail?C.detail/-32765*60:0}function y2(C,H){var l=H.relatedTarget;if(!l)return!0;try{for(;l&&l!==C;)l=l.parentNode}catch{return!1}return l!==C}var a5={__proto__:null,on:A1,off:U1,stopPropagation:Y2,disableScrollPropagation:c2,disableClickPropagation:C5,preventDefault:M2,stop:I5,getPropagationPath:f7,getMousePosition:x1,getWheelDelta:S2,isExternalTarget:y2,addListener:A1,removeListener:U1},w5=Z1.extend({run:function(C,H,l,u){this.stop(),this._el=C,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=N2(C),this._offset=H.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=o1(this._animate,this),this._step()},_step:function(C){var H=+new Date-this._startTime,l=this._duration*1e3;H<l?this._runFrame(this._easeOut(H/l),C):(this._runFrame(1),this._complete())},_runFrame:function(C,H){var l=this._startPos.add(this._offset.multiplyBy(C));H&&l._round(),K1(this._el,l),this.fire("step")},_complete:function(){m1(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(C){return 1-Math.pow(1-C,this._easeOutPower)}}),_1=Z1.extend({options:{crs:c1,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(C,H){H=g(this,H),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(C),this._initLayout(),this._onResize=o(this._onResize,this),this._initEvents(),H.maxBounds&&this.setMaxBounds(H.maxBounds),H.zoom!==void 0&&(this._zoom=this._limitZoom(H.zoom)),H.center&&H.zoom!==void 0&&this.setView(V1(H.center),H.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=W&&u1.any3d&&!u1.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),A1(this._proxy,N,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(C,H,l){if(H=H===void 0?this._zoom:this._limitZoom(H),C=this._limitCenter(V1(C),H,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=e({animate:l.animate},l.zoom),l.pan=e({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==H?this._tryAnimatedZoom&&this._tryAnimatedZoom(C,H,l.zoom):this._tryAnimatedPan(C,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(C,H,l.pan&&l.pan.noMoveStart),this},setZoom:function(C,H){return this._loaded?this.setView(this.getCenter(),C,{zoom:H}):(this._zoom=C,this)},zoomIn:function(C,H){return C=C||(u1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+C,H)},zoomOut:function(C,H){return C=C||(u1.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-C,H)},setZoomAround:function(C,H,l){var u=this.getZoomScale(H),f=this.getSize().divideBy(2),b=C instanceof J?C:this.latLngToContainerPoint(C),P=b.subtract(f).multiplyBy(1-1/u),$=this.containerPointToLatLng(f.add(P));return this.setView($,H,{zoom:l})},_getBoundsCenterZoom:function(C,H){H=H||{},C=C.getBounds?C.getBounds():h1(C);var l=n1(H.paddingTopLeft||H.padding||[0,0]),u=n1(H.paddingBottomRight||H.padding||[0,0]),f=this.getBoundsZoom(C,!1,l.add(u));if(f=typeof H.maxZoom=="number"?Math.min(H.maxZoom,f):f,f===1/0)return{center:C.getCenter(),zoom:f};var b=u.subtract(l).divideBy(2),P=this.project(C.getSouthWest(),f),$=this.project(C.getNorthEast(),f),I=this.unproject(P.add($).divideBy(2).add(b),f);return{center:I,zoom:f}},fitBounds:function(C,H){if(C=h1(C),!C.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(C,H);return this.setView(l.center,l.zoom,H)},fitWorld:function(C){return this.fitBounds([[-90,-180],[90,180]],C)},panTo:function(C,H){return this.setView(C,this._zoom,{pan:H})},panBy:function(C,H){if(C=n1(C).round(),H=H||{},!C.x&&!C.y)return this.fire("moveend");if(H.animate!==!0&&!this.getSize().contains(C))return this._resetView(this.unproject(this.project(this.getCenter()).add(C)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new w5,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),H.noMoveStart||this.fire("movestart"),H.animate!==!1){d1(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(C).round();this._panAnim.run(this._mapPane,l,H.duration||.25,H.easeLinearity)}else this._rawPanBy(C),this.fire("move").fire("moveend");return this},flyTo:function(C,H,l){if(l=l||{},l.animate===!1||!u1.any3d)return this.setView(C,H,l);this._stop();var u=this.project(this.getCenter()),f=this.project(C),b=this.getSize(),P=this._zoom;C=V1(C),H=H===void 0?P:H;var $=Math.max(b.x,b.y),I=$*this.getZoomScale(P,H),j=f.distanceTo(u)||1,C1=1.42,v1=C1*C1;function O1(v2){var O6=v2?-1:1,bV=v2?I:$,wV=I*I-$*$+O6*v1*v1*j*j,SV=2*bV*v1*j,ie=wV/SV,Ui=Math.sqrt(ie*ie+1)-ie,yV=Ui<1e-9?-18:Math.log(Ui);return yV}function X2(v2){return(Math.exp(v2)-Math.exp(-v2))/2}function Z2(v2){return(Math.exp(v2)+Math.exp(-v2))/2}function Z5(v2){return X2(v2)/Z2(v2)}var H5=O1(0);function b7(v2){return $*(Z2(H5)/Z2(H5+C1*v2))}function vV(v2){return $*(Z2(H5)*Z5(H5+C1*v2)-X2(H5))/v1}function xV(v2){return 1-Math.pow(1-v2,1.5)}var gV=Date.now(),Ni=(O1(1)-H5)/C1,_V=l.duration?1e3*l.duration:1e3*Ni*.8;function Wi(){var v2=(Date.now()-gV)/_V,O6=xV(v2)*Ni;v2<=1?(this._flyToFrame=o1(Wi,this),this._move(this.unproject(u.add(f.subtract(u).multiplyBy(vV(O6)/j)),P),this.getScaleZoom($/b7(O6),P),{flyTo:!0})):this._move(C,H)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Wi.call(this),this},flyToBounds:function(C,H){var l=this._getBoundsCenterZoom(C,H);return this.flyTo(l.center,l.zoom,H)},setMaxBounds:function(C){return C=h1(C),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),C.isValid()?(this.options.maxBounds=C,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(C){var H=this.options.minZoom;return this.options.minZoom=C,this._loaded&&H!==C&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(C):this},setMaxZoom:function(C){var H=this.options.maxZoom;return this.options.maxZoom=C,this._loaded&&H!==C&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(C):this},panInsideBounds:function(C,H){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,h1(C));return l.equals(u)||this.panTo(u,H),this._enforcingBounds=!1,this},panInside:function(C,H){H=H||{};var l=n1(H.paddingTopLeft||H.padding||[0,0]),u=n1(H.paddingBottomRight||H.padding||[0,0]),f=this.project(this.getCenter()),b=this.project(C),P=this.getPixelBounds(),$=r1([P.min.add(l),P.max.subtract(u)]),I=$.getSize();if(!$.contains(b)){this._enforcingBounds=!0;var j=b.subtract($.getCenter()),C1=$.extend(b).getSize().subtract(I);f.x+=j.x<0?-C1.x:C1.x,f.y+=j.y<0?-C1.y:C1.y,this.panTo(this.unproject(f),H),this._enforcingBounds=!1}return this},invalidateSize:function(C){if(!this._loaded)return this;C=e({animate:!1,pan:!0},C===!0?{animate:!0}:C);var H=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=H.divideBy(2).round(),f=l.divideBy(2).round(),b=u.subtract(f);return!b.x&&!b.y?this:(C.animate&&C.pan?this.panBy(b):(C.pan&&this._rawPanBy(b),this.fire("move"),C.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:H,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(C){if(C=this._locateOptions=e({timeout:1e4,watch:!1},C),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var H=o(this._handleGeolocationResponse,this),l=o(this._handleGeolocationError,this);return C.watch?this._locationWatchId=navigator.geolocation.watchPosition(H,l,C):navigator.geolocation.getCurrentPosition(H,l,C),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(C){if(this._container._leaflet_id){var H=C.code,l=C.message||(H===1?"permission denied":H===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:H,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(C){if(this._container._leaflet_id){var H=C.coords.latitude,l=C.coords.longitude,u=new s1(H,l),f=u.toBounds(C.coords.accuracy*2),b=this._locateOptions;if(b.setView){var P=this.getBoundsZoom(f);this.setView(u,b.maxZoom?Math.min(P,b.maxZoom):P)}var $={latlng:u,bounds:f,timestamp:C.timestamp};for(var I in C.coords)typeof C.coords[I]=="number"&&($[I]=C.coords[I]);this.fire("locationfound",$)}},addHandler:function(C,H){if(!H)return this;var l=this[C]=new H(this);return this._handlers.push(l),this.options[C]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),M1(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(m1(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var C;for(C in this._layers)this._layers[C].remove();for(C in this._panes)M1(this._panes[C]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(C,H){var l="leaflet-pane"+(C?" leaflet-"+C.replace("Pane","")+"-pane":""),u=D("div",l,H||this._mapPane);return C&&(this._panes[C]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var C=this.getPixelBounds(),H=this.unproject(C.getBottomLeft()),l=this.unproject(C.getTopRight());return new H1(H,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(C,H,l){C=h1(C),l=n1(l||[0,0]);var u=this.getZoom()||0,f=this.getMinZoom(),b=this.getMaxZoom(),P=C.getNorthWest(),$=C.getSouthEast(),I=this.getSize().subtract(l),j=r1(this.project($,u),this.project(P,u)).getSize(),C1=u1.any3d?this.options.zoomSnap:1,v1=I.x/j.x,O1=I.y/j.y,X2=H?Math.max(v1,O1):Math.min(v1,O1);return u=this.getScaleZoom(X2,u),C1&&(u=Math.round(u/(C1/100))*(C1/100),u=H?Math.ceil(u/C1)*C1:Math.floor(u/C1)*C1),Math.max(f,Math.min(b,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new J(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(C,H){var l=this._getTopLeftPoint(C,H);return new U(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(C){return this.options.crs.getProjectedBounds(C===void 0?this.getZoom():C)},getPane:function(C){return typeof C=="string"?this._panes[C]:C},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(C,H){var l=this.options.crs;return H=H===void 0?this._zoom:H,l.scale(C)/l.scale(H)},getScaleZoom:function(C,H){var l=this.options.crs;H=H===void 0?this._zoom:H;var u=l.zoom(C*l.scale(H));return isNaN(u)?1/0:u},project:function(C,H){return H=H===void 0?this._zoom:H,this.options.crs.latLngToPoint(V1(C),H)},unproject:function(C,H){return H=H===void 0?this._zoom:H,this.options.crs.pointToLatLng(n1(C),H)},layerPointToLatLng:function(C){var H=n1(C).add(this.getPixelOrigin());return this.unproject(H)},latLngToLayerPoint:function(C){var H=this.project(V1(C))._round();return H._subtract(this.getPixelOrigin())},wrapLatLng:function(C){return this.options.crs.wrapLatLng(V1(C))},wrapLatLngBounds:function(C){return this.options.crs.wrapLatLngBounds(h1(C))},distance:function(C,H){return this.options.crs.distance(V1(C),V1(H))},containerPointToLayerPoint:function(C){return n1(C).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(C){return n1(C).add(this._getMapPanePos())},containerPointToLatLng:function(C){var H=this.containerPointToLayerPoint(n1(C));return this.layerPointToLatLng(H)},latLngToContainerPoint:function(C){return this.layerPointToContainerPoint(this.latLngToLayerPoint(V1(C)))},mouseEventToContainerPoint:function(C){return x1(C,this._container)},mouseEventToLayerPoint:function(C){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(C))},mouseEventToLatLng:function(C){return this.layerPointToLatLng(this.mouseEventToLayerPoint(C))},_initContainer:function(C){var H=this._container=a1(C);if(H){if(H._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");A1(H,"scroll",this._onScroll,this),this._containerId=n(H)},_initLayout:function(){var C=this._container;this._fadeAnimated=this.options.fadeAnimation&&u1.any3d,d1(C,"leaflet-container"+(u1.touch?" leaflet-touch":"")+(u1.retina?" leaflet-retina":"")+(u1.ielt9?" leaflet-oldie":"")+(u1.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var H=p1(C,"position");H!=="absolute"&&H!=="relative"&&H!=="fixed"&&H!=="sticky"&&(C.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var C=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),K1(this._mapPane,new J(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(d1(C.markerPane,"leaflet-zoom-hide"),d1(C.shadowPane,"leaflet-zoom-hide"))},_resetView:function(C,H,l){K1(this._mapPane,new J(0,0));var u=!this._loaded;this._loaded=!0,H=this._limitZoom(H),this.fire("viewprereset");var f=this._zoom!==H;this._moveStart(f,l)._move(C,H)._moveEnd(f),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(C,H){return C&&this.fire("zoomstart"),H||this.fire("movestart"),this},_move:function(C,H,l,u){H===void 0&&(H=this._zoom);var f=this._zoom!==H;return this._zoom=H,this._lastCenter=C,this._pixelOrigin=this._getNewPixelOrigin(C),u?l&&l.pinch&&this.fire("zoom",l):((f||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(C){return C&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return m1(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(C){K1(this._mapPane,this._getMapPanePos().subtract(C))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(C){this._targets={},this._targets[n(this._container)]=this;var H=C?U1:A1;H(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&H(window,"resize",this._onResize,this),u1.any3d&&this.options.transform3DLimit&&(C?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){m1(this._resizeRequest),this._resizeRequest=o1(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var C=this._getMapPanePos();Math.max(Math.abs(C.x),Math.abs(C.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(C,H){for(var l=[],u,f=H==="mouseout"||H==="mouseover",b=C.target||C.srcElement,P=!1;b;){if(u=this._targets[n(b)],u&&(H==="click"||H==="preclick")&&this._draggableMoved(u)){P=!0;break}if(u&&u.listens(H,!0)&&(f&&!y2(b,C)||(l.push(u),f))||b===this._container)break;b=b.parentNode}return!l.length&&!P&&!f&&this.listens(H,!0)&&(l=[this]),l},_isClickDisabled:function(C){for(;C&&C!==this._container;){if(C._leaflet_disable_click)return!0;C=C.parentNode}},_handleDOMEvent:function(C){var H=C.target||C.srcElement;if(!(!this._loaded||H._leaflet_disable_events||C.type==="click"&&this._isClickDisabled(H))){var l=C.type;l==="mousedown"&&H0(H),this._fireDOMEvent(C,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(C,H,l){if(C.type==="click"){var u=e({},C);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var f=this._findEventTargets(C,H);if(l){for(var b=[],P=0;P<l.length;P++)l[P].listens(H,!0)&&b.push(l[P]);f=b.concat(f)}if(f.length){H==="contextmenu"&&M2(C);var $=f[0],I={originalEvent:C};if(C.type!=="keypress"&&C.type!=="keydown"&&C.type!=="keyup"){var j=$.getLatLng&&(!$._radius||$._radius<=10);I.containerPoint=j?this.latLngToContainerPoint($.getLatLng()):this.mouseEventToContainerPoint(C),I.layerPoint=this.containerPointToLayerPoint(I.containerPoint),I.latlng=j?$.getLatLng():this.layerPointToLatLng(I.layerPoint)}for(P=0;P<f.length;P++)if(f[P].fire(H,I,!0),I.originalEvent._stopped||f[P].options.bubblingMouseEvents===!1&&F(this._mouseEvents,H)!==-1)return}},_draggableMoved:function(C){return C=C.dragging&&C.dragging.enabled()?C:this,C.dragging&&C.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var C=0,H=this._handlers.length;C<H;C++)this._handlers[C].disable()},whenReady:function(C,H){return this._loaded?C.call(H||this,{target:this}):this.on("load",C,H),this},_getMapPanePos:function(){return N2(this._mapPane)||new J(0,0)},_moved:function(){var C=this._getMapPanePos();return C&&!C.equals([0,0])},_getTopLeftPoint:function(C,H){var l=C&&H!==void 0?this._getNewPixelOrigin(C,H):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(C,H){var l=this.getSize()._divideBy(2);return this.project(C,H)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(C,H,l){var u=this._getNewPixelOrigin(l,H);return this.project(C,H)._subtract(u)},_latLngBoundsToNewLayerBounds:function(C,H,l){var u=this._getNewPixelOrigin(l,H);return r1([this.project(C.getSouthWest(),H)._subtract(u),this.project(C.getNorthWest(),H)._subtract(u),this.project(C.getSouthEast(),H)._subtract(u),this.project(C.getNorthEast(),H)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(C){return this.latLngToLayerPoint(C).subtract(this._getCenterLayerPoint())},_limitCenter:function(C,H,l){if(!l)return C;var u=this.project(C,H),f=this.getSize().divideBy(2),b=new U(u.subtract(f),u.add(f)),P=this._getBoundsOffset(b,l,H);return Math.abs(P.x)<=1&&Math.abs(P.y)<=1?C:this.unproject(u.add(P),H)},_limitOffset:function(C,H){if(!H)return C;var l=this.getPixelBounds(),u=new U(l.min.add(C),l.max.add(C));return C.add(this._getBoundsOffset(u,H))},_getBoundsOffset:function(C,H,l){var u=r1(this.project(H.getNorthEast(),l),this.project(H.getSouthWest(),l)),f=u.min.subtract(C.min),b=u.max.subtract(C.max),P=this._rebound(f.x,-b.x),$=this._rebound(f.y,-b.y);return new J(P,$)},_rebound:function(C,H){return C+H>0?Math.round(C-H)/2:Math.max(0,Math.ceil(C))-Math.max(0,Math.floor(H))},_limitZoom:function(C){var H=this.getMinZoom(),l=this.getMaxZoom(),u=u1.any3d?this.options.zoomSnap:1;return u&&(C=Math.round(C/u)*u),Math.max(H,Math.min(l,C))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){R1(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(C,H){var l=this._getCenterOffset(C)._trunc();return(H&&H.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,H),!0)},_createAnimProxy:function(){var C=this._proxy=D("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(C),this.on("zoomanim",function(H){var l=B,u=this._proxy.style[l];m2(this._proxy,this.project(H.center,H.zoom),this.getZoomScale(H.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){M1(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var C=this.getCenter(),H=this.getZoom();m2(this._proxy,this.project(C,H),this.getZoomScale(H,1))},_catchTransitionEnd:function(C){this._animatingZoom&&C.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(C,H,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(H-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(H),f=this._getCenterOffset(C)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(f)?!1:(o1(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(C,H,!0)},this),!0)},_animateZoom:function(C,H,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=C,this._animateToZoom=H,d1(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:C,zoom:H,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(o(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&R1(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function E3(C,H){return new _1(C,H)}var Q2=y1.extend({options:{position:"topright"},initialize:function(C){g(this,C)},getPosition:function(){return this.options.position},setPosition:function(C){var H=this._map;return H&&H.removeControl(this),this.options.position=C,H&&H.addControl(this),this},getContainer:function(){return this._container},addTo:function(C){this.remove(),this._map=C;var H=this._container=this.onAdd(C),l=this.getPosition(),u=C._controlCorners[l];return d1(H,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(H,u.firstChild):u.appendChild(H),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(M1(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(C){this._map&&C&&C.screenX>0&&C.screenY>0&&this._map.getContainer().focus()}}),Y=function(C){return new Q2(C)};_1.include({addControl:function(C){return C.addTo(this),this},removeControl:function(C){return C.remove(),this},_initControlPos:function(){var C=this._controlCorners={},H="leaflet-",l=this._controlContainer=D("div",H+"control-container",this._container);function u(f,b){var P=H+f+" "+H+b;C[f+b]=D("div",P,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var C in this._controlCorners)M1(this._controlCorners[C]);M1(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var f1=Q2.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(C,H,l,u){return l<u?-1:u<l?1:0}},initialize:function(C,H,l){g(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in C)this._addLayer(C[u],u);for(u in H)this._addLayer(H[u],u,!0)},onAdd:function(C){this._initLayout(),this._update(),this._map=C,C.on("zoomend",this._checkDisabledLayers,this);for(var H=0;H<this._layers.length;H++)this._layers[H].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(C){return Q2.prototype.addTo.call(this,C),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var C=0;C<this._layers.length;C++)this._layers[C].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(C,H){return this._addLayer(C,H),this._map?this._update():this},addOverlay:function(C,H){return this._addLayer(C,H,!0),this._map?this._update():this},removeLayer:function(C){C.off("add remove",this._onLayerChange,this);var H=this._getLayer(n(C));return H&&this._layers.splice(this._layers.indexOf(H),1),this._map?this._update():this},expand:function(){d1(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var C=this._map.getSize().y-(this._container.offsetTop+50);return C<this._section.clientHeight?(d1(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=C+"px"):R1(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return R1(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var C="leaflet-control-layers",H=this._container=D("div",C),l=this.options.collapsed;H.setAttribute("aria-haspopup",!0),C5(H),c2(H);var u=this._section=D("section",C+"-list");l&&(this._map.on("click",this.collapse,this),A1(H,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var f=this._layersLink=D("a",C+"-toggle",H);f.href="#",f.title="Layers",f.setAttribute("role","button"),A1(f,{keydown:function(b){b.keyCode===13&&this._expandSafely()},click:function(b){M2(b),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=D("div",C+"-base",u),this._separator=D("div",C+"-separator",u),this._overlaysList=D("div",C+"-overlays",u),H.appendChild(u)},_getLayer:function(C){for(var H=0;H<this._layers.length;H++)if(this._layers[H]&&n(this._layers[H].layer)===C)return this._layers[H]},_addLayer:function(C,H,l){this._map&&C.on("add remove",this._onLayerChange,this),this._layers.push({layer:C,name:H,overlay:l}),this.options.sortLayers&&this._layers.sort(o(function(u,f){return this.options.sortFunction(u.layer,f.layer,u.name,f.name)},this)),this.options.autoZIndex&&C.setZIndex&&(this._lastZIndex++,C.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;G1(this._baseLayersList),G1(this._overlaysList),this._layerControlInputs=[];var C,H,l,u,f=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),H=H||u.overlay,C=C||!u.overlay,f+=u.overlay?0:1;return this.options.hideSingleBase&&(C=C&&f>1,this._baseLayersList.style.display=C?"":"none"),this._separator.style.display=H&&C?"":"none",this},_onLayerChange:function(C){this._handlingClick||this._update();var H=this._getLayer(n(C.target)),l=H.overlay?C.type==="add"?"overlayadd":"overlayremove":C.type==="add"?"baselayerchange":null;l&&this._map.fire(l,H)},_createRadioElement:function(C,H){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+C+'"'+(H?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(C){var H=document.createElement("label"),l=this._map.hasLayer(C.layer),u;C.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+n(this),l),this._layerControlInputs.push(u),u.layerId=n(C.layer),A1(u,"click",this._onInputClick,this);var f=document.createElement("span");f.innerHTML=" "+C.name;var b=document.createElement("span");H.appendChild(b),b.appendChild(u),b.appendChild(f);var P=C.overlay?this._overlaysList:this._baseLayersList;return P.appendChild(H),this._checkDisabledLayers(),H},_onInputClick:function(){if(!this._preventClick){var C=this._layerControlInputs,H,l,u=[],f=[];this._handlingClick=!0;for(var b=C.length-1;b>=0;b--)H=C[b],l=this._getLayer(H.layerId).layer,H.checked?u.push(l):H.checked||f.push(l);for(b=0;b<f.length;b++)this._map.hasLayer(f[b])&&this._map.removeLayer(f[b]);for(b=0;b<u.length;b++)this._map.hasLayer(u[b])||this._map.addLayer(u[b]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var C=this._layerControlInputs,H,l,u=this._map.getZoom(),f=C.length-1;f>=0;f--)H=C[f],l=this._getLayer(H.layerId).layer,H.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var C=this._section;this._preventClick=!0,A1(C,"click",M2),this.expand();var H=this;setTimeout(function(){U1(C,"click",M2),H._preventClick=!1})}}),T1=function(C,H,l){return new f1(C,H,l)},D1=Q2.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(C){var H="leaflet-control-zoom",l=D("div",H+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,H+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,H+"-out",l,this._zoomOut),this._updateDisabled(),C.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(C){C.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(C){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(C.shiftKey?3:1))},_zoomOut:function(C){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(C.shiftKey?3:1))},_createButton:function(C,H,l,u,f){var b=D("a",l,u);return b.innerHTML=C,b.href="#",b.title=H,b.setAttribute("role","button"),b.setAttribute("aria-label",H),C5(b),A1(b,"click",I5),A1(b,"click",f,this),A1(b,"click",this._refocusOnMap,this),b},_updateDisabled:function(){var C=this._map,H="leaflet-disabled";R1(this._zoomInButton,H),R1(this._zoomOutButton,H),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||C._zoom===C.getMinZoom())&&(d1(this._zoomOutButton,H),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||C._zoom===C.getMaxZoom())&&(d1(this._zoomInButton,H),this._zoomInButton.setAttribute("aria-disabled","true"))}});_1.mergeOptions({zoomControl:!0}),_1.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new D1,this.addControl(this.zoomControl))});var D2=function(C){return new D1(C)},K2=Q2.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(C){var H="leaflet-control-scale",l=D("div",H),u=this.options;return this._addScales(u,H+"-line",l),C.on(u.updateWhenIdle?"moveend":"move",this._update,this),C.whenReady(this._update,this),l},onRemove:function(C){C.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(C,H,l){C.metric&&(this._mScale=D("div",H,l)),C.imperial&&(this._iScale=D("div",H,l))},_update:function(){var C=this._map,H=C.getSize().y/2,l=C.distance(C.containerPointToLatLng([0,H]),C.containerPointToLatLng([this.options.maxWidth,H]));this._updateScales(l)},_updateScales:function(C){this.options.metric&&C&&this._updateMetric(C),this.options.imperial&&C&&this._updateImperial(C)},_updateMetric:function(C){var H=this._getRoundNum(C),l=H<1e3?H+" m":H/1e3+" km";this._updateScale(this._mScale,l,H/C)},_updateImperial:function(C){var H=C*3.2808399,l,u,f;H>5280?(l=H/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(f=this._getRoundNum(H),this._updateScale(this._iScale,f+" ft",f/H))},_updateScale:function(C,H,l){C.style.width=Math.round(this.options.maxWidth*l)+"px",C.innerHTML=H},_getRoundNum:function(C){var H=Math.pow(10,(Math.floor(C)+"").length-1),l=C/H;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,H*l}}),N5=function(C){return new K2(C)},F3='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',$3=Q2.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(u1.inlineSvg?F3+" ":"")+"Leaflet</a>"},initialize:function(C){g(this,C),this._attributions={}},onAdd:function(C){C.attributionControl=this,this._container=D("div","leaflet-control-attribution"),C5(this._container);for(var H in C._layers)C._layers[H].getAttribution&&this.addAttribution(C._layers[H].getAttribution());return this._update(),C.on("layeradd",this._addAttribution,this),this._container},onRemove:function(C){C.off("layeradd",this._addAttribution,this)},_addAttribution:function(C){C.layer.getAttribution&&(this.addAttribution(C.layer.getAttribution()),C.layer.once("remove",function(){this.removeAttribution(C.layer.getAttribution())},this))},setPrefix:function(C){return this.options.prefix=C,this._update(),this},addAttribution:function(C){return C?(this._attributions[C]||(this._attributions[C]=0),this._attributions[C]++,this._update(),this):this},removeAttribution:function(C){return C?(this._attributions[C]&&(this._attributions[C]--,this._update()),this):this},_update:function(){if(this._map){var C=[];for(var H in this._attributions)this._attributions[H]&&C.push(H);var l=[];this.options.prefix&&l.push(this.options.prefix),C.length&&l.push(C.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});_1.mergeOptions({attributionControl:!0}),_1.addInitHook(function(){this.options.attributionControl&&new $3().addTo(this)});var p5=function(C){return new $3(C)};Q2.Layers=f1,Q2.Zoom=D1,Q2.Scale=K2,Q2.Attribution=$3,Y.layers=T1,Y.zoom=D2,Y.scale=N5,Y.attribution=p5;var n5=y1.extend({initialize:function(C){this._map=C},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});n5.addTo=function(C,H){return C.addHandler(H,this),this};var qt={Events:Y1},h6=u1.touch?"touchstart mousedown":"mousedown",S5=Z1.extend({options:{clickTolerance:3},initialize:function(C,H,l,u){g(this,u),this._element=C,this._dragStartTarget=H||C,this._preventOutline=l},enable:function(){this._enabled||(A1(this._dragStartTarget,h6,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(S5._dragging===this&&this.finishDrag(!0),U1(this._dragStartTarget,h6,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(C){if(this._enabled&&(this._moved=!1,!q1(this._element,"leaflet-zoom-anim"))){if(C.touches&&C.touches.length!==1){S5._dragging===this&&this.finishDrag();return}if(!(S5._dragging||C.shiftKey||C.which!==1&&C.button!==1&&!C.touches)&&(S5._dragging=this,this._preventOutline&&H0(this._element),a0(),b2(),!this._moving)){this.fire("down");var H=C.touches?C.touches[0]:C,l=h7(this._element);this._startPoint=new J(H.clientX,H.clientY),this._startPos=N2(this._element),this._parentScale=T3(l);var u=C.type==="mousedown";A1(document,u?"mousemove":"touchmove",this._onMove,this),A1(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(C){if(this._enabled){if(C.touches&&C.touches.length>1){this._moved=!0;return}var H=C.touches&&C.touches.length===1?C.touches[0]:C,l=new J(H.clientX,H.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,M2(C),this._moved||(this.fire("dragstart"),this._moved=!0,d1(document.body,"leaflet-dragging"),this._lastTarget=C.target||C.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),d1(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=C,this._updatePosition())}},_updatePosition:function(){var C={originalEvent:this._lastEvent};this.fire("predrag",C),K1(this._element,this._newPos),this.fire("drag",C)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(C){R1(document.body,"leaflet-dragging"),this._lastTarget&&(R1(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),U1(document,"mousemove touchmove",this._onMove,this),U1(document,"mouseup touchend touchcancel",this._onUp,this),n0(),d5();var H=this._moved&&this._moving;this._moving=!1,S5._dragging=!1,H&&this.fire("dragend",{noInertia:C,distance:this._newPos.distanceTo(this._startPos)})}});function f6(C,H,l){var u,f=[1,4,2,8],b,P,$,I,j,C1,v1,O1;for(b=0,C1=C.length;b<C1;b++)C[b]._code=R3(C[b],H);for($=0;$<4;$++){for(v1=f[$],u=[],b=0,C1=C.length,P=C1-1;b<C1;P=b++)I=C[b],j=C[P],I._code&v1?j._code&v1||(O1=A6(j,I,v1,H,l),O1._code=R3(O1,H),u.push(O1)):(j._code&v1&&(O1=A6(j,I,v1,H,l),O1._code=R3(O1,H),u.push(O1)),u.push(I));C=u}return C}function pi(C,H){var l,u,f,b,P,$,I,j,C1;if(!C||C.length===0)throw new Error("latlngs not passed");y5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var v1=V1([0,0]),O1=h1(C),X2=O1.getNorthWest().distanceTo(O1.getSouthWest())*O1.getNorthEast().distanceTo(O1.getNorthWest());X2<1700&&(v1=Yt(C));var Z2=C.length,Z5=[];for(l=0;l<Z2;l++){var H5=V1(C[l]);Z5.push(H.project(V1([H5.lat-v1.lat,H5.lng-v1.lng])))}for($=I=j=0,l=0,u=Z2-1;l<Z2;u=l++)f=Z5[l],b=Z5[u],P=f.y*b.x-b.y*f.x,I+=(f.x+b.x)*P,j+=(f.y+b.y)*P,$+=P*3;$===0?C1=Z5[0]:C1=[I/$,j/$];var b7=H.unproject(n1(C1));return V1([b7.lat+v1.lat,b7.lng+v1.lng])}function Yt(C){for(var H=0,l=0,u=0,f=0;f<C.length;f++){var b=V1(C[f]);H+=b.lat,l+=b.lng,u++}return V1([H/u,l/u])}var js={__proto__:null,clipPolygon:f6,polygonCenter:pi,centroid:Yt};function ui(C,H){if(!H||!C.length)return C.slice();var l=H*H;return C=Ys(C,l),C=qs(C,l),C}function mi(C,H,l){return Math.sqrt(f4(C,H,l,!0))}function Gs(C,H,l){return f4(C,H,l)}function qs(C,H){var l=C.length,u=typeof Uint8Array<"u"?Uint8Array:Array,f=new u(l);f[0]=f[l-1]=1,Qt(C,f,H,0,l-1);var b,P=[];for(b=0;b<l;b++)f[b]&&P.push(C[b]);return P}function Qt(C,H,l,u,f){var b=0,P,$,I;for($=u+1;$<=f-1;$++)I=f4(C[$],C[u],C[f],!0),I>b&&(P=$,b=I);b>l&&(H[P]=1,Qt(C,H,l,u,P),Qt(C,H,l,P,f))}function Ys(C,H){for(var l=[C[0]],u=1,f=0,b=C.length;u<b;u++)Qs(C[u],C[f])>H&&(l.push(C[u]),f=u);return f<b-1&&l.push(C[b-1]),l}var hi;function fi(C,H,l,u,f){var b=u?hi:R3(C,l),P=R3(H,l),$,I,j;for(hi=P;;){if(!(b|P))return[C,H];if(b&P)return!1;$=b||P,I=A6(C,H,$,l,f),j=R3(I,l),$===b?(C=I,b=j):(H=I,P=j)}}function A6(C,H,l,u,f){var b=H.x-C.x,P=H.y-C.y,$=u.min,I=u.max,j,C1;return l&8?(j=C.x+b*(I.y-C.y)/P,C1=I.y):l&4?(j=C.x+b*($.y-C.y)/P,C1=$.y):l&2?(j=I.x,C1=C.y+P*(I.x-C.x)/b):l&1&&(j=$.x,C1=C.y+P*($.x-C.x)/b),new J(j,C1,f)}function R3(C,H){var l=0;return C.x<H.min.x?l|=1:C.x>H.max.x&&(l|=2),C.y<H.min.y?l|=4:C.y>H.max.y&&(l|=8),l}function Qs(C,H){var l=H.x-C.x,u=H.y-C.y;return l*l+u*u}function f4(C,H,l,u){var f=H.x,b=H.y,P=l.x-f,$=l.y-b,I=P*P+$*$,j;return I>0&&(j=((C.x-f)*P+(C.y-b)*$)/I,j>1?(f=l.x,b=l.y):j>0&&(f+=P*j,b+=$*j)),P=C.x-f,$=C.y-b,u?P*P+$*$:new J(f,b)}function y5(C){return!T(C[0])||typeof C[0][0]!="object"&&typeof C[0][0]<"u"}function Ai(C){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),y5(C)}function vi(C,H){var l,u,f,b,P,$,I,j;if(!C||C.length===0)throw new Error("latlngs not passed");y5(C)||(console.warn("latlngs are not flat! Only the first ring will be used"),C=C[0]);var C1=V1([0,0]),v1=h1(C),O1=v1.getNorthWest().distanceTo(v1.getSouthWest())*v1.getNorthEast().distanceTo(v1.getNorthWest());O1<1700&&(C1=Yt(C));var X2=C.length,Z2=[];for(l=0;l<X2;l++){var Z5=V1(C[l]);Z2.push(H.project(V1([Z5.lat-C1.lat,Z5.lng-C1.lng])))}for(l=0,u=0;l<X2-1;l++)u+=Z2[l].distanceTo(Z2[l+1])/2;if(u===0)j=Z2[0];else for(l=0,b=0;l<X2-1;l++)if(P=Z2[l],$=Z2[l+1],f=P.distanceTo($),b+=f,b>u){I=(b-u)/f,j=[$.x-I*($.x-P.x),$.y-I*($.y-P.y)];break}var H5=H.unproject(n1(j));return V1([H5.lat+C1.lat,H5.lng+C1.lng])}var Ks={__proto__:null,simplify:ui,pointToSegmentDistance:mi,closestPointOnSegment:Gs,clipSegment:fi,_getEdgeIntersection:A6,_getBitCode:R3,_sqClosestPointOnSegment:f4,isFlat:y5,_flat:Ai,polylineCenter:vi},Kt={project:function(C){return new J(C.lng,C.lat)},unproject:function(C){return new s1(C.y,C.x)},bounds:new U([-180,-90],[180,90])},Xt={R:6378137,R_MINOR:6356752314245179e-9,bounds:new U([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(C){var H=Math.PI/180,l=this.R,u=C.lat*H,f=this.R_MINOR/l,b=Math.sqrt(1-f*f),P=b*Math.sin(u),$=Math.tan(Math.PI/4-u/2)/Math.pow((1-P)/(1+P),b/2);return u=-l*Math.log(Math.max($,1e-10)),new J(C.lng*H*l,u)},unproject:function(C){for(var H=180/Math.PI,l=this.R,u=this.R_MINOR/l,f=Math.sqrt(1-u*u),b=Math.exp(-C.y/l),P=Math.PI/2-2*Math.atan(b),$=0,I=.1,j;$<15&&Math.abs(I)>1e-7;$++)j=f*Math.sin(P),j=Math.pow((1-j)/(1+j),f/2),I=Math.PI/2-2*Math.atan(b*j)-P,P+=I;return new s1(P*H,C.x*H/l)}},Xs={__proto__:null,LonLat:Kt,Mercator:Xt,SphericalMercator:x2},Js=e({},k1,{code:"EPSG:3395",projection:Xt,transformation:(function(){var C=.5/(Math.PI*Xt.R);return l2(C,.5,-C,.5)})()}),xi=e({},k1,{code:"EPSG:4326",projection:Kt,transformation:l2(1/180,1,-1/180,.5)}),tV=e({},g1,{projection:Kt,transformation:l2(1,0,-1,0),scale:function(C){return Math.pow(2,C)},zoom:function(C){return Math.log(C)/Math.LN2},distance:function(C,H){var l=H.lng-C.lng,u=H.lat-C.lat;return Math.sqrt(l*l+u*u)},infinite:!0});g1.Earth=k1,g1.EPSG3395=Js,g1.EPSG3857=c1,g1.EPSG900913=o5,g1.EPSG4326=xi,g1.Simple=tV;var W5=Z1.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(C){return C.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(C){return C&&C.removeLayer(this),this},getPane:function(C){return this._map.getPane(C?this.options[C]||C:this.options.pane)},addInteractiveTarget:function(C){return this._map._targets[n(C)]=this,this},removeInteractiveTarget:function(C){return delete this._map._targets[n(C)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(C){var H=C.target;if(H.hasLayer(this)){if(this._map=H,this._zoomAnimated=H._zoomAnimated,this.getEvents){var l=this.getEvents();H.on(l,this),this.once("remove",function(){H.off(l,this)},this)}this.onAdd(H),this.fire("add"),H.fire("layeradd",{layer:this})}}});_1.include({addLayer:function(C){if(!C._layerAdd)throw new Error("The provided object is not a Layer.");var H=n(C);return this._layers[H]?this:(this._layers[H]=C,C._mapToAdd=this,C.beforeAdd&&C.beforeAdd(this),this.whenReady(C._layerAdd,C),this)},removeLayer:function(C){var H=n(C);return this._layers[H]?(this._loaded&&C.onRemove(this),delete this._layers[H],this._loaded&&(this.fire("layerremove",{layer:C}),C.fire("remove")),C._map=C._mapToAdd=null,this):this},hasLayer:function(C){return n(C)in this._layers},eachLayer:function(C,H){for(var l in this._layers)C.call(H,this._layers[l]);return this},_addLayers:function(C){C=C?T(C)?C:[C]:[];for(var H=0,l=C.length;H<l;H++)this.addLayer(C[H])},_addZoomLimit:function(C){(!isNaN(C.options.maxZoom)||!isNaN(C.options.minZoom))&&(this._zoomBoundLayers[n(C)]=C,this._updateZoomLevels())},_removeZoomLimit:function(C){var H=n(C);this._zoomBoundLayers[H]&&(delete this._zoomBoundLayers[H],this._updateZoomLevels())},_updateZoomLevels:function(){var C=1/0,H=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var f=this._zoomBoundLayers[u].options;C=f.minZoom===void 0?C:Math.min(C,f.minZoom),H=f.maxZoom===void 0?H:Math.max(H,f.maxZoom)}this._layersMaxZoom=H===-1/0?void 0:H,this._layersMinZoom=C===1/0?void 0:C,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var A7=W5.extend({initialize:function(C,H){g(this,H),this._layers={};var l,u;if(C)for(l=0,u=C.length;l<u;l++)this.addLayer(C[l])},addLayer:function(C){var H=this.getLayerId(C);return this._layers[H]=C,this._map&&this._map.addLayer(C),this},removeLayer:function(C){var H=C in this._layers?C:this.getLayerId(C);return this._map&&this._layers[H]&&this._map.removeLayer(this._layers[H]),delete this._layers[H],this},hasLayer:function(C){var H=typeof C=="number"?C:this.getLayerId(C);return H in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(C){var H=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[C]&&u[C].apply(u,H);return this},onAdd:function(C){this.eachLayer(C.addLayer,C)},onRemove:function(C){this.eachLayer(C.removeLayer,C)},eachLayer:function(C,H){for(var l in this._layers)C.call(H,this._layers[l]);return this},getLayer:function(C){return this._layers[C]},getLayers:function(){var C=[];return this.eachLayer(C.push,C),C},setZIndex:function(C){return this.invoke("setZIndex",C)},getLayerId:function(C){return n(C)}}),eV=function(C,H){return new A7(C,H)},_0=A7.extend({addLayer:function(C){return this.hasLayer(C)?this:(C.addEventParent(this),A7.prototype.addLayer.call(this,C),this.fire("layeradd",{layer:C}))},removeLayer:function(C){return this.hasLayer(C)?(C in this._layers&&(C=this._layers[C]),C.removeEventParent(this),A7.prototype.removeLayer.call(this,C),this.fire("layerremove",{layer:C})):this},setStyle:function(C){return this.invoke("setStyle",C)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var C=new H1;for(var H in this._layers){var l=this._layers[H];C.extend(l.getBounds?l.getBounds():l.getLatLng())}return C}}),rV=function(C,H){return new _0(C,H)},v7=y1.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(C){g(this,C)},createIcon:function(C){return this._createIcon("icon",C)},createShadow:function(C){return this._createIcon("shadow",C)},_createIcon:function(C,H){var l=this._getIconUrl(C);if(!l){if(C==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,H&&H.tagName==="IMG"?H:null);return this._setIconStyles(u,C),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(C,H){var l=this.options,u=l[H+"Size"];typeof u=="number"&&(u=[u,u]);var f=n1(u),b=n1(H==="shadow"&&l.shadowAnchor||l.iconAnchor||f&&f.divideBy(2,!0));C.className="leaflet-marker-"+H+" "+(l.className||""),b&&(C.style.marginLeft=-b.x+"px",C.style.marginTop=-b.y+"px"),f&&(C.style.width=f.x+"px",C.style.height=f.y+"px")},_createImg:function(C,H){return H=H||document.createElement("img"),H.src=C,H},_getIconUrl:function(C){return u1.retina&&this.options[C+"RetinaUrl"]||this.options[C+"Url"]}});function iV(C){return new v7(C)}var A4=v7.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(C){return typeof A4.imagePath!="string"&&(A4.imagePath=this._detectIconPath()),(this.options.imagePath||A4.imagePath)+v7.prototype._getIconUrl.call(this,C)},_stripUrl:function(C){var H=function(l,u,f){var b=u.exec(l);return b&&b[f]};return C=H(C,/^url\((['"])?(.+)\1\)$/,2),C&&H(C,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var C=D("div","leaflet-default-icon-path",document.body),H=p1(C,"background-image")||p1(C,"backgroundImage");if(document.body.removeChild(C),H=this._stripUrl(H),H)return H;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),gi=n5.extend({initialize:function(C){this._marker=C},addHooks:function(){var C=this._marker._icon;this._draggable||(this._draggable=new S5(C,C,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),d1(C,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&R1(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(C){var H=this._marker,l=H._map,u=this._marker.options.autoPanSpeed,f=this._marker.options.autoPanPadding,b=N2(H._icon),P=l.getPixelBounds(),$=l.getPixelOrigin(),I=r1(P.min._subtract($).add(f),P.max._subtract($).subtract(f));if(!I.contains(b)){var j=n1((Math.max(I.max.x,b.x)-I.max.x)/(P.max.x-I.max.x)-(Math.min(I.min.x,b.x)-I.min.x)/(P.min.x-I.min.x),(Math.max(I.max.y,b.y)-I.max.y)/(P.max.y-I.max.y)-(Math.min(I.min.y,b.y)-I.min.y)/(P.min.y-I.min.y)).multiplyBy(u);l.panBy(j,{animate:!1}),this._draggable._newPos._add(j),this._draggable._startPos._add(j),K1(H._icon,this._draggable._newPos),this._onDrag(C),this._panRequest=o1(this._adjustPan.bind(this,C))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(C){this._marker.options.autoPan&&(m1(this._panRequest),this._panRequest=o1(this._adjustPan.bind(this,C)))},_onDrag:function(C){var H=this._marker,l=H._shadow,u=N2(H._icon),f=H._map.layerPointToLatLng(u);l&&K1(l,u),H._latlng=f,C.latlng=f,C.oldLatLng=this._oldLatLng,H.fire("move",C).fire("drag",C)},_onDragEnd:function(C){m1(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",C)}}),v6=W5.extend({options:{icon:new A4,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(C,H){g(this,H),this._latlng=V1(C)},onAdd:function(C){this._zoomAnimated=this._zoomAnimated&&C.options.markerZoomAnimation,this._zoomAnimated&&C.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(C){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&C.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(C){var H=this._latlng;return this._latlng=V1(C),this.update(),this.fire("move",{oldLatLng:H,latlng:this._latlng})},setZIndexOffset:function(C){return this.options.zIndexOffset=C,this.update()},getIcon:function(){return this.options.icon},setIcon:function(C){return this.options.icon=C,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var C=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(C)}return this},_initIcon:function(){var C=this.options,H="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=C.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,C.title&&(l.title=C.title),l.tagName==="IMG"&&(l.alt=C.alt||"")),d1(l,H),C.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,C.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&A1(l,"focus",this._panOnFocus,this);var f=C.icon.createShadow(this._shadow),b=!1;f!==this._shadow&&(this._removeShadow(),b=!0),f&&(d1(f,H),f.alt=""),this._shadow=f,C.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),f&&b&&this.getPane(C.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&U1(this._icon,"focus",this._panOnFocus,this),M1(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&M1(this._shadow),this._shadow=null},_setPos:function(C){this._icon&&K1(this._icon,C),this._shadow&&K1(this._shadow,C),this._zIndex=C.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(C){this._icon&&(this._icon.style.zIndex=this._zIndex+C)},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center).round();this._setPos(H)},_initInteraction:function(){if(this.options.interactive&&(d1(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),gi)){var C=this.options.draggable;this.dragging&&(C=this.dragging.enabled(),this.dragging.disable()),this.dragging=new gi(this),C&&this.dragging.enable()}},setOpacity:function(C){return this.options.opacity=C,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var C=this.options.opacity;this._icon&&$2(this._icon,C),this._shadow&&$2(this._shadow,C)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var C=this._map;if(C){var H=this.options.icon.options,l=H.iconSize?n1(H.iconSize):n1(0,0),u=H.iconAnchor?n1(H.iconAnchor):n1(0,0);C.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function oV(C,H){return new v6(C,H)}var K0=W5.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(C){this._renderer=C.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(C){return g(this,C),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&C&&Object.prototype.hasOwnProperty.call(C,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),x6=K0.extend({options:{fill:!0,radius:10},initialize:function(C,H){g(this,H),this._latlng=V1(C),this._radius=this.options.radius},setLatLng:function(C){var H=this._latlng;return this._latlng=V1(C),this.redraw(),this.fire("move",{oldLatLng:H,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(C){return this.options.radius=this._radius=C,this.redraw()},getRadius:function(){return this._radius},setStyle:function(C){var H=C&&C.radius||this._radius;return K0.prototype.setStyle.call(this,C),this.setRadius(H),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var C=this._radius,H=this._radiusY||C,l=this._clickTolerance(),u=[C+l,H+l];this._pxBounds=new U(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(C){return C.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function CV(C,H){return new x6(C,H)}var Jt=x6.extend({initialize:function(C,H,l){if(typeof H=="number"&&(H=e({},l,{radius:H})),g(this,H),this._latlng=V1(C),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(C){return this._mRadius=C,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var C=[this._radius,this._radiusY||this._radius];return new H1(this._map.layerPointToLatLng(this._point.subtract(C)),this._map.layerPointToLatLng(this._point.add(C)))},setStyle:K0.prototype.setStyle,_project:function(){var C=this._latlng.lng,H=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===k1.distance){var f=Math.PI/180,b=this._mRadius/k1.R/f,P=l.project([H+b,C]),$=l.project([H-b,C]),I=P.add($).divideBy(2),j=l.unproject(I).lat,C1=Math.acos((Math.cos(b*f)-Math.sin(H*f)*Math.sin(j*f))/(Math.cos(H*f)*Math.cos(j*f)))/f;(isNaN(C1)||C1===0)&&(C1=b/Math.cos(Math.PI/180*H)),this._point=I.subtract(l.getPixelOrigin()),this._radius=isNaN(C1)?0:I.x-l.project([j,C-C1]).x,this._radiusY=I.y-P.y}else{var v1=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(v1).x}this._updateBounds()}});function aV(C,H,l){return new Jt(C,H,l)}var b0=K0.extend({options:{smoothFactor:1,noClip:!1},initialize:function(C,H){g(this,H),this._setLatLngs(C)},getLatLngs:function(){return this._latlngs},setLatLngs:function(C){return this._setLatLngs(C),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(C){for(var H=1/0,l=null,u=f4,f,b,P=0,$=this._parts.length;P<$;P++)for(var I=this._parts[P],j=1,C1=I.length;j<C1;j++){f=I[j-1],b=I[j];var v1=u(C,f,b,!0);v1<H&&(H=v1,l=u(C,f,b))}return l&&(l.distance=Math.sqrt(H)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return vi(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(C,H){return H=H||this._defaultShape(),C=V1(C),H.push(C),this._bounds.extend(C),this.redraw()},_setLatLngs:function(C){this._bounds=new H1,this._latlngs=this._convertLatLngs(C)},_defaultShape:function(){return y5(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(C){for(var H=[],l=y5(C),u=0,f=C.length;u<f;u++)l?(H[u]=V1(C[u]),this._bounds.extend(H[u])):H[u]=this._convertLatLngs(C[u]);return H},_project:function(){var C=new U;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,C),this._bounds.isValid()&&C.isValid()&&(this._rawPxBounds=C,this._updateBounds())},_updateBounds:function(){var C=this._clickTolerance(),H=new J(C,C);this._rawPxBounds&&(this._pxBounds=new U([this._rawPxBounds.min.subtract(H),this._rawPxBounds.max.add(H)]))},_projectLatlngs:function(C,H,l){var u=C[0]instanceof s1,f=C.length,b,P;if(u){for(P=[],b=0;b<f;b++)P[b]=this._map.latLngToLayerPoint(C[b]),l.extend(P[b]);H.push(P)}else for(b=0;b<f;b++)this._projectLatlngs(C[b],H,l)},_clipPoints:function(){var C=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}var H=this._parts,l,u,f,b,P,$,I;for(l=0,f=0,b=this._rings.length;l<b;l++)for(I=this._rings[l],u=0,P=I.length;u<P-1;u++)$=fi(I[u],I[u+1],C,u,!0),$&&(H[f]=H[f]||[],H[f].push($[0]),($[1]!==I[u+1]||u===P-2)&&(H[f].push($[1]),f++))}},_simplifyPoints:function(){for(var C=this._parts,H=this.options.smoothFactor,l=0,u=C.length;l<u;l++)C[l]=ui(C[l],H)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(C,H){var l,u,f,b,P,$,I=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(l=0,b=this._parts.length;l<b;l++)for($=this._parts[l],u=0,P=$.length,f=P-1;u<P;f=u++)if(!(!H&&u===0)&&mi(C,$[f],$[u])<=I)return!0;return!1}});function nV(C,H){return new b0(C,H)}b0._flat=Ai;var x7=b0.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return pi(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(C){var H=b0.prototype._convertLatLngs.call(this,C),l=H.length;return l>=2&&H[0]instanceof s1&&H[0].equals(H[l-1])&&H.pop(),H},_setLatLngs:function(C){b0.prototype._setLatLngs.call(this,C),y5(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return y5(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var C=this._renderer._bounds,H=this.options.weight,l=new J(H,H);if(C=new U(C.min.subtract(l),C.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(C))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,f=this._rings.length,b;u<f;u++)b=f6(this._rings[u],C,!0),b.length&&this._parts.push(b)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(C){var H=!1,l,u,f,b,P,$,I,j;if(!this._pxBounds||!this._pxBounds.contains(C))return!1;for(b=0,I=this._parts.length;b<I;b++)for(l=this._parts[b],P=0,j=l.length,$=j-1;P<j;$=P++)u=l[P],f=l[$],u.y>C.y!=f.y>C.y&&C.x<(f.x-u.x)*(C.y-u.y)/(f.y-u.y)+u.x&&(H=!H);return H||b0.prototype._containsPoint.call(this,C,!0)}});function HV(C,H){return new x7(C,H)}var w0=_0.extend({initialize:function(C,H){g(this,H),this._layers={},C&&this.addData(C)},addData:function(C){var H=T(C)?C:C.features,l,u,f;if(H){for(l=0,u=H.length;l<u;l++)f=H[l],(f.geometries||f.geometry||f.features||f.coordinates)&&this.addData(f);return this}var b=this.options;if(b.filter&&!b.filter(C))return this;var P=g6(C,b);return P?(P.feature=w6(C),P.defaultOptions=P.options,this.resetStyle(P),b.onEachFeature&&b.onEachFeature(C,P),this.addLayer(P)):this},resetStyle:function(C){return C===void 0?this.eachLayer(this.resetStyle,this):(C.options=e({},C.defaultOptions),this._setLayerStyle(C,this.options.style),this)},setStyle:function(C){return this.eachLayer(function(H){this._setLayerStyle(H,C)},this)},_setLayerStyle:function(C,H){C.setStyle&&(typeof H=="function"&&(H=H(C.feature)),C.setStyle(H))}});function g6(C,H){var l=C.type==="Feature"?C.geometry:C,u=l?l.coordinates:null,f=[],b=H&&H.pointToLayer,P=H&&H.coordsToLatLng||te,$,I,j,C1;if(!u&&!l)return null;switch(l.type){case"Point":return $=P(u),_i(b,C,$,H);case"MultiPoint":for(j=0,C1=u.length;j<C1;j++)$=P(u[j]),f.push(_i(b,C,$,H));return new _0(f);case"LineString":case"MultiLineString":return I=_6(u,l.type==="LineString"?0:1,P),new b0(I,H);case"Polygon":case"MultiPolygon":return I=_6(u,l.type==="Polygon"?1:2,P),new x7(I,H);case"GeometryCollection":for(j=0,C1=l.geometries.length;j<C1;j++){var v1=g6({geometry:l.geometries[j],type:"Feature",properties:C.properties},H);v1&&f.push(v1)}return new _0(f);case"FeatureCollection":for(j=0,C1=l.features.length;j<C1;j++){var O1=g6(l.features[j],H);O1&&f.push(O1)}return new _0(f);default:throw new Error("Invalid GeoJSON object.")}}function _i(C,H,l,u){return C?C(H,l):new v6(l,u&&u.markersInheritOptions&&u)}function te(C){return new s1(C[1],C[0],C[2])}function _6(C,H,l){for(var u=[],f=0,b=C.length,P;f<b;f++)P=H?_6(C[f],H-1,l):(l||te)(C[f]),u.push(P);return u}function ee(C,H){return C=V1(C),C.alt!==void 0?[p(C.lng,H),p(C.lat,H),p(C.alt,H)]:[p(C.lng,H),p(C.lat,H)]}function b6(C,H,l,u){for(var f=[],b=0,P=C.length;b<P;b++)f.push(H?b6(C[b],y5(C[b])?0:H-1,l,u):ee(C[b],u));return!H&&l&&f.length>0&&f.push(f[0].slice()),f}function g7(C,H){return C.feature?e({},C.feature,{geometry:H}):w6(H)}function w6(C){return C.type==="Feature"||C.type==="FeatureCollection"?C:{type:"Feature",properties:{},geometry:C}}var re={toGeoJSON:function(C){return g7(this,{type:"Point",coordinates:ee(this.getLatLng(),C)})}};v6.include(re),Jt.include(re),x6.include(re),b0.include({toGeoJSON:function(C){var H=!y5(this._latlngs),l=b6(this._latlngs,H?1:0,!1,C);return g7(this,{type:(H?"Multi":"")+"LineString",coordinates:l})}}),x7.include({toGeoJSON:function(C){var H=!y5(this._latlngs),l=H&&!y5(this._latlngs[0]),u=b6(this._latlngs,l?2:H?1:0,!0,C);return H||(u=[u]),g7(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),A7.include({toMultiPoint:function(C){var H=[];return this.eachLayer(function(l){H.push(l.toGeoJSON(C).geometry.coordinates)}),g7(this,{type:"MultiPoint",coordinates:H})},toGeoJSON:function(C){var H=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(H==="MultiPoint")return this.toMultiPoint(C);var l=H==="GeometryCollection",u=[];return this.eachLayer(function(f){if(f.toGeoJSON){var b=f.toGeoJSON(C);if(l)u.push(b.geometry);else{var P=w6(b);P.type==="FeatureCollection"?u.push.apply(u,P.features):u.push(P)}}}),l?g7(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function bi(C,H){return new w0(C,H)}var sV=bi,S6=W5.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(C,H,l){this._url=C,this._bounds=h1(H),g(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(d1(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){M1(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(C){return this.options.opacity=C,this._image&&this._updateOpacity(),this},setStyle:function(C){return C.opacity&&this.setOpacity(C.opacity),this},bringToFront:function(){return this._map&&F1(this._image),this},bringToBack:function(){return this._map&&$1(this._image),this},setUrl:function(C){return this._url=C,this._image&&(this._image.src=C),this},setBounds:function(C){return this._bounds=h1(C),this._map&&this._reset(),this},getEvents:function(){var C={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var C=this._url.tagName==="IMG",H=this._image=C?this._url:D("img");if(d1(H,"leaflet-image-layer"),this._zoomAnimated&&d1(H,"leaflet-zoom-animated"),this.options.className&&d1(H,this.options.className),H.onselectstart=c,H.onmousemove=c,H.onload=o(this.fire,this,"load"),H.onerror=o(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(H.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),C){this._url=H.src;return}H.src=this._url,H.alt=this.options.alt},_animateZoom:function(C){var H=this._map.getZoomScale(C.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,C.zoom,C.center).min;m2(this._image,l,H)},_reset:function(){var C=this._image,H=new U(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=H.getSize();K1(C,H.min),C.style.width=l.x+"px",C.style.height=l.y+"px"},_updateOpacity:function(){$2(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var C=this.options.errorOverlayUrl;C&&this._url!==C&&(this._url=C,this._image.src=C)},getCenter:function(){return this._bounds.getCenter()}}),VV=function(C,H,l){return new S6(C,H,l)},wi=S6.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var C=this._url.tagName==="VIDEO",H=this._image=C?this._url:D("video");if(d1(H,"leaflet-image-layer"),this._zoomAnimated&&d1(H,"leaflet-zoom-animated"),this.options.className&&d1(H,this.options.className),H.onselectstart=c,H.onmousemove=c,H.onloadeddata=o(this.fire,this,"load"),C){for(var l=H.getElementsByTagName("source"),u=[],f=0;f<l.length;f++)u.push(l[f].src);this._url=l.length>0?u:[H.src];return}T(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(H.style,"objectFit")&&(H.style.objectFit="fill"),H.autoplay=!!this.options.autoplay,H.loop=!!this.options.loop,H.muted=!!this.options.muted,H.playsInline=!!this.options.playsInline;for(var b=0;b<this._url.length;b++){var P=D("source");P.src=this._url[b],H.appendChild(P)}}});function LV(C,H,l){return new wi(C,H,l)}var Si=S6.extend({_initImage:function(){var C=this._image=this._url;d1(C,"leaflet-image-layer"),this._zoomAnimated&&d1(C,"leaflet-zoom-animated"),this.options.className&&d1(C,this.options.className),C.onselectstart=c,C.onmousemove=c}});function lV(C,H,l){return new Si(C,H,l)}var L0=W5.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(C,H){C&&(C instanceof s1||T(C))?(this._latlng=V1(C),g(this,H)):(g(this,C),this._source=H),this.options.content&&(this._content=this.options.content)},openOn:function(C){return C=arguments.length?C:this._source._map,C.hasLayer(this)||C.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(C){return this._map?this.close():(arguments.length?this._source=C:C=this._source,this._prepareOpen(),this.openOn(C._map)),this},onAdd:function(C){this._zoomAnimated=C._zoomAnimated,this._container||this._initLayout(),C._fadeAnimated&&$2(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),C._fadeAnimated&&$2(this._container,1),this.bringToFront(),this.options.interactive&&(d1(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(C){C._fadeAnimated?($2(this._container,0),this._removeTimeout=setTimeout(o(M1,void 0,this._container),200)):M1(this._container),this.options.interactive&&(R1(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(C){return this._latlng=V1(C),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(C){return this._content=C,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var C={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&F1(this._container),this},bringToBack:function(){return this._map&&$1(this._container),this},_prepareOpen:function(C){var H=this._source;if(!H._map)return!1;if(H instanceof _0){H=null;var l=this._source._layers;for(var u in l)if(l[u]._map){H=l[u];break}if(!H)return!1;this._source=H}if(!C)if(H.getCenter)C=H.getCenter();else if(H.getLatLng)C=H.getLatLng();else if(H.getBounds)C=H.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(C),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var C=this._contentNode,H=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof H=="string")C.innerHTML=H;else{for(;C.hasChildNodes();)C.removeChild(C.firstChild);C.appendChild(H)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var C=this._map.latLngToLayerPoint(this._latlng),H=n1(this.options.offset),l=this._getAnchor();this._zoomAnimated?K1(this._container,C.add(l)):H=H.add(C).add(l);var u=this._containerBottom=-H.y,f=this._containerLeft=-Math.round(this._containerWidth/2)+H.x;this._container.style.bottom=u+"px",this._container.style.left=f+"px"}},_getAnchor:function(){return[0,0]}});_1.include({_initOverlay:function(C,H,l,u){var f=H;return f instanceof C||(f=new C(u).setContent(H)),l&&f.setLatLng(l),f}}),W5.include({_initOverlay:function(C,H,l,u){var f=l;return f instanceof C?(g(f,u),f._source=this):(f=H&&!u?H:new C(u,this),f.setContent(l)),f}});var y6=L0.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(C){return C=arguments.length?C:this._source._map,!C.hasLayer(this)&&C._popup&&C._popup.options.autoClose&&C.removeLayer(C._popup),C._popup=this,L0.prototype.openOn.call(this,C)},onAdd:function(C){L0.prototype.onAdd.call(this,C),C.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof K0||this._source.on("preclick",Y2))},onRemove:function(C){L0.prototype.onRemove.call(this,C),C.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof K0||this._source.off("preclick",Y2))},getEvents:function(){var C=L0.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(C.preclick=this.close),this.options.keepInView&&(C.moveend=this._adjustPan),C},_initLayout:function(){var C="leaflet-popup",H=this._container=D("div",C+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=D("div",C+"-content-wrapper",H);if(this._contentNode=D("div",C+"-content",l),C5(H),c2(this._contentNode),A1(H,"contextmenu",Y2),this._tipContainer=D("div",C+"-tip-container",H),this._tip=D("div",C+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=D("a",C+"-close-button",H);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',A1(u,"click",function(f){M2(f),this.close()},this)}},_updateLayout:function(){var C=this._contentNode,H=C.style;H.width="",H.whiteSpace="nowrap";var l=C.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),H.width=l+1+"px",H.whiteSpace="",H.height="";var u=C.offsetHeight,f=this.options.maxHeight,b="leaflet-popup-scrolled";f&&u>f?(H.height=f+"px",d1(C,b)):R1(C,b),this._containerWidth=this._container.offsetWidth},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center),l=this._getAnchor();K1(this._container,H.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var C=this._map,H=parseInt(p1(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+H,u=this._containerWidth,f=new J(this._containerLeft,-l-this._containerBottom);f._add(N2(this._container));var b=C.layerPointToContainerPoint(f),P=n1(this.options.autoPanPadding),$=n1(this.options.autoPanPaddingTopLeft||P),I=n1(this.options.autoPanPaddingBottomRight||P),j=C.getSize(),C1=0,v1=0;b.x+u+I.x>j.x&&(C1=b.x+u-j.x+I.x),b.x-C1-$.x<0&&(C1=b.x-$.x),b.y+l+I.y>j.y&&(v1=b.y+l-j.y+I.y),b.y-v1-$.y<0&&(v1=b.y-$.y),(C1||v1)&&(this.options.keepInView&&(this._autopanning=!0),C.fire("autopanstart").panBy([C1,v1]))}},_getAnchor:function(){return n1(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),cV=function(C,H){return new y6(C,H)};_1.mergeOptions({closePopupOnClick:!0}),_1.include({openPopup:function(C,H,l){return this._initOverlay(y6,C,H,l).openOn(this),this},closePopup:function(C){return C=arguments.length?C:this._popup,C&&C.close(),this}}),W5.include({bindPopup:function(C,H){return this._popup=this._initOverlay(y6,this._popup,C,H),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(C){return this._popup&&(this instanceof _0||(this._popup._source=this),this._popup._prepareOpen(C||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(C){return this._popup&&this._popup.setContent(C),this},getPopup:function(){return this._popup},_openPopup:function(C){if(!(!this._popup||!this._map)){I5(C);var H=C.layer||C.target;if(this._popup._source===H&&!(H instanceof K0)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(C.latlng);return}this._popup._source=H,this.openPopup(C.latlng)}},_movePopup:function(C){this._popup.setLatLng(C.latlng)},_onKeyPress:function(C){C.originalEvent.keyCode===13&&this._openPopup(C)}});var Z6=L0.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(C){L0.prototype.onAdd.call(this,C),this.setOpacity(this.options.opacity),C.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(C){L0.prototype.onRemove.call(this,C),C.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var C=L0.prototype.getEvents.call(this);return this.options.permanent||(C.preclick=this.close),C},_initLayout:function(){var C="leaflet-tooltip",H=C+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=D("div",H),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+n(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(C){var H,l,u=this._map,f=this._container,b=u.latLngToContainerPoint(u.getCenter()),P=u.layerPointToContainerPoint(C),$=this.options.direction,I=f.offsetWidth,j=f.offsetHeight,C1=n1(this.options.offset),v1=this._getAnchor();$==="top"?(H=I/2,l=j):$==="bottom"?(H=I/2,l=0):$==="center"?(H=I/2,l=j/2):$==="right"?(H=0,l=j/2):$==="left"?(H=I,l=j/2):P.x<b.x?($="right",H=0,l=j/2):($="left",H=I+(C1.x+v1.x)*2,l=j/2),C=C.subtract(n1(H,l,!0)).add(C1).add(v1),R1(f,"leaflet-tooltip-right"),R1(f,"leaflet-tooltip-left"),R1(f,"leaflet-tooltip-top"),R1(f,"leaflet-tooltip-bottom"),d1(f,"leaflet-tooltip-"+$),K1(f,C)},_updatePosition:function(){var C=this._map.latLngToLayerPoint(this._latlng);this._setPosition(C)},setOpacity:function(C){this.options.opacity=C,this._container&&$2(this._container,C)},_animateZoom:function(C){var H=this._map._latLngToNewLayerPoint(this._latlng,C.zoom,C.center);this._setPosition(H)},_getAnchor:function(){return n1(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),MV=function(C,H){return new Z6(C,H)};_1.include({openTooltip:function(C,H,l){return this._initOverlay(Z6,C,H,l).openOn(this),this},closeTooltip:function(C){return C.close(),this}}),W5.include({bindTooltip:function(C,H){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Z6,this._tooltip,C,H),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(C){if(!(!C&&this._tooltipHandlersAdded)){var H=C?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[H](l),this._tooltipHandlersAdded=!C}},openTooltip:function(C){return this._tooltip&&(this instanceof _0||(this._tooltip._source=this),this._tooltip._prepareOpen(C)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(C){return this._tooltip&&this._tooltip.setContent(C),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(C){var H=typeof C.getElement=="function"&&C.getElement();H&&(A1(H,"focus",function(){this._tooltip._source=C,this.openTooltip()},this),A1(H,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(C){var H=typeof C.getElement=="function"&&C.getElement();H&&H.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(C){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var H=this;this._map.once("moveend",function(){H._openOnceFlag=!1,H._openTooltip(C)});return}this._tooltip._source=C.layer||C.target,this.openTooltip(this._tooltip.options.sticky?C.latlng:void 0)}},_moveTooltip:function(C){var H=C.latlng,l,u;this._tooltip.options.sticky&&C.originalEvent&&(l=this._map.mouseEventToContainerPoint(C.originalEvent),u=this._map.containerPointToLayerPoint(l),H=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(H)}});var yi=v7.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(C){var H=C&&C.tagName==="DIV"?C:document.createElement("div"),l=this.options;if(l.html instanceof Element?(G1(H),H.appendChild(l.html)):H.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=n1(l.bgPos);H.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(H,"icon"),H},createShadow:function(){return null}});function dV(C){return new yi(C)}v7.Default=A4;var v4=W5.extend({options:{tileSize:256,opacity:1,updateWhenIdle:u1.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(C){g(this,C)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(C){C._addZoomLimit(this)},onRemove:function(C){this._removeAllTiles(),M1(this._container),C._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(F1(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&($1(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(C){return this.options.opacity=C,this._updateOpacity(),this},setZIndex:function(C){return this.options.zIndex=C,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var C=this._clampZoom(this._map.getZoom());C!==this._tileZoom&&(this._tileZoom=C,this._updateLevels()),this._update()}return this},getEvents:function(){var C={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=s(this._onMoveEnd,this.options.updateInterval,this)),C.move=this._onMove),this._zoomAnimated&&(C.zoomanim=this._animateZoom),C},createTile:function(){return document.createElement("div")},getTileSize:function(){var C=this.options.tileSize;return C instanceof J?C:new J(C,C)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(C){for(var H=this.getPane().children,l=-C(-1/0,1/0),u=0,f=H.length,b;u<f;u++)b=H[u].style.zIndex,H[u]!==this._container&&b&&(l=C(l,+b));isFinite(l)&&(this.options.zIndex=l+C(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!u1.ielt9){$2(this._container,this.options.opacity);var C=+new Date,H=!1,l=!1;for(var u in this._tiles){var f=this._tiles[u];if(!(!f.current||!f.loaded)){var b=Math.min(1,(C-f.loaded)/200);$2(f.el,b),b<1?H=!0:(f.active?l=!0:this._onOpaqueTile(f),f.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),H&&(m1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this))}},_onOpaqueTile:c,_initContainer:function(){this._container||(this._container=D("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var C=this._tileZoom,H=this.options.maxZoom;if(C!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===C?(this._levels[l].el.style.zIndex=H-Math.abs(C-l),this._onUpdateLevel(l)):(M1(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[C],f=this._map;return u||(u=this._levels[C]={},u.el=D("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=H,u.origin=f.project(f.unproject(f.getPixelOrigin()),C).round(),u.zoom=C,this._setZoomTransform(u,f.getCenter(),f.getZoom()),c(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:c,_onRemoveLevel:c,_onCreateLevel:c,_pruneTiles:function(){if(this._map){var C,H,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(C in this._tiles)H=this._tiles[C],H.retain=H.current;for(C in this._tiles)if(H=this._tiles[C],H.current&&!H.active){var u=H.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(C in this._tiles)this._tiles[C].retain||this._removeTile(C)}},_removeTilesAtZoom:function(C){for(var H in this._tiles)this._tiles[H].coords.z===C&&this._removeTile(H)},_removeAllTiles:function(){for(var C in this._tiles)this._removeTile(C)},_invalidateAll:function(){for(var C in this._levels)M1(this._levels[C].el),this._onRemoveLevel(Number(C)),delete this._levels[C];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(C,H,l,u){var f=Math.floor(C/2),b=Math.floor(H/2),P=l-1,$=new J(+f,+b);$.z=+P;var I=this._tileCoordsToKey($),j=this._tiles[I];return j&&j.active?(j.retain=!0,!0):(j&&j.loaded&&(j.retain=!0),P>u?this._retainParent(f,b,P,u):!1)},_retainChildren:function(C,H,l,u){for(var f=2*C;f<2*C+2;f++)for(var b=2*H;b<2*H+2;b++){var P=new J(f,b);P.z=l+1;var $=this._tileCoordsToKey(P),I=this._tiles[$];if(I&&I.active){I.retain=!0;continue}else I&&I.loaded&&(I.retain=!0);l+1<u&&this._retainChildren(f,b,l+1,u)}},_resetView:function(C){var H=C&&(C.pinch||C.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),H,H)},_animateZoom:function(C){this._setView(C.center,C.zoom,!0,C.noUpdate)},_clampZoom:function(C){var H=this.options;return H.minNativeZoom!==void 0&&C<H.minNativeZoom?H.minNativeZoom:H.maxNativeZoom!==void 0&&H.maxNativeZoom<C?H.maxNativeZoom:C},_setView:function(C,H,l,u){var f=Math.round(H);this.options.maxZoom!==void 0&&f>this.options.maxZoom||this.options.minZoom!==void 0&&f<this.options.minZoom?f=void 0:f=this._clampZoom(f);var b=this.options.updateWhenZooming&&f!==this._tileZoom;(!u||b)&&(this._tileZoom=f,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),f!==void 0&&this._update(C),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(C,H)},_setZoomTransforms:function(C,H){for(var l in this._levels)this._setZoomTransform(this._levels[l],C,H)},_setZoomTransform:function(C,H,l){var u=this._map.getZoomScale(l,C.zoom),f=C.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(H,l)).round();u1.any3d?m2(C.el,f,u):K1(C.el,f)},_resetGrid:function(){var C=this._map,H=C.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,f=this._map.getPixelWorldBounds(this._tileZoom);f&&(this._globalTileRange=this._pxBoundsToTileRange(f)),this._wrapX=H.wrapLng&&!this.options.noWrap&&[Math.floor(C.project([0,H.wrapLng[0]],u).x/l.x),Math.ceil(C.project([0,H.wrapLng[1]],u).x/l.y)],this._wrapY=H.wrapLat&&!this.options.noWrap&&[Math.floor(C.project([H.wrapLat[0],0],u).y/l.x),Math.ceil(C.project([H.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(C){var H=this._map,l=H._animatingZoom?Math.max(H._animateToZoom,H.getZoom()):H.getZoom(),u=H.getZoomScale(l,this._tileZoom),f=H.project(C,this._tileZoom).floor(),b=H.getSize().divideBy(u*2);return new U(f.subtract(b),f.add(b))},_update:function(C){var H=this._map;if(H){var l=this._clampZoom(H.getZoom());if(C===void 0&&(C=H.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(C),f=this._pxBoundsToTileRange(u),b=f.getCenter(),P=[],$=this.options.keepBuffer,I=new U(f.getBottomLeft().subtract([$,-$]),f.getTopRight().add([$,-$]));if(!(isFinite(f.min.x)&&isFinite(f.min.y)&&isFinite(f.max.x)&&isFinite(f.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var j in this._tiles){var C1=this._tiles[j].coords;(C1.z!==this._tileZoom||!I.contains(new J(C1.x,C1.y)))&&(this._tiles[j].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(C,l);return}for(var v1=f.min.y;v1<=f.max.y;v1++)for(var O1=f.min.x;O1<=f.max.x;O1++){var X2=new J(O1,v1);if(X2.z=this._tileZoom,!!this._isValidTile(X2)){var Z2=this._tiles[this._tileCoordsToKey(X2)];Z2?Z2.current=!0:P.push(X2)}}if(P.sort(function(H5,b7){return H5.distanceTo(b)-b7.distanceTo(b)}),P.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Z5=document.createDocumentFragment();for(O1=0;O1<P.length;O1++)this._addTile(P[O1],Z5);this._level.el.appendChild(Z5)}}}},_isValidTile:function(C){var H=this._map.options.crs;if(!H.infinite){var l=this._globalTileRange;if(!H.wrapLng&&(C.x<l.min.x||C.x>l.max.x)||!H.wrapLat&&(C.y<l.min.y||C.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(C);return h1(this.options.bounds).overlaps(u)},_keyToBounds:function(C){return this._tileCoordsToBounds(this._keyToTileCoords(C))},_tileCoordsToNwSe:function(C){var H=this._map,l=this.getTileSize(),u=C.scaleBy(l),f=u.add(l),b=H.unproject(u,C.z),P=H.unproject(f,C.z);return[b,P]},_tileCoordsToBounds:function(C){var H=this._tileCoordsToNwSe(C),l=new H1(H[0],H[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(C){return C.x+":"+C.y+":"+C.z},_keyToTileCoords:function(C){var H=C.split(":"),l=new J(+H[0],+H[1]);return l.z=+H[2],l},_removeTile:function(C){var H=this._tiles[C];H&&(M1(H.el),delete this._tiles[C],this.fire("tileunload",{tile:H.el,coords:this._keyToTileCoords(C)}))},_initTile:function(C){d1(C,"leaflet-tile");var H=this.getTileSize();C.style.width=H.x+"px",C.style.height=H.y+"px",C.onselectstart=c,C.onmousemove=c,u1.ielt9&&this.options.opacity<1&&$2(C,this.options.opacity)},_addTile:function(C,H){var l=this._getTilePos(C),u=this._tileCoordsToKey(C),f=this.createTile(this._wrapCoords(C),o(this._tileReady,this,C));this._initTile(f),this.createTile.length<2&&o1(o(this._tileReady,this,C,null,f)),K1(f,l),this._tiles[u]={el:f,coords:C,current:!0},H.appendChild(f),this.fire("tileloadstart",{tile:f,coords:C})},_tileReady:function(C,H,l){H&&this.fire("tileerror",{error:H,tile:l,coords:C});var u=this._tileCoordsToKey(C);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?($2(l.el,0),m1(this._fadeFrame),this._fadeFrame=o1(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),H||(d1(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:C})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),u1.ielt9||!this._map._fadeAnimated?o1(this._pruneTiles,this):setTimeout(o(this._pruneTiles,this),250)))},_getTilePos:function(C){return C.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(C){var H=new J(this._wrapX?V(C.x,this._wrapX):C.x,this._wrapY?V(C.y,this._wrapY):C.y);return H.z=C.z,H},_pxBoundsToTileRange:function(C){var H=this.getTileSize();return new U(C.min.unscaleBy(H).floor(),C.max.unscaleBy(H).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var C in this._tiles)if(!this._tiles[C].loaded)return!1;return!0}});function pV(C){return new v4(C)}var _7=v4.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(C,H){this._url=C,H=g(this,H),H.detectRetina&&u1.retina&&H.maxZoom>0?(H.tileSize=Math.floor(H.tileSize/2),H.zoomReverse?(H.zoomOffset--,H.minZoom=Math.min(H.maxZoom,H.minZoom+1)):(H.zoomOffset++,H.maxZoom=Math.max(H.minZoom,H.maxZoom-1)),H.minZoom=Math.max(0,H.minZoom)):H.zoomReverse?H.minZoom=Math.min(H.maxZoom,H.minZoom):H.maxZoom=Math.max(H.minZoom,H.maxZoom),typeof H.subdomains=="string"&&(H.subdomains=H.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(C,H){return this._url===C&&H===void 0&&(H=!0),this._url=C,H||this.redraw(),this},createTile:function(C,H){var l=document.createElement("img");return A1(l,"load",o(this._tileOnLoad,this,H,l)),A1(l,"error",o(this._tileOnError,this,H,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(C),l},getTileUrl:function(C){var H={r:u1.retina?"@2x":"",s:this._getSubdomain(C),x:C.x,y:C.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-C.y;this.options.tms&&(H.y=l),H["-y"]=l}return k(this._url,e(H,this.options))},_tileOnLoad:function(C,H){u1.ielt9?setTimeout(o(C,this,null,H),0):C(null,H)},_tileOnError:function(C,H,l){var u=this.options.errorTileUrl;u&&H.getAttribute("src")!==u&&(H.src=u),C(l,H)},_onTileRemove:function(C){C.tile.onload=null},_getZoomForUrl:function(){var C=this._tileZoom,H=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(C=H-C),C+u},_getSubdomain:function(C){var H=Math.abs(C.x+C.y)%this.options.subdomains.length;return this.options.subdomains[H]},_abortLoading:function(){var C,H;for(C in this._tiles)if(this._tiles[C].coords.z!==this._tileZoom&&(H=this._tiles[C].el,H.onload=c,H.onerror=c,!H.complete)){H.src=R;var l=this._tiles[C].coords;M1(H),delete this._tiles[C],this.fire("tileabort",{tile:H,coords:l})}},_removeTile:function(C){var H=this._tiles[C];if(H)return H.el.setAttribute("src",R),v4.prototype._removeTile.call(this,C)},_tileReady:function(C,H,l){if(!(!this._map||l&&l.getAttribute("src")===R))return v4.prototype._tileReady.call(this,C,H,l)}});function Zi(C,H){return new _7(C,H)}var ki=_7.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(C,H){this._url=C;var l=e({},this.defaultWmsParams);for(var u in H)u in this.options||(l[u]=H[u]);H=g(this,H);var f=H.detectRetina&&u1.retina?2:1,b=this.getTileSize();l.width=b.x*f,l.height=b.y*f,this.wmsParams=l},onAdd:function(C){this._crs=this.options.crs||C.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var H=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[H]=this._crs.code,_7.prototype.onAdd.call(this,C)},getTileUrl:function(C){var H=this._tileCoordsToNwSe(C),l=this._crs,u=r1(l.project(H[0]),l.project(H[1])),f=u.min,b=u.max,P=(this._wmsVersion>=1.3&&this._crs===xi?[f.y,f.x,b.y,b.x]:[f.x,f.y,b.x,b.y]).join(","),$=_7.prototype.getTileUrl.call(this,C);return $+y(this.wmsParams,$,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+P},setParams:function(C,H){return e(this.wmsParams,C),H||this.redraw(),this}});function uV(C,H){return new ki(C,H)}_7.WMS=ki,Zi.wms=uV;var S0=W5.extend({options:{padding:.1},initialize:function(C){g(this,C),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),d1(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var C={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(C.zoomanim=this._onAnimZoom),C},_onAnimZoom:function(C){this._updateTransform(C.center,C.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(C,H){var l=this._map.getZoomScale(H,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),f=this._map.project(this._center,H),b=u.multiplyBy(-l).add(f).subtract(this._map._getNewPixelOrigin(C,H));u1.any3d?m2(this._container,b,l):K1(this._container,b)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var C in this._layers)this._layers[C]._reset()},_onZoomEnd:function(){for(var C in this._layers)this._layers[C]._project()},_updatePaths:function(){for(var C in this._layers)this._layers[C]._update()},_update:function(){var C=this.options.padding,H=this._map.getSize(),l=this._map.containerPointToLayerPoint(H.multiplyBy(-C)).round();this._bounds=new U(l,l.add(H.multiplyBy(1+C*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Oi=S0.extend({options:{tolerance:0},getEvents:function(){var C=S0.prototype.getEvents.call(this);return C.viewprereset=this._onViewPreReset,C},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){S0.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var C=this._container=document.createElement("canvas");A1(C,"mousemove",this._onMouseMove,this),A1(C,"click dblclick mousedown mouseup contextmenu",this._onClick,this),A1(C,"mouseout",this._handleMouseOut,this),C._leaflet_disable_events=!0,this._ctx=C.getContext("2d")},_destroyContainer:function(){m1(this._redrawRequest),delete this._ctx,M1(this._container),U1(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var C;this._redrawBounds=null;for(var H in this._layers)C=this._layers[H],C._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){S0.prototype._update.call(this);var C=this._bounds,H=this._container,l=C.getSize(),u=u1.retina?2:1;K1(H,C.min),H.width=u*l.x,H.height=u*l.y,H.style.width=l.x+"px",H.style.height=l.y+"px",u1.retina&&this._ctx.scale(2,2),this._ctx.translate(-C.min.x,-C.min.y),this.fire("update")}},_reset:function(){S0.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(C){this._updateDashArray(C),this._layers[n(C)]=C;var H=C._order={layer:C,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=H),this._drawLast=H,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(C){this._requestRedraw(C)},_removePath:function(C){var H=C._order,l=H.next,u=H.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete C._order,delete this._layers[n(C)],this._requestRedraw(C)},_updatePath:function(C){this._extendRedrawBounds(C),C._project(),C._update(),this._requestRedraw(C)},_updateStyle:function(C){this._updateDashArray(C),this._requestRedraw(C)},_updateDashArray:function(C){if(typeof C.options.dashArray=="string"){var H=C.options.dashArray.split(/[, ]+/),l=[],u,f;for(f=0;f<H.length;f++){if(u=Number(H[f]),isNaN(u))return;l.push(u)}C.options._dashArray=l}else C.options._dashArray=C.options.dashArray},_requestRedraw:function(C){this._map&&(this._extendRedrawBounds(C),this._redrawRequest=this._redrawRequest||o1(this._redraw,this))},_extendRedrawBounds:function(C){if(C._pxBounds){var H=(C.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new U,this._redrawBounds.extend(C._pxBounds.min.subtract([H,H])),this._redrawBounds.extend(C._pxBounds.max.add([H,H]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var C=this._redrawBounds;if(C){var H=C.getSize();this._ctx.clearRect(C.min.x,C.min.y,H.x,H.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var C,H=this._redrawBounds;if(this._ctx.save(),H){var l=H.getSize();this._ctx.beginPath(),this._ctx.rect(H.min.x,H.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)C=u.layer,(!H||C._pxBounds&&C._pxBounds.intersects(H))&&C._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(C,H){if(this._drawing){var l,u,f,b,P=C._parts,$=P.length,I=this._ctx;if($){for(I.beginPath(),l=0;l<$;l++){for(u=0,f=P[l].length;u<f;u++)b=P[l][u],I[u?"lineTo":"moveTo"](b.x,b.y);H&&I.closePath()}this._fillStroke(I,C)}}},_updateCircle:function(C){if(!(!this._drawing||C._empty())){var H=C._point,l=this._ctx,u=Math.max(Math.round(C._radius),1),f=(Math.max(Math.round(C._radiusY),1)||u)/u;f!==1&&(l.save(),l.scale(1,f)),l.beginPath(),l.arc(H.x,H.y/f,u,0,Math.PI*2,!1),f!==1&&l.restore(),this._fillStroke(l,C)}},_fillStroke:function(C,H){var l=H.options;l.fill&&(C.globalAlpha=l.fillOpacity,C.fillStyle=l.fillColor||l.color,C.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(C.setLineDash&&C.setLineDash(H.options&&H.options._dashArray||[]),C.globalAlpha=l.opacity,C.lineWidth=l.weight,C.strokeStyle=l.color,C.lineCap=l.lineCap,C.lineJoin=l.lineJoin,C.stroke())},_onClick:function(C){for(var H=this._map.mouseEventToLayerPoint(C),l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(H)&&(!(C.type==="click"||C.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,C)},_onMouseMove:function(C){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var H=this._map.mouseEventToLayerPoint(C);this._handleMouseHover(C,H)}},_handleMouseOut:function(C){var H=this._hoveredLayer;H&&(R1(this._container,"leaflet-interactive"),this._fireEvent([H],C,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(C,H){if(!this._mouseHoverThrottled){for(var l,u,f=this._drawFirst;f;f=f.next)l=f.layer,l.options.interactive&&l._containsPoint(H)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(C),u&&(d1(this._container,"leaflet-interactive"),this._fireEvent([u],C,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,C),this._mouseHoverThrottled=!0,setTimeout(o(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(C,H,l){this._map._fireDOMEvent(H,l||H.type,C)},_bringToFront:function(C){var H=C._order;if(H){var l=H.next,u=H.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),H.prev=this._drawLast,this._drawLast.next=H,H.next=null,this._drawLast=H,this._requestRedraw(C)}},_bringToBack:function(C){var H=C._order;if(H){var l=H.next,u=H.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),H.prev=null,H.next=this._drawFirst,this._drawFirst.prev=H,this._drawFirst=H,this._requestRedraw(C)}}});function Ti(C){return u1.canvas?new Oi(C):null}var x4=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(C){return document.createElement("<lvml:"+C+' class="lvml">')}}catch{}return function(C){return document.createElement("<"+C+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),mV={_initContainer:function(){this._container=D("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(S0.prototype._update.call(this),this.fire("update"))},_initPath:function(C){var H=C._container=x4("shape");d1(H,"leaflet-vml-shape "+(this.options.className||"")),H.coordsize="1 1",C._path=x4("path"),H.appendChild(C._path),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){var H=C._container;this._container.appendChild(H),C.options.interactive&&C.addInteractiveTarget(H)},_removePath:function(C){var H=C._container;M1(H),C.removeInteractiveTarget(H),delete this._layers[n(C)]},_updateStyle:function(C){var H=C._stroke,l=C._fill,u=C.options,f=C._container;f.stroked=!!u.stroke,f.filled=!!u.fill,u.stroke?(H||(H=C._stroke=x4("stroke")),f.appendChild(H),H.weight=u.weight+"px",H.color=u.color,H.opacity=u.opacity,u.dashArray?H.dashStyle=T(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):H.dashStyle="",H.endcap=u.lineCap.replace("butt","flat"),H.joinstyle=u.lineJoin):H&&(f.removeChild(H),C._stroke=null),u.fill?(l||(l=C._fill=x4("fill")),f.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(f.removeChild(l),C._fill=null)},_updateCircle:function(C){var H=C._point.round(),l=Math.round(C._radius),u=Math.round(C._radiusY||l);this._setPath(C,C._empty()?"M0 0":"AL "+H.x+","+H.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(C,H){C._path.v=H},_bringToFront:function(C){F1(C._container)},_bringToBack:function(C){$1(C._container)}},k6=u1.vml?x4:q2,g4=S0.extend({_initContainer:function(){this._container=k6("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=k6("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){M1(this._container),U1(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){S0.prototype._update.call(this);var C=this._bounds,H=C.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(H))&&(this._svgSize=H,l.setAttribute("width",H.x),l.setAttribute("height",H.y)),K1(l,C.min),l.setAttribute("viewBox",[C.min.x,C.min.y,H.x,H.y].join(" ")),this.fire("update")}},_initPath:function(C){var H=C._path=k6("path");C.options.className&&d1(H,C.options.className),C.options.interactive&&d1(H,"leaflet-interactive"),this._updateStyle(C),this._layers[n(C)]=C},_addPath:function(C){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(C._path),C.addInteractiveTarget(C._path)},_removePath:function(C){M1(C._path),C.removeInteractiveTarget(C._path),delete this._layers[n(C)]},_updatePath:function(C){C._project(),C._update()},_updateStyle:function(C){var H=C._path,l=C.options;H&&(l.stroke?(H.setAttribute("stroke",l.color),H.setAttribute("stroke-opacity",l.opacity),H.setAttribute("stroke-width",l.weight),H.setAttribute("stroke-linecap",l.lineCap),H.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?H.setAttribute("stroke-dasharray",l.dashArray):H.removeAttribute("stroke-dasharray"),l.dashOffset?H.setAttribute("stroke-dashoffset",l.dashOffset):H.removeAttribute("stroke-dashoffset")):H.setAttribute("stroke","none"),l.fill?(H.setAttribute("fill",l.fillColor||l.color),H.setAttribute("fill-opacity",l.fillOpacity),H.setAttribute("fill-rule",l.fillRule||"evenodd")):H.setAttribute("fill","none"))},_updatePoly:function(C,H){this._setPath(C,x5(C._parts,H))},_updateCircle:function(C){var H=C._point,l=Math.max(Math.round(C._radius),1),u=Math.max(Math.round(C._radiusY),1)||l,f="a"+l+","+u+" 0 1,0 ",b=C._empty()?"M0 0":"M"+(H.x-l)+","+H.y+f+l*2+",0 "+f+-l*2+",0 ";this._setPath(C,b)},_setPath:function(C,H){C._path.setAttribute("d",H)},_bringToFront:function(C){F1(C._path)},_bringToBack:function(C){$1(C._path)}});u1.vml&&g4.include(mV);function Pi(C){return u1.svg||u1.vml?new g4(C):null}_1.include({getRenderer:function(C){var H=C.options.renderer||this._getPaneRenderer(C.options.pane)||this.options.renderer||this._renderer;return H||(H=this._renderer=this._createRenderer()),this.hasLayer(H)||this.addLayer(H),H},_getPaneRenderer:function(C){if(C==="overlayPane"||C===void 0)return!1;var H=this._paneRenderers[C];return H===void 0&&(H=this._createRenderer({pane:C}),this._paneRenderers[C]=H),H},_createRenderer:function(C){return this.options.preferCanvas&&Ti(C)||Pi(C)}});var Ei=x7.extend({initialize:function(C,H){x7.prototype.initialize.call(this,this._boundsToLatLngs(C),H)},setBounds:function(C){return this.setLatLngs(this._boundsToLatLngs(C))},_boundsToLatLngs:function(C){return C=h1(C),[C.getSouthWest(),C.getNorthWest(),C.getNorthEast(),C.getSouthEast()]}});function hV(C,H){return new Ei(C,H)}g4.create=k6,g4.pointsToPath=x5,w0.geometryToLayer=g6,w0.coordsToLatLng=te,w0.coordsToLatLngs=_6,w0.latLngToCoords=ee,w0.latLngsToCoords=b6,w0.getFeature=g7,w0.asFeature=w6,_1.mergeOptions({boxZoom:!0});var Fi=n5.extend({initialize:function(C){this._map=C,this._container=C._container,this._pane=C._panes.overlayPane,this._resetStateTimeout=0,C.on("unload",this._destroy,this)},addHooks:function(){A1(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){U1(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){M1(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(C){if(!C.shiftKey||C.which!==1&&C.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),b2(),a0(),this._startPoint=this._map.mouseEventToContainerPoint(C),A1(document,{contextmenu:I5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(C){this._moved||(this._moved=!0,this._box=D("div","leaflet-zoom-box",this._container),d1(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(C);var H=new U(this._point,this._startPoint),l=H.getSize();K1(this._box,H.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(M1(this._box),R1(this._container,"leaflet-crosshair")),d5(),n0(),U1(document,{contextmenu:I5,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(C){if(!(C.which!==1&&C.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(o(this._resetState,this),0);var H=new H1(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(H).fire("boxzoomend",{boxZoomBounds:H})}},_onKeyDown:function(C){C.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});_1.addInitHook("addHandler","boxZoom",Fi),_1.mergeOptions({doubleClickZoom:!0});var $i=n5.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(C){var H=this._map,l=H.getZoom(),u=H.options.zoomDelta,f=C.originalEvent.shiftKey?l-u:l+u;H.options.doubleClickZoom==="center"?H.setZoom(f):H.setZoomAround(C.containerPoint,f)}});_1.addInitHook("addHandler","doubleClickZoom",$i),_1.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Ri=n5.extend({addHooks:function(){if(!this._draggable){var C=this._map;this._draggable=new S5(C._mapPane,C._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),C.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),C.on("zoomend",this._onZoomEnd,this),C.whenReady(this._onZoomEnd,this))}d1(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){R1(this._map._container,"leaflet-grab"),R1(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var C=this._map;if(C._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var H=h1(this._map.options.maxBounds);this._offsetLimit=r1(this._map.latLngToContainerPoint(H.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(H.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;C.fire("movestart").fire("dragstart"),C.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(C){if(this._map.options.inertia){var H=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(H),this._prunePositions(H)}this._map.fire("move",C).fire("drag",C)},_prunePositions:function(C){for(;this._positions.length>1&&C-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var C=this._map.getSize().divideBy(2),H=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=H.subtract(C).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(C,H){return C-(C-H)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var C=this._draggable._newPos.subtract(this._draggable._startPos),H=this._offsetLimit;C.x<H.min.x&&(C.x=this._viscousLimit(C.x,H.min.x)),C.y<H.min.y&&(C.y=this._viscousLimit(C.y,H.min.y)),C.x>H.max.x&&(C.x=this._viscousLimit(C.x,H.max.x)),C.y>H.max.y&&(C.y=this._viscousLimit(C.y,H.max.y)),this._draggable._newPos=this._draggable._startPos.add(C)}},_onPreDragWrap:function(){var C=this._worldWidth,H=Math.round(C/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,f=(u-H+l)%C+H-l,b=(u+H+l)%C-H-l,P=Math.abs(f+l)<Math.abs(b+l)?f:b;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=P},_onDragEnd:function(C){var H=this._map,l=H.options,u=!l.inertia||C.noInertia||this._times.length<2;if(H.fire("dragend",C),u)H.fire("moveend");else{this._prunePositions(+new Date);var f=this._lastPos.subtract(this._positions[0]),b=(this._lastTime-this._times[0])/1e3,P=l.easeLinearity,$=f.multiplyBy(P/b),I=$.distanceTo([0,0]),j=Math.min(l.inertiaMaxSpeed,I),C1=$.multiplyBy(j/I),v1=j/(l.inertiaDeceleration*P),O1=C1.multiplyBy(-v1/2).round();!O1.x&&!O1.y?H.fire("moveend"):(O1=H._limitOffset(O1,H.options.maxBounds),o1(function(){H.panBy(O1,{duration:v1,easeLinearity:P,noMoveStart:!0,animate:!0})}))}}});_1.addInitHook("addHandler","dragging",Ri),_1.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Di=n5.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(C){this._map=C,this._setPanDelta(C.options.keyboardPanDelta),this._setZoomDelta(C.options.zoomDelta)},addHooks:function(){var C=this._map._container;C.tabIndex<=0&&(C.tabIndex="0"),A1(C,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),U1(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var C=document.body,H=document.documentElement,l=C.scrollTop||H.scrollTop,u=C.scrollLeft||H.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(C){var H=this._panKeys={},l=this.keyCodes,u,f;for(u=0,f=l.left.length;u<f;u++)H[l.left[u]]=[-1*C,0];for(u=0,f=l.right.length;u<f;u++)H[l.right[u]]=[C,0];for(u=0,f=l.down.length;u<f;u++)H[l.down[u]]=[0,C];for(u=0,f=l.up.length;u<f;u++)H[l.up[u]]=[0,-1*C]},_setZoomDelta:function(C){var H=this._zoomKeys={},l=this.keyCodes,u,f;for(u=0,f=l.zoomIn.length;u<f;u++)H[l.zoomIn[u]]=C;for(u=0,f=l.zoomOut.length;u<f;u++)H[l.zoomOut[u]]=-C},_addHooks:function(){A1(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){U1(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(C){if(!(C.altKey||C.ctrlKey||C.metaKey)){var H=C.keyCode,l=this._map,u;if(H in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[H],C.shiftKey&&(u=n1(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(n1(u),l.options.maxBounds)),l.options.worldCopyJump){var f=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(f)}else l.panBy(u)}else if(H in this._zoomKeys)l.setZoom(l.getZoom()+(C.shiftKey?3:1)*this._zoomKeys[H]);else if(H===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;I5(C)}}});_1.addInitHook("addHandler","keyboard",Di),_1.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Bi=n5.extend({addHooks:function(){A1(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){U1(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(C){var H=S2(C),l=this._map.options.wheelDebounceTime;this._delta+=H,this._lastMousePos=this._map.mouseEventToContainerPoint(C),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(o(this._performZoom,this),u),I5(C)},_performZoom:function(){var C=this._map,H=C.getZoom(),l=this._map.options.zoomSnap||0;C._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),f=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,b=l?Math.ceil(f/l)*l:f,P=C._limitZoom(H+(this._delta>0?b:-b))-H;this._delta=0,this._startTime=null,P&&(C.options.scrollWheelZoom==="center"?C.setZoom(H+P):C.setZoomAround(this._lastMousePos,H+P))}});_1.addInitHook("addHandler","scrollWheelZoom",Bi);var fV=600;_1.mergeOptions({tapHold:u1.touchNative&&u1.safari&&u1.mobile,tapTolerance:15});var zi=n5.extend({addHooks:function(){A1(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){U1(this._map._container,"touchstart",this._onDown,this)},_onDown:function(C){if(clearTimeout(this._holdTimeout),C.touches.length===1){var H=C.touches[0];this._startPos=this._newPos=new J(H.clientX,H.clientY),this._holdTimeout=setTimeout(o(function(){this._cancel(),this._isTapValid()&&(A1(document,"touchend",M2),A1(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",H))},this),fV),A1(document,"touchend touchcancel contextmenu",this._cancel,this),A1(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function C(){U1(document,"touchend",M2),U1(document,"touchend touchcancel",C)},_cancel:function(){clearTimeout(this._holdTimeout),U1(document,"touchend touchcancel contextmenu",this._cancel,this),U1(document,"touchmove",this._onMove,this)},_onMove:function(C){var H=C.touches[0];this._newPos=new J(H.clientX,H.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(C,H){var l=new MouseEvent(C,{bubbles:!0,cancelable:!0,view:window,screenX:H.screenX,screenY:H.screenY,clientX:H.clientX,clientY:H.clientY});l._simulated=!0,H.target.dispatchEvent(l)}});_1.addInitHook("addHandler","tapHold",zi),_1.mergeOptions({touchZoom:u1.touch,bounceAtZoomLimits:!0});var Ii=n5.extend({addHooks:function(){d1(this._map._container,"leaflet-touch-zoom"),A1(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){R1(this._map._container,"leaflet-touch-zoom"),U1(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(C){var H=this._map;if(!(!C.touches||C.touches.length!==2||H._animatingZoom||this._zooming)){var l=H.mouseEventToContainerPoint(C.touches[0]),u=H.mouseEventToContainerPoint(C.touches[1]);this._centerPoint=H.getSize()._divideBy(2),this._startLatLng=H.containerPointToLatLng(this._centerPoint),H.options.touchZoom!=="center"&&(this._pinchStartLatLng=H.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=H.getZoom(),this._moved=!1,this._zooming=!0,H._stop(),A1(document,"touchmove",this._onTouchMove,this),A1(document,"touchend touchcancel",this._onTouchEnd,this),M2(C)}},_onTouchMove:function(C){if(!(!C.touches||C.touches.length!==2||!this._zooming)){var H=this._map,l=H.mouseEventToContainerPoint(C.touches[0]),u=H.mouseEventToContainerPoint(C.touches[1]),f=l.distanceTo(u)/this._startDist;if(this._zoom=H.getScaleZoom(f,this._startZoom),!H.options.bounceAtZoomLimits&&(this._zoom<H.getMinZoom()&&f<1||this._zoom>H.getMaxZoom()&&f>1)&&(this._zoom=H._limitZoom(this._zoom)),H.options.touchZoom==="center"){if(this._center=this._startLatLng,f===1)return}else{var b=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(f===1&&b.x===0&&b.y===0)return;this._center=H.unproject(H.project(this._pinchStartLatLng,this._zoom).subtract(b),this._zoom)}this._moved||(H._moveStart(!0,!1),this._moved=!0),m1(this._animRequest);var P=o(H._move,H,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=o1(P,this,!0),M2(C)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,m1(this._animRequest),U1(document,"touchmove",this._onTouchMove,this),U1(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});_1.addInitHook("addHandler","touchZoom",Ii),_1.BoxZoom=Fi,_1.DoubleClickZoom=$i,_1.Drag=Ri,_1.Keyboard=Di,_1.ScrollWheelZoom=Bi,_1.TapHold=zi,_1.TouchZoom=Ii,r.Bounds=U,r.Browser=u1,r.CRS=g1,r.Canvas=Oi,r.Circle=Jt,r.CircleMarker=x6,r.Class=y1,r.Control=Q2,r.DivIcon=yi,r.DivOverlay=L0,r.DomEvent=a5,r.DomUtil=P3,r.Draggable=S5,r.Evented=Z1,r.FeatureGroup=_0,r.GeoJSON=w0,r.GridLayer=v4,r.Handler=n5,r.Icon=v7,r.ImageOverlay=S6,r.LatLng=s1,r.LatLngBounds=H1,r.Layer=W5,r.LayerGroup=A7,r.LineUtil=Ks,r.Map=_1,r.Marker=v6,r.Mixin=qt,r.Path=K0,r.Point=J,r.PolyUtil=js,r.Polygon=x7,r.Polyline=b0,r.Popup=y6,r.PosAnimation=w5,r.Projection=Xs,r.Rectangle=Ei,r.Renderer=S0,r.SVG=g4,r.SVGOverlay=Si,r.TileLayer=_7,r.Tooltip=Z6,r.Transformation=E2,r.Util=W1,r.VideoOverlay=wi,r.bind=o,r.bounds=r1,r.canvas=Ti,r.circle=aV,r.circleMarker=CV,r.control=Y,r.divIcon=dV,r.extend=e,r.featureGroup=rV,r.geoJSON=bi,r.geoJson=sV,r.gridLayer=pV,r.icon=iV,r.imageOverlay=VV,r.latLng=V1,r.latLngBounds=h1,r.layerGroup=eV,r.map=E3,r.marker=oV,r.point=n1,r.polygon=HV,r.polyline=nV,r.popup=cV,r.rectangle=hV,r.setOptions=g,r.stamp=n,r.svg=Pi,r.svgOverlay=lV,r.tileLayer=Zi,r.tooltip=MV,r.transformation=l2,r.version=t,r.videoOverlay=LV;var AV=window.L;r.noConflict=function(){return window.L=AV,this},window.L=r}))});var P6=globalThis,E6=P6.ShadowRoot&&(P6.ShadyCSS===void 0||P6.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),qi=new WeakMap,b4=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(E6&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=qi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&qi.set(e,t))}return t}toString(){return this.cssText}},y0=r=>new b4(typeof r=="string"?r:r+"",void 0,oe),l1=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,a)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new b4(e,r,oe)},Yi=(r,t)=>{if(E6)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),o=P6.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)}},Ce=E6?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return y0(e)})(r):r;var{is:FV,defineProperty:$V,getOwnPropertyDescriptor:RV,getOwnPropertyNames:DV,getOwnPropertySymbols:BV,getPrototypeOf:zV}=Object,X0=globalThis,Qi=X0.trustedTypes,IV=Qi?Qi.emptyScript:"",NV=X0.reactiveElementPolyfillSupport,w4=(r,t)=>r,S4={toAttribute(r,t){switch(t){case Boolean:r=r?IV:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},F6=(r,t)=>!FV(r,t),Ki={attribute:!0,type:String,converter:S4,reflect:!1,useDefault:!1,hasChanged:F6};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),X0.litPropertyMetadata??(X0.litPropertyMetadata=new WeakMap);var Z0=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ki){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),o=this.getPropertyDescriptor(t,i,e);o!==void 0&&$V(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){let{get:o,set:a}=RV(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:o,set(n){let s=o?.call(this);a?.call(this,n),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ki}static _$Ei(){if(this.hasOwnProperty(w4("elementProperties")))return;let t=zV(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w4("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w4("properties"))){let e=this.properties,i=[...DV(e),...BV(e)];for(let o of i)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,o]of e)this.elementProperties.set(i,o)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let o=this._$Eu(e,i);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(Ce(o))}else t!==void 0&&e.push(Ce(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yi(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){let a=(i.converter?.toAttribute!==void 0?i.converter:S4).toAttribute(e,i.type);this._$Em=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(t,e){let i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=i.getPropertyOptions(o),n=typeof a.converter=="function"?{fromAttribute:a.converter}:a.converter?.fromAttribute!==void 0?a.converter:S4;this._$Em=o;let s=n.fromAttribute(e,a.type);this[o]=s??this._$Ej?.get(o)??s,this._$Em=null}}requestUpdate(t,e,i,o=!1,a){if(t!==void 0){let n=this.constructor;if(o===!1&&(a=this[t]),i??(i=n.getPropertyOptions(t)),!((i.hasChanged??F6)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:o,wrapped:a},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),a!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,a]of i){let{wrapped:n}=a,s=this[o];n!==!0||this._$AL.has(o)||s===void 0||this.C(o,void 0,a,s)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Z0.elementStyles=[],Z0.shadowRootOptions={mode:"open"},Z0[w4("elementProperties")]=new Map,Z0[w4("finalized")]=new Map,NV?.({ReactiveElement:Z0}),(X0.reactiveElementVersions??(X0.reactiveElementVersions=[])).push("2.1.2");var Z4=globalThis,Xi=r=>r,$6=Z4.trustedTypes,Ji=$6?$6.createPolicy("lit-html",{createHTML:r=>r}):void 0,Co="$lit$",J0=`lit$${Math.random().toFixed(9).slice(2)}$`,ao="?"+J0,WV=`<${ao}>`,z3=document,k4=()=>z3.createComment(""),O4=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,UV=r=>le(r)||typeof r?.[Symbol.iterator]=="function",ae=`[ 	
\f\r]`,y4=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,to=/-->/g,eo=/>/g,D3=RegExp(`>|${ae}(?:([^\\s"'>=/]+)(${ae}*=${ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ro=/'/g,io=/"/g,no=/^(?:script|style|textarea|title)$/i,ce=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),x=ce(1),w1=ce(2),QA=ce(3),u5=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),oo=new WeakMap,B3=z3.createTreeWalker(z3,129);function Ho(r,t){if(!le(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ji!==void 0?Ji.createHTML(t):t}var jV=(r,t)=>{let e=r.length-1,i=[],o,a=t===2?"<svg>":t===3?"<math>":"",n=y4;for(let s=0;s<e;s++){let V=r[s],c,p,h=-1,v=0;for(;v<V.length&&(n.lastIndex=v,p=n.exec(V),p!==null);)v=n.lastIndex,n===y4?p[1]==="!--"?n=to:p[1]!==void 0?n=eo:p[2]!==void 0?(no.test(p[2])&&(o=RegExp("</"+p[2],"g")),n=D3):p[3]!==void 0&&(n=D3):n===D3?p[0]===">"?(n=o??y4,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?D3:p[3]==='"'?io:ro):n===io||n===ro?n=D3:n===to||n===eo?n=y4:(n=D3,o=void 0);let g=n===D3&&r[s+1].startsWith("/>")?" ":"";a+=n===y4?V+WV:h>=0?(i.push(c),V.slice(0,h)+Co+V.slice(h)+J0+g):V+J0+(h===-2?s:g)}return[Ho(r,a+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},T4=class r{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let a=0,n=0,s=t.length-1,V=this.parts,[c,p]=jV(t,e);if(this.el=r.createElement(c,i),B3.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=B3.nextNode())!==null&&V.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(let h of o.getAttributeNames())if(h.endsWith(Co)){let v=p[n++],g=o.getAttribute(h).split(J0),y=/([.?@])?(.*)/.exec(v);V.push({type:1,index:a,name:y[2],strings:g,ctor:y[1]==="."?He:y[1]==="?"?se:y[1]==="@"?Ve:S7}),o.removeAttribute(h)}else h.startsWith(J0)&&(V.push({type:6,index:a}),o.removeAttribute(h));if(no.test(o.tagName)){let h=o.textContent.split(J0),v=h.length-1;if(v>0){o.textContent=$6?$6.emptyScript:"";for(let g=0;g<v;g++)o.append(h[g],k4()),B3.nextNode(),V.push({type:2,index:++a});o.append(h[v],k4())}}}else if(o.nodeType===8)if(o.data===ao)V.push({type:2,index:a});else{let h=-1;for(;(h=o.data.indexOf(J0,h+1))!==-1;)V.push({type:7,index:a}),h+=J0.length-1}a++}}static createElement(t,e){let i=z3.createElement("template");return i.innerHTML=t,i}};function w7(r,t,e=r,i){if(t===u5)return t;let o=i!==void 0?e._$Co?.[i]:e._$Cl,a=O4(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=o:e._$Cl=o),o!==void 0&&(t=w7(r,o._$AS(r,t.values),o,i)),t}var ne=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,o=(t?.creationScope??z3).importNode(e,!0);B3.currentNode=o;let a=B3.nextNode(),n=0,s=0,V=i[0];for(;V!==void 0;){if(n===V.index){let c;V.type===2?c=new P4(a,a.nextSibling,this,t):V.type===1?c=new V.ctor(a,V.name,V.strings,this,t):V.type===6&&(c=new Le(a,this,t)),this._$AV.push(c),V=i[++s]}n!==V?.index&&(a=B3.nextNode(),n++)}return B3.currentNode=z3,o}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},P4=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,o){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w7(this,t,e),O4(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==u5&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):UV(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&O4(this._$AH)?this._$AA.nextSibling.data=t:this.T(z3.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T4.createElement(Ho(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(e);else{let a=new ne(o,this),n=a.u(this.options);a.p(e),this.T(n),this._$AH=a}}_$AC(t){let e=oo.get(t.strings);return e===void 0&&oo.set(t.strings,e=new T4(t)),e}k(t){le(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let a of t)o===e.length?e.push(i=new r(this.O(k4()),this.O(k4()),this,this.options)):i=e[o],i._$AI(a),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=Xi(t).nextSibling;Xi(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},S7=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,o,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(t,e=this,i,o){let a=this.strings,n=!1;if(a===void 0)t=w7(this,t,e,0),n=!O4(t)||t!==this._$AH&&t!==u5,n&&(this._$AH=t);else{let s=t,V,c;for(t=a[0],V=0;V<a.length-1;V++)c=w7(this,s[i+V],e,V),c===u5&&(c=this._$AH[V]),n||(n=!O4(c)||c!==this._$AH[V]),c===Z?t=Z:t!==Z&&(t+=(c??"")+a[V+1]),this._$AH[V]=c}n&&!o&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},He=class extends S7{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}},se=class extends S7{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}},Ve=class extends S7{constructor(t,e,i,o,a){super(t,e,i,o,a),this.type=5}_$AI(t,e=this){if((t=w7(this,t,e,0)??Z)===u5)return;let i=this._$AH,o=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==Z&&(i===Z||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Le=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w7(this,t)}};var GV=Z4.litHtmlPolyfillSupport;GV?.(T4,P4),(Z4.litHtmlVersions??(Z4.litHtmlVersions=[])).push("3.3.3");var so=(r,t,e)=>{let i=e?.renderBefore??t,o=i._$litPart$;if(o===void 0){let a=e?.renderBefore??null;i._$litPart$=o=new P4(t.insertBefore(k4(),a),a,void 0,e??{})}return o._$AI(r),o};var E4=globalThis,t1=class extends Z0{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=so(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return u5}};t1._$litElement$=!0,t1.finalized=!0,E4.litElementHydrateSupport?.({LitElement:t1});var qV=E4.litElementPolyfillSupport;qV?.({LitElement:t1});(E4.litElementVersions??(E4.litElementVersions=[])).push("4.2.2");var R6="2026.10.21.16",F4="weather-station-flex-card",$4="Weather Station Flex Card";var X1=l1`
  :host {
    display: flex;
    flex-direction: column;
    color: var(--primary-text-color);
    --wsfc-muted: var(--secondary-text-color);
    --wsfc-temp: var(--wsfc-temp-color, #ff9800);
    --wsfc-dew: var(--wsfc-dew-color, #26c6da);
    --wsfc-hum: var(--wsfc-hum-color, #42a5f5);
    --wsfc-wind: var(--wsfc-wind-color, #42a5f5);
    --wsfc-gust: var(--wsfc-gust-color, #ff9800);
  }
  .head {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 32px;
    margin-bottom: 8px;
    padding-right: var(--wsfc-head-pad, 0);
  }
  .head ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
  .head .title { font-size: 15px; font-weight: 500; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .seg {
    display: inline-flex;
    border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.3));
    border-radius: 999px;
    overflow: hidden;
  }
  .seg button {
    font: inherit;
    font-size: 12px;
    color: var(--wsfc-muted);
    background: transparent;
    border: 0;
    padding: 4px 10px;
    cursor: pointer;
  }
  .seg button[aria-pressed="true"] {
    background: var(--primary-color);
    color: var(--text-primary-color, #fff);
  }
  .readings {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 18px;
    margin-bottom: 8px;
  }
  .reading { display: flex; flex-direction: column; cursor: pointer; }
  .reading .v { font-size: 22px; font-weight: 500; line-height: 1.15; white-space: nowrap; }
  .reading .v small { font-size: 13px; font-weight: 400; color: var(--wsfc-muted); margin-left: 2px; }
  .reading .l { font-size: 12px; color: var(--wsfc-muted); display: flex; align-items: center; gap: 4px; }
  .reading .dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .body { position: relative; flex: 1; min-height: 160px; }
  .note { color: var(--wsfc-muted); font-size: 13px; padding: 8px 0; }
`,D6=l1`
    .tile {
      position: relative;
      background: var(--wsfc-tile-bg, rgba(127, 127, 127, 0.08));
      border-radius: var(--wsfc-radius, 16px);
      padding: 12px 14px;
      min-width: 0;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      /* visible: a non-visible overflow would let the grid shrink a tile below
         its content (its automatic minimum height becomes 0). Panels clip
         their own content. */
      overflow: visible;
    }
    /* The hero's Weather Flex card draws its own background and sizes to its sections. */
    .tile.hero { background: transparent; padding: 0; }
    .tile.bare { background: transparent; padding: 4px 2px; overflow: visible; }
    .tile.stack { background: transparent; padding: 0; overflow: visible; }
    /* Children fill the tile but never shrink below their content. */
    .tile > :not(.expand) { flex: 1 0 auto; }
`,B6=l1`
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      font: inherit; font-size: 13px; white-space: nowrap;
      padding: 6px 12px; border-radius: 999px; cursor: pointer;
      color: var(--secondary-text-color);
      background: transparent;
      border: 1px solid var(--divider-color, rgba(127, 127, 127, 0.35));
      transition: background-color 0.15s, color 0.15s, border-color 0.15s;
    }
    .chip ha-icon { --mdc-icon-size: 18px; }
    .chip ha-icon.open { --mdc-icon-size: 14px; opacity: 0.7; }
    .chip.on { color: var(--text-primary-color, #fff); background: var(--primary-color); border-color: var(--primary-color); }
    .chip.popup { color: var(--primary-text-color); }
    .chip.popup.on { color: var(--text-primary-color, #fff); }
    .chip:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
`,B1=(r,t=0)=>r==null||Number.isNaN(r)?"\u2014":Number(r).toLocaleString(void 0,{maximumFractionDigits:t,minimumFractionDigits:t});function y7(r,t,e,i){return x`<div class="seg" role="group" aria-label=${i}>
    ${r.map(o=>x`<button type="button" aria-pressed=${String(o.value===t)} @click=${()=>e(o.value)}>${o.label}</button>`)}
  </div>`}function o2(r,t){t&&r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}function E1(r,t,e,i=Z){return r?.show_title===!1?i===Z?Z:x`<div class="head"><span class="title"></span>${i}</div>`:x`<div class="head">
    <ha-icon icon=${r?.icon||t}></ha-icon>
    <span class="title">${r?.title||e}</span>${i}
  </div>`}function Z7(r,{label:t,value:e,unit:i,digits:o=0,color:a,entity:n}){let s=()=>o2(r,n);return x`<div class="reading" @click=${s} role=${n?"button":Z} tabindex=${n?0:Z}
    @keydown=${V=>(V.key==="Enter"||V.key===" ")&&s()}>
    <span class="v">${B1(e,o)}<small>${i||""}</small></span>
    <span class="l">${a?x`<span class="dot" style="background:${a}"></span>`:Z}${t}</span>
  </div>`}var z6=l1`
  .paused { flex: 1; min-height: 120px; border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
    color: var(--wsfc-muted); font-size: 13px; text-align: center; padding: 8px;
    background: repeating-linear-gradient(135deg, rgba(127, 127, 127, 0.08) 0 12px, rgba(127, 127, 127, 0.14) 12px 24px); }
  .paused ha-icon { --mdc-icon-size: 32px; opacity: 0.7; }
`;function I6(r,t){return x`<div class="paused" role="img" aria-label="${t} paused while editing"><ha-icon icon=${r}></ha-icon><span>${t} — paused while editing</span></div>`}var YV=typeof global=="object"&&global&&global.Object===Object&&global,N6=YV;var QV=typeof self=="object"&&self&&self.Object===Object&&self,KV=N6||QV||Function("return this")(),k5=KV;var XV=k5.Symbol,k0=XV;var Vo=Object.prototype,JV=Vo.hasOwnProperty,tL=Vo.toString,R4=k0?k0.toStringTag:void 0;function eL(r){var t=JV.call(r,R4),e=r[R4];try{r[R4]=void 0;var i=!0}catch{}var o=tL.call(r);return i&&(t?r[R4]=e:delete r[R4]),o}var Lo=eL;var rL=Object.prototype,iL=rL.toString;function oL(r){return iL.call(r)}var lo=oL;var CL="[object Null]",aL="[object Undefined]",co=k0?k0.toStringTag:void 0;function nL(r){return r==null?r===void 0?aL:CL:co&&co in Object(r)?Lo(r):lo(r)}var l0=nL;function HL(r){return r!=null&&typeof r=="object"}var O5=HL;var sL="[object Symbol]";function VL(r){return typeof r=="symbol"||O5(r)&&l0(r)==sL}var W6=VL;function LL(r,t){for(var e=-1,i=r==null?0:r.length,o=Array(i);++e<i;)o[e]=t(r[e],e,r);return o}var Mo=LL;var lL=Array.isArray,I3=lL;var cL=1/0,po=k0?k0.prototype:void 0,uo=po?po.toString:void 0;function mo(r){if(typeof r=="string")return r;if(I3(r))return Mo(r,mo)+"";if(W6(r))return uo?uo.call(r):"";var t=r+"";return t=="0"&&1/r==-cL?"-0":t}var ho=mo;var ML=/\s/;function dL(r){for(var t=r.length;t--&&ML.test(r.charAt(t)););return t}var fo=dL;var pL=/^\s+/;function uL(r){return r&&r.slice(0,fo(r)+1).replace(pL,"")}var Ao=uL;function mL(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}var B2=mL;var vo=NaN,hL=/^[-+]0x[0-9a-f]+$/i,fL=/^0b[01]+$/i,AL=/^0o[0-7]+$/i,vL=parseInt;function xL(r){if(typeof r=="number")return r;if(W6(r))return vo;if(B2(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=B2(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=Ao(r);var e=fL.test(r);return e||AL.test(r)?vL(r.slice(2),e?2:8):hL.test(r)?vo:+r}var xo=xL;var go=1/0,gL=17976931348623157e292;function _L(r){if(!r)return r===0?r:0;if(r=xo(r),r===go||r===-go){var t=r<0?-1:1;return t*gL}return r===r?r:0}var Me=_L;function bL(r){return r}var U6=bL;var wL="[object AsyncFunction]",SL="[object Function]",yL="[object GeneratorFunction]",ZL="[object Proxy]";function kL(r){if(!B2(r))return!1;var t=l0(r);return t==SL||t==yL||t==wL||t==ZL}var k7=kL;var OL=k5["__core-js_shared__"],j6=OL;var _o=(function(){var r=/[^.]+$/.exec(j6&&j6.keys&&j6.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function TL(r){return!!_o&&_o in r}var bo=TL;var PL=Function.prototype,EL=PL.toString;function FL(r){if(r!=null){try{return EL.call(r)}catch{}try{return r+""}catch{}}return""}var wo=FL;var $L=/[\\^$.*+?()[\]{}|]/g,RL=/^\[object .+?Constructor\]$/,DL=Function.prototype,BL=Object.prototype,zL=DL.toString,IL=BL.hasOwnProperty,NL=RegExp("^"+zL.call(IL).replace($L,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function WL(r){if(!B2(r)||bo(r))return!1;var t=k7(r)?NL:RL;return t.test(wo(r))}var So=WL;function UL(r,t){return r?.[t]}var yo=UL;function jL(r,t){var e=yo(r,t);return So(e)?e:void 0}var O7=jL;var Zo=Object.create,GL=(function(){function r(){}return function(t){if(!B2(t))return{};if(Zo)return Zo(t);r.prototype=t;var e=new r;return r.prototype=void 0,e}})(),ko=GL;function qL(r,t,e){switch(e.length){case 0:return r.call(t);case 1:return r.call(t,e[0]);case 2:return r.call(t,e[0],e[1]);case 3:return r.call(t,e[0],e[1],e[2])}return r.apply(t,e)}var Oo=qL;function YL(r,t){var e=-1,i=r.length;for(t||(t=Array(i));++e<i;)t[e]=r[e];return t}var To=YL;var QL=800,KL=16,XL=Date.now;function JL(r){var t=0,e=0;return function(){var i=XL(),o=KL-(i-e);if(e=i,o>0){if(++t>=QL)return arguments[0]}else t=0;return r.apply(void 0,arguments)}}var Po=JL;function tl(r){return function(){return r}}var Eo=tl;var el=(function(){try{var r=O7(Object,"defineProperty");return r({},"",{}),r}catch{}})(),T7=el;var rl=T7?function(r,t){return T7(r,"toString",{configurable:!0,enumerable:!1,value:Eo(t),writable:!0})}:U6,Fo=rl;var il=Po(Fo),$o=il;var ol=9007199254740991,Cl=/^(?:0|[1-9]\d*)$/;function al(r,t){var e=typeof r;return t=t??ol,!!t&&(e=="number"||e!="symbol"&&Cl.test(r))&&r>-1&&r%1==0&&r<t}var G6=al;function nl(r,t,e){t=="__proto__"&&T7?T7(r,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):r[t]=e}var P7=nl;function Hl(r,t){return r===t||r!==r&&t!==t}var t3=Hl;var sl=Object.prototype,Vl=sl.hasOwnProperty;function Ll(r,t,e){var i=r[t];(!(Vl.call(r,t)&&t3(i,e))||e===void 0&&!(t in r))&&P7(r,t,e)}var Ro=Ll;function ll(r,t,e,i){var o=!e;e||(e={});for(var a=-1,n=t.length;++a<n;){var s=t[a],V=i?i(e[s],r[s],s,e,r):void 0;V===void 0&&(V=r[s]),o?P7(e,s,V):Ro(e,s,V)}return e}var Do=ll;var Bo=Math.max;function cl(r,t,e){return t=Bo(t===void 0?r.length-1:t,0),function(){for(var i=arguments,o=-1,a=Bo(i.length-t,0),n=Array(a);++o<a;)n[o]=i[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=i[o];return s[t]=e(n),Oo(r,this,s)}}var zo=cl;function Ml(r,t){return $o(zo(r,t,U6),r+"")}var Io=Ml;var dl=9007199254740991;function pl(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=dl}var q6=pl;function ul(r){return r!=null&&q6(r.length)&&!k7(r)}var E7=ul;function ml(r,t,e){if(!B2(e))return!1;var i=typeof t;return(i=="number"?E7(e)&&G6(t,e.length):i=="string"&&t in e)?t3(e[t],r):!1}var Y6=ml;function hl(r){return Io(function(t,e){var i=-1,o=e.length,a=o>1?e[o-1]:void 0,n=o>2?e[2]:void 0;for(a=r.length>3&&typeof a=="function"?(o--,a):void 0,n&&Y6(e[0],e[1],n)&&(a=o<3?void 0:a,o=1),t=Object(t);++i<o;){var s=e[i];s&&r(t,s,i,a)}return t})}var No=hl;var fl=Object.prototype;function Al(r){var t=r&&r.constructor,e=typeof t=="function"&&t.prototype||fl;return r===e}var Q6=Al;function vl(r,t){for(var e=-1,i=Array(r);++e<r;)i[e]=t(e);return i}var Wo=vl;var xl="[object Arguments]";function gl(r){return O5(r)&&l0(r)==xl}var de=gl;var Uo=Object.prototype,_l=Uo.hasOwnProperty,bl=Uo.propertyIsEnumerable,wl=de((function(){return arguments})())?de:function(r){return O5(r)&&_l.call(r,"callee")&&!bl.call(r,"callee")},D4=wl;function Sl(){return!1}var jo=Sl;var Yo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Go=Yo&&typeof module=="object"&&module&&!module.nodeType&&module,yl=Go&&Go.exports===Yo,qo=yl?k5.Buffer:void 0,Zl=qo?qo.isBuffer:void 0,kl=Zl||jo,K6=kl;var Ol="[object Arguments]",Tl="[object Array]",Pl="[object Boolean]",El="[object Date]",Fl="[object Error]",$l="[object Function]",Rl="[object Map]",Dl="[object Number]",Bl="[object Object]",zl="[object RegExp]",Il="[object Set]",Nl="[object String]",Wl="[object WeakMap]",Ul="[object ArrayBuffer]",jl="[object DataView]",Gl="[object Float32Array]",ql="[object Float64Array]",Yl="[object Int8Array]",Ql="[object Int16Array]",Kl="[object Int32Array]",Xl="[object Uint8Array]",Jl="[object Uint8ClampedArray]",tc="[object Uint16Array]",ec="[object Uint32Array]",C2={};C2[Gl]=C2[ql]=C2[Yl]=C2[Ql]=C2[Kl]=C2[Xl]=C2[Jl]=C2[tc]=C2[ec]=!0;C2[Ol]=C2[Tl]=C2[Ul]=C2[Pl]=C2[jl]=C2[El]=C2[Fl]=C2[$l]=C2[Rl]=C2[Dl]=C2[Bl]=C2[zl]=C2[Il]=C2[Nl]=C2[Wl]=!1;function rc(r){return O5(r)&&q6(r.length)&&!!C2[l0(r)]}var Qo=rc;function ic(r){return function(t){return r(t)}}var Ko=ic;var Xo=typeof exports=="object"&&exports&&!exports.nodeType&&exports,B4=Xo&&typeof module=="object"&&module&&!module.nodeType&&module,oc=B4&&B4.exports===Xo,pe=oc&&N6.process,Cc=(function(){try{var r=B4&&B4.require&&B4.require("util").types;return r||pe&&pe.binding&&pe.binding("util")}catch{}})(),ue=Cc;var Jo=ue&&ue.isTypedArray,ac=Jo?Ko(Jo):Qo,X6=ac;var nc=Object.prototype,Hc=nc.hasOwnProperty;function sc(r,t){var e=I3(r),i=!e&&D4(r),o=!e&&!i&&K6(r),a=!e&&!i&&!o&&X6(r),n=e||i||o||a,s=n?Wo(r.length,String):[],V=s.length;for(var c in r)(t||Hc.call(r,c))&&!(n&&(c=="length"||o&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||G6(c,V)))&&s.push(c);return s}var tC=sc;function Vc(r,t){return function(e){return r(t(e))}}var eC=Vc;function Lc(r){var t=[];if(r!=null)for(var e in Object(r))t.push(e);return t}var rC=Lc;var lc=Object.prototype,cc=lc.hasOwnProperty;function Mc(r){if(!B2(r))return rC(r);var t=Q6(r),e=[];for(var i in r)i=="constructor"&&(t||!cc.call(r,i))||e.push(i);return e}var iC=Mc;function dc(r){return E7(r)?tC(r,!0):iC(r)}var J6=dc;var pc=O7(Object,"create"),O0=pc;function uc(){this.__data__=O0?O0(null):{},this.size=0}var oC=uc;function mc(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}var CC=mc;var hc="__lodash_hash_undefined__",fc=Object.prototype,Ac=fc.hasOwnProperty;function vc(r){var t=this.__data__;if(O0){var e=t[r];return e===hc?void 0:e}return Ac.call(t,r)?t[r]:void 0}var aC=vc;var xc=Object.prototype,gc=xc.hasOwnProperty;function _c(r){var t=this.__data__;return O0?t[r]!==void 0:gc.call(t,r)}var nC=_c;var bc="__lodash_hash_undefined__";function wc(r,t){var e=this.__data__;return this.size+=this.has(r)?0:1,e[r]=O0&&t===void 0?bc:t,this}var HC=wc;function F7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}F7.prototype.clear=oC;F7.prototype.delete=CC;F7.prototype.get=aC;F7.prototype.has=nC;F7.prototype.set=HC;var me=F7;function Sc(){this.__data__=[],this.size=0}var sC=Sc;function yc(r,t){for(var e=r.length;e--;)if(t3(r[e][0],t))return e;return-1}var e3=yc;var Zc=Array.prototype,kc=Zc.splice;function Oc(r){var t=this.__data__,e=e3(t,r);if(e<0)return!1;var i=t.length-1;return e==i?t.pop():kc.call(t,e,1),--this.size,!0}var VC=Oc;function Tc(r){var t=this.__data__,e=e3(t,r);return e<0?void 0:t[e][1]}var LC=Tc;function Pc(r){return e3(this.__data__,r)>-1}var lC=Pc;function Ec(r,t){var e=this.__data__,i=e3(e,r);return i<0?(++this.size,e.push([r,t])):e[i][1]=t,this}var cC=Ec;function $7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}$7.prototype.clear=sC;$7.prototype.delete=VC;$7.prototype.get=LC;$7.prototype.has=lC;$7.prototype.set=cC;var r3=$7;var Fc=O7(k5,"Map"),t8=Fc;function $c(){this.size=0,this.__data__={hash:new me,map:new(t8||r3),string:new me}}var MC=$c;function Rc(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}var dC=Rc;function Dc(r,t){var e=r.__data__;return dC(t)?e[typeof t=="string"?"string":"hash"]:e.map}var i3=Dc;function Bc(r){var t=i3(this,r).delete(r);return this.size-=t?1:0,t}var pC=Bc;function zc(r){return i3(this,r).get(r)}var uC=zc;function Ic(r){return i3(this,r).has(r)}var mC=Ic;function Nc(r,t){var e=i3(this,r),i=e.size;return e.set(r,t),this.size+=e.size==i?0:1,this}var hC=Nc;function R7(r){var t=-1,e=r==null?0:r.length;for(this.clear();++t<e;){var i=r[t];this.set(i[0],i[1])}}R7.prototype.clear=MC;R7.prototype.delete=pC;R7.prototype.get=uC;R7.prototype.has=mC;R7.prototype.set=hC;var fC=R7;function Wc(r){return r==null?"":ho(r)}var e8=Wc;var Uc=eC(Object.getPrototypeOf,Object),r8=Uc;var jc="[object Object]",Gc=Function.prototype,qc=Object.prototype,AC=Gc.toString,Yc=qc.hasOwnProperty,Qc=AC.call(Object);function Kc(r){if(!O5(r)||l0(r)!=jc)return!1;var t=r8(r);if(t===null)return!0;var e=Yc.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&AC.call(e)==Qc}var vC=Kc;function Xc(r,t,e){var i=-1,o=r.length;t<0&&(t=-t>o?0:o+t),e=e>o?o:e,e<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=r[i+t];return a}var xC=Xc;function Jc(r,t,e){var i=r.length;return e=e===void 0?i:e,!t&&e>=i?r:xC(r,t,e)}var gC=Jc;var tM="\\ud800-\\udfff",eM="\\u0300-\\u036f",rM="\\ufe20-\\ufe2f",iM="\\u20d0-\\u20ff",oM=eM+rM+iM,CM="\\ufe0e\\ufe0f",aM="\\u200d",nM=RegExp("["+aM+tM+oM+CM+"]");function HM(r){return nM.test(r)}var i8=HM;function sM(r){return r.split("")}var _C=sM;var bC="\\ud800-\\udfff",VM="\\u0300-\\u036f",LM="\\ufe20-\\ufe2f",lM="\\u20d0-\\u20ff",cM=VM+LM+lM,MM="\\ufe0e\\ufe0f",dM="["+bC+"]",he="["+cM+"]",fe="\\ud83c[\\udffb-\\udfff]",pM="(?:"+he+"|"+fe+")",wC="[^"+bC+"]",SC="(?:\\ud83c[\\udde6-\\uddff]){2}",yC="[\\ud800-\\udbff][\\udc00-\\udfff]",uM="\\u200d",ZC=pM+"?",kC="["+MM+"]?",mM="(?:"+uM+"(?:"+[wC,SC,yC].join("|")+")"+kC+ZC+")*",hM=kC+ZC+mM,fM="(?:"+[wC+he+"?",he,SC,yC,dM].join("|")+")",AM=RegExp(fe+"(?="+fe+")|"+fM+hM,"g");function vM(r){return r.match(AM)||[]}var OC=vM;function xM(r){return i8(r)?OC(r):_C(r)}var TC=xM;function gM(r){return function(t){t=e8(t);var e=i8(t)?TC(t):void 0,i=e?e[0]:t.charAt(0),o=e?gC(e,1).join(""):t.slice(1);return i[r]()+o}}var PC=gM;var _M=PC("toUpperCase"),EC=_M;function bM(r){return EC(e8(r).toLowerCase())}var T5=bM;function wM(){this.__data__=new r3,this.size=0}var FC=wM;function SM(r){var t=this.__data__,e=t.delete(r);return this.size=t.size,e}var $C=SM;function yM(r){return this.__data__.get(r)}var RC=yM;function ZM(r){return this.__data__.has(r)}var DC=ZM;var kM=200;function OM(r,t){var e=this.__data__;if(e instanceof r3){var i=e.__data__;if(!t8||i.length<kM-1)return i.push([r,t]),this.size=++e.size,this;e=this.__data__=new fC(i)}return e.set(r,t),this.size=e.size,this}var BC=OM;function D7(r){var t=this.__data__=new r3(r);this.size=t.size}D7.prototype.clear=FC;D7.prototype.delete=$C;D7.prototype.get=RC;D7.prototype.has=DC;D7.prototype.set=BC;var zC=D7;var UC=typeof exports=="object"&&exports&&!exports.nodeType&&exports,IC=UC&&typeof module=="object"&&module&&!module.nodeType&&module,TM=IC&&IC.exports===UC,NC=TM?k5.Buffer:void 0,WC=NC?NC.allocUnsafe:void 0;function PM(r,t){if(t)return r.slice();var e=r.length,i=WC?WC(e):new r.constructor(e);return r.copy(i),i}var jC=PM;var EM=k5.Uint8Array,Ae=EM;function FM(r){var t=new r.constructor(r.byteLength);return new Ae(t).set(new Ae(r)),t}var GC=FM;function $M(r,t){var e=t?GC(r.buffer):r.buffer;return new r.constructor(e,r.byteOffset,r.length)}var qC=$M;function RM(r){return typeof r.constructor=="function"&&!Q6(r)?ko(r8(r)):{}}var YC=RM;function DM(r){return function(t,e,i){for(var o=-1,a=Object(t),n=i(t),s=n.length;s--;){var V=n[r?s:++o];if(e(a[V],V,a)===!1)break}return t}}var QC=DM;var BM=QC(),KC=BM;function zM(r,t,e){(e!==void 0&&!t3(r[t],e)||e===void 0&&!(t in r))&&P7(r,t,e)}var z4=zM;function IM(r){return O5(r)&&E7(r)}var XC=IM;function NM(r,t){if(!(t==="constructor"&&typeof r[t]=="function")&&t!="__proto__")return r[t]}var I4=NM;function WM(r){return Do(r,J6(r))}var JC=WM;function UM(r,t,e,i,o,a,n){var s=I4(r,e),V=I4(t,e),c=n.get(V);if(c){z4(r,e,c);return}var p=a?a(s,V,e+"",r,t,n):void 0,h=p===void 0;if(h){var v=I3(V),g=!v&&K6(V),y=!v&&!g&&X6(V);p=V,v||g||y?I3(s)?p=s:XC(s)?p=To(s):g?(h=!1,p=jC(V,!0)):y?(h=!1,p=qC(V,!0)):p=[]:vC(V)||D4(V)?(p=s,D4(s)?p=JC(s):(!B2(s)||k7(s))&&(p=YC(V))):h=!1}h&&(n.set(V,p),o(p,V,i,a,n),n.delete(V)),z4(r,e,p)}var ta=UM;function ea(r,t,e,i,o){r!==t&&KC(t,function(a,n){if(o||(o=new zC),B2(a))ta(r,t,n,e,ea,i,o);else{var s=i?i(I4(r,n),a,n+"",r,t,o):void 0;s===void 0&&(s=a),z4(r,n,s)}},J6)}var ra=ea;var jM=No(function(r,t,e){ra(r,t,e)}),N3=jM;var GM=Math.floor,qM=Math.random;function YM(r,t){return r+GM(qM()*(t-r+1))}var ia=YM;var QM=parseFloat,KM=Math.min,XM=Math.random;function JM(r,t,e){if(e&&typeof e!="boolean"&&Y6(r,t,e)&&(t=e=void 0),e===void 0&&(typeof t=="boolean"?(e=t,t=void 0):typeof r=="boolean"&&(e=r,r=void 0)),r===void 0&&t===void 0?(r=0,t=1):(r=Me(r),t===void 0?(t=r,r=0):t=Me(t)),r>t){var i=r;r=t,t=i}if(e||r%1||t%1){var o=XM();return KM(r+o*(t-r+QM("1e-"+((o+"").length-1))),t)}return ia(r,t)}var I1=JM;var n2=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};var td={attribute:!0,type:String,converter:S4,reflect:!1,hasChanged:F6},ed=(r=td,t,e)=>{let{kind:i,metadata:o}=e,a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),a.set(e.name,r),i==="accessor"){let{name:n}=e;return{set(s){let V=t.get.call(this);t.set.call(this,s),this.requestUpdate(n,V,r,!0,s)},init(s){return s!==void 0&&this.C(n,void 0,r,s),s}}}if(i==="setter"){let{name:n}=e;return function(s){let V=this[n];t.call(this,s),this.requestUpdate(n,V,r,!0,s)}}throw Error("Unsupported decorator location: "+i)};function i1(r){return(t,e)=>typeof e=="object"?ed(r,t,e):((i,o,a)=>{let n=o.hasOwnProperty(a);return o.constructor.createProperty(a,i),n?Object.getOwnPropertyDescriptor(o,a):void 0})(r,t,e)}function J2(r){return i1({...r,state:!0,attribute:!1})}var W3=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function N4(r,t){return(e,i,o)=>{let a=n=>n.renderRoot?.querySelector(r)??null;if(t){let{get:n,set:s}=typeof i=="object"?e:o??(()=>{let V=Symbol();return{get(){return this[V]},set(c){this[V]=c}}})();return W3(e,i,{get(){let V=n.call(this);return V===void 0&&(V=a(this),(V!==null||this.hasUpdated)&&s.call(this,V)),V}})}return W3(e,i,{get(){return a(this)}})}}var oa=`:host {
  --wfc-wind-low: var(
    --weather-forecast-card-wind-low-color,
    var(--success-color, #43a047)
  );
  --wfc-wind-medium: var(
    --weather-forecast-card-wind-medium-color,
    var(--warning-color, #ffa600)
  );
  --wfc-wind-high: var(
    --weather-forecast-card-wind-high-color,
    var(--error-color, #db4437)
  );
  --wfc-temp-cold: var(--weather-forecast-card-temp-cold-color, #2196f3);
  --wfc-temp-freezing: var(
    --weather-forecast-card-temp-freezing-color,
    #4fb3ff
  );
  --wfc-temp-chilly: var(--weather-forecast-card-temp-chilly-color, #ffeb3b);
  --wfc-temp-mild: var(--weather-forecast-card-temp-mild-color, #4caf50);
  --wfc-temp-warm: var(--weather-forecast-card-temp-warm-color, #ff9800);
  --wfc-temp-hot: var(--weather-forecast-card-temp-hot-color, #f44336);
  --wfc-chart-temp-low-line-color: var(
    --weather-forecast-card-chart-temp-low-line-color,
    var(--wfc-temp-cold)
  );
  --wfc-chart-temp-high-line-color: var(
    --weather-forecast-card-chart-temp-high-line-color,
    var(--wfc-temp-warm)
  );
  --wfc-chart-label-color: var(
    --weather-forecast-card-chart-label-color,
    var(--primary-text-color, #000)
  );
  --wfc-chart-temp-high-label-color: var(
    --weather-forecast-card-chart-temp-high-label-color,
    var(--wfc-chart-label-color)
  );
  --wfc-chart-temp-low-label-color: var(
    --weather-forecast-card-chart-temp-low-label-color,
    var(--secondary-text-color, #9b9b9b)
  );
  --wfc-chart-precipitation-label-color: var(
    --weather-forecast-card-chart-precipitation-label-color,
    var(--wfc-chart-label-color)
  );
  /* Fallbacks for iOS 15 / Safari 15 (no color-mix support) */
  --wfc-chart-grid-color: var(
    --weather-forecast-card-chart-grid-color,
    rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.15)
  );
  --wfc-precipitation-bar-color: var(
    --weather-forecast-card-precipitation-bar-color,
    rgba(33, 150, 243, 0.4)
  );
  --wfc-chart-humidity-line-color: var(
    --weather-forecast-card-chart-humidity-line-color,
    var(--blue-color, #2196f3)
  );
  --wfc-chart-pressure-line-color: var(
    --weather-forecast-card-chart-pressure-line-color,
    var(--cyan-color, #00bcd4)
  );
  --wfc-chart-uv-bar-color: var(
    --weather-forecast-card-chart-uv-bar-color,
    var(--amber-color, #ffc107)
  );
  --wfc-uv-low: var(--weather-forecast-card-uv-low-color, #289500);
  --wfc-uv-moderate: var(--weather-forecast-card-uv-moderate-color, #f7e400);
  --wfc-uv-high: var(--weather-forecast-card-uv-high-color, #f85900);
  --wfc-uv-very-high: var(--weather-forecast-card-uv-very-high-color, #d8001d);
  --wfc-uv-extreme: var(--weather-forecast-card-uv-extreme-color, #6b49c8);
  --wfc-chart-font-size: var(--weather-forecast-card-chart-font-size, 12px);
  --wfc-sunrise-color: var(
    --weather-forecast-card-sunrise-color,
    var(--orange-color, #ff9800)
  );
  --wfc-sunset-color: var(
    --weather-forecast-card-sunset-color,
    var(--purple-color, #926bc7)
  );
  --wfc-day-indicator-color: var(
    --weather-forecast-card-day-indicator-color,
    #056bb8
  );
  --wfc-day-indicator-text-color: var(
    --weather-forecast-card-day-indicator-text-color,
    #ffffff
  );
  --wfc-component-gap: var(--ha-space-3, 12px);
  --wfc-min-item-width-simple: var(
    --weather-forecast-card-min-item-width-simple,
    65px
  );
  --wfc-min-item-width-chart: var(
    --weather-forecast-card-min-item-width-chart,
    55px
  );
  --forecast-item-width: var(
    --wfc-min-item-width-simple
  ); /* Initial minimum value. Updated in JS */
  --forecast-item-gap: 0px; /* Initial minimum value. Updated in JS */
  --forecast-precipitation-bar-max-height: calc(
    var(--ha-font-size-s, 12px) + 2px
  );
  --fade-width: 15px;
  --forecast-conditions-icon-size: var(
    --weather-forecast-card-forecast-conditions-icon-size,
    36px
  );
  --current-conditions-icon-size: var(
    --weather-forecast-card-current-conditions-icon-size,
    64px
  );
  --indicator-width: 20px;
  --wfc-effects-text-shadow: var(
    --weather-forecast-card-effects-text-shadow,
    0 1px 2px rgba(0, 0, 0, 0.5),
    0 0 4px rgba(0, 0, 0, 0.35)
  );
  --wfc-effects-text-shadow-secondary: var(
    --weather-forecast-card-effects-text-shadow-secondary,
    0 1px 2px rgba(0, 0, 0, 0.55)
  );
}

/* Modern browsers with color-mix support */
@supports (color: color-mix(in srgb, red, blue)) {
  :host {
    --wfc-chart-grid-color: var(
      --weather-forecast-card-chart-grid-color,
      color-mix(in srgb, var(--primary-text-color, #000) 15%, transparent)
    );
    --wfc-precipitation-bar-color: var(
      --weather-forecast-card-precipitation-bar-color,
      color-mix(in srgb, var(--blue-color, #2196f3) 40%, transparent)
    );
  }
}

ha-card {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-width: 0;
  padding: var(--card-padding, 16px);
}

.wsfc-container {
  position: relative;
  box-sizing: border-box;
  z-index: 1;
  border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--wfc-component-gap);
  container-type: inline-size;
  container-name: wsfc-container;
}

.wsfc-current-weather-container {
  pointer-events: auto;
}

.wsfc-current-weather {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: var(--wfc-component-gap);
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  min-width: 0;
  width: 100%;
}

.wsfc-current-conditions {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 0;
  width: 100%;
}

.wsfc-name,
.wsfc-name-state,
.wsfc-current-state {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
}

.wsfc-name-state {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wsfc-weather-condition-icon-slot.wsfc-current-icon {
  width: var(--current-conditions-icon-size);
  height: var(--current-conditions-icon-size);
  margin-right: 16px;
}

.wsfc-weather-condition-icon-slot.wsfc-current-icon svg {
  width: 100%;
  height: 100%;
}

.wsfc-current-primary-secondary {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.wsfc-current-secondary-info {
  display: flex;
  align-items: center;
}

.wsfc-current-secondary-icon {
  width: var(--ha-font-size-xl, 20px);
  height: var(--ha-font-size-xl, 20px);
  --mdc-icon-size: var(--ha-font-size-xl, 20px);
}

.wsfc-current-secondary-value {
  padding-left: 4px;
}

.wsfc-current-secondary-icon svg {
  width: 100% !important;
  height: 100% !important;
}

.wsfc-current-state,
.wsfc-current-temperature {
  font-size: var(--ha-font-size-3xl);
  line-height: var(--ha-line-height-condensed);
  white-space: nowrap;
}

wsfc-animation-provider[has-clouds] ~ .wsfc-container .wsfc-current-state,
wsfc-animation-provider[has-clouds] ~ .wsfc-container .wsfc-current-temperature {
  text-shadow: var(--wfc-effects-text-shadow);
}

wsfc-animation-provider[has-clouds] ~ .wsfc-container .wsfc-name,
wsfc-animation-provider[has-clouds] ~ .wsfc-container .wsfc-current-secondary-value {
  text-shadow: var(--wfc-effects-text-shadow-secondary);
}

wsfc-animation-provider[has-clouds] ~ .wsfc-container .wsfc-current-secondary-icon {
  filter: drop-shadow(0 1px 1.5px rgba(0, 0, 0, 0.5));
}

.wsfc-current-attributes {
  display: flex;
  flex-direction: column;
  gap: var(--ha-space-1, 4px);
  min-width: 0;
  width: 100%;
}

.wsfc-current-attribute {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--ha-space-1, 4px);
  font-size: var(--ha-font-size-m, 14px);
  line-height: var(--ha-line-height-condensed);
  color: var(--primary-text-color, #212121);
  white-space: nowrap;
}

.wsfc-current-attribute-icon {
  color: var(--state-icon-color, #616161);
  padding-left: var(--ha-space-2, 8px);
}

.wsfc-current-attribute-value,
.wsfc-current-attribute-name {
  overflow: hidden;
  white-space: nowrap;
}

.wsfc-current-attribute-name {
  text-overflow: ellipsis;
  padding-left: var(--ha-space-4, 16px);
  flex: 1;
}

.wsfc-forecast-container {
  pointer-events: auto;
}

.wsfc-mask-container.is-scrollable {
  --mask: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 1) var(--fade-width),
    rgba(0, 0, 0, 1) calc(100% - var(--fade-width)),
    rgba(0, 0, 0, 0) 100%
  );
  -webkit-mask: var(--mask);
  mask: var(--mask);
}

.wsfc-mask-container {
  width: 100%;
}

.wsfc-scroll-container {
  width: 100%;
  min-width: 0;
  max-width: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overflow-x: auto;
  overflow-y: clip;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  touch-action: pan-x pan-y;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
}

.wsfc-scroll-container.is-dragging {
  cursor: grabbing !important;
}

.wsfc-scroll-container.no-snap {
  scroll-snap-type: none !important;
  scroll-behavior: auto !important;
}

.wsfc-scroll-container::-webkit-scrollbar {
  display: none;
}

.wsfc-forecast {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: var(--forecast-item-gap);
}

.wsfc-forecast-slot {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: var(--forecast-item-width);
  max-width: var(--forecast-item-width);
  gap: var(--ha-space-1, 4px);
  scroll-snap-align: start;
}

.wsfc-label {
  font-size: var(--ha-font-size-m, 14px);
  color: var(--secondary-text-color, #9b9b9b);
}

.wsfc-secondary {
  font-size: var(--ha-font-size-m, 14px);
  line-height: var(--ha-line-height-condensed);
  color: var(--secondary-text-color, #9b9b9b);
}

.wsfc-day-indicator-container {
  display: flex;
  justify-content: center;
  align-items: start;
  position: sticky;
  left: 0px;
  z-index: 4;
  pointer-events: none;
  min-width: var(--forecast-item-width);
  max-width: var(--forecast-item-width);
  margin-right: calc(
    (var(--forecast-item-width) + var(--forecast-item-gap)) * -1
  );
}

.wsfc-day-indicator {
  background-color: var(--wfc-day-indicator-color);
  color: var(--wfc-day-indicator-text-color);
  min-width: var(--indicator-width);
  height: 20px;
  line-height: 20px;
  padding: 0 8px;
  border-radius: 12px;
  display: block;
  text-align: center;
}

.wsfc-forecast-slot-time.wsfc-sunrise {
  color: var(--wfc-sunrise-color);
}

.wsfc-forecast-slot-time.wsfc-sunset {
  color: var(--wfc-sunset-color);
}

.wsfc-forecast-slot-time {
  color: var(--secondary-text-color, #9b9b9b);
  height: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.wsfc-forecast-slot-time.wsfc-two-rows {
  flex-direction: column;
  height: auto;
  gap: 2px;
}

.wsfc-forecast-slot-time-primary {
  color: var(--primary-text-color, #212121);
  font-size: var(--ha-font-size-m, 14px);
  height: 20px;
  line-height: 20px;
}

.wsfc-forecast-slot-time-secondary {
  color: var(--secondary-text-color, #9b9b9b);
  font-size: var(--ha-font-size-s, 12px);
  line-height: var(--ha-line-height-condensed, 1.2);
}

.wsfc-forecast-slot-time.wsfc-sunrise .wsfc-forecast-slot-time-primary,
.wsfc-forecast-slot-time.wsfc-sunset .wsfc-forecast-slot-time-primary {
  color: inherit;
}

.wsfc-forecast-slot-time-primary ha-icon {
  --mdc-icon-size: 18px;
}

.wsfc-forecast-slot-temperature {
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  flex-wrap: nowrap;
  min-height: 20px;
}

.wsfc-forecast-temperature-low,
.wsfc-forecast-temperature-high {
  font-size: var(--ha-font-size-l, 16px);
  line-height: var(--ha-line-height-condensed, 1.2);
  color: var(--primary-text-color, #212121);
}

.wsfc-forecast-temperature-low {
  color: var(--secondary-text-color, #9b9b9b);
}
.wsfc-forecast-temperature-low.wsfc-small,
.wsfc-forecast-temperature-high.wsfc-small {
  font-size: var(--ha-font-size-m, 14px);
  line-height: var(--ha-line-height-condensed, 1.2);
}

.wsfc-forecast-temperature-low.wsfc-small {
  font-size: var(--ha-font-size-m, 14px);
}

.wsfc-forecast-temperature-separator {
  color: var(--secondary-text-color, #9b9b9b);
  margin: 0 1px;
}

.wsfc-weather-condition-icon-slot {
  width: var(--forecast-conditions-icon-size);
  height: var(--forecast-conditions-icon-size);
  padding: 2px 0;
  pointer-events: none;
  cursor: grab;
}

.wsfc-weather-condition-icon-slot .rain {
  fill: var(--weather-icon-rain-color, #30b3ff);
}
.wsfc-weather-condition-icon-slot .sun {
  fill: var(--weather-icon-sun-color, #fdd93c);
}
.wsfc-weather-condition-icon-slot .moon {
  fill: var(--weather-icon-moon-color, #fcf497);
}
.wsfc-weather-condition-icon-slot .cloud-back {
  fill: var(--weather-icon-cloud-back-color, #d4d4d4);
}
.wsfc-weather-condition-icon-slot .cloud-front {
  fill: var(--weather-icon-cloud-front-color, #f9f9f9);
}
.wsfc-weather-condition-icon-slot .snow {
  fill: var(--weather-icon-snow-color, #f9f9f9);
  stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);
  stroke-width: 1;
  paint-order: stroke;
}

.wsfc-forecast-slot-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ha-space-1, 4px);
  min-width: 40px;
}

.wsfc-forecast-precip-amount-container {
  position: relative;
  pointer-events: none;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 15px;
}

.wsfc-forecast-precip-amount-container.wsfc-not-available {
  visibility: hidden;
}

.wsfc-forecast-precip-amount-bar {
  position: absolute;
  pointer-events: none;
  width: 30px;
  height: var(--forecast-precipitation-bar-height-pct);
  background: var(--wfc-precipitation-bar-color);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 1;
}

.wsfc-forecast-precip-amount {
  position: relative;
  pointer-events: none;
  z-index: 2;
  font-size: var(--ha-font-size-s, 12px);
  line-height: var(--forecast-precipitation-bar-max-height);
  font-weight: 500;
  color: var(--blue-color, #2196f3);
}

.wsfc-forecast-precip-probability {
  font-size: var(--ha-font-size-s, 12px);
}

.wsfc-forecast-chart {
  height: 130px;
  width: var(--wfc-forecast-chart-width, auto);
}

.wsfc-forecast-chart-footer,
.wsfc-forecast-chart-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: var(--forecast-item-gap);
  width: 100% !important;
  min-width: var(--wfc-forecast-chart-width, auto);
}

.wsfc-forecast-chart-settings {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

.wsfc-forecast-chart-settings.has-selector {
  margin-bottom: var(--wfc-component-gap);
}

.wsfc-forecast-chart-settings span {
  font-size: var(--ha-font-size-xl, 16px);
  line-height: var(--ha-line-height-condensed, 1.2);
  color: var(--primary-text-color, #212121);
  user-select: none;
  -webkit-user-select: none;
  padding-left: var(--ha-space-2, 8px);
}
.wsfc-forecast-chart-attribute-selector {
  position: relative;
  display: flex;
  align-items: center;
}

wsfc-wind-indicator,
wsfc-current-weather,
wsfc-current-weather-attributes,
wsfc-forecast-header-items,
wsfc-weather-condition-icon-provider {
  display: contents;
}

/* Fallback for browsers without container query support */
@supports not (container-type: inline-size) {
  @media (max-width: 375px) {
    .wsfc-current-state,
    .wsfc-current-temperature {
      font-size: var(--ha-font-size-xl, 20px);
    }
  }
}

/* Modern browsers with container query support */
@container wsfc-container (max-width: 375px) {
  .wsfc-current-state,
  .wsfc-current-temperature {
    font-size: var(--ha-font-size-xl, 20px);
  }
}
`;var Ca=l1`
  ${y0(oa)}
`;var U3,j3;(function(r){r.language="language",r.system="system",r.comma_decimal="comma_decimal",r.decimal_comma="decimal_comma",r.space_comma="space_comma",r.none="none"})(U3||(U3={})),(function(r){r.language="language",r.system="system",r.am_pm="12",r.twenty_four="24"})(j3||(j3={}));function na(){return(na=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r}).apply(this,arguments)}function id(r){return r.substr(0,r.indexOf("."))}var od=function(r){switch(r.number_format){case U3.comma_decimal:return["en-US","en"];case U3.decimal_comma:return["de","es","it"];case U3.space_comma:return["fr","sv","cs"];case U3.system:return;default:return r.language}},Cd=function(r,t){return t===void 0&&(t=2),Math.round(r*Math.pow(10,t))/Math.pow(10,t)},ve=function(r,t,e){var i=t?od(t):void 0;if(Number.isNaN=Number.isNaN||function o(a){return typeof a=="number"&&o(a)},t?.number_format!==U3.none&&!Number.isNaN(Number(r))&&Intl)try{return new Intl.NumberFormat(i,aa(r,e)).format(Number(r))}catch(o){return console.error(o),new Intl.NumberFormat(void 0,aa(r,e)).format(Number(r))}return typeof r=="string"?r:Cd(r,e?.maximumFractionDigits).toString()+(e?.style==="currency"?" "+e.currency:"")},aa=function(r,t){var e=na({maximumFractionDigits:2},t);if(typeof r!="string")return e;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var i=r.indexOf(".")>-1?r.split(".")[1].length:0;e.minimumFractionDigits=i,e.maximumFractionDigits=i}return e};var ad=["closed","locked","off"];var a2=function(r,t,e,i){i=i||{},e=e??{};var o=new Event(t,{bubbles:i.bubbles===void 0||i.bubbles,cancelable:!!i.cancelable,composed:i.composed===void 0||i.composed});return o.detail=e,r.dispatchEvent(o),o};var o8=function(r){a2(window,"haptic",r)},nd=function(r,t,e){e===void 0&&(e=!1),e?history.replaceState(null,"",t):history.pushState(null,"",t),a2(window,"location-changed",{replace:e})},Hd=function(r,t,e){e===void 0&&(e=!0);var i,o=id(t),a=o==="group"?"homeassistant":o;switch(o){case"lock":i=e?"unlock":"lock";break;case"cover":i=e?"open_cover":"close_cover";break;default:i=e?"turn_on":"turn_off"}return r.callService(a,i,{entity_id:t})},sd=function(r,t){var e=ad.includes(r.states[t].state);return Hd(r,t,e)},Vd=function(r,t,e,i){if(i||(i={action:"more-info"}),!i.confirmation||i.confirmation.exemptions&&i.confirmation.exemptions.some(function(a){return a.user===t.user.id})||(o8("warning"),confirm(i.confirmation.text||"Are you sure you want to "+i.action+"?")))switch(i.action){case"more-info":(e.entity||e.camera_image)&&a2(r,"hass-more-info",{entityId:e.entity?e.entity:e.camera_image});break;case"navigate":i.navigation_path&&nd(0,i.navigation_path);break;case"url":i.url_path&&window.open(i.url_path);break;case"toggle":e.entity&&(sd(t,e.entity),o8("success"));break;case"call-service":if(!i.service)return void o8("failure");var o=i.service.split(".",2);t.callService(o[0],o[1],i.service_data,i.target),o8("success");break;case"fire-dom-event":a2(r,"ll-custom",i)}},W4=function(r,t,e,i){var o;i==="double_tap"&&e.double_tap_action?o=e.double_tap_action:i==="hold"&&e.hold_action?o=e.hold_action:i==="tap"&&e.tap_action&&(o=e.tap_action),Vd(r,t,e,o)};function T0(r){return r!==void 0&&r.action!=="none"}function Ha(r,t,e){if(t.has("config")||e)return!0;if(r.config.entity){var i=t.get("hass");return!i||i.states[r.config.entity]!==r.hass.states[r.config.entity]}return!1}var sa="NOT_RUNNING";var C8=_4(U4(),1);var La=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ld(r,t){return!!(r===t||La(r)&&La(t))}function ld(r,t){if(r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(!Ld(r[e],t[e]))return!1;return!0}function o3(r,t){t===void 0&&(t=ld);var e=null;function i(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(e&&e.lastThis===this&&t(o,e.lastArgs))return e.lastResult;var n=r.apply(this,o);return e={lastResult:n,lastArgs:o,lastThis:this},n}return i.clear=function(){e=null},i}var la=(r,t)=>r?r.config.state!==sa?`${r.localize("ui.card.common.entity_not_found")}: ${t}`:r.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.",C3=(r,t)=>z7(t).toLocaleDateString(G3(r),{weekday:"short"}),ca=(r,t)=>z7(t).toLocaleDateString(G3(r),{day:"numeric"}),Ma=(r,t)=>{let e=z7(t),i=G3(r),o=a8(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",hour12:o}).formatToParts(e),h=p.find(g=>g.type==="hour"),v=p.find(g=>g.type==="dayPeriod");if(h){if(v)return{hour:h.value,suffix:v.value};let g=p.indexOf(h),y=p.slice(g+1).filter(O=>O.type==="literal").map(O=>O.value).join("");return y&&y.trim()?{hour:h.value,suffix:y.trim()}:{hour:h.value}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",hour12:o}),n=a.match(/\d+/),s=n?n[0]:a,V=a.replace(/\d+\s*/,"").trim();return V?{hour:s,suffix:V}:{hour:s}},da=(r,t)=>{let e=z7(t),i=G3(r),o=a8(r);try{let p=new Intl.DateTimeFormat(i,{hour:"numeric",minute:"2-digit",hour12:o}).formatToParts(e),h=p.find(y=>y.type==="hour"),v=p.find(y=>y.type==="minute"),g=p.find(y=>y.type==="dayPeriod");if(h&&v){let y=p.indexOf(h),O=p.indexOf(v),k=p.slice(y+1,O).map(R=>R.value).join(""),T=`${h.value}${k}${v.value}`;if(g)return{time:T,suffix:g.value};let F=p.slice(O+1).filter(R=>R.type==="literal").map(R=>R.value).join("");return F&&F.trim()?{time:T,suffix:F.trim()}:{time:T}}}catch{}let a=e.toLocaleTimeString(i,{hour:"numeric",minute:"2-digit",hour12:o}),n=a.match(/\d+[:.]\d+/),s=n?n[0]:a,V=a.replace(/\d+[:.]\d+\s*/,"").trim();return V?{time:s,suffix:V}:{time:s}},B7=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t.getTime()},a8=o3(r=>{let t=r?.locale;if(t?.time_format===j3.language||t?.time_format===j3.system){let e=t.time_format===j3.language?t.language:void 0;return new Date("January 1, 2023 22:00:00").toLocaleString(e).includes("10")}return t?.time_format===j3.am_pm}),G3=r=>r?.locale?.language||navigator.language||"en",z7=r=>typeof r=="string"?new Date(r):r,P0=(r,t)=>{let{latitude:e,longitude:i}=r?.config||{};if(!e||!i)return null;let o=z7(t),a=C8.getTimes(o,e,i);return{sunrise:a.sunrise,sunset:a.sunset,isNightTime:o<a.sunrise||o>a.sunset}},pa=(r,t)=>{let e=z7(t),{fraction:i,phase:o}=C8.getMoonIllumination(e),a=o<=.5,n=(r?.config?.latitude??0)<0;return{fraction:i,litRight:a!==n}},ua=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=e<.5,a=t===o?0:1,n=t?-60:160;return`M50 0 L${n} 0 L${n} 100 L50 100 A${i} 50 0 0 ${a} 50 0 Z`},_e=(r,t)=>{let e=Math.min(1,Math.max(0,r)),i=(50*Math.abs(1-2*e)).toFixed(2),o=t?1:0,a=e<.5;return`M50 0 A50 50 0 0 ${o} 50 100 A${i} 50 0 0 ${t===a?0:1} 50 0 Z`},I7=r=>r.length===0?0:r.reduce((t,e)=>t+e,0)/r.length,ma=r=>{let t=typeof r=="string"?new Date(r):new Date(r);return t.setMinutes(59,59,999),t},ge=r=>{let t=r!=null&&typeof r=="object"?r.entity:void 0;return typeof t=="string"?t:void 0},ha=r=>{let t=r.current;if(!t)return[];let e=new Set;t.temperature_entity&&e.add(t.temperature_entity);let i=ge(t.secondary_info_attribute);i&&e.add(i);let o=t.show_attributes;if(Array.isArray(o))for(let a of o){let n=ge(a);n&&e.add(n)}else{let a=ge(o);a&&e.add(a)}return e.delete(r.entity),[...e]};var W2={silent:Number.NEGATIVE_INFINITY,fatal:0,error:0,warn:1,log:2,info:3,success:3,fail:3,ready:3,start:3,box:3,debug:4,trace:5,verbose:Number.POSITIVE_INFINITY},ye={silent:{level:-1},fatal:{level:W2.fatal},error:{level:W2.error},warn:{level:W2.warn},log:{level:W2.log},info:{level:W2.info},success:{level:W2.success},fail:{level:W2.fail},ready:{level:W2.info},start:{level:W2.info},box:{level:W2.info},debug:{level:W2.debug},trace:{level:W2.trace},verbose:{level:W2.verbose}};function be(r){if(r===null||typeof r!="object")return!1;let t=Object.getPrototypeOf(r);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in r?!1:Symbol.toStringTag in r?Object.prototype.toString.call(r)==="[object Module]":!0}function Ze(r,t,e=".",i){if(!be(t))return Ze(r,{},e,i);let o=Object.assign({},t);for(let a in r){if(a==="__proto__"||a==="constructor")continue;let n=r[a];n!=null&&(i&&i(o,a,n,e)||(Array.isArray(n)&&Array.isArray(o[a])?o[a]=[...n,...o[a]]:be(n)&&be(o[a])?o[a]=Ze(n,o[a],(e?`${e}.`:"")+a.toString(),i):o[a]=n))}return o}function cd(r){return(...t)=>t.reduce((e,i)=>Ze(e,i,"",r),{})}var Md=cd();function dd(r){return Object.prototype.toString.call(r)==="[object Object]"}function pd(r){return!(!dd(r)||!r.message&&!r.args||r.stack)}var we=!1,fa=[],k2=class r{constructor(t={}){z(this,"options");z(this,"_lastLog");z(this,"_mockFn");let e=t.types||ye;this.options=Md({...t,defaults:{...t.defaults},level:Se(t.level,e),reporters:[...t.reporters||[]]},{types:ye,throttle:1e3,throttleMin:5,formatOptions:{date:!0,colors:!1,compact:!0}});for(let i in e){let o={type:i,...this.options.defaults,...e[i]};this[i]=this._wrapLogFn(o),this[i].raw=this._wrapLogFn(o,!0)}this.options.mockFn&&this.mockTypes(),this._lastLog={}}get level(){return this.options.level}set level(t){this.options.level=Se(t,this.options.types,this.options.level)}prompt(t,e){if(!this.options.prompt)throw new Error("prompt is not supported!");return this.options.prompt(t,e)}create(t){let e=new r({...this.options,...t});return this._mockFn&&e.mockTypes(this._mockFn),e}withDefaults(t){return this.create({...this.options,defaults:{...this.options.defaults,...t}})}withTag(t){return this.withDefaults({tag:this.options.defaults.tag?this.options.defaults.tag+":"+t:t})}addReporter(t){return this.options.reporters.push(t),this}removeReporter(t){if(t){let e=this.options.reporters.indexOf(t);if(e!==-1)return this.options.reporters.splice(e,1)}else this.options.reporters.splice(0);return this}setReporters(t){return this.options.reporters=Array.isArray(t)?t:[t],this}wrapAll(){this.wrapConsole(),this.wrapStd()}restoreAll(){this.restoreConsole(),this.restoreStd()}wrapConsole(){for(let t in this.options.types)console["__"+t]||(console["__"+t]=console[t]),console[t]=this[t].raw}restoreConsole(){for(let t in this.options.types)console["__"+t]&&(console[t]=console["__"+t],delete console["__"+t])}wrapStd(){this._wrapStream(this.options.stdout,"log"),this._wrapStream(this.options.stderr,"log")}_wrapStream(t,e){t&&(t.__write||(t.__write=t.write),t.write=i=>{this[e].raw(String(i).trim())})}restoreStd(){this._restoreStream(this.options.stdout),this._restoreStream(this.options.stderr)}_restoreStream(t){t&&t.__write&&(t.write=t.__write,delete t.__write)}pauseLogs(){we=!0}resumeLogs(){we=!1;let t=fa.splice(0);for(let e of t)e[0]._logFn(e[1],e[2])}mockTypes(t){let e=t||this.options.mockFn;if(this._mockFn=e,typeof e=="function")for(let i in this.options.types)this[i]=e(i,this.options.types[i])||this[i],this[i].raw=this[i]}_wrapLogFn(t,e){return(...i)=>{if(we){fa.push([this,t,i,e]);return}return this._logFn(t,i,e)}}_logFn(t,e,i){if((t.level||0)>this.level)return!1;let o={date:new Date,args:[],...t,level:Se(t.level,this.options.types)};!i&&e.length===1&&pd(e[0])?Object.assign(o,e[0]):o.args=[...e],o.message&&(o.args.unshift(o.message),delete o.message),o.additional&&(Array.isArray(o.additional)||(o.additional=o.additional.split(`
`)),o.args.push(`
`+o.additional.join(`
`)),delete o.additional),o.type=typeof o.type=="string"?o.type.toLowerCase():"log",o.tag=typeof o.tag=="string"?o.tag:"";let a=(s=!1)=>{let V=(this._lastLog.count||0)-this.options.throttleMin;if(this._lastLog.object&&V>0){let c=[...this._lastLog.object.args];V>1&&c.push(`(repeated ${V} times)`),this._log({...this._lastLog.object,args:c}),this._lastLog.count=1}s&&(this._lastLog.object=o,this._log(o))};clearTimeout(this._lastLog.timeout);let n=this._lastLog.time&&o.date?o.date.getTime()-this._lastLog.time.getTime():0;if(this._lastLog.time=o.date,n<this.options.throttle)try{let s=JSON.stringify([o.type,o.tag,o.args]),V=this._lastLog.serialized===s;if(this._lastLog.serialized=s,V&&(this._lastLog.count=(this._lastLog.count||0)+1,this._lastLog.count>this.options.throttleMin)){this._lastLog.timeout=setTimeout(a,this.options.throttle);return}}catch{}a(!0)}_log(t){for(let e of this.options.reporters)e.log(t,{options:this.options})}};function Se(r,t={},e=3){return r===void 0?e:typeof r=="number"?r:t[r]&&t[r].level!==void 0?t[r].level:e}k2.prototype.add=k2.prototype.addReporter;k2.prototype.remove=k2.prototype.removeReporter;k2.prototype.clear=k2.prototype.removeReporter;k2.prototype.withScope=k2.prototype.withTag;k2.prototype.mock=k2.prototype.mockTypes;k2.prototype.pause=k2.prototype.pauseLogs;k2.prototype.resume=k2.prototype.resumeLogs;function Aa(r={}){return new k2(r)}var ke=class{constructor(t){z(this,"options");z(this,"defaultColor");z(this,"levelColorMap");z(this,"typeColorMap");this.options={...t},this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",3:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(t){return t<1?console.__error||console.error:t===1?console.__warn||console.warn:console.__log||console.log}log(t){let e=this._getLogFn(t.level),i=t.type==="log"?"":t.type,o=t.tag||"",n=`
      background: ${this.typeColorMap[t.type]||this.levelColorMap[t.level]||this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `,s=`%c${[o,i].filter(Boolean).join(":")}`;typeof t.args[0]=="string"?e(`${s}%c ${t.args[0]}`,n,"",...t.args.slice(1)):e(s,n,...t.args)}};function Oe(r={}){return Aa({reporters:r.reporters||[new ke({})],prompt(e,i={}){return i.type==="confirm"?Promise.resolve(confirm(e)):Promise.resolve(prompt(e))},...r})}var wS=Oe();var ud=W2.info,U5=Oe({level:ud}).withTag("weather-forecast-card");var va=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="invalid_entity_id",Te=r=>typeof r=="object"&&r!==null&&"code"in r&&r.code==="not_found";var n8={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},N7=r=>(...t)=>({_$litDirective$:r,values:t}),a3=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var xa="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0,Pe=class extends HTMLElement{constructor(){super();this.holdTime=500;this.held=!1;this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:xa?"100px":"50px",height:xa?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,i){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",s=>{let V=s||window.event;return V.preventDefault&&V.preventDefault(),V.stopPropagation&&V.stopPropagation(),V.cancelBubble=!0,V.returnValue=!1,!1});let o=s=>{this.held=!1;let V,c;s.touches?(V=s.touches[0].pageX,c=s.touches[0].pageY):(V=s.pageX,c=s.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(V,c),this.held=!0},this.holdTime)},a=s=>{s.preventDefault(),i.stopPropagation&&s.stopPropagation(),!(["touchend","touchcancel"].includes(s.type)&&this.timer===void 0)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?a2(e,"action",{action:"hold"},{bubbles:!i.stopPropagation}):i.hasDoubleClick?s.type==="click"&&s.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,a2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,a2(e,"action",{action:"double_tap"},{bubbles:!i.stopPropagation})):a2(e,"action",{action:"tap"},{bubbles:!i.stopPropagation}))},n=s=>{s.keyCode===13&&a(s)};e.addEventListener("touchstart",o,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",o,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",n)}startAnimation(e,i){Object.assign(this.style,{left:`${e}px`,top:`${i}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}};customElements.define("action-handler-wsfc",Pe);var md=()=>{let r=document.body;if(r.querySelector("action-handler-wsfc"))return r.querySelector("action-handler-wsfc");let t=document.createElement("action-handler-wsfc");return r.appendChild(t),t},hd=(r,t)=>{let e=md();e&&e.bind(r,t)},c0=N7(class extends a3{update(r,[t]){return hd(r.element,t),u5}render(r){}});var q3=2,U2=["humidity","pressure","wind_speed","wind_gust_speed","visibility","ozone","uv_index","dew_point","apparent_temperature","cloud_coverage"],H8=["rain","snow","lightning","sky","moon","sun","cloud"],s8=["temperature_and_precipitation","apparent_temperature","humidity","pressure","uv_index"],ga="temperature_and_precipitation";var Ee=(a=>(a.Temperature="temperature_unit",a.Pressure="pressure_unit",a.WindSpeed="wind_speed_unit",a.Precipitation="precipitation_unit",a.Visibility="visibility_unit",a))(Ee||{}),fd=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],Ad={N:0,P:0,NNE:22.5,NNO:22.5,NNW:337.5,NE:45,NO:45,ENE:67.5,ONO:67.5,E:90,O:90,\u00D8:90,ESE:112.5,OSO:112.5,SE:135,SO:135,SSE:157.5,SSO:157.5,S:180,SSW:202.5,SW:225,WSW:247.5,W:270,V:270,WNW:292.5,NW:315},j5={humidity:"mdi:water-percent",pressure:"mdi:gauge",wind_speed:"mdi:weather-windy-variant",wind_gust_speed:"mdi:weather-windy",visibility:"mdi:eye",ozone:"mdi:molecule",uv_index:"mdi:weather-sunny-alert",dew_point:"mdi:water-thermometer-outline",apparent_temperature:"mdi:thermometer",cloud_coverage:"mdi:cloud-outline"},vd=r=>{if(r==null)return;let t=typeof r=="number"?r:parseFloat(r);if(isNaN(t)||!isFinite(t))return;t%=360,t<0&&(t+=360);let e=Math.floor(t/22.5+.5)%16;return fd[e]},xd=(r,t)=>{let e=t.attributes.wind_speed,i=t.attributes.wind_bearing;if(e==null)return;let o=r.formatEntityAttributeValue(t,"wind_speed");if(i==null)return o;let a=vd(i);if(!a)return o;let n=r.localize(`ui.card.weather.cardinal_direction.${a.toLowerCase()}`)||a;return`${o} (${n})`},m5=(r,t,e)=>{let i=r.config,o=i.unit_system.length||"";switch(e){case"visibility":return t.attributes.visibility_unit||o;case"precipitation":return t.attributes.precipitation_unit||(o==="km"?"mm":"in");case"pressure":return t.attributes.pressure_unit||(o==="km"?"hPa":"inHg");case"apparent_temperature":case"dew_point":case"temperature":case"templow":return t.attributes.temperature_unit||i.unit_system.temperature;case"wind_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"wind_gust_speed":return t.attributes.wind_speed_unit||`${o}/h`;case"ozone":return"DU";case"cloud_coverage":case"humidity":case"precipitation_probability":return"%";default:return(e in i.unit_system?i.unit_system[e]:"")||""}},gd=288e5,_d=864e5,bd=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<gd}},wd=r=>{if(r&&r?.length&&r?.length>2){let t=new Date(r[1].datetime);return new Date(r[2].datetime).getTime()-t.getTime()<_d}},_a=r=>{if(r?.forecast&&r.forecast.length>2)return bd(r.forecast)?{forecast:r.forecast,type:"hourly"}:wd(r.forecast)?{forecast:r.forecast,type:"twice_daily"}:{forecast:r.forecast,type:"daily"}},Fe=(r,t,e)=>{if(e===void 0)return t?.type!==void 0&&t?.forecast&&t?.forecast?.length>2?{forecast:t.forecast,type:t?.type}:_a(r);if(e==="legacy")return _a(r);if(e===t?.type&&t?.forecast&&t?.forecast?.length>2)return{forecast:t.forecast,type:e}},ba=(r,t,e,i)=>r.connection.subscribeMessage(i,{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!1});var wa=r=>r.precipitation!==void 0&&r.precipitation>0||r.precipitation_probability!==void 0&&r.precipitation_probability>0,Sa=r=>{if(!r||!r.attributes)return!1;let t=r.attributes.supported_features;if(typeof t!="number")return!1;let e=(t&1)!==0,i=(t&2)!==0,o=(t&4)!==0;return e||i||o},j4=(r,t)=>{if(!r||!r.attributes)return!1;let e=r.attributes.supported_features;if(typeof e!="number")return!1;let o={hourly:2,daily:1,twice_daily:4}[t];return(e&o)!==0},P5=r=>{if(j4(r,"daily"))return"daily";if(j4(r,"twice_daily"))return"twice_daily"},ya=(r,t)=>{if(r===void 0)return"";let e=t==="mm"?r:r*25.4;return e===0||e<.05?"":`${t==="in"?r.toFixed(2):r.toFixed(1)} ${t}`},W7=o3((r,t)=>{let e=t==="hourly"?8:20;if(r==="in"){let i=e/25.4;return parseFloat(i.toFixed(1))}return e}),G4=(r,t,e)=>{if(e.wind_speed===void 0)return;let i=m5(r,t,"wind_speed");return Sd(e.wind_speed,i)},Sd=(r,t)=>{let i={"km/h":.2777777777777778,kmh:.2777777777777778,mph:.44704,kn:.514444,kt:.514444,knot:.514444,knots:.514444,"m/s":1,ms:1}[t]||1;return r*i},V8=r=>{if(r.wind_bearing!=null){if(typeof r.wind_bearing=="number")return r.wind_bearing;if(typeof r.wind_bearing=="string"){let t=parseFloat(r.wind_bearing);if(!isNaN(t)&&isFinite(t))return t;let e=r.wind_bearing.toUpperCase();return Ad[e]}}},Za=(r,t)=>{let e=[],i=0;for(;i<r.length;){let a=new Date(r[i].datetime).getHours()%t,n=a===0?t:t-a,s=r.slice(i,i+n);if(i+=s.length,s.length===0)continue;let V=s.map(R=>R.temperature),c=s.map(R=>R.humidity).filter(R=>R!==void 0),p=s.map(R=>R.pressure).filter(R=>R!==void 0),h=s.map(R=>R.wind_speed).filter(R=>R!==void 0),v=s.map(R=>R.wind_bearing).filter(R=>R!==void 0),g=s.map(R=>R.precipitation_probability).filter(R=>R!==void 0),y=s.map(R=>R.uv_index).filter(R=>R!==void 0),O=s.map(R=>R.apparent_temperature).filter(R=>R!==void 0),k=new Date(s[s.length-1].datetime);k.setMinutes(59),k.setSeconds(59);let T={datetime:s[0].datetime,groupEndtime:k.toISOString(),condition:kd(s),temperature:parseFloat(I7(V).toFixed(1))};c.length>0&&(T.humidity=Math.round(I7(c))),g.length>0&&(T.precipitation_probability=Math.max(...g)),s.some(R=>R.precipitation!==void 0)&&(T.precipitation=s.reduce((R,K)=>R+(K.precipitation||0),0));let F=s.map(R=>R.templow).filter(R=>R!==void 0);F.length>0&&(T.templow=Math.min(...F)),p.length>0&&(T.pressure=Math.round(I7(p))),h.length>0&&(T.wind_speed=I7(h)),v.length>0&&(T.wind_bearing=Zd(v)),y.length>0&&(T.uv_index=Math.max(...y)),O.length>0&&(T.apparent_temperature=parseFloat(I7(O).toFixed(1))),e.push(T)}return e},yd="mdi:gauge",ka=(r,t,e)=>t||(e?.attributes?.icon?e.attributes.icon:(r?j5[r]:void 0)??yd),U7=(r,t,e,i)=>{let o=t.attributes[i];if(o!==void 0){if(i==="wind_speed")return xd(r,t);if(i==="wind_gust_speed"){let a=m5(r,t,"wind_gust_speed");return`${ve(o,r.locale)} ${a}`}if(i==="ozone"){let a=m5(r,t,"ozone");return`${o} ${a}`}return i==="apparent_temperature"||i==="dew_point"?M0(r,t,o,e.current?.temperature_precision):r.formatEntityAttributeValue(t,i)}},L8=(r,t,e,i,o)=>{let a=r.states[o];if(!a)return;let n=a.state;return n===void 0?void 0:i==="apparent_temperature"||i==="dew_point"?M0(r,t,n,e.current?.temperature_precision):r.formatEntityState(a)},M0=(r,t,e,i,o)=>{let a=i!=null?{maximumFractionDigits:i,minimumFractionDigits:i}:void 0,n=m5(r,t,"temperature"),s=typeof e=="string"?parseFloat(e):e;return isNaN(s)?`${e}${o?"":n}`:`${ve(s,r.locale,a)}${o?"":n}`},Zd=r=>{if(r.length===0)return 0;let t=0,e=0;r.forEach(s=>{let V=s*Math.PI/180;t+=Math.sin(V),e+=Math.cos(V)});let i=t/r.length,o=e/r.length,n=Math.atan2(i,o)*180/Math.PI;return n<0&&(n+=360),Math.round(n)},kd=r=>{let t=["exceptional","hail","lightning-rainy","lightning","snowy-rainy","pouring","snowy","rainy","windy-variant","windy","fog","cloudy","partlycloudy","clear-night","sunny"];return r.sort((e,i)=>{let o=t.indexOf(e.condition||"exceptional"),a=t.indexOf(i.condition||"exceptional");return o===-1&&(o=0),a===-1&&(a=0),o-a}),r[0]?.condition||"exceptional"};var j7=class{constructor(t,e){this._mouseDown=!1;this._scrolling=!1;this._scrolled=!1;this._state={startX:0,startLeft:0,lastX:0,velocity:0,momentumId:0};this._onMouseDown=t=>{this._container&&(this._mouseDown=!0,this._scrolled=!1,this._scrolling=!1,this._state.startX=t.pageX-this._container.offsetLeft,this._state.startLeft=this._container.scrollLeft,this._state.lastX=t.pageX,this._state.velocity=0,cancelAnimationFrame(this._state.momentumId),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp,{once:!0}),this._host.requestUpdate())};this._onMouseMove=t=>{if(!this._mouseDown||!this._container)return;let i=t.pageX-this._container.offsetLeft-this._state.startX;if(this._state.velocity=t.pageX-this._state.lastX,this._state.lastX=t.pageX,!this._scrolled&&Math.abs(i)>3&&(this._scrolled=!0,this._scrolling=!0,this._container.classList.add("is-dragging","no-snap")),this._scrolled){let o=this._container,a=this._state.startLeft-i;requestAnimationFrame(()=>{o&&(o.scrollLeft=a)})}};this._onMouseUp=()=>{if(this._cleanup(),this._container){if(this._container.classList.remove("is-dragging"),!this._scrolled){this._container.classList.remove("no-snap");return}Math.abs(this._state.velocity)>1?this._runMomentum():this._finalize()}this._host.requestUpdate()};this._runMomentum=()=>{let t=this._container;if(!t||Math.abs(this._state.velocity)<.5){this._finalize();return}t.scrollLeft-=this._state.velocity,this._state.velocity*=.95,this._state.momentumId=requestAnimationFrame(this._runMomentum)};this._finalize=()=>{let t=this._container;if(!t||!this._childSelector){this._completeFinalize();return}let e=t.querySelector(this._childSelector);if(!e){this._completeFinalize();return}let i=e.getBoundingClientRect().width;if(!i||!Number.isFinite(i)){this._completeFinalize();return}let o=t.scrollLeft,a=Math.round(o/i)*i,n=500,s=performance.now(),V=p=>p*(2-p),c=p=>{let h=this._container;if(!h){this._completeFinalize();return}let v=p-s,g=Math.min(v/n,1),y=V(g);h.scrollLeft=o+(a-o)*y,g<1?this._state.momentumId=requestAnimationFrame(c):this._completeFinalize()};this._state.momentumId=requestAnimationFrame(c)};this._completeFinalize=()=>{this._scrolling=!1,this._container?.classList.remove("no-snap"),clearTimeout(this._finalizeId),this._finalizeId=window.setTimeout(()=>{this._scrolled=!1,this._host.requestUpdate()},50)};this._host=t,this._selector=e.selector,this._childSelector=e.childSelector,t.addController(this)}hostUpdated(){this._container||this._attach()}hostDisconnected(){this._detach()}isScrolling(){return this._scrolled||this._scrolling}_attach(){this._container=this._host.renderRoot?.querySelector(this._selector),this._container?.addEventListener("mousedown",this._onMouseDown)}_detach(){this._cleanup(),this._container&&(this._container.classList.remove("is-dragging","no-snap"),this._container.removeEventListener("mousedown",this._onMouseDown),this._container=void 0)}_cleanup(){this._mouseDown=!1,window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),cancelAnimationFrame(this._state.momentumId),clearTimeout(this._finalizeId)}};var Oa="important",Od=" !"+Oa,t5=N7(class extends a3{constructor(r){if(super(r),r.type!==n8.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((t,e)=>{let i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[t]){let{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(let i in t){let o=t[i];if(o!=null){this.ft.add(i);let a=typeof o=="string"&&o.endsWith(Od);i.includes("-")||a?e.setProperty(i,a?o.slice(0,-11):o,a?Oa:""):e[i]=o}}return u5}});var Y3=N7(class extends a3{constructor(r){if(super(r),r.type!==n8.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(let i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}let e=r.element.classList;for(let i of this.st)i in t||(e.remove(i),this.st.delete(i));for(let i in t){let o=!!t[i];o===this.st.has(i)||this.nt?.has(i)||(o?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return u5}});function Q4(r){return r+.5|0}var n3=(r,t,e)=>Math.max(Math.min(r,e),t);function q4(r){return n3(Q4(r*2.55),0,255)}function H3(r){return n3(Q4(r*255),0,255)}function E0(r){return n3(Q4(r/2.55)/100,0,1)}function Ta(r){return n3(Q4(r*100),0,100)}var E5={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Re=[..."0123456789ABCDEF"],Td=r=>Re[r&15],Pd=r=>Re[(r&240)>>4]+Re[r&15],l8=r=>(r&240)>>4===(r&15),Ed=r=>l8(r.r)&&l8(r.g)&&l8(r.b)&&l8(r.a);function Fd(r){var t=r.length,e;return r[0]==="#"&&(t===4||t===5?e={r:255&E5[r[1]]*17,g:255&E5[r[2]]*17,b:255&E5[r[3]]*17,a:t===5?E5[r[4]]*17:255}:(t===7||t===9)&&(e={r:E5[r[1]]<<4|E5[r[2]],g:E5[r[3]]<<4|E5[r[4]],b:E5[r[5]]<<4|E5[r[6]],a:t===9?E5[r[7]]<<4|E5[r[8]]:255})),e}var $d=(r,t)=>r<255?t(r):"";function Rd(r){var t=Ed(r)?Td:Pd;return r?"#"+t(r.r)+t(r.g)+t(r.b)+$d(r.a,t):void 0}var Dd=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function $a(r,t,e){let i=t*Math.min(e,1-e),o=(a,n=(a+r/30)%12)=>e-i*Math.max(Math.min(n-3,9-n,1),-1);return[o(0),o(8),o(4)]}function Bd(r,t,e){let i=(o,a=(o+r/60)%6)=>e-e*t*Math.max(Math.min(a,4-a,1),0);return[i(5),i(3),i(1)]}function zd(r,t,e){let i=$a(r,1,.5),o;for(t+e>1&&(o=1/(t+e),t*=o,e*=o),o=0;o<3;o++)i[o]*=1-t-e,i[o]+=t;return i}function Id(r,t,e,i,o){return r===o?(t-e)/i+(t<e?6:0):t===o?(e-r)/i+2:(r-t)/i+4}function De(r){let e=r.r/255,i=r.g/255,o=r.b/255,a=Math.max(e,i,o),n=Math.min(e,i,o),s=(a+n)/2,V,c,p;return a!==n&&(p=a-n,c=s>.5?p/(2-a-n):p/(a+n),V=Id(e,i,o,p,a),V=V*60+.5),[V|0,c||0,s]}function Be(r,t,e,i){return(Array.isArray(t)?r(t[0],t[1],t[2]):r(t,e,i)).map(H3)}function ze(r,t,e){return Be($a,r,t,e)}function Nd(r,t,e){return Be(zd,r,t,e)}function Wd(r,t,e){return Be(Bd,r,t,e)}function Ra(r){return(r%360+360)%360}function Ud(r){let t=Dd.exec(r),e=255,i;if(!t)return;t[5]!==i&&(e=t[6]?q4(+t[5]):H3(+t[5]));let o=Ra(+t[2]),a=+t[3]/100,n=+t[4]/100;return t[1]==="hwb"?i=Nd(o,a,n):t[1]==="hsv"?i=Wd(o,a,n):i=ze(o,a,n),{r:i[0],g:i[1],b:i[2],a:e}}function jd(r,t){var e=De(r);e[0]=Ra(e[0]+t),e=ze(e),r.r=e[0],r.g=e[1],r.b=e[2]}function Gd(r){if(!r)return;let t=De(r),e=t[0],i=Ta(t[1]),o=Ta(t[2]);return r.a<255?`hsla(${e}, ${i}%, ${o}%, ${E0(r.a)})`:`hsl(${e}, ${i}%, ${o}%)`}var Pa={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Ea={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function qd(){let r={},t=Object.keys(Ea),e=Object.keys(Pa),i,o,a,n,s;for(i=0;i<t.length;i++){for(n=s=t[i],o=0;o<e.length;o++)a=e[o],s=s.replace(a,Pa[a]);a=parseInt(Ea[n],16),r[s]=[a>>16&255,a>>8&255,a&255]}return r}var c8;function Yd(r){c8||(c8=qd(),c8.transparent=[0,0,0,0]);let t=c8[r.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var Qd=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Kd(r){let t=Qd.exec(r),e=255,i,o,a;if(t){if(t[7]!==i){let n=+t[7];e=t[8]?q4(n):n3(n*255,0,255)}return i=+t[1],o=+t[3],a=+t[5],i=255&(t[2]?q4(i):n3(i,0,255)),o=255&(t[4]?q4(o):n3(o,0,255)),a=255&(t[6]?q4(a):n3(a,0,255)),{r:i,g:o,b:a,a:e}}}function Xd(r){return r&&(r.a<255?`rgba(${r.r}, ${r.g}, ${r.b}, ${E0(r.a)})`:`rgb(${r.r}, ${r.g}, ${r.b})`)}var $e=r=>r<=.0031308?r*12.92:Math.pow(r,1/2.4)*1.055-.055,G7=r=>r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4);function Jd(r,t,e){let i=G7(E0(r.r)),o=G7(E0(r.g)),a=G7(E0(r.b));return{r:H3($e(i+e*(G7(E0(t.r))-i))),g:H3($e(o+e*(G7(E0(t.g))-o))),b:H3($e(a+e*(G7(E0(t.b))-a))),a:r.a+e*(t.a-r.a)}}function M8(r,t,e){if(r){let i=De(r);i[t]=Math.max(0,Math.min(i[t]+i[t]*e,t===0?360:1)),i=ze(i),r.r=i[0],r.g=i[1],r.b=i[2]}}function Da(r,t){return r&&Object.assign(t||{},r)}function Fa(r){var t={r:0,g:0,b:0,a:255};return Array.isArray(r)?r.length>=3&&(t={r:r[0],g:r[1],b:r[2],a:255},r.length>3&&(t.a=H3(r[3]))):(t=Da(r,{r:0,g:0,b:0,a:1}),t.a=H3(t.a)),t}function tp(r){return r.charAt(0)==="r"?Kd(r):Ud(r)}var Y4=class r{constructor(t){if(t instanceof r)return t;let e=typeof t,i;e==="object"?i=Fa(t):e==="string"&&(i=Fd(t)||Yd(t)||tp(t)),this._rgb=i,this._valid=!!i}get valid(){return this._valid}get rgb(){var t=Da(this._rgb);return t&&(t.a=E0(t.a)),t}set rgb(t){this._rgb=Fa(t)}rgbString(){return this._valid?Xd(this._rgb):void 0}hexString(){return this._valid?Rd(this._rgb):void 0}hslString(){return this._valid?Gd(this._rgb):void 0}mix(t,e){if(t){let i=this.rgb,o=t.rgb,a,n=e===a?.5:e,s=2*n-1,V=i.a-o.a,c=((s*V===-1?s:(s+V)/(1+s*V))+1)/2;a=1-c,i.r=255&c*i.r+a*o.r+.5,i.g=255&c*i.g+a*o.g+.5,i.b=255&c*i.b+a*o.b+.5,i.a=n*i.a+(1-n)*o.a,this.rgb=i}return this}interpolate(t,e){return t&&(this._rgb=Jd(this._rgb,t._rgb,e)),this}clone(){return new r(this.rgb)}alpha(t){return this._rgb.a=H3(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=Q4(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return M8(this._rgb,2,t),this}darken(t){return M8(this._rgb,2,-t),this}saturate(t){return M8(this._rgb,1,t),this}desaturate(t){return M8(this._rgb,1,-t),this}rotate(t){return jd(this._rgb,t),this}};function q5(){}var Ue=(()=>{let r=0;return()=>r++})();function b1(r){return r==null}function i2(r){if(Array.isArray&&Array.isArray(r))return!0;let t=Object.prototype.toString.call(r);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function S1(r){return r!==null&&Object.prototype.toString.call(r)==="[object Object]"}function H2(r){return(typeof r=="number"||r instanceof Number)&&isFinite(+r)}function e5(r,t){return H2(r)?r:t}function P1(r,t){return typeof r>"u"?t:r}var je=(r,t)=>typeof r=="string"&&r.endsWith("%")?parseFloat(r)/100*t:+r;function e2(r,t,e){if(r&&typeof r.call=="function")return r.apply(e,t)}function N1(r,t,e,i){let o,a,n;if(i2(r))if(a=r.length,i)for(o=a-1;o>=0;o--)t.call(e,r[o],o);else for(o=0;o<a;o++)t.call(e,r[o],o);else if(S1(r))for(n=Object.keys(r),a=n.length,o=0;o<a;o++)t.call(e,r[n[o]],n[o])}function Q7(r,t){let e,i,o,a;if(!r||!t||r.length!==t.length)return!1;for(e=0,i=r.length;e<i;++e)if(o=r[e],a=t[e],o.datasetIndex!==a.datasetIndex||o.index!==a.index)return!1;return!0}function X4(r){if(i2(r))return r.map(X4);if(S1(r)){let t=Object.create(null),e=Object.keys(r),i=e.length,o=0;for(;o<i;++o)t[e[o]]=X4(r[e[o]]);return t}return r}function Ya(r){return["__proto__","prototype","constructor"].indexOf(r)===-1}function Qa(r,t,e,i){if(!Ya(r))return;let o=t[r],a=e[r];S1(o)&&S1(a)?h5(o,a,i):t[r]=X4(a)}function h5(r,t,e){let i=i2(t)?t:[t],o=i.length;if(!S1(r))return r;e=e||{};let a=e.merger||Qa,n;for(let s=0;s<o;++s){if(n=i[s],!S1(n))continue;let V=Object.keys(n);for(let c=0,p=V.length;c<p;++c)a(V[c],r,n,e)}return r}function X3(r,t){return h5(r,t,{merger:Ka})}function Ka(r,t,e){if(!Ya(r))return;let i=t[r],o=e[r];S1(i)&&S1(o)?X3(i,o):Object.prototype.hasOwnProperty.call(t,r)||(t[r]=X4(o))}var Ba={"":r=>r,x:r=>r.x,y:r=>r.y};function Xa(r){let t=r.split("."),e=[],i="";for(let o of t)i+=o,i.endsWith("\\")?i=i.slice(0,-1)+".":(e.push(i),i="");return e}function ep(r){let t=Xa(r);return e=>{for(let i of t){if(i==="")break;e=e&&e[i]}return e}}function l3(r,t){return(Ba[t]||(Ba[t]=ep(t)))(r)}function e9(r){return r.charAt(0).toUpperCase()+r.slice(1)}var J3=r=>typeof r<"u",d0=r=>typeof r=="function",f8=(r,t)=>{if(r.size!==t.size)return!1;for(let e of r)if(!t.has(e))return!1;return!0};function Ge(r){return r.type==="mouseup"||r.type==="click"||r.type==="contextmenu"}var J1=Math.PI,d2=2*J1,Ja=d2+J1,J4=Number.POSITIVE_INFINITY,tn=J1/180,h2=J1/2,s3=J1/4,Ne=J1*2/3,p0=Math.log10,F5=Math.sign;function t7(r,t,e){return Math.abs(r-t)<e}function A8(r){let t=Math.round(r);r=t7(r,t,r/1e3)?t:r;let e=Math.pow(10,Math.floor(p0(r))),i=r/e;return(i<=1?1:i<=2?2:i<=5?5:10)*e}function qe(r){let t=[],e=Math.sqrt(r),i;for(i=1;i<e;i++)r%i===0&&(t.push(i),t.push(r/i));return e===(e|0)&&t.push(e),t.sort((o,a)=>o-a).pop(),t}function rp(r){return typeof r=="symbol"||typeof r=="object"&&r!==null&&!(Symbol.toPrimitive in r||"toString"in r||"valueOf"in r)}function e7(r){return!rp(r)&&!isNaN(parseFloat(r))&&isFinite(r)}function Ye(r,t){let e=Math.round(r);return e-t<=r&&e+t>=r}function v8(r,t,e){let i,o,a;for(i=0,o=r.length;i<o;i++)a=r[i][e],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function u0(r){return r*(J1/180)}function r9(r){return r*(180/J1)}function x8(r){if(!H2(r))return;let t=1,e=0;for(;Math.round(r*t)/t!==r;)t*=10,e++;return e}function g8(r,t){let e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i),a=Math.atan2(i,e);return a<-.5*J1&&(a+=d2),{angle:a,distance:o}}function t9(r,t){return Math.sqrt(Math.pow(t.x-r.x,2)+Math.pow(t.y-r.y,2))}function en(r,t){return(r-t+Ja)%d2-J1}function O2(r){return(r%d2+d2)%d2}function i9(r,t,e,i){let o=O2(r),a=O2(t),n=O2(e),s=O2(a-o),V=O2(n-o),c=O2(o-a),p=O2(o-n);return o===a||o===n||i&&a===n||s>V&&c<p}function T2(r,t,e){return Math.max(t,Math.min(e,r))}function Qe(r){return T2(r,-32768,32767)}function r7(r,t,e,i=1e-6){return r>=Math.min(t,e)-i&&r<=Math.max(t,e)+i}function o9(r,t,e){e=e||(n=>r[n]<t);let i=r.length-1,o=0,a;for(;i-o>1;)a=o+i>>1,e(a)?o=a:i=a;return{lo:o,hi:i}}var $0=(r,t,e,i)=>o9(r,e,i?o=>{let a=r[o][t];return a<e||a===e&&r[o+1][t]===e}:o=>r[o][t]<e),Ke=(r,t,e)=>o9(r,e,i=>r[i][t]>=e);function Xe(r,t,e){let i=0,o=r.length;for(;i<o&&r[i]<t;)i++;for(;o>i&&r[o-1]>e;)o--;return i>0||o<r.length?r.slice(i,o):r}var rn=["push","pop","shift","splice","unshift"];function Je(r,t){if(r._chartjs){r._chartjs.listeners.push(t);return}Object.defineProperty(r,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),rn.forEach(e=>{let i="_onData"+e9(e),o=r[e];Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value(...a){let n=o.apply(this,a);return r._chartjs.listeners.forEach(s=>{typeof s[i]=="function"&&s[i](...a)}),n}})})}function _8(r,t){let e=r._chartjs;if(!e)return;let i=e.listeners,o=i.indexOf(t);o!==-1&&i.splice(o,1),!(i.length>0)&&(rn.forEach(a=>{delete r[a]}),delete r._chartjs)}function b8(r){let t=new Set(r);return t.size===r.length?r:Array.from(t)}var w8=(function(){return typeof window>"u"?function(r){return r()}:window.requestAnimationFrame})();function S8(r,t){let e=[],i=!1;return function(...o){e=o,i||(i=!0,w8.call(window,()=>{i=!1,r.apply(t,e)}))}}function tr(r,t){let e;return function(...i){return t?(clearTimeout(e),e=setTimeout(r,t,i)):r.apply(this,i),t}}var er=r=>r==="start"?"left":r==="end"?"right":"center",y8=(r,t,e)=>r==="start"?t:r==="end"?e:(t+e)/2;function rr(r,t,e){let i=t.length,o=0,a=i;if(r._sorted){let{iScale:n,vScale:s,_parsed:V}=r,c=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null,p=n.axis,{min:h,max:v,minDefined:g,maxDefined:y}=n.getUserBounds();if(g){if(o=Math.min($0(V,p,h).lo,e?i:$0(t,p,n.getPixelForValue(h)).lo),c){let O=V.slice(0,o+1).reverse().findIndex(k=>!b1(k[s.axis]));o-=Math.max(0,O)}o=T2(o,0,i-1)}if(y){let O=Math.max($0(V,n.axis,v,!0).hi+1,e?0:$0(t,p,n.getPixelForValue(v),!0).hi+1);if(c){let k=V.slice(O-1).findIndex(T=>!b1(T[s.axis]));O+=Math.max(0,k)}a=T2(O,o,i)-o}else a=i-o}return{start:o,count:a}}function ir(r){let{xScale:t,yScale:e,_scaleRanges:i}=r,o={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!i)return r._scaleRanges=o,!0;let a=i.xmin!==t.min||i.xmax!==t.max||i.ymin!==e.min||i.ymax!==e.max;return Object.assign(i,o),a}var d8=r=>r===0||r===1,za=(r,t,e)=>-(Math.pow(2,10*(r-=1))*Math.sin((r-t)*d2/e)),Ia=(r,t,e)=>Math.pow(2,-10*r)*Math.sin((r-t)*d2/e)+1,Q3={linear:r=>r,easeInQuad:r=>r*r,easeOutQuad:r=>-r*(r-2),easeInOutQuad:r=>(r/=.5)<1?.5*r*r:-.5*(--r*(r-2)-1),easeInCubic:r=>r*r*r,easeOutCubic:r=>(r-=1)*r*r+1,easeInOutCubic:r=>(r/=.5)<1?.5*r*r*r:.5*((r-=2)*r*r+2),easeInQuart:r=>r*r*r*r,easeOutQuart:r=>-((r-=1)*r*r*r-1),easeInOutQuart:r=>(r/=.5)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2),easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>(r-=1)*r*r*r*r+1,easeInOutQuint:r=>(r/=.5)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2),easeInSine:r=>-Math.cos(r*h2)+1,easeOutSine:r=>Math.sin(r*h2),easeInOutSine:r=>-.5*(Math.cos(J1*r)-1),easeInExpo:r=>r===0?0:Math.pow(2,10*(r-1)),easeOutExpo:r=>r===1?1:-Math.pow(2,-10*r)+1,easeInOutExpo:r=>d8(r)?r:r<.5?.5*Math.pow(2,10*(r*2-1)):.5*(-Math.pow(2,-10*(r*2-1))+2),easeInCirc:r=>r>=1?r:-(Math.sqrt(1-r*r)-1),easeOutCirc:r=>Math.sqrt(1-(r-=1)*r),easeInOutCirc:r=>(r/=.5)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1),easeInElastic:r=>d8(r)?r:za(r,.075,.3),easeOutElastic:r=>d8(r)?r:Ia(r,.075,.3),easeInOutElastic(r){return d8(r)?r:r<.5?.5*za(r*2,.1125,.45):.5+.5*Ia(r*2-1,.1125,.45)},easeInBack(r){return r*r*((1.70158+1)*r-1.70158)},easeOutBack(r){return(r-=1)*r*((1.70158+1)*r+1.70158)+1},easeInOutBack(r){let t=1.70158;return(r/=.5)<1?.5*(r*r*(((t*=1.525)+1)*r-t)):.5*((r-=2)*r*(((t*=1.525)+1)*r+t)+2)},easeInBounce:r=>1-Q3.easeOutBounce(1-r),easeOutBounce(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},easeInOutBounce:r=>r<.5?Q3.easeInBounce(r*2)*.5:Q3.easeOutBounce(r*2-1)*.5+.5};function Z8(r){if(r&&typeof r=="object"){let t=r.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function k8(r){return Z8(r)?r:new Y4(r)}function m8(r){return Z8(r)?r:new Y4(r).saturate(.5).darken(.1).hexString()}var ip=["x","y","borderWidth","radius","tension"],op=["color","borderColor","backgroundColor"];function Cp(r){r.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),r.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),r.set("animations",{colors:{type:"color",properties:op},numbers:{type:"number",properties:ip}}),r.describe("animations",{_fallback:"animation"}),r.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function ap(r){r.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Na=new Map;function np(r,t){t=t||{};let e=r+JSON.stringify(t),i=Na.get(e);return i||(i=new Intl.NumberFormat(r,t),Na.set(e,i)),i}function C9(r,t,e){return np(t,e).format(r)}var on={values(r){return i2(r)?r:""+r},numeric(r,t,e){if(r===0)return"0";let i=this.chart.options.locale,o,a=r;if(e.length>1){let c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(o="scientific"),a=Hp(r,e)}let n=p0(Math.abs(a)),s=isNaN(n)?1:Math.max(Math.min(-1*Math.floor(n),20),0),V={notation:o,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(V,this.options.ticks.format),C9(r,i,V)},logarithmic(r,t,e){if(r===0)return"0";let i=e[t].significand||r/Math.pow(10,Math.floor(p0(r)));return[1,2,3,5,10,15].includes(i)||t>.8*e.length?on.numeric.call(this,r,t,e):""}};function Hp(r,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&r!==Math.floor(r)&&(e=r-Math.floor(r)),e}var a9={formatters:on};function sp(r){r.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:a9.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),r.route("scale.ticks","color","","color"),r.route("scale.grid","color","","borderColor"),r.route("scale.border","color","","borderColor"),r.route("scale.title","color","","color"),r.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),r.describe("scales",{_fallback:"scale"}),r.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}var c3=Object.create(null),O8=Object.create(null);function K4(r,t){if(!t)return r;let e=t.split(".");for(let i=0,o=e.length;i<o;++i){let a=e[i];r=r[a]||(r[a]=Object.create(null))}return r}function Ie(r,t,e){return typeof t=="string"?h5(K4(r,t),e):h5(K4(r,""),t)}var We=class{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=i=>i.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(i,o)=>m8(o.backgroundColor),this.hoverBorderColor=(i,o)=>m8(o.borderColor),this.hoverColor=(i,o)=>m8(o.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return Ie(this,t,e)}get(t){return K4(this,t)}describe(t,e){return Ie(O8,t,e)}override(t,e){return Ie(c3,t,e)}route(t,e,i,o){let a=K4(this,t),n=K4(this,i),s="_"+e;Object.defineProperties(a,{[s]:{value:a[e],writable:!0},[e]:{enumerable:!0,get(){let V=this[s],c=n[o];return S1(V)?Object.assign({},c,V):P1(V,c)},set(V){this[s]=V}}})}apply(t){t.forEach(e=>e(this))}},s2=new We({_scriptable:r=>!r.startsWith("on"),_indexable:r=>r!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Cp,ap,sp]);function Cn(r){return!r||b1(r.size)||b1(r.family)?null:(r.style?r.style+" ":"")+(r.weight?r.weight+" ":"")+r.size+"px "+r.family}function q7(r,t,e,i,o){let a=t[o];return a||(a=t[o]=r.measureText(o).width,e.push(o)),a>i&&(i=a),i}function or(r,t,e,i){i=i||{};let o=i.data=i.data||{},a=i.garbageCollect=i.garbageCollect||[];i.font!==t&&(o=i.data={},a=i.garbageCollect=[],i.font=t),r.save(),r.font=t;let n=0,s=e.length,V,c,p,h,v;for(V=0;V<s;V++)if(h=e[V],h!=null&&!i2(h))n=q7(r,o,a,n,h);else if(i2(h))for(c=0,p=h.length;c<p;c++)v=h[c],v!=null&&!i2(v)&&(n=q7(r,o,a,n,v));r.restore();let g=a.length/2;if(g>e.length){for(V=0;V<g;V++)delete o[a[V]];a.splice(0,g)}return n}function R0(r,t,e){let i=r.currentDevicePixelRatio,o=e!==0?Math.max(e/2,.5):0;return Math.round((t-o)*i)/i+o}function T8(r,t){!t&&!r||(t=t||r.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,r.width,r.height),t.restore())}function n9(r,t,e,i){Cr(r,t,e,i,null)}function Cr(r,t,e,i,o){let a,n,s,V,c,p,h,v,g=t.pointStyle,y=t.rotation,O=t.radius,k=(y||0)*tn;if(g&&typeof g=="object"&&(a=g.toString(),a==="[object HTMLImageElement]"||a==="[object HTMLCanvasElement]")){r.save(),r.translate(e,i),r.rotate(k),r.drawImage(g,-g.width/2,-g.height/2,g.width,g.height),r.restore();return}if(!(isNaN(O)||O<=0)){switch(r.beginPath(),g){default:o?r.ellipse(e,i,o/2,O,0,0,d2):r.arc(e,i,O,0,d2),r.closePath();break;case"triangle":p=o?o/2:O,r.moveTo(e+Math.sin(k)*p,i-Math.cos(k)*O),k+=Ne,r.lineTo(e+Math.sin(k)*p,i-Math.cos(k)*O),k+=Ne,r.lineTo(e+Math.sin(k)*p,i-Math.cos(k)*O),r.closePath();break;case"rectRounded":c=O*.516,V=O-c,n=Math.cos(k+s3)*V,h=Math.cos(k+s3)*(o?o/2-c:V),s=Math.sin(k+s3)*V,v=Math.sin(k+s3)*(o?o/2-c:V),r.arc(e-h,i-s,c,k-J1,k-h2),r.arc(e+v,i-n,c,k-h2,k),r.arc(e+h,i+s,c,k,k+h2),r.arc(e-v,i+n,c,k+h2,k+J1),r.closePath();break;case"rect":if(!y){V=Math.SQRT1_2*O,p=o?o/2:V,r.rect(e-p,i-V,2*p,2*V);break}k+=s3;case"rectRot":h=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,s=Math.sin(k)*O,v=Math.sin(k)*(o?o/2:O),r.moveTo(e-h,i-s),r.lineTo(e+v,i-n),r.lineTo(e+h,i+s),r.lineTo(e-v,i+n),r.closePath();break;case"crossRot":k+=s3;case"cross":h=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,s=Math.sin(k)*O,v=Math.sin(k)*(o?o/2:O),r.moveTo(e-h,i-s),r.lineTo(e+h,i+s),r.moveTo(e+v,i-n),r.lineTo(e-v,i+n);break;case"star":h=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,s=Math.sin(k)*O,v=Math.sin(k)*(o?o/2:O),r.moveTo(e-h,i-s),r.lineTo(e+h,i+s),r.moveTo(e+v,i-n),r.lineTo(e-v,i+n),k+=s3,h=Math.cos(k)*(o?o/2:O),n=Math.cos(k)*O,s=Math.sin(k)*O,v=Math.sin(k)*(o?o/2:O),r.moveTo(e-h,i-s),r.lineTo(e+h,i+s),r.moveTo(e+v,i-n),r.lineTo(e-v,i+n);break;case"line":n=o?o/2:Math.cos(k)*O,s=Math.sin(k)*O,r.moveTo(e-n,i-s),r.lineTo(e+n,i+s);break;case"dash":r.moveTo(e,i),r.lineTo(e+Math.cos(k)*(o?o/2:O),i+Math.sin(k)*O);break;case!1:r.closePath();break}r.fill(),t.borderWidth>0&&r.stroke()}}function G5(r,t,e){return e=e||.5,!t||r&&r.x>t.left-e&&r.x<t.right+e&&r.y>t.top-e&&r.y<t.bottom+e}function H9(r,t){r.save(),r.beginPath(),r.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),r.clip()}function s9(r){r.restore()}function ar(r,t,e,i,o){if(!t)return r.lineTo(e.x,e.y);if(o==="middle"){let a=(t.x+e.x)/2;r.lineTo(a,t.y),r.lineTo(a,e.y)}else o==="after"!=!!i?r.lineTo(t.x,e.y):r.lineTo(e.x,t.y);r.lineTo(e.x,e.y)}function nr(r,t,e,i){if(!t)return r.lineTo(e.x,e.y);r.bezierCurveTo(i?t.cp1x:t.cp2x,i?t.cp1y:t.cp2y,i?e.cp2x:e.cp1x,i?e.cp2y:e.cp1y,e.x,e.y)}function Vp(r,t){t.translation&&r.translate(t.translation[0],t.translation[1]),b1(t.rotation)||r.rotate(t.rotation),t.color&&(r.fillStyle=t.color),t.textAlign&&(r.textAlign=t.textAlign),t.textBaseline&&(r.textBaseline=t.textBaseline)}function Lp(r,t,e,i,o){if(o.strikethrough||o.underline){let a=r.measureText(i),n=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,V=e-a.actualBoundingBoxAscent,c=e+a.actualBoundingBoxDescent,p=o.strikethrough?(V+c)/2:c;r.strokeStyle=r.fillStyle,r.beginPath(),r.lineWidth=o.decorationWidth||2,r.moveTo(n,p),r.lineTo(s,p),r.stroke()}}function lp(r,t){let e=r.fillStyle;r.fillStyle=t.color,r.fillRect(t.left,t.top,t.width,t.height),r.fillStyle=e}function K7(r,t,e,i,o,a={}){let n=i2(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!=="",V,c;for(r.save(),r.font=o.string,Vp(r,a),V=0;V<n.length;++V)c=n[V],a.backdrop&&lp(r,a.backdrop),s&&(a.strokeColor&&(r.strokeStyle=a.strokeColor),b1(a.strokeWidth)||(r.lineWidth=a.strokeWidth),r.strokeText(c,e,i,a.maxWidth)),r.fillText(c,e,i,a.maxWidth),Lp(r,e,i,c,a),i+=Number(o.lineHeight);r.restore()}function X7(r,t){let{x:e,y:i,w:o,h:a,radius:n}=t;r.arc(e+n.topLeft,i+n.topLeft,n.topLeft,1.5*J1,J1,!0),r.lineTo(e,i+a-n.bottomLeft),r.arc(e+n.bottomLeft,i+a-n.bottomLeft,n.bottomLeft,J1,h2,!0),r.lineTo(e+o-n.bottomRight,i+a),r.arc(e+o-n.bottomRight,i+a-n.bottomRight,n.bottomRight,h2,0,!0),r.lineTo(e+o,i+n.topRight),r.arc(e+o-n.topRight,i+n.topRight,n.topRight,0,-h2,!0),r.lineTo(e+n.topLeft,i)}var cp=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Mp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function an(r,t){let e=(""+r).match(cp);if(!e||e[1]==="normal")return t*1.2;switch(r=+e[2],e[3]){case"px":return r;case"%":r/=100;break}return t*r}var dp=r=>+r||0;function V9(r,t){let e={},i=S1(t),o=i?Object.keys(t):t,a=S1(r)?i?n=>P1(r[n],r[t[n]]):n=>r[n]:()=>r;for(let n of o)e[n]=dp(a(n));return e}function P8(r){return V9(r,{top:"y",right:"x",bottom:"y",left:"x"})}function M3(r){return V9(r,["topLeft","topRight","bottomLeft","bottomRight"])}function j2(r){let t=P8(r);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function z2(r,t){r=r||{},t=t||s2.font;let e=P1(r.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let i=P1(r.style,t.style);i&&!(""+i).match(Mp)&&(console.warn('Invalid font style specified: "'+i+'"'),i=void 0);let o={family:P1(r.family,t.family),lineHeight:an(P1(r.lineHeight,t.lineHeight),e),size:e,style:i,weight:P1(r.weight,t.weight),string:""};return o.string=Cn(o),o}function r2(r,t,e,i){let o=!0,a,n,s;for(a=0,n=r.length;a<n;++a)if(s=r[a],s!==void 0&&(t!==void 0&&typeof s=="function"&&(s=s(t),o=!1),e!==void 0&&i2(s)&&(s=s[e%s.length],o=!1),s!==void 0))return i&&!o&&(i.cacheable=!1),s}function Hr(r,t,e){let{min:i,max:o}=r,a=je(t,(o-i)/2),n=(s,V)=>e&&s===0?0:s+V;return{min:n(i,-Math.abs(a)),max:n(o,a)}}function m0(r,t){return Object.assign(Object.create(r),t)}function L9(r,t=[""],e,i,o=()=>r[0]){let a=e||r;typeof i>"u"&&(i=sn("_fallback",r));let n={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:r,_rootScopes:a,_fallback:i,_getTarget:o,override:s=>L9([s,...r],t,a,i)};return new Proxy(n,{deleteProperty(s,V){return delete s[V],delete s._keys,delete r[0][V],!0},get(s,V){return nn(s,V,()=>xp(V,t,r,s))},getOwnPropertyDescriptor(s,V){return Reflect.getOwnPropertyDescriptor(s._scopes[0],V)},getPrototypeOf(){return Reflect.getPrototypeOf(r[0])},has(s,V){return Ua(s).includes(V)},ownKeys(s){return Ua(s)},set(s,V,c){let p=s._storage||(s._storage=o());return s[V]=p[V]=c,delete s._keys,!0}})}function L3(r,t,e,i){let o={_cacheable:!1,_proxy:r,_context:t,_subProxy:e,_stack:new Set,_descriptors:E8(r,i),setContext:a=>L3(r,a,e,i),override:a=>L3(r.override(a),t,e,i)};return new Proxy(o,{deleteProperty(a,n){return delete a[n],delete r[n],!0},get(a,n,s){return nn(a,n,()=>up(a,n,s))},getOwnPropertyDescriptor(a,n){return a._descriptors.allKeys?Reflect.has(r,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(r,n)},getPrototypeOf(){return Reflect.getPrototypeOf(r)},has(a,n){return Reflect.has(r,n)},ownKeys(){return Reflect.ownKeys(r)},set(a,n,s){return r[n]=s,delete a[n],!0}})}function E8(r,t={scriptable:!0,indexable:!0}){let{_scriptable:e=t.scriptable,_indexable:i=t.indexable,_allKeys:o=t.allKeys}=r;return{allKeys:o,scriptable:e,indexable:i,isScriptable:d0(e)?e:()=>e,isIndexable:d0(i)?i:()=>i}}var pp=(r,t)=>r?r+e9(t):t,sr=(r,t)=>S1(t)&&r!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function nn(r,t,e){if(Object.prototype.hasOwnProperty.call(r,t)||t==="constructor")return r[t];let i=e();return r[t]=i,i}function up(r,t,e){let{_proxy:i,_context:o,_subProxy:a,_descriptors:n}=r,s=i[t];return d0(s)&&n.isScriptable(t)&&(s=mp(t,s,r,e)),i2(s)&&s.length&&(s=hp(t,s,r,n.isIndexable)),sr(t,s)&&(s=L3(s,o,a&&a[t],n)),s}function mp(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_stack:s}=e;if(s.has(r))throw new Error("Recursion detected: "+Array.from(s).join("->")+"->"+r);s.add(r);let V=t(a,n||i);return s.delete(r),sr(r,V)&&(V=Vr(o._scopes,o,r,V)),V}function hp(r,t,e,i){let{_proxy:o,_context:a,_subProxy:n,_descriptors:s}=e;if(typeof a.index<"u"&&i(r))return t[a.index%t.length];if(S1(t[0])){let V=t,c=o._scopes.filter(p=>p!==V);t=[];for(let p of V){let h=Vr(c,o,r,p);t.push(L3(h,a,n&&n[r],s))}}return t}function Hn(r,t,e){return d0(r)?r(t,e):r}var fp=(r,t)=>r===!0?t:typeof r=="string"?l3(t,r):void 0;function Ap(r,t,e,i,o){for(let a of t){let n=fp(e,a);if(n){r.add(n);let s=Hn(n._fallback,e,o);if(typeof s<"u"&&s!==e&&s!==i)return s}else if(n===!1&&typeof i<"u"&&e!==i)return null}return!1}function Vr(r,t,e,i){let o=t._rootScopes,a=Hn(t._fallback,e,i),n=[...r,...o],s=new Set;s.add(i);let V=Wa(s,n,e,a||e,i);return V===null||typeof a<"u"&&a!==e&&(V=Wa(s,n,a,V,i),V===null)?!1:L9(Array.from(s),[""],o,a,()=>vp(t,e,i))}function Wa(r,t,e,i,o){for(;e;)e=Ap(r,t,e,i,o);return e}function vp(r,t,e){let i=r._getTarget();t in i||(i[t]={});let o=i[t];return i2(o)&&S1(e)?e:o||{}}function xp(r,t,e,i){let o;for(let a of t)if(o=sn(pp(a,r),e),typeof o<"u")return sr(r,o)?Vr(e,i,r,o):o}function sn(r,t){for(let e of t){if(!e)continue;let i=e[r];if(typeof i<"u")return i}}function Ua(r){let t=r._keys;return t||(t=r._keys=gp(r._scopes)),t}function gp(r){let t=new Set;for(let e of r)for(let i of Object.keys(e).filter(o=>!o.startsWith("_")))t.add(i);return Array.from(t)}var _p=Number.EPSILON||1e-14,Y7=(r,t)=>t<r.length&&!r[t].skip&&r[t],Vn=r=>r==="x"?"y":"x";function Ln(r,t,e,i){let o=r.skip?t:r,a=t,n=e.skip?t:e,s=t9(a,o),V=t9(n,a),c=s/(s+V),p=V/(s+V);c=isNaN(c)?0:c,p=isNaN(p)?0:p;let h=i*c,v=i*p;return{previous:{x:a.x-h*(n.x-o.x),y:a.y-h*(n.y-o.y)},next:{x:a.x+v*(n.x-o.x),y:a.y+v*(n.y-o.y)}}}function bp(r,t,e){let i=r.length,o,a,n,s,V,c=Y7(r,0);for(let p=0;p<i-1;++p)if(V=c,c=Y7(r,p+1),!(!V||!c)){if(t7(t[p],0,_p)){e[p]=e[p+1]=0;continue}o=e[p]/t[p],a=e[p+1]/t[p],s=Math.pow(o,2)+Math.pow(a,2),!(s<=9)&&(n=3/Math.sqrt(s),e[p]=o*n*t[p],e[p+1]=a*n*t[p])}}function wp(r,t,e="x"){let i=Vn(e),o=r.length,a,n,s,V=Y7(r,0);for(let c=0;c<o;++c){if(n=s,s=V,V=Y7(r,c+1),!s)continue;let p=s[e],h=s[i];n&&(a=(p-n[e])/3,s[`cp1${e}`]=p-a,s[`cp1${i}`]=h-a*t[c]),V&&(a=(V[e]-p)/3,s[`cp2${e}`]=p+a,s[`cp2${i}`]=h+a*t[c])}}function ln(r,t="x"){let e=Vn(t),i=r.length,o=Array(i).fill(0),a=Array(i),n,s,V,c=Y7(r,0);for(n=0;n<i;++n)if(s=V,V=c,c=Y7(r,n+1),!!V){if(c){let p=c[t]-V[t];o[n]=p!==0?(c[e]-V[e])/p:0}a[n]=s?c?F5(o[n-1])!==F5(o[n])?0:(o[n-1]+o[n])/2:o[n-1]:o[n]}bp(r,o,a),wp(r,a,t)}function p8(r,t,e){return Math.max(Math.min(r,e),t)}function Sp(r,t){let e,i,o,a,n,s=G5(r[0],t);for(e=0,i=r.length;e<i;++e)n=a,a=s,s=e<i-1&&G5(r[e+1],t),a&&(o=r[e],n&&(o.cp1x=p8(o.cp1x,t.left,t.right),o.cp1y=p8(o.cp1y,t.top,t.bottom)),s&&(o.cp2x=p8(o.cp2x,t.left,t.right),o.cp2y=p8(o.cp2y,t.top,t.bottom)))}function Lr(r,t,e,i,o){let a,n,s,V;if(t.spanGaps&&(r=r.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")ln(r,o);else{let c=i?r[r.length-1]:r[0];for(a=0,n=r.length;a<n;++a)s=r[a],V=Ln(c,s,r[Math.min(a+1,n-(i?0:1))%n],t.tension),s.cp1x=V.previous.x,s.cp1y=V.previous.y,s.cp2x=V.next.x,s.cp2y=V.next.y,c=s}t.capBezierPoints&&Sp(r,e)}function l9(){return typeof window<"u"&&typeof document<"u"}function c9(r){let t=r.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function h8(r,t,e){let i;return typeof r=="string"?(i=parseInt(r,10),r.indexOf("%")!==-1&&(i=i/100*t.parentNode[e])):i=r,i}var F8=r=>r.ownerDocument.defaultView.getComputedStyle(r,null);function cn(r,t){return F8(r).getPropertyValue(t)}var yp=["top","right","bottom","left"];function K3(r,t,e){let i={};e=e?"-"+e:"";for(let o=0;o<4;o++){let a=yp[o];i[a]=parseFloat(r[t+"-"+a+e])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}var Zp=(r,t,e)=>(r>0||t>0)&&(!e||!e.shadowRoot);function kp(r,t){let e=r.touches,i=e&&e.length?e[0]:r,{offsetX:o,offsetY:a}=i,n=!1,s,V;if(Zp(o,a,r.target))s=o,V=a;else{let c=t.getBoundingClientRect();s=i.clientX-c.left,V=i.clientY-c.top,n=!0}return{x:s,y:V,box:n}}function Y5(r,t){if("native"in r)return r;let{canvas:e,currentDevicePixelRatio:i}=t,o=F8(e),a=o.boxSizing==="border-box",n=K3(o,"padding"),s=K3(o,"border","width"),{x:V,y:c,box:p}=kp(r,e),h=n.left+(p&&s.left),v=n.top+(p&&s.top),{width:g,height:y}=t;return a&&(g-=n.width+s.width,y-=n.height+s.height),{x:Math.round((V-h)/g*e.width/i),y:Math.round((c-v)/y*e.height/i)}}function Op(r,t,e){let i,o;if(t===void 0||e===void 0){let a=r&&c9(r);if(!a)t=r.clientWidth,e=r.clientHeight;else{let n=a.getBoundingClientRect(),s=F8(a),V=K3(s,"border","width"),c=K3(s,"padding");t=n.width-c.width-V.width,e=n.height-c.height-V.height,i=h8(s.maxWidth,a,"clientWidth"),o=h8(s.maxHeight,a,"clientHeight")}}return{width:t,height:e,maxWidth:i||J4,maxHeight:o||J4}}var V3=r=>Math.round(r*10)/10;function lr(r,t,e,i){let o=F8(r),a=K3(o,"margin"),n=h8(o.maxWidth,r,"clientWidth")||J4,s=h8(o.maxHeight,r,"clientHeight")||J4,V=Op(r,t,e),{width:c,height:p}=V;if(o.boxSizing==="content-box"){let v=K3(o,"border","width"),g=K3(o,"padding");c-=g.width+v.width,p-=g.height+v.height}return c=Math.max(0,c-a.width),p=Math.max(0,i?c/i:p-a.height),c=V3(Math.min(c,n,V.maxWidth)),p=V3(Math.min(p,s,V.maxHeight)),c&&!p&&(p=V3(c/2)),(t!==void 0||e!==void 0)&&i&&V.height&&p>V.height&&(p=V.height,c=V3(Math.floor(p*i))),{width:c,height:p}}function $8(r,t,e){let i=t||1,o=V3(r.height*i),a=V3(r.width*i);r.height=V3(r.height),r.width=V3(r.width);let n=r.canvas;return n.style&&(e||!n.style.height&&!n.style.width)&&(n.style.height=`${r.height}px`,n.style.width=`${r.width}px`),r.currentDevicePixelRatio!==i||n.height!==o||n.width!==a?(r.currentDevicePixelRatio=i,n.height=o,n.width=a,r.ctx.setTransform(i,0,0,i,0,0),!0):!1}var cr=(function(){let r=!1;try{let t={get passive(){return r=!0,!1}};l9()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return r})();function R8(r,t){let e=cn(r,t),i=e&&e.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function F0(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:r.y+e*(t.y-r.y)}}function Mr(r,t,e,i){return{x:r.x+e*(t.x-r.x),y:i==="middle"?e<.5?r.y:t.y:i==="after"?e<1?r.y:t.y:e>0?t.y:r.y}}function dr(r,t,e,i){let o={x:r.cp2x,y:r.cp2y},a={x:t.cp1x,y:t.cp1y},n=F0(r,o,e),s=F0(o,a,e),V=F0(a,t,e),c=F0(n,s,e),p=F0(s,V,e);return F0(c,p,e)}var Tp=function(r,t){return{x(e){return r+r+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,i){return e-i},leftForLtr(e,i){return e-i}}},Pp=function(){return{x(r){return r},setWidth(r){},textAlign(r){return r},xPlus(r,t){return r+t},leftForLtr(r,t){return r}}};function M9(r,t,e){return r?Tp(t,e):Pp()}function pr(r,t){let e,i;(t==="ltr"||t==="rtl")&&(e=r.canvas.style,i=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),r.prevTextDirection=i)}function ur(r,t){t!==void 0&&(delete r.prevTextDirection,r.canvas.style.setProperty("direction",t[0],t[1]))}function Mn(r){return r==="angle"?{between:i9,compare:en,normalize:O2}:{between:r7,compare:(t,e)=>t-e,normalize:t=>t}}function ja({start:r,end:t,count:e,loop:i,style:o}){return{start:r%e,end:t%e,loop:i&&(t-r+1)%e===0,style:o}}function Ep(r,t,e){let{property:i,start:o,end:a}=e,{between:n,normalize:s}=Mn(i),V=t.length,{start:c,end:p,loop:h}=r,v,g;if(h){for(c+=V,p+=V,v=0,g=V;v<g&&n(s(t[c%V][i]),o,a);++v)c--,p--;c%=V,p%=V}return p<c&&(p+=V),{start:c,end:p,loop:h,style:r.style}}function D8(r,t,e){if(!e)return[r];let{property:i,start:o,end:a}=e,n=t.length,{compare:s,between:V,normalize:c}=Mn(i),{start:p,end:h,loop:v,style:g}=Ep(r,t,e),y=[],O=!1,k=null,T,F,R,K=()=>V(o,R,T)&&s(o,R)!==0,G=()=>s(a,T)===0||V(a,R,T),L1=()=>O||K(),X=()=>!O||G();for(let e1=p,o1=p;e1<=h;++e1)F=t[e1%n],!F.skip&&(T=c(F[i]),T!==R&&(O=V(T,o,a),k===null&&L1()&&(k=s(T,o)===0?e1:o1),k!==null&&X()&&(y.push(ja({start:k,end:e1,loop:v,count:n,style:g})),k=null),o1=e1,R=T));return k!==null&&y.push(ja({start:k,end:h,loop:v,count:n,style:g})),y}function B8(r,t){let e=[],i=r.segments;for(let o=0;o<i.length;o++){let a=D8(i[o],r.points,t);a.length&&e.push(...a)}return e}function Fp(r,t,e,i){let o=0,a=t-1;if(e&&!i)for(;o<t&&!r[o].skip;)o++;for(;o<t&&r[o].skip;)o++;for(o%=t,e&&(a+=o);a>o&&r[a%t].skip;)a--;return a%=t,{start:o,end:a}}function $p(r,t,e,i){let o=r.length,a=[],n=t,s=r[t],V;for(V=t+1;V<=e;++V){let c=r[V%o];c.skip||c.stop?s.skip||(i=!1,a.push({start:t%o,end:(V-1)%o,loop:i}),t=n=c.stop?V:null):(n=V,s.skip&&(t=V)),s=c}return n!==null&&a.push({start:t%o,end:n%o,loop:i}),a}function mr(r,t){let e=r.points,i=r.options.spanGaps,o=e.length;if(!o)return[];let a=!!r._loop,{start:n,end:s}=Fp(e,o,a,i);if(i===!0)return Ga(r,[{start:n,end:s,loop:a}],e,t);let V=s<n?s+o:s,c=!!r._fullLoop&&n===0&&s===o-1;return Ga(r,$p(e,n,V,c),e,t)}function Ga(r,t,e,i){return!i||!i.setContext||!e?t:Rp(r,t,e,i)}function Rp(r,t,e,i){let o=r._chart.getContext(),a=qa(r.options),{_datasetIndex:n,options:{spanGaps:s}}=r,V=e.length,c=[],p=a,h=t[0].start,v=h;function g(y,O,k,T){let F=s?-1:1;if(y!==O){for(y+=V;e[y%V].skip;)y-=F;for(;e[O%V].skip;)O+=F;y%V!==O%V&&(c.push({start:y%V,end:O%V,loop:k,style:T}),p=T,h=O%V)}}for(let y of t){h=s?h:y.start;let O=e[h%V],k;for(v=h+1;v<=y.end;v++){let T=e[v%V];k=qa(i.setContext(m0(o,{type:"segment",p0:O,p1:T,p0DataIndex:(v-1)%V,p1DataIndex:v%V,datasetIndex:n}))),Dp(k,p)&&g(h,v-1,y.loop,p),O=T,p=k}h<v-1&&g(h,v-1,y.loop,p)}return c}function qa(r){return{backgroundColor:r.backgroundColor,borderCapStyle:r.borderCapStyle,borderDash:r.borderDash,borderDashOffset:r.borderDashOffset,borderJoinStyle:r.borderJoinStyle,borderWidth:r.borderWidth,borderColor:r.borderColor}}function Dp(r,t){if(!t)return!1;let e=[],i=function(o,a){return Z8(a)?(e.includes(a)||e.push(a),e.indexOf(a)):a};return JSON.stringify(r,i)!==JSON.stringify(t,i)}function u8(r,t,e){return r.options.clip?r[e]:t[e]}function Bp(r,t){let{xScale:e,yScale:i}=r;return e&&i?{left:u8(e,t,"left"),right:u8(e,t,"right"),top:u8(i,t,"top"),bottom:u8(i,t,"bottom")}:t}function z8(r,t){let e=t._clip;if(e.disabled)return!1;let i=Bp(t,r.chartArea);return{left:e.left===!1?0:i.left-(e.left===!0?0:e.left),right:e.right===!1?r.width:i.right+(e.right===!0?0:e.right),top:e.top===!1?0:i.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?r.height:i.bottom+(e.bottom===!0?0:e.bottom)}}var Zr=class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,o){let a=e.listeners[o],n=e.duration;a.forEach(s=>s({chart:t,initial:e.initial,numSteps:n,currentStep:Math.min(i-e.start,n)}))}_refresh(){this._request||(this._running=!0,this._request=w8.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,o)=>{if(!i.running||!i.items.length)return;let a=i.items,n=a.length-1,s=!1,V;for(;n>=0;--n)V=a[n],V._active?(V._total>i.duration&&(i.duration=V._total),V.tick(t),s=!0):(a[n]=a[a.length-1],a.pop());s&&(o.draw(),this._notify(o,i,t,"progress")),a.length||(i.running=!1,this._notify(o,i,t,"complete"),i.initial=!1),e+=a.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((i,o)=>Math.max(i,o._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,o=i.length-1;for(;o>=0;--o)i[o].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}},D0=new Zr,dn="transparent",Wp={boolean(r,t,e){return e>.5?t:r},color(r,t,e){let i=k8(r||dn),o=i.valid&&k8(t||dn);return o&&o.valid?o.mix(i,e).hexString():t},number(r,t,e){return r+(t-r)*e}},kr=class{constructor(t,e,i,o){let a=e[i];o=r2([t.to,o,a,t.from]);let n=r2([t.from,a,o]);this._active=!0,this._fn=t.fn||Wp[t.type||typeof n],this._easing=Q3[t.easing]||Q3.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=n,this._to=o,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let o=this._target[this._prop],a=i-this._start,n=this._duration-a;this._start=i,this._duration=Math.floor(Math.max(n,t.duration)),this._total+=a,this._loop=!!t.loop,this._to=r2([t.to,e,o,t.from]),this._from=r2([t.from,o,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e=t-this._start,i=this._duration,o=this._prop,a=this._from,n=this._loop,s=this._to,V;if(this._active=a!==s&&(n||e<i),!this._active){this._target[o]=s,this._notify(!0);return}if(e<0){this._target[o]=a;return}V=e/i%2,V=n&&V>1?2-V:V,V=this._easing(Math.min(1,Math.max(0,V))),this._target[o]=this._fn(a,s,V)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let o=0;o<i.length;o++)i[o][e]()}},X8=class{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!S1(t))return;let e=Object.keys(s2.animation),i=this._properties;Object.getOwnPropertyNames(t).forEach(o=>{let a=t[o];if(!S1(a))return;let n={};for(let s of e)n[s]=a[s];(i2(a.properties)&&a.properties||[o]).forEach(s=>{(s===o||!i.has(s))&&i.set(s,n)})})}_animateOptions(t,e){let i=e.options,o=jp(t,i);if(!o)return[];let a=this._createAnimations(o,i);return i.$shared&&Up(t.options.$animations,i).then(()=>{t.options=i},()=>{}),a}_createAnimations(t,e){let i=this._properties,o=[],a=t.$animations||(t.$animations={}),n=Object.keys(e),s=Date.now(),V;for(V=n.length-1;V>=0;--V){let c=n[V];if(c.charAt(0)==="$")continue;if(c==="options"){o.push(...this._animateOptions(t,e));continue}let p=e[c],h=a[c],v=i.get(c);if(h)if(v&&h.active()){h.update(v,p,s);continue}else h.cancel();if(!v||!v.duration){t[c]=p;continue}a[c]=h=new kr(v,t,c,p),o.push(h)}return o}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return D0.add(this._chart,i),!0}};function Up(r,t){let e=[],i=Object.keys(t);for(let o=0;o<i.length;o++){let a=r[i[o]];a&&a.active()&&e.push(a.wait())}return Promise.all(e)}function jp(r,t){if(!t)return;let e=r.options;if(!e){r.options=t;return}return e.$shared&&(r.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function pn(r,t){let e=r&&r.options||{},i=e.reverse,o=e.min===void 0?t:0,a=e.max===void 0?t:0;return{start:i?a:o,end:i?o:a}}function Gp(r,t,e){if(e===!1)return!1;let i=pn(r,e),o=pn(t,e);return{top:o.end,right:i.end,bottom:o.start,left:i.start}}function qp(r){let t,e,i,o;return S1(r)?(t=r.top,e=r.right,i=r.bottom,o=r.left):t=e=i=o=r,{top:t,right:e,bottom:i,left:o,disabled:r===!1}}function VH(r,t){let e=[],i=r._getSortedDatasetMetas(t),o,a;for(o=0,a=i.length;o<a;++o)e.push(i[o].index);return e}function un(r,t,e,i={}){let o=r.keys,a=i.mode==="single",n,s,V,c;if(t===null)return;let p=!1;for(n=0,s=o.length;n<s;++n){if(V=+o[n],V===e){if(p=!0,i.all)continue;break}c=r.values[V],H2(c)&&(a||t===0||F5(t)===F5(c))&&(t+=c)}return!p&&!i.all?0:t}function Yp(r,t){let{iScale:e,vScale:i}=t,o=e.axis==="x"?"x":"y",a=i.axis==="x"?"x":"y",n=Object.keys(r),s=new Array(n.length),V,c,p;for(V=0,c=n.length;V<c;++V)p=n[V],s[V]={[o]:p,[a]:r[p]};return s}function hr(r,t){let e=r&&r.options.stacked;return e||e===void 0&&t.stack!==void 0}function Qp(r,t,e){return`${r.id}.${t.id}.${e.stack||e.type}`}function Kp(r){let{min:t,max:e,minDefined:i,maxDefined:o}=r.getUserBounds();return{min:i?t:Number.NEGATIVE_INFINITY,max:o?e:Number.POSITIVE_INFINITY}}function Xp(r,t,e){let i=r[t]||(r[t]={});return i[e]||(i[e]={})}function mn(r,t,e,i){for(let o of t.getMatchingVisibleMetas(i).reverse()){let a=r[o.index];if(e&&a>0||!e&&a<0)return o.index}return null}function hn(r,t){let{chart:e,_cachedMeta:i}=r,o=e._stacks||(e._stacks={}),{iScale:a,vScale:n,index:s}=i,V=a.axis,c=n.axis,p=Qp(a,n,i),h=t.length,v;for(let g=0;g<h;++g){let y=t[g],{[V]:O,[c]:k}=y,T=y._stacks||(y._stacks={});v=T[c]=Xp(o,p,O),v[s]=k,v._top=mn(v,n,!0,i.type),v._bottom=mn(v,n,!1,i.type);let F=v._visualValues||(v._visualValues={});F[s]=k}}function fr(r,t){let e=r.scales;return Object.keys(e).filter(i=>e[i].axis===t).shift()}function Jp(r,t){return m0(r,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function tu(r,t,e){return m0(r,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function d9(r,t){let e=r.controller.index,i=r.vScale&&r.vScale.axis;if(i){t=t||r._parsed;for(let o of t){let a=o._stacks;if(!a||a[i]===void 0||a[i][e]===void 0)return;delete a[i][e],a[i]._visualValues!==void 0&&a[i]._visualValues[e]!==void 0&&delete a[i]._visualValues[e]}}}var Ar=r=>r==="reset"||r==="none",fn=(r,t)=>t?r:Object.assign({},r),eu=(r,t,e)=>r&&!t.hidden&&t._stacked&&{keys:VH(e,!0),values:null},p3=class{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=hr(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&d9(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),o=(h,v,g,y)=>h==="x"?v:h==="r"?y:g,a=e.xAxisID=P1(i.xAxisID,fr(t,"x")),n=e.yAxisID=P1(i.yAxisID,fr(t,"y")),s=e.rAxisID=P1(i.rAxisID,fr(t,"r")),V=e.indexAxis,c=e.iAxisID=o(V,a,n,s),p=e.vAxisID=o(V,n,a,s);e.xScale=this.getScaleForId(a),e.yScale=this.getScaleForId(n),e.rScale=this.getScaleForId(s),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(p)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&_8(this._data,this),t._stacked&&d9(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if(S1(e)){let o=this._cachedMeta;this._data=Yp(e,o)}else if(i!==e){if(i){_8(i,this);let o=this._cachedMeta;d9(o),o._parsed=[]}e&&Object.isExtensible(e)&&Je(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),o=!1;this._dataCheck();let a=e._stacked;e._stacked=hr(e.vScale,e),e.stack!==i.stack&&(o=!0,d9(e),e.stack=i.stack),this._resyncElements(t),(o||a!==e._stacked)&&(hn(this,e._parsed),e._stacked=hr(e.vScale,e))}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let{_cachedMeta:i,_data:o}=this,{iScale:a,_stacked:n}=i,s=a.axis,V=t===0&&e===o.length?!0:i._sorted,c=t>0&&i._parsed[t-1],p,h,v;if(this._parsing===!1)i._parsed=o,i._sorted=!0,v=o;else{i2(o[t])?v=this.parseArrayData(i,o,t,e):S1(o[t])?v=this.parseObjectData(i,o,t,e):v=this.parsePrimitiveData(i,o,t,e);let g=()=>h[s]===null||c&&h[s]<c[s];for(p=0;p<e;++p)i._parsed[p+t]=h=v[p],V&&(g()&&(V=!1),c=h);i._sorted=V}n&&hn(this,v)}parsePrimitiveData(t,e,i,o){let{iScale:a,vScale:n}=t,s=a.axis,V=n.axis,c=a.getLabels(),p=a===n,h=new Array(o),v,g,y;for(v=0,g=o;v<g;++v)y=v+i,h[v]={[s]:p||a.parse(c[y],y),[V]:n.parse(e[y],y)};return h}parseArrayData(t,e,i,o){let{xScale:a,yScale:n}=t,s=new Array(o),V,c,p,h;for(V=0,c=o;V<c;++V)p=V+i,h=e[p],s[V]={x:a.parse(h[0],p),y:n.parse(h[1],p)};return s}parseObjectData(t,e,i,o){let{xScale:a,yScale:n}=t,{xAxisKey:s="x",yAxisKey:V="y"}=this._parsing,c=new Array(o),p,h,v,g;for(p=0,h=o;p<h;++p)v=p+i,g=e[v],c[p]={x:a.parse(l3(g,s),v),y:n.parse(l3(g,V),v)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let o=this.chart,a=this._cachedMeta,n=e[t.axis],s={keys:VH(o,!0),values:e._stacks[t.axis]._visualValues};return un(s,n,a.index,{mode:i})}updateRangeFromParsed(t,e,i,o){let a=i[e.axis],n=a===null?NaN:a,s=o&&i._stacks[e.axis];o&&s&&(o.values=s,n=un(o,a,this._cachedMeta.index)),t.min=Math.min(t.min,n),t.max=Math.max(t.max,n)}getMinMax(t,e){let i=this._cachedMeta,o=i._parsed,a=i._sorted&&t===i.iScale,n=o.length,s=this._getOtherScale(t),V=eu(e,i,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:p,max:h}=Kp(s),v,g;function y(){g=o[v];let O=g[s.axis];return!H2(g[t.axis])||p>O||h<O}for(v=0;v<n&&!(!y()&&(this.updateRangeFromParsed(c,t,g,V),a));++v);if(a){for(v=n-1;v>=0;--v)if(!y()){this.updateRangeFromParsed(c,t,g,V);break}}return c}getAllParsedValues(t){let e=this._cachedMeta._parsed,i=[],o,a,n;for(o=0,a=e.length;o<a;++o)n=e[o][t.axis],H2(n)&&i.push(n);return i}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,o=e.vScale,a=this.getParsed(t);return{label:i?""+i.getLabelForValue(a[i.axis]):"",value:o?""+o.getLabelForValue(a[o.axis]):""}}_update(t){let e=this._cachedMeta;this.update(t||"default"),e._clip=qp(P1(this.options.clip,Gp(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){let t=this._ctx,e=this.chart,i=this._cachedMeta,o=i.data||[],a=e.chartArea,n=[],s=this._drawStart||0,V=this._drawCount||o.length-s,c=this.options.drawActiveElementsOnTop,p;for(i.dataset&&i.dataset.draw(t,a,s,V),p=s;p<s+V;++p){let h=o[p];h.hidden||(h.active&&c?n.push(h):h.draw(t,a))}for(p=0;p<n.length;++p)n[p].draw(t,a)}getStyle(t,e){let i=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){let o=this.getDataset(),a;if(t>=0&&t<this._cachedMeta.data.length){let n=this._cachedMeta.data[t];a=n.$context||(n.$context=tu(this.getContext(),t,n)),a.parsed=this.getParsed(t),a.raw=o.data[t],a.index=a.dataIndex=t}else a=this.$context||(this.$context=Jp(this.chart.getContext(),this.index)),a.dataset=o,a.index=a.datasetIndex=this.index;return a.active=!!e,a.mode=i,a}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let o=e==="active",a=this._cachedDataOpts,n=t+"-"+e,s=a[n],V=this.enableOptionSharing&&J3(i);if(s)return fn(s,V);let c=this.chart.config,p=c.datasetElementScopeKeys(this._type,t),h=o?[`${t}Hover`,"hover",t,""]:[t,""],v=c.getOptionScopes(this.getDataset(),p),g=Object.keys(s2.elements[t]),y=()=>this.getContext(i,o,e),O=c.resolveNamedOptions(v,g,y,h);return O.$shared&&(O.$shared=V,a[n]=Object.freeze(fn(O,V))),O}_resolveAnimations(t,e,i){let o=this.chart,a=this._cachedDataOpts,n=`animation-${e}`,s=a[n];if(s)return s;let V;if(o.options.animation!==!1){let p=this.chart.config,h=p.datasetAnimationScopeKeys(this._type,e),v=p.getOptionScopes(this.getDataset(),h);V=p.createResolver(v,this.getContext(t,i,e))}let c=new X8(o,V&&V.animations);return V&&V._cacheable&&(a[n]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ar(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),o=this._sharedOptions,a=this.getSharedOptions(i),n=this.includeOptions(e,a)||a!==o;return this.updateSharedOptions(a,e,i),{sharedOptions:a,includeOptions:n}}updateElement(t,e,i,o){Ar(o)?Object.assign(t,i):this._resolveAnimations(e,o).update(t,i)}updateSharedOptions(t,e,i){t&&!Ar(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,o){t.active=o;let a=this.getStyle(e,o);this._resolveAnimations(e,i,o).update(t,{options:!o&&this.getSharedOptions(a)||a})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[s,V,c]of this._syncList)this[s](V,c);this._syncList=[];let o=i.length,a=e.length,n=Math.min(a,o);n&&this.parse(0,n),a>o?this._insertElements(o,a-o,t):a<o&&this._removeElements(a,o-a)}_insertElements(t,e,i=!0){let o=this._cachedMeta,a=o.data,n=t+e,s,V=c=>{for(c.length+=e,s=c.length-1;s>=n;s--)c[s]=c[s-e]};for(V(a),s=t;s<n;++s)a[s]=new this.dataElementType;this._parsing&&V(o._parsed),this.parse(t,e),i&&this.updateElements(a,t,e,"reset")}updateElements(t,e,i,o){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let o=i._parsed.splice(t,e);i._stacked&&d9(i,o)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,o]=t;this[e](i,o)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}};z(p3,"defaults",{}),z(p3,"datasetElementType",null),z(p3,"dataElementType",null);function ru(r,t){if(!r._cache.$bar){let e=r.getMatchingVisibleMetas(t),i=[];for(let o=0,a=e.length;o<a;o++)i=i.concat(e[o].controller.getAllParsedValues(r));r._cache.$bar=b8(i.sort((o,a)=>o-a))}return r._cache.$bar}function iu(r){let t=r.iScale,e=ru(t,r.type),i=t._length,o,a,n,s,V=()=>{n===32767||n===-32768||(J3(s)&&(i=Math.min(i,Math.abs(n-s)||i)),s=n)};for(o=0,a=e.length;o<a;++o)n=t.getPixelForValue(e[o]),V();for(s=void 0,o=0,a=t.ticks.length;o<a;++o)n=t.getPixelForTick(o),V();return i}function ou(r,t,e,i){let o=e.barThickness,a,n;return b1(o)?(a=t.min*e.categoryPercentage,n=e.barPercentage):(a=o*i,n=1),{chunk:a/i,ratio:n,start:t.pixels[r]-a/2}}function Cu(r,t,e,i){let o=t.pixels,a=o[r],n=r>0?o[r-1]:null,s=r<o.length-1?o[r+1]:null,V=e.categoryPercentage;n===null&&(n=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-n);let c=a-(a-Math.min(n,s))/2*V;return{chunk:Math.abs(s-n)/2*V/i,ratio:e.barPercentage,start:c}}function au(r,t,e,i){let o=e.parse(r[0],i),a=e.parse(r[1],i),n=Math.min(o,a),s=Math.max(o,a),V=n,c=s;Math.abs(n)>Math.abs(s)&&(V=s,c=n),t[e.axis]=c,t._custom={barStart:V,barEnd:c,start:o,end:a,min:n,max:s}}function LH(r,t,e,i){return i2(r)?au(r,t,e,i):t[e.axis]=e.parse(r,i),t}function An(r,t,e,i){let o=r.iScale,a=r.vScale,n=o.getLabels(),s=o===a,V=[],c,p,h,v;for(c=e,p=e+i;c<p;++c)v=t[c],h={},h[o.axis]=s||o.parse(n[c],c),V.push(LH(v,h,a,c));return V}function vr(r){return r&&r.barStart!==void 0&&r.barEnd!==void 0}function nu(r,t,e){return r!==0?F5(r):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function Hu(r){let t,e,i,o,a;return r.horizontal?(t=r.base>r.x,e="left",i="right"):(t=r.base<r.y,e="bottom",i="top"),t?(o="end",a="start"):(o="start",a="end"),{start:e,end:i,reverse:t,top:o,bottom:a}}function su(r,t,e,i){let o=t.borderSkipped,a={};if(!o){r.borderSkipped=a;return}if(o===!0){r.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:n,end:s,reverse:V,top:c,bottom:p}=Hu(r);o==="middle"&&e&&(r.enableBorderRadius=!0,(e._top||0)===i?o=c:(e._bottom||0)===i?o=p:(a[vn(p,n,s,V)]=!0,o=c)),a[vn(o,n,s,V)]=!0,r.borderSkipped=a}function vn(r,t,e,i){return i?(r=Vu(r,t,e),r=xn(r,e,t)):r=xn(r,t,e),r}function Vu(r,t,e){return r===t?e:r===e?t:r}function xn(r,t,e){return r==="start"?t:r==="end"?e:r}function Lu(r,{inflateAmount:t},e){r.inflateAmount=t==="auto"?e===1?.33:0:t}var z0=class extends p3{parsePrimitiveData(t,e,i,o){return An(t,e,i,o)}parseArrayData(t,e,i,o){return An(t,e,i,o)}parseObjectData(t,e,i,o){let{iScale:a,vScale:n}=t,{xAxisKey:s="x",yAxisKey:V="y"}=this._parsing,c=a.axis==="x"?s:V,p=n.axis==="x"?s:V,h=[],v,g,y,O;for(v=i,g=i+o;v<g;++v)O=e[v],y={},y[a.axis]=a.parse(l3(O,c),v),h.push(LH(l3(O,p),y,n,v));return h}updateRangeFromParsed(t,e,i,o){super.updateRangeFromParsed(t,e,i,o);let a=i._custom;a&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:o}=e,a=this.getParsed(t),n=a._custom,s=vr(n)?"["+n.start+", "+n.end+"]":""+o.getLabelForValue(a[o.axis]);return{label:""+i.getLabelForValue(a[i.axis]),value:s}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,o){let a=o==="reset",{index:n,_cachedMeta:{vScale:s}}=this,V=s.getBasePixel(),c=s.isHorizontal(),p=this._getRuler(),{sharedOptions:h,includeOptions:v}=this._getSharedOptions(e,o);for(let g=e;g<e+i;g++){let y=this.getParsed(g),O=a||b1(y[s.axis])?{base:V,head:V}:this._calculateBarValuePixels(g),k=this._calculateBarIndexPixels(g,p),T=(y._stacks||{})[s.axis],F={horizontal:c,base:O.base,enableBorderRadius:!T||vr(y._custom)||n===T._top||n===T._bottom,x:c?O.head:k.center,y:c?k.center:O.head,height:c?k.size:Math.abs(O.size),width:c?Math.abs(O.size):k.size};v&&(F.options=h||this.resolveDataElementOptions(g,t[g].active?"active":o));let R=F.options||t[g].options;su(F,R,T,n),Lu(F,R,p.ratio),this.updateElement(t[g],g,F,o)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,o=i.getMatchingVisibleMetas(this._type).filter(p=>p.controller.options.grouped),a=i.options.stacked,n=[],s=this._cachedMeta.controller.getParsed(e),V=s&&s[i.axis],c=p=>{let h=p._parsed.find(g=>g[i.axis]===V),v=h&&h[p.vScale.axis];if(b1(v)||isNaN(v))return!0};for(let p of o)if(!(e!==void 0&&c(p))&&((a===!1||n.indexOf(p.stack)===-1||a===void 0&&p.stack===void 0)&&n.push(p.stack),p.index===t))break;return n.length||n.push(void 0),n}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(i=>t[i].axis===e).shift()}_getAxis(){let t={},e=this.getFirstScaleIdForIndexAxis();for(let i of this.chart.data.datasets)t[P1(this.chart.options.indexAxis==="x"?i.xAxisID:i.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,i){let o=this._getStacks(t,i),a=e!==void 0?o.indexOf(e):-1;return a===-1?o.length-1:a}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,o=[],a,n;for(a=0,n=e.data.length;a<n;++a)o.push(i.getPixelForValue(this.getParsed(a)[i.axis],a));let s=t.barThickness;return{min:s||iu(e),pixels:o,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,grouped:t.grouped,ratio:s?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){let{_cachedMeta:{vScale:e,_stacked:i,index:o},options:{base:a,minBarLength:n}}=this,s=a||0,V=this.getParsed(t),c=V._custom,p=vr(c),h=V[e.axis],v=0,g=i?this.applyStack(e,V,i):h,y,O;g!==h&&(v=g-h,g=h),p&&(h=c.barStart,g=c.barEnd-c.barStart,h!==0&&F5(h)!==F5(c.barEnd)&&(v=0),v+=h);let k=!b1(a)&&!p?a:v,T=e.getPixelForValue(k);if(this.chart.getDataVisibility(t)?y=e.getPixelForValue(v+g):y=T,O=y-T,Math.abs(O)<n){O=nu(O,e,s)*n,h===s&&(T-=O/2);let F=e.getPixelForDecimal(0),R=e.getPixelForDecimal(1),K=Math.min(F,R),G=Math.max(F,R);T=Math.max(Math.min(T,G),K),y=T+O,i&&!p&&(V._stacks[e.axis]._visualValues[o]=e.getValueForPixel(y)-e.getValueForPixel(T))}if(T===e.getPixelForValue(s)){let F=F5(O)*e.getLineWidthForValue(s)/2;T+=F,O-=F}return{size:O,base:T,head:y,center:y+O/2}}_calculateBarIndexPixels(t,e){let i=e.scale,o=this.options,a=o.skipNull,n=P1(o.maxBarThickness,1/0),s,V,c=this._getAxisCount();if(e.grouped){let p=a?this._getStackCount(t):e.stackCount,h=o.barThickness==="flex"?Cu(t,e,o,p*c):ou(t,e,o,p*c),v=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,g=this._getAxis().indexOf(P1(v,this.getFirstScaleIdForIndexAxis())),y=this._getStackIndex(this.index,this._cachedMeta.stack,a?t:void 0)+g;s=h.start+h.chunk*y+h.chunk/2,V=Math.min(n,h.chunk*h.ratio)}else s=i.getPixelForValue(this.getParsed(t)[i.axis],t),V=Math.min(n,e.min*e.ratio);return{base:s-V/2,head:s+V/2,center:s,size:V}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,o=i.length,a=0;for(;a<o;++a)this.getParsed(a)[e.axis]!==null&&!i[a].hidden&&i[a].draw(this._ctx)}};z(z0,"id","bar"),z(z0,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),z(z0,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});var I0=class extends p3{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:o=[],_dataset:a}=e,n=this.chart._animationsDisabled,{start:s,count:V}=rr(e,o,n);this._drawStart=s,this._drawCount=V,ir(e)&&(s=0,V=o.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=o;let c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(i,void 0,{animated:!n,options:c},t),this.updateElements(o,s,V,t)}updateElements(t,e,i,o){let a=o==="reset",{iScale:n,vScale:s,_stacked:V,_dataset:c}=this._cachedMeta,{sharedOptions:p,includeOptions:h}=this._getSharedOptions(e,o),v=n.axis,g=s.axis,{spanGaps:y,segment:O}=this.options,k=e7(y)?y:Number.POSITIVE_INFINITY,T=this.chart._animationsDisabled||a||o==="none",F=e+i,R=t.length,K=e>0&&this.getParsed(e-1);for(let G=0;G<R;++G){let L1=t[G],X=T?L1:{};if(G<e||G>=F){X.skip=!0;continue}let e1=this.getParsed(G),o1=b1(e1[g]),m1=X[v]=n.getPixelForValue(e1[v],G),W1=X[g]=a||o1?s.getBasePixel():s.getPixelForValue(V?this.applyStack(s,e1,V):e1[g],G);X.skip=isNaN(m1)||isNaN(W1)||o1,X.stop=G>0&&Math.abs(e1[v]-K[v])>k,O&&(X.parsed=e1,X.raw=c.data[G]),h&&(X.options=p||this.resolveDataElementOptions(G,L1.active?"active":o)),T||this.updateElement(L1,G,X,o),K=e1}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,o=t.data||[];if(!o.length)return i;let a=o[0].size(this.resolveDataElementOptions(0)),n=o[o.length-1].size(this.resolveDataElementOptions(o.length-1));return Math.max(i,a,n)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}};z(I0,"id","line"),z(I0,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),z(I0,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});function i7(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}var Or=class r{constructor(t){z(this,"options");this.options=t||{}}static override(t){Object.assign(r.prototype,t)}init(){}formats(){return i7()}parse(){return i7()}format(){return i7()}add(){return i7()}diff(){return i7()}startOf(){return i7()}endOf(){return i7()}},lu={_date:Or};function cu(r,t,e,i){let{controller:o,data:a,_sorted:n}=r,s=o._cachedMeta.iScale,V=r.dataset&&r.dataset.options?r.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!=="r"&&n&&a.length){let c=s._reversePixels?Ke:$0;if(i){if(o._sharedOptions){let p=a[0],h=typeof p.getRange=="function"&&p.getRange(t);if(h){let v=c(a,t,e-h),g=c(a,t,e+h);return{lo:v.lo,hi:g.hi}}}}else{let p=c(a,t,e);if(V){let{vScale:h}=o._cachedMeta,{_parsed:v}=r,g=v.slice(0,p.lo+1).reverse().findIndex(O=>!b1(O[h.axis]));p.lo-=Math.max(0,g);let y=v.slice(p.hi).findIndex(O=>!b1(O[h.axis]));p.hi+=Math.max(0,y)}return p}}return{lo:0,hi:a.length-1}}function _9(r,t,e,i,o){let a=r.getSortedVisibleDatasetMetas(),n=e[t];for(let s=0,V=a.length;s<V;++s){let{index:c,data:p}=a[s],{lo:h,hi:v}=cu(a[s],t,n,o);for(let g=h;g<=v;++g){let y=p[g];y.skip||i(y,c,g)}}}function Mu(r){let t=r.indexOf("x")!==-1,e=r.indexOf("y")!==-1;return function(i,o){let a=t?Math.abs(i.x-o.x):0,n=e?Math.abs(i.y-o.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(n,2))}}function xr(r,t,e,i,o){let a=[];return!o&&!r.isPointInArea(t)||_9(r,e,t,function(s,V,c){!o&&!G5(s,r.chartArea,0)||s.inRange(t.x,t.y,i)&&a.push({element:s,datasetIndex:V,index:c})},!0),a}function du(r,t,e,i){let o=[];function a(n,s,V){let{startAngle:c,endAngle:p}=n.getProps(["startAngle","endAngle"],i),{angle:h}=g8(n,{x:t.x,y:t.y});i9(h,c,p)&&o.push({element:n,datasetIndex:s,index:V})}return _9(r,e,t,a),o}function pu(r,t,e,i,o,a){let n=[],s=Mu(e),V=Number.POSITIVE_INFINITY;function c(p,h,v){let g=p.inRange(t.x,t.y,o);if(i&&!g)return;let y=p.getCenterPoint(o);if(!(!!a||r.isPointInArea(y))&&!g)return;let k=s(t,y);k<V?(n=[{element:p,datasetIndex:h,index:v}],V=k):k===V&&n.push({element:p,datasetIndex:h,index:v})}return _9(r,e,t,c),n}function gr(r,t,e,i,o,a){return!a&&!r.isPointInArea(t)?[]:e==="r"&&!i?du(r,t,e,o):pu(r,t,e,i,o,a)}function gn(r,t,e,i,o){let a=[],n=e==="x"?"inXRange":"inYRange",s=!1;return _9(r,e,t,(V,c,p)=>{V[n]&&V[n](t[e],o)&&(a.push({element:V,datasetIndex:c,index:p}),s=s||V.inRange(t.x,t.y,o))}),i&&!s?[]:a}var uu={evaluateInteractionItems:_9,modes:{index(r,t,e,i){let o=Y5(t,r),a=e.axis||"x",n=e.includeInvisible||!1,s=e.intersect?xr(r,o,a,i,n):gr(r,o,a,!1,i,n),V=[];return s.length?(r.getSortedVisibleDatasetMetas().forEach(c=>{let p=s[0].index,h=c.data[p];h&&!h.skip&&V.push({element:h,datasetIndex:c.index,index:p})}),V):[]},dataset(r,t,e,i){let o=Y5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1,s=e.intersect?xr(r,o,a,i,n):gr(r,o,a,!1,i,n);if(s.length>0){let V=s[0].datasetIndex,c=r.getDatasetMeta(V).data;s=[];for(let p=0;p<c.length;++p)s.push({element:c[p],datasetIndex:V,index:p})}return s},point(r,t,e,i){let o=Y5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return xr(r,o,a,i,n)},nearest(r,t,e,i){let o=Y5(t,r),a=e.axis||"xy",n=e.includeInvisible||!1;return gr(r,o,a,e.intersect,i,n)},x(r,t,e,i){let o=Y5(t,r);return gn(r,o,"x",e.intersect,i)},y(r,t,e,i){let o=Y5(t,r);return gn(r,o,"y",e.intersect,i)}}},lH=["left","top","right","bottom"];function p9(r,t){return r.filter(e=>e.pos===t)}function _n(r,t){return r.filter(e=>lH.indexOf(e.pos)===-1&&e.box.axis===t)}function u9(r,t){return r.sort((e,i)=>{let o=t?i:e,a=t?e:i;return o.weight===a.weight?o.index-a.index:o.weight-a.weight})}function mu(r){let t=[],e,i,o,a,n,s;for(e=0,i=(r||[]).length;e<i;++e)o=r[e],{position:a,options:{stack:n,stackWeight:s=1}}=o,t.push({index:e,box:o,pos:a,horizontal:o.isHorizontal(),weight:o.weight,stack:n&&a+n,stackWeight:s});return t}function hu(r){let t={};for(let e of r){let{stack:i,pos:o,stackWeight:a}=e;if(!i||!lH.includes(o))continue;let n=t[i]||(t[i]={count:0,placed:0,weight:0,size:0});n.count++,n.weight+=a}return t}function fu(r,t){let e=hu(r),{vBoxMaxWidth:i,hBoxMaxHeight:o}=t,a,n,s;for(a=0,n=r.length;a<n;++a){s=r[a];let{fullSize:V}=s.box,c=e[s.stack],p=c&&s.stackWeight/c.weight;s.horizontal?(s.width=p?p*i:V&&t.availableWidth,s.height=o):(s.width=i,s.height=p?p*o:V&&t.availableHeight)}return e}function Au(r){let t=mu(r),e=u9(t.filter(c=>c.box.fullSize),!0),i=u9(p9(t,"left"),!0),o=u9(p9(t,"right")),a=u9(p9(t,"top"),!0),n=u9(p9(t,"bottom")),s=_n(t,"x"),V=_n(t,"y");return{fullSize:e,leftAndTop:i.concat(a),rightAndBottom:o.concat(V).concat(n).concat(s),chartArea:p9(t,"chartArea"),vertical:i.concat(o).concat(V),horizontal:a.concat(n).concat(s)}}function bn(r,t,e,i){return Math.max(r[e],t[e])+Math.max(r[i],t[i])}function cH(r,t){r.top=Math.max(r.top,t.top),r.left=Math.max(r.left,t.left),r.bottom=Math.max(r.bottom,t.bottom),r.right=Math.max(r.right,t.right)}function vu(r,t,e,i){let{pos:o,box:a}=e,n=r.maxPadding;if(!S1(o)){e.size&&(r[o]-=e.size);let h=i[e.stack]||{size:0,count:1};h.size=Math.max(h.size,e.horizontal?a.height:a.width),e.size=h.size/h.count,r[o]+=e.size}a.getPadding&&cH(n,a.getPadding());let s=Math.max(0,t.outerWidth-bn(n,r,"left","right")),V=Math.max(0,t.outerHeight-bn(n,r,"top","bottom")),c=s!==r.w,p=V!==r.h;return r.w=s,r.h=V,e.horizontal?{same:c,other:p}:{same:p,other:c}}function xu(r){let t=r.maxPadding;function e(i){let o=Math.max(t[i]-r[i],0);return r[i]+=o,o}r.y+=e("top"),r.x+=e("left"),e("right"),e("bottom")}function gu(r,t){let e=t.maxPadding;function i(o){let a={left:0,top:0,right:0,bottom:0};return o.forEach(n=>{a[n]=Math.max(t[n],e[n])}),a}return i(r?["left","right"]:["top","bottom"])}function f9(r,t,e,i){let o=[],a,n,s,V,c,p;for(a=0,n=r.length,c=0;a<n;++a){s=r[a],V=s.box,V.update(s.width||t.w,s.height||t.h,gu(s.horizontal,t));let{same:h,other:v}=vu(t,e,s,i);c|=h&&o.length,p=p||v,V.fullSize||o.push(s)}return c&&f9(o,t,e,i)||p}function I8(r,t,e,i,o){r.top=e,r.left=t,r.right=t+i,r.bottom=e+o,r.width=i,r.height=o}function wn(r,t,e,i){let o=e.padding,{x:a,y:n}=t;for(let s of r){let V=s.box,c=i[s.stack]||{count:1,placed:0,weight:1},p=s.stackWeight/c.weight||1;if(s.horizontal){let h=t.w*p,v=c.size||V.height;J3(c.start)&&(n=c.start),V.fullSize?I8(V,o.left,n,e.outerWidth-o.right-o.left,v):I8(V,t.left+c.placed,n,h,v),c.start=n,c.placed+=h,n=V.bottom}else{let h=t.h*p,v=c.size||V.width;J3(c.start)&&(a=c.start),V.fullSize?I8(V,a,o.top,v,e.outerHeight-o.bottom-o.top):I8(V,a,t.top+c.placed,v,h),c.start=a,c.placed+=h,a=V.right}}t.x=a,t.y=n}var N8={addBox(r,t){r.boxes||(r.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},r.boxes.push(t)},removeBox(r,t){let e=r.boxes?r.boxes.indexOf(t):-1;e!==-1&&r.boxes.splice(e,1)},configure(r,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(r,t,e,i){if(!r)return;let o=j2(r.options.layout.padding),a=Math.max(t-o.width,0),n=Math.max(e-o.height,0),s=Au(r.boxes),V=s.vertical,c=s.horizontal;N1(r.boxes,O=>{typeof O.beforeLayout=="function"&&O.beforeLayout()});let p=V.reduce((O,k)=>k.box.options&&k.box.options.display===!1?O:O+1,0)||1,h=Object.freeze({outerWidth:t,outerHeight:e,padding:o,availableWidth:a,availableHeight:n,vBoxMaxWidth:a/2/p,hBoxMaxHeight:n/2}),v=Object.assign({},o);cH(v,j2(i));let g=Object.assign({maxPadding:v,w:a,h:n,x:o.left,y:o.top},o),y=fu(V.concat(c),h);f9(s.fullSize,g,h,y),f9(V,g,h,y),f9(c,g,h,y)&&f9(V,g,h,y),xu(g),wn(s.leftAndTop,g,h,y),g.x+=g.w,g.y+=g.h,wn(s.rightAndBottom,g,h,y),r.chartArea={left:g.left,top:g.top,right:g.left+g.w,bottom:g.top+g.h,height:g.h,width:g.w},N1(s.chartArea,O=>{let k=O.box;Object.assign(k,r.chartArea),k.update(g.w,g.h,{left:0,top:0,right:0,bottom:0})})}},J8=class{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,o){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,o?Math.floor(e/o):i)}}isAttached(t){return!0}updateConfig(t){}},Tr=class extends J8{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}},Q8="$chartjs",_u={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Sn=r=>r===null||r==="";function bu(r,t){let e=r.style,i=r.getAttribute("height"),o=r.getAttribute("width");if(r[Q8]={initial:{height:i,width:o,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Sn(o)){let a=R8(r,"width");a!==void 0&&(r.width=a)}if(Sn(i))if(r.style.height==="")r.height=r.width/(t||2);else{let a=R8(r,"height");a!==void 0&&(r.height=a)}return r}var MH=cr?{passive:!0}:!1;function wu(r,t,e){r&&r.addEventListener(t,e,MH)}function Su(r,t,e){r&&r.canvas&&r.canvas.removeEventListener(t,e,MH)}function yu(r,t){let e=_u[r.type]||r.type,{x:i,y:o}=Y5(r,t);return{type:e,chart:t,native:r,x:i!==void 0?i:null,y:o!==void 0?o:null}}function tt(r,t){for(let e of r)if(e===t||e.contains(t))return!0}function Zu(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let s of a)n=n||tt(s.addedNodes,i),n=n&&!tt(s.removedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}function ku(r,t,e){let i=r.canvas,o=new MutationObserver(a=>{let n=!1;for(let s of a)n=n||tt(s.removedNodes,i),n=n&&!tt(s.addedNodes,i);n&&e()});return o.observe(document,{childList:!0,subtree:!0}),o}var x9=new Map,yn=0;function dH(){let r=window.devicePixelRatio;r!==yn&&(yn=r,x9.forEach((t,e)=>{e.currentDevicePixelRatio!==r&&t()}))}function Ou(r,t){x9.size||window.addEventListener("resize",dH),x9.set(r,t)}function Tu(r){x9.delete(r),x9.size||window.removeEventListener("resize",dH)}function Pu(r,t,e){let i=r.canvas,o=i&&c9(i);if(!o)return;let a=S8((s,V)=>{let c=o.clientWidth;e(s,V),c<o.clientWidth&&e()},window),n=new ResizeObserver(s=>{let V=s[0],c=V.contentRect.width,p=V.contentRect.height;c===0&&p===0||a(c,p)});return n.observe(o),Ou(r,a),n}function _r(r,t,e){e&&e.disconnect(),t==="resize"&&Tu(r)}function Eu(r,t,e){let i=r.canvas,o=S8(a=>{r.ctx!==null&&e(yu(a,r))},r);return wu(i,t,o),o}var Pr=class extends J8{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(bu(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[Q8])return!1;let i=e[Q8].initial;["height","width"].forEach(a=>{let n=i[a];b1(n)?e.removeAttribute(a):e.setAttribute(a,n)});let o=i.style||{};return Object.keys(o).forEach(a=>{e.style[a]=o[a]}),e.width=e.width,delete e[Q8],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let o=t.$proxies||(t.$proxies={}),n={attach:Zu,detach:ku,resize:Pu}[e]||Eu;o[e]=n(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),o=i[e];if(!o)return;({attach:_r,detach:_r,resize:_r}[e]||Su)(t,e,o),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,o){return lr(t,e,i,o)}isAttached(t){let e=t&&c9(t);return!!(e&&e.isConnected)}};function Fu(r){return!l9()||typeof OffscreenCanvas<"u"&&r instanceof OffscreenCanvas?Tr:Pr}var X5=class{constructor(){z(this,"x");z(this,"y");z(this,"active",!1);z(this,"options");z(this,"$animations")}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return e7(this.x)&&e7(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let o={};return t.forEach(a=>{o[a]=i[a]&&i[a].active()?i[a]._to:this[a]}),o}};z(X5,"defaults",{}),z(X5,"defaultRoutes");function $u(r,t){let e=r.options.ticks,i=Ru(r),o=Math.min(e.maxTicksLimit||i,i),a=e.major.enabled?Bu(t):[],n=a.length,s=a[0],V=a[n-1],c=[];if(n>o)return zu(t,c,a,n/o),c;let p=Du(a,t,o);if(n>0){let h,v,g=n>1?Math.round((V-s)/(n-1)):null;for(W8(t,c,p,b1(g)?0:s-g,s),h=0,v=n-1;h<v;h++)W8(t,c,p,a[h],a[h+1]);return W8(t,c,p,V,b1(g)?t.length:V+g),c}return W8(t,c,p),c}function Ru(r){let t=r.options.offset,e=r._tickSize(),i=r._length/e+(t?0:1),o=r._maxLength/e;return Math.floor(Math.min(i,o))}function Du(r,t,e){let i=Iu(r),o=t.length/e;if(!i)return Math.max(o,1);let a=qe(i);for(let n=0,s=a.length-1;n<s;n++){let V=a[n];if(V>o)return V}return Math.max(o,1)}function Bu(r){let t=[],e,i;for(e=0,i=r.length;e<i;e++)r[e].major&&t.push(e);return t}function zu(r,t,e,i){let o=0,a=e[0],n;for(i=Math.ceil(i),n=0;n<r.length;n++)n===a&&(t.push(r[n]),o++,a=e[o*i])}function W8(r,t,e,i,o){let a=P1(i,0),n=Math.min(P1(o,r.length),r.length),s=0,V,c,p;for(e=Math.ceil(e),o&&(V=o-i,e=V/Math.floor(V/e)),p=a;p<0;)s++,p=Math.round(a+s*e);for(c=Math.max(a,0);c<n;c++)c===p&&(t.push(r[c]),s++,p=Math.round(a+s*e))}function Iu(r){let t=r.length,e,i;if(t<2)return!1;for(i=r[0],e=1;e<t;++e)if(r[e]-r[e-1]!==i)return!1;return i}var Nu=r=>r==="left"?"right":r==="right"?"left":r,Zn=(r,t,e)=>t==="top"||t==="left"?r[t]+e:r[t]-e,kn=(r,t)=>Math.min(t||r,r);function On(r,t){let e=[],i=r.length/t,o=r.length,a=0;for(;a<o;a+=i)e.push(r[Math.floor(a)]);return e}function Wu(r,t,e){let i=r.ticks.length,o=Math.min(t,i-1),a=r._startPixel,n=r._endPixel,s=1e-6,V=r.getPixelForTick(o),c;if(!(e&&(i===1?c=Math.max(V-a,n-V):t===0?c=(r.getPixelForTick(1)-V)/2:c=(V-r.getPixelForTick(o-1))/2,V+=o<t?c:-c,V<a-s||V>n+s)))return V}function Uu(r,t){N1(r,e=>{let i=e.gc,o=i.length/2,a;if(o>t){for(a=0;a<o;++a)delete e.data[i[a]];i.splice(0,o)}})}function m9(r){return r.drawTicks?r.tickLength:0}function Tn(r,t){if(!r.display)return 0;let e=z2(r.font,t),i=j2(r.padding);return(i2(r.text)?r.text.length:1)*e.lineHeight+i.height}function ju(r,t){return m0(r,{scale:t,type:"scale"})}function Gu(r,t,e){return m0(r,{tick:e,index:t,type:"tick"})}function qu(r,t,e){let i=er(r);return(e&&t!=="right"||!e&&t==="right")&&(i=Nu(i)),i}function Yu(r,t,e,i){let{top:o,left:a,bottom:n,right:s,chart:V}=r,{chartArea:c,scales:p}=V,h=0,v,g,y,O=n-o,k=s-a;if(r.isHorizontal()){if(g=y8(i,a,s),S1(e)){let T=Object.keys(e)[0],F=e[T];y=p[T].getPixelForValue(F)+O-t}else e==="center"?y=(c.bottom+c.top)/2+O-t:y=Zn(r,e,t);v=s-a}else{if(S1(e)){let T=Object.keys(e)[0],F=e[T];g=p[T].getPixelForValue(F)-k+t}else e==="center"?g=(c.left+c.right)/2-k+t:g=Zn(r,e,t);y=y8(i,n,o),h=e==="left"?-h2:h2}return{titleX:g,titleY:y,maxWidth:v,rotation:h}}var C7=class r extends X5{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:o}=this;return t=e5(t,Number.POSITIVE_INFINITY),e=e5(e,Number.NEGATIVE_INFINITY),i=e5(i,Number.POSITIVE_INFINITY),o=e5(o,Number.NEGATIVE_INFINITY),{min:e5(t,i),max:e5(e,o),minDefined:H2(t),maxDefined:H2(e)}}getMinMax(t){let{min:e,max:i,minDefined:o,maxDefined:a}=this.getUserBounds(),n;if(o&&a)return{min:e,max:i};let s=this.getMatchingVisibleMetas();for(let V=0,c=s.length;V<c;++V)n=s[V].controller.getMinMax(this,t),o||(e=Math.min(e,n.min)),a||(i=Math.max(i,n.max));return e=a&&e>i?i:e,i=o&&e>i?e:i,{min:e5(e,e5(i,e)),max:e5(i,e5(e,i))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){e2(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:o,grace:a,ticks:n}=this.options,s=n.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Hr(this,a,o),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let V=s<this.ticks.length;this._convertTicksToLabels(V?On(this.ticks,s):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),n.display&&(n.autoSkip||n.source==="auto")&&(this.ticks=$u(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),V&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,i;this.isHorizontal()?(e=this.left,i=this.right):(e=this.top,i=this.bottom,t=!t),this._startPixel=e,this._endPixel=i,this._reversePixels=t,this._length=i-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){e2(this.options.afterUpdate,[this])}beforeSetDimensions(){e2(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){e2(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),e2(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){e2(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e=this.options.ticks,i,o,a;for(i=0,o=t.length;i<o;i++)a=t[i],a.label=e2(e.callback,[a.value,i,t],this)}afterTickToLabelConversion(){e2(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){e2(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t=this.options,e=t.ticks,i=kn(this.ticks.length,t.ticks.maxTicksLimit),o=e.minRotation||0,a=e.maxRotation,n=o,s,V,c;if(!this._isVisible()||!e.display||o>=a||i<=1||!this.isHorizontal()){this.labelRotation=o;return}let p=this._getLabelSizes(),h=p.widest.width,v=p.highest.height,g=T2(this.chart.width-h,0,this.maxWidth);s=t.offset?this.maxWidth/i:g/(i-1),h+6>s&&(s=g/(i-(t.offset?.5:1)),V=this.maxHeight-m9(t.grid)-e.padding-Tn(t.title,this.chart.options.font),c=Math.sqrt(h*h+v*v),n=r9(Math.min(Math.asin(T2((p.highest.height+6)/s,-1,1)),Math.asin(T2(V/c,-1,1))-Math.asin(T2(v/c,-1,1)))),n=Math.max(o,Math.min(a,n))),this.labelRotation=n}afterCalculateLabelRotation(){e2(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){e2(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:o,grid:a}}=this,n=this._isVisible(),s=this.isHorizontal();if(n){let V=Tn(o,e.options.font);if(s?(t.width=this.maxWidth,t.height=m9(a)+V):(t.height=this.maxHeight,t.width=m9(a)+V),i.display&&this.ticks.length){let{first:c,last:p,widest:h,highest:v}=this._getLabelSizes(),g=i.padding*2,y=u0(this.labelRotation),O=Math.cos(y),k=Math.sin(y);if(s){let T=i.mirror?0:k*h.width+O*v.height;t.height=Math.min(this.maxHeight,t.height+T+g)}else{let T=i.mirror?0:O*h.width+k*v.height;t.width=Math.min(this.maxWidth,t.width+T+g)}this._calculatePadding(c,p,k,O)}}this._handleMargins(),s?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,o){let{ticks:{align:a,padding:n},position:s}=this.options,V=this.labelRotation!==0,c=s!=="top"&&this.axis==="x";if(this.isHorizontal()){let p=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),v=0,g=0;V?c?(v=o*t.width,g=i*e.height):(v=i*t.height,g=o*e.width):a==="start"?g=e.width:a==="end"?v=t.width:a!=="inner"&&(v=t.width/2,g=e.width/2),this.paddingLeft=Math.max((v-p+n)*this.width/(this.width-p),0),this.paddingRight=Math.max((g-h+n)*this.width/(this.width-h),0)}else{let p=e.height/2,h=t.height/2;a==="start"?(p=0,h=t.height):a==="end"&&(p=e.height,h=0),this.paddingTop=p+n,this.paddingBottom=h+n}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){e2(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,i;for(e=0,i=t.length;e<i;e++)b1(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=On(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,i){let{ctx:o,_longestTextCache:a}=this,n=[],s=[],V=Math.floor(e/kn(e,i)),c=0,p=0,h,v,g,y,O,k,T,F,R,K,G;for(h=0;h<e;h+=V){if(y=t[h].label,O=this._resolveTickFontOptions(h),o.font=k=O.string,T=a[k]=a[k]||{data:{},gc:[]},F=O.lineHeight,R=K=0,!b1(y)&&!i2(y))R=q7(o,T.data,T.gc,R,y),K=F;else if(i2(y))for(v=0,g=y.length;v<g;++v)G=y[v],!b1(G)&&!i2(G)&&(R=q7(o,T.data,T.gc,R,G),K+=F);n.push(R),s.push(K),c=Math.max(R,c),p=Math.max(K,p)}Uu(a,e);let L1=n.indexOf(c),X=s.indexOf(p),e1=o1=>({width:n[o1]||0,height:s[o1]||0});return{first:e1(0),last:e1(e-1),widest:e1(L1),highest:e1(X),widths:n,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return Qe(this._alignToPixels?R0(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){let e=this.ticks||[];if(t>=0&&t<e.length){let i=e[t];return i.$context||(i.$context=Gu(this.getContext(),t,i))}return this.$context||(this.$context=ju(this.chart.getContext(),this))}_tickSize(){let t=this.options.ticks,e=u0(this.labelRotation),i=Math.abs(Math.cos(e)),o=Math.abs(Math.sin(e)),a=this._getLabelSizes(),n=t.autoSkipPadding||0,s=a?a.widest.width+n:0,V=a?a.highest.height+n:0;return this.isHorizontal()?V*i>s*o?s/i:V/o:V*o<s*i?V/i:s/o}_isVisible(){let t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e=this.axis,i=this.chart,o=this.options,{grid:a,position:n,border:s}=o,V=a.offset,c=this.isHorizontal(),h=this.ticks.length+(V?1:0),v=m9(a),g=[],y=s.setContext(this.getContext()),O=y.display?y.width:0,k=O/2,T=function(J){return R0(i,J,O)},F,R,K,G,L1,X,e1,o1,m1,W1,y1,L2;if(n==="top")F=T(this.bottom),X=this.bottom-v,o1=F-k,W1=T(t.top)+k,L2=t.bottom;else if(n==="bottom")F=T(this.top),W1=t.top,L2=T(t.bottom)-k,X=F+k,o1=this.top+v;else if(n==="left")F=T(this.right),L1=this.right-v,e1=F-k,m1=T(t.left)+k,y1=t.right;else if(n==="right")F=T(this.left),m1=t.left,y1=T(t.right)-k,L1=F+k,e1=this.left+v;else if(e==="x"){if(n==="center")F=T((t.top+t.bottom)/2+.5);else if(S1(n)){let J=Object.keys(n)[0],Q1=n[J];F=T(this.chart.scales[J].getPixelForValue(Q1))}W1=t.top,L2=t.bottom,X=F+k,o1=X+v}else if(e==="y"){if(n==="center")F=T((t.left+t.right)/2);else if(S1(n)){let J=Object.keys(n)[0],Q1=n[J];F=T(this.chart.scales[J].getPixelForValue(Q1))}L1=F-k,e1=L1-v,m1=t.left,y1=t.right}let Y1=P1(o.ticks.maxTicksLimit,h),Z1=Math.max(1,Math.ceil(h/Y1));for(R=0;R<h;R+=Z1){let J=this.getContext(R),Q1=a.setContext(J),n1=s.setContext(J),U=Q1.lineWidth,r1=Q1.color,H1=n1.dash||[],h1=n1.dashOffset,s1=Q1.tickWidth,V1=Q1.tickColor,g1=Q1.tickBorderDash||[],k1=Q1.tickBorderDashOffset;K=Wu(this,R,V),K!==void 0&&(G=R0(i,K,U),c?L1=e1=m1=y1=G:X=o1=W1=L2=G,g.push({tx1:L1,ty1:X,tx2:e1,ty2:o1,x1:m1,y1:W1,x2:y1,y2:L2,width:U,color:r1,borderDash:H1,borderDashOffset:h1,tickWidth:s1,tickColor:V1,tickBorderDash:g1,tickBorderDashOffset:k1}))}return this._ticksLength=h,this._borderValue=F,g}_computeLabelItems(t){let e=this.axis,i=this.options,{position:o,ticks:a}=i,n=this.isHorizontal(),s=this.ticks,{align:V,crossAlign:c,padding:p,mirror:h}=a,v=m9(i.grid),g=v+p,y=h?-p:g,O=-u0(this.labelRotation),k=[],T,F,R,K,G,L1,X,e1,o1,m1,W1,y1,L2="middle";if(o==="top")L1=this.bottom-y,X=this._getXAxisLabelAlignment();else if(o==="bottom")L1=this.top+y,X=this._getXAxisLabelAlignment();else if(o==="left"){let Z1=this._getYAxisLabelAlignment(v);X=Z1.textAlign,G=Z1.x}else if(o==="right"){let Z1=this._getYAxisLabelAlignment(v);X=Z1.textAlign,G=Z1.x}else if(e==="x"){if(o==="center")L1=(t.top+t.bottom)/2+g;else if(S1(o)){let Z1=Object.keys(o)[0],J=o[Z1];L1=this.chart.scales[Z1].getPixelForValue(J)+g}X=this._getXAxisLabelAlignment()}else if(e==="y"){if(o==="center")G=(t.left+t.right)/2-g;else if(S1(o)){let Z1=Object.keys(o)[0],J=o[Z1];G=this.chart.scales[Z1].getPixelForValue(J)}X=this._getYAxisLabelAlignment(v).textAlign}e==="y"&&(V==="start"?L2="top":V==="end"&&(L2="bottom"));let Y1=this._getLabelSizes();for(T=0,F=s.length;T<F;++T){R=s[T],K=R.label;let Z1=a.setContext(this.getContext(T));e1=this.getPixelForTick(T)+a.labelOffset,o1=this._resolveTickFontOptions(T),m1=o1.lineHeight,W1=i2(K)?K.length:1;let J=W1/2,Q1=Z1.color,n1=Z1.textStrokeColor,U=Z1.textStrokeWidth,r1=X;n?(G=e1,X==="inner"&&(T===F-1?r1=this.options.reverse?"left":"right":T===0?r1=this.options.reverse?"right":"left":r1="center"),o==="top"?c==="near"||O!==0?y1=-W1*m1+m1/2:c==="center"?y1=-Y1.highest.height/2-J*m1+m1:y1=-Y1.highest.height+m1/2:c==="near"||O!==0?y1=m1/2:c==="center"?y1=Y1.highest.height/2-J*m1:y1=Y1.highest.height-W1*m1,h&&(y1*=-1),O!==0&&!Z1.showLabelBackdrop&&(G+=m1/2*Math.sin(O))):(L1=e1,y1=(1-W1)*m1/2);let H1;if(Z1.showLabelBackdrop){let h1=j2(Z1.backdropPadding),s1=Y1.heights[T],V1=Y1.widths[T],g1=y1-h1.top,k1=0-h1.left;switch(L2){case"middle":g1-=s1/2;break;case"bottom":g1-=s1;break}switch(X){case"center":k1-=V1/2;break;case"right":k1-=V1;break;case"inner":T===F-1?k1-=V1:T>0&&(k1-=V1/2);break}H1={left:k1,top:g1,width:V1+h1.width,height:s1+h1.height,color:Z1.backdropColor}}k.push({label:K,font:o1,textOffset:y1,options:{rotation:O,color:Q1,strokeColor:n1,strokeWidth:U,textAlign:r1,textBaseline:L2,translation:[G,L1],backdrop:H1}})}return k}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options;if(-u0(this.labelRotation))return t==="top"?"left":"right";let o="center";return e.align==="start"?o="left":e.align==="end"?o="right":e.align==="inner"&&(o="inner"),o}_getYAxisLabelAlignment(t){let{position:e,ticks:{crossAlign:i,mirror:o,padding:a}}=this.options,n=this._getLabelSizes(),s=t+a,V=n.widest.width,c,p;return e==="left"?o?(p=this.right+a,i==="near"?c="left":i==="center"?(c="center",p+=V/2):(c="right",p+=V)):(p=this.right-s,i==="near"?c="right":i==="center"?(c="center",p-=V/2):(c="left",p=this.left)):e==="right"?o?(p=this.left+a,i==="near"?c="right":i==="center"?(c="center",p-=V/2):(c="left",p-=V)):(p=this.left+s,i==="near"?c="left":i==="center"?(c="center",p+=V/2):(c="right",p=this.right)):c="right",{textAlign:c,x:p}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:o,width:a,height:n}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,o,a,n),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let o=this.ticks.findIndex(a=>a.value===t);return o>=0?e.setContext(this.getContext(o)).lineWidth:0}drawGrid(t){let e=this.options.grid,i=this.ctx,o=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a,n,s=(V,c,p)=>{!p.width||!p.color||(i.save(),i.lineWidth=p.width,i.strokeStyle=p.color,i.setLineDash(p.borderDash||[]),i.lineDashOffset=p.borderDashOffset,i.beginPath(),i.moveTo(V.x,V.y),i.lineTo(c.x,c.y),i.stroke(),i.restore())};if(e.display)for(a=0,n=o.length;a<n;++a){let V=o[a];e.drawOnChartArea&&s({x:V.x1,y:V.y1},{x:V.x2,y:V.y2},V),e.drawTicks&&s({x:V.tx1,y:V.ty1},{x:V.tx2,y:V.ty2},{color:V.tickColor,width:V.tickWidth,borderDash:V.tickBorderDash,borderDashOffset:V.tickBorderDashOffset})}}drawBorder(){let{chart:t,ctx:e,options:{border:i,grid:o}}=this,a=i.setContext(this.getContext()),n=i.display?a.width:0;if(!n)return;let s=o.setContext(this.getContext(0)).lineWidth,V=this._borderValue,c,p,h,v;this.isHorizontal()?(c=R0(t,this.left,n)-n/2,p=R0(t,this.right,s)+s/2,h=v=V):(h=R0(t,this.top,n)-n/2,v=R0(t,this.bottom,s)+s/2,c=p=V),e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.beginPath(),e.moveTo(c,h),e.lineTo(p,v),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;let i=this.ctx,o=this._computeLabelArea();o&&H9(i,o);let a=this.getLabelItems(t);for(let n of a){let s=n.options,V=n.font,c=n.label,p=n.textOffset;K7(i,c,0,p,V,s)}o&&s9(i)}drawTitle(){let{ctx:t,options:{position:e,title:i,reverse:o}}=this;if(!i.display)return;let a=z2(i.font),n=j2(i.padding),s=i.align,V=a.lineHeight/2;e==="bottom"||e==="center"||S1(e)?(V+=n.bottom,i2(i.text)&&(V+=a.lineHeight*(i.text.length-1))):V+=n.top;let{titleX:c,titleY:p,maxWidth:h,rotation:v}=Yu(this,V,e,s);K7(t,i.text,0,0,a,{color:i.color,maxWidth:h,rotation:v,textAlign:qu(s,e,o),textBaseline:"middle",translation:[c,p]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=P1(t.grid&&t.grid.z,-1),o=P1(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==r.prototype.draw?[{z:e,draw:a=>{this.draw(a)}}]:[{z:i,draw:a=>{this.drawBackground(),this.drawGrid(a),this.drawTitle()}},{z:o,draw:()=>{this.drawBorder()}},{z:e,draw:a=>{this.drawLabels(a)}}]}getMatchingVisibleMetas(t){let e=this.chart.getSortedVisibleDatasetMetas(),i=this.axis+"AxisID",o=[],a,n;for(a=0,n=e.length;a<n;++a){let s=e[a];s[i]===this.id&&(!t||s.type===t)&&o.push(s)}return o}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return z2(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}},e4=class{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e=Object.getPrototypeOf(t),i;Xu(e)&&(i=this.register(e));let o=this.items,a=t.id,n=this.scope+"."+a;if(!a)throw new Error("class does not have id: "+t);return a in o||(o[a]=t,Qu(t,n,i),this.override&&s2.override(t.id,t.overrides)),n}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,o=this.scope;i in e&&delete e[i],o&&i in s2[o]&&(delete s2[o][i],this.override&&delete c3[i])}};function Qu(r,t,e){let i=h5(Object.create(null),[e?s2.get(e):{},s2.get(t),r.defaults]);s2.set(t,i),r.defaultRoutes&&Ku(t,r.defaultRoutes),r.descriptors&&s2.describe(t,r.descriptors)}function Ku(r,t){Object.keys(t).forEach(e=>{let i=e.split("."),o=i.pop(),a=[r].concat(i).join("."),n=t[e].split("."),s=n.pop(),V=n.join(".");s2.route(a,o,V,s)})}function Xu(r){return"id"in r&&"defaults"in r}var Er=class{constructor(){this.controllers=new e4(p3,"datasets",!0),this.elements=new e4(X5,"elements"),this.plugins=new e4(Object,"plugins"),this.scales=new e4(C7,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(o=>{let a=i||this._getRegistryForType(o);i||a.isForType(o)||a===this.plugins&&o.id?this._exec(t,a,o):N1(o,n=>{let s=i||this._getRegistryForType(n);this._exec(t,s,n)})})}_exec(t,e,i){let o=e9(t);e2(i["before"+o],[],i),e[t](i),e2(i["after"+o],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let o=e.get(t);if(o===void 0)throw new Error('"'+t+'" is not a registered '+i+".");return o}},f0=new Er,Fr=class{constructor(){this._init=void 0}notify(t,e,i,o){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;let a=o?this._descriptors(t).filter(o):this._descriptors(t),n=this._notify(a,t,e,i);return e==="afterDestroy"&&(this._notify(a,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),n}_notify(t,e,i,o){o=o||{};for(let a of t){let n=a.plugin,s=n[i],V=[e,o,a.options];if(e2(s,V,n)===!1&&o.cancelable)return!1}return!0}invalidate(){b1(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,o=P1(i.options&&i.options.plugins,{}),a=Ju(i);return o===!1&&!e?[]:em(t,a,o,e)}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,o=(a,n)=>a.filter(s=>!n.some(V=>s.plugin.id===V.plugin.id));this._notify(o(e,i),t,"stop"),this._notify(o(i,e),t,"start")}};function Ju(r){let t={},e=[],i=Object.keys(f0.plugins.items);for(let a=0;a<i.length;a++)e.push(f0.getPlugin(i[a]));let o=r.plugins||[];for(let a=0;a<o.length;a++){let n=o[a];e.indexOf(n)===-1&&(e.push(n),t[n.id]=!0)}return{plugins:e,localIds:t}}function tm(r,t){return!t&&r===!1?null:r===!0?{}:r}function em(r,{plugins:t,localIds:e},i,o){let a=[],n=r.getContext();for(let s of t){let V=s.id,c=tm(i[V],o);c!==null&&a.push({plugin:s,options:rm(r.config,{plugin:s,local:e[V]},c,n)})}return a}function rm(r,{plugin:t,local:e},i,o){let a=r.pluginScopeKeys(t),n=r.getOptionScopes(i,a);return e&&t.defaults&&n.push(t.defaults),r.createResolver(n,o,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function $r(r,t){let e=s2.datasets[r]||{};return((t.datasets||{})[r]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function im(r,t){let e=r;return r==="_index_"?e=t:r==="_value_"&&(e=t==="x"?"y":"x"),e}function om(r,t){return r===t?"_index_":"_value_"}function Pn(r){if(r==="x"||r==="y"||r==="r")return r}function Cm(r){if(r==="top"||r==="bottom")return"x";if(r==="left"||r==="right")return"y"}function Rr(r,...t){if(Pn(r))return r;for(let e of t){let i=e.axis||Cm(e.position)||r.length>1&&Pn(r[0].toLowerCase());if(i)return i}throw new Error(`Cannot determine type of '${r}' axis. Please provide 'axis' or 'position' option.`)}function En(r,t,e){if(e[t+"AxisID"]===r)return{axis:t}}function am(r,t){if(t.data&&t.data.datasets){let e=t.data.datasets.filter(i=>i.xAxisID===r||i.yAxisID===r);if(e.length)return En(r,"x",e[0])||En(r,"y",e[0])}return{}}function nm(r,t){let e=c3[r.type]||{scales:{}},i=t.scales||{},o=$r(r.type,t),a=Object.create(null);return Object.keys(i).forEach(n=>{let s=i[n];if(!S1(s))return console.error(`Invalid scale configuration for scale: ${n}`);if(s._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${n}`);let V=Rr(n,s,am(n,r),s2.scales[s.type]),c=om(V,o),p=e.scales||{};a[n]=X3(Object.create(null),[{axis:V},s,p[V],p[c]])}),r.data.datasets.forEach(n=>{let s=n.type||r.type,V=n.indexAxis||$r(s,t),p=(c3[s]||{}).scales||{};Object.keys(p).forEach(h=>{let v=im(h,V),g=n[v+"AxisID"]||v;a[g]=a[g]||Object.create(null),X3(a[g],[{axis:v},i[g],p[h]])})}),Object.keys(a).forEach(n=>{let s=a[n];X3(s,[s2.scales[s.type],s2.scale])}),a}function pH(r){let t=r.options||(r.options={});t.plugins=P1(t.plugins,{}),t.scales=nm(r,t)}function uH(r){return r=r||{},r.datasets=r.datasets||[],r.labels=r.labels||[],r}function Hm(r){return r=r||{},r.data=uH(r.data),pH(r),r}var Fn=new Map,mH=new Set;function U8(r,t){let e=Fn.get(r);return e||(e=t(),Fn.set(r,e),mH.add(e)),e}var h9=(r,t,e)=>{let i=l3(t,e);i!==void 0&&r.add(i)},Dr=class{constructor(t){this._config=Hm(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=uH(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),pH(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return U8(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return U8(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return U8(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return U8(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,o=i.get(t);return(!o||e)&&(o=new Map,i.set(t,o)),o}getOptionScopes(t,e,i){let{options:o,type:a}=this,n=this._cachedScopes(t,i),s=n.get(e);if(s)return s;let V=new Set;e.forEach(p=>{t&&(V.add(t),p.forEach(h=>h9(V,t,h))),p.forEach(h=>h9(V,o,h)),p.forEach(h=>h9(V,c3[a]||{},h)),p.forEach(h=>h9(V,s2,h)),p.forEach(h=>h9(V,O8,h))});let c=Array.from(V);return c.length===0&&c.push(Object.create(null)),mH.has(e)&&n.set(e,c),c}chartOptionScopes(){let{options:t,type:e}=this;return[t,c3[e]||{},s2.datasets[e]||{},{type:e},s2,O8]}resolveNamedOptions(t,e,i,o=[""]){let a={$shared:!0},{resolver:n,subPrefixes:s}=$n(this._resolverCache,t,o),V=n;if(Vm(n,e)){a.$shared=!1,i=d0(i)?i():i;let c=this.createResolver(t,i,s);V=L3(n,i,c)}for(let c of e)a[c]=V[c];return a}createResolver(t,e,i=[""],o){let{resolver:a}=$n(this._resolverCache,t,i);return S1(e)?L3(a,e,void 0,o):a}};function $n(r,t,e){let i=r.get(t);i||(i=new Map,r.set(t,i));let o=e.join(),a=i.get(o);return a||(a={resolver:L9(t,e),subPrefixes:e.filter(s=>!s.toLowerCase().includes("hover"))},i.set(o,a)),a}var sm=r=>S1(r)&&Object.getOwnPropertyNames(r).some(t=>d0(r[t]));function Vm(r,t){let{isScriptable:e,isIndexable:i}=E8(r);for(let o of t){let a=e(o),n=i(o),s=(n||a)&&r[o];if(a&&(d0(s)||sm(s))||n&&i2(s))return!0}return!1}var Lm="4.5.1",lm=["top","bottom","left","right","chartArea"];function Rn(r,t){return r==="top"||r==="bottom"||lm.indexOf(r)===-1&&t==="x"}function Dn(r,t){return function(e,i){return e[r]===i[r]?e[t]-i[t]:e[r]-i[r]}}function Bn(r){let t=r.chart,e=t.options.animation;t.notifyPlugins("afterRender"),e2(e&&e.onComplete,[r],t)}function cm(r){let t=r.chart,e=t.options.animation;e2(e&&e.onProgress,[r],t)}function hH(r){return l9()&&typeof r=="string"?r=document.getElementById(r):r&&r.length&&(r=r[0]),r&&r.canvas&&(r=r.canvas),r}var K8={},zn=r=>{let t=hH(r);return Object.values(K8).filter(e=>e.canvas===t).pop()};function Mm(r,t,e){let i=Object.keys(r);for(let o of i){let a=+o;if(a>=t){let n=r[o];delete r[o],(e>0||a>t)&&(r[a+e]=n)}}}function dm(r,t,e,i){return!e||r.type==="mouseout"?null:i?t:r}var P2=class{static register(...t){f0.add(...t),In()}static unregister(...t){f0.remove(...t),In()}constructor(t,e){let i=this.config=new Dr(e),o=hH(t),a=zn(o);if(a)throw new Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let n=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Fu(o)),this.platform.updateConfig(i);let s=this.platform.acquireContext(o,n.aspectRatio),V=s&&s.canvas,c=V&&V.height,p=V&&V.width;if(this.id=Ue(),this.ctx=s,this.canvas=V,this.width=p,this.height=c,this._options=n,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new Fr,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=tr(h=>this.update(h),n.resizeDelay||0),this._dataChanges=[],K8[this.id]=this,!s||!V){console.error("Failed to create chart: can't acquire context from the given item");return}D0.listen(this,"complete",Bn),D0.listen(this,"progress",cm),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:o,_aspectRatio:a}=this;return b1(t)?e&&a?a:o?i/o:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return f0}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():$8(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return T8(this.canvas,this.ctx),this}stop(){return D0.stop(this),this}resize(t,e){D0.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,o=this.canvas,a=i.maintainAspectRatio&&this.aspectRatio,n=this.platform.getMaximumSize(o,t,e,a),s=i.devicePixelRatio||this.platform.getDevicePixelRatio(),V=this.width?"resize":"attach";this.width=n.width,this.height=n.height,this._aspectRatio=this.aspectRatio,$8(this,s,!0)&&(this.notifyPlugins("resize",{size:n}),e2(i.onResize,[this,n],this),this.attached&&this._doResize(V)&&this.render())}ensureScalesHaveIDs(){let e=this.options.scales||{};N1(e,(i,o)=>{i.id=o})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,o=Object.keys(i).reduce((n,s)=>(n[s]=!1,n),{}),a=[];e&&(a=a.concat(Object.keys(e).map(n=>{let s=e[n],V=Rr(n,s),c=V==="r",p=V==="x";return{options:s,dposition:c?"chartArea":p?"bottom":"left",dtype:c?"radialLinear":p?"category":"linear"}}))),N1(a,n=>{let s=n.options,V=s.id,c=Rr(V,s),p=P1(s.type,n.dtype);(s.position===void 0||Rn(s.position,c)!==Rn(n.dposition))&&(s.position=n.dposition),o[V]=!0;let h=null;if(V in i&&i[V].type===p)h=i[V];else{let v=f0.getScale(p);h=new v({id:V,type:p,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(s,t)}),N1(o,(n,s)=>{n||delete i[s]}),N1(i,n=>{N8.configure(this,n,n.options),N8.addBox(this,n)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((o,a)=>o.index-a.index),i>e){for(let o=e;o<i;++o)this._destroyDatasetMeta(o);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(Dn("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((i,o)=>{e.filter(a=>a===i._dataset).length===0&&this._destroyDatasetMeta(o)})}buildOrUpdateControllers(){let t=[],e=this.data.datasets,i,o;for(this._removeUnreferencedMetasets(),i=0,o=e.length;i<o;i++){let a=e[i],n=this.getDatasetMeta(i),s=a.type||this.config.type;if(n.type&&n.type!==s&&(this._destroyDatasetMeta(i),n=this.getDatasetMeta(i)),n.type=s,n.indexAxis=a.indexAxis||$r(s,this.options),n.order=a.order||0,n.index=i,n.label=""+a.label,n.visible=this.isDatasetVisible(i),n.controller)n.controller.updateIndex(i),n.controller.linkScales();else{let V=f0.getController(s),{datasetElementType:c,dataElementType:p}=s2.datasets[s];Object.assign(V,{dataElementType:f0.getElement(p),datasetElementType:c&&f0.getElement(c)}),n.controller=new V(this,i),t.push(n.controller)}}return this._updateMetasets(),t}_resetElements(){N1(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),o=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;let a=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let n=0;for(let c=0,p=this.data.datasets.length;c<p;c++){let{controller:h}=this.getDatasetMeta(c),v=!o&&a.indexOf(h)===-1;h.buildOrUpdateElements(v),n=Math.max(+h.getMaxOverflow(),n)}n=this._minPadding=i.layout.autoPadding?n:0,this._updateLayout(n),o||N1(a,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Dn("z","_idx"));let{_active:s,_lastEvent:V}=this;V?this._eventHandler(V,!0):s.length&&this._updateHoverStyles(s,s,!0),this.render()}_updateScales(){N1(this.scales,t=>{N8.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(!f8(e,i)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:o,count:a}of e){let n=i==="_removeElements"?-a:a;Mm(t,o,n)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=a=>new Set(t.filter(n=>n[0]===a).map((n,s)=>s+","+n.splice(1).join(","))),o=i(0);for(let a=1;a<e;a++)if(!f8(o,i(a)))return;return Array.from(o).map(a=>a.split(",")).map(a=>({method:a[1],start:+a[2],count:+a[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;N8.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],N1(this.boxes,o=>{i&&o.position==="chartArea"||(o.configure&&o.configure(),this._layers.push(...o._layers()))},this),this._layers.forEach((o,a)=>{o._idx=a}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,i=this.data.datasets.length;e<i;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,d0(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),o={meta:i,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",o)!==!1&&(i.controller._update(e),o.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",o))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(D0.has(this)?this.attached&&!D0.running(this)&&D0.start(this):(this.draw(),Bn({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:i,height:o}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,o)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e=this._sortedMetasets,i=[],o,a;for(o=0,a=e.length;o<a;++o){let n=e[o];(!t||n.visible)&&i.push(n)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i={meta:t,index:t.index,cancelable:!0},o=z8(this,t);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(o&&H9(e,o),t.controller.draw(),o&&s9(e),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(t){return G5(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,o){let a=uu.modes[e];return typeof a=="function"?a(this,t,i,o):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,o=i.filter(a=>a&&a._dataset===e).pop();return o||(o={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(o)),o}getContext(){return this.$context||(this.$context=m0(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return typeof i.hidden=="boolean"?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let o=i?"show":"hide",a=this.getDatasetMeta(t),n=a.controller._resolveAnimations(void 0,o);J3(e)?(a.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),n.update(a,{visible:i}),this.update(s=>s.datasetIndex===t?o:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),D0.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),T8(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete K8[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(a,n)=>{e.addEventListener(this,a,n),t[a]=n},o=(a,n,s)=>{a.offsetX=n,a.offsetY=s,this._eventHandler(a)};N1(this.options.events,a=>i(a,o))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});let t=this._responsiveListeners,e=this.platform,i=(V,c)=>{e.addEventListener(this,V,c),t[V]=c},o=(V,c)=>{t[V]&&(e.removeEventListener(this,V,c),delete t[V])},a=(V,c)=>{this.canvas&&this.resize(V,c)},n,s=()=>{o("attach",s),this.attached=!0,this.resize(),i("resize",a),i("detach",n)};n=()=>{this.attached=!1,o("resize",a),this._stop(),this._resize(0,0),i("attach",s)},e.isAttached(this.canvas)?s():n()}unbindEvents(){N1(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},N1(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let o=i?"set":"remove",a,n,s,V;for(e==="dataset"&&(a=this.getDatasetMeta(t[0].datasetIndex),a.controller["_"+o+"DatasetHoverStyle"]()),s=0,V=t.length;s<V;++s){n=t[s];let c=n&&this.getDatasetMeta(n.datasetIndex).controller;c&&c[o+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:a,index:n})=>{let s=this.getDatasetMeta(a);if(!s)throw new Error("No dataset found at index "+a);return{datasetIndex:a,element:s.data[n],index:n}});!Q7(i,e)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,i){let o=this.options.hover,a=(V,c)=>V.filter(p=>!c.some(h=>p.datasetIndex===h.datasetIndex&&p.index===h.index)),n=a(e,t),s=i?t:a(t,e);n.length&&this.updateHoverStyle(n,o.mode,!1),s.length&&o.mode&&this.updateHoverStyle(s,o.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},o=n=>(n.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",i,o)===!1)return;let a=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,o),(a||i.changed)&&this.render(),this}_handleEvent(t,e,i){let{_active:o=[],options:a}=this,n=e,s=this._getActiveElements(t,o,i,n),V=Ge(t),c=dm(t,this._lastEvent,i,V);i&&(this._lastEvent=null,e2(a.onHover,[t,s,this],this),V&&e2(a.onClick,[t,s,this],this));let p=!Q7(s,o);return(p||e)&&(this._active=s,this._updateHoverStyles(s,o,e)),this._lastEvent=c,p}_getActiveElements(t,e,i,o){if(t.type==="mouseout")return[];if(!i)return e;let a=this.options.hover;return this.getElementsAtEventForMode(t,a.mode,a,o)}};z(P2,"defaults",s2),z(P2,"instances",K8),z(P2,"overrides",c3),z(P2,"registry",f0),z(P2,"version",Lm),z(P2,"getChart",zn);function In(){return N1(P2.instances,r=>r._plugins.invalidate())}function pm(r,t,e){let{startAngle:i,x:o,y:a,outerRadius:n,innerRadius:s,options:V}=t,{borderWidth:c,borderJoinStyle:p}=V,h=Math.min(c/n,O2(i-e));if(r.beginPath(),r.arc(o,a,n-c/2,i+h/2,e-h/2),s>0){let v=Math.min(c/s,O2(i-e));r.arc(o,a,s+c/2,e-v/2,i+v/2,!0)}else{let v=Math.min(c/2,n*O2(i-e));if(p==="round")r.arc(o,a,v,e-J1/2,i+J1/2,!0);else if(p==="bevel"){let g=2*v*v,y=-g*Math.cos(e+J1/2)+o,O=-g*Math.sin(e+J1/2)+a,k=g*Math.cos(i+J1/2)+o,T=g*Math.sin(i+J1/2)+a;r.lineTo(y,O),r.lineTo(k,T)}}r.closePath(),r.moveTo(0,0),r.rect(0,0,r.canvas.width,r.canvas.height),r.clip("evenodd")}function um(r,t,e){let{startAngle:i,pixelMargin:o,x:a,y:n,outerRadius:s,innerRadius:V}=t,c=o/s;r.beginPath(),r.arc(a,n,s,i-c,e+c),V>o?(c=o/V,r.arc(a,n,V,e+c,i-c,!0)):r.arc(a,n,o,e+h2,i-h2),r.closePath(),r.clip()}function mm(r){return V9(r,["outerStart","outerEnd","innerStart","innerEnd"])}function hm(r,t,e,i){let o=mm(r.options.borderRadius),a=(e-t)/2,n=Math.min(a,i*t/2),s=V=>{let c=(e-Math.min(a,V))*i/2;return T2(V,0,Math.min(a,c))};return{outerStart:s(o.outerStart),outerEnd:s(o.outerEnd),innerStart:T2(o.innerStart,0,n),innerEnd:T2(o.innerEnd,0,n)}}function J7(r,t,e,i){return{x:e+r*Math.cos(t),y:i+r*Math.sin(t)}}function et(r,t,e,i,o,a){let{x:n,y:s,startAngle:V,pixelMargin:c,innerRadius:p}=t,h=Math.max(t.outerRadius+i+e-c,0),v=p>0?p+i+e+c:0,g=0,y=o-V;if(i){let Z1=p>0?p-i:0,J=h>0?h-i:0,Q1=(Z1+J)/2,n1=Q1!==0?y*Q1/(Q1+i):y;g=(y-n1)/2}let O=Math.max(.001,y*h-e/J1)/h,k=(y-O)/2,T=V+k+g,F=o-k-g,{outerStart:R,outerEnd:K,innerStart:G,innerEnd:L1}=hm(t,v,h,F-T),X=h-R,e1=h-K,o1=T+R/X,m1=F-K/e1,W1=v+G,y1=v+L1,L2=T+G/W1,Y1=F-L1/y1;if(r.beginPath(),a){let Z1=(o1+m1)/2;if(r.arc(n,s,h,o1,Z1),r.arc(n,s,h,Z1,m1),K>0){let U=J7(e1,m1,n,s);r.arc(U.x,U.y,K,m1,F+h2)}let J=J7(y1,F,n,s);if(r.lineTo(J.x,J.y),L1>0){let U=J7(y1,Y1,n,s);r.arc(U.x,U.y,L1,F+h2,Y1+Math.PI)}let Q1=(F-L1/v+(T+G/v))/2;if(r.arc(n,s,v,F-L1/v,Q1,!0),r.arc(n,s,v,Q1,T+G/v,!0),G>0){let U=J7(W1,L2,n,s);r.arc(U.x,U.y,G,L2+Math.PI,T-h2)}let n1=J7(X,T,n,s);if(r.lineTo(n1.x,n1.y),R>0){let U=J7(X,o1,n,s);r.arc(U.x,U.y,R,T-h2,o1)}}else{r.moveTo(n,s);let Z1=Math.cos(o1)*h+n,J=Math.sin(o1)*h+s;r.lineTo(Z1,J);let Q1=Math.cos(m1)*h+n,n1=Math.sin(m1)*h+s;r.lineTo(Q1,n1)}r.closePath()}function fm(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:s}=t,V=t.endAngle;if(a){et(r,t,e,i,V,o);for(let c=0;c<a;++c)r.fill();isNaN(s)||(V=n+(s%d2||d2))}return et(r,t,e,i,V,o),r.fill(),V}function Am(r,t,e,i,o){let{fullCircles:a,startAngle:n,circumference:s,options:V}=t,{borderWidth:c,borderJoinStyle:p,borderDash:h,borderDashOffset:v,borderRadius:g}=V,y=V.borderAlign==="inner";if(!c)return;r.setLineDash(h||[]),r.lineDashOffset=v,y?(r.lineWidth=c*2,r.lineJoin=p||"round"):(r.lineWidth=c,r.lineJoin=p||"bevel");let O=t.endAngle;if(a){et(r,t,e,i,O,o);for(let k=0;k<a;++k)r.stroke();isNaN(s)||(O=n+(s%d2||d2))}y&&um(r,t,O),V.selfJoin&&O-n>=J1&&g===0&&p!=="miter"&&pm(r,t,O),a||(et(r,t,e,i,O,o),r.stroke())}var d3=class extends X5{constructor(e){super();z(this,"circumference");z(this,"endAngle");z(this,"fullCircles");z(this,"innerRadius");z(this,"outerRadius");z(this,"pixelMargin");z(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.getProps(["x","y"],o),{angle:n,distance:s}=g8(a,{x:e,y:i}),{startAngle:V,endAngle:c,innerRadius:p,outerRadius:h,circumference:v}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],o),g=(this.options.spacing+this.options.borderWidth)/2,y=P1(v,c-V),O=i9(n,V,c)&&V!==c,k=y>=d2||O,T=r7(s,p+g,h+g);return k&&T}getCenterPoint(e){let{x:i,y:o,startAngle:a,endAngle:n,innerRadius:s,outerRadius:V}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:p}=this.options,h=(a+n)/2,v=(s+V+p+c)/2;return{x:i+Math.cos(h)*v,y:o+Math.sin(h)*v}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:i,circumference:o}=this,a=(i.offset||0)/4,n=(i.spacing||0)/2,s=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=o>d2?Math.floor(o/d2):0,o===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let V=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(V)*a,Math.sin(V)*a);let c=1-Math.sin(Math.min(J1,o||0)),p=a*c;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,fm(e,this,p,n,s),Am(e,this,p,n,s),e.restore()}};z(d3,"id","arc"),z(d3,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),z(d3,"defaultRoutes",{backgroundColor:"backgroundColor"}),z(d3,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function fH(r,t,e=t){r.lineCap=P1(e.borderCapStyle,t.borderCapStyle),r.setLineDash(P1(e.borderDash,t.borderDash)),r.lineDashOffset=P1(e.borderDashOffset,t.borderDashOffset),r.lineJoin=P1(e.borderJoinStyle,t.borderJoinStyle),r.lineWidth=P1(e.borderWidth,t.borderWidth),r.strokeStyle=P1(e.borderColor,t.borderColor)}function vm(r,t,e){r.lineTo(e.x,e.y)}function xm(r){return r.stepped?ar:r.tension||r.cubicInterpolationMode==="monotone"?nr:vm}function AH(r,t,e={}){let i=r.length,{start:o=0,end:a=i-1}=e,{start:n,end:s}=t,V=Math.max(o,n),c=Math.min(a,s),p=o<n&&a<n||o>s&&a>s;return{count:i,start:V,loop:t.loop,ilen:c<V&&!p?i+c-V:c-V}}function gm(r,t,e,i){let{points:o,options:a}=t,{count:n,start:s,loop:V,ilen:c}=AH(o,e,i),p=xm(a),{move:h=!0,reverse:v}=i||{},g,y,O;for(g=0;g<=c;++g)y=o[(s+(v?c-g:g))%n],!y.skip&&(h?(r.moveTo(y.x,y.y),h=!1):p(r,O,y,v,a.stepped),O=y);return V&&(y=o[(s+(v?c:0))%n],p(r,O,y,v,a.stepped)),!!V}function _m(r,t,e,i){let o=t.points,{count:a,start:n,ilen:s}=AH(o,e,i),{move:V=!0,reverse:c}=i||{},p=0,h=0,v,g,y,O,k,T,F=K=>(n+(c?s-K:K))%a,R=()=>{O!==k&&(r.lineTo(p,k),r.lineTo(p,O),r.lineTo(p,T))};for(V&&(g=o[F(0)],r.moveTo(g.x,g.y)),v=0;v<=s;++v){if(g=o[F(v)],g.skip)continue;let K=g.x,G=g.y,L1=K|0;L1===y?(G<O?O=G:G>k&&(k=G),p=(h*p+K)/++h):(R(),r.lineTo(K,G),y=L1,h=0,O=k=G),T=G}R()}function Br(r){let t=r.options,e=t.borderDash&&t.borderDash.length;return!r._decimated&&!r._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?_m:gm}function bm(r){return r.stepped?Mr:r.tension||r.cubicInterpolationMode==="monotone"?dr:F0}function wm(r,t,e,i){let o=t._path;o||(o=t._path=new Path2D,t.path(o,e,i)&&o.closePath()),fH(r,t.options),r.stroke(o)}function Sm(r,t,e,i){let{segments:o,options:a}=t,n=Br(t);for(let s of o)fH(r,a,s.style),r.beginPath(),n(r,t,s,{start:e,end:e+i-1})&&r.closePath(),r.stroke()}var ym=typeof Path2D=="function";function Zm(r,t,e,i){ym&&!t.options.segment?wm(r,t,e,i):Sm(r,t,e,i)}var f5=class extends X5{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||i.cubicInterpolationMode==="monotone")&&!i.stepped&&!this._pointsUpdated){let o=i.spanGaps?this._loop:this._fullLoop;Lr(this._points,i,t,o,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=mr(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i=this.options,o=t[e],a=this.points,n=B8(this,{property:e,start:o,end:o});if(!n.length)return;let s=[],V=bm(i),c,p;for(c=0,p=n.length;c<p;++c){let{start:h,end:v}=n[c],g=a[h],y=a[v];if(g===y){s.push(g);continue}let O=Math.abs((o-g[e])/(y[e]-g[e])),k=V(g,y,O,i.stepped);k[e]=t[e],s.push(k)}return s.length===1?s[0]:s}pathSegment(t,e,i){return Br(this)(t,this,e,i)}path(t,e,i){let o=this.segments,a=Br(this),n=this._loop;e=e||0,i=i||this.points.length-e;for(let s of o)n&=a(t,this,s,{start:e,end:e+i-1});return!!n}draw(t,e,i,o){let a=this.options||{};(this.points||[]).length&&a.borderWidth&&(t.save(),Zm(t,this,i,o),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};z(f5,"id","line"),z(f5,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),z(f5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),z(f5,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Nn(r,t,e,i){let o=r.options,{[e]:a}=r.getProps([e],i);return Math.abs(t-a)<o.radius+o.hitRadius}var Q5=class extends X5{constructor(e){super();z(this,"parsed");z(this,"skip");z(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,i,o){let a=this.options,{x:n,y:s}=this.getProps(["x","y"],o);return Math.pow(e-n,2)+Math.pow(i-s,2)<Math.pow(a.hitRadius+a.radius,2)}inXRange(e,i){return Nn(this,e,"x",i)}inYRange(e,i){return Nn(this,e,"y",i)}getCenterPoint(e){let{x:i,y:o}=this.getProps(["x","y"],e);return{x:i,y:o}}size(e){e=e||this.options||{};let i=e.radius||0;i=Math.max(i,i&&e.hoverRadius||0);let o=i&&e.borderWidth||0;return(i+o)*2}draw(e,i){let o=this.options;this.skip||o.radius<.1||!G5(this,i,this.size(o)/2)||(e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.fillStyle=o.backgroundColor,n9(e,o,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};z(Q5,"id","point"),z(Q5,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),z(Q5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function vH(r,t){let{x:e,y:i,base:o,width:a,height:n}=r.getProps(["x","y","base","width","height"],t),s,V,c,p,h;return r.horizontal?(h=n/2,s=Math.min(e,o),V=Math.max(e,o),c=i-h,p=i+h):(h=a/2,s=e-h,V=e+h,c=Math.min(i,o),p=Math.max(i,o)),{left:s,top:c,right:V,bottom:p}}function u3(r,t,e,i){return r?0:T2(t,e,i)}function km(r,t,e){let i=r.options.borderWidth,o=r.borderSkipped,a=P8(i);return{t:u3(o.top,a.top,0,e),r:u3(o.right,a.right,0,t),b:u3(o.bottom,a.bottom,0,e),l:u3(o.left,a.left,0,t)}}function Om(r,t,e){let{enableBorderRadius:i}=r.getProps(["enableBorderRadius"]),o=r.options.borderRadius,a=M3(o),n=Math.min(t,e),s=r.borderSkipped,V=i||S1(o);return{topLeft:u3(!V||s.top||s.left,a.topLeft,0,n),topRight:u3(!V||s.top||s.right,a.topRight,0,n),bottomLeft:u3(!V||s.bottom||s.left,a.bottomLeft,0,n),bottomRight:u3(!V||s.bottom||s.right,a.bottomRight,0,n)}}function Tm(r){let t=vH(r),e=t.right-t.left,i=t.bottom-t.top,o=km(r,e/2,i/2),a=Om(r,e/2,i/2);return{outer:{x:t.left,y:t.top,w:e,h:i,radius:a},inner:{x:t.left+o.l,y:t.top+o.t,w:e-o.l-o.r,h:i-o.t-o.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(o.t,o.l)),topRight:Math.max(0,a.topRight-Math.max(o.t,o.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(o.b,o.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(o.b,o.r))}}}}function br(r,t,e,i){let o=t===null,a=e===null,s=r&&!(o&&a)&&vH(r,i);return s&&(o||r7(t,s.left,s.right))&&(a||r7(e,s.top,s.bottom))}function Pm(r){return r.topLeft||r.topRight||r.bottomLeft||r.bottomRight}function Em(r,t){r.rect(t.x,t.y,t.w,t.h)}function wr(r,t,e={}){let i=r.x!==e.x?-t:0,o=r.y!==e.y?-t:0,a=(r.x+r.w!==e.x+e.w?t:0)-i,n=(r.y+r.h!==e.y+e.h?t:0)-o;return{x:r.x+i,y:r.y+o,w:r.w+a,h:r.h+n,radius:r.radius}}var K5=class extends X5{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){let{inflateAmount:e,options:{borderColor:i,backgroundColor:o}}=this,{inner:a,outer:n}=Tm(this),s=Pm(n.radius)?X7:Em;t.save(),(n.w!==a.w||n.h!==a.h)&&(t.beginPath(),s(t,wr(n,e,a)),t.clip(),s(t,wr(a,-e,n)),t.fillStyle=i,t.fill("evenodd")),t.beginPath(),s(t,wr(a,e)),t.fillStyle=o,t.fill(),t.restore()}inRange(t,e,i){return br(this,t,e,i)}inXRange(t,e){return br(this,t,null,e)}inYRange(t,e){return br(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:o,horizontal:a}=this.getProps(["x","y","base","horizontal"],t);return{x:a?(e+o)/2:e,y:a?i:(i+o)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}};z(K5,"id","bar"),z(K5,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),z(K5,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Fm(r,t,e){let i=r.segments,o=r.points,a=t.points,n=[];for(let s of i){let{start:V,end:c}=s;c=it(V,c,o);let p=zr(e,o[V],o[c],s.loop);if(!t.segments){n.push({source:s,target:p,start:o[V],end:o[c]});continue}let h=B8(t,p);for(let v of h){let g=zr(e,a[v.start],a[v.end],v.loop),y=D8(s,o,g);for(let O of y)n.push({source:O,target:v,start:{[e]:Wn(p,g,"start",Math.max)},end:{[e]:Wn(p,g,"end",Math.min)}})}}return n}function zr(r,t,e,i){if(i)return;let o=t[r],a=e[r];return r==="angle"&&(o=O2(o),a=O2(a)),{property:r,start:o,end:a}}function $m(r,t){let{x:e=null,y:i=null}=r||{},o=t.points,a=[];return t.segments.forEach(({start:n,end:s})=>{s=it(n,s,o);let V=o[n],c=o[s];i!==null?(a.push({x:V.x,y:i}),a.push({x:c.x,y:i})):e!==null&&(a.push({x:e,y:V.y}),a.push({x:e,y:c.y}))}),a}function it(r,t,e){for(;t>r;t--){let i=e[t];if(!isNaN(i.x)&&!isNaN(i.y))break}return t}function Wn(r,t,e,i){return r&&t?i(r[e],t[e]):r?r[e]:t?t[e]:0}function xH(r,t){let e=[],i=!1;return i2(r)?(i=!0,e=r):e=$m(r,t),e.length?new f5({points:e,options:{tension:0},_loop:i,_fullLoop:i}):null}function Un(r){return r&&r.fill!==!1}function Rm(r,t,e){let o=r[t].fill,a=[t],n;if(!e)return o;for(;o!==!1&&a.indexOf(o)===-1;){if(!H2(o))return o;if(n=r[o],!n)return!1;if(n.visible)return o;a.push(o),o=n.fill}return!1}function Dm(r,t,e){let i=Nm(r);if(S1(i))return isNaN(i.value)?!1:i;let o=parseFloat(i);return H2(o)&&Math.floor(o)===o?Bm(i[0],t,o,e):["origin","start","end","stack","shape"].indexOf(i)>=0&&i}function Bm(r,t,e,i){return(r==="-"||r==="+")&&(e=t+e),e===t||e<0||e>=i?!1:e}function zm(r,t){let e=null;return r==="start"?e=t.bottom:r==="end"?e=t.top:S1(r)?e=t.getPixelForValue(r.value):t.getBasePixel&&(e=t.getBasePixel()),e}function Im(r,t,e){let i;return r==="start"?i=e:r==="end"?i=t.options.reverse?t.min:t.max:S1(r)?i=r.value:i=t.getBaseValue(),i}function Nm(r){let t=r.options,e=t.fill,i=P1(e&&e.target,e);return i===void 0&&(i=!!t.backgroundColor),i===!1||i===null?!1:i===!0?"origin":i}function Wm(r){let{scale:t,index:e,line:i}=r,o=[],a=i.segments,n=i.points,s=Um(t,e);s.push(xH({x:null,y:t.bottom},i));for(let V=0;V<a.length;V++){let c=a[V];for(let p=c.start;p<=c.end;p++)jm(o,n[p],s)}return new f5({points:o,options:{}})}function Um(r,t){let e=[],i=r.getMatchingVisibleMetas("line");for(let o=0;o<i.length;o++){let a=i[o];if(a.index===t)break;a.hidden||e.unshift(a.dataset)}return e}function jm(r,t,e){let i=[];for(let o=0;o<e.length;o++){let a=e[o],{first:n,last:s,point:V}=Gm(a,t,"x");if(!(!V||n&&s)){if(n)i.unshift(V);else if(r.push(V),!s)break}}r.push(...i)}function Gm(r,t,e){let i=r.interpolate(t,e);if(!i)return{};let o=i[e],a=r.segments,n=r.points,s=!1,V=!1;for(let c=0;c<a.length;c++){let p=a[c],h=n[p.start][e],v=n[p.end][e];if(r7(o,h,v)){s=o===h,V=o===v;break}}return{first:s,last:V,point:i}}var rt=class{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:o,y:a,radius:n}=this;return e=e||{start:0,end:d2},t.arc(o,a,n,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:o}=this,a=t.angle;return{x:e+Math.cos(a)*o,y:i+Math.sin(a)*o,angle:a}}};function qm(r){let{chart:t,fill:e,line:i}=r;if(H2(e))return Ym(t,e);if(e==="stack")return Wm(r);if(e==="shape")return!0;let o=Qm(r);return o instanceof rt?o:xH(o,i)}function Ym(r,t){let e=r.getDatasetMeta(t);return e&&r.isDatasetVisible(t)?e.dataset:null}function Qm(r){return(r.scale||{}).getPointPositionForValue?Xm(r):Km(r)}function Km(r){let{scale:t={},fill:e}=r,i=zm(e,t);if(H2(i)){let o=t.isHorizontal();return{x:o?i:null,y:o?null:i}}return null}function Xm(r){let{scale:t,fill:e}=r,i=t.options,o=t.getLabels().length,a=i.reverse?t.max:t.min,n=Im(e,t,a),s=[];if(i.grid.circular){let V=t.getPointPositionForValue(0,a);return new rt({x:V.x,y:V.y,radius:t.getDistanceFromCenterForValue(n)})}for(let V=0;V<o;++V)s.push(t.getPointPositionForValue(V,n));return s}function Sr(r,t,e){let i=qm(t),{chart:o,index:a,line:n,scale:s,axis:V}=t,c=n.options,p=c.fill,h=c.backgroundColor,{above:v=h,below:g=h}=p||{},y=o.getDatasetMeta(a),O=z8(o,y);i&&n.points.length&&(H9(r,e),Jm(r,{line:n,target:i,above:v,below:g,area:e,scale:s,axis:V,clip:O}),s9(r))}function Jm(r,t){let{line:e,target:i,above:o,below:a,area:n,scale:s,clip:V}=t,c=e._loop?"angle":t.axis;r.save();let p=a;a!==o&&(c==="x"?(jn(r,i,n.top),yr(r,{line:e,target:i,color:o,scale:s,property:c,clip:V}),r.restore(),r.save(),jn(r,i,n.bottom)):c==="y"&&(Gn(r,i,n.left),yr(r,{line:e,target:i,color:a,scale:s,property:c,clip:V}),r.restore(),r.save(),Gn(r,i,n.right),p=o)),yr(r,{line:e,target:i,color:p,scale:s,property:c,clip:V}),r.restore()}function jn(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let s of i){let{start:V,end:c}=s,p=o[V],h=o[it(V,c,o)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(p.x,e),r.lineTo(p.x,p.y)),n=!!t.pathSegment(r,s,{move:n}),n?r.closePath():r.lineTo(h.x,e)}r.lineTo(t.first().x,e),r.closePath(),r.clip()}function Gn(r,t,e){let{segments:i,points:o}=t,a=!0,n=!1;r.beginPath();for(let s of i){let{start:V,end:c}=s,p=o[V],h=o[it(V,c,o)];a?(r.moveTo(p.x,p.y),a=!1):(r.lineTo(e,p.y),r.lineTo(p.x,p.y)),n=!!t.pathSegment(r,s,{move:n}),n?r.closePath():r.lineTo(e,h.y)}r.lineTo(e,t.first().y),r.closePath(),r.clip()}function yr(r,t){let{line:e,target:i,property:o,color:a,scale:n,clip:s}=t,V=Fm(e,i,o);for(let{source:c,target:p,start:h,end:v}of V){let{style:{backgroundColor:g=a}={}}=c,y=i!==!0;r.save(),r.fillStyle=g,th(r,n,s,y&&zr(o,h,v)),r.beginPath();let O=!!e.pathSegment(r,c),k;if(y){O?r.closePath():qn(r,i,v,o);let T=!!i.pathSegment(r,p,{move:O,reverse:!0});k=O&&T,k||qn(r,i,h,o)}r.closePath(),r.fill(k?"evenodd":"nonzero"),r.restore()}}function th(r,t,e,i){let o=t.chart.chartArea,{property:a,start:n,end:s}=i||{};if(a==="x"||a==="y"){let V,c,p,h;a==="x"?(V=n,c=o.top,p=s,h=o.bottom):(V=o.left,c=n,p=o.right,h=s),r.beginPath(),e&&(V=Math.max(V,e.left),p=Math.min(p,e.right),c=Math.max(c,e.top),h=Math.min(h,e.bottom)),r.rect(V,c,p-V,h-c),r.clip()}}function qn(r,t,e,i){let o=t.interpolate(e,i);o&&r.lineTo(o.x,o.y)}var gH={id:"filler",afterDatasetsUpdate(r,t,e){let i=(r.data.datasets||[]).length,o=[],a,n,s,V;for(n=0;n<i;++n)a=r.getDatasetMeta(n),s=a.dataset,V=null,s&&s.options&&s instanceof f5&&(V={visible:r.isDatasetVisible(n),index:n,fill:Dm(s,n,i),chart:r,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=V,o.push(V);for(n=0;n<i;++n)V=o[n],!(!V||V.fill===!1)&&(V.fill=Rm(o,n,e.propagate))},beforeDraw(r,t,e){let i=e.drawTime==="beforeDraw",o=r.getSortedVisibleDatasetMetas(),a=r.chartArea;for(let n=o.length-1;n>=0;--n){let s=o[n].$filler;s&&(s.line.updateControlPoints(a,s.axis),i&&s.fill&&Sr(r.ctx,s,a))}},beforeDatasetsDraw(r,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;let i=r.getSortedVisibleDatasetMetas();for(let o=i.length-1;o>=0;--o){let a=i[o].$filler;Un(a)&&Sr(r.ctx,a,r.chartArea)}},beforeDatasetDraw(r,t,e){let i=t.meta.$filler;!Un(i)||e.drawTime!=="beforeDatasetDraw"||Sr(r.ctx,i,r.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};var A9={average(r){if(!r.length)return!1;let t,e,i=new Set,o=0,a=0;for(t=0,e=r.length;t<e;++t){let s=r[t].element;if(s&&s.hasValue()){let V=s.tooltipPosition();i.add(V.x),o+=V.y,++a}}return a===0||i.size===0?!1:{x:[...i].reduce((s,V)=>s+V)/i.size,y:o/a}},nearest(r,t){if(!r.length)return!1;let e=t.x,i=t.y,o=Number.POSITIVE_INFINITY,a,n,s;for(a=0,n=r.length;a<n;++a){let V=r[a].element;if(V&&V.hasValue()){let c=V.getCenterPoint(),p=t9(t,c);p<o&&(o=p,s=V)}}if(s){let V=s.tooltipPosition();e=V.x,i=V.y}return{x:e,y:i}}};function h0(r,t){return t&&(i2(t)?Array.prototype.push.apply(r,t):r.push(t)),r}function B0(r){return(typeof r=="string"||r instanceof String)&&r.indexOf(`
`)>-1?r.split(`
`):r}function eh(r,t){let{element:e,datasetIndex:i,index:o}=t,a=r.getDatasetMeta(i).controller,{label:n,value:s}=a.getLabelAndValue(o);return{chart:r,label:n,parsed:a.getParsed(o),raw:r.data.datasets[i].data[o],formattedValue:s,dataset:a.getDataset(),dataIndex:o,datasetIndex:i,element:e}}function Yn(r,t){let e=r.chart.ctx,{body:i,footer:o,title:a}=r,{boxWidth:n,boxHeight:s}=t,V=z2(t.bodyFont),c=z2(t.titleFont),p=z2(t.footerFont),h=a.length,v=o.length,g=i.length,y=j2(t.padding),O=y.height,k=0,T=i.reduce((K,G)=>K+G.before.length+G.lines.length+G.after.length,0);if(T+=r.beforeBody.length+r.afterBody.length,h&&(O+=h*c.lineHeight+(h-1)*t.titleSpacing+t.titleMarginBottom),T){let K=t.displayColors?Math.max(s,V.lineHeight):V.lineHeight;O+=g*K+(T-g)*V.lineHeight+(T-1)*t.bodySpacing}v&&(O+=t.footerMarginTop+v*p.lineHeight+(v-1)*t.footerSpacing);let F=0,R=function(K){k=Math.max(k,e.measureText(K).width+F)};return e.save(),e.font=c.string,N1(r.title,R),e.font=V.string,N1(r.beforeBody.concat(r.afterBody),R),F=t.displayColors?n+2+t.boxPadding:0,N1(i,K=>{N1(K.before,R),N1(K.lines,R),N1(K.after,R)}),F=0,e.font=p.string,N1(r.footer,R),e.restore(),k+=y.width,{width:k,height:O}}function rh(r,t){let{y:e,height:i}=t;return e<i/2?"top":e>r.height-i/2?"bottom":"center"}function ih(r,t,e,i){let{x:o,width:a}=i,n=e.caretSize+e.caretPadding;if(r==="left"&&o+a+n>t.width||r==="right"&&o-a-n<0)return!0}function oh(r,t,e,i){let{x:o,width:a}=e,{width:n,chartArea:{left:s,right:V}}=r,c="center";return i==="center"?c=o<=(s+V)/2?"left":"right":o<=a/2?c="left":o>=n-a/2&&(c="right"),ih(c,r,t,e)&&(c="center"),c}function Qn(r,t,e){let i=e.yAlign||t.yAlign||rh(r,e);return{xAlign:e.xAlign||t.xAlign||oh(r,t,e,i),yAlign:i}}function Ch(r,t){let{x:e,width:i}=r;return t==="right"?e-=i:t==="center"&&(e-=i/2),e}function ah(r,t,e){let{y:i,height:o}=r;return t==="top"?i+=e:t==="bottom"?i-=o+e:i-=o/2,i}function Kn(r,t,e,i){let{caretSize:o,caretPadding:a,cornerRadius:n}=r,{xAlign:s,yAlign:V}=e,c=o+a,{topLeft:p,topRight:h,bottomLeft:v,bottomRight:g}=M3(n),y=Ch(t,s),O=ah(t,V,c);return V==="center"?s==="left"?y+=c:s==="right"&&(y-=c):s==="left"?y-=Math.max(p,v)+o:s==="right"&&(y+=Math.max(h,g)+o),{x:T2(y,0,i.width-t.width),y:T2(O,0,i.height-t.height)}}function j8(r,t,e){let i=j2(e.padding);return t==="center"?r.x+r.width/2:t==="right"?r.x+r.width-i.right:r.x+i.left}function Xn(r){return h0([],B0(r))}function nh(r,t,e){return m0(r,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Jn(r,t){let e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?r.override(e):r}var _H={beforeTitle:q5,title(r){if(r.length>0){let t=r[0],e=t.chart.data.labels,i=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(i>0&&t.dataIndex<i)return e[t.dataIndex]}return""},afterTitle:q5,beforeBody:q5,beforeLabel:q5,label(r){if(this&&this.options&&this.options.mode==="dataset")return r.label+": "+r.formattedValue||r.formattedValue;let t=r.dataset.label||"";t&&(t+=": ");let e=r.formattedValue;return b1(e)||(t+=e),t},labelColor(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(r){let e=r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:q5,afterBody:q5,beforeFooter:q5,footer:q5,afterFooter:q5};function s5(r,t,e,i){let o=r[t].call(e,i);return typeof o>"u"?_H[t].call(e,i):o}var v9=class extends X5{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),o=i.enabled&&e.options.animation&&i.animations,a=new X8(this.chart,o);return o._cacheable&&(this._cachedAnimations=Object.freeze(a)),a}getContext(){return this.$context||(this.$context=nh(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){let{callbacks:i}=e,o=s5(i,"beforeTitle",this,t),a=s5(i,"title",this,t),n=s5(i,"afterTitle",this,t),s=[];return s=h0(s,B0(o)),s=h0(s,B0(a)),s=h0(s,B0(n)),s}getBeforeBody(t,e){return Xn(s5(e.callbacks,"beforeBody",this,t))}getBody(t,e){let{callbacks:i}=e,o=[];return N1(t,a=>{let n={before:[],lines:[],after:[]},s=Jn(i,a);h0(n.before,B0(s5(s,"beforeLabel",this,a))),h0(n.lines,s5(s,"label",this,a)),h0(n.after,B0(s5(s,"afterLabel",this,a))),o.push(n)}),o}getAfterBody(t,e){return Xn(s5(e.callbacks,"afterBody",this,t))}getFooter(t,e){let{callbacks:i}=e,o=s5(i,"beforeFooter",this,t),a=s5(i,"footer",this,t),n=s5(i,"afterFooter",this,t),s=[];return s=h0(s,B0(o)),s=h0(s,B0(a)),s=h0(s,B0(n)),s}_createItems(t){let e=this._active,i=this.chart.data,o=[],a=[],n=[],s=[],V,c;for(V=0,c=e.length;V<c;++V)s.push(eh(this.chart,e[V]));return t.filter&&(s=s.filter((p,h,v)=>t.filter(p,h,v,i))),t.itemSort&&(s=s.sort((p,h)=>t.itemSort(p,h,i))),N1(s,p=>{let h=Jn(t.callbacks,p);o.push(s5(h,"labelColor",this,p)),a.push(s5(h,"labelPointStyle",this,p)),n.push(s5(h,"labelTextColor",this,p))}),this.labelColors=o,this.labelPointStyles=a,this.labelTextColors=n,this.dataPoints=s,s}update(t,e){let i=this.options.setContext(this.getContext()),o=this._active,a,n=[];if(!o.length)this.opacity!==0&&(a={opacity:0});else{let s=A9[i.position].call(this,o,this._eventPosition);n=this._createItems(i),this.title=this.getTitle(n,i),this.beforeBody=this.getBeforeBody(n,i),this.body=this.getBody(n,i),this.afterBody=this.getAfterBody(n,i),this.footer=this.getFooter(n,i);let V=this._size=Yn(this,i),c=Object.assign({},s,V),p=Qn(this.chart,i,c),h=Kn(i,c,p,this.chart);this.xAlign=p.xAlign,this.yAlign=p.yAlign,a={opacity:1,x:h.x,y:h.y,width:V.width,height:V.height,caretX:s.x,caretY:s.y}}this._tooltipItems=n,this.$context=void 0,a&&this._resolveAnimations().update(this,a),t&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,o){let a=this.getCaretPosition(t,i,o);e.lineTo(a.x1,a.y1),e.lineTo(a.x2,a.y2),e.lineTo(a.x3,a.y3)}getCaretPosition(t,e,i){let{xAlign:o,yAlign:a}=this,{caretSize:n,cornerRadius:s}=i,{topLeft:V,topRight:c,bottomLeft:p,bottomRight:h}=M3(s),{x:v,y:g}=t,{width:y,height:O}=e,k,T,F,R,K,G;return a==="center"?(K=g+O/2,o==="left"?(k=v,T=k-n,R=K+n,G=K-n):(k=v+y,T=k+n,R=K-n,G=K+n),F=k):(o==="left"?T=v+Math.max(V,p)+n:o==="right"?T=v+y-Math.max(c,h)-n:T=this.caretX,a==="top"?(R=g,K=R-n,k=T-n,F=T+n):(R=g+O,K=R+n,k=T+n,F=T-n),G=R),{x1:k,x2:T,x3:F,y1:R,y2:K,y3:G}}drawTitle(t,e,i){let o=this.title,a=o.length,n,s,V;if(a){let c=M9(i.rtl,this.x,this.width);for(t.x=j8(this,i.titleAlign,i),e.textAlign=c.textAlign(i.titleAlign),e.textBaseline="middle",n=z2(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string,V=0;V<a;++V)e.fillText(o[V],c.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+s,V+1===a&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,o,a){let n=this.labelColors[i],s=this.labelPointStyles[i],{boxHeight:V,boxWidth:c}=a,p=z2(a.bodyFont),h=j8(this,"left",a),v=o.x(h),g=V<p.lineHeight?(p.lineHeight-V)/2:0,y=e.y+g;if(a.usePointStyle){let O={radius:Math.min(c,V)/2,pointStyle:s.pointStyle,rotation:s.rotation,borderWidth:1},k=o.leftForLtr(v,c)+c/2,T=y+V/2;t.strokeStyle=a.multiKeyBackground,t.fillStyle=a.multiKeyBackground,n9(t,O,k,T),t.strokeStyle=n.borderColor,t.fillStyle=n.backgroundColor,n9(t,O,k,T)}else{t.lineWidth=S1(n.borderWidth)?Math.max(...Object.values(n.borderWidth)):n.borderWidth||1,t.strokeStyle=n.borderColor,t.setLineDash(n.borderDash||[]),t.lineDashOffset=n.borderDashOffset||0;let O=o.leftForLtr(v,c),k=o.leftForLtr(o.xPlus(v,1),c-2),T=M3(n.borderRadius);Object.values(T).some(F=>F!==0)?(t.beginPath(),t.fillStyle=a.multiKeyBackground,X7(t,{x:O,y,w:c,h:V,radius:T}),t.fill(),t.stroke(),t.fillStyle=n.backgroundColor,t.beginPath(),X7(t,{x:k,y:y+1,w:c-2,h:V-2,radius:T}),t.fill()):(t.fillStyle=a.multiKeyBackground,t.fillRect(O,y,c,V),t.strokeRect(O,y,c,V),t.fillStyle=n.backgroundColor,t.fillRect(k,y+1,c-2,V-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let{body:o}=this,{bodySpacing:a,bodyAlign:n,displayColors:s,boxHeight:V,boxWidth:c,boxPadding:p}=i,h=z2(i.bodyFont),v=h.lineHeight,g=0,y=M9(i.rtl,this.x,this.width),O=function(e1){e.fillText(e1,y.x(t.x+g),t.y+v/2),t.y+=v+a},k=y.textAlign(n),T,F,R,K,G,L1,X;for(e.textAlign=n,e.textBaseline="middle",e.font=h.string,t.x=j8(this,k,i),e.fillStyle=i.bodyColor,N1(this.beforeBody,O),g=s&&k!=="right"?n==="center"?c/2+p:c+2+p:0,K=0,L1=o.length;K<L1;++K){for(T=o[K],F=this.labelTextColors[K],e.fillStyle=F,N1(T.before,O),R=T.lines,s&&R.length&&(this._drawColorBox(e,t,K,y,i),v=Math.max(h.lineHeight,V)),G=0,X=R.length;G<X;++G)O(R[G]),v=h.lineHeight;N1(T.after,O)}g=0,v=h.lineHeight,N1(this.afterBody,O),t.y-=a}drawFooter(t,e,i){let o=this.footer,a=o.length,n,s;if(a){let V=M9(i.rtl,this.x,this.width);for(t.x=j8(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=V.textAlign(i.footerAlign),e.textBaseline="middle",n=z2(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,s=0;s<a;++s)e.fillText(o[s],V.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,o){let{xAlign:a,yAlign:n}=this,{x:s,y:V}=t,{width:c,height:p}=i,{topLeft:h,topRight:v,bottomLeft:g,bottomRight:y}=M3(o.cornerRadius);e.fillStyle=o.backgroundColor,e.strokeStyle=o.borderColor,e.lineWidth=o.borderWidth,e.beginPath(),e.moveTo(s+h,V),n==="top"&&this.drawCaret(t,e,i,o),e.lineTo(s+c-v,V),e.quadraticCurveTo(s+c,V,s+c,V+v),n==="center"&&a==="right"&&this.drawCaret(t,e,i,o),e.lineTo(s+c,V+p-y),e.quadraticCurveTo(s+c,V+p,s+c-y,V+p),n==="bottom"&&this.drawCaret(t,e,i,o),e.lineTo(s+g,V+p),e.quadraticCurveTo(s,V+p,s,V+p-g),n==="center"&&a==="left"&&this.drawCaret(t,e,i,o),e.lineTo(s,V+h),e.quadraticCurveTo(s,V,s+h,V),e.closePath(),e.fill(),o.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,o=i&&i.x,a=i&&i.y;if(o||a){let n=A9[t.position].call(this,this._active,this._eventPosition);if(!n)return;let s=this._size=Yn(this,t),V=Object.assign({},n,this._size),c=Qn(e,t,V),p=Kn(t,V,c,e);(o._to!==p.x||a._to!==p.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=s.width,this.height=s.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,p))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let o={width:this.width,height:this.height},a={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;let n=j2(e.padding),s=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&s&&(t.save(),t.globalAlpha=i,this.drawBackground(a,t,o,e),pr(t,e.textDirection),a.y+=n.top,this.drawTitle(a,t,e),this.drawBody(a,t,e),this.drawFooter(a,t,e),ur(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,o=t.map(({datasetIndex:s,index:V})=>{let c=this.chart.getDatasetMeta(s);if(!c)throw new Error("Cannot find a dataset at index "+s);return{datasetIndex:s,element:c.data[V],index:V}}),a=!Q7(i,o),n=this._positionChanged(o,e);(a||n)&&(this._active=o,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let o=this.options,a=this._active||[],n=this._getActiveElements(t,a,e,i),s=this._positionChanged(n,t),V=e||!Q7(n,a)||s;return V&&(this._active=n,(o.enabled||o.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),V}_getActiveElements(t,e,i,o){let a=this.options;if(t.type==="mouseout")return[];if(!o)return e.filter(s=>this.chart.data.datasets[s.datasetIndex]&&this.chart.getDatasetMeta(s.datasetIndex).controller.getParsed(s.index)!==void 0);let n=this.chart.getElementsAtEventForMode(t,a.mode,a,i);return a.reverse&&n.reverse(),n}_positionChanged(t,e){let{caretX:i,caretY:o,options:a}=this,n=A9[a.position].call(this,t,e);return n!==!1&&(i!==n.x||o!==n.y)}};z(v9,"positioners",A9);var bH={id:"tooltip",_element:v9,positioners:A9,afterInit(r,t,e){e&&(r.tooltip=new v9({chart:r,options:e}))},beforeUpdate(r,t,e){r.tooltip&&r.tooltip.initialize(e)},reset(r,t,e){r.tooltip&&r.tooltip.initialize(e)},afterDraw(r){let t=r.tooltip;if(t&&t._willRender()){let e={tooltip:t};if(r.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(r.ctx),r.notifyPlugins("afterTooltipDraw",e)}},afterEvent(r,t){if(r.tooltip){let e=t.replay;r.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(r,t)=>t.bodyFont.size,boxWidth:(r,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:_H},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:r=>r!=="filter"&&r!=="itemSort"&&r!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]};var Hh=(r,t,e,i)=>(typeof t=="string"?(e=r.push(t)-1,i.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function sh(r,t,e,i){let o=r.indexOf(t);if(o===-1)return Hh(r,t,e,i);let a=r.lastIndexOf(t);return o!==a?e:o}var Vh=(r,t)=>r===null?null:T2(Math.round(r),0,t);function tH(r){let t=this.getLabels();return r>=0&&r<t.length?t[r]:r}var r4=class extends C7{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let i=this.getLabels();for(let{index:o,label:a}of e)i[o]===a&&i.splice(o,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(b1(t))return null;let i=this.getLabels();return e=isFinite(e)&&i[e]===t?e:sh(i,t,P1(e,t),this._addedLabels),Vh(e,i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:o}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(i=0),e||(o=this.getLabels().length-1)),this.min=i,this.max=o}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,o=[],a=this.getLabels();a=t===0&&e===a.length-1?a:a.slice(t,e+1),this._valueRange=Math.max(a.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let n=t;n<=e;n++)o.push({value:n});return o}getLabelForValue(t){return tH.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}};z(r4,"id","category"),z(r4,"defaults",{ticks:{callback:tH}});function Lh(r,t){let e=[],{bounds:o,step:a,min:n,max:s,precision:V,count:c,maxTicks:p,maxDigits:h,includeBounds:v}=r,g=a||1,y=p-1,{min:O,max:k}=t,T=!b1(n),F=!b1(s),R=!b1(c),K=(k-O)/(h+1),G=A8((k-O)/y/g)*g,L1,X,e1,o1;if(G<1e-14&&!T&&!F)return[{value:O},{value:k}];o1=Math.ceil(k/G)-Math.floor(O/G),o1>y&&(G=A8(o1*G/y/g)*g),b1(V)||(L1=Math.pow(10,V),G=Math.ceil(G*L1)/L1),o==="ticks"?(X=Math.floor(O/G)*G,e1=Math.ceil(k/G)*G):(X=O,e1=k),T&&F&&a&&Ye((s-n)/a,G/1e3)?(o1=Math.round(Math.min((s-n)/G,p)),G=(s-n)/o1,X=n,e1=s):R?(X=T?n:X,e1=F?s:e1,o1=c-1,G=(e1-X)/o1):(o1=(e1-X)/G,t7(o1,Math.round(o1),G/1e3)?o1=Math.round(o1):o1=Math.ceil(o1));let m1=Math.max(x8(G),x8(X));L1=Math.pow(10,b1(V)?m1:V),X=Math.round(X*L1)/L1,e1=Math.round(e1*L1)/L1;let W1=0;for(T&&(v&&X!==n?(e.push({value:n}),X<n&&W1++,t7(Math.round((X+W1*G)*L1)/L1,n,eH(n,K,r))&&W1++):X<n&&W1++);W1<o1;++W1){let y1=Math.round((X+W1*G)*L1)/L1;if(F&&y1>s)break;e.push({value:y1})}return F&&v&&e1!==s?e.length&&t7(e[e.length-1].value,s,eH(s,K,r))?e[e.length-1].value=s:e.push({value:s}):(!F||e1===s)&&e.push({value:e1}),e}function eH(r,t,{horizontal:e,minRotation:i}){let o=u0(i),a=(e?Math.sin(o):Math.cos(o))||.001,n=.75*t*(""+r).length;return Math.min(t/a,n)}var o4=class extends C7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return b1(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:o,max:a}=this,n=V=>o=e?o:V,s=V=>a=i?a:V;if(t){let V=F5(o),c=F5(a);V<0&&c<0?s(0):V>0&&c>0&&n(0)}if(o===a){let V=a===0?1:Math.abs(a*.05);s(a+V),t||n(o-V)}this.min=o,this.max=a}getTickLimit(){let t=this.options.ticks,{maxTicksLimit:e,stepSize:i}=t,o;return i?(o=Math.ceil(this.max/i)-Math.floor(this.min/i)+1,o>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${o} ticks. Limiting to 1000.`),o=1e3)):(o=this.computeTickLimit(),e=e||11),e&&(o=Math.min(e,o)),o}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let o={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},a=this._range||this,n=Lh(o,a);return t.bounds==="ticks"&&v8(n,this,"value"),t.reverse?(n.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),n}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let o=(i-e)/Math.max(t.length-1,1)/2;e-=o,i+=o}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return C9(t,this.chart.options.locale,this.options.ticks.format)}},m3=class extends o4{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=H2(t)?t:0,this.max=H2(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=u0(this.options.ticks.minRotation),o=(t?Math.sin(i):Math.cos(i))||.001,a=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,a.lineHeight/o))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}};z(m3,"id","linear"),z(m3,"defaults",{ticks:{callback:a9.formatters.numeric}});var g9=r=>Math.floor(p0(r)),o7=(r,t)=>Math.pow(10,g9(r)+t);function rH(r){return r/Math.pow(10,g9(r))===1}function iH(r,t,e){let i=Math.pow(10,e),o=Math.floor(r/i);return Math.ceil(t/i)-o}function lh(r,t){let e=t-r,i=g9(e);for(;iH(r,t,i)>10;)i++;for(;iH(r,t,i)<10;)i--;return Math.min(i,g9(r))}function ch(r,{min:t,max:e}){t=e5(r.min,t);let i=[],o=g9(t),a=lh(t,e),n=a<0?Math.pow(10,Math.abs(a)):1,s=Math.pow(10,a),V=o>a?Math.pow(10,o):0,c=Math.round((t-V)*n)/n,p=Math.floor((t-V)/s/10)*s*10,h=Math.floor((c-p)/Math.pow(10,a)),v=e5(r.min,Math.round((V+p+h*Math.pow(10,a))*n)/n);for(;v<e;)i.push({value:v,major:rH(v),significand:h}),h>=10?h=h<15?15:20:h++,h>=20&&(a++,h=2,n=a>=0?1:n),v=Math.round((V+p+h*Math.pow(10,a))*n)/n;let g=e5(r.max,v);return i.push({value:g,major:rH(g),significand:h}),i}var G8=class extends C7{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=o4.prototype.parse.apply(this,[t,e]);if(i===0){this._zero=!0;return}return H2(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=H2(t)?Math.max(0,t):null,this.max=H2(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!H2(this._userMin)&&(this.min=t===o7(this.min,0)?o7(this.min,-1):o7(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,o=this.max,a=s=>i=t?i:s,n=s=>o=e?o:s;i===o&&(i<=0?(a(1),n(10)):(a(o7(i,-1)),n(o7(o,1)))),i<=0&&a(o7(o,-1)),o<=0&&n(o7(i,1)),this.min=i,this.max=o}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=ch(e,this);return t.bounds==="ticks"&&v8(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return t===void 0?"0":C9(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=p0(t),this._valueRange=p0(this.max)-p0(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(p0(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}};z(G8,"id","logarithmic"),z(G8,"defaults",{ticks:{callback:a9.formatters.logarithmic,major:{enabled:!0}}});function Ir(r){let t=r.ticks;if(t.display&&r.display){let e=j2(t.backdropPadding);return P1(t.font&&t.font.size,s2.font.size)+e.height}return 0}function Mh(r,t,e){return e=i2(e)?e:[e],{w:or(r,t.string,e),h:e.length*t.lineHeight}}function oH(r,t,e,i,o){return r===i||r===o?{start:t-e/2,end:t+e/2}:r<i||r>o?{start:t-e,end:t}:{start:t,end:t+e}}function dh(r){let t={l:r.left+r._padding.left,r:r.right-r._padding.right,t:r.top+r._padding.top,b:r.bottom-r._padding.bottom},e=Object.assign({},t),i=[],o=[],a=r._pointLabels.length,n=r.options.pointLabels,s=n.centerPointLabels?J1/a:0;for(let V=0;V<a;V++){let c=n.setContext(r.getPointLabelContext(V));o[V]=c.padding;let p=r.getPointPosition(V,r.drawingArea+o[V],s),h=z2(c.font),v=Mh(r.ctx,h,r._pointLabels[V]);i[V]=v;let g=O2(r.getIndexAngle(V)+s),y=Math.round(r9(g)),O=oH(y,p.x,v.w,0,180),k=oH(y,p.y,v.h,90,270);ph(e,t,g,O,k)}r.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),r._pointLabelItems=hh(r,i,o)}function ph(r,t,e,i,o){let a=Math.abs(Math.sin(e)),n=Math.abs(Math.cos(e)),s=0,V=0;i.start<t.l?(s=(t.l-i.start)/a,r.l=Math.min(r.l,t.l-s)):i.end>t.r&&(s=(i.end-t.r)/a,r.r=Math.max(r.r,t.r+s)),o.start<t.t?(V=(t.t-o.start)/n,r.t=Math.min(r.t,t.t-V)):o.end>t.b&&(V=(o.end-t.b)/n,r.b=Math.max(r.b,t.b+V))}function uh(r,t,e){let i=r.drawingArea,{extra:o,additionalAngle:a,padding:n,size:s}=e,V=r.getPointPosition(t,i+o+n,a),c=Math.round(r9(O2(V.angle+h2))),p=vh(V.y,s.h,c),h=fh(c),v=Ah(V.x,s.w,h);return{visible:!0,x:V.x,y:p,textAlign:h,left:v,top:p,right:v+s.w,bottom:p+s.h}}function mh(r,t){if(!t)return!0;let{left:e,top:i,right:o,bottom:a}=r;return!(G5({x:e,y:i},t)||G5({x:e,y:a},t)||G5({x:o,y:i},t)||G5({x:o,y:a},t))}function hh(r,t,e){let i=[],o=r._pointLabels.length,a=r.options,{centerPointLabels:n,display:s}=a.pointLabels,V={extra:Ir(a)/2,additionalAngle:n?J1/o:0},c;for(let p=0;p<o;p++){V.padding=e[p],V.size=t[p];let h=uh(r,p,V);i.push(h),s==="auto"&&(h.visible=mh(h,c),h.visible&&(c=h))}return i}function fh(r){return r===0||r===180?"center":r<180?"left":"right"}function Ah(r,t,e){return e==="right"?r-=t:e==="center"&&(r-=t/2),r}function vh(r,t,e){return e===90||e===270?r-=t/2:(e>270||e<90)&&(r-=t),r}function xh(r,t,e){let{left:i,top:o,right:a,bottom:n}=e,{backdropColor:s}=t;if(!b1(s)){let V=M3(t.borderRadius),c=j2(t.backdropPadding);r.fillStyle=s;let p=i-c.left,h=o-c.top,v=a-i+c.width,g=n-o+c.height;Object.values(V).some(y=>y!==0)?(r.beginPath(),X7(r,{x:p,y:h,w:v,h:g,radius:V}),r.fill()):r.fillRect(p,h,v,g)}}function gh(r,t){let{ctx:e,options:{pointLabels:i}}=r;for(let o=t-1;o>=0;o--){let a=r._pointLabelItems[o];if(!a.visible)continue;let n=i.setContext(r.getPointLabelContext(o));xh(e,n,a);let s=z2(n.font),{x:V,y:c,textAlign:p}=a;K7(e,r._pointLabels[o],V,c+s.lineHeight/2,s,{color:n.color,textAlign:p,textBaseline:"middle"})}}function wH(r,t,e,i){let{ctx:o}=r;if(e)o.arc(r.xCenter,r.yCenter,t,0,d2);else{let a=r.getPointPosition(0,t);o.moveTo(a.x,a.y);for(let n=1;n<i;n++)a=r.getPointPosition(n,t),o.lineTo(a.x,a.y)}}function _h(r,t,e,i,o){let a=r.ctx,n=t.circular,{color:s,lineWidth:V}=t;!n&&!i||!s||!V||e<0||(a.save(),a.strokeStyle=s,a.lineWidth=V,a.setLineDash(o.dash||[]),a.lineDashOffset=o.dashOffset,a.beginPath(),wH(r,e,n,i),a.closePath(),a.stroke(),a.restore())}function bh(r,t,e){return m0(r,{label:e,index:t,type:"pointLabel"})}var t4=class extends o4{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=j2(Ir(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=H2(t)&&!isNaN(t)?t:0,this.max=H2(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Ir(this.options))}generateTickLabels(t){o4.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,i)=>{let o=e2(this.options.pointLabels.callback,[e,i],this);return o||o===0?o:""}).filter((e,i)=>this.chart.getDataVisibility(i))}fit(){let t=this.options;t.display&&t.pointLabels.display?dh(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,o){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-o)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,o))}getIndexAngle(t){let e=d2/(this._pointLabels.length||1),i=this.options.startAngle||0;return O2(t*e+u0(i))}getDistanceFromCenterForValue(t){if(b1(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(b1(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){let i=e[t];return bh(this.getContext(),t,i)}}getPointPosition(t,e,i=0){let o=this.getIndexAngle(t)-h2+i;return{x:Math.cos(o)*e+this.xCenter,y:Math.sin(o)*e+this.yCenter,angle:o}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:o,bottom:a}=this._pointLabelItems[t];return{left:e,top:i,right:o,bottom:a}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),wH(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t=this.ctx,e=this.options,{angleLines:i,grid:o,border:a}=e,n=this._pointLabels.length,s,V,c;if(e.pointLabels.display&&gh(this,n),o.display&&this.ticks.forEach((p,h)=>{if(h!==0||h===0&&this.min<0){V=this.getDistanceFromCenterForValue(p.value);let v=this.getContext(h),g=o.setContext(v),y=a.setContext(v);_h(this,g,V,n,y)}}),i.display){for(t.save(),s=n-1;s>=0;s--){let p=i.setContext(this.getPointLabelContext(s)),{color:h,lineWidth:v}=p;!v||!h||(t.lineWidth=v,t.strokeStyle=h,t.setLineDash(p.borderDash),t.lineDashOffset=p.borderDashOffset,V=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(s,V),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){let t=this.ctx,e=this.options,i=e.ticks;if(!i.display)return;let o=this.getIndexAngle(0),a,n;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(o),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((s,V)=>{if(V===0&&this.min>=0&&!e.reverse)return;let c=i.setContext(this.getContext(V)),p=z2(c.font);if(a=this.getDistanceFromCenterForValue(this.ticks[V].value),c.showLabelBackdrop){t.font=p.string,n=t.measureText(s.label).width,t.fillStyle=c.backdropColor;let h=j2(c.backdropPadding);t.fillRect(-n/2-h.left,-a-p.size/2-h.top,n+h.width,p.size+h.height)}K7(t,s.label,0,-a,p,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}};z(t4,"id","radialLinear"),z(t4,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:a9.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),z(t4,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),z(t4,"descriptors",{angleLines:{_fallback:"grid"}});var ot={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},V5=Object.keys(ot);function CH(r,t){return r-t}function aH(r,t){if(b1(t))return null;let e=r._adapter,{parser:i,round:o,isoWeekday:a}=r._parseOpts,n=t;return typeof i=="function"&&(n=i(n)),H2(n)||(n=typeof i=="string"?e.parse(n,i):e.parse(n)),n===null?null:(o&&(n=o==="week"&&(e7(a)||a===!0)?e.startOf(n,"isoWeek",a):e.startOf(n,o)),+n)}function nH(r,t,e,i){let o=V5.length;for(let a=V5.indexOf(r);a<o-1;++a){let n=ot[V5[a]],s=n.steps?n.steps:Number.MAX_SAFE_INTEGER;if(n.common&&Math.ceil((e-t)/(s*n.size))<=i)return V5[a]}return V5[o-1]}function wh(r,t,e,i,o){for(let a=V5.length-1;a>=V5.indexOf(e);a--){let n=V5[a];if(ot[n].common&&r._adapter.diff(o,i,n)>=t-1)return n}return V5[e?V5.indexOf(e):0]}function Sh(r){for(let t=V5.indexOf(r)+1,e=V5.length;t<e;++t)if(ot[V5[t]].common)return V5[t]}function HH(r,t,e){if(!e)r[t]=!0;else if(e.length){let{lo:i,hi:o}=o9(e,t),a=e[i]>=t?e[i]:e[o];r[a]=!0}}function yh(r,t,e,i){let o=r._adapter,a=+o.startOf(t[0].value,i),n=t[t.length-1].value,s,V;for(s=a;s<=n;s=+o.add(s,1,i))V=e[s],V>=0&&(t[V].major=!0);return t}function sH(r,t,e){let i=[],o={},a=t.length,n,s;for(n=0;n<a;++n)s=t[n],o[s]=n,i.push({value:s,major:!1});return a===0||!e?i:yh(r,i,o,e)}var i4=class extends C7{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){let i=t.time||(t.time={}),o=this._adapter=new lu._date(t.adapters.date);o.init(e),X3(i.displayFormats,o.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:aH(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:o,max:a,minDefined:n,maxDefined:s}=this.getUserBounds();function V(c){!n&&!isNaN(c.min)&&(o=Math.min(o,c.min)),!s&&!isNaN(c.max)&&(a=Math.max(a,c.max))}(!n||!s)&&(V(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&V(this.getMinMax(!1))),o=H2(o)&&!isNaN(o)?o:+e.startOf(Date.now(),i),a=H2(a)&&!isNaN(a)?a:+e.endOf(Date.now(),i)+1,this.min=Math.min(o,a-1),this.max=Math.max(o+1,a)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,o=i.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&o.length&&(this.min=this._userMin||o[0],this.max=this._userMax||o[o.length-1]);let a=this.min,n=this.max,s=Xe(o,a,n);return this._unit=e.unit||(i.autoSkip?nH(e.minUnit,this.min,this.max,this._getLabelCapacity(a)):wh(this,s.length,e.minUnit,this.min,this.max)),this._majorUnit=!i.major.enabled||this._unit==="year"?void 0:Sh(this._unit),this.initOffsets(o),t.reverse&&s.reverse(),sH(this,s,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,i=0,o,a;this.options.offset&&t.length&&(o=this.getDecimalForValue(t[0]),t.length===1?e=1-o:e=(this.getDecimalForValue(t[1])-o)/2,a=this.getDecimalForValue(t[t.length-1]),t.length===1?i=a:i=(a-this.getDecimalForValue(t[t.length-2]))/2);let n=t.length<3?.5:.25;e=T2(e,0,n),i=T2(i,0,n),this._offsets={start:e,end:i,factor:1/(e+1+i)}}_generate(){let t=this._adapter,e=this.min,i=this.max,o=this.options,a=o.time,n=a.unit||nH(a.minUnit,e,i,this._getLabelCapacity(e)),s=P1(o.ticks.stepSize,1),V=n==="week"?a.isoWeekday:!1,c=e7(V)||V===!0,p={},h=e,v,g;if(c&&(h=+t.startOf(h,"isoWeek",V)),h=+t.startOf(h,c?"day":n),t.diff(i,e,n)>1e5*s)throw new Error(e+" and "+i+" are too far apart with stepSize of "+s+" "+n);let y=o.ticks.source==="data"&&this.getDataTimestamps();for(v=h,g=0;v<i;v=+t.add(v,s,n),g++)HH(p,v,y);return(v===i||o.bounds==="ticks"||g===1)&&HH(p,v,y),Object.keys(p).sort(CH).map(O=>+O)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}format(t,e){let o=this.options.time.displayFormats,a=this._unit,n=e||o[a];return this._adapter.format(t,n)}_tickFormatFunction(t,e,i,o){let a=this.options,n=a.ticks.callback;if(n)return e2(n,[t,e,i],this);let s=a.time.displayFormats,V=this._unit,c=this._majorUnit,p=V&&s[V],h=c&&s[c],v=i[e],g=c&&h&&v&&v.major;return this._adapter.format(t,o||(g?h:p))}generateTickLabels(t){let e,i,o;for(e=0,i=t.length;e<i;++e)o=t[e],o.label=this._tickFormatFunction(o.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,o=u0(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(o),n=Math.sin(o),s=this._resolveTickFontOptions(0).size;return{w:i*a+s*n,h:i*n+s*a}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,o=i[e.unit]||i.millisecond,a=this._tickFormatFunction(t,0,sH(this,[t],this._majorUnit),o),n=this._getLabelSize(a),s=Math.floor(this.isHorizontal()?this.width/n.w:this.height/n.h)-1;return s>0?s:1}getDataTimestamps(){let t=this._cache.data||[],e,i;if(t.length)return t;let o=this.getMatchingVisibleMetas();if(this._normalized&&o.length)return this._cache.data=o[0].controller.getAllParsedValues(this);for(e=0,i=o.length;e<i;++e)t=t.concat(o[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){let t=this._cache.labels||[],e,i;if(t.length)return t;let o=this.getLabels();for(e=0,i=o.length;e<i;++e)t.push(aH(this,o[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return b8(t.sort(CH))}};z(i4,"id","time"),z(i4,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function q8(r,t,e){let i=0,o=r.length-1,a,n,s,V;e?(t>=r[i].pos&&t<=r[o].pos&&({lo:i,hi:o}=$0(r,"pos",t)),{pos:a,time:s}=r[i],{pos:n,time:V}=r[o]):(t>=r[i].time&&t<=r[o].time&&({lo:i,hi:o}=$0(r,"time",t)),{time:a,pos:s}=r[i],{time:n,pos:V}=r[o]);let c=n-a;return c?s+(V-s)*(t-a)/c:s}var Y8=class extends i4{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=q8(e,this.min),this._tableRange=q8(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let{min:e,max:i}=this,o=[],a=[],n,s,V,c,p;for(n=0,s=t.length;n<s;++n)c=t[n],c>=e&&c<=i&&o.push(c);if(o.length<2)return[{time:e,pos:0},{time:i,pos:1}];for(n=0,s=o.length;n<s;++n)p=o[n+1],V=o[n-1],c=o[n],Math.round((p+V)/2)!==c&&a.push({time:c,pos:n/(s-1)});return a}_generate(){let t=this.min,e=this.max,i=super.getDataTimestamps();return(!i.includes(t)||!i.length)&&i.splice(0,0,t),(!i.includes(e)||i.length===1)&&i.push(e),i.sort((o,a)=>o-a)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return e.length&&i.length?t=this.normalize(e.concat(i)):t=e.length?e:i,t=this._cache.all=t,t}getDecimalForValue(t){return(q8(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return q8(this._table,i*this._tableRange+this._minPos,!0)}};z(Y8,"id","timeseries"),z(Y8,"defaults",i4.defaults);var SH=(function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1})(),w9={toTextLines:function(r){var t=[],e;for(r=[].concat(r);r.length;)e=r.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?r.push.apply(r,e):b1(r)||t.unshift(""+e);return t},textSize:function(r,t,e){var i=[].concat(t),o=i.length,a=r.font,n=0,s;for(r.font=e.string,s=0;s<o;++s)n=Math.max(r.measureText(i[s]).width,n);return r.font=a,{height:o*e.lineHeight,width:n}},bound:function(r,t,e){return Math.max(r,Math.min(t,e))},arrayDiff:function(r,t){var e=r.slice(),i=[],o,a,n,s;for(o=0,n=t.length;o<n;++o)s=t[o],a=e.indexOf(s),a===-1?i.push([s,1]):e.splice(a,1);for(o=0,n=e.length;o<n;++o)i.push([e[o],-1]);return i},rasterize:function(r){return Math.round(r*SH)/SH}};function Nr(r,t){var e=t.x,i=t.y;if(e===null)return{x:0,y:-1};if(i===null)return{x:1,y:0};var o=r.x-e,a=r.y-i,n=Math.sqrt(o*o+a*a);return{x:n?o/n:0,y:n?a/n:-1}}function Zh(r,t,e,i,o){switch(o){case"center":e=i=0;break;case"bottom":e=0,i=1;break;case"right":e=1,i=0;break;case"left":e=-1,i=0;break;case"top":e=0,i=-1;break;case"start":e=-e,i=-i;break;case"end":break;default:o*=Math.PI/180,e=Math.cos(o),i=Math.sin(o);break}return{x:r,y:t,vx:e,vy:i}}var kh=0,ZH=1,kH=2,OH=4,TH=8;function Ct(r,t,e){var i=kh;return r<e.left?i|=ZH:r>e.right&&(i|=kH),t<e.top?i|=TH:t>e.bottom&&(i|=OH),i}function Oh(r,t){for(var e=r.x0,i=r.y0,o=r.x1,a=r.y1,n=Ct(e,i,t),s=Ct(o,a,t),V,c,p;!(!(n|s)||n&s);)V=n||s,V&TH?(c=e+(o-e)*(t.top-i)/(a-i),p=t.top):V&OH?(c=e+(o-e)*(t.bottom-i)/(a-i),p=t.bottom):V&kH?(p=i+(a-i)*(t.right-e)/(o-e),c=t.right):V&ZH&&(p=i+(a-i)*(t.left-e)/(o-e),c=t.left),V===n?(e=c,i=p,n=Ct(e,i,t)):(o=c,a=p,s=Ct(o,a,t));return{x0:e,x1:o,y0:i,y1:a}}function at(r,t){var e=t.anchor,i=r,o,a;return t.clamp&&(i=Oh(i,t.area)),e==="start"?(o=i.x0,a=i.y0):e==="end"?(o=i.x1,a=i.y1):(o=(i.x0+i.x1)/2,a=(i.y0+i.y1)/2),Zh(o,a,r.vx,r.vy,t.align)}var nt={arc:function(r,t){var e=(r.startAngle+r.endAngle)/2,i=Math.cos(e),o=Math.sin(e),a=r.innerRadius,n=r.outerRadius;return at({x0:r.x+i*a,y0:r.y+o*a,x1:r.x+i*n,y1:r.y+o*n,vx:i,vy:o},t)},point:function(r,t){var e=Nr(r,t.origin),i=e.x*r.options.radius,o=e.y*r.options.radius;return at({x0:r.x-i,y0:r.y-o,x1:r.x+i,y1:r.y+o,vx:e.x,vy:e.y},t)},bar:function(r,t){var e=Nr(r,t.origin),i=r.x,o=r.y,a=0,n=0;return r.horizontal?(i=Math.min(r.x,r.base),a=Math.abs(r.base-r.x)):(o=Math.min(r.y,r.base),n=Math.abs(r.base-r.y)),at({x0:i,y0:o+n,x1:i+a,y1:o,vx:e.x,vy:e.y},t)},fallback:function(r,t){var e=Nr(r,t.origin);return at({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},t)}},N0=w9.rasterize;function Th(r){var t=r.borderWidth||0,e=r.padding,i=r.size.height,o=r.size.width,a=-o/2,n=-i/2;return{frame:{x:a-e.left-t,y:n-e.top-t,w:o+e.width+t*2,h:i+e.height+t*2},text:{x:a,y:n,w:o,h:i}}}function Ph(r,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var i=e.getBasePixel();return r.horizontal?{x:i,y:null}:{x:null,y:i}}function Eh(r){return r instanceof d3?nt.arc:r instanceof Q5?nt.point:r instanceof K5?nt.bar:nt.fallback}function Fh(r,t,e,i,o,a){var n=Math.PI/2;if(a){var s=Math.min(a,o/2,i/2),V=t+s,c=e+s,p=t+i-s,h=e+o-s;r.moveTo(t,c),V<p&&c<h?(r.arc(V,c,s,-Math.PI,-n),r.arc(p,c,s,-n,0),r.arc(p,h,s,0,n),r.arc(V,h,s,n,Math.PI)):V<p?(r.moveTo(V,e),r.arc(p,c,s,-n,n),r.arc(V,c,s,n,Math.PI+n)):c<h?(r.arc(V,c,s,-Math.PI,0),r.arc(V,h,s,0,Math.PI)):r.arc(V,c,s,-Math.PI,Math.PI),r.closePath(),r.moveTo(t,e)}else r.rect(t,e,i,o)}function $h(r,t,e){var i=e.backgroundColor,o=e.borderColor,a=e.borderWidth;!i&&(!o||!a)||(r.beginPath(),Fh(r,N0(t.x)+a/2,N0(t.y)+a/2,N0(t.w)-a,N0(t.h)-a,e.borderRadius),r.closePath(),i&&(r.fillStyle=i,r.fill()),o&&a&&(r.strokeStyle=o,r.lineWidth=a,r.lineJoin="miter",r.stroke()))}function Rh(r,t,e){var i=e.lineHeight,o=r.w,a=r.x,n=r.y+i/2;return t==="center"?a+=o/2:(t==="end"||t==="right")&&(a+=o),{h:i,w:o,x:a,y:n}}function Dh(r,t,e){var i=r.shadowBlur,o=e.stroked,a=N0(e.x),n=N0(e.y),s=N0(e.w);o&&r.strokeText(t,a,n,s),e.filled&&(i&&o&&(r.shadowBlur=0),r.fillText(t,a,n,s),i&&o&&(r.shadowBlur=i))}function Bh(r,t,e,i){var o=i.textAlign,a=i.color,n=!!a,s=i.font,V=t.length,c=i.textStrokeColor,p=i.textStrokeWidth,h=c&&p,v;if(!(!V||!n&&!h))for(e=Rh(e,o,s),r.font=s.string,r.textAlign=o,r.textBaseline="middle",r.shadowBlur=i.textShadowBlur,r.shadowColor=i.textShadowColor,n&&(r.fillStyle=a),h&&(r.lineJoin="round",r.lineWidth=p,r.strokeStyle=c),v=0,V=t.length;v<V;++v)Dh(r,t[v],{stroked:h,filled:n,w:e.w,x:e.x,y:e.y+e.h*v})}var PH=function(r,t,e,i){var o=this;o._config=r,o._index=i,o._model=null,o._rects=null,o._ctx=t,o._el=e};h5(PH.prototype,{_modelize:function(r,t,e,i){var o=this,a=o._index,n=z2(r2([e.font,{}],i,a)),s=r2([e.color,s2.color],i,a);return{align:r2([e.align,"center"],i,a),anchor:r2([e.anchor,"center"],i,a),area:i.chart.chartArea,backgroundColor:r2([e.backgroundColor,null],i,a),borderColor:r2([e.borderColor,null],i,a),borderRadius:r2([e.borderRadius,0],i,a),borderWidth:r2([e.borderWidth,0],i,a),clamp:r2([e.clamp,!1],i,a),clip:r2([e.clip,!1],i,a),color:s,display:r,font:n,lines:t,offset:r2([e.offset,4],i,a),opacity:r2([e.opacity,1],i,a),origin:Ph(o._el,i),padding:j2(r2([e.padding,4],i,a)),positioner:Eh(o._el),rotation:r2([e.rotation,0],i,a)*(Math.PI/180),size:w9.textSize(o._ctx,t,n),textAlign:r2([e.textAlign,"start"],i,a),textShadowBlur:r2([e.textShadowBlur,0],i,a),textShadowColor:r2([e.textShadowColor,s],i,a),textStrokeColor:r2([e.textStrokeColor,s],i,a),textStrokeWidth:r2([e.textStrokeWidth,0],i,a)}},update:function(r){var t=this,e=null,i=null,o=t._index,a=t._config,n,s,V,c=r2([a.display,!0],r,o);c&&(n=r.dataset.data[o],s=P1(e2(a.formatter,[n,r]),n),V=b1(s)?[]:w9.toTextLines(s),V.length&&(e=t._modelize(c,V,a,r),i=Th(e))),t._model=e,t._rects=i},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,t){var e=this,i=r.ctx,o=e._model,a=e._rects,n;this.visible()&&(i.save(),o.clip&&(n=o.area,i.beginPath(),i.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),i.clip()),i.globalAlpha=w9.bound(0,o.opacity,1),i.translate(N0(t.x),N0(t.y)),i.rotate(o.rotation),$h(i,a.frame,o),Bh(i,o.lines,a.text,o),i.restore())}});var zh=Number.MIN_SAFE_INTEGER||-9007199254740991,Ih=Number.MAX_SAFE_INTEGER||9007199254740991;function b9(r,t,e){var i=Math.cos(e),o=Math.sin(e),a=t.x,n=t.y;return{x:a+i*(r.x-a)-o*(r.y-n),y:n+o*(r.x-a)+i*(r.y-n)}}function yH(r,t){var e=Ih,i=zh,o=t.origin,a,n,s,V,c;for(a=0;a<r.length;++a)n=r[a],s=n.x-o.x,V=n.y-o.y,c=t.vx*s+t.vy*V,e=Math.min(e,c),i=Math.max(i,c);return{min:e,max:i}}function Ht(r,t){var e=t.x-r.x,i=t.y-r.y,o=Math.sqrt(e*e+i*i);return{vx:(t.x-r.x)/o,vy:(t.y-r.y)/o,origin:r,ln:o}}var EH=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};h5(EH.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,t,e){this._rotation=e,this._rect={x:t.x+r.x,y:t.y+r.y,w:t.w,h:t.h}},contains:function(r){var t=this,e=1,i=t._rect;return r=b9(r,t.center(),-t._rotation),!(r.x<i.x-e||r.y<i.y-e||r.x>i.x+i.w+e*2||r.y>i.y+i.h+e*2)},intersects:function(r){var t=this._points(),e=r._points(),i=[Ht(t[0],t[1]),Ht(t[0],t[3])],o,a,n;for(this._rotation!==r._rotation&&i.push(Ht(e[0],e[1]),Ht(e[0],e[3])),o=0;o<i.length;++o)if(a=yH(t,i[o]),n=yH(e,i[o]),a.max<n.min||n.max<a.min)return!1;return!0},_points:function(){var r=this,t=r._rect,e=r._rotation,i=r.center();return[b9({x:t.x,y:t.y},i,e),b9({x:t.x+t.w,y:t.y},i,e),b9({x:t.x+t.w,y:t.y+t.h},i,e),b9({x:t.x,y:t.y+t.h},i,e)]}});function FH(r,t,e){var i=t.positioner(r,t),o=i.vx,a=i.vy;if(!o&&!a)return{x:i.x,y:i.y};var n=e.w,s=e.h,V=t.rotation,c=Math.abs(n/2*Math.cos(V))+Math.abs(s/2*Math.sin(V)),p=Math.abs(n/2*Math.sin(V))+Math.abs(s/2*Math.cos(V)),h=1/Math.max(Math.abs(o),Math.abs(a));return c*=o*h,p*=a*h,c+=t.offset*o,p+=t.offset*a,{x:i.x+c,y:i.y+p}}function Nh(r,t){var e,i,o,a;for(e=r.length-1;e>=0;--e)for(o=r[e].$layout,i=e-1;i>=0&&o._visible;--i)a=r[i].$layout,a._visible&&o._box.intersects(a._box)&&t(o,a);return r}function Wh(r){var t,e,i,o,a,n,s;for(t=0,e=r.length;t<e;++t)i=r[t],o=i.$layout,o._visible&&(s=new Proxy(i._el,{get:(V,c)=>V.getProps([c],!0)[c]}),a=i.geometry(),n=FH(s,i.model(),a),o._box.update(n,a,i.rotation()));return Nh(r,function(V,c){var p=V._hidable,h=c._hidable;p&&h||h?c._visible=!1:p&&(V._visible=!1)})}var S9={prepare:function(r){var t=[],e,i,o,a,n;for(e=0,o=r.length;e<o;++e)for(i=0,a=r[e].length;i<a;++i)n=r[e][i],t.push(n),n.$layout={_box:new EH,_hidable:!1,_visible:!0,_set:e,_idx:n._index};return t.sort(function(s,V){var c=s.$layout,p=V.$layout;return c._idx===p._idx?p._set-c._set:p._idx-c._idx}),this.update(t),t},update:function(r){var t=!1,e,i,o,a,n;for(e=0,i=r.length;e<i;++e)o=r[e],a=o.model(),n=o.$layout,n._hidable=a&&a.display==="auto",n._visible=o.visible(),t|=n._hidable;t&&Wh(r)},lookup:function(r,t){var e,i;for(e=r.length-1;e>=0;--e)if(i=r[e].$layout,i&&i._visible&&i._box.contains(t))return r[e];return null},draw:function(r,t){var e,i,o,a,n,s;for(e=0,i=t.length;e<i;++e)o=t[e],a=o.$layout,a._visible&&(n=o.geometry(),s=FH(o._el,o.model(),n),a._box.update(s,n,o.rotation()),o.draw(r,s))}},Uh=function(r){if(b1(r))return null;var t=r,e,i,o;if(S1(r))if(!b1(r.label))t=r.label;else if(!b1(r.r))t=r.r;else for(t="",e=Object.keys(r),o=0,i=e.length;o<i;++o)t+=(o!==0?", ":"")+e[o]+": "+r[e[o]];return""+t},jh={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Uh,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},L5="$datalabels",$H="$default";function Gh(r,t){var e=r.datalabels,i={},o=[],a,n;return e===!1?null:(e===!0&&(e={}),t=h5({},[t,e]),a=t.labels||{},n=Object.keys(a),delete t.labels,n.length?n.forEach(function(s){a[s]&&o.push(h5({},[t,a[s],{_key:s}]))}):o.push(t),i=o.reduce(function(s,V){return N1(V.listeners||{},function(c,p){s[p]=s[p]||{},s[p][V._key||$H]=c}),delete V.listeners,s},{}),{labels:o,listeners:i})}function Wr(r,t,e,i){if(t){var o=e.$context,a=e.$groups,n;t[a._set]&&(n=t[a._set][a._key],n&&e2(n,[o,i])===!0&&(r[L5]._dirty=!0,e.update(o)))}}function qh(r,t,e,i,o){var a,n;!e&&!i||(e?i?e!==i&&(n=a=!0):n=!0:a=!0,n&&Wr(r,t.leave,e,o),a&&Wr(r,t.enter,i,o))}function Yh(r,t){var e=r[L5],i=e._listeners,o,a;if(!(!i.enter&&!i.leave)){if(t.type==="mousemove")a=S9.lookup(e._labels,t);else if(t.type!=="mouseout")return;o=e._hovered,e._hovered=a,qh(r,i,o,a,t)}}function Qh(r,t){var e=r[L5],i=e._listeners.click,o=i&&S9.lookup(e._labels,t);o&&Wr(r,i,o,t)}var RH={id:"datalabels",defaults:jh,beforeInit:function(r){r[L5]={_actives:[]}},beforeUpdate:function(r){var t=r[L5];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(r,t,e){var i=t.index,o=r[L5],a=o._datasets[i]=[],n=r.isDatasetVisible(i),s=r.data.datasets[i],V=Gh(s,e),c=t.meta.data||[],p=r.ctx,h,v,g,y,O,k,T,F;for(p.save(),h=0,g=c.length;h<g;++h)if(T=c[h],T[L5]=[],n&&T&&r.getDataVisibility(h)&&!T.skip)for(v=0,y=V.labels.length;v<y;++v)O=V.labels[v],k=O._key,F=new PH(O,p,T,h),F.$groups={_set:i,_key:k||$H},F.$context={active:!1,chart:r,dataIndex:h,dataset:s,datasetIndex:i},F.update(F.$context),T[L5].push(F),a.push(F);p.restore(),h5(o._listeners,V.listeners,{merger:function(R,K,G){K[R]=K[R]||{},K[R][t.index]=G[R],o._listened=!0}})},afterUpdate:function(r){r[L5]._labels=S9.prepare(r[L5]._datasets)},afterDatasetsDraw:function(r){S9.draw(r,r[L5]._labels)},beforeEvent:function(r,t){if(r[L5]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Yh(r,e);break;case"click":Qh(r,e);break}}},afterEvent:function(r){var t=r[L5],e=t._actives,i=t._actives=r.getActiveElements(),o=w9.arrayDiff(e,i),a,n,s,V,c,p,h;for(a=0,n=o.length;a<n;++a)if(c=o[a],c[1])for(h=c[0].element[L5]||[],s=0,V=h.length;s<V;++s)p=h[s],p.$context.active=c[1]===1,p.update(p.$context);(t._dirty||o.length)&&(S9.update(t._labels),r.render()),delete t._dirty}};function st(r){if(r===null)return"--wfc-chart-uv-bar-color";let t=Math.round(r);return t>=11?"--wfc-uv-extreme":t>=8?"--wfc-uv-very-high":t>=6?"--wfc-uv-high":t>=3?"--wfc-uv-moderate":"--wfc-uv-low"}var A0=class extends t1{constructor(){super(...arguments);this.isTwiceDailyEntity=!1}willUpdate(e){(e.has("hass")||e.has("forecast"))&&(this.suntimesInfo=P0(this.hass,this.forecast.datetime))}createRenderRoot(){return this}render(){if(!this.forecast)return Z;let e=this.getDateInfo(),i=this.forecastType==="hourly"&&this.config.forecast?.show_sun_times&&this.suntimesInfo?this.suntimesInfo.isNightTime:!1,o=e.secondaryLabel!==void 0;return x`
      <div
        class="wsfc-forecast-slot-time ${e.className||""} ${o?"wsfc-two-rows":""}"
      >
        <span class="wsfc-forecast-slot-time-primary"
          >${e.icon?x`<ha-icon .icon=${e.icon}></ha-icon>`:e.label}</span
        >
        ${o?x`<span class="wsfc-forecast-slot-time-secondary"
              >${e.secondaryLabel}</span
            >`:Z}
      </div>
      <wsfc-weather-condition-icon-provider
        .hass=${this.hass}
        .config=${this.config}
        .state=${this.forecast.condition}
        .isNightTime=${i}
      ></wsfc-weather-condition-icon-provider>
    `}getDateInfo(){let e=a8(this.hass);if(this.forecastType==="twice_daily"&&this.forecast.is_daytime!==void 0){let c=this.forecast.is_daytime!==!1?this.hass.localize("ui.card.weather.day")||"Day":this.hass.localize("ui.card.weather.night")||"Night";return{label:C3(this.hass,this.forecast.datetime),secondaryLabel:c}}if(this.forecastType==="daily")return e?{label:C3(this.hass,this.forecast.datetime),secondaryLabel:ca(this.hass,this.forecast.datetime)}:{label:C3(this.hass,this.forecast.datetime)};let o=new Date(this.forecast.datetime),a=this.forecast.groupEndtime?new Date(this.forecast.groupEndtime):ma(o),n=o,s;if(this.config.forecast?.show_sun_times&&this.suntimesInfo){let{sunrise:c,sunset:p}=this.suntimesInfo,h=v=>{let g=new Date(o);return g.setHours(v.getHours(),v.getMinutes()),g.getTime()>=o.getTime()&&g.getTime()<=a.getTime()};h(c)?(s="wsfc-sunrise",n=c):h(p)&&(s="wsfc-sunset",n=p)}if(s){let c=da(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:c.suffix?`${c.time} ${c.suffix}`:c.time,className:s,icon:s==="wsfc-sunrise"?"mdi:weather-sunset-up":"mdi:weather-sunset-down"}:{label:c.time,secondaryLabel:e?c.suffix:void 0,className:s}}let V=Ma(this.hass,n);return this.isTwiceDailyEntity&&!e?{label:"",secondaryLabel:V.hour}:{label:V.hour,secondaryLabel:e?V.suffix:void 0}}};A0.styles=l1`
    :host {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `,Q([i1({attribute:!1})],A0.prototype,"hass",2),Q([i1({attribute:!1})],A0.prototype,"forecast",2),Q([i1({attribute:!1})],A0.prototype,"forecastType",2),Q([i1({attribute:!1})],A0.prototype,"isTwiceDailyEntity",2),Q([i1({attribute:!1})],A0.prototype,"config",2),A0=Q([n2("wsfc-forecast-header-items")],A0);var h3=class extends t1{constructor(){super(...arguments);this.open=!1;this.options=[];this._boundOnClickOutside=this._onClickOutside.bind(this)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this._boundOnClickOutside,!0)}updated(e){super.updated(e),e.has("open")&&(this.open?requestAnimationFrame(()=>{document.addEventListener("pointerdown",this._boundOnClickOutside,!0)}):document.removeEventListener("pointerdown",this._boundOnClickOutside,!0))}render(){return this.open?x`
      <div class="dropdown">
        ${this.options.map(e=>this._renderOption(e))}
      </div>
    `:Z}_renderOption(e){let i=this.value===e.value;return x`
      <div
        class="menu-item ${i?"selected":""}"
        @click=${o=>this._onSelected(o,e.value)}
      >
        <div class="item-content">
          <ha-icon class="option-icon" .icon=${e.icon}></ha-icon>
          <span>${e.label}</span>
        </div>
      </div>
    `}_onSelected(e,i){if(e.preventDefault(),e.stopPropagation(),this.value===i){this.dispatchEvent(new CustomEvent("closed"));return}this.value=i,this.dispatchEvent(new CustomEvent("selected",{detail:{value:i}}))}_onClickOutside(e){let i=e.composedPath();i.includes(this)||i.some(a=>a instanceof Element&&a.classList.contains("wsfc-settings-toggle-button"))||this.dispatchEvent(new CustomEvent("closed"))}};h3.styles=l1`
    :host {
      position: absolute;
      top: 110%;
      right: 0;
    }

    .dropdown {
      z-index: 999;
      background-color: var(--card-background-color, #fff);
      box-shadow: var(
        --ha-box-shadow-l,
        0 5px 5px -3px rgba(0, 0, 0, 0.2),
        0 8px 10px 1px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12)
      );
      border-radius: 10px;
      border-style: solid;
      border-width: 1px;
      border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
      padding: var(--ha-space-2, 8px) 0;
      width: max-content;
      display: flex;
      flex-direction: column;
    }

    .menu-item {
      padding: 0 16px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-family: var(
        --mdc-typography-subtitle1-font-family,
        Roboto,
        sans-serif
      );
      font-size: var(--mdc-typography-subtitle1-font-size, 1rem);
      font-weight: var(--mdc-typography-subtitle1-font-weight, 400);
      color: var(--primary-text-color);
      transition: background-color 0.1s;
      white-space: nowrap;
    }

    .item-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .menu-item:hover {
      background-color: rgba(var(--rgb-primary-text-color, 0, 0, 0), 0.04);
    }

    .menu-item.selected {
      color: var(--primary-color, #6200ee);
      background-color: rgba(var(--rgb-primary-color, 98, 0, 238), 0.12);
    }

    .option-icon {
      color: var(--state-icon-color, #616161);
    }
  `,Q([i1({type:Boolean})],h3.prototype,"open",2),Q([i1({attribute:!1})],h3.prototype,"options",2),Q([i1({attribute:!1})],h3.prototype,"value",2),h3=Q([n2("wsfc-chart-attribute-selector")],h3);P2.register(z0,K5,I0,f5,Q5,m3,r4,RH);var DH=16384,Kh=6,Vt=12,Xh=10,Jh=10,tf=130,r5=class extends t1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.itemWidth=0;this.isScrollable=!1;this._settingsOpen=!1;this._selectedAttribute=ga;this._lastChartEvent=null;this._chart=null;this._temperatureColors=null;this._scrollController=new j7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onForecastAction=e=>{if(this._scrollController.isScrolling())return;if(this.config.forecast_action?.hold_action?.action==="select-forecast-attribute"&&e.detail.action==="hold"){e.preventDefault(),e.stopPropagation(),this._settingsOpen=!0;return}if(!this._chart||!this._lastChartEvent)return;let i=this._lastChartEvent;this._lastChartEvent=null,e.preventDefault(),e.stopPropagation();let o=Y5(i,this._chart),a=this._chart.scales.x;if(!a)return;let n=a.getValueForPixel(o.x);if(n==null)return;let s=a.getLabelForValue(n),V=this._chart.data.labels?.indexOf(s)??-1;if(V===-1)return;let c=this.safeForecast[V];if(!c)return;let p={selectedForecast:c,action:e.detail.action};a2(this,"action",p)}}createRenderRoot(){return this}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null}firstUpdated(){this.config?.forecast?.default_chart_attribute&&(this._selectedAttribute=this.config.forecast.default_chart_attribute),this.initChart()}updated(e){if(super.updated(e),(e.has("forecast")||e.has("weatherEntity")||e.has("hass")||e.has("forecastType")||e.has("itemWidth"))&&this.itemWidth>0&&this.forecast?.length)if(!this._chart)this.initChart();else{let o=e.has("forecastType")||e.has("itemWidth");this.updateChartData(o)}}render(){let e=this.safeForecast;if(!e?.length||this.itemWidth<=0)return Z;let i=e.length,o=Math.max(i-1,0),a=this._getChartFontSize(),n=tf+Math.max(0,a-Vt),V={"--wfc-forecast-chart-width":`calc(${i} * var(--forecast-item-width) + ${o} * var(--forecast-item-gap))`},c={width:"var(--wfc-forecast-chart-width)",overflow:"hidden"},p={width:"calc(var(--wfc-forecast-chart-width) + var(--forecast-item-gap))",marginLeft:"calc(var(--forecast-item-gap) / -2)",display:"block",height:`${n}px`};return x`
      <div
        class="${Y3({"wsfc-forecast-chart-settings":!0,"has-selector":!!this.config.forecast?.show_attribute_selector})}"
      >
        ${this.config.forecast?.show_attribute_selector?x`<span>${this._localizeSelectedAttribute()}</span>
              <div class="wsfc-forecast-chart-attribute-selector">
                <ha-button
                  class="wsfc-settings-toggle-button"
                  size="small"
                  appearance="filled"
                  variant="brand"
                  @click=${this._onSettingsToggle}
                >
                  <ha-icon
                    .icon=${this._settingsOpen?"mdi:close":this._selectedAttribute==="temperature_and_precipitation"?"mdi:water-thermometer":j5[this._selectedAttribute]}
                  ></ha-icon>
                </ha-button>
              </div>`:Z}
        <wsfc-chart-attribute-selector
          .open=${this._settingsOpen}
          .options=${this._getChartOptions()}
          .value=${this._selectedAttribute}
          @selected=${this._onAttributesSelected}
          @closed=${this._onSettingsClosed}
        ></wsfc-chart-attribute-selector>
      </div>
      <div
        class="${Y3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-scroll-container"
          style=${t5(V)}
          .actionHandler=${c0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @pointerdown=${this._onPointerDown}
          @action=${this._onForecastAction}
        >
          <div class="wsfc-forecast-chart-header">
            ${this.renderHeaderItems(e)}
          </div>

          <div class="wsfc-chart-clipper" style=${t5(c)}>
            <div
              class="wsfc-forecast-chart"
              id="chart-container"
              style=${t5(p)}
            >
              <canvas id="forecast-canvas"></canvas>
            </div>
          </div>

          <div class="wsfc-forecast-chart-footer">
            ${e.map((h,v)=>x`
                <div class="wsfc-forecast-slot" data-index=${v}>
                  <wsfc-forecast-info
                    .hass=${this.hass}
                    .weatherEntity=${this.weatherEntity}
                    .forecast=${h}
                    .config=${this.config}
                    .hidePrecipitation=${!0}
                  ></wsfc-forecast-info>
                </div>
              `)}
          </div>
        </div>
      </div>
    `}initChart(){if(!this._canvas||!this.forecast?.length)return;let e=this.getChartConfig();e&&(this._chart=new P2(this._canvas,e))}updateChartData(e=!1){if(!this._chart||!this.forecast?.length)return;let i=this.getChartConfig(),o=this._chart.config.type,a=i.type;if(o!==a){this._chart.destroy(),this._chart=null,this.initChart();return}this._chart.data=i.data,this._chart.options.scales&&i.options?.scales&&(this._chart.options.scales=i.options.scales),e&&this._chart.resize(),this._chart.update("none")}_getChartFontSize(){let i=getComputedStyle(this).getPropertyValue("--wfc-chart-font-size");if(i){let o=parseFloat(i);if(!isNaN(o))return o}return Vt}_getBarLabelOffset(){return-22-(this._getChartFontSize()-Vt)}getChartConfig(){let e=this.safeForecast,i=getComputedStyle(this),o=i.getPropertyValue("--wfc-chart-grid-color"),a=this._getChartFontSize(),n=a+Jh,s=Xh+(a-Vt),V={responsive:!0,maintainAspectRatio:!1,plugins:{datalabels:{font:{size:a}}},layout:{autoPadding:!1,padding:{top:n,bottom:s,left:0,right:0}},elements:{line:{tension:.3}},scales:{x:{offset:!0,border:{color:o,dash:[4,4]},grid:{offset:!0,display:!0,color:o,drawTicks:!0},ticks:{display:!1}}}};switch(this._selectedAttribute){case"uv_index":return this._getUVIndexConfig(e,i,V);case"humidity":case"pressure":case"apparent_temperature":return this._getSelectedAttributeConfig(e,i,V);default:return this._getDefaultWeatherConfig(e,i,V)}}_getDefaultWeatherConfig(e,i,o){let{minTemp:a,maxTemp:n}=this.computeScaleLimits(e),s=i.getPropertyValue("--wfc-chart-temp-high-label-color"),V=i.getPropertyValue("--wfc-chart-temp-low-label-color"),c=i.getPropertyValue("--wfc-chart-precipitation-label-color"),p=i.getPropertyValue("--wfc-precipitation-bar-color"),h=W7(m5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),v=this.getTemperatureLineStyle(i,"temperature"),g=this.getTemperatureLineStyle(i,"templow");return{type:"line",data:{labels:e.map(y=>y.datetime),datasets:[{data:e.map(y=>y.temperature),yAxisID:"yTemp",datalabels:{anchor:"end",align:"top",color:s,formatter:y=>y!=null?`${M0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...v},{data:e.map(y=>y.templow??null),yAxisID:"yTemp",datalabels:{anchor:"start",align:"bottom",color:V,formatter:y=>y!=null?`${M0(this.hass,this.weatherEntity,y,this.config.forecast?.temperature_precision,!0)}\xB0`:null},...g},{type:"bar",data:e.map(y=>y.precipitation&&y.precipitation!==0?y.precipitation:null),backgroundColor:p,yAxisID:"yPrecip",borderWidth:0,borderRadius:{topLeft:3,topRight:3},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:c,formatter:y=>ya(y,m5(this.hass,this.weatherEntity,"precipitation"))}}]},options:N3({},o,{scales:{yTemp:{type:"linear",display:!1,min:a,max:n,position:"left",grid:{display:!1},ticks:{display:!1}},yPrecip:{type:"linear",display:!1,position:"right",beginAtZero:!0,suggestedMin:0,suggestedMax:h,grid:{display:!1,drawOnChartArea:!1},ticks:{display:!1}}}})}}_getUVIndexConfig(e,i,o){let a=i.getPropertyValue("--wfc-chart-label-color");return{type:"bar",data:{labels:e.map(n=>n.datetime),datasets:[{type:"bar",data:e.map(n=>n.uv_index!=null?Math.round(n.uv_index):0),backgroundColor:e.map(n=>i.getPropertyValue(st(n.uv_index??null)).trim()),borderWidth:0,borderRadius:{topLeft:5,topRight:5},categoryPercentage:.6,barPercentage:.8,order:0,datalabels:{anchor:"start",align:"end",offset:this._getBarLabelOffset(),color:a}}]},options:N3({},o,{scales:{y:{display:!1,beginAtZero:!0,suggestedMax:11}}})}}_getSelectedAttributeConfig(e,i,o){let a=this._selectedAttribute,n=a==="humidity"?"--wfc-chart-humidity-line-color":a==="pressure"?"--wfc-chart-pressure-line-color":"--wfc-chart-temp-high-line-color",s=i.getPropertyValue(n)||i.getPropertyValue("--wfc-chart-default-line-color"),V=i.getPropertyValue("--wfc-chart-label-color"),c=m5(this.hass,this.weatherEntity,a),p=e.map(k=>k[a]??0),h=Math.max(...p),v=Math.min(...p),g=h-v||1,y=h+g*.2,O=v-g*.1;return{type:"line",data:{labels:e.map(k=>k.datetime),datasets:[{data:e.map(k=>k[a]??null),borderColor:s,pointBackgroundColor:s,fill:!1,datalabels:{anchor:"end",align:"top",color:V,formatter:(k,T)=>{if(k===null)return null;let F=`${k} ${c}`;return F.length>Kh&&T.dataIndex%2!==0?null:F}}}]},options:N3({},o,{scales:{y:{display:!1,min:O,max:y}}})}}getTemperatureLineStyle(e,i){let o=i==="temperature"?"--wfc-chart-temp-high-line-color":"--wfc-chart-temp-low-line-color",a=e.getPropertyValue(o),n=s=>this.computeTemperatureLineColor(s,e,a);return{borderColor:n,pointBorderColor:n,pointBackgroundColor:n,borderDash:this.config.forecast?.use_color_thresholds&&i==="templow"?[4,4]:void 0,fill:!1}}computeTemperatureLineColor(e,i,o){if(!this.config.forecast?.use_color_thresholds)return o;let a=e.chart,{ctx:n,chartArea:s,scales:V}=a;if(!s||!V.yTemp)return o;if(this._temperatureColors===null){let F=i;this._temperatureColors={cold:F.getPropertyValue("--wfc-temp-cold")||"#2196f3",freezing:F.getPropertyValue("--wfc-temp-freezing")||"#4fb3ff",chilly:F.getPropertyValue("--wfc-temp-chilly")||"#ffeb3b",mild:F.getPropertyValue("--wfc-temp-mild")||"#4caf50",warm:F.getPropertyValue("--wfc-temp-warm")||"#ff9800",hot:F.getPropertyValue("--wfc-temp-hot")||"#f44336"}}let c=V.yTemp,{min:p,max:h}=c;if(!Number.isFinite(p)||!Number.isFinite(h))return o;let v=n.createLinearGradient(0,s.bottom,0,s.top),g=F=>Math.max(0,Math.min(1,(F-p)/(h-p))),O=m5(this.hass,this.weatherEntity,"temperature")==="\xB0F",k=F=>O?F*9/5+32:F,T=[{pos:g(k(-10)),color:this._temperatureColors.cold},{pos:g(k(0)),color:this._temperatureColors.freezing},{pos:g(k(8)),color:this._temperatureColors.chilly},{pos:g(k(18)),color:this._temperatureColors.mild},{pos:g(k(26)),color:this._temperatureColors.warm},{pos:g(k(34)),color:this._temperatureColors.hot}].sort((F,R)=>F.pos-R.pos);for(let F of T)v.addColorStop(F.pos,F.color);return v}computeScaleLimits(e){let i=e.map(R=>R.temperature),o=e.map(R=>R.templow??R.temperature),a=Math.min(...o),n=Math.max(...i),s=e.some(R=>R.templow!==void 0&&R.templow!==null),V=Math.max(n-a,10),c=.2,p=s?.35:.1,h=V*c,v=V*p,g=2,y=s?5:1,O=Math.max(h,g),k=Math.max(v,y),T=Math.floor(a-k),F=Math.ceil(n+O);return T>=F&&(F=T+1),{minTemp:T,maxTemp:F}}renderHeaderItems(e){let i=[],o;return e.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let s=C3(this.hass,a.datetime);o!==s&&(o=s,i.push(x`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${s}</div>
            </div>`))}i.push(x`
        <div class="wsfc-forecast-slot" data-index=${n}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${a}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
        </div>
      `)}}),i}get safeForecast(){if(!this.forecast?.length||this.itemWidth<=0)return[];let e=this._getGapValue(),i=Math.floor((DH+e)/(this.itemWidth+e));return this.forecast.length>i?(U5.debug(`Truncating forecast to ${i} items to stay under ${DH}px (including ${e}px gaps).`),this.forecast.slice(0,i)):this.forecast}_getGapValue(){let i=getComputedStyle(this).getPropertyValue("--forecast-item-gap").trim();return parseFloat(i)||0}_onPointerDown(e){this._lastChartEvent=e}_onSettingsToggle(e){e.stopPropagation(),e.preventDefault(),this._settingsOpen=!this._settingsOpen}_localizeSelectedAttribute(){return this._selectedAttribute==="temperature_and_precipitation"?this.hass.localize("ui.card.weather.forecast"):this.hass.formatEntityAttributeName(this.weatherEntity,this._selectedAttribute)||this.hass.localize("ui.card.weather.forecast")}_getChartOptions(){let e=this.forecast,i=o=>o==="temperature_and_precipitation"?!0:e.some(a=>a[o]!=null);return s8.filter(i).map(o=>({label:o==="temperature_and_precipitation"?`${this.hass.formatEntityAttributeName(this.weatherEntity,"temperature")}, ${this.hass.localize("ui.card.weather.attributes.precipitation")}`:this.hass.formatEntityAttributeName(this.weatherEntity,o)||o,icon:o==="temperature_and_precipitation"?"mdi:water-thermometer":j5[o],value:o}))}_onAttributesSelected(e){this._settingsOpen=!1,this._selectedAttribute=e.detail.value,this.updateChartData(!1)}_onSettingsClosed(){this._settingsOpen=!1}};Q([i1({attribute:!1})],r5.prototype,"hass",2),Q([i1({attribute:!1})],r5.prototype,"weatherEntity",2),Q([i1({attribute:!1})],r5.prototype,"forecast",2),Q([i1({attribute:!1})],r5.prototype,"config",2),Q([i1({attribute:!1})],r5.prototype,"forecastType",2),Q([i1({attribute:!1})],r5.prototype,"isTwiceDailyEntity",2),Q([i1({attribute:!1})],r5.prototype,"itemWidth",2),Q([i1({attribute:!1})],r5.prototype,"isScrollable",2),Q([N4("canvas")],r5.prototype,"_canvas",2),Q([J2()],r5.prototype,"_settingsOpen",2),Q([J2()],r5.prototype,"_selectedAttribute",2),r5=Q([n2("wsfc-forecast-chart")],r5);var f3=class extends t1{createRenderRoot(){return this}render(){if(!this.forecast)return Z;let t=this.forecast.precipitation||0,e=this.computePrecipitationBarHeight(t),i=wa(this.forecast);return x`
      <div class="wsfc-forecast-slot-temperature">
        <span class="wsfc-forecast-temperature-high wsfc-small">
          ${Math.round(this.forecast.temperature)}°</span
        >${this.forecast.templow!==void 0?x`<span
              class="wsfc-forecast-temperature-low wsfc-secondary wsfc-small"
              >/${Math.round(this.forecast.templow)}°</span
            >`:Z}
      </div>
      <div
        class=${Y3({"wsfc-forecast-precip-amount-container":!0,"wsfc-not-available":!i})}
      >
        <div
          class="wsfc-forecast-precip-amount-bar"
          style="--forecast-precipitation-bar-height-pct: ${e}%;"
        ></div>
        <span class="wsfc-forecast-precip-amount">
          ${t.toFixed(1)}
        </span>
      </div>
    `}computePrecipitationBarHeight(t){if(t<.1)return 0;if(t<.2)return 10;let e=this.maxPrecipitation||10,i=t/e*100;return Math.round(Math.min(i,100))}};Q([i1({attribute:!1})],f3.prototype,"hass",2),Q([i1({attribute:!1})],f3.prototype,"forecast",2),Q([i1({attribute:!1})],f3.prototype,"config",2),Q([i1({attribute:!1})],f3.prototype,"maxPrecipitation",2),f3=Q([n2("wsfc-forecast-details")],f3);var J5=class extends t1{constructor(){super(...arguments);this.size=35;this.radius=20;this.type="bearing"}render(){if(!this.hass||!this.forecast||!this.weatherEntity)return Z;let e=this.forecast.wind_speed||0,i=V8(this.forecast),o=this.radius,a=4,n=10,s=o+n,V=o+n,c=2*(o+n),p=Math.round(e),h=this.computeLineColor(),v=i;v!==void 0&&this.type==="direction"&&(v=(v+180)%360);let g=Number.isFinite(v),y=V-o,O=o*.55,k=y-O,T=o*.45;return x`
      <svg
        width="${this.size}"
        height="${this.size}"
        viewBox="0 0 ${c} ${c}"
        role="img"
        aria-label="${g?`Wind speed: ${p}, bearing: ${v} degrees`:`Wind speed: ${p}`}"
      >
        <circle
          cx="${s}"
          cy="${V}"
          r="${o}"
          stroke="${h}"
          stroke-width="${a}"
          fill="none"
        />
        ${g?w1` <g transform="rotate(${v} ${s} ${V})">
              <polygon
                points="${s-T},${y} ${s+T},${y} ${s},${k}"
                fill="${h}"
              />
            </g>`:Z}
        <text x="${s}" y="${V}" dy="0.1em">${p}</text>
      </svg>
    `}computeLineColor(){let e=G4(this.hass,this.weatherEntity,this.forecast);return!e||e<=3?"var(--wfc-wind-low)":e<=8?"var(--wfc-wind-medium)":"var(--wfc-wind-high)"}};J5.styles=l1`
    :host {
      display: inline-block;
    }
    text {
      font-size: calc(var(--ha-font-size-l, 16px) * 1.4);
      fill: var(--primary-text-color);
      font-weight: 600;
      text-anchor: middle;
      dominant-baseline: middle;
    }
  `,Q([i1({attribute:!1})],J5.prototype,"hass",2),Q([i1({attribute:!1})],J5.prototype,"weatherEntity",2),Q([i1({attribute:!1})],J5.prototype,"forecast",2),Q([i1({attribute:!1})],J5.prototype,"size",2),Q([i1({attribute:!1})],J5.prototype,"radius",2),Q([i1({attribute:!1})],J5.prototype,"type",2),J5=Q([n2("wsfc-wind-indicator")],J5);var A3=class extends t1{createRenderRoot(){return this}render(){return this.forecast?x`
      <div class="wsfc-forecast-slot-info">
        ${this.getExtraInfo()??Z}
      </div>
    `:Z}getExtraInfo(){let t=this.config?.forecast?.extra_attribute;if(!t)return null;if(t==="precipitation_probability"){let e=Math.round(this.forecast.precipitation_probability||0);return e>0?x`
            <span class="wsfc-forecast-precip-probability wsfc-secondary">
              ${e<10?"<10%":`${e}%`}
            </span>
          `:null}else if(t==="uv_index"){let e=this.forecast.uv_index;if(e==null)return null;let i=Math.round(e),o=st(e);return x`
        <span
          class="wsfc-forecast-extra-uv-index wsfc-secondary"
          style=${t5({color:`var(${o})`})}
          >${String(i)}</span
        >
      `}else{if(t==="wind_bearing"||t==="wind_direction")return x`<wsfc-wind-indicator
        .hass=${this.hass}
        .weatherEntity=${this.weatherEntity}
        .forecast=${this.forecast}
        .type="${t==="wind_direction"?"direction":"bearing"}"
      ></wsfc-wind-indicator>`;U5.warn(`Unsupported forecast.extra_attribute: ${t}`)}return null}};Q([i1({attribute:!1})],A3.prototype,"hass",2),Q([i1({attribute:!1})],A3.prototype,"weatherEntity",2),Q([i1({attribute:!1})],A3.prototype,"forecast",2),Q([i1({attribute:!1})],A3.prototype,"config",2),A3=Q([n2("wsfc-forecast-info")],A3);var t0=class extends t1{constructor(){super(...arguments);this.forecast=[];this.isTwiceDailyEntity=!1;this.isScrollable=!1;this._selectedForecastIndex=null;this._scrollController=new j7(this,{selector:".wsfc-scroll-container",childSelector:".wsfc-forecast-slot"});this._onPointerDown=e=>{let o=e.target?.closest(".wsfc-forecast-slot");this._selectedForecastIndex=o?.dataset.index?Number(o.dataset.index):null};this._onForecastAction=e=>{if(this._scrollController.isScrolling()||this._selectedForecastIndex===null)return;e.preventDefault(),e.stopPropagation();let i=this.forecast[this._selectedForecastIndex];if(!i)return;let o={selectedForecast:i,action:e.detail.action};a2(this,"action",o)}}createRenderRoot(){return this}render(){if(!this.forecast?.length)return Z;let e=[],i=W7(m5(this.hass,this.weatherEntity,"precipitation"),this.forecastType),o;return this.forecast.forEach((a,n)=>{if(a.datetime){if(this.forecastType==="hourly"){let s=C3(this.hass,a.datetime);o!==s&&(o=s,e.push(x`<div class="wsfc-day-indicator-container">
              <div class="wsfc-day-indicator wsfc-label">${s}</div>
            </div>`))}e.push(x`
        <div class="wsfc-forecast-slot" data-index=${n}>
          <wsfc-forecast-header-items
            .hass=${this.hass}
            .forecast=${a}
            .forecastType=${this.forecastType}
            .isTwiceDailyEntity=${this.isTwiceDailyEntity}
            .config=${this.config}
          ></wsfc-forecast-header-items>
          <wsfc-forecast-details
            .hass=${this.hass}
            .forecast=${a}
            .maxPrecipitation=${i}
            .config=${this.config}
          ></wsfc-forecast-details>
          <wsfc-forecast-info
            .hass=${this.hass}
            .weatherEntity=${this.weatherEntity}
            .forecast=${a}
            .config=${this.config}
          ></wsfc-forecast-info>
        </div>
      `)}}),x`
      <div
        class="${Y3({"wsfc-mask-container":!0,"is-scrollable":this.isScrollable})}"
      >
        <div
          class="wsfc-forecast wsfc-scroll-container"
          .actionHandler=${c0({hasHold:this.config.forecast_action?.hold_action!==void 0,hasDoubleClick:this.config.forecast_action?.double_tap_action!==void 0,stopPropagation:!0})}
          @action=${this._onForecastAction}
          @pointerdown=${this._onPointerDown}
        >
          ${e}
        </div>
      </div>
    `}};Q([i1({attribute:!1})],t0.prototype,"hass",2),Q([i1({attribute:!1})],t0.prototype,"weatherEntity",2),Q([i1({attribute:!1})],t0.prototype,"forecast",2),Q([i1({attribute:!1})],t0.prototype,"forecastType",2),Q([i1({attribute:!1})],t0.prototype,"isTwiceDailyEntity",2),Q([i1({attribute:!1})],t0.prototype,"config",2),Q([i1({attribute:!1})],t0.prototype,"isScrollable",2),t0=Q([n2("wsfc-forecast-simple")],t0);var v3=class extends t1{constructor(){super(...arguments);this.isNightTime=!1;this.state="exceptional";this.getCustomWeatherIconPath=()=>{let e=BH.has(this.state)?this.state:"exceptional";return this.isNightTime&&(this.state==="partlycloudy"?e="partlycloudy-night":this.state==="sunny"&&(e="clear-night")),{path:`${this.config.icons_path?.trim().replace(/\/$/,"")}/${e}.svg`,state:e}}}createRenderRoot(){return this}render(){if(!this.state||!this.config)return Z;let e=this.getClasses(),i=this.getWeatherStateIcon();return x`
      <div class="${e}" data-condition="${this.state}">${i}</div>
    `}getClasses(){return this.classes?`wsfc-weather-condition-icon-slot ${this.classes}`:"wsfc-weather-condition-icon-slot"}getWeatherStateIcon(){if(this.config?.icons_path?.trim()){let{path:i,state:o}=this.getCustomWeatherIconPath();return x` <img src="${i}" alt="${o}" /> `}let e=getComputedStyle(this).getPropertyValue(`--weather-icon-${this.state}`);return e?x`
        <div
          style="background-size: cover;${t5({"background-image":e})}"
        ></div>
      `:BH.has(this.state)?x`${nf(this.state,this.isNightTime)}`:Z}};Q([i1({attribute:!1})],v3.prototype,"config",2),Q([i1({attribute:!1})],v3.prototype,"classes",2),Q([i1({attribute:!1})],v3.prototype,"isNightTime",2),Q([i1({attribute:!1})],v3.prototype,"state",2),v3=Q([n2("wsfc-weather-condition-icon-provider")],v3);var BH=new Set(["clear-night","cloudy","exceptional","fog","lightning","lightning-rainy","partlycloudy","pouring","rainy","hail","snowy","snowy-rainy","sunny","windy","windy-variant"]),ef=new Set(["partlycloudy","cloudy","fog","windy","windy-variant","hail","rainy","snowy","snowy-rainy","pouring","lightning","lightning-rainy"]),rf=new Set(["hail","rainy","pouring"]),of=new Set(["windy","windy-variant"]),Cf=new Set(["snowy","snowy-rainy"]),af=new Set(["lightning","lightning-rainy"]),nf=(r,t)=>w1`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17 17"
  >
  ${r==="sunny"&&t?w1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:r==="sunny"?w1`
          <path
            class="sun"
            d="m 14.39303,8.4033507 c 0,3.3114723 -2.684145,5.9956173 -5.9956169,5.9956173 -3.3114716,0 -5.9956168,-2.684145 -5.9956168,-5.9956173 0,-3.311471 2.6841452,-5.995617 5.9956168,-5.995617 3.3114719,0 5.9956169,2.684146 5.9956169,5.995617"
          />
        `:""}
  ${r==="clear-night"?w1`
          <path
            class="moon"
            d="m 13.502891,11.382935 c -1.011285,1.859223 -2.976664,3.121381 -5.2405751,3.121381 -3.289929,0 -5.953329,-2.663833 -5.953329,-5.9537625 0,-2.263911 1.261724,-4.228856 3.120948,-5.240575 -0.452782,0.842738 -0.712753,1.806363 -0.712753,2.832381 0,3.289928 2.663833,5.9533275 5.9533291,5.9533275 1.026017,0 1.989641,-0.259969 2.83238,-0.712752"
          />
        `:""}
  ${r==="partlycloudy"&&t?w1`
          <path
            class="moon"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:r==="partlycloudy"?w1`
          <path
            class="sun"
            d="m14.981 4.2112c0 1.9244-1.56 3.4844-3.484 3.4844-1.9244 0-3.4844-1.56-3.4844-3.4844s1.56-3.484 3.4844-3.484c1.924 0 3.484 1.5596 3.484 3.484"
          />
        `:""}
  ${ef.has(r)?w1`
          <path
            class="cloud-back"
            d="m3.8863 5.035c-0.54892 0.16898-1.04 0.46637-1.4372 0.8636-0.63077 0.63041-1.0206 1.4933-1.0206 2.455 0 1.9251 1.5589 3.4682 3.4837 3.4682h6.9688c1.9251 0 3.484-1.5981 3.484-3.5232 0-1.9251-1.5589-3.5232-3.484-3.5232h-1.0834c-0.25294-1.6916-1.6986-2.9083-3.4463-2.9083-1.7995 0-3.2805 1.4153-3.465 3.1679"
          />
          <path
            class="cloud-front"
            d="m4.1996 7.6995c-0.33902 0.10407-0.64276 0.28787-0.88794 0.5334-0.39017 0.38982-0.63147 0.92322-0.63147 1.5176 0 1.1896 0.96414 2.1431 2.1537 2.1431h4.3071c1.1896 0 2.153-0.98742 2.153-2.1777 0-1.1896-0.96344-2.1777-2.153-2.1777h-0.66992c-0.15593-1.0449-1.0499-1.7974-2.1297-1.7974-1.112 0-2.0274 0.87524-2.1417 1.9586"
          />
        `:""}
  ${rf.has(r)?w1`
          <path
            class="rain"
            d="m5.2852 14.734c-0.22401 0.24765-0.57115 0.2988-0.77505 0.11395-0.20391-0.1845-0.18732-0.53481 0.036689-0.78281 0.14817-0.16298 0.59126-0.32914 0.87559-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.065617 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m11.257 14.163c-0.22437 0.24765-0.57115 0.2988-0.77505 0.11395-0.2039-0.1845-0.18768-0.53481 0.03669-0.78281 0.14817-0.16298 0.59126-0.32914 0.8756-0.42369 0.12453-0.04092 0.22684 0.05186 0.19791 0.17956-0.06562 0.2921-0.18732 0.74965-0.33514 0.91299"
          />
          <path
            class="rain"
            d="m8.432 15.878c-0.15452 0.17039-0.3937 0.20567-0.53446 0.07867-0.14041-0.12735-0.12876-0.36865 0.025753-0.53975 0.10195-0.11218 0.40711-0.22684 0.60325-0.29175 0.085725-0.02858 0.15628 0.03563 0.13652 0.12382-0.045508 0.20108-0.12912 0.51647-0.23107 0.629"
          />
          <path
            class="rain"
            d="m7.9991 14.118c-0.19226 0.21237-0.49001 0.25612-0.66499 0.09737-0.17462-0.15804-0.16051-0.45861 0.03175-0.67098 0.12665-0.14005 0.50729-0.28293 0.75071-0.36336 0.10689-0.03563 0.19473 0.0441 0.17004 0.15346-0.056092 0.25082-0.16051 0.64347-0.28751 0.78352"
          />
        `:""}
  ${r==="pouring"?w1`
          <path
            class="rain"
            d="m10.648 16.448c-0.19226 0.21449-0.49001 0.25894-0.66499 0.09878-0.17498-0.16016-0.16087-0.4639 0.03175-0.67874 0.12665-0.14146 0.50694-0.2854 0.75071-0.36724 0.10689-0.03563 0.19473 0.0448 0.17004 0.15558-0.05645 0.25365-0.16051 0.65017-0.28751 0.79163"
          />
          <path
            class="rain"
            d="m5.9383 16.658c-0.22437 0.25012-0.5715 0.30162-0.77505 0.11501-0.20391-0.18627-0.18768-0.54046 0.036689-0.79093 0.14817-0.1651 0.59126-0.33267 0.87559-0.42827 0.12418-0.04127 0.22648 0.05221 0.19791 0.18168-0.065617 0.29528-0.18732 0.75741-0.33514 0.92251"
          />
        `:""}
  ${of.has(r)?w1`
          <path
            class="cloud-back"
            d="m 13.59616,15.30968 c 0,0 -0.09137,-0.0071 -0.250472,-0.0187 -0.158045,-0.01235 -0.381353,-0.02893 -0.64382,-0.05715 -0.262466,-0.02716 -0.564444,-0.06385 -0.877358,-0.124531 -0.156986,-0.03034 -0.315383,-0.06844 -0.473781,-0.111478 -0.157691,-0.04551 -0.313266,-0.09842 -0.463902,-0.161219 l -0.267406,-0.0949 c -0.09984,-0.02646 -0.205669,-0.04904 -0.305153,-0.06738 -0.193322,-0.02716 -0.3838218,-0.03316 -0.5640912,-0.02011 -0.3626556,0.02611 -0.6847417,0.119239 -0.94615,0.226483 -0.2617611,0.108656 -0.4642556,0.230364 -0.600075,0.324203 -0.1358195,0.09419 -0.2049639,0.160514 -0.2049639,0.160514 0,0 0.089958,-0.01623 0.24765,-0.04445 0.1559278,-0.02575 0.3764139,-0.06174 0.6367639,-0.08714 0.2596444,-0.02646 0.5591527,-0.0441 0.8678333,-0.02328 0.076905,0.0035 0.1538111,0.01658 0.2321278,0.02293 0.077611,0.01058 0.1534581,0.02893 0.2314221,0.04022 0.07267,0.01834 0.1397,0.03986 0.213078,0.05644 l 0.238125,0.08925 c 0.09207,0.03281 0.183444,0.07055 0.275872,0.09878 0.09243,0.0261 0.185208,0.05327 0.277636,0.07161 0.184856,0.0388 0.367947,0.06174 0.543983,0.0702 0.353131,0.01905 0.678745,-0.01341 0.951442,-0.06456 0.27305,-0.05292 0.494595,-0.123119 0.646642,-0.181681 0.152047,-0.05785 0.234597,-0.104069 0.234597,-0.104069"
          />
          <path
            class="cloud-back"
            d="m 4.7519154,13.905801 c 0,0 0.091369,-0.0032 0.2511778,-0.0092 0.1580444,-0.0064 0.3820583,-0.01446 0.6455833,-0.03281 0.2631722,-0.01729 0.5662083,-0.04269 0.8812389,-0.09137 0.1576916,-0.02434 0.3175,-0.05609 0.4776611,-0.09384 0.1591027,-0.03951 0.3167944,-0.08643 0.4699,-0.14358 l 0.2702277,-0.08467 c 0.1008945,-0.02222 0.2074334,-0.04127 0.3072695,-0.05574 0.1943805,-0.01976 0.3848805,-0.0187 0.5651499,0.0014 0.3608917,0.03951 0.67945,0.144639 0.936625,0.261761 0.2575278,0.118534 0.4554364,0.247297 0.5873754,0.346781 0.132291,0.09913 0.198966,0.168275 0.198966,0.168275 0,0 -0.08925,-0.01976 -0.245886,-0.05397 C 9.9423347,14.087088 9.7232597,14.042988 9.4639681,14.00736 9.2057347,13.97173 8.9072848,13.94245 8.5978986,13.95162 c -0.077258,7.06e-4 -0.1541638,0.01058 -0.2328333,0.01411 -0.077964,0.0078 -0.1545166,0.02328 -0.2331861,0.03175 -0.073025,0.01588 -0.1404055,0.03422 -0.2141361,0.04798 l -0.2420055,0.08008 c -0.093486,0.02963 -0.1859139,0.06421 -0.2794,0.0889 C 7.3028516,14.23666 7.2093653,14.2603 7.116232,14.27512 6.9303181,14.30722 6.7465209,14.3231 6.5697792,14.32486 6.2166487,14.33046 5.8924459,14.28605 5.6218654,14.224318 5.3505793,14.161565 5.1318571,14.082895 4.9822793,14.01869 4.8327015,13.95519 4.7519154,13.905801 4.7519154,13.905801"
          />
        `:""}
  ${Cf.has(r)?w1`
          <path
            class="snow"
            d="m 8.4319893,15.348341 c 0,0.257881 -0.209197,0.467079 -0.467078,0.467079 -0.258586,0 -0.46743,-0.209198 -0.46743,-0.467079 0,-0.258233 0.208844,-0.467431 0.46743,-0.467431 0.257881,0 0.467078,0.209198 0.467078,0.467431"
          />
          <path
            class="snow"
            d="m 11.263878,14.358553 c 0,0.364067 -0.295275,0.659694 -0.659695,0.659694 -0.364419,0 -0.6596937,-0.295627 -0.6596937,-0.659694 0,-0.364419 0.2952747,-0.659694 0.6596937,-0.659694 0.36442,0 0.659695,0.295275 0.659695,0.659694"
          />
          <path
            class="snow"
            d="m 5.3252173,13.69847 c 0,0.364419 -0.295275,0.660047 -0.659695,0.660047 -0.364067,0 -0.659694,-0.295628 -0.659694,-0.660047 0,-0.364067 0.295627,-0.659694 0.659694,-0.659694 0.36442,0 0.659695,0.295627 0.659695,0.659694"
          />
        `:""}
  ${af.has(r)?w1`
          <path
            class="sun"
            d="m 9.9252695,10.935875 -1.6483986,2.341014 1.1170184,0.05929 -1.2169864,2.02141 3.0450261,-2.616159 H 9.8864918 L 10.97937,11.294651 10.700323,10.79794 h -0.508706 l -0.2663475,0.137936"
          />
        `:""}
  </svg>`;var x3=class extends t1{constructor(){super(...arguments);this.attributeConfigs=[];this.localize=e=>this.hass.formatEntityAttributeName(this.weatherEntity,e)||this.hass.localize(Hf(e))||T5(e).replace(/_/g," ")}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity||this.attributeConfigs.length===0)return Z;let e=this.attributeConfigs.map(i=>this._renderAttribute(i)).filter(i=>i!==Z);return e.length===0?Z:x`
      <div class="wsfc-current-attributes">${e}</div>
    `}_renderAttribute(e){if(!e||!e.name&&!e.entity)return Z;let{name:i,entity:o,label:a,icon:n}=e,s;if(o?s=L8(this.hass,this.weatherEntity,this.config,i,o):i&&(s=U7(this.hass,this.weatherEntity,this.config,i)),!s)return Z;let V=o?this.hass.states[o]||this.weatherEntity:this.weatherEntity,c=o?this.hass.states[o]:void 0,p=c&&!i?x`
            <ha-state-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${c}
              .icon=${n}
            ></ha-state-icon>
          `:x`
            <ha-attribute-icon
              class="wsfc-current-attribute-icon"
              .hass=${this.hass}
              .stateObj=${V}
              .attribute=${i}
              .icon=${ka(i,n,c)}
            ></ha-attribute-icon>
          `;return x`
      <div class="wsfc-current-attribute">
        ${p}
        <span class="wsfc-current-attribute-name">
          ${this.resolveLabel(i,a,c)}
        </span>
        <span class="wsfc-current-attribute-value">${s}</span>
      </div>
    `}resolveLabel(e,i,o){return i||(e&&U2.includes(e)?this.localize(e):o?.attributes?.friendly_name??(e?T5(e).replace(/_/g," "):""))}};Q([i1({attribute:!1})],x3.prototype,"hass",2),Q([i1({attribute:!1})],x3.prototype,"weatherEntity",2),Q([i1({attribute:!1})],x3.prototype,"attributeConfigs",2),Q([i1({attribute:!1})],x3.prototype,"config",2),x3=Q([n2("wsfc-current-weather-attributes")],x3);var Hf=o3(r=>r==="pressure"?"ui.card.weather.attributes.air_pressure":`ui.card.weather.attributes.${r}`);var Ur={...j5,precipitation:"mdi:weather-rainy"},G2=class extends t1{constructor(){super(...arguments);this.onAction=e=>{let i=this.config.current?.temperature_entity,o=i?{...this.config,entity:i}:this.config;W4(this,this.hass,o,e.detail.action)}}createRenderRoot(){return this}render(){if(!this.hass||!this.weatherEntity)return Z;let{state:e}=this.weatherEntity,i=this.getTemperature(),o=this.getSecondaryWeatherAttribute(),a=this.isNightTime(),n=this.getConfiguredAttributes(),s=this.config.name||this.weatherEntity.attributes.friendly_name;return x`
      <div class="wsfc-current-weather">
        <div class="wsfc-current-conditions">
          <wsfc-weather-condition-icon-provider
            .config=${this.config}
            .state=${e}
            .isNightTime=${a}
            .classes=${"wsfc-current-icon"}
          ></wsfc-weather-condition-icon-provider>
          <div class="wsfc-name-state">
            <span class="wsfc-current-state">
              ${this.hass.formatEntityState(this.weatherEntity)}
            </span>
            ${s?x`<span class="wsfc-name wsfc-secondary">${s}</span>`:Z}
          </div>
          <div class="wsfc-current-primary-secondary">
            ${i!==null?x`
                  <div
                    class="wsfc-current-temperature"
                    .actionHandler=${c0({stopPropagation:!0,hasHold:T0(this.config.hold_action),hasDoubleClick:T0(this.config.double_tap_action)})}
                    @action=${this.onAction}
                  >
                    ${i}
                  </div>
                `:Z}
            ${o?x`
                  <div class="wsfc-current-secondary-info">
                    ${o.stateObj?x`
                          <ha-state-icon
                            class="wsfc-current-secondary-icon wsfc-secondary"
                            .hass=${this.hass}
                            .stateObj=${o.stateObj}
                            .icon=${o.icon}
                          ></ha-state-icon>
                        `:o.icon?x`
                            <ha-attribute-icon
                              class="wsfc-current-secondary-icon wsfc-secondary"
                              .hass=${this.hass}
                              .icon=${o.icon}
                            ></ha-attribute-icon>
                          `:Z}
                    <span class="wsfc-current-secondary-value wsfc-secondary"
                      >${o.value}</span
                    >
                  </div>
                `:Z}
          </div>
        </div>
        ${n.length>0?x`<wsfc-current-weather-attributes
              .hass=${this.hass}
              .weatherEntity=${this.weatherEntity}
              .config=${this.config}
              .attributeConfigs=${n}
            ></wsfc-current-weather-attributes>`:Z}
      </div>
    `}isNightTime(){let e=P0(this.hass,new Date);return this.config.forecast?.show_sun_times&&e?e.isNightTime:!1}getConfiguredAttributes(){let e=this.config.current?.show_attributes;return e==null?[]:typeof e=="boolean"?e?U2.map(i=>({name:i})):[]:typeof e=="string"?[{name:e}]:!Array.isArray(e)&&typeof e=="object"?e.name||e.entity?[e]:[]:Array.isArray(e)?e.filter(i=>i!=null).map(i=>typeof i=="string"?{name:i}:i).filter(i=>!!i.name||!!i.entity):[]}getTemperature(){let e=this.config.current?.temperature_entity;if(e){let i=this.hass.states[e];if(i)return M0(this.hass,this.weatherEntity,i.state,this.config.current?.temperature_precision)}return this.weatherEntity.attributes.temperature!=null?M0(this.hass,this.weatherEntity,this.weatherEntity.attributes.temperature,this.config.current?.temperature_precision):null}getSecondaryWeatherAttribute(){let e=this.hourlyForecast,i=this.config.current?.secondary_info_attribute;if(i){let V=typeof i=="string"?{name:i}:i,{name:c,entity:p,icon:h}=V;if(p){let v=L8(this.hass,this.weatherEntity,this.config,c,p);if(v!=null){let g=this.hass.states[p];return c?{icon:h??g?.attributes?.icon??Ur[c],value:v}:{stateObj:g,icon:h,value:v}}}else if(c&&c in this.weatherEntity.attributes){let g=Ur[c],y=U7(this.hass,this.weatherEntity,this.config,c);if(y!=null)return{icon:h??g,value:y}}}let o=this.getTemperatureExtrema();if(o)return{value:`${o.high} / ${o.low}`};let a,n;if(e&&e.length&&e[0]?.precipitation!=null)a=e[0].precipitation,n="precipitation";else if("humidity"in this.weatherEntity.attributes)a=this.weatherEntity.attributes.humidity,n="humidity";else return null;return{icon:Ur[n],value:this.hass.formatEntityAttributeValue(this.weatherEntity,n,a)}}getTemperatureExtrema(){if(!this.hourlyForecast?.length||!this.dailyForecast?.length)return null;let e=B7(new Date().toISOString()),i=this.dailyForecast[0]?.templow??this.dailyForecast[0]?.temperature??1/0,o=this.dailyForecast[0]?.temperature??-1/0;for(let a of this.hourlyForecast)if(B7(a.datetime)===e){let n=a.templow??a.temperature,s=a.temperature;n!=null&&n<i&&(i=n),s!=null&&s>o&&(o=s)}return i===1/0||o===-1/0?null:{high:M0(this.hass,this.weatherEntity,o,this.config.current?.temperature_precision),low:M0(this.hass,this.weatherEntity,i,this.config.current?.temperature_precision)}}};Q([i1({attribute:!1})],G2.prototype,"hass",2),Q([i1({attribute:!1})],G2.prototype,"weatherEntity",2),Q([i1({attribute:!1})],G2.prototype,"hourlyForecast",2),Q([i1({attribute:!1})],G2.prototype,"dailyForecast",2),Q([i1({attribute:!1})],G2.prototype,"config",2),G2=Q([n2("wsfc-current-weather")],G2);var zH=`:host {
  --sun-size: var(--weather-forecast-card-effects-sun-size, 140px);
  --sun-spin-duration: var(
    --weather-forecast-card-effects-sun-spin-duration,
    100s
  );
  --moon-size: var(--weather-forecast-card-effects-moon-size, 100px);
  --sky-visibility: var(
    --weather-forecast-card-effects-sky-visibility,
    visible
  );
  /* Fallbacks for iOS 15 / Safari 15 (no color-mix support) */
  --drop-color-start: transparent;
  --drop-color-end: var(--rain-color);
  --drop-height: var(--weather-forecast-card-effects-drop-height, 20px);
  --drop-start-pos-diff-y: 50px;
  --snow-glow-color: var(--snow-color);
  --container-height: 0px; /* Set dynamically in TS */

  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  box-sizing: border-box;
  border-radius: var(--ha-card-border-radius, var(--ha-border-radius-lg));
}

:host(.light) {
  --sun-color: var(--weather-forecast-card-effects-sun-color, #facc15);
  --sun-ray-color: var(
    --weather-forecast-card-effects-sun-ray-color,
    rgba(253, 224, 71, 0.4)
  );
  --sun-ray-opacity: 0.25;
  --moon-color: var(
    --weather-forecast-card-effects-moon-color,
    rgba(220, 220, 230, 1)
  );
  --moon-shadow-color: var(
    --weather-forecast-card-effects-moon-shadow-color,
    rgba(28, 32, 54, 0.6)
  );
  --moon-glow-color: var(
    --weather-forecast-card-effects-moon-glow-color,
    rgba(214, 224, 255, 0.5)
  );
  --star-color: var(--weather-forecast-card-effects-star-color, #ffffff);
  --snow-color: var(--weather-forecast-card-effects-snow-color, #cbd5e1);
  --glow-intensity: 0.9;
  --rain-color: var(--weather-forecast-card-effects-rain-color, #2563eb);
  --clear-sky-color: var(
    --weather-forecast-card-effects-clear-sky-color,
    rgba(30, 130, 230, 0.6)
  );
  --clear-sky-accent: var(
    --weather-forecast-card-effects-clear-sky-accent,
    rgba(100, 180, 240, 0.45)
  );
  --clear-sky-horizon: var(
    --weather-forecast-card-effects-clear-sky-horizon,
    rgba(210, 235, 255, 0.3)
  );
  --clear-night-sky-color: var(
    --weather-forecast-card-effects-clear-night-sky-color,
    rgba(49, 46, 129, 0.7)
  );
  --clear-night-sky-accent: var(
    --weather-forecast-card-effects-clear-night-sky-accent,
    rgba(88, 28, 135, 0.55)
  );
  --clear-night-horizon: var(
    --weather-forecast-card-effects-clear-night-horizon,
    rgba(236, 72, 153, 0.4)
  );
  --overcast-sky-color: var(
    --weather-forecast-card-effects-overcast-sky-color,
    rgba(118, 132, 148, 0.42)
  );
  --overcast-sky-accent: var(
    --weather-forecast-card-effects-overcast-sky-accent,
    rgba(152, 165, 180, 0.34)
  );
  --overcast-sky-horizon: var(
    --weather-forecast-card-effects-overcast-sky-horizon,
    rgba(196, 206, 216, 0.24)
  );
  --overcast-night-color: var(
    --weather-forecast-card-effects-overcast-night-color,
    rgba(38, 44, 56, 0.8)
  );
  --overcast-night-accent: var(
    --weather-forecast-card-effects-overcast-night-accent,
    rgba(55, 62, 76, 0.65)
  );
  --overcast-night-horizon: var(
    --weather-forecast-card-effects-overcast-night-horizon,
    rgba(78, 86, 100, 0.45)
  );
  --cloud-color: var(--weather-forecast-card-effects-cloud-color, #f4f7fb);
}

:host(.dark) {
  --sun-color: var(--weather-forecast-card-effects-sun-color, #fbbf24);
  --sun-ray-color: var(
    --weather-forecast-card-effects-sun-ray-color,
    rgba(251, 191, 36, 0.5)
  );
  --sun-ray-opacity: 0.15;
  --moon-color: var(
    --weather-forecast-card-effects-moon-color,
    rgba(220, 220, 230, 1)
  );
  --moon-shadow-color: var(
    --weather-forecast-card-effects-moon-shadow-color,
    rgba(8, 10, 24, 0.72)
  );
  --moon-glow-color: var(
    --weather-forecast-card-effects-moon-glow-color,
    rgba(214, 224, 255, 0.55)
  );
  --star-color: var(--weather-forecast-card-effects-star-color, #ffffff);
  --snow-color: var(--weather-forecast-card-effects-snow-color, #ffffff);
  --glow-intensity: 0.6;
  --rain-color: var(--weather-forecast-card-effects-rain-color, #6cb4ee);
  --clear-sky-color: var(
    --weather-forecast-card-effects-clear-sky-color,
    rgba(3, 105, 161, 0.8)
  );
  --clear-sky-accent: var(
    --weather-forecast-card-effects-clear-sky-accent,
    rgba(7, 89, 133, 0.6)
  );
  --clear-sky-horizon: var(
    --weather-forecast-card-effects-clear-sky-horizon,
    rgba(12, 74, 110, 0.4)
  );
  --clear-night-sky-color: var(
    --weather-forecast-card-effects-clear-night-sky-color,
    rgba(10, 15, 40, 0.85)
  );
  --clear-night-sky-accent: var(
    --weather-forecast-card-effects-clear-night-sky-accent,
    rgba(20, 30, 80, 0.6)
  );
  --clear-night-horizon: var(
    --weather-forecast-card-effects-clear-night-horizon,
    rgba(40, 25, 100, 0.4)
  );
  --overcast-sky-color: var(
    --weather-forecast-card-effects-overcast-sky-color,
    rgba(60, 70, 82, 0.55)
  );
  --overcast-sky-accent: var(
    --weather-forecast-card-effects-overcast-sky-accent,
    rgba(78, 89, 102, 0.45)
  );
  --overcast-sky-horizon: var(
    --weather-forecast-card-effects-overcast-sky-horizon,
    rgba(102, 113, 126, 0.3)
  );
  --overcast-night-color: var(
    --weather-forecast-card-effects-overcast-night-color,
    rgba(16, 20, 28, 0.88)
  );
  --overcast-night-accent: var(
    --weather-forecast-card-effects-overcast-night-accent,
    rgba(30, 36, 47, 0.7)
  );
  --overcast-night-horizon: var(
    --weather-forecast-card-effects-overcast-night-horizon,
    rgba(48, 55, 68, 0.5)
  );
  --cloud-color: var(--weather-forecast-card-effects-cloud-color, #dfe6ee);
}

/* Modern browsers with color-mix support */
@supports (color: color-mix(in srgb, red, blue)) {
  :host {
    --drop-color-start: color-mix(in srgb, var(--rain-color), transparent 100%);
    --drop-color-end: color-mix(in srgb, var(--rain-color), transparent 40%);
  }
}

.snowflake-path {
  position: absolute;
  left: var(--pos-x);
  top: -50px;
  transform: rotate(var(--fall-angle, 0deg));
  transform-origin: top center;
}

.snowflake {
  position: absolute;
  background: var(--snow-color);
  width: var(--flake-size);
  height: var(--flake-size);
  border-radius: 50%;
  opacity: var(--flake-opacity);
  filter: blur(var(--flake-blur));
  box-shadow:
    0 0 1px var(--snow-glow-color),
    0 0 calc(var(--flake-shadow-spread) * var(--glow-intensity))
      var(--snow-glow-color);
  left: 0;
  animation: snowflake var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.raindrop-path {
  position: absolute;
  left: var(--pos-x);
  top: calc(-1 * var(--drop-height) - var(--drop-start-pos-diff-y));
  transform: rotate(var(--fall-angle, 0deg));
  transform-origin: top center;
}

.raindrop {
  position: absolute;
  width: 1px;
  height: var(--drop-height);
  background: linear-gradient(
    to bottom,
    var(--drop-color-start),
    var(--drop-color-end)
  );
  border-radius: 1px;
  left: 0;
  top: 0;
  animation: raindrop var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.splat {
  content: "";
  position: absolute;
  width: 15px;
  height: 10px;
  border-top: 2px dotted rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  left: -7.5px;
  top: calc(var(--landing-pos-y) + var(--drop-height) + 50px - 5px);
  opacity: 1;
  transform: scale(0);
  animation: splat var(--duration) linear infinite;
  animation-delay: var(--delay);
}

.lightning-flash {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  bottom: 0;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  mix-blend-mode: overlay;
  animation: lightning-loop 20s infinite;
}

.sky {
  position: absolute;
  visibility: var(--sky-visibility);
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    var(--clear-sky-color) 0%,
    var(--clear-sky-accent) 55%,
    var(--clear-sky-horizon) 100%
  );
}

.sky::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 65% 15%,
    rgba(255, 255, 255, 0.25) 0%,
    transparent 50%
  );
  pointer-events: none;
}

/* Overcast deck for the \`cloudy\` condition (day) */
.sky.overcast {
  background: linear-gradient(
    180deg,
    var(--overcast-sky-color) 0%,
    var(--overcast-sky-accent) 55%,
    var(--overcast-sky-horizon) 100%
  );
}

.sky.overcast::before {
  background: radial-gradient(
    circle at 50% 10%,
    rgba(255, 255, 255, 0.18) 0%,
    transparent 55%
  );
}

.sun {
  position: absolute;
  top: calc(var(--sun-size) * -0.95);
  right: 35%;
  transform: translateX(50%);
  width: var(--sun-size);
  height: var(--sun-size);
  border-radius: 50%;
  background: #f5fee0;
  box-shadow:
    0 0 20px 2px #fff7ed,
    0 0 40px 10px var(--sun-color),
    0 0 100px 30px rgba(253, 186, 116, 0.3);
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.1));
}

.sun-ray {
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--sun-ray-color) 50%,
    transparent 100%
  );
  border-radius: 50% 50% 10% 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: top center;
  opacity: var(--sun-ray-opacity);
  box-shadow: 0 0 15px var(--sun-ray-color);
}

.ray-box {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: var(--sun-size);
  animation: spin var(--sun-spin-duration) linear infinite;
}

.night-sky {
  position: absolute;
  visibility: var(--sky-visibility);
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    180deg,
    var(--clear-night-sky-color) 0%,
    var(--clear-night-sky-accent) 50%,
    var(--clear-night-horizon) 100%
  );
}

.night-sky::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 70% 20%,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 60%
  );
  pointer-events: none;
}

/* Overcast deck for the \`cloudy\` condition (night) */
.night-sky.overcast {
  background: linear-gradient(
    180deg,
    var(--overcast-night-color) 0%,
    var(--overcast-night-accent) 55%,
    var(--overcast-night-horizon) 100%
  );
}

.night-sky.overcast::before {
  background: none;
}

.moon-body {
  position: absolute;
  top: calc(var(--moon-size) * -0.32);
  right: 30%;
  transform: translateX(50%);
  width: var(--moon-size);
  height: var(--moon-size);
}

/* Blurred copy of the lit region behind the disc, so only the sunlit limb glows.
   The wrapper is padded a quarter-disc past the moon on every side so the blur fades
   to zero inside its box: WebKit clips a composited filter:blur() to its layer bounds,
   which otherwise slices the glow into a hard rectangle. translateZ(0) pins it to a
   stable GPU layer so that clip stays consistent during interaction. The inner svg is
   given an EXPLICIT width/height: Safari won't stretch a replaced element to \`inset\`
   and falls back to its intrinsic default, which blows the glow up into a stray blob. */
.moon-glow {
  position: absolute;
  inset: calc(var(--moon-size) * -0.25);
  z-index: 0;
  overflow: visible;
  filter: blur(calc(var(--moon-size) * 0.06));
  transform: translateZ(0);
  pointer-events: none;
}

.moon-glow svg {
  position: absolute;
  top: calc(var(--moon-size) * 0.25);
  left: calc(var(--moon-size) * 0.25);
  width: var(--moon-size);
  height: var(--moon-size);
}

.moon-glow path {
  fill: var(--moon-glow-color);
}

.moon {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 50%;
  /* Moon surface image (override with --weather-forecast-card-effects-moon-image);
     moon-color is the fallback. */
  background-color: var(--moon-color);
  background-image: var(
    --weather-forecast-card-effects-moon-image,
    var(--moon-texture)
  );
  background-size: cover;
  background-position: center;
}

/* Shadow extends past the disc; CSS blur softens the terminator, clip-path trims
   to the disc. clip-path here (not a parent's rounded overflow) so WebKit clips
   the blurred shape. */
.moon-phase {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  filter: blur(calc(var(--moon-size) * 0.045));
  clip-path: circle(50%);
  pointer-events: none;
}

.moon-phase path {
  fill: var(--moon-shadow-color);
}

.star {
  position: absolute;
  background: var(--star-color);
  border-radius: 50%;
  animation: twinkle 3s ease-in-out infinite;
  box-shadow: 0 0 3px 1px var(--star-color);
}

/* ---- Clouds ----
   A double-width track holds two identical cloud sets; translating it by -50%
   slides the second copy into the first's start position for a seamless drift. */
.cloud-defs {
  position: absolute;
  width: 0;
  height: 0;
}

.cloud-track {
  position: absolute;
  inset: 0;
  width: 200%;
  z-index: 0;
  animation: cloud-drift var(--cloud-drift-duration, 80s) linear infinite;
  will-change: transform;
}

/* Wind blowing toward the east drifts the deck rightward (the track is two
   identical tiles, so reversing the same keyframe stays seamless). */
.cloud-track.drift-right {
  animation-direction: reverse;
}

.cloud-set {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 50%;
}

.cloud-set-second {
  left: 50%;
}

.cloud {
  position: absolute;
  /* Soft elliptical billows are merged into a cumulus silhouette by the child's
     blur+contrast, then the edges are roughened by the SVG turbulence filter. */
  filter: url(#wsfc-cloud-rough);
}

/* Night clouds are dimmed so they read as a subtle silhouette, not bright puffs. */
.cloud.night {
  filter: url(#wsfc-cloud-rough) brightness(0.5);
}

.cloud-puffs {
  position: absolute;
  inset: 0;
  filter: blur(6px) contrast(22);
}

.cloud-puffs::before {
  content: "";
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
}

/* Five silhouette layouts (+ random horizontal flip in JS) keep clouds from
   looking like one repeated sprite. */
.cloud-shape-1 .cloud-puffs::before {
  background:
    radial-gradient(28% 42% at 22% 58%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(34% 60% at 42% 46%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(30% 50% at 62% 52%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(24% 38% at 80% 60%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(90% 26% at 50% 74%, var(--cloud-color) 0 60%, transparent 64%);
}

.cloud-shape-2 .cloud-puffs::before {
  background:
    radial-gradient(30% 55% at 28% 50%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(26% 44% at 50% 58%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(34% 60% at 70% 47%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(20% 32% at 90% 62%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(92% 24% at 50% 76%, var(--cloud-color) 0 60%, transparent 64%);
}

.cloud-shape-3 .cloud-puffs::before {
  background:
    radial-gradient(20% 34% at 14% 62%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(32% 64% at 35% 40%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(26% 48% at 56% 54%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(22% 40% at 75% 56%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(94% 24% at 50% 75%, var(--cloud-color) 0 60%, transparent 64%);
}

/* A compact, puffier two-lobe cloud. */
.cloud-shape-4 .cloud-puffs::before {
  background:
    radial-gradient(34% 66% at 34% 44%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(38% 70% at 62% 42%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(22% 40% at 84% 58%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(74% 26% at 48% 76%, var(--cloud-color) 0 60%, transparent 64%);
}

/* A long, low bank with many small billows. */
.cloud-shape-5 .cloud-puffs::before {
  background:
    radial-gradient(18% 32% at 12% 60%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(22% 44% at 30% 52%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(24% 46% at 48% 50%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(22% 42% at 66% 52%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(18% 34% at 84% 58%, var(--cloud-color) 0 60%, transparent 62%),
    radial-gradient(96% 22% at 50% 76%, var(--cloud-color) 0 60%, transparent 64%);
}

.cloud.grey .cloud-puffs::before {
  filter: brightness(0.86) saturate(0.55);
}

/* Volumetric shading: shadowed underside, highlighted top-left. */
.cloud-shade {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      55% 45% at 50% 92%,
      rgba(90, 100, 115, 0.5) 0%,
      rgba(90, 100, 115, 0) 70%
    ),
    radial-gradient(
      50% 45% at 38% 26%,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0) 70%
    );
  mix-blend-mode: soft-light;
}

@keyframes cloud-drift {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: var(--star-opacity, 1);
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes snowflake {
  0% {
    transform: translate3d(0, 0, 0);
  }
  12.5% {
    transform: translate3d(
      calc(var(--drift-amplitude, 15px) * 0.707),
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.125),
      0
    );
  }
  25% {
    transform: translate3d(
      var(--drift-amplitude, 15px),
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.25),
      0
    );
  }
  37.5% {
    transform: translate3d(
      calc(var(--drift-amplitude, 15px) * 0.707),
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.375),
      0
    );
  }
  50% {
    transform: translate3d(
      0,
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.5),
      0
    );
  }
  62.5% {
    transform: translate3d(
      calc(var(--drift-amplitude, 15px) * -0.707),
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.625),
      0
    );
  }
  75% {
    transform: translate3d(
      calc(var(--drift-amplitude, 15px) * -1),
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.75),
      0
    );
  }
  87.5% {
    transform: translate3d(
      calc(var(--drift-amplitude, 15px) * -0.707),
      calc((var(--container-height) + var(--drop-start-pos-diff-y)) * 0.875),
      0
    );
  }
  100% {
    opacity: 0.2;
    transform: translate3d(
      0,
      calc(var(--container-height) + var(--drop-start-pos-diff-y)),
      0
    );
  }
}

@keyframes raindrop {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  65% {
    opacity: 1;
  }
  75% {
    opacity: 0;
    transform: translate3d(
      0,
      calc(var(--landing-pos-y) + var(--drop-start-pos-diff-y)),
      0
    );
  }
  100% {
    opacity: 0;
    transform: translate3d(
      0,
      calc(var(--landing-pos-y) + var(--drop-start-pos-diff-y)),
      0
    );
  }
}

@keyframes splat {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 0;
    transform: scale(0);
  }
  90% {
    opacity: 0.5;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.5);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes lightning-loop {
  /* Long pause (0% to 90%) */
  0%,
  90% {
    opacity: 0;
  }

  /* FLASH 1: Instant On */
  90.1% {
    opacity: 0.4;
  }
  90.2% {
    opacity: 0;
  } /* Immediate off */

  /* Short Pause */
  90.3% {
    opacity: 0;
  }

  /* FLASH 2: Big Crack (Instant On) */
  90.4% {
    opacity: 0.8;
  }
  90.7% {
    opacity: 0.1;
  } /* Slight fade out for "glow" */
  91% {
    opacity: 0;
  }

  /* Residual Flicker */
  91.1% {
    opacity: 0.3;
  }
  91.3% {
    opacity: 0;
  }

  /* Stay dark until end */
  100% {
    opacity: 0;
  }
}
`;var IH="data:image/webp;base64,UklGRkIVAABXRUJQVlA4IDYVAADQ6ACdASpAAUABPk0gi0QioiEaLMZ8KATEtIQ4AM7OqjxLUHH+v+y5bPfvf7TD//fnT+G/9+uv/p5FuIHnN+AbfOcm//jK8k6aC8NbJ7uKgYUz2L058Umflhxwmsbai+1YKkJg8G5evUJXgwpS0WRQYZiKeb2sohHuuaHYPLEEmX+6eFAwD1aFQtXXM0Q3LEbQtS+4XaX+JnPYOb9A4q40ozW3HyIJwoGiXdskIiNM2OJnboMzFnV8lrZyO5F0m+YJce/tiZihEtg4zAM/JLmmSDvfd4/5ztwtTd+GJDXkevqUWrSguJ+54VTMw2A90RRR/aODo4SdLn7kOQ0S3ivAPs3w9bJ+KCtqWDdh1dw1UIUBmaeZlYsG1UsvrICZJzrYRbm22rZYVrTgsIKeszj5S082UqMd4NrKjMZn2pAUbZSkukuBCWFd5/jwQB7PkQmmZYgC6lkyIDQc0Im7i9NGjAjvtmIifKBbxqYgBmlPilmGQKGK1TAxsH36+/SkkQWjMlfBGzYmHCmhaVfnGiNZWYeuqb6uCj8nV6rfyX3O9smGkhNwEpdfnIN5QYQCMJdg3BE3QPdRaqdk/9nkZU6EsmqMBgOhvOVwkAJckV+SQGiEVm5USo0uJ9CY3VXEqt7Tm6DHE4OTq9TbQe+Qua9ZmFlixbqshAsNwDIHpMJZLmfbrM1crNGPV/+9CupG+mnoU1LoWVcY6bS12M1XDgMlw8HJRKkdyGlqtGi6nlr1Lxj/U4MCmpjmw40N7kW8VufPB/QgXmlqbH/aqqQWDi/T1+qUqcAs8xgzs7c84VfGfCyu1J/b93EzQcyrozPHnkYLRjFlqi/XgsTmUt1hVgVWEMRc/G8fUjsoojCax1Hx/gBvDj+r3AjUAblRExAUdcNfQBYinVWDn6gQ2KA2Y10OAw60IyjiMSZA4ysOj2pd+/yHOHnsLCgLUEnLw/eDZNwYkWLvyA8kli/meY0CA60TeWpVh3g8lcoUwmGP4j2FJSrTdUiscrJxXXNYBjqmzVnJYfmqQSX1AlBw81Vy/TlWUcLFt93GHNc7Uebexj+ga0LGJTGRJg+Lm3GSOLGq2MiJKp4S7PTHgX7dy3Ft7o0pTkNTBNhcfLA6xW04BiCqGDhKhcZ8AHuZfIjL+2dLrwyjBKqrn4aNG3yD5bxQldfGJnnFQiHqbEMOVvrKFwaT//cgsUiR0p4pVgJVMwgHQixsptyH80L/yovE5LF1KlxbHaV+8sN4wHyQrrn/sE2XB+aBfVpCO55Mxd+tqU3GAyvO8Dv7siQ4OtQlwyFVAHxr14QU8PwoVxsJL9C1ik3GZP3cl0dEbu3ULRe88KEtWE3l+IzY7OETKDty878D2d3hjGPhtgWztUFkOpAWawYl4yowyAitxWSSuwTHKvW52wEFFJ5HBrtoN/WOvBh3/34K30p3feotViCkE3lLHH4ySq+ekYA+3u4u2xk6qNdfTzleLkxaHky+4gYxmKZjR4hm52oStkYknCW6ix+RfNm8LKSxek2MiRXxH4QrDP5lweXr/OfT8FOPPwlbUzXU65TUX/G9o90DXbIzX8cnPzHsVT1JaWd6QiGAfrlDghTcXJBwPY0ylk3guCAkHlv05ger3Yny7xTqHTnDG9RAIKb67fwk8mqegACAhwe2ywUXL4FbNc4gQqyEt0fMMQalDwfJb77+h32Qvs2nZWzWv4EWpstrBnimX4UCVzzZusFiUvlqeOS4LL/19jdmC5+o9wOAWzQ1+khkwSx5obs+J6ulYNrT4HqwHIU62b4Wqfig9wcfcz4AGI6cK+knln7OrEW9QxfkZgz/hB8Q/rRLW/wT8RQ0ofYU1NWnyuBB1Lbav3J4RSmpfmQG6OvccQud4BFP8PeMU35cikraLl+Q0UCp6Ke89IS7Roj46uPRQ07HaS/yi4ViPk4Kf3tHV7WvULP60aKU+8cstkdEPUnky5XorB2P6rS9rBm2ikAwD9CmEbQv0RaXp0derahjIqpS+z02sp7MX7lIzi9QsvZTCz492zgXUB5zqNgjPqz1BshO4A1FHU4gExriyZF597dCgjJx/iWfCGRfFEscZ6GJ0wtei0dUaStJNc6VK+6OvsLtiUzBtAQPzt5PhCgjFTy25a7jG6MTsUjkHcgFJBzDQisnKNXYX/QvjKpmTM7W2s3rsSg9ziiVOZKhjNCEUBKcDEzs30B3coa9d3dMmzQ6bGzYe+nfcPmYIMbTFbwlbNky5UQqcKe7MCW6JQ5WjRKnxkmZ4WXFqcHYOTuJQ+oIQ+7whMwoMonmrk4gI7vw6lCXkq98X5mEr/xCl0c1L5wrFIVFtmhXM5rNu90qG5FdU0RvpHeHX8VRiYbE6nIRGEASC6GQK8unUeegB1VWgkopMqxETi46NNyFQrnN3DekWVeXNi2wDuRHafntF+FlkiLmxEQN402L/DaZRyrtULtvDIsgDZxHUd5oFXqHun4kfJzmNn/hjYJdP/1R5FuG3fu1gAD+qxoLLeCW/tglhX3HEJgivBBt5TM96yPxWvGWHh5iAeVu9voLnJ13x+LlTnxoVxpWE1x596nQqTbB6/CnBH/INoPE9NmgsCKDF+7hfhrkLzKP7tl/Sg+folyjmTRcOZuW4rKIuRB+ma5jsH/qG/sHDayMesXEbhdXkRNsuHZsmRqO0cj7fyRN8Z5znoK2L4kIW/7cxC8zFpLLTpOfywhhrkST+vBrl0TDaCaMIxgMJr55UAA1EGZi/f3wnGYUKblc8Ayn4jt1AxHbjbLUzh3kyMwr84yRbRRTS7zgLR7Cm0dcTz8Ean86g012/FpTPbD7gbNoZvQkeWLzPF3pL2Fbal6UXApoUHrF7d6kO3wJsoM3eI0lWSeFUwU4oVys50zrDsICnmcg6ejF7865VdsKqMZ8QiVmwdihEW52uFsr0djpNk7vVIaFHdM8frMFldf7h62i0581MfzcUJvKqbulPnBa2o14SUbv84WKYfeazeDFTGjXUDrywfLOQ2wX1tD5eC9fIJnXh9CTl7FP1Q+J65XpbLaWYaLAe67vdc6oDhXWoffzRzY0yuPuvkyQTRg1ZMsgyUedo4uuBzuTG+yJI4aQr5wfx2XE+PoNQViCFaHT837jXTbox58QLgARUOk5Ug6paz3lo34rf0KB9q7Jdz95ljp7A+v3GLj/lBMA4kks4oqgWkOBmiufYu1niR8tD5pJXHhKo+kk9Z6Jgo1YNdkXA9UE2d3v5mKnstVM5Ka9293Q5Lz8HeAI4NJBhWB2FYweyw24E7ifB8KZNhwtVJ2X9Xo1nzV74RcrX4987UcEPms8fT39TJiLyELs2YY7aeqpI2CwlkJR6NFDl+XEFzJcqgZ6JMINmFUf1QgMG+1ptpQPXXpbA8Dw249Z+q5LAgj//Ux3nc895cB4oOxUcQNpCM31EaJ5pJLn89Y9xzs3rGm5EqxiRVn2mGUXbSBZ9KNGzCFtETESndpNvujSxXQlC4uTbyrkcdDISPBJgXsVLgQ/CBNknjOycbTkYRH2duhfcqstfFbOsGab8rnKCkykUNaZLkNlHJpnxt4D2JPBImIsgA03eC0rHnC4bv4JZByrLlJgpYF6EyHq6WHNhe7CGvNSCIJE9yq4WITHbjMH/PY41PNi24HqGEUEz6A6T2T+rNmsmm3RExO5V16vwpRuTR3xcCkwmKhMnoImSb60vRi21F6mDXZXBOQQBbgX+YybaADJM2YJo0fUgAOuABleXpFuyIyExQwMCESGg8EpnKqZizE93w/MNTS8WOF/EBdmcqUIpC5xVsze3krn5B3pWOFHptQk6tWI5nlgjRb6tGvjnjJF4x/5u4t65E9N5/fqwLHLNbWbWo1TS4njMDdKZGfBvw+IeztNvZ/P3PJvS+hKT203tH6/PCku+UQf9CSXzFY5JMcTTQuAl+MsFvS64igSxmZhRnXmo5lZNVdkmlUklpwB5uJI4t6k1Y+/Zg0J2qAFEJX8gGatgoFhHXe8AGGyuoy+lrXLe3Fw9UkEh9Mif3oW77oIWbcytAMPkBkT9xcMMg3zkhTYNfycN9o4Ei+ycocAiuDY1CIgaK3inVFTXUMnAfGJp9E5nBN2BEqgtW9OoDqJHoARl8TxSN/rXwMHsaO0Dw8fKeDd0T6nqmJdprvXuvM9uc2n6Za5T6x5WjNC8LJesVODYpv22XDnH0gpfJJEz1Y7LAjJzs2O5TaeRoRXfCS1YRDOjgEyWr55CMq6Z3QCxALfhb7a42APaNhTvMq+dkA+PH1BgUslKFWJGycUw3OxAzhjKL2OO8AY0TJAwtECWBD6efXV/tcON1ujdjIjxjqPaM0GJB2yJyY8htLgTBEANf7Zr0C1KvYdeqnZ+nGidlVuwb0V1Bh661U8ULfQbBVW/241BnLPXsNfE4vwN4+PLxwzgQeij+Uo/7DbP2jZjASv6tvMJNpGnPmOD/tZ2+F+XuJWQhjEveaZC4RVaVxcZjVNogkOSdfuR6B/G/ZfHJx9a7K0vpzexMLK5VXge5G1y3MiLxiFZVM8viLnf8xe/HTiTE9gRxDDetNWGqdLe6lB4+THphsRw/dCa2wpQkq7SntJe2plRbmzMRYfR54z9CBrxtL9oUr+g4KOApppQ/EXt7q4HBoogbZaQ3JuGgvjK1PITb/1psJ7wnbnebTG5/9cl0VohA+S0H/pjumpl3fQFOQAPhsOQ95SToZrY6sBgyt2gTrPUI/v3yCzqFzQ5zctCzg7g6hIzvkTOV+HkwpD7cLDT166qeMCCJJFfLSAXTX23adqaKvMtUFfwKx9GRI4qJVtVx8V4rZ35G9wDy9relA4gmJGloLI/dvL13/51asgJ6BFT+W2j1aJLLnGfzPmp5knD+5OSp3RxlOLuzJmJHgvmuCHthrRBPcTLIVLtVQWYs57dbr/OLzWwezPp2DOTGgw3/E13cXmdyaUM3cXaLrptYzCVu4OjtL4DAlhc7yMzXwpJpARYUVO1IPTJ+VJlXJtUAXfmFq6fYLEH49bXBYcTSZ5UEaIpK9C7kwJGb6yXfsYn5VfQAFMd9VE3Ug9/MVNqLOOps5ZgbdlXoEf1ufwaLFrGXM+F+2a3hxPOYhUZlM5VqT9S9Wif1a/m1hdVa1VVPA8XJ9KeZFqF6DU+AZPI3IklIenMK8821qO9RKRbeW3p6ryWWpCTs9jy1HZ+lXnxoMZJ+fJY9JOCbyNVbOXWhgbIvIvlF+ULmWDDn9fY5UorQEMDOEIRTJzYS8BgtpdrxT63AZeSw9e0Lb2xfvOO9i4xo7JR715YLfQpOZBp4EKQBJePYOvXUX0+aib8X4P8U6oFeoKW5bPIzROkV1aVIZIGfYnV/qTNc4/+Oq74J723VzjbknB54pceDVvKqoQxOMiXGsJ2RrHmyf0LLmJtls1ubYhxthJrxa3+nU7XX5vWLTwv0LxrFys6bxIc2LCsAWy+AgjwRUeg+VM1b8g2jIrIqRY8H482Ud+4QZFa+Z2k5tE72fZs0d8zaX+IT2rMpuEc4plG0pI7bUOJYYEAWvhBNV3/jUi0dMToS3FX65/niLZeY3M0jLdgJXL94+vTTkBKBDhhF1Zj3jGi5gK+b78mrd8HMvJFpqYSB7DxMefBhLgvrTtD3xE3YbQ5Gm5V3XvHD7OSvckz6Dv4URMt+EiMx2KWKvhmwvE9DVCOPKbiAKmeopKlRuZGpiwVI+3bJRilWmMcoHUZmNWgH4RZTblvhUCr1ZSxkiR1l7NjwgLaweb2zq1HCVndXE9Irga/dofMjDgY7wINdCuBl2zac9iNJAqRNA4w713oLaC94Ydt4ICvfISjTrI3K81wb10CadvbLxi8nDranXDPJ1BlfYPZevepGKcdjZtJpflSRuUqyj8Pwncy/UXCyYzOk9wNt4RgbBe6pRUvR7AuWI/m/34ReKnD3GY/bpf/xJrrVQ6gm4MFaqCft7NXTOHZjwFPuF0ApsArmoSkOr6I4MOZG0xvZKxOXkXeG+Uj9Rj07w280uqU1DIHfREfr+t5ght92TsHW7uU7Sq2xHoWICkl+r5bI3Tk4fh6rqKpLP3rMGe0nfFGoavBuNd1c+/dFy374vipjrgFOVmzhmk4sE3Al/g2cmgnde8EU40qHYedn5qzIdXRCBNXrWo9BCniYKxhrhPQqXFiuHgwGnXXiR9VLRoyMEsPfmm8JfFW89J4JNpchLw5Rf7/j/fHEmI37GF5JOg5GX68pcEClZZXEjbSCfSzB26OxDq6fl94l1lLuKjJ+YTN05UIo4fniy4vn+GjpBMwnBcu9mnvwmTI3nj50s6TxpdlWI7oFac97AqpZtvythsGliW7kCHnz55wsMtnIDTiFLMWtMbU9+wA+xZxJz3BMNBYsuHIoZ9OhyaPJHjr2BY2V5cMAf2lNnQ7V9cGjsyqeWpyILS1nAtQyEINbZaCIpdBpVPz66hota+ajDNSOQ96vEVS9KkUwm9kHTU9Yn+pFLbiQ+uIlIL41h8Vz2NpvaSltQrBvhM5ud4ANxnJRuXdy9zeU7/sLIrqGNXfkQUmFUxleeSypqLwsMrxLxbBddoO7kc+p/DtSmN3i1nFq8DdaMcSr7VtInMJs6KuQU+eyvj+EgLzv22tqHIlvZw3Jf/29cVg57AI4WDfkPt2jYw6lfNrcZIe1b1J5mzehRadtii4iK6S1VEkjjsVQzHQ51JWXv0B6tae4E7rX84JHC2nQfTMaxZx4hxEy+kKGh6t4hpiK1hpDZ5FYAVMUccHv4o/4g2nPIr8DCHSC32aCZz0g0A1Jp/mu8j+8mAOb50YhogiHAgvVPqBeGfNf+huIQ2gcZkqsc+InSXTAso9HcoRXd/8omko0qc45mAgZsQkp6lgL4dz2oVE/M652JQDX58K2/wwuSE990kVzuE8VERZt0kwqTlj8JF2jryjdd0LIUSC/CR4G8ErfG2TJibzjkuWN+UcufqvgO9hIA1DiKe3K4g6wiJzzAIuhb9zDDHTgWRnwCaXJt0B3Br96vWrY9qYWjdC8dN2EYlQavB0QjO+7xUPN1MMGasvr2GdczDbh00fZKgdVhU5f+PZkMY/9snzDSMAthQFJDcRMUFcm6BtoOt4ybvKF/45sDFjh6ObDhuxRfhpF/mVJLMsgncrwF6VxmPMZ0NDI1fWuVOPNkMAa9HJiSs0pi91VokF5KgbA7gZbiR1KwBbxWRvcLjRU9JksXBLmoFVQtGleje5wJ2FdZr2Zu9t9mCQFkj0AAAAAA=";var NH=l1`
  ${y0(zH)}

  :host {
    --moon-texture: url("${y0(IH)}");
  }
`;var y9=10,Vf=3,Lt=14,Lf=75,lf=75,cf=4,Mf=3,WH=2,df=[1.45,.7],UH=90,pf=50,uf=.15,e0=class extends t1{constructor(){super(...arguments);this._isDark=!1;this._containerHeight=0;this._particles=[];this._cloudParticles=[]}connectedCallback(){super.connectedCallback(),this._resizeObserver?.disconnect(),this._resizeObserver=new ResizeObserver(e=>{let i=e[0],o=Math.round(i?.contentRect.height||0);this._containerHeight!==o&&(this._containerHeight=o,this._particles=this.computeParticles())}),this._resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect()}willUpdate(e){if(e.has("hass")){let i=e.get("hass"),o=this.hass?.themes?.darkMode;i?.themes?.darkMode!==o&&(this._isDark=o??!1)}(e.has("config")||e.has("weatherEntity")||e.has("currentForecast"))&&(this._particles=this.computeParticles())}updated(e){e.has("hass")&&this.onThemeChanged(),this.toggleAttribute("has-clouds",this.getActiveEffects().includes("cloud"))}render(){let e=this.getActiveEffects();return e.length?x`
      ${e.map(i=>{switch(i){case"sky":return this.renderSky();case"moon":return this.renderMoon();case"sun":return this.renderSun();case"rain":return this.renderRain();case"snow":return this.renderSnow();case"lightning":return this.renderLightning();case"cloud":return this.renderClouds();default:return Z}})}
    `:Z}computeParticles(){let e=[];return this.getActiveEffects().forEach(o=>{switch(o){case"rain":e.push(...this.computeRainParticles());break;case"snow":e.push(...this.computeSnowParticles());break;case"moon":e.push(...this.computeStarParticles());break;case"sun":e.push(...this.computeSunRayParticles());break;case"cloud":e.push(...this.getStableCloudParticles());break;default:break}}),e}computeSnowParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/y9*Lf),a=Math.max(5,o),n=115/a;for(let s=0;s<a;s++){let V=-15+s*n+I1(0,n*.5),c=Math.random(),p=c*5+2,h=4.5/(c+.5)+I1(0,.8),v=I1(0,5,!0).toFixed(1),g=c*.7+.5,y=c<.3?1.5-c*3:c>.9?.5:0,O=p*.9,k=(10+c*25).toFixed(0),T=(2+Math.random()*2).toFixed(2);i.push({type:"snow",x:`${V.toFixed(1)}%`,delay:v,duration:h.toFixed(1),size:p.toFixed(0),opacity:g.toFixed(1),blur:y.toFixed(1),shadowSpread:O.toFixed(1),driftAmplitude:k,driftFrequency:T})}return i}computeRainParticles(){let e=this.computeIntensity(),i=[],o=Math.round(e/y9*lf),a=Math.max(10,o),n=100/a;for(let s=0;s<a;s++){let V=s*n+I1(0,n*.8),c=I1(.2,.5,!0),p=I1(.4,.7,!0),h=I1(.85,1,!0),v=this._containerHeight*h;i.push({type:"rain",x:`${V.toFixed(1)}%`,delay:c.toFixed(2),duration:p.toFixed(2),landingPosY:v.toFixed(0)})}return i}computeStarParticles(){let e=[];for(let n=0;n<30;n++){let s=n%6,V=Math.floor(n/6),c=100/6,p=30/5,h=I1(s*c+c*.15,(s+1)*c-c*.15),v=I1(V*p+p*.15,(V+1)*p-p*.15),g=I1(1,3),y=I1(.3,1,!0),O=I1(0,5,!0);e.push({type:"star",x:`${h.toFixed(0)}`,y:`${v.toFixed(0)}`,size:`${g}`,opacity:y.toFixed(2),delay:O.toFixed(1)})}return e}getActiveEffects(){let e=this.weatherEntity?.state,i=this.config.show_condition_effects;if(!i||!e)return[];let o=new Set,a=c=>i===!0?!0:Array.isArray(i)?i.includes(c):!1;(e.includes("rainy")||e==="pouring")&&a("rain")&&o.add("rain"),e.includes("snowy")&&a("snow")&&o.add("snow"),e.includes("lightning")&&a("lightning")&&o.add("lightning");let n=e==="sunny"||e==="clear-night",s=e==="cloudy",V=e==="partlycloudy";return(n||V||s)&&a("sky")&&o.add("sky"),(n||V)&&(this.isNightTime()?a("moon")&&o.add("moon"):a("sun")&&o.add("sun")),(s||V)&&a("cloud")&&o.add("cloud"),Array.from(o)}isNightTime(){return this.weatherEntity?.state==="clear-night"?!0:this.config.forecast?.show_sun_times?P0(this.hass,new Date)?.isNightTime??!1:!1}renderSky(){let e=this.isNightTime()?"night-sky":"sky",i=this.weatherEntity?.state==="cloudy";return x`<div class="${i?`${e} overcast`:e}"></div>`}renderSun(){let e=this._particles.filter(i=>i.type==="sunray");return x`
      <div class="sun">
        <div class="ray-box">
          ${e.map(i=>x`<div
                class="sun-ray"
                style="${t5({transform:`translate(-50%, 0) rotate(${i.angle}deg)`,height:`${i.height}px`,width:`${i.width}px`})}"
              ></div>`)}
        </div>
      </div>
    `}computeSunRayParticles(){return Array.from({length:30}).map(()=>({type:"sunray",angle:`${I1(0,360)}`,height:`${I1(100,200)}`,width:`${I1(5,15)}`}))}getStableCloudParticles(){let i=`${this.weatherEntity?.state==="cloudy"?"overcast":"partly"}:${this.isNightTime()}`;return(i!==this._cloudSignature||!this._cloudParticles.length)&&(this._cloudParticles=this.computeCloudParticles(),this._cloudSignature=i),this._cloudParticles}computeCloudParticles(){let e=this.weatherEntity?.state==="cloudy",i=this.isNightTime(),o=e?cf:Mf,a=100/o,n=[];for(let s=0;s<o;s++){let V=s%WH,c=V===0,p=s*a+I1(0,a*.5)-a*.25,h=e?c?I1(140,200):I1(215,285):c?I1(110,165):I1(180,240),v=h*I1(.38,.5,!0),g=e?c?I1(-26,-12):I1(-16,-2):c?I1(-10,4):I1(-4,12),y=e?c?I1(.36,.5,!0):I1(.5,.64,!0):c?I1(.68,.8,!0):I1(.82,.92,!0);i&&(y*=.7),n.push({type:"cloud",variant:e?"grey":"white",night:i,layer:V,shape:I1(1,5),flip:I1(0,1)===1,x:p.toFixed(1),y:g.toFixed(0),width:h.toFixed(0),height:v.toFixed(0),opacity:y.toFixed(2)})}return n}computeCloudDrift(){let e=this.currentForecast,i=e&&G4(this.hass,this.weatherEntity,e)||0,o=Math.min(i,Lt)/Lt,a=e?V8(e):void 0,n=a!==void 0?-Math.sin(a*Math.PI/180):0,s=Math.max(uf,o*Math.abs(n));return{duration:UH-s*(UH-pf),driftRight:n>=0}}renderCloudFilter(){return x`
      <svg class="cloud-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <filter
            id="wsfc-cloud-rough"
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.018"
              numOctaves="5"
              seed="7"
              stitchTiles="stitch"
              result="noise"
            ></feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="42"
              xChannelSelector="R"
              yChannelSelector="G"
              result="disp"
            ></feDisplacementMap>
            <feGaussianBlur in="disp" stdDeviation="0.6"></feGaussianBlur>
          </filter>
        </defs>
      </svg>
    `}renderClouds(){let e=this._particles.filter(n=>n.type==="cloud");if(!e.length)return Z;let{duration:i,driftRight:o}=this.computeCloudDrift(),a=n=>{let s=["cloud",`cloud-shape-${n.shape}`,n.variant==="grey"?"grey":"",n.night?"night":""].filter(Boolean).join(" ");return x`<div
        class="${s}"
        style="${t5({left:`${n.x}%`,top:`${n.y}px`,width:`${n.width}px`,height:`${n.height}px`,opacity:n.opacity,transform:n.flip?"scaleX(-1)":"none"})}"
      >
        <div class="cloud-puffs"></div>
        <div class="cloud-shade"></div>
      </div>`};return x`
      ${this.renderCloudFilter()}
      ${Array.from({length:WH},(n,s)=>{let V=e.filter(p=>p.layer===s);if(!V.length)return Z;let c=Math.round(i*(df[s]??1)/5)*5;return x`<div
          class="cloud-track ${o?"drift-right":""}"
          style="${t5({"--cloud-drift-duration":`${c}s`})}"
        >
          <div class="cloud-set">${V.map(a)}</div>
          <div class="cloud-set cloud-set-second">
            ${V.map(a)}
          </div>
        </div>`})}
    `}renderSnow(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle()}deg`),this._particles.filter(e=>e.type==="snow").map(e=>x`
        <div
          class="snowflake-path"
          style="${t5({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--flake-size":`${e.size}px`,"--flake-opacity":e.opacity,"--flake-blur":`${e.blur}px`,"--flake-shadow-spread":`${e.shadowSpread}px`,"--drift-amplitude":`${e.driftAmplitude}px`,"--drift-frequency":e.driftFrequency})}"
        >
          <div class="snowflake"></div>
        </div>
      `)}renderRain(){return this.style.setProperty("--container-height",`${this._containerHeight}px`),this.style.setProperty("--fall-angle",`${this.computeFallingAngle(!0)}deg`),this._particles.filter(e=>e.type==="rain").map(e=>x`
        <div
          class="raindrop-path"
          style="${t5({"--duration":`${e.duration}s`,"--delay":`${e.delay}s`,"--pos-x":e.x,"--landing-pos-y":`${e.landingPosY}px`})}"
        >
          <div class="raindrop"></div>
          <div class="splat"></div>
        </div>
      `)}renderLightning(){return x` <div class="lightning-flash"></div> `}renderMoon(){let e=this.config.show_moon_phase===!1?null:pa(this.hass,new Date);return x`
      ${this._particles.filter(i=>i.type==="star").map(i=>x`
          <div
            class="star"
            style="${t5({left:`${i.x}%`,top:`${i.y}%`,width:`${i.size}px`,height:`${i.size}px`,opacity:i.opacity,animationDelay:`${i.delay}s`})}"
          ></div>
        `)}
      <div class="moon-body">
        ${this.renderMoonGlow(e)}
        <div class="moon">${this.renderMoonPhase(e)}</div>
      </div>
    `}renderMoonGlow(e){let i=e?_e(e.fraction,e.litRight):_e(1,!0);return x`
      <div class="moon-glow">
        <svg
          viewBox="0 0 100 100"
          width="100"
          height="100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d=${i}></path>
        </svg>
      </div>
    `}renderMoonPhase(e){return e?x`
      <svg
        class="moon-phase"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d=${ua(e.fraction,e.litRight)}></path>
      </svg>
    `:Z}computeIntensity(){let e=this.currentForecast?.precipitation||0;if(e>0){let i=m5(this.hass,this.weatherEntity,"precipitation"),o=W7(i,"hourly");if(o>0){let a=e/o*y9;return Math.min(y9,Math.ceil(a))}}return this.weatherEntity?.state==="pouring"?y9:Vf}computeFallingAngle(e=!1){let i=this.currentForecast;if(i?.wind_bearing===void 0||i?.wind_speed===void 0)return 0;let o=G4(this.hass,this.weatherEntity,i)||0,a=e?15:35,n=Math.min(o,Lt)/Lt,s=i.wind_bearing*Math.PI/180,V=Math.sin(s),p=Math.pow(n,e?.8:.5);return V*p*a}onThemeChanged(){this.classList.toggle("dark",this._isDark),this.classList.toggle("light",!this._isDark)}};e0.styles=NH,Q([i1({attribute:!1})],e0.prototype,"hass",2),Q([i1({attribute:!1})],e0.prototype,"weatherEntity",2),Q([i1({attribute:!1})],e0.prototype,"currentForecast",2),Q([i1({attribute:!1})],e0.prototype,"config",2),Q([J2()],e0.prototype,"_isDark",2),Q([J2()],e0.prototype,"_containerHeight",2),e0=Q([n2("wsfc-animation-provider")],e0);var jH={type:"custom:weather-forecast-card",show_current:!0,show_forecast:!0,default_forecast:"daily",forecast_types:"both",forecast:{mode:"simple",show_sun_times:!0,use_color_thresholds:!0,scroll_to_selected:!0},forecast_action:{tap_action:{action:"toggle-forecast"},hold_action:{action:"select-forecast-attribute"}},tap_action:{action:"more-info"}},hf=1e3,p2=class extends t1{constructor(){super(...arguments);this._currentForecastType="daily";this._isScrollable=!1;this._subscriptionRequestId=0;this._subscriptionGeneration=0;this._subscribed=!1;this._resizeObserver=null;this.handleVisibilityChange=()=>{document.hidden?this.suspendForecastSubscriptions():this.resumeForecastSubscriptions()};this.onForecastAction=e=>{if(!this.config)return;let i=e.detail.action;i==="tap"&&this.config.forecast_action?.tap_action?.action==="toggle-forecast"||i==="hold"&&this.config.forecast_action?.hold_action?.action==="toggle-forecast"||i==="double_tap"&&this.config.forecast_action?.double_tap_action?.action==="toggle-forecast"?this._toggleForecastView(e.detail.selectedForecast??void 0):W4(this,this.hass,{entity:this.config.entity,tap_action:this.config.forecast_action?.tap_action,hold_action:this.config.forecast_action?.hold_action,double_tap_action:this.config.forecast_action?.double_tap_action},e.detail.action)};this.onCardAction=e=>{W4(this,this.hass,this.config,e.detail.action)}}static async getConfigElement(){return document.createElement("wsfc-flex-core-editor")}static getStubConfig(e){let i=Object.keys(e?.states??{}).filter(a=>a.startsWith("weather.")),o=i.find(a=>a==="weather.home")||i[0]||"";return{...jH,entity:o}}setConfig(e){if(!e||!e.entity)throw new Error("entity is required");if(e.show_current===!1&&e.show_forecast===!1)throw new Error("At least one of show_current or show_forecast must be true");if(e.forecast?.daily_slots!=null&&e.forecast.daily_slots<=0)throw new Error("daily_slots must be greater than 0");if(e.forecast?.hourly_slots!=null&&e.forecast.hourly_slots<=0)throw new Error("hourly_slots must be greater than 0");if(e.current?.temperature_precision!=null&&(e.current.temperature_precision<0||e.current.temperature_precision>q3)||e.forecast?.temperature_precision!=null&&(e.forecast.temperature_precision<0||e.forecast.temperature_precision>q3))throw new Error(`temperature_precision must be 0 or greater and at most ${q3}`);let i={...e};e.temperature_entity&&(e.current?.temperature_entity||(i.current={...e.current,temperature_entity:e.temperature_entity}),delete i.temperature_entity),this.config=N3({},jH,i),this._currentForecastType=this.config.default_forecast||"daily"}getGridOptions(){let{rows:e,minRows:i,minColumns:o}=this.computeRowSizing();return{columns:12,rows:e,min_rows:i,min_columns:o}}getCardSize(){return this.computeRowSizing().rows}computeRowSizing(){let e=this.config?.show_current!==!1,i=this.config?.show_forecast!==!1,o=this.config?.forecast?.mode==="chart",a=1,n=1;return e&&(a+=2,n+=2,this.config?.current?.show_attributes&&(a+=1)),i&&(o?(a+=3,n+=3):(a+=2,n+=2)),{rows:a,minRows:n,minColumns:e&&i?6:4}}connectedCallback(){super.connectedCallback(),this.clearDisconnectUnsubscribeTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange),this._minForecastItemWidth=this.computeInitialMinForecastItemWidth(),this.waitForLayout(),this.hasUpdated&&this.config&&this.hass&&!this._subscribed&&!document.hidden&&this.subscribeForecastEvents()}disconnectedCallback(){super.disconnectedCallback(),this.scheduleDisconnectUnsubscribe(),this._resizeObserver?.disconnect(),this._resizeObserver=null,this._currentItemWidth=0}shouldUpdate(e){return Ha(this,e,!1)||this.hasReferencedCurrentEntityChanged(e)||e.has("_dailyForecastEvent")||e.has("_hourlyForecastEvent")||e.has("_currentForecastType")||e.has("_currentItemWidth")||e.has("_isScrollable")}updated(e){super.updated(e),!(!this.config||!this.hass)&&this.isConnected&&(this.haveForecastSubscriptionInputsChanged(e)&&(this._subscribed=!1),!this._subscribed&&!document.hidden&&this.subscribeForecastEvents(),e.has("_currentForecastType")&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth))}render(){if(!this.config||!this.hass)return Z;let e=this.config.entity,i=this.hass.states[e];if(!i)return x`<hui-warning>
        ${la(this.hass,e)}
      </hui-warning>`;let o=P5(i)==="twice_daily",a=this.config.forecast?.mode==="chart",n=this.getCurrentForecast();return x`
      <ha-card>
        ${this.config.show_condition_effects?x`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${i}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData?.[0]}
            ></wsfc-animation-provider>`:Z}
        <div class="wsfc-container">
          ${this.config.show_current?x`<div
                class="wsfc-current-weather-container"
                .actionHandler=${c0({hasHold:T0(this.config.hold_action),hasDoubleClick:T0(this.config.double_tap_action)})}
                @action=${this.onCardAction}
              >
                <wsfc-current-weather
                  .hass=${this.hass}
                  .weatherEntity=${i}
                  .config=${this.config}
                  .hourlyForecast=${this._hourlyForecastData}
                  .dailyForecast=${this._dailyForecastData}
                ></wsfc-current-weather>
              </div>`:Z}
          ${this.config.show_forecast===!1?Z:x`<div class="wsfc-forecast-container">
                ${a?x`<wsfc-forecast-chart
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${n}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .itemWidth=${this._currentItemWidth}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-chart>`:x`<wsfc-forecast-simple
                      @action=${this.onForecastAction}
                      .hass=${this.hass}
                      .config=${this.config}
                      .weatherEntity=${i}
                      .forecast=${n}
                      .forecastType=${this._currentForecastType}
                      .isTwiceDailyEntity=${o}
                      .isScrollable=${this._isScrollable}
                    ></wsfc-forecast-simple>`}
              </div>`}
        </div>
      </ha-card>
    `}waitForLayout(){if(!this.isConnected)return;(this._forecastContainer?.clientWidth||0)>0?this.initResizeObserver():requestAnimationFrame(()=>this.waitForLayout())}initResizeObserver(){this._resizeObserver||!this._forecastContainer||(this._resizeObserver=new ResizeObserver(e=>{for(let i of e)i.contentRect.width>0&&this.layoutForecastItems(i.contentRect.width)}),this._resizeObserver.observe(this._forecastContainer),this.layoutForecastItems(this._forecastContainer.clientWidth))}computeInitialMinForecastItemWidth(){let e=getComputedStyle(this),i=parseInt(e.getPropertyValue("--wfc-min-item-width-simple"))||65,o=parseInt(e.getPropertyValue("--wfc-min-item-width-chart"))||55;return this.config?.forecast?.mode==="simple"?i:o}processForecastData(){if(!this._dailyForecastEvent&&!this._hourlyForecastEvent)return;let e=this.hass.states[this.config.entity],{attributes:i}=e;if(!i)return;let o=this._hourlyForecastData?.length,a=this._dailyForecastData?.length,n=Fe(i,this._hourlyForecastEvent,"hourly"),s=Fe(i,this._dailyForecastEvent,P5(e));if(!n&&!s)return;this._dailyForecastData=s?.forecast,this._dailyForecastData&&this.config?.forecast?.daily_slots!=null&&(this._dailyForecastData=this._dailyForecastData.slice(0,this.config.forecast.daily_slots));let V=this.config?.forecast?.hourly_group_size||0;V>1&&n?.forecast?this._hourlyForecastData=Za(n.forecast,V):this._hourlyForecastData=n?.forecast,this._hourlyForecastData&&this.config?.forecast?.hourly_slots!=null&&(this._hourlyForecastData=this._hourlyForecastData.slice(0,this.config.forecast.hourly_slots));let c=this.getCurrentForecast();if(!c||c.length===0){let v=this._dailyForecastEvent!=null&&this._hourlyForecastEvent!=null,g=P5(e),y=g!==void 0,O=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily";(v||this._currentForecastType==="hourly"&&!j4(e,"hourly")||O&&!y)&&(this._currentForecastType==="hourly"&&this._dailyForecastData?(U5.debug("No hourly forecast data available, switching to daily forecast"),this._currentForecastType=g||"daily"):O&&this._hourlyForecastData&&(U5.debug("No daily forecast data available, switching to hourly forecast"),this._currentForecastType="hourly"))}let p=this.getCurrentForecast().length,h=(this._currentForecastType==="hourly"?o:a)??0;p!==h&&this._forecastContainer&&this.layoutForecastItems(this._forecastContainer.clientWidth)}_toggleForecastView(e){let i=this._currentForecastType==="daily"||this._currentForecastType==="twice_daily",o=i,a=o?this._hourlyForecastData:this._dailyForecastData,n=this.hass?.states[this.config.entity],s=P5(n)||"daily";if(!a||a.length===0){U5.debug(`Cannot toggle to ${o?"hourly":s} forecast - no data available`);return}this._currentForecastType=i?"hourly":s,!(!e||!this.config?.forecast?.scroll_to_selected)&&requestAnimationFrame(()=>{if(o)this.scrollToForecastItem(e);else{let V=this._dailyForecastData?.[0];V&&this.scrollToForecastItem(V,"instant")}})}scrollToForecastItem(e,i="smooth"){if(!this._forecastContainer)return;let o=this._forecastContainer.querySelector(".wsfc-scroll-container");if(!o)return;let a=B7(e.datetime),n=this.getCurrentForecast(),s=n.findIndex(h=>B7(h.datetime)===a),V=s!==-1?s:n.length-1,c=this._currentItemWidth||0,p=V*c;o.scrollTo({left:p,behavior:i})}async unsubscribeForecastEvents(){this.clearDisconnectUnsubscribeTimer(),this._subscriptionGeneration+=1;let e=this._dailySubscription,i=this._hourlySubscription;this._subscribed=!1,this._dailySubscription=void 0,this._hourlySubscription=void 0,this.isConnected||document.removeEventListener("visibilitychange",this.handleVisibilityChange),await Promise.all([this.unsubscribeForecastSubscription(e,"daily"),this.unsubscribeForecastSubscription(i,"hourly")])}scheduleDisconnectUnsubscribe(){this.clearDisconnectUnsubscribeTimer(),this._disconnectUnsubscribeTimer=window.setTimeout(()=>{this._disconnectUnsubscribeTimer=void 0,this._subscriptionRequestId+=1,this.unsubscribeForecastEvents()},hf)}clearDisconnectUnsubscribeTimer(){this._disconnectUnsubscribeTimer!==void 0&&(window.clearTimeout(this._disconnectUnsubscribeTimer),this._disconnectUnsubscribeTimer=void 0)}suspendForecastSubscriptions(){!this._subscribed&&this._disconnectUnsubscribeTimer===void 0||(this._subscriptionRequestId+=1,this.unsubscribeForecastEvents())}resumeForecastSubscriptions(){this.isConnected&&this.config&&this.hass&&!this._subscribed&&this.subscribeForecastEvents()}async unsubscribeForecastSubscription(e,i){if(e)try{let o=await e;if(!o)return;await o()}catch(o){if(Te(o))return;U5.warn(`Error unsubscribing from ${i} forecast:`,o)}}createForecastSubscription(e,i,o){return Promise.resolve(ba(this.hass,this.config.entity,e,i)).catch(a=>{if(va(a)){setTimeout(o,2e3);return}Te(a)||U5.warn(`Error subscribing to ${e} forecast:`,a)})}async subscribeForecastEvents(){let e=++this._subscriptionRequestId;if(await this.unsubscribeForecastEvents(),e!==this._subscriptionRequestId)return;let i=this._subscriptionGeneration;if(!this.isConnected||!this.hass||!this.config||!this.hass.config.components.includes("weather")||!this.hass.states[this.config.entity]||this.config.show_forecast===!1)return;if(!Sa(this.hass.states[this.config.entity])){U5.warn("Weather entity does not support forecast. Cannot display forecast data.");return}this._subscribed=!0;let o=this.hass.states[this.config.entity],a=this.config.forecast_types??"both",n=a!=="hourly",s=a!=="daily",V=P5(o);V==="twice_daily"&&this._currentForecastType==="daily"&&(this._currentForecastType="twice_daily"),!n&&this._currentForecastType!=="hourly"?this._currentForecastType="hourly":!s&&this._currentForecastType==="hourly"&&(this._currentForecastType=V||"daily"),V&&n&&(this._dailySubscription=this.createForecastSubscription(V,c=>{this.shouldHandleForecastEvent(i)&&(this._dailyForecastEvent=c,this.processForecastData())},()=>{this._dailyForecastEvent=void 0})),s&&j4(o,"hourly")&&(this._hourlySubscription=this.createForecastSubscription("hourly",c=>{this.shouldHandleForecastEvent(i)&&(this._hourlyForecastEvent=c,this.processForecastData())},()=>{this._hourlyForecastEvent=void 0}))}getCurrentForecast(){return(this._currentForecastType==="hourly"?this._hourlyForecastData:this._dailyForecastData)||[]}layoutForecastItems(e){if(e<=0||!this._minForecastItemWidth||!this._haCard)return;let i=this.getCurrentForecast();if(!i.length)return;let o=Math.max(1,Math.floor(e/this._minForecastItemWidth)),a=Math.floor(e/o),n=i.length,s=n*a,V=e-s,c=V>0?V/(n-1):0;this._currentItemWidth=a+c,this._isScrollable=i.length>o,this._haCard.style.setProperty("--forecast-item-gap",`${c}px`),this._haCard.style.setProperty("--forecast-item-width",`${a}px`)}haveWeatherUnitsChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:Object.values(Ee).some(s=>a.attributes[s]!==n.attributes[s])}haveForecastSubscriptionInputsChanged(e){return e.has("config")||this.haveWeatherUnitsChanged(e)||this.haveForecastFeaturesChanged(e)||this.hasWeatherEntityAvailabilityChanged(e)||this.hasConnectionBeenReestablished(e)}hasConnectionBeenReestablished(e){if(!e.has("hass"))return!1;let i=e.get("hass"),o=this.hass;return i?.connected===!1&&o?.connected===!0}shouldHandleForecastEvent(e){return this._subscribed&&e===this._subscriptionGeneration}haveForecastFeaturesChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!i||!o)return!1;let a=i.states[this.config.entity],n=o.states[this.config.entity];return!a||!n?!1:a.attributes.supported_features!==n.attributes.supported_features}hasWeatherEntityAvailabilityChanged(e){if(!e.has("hass")||!this.config?.entity)return!1;let i=e.get("hass"),o=this.hass;if(!o)return!1;let a=i?.states[this.config.entity],n=o.states[this.config.entity];return!!a!=!!n}hasReferencedCurrentEntityChanged(e){if(!e.has("hass")||!this.config)return!1;let i=e.get("hass"),o=this.hass;return!i||!o?!1:ha(this.config).some(a=>i.states[a]!==o.states[a])}};p2.styles=Ca,Q([i1({attribute:!1})],p2.prototype,"hass",2),Q([J2()],p2.prototype,"config",2),Q([J2()],p2.prototype,"_dailyForecastEvent",2),Q([J2()],p2.prototype,"_hourlyForecastEvent",2),Q([J2()],p2.prototype,"_currentItemWidth",2),Q([J2()],p2.prototype,"_currentForecastType",2),Q([J2()],p2.prototype,"_isScrollable",2),Q([N4("ha-card")],p2.prototype,"_haCard",2),Q([N4(".wsfc-forecast-container")],p2.prototype,"_forecastContainer",2);var v0=_4(U4(),1);var GH="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";var qH="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z";var ff={humidity:"humidity",pressure:["pressure","atmospheric_pressure"],wind_speed:"wind_speed",wind_gust_speed:"wind_speed",visibility:"distance",dew_point:"temperature",apparent_temperature:"temperature",uv_index:void 0,ozone:void 0,cloud_coverage:void 0},r0=class extends t1{constructor(){super(...arguments);this._schema=o3((e,i,o)=>[...this._genericSchema(e),...this._currentWeatherSchema(e),...this._forecastSchema(e),...this._interactionsSchema(o),...this._attributeEntitiesSchema(i),...this._advancedSchema()]);this._genericSchema=e=>[{name:"entity",required:!0,selector:{entity:{domain:"weather"}},optional:!1},{name:"name",selector:{text:{}},optional:!0},{name:"forecast_mode",default:"show_both",selector:{select:{options:[{value:"show_both",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_both")},{value:"show_current",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_current")},{value:"show_forecast",label:e("ui.panel.lovelace.editor.card.weather-forecast.show_only_forecast")}]}}},{name:"default_forecast",default:"daily",optional:!0,selector:{select:{options:[{value:"hourly",label:e("ui.panel.lovelace.editor.card.weather-forecast.hourly")},{value:"daily",label:e("ui.panel.lovelace.editor.card.weather-forecast.daily")}]}}},{name:"show_condition_effects",default:!1,optional:!0,selector:{select:{multiple:!0,options:H8.map(i=>({value:i,label:T5(i)}))}}},{name:"show_moon_phase",selector:{boolean:{}},default:!0,optional:!0}];this._currentWeatherSchema=e=>[{name:"current.temperature_entity",selector:{entity:{domain:"sensor",device_class:"temperature"}},optional:!0},{name:"current.show_attributes",default:!1,optional:!0,selector:{select:{multiple:!0,options:U2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||T5(i).replace(/_/g," ")}))}}},{name:"current.secondary_info_attribute",default:"none",optional:!0,selector:{select:{options:U2.map(i=>({value:i,label:e(`ui.card.weather.attributes.${i}`)||T5(i).replace(/_/g," ")}))}}}];this._forecastSchema=e=>[{name:"forecast.mode",default:"simple",selector:{select:{options:[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}]}},optional:!0},{name:"forecast.default_chart_attribute",selector:{select:{mode:"dropdown",options:s8.map(i=>({value:i,label:i==="temperature_and_precipitation"?`${e("ui.card.weather.attributes.temperature")||"Temperature"}, ${e("ui.card.weather.attributes.precipitation")||"Precipitation"}`:e(`ui.card.weather.attributes.${i}`)||T5(i).replace(/_/g," ")}))}},optional:!0},{name:"forecast.extra_attribute",optional:!0,selector:{select:{mode:"dropdown",options:[{value:"none",label:e("ui.panel.lovelace.editor.card.weather-forecast.none")||"(no attribute)"},{value:"wind_bearing",label:e("ui.card.weather.attributes.wind_bearing")||"Wind bearing"},{value:"wind_direction",label:e("ui.card.weather.attributes.wind_direction")||"Wind direction"},{value:"precipitation_probability",label:e("ui.card.weather.attributes.precipitation_probability")||"Precipitation probability"},{value:"uv_index",label:e("ui.card.weather.attributes.uv_index")||"UV index"}]}}},{name:"forecast.scroll_to_selected",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_sun_times",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.use_color_thresholds",selector:{boolean:{}},default:!0,optional:!0},{name:"forecast.show_attribute_selector",selector:{boolean:{}},default:!1,optional:!0},{name:"forecast.hourly_group_size",optional:!0,selector:{number:{min:1,max:4}},default:1},{name:"forecast.hourly_slots",optional:!0,selector:{number:{min:1}}},{name:"forecast.daily_slots",optional:!0,selector:{number:{min:1}}}];this._interactionsSchema=e=>{let i=[],o=[{name:"forecast_action.tap_action",selector:{ui_action:{default_action:"toggle-forecast"}}}];return e==="chart"?(i.push("double_tap_action"),o.push({name:"forecast_action.hold_action",selector:{ui_action:{default_action:"select-forecast-attribute"}}})):i.push("hold_action","double_tap_action"),o.push({name:"",type:"optional_actions",flatten:!0,schema:i.map(a=>({name:`forecast_action.${a}`,selector:{ui_action:{default_action:"none"}}}))}),[{name:"forecast_interactions",type:"expandable",flatten:!0,schema:o},{name:"interactions",type:"expandable",flatten:!0,schema:[{name:"tap_action",selector:{ui_action:{default_action:"more-info"}}},{name:"",type:"optional_actions",flatten:!0,schema:["hold_action","double_tap_action"].map(a=>({name:a,selector:{ui_action:{default_action:"none"}}}))}]}]};this._attributeEntitiesSchema=e=>e.length===0?[]:[{name:"attribute_entities",type:"expandable",flatten:!0,schema:e.flatMap(o=>{let a=ff[o];return[{name:`current.attribute_entity_${o}`,optional:!0,selector:a?{entity:{domain:"sensor",device_class:a}}:{entity:{domain:"sensor"}}},{name:`current.attribute_label_${o}`,optional:!0,selector:{text:{}}},{name:`current.attribute_icon_${o}`,optional:!0,selector:{icon:{}}}]})}];this._advancedSchema=()=>[{name:"advanced_settings",type:"expandable",flatten:!0,schema:[{name:"forecast_types",default:"both",optional:!0,selector:{select:{options:[{value:"both",label:"Hourly and daily"},{value:"daily",label:"Daily only"},{value:"hourly",label:"Hourly only"}]}}},{name:"icons_path",selector:{text:{}},optional:!0},{name:"current.temperature_precision",optional:!0,selector:{number:{min:0,max:q3}}},{name:"forecast.temperature_precision",optional:!0,selector:{number:{min:0,max:q3}}}]}];this._computeCustomAttributeLabel=e=>{switch(e.name){case"entity":return this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"Entity";case"label":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name")||"Name";case"icon":return this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")||"Icon";default:return e.name}};this._addCustomAttribute=()=>{let e=a7(this._config.current?.show_attributes);this._commitCustomAttributes([...e,{}])};this._removeCustomAttribute=e=>{let i=a7(this._config.current?.show_attributes);i.splice(e,1),this._commitCustomAttributes(i)};this._customAttributeChanged=(e,i)=>{i.stopPropagation();let o=a7(this._config.current?.show_attributes);o[e]=i.detail.value,this._commitCustomAttributes(o)};this._computeLabel=e=>{if(e.name.startsWith("current.attribute_label_")){let o=e.name.replace("current.attribute_label_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||T5(o).replace(/_/g," ")} label`}if(e.name.startsWith("current.attribute_icon_")){let o=e.name.replace("current.attribute_icon_","");return`${this.localize(`ui.card.weather.attributes.${o}`)||T5(o).replace(/_/g," ")} icon`}if(e.name.startsWith("current.attribute_entity_")){let o=e.name.replace("current.attribute_entity_",""),a=this.localize(`ui.card.weather.attributes.${o}`)||T5(o).replace(/_/g," "),n=(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase();return`${a} ${n}`}let i=e.name.startsWith("forecast_action.")?e.name.split(".")[1]:e.name;switch(i){case"entity":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")} (${(this.hass.localize("ui.panel.lovelace.editor.card.config.required")||"required").toLocaleLowerCase()})`;case"name":return this.hass.localize("ui.panel.lovelace.editor.card.generic.name");case"current.temperature_entity":return`${this.hass.localize("ui.card.weather.attributes.temperature")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")||"entity").toLocaleLowerCase()}`;case"forecast_mode":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.weather_to_show");case"default_forecast":return this.hass.localize("ui.panel.lovelace.editor.card.weather-forecast.forecast_type");case"forecast_types":return"Forecast types to load";case"icons_path":return"Path to custom icons";case"current.show_attributes":return this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute";case"current.secondary_info_attribute":return this.hass.localize("ui.panel.lovelace.editor.card.generic.secondary_info_attribute")||"Secondary info attribute";case"forecast.extra_attribute":return`Extra ${(this.hass.localize("ui.card.weather.forecast")||"forecast").toLocaleLowerCase()} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute").toLocaleLowerCase()}`;case"forecast.mode":return"Forecast display mode";case"current.temperature_precision":return"Current temperature precision";case"forecast.temperature_precision":return"Forecast temperature precision";case"forecast.scroll_to_selected":return"Scroll to selected forecast";case"forecast.show_sun_times":return"Show sunrise and sunset times";case"forecast.use_color_thresholds":return"Use color thresholds";case"forecast.show_attribute_selector":return"Show forecast attribute selector";case"forecast.default_chart_attribute":return"Default chart forecast attribute";case"forecast.hourly_group_size":return"Hourly forecast group size";case"forecast.hourly_slots":return"Hourly forecast slots";case"forecast.daily_slots":return"Daily forecast slots";case"forecast_interactions":return`${this.hass.localize("ui.card.weather.forecast")} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.interactions")||"interactions").toLocaleLowerCase()}`;case"advanced_settings":return this.hass.localize("ui.dialogs.helper_settings.generic.advanced_settings");case"show_condition_effects":return"Show condition effects";case"show_moon_phase":return"Show moon phase";case"attribute_entities":return`${this.hass.localize("ui.panel.lovelace.editor.card.generic.attribute")||"attribute"} ${(this.hass.localize("ui.panel.lovelace.editor.card.generic.entities")||"entities").toLocaleLowerCase()}`;default:return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${i}`)}};this._computeHelper=e=>{switch(e.name){case"current.temperature_entity":return"Optional temperature sensor entity to override the weather entity's temperature.";case"default_forecast":return"Select the default forecast type to show when forecasts are enabled. Users can still toggle between hourly and daily forecasts if both are available.";case"forecast_types":return"Limit which forecast types the card subscribes to. Loading only the forecast you display reduces websocket load, which can prevent dashboard slowdowns on resource-constrained devices.";case"current.show_attributes":return"Select which weather attributes to display in the current weather section.";case"current.secondary_info_attribute":return"Select a weather attribute to display as secondary information in the current weather section.";case"forecast.extra_attribute":return"Select an extra attribute to display below each forecast.";case"forecast_interactions":return"Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.";case"interactions":return"Action to perform when the non-forecast area of the card is interacted with.";case"icons_path":return"Path to custom weather condition icons (e.g., /local/img/weather).";case"forecast.scroll_to_selected":return"Automatically scrolls to the first hourly forecast of the selected date when switching to hourly view, and returns to the first daily entry when switching back.";case"forecast.show_sun_times":return"Displays sunrise and sunset times in the hourly forecast, and uses specific icons to visualize clear night conditions.";case"forecast.use_color_thresholds":return"Replaces solid temperature lines with a gradient based on actual values when using forecast chart mode.";case"forecast.show_attribute_selector":return"When enabled and using chart mode, shows a selector above the forecast to choose which weather attribute to display.";case"forecast.default_chart_attribute":return"The forecast attribute to visualize by default in chart mode.";case"forecast.hourly_group_size":return"Aggregate hourly forecast data into groups to reduce the number of forecast entries shown.";case"forecast.hourly_slots":return"Limit the number of hourly forecast entries to show.";case"forecast.daily_slots":return"Limit the number of daily forecast entries to show.";case"current.temperature_precision":return"The number of decimal places to show for current temperature values.";case"forecast.temperature_precision":return"The number of decimal places to show for forecast temperature values.";case"name":return"Overrides the friendly name of the entity.";case"show_condition_effects":return"Select which weather conditions initiate visual effects and animations on the card.";case"show_moon_phase":return"Shades the night-time moon to match the current lunar phase based on your Home Assistant location. Disable to always show a full moon.";case"attribute_entities":return"Override weather attribute values with custom sensor entities.";default:return}};this.localize=e=>{let i;if(this._config?.entity&&e!=="ui.card.weather.attributes.precipitation"&&e.startsWith("ui.card.weather.attributes")){let o=this.hass.states[this._config.entity];o&&(i=this.hass.formatEntityAttributeName(o,e.replace("ui.card.weather.attributes.","")))}return i||(i=this.hass.localize(e)),i}}setConfig(e){this._config=e}render(){if(!this.hass||!this._config)return Z;let e=lt(this._config),i=this._getSelectedAttributes(e),o=this._schema(this.localize.bind(this),i,e["forecast.mode"]);return x`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${o}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      >
      </ha-form>
      ${this._renderCustomAttributes()}
    `}_renderCustomAttributes(){let e=a7(this._config.current?.show_attributes);return x`
      <ha-expansion-panel outlined>
        <div slot="header" role="heading" aria-level="3">
          Custom entity attributes
        </div>
        <div class="custom-attributes">
          <p>
            Display any entity's state as an attribute. Pick an entity and
            optionally override its label and icon.
          </p>
          ${e.map((i,o)=>this._renderCustomAttributeRow(i,o))}
          <ha-button
            size="small"
            appearance="filled"
            variant="brand"
            @click=${this._addCustomAttribute}
          >
            <ha-svg-icon slot="start" .path=${qH}></ha-svg-icon>
            ${this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}_renderCustomAttributeRow(e,i){return x`
      <div class="custom-attribute-row">
        <ha-form
          .hass=${this.hass}
          .data=${e}
          .schema=${Af}
          .computeLabel=${this._computeCustomAttributeLabel}
          @value-changed=${o=>this._customAttributeChanged(i,o)}
        ></ha-form>
        <ha-icon-button
          .path=${GH}
          .label=${this.hass.localize("ui.common.remove")||"Remove"}
          @click=${()=>this._removeCustomAttribute(i)}
        ></ha-icon-button>
      </div>
    `}_commitCustomAttributes(e){let i={...this._config,current:{...this._config.current,show_attributes:xf(this._config.current?.show_attributes,e)}};a2(this,"config-changed",{config:i})}_getSelectedAttributes(e){let i=e["current.show_attributes"];return i?Array.isArray(i)?i.map(o=>typeof o=="string"?o:o.name):[]:[]}_valueChanged(e){e.stopPropagation();let i=e.detail.value;i.forecast_mode==="show_both"?(i.show_current=!0,i.show_forecast=!0):i.forecast_mode==="show_current"?(i.show_current=!0,i.show_forecast=!1):(i.show_current=!1,i.show_forecast=!0),delete i.forecast_mode;let o=gf(i);if(delete o.temperature_entity,o?.forecast?.extra_attribute==="none"&&delete o.forecast.extra_attribute,Array.isArray(o.show_condition_effects)&&H8.every(n=>o.show_condition_effects.includes(n))&&(o.show_condition_effects=!0),o?.current){let a={},n={},s={};for(let V of Object.keys(o.current))if(V.startsWith("attribute_entity_")){let c=V.replace("attribute_entity_",""),p=o.current[V];p&&(a[c]=p),delete o.current[V]}else if(V.startsWith("attribute_label_")){let c=V.replace("attribute_label_",""),p=o.current[V];p&&(n[c]=p),delete o.current[V]}else if(V.startsWith("attribute_icon_")){let c=V.replace("attribute_icon_",""),p=o.current[V];p&&(s[c]=p),delete o.current[V]}if(Array.isArray(o.current.show_attributes)){let V=a7(this._config?.current?.show_attributes);o.current.show_attributes=YH(o.current.show_attributes,{entity:a,label:n,icon:s},V)}}a2(this,"config-changed",{config:o})}};r0.styles=l1`
    ha-expansion-panel {
      display: block;
      margin-top: 24px;
      --expansion-panel-content-padding: 0;
      border-radius: var(--ha-border-radius-md, 12px);
      --ha-card-border-radius: var(--ha-border-radius-md, 12px);
    }
    .custom-attributes {
      padding: 12px;
    }
    .custom-attributes p {
      margin: 0 0 24px;
    }
    .custom-attribute-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 12px;
    }
    .custom-attribute-row ha-form {
      flex: 1;
      min-width: 0;
    }
    .custom-attribute-row ha-icon-button {
      --mdc-icon-button-size: 40px;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
  `,Q([i1({attribute:!1})],r0.prototype,"hass",2),Q([J2()],r0.prototype,"_config",2),r0=Q([n2("wsfc-flex-core-editor")],r0);var n7=r=>typeof r=="string"&&U2.includes(r),a7=r=>{if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")n7(e)||t.push({name:e});else if(typeof e=="object"){let i=e;n7(i.name)||t.push(i)}}return t},YH=(r,t,e)=>{let i=U2.every(n=>r.includes(n)),o=Object.keys(t.entity).length>0||Object.keys(t.label).length>0||Object.keys(t.icon).length>0;return e.length===0&&!o&&i?!0:[...r.map(n=>{let s=t.entity[n],V=t.label[n],c=t.icon[n];return s||V||c?{name:n,...s?{entity:s}:{},...V?{label:V}:{},...c?{icon:c}:{}}:n}),...e]},Af=[{name:"entity",selector:{entity:{}}},{name:"label",selector:{text:{}}},{name:"icon",selector:{icon:{}}}],vf=r=>{if(r===!0)return[...U2];if(typeof r=="string")return n7(r)?[r]:[];if(!Array.isArray(r))return[];let t=[];for(let e of r)if(e!=null){if(typeof e=="string")n7(e)&&t.push(e);else if(typeof e=="object"){let i=e;n7(i.name)&&t.push(i)}}return t},xf=(r,t)=>{let e=vf(r),i=[],o={entity:{},label:{},icon:{}};for(let a of e)typeof a=="string"?i.push(a):a.name&&(i.push(a.name),a.entity&&(o.entity[a.name]=a.entity),a.label&&(o.label[a.name]=a.label),a.icon&&(o.icon[a.name]=a.icon));return YH(i,o,t)},gf=r=>{let t={...r};for(let e of Object.keys(r)){if(!e.startsWith("forecast.")&&!e.startsWith("forecast_action.")&&!e.startsWith("current."))continue;let i=e.split(".");if(i.length<2)continue;let[o,a]=i;!o||!a||((!t[o]||typeof t[o]!="object")&&(t[o]={}),t[o][a]=r[e],delete t[e])}return t},lt=r=>{let t=_f(r);t.forecast_mode=t.show_current&&t.show_forecast?"show_both":t.show_current?"show_current":"show_forecast",t.temperature_entity&&!t["current.temperature_entity"]&&(t["current.temperature_entity"]=t.temperature_entity),delete t.temperature_entity,t.show_condition_effects===!0&&(t.show_condition_effects=[...H8]),t["current.show_attributes"]===!0&&(t["current.show_attributes"]=[...U2]);let e=t["current.show_attributes"];if(Array.isArray(e)){let i=[];for(let o of e)if(typeof o=="string")n7(o)&&i.push(o);else if(typeof o=="object"&&o!==null){let a=o;n7(a.name)&&(i.push(a.name),a.entity&&(t[`current.attribute_entity_${a.name}`]=a.entity),a.label&&(t[`current.attribute_label_${a.name}`]=a.label),a.icon&&(t[`current.attribute_icon_${a.name}`]=a.icon))}t["current.show_attributes"]=i}return t},_f=r=>{let t={};for(let e in r){let i=r[e];if(e==="forecast"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast.${o}`]=i[o];continue}if(e==="current"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`current.${o}`]=i[o];continue}if(e==="forecast_action"&&i&&typeof i=="object"&&!Array.isArray(i)){for(let o in i)t[`forecast_action.${o}`]=i[o];continue}t[e]=i}return t};(()=>{"use strict";let r="2026.10.11.85",t=[{id:"current",label:"Current Weather Header"},{id:"details",label:"Current Weather Metrics"},{id:"hourly",label:"Hourly Forecast"},{id:"daily",label:"Daily Forecast"},{id:"sun_position",label:"Sky Bar"},{id:"sun_arc",label:"Sun Position"}],e=t.map(M=>M.id),i=Object.fromEntries(t.map(M=>[M.id,M.label])),o={humidity:{label:"Humidity",icon:"mdi:water-percent",kind:"attr"},pressure:{label:"Pressure",icon:"mdi:gauge",kind:"attr"},wind_speed:{label:"Wind",icon:"mdi:weather-windy",kind:"attr"},visibility:{label:"Visibility",icon:"mdi:eye",kind:"attr"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer",kind:"attr"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",kind:"attr"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",kind:"attr"},cloud_coverage:{label:"Cloud cover",icon:"mdi:cloud-outline",kind:"attr"},ozone:{label:"Ozone",icon:"mdi:molecule",kind:"attr"},sunrise:{label:"Sunrise",icon:"mdi:weather-sunset-up",kind:"sunrise"},sunset:{label:"Sunset",icon:"mdi:weather-sunset-down",kind:"sunset"}},a=["humidity","wind_speed","pressure","visibility","sunrise","sunset"],n=(M,m,d)=>Math.min(d,Math.max(m,M)),s=M=>typeof M=="number"&&isFinite(M),V={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:alert-circle-outline"};function c(M){return V[M]||"mdi:weather-cloudy"}let p=["temps","icons","extra"],h={temps:"Temperatures",icons:"Condition icons",extra:"Extra metric"};function v(M){let m=Array.isArray(M.forecast_row_order)?M.forecast_row_order.filter(d=>p.includes(d)):null;(!m||!m.length)&&(m=(M.forecast_stack||"temps_out")==="icons_out"?["icons","temps","extra"]:["temps","icons","extra"]);for(let d of p)m.includes(d)||m.push(d);return m}let g={precipitation_probability:{icon:"mdi:water-percent",unit:"%",label:"Precipitation probability"},uv_index:{icon:"mdi:weather-sunny-alert",unit:"",label:"UV index"},wind_speed:{icon:"mdi:weather-windy",unit:"",label:"Wind speed"},wind_bearing:{icon:"mdi:navigation",unit:"",arrow:!0,label:"Wind direction (arrow)"},humidity:{icon:"mdi:water",unit:"%",label:"Humidity"},cloud_coverage:{icon:"mdi:cloud-outline",unit:"%",label:"Cloud cover"}},y=Object.keys(g);function O(M){let m=M&&M.forecast_extra,d;Array.isArray(m)?d=m:typeof m=="string"&&m&&m!=="none"?d=[m]:d=[];let A=new Set(d.filter(_=>g[_]));return y.filter(_=>A.has(_))}let k=["temps","icons",...y],T=Object.assign({temps:"Temperatures",icons:"Condition icons"},Object.fromEntries(y.map(M=>[M,g[M].label]))),F=[{value:"hidden",label:"Hide"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"},{value:"overlay",label:"Overlay on bar"}];function R(M){M=M||{};let m={},d;if(Array.isArray(M.forecast_metric_order)&&M.forecast_metric_order.length){d=M.forecast_metric_order.filter(_=>k.includes(_));let A=M.forecast_metric_pos||{};for(let _ of k)m[_]=A[_]||"hidden"}else{m.temps=M.forecast_temps||"hidden",m.icons=M.forecast_icons||"hidden";let A=O(M),_=m.temps!=="hidden"?m.temps:m.icons!=="hidden"?m.icons:"below";for(let S of y)m[S]=A.includes(S)?_:"hidden";let w=v(M);d=[];for(let S of w)S==="extra"?d.push(...y):d.push(S)}for(let A of k)d.includes(A)||d.push(A);for(let A of k)m[A]||(m[A]="hidden");return d.map(A=>({key:A,pos:m[A]}))}function K(M,m){if(!M||!m)return null;let d=g[M],A=m[M];return M==="wind_direction"&&(A=m.wind_direction!=null?m.wind_direction:m.wind_bearing),A==null||A===""?null:d&&d.arrow?"":(typeof A=="number"&&(A=Math.round(A)),A+(d&&d.unit||""))}function G(M,m){if(M==="wind_direction")return(g.wind_bearing||{}).icon;let d=g[M];return d?d.icon:""}let L1={wind_speed:"wind_speed",wind_bearing:"wind_speed",uv_index:"uv_index",humidity:"humidity",cloud_coverage:"cloud_coverage"};function X(M,m){if(m){let d=L1[M];if(d&&o[d]&&o[d].icon)return o[d].icon}return G(M)}function e1(M){return M==="below"||M==null?0:M==="above"?100:M==="mid"?50:n(Number(M)||0,0,100)}function o1(M,m){m=m||0;let d="  ".repeat(m),A=_=>{if(_==null)return"null";if(typeof _=="boolean"||typeof _=="number")return String(_);let w=String(_);return w===""||/[:#\-?*&!|>'"%@`{}\[\],]/.test(w)||/^\s|\s$/.test(w)||/^(true|false|null|yes|no|~)$/i.test(w)||/^[\d.+-]/.test(w)?'"'+w.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"':w};if(Array.isArray(M))return M.length?M.map(_=>{if(_&&typeof _=="object"){let w=o1(_,m+1).replace(/^\s+/,"");return d+"- "+w}return d+"- "+A(_)}).join(`
`):d+"[]";if(M&&typeof M=="object"){let _=Object.keys(M);return _.length?_.map(w=>{let S=M[w];return S&&typeof S=="object"&&(Array.isArray(S)?S.length:Object.keys(S).length)?d+w+`:
`+o1(S,m+1):S&&typeof S=="object"?d+w+": "+(Array.isArray(S)?"[]":"{}"):d+w+": "+A(S)}).join(`
`):d+"{}"}return d+A(M)}function m1(M){try{return typeof G3=="function"&&G3(M)||M.language||navigator.language||"en"}catch{return"en"}}function W1(M){let m=M&&M.config||{};return{lat:m.latitude,lng:m.longitude}}function y1(M,m){if(!(m instanceof Date)||isNaN(m))return"--";try{return m.toLocaleTimeString(m1(M),{hour:"2-digit",minute:"2-digit"})}catch{return m.toTimeString().slice(0,5)}}function L2(M,m){let d=m instanceof Date?m:new Date;try{if(typeof P0=="function"){let w=P0(M,d);if(w&&w.sunrise&&w.sunset)return{sunrise:new Date(w.sunrise),sunset:new Date(w.sunset)}}}catch{}let{lat:A,lng:_}=W1(M);if(s(A)&&s(_)&&typeof v0=="object"&&v0.getTimes)try{let w=v0.getTimes(d,A,_);return{sunrise:w.sunrise,sunset:w.sunset}}catch{}return{sunrise:null,sunset:null}}function Y1(M,m){let{lat:d,lng:A}=W1(M);if(!s(d)||!s(A)||typeof v0!="object"||!v0.getPosition)return null;try{return v0.getPosition(m,d,A).altitude}catch{return null}}function Z1(M){if(M==null)return .5;let m=M*180/Math.PI;return m>=0?n(.42+.58*Math.sin(M),.42,1):m>-12?n(.42*(m+12)/12,0,.42):0}let J=[{at:0,c:[11,16,38]},{at:.18,c:[40,52,92]},{at:.34,c:[92,96,140]},{at:.5,c:[140,168,214]},{at:.72,c:[176,205,240]},{at:1,c:[206,227,255]}];function Q1(M){M=n(M,0,1);let m=J[0],d=J[J.length-1];for(let S=0;S<J.length-1;S++)if(M>=J[S].at&&M<=J[S+1].at){m=J[S],d=J[S+1];break}let A=d.at-m.at||1,_=(M-m.at)/A,w=S=>Math.round(m.c[S]+(d.c[S]-m.c[S])*_);return[w(0),w(1),w(2)]}function n1(M){if(typeof M!="string")return null;let m=M.trim().replace(/^#/,"");return m.length===3&&(m=m.split("").map(d=>d+d).join("")),/^[0-9a-fA-F]{6}$/.test(m)?[parseInt(m.slice(0,2),16),parseInt(m.slice(2,4),16),parseInt(m.slice(4,6),16)]:null}let U=M=>`rgb(${Math.round(M[0])}, ${Math.round(M[1])}, ${Math.round(M[2])})`,r1=(M,m,d)=>M.map((A,_)=>A+(m[_]-A)*d);function H1(M,m){M=n(M,0,1);let d,A=m&&n1(m.day_color),_=m&&n1(m.night_color);A||_?d=r1(_||[11,16,38],A||[206,227,255],M):d=Q1(M);let w=m&&s(m.cloud)?n(m.cloud,0,1):0;if(w>0){let S=.5*(d[0]+d[1]+d[2]),E=[S*.75+40,S*.75+42,S*.78+48];d=r1(d,E,w*.6)}return U(d)}function h1(){return{divider_above:!1,divider_above_width:1,divider_above_length:100,divider_above_style:"solid",divider_below:!1,divider_below_width:1,divider_below_length:100,divider_below_style:"solid",divider_color:""}}function s1(){return{background_enabled:!1,background_color:"",background_opacity:80}}function V1(M){return{font_size:M,font_weight:"400",color:""}}function g1(){return{title_show:!1,title_text:"",title_icon:"",title_text_align:"left",title_icon_align:"left",title_icon_color:"",title_icon_size:20,title_color:"",title_font_size:15,title_font_weight:"600",title_indent:0}}function k1(){return{clock_show_time:!1,clock_placement:"right",clock_date_placement:"with_time",clock_format:"auto",clock_show_seconds:!1,clock_show_date:!1,clock_font_size:28,clock_font_weight:"500",clock_color:"",clock_font_family:"",clock_date_font_size:12,clock_date_color:"",clock_date_format:"auto",clock_contrast:"none",clock_date_contrast:"none"}}function u2(M,m){if(M==="shadow")return"0 1px 3px rgba(0,0,0,0.75)";let d=A=>`0 0 2px ${A}, 0 0 4px ${A}, 1px 1px 2px ${A}`;return M==="outline"?d("rgba(0,0,0,0.85)"):M==="auto"?d(m?"rgba(0,0,0,0.9)":"rgba(255,255,255,0.95)"):""}let x2=[{value:"auto",label:"Auto (locale)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"weekday_long",label:"Weekday, Month D, YYYY (Monday, June 3, 2026)",opts:{weekday:"long",year:"numeric",month:"long",day:"numeric"}},{value:"weekday_med",label:"Wkdy, Mon D (Mon, Jun 3)",opts:{weekday:"short",month:"short",day:"numeric"}},{value:"month_d_yyyy",label:"Month D, YYYY (June 3, 2026)",opts:{year:"numeric",month:"long",day:"numeric"}},{value:"mon_d_yyyy",label:"Mon D, YYYY (Jun 3, 2026)",opts:{year:"numeric",month:"short",day:"numeric"}},{value:"us_slash",label:"MM/DD/YYYY (US)",pattern:"MM/DD/YYYY"},{value:"us_slash_short",label:"M/D/YY (US short)",pattern:"M/D/YY"},{value:"eu_slash",label:"DD/MM/YYYY (UK/EU)",pattern:"DD/MM/YYYY"},{value:"eu_dot",label:"DD.MM.YYYY (DE/EU)",pattern:"DD.MM.YYYY"},{value:"iso",label:"YYYY-MM-DD (ISO 8601)",pattern:"YYYY-MM-DD"},{value:"d_month_yyyy",label:"D Month YYYY (3 June 2026)",pattern:"D MONTH YYYY"},{value:"dmy_dashes",label:"DD-MM-YYYY",pattern:"DD-MM-YYYY"},{value:"day_only",label:"Weekday (Monday)",opts:{weekday:"long"}}];function E2(M){let m=M&&M.show_forecast!==!1,d=M&&M.default_forecast||"daily",A=a.map(E=>({key:E,show:!0})),_=h1,w=g1,S=s1;return{order:e.slice(),card:{border_enabled:!1,border_color:"",border_width:1,border_radius:12,border_top:!0,border_bottom:!0,border_left:!0,border_right:!0,corner_tl:!0,corner_tr:!0,corner_br:!0,corner_bl:!0,bg_color:"",glow_enabled:!1,glow_color:"",glow_intensity:1,glow_borders_only:!0,shadow_enabled:!1,shadow_color:"#000000",shadow_x:0,shadow_y:4,shadow_blur:16,shadow_spread:0,shadow_opacity:35},current:{show:M?M.show_current!==!1:!0,header_state_size:0,header_temp_size:0,header_icon_size:0,...k1(),...w(),..._(),...S()},details:{show:!1,details_layout:"grid",columns:2,global_icon_color:"",global_icon_size:22,global_text_color:"",global_text_size:14,chips:!1,chip_bg:"",chip_border_color:"",chip_text_color:"",chip_icon_color:"",chip_text_size:"",chip_icon_size:"",chip_scale:1,chip_show_icon:!0,chip_icon_source:"auto",chip_show_name:!1,chip_hide_when_off:!1,chip_layout:"wrap",chip_columns:0,chip_pill:!0,chip_radius:8,items:A,...w(),..._(),...S()},hourly:{show:m&&d==="hourly",...w(),..._(),...S()},daily:{show:m&&d!=="hourly",...w(),..._(),...S()},sun_position:{show:!1,height:44,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_left",times_position:"below",ticks_position:"hidden",ticks_every:0,times_font_size:11,times_font_weight:"400",times_color:"",day_color:"",night_color:"",weather_adjust:!0,marker_color:"",marker_opacity:100,ss_markers_position:"hidden",ss_markers_color:"",ss_markers_opacity:100,forecast_temps:"hidden",forecast_icons:"hidden",forecast_stack:"temps_out",forecast_every:3,forecast_font_size:11,forecast_color:"",forecast_temp_color:"",forecast_icon_color:"",forecast_icon_size:22,forecast_extra:[],forecast_extra_color:"",forecast_metric_detail_icons:!1,forecast_temp_with_icon:!1,...w(),..._(),...S()},sun_arc:{show:!1,height:90,flush_top:!1,flush_bottom:!1,flush_edges:!1,timeframe_mode:"sunrise_sunset",timeframe_hours:24,timeframe_anchor:"now_left",time_format:"auto",labels_position:0,time_font_size:13,time_font_weight:"600",time_color:"",caption_font_size:11,caption_font_weight:"400",caption_color:"",sun_icon:"",night_moon:!1,moon_icon:"mdi:weather-night",show_arc_ticks:!1,show_base_ticks:!0,sunrise_sunset_ticks:"none",tick_color:"",show_times:!0,show_captions:!0,show_ss_icons:!1,sunrise_icon:"mdi:weather-sunset-up",sunset_icon:"mdi:weather-sunset-down",ss_icon_color:"",ss_icon_size:20,ss_icon_position:"left",baseline_mode:"line",...w(),..._(),...S()}}}function l2(M){let m=E2(M),d=M&&M.wfc||{},A={order:Array.isArray(d.order)&&d.order.length?d.order.slice():m.order,card:{...m.card,...d.card||{}},current:{...m.current,...d.current||{}},details:{...m.details,...d.details||{}},hourly:{...m.hourly,...d.hourly||{}},daily:{...m.daily,...d.daily||{}},sun_position:{...m.sun_position,...d.sun_position||{}},sun_arc:{...m.sun_arc,...d.sun_arc||{}},editor_accordion:d.editor_accordion!==!1},_=Array.isArray(d.details&&d.details.items)?d.details.items.slice():m.details.items.slice();_=_.filter(S=>S&&o[S.key]),A.details.items=_.length?_:m.details.items,A.details.columns=n(parseInt(A.details.columns,10)||2,1,4);let w=new Set(A.details.items.map(S=>S.key));return Object.keys(o).forEach(S=>{w.has(S)||A.details.items.push({key:S,show:!1})}),["sun_position","sun_arc"].forEach(S=>{let E=d[S]||{};E.flush!==void 0&&(E.flush_top===void 0&&(A[S].flush_top=!!E.flush),E.flush_bottom===void 0&&(A[S].flush_bottom=!!E.flush),E.flush_edges===void 0&&(A[S].flush_edges=!!E.flush))}),e.forEach(S=>{A.order.includes(S)||A.order.push(S)}),A.order=A.order.filter(S=>e.includes(S)),A}let c1=p2.prototype;if(typeof G2<"u"&&G2&&G2.prototype&&G2.prototype.getSecondaryWeatherAttribute){let M=G2.prototype.getSecondaryWeatherAttribute;G2.prototype.getSecondaryWeatherAttribute=function(){return(this.config&&this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?null:M.call(this)}}let o5=c1.setConfig;c1.setConfig=function(M){let m=l2(M),d=m.sun_position||{},A=d.forecast_extra,w=!!(!!(d.show||m.sun_arc&&m.sun_arc.show&&m.sun_arc.baseline_mode==="sky")&&(d.weather_adjust!==!1||[d.forecast_temps,d.forecast_icons].some(N=>N&&N!=="hidden")||(Array.isArray(A)?A.length:A&&A!=="none")||Object.values(d.forecast_metric_pos||{}).some(N=>N&&N!=="hidden"))),S=!!(m.hourly.show||w),E=!!(S||m.daily.show),B=S&&m.daily.show?"both":S?"hourly":"daily",W={...M,show_current:m.current.show||!E,show_forecast:E};E&&(B==="both"||!M.forecast_types||w)&&(W.forecast_types=B),o5.call(this,W),this.config.show_current=!!m.current.show,this.config.show_forecast=E,W.forecast_types&&(this.config.forecast_types=W.forecast_types),this.__wfcCfgSrc=void 0};let q2=c1.updated;c1.updated=function(M){q2&&q2.call(this,M),this.isConnected&&this._wfcSyncForecastSources()};let x5=c1.disconnectedCallback;c1.disconnectedCallback=function(){x5&&x5.call(this),this._wfcTeardownForecastSources()};let F2=c1.shouldUpdate;c1.shouldUpdate=function(M){if(F2&&F2.call(this,M))return!0;if(M&&M.has("hass")&&this.config){let m=M.get("hass"),d=this.hass;if(m&&d){let A=new Set;for(let _ of this._wfcSources())if(_.overrides&&Object.values(_.overrides).forEach(w=>w&&A.add(w)),t2(_.ref)){let w=q0(this.config,this.hass,_2(_.ref));Object.values(w).forEach(S=>S&&A.add(S))}else _.ref&&A.add(_.ref);for(let _ of A)if(m.states[_]!==d.states[_])return!0}}return!1},c1._wfc=function(){return this.__wfcCfgSrc!==this.config&&(this.__wfcCfgSrc=this.config,this.__wfcCfg=l2(this.config)),this.__wfcCfg},c1.computeRowSizing=function(){let M=this._wfc(),m=this.config&&this.config.forecast&&this.config.forecast.mode==="chart",d={current:()=>2+(this.config&&this.config.current&&this.config.current.show_attributes?1:0),details:()=>{let S=(M.details.items||[]).filter(E=>E.show).length;return Math.max(1,Math.ceil(S/2))},hourly:()=>m?3:2,daily:()=>m?3:2,sun_position:()=>Math.max(1,Math.ceil(((Number(M.sun_position.height)||44)+20)/56)),sun_arc:()=>Math.max(2,Math.ceil(((Number(M.sun_arc.height)||90)+24)/56))},A=1,_=4;M.order.filter(S=>M[S]&&M[S].show&&d[S]).forEach(S=>{A+=d[S](),(S==="hourly"||S==="daily")&&(_=6)});let w=Math.max(1,A-1);return{rows:A,minRows:w,minColumns:_}},c1.render=function(){if(!this.config||!this.hass)return Z;let M=this.config.entity,m=this.hass.states[M];if(!m){let B=this.hass,W=B?B.config&&B.config.state!=="NOT_RUNNING"?`${B.localize("ui.card.common.entity_not_found")}: ${M}`:B.localize("ui.panel.lovelace.warning.starting"):"Home Assistant instance is not available.";return x`<hui-warning>${W}</hui-warning>`}let d=this._wfc(),A=typeof P5=="function"&&P5(m)==="twice_daily",_=this.config.forecast&&this.config.forecast.mode==="chart",w={stateObj:m,isTwice:A,chart:_},E=d.order.filter(B=>d[B]&&d[B].show).map(B=>{let W=this._wfcRenderSection(B,d,w);if(W===Z||W==null)return null;let N=d[B]||{},a1="wsfc-section";N.flush_top&&(a1+=" wsfc-flush-top"),N.flush_bottom&&(a1+=" wsfc-flush-bottom"),N.flush_edges&&(a1+=" wsfc-flush-edges");let p1=this._wfcBackgroundStyle(N);return x`<div class=${a1} data-section-id=${B} style=${p1}>
          ${this._wfcRenderTitle(N)}${W}
        </div>`}).filter(Boolean);return x`
      <ha-card>
        ${this.config.show_condition_effects?x`<wsfc-animation-provider
              .hass=${this.hass}
              .weatherEntity=${m}
              .config=${this.config}
              .currentForecast=${this._hourlyForecastData&&this._hourlyForecastData[0]}
            ></wsfc-animation-provider>`:Z}
        ${this._wfcStyleTag()}
        ${this._wfcDividerStyle(d)}
        ${this._wfcCardAppearanceStyle(d)}
        <div class="wsfc-container">${E}</div>
      </ha-card>
    `},c1._wfcDividerStyle=function(M){let m=[];return M.order.forEach(d=>{let A=M[d];if(!A||!A.show||!A.divider_above&&!A.divider_below)return;let _=`.wsfc-section[data-section-id="${d}"]`,w=A.divider_color||"var(--divider-color, #4a4a4a)",S=`${_}{position:relative;}`,E=B=>["solid","dashed","dotted","double"].includes(B)?B:"solid";if(A.divider_above){let B=Number(A.divider_above_width)||1,W=n(Number(A.divider_above_length)||100,1,100),N=E(A.divider_above_style);S+=`${_}{margin-top:calc(var(--wfc-component-gap) / 2);padding-top:calc(var(--wfc-component-gap) / 2);}${_}::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:${W}%;border-top:${B}px ${N} ${w};}`}if(A.divider_below){let B=Number(A.divider_below_width)||1,W=n(Number(A.divider_below_length)||100,1,100),N=E(A.divider_below_style);S+=`${_}{margin-bottom:calc(var(--wfc-component-gap) / 2);padding-bottom:calc(var(--wfc-component-gap) / 2);}${_}::after{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:${W}%;border-bottom:${B}px ${N} ${w};}`}m.push(S)}),m.length?x`<style>${m.join("")}</style>`:Z},c1._wfcCardAppearanceStyle=function(M){let m=M&&M.card||{},d=[];if(m.border_enabled){let _=Math.max(0,Number(m.border_width)||1),w=m.border_color||"var(--primary-color, #2196f3)",S=E=>E!==!1?`${_}px solid ${w}`:"none";d.push(`border-top:${S(m.border_top)}`),d.push(`border-bottom:${S(m.border_bottom)}`),d.push(`border-left:${S(m.border_left)}`),d.push(`border-right:${S(m.border_right)}`)}if(m.border_radius!==""&&m.border_radius!=null){let _=`${Number(m.border_radius)}px`,w=S=>S!==!1?_:"0";d.push(`border-radius:${w(m.corner_tl)} ${w(m.corner_tr)} ${w(m.corner_br)} ${w(m.corner_bl)}`)}m.bg_color&&d.push(`background:${m.bg_color}`);let A=[];if(m.glow_enabled){let _=m.glow_color||"var(--primary-color, #2196f3)",w=n(Number(m.glow_intensity)||1,.2,3),S=(12*w).toFixed(1),E=(-4*w).toFixed(1),B=(4*w).toFixed(1);m.glow_borders_only===!1||!m.border_enabled?A.push(`0 0 ${S}px ${E}px ${_}`):(m.border_top!==!1&&A.push(`0 -${B}px ${S}px ${E}px ${_}`),m.border_bottom!==!1&&A.push(`0 ${B}px ${S}px ${E}px ${_}`),m.border_left!==!1&&A.push(`-${B}px 0 ${S}px ${E}px ${_}`),m.border_right!==!1&&A.push(`${B}px 0 ${S}px ${E}px ${_}`))}if(m.shadow_enabled){let _=g2(m.shadow_color||"#000000",n((Number(m.shadow_opacity)||0)/100,0,1))||m.shadow_color||"rgba(0,0,0,0.35)";A.push(`${Number(m.shadow_x)||0}px ${Number(m.shadow_y)||0}px ${Number(m.shadow_blur)||0}px ${Number(m.shadow_spread)||0}px ${_}`)}return A.length&&d.push(`box-shadow:${A.join(", ")}`),d.length?x`<style>ha-card{${d.join(";")};}</style>`:Z},c1._wfcBackgroundStyle=function(M){if(!M||!M.background_enabled)return"";let m=n(M.background_opacity==null?80:Number(M.background_opacity),0,100),d=(100-m)/100,A=100-m,_=M.background_color||"",w;_?w=g2(_,d)||_:w=`color-mix(in srgb, var(--card-background-color, #1c1c1c) ${A}%, transparent)`;let S=M.flush_edges?"0":"8px";return`background-color:${w};border-radius:${S};`};function g2(M,m){if(typeof M!="string")return null;let d=M.trim().replace(/^#/,"");if(d.length===3&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),!/^[0-9a-fA-F]{6}$/.test(d))return null;let A=parseInt(d.slice(0,2),16),_=parseInt(d.slice(2,4),16),w=parseInt(d.slice(4,6),16);return`rgba(${A}, ${_}, ${w}, ${m})`}c1._wfcRenderTitle=function(M){if(!M||!M.title_show)return Z;let m=M.title_text||"",d=M.title_icon||"",A=M.title_text_align||"left",_=M.title_icon_align||"left",w=!!m&&A!=="hide",S=!!d&&_!=="hide";if(!w&&!S)return Z;let E=(M.title_icon_color?`color:${M.title_icon_color};`:"")+(M.title_icon_size?`--mdc-icon-size:${M.title_icon_size}px;width:${M.title_icon_size}px;height:${M.title_icon_size}px;`:""),B=(M.title_color?`color:${M.title_color};`:"")+(M.title_font_size?`font-size:${M.title_font_size}px;`:"")+(M.title_font_weight?`font-weight:${M.title_font_weight};`:""),W=S?x`<ha-icon class="wsfc-title-icon" .icon=${d} style=${E}></ha-icon>`:Z,N=w?x`<span class="wsfc-title-text" style=${B}>${m}</span>`:Z,a1=D=>{let M1=[];return S&&_===D&&M1.push(W),w&&A===D&&M1.push(N),M1},p1=Number(M.title_indent)||0;return x`<div class="wsfc-title-row" style="padding-left:${p1}px;">
      <span class="wsfc-title-zone wsfc-title-left">${a1("left")}</span>
      <span class="wsfc-title-zone wsfc-title-center">${a1("center")}</span>
      <span class="wsfc-title-zone wsfc-title-right">${a1("right")}</span>
    </div>`},c1._wfcRenderSection=function(M,m,d){switch(M){case"current":return this._wfcRenderCurrent(d);case"details":return this._wfcRenderDetails(m,d);case"hourly":return this._wfcRenderForecast("hourly",d);case"daily":return this._wfcRenderForecast("daily",d);case"sun_position":return this._wfcRenderSunPosition(m,d);case"sun_arc":return this._wfcRenderSunArc(m,d);default:return Z}},c1._wfcRenderCurrent=function(M){let d=this._wfc().current||{},A=Number(d.header_state_size)||0,_=Number(d.header_temp_size)||0,w=Number(d.header_icon_size)||0,S=(w?`--current-conditions-icon-size:${w}px;`:"")+(A||_?`--wfc-hdr-state:${A?A+"px":"inherit"};--wfc-hdr-temp:${_?_+"px":"inherit"};`:""),E=x`
      <div
        class="wsfc-current-weather-container${A||_?" wsfc-hdr-sized":""}"
        style=${S||Z}
        .actionHandler=${c0({hasHold:T0(this.config.hold_action),hasDoubleClick:T0(this.config.double_tap_action)})}
        @action=${this.onCardAction}
      >
        <wsfc-current-weather
          class=${(this.config.current&&this.config.current.secondary_info_attribute)==="__wfc_none__"?"wsfc-hide-secondary":""}
          .hass=${this.hass}
          .weatherEntity=${this._wfcMergedCurrentEntity(M.stateObj)}
          .config=${this.config}
          .hourlyForecast=${this._hourlyForecastData}
          .dailyForecast=${this._dailyForecastData}
        ></wsfc-current-weather>
      </div>
    `,B=!!d.clock_show_time,W=!!d.clock_show_date;if(!B&&!W)return E;this._wfcEnsureClockTimer();let N=A2=>A2==="above"?"above-center":A2==="below"?"below-center":A2||"right",a1=N(d.clock_placement),p1=d.clock_date_placement==="with_time"||!d.clock_date_placement?a1:N(d.clock_date_placement),D=B?this._wfcRenderClockTime(d):null,M1=W?this._wfcRenderClockDate(d):null,G1=B&&W&&(d.clock_date_placement==="with_time"||!d.clock_date_placement),F1={},$1=(A2,m2)=>{m2&&(F1[A2]=F1[A2]||[]).push(m2)};G1?$1(a1,x`<div class="wsfc-clock">${D}${M1}</div>`):(D&&$1(a1,x`<div class="wsfc-clock">${D}</div>`),M1&&$1(p1,x`<div class="wsfc-clock">${M1}</div>`));let q1=A2=>{let m2=[];return["left","center","right"].forEach(K1=>{let N2=A2+"-"+K1;F1[N2]&&m2.push(x`<div class="wsfc-clock-band-cell wsfc-cb-${K1}">${F1[N2]}</div>`)}),m2.length?x`<div class="wsfc-clock-band">${m2}</div>`:Z},d1=q1("above"),R1=q1("below"),o0=F1.left||Z,M5=[].concat(F1.right||[],F1.center||[]),D5=F1.left&&F1.left.length||M5.length?x`<div class="wsfc-cur-row wsfc-cur-row-clocked">
          ${o0}
          <div class="wsfc-cur-grow">${E}</div>
          ${M5.length?M5:Z}
        </div>`:E;return x`<div class="wsfc-cur-stack">${d1}${D5}${R1}</div>`},c1._wfcEnsureClockTimer=function(){this.__wfcClockTimer||(this.__wfcClockTimer=setInterval(()=>{let M=this.__wfcCfg||(this.config?l2(this.config):null),m=M&&M.current;this.isConnected&&m&&(m.clock_show_time||m.clock_show_date)?(this.__wfcClockTick=(this.__wfcClockTick||0)+1,this.requestUpdate()):this.isConnected||(clearInterval(this.__wfcClockTimer),this.__wfcClockTimer=null)},1e3))},c1._wfcRenderClockTime=function(M){let m=new Date,d=m1(this.hass),A={hour:"2-digit",minute:"2-digit"};M.clock_show_seconds&&(A.second="2-digit"),M.clock_format==="12"?A.hour12=!0:M.clock_format==="24"&&(A.hour12=!1);let _;try{_=m.toLocaleTimeString(d,A)}catch{_=m.toTimeString().slice(0,M.clock_show_seconds?8:5)}M.clock_format==="12"&&(_=_.replace(/^0/,""));let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),S=u2(M.clock_contrast,w),E=`font-size:${n(Number(M.clock_font_size)||28,8,100)}px;font-weight:${M.clock_font_weight||"500"};`+(M.clock_color?`color:${M.clock_color};`:"")+(M.clock_font_family?`font-family:${M.clock_font_family};`:"")+(S?`text-shadow:${S};`:"");return x`<div class="wsfc-clock-time" style=${E}>${_}</div>`};function l5(M,m,d){let A=B=>B<10?"0"+B:""+B,_=M.toLocaleDateString(d,{month:"long"}),w=M.toLocaleDateString(d,{month:"short"}),S=M.toLocaleDateString(d,{weekday:"long"}),E={YYYY:""+M.getFullYear(),YY:A(M.getFullYear()%100),MONTH:_,MON:w,WDAY:S,MM:A(M.getMonth()+1),M:""+(M.getMonth()+1),DD:A(M.getDate()),D:""+M.getDate()};return m.replace(/YYYY|MONTH|WDAY|YY|MON|MM|DD|M|D/g,B=>E[B]!=null?E[B]:B)}c1._wfcRenderClockDate=function(M){let m=new Date,d=m1(this.hass),A=x2.find(W=>W.value===M.clock_date_format)||x2[0],_;try{_=A.pattern?l5(m,A.pattern,d):m.toLocaleDateString(d,A.opts)}catch{_=m.toDateString()}let w=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),S=M.clock_date_contrast!=null?M.clock_date_contrast:M.clock_contrast,E=u2(S,w),B=`font-size:${n(Number(M.clock_date_font_size)||12,8,100)}px;`+(M.clock_date_color?`color:${M.clock_date_color};`:"")+(E?`text-shadow:${E};`:"");return x`<div class="wsfc-clock-date" style=${B}>${_}</div>`},c1._wfcForecastConfigFor=function(M){let m=this.config&&this.config.forecast||{},d=m[`${M}_mode`]||m.mode||"simple",A=m[`${M}_extra_attribute`]!=null?m[`${M}_extra_attribute`]:m.extra_attribute;(A==="none"||A==="")&&(A=void 0);let _=m[`${M}_chart_attribute`]!=null?m[`${M}_chart_attribute`]:m.default_chart_attribute,w={...m,mode:d};return A==null?delete w.extra_attribute:w.extra_attribute=A,_!=null&&(w.default_chart_attribute=_),["show_sun_times","use_color_thresholds","show_attribute_selector"].forEach(E=>{let B=m[`${M}_${E}`];B!=null&&(w[E]=B)}),{config:{...this.config,forecast:w},chart:d==="chart"}},c1._wfcRenderForecast=function(M,m){let d=M==="hourly"?this._hourlyForecastData:this._dailyForecastData;if(!d||!d.length)return Z;let A=this._wfcMergeForecast(d,M),{config:_,chart:w}=this._wfcForecastConfigFor(M),S=w?x`<wsfc-forecast-chart
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${_}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${M}
          .isTwiceDailyEntity=${m.isTwice}
          .itemWidth=${this._currentItemWidth}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-chart>`:x`<wsfc-forecast-simple
          @action=${this.onForecastAction}
          .hass=${this.hass}
          .config=${_}
          .weatherEntity=${m.stateObj}
          .forecast=${A}
          .forecastType=${M}
          .isTwiceDailyEntity=${m.isTwice}
          .isScrollable=${this._isScrollable}
        ></wsfc-forecast-simple>`;return x`<div class="wsfc-forecast-container" data-forecast-type=${M}>${S}</div>`};let c5="device:",t2=M=>typeof M=="string"&&M.indexOf(c5)===0,_2=M=>t2(M)?M.slice(c5.length):null,G0=[{key:"temperature",label:"Temperature"},{key:"apparent_temperature",label:"Feels like"},{key:"dew_point",label:"Dew point"},{key:"humidity",label:"Humidity"},{key:"pressure",label:"Pressure"},{key:"wind_speed",label:"Wind speed"},{key:"wind_gust_speed",label:"Wind gust"},{key:"wind_bearing",label:"Wind bearing"},{key:"visibility",label:"Visibility"},{key:"cloud_coverage",label:"Cloud cover"},{key:"uv_index",label:"UV index"},{key:"ozone",label:"Ozone"},{key:"solar_radiation",label:"Solar radiation",extra:!0},{key:"illuminance",label:"Illuminance / Lux",extra:!0},{key:"precipitation",label:"Rain / Precipitation",extra:!0}],Rt=G0.map(M=>M.key),Dt=[{re:/feels?[\s_-]?likes?|apparent|wind[\s_-]?chill|windchill|heat[\s_-]?index/i,key:"apparent_temperature"},{re:/dew[\s_-]?point/i,key:"dew_point"},{re:/gust/i,key:"wind_gust_speed"},{re:/wind[\s_-]?(direction|dir|bearing|azimuth|heading)/i,key:"wind_bearing"},{re:/\buv(_?index)?\b/i,key:"uv_index"},{re:/visibility/i,key:"visibility"},{re:/ozone/i,key:"ozone"},{re:/cloud/i,key:"cloud_coverage"},{re:/solar[\s_-]?(radiation|irradiance)|irradiance/i,key:"solar_radiation"},{re:/\blux\b|illuminance|solar[\s_-]?lux/i,key:"illuminance"},{re:/rain[\s_-]?rate|precip/i,key:"precipitation"},{re:/wind[\s_-]?speed/i,key:"wind_speed"},{re:/humidity/i,key:"humidity"}],M7=new WeakMap;function Z3(M,m){if(!M||!m||!M.entities)return[];let d=M7.get(M.entities);if(d&&d.hass!==M&&(d.hass=M,Object.keys(M.entities).length!==d.size0&&(d=null)),!d){d=new Map;for(let A in M.entities){let _=M.entities[A]&&M.entities[A].device_id;_&&(d.has(_)||d.set(_,[]),d.get(_).push(A))}d.size0=Object.keys(M.entities).length,d.hass=M,M7.set(M.entities,d)}return d.get(m)||[]}function a6(M,m){let d=M&&M.states[m];if(!d)return null;let A=d.attributes&&d.attributes.device_class,_=(m+" "+(d.attributes&&d.attributes.friendly_name||"")).toLowerCase(),w=null;for(let E of Dt)if(E.re.test(_)){w=E.key;break}if(w||(A==="temperature"?w="temperature":A==="humidity"?w="humidity":A==="pressure"||A==="atmospheric_pressure"?w="pressure":A==="wind_speed"?w="wind_speed":A==="irradiance"?w="solar_radiation":A==="illuminance"?w="illuminance":A==="precipitation_intensity"?w="precipitation":/(^|[\s_-])temperature/.test(_)?w="temperature":/pressure/.test(_)&&(w="pressure")),!w||Rt.indexOf(w)===-1)return null;let S=0;if(/indoor|inside/.test(_)||w==="uv_index"&&!/index|\buvi\b/.test(_))return null;if(w==="apparent_temperature"&&/chill|heat[\s_-]?index/.test(_)&&(S+=10),/globe|wbgt|soil|water|pool|probe|leaf|\bch[\s_-]?\d|(temperature|humidity)[\s_-]?\d|_\d+$/.test(_.replace(/_2$/,""))&&(S+=40),/outdoor/.test(_)&&(S-=2),/avg|average|10m|max|daily|weekly|monthly|yearly|\bmin\b/.test(_)&&(S+=20),w==="pressure"){if(/deficit|vpd|vapou?r/.test(_))return null;/absolute/.test(_)&&(S+=50),/relative|sea/.test(_)&&(S-=5)}return w==="precipitation"&&(/rate/.test(_)&&(S-=5),/event|hourly|24h|total/.test(_)&&(S+=10)),{key:w,penalty:S}}let n6=new WeakMap;function M4(M,m){let d=M&&M.devices||{},A=n6.get(d);return A||(A=new Map,n6.set(d,A)),A.has(m)||A.set(m,H6(d,m)),A.get(m)}function H6(M,m){let d=M[m],A=d&&d.config_entries||[];return A.length?Object.keys(M).filter(_=>_!==m&&(M[_].config_entries||[]).some(w=>A.includes(w))):[]}let s6=new WeakMap;function d7(M,m){if(!M||!M.entities)return p7(M,m);let d=s6.get(M.entities);d||(d=new Map,s6.set(M.entities,d));let A=[m,...M4(M,m)],_="";for(let B of A)for(let W of Z3(M,B))M.states[W]&&(_+=W.length+",");let w=m+"|"+A.length+"|"+_,S=d.get(m);if(S&&S.key===w&&S.devices===M.devices)return S.map;let E=p7(M,m);return d.set(m,{key:w,devices:M.devices,map:E}),E}function p7(M,m){let d={},A={},_=Z3(M,m).map(S=>[S,0]),w=M4(M,m).flatMap(S=>Z3(M,S).map(E=>[E,15]));for(let[S,E]of[..._,...w]){let B=a6(M,S);if(!B)continue;let W={key:B.key,penalty:B.penalty+E};(A[W.key]==null||W.penalty<A[W.key])&&(A[W.key]=W.penalty,d[W.key]=S)}return d}function q0(M,m,d){let A={...d7(m,d)},_=M&&M.metric_sources&&M.metric_sources.device_map&&M.metric_sources.device_map[d]||{};for(let w in _)_[w]&&(A[w]=_[w]);return A}function V6(M,m){let d=M&&M.metric_sources||{};if(Array.isArray(d.sources))return d.sources.filter(B=>B&&B.ref).map(B=>({ref:B.ref,overrides:{...B.overrides||{}},disabled:!!B.disabled}));let A=[],_=d.device_map||{},w=d.custom||{},S=B=>t2(B)?{..._[_2(B)]||{}}:{},E=d.primary||M&&M.entity;return E&&A.push({ref:E,overrides:{...S(E),...w}}),d.fallback&&d.fallback!==E&&A.push({ref:d.fallback,overrides:S(d.fallback)}),A}c1._wfcMetricSources=function(){return this.config&&this.config.metric_sources||{}},c1._wfcSources=function(){return V6(this.config,this.hass)},c1._wfcSlotEntityForKey=function(M,m){return M?t2(M)?q0(this.config,this.hass,_2(M))[m]||null:M:null},c1._wfcMetricEntityChain=function(M){let m=[],d=A=>{A&&!m.includes(A)&&this.hass&&this.hass.states[A]&&m.push(A)};for(let A of this._wfcSources())A.disabled||(A.overrides&&A.overrides[M]&&d(A.overrides[M]),d(this._wfcSlotEntityForKey(A.ref,M)));return d(this.config&&this.config.entity),m},c1._wfcCurrentMetric=function(M){for(let m of this._wfcMetricEntityChain(M)){let d=this.hass.states[m];if(d)if(m.startsWith("weather."))try{let A=U7(this.hass,d,this.config,M);if(A!=null&&A!=="")return A}catch{}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let _=d.attributes&&d.attributes.unit_of_measurement;try{return this.hass.formatEntityState?this.hass.formatEntityState(d):_?`${A} ${_}`:`${A}`}catch{return _?`${A} ${_}`:`${A}`}}}}return null},c1._wfcCurrentMetricRaw=function(M){if(!this.hass)return null;for(let m of this._wfcMetricEntityChain(M)){let d=this.hass.states[m];if(d)if(m.startsWith("weather.")){let A=d.attributes?d.attributes[M]:null;if(A!=null&&A!=="")return A}else{let A=d.state;if(A!=null&&A!==""&&A!=="unknown"&&A!=="unavailable"){let _=Number(A);return isNaN(_)?A:_}}}return null},c1._wfcMergedCurrentEntity=function(M){try{if(!M||!M.attributes)return M;let m=this.config&&this.config.entity;if(!this._wfcSources().some(E=>E.ref!==m||E.overrides&&Object.keys(E.overrides).length))return M;let _={...M.attributes},w=!1,S=["temperature",...typeof U2<"u"?U2:[]];for(let E of S){let B=this._wfcCurrentMetricRaw(E);B!=null&&B!==_[E]&&(_[E]=B,w=!0)}return w?{...M,attributes:_}:M}catch{return M}},c1._wfcDetailValue=function(M,m){let d=o[M];if(!d)return null;if(d.kind==="sunrise"||d.kind==="sunset"){let A=L2(this.hass),_=d.kind==="sunrise"?A.sunrise:A.sunset;return _?y1(this.hass,_):null}try{let A=this._wfcCurrentMetric(M);return A??null}catch{return null}},c1._wfcRenderDetails=function(M,m){let d=M.details||{},A=(d.items||[]).filter(E=>E.show);if(d.chips)return this._wfcRenderDetailChips(d,A,m);let _=[];if(A.forEach(E=>{let B=o[E.key];if(!B)return;let W=this._wfcDetailValue(E.key,m);if(W==null||W==="")return;let N=E.mode==="custom",a1=N?E.icon_color:d.global_icon_color,p1=N?E.icon_size:d.global_icon_size,D=N?E.text_color:d.global_text_color,M1=N?E.text_size:d.global_text_size,G1=E.icon||B.icon||j5&&j5[E.key]||"mdi:information-outline",F1=(a1?`color:${a1};`:"")+(p1?`--mdc-icon-size:${p1}px;width:${p1}px;height:${p1}px;`:""),$1=(D?`color:${D};`:"")+(M1?`font-size:${M1}px;`:"");_.push(x`
        <div class="wsfc-detail">
          <ha-icon class="wsfc-detail-icon" .icon=${G1} style=${F1}></ha-icon>
          <span class="wsfc-detail-value" style=${$1}>${W}</span>
        </div>
      `)}),!_.length)return Z;if((d.details_layout||"grid")==="wrap")return x`<div class="wsfc-details-section">
        <div class="wsfc-details-wrap">${_}</div>
      </div>`;let w=n(parseInt(M.details.columns,10)||2,1,4),S=`grid-template-columns:repeat(${w}, minmax(0, 1fr));`;return x`<div class="wsfc-details-section">
      <div class="wsfc-details-grid wsfc-cols-${w}" style=${S}>${_}</div>
    </div>`},c1._wfcRenderDetailChips=function(M,m,d){let A=n(Number(M.chip_scale)||1,.5,2.5),w=(M.chip_pill!=null?!!M.chip_pill:M.chip_shape!=="rounded"&&M.chip_shape!=="square")?999:M.chip_radius==null?8:Number(M.chip_radius),S=M.chip_icon_source||"auto",E=M.chip_show_icon!==!1,B=M.chip_layout||"wrap",W=Math.max(0,parseInt(M.chip_columns,10)||0),N=M.chip_text_size?`${Number(M.chip_text_size)}px`:`calc(var(--ha-font-size-m, 14px) * 0.95 * ${A})`,a1=M.chip_icon_size?`${Number(M.chip_icon_size)}px`:`calc(var(--ha-font-size-m, 14px) * 1.1 * ${A})`,p1=`--wfc-chip-scale:${A};--wfc-chip-radius:${w}px;--wfc-chip-font:${N};--wfc-chip-icon-size:${a1};`+(M.chip_bg?`--wfc-chip-bg:${M.chip_bg};`:"")+(M.chip_border_color?`--wfc-chip-border:${M.chip_border_color};`:"")+(M.chip_text_color?`--wfc-chip-text:${M.chip_text_color};`:"")+(M.chip_icon_color?`--wfc-chip-icon:${M.chip_icon_color};`:"");B==="grid"&&W>0&&(p1+=`grid-template-columns:repeat(${W}, minmax(0, 1fr));`);let D=[];return m.forEach(M1=>{let G1=o[M1.key];if(!G1)return;let F1=this._wfcDetailValue(M1.key,d);if(M.chip_hide_when_off&&(F1==null||F1===""||F1==="unknown"||F1==="unavailable"))return;let $1=F1==null||F1===""?"\u2014":F1,q1=G1.label||M1.key,d1=M.chip_show_name?`${q1}: ${$1}`:$1,R1="";E&&S!=="none"&&(R1=S==="entity"&&M1.icon||G1.icon,R1=R1||j5&&j5[M1.key]||"mdi:information-outline"),D.push(x`
        <span class="wsfc-chip">
          ${R1?x`<ha-icon .icon=${R1}></ha-icon>`:Z}
          <span class="wsfc-chip-text">${d1}</span>
        </span>
      `)}),D.length?x`<div class="wsfc-details-section">
      <div class="wsfc-chips wsfc-chips-${B}" style=${p1}>${D}</div>
    </div>`:Z},c1._wfcHourlySource=function(){let M=this._hourlyForecastEvent,m=M&&Array.isArray(M.forecast)&&M.forecast.length?M.forecast:this._hourlyForecastData;return this._wfcMergeForecast(m,"hourly")},c1._wfcExtraForecastEntities=function(){let M=this.config&&this.config.entity,m=new Set,d=A=>{A&&A!==M&&typeof A=="string"&&A.startsWith("weather.")&&this.hass&&this.hass.states[A]&&m.add(A)};for(let A of this._wfcSources())A.disabled||(d(A.ref),A.overrides&&Object.values(A.overrides).forEach(d));return[...m]},c1._wfcSyncForecastSources=function(){try{if(!this.hass||!this.config)return;this.__wfcSrc=this.__wfcSrc||{};let M=new Set(this._wfcExtraForecastEntities());for(let _ of Object.keys(this.__wfcSrc))if(!M.has(_)){try{this.__wfcSrc[_].unsub&&this.__wfcSrc[_].unsub()}catch{}delete this.__wfcSrc[_]}let m=this.config.forecast_types||"both",d=m!=="daily",A=m!=="hourly";M.forEach(_=>{if(this.__wfcSrc[_])return;let w={unsub:null,hourly:null,daily:null};this.__wfcSrc[_]=w;let S=(E,B)=>{try{let W=this.hass.connection.subscribeMessage(N=>{w[B]=N&&Array.isArray(N.forecast)?N.forecast:null,this.requestUpdate&&this.requestUpdate()},{type:"weather/subscribe_forecast",forecast_type:E,entity_id:_},{resubscribe:!1});Promise.resolve(W).then(N=>{if(this.__wfcSrc[_]!==w){try{N&&N()}catch{}return}let a1=w.unsub;w.unsub=()=>{try{a1&&a1()}catch{}try{N&&N()}catch{}}}).catch(()=>{})}catch{}};d&&S("hourly","hourly"),A&&S(P5&&typeof P5=="function"&&P5(this.hass.states[_])||"daily","daily")})}catch{}},c1._wfcTeardownForecastSources=function(){if(this.__wfcSrc){for(let M of Object.keys(this.__wfcSrc))try{this.__wfcSrc[M].unsub&&this.__wfcSrc[M].unsub()}catch{}this.__wfcSrc={}}},c1._wfcSourceForecast=function(M,m){let d=this.__wfcSrc&&this.__wfcSrc[M];return d&&d[m]||null},c1._wfcMergeForecast=function(M,m){try{if(!Array.isArray(M)||!M.length)return M;let d=this.config&&this.config.entity,A=this._wfcExtraForecastEntities();if(!A.length)return M;let _={};if(A.forEach(B=>{let W=this._wfcSourceForecast(B,m);Array.isArray(W)&&W.length&&(_[B]=W.map(N=>({t:new Date(N.datetime).getTime(),fc:N})).filter(N=>!isNaN(N.t)))}),!Object.keys(_).length)return M;let w=(B,W)=>{let N=_[B];if(!N)return null;let a1=null,p1=1/0;for(let D of N){let M1=Math.abs(D.t-W);M1<p1&&(p1=M1,a1=D.fc)}return p1<=90*6e4?a1:null},S=G0.map(B=>B.key),E={};return S.forEach(B=>{E[B]=this._wfcMetricEntityChain(B).filter(W=>W===d||_[W])}),M.map(B=>{let W=new Date(B.datetime).getTime();if(isNaN(W))return B;let N=B;return S.forEach(a1=>{for(let p1 of E[a1]){if(p1===d){if(B[a1]!=null)break;continue}let D=w(p1,W);if(D&&D[a1]!=null){N===B&&(N={...B}),N[a1]=D[a1];break}}}),N})}catch{return M}},c1._wfcCloudAt=function(M){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let _=0;_<m.length;_++){let w=new Date(m[_].datetime);if(isNaN(w))continue;let S=Math.abs(w.getTime()-M.getTime());S<A&&(A=S,d=m[_])}return!d||A>90*6e4?null:s(d.cloud_coverage)?d.cloud_coverage/100:s(d.precipitation_probability)?d.precipitation_probability/100:null},c1._wfcForecastAt=function(M){let m=this._wfcHourlySource();if(!m||!m.length)return null;let d=null,A=1/0;for(let _=0;_<m.length;_++){let w=new Date(m[_].datetime);if(isNaN(w))continue;let S=Math.abs(w.getTime()-M.getTime());S<A&&(A=S,d=m[_])}return d&&A<=90*6e4?d:null},c1._wfcSunHours=function(M){M=M||{};let m=new Date,d,A;if(M.timeframe_mode==="day")d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5);else if(M.timeframe_mode==="match_arc"){let E=L2(this.hass,m);E.sunrise&&E.sunset?(d=new Date(E.sunrise.getTime()-60*6e4),A=new Date(E.sunset.getTime()+60*6e4)):(d=new Date(m),d.setHours(0,0,0,0),A=new Date(d.getTime()+24*36e5))}else{let E=n(Number(M.timeframe_hours)||24,1,72)*36e5;M.timeframe_anchor==="now_center"?(d=new Date(m.getTime()-E/2),A=new Date(m.getTime()+E/2)):(d=new Date(m),d.setMinutes(0,0,0),A=new Date(d.getTime()+E))}let _=A.getTime()-d.getTime(),w=n(Math.round(_/36e5),2,72),S=[];for(let E=0;E<=w;E++){let B=new Date(d.getTime()+_*E/w);S.push({date:B,cloud:this._wfcCloudAt(B)})}return S},c1._wfcFmtTime=function(M,m){if(!(M instanceof Date)||isNaN(M))return"--";let d=m1(this.hass);try{return m==="12"?M.toLocaleTimeString(d,{hour:"numeric",minute:"2-digit",hour12:!0}).replace(/^0/,""):m==="24"?M.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit",hour12:!1}):M.toLocaleTimeString(d,{hour:"2-digit",minute:"2-digit"})}catch{return M.toTimeString().slice(0,5)}},c1._wfcSkyGradient=function(M){let m=this._wfcSunHours(M);if(m.length<2)return null;let{lat:d,lng:A}=W1(this.hass);if(!s(d)||!s(A))return null;let _=M.weather_adjust!==!1,w=m.length,S=[];for(let E=0;E<w;E++){let B=Z1(Y1(this.hass,m[E].date)),W=(E/(w-1)*100).toFixed(2),N=H1(B,{day_color:M.day_color,night_color:M.night_color,cloud:_?m[E].cloud:0});S.push(`${N} ${W}%`)}return{gradient:`linear-gradient(to right, ${S.join(", ")})`,hours:m}},c1._wfcSunMarker=function(M,m){if(m==null)return Z;let d=M.marker_color||"var(--primary-text-color)",A=n(Number(M.marker_opacity==null?100:M.marker_opacity),0,100)/100;return x`<div class="wsfc-sunpos-now" style="left:${m.toFixed(2)}%;background:${d};opacity:${A};"></div>`},c1._wfcSunRiseSetMarkers=function(M,m,d,A){let{sunrise:_,sunset:w}=L2(this.hass);if(!_||!w||d<=m)return Z;let S=M.ss_markers_color||"var(--wfc-sunrise-color, var(--warning-color, #ffb300))",E=n(Number(M.ss_markers_opacity==null?100:M.ss_markers_opacity),0,100)/100,B=[];return[_.getTime(),w.getTime()].forEach(W=>{if(W<m||W>d)return;let N=((W-m)/(d-m)*100).toFixed(2);B.push(x`<span class="wsfc-sunpos-ssmark" style="left:${N}%;background:${S};opacity:${E};"></span>`)}),B.length?x`<div class="wsfc-sunpos-ssmarks wsfc-sunpos-ss-${A}">${B}</div>`:Z},c1._wfcRenderSunPosition=function(M,m){let d=M.sun_position,A=this._wfcSkyGradient(d);if(!A)return Z;let{gradient:_,hours:w}=A,S=w.length,E=d.times_position||"below";E==="center"&&(E="overlay");let B=d.ticks_position||"hidden",W=E!=="hidden",N=B!=="hidden",a1=n(parseInt(d.ticks_every,10)||0,0,24),p1;if(a1>0&&S>1){let Y=(w[S-1].date.getTime()-w[0].date.getTime())/36e5,f1=Y>0?Y/(S-1):1;p1=Math.max(1,Math.round(a1/f1))}else p1=Math.max(1,Math.round((S-1)/8));let D=Y=>(Y/(S-1)*100).toFixed(2),M1=[];if(W)for(let Y=0;Y<S;Y+=p1){let f1;try{f1=w[Y].date.toLocaleTimeString(m1(this.hass),{hour:"numeric"})}catch{f1=w[Y].date.getHours()+""}M1.push(x`<span class="wsfc-sunpos-tick" style="left:${D(Y)}%">${f1}</span>`)}let G1=d.times_color||"var(--secondary-text-color, #9e9e9e)",F1=[];if(N)for(let Y=0;Y<S;Y+=p1)F1.push(x`<span class="wsfc-sunpos-mark" style="left:${D(Y)}%;background:${G1};"></span>`);let $1=Date.now(),q1=w[0].date.getTime(),d1=w[S-1].date.getTime(),o0=$1>=q1&&$1<=d1&&d1>q1?n(($1-q1)/(d1-q1)*100,0,100):null,M5=Number(d.height)||44,$2=`font-size:${Number(d.times_font_size)||11}px;font-weight:${d.times_font_weight||"400"};`+(d.times_color?`color:${d.times_color};`:""),D5=Y=>x`<div class="wsfc-sunpos-ticks${Y||""}" style=${$2}>${M1}</div>`,A2=Y=>x`<div class="wsfc-sunpos-marks${Y||""}">${F1}</div>`,m2=d.ss_markers_position||"hidden",K1=m2!=="hidden",N2=R(d),b2={};N2.forEach(Y=>b2[Y.key]=Y.pos);let d5=b2.temps&&b2.temps!=="hidden",C0=b2.icons&&b2.icons!=="hidden",B5=d.forecast_temp_color||d.forecast_color||"",a0=d.forecast_icon_color||d.forecast_color||"",n0=d.forecast_extra_color||d.forecast_color||"",Q0=!!(this.hass&&this.hass.themes&&this.hass.themes.darkMode),w2=d.forecast_metric_style||{},H0=Y=>w2[Y]&&w2[Y].text_color||(Y==="temps"?B5:n0),b5=Y=>w2[Y]&&w2[Y].icon_color||a0,h7=Y=>w2[Y]&&w2[Y].icon_size||d.forecast_icon_size,T3=Y=>w2[Y]&&w2[Y].text_size||d.forecast_font_size||11,P3=Y=>u2(w2[Y]&&w2[Y].contrast||"",Q0),A1=Y=>{let f1=H0(Y),T1=P3(Y);return`font-size:${Number(T3(Y))||11}px;`+(f1?`color:${f1};`:"")+(T1?`text-shadow:${T1};`:"")},R2=Y=>{let f1=b5(Y),T1=h7(Y),D1=P3(Y);return(f1?`color:${f1};`:"")+(T1?`--mdc-icon-size:${T1}px;width:${T1}px;height:${T1}px;`:"")+(D1?`filter:drop-shadow(${D1});`:"")},U1=y.some(Y=>b2[Y]&&b2[Y]!=="hidden"),z5=[];if(d5||C0||U1){let Y=this._wfcHourlySource()||[];for(let f1 of Y){let T1=new Date(f1.datetime);if(isNaN(T1))continue;let D1=T1.getTime();D1<q1||D1>d1||z5.push({t:D1,fc:f1})}z5.sort((f1,T1)=>f1.t-T1.t)}let s0=d1-q1,g0=Y=>s0>0?((Y-q1)/s0*100).toFixed(2):"0",V0=(Y,f1)=>{let T1=null,D1=1/0;for(let D2 of z5){let K2=Math.abs(D2.t-Y);K2<D1&&(D1=K2,T1=D2.fc)}return D1<=f1?T1:null},Y2={},c2=Y=>{let f1=Y==null?"":String(Y);if(Y2[f1])return Y2[f1];let T1=[];if(z5.length||Y==="ticks"||Y==="midticks"){let D1=Y==="all"||Y==="0",D2=Y==="ticks",K2=Y==="midticks";if(D2||K2){let N5=s0>0&&S>1?s0/(S-1)*p1:36e5,F3=Math.max(N5/2,90*6e4),$3=K2?p1/2:0;for(let p5=$3;p5<=S-1;p5+=p1){let n5=Math.floor(p5),qt=Math.min(S-1,Math.ceil(p5)),h6=p5-n5,S5=w[n5].date.getTime()+(w[qt].date.getTime()-w[n5].date.getTime())*h6;if(S5<q1||S5>d1)continue;let f6=(p5/(S-1)*100).toFixed(2);T1.push({pct:f6,fc:V0(S5,F3)})}}else if(D1)for(let N5 of z5)T1.push({pct:g0(N5.t),fc:N5.fc});else{let N5=n(parseInt(Y,10)||3,1,6),F3=null,$3=N5*36e5;for(let p5 of z5)(F3==null||p5.t-F3>=$3-6e4)&&(T1.push({pct:g0(p5.t),fc:p5.fc}),F3=p5.t)}}return Y2[f1]=T1,T1},C5=Y=>{let f1=w2[Y]&&w2[Y].every;return f1!=null&&f1!==""?f1:d.forecast_every},M2=Y=>{let f1=c2(C5("temps"));return x`<div class="wsfc-sunpos-fc${Y||""}" style=${A1("temps")}>${f1.map(T1=>{let D1=T1.fc&&T1.fc.temperature!=null?Math.round(T1.fc.temperature)+"\xB0":"";return D1?x`<span class="wsfc-sunpos-fc-item" style="left:${T1.pct}%">${D1}</span>`:Z})}</div>`},I5=Y=>{let f1=R2("icons"),T1=c2(C5("icons"));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icons${Y||""}">${T1.map(D1=>{let D2=D1.fc&&D1.fc.condition?c(D1.fc.condition):"";return D2?x`<span class="wsfc-sunpos-fc-item" style="left:${D1.pct}%"><ha-icon .icon=${D2} style=${f1}></ha-icon></span>`:Z})}</div>`},f7=!!d.forecast_metric_detail_icons,x1=(Y,f1)=>{let T1=R2(Y),D1=c2(C5(Y));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-extra${f1||""}" style=${A1(Y)}>${D1.map(D2=>{let K2=D2.fc?K(Y,D2.fc):null;if(K2==null)return Z;let N5=X(Y,f7);return x`<span class="wsfc-sunpos-fc-item" style="left:${D2.pct}%">${N5?x`<ha-icon .icon=${N5} style=${T1}></ha-icon>`:Z}<span class="wsfc-sunpos-fc-extra-val">${K2}</span></span>`})}</div>`},z1=Y=>{let f1=R2("icons"),T1=c2(C5("icons"));return x`<div class="wsfc-sunpos-fc wsfc-sunpos-fc-icontemp${Y||""}" style=${A1("temps")}>${T1.map(D1=>{let D2=D1.fc&&D1.fc.condition?c(D1.fc.condition):"",K2=D1.fc&&D1.fc.temperature!=null?Math.round(D1.fc.temperature)+"\xB0":"";return!D2&&!K2?Z:x`<span class="wsfc-sunpos-fc-item" style="left:${D1.pct}%">${D2?x`<ha-icon .icon=${D2} style=${f1}></ha-icon>`:Z}${K2?x`<span class="wsfc-sunpos-fc-temp-val">${K2}</span>`:Z}</span>`})}</div>`},S2=!!d.forecast_temp_with_icon&&d5&&C0&&b2.temps===b2.icons,y2=(Y,f1)=>S2&&Y==="icons"?z1(f1):Y==="temps"?M2(f1):Y==="icons"?I5(f1):x1(Y,f1),a5=Y=>N2.filter(f1=>f1.pos===Y&&!(S2&&f1.key==="temps")).map(f1=>f1.key),w5=a5("overlay"),_1=[];w5.length===1?_1.push(y2(w5[0]," wsfc-sunpos-fc-ovl wsfc-sunpos-fc-ovl-center")):w5.forEach((Y,f1)=>{let T1=f1===0?" wsfc-sunpos-fc-ovl-top":f1===w5.length-1?" wsfc-sunpos-fc-ovl-bottom":" wsfc-sunpos-fc-ovl-center";_1.push(y2(Y," wsfc-sunpos-fc-ovl"+T1))});let E3=a5("above").map(Y=>y2(Y)),Q2=a5("below").reverse().map(Y=>y2(Y));return x`
      <div class="wsfc-sunpos-section">
        ${E3}
        ${K1&&m2==="above"?this._wfcSunRiseSetMarkers(d,q1,d1,"row"):Z}
        ${N&&B==="above"?A2():Z}
        ${W&&E==="above"?D5():Z}
        <div class="wsfc-sunpos-bar" style="height:${M5}px;background:${_}">
          ${K1&&m2==="overlay"?this._wfcSunRiseSetMarkers(d,q1,d1,"overlay"):Z}
          ${this._wfcSunMarker(d,o0)}
          ${N&&B==="overlay"?A2(" wsfc-sunpos-marks-center"):Z}
          ${W&&E==="overlay"?D5(" wsfc-sunpos-ticks-center"):Z}
          ${_1}
        </div>
        ${W&&E==="below"?D5():Z}
        ${N&&B==="below"?A2():Z}
        ${K1&&m2==="below"?this._wfcSunRiseSetMarkers(d,q1,d1,"row"):Z}
        ${Q2}
      </div>
    `},c1._wfcArcWindow=function(M,m,d){let A=M.timeframe_mode||"sunrise_sunset",_=Date.now();if(A==="day"){let w=new Date(_);return w.setHours(0,0,0,0),{t0:w.getTime(),t1:w.getTime()+24*36e5}}if(A==="hours"){let w=n(Number(M.timeframe_hours)||24,1,72)*36e5;if(M.timeframe_anchor==="now_center")return{t0:_-w/2,t1:_+w/2};let S=new Date(_);return S.setMinutes(0,0,0),{t0:S.getTime(),t1:S.getTime()+w}}return{t0:m,t1:d}},c1._wfcRenderSunArc=function(M,m){let d=M.sun_arc,{sunrise:A,sunset:_}=L2(this.hass);if(!A||!_)return Z;let w=Date.now(),S=A.getTime(),E=_.getTime(),B=E-S,W;if(d.baseline_mode==="sky"&&M.sun_position){let x1=this._wfcSunHours(M.sun_position);x1&&x1.length>=2&&(W={t0:x1[0].date.getTime(),t1:x1[x1.length-1].date.getTime()})}W||(W=this._wfcArcWindow(d,S,E));let N=W.t0,a1=W.t1,p1=a1-N||1,D=x1=>n((x1-N)/p1,0,1),M1=100,G1=78,F1=14,$1=D(S),q1=D(E),d1=q1-$1,R1=x1=>{if(d1<=0||x1<=$1||x1>=q1)return G1;let z1=(x1-$1)/d1;return G1-(G1-F1)*(1-Math.pow(2*z1-1,2))},o0=96,M5="";for(let x1=0;x1<=o0;x1++){let z1=x1/o0;M5+=(x1===0?"M":"L")+(z1*M1).toFixed(2)+" "+R1(z1).toFixed(2)+" "}let $2=w>=N&&w<=a1,D5=w>=S&&w<=E,A2=D(w),m2=(A2*100).toFixed(2),K1=(R1(A2)/M1*100).toFixed(2),N2=Number(d.height)||90,b2=d.time_format||"auto",d5=d.tick_color||"var(--secondary-text-color, #9e9e9e)",C0=[];{let x1=new Date(N);x1.setMinutes(0,0,0),x1.getTime()<N&&x1.setTime(x1.getTime()+36e5);for(let z1=x1.getTime();z1<=a1;z1+=36e5)C0.push(D(z1))}let B5=[];d.show_arc_ticks&&C0.forEach(x1=>{if(x1<=0||x1>=1)return;let z1=(x1*M1).toFixed(2),S2=R1(x1);B5.push(w1`<line x1="${z1}" y1="${(S2-2.5).toFixed(2)}" x2="${z1}" y2="${(S2+2.5).toFixed(2)}" stroke="${d5}" stroke-width="0.6"></line>`)});let a0=[];d.show_base_ticks&&C0.forEach(x1=>{let z1=(x1*M1).toFixed(2);a0.push(w1`<line x1="${z1}" y1="${G1}" x2="${z1}" y2="${G1+3}" stroke="${d5}" stroke-width="0.6"></line>`)});let n0=d.sunrise_sunset_ticks||"none",Q0=n0==="arc"||n0==="both",w2=n0==="base"||n0==="both",H0=[];S>=N&&S<=a1&&H0.push(D(S)),E>=N&&E<=a1&&H0.push(D(E)),Q0&&H0.forEach(x1=>{let z1=(x1*M1).toFixed(2),S2=R1(x1);B5.push(w1`<line x1="${z1}" y1="${(S2-4.5).toFixed(2)}" x2="${z1}" y2="${(S2+4.5).toFixed(2)}" stroke="${d5}" stroke-width="1.4"></line>`)}),w2&&H0.forEach(x1=>{let z1=(x1*M1).toFixed(2);a0.push(w1`<line x1="${z1}" y1="${(G1-2).toFixed(2)}" x2="${z1}" y2="${G1+6}" stroke="${d5}" stroke-width="1.4"></line>`)});let b5=Z;if($2){let x1="wsfc-sunarc-sun"+(D5?"":" wsfc-sunarc-sun-night"),z1=`left:${m2}%;top:${K1}%;`;if(!D5&&d.night_moon&&d.moon_icon==="phase"){let S2=v0.getMoonIllumination(new Date).phase,y2=10,a5=11,w5=Math.cos(S2*2*Math.PI),_1=Math.abs(w5)*y2,E3=S2<.5?1:0,Q2=`M${a5} ${a5-y2} A${y2} ${y2} 0 0 ${E3} ${a5} ${a5+y2} A${_1} ${y2} 0 0 ${w5>0?1-E3:E3} ${a5} ${a5-y2} Z`;b5=x`<span class="${x1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" style=${z1}><svg viewBox="0 0 22 22" width="22" height="22" style="display:block"><circle cx="11" cy="11" r="10" fill="#2b2f36" stroke="rgba(255,255,255,.35)" stroke-width=".8"></circle><path d=${Q2} fill="#e9e6d6"></path></svg></span>`}else if(!D5&&d.night_moon){let S2=d.moon_icon||"mdi:weather-night";b5=x`<ha-icon class="${x1} wsfc-sunarc-sun-icon wsfc-sunarc-moon-icon" .icon=${S2} style=${z1}></ha-icon>`}else d.sun_icon?b5=x`<ha-icon class="${x1} wsfc-sunarc-sun-icon" .icon=${d.sun_icon} style=${z1}></ha-icon>`:b5=x`<span class="${x1} wsfc-sunarc-sun-dot" style=${z1}></span>`}let h7=`font-size:${Number(d.time_font_size)||13}px;font-weight:${d.time_font_weight||"600"};`+(d.time_color?`color:${d.time_color};`:""),T3=`font-size:${Number(d.caption_font_size)||11}px;font-weight:${d.caption_font_weight||"400"};`+(d.caption_color?`color:${d.caption_color};`:""),P3=d.show_times!==!1,A1=d.show_captions!==!1,R2=!!d.show_ss_icons,U1=d.ss_icon_position||"left",z5=(d.ss_icon_color?`color:${d.ss_icon_color};`:"")+(d.ss_icon_size?`--mdc-icon-size:${d.ss_icon_size}px;width:${d.ss_icon_size}px;height:${d.ss_icon_size}px;`:""),s0=x1=>{if(!R2)return Z;let z1=x1==="sunrise"?d.sunrise_icon||"mdi:weather-sunset-up":d.sunset_icon||"mdi:weather-sunset-down";return x`<ha-icon class="wsfc-sunarc-ssicon" .icon=${z1} style=${z5}></ha-icon>`},g0=(x1,z1,S2,y2)=>{let a5=x`<div class="wsfc-sunarc-endtext">
        ${P3?x`<div class="wsfc-sunarc-time" style=${h7}>${x1}</div>`:Z}
        ${A1?x`<div class="wsfc-sunarc-cap" style=${T3}>${z1}</div>`:Z}
      </div>`,w5=s0(y2);return x`<div class="wsfc-sunarc-end${S2?" wsfc-sunarc-right":""}">
        <div class="wsfc-sunarc-endinner" style="flex-direction:${U1==="above"?"column":U1==="below"?"column-reverse":U1==="right"?"row-reverse":"row"};">${w5}${a5}</div>
      </div>`},V0=P3||A1||R2,Y2=V0?x`<div class="wsfc-sunarc-labels">
          ${g0(this._wfcFmtTime(A,b2),"sunrise",!1,"sunrise")}
          ${g0(this._wfcFmtTime(_,b2),"sunset",!0,"sunset")}
        </div>`:Z,c2=d.labels_position;c2==="below"||c2==null?c2=0:c2==="above"?c2=100:c2==="mid"?c2=50:c2=n(Number(c2),0,100);let C5=d.baseline_mode==="sky"&&M.sun_position,M2=C5?this._wfcRenderSunPosition(M,m):Z,I5=C5&&M2!==Z?Z:w1`<line class="wsfc-sunarc-horizon" x1="0" y1="${G1}" x2="${M1}" y2="${G1}"></line>`,f7=x`
      <div class="wsfc-sunarc-svg-wrap" style="height:${N2}px">
        <svg class="wsfc-sunarc-svg" viewBox="0 0 ${M1} 100" preserveAspectRatio="none">
          ${I5}
          <path class="wsfc-sunarc-path" d=${M5.trim()}></path>
          ${B5}
          ${a0}
        </svg>
        ${b5}
        ${V0&&c2>0&&c2<100?x`<div class="wsfc-sunarc-overlay" style="top:${(100-c2).toFixed(1)}%;transform:translateY(-50%);">${Y2}</div>`:Z}
      </div>
    `;return x`
      <div class="wsfc-sunarc-section">
        ${V0&&c2>=100?Y2:Z}
        ${f7}
        ${C5&&M2!==Z?x`<div class="wsfc-sunarc-skywrap" style="margin-top:${(-((100-G1)/100)*N2).toFixed(1)}px;">${M2}</div>`:Z}
        ${V0&&c2<=0?Y2:Z}
      </div>
    `},c1._wfcStyleTag=function(){return x`<style>
      /* The stock card centers content vertically (justify-content:center); with
         our variable number of sections that makes content spill out the top of
         the ha-card. Pin to the top and let height grow naturally. */
      ha-card {
        justify-content: flex-start !important;
        height: auto !important;
      }
      .wsfc-container { height: auto; }
      /* "None" for the sub-header metric: hide the base secondary-info line
         outright (bulletproof regardless of the base component internals). */
      wsfc-current-weather.wsfc-hide-secondary .wsfc-current-secondary-info { display: none !important; }
      .wsfc-details-section { pointer-events: auto; padding: 0 var(--ha-space-4, 16px); }
      .wsfc-details-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 6px 24px;
        color: var(--primary-text-color);
      }
      /* Wrap layout: metrics flow left-to-right and wrap. */
      .wsfc-details-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 24px;
        color: var(--primary-text-color);
      }
      .wsfc-detail { display: flex; align-items: center; gap: 8px; min-width: 0; }
      /* In a 2-column layout, mirror the right column (icon on the outside),
         matching the classic weather-card look. Other column counts stay
         left-aligned for legibility. */
      .wsfc-details-grid.wsfc-cols-2 .wsfc-detail:nth-child(2n) {
        flex-direction: row-reverse;
        text-align: right;
      }
      .wsfc-detail-icon { color: var(--paper-item-icon-color, var(--state-icon-color)); flex: 0 0 auto; }
      .wsfc-detail-value {
        font-weight: 300;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Weather Metrics "chips" display (easy-entity-styler-card style). One
         shared style set; layout wrap / column / grid. */
      .wsfc-chips { display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 8px; }
      /* Grid: auto-fit columns by default; a fixed count is applied inline via
         grid-template-columns when the user sets one. */
      .wsfc-chips.wsfc-chips-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        align-items: center;
      }
      .wsfc-chips.wsfc-chips-grid .wsfc-chip { width: 100%; justify-content: center; box-sizing: border-box; }
      .wsfc-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: var(--wfc-chip-font, calc(var(--ha-font-size-m, 14px) * 0.95 * var(--wfc-chip-scale, 1)));
        font-weight: 600;
        padding: calc(3px * var(--wfc-chip-scale, 1)) calc(10px * var(--wfc-chip-scale, 1));
        border-radius: var(--wfc-chip-radius, 999px);
        background: var(--wfc-chip-bg, var(--secondary-background-color, rgba(255,255,255,0.06)));
        border: 1px solid var(--wfc-chip-border, var(--divider-color, #444));
        color: var(--wfc-chip-text, var(--primary-text-color, #e1e1e1));
        flex-shrink: 0;
      }
      .wsfc-chip ha-icon {
        --mdc-icon-size: var(--wfc-chip-icon-size, calc(var(--ha-font-size-m, 14px) * 1.1 * var(--wfc-chip-scale, 1)));
        color: var(--wfc-chip-icon, var(--wfc-chip-text, var(--paper-item-icon-color, var(--state-icon-color))));
      }
      .wsfc-chip-text { white-space: nowrap; }

      .wsfc-sunpos-section { pointer-events: auto; padding: 0 var(--ha-space-4, 16px); }
      .wsfc-sunpos-bar {
        position: relative;
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
      }
      .wsfc-sunpos-now {
        position: absolute;
        top: -2px;
        bottom: -2px;
        width: 2px;
        transform: translateX(-1px);
        background: var(--primary-text-color);
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.6);
      }
      .wsfc-sunpos-ticks {
        position: relative;
        height: 16px;
        margin-top: 2px;
        font-size: 11px;
        color: var(--secondary-text-color);
      }
      .wsfc-sunpos-ticks-center {
        position: absolute;
        inset: 0;
        height: auto;
        margin: 0;
        display: flex;
        align-items: center;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
        pointer-events: none;
      }
      .wsfc-sunpos-ticks-center .wsfc-sunpos-tick { top: 50%; transform: translate(-50%, -50%); }
      .wsfc-sunpos-tick {
        position: absolute;
        transform: translateX(-50%);
        white-space: nowrap;
      }
      /* Actual tick MARKS (short vertical lines), independent of the text labels. */
      .wsfc-sunpos-marks {
        position: relative;
        height: 6px;
        margin: 2px 0;
      }
      .wsfc-sunpos-marks-center { position: absolute; inset: 0; height: auto; margin: 0; pointer-events: none; }
      .wsfc-sunpos-mark {
        position: absolute;
        top: 0;
        width: 1px;
        height: 6px;
        transform: translateX(-50%);
        background: var(--secondary-text-color, #9e9e9e);
      }
      .wsfc-sunpos-marks-center .wsfc-sunpos-mark { top: 50%; height: 40%; transform: translate(-50%, -50%); }
      /* Sunrise & sunset markers on the Sky bar. */
      .wsfc-sunpos-ssmarks { position: relative; height: 8px; margin: 2px 0; }
      .wsfc-sunpos-ss-overlay { position: absolute; inset: 0; height: auto; margin: 0; pointer-events: none; }
      .wsfc-sunpos-ssmark {
        position: absolute;
        top: 0;
        width: 2px;
        height: 8px;
        transform: translateX(-50%);
        border-radius: 1px;
        background: var(--wfc-sunrise-color, var(--warning-color, #ffb300));
      }
      .wsfc-sunpos-ss-overlay .wsfc-sunpos-ssmark { top: 0; bottom: 0; height: auto; }
      /* Forecast temps / condition icons aligned along the bar. */
      .wsfc-sunpos-fc {
        position: relative;
        height: 18px;
        margin: 2px 0;
        color: var(--primary-text-color);
      }
      .wsfc-sunpos-fc.wsfc-sunpos-fc-icons { height: 26px; }
      .wsfc-sunpos-fc-item {
        position: absolute;
        transform: translateX(-50%);
        white-space: nowrap;
        display: flex;
        align-items: center;
      }
      .wsfc-sunpos-fc-item ha-icon { color: var(--paper-item-icon-color, var(--state-icon-color)); }
      /* Extra-attribute row: small icon + value pair per sample point. */
      .wsfc-sunpos-fc-extra { height: 20px; }
      .wsfc-sunpos-fc-extra .wsfc-sunpos-fc-item { gap: 2px; }
      .wsfc-sunpos-fc-extra-val { line-height: 1; }
      /* Combined condition-icon + temperature row. */
      .wsfc-sunpos-fc-icontemp { height: 26px; }
      .wsfc-sunpos-fc-icontemp .wsfc-sunpos-fc-item { gap: 3px; }
      .wsfc-sunpos-fc-temp-val { line-height: 1; }
      /* Overlay-on-bar forecast rows: absolutely positioned inside the bar,
         with a readable shadow so text/icons stand out against the gradient. */
      .wsfc-sunpos-fc-ovl {
        position: absolute;
        left: 0;
        right: 0;
        height: auto;
        margin: 0;
        pointer-events: none;
        color: #fff;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
      }
      .wsfc-sunpos-fc-ovl.wsfc-sunpos-fc-icons { height: auto; }
      .wsfc-sunpos-fc-ovl .wsfc-sunpos-fc-item { top: 50%; transform: translate(-50%, -50%); }
      .wsfc-sunpos-fc-ovl .wsfc-sunpos-fc-item ha-icon {
        color: #fff;
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.8));
      }
      .wsfc-sunpos-fc-ovl-top { top: 4px; }
      .wsfc-sunpos-fc-ovl-top .wsfc-sunpos-fc-item { top: 0; transform: translate(-50%, 0); }
      .wsfc-sunpos-fc-ovl-bottom { bottom: 4px; }
      .wsfc-sunpos-fc-ovl-bottom .wsfc-sunpos-fc-item { top: auto; bottom: 0; transform: translate(-50%, 0); }
      .wsfc-sunpos-fc-ovl-center { top: 50%; }
      .wsfc-sunpos-fc-ovl-center .wsfc-sunpos-fc-item { top: 0; transform: translate(-50%, -50%); }

      .wsfc-sunarc-section { pointer-events: auto; padding: 0 var(--ha-space-4, 16px); }
      .wsfc-sunarc-svg-wrap { position: relative; width: 100%; }
      .wsfc-sunarc-svg { width: 100%; height: 100%; display: block; overflow: visible; position: absolute; inset: 0; }
      .wsfc-sunarc-horizon { stroke: var(--divider-color, #b9b9b9); stroke-width: 1; }
      .wsfc-sunarc-path {
        fill: none;
        stroke: var(--secondary-text-color, #9e9e9e);
        stroke-width: 1.5;
        stroke-dasharray: 2 4;
        stroke-linecap: round;
        vector-effect: non-scaling-stroke;
      }
      /* Sun marker as an HTML overlay so it stays a perfect circle regardless
         of the SVG's non-uniform horizontal stretch (fixes the oval sun). */
      .wsfc-sunarc-sun {
        position: absolute;
        transform: translate(-50%, -50%);
        pointer-events: none;
        color: var(--wfc-sunrise-color, var(--warning-color, #ffb300));
      }
      .wsfc-sunarc-sun-night { color: var(--secondary-text-color, #9e9e9e); }
      .wsfc-sunarc-sun-dot {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: currentColor;
      }
      .wsfc-sunarc-sun-icon { --mdc-icon-size: 22px; width: 22px; height: 22px; }
      /* Sky-brightness baseline strip (replaces the horizon line when enabled). */
      .wsfc-sunarc-skybase {
        position: absolute;
        left: 0;
        right: 0;
        height: 10px;
        transform: translateY(-50%);
        border-radius: 3px;
      }
      .wsfc-sunarc-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 2px;
      }
      .wsfc-sunarc-end { text-align: left; }
      .wsfc-sunarc-right { text-align: right; }
      .wsfc-sunarc-time { font-weight: 600; color: var(--primary-text-color); font-size: 13px; }
      .wsfc-sunarc-cap { font-size: 11px; color: var(--secondary-text-color); }
      .wsfc-sunarc-endinner { display: flex; align-items: center; gap: 6px; }
      .wsfc-sunarc-right .wsfc-sunarc-endinner { justify-content: flex-end; }
      .wsfc-sunarc-ssicon { color: var(--wfc-sunrise-color, var(--warning-color, #ffb300)); flex: 0 0 auto; }
      /* Overlaid (mid) labels. */
      .wsfc-sunarc-overlay {
        position: absolute;
        left: 0;
        right: 0;
        pointer-events: none;
        padding: 0 var(--ha-space-4, 16px);
      }
      .wsfc-sunarc-overlay .wsfc-sunarc-labels { margin: 0; }

      /* Sky-Brightness bar used as the arc's baseline. Strip the nested section's
         own horizontal padding so the bar spans the FULL arc width (the upward
         margin that closes the gap under the baseline is applied inline, since
         it depends on the arc height). */
      .wsfc-sunarc-skywrap .wsfc-sunpos-section { padding-left: 0; padding-right: 0; }

      /* Flush (edge-to-edge) sections. Three INDEPENDENT axes, each on the
         section WRAPPER so the negative margins cancel the flex gap (top/bottom)
         or the card's horizontal padding (edges). None implies the others. */
      .wsfc-flush-top { margin-top: calc(-1 * var(--wfc-component-gap, 12px)); }
      .wsfc-flush-bottom { margin-bottom: calc(-1 * var(--wfc-component-gap, 12px)); }
      .wsfc-flush-edges {
        margin-left: calc(-1 * var(--card-padding, 16px));
        margin-right: calc(-1 * var(--card-padding, 16px));
      }
      /* First/last flush section also reaches the card's own top/bottom padding. */
      .wsfc-container > .wsfc-flush-top:first-child { margin-top: calc(-1 * var(--card-padding, 16px)); }
      .wsfc-container > .wsfc-flush-bottom:last-child { margin-bottom: calc(-1 * var(--card-padding, 16px)); }
      /* Edge flush drops the inner section's side padding + bar rounding. */
      .wsfc-flush-edges .wsfc-sunpos-section,
      .wsfc-flush-edges .wsfc-sunarc-section {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .wsfc-flush-edges .wsfc-sunpos-bar { border-radius: 0; }

      /* Per-section Title row. */
      .wsfc-title-row {
        display: flex;
        align-items: center;
        padding: 0 var(--ha-space-4, 16px);
      }
      .wsfc-title-zone { display: flex; align-items: center; gap: 8px; }
      .wsfc-title-left { flex: 1 1 0; justify-content: flex-start; }
      .wsfc-title-center { flex: 1 1 0; justify-content: center; }
      .wsfc-title-right { flex: 1 1 0; justify-content: flex-end; }
      .wsfc-title-icon { color: var(--paper-item-icon-color, var(--state-icon-color)); flex: 0 0 auto; }
      .wsfc-title-text { color: var(--primary-text-color); }

      /* Explicit current-weather header sizes (override the base container-query
         that otherwise shrinks state/temperature). Applied only when the user
         sets a size. !important beats the base @container rule. */
      .wsfc-hdr-sized .wsfc-current-state { font-size: var(--wfc-hdr-state, inherit) !important; }
      .wsfc-hdr-sized .wsfc-current-temperature { font-size: var(--wfc-hdr-temp, inherit) !important; }

      /* Digital clock in the Current Weather section. */
      .wsfc-cur-stack { display: flex; flex-direction: column; gap: 6px; width: 100%; }
      .wsfc-cur-row { display: flex; align-items: center; gap: 12px; width: 100%; }
      .wsfc-cur-grow { flex: 1; min-width: 0; }
      /* When a clock shares the current row, keep the weather block compact and
         LEFT-packed: icon, then condition text, then temperature — all grouped
         to the left so the temperature no longer stretches to the block's right
         edge and collide with the clock. */
      .wsfc-cur-row-clocked .wsfc-current-conditions {
        justify-content: flex-start;
        gap: 10px;
      }
      /* Don't let the name/state cell grow and shove the temperature rightward. */
      .wsfc-cur-row-clocked .wsfc-name-state { flex: 0 1 auto; min-width: 0; }
      /* Temperature sits right after the condition, left-aligned, not far-right. */
      .wsfc-cur-row-clocked .wsfc-current-primary-secondary { align-items: flex-start; flex: 0 0 auto; }
      /* Above/below bands: a 3-cell row (left / center / right). */
      .wsfc-clock-band { display: flex; width: 100%; align-items: center; }
      .wsfc-clock-band-cell { display: flex; align-items: center; }
      .wsfc-cb-left { flex: 1; justify-content: flex-start; }
      .wsfc-cb-center { flex: 1; justify-content: center; }
      .wsfc-cb-right { flex: 1; justify-content: flex-end; }
      .wsfc-clock { display: flex; flex-direction: column; align-items: center; line-height: 1.05; flex: 0 0 auto; }
      .wsfc-clock-time { color: var(--primary-text-color); font-variant-numeric: tabular-nums; white-space: nowrap; }
      .wsfc-clock-date { color: var(--secondary-text-color); white-space: nowrap; }
    </style>`};let q=r0.prototype,L6=new Set(["forecast_mode","default_forecast","forecast_types","forecast.mode","forecast.extra_attribute","entity","current.temperature_entity","forecast.hourly_group_size","current.temperature_precision","forecast.temperature_precision","name","current.secondary_info_attribute","show_moon_phase","icons_path"]),d4={card_appearance:"mdi:palette-outline",current_settings:"mdi:weather-partly-cloudy",forecast_settings:"mdi:chart-line",forecast_interactions:"mdi:gesture-tap",interactions:"mdi:gesture-tap-button",advanced_settings:"mdi:tune",attribute_entities:"mdi:database-outline"},k3=null;function l6(){return k3||(k3=new Set,Object.values(u7).forEach(M=>M.forEach(m=>k3.add(m)))),k3}function p4(M,m){let d=[];return M.forEach(A=>{if(!m.has(A.name))if(A.schema){let _=p4(A.schema,m);_.length&&d.push({...A,schema:_})}else d.push(A)}),d}function Bt(M){let m=l6(),d=new Set([...m,...L6]);M=p4(M,d);let A=new Map,_=[];M.forEach(W=>{L6.has(W.name)||(W.type==="expandable"?_.push(W):A.set(W.name,W))});let w=W=>W.map(N=>A.get(N)).filter(Boolean),S=(W,N,a1)=>{let p1=w(a1);return p1.length?[{name:W,type:"expandable",flatten:!0,icon:N,schema:p1}]:[]},E=W=>_.find(N=>N.name===W),B=[];{let W=E("attribute_entities");W&&B.push(d4.attribute_entities?{...W,icon:d4.attribute_entities}:W)}return B}let di=["forecast.scroll_to_selected","forecast.show_sun_times","forecast.use_color_thresholds","forecast.show_attribute_selector"],zt=["forecast_action.tap_action","forecast_action.hold_action","forecast_action.double_tap_action"],It=["tap_action","hold_action","double_tap_action"],Nt=["show_condition_effects"],Wt=[],u7={current:["current.show_attributes"],hourly:[],daily:[]},c6={card_appearance:"Card Appearance",current_settings:"Current Weather",forecast_settings:"Forecast Settings",interactions:"Card actions",forecast_interactions:"Forecast actions",advanced_settings:"Advanced settings",attribute_entities:"Metric entities",tap_action:"Tap action",hold_action:"Hold action",double_tap_action:"Double tap action",entity:"Primary Weather Source (required)",name:"Custom Friendly Name","current.temperature_entity":"Custom Temperature Entity (optional)","current.show_attributes":"Built-in metrics","current.secondary_info_attribute":"Secondary info metric","forecast.show_attribute_selector":"Show forecast metric selector"},Ut="Weather Flex sections";q.render=function(){if(!this.hass||!this._config)return Z;let M=lt(this._config),m=this._getSelectedAttributes(M),d=this._schema(this.localize.bind(this),m,M["forecast.mode"]),A=Bt(d),_=S=>c6[S.name]||this._computeLabel(S)||S.name,w=this._wfcAccordionEnabled();return x`
      ${this._wfcEditorStyle()}
      <div class="wsfc-ed-header">
        <div class="wsfc-ed-title">
          <span class="wsfc-ed-name">${Ut}</span>
          <span class="wsfc-ed-ver">build ${r}</span>
        </div>
        <label class="wsfc-ed-accordion wsfc-check-row">
          <input
            type="checkbox"
            class="wsfc-checkbox"
            .checked=${w}
            @change=${S=>this._wfcSetAccordion(S.target.checked)}
          />
          <span>Auto Collapse setting panels when opening new panel</span>
        </label>
      </div>
      ${A.length?x`<ha-form
            .hass=${this.hass}
            .data=${M}
            .schema=${A}
            .computeLabel=${_}
            .computeHelper=${S=>this._wfcHelper(S)}
            @value-changed=${this._valueChanged}
          ></ha-form>`:Z}
      ${this._wfcCardAppearancePanel()}
      ${this._wfcWeatherSourcesPanel()}
      ${this._wfcEditor()}
      ${this._wfcUserActionsPanel()}
      ${this._wfcAdvancedPanel()}
      ${this._wfcYamlPanel()}
    `},q._wfcCardAppearancePanel=function(){let M=l2(this._config).card||{},m="card";return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${d4.card_appearance}></ha-icon><span class="wsfc-panel-title">Card Appearance</span></summary>
        <div class="wsfc-ed-panel">
          ${this._wfcConfigCheckbox("show_moon_phase","Show moon phase",this._config.show_moon_phase,!0)}
          <p class="wsfc-hint">Shades the night-time moon to match the current lunar phase. Disable to always show a full moon.</p>
          ${this._wfcStockFormFor(Nt)}
          <p class="wsfc-hint">Which weather conditions trigger visual effects/animations on the card.</p>
          ${this._wfcConfigText("icons_path","Custom icons path",this._config.icons_path,"/local/img/weather")}
          <p class="wsfc-hint">Path to custom weather condition icons (e.g. /local/img/weather).</p>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Border</div>
            ${this._wfcCheckbox("Card border",!!M.border_enabled,d=>this._wfcToggleSecField(m,"border_enabled",d))}
            ${M.border_enabled?x`
                  ${this._wfcColorField("Border color",M.border_color,d=>this._wfcSetSecField(m,"border_color",d.target.value))}
                  ${this._wfcNumField(m,"border_width","Border width","px",M.border_width,1)}
                  ${this._wfcNumField(m,"border_radius","Corner radius","px",M.border_radius,12)}
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top",M.border_top!==!1,d=>this._wfcToggleSecField(m,"border_top",d))}
                    ${this._wfcCheckbox("Bottom",M.border_bottom!==!1,d=>this._wfcToggleSecField(m,"border_bottom",d))}
                    ${this._wfcCheckbox("Left",M.border_left!==!1,d=>this._wfcToggleSecField(m,"border_left",d))}
                    ${this._wfcCheckbox("Right",M.border_right!==!1,d=>this._wfcToggleSecField(m,"border_right",d))}
                  </div>
                  <p class="wsfc-hint">Rounded corners (uncheck to square a corner):</p>
                  <div class="wsfc-toggle-row">
                    ${this._wfcCheckbox("Top-left",M.corner_tl!==!1,d=>this._wfcToggleSecField(m,"corner_tl",d))}
                    ${this._wfcCheckbox("Top-right",M.corner_tr!==!1,d=>this._wfcToggleSecField(m,"corner_tr",d))}
                    ${this._wfcCheckbox("Bottom-right",M.corner_br!==!1,d=>this._wfcToggleSecField(m,"corner_br",d))}
                    ${this._wfcCheckbox("Bottom-left",M.corner_bl!==!1,d=>this._wfcToggleSecField(m,"corner_bl",d))}
                  </div>`:Z}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Background</div>
            ${this._wfcColorField("Card background",M.bg_color,d=>this._wfcSetSecField(m,"bg_color",d.target.value))}
            <p class="wsfc-hint">Blank = theme card background.</p>
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Glow</div>
            ${this._wfcCheckbox("Card glow",!!M.glow_enabled,d=>this._wfcToggleSecField(m,"glow_enabled",d))}
            ${M.glow_enabled?x`
                  ${this._wfcColorField("Glow color",M.glow_color,d=>this._wfcSetSecField(m,"glow_color",d.target.value))}
                  ${this._wfcPlainSlider("Glow intensity","%",Math.round((M.glow_intensity==null?1:M.glow_intensity)*100),100,"glow_intensity",d=>this._wfcSetSecField(m,"glow_intensity",n((parseInt(d.target.value,10)||100)/100,.2,3)))}
                  ${this._wfcCheckbox("Glow only the enabled border sides",M.glow_borders_only!==!1,d=>this._wfcToggleSecField(m,"glow_borders_only",d))}`:Z}
          </div>

          <div class="wsfc-style-block">
            <div class="wsfc-style-block-title">Drop shadow</div>
            ${this._wfcCheckbox("Card shadow",!!M.shadow_enabled,d=>this._wfcToggleSecField(m,"shadow_enabled",d))}
            ${M.shadow_enabled?x`
                  ${this._wfcColorField("Shadow color",M.shadow_color,d=>this._wfcSetSecField(m,"shadow_color",d.target.value))}
                  ${this._wfcNumField(m,"shadow_x","Offset X","px",M.shadow_x,0)}
                  ${this._wfcNumField(m,"shadow_y","Offset Y","px",M.shadow_y,4)}
                  ${this._wfcNumField(m,"shadow_blur","Blur","px",M.shadow_blur,16)}
                  ${this._wfcNumField(m,"shadow_spread","Spread","px",M.shadow_spread,0)}
                  ${this._wfcNumField(m,"shadow_opacity","Opacity","%",M.shadow_opacity,35)}`:Z}
          </div>
        </div>
      </details>
    `};let u4=4;q._wfcEdSources=function(){return V6(this._config,this.hass)},q._wfcCommitSources=function(M){let m=M.filter(W=>W&&W.ref).map(W=>{let N={};for(let p1 in W.overrides||{})W.overrides[p1]&&(N[p1]=W.overrides[p1]);let a1={ref:W.ref};return Object.keys(N).length&&(a1.overrides=N),W.disabled&&(a1.disabled=!0),a1}),d={...this._config.metric_sources||{}};delete d.primary,delete d.fallback,delete d.custom,delete d.device_map,m.length?d.sources=m:delete d.sources;let A={...this._config,metric_sources:d},_=W=>{let N=this.hass&&this.hass.states[W],a1=N&&N.attributes&&N.attributes.supported_features;return typeof a1=="number"&&(a1&7)!==0},w=W=>W.map(N=>N.ref).filter(N=>typeof N=="string"&&N.startsWith("weather.")),S=w(m.filter(W=>!W.disabled)),E=w(m),B=S.find(_)||S[0]||E.find(_)||E[0];B&&(A.entity=B),Object.keys(d).length===0&&delete A.metric_sources,a2(this,"config-changed",{config:A})},q._wfcSetSourceRef=function(M,m){let d=this._wfcEdSources();d[M]&&(m?d[M]={ref:m,overrides:d[M].overrides||{}}:d.splice(M,1),this._wfcCommitSources(d))},q._wfcAddSource=function(M){if(!M)return;let m=this._wfcEdSources();m.length>=u4||(m.push({ref:M,overrides:{}}),this._wfcCommitSources(m))},q._wfcMoveSource=function(M,m){let d=this._wfcEdSources(),A=M+m;if(M<0||A<0||A>=d.length)return;let _=d[M];d[M]=d[A],d[A]=_,this._wfcCommitSources(d)},q._wfcRemoveSource=function(M){let m=this._wfcEdSources();M<0||M>=m.length||(m.splice(M,1),this._wfcCommitSources(m))},q._wfcToggleSourceDisabled=function(M){let m=this._wfcEdSources();m[M]&&(m[M].disabled=!m[M].disabled,this._wfcCommitSources(m))},q._wfcSetSourceOverride=function(M,m,d){let A=this._wfcEdSources();if(!A[M])return;let _={...A[M].overrides||{}};d?_[m]=d:delete _[m],A[M].overrides=_,this._wfcCommitSources(A)},q._wfcLiveValue=function(M,m){let d=this.hass&&this.hass.states[M];if(!d)return"";let A,_;return M.startsWith("weather.")?(A=d.attributes?d.attributes[m]:null,_=d.attributes&&d.attributes[m+"_unit"]):(A=d.state,_=d.attributes&&d.attributes.unit_of_measurement),A==null||A===""||A==="unknown"||A==="unavailable"?"":_?`${A} ${_}`:`${A}`},q._wfcAvailableMetrics=function(){let M=new Set;if(!this.hass)return M;let m=new Set;this._config.entity&&m.add(this._config.entity);for(let A of this._wfcEdSources())if(!A.disabled)if(A.overrides&&Object.keys(A.overrides).forEach(_=>{M.add(_),m.add(A.overrides[_])}),t2(A.ref)){let _=q0(this._config,this.hass,_2(A.ref));Object.keys(_).forEach(w=>{M.add(w),m.add(_[w])})}else A.ref&&m.add(A.ref);m.forEach(A=>{let _=this.hass.states[A];_&&_.attributes&&Object.keys(_.attributes).forEach(w=>M.add(w))});let d=A=>{if(Array.isArray(A))for(let _ of A)_&&Object.keys(_).forEach(w=>M.add(w))};return d(this._hourlyForecastData),d(this._dailyForecastData),this.__wfcSrc&&Object.values(this.__wfcSrc).forEach(A=>{A&&(d(A.hourly),d(A.daily))}),M};function jt(M){return String(M).split(/[_\s]+/).filter(Boolean).map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" ")}let g5={uv_index:"UV Index",apparent_temperature:"Apparent Temp / Feels Like",dew_point:"Dew Point",wind_gust_speed:"Wind Gust"};function u1(M){return g5[M]||jt(M)}q._wfcMetricOptions=function(M,m){let d=this._wfcAvailableMetrics(),A=m?[{value:"",label:"High / Low Temperature"},{value:"__wfc_none__",label:"None (show nothing)"}]:[];return(M||[]).forEach(_=>{let w=u1(_);A.push({value:_,label:d.has(_)?w:`${w} (unavailable)`})}),A},q._wfcSourceMappingEditor=function(M,m){let d=m.ref,A=m.overrides||{},_=t2(d),w=_?_2(d):null,S=_?d7(this.hass,w):{},E=N=>{if(_)return S[N]||"";if(!d)return"";if(d.startsWith("weather.")){let a1=this.hass&&this.hass.states[d];return a1&&a1.attributes&&a1.attributes[N]!=null?d:""}return""},B=_?{include_entities:Z3(this.hass,w)}:{},W=N=>{let a1=N.key,p1=A[a1]||E(a1),D=!!A[a1],M1=p1?this._wfcLiveValue(p1,a1):"",G1=[{name:"e",selector:{entity:B}}],F1=D?" (override)":p1?"":" \u2014 none";return x`
        <div class="wsfc-srcmap-row">
          <ha-form
            .hass=${this.hass}
            .data=${{e:p1}}
            .schema=${G1}
            .computeLabel=${()=>N.label+F1}
            @value-changed=${$1=>this._wfcSetSourceOverride(M,a1,$1.detail&&$1.detail.value&&$1.detail.value.e||"")}
          ></ha-form>
          <span class="wsfc-srcmap-live">${M1||"\u2014"}</span>
        </div>
      `};return x`
      <details class="wsfc-detail-row2 wsfc-src-devicemap">
        <summary class="wsfc-detail-summary">
          <ha-icon class="wsfc-detail-glyph" icon="mdi:map-marker-path"></ha-icon>
          <span class="wsfc-order-name">Value mapping${_?" (auto-detected)":""}</span>
        </summary>
        <div class="wsfc-detail-fields">
          <p class="wsfc-hint wsfc-grow">${_?"How this device's sensors map to each value. Auto-detected from device class and name; pick a different entity to override. Blank = this source doesn't provide it.":"Which value this source provides. By default a weather entity provides every attribute it exposes; override any value to a different entity (e.g. your own sensor)."}</p>
          ${G0.map(W)}
        </div>
      </details>
    `},q._wfcSourceSummaryList=function(M){let m=M.ref,d=M.overrides||{},A=t2(m),_=A?d7(this.hass,_2(m)):{},w=E=>{if(d[E])return d[E];if(A)return _[E]||"";if(m&&m.startsWith("weather.")){let B=this.hass&&this.hass.states[m];return B&&B.attributes&&B.attributes[E]!=null?m:""}return""},S=[];return G0.forEach(E=>{let B=w(E.key);if(!B)return;let W=this._wfcLiveValue(B,E.key);S.push(x`
        <div class="wsfc-cond-row">
          <span class="wsfc-cond-prop">${E.label}</span>
          <span class="wsfc-cond-ent" title=${B}>${B}</span>
          <span class="wsfc-cond-val">${W||"\u2014"}</span>
        </div>
      `)}),S.length?x`<div class="wsfc-cond-list">${S}</div>`:Z},q._wfcSrcMapOpen=function(){return this.__wfcSrcMapOpen||(this.__wfcSrcMapOpen=new Set),this.__wfcSrcMapOpen},q._wfcToggleSrcMap=function(M){let m=this._wfcSrcMapOpen();m.has(M)?m.delete(M):m.add(M),this.requestUpdate&&this.requestUpdate()},q._wfcToggleAddSource=function(){this.__wfcAddSourceOpen=!this.__wfcAddSourceOpen,this.requestUpdate&&this.requestUpdate()},q._wfcSourceMetricCount=function(M){let m=M.ref,d=M.overrides||{},A=new Set(Object.keys(d).filter(_=>d[_]));if(t2(m))Object.keys(q0(this._config,this.hass,_2(m))).forEach(_=>A.add(_));else if(m&&m.startsWith("weather.")){let _=this.hass&&this.hass.states[m];_&&_.attributes&&G0.forEach(w=>{_.attributes[w.key]!=null&&A.add(w.key)})}return A.size},q._wfcSourceRow=function(M,m,d){let A=M.ref,_=t2(A),w=this._config.entity,S=_&&this.hass&&this.hass.devices&&this.hass.devices[_2(A)],E=_?S&&(S.name_by_user||S.name)||_2(A):A,B=_?"Device":A&&A.startsWith("weather.")?"Weather":"Sensor",W=_?"mdi:access-point":A&&A.startsWith("weather.")?"mdi:weather-partly-cloudy":"mdi:gauge",N=!_&&A&&A.startsWith("weather."),a1=N&&A===w,p1=this._wfcSrcMapOpen().has(A),D=!!M.disabled,M1=this._wfcSourceMetricCount(M),G1=`${M1} value${M1===1?"":"s"} mapped`,F1=a1?x`<span class="wsfc-src-pill" title="Supplies the forecast and weather condition">📡 forecast + condition</span>`:N?x`<span class="wsfc-src-pill" title="Supplies current + forecast metrics (not the card's condition)">current + forecast</span>`:x`<span class="wsfc-src-pill" title="Supplies current conditions only">current conditions</span>`,$1="",q1=A&&!_?this.hass&&this.hass.states[A]:null;if(_)$1=M1?"Local station \u2014 no forecast or weather condition. Keep a weather entity in the list for those.":"No entities matched known weather metrics \u2014 map them with the edit (\u270E) button.";else if(!q1)$1=`\u26A0 Entity not found: ${A}`;else if(q1.state==="unavailable"||q1.state==="unknown")$1=`\u26A0 Currently ${q1.state}.`;else if(N&&!a1){let d1=q1.attributes&&q1.attributes.supported_features;$1=typeof d1=="number"&&(d1&7)===0?"Provides no forecast \u2014 current-state values only.":"Fills values the higher-priority sources don't provide."}else N||($1="Single sensor \u2014 supplies one value (set it with the edit (\u270E) button).");return x`
      <div class="wsfc-src-row ${D?"wsfc-src-off":""}">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon=${W}></ha-icon>
          <span class="wsfc-src-name">${E} <span class="wsfc-src-type">${B}</span></span>
          <ha-icon class="wsfc-ico-btn ${m===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Higher priority" @click=${()=>this._wfcMoveSource(m,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${m===d-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Lower priority" @click=${()=>this._wfcMoveSource(m,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${D?"mdi:eye-off":"mdi:eye"} title=${D?"Hidden \u2014 click to use this source":"In use \u2014 click to hide"} @click=${()=>this._wfcToggleSourceDisabled(m)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${p1?"active":""}" icon="mdi:pencil" title="Edit value mapping" @click=${()=>this._wfcToggleSrcMap(A)}></ha-icon>
          <ha-icon class="wsfc-ico-btn wsfc-ico-del" icon="mdi:trash-can-outline" title="Remove source" @click=${()=>this._wfcRemoveSource(m)}></ha-icon>
        </div>
        <div class="wsfc-src-info">${F1}<span class="wsfc-src-count">${G1}</span>${D?x`<span class="wsfc-src-count">· hidden</span>`:Z}</div>
        ${$1?x`<div class="wsfc-src-detail">${$1}</div>`:Z}
        ${this._wfcSourceSummaryList(M)}
        ${p1?this._wfcSourceMappingEditor(m,M):Z}
      </div>
    `},q._wfcWeatherSourcesPanel=function(){let M=this._wfcEdSources(),m=M.some(S=>S.ref&&!t2(S.ref)&&S.ref.startsWith("weather.")),d=M.length>=u4,A=!!this.__wfcAddSourceOpen&&!d,_=x`
      <ha-form
        .hass=${this.hass}
        .data=${{e:""}}
        .schema=${[{name:"e",selector:{entity:{}}}]}
        .computeLabel=${()=>"Add a weather entity or sensor"}
        @value-changed=${S=>{let E=S.detail&&S.detail.value&&S.detail.value.e;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(E))}}
      ></ha-form>`,w=x`
      <ha-form
        .hass=${this.hass}
        .data=${{d:""}}
        .schema=${[{name:"d",selector:{device:{}}}]}
        .computeLabel=${()=>"\u2026or add a local-station device"}
        @value-changed=${S=>{let E=S.detail&&S.detail.value&&S.detail.value.d;E&&(this.__wfcAddSourceOpen=!1,this._wfcAddSource(c5+E))}}
      ></ha-form>`;return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:database-marker-outline"></ha-icon><span class="wsfc-panel-title">Weather Sources</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">An ordered list of where weather data comes from — <b>top = highest priority</b>. For each value, the card walks the list top-down and uses the first source that has it. A source can be a weather entity, a local-station <b>device</b> (e.g. Ecowitt), or any single sensor. Devices/sensors give current conditions only; the forecast and weather condition always come from the highest weather entity in the list (marked 📡). Units are shown as each source reports them (no conversion).</p>
          ${d?x`<p class="wsfc-hint">Maximum of ${u4} sources reached. Remove one to add another.</p>`:x`
              <div class="wsfc-add-btn" role="button" tabindex="0" @click=${()=>this._wfcToggleAddSource()}>
                <ha-icon icon=${A?"mdi:close":"mdi:plus"}></ha-icon>${A?"Cancel":"Add Source"}
              </div>
              ${A?x`<div class="wsfc-add-pickers">${_}${w}</div>`:Z}
            `}
          ${M.length?M.map((S,E)=>this._wfcSourceRow(S,E,M.length)):x`<p class="wsfc-hint">No sources yet — add one above.</p>`}
          ${!m&&M.length?x`<p class="wsfc-src-warn">⚠ No weather entity in the list — the card needs one for the forecast and weather condition. Add a <code>weather.*</code> entity.</p>`:Z}
          ${this._wfcGroup("Headline temperature")}
          ${this._wfcHeadlineTempRow()}
        </div>
      </details>
    `},q._wfcToggleHeadlineEdit=function(){this.__wfcHeadlineEdit=!this.__wfcHeadlineEdit,this.requestUpdate&&this.requestUpdate()},q._wfcHeadlineTempRow=function(){let M=this._config.current&&this._config.current.temperature_entity,m=M||"",d="";if(!m)for(let w of this._wfcEdSources()){if(w.disabled)continue;let S=this._wfcSlotEntityForKeyEd(w,"temperature");if(S&&this.hass&&this.hass.states[S]){m=S;break}}m?d=this.hass&&this.hass.states[m]&&this.hass.states[m].attributes&&this.hass.states[m].attributes.friendly_name||m:d="\u2014 none available \u2014";let A=m?this._wfcLiveValue(m,"temperature"):"",_=!!this.__wfcHeadlineEdit;return x`
      <div class="wsfc-src-row">
        <div class="wsfc-src-head">
          <ha-icon class="wsfc-src-lead" icon="mdi:thermometer"></ha-icon>
          <span class="wsfc-src-name">${d}${M?x` <span class="wsfc-src-type">override</span>`:Z}</span>
          ${A?x`<span class="wsfc-srcmap-live">${A}</span>`:Z}
          <ha-icon class="wsfc-ico-btn ${_?"active":""}" icon="mdi:pencil" title="Change headline temperature source" @click=${()=>this._wfcToggleHeadlineEdit()}></ha-icon>
        </div>
        ${_?x`
            <p class="wsfc-hint">Pick an entity to force the headline temperature, or clear it to let the source list decide (recommended).</p>
            ${this._wfcStockFormFor(["current.temperature_entity"])}
          `:Z}
      </div>
    `},q._wfcSlotEntityForKeyEd=function(M,m){if(M.overrides&&M.overrides[m])return M.overrides[m];let d=M.ref;if(!d)return null;if(t2(d))return q0(this._config,this.hass,_2(d))[m]||null;if(d.startsWith("weather.")){let A=this.hass&&this.hass.states[d];return A&&A.attributes&&A.attributes[m]!=null?d:null}return null},q._wfcSetForecastTypes=function(M,m){let d=M&&m?"both":M?"hourly":m?"daily":"both",A={...this._config,forecast_types:d};a2(this,"config-changed",{config:A})},q._wfcAdvancedPanel=function(){let M=this._config.forecast_types||"both",m=M==="both"||M==="hourly",d=M==="both"||M==="daily";return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:tune"></ha-icon><span class="wsfc-panel-title">Advanced</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast data to load</div>
          <p class="wsfc-hint">Which forecast the card subscribes to. Loading only what you display reduces websocket load.</p>
          ${this._wfcCheckbox("Hourly",m,A=>this._wfcSetForecastTypes(A.target.checked,d))}
          ${this._wfcCheckbox("Daily",d,A=>this._wfcSetForecastTypes(m,A.target.checked))}
          ${this._wfcGroup("Temperature precision")}
          ${this._wfcConfigSlider("current.temperature_precision","Current temperature precision","",(this._config.current||{}).temperature_precision,0)}
          ${this._wfcConfigSlider("forecast.temperature_precision","Forecast temperature precision","",(this._config.forecast||{}).temperature_precision,0)}
          ${this._wfcGroup("Other")}
          ${this._wfcStockFormFor(Wt)}
        </div>
      </details>
    `},q._wfcUserActionsPanel=function(){let M=this._wfcStockFormFor(zt),m=this._wfcStockFormFor(It),d=this._config.forecast||{};return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:gesture-tap"></ha-icon><span class="wsfc-panel-title">User Actions</span></summary>
        <div class="wsfc-ed-panel">
          <div class="wsfc-sub-title">Forecast actions</div>
          <p class="wsfc-hint">Action to perform when the forecast section is interacted with. Default tap action toggles between hourly and daily forecasts.</p>
          ${M}
          ${this._wfcConfigCheckbox("forecast.scroll_to_selected","Scroll to selected forecast",d.scroll_to_selected,!0)}
          <p class="wsfc-hint">When you tap a day to switch to the hourly view, scroll the hourly strip to that day's first hour (and back to the start when switching to daily).</p>
          ${this._wfcGroup("Card actions")}
          <p class="wsfc-hint">Action to perform when the non-forecast area of the card is interacted with.</p>
          ${m}
        </div>
      </details>
    `};let M6=[{value:"temperature_and_precipitation",label:"Temperature & precipitation"},{value:"apparent_temperature",label:"Apparent temperature"},{value:"humidity",label:"Humidity"},{value:"pressure",label:"Pressure"},{value:"uv_index",label:"UV index"}];q._wfcForecastTypeControls=function(M){let m=this._config.forecast||{},d=[{value:"simple",label:"Simple"},{value:"chart",label:"Chart"}],A=[{value:"none",label:"(no metric)"},{value:"wind_bearing",label:"Wind bearing"},{value:"wind_direction",label:"Wind direction"},{value:"precipitation_probability",label:"Precipitation probability"},{value:"uv_index",label:"UV index"}],_=W=>m[`${W}_mode`]||m.mode||"simple",w=W=>(m[`${W}_extra_attribute`]!=null?m[`${W}_extra_attribute`]:m.extra_attribute)||"none",S=W=>(m[`${W}_chart_attribute`]!=null?m[`${W}_chart_attribute`]:m.default_chart_attribute)||"temperature_and_precipitation",E=(W,N,a1)=>{let p1=m[`${W}_${N}`];if(p1!=null)return!!p1;let D=m[N];return D!=null?!!D:a1},B=_(M)==="chart";return x`
      ${this._wfcGroup("Forecast display")}
      <div class="wsfc-row">
        ${this._wfcForecastSelect(`${M}_mode`,"Display mode",d,_(M),"simple")}
        ${this._wfcForecastSelect(`${M}_extra_attribute`,"Extra metric",A,w(M),"none")}
      </div>
      ${B?x`<div class="wsfc-row">
            ${this._wfcForecastSelect(`${M}_chart_attribute`,"Chart metric",M6,S(M),"temperature_and_precipitation")}
          </div>`:Z}
      ${this._wfcConfigCheckbox(`forecast.${M}_show_sun_times`,"Show sunrise & sunset times",E(M,"show_sun_times",!0),!0)}
      ${B?x`
            ${this._wfcConfigCheckbox(`forecast.${M}_use_color_thresholds`,"Use color thresholds",E(M,"use_color_thresholds",!0),!0)}
            ${this._wfcConfigCheckbox(`forecast.${M}_show_attribute_selector`,"Show metric selector",E(M,"show_attribute_selector",!1),!1)}`:Z}
    `},q._wfcHelper=function(M){let m=this._computeHelper?this._computeHelper(M):void 0;return typeof m=="string"&&(m=m.replace(/attributes/g,"metrics").replace(/attribute/g,"metric").replace(/Attributes/g,"Metrics").replace(/Attribute/g,"Metric")),m},q._wfcAccordionEnabled=function(){return(this._config&&this._config.wfc||{}).editor_accordion!==!1},q._wfcSetAccordion=function(M){let m=this._wfcState();m.editor_accordion=!!M,this._wfcCommit(m),this._wfcApplyAccordion()},q._wfcApplyAccordion=function(){let M=this.renderRoot||this.shadowRoot||this;!M||!M.addEventListener||this.__wfcAccordionHooked||(this.__wfcAccordionHooked=!0,M.addEventListener("toggle",m=>{let d=m.target;if(!d||!d.classList||!d.classList.contains("wsfc-panel")||(this._wfcRememberOpen(d),!d.open)||!this._wfcAccordionEnabled())return;(M.querySelectorAll?M.querySelectorAll("details.wsfc-panel"):[]).forEach(_=>{_!==d&&_.open&&(_.open=!1)})},!0))},q._wfcRememberOpen=function(M){this.__wfcOpenPanels||(this.__wfcOpenPanels=new Set);let m=this._wfcPanelKey(M);m&&(M.open?this.__wfcOpenPanels.add(m):this.__wfcOpenPanels.delete(m))},q._wfcPanelKey=function(M){let m=M.querySelector&&M.querySelector(".wsfc-panel-title");return m?(m.textContent||"").trim():""},q._wfcRestoreOpen=function(){let M=this.renderRoot||this.shadowRoot||this;!M||!M.querySelectorAll||!this.__wfcOpenPanels||M.querySelectorAll("details.wsfc-panel").forEach(m=>{let d=this._wfcPanelKey(m);d&&this.__wfcOpenPanels.has(d)&&(m.open=!0)})},q.updated=function(M){try{let m=Object.getPrototypeOf(q);m&&typeof m.updated=="function"&&m.updated.call(this,M)}catch{}this._wfcApplyAccordion(),this._wfcRestoreOpen()},q._wfcEditorStyle=function(){return x`<style>
      /* Editor accent (easy-entity-styler blue) used by checkboxes/sliders. */
      :host { --wfc-ed-accent: #2196F3; }
      /* Editor panels are native <details> matching easy-entity-styler-card's
         .seed-ed-row: rounded hairline-bordered card, bold header with a blue
         leading icon and a rotating chevron. */
      details.wsfc-panel {
        border: 1px solid #3a3a3a;
        border-radius: 12px;
        background: rgba(255,255,255,0.015);
        margin-bottom: 8px;
      }
      details.wsfc-panel > summary.wsfc-panel-summary {
        list-style: none;
        cursor: pointer;
        user-select: none;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      details.wsfc-panel > summary.wsfc-panel-summary::-webkit-details-marker { display: none; }
      details.wsfc-panel > summary.wsfc-panel-summary::marker { content: ""; }
      details.wsfc-panel > summary .wsfc-panel-title {
        font-size: 15px;
        font-weight: 700;
        color: var(--primary-text-color, #e1e1e1);
      }
      details.wsfc-panel > summary .wsfc-panel-icon {
        --mdc-icon-size: 20px;
        color: var(--wfc-ed-accent, #2196F3);
        flex-shrink: 0;
      }
      details.wsfc-panel > summary::after {
        content: "";
        margin-left: auto;
        width: 10px;
        height: 10px;
        border-right: 2px solid #999;
        border-bottom: 2px solid #999;
        transform: rotate(45deg);
        transition: transform 0.2s ease;
      }
      details.wsfc-panel[open] > summary::after { transform: rotate(-135deg); }
      .wsfc-ed-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
        padding: 4px 4px 12px;
        margin-bottom: 8px;
        border-bottom: 1px solid var(--divider-color, #3a3a3a);
      }
      .wsfc-ed-title { display: flex; align-items: center; gap: 8px; flex: 1 1 auto; min-width: 0; }
      .wsfc-ed-title ha-icon { color: var(--primary-color, #03a9f4); }
      .wsfc-ed-name { font-size: 15px; font-weight: 700; color: var(--primary-text-color, #e1e1e1); white-space: nowrap; flex: 0 0 auto; }
      .wsfc-ed-ver {
        margin-left: auto;
        font-size: 11px;
        color: #888;
        font-family: var(--code-font-family, monospace);
        white-space: nowrap;
        flex: 0 0 auto;
      }
      .wsfc-ed-accordion {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 400;
        color: var(--secondary-text-color);
      }
      /* The accordion toggle label should read as normal weight, not the bold
         .wsfc-check-row default. */
      .wsfc-ed-accordion.wsfc-check-row { font-weight: 400; color: var(--secondary-text-color); }
    </style>`};let d6="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z";q._wfcCustomMetricsBody=function(){let M=a7(this._config.current&&this._config.current.show_attributes);return x`
      <div class="custom-attributes">
        <p class="wsfc-hint">Custom metrics: display any entity's state as a metric — pick an entity and optionally override its label and icon.</p>
        ${M.map((m,d)=>this._renderCustomAttributeRow(m,d))}
        <ha-button size="small" appearance="filled" variant="brand" @click=${this._addCustomAttribute}>
          <ha-svg-icon slot="start" .path=${d6}></ha-svg-icon>
          ${this.hass.localize&&this.hass.localize("ui.panel.lovelace.editor.entities.add")||"Add entity"}
        </ha-button>
      </div>
    `},q._renderCustomAttributes=function(){return this._wfcCustomMetricsBody()};let m7={order:"mdi:view-dashboard-variant-outline",details:"mdi:format-list-bulleted",dividers:"mdi:minus",options:"mdi:cog-outline"};function Y0(M){if(M&&M.detail&&M.detail.value!==void 0)return M.detail.value;let m=M&&M.target;if(m)return(m.type==="checkbox"||typeof m.checked=="boolean")&&(m.tagName==="HA-SWITCH"||m.type==="checkbox")?m.checked:m.value}function O3(M){let m=M&&M.target;return m&&typeof m.checked=="boolean"?m.checked:!!(M&&M.detail&&M.detail.value)}q._wfcState=function(){return JSON.parse(JSON.stringify(l2(this._config)))},q._wfcCommit=function(M){let m={...this._config,wfc:M};a2(this,"config-changed",{config:m})},q._wfcResetSection=function(M){let d=E2(this._config)[M];if(!d)return;let A=this._wfcState(),_=!!(A[M]&&A[M].show);A[M]={...JSON.parse(JSON.stringify(d)),show:_},this._wfcCommit(A)},q._wfcMoveSection=function(M,m){let d=this._wfcState(),A=d.order.indexOf(M),_=A+m;if(A<0||_<0||_>=d.order.length)return;let w=d.order[A];d.order[A]=d.order[_],d.order[_]=w,this._wfcCommit(d)},q._wfcCommitMetrics=function(M,m){let d=this._wfcState();d[M]||(d[M]={});let A=R(d[M]),_=A.map(S=>S.key),w={};A.forEach(S=>w[S.key]=S.pos),m(_,w),d[M].forecast_metric_order=_,d[M].forecast_metric_pos=w,delete d[M].forecast_temps,delete d[M].forecast_icons,delete d[M].forecast_extra,delete d[M].forecast_row_order,delete d[M].forecast_stack,this._wfcCommit(d)},q._wfcMoveMetric=function(M,m,d){this._wfcCommitMetrics(M,A=>{let _=A.indexOf(m),w=_+d;if(_<0||w<0||w>=A.length)return;let S=A[_];A[_]=A[w],A[w]=S})},q._wfcSetMetricPos=function(M,m,d){this._wfcCommitMetrics(M,(A,_)=>{_[m]=d})},q._wfcSetMetricStyle=function(M,m,d,A){let _=this._wfcState();_[M]||(_[M]={});let w={..._[M].forecast_metric_style||{}},S={...w[m]||{}};A==null||A===""?delete S[d]:S[d]=A,Object.keys(S).length?w[m]=S:delete w[m],_[M].forecast_metric_style=w,this._wfcCommit(_)},q._wfcMetricsOrder=function(M,m){let d=R(m),A=m.forecast_metric_style||{};return d.map((_,w,S)=>{let E=A[_.key]||{},B=_.key==="icons",W=_.key!=="temps";return x`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <span class="wsfc-order-name">${T[_.key]||_.key}</span>
            <select
              class="wsfc-native-select wsfc-metric-pos"
              @click=${N=>N.stopPropagation()}
              @change=${N=>this._wfcSetMetricPos(M,_.key,N.target.value)}
            >
              ${F.map(N=>x`<option value=${N.value} ?selected=${N.value===_.pos}>${N.label}</option>`)}
            </select>
            <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${N=>{N.preventDefault(),N.stopPropagation(),this._wfcMoveMetric(M,_.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${w===S.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${N=>{N.preventDefault(),N.stopPropagation(),this._wfcMoveMetric(M,_.key,1)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <p class="wsfc-hint wsfc-grow">Leave a field at its default to fall back to the section styling below.</p>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Show every (overrides default)</span>
              <select class="wsfc-native-select" @change=${N=>this._wfcSetMetricStyle(M,_.key,"every",N.target.value)}>
                ${[{value:"",label:"Use default"},{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(N=>({value:String(N),label:N+(N>1?" hours":" hour")}))].map(N=>x`<option value=${N.value} ?selected=${N.value===(E.every!=null?String(E.every):"")}>${N.label}</option>`)}
              </select>
            </label>
            ${W?x`
                  ${this._wfcColorField("Icon color",E.icon_color,N=>this._wfcSetMetricStyle(M,_.key,"icon_color",N.target.value))}
                  ${this._wfcPlainNum("Icon size (px)",E.icon_size,N=>this._wfcSetMetricStyle(M,_.key,"icon_size",parseFloat(Y0(N))||""))}`:Z}
            ${B?Z:x`
                  ${this._wfcColorField("Text color",E.text_color,N=>this._wfcSetMetricStyle(M,_.key,"text_color",N.target.value))}
                  ${this._wfcPlainNum("Font size (px)",E.text_size,N=>this._wfcSetMetricStyle(M,_.key,"text_size",parseFloat(Y0(N))||""))}`}
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Legibility (busy backgrounds)</span>
              <select class="wsfc-native-select" @change=${N=>this._wfcSetMetricStyle(M,_.key,"contrast",N.target.value)}>
                ${[{value:"",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}].map(N=>x`<option value=${N.value} ?selected=${N.value===(E.contrast||"")}>${N.label}</option>`)}
              </select>
            </label>
          </div>
        </details>
      `})},q._wfcToggleSection=function(M,m){let d=this._wfcState();d[M]||(d[M]={}),d[M].show=O3(m),this._wfcCommit(d)},q._wfcToggleSectionShow=function(M){let m=this._wfcState();m[M]||(m[M]={}),m[M].show=!m[M].show,this._wfcCommit(m)},q._wfcSetSecNum=function(M,m,d){let A=this._wfcState(),_=parseFloat(Y0(d));A[M][m]=isNaN(_)?void 0:_,this._wfcCommit(A)},q._wfcSetSecField=function(M,m,d){let A=this._wfcState();A[M]||(A[M]={}),A[M][m]=d,this._wfcCommit(A)},q._wfcToggleSecField=function(M,m,d){this._wfcSetSecField(M,m,O3(d))},q._wfcSetForecastNum=function(M,m){let d={...this._config.forecast||{}};m==null||m<=0?delete d[M]:d[M]=m,a2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcSetConfigNum=function(M,m,d){let[A,_]=M.split("."),w={...this._config},S={...w[A]||{}},E=m==null||m===""||isNaN(Number(m))?null:Number(m);E==null?delete S[_]:S[_]=E,w[A]=S,a2(this,"config-changed",{config:w})},q._wfcConfigSlider=function(M,m,d,A,_){let w=_5(M,d||""),S=A!=null?n(Number(A),w.min,w.max):Number(_);return this._wfcSliderTpl(m,d,w,S,E=>this._wfcSetConfigNum(M,E.target.value,_))},q._wfcSetConfigStr=function(M,m,d){let A={...this._config};if(M.indexOf(".")===-1)d&&(m==null||m==="")?delete A[M]:A[M]=m;else{let[_,w]=M.split("."),S={...A[_]||{}};d&&(m==null||m==="")?delete S[w]:S[w]=m,A[_]=S}a2(this,"config-changed",{config:A})},q._wfcConfigSelect=function(M,m,d,A,_,w){let S=String(A??_);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${E=>this._wfcSetConfigStr(M,E.target.value,w)}>
          ${d.map(E=>x`<option value=${String(E.value)} ?selected=${String(E.value)===S}>${E.label}</option>`)}
        </select>
      </label>
    `},q._wfcSetConfigBool=function(M,m,d){let A={...this._config},_=(w,S)=>{m===!!d?delete w[S]:w[S]=m};if(M.indexOf(".")===-1)_(A,M);else{let[w,S]=M.split("."),E={...A[w]||{}};_(E,S),A[w]=E}a2(this,"config-changed",{config:A})},q._wfcConfigCheckbox=function(M,m,d,A){let _=d==null?!!A:!!d;return this._wfcCheckbox(m,_,w=>this._wfcSetConfigBool(M,w.target.checked,A))},q._wfcConfigText=function(M,m,d,A){return x`
      <label class="wsfc-field">
        <span class="wsfc-field-label">${m}</span>
        <input
          type="text"
          class="wsfc-input"
          .value=${d||""}
          placeholder=${A||""}
          @change=${_=>this._wfcSetConfigStr(M,_.target.value)}
        />
      </label>
    `},q._wfcSetForecastField=function(M,m){let d={...this._config.forecast||{}};m==null||m===""?delete d[M]:d[M]=m,a2(this,"config-changed",{config:{...this._config,forecast:d}})},q._wfcForecastSelect=function(M,m,d,A,_){let w=String(A??_);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${m}</span>
        <select class="wsfc-native-select" @change=${S=>this._wfcSetForecastField(M,S.target.value)}>
          ${d.map(S=>x`<option value=${String(S.value)} ?selected=${String(S.value)===w}>${S.label}</option>`)}
        </select>
      </label>
    `},q._wfcNumSecField=function(M,m,d,A){let _=parseFloat(Y0(d));this._wfcSetSecField(M,m,isNaN(_)?A:_)},q._wfcMoveDetail=function(M,m){let d=this._wfcState(),A=d.details.items,_=A.findIndex(E=>E.key===M),w=_+m;if(_<0||w<0||w>=A.length)return;let S=A[_];A[_]=A[w],A[w]=S,this._wfcCommit(d)},q._wfcToggleDetail=function(M,m){let d=this._wfcState(),A=d.details.items.find(_=>_.key===M);A&&(A.show=O3(m)),this._wfcCommit(d)},q._wfcToggleDetailShow=function(M){let m=this._wfcState(),d=m.details.items.find(A=>A.key===M);d&&(d.show=!d.show,this._wfcCommit(m))},q._wfcSetDetailValue=function(M,m,d){let A=this._wfcState(),_=A.details.items.find(w=>w.key===M);_&&(_[m]=d),this._wfcCommit(A)},q._wfcSetDetail=function(M,m,d){let A=this._wfcState(),_=A.details.items.find(S=>S.key===M);if(!_)return;let w=Y0(d);if(m==="icon_size"||m==="text_size"){let S=parseFloat(w);w=isNaN(S)?void 0:S}else(w===""||w==null)&&(w=void 0);_[m]=w,this._wfcCommit(A)},q._wfcColorField=function(M,m,d){return x`
      <div class="wsfc-color-field">
        <span class="wsfc-field-label wsfc-color-label">${M}</span>
        <input
          type="color"
          class="wsfc-color-input"
          .value=${m||"#888888"}
          @change=${d}
          @input=${d}
        />
        <span class="wsfc-color-hex">${m||"theme default"}</span>
        <button
          type="button"
          class="wsfc-color-reset"
          title="Reset to theme default"
          ?disabled=${!!!m}
          @click=${()=>d({target:{value:""}})}
        >Reset</button>
      </div>
    `},q._wfcSelect=function(M,m,d,A,_,w){let S=String(_??w);return x`
      <label class="wsfc-select-field">
        <span class="wsfc-field-label">${d}</span>
        <select
          class="wsfc-native-select"
          @change=${E=>this._wfcSetSecField(M,m,E.target.value)}
        >
          ${A.map(E=>x`<option value=${String(E.value)} ?selected=${String(E.value)===S}>${E.label}</option>`)}
        </select>
      </label>
    `};let m4={px:{min:0,max:60,step:1},"%":{min:0,max:100,step:1},"":{min:1,max:72,step:1}};function _5(M,m){return/chip_scale/.test(M)?{min:50,max:250,step:5}:/chip_columns/.test(M)?{min:1,max:6,step:1}:/^columns$|\.columns$/.test(M)?{min:1,max:4,step:1}:/chip_text_size|chip_icon_size/.test(M)?{min:0,max:48,step:1}:/header_icon_size/.test(M)?{min:0,max:140,step:2}:/header_state_size|header_temp_size/.test(M)?{min:0,max:64,step:1}:/global_icon_size|global_text_size/.test(M)?{min:0,max:48,step:1}:/shadow_x|shadow_y|shadow_spread/.test(M)?{min:-40,max:40,step:1}:/shadow_blur/.test(M)?{min:0,max:80,step:1}:/border_radius/.test(M)?{min:0,max:48,step:1}:/border_width/.test(M)?{min:0,max:12,step:1}:/hourly_slots/.test(M)?{min:0,max:48,step:1}:/daily_slots/.test(M)?{min:0,max:14,step:1}:/labels_position|opacity/.test(M)?{min:0,max:100,step:1}:/indent/.test(M)?{min:0,max:120,step:2}:/height/.test(M)?{min:10,max:200,step:2}:/^clock_(font_size|date_font_size)$/.test(M)?{min:8,max:100,step:1}:/font_size|_size$/.test(M)?{min:8,max:48,step:1}:/_width$/.test(M)?{min:1,max:12,step:1}:/_length$/.test(M)?{min:5,max:100,step:5}:/hourly_group_size/.test(M)?{min:1,max:4,step:1}:/temperature_precision/.test(M)?{min:0,max:2,step:1}:/hours/.test(M)?{min:1,max:48,step:1}:m4[m]||m4.px}q._wfcNumField=function(M,m,d,A,_,w){let S=_5(m,A||""),E=_!=null?Number(_):Number(w);return this._wfcSliderTpl(d,A,S,E,B=>this._wfcNumSecField(M,m,B,w))},q._wfcPlainSlider=function(M,m,d,A,_,w){let S=_5(_||"",m||""),E=d!=null?Number(d):Number(A);return this._wfcSliderTpl(M,m,S,E,w)},q._wfcSlotSlider=function(M,m,d){let A=_5(m,""),_=d!=null?n(Number(d),A.min,A.max):0,w=S=>Number(S)<=0?"All":String(S);return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${M}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(_)}
          @input=${S=>{let E=S.target.closest(".wsfc-slider-row"),B=E&&E.querySelector(".wsfc-slider-num");B&&(B.textContent=w(S.target.value))}}
          @change=${S=>this._wfcSetForecastNum(m,parseInt(S.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${w(_)}></span></span>
      </div>
    `},q._wfcAutoSizeField=function(M,m,d){let A=_5(m,""),_=this._wfcState()[M]||{},w=n(parseInt(_[m],10)||0,A.min,A.max),S=E=>Number(E)<=0?"Auto":`${E}px`;return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${d}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${A.min}
          max=${A.max}
          step=${A.step}
          .value=${String(w)}
          @input=${E=>{let B=E.target.closest(".wsfc-slider-row"),W=B&&B.querySelector(".wsfc-slider-num");W&&(W.textContent=S(E.target.value))}}
          @change=${E=>this._wfcSetSecField(M,m,parseInt(E.target.value,10)||0)}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${S(w)}></span></span>
      </div>
    `},q._wfcSliderTpl=function(M,m,d,A,_){let w=m||"";return x`
      <div class="wsfc-slider-row">
        <label class="wsfc-slider-label">${M}</label>
        <input
          type="range"
          class="wsfc-range"
          min=${d.min}
          max=${d.max}
          step=${d.step}
          .value=${String(A)}
          @input=${S=>{let E=S.target.closest(".wsfc-slider-row"),B=E&&E.querySelector(".wsfc-slider-num");B&&(B.textContent=S.target.value)}}
          @change=${_}
        />
        <span class="wsfc-slider-value"><span class="wsfc-slider-num" .textContent=${String(A)}></span>${w}</span>
      </div>
    `},q._wfcCheckbox=function(M,m,d){return x`
      <label class="wsfc-check-row">
        <input type="checkbox" class="wsfc-checkbox" .checked=${!!m} @change=${d} />
        <span>${M}</span>
      </label>
    `},q._wfcGroup=function(M){return M?x`<div class="wsfc-group-div"><span class="wsfc-group-label">${M}</span></div>`:x`<div class="wsfc-group-div"></div>`},q._wfcSubPanel=function(M,m){return x`
      <details class="wsfc-detail-row2 wsfc-subpanel">
        <summary><span class="wsfc-subpanel-title">${M}</span></summary>
        <div class="wsfc-subpanel-body">${m}</div>
      </details>
    `},q._wfcFlushControls=function(M,m){return x`
      ${this._wfcCheckbox("Flush to card edges (no left/right padding)",m.flush_edges,d=>this._wfcToggleSecField(M,"flush_edges",d))}
      ${this._wfcCheckbox("Flush to card top (no upper padding)",m.flush_top,d=>this._wfcToggleSecField(M,"flush_top",d))}
      ${this._wfcCheckbox("Flush to card bottom (no lower padding)",m.flush_bottom,d=>this._wfcToggleSecField(M,"flush_bottom",d))}
    `},q._wfcTextControls=function(M,m,d,A){let _=this._wfcState()[M]||{};return x`
      <div class="wsfc-sub-title">${d}</div>
      <div class="wsfc-row">
        ${this._wfcNumField(M,`${m}_font_size`,"Size","px",_[`${m}_font_size`],A)}
        ${this._wfcSelect(M,`${m}_font_weight`,"Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],_[`${m}_font_weight`],"400")}
      </div>
      ${this._wfcColorField("Color",_[`${m}_color`],w=>this._wfcSetSecField(M,`${m}_color`,w.target.value))}
    `};let h4=[{value:"solid",label:"Solid"},{value:"dashed",label:"Dashed"},{value:"dotted",label:"Dotted"},{value:"double",label:"Double"}];q._wfcDividerControls=function(M,m){return x`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section Divider Above",m.divider_above,d=>this._wfcToggleSecField(M,"divider_above",d))}
      ${m.divider_above?x`
            <div class="wsfc-row">
              ${this._wfcNumField(M,"divider_above_width","Thickness","px",m.divider_above_width,1)}
              ${this._wfcNumField(M,"divider_above_length","Length","%",m.divider_above_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(M,"divider_above_style","Line style",h4,m.divider_above_style,"solid")}
            </div>`:Z}

      ${this._wfcCheckbox("Section Divider Below",m.divider_below,d=>this._wfcToggleSecField(M,"divider_below",d))}
      ${m.divider_below?x`
            <div class="wsfc-row">
              ${this._wfcNumField(M,"divider_below_width","Thickness","px",m.divider_below_width,1)}
              ${this._wfcNumField(M,"divider_below_length","Length","%",m.divider_below_length,100)}
            </div>
            <div class="wsfc-row">
              ${this._wfcSelect(M,"divider_below_style","Line style",h4,m.divider_below_style,"solid")}
            </div>`:Z}

      ${m.divider_above||m.divider_below?this._wfcColorField("Divider color",m.divider_color,d=>this._wfcSetSecField(M,"divider_color",d.target.value)):Z}
    `},q._wfcBackgroundControls=function(M,m){let d=!!m.background_enabled;return x`
      ${this._wfcGroup()}
      ${this._wfcCheckbox("Section background",d,A=>this._wfcToggleSecField(M,"background_enabled",A))}
      ${d?x`
            ${this._wfcColorField("Background color",m.background_color,A=>this._wfcSetSecField(M,"background_color",A.target.value))}
            ${this._wfcPlainSlider("Transparency (0 = solid, 100 = invisible)","%",m.background_opacity==null?80:m.background_opacity,80,"opacity",A=>this._wfcSetSecField(M,"background_opacity",n(parseInt(A.target.value,10)||0,0,100)))}`:Z}
    `},q._wfcSectionStyles=function(M,m){return this._wfcSubPanel("Section Styles",x`
        ${this._wfcFlushControls(M,m)}
        ${this._wfcDividerControls(M,m)}
        ${this._wfcBackgroundControls(M,m)}`)},q._wfcStockForm=function(M){return this._wfcStockFormFor(u7[M])},q._wfcStockFormFor=function(M){if(!M||!M.length)return Z;let m=lt(this._config),d=this._getSelectedAttributes(m),A=this._schema(this.localize.bind(this),d,"chart"),_=new Map,w=B=>B.forEach(W=>{W.schema?w(W.schema):_.set(W.name,W)});w(A);let S=M.map(B=>_.get(B)).filter(Boolean);if(!S.length)return Z;let E=B=>c6[B.name]||this._computeLabel(B)||B.name;return x`
      <ha-form
        .hass=${this.hass}
        .data=${m}
        .schema=${S}
        .computeLabel=${E}
        .computeHelper=${B=>this._wfcHelper(B)}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `},q._wfcTitleControls=function(M,m){return x`
      ${this._wfcCheckbox("Show Title Row",m.title_show,d=>this._wfcToggleSecField(M,"title_show",d))}
      ${m.title_show?x`
            <label class="wsfc-field">
              <span class="wsfc-field-label">Title text</span>
              <input
                type="text"
                class="wsfc-input"
                .value=${m.title_text||""}
                @change=${d=>this._wfcSetSecField(M,"title_text",d.target.value)}
              />
            </label>
            <ha-icon-picker
              label="Title icon"
              .value=${m.title_icon||""}
              @value-changed=${d=>this._wfcSetSecField(M,"title_icon",d.detail&&d.detail.value||"")}
            ></ha-icon-picker>
            <div class="wsfc-row">
              ${this._wfcSelect(M,"title_text_align","Text placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_text_align,"left")}
              ${this._wfcSelect(M,"title_icon_align","Icon placement",[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"hide",label:"Hide"}],m.title_icon_align,"left")}
            </div>
            ${this._wfcNumField(M,"title_font_size","Text size","px",m.title_font_size,15)}
            ${this._wfcSelect(M,"title_font_weight","Text weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],m.title_font_weight,"600")}
            ${this._wfcNumField(M,"title_icon_size","Icon size","px",m.title_icon_size,20)}
            ${this._wfcNumField(M,"title_indent","Indent","px",m.title_indent,0)}
            <div class="wsfc-row">
              ${this._wfcColorField("Text color",m.title_color,d=>this._wfcSetSecField(M,"title_color",d.target.value))}
              ${this._wfcColorField("Icon color",m.title_icon_color,d=>this._wfcSetSecField(M,"title_icon_color",d.target.value))}
            </div>
          `:Z}
    `},q._wfcSectionOptionsBody=function(M,m){let d=m[M]||{},A=M==="details",_=M==="current",w=M==="sun_position",S=M==="sun_arc",E=M==="hourly",B=M==="daily",W=this._config.forecast||{},N=this._config.current||{},a1=n(parseInt(d.columns,10)||2,1,4),p1=this._wfcMetricOptions(typeof U2<"u"?U2:[],!0);return x`
        <div class="wsfc-sub-body">
          <div class="wsfc-sec-reset-row">
            <button
              type="button"
              class="wsfc-sec-reset"
              title="Reset this section's settings to defaults (keeps show/hide)"
              @click=${()=>this._wfcResetSection(M)}
            >↺ Reset section</button>
          </div>
          ${this._wfcTitleControls(M,d)}
          ${_?x`
                ${this._wfcConfigText("name","Custom Friendly Name",this._config.name,"")}
                <p class="wsfc-hint">Friendly name shown under the Current Weather value. Enter a single space to hide it.</p>`:Z}
          ${_?x`
                ${this._wfcGroup("Header sizes")}
                ${this._wfcAutoSizeField(M,"header_icon_size","Condition icon size")}
                ${this._wfcAutoSizeField(M,"header_state_size","Condition text size")}
                ${this._wfcAutoSizeField(M,"header_temp_size","Temperature size")}

                ${this._wfcGroup("Current Weather Header metrics")}
                ${this._wfcConfigSelect("current.secondary_info_attribute","Temperature sub-header Metric",p1,N.secondary_info_attribute||"","",!0)}
                <p class="wsfc-hint">Shown just under the main temperature. "High / Low Temperature" (the default) shows today's forecast high/low; "None" hides this line entirely.</p>
                <p class="wsfc-hint">Metrics shown in the header row (beneath the main temperature). Pick built-in weather metrics and/or add any entity's state as a custom metric — both appear here.</p>
                ${this._wfcStockForm(M)}
                ${this._wfcCustomMetricsBody()}`:this._wfcStockForm(M)}
          ${E?x`
                ${this._wfcForecastTypeControls("hourly")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Hourly forecast slots (0 = All)","hourly_slots",W.hourly_slots)}
                ${this._wfcConfigSlider("forecast.hourly_group_size","Hourly forecast group size","",W.hourly_group_size,1)}`:Z}
          ${B?x`
                ${this._wfcForecastTypeControls("daily")}
                ${this._wfcGroup("Data")}
                ${this._wfcSlotSlider("Daily forecast slots (0 = All)","daily_slots",W.daily_slots)}`:Z}
          ${A?x`
                ${this._wfcGroup("Layout")}
                ${d.chips?x`
                      ${this._wfcSelect(M,"chip_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.chip_layout==="column"?"wrap":d.chip_layout||"wrap","wrap")}
                      ${(d.chip_layout||"wrap")==="grid"?x`
                            ${this._wfcCheckbox("Set a fixed number of columns",parseInt(d.chip_columns,10)>0,D=>this._wfcSetSecField(M,"chip_columns",D.target.checked?n(parseInt(d.chip_columns,10)||2,1,6):0))}
                            ${parseInt(d.chip_columns,10)>0?this._wfcNumField(M,"chip_columns","Columns","",parseInt(d.chip_columns,10)||2,2):Z}`:Z}`:x`
                      ${this._wfcSelect(M,"details_layout","Layout",[{value:"wrap",label:"Wrap (flows left to right)"},{value:"grid",label:"Grid (equal-width columns)"}],d.details_layout||"grid","grid")}
                      ${(d.details_layout||"grid")==="grid"?this._wfcNumField(M,"columns","Columns","",a1,2):Z}`}

                ${this._wfcGroup("Chips")}
                ${this._wfcCheckbox("Display metrics as chips",!!d.chips,D=>this._wfcToggleSecField(M,"chips",D))}
                ${d.chips?x`
                      ${this._wfcCheckbox("Pill (fully rounded ends)",d.chip_pill!=null?!!d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square",D=>this._wfcSetSecField(M,"chip_pill",D.target.checked))}
                      ${(d.chip_pill!=null?d.chip_pill:d.chip_shape!=="rounded"&&d.chip_shape!=="square")?Z:this._wfcNumField(M,"chip_radius","Corner radius (0 = square)","px",d.chip_radius,8)}
                      ${this._wfcPlainSlider("Chip scale","%",Math.round((d.chip_scale==null?1:d.chip_scale)*100),100,"chip_scale",D=>this._wfcSetSecField(M,"chip_scale",n((parseInt(D.target.value,10)||100)/100,.5,2.5)))}
                      ${this._wfcAutoSizeField(M,"chip_text_size","Text size")}
                      ${this._wfcColorField("Chip text",d.chip_text_color,D=>this._wfcSetSecField(M,"chip_text_color",D.target.value))}
                      ${this._wfcColorField("Chip background",d.chip_bg,D=>this._wfcSetSecField(M,"chip_bg",D.target.value))}
                      ${this._wfcColorField("Chip border",d.chip_border_color,D=>this._wfcSetSecField(M,"chip_border_color",D.target.value))}
                      ${this._wfcCheckbox("Show icon on chip",d.chip_show_icon!==!1,D=>this._wfcToggleSecField(M,"chip_show_icon",D))}
                      ${d.chip_show_icon!==!1?x`
                            ${this._wfcSelect(M,"chip_icon_source","Chip icon",[{value:"auto",label:"Metric's default icon"},{value:"entity",label:"Value's custom icon"},{value:"none",label:"None"}],d.chip_icon_source,"auto")}
                            ${this._wfcAutoSizeField(M,"chip_icon_size","Icon size")}
                            ${this._wfcColorField("Icon color",d.chip_icon_color,D=>this._wfcSetSecField(M,"chip_icon_color",D.target.value))}`:Z}
                      ${this._wfcCheckbox("Show metric name in chip",!!d.chip_show_name,D=>this._wfcToggleSecField(M,"chip_show_name",D))}
                      ${this._wfcCheckbox("Hide chip when value is off / unknown",!!d.chip_hide_when_off,D=>this._wfcToggleSecField(M,"chip_hide_when_off",D))}`:Z}

                ${d.chips?x`
                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">Enable and reorder which metrics appear as chips.</p>
                      ${this._wfcDetailRows(m)}`:x`
                      ${this._wfcGroup("Global value styling")}
                      <p class="wsfc-hint">Defaults for every value. Individual values can override these by switching to “Custom”.</p>
                      <div class="wsfc-row">
                        ${this._wfcAutoSizeField(M,"global_icon_size","Icon size")}
                        ${this._wfcAutoSizeField(M,"global_text_size","Text size")}
                      </div>
                      <div class="wsfc-row">
                        ${this._wfcColorField("Icon color",d.global_icon_color,D=>this._wfcSetSecField(M,"global_icon_color",D.target.value))}
                        ${this._wfcColorField("Text color",d.global_text_color,D=>this._wfcSetSecField(M,"global_text_color",D.target.value))}
                      </div>

                      ${this._wfcGroup("Values")}
                      <p class="wsfc-hint">
                        Enable each value and reorder it. Each value uses the global styling above
                        unless set to “Custom”.
                      </p>
                      ${this._wfcDetailRows(m)}`}
              `:Z}

          ${w?x`
                ${this._wfcSubPanel("Time",x`
                    ${this._wfcGroup("Timeframe")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(M,"timeframe_mode","Time Frame",[{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"},{value:"match_arc",label:"Match Sun Position arc"}],d.timeframe_mode,"hours")}
                      ${d.timeframe_mode==="hours"||d.timeframe_mode==null?x`
                            ${this._wfcNumField(M,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                            ${this._wfcSelect(M,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                          `:Z}
                    </div>
                    ${this._wfcGroup("Time labels & tick marks")}
                    <div class="wsfc-row">
                      ${this._wfcSelect(M,"times_position","Time Labels",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.times_position==="center"?"overlay":d.times_position,"below")}
                      ${this._wfcSelect(M,"ticks_position","Time tick marks",[{value:"hidden",label:"Hide"},{value:"overlay",label:"Overlay on bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ticks_position,"hidden")}
                    </div>
                    ${this._wfcSelect(M,"ticks_every","Show a label / tick every",[{value:0,label:"Auto (fit ~8 across)"},...[1,2,3,4,6,8,12].map(D=>({value:D,label:D+(D>1?" hours":" hour")}))],d.ticks_every==null?0:d.ticks_every,0)}
                    <p class="wsfc-hint">Controls the spacing of both the time labels and the tick marks.</p>
                    ${this._wfcTextControls(M,"times","Time labels",11)}`)}

                ${this._wfcSubPanel("Current-time marker",x`
                    <div class="wsfc-row">
                      ${this._wfcColorField("Marker color",d.marker_color,D=>this._wfcSetSecField(M,"marker_color",D.target.value))}
                      ${this._wfcNumField(M,"marker_opacity","Marker opacity","%",d.marker_opacity==null?100:d.marker_opacity,100)}
                    </div>`)}

                ${this._wfcSubPanel("Sunrise & sunset markers",x`
                    <div class="wsfc-row">
                      ${this._wfcSelect(M,"ss_markers_position","Position",[{value:"hidden",label:"Hide"},{value:"overlay",label:"On the bar"},{value:"above",label:"Above bar"},{value:"below",label:"Below bar"}],d.ss_markers_position,"hidden")}
                    </div>
                    ${d.ss_markers_position&&d.ss_markers_position!=="hidden"?x`<div class="wsfc-row">
                          ${this._wfcColorField("Marker color",d.ss_markers_color,D=>this._wfcSetSecField(M,"ss_markers_color",D.target.value))}
                          ${this._wfcNumField(M,"ss_markers_opacity","Marker opacity","%",d.ss_markers_opacity==null?100:d.ss_markers_opacity,100)}
                        </div>`:Z}`)}

                ${this._wfcSubPanel("Forecast Weather Metrics",x`
                    ${this._wfcSubPanel("Metrics Defaults",x`
                        ${this._wfcCheckbox("Use Current Weather Metrics icons",!!d.forecast_metric_detail_icons,D=>this._wfcToggleSecField(M,"forecast_metric_detail_icons",D))}
                        ${this._wfcCheckbox("Temperature text beside the condition icon",!!d.forecast_temp_with_icon,D=>this._wfcToggleSecField(M,"forecast_temp_with_icon",D))}
                        <div class="wsfc-row">
                          ${this._wfcSelect(M,"forecast_every","Show every",[{value:"all",label:"Every forecast hour"},{value:"ticks",label:"On shown tick marks"},{value:"midticks",label:"Between tick marks"},...[1,2,3,4,5,6].map(D=>({value:D,label:D+(D>1?" hours":" hour")}))],d.forecast_every,3)}
                          ${this._wfcNumField(M,"forecast_font_size","Text size","px",d.forecast_font_size,11)}
                          ${this._wfcNumField(M,"forecast_icon_size","Icon size","px",d.forecast_icon_size,22)}
                        </div>
                        ${this._wfcColorField("Temperature color",d.forecast_temp_color,D=>this._wfcSetSecField(M,"forecast_temp_color",D.target.value))}
                        ${this._wfcColorField("Icon color",d.forecast_icon_color,D=>this._wfcSetSecField(M,"forecast_icon_color",D.target.value))}
                        ${y.some(D=>d.forecast_metric_pos&&d.forecast_metric_pos[D]&&d.forecast_metric_pos[D]!=="hidden"||O(d).includes(D))?this._wfcColorField("Metric Text Color",d.forecast_extra_color,D=>this._wfcSetSecField(M,"forecast_extra_color",D.target.value)):Z}`)}
                    <p class="wsfc-hint">Show/hide and place each metric, and drag the order to control exactly where each sits on the bar. Order is outer → inner. Expand a metric to override the defaults (including its own "Show every").</p>
                    ${this._wfcMetricsOrder(M,d)}`)}

                ${this._wfcSubPanel("Bar Size & Colors",x`
                    ${this._wfcNumField(M,"height","Bar height","px",d.height,44)}
                    <p class="wsfc-hint">Gradient colors — blank = built-in palette.</p>
                    ${this._wfcCheckbox("Adjust colors for forecast (clouds)",d.weather_adjust!==!1,D=>this._wfcToggleSecField(M,"weather_adjust",D))}
                    <div class="wsfc-row">
                      ${this._wfcColorField("Day color",d.day_color,D=>this._wfcSetSecField(M,"day_color",D.target.value))}
                      ${this._wfcColorField("Night color",d.night_color,D=>this._wfcSetSecField(M,"night_color",D.target.value))}
                    </div>`)}

                ${this._wfcSectionStyles(M,d)}
              `:Z}

          ${S?x`
                <div class="wsfc-row">
                  ${this._wfcNumField(M,"height","Arc height","px",d.height,90)}
                  ${this._wfcSelect(M,"time_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.time_format,"auto")}
                </div>

                ${this._wfcGroup("Timeframe")}
                <div class="wsfc-row">
                  ${this._wfcSelect(M,"timeframe_mode","Time Frame",[{value:"sunrise_sunset",label:"Sunrise \u2192 sunset (fill width)"},{value:"hours",label:"Number of hours"},{value:"day",label:"Current full day"}],d.timeframe_mode,"sunrise_sunset")}
                  ${d.timeframe_mode==="hours"?x`
                        ${this._wfcNumField(M,"timeframe_hours","Hours","",d.timeframe_hours,24)}
                        ${this._wfcSelect(M,"timeframe_anchor","Anchor",[{value:"now_left",label:"Now at left"},{value:"now_center",label:"Now centered"}],d.timeframe_anchor,"now_left")}
                      `:Z}
                </div>
                <div class="wsfc-hint">When the baseline is the Sky Bar, the arc matches that bar's timeframe automatically.</div>

                <div class="wsfc-hint">Labels vertical position: 0 = below the arc, 50 = mid, 100 = above.</div>
                ${this._wfcPlainSlider("Labels position","",e1(d.labels_position),0,"labels_position",D=>this._wfcSetSecField(M,"labels_position",n(parseInt(D.target.value,10)||0,0,100)))}
                ${this._wfcGroup("Sun marker")}
                <ha-icon-picker
                  label="Sun icon (blank = filled dot)"
                  .value=${d.sun_icon||""}
                  @value-changed=${D=>this._wfcSetSecField(M,"sun_icon",D.detail&&D.detail.value||"")}
                ></ha-icon-picker>
                ${this._wfcCheckbox("Use a moon icon at night (between sunset & sunrise)",!!d.night_moon,D=>this._wfcToggleSecField(M,"night_moon",D))}
                ${d.night_moon?x`<ha-icon-picker
                      label="Moon icon"
                      .value=${d.moon_icon||"mdi:weather-night"}
                      @value-changed=${D=>this._wfcSetSecField(M,"moon_icon",D.detail&&D.detail.value||"mdi:weather-night")}
                    ></ha-icon-picker>`:Z}

                ${this._wfcGroup("Baseline")}
                <div class="wsfc-row">
                  ${this._wfcSelect(M,"baseline_mode","Baseline",[{value:"line",label:"Horizon line"},{value:"sky",label:"Sky Bar"}],d.baseline_mode,"line")}
                </div>
                <div class="wsfc-hint">“Sky Bar” reuses the settings from the Sky Bar panel.</div>

                ${this._wfcGroup("Tick marks")}
                ${this._wfcCheckbox("Show tick marks on the arc",d.show_arc_ticks,D=>this._wfcToggleSecField(M,"show_arc_ticks",D))}
                ${this._wfcCheckbox("Show tick marks on the baseline",d.show_base_ticks!==!1,D=>this._wfcToggleSecField(M,"show_base_ticks",D))}
                <div class="wsfc-row">
                  ${this._wfcSelect(M,"sunrise_sunset_ticks","Sunrise & sunset ticks",[{value:"none",label:"None"},{value:"arc",label:"On the arc"},{value:"base",label:"On the baseline"},{value:"both",label:"Arc and baseline"}],d.sunrise_sunset_ticks,"none")}
                </div>
                ${this._wfcColorField("Tick color",d.tick_color,D=>this._wfcSetSecField(M,"tick_color",D.target.value))}

                ${this._wfcGroup("Sunrise / sunset labels")}
                ${this._wfcCheckbox("Show times",d.show_times!==!1,D=>this._wfcToggleSecField(M,"show_times",D))}
                ${this._wfcCheckbox("Show captions (sunrise / sunset)",d.show_captions!==!1,D=>this._wfcToggleSecField(M,"show_captions",D))}

                ${this._wfcGroup("Sunrise / sunset icons")}
                ${this._wfcCheckbox("Show sunrise & sunset icons",d.show_ss_icons,D=>this._wfcToggleSecField(M,"show_ss_icons",D))}
                ${d.show_ss_icons?x`
                      <ha-icon-picker
                        label="Sunrise icon"
                        .value=${d.sunrise_icon||"mdi:weather-sunset-up"}
                        @value-changed=${D=>this._wfcSetSecField(M,"sunrise_icon",D.detail&&D.detail.value||"")}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Sunset icon"
                        .value=${d.sunset_icon||"mdi:weather-sunset-down"}
                        @value-changed=${D=>this._wfcSetSecField(M,"sunset_icon",D.detail&&D.detail.value||"")}
                      ></ha-icon-picker>
                      <div class="wsfc-row">
                        ${this._wfcSelect(M,"ss_icon_position","Icon placement",[{value:"left",label:"Left of text"},{value:"right",label:"Right of text"},{value:"above",label:"Above text"},{value:"below",label:"Below text"}],d.ss_icon_position,"left")}
                        ${this._wfcNumField(M,"ss_icon_size","Icon size","px",d.ss_icon_size,20)}
                      </div>
                      ${this._wfcColorField("Icon color",d.ss_icon_color,D=>this._wfcSetSecField(M,"ss_icon_color",D.target.value))}
                    `:Z}

                ${this._wfcTextControls(M,"time","Time text",13)}
                ${this._wfcTextControls(M,"caption","Sunrise / sunset caption",11)}
              `:Z}

          ${w?Z:this._wfcSectionStyles(M,d)}
        </div>
    `};let p6={current:"mdi:weather-partly-cloudy",details:"mdi:format-list-bulleted",hourly:"mdi:clock-outline",daily:"mdi:calendar-week",sun_position:"mdi:white-balance-sunny",sun_arc:"mdi:sine-wave"};q._wfcPlainNum=function(M,m,d){return this._wfcPlainSlider(M,"px",m,16,"_size",d)},q._wfcDetailRows=function(M){return M.details.items.map((d,A,_)=>{let w=o[d.key]||{};return x`
        <details class="wsfc-detail-row2">
          <summary class="wsfc-detail-summary">
            <ha-icon class="wsfc-detail-glyph wsfc-glyph-accent" icon=${d.icon||w.icon||"mdi:tag-outline"}></ha-icon>
            <span class="wsfc-order-name">${w.label||d.key}</span>
            <ha-icon class="wsfc-ico-btn ${A===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up"
              @click=${S=>{S.preventDefault(),S.stopPropagation(),this._wfcMoveDetail(d.key,-1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn ${A===_.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down"
              @click=${S=>{S.preventDefault(),S.stopPropagation(),this._wfcMoveDetail(d.key,1)}}></ha-icon>
            <ha-icon class="wsfc-ico-btn" icon=${d.show?"mdi:eye":"mdi:eye-off"} title=${d.show?"Shown \u2014 click to hide":"Hidden \u2014 click to show"}
              @click=${S=>{S.preventDefault(),S.stopPropagation(),this._wfcToggleDetailShow(d.key)}}></ha-icon>
          </summary>
          <div class="wsfc-detail-fields">
            <ha-icon-picker
              class="wsfc-grow"
              label="Icon (blank = default)"
              .placeholder=${w.icon||""}
              .value=${d.icon||""}
              @value-changed=${S=>this._wfcSetDetail(d.key,"icon",S)}
            ></ha-icon-picker>
            <label class="wsfc-select-field wsfc-grow">
              <span class="wsfc-field-label">Styling</span>
              <select class="wsfc-native-select" @change=${S=>this._wfcSetDetailValue(d.key,"mode",S.target.value)}>
                <option value="global" ?selected=${d.mode!=="custom"}>Global (use section defaults)</option>
                <option value="custom" ?selected=${d.mode==="custom"}>Custom</option>
              </select>
            </label>
            ${d.mode==="custom"?x`
                  ${this._wfcPlainNum("Icon size (px)",d.icon_size,S=>this._wfcSetDetail(d.key,"icon_size",S))}
                  ${this._wfcPlainNum("Text size (px)",d.text_size,S=>this._wfcSetDetail(d.key,"text_size",S))}
                  ${this._wfcColorField("Icon color",d.icon_color,S=>this._wfcSetDetail(d.key,"icon_color",S))}
                  ${this._wfcColorField("Text color",d.text_color,S=>this._wfcSetDetail(d.key,"text_color",S))}
                `:Z}
          </div>
        </details>
      `})};let u6=["current","details","hourly","daily","sun_arc","sun_position"];function Gt(M){let m=u6.filter(A=>M.includes(A)),d=M.filter(A=>!u6.includes(A));return[...m,...d]}q._wfcEditor=function(){let M=l2(this._config),m=Gt(M.order),d=M.order.map((_,w,S)=>{let E=!!(M[_]&&M[_].show);return x`
        <div class="wsfc-order-row">
          <ha-icon class="wsfc-order-lead" icon=${p6[_]||m7.options}></ha-icon>
          <span class="wsfc-order-name">${i[_]||_}</span>
          <ha-icon class="wsfc-ico-btn ${w===0?"disabled":""}" icon="mdi:arrow-up-bold" title="Move up" @click=${()=>this._wfcMoveSection(_,-1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn ${w===S.length-1?"disabled":""}" icon="mdi:arrow-down-bold" title="Move down" @click=${()=>this._wfcMoveSection(_,1)}></ha-icon>
          <ha-icon class="wsfc-ico-btn" icon=${E?"mdi:eye":"mdi:eye-off"} title=${E?"Shown \u2014 click to hide":"Hidden \u2014 click to show"} @click=${()=>this._wfcToggleSectionShow(_)}></ha-icon>
        </div>
      `}),A=m.map(_=>x`
        <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${p6[_]||m7.options}></ha-icon><span class="wsfc-panel-title">${i[_]||_}</span></summary>
          <div class="wsfc-ed-panel">
            ${this._wfcSectionOptionsBody(_,M)}
          </div>
        </details>
      `);return x`
      <style>
        .wsfc-ed-panel { padding: 8px 12px 12px; }
        .wsfc-hint { color: #888; font-size: 11px; margin: 4px 0 12px; }
        .wsfc-src-warn { color: var(--warning-color, #ffa726); font-size: 12px; margin: 2px 0 10px; }
        /* Weather Sources ordered-list rows (design-system "Section rows"):
           raised box, 20px accent leading icon, normal-weight name, type badge,
           no-padding action icons; delete turns red on hover. */
        .wsfc-src-row {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--divider-color, #444);
          border-radius: 10px;
          padding: 6px 8px;
          margin: 0 0 8px;
        }
        .wsfc-src-head { display: flex; align-items: center; gap: 6px; }
        .wsfc-src-lead {
          flex: none; --mdc-icon-size: 20px; width: 20px; height: 20px;
          color: var(--primary-text-color, #e1e1e1);
        }
        .wsfc-src-name {
          flex: 1; min-width: 0; font-size: 13px; font-weight: 400;
          color: var(--primary-text-color, #e1e1e1);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .wsfc-src-type {
          font-size: 11px; font-weight: 500; opacity: 0.6;
          margin-left: 6px; text-transform: uppercase; letter-spacing: 0.03em;
        }
        /* Row 2 — what the source provides (blue pill) + value count. */
        .wsfc-src-info { display: flex; align-items: center; gap: 8px; margin: 3px 0 0 28px; }
        .wsfc-src-pill {
          font-size: 11px; font-weight: 600; white-space: nowrap;
          color: var(--primary-color, #03a9f4);
        }
        .wsfc-src-count { font-size: 11px; color: var(--secondary-text-color, #9b9b9b); }
        /* Row 3 — additional info / caveats. */
        .wsfc-src-detail {
          font-size: 11px; margin: 2px 0 0 28px;
          color: var(--secondary-text-color, #9b9b9b);
        }
        /* Hidden (disabled) source — dim everything but keep the eye clickable. */
        .wsfc-src-off .wsfc-src-lead,
        .wsfc-src-off .wsfc-src-name,
        .wsfc-src-off .wsfc-src-info,
        .wsfc-src-off .wsfc-cond-list { opacity: 0.45; }
        /* Condensed read-only "Property · entity · value" summary per source. */
        .wsfc-cond-list {
          margin: 4px 0 0 28px;
          border-top: 1px solid var(--divider-color, #444);
          padding-top: 4px;
        }
        .wsfc-cond-row {
          display: flex; align-items: center; gap: 8px;
          font-size: 11px; line-height: 1.7;
        }
        .wsfc-cond-prop {
          flex: 0 0 34%; color: var(--primary-text-color, #e1e1e1); font-weight: 600;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .wsfc-cond-ent {
          flex: 1 1 auto; min-width: 0; color: var(--secondary-text-color, #9b9b9b);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .wsfc-cond-val {
          flex: 0 0 auto; text-align: right; font-variant-numeric: tabular-nums;
          color: var(--primary-color, #03a9f4);
        }
        /* Flat action-icon buttons (no padding; spacing from the row gap). */
        .wsfc-ico-btn {
          flex: none; cursor: pointer; --mdc-icon-size: 18px; width: 18px; height: 18px;
          color: var(--secondary-text-color, #aaa);
        }
        .wsfc-ico-btn:hover { color: var(--primary-text-color, #fff); }
        .wsfc-ico-btn.active { color: var(--primary-color, #2196F3); }
        .wsfc-ico-btn.wsfc-ico-del:hover { color: var(--error-color, #f44336); }
        .wsfc-ico-btn.disabled { opacity: 0.25; pointer-events: none; }
        /* Dashed-accent "+ Add Source" button, at the top of the list. */
        .wsfc-add-btn {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px; margin: 0 0 8px;
          border: 1px dashed var(--primary-color, #2196F3);
          border-radius: 8px;
          color: var(--primary-color, #2196F3);
          cursor: pointer; font-size: 13px; font-weight: 600;
        }
        .wsfc-add-btn:hover { background: rgba(var(--rgb-primary-color,33,150,243),0.08); }
        .wsfc-add-btn ha-icon { --mdc-icon-size: 18px; width: 18px; height: 18px; }
        .wsfc-add-pickers { margin: 0 0 8px; }
        .wsfc-srcmap-row { display: flex; align-items: center; gap: 8px; }
        .wsfc-srcmap-row ha-form { flex: 1 1 auto; }
        .wsfc-srcmap-live {
          flex: 0 0 auto; min-width: 56px; text-align: right;
          font-size: 12px; font-variant-numeric: tabular-nums;
          color: var(--secondary-text-color, #9b9b9b);
        }
        .wsfc-order-row {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 2px 0;
        }
        .wsfc-order-name { flex: 1; font-size: 13px; font-weight: 600; color: var(--primary-text-color, #e1e1e1); }
        /* Representative leading icon for ordered rows — theme accent color. */
        .wsfc-order-lead {
          flex: none; --mdc-icon-size: 20px; width: 20px; height: 20px; margin-right: 2px;
          color: var(--primary-color, #2196F3);
        }
        /* Higher specificity than the lone .wsfc-native-select (which sets
           width:100% and is declared later) so the placement select in the
           summary row sizes to content instead of overflowing the panel. */
        .wsfc-detail-summary select.wsfc-metric-pos { flex: 0 1 auto; width: auto; min-width: 120px; max-width: 55%; }
        .wsfc-height { width: 96px; }
        .wsfc-detail-row {
          border-top: 1px solid var(--divider-color, #e0e0e0);
          padding: 6px 0;
        }
        .wsfc-detail-head { display: flex; align-items: center; gap: 4px; flex: 1; }
        .wsfc-detail-panel { margin-bottom: 6px; --expansion-panel-summary-padding: 0 8px; }
        .wsfc-detail-header-slot { display: flex; width: 100%; align-items: center; }
        .wsfc-detail-glyph { color: var(--secondary-text-color); margin: 0 2px; --mdc-icon-size: 20px; }
        /* Representative glyph in theme accent color (Values rows). */
        .wsfc-detail-glyph.wsfc-glyph-accent { color: var(--primary-color, #2196F3); }
        /* One row per setting (seed-card style): a simple vertical stack, each
           control on its own full-width line. */
        .wsfc-detail-fields {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 8px 12px 12px;
        }
        .wsfc-detail-fields .wsfc-grow { width: 100%; }
        .wsfc-detail-fields ha-textfield { width: 100%; }
        .wsfc-color-field {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        .wsfc-field-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color, #e1e1e1);
        }
        /* Color label sits left, swatch right beside it (compact, like the
           reference's .seed-ed-color rows); Reset is pushed to the far right. */
        .wsfc-color-label { flex: 0 0 auto; min-width: 0; }
        .wsfc-color-wrap { display: flex; align-items: center; gap: 8px; }
        .wsfc-color-input {
          width: 42px;
          height: 32px;
          padding: 0;
          border: 1px solid var(--divider-color, #888);
          border-radius: 6px;
          background: var(--card-background-color, transparent);
          cursor: pointer;
        }
        .wsfc-color-hex { font-size: 12px; color: var(--secondary-text-color); white-space: nowrap; }
        /* Small blue reset chip, matching easy-entity-styler's .seed-ed-reset-btn. */
        .wsfc-color-reset {
          margin-left: auto;
          font-size: 10px;
          font-weight: 600;
          color: var(--wfc-ed-accent, #2196F3);
          cursor: pointer;
          user-select: none;
          padding: 2px 8px;
          border: 1px solid #2a4a63;
          border-radius: 5px;
          background: transparent;
        }
        .wsfc-color-reset:hover:not(:disabled) { background: rgba(33,150,243,0.10); }
        .wsfc-color-reset:disabled { opacity: 0.35; cursor: default; }
        .wsfc-sec-reset-row { display: flex; justify-content: flex-end; margin-bottom: 4px; }
        .wsfc-sec-reset {
          font-size: 10px;
          font-weight: 600;
          color: var(--wfc-ed-accent, #2196F3);
          cursor: pointer;
          user-select: none;
          padding: 2px 8px;
          border: 1px solid #2a4a63;
          border-radius: 5px;
          background: transparent;
        }
        .wsfc-sec-reset:hover { background: rgba(33,150,243,0.10); }
        .wsfc-sub-body { padding: 2px 0 4px; display: flex; flex-direction: column; gap: 10px; }
        .wsfc-sub-title {
          font-size: 11px;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 2px;
        }
        /* Bordered "style block" card grouping related settings (mirrors
           easy-entity-styler-card's .seed-ed-style-block). */
        .wsfc-style-block {
          border: 1px solid #333;
          border-radius: 8px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .wsfc-style-block-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #999;
        }
        /* Horizontal row of related checkboxes (e.g. Top/Bottom/Left/Right). */
        .wsfc-toggle-row { display: flex; flex-wrap: wrap; gap: 14px; padding: 2px 0; }
        .wsfc-toggle-row .wsfc-check-row { padding: 0; }
        .wsfc-row { display: flex; flex-wrap: wrap; align-items: flex-end; gap: 10px; padding: 4px 0; }
        .wsfc-row.wsfc-check { gap: 4px; align-items: center; }
        .wsfc-size { width: 110px; }
        /* Group divider between logical clusters of settings. */
        .wsfc-group-div {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 14px 0 8px;
          border-top: 1px solid var(--divider-color, #3a3a3a);
          padding-top: 10px;
        }
        .wsfc-group-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--secondary-text-color);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        /* Standalone select/text fields: label LEFT, control RIGHT, one row.
           When grouped inside .wsfc-row (2-up, e.g. Display mode + Extra metric),
           they stack label-above-control instead — see the .wsfc-row overrides. */
        /* Single-control row: label at natural width, control directly to its
           right at a moderate width (matches the reference — not stretched to
           the far panel edge). The explicit width here overrides the base
           .wsfc-native-select/.wsfc-input { width:100% } via higher specificity. */
        .wsfc-select-field { display: flex; flex-direction: row; align-items: center; gap: 10px; width: 100%; padding: 4px 0; }
        .wsfc-select-field > .wsfc-field-label { flex: 0 0 auto; }
        .wsfc-select-field > .wsfc-native-select { flex: 1 1 auto; width: auto; min-width: 0; }
        /* Fields nested inside a .wsfc-row already get the row's vertical padding. */
        .wsfc-row .wsfc-select-field, .wsfc-row .wsfc-field { padding: 0; }
        .wsfc-field { display: flex; flex-direction: row; align-items: center; gap: 10px; width: 100%; padding: 4px 0; }
        .wsfc-field > .wsfc-field-label { flex: 0 0 auto; }
        .wsfc-field > .wsfc-input { flex: 1 1 auto; width: auto; min-width: 0; }
        /* Keep the compact stacked (label-above) 2-up layout ONLY when a row has
           MULTIPLE dropdowns side by side (e.g. Display mode + Extra metric —
           image 3). A row with a single dropdown keeps the label-left one-row
           look. Detected via adjacent select-field siblings. */
        .wsfc-row:has(.wsfc-select-field + .wsfc-select-field) .wsfc-select-field,
        .wsfc-row:has(.wsfc-select-field + .wsfc-select-field) .wsfc-field {
          flex-direction: column; align-items: stretch; gap: 4px; min-width: 140px; flex: 1;
        }
        .wsfc-row:has(.wsfc-select-field + .wsfc-select-field) .wsfc-select-field > .wsfc-field-label,
        .wsfc-row:has(.wsfc-select-field + .wsfc-select-field) .wsfc-field > .wsfc-field-label { flex: none; }
        .wsfc-row:has(.wsfc-select-field + .wsfc-select-field) .wsfc-select-field > .wsfc-native-select,
        .wsfc-row:has(.wsfc-select-field + .wsfc-select-field) .wsfc-field > .wsfc-input { flex: none; width: 100%; }
        /* Dropdowns styled exactly like seed-card's selects. */
        .wsfc-native-select {
          background: var(--secondary-background-color, #1c1c1c);
          border: 1px solid var(--divider-color, #444);
          border-radius: 6px;
          padding: 8px 10px;
          color: var(--primary-text-color, #e1e1e1);
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
          cursor: pointer;
        }
        .wsfc-native-select:focus {
          outline: none;
          border-color: var(--primary-color, #2196f3);
        }
        .wsfc-native-select option { background: #1c1c1c; color: #e1e1e1; }

        /* Sliders styled like seed-card (range + value readout). */
        .wsfc-slider-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 0;
          flex-wrap: nowrap;
          width: 100%;
        }
        /* Controls matched to easy-entity-styler-card's editor exactly:
           .seed-ed-slider-row (label 12px #ccc), .seed-ed-checkbox-row
           (12px #ccc, gap 6px), blue (#2196F3) accent. */
        .wsfc-slider-label { font-size: 13px; font-weight: 600; color: var(--primary-text-color, #e1e1e1); flex: 0 0 auto; display: flex; align-items: center; gap: 8px; }
        .wsfc-range {
          flex: 1;
          min-width: 100px;
          accent-color: var(--wfc-ed-accent, #2196F3);
          cursor: pointer;
        }
        .wsfc-slider-value {
          min-width: 40px;
          text-align: center;
          font-size: 12px;
          color: #e1e1e1;
          font-weight: 500;
        }

        .wsfc-check-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary-text-color, #e1e1e1);
          cursor: pointer;
          padding: 2px 0;
        }
        .wsfc-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
          accent-color: var(--wfc-ed-accent, #2196F3);
          flex: 0 0 auto;
        }
        /* NOTE: .wsfc-field layout is defined earlier (horizontal label-left).
           This duplicate previously reverted it to a centered column — removed. */
        .wsfc-num-field { max-width: 150px; }
        .wsfc-input {
          background: var(--secondary-background-color, #1c1c1c);
          border: 1px solid var(--divider-color, #444);
          border-radius: 6px;
          padding: 8px 10px;
          color: var(--primary-text-color, #e1e1e1);
          font-size: 14px;
          width: 100%;
          box-sizing: border-box;
        }
        .wsfc-input:focus, .wsfc-native-select:focus { outline: none; border-color: var(--primary-color, #2196f3); }
        /* native <details> panels for detail values */
        details.wsfc-detail-row2 {
          border: 1px solid var(--divider-color, #3a3a3a);
          border-radius: 8px;
          margin-bottom: 6px;
          background: rgba(255,255,255,0.015);
        }
        details.wsfc-detail-row2 > summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
        }
        details.wsfc-detail-row2 > summary::-webkit-details-marker { display: none; }
        details.wsfc-detail-row2 > summary::marker { content: ""; }
        details.wsfc-detail-row2 > summary::after {
          content: "";
          margin-left: 6px;
          width: 8px; height: 8px;
          border-right: 2px solid #999;
          border-bottom: 2px solid #999;
          transform: rotate(45deg);
          transition: transform 0.2s ease;
          flex: 0 0 auto;
        }
        details.wsfc-detail-row2[open] > summary::after { transform: rotate(-135deg); }
        details.wsfc-subpanel { margin-bottom: 8px; }
        details.wsfc-subpanel > summary { padding: 8px 10px; }
        .wsfc-subpanel-title { font-size: 13px; font-weight: 600; color: var(--primary-text-color, #e1e1e1); flex: 1 1 auto; }
        .wsfc-subpanel-body { padding: 4px 10px 10px; }
        .wsfc-yaml {
          background: var(--secondary-background-color, #1c1c1c);
          border: 1px solid var(--divider-color, #444);
          border-radius: 6px;
          padding: 12px;
          font-family: var(--code-font-family, monospace);
          font-size: 12px;
          line-height: 1.5;
          color: var(--primary-text-color, #e1e1e1);
          white-space: pre;
          overflow: auto;
          max-height: 420px;
          margin: 0;
        }
      </style>
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon=${m7.order}></ha-icon><span class="wsfc-panel-title">Section order &amp; visibility</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">
            Toggle each section on/off and use the arrows to reorder them (top → bottom).
            Each section's own settings panel is below.
          </p>
          ${d}
        </div>
      </details>
      ${A}
      ${this._wfcClockPanel(M)}
    `};let m6=[{value:"left",label:"Left of weather"},{value:"center",label:"Center of row"},{value:"right",label:"Right of weather"},{value:"above-left",label:"Above weather \u2014 left"},{value:"above-center",label:"Above weather \u2014 middle"},{value:"above-right",label:"Above weather \u2014 right"},{value:"below-left",label:"Below weather \u2014 left"},{value:"below-center",label:"Below weather \u2014 middle"},{value:"below-right",label:"Below weather \u2014 right"}];q._wfcClockPanel=function(M){let m="current",d=M.current||{},A=w=>w==="above"?"above-center":w==="below"?"below-center":w,_=d.clock_show_time!==!1;return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:clock-outline"></ha-icon><span class="wsfc-panel-title">Clock &amp; Date</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Digital clock &amp; date rendered in the Current Weather row. Enable Current Weather to show it.</p>
          ${this._wfcGroup("Clock (time)")}
                ${this._wfcCheckbox("Show Time",_,w=>this._wfcToggleSecField(m,"clock_show_time",w))}
                ${_?x`
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_placement","Clock placement",m6,A(d.clock_placement),"right")}
                        ${this._wfcSelect(m,"clock_format","Time format",[{value:"auto",label:"Auto (locale)"},{value:"12",label:"12-hour"},{value:"24",label:"24-hour"}],d.clock_format,"auto")}
                      </div>
                      ${this._wfcCheckbox("Show Seconds",d.clock_show_seconds,w=>this._wfcToggleSecField(m,"clock_show_seconds",w))}
                      <div class="wsfc-row">
                        ${this._wfcNumField(m,"clock_font_size","Size","px",d.clock_font_size,28)}
                        ${this._wfcSelect(m,"clock_font_weight","Weight",[{value:"300",label:"Light"},{value:"400",label:"Normal"},{value:"500",label:"Medium"},{value:"600",label:"Semibold"},{value:"700",label:"Bold"}],d.clock_font_weight,"500")}
                      </div>
                      ${this._wfcColorField("Time color",d.clock_color,w=>this._wfcSetSecField(m,"clock_color",w.target.value))}
                      <label class="wsfc-field">
                        <span class="wsfc-field-label">Font family (blank = card default)</span>
                        <input
                          type="text"
                          class="wsfc-input"
                          placeholder="e.g. Roboto Mono, monospace"
                          .value=${d.clock_font_family||""}
                          @change=${w=>this._wfcSetSecField(m,"clock_font_family",w.target.value)}
                        />
                      </label>
                      ${this._wfcSelect(m,"clock_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_contrast,"none")}`:Z}

                ${this._wfcGroup("Date")}
                ${this._wfcCheckbox("Show Date",d.clock_show_date,w=>this._wfcToggleSecField(m,"clock_show_date",w))}
                ${d.clock_show_date?x`
                      ${this._wfcSelect(m,"clock_date_format","Date format",x2.map(w=>({value:w.value,label:w.label})),d.clock_date_format,"auto")}
                      <div class="wsfc-row">
                        ${this._wfcSelect(m,"clock_date_placement","Date placement",[{value:"with_time",label:"With clock"},...m6],d.clock_date_placement==="above"||d.clock_date_placement==="below"?A(d.clock_date_placement):d.clock_date_placement,"with_time")}
                        ${this._wfcNumField(m,"clock_date_font_size","Size","px",d.clock_date_font_size,12)}
                        ${this._wfcColorField("Date color",d.clock_date_color,w=>this._wfcSetSecField(m,"clock_date_color",w.target.value))}
                      </div>
                      ${this._wfcSelect(m,"clock_date_contrast","Text legibility (for busy backgrounds)",[{value:"none",label:"None"},{value:"shadow",label:"Drop shadow"},{value:"outline",label:"Outline (dark halo)"},{value:"auto",label:"Auto (match theme)"}],d.clock_date_contrast!=null?d.clock_date_contrast:d.clock_contrast,"none")}`:Z}
        </div>
      </details>
    `},q._wfcYamlPanel=function(){let M;try{M=o1(this._config)}catch{M="# (unable to render YAML)"}return x`
      <details class="wsfc-panel"><summary class="wsfc-panel-summary"><ha-icon class="wsfc-panel-icon" icon="mdi:code-braces"></ha-icon><span class="wsfc-panel-title">YAML configuration</span></summary>
        <div class="wsfc-ed-panel">
          <p class="wsfc-hint">Read-only view of this card's current configuration.</p>
          <pre class="wsfc-yaml">${M}</pre>
        </div>
      </details>
    `},console.info(`%cWEATHER-STATION-FLEX-CARD%c flex sections loaded (Weather Flex sections ${r})`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.__WSFC_SECTIONS_BUILD=r,p2.__wfcResolve=l2,p2.__wfcBuild=r})();var Z9=p2.prototype,XH=(r,t)=>({config:r,hass:t,_wfcSources:Z9._wfcSources,_wfcSlotEntityForKey:Z9._wfcSlotEntityForKey,_wfcMetricEntityChain:Z9._wfcMetricEntityChain});function JH(r,t,e){return!r||!t?[]:Z9._wfcMetricEntityChain.call(XH(r,t),e)}function g3(r,t,e){return JH(r,t,e).find(i=>!i.startsWith("weather."))||null}function A5(r,t,e){for(let i of JH(r,t,e)){let o=t.states[i];if(o){if(i.startsWith("weather.")){let a=o.attributes?.[e];if(a!=null&&a!=="")return{value:Number(a),unit:bf(o,e),entity:i}}else if(!["unknown","unavailable",""].includes(o.state)){let a=Number(o.state);return{value:isNaN(a)?o.state:a,unit:o.attributes?.unit_of_measurement||"",entity:i}}}}return null}function bf(r,t){let e=r.attributes||{};return/temperature|dew_point/.test(t)?e.temperature_unit||"":/wind/.test(t)&&t!=="wind_bearing"?e.wind_speed_unit||"":t==="pressure"?e.pressure_unit||"":t==="humidity"||t==="cloud_coverage"?"%":""}function ct(r,t,e,i,o=i){return r?.entities?.[o]||g3(t,e,i)}var QH=new WeakMap;function jr(r,t){let e=t?.devices||{},i=JSON.stringify(r?.metric_sources?.sources||[]),o=QH.get(e);return o&&o.hass!==t&&(o.hass=t,Object.keys(e).length!==o.size0&&(o=null)),o||(o=new Map,o.size0=Object.keys(e).length,o.hass=t,QH.set(e,o)),o.has(i)||o.set(i,wf(r,t)),o.get(i)}function wf(r,t){let e=[],i=t?.devices||{};for(let o of r?.metric_sources?.sources||[]){if(o.disabled||typeof o.ref!="string"||!o.ref.startsWith("device:"))continue;let a=o.ref.slice(7);e.includes(a)||e.push(a);let n=i[a]?.config_entries||[];for(let[s,V]of Object.entries(i))!e.includes(s)&&(V.config_entries||[]).some(c=>n.includes(c))&&e.push(s)}return e}var KH=new WeakMap;function C4(r,t){let e=r?.entities;if(!e)return[];let i=KH.get(e);if(i&&i.hass!==r&&(i.hass=r,Object.keys(e).length!==i.size0&&(i=null)),!i){i=new Map;for(let o in e){let a=e[o]?.device_id;a&&(i.has(a)||i.set(a,[]),i.get(a).push(o))}i.size0=Object.keys(e).length,i.hass=r,KH.set(e,i)}return i.get(t)||[]}function k9(r,t){return jr(r,t).flatMap(e=>C4(t,e))}function ts(r,t,e){let i=k9(r,t).filter(o=>{let a=t.states[o];return a&&e.test(`${o} ${a.attributes?.friendly_name||""}`)});return i.find(o=>!/indoor|inside/i.test(o))||i[0]||null}function I2(r,t){let e=t&&r?.states?.[t];if(!e||["unknown","unavailable",""].includes(e.state))return null;let i=Number(e.state);return{value:isNaN(i)?e.state:i,unit:e.attributes?.unit_of_measurement||"",entity:t}}function es(r,t){let i=["temperature","humidity","wind_speed","pressure"].map(a=>g3(r,t,a)).filter(Boolean);if(!i.length)return"unconfigured";let o=i.filter(a=>I2(t,a)!=null).length;return o===i.length?"online":o?"partial":"offline"}function rs(r,t,e,i){return!e||!t?null:Z9._wfcSlotEntityForKey.call(XH(r,t),e,i)||null}var Sf={ecowitt:"Ecowitt",ecowitt_local:"Ecowitt Local",ha_ecowitt_iot:"Ecowitt Official",openweathermap:"OpenWeatherMap",pirateweather:"Pirate Weather",nws:"National Weather Service",met:"Met.no",accuweather:"AccuWeather",wunderground:"Weather Underground",weatherunderground:"Weather Underground",wundergroundpws:"Weather Underground PWS",tomorrowio:"Tomorrow.io",template:"Template",airnow:"AirNow",pollenlevels:"Pollen Levels (Google)",kleenex_pollenradar:"Kleenex Pollen Radar",silam_pollen:"SILAM Pollen"};function _3(r,t){let e=t&&r?.entities?.[t]?.platform;return e?Sf[e]||e.replace(/_/g," ").replace(/\b\w/g,i=>i.toUpperCase()):""}var Qr={aqi:{dc:"aqi",airnow:"aqi",re:/\baqi\b|air[\s_-]?quality[\s_-]?index/i,label:"AQI"},pm2_5:{dc:"pm25",airnow:"pm25",re:/pm[\s_.-]?2[\s_.-]?5/i,label:"PM2.5"},pm10:{dc:"pm10",airnow:"pm10",re:/pm[\s_.-]?10/i,label:"PM10"},ozone:{dc:"ozone",airnow:"o3",re:/\bo3\b|ozone/i,label:"Ozone"},co2:{dc:"carbon_dioxide",airnow:null,re:/\bco2\b|carbon[\s_-]?dioxide/i,label:"CO\u2082"}},is=/indoor|inside/i,Gr=(r,t)=>{let e=r.states[t];return e&&!["unavailable","unknown"].includes(e.state)},yf=(r,t,e)=>{let i=r.states[t];if(!i||!t.startsWith("sensor."))return!1;let o=i.attributes?.device_class;return o?o===e.dc:e.re.test(`${t} ${i.attributes?.friendly_name||""}`)};function Mt(r,t,e){let i=Qr[e];if(!i||!t?.states)return null;let a=k9(r,t).filter(V=>yf(t,V,i)).filter(V=>!is.test(`${V} ${t.states[V]?.attributes?.friendly_name||""}`));if(a.length)return a.find(V=>Gr(t,V))||a[0];let n=t.entities||{};if(i.airnow){let V=Object.keys(n).filter(c=>n[c]?.platform==="airnow"&&n[c]?.translation_key===i.airnow&&t.states[c]);if(V.length)return V.find(c=>Gr(t,c))||V[0]}return Object.keys(t.states).filter(V=>!V.startsWith("sensor.")||t.states[V].attributes?.device_class!==i.dc?!1:!is.test(`${V} ${t.states[V].attributes?.friendly_name||""}`)).find(V=>Gr(t,V))||null}function Cs(r,t){let e=r?.entities||{},i=e[t]?.device_id;return i&&Object.keys(e).find(o=>e[o]?.device_id===i&&e[o]?.translation_key==="station")||null}var i0=[{max:50,name:"Good",color:"#00e400"},{max:100,name:"Moderate",color:"#ffff00"},{max:150,name:"Unhealthy for sensitive groups",short:"Sensitive groups",color:"#ff7e00"},{max:200,name:"Unhealthy",color:"#ff0000"},{max:300,name:"Very unhealthy",color:"#8f3f97"},{max:1/0,name:"Hazardous",color:"#7e0023"}],O9=r=>r==null||isNaN(r)?null:i0.findIndex(t=>r<=t.max),os={pm2_5:[9,35.4,55.4,125.4,225.4,325.4],pm10:[54,154,254,354,424,604],ozone:[.054,.07,.085,.105,.2,.604]},qr=[0,50,100,150,200,300,500],Kr={benzene:{re:/benzene/i,unit:"ppb",t:[1,3,9,30],source:"ATSDR minimal risk levels (chronic 3 ppb, acute 9 ppb)"},co2:{re:/\bco2\b|carbon[\s_-]?dioxide/i,unit:"ppm",t:[1e3,2e3,5e3,1e4],source:"ASHRAE comfort guidance 1000 ppm; OSHA limit 5000 ppm"}},Zf=(r,t)=>/ppb/i.test(t||"")?r/1e3:/µg|ug/i.test(t||"")?r/1960:r;function Yr(r,t){let e=0;for(let i=0;i<t.length;i++){if(r<=t[i])return Math.round(qr[i]+(r-e)/(t[i]-e)*(qr[i+1]-qr[i]));e=t[i]}return 500}function dt(r,t,e,i){if(t==null||isNaN(t))return null;let o=Number(t);if(i?.length)return Yr(o,[...i]);if(os[r])return Yr(r==="ozone"?Zf(o,e):o,os[r]);let a=Kr[r];return a?Yr(o,a.t):null}var j1={temperature:{label:"Temperature",icon:"mdi:thermometer",color:"#ef5350",digits:1,key:"temperature"},apparent_temperature:{label:"Feels like",icon:"mdi:thermometer-lines",color:"#ff7043",digits:1,key:"apparent_temperature"},dew_point:{label:"Dew point",icon:"mdi:water-thermometer-outline",color:"#26c6da",digits:1,key:"dew_point"},humidity:{label:"Humidity",icon:"mdi:water-percent",color:"#26a69a",digits:0,key:"humidity"},pressure:{label:"Pressure",icon:"mdi:gauge",color:"#42a5f5",digits:null,key:"pressure",trend:!0},wind_speed:{label:"Wind",icon:"mdi:weather-windy",color:"#42a5f5",digits:1,key:"wind_speed"},wind_gust_speed:{label:"Gust",icon:"mdi:weather-windy-variant",color:"#ff9800",digits:1,key:"wind_gust_speed"},uv_index:{label:"UV index",icon:"mdi:weather-sunny-alert",color:"#ffa726",digits:1,key:"uv_index",scale:"uv"},solar_radiation:{label:"Solar radiation",icon:"mdi:solar-power-variant",color:"#ffb300",digits:0,key:"solar_radiation"},illuminance:{label:"Illuminance",icon:"mdi:brightness-5",color:"#fdd835",digits:0,key:"illuminance"},rain_rate:{label:"Rain rate",icon:"mdi:weather-pouring",color:"#1e88e5",digits:2,key:"precipitation"},rain_today:{label:"Rain today",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,chart:"bar",cumulative:!0,find:/(daily|today|day)[\s_-]?(piezo[\s_-]?)?(rain|precip)|(rain|precipitation)[\s_-]?(daily|today)/i},rain_24h:{label:"Rain 24h",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/24[\s_-]?h(ours?)?[\s_-]?(piezo[\s_-]?)?rain|rain(fall)?[\s_-]?24[\s_-]?h/i},rain_event:{label:"Rain event",icon:"mdi:weather-rainy",color:"#1e88e5",digits:2,find:/event[\s_-]?(piezo[\s_-]?)?rain|rain[\s_-]?event/i},battery:{label:"Station battery",icon:"mdi:battery",color:"#66bb6a",digits:null,find:/batt/i,health:!0},signal:{label:"Station signal",icon:"mdi:signal",color:"#42a5f5",digits:0,find:/signal/i,health:!0},rssi:{label:"Station RSSI",icon:"mdi:wifi-strength-2",color:"#42a5f5",digits:0,find:/rssi/i,health:!0},vpd:{label:"Vapour pressure deficit",icon:"mdi:water-opacity",color:"#8d6e63",digits:2,find:/vapou?r[\s_-]?pressure[\s_-]?deficit|\bvpd\b/i},indoor_temperature:{label:"Indoor temperature",icon:"mdi:home-thermometer",color:"#ab47bc",digits:1,find:/indoor[\s_-]?temp/i},aqi:{label:"AQI",icon:"mdi:air-filter",color:"#66bb6a",digits:0,aq:"aqi"},pm2_5:{label:"PM2.5",icon:"mdi:blur",color:"#ffb74d",digits:1,aq:"pm2_5"},pm10:{label:"PM10",icon:"mdi:blur-linear",color:"#a1887f",digits:0,aq:"pm10"},ozone:{label:"Ozone",icon:"mdi:molecule",color:"#4fc3f7",digits:3,aq:"ozone"},co2:{label:"CO\u2082",icon:"mdi:molecule-co2",color:"#4fc3f7",digits:0,aq:"co2"},indoor_humidity:{label:"Indoor humidity",icon:"mdi:home-percent",color:"#7e57c2",digits:0,find:/indoor[\s_-]?humid/i}};function v5(r,t,e,i){if(i)return i;let o=j1[r];return o?o.key?g3(t,e,o.key):o.aq?Mt(t,e,o.aq):o.find?ts(t,e,o.find):null:null}function a4(r,t,e){if(e!=null&&e!=="")return Number(e);let i=j1[r]?.digits;return i??(/inHg/i.test(t)||t==="V"?2:/psi|kPa/i.test(t)?1:0)}function as(r){return r==null?"":r<3?"Low":r<6?"Moderate":r<8?"High":r<11?"Very high":"Extreme"}function ns(r){return/inHg/i.test(r)?.03:/psi/i.test(r)?.015:/kPa/i.test(r)?.1:1}var kf=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],n4=r=>r==null||isNaN(r)?"\u2014":kf[Math.round((r%360+360)%360/22.5)%16];var Of="pollenlevels",Tf=new Set(["plants_in_season_today","overall_pollen_risk_today","top_pollen_types_today"]),pt={TREE:"mdi:tree",GRASS:"mdi:grass",WEED:"mdi:flower-tulip"},Pf={ALDER:[1,2,3,4],ASH:[3,4,5],BIRCH:[3,4,5],COTTONWOOD:[3,4,5],ELM:[2,3,4],MAPLE:[2,3,4],OLIVE:[4,5,6],JUNIPER:[1,2,3,4],OAK:[3,4,5,6],PINE:[4,5,6],CYPRESS_PINE:[8,9,10],HAZEL:[1,2,3],GRAMINALES:[5,6,7,8],RAGWEED:[8,9,10],MUGWORT:[7,8,9],JAPANESE_CEDAR:[2,3,4],JAPANESE_CYPRESS:[3,4],TREE:[2,3,4,5,6],GRASS:[5,6,7,8],WEED:[8,9,10]},ut=["January","February","March","April","May","June","July","August","September","October","November","December"],Ef={winter:[12,1,2],spring:[3,4,5],summer:[6,7,8],fall:[9,10,11],autumn:[9,10,11]};function Hs(r,t=!1){if(!r||typeof r!="string")return[];let e=new Set,i=/\b(early|mid|late)?[\s-]*(winter|spring|summer|fall|autumn)\b/gi,o;for(;o=i.exec(r);){let a=Ef[o[2].toLowerCase()],n=(o[1]||"").toLowerCase();(n==="early"?a.slice(0,2):n==="late"?a.slice(1):n==="mid"?[a[1]]:a).forEach(V=>e.add(V))}return[...e].map(a=>t?(a+5)%12+1:a).sort((a,n)=>a-n)}function Ff(r,t){return r==null||isNaN(r)||r<=0?t===!1?"off":"none":r<=2?"low":r<=3?"medium":"high"}var mt={none:"None",low:"Low",medium:"Medium",high:"High",off:"Off season"},ss=r=>{let t=Number(r);return r==null||r===""||isNaN(t)?null:t};function $f(r){let t=r?.entities||{},e=r?.devices||{},i=new Map;for(let o in t){let a=t[o];if(a?.platform!==Of||!o.startsWith("sensor."))continue;let n=r.states[o];if(!n)continue;let s=e[a.device_id]||{},c=(s.config_entries_subentries?JSON.stringify(s.config_entries_subentries):"")||(s.config_entries||[])[0]||"default";i.has(c)||i.set(c,{key:c,devices:new Set,plants:[],types:[],summary:{}});let p=i.get(c);if(a.device_id&&p.devices.add(a.device_id),a.entity_category)continue;if(Tf.has(a.translation_key)){p.summary[a.translation_key]=o;continue}let h=n.attributes||{};h.code?p.plants.push(o):"category"in h&&p.types.push(o)}return[...i.values()]}function Rf(r,t,e,i){let o=r.states[t],a=o?.attributes||{},n=String(a.code||"").toUpperCase()||Bf(a.icon)||zf(a.friendly_name),s=ss(o?.state),V=ss(a.tomorrow_value),c=a.trend;!c&&s!=null&&V!=null&&(c=V>s?"up":V<s?"down":"flat");let p=e?.[n]||e?.[a.code]||(Hs(a.season,i).length?Hs(a.season,i):Df(Pf[n],i))||[],h=String(a.type||"").toUpperCase();return{entity:t,code:n,name:If(a.friendly_name,r,t)||n,icon:pt[h]||pt[n]||a.icon||"mdi:flower-pollen",value:s,max:5,pct:s==null?0:Math.max(0,Math.min(100,s/5*100)),inSeason:a.inSeason??null,level:Ff(s,a.inSeason),category:a.category||null,tomorrow:V,trend:c||null,color:a.color_hex||null,months:p||[]}}var Df=(r,t)=>r&&t?r.map(e=>(e+5)%12+1):r,Bf=r=>Object.keys(pt).find(t=>pt[t]===r)||"",zf=r=>/grass/i.test(r||"")?"GRASS":/tree/i.test(r||"")?"TREE":/weed/i.test(r||"")?"WEED":"";function If(r,t,e){if(!r)return"";let i=t.devices?.[t.entities?.[e]?.device_id],o=i?.name_by_user||i?.name;return o&&r.startsWith(o)&&r.slice(o.length).trim()||r}function ht(r,t,e=new Date){let i=r||{},o=(t?.config?.latitude??0)<0,a=null,n;if(Array.isArray(i.entities)&&i.entities.length)n=i.entities.filter(k=>t.states[k]);else{let k=$f(t);if(a=i.device&&k.find(T=>T.devices.has(i.device))||k[0]||null,!a)return{source:null,rows:[],entities:[]};n=i.view==="types"?a.types:a.plants.length?a.plants:a.types}let s=n.map(k=>Rf(t,k,i.seasons,o));if(Array.isArray(i.species)&&i.species.length)s=i.species.map(T=>String(T).toUpperCase()).map(T=>s.find(F=>F.code===T||F.name.toUpperCase()===T)).filter(Boolean);else{s.sort((T,F)=>(F.value??-1)-(T.value??-1)||+(F.inSeason===!0)-+(T.inSeason===!0)||T.name.localeCompare(F.name));let k=Number(i.max_rows??6);k>0&&(s=s.slice(0,k))}let V=e.getMonth()+1,c=Array.from({length:12},(k,T)=>s.filter(F=>F.months.includes(T+1)).length),p=s.filter(k=>(k.value??0)>0).sort((k,T)=>T.value-k.value)[0]||null,h=k=>(k.value??0)>0||k.inSeason===!0||k.inSeason==null&&k.months.includes(V),v=s.some(h),g=s;i.hide_off_season!==!1&&(s=s.filter(h));let y;p?y=`${p.name} ${mt[p.level].toLowerCase()} today`:v?y="In season, but nothing in the air today":y=["Out of season",Nf(g,V)].filter(Boolean).join(" \xB7 ");let O=a?.summary||{};return{source:i.entities?.length?"Pollen":"Google",town:i.location||t?.config?.location_name||"",top:p,status:y,rows:s,total:g.length,outOfSeason:g.length>0&&!v,strip:c,month:V,entities:[...n,...Object.values(O)]}}function Nf(r,t){let e=null;for(let i of r)if(i.months.length)for(let o=1;o<=12;o++){let a=(t-1+o)%12+1;if(i.months.includes(a)){(!e||o<e.d)&&(e={r:i,d:o,m:a});break}}return e?`${e.r.name} due in ${ut[e.m-1]}`:""}var f2=r=>r.map(([t,e])=>({value:t,label:e})),ft=["6h","12h","24h","48h","7d","30d","90d","365d"],Vs=f2([["wind_new","Wind"],["precipitation_new","Precipitation"],["clouds_new","Clouds"],["temp_new","Temperature"],["pressure_new","Pressure"]]),Wf=f2([["gray","Gray (follows theme)"],["streets","Streets"],["topo","Topographic"],["imagery","Satellite imagery"],["osm","OpenStreetMap"]]),Uf=Object.entries(j1).map(([r,t])=>({value:r,label:t.label})),$5=r=>({entity:r?{domain:r}:{}}),b3={hero:{tag:"wsfc-panel-hero",label:"Hero (current conditions)",icon:"mdi:weather-partly-cloudy",span:12,rows:3,rowsCompact:0,flex:!0,inBar:!1,flexPanels:["Card Appearance","Section order & visibility","Current Weather Header","Current Weather Metrics","Clock & Date","User Actions","Advanced"],schema:[]},bulletin:{tag:"wsfc-panel-bulletin",label:"Bulletin",icon:"mdi:text-box-outline",span:4,rows:3,spanMedium:12,rowsCompact:0,schema:[{name:"entity",label:"Text sensor",selector:$5(),helper:"Optional text sensor (e.g. a forecast-text or NWS sensor) shown under the summary."},{name:"attribute",selector:{text:{}},helper:"Attribute of that sensor holding the text (default: its state)."},{name:"alerts_entity",selector:$5("sensor"),helper:"Optional NWS Alerts sensor; active alerts are shown at the top."},{name:"show_sun",selector:{boolean:{}},default:!0},{name:"show_moon",selector:{boolean:{}},default:!0}]},heading:{tag:"wsfc-panel-heading",label:"Button Menu",icon:"mdi:format-title",span:12,rows:0,inBar:!1,bare:!0,schema:[{name:"subtitle",selector:{text:{}}},{name:"show_status",selector:{boolean:{}},helper:"Show whether the station's sensors are reporting."},{name:"show_bar",selector:{boolean:{}},helper:"Show the panel buttons in this heading instead of above the panels."}]},metric:{tag:"wsfc-panel-metric",label:"Metric tile",icon:"mdi:gauge",span:2,rows:2,inBar:!1,schema:[{name:"metric",selector:{select:{mode:"dropdown",options:Uf}},helper:"Resolved through Weather Sources; set an entity to use any sensor instead."},{name:"entity",label:"Sensor",selector:$5()},{name:"label",selector:{text:{}}},{name:"color",selector:{text:{}},helper:"CSS color, e.g. #ef5350. Blank uses the metric's color."},{name:"digits",selector:{number:{min:0,max:3,mode:"box"}}},{name:"chart",selector:{select:{options:f2([["line","Line"],["bar","Bars (hourly)"],["none","None"]])}}},{name:"hours",selector:{number:{min:1,max:168,mode:"box"}},helper:"Sparkline hours (default 24)."},{name:"show_minmax",selector:{boolean:{}},default:!0}]},graph:{tag:"wsfc-panel-graph",label:"Graph",icon:"mdi:chart-line",span:6,rows:3,schema:[{name:"series",selector:{object:{}},helper:"Advanced: list of series (metric or entity, label, color, axis left/right, style line/area/dashed/bar, cumulative, band). Colors and sensors can also be set under Series above."},{name:"ranges",selector:{select:{multiple:!0,options:ft.map(r=>({value:r,label:r}))}}},{name:"range",selector:{select:{options:ft.map(r=>({value:r,label:r}))}},helper:"Range shown first."},{name:"show_readings",selector:{boolean:{}},default:!0},{name:"left_min",selector:{number:{mode:"box"}}},{name:"left_max",selector:{number:{mode:"box"}}},{name:"right_min",selector:{number:{mode:"box"}}},{name:"right_max",selector:{number:{mode:"box"}}}]},temp_humidity:{tag:"wsfc-panel-temp-humidity",label:"Temp & Humidity",icon:"mdi:thermometer-water",span:6,rows:3,schema:[{name:"range",selector:{select:{options:ft.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},uv_solar:{tag:"wsfc-panel-uv-solar",label:"UV & Solar",icon:"mdi:weather-sunny-alert",span:6,rows:3,schema:[{name:"range",selector:{select:{options:ft.map(r=>({value:r,label:r}))}}},{name:"show_readings",selector:{boolean:{}},default:!0}]},stack:{tag:"wsfc-panel-stack",label:"Stack (side by side / stacked)",icon:"mdi:view-column-outline",span:12,rows:0,inBar:!1,schema:[{name:"direction",selector:{select:{options:f2([["horizontal","Horizontal \u2014 side by side"],["vertical","Vertical \u2014 one above another"]])}},default:"horizontal"},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: children wrap to a new line only below this width (default 180)."}]},wind:{tag:"wsfc-panel-wind",label:"Wind",icon:"mdi:weather-windy",span:6,rows:4,schema:[{name:"view",selector:{select:{options:f2([["compass","Compass"],["rose","Wind rose (24h)"]])}}},{name:"show_chart",selector:{boolean:{}},default:!0},{name:"entities.wind_speed",selector:$5("sensor")},{name:"entities.wind_gust_speed",selector:$5("sensor")},{name:"entities.wind_bearing",selector:$5("sensor")},{name:"rose_bins",selector:{object:{}},helper:"Speed thresholds for the rose, in the sensor's unit, e.g. [1, 5, 10, 15, 25]."}]},radar:{tag:"wsfc-panel-radar",label:"Radar / map",icon:"mdi:radar",span:6,rows:4,schema:[{name:"radar",selector:{boolean:{}},default:!0,helper:"RainViewer radar loop. Turn off for a plain map with OpenWeatherMap layers."},{name:"base_map",selector:{select:{options:Wf}}},{name:"zoom",selector:{number:{min:2,max:14,step:.5,mode:"box"}}},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: your Home Assistant location)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}},{name:"radar_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"owm_api_key",selector:{text:{}},helper:"Optional OpenWeatherMap key for map layers. Visible to anyone who can view the dashboard."},{name:"owm_layers",selector:{select:{multiple:!0,options:Vs}}},{name:"owm_default",selector:{select:{options:[{value:"none",label:"None"},...Vs]}}},{name:"owm_opacity",selector:{number:{min:.1,max:1,step:.05,mode:"slider"}}},{name:"base_map_url",selector:{text:{}},helper:"Custom XYZ tile URL (overrides base map)."},{name:"base_map_attribution",selector:{text:{}}}]},forecast:{tag:"wsfc-panel-forecast",label:"Forecast (hourly + daily)",icon:"mdi:calendar-week",span:8,rows:4,flex:!0,flexPanels:["Section order & visibility","Hourly Forecast","Daily Forecast"],schema:[]},hourly:{tag:"wsfc-panel-hourly",label:"Hourly forecast",icon:"mdi:clock-outline",span:8,rows:3,flex:!0,flexPanels:["Hourly Forecast"],schema:[]},daily:{tag:"wsfc-panel-daily",label:"Daily forecast",icon:"mdi:calendar-week",span:8,rows:3,flex:!0,flexPanels:["Daily Forecast"],schema:[]},sky_tracker:{tag:"wsfc-panel-sky-tracker",label:"Sky Tracker",icon:"mdi:sun-clock-outline",span:4,rows:2,rowsCompact:0,flex:!0,flexPanels:["Sun Position","Sky Bar"],schema:[{name:"show_arc",selector:{boolean:{}},default:!0,helper:"Sun arc: the sun's path, its position now, sunrise and sunset; the moon at night."},{name:"show_sky",selector:{boolean:{}},default:!0,helper:"Sky gradient: daylight and cloud cover over time, with the forecast row (temperatures, icons, wind\u2026)."},{name:"timeframe",selector:{select:{options:f2([["hours","Number of hours"],["day","Today (midnight to midnight)"],["sunrise_sunset","Sunrise to sunset"]])}},default:"hours",helper:"One time window for the arc and the sky."},{name:"hours",selector:{number:{min:6,max:72,mode:"box"}},default:24},{name:"anchor",selector:{select:{options:f2([["now_center","Now in the middle"],["now_left","Now at the left"]])}},default:"now_center"},{name:"moon",selector:{boolean:{}},default:!0,helper:"Show the moon on the arc at night."},{name:"moon_phase",selector:{boolean:{}},default:!0,helper:"Draw the moon in its current phase (off: a moon icon)."},{name:"show_facts",selector:{boolean:{}},default:!1,helper:"Dawn, sunrise, solar noon, sunset, dusk and daylight under the tracker."}]},astronomy:{tag:"wsfc-panel-astronomy",label:"Astronomy",icon:"mdi:telescope",span:6,rows:3,rowsCompact:0,schema:[{name:"show_chart",selector:{boolean:{}},default:!0,helper:"Sun and moon altitude over the day."}]},wind_map:{tag:"wsfc-panel-wind-map",label:"Wind map (Windy)",icon:"mdi:map-marker-radius-outline",span:6,rows:3,schema:[{name:"overlay",selector:{select:{options:f2([["wind","Wind"],["gust","Gusts"],["rain","Rain & thunder"],["temp","Temperature"],["clouds","Clouds"],["pressure","Pressure"],["radar","Radar"],["satellite","Satellite"]])}},default:"wind"},{name:"zoom",selector:{number:{min:3,max:11,mode:"slider"}},default:6},{name:"model",selector:{select:{options:f2([["ecmwf","ECMWF"],["gfs","GFS"],["icon","ICON"],["namConus","NAM (US)"]])}},default:"ecmwf"},{name:"level",selector:{select:{options:f2([["surface","Surface"],["850h","1500 m"],["700h","3000 m"],["500h","5500 m"],["300h","9000 m"]])}},default:"surface"},{name:"wind_unit",selector:{select:{options:f2([["mph","mph"],["km/h","km/h"],["kt","knots"],["m/s","m/s"],["bft","Beaufort"]])}},helper:"Default follows Home Assistant's unit system."},{name:"marker",selector:{boolean:{}},default:!0,helper:"Pin at your location."},{name:"latitude",selector:{number:{mode:"box",step:"any"}},helper:"Map center (default: home)."},{name:"longitude",selector:{number:{mode:"box",step:"any"}}}]},statistics:{tag:"wsfc-panel-statistics",label:"Station graph",icon:"mdi:chart-bell-curve-cumulative",span:6,rows:3,schema:[{name:"engine",selector:{select:{options:f2([["auto","Automatic"],["sgcc","Statistics Graph Chart Card (custom)"],["builtin","Home Assistant Statistics graph"]])}},default:"auto",helper:"Automatic uses cataseven's Statistics Graph Chart Card when it is installed (mixed bars/lines/areas, second axis), otherwise Home Assistant's built-in card."},{name:"preset",selector:{select:{options:f2([["temps","Temperatures (temp, feels like, dew point)"],["wind","Wind (speed, gust, direction)"],["pressure_humidity","Pressure & humidity"],["solar_uv","Solar & UV"],["rain","Rain (rate, today)"],["air_quality","Air quality (AQI, PM2.5)"],["temperature_range","Daily temperature range (30 days)"]])}},default:"temps"},{name:"days_to_show",selector:{number:{min:.25,max:365,step:.25,mode:"box"}}},{name:"period",selector:{select:{options:f2([["5minute","5 minutes"],["hour","Hour"],["day","Day"],["week","Week"],["month","Month"]])}}},{name:"chart_type",selector:{select:{options:f2([["line","Line"],["bar","Bar"]])}},helper:"Built-in card only (the custom card sets this per series)."},{name:"stat_types",selector:{select:{multiple:!0,options:f2([["mean","Mean"],["min","Min"],["max","Max"],["state","State"],["change","Change"]])}}},{name:"card",selector:{object:{}},helper:"Extra options merged into the graph card's config, e.g. show_interval_picker: true, or a full entities: list."}]},health:{tag:"wsfc-panel-health",label:"Station health",icon:"mdi:heart-pulse",span:4,rows:0,schema:[{name:"show_devices",selector:{boolean:{}},helper:"Show device names even when there is only one."}]},pollen:{tag:"wsfc-panel-pollen",label:"Pollen",icon:"mdi:flower-pollen",span:4,rows:0,hideWhen:(r,t)=>r.hide_when_off_season!==!1&&ht(r,t).outOfSeason,schema:[{name:"device",selector:{device:{integration:"pollenlevels"}},helper:"Pollen Levels location (default: the first one)."},{name:"view",selector:{select:{options:f2([["plants","Species (oak, juniper, ragweed \u2026)"],["types","Types (tree, grass, weed)"]])}},default:"plants"},{name:"species",selector:{text:{multiple:!0}},helper:"Species to show, in order, by Google code or name (e.g. JUNIPER, OAK, GRAMINALES). Blank shows the busiest."},{name:"max_rows",selector:{number:{min:0,max:20,mode:"box"}},default:6,helper:"Rows when no species are listed (0 = all)."},{name:"hide_off_season",selector:{boolean:{}},default:!0,helper:"Hide species that are out of season."},{name:"hide_when_off_season",selector:{boolean:{}},default:!0,helper:"Hide the whole panel when no species is in season (its panel button still opens it)."},{name:"show_tomorrow",selector:{boolean:{}},default:!0},{name:"show_season",selector:{boolean:{}},default:!0,helper:"12-month strip: how many of the shown species are in season each month."},{name:"location",selector:{text:{}},helper:"Town shown in the heading (default: your Home Assistant location name)."},{name:"seasons",selector:{object:{}},helper:"Season months per species, e.g. JUNIPER: [1, 2, 3, 4]. Default: Google's season text, else typical months."},{name:"entities",selector:{entity:{multiple:!0,domain:"sensor"}},helper:"Advanced: use these sensors instead of finding Pollen Levels automatically."}]},air_quality:{tag:"wsfc-panel-air-quality",label:"Air quality",icon:"mdi:air-filter",span:4,rows:0,schema:[{name:"layout",selector:{select:{options:f2([["scale","Scale \u2014 colour scale and rating per pollutant (like Pollen)"],["rows","Rows \u2014 bar, level and value per pollutant"],["bars","Vertical bars on the AQI scale"],["tiles","Tiles"]])}},default:"scale"},{name:"pollutants",selector:{select:{multiple:!0,options:f2([["pm2_5","PM2.5"],["pm10","PM10"],["ozone","Ozone"],["co2","CO\u2082"]])}},helper:"Default: all that are found."},{name:"extra",selector:{object:{}},helper:"More readings, e.g. - entity: sensor.erie_benzene with optional label, icon and thresholds: [moderate, elevated, high, very high] in the sensor's unit. Benzene and CO\u2082 have built-in thresholds."},{name:"show_aqi",selector:{boolean:{}},default:!0},{name:"show_scale",selector:{boolean:{}},helper:"Rows, bars and tiles: AQI colour scale under the number (default: on for tiles only)."},{name:"bar_height",selector:{number:{min:60,max:400,mode:"box",unit_of_measurement:"px"}},helper:"Vertical bars: height (default 140)."},{name:"source",selector:{text:{}},helper:"Source shown under the AQI (default: the sensor's source attribute or integration)."},{name:"entities.aqi",selector:$5("sensor"),helper:"Default: the station's own sensor, else AirNow, else any outdoor AQI sensor."},{name:"entities.pm2_5",selector:$5("sensor")},{name:"entities.pm10",selector:$5("sensor")},{name:"entities.ozone",selector:$5("sensor")},{name:"entities.co2",selector:$5("sensor")}]},moon:{tag:"wsfc-panel-moon",label:"Moon",icon:"mdi:moon-waning-crescent",span:4,rows:2,rowsCompact:0,schema:[{name:"moon_size",selector:{number:{min:40,max:240,mode:"box",unit_of_measurement:"px"}}}]},day:{tag:"wsfc-panel-day",label:"Day forecast",icon:"mdi:calendar-today",span:4,rows:4,spanMedium:12,rowsCompact:0,schema:[{name:"day_offset",selector:{number:{min:0,max:7,mode:"box"}},helper:"0 = today, 1 = tomorrow (default), \u2026"},{name:"entity",selector:$5("weather"),helper:"Weather entity (default: the card's)."},{name:"icon_size",selector:{number:{min:32,max:160,mode:"box"}}}]},flex:{tag:"wsfc-panel-flex",label:"Weather Flex sections",icon:"mdi:view-agenda-outline",span:6,rows:0,flex:!0,schema:[]},card:{tag:"wsfc-panel-card",label:"Home Assistant card",icon:"mdi:card-outline",span:6,rows:0,schema:[{name:"card",selector:{object:{}},helper:"Any card configuration, e.g. type: statistics-graph."}]}};b3.map=b3.radar;var Ms=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"span",selector:{number:{min:1,max:12,mode:"slider"}},helper:"Width in twelfths of the card."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Height in row units (0 = fit content)."},{name:"display",selector:{select:{options:f2([["grid","In the grid"],["tile_popup","In the grid \u2014 tap it to open larger"],["popup","Pop-up only (from its panel button)"]])}}},{name:"in_bar",selector:{boolean:{}},helper:"Adds a button for this panel to the button menu, to show or hide it (or open its pop-up). Off: no button, and the panel is always shown (unless Shown is off)."},{name:"tile_background",selector:{select:{options:f2([["default","Default"],["translucent","See-through (uses Panel opacity)"],["solid","Solid"],["none","None"]])}},default:"default",helper:"This panel's background. Default: see-through with the animated background, the theme's otherwise; the button menu has none."},{name:"show",selector:{boolean:{}},default:!0,helper:"Visible when the dashboard loads."}],ds=[{name:"title",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"grow",selector:{number:{min:0,max:12,step:.5,mode:"box"}},helper:"Horizontal: relative width (default 1). Vertical: 1 = share leftover height."},{name:"min_width",selector:{number:{min:80,max:800,mode:"box",unit_of_measurement:"px"}},helper:"Horizontal: narrowest this panel gets before wrapping."},{name:"rows",selector:{number:{min:0,max:10,mode:"slider"}},helper:"Vertical: minimum height in row units."}],V2=r=>b3[r?.type]||null,H7=r=>Math.max(1,Math.min(12,Number(r.span??V2(r)?.span??6)));function ps(r,t){let e=V2(r)||{},i=H7(r),o=i;t==="medium"&&(o=Number(r.span_medium??e.spanMedium??(i<=2?3:i<=3?4:i<=6?6:12))),t==="narrow"&&(o=Number(r.span_narrow??(i<=3?6:12)));let a=x0(r);return t!=="wide"&&(a=Number(r.rows_compact??e.rowsCompact??a)),{span:Math.max(1,Math.min(12,o)),rows:a}}var x0=r=>Math.max(0,Number(r.rows??V2(r)?.rows??0)),s7=r=>r.in_bar??(r.display==="popup"?!0:V2(r)?.inBar??!0);var Ls=[{type:"hero",span:8},{type:"bulletin"},{type:"sky_tracker",span:12,rows:0},{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0},{type:"wind"},{type:"metric",metric:"temperature"},{type:"metric",metric:"rain_today"},{type:"metric",metric:"humidity"},{type:"metric",metric:"uv_index"},{type:"metric",metric:"solar_radiation"},{type:"metric",metric:"pressure"},{type:"hourly"},{type:"day"},{type:"daily",show:!1},{type:"temp_humidity",show:!1},{type:"uv_solar",show:!1},{type:"moon",show:!1},{type:"astronomy",show:!1},{type:"health",show:!1},{type:"pollen",show:!1},{type:"air_quality",show:!1},{type:"radar",display:"popup"},{type:"wind_map",display:"popup"}],ls=new Set(["sky_bar","sun","sun_moon"]);function cs(r,t){let e=[],i=r.filter(s=>s&&ls.has(s.type)),o=i.find(s=>s.type==="sky_bar"),a=i.find(s=>s.type==="sun"||s.type==="sun_moon"),n=!1;for(let s of r){if(!s||!ls.has(s.type)){e.push(s);continue}let{type:V,sky_bar:c,show_moon:p,...h}=s,v={...h,type:"sky_tracker"};if(V==="sky_bar"&&(v.show_arc=!1),V==="sun"&&(v.show_facts=s.show_facts!==!1),o&&a&&(s===o||s===a)){if(n)continue;n=!0;let g=s===o?a:o,{type:y,sky_bar:O,show_moon:k,...T}=g;Object.assign(v,T,h),v.flex=Gf(g===o?g.flex:s.flex,g===o?s.flex:g.flex),delete v.show_arc,a.type==="sun"&&(v.show_facts=a.show_facts!==!1),v.flex||delete v.flex}e.push(v),V==="sun_moon"&&p!==!1&&e.push({type:"moon"})}if(t&&!e.some(s=>s?.type==="sky_tracker")){let s=e.findIndex(h=>h?.type==="hero"),c=e[s]?.flex?.wfc?.sun_position,p={type:"sky_tracker",span:12,rows:0,...c?{flex:{wfc:{sun_position:c}}}:{}};e.splice(s+1,0,p)}return e.map(s=>s?.type==="hero"?jf(s):s)}function jf(r){let{sky_bar:t,...e}=r;if(!e.flex?.wfc?.sun_position)return e;let{sun_position:o,...a}=e.flex.wfc,n={...e.flex,wfc:a};return Object.keys(a).length||delete n.wfc,Object.keys(n).length?e.flex=n:delete e.flex,e}function Gf(r,t){if(!r&&!t)return;let e={...t?.wfc||{}};return r?.wfc?.sun_position&&(e.sun_position={...e.sun_position||{},...r.wfc.sun_position}),{...t||{},...r||{},wfc:e}}function At(r){let t=Array.isArray(r.panels)&&r.panels.length?r.panels:Ls,e=t.find(o=>o?.type==="hero"),i=!!e&&e.sky_bar!==!1&&e.flex?.wfc?.sun_position?.show!==!1&&t!==Ls;return t=cs(t,i).map(o=>o?.type==="stack"?{...o,panels:cs(o.panels||[],!1)}:o),t=t.filter(o=>o&&b3[o.type]),Array.isArray(r.panels)&&r.panels.length&&!t.some(o=>o.type==="hero")&&r.hero!==!1&&(t=[{type:"hero",span:12},...t]),t.map(o=>o.type==="hero"&&r.hero&&typeof r.hero=="object"&&!o.flex?{...o,flex:r.hero}:o)}var Xr=new Map;function vt(r,t,e,i){if(!r?.connection||!t)return()=>{};let o=`${t}|${e}`,a=Xr.get(o);return a||(a={listeners:new Set,data:null,unsub:null},Xr.set(o,a),a.unsub=r.connection.subscribeMessage(n=>{a.data=n?.forecast||[],a.listeners.forEach(s=>s(a.data))},{type:"weather/subscribe_forecast",forecast_type:e,entity_id:t},{resubscribe:!0}).catch(n=>(console.warn("weather-station-flex-card: forecast subscription failed",t,e,n),null))),a.listeners.add(i),a.data&&i(a.data),()=>{a.listeners.delete(i),a.listeners.size||(Xr.delete(o),Promise.resolve(a.unsub).then(n=>typeof n=="function"&&n()).catch(()=>{}))}}function us(r,t){if(!Array.isArray(r))return null;let e=new Date;e.setHours(0,0,0,0),e.setDate(e.getDate()+t);let i=e.toDateString();return r.find(o=>new Date(o.datetime).toDateString()===i)||r[t]||null}var W0=r=>r!==null&&typeof r=="object"&&!Array.isArray(r);function i5(r,t){if(!W0(t))return t===void 0?r:t;let e={...W0(r)?r:{}};for(let i of Object.keys(t))e[i]=W0(t[i])&&W0(e[i])?i5(e[i],t[i]):t[i];return e}function Jr(r,t){if(W0(r)&&W0(t)){let e={};for(let i of Object.keys(r)){let o=Jr(r[i],t[i]);o!==void 0&&(e[i]=o)}return Object.keys(e).length?e:void 0}return JSON.stringify(r)===JSON.stringify(t)?void 0:r}function U0(r){if(!W0(r))return r;let t={};for(let[e,i]of Object.entries(r)){if(i===void 0||i===""||i===null)continue;let o=W0(i)?U0(i):i;W0(o)&&!Object.keys(o).length||(t[e]=o)}return t}var H4=r=>r===void 0?r:JSON.parse(JSON.stringify(r));var ti="wsfc-flex-core",ms="wsfc-flex-core-editor";customElements.get(ti)||customElements.define(ti,p2);{let r=r0.prototype,t=r._wfcWeatherSourcesPanel,e=r.render,i=r.updated;r._wfcWeatherSourcesPanel=function(){return this.wsfcMode==="sections"?"":t.call(this)},r.render=function(){return this.wsfcMode!=="sources"?e.call(this):!this.hass||!this._config?"":x`${this._wfcEditorStyle()}${t.call(this)}`},r.updated=function(o){i?.call(this,o);let a=this.wsfcPanels;if(a&&this.wsfcMode!=="sources"&&this.renderRoot?.querySelectorAll("details.wfc-panel, details.wsfc-panel").forEach(n=>{let s=n.querySelector(":scope > summary .wfc-panel-title, :scope > summary .wsfc-panel-title")?.textContent?.trim();n.hidden=!!s&&!a.includes(s)}),this.wsfcMode==="sources"&&!this.__wsfcOpened){let n=this.renderRoot?.querySelector("details.wfc-panel, details.wsfc-panel");n&&(n.open=!0,this.__wsfcOpened=!0)}}}var hs=p2.__wfcBuild,fs=r=>p2.__wfcResolve(r);function qf(r){return{...r,wfc:fs(r)}}function As(r,t){let{entity:e,metric_sources:i,type:o,...a}={...r,wfc:fs(r)},{entity:n,metric_sources:s,...V}=qf(t);return Jr(a,V)||{}}var xt=class{constructor(){this.el=null,this._json="",this.error=null}update(t,e){let i=JSON.stringify(t);if(this.el||(this.el=document.createElement(ti)),i!==this._json){this._json=i;try{this.el.setConfig(t),this.error=null}catch(o){this.error=o?.message||String(o),console.error("weather-station-flex-card: invalid Weather Flex config",o,t)}}return e&&this.el.hass!==e&&(this.el.hass=e),this.el}};var w3=_4(U4(),1),Yf=[[.03,"New moon"],[.22,"Waxing crescent"],[.28,"First quarter"],[.47,"Waxing gibbous"],[.53,"Full moon"],[.72,"Waning gibbous"],[.78,"Last quarter"],[.97,"Waning crescent"],[1.01,"New moon"]],Qf=r=>Yf.find(([t])=>r<t)[1];function vs(r,t,e=31){let i=w3.getMoonIllumination(r).phase;for(let o=1;o<=e*24;o++){let a=new Date(r.getTime()+o*36e5),n=w3.getMoonIllumination(a).phase;if(t===0?n<i:i<t&&n>=t)return a;i=n}return null}function s4(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{},o=w3.getMoonIllumination(t),a=e!=null?w3.getMoonTimes(t,e,i):{};return{phase:o.phase,name:Qf(o.phase),fraction:o.fraction,rise:a.rise||null,set:a.set||null,alwaysUp:!!a.alwaysUp,alwaysDown:!!a.alwaysDown,nextFull:vs(t,.5),nextNew:vs(t,0)}}function gt(r,t=new Date){let{latitude:e,longitude:i}=r?.config||{};if(e==null)return null;let o=w3.getTimes(t,e,i),a=o.sunset-o.sunrise;return{sunrise:o.sunrise,sunset:o.sunset,noon:o.solarNoon,dawn:o.dawn,dusk:o.dusk,daylightMs:a}}var V4=r=>new Intl.DateTimeFormat(r?.locale?.language,{hour:"numeric",minute:"2-digit"}),_t=r=>new Intl.DateTimeFormat(r?.locale?.language,{weekday:"short",month:"short",day:"numeric"});var Kf={hero:{name:" ",show_condition_effects:!0,show_moon_phase:!0,wfc:{order:["current","details"],current:{show:!0,clock_show_time:!0,clock_show_date:!0,clock_placement:"right",clock_font_size:40,clock_date_font_size:14,clock_contrast:"auto",clock_date_contrast:"auto"},details:{show:!0,chips:!0,chip_hide_when_off:!0,chip_show_name:!0,items:[{key:"apparent_temperature",show:!0},{key:"humidity",show:!0},{key:"dew_point",show:!0},{key:"wind_speed",show:!0},{key:"pressure",show:!0},{key:"uv_index",show:!0}]},sun_position:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!1}}},forecast:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly","daily"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},hourly:{forecast:{mode:"chart",show_sun_times:!0,use_color_thresholds:!0},wfc:{order:["hourly"],current:{show:!1},details:{show:!1},hourly:{show:!0},daily:{show:!1},sun_position:{show:!1},sun_arc:{show:!1}}},daily:{forecast:{mode:"chart",use_color_thresholds:!0},wfc:{order:["daily"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!0},sun_position:{show:!1},sun_arc:{show:!1}}},sky_tracker:{wfc:{order:["sun_arc"],current:{show:!1},details:{show:!1},hourly:{show:!1},daily:{show:!1},sun_arc:{show:!0,height:50,baseline_mode:"sky",night_moon:!0,moon_icon:"phase",sun_icon:"mdi:white-balance-sunny",labels_position:74,show_ss_icons:!0,show_captions:!1,show_base_ticks:!0,time_font_size:11,ss_icon_size:20},sun_position:{show:!1,height:40,timeframe_mode:"hours",timeframe_hours:24,timeframe_anchor:"now_center",times_position:"above",ticks_position:"overlay",ticks_every:4,weather_adjust:!0,ss_markers_position:"overlay",forecast_every:"midticks",forecast_font_size:11,forecast_icon_size:18,forecast_metric_detail_icons:!0,forecast_metric_order:["temps","icons","precipitation_probability","wind_speed","humidity","cloud_coverage","uv_index","wind_bearing"],forecast_metric_pos:{temps:"below",icons:"overlay",wind_speed:"below",humidity:"below",cloud_coverage:"below"}}}},flex:{}},Xf={wfc:{current:{header_temp_size:72,header_state_size:24,header_icon_size:96,clock_font_size:56,clock_date_font_size:18}}},Jf={wfc:{current:{clock_placement:"below-right",clock_font_size:26,clock_date_font_size:12}}},bt;function tA(r){let t=r?.shadowRoot;!t||t.__wsfcFill||(bt||(bt=new CSSStyleSheet,bt.replaceSync("ha-card { min-height: 100% !important; box-sizing: border-box; }")),t.adoptedStyleSheets=[...t.adoptedStyleSheets,bt],t.__wsfcFill=!0)}function P9(r,t){return{...Kf[r]||{},entity:t?.entity,metric_sources:t?.metric_sources}}var xs=l1`
  .core { margin: 0 -4px; flex: 1 0 auto; }
  .core > * { --ha-card-background: transparent; --card-padding: 4px; --ha-card-box-shadow: none; --ha-card-border-width: 0; }
  .err { color: var(--error-color, #db4437); font-size: 12px; }
`,R5=class extends t1{constructor(){super();z(this,"type","flex");z(this,"defaultTitle","Weather");z(this,"defaultIcon","mdi:weather-partly-cloudy");this._slot=new xt}_coreConfig(){return i5(P9(this.type,this.station),this.config?.flex||{})}render(){if(!this.hass||!this.station?.entity)return Z;let e=this._slot.update(this._coreConfig(),this.hass),i=this.type==="flex"?!!this.config?.title:this.config?.show_title!==!1;return x`
      ${i?E1(this.config,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${e}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:Z}
      ${this.extra()}
    `}extra(){return Z}};z(R5,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_size:{state:!0}}),z(R5,"styles",[X1,xs]);var T9=class extends R5{constructor(){super(...arguments);z(this,"type","hero")}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([e])=>{let i=e.contentRect.width,o=i>=900?"large":i<560?"narrow":"normal";o!==this._size&&(this._size=o)}),this._ro.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this._ro?.disconnect()}_coreConfig(){let e=P9("hero",this.station);return this._size==="large"&&(e=i5(e,Xf)),this._size==="narrow"&&(e=i5(e,Jf)),e=i5(e,this.config?.flex||{}),this.cardBg?e=i5(e,{show_condition_effects:!1,wfc:{card:{bg_color:"transparent"}}}):this.lite&&(e=i5(e,{show_condition_effects:!1})),e}updated(){tA(this._slot.el)}render(){return!this.hass||!this.station?.entity?Z:x`<div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:Z}`}};z(T9,"properties",{...R5.properties,cardBg:{attribute:!1},lite:{attribute:!1}}),z(T9,"styles",[X1,xs,l1`
      .core { margin: 0; display: flex; }
      .core > * { flex: 1; height: 100%; --ha-card-border-radius: var(--wsfc-radius, 16px); --card-padding: 16px; }
    `]);var ei=class extends R5{constructor(){super(...arguments);z(this,"type","forecast");z(this,"defaultTitle","Forecast");z(this,"defaultIcon","mdi:calendar-week")}},ri=class extends R5{constructor(){super(...arguments);z(this,"type","hourly");z(this,"defaultTitle","Hourly forecast");z(this,"defaultIcon","mdi:clock-outline")}},ii=class extends R5{constructor(){super(...arguments);z(this,"type","daily");z(this,"defaultTitle","Daily forecast");z(this,"defaultIcon","mdi:calendar-week")}};function oi(r,t){let e=i5(P9("sky_tracker",t),r?.flex||{}),i=e.wfc,o=i.sun_arc||(i.sun_arc={}),a=i.sun_position||(i.sun_position={}),n=r?.show_arc!==!1,s=r?.show_sky!==!1,V=r?.timeframe||"hours",c=Number(r?.hours??24),p=r?.anchor||"now_center";return o.timeframe_mode=V,a.timeframe_mode=V==="sunrise_sunset"?"match_arc":V,o.timeframe_hours=a.timeframe_hours=c,o.timeframe_anchor=a.timeframe_anchor=p,o.night_moon=r?.moon!==!1,r?.moon_phase===!1?o.moon_icon==="phase"&&(o.moon_icon="mdi:weather-night"):o.moon_icon="phase",n?(i.order=["sun_arc"],o.show=!0,o.baseline_mode=s?"sky":"line",a.show=!1):(i.order=["sun_position"],o.show=!1,a.show=s),e}var wt=class extends R5{constructor(){super(...arguments);z(this,"type","sky_tracker");z(this,"defaultTitle","Sky Tracker");z(this,"defaultIcon","mdi:sun-clock-outline")}_coreConfig(){return oi(this.config,this.station)}render(){if(!this.hass||!this.station?.entity)return Z;let e=this.config||{};return e.show_arc===!1&&e.show_sky===!1?x`${E1(e,this.defaultIcon,this.defaultTitle)}<div class="note">Turn on the sun arc or the sky gradient.</div>`:x`${e.title||e.show_title?E1(e,this.defaultIcon,this.defaultTitle):Z}
      <div class="core">${this._slot.update(this._coreConfig(),this.hass)}</div>
      ${this._slot.error?x`<div class="err">${this._slot.error}</div>`:Z}
      ${e.show_facts?this._facts():Z}`}_facts(){let e=gt(this.hass);if(!e)return Z;let i=V4(this.hass),o=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`,a=[["Dawn",i.format(e.dawn)],["Sunrise",i.format(e.sunrise)],["Solar noon",i.format(e.noon)],["Sunset",i.format(e.sunset)],["Dusk",i.format(e.dusk)],["Daylight",o(e.daylightMs)]];return x`<div class="facts">${a.map(([n,s])=>x`<div><span>${n}</span>${s}</div>`)}</div>`}};z(wt,"styles",[...R5.styles,l1`
      .facts { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 6px 14px; margin-top: 8px; font-size: 13px; }
      .facts div span { display: block; font-size: 11px; color: var(--wsfc-muted); }
    `]);customElements.get("wsfc-panel-flex")||customElements.define("wsfc-panel-flex",R5);customElements.get("wsfc-panel-hero")||customElements.define("wsfc-panel-hero",T9);customElements.get("wsfc-panel-forecast")||customElements.define("wsfc-panel-forecast",ei);customElements.get("wsfc-panel-hourly")||customElements.define("wsfc-panel-hourly",ri);customElements.get("wsfc-panel-daily")||customElements.define("wsfc-panel-daily",ii);customElements.get("wsfc-panel-sky-tracker")||customElements.define("wsfc-panel-sky-tracker",wt);P2.register(I0,f5,Q5,m3,z0,K5);var St=[gH,bH];function S3(r,t){let e=String(r).trim(),i=/^#([0-9a-f]{3})$/i.exec(e);if(i)return S3("#"+i[1].split("").map(o=>o+o).join(""),t);if(i=/^#([0-9a-f]{6})([0-9a-f]{2})?$/i.exec(e),i){let o=parseInt(i[1],16);return`rgba(${o>>16&255},${o>>8&255},${o&255},${t})`}if(i=/^rgba?\(([^)]+)\)$/i.exec(e),i){let[o,a,n]=i[1].split(/[\s,/]+/).filter(Boolean);return`rgba(${o},${a},${n},${t})`}return e}function eA(r,t){let e=r>48,i=new Intl.DateTimeFormat(t,e?{month:"short",day:"numeric"}:{hour:"numeric"});return o=>i.format(new Date(o))}function rA(r,t){let e=new Intl.DateTimeFormat(t,r>48?{weekday:"short",month:"short",day:"numeric",hour:r>192?void 0:"numeric"}:{weekday:"short",hour:"numeric",minute:"2-digit"});return i=>i.length?e.format(new Date(i[0].parsed.x)):""}function yt(r,t,e){let i=getComputedStyle(r).getPropertyValue("--secondary-text-color").trim()||"#9e9e9e",o="rgba(127,127,127,0.18)";return{responsive:!0,maintainAspectRatio:!1,animation:!1,parsing:!1,normalized:!0,spanGaps:!1,interaction:{mode:"index",intersect:!1},elements:{point:{radius:0,hitRadius:6,hoverRadius:3},line:{borderWidth:2,tension:.35}},plugins:{datalabels:{display:!1},legend:{display:!1},tooltip:{callbacks:{title:rA(t,e)}}},scales:{x:{type:"linear",grid:{color:o},ticks:{color:i,maxRotation:0,autoSkip:!0,maxTicksLimit:8,callback:eA(t,e)}}},_text:i,_grid:o}}var gs=new Map;async function _s(r,t){let e=gs.get(r);if(e&&Date.now()-e.at<3e5)return e.data;let i=await t();return gs.set(r,{at:Date.now(),data:i}),i}var iA=r=>{let t=Number(r);return Number.isFinite(t)?t:null};function L4(r,t,e){return ws(r,t,Date.now()-e*36e5,`h${e}`)}function bs(r,t){let e=new Date;return e.setHours(0,0,0,0),ws(r,t,e.getTime(),`d${e.toDateString()}`)}function ws(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(e);return _s(`h|${i}|${o.join(",")}`,async()=>{let s=await r.callWS({type:"history/history_during_period",start_time:n.toISOString(),end_time:a.toISOString(),entity_ids:o,minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),V={};for(let c of o)V[c]=(s?.[c]||[]).map(p=>({t:Math.round((p.lu??p.lc??0)*1e3),v:iA(p.s)}));return V})}function Ss(r,t,e,i){let o=[...new Set(t.filter(Boolean))].sort();if(!o.length||!r?.callWS)return Promise.resolve({});let a=new Date,n=new Date(a.getTime()-e*864e5);return _s(`s|${e}|${i}|${o.join(",")}`,async()=>{let s=await r.callWS({type:"recorder/statistics_during_period",start_time:n.toISOString(),end_time:a.toISOString(),statistic_ids:o,period:i,types:["mean","min","max","change"]}),V={};for(let c of o)V[c]=(s?.[c]||[]).map(p=>({t:typeof p.start=="number"?p.start:Date.parse(p.start),mean:p.mean??null,min:p.min??null,max:p.max??null,change:p.change??null}));return V})}function V7(r,t=300){if(r.length<=t)return r;let e=Math.ceil(r.length/t),i=[];for(let o=0;o<r.length;o+=e){let a=r.slice(o,o+e),n=a.map(s=>s.v).filter(s=>s!=null);i.push({t:a[Math.floor(a.length/2)].t,v:n.length?n.reduce((s,V)=>s+V,0)/n.length:null})}return i}function Zt(r,t){let e=new Map,i=null;for(let o of r){if(o.v==null){i=null;continue}if(i!=null){let a=o.v>=i?o.v-i:o.v,n=Math.floor(o.t/t)*t;e.set(n,(e.get(n)||0)+a)}i=o.v}return[...e].map(([o,a])=>({t:o+t/2,v:Math.round(a*1e3)/1e3}))}function kt(r,t){let e=new Map;for(let i of r){if(i.v==null)continue;let o=Math.floor(i.t/t)*t,a=e.get(o)||[0,0];a[0]+=i.v,a[1]++,e.set(o,a)}return[...e].map(([i,[o,a]])=>({t:i+t/2,v:o/a}))}var ys={"6h":6,"12h":12,"24h":24,"48h":48,"7d":168,"30d":720,"90d":2160,"365d":8760},Zs=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],L7=class extends t1{get defaultSeries(){return[{metric:"temperature"}]}get defaultTitle(){return"Graph"}get defaultIcon(){return"mdi:chart-line"}_series(){return(Array.isArray(this.config?.series)&&this.config.series.length?this.config.series:this.defaultSeries).map((e,i)=>{let o=j1[e.metric]||{},a=v5(e.metric,this.station,this.hass,e.entity||this.config?.entities?.[e.metric]),n=a&&this.hass.states[a];return{...e,entity:a,label:e.label||o.label||n?.attributes?.friendly_name||a||"\u2014",color:this.config?.colors?.[e.metric]||e.color||o.color||Zs[i%Zs.length],axis:e.axis==="right"?"right":"left",style:e.style||(o.chart==="bar"?"bar":"line"),cumulative:e.cumulative??o.cumulative??!1,unit:n?.attributes?.unit_of_measurement||""}})}_ranges(){let t=this.config?.ranges;return(Array.isArray(t)&&t.length?t:["24h","7d","30d"]).filter(e=>ys[e])}render(){if(!this.hass)return Z;let t=this._ranges(),e=this._range||this.config?.range||t[0],i=this._series(),o=t.length>1?y7(t.map(a=>({value:a,label:a})),e,a=>this._range=a,"History range"):Z;return x`
      ${E1(this.config,this.defaultIcon,this.defaultTitle,o)}
      ${this.config?.show_readings===!1?Z:x`<div class="readings">
            ${i.map(a=>{let n=I2(this.hass,a.entity);return Z7(this,{label:a.label,value:n?.value,unit:n?.unit,digits:a4(a.metric,n?.unit||"",a.digits),color:a.color,entity:a.entity})})}
          </div>`}
      <div class="body"><canvas aria-label=${`${this.config?.title||this.defaultTitle} history`}></canvas></div>
      ${this._error?x`<div class="note">${this._error}</div>`:Z}
    `}updated(){let t=this._range||this.config?.range||this._ranges()[0],e=this._series(),i=JSON.stringify([t,e.map(o=>[o.entity,o.style,o.axis,o.color,o.cumulative]),this.hass?.themes?.darkMode]);(i!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=i,this._loadedAt=Date.now(),this._load(t,e).catch(o=>this._error=`History unavailable: ${o?.message||o}`))}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t,e){let i=ys[t]||24,o=e.map(n=>n.entity).filter(Boolean),a=new Map;if(i<=48){let n=await L4(this.hass,o,i);for(let s of e){let V=n[s.entity]||[],c=i<=12?15*6e4:36e5,p=s.style==="bar"?s.cumulative?Zt(V,c):kt(V,c):V7(V);a.set(s,{line:p.map(h=>({x:h.t,y:h.v}))})}}else{let n=i>240?"day":"hour",s=await Ss(this.hass,o,i/24,n);for(let V of e){let c=s[V.entity]||[],p=V.style==="bar"&&V.cumulative?"change":"mean";a.set(V,{line:c.map(h=>({x:h.t,y:h[p]})),min:c.map(h=>({x:h.t,y:h.min})),max:c.map(h=>({x:h.t,y:h.max}))})}}this._error=o.length?void 0:"No sensors found for this graph.",this._draw(i,e,a)}_draw(t,e,i){let o=this.renderRoot.querySelector("canvas");if(!o)return;let a=yt(this,t,this.hass?.locale?.language),n=e.find(p=>p.axis==="left"),s=e.find(p=>p.axis==="right"),V=(p,h)=>{let v=p?.unit==="%",g={position:h,grid:h==="left"?{color:a._grid}:{drawOnChartArea:!1},ticks:{color:a._text,maxTicksLimit:6,callback:F=>`${+F.toFixed(2)}${p?.unit&&p.unit.length<=3?p.unit:""}`}};v&&Object.assign(g,{min:0,max:100}),e.filter(F=>F.axis===h).every(F=>/uv_index|solar_radiation|illuminance|rain|wind|humidity/.test(F.metric||""))&&e.some(F=>F.axis===h)&&(g.min=g.min??0),e.some(F=>F.axis===(h==="left"?"left":"right")&&F.style==="bar")&&(g.beginAtZero=!0);let O=this.config||{},k=O[`${h}_min`],T=O[`${h}_max`];return k!=null&&k!==""&&(g.min=Number(k)),T!=null&&T!==""&&(g.max=Number(T)),g};(n||!s)&&(a.scales.y=V(n,"left")),s&&(a.scales.y2=V(s,"right"));let c=[];e.forEach((p,h)=>{let v=i.get(p);if(!v)return;let g=p.axis==="right"?"y2":"y",y={label:p.label,data:v.line,borderColor:p.color,yAxisID:g,order:h+1};p.style==="bar"?Object.assign(y,{type:"bar",backgroundColor:S3(p.color,.6),borderWidth:0,borderRadius:2,order:50+h,barPercentage:.9,categoryPercentage:1}):p.style==="area"?Object.assign(y,{backgroundColor:S3(p.color,.13),fill:"origin",borderColor:S3(p.color,.75),borderWidth:1}):p.style==="dashed"&&Object.assign(y,{borderDash:[5,4],borderWidth:1.5}),c.push(y),(p.band??(h===0&&p.style==="line"))&&v.min&&v.max&&p.style!=="bar"&&c.push({label:`${p.label} max`,_band:!0,data:v.max,borderWidth:0,pointRadius:0,yAxisID:g,order:90,fill:"+1",backgroundColor:S3(p.color,.15)},{label:`${p.label} min`,_band:!0,data:v.min,borderWidth:0,pointRadius:0,yAxisID:g,order:91})}),a.plugins.tooltip.filter=p=>!p.dataset._band,this._chart&&this._chart.destroy(),this._chart=new P2(o,{type:"line",data:{datasets:c},options:a,plugins:St})}};z(L7,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_range:{state:!0},_error:{state:!0}}),z(L7,"styles",X1);var E9={temp_humidity:[{metric:"temperature"},{metric:"dew_point",style:"dashed"},{metric:"humidity",axis:"right",style:"area",color:"#42a5f5"}],uv_solar:[{metric:"uv_index",style:"area",color:"#ffa726"},{metric:"solar_radiation",axis:"right",color:"#ffd54f"}],graph:[{metric:"temperature"}]},Ci=class extends L7{get defaultSeries(){return E9.temp_humidity}get defaultTitle(){return"Temperature & Humidity"}get defaultIcon(){return"mdi:thermometer-water"}},ai=class extends L7{get defaultSeries(){return E9.uv_solar}get defaultTitle(){return"UV & Solar radiation"}get defaultIcon(){return"mdi:weather-sunny-alert"}};customElements.get("wsfc-panel-graph")||customElements.define("wsfc-panel-graph",L7);customElements.get("wsfc-panel-temp-humidity")||customElements.define("wsfc-panel-temp-humidity",Ci);customElements.get("wsfc-panel-uv-solar")||customElements.define("wsfc-panel-uv-solar",ai);var ks={mph:[1,5,10,15,25],"km/h":[2,8,16,24,40],"m/s":[.5,2,4.5,7,11],kn:[1,4,9,13,22]},Os=["#90caf9","#4fc3f7","#26a69a","#ffca28","#ff7043","#d32f2f"],F9=class extends t1{_ids(){let t=this.config,e=this.station,i=this.hass;return{speed:ct(t,e,i,"wind_speed"),gust:ct(t,e,i,"wind_gust_speed"),dir:ct(t,e,i,"wind_bearing")}}render(){if(!this.hass)return x``;let t=this._view||this.config?.view||"compass",e=this.station,i=this.hass,o=A5(e,i,"wind_speed"),a=A5(e,i,"wind_gust_speed"),n=A5(e,i,"wind_bearing"),s=o?.unit||a?.unit||"";return x`
      ${E1(this.config,"mdi:weather-windy","Wind",y7([{value:"compass",label:"Compass"},{value:"rose",label:"Rose 24h"}],t,V=>this._view=V,"Wind view"))}
      <div class="top">
        <div class="dial">${t==="rose"?this._roseSvg(s):this._compassSvg(o?.value,s,n?.value)}</div>
        <div class="side">
          <div class="readings">
            ${Z7(this,{label:"Speed",value:o?.value,unit:s,digits:1,color:"var(--wsfc-wind)",entity:o?.entity})}
            ${Z7(this,{label:"Gust",value:a?.value,unit:a?.unit||s,digits:1,color:"var(--wsfc-gust)",entity:a?.entity})}
            ${Z7(this,{label:`From ${n4(n?.value)}`,value:n?.value,unit:"\xB0",entity:n?.entity})}
          </div>
          ${t==="rose"?this._roseLegend(s):""}
        </div>
      </div>
      ${this.config?.show_chart===!1?"":x`<div class="body"><canvas aria-label="Wind speed and gust history"></canvas></div>`}
      ${this._error?x`<div class="note">${this._error}</div>`:""}
    `}_compassSvg(t,e,i){let o=[];for(let s=0;s<72;s++){let V=s*5*Math.PI/180,c=s%18===0,p=s%6===0,h=c?78:p?82:85;o.push(w1`<line class="tick" x1=${100+Math.sin(V)*h} y1=${100-Math.cos(V)*h} x2=${100+Math.sin(V)*88} y2=${100-Math.cos(V)*88} stroke-width=${c?2:1}></line>`)}let a=[["N",0],["E",90],["S",180],["W",270]].map(([s,V])=>w1`<text class="lbl ${s==="N"?"n":""}" x=${100+Math.sin(V*Math.PI/180)*66} y=${100-Math.cos(V*Math.PI/180)*66}>${s}</text>`),n=Number.isFinite(i)?i:null;return w1`<svg viewBox="0 0 200 200" role="img" aria-label=${`Wind from ${n4(n)} at ${B1(t,1)} ${e}`}>
      <circle class="ring" cx="100" cy="100" r="88" stroke-width="2"></circle>
      ${o}${a}
      ${n==null?"":w1`<g class="ptr" style=${`transform: rotate(${n}deg); transform-origin: 100px 100px`}>
        <path d="M100 36 L112 10 L100 16 L88 10 Z"></path>
      </g>`}
      <text class="spd" x="100" y="104">${B1(t,1)}</text>
      <text class="unit" x="100" y="124">${e}</text>
    </svg>`}_bins(t){return this.config?.rose_bins||ks[t]||ks.mph}_roseLegend(t){let e=this._bins(t),i=e.map((o,a)=>a<e.length-1?`${o}\u2013${e[a+1]}`:`${o}+`);return x`<div class="legend">${i.map((o,a)=>x`<span><i style="background:${Os[a+1]}"></i>${o}</span>`)}<span>${t}</span></div>`}_roseSvg(t){let e=this._rose;if(!e)return w1`<svg viewBox="0 0 200 200"><circle class="ring" cx="100" cy="100" r="88"></circle><text class="unit" x="100" y="100">loading…</text></svg>`;let i=Math.max(...e.sectors.map(V=>V.reduce((c,p)=>c+p,0)),1e-4),o=84,a=[];e.sectors.forEach((V,c)=>{let p=0;V.forEach((h,v)=>{if(!h)return;let g=p+h;a.push(w1`<path d=${oA(100,100,p/i*o,g/i*o,c*22.5-10,c*22.5+10)} fill=${Os[v]} opacity="0.9"></path>`),p=g})});let n=[.25,.5,.75,1].map(V=>w1`<circle class="ring" cx="100" cy="100" r=${o*V} stroke-dasharray="2 3"></circle>`),s=[["N",0],["E",90],["S",180],["W",270]].map(([V,c])=>w1`<text class="lbl ${V==="N"?"n":""}" x=${100+Math.sin(c*Math.PI/180)*95} y=${100-Math.cos(c*Math.PI/180)*95}>${V}</text>`);return w1`<svg viewBox="0 0 200 200" role="img" aria-label="Wind rose, last 24 hours">${n}${a}${s}
      <text class="unit" x="100" y="196">calm ${Math.round(e.calm*100)}% · peak ${Math.round(i*100)}%</text></svg>`}updated(){let t=this._ids(),e=`${t.speed}|${t.gust}|${t.dir}|${this.hass?.themes?.darkMode}`;(e!==this._loadedKey||Date.now()-(this._loadedAt||0)>5*6e4)&&(this._loadedKey=e,this._loadedAt=Date.now(),this._load(t).catch(i=>this._error=`History unavailable: ${i?.message||i}`)),this._pendingDraw&&this.renderRoot.querySelector("canvas")&&this._drawChart(this._pendingDraw)}disconnectedCallback(){super.disconnectedCallback(),this._chart?.destroy(),this._chart=null,this._loadedKey=""}async _load(t){let e=await L4(this.hass,[t.speed,t.gust,t.dir],24),i=A5(this.station,this.hass,"wind_speed")?.unit||"mph";this._rose=CA(e[t.dir]||[],e[t.speed]||[],this._bins(i)),this._error=void 0,this._pendingDraw={speed:V7(e[t.speed]||[]).map(o=>({x:o.t,y:o.v})),gust:V7(e[t.gust]||[]).map(o=>({x:o.t,y:o.v})),unit:i},this._drawChart(this._pendingDraw)}_drawChart(t){let e=this.renderRoot.querySelector("canvas");if(!e)return;this._pendingDraw=null;let i=getComputedStyle(this),o=i.getPropertyValue("--wsfc-wind").trim()||"#42a5f5",a=i.getPropertyValue("--wsfc-gust").trim()||"#ff9800",n=yt(this,24,this.hass?.locale?.language);n.scales.y={min:0,grid:{color:n._grid},ticks:{color:n._text,callback:V=>`${V} ${t.unit}`,maxTicksLimit:4}};let s=[{label:"Gust",data:t.gust,borderColor:a,borderWidth:1.25,order:2},{label:"Speed",data:t.speed,borderColor:o,backgroundColor:S3(o,.18),fill:"origin",order:1}];this._chart?.destroy(),this._chart=new P2(e,{type:"line",data:{datasets:s},options:n,plugins:St})}};z(F9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_view:{state:!0},_rose:{state:!0},_error:{state:!0}}),z(F9,"styles",[X1,l1`
      .top { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
      .dial { flex: 0 0 auto; width: min(180px, 42%); aspect-ratio: 1; }
      .dial svg { width: 100%; height: 100%; overflow: visible; }
      .side { flex: 1; min-width: 140px; display: flex; flex-direction: column; gap: 10px; }
      .legend { display: flex; flex-wrap: wrap; gap: 4px 10px; font-size: 11px; color: var(--wsfc-muted); }
      .legend i { display: inline-block; width: 10px; height: 10px; border-radius: 2px; margin-right: 4px; vertical-align: -1px; }
      .body { min-height: 100px; margin-top: 8px; }
      .ring { fill: none; stroke: var(--divider-color, rgba(127,127,127,.35)); }
      .tick { stroke: var(--secondary-text-color); opacity: .5; }
      .lbl { fill: var(--secondary-text-color); font-size: 11px; text-anchor: middle; dominant-baseline: central; }
      .lbl.n { fill: var(--primary-text-color); font-weight: 600; }
      .spd { fill: var(--primary-text-color); font-size: 26px; font-weight: 500; text-anchor: middle; }
      .unit { fill: var(--secondary-text-color); font-size: 11px; text-anchor: middle; }
      .ptr { fill: var(--wsfc-wind); transition: transform .8s ease; }
    `]);function oA(r,t,e,i,o,a){let n=(O,k)=>[r+Math.sin(k*Math.PI/180)*O,t-Math.cos(k*Math.PI/180)*O],[s,V]=n(i,o),[c,p]=n(i,a),[h,v]=n(e,a),[g,y]=n(e,o);return`M${s} ${V} A${i} ${i} 0 0 1 ${c} ${p} L${h} ${v} A${e} ${e} 0 0 0 ${g} ${y} Z`}function CA(r,t,e){let i=r.filter(c=>c.v!=null),o=t.filter(c=>c.v!=null),a=Array.from({length:16},()=>new Array(e.length+1).fill(0)),n=0,s=0,V=0;for(let c=0;c<i.length;c++){let p=i[c].t,h=Math.min((i[c+1]?.t??Date.now())-p,30*6e4);if(h<=0)continue;for(;V+1<o.length&&o[V+1].t<=p;)V++;let v=o[V]?.t<=p?o[V].v:o[0]?.v??0;if(n+=h,v<e[0]){s+=h;continue}let g=e.findIndex(O=>v<O);g===-1&&(g=e.length);let y=Math.round((i[c].v%360+360)%360/22.5)%16;a[y][g]+=h}return n?{sectors:a.map(c=>c.map(p=>p/n)),calm:s/n}:{sectors:a,calm:0}}customElements.get("wsfc-panel-wind")||customElements.define("wsfc-panel-wind",F9);var Ts=`/* required styles */\r
\r
.leaflet-pane,\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-tile-container,\r
.leaflet-pane > svg,\r
.leaflet-pane > canvas,\r
.leaflet-zoom-box,\r
.leaflet-image-layer,\r
.leaflet-layer {\r
	position: absolute;\r
	left: 0;\r
	top: 0;\r
	}\r
.leaflet-container {\r
	overflow: hidden;\r
	}\r
.leaflet-tile,\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	-webkit-user-select: none;\r
	   -moz-user-select: none;\r
	        user-select: none;\r
	  -webkit-user-drag: none;\r
	}\r
/* Prevents IE11 from highlighting tiles in blue */\r
.leaflet-tile::selection {\r
	background: transparent;\r
}\r
/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r
.leaflet-safari .leaflet-tile {\r
	image-rendering: -webkit-optimize-contrast;\r
	}\r
/* hack that prevents hw layers "stretching" when loading new tiles */\r
.leaflet-safari .leaflet-tile-container {\r
	width: 1600px;\r
	height: 1600px;\r
	-webkit-transform-origin: 0 0;\r
	}\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow {\r
	display: block;\r
	}\r
/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r
/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r
.leaflet-container .leaflet-overlay-pane svg {\r
	max-width: none !important;\r
	max-height: none !important;\r
	}\r
.leaflet-container .leaflet-marker-pane img,\r
.leaflet-container .leaflet-shadow-pane img,\r
.leaflet-container .leaflet-tile-pane img,\r
.leaflet-container img.leaflet-image-layer,\r
.leaflet-container .leaflet-tile {\r
	max-width: none !important;\r
	max-height: none !important;\r
	width: auto;\r
	padding: 0;\r
	}\r
\r
.leaflet-container img.leaflet-tile {\r
	/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\r
	mix-blend-mode: plus-lighter;\r
}\r
\r
.leaflet-container.leaflet-touch-zoom {\r
	-ms-touch-action: pan-x pan-y;\r
	touch-action: pan-x pan-y;\r
	}\r
.leaflet-container.leaflet-touch-drag {\r
	-ms-touch-action: pinch-zoom;\r
	/* Fallback for FF which doesn't support pinch-zoom */\r
	touch-action: none;\r
	touch-action: pinch-zoom;\r
}\r
.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r
	-ms-touch-action: none;\r
	touch-action: none;\r
}\r
.leaflet-container {\r
	-webkit-tap-highlight-color: transparent;\r
}\r
.leaflet-container a {\r
	-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r
}\r
.leaflet-tile {\r
	filter: inherit;\r
	visibility: hidden;\r
	}\r
.leaflet-tile-loaded {\r
	visibility: inherit;\r
	}\r
.leaflet-zoom-box {\r
	width: 0;\r
	height: 0;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	z-index: 800;\r
	}\r
/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r
.leaflet-overlay-pane svg {\r
	-moz-user-select: none;\r
	}\r
\r
.leaflet-pane         { z-index: 400; }\r
\r
.leaflet-tile-pane    { z-index: 200; }\r
.leaflet-overlay-pane { z-index: 400; }\r
.leaflet-shadow-pane  { z-index: 500; }\r
.leaflet-marker-pane  { z-index: 600; }\r
.leaflet-tooltip-pane   { z-index: 650; }\r
.leaflet-popup-pane   { z-index: 700; }\r
\r
.leaflet-map-pane canvas { z-index: 100; }\r
.leaflet-map-pane svg    { z-index: 200; }\r
\r
.leaflet-vml-shape {\r
	width: 1px;\r
	height: 1px;\r
	}\r
.lvml {\r
	behavior: url(#default#VML);\r
	display: inline-block;\r
	position: absolute;\r
	}\r
\r
\r
/* control positioning */\r
\r
.leaflet-control {\r
	position: relative;\r
	z-index: 800;\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
.leaflet-top,\r
.leaflet-bottom {\r
	position: absolute;\r
	z-index: 1000;\r
	pointer-events: none;\r
	}\r
.leaflet-top {\r
	top: 0;\r
	}\r
.leaflet-right {\r
	right: 0;\r
	}\r
.leaflet-bottom {\r
	bottom: 0;\r
	}\r
.leaflet-left {\r
	left: 0;\r
	}\r
.leaflet-control {\r
	float: left;\r
	clear: both;\r
	}\r
.leaflet-right .leaflet-control {\r
	float: right;\r
	}\r
.leaflet-top .leaflet-control {\r
	margin-top: 10px;\r
	}\r
.leaflet-bottom .leaflet-control {\r
	margin-bottom: 10px;\r
	}\r
.leaflet-left .leaflet-control {\r
	margin-left: 10px;\r
	}\r
.leaflet-right .leaflet-control {\r
	margin-right: 10px;\r
	}\r
\r
\r
/* zoom and fade animations */\r
\r
.leaflet-fade-anim .leaflet-popup {\r
	opacity: 0;\r
	-webkit-transition: opacity 0.2s linear;\r
	   -moz-transition: opacity 0.2s linear;\r
	        transition: opacity 0.2s linear;\r
	}\r
.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r
	opacity: 1;\r
	}\r
.leaflet-zoom-animated {\r
	-webkit-transform-origin: 0 0;\r
	    -ms-transform-origin: 0 0;\r
	        transform-origin: 0 0;\r
	}\r
svg.leaflet-zoom-animated {\r
	will-change: transform;\r
}\r
\r
.leaflet-zoom-anim .leaflet-zoom-animated {\r
	-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r
	        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r
	}\r
.leaflet-zoom-anim .leaflet-tile,\r
.leaflet-pan-anim .leaflet-tile {\r
	-webkit-transition: none;\r
	   -moz-transition: none;\r
	        transition: none;\r
	}\r
\r
.leaflet-zoom-anim .leaflet-zoom-hide {\r
	visibility: hidden;\r
	}\r
\r
\r
/* cursors */\r
\r
.leaflet-interactive {\r
	cursor: pointer;\r
	}\r
.leaflet-grab {\r
	cursor: -webkit-grab;\r
	cursor:    -moz-grab;\r
	cursor:         grab;\r
	}\r
.leaflet-crosshair,\r
.leaflet-crosshair .leaflet-interactive {\r
	cursor: crosshair;\r
	}\r
.leaflet-popup-pane,\r
.leaflet-control {\r
	cursor: auto;\r
	}\r
.leaflet-dragging .leaflet-grab,\r
.leaflet-dragging .leaflet-grab .leaflet-interactive,\r
.leaflet-dragging .leaflet-marker-draggable {\r
	cursor: move;\r
	cursor: -webkit-grabbing;\r
	cursor:    -moz-grabbing;\r
	cursor:         grabbing;\r
	}\r
\r
/* marker & overlays interactivity */\r
.leaflet-marker-icon,\r
.leaflet-marker-shadow,\r
.leaflet-image-layer,\r
.leaflet-pane > svg path,\r
.leaflet-tile-container {\r
	pointer-events: none;\r
	}\r
\r
.leaflet-marker-icon.leaflet-interactive,\r
.leaflet-image-layer.leaflet-interactive,\r
.leaflet-pane > svg path.leaflet-interactive,\r
svg.leaflet-image-layer.leaflet-interactive path {\r
	pointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r
	pointer-events: auto;\r
	}\r
\r
/* visual tweaks */\r
\r
.leaflet-container {\r
	background: #ddd;\r
	outline-offset: 1px;\r
	}\r
.leaflet-container a {\r
	color: #0078A8;\r
	}\r
.leaflet-zoom-box {\r
	border: 2px dotted #38f;\r
	background: rgba(255,255,255,0.5);\r
	}\r
\r
\r
/* general typography */\r
.leaflet-container {\r
	font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;\r
	font-size: 12px;\r
	font-size: 0.75rem;\r
	line-height: 1.5;\r
	}\r
\r
\r
/* general toolbar styles */\r
\r
.leaflet-bar {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.65);\r
	border-radius: 4px;\r
	}\r
.leaflet-bar a {\r
	background-color: #fff;\r
	border-bottom: 1px solid #ccc;\r
	width: 26px;\r
	height: 26px;\r
	line-height: 26px;\r
	display: block;\r
	text-align: center;\r
	text-decoration: none;\r
	color: black;\r
	}\r
.leaflet-bar a,\r
.leaflet-control-layers-toggle {\r
	background-position: 50% 50%;\r
	background-repeat: no-repeat;\r
	display: block;\r
	}\r
.leaflet-bar a:hover,\r
.leaflet-bar a:focus {\r
	background-color: #f4f4f4;\r
	}\r
.leaflet-bar a:first-child {\r
	border-top-left-radius: 4px;\r
	border-top-right-radius: 4px;\r
	}\r
.leaflet-bar a:last-child {\r
	border-bottom-left-radius: 4px;\r
	border-bottom-right-radius: 4px;\r
	border-bottom: none;\r
	}\r
.leaflet-bar a.leaflet-disabled {\r
	cursor: default;\r
	background-color: #f4f4f4;\r
	color: #bbb;\r
	}\r
\r
.leaflet-touch .leaflet-bar a {\r
	width: 30px;\r
	height: 30px;\r
	line-height: 30px;\r
	}\r
.leaflet-touch .leaflet-bar a:first-child {\r
	border-top-left-radius: 2px;\r
	border-top-right-radius: 2px;\r
	}\r
.leaflet-touch .leaflet-bar a:last-child {\r
	border-bottom-left-radius: 2px;\r
	border-bottom-right-radius: 2px;\r
	}\r
\r
/* zoom control */\r
\r
.leaflet-control-zoom-in,\r
.leaflet-control-zoom-out {\r
	font: bold 18px 'Lucida Console', Monaco, monospace;\r
	text-indent: 1px;\r
	}\r
\r
.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r
	font-size: 22px;\r
	}\r
\r
\r
/* layers control */\r
\r
.leaflet-control-layers {\r
	box-shadow: 0 1px 5px rgba(0,0,0,0.4);\r
	background: #fff;\r
	border-radius: 5px;\r
	}\r
.leaflet-control-layers-toggle {\r
	background-image: url(images/layers.png);\r
	width: 36px;\r
	height: 36px;\r
	}\r
.leaflet-retina .leaflet-control-layers-toggle {\r
	background-image: url(images/layers-2x.png);\r
	background-size: 26px 26px;\r
	}\r
.leaflet-touch .leaflet-control-layers-toggle {\r
	width: 44px;\r
	height: 44px;\r
	}\r
.leaflet-control-layers .leaflet-control-layers-list,\r
.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r
	display: none;\r
	}\r
.leaflet-control-layers-expanded .leaflet-control-layers-list {\r
	display: block;\r
	position: relative;\r
	}\r
.leaflet-control-layers-expanded {\r
	padding: 6px 10px 6px 6px;\r
	color: #333;\r
	background: #fff;\r
	}\r
.leaflet-control-layers-scrollbar {\r
	overflow-y: scroll;\r
	overflow-x: hidden;\r
	padding-right: 5px;\r
	}\r
.leaflet-control-layers-selector {\r
	margin-top: 2px;\r
	position: relative;\r
	top: 1px;\r
	}\r
.leaflet-control-layers label {\r
	display: block;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	}\r
.leaflet-control-layers-separator {\r
	height: 0;\r
	border-top: 1px solid #ddd;\r
	margin: 5px -10px 5px -6px;\r
	}\r
\r
/* Default icon URLs */\r
.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r
	background-image: url(images/marker-icon.png);\r
	}\r
\r
\r
/* attribution and scale controls */\r
\r
.leaflet-container .leaflet-control-attribution {\r
	background: #fff;\r
	background: rgba(255, 255, 255, 0.8);\r
	margin: 0;\r
	}\r
.leaflet-control-attribution,\r
.leaflet-control-scale-line {\r
	padding: 0 5px;\r
	color: #333;\r
	line-height: 1.4;\r
	}\r
.leaflet-control-attribution a {\r
	text-decoration: none;\r
	}\r
.leaflet-control-attribution a:hover,\r
.leaflet-control-attribution a:focus {\r
	text-decoration: underline;\r
	}\r
.leaflet-attribution-flag {\r
	display: inline !important;\r
	vertical-align: baseline !important;\r
	width: 1em;\r
	height: 0.6669em;\r
	}\r
.leaflet-left .leaflet-control-scale {\r
	margin-left: 5px;\r
	}\r
.leaflet-bottom .leaflet-control-scale {\r
	margin-bottom: 5px;\r
	}\r
.leaflet-control-scale-line {\r
	border: 2px solid #777;\r
	border-top: none;\r
	line-height: 1.1;\r
	padding: 2px 5px 1px;\r
	white-space: nowrap;\r
	-moz-box-sizing: border-box;\r
	     box-sizing: border-box;\r
	background: rgba(255, 255, 255, 0.8);\r
	text-shadow: 1px 1px #fff;\r
	}\r
.leaflet-control-scale-line:not(:first-child) {\r
	border-top: 2px solid #777;\r
	border-bottom: none;\r
	margin-top: -2px;\r
	}\r
.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r
	border-bottom: 2px solid #777;\r
	}\r
\r
.leaflet-touch .leaflet-control-attribution,\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	box-shadow: none;\r
	}\r
.leaflet-touch .leaflet-control-layers,\r
.leaflet-touch .leaflet-bar {\r
	border: 2px solid rgba(0,0,0,0.2);\r
	background-clip: padding-box;\r
	}\r
\r
\r
/* popup */\r
\r
.leaflet-popup {\r
	position: absolute;\r
	text-align: center;\r
	margin-bottom: 20px;\r
	}\r
.leaflet-popup-content-wrapper {\r
	padding: 1px;\r
	text-align: left;\r
	border-radius: 12px;\r
	}\r
.leaflet-popup-content {\r
	margin: 13px 24px 13px 20px;\r
	line-height: 1.3;\r
	font-size: 13px;\r
	font-size: 1.08333em;\r
	min-height: 1px;\r
	}\r
.leaflet-popup-content p {\r
	margin: 17px 0;\r
	margin: 1.3em 0;\r
	}\r
.leaflet-popup-tip-container {\r
	width: 40px;\r
	height: 20px;\r
	position: absolute;\r
	left: 50%;\r
	margin-top: -1px;\r
	margin-left: -20px;\r
	overflow: hidden;\r
	pointer-events: none;\r
	}\r
.leaflet-popup-tip {\r
	width: 17px;\r
	height: 17px;\r
	padding: 1px;\r
\r
	margin: -10px auto 0;\r
	pointer-events: auto;\r
\r
	-webkit-transform: rotate(45deg);\r
	   -moz-transform: rotate(45deg);\r
	    -ms-transform: rotate(45deg);\r
	        transform: rotate(45deg);\r
	}\r
.leaflet-popup-content-wrapper,\r
.leaflet-popup-tip {\r
	background: white;\r
	color: #333;\r
	box-shadow: 0 3px 14px rgba(0,0,0,0.4);\r
	}\r
.leaflet-container a.leaflet-popup-close-button {\r
	position: absolute;\r
	top: 0;\r
	right: 0;\r
	border: none;\r
	text-align: center;\r
	width: 24px;\r
	height: 24px;\r
	font: 16px/24px Tahoma, Verdana, sans-serif;\r
	color: #757575;\r
	text-decoration: none;\r
	background: transparent;\r
	}\r
.leaflet-container a.leaflet-popup-close-button:hover,\r
.leaflet-container a.leaflet-popup-close-button:focus {\r
	color: #585858;\r
	}\r
.leaflet-popup-scrolled {\r
	overflow: auto;\r
	}\r
\r
.leaflet-oldie .leaflet-popup-content-wrapper {\r
	-ms-zoom: 1;\r
	}\r
.leaflet-oldie .leaflet-popup-tip {\r
	width: 24px;\r
	margin: 0 auto;\r
\r
	-ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";\r
	filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r
	}\r
\r
.leaflet-oldie .leaflet-control-zoom,\r
.leaflet-oldie .leaflet-control-layers,\r
.leaflet-oldie .leaflet-popup-content-wrapper,\r
.leaflet-oldie .leaflet-popup-tip {\r
	border: 1px solid #999;\r
	}\r
\r
\r
/* div icon */\r
\r
.leaflet-div-icon {\r
	background: #fff;\r
	border: 1px solid #666;\r
	}\r
\r
\r
/* Tooltip */\r
/* Base styles for the element that has a tooltip */\r
.leaflet-tooltip {\r
	position: absolute;\r
	padding: 6px;\r
	background-color: #fff;\r
	border: 1px solid #fff;\r
	border-radius: 3px;\r
	color: #222;\r
	white-space: nowrap;\r
	-webkit-user-select: none;\r
	-moz-user-select: none;\r
	-ms-user-select: none;\r
	user-select: none;\r
	pointer-events: none;\r
	box-shadow: 0 1px 3px rgba(0,0,0,0.4);\r
	}\r
.leaflet-tooltip.leaflet-interactive {\r
	cursor: pointer;\r
	pointer-events: auto;\r
	}\r
.leaflet-tooltip-top:before,\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	position: absolute;\r
	pointer-events: none;\r
	border: 6px solid transparent;\r
	background: transparent;\r
	content: "";\r
	}\r
\r
/* Directions */\r
\r
.leaflet-tooltip-bottom {\r
	margin-top: 6px;\r
}\r
.leaflet-tooltip-top {\r
	margin-top: -6px;\r
}\r
.leaflet-tooltip-bottom:before,\r
.leaflet-tooltip-top:before {\r
	left: 50%;\r
	margin-left: -6px;\r
	}\r
.leaflet-tooltip-top:before {\r
	bottom: 0;\r
	margin-bottom: -12px;\r
	border-top-color: #fff;\r
	}\r
.leaflet-tooltip-bottom:before {\r
	top: 0;\r
	margin-top: -12px;\r
	margin-left: -6px;\r
	border-bottom-color: #fff;\r
	}\r
.leaflet-tooltip-left {\r
	margin-left: -6px;\r
}\r
.leaflet-tooltip-right {\r
	margin-left: 6px;\r
}\r
.leaflet-tooltip-left:before,\r
.leaflet-tooltip-right:before {\r
	top: 50%;\r
	margin-top: -6px;\r
	}\r
.leaflet-tooltip-left:before {\r
	right: 0;\r
	margin-right: -12px;\r
	border-left-color: #fff;\r
	}\r
.leaflet-tooltip-right:before {\r
	left: 0;\r
	margin-left: -12px;\r
	border-right-color: #fff;\r
	}\r
\r
/* Printing */\r
\r
@media print {\r
	/* Prevent printers from removing background-images of controls. */\r
	.leaflet-control {\r
		-webkit-print-color-adjust: exact;\r
		print-color-adjust: exact;\r
		}\r
	}\r
`;var nA="https://api.rainviewer.com/public/weather-maps.json",HA=7,sA=600,VA=1800,LA=5*6e4,l7=null,lA=async()=>l7||(l7=(await Promise.resolve().then(()=>_4(Es(),1))).default),Tt="https://server.arcgisonline.com/ArcGIS/rest/services",ni="Tiles &copy; Esri &mdash; Esri, HERE, Garmin, &copy; OpenStreetMap contributors",Fs={gray:r=>[`${Tt}/Canvas/World_${r?"Dark":"Light"}_Gray_Base/MapServer/tile/{z}/{y}/{x}`,ni,16],streets:()=>[`${Tt}/World_Street_Map/MapServer/tile/{z}/{y}/{x}`,ni,19],topo:()=>[`${Tt}/World_Topo_Map/MapServer/tile/{z}/{y}/{x}`,ni,19],imagery:()=>[`${Tt}/World_Imagery/MapServer/tile/{z}/{y}/{x}`,"Tiles &copy; Esri &mdash; Esri, Maxar, Earthstar Geographics",19],osm:()=>["https://tile.openstreetmap.org/{z}/{x}/{y}.png",'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',19]},cA={wind_new:"Wind",precipitation_new:"Precip",clouds_new:"Clouds",temp_new:"Temp",pressure_new:"Pressure"},$9=class extends t1{constructor(){super();z(this,"_togglePlay",()=>{this._playing=!this._playing,this._playing?this._schedule():clearTimeout(this._timer)});this._playing=!0,this._frames=[],this._idx=0}get _radarOn(){return this.config?.radar!==!1}render(){let e=this.config?.owm_api_key,i=this.config?.owm_layers||["wind_new"],o=this._overlay??this.config?.owm_default??"none";return this.lite?x`${E1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map")}${I6(this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar loop":"Map")}`:x`
      ${E1(this.config,this._radarOn?"mdi:radar":"mdi:map",this._radarOn?"Radar":"Map",e?y7([{value:"none",label:this._radarOn?"Radar":"Map"},...i.map(a=>({value:a,label:`${this._radarOn?"+ ":""}${cA[a]||a}`}))],o,a=>this._setOverlay(a),"Map overlay"):"")}
      <div class="map"><div id="map"></div></div>
      ${this._radarOn?x`<div class="bar">
        <button class="play" type="button" @click=${this._togglePlay} aria-label=${this._playing?"Pause radar loop":"Play radar loop"}>
          ${this._playing?"\u275A\u275A Pause":"\u25B6 Play"}
        </button>
        <span class="time" aria-live="off">${this._frameLabel||""}</span>
        <span class="spacer"></span>
        ${this._error?x`<span class="note">${this._error}</span>`:""}
      </div>`:""}
    `}firstUpdated(){this.lite||this._initMap()}async _initMap(){await lA();let e=this.renderRoot.getElementById("map");if(!e||this._map||this.lite)return;let i=this.config?.latitude??this.hass?.config?.latitude??39.5,o=this.config?.longitude??this.hass?.config?.longitude??-98.35;this._map=l7.map(e,{zoomControl:!0,attributionControl:!0,zoomSnap:.5}).setView([i,o],this.config?.zoom??7),this._base=null,this._applyBase(),l7.circleMarker([i,o],{radius:6,weight:2,color:"#fff",fillColor:"#ff5252",fillOpacity:1}).addTo(this._map),this._ro=new ResizeObserver(()=>this._map?.invalidateSize()),this._ro.observe(e),this._radarOn&&(this._loadFrames(),this._refresh=setInterval(()=>this._loadFrames(),LA)),this.config?.owm_api_key&&(this.config?.owm_default??"none")!=="none"&&this._setOverlay(this.config.owm_default)}updated(e){e.has("lite")&&e.get("lite")!==void 0&&(this.lite?this._teardown():this._map||this._initMap()),e.has("hass")&&!!this.hass?.themes?.darkMode!==this._dark&&this._applyBase()}disconnectedCallback(){super.disconnectedCallback(),this._teardown()}_teardown(){clearTimeout(this._timer),clearInterval(this._refresh),this._ro?.disconnect(),this._map?.remove(),this._map=null,this._frames=[],this._base=null,this._owm=null}connectedCallback(){super.connectedCallback(),this.hasUpdated&&!this._map&&!this.lite&&this._initMap()}_applyBase(){if(!this._map)return;this._dark=!!this.hass?.themes?.darkMode,this._base&&this._map.removeLayer(this._base);let e=this.config||{},[i,o,a]=e.base_map_url?[e.base_map_url,e.base_map_attribution||"",19]:(Fs[e.base_map]||Fs.gray)(this._dark);this._base=l7.tileLayer(i,{maxNativeZoom:a,maxZoom:19,attribution:o}).addTo(this._map),this._base.bringToBack()}async _loadFrames(){try{let e=await fetch(nA);if(!e.ok)throw new Error(`RainViewer ${e.status}`);let i=await e.json(),o=[...i.radar?.past||[],...i.radar?.nowcast||[]];if(!o.length||!this._map)return;let a=new Map(this._frames.map(n=>[n.path,n]));this._frames=o.map(n=>{let s=a.get(n.path);if(s)return a.delete(n.path),s;let V=l7.tileLayer(`${i.host}${n.path}/256/{z}/{x}/{y}/2/1_1.png`,{opacity:0,maxNativeZoom:HA,maxZoom:19,zIndex:10,attribution:'<a href="https://www.rainviewer.com/api.html">RainViewer</a>'}).addTo(this._map);return{...n,layer:V,nowcast:(i.radar?.nowcast||[]).includes(n)}}),a.forEach(n=>this._map.removeLayer(n.layer)),this._error=void 0,this._idx=this._frames.length-1,this._show(this._idx),this._playing&&this._schedule()}catch(e){this._error=`Radar unavailable (${e?.message||e})`}}_show(e){let i=this.config?.radar_opacity??.75;this._frames.forEach((a,n)=>a.layer.setOpacity(n===e?i:0));let o=this._frames[e];if(o){let a=new Date(o.time*1e3),n=new Intl.DateTimeFormat(this.hass?.locale?.language,{hour:"numeric",minute:"2-digit"}).format(a);this._frameLabel=o.nowcast?`${n} (forecast)`:n}}_schedule(){if(clearTimeout(this._timer),!this._frames.length)return;let e=this._idx===this._frames.length-1;this._timer=setTimeout(()=>{this._idx=(this._idx+1)%this._frames.length,this._show(this._idx),this._playing&&this._schedule()},e?VA:sA)}_setOverlay(e){this._overlay=e,this._owm&&(this._map?.removeLayer(this._owm),this._owm=null);let i=this.config?.owm_api_key;!i||e==="none"||!this._map||(this._owm=l7.tileLayer(`https://tile.openweathermap.org/map/${e}/{z}/{x}/{y}.png?appid=${encodeURIComponent(i)}`,{opacity:this.config?.owm_opacity??.8,zIndex:20,maxZoom:19,attribution:'<a href="https://openweathermap.org">OpenWeatherMap</a>'}).addTo(this._map))}};z($9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1},_playing:{state:!0},_frameLabel:{state:!0},_overlay:{state:!0},_error:{state:!0}}),z($9,"styles",[X1,z6,y0(Ts),l1`
      .map { position: relative; flex: 1; min-height: 240px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      .map > div { position: absolute; inset: 0; }
      .bar { display: flex; align-items: center; gap: 8px; margin-top: 8px; flex-wrap: wrap; }
      .bar button.play { font: inherit; border: 0; background: var(--primary-color); color: var(--text-primary-color, #fff); border-radius: 999px; padding: 4px 12px; cursor: pointer; }
      .time { font-variant-numeric: tabular-nums; color: var(--wsfc-muted); font-size: 13px; min-width: 7ch; }
      .spacer { flex: 1; }
      .leaflet-container { font: inherit; background: transparent; }
      .leaflet-control-attribution { font-size: 9px; }
    `]);customElements.get("wsfc-panel-radar")||customElements.define("wsfc-panel-radar",$9);function D9(r){let i=r<.5,o=Math.cos(r*2*Math.PI),a=Math.abs(o)*24,n=i?1:0,s=`M26 2 A24 24 0 0 ${n} 26 50 A${a} 24 0 0 ${o>0?1-n:n} 26 2 Z`;return w1`<svg viewBox="0 0 52 52" role="img" aria-label="Moon phase">
    <circle cx=${26} cy=${26} r=${24} fill="#2b2f36" stroke="rgba(255,255,255,.15)"></circle>
    <path d=${s} fill="#e9e6d6"></path>
  </svg>`}var R9=class extends t1{render(){if(!this.hass)return Z;let t=s4(this.hass),e=o=>o?V4(this.hass).format(o):"\u2014",i=_t(this.hass);return x`${E1(this.config,"mdi:moon-waning-crescent","Moon")}
      <div class="wrap" style=${this.config?.moon_size?`--moon-size:${this.config.moon_size}px`:""}>
        <div class="disc">${D9(t.phase)}</div>
        <div class="facts">
          <span class="name">${t.name}</span>
          <span>Illumination</span><span>${Math.round(t.fraction*100)}%</span>
          <span>Moonrise</span><span>${t.alwaysUp?"up all day":t.alwaysDown?"down all day":e(t.rise)}</span>
          <span>Moonset</span><span>${e(t.set)}</span>
          ${t.nextFull?x`<span>Next full</span><span>${i.format(t.nextFull)}</span>`:Z}
          ${t.nextNew?x`<span>Next new</span><span>${i.format(t.nextNew)}</span>`:Z}
        </div>
      </div>`}};z(R9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(R9,"styles",[X1,l1`
      .wrap { display: flex; align-items: center; gap: 18px; flex: 1; flex-wrap: wrap; }
      .disc svg { width: var(--moon-size, 110px); height: var(--moon-size, 110px); display: block; }
      .facts { display: grid; grid-template-columns: auto auto; gap: 4px 16px; font-size: 13px; }
      .facts span:nth-child(odd) { color: var(--wsfc-muted); }
      .name { grid-column: 1 / -1; font-size: 18px; font-weight: 600; margin-bottom: 4px; color: var(--primary-text-color) !important; }
    `]);customElements.get("wsfc-panel-moon")||customElements.define("wsfc-panel-moon",R9);var MA=5*6e4,B9=class extends t1{get _metric(){return this.config?.metric||"temperature"}get _entity(){return v5(this._metric,this.station,this.hass,this.config?.entity)}render(){if(!this.hass)return Z;let t=j1[this._metric]||{},e=this._entity,i=I2(this.hass,e),o=this.config?.unit??i?.unit??"",a=a4(this._metric,o,this.config?.digits),n=this.config?.color||t.color||"var(--primary-color)",s=this.config?.title||this.config?.label||t.label||this.hass.states[e]?.attributes?.friendly_name||"Value";return e?x`
      <div class="top" style=${`--m-color:${n}`} @click=${()=>o2(this,e)}>
        <ha-icon icon=${this.config?.icon||t.icon||"mdi:gauge"}></ha-icon>
        <span class="name">${s}</span>
        ${this.config?.show_minmax===!1||!this._today?Z:x`<span class="mm"><span class="lo">Min ${B1(this._today.min,a)}</span><br /><span class="hi">Max ${B1(this._today.max,a)}</span></span>`}
      </div>
      <div @click=${()=>o2(this,e)}>
        <div class="val">${typeof i?.value=="number"?B1(i.value,a):i?.value??"\u2014"}<small>${o}</small></div>
        <div class="cap">${this._caption(i,o)}</div>
      </div>
      ${this.config?.chart==="none"?Z:x`<div class="spark" @click=${()=>o2(this,e)}>${this._spark(n)}</div>`}
    `:x`<div class="note">No sensor found for ${t.label||this._metric}. Set <code>entity</code> on this tile.</div>`}_caption(t,e){if(this.config?.caption)return this.config.caption;let i=j1[this._metric]||{};return i.scale==="uv"&&typeof t?.value=="number"?as(t.value):i.trend&&this._trend?this._trend:""}_spark(t){let e=this._series;if(!e?.length)return Z;let i=200,o=40,a=e.map(R=>R.v).filter(R=>R!=null);if(!a.length)return Z;let n=Date.now()-(this.config?.hours||24)*36e5,s=Date.now(),V=R=>(R-n)/(s-n)*i,c=(this.config?.chart||j1[this._metric]?.chart)==="bar",p=Math.min(...a),h=Math.max(...a);c&&(p=0),h-p<1e-9&&(h+=1,p=c?0:p-1);let v=R=>o-(R-p)/(h-p)*o;if(c){let R=Math.max(2,i/(this.config?.hours||24)*.7);return w1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
        ${e.map(K=>K.v>0?w1`<rect x=${V(K.t)-R/2} y=${v(K.v)} width=${R} height=${o-v(K.v)} rx="1" fill=${t}></rect>`:Z)}
        <line x1="0" x2=${i} y1=${o} y2=${o} stroke=${t} stroke-opacity=".35"></line></svg>`}let g="",y=!1;for(let R of e){if(R.v==null){y=!1;continue}g+=`${y?"L":"M"}${V(R.t).toFixed(1)} ${v(R.v).toFixed(1)}`,y=!0}let O=e.find(R=>R.v!=null),k=[...e].reverse().find(R=>R.v!=null),T=`${g}L${V(k.t).toFixed(1)} ${o}L${V(O.t).toFixed(1)} ${o}Z`,F=`g${Math.random().toString(36).slice(2,8)}`;return w1`<svg viewBox="0 0 ${i} ${o}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id=${F} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color=${t} stop-opacity=".35"></stop><stop offset="1" stop-color=${t} stop-opacity="0"></stop></linearGradient></defs>
      <path d=${T} fill=${`url(#${F})`}></path>
      <path d=${g} fill="none" stroke=${t} stroke-width="1.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"></path></svg>`}updated(){let t=this._entity;if(!t)return;let e=`${t}|${this.config?.hours||24}|${this.config?.chart}`;e===this._key&&Date.now()-(this._at||0)<MA||(this._key=e,this._at=Date.now(),this._load(t).catch(()=>{}))}async _load(t){let e=this.config?.hours||24,[i,o]=await Promise.all([L4(this.hass,[t],e),bs(this.hass,[t])]),a=i[t]||[],n=(this.config?.chart||j1[this._metric]?.chart)==="bar",s=this.config?.cumulative??j1[this._metric]?.cumulative??!1;this._series=n?s?Zt(a,36e5):kt(a,36e5):V7(a,160);let V=(o[t]||[]).map(c=>c.v).filter(c=>c!=null);if(this._today=V.length?{min:Math.min(...V),max:Math.max(...V)}:null,j1[this._metric]?.trend){let c=Date.now()-108e5,p=[...a].reverse().find(v=>v.t<=c&&v.v!=null),h=[...a].reverse().find(v=>v.v!=null);if(p&&h){let v=h.v-p.v,g=ns(I2(this.hass,t)?.unit||"");this._trend=v>g?"Rising":v<-g?"Falling":"Steady"}}}};z(B9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_series:{state:!0},_today:{state:!0}}),z(B9,"styles",[X1,l1`
      :host { cursor: pointer; }
      .top { display: flex; align-items: flex-start; gap: 6px; }
      .top ha-icon { --mdc-icon-size: 20px; color: var(--m-color); }
      .name { flex: 1; font-size: 13px; font-weight: 500; line-height: 20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .mm { font-size: 11px; line-height: 1.3; text-align: right; white-space: nowrap; }
      .mm .lo { color: var(--wsfc-cold, #42a5f5); }
      .mm .hi { color: var(--wsfc-hot, #ef5350); }
      .val { font-size: 30px; font-weight: 600; line-height: 1.1; margin-top: 6px; white-space: nowrap; }
      .val small { font-size: 15px; font-weight: 400; margin-left: 3px; color: var(--wsfc-muted); }
      .cap { font-size: 12px; color: var(--wsfc-muted); min-height: 15px; margin-top: 2px; }
      .spark { flex: 1; min-height: 36px; margin-top: 6px; }
      .spark svg { width: 100%; height: 100%; display: block; overflow: visible; }
    `]);customElements.get("wsfc-panel-metric")||customElements.define("wsfc-panel-metric",B9);var dA=l1`
  .wsfc-weather-condition-icon-slot { width: var(--icon-size, 72px); height: var(--icon-size, 72px); display: block; }
  .wsfc-weather-condition-icon-slot svg, .wsfc-weather-condition-icon-slot img { width: 100%; height: 100%; }
  .wsfc-weather-condition-icon-slot .rain { fill: var(--weather-icon-rain-color, #30b3ff); }
  .wsfc-weather-condition-icon-slot .sun { fill: var(--weather-icon-sun-color, #fdd93c); }
  .wsfc-weather-condition-icon-slot .moon { fill: var(--weather-icon-moon-color, #fcf497); }
  .wsfc-weather-condition-icon-slot .cloud-back { fill: var(--weather-icon-cloud-back-color, #d4d4d4); }
  .wsfc-weather-condition-icon-slot .cloud-front { fill: var(--weather-icon-cloud-front-color, #f9f9f9); }
  .wsfc-weather-condition-icon-slot .snow { fill: var(--weather-icon-snow-color, #f9f9f9); stroke: var(--weather-icon-snow-stroke-color, #d4d4d4); stroke-width: 1px; paint-order: stroke; }
`,$s=(r,t)=>r?.localize?.(`component.weather.entity_component._.state.${t}`)||String(t||"").replace(/-/g," ").replace(/^\w/,e=>e.toUpperCase()),z9=class extends t1{render(){if(!this.hass)return Z;let e=this.hass.states[this.station?.entity]?.state;return x`
      ${E1(this.config,"mdi:text-box-outline",this.config?.title||`Current: ${e?$s(this.hass,e):"\u2014"}`)}
      ${this._alerts()}
      <div class="summary">${this._summary()}</div>
      ${this.config?.entity?this._text(this.config.entity):Z}
      ${this.config?.show_sun===!1&&this.config?.show_moon===!1?Z:this._astro()}
    `}_summary(){let t=this.station,e=this.hass,i=[],o=A5(t,e,"temperature");o&&i.push(`${B1(o.value,1)}${o.unit}`);let a=A5(t,e,"apparent_temperature");a&&o&&Math.abs(a.value-o.value)>=2&&i.push(`feels like ${B1(a.value,0)}${a.unit}`);let n=A5(t,e,"wind_speed"),s=A5(t,e,"wind_bearing"),V=A5(t,e,"wind_gust_speed");n&&(n.value<1?i.push("calm"):i.push(`wind ${s?`from the ${n4(s.value)} `:""}${B1(n.value,0)} ${n.unit}${V&&V.value>n.value*1.3?`, gusting ${B1(V.value,0)}`:""}`));let c=A5(t,e,"precipitation"),p=I2(e,v5("rain_today",t,e));c&&c.value>0?i.push(`raining ${B1(c.value,2)} ${c.unit}`):p&&p.value>0?i.push(`${B1(p.value,2)} ${p.unit} of rain today`):(c||p)&&i.push("dry");let h=A5(t,e,"humidity");if(h&&i.push(`humidity ${B1(h.value,0)}%`),!i.length)return"Waiting for station data.";let v=i.join(", ");return v[0].toUpperCase()+v.slice(1)+"."}_text(t){let e=this.hass.states[t];if(!e)return Z;let i=e.attributes||{},o=this.config.attribute?i[this.config.attribute]:i.forecast_text||i.detailed_forecast||e.state;return x`<div class="text" @click=${()=>o2(this,t)}>${o}</div>`}_alerts(){let t=this.config?.alerts_entity,e=t&&this.hass.states[t];if(!e)return Z;let i=e.attributes?.Alerts||e.attributes?.alerts||[];return!Array.isArray(i)||!i.length?Z:i.slice(0,3).map(o=>{let a=String(o.Severity||o.severity||"").toLowerCase();return x`<div class="alert ${/severe|extreme/.test(a)?"severe":""}" @click=${()=>o2(this,t)}>
        <b>${o.Event||o.event||o.title||"Weather alert"}</b>${o.Headline||o.headline||""}
      </div>`})}_astro(){let t=V4(this.hass),e=_t(this.hass),i=gt(this.hass),o=s4(this.hass),a=n=>`${Math.floor(n/36e5)}h ${String(Math.round(n%36e5/6e4)).padStart(2,"0")}m`;return x`<div class="astro">
      ${this.config?.show_sun===!1||!i?Z:x`<div><h4><ha-icon icon="mdi:weather-sunset-up"></ha-icon>Sun</h4>
            <p>Rise ${t.format(i.sunrise)} · set ${t.format(i.sunset)}<br />Solar noon ${t.format(i.noon)} · ${a(i.daylightMs)} daylight</p></div>`}
      ${this.config?.show_moon===!1?Z:x`<div><h4>${D9(o.phase)}${o.name}</h4>
            <p>${Math.round(o.fraction*100)}% illuminated<br />
            ${o.nextFull?x`Full ${e.format(o.nextFull)}`:""}${o.nextNew?x` · New ${e.format(o.nextNew)}`:""}</p></div>`}
    </div>`}};z(z9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(z9,"styles",[X1,l1`
      .summary { font-size: 16px; line-height: 1.45; margin-bottom: 10px; }
      .text { font-size: 13px; line-height: 1.45; color: var(--secondary-text-color); margin-bottom: 10px; white-space: pre-line; }
      .astro { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-top: 1px solid var(--divider-color); padding-top: 10px; }
      .astro h4 { margin: 0 0 4px; font-size: 13px; font-weight: 600; display: flex; gap: 6px; align-items: center; }
      .astro h4 ha-icon { --mdc-icon-size: 18px; color: var(--wsfc-muted); }
      .astro h4 svg { width: 18px; height: 18px; }
      .astro p { margin: 0; font-size: 12px; color: var(--secondary-text-color); line-height: 1.5; }
      .alert { border-left: 3px solid var(--warning-color, #ffa600); padding: 6px 10px; margin-bottom: 10px; border-radius: 4px; background: rgba(255, 166, 0, 0.1); font-size: 13px; cursor: pointer; }
      .alert.severe { border-color: var(--error-color, #db4437); background: rgba(219, 68, 55, 0.12); }
      .alert b { display: block; }
    `]);var I9=class extends t1{connectedCallback(){super.connectedCallback(),this._sub()}disconnectedCallback(){super.disconnectedCallback(),this._unsub?.(),this._unsub=null,this._subKey=null}updated(){this._sub()}_sub(){let t=this.config?.entity||this.station?.entity;!this.hass||!t||this._subKey===t||(this._unsub?.(),this._subKey=t,this._unsub=vt(this.hass,t,"daily",e=>this._daily=e))}render(){if(!this.hass)return Z;let t=Number(this.config?.day_offset??1),e=us(this._daily,t),i=this.config?.entity||this.station?.entity,o=this.hass.states[i]?.attributes||{},a=new Date;a.setDate(a.getDate()+t);let n=new Intl.DateTimeFormat(this.hass.locale?.language,{weekday:"long"}).format(a),s=this.config?.title||(t===0?"Today":t===1?`Tomorrow \xB7 ${n}`:n);if(!e)return x`${E1(this.config,"mdi:calendar-today",s)}<div class="note">Forecast not available yet.</div>`;let V=o.temperature_unit||"",c=o.precipitation_unit||"",p=o.wind_speed_unit||"",h=[];return e.precipitation!=null&&h.push(["Precipitation",`${B1(e.precipitation,c==="in"?2:1)} ${c}`]),e.precipitation_probability!=null&&h.push(["Chance of rain",`${B1(e.precipitation_probability)}%`]),e.wind_speed!=null&&h.push(["Wind",`${e.wind_bearing!=null?`${n4(Number(e.wind_bearing))} `:""}${B1(e.wind_speed)} ${p}`]),e.wind_gust_speed!=null&&h.push(["Gusts",`${B1(e.wind_gust_speed)} ${p}`]),e.humidity!=null&&h.push(["Humidity",`${B1(e.humidity)}%`]),e.uv_index!=null&&h.push(["UV index",B1(e.uv_index,1)]),x`
      ${E1(this.config,"mdi:calendar-today",s)}
      <div class="main" @click=${()=>o2(this,i)}>
        <wsfc-weather-condition-icon-provider .config=${{}} .state=${e.condition} style="--icon-size:${this.config?.icon_size||72}px"></wsfc-weather-condition-icon-provider>
        <div>
          <div class="temps">${e.templow!=null?x`<span class="lo">${B1(e.templow)}°</span> / `:Z}<span class="hi">${B1(e.temperature)}°</span></div>
          <div class="cond">${$s(this.hass,e.condition)}${V?` \xB7 ${V}`:""}</div>
        </div>
      </div>
      <div class="rows">${h.map(([v,g])=>x`<span>${v}</span><span>${g}</span>`)}</div>
    `}};z(I9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_daily:{state:!0}}),z(I9,"styles",[X1,dA,l1`
      .main { display: flex; align-items: center; gap: 14px; margin: 4px 0 10px; }
      .temps { font-size: 30px; font-weight: 600; }
      .temps .lo { color: var(--wsfc-cold, #42a5f5); }
      .temps .hi { color: var(--wsfc-hot, #ef5350); }
      .cond { font-size: 14px; color: var(--secondary-text-color); }
      .rows { display: grid; grid-template-columns: 1fr auto; gap: 6px 12px; font-size: 13px; border-top: 1px solid var(--divider-color); padding-top: 8px; }
      .rows span:nth-child(odd) { color: var(--secondary-text-color); }
    `]);var N9=class extends t1{render(){let t=this.config||{},e=t.show_status?es(this.station,this.hass):null,i={online:["Station online","#43a047"],partial:["Some readings unavailable","#ffa600"],offline:["Station offline","#db4437"],unconfigured:["No station sensors","#9e9e9e"]};return x`
      ${t.icon===""?Z:x`<ha-icon class="lead" icon=${t.icon||"mdi:chart-box-outline"}></ha-icon>`}
      <div><div class="t">${t.title||"Local measurements"}</div>${t.subtitle?x`<div class="sub">${t.subtitle}</div>`:Z}</div>
      ${e?x`<span class="status" style="--c:${i[e][1]}"><span class="dot"></span>${i[e][0]}</span>`:Z}
      <span class="grow"></span>
      ${this.bar?x`<div class="bar">${this.bar}</div>`:Z}
    `}};z(N9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},bar:{attribute:!1}}),z(N9,"styles",[B6,l1`
    :host { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; min-height: 40px; color: var(--primary-text-color); }
    .lead { --mdc-icon-size: 24px; color: var(--primary-color); }
    .t { font-size: var(--wsfc-heading-size, 20px); font-weight: 600; }
    .sub { font-size: 12px; color: var(--secondary-text-color); }
    .status { font-size: 12px; color: var(--secondary-text-color); display: inline-flex; align-items: center; gap: 5px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c); }
    .grow { flex: 1; }
    .bar { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  `]);var W9=class extends t1{render(){let t=this.config?.card;return t?.type?(this._ensure(t),this._el&&this.hass&&(this._el.hass=this.hass),x`${this.config?.title?E1(this.config,"mdi:card-outline",""):Z}
      ${this._err?x`<div class="note">${this._err}</div>`:x`<div class="host">${this._el||Z}</div>`}`):x`${E1(this.config,"mdi:card-outline","Card")}<div class="note">Set <code>card:</code> to any Home Assistant card configuration.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Card failed to load: ${i?.message||i}`}}}};z(W9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),z(W9,"styles",[X1,l1`.host { flex: 1; min-height: 0; } .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; }`]);customElements.get("wsfc-panel-bulletin")||customElements.define("wsfc-panel-bulletin",z9);customElements.get("wsfc-panel-day")||customElements.define("wsfc-panel-day",I9);customElements.get("wsfc-panel-heading")||customElements.define("wsfc-panel-heading",N9);customElements.get("wsfc-panel-card")||customElements.define("wsfc-panel-card",W9);var U9=class extends t1{constructor(){super(),this._els=new Map}updated(){this.setAttribute("direction",this.config?.direction==="vertical"?"vertical":"horizontal");let t=this.config?.min_width;this.style.setProperty("--wsfc-stack-min",t?`${t}px`:"")}render(){let t=(this.config?.panels||[]).filter(i=>i&&b3[i.type]);if(!t.length)return x`<div class="empty">Empty stack — add panels to it in the editor.</div>`;let e=this.config?.direction==="vertical";return t.map((i,o)=>{let a=V2(i);if(!a)return Z;let n=Number(i.grow??(e?i.rows?1:0:1)),s=Number(i.rows??0),V=[`--grow:${n}`,i.min_width?`--basis:${i.min_width}px`:"",e&&s?`min-height:calc(${s} * var(--wsfc-row, 110px) + ${s-1} * var(--wsfc-gap, 12px))`:""].join(";"),c=a.bare||i.type==="stack";return x`<section class="tile ${i.type} ${c?"bare":""}" style=${V}>${this._el(i,o)}</section>`})}_el(t,e){let i=`${e}:${JSON.stringify(t)}`,o=this._els.get(i);if(!o){o=document.createElement(V2(t).tag);for(let a of this._els.keys())a.startsWith(`${e}:`)&&this._els.delete(a);this._els.set(i,o)}return o.config=t,o.station=this.station,o.lite=this.lite,o.hass=this.hass,o}};z(U9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1}}),z(U9,"styles",[D6,l1`
      :host { display: flex; gap: var(--wsfc-gap, 12px); min-height: 0; height: 100%; }
      :host([direction="horizontal"]) { flex-direction: row; flex-wrap: wrap; align-items: stretch; }
      :host([direction="vertical"]) { flex-direction: column; }
      .tile { min-width: 0; }
      :host([direction="horizontal"]) .tile { flex: var(--grow, 1) 1 var(--basis, var(--wsfc-stack-min, 180px)); }
      :host([direction="vertical"]) .tile { flex: var(--grow, 0) 1 auto; }
      .empty { color: var(--secondary-text-color); font-size: 13px; padding: 12px; }
    `]);customElements.get("wsfc-panel-stack")||customElements.define("wsfc-panel-stack",U9);var j0=_4(U4(),1);var Rs=180/Math.PI,Ds=r=>r==null||!isFinite(r)?"\u2014":`${Math.floor(r/36e5)}h ${String(Math.round(r%36e5/6e4)).padStart(2,"0")}m`,c7=r=>r instanceof Date&&!isNaN(r),j9=class extends t1{render(){if(!this.hass)return Z;let{latitude:t,longitude:e}=this.hass.config||{};if(t==null)return x`${E1(this.config,"mdi:telescope","Astronomy")}<div class="note">Set your home location in Home Assistant.</div>`;let i=new Date,o=new Date(i);o.setHours(12,0,0,0);let a=j0.getTimes(o,t,e),n=new Date(o);n.setDate(n.getDate()-1);let s=j0.getTimes(n,t,e),V=j0.getMoonTimes(i,t,e),c=s4(this.hass,i),p=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric",minute:"2-digit"}),h=F=>c7(F)?p.format(F):"\u2014",v=c7(a.sunset)&&c7(a.sunrise)?a.sunset-a.sunrise:null,g=c7(s.sunset)&&c7(s.sunrise)?s.sunset-s.sunrise:null,y=v!=null&&g!=null?Math.round((v-g)/6e4):null,O=c7(a.dusk)&&c7(a.dawn)?a.dusk-a.dawn:null,k=[["Sun",a.sunrise,a.sunset,!0],["Civil twilight",a.dawn,a.dusk],["Nautical twilight",a.nauticalDawn,a.nauticalDusk],["Astronomical twilight",a.nightEnd,a.night],["Moon",V.rise,V.set,!0]],T=this.config||{};return x`
      ${E1(T,"mdi:telescope","Astronomy")}
      <div class="wrap">
        ${T.show_chart===!1?Z:x`<div class="chart">${this._chart(t,e,i)}</div>`}
        <div class="side">
          <table>
            <tr><th></th><th>Rise</th><th>Set</th></tr>
            ${k.map(([F,R,K,G])=>x`<tr class=${G?"main":""}><td>${F}</td>
              <td>${F==="Moon"&&V.alwaysUp?"up all day":F==="Moon"&&V.alwaysDown?"down all day":h(R)}</td>
              <td>${F==="Moon"&&(V.alwaysUp||V.alwaysDown)?"":h(K)}</td></tr>`)}
          </table>
          <div class="sum">
            <div><span>Length of day</span>${Ds(v)}${y!=null?x`<span class="d" style="display:inline">${y>=0?"+":"\u2212"}${Math.abs(y)}m</span>`:Z}</div>
            <div><span>Visible light</span>${Ds(O)}</div>
            <div><span>Solar noon</span>${h(a.solarNoon)}</div>
            <div class="moon">${D9(c.phase)}<div><span>${c.name}</span>${Math.round(c.fraction*100)}% illuminated</div></div>
          </div>
        </div>
      </div>
    `}_chart(t,e,i){let c=new Date(i);c.setHours(0,0,0,0);let p=96,h=864e5/p,v=X=>70-X/90*58,g=X=>{let e1="";for(let o1=0;o1<=p;o1++){let m1=new Date(c.getTime()+o1*h);e1+=`${o1?"L":"M"}${(o1/p*300).toFixed(1)} ${v(X(m1)).toFixed(1)}`}return e1},y=X=>j0.getPosition(X,t,e).altitude*Rs,O=X=>j0.getMoonPosition(X,t,e).altitude*Rs,k=(i-c)/864e5*300,T=y(i),F=O(i),R=[0,6,12,18,24],K=new Intl.DateTimeFormat(this.hass.locale?.language,{hour:"numeric"}),G="var(--wsfc-sun-color, #fdd835)",L1="var(--wsfc-moon-color, #b0bec5)";return w1`<svg viewBox="0 0 ${300} ${150}" role="img" aria-label="Sun and moon altitude today">
      <defs>
        <clipPath id="up"><rect x="0" y="0" width=${300} height=${70}></rect></clipPath>
        <linearGradient id="sk" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#42a5f5" stop-opacity=".25"></stop><stop offset="1" stop-color="#42a5f5" stop-opacity="0"></stop></linearGradient>
      </defs>
      <rect x="0" y=${12} width=${300} height=${58} fill="url(#sk)"></rect>
      <line x1="0" x2=${300} y1=${70} y2=${70} stroke="var(--secondary-text-color)" stroke-opacity=".5"></line>
      ${R.map(X=>w1`<line x1=${X/24*300} x2=${X/24*300} y1=${12} y2=${128} stroke="var(--secondary-text-color)" stroke-opacity=".12"></line>
        <text class="axis" x=${Math.min(290,Math.max(8,X/24*300))} y=${144} text-anchor="middle">${K.format(new Date(c.getTime()+X*36e5))}</text>`)}
      <path d=${g(O)} fill="none" stroke=${L1} stroke-width="1.6" stroke-dasharray="4 3" opacity=".9"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" opacity=".35"></path>
      <path d=${g(y)} fill="none" stroke=${G} stroke-width="2.2" clip-path="url(#up)"></path>
      <line x1=${k} x2=${k} y1=${12} y2=${128} stroke="var(--primary-color)" stroke-width="1"></line>
      <circle cx=${k} cy=${v(F)} r="5" fill=${L1} stroke="#000" stroke-opacity=".3"></circle>
      <circle cx=${k} cy=${v(T)} r="7" fill=${G} stroke="#000" stroke-opacity=".3"></circle>
      <text class="lbl" x="4" y=${20} fill=${G}>Sun ${Math.round(T)}°</text>
      <text class="lbl" x="4" y=${32} fill=${L1}>Moon ${Math.round(F)}°</text>
    </svg>`}};z(j9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(j9,"styles",[X1,l1`
      .wrap { display: flex; gap: 16px; flex-wrap: wrap; flex: 1; align-items: flex-start; }
      .chart { flex: 1 1 260px; min-width: 220px; }
      .chart svg { width: 100%; height: auto; display: block; overflow: visible; }
      .side { flex: 1 1 260px; min-width: 240px; display: flex; flex-direction: column; gap: 10px; }
      table { border-collapse: collapse; width: 100%; font-size: 13px; }
      th { text-align: right; font-weight: 500; color: var(--wsfc-muted); font-size: 11px; padding: 0 0 4px 8px; }
      th:first-child { text-align: left; padding-left: 0; }
      td { padding: 3px 0 3px 8px; text-align: right; font-variant-numeric: tabular-nums; white-space: nowrap; }
      td:first-child { text-align: left; padding-left: 0; color: var(--wsfc-muted); white-space: normal; }
      tr + tr td { border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2)); }
      tr.main td { color: var(--primary-text-color); font-weight: 500; }
      .sum { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 8px 14px; font-size: 13px; }
      .sum span { display: block; font-size: 11px; color: var(--wsfc-muted); }
      .sum .d { font-size: 11px; color: var(--wsfc-muted); margin-left: 4px; }
      .moon { display: flex; gap: 10px; align-items: center; }
      .moon svg { width: 40px; height: 40px; flex: 0 0 auto; }
      .axis { fill: var(--secondary-text-color); font-size: 9px; }
      .lbl { font-size: 9px; font-weight: 600; }
    `]);customElements.get("wsfc-panel-astronomy")||customElements.define("wsfc-panel-astronomy",j9);var pA={wind:"Wind",gust:"Gusts",rain:"Rain & thunder",temp:"Temperature",clouds:"Clouds",pressure:"Pressure",radar:"Radar",satellite:"Satellite",waves:"Waves",snowAccu:"Snow depth"};function uA(r,t){let e=Number(r.latitude??t?.config?.latitude??39.5),i=Number(r.longitude??t?.config?.longitude??-98.35),o=t?.config?.unit_system?.temperature==="\xB0F",a=new URLSearchParams({type:"map",location:"coordinates",metricRain:r.rain_unit||(o?"in":"mm"),metricTemp:r.temp_unit||(o?"\xB0F":"\xB0C"),metricWind:r.wind_unit||(o?"mph":"km/h"),zoom:String(r.zoom??6),overlay:r.overlay||"wind",product:r.model||"ecmwf",level:r.level||"surface",lat:e.toFixed(3),lon:i.toFixed(3),detailLat:e.toFixed(3),detailLon:i.toFixed(3),marker:r.marker===!1?"":"true",message:"true"});return r.forecast_detail&&a.set("detail","true"),`https://embed.windy.com/embed.html?${a}`}var G9=class extends t1{render(){if(!this.hass)return Z;let t=this.config||{},e=uA(t,this.hass);e!==this._url&&(this._url=e);let i=t.show_title===!1?Z:E1(t,"mdi:weather-windy",t.title||`${pA[t.overlay||"wind"]||"Wind"} map`);return this.lite?x`${i}${I6("mdi:map-marker-radius-outline","Windy map")}`:x`${i}
      <div class="frame"><iframe src=${this._url} title="Windy weather map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>`}};z(G9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},lite:{attribute:!1}}),z(G9,"styles",[X1,z6,l1`
      .frame { position: relative; flex: 1; min-height: 220px; border-radius: 12px; overflow: hidden; background: #1b1f24; }
      iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    `]);customElements.get("wsfc-panel-wind-map")||customElements.define("wsfc-panel-wind-map",G9);var y3={temps:{title:"Temperatures",icon:"mdi:thermometer-lines",metrics:["temperature","apparent_temperature","dew_point"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},wind:{title:"Wind",icon:"mdi:weather-windy",metrics:["wind_speed","wind_gust_speed"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},pressure_humidity:{title:"Pressure & humidity",icon:"mdi:gauge",metrics:["pressure","humidity"],card:{days_to_show:2,period:"5minute",chart_type:"line",stat_types:["mean"]}},solar_uv:{title:"Solar & UV",icon:"mdi:weather-sunny-alert",metrics:["solar_radiation","uv_index"],card:{days_to_show:1,period:"5minute",chart_type:"line",stat_types:["mean","max"]}},rain:{title:"Rain",icon:"mdi:weather-pouring",metrics:["rain_rate","rain_today"],card:{days_to_show:1,period:"hour",chart_type:"bar",stat_types:["max"]}},air_quality:{title:"Air quality",icon:"mdi:air-filter",metrics:["aqi","pm2_5"],card:{days_to_show:2,period:"hour",chart_type:"line",stat_types:["mean","max"]}},temperature_range:{title:"Daily temperature range",icon:"mdi:thermometer-chevron-up",metrics:["temperature"],card:{days_to_show:30,period:"day",chart_type:"line",stat_types:["min","mean","max"]}}},Pt={temps:{card:{hours_to_show:36,points_per_hour:4},series:{temperature:{color:"#ff7043",fill_opacity:.25,show_extrema:"always"},apparent_temperature:{color:"#ffb74d",show_fill:!1,line_style:"dashed",line_width:1.5},dew_point:{color:"#26c6da",show_fill:!1,line_width:1.5}}},wind:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0,lower_bound_secondary:0,upper_bound_secondary:360},metrics:["wind_speed","wind_gust_speed","wind_bearing"],series:{wind_speed:{color:"#42a5f5",aggregate_func:"avg",show_fill:!1,show_extrema:"always",show_extrema_min:!1},wind_gust_speed:{color:"#ff9800",aggregate_func:"max",fill_opacity:.2,line_width:1,show_extrema:"always",show_extrema_min:!1},wind_bearing:{color:"#9e9e9e",y_axis:"secondary",show_fill:!1,line_width:1,smooth:!1,graph_type:"step",unit:"\xB0"}}},pressure_humidity:{card:{hours_to_show:36,points_per_hour:4,show_y2_axis:!0},series:{pressure:{color:"#42a5f5",show_fill:!1,decimals:2},humidity:{color:"#26a69a",y_axis:"secondary",fill_opacity:.2}}},solar_uv:{card:{hours_to_show:24,points_per_hour:4,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{solar_radiation:{color:"#ffd54f",fill_opacity:.3,show_extrema:"always",show_extrema_min:!1},uv_index:{color:"#ff7043",y_axis:"secondary",aggregate_func:"max",show_fill:!1,line_width:2}}},rain:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{rain_rate:{color:"#7e57c2",graph_type:"bar",aggregate_func:"max",decimals:2},rain_today:{color:"#1e88e5",y_axis:"secondary",aggregate_func:"max",fill_opacity:.2,decimals:2,smooth:!1}}},air_quality:{card:{hours_to_show:24,points_per_hour:2,show_y2_axis:!0,lower_bound:0,lower_bound_secondary:0},series:{aqi:{color:"#66bb6a",fill_opacity:.2,show_extrema:"always",show_extrema_min:!1,decimals:0},pm2_5:{color:"#ffb74d",y_axis:"secondary",show_fill:!1,decimals:1}}},temperature_range:{card:{hours_to_show:720,group_by:"date"},series:{temperature:{color:"#ff7043",show_range_band:!0,show_fill:!1,show_extrema:"always"}}}};function Hi(r){let t=r?.engine||"auto";return t==="builtin"?"builtin":t==="sgcc"||customElements.get("statistics-graph-chart-card")?"sgcc":"builtin"}function mA(r,t,e){return Hi(r)==="sgcc"?hA(r,t,e):fA(r,t,e)}function hA(r,t,e){let i=Pt[r.preset]||Pt.temps,o=y3[r.preset]||y3.temps,a=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics||o.metrics,n=Array.isArray(r.entities)&&r.entities.length?r.entities:a.map(V=>{let c=v5(V,t,e,r.entity_overrides?.[V]);if(!c)return null;let p=r.colors?.[V];return{entity:c,name:j1[V]?.label||V,...i.series?.[V]||{},...p?{color:p}:{}}}).filter(Boolean),s={type:"custom:statistics-graph-chart-card",card_header:"",card_shadow:!1,card_border:!1,card_background_color:"transparent",card_padding:0,height:"auto",show_legend:!0,...i.card,entities:n};return n.some(V=>V.y_axis==="secondary")||(delete s.show_y2_axis,delete s.lower_bound_secondary,delete s.upper_bound_secondary),r.days_to_show!=null&&(s.hours_to_show=Number(r.days_to_show)*24),r.hours_to_show!=null&&(s.hours_to_show=Number(r.hours_to_show)),i5(s,r.card||{})}function fA(r,t,e){let i=y3[r.preset]||y3.temps,o=Array.isArray(r.metrics)&&r.metrics.length?r.metrics:i.metrics,a=Array.isArray(r.entities)&&r.entities.length?r.entities:o.map(s=>{let V=v5(s,t,e,r.entity_overrides?.[s]);return V?{entity:V,name:j1[s]?.label||s}:null}).filter(Boolean),n={type:"statistics-graph",...i.card,entities:a};for(let s of["days_to_show","period","chart_type","stat_types","hide_legend"])r[s]!=null&&(n[s]=r[s]);return i5(n,r.card||{})}var q9=class extends t1{connectedCallback(){super.connectedCallback(),customElements.get("statistics-graph-chart-card")||customElements.whenDefined("statistics-graph-chart-card").then(()=>this.requestUpdate())}render(){if(!this.hass)return Z;let t=this.config||{},e=y3[t.preset]||y3.temps,i=mA(t,this.station,this.hass);return i.entities?.length?(this._ensure(i),this._el&&(this._el.hass=this.hass),x`${t.show_title===!1?Z:E1(t,e.icon,e.title)}
      ${this._err?x`<div class="note">${this._err}</div>`:x`<div class="host">${this._el||Z}</div>`}`):x`${E1(t,e.icon,e.title)}<div class="note">No station sensors found for this graph.</div>`}async _ensure(t){let e=JSON.stringify(t);if(e!==this._json){this._json=e;try{let i=await window.loadCardHelpers?.();if(!i)throw new Error("Home Assistant card helpers unavailable");if(this._json!==e)return;this._el=i.createCardElement(t),this._el.hass=this.hass,this._err=void 0,this.requestUpdate()}catch(i){this._err=`Statistics graph failed to load: ${i?.message||i}`}}}};z(q9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1},_err:{state:!0}}),z(q9,"styles",[X1,l1`
      .host { flex: 1; min-height: 0; }
      .host > * { --ha-card-background: transparent; --ha-card-box-shadow: none; --ha-card-border-width: 0; --card-padding: 0; height: 100%; }
    `]);customElements.get("wsfc-panel-statistics")||customElements.define("wsfc-panel-statistics",q9);var AA=[["online",(r,t)=>t==="connectivity"||/\bonline\b/.test(r)],["battery",(r,t)=>t==="battery"||/batt/.test(r)],["capacitor",r=>/capacitor|cap[\s_-]?volt/.test(r)],["rssi",(r,t)=>/rssi/.test(r)||t==="signal_strength"&&/dbm/.test(r)],["signal",(r,t)=>/signal/.test(r)||t==="signal_strength"]],vA={online:"mdi:lan-connect",battery:"mdi:battery",capacitor:"mdi:flash",rssi:"mdi:wifi-strength-2",signal:"mdi:signal"},xA={online:"Online",battery:"Battery",capacitor:"Capacitor",rssi:"RSSI",signal:"Signal"};function gA(r,t){let e=t?.state,i=t?.attributes||{};if(e==null||e==="unavailable"||e==="unknown")return"bad";let o=Number(e),a=i.unit_of_measurement||"";if(r==="online")return e==="on"?"ok":"bad";if(r==="battery")return t.entity_id.startsWith("binary_sensor.")?e==="on"?"bad":"ok":a==="%"?o<15?"bad":o<30?"warn":"ok":a==="V"?o<2.3?"bad":o<2.5?"warn":"ok":!isNaN(o)&&o<=5?o<=1?"bad":o<=2?"warn":"ok":"";if(r==="capacitor")return a==="V"&&o<2.3?"warn":"ok";if(r==="rssi")return o<-90?"bad":o<-80?"warn":"ok";if(r==="signal"){if(a==="%")return o<25?"bad":o<50?"warn":"ok";if(!isNaN(o)&&o<=4)return o<=1?"bad":o<=2?"warn":"ok"}return""}function _A(r,t){let e=[];for(let i of jr(r,t)){let o=t.devices?.[i],a=[];for(let s of C4(t,i)){let V=t.entities[s],c=t.states[s];if(!c)continue;let p=`${s} ${c.attributes?.friendly_name||""} ${c.attributes?.unit_of_measurement||""}`.toLowerCase(),h=c.attributes?.device_class,v=AA.find(([,O])=>O(p,h))?.[0];if(!v)continue;let g=c.attributes?.friendly_name||s,y=o?.name_by_user||o?.name;y&&g.startsWith(y)&&(g=g.slice(y.length).trim()||xA[v]),a.push({eid:s,kind:v,name:g,st:c,level:gA(v,c),platform:V.platform})}let n=["online","battery","capacitor","signal","rssi"];a.sort((s,V)=>n.indexOf(s.kind)-n.indexOf(V.kind)||s.name.localeCompare(V.name)),a.length&&e.push({device:o?.name_by_user||o?.name||i,model:o?.model,rows:a})}return e}var Y9=class extends t1{render(){if(!this.hass)return Z;let t=this.config||{},e=_A(this.station,this.hass),i=o=>{let a=o.st,n=a.attributes?.unit_of_measurement||"";return o.kind==="online"?a.state==="on"?"Online":"Offline":a.entity_id.startsWith("binary_sensor.")?o.kind==="battery"?a.state==="on"?"Low":"OK":a.state:["unavailable","unknown"].includes(a.state)?"\u2014":`${a.state}${n?` ${n}`:""}`};return x`
      ${E1(t,"mdi:heart-pulse","Station health")}
      ${e.length?e.map(o=>x`<div class="grp">
            ${e.length>1||t.show_devices?x`<div class="dev">${o.device}${o.model?` \xB7 ${o.model}`:""}</div>`:Z}
            <div class="rows">${o.rows.map(a=>x`<div class="row ${a.level}" @click=${()=>o2(this,a.eid)} title=${a.eid}>
              <ha-icon icon=${a.kind==="battery"&&a.level==="bad"?"mdi:battery-alert":vA[a.kind]}></ha-icon>
              <div class="t"><div class="n">${a.name}</div><div class="v">${i(a)}</div></div>
            </div>`)}</div>
          </div>`):x`<div class="note">No battery, signal or online sensors on the station devices. The Home Assistant core Ecowitt integration reports only some batteries and no signal — add Ecowitt Local or the Ecowitt Official integration as a second source under Weather station.</div>`}
      ${this._lastReport()}
    `}_lastReport(){let e=["temperature","humidity","wind_speed","pressure"].map(n=>g3(this.station,this.hass,n)).filter(Boolean).map(n=>Date.parse(this.hass.states[n]?.last_updated||this.hass.states[n]?.last_changed||"")).filter(n=>!isNaN(n));if(!e.length)return Z;let i=Math.round((Date.now()-Math.max(...e))/6e4),o=i>30?"bad":i>10?"warn":"",a=i<1?"just now":i<60?`${i} min ago`:`${Math.floor(i/60)} h ${i%60} min ago`;return x`<div class="last ${o}">Last reading ${a}</div>`}};z(Y9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(Y9,"styles",[X1,l1`
      .grp { margin-bottom: 8px; }
      .dev { font-size: 12px; color: var(--wsfc-muted); margin: 6px 0 4px; }
      .rows { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 6px; }
      .row { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.08); cursor: pointer; min-width: 0; }
      .row ha-icon { --mdc-icon-size: 18px; color: var(--c, var(--wsfc-muted)); flex: 0 0 auto; }
      .row .t { min-width: 0; }
      .row .n { font-size: 11px; color: var(--wsfc-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .row .v { font-size: 14px; font-weight: 500; white-space: nowrap; }
      .ok { --c: var(--success-color, #43a047); }
      .warn { --c: var(--warning-color, #ffa600); }
      .bad { --c: var(--error-color, #db4437); }
      .last { font-size: 12px; color: var(--wsfc-muted); margin-top: 4px; }
      .last.warn { color: var(--warning-color, #ffa600); }
      .last.bad { color: var(--error-color, #db4437); }
    `]);customElements.get("wsfc-panel-health")||customElements.define("wsfc-panel-health",Y9);var bA={up:"mdi:arrow-top-right",down:"mdi:arrow-bottom-right",flat:"mdi:arrow-right"},wA={up:"rising tomorrow",down:"falling tomorrow",flat:"same tomorrow"},Q9=class extends t1{shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this._ids||e.entities!==this.hass.entities?!0:this._ids.some(i=>e.states[i]!==this.hass.states[i])}render(){if(!this.hass)return Z;let t=this.config||{},e=ht(t,this.hass);if(this._ids=e.entities,!e.total)return x`${E1(t,"mdi:flower-pollen","Pollen")}
        <div class="note">No pollen sensors found. Install the Pollen Levels integration from HACS (Google Pollen API — US and worldwide), or list sensors under this panel's options.</div>`;let i=[e.source,e.town,e.status].filter(Boolean);return x`
      ${E1(t,"mdi:flower-pollen","Pollen")}
      <div class="hdr">${i.join(" \xB7 ")}</div>
      ${e.rows.length?Z:x`<div class="note">No species in season right now.</div>`}
      <div class="rows">${e.rows.map(o=>x`
        <div class="row ${o.level}" @click=${()=>o2(this,o.entity)} role="button" tabindex="0"
          @keydown=${a=>(a.key==="Enter"||a.key===" ")&&o2(this,o.entity)}
          aria-label="${o.name}: ${mt[o.level]}${o.value!=null?`, ${o.value} of 5`:""}${o.trend?`, ${wA[o.trend]}`:""}">
          <ha-icon icon=${o.icon}></ha-icon>
          <span class="nm">${o.name}</span>
          <span class="bar"><i style="width:${o.pct}%"></i></span>
          <span class="chip">${mt[o.level]}</span>
          <span class="val">${o.value??"\u2014"}</span>
          ${t.show_tomorrow!==!1&&o.trend?x`<ha-icon class="tr ${o.trend}" icon=${bA[o.trend]} title=${`Tomorrow: ${o.tomorrow??"\u2014"}`}></ha-icon>`:x`<span></span>`}
        </div>`)}
      </div>
      ${t.show_season===!1?Z:x`<div class="slabel">Season</div><div class="strip" role="img" aria-label="Pollen season by month">
        ${e.strip.map((o,a)=>x`<span class="m ${o?`c${Math.min(o,3)}`:""} ${a+1===e.month?"now":""}"
          title="${ut[a]}: ${o} species in season"><i></i>${ut[a][0]}</span>`)}
      </div>`}
    `}};z(Q9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(Q9,"styles",[X1,l1`
      .hdr { font-size: 14px; color: var(--secondary-text-color); margin: 0 0 4px; }
      /* One grid for all rows so the bars and chips line up. */
      .rows { display: grid; grid-template-columns: 22px minmax(56px, max-content) minmax(40px, 1fr) max-content 2ch 16px; align-items: center; column-gap: 12px; font-size: 14px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; cursor: pointer; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); }
      .row:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 2px; }
      .row ha-icon { --mdc-icon-size: 18px; color: var(--wsfc-muted); }
      .nm { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
      .bar { height: 6px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); overflow: hidden; }
      .bar i { display: block; height: 100%; border-radius: 3px; background: var(--c); }
      .chip { font-size: 12px; padding: 2px 10px; border-radius: 999px; white-space: nowrap; text-align: center;
        background: color-mix(in srgb, var(--c) 22%, transparent); border: 1px solid color-mix(in srgb, var(--c) 60%, transparent); }
      .off .chip { background: rgba(127, 127, 127, 0.18); border-color: transparent; color: var(--secondary-text-color); }
      .val { text-align: right; font-weight: 500; }
      .tr { --mdc-icon-size: 16px; }
      .tr.up { color: var(--error-color, #db4437); }
      .tr.down { color: var(--success-color, #43a047); }
      .none { --c: var(--wsfc-muted); }
      .low { --c: var(--success-color, #43a047); }
      .medium { --c: var(--warning-color, #ffa600); }
      .high { --c: var(--error-color, #db4437); }
      .off { --c: rgba(127, 127, 127, 0.55); }
      .off .nm, .off .val { color: var(--wsfc-muted); }
      .slabel { font-size: 13px; color: var(--secondary-text-color); margin-top: 12px; }
      .strip { display: grid; grid-template-columns: repeat(12, 1fr); gap: 4px; margin-top: 4px; }
      .m { display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 11px; color: var(--secondary-text-color); }
      .m i { width: 100%; height: 10px; border-radius: 3px; background: rgba(127, 127, 127, 0.18); box-sizing: border-box; }
      .m.c1 i { background: #43a047; }
      .m.c2 i { background: #f2a81d; }
      .m.c3 i { background: #d93f37; }
      .m.now i { outline: 2px solid var(--primary-text-color); outline-offset: 0; }
    `]);customElements.get("wsfc-panel-pollen")||customElements.define("wsfc-panel-pollen",Q9);var SA=["pm2_5","pm10","ozone","co2"],yA={pm2_5:"mdi:blur",pm10:"mdi:blur-linear",ozone:"mdi:molecule",co2:"mdi:molecule-co2"},si=200,ZA=r=>r==null?"":i0[r].short||i0[r].name,kA=["Low","Moderate","Elevated","High","Very high","Very high"],K9=[0,50,100,150,200,300,500];function OA(r,t){if(r==null)return null;let e=Math.max(0,Math.min(r,K9[t])),i=K9.findIndex((a,n)=>n>0&&e<=a)-1;i<0&&(i=t-1);let o=(e-K9[i])/(K9[i+1]-K9[i]);return(i+o)/t*100}function TA(r,t,e){let i=r||{},o=k=>i.entities?.[k]||Mt(t,e,k),a=o("aqi"),n=I2(e,a),s=typeof n?.value=="number"?n.value:null,V=O9(s),c=a?e.states[a]:null,p=a&&Cs(e,a),h=p?I2(e,p)?.value:null,v=Array.isArray(i.pollutants)&&i.pollutants.length?i.pollutants:SA,g=[];for(let k of v){let T=o(k),F=I2(e,T);if(!T||!F||typeof F.value!="number")continue;let R=dt(k,F.value,F.unit),K=k!=="co2";g.push({k,e:T,label:Qr[k]?.label||k,icon:yA[k],value:F.value,unit:F.unit,index:R,level:O9(R),epa:K,digits:k==="ozone"&&!/ppm/i.test(F.unit)?1:a4(k,F.unit)})}for(let k of Array.isArray(i.extra)?i.extra:[]){let T=typeof k=="string"?k:k?.entity,F=I2(e,T);if(!F||typeof F.value!="number")continue;let R=e.states[T],K=k.label||R?.attributes?.friendly_name||T,G=Object.entries(Kr).find(([,e1])=>e1.re.test(`${T} ${K}`)),L1=Array.isArray(k.thresholds)&&k.thresholds.length?k.thresholds.map(Number):null,X=L1?dt(null,F.value,F.unit,L1):G?dt(G[0],F.value,F.unit):null;g.push({k:T,e:T,label:K,icon:k.icon||R?.attributes?.icon||"mdi:flask-outline",value:F.value,unit:F.unit,index:X,level:O9(X),epa:!1,digits:k.digits??(Math.abs(F.value)<1?3:Math.abs(F.value)<10?2:0)})}let y=c?.attributes?.main_pollutant||c?.attributes?.dominant_pollutant||g.filter(k=>k.epa&&k.index!=null).sort((k,T)=>T.index-k.index)[0]?.label||"",O=i.source||c?.attributes?.source||(a?_3(e,a):"");return{aqiE:a,aqi:s,level:V,name:c?.attributes?.description||c?.attributes?.category||(V!=null?i0[V].name:""),area:h,source:O,main:y,time:c?.attributes?.time||null,rows:g,entities:[a,p,...g.map(k=>k.e)].filter(Boolean)}}var l4=r=>r.level==null?"No standard":r.epa?ZA(r.level):kA[r.level],Et=r=>r.index==null?"":r.epa?`AQI ${r.index} \u2014 ${i0[r.level].name}`:`Index ${r.index} on the AQI scale`,Bs=r=>r.index==null?0:Math.min(100,r.index/si*100),Ft=r=>x`${B1(r.value,r.digits)}<small>${r.unit}</small>`,X9=class extends t1{shouldUpdate(t){if(t.size!==1||!t.has("hass"))return!0;let e=t.get("hass");return!e||!this._ids?!0:this._ids.some(i=>e.states[i]!==this.hass.states[i])}render(){if(!this.hass)return Z;let t=this.config||{},e=TA(t,this.station,this.hass);if(this._ids=e.entities,!e.aqiE&&!e.rows.length)return x`${E1(t,"mdi:air-filter","Air quality")}
        <div class="note">No air-quality sensors found. Add Home Assistant's AirNow integration (free key from airnowapi.org), an outdoor PM2.5 sensor, or set the entities under this panel's options.</div>`;let i=t.layout||"scale";return i==="scale"?x`${E1(t,"mdi:air-filter","Air quality")}${this._scaleLayout(e,t)}`:x`
      ${E1(t,"mdi:air-filter","Air quality")}
      ${e.aqiE&&t.show_aqi!==!1?this._aqi(e,t,i):Z}
      ${i==="rows"?this._rows(e):i==="bars"?this._bars(e,t):this._tiles(e)}
    `}_aqi(t,e,i){let o=t.level!=null?i0[t.level].color:"var(--wsfc-muted)",a=t.time?new Date(t.time):null,n=a&&!isNaN(a)?a.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",s=["US AQI",t.area,t.source&&t.source!==t.area?t.source:"",t.main?`main pollutant ${t.main}`:"",n].filter(Boolean).join(" \xB7 "),V=t.aqi!=null?Math.min(100,Math.min(t.aqi,300)/300*100):null,c=e.show_scale??i==="tiles";return x`
      <div class="top" @click=${()=>o2(this,t.aqiE)}>
        <span class="aqi" style="color:${o}">${B1(t.aqi)}</span>
        <div><div class="cat">${t.name||"\u2014"}</div><div class="sub">${s}</div></div>
      </div>
      ${c?x`
        <div class="scale" role="img" aria-label="AQI ${B1(t.aqi)} on a 0 to 300 scale">
          ${i0.slice(0,5).map((p,h)=>x`<span style="background:${p.color};flex:${h<4?50:100}"></span>`)}
          ${V!=null?x`<i class="mark" style="left:${V}%"></i>`:Z}
        </div>
        <div class="ticks">${[0,50,100,150,200,300].map(p=>x`<span style="left:${p/300*100}%">${p===300?"300+":p}</span>`)}</div>`:Z}`}_seg(t,e,i=!1){let o=e?6:5,a=OA(t,o),n=O9(t);return x`<div class="seg ${i?"big":""}" role="img" aria-hidden="true">
      ${i0.slice(0,o).map(s=>x`<span style="background:${s.color}"></span>`)}
      ${a!=null?x`<i class="knob" style="left:${a}%;--c:${i0[n].color}"></i>`:Z}
    </div>`}_scaleLayout(t,e){let i=t.time?new Date(t.time):null,o=i&&!isNaN(i)?i.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"}):"",a=[t.source,t.area,t.name,o].filter(Boolean).join(" \xB7 ");return x`
      ${a?x`<div class="hdr">${a}</div>`:Z}
      ${t.aqiE&&e.show_aqi!==!1?x`
        <div class="shead" @click=${()=>o2(this,t.aqiE)} role="button" tabindex="0"
          @keydown=${n=>(n.key==="Enter"||n.key===" ")&&o2(this,t.aqiE)}
          aria-label="Air Quality Index ${B1(t.aqi)}, ${t.name}${t.main?`, main pollutant ${t.main}`:""}">
          <span class="t">Air Quality Index</span>
          <span class="p">${t.main?`(${t.main})`:""}</span>
          <span class="n">${B1(t.aqi)}</span>
        </div>
        ${this._seg(t.aqi,!0,!0)}`:Z}
      ${t.rows.length?x`<div class="srows">${t.rows.map(n=>x`
        <div class="srow" style=${this._color(n)} role="button" tabindex="0" @click=${()=>o2(this,n.e)}
          @keydown=${s=>(s.key==="Enter"||s.key===" ")&&o2(this,n.e)}
          title=${Et(n)} aria-label="${n.label}: ${B1(n.value,n.digits)} ${n.unit}${n.level!=null?`, ${l4(n)}`:""}">
          <ha-icon icon=${n.icon}></ha-icon>
          ${n.level==null?x`<span class="nm">${n.label}</span><span class="plain">${Ft(n)}</span>`:x`<div><div class="nm">${n.label}</div><div class="nv">${B1(n.value,n.digits)} ${n.unit}</div></div>
              ${this._seg(n.index,n.epa)}
              <span class="rt">${l4(n)}</span>`}
        </div>`)}</div>`:Z}
    `}_color(t){return t.level!=null?`--c:${i0[t.level].color}`:""}_tiles(t){return t.rows.length?x`<div class="tiles">${t.rows.map(e=>x`
      <div class="tile" style=${this._color(e)} @click=${()=>o2(this,e.e)} title=${Et(e)||e.e}>
        <span class="dot"></span>
        <div><div class="n">${e.label}</div><div class="v">${Ft(e)}</div></div>
      </div>`)}</div>`:Z}_rows(t){return t.rows.length?x`<div class="rows">${t.rows.map(e=>x`
      <div class="row" style=${this._color(e)} role="button" tabindex="0" @click=${()=>o2(this,e.e)}
        @keydown=${i=>(i.key==="Enter"||i.key===" ")&&o2(this,e.e)}
        aria-label="${e.label}: ${B1(e.value,e.digits)} ${e.unit}, ${l4(e)}">
        <ha-icon icon=${e.icon}></ha-icon>
        <span>${e.label}</span>
        <span class="track"><i style="width:${Bs(e)}%"></i></span>
        <span class="chip ${e.level==null?"none":""}" title=${Et(e)}>${l4(e)}</span>
        <span class="val">${Ft(e)}</span>
      </div>`)}</div>`:Z}_bars(t,e){if(!t.rows.length)return Z;let i=Number(e.bar_height)||140,o=[50,100,150];return x`<div class="bars" style="--n:${t.rows.length};--h:${i}px">
      <div class="axis" style="margin-top:21px">${[0,...o,200].map(a=>x`<span style="bottom:${a/si*100}%">${a}</span>`)}</div>
      <div class="plot">${o.map(a=>x`<hr style="bottom:${a/si*100}%" />`)}</div>
      ${t.rows.map((a,n)=>x`
        <div class="col" style="grid-row:1;grid-column:${n+2};${this._color(a)}" role="button" tabindex="0"
          @click=${()=>o2(this,a.e)} @keydown=${s=>(s.key==="Enter"||s.key===" ")&&o2(this,a.e)}
          title=${Et(a)} aria-label="${a.label}: ${B1(a.value,a.digits)} ${a.unit}, ${l4(a)}">
          <span class="bv">${Ft(a)}</span>
          <span class="bt"><i style="height:${Bs(a)}%"></i></span>
          <span class="bn">${a.label}</span>
          <span class="bc">${l4(a)}</span>
        </div>`)}
    </div>`}};z(X9,"properties",{hass:{attribute:!1},config:{attribute:!1},station:{attribute:!1}}),z(X9,"styles",[X1,l1`
      :host { --g: #00e400; }
      .top { display: flex; align-items: center; gap: 14px; cursor: pointer; }
      .aqi { font-size: 40px; font-weight: 600; line-height: 1; min-width: 2.2ch; }
      .cat { font-size: 15px; font-weight: 500; }
      .sub { font-size: 12px; color: var(--wsfc-muted); }
      .scale { position: relative; display: flex; height: 8px; border-radius: 4px; overflow: hidden; margin: 12px 0 4px; }
      .scale span { flex: 1; opacity: 0.85; }
      .mark { position: absolute; top: -3px; width: 4px; height: 14px; margin-left: -2px; border-radius: 2px; background: var(--primary-text-color); box-shadow: 0 0 0 1px var(--card-background-color, #000); }
      .ticks { position: relative; height: 12px; font-size: 10px; color: var(--wsfc-muted); }
      .ticks span { position: absolute; transform: translateX(-50%); }
      .ticks span:first-child { transform: none; }
      .ticks span:last-child { transform: translateX(-100%); }
      small { font-size: 11px; font-weight: 400; color: var(--wsfc-muted); margin-left: 2px; }

      /* tiles */
      .tiles { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 6px; margin-top: 10px; }
      .tile { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 10px; background: rgba(127, 127, 127, 0.08); cursor: pointer; }
      .dot { width: 10px; height: 10px; border-radius: 50%; flex: 0 0 auto; background: var(--c, var(--wsfc-muted)); }
      .tile .n { font-size: 11px; color: var(--wsfc-muted); }
      .tile .v { font-size: 14px; font-weight: 500; white-space: nowrap; }

      /* rows */
      .hdr { font-size: 13px; color: var(--wsfc-muted); margin: 2px 0 6px; }
      .hdr b { color: var(--primary-text-color); font-weight: 500; }
      .rows { display: grid; grid-template-columns: 22px max-content minmax(40px, 1fr) max-content max-content; align-items: center; column-gap: 12px; margin-top: 6px; }
      .row { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); cursor: pointer; font-size: 14px; }
      .row:last-child { border-bottom: 0; }
      .row ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
      .track { height: 6px; border-radius: 3px; background: rgba(127, 127, 127, 0.22); overflow: hidden; }
      .track i { display: block; height: 100%; border-radius: 3px; background: var(--c, transparent); min-width: 0; }
      .chip { font-size: 12px; padding: 2px 10px; border-radius: 999px; white-space: nowrap; text-align: center;
        background: color-mix(in srgb, var(--c, #888) 22%, transparent); border: 1px solid color-mix(in srgb, var(--c, #888) 60%, transparent); }
      .chip.none { --c: rgba(127, 127, 127, 0.6); color: var(--wsfc-muted); }
      .val { text-align: right; font-weight: 500; white-space: nowrap; font-variant-numeric: tabular-nums; }

      /* scale (pollen style) */
      .shead { display: grid; grid-template-columns: 1fr auto auto; align-items: baseline; column-gap: 10px; cursor: pointer; }
      .shead .t { font-size: 16px; font-weight: 500; }
      .shead .p { font-size: 13px; color: var(--secondary-text-color); }
      .shead .n { font-size: 26px; font-weight: 600; line-height: 1.1; font-variant-numeric: tabular-nums; }
      .seg { position: relative; display: flex; gap: 2px; height: 10px; margin: 6px 0 4px; }
      .seg span { flex: 1; border-radius: 2px; opacity: 0.9; }
      .seg span:first-child { border-radius: 5px 2px 2px 5px; }
      .seg span:last-child { border-radius: 2px 5px 5px 2px; }
      .seg .knob { position: absolute; top: 50%; width: 18px; height: 18px; margin: -9px 0 0 -9px; border-radius: 50%;
        background: var(--c, #888); box-shadow: 0 0 0 3px var(--card-background-color, #1c1c1c), 0 1px 4px rgba(0, 0, 0, 0.5); }
      .seg.big { height: 14px; margin-top: 8px; }
      .seg.big .knob { width: 24px; height: 24px; margin: -12px 0 0 -12px; }
      .srows { display: grid; grid-template-columns: 22px max-content minmax(60px, 1fr) max-content; align-items: center; column-gap: 12px; margin-top: 8px; }
      .srow { display: grid; grid-template-columns: subgrid; grid-column: 1 / -1; align-items: center; padding: 8px 0; border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.25)); cursor: pointer; }
      .srow ha-icon { --mdc-icon-size: 20px; color: var(--wsfc-muted); }
      .srow .nm { font-size: 14px; line-height: 1.2; }
      .srow .nv { font-size: 12px; color: var(--secondary-text-color); white-space: nowrap; font-variant-numeric: tabular-nums; }
      .srow .seg { margin: 0; height: 8px; }
      .srow .seg .knob { width: 14px; height: 14px; margin: -7px 0 0 -7px; }
      .srow .rt { font-size: 12px; font-weight: 500; color: var(--c, var(--wsfc-muted)); min-width: 7ch; text-align: right; white-space: nowrap; }
      .srow .plain { grid-column: 3 / -1; text-align: right; font-size: 14px; }

      /* vertical bars */
      .bars { display: grid; grid-template-columns: 30px repeat(var(--n), minmax(36px, 1fr)); column-gap: 8px; margin-top: 10px; }
      .axis { position: relative; height: var(--h); font-size: 10px; color: var(--wsfc-muted); }
      .axis span { position: absolute; right: 0; transform: translateY(50%); }
      .col { display: flex; flex-direction: column; align-items: center; min-width: 0; cursor: pointer; }
      .col .bv { font-size: 13px; font-weight: 500; white-space: nowrap; margin-bottom: 4px; font-variant-numeric: tabular-nums; }
      .col .bt { position: relative; width: min(100%, 44px); height: var(--h); border-radius: 6px 6px 2px 2px; background: rgba(127, 127, 127, 0.14); overflow: hidden; }
      .col .bt i { position: absolute; left: 0; right: 0; bottom: 0; border-radius: 6px 6px 2px 2px; background: var(--c, transparent); }
      .col .bn { font-size: 12px; margin-top: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
      .col .bc { font-size: 10px; color: var(--wsfc-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%; }
      .plot { position: relative; grid-column: 2 / -1; grid-row: 1; height: var(--h); margin-top: 21px; pointer-events: none; }
      .plot hr { position: absolute; left: 0; right: 0; margin: 0; border: 0; border-top: 1px dashed rgba(127, 127, 127, 0.35); }
      .cols { display: contents; }
    `]);customElements.get("wsfc-panel-air-quality")||customElements.define("wsfc-panel-air-quality",X9);var Vi=30,J9=4,zs=10,Li=r=>r.title?r.title:r.type==="metric"?j1[r.metric]?.label||r.label||"Metric":r.type==="stack"?`Stack \xB7 ${(r.panels||[]).length}`:r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:(V2(r)?.label||r.type).replace(/ \(.*\)$/,""),Is=r=>r.icon||r.type==="metric"&&j1[r.metric]?.icon||V2(r)?.icon||"mdi:square-outline",t6=class extends t1{_gridIdx(){return(this.panels||[]).map((t,e)=>e).filter(t=>this.panels[t].display!=="popup")}render(){let t=this.panels||[],e=this._order||this._gridIdx(),i=t.map((o,a)=>a).filter(o=>t[o].display==="popup");return x`
      <div class="grid" style=${`--row:${Vi}px;--gap:${J9}px`}>
        ${e.map(o=>this._block(t[o],o))}
      </div>
      ${i.length?x`<div class="pops"><span>Pop-ups:</span>${i.map(o=>x`<span class="pop"><ha-icon icon=${Is(t[o])}></ha-icon>${Li(t[o])}</span>`)}</div>`:Z}
    `}_block(t,e){let i=this._size?.index===e?this._size:null,o=i?i.span:H7(t),a=i?i.rows:x0(t),n=`grid-column: span ${o}; grid-row: span ${Math.max(1,a)};`,s=["blk",t.show===!1?"hidden":"",this._drag?.index===e?"dragging":"",i?"sizing":"",t.type].join(" ");return x`<div class=${s} style=${n} data-i=${e} tabindex="0" role="button"
        aria-label=${`${Li(t)}, width ${o} of 12, height ${a||"auto"}. Arrow keys move; Shift+arrows resize.`}
        @pointerdown=${V=>this._startMove(V,e)} @keydown=${V=>this._key(V,e)}>
      <ha-icon icon=${Is(t)}></ha-icon>
      <span class="nm">${Li(t)}</span>
      <span class="dim">${o}×${a||"a"}</span>
      <span class="rz x" @pointerdown=${V=>this._startSize(V,e,"x")}></span>
      <span class="rz y" @pointerdown=${V=>this._startSize(V,e,"y")}></span>
      <span class="rz xy" @pointerdown=${V=>this._startSize(V,e,"xy")}></span>
    </div>`}_startMove(t,e){if(t.button!==0||t.target.classList.contains("rz"))return;t.preventDefault();let i=t.currentTarget;i.setPointerCapture(t.pointerId),this._order=this._gridIdx(),this._drag={index:e,x0:t.clientX,y0:t.clientY,moved:!1};let o=n=>this._onMove(n),a=()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerup",a),i.removeEventListener("pointercancel",a);let n=this._drag?.moved&&this._order.join()!==this._gridIdx().join(),s=this._order;this._drag=null,this._order=null,n&&this._commitOrder(s)};i.addEventListener("pointermove",o),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a)}_onMove(t){let e=this._drag;if(!e||!e.moved&&Math.hypot(t.clientX-e.x0,t.clientY-e.y0)<4)return;e.moved=!0;let i=[...this.renderRoot.querySelectorAll(".blk")].filter(s=>Number(s.dataset.i)!==e.index),o=null;for(let s of i){let V=s.getBoundingClientRect();if(t.clientX>=V.left&&t.clientX<=V.right&&t.clientY>=V.top&&t.clientY<=V.bottom){o={i:Number(s.dataset.i),after:t.clientX>V.left+V.width/2};break}}if(!o){let s=i[i.length-1]?.getBoundingClientRect();if(s&&t.clientY>s.bottom)o={i:Number(i[i.length-1].dataset.i),after:!0};else return}let a=this._order.filter(s=>s!==e.index),n=a.indexOf(o.i)+(o.after?1:0);a.splice(n,0,e.index),a.join()!==this._order.join()&&(this._order=a)}_commitOrder(t){let e=this.panels,i=t.map(a=>e[a]),o=e.map(a=>a.display==="popup"?a:i.shift());this._emit(o)}_startSize(t,e,i){if(t.button!==0)return;t.preventDefault(),t.stopPropagation();let o=t.currentTarget;o.setPointerCapture(t.pointerId);let n=(this.renderRoot.querySelector(".grid").clientWidth-11*J9)/12+J9,s=this.panels[e],V=H7(s),c=x0(s);this._size={index:e,span:V,rows:c};let p=t.clientX,h=t.clientY,v=y=>{let O=i==="y"?V:Math.max(1,Math.min(12,V+Math.round((y.clientX-p)/n))),T=i==="x"?c:Math.max(0,Math.min(zs,(c||1)+Math.round((y.clientY-h)/(Vi+J9))));i!=="x"&&c===0&&T===1&&Math.abs(y.clientY-h)<(Vi+J9)/2&&(T=0),(O!==this._size.span||T!==this._size.rows)&&(this._size={index:e,span:O,rows:T})},g=()=>{o.removeEventListener("pointermove",v),o.removeEventListener("pointerup",g),o.removeEventListener("pointercancel",g);let{span:y,rows:O}=this._size;this._size=null,(y!==V||O!==c)&&this._commitSize(e,y,O)};o.addEventListener("pointermove",v),o.addEventListener("pointerup",g),o.addEventListener("pointercancel",g)}_commitSize(t,e,i){let o=V2(this.panels[t])||{},a={...this.panels[t],span:e,rows:i};e===o.span&&delete a.span,i===(o.rows??0)&&delete a.rows;let n=this.panels.slice();n[t]=a,this._emit(n)}_key(t,e){let i=this._gridIdx(),o=i.indexOf(e);if(t.shiftKey){let a=this.panels[e],n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t.key];if(!n)return;t.preventDefault(),this._commitSize(e,Math.max(1,Math.min(12,H7(a)+n[0])),Math.max(0,Math.min(zs,x0(a)+n[1])))}else if(t.key==="ArrowLeft"||t.key==="ArrowRight"){t.preventDefault();let a=o+(t.key==="ArrowLeft"?-1:1);if(a<0||a>=i.length)return;let n=i.slice();[n[o],n[a]]=[n[a],n[o]],this._commitOrder(n),this.updateComplete.then(()=>this.renderRoot.querySelector(`.blk[data-i="${i[a]}"]`)?.focus())}}_emit(t){this.dispatchEvent(new CustomEvent("layout-changed",{detail:{panels:t}}))}};z(t6,"properties",{panels:{attribute:!1},_order:{state:!0},_size:{state:!0},_drag:{state:!0}}),z(t6,"styles",l1`
    :host { display: block; }
    .grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: var(--row);
      gap: var(--gap);
      padding: 6px;
      border-radius: 10px;
      background: rgba(127, 127, 127, 0.08);
      user-select: none;
      touch-action: none;
    }
    .blk {
      position: relative;
      min-width: 0;
      border-radius: 6px;
      border: 1px solid var(--divider-color, #444);
      background: var(--card-background-color, #222);
      color: var(--primary-text-color);
      display: flex;
      align-items: flex-start;
      gap: 4px;
      padding: 4px 6px;
      font-size: 11px;
      line-height: 1.2;
      cursor: grab;
      overflow: hidden;
      box-sizing: border-box;
      transition: box-shadow 0.12s;
    }
    .blk:focus-visible { outline: 2px solid var(--primary-color); outline-offset: 1px; }
    .blk.dragging { opacity: 0.55; cursor: grabbing; border-style: dashed; border-color: var(--primary-color); }
    .blk.sizing { border-color: var(--primary-color); box-shadow: 0 0 0 1px var(--primary-color); }
    .blk.hidden { opacity: 0.45; border-style: dashed; }
    .blk.hero { background: linear-gradient(135deg, rgba(3, 169, 244, 0.25), rgba(3, 169, 244, 0.05)); }
    .blk.heading, .blk.stack { background: transparent; }
    .blk ha-icon { --mdc-icon-size: 14px; flex: 0 0 auto; color: var(--primary-color); }
    .nm { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .dim { color: var(--secondary-text-color); font-size: 10px; flex: 0 0 auto; }
    .rz { position: absolute; z-index: 2; }
    .rz.x { top: 0; right: 0; width: 8px; height: 100%; cursor: ew-resize; }
    .rz.y { left: 0; bottom: 0; height: 8px; width: 100%; cursor: ns-resize; }
    .rz.xy { right: 0; bottom: 0; width: 12px; height: 12px; cursor: nwse-resize; background: linear-gradient(135deg, transparent 50%, var(--primary-color) 50%); opacity: 0.7; border-bottom-right-radius: 6px; }
    .pops { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 6px; font-size: 11px; color: var(--secondary-text-color); }
    .pop { display: inline-flex; gap: 4px; align-items: center; padding: 2px 8px; border-radius: 999px; border: 1px solid var(--divider-color, #444); color: var(--primary-text-color); }
    .pop ha-icon { --mdc-icon-size: 13px; }
  `);customElements.get("wsfc-layout-map")||customElements.define("wsfc-layout-map",t6);var Ns="__other__",e6=class extends t1{_name(t){let e=this.hass?.states?.[t],i=e?.attributes?.friendly_name||t,o=e&&!["unknown","unavailable"].includes(e.state)&&!t.startsWith("weather.")?` \xB7 ${e.state}${e.attributes?.unit_of_measurement?` ${e.attributes.unit_of_measurement}`:""}`:"";return`${i}${o}`}_emit(t){this._other=!1,this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!1}))}render(){let t=this.value||"",e=[...new Set([...this.candidates||[],...t?[t]:[]])].filter(o=>o!==this.defaultEntity||t===o),i=this.defaultLabel||(this.defaultEntity?`Default \u2014 ${this._name(this.defaultEntity)}`:"Default \u2014 none found");return x`
      <div class="row">
        <select class=${t?"":"def"} aria-label=${this.label||"Entity"} @change=${o=>{let a=o.target.value;if(a===Ns){this._other=!0,o.target.value=t;return}this._emit(a)}}>
          <option value="" ?selected=${!t}>${i}</option>
          ${e.map(o=>x`<option value=${o} ?selected=${o===t}>${this._name(o)}</option>`)}
          <option value=${Ns}>Other entity…</option>
        </select>
        ${t?x`<button type="button" title="Use the default sensor" @click=${()=>this._emit("")}>Default</button>`:Z}
      </div>
      ${this._other?x`<div class="picker"><ha-form .hass=${this.hass} .data=${{e:t}} .schema=${[{name:"e",selector:{entity:this.domain?{domain:this.domain}:{}}}]}
            .computeLabel=${()=>"Choose an entity"} @value-changed=${o=>{o.stopPropagation();let a=o.detail.value?.e;a&&this._emit(a)}}></ha-form></div>`:Z}
    `}};z(e6,"properties",{hass:{attribute:!1},value:{},defaultEntity:{attribute:!1},defaultLabel:{attribute:!1},candidates:{attribute:!1},domain:{},label:{},_other:{state:!0}}),z(e6,"styles",l1`
    :host { display: block; min-width: 0; }
    .row { display: flex; gap: 6px; align-items: center; min-width: 0; }
    select { flex: 1; min-width: 0; font: inherit; font-size: 12px; padding: 5px 8px; border-radius: 6px; border: 1px solid var(--ltek-c-border, #444); background: var(--card-background-color, #1c1c1c); color: var(--primary-text-color); }
    select.def { color: var(--secondary-text-color); }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; padding: 2px 4px; font: inherit; font-size: 11px; white-space: nowrap; }
    button:hover { color: var(--primary-color); }
    .picker { margin-top: 4px; }
  `);customElements.get("wsfc-entity-select")||customElements.define("wsfc-entity-select",e6);var PA=[["temperature","Temperature"],["apparent_temperature","Feels like"],["dew_point","Dew point"],["humidity","Humidity"],["pressure","Pressure"],["wind_speed","Wind speed"],["wind_gust_speed","Wind gust"],["wind_bearing","Wind direction"],["uv_index","UV index"],["solar_radiation","Solar radiation"],["illuminance","Illuminance"],["precipitation","Rain rate"],["visibility","Visibility"],["cloud_coverage","Cloud cover"],["ozone","Ozone"]],$t=r=>typeof r=="string"&&r.startsWith("device:"),r6=class extends t1{constructor(){super(),this._open=new Set}get _sources(){let t=this.config?.metric_sources||{};return Array.isArray(t.sources)?t.sources.filter(e=>e?.ref).map(e=>({ref:e.ref,overrides:{...e.overrides||{}},disabled:!!e.disabled})):this.config?.entity?[{ref:this.config.entity,overrides:{}}]:[]}_station(t){return{entity:this.config?.entity,metric_sources:{...this.config?.metric_sources||{},sources:t}}}_commit(t){let e=t.filter(c=>c?.ref).map(c=>{let p=Object.fromEntries(Object.entries(c.overrides||{}).filter(([,h])=>h));return{ref:c.ref,...Object.keys(p).length?{overrides:p}:{},...c.disabled?{disabled:!0}:{}}}),i={...this.config?.metric_sources||{}};delete i.primary,delete i.fallback,delete i.custom,delete i.device_map,e.length?i.sources=e:delete i.sources;let o=c=>(this.hass?.states?.[c]?.attributes?.supported_features&7)!==0,a=c=>c.map(p=>p.ref).filter(p=>typeof p=="string"&&p.startsWith("weather.")),n=a(e.filter(c=>!c.disabled)),s=a(e),V=n.find(o)||n[0]||s.find(o)||s[0]||this.config?.entity;this.dispatchEvent(new CustomEvent("sources-changed",{detail:{entity:V,metric_sources:Object.keys(i).length?i:void 0}}))}_info(t){let e=this.hass;if($t(t)){let o=e?.devices?.[t.slice(7)],a=C4(e,t.slice(7))[0];return{icon:"mdi:access-point",name:o?.name_by_user||o?.name||t.slice(7),kind:"Station device",sub:[o?.manufacturer,o?.model].filter(Boolean).join(" "),integ:_3(e,a)}}let i=e?.states?.[t];return t.startsWith("weather.")?{icon:"mdi:weather-partly-cloudy",name:i?.attributes?.friendly_name||t,kind:"Weather entity",sub:"forecast + condition",integ:_3(e,t)}:{icon:"mdi:eye-outline",name:i?.attributes?.friendly_name||t,kind:"Sensor",sub:t,integ:_3(e,t)}}_candidates(t,e){let i=this.hass;if(!$t(t))return[];let o=e&&i.states[e]?.attributes?.unit_of_measurement,a=t.slice(7),n=i.devices?.[a]?.config_entries||[];return[...new Set([a,...Object.entries(i.devices||{}).filter(([,V])=>(V.config_entries||[]).some(c=>n.includes(c))).map(([V])=>V)])].flatMap(V=>C4(i,V)).filter(V=>V.startsWith("sensor.")&&i.states[V]?.attributes?.unit_of_measurement&&(!o||i.states[V].attributes.unit_of_measurement===o)).sort()}render(){if(!this.hass)return Z;let t=this._sources,e=this._station(t),i=t.some(o=>o.ref.startsWith("weather.")&&!o.disabled);return x`
      <div class="list">
        ${t.map((o,a)=>this._source(o,a,t,e))}
      </div>
      ${i?Z:x`<p class="warn">Add a weather entity (e.g. OpenWeatherMap) — it supplies the forecast and condition.</p>`}
      ${this._adding?this._addForm(t):x`<button class="add" type="button" @click=${()=>this._adding=!0}><ha-icon icon="mdi:plus"></ha-icon>Add source</button>`}
    `}_source(t,e,i,o){let a=this._info(t.ref),n=this._open.has(t.ref),s=PA.map(([h,v])=>{let g=rs(o,this.hass,t.ref,h),y=t.ref.startsWith("weather.")?this.hass.states[t.ref]?.attributes?.[h]!=null:!!g;return{k:h,label:v,def:t.ref.startsWith("weather.")?y?t.ref:null:g,ov:t.overrides[h]||"",has:y||!!t.overrides[h]}}),V=s.filter(h=>h.has).length,c=h=>{let v=i.map(g=>({...g,overrides:{...g.overrides}}));h(v),this._commit(v)},p=()=>{let h=new Set(this._open);h.has(t.ref)?h.delete(t.ref):h.add(t.ref),this._open=h};return x`<div class="src ${n?"open":""} ${t.disabled?"off":""}">
      <div class="hd" @click=${p} role="button" tabindex="0" aria-expanded=${String(n)} @keydown=${h=>(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),p())}>
        <span class="rank">${e+1}</span>
        <ha-icon class="lead" icon=${a.icon}></ha-icon>
        <div class="tt">
          <div class="nm">${a.name}${t.disabled?x` <span class="tag">hidden</span>`:Z}</div>
          <div class="sb"><span class="pill">${a.kind}</span>${a.integ?x`<span class="pill integ">${a.integ}</span>`:Z}<span>${V} value${V===1?"":"s"}</span></div>
        </div>
        <span class="acts" @click=${h=>h.stopPropagation()}>
          <button class="ib" title="Higher priority" ?disabled=${e===0} @click=${()=>c(h=>[h[e-1],h[e]]=[h[e],h[e-1]])}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
          <button class="ib" title="Lower priority" ?disabled=${e===i.length-1} @click=${()=>c(h=>[h[e+1],h[e]]=[h[e],h[e+1]])}><ha-icon icon="mdi:arrow-down"></ha-icon></button>
          <button class="ib" title=${t.disabled?"Use this source":"Skip this source"} @click=${()=>c(h=>h[e].disabled=!h[e].disabled)}><ha-icon icon=${t.disabled?"mdi:eye-off":"mdi:eye"}></ha-icon></button>
          <button class="ib del" title="Remove source" @click=${()=>c(h=>h.splice(e,1))}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
        </span>
        <ha-icon class="chev" icon=${n?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </div>
      ${n?x`<div class="bd">
            ${a.sub?x`<div class="meta">${a.sub}</div>`:Z}
            <div class="tbl">
              ${s.filter(h=>h.has||$t(t.ref)).map(h=>{let v=h.ov||h.def,g=v&&!v.startsWith("weather.")?I2(this.hass,v):null,y=v?.startsWith("weather.")?this.hass.states[v]?.attributes?.[h.k]:null;return x`<span class="k">${h.label}</span>
                  <wsfc-entity-select .hass=${this.hass} .value=${h.ov} .defaultEntity=${h.def}
                    .defaultLabel=${t.ref.startsWith("weather.")&&!h.ov?h.def?"Default \u2014 attribute":"Default \u2014 none":void 0}
                    .candidates=${this._candidates(t.ref,h.def)} label=${h.label}
                    @value-changed=${O=>c(k=>k[e].overrides[h.k]=O.detail.value||void 0)}></wsfc-entity-select>
                  <span class="v">${g?`${g.value} ${g.unit}`:y!=null?String(y):""}</span>`})}
            </div>
            ${t.ref.startsWith("weather.")?x`<p class="hint">Only values this entity has are listed. Forecasts always come from the highest weather entity.</p>`:Z}
          </div>`:Z}
    </div>`}_addForm(t){let e=i=>{if(!i||t.some(n=>n.ref===i)){this._adding=!1;return}this._adding=!1;let o=t.slice(),a=o.findIndex(n=>n.ref.startsWith("weather."));$t(i)&&a>=0?o.splice(a,0,{ref:i,overrides:{}}):o.push({ref:i,overrides:{}}),this._commit(o)};return x`<div class="addbox">
      <ha-form .hass=${this.hass} .data=${{d:""}} .schema=${[{name:"d",selector:{device:{}}}]} .computeLabel=${()=>"Station device (e.g. your Ecowitt gateway or sensor)"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.d&&`device:${i.detail.value.d}`)}}></ha-form>
      <ha-form .hass=${this.hass} .data=${{e:""}} .schema=${[{name:"e",selector:{entity:{}}}]} .computeLabel=${()=>"\u2026or a weather entity or single sensor"}
        @value-changed=${i=>{i.stopPropagation(),e(i.detail.value?.e)}}></ha-form>
      <button class="add ghost" type="button" @click=${()=>this._adding=!1}>Cancel</button>
    </div>`}};z(r6,"properties",{hass:{attribute:!1},config:{attribute:!1},_open:{state:!0},_adding:{state:!0}}),z(r6,"styles",l1`
    :host { display: block; }
    .list { display: flex; flex-direction: column; gap: 6px; }
    .src { border: 1px solid var(--ltek-c-border-soft, #333); border-radius: var(--ltek-r-card, 10px); background: var(--ltek-c-surface-raised, rgba(255, 255, 255, 0.02)); }
    .src.open { border-color: var(--ltek-c-accent, var(--primary-color)); }
    .src.off .tt, .src.off .lead { opacity: 0.5; }
    .hd { display: flex; align-items: center; gap: 8px; padding: 8px 10px; cursor: pointer; }
    .rank { width: 18px; height: 18px; border-radius: 50%; background: var(--ltek-c-accent-fade, rgba(33, 150, 243, 0.12)); color: var(--ltek-c-accent, var(--primary-color)); font-size: 11px; font-weight: 700; display: grid; place-items: center; flex: 0 0 auto; }
    .lead { --mdc-icon-size: 20px; color: var(--primary-text-color); flex: 0 0 auto; }
    .tt { flex: 1; min-width: 0; }
    .nm { font-size: 13px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .sb { display: flex; flex-wrap: wrap; gap: 4px 6px; align-items: center; font-size: 11px; color: var(--secondary-text-color); margin-top: 2px; }
    .pill { padding: 0 7px; border-radius: 999px; border: 1px solid var(--ltek-c-border, #444); line-height: 16px; }
    .pill.integ { border-color: transparent; background: var(--ltek-c-accent-fade, rgba(33, 150, 243, 0.12)); color: var(--ltek-c-accent, var(--primary-color)); }
    .tag { font-size: 10px; font-weight: 400; color: var(--secondary-text-color); }
    .acts { display: flex; gap: 0; }
    .ib { border: 0; background: transparent; color: var(--ltek-c-icon, #aaa); cursor: pointer; padding: 3px; border-radius: 6px; line-height: 0; }
    .ib:hover:not([disabled]) { color: var(--ltek-c-icon-hover, #fff); background: var(--ltek-c-accent-fade-soft, rgba(33, 150, 243, 0.08)); }
    .ib.del:hover { color: var(--ltek-c-error, #f44336); }
    .ib[disabled] { opacity: 0.3; cursor: default; }
    .ib ha-icon { --mdc-icon-size: 16px; }
    .chev { --mdc-icon-size: 18px; color: var(--secondary-text-color); }
    .bd { padding: 0 10px 10px 36px; }
    .meta { font-size: 11px; color: var(--secondary-text-color); margin-bottom: 6px; font-family: monospace; }
    .tbl { display: grid; grid-template-columns: minmax(90px, auto) minmax(0, 1fr) auto; gap: 4px 10px; align-items: center; font-size: 12px; }
    .tbl .k { color: var(--ltek-c-label, #ccc); }
    .tbl .v { color: var(--secondary-text-color); white-space: nowrap; font-size: 11px; }
    .hint { margin: 6px 0 0; font-size: 11px; color: var(--secondary-text-color); }
    .warn { margin: 6px 0 0; font-size: 12px; color: var(--warning-color, #ffa600); }
    .add { display: inline-flex; align-items: center; gap: 6px; margin-top: 8px; font: inherit; font-size: 13px; padding: 6px 12px; border-radius: 6px; border: 0; background: var(--ltek-c-accent, var(--primary-color)); color: #fff; cursor: pointer; }
    .add.ghost { background: transparent; color: var(--primary-text-color); border: 1px solid var(--ltek-c-border, #444); }
    .add ha-icon { --mdc-icon-size: 16px; }
    .addbox { display: flex; flex-direction: column; gap: 6px; margin-top: 8px; padding: 10px; border: 1px dashed var(--ltek-c-border, #444); border-radius: 10px; }
  `);customElements.get("wsfc-sources-editor")||customElements.define("wsfc-sources-editor",r6);var c4=["#ff9800","#42a5f5","#26a69a","#ab47bc","#ef5350","#8d6e63","#fdd835","#78909c"],EA=r=>/^#[0-9a-f]{6}$/i.test(r||"")?r:/^#[0-9a-f]{3}$/i.test(r||"")?"#"+r.slice(1).split("").map(t=>t+t).join(""):"#888888";function FA(r){if(r.type==="statistics"){let t=r.preset||"temps",e=Pt[t]||{};return((Array.isArray(r.metrics)&&r.metrics.length?r.metrics:e.metrics||y3[t]?.metrics)||[]).map((o,a)=>({metric:o,color:r.colors?.[o],defColor:e.series?.[o]?.color||j1[o]?.color||c4[a%c4.length],entity:r.entity_overrides?.[o]||"",key:"map"}))}return Array.isArray(r.series)&&r.series.length?r.series.map((t,e)=>({metric:t.metric,idx:e,color:t.color,defColor:j1[t.metric]?.color||c4[e%c4.length],entity:t.entity||"",label:t.label,key:"list"})):(E9[r.type]||E9.graph).map((t,e)=>({metric:t.metric,color:r.colors?.[t.metric],defColor:t.color||j1[t.metric]?.color||c4[e%c4.length],entity:r.entities?.[t.metric]||"",key:"map"}))}var i6=class extends t1{_set(t,e,i){let o=H4(this.panel);if(t.key==="list")o.series[t.idx]=U0({...o.series[t.idx],[e]:i||void 0});else{let a=e==="color"?"colors":o.type==="statistics"?"entity_overrides":"entities";o[a]=U0({...o[a]||{},[t.metric]:i||void 0}),Object.keys(o[a]).length||delete o[a]}this.dispatchEvent(new CustomEvent("panel-changed",{detail:{panel:o}}))}_candidates(t){let e=t&&this.hass.states[t]?.attributes?.unit_of_measurement;return k9(this.station,this.hass).filter(i=>i.startsWith("sensor.")&&(!e||this.hass.states[i]?.attributes?.unit_of_measurement===e))}render(){if(!this.hass||!this.panel)return Z;let t=FA(this.panel),e=this.panel.type!=="statistics"||Hi(this.panel)==="sgcc";return x`<div class="tbl">
      <span class="h">Series</span><span class="h">Color</span><span class="h">Sensor</span>
      ${t.map(i=>{let o=v5(i.metric,this.station,this.hass),a=i.color||i.defColor;return x`<span class="k">${i.label||j1[i.metric]?.label||i.metric||"Series"}</span>
          <span class="c">
            ${e?x`<input type="color" .value=${EA(a)} title="Line color" aria-label="Line color" @change=${n=>this._set(i,"color",n.target.value)} />
                ${i.color?x`<button type="button" title="Default color" @click=${()=>this._set(i,"color","")}>↺</button>`:Z}`:x`<span class="na" title="Home Assistant's Statistics graph picks its own colors">auto</span>`}
          </span>
          <wsfc-entity-select .hass=${this.hass} .value=${i.entity} .defaultEntity=${o} .candidates=${this._candidates(o)} label=${`${i.metric} sensor`}
            @value-changed=${n=>this._set(i,"entity",n.detail.value)}></wsfc-entity-select>`})}
    </div>`}};z(i6,"properties",{hass:{attribute:!1},panel:{attribute:!1},station:{attribute:!1}}),z(i6,"styles",l1`
    .tbl { display: grid; grid-template-columns: minmax(80px, auto) auto minmax(0, 1fr); gap: 6px 10px; align-items: center; font-size: 12px; }
    .h { font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted, #888); }
    .k { color: var(--ltek-c-label, #ccc); }
    .c { display: flex; align-items: center; gap: 2px; }
    input[type="color"] { width: 30px; height: 24px; padding: 0; border: 1px solid var(--ltek-c-border, #444); border-radius: 6px; background: transparent; cursor: pointer; }
    button { border: 0; background: transparent; color: var(--secondary-text-color); cursor: pointer; font-size: 14px; padding: 0 2px; }
    .na { font-size: 11px; color: var(--ltek-c-muted, #888); }
  `);customElements.get("wsfc-series-editor")||customElements.define("wsfc-series-editor",i6);var $A=["temperature","apparent_temperature","dew_point","humidity","pressure","wind_speed","wind_gust_speed","wind_bearing","uv_index","solar_radiation","illuminance","precipitation"],RA={wind_bearing:"Wind direction",precipitation:"Rain rate"},li=[{name:"title",selector:{text:{}},helper:"Optional title row above the panels."},{name:"subtitle",selector:{text:{}}},{name:"icon",selector:{icon:{}}},{name:"layout",selector:{select:{options:[{value:"auto",label:"Size to content"},{value:"fullscreen",label:"Full screen (fills the view below the header)"}]}}},{name:"fit_height",selector:{boolean:{}},default:!0,helper:"Full screen: panels with a height share the screen height (row height is calculated)."},{name:"layout_size",selector:{select:{options:[{value:"auto",label:"Automatic (from the card's width)"},{value:"wide",label:"Wide \u2014 desktop layout"},{value:"medium",label:"Medium \u2014 tablet layout"},{value:"narrow",label:"Narrow \u2014 phone layout (stacked)"}]}},helper:"In a Sections view the card is only as wide as its section; widen the section or use a Panel view for the desktop layout."},{name:"background",selector:{select:{options:[{value:"none",label:"None (theme)"},{value:"animated",label:"Animated weather \u2014 the hero's animation behind the whole card"}]}},helper:"With the animated background, panels become semi-transparent and the hero stops drawing its own."},{name:"panel_opacity",selector:{number:{min:0,max:1,step:.05,mode:"slider"}},helper:"Animated background: panel opacity (0 = fully transparent, 1 = solid). Default 0.55."},{name:"panel_blur",selector:{number:{min:0,max:30,step:1,mode:"slider",unit_of_measurement:"px"}},helper:"Animated background: blur behind panels. Default 6."},{name:"lite_editing",selector:{boolean:{}},default:!0,helper:"While the dashboard or this card is being edited: no animated background or blur, and the radar and Windy maps show a placeholder. Keeps the editor responsive."},{name:"panel_bar",selector:{boolean:{}},default:!0,helper:"Panel buttons that show/hide panels or open pop-ups."},{name:"remember",selector:{boolean:{}},default:!0,helper:"Remember which panels were toggled, per browser."},{name:"row_height",selector:{number:{min:40,max:300,mode:"box",unit_of_measurement:"px"}},helper:"Height of one row unit (default 110)."},{name:"gap",selector:{number:{min:0,max:32,mode:"box",unit_of_measurement:"px"}},helper:"Space between panels (default 12)."}],Ws={layout:"auto",panel_bar:!0,remember:!0,fit_height:!0,layout_size:"auto",background:"none",panel_opacity:.55,panel_blur:6,lite_editing:!0},DA={entity:"Weather entity",title:"Title",subtitle:"Subtitle",icon:"Icon",layout:"Layout",panel_bar:"Panel buttons",remember:"Remember toggles",station_device:"Weather station device",layout_size:"Layout size",fit_height:"Fit panels to the screen height",row_height:"Row height",gap:"Gap",span:"Width",rows:"Height",display:"Display",in_bar:"Panel button",tile_background:"Panel background",show:"Shown",metric:"Metric",label:"Label",color:"Color",digits:"Decimals",chart:"Sparkline",hours:"Sparkline hours",show_minmax:"Show today's min/max",series:"Series",ranges:"Range buttons",range:"Default range",show_readings:"Show current readings",left_min:"Left axis min",left_max:"Left axis max",right_min:"Right axis min",right_max:"Right axis max","entities.temperature":"Temperature sensor","entities.dew_point":"Dew point sensor","entities.humidity":"Humidity sensor","entities.wind_speed":"Wind speed sensor","entities.wind_gust_speed":"Gust sensor","entities.wind_bearing":"Wind direction sensor",view:"Default view",show_chart:"Show speed/gust chart",rose_bins:"Rose speed bins",radar:"Radar loop",base_map:"Base map",zoom:"Zoom",latitude:"Latitude",longitude:"Longitude",radar_opacity:"Radar opacity",owm_api_key:"OpenWeatherMap API key",owm_layers:"OpenWeatherMap layers",owm_default:"Layer shown first",owm_opacity:"Layer opacity",base_map_url:"Custom tile URL",base_map_attribution:"Custom tile attribution",day_offset:"Day",icon_size:"Icon size",show_moon:"Show moon",show_sun:"Show sun",attribute:"Text attribute",alerts_entity:"Alerts sensor",card:"Card configuration",show_status:"Show station status",show_devices:"Show device names",overlay:"Layer",model:"Forecast model",level:"Altitude",wind_unit:"Wind unit",marker:"Location pin",preset:"Graph",engine:"Graph card",days_to_show:"Days",period:"Resolution",chart_type:"Chart type",stat_types:"Values",show_chart:"Altitude chart",show_arc:"Sun arc",show_sky:"Sky gradient & forecast row",timeframe:"Time window",hours:"Hours",anchor:"Now is",moon:"Moon at night",moon_phase:"Draw the moon phase",background:"Card background",panel_opacity:"Panel opacity",panel_blur:"Panel blur",sky_bar:"Sky Bar in the hero",show_facts:"Show sun times",moon_size:"Moon size",direction:"Direction",min_width:"Minimum width",grow:"Grow",show_bar:"Panel buttons here",lite_editing:"Pause animations and maps while editing",device:"Pollen location",hide_off_season:"Hide out-of-season species",hide_when_off_season:"Hide the panel out of season",species:"Species",max_rows:"Rows",show_tomorrow:"Tomorrow's trend",show_season:"Season strip",location:"Town",seasons:"Season months",entities:"Sensors",pollutants:"Pollutants",show_scale:"AQI scale",show_aqi:"Show the AQI",extra:"More readings",bar_height:"Bar height",source:"Source label","entities.aqi":"AQI sensor","entities.pm2_5":"PM2.5 sensor","entities.pm10":"PM10 sensor","entities.ozone":"Ozone sensor","entities.co2":"CO\u2082 sensor"},BA=(r,t)=>t.split(".").reduce((e,i)=>e==null?e:e[i],r);function zA(r,t,e){let i=t.split("."),o=r;i.slice(0,-1).forEach(n=>o=o[n]=o[n]&&typeof o[n]=="object"?{...o[n]}:{});let a=i[i.length-1];e===void 0||e===""||e===null||Array.isArray(e)&&!e.length?delete o[a]:o[a]=e}function ci(r,t,e={}){let i={};for(let o of t){let a=BA(r,o.name);i[o.name]=a!==void 0?a:e[o.name]!==void 0?e[o.name]:o.default}return i}function Mi(r,t,e,i={}){let o=H4(r);for(let a of t){let n=e[a.name],s=i[a.name]!==void 0?i[a.name]:a.default;s!==void 0&&JSON.stringify(n)===JSON.stringify(s)&&(n=void 0),zA(o,a.name,n)}return U0(o)}function IA(r){let t=V2(r);return{span:t.span,rows:t.rows,display:"grid",in_bar:s7({...r,in_bar:void 0}),show:!0}}function Us(r){let t=V2(r);return r.title?r.title:r.type==="metric"?j1[r.metric]?.label||r.label||"Metric tile":r.type==="day"?["Today","Tomorrow"][Number(r.day_offset??1)]||`Day +${r.day_offset}`:t.label}var o6=class extends t1{constructor(){super(),this._open=null,this._openPanel=null,this._addType="metric",this._flexEds=new Map}setConfig(t){this._config=t}shouldUpdate(t){if(t.size===1&&t.has("hass")){let e=t.get("hass"),i=this.hass;if(e&&i&&e.entities===i.entities&&e.devices===i.devices&&e.areas===i.areas&&e.themes===i.themes&&e.locale===i.locale&&e.language===i.language&&Date.now()-(this._renderedAt||0)<15e3)return this._hassTimer||(this._hassTimer=setTimeout(()=>{this._hassTimer=null,this.requestUpdate()},15e3)),!1}return!0}updated(){this._renderedAt=Date.now()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._hassTimer),this._hassTimer=null}get _panels(){return At(this._config)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}_emit(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_setPanels(t,e){let i={...this._withoutLegacyHero(),panels:t};for(let[o,a]of Object.entries(e||{}))a===void 0?delete i[o]:i[o]=a;this._emit(i)}_withoutLegacyHero(){let{hero:t,...e}=this._config;return t===!1?{...e,hero:t}:e}render(){return!this.hass||!this._config?Z:x`
      <div class="ed">
        <div class="hdr"><span class="name">${$4}</span><span class="ver">v${R6} · Weather Flex sections ${hs}</span></div>
        ${this._section("station","mdi:weather-cloudy-clock","Weather station",()=>this._stationEditor())}
        ${this._section("general","mdi:cog-outline","General",()=>this._general())}
        ${this._section("buttons","mdi:gesture-tap-button","Panel buttons",()=>this._buttonsEditor())}
        ${this._section("layout","mdi:view-dashboard-edit-outline","Layout",()=>this._layoutEditor())}
        ${this._section("hero","mdi:weather-partly-cloudy","Hero",()=>this._heroEditor())}
        ${this._section("panels","mdi:view-list-outline",`Panels (${this._panels.length})`,()=>this._panelList())}
      </div>
    `}_section(t,e,i,o){let a=this._open===t;return x`<details class="panel" ?open=${a} @toggle=${n=>{n.target.open?this._open=t:this._open===t&&(this._open=null)}}>
      <summary><ha-icon icon=${e}></ha-icon><span>${i}</span></summary>
      ${a?x`<div class="body">${o()}</div>`:Z}
    </details>`}_form(t,e,i){return x`<ha-form
      .hass=${this.hass}
      .data=${t}
      .schema=${e}
      .computeLabel=${o=>o.label||DA[o.name]||o.name}
      .computeHelper=${o=>o.helper}
      @value-changed=${o=>{o.stopPropagation(),i(o.detail.value)}}
    ></ha-form>`}_general(){return this._form(ci(this._config,li,Ws),li,t=>{let{panels:e,...i}=this._config,o=Mi(i,li,t,Ws);this._config.panels&&(o.panels=this._config.panels),this._emit(o)})}_stationDevice(){let t=(this._config.metric_sources?.sources||[]).find(e=>!e.disabled&&String(e.ref).startsWith("device:"));return t?t.ref.slice(7):void 0}_stationEditor(){let t=this._station,e=[...$A,"rain_today","battery","signal","rssi","aqi","pm2_5","pm10","ozone"].map(o=>{let a=j1[o]?.find||j1[o]?.aq?v5(o,t,this.hass):g3(t,this.hass,o)||(this.hass.states[t.entity]?.attributes?.[o]!=null?t.entity:null),n=a&&!a.startsWith("weather.")?I2(this.hass,a):null,s=a?.startsWith("weather.")?this.hass.states[a]?.attributes?.[o]:null;return{k:o,e:a,v:n?`${n.value} ${n.unit}`:s!=null?String(s):"",label:RA[o]||j1[o]?.label||o.replace(/_/g," "),integ:a?_3(this.hass,a):""}}),i=e.filter(o=>o.e).length;return x`
      <p class="hint">Sources are used top to bottom: for each value the first source that has it wins, and they apply to every panel. Add your station's <b>device</b> (sensors are mapped automatically, outdoor first) and a <b>weather entity</b> for the forecast and condition. Open a source to see or change what it supplies.</p>
      <wsfc-sources-editor .hass=${this.hass} .config=${{entity:this._config.entity,metric_sources:this._config.metric_sources}}
        @sources-changed=${o=>{let a={...this._config};o.detail.entity&&(a.entity=o.detail.entity),o.detail.metric_sources?a.metric_sources=o.detail.metric_sources:delete a.metric_sources,this._emit(a)}}></wsfc-sources-editor>
      <details class="sub">
        <summary><ha-icon icon="mdi:format-list-checks"></ha-icon><span>Values used</span><span class="cnt">${i} of ${e.length} found</span></summary>
        <div class="map">
          <span class="h">Value</span><span class="h">Entity</span><span class="h">Integration</span><span class="h">Now</span>
          ${e.map(o=>x`<span class="k">${o.label}</span><span class="e ${o.e?"":"none"}" title=${o.e||""}>${o.e||"not found"}</span><span class="i">${o.integ}</span><span class="v">${o.v}</span>`)}
        </div>
      </details>
      <details class="sub">
        <summary><ha-icon icon="mdi:information-outline"></ha-icon><span>Which Ecowitt integration?</span></summary>
        <p class="hint">Any of them works — Home Assistant's <b>Ecowitt</b>, <b>Ecowitt Local</b> or the <b>Ecowitt Official Integration</b> — and you can add more than one: e.g. the core integration for readings plus Ecowitt Local for battery, signal and RSSI (Station health panel). Home Assistant's own integration has no signal or RSSI sensors. With Ecowitt Local, add either its sensor or its gateway device; the other is found automatically.</p>
      </details>
    `}_heroEditor(){let t=this._panels,e=t.findIndex(o=>o.type==="hero");if(e<0)return x`<p class="hint">There is no hero panel. Add one here, or set the station under <b>Weather station</b>.</p>
        <button class="btn" @click=${()=>this._setPanels([{type:"hero"},...t])}><ha-icon icon="mdi:plus"></ha-icon>Add hero panel</button>`;let i=(o,a)=>{let n=t.slice();n[e]=o,this._setPanels(n,a)};return x`<p class="hint">Weather Flex Card's editor for the hero's sections. Weather Sources are under <b>Weather station</b>.</p>
      ${this._flexEditor(`${e}`,t[e],i)}`}_flexEditor(t,e,i){let o=`${t}:${e.type}`,a=this._flexEds.get(o);a||(a=document.createElement(ms),a.wsfcMode="sections",a.addEventListener("config-changed",c=>{c.stopPropagation(),a._wsfcOnChange?.(c.detail.config)}),this._flexEds.set(o,a));let n=c=>c.type==="sky_tracker"?oi(c,this._station):i5(P9(c.type,this._station),c.flex||{});a.wsfcPanels=V2(e)?.flexPanels||null,a._wsfcOnChange=c=>{let p=H4(e),h=As(c,n({...e,flex:void 0}));Object.keys(h).length?p.flex=h:delete p.flex,i(p)};let s=n(e),V=JSON.stringify(s);return a._wsfcJson!==V&&(a._wsfcJson=V,a.setConfig(s)),a.hass=this.hass,x`<div class="flexed">${a}</div>`}_layoutEditor(){return x`
      <p class="hint"><b>Drag</b> a panel to move it; drag its <b>right or bottom edge</b> (or the corner) to resize. Keyboard: arrows move, Shift+arrows resize. This is the desktop layout — tablets and phones adapt automatically. Dashed = hidden on load.</p>
      <wsfc-layout-map .panels=${this._panels} @layout-changed=${t=>{this._flexEds.clear(),this._openPanel=null,this._setPanels(t.detail.panels)}}></wsfc-layout-map>
    `}_panelList(){return x`
      <p class="hint">Edit, show/hide, duplicate, delete and add panels. Arrange them under <b>Layout</b>. To keep panels side by side on every screen, put them in a <b>Stack</b>.</p>
      ${this._list(this._panels,(t,e)=>this._setPanels(t,e),"")}
    `}_buttonsEditor(){let t=this._config,e=this._panels,i=e.findIndex(c=>c.type==="heading"),o=i>=0&&!!e[i].show_bar,a=t.panel_bar===!1?"hidden":o?"heading":"top",n=c=>{let p=e.map((h,v)=>v===i?U0({...h,show_bar:c==="heading"?!0:void 0}):h);c==="heading"&&i<0&&p.splice(1,0,{type:"heading",title:"Local measurements",show_status:!0,show_bar:!0}),this._setPanels(p,{panel_bar:c==="hidden"?!1:void 0})},s=(c,p)=>{let h=e.map((v,g)=>{if(!c.includes(g))return v;let y=s7({...v,in_bar:void 0});return U0({...v,in_bar:p===y?void 0:p})});this._setPanels(h)},V=e.map((c,p)=>p);return x`
      <div class="row-inline">
        <label for="bp">Buttons</label>
        <select id="bp" class="sel" @change=${c=>n(c.target.value)}>
          <option value="top" ?selected=${a==="top"}>Above the panels</option>
          <option value="heading" ?selected=${a==="heading"}>In the Button Menu panel</option>
          <option value="hidden" ?selected=${a==="hidden"}>Hidden</option>
        </select>
      </div>
      <p class="hint">A button toggles its panel (pop-up panels open instead). Panels without a button stay as they are.</p>
      <div class="btnbar">
        <button class="btn sm" @click=${()=>s(V,!0)}>All</button>
        <button class="btn sm ghost" @click=${()=>s(V,!1)}>None</button>
      </div>
      <div class="checks">
        ${e.map((c,p)=>x`<label class="chk">
          <input type="checkbox" .checked=${s7(c)} @change=${h=>s([p],h.target.checked)} />
          <ha-icon icon=${c.icon||c.type==="metric"&&j1[c.metric]?.icon||V2(c).icon}></ha-icon>
          <span>${Us(c)}</span>${c.display==="popup"?x`<span class="tag">pop-up</span>`:c.show===!1?x`<span class="tag">hidden on load</span>`:Z}
        </label>`)}
      </div>
    `}_list(t,e,i){let o=!!i,a=Object.entries(b3).filter(([V])=>V!=="map"&&!(o&&V==="hero")).sort(([V,c],[p,h])=>V==="hero"?-1:p==="hero"?1:c.label.localeCompare(h.label)),n=i||"top",s=(this._addTypes||(this._addTypes={}))[n]||(o?"metric":this._addType);return x`
      <div class="rows">${t.map((V,c)=>this._panelRow(V,c,t,e,i?`${i}.${c}`:`${c}`,o))}</div>
      <div class="add">
        <select class="sel" @change=${V=>{this._addTypes[n]=V.target.value,this.requestUpdate()}} aria-label="Panel type to add">
          ${a.map(([V,c])=>x`<option value=${V} ?selected=${V===s}>${c.label}</option>`)}
        </select>
        <button class="btn" @click=${()=>{let V={type:s};V.type==="metric"&&(V.metric="temperature"),V.type==="stack"&&(V.panels=[{type:"metric",metric:"temperature"},{type:"metric",metric:"humidity"}]),e([...t,V]),this._openPanel=i?`${i}.${t.length}`:`${t.length}`}}><ha-icon icon="mdi:plus"></ha-icon>${o?"Add to stack":"Add panel"}</button>
      </div>
    `}_panelRow(t,e,i,o,a,n){let s=V2(t),V=this._openPanel===a||String(this._openPanel||"").startsWith(`${a}.`),c=t.show===!1,p=()=>this._flexEds.clear(),h=O=>{let k=i.slice(),T=e+O;T<0||T>=k.length||([k[e],k[T]]=[k[T],k[e]],p(),this._openPanel=null,o(k))},v=(O,k)=>{let T=i.slice();T[e]=O,o(T,k)},g=n?`${t.grow!=null?`grow ${t.grow}`:""}${t.rows?` \xB7 ${t.rows} rows`:""}`:`${H7(t)}/12${x0(t)?` \xD7 ${x0(t)}`:""}${t.display==="popup"?" \xB7 pop-up":""}`,y=t.type==="stack"?`${t.direction==="vertical"?"Vertical":"Horizontal"} stack \xB7 ${(t.panels||[]).length} panels`:s.label;return x`<div class="row ${V?"open":""} ${c?"dim":""}">
      <div class="line">
        <ha-icon class="lead" icon=${t.icon||t.type==="metric"&&j1[t.metric]?.icon||(t.type==="stack"&&t.direction==="vertical"?"mdi:view-agenda-outline":s.icon)}></ha-icon>
        <div class="txt"><div class="n">${Us(t)}</div><div class="s">${y}${g?` \xB7 ${g}`:""}</div></div>
        ${n?x`<button class="ib" title="Move up" ?disabled=${e===0} @click=${()=>h(-1)}><ha-icon icon="mdi:arrow-up"></ha-icon></button>
              <button class="ib" title="Move down" ?disabled=${e===i.length-1} @click=${()=>h(1)}><ha-icon icon="mdi:arrow-down"></ha-icon></button>`:Z}
        ${n?Z:x`<button class="ib" title=${c?"Show when the dashboard loads":"Hide when the dashboard loads"} @click=${()=>v(U0({...t,show:c?void 0:!1}))}>
              <ha-icon icon=${c?"mdi:eye-off":"mdi:eye"}></ha-icon></button>`}
        <button class="ib" title="Edit" @click=${()=>this._openPanel=this._openPanel===a?null:a}><ha-icon icon=${V?"mdi:chevron-up":"mdi:pencil"}></ha-icon></button>
        <button class="ib" title="Duplicate" @click=${()=>{let O=i.slice();O.splice(e+1,0,H4(t)),p(),o(O)}}><ha-icon icon="mdi:content-copy"></ha-icon></button>
        <button class="ib del" title="Delete" @click=${()=>{let O=i.slice();O.splice(e,1),p(),this._openPanel=null,o(O)}}><ha-icon icon="mdi:delete-outline"></ha-icon></button>
      </div>
      ${V?this._panelBody(t,a,v,n):Z}
    </div>`}_panelBody(t,e,i,o){let a=V2(t),n=o?{}:IA(t),s=o?ds:Ms;t.type==="hero"&&(s=s.filter(v=>!["icon","display","in_bar"].includes(v.name)));let V=["graph","temp_humidity","uv_solar","statistics"].includes(t.type),c=["type","span","rows","display","in_bar","tile_background","show","id","span_medium","span_narrow","rows_compact","grow","min_width",...t.type==="metric"?["metric"]:[],...t.type==="statistics"?["preset"]:[],...t.type==="stack"?["panels","direction"]:[]],p=Object.keys(t).some(v=>!c.includes(v)),h=()=>i(Object.fromEntries(Object.entries(t).filter(([v])=>c.includes(v))));return x`<div class="pbody">
      <div class="resetbar">
        <button class="btn sm ghost" ?disabled=${!p} title="Keeps the panel's type, position and size" @click=${()=>{this._flexEds.clear(),h()}}>
          <ha-icon icon="mdi:restore"></ha-icon>Reset to default</button>
      </div>
      ${V?x`<div class="grp first">Series</div>
            <wsfc-series-editor .hass=${this.hass} .panel=${t} .station=${this._station} @panel-changed=${v=>i(v.detail.panel)}></wsfc-series-editor>`:Z}
      <div class="grp">Layout</div>
      ${this._form(ci(t,s,n),s,v=>i({type:t.type,...Mi(t,s,v,n)}))}
      ${a.schema.length?x`<div class="grp">${a.label} options</div>
            ${this._form(ci(t,a.schema),a.schema,v=>i({type:t.type,...Mi(t,a.schema,v)}))}`:Z}
      ${t.type==="stack"?x`<div class="grp">Panels in this stack</div>
            <div class="nest">${this._list(t.panels||[],(v,g)=>i({...t,panels:v},g),e)}</div>`:Z}
      ${a.flex?x`<div class="grp">${t.type==="sky_tracker"?"Arc & sky details":"Weather Flex sections"}</div>
            ${t.type==="sky_tracker"?x`<p class="hint">Fine-tune the arc (Sun Position) and the sky (Sky Bar): heights, colors, labels, ticks and the forecast row. Layers, time window and moon are set above and override the same options here.</p>`:Z}
            ${t.type==="hero"&&!o?x`<p class="hint">Also under Hero above.</p>`:this._flexEditor(e,t,i)}`:Z}
    </div>`}};z(o6,"properties",{hass:{attribute:!1},_config:{state:!0},_open:{state:!0},_openPanel:{state:!0},_addType:{state:!0}}),z(o6,"styles",l1`
    :host {
      display: block;
      /* --ltek-* editor chrome tokens: copied verbatim from CARD_DESIGN_SYSTEM.md §1. */
      --ltek-fs-panel-title: 16px;
      --ltek-fs-header: 15px;
      --ltek-fs-group: 14px;
      --ltek-fs-label: 13px;
      --ltek-fs-body: 12px;
      --ltek-fs-small: 11px;
      --ltek-fs-tiny: 10px;
      --ltek-fw-normal: 400;
      --ltek-fw-medium: 500;
      --ltek-fw-semibold: 600;
      --ltek-fw-bold: 700;
      --ltek-c-text: var(--primary-text-color, #e1e1e1);
      --ltek-c-label: #ccc;
      --ltek-c-muted: #888;
      --ltek-c-accent: var(--primary-color, #2196F3);
      --ltek-c-accent-fade: rgba(var(--rgb-primary-color,33,150,243),0.12);
      --ltek-c-accent-fade-soft: rgba(var(--rgb-primary-color,33,150,243),0.08);
      --ltek-c-error-fade: rgba(244,67,54,0.15);
      --ltek-c-error: var(--error-color, #f44336);
      --ltek-c-success: var(--success-color, #4caf50);
      --ltek-c-warning: var(--warning-color, #ffb300);
      --ltek-c-info: var(--info-color, #2196F3);
      --ltek-c-accent-lib: #7fd18a;
      --ltek-c-on-accent: #fff;
      --ltek-c-icon: #aaa;
      --ltek-c-icon-hover: #fff;
      --ltek-c-surface: rgba(255,255,255,0.015);
      --ltek-c-surface-raised: rgba(255,255,255,0.02);
      --ltek-c-panel-border: #3a3a3a;
      --ltek-c-border: #444;
      --ltek-c-border-soft: #333;
      --ltek-r-panel: 12px;
      --ltek-r-card: 10px;
      --ltek-r-md: 8px;
      --ltek-r-ctrl: 6px;
      --ltek-sp-1: 4px;  --ltek-sp-2: 6px;  --ltek-sp-3: 8px;
      --ltek-sp-4: 10px; --ltek-sp-5: 12px; --ltek-sp-6: 16px;
      --ltek-ctrl-pad: 6px 10px;
      --ltek-icon-sm: 16px;
      --ltek-icon-lg: 20px;
      --ltek-slider-val-w: 44px;
    }
    .ed { display: flex; flex-direction: column; gap: var(--ltek-sp-3); color: var(--ltek-c-text); font-size: var(--ltek-fs-body); }
    .hdr { display: flex; align-items: baseline; gap: var(--ltek-sp-3); flex-wrap: wrap; padding: 0 var(--ltek-sp-1); }
    .hdr .name { font-size: var(--ltek-fs-header); font-weight: var(--ltek-fw-bold); }
    .hdr .ver { font-size: var(--ltek-fs-small); color: var(--ltek-c-muted); }
    details.panel { border: 1px solid var(--ltek-c-panel-border); border-radius: var(--ltek-r-panel); background: var(--ltek-c-surface); }
    details.panel[open] { border-color: var(--ltek-c-accent); }
    summary { display: flex; align-items: center; gap: var(--ltek-sp-3); padding: var(--ltek-sp-5) var(--ltek-sp-6); cursor: pointer; font-size: var(--ltek-fs-panel-title); font-weight: var(--ltek-fw-semibold); list-style: none; }
    summary::-webkit-details-marker { display: none; }
    summary ha-icon { --mdc-icon-size: var(--ltek-icon-lg); color: var(--ltek-c-accent); }
    .body { padding: 0 var(--ltek-sp-5) var(--ltek-sp-5); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .hint { margin: 0; color: var(--ltek-c-muted); font-size: var(--ltek-fs-small); line-height: 1.4; }
    .rows { display: flex; flex-direction: column; gap: var(--ltek-sp-2); }
    .row { border: 1px solid var(--ltek-c-border-soft); border-radius: var(--ltek-r-card); background: var(--ltek-c-surface-raised); }
    .row.open { border-color: var(--ltek-c-accent); }
    .row.dim .txt, .row.dim .lead { opacity: 0.5; }
    .line { display: flex; align-items: center; gap: var(--ltek-sp-1); padding: var(--ltek-sp-2) var(--ltek-sp-3); }
    .lead { --mdc-icon-size: var(--ltek-icon-lg); color: var(--ltek-c-text); margin-right: var(--ltek-sp-2); }
    .txt { flex: 1; min-width: 0; }
    .txt .n { font-size: var(--ltek-fs-label); font-weight: var(--ltek-fw-medium); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .txt .s { font-size: var(--ltek-fs-small); color: var(--ltek-c-muted); }
    .ib { border: 0; background: transparent; color: var(--ltek-c-icon); cursor: pointer; padding: var(--ltek-sp-1); border-radius: var(--ltek-r-ctrl); line-height: 0; }
    .ib:hover:not([disabled]) { color: var(--ltek-c-icon-hover); background: var(--ltek-c-accent-fade-soft); }
    .ib.del:hover { color: var(--ltek-c-error); background: var(--ltek-c-error-fade); }
    .ib[disabled] { opacity: 0.3; cursor: default; }
    .ib ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    .pbody { padding: 0 var(--ltek-sp-4) var(--ltek-sp-4); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .resetbar { display: flex; justify-content: flex-end; }
    .btn[disabled] { opacity: 0.4; cursor: default; }
    .grp.first { margin-top: 0; border-top: 0; padding-top: 0; }
    .grp { font-size: var(--ltek-fs-group); font-weight: var(--ltek-fw-semibold); margin-top: var(--ltek-sp-3); border-top: 1px solid var(--ltek-c-border-soft); padding-top: var(--ltek-sp-3); }
    .add { display: flex; gap: var(--ltek-sp-3); align-items: center; }
    .sel { flex: 1; font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 1px solid var(--ltek-c-border); background: var(--card-background-color, #1c1c1c); color: var(--ltek-c-text); }
    .btn { display: inline-flex; align-items: center; gap: var(--ltek-sp-2); font: inherit; font-size: var(--ltek-fs-label); padding: var(--ltek-ctrl-pad); border-radius: var(--ltek-r-ctrl); border: 0; background: var(--ltek-c-accent); color: var(--ltek-c-on-accent); cursor: pointer; }
    .btn ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub { border: 1px solid var(--ltek-c-border-soft); border-radius: var(--ltek-r-card); }
    details.sub > summary { font-size: var(--ltek-fs-group); padding: var(--ltek-sp-3) var(--ltek-sp-4); gap: var(--ltek-sp-3); }
    details.sub > summary ha-icon { --mdc-icon-size: var(--ltek-icon-sm); }
    details.sub > summary .cnt { margin-left: auto; font-size: var(--ltek-fs-small); font-weight: var(--ltek-fw-normal); color: var(--ltek-c-muted); }
    details.sub > :not(summary) { margin: 0 var(--ltek-sp-4) var(--ltek-sp-4); }
    .map .h { font-size: var(--ltek-fs-tiny); text-transform: uppercase; letter-spacing: 0.04em; color: var(--ltek-c-muted); }
    .map .i { color: var(--ltek-c-accent); white-space: nowrap; }
    .map { display: grid; grid-template-columns: auto minmax(0, 1fr) auto auto; gap: 2px var(--ltek-sp-4); font-size: var(--ltek-fs-small); align-items: baseline; }
    .map .k { color: var(--ltek-c-label); }
    .map .e { font-family: monospace; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .map .e.none { color: var(--ltek-c-muted); font-family: inherit; font-style: italic; }
    .map .v { color: var(--ltek-c-muted); white-space: nowrap; }
    .row-inline { display: flex; align-items: center; gap: var(--ltek-sp-4); font-size: var(--ltek-fs-label); }
    .btnbar { display: flex; gap: var(--ltek-sp-3); }
    .btn.sm { padding: 3px 12px; font-size: var(--ltek-fs-body); }
    .btn.ghost { background: transparent; border: 1px solid var(--ltek-c-border); color: var(--ltek-c-text); }
    .checks { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 2px var(--ltek-sp-4); }
    .chk { display: flex; align-items: center; gap: var(--ltek-sp-2); font-size: var(--ltek-fs-label); padding: 3px 0; cursor: pointer; min-width: 0; }
    .chk span:not(.tag) { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .chk ha-icon { --mdc-icon-size: var(--ltek-icon-sm); color: var(--ltek-c-icon); flex: 0 0 auto; }
    .chk .tag { font-size: var(--ltek-fs-tiny); color: var(--ltek-c-muted); white-space: nowrap; }
    .nest { border-left: 2px solid var(--ltek-c-border); padding-left: var(--ltek-sp-3); display: flex; flex-direction: column; gap: var(--ltek-sp-3); }
    .flexed { border-left: 2px solid var(--ltek-c-accent-fade); padding-left: var(--ltek-sp-3); }
  `);customElements.get("weather-station-flex-card-editor")||customElements.define("weather-station-flex-card-editor",o6);var NA=720,WA=1100,C6=class extends t1{static getConfigElement(){return document.createElement("weather-station-flex-card-editor")}static getStubConfig(t){let e=Object.keys(t?.states||{}).find(a=>a.startsWith("weather.")),i=Object.values(t?.devices||{}).find(a=>/ecowitt/i.test(a.manufacturer||"")),o=[];return i&&o.push({ref:`device:${i.id}`}),e&&o.push({ref:e}),{entity:e||"weather.home",metric_sources:{sources:o}}}setConfig(t){if(!t?.entity||!String(t.entity).startsWith("weather."))throw new Error("entity is required: the weather entity that supplies the forecast and condition (e.g. weather.openweathermap)");let e=At(t);this._config={...t,panels:e},this._popup=null,this._focus=null,this._hidden=this._loadHidden(e)}_key(t,e){return t.id||`${e}:${t.type}`}_storageKey(){let t=this._config;return`wsfc:${t.storage_key||`${location.pathname}|${t.entity}|${t.title||""}`}`}_loadHidden(t){let e=new Set(t.map((i,o)=>i.show===!1?this._key(i,o):null).filter(Boolean));if(this._config?.remember===!1)return e;try{let i=JSON.parse(localStorage.getItem(this._storageKey())||"null");if(i&&Array.isArray(i.hidden)&&i.sig===this._sig(t))return new Set(i.hidden)}catch{}return e}_sig(t){return t.map((e,i)=>this._key(e,i)).join(",")}_saveHidden(){if(this._config?.remember!==!1)try{localStorage.setItem(this._storageKey(),JSON.stringify({sig:this._sig(this._config.panels),hidden:[...this._hidden]}))}catch{}}getCardSize(){return 12}getGridOptions(){return{columns:"full",rows:"auto",min_columns:6}}connectedCallback(){super.connectedCallback(),this._ro=new ResizeObserver(([t])=>{let e=t.contentRect.width,i=this._config||{},o=e<(i.narrow_width||NA)?"narrow":e<(i.medium_width||WA)?"medium":"wide";o!==this._size&&(this._size=o),this._width=e,this._scheduleFit()}),this._ro.observe(this),this._onKey=t=>{t.key==="Escape"&&(this._popup!=null?this._popup=null:this._focus!=null&&(this._focus=null))},window.addEventListener("keydown",this._onKey)}disconnectedCallback(){super.disconnectedCallback(),this._unwatchHourly?.(),this._unwatchHourly=null,this._hourlyFor=null,this._ro?.disconnect(),window.removeEventListener("keydown",this._onKey)}get _layoutSize(){let t=this._config?.layout_size;return["wide","medium","narrow"].includes(t)?t:this._size||"wide"}get _full(){return this._config?.layout==="fullscreen"&&this._layoutSize!=="narrow"}updated(){let t=JSON.stringify([this._config?.panels,[...this._hidden||[]],this._focus,this._layoutSize,this._config?.layout]);t!==this._fitKey&&(this._fitKey=t,this._scheduleFit(),clearTimeout(this._fitLate),this._fitLate=setTimeout(()=>this._scheduleFit(),1500))}_scheduleFit(){this._fitRaf||(this._fitRaf=requestAnimationFrame(()=>{this._fitRaf=null,this._fit()}))}_fit(){let t=this.renderRoot?.querySelector(".grid"),e=this.renderRoot?.querySelector(".scroller");if(!t||!e)return;let i=this._config;if(!this._full||i.fit_height===!1||this._focus!=null){t.style.getPropertyValue("--wsfc-row")&&t.style.removeProperty("--wsfc-row");return}let o=i.min_row_height||60,a=i.max_row_height||400,n=e.clientHeight;if(!n)return;let s=y=>(t.style.setProperty("--wsfc-row",`${y}px`),t.getBoundingClientRect().height),V=o,c=o+40,p=s(V),v=(s(c)-p)/(c-V),g=i.row_height||110;v>.5&&(g=Math.max(o,Math.min(a,V+(n-p)/v))),t.style.setProperty("--wsfc-row",`${Math.floor(g)}px`)}get _station(){return{entity:this._config.entity,metric_sources:this._config.metric_sources}}render(){if(!this._config||!this.hass)return Z;let t=this._config,e=this._full,i=this._animatedBg,o=this._lite,a=[t.row_height?`--wsfc-row:${t.row_height}px`:"",t.gap!=null?`--wsfc-gap:${t.gap}px`:"",i?`--wsfc-panel-opacity:${t.panel_opacity??.55}`:"",i?`--wsfc-panel-blur:${t.panel_blur??6}px`:""].join(";"),n=t.panels.some(s=>s.type==="heading"&&s.show_bar);return x`
      <ha-card class=${`wsfc ${e?"full":""} ${this._layoutSize} ${i?"animated":""} ${o?"lite":""}`} style=${a}>
        ${i&&!o?this._renderBackground():Z}
        ${t.title?this._renderTitle():Z}
        ${t.panel_bar===!1||n?Z:x`<div class="topbar">${this._renderBar()}</div>`}
        <div class="scroller"><div class="grid">${this._renderPanels()}</div></div>
        ${this._popup!=null?this._renderPopup():Z}
      </ha-card>
    `}get _lite(){return this._config?.lite_editing===!1?!1:!!(this.preview||this.editMode||/[?&]edit=1(&|$)/.test(globalThis.location?.search||""))}get _animatedBg(){return this._config?.background==="animated"}_renderBackground(){let t=this._config,e=this.hass.states[t.entity];if(!e)return Z;this._watchHourly();let i=t.background_effects??!0;return x`<wsfc-animation-provider class="bg"
      .hass=${this.hass}
      .weatherEntity=${e}
      .config=${{entity:t.entity,show_condition_effects:i,show_moon_phase:t.background_moon_phase??!0}}
      .currentForecast=${this._hourlyNow}
    ></wsfc-animation-provider>`}_watchHourly(){let t=this._config.entity;this._hourlyFor!==t&&(this._unwatchHourly?.(),this._hourlyFor=t,this._unwatchHourly=vt(this.hass,t,"hourly",e=>{this._hourlyNow=e?.[0],this.requestUpdate()}))}_renderTitle(){let t=this._config;return x`<div class="title-row">
      <ha-icon icon=${t.icon||"mdi:weather-windy"}></ha-icon>
      <span class="title">${t.title}</span>
      ${t.subtitle?x`<span class="subtitle">${t.subtitle}</span>`:Z}
    </div>`}_renderBar(){let e=this._config.panels.map((i,o)=>[i,o]).filter(([i])=>s7(i));return e.length?e.map(([i,o])=>{let a=V2(i),n=i.display==="popup"||this._isEmpty(i),s=n?this._popup===o:!this._hidden.has(this._key(i,o));return x`<button
        type="button"
        class="chip ${s?"on":""} ${n?"popup":""}"
        aria-pressed=${n?Z:String(s)}
        aria-haspopup=${n?"dialog":Z}
        @click=${()=>this._toggle(i,o)}
      >
        <ha-icon icon=${i.icon||a.icon}></ha-icon><span>${i.title||this._autoTitle(i)}</span>${n?x`<ha-icon class="open" icon="mdi:open-in-new"></ha-icon>`:Z}
      </button>`}):Z}_autoTitle(t){return t.type==="metric"?t.label||t.metric||"Metric":t.type==="day"?Number(t.day_offset??1)===0?"Today":Number(t.day_offset??1)===1?"Tomorrow":`Day +${t.day_offset}`:t.type==="radar"&&t.radar===!1?"Map":t.type==="wind_map"?"Wind map":t.type==="statistics"?t.title||{temps:"Temps",wind:"Wind graph",pressure_humidity:"Pressure",solar_uv:"Solar & UV",rain:"Rain",temperature_range:"Temp range"}[t.preset]||"Graph":V2(t).label.replace(/ \(.*\)$/,"")}_toggle(t,e){if(t.display==="popup"||this._isEmpty(t)){this._popup=this._popup===e?null:e;return}this._focus=null;let i=new Set(this._hidden),o=this._key(t,e);i.has(o)?i.delete(o):i.add(o),this._hidden=i,this._saveHidden()}_isHidden(t,e){return!s7(t)||this._config.panel_bar===!1?t.show===!1:this._hidden.has(this._key(t,e))}_isEmpty(t){let e=V2(t)?.hideWhen;try{return!!(e&&e(t,this.hass,this._station))}catch{return!1}}_renderPanels(){let t=this._config.panels,e=t.map((o,a)=>a).filter(o=>t[o].display!=="popup"&&!this._isHidden(t[o],o)&&!this._isEmpty(t[o]));if(this._focus!=null&&(e=[this._focus]),!e.length)return x`<div class="empty">All panels are hidden — use the panel buttons to show one.</div>`;let i=this._layoutSize;return e.map(o=>{let a=t[o],n=V2(a),s=ps(a,i),V=this._focus!=null?12:s.span,c=this._focus!=null?Math.max(x0(a),5):s.rows,p=`grid-column: span ${V};${c?`grid-row: span ${c};min-height:calc(${c} * var(--wsfc-row) + ${c-1} * var(--wsfc-gap));`:""}`,h=n.bare||a.type==="hero",v=a.display==="tile_popup",g=!h&&!v&&!["metric","stack"].includes(a.type)&&i!=="narrow",y=a.tile_background&&a.tile_background!=="default"?`bg-${a.tile_background}`:"";return x`<section class="tile ${a.type} ${n.bare?"bare":""} ${y} ${c?"":"auto"} ${v?"tap":""}" style=${p}>
        ${v?x`<button class="tap-open" type="button" aria-haspopup="dialog" aria-label=${`Open ${a.title||this._autoTitle(a)}`}
              @click=${()=>this._popup=o}><span><ha-icon icon="mdi:arrow-expand"></ha-icon>Open</span></button>`:Z}
        ${g?x`<button class="expand" type="button" @click=${()=>this._focus=this._focus==null?o:null}
              aria-label=${this._focus==null?`Expand ${a.title||this._autoTitle(a)}`:"Back to all panels"}>
              <ha-icon icon=${this._focus==null?"mdi:arrow-expand":"mdi:arrow-collapse"}></ha-icon>
            </button>`:Z}
        ${this._panelEl(a,o)}
      </section>`})}_renderPopup(){let t=this._popup,e=this._config.panels[t];if(!e)return Z;let i=()=>this._popup=null;return x`<div class="scrim" @click=${o=>o.target===o.currentTarget&&i()}>
      <div class="dialog tile ${e.type}" role="dialog" aria-modal="true" aria-label=${e.title||this._autoTitle(e)}>
        <button class="expand close" type="button" @click=${i} aria-label="Close"><ha-icon icon="mdi:close"></ha-icon></button>
        ${this._panelEl(e,t,!0)}
      </div>
    </div>`}_panelEl(t,e,i=!1){this._els||(this._els=new Map);let o=`${i?"pop":"grid"}:${e}:${JSON.stringify(t)}`,a=this._els.get(o);if(!a){a=document.createElement(V2(t).tag),this._els.set(o,a);for(let n of this._els.keys())n!==o&&n.startsWith(`${i?"pop":"grid"}:${e}:`)&&this._els.delete(n)}return a.config=t,a.station=this._station,a.cardBg=this._animatedBg,a.lite=this._lite,a.hass=this.hass,t.type==="heading"&&(a.bar=t.show_bar&&this._config.panel_bar!==!1?this._renderBar():null),a}};z(C6,"properties",{hass:{attribute:!1},preview:{type:Boolean},editMode:{type:Boolean},_config:{state:!0},_hidden:{state:!0},_popup:{state:!0},_focus:{state:!0},_size:{state:!0}}),z(C6,"styles",[B6,D6,l1`
    :host {
      display: block;
      --wsfc-gap: 12px;
      --wsfc-row: 110px;
      --wsfc-radius: var(--ha-card-border-radius, 16px);
      --wsfc-tile-bg: var(--wsfc-panel-background, rgba(127, 127, 127, 0.08));
    }
    ha-card.wsfc {
      display: flex;
      flex-direction: column;
      gap: var(--wsfc-gap);
      padding: var(--wsfc-gap);
      box-sizing: border-box;
      position: relative;
    }
    ha-card.full {
      /* Fill the view below the dashboard header; the grid scrolls inside. */
      height: calc(100vh - var(--header-height, 56px) - 16px);
      height: calc(100dvh - var(--header-height, 56px) - 16px);
      min-height: 480px;
    }
    /* The grid keeps its natural height (a definite-height grid would let
       Chrome shrink multi-row tiles below their content); the scroller fills
       the card and scrolls. */
    .scroller { min-height: 0; }
    .full .scroller { flex: 1; overflow: auto; }

    /* Animated card background: panels float over it, semi-transparent. */
    ha-card.animated { overflow: hidden; isolation: isolate; }
    ha-card.animated > :not(.bg) { position: relative; z-index: 1; }
    ha-card.animated { --wsfc-tile-bg: rgba(var(--rgb-card-background-color, 28, 28, 28), var(--wsfc-panel-opacity, 0.55)); }
    ha-card.animated .tile:not(.bare):not(.hero):not(.stack) { backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); -webkit-backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); }
    /* Editing: a still gradient instead of the animation, and no blur. */
    ha-card.animated.lite { background: linear-gradient(180deg, #24425f 0%, #172a3c 55%, #10202e 100%); }
    ha-card.animated.lite .tile:not(.bare):not(.hero):not(.stack) { backdrop-filter: none; -webkit-backdrop-filter: none; }
    /* Per-panel background: see-through (panel opacity), solid, or none. */
    .tile.bg-translucent { background: var(--wsfc-tile-bg); padding: 12px 14px; }
    ha-card.animated:not(.lite) .tile.bg-translucent { backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); -webkit-backdrop-filter: blur(var(--wsfc-panel-blur, 6px)); }
    .tile.bg-solid { background: var(--ha-card-background, var(--card-background-color, #1c1c1c)); padding: 12px 14px; }
    .tile.bg-none { background: transparent; }
    ha-card .tile.bg-solid, ha-card .tile.bg-none { backdrop-filter: none; -webkit-backdrop-filter: none; }
    ha-card.animated .dialog { --wsfc-tile-bg: var(--ha-card-background, var(--card-background-color, #1c1c1c)); }
    .bg { z-index: 0; border-radius: inherit; }

    /* "Tap to open larger": the tile is a live preview; one tap opens the pop-up. */
    .tile.tap { cursor: pointer; }
    /* The live preview never takes the pointer (a map would swallow taps), and
       its own stacking (Leaflet panes) stays under the open button. */
    .tile.tap > :not(.tap-open) { pointer-events: none; position: relative; z-index: 0; }
    .tap-open {
      position: absolute; inset: 0; z-index: 4;
      border: 0; padding: 0; margin: 0; background: transparent; cursor: pointer;
      border-radius: inherit; display: flex; align-items: flex-start; justify-content: flex-end;
    }
    .tap-open span {
      display: inline-flex; align-items: center; gap: 4px; margin: 8px;
      font: inherit; font-size: 12px; padding: 4px 10px; border-radius: 999px;
      color: var(--text-primary-color, #fff); background: rgba(0, 0, 0, 0.45);
    }
    .tap-open ha-icon { --mdc-icon-size: 14px; }
    .tap-open:focus-visible { outline: 2px solid var(--primary-color); outline-offset: -2px; }

    .title-row { display: flex; align-items: center; gap: 10px; }
    .title-row ha-icon { --mdc-icon-size: 30px; color: var(--primary-color); }
    .title-row .title { font-size: 26px; font-weight: 700; }
    .title-row .subtitle { font-size: 13px; color: var(--secondary-text-color); }

    .topbar { display: flex; gap: 8px; flex-wrap: wrap; flex: 0 0 auto; }
    .narrow .topbar { flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }

    .grid {
      display: grid;
      gap: var(--wsfc-gap);
      grid-template-columns: repeat(12, minmax(0, 1fr));
      grid-auto-rows: auto;
      align-content: start;
    }
    .expand {
      position: absolute; top: 8px; right: 8px; z-index: 3;
      border: 0; background: transparent; color: var(--secondary-text-color);
      cursor: pointer; padding: 4px; border-radius: 50%; line-height: 0;
    }
    .expand ha-icon { --mdc-icon-size: 18px; }
    .tile .expand ~ * { --wsfc-head-pad: 28px; }
    .empty { color: var(--secondary-text-color); padding: 24px; text-align: center; grid-column: 1 / -1; }

    .scrim {
      position: fixed; inset: 0; z-index: 10;
      background: rgba(0, 0, 0, 0.55);
      display: flex; align-items: center; justify-content: center;
      padding: 16px; box-sizing: border-box;
    }
    .dialog {
      width: min(1100px, 100%);
      height: min(760px, 100%);
      background: var(--ha-card-background, var(--card-background-color, #1c1c1c));
      box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
    }
  `]);customElements.get(F4)||customElements.define(F4,C6);window.customCards=window.customCards||[];window.customCards.some(r=>r.type===F4)||window.customCards.push({type:F4,name:`${$4} (Ltek)`,description:"Weather station dashboard: animated hero, metric tiles, graphs, wind, radar and maps, forecasts, sun & moon \u2014 in a resizable panel grid.",preview:!1});console.info(`%c${$4.toUpperCase()}%c ${R6}`,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");
/*! Bundled license information:

leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" --repo lodash/lodash#4.18.1 -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.4
   * https://github.com/kurkle/color#readme
   * (c) 2024 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.dataset.js:
chart.js/dist/helpers.js:
chart.js/dist/chart.js:
  (*!
   * Chart.js v4.5.1
   * https://www.chartjs.org
   * (c) 2025 Chart.js Contributors
   * Released under the MIT License
   *)

chartjs-plugin-datalabels/dist/chartjs-plugin-datalabels.esm.js:
  (*!
   * chartjs-plugin-datalabels v2.2.0
   * https://chartjs-plugin-datalabels.netlify.app
   * (c) 2017-2022 chartjs-plugin-datalabels contributors
   * Released under the MIT license
   *)
*/
